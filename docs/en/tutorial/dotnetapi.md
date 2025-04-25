# .NET Documentation

## **.NET**

The following document explains how to use the Tejapi.NET API to access the TEJ database.

### Installation
!!! example

    === "nuget"
        
        ## Please install Tejapi.NET
        ### Supported Platforms
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
        Please refer to the package information of Tejapi.NET on nuget.org.

    === ".net framework 4"
        ## **Please install Tejapi.NET4**
        ### Supported Platforms
        <div style="margin-left: 10px;">

        - .NET Framework 4.0 or above
        </div>
        ``` bash
        PM> Install-Package Tejapi.NET4
        ```
        Please refer to the package information of Tejapi.NET4 on nuget.org.<br>
        Or directly download Tejapi.NET4.zip here.



### **Authentication Method**
After installation, you need to add a reference to your program.

!!! example

    === "c#"

        ``` c#
        using Tejapi;
        ```

    === "vb.net"

        ``` vb.net
        Imports Tejapi
        ```
Initialize the object and fill in your APIKEY.

!!! example

    === "c#"

        ``` c#
        var client = new TejClient("<YOURAPIKEY>");
        ```

    === "vb.net"

        ``` vb.net
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        ```
### **Usage**
Take the listed (uncorrected) stock prices (daily) TWN/APRCD as an example. You can directly use the Tejapi method to retrieve the data, and the returned class is <span style="font-family: 'Courier New', monospace;background-color: black; color: white;">System.Data.Datatable</span>.
Example as follows:

!!! example

    === "c#"

        ``` c#
        //Asynchronously fetch data (nuget)
        var result = await client.GetAsync("TWN/APRCD");

        //Or synchronously (nuget)
        var result = await client.GetAsync("TWN/APRCD").Result;

        //.NET Framework 4 only uses synchronous
        var result = client.Get("TWN/APRCD");var client = new TejClient("<YOURAPIKEY>");
        ```

    === "vb.net"

        ``` vb.net
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        ```

!!! tip "Tip"
    If no filter condition is provided, all data will be retrieved. It is recommended to use the filter method introduced below to add appropriate filter conditions.

### **Data Filtering**
If you need to filter by column, such as only retrieving the Taiwan Weighted Stock Index (Y9999), you can directly add the column filter condition coid=Y9999.

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
Or to retrieve two indices, Y9999 and Y9998, at the same time, use the sequence condition coid=Y9999,Y9998.

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
The data retrieval limit is up to 10,000 records per request, and you can add paginate:true, so the system will automatically paginate the data.

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

!!! tip "Tip"
    The system limits the maximum number of records to 10,000 per request. You can use the paginate:true parameter to paginate the data, but the total number of records is limited to 1,000,000. Please consider using filter conditions to reduce the number of records

You can filter by multiple columns, and conditions are separated by <span style="font-family: 'Courier New', monospace;background-color: black; color: white;">&</span>.

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

### **Column Filtering**
If you only need to retrieve a single column, use the columnFilterCriteria condition. For example, if you only need to retrieve the opening price column (open_d):

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

Or multiple columns, separated by a comma <span style="font-family: 'Courier New', monospace;background-color: black; color: white;">,</span>, for example, mdate,open_d.

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

### **Data Filtering Operations**
You can filter data by column range, such as retrieving data where the transaction date is greater than 2018-01-01.

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

You can filter data by column range, such as retrieving data where the transaction date is greater than 2018-01-01 and less than 2018-02-01.

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

| Filtering Operation  | 	Description                         | 	Example               |
|----------|---------------------------------|-----------------------|
| `=`      | Specifies that the field equals a certain value     | `coid=Y9999`          |
| `>`      | Specifies that the field is greater than a certain value           | `mdate>2018-01-01`    |
| `<`      | 	Specifies that the field is less than a certain value           | `mdate<2018-01-01`    |
| `>=`     | 	Specifies that the field is greater than or equal to a certain value     | `mdate>=2018-01-01`   |
| `<=`     | 	Specifies that the field is less than or equal to a certain value     | `mdate<=2018-01-01`   |
| `!=`     | 	Specifies that the field is not equal to a certain value         | `mdate!=2018-01-01`   |

### **Other Query Parameters**
| Parameter       | Required | Description                                                                 | Example         |
|------------|----------|--------------------------------------------------------------------------|------------------|
| `perPage`  | No       | Specifies the number of records to retrieve per request (maximum of 10,000); total records cannot exceed 1,000,000.         | `perPage:100`    |
| `sortOrder`| No       | Specifies the sorting column and order, using [column_name].[sort_order] format. Sort order can be ascending (asc) or descending (desc). Default is ascending. | `sortOrder:"mdate.desc"` |

