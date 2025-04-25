<div align="center">
    <img src="https://hackmd.io/_uploads/r1pXuw6nA.png" width="300" alt="TEJ" style="margin-right: 20px;"">
    <img src="https://hackmd.io/_uploads/r1pXuw6nA.png" width="300" alt="TEJ">
</div>

![Static Badge](https://img.shields.io/badge/3.11.9-3776AB?style=for-the-badge&logo=python&label=python&labelColor=%23F7D750)
![Static Badge](https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas)
[![Static Badge](https://img.shields.io/badge/0.1.31-3776AB?style=for-the-badge&logo=tejapi&label=tejapi&labelColor=%23F7D750)](https://pypi.org/project/tejapi/#description)
![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
[![Static Badge](https://img.shields.io/badge/1.0.3-5C2D91?style=for-the-badge&logo=Tejapi.NET&label=Tejapi.NET&labelColor=%23F7D750)](https://www.nuget.org/packages/Tejapi.NET)
[![Static Badge](https://img.shields.io/badge/1.0.2-5C2D91?style=for-the-badge&logo=Tejapi.NET4&label=Tejapi.NET4&labelColor=%23F7D750)](https://www.nuget.org/packages/Tejapi.NET4)
---

Providing a comprehensive financial data API for seamless programmatic integration

## Getting Started
The following documentation explains how to use the TEJ API to access the TEJ database.

## API Authentication

### Obtain an API key
You must first register an account with our company, then apply for an API key required for data access.

!!! Example

    ```sh
    api_key=a8sb1jska2lz03hc2
    ```

### When to use the API Key
You need to provide your API Key each time you access the data.

!!! Example

    === "REST API"

        ```sh
        ?api_key="YOURAPIKEY"
        ```

    === "Python"

        ```sh
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        ```

## Free and Paid Databases
We provide both free and paid databases:

- Trial Database
    - Limited to tables provided within the trial database
    - Up to 500 API calls per day
    - Maximum of 10,000 records per call (additional data can be retrieved using pagination, total records capped at 50,000)
    - Maximum of 50,000 records per day

- Paid Database
    - Up to 2,000 API calls per day
    - Maximum of 10,000 records per call (additional data can be retrieved using pagination, total records capped at 1,000,000)
    - Maximum of 3,000,000 records per day

## API for Various Programming Languages
Tejapi offers APIs for various programming languages. Please select from the following programming languages for detailed information.

<div class="grid cards" markdown>

-   :material-application-braces:{ .lg .middle } __REST API__

    ---

    Instructions on accessing the REST API via HTTPS

    [:octicons-arrow-right-24: Reference][restapi]

-   :simple-python:{ .lg .middle } __Python API__

    ---

    Instructions on using TEJ API with Python

    [:octicons-arrow-right-24: Reference][pythonapi]

-   :simple-r:{ .lg .middle } __R API__

    ---

    Instructions on using TEJ API with R

    [:octicons-arrow-right-24: Reference][rapi]

-   :material-dot-net:{ .lg .middle } __.NET API__

    ---

    Instructions on using TEJ API with .NET

    [:octicons-arrow-right-24: Reference][dotnetapi]

</div>

<!-- 路徑相對於文檔根目錄 -->
[restapi]: tutorial/restapi.md
[pythonapi]: tutorial/tej_api_python_en.md
[rapi]: tutorial/R Documentation.md
[dotnetapi]: tutorial/dotnetapi.md