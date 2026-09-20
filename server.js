const http=require("http"),fs=require("fs"),path=require("path");
const port=process.env.PORT||3000,root=__dirname;
const mime={".html":"text/html; charset=utf-8",".png":"image/png",".gif":"image/gif",".js":"text/javascript; charset=utf-8"};
http.createServer((req,res)=>{
 let u=decodeURIComponent((req.url||"/").split("?")[0]); if(u==="/")u="/index.html";
 const f=path.join(root,u);
 if(!f.startsWith(root)){res.writeHead(403);return res.end("Forbidden")}
 fs.readFile(f,(e,data)=>{if(e){res.writeHead(404);return res.end("Not Found")}
 res.writeHead(200,{"Content-Type":mime[path.extname(f).toLowerCase()]||"application/octet-stream","Cache-Control":"no-store"});
 res.end(data)})
}).listen(port,()=>console.log("Patronus running on "+port));
