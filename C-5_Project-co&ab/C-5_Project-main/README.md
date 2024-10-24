# 網頁切版直播班 Vite 範例 - Bootstrap 版本

## C-5 咖啡全是學 電商網站

## change log:

### 野鴿

- 1006 修正:

  - header、footer：購物車等 icon 加上 a 標籤
  - 熱銷商品 PC 版 間隔距離
  - 最新消息 PC 版，圖片跟左邊文字同高
  - 首頁按鈕更改為 a 標籤，連結到其他頁
  - 新增 favicon、goTop 按鈕
  - 0930:
  - 按鈕可以直接套 btn-lg（border-radius 8px），有自己刻行動以上是 16px。
  - `_variables.scss` 修改了 $body-bg 調整成網頁背景色 $primary-100、新增  :15: $spacer \_ 6.25,16: $spacer \* 7.5。

- 0922:

  - 原本 logo 的 svn 圖檔有點問題（圖片空白範圍過大、要另外調整，打算之後頁面完成有空擋再處理），我目前使用設計師提供的 logo 檔案。
  - 首頁 banner 的 display 文字無法透過斷點在行動版跟電腦版分開寫上。
  - 行動版漢堡選單點擊後要全畫面要透過 offcanvas，目前還不太會，之後預計調整 。

  ### Edie

- 1006:

  - 新增商品個人頁的麵包屑、商品照、商品標題、下拉選單及文字，下拉選單花了比預期中還長的時間開發，還有些 icon 尚未調整完成，預計寫完大致的結構跟樣式再回來處理。
  - 有點壓到其他區塊的進度，不過應該還行。

- 1012:

  - 新增商品個人頁的商品敘述、連結群組。

- 1013:
  - 新增商品個人頁的輪播元件，內文與細節待調整。

## Node.js 版本

- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程說明

### Windows 版本

1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
