const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {'/':'index.html','/index.html':'index.html','/tv.html':'tv.html','/missao.html':'missao.html','/missao.css':'missao.css','/missao.js':'missao.js','/style.css':'style.css','/app.js':'app.js'};
http.createServer((req,res)=>{const file=files[req.url.split('?')[0]];if(!file){res.writeHead(404);res.end('Não encontrado');return;}res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8');fs.createReadStream(path.join(__dirname,file)).pipe(res);}).listen(process.env.PORT || 3000,'0.0.0.0',()=>console.log('GiraClima iniciado'));
