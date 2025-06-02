#[TSE/TPEX Monthly Sales (Quant Usage scenario)] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/APISALE1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan, Investor Conference  
    - **Reference Code Table**: TWN/ANPRCSTD
    - **Code Column**: coid
    - **Publication Date Column**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions

| # | Field Name | Data Type       | Field         | Unit | Field Description|
|----|----------------|------------------|--------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| 1  | `coid`         | char(7)          | CO_ID                              | -         | Company code given by the exchange	  |
| 2  | `mdate`        | datetime         | YYMM             | -         | Year and month of data cutoff	|
| 3  | `key3`         | decimal(3,0)     | OD                     | -         | Serial No.	 |
| 4  | `annd_s`       | datetime         | Announcement Date-SALE           | -         | Revenue announcement date: The exchange requires companies above the public offering level to announance their self-assessed revenue by the 10th day of each month.	|
| 5  | `annd_time`    | nchar(8)         | Announcement Time	          | -         | Revenue announcement timing	|
| 6  | `d0001`        | decimal(14,0)    | Sale-Monthly	               | K NTD	        | The company's self-assessed monthly revenue	 |
| 7  | `d0002`        | decimal(14,0)    | Sale-Monthly,Last Year     | K NTD       | The company has disclosed the self-assessed monthly revenue for the same period last year for users' comparison. |
| 8  | `d0003`        | decimal(13,2)    | YoY%-Monthly Sale	       | %         | Monthly revenue growth rate for the same period last year (%)Since the company provides information on the same period the previous year when disclosing the current month's revenue for comparison, the calculation is based on the information on the same period last year announced by the company on the same day.[^1]	|
| 9  | `d0004`        | decimal(13,2)    | MoM%-Monthly Sale	                 | %         | This is the change in monthly revenue between the current month and the previous month.Since the company may revise its revenue from time to time, the prior month's revenue herein refers to the latest prior month's revenue released before the date of this announcement. [^2]|
| 10 | `d0005`        | decimal(14,0)    | Sale-Accumulated	           | K NTD        | Accumulated self-assessed revenue for the year 	|
| 11 | `d0006`        | decimal(14,0)    | Sale-Accu.,L.Y.	        | K NTD        | The company disclosed its cumulative net sales for the same period last year for comparison purposes.	  |
| 12 | `d0007`        | decimal(13,2)    | YoY%-Acc. Sales	   | %         |Accumulated revenue growth rate for the same period last year (%) Since the company provides information about the same period the previous year when disclosing the current month's revenue for comparison, the calculation is based on the information of the same period last year announced by the company on the same day.	[^3] |
| 13 | `a4maxh`       | decimal(14,0)    | Highest Monthly Sales	   | K NTD        | All-time high monthly revenue       |
| 14 | `a4maxd`       | datetime         | Highest Monthly Sales YM	    | -         | Year/month of all-time high revenue                                                                               |
| 15 | `a4max_pct`    | decimal(13,2)    | (Month Sales/H.Month Sales-1)%	         | %         | ((This month’s revenue ÷ Historical max revenue) × 100)-1                                                              |
| 16 | `a4minh`       | decimal(14,0)    | Lowest Monthly Sales	   | K NTD        | All-time low monthly revenue                                                                                      |
| 17 | `a4mind`       | datetime         | Lowest Monthly Sales YM	   | -         | Year/month of all-time low revenue                                                                                |
| 18 | `a4min_pct`    | decimal(13,2)    | 	(Month Sales/L.Month Sales-1)%    | %         | ((This month’s revenue ÷ Historical min revenue) × 100)-1                                                              |
| 19 | `a4hfg`        | nchar(1)         | Highest/Lowest(All Time)	  | -         | Whether it’s a historical high/low (H/L)                                                                               |
| 20 | `a4yfg`        | nchar(1)         | Highest/Lowest(Last 12 M)	       | -         | Whether it’s a 1-year high/low  (H/L)                                                                                     |
| 21 | `a4mfg`        | nchar(1)         | Highest/Lowest(Month)	| -         | Whether it’s a high/low for same month   (H/L)                                                                            |
| 22 | `sl_month`     | decimal(6,0)     | Hit New High / Low in N Months (Month)	      | -         | How many months hit a new high/low                                                                                |
| 23 | `t8107`        | decimal(14,0)    | Sale-Accu.,Last 12M	         | K NTD	     | The monthly revenue for the past 12 months is projected from the beginning of the month.Since the company may revise its revenue from time to time, the calculation is based on the latest revenue of the last 12 months released before the date of this announcement.|
| 24 | `t8111`        | decimal(14,0)    | Sale-Accu.,L.Y.12M	  | %         |The sum of monthly revenue for the last 12 months is calculated from the same month of the previous year.Since the company may occasionally revise revenue, the calculation is based on the latest revenue for the same month last year for the 12 months before this announcement. |
| 25 | `r18`          | decimal(13,2)    | YoY%-Acc. Sales L12M	  | %         | Growth rate of revenue for the last 12 months compared to the same period of last year.	[^4] |
| 26 | `t8133`        | decimal(14,0)    | Sale-Accu.,Last 3M	        | K NTD	 | Monthly revenues for the past three months are summarized from the beginning of the month they were generated.Since the company may revise its revenue from time to time, the calculation is based on the latest revenue of the last three months before the date of this announcement. |
| 27 | `t8134`        | decimal(14,0)    | Sale-Accu.,L.Y. 3M	   | K NTD	  | The sum of last year's monthly revenue over the previous three months is calculated from the same month of last year.Since the company may revise revenue from time to time, the calculation is based on the latest monthly revenue for the same period last year, released before the date of this announcement. |
| 28 | `r25`          | decimal(13,2)    | YoY%-Acc. Sales L 3M	 | %         | (Accumulated revenue for the last three months - Accumulated revenue for the last three months of the same period last year) / ABS (Accumulated revenue for the last three months of the same period last year) *100(%)		[^5]                      |
| 29 | `r26`          | decimal(13,2)    | MoM%-Acc. Sales L 3M	    | %         | (Cumulative revenue in the past 3 months - Cumulative revenue in the past 3 months last month) /ABS (Cumulative revenue in the past 3 months last month) *100(%)Last month's cumulative revenue for the last three months is calculated based on the latest last month's cumulative revenue for the previous three months before this announcement. [^6]      |
| 30 | `r26a`         | decimal(13,2)    | QoQ%-Acc. Sales L 3M	   | %         | The rate of change in cumulative revenue for the last three months compared to the cumulative revenue for the last three months before the date of this announcement is used to calculate the rate of change for a single moving quarter.Since the company may revise its revenue from time to time, the cumulative revenue for the last three months before this announcement is based on the latest cumulative revenue for the last three months before the announcement date. [^7]    |
| 31 | `d0025`        | decimal(14,0)    | Outstanding Shares    | K shares |The number of common shares outstanding at the end of the year.  |
| 32 | `d0026`        | decimal(11,2)    | Sale/Per Month	    | NTD        | Monthly Revenue / Shares Outstanding	[^8]    |
| 33 | `d0027`        | decimal(11,2)    | Sale/Share-Accu.	  | NTD        | Cumulative Revenue / Outstanding Shares	[^9]    |
| 34 | `r19`          | decimal(11,2)    | Sale/Share-Accu.L12M	  | NTD        | Cumulative Revenue  for the Last 12 Months / Outstanding Shares	[^10]     |
| 35 | `r27`          | decimal(11,2)    | Sale/Share-Accu.L 3M	  | NTD        | Cumulative Revenue for the Last 3 Months / Outstanding Shares	[^11]    |
| 36 | `diff_rmk`     | nchar(300)       | Remark                          | -         | This information has been provided since 2013/01 and is mainly derived from explaining the reasons for the change in revenue from the Market Observation Post System [Monthly Revenue].	|



[^1]:([Sale-Monthly] - [Sale-Monthly,Last Year]) / ABS[Sale-Monthly,Last Year] *100(%)
[^2]:([Sale-Monthly] - [Latest prior month's Sale-Monthly]) / ABS[Latest prior month's Sale-Monthly] *100(%)
[^3]:([Sale-Accumulated] - [Sale-Accu.,L.Y.]) / ABS[Sale-Accu.,L.Y.] *100(%)
[^4]:([Sale-Accu.,Last 12M] - [Sale-Accu.,L.Y.12M]) / ABS[Sale-Accu.,L.Y.12M] *100(%)
[^5]:([Sale-Accu.,Last 3M] - [Sale-Accu.,L.Y.3M]) / ABS[Sale-Accu.,L.Y.3M] *100(%)
[^6]:([Sale-Accu.,Last 3M] - [Last month's Sale-Accu.,Last 3M]) / ABS[Last month's Sale-Accu.,Last 3M] *100(%)
[^7]:([Sale-Accu.,Last 3M] - [Last 3 months ago Sale-Accu.,Last 3M]) / ABS[Last 3 months ago Sale-Accu.,Last 3M] *100(%)
[^8]:[Sale-Monthly] / [Outstanding Shares]
[^9]:[Sale-Accumulated] / [Outstanding Shares]
[^10]:[Sale-Accu.,Last 12M] / [Outstanding Shares]
[^11]:[Sale-Accu.,Last 3M] / [Outstanding Shares]




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



