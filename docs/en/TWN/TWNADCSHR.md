# [Spread of Shareholdings under TDCC[^1] Custody] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**: TWN/ADCSHR
    - **Data Source**: TDCC created the data by the users’ balance in the account of security under custody after the last trading day in a week.[^2]
    - **Reference Code Table**: TWN/ANPRCSTD
    - **Code Column**: coid
    - **Publication Date Column**: mdate

## Key Metrics

<div class="grid cards" markdown>

- __Time Range__  
  **<span style="font-size: 1.8em; color: #4caf50;">Last 5 Years</span>**

- __Update Frequency__  
  **<span style="font-size: 1.8em; color: #ff6d00;">Daily</span>**

</div>

## Field Descriptions

| # | Field Name | Data Type       | Field         | Unit | Field Description|
|---|------------|-----------|-------------------|------|---------|
| 1 | coid       | char(7)   | Company | - | coid |
| 2 | mdate      | datetime  | Date | - | mdate  |
| 3 | ttl_man    | decimal(12,0) | Total Depository People Count | - | ttl_man |
| 4 | ttl_noa    | decimal(9,0)  | Total Depository Shares (Thousand shares) | - | ttl_noa |
| 5 | a01 | decimal(9,0)         | Below 1 Share (People count) | - | a01 |
| 6 | a02 | decimal(9,0)         | Below 1 Share (Thousand shares) | - | a02 |
| 7 | a03 | decimal(9,2)         | Below 1 Share (Ratio) | - | a03 |
| 8 | b01 | decimal(9,0)         | 1-5 Shares (People count) | - | b01 |
| 9 | b02 | decimal(9,0)         | 1-5 Shares (Thousand shares) | - | b02 |
| 10 | b03 | decimal(9,2) | 1-5 Shares (Ratio) | - | b03 |
| 11 | c01 | decimal(9,0) | 5-10 Shares (People count) | - | c01 |
| 12 | c02 | decimal(9,0) | 5-10 Shares (Thousand shares) | - | c02 |
| 13 | c03 | decimal(9,2) | 5-10 Shares (Ratio) | - | c03 |
| 14 | d01 | decimal(9,0) | 10-15 Shares (People count) | - | d01 |
| 15 | d02 | decimal(9,0) | 10-15 Shares (Thousand shares) | - | d02 |
| 16 | d03 | decimal(9,2) | 10-15 Shares (Ratio) | - | d03 |
| 17 | e01 | decimal(9,0) | 15-20 Shares (People count) | - | e01 |
| 18 | e02 | decimal(9,0) | 15-20 Shares (Thousand shares) | - | e02 |
| 19 | e03 | decimal(9,2) | 15-20 Shares (Ratio) | - | e03 |
| 20 | f01 | decimal(9,0) | 20-30 Shares (People count) | - | f01 |
| 21 | f02 | decimal(9,0) | 20-30 Shares (Thousand shares) | - | f02 |
| 22 | f03 | decimal(9,2) | 20-30 Shares (Ratio) | - | f03 |
| 23 | ga01 | decimal(9,0) | 30-40 Shares (People count) | - | ga01 |
| 24 | ga02 | decimal(9,0) | 30-40 Shares (Thousand shares) | - | ga02 |
| 25 | ga03 | decimal(9,2) | 30-40 Shares (Ratio) | - | ga03 |
| 26 | gb01 | decimal(9,0) | 40-50 Shares (People count) | - | gb01 |
| 27 | gb02 | decimal(9,0) | 40-50 Shares (Thousand shares) | - | gb02 |
| 28 | gb03 | decimal(9,2) | 40-50 Shares (Ratio) | - | gb03 |
| 29 | h01 | decimal(9,0) | 50-100 Shares (People count) | - | h01 |
| 30 | h02 | decimal(9,0) | 50-100 Shares (Thousand shares) | - | h02 |
| 31 | h03 | decimal(9,2) | 50-100 Shares (Ratio) | - | h03 |
| 32 | i01 | decimal(9,0) | 100-200 Shares (People count) | - | i01 |
| 33 | i02 | decimal(9,0) | 100-200 Shares (Thousand shares) | - | i02 |
| 34 | i03 | decimal(9,2) | 100-200 Shares (Ratio) | - | i03 |
| 35 | j01 | decimal(9,0) | 200-400 Shares (People count) | - | j01 |
| 36 | j02 | decimal(9,0) | 200-400 Shares (Thousand shares) | - | j02 |
| 37 | j03 | decimal(9,2) | 200-400 Shares (Ratio) | - | j03 |
| 38 | k01 | decimal(9,0) | 400-600 Shares (People count) | - | k01 |
| 39 | k02 | decimal(9,0) | 400-600 Shares (Thousand shares) | - | k02 |
| 40 | k03 | decimal(9,2) | 400-600 Shares (Ratio) | - | k0 |
| 41 | l01 | decimal(9,0) | 600-800 Shares (People count) | - | l01 |
| 42 | l02 | decimal(9,0) | 600-800 Shares (Thousand shares) | - | l02 |
| 43 | l03 | decimal(9,2) | 600-800 Shares (Ratio) | - | l03 |
| 44 | m01 | decimal(9,0) | 800-1000 Shares (People count) | - | m01 |
| 45 | m02 | decimal(9,0) | 800-1000 Shares (Thousand shares) | - | m02 |
| 46 | m03 | decimal(9,2) | 800-1000 Shares (Ratio) | - | m03 |
| 47 | na01 | decimal(9,0) | Above 1000 Shares (People count) | - | na01 |
| 48 | na02 | decimal(9,0) | Above 1000 Shares (Thousand shares) | - | na01 |
| 49 | na03 | decimal(9,2) | Above 1000 Shares (Ratio) | - | na01 |
| 50 | zz02 | decimal(9,0) | Share Adjustment Item (Thousand shares) |  | zz02 |


## Example
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/ADCSHR.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/ADCSHR')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/ADCSHR')

        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/ADCSHR");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/ADCSHR")
        ```


[^1]:TDCC: Taiwan Depository & Clearing Corporation 
[^2]:For example, the data was released on Sept 3rd, 2021, and the data period was from Aug 27th to Sept 2nd

??? note  
    
    1. Since May 2015, the database of spread of shareholdings under TDCC custody has changed its updating period from monthly to weekly.
    2. Before grabbing this data, you have to check the rate of deposit-outstanding in the central deposit database. If the rate were low, it wouldn't be shown the true situation.
    3. All the information on the dispersion of equity was concentrated in one account/level, which mostly occurred when the company was about to be listed on the counter. Because the issuer has to apply for non-physical registration of TDCC before listing and deliver the issued shares to the issuer’s special login account.
    4. More information about Spread of Shareholdings under TDCC Custody click