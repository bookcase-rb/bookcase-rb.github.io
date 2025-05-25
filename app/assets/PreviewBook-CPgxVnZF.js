import{k as Me,l as G,m as J,n as m,p as O,q as T,v as Mo,x as ae,d as F,y as Ze,z as re,A as Oo,C as D,D as ze,r as I,E as y,G as eo,H as Eo,J as oo,K as Fo,L as jo,W as Ao,M as Ho,O as Lo,P as Vo,Q as No,R as Wo,T as V,U as Uo,V as qo,X as Ko,Y as Yo,Z as Ne,_ as Xo,$ as Go,a0 as Jo,a1 as Qo,a2 as Zo,a3 as et,w as Y,a4 as ot,a5 as tt,a6 as Oe,a7 as me,a8 as pe,a9 as ke,aa as ce,ab as nt,t as Ce,u as we,c as o,g as K,B as Q,F as to,i as no,S as W,ac as se,e as S,I as We,ad as ao,ae as at,f as le,s as lt,o as rt,a as it}from"./index-B3qSu1dX.js";import{u as lo}from"./useTRouter-D4zg8088.js";import{c as st,s as ct,u as dt}from"./utils-DNMM86Az.js";import{u as Pe,B as ut,V as ft,a as vt}from"./Popover-Dpij0fg9.js";import{t as ht,N as bt,a as gt,b as mt}from"./Image-b7Kh8lJS.js";import{N as pt}from"./Rate-D_2cp1hO.js";import{B as $e,a as kt}from"./BasicTopBar-pM3hxXIp.js";import{D as xt,a as Ct}from"./DeckerLayout-BGm3u6Rp.js";import{B as wt}from"./BookcasePreview-CI3Qpvrl.js";import{h as Ue,c as yt,K as xe,b as St,r as It}from"./utils-7_mGPhvC.js";import{N as _t}from"./Dropdown-Cac7YboL.js";import"./get-DrtZLwal.js";import"./create-D3Vn69pI.js";const Rt={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function Bt(e){const{lineHeight:n,borderRadius:c,fontWeightStrong:l,baseColor:r,dividerColor:v,actionColor:b,textColor1:s,textColor2:a,closeColorHover:f,closeColorPressed:x,closeIconColor:w,closeIconColorHover:p,closeIconColorPressed:g,infoColor:d,successColor:R,warningColor:h,errorColor:k,fontSize:B}=e;return Object.assign(Object.assign({},Rt),{fontSize:B,lineHeight:n,titleFontWeight:l,borderRadius:c,border:`1px solid ${v}`,color:b,titleTextColor:s,iconColor:a,contentTextColor:a,closeBorderRadius:c,closeColorHover:f,closeColorPressed:x,closeIconColor:w,closeIconColorHover:p,closeIconColorPressed:g,borderInfo:`1px solid ${G(r,J(d,{alpha:.25}))}`,colorInfo:G(r,J(d,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:d,contentTextColorInfo:a,closeColorHoverInfo:f,closeColorPressedInfo:x,closeIconColorInfo:w,closeIconColorHoverInfo:p,closeIconColorPressedInfo:g,borderSuccess:`1px solid ${G(r,J(R,{alpha:.25}))}`,colorSuccess:G(r,J(R,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:R,contentTextColorSuccess:a,closeColorHoverSuccess:f,closeColorPressedSuccess:x,closeIconColorSuccess:w,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:g,borderWarning:`1px solid ${G(r,J(h,{alpha:.33}))}`,colorWarning:G(r,J(h,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:h,contentTextColorWarning:a,closeColorHoverWarning:f,closeColorPressedWarning:x,closeIconColorWarning:w,closeIconColorHoverWarning:p,closeIconColorPressedWarning:g,borderError:`1px solid ${G(r,J(k,{alpha:.25}))}`,colorError:G(r,J(k,{alpha:.08})),titleTextColorError:s,iconColorError:k,contentTextColorError:a,closeColorHoverError:f,closeColorPressedError:x,closeIconColorError:w,closeIconColorHoverError:p,closeIconColorPressedError:g})}const Tt={name:"Alert",common:Me,self:Bt},Dt=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[O("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),T("closable",[m("alert-body",[O("title",`
 padding-right: 24px;
 `)])]),O("icon",{color:"var(--n-icon-color)"}),m("alert-body",{padding:"var(--n-padding)"},[O("title",{color:"var(--n-title-text-color)"}),O("content",{color:"var(--n-content-text-color)"})]),Mo({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),O("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),O("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),T("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("right-adjust",[m("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[O("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[ae("& +",[O("content",{marginTop:"9px"})])]),O("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),O("icon",{transition:"color .3s var(--n-bezier)"})]),zt=Object.assign(Object.assign({},re.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ro=F({name:"Alert",inheritAttrs:!1,props:zt,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:c,inlineThemeDisabled:l,mergedRtlRef:r}=Ze(e),v=re("Alert","-alert",Dt,Tt,e,n),b=Oo("Alert",r,n),s=D(()=>{const{common:{cubicBezierEaseInOut:g},self:d}=v.value,{fontSize:R,borderRadius:h,titleFontWeight:k,lineHeight:B,iconSize:j,iconMargin:H,iconMarginRtl:$,closeIconSize:ee,closeBorderRadius:U,closeSize:q,closeMargin:oe,closeMarginRtl:ie,padding:ye}=d,{type:A}=e,{left:Se,right:de}=Wo(H);return{"--n-bezier":g,"--n-color":d[V("color",A)],"--n-close-icon-size":ee,"--n-close-border-radius":U,"--n-close-color-hover":d[V("closeColorHover",A)],"--n-close-color-pressed":d[V("closeColorPressed",A)],"--n-close-icon-color":d[V("closeIconColor",A)],"--n-close-icon-color-hover":d[V("closeIconColorHover",A)],"--n-close-icon-color-pressed":d[V("closeIconColorPressed",A)],"--n-icon-color":d[V("iconColor",A)],"--n-border":d[V("border",A)],"--n-title-text-color":d[V("titleTextColor",A)],"--n-content-text-color":d[V("contentTextColor",A)],"--n-line-height":B,"--n-border-radius":h,"--n-font-size":R,"--n-title-font-weight":k,"--n-icon-size":j,"--n-icon-margin":H,"--n-icon-margin-rtl":$,"--n-close-size":q,"--n-close-margin":oe,"--n-close-margin-rtl":ie,"--n-padding":ye,"--n-icon-margin-left":Se,"--n-icon-margin-right":de}}),a=l?ze("alert",D(()=>e.type[0]),s,e):void 0,f=I(!0),x=()=>{const{onAfterLeave:g,onAfterHide:d}=e;g&&g(),d&&d()};return{rtlEnabled:b,mergedClsPrefix:n,mergedBordered:c,visible:f,handleCloseClick:()=>{var g;Promise.resolve((g=e.onClose)===null||g===void 0?void 0:g.call(e)).then(d=>{d!==!1&&(f.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:v,cssVars:l?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y(No,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:n,$slots:c}=this,l={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,!this.title&&this.closable&&`${n}-alert--right-adjust`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?y("div",Object.assign({},eo(this.$attrs,l)),this.closable&&y(Eo,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&y("div",{class:`${n}-alert__border`}),this.showIcon&&y("div",{class:`${n}-alert__icon`,"aria-hidden":"true"},oo(c.icon,()=>[y(Fo,{clsPrefix:n},{default:()=>{switch(this.type){case"success":return y(Lo,null);case"info":return y(Ho,null);case"warning":return y(Ao,null);case"error":return y(jo,null);default:return null}}})])),y("div",{class:[`${n}-alert-body`,this.mergedBordered&&`${n}-alert-body--bordered`]},Vo(c.header,r=>{const v=r||this.title;return v?y("div",{class:`${n}-alert-body__title`},v):null}),c.default&&y("div",{class:`${n}-alert-body__content`},c))):null}})}}),Pt=Uo({name:"Ellipsis",common:Me,peers:{Tooltip:ht}}),$t=m("ellipsis",{overflow:"hidden"},[qo("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),T("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),T("cursor-pointer",`
 cursor: pointer;
 `)]);function qe(e){return`${e}-ellipsis--line-clamp`}function Ke(e,n){return`${e}-ellipsis--cursor-${n}`}const Mt=Object.assign(Object.assign({},re.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Ot=F({name:"Ellipsis",inheritAttrs:!1,props:Mt,slots:Object,setup(e,{slots:n,attrs:c}){const l=Ko(),r=re("Ellipsis","-ellipsis",$t,Pt,e,l),v=I(null),b=I(null),s=I(null),a=I(!1),f=D(()=>{const{lineClamp:h}=e,{value:k}=a;return h!==void 0?{textOverflow:"","-webkit-line-clamp":k?"":h}:{textOverflow:k?"":"ellipsis","-webkit-line-clamp":""}});function x(){let h=!1;const{value:k}=a;if(k)return!0;const{value:B}=v;if(B){const{lineClamp:j}=e;if(g(B),j!==void 0)h=B.scrollHeight<=B.offsetHeight;else{const{value:H}=b;H&&(h=H.getBoundingClientRect().width<=B.getBoundingClientRect().width)}d(B,h)}return h}const w=D(()=>e.expandTrigger==="click"?()=>{var h;const{value:k}=a;k&&((h=s.value)===null||h===void 0||h.setShow(!1)),a.value=!k}:void 0);Yo(()=>{var h;e.tooltip&&((h=s.value)===null||h===void 0||h.setShow(!1))});const p=()=>y("span",Object.assign({},eo(c,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?qe(l.value):void 0,e.expandTrigger==="click"?Ke(l.value,"pointer"):void 0],style:f.value}),{ref:"triggerRef",onClick:w.value,onMouseenter:e.expandTrigger==="click"?x:void 0}),e.lineClamp?n:y("span",{ref:"triggerInnerRef"},n));function g(h){if(!h)return;const k=f.value,B=qe(l.value);e.lineClamp!==void 0?R(h,B,"add"):R(h,B,"remove");for(const j in k)h.style[j]!==k[j]&&(h.style[j]=k[j])}function d(h,k){const B=Ke(l.value,"pointer");e.expandTrigger==="click"&&!k?R(h,B,"add"):R(h,B,"remove")}function R(h,k,B){B==="add"?h.classList.contains(k)||h.classList.add(k):h.classList.contains(k)&&h.classList.remove(k)}return{mergedTheme:r,triggerRef:v,triggerInnerRef:b,tooltipRef:s,handleClick:w,renderTrigger:p,getTooltipDisabled:x}},render(){var e;const{tooltip:n,renderTrigger:c,$slots:l}=this;if(n){const{mergedTheme:r}=this;return y(bt,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:c,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return c()}}),Et={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function Ft(e){const n="rgba(0, 0, 0, .85)",c="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:l,primaryColor:r,baseColor:v,cardColor:b,modalColor:s,popoverColor:a,borderRadius:f,fontSize:x,opacityDisabled:w}=e;return Object.assign(Object.assign({},Et),{fontSize:x,markFontSize:x,railColor:l,railColorHover:l,fillColor:r,fillColorHover:r,opacityDisabled:w,handleColor:"#FFF",dotColor:b,dotColorModal:s,dotColorPopover:a,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:c,indicatorTextColor:v,indicatorBorderRadius:f,dotBorder:`2px solid ${l}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}const jt={name:"Slider",common:Me,self:Ft},At=ae([m("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[T("reverse",[m("slider-handles",[m("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),m("slider-dots",[m("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),T("vertical",[m("slider-handles",[m("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),m("slider-marks",[m("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),m("slider-dots",[m("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),T("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[m("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[m("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),m("slider-rail",`
 height: 100%;
 `,[O("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),T("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),m("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[m("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),m("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[m("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),T("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[m("slider-handle",`
 cursor: not-allowed;
 `)]),T("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),ae("&:hover",[m("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[O("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),m("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),T("active",[m("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[O("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),m("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),m("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[m("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),m("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[O("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),m("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[m("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[m("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),ae("&:focus",[m("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),m("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[T("transition-disabled",[m("slider-dot","transition: none;")]),m("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[T("active","border: var(--n-dot-border-active);")])])]),m("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ne()]),m("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[T("top",`
 margin-bottom: 12px;
 `),T("right",`
 margin-left: 12px;
 `),T("bottom",`
 margin-top: 12px;
 `),T("left",`
 margin-right: 12px;
 `),Ne()]),Xo(m("slider",[m("slider-dot","background-color: var(--n-dot-color-modal);")])),Go(m("slider",[m("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function Ye(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Xe(){const e=new Map,n=c=>l=>{e.set(c,l)};return Jo(()=>{e.clear()}),[e,n]}const Ht=0,Lt=Object.assign(Object.assign({},re.props),{to:Pe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Vt=F({name:"Slider",props:Lt,slots:Object,setup(e){const{mergedClsPrefixRef:n,namespaceRef:c,inlineThemeDisabled:l}=Ze(e),r=re("Slider","-slider",At,jt,e,n),v=I(null),[b,s]=Xe(),[a,f]=Xe(),x=I(new Set),w=Qo(e),{mergedDisabledRef:p}=w,g=D(()=>{const{step:t}=e;if(Number(t)<=0||t==="mark")return 0;const i=t.toString();let u=0;return i.includes(".")&&(u=i.length-i.indexOf(".")-1),u}),d=I(e.defaultValue),R=Zo(e,"value"),h=et(R,d),k=D(()=>{const{value:t}=h;return(e.range?t:[t]).map(Ae)}),B=D(()=>k.value.length>2),j=D(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),H=D(()=>{const{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),$=I(-1),ee=I(-1),U=I(-1),q=I(!1),oe=I(!1),ie=D(()=>{const{vertical:t,reverse:i}=e;return t?i?"top":"bottom":i?"right":"left"}),ye=D(()=>{if(B.value)return;const t=k.value,i=ue(e.range?Math.min(...t):e.min),u=ue(e.range?Math.max(...t):t[0]),{value:C}=ie;return e.vertical?{[C]:`${i}%`,height:`${u-i}%`}:{[C]:`${i}%`,width:`${u-i}%`}}),A=D(()=>{const t=[],{marks:i}=e;if(i){const u=k.value.slice();u.sort((M,P)=>M-P);const{value:C}=ie,{value:_}=B,{range:z}=e,L=_?()=>!1:M=>z?M>=u[0]&&M<=u[u.length-1]:M<=u[0];for(const M of Object.keys(i)){const P=Number(M);t.push({active:L(P),key:P,label:i[M],style:{[C]:`${ue(P)}%`}})}}return t});function Se(t,i){const u=ue(t),{value:C}=ie;return{[C]:`${u}%`,zIndex:i===$.value?1:0}}function de(t){return e.showTooltip||U.value===t||$.value===t&&q.value}function so(t){return q.value?!($.value===t&&ee.value===t):!0}function co(t){var i;~t&&($.value=t,(i=b.get(t))===null||i===void 0||i.focus())}function uo(){a.forEach((t,i)=>{de(i)&&t.syncPosition()})}function Fe(t){const{"onUpdate:value":i,onUpdateValue:u}=e,{nTriggerFormInput:C,nTriggerFormChange:_}=w;u&&me(u,t),i&&me(i,t),d.value=t,C(),_()}function je(t){const{range:i}=e;if(i){if(Array.isArray(t)){const{value:u}=k;t.join()!==u.join()&&Fe(t)}}else Array.isArray(t)||k.value[0]!==t&&Fe(t)}function Ie(t,i){if(e.range){const u=k.value.slice();u.splice(i,1,t),je(u)}else je(t)}function _e(t,i,u){const C=u!==void 0;u||(u=t-i>0?1:-1);const _=H.value||[],{step:z}=e;if(z==="mark"){const P=fe(t,_.concat(i),C?u:void 0);return P?P.value:i}if(z<=0)return i;const{value:L}=g;let M;if(C){const P=Number((i/z).toFixed(L)),X=Math.floor(P),Re=P>X?X:X-1,Be=P<X?X:X+1;M=fe(i,[Number((Re*z).toFixed(L)),Number((Be*z).toFixed(L)),..._],u)}else{const P=vo(t);M=fe(t,[..._,P])}return M?Ae(M.value):i}function Ae(t){return Math.min(e.max,Math.max(e.min,t))}function ue(t){const{max:i,min:u}=e;return(t-u)/(i-u)*100}function fo(t){const{max:i,min:u}=e;return u+(i-u)*t}function vo(t){const{step:i,min:u}=e;if(Number(i)<=0||i==="mark")return t;const C=Math.round((t-u)/i)*i+u;return Number(C.toFixed(g.value))}function fe(t,i=H.value,u){if(!(i!=null&&i.length))return null;let C=null,_=-1;for(;++_<i.length;){const z=i[_]-t,L=Math.abs(z);(u===void 0||z*u>0)&&(C===null||L<C.distance)&&(C={index:_,distance:L,value:i[_]})}return C}function He(t){const i=v.value;if(!i)return;const u=Ye(t)?t.touches[0]:t,C=i.getBoundingClientRect();let _;return e.vertical?_=(C.bottom-u.clientY)/C.height:_=(u.clientX-C.left)/C.width,e.reverse&&(_=1-_),fo(_)}function ho(t){if(p.value||!e.keyboard)return;const{vertical:i,reverse:u}=e;switch(t.key){case"ArrowUp":t.preventDefault(),ve(i&&u?-1:1);break;case"ArrowRight":t.preventDefault(),ve(!i&&u?-1:1);break;case"ArrowDown":t.preventDefault(),ve(i&&u?1:-1);break;case"ArrowLeft":t.preventDefault(),ve(!i&&u?1:-1);break}}function ve(t){const i=$.value;if(i===-1)return;const{step:u}=e,C=k.value[i],_=Number(u)<=0||u==="mark"?C:C+u*t;Ie(_e(_,C,t>0?1:-1),i)}function bo(t){var i,u;if(p.value||!Ye(t)&&t.button!==Ht)return;const C=He(t);if(C===void 0)return;const _=k.value.slice(),z=e.range?(u=(i=fe(C,_))===null||i===void 0?void 0:i.index)!==null&&u!==void 0?u:-1:0;z!==-1&&(t.preventDefault(),co(z),go(),Ie(_e(C,k.value[z]),z))}function go(){q.value||(q.value=!0,e.onDragstart&&me(e.onDragstart),pe("touchend",document,ge),pe("mouseup",document,ge),pe("touchmove",document,be),pe("mousemove",document,be))}function he(){q.value&&(q.value=!1,e.onDragend&&me(e.onDragend),ke("touchend",document,ge),ke("mouseup",document,ge),ke("touchmove",document,be),ke("mousemove",document,be))}function be(t){const{value:i}=$;if(!q.value||i===-1){he();return}const u=He(t);u!==void 0&&Ie(_e(u,k.value[i]),i)}function ge(){he()}function mo(t){$.value=t,p.value||(U.value=t)}function po(t){$.value===t&&($.value=-1,he()),U.value===t&&(U.value=-1)}function ko(t){U.value=t}function xo(t){U.value===t&&(U.value=-1)}Y($,(t,i)=>void ce(()=>ee.value=i)),Y(h,()=>{if(e.marks){if(oe.value)return;oe.value=!0,ce(()=>{oe.value=!1})}ce(uo)}),ot(()=>{he()});const Le=D(()=>{const{self:{markFontSize:t,railColor:i,railColorHover:u,fillColor:C,fillColorHover:_,handleColor:z,opacityDisabled:L,dotColor:M,dotColorModal:P,handleBoxShadow:X,handleBoxShadowHover:Re,handleBoxShadowActive:Be,handleBoxShadowFocus:Co,dotBorder:wo,dotBoxShadow:yo,railHeight:So,railWidthVertical:Io,handleSize:_o,dotHeight:Ro,dotWidth:Bo,dotBorderRadius:To,fontSize:Do,dotBorderActive:zo,dotColorPopover:Po},common:{cubicBezierEaseInOut:$o}}=r.value;return{"--n-bezier":$o,"--n-dot-border":wo,"--n-dot-border-active":zo,"--n-dot-border-radius":To,"--n-dot-box-shadow":yo,"--n-dot-color":M,"--n-dot-color-modal":P,"--n-dot-color-popover":Po,"--n-dot-height":Ro,"--n-dot-width":Bo,"--n-fill-color":C,"--n-fill-color-hover":_,"--n-font-size":Do,"--n-handle-box-shadow":X,"--n-handle-box-shadow-active":Be,"--n-handle-box-shadow-focus":Co,"--n-handle-box-shadow-hover":Re,"--n-handle-color":z,"--n-handle-size":_o,"--n-opacity-disabled":L,"--n-rail-color":i,"--n-rail-color-hover":u,"--n-rail-height":So,"--n-rail-width-vertical":Io,"--n-mark-font-size":t}}),te=l?ze("slider",void 0,Le,e):void 0,Ve=D(()=>{const{self:{fontSize:t,indicatorColor:i,indicatorBoxShadow:u,indicatorTextColor:C,indicatorBorderRadius:_}}=r.value;return{"--n-font-size":t,"--n-indicator-border-radius":_,"--n-indicator-box-shadow":u,"--n-indicator-color":i,"--n-indicator-text-color":C}}),ne=l?ze("slider-indicator",void 0,Ve,e):void 0;return{mergedClsPrefix:n,namespace:c,uncontrolledValue:d,mergedValue:h,mergedDisabled:p,mergedPlacement:j,isMounted:tt(),adjustedTo:Pe(e),dotTransitionDisabled:oe,markInfos:A,isShowTooltip:de,shouldKeepTooltipTransition:so,handleRailRef:v,setHandleRefs:s,setFollowerRefs:f,fillStyle:ye,getHandleStyle:Se,activeIndex:$,arrifiedValues:k,followerEnabledIndexSet:x,handleRailMouseDown:bo,handleHandleFocus:mo,handleHandleBlur:po,handleHandleMouseEnter:ko,handleHandleMouseLeave:xo,handleRailKeyDown:ho,indicatorCssVars:l?void 0:Ve,indicatorThemeClass:ne==null?void 0:ne.themeClass,indicatorOnRender:ne==null?void 0:ne.onRender,cssVars:l?void 0:Le,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender}},render(){var e;const{mergedClsPrefix:n,themeClass:c,formatTooltip:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{class:[`${n}-slider`,c,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:this.activeIndex!==-1,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},y("div",{class:`${n}-slider-rail`},y("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?y("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map(r=>y("div",{key:r.key,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:r.active}],style:r.style}))):null,y("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map((r,v)=>{const b=this.isShowTooltip(v);return y(ut,null,{default:()=>[y(ft,null,{default:()=>y("div",{ref:this.setHandleRefs(v),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":r,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(r,v),onFocus:()=>{this.handleHandleFocus(v)},onBlur:()=>{this.handleHandleBlur(v)},onMouseenter:()=>{this.handleHandleMouseEnter(v)},onMouseleave:()=>{this.handleHandleMouseLeave(v)}},oo(this.$slots.thumb,()=>[y("div",{class:`${n}-slider-handle`})]))}),this.tooltip&&y(vt,{ref:this.setFollowerRefs(v),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(v),teleportDisabled:this.adjustedTo===Pe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>y(Oe,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(v),onEnter:()=>{this.followerEnabledIndexSet.add(v)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(v)}},{default:()=>{var s;return b?((s=this.indicatorOnRender)===null||s===void 0||s.call(this),y("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof l=="function"?l(r):r)):null}})})]})})),this.marks?y("div",{class:`${n}-slider-marks`},this.markInfos.map(r=>y("div",{key:r.key,class:`${n}-slider-mark`,style:r.style},typeof r.label=="function"?r.label():r.label))):null))}}),Ee=nt("book",()=>{const e=I();function n(c){e.value=c}return{bookData:e,updateBookData:n}}),Te=F({name:"Text",props:{text:{type:[String,Number],default:""},placeholder:{type:String,default:"-"}},setup(e){const{text:n,placeholder:c}=Ce(e),l=()=>{const r=String(n.value);return r||c.value};return()=>l()}});function Nt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!no(e)}const Wt={onUpdateProgress:{type:Function,required:!1}},Ut=F({name:"ReadingMarker",props:Wt,setup(e){const{t:n}=we({useScope:"global"}),c=Ee(),l=I(0);Y(()=>{var a;return(a=c.bookData)==null?void 0:a.lastReadPage},a=>{l.value=a||0});const r=D(()=>{var a;return!!((a=c.bookData)!=null&&a.startReadDate)}),v=D(()=>{var a;return st(l.value,(a=c.bookData)==null?void 0:a.numberOfPages)});function b(){var a,f;(a=c.bookData)!=null&&a.id&&ct((f=c.bookData)==null?void 0:f.id).then(x=>{var w;x&&c.updateBookData(x),(w=e.onUpdateProgress)==null||w.call(e)})}function s(){var a,f;(a=c.bookData)!=null&&a.id&&dt((f=c.bookData)==null?void 0:f.id,l.value).then(x=>{var w;x&&c.updateBookData(x),(w=e.onUpdateProgress)==null||w.call(e)}).catch(x=>{console.error(x)})}return()=>{var f,x;let a;return o(to,null,[r.value?o("div",null,[o(Vt,{step:1,min:0,max:((f=c.bookData)==null?void 0:f.numberOfPages)||0,value:l.value,onUpdateValue:w=>{l.value=w},onDragend:s},null),o("div",null,[o("span",null,[n("pages.book.readingMarker.current",[l.value]),K(" ")]),o("span",null,[n("pages.book.readingMarker.total",[((x=c.bookData)==null?void 0:x.numberOfPages)||0]),K(" ")]),o("span",null,[n("pages.book.readingMarker.progress",[v.value]),K(" ")])])]):o(ro,{showIcon:!1,type:"info"},{default:()=>[o("span",null,[n("pages.book.readingMarker.notBegin.message")]),o(Q,{size:"small",onClick:b},Nt(a=n("pages.book.readingMarker.notBegin.button"))?a:{default:()=>[a]})]})])}}}),qt="_label_1v9m3_1",Kt="_item_1v9m3_4",E={"book-details":"_book-details_1v9m3_1",label:qt,item:Kt,"book-cover-image":"_book-cover-image_1v9m3_13"},Yt=F({name:"BookDetails",props:{locationIcon:{type:Object,default:()=>o(W,{name:"locationPin"},null)},onRateChange:{type:Function},onShowLocations:{type:Function}},setup(e){const{locationIcon:n}=Ce(e),{t:c}=we({useScope:"global"}),l=Ee(),r=D(()=>{var b,s,a;const v=(s=(b=l.bookData)==null?void 0:b.covers)==null?void 0:s[0];return ao(v,(a=l.bookData)==null?void 0:a.title)});return()=>{var v,b,s,a,f,x,w,p,g;return o("div",{class:S(E["book-details"])},[o("h1",null,[(v=l.bookData)==null?void 0:v.title]),o("p",{style:{fontWeight:600}},[(b=l.bookData)==null?void 0:b.isbn]),o("p",{style:{fontWeight:600}},[se((s=l.bookData)==null?void 0:s.authors,c("pages.book.preview.detail.noAuthor"),E.item)]),o("p",null,[o(pt,{value:(a=l.bookData)==null?void 0:a.rating,allowHalf:!0,onUpdateValue:e.onRateChange,readonly:!0},null)]),o("p",null,[o(gt,{class:S(E["book-cover-image"]),src:r.value,renderToolbar:({nodes:d})=>o(to,null,[d.zoomIn,d.resizeToOriginalSize,d.zoomOut])},null)]),o("p",null,[o(Ut,null,null)]),o("p",null,[o(ro,{showIcon:!1,type:"info"},{default:()=>[o(We,{scope:"global",keypath:"pages.book.preview.detail.location"},{default:()=>[o("span",{onClick:e.onShowLocations},[o(mt,null,{default:()=>[n.value]})])]})]})]),o("h3",null,[c("pages.book.preview.detail.details")]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.publishers.label"),K(":")]),se((f=l.bookData)==null?void 0:f.publishers,c("pages.book.preview.detail.noPublisher"),E.item)]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.publishDate.label"),K(":")]),o(Te,{text:(x=l.bookData)==null?void 0:x.publishDate},null)]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.languages.label"),K(":")]),se((w=l.bookData)==null?void 0:w.languages,c("pages.book.preview.detail.noLanguage"),E.item)]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.numberOfPages.label"),K(":")]),o(We,{scope:"global",keypath:"pages.book.preview.detail.numberOfPages.text"},{default:()=>{var d;return[o(Te,{text:(d=l.bookData)==null?void 0:d.numberOfPages,placeholder:c("pages.book.preview.detail.numberOfPages.placeholder")},null)]}})]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.tags.label"),K(":")]),se((p=l.bookData)==null?void 0:p.tags,c("pages.book.preview.detail.noTags"),E.item)]),o("p",null,[o("span",{class:S(E.label)},[c("pages.book.bookForm.form.subjects.label"),K(":")]),se((g=l.bookData)==null?void 0:g.subjects,c("pages.book.preview.detail.noSubject"),E.item)]),o("p",null,[o("h3",null,[c("pages.book.preview.detail.summary")]),o("div",null,[o(Ot,{expandTrigger:"click",lineClamp:5,tooltip:!1},{default:()=>{var d;return[o(Te,{text:(d=l.bookData)==null?void 0:d.summary},null)]}})])])])}}}),Xt="_flip_ay5yt_24",Ge={"duplicate-books-icon":"_duplicate-books-icon_ay5yt_1",flip:Xt},Gt=F({name:"DuplicateBooksIcon",props:{cover:{type:Blob},title:{type:String}},setup(e){const{cover:n,title:c}=Ce(e),l=D(()=>ao(n.value,c.value)),r=I(!1);return setTimeout(()=>{ce(()=>{r.value=!0})},1e3),()=>o("div",{class:S(Ge["duplicate-books-icon"],{[Ge.flip]:r.value}),style:{"--background-image":`url(${l.value})`}},["⬜️"])}}),Je={"book-location":"_book-location_14iv4_1","preview-card":"_preview-card_14iv4_12"},Jt=F({name:"BookLocation",props:{bookcaseIds:{type:Array,default:()=>[]}},setup(e){const{router:n}=lo(),c=I([]),l=I(!1),r=I([]),v=I(0);return Y(c.value,b=>{if(b.filter(s=>s!==void 0).length===e.bookcaseIds.length){l.value=!0;const s=[],a=[0,0];for(let f=0;f<b.length;f++)a[0]<=a[1]?(s.push([0,a[0]]),a[0]+=b[f]):(s.push([1,a[1]]),a[1]+=b[f]);r.value=s,v.value=Math.max(...a)}}),()=>o("div",{class:S(Je["book-location"]),style:{height:`${v.value+1}px`}},[e.bookcaseIds.map((b,s)=>{const a=r.value[s]||[0,0],f=a[0]===0?"0%":"100%",x=a[1]+"px";return o("div",{class:S(Je["preview-card"]),style:{visibility:l.value?"visible":"hidden",transform:`translate(${f}, ${x})`},onClick:()=>{n.push(`/cell/${b.cellId}`)}},[o(wt,{key:b.bookcaseId,bookcaseId:b.bookcaseId,selectedCellId:b.cellId,onSizeLoad:(w,p)=>{c.value[s]=p},isLocated:s===0},null)])})])}}),Qt="_modal_1xub4_1",Zt="_fullscreen_1xub4_9",en="_card_1xub4_9",on="_header_1xub4_28",tn="_content_1xub4_34",nn="_mask_1xub4_40",N={modal:Qt,fullscreen:Zt,card:en,header:on,content:tn,mask:nn,"fade-enter-active":"_fade-enter-active_1xub4_50","fade-leave-active":"_fade-leave-active_1xub4_51","fade-enter-from":"_fade-enter-from_1xub4_54","fade-leave-to":"_fade-leave-to_1xub4_55"},io={visible:{type:Boolean,default:!0},title:{type:String,default:""},fullscreen:{type:Boolean,default:!1},onClose:{type:Function,required:!1},onOk:{type:Function,required:!1},rightSlots:{type:Array},leftSlots:{type:Array}},an=F({name:"CardModal",props:io,setup(e,{slots:n}){const c=I(e.visible);Y(()=>e.visible,s=>{c.value=s});function l(){var s;(s=e.onClose)==null||s.call(e)}function r(){var s;(s=e.onOk)==null||s.call(e)}function v(){return e.leftSlots?e.leftSlots:[o(Q,{circle:!0,secondary:!0,size:"large",onClick:l},{default:()=>[o(W,{name:"delete"},null)]})]}function b(){return e.rightSlots?e.rightSlots:[o(Q,{circle:!0,secondary:!0,size:"large",onClick:r},{default:()=>[o(W,{name:"check"},null)]})]}return()=>o(at,{to:"body"},{default:()=>[o(Oe,{enterActiveClass:S(N["fade-enter-active"]),enterFromClass:S(N["fade-enter-from"]),leaveActiveClass:S(N["fade-leave-active"]),leaveToClass:S(N["fade-leave-to"])},{default:()=>{var s;return[c.value?o("div",{class:S(N.modal,{[N.fullscreen]:e.fullscreen})},[o("div",{class:S(N.mask)},null),o("div",{class:S(N.card)},[o("div",{class:S(N.header)},[o($e,{leftSlots:v(),rightSlots:b()},{default:()=>[e.title]})]),o("div",{class:S(N.content)},[(s=n.default)==null?void 0:s.call(n)])])]):o("i",null,null)]}})]})}}),ln="_thumbnail_tgm9h_13",Qe={"bookcase-cell-picker":"_bookcase-cell-picker_tgm9h_1",thumbnail:ln},rn={bookcase:{type:Object,required:!1},selectedCellId:{type:String,required:!1},isLocated:{type:Boolean,default:!1},onSizeLoad:{type:Function,required:!1}},sn=F({name:"Thumbnail",props:rn,setup(e){const{bookcase:n,isLocated:c,selectedCellId:l}=Ce(e),r=I();function v(s){const{thumbnail:a}=s;return l.value?Ue(s,l.value).then(f=>{r.value=f.img}):a?le.bookcase.queryThumbnailById(a).then(f=>{r.value=f==null?void 0:f.file}):Ue(s).then(f=>{r.value=f.img,le.bookcase.updateBookcase(s,f.img)})}const b=s=>{var x,w;const f=(x=s.target.parentElement)==null?void 0:x.parentElement;(w=e.onSizeLoad)==null||w.call(e,f.clientWidth,f.clientHeight)};return Y(n,s=>{s&&ce(()=>{v(s)})},{immediate:!0}),Y(l,()=>{n.value&&v(n.value)}),()=>{var s,a;return o("div",{class:S(Qe["bookcase-cell-picker"])},[o("img",{class:S(Qe.thumbnail),src:r.value&&URL.createObjectURL(r.value),alt:(s=n.value)==null?void 0:s.name,onLoad:b},null),o("div",null,[o("span",null,[c.value?o(W,{name:"locationPin"},null):""]),o("span",null,[(a=n.value)==null?void 0:a.name])])])}}}),cn={bookcase:{type:Object,required:!0},onSelectCell:{type:Function,required:!1}},dn=F({name:"PickBoard",props:cn,setup(e){const n=lt();function c(l){if(!n.value){console.error("container not found");return}const{meta:r,cells:v}=l,{unit:b}=r,s=n.value.parentElement,a=(s==null?void 0:s.clientWidth)||300,f=(s==null?void 0:s.clientHeight)||300,x=yt(r,a,f),w=new xe.Stage({container:n.value,x:x.x,y:x.y,width:a,height:f,draggable:!0}),p=new xe.Layer;w.on("tap",g=>{var R;const d=g.target;d instanceof xe.Rect&&(St(p).forEach(k=>k.fill(r.fill)),(R=e.onSelectCell)!=null&&R.call(e,d.attrs.cell.id)&&d.fill(r.fillSelected))}),w.add(p),v.forEach(g=>{const{from:d,to:R,isNotEmpty:h}=g,k=d[0]*b,B=d[1]*b,j=(R[1]-d[1])*b,H=(R[0]-d[0])*b,$=h?r.fillNotEmpty:r.fill,ee=new xe.Rect({y:B,x:k,width:H,height:j,fill:$,cell:{...g},...It});p.add(ee),p.draw()})}return rt(()=>{c(e.bookcase)}),()=>o("div",{style:{width:"100%",height:"100%"}},[o("div",{ref:n},null)])}}),un="_drawer_160vj_13",Z={"pick-bookcase-cell-modal":"_pick-bookcase-cell-modal_160vj_1","bookcase-cover-list":"_bookcase-cover-list_160vj_8",drawer:un,"shown-enter-active":"_shown-enter-active_160vj_22","shown-leave-active":"_shown-leave-active_160vj_23","shown-enter-from":"_shown-enter-from_160vj_26","shown-leave-to":"_shown-leave-to_160vj_27"},fn={...io,bookData:{type:Object,required:!1},onOk:{type:Function,required:!1}},vn=F({name:"PickBookcaseCellModal",props:fn,setup(e){const{t:n}=we({useScope:"global"}),{message:c}=it(),l=I([]),r=I(),v=I(),b=I();Y(()=>e.visible,a=>{a?le.bookcase.getBookcases().then(f=>{l.value=f}):(r.value=void 0,b.value=void 0,v.value=void 0)});const s=()=>{var a;if(b.value===void 0||v.value===void 0){c.error(n("pages.book.preview.pickBoocaseCellModal.messages.pickAtLeastOneCell"));return}(a=e.onOk)==null||a.call(e,{cellId:b.value,bookcaseId:v.value})};return()=>o(an,{title:n("pages.book.preview.pickBoocaseCellModal.title"),fullscreen:!0,visible:e.visible,onClose:e.onClose,onOk:s,leftSlots:[o(Q,{circle:!0,secondary:!0,size:"large",disabled:r.value===void 0,onClick:()=>{r.value=void 0}},{default:()=>[o(W,{name:"back"},null)]}),o(Q,{circle:!0,secondary:!0,size:"large",onClick:e.onClose},{default:()=>[o(W,{name:"delete"},null)]})]},{default:()=>[o("div",{class:S(Z["pick-bookcase-cell-modal"])},[o("div",{class:S(Z["bookcase-cover-list"])},[l.value.map(a=>{var f;return o("div",{key:a.id,onClick:()=>{r.value=a.id}},[o(sn,{selectedCellId:b.value,isLocated:((f=e.bookData)==null?void 0:f.bookcaseId)===a.id,bookcase:a},null)])})]),o(Oe,{enterActiveClass:S(Z["shown-enter-active"]),enterFromClass:S(Z["shown-enter-from"]),leaveActiveClass:S(Z["shown-leave-active"]),leaveToClass:S(Z["shown-leave-to"])},{default:()=>[r.value&&o("div",{class:S(Z.drawer)},[o(dn,{bookcase:l.value.find(a=>a.id===r.value),onSelectCell:a=>{var f;return a===((f=e.bookData)==null?void 0:f.cellId)?(c.error(n("pages.book.preview.pickBoocaseCellModal.messages.cannotPickSameCell")),!1):(b.value=a,v.value=r.value,!0)}},null)])]})])]})}}),hn={"preview-book":"_preview-book_ozp5a_1"};function De(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!no(e)}const Bn=F({name:"PreviewBook",setup(){const{t:e}=we({useScope:"global"}),{route:n,router:c}=lo(),l=Ee(),r=I([]);function v(){const{isbn:p,id:g}=n.params;if(g)return le.book.queryRelatedBooksByBookId(g).then(d=>{if(d!=null&&d.length){const[R,...h]=d;l.updateBookData(R),r.value=h||[]}});if(p)return le.book.queryFirstBookByIsbn(p).then(d=>{if(d!=null&&d.length){const[R,...h]=d;l.updateBookData(R),r.value=h||[]}});throw new Error("id or isbn not found")}Y(()=>n.params,()=>{v()},{immediate:!0});const b=()=>{var p,g,d;return r.value.length?o(Gt,{cover:(g=(p=l.bookData)==null?void 0:p.covers)==null?void 0:g[0],title:(d=l.bookData)==null?void 0:d.title},null):o(W,{name:"locationPin"},null)};function s(){var g;const p=(g=l.bookData)==null?void 0:g.id;p&&c.push({path:`/book/edit/id/${p}`,replace:!0})}const a=I(!1),f=()=>o(_t,{trigger:"click",placement:"bottom-end",options:[{key:"editBookInfo",label:e("pages.book.preview.previewBook.editActions.editBookInfo"),icon:()=>o(W,{name:"memo"},null)},{key:"moveTo",label:e("pages.book.preview.previewBook.editActions.moveTo"),icon:()=>o(W,{name:"blue-book"},null)}],onSelect:p=>{p==="editBookInfo"?s():p==="moveTo"&&(a.value=!0)}},{default:()=>[o(Q,null,{default:()=>[o(W,{name:"pencil"},null)]})]}),x=p=>{let g;return o(kt,{topBar:o($e,{rightSlots:[o(Q,{onClick:p},De(g=b())?g:{default:()=>[g]}),f()]},{default:()=>{var d;return[((d=l.bookData)==null?void 0:d.title)||"-"]}})},{default:()=>[o(Yt,{locationIcon:b(),onShowLocations:p},null)]})},w=p=>{let g,d;const R=[l.bookData,...r.value].filter(h=>!!h).map(h=>({bookcaseId:h.bookcaseId,cellId:h.cellId}));return o(Ct,{topBar:o($e,{leftSlots:[o(Q,{text:!0,onClick:p},De(g=e("common.close"))?g:{default:()=>[g]})]},De(d=e("pages.book.preview.decker.topbar.title"))?d:{default:()=>[d]})},{default:()=>[o(Jt,{bookcaseIds:R},null)]})};return()=>o("div",{class:S(hn["preview-book"])},[o(xt,null,{default:x,decker:w}),o(vn,{visible:a.value,bookData:l.bookData,onClose:()=>{a.value=!1},onOk:p=>{var g;le.book.moveBooksToNewBookcaseCell(p.bookcaseId,p.cellId,[((g=l.bookData)==null?void 0:g.id)||""]).then(()=>v()).then(()=>{a.value=!1})}},null)])}});export{Bn as default};
//# sourceMappingURL=PreviewBook-CPgxVnZF.js.map
