const http=require("http"),fs=require("fs"),path=require("path");
const port=process.env.PORT||3000,root=__dirname;
const mime={".html":"text/html; charset=utf-8",".png":"image/png",".js":"text/javascript; charset=utf-8"};
http.createServer((req,res)=>{
 let u=decodeURIComponent((req.url||"/").split("?")[0]);if(u==="/")u="/index.html";
 const f=path.join(root,u);
 if(!f.startsWith(root))return res.writeHead(403).end();
 fs.readFile(f,(e,d)=>{if(e)return res.writeHead(404).end("Not Found");
 res.writeHead(200,{"Content-Type":mime[path.extname(f)]||"application/octet-stream","Cache-Control":"no-store"});res.end(d)});
}).listen(port,()=>console.log("Patronus running on "+port));