# [Financial Data – Company Self-Reported Figures] Detailed Field Description


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/AFESTM1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan, Investor Conference  
    - **Reference Code Table**: TWN/APISTKATTR 
    - **Code Field**: coid  
    - **Publication Date Field**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

<!-- - __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">150,610</span>** -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>

## Field Descriptions

| #  | Field Name | Data Type     | Field Description              | Unit   | Field Explanation |
|----|------------|---------------|--------------------------------|--------|-------------------|
| 1  | `coid`       | char(7)       | Company                        | -      | Company code assigned by the exchange |
| 2  | `mdate`      | datetime      | Year/Month                     | -      | Data year and month |
| 3  | `key3`       | char(5)       | Period Type                    | -      | A = Accumulated, Q = Quarterly, TTM = Trailing Twelve Months |
| 4  | `no`         | char(3)       | Sequence Number                | -      | Serial number sorted by statement date for the same year/month |
| 5  | `sem`        | char(1)       | Quarter                        | -      | Quarter identifier |
| 6  | `merg`       | char(1)       | Consolidated (Y/N)             | -      | Y = Consolidated, N = Individual financials |
| 7  | `curr`       | char(4)       | Currency                       | -      | Currency type |
| 8  | `annd`       | datetime      | Statement Date                 | -      | Publication date of the data |
| 9  | `fin_ind`    | char(10)      | Industry Type                  | -      | F = General, H = Banking, B = Insurance, S = Securities, O = Financial Holdings |
| 10 | `ip12`       | decimal(16,2) | Operating Revenue              | T      | Self-reported operating revenue |
| 11 | `gm`         | decimal(16,2) | Gross Profit                   | T      | Self-reported gross profit |
| 12 | `opi`        | decimal(16,2) | Operating Profit               | T      | Self-reported operating profit |
| 13 | `isibt`      | decimal(16,2) | Pre-tax Profit                 | T      | Self-reported profit before tax |
| 14 | `isni`       | decimal(16,2) | Net Profit                     | T      | Self-reported total net income (consolidated) |
| 15 | `isnip`      | decimal(16,2) | Net Profit to Parent Company   | T      | Self-reported net income attributable to parent company |
| 16 | `r306`       | decimal(16,2) | EPS (Pre-tax)                  | NTD    | Earnings per share before tax |
| 17 | `r316`       | decimal(16,2) | EPS (After-tax)                | NTD    | Earnings per share after tax |
| 18 | `eps`        | decimal(16,2) | Basic EPS                      | NTD    | Basic earnings per share calculated using net income attributable to parent |
| 19 | `r105`       | decimal(16,2) | Gross Margin (%)               | %      | (Gross Profit / Operating Revenue) * 100; Not calculated if revenue ≤ 0 |
| 20 | `r106`       | decimal(16,2) | Operating Margin (%)           | %      | (Operating Profit / Operating Revenue) * 100; Not calculated if revenue ≤ 0 |
| 21 | `r107`       | decimal(16,2) | Pre-tax Profit Margin (%)      | %      | (Pre-tax Profit / Operating Revenue) * 100; Not calculated if revenue ≤ 0 |
| 22 | `r108`       | decimal(16,2) | Net Profit Margin (%)          | %      | (Net Profit / Operating Revenue) * 100; Not calculated if revenue ≤ 0 |
| 23 | `r401`       | decimal(16,2) | Revenue Growth Rate (%)        | %      | (Current - Last Year) / ABS(Last Year) * 100 |
| 24 | `r402`       | decimal(16,2) | Gross Profit Growth Rate (%)   | %      | (Current - Last Year) / ABS(Last Year) * 100 |
| 25 | `r403`       | decimal(16,2) | Operating Profit Growth (%)    | %      | (Current - Last Year) / ABS(Last Year) * 100 |
| 26 | `r404`       | decimal(16,2) | Pre-tax Profit Growth (%)      | %      | (Current - Last Year) / ABS(Last Year) * 100 |
| 27 | `r405`       | decimal(16,2) | Net Profit Growth (%)          | %      | (Current - Last Year) / ABS(Last Year) * 100 |


## API Request Examples

!!! example "Examples"

    === "REST API"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/AFESTM1.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get("<YOUR_DB>")
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata <- Tejapi("<YOUR_DB>")
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("<YOUR_DB>");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("<YOUR_DB>")
        ```

<div style="margin-bottom: 80px;"></div>
