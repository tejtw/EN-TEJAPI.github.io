#[Repurchase Data of Listed/OTC Companies – Large-scale Buybacks] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ATINVS1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Column**: coid
    - **Publication Date Column**: mdate


## Key Indicators

<div class="grid cards grid-3" markdown>

<!-- - __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">10,580+</span>** -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions

| #  | Field Name   | Data Type     | Field Description               | Unit        | Field Explanation                                                                             |
|----|--------------|---------------|----------------------------------|-------------|----------------------------------------------------------------------------------------------|
| 1  | `coid`       | char(7)       | Company Code                     | -           | Company code                                                                                 |
| 2  | `mdate`      | datetime      | Repurchase Date                  | -           | Repurchase date                                                                              |
| 3  | `key3`       | char(3)       | Sequence Number                  | -           | Sequence number                                                                              |
| 4  | `ts_od`      | decimal(6,1)  | Application Count                | -           | Number of applications – board-approved repurchase round. Decimals indicate irregular filings. |
| 5  | `buy_od`     | decimal(6,1)  | Repurchase Count                 | -           | Number of repurchase executions – decimals indicate irregular reports.                       |
| 6  | `share1`     | decimal(9,0)  | Shares Repurchased (This Round) | -      | Number of shares repurchased in this round – some firms disclose cumulative repurchases here. |
| 7  | `uprc1`      | decimal(9,2)  | Average Repurchase Price         |  -   | Average repurchase price for this round                                                      |
| 8  | `ttlprc1`    | decimal(9,0)  | Total Repurchase Amount          |   -  | Total amount for this repurchase round                                                       |
| 9  | `ac_shr`     | decimal(9,0)  | Cumulative Shares Held           |   -    | Accumulated number of repurchased shares                                                     |
| 10 | `ac_pct`     | decimal(6,2)  | Cumulative Holding Percentage    |       -     | Accumulated repurchased shares / total outstanding shares                       |


## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ATINVS1.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATINVS1')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata <- Tejapi('TWN/ATINVS1')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATINVS1");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATINVS1")
        ```



