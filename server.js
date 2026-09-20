const http=require("http");
const fs=require("fs");
const path=require("path");
const port=process.env.PORT||3000;
const root=__dirname;
const mime={
 ".html":"text/html; charset=utf-8",
 ".js":"text/javascript; charset=utf-8",
 ".css":"text/css; charset=utf-8",
 ".svg":"image/svg+xml"
};
http.createServer((req,res)=>{
  let u=decodeURIComponent((req.url||"/").split("?")[0]);
  if(u==="/")u="/index.html";
  const file=path.join(root,u);
  if(!file.startsWith(root)){res.writeHead(403);return res.end("Forbidden");}
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});return res.end("Not Found");}
    res.writeHead(200,{"Content-Type":mime[path.extname(file).toLowerCase()]||"application/octet-stream","Cache-Control":"no-store"});
    res.end(data);
  });
}).listen(port,()=>console.log("Patronus running on "+port));
