# [TSE/TPEX Treasury Stock Buyback Plan] – Detailed Field Descriptions


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

| **#** | Field Name | Data Type       | Field         | Unit | Field Description|
|-------|------------------|------------------|-----------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1** | `coid`           | `char(7)`        | Co_ID                             | –        | Company Code    |
| **2** | `mdate`          | `datetime`       | Date of Dir. Meeting              | –        | Date of Board Meeting    |
| **3** | `key3`           | `decimal(3,0)`   | No.                               | –        | Serial Number    |
| **4** | `ts_od`          | `decimal(6,1)`   | Buying Times                      | –        | Repurchase round as resolved by the board of directors; decimal values indicate non-regular treasury stock announcements (material information or financial reports).  |
| **5** | `usageenm_e`     | `char(30)`       | Usage                             | –        | Purpose of Buyback: e.g., Employee Transfer, Merger, Cancellation, Equity Conversion, etc.                                                             |
| **6** | `tzdate1`        | `datetime`       | Announced Beginning Date          | –        | Start Date of Scheduled Buyback Period                                                                                                                  |
| **7** | `tzdate2`        | `datetime`       | Announced Ending Date             | –        | End Date of Scheduled Buyback Period                                                                                                                    |
| **8** | `uprcl`          | `decimal(9,2)`   | Lower Unit Price                  | NTD     | Lower Limit of Scheduled Buyback Price                                                                                                                  |
| **9** | `uprcu`          | `decimal(9,2)`   | Upper Unit Price                  | NTD     | Upper Limit of Scheduled Buyback Price                                                                                                                  |
| **10**| `prc_ul`         | `decimal(10,0)`  | Buyable Upper Amount              | K NTD     | Retained Earnings + Realized Capital Reserve                                                                                                            |
| **11**| `zac_pct`        | `decimal(6,2)`   | Holding Shares % in Meeting Day  | %        | Treasury Shares Held Before Reporting / Shares Outstanding                                                                                              |
| **12**| `ca_pct`         | `decimal(6,2)`   | Amount/Current Asset              | %        | Upper Limit Price × Scheduled Buyback Shares / Current Assets                                                                                           |
| **13**| `zshare`         | `decimal(9,0)`   | Announced Buying Volume           | K shares | Estimated Number of Shares to be Bought Back  |
| **14**| `share9`         | `decimal(9,0)`   | Actual Buying Volume              | K shares | Actual Number of Shares to be Bought Back   |
| **15**| `shrg_pct`       | `decimal(6,2)`   | Executed %                        | %        | Actual Buyback Shares / Estimated Buyback Shares    |
| **16**| `rmk`            | `char(40)`       | Un-executed Note                  | –        | Reason for Incomplete Execution    |
| **17**| `ttlprc`          | `decimal(10,0)`  | Amount of Buying                  | K NTD     | Actual Total Buyback Amount  |
| **18**| `uprc`           | `decimal(9,2)`   | Average Unit Price                | NTD     | Total Buyback Amount / Number of Shares Bought     |
| **19**| `acshr`          | `decimal(9,0)`   | Cumulative Shares                 | K shares | Accumulated Holdings of Treasury Shares, Based on the Announcement Data Upon Completion of the Buyback Execution  |
| **20**| `acpct`          | `decimal(6,2)`   | Shares/Book Value                 | %        | 	Current Holdings [Number of Shares] (in thousand shares) / [Outstanding Shares] |
| **21**| `xdedcd`         | `datetime`       | Last Resale Date                  | –        | Last Date of Treasury Shares Transfer or Cancellation       |
| **22**| `capdec`         | `decimal(9,0)`   | Cancellation Volume               | K shares | Volume of Buyback for Cancellation (must be canceled within 6 months)             |
| **23**| `tsbal`          | `decimal(9,0)`   | Un-Resale Volume                  | K shares | Remaining Number of Shares Not Written Off After Installment Write-offs  |
| **24**| `trsfer`         | `decimal(9,0)`   | Vol. of Transf. to Employee       | K shares | Must be fully transferred within 3 years   |
| **25**| `cvert`          | `decimal(9,0)`   | Stock Ownership Transf.          | K shares | The buyback is for share conversion and must be transferred in full, either in installments or at once, within three years from the buyback date. |
| **26**| `capdec1`        | `decimal(9,0)`   | Vol. of Capital Decrease          | K shares | Treasury Shares × Capital Reduction Ratio  |
| **27**| `er_rmk`         | `char(1)`        | Vol.-Untransfered Employee     | –        | The purpose of the buyback is to transfer to employees, but it has not been entirely written off so far.|
| **28**| `tztrandedate`   | `datetime`       | Board Resolution Announcement Date           | –        | Shall be announced within two days from the date of the Board Resolution |
| **29**| `tcncl_dd`       | `datetime`       | Board Resolution Cancellation Date    | –        | Date of Board Resolution Cancellation  |
| **30**| `tbuy_d1`        | `datetime`       | Actual Buyback Period Start Date         | –        | Actual Buyback Period Start Date|
| **31**| `tbuy_dd`        | `datetime`       | Actual Buyback Period End Date           | –        | Actual Buyback Period End Date |


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
    
??? Note
    Public Announcement of Listed Companies Buying Back Their Shares:

    A. Public Announcement After Board Resolution to Buy Back

        It should be announced within two days from the date of the board resolution, specifying the matters to be reported. Shares cannot be       

        repurchased from the market until the announcement and reporting obligations are fulfilled. 

    

    B. Buyback Record Announcement (Including Large Buyback Announcements, Quarterly Financial Reports) 

        When the number of shares repurchased accumulates to 2% of the total issued shares of the company or the amount reaches NT$300 million or

        more, the date, quantity, type, and price of the buyback should be announced within two days from the date of the event.

    

    C. Completion of Treasury Share Buyback Execution or Expiry of the Period(Within two months from the date of reporting)

        The company should complete the buyback within two months from the date of reporting (extended to two months for execution from

        89/10/13) and report within five days after the expiry of the period or completion of the execution. If the buyback is completed after the deadline

        or if additional buybacks are required, a new resolution must be passed by the board of directors.

    

    D.  Cancellation or Transfer

        No fixed announcement; supplemented by financial report data.