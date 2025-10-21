/*  Bubble folgt dem Button und übernimmt dessen Akzentfarbe */
const nav    = document.querySelector('.menu-container');
const bubble = document.querySelector('.menu-bubble');
const links  = [...document.querySelectorAll('.menu-list a')];

let visible = false;
let target  = {x:0,y:0,w:0,h:0};
let state   = {x:0,y:0,w:0,h:0};
let vel     = {x:0,y:0};

const lerp  = (a,b,t)=>a+(b-a)*t;
const clamp = (v,min,max)=>Math.min(max,Math.max(min,v));

function colourWithAlpha(css,alpha=0.18){
  if(css.startsWith('#')){
    const h=css.length===4?css.replace('#','').split('').map(c=>c+c).join(''):css.slice(1);
    const r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if(css.startsWith('rgb')){
    const [r,g,b]=css.match(/[\d.]+/g).map(Number);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return css;
}

function animate(){
  state.x = lerp(state.x,target.x,0.25);
  state.y = lerp(state.y,target.y,0.25);
  state.w = lerp(state.w,target.w,0.25);
  state.h = lerp(state.h,target.h,0.25);

  vel.x   = lerp(vel.x,target.x-state.x,0.25);
  vel.y   = lerp(vel.y,target.y-state.y,0.25);

  const speed   = Math.hypot(vel.x,vel.y);
  const stretch = clamp(speed/180,0,0.35);
  const scaleX  = 1+(Math.abs(vel.x)>Math.abs(vel.y)?stretch:-stretch*0.6);
  const scaleY  = 1+(Math.abs(vel.y)>Math.abs(vel.x)?stretch:-stretch*0.6);

  bubble.style.transform =
    `translate(${state.x}px,${state.y}px) scale(${scaleX},${scaleY})`;
  bubble.style.width  = `${state.w}px`;
  bubble.style.height = `${state.h}px`;

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

function focusLink(link){
  const rL = link.getBoundingClientRect();
  const rN = nav.getBoundingClientRect();

  target = {
    x:rL.left - rN.left - 12,
    y:rL.top  - rN.top  - 6,
    w:rL.width + 24,
    h:rL.height+ 12
  };

  const li          = link.parentElement;
  const activeColor = getComputedStyle(li).getPropertyValue('--menu-link-active-color').trim();
  bubble.style.setProperty('--bubble-bg',     colourWithAlpha(activeColor,0.16));
  bubble.style.setProperty('--bubble-border', colourWithAlpha(activeColor,0.35));

  if(!visible){visible=true;bubble.style.opacity=1;}
}

links.forEach(a=>{
  a.addEventListener('mouseenter',()=>focusLink(a));
  a.addEventListener('focus',     ()=>focusLink(a));
});
nav.addEventListener('mouseleave',()=>{
  visible=false;
  bubble.style.opacity=0;
});
nav.addEventListener('touchstart',e=>{
  const a=e.target.closest('a');if(a)focusLink(a);
},{passive:true});

{
// --- SERVER CODE ---
const jwt = require('jsonwebtoken');

const secret = '69rke65z328mmuw7bjjk3f92afz599ap'; // Your chatbase secret key (should be stored as a secret not in the code)

const user = await getSignedInUser(); // Get the current user signed in to your site

const token = jwt.sign(
    { 
        user_id: user.id, // Your user's id
        email: "winklerdavid815@gmail.com", // User's email
        stripe_accounts: user.stripe_accounts, // User's stripe accounts for stripe integration
        // ... other custom attributes
    }, 
    secret, 
    { expiresIn: '1h' }
);

// --- CLIENT CODE ---
const token = await getUserToken(); // Get the token from your server
window.chatbase('identify', { token }); // identify the user with Chatbase
}