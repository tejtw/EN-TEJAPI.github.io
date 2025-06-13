# [Equity Concentration] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ASCR1
    - **Data Source**: Taiwan Stock Exchange (TWSE), Taipei Exchange (TPEx), and other TEJ data
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Column**: coid
    - **Publication Date Column**: mdate  


## Key Indicators

<div class="grid cards" markdown>

<!-- -   __Number of Records__

    ---

    Over 198,089 -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions
| # | Field  | Data Type       | Field Name   | Unit | Field Description|
|-------|------------|------------------|-------------------------------|------|-----------------------------------------------------------------------------------------------------------------|
| 1  | `coid`     | `char(7)`        | Stock ID                 | –    | Stock ID |
| 2  | `mdate`    | `datetime`       | Date             | –    | Date    |
| 3  | `scrb`   | `decimal(9,4)`   | SCR_Buy[^1]	| –    | The number of shares bought by participating brokers on the day, used to determine the concentration of buying equity.|
| 4  | `scrs`   | `decimal(9,4)`       | SCR_Sell[^2] | –    | 	The number of shares sold by participating brokers on the day, used to determine the concentration of selling equity. |
| 5  | `scr_dif`  | `decimal(9,4)`       |  SCR_Difference [^3]| –    |  The difference between the concentration of buying and selling equity.|
| 6 | `pr`   | `decimal(9,4)`        | 	PR_Broker Branch [^4]   | %    | Used to determine the participation level of branches on the day; the higher the value, the more branches participated. |


[^1]:((sum(shares bought) * participating brokers / 2) - (sum(shares bought) / 2) + sum(shares bought) * (rank - 1)) / sum(shares bought) * participating brokers / 2
[^2]:((sum(shares sold) * participating brokers / 2) - (sum(shares sold) / 2) + sum(shares sold) * (rank - 1)) / sum(shares sold) * participating brokers / 2
[^3]:Buying concentration - Selling concentration
[^4]:Participating brokers * 100 / Total number of branches

## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ASCR1.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ASCR1')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ASCR1')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ASCR1");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ASCR1")
        ```