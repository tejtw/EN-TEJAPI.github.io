#[Repurchase Data of TSE/TPEX Companies – Large-scale Buybacks] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ATINVS1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Column**: coid
    - **Publication Date Column**: mdate


## Key Indicators

<div class="grid cards grid-3" markdown>

<!-- - __Record Count__  
  **<span style="font-size: 1.8em; color: #2196f3;">10,580+</span>** -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions

| # | Field  | Data Type       | Field Name   | Unit | Field Description|
|----|--------------|---------------|----------------------------------|-------------|----------------------------------------------------------------------------------------------|
| 1  | `coid`       | char(7)       | Co_ID	                     | -           | Company Code                                                                                 |
| 2  | `mdate`      | datetime      | Buying Day	                  | -           | Date of Purchase|
| 3  | `key3`       | char(3)       | OD                 | -           | Serial number  |
| 4  | `ts_od`      | decimal(6,1)  | Applying Times	               | -           | The board of directors, in a significant move, has resolved to buy back shares for the nth time. This decision, which includes the announcement of non-regular treasury shares, is a crucial part of our material information and financial report.|
| 5  | `buy_od`     | decimal(6,1)  | Buying Times	                 | -           | Nth buyback reaches a certain standard, the number of decimal places is the number of non-regular treasury stock announcements (material information or financial reports).|
| 6  | `share1`     | decimal(9,0)  | Buying Volume	 | -      | Number of buybacks. Some companies disclose the cumulative number of buybacks in their announcements, and TEJ will check it logically here. |
| 7  | `uprc1`      | decimal(9,2)  | Average Buying Price	         |  -   | Total Purchase Price / Number of Buybacks                 |
| 8  | `ttlprc1`    | decimal(9,0)  | Buying Amount	         |   -  | Total amount of shares bought back.   |
| 9  | `ac_shr`     | decimal(9,0)  | Accumulate Volume	   |   -    | The accumulated number of shares held by the company (in sheets) is based on the data from the announcement of the completion of the buyback. |
| 10 | `ac_pct`     | decimal(6,2)  | Accumulate Volume%	    |       -     | 	The accumulated number of shares held / outstanding in yuan, in the USA: dollar, etc.                       |

## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ATINVS1.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATINVS1')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata <- Tejapi('TWN/ATINVS1')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATINVS1");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATINVS1")
        ```



