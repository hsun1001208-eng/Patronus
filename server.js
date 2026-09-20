const http=require("http"),fs=require("fs"),path=require("path");
const root=__dirname, port=process.env.PORT||3000;
http.createServer((req,res)=>{
  let u=decodeURIComponent((req.url||"/").split("?")[0]);
  if(u==="/")u="/index.html";
  const file=path.join(root,u);
  if(!file.startsWith(root)) return res.writeHead(403).end();
  fs.readFile(file,(err,data)=>{
    if(err)return res.writeHead(404).end("Not Found");
    const type=file.endsWith(".html")?"text/html; charset=utf-8":
      file.endsWith(".js")?"text/javascript; charset=utf-8":"text/plain; charset=utf-8";
    res.writeHead(200,{"Content-Type":type,"Cache-Control":"no-store"});
    res.end(data);
  });
}).listen(port,()=>console.log("Dolphin Patronus listening on "+port));