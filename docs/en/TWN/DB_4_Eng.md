#[Listed Companies Monthly Revenue and Earnings] Detailed Field Description


## Table Overview

Listed Companies Monthly Revenue and Earnings (TWN/AVSALE)

!!! abstract "Abstract"
    - **Data Coverage**: Listed companies on TWSE, TPEx, and Emerging Stock Market 
    - **Data Source**: Primarily from monthly revenue announcements; earnings, estimates, and non-performing loan ratios are compiled from company preliminary earnings announcements, financial reports, capital formation files, and news reports. 
        - Before December 2012, standalone revenue disclosure was mandatory by the 10th of each month; consolidated revenue mainly came from company news reports, material information, and investor conferences. 
        - From January 2013, after adopting IFRS (International Financial Reporting Standards), financial statements are primarily based on consolidated statements. To align with this change, monthly revenue reporting shifted from "standalone revenue" to "consolidated revenue." Companies without subsidiaries should report individual revenue. Companies on the Emerging Stock Market and non-listed public companies began implementing this in the 2015 fiscal year, but could adopt it earlier from January 2013. 
        - Information during the 2012 IFRS transition period maintains the originally disclosed values, but for companies that began adopting IFRS in 2013, the previous year's comparative information is replaced with post-IFRS conversion values.
    - **Data Period**: Since 2008  
    - **Data Frequency**: Monthly 
    - **Table Category**: Trading 
    - **Reference Code Table**: `TWN/AIND`  
    - **Code Column**: 
    - **Publication Date Column**: `mdate`

## Key Indicators

<div class="grid cards grid-3" markdown>

<!-- - __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">674,827+</span>** -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>

## Field Descriptions

| #  | Field Name   | Data Type     | Field Chinese Name                | Unit  | Field Explanation                                                                             |
|----|--------------|---------------|----------------------------------|-------|---------------------------------------------------------------------------------------------- |
| 1  | `coid`       | char(7)       | Company                          | -     | Company                                                                                 |
| 2  | `mdate`      | datetime      | Year-Month                 | -     |Year-Month                                                                              |
| 3  | `annd_s`     | datetime      | Revenue Release Date                 | -     |Since monthly revenue information comes from three main sources: monthly revenue announcements, material information, and investor conferences, the revenue release date is the earliest date when revenue-related information is disclosed.[^1]                                                                               |
| 4  | `d0001`      | decimal(12,0) | Monthly Revenue                | - | When releasing new monthly revenue for the following year, if there is an update to "last year's monthly revenue," this item will be retroactively adjusted.[^2]|
| 5  | `d0002`      | decimal(12,0) | Last Year's Monthly Revenue               | Thousand     |Last year's monthly revenue for the same period. From 2013/01, changed to primarily consolidated data.                        |
| 6  | `d0003`      | decimal(9,2)  | Monthly Revenue Growth Rate  | -     | (Monthly Revenue - Last Year's Monthly Revenue) / ABS(Last Year's Monthly Revenue) *100(%)[^2] |
| 7  | `d0004`      | decimal(9,2)  | Monthly Revenue MoM Change         | -     | (Current Month's Revenue - Previous Month's Revenue) / ABS(Previous Month's Revenue) *100(%)[^3]|
| 8  | `d0005`      | decimal(12,0) | YTD Revenue        | -   |For non-calendar fiscal years, converted to accumulate from January.[^2]|
| 9  | `d0006`      | decimal(12,0) | Last Year's YTD Revenue           |Thousand    | For non-calendar fiscal years, converted to accumulate from January.[^2]|
| 10 | `d0007`      | decimal(9,2)  | YTD Revenue Growth Rate    | -     | (YTD Revenue - Last Year's YTD Revenue) / ABS(Last Year's YTD Revenue) *100(%)[^2] |
| 11 | `t8107`      | decimal(12,0) | TTM Revenue    | Thousand     | Sum of monthly revenues for the past 12 months, calculated from the current month.[^4] |
| 12 | `t8111`      | decimal(12,0) | Last Year's TTM Revenue    | -    | Sum of last year's monthly revenues for the past 12 months, calculated from the same month last year.[^4] |
| 13 | `r18`        | decimal(9,2)  | TTM Revenue Growth Rate    | -     | (TTM Revenue - Last Year's TTM Revenue) / ABS(Last Year's TTM Revenue) *100(%)[^4] |
| 14 | `t8133`      | decimal(12,0) | 3-Month Revenue    | Thousand     | Sum of monthly revenues for the past 3 months, calculated from the current month.[^5] |
| 15 | `t8134`      | decimal(12,0) | Last Year's 3-Month Revenue    | -     | Sum of last year's monthly revenues for the past 3 months, calculated from the same month last year.[^5] |
| 16 | `r25`        | decimal(9,2)  | 3-Month Revenue Growth Rate    | -     | (3-Month Revenue - Last Year's 3-Month Revenue) / ABS(Last Year's 3-Month Revenue) *100(%)[^5]|
| 17 | `r26`        | decimal(9,2)  | 3-Month Revenue MoM Change    | -     | 3-Month Revenue MoM Change % = `(Current 3-Month Revenue - Previous Month's 3-Month Revenue) / ABS(Previous Month's 3-Month Revenue) *100(%)`[^6] |
| 18 | `r26a`       | decimal(9,2)  | 3-Month Revenue Variation Rate    | -     | `3-Month Revenue Variation Rate % ([3-Month Revenue] – Initial [3-Month Revenue]) / ABS( Initial [3-Month Revenue]) * 100(%)` |

*[Initial]: Initial refers to the 3-month revenue of the month prior to the start of the current 3-month period. For example, the initial period for the 3-month revenue of 2016/11 refers to the 3-month revenue of 2016/08.


[^1]: This information has been provided by TEJ since 2013 
[^2]: Before 2012/12, this was parent company revenue data; from 2013/01, it was changed to primarily consolidated revenue data. 
[^3]: Before 2012/12, this compared parent company revenue data; from 2013/01, it compared primarily consolidated revenue data. Due to the inconsistency in comparison baseline between 2012/12 and 2013/01, this calculation was not available for 2013/01 and resumed from 2013/02. 
[^4]: Before 2012/12, this was parent company revenue data; from 2013/01, it was changed to primarily consolidated revenue data. Due to the difference in disclosure standards before and after 2013/01, consolidated data calculations start from 2013/12. 
[^5]: Before 2012/12, this was parent company revenue data; from 2013/01, it was changed to primarily consolidated revenue data. Due to the difference in disclosure standards before and after 2013/01, consolidated data calculations start from 2013/03. 
[^6]: Before 2012/12, this was parent company revenue data; from 2013/01, it was changed to primarily consolidated revenue data. Due to the difference in disclosure standards before and after 2013/01, consolidated data calculations start from 2013/04. 


## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/AVSALE.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AVSALE')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AVSALE')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AVSALE");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AVSALE")
        ```