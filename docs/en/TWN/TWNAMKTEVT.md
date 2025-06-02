# [Corporate Event DB] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**：TWN/AMKTEVT
    - **Data Source**: Collected and organized by TEJ
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
  **<span style="font-size: 1.8em; color: #ff6d00;">Irregular updates</span>**

</div>


## Field Descriptions

| **#** | Field Name | Data Type       | Field         | Unit | Field Description|
|-------|----------------|------------------|-----------------------------------------|------|----------------------------------------------------------------------------------------------|
| **1**  | `coid`         | `char(7)`        | 	Event Type   | -  | There are currently 99 event categories, including stock change events, financial announcement events, shareholders' meetings, etc.   |
| **2**  | `mdate`        | `datetime`       | Date | -    | Date  |
| **3**  | `key3`         | `char(6)`   | Order  | -    |For database display, have no economic significance. |
| **4**  | `coidnm`        | `char(24)`   | Company and Name | -    | Company and Name |
| **5**  | `evt_date`   | `datetime`       | Event Date    | -    | Event Occurrence Date |
| **6**  | `ann_date`   | `datetime`       | Announcement Date | -    | Event Announcement Date |
| **7**  | `emt_date`      | `datetime`       | General Meeting Date | -    | Shareholders' Meeting Date |
| **8**  | `eyy`      | `datetime`       | Year | -   | Distribution Year |
| **9**  | `sem`        | `char(1)`   | Semester | -   | 	Quarter |
| **10** | `zpct`        | `decimal(10,3)`   | Capital Inc(Dec)  | %   | Capital Increase/Decrease Rate |
| **11** | `rmk`       | `char(70)`  | Remark | -   | Capital Reduction Remarks:<li>A = Capital Reduction</li><li>F = Cash Capital Reduction</li><li>G = Spin-off |
| **12** | `event_name`      | `char(30)`   | Event Name |-    | Event Name |

## API Request Examples

!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/AMKTEVT.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AMKTEVT')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AMKTEVT')
        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AMKTEVT");
        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AMKTEVT")
        ```
    
