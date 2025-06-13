# [Daily Securities Buy/Sell Report by Brokers] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ADRST
    - **Data Source**: Taiwan Stock Exchange (TWSE), Taipei Exchange (TPEx)
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Column**: coid
    - **Publication Date Column**: mdate  


## Key Indicators

<div class="grid cards" markdown>

<!-- -   __Number of Records__

    ---

    Over 198,089 -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 7 Days</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions
| # | Field  | Data Type       | Field Name   | Unit | Field Description|
|-------|------------|------------------|-------------------------------|------|-----------------------------------------------------------------------------------------------------------------|
| 1  | `coid`     | `char(7)`        | Stock ID                 | –    | Stock ID |
| 2  | `mdate`    | `datetime`       | Date             | –    | Date    |
| 3  | `key3`   | `char(7)`   | Broker ID	| –    | Broker ID|
| 4  | `no`   | `decimal(14,4)`       | Trade Price|  NTD    | 	Trade Price|
| 5  | `brk_nm_e`  | `char(50)`       | Broker Name| –    |  Broker Name|
| 6 | `buy_s`   | `decimal(10,0)`        | 	Buy Amount  | shares    | Buy Amount  |
| 7 | `sell_s`   | `decimal(10,0)`        |Sell Amount  | shares    | Sell Amount |


## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ADRST.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ADRST')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ADRST')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ADRST");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ADRST")
        ```