#[Company Attribute] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ANPRCSTD
    - **Data Range**: Taiwan Market 
    - **Data Period**: Current
    - **Code Column**: coid
    - **Publication Date Column**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions

| #   | Field Name    | Data Type      | Field Descriptions        |
|-----|---------------|----------------|---------------------------|
| 1   | coid          | char(7)        | Company Code              |
| 2   | mdate         | datetime       | Status                    |
| 3   | stk_name      | varchar(20)    | Chinese Symbol            |
| 4   | stk_f_chi     | varchar(50)    | Chinese Company Name      |
| 5   | enm           | varchar(40)    | English Symbol            |
| 6   | stk_eng       | varchar(30)    | English Company Name      |
| 7   | ind_ban       | varchar(8)     | Ban Code                  |
| 8   | mkt           | varchar(10)    | Market                    |
| 9   | stype         | varchar(10)    | English Security Type     |
| 10  | stypenm       | varchar(20)    | Chinese Security Type     |
| 11  | list_date     | datetime       | Date of Listing           |
| 12  | delis_date    | datetime       | Date of Delisting         |
| 13  | tejind        | varchar(5)     | TEJ Industry Code         |
| 14  | tejindnm      | varchar(20)    | TEJ Industry Name         |
| 15  | tseind        | varchar(3)     | TWSE/OTC Industry Code    |
| 16  | tseindnm      | varchar(20)    | TWSE/OTC Industry Name    |



## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ANPRCSTD.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ANPRCSTD')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ANPRCSTD')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ANPRCSTD");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ANPRCSTD")
        ```



