# R Documentation

The following documentation explains how to use the TEJ R API to access the TEJ database.

### **Installation**

Simply use R's built-in `install.packages` to install the `tejapi` package:

!!! info "Install the R package" 
    ```r
    install.packages("Tejapi")
    ```

### **Authentication**

After installation, include the following lines at the beginning of your script:

!!! example "Authentication"
    ```r
    library("Tejapi")
    Tejapi.api_key("YOURAPIKEY")
    ```

### **Usage**

Take the unadjusted stock price (daily) for listed (OTC) companies, TWN/APRCD, as an example. You can directly retrieve it using the `Tejapi` method, as shown below:

!!! example "API Data Retrieval Example for Stock Prices(TWN/APRCD)"
    ```r
    priceData <- Tejapi("TWN/APRCD")
    ```

!!! tip "Note:"
    If no filter conditions are provided, all data will be retrieved. It is recommended to apply appropriate filters as explained below.

### **Data Filtering**

If you need to filter by fields (e.g., only retrieve the Taiwan Weighted Index (Y9999)), simply add a filter condition such as `coid='Y9999'`:

!!! example "Single Column Filtering"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid='Y9999')
    ```

To retrieve two indices, `Y9999` and `Y9998`, use a sequence condition:

!!! example "Multiple Value Selection"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid=c('Y9999','Y9998'))
    ```

The system limits a single request to a maximum of 10,000 records. 

You may use `paginate=TRUE` to automatically fetch data in multiple batches:

!!! example "Pagination for Large Data Sets"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid='Y9999', paginate=TRUE)
    ```

!!! tip "Note:"
    The system limits each request to a maximum of 10,000 records. You can use the `paginate=TRUE` parameter to retrieve data in batches, but the total number of records is capped at 1,000,000. Please use appropriate filters to reduce data volume.

You can also apply multiple field filters:

!!! example "Multiple Column Filtering Syntax"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid='Y9999', mdate='2018-01-20', paginate=TRUE)
    ```



### **Column Filtering**

To retrieve only a single column, use the `columns` parameter in `opts`. 

For example, to retrieve just the opening price (`open_d`):

!!! example "Retrieve the opening price column (open_d)"
    ```r
    priceData <- Tejapi('TWN/APRCD', opts.columns='open_d')
    ```

For multiple columns (e.g., `mdate`, `open_d`):

!!! example " c( ' mdate ' , ' open_d ' ) "
    ```r
    priceData <- Tejapi('TWN/APRCD', opts.columns=c('mdate','open_d'))
    ```


### **Data Filtering Operations**
You can filter data by value ranges. 

For example, to retrieve data with a trade date after 2018-01-01:

!!! example "Retrieving data where the transaction date is greater than 2018-01-01"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid='Y9999', mdate.gt='2018-01-01', paginate=TRUE)
    ```

To retrieve data with a trade date between 2018-01-01 and 2018-02-01:

!!! example "Retrieving data where the transaction date is greater than 2018-01-01 and less than 2018-02-01"
    ```r
    priceData <- Tejapi('TWN/APRCD', coid='Y9999', mdate.gt='2018-01-01', mdate.lt='2018-02-01', paginate=TRUE)
    ```

| Filter Operator | Description                              | Example                                |
|-----------------|------------------------------------------|----------------------------------------|
| `=`               | Field is equal to the specified value     | `coid='Y9999'`                           |
| `gt`              | Field is greater than the specified value | `mdate.gt='2018-01-01'`                  |
| `lt`              | Field is less than the specified value    | `mdate.lt='2018-01-01'`                  |
| `gte`             | Field is greater than or equal to value   | `mdate.gte='2018-01-01'`                 |
| `lte`             | Field is less than or equal to value      | `mdate.lte='2018-01-01'`                 |
| `ne`              | Field is not equal to the specified value | `mdate.ne='2018-01-01'`                  |

### **Query Parameters**

| Parameter  | Required | Description                                                                 | Example                                       |
|------------|----------|-----------------------------------------------------------------------------|-----------------------------------------------|
| `columns`    | No       | Specifies the fields to retrieve, separated by commas                      | `opts.columns=c('coid','mdate','val')`         |
| `per_page`   | No       | Number of records per request (max 10,000); total records ≤ 1,000,000       | `opts.per_page=100`                            |
| `sort`       | No       | Sort by field and order using `[field].[order]` format (`asc` or `desc`)    | `opts.sort='mdate.desc'`                       |
| `pivot`      | No       | Pivot table function; converts data into columns (only for financial tables) | `opts.pivot='true'`                             |
