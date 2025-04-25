<div align="center">
    <img src="https://hackmd.io/_uploads/r1pXuw6nA.png" width="200" alt="TEJ">
</div>

![Static Badge](https://img.shields.io/badge/3.11.9-3776AB?style=for-the-badge&logo=python&label=python&labelColor=%23F7D750)
![Static Badge](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas)
[![Static Badge](https://img.shields.io/badge/0.1.31-3776AB?style=for-the-badge&logo=tejapi&label=tejapi&labelColor=%23F7D750)](https://pypi.org/project/tejapi/#description)
![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
[![Static Badge](https://img.shields.io/badge/1.0.3-5C2D91?style=for-the-badge&logo=Tejapi.NET&label=Tejapi.NET&labelColor=%23F7D750)](https://www.nuget.org/packages/Tejapi.NET)
[![Static Badge](https://img.shields.io/badge/1.0.2-5C2D91?style=for-the-badge&logo=Tejapi.NET4&label=Tejapi.NET4&labelColor=%23F7D750)](https://www.nuget.org/packages/Tejapi.NET4)
---


## Getting Started
The following documentation describes how to access TEJ Database using the TEJ API.

## API Authentication

### Obtain an API Key
您須要先向本公司註冊一個帳號，然後再申請取用資料所需的 API Key。

#### 例如:
```sh
api_key=a8sb1jska2lz03hc2
```

### 何時使用API Key
每次存取資料時，都需要提供您的API Key

#### REST API
```sh
?api_key="YOURAPIKEY"
```
#### Python
```sh
tejapi.ApiConfig.api_key = "YOURAPIKEY"
```

## 免費及付費資料庫
本公司提供免費及付費資料庫

- 試用資料庫
    - 僅能使用試用資料庫內提供的表格
    - 每天最多500次呼叫
    - 每次呼叫最多10,000筆資料(可分頁取得其餘資料，分頁總筆數上限為 50,000)
    - 每天最多提供50,000筆資料
- 付費資料庫
    - 每天最多2,000次呼叫
    - 每次呼叫最多10,000筆資料(可分頁取得其餘資料，分頁總筆數上限為 1,000,000)
    - 每天最多提供3,000,000筆資料

## 各類程式語言 API
Tejapi提供各類程式語言用以存取資料，請選擇下列各類程式語言詳細說明。

<div class="grid cards" markdown>

-   :material-application-braces:{ .lg .middle } __REST API__

    ---

    說明透過https存取REST API的使用方式

    [:octicons-arrow-right-24: Reference][restapi]

-   :simple-python:{ .lg .middle } __Python API__

    ---

    說明利用 Python使用 TEJ API的方式

    [:octicons-arrow-right-24: Reference](#)

-   :simple-r:{ .lg .middle } __R API__

    ---

    說明利用 R使用 TEJ API的方式

    [:octicons-arrow-right-24: Reference](#)

-   :material-dot-net:{ .lg .middle } __.NET API__

    ---

    說明利用 .NET使用 TEJ API的方式

    [:octicons-arrow-right-24: Reference](#)

</div>

[restapi]: ../../docs/zh-TW/rest_api/document_restapi.md

