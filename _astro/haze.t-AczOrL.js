var it=/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;function B(e){return typeof e=="string"&&it.test(e)}function at(e){if(!B(e))return null;let r=e.slice(1),t=r.length===3?r.replace(/./g,"$&$&"):r,n=Number.parseInt(t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function V(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function G([e,r,t]){let n=Math.cbrt(.4122214708*e+.5363325363*r+.0514459929*t),l=Math.cbrt(.2119034982*e+.6806995451*r+.1073969566*t),o=Math.cbrt(.0883024619*e+.2817188376*r+.6299787005*t);return[.2104542553*n+.793617785*l-.0040720468*o,1.9779984951*n-2.428592205*l+.4505937099*o,.0259040371*n+.7827717662*l-.808675766*o]}function j(e){let r=at(e)??[0,0,0];return G([V(r[0]),V(r[1]),V(r[2])])}var se=/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?$/i,ut=/(deg|grad|rad|turn)$/i,ct=/^--[A-Za-z0-9_-]+$/,he=/[ \t\n\r\f]+/,ft=/^#(?:[0-9a-f]{4}|[0-9a-f]{8})$/i,ge=/^none$/i,Ce=/[^\t\n\f\r\x20-\x7e]/,st=8,pt=[[3.2409699419045213,-1.5373831775700935,-.4986107602930033],[-.9692436362808798,1.8759675015077206,.04155505740717561],[.05563007969699361,-.20397695888897657,1.0569715142428786]],mt=[[.48657094864821626,.26566769316909294,.1982172852343625],[.22897456406974884,.6917385218365062,.079286914093745],[0,.045113381858902575,1.0439443689009757]],dt=[[.5766690429101308,.18555823790654627,.18822864623499472],[.29734497525053616,.627363566255466,.07529145849399789],[.027031361386412378,.07068885253582714,.9913375368376389]],ht=[[.6369580483012913,.14461690358620838,.16888097516417205],[.26270021201126703,.677998071518871,.059301716469861945],[0,.028072693049087508,1.0609850577107909]],gt=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],_t=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]],Ae=[.9642956764295677,1,.8251046025104602],q=903.2962962962963,ae=.008856451679035631;function x(e,r){if(ge.test(e))return 0;if(e.endsWith("%")){let n=e.slice(0,-1);if(!se.test(n))return null;let l=Number(n)/100*r;return Number.isFinite(l)?l:null}if(!se.test(e))return null;let t=Number(e);return Number.isFinite(t)?t:null}function Le(e){if(ge.test(e))return 0;let r=ut.exec(e),t=r?e.slice(0,-r[0].length):e;if(!se.test(t))return null;let n=Number(t);if(!Number.isFinite(n))return null;let l=r?r[0].toLowerCase():"deg",o=n;return l==="deg"?o=n*Math.PI/180:l==="grad"?o=n*Math.PI/200:l==="turn"&&(o=n*2*Math.PI),Number.isFinite(o)?o:null}function ze(e){if(Ce.test(e))return null;let r=e.indexOf("(");return r<0||!e.endsWith(")")?null:{name:e.slice(0,r).toLowerCase(),inner:e.slice(r+1,-1)}}function vt(e){return!he.test(e)&&x(e,1)!==null}function D(e){let r=e.split("/");if(r.length>2)return null;let t=r[0].trim().split(he);return r.length===2&&!vt(r[1].trim())?null:t}function X(e,r,t){return Math.min(t,Math.max(r,e))}function Oe(e,r){let t=Math.max(0,e);return[t*Math.cos(r),t*Math.sin(r)]}function De(e){let r=D(e);if(!r||r.length!==3)return null;let t=x(r[0],1),n=x(r[1],.4),l=Le(r[2]);if(t===null||n===null||l===null)return null;let[o,i]=Oe(n,l);return[X(t,0,1),o,i]}function Z(e){let r=ze(e);return r&&r.name==="oklch"?De(r.inner):null}function J(e){if(Ce.test(e)||e.slice(0,4).toLowerCase()!=="var("||!e.endsWith(")"))return null;let r=e.slice(4,-1),t=r.indexOf(","),n=(t<0?r:r.slice(0,t)).trim();return ct.test(n)?{name:n,fallback:t<0?null:r.slice(t+1).trim()}:null}function He(e,r){if(B(e)||Z(e))return!0;let t=J(e);return!t||r>=st?!1:t.fallback===null||He(t.fallback,r+1)}function re(e){return typeof e=="string"&&He(e,0)}function z(e,r){return e.map(t=>t.reduce((n,l,o)=>n+l*r[o],0))}function xt(e,r){return e<0?-r(-e):r(e)}function ye(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Et(e){return e**2.19921875}function bt(e){return e<=.03125?e/16:e**1.8}function St(e){return e<.08124285829863151?e/4.5:((e+.09929682680944008)/1.09929682680944)**2.2222222222222223}function U(e){return G(z(pt,e))}function pe(e){return U(z(_t,e))}function ke(e,r,t){let n=(e+16)/116,l=r/500+n,o=n-t/200,i=l**3,c=o**3,h=i>ae?i:(116*l-16)/q,b=e>q*ae?n**3:e/q,f=c>ae?c:(116*o-16)/q;return pe([h*Ae[0],b,f*Ae[2]])}function Tt(e){let r=D(e);if(!r||r.length!==3)return null;let t=x(r[0],100),n=x(r[1],125),l=x(r[2],125);return t===null||n===null||l===null?null:ke(X(t,0,100),n,l)}function At(e){let r=D(e);if(!r||r.length!==3)return null;let t=x(r[0],100),n=x(r[1],150),l=Le(r[2]);if(t===null||n===null||l===null)return null;let[o,i]=Oe(n,l);return ke(X(t,0,100),o,i)}function yt(e){let r=D(e);if(!r||r.length!==3)return null;let t=x(r[0],1),n=x(r[1],.4),l=x(r[2],.4);return t===null||n===null||l===null?null:[X(t,0,1),n,l]}function wt(e){let r=D(e);if(!r||r.length!==4)return null;let t=r[0].toLowerCase(),n=[1,2,3].map(i=>x(r[i],1));if(n.some(i=>i===null))return null;let l=n,o=i=>l.map(c=>xt(c,i));return t==="srgb"?G(o(ye)):t==="srgb-linear"?G(l):t==="display-p3"?U(z(mt,o(ye))):t==="a98-rgb"?U(z(dt,o(Et))):t==="rec2020"?U(z(ht,o(St))):t==="prophoto-rgb"?pe(z(gt,o(bt))):t==="xyz"||t==="xyz-d65"?U(l):t==="xyz-d50"?pe(l):null}function Ue(e){let r=x(e,255);return r===null?null:X(r,0,255)}function Be(e){let[r,t,n]=e.map(l=>V(l/255));return G([r,t,n])}function Ft(e){let r=e.split(",").map(o=>o.trim());if(r.length!==3&&r.length!==4||r.some(o=>o===""||he.test(o)||ge.test(o)))return null;let t=r.slice(0,3),n=t.filter(o=>o.endsWith("%")).length;if(n!==0&&n!==3||r.length===4&&x(r[3],1)===null)return null;let l=t.map(Ue);return l.some(o=>o===null)?null:Be(l)}function Pt(e){if(e.includes(","))return Ft(e);let r=D(e);if(!r||r.length!==3)return null;let t=r.map(Ue);return t.some(n=>n===null)?null:Be(t)}function Rt(e){return ft.test(e)?j(e.slice(0,e.length===5?4:7)):B(e)?j(e):null}function we(e){if(e.startsWith("#"))return Rt(e);let r=ze(e);if(!r)return null;let{name:t,inner:n}=r;return t==="rgb"||t==="rgba"?Pt(n):t==="oklch"?De(n):t==="oklab"?yt(n):t==="lab"?Tt(n):t==="lch"?At(n):t==="color"?wt(n):null}function ue(e,r){return String(Number(e.toFixed(r)))}function Mt(e){let[r,t,n]=e,l=Number(Math.hypot(t,n).toFixed(4)),o=Math.atan2(n,t)*180/Math.PI;o<0&&(o+=360);let i=Number(o.toFixed(2)),c=l===0||i>=360?0:i;return`oklch(${ue(r,4)} ${ue(l,4)} ${ue(c,2)})`}var Ge=["pill","band","blob","ring","mesh"],We=["none","drift","breathe","flow"],Xe=["none","dither","ascii","halftone","pixelate","glass"],Nt=["pull","push"],It=2,Q=10,R=16,d={center:[0,1],size:[0,1.5],roundness:[0,1],softness:[0,1],rotation:[0,360],rampDirection:[0,1],angle:[0,360],warp:[0,1],warpScale:[.5,4],grain:[0,1],speed:[0,2],loop:[0,30],hover:[0,1],effectSize:[2,64],effectAmount:[0,1]},ne={version:1,seed:1,shape:"pill",center:[.5,.42],size:[.86,.6],roundness:.7,softness:.5,rotation:0,rampDirection:.9,angle:90,warp:.06,warpScale:1,palette:["#6a3df5","#35aef2","#c9a0e8","#f59a22","#3a5cf5","#5a28e8"],background:"#000000",mesh:[],grain:.3,motion:"drift",speed:1,loop:0,hover:0,hoverMode:"pull",effect:"none",effectSize:8,effectAmount:.5};function W(e,[r,t]){return Math.min(t,Math.max(r,e))}function O(e){return typeof e=="number"&&Number.isFinite(e)}function E(e,r,t){return O(e)?W(e,t):r}function Fe(e,r,t){if(!Array.isArray(e)||e.length!==2)return[r[0],r[1]];let[n,l]=e;return!O(n)||!O(l)?[r[0],r[1]]:[W(n,t),W(l,t)]}function Y(e,r,t){return r.includes(e)?e:t}function Pe(e){let r=ne.palette;return r[Math.min(e,r.length-1)]}function Ct(e){if(!Array.isArray(e))return[...ne.palette];let r=e.slice(0,Q).map((t,n)=>re(t)?t:Pe(n));for(;r.length<It;)r.push(Pe(r.length));return r}function Lt(e){if(!Array.isArray(e))return[];let r=[];for(let t of e){if(r.length===R)break;if(!Array.isArray(t)||t.length!==3)continue;let[n,l,o]=t;!O(n)||!O(l)||!re(o)||r.push([W(n,d.center),W(l,d.center),o])}return r}function zt(e){let r=typeof e=="object"&&e!==null?e:{},t=ne;return{version:1,seed:O(r.seed)?Math.floor(r.seed)>>>0:t.seed,shape:Y(r.shape,Ge,t.shape),center:Fe(r.center,t.center,d.center),size:Fe(r.size,t.size,d.size),roundness:E(r.roundness,t.roundness,d.roundness),softness:E(r.softness,t.softness,d.softness),rotation:E(r.rotation,t.rotation,d.rotation),rampDirection:E(r.rampDirection,t.rampDirection,d.rampDirection),angle:E(r.angle,t.angle,d.angle),warp:E(r.warp,t.warp,d.warp),warpScale:E(r.warpScale,t.warpScale,d.warpScale),palette:Ct(r.palette),background:re(r.background)?r.background:t.background,mesh:Lt(r.mesh),grain:E(r.grain,t.grain,d.grain),motion:Y(r.motion,We,t.motion),speed:E(r.speed,t.speed,d.speed),loop:E(r.loop,t.loop,d.loop),hover:E(r.hover,t.hover,d.hover),hoverMode:Y(r.hoverMode,Nt,t.hoverMode),effect:Y(r.effect,Xe,t.effect),effectSize:E(r.effectSize,t.effectSize,d.effectSize),effectAmount:E(r.effectAmount,t.effectAmount,d.effectAmount)}}function Ot(e){let r=e>>>0;return()=>{r=r+1831565813>>>0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var $e={dusk:{colors:["#6a3df5","#35aef2","#c9a0e8","#f59a22","#3a5cf5","#5a28e8"],backgrounds:["#05030f","#0a0828"]},pearl:{colors:["#b3c4f2","#c2c4ee","#d2c0e6","#eda424","#ee9cc4","#2f4de0"],backgrounds:["#02030c","#0b1030"]},ember:{colors:["#1d2c44","#5b6f8a","#a9a39c","#f58220","#ea4f08"],backgrounds:["#0a0402","#120a08"]},horizon:{colors:["#050e7a","#1232e0","#2a52f0","#8f9cf4","#f07a2a","#e59cf4"],backgrounds:["#01020a","#04061c"]},ultraviolet:{colors:["#ff9a2a","#ff4fc4","#f23fe2","#7a2be0","#2a0f6a"],backgrounds:["#07020f","#12052a"]},candy:{colors:["#4fc4f0","#a8e0f0","#f0d9a0","#f2a13a","#f0603c","#e83fd0"],backgrounds:["#3b2fd9","#b02fd0"]}};Object.values($e);function L(e,r){return{...ne,palette:[...$e[e].colors],...r}}L("dusk",{seed:1,center:[.5,.42],size:[.86,.6],roundness:.7,softness:.5,rampDirection:.9}),L("pearl",{seed:22,shape:"pill",center:[.2,.9],size:[1.5,1.3],roundness:1,softness:.4,rampDirection:.15,angle:315,warp:.6,warpScale:1.1}),L("ember",{seed:3,shape:"pill",center:[.5,.3],size:[.9,1],roundness:.45,softness:.22,rampDirection:.55,angle:90,warp:.03}),L("horizon",{seed:4,shape:"band",center:[.5,.64],size:[1,.86],softness:.62,rampDirection:1,angle:90,warp:.02}),L("ultraviolet",{seed:11,shape:"blob",center:[.6,.5],size:[1.5,1.05],roundness:.62,softness:.4,rampDirection:.15,angle:90,warp:.85,warpScale:1.2}),L("candy",{seed:6,shape:"pill",center:[.5,.47],size:[.62,.56],roundness:.6,softness:.5,rampDirection:.92,angle:90,warp:.04,background:"#3b2fd9"});var Dt=/\s+/,qe=8,Re=64,Ye="(prefers-color-scheme: dark)",ce="light-dark(";function le(e){try{return e?.ownerDocument?.defaultView??null}catch{return null}}function Ht(e,r){try{let t=le(e);return!t||!e?"":String(t.getComputedStyle(e).getPropertyValue(r)??"").trim()}catch{return""}}function Ke(e,r){try{let t=le(e);if(!t||!e)return"";let n=t.getComputedStyle(e)[r];return typeof n=="string"?n.trim():""}catch{return""}}function kt(e){return e.ownerDocument.querySelector('meta[name="color-scheme"]')?.content??""}function Ut(e){try{let r=le(e);if(!r||!e)return!1;let t=Ke(e,"colorScheme").toLowerCase();(t===""||t==="normal")&&(t=kt(e).toLowerCase());let n=t.split(Dt),l=n.includes("dark"),o=n.includes("light");return l&&!o?!0:l&&o?r.matchMedia(Ye).matches===!0:!1}catch{return!1}}function Bt(e){if(e.context!==void 0)return e.context;let r=null;try{let t=e.element;if(t){let n=t.ownerDocument.createElement("canvas");n.width=1,n.height=1,r=n.getContext("2d")}}catch{r=null}return e.context=r,r}function Gt(e,r){try{let t=Bt(r);if(!t)return null;t.fillStyle="#010203",t.fillStyle=e;let n=String(t.fillStyle);t.fillStyle="#040506",t.fillStyle=e;let l=String(t.fillStyle);return n===l?n:null}catch{return null}}function Wt(e){let r=0;for(let t=0;t<e.length;t++){let n=e[t];if(n==="(")r++;else if(n===")")r--;else if(n===","&&r===0)return[e.slice(0,t).trim(),e.slice(t+1).trim()]}return null}function Ve(e,r,t,n){if(t>qe)return null;let l=e;if(l.toLowerCase()==="currentcolor"){if(l=Ke(r,"color"),l==="")return null}else if(l.slice(0,ce.length).toLowerCase()===ce&&l.endsWith(")")){let c=Wt(l.slice(ce.length,-1));return c?Ve(Ut(r)?c[1]:c[0],r,t+1,n):null}let o=we(l);if(o)return o;let i=Gt(l,n);return i===null?null:we(i)}function me(e,r,t,n){let l=J(e);if(!l||t>qe)return null;let o=r?Ht(r,l.name):"";if(o!==""){let c=Ve(o,r,t,n);if(c){let h=B(o)?c:[Math.min(1,Math.max(0,c[0])),c[1],c[2]];return{text:B(o)||Z(o)?o:Mt(h),lab:h}}}let i=l.fallback;return i===null||i===""?null:J(i)?me(i,r,t+1,n):{text:i,lab:Z(i)??j(i)}}function Xt(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]}function $t(e,r){let t=new Map,n=new Set,l={element:e,context:void 0},o=null,i=null,c=!1;function h(){try{return e===null||e.isConnected}catch{return!1}}function b(){try{if(n.size===0)return;if(!e||!e.isConnected){for(let p of n)t.delete(p);n.clear(),S();return}let s=!1;for(let p of n){let _=me(p,e,0,l)?.lab??[0,0,0],A=t.get(p);(!A||!Xt(A,_))&&(t.set(p,_),s=!0)}s&&r()}catch{return}}function f(){if(c)return;let s=le(e);if(!(!s||!e)){if(o===null)try{o=new s.MutationObserver(b),o.observe(e.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})}catch{o=null}if(i===null)try{i=s.matchMedia(Ye),i.addEventListener("change",b)}catch{i=null}}}function S(){try{o?.disconnect()}catch{o=null}try{i?.removeEventListener("change",b)}catch{i=null}o=null,i=null}function g(s){let p=t.get(s);if(p)return p;let _=re(s)&&J(s)!==null,A=_?me(s,e,0,l)?.lab??[0,0,0]:(typeof s=="string"?Z(s):null)??j(s);if(!_||h()){if(t.size>=Re){for(let M of[...t.keys()])n.has(M)||t.delete(M);t.size>=Re&&(t.clear(),n.clear(),S())}t.set(s,A),_&&e!==null&&(n.add(s),f())}return A}function F(){c=!0,S(),t.clear(),n.clear(),l.context=void 0,l.element=null}return{get:g,dispose:F}}function qt(e,r,t,n){if(!(r>=d.effectSize[0]&&r<=d.effectSize[1]))return null;let l=r*Math.min(t,n)/1080,o=e==="ascii"?Math.max(7,l)*.999:e==="dither"||e==="pixelate"?Math.ceil(l-.501):0;return o>=2?{width:Math.floor(t/o)+2,height:Math.floor(n/o)+2}:null}var Yt={x:.5,y:.5,force:0},je=`#version 300 es
void main() {
  vec2 corner = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(corner * 2.0 - 1.0, 0.0, 1.0);
}
`,Kt=[[".....",".....",".....",".....","..#.."],[".....","..#..",".....","..#..","....."],[".....",".....",".###.",".....","....."],[".....","..#..",".###.","..#..","....."],[".....",".###.",".....",".###.","....."],["#...#",".#.#.","..#..",".#.#.","#...#"],[".###.","#...#","#...#","#...#",".###."],[".###.","#...#",".###.","#...#",".###."],[".###.","#.#.#","#.###","#....",".####"],[".#.#.","#####",".#.#.","#####",".#.#."]];function Vt(e){let r=0;return e.forEach((t,n)=>{for(let l=0;l<5;l++)t[l]==="#"&&(r|=1<<l+5*n)}),r}function Me(e){return e.toString(2).replace(/0/g,"").length}function _e(){return`#version 300 es
precision highp float;
precision highp int;

`}function ve(){return`uniform vec2 u_resolution;
uniform float u_time;
uniform float u_loop;
uniform vec2 u_seed;
uniform uint u_grainSeed;
uniform int u_shape;
uniform int u_motion;
uniform vec2 u_center;
uniform vec2 u_size;
uniform float u_roundness;
uniform float u_softness;
uniform float u_rotation;
uniform float u_rampDirection;
uniform float u_angle;
uniform float u_warp;
uniform float u_warpScale;
uniform float u_grain;
uniform vec3 u_palette[${Q}];
uniform int u_paletteCount;
uniform vec3 u_background;
uniform vec2 u_meshPoints[${R}];
uniform vec3 u_meshColors[${R}];
uniform int u_meshCount;
uniform int u_effect;
uniform float u_effectSize;
uniform float u_effectAmount;
uniform vec2 u_pointer;
uniform float u_pointerForce;

`}function xe(e){return`const int SHAPE_BAND = 1;
const int SHAPE_BLOB = 2;
const int SHAPE_RING = 3;
const int SHAPE_MESH = 4;
const float RING_RADIUS = 0.68;
const float RING_HALF_WIDTH = 0.32;
const float POINTER_REACH = 0.1;
const float POINTER_PULL = 1.6;
const float POINTER_PUSH = 0.8;
const float POINTER_PUSH_REACH = 0.25;
const int MOTION_DRIFT = 1;
const int MOTION_BREATHE = 2;
const int MOTION_FLOW = 3;
const int EFFECT_DITHER = 1;
const int EFFECT_ASCII = 2;
const int EFFECT_HALFTONE = 3;
const int EFFECT_PIXELATE = 4;
const int EFFECT_GLASS = 5;
const int GLYPH_COUNT = ${e.length};
const int GLYPHS[GLYPH_COUNT] = int[GLYPH_COUNT](${e.join(", ")});
const float TAU = 6.28318530718;
const vec3 LUMA = vec3(0.299, 0.587, 0.114);
const mat2 HALFTONE_ROTATION = mat2(0.70710678, -0.70710678, 0.70710678, 0.70710678);

`}function Ee(){return`uint hash(uint x) {
  x ^= x >> 16;
  x *= 0x7feb352du;
  x ^= x >> 15;
  x *= 0x846ca68bu;
  x ^= x >> 16;
  return x;
}

`}function Ze(){return`uint hash3(ivec3 p) {
  return hash(uint(p.x) + hash(uint(p.y) + hash(uint(p.z))));
}

vec3 gradientAt(ivec3 p) {
  uint h = hash3(p);
  vec3 g = vec3(float(h & 1023u), float((h >> 10) & 1023u), float((h >> 20) & 1023u)) / 511.5 - 1.0;
  return normalize(g + 1e-4);
}

float gradientNoise(vec3 p) {
  vec3 cell = floor(p);
  ivec3 i = ivec3(cell);
  vec3 f = p - cell;
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float n000 = dot(gradientAt(i), f);
  float n100 = dot(gradientAt(i + ivec3(1, 0, 0)), f - vec3(1.0, 0.0, 0.0));
  float n010 = dot(gradientAt(i + ivec3(0, 1, 0)), f - vec3(0.0, 1.0, 0.0));
  float n110 = dot(gradientAt(i + ivec3(1, 1, 0)), f - vec3(1.0, 1.0, 0.0));
  float n001 = dot(gradientAt(i + ivec3(0, 0, 1)), f - vec3(0.0, 0.0, 1.0));
  float n101 = dot(gradientAt(i + ivec3(1, 0, 1)), f - vec3(1.0, 0.0, 1.0));
  float n011 = dot(gradientAt(i + ivec3(0, 1, 1)), f - vec3(0.0, 1.0, 1.0));
  float n111 = dot(gradientAt(i + ivec3(1, 1, 1)), f - vec3(1.0, 1.0, 1.0));
  float front = mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y);
  float back = mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y);
  return mix(front, back, u.z) * 1.6;
}

vec2 warpField(vec2 p, float z) {
  vec3 q = vec3(p, z);
  return vec2(gradientNoise(q), gradientNoise(q + vec3(19.1, 7.3, 3.7)));
}

float cycle(float rate) {
  if (u_loop <= 0.0) return u_time * rate;
  return TAU * max(1.0, floor(u_loop * rate / TAU + 0.5)) * u_time / u_loop;
}

float evolvingNoise(vec3 p, float rate) {
  if (u_motion != MOTION_DRIFT) return gradientNoise(p);
  if (u_loop <= 0.0) return gradientNoise(p + vec3(0.0, 0.0, u_time * rate));
  float phase = fract(u_time / u_loop);
  float blend = phase * phase * (3.0 - 2.0 * phase);
  float travel = u_loop * rate;
  float correlation = exp(-5.0 * travel * travel);
  float level = inversesqrt(1.0 - 2.0 * blend * (1.0 - blend) * (1.0 - correlation));
  float ahead = gradientNoise(p + vec3(0.0, 0.0, phase * travel));
  float behind = gradientNoise(p + vec3(0.0, 0.0, (phase - 1.0) * travel));
  return mix(ahead, behind, blend) * level;
}

vec2 evolvingField(vec2 p, float depth, float rate) {
  vec3 q = vec3(p, depth);
  return vec2(evolvingNoise(q, rate), evolvingNoise(q + vec3(19.1, 7.3, 3.7), rate));
}

vec3 stopAt(int index) {
  return u_palette[clamp(index, 0, u_paletteCount - 1)];
}

vec3 ramp(float t) {
  float x = clamp(t, 0.0, 1.0) * float(u_paletteCount - 1);
  int i = int(floor(x));
  float f = x - float(i);
  vec3 p0 = stopAt(i - 1);
  vec3 p1 = stopAt(i);
  vec3 p2 = stopAt(i + 1);
  vec3 p3 = stopAt(i + 2);
  return 0.5 * (2.0 * p1
    + (p2 - p0) * f
    + (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * f * f
    + (3.0 * p1 - p0 - 3.0 * p2 + p3) * f * f * f);
}

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}

vec3 linearToSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

`}function Je(){return`float grainHash(ivec2 p, uint salt) {
  return float(hash(uint(p.x) + hash(uint(p.y) + hash(u_grainSeed + salt)))) / 4294967295.0;
}

float grainNoise(vec2 p, uint salt) {
  vec2 cell = floor(p);
  ivec2 i = ivec2(cell);
  vec2 f = p - cell;
  float top = mix(grainHash(i, salt), grainHash(i + ivec2(1, 0), salt), f.x);
  float bottom = mix(grainHash(i + ivec2(0, 1), salt), grainHash(i + ivec2(1, 1), salt), f.x);
  return mix(top, bottom, f.y);
}

float bayer(ivec2 p) {
  int x = p.x & 7;
  int y = p.y & 7;
  int value = 0;
  for (int bit = 0; bit < 3; bit++) {
    int xBit = (x >> bit) & 1;
    int yBit = (y >> bit) & 1;
    value = (value << 2) | ((xBit ^ yBit) << 1) | yBit;
  }
  return (float(value) + 0.5) / 64.0;
}

float glyphBit(int glyph, ivec2 texel) {
  if (texel.x < 0 || texel.x > 4 || texel.y < 0 || texel.y > 4) return 0.0;
  return float((glyph >> (texel.x + 5 * texel.y)) & 1);
}

`}function Qe(){return`vec3 meshColor(vec2 position, vec2 aspect, float breathe, float orbit) {
  if (u_meshCount == 0) return u_background;
  float sharpness = mix(3.0, 1.0, u_softness);
  vec3 sum = vec3(0.0);
  float total = 0.0;
  for (int index = 0; index < ${R}; index++) {
    if (index >= u_meshCount) break;
    float phase = float(index) * 2.399;
    vec2 point = 0.5 + (u_meshPoints[index] - 0.5) * (1.0 + 0.12 * breathe);
    point += 0.07 * (vec2(sin(orbit + phase), cos(orbit + phase * 1.3)) - vec2(sin(phase), cos(phase * 1.3)));
    vec2 delta = position - point * aspect;
    float weight = pow(dot(delta, delta) + 0.002, -sharpness);
    sum += weight * u_meshColors[index];
    total += weight;
  }
  return sum / total;
}

vec3 gradientAt(vec2 pixel) {
  float shortSide = min(u_resolution.x, u_resolution.y);
  vec2 aspect = u_resolution / shortSide;
  vec2 position = pixel / u_resolution * aspect;

  float breathe = u_motion == MOTION_BREATHE ? sin(cycle(1.0)) : 0.0;
  float flow = u_motion == MOTION_FLOW ? sin(cycle(0.6)) : 0.0;

  vec2 centered = position - 0.5 * aspect;
  vec2 warpPosition = centered * u_warpScale + u_seed;
  vec2 coarse = evolvingField(warpPosition, 0.0, 0.07);
  vec2 fine = evolvingField(warpPosition * 1.9 + coarse * 1.2 + 5.2, 4.0, 0.091);
  vec2 wobble = vec2(0.0);
  vec2 sway = vec2(0.0);
  if (u_motion == MOTION_DRIFT) {
    vec2 wobblePosition = centered * 0.9 + u_seed.yx;
    wobble = 0.1 * (evolvingField(wobblePosition, 20.0, 0.22) - warpField(wobblePosition, 20.0));
    sway = 0.04 * vec2(sin(cycle(0.5)), sin(cycle(0.37) + 1.3) - sin(1.3));
  }
  vec2 fromPointer = position - u_pointer * aspect;
  bool pulling = u_pointerForce > 0.0;
  float pointerGain = pulling ? POINTER_PULL : POINTER_PUSH;
  float pointerReach = pulling ? POINTER_REACH : POINTER_PUSH_REACH;
  vec2 pull = fromPointer * exp(-dot(fromPointer, fromPointer) / pointerReach) * u_pointerForce * pointerGain;
  vec2 displaced = position + (coarse + 0.3 * fine) * u_warp * 0.9 + wobble + sway + pull;
  if (u_shape == SHAPE_MESH) {
    float orbit = u_motion == MOTION_FLOW ? cycle(0.6) : 0.0;
    return linearToSrgb(oklabToLinear(meshColor(displaced, aspect, breathe, orbit)));
  }
  vec2 offset = displaced - u_center * aspect;
  float turnX = cos(u_rotation);
  float turnY = sin(u_rotation);
  vec2 p = vec2(turnX * offset.x + turnY * offset.y, turnX * offset.y - turnY * offset.x);

  vec2 halfExtent = max(u_size * aspect * 0.5, vec2(1e-3)) * (1.0 + 0.1 * breathe);
  float falloff = (0.006 + 0.5 * u_softness * u_softness) * (1.0 + 0.3 * breathe);
  vec2 axis = vec2(cos(u_angle), sin(u_angle));
  float along = dot(p, axis);

  float radial;
  float slope;
  float depth;
  float axisExtent;
  if (u_shape == SHAPE_BAND) {
    depth = halfExtent.y;
    radial = abs(along) / depth;
    slope = 1.0 / depth;
    axisExtent = depth;
  } else {
    float power = u_shape == SHAPE_BLOB ? 2.0 : mix(8.0, 2.0, u_roundness);
    vec2 scaled = abs(p) / halfExtent;
    radial = pow(pow(scaled.x, power) + pow(scaled.y, power), 1.0 / power);
    vec2 direction = scaled / max(radial, 1e-4);
    slope = max(length(pow(direction, vec2(power - 1.0)) / halfExtent), 1e-4);
    depth = min(halfExtent.x, halfExtent.y);
    axisExtent = abs(axis.x) * halfExtent.x + abs(axis.y) * halfExtent.y;
    if (u_shape == SHAPE_BLOB) {
      radial += mix(0.45, 0.08, u_roundness) * evolvingNoise(vec3(p / depth * 0.9 + u_seed.yx, 9.0), 0.07);
    }
    if (u_shape == SHAPE_RING) {
      radial = abs(radial - RING_RADIUS) / RING_HALF_WIDTH;
      slope /= RING_HALF_WIDTH;
    }
  }

  float edgeDistance = (radial - 1.0) / slope;
  float mask = 0.5 - 0.5 * tanh(1.6 * edgeDistance / falloff);

  float radialT = clamp(radial, 0.0, 1.0);
  radialT = radialT * radialT * (3.0 - 2.0 * radialT);
  float axisT = clamp(0.5 + 0.5 * along / axisExtent, 0.0, 1.0);
  float t = mix(radialT, axisT, u_rampDirection) + 0.15 * flow;

  vec3 lab = mix(u_background, ramp(t), mask);
  return linearToSrgb(oklabToLinear(lab));
}

`}function et(){return`void main() {
  float shortSide = min(u_resolution.x, u_resolution.y);
  vec3 color = applyEffect(vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y));

  float cellSize = max(1.0, shortSide / 1080.0);
  vec2 grainPosition = (gl_FragCoord.xy - 0.5) / cellSize;
  float fineGrain = grainNoise(grainPosition, 0u) + grainNoise(grainPosition, 7u) - 1.0;
  float coarseGrain = grainNoise(grainPosition * 0.5 + 100.0, 13u) - 0.5;
  float luma = dot(color, LUMA);
  float strength = u_grain * 0.14 * mix(0.3, 1.0, smoothstep(0.0, 0.2, luma));
  color += (0.8 * fineGrain + 0.4 * coarseGrain) * strength;

  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`}function be(){return Kt.map(Vt).sort((e,r)=>Me(e)-Me(r))}function K(){return _e()+ve()+`out vec4 outColor;

`+xe(be())+Ee()+Ze()+Je()+Qe()+`vec3 applyEffect(vec2 pixel) {
  float scale = min(u_resolution.x, u_resolution.y) / 1080.0;
  float cell = 1.0;
  vec2 id = vec2(0.0);
  vec2 grid = vec2(0.0);
  float rib = 1.0;
  float across = 0.0;
  vec2 samplePoint = pixel;

  if (u_effect == EFFECT_DITHER) {
    cell = max(1.0, round(u_effectSize * scale));
    id = floor(pixel / cell);
    samplePoint = (id + 0.5) * cell;
  } else if (u_effect == EFFECT_ASCII) {
    cell = max(7.0, u_effectSize * scale);
    id = floor(pixel / cell);
    samplePoint = (id + 0.5) * cell;
  } else if (u_effect == EFFECT_HALFTONE) {
    cell = max(3.0, u_effectSize * scale);
    grid = HALFTONE_ROTATION * pixel / cell;
    id = floor(grid) + 0.5;
    samplePoint = transpose(HALFTONE_ROTATION) * id * cell;
  } else if (u_effect == EFFECT_PIXELATE) {
    cell = max(1.0, round(u_effectSize * scale));
    samplePoint = (floor(pixel / cell) + 0.5) * cell;
  } else if (u_effect == EFFECT_GLASS) {
    rib = max(2.0, u_effectSize * scale);
    across = fract(pixel.x / rib) - 0.5;
    samplePoint = pixel + vec2(across * rib * u_effectAmount * 8.0, 0.0);
  }

  vec3 color = gradientAt(samplePoint);

  if (u_effect == EFFECT_DITHER) {
    float steps = floor(mix(1.0, 7.0, u_effectAmount) + 0.5);
    return floor(color * steps + bayer(ivec2(id))) / steps;
  }

  if (u_effect == EFFECT_ASCII) {
    float peak = max(color.r, max(color.g, color.b));
    float brightness = pow(clamp(mix(dot(color, LUMA), peak, 0.5), 0.0, 0.999), 0.75);
    int index = int(floor(brightness * float(GLYPH_COUNT + 1)));
    if (index == 0) return vec3(0.0);
    int glyph = GLYPHS[index - 1];
    float footprint = 7.0 / cell;
    vec2 low = fract(pixel / cell) * 7.0 - 1.0 - 0.5 * footprint;
    ivec2 texel = ivec2(floor(low));
    vec2 spill = clamp((low + footprint - vec2(texel) - 1.0) / footprint, 0.0, 1.0);
    float lit = mix(
      mix(glyphBit(glyph, texel), glyphBit(glyph, texel + ivec2(1, 0)), spill.x),
      mix(glyphBit(glyph, texel + ivec2(0, 1)), glyphBit(glyph, texel + ivec2(1, 1)), spill.x),
      spill.y);
    return mix(color, color / max(peak, 1e-3), u_effectAmount) * lit;
  }

  if (u_effect == EFFECT_HALFTONE) {
    float peak = max(color.r, max(color.g, color.b));
    float radius = sqrt(peak) * mix(0.4, 0.75, u_effectAmount);
    float edge = 0.75 / cell;
    float coverage = 1.0 - smoothstep(radius - edge, radius + edge, length(grid - id));
    return color / max(peak, 1e-3) * coverage;
  }

  if (u_effect == EFFECT_GLASS) {
    color *= 1.0 + 0.3 * u_effectAmount * across;
    return color * (1.0 - 0.3 * u_effectAmount * smoothstep(0.38, 0.5, abs(across)));
  }

  return color;
}

`+et()}function tt(){return _e()+ve()+`out uvec4 outCell;

`+xe(be())+Ee()+Ze()+Qe()+`void main() {
  float scale = min(u_resolution.x, u_resolution.y) / 1080.0;
  float cell = u_effect == EFFECT_ASCII ? max(7.0, u_effectSize * scale) : max(1.0, round(u_effectSize * scale));
  vec2 id = floor(gl_FragCoord.xy);
  outCell = uvec4(floatBitsToUint(gradientAt((id + 0.5) * cell)), 0u);
}
`}function rt(){return _e()+ve()+`uniform highp usampler2D u_cells;

out vec4 outColor;

`+xe(be())+Ee()+Je()+`vec3 cellAt(vec2 id) {
  return uintBitsToFloat(texelFetch(u_cells, ivec2(id), 0).rgb);
}

vec3 applyEffect(vec2 pixel) {
  float scale = min(u_resolution.x, u_resolution.y) / 1080.0;

  if (u_effect == EFFECT_DITHER) {
    float cell = max(1.0, round(u_effectSize * scale));
    vec2 id = floor(pixel / cell);
    vec3 color = cellAt(id);
    float steps = floor(mix(1.0, 7.0, u_effectAmount) + 0.5);
    return floor(color * steps + bayer(ivec2(id))) / steps;
  }

  if (u_effect == EFFECT_ASCII) {
    float cell = max(7.0, u_effectSize * scale);
    vec2 id = floor(pixel / cell);
    vec3 color = cellAt(id);
    float peak = max(color.r, max(color.g, color.b));
    float brightness = pow(clamp(mix(dot(color, LUMA), peak, 0.5), 0.0, 0.999), 0.75);
    int index = int(floor(brightness * float(GLYPH_COUNT + 1)));
    if (index == 0) return vec3(0.0);
    int glyph = GLYPHS[index - 1];
    float footprint = 7.0 / cell;
    vec2 low = fract(pixel / cell) * 7.0 - 1.0 - 0.5 * footprint;
    ivec2 texel = ivec2(floor(low));
    vec2 spill = clamp((low + footprint - vec2(texel) - 1.0) / footprint, 0.0, 1.0);
    float lit = mix(
      mix(glyphBit(glyph, texel), glyphBit(glyph, texel + ivec2(1, 0)), spill.x),
      mix(glyphBit(glyph, texel + ivec2(0, 1)), glyphBit(glyph, texel + ivec2(1, 1)), spill.x),
      spill.y);
    return mix(color, color / max(peak, 1e-3), u_effectAmount) * lit;
  }

  if (u_effect == EFFECT_PIXELATE) {
    float cell = max(1.0, round(u_effectSize * scale));
    return cellAt(floor(pixel / cell));
  }

  return vec3(0.0);
}

`+et()}var jt=["u_resolution","u_time","u_loop","u_seed","u_grainSeed","u_shape","u_motion","u_center","u_size","u_roundness","u_softness","u_rotation","u_rampDirection","u_angle","u_warp","u_warpScale","u_grain","u_palette","u_paletteCount","u_background","u_meshPoints","u_meshColors","u_meshCount","u_effect","u_effectSize","u_effectAmount","u_pointer","u_pointerForce"],Zt=1,fe=16,Jt=/swiftshader|llvmpipe|softpipe|lavapipe|basic render|software/i,Qt="WebKit WebGL";function Ne(e,r,t){let n=e.createShader(r);return n?(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)&&!e.isContextLost()?(console.error("[hazeglow] shader compile failed:",e.getShaderInfoLog(n)),e.deleteShader(n),null):n):null}function nt(e,r){let t={};for(let n of jt)t[n]=e.getUniformLocation(r,n);return t}function ee(e,r){let t=e.createShader(e.VERTEX_SHADER),n=e.createShader(e.FRAGMENT_SHADER),l=e.createProgram();return!t||!n||!l?(t&&e.deleteShader(t),n&&e.deleteShader(n),l&&e.deleteProgram(l),null):(e.shaderSource(t,je),e.compileShader(t),e.shaderSource(n,r),e.compileShader(n),e.attachShader(l,t),e.attachShader(l,n),e.linkProgram(l),e.deleteShader(t),e.deleteShader(n),l)}function de(e,r){return!e.getProgramParameter(r,e.LINK_STATUS)&&!e.isContextLost()?(console.error("[hazeglow] program link failed:",e.getProgramInfoLog(r)),e.deleteProgram(r),null):{program:r,uniforms:nt(e,r)}}function te(e,r){let t=Ne(e,e.VERTEX_SHADER,je),n=Ne(e,e.FRAGMENT_SHADER,r);if(!t||!n)return t&&e.deleteShader(t),n&&e.deleteShader(n),null;let l=e.createProgram();return e.attachShader(l,t),e.attachShader(l,n),e.linkProgram(l),e.deleteShader(t),e.deleteShader(n),!e.getProgramParameter(l,e.LINK_STATUS)&&!e.isContextLost()?(console.error("[hazeglow] program link failed:",e.getProgramInfoLog(l)),e.deleteProgram(l),null):{program:l,uniforms:nt(e,l)}}function er(e){let r=te(e,tt());if(!r)return null;let t=te(e,rt());return t?lt(e,r,t):(e.deleteProgram(r.program),null)}function tr(e,r){if(!r)return er(e);let t=ee(e,tt()),n=ee(e,rt());return t&&n?{pending:!0,cell:t,composite:n}:(t&&e.deleteProgram(t),n&&e.deleteProgram(n),null)}function rr(e,r,t){let n=i=>e.getProgramParameter(i,t.COMPLETION_STATUS_KHR)!==!1;if(!n(r.cell)||!n(r.composite))return r;let l=de(e,r.cell),o=de(e,r.composite);return l&&o?lt(e,l,o):(l&&e.deleteProgram(l.program),o&&e.deleteProgram(o.program),null)}function lt(e,r,t){let n=e.createTexture(),l=e.createFramebuffer();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32UI,1,1,0,e.RGBA_INTEGER,e.UNSIGNED_INT,null),e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindFramebuffer(e.FRAMEBUFFER,null),o?{cell:r,composite:t,texture:n,framebuffer:l,limit:e.getParameter(e.MAX_TEXTURE_SIZE),width:1,height:1}:(e.deleteProgram(r.program),e.deleteProgram(t.program),e.deleteTexture(n),e.deleteFramebuffer(l),null)}function Ie(e,r){e.deleteProgram(r.cell.program),e.deleteProgram(r.composite.program),e.deleteTexture(r.texture),e.deleteFramebuffer(r.framebuffer)}function nr(e){let r=e.getParameter(e.RENDERER);if(typeof r=="string"&&r!==Qt)return r;let t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null;return typeof n=="string"?n:""}function lr(e){let r=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0});if(!r)return null;let t=r;if(Jt.test(nr(t)))return t.getExtension("WEBGL_lose_context")?.loseContext(),null;let n=t.getExtension("KHR_parallel_shader_compile"),l=null,o=null;if(n?o=ee(t,K()):l=te(t,K()),!l&&!o)return null;let i=()=>{},c=new Promise(m=>{i=m});l&&i(!0);let h=null,b=!1,f,S=0,g=null,F=new Float32Array(Q*3),s=new Float32Array(R*2),p=new Float32Array(R*3),_=$t("ownerDocument"in e?e:null,()=>{g&&$(g.config,g.time,g.pointer)});function A(){if(l)return!0;if(!o||!n||t.isContextLost()||t.getProgramParameter(o,n.COMPLETION_STATUS_KHR)===!1)return!1;let m=o;return o=null,l=de(t,m),i(l!==null),l!==null}function M(){if(h=null,!b){if(A()){g&&$(g.config,g.time,g.pointer);return}o&&(h=setTimeout(M,fe))}}function $(m,y,T=Yt){if(g={config:m,time:y,pointer:T},t.isContextLost()||!A())return;let u=l;if(!u)return;let N=m.palette.slice(0,Q);N.forEach((I,C)=>F.set(_.get(I),C*3));let w=m.mesh.slice(0,R);w.forEach(([I,C,ot],ie)=>{s[ie*2]=I,s[ie*2+1]=C,p.set(_.get(ot),ie*3)});let H=t.drawingBufferWidth,k=t.drawingBufferHeight,a=qt(m.effect,m.effectSize,H,k);a&&f===void 0&&(f=tr(t,n)),a&&f&&"pending"in f&&n&&(f=rr(t,f,n));let P=f&&!("pending"in f)?f:null,v=a&&P&&a.width<=P.limit&&a.height<=P.limit?P:null;if(a&&v&&(t.bindTexture(t.TEXTURE_2D,v.texture),a.width>v.width||a.height>v.height)){let I=Math.max(a.width,v.width),C=Math.max(a.height,v.height);t.texImage2D(t.TEXTURE_2D,0,t.RGBA32UI,I,C,0,t.RGBA_INTEGER,t.UNSIGNED_INT,null),t.getError()===t.NO_ERROR?(v.width=I,v.height=C):(Ie(t,v),f=null,v=null)}if(a&&v){t.bindFramebuffer(t.FRAMEBUFFER,v.framebuffer),oe(v.cell,a.width,a.height,m,y,T,N.length,w.length),t.bindFramebuffer(t.FRAMEBUFFER,null),oe(v.composite,H,k,m,y,T,N.length,w.length);return}oe(u,H,k,m,y,T,N.length,w.length)}function oe(m,y,T,u,N,w,H,k){let a=m.uniforms;t.viewport(0,0,y,T),t.useProgram(m.program),t.uniform2f(a.u_resolution,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform1f(a.u_time,N),t.uniform1f(a.u_loop,u.loop*u.speed);let P=Ot(u.seed);t.uniform2f(a.u_seed,P()*100,P()*100),t.uniform1ui(a.u_grainSeed,u.seed>>>0),t.uniform1i(a.u_shape,Ge.indexOf(u.shape)),t.uniform1i(a.u_motion,We.indexOf(u.motion)),t.uniform2f(a.u_center,u.center[0],u.center[1]),t.uniform2f(a.u_size,u.size[0],u.size[1]),t.uniform1f(a.u_roundness,u.roundness),t.uniform1f(a.u_softness,u.softness),t.uniform1f(a.u_rotation,u.rotation*Math.PI/180),t.uniform1f(a.u_rampDirection,u.rampDirection),t.uniform1f(a.u_angle,u.angle*Math.PI/180),t.uniform1f(a.u_warp,u.warp),t.uniform1f(a.u_warpScale,u.warpScale),t.uniform1f(a.u_grain,u.grain),t.uniform3fv(a.u_palette,F),t.uniform1i(a.u_paletteCount,Math.max(1,H)),t.uniform3fv(a.u_background,_.get(u.background)),t.uniform2fv(a.u_meshPoints,s),t.uniform3fv(a.u_meshColors,p),t.uniform1i(a.u_meshCount,k),t.uniform1i(a.u_effect,Xe.indexOf(u.effect)),t.uniform1f(a.u_effectSize,u.effectSize),t.uniform1f(a.u_effectAmount,u.effectAmount),t.uniform2f(a.u_pointer,w.x,w.y);let v=u.hoverMode==="push"?-1:1;t.uniform1f(a.u_pointerForce,w.force*u.hover*v),t.drawArrays(t.TRIANGLES,0,3)}function Se(m){S+=1,S<=Zt&&m.preventDefault(),l=null,o=null,f=void 0}function Te(){if(n){o=ee(t,K()),o&&h===null&&(h=setTimeout(M,fe));return}l=te(t,K()),l&&g&&$(g.config,g.time,g.pointer)}return e.addEventListener("webglcontextlost",Se),e.addEventListener("webglcontextrestored",Te),o&&(h=setTimeout(M,fe)),{maxSize:Math.min(t.getParameter(t.MAX_RENDERBUFFER_SIZE),...t.getParameter(t.MAX_VIEWPORT_DIMS)),ready:c,render:$,resize(m,y){let T=Math.max(1,Math.round(m)),u=Math.max(1,Math.round(y));e.width!==T&&(e.width=T),e.height!==u&&(e.height=u)},dispose(){b=!0,h!==null&&clearTimeout(h),h=null,o&&t.deleteProgram(o),o=null,i(!1),_.dispose(),e.removeEventListener("webglcontextlost",Se),e.removeEventListener("webglcontextrestored",Te),l&&t.deleteProgram(l.program),f&&"pending"in f?(t.deleteProgram(f.cell),t.deleteProgram(f.composite)):f&&Ie(t,f),l=null,f=void 0}}}const or=zt({seed:3054373361,shape:"mesh",center:[.5,.489],size:[1,.505],roundness:.566,softness:.7,rotation:0,rampDirection:.988,angle:274,warp:.2,warpScale:1,palette:["#090b0e","#000001","#111416","#22262b","#815932","#c0c8d2","#af9177","#383c3f","#1e2428","#121820"],background:"#120a08",mesh:[[.031,.025,"#090b0e"],[.582,.244,"#000001"],[.969,.275,"#111416"],[.597,.321,"#605d5a"],[.338,.437,"#22262b"],[.094,.475,"#815932"],[.531,.575,"#c0c8d2"],[.906,.625,"#af9177"],[.969,.625,"#2a6895"],[.469,.825,"#383c3f"],[.969,.875,"#1e2428"],[.219,.975,"#121820"]],grain:.26,motion:"drift",speed:1,loop:0,hover:0,hoverMode:"pull",effect:"none",effectSize:8,effectAmount:.5});function ir(e,r,t={}){const n=lr(e);if(!n)return Promise.resolve(!1);const l=t.still||matchMedia("(prefers-reduced-motion: reduce)").matches,o=()=>Math.min(devicePixelRatio||1,matchMedia("(max-width: 720px)").matches?.75:1);let i=!1,c=0,h=0,b=0;const f=()=>n.render(or,h),S=()=>{const p=o(),_=n.maxSize;n.resize(Math.min(Math.round(e.clientWidth*p),_),Math.min(Math.round(e.clientHeight*p),_)),f()},g=p=>{h+=Math.min((p-b)/1e3,.1),b=p,f(),c=requestAnimationFrame(g)},F=()=>{c||l||!i||document.hidden||(b=performance.now(),c=requestAnimationFrame(g))},s=()=>{cancelAnimationFrame(c),c=0};return n.ready.then(p=>p?(S(),new ResizeObserver(S).observe(e),new IntersectionObserver(([_])=>{i=_.isIntersecting,i?F():s()}).observe(r),document.addEventListener("visibilitychange",()=>document.hidden?s():F()),!0):!1)}export{ir as mountHaze};
