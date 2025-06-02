#[Repurchase Performance Statistics (TSE/TPEX)] – Detailed Field Descriptions


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

| # | Field  | Data Type       | Field Name   | Unit | Field Description|
|----|------------|---------------|--------------------------------------------|----------|-----------------------------------------------------------------------------------|
| 1  | `coid`       | char(7)       | Co_ID          | -        | Company Code   |
| 2  | `mdate`      | datetime      | Date of Dir. Meeting                     | -        | Date of Board Meeting  |
| 3  | `key3`       | decimal(3,0)  | No.    | -        | Number of repurchase applications on the same resolution date                     |
| 4  | `times`      | decimal(6,1)  | Buying Times	 | -        | Number of repurchase applications: integer values represent public announcement data, while decimal values reflect financial statement disclosures.   |
| 5  | `tzdate1`    | datetime      | Announced Beginning	        | -        | Start date of repurchase period                                                   |
| 6  | `tzdate`     | datetime      | Announced Ending	             | -        | End date of repurchase period                                                     |
| 7  | `uprc_u`     | decimal(9,2)  | Lower Unit Price   | NTD       | Lower bound of repurchase price range       |
| 8  | `uprc_l`     | decimal(9,2)  | Upper Unit Price     | NTD      | Upper bound of repurchase price range     |
| 9  | `prc_ul`     | decimal(9,0)  | Buyable Upper Amount      | K NTD    | Upper limit on total amount of treasury stock   |
| 10 | `share1`     | decimal(9,0)  | Announced Buying Vol	   | K shares | Expected number of shares to repurchase |
| 11 | `ttlprc`     | decimal(9,0)  | Amount of Buying	  | K NTD    | Total repurchase value                                                            |
| 12 | `croi`       | decimal(9,4)  | ROI during a Period%	    | %      | Stock return during the repurchase period                                         |
| 13 | `wcroi`      | decimal(9,4)  | WROI during a Period%	   | %    | TAIEX[^1] return during the repurchase period                                |
| 14 | `croi_b`     | decimal(9,4)  | ROI Before Announce%	      | %        | Accumulated return one month before the start date of the repurchase period                         |
| 15 | `wcroi_b`    | decimal(9,4)  | WROI Before Announce%	      | %        | TAIEX return one month before the start date of the repurchase period                                            |
| 16 | `croi_n`     | decimal(9,4)  | ROI After the End%	    | %        | Accumulated return one month after the end date of repurchase period                            |
| 17 | `wcroi_n`    | decimal(9,4)  | WROI After the End%	| %        | TAIEX return one month after the end date of repurchase period              |
| 18 | `ttl_ex`     | decimal(9,0)  | Institution Trading	| K NTD    | Net buy/sell by institutional investors during the repurchase period              |
| 19 | `chg_ls`     | decimal(9,0)  | Margin Transaction	| K shares | Total change in margin during the repurchase period                               |
| 20 | `r505_b`     | decimal(15,2) | Debt ratio Before Announce%	                  | %        |  Debt ratio before the start date of the repurchase period  (parent company)                              |
| 21 | `r505_n`     | decimal(15,2) | Debt ratio After the End%	             | %        |  Debt ratio after the end date of repurchase period (parent company)|
| 22  | t0112_b     | decimal(12,0) | Cash & Eq. Before Announce | K NTD | Cash & Equivalents before the start date of the repurchase period (parent company)        |
| 23  | t0112_n     | decimal(12,0) | Cash & Eq. After the End | K NTD | Cash & Equivalents after the end date of repurchase period (parent company)               |
| 24  | cptn_b      | decimal(15,2) | Treasure over Cash Before Announce | %    | Total repurchase value over Cash before the start date of the repurchase period             |
| 25  | cptn_n      | decimal(15,2) | Treasure over Cash After the End | %    | Total repurchase value over Cash after the end date of repurchase period            |
| 26  | chg_ldir    | decimal(15,2) | Change of DIR% Before Announce    | %    | Change of Director Shareholding before the resolution date      |
| 27  | chg_ndir    | decimal(15,2) | Change of DIR% After the End    | %    | Change of Director Shareholding after the end date of repurchase period     |
| 28  | chg_lmgt    | decimal(15,2) | Change of MGT% Before Announce    | %    | Change of Management Shareholding before the resolution date    |
| 29  | chg_nmgt    | decimal(15,2) | Change of MGT% After the End    | %    | Change of Management Shareholding after the end date of repurchase period   |


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


[^1]:TAIEX:Taiwan Stock Exchange Capitalization Weighted Stock Index