// ===== Reveal Animation =====

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

// ===== Typing Animation =====

const roles=[

"Cloud Architect",

"Multi-Cloud Engineer",

"Cloud Consultant",

"Cloud Security",

"AWS | Azure | GCP",

"Founder • Nanobricks"

];

let role=0;

let char=0;

let deleting=false;

const typing=document.getElementById("typing");

function type(){

let text=roles[role];

typing.textContent=text.substring(0,char);

if(!deleting){

char++;

if(char>text.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

char--;

if(char===0){

deleting=false;

role=(role+1)%roles.length;

}

}

setTimeout(type,deleting?40:90);

}

type();

// ===== Stars =====

const stars=document.getElementById("stars");

for(let i=0;i<220;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.animationDelay=Math.random()*5+"s";

stars.appendChild(s);

}

// ===== Mouse Glow =====

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ===== Counter Animation =====

const cards=document.querySelectorAll(".card h2");

cards.forEach(card=>{

const txt=card.innerText;

if(txt.includes("+")){

let count=0;

const end=parseInt(txt);

const timer=setInterval(()=>{

count++;

card.innerText=count+"+";

if(count>=end){

clearInterval(timer);

}

},120);

}

});
