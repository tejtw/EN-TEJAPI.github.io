#[SBL information-Returned transaction inquiry] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ASBL
    - **Data Source**: Taiwan Stock Exchange (TWSE) and Taipei Exchange (TPEx)
    - **Reference Code Table**: TWN/ANPRCST
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

| #   | Field Name   | Data Type     | Field Description	                       | Unit     | Field Descriptions                                                                     |
|-----|-------------|----------------|------------------|----------|--------------------------------------|
| 1   | coid        | char(7)        | Company_ID       | -        | Security code                        |
| 2   | mdate       | datetime       | Date             | -        | Trading data                         |
| 3   | key3        | decimal(4,0)   | OD               | -        | To distinguish the same day information |
| 4   | type_e      | varchar(20)    | Transaction type | -        | Three different transaction method[^1]   |
| 5   | vol         | decimal(10,0)  | Volume traded    | KShares  | SBL Trading Volume                   |
| 6   | cost        | decimal(7,2)   | Fee rate         | %        | SBL Fee rate                         |
| 7   | close_d     | decimal(12,4)  | Close Price      | Dollar   | Closing price of the day             |
| 8   | edate       | datetime       | Date returned    | -        | Date returned                        |
| 9   | day         | decimal(4,0)   | Borrowed days    | Day      | Number of days borrowed              |

[^1]:**Transaction type**:`C` : Competitive auction transaction `F` : Fixed-rate transaction `N` : Negotiated transaction


## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ASBL.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ASBL')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ASBL')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ASBL");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ASBL")
        ```



