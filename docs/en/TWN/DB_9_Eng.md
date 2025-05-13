# [Financial Data_Certified by Accountants] Detailed Field Description


## Table Overview

!!! abstract
    - **Table Name**：TWN/AINVFQ1
    - **Data Source**: Market Observation Post System (MOPS), Taiwan
    - **Publication Date Field**: mdate


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

| # | Field Name | Data Type | Field Description | Unit | Remarks |
|---|------------|-----------|-------------------|------|---------|
| 1 | coid | char(7) | Company | - | Company identifier |
| 2 | mdate | datetime | Year/Month | - | Year/Month |
| 3 | key3 | char(5) | Period Type | - | Period classification |
| 4 | no | char(3) | Serial Number | - | Serial number |
| 5 | sem | char(1) | Quarter | - | Quarter indicator |
| 6 | merg | char(1) | Consolidated (Y/N) | - | Consolidated indicator (Y/N) |
| 7 | curr | char(4) | Currency | - | Currency code |
| 8 | annd | datetime | Report Date | - | Report compilation date |
| 9 | fin_ind | char(1) | Industry Category | - | Industry classification |
| 10 | bp11 | decimal(16,2) | Cash and Cash Equivalents | T | Cash and cash equivalents |
| 11 | bp21 | decimal(16,2) | Accounts Receivable | T | Accounts receivable |
| 12 | bp22 | decimal(16,2) | Long-term Receivables | T | Long-term receivables |
| 13 | bp31 | decimal(16,2) | Inventory | T | Inventory |
| 14 | bp41 | decimal(16,2) | Accounts Payable | T | Accounts payable |
| 15 | bp51 | decimal(16,2) | Fixed Assets | T | Fixed assets |
| 16 | bp53 | decimal(16,2) | Intangible Assets | T | Intangible assets |
| 17 | bp61 | decimal(16,2) | Prepayments | T | Prepayments |
| 18 | bp62 | decimal(16,2) | Other Receivables | T | Other receivables |
| 19 | bp63 | decimal(16,2) | Advance Receipts - Current | T | Advance receipts - current |
| 20 | bp64 | decimal(16,2) | Other Payables | T | Other payables |
| 21 | bp65 | decimal(16,2) | Advance Receipts - Non-current | T | Advance receipts - non-current |
| 22 | bf11 | decimal(16,2) | Financial Borrowings - Current | T | Financial borrowings - current |
| 23 | bf12 | decimal(16,2) | Financial Borrowings - Non-current | T | Financial borrowings - non-current |
| 24 | bf21 | decimal(16,2) | Non-financial Borrowings - Current | T | Non-financial borrowings - current |
| 25 | bf22 | decimal(16,2) | Non-financial Borrowings - Non-current | T | Non-financial borrowings - non-current |
| 26 | bf41 | decimal(16,2) | Common Stock | T | Common stock |
| 27 | bf42 | decimal(16,2) | Capital Surplus | T | Capital surplus |
| 28 | bf43 | decimal(16,2) | Retained Earnings | T | Retained earnings |
| 29 | bf44 | decimal(16,2) | Preferred Stock | T | Preferred stock |
| 30 | bf45 | decimal(16,2) | Non-controlling Interest | T | Non-controlling interest |
| 31 | bf99 | decimal(16,2) | Other Equity | T | Other equity |
| 32 | bsca | decimal(16,2) | Total Current Assets | T | Total current assets |
| 33 | bsnca | decimal(16,2) | Total Non-current Assets | T | Total non-current assets |
| 34 | bsta | decimal(16,2) | Total Assets | T | Total assets |
| 35 | bscl | decimal(16,2) | Total Current Liabilities | T | Total current liabilities |
| 36 | bsncl | decimal(16,2) | Total Non-current Liabilities | T | Total non-current liabilities |
| 37 | bstl | decimal(16,2) | Total Liabilities | T | Total liabilities |
| 38 | bsse | decimal(16,2) | Total Shareholders' Equity | T | Total shareholders' equity |
| 39 | bslse | decimal(16,2) | Total Liabilities and Shareholders' Equity | T | Total liabilities and shareholders' equity |
| 40 | debt | decimal(16,2) | Short and Long-term Borrowings | T | Short and long-term borrowings |
| 41 | quick | decimal(16,2) | Quick Assets | T | Quick assets |
| 42 | ppe | decimal(16,2) | Property, Plant and Equipment | T | Property, plant and equipment |
| 43 | ar | decimal(16,2) | Short and Long-term Accounts Receivable | T | Short and long-term accounts receivable |
| 44 | ip12 | decimal(16,2) | Operating Revenue | T | Operating revenue |
| 45 | ip22 | decimal(16,2) | Operating Costs | T | Operating costs |
| 46 | ip31 | decimal(16,2) | Operating Expenses | T | Operating expenses |
| 47 | ip51 | decimal(16,2) | Income Tax Expense | T | Income tax expense |
| 48 | iv41 | decimal(16,2) | Interest Income | T | Interest income |
| 49 | if11 | decimal(16,2) | Interest Expense | T | Interest expense |
| 50 | isibt | decimal(16,2) | Profit Before Tax | T | Profit before tax |
| 51 | isni | decimal(16,2) | Net Income After Tax | T | Net income after tax |
| 52 | isnip | decimal(16,2) | Net Income Attributable to Parent Company | T | Net income attributable to parent company |
| 53 | eps | decimal(16,2) | Earnings Per Share | T | Earnings per share |
| 54 | ispsd | decimal(16,2) | Preferred Stock Dividend | T | Preferred stock dividend |
| 55 | gm | decimal(16,2) | Gross Profit | T | Gross profit |
| 56 | opi | decimal(16,2) | Operating Income | T | Operating income |
| 57 | nri | decimal(16,2) | Non-recurring Income | T | Non-recurring income |
| 58 | ri | decimal(16,2) | Recurring Income | T | Recurring income |
| 59 | nopi | decimal(16,2) | Non-operating Income and Expenses | T | Non-operating income and expenses |
| 60 | ebit | decimal(16,2) | Earnings Before Interest and Tax | T | Earnings before interest and tax |
| 61 | cip31 | decimal(16,2) | Depreciation and Amortization | T | Depreciation and amortization |
| 62 | cscfo | decimal(16,2) | Cash Flow from Operating Activities | T | Cash flow from operating activities |
| 63 | cscfi | decimal(16,2) | Cash Flow from Investing Activities | T | Cash flow from investing activities |
| 64 | cscff | decimal(16,2) | Cash Flow from Financing Activities | T | Cash flow from financing activities |
| 65 | person | decimal(16,2) | Number of Employees | T | Number of employees |
| 66 | shares | decimal(16,2) | Outstanding Shares at Period End | T | Outstanding shares at period end |
| 67 | wavg | decimal(16,2) | Weighted Average Shares | T | Weighted average shares |
| 68 | taxrate | decimal(16,2) | Tax Rate | % | Tax rate |
| 69 | r104 | decimal(16,2) | Recurring ROE | % | Recurring return on equity |
| 70 | r115 | decimal(16,2) | Recurring ROA | % | Recurring return on assets |
| 71 | r105 | decimal(16,2) | Gross Profit Margin | % | Gross profit margin |
| 72 | r106 | decimal(16,2) | Operating Profit Margin | % | Operating profit margin |
| 73 | r107 | decimal(16,2) | Pre-tax Profit Margin | % | Pre-tax profit margin |
| 74 | r108 | decimal(16,2) | Net Profit Margin | % | Net profit margin |
| 75 | r201 | decimal(16,2) | Operating Expense Ratio | % | Operating expense ratio |
| 76 | r112 | decimal(16,2) | Non-operating Income Ratio | % | Non-operating income ratio |
| 77 | r401 | decimal(16,2) | Revenue Growth Rate | % | Revenue growth rate |
| 78 | r402 | decimal(16,2) | Gross Profit Growth Rate | % | Gross profit growth rate |
| 79 | r403 | decimal(16,2) | Operating Income Growth Rate | % | Operating income growth rate |
| 80 | r404 | decimal(16,2) | Pre-tax Profit Growth Rate | % | Pre-tax profit growth rate |
| 81 | r405 | decimal(16,2) | Net Income Growth Rate | % | Net income growth rate |
| 82 | r408 | decimal(16,2) | Asset Growth Rate | % | Asset growth rate |
| 83 | r409 | decimal(16,2) | Equity Growth Rate | % | Equity growth rate |
| 84 | r410 | decimal(16,2) | Fixed Asset Growth Rate | % | Fixed asset growth rate |
| 85 | r502 | decimal(16,2) | Quick Ratio | % | Quick ratio |
| 86 | r501 | decimal(16,2) | Current Ratio | % | Current ratio |
| 87 | r205 | decimal(16,2) | Cash Flow Ratio | % | Cash flow ratio |
| 88 | r505 | decimal(16,2) | Debt Ratio | % | Debt ratio |
| 89 | r517 | decimal(16,2) | Interest Expense Ratio | % | Interest expense ratio |
| 90 | r512 | decimal(16,2) | Interest Coverage Ratio | % | Interest coverage ratio |
| 91 | r509 | decimal(16,2) | Borrowing Dependency | % | Borrowing dependency |
| 92 | r608 | decimal(16,2) | Accounts Receivable Turnover | % | Accounts receivable turnover |
| 93 | r616 | decimal(16,2) | Accounts Payable Turnover | % | Accounts payable turnover |
| 94 | r610 | decimal(16,2) | Inventory Turnover | % | Inventory turnover |
| 95 | r607 | decimal(16,2) | Total Asset Turnover | % | Total asset turnover |
| 96 | r613 | decimal(16,2) | Equity Turnover | % | Equity turnover |
| 97 | r612 | decimal(16,2) | Fixed Asset Turnover | % | Fixed asset turnover |
| 98 | r609 | decimal(16,2) | Days Sales Outstanding | % | Days sales outstanding |
| 99 | r614 | decimal(16,2) | Days Payable Outstanding | % | Days payable outstanding |
| 100 | r611 | decimal(16,2) | Days Inventory Outstanding | % | Days inventory outstanding |
| 101 | r307 | decimal(16,2) | Book Value Per Share | Currency | Book value per share |
| 102 | r304 | decimal(16,2) | Operating Revenue Per Share | T | Operating revenue per share |
| 103 | r305 | decimal(16,2) | Operating Income Per Share | T | Operating income per share |
| 104 | r306 | decimal(16,2) | Pre-tax Profit Per Share | T | Pre-tax profit per share |
| 105 | r316 | decimal(16,2) | Net Income Per Share | T | Net income per share |
| 106 | r834 | decimal(16,2) | Revenue Per Employee | T | Revenue per employee |

## API Request Examples
!!! example "Example"

    === "REST"

        ```sh
        GET https://api.tej.com.tw/api/datatables/TWN/AINVFQ1.json?api_key=<YOURAPIKEY>
        ```

    === "Python"

        ```sh
        import tejapi
        tejapi.ApiConfig.api_key = "YOURAPIKEY"
        data = tejapi.get('TWN/AINVFQ1')
        ```
    
    === "R"

        ```sh
        library("Tejapi")
        Tejapi.api_key("YOURAPIKEY")
        yourdata<- Tejapi('TWN/AINVFQ1')

        ```
    
    === "C#"

        ```sh
        using Tejapi;
        var client = new TejClient("<YOURAPIKEY>");
        var result = await client.GetAsync("TWN/AINVFQ1");

        ```
    
    === "vb.net"

        ```sh
        Imports Tejapi
        Dim client As TejClient = New TejClient("<YOURAPIKEY>")
        Dim result As DataTable = Await client.GetAsync("TWN/AINVFQ1")
        ```