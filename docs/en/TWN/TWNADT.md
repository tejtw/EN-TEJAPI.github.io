# [Day Trading Statistics] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**：TWN/ADT
    - **Data Source**: TWSE: Objects for Day Trading Monthly Day Trading Statistics,TPEx: Day Trading Statistics Objects and Statistics for Day Trading
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

| **#**                                                                            | Field Name   | Data Type       | Field description                            | Unit    | Field Explanation                                                    |
| -------------------------------------------------------------------------------- | ------------ | --------------- | -------------------------------------------- | ------- | -------------------------------------------------------------------- |
| **1**                                                                            | `coid`       | `char(7)`       | ID                                           | –       | Security code                                                        |
| **2**                                                                            | `mdate`      | `datetime`      | DATE                                         | –       | Trade date                                                           |
| **3**                                                                            | `close_d`    | `decimal(11,4)` | Close     | NTD     | The security’s closing price of the trading day                      |
| **4**                                                                            | `volume`     | `decimal(9,0)`  | Volume                                | KShares | The security’s trade volume of the trading day                       |
| **5**                                                                            | `amount`     | `decimal(12,0)` | Amount                           | K NTD       | The security’s trade amount of the trading day                       |
| **6**                                                                            | `vol_dt`     | `decimal(10,0)` | Day Trading Volume                   | KShares | The security’s volume of day trading                                 |
| **7**                                                                            | `vol_dtp`    | `decimal(7,2)`  | Day Trading Volume of the market             | %       | Individual: Day trading volume / Trade volume of the security × 100% , Market: (Day trading buy + Day trading sell) / 2 / Trade amount of market × 100% |              |                 |                                              |         |                                                                      |
| **8**                                                                            | `tbuy_adt`   | `decimal(12,0)` | Day Trading Value of Buys      | K NTD          | The buying amount of the security on the trading day                 |
| **9**                                                                            | `buy_adtp`   | `decimal(7,2)`  | Day Trading Value of Buy of market           | %       | Day trading buy amount / Trade amount of the security × 100%         |
| **10**                                                                           | `tsell_adt`  | `decimal(12,0)` | Day Trading Value of Sells         | K NTD         | The selling amount of the security on the trading day                |
| **11**                                                                           | `sell_adtp`  | `decimal(7,2)`  | Day Trading Value of Sell of market          | %       | Day trading sell amount / Trade amount of the security × 100%        |
| **12**                                                                           | `roi`        | `decimal(11,4)` | ROI%                                         | %       | Return on investment of the security on the trading day              |
| **13**                                                                           | `turnover`   | `decimal(9,4)`  | Turn Over%                                   | %       | Turnover rate of the security on the trading day                     |
| **14**                                                                           | `offset_pct` | `decimal(9,2)`  | Day trading ratio (margin–securities offset) | –       | Day trading ratio (margin–securities offset)                         |
| **15**                                                                           | `offset_dtp` | `decimal(9,2)`  | Cash offset + Day‑trading ratio              | %       | Cash offset + day‑trading ratio                                      |

## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ADT.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ADT')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ADT')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ADT");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ADT")
        ```
    
??? note
    The transaction tax rate of day trading had been cut from 0.3% to 0.15% by the government as an incentive since 2017. The tax cut was originally due by the end of 2021, but it was extended till 2024 for keeping the momentum and liquidity of the Taiwanese stock market.  