// scroll animation
document.querySelectorAll('.fade').forEach(el=>{
new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('show');
});
}).observe(el);
});

// language toggle
let lang="en";
document.getElementById("langToggle").onclick=()=>{
lang=lang==="en"?"es":"en";
document.querySelectorAll("[data-en]").forEach(el=>{
el.innerText=el.dataset[lang];
});
};

// theme toggle
document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("light");
};

