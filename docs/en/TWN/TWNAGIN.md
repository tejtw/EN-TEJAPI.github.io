# [Margin Trading] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**: TWN/AGIN
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

| **#** | Field Name     | Data Type       | Field Description                     | Unit | Field Explanation                                                                                  |
|-------|----------------|------------------|-----------------------------------------|------|----------------------------------------------------------------------------------------------|
| 1  | `coid`         | `char(7)`        | Company Code   | -  | Company Code   |
| 2  | `mdate`        | `datetime`       | Date | -    | Date  |
| 3  | `gin0`         | `decimal(12,0)`   | Margin Balance (Lots) | T    | Previous balance + Today's buy - Today's sell - Cash repayment |
| 4  | `l0ng_ta`        | `decimal(15,2)`   | Margin Balance (Thousand NTD) | NTD,T    | Margin balance (lots) x Today's average price |
| 5  | `buy_l`   | `decimal(12,0)`       | Margin Buy (Lots)    | T    | Margin Buy (Lots) |
| 6  | `buy_la`   | `decimal(15,2)`       | Margin Buy (Thousand NTD) | NTD,T    | Margin Buy (Lots) x Today's average price |
| 7  | `sell_l`      | `decimal(12,0)`       | Margin Sell (Lots) | T    | Margin Sell (Lots) |
| 8  | `cash_l`      | `decimal(12,0)`       | Margin Cash Repayment (Lots) | T   | Margin Cash Repayment (Lots) |
| 9  | `sell_la`        | `decimal(15,2)`   | Margin Sell (Thousand NTD) | NTD,T   | Margin Sell (Lots) x Today's average price |
| 10 | `cash_la`        | `decimal(15,2)`   | Margin Cash Repayment (Thousand NTD) | NTD,T   | Margin Cash Repayment (Lots) x Today's average price |
| 11 | `gin1`       | `decimal(12,0)`  | Margin Net Change (Lots) | T   | Today's balance - Yesterday's balance |
| 12 | `chg_la`      | `decimal(15,2)`   | Margin Net Change (Thousand NTD) |-    | Margin Net Change (Lots) x Today's average price |
| 13 | `gin2`       | `decimal(12,2)`   | Margin Net Change Ratio | %    | Margin Net Change (Lots) / Margin Balance (Lots) |
| 14 | `gin3`       | `decimal(6,2)`   | Margin Usage Rate | %   | Margin Balance (Lots) / Margin Limit |
| 15 | `limit_l`     | `decimal(13,0)`   | Margin Limit | T    | Margin Limit |
| 16 | `gin4`        | `decimal(12,0)`  | Short Balance (Lots) | T   | Previous balance + Today's sell - Today's buy - Stock repayment |
| 17 | `short_ta`         | `decimal(15,2)`   | Short Balance (Thousand NTD) | NTD,T   | Short balance (lots) x Today's average price |
| 18 | `buy_s`        | `decimal(12,0)`   | Short Buy (Lots) | T   | Short Buy (Lots) |
| 19 | `buy_sa`         | `decimal(15,2)`   | Short Buy (Thousand NTD) | NTD,T    | Short Buy (Lots) x Today's average price |
| 20 | `sell_s`        | `decimal(12,0)`   | Short Sell (Lots) | T | Short Sell (Lots) |
| 21 | `sell_sa`        | `decimal(15,2)`   | Short Sell (Thousand NTD) | NTD,T | Short Sell (Lots) x Today's average price |
| 22 | `pay_s`       | `decimal(12,0)`       | Stock Repayment (Lots) | T    | Stock Repayment (Lots) |
| 23 | `pay_sa`       | `decimal(15,2)`   | Stock Repayment (Thousand NTD) | NTD,T | Stock Repayment (Lots) x Today's average price |
| 24 | `gin5`        | `decimal(12,0)`   | Short Net Change (Lots) | T | Today's balance - Yesterday's balance |
| 25 | `chg_sa`       | `decimal(15,2)`   | Short Net Change (Thousand NTD) | NTD,T | Short Net Change (Lots) x Today's average price |
| 26 | `gin6`        | `decimal(12,2)`   | Short Net Change Ratio | % | Short Net Change (Lots) / Short Balance (Lots) |
| 27 | `gin7`      | `decimal(6,2)`   | Short Usage Rate | % | Short Balance (Lots) / Short Limit |
| 28 | `limit_s1`       | `decimal(13,0)`        | Short Limit | T    | Outstanding shares x 25% (including securities borrowing) |
| 29 | `cyn`       | `char(1)`       | Marginable Security (Y) | -    | If margin trading and short selling are not simultaneously suspended, Y; otherwise blank |
| 30 | `gin8`       | `decimal(7,2)`   | Short to Margin Ratio | % | Short Balance (Lots) / Margin Balance (Lots) |
| 31 | `gin9`       | `decimal(12,0)`   | Margin-Short Netting | T | Data available from 1994 |
| 32 | `gina`       | `decimal(12,4)`   | Closing Price | NTD | Unadjusted price |
| 33 | `ginb`       | `decimal(9,2)`   | Margin (Buy+Sell)/Volume % | % | (Margin Buy + Margin Sell) / (Stock Volume x 2) |
| 34 | `ginc`       | `decimal(9,2)`   | Short (Buy+Sell)/Volume % | % | (Short Buy + Short Sell) / (Stock Volume x 2) |
| 35 | `borr_t1`    | `decimal(13,0)`   | Securities Lending Balance (Lots) | T | Securities Lending Balance (Lots) |
| 36 | `borr_t1a`   | `decimal(15,2)`   | Securities Lending Balance (Thousand NTD) | NTD,T | Securities Lending Balance (Lots) x Today's average price |
| 37 | `sale_b1`    | `decimal(13,0)`   | Securities Lending Sell (Lots) | T | Today's securities lending sell (lots) |
| 38 | `sale_b1a`   | `decimal(15,2)`   | Securities Lending Sell (Thousand NTD) | NTD,T | Today's securities lending sell (lots) x Today's average price |
| 39 | `inv_chg1`   | `decimal(13,0)`   | Securities Lending Inventory Change (Lots) | T | -1 x Returned shares + Today's adjustment (includes cross-adjustments and error corrections) |
| 40 | `inv_chg1a`  | `decimal(15,2)`   | Securities Lending Inventory Change (Thousand NTD) | NTD,T | Securities Lending Inventory Change (Lots) x Today's average price |
| 41 | `limit_b1`   | `decimal(13,0)`   | Securities Lending Available Quota | T | Securities Lending Available Quota |
| 42 | `limit_b2`   | `decimal(13,0)`   | Securities Lending Limit | - | Outstanding shares x 10% |
| 43 | `sbls_k`     | `decimal(15,2)`   | Securities Lending Sell (Thousand NTD)_Exchange | NTD,T | Securities Lending Sell (Thousand NTD)_Exchange |
| 44 | `shorts_k`   | `decimal(15,2)`   | Short Sell (Thousand NTD)_Exchange | NTD,T | Short Sell (Thousand NTD)_Exchange |
| 45 | `ap`         | `decimal(12,4)`   | Average Price | NTD | Average Price |
| 46 | `alc`        | `decimal(12,4)`   | Margin Cost per Share | NTD | Cumulative Margin Cost ÷ Margin Balance |
| 47 | `asc1`       | `decimal(12,4)`   | Short Cost per Share | NTD | Cumulative Short Cost ÷ Short Balance |
| 48 | `lmr`        | `decimal(15,2)`   | Margin Maintenance Ratio | % | Nominal Price ÷ (Margin Cost per Share x Margin Multiplier) x 100% |
| 49 | `smr`        | `decimal(15,2)`   | Short Maintenance Ratio | % | (Short Cost per Share x Collateral Multiplier) ÷ Nominal Price x 100% |
| 50 | `tmr`        | `decimal(15,2)`   | Account Maintenance Ratio | % | (Nominal Price x Margin Balance + Cumulative Short Cost x Collateral Multiplier) ÷ (Cumulative Margin Cost * Margin Multiplier + Nominal Price x Short Balance) x 100% |



## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/AGIN.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AGIN')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AGIN')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AGIN");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AGIN")
        ```
    
