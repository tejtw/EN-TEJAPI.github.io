# [Repurchase of Treasury Shares] – Detailed Field Descriptions


## Table Overview

!!! abstract
    Repurchase of Treasury Shares(TWN/ATINVS)

    - **Data Source**: Market Observation Post System (MOPS), Taiwan
    - **Data Period**: Since 2008
    - **Data Frequency**: Daily
    - **Table Category**: Company Operations
    - **Reference Code Table**: TWN/AIND
    - **Code Field**: coid
    - **Publication Date Field**: mdate


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

| **#** | Field Name     | Data Type       | Field Name                     | Unit | Description                                                                                  |
|-------|----------------|------------------|-----------------------------------------|------|----------------------------------------------------------------------------------------------|
| **1**  | `coid`         | `char(7)`        | Co_ID                             | –    | Company Code code                                                                          |
| **2**  | `mdate`        | `datetime`       | Date of Dir. Meeting                      | –    | Date of Board Meeting                                                         |
| **3**  | `key3`         | `decimal(3,0)`   | No.                          | –    | Serial Number                                                                              |
| **4**  | `ts_od`        | `decimal(6,1)`   | Buying Times                       | –    | Number of Buyback as Resolved by Board, Decimal Places for Non-Regular Treasury Stock Announcement (Major Information or Financial Report)                                                     |
| **5**  | `usageenm_c`   | `char(20)`       | Usage                     | –    | Purpose of Buyback: Transfer to Employees, Merger Acceptance, Buyback for Cancellation, Equity Conversion, Transfer Convertible Bonds, Stock Option Conversion                      |
| **6**  | `usageenm_e`   | `char(30)`       | Usage                     | –    | Purpose of Buyback: Transfer to Employees, Merger Acceptance, Buyback for Cancellation, Equity Conversion, Transfer Convertible Bonds, Stock Option Conversion                                                                  |
| **7**  | `tzdate1`      | `datetime`       | Announced Begining Date                       | –    | Start Date of Scheduled Buyback Period                                                            |
| **8**  | `tzdate2`      | `datetime`       | Announced Ending Date                         | –    | End Date of Scheduled Buyback Period                                                              |
| **9**  | `uprcl`        | `decimal(9,2)`   | Lower Unit Price                              | Yuan   | Lower Limit of Scheduled Buyback Price Range (Yuan)                                                                    |
| **10** | `uprcu`        | `decimal(9,2)`   | Upper Unit Price                            | Yuan   | Upper Limit of Scheduled Buyback Price Range (Yuan)                                                                    |
| **11** | `prc_ul`       | `decimal(10,0)`  | Buyable Upper Amount                   | Yuan   | Retained Earnings + Realized Capital Reserve                                                        |
| **12** | `zac_pct`      | `decimal(6,2)`   | Holding Shares % in Meeting Day                           | %    | Number of Treasury Shares Held Before Reporting / Shares Outstanding                                                  |
| **13** | `ca_pct`       | `decimal(6,2)`   | Amount/Current Asset                | %    | Upper Limit Price * Scheduled Buyback Shares / Current Assets                                           |
| **14** | `zshare`       | `decimal(9,0)`   | Announced Buying Volume                   | thousand | Estimated Number of Shares to be Bought Back (Thousands)                                                     |
| **15** | `share9`       | `decimal(9,0)`   | Actuality Buying Volume                  | thousand | Actual Number of Shares Bought Back (Thousands)                                                                   |
| **16** | `shrg_pct`     | `decimal(6,2)`   | Executed%                  | %    | Actual Buyback Shares / Estimated Buyback Shares                                                |
| **17** | `rmk`          | `char(40)`       | Un-executed Note                                   | –    | Reason for Incomplete Execution                                                                            |
| **18** | `tlprc`        | `decimal(10,0)`  | Amount of Buying                    | Yuan   | Actual Total Buyback Amount (in thousand currency units)                                                           |
| **19** | `uprc`         | `decimal(9,2)`   | Average Unit Price                            | Yuan   | Total Buyback Amount / Number of Shares Already Bought                                                                    |
| **20** | `acshr`        | `decimal(9,0)`   | Cumulative Shares                      | thousand | Accumulated Holdings of Treasury Shares, Based on the Announcement Data Upon Completion of the Buyback Execution                                                      |
| **21** | `acpct`        | `decimal(6,2)`   | Shares/Book Value                           | %    | TCurrent Holdings [Number of Shares] (in thousand shares) / [Outstanding Shares]                                                |
| **22** | `xdedcd`       | `datetime`       | Last Resale Date                        | –    | Final Date of Treasury Shares Transfer or Cancellation                                                                      |
| **23** | `capdec`       | `decimal(9,0)`   | Cancellation Volume                           | thousand | The buyback is for cancellation, and it must be fully canceled within six months from the buyback date.                                                                |
| **24** | `tsbal`        | `decimal(9,0)`   | Un-Resale Volume               | thousand | Remaining Number of Shares Not Written Off After Installment Write-offs                                                             |
| **25** | `trsfer`       | `decimal(9,0)`   | Vol. of Transf. Employee                       | thousand | The purpose of the buyback is to transfer to employees, and it must be fully transferred, either in installments or at once, within three years from the buyback date.                                    |
| **26** | `cvert`        | `decimal(9,0)`   | Stock Ownership Transf.                         | thousand | The buyback is for share conversion and must be transferred in full, either in installments or at once, within three years from the buyback date.                                                |
| **27** | `capdec1`      | `decimal(9,0)`   | Vol. of Capital Decrease           | thousand | Number of Treasury Shares Held * Capital Reduction Ratio                                                                |
| **28** | `er_rmk`       | `char(1)`        | Vol.-Untransfered Employee              | –    | The purpose of the buyback is to transfer to employees, but it has not been entirely written off so far.                         |
| **29** | `tztrandedate` | `datetime`       | Announced Date of Dir.         | –    | Shall be announced within two days from the date of the Board Resolution                                                  |
| **30** | `tcncl_dd`     | `datetime`       | 	Cancel Date                  | –    | Board Resolution Cancellation Date                                                                   |
| **31** | `tbuy_d1`      | `datetime`       | Actual Start Buying Date                | –    | Actual Buyback Period Start Date                                                                     |
| **32** | `tbuy_dd`      | `datetime`       | Actual End Buying Date                  | –    | Actual Buyback Period End Date                                                                      |                                                      |


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
    
