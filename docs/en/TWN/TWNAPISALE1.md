#[Operating Data – Monthly Revenue (by Version)] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/APISALE1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan, Investor Conference  
    - **Reference Code Table**: TWN/APISTKATTR
    - **Code Field**: coid
    - **Publication Date Field**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions

| #  | Field Name     | Data Type       | Field Description                    | Unit      | Field Explanation                                                                                                 |
|----|----------------|------------------|--------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| 1  | `coid`         | char(7)          | Company                              | -         | Listed company code                                                                                               |
| 2  | `mdate`        | datetime         | Year/Month                           | -         | Data cut-off year/month                                                                                           |
| 3  | `key3`         | decimal(3,0)     | Sequence Number                      | -         | Company’s monthly revenue announcement sequence                                                                   |
| 4  | `annd_s`       | datetime         | Revenue Announcement Date            | -         | Announcement date; per TWSE rule, companies must announce by the 10th of each month                               |
| 5  | `annd_time`    | nchar(8)         | Revenue Announcement Time            | -         | Time of announcement                                                                                              |
| 6  | `d0001`        | decimal(14,0)    | Monthly Revenue               | Thousand NTD       | The company’s self-reported monthly revenue                                                                                |
| 7  | `d0002`        | decimal(14,0)    | Revenue Last Year            | Thousand NTD       | The company discloses the self-reported monthly revenue for the same month last year to facilitate user comparison.                                                                     |
| 8  | `d0003`        | decimal(13,2)    | YoY Growth Rate                  | %         | ((This month’s revenue − Same month last year) ÷ ABS(Same month last year)) × 100(%)                                 |
| 9  | `d0004`        | decimal(13,2)    | MoM Change Rate                  | %         | ((This month’s revenue − Last month) ÷ ABS(Last month)) × 100(%)                                                       |
| 10 | `d0005`        | decimal(14,0)    | Cumulative Revenue           | Thousand NTD       | The company’s  self-reported cumulative revenue                                                                                            |
| 11 | `d0006`        | decimal(14,0)    | Cumulative Revenue Last Year         | Thousand NTD       | The company discloses the cumulative self-reported revenue for the same period last year to facilitate user comparison.                                                                             |
| 12 | `d0007`        | decimal(13,2)    | Cumulative Revenue YoY            | %         | ((YTD revenue − YTD last year) ÷ ABS(YTD last year)) × 100                                                        |
| 13 | `a4maxh`       | decimal(14,0)    | Historical Max Monthly Revenue       | Thousand NTD       | All-time high monthly revenue                                                                                     |
| 14 | `a4maxd`       | datetime         | Historical Max Revenue Year/Month    | -         | Year/month of all-time high revenue                                                                               |
| 15 | `a4max_pct`    | decimal(13,2)    | Ratio to Historical Max           | %         | ((This month’s revenue ÷ Historical max revenue) × 100)-1                                                              |
| 16 | `a4minh`       | decimal(14,0)    | Historical Min Monthly Revenue       | Thousand NTD       | All-time low monthly revenue                                                                                      |
| 17 | `a4mind`       | datetime         | Historical Min Revenue Year/Month    | -         | Year/month of all-time low revenue                                                                                |
| 18 | `a4min_pct`    | decimal(13,2)    | Ratio to Historical Min          | %         | ((This month’s revenue ÷ Historical min revenue) × 100)-1                                                              |
| 19 | `a4hfg`        | nchar(1)         | New High/Low (Historical)            | -         | Whether it’s a historical high/low (H/L)                                                                               |
| 20 | `a4yfg`        | nchar(1)         | New High/Low (Past Year)             | -         | Whether it’s a 1-year high/low  (H/L)                                                                                     |
| 21 | `a4mfg`        | nchar(1)         | New High/Low (Same Month)            | -         | Whether it’s a high/low for same month   (H/L)                                                                            |
| 22 | `sl_month`     | decimal(6,0)     | New High/Low Month Count             | -         | How many months hit a new high/low                                                                                |
| 23 | `t8107`        | decimal(14,0)    | 12-Month Cumulative Revenue          | Thousand NTD      | Total revenue for the most recent 12 months                                                                       |
| 24 | `t8111`        | decimal(14,0)    | 12-Month Cumulative Revenue Last Year           | Thousand NTD      | Total revenue for the same 12-month period last year                                                              |
| 25 | `r18`          | decimal(13,2)    | 12-Month Revenue YoY           | %         | ((Recent 12-month revenue − Same period last year) ÷ ABS(Same period last year)) × 100                            |
| 26 | `t8133`        | decimal(14,0)    | 3-Month Cumulative Revenue           | Thousand NTD      | Total revenue for the most recent 3 months                                                                        |
| 27 | `t8134`        | decimal(14,0)    | 3-Month Revenue Last Year            | Thousand NTD       | Total revenue for the same 3-month period last year                                                               |
| 28 | `r25`          | decimal(13,2)    | 3-Month Revenue YoY Growth Rate   | %         | ((Recent 3-month cumulative revenue − Cumulative revenue for the same 3-month period last year) ÷ ABS(Cumulative revenue for the same period last year)) × 100 (%)                             |
| 29 | `r26`          | decimal(13,2)    | 3-Month Revenue MoM Change       | %         | 	((Recent 3-month cumulative revenue − Previous 3-month cumulative revenue) ÷ ABS(Previous 3-month cumulative revenue)) × 100 (%)                                 |
| 30 | `r26a`         | decimal(13,2)    | 3-Month Revenue Rolling Change    | %         | ((Recent 3-month cumulative revenue − 3-month cumulative revenue at the beginning period) ÷ ABS(Beginning period cumulative revenue)) × 100 (%) The “beginning period” refers to three months before the current month.                             |
| 31 | `d0025`        | decimal(14,0)    | Outstanding Shares    | Thousand Shares | Number of public common shares (excludes CB conversions and treasury shares)  Adjustments are based on the month in which the ex-rights date falls, so the figure may differ from the quarter-end share count reported in financial statements.                              |
| 32 | `d0026`        | decimal(11,2)    | Monthly Revenue Per Share     | NTD        | Monthly revenue divided by outstanding shares                                                                    |
| 33 | `d0027`        | decimal(11,2)    | Cumulative Revenue Per Share    | NTD        | Cumulative revenue divided by outstanding shares                                                                 |
| 34 | `r19`          | decimal(11,2)    | 12-Month Revenue Per Share     | NTD        | 12-month revenue divided by outstanding shares                                                                   |
| 35 | `r27`          | decimal(11,2)    | 3-Month Revenue Per Share      | NTD        | 3-month revenue divided by outstanding shares                                                                    |
| 36 | `diff_rmk`     | nchar(300)       | Remarks                              | -         | Remarks



## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/APISALE1.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/APISALE1')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/APISALE1')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/APISALE1");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/APISALE1")
        ```



