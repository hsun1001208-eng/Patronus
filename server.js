const http=require('http');
const fs=require('fs');
const path=require('path');
const root=__dirname;
const port=process.env.PORT||3000;
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png'};
http.createServer((req,res)=>{
  let p=decodeURIComponent((req.url||'/').split('?')[0]);
  if(p==='/')p='/index.html';
  const file=path.join(root,p);
  if(!file.startsWith(root)){res.writeHead(403);return res.end('Forbidden');}
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404);return res.end('Not Found');}
    res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(data);
  });
}).listen(port,()=>console.log(`Patronus running on ${port}`));
