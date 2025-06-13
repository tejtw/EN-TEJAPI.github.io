# [TSE/TPEx Odd Lot Trade(Daily)] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ALOT
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
| #  | Field           | Data Type      | Field Name  | Unit | Field Description         |
|----|----------|----------------|-------------|------|---------------------|
| 1  | coid     | char(7)        | CO_ID       | –    | The codes prescribed by the Exchange and the OTC.      |
| 2  | mdate    | datetime       | Date   | –    | Stock Price Information Day.     |
| 3  | mkt_e    | char(6)        | Market                   | –    | There are two types: listed companies, “TSE,” and over-the-counter companies, “OTC.”	 |
| 4  | fst_price_intra  | decimal(11,4)  | First_Price_Intraday     | –    | The first transaction price during the intraday.                         |
| 5  | lst_price_intra  | decimal(11,4)  | Last_Price_Intraday      | –    | The last traded price during the intraday.                               |
| 6  | high_intra       | decimal(11,4)  | Highest_Price_Intraday   | –    | Highest intraday price.                                                  |
| 7  | low_intra        | decimal(11,4)  | Lowest_Price_Intraday    | –    | Lowest intraday price.                                                   |
| 8  | vol_intra        | decimal(17,2)  | Volume_Intraday          | –    | Number of shares traded intraday.                                        |
| 9  | amt_intra        | decimal(17,3)  | Amount_Intraday          | –    | The amount of intraday trading.                                          |
| 10  | trn_intra        | decimal(9,0)   | Transaction_Intraday     | –    | The number of intraday trades.                                           |
| 11  | bid_intra        | decimal(11,4)  | Best_Bid_price_Intraday  | –    | The last bid quote of the intraday.                                      |
| 12  | bid_vol_intra    | decimal(17,2)  | Best_Bid_Volume_Intraday | –    | A buy quantity willing to buy at the last revealed bid price intraday.   |
| 13  | ask_intra        | decimal(11,4)  | Best_Ask_price_Intraday  | –    | The last sell quote of the intraday.                                     |
| 14  | ask_vol_intra    | decimal(17,2)  | Best_Ask_Volume_Intraday | –    | Volume of sellers willing to sell at the Last Revealed Sell Price intraday.|
| 15  | close_aft        | decimal(11,4)  | Trade_Price_After_Hour   | –    | After-hours trading prices.                                              |
| 16  | vol_aft          | decimal(17,2)  | Volume_After_Hour        | –    | Several shares traded after hours.                                       |
| 17  | amt_aft          | decimal(17,3)  | Amount_After_Hour        | –    | After-hours turnover.            |
| 18  | trn_aft          | decimal(9,0)   | Transaction_After_Hour   | –    | Number of after-hours trades.          |
| 19  | bid_aft          | decimal(11,4)  | Best_Bid_price_After_Hour| –    | Last buy quote after market hours.            |
| 20  | bid_vol_aft      | decimal(17,2)  | Best_Bid_Volume_After_Hour| –    | Volume is willing to buy at the last revealed bid price after market hours. |
| 21  | ask_aft          | decimal(11,4)  | Best_Ask_price_After_Hour| –    | The last sell quote was after market hours.     |
| 22  | ask_vol_aft      | decimal(17,2)  | Best_Ask_Volume_After_Hour| –   | Volume that is willing to sell at the last revealed after-hours selling price. |



## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ALOT.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ALOT')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ALOT')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ALOT");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ALOT")
        ```