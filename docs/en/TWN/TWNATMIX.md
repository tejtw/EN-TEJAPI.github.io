# [Sales Break Down(Monthly)] – Detailed Field Descriptions


## Table Overview

!!! abstract
    - **Table Name**：TWN/ATMIX
    - **Data Source**: Market Observation Post System (MOPS)
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
| #  | Field    | Data Type     | Field Name                | Unit | Field Description                                                                 |
|----|----------|----------------|----------------------------|------|------------------------------------------------------------------------------------|
| 1  | coid     | char(7)        | Company_ID                | –    | Company Stock Code and Abbreviation                                               |
| 2  | mdate    | datetime       | Date                      | –    | Data Year-Month (Gregorian)                                                       |
| 3  | key3_e   | char(200)      | Item                      | –    | Product name                                                                       |
| 4  | t1       | decimal(9,0)   | Monthly Sales             | T    | Monthly Sales Amount of the Product[^1]                                                |
| 5  | r1       | decimal(9,2)   | Item Sales/Total Sal      | %    | Monthly Sales Amount of the Product as a Percentage of Total Monthly Sales  [^2]            |
| 6  | t2       | decimal(12,0)  | Acc. Sales                | T    | Cumulative Sales Amount of the Product          [^3]                                        |
| 7  | r2       | decimal(9,2)   | Acc.Item Sale/Tot.Sa      | %    | Cumulative Sales Amount of the Product as a Percentage of Total Cumulative Sales  [^4]      |
| 8  | r3       | decimal(11,2)  | YOY% Monthly Sales        | %    | Change in Monthly Sales Amount Compared to the Same Month Last Year            [^5]        |
| 9  | r0       | decimal(11,2)  | MOM% Monthle Sales        | %    | Change in Monthly Sales Amount Compared to the Previous Month              [^6]            |
| 10 | r4       | decimal(11,2)  | YOY% Acc. Sales           | %    | Change in Cumulative Sales Amount Compared to the Same Period Last Year        [^7]        |
| 11 | s1       | decimal(9,0)   | Total Monthly Sales       | T    | Monthly Total Product Sales Amount  [^8] |
| 12 | s3       | decimal(12,0)  | Total Acc. Sales          | T    | Cumulative Total Product Sales Amount [^9] |


[^1]:When the product data is not provided, it is considered 0.
[^2]:The overall monthly net sales amount of the product is the total monthly sales amount plus sales returns and allowances. The formula is: (Monthly Amount of the Product/Overall Monthly Net Sales Amount of the Product)×100. Note: Sales returns and allowances are not calculated and are considered as 0.
[^3]:Sum of individual product monthly sales amounts; if the product data is not provided, it is considered as 0.
[^4]:The overall cumulative net sales amount of the product is the total cumulative sales amount of the product plus sales returns and allowances. The formula is: (Cumulative Amount of the Product/Overall Cumulative Net Sales Amount of the Product)×100. Note: Sales returns and allowances are not calculated and are considered as 0.
[^5]:(Monthly Amount of the Product−Monthly Amount of the Product Last Year)/Monthly Amount of the Product Last Year*100
[^6]:(Monthly Amount of the Product−Monthly Amount of the Product Previous Month)/Monthly Amount of the Product Previous Month*100
[^7]:(Cumulative Amount of the Product−Cumulative Amount of the Product Last Year)/Cumulative Amount of the Product Last Year*100
[^8]:Σ Individual Product Monthly Sales Amount
[^9]:Σ Individual Product Cumulative Sales Amount


## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ATMIX.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ATMIX')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ATMIX')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ATMIX");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ATMIX")
        ```