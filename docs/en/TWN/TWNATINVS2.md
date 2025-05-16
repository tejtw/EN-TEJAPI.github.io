#[Repurchase Performance Statistics (Listed/OTC)] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ATINVS2
    - **Data Source**: Market Observation Post System (MOPS), Taiwan, Financial Statements  
    - **Reference Code Table**: TWN/ANPRCSTD  
    - **Code Column**: coid  
    - **Publication Date Column**: mdate

## Key Indicators

<div class="grid cards grid-3" markdown>

<!-- - __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">6,650+</span>** -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>

## Field Descriptions

| #  | Field Name | Data Type     | Field Description                         | Unit     | Field Explanation                                                                 |
|----|------------|---------------|--------------------------------------------|----------|-----------------------------------------------------------------------------------|
| 1  | `coid`       | char(7)       | Co_ID          | -        | Company Code   |
| 2  | `mdate`      | datetime      | Date of Dir. Meeting                     | -        | Date of Board Meeting  |
| 3  | `key3`       | decimal(3,0)  | No.    | -        | Number of repurchase applications on the same resolution date                     |
| 4  | `times`      | decimal(6,1)  | Buying Times	 | -        | Integer part for public data; decimal for financial disclosure data               |
| 5  | `tzdate1`    | datetime      | Announced Beginning	        | -        | Start date of repurchase period                                                   |
| 6  | `tzdate`     | datetime      | Announced Ending	             | -        | End date of repurchase period                                                     |
| 7  | `uprc_u`     | decimal(9,2)  | Lower Unit Price   | NTD       | Lower bound of repurchase price range                                             |
| 8  | `uprc_l`     | decimal(9,2)  | Upper Unit Price(dollar)      | NTD      | Upper bound of repurchase price range                                             |
| 9  | `prc_ul`     | decimal(9,0)  | Buyable Upper Amount	    | K NTD    | Maximum repurchase amount                                                         |
| 10 | `share1`     | decimal(9,0)  | Announced Buying Vol	   | K shares | Expected number of shares to repurchase                                           |
| 11 | `ttlprc`     | decimal(9,0)  | Amount of Buying	  | K NTD    | Total repurchase value                                                            |
| 12 | `croi`       | decimal(9,4)  | ROI during a Period%	    | %        | Stock return during the repurchase period                                         |
| 13 | `wcroi`      | decimal(9,4)  | WROI during a Period%	   | %        | Weighted index return during the repurchase period                                |
| 14 | `croi_b`     | decimal(9,4)  | ROI Before Announce%	      | %        | Accumulated return one month before the resolution date                           |
| 15 | `wcroi_b`    | decimal(9,4)  | WROI Before Announce%	      | %        | Weighted index return one month before                                            |
| 16 | `croi_n`     | decimal(9,4)  | ROI After the End%	    | %        | Accumulated return one month after repurchase end date                            |
| 17 | `wcroi_n`    | decimal(9,4)  | WROI After the End%	| %        | Weighted index return one month after             |
| 18 | `ttl_ex`     | decimal(9,0)  | Institution Trading%	| K NTD    | Net buy/sell by institutional investors during the repurchase period              |
| 19 | `chg_ls`     | decimal(9,0)  | Margin Transaction	| K shares | Total change in margin during the repurchase period                               |
| 20 | `r505_b`     | decimal(15,2) | Debt ratio Before A.%	                  | %        | Latest debt ratio before start date (parent company)                              |
| 21 | `r505_n`     | decimal(15,2) | Debt ratio After End%	             | %        | Latest debt ratio_|
| 22  | t0112_b     | decimal(12,0) | Cash & Eq. Before A. | K NTD | Cash & Equivalents Before Announcement    |
| 23  | t0112_n     | decimal(12,0) | Cash & Eq. After End | K NTD | Cash & Equivalents After End              |
| 24  | cptn_b      | decimal(15,2) | Treasure over Cash B | %    | Treasury Stock over Cash Before           |
| 25  | cptn_n      | decimal(15,2) | Treasure over Cash A | %    | Treasury Stock over Cash After            |
| 26  | chg_ldir    | decimal(15,2) | Change of DIR% B.    | %    | Change of Director Shareholding Before    |
| 27  | chg_ndir    | decimal(15,2) | Change of DIR% A.    | %    | Change of Director Shareholding After     |
| 28  | chg_lmgt    | decimal(15,2) | Change of MGT% B.    | %    | Change of Management Shareholding Before  |
| 29  | chg_nmgt    | decimal(15,2) | Change of MGT% A.    | %    | Change of Management Shareholding After   |


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