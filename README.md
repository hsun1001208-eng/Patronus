# 海豚護法

功能：
- 全黑背景
- 沒有提示文字、輸入框或按鈕
- 使用瀏覽器語音辨識
- 說出「疾疾護法現身」後，海豚護法從右下角出現
- 海豚會繞螢幕游一圈
- 最後從左上方游出畫面
- 適合直接放到 GitHub + Render

## GitHub
把這 4 個檔案放到同一個 repository：
- index.html
- server.js
- package.json
- README.md

## Render
建立 Web Service：
- Build Command：留空
- Start Command：npm start
- Node 版本：18 以上

## 注意
第一次使用語音辨識時，瀏覽器可能會要求允許麥克風。
建議使用最新版 Chrome 或 Edge；Safari 對 Web Speech API 的支援較不一致。
