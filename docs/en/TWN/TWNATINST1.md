# [FINI / Dealer /Mutual Fund Net Buy/Sell& Holding] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**：TWN/ATINST1
    - **Data Source**: Taiwan Stock Exchange (TWSE) and Taipei Exchange (TPEx)
    - **Reference Code Table**: TWN/ANPRCSTD
    - **Code Column**: coid
    - **Publication Date Column**: mdate


## Key Indicators

<div class="grid cards" markdown>

<!-- -   __Number of Records__

    ---

    Over 5,799 -->

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>


## Field Descriptions

| **#** | Field  | Data Type       | Field Name   | Unit | Field Description|
|-------|----------------|------------------|-----------------------------------------|------|---------------------|
| 1   | coid        | char(7)       | Security Name                    | -           | TWSE and TPEx Code                                                              |
| 2   | mdate       | datetime      | YY/MM/DD                         | -           | Date                                                                                             |
| 3   | qfii_ex1    | decimal(9,0)  | QFII [^1] Net S/B            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx). (Fund from mainland China was included since July 1, 2009)                         |
| 4   | qfii_p      | decimal(9,2)  | QFII Net S/B M.Cap           | Million NTD | Buy / Sell Market Cap. Derived by TEJ: QFII Net S/B x closed price / 1000                   |
| 5   | ttl_stk     | decimal(9,0)  | QFII Holding Shares    | K shares     | <li>Data after 2002/12/16 is derived by TEJ</li><li>Data before 2002/12/15 is compiled by the TWSE</li><li>Including Mainland Chinese capital since July 1, 2009</li>|
| 6   | qfiimv      | decimal(12,2) | QFII Holding M.Cap         | Million NTD | QFII Holding Shares x closed price / 1000                                                     |
| 7   | fund_ex     | decimal(9,0)  | Local Fund Net S/B            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).  |
| 8   | fund_p      | decimal(9,2)  | Local Fund Net S/B M.Cap          | Million NTD | Derived by TEJ: Local Fund Net S/B x closed price / 1000                                                               |
| 9   | fld008      | decimal(9,0)  | Local Fund Holding Shares           | K shares     | Derived by TEJ      |
| 10  | fundmv      | decimal(12,2) | Local Fund Holding M.Cap          | Million NTD | Local Fund Holding Shares * closed price / 1000                                                        |
| 11  | dlr_ex      | decimal(9,0)  | Dealer Net S/B           | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).     |
| 12  | dlr_p       | decimal(9,2)  | Dealer Net S/B M.Cap        | Million NTD | Derived by TEJ: Dealer Net S/B x closed price / 1000                                       |
| 13  | dlrp_ex     | decimal(9,0)  | Dealer(Proprietary) Net VOL      | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).                   |
| 14  | dlrp_p      | decimal(12,2) | Dealer(Proprietary) Net AMT      | Million NTD | Derived by TEJ: Dealer(Proprietary) Net VOL x closed price / 1000                                                |
| 15  | dlrh_ex     | decimal(9,0)  | Dealer(Hedge) Net VOL            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).                               |
| 16  | dlrh_p       | decimal(12,2) | Dealer(Hedge) Net AMT         | Million NTD | Derived by TEJ: Dealer(Hedge) Net VOL x closed price / 1000                                |
| 17  | fld011       | decimal(9,0)  | Dealer Holding Shares       | K shares     | TEJ calculate and estimated.(Based on dealers’ monthly holdings in conjunction with their net S/B)    |
| 18  | dlrmv        | decimal(12,2) | Dealer Holding M.Cap    | Million NTD | Dealer Holding Shares x closed price / 1000                                       |
| 19  | ttl_ex       | decimal(9,0)  | Total Inst.Net S/B    | K shares     | Total institutional investors net buy(sell) = QFII Net S/B + Local Fund Net S/B + Dealer Net S/B |
| 20  | ttl_p        | decimal(9,2)  | Total Inst.Net S/B M.Cp      | Million NTD | Derived by TEJ: Total Inst.Net S/B x closed price / 1000                                   |
| 21  | fld014       | decimal(9,0)  | Total Holding Shares       | K shares     | Total institutional investors holding shares = QFII Holding Shares + Local Fund Holding Shares + Dealer Holding Shares   |
| 22  | ttlmv        | decimal(12,2) | Total Holding M.Cap      | Million NTD | Total Holding Shares x closed price / 1000                                 |
| 23  | qfii_buy     | decimal(9,0)  | QFII Buy            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).                                                             |
| 24  | qfii_sell    | decimal(9,0)  | QFII Sell            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).             |
| 25  | fd_buy       | decimal(9,0)  | Local Fund Buy              | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).             |
| 26  | fd_sell      | decimal(9,0)  | Local Fund Sell             | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).    |
| 27  | dlr_buy      | decimal(9,0)  | Dealer Buy            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).            |
| 28  | dlr_sell     | decimal(9,0)  | Dealer Sell           | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).                 |
| 29  | dlrp_buy     | decimal(9,0)  | Dealer(Proprietary) Buy       | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).          |
| 30  | dlrp_sell    | decimal(9,0)  | Dealer(Proprietary) Sell      | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).                |
| 31  | dlrh_buy     | decimal(9,0)  | Dealer(Hedge) Buy             | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).             |
| 32  | dlrh_sell    | decimal(9,0)  | Dealer(Hedge) Sell            | K shares     | Data compiled by the Taiwan Stock Exchange (TWSE) or Taipei Exchange (TPEx).              |
| 33  | t_pct        | decimal(9,2)  | QFII Holding %              | %           | <li>Stock: QFII Holding Shares / Outstanding Shares</li><li>Industry: Market value of QFII holdings / Total market value of outstanding shares</li> |
| 34  | fld022       | decimal(9,2)  | Local Fund Holding %                | %           | <li>Stock: Local Fund Holding Shares / Outstanding Shares</li><li>Industry: Market value of Local Fund holdings / Total market value of outstanding shares</li> |
| 35  | fld023       | decimal(9,2)  | Dealer Holding %              | %           | <li>Stock: Dealer Holding Shares / Outstanding Shares</li><li>Industry: Market value of Dealer holdings / Total market value of outstanding shares</li>|
| 36  | fld024      | decimal(9,2)  | Total Holding %     | %       | Total institutional investors holding shares / Outstanding Shares = QFII Holding + Local Fund Holding + Dealer Holding             |
| 37  | fld025      | decimal(9,2)  | QFII Turnover %     | %       | (QFII buy + QFII Sell) / 2 / Outstanding Shares x 100                         |
| 38  | fld026      | decimal(9,2)  | Local Fund Turnover %     | %       | (Local Fund buy +  Local Fund Sell) / 2 / Outstanding Shares x 100            |
| 39  | fld027      | decimal(9,2)  | Dealer Turnover %   | %       | (Dealer buy + Dealer Sell) / 2 / Outstanding Shares x 100                    |
| 40  | qfii_sno    | decimal(9,0)  | Outstanding Shares | K shares | This company outstanding shares    |

[^1]: QFII: Qualified Foreign Institutional Investors

## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ATINST1.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATINST1')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ATINST1')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATINST1");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATINST1")
        ```
    