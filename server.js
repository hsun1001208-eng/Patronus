const http=require("http"),fs=require("fs"),path=require("path");
const root=__dirname,port=process.env.PORT||3000;
const mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css"};
http.createServer((req,res)=>{
  let u=decodeURIComponent((req.url||"/").split("?")[0]);
  if(u==="/")u="/index.html";
  const file=path.join(root,u);
  if(!file.startsWith(root))return res.writeHead(403).end();
  fs.readFile(file,(err,data)=>{
    if(err)return res.writeHead(404).end("Not Found");
    res.writeHead(200,{"Content-Type":mime[path.extname(file)]||"application/octet-stream","Cache-Control":"no-store"});
    res.end(data);
  });
}).listen(port,()=>console.log("Dolphin Patronus running on "+port));