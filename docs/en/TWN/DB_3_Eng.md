#[Repurchase Performance Statistics (Listed/OTC)] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Data Source**: Market Observation Post System, Financial Statements  
    - **Data Period**: Since 2008  
    - **Data Frequency**: Irregular  
    - **Table Category**: Company Operations  
    - **Reference Code Table**: TWN/AIND  
    - **Code Column**: coid  
    - **Publication Date Column**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

- __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">6,650+</span>**

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>

## Field Descriptions

| #  | Field Name | Data Type     | Field Description                         | Unit     | Field Explanation                                                                 |
|----|------------|---------------|--------------------------------------------|----------|-----------------------------------------------------------------------------------|
| 1  | `coid`       | char(7)       | Company Code                               | -        | Company Code                                                                      |
| 2  | `mdate`      | datetime      | Board Resolution Date                      | -        | Board Resolution Date                                                             |
| 3  | `key3`       | decimal(3,0)  | Sequence Number                            | -        | Number of repurchase applications on the same resolution date                     |
| 4  | `times`      | decimal(6,1)  | Repurchase Count                           | -        | Integer part for public data; decimal for financial disclosure data               |
| 5  | `tzdate1`    | datetime      | Repurchase Period Start Date               | -        | Start date of repurchase period                                                   |
| 6  | `tzdate`     | datetime      | Repurchase Period End Date                 | -        | End date of repurchase period                                                     |
| 7  | `uprc_u`     | decimal(9,2)  | Lower Bound of Price Range         | NTD       | Lower bound of repurchase price range                                             |
| 8  | `uprc_l`     | decimal(9,2)  | Upper Bound of Price Range           | NTD      | Upper bound of repurchase price range                                             |
| 9  | `prc_ul`     | decimal(9,0)  | Max Allowable Repurchase Amount    | K NTD    | Maximum repurchase amount                                                         |
| 10 | `share1`     | decimal(9,0)  | Expected Repurchase Volume     | K shares | Expected number of shares to repurchase                                           |
| 11 | `ttlprc`     | decimal(9,0)  | Total Repurchase Amount           | K NTD    | Total repurchase value                                                            |
| 12 | `croi`       | decimal(9,4)  | Return During Repurchase Period        | %        | Stock return during the repurchase period                                         |
| 13 | `wcroi`      | decimal(9,4)  | Market Return During Period            | %        | Weighted index return during the repurchase period                                |
| 14 | `croi_b`     | decimal(9,4)  | Stock Return One Month Before         | %        | Accumulated return one month before the resolution date                           |
| 15 | `wcroi_b`    | decimal(9,4)  | Market Return One Month Before         | %        | Weighted index return one month before                                            |
| 16 | `croi_n`     | decimal(9,4)  | Stock Return One Month After          | %        | Accumulated return one month after repurchase end date                            |
| 17 | `wcroi_n`    | decimal(9,4)  | Market Return One Month After         | %        | Weighted index return one month after                                             |
| 18 | `ttl_ex`     | decimal(9,0)  | Institutional Investor Net Buy/Sell| K NTD    | Net buy/sell by institutional investors during the repurchase period              |
| 19 | `chg_ls`     | decimal(9,0)  | Total Margin Change             | K shares | Total change in margin during the repurchase period                               |
| 20 | `r505_b`     | decimal(15,2) | Debt Ratio Before                     | %        | Latest debt ratio before start date (parent company)                              |
| 21 | `r505_n`     | decimal(15,2) | Debt Ratio After                      | %        | Latest debt ratio_


## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ATINVS2.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATINVS2')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata <- Tejapi('TWN/ATINVS2')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATINVS2");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATINVS2")
        ```

<div style="margin-bottom: 80px;"></div>