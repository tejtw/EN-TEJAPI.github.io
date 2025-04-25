
# Python 說明文件

## Python使用設定

以下文件將說明如何使用TEJ Python API來存取TEJ 資料庫。

## **安裝方式**

僅需要利用 pip 安裝 tejapi

!!! info "in"

    ``` py 
    pip install tejapi 
    ```    

## **認證方式**                    

安裝完成後，需要在您的程式前面加上

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"    
    ```    

## **全域參數**

利用 `tejapi.ApiConfig.ignoretz` 參數決定時間欄位是否顯示時區(預設為`False`啟用)，設定為 `True`則忽略時區

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    tejapi.ApiConfig.ignoretz = True    
    ```    

    

## **取得使用資訊**

利用 `tejapi.ApiConfig.info()`可取得各類使用資訊
    
!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    info = tejapi.ApiConfig.info() 
    ```    



### **回應資訊說明**

| 參數             | 詳細說明            |
|------------------|---------------------|
| `key`              | 您的 APIKEY         |
| `startDate`        | APIKEY 開始使用日    |
| `endDate`          | APIKEY 結束日        |
| `reqDayLimit`      | 每日呼叫次數上限      |
| `rowsDayLimit`     | 每日資料筆數上限      |
| `rowsMonthLimit`   | 每月資料筆數上限      |
| `todayReqCount`    | 本日呼叫次數         |
| `todayRows`        | 本日資料筆數         |
| `monthRows`        | 本月資料筆數         | 
| `user`             | 使用者資訊<br><table><thead><tr><th>參數</th><th>詳細說明</th></tr></thead><tbody><tr><td>`userId`</td><td>使用者編號</td></tr><tr><td>`name`</td><td>使用者名稱</td></tr><tr><td>`shortName`</td><td>使用者名稱</td></tr><tr><td>`subscriptionStartDate`</td><td>訂閱開始日</td></tr><tr><td>`subscriptionEndDate`</td><td>訂閱結束日</td></tr><tr><td>`tables`</td><td>可以使用的表格列表</td></tr></tbody></table> |
  
# 查詢資料

以下將說明如何使用TEJ Python API查詢資料。

## **使用方式**

以上市(櫃)未調整股價(日) `TWN/APRCD`為例，可直接使用 `tejapi.get()`方法取得，範例如下


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD')
    ```  

    
!!! tip "提示"

    若沒有提供篩選條件，會取出所有資料，建議使用下段介紹的篩選方式，加入適當的篩選條件。



## **資料篩選**

如果需要針對欄位篩選，例如僅須取得台灣加權股價指數(Y9999)，請直接增加欄位篩選條件 `coid='Y9999'`

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999')
    ```  

或是同時取得兩種指數資料`Y9999及Y9998`，請利用序列條件 coid=['Y9999','Y9998']

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid=['Y9999','Y9998'])
    ```  

單次取得資料限制最多10,000筆，您可以增加 `paginate=True`，程式將自動分次取得資料

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', paginate=True)
    ```  

!!! tip "提示"

    系統限制單次取得最大筆數為10,000筆，可使用 paginate=True 參數分次取得資料，但總筆數單次最多為1,000,000筆。請斟酌使用篩選條件降低筆數。


您可以針對多個欄位做篩選


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', mdate='2018-01-20'
    ,paginate=True)
    ```  

## **欄位篩選**

若僅需要取得單一欄位，請利用特殊參數 `opts`中的`columns`條件，例如僅須取得開盤價欄位`open_d`


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',opts={'columns':'open_d'}) 
    ```  

或是多個欄位(mdate,open_d)



!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',opts={'columns':['mdate','open_d']})
    ```  

## **資料篩選運算**

您可以針對資料欄位範圍篩選，例如交易日大於`2018-01-01`的資料



!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', mdate={'gt':'2018-01-01'},
    paginate=True)
    ```  

您可以針對資料欄位範圍篩選，例如交易日大於`2018-01-01且小於2018-02-01`的資料



!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999',
    mdate={'gt':'2018-01-01','lt':'2018-02-01'}, paginate=True)
    ``` 

**篩選運算** | **詳細說明** | **使用範例**  
---|---|---  
`=` | 指定欄位**等於**指定的文字或數值 | `coid='Y9999'  `
`gt` | 指定欄位**大於**指定的數值 | `mdate={'gt':'2018-01-01'}  `
`lt` | 指定欄位**小於**指定的數值 | `mdate={'lt':'2018-01-01'}  `
`gte` | 指定欄位**大於或等於**指定的數值 | `mdate={'gte':'2018-01-01'} ` 
`lte` | 指定欄位**小於或等於**指定的數值 | `mdate={'lte':'2018-01-01'} ` 
`ne` | 指定欄位**不等於**指定的數值 | `mdate={'ne':'2018-01-01'}  `
  
## **查詢參數**

**參數** | **是否必要** | **詳細說明** | **使用範例**  
---|---|---|---  
`columns` | 否 | 指定需要取得的欄位，欄位名稱用逗號隔開 | `opts={'columns':['coid','mdate','val']}  `
`per_page` | 否 | 指定每次取得的資料數量(上限為10000)，總筆數不得超過1,000,000筆 |`opts={'per_page':100} ` 
`sort` | 否 | 指定排序的欄位及排序方式，採用 [欄位名稱].[排序方式]表示，排序方式有正向排序(asc)及反向排序(desc)，預設為正向排序。 | `opts={'sort':'mdate.desc'}  `
`pivot` | 否 | 轉置表格功能，可讓資料變成欄位。<font color="red">目前僅支援財務相關表格</font>  | `opts={'pivot':True}`  

  
## **其他參數**

**參數** | **是否必要** | **詳細說明** | **使用範例**  
---|---|---|---  
`chinese_column_name` | 否 | 欄位以中文顯示 | `chinese_column_name=True ` 
  
# 表格資訊

以下文件將說明如何取得表格資訊。

## **使用方法**

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    table_info = tejapi.table_info('TWN/APRCD')
    ```     
    

### **回應資訊說明**

| **參數**        | **詳細說明**   |
|----------------|------------------|
| `dbCode`       | 資料庫代碼       |
| `tableCode`    | 資料表代碼       |
| `name`         | 資料表名稱       |
| `description`  | 資料表詳細說明   |
| `primaryKey`   | 資料表主鍵列表   |
| `filters`      | 資料表可篩選欄位 |
| `columns`      | 資料表欄位說明<br><table><thead><tr><th>**參數**</th><th>**詳細說明**</th></tr></thead><tbody><tr><td>`name`</td><td>欄位代碼</td></tr><tr><td>`cname`</td><td>欄位中文名稱</td></tr><tr><td>`description`</td><td>欄位說明</td></tr><tr><td>`type`</td><td>欄位資料格式</td></tr><tr><td>`unit`</td><td>單位</td></tr></tbody></table> |
| `pivot`        | 是否支援轉置     |
| `status`       | 資料表狀態<br><table><thead><tr><th>**參數**</th><th>**詳細說明**</th></tr></thead><tbody><tr><td>`status`</td><td>狀態</td></tr><tr><td>`refreshed_at`</td><td>最新資料時間</td></tr></tbody></table> |
  
# 搜尋表格

以下文件將說明利用關鍵字搜尋表格。

## **使用方法**

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    search = tejapi.search_table("關鍵字")
    ``` 

    

### **將回應陣列型態，表示多筆資料，每筆資料資訊如下**
  
|**參數** | **詳細說明**|
|-------|--------|
|`matchType` | 匹配類別<ul><li>`TABLE_MATCH`:關鍵字在表格名稱或說明中</li><li>`COLUMN_MATCH`:關鍵字在欄位名稱或說明中</li><li>`TABLE_MATCH & COLUMN_MATCH`:關鍵字在表格及欄位名稱或說明中</li></ul>
|`tableId` |資料表代碼|
|`tableName` |資料表名稱|
|`tableDesc` |資料表詳細說明|
| `columns` | 資料表欄位說明<br><table><tr><th>參數</th><th>詳細說明</th></tr><tr><td>`name`</td><td>欄位代碼</td></tr><tr><td>`cname`</td><td>欄位中文名稱</td></tr><tr><td>`description`</td><td>欄位說明</td></tr><tr><td>`type`</td><td>欄位資料格式</td></tr><tr><td>`unit`</td><td>單位</td></tr></table>|

