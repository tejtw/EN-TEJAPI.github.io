# [Broker Net Buy/Sell (broker level)] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**：TWN/AMTOP1
    - **Data Source**: Taiwan Stock Exchange (TWSE) and Taipei Exchange (TPEx)
    - **Reference Code Table**: TWN/ANPRCSTD
    - **Code Column**: coid
    - **Publication Date Column**: mdate


## Key Indicators

<div class="grid cards" markdown>

<!-- -   __Number of Records__

    ---

    Over 5,799 -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>


## Field Descriptions

| **#** | Field  | Data Type       | Field Name   | Unit | Field Description|
|-------|----------------|------------------|-----------------------------------------|------|----------------------------------------------------------------------------------------------|
| **1**  | `coid`         | `char(7)`        | Security Code   | -  | Security Code   |
| **2**  | `mdate`        | `datetime`       | Date | -    | Date  |
| **4**  | `key3_e`        | `char(37)`   | Broker Name | -    | Broker Name |
| **5**  | `buy`   | `decimal(9,0)`       | Buy Volume    | K shares    | Buy Volume  |
| **6**  | `sell`   | `decimal(9,0)`       | Sell Volume | K shares    | Sell Volume |
| **7**  | `qfii_ex`      | `decimal(9,0)`       | Net Buy (Sell) | K shares    | Net Buy (Sell) |
| **8**  | `buy_m`      | `decimal(9,0)`       | Buy Amount | -   | Buy Amount |
| **9**  | `sell_m`        | `decimal(9,0)`   | Sell Amount | -   | Sell Amount |
| **10** | `bs_m`        | `decimal(9,0)`   | Net Buy (Sell) Amount | -   | Net Buy (Sell) Amount |
| **11** | `total`       | `decimal(9,0)`  | Transaction Amount | -   | Transaction Amount |
| **12** | `fld010`      | `decimal(7,2)`   | Average Buy Price (NTD) |-    | Average Buy Price (NTD) |
| **13** | `fld011`       | `decimal(7,2)`   | Average Sell Price (NTD) | -    | Average Sell Price (NTD) |
| **14** | `tout_w`       | `decimal(13,2)`   | 1-Week Net Buy (Sell) Volume (Lots) | - | 1-Week Net Buy (Sell) Volume (Lots) |
| **15** | `tmout_w`       | `decimal(13,2)`   | 1-Week Net Buy (Sell) Amount | - | 1-Week Net Buy (Sell) Amount |
| **16** | `tout_m`     | `decimal(13,2)`   | 1-Month Net Buy (Sell) Volume (Lots) | -    | 1-Month Net Buy (Sell) Volume (Lots) |
| **17** | `tmout_m`          | `decimal(13,2)`       | 1-Month Net Buy (Sell) Amount | -    | 1-Month Net Buy (Sell) Amount |
| **18** | `tout_q`        | `decimal(13,2)`  | 1-Quarter Net Buy (Sell) Volume (Lots) | -   | 1-Quarter Net Buy (Sell) Volume (Lots) |
| **19** | `tmout_q`         | `decimal(13,2)`   | 1-Quarter Net Buy (Sell) Amount | -   | 1-Quarter Net Buy (Sell) Amount |
| **20** | `tout_y`        | `decimal(13,2)`   | 1-Year Net Buy (Sell) Volume (Lots) | - | 1-Year Net Buy (Sell) Volume (Lots) |
| **21** | `tmout_y`        | `decimal(13,2)`   | 1-Year Net Buy (Sell) Amount | -    | 1-Year Net Buy (Sell) Amount |
| **22** | `tout_wb`       | `decimal(13,2)`       | Current Week Net Buy (Sell) Volume (Lots) | -    | Current Week Net Buy (Sell) Volume (Lots) |
| **23** | `tmout_wb`       | `decimal(13,2)`   | Current Week Net Buy (Sell) Amount | - | Current Week Net Buy (Sell) Amount |
| **24** | `tout_mb`        | `decimal(13,2)`   | Current Month Net Buy (Sell) Volume (Lots) | - | Current Month Net Buy (Sell) Volume (Lots) |
| **25** | `tmout_mb`       | `decimal(13,2)`   | Current Month Net Buy (Sell) Amount | - | Current Month Net Buy (Sell) Amount |
| **26** | `tout_qb`        | `decimal(13,2)`   | Current Quarter Net Buy (Sell) Volume (Lots) | - | Current Quarter Net Buy (Sell) Volume (Lots) |
| **27** | `tmout_qb`      | `decimal(13,2)`   | Current Year Net Buy (Sell) Volume (Lots) | - | Current Year Net Buy (Sell) Volume (Lots) |
| **28** | `tout_yb`       | `decimal(13,2)`        | Current Year Net Buy (Sell) Amount | -    | Current Year Net Buy (Sell) Amount |

## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/AMTOP1.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AMTOP1')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AMTOP1')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AMTOP1");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AMTOP1")
        ```
    
