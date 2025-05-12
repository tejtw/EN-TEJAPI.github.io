# Python Documentation

The following documentation explains how to use the TEJ Python API to access the TEJ database.

### **Installation**

Simply install `tejapi` using pip.

!!! info "Install the Python package"

    ``` py 
    pip install tejapi 
    ```    

### **Authentication**                    

After installation, include the following lines at the beginning of your script

!!! info "in"

    ``` py 
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"    
    ```    

### **Global Parameters**

Use the `tejapi.ApiConfig.ignoretz` parameter to determine whether datetime fields should include timezone information (default is `False`, meaning timezone is shown).  
Set it to `True` to ignore timezones.

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    tejapi.ApiConfig.ignoretz = True    
    ```    

    

### **Retrieve Usage Information**

Use `tejapi.ApiConfig.info()` to retrieve various usage details.
    
!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    info = tejapi.ApiConfig.info() 
    ```    



#### Response Information Description

| Parameter         | Description                                              |
|-------------------|----------------------------------------------------------|
| `key`               | Your API key                                          |
| `startDate `        | API key activation date                                  |
| `endDate    `       | API key expiration date                                |
| `reqDayLimit `      | Daily request limit                                     |
| `rowsDayLimit `     | Daily row limit                                          |
| `rowsMonthLimit  `  | Monthly row limit                                        |
| `todayReqCount`     | Requests made today  `                                    |
| `todayRows  `     | Rows used today                                          |
| `monthRows   `      | Rows used this month                                     |
| `user `             | User information<br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`userId`</td><td>User ID</td></tr><tr><td>`name`</td><td>User name</td></tr><tr><td>`shortName`</td><td>User short name</td></tr><tr><td>`subscriptionStartDate`</td><td>Subscription start date</td></tr><tr><td>`subscriptionEndDate`</td><td>Subscription end date</td></tr><tr><td>`tables`</td><td>List of accessible tables</td></tr></tbody></table> |
  
## Data Query

The following section explains how to use the TEJ Python API to query data.

### **Usage**

Take the unadjusted stock price (daily) for listed (OTC) companies, `TWN/APRCD`, as an example. 
You can directly use the `tejapi.get()` method to retrieve the data, as shown in the example below.

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD')
    ```  

    
!!! tip 

    If no filter conditions are provided, all data will be retrieved. 
    It is recommended to apply appropriate filters as explained below.

### **Data Filtering**

If you need to filter by fields (e.g., only retrieve the Taiwan Weighted Index (Y9999)), simply add a filter condition such as `coid='Y9999'`:

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999')
    ```  

To retrieve two indices, `Y9999 and Y9998`, use a sequence condition:

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid=['Y9999','Y9998'])
    ```  

The system limits a single request to a maximum of 10,000 records. You may use `paginate=TRUE` to automatically fetch data in multiple batches:


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', paginate=True)
    ```  

!!! tip

    The system limits each request to a maximum of 10,000 records. You can use the paginate=TRUE parameter to retrieve data in batches, but the total number of records is capped at 1,000,000. Please use appropriate filters to reduce data volume.


Filtering across multiple columns is supported.

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', mdate='2018-01-20'
    ,paginate=True)
    ```  

### **Column Filtering**

To retrieve only a single column, use the `columns` parameter in `opts`. For example, to retrieve just the opening price `(open_d)`:

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',opts={'columns':'open_d'}) 
    ```  

For multiple columns (e.g., `mdate`, `open_d`):


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',opts={'columns':['mdate','open_d']})
    ```  

### **Data Filtering Operations**

You can filter data by value ranges. For example, to retrieve data with a trade date after `2018-01-01`:

!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999', mdate={'gt':'2018-01-01'},
    paginate=True)
    ```  

To retrieve data with a trade date between `2018-01-01 and 2018-02-01`:


!!! info "in"

    ``` py
    data = tejapi.get('TWN/APRCD',coid='Y9999',
    mdate={'gt':'2018-01-01','lt':'2018-02-01'}, paginate=True)
    ``` 

**Filter Operator** | **Description** | **Example**  
---|---|---  
`=`   | The field is **equal to** the specified value or string | `coid='Y9999'`  
`gt`  | The field is **greater than** the specified value       | `mdate={'gt': '2018-01-01'}`  
`lt`  | The field is **less than** the specified value          | `mdate={'lt': '2018-01-01'}`  
`gte` | The field is **greater than or equal to** the specified value | `mdate={'gte': '2018-01-01'}`  
`lte` | The field is **less than or equal to** the specified value    | `mdate={'lte': '2018-01-01'}`  
`ne`  | The field is **not equal to** the specified value       | `mdate={'ne': '2018-01-01'}`   
  
### **Query Parameters**

**Parameter** | **Required** | **Description** | **Example**  
---|---|---|---  
`columns`   | No  | Specify the fields to retrieve. Use commas to separate multiple field names. | `opts={'columns': ['coid', 'mdate', 'val']}`  
`per_page`  | No  | Number of records to retrieve per request (maximum is 10,000). Total records must not exceed 1,000,000. | `opts={'per_page': 100}`  
`sort`      | No  | Specify the sorting field and order using the format [field].[order]. Sorting order can be ascending (asc) or descending (desc). Default is ascending. | `opts={'sort': 'mdate.desc'}`  
`pivot`     | No  | Pivot table feature, transforms values into columns. <font color="red">Currently only supported for financial-related tables.</font> | `opts={'pivot': True}`  

  
### **Other Parameters**

**Parameter** | **Required** | **Description** | **Example**  
---|---|---|---  
`chinese_column_name` | No | Display column names in Chinese. | `chinese_column_name=True`   
  
## Table Information

The following documentation explains how to retrieve table metadata.

### **Usage**

!!! info "in"

    ``` py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    table_info = tejapi.table_info('TWN/APRCD')
    ```     
    

**Response Information Description**

| Parameter       | Description                                                                                                                   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------|
| `dbCode`          | Database code                                                                                                                     |
| `tableCode`       | Table code                                                                                                                        |
| `name`            | Table name                                                                                                                        |
| `description`     | Table description                                                                                                                 |
| `primaryKey`      | List of primary keys in the table                                                                                                 |
| `filters`         | Available filter fields for the table                                                                                             |
| `columns`         | Table column details<br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`name`</td><td>Column code</td></tr><tr><td>`cname`</td><td>Column name (Chinese)</td></tr><tr><td>`description`</td><td>Column description</td></tr><tr><td>`type`</td><td>Data type</td></tr><tr><td>`unit`</td><td>Unit</td></tr></tbody></table> |
| `pivot`           | Whether pivoting is supported                                                                                                     |
| `status`          | Table status<br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`status`</td><td>Status</td></tr><tr><td>`refreshed_at`</td><td>Latest Data Format Modification Time</td></tr></tbody></table> |
  
## Search Tables

The following documentation explains how to search for tables using keywords.

### **Usage**

!!! info "in"

    ```py
    import tejapi
    tejapi.ApiConfig.api_key = "YOURAPIKEY"
    search = tejapi.search_table("keyword")
    ```

**The response is an array representing multiple results. Each item contains the following information:**

| Parameter   | Description |
|-------------|-------------|
| `matchType`   | Match type<br><ul><li>`TABLE_MATCH`: Keyword is found in the table name or description</li><li>`COLUMN_MATCH`: Keyword is found in the column name or description</li><li>`TABLE_MATCH & COLUMN_MATCH`: Keyword is found in both the table and column names or descriptions</li></ul> |
| `tableId`     | Table ID |
| `tableName`   | Table name |
| `tableDesc`   | Table description |
| `columns`     | Table column information<br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`name`</td><td>Column code</td></tr><tr><td>`cname`</td><td>Column name (Chinese)</td></tr><tr><td>`description`</td><td>Column description</td></tr><tr><td>`type`</td><td>Data type</td></tr><tr><td>`unit`</td><td>Unit</td></tr></tbody></table> |

