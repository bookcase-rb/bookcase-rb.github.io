import{y as $,v as g,E,H as C,_ as p,G as R,Z as j,d as k,K as D,J as L,a0 as O,r as S,aD as H,$ as P,L as x,M as T,bg as K,aa as W,a1 as M,a3 as X,aR as G,c as y,e as A,h as B}from"./index-B6wo-CfO.js";function J(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const Z={name:"Rate",common:$,self:J},q=()=>g("svg",{viewBox:"0 0 512 512"},g("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),Q=E("rate",{display:"inline-flex",flexWrap:"nowrap"},[C("&:hover",[p("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[C("&:not(:first-child)",`
 margin-left: 6px;
 `),R("active",`
 color: var(--n-item-color-active);
 `)]),j("readonly",`
 cursor: pointer;
 `,[p("item",[C("&:hover",`
 transform: scale(1.05);
 `),C("&:active",`
 transform: scale(0.96);
 `)])]),p("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[R("active",`
 color: var(--n-item-color-active);
 `)])]),Y=Object.assign(Object.assign({},L.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ae=k({name:"Rate",props:Y,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=D(e),o=L("Rate","-rate",Q,Z,e,t),a=O(e,"value"),u=S(e.defaultValue),c=S(null),l=H(e),f=P(a,u);function d(n){const{"onUpdate:value":r,onUpdateValue:i}=e,{nTriggerFormChange:b,nTriggerFormInput:h}=l;r&&M(r,n),i&&M(i,n),u.value=n,b(),h()}function m(n,r){return e.allowHalf?r.offsetX>=Math.floor(r.currentTarget.offsetWidth/2)?n+1:n+.5:n+1}let w=!1;function I(n,r){w||(c.value=m(n,r))}function N(){c.value=null}function _(n,r){var i;const{clearable:b}=e,h=m(n,r);b&&h===f.value?(w=!0,(i=e.onClear)===null||i===void 0||i.call(e),c.value=null,d(null)):d(h)}function U(){w=!1}const F=x(()=>{const{size:n}=e,{self:r}=o.value;return typeof n=="number"?`${n}px`:r[X("size",n)]}),z=x(()=>{const{common:{cubicBezierEaseInOut:n},self:r}=o.value,{itemColor:i,itemColorActive:b}=r,{color:h}=e;return{"--n-bezier":n,"--n-item-color":i,"--n-item-color-active":h||b,"--n-item-size":F.value}}),v=s?T("rate",x(()=>{const n=F.value,{color:r}=e;let i="";return n&&(i+=n[0]),r&&(i+=G(r)),i}),z,e):void 0;return{mergedClsPrefix:t,mergedValue:f,hoverIndex:c,handleMouseMove:I,handleClick:_,handleMouseLeave:N,handleMouseEnterSomeStar:U,cssVars:s?void 0:z,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{readonly:e,hoverIndex:t,mergedValue:s,mergedClsPrefix:o,onRender:a,$slots:{default:u}}=this;return a==null||a(),g("div",{class:[`${o}-rate`,{[`${o}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},K(this.count,(c,l)=>{const f=u?u({index:l}):g(W,{clsPrefix:o},{default:q}),d=t!==null?l+1<=t:l+1<=(s||0);return g("div",{key:l,class:[`${o}-rate__item`,d&&`${o}-rate__item--active`],onClick:e?void 0:m=>{this.handleClick(l,m)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:m=>{this.handleMouseMove(l,m)}},f,this.allowHalf?g("div",{class:[`${o}-rate__half`,{[`${o}-rate__half--active`]:!d&&t!==null?l+.5<=t:l+.5<=(s||0)}]},f):null)}))}}),ee=e=>{const t=e.replace(/^#/,""),s=parseInt(t,16),o=s>>16&255,a=s>>8&255,u=s>>0&255;return(.299*o+.587*a+.114*u)/255};function te(e,t,s,o="#FFFFFF"){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("width",e.toString()),a.setAttribute("height",t.toString()),a.style.backgroundColor=o;const u=ee(o)>.5?"#000000":"#ffffff",c=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");c.setAttribute("width","100%"),c.setAttribute("height","100%");const l=document.createElementNS("http://www.w3.org/1999/xhtml","div");l.style.cssText=`
    width: 100%;
    height: 100%;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: Arial;
    font-size: 14px;
    color: ${u};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
  `,l.textContent=s,c.appendChild(l),a.appendChild(c);const f=new XMLSerializer().serializeToString(a),d=new Blob([f],{type:"image/svg+xml"});return URL.createObjectURL(d)}function re(e,t,s,o){return e!=null&&e.length?e.map(a=>y("span",{class:A(s)},[a])):y("span",{class:A(o)},[t])}function se(){return[()=>y("div",{style:{textAlign:"center"}},[B("pages.book.utils.askForBookInfo")]),{showIcon:!1,closable:!0,duration:5e3}]}const V=["#A76545","#FFA55D","#FFDF88","#ACC572","#BF9264","#6F826A","#BBD8A3","#F0F1C5"];function ne(e=0){const t=e%V.length;return V[t]}function le(e,t){if(e)return URL.createObjectURL(e);{const s=ne(t==null?void 0:t.length);return te(200,300,t||B("pages.book.utils.defaultCoverTitle"),s)}}export{ae as N,le as g,re as l,se as s};
//# sourceMappingURL=utils-BrL0SMRm.js.map
