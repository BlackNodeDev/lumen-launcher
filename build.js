const fs=require('fs');
const seeds=[
['lumen-os','Lumen OS','/workspace/continuumx-os/lumen-os.html','L','#7c9cff','Beta',1,'Personal webOS desktop'],
['greybox','Greybox Themes','/workspace/greybox-themes/greybox-themes.html','G','#a78bff','Beta',1,'Themed platformer'],
['painterly','Painterly Shader','/workspace/painterly/painterly.html','P','#d08bff','WIP',1,'Painterly WebGL shader'],
['photo-room','Photo Room 2.5D','/workspace/photo-room/photo-room-2.5d.html','R','#8bd0ff','WIP',0,'2.5D photo room'],
['lumen-splat','Lumen Splat','/workspace/lumen-splat/lumen-splat.html','S','#6fb8ff','Beta',1,'Gaussian splat viewer · needs internet on first run'],
['glow-canvas','Glow Canvas','/workspace/glow-canvas/audit/glow-canvas-v14.html','✦','#b48cff','Beta',1,'Glow painting canvas v14'],
];
const tags=seeds.map(([id,n,p,i,c,s,f,notes])=>`<script type="text/plain" data-seed="seed-${id}" data-name="${n}" data-icon="${i}" data-accent="${c}" data-status="${s}" data-fav="${f}" data-notes="${notes}">${fs.readFileSync(p).toString('base64')}</script>`).join('\n');
fs.writeFileSync('lumen-launcher.html',fs.readFileSync('template.html','utf8').replace('<!--SEEDS-->',tags));
console.log(fs.statSync('lumen-launcher.html').size);
fs.mkdirSync('dist',{recursive:true});fs.copyFileSync('lumen-launcher.html','dist/index.html');
