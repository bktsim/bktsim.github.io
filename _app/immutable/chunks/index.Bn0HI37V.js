var Y=Object.defineProperty;var Z=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>Z(t,typeof e!="symbol"?e+"":e,n);import{n as x,r as v,j as D,h as b,i as z,k as O,l as tt,m as et,p as nt,q as it,v as q,w as rt,x as st,y as lt}from"./scheduler.aZkp7-Oh.js";const I=typeof window<"u";let M=I?()=>window.performance.now():()=>Date.now(),B=I?t=>requestAnimationFrame(t):x;const g=new Set;function F(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(F)}function L(t){let e;return g.size===0&&B(F),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let j=!1;function at(){j=!0}function ot(){j=!1}function ct(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(i>0&&e[n[i]].claim_order<=a?i+1:ct(1,i,_=>e[n[_]].claim_order,a))-1;r[l]=n[u]+1;const f=u+1;n[f]=l,i=Math.max(f,i)}const o=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<o.length&&s[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(s[l],u)}}function ut(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=W("style");return e.textContent="/* empty */",dt(U(t),e),e.sheet}function dt(t,e){return ut(t.head||t,e),e.sheet}function mt(t,e){if(j){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){j&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function Rt(){return P(" ")}function Tt(){return P("")}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,r,i=!1){$t(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function J(t,e,n,r){return G(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ht(t,e,n){return J(t,e,n,W)}function Ot(t,e,n){return J(t,e,n,ht)}function yt(t,e){return G(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>P(e),!0)}function qt(t){return yt(t," ")}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Mt(t,e,n){t.classList.toggle(e,!!n)}function gt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ft(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Lt(t,e){return new t(e)}const A=new Map;let S=0;function xt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function wt(t,e){const n={stylesheet:_t(e),rules:{}};return A.set(t,n),n}function K(t,e,n,r,i,o,s,c=0){const l=16.666/r;let a=`{
`;for(let $=0;$<=1;$+=l){const p=e+(n-e)*o($);a+=$*100+`%{${s(p,1-p)}}
`}const u=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${xt(u)}_${c}`,_=U(t),{stylesheet:d,rules:m}=A.get(_)||wt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${i}ms 1 both`,S+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),S-=i,S||vt())}function vt(){B(()=>{S||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),A.clear())})}let w;function Q(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function C(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function Ut(){y={r:0,c:[],p:y}}function Vt(){y.r||v(y.c),y=y.p}function Nt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const X={duration:0};function Gt(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,c,l=0;function a(){s&&T(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=z,tick:h=x,css:$}=i||X;$&&(s=K(t,0,1,d,_,m,$,l++)),h(0,1);const p=M()+_,N=p+d;c&&c.abort(),o=!0,b(()=>C(t,!0,"start")),c=L(k=>{if(o){if(k>=N)return h(1,0),C(t,!0,"end"),a(),o=!1;if(k>=p){const H=m((k-p)/d);h(H,1-H)}}return o})}let f=!1;return{start(){f||(f=!0,T(t),D(i)?(i=i(r),Q().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function Jt(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const c=y;c.r+=1;let l;function a(){const{delay:u=0,duration:f=300,easing:_=z,tick:d=x,css:m}=i||X;m&&(s=K(t,1,0,f,u,_,m));const h=M()+u,$=h+f;b(()=>C(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),L(p=>{if(o){if(p>=$)return d(0,1),C(t,!1,"end"),--c.r||v(c.c),!1;if(p>=h){const N=_((p-h)/f);d(1-N,N)}}return o})}return D(i)?Q().then(()=>{i=i(r),a()}):a(),{end(u){u&&"inert"in t&&(t.inert=l),u&&i.tick&&i.tick(1,0),o&&(s&&T(t,s),o=!1)}}}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),b(()=>{const o=t.$$.on_mount.map(rt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),i.forEach(b)}function bt(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(st.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,r,i,o,s=null,c=[-1]){const l=it;q(t);const a=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:O(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return a.ctx&&i(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&At(t,f)),_}):[],a.update(),u=!0,v(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){at();const f=pt(e.target);a.fragment&&a.fragment.l(f),f.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&Nt(t.$$.fragment),Et(t,e.target,e.anchor),ot(),tt()}q(l)}class Yt{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);export{Ut as A,Lt as B,Ft as C,Mt as D,Gt as E,Jt as F,Yt as S,Qt as a,qt as b,Kt as c,Ht as d,W as e,Bt as f,Pt as g,jt as h,Xt as i,Wt as j,V as k,bt as l,Et as m,P as n,pt as o,yt as p,mt as q,zt as r,Rt as s,Nt as t,kt as u,Tt as v,ht as w,Ot as x,Vt as y,It as z};
