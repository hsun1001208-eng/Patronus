# Patronus Dolphin Web App

哈利波特風格的海豚護法 3D 動畫網頁。

## 專案特點
- **純黑背景**：無任何提示文字或 UI 元件。
- **點擊觸發**：點擊螢幕任意位置時，海豚護法從右下角悠游至左上角。
- **魔法效果**：使用 Three.js Custom Shader 製作霧狀銀藍色護法光芒與粒子尾跡。

## 部署至 GitHub & Render

### 步驟 1：上傳至 GitHub
1. 在 GitHub 上建立一個新的儲存庫（Repository），例如 `patronus-dolphin`。
2. 將本專案解壓縮後的檔案上傳/Push 至該 Repository。

### 步驟 2：部署至 Render
1. 登入 [Render](https://render.com/) 官網。
2. 點擊 **New +** -> 選擇 **Static Site**。
3. 連結你的 GitHub 帳號並選擇剛建立的 `patronus-dolphin` 儲存庫。
4. 設定欄位：
   - **Name**: `patronus-dolphin`（或自訂名稱）
   - **Publish directory**: `.`（留空或填入點）
5. 點擊 **Create Static Site** 即可完成部署！
