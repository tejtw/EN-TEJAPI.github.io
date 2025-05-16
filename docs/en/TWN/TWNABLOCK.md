# [Block Trades on TWSE/TPEx] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ABLOCK
    - **Data Source**: Taiwan Stock Exchange (TWSE) and Taipei Exchange (TPEx)  
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Field**: coid
    - **Publication Date Field**: mdate  


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
| **#** | Field Name | Data Type       | Field Name          | Unit | Description                                                                                                     |
|-------|------------|------------------|-------------------------------|------|-----------------------------------------------------------------------------------------------------------------|
| **1**  | `coid`     | `char(7)`        | Company Code                  | –    |  Security Code                                                                         |
| **2**  | `mdate`    | `datetime`       | Date             | –    | Date the information was published                                                                              |
| **3**  | `key3_e`   | `decimal(5,0)`   | Transaction Number(English)     | –    | Alternative or duplicate serial number                                                                          |
| **4**  | `tpnm_e`   | `char(30)`       | Category (English)    | –    | Block Trade Category. Single security requires purchase of 500 trading units at once; stock portfolio requires purchasing 5 types of stocks at once with a total amount of 15 million TWD.       |
| **5**  | `class_e`  | `char(20)`       |  Transaction Type (English)        | –    | Trading method. Divided into matched trades, single trades, and aggregated values.          |
| **6** | `term_e`   | `char(5)`        | Settlement Type (English)     | –    | Settlement method. Divided into T+1, T+2, and same-day settlement.                                                                           |
| **7** | `auc_p`    | `decimal(7,2)`   | Transaction Price             | U    | Block Trade Transaction Price                                                                               |
| **8** | `vol_d`    | `decimal(10,0)`  | Transaction Shares                 | U    | Block Trade Transaction Shares                                                                                         |
| **9** | `amt_d`    | `decimal(12,0)`  | Transaction Amount            | U    | Block Trade Transaction Amount                                                                            |
| **10** | `mkt`      | `char(3)`        | Market Type                        | –    | TSE for listed, OTC for over-the-counter                                                                    |



## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ABLOCK.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ABLOCK')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ABLOCK')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ABLOCK");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ABLOCK")
        ```