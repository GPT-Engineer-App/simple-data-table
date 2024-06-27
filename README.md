# simple-data-table

Create a bare-bones application that I can modify and build on.

報表列表
表格容器：在篩選功能下方添加一個矩形作為表格容器，背景色淺，帶輕微邊框。
表格標題欄：
在表格容器頂部添加淺灰色矩形作為標題欄背景。
表格標題文本加粗，包括：
系統單號、帳號、單號、支付名稱、支付代碼、支付帳號、付款人、金額、應付手續費、管道費用、總傭金、可用餘額、盈餘。
表格數據行：
表格容器內添加多行矩形作為數據行背景。
每行包含文本框，依次填寫示例數據：
系統單號：123456789、987654321、456789123
帳號：acc123、acc456、acc789
單號：1001、1002、1003
支付名稱：支付寶、微信支付、銀行轉帳
支付代碼：ZFB001、WX001、BK001
支付帳號：12345678901、98765432101、45678912301
付款人：張三、李四、王五
金額：1000、2000、1500
應付手續費：10、20、15
管道費用：18、36、27（按金額的0.018計算）
總傭金：28、56、42（應付手續費 + 管道費用）
可用餘額：972、1944、1458（金額 - 總傭金）
盈餘：3、6、4.5（金額 * 0.003）
預覽和調整設計
預覽設計：使用Figma預覽功能，確保所有元素布局合理，數據清晰易讀。
調整設計：根據預覽效果進行細節調整，確保篩選功能和搜索功能操作簡便，表格數據排列整齊，計算結果正確。

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/simple-data-table.git
cd simple-data-table
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
