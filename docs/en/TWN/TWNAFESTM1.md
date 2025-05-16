# [Financial Data – Company Self-Reported Figures] Detailed Field Description


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/AFESTM1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan, Investor Conference  
    - **Reference Code Table**: TWN/ANPRCSTD 
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
| 1  | `coid`       | char(7)       | Company                        | -      | Company code prepared by Exchange |
| 2  | `mdate`      | datetime      | Year/Month                     | -      | Data year and month |
| 3  | `key3`       | char(5)       | Period Type                    | -      | A = Accumulated, Q = Quarterly, TTM = Trailing Twelve Months |
| 4  | `no`         | char(3)       | Sequence Number                | -      | Prepare the serial number according to the date of preparation under the same year and month. |
| 5  | `sem`        | char(1)       | Quarter                        | -      | Quarter  |
| 6  | `merg`       | char(1)       | Consolidated (Y/N)             | -      | Y = Consolidated, N = Individual financials |
| 7  | `curr`       | char(4)       | Currency                       | -      | Currency  |
| 8  | `annd`       | datetime      | Announce date	                 | -      | Data announcement date	 |
| 9  | `fin_ind`    | char(10)      | Industry Type                  | -      | F = Normal Industry; H = Bank; B = Insurance; S = Security; O = Finance Holding Bank |
| 10 | `ip12`       | decimal(16,2) | Total_Operating_Revenue	       | T      | Operating income settled by company itself.	 |
| 11 | `gm`         | decimal(16,2) | Gross_Profit_Loss_from_Operations	    | T      | Gross profit settled by company itself.	 |
| 12 | `opi`        | decimal(16,2) | Net_Operating_Income_Loss	 | T      | Net Operating Income (Loss) settled by company itself.	 |
| 13 | `isibt`      | decimal(16,2) | Profit_Before_Tax       | T      | Profit before tax settled by company itself.	 |
| 14 | `isni`       | decimal(16,2) | Net_Income_Loss	         | T      | Net Income (Loss) settled by company itself.	 |
| 15 | `isnip`      | decimal(16,2) | Net_Income_Attributable_to_Parent   | T      | Net income attributed to Parent settled by company itself. |
| 16 | `r306`       | decimal(16,2) | Pre_Tax_Income_Per_Share	    | NTD    | 	Pre-tax income per share settled by company itself. |
| 17 | `r316`       | decimal(16,2) | Net_Income_Per_Share               | NTD    | Net income per share settled by company itself. |
| 18 | `eps`        | decimal(16,2) | Basic_Earnings_Per_Share   | NTD    | Basic earnings per share settled by company itself, calculated from net income attributed to Parent.	 |
| 19 | `r105`       | decimal(16,2) | Gross_Margin_Rate_%  | %      | Gross margin / Total operating income *100(%)If operating income <= 0, do not count. |
| 20 | `r106`       | decimal(16,2) | 	Operating_Income_Rate_%     | %      | Operating profit / operating income *100(%)If operating income <=0, do not count. |
| 21 | `r107`       | decimal(16,2) | Pre_Tax_Income_Rate_%      | %      | 	Pre-tax income / operating income *100(%)If operating income <=0, do not count. |
| 22 | `r108`       | decimal(16,2) | Net_Income_Rate_%      | %      | 	Net income / operating income *100(%)If operating income <=0, do not count. |
| 23 | `r401`       | decimal(16,2) | Sales_Growth_Rate	        | %      | The growth margin between current period operating income and the counterpart in last year.(current period gross profit - gross profit same time last year) / ABS(operating income same time last year) *100(%) |
| 24 | `r402`       | decimal(16,2) | Gross_Margin_Growth_Rate	  | %      | The growth margin between current period gross profit and the counterpart in last year.(current period gross profit - gross profit same time last year) / ABS (operating profit same time last year) *100(%) |
| 25 | `r403`       | decimal(16,2) | Operating_Income_Growth_Rate    | %      | The growth margin between current period operating income and the counterpart in last year.(current period operating income - operating income same time last period) / ABS (operating income same time last year) *100(%) |
| 26 | `r404`       | decimal(16,2) | Pre_Tax_Income_Growth_Rate    | %      | The growth margin between current period total operating profit and the counterpart in last year.(current period total operating profit - total operating preofit same time last year) / ABS (total operating profit same time last year) *100(%) |
| 27 | `r405`       | decimal(16,2) | Net_Income_Growth_Rate	          | %      | The growth margin between current period net income and the counterpart in last year.(current period net income - net income same time last year) / ABS (net income same time last year) *100(%) |


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
        data = tejapi.get("TWN/AFESTM1")
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata <- Tejapi("TWN/AFESTM1")
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AFESTM1");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AFESTM1")
        ```

<div style="margin-bottom: 80px;"></div>
