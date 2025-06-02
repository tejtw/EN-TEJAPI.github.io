#[Borrowing & Lending Balances] – Detailed Field Descriptions


## Table Overview

!!! abstract "Abstract"
    - **Table Name**：TWN/ABORROW
    - **Data Source**: Taiwan Stock Exchange Corporation - SBL Disclosures.
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
| **#** | Field  | Data Type       | Field Name   | Unit | Field Description|
|-----|--------------|---------------|----------------------------|----------|----------------------------------------------------------------------------------|
| 1   | coid         | char(7)       | Company Code               | -        | Stock code                                                                      |
| 2   | mdate        | datetime      | Date                       | -        | Trade date                                                                      |
| 3   | close_d      | decimal(12,4) | Close                      | Dollar   | Closing price                                                                   |
| 4   | tborrow      | decimal(15,0) | TOT_Borrowing              | Kshares  | Total Security Borrowing By Broker / Security Finance Firms                    |
| 5   | treturn      | decimal(15,0) | TOT_Return                 | Kshares  | Total Security Return by TWSE and by Brokers / Security Finance Firms          |
| 6   | tsbl_bal     | decimal(15,0) | TOT_SBL Balance            | Kshares  | Total SBL balance by TWSE and by Brokers / Security Finance Firms              |
| 7   | tsbl_mv      | decimal(15,0) | TOT_SBL MV Balance         | Dollar   | Total SBL Market Value balance by TWSE and by Brokers / Security Finance Firms |
| 8   | sborrow      | decimal(15,0) | TSE_Borrowing              | Kshares  | TWSE total borrowing                                                 |
| 9   | sreturn      | decimal(15,0) | TSE_Return                 | Kshares  | TWSE total return                                                     |
| 10  | ssbl_bal     | decimal(15,0) | TSE_SBL Balance            | Kshares  | TWSE SBL balance                                                      |
| 11  | ssbl_mv      | decimal(15,0) | TSE_SBL MV Balance         | Dollar   | TWSE SBL Market Value balance                                                   |
| 12  | nborrow      | decimal(15,0) | Brokers_Borrowing          | Kshares  | Brokers total borrowing                                               |
| 13  | nreturn      | decimal(15,0) | Brokers_Return             | Kshares  | Brokers total return                                                   |
| 14  | nsbl_bal     | decimal(15,0) | Brokers_SBL Balance        | Kshares  | Brokers SBL balance                                                   |
| 15  | nsbl_mv      | decimal(15,0) | Brokers_SBL MV Balance     | Dollar   | Brokers SBL Market Value balance                                                |
| 16  | mkt          | char(5)       | Market                     | -        | <li>TSE = Listing company </li><li>OTC = Over-the-counter company     |



## API Request Examples

!!! example "Examples"

    === "REST"
    
        ```http
        GET https://api.tej.com.tw/api/datatables/TWN/ABORROW.json?api_key=<YOURAPIKEY>
        ```
    
    === "Python"
    
        ```python
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ABORROW')
        ```
    
    === "R"
    
        ```r
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ABORROW')
        ```
    
    === "C#"
    
        ```csharp
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ABORROW");
        ```
    
    === "vb.net"
    
        ```vbnet
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ABORROW")
        ```



