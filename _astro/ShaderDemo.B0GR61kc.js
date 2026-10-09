import{j as b}from"./jsx-runtime.u17CrQMm.js";import{r as s}from"./index.B02hbnpo.js";import{u as M}from"./hooks.BLJZtaKm.js";const S="attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }",T=`
precision highp float;
uniform vec2 r;
uniform float t;
uniform vec2 m;

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

float map(vec3 p) {
  float d = length(p - vec3(m, 0.0)) - 0.5;
  for (int i = 0; i < 4; i++) {
    float f = float(i);
    vec3 c = vec3(sin(t * 0.7 + f * 1.7) * 1.2, cos(t * 0.5 + f * 2.3) * 0.7, sin(t * 0.6 + f) * 0.5);
    d = smin(d, length(p - c) - 0.42, 0.6);
  }
  return d;
}

vec3 normal(vec3 p) {
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * r) / r.y;
  vec3 ro = vec3(0.0, 0.0, -3.2);
  vec3 rd = normalize(vec3(uv, 1.6));
  float dist = 0.0;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    float d = map(ro + rd * dist);
    if (d < 0.002) { hit = true; break; }
    dist += d;
    if (dist > 8.0) break;
  }
  vec3 col = vec3(0.078, 0.075, 0.059) + 0.05 * (uv.y + 0.5);
  if (hit) {
    vec3 p = ro + rd * dist;
    vec3 n = normal(p);
    vec3 l = normalize(vec3(0.6, 0.8, -0.5));
    float dif = max(dot(n, l), 0.0);
    float fre = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
    float spec = pow(max(dot(reflect(-l, n), -rd), 0.0), 32.0);
    col = vec3(0.83, 0.25, 0.10) * (0.15 + 0.85 * dif) + fre * vec3(1.0, 0.7, 0.5) + spec * 0.5;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;function B(){const f=s.useRef(null),l=s.useRef(null),{started:m,visibleRef:v}=M(f);return s.useEffect(()=>{const t=l.current;if(!m||!t)return;const e=t.getContext("webgl");if(!e)return;const d=(o,r)=>{const c=e.createShader(o);return e.shaderSource(c,r),e.compileShader(c),c},i=e.createProgram();e.attachShader(i,d(e.VERTEX_SHADER,S)),e.attachShader(i,d(e.FRAGMENT_SHADER,T)),e.linkProgram(i),e.useProgram(i);const p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const h=e.getAttribLocation(i,"p");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const E=e.getUniformLocation(i,"r"),w=e.getUniformLocation(i,"t"),F=e.getUniformLocation(i,"m"),n={x:0,y:0,active:!1},u=o=>{const r=t.getBoundingClientRect();n.x=(o.clientX-r.left-r.width/2)/r.height*2,n.y=-(o.clientY-r.top-r.height/2)/r.height*2,n.active=!0},g=()=>{n.active=!1};t.addEventListener("pointermove",u),t.addEventListener("pointerleave",g);const x=()=>{const o=Math.min(window.devicePixelRatio||1,1.5);t.width=Math.max(1,Math.floor(t.clientWidth*o)),t.height=Math.max(1,Math.floor(t.clientHeight*o)),e.viewport(0,0,t.width,t.height)};x();const y=new ResizeObserver(x);y.observe(t);let R=0,a={x:0,y:0};const L=performance.now(),A=()=>{if(R=requestAnimationFrame(A),!v.current)return;const o=(performance.now()-L)/1e3,r=n.active?n.x:Math.sin(o*.9)*.9,c=n.active?n.y:Math.cos(o*.7)*.5;a={x:a.x+(r-a.x)*.12,y:a.y+(c-a.y)*.12},e.uniform2f(E,t.width,t.height),e.uniform1f(w,o),e.uniform2f(F,a.x,a.y),e.drawArrays(e.TRIANGLES,0,3)};return A(),()=>{cancelAnimationFrame(R),y.disconnect(),t.removeEventListener("pointermove",u),t.removeEventListener("pointerleave",g),e.deleteProgram(i),e.deleteBuffer(p)}},[m,v]),b.jsx("div",{className:"demo",ref:f,children:b.jsx("canvas",{ref:l,style:{touchAction:"pan-y"}})})}export{B as default};
