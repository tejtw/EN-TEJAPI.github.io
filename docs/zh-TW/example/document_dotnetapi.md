# .NET 說明文件

## **.NET**

以下文件將說明如何使用Tejapi.NET API來存取TEJ 資料庫。

### 安裝方式
!!! example

    === "nuget"
        
        ## **請使用安裝 Tejapi.NET**
        ### 支援平台
        <div style="margin-left: 10px;">

        - .NET Core 2.0
        - .NET Framework 4.6.1 or above
        - Xamarin.iOS
        - Xamarin.Android
        - Universal Windows Platform
        </div>
        ``` bash
        PM> Install-Package Tejapi.NET
        ```
        請參考nuget.org上的套件 Tejapi.NET資訊。

    === ".net framework 4"
        ## **請使用安裝 Tejapi.NET4**
        ### 支援平台
        <div style="margin-left: 10px;">

        - .NET Framework 4.0 or above
        </div>
        ``` bash
        PM> Install-Package Tejapi.NET4
        ```
        請參考nuget.org上的套件 Tejapi.NET4資訊。<br>
        或直接在此下載 Tejapi.NET4.zip



### **認證方式**
安裝完成後，需要在您的程式前面加上參考

!!! example

    === "c#"

        ``` c#
        using Tejapi;
        ```

    === "vb.net"

        ``` vb.net
        Imports Tejapi
        ```
初始化物件並填入您的 APIKEY

!!! example

    === "c#"

        ``` c#
        var client = new TejClient("<YOURAPIKEY>");
        ```

    === "vb.net"

        ``` vb.net
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        ```
### **使用方式**
以上市(櫃)未調整股價(日) TWN/APRCD為例，可直接使用 Tejapi方法取得，回傳類別為 <span style="font-family: 'Courier New', monospace;background-color: black; color: white;">System.Data.Datatable</span>
範例如下

!!! example

    === "c#"

        ``` c#
        //非同步取得資料(nuget)
        var result = await client.GetAsync("TWN/APRCD");

        //或採同步(nuget)
        var result = await client.GetAsync("TWN/APRCD").Result;

        //.net framework4僅採同步
        var result = client.Get("TWN/APRCD");var client = new TejClient("<YOURAPIKEY>");
        ```

    === "vb.net"

        ``` vb.net
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        ```

!!! tip "提示"
    若沒有提供篩選條件，會取出所有資料，建議使用下段介紹的篩選方式，加入適當的篩選條件。

### **資料篩選**
如果需要針對欄位篩選，例如僅須取得台灣加權股價指數(Y9999)，請直接增加欄位篩選條件 coid=Y9999

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter)
        ```
或是同時取得兩種指數資料Y9999及Y9998，請利用序列條件 coid=Y9999,Y9998

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999,Y9998";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999,Y9998"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter)
        ```
單次取得資料限制最多10,000筆，您可以增加 paginate:true，程式將自動分次取得資料

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter, paginate:true);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,paginate:=True)
        ```

!!! tip "提示"
    系統限制單次取得最大筆數為10000筆，可使用 paginate:true 參數分次取得資料，但總筆數最多為1,000,000筆。請斟酌使用篩選條件，降低筆數。

您可以針對多個欄位做篩選 ，條件式用<span style="font-family: 'Courier New', monospace;background-color: black; color: white;">&</span>隔開

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999&mdate=2018-12-05";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter, paginate:true)

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999&mdate=2018-12-05"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,paginate:=True)
        ```

### **欄位篩選**
若僅需要取得單一欄位，請利用columnFilterCriteria條件，例如僅須取得開盤價欄位(open_d)

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999";
        var columnFilter = "open_d";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter,columnFilter, paginate:true);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter,columnFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999&mdate=2018-12-05"
        Dim columnFilter = "open_d"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,columnFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,columnFilter,paginate:=True)
        ```

或是多個欄位，使用逗號<span style="font-family: 'Courier New', monospace;background-color: black; color: white;">,</span>隔開，例如 mdate,open_d

!!! example

    === "c#"

        ``` c#
        var rowFilter = "coid=Y9999";
        var columnFilter = "mdate,open_d";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter,columnFilter, paginate:true);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter,columnFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "coid=Y9999&mdate=2018-12-05"
        Dim columnFilter = "mdate,open_d"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,columnFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,columnFilter,paginate:=True)
        ```

### **資料篩選運算**
您可以針對資料欄位範圍篩選，例如交易日大於2018-01-01的資料

!!! example

    === "c#"

        ``` c#
        var rowFilter = "mdate>2018-01-01";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter, paginate:true);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "mdate>2018-01-01"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,paginate:=True)
        ```

您可以針對資料欄位範圍篩選，例如交易日大於2018-01-01且小於2018-02-01的資料

!!! example

    === "c#"

        ``` c#
        var rowFilter = "mdate>2018-01-01&mdate<2018-02-01";
        //nuget
        var result = await client.GetAsync("TWN/APRCD",rowFilter, paginate:true);

        //.net framework4
        var result = client.Get("TWN/APRCD",rowFilter, paginate:true);
        ```

    === "vb.net"

        ``` vb.net
        Dim rowFilter = "mdate>2018-01-01&mdate<2018-02-01"
        //nuget
        Dim result As DataTable = Await client.GetAsync("TWN/APRCD",rowFilter,paginate:=True)

        //.net framework4
        Dim result As DataTable = client.Get("TWN/APRCD",rowFilter,paginate:=True)
        ```

| 篩選運算  | 詳細說明                         | 使用範例                |
|----------|---------------------------------|-----------------------|
| `=`      | 指定欄位等於指定的文字或數值     | `coid=Y9999`          |
| `>`      | 指定欄位大於指定的數值           | `mdate>2018-01-01`    |
| `<`      | 指定欄位小於指定的數值           | `mdate<2018-01-01`    |
| `>=`     | 指定欄位大於或等於指定的數值     | `mdate>=2018-01-01`   |
| `<=`     | 指定欄位小於或等於指定的數值     | `mdate<=2018-01-01`   |
| `!=`     | 指定欄位不等於指定的數值         | `mdate!=2018-01-01`   |

### 其他查詢參數
| 參數       | 是否必要 | 詳細說明                                                                 | 使用範例         |
|------------|----------|--------------------------------------------------------------------------|------------------|
| `perPage`  | 否       | 指定每次取得的資料數量(上限為10,000)，總筆數不得超過1,000,000筆         | `perPage:100`    |
| `sortOrder`| 否       | 指定排序的欄位及排序方式，採用 `[欄位名稱].[排序方式]` 表示，排序方式有正向排序(asc)及反向排序(desc)，預設為正向排序。 | `sortOrder:"mdate.desc"` |

