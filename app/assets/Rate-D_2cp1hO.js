import{k as $,E as u,n as w,x as b,p as z,q as S,V as B,d as T,y as A,z as x,a2 as U,r as p,a1 as k,a3 as E,C as M,D as H,bs as P,T as D,b1 as O,K as j,a7 as _}from"./index-B3qSu1dX.js";function K(e){const{railColor:r}=e;return{itemColor:r,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const W={name:"Rate",common:$,self:K},q=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),X=w("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[z("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[b("&:not(:first-child)",`
 margin-left: 6px;
 `),S("active",`
 color: var(--n-item-color-active);
 `)]),B("readonly",`
 cursor: pointer;
 `,[z("item",[b("&:hover",`
 transform: scale(1.05);
 `),b("&:active",`
 transform: scale(0.96);
 `)])]),z("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[S("active",`
 color: var(--n-item-color-active);
 `)])]),G=Object.assign(Object.assign({},x.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Q=T({name:"Rate",props:G,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:d}=A(e),n=x("Rate","-rate",X,W,e,r),f=U(e,"value"),m=p(e.defaultValue),v=p(null),l=k(e),h=E(f,m);function C(t){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormChange:g,nTriggerFormInput:c}=l;a&&_(a,t),o&&_(o,t),m.value=t,g(),c()}function s(t,a){return e.allowHalf?a.offsetX>=Math.floor(a.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let y=!1;function I(t,a){y||(v.value=s(t,a))}function F(){v.value=null}function L(t,a){var o;const{clearable:g}=e,c=s(t,a);g&&c===h.value?(y=!0,(o=e.onClear)===null||o===void 0||o.call(e),v.value=null,C(null)):C(c)}function N(){y=!1}const V=M(()=>{const{size:t}=e,{self:a}=n.value;return typeof t=="number"?`${t}px`:a[D("size",t)]}),R=M(()=>{const{common:{cubicBezierEaseInOut:t},self:a}=n.value,{itemColor:o,itemColorActive:g}=a,{color:c}=e;return{"--n-bezier":t,"--n-item-color":o,"--n-item-color-active":c||g,"--n-item-size":V.value}}),i=d?H("rate",M(()=>{const t=V.value,{color:a}=e;let o="";return t&&(o+=t[0]),a&&(o+=O(a)),o}),R,e):void 0;return{mergedClsPrefix:r,mergedValue:h,hoverIndex:v,handleMouseMove:I,handleClick:L,handleMouseLeave:F,handleMouseEnterSomeStar:N,cssVars:d?void 0:R,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:r,mergedValue:d,mergedClsPrefix:n,onRender:f,$slots:{default:m}}=this;return f==null||f(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},P(this.count,(v,l)=>{const h=m?m({index:l}):u(j,{clsPrefix:n},{default:q}),C=r!==null?l+1<=r:l+1<=(d||0);return u("div",{key:l,class:[`${n}-rate__item`,C&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(l,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(l,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!C&&r!==null?l+.5<=r:l+.5<=(d||0)}]},h):null)}))}});export{Q as N};
//# sourceMappingURL=Rate-D_2cp1hO.js.map
