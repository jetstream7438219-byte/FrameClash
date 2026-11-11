// FrameClash performance explorer
// IMPORTANT: All scores and FPS outputs below are illustrative demo values.
// They are not measured benchmarks or reliable predictions of real gameplay.

const gpus = [
  {id:"rtx5090",name:"GeForce RTX 5090",brand:"NVIDIA",tier:"Enthusiast",score:300},
  {id:"rtx5080",name:"GeForce RTX 5080",brand:"NVIDIA",tier:"High-end",score:235},
  {id:"rtx5070ti",name:"GeForce RTX 5070 Ti",brand:"NVIDIA",tier:"High-end",score:205},
  {id:"rtx5070",name:"GeForce RTX 5070",brand:"NVIDIA",tier:"Upper range",score:180},
  {id:"rtx5060ti",name:"GeForce RTX 5060 Ti",brand:"NVIDIA",tier:"Upper mid-range",score:145},
  {id:"rtx5060",name:"GeForce RTX 5060",brand:"NVIDIA",tier:"Mid-range",score:125},
  {id:"rtx4090",name:"GeForce RTX 4090",brand:"NVIDIA",tier:"Enthusiast",score:270},
  {id:"rtx4080s",name:"GeForce RTX 4080 SUPER",brand:"NVIDIA",tier:"High-end",score:220},
  {id:"rtx4080",name:"GeForce RTX 4080",brand:"NVIDIA",tier:"High-end",score:210},
  {id:"rtx4070tis",name:"GeForce RTX 4070 Ti SUPER",brand:"NVIDIA",tier:"High-end",score:185},
  {id:"rtx4070ti",name:"GeForce RTX 4070 Ti",brand:"NVIDIA",tier:"High-end",score:175},
  {id:"rtx4070s",name:"GeForce RTX 4070 SUPER",brand:"NVIDIA",tier:"Upper mid-range",score:165},
  {id:"rtx4070",name:"GeForce RTX 4070",brand:"NVIDIA",tier:"Upper mid-range",score:150},
  {id:"rtx4060ti",name:"GeForce RTX 4060 Ti",brand:"NVIDIA",tier:"Mid-range",score:120},
  {id:"rtx4060",name:"GeForce RTX 4060",brand:"NVIDIA",tier:"Mid-range",score:105},
  {id:"rtx3090",name:"GeForce RTX 3090",brand:"NVIDIA",tier:"Enthusiast",score:185},
  {id:"rtx3080",name:"GeForce RTX 3080",brand:"NVIDIA",tier:"High-end",score:155},
  {id:"rtx3070",name:"GeForce RTX 3070",brand:"NVIDIA",tier:"Upper mid-range",score:125},
  {id:"rtx3060ti",name:"GeForce RTX 3060 Ti",brand:"NVIDIA",tier:"Mid-range",score:105},
  {id:"rtx3060",name:"GeForce RTX 3060",brand:"NVIDIA",tier:"Mid-range",score:85},
  {id:"rtx3050",name:"GeForce RTX 3050",brand:"NVIDIA",tier:"Entry-level",score:55},
  {id:"gtx1660",name:"GeForce GTX 1660",brand:"NVIDIA",tier:"Older generation",score:42},
  {id:"rx9070xt",name:"Radeon RX 9070 XT",brand:"AMD",tier:"High-end",score:205},
  {id:"rx9070",name:"Radeon RX 9070",brand:"AMD",tier:"Upper mid-range",score:180},
  {id:"rx9060xt",name:"Radeon RX 9060 XT",brand:"AMD",tier:"Mid-range",score:135},
  {id:"rx7900xtx",name:"Radeon RX 7900 XTX",brand:"AMD",tier:"Enthusiast",score:220},
  {id:"rx7900xt",name:"Radeon RX 7900 XT",brand:"AMD",tier:"High-end",score:190},
  {id:"rx7900gre",name:"Radeon RX 7900 GRE",brand:"AMD",tier:"Upper mid-range",score:155},
  {id:"rx7800xt",name:"Radeon RX 7800 XT",brand:"AMD",tier:"Upper mid-range",score:145},
  {id:"rx7700xt",name:"Radeon RX 7700 XT",brand:"AMD",tier:"Mid-range",score:125},
  {id:"rx7600xt",name:"Radeon RX 7600 XT",brand:"AMD",tier:"Mid-range",score:95},
  {id:"rx7600",name:"Radeon RX 7600",brand:"AMD",tier:"Entry-level",score:85},
  {id:"rx6750xt",name:"Radeon RX 6750 XT",brand:"AMD",tier:"Mid-range",score:105},
  {id:"rx6700xt",name:"Radeon RX 6700 XT",brand:"AMD",tier:"Mid-range",score:95},
  {id:"rx6600",name:"Radeon RX 6600",brand:"AMD",tier:"Entry-level",score:65}
];

const games = [
  {id:"fortnite",name:"Fortnite",factor:1.12},
  {id:"gtav",name:"Grand Theft Auto V",factor:1.25},
  {id:"minecraft",name:"Minecraft",factor:1.65},
  {id:"forza",name:"Forza Horizon 5",factor:.82},
  {id:"warzone",name:"Call of Duty: Warzone",factor:.68},
  {id:"cod",name:"Call of Duty (recent titles)",factor:.76},
  {id:"cs2",name:"Counter-Strike 2",factor:1.35},
  {id:"valorant",name:"VALORANT",factor:1.85},
  {id:"cyberpunk",name:"Cyberpunk 2077",factor:.48},
  {id:"rdr2",name:"Red Dead Redemption 2",factor:.62},
  {id:"apex",name:"Apex Legends",factor:1.08},
  {id:"pubg",name:"PUBG: Battlegrounds",factor:.86},
  {id:"overwatch",name:"Overwatch 2",factor:1.3},
  {id:"rocketleague",name:"Rocket League",factor:1.75},
  {id:"rust",name:"Rust",factor:.78},
  {id:"r6",name:"Rainbow Six Siege",factor:1.4},
  {id:"roblox",name:"Roblox",factor:1.7},
  {id:"msfs",name:"Microsoft Flight Simulator",factor:.42},
  {id:"fc26",name:"EA SPORTS FC 26",factor:1.45},
  {id:"pubg",name:"PUBG: Battlegrounds",factor:.86}
];

const resolutionMultipliers = {1080:1,1440:.72,2160:.43};
const qualityMultipliers = {low:1.32,medium:1,high:.79,ultra:.61};
const cpuMultipliers = {entry:.78,mid:1,high:1.12,top:1.2};
const $ = id => document.getElementById(id);

function populateSelect(select, items, selectedId) {
  select.innerHTML = items.map(item => `<option value="${item.id}">${item.name}</option>`).join("");
  if (selectedId) select.value = selectedId;
}
function gpuById(id){return gpus.find(g=>g.id===id)}
function gameById(id){return games.find(g=>g.id===id)}

populateSelect($("gpu"),gpus,"rtx3050");
populateSelect($("gpu1"),gpus,"rtx3060");
populateSelect($("gpu2"),gpus,"rtx4060");
populateSelect($("game"),games,"fortnite");
$("gpu-count").textContent=gpus.length;
$("game-count").textContent=games.length;

$("calculate").addEventListener("click",()=>{
  const gpu=gpuById($("gpu").value), game=gameById($("game").value);
  const cpu=$("cpu").value, ram=Number($("ram").value);
  const resolution=$("resolution").value, quality=$("quality").value;
  let fps=gpu.score*game.factor*resolutionMultipliers[resolution]*qualityMultipliers[quality]*cpuMultipliers[cpu];
  if(ram===8) fps*=.78;
  if(ram>=32) fps*=1.025;
  fps=Math.max(5,Math.round(fps));
  $("result-empty").classList.add("hidden");
  $("result").classList.remove("hidden");
  $("fps").textContent=fps;
  $("result-description").textContent=`${game.name} · ${resolution}p · ${quality} settings`;
  $("result-gpu").textContent=gpu.name.replace("GeForce ","").replace("Radeon ","");
  $("result-game").textContent=game.name;
  $("result-resolution").textContent=resolution+"p";
  $("fps-range").textContent=`${Math.max(1,Math.round(fps*.85))}–${Math.round(fps*1.15)} FPS`;
  $("fps-meter").style.width=Math.min(100,fps/240*100)+"%";
  $("result-tip").textContent=ram===8?"8 GB RAM may limit performance or cause stuttering in some modern games. This simplified model applies a small illustrative adjustment.":"Actual performance varies with CPU model, game updates, drivers, cooling, memory configuration and in-game settings.";
});

$("compare-button").addEventListener("click",()=>{
  const a=gpuById($("gpu1").value),b=gpuById($("gpu2").value);
  const max=Math.max(a.score,b.score);
  let winner=a.score===b.score?"They're level in this demo model.":`${a.score>b.score?a.name:b.name} leads by ${Math.round(Math.abs(a.score-b.score)/Math.min(a.score,b.score)*100)}% in demo score.`;
  $("compare-result").classList.remove("hidden");
  $("compare-result").innerHTML=`<div class="compare-winner">DEMO SCORE RESULT<strong>${winner}</strong><span>Illustrative relative scores — not real-world benchmark data.</span></div><div class="compare-bars"><div class="bar-item"><span>${a.name}<b>${a.score}</b></span><div class="bar-track"><i style="width:${a.score/max*100}%"></i></div></div><div class="bar-item"><span>${b.name}<b>${b.score}</b></span><div class="bar-track"><i style="width:${b.score/max*100}%"></i></div></div></div>`;
});

let activeFilter="all";
function renderLibrary(){
  const query=$("gpu-search").value.trim().toLowerCase();
  const visible=gpus.filter(g=>(activeFilter==="all"||g.brand===activeFilter)&&(`${g.name} ${g.brand} ${g.tier}`.toLowerCase().includes(query)));
  $("gpu-library").innerHTML=visible.map(g=>`<article class="gpu-card"><div class="gpu-brand ${g.brand==="AMD"?"amd":""}">${g.brand}</div><h3>${g.name}</h3><div class="gpu-tier">${g.tier}</div><div class="gpu-score"><small>DEMO SCORE</small><b>${g.score}</b></div></article>`).join("");
  $("library-count").textContent=`Showing ${visible.length} of ${gpus.length} graphics cards · Demo scores only`;
}
$("gpu-search").addEventListener("input",renderLibrary);
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");activeFilter=button.dataset.filter;renderLibrary();
}));
renderLibrary();
