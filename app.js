const CFG={WA:"2348032534218",VIEW_FEE:2000,LISTING_FEE:5000,PAY_LINK:"",BANK:"Add your bank name, account number and account name in app.js (CFG.BANK)",CLOUD:"",PRESET:""};
const $=id=>document.getElementById(id),N=v=>"₦"+Math.round(v).toLocaleString("en-NG"),wa=t=>"https://wa.me/"+CFG.WA+"?text="+encodeURIComponent(t),esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])),q=k=>new URLSearchParams(location.search).get(k);
const S={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const rid=p=>p+"-"+Math.random().toString(36).slice(2,8).toUpperCase();
const intl=p=>{p=String(p).replace(/\D/g,"");return p.startsWith("0")?"234"+p.slice(1):p};
const STATES=["Lagos","FCT Abuja","Rivers","Oyo","Kano","Enugu","Delta","Edo","Kaduna","Ogun","Anambra","Imo","Plateau","Ondo","Cross River"];
/* Pins use area-level coordinates on purpose: the exact address is shared after the booking fee is paid. Add real listings here after you verify them (example:false). */
const LISTINGS=[
 {id:"NN-001",title:"Self-contain near campus",type:"Room",state:"Lagos",area:"Yaba",lat:6.5095,lng:3.3711,rent:650000,note:"Water and light. Tiled. Gated compound.",example:true},
 {id:"NN-002",title:"Two-bedroom flat",type:"Flat",state:"Lagos",area:"Lekki Phase 1",lat:6.4474,lng:3.4723,rent:3500000,note:"Boys' quarters, parking for two cars.",example:true},
 {id:"NN-003",title:"Three-bedroom flat",type:"Flat",state:"FCT Abuja",area:"Gwarinpa",lat:9.1108,lng:7.4059,rent:4500000,note:"Prepaid meter, borehole, estate security.",example:true},
 {id:"NN-004",title:"Room and parlour",type:"Room",state:"Rivers",area:"Rumuokoro",lat:4.8756,lng:7.0148,rent:400000,note:"Own entrance. Tarred road.",example:true},
 {id:"NN-005",title:"Two-bedroom bungalow",type:"House",state:"Oyo",area:"Bodija",lat:7.4294,lng:3.9084,rent:900000,note:"Fenced, ample parking.",example:true}
];
function shell(t){document.title=t+" | NaijaNest";document.write('<header><div class="wrap"><div><a href="index.html" style="color:#fff;text-decoration:none"><b>NaijaNest</b></a><span class="tag">Testing phase</span></div><nav><a href="index.html#listings">Listings</a><a href="deal.html">My deals</a><a href="list.html">List a property</a><a href="complain.html">Complain</a></nav></div></header>')}
async function upload(files){if(!CFG.CLOUD||!CFG.PRESET||!files.length)return null;const o=[];for(const f of files){const d=new FormData();d.append("file",f);d.append("upload_preset",CFG.PRESET);const r=await fetch("https://api.cloudinary.com/v1_1/"+CFG.CLOUD+"/image/upload",{method:"POST",body:d}),j=await r.json();if(!j.secure_url)throw new Error("Upload failed");o.push(j.secure_url)}return o}
