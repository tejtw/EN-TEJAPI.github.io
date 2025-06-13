# [Herding Effect] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/AHE
    - **Data Source**: Taiwan Stock Exchange (TWSE), Taipei Exchange (TPEx), and other TEJ data
    - **Reference Code Table**: TWN/ANPRCSTD 
    - **Code Column**: coid
    - **Publication Date Column**: mdate  


## Key Indicators

<div class="grid cards" markdown>

<!-- -   __Number of Records__

    ---

    Over 198,089 -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>



## Field Descriptions
| # | Field  | Data Type       | Field Name   | Unit | Field Description|
|-------|------------|------------------|-------------------------------|------|-----------------------------------------------------------------------------------------------------------------|
| 1  | `coid`     | `char(7)`        | Stock ID                 | –    |Stock code|
| 2  | `mdate`    | `datetime`       | Date             | –    | Trade date    |
| 3  | `buy`   | `decimal(9,4)`   | Buy Index		| –    | Number of Brokerages for Securities Purchased.(Actual Number*0.98)	|
| 4  | `sell`   | `decimal(9,4)`       | Sell Index| –    | Number of Brokerages for Securities Sold.(Actual Number*0.98)	 |
| 5  | `dif`  | `decimal(9,4)`       |  Dif| –    | Buy Index - Sell Index	|
| 6 | `nets`   | `decimal(10,0)`        | 	Net Buy(1000s)	  | T    |Applying rigorous filtering methods to calculate the net buying and selling activity of brokerage.  |
| 7 | `netv`   | `decimal(10,0)`        | Net Buy(﹩1000)  | T  |Expressing the net buying and selling volume in terms of amounts make it more intuitively.|



## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/AHE.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AHE')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AHE')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AHE");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AHE")
        ```

??? note  
    
    - Net Buy(1000s) Formula：Net Buy(1000s) = NSUM*(1-(Deviation／100))
    - Net Buy(﹩1000) Formula：Net Buy(﹩1000) = Net Buy(1000s)*Security Close Price

    Remaek：

    - `Deviation`：The single digit value of the day's date.（EX:20220817, Deviation=7.）

    - `NSUM`：Number of Brokerages for Securities Purchased－Number of Brokerages for Securities Selled.

    - If NSUM>0, Choose buying brokerages with ascending purchased quantities, equivalent to the difference between them, and calculate the total purchased quantity of securities.

    - If NSUM<0, Choose selling brokerages with ascending sold quantities, equivalent to the difference between them, and calculate the total sold quantity of securities.　