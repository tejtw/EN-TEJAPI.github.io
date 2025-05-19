# [Repurchase of Treasury Shares] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ATINVS
    - **Data Source**: Market Observation Post System (MOPS), Taiwan
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

| **#** | Field Name       | Data Type       | Field Description                 | Unit     | Description                                                                                                                                              |
|-------|------------------|------------------|-----------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1** | `coid`           | `char(7)`        | Co_ID                             | –        | Company Code                                                                                                                                            |
| **2** | `mdate`          | `datetime`       | Date of Dir. Meeting              | –        | Date of Board Meeting                                                                                                                                   |
| **3** | `key3`           | `decimal(3,0)`   | No.                               | –        | Serial Number                                                                                                                                           |
| **4** | `ts_od`          | `decimal(6,1)`   | Buying Times                      | –        | Number of Buybacks Resolved by Board, used in non-regular treasury stock announcements                                                                 |
| **5** | `usageenm_e`     | `char(30)`       | Usage                             | –        | Purpose of Buyback: e.g., Employee Transfer, Merger, Cancellation, Equity Conversion, etc.                                                             |
| **6** | `tzdate1`        | `datetime`       | Announced Beginning Date          | –        | Start Date of Scheduled Buyback Period                                                                                                                  |
| **7** | `tzdate2`        | `datetime`       | Announced Ending Date             | –        | End Date of Scheduled Buyback Period                                                                                                                    |
| **8** | `uprcl`          | `decimal(9,2)`   | Lower Unit Price                  | NTD     | Lower Limit of Scheduled Buyback Price                                                                                                                  |
| **9** | `uprcu`          | `decimal(9,2)`   | Upper Unit Price                  | NTD     | Upper Limit of Scheduled Buyback Price                                                                                                                  |
| **10**| `prc_ul`         | `decimal(10,0)`  | Buyable Upper Amount              | NTD     | Retained Earnings + Realized Capital Reserve                                                                                                            |
| **11**| `zac_pct`        | `decimal(6,2)`   | Holding Shares % in Meeting Day  | %        | Treasury Shares Held Before Reporting / Shares Outstanding                                                                                              |
| **12**| `ca_pct`         | `decimal(6,2)`   | Amount/Current Asset              | %        | Upper Limit Price × Scheduled Buyback Shares / Current Assets                                                                                           |
| **13**| `zshare`         | `decimal(9,0)`   | Announced Buying Volume           | K NTD | Estimated Number of Shares to Buy Back                                                                                                                  |
| **14**| `share9`         | `decimal(9,0)`   | Actual Buying Volume              | K NTD | Actual Number of Shares Bought Back                                                                                                                     |
| **15**| `shrg_pct`       | `decimal(6,2)`   | Executed %                        | %        | Actual / Estimated Buyback Shares                                                                                                                       |
| **16**| `rmk`            | `char(40)`       | Un-executed Note                  | –        | Reason for Incomplete Execution                                                                                                                          |
| **17**| `ttlprc`          | `decimal(10,0)`  | Amount of Buying                  | NTD     | Actual Total Buyback Amount  |
| **18**| `uprc`           | `decimal(9,2)`   | Average Unit Price                | NTD     | Total Buyback Amount / Number of Shares Bought     |
| **19**| `acshr`          | `decimal(9,0)`   | Cumulative Shares                 | K NTD | Accumulated Holdings of Treasury Shares (after completion of buyback)                                                                                   |
| **20**| `acpct`          | `decimal(6,2)`   | Shares/Book Value                 | %        | Accumulated Holdings / Shares Outstanding  |
| **21**| `xdedcd`         | `datetime`       | Last Resale Date                  | –        | Last Date of Treasury Shares Transfer or Cancellation                                                                                                   |
| **22**| `capdec`         | `decimal(9,0)`   | Cancellation Volume               | K NTD | Volume of Buyback for Cancellation (must be canceled within 6 months)                                                                                   |
| **23**| `tsbal`          | `decimal(9,0)`   | Un-Resale Volume                  | K NTD | Remaining Shares Not Written Off  |
| **24**| `trsfer`         | `decimal(9,0)`   | Vol. of Transf. to Employee       | K NTD | Must be fully transferred within 3 years   |
| **25**| `cvert`          | `decimal(9,0)`   | Stock Ownership Transf.          | K NTD | For share conversion, must be transferred within 3 years                                                                                                 |
| **26**| `capdec1`        | `decimal(9,0)`   | Vol. of Capital Decrease          | K NTD | Treasury Shares × Capital Reduction Ratio                                                                                                               |
| **27**| `er_rmk`         | `char(1)`        | Vol.-Untransferred Employee       | –        | Buyback for Employee Transfer not yet completed                                                                                                         |
| **28**| `tztrandedate`   | `datetime`       | Announced Date of Dir.            | –        | Announcement Date Within Two Days of Board Resolution                                                                                                   |
| **29**| `tcncl_dd`       | `datetime`       | Cancel Date of Dir.    | –        | Date of Board Resolution Cancellation                                                                                                                   |
| **30**| `tbuy_d1`        | `datetime`       | Actual Start Buying Date          | –        | Actual Buyback Start Date                                                                                                                                |
| **31**| `tbuy_dd`        | `datetime`       | Actual End Buying Date            | –        | Actual Buyback End Date                    |


## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ATINVS.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATINVS')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ATINVS')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATINVS");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATINVS")
        ```
    
