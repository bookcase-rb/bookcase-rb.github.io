import{x as Ce,y as ke,al as $e,d as X,r as g,C as Fe,L as F,K as te,am as Re,au as Ee,w as re,p as Te,aX as Ie,Q as _,az as q,aA as G,v as x,aY as Pe,T as oe,P as He,ap as Ne,aZ as ae,aB as De,W as Me,U as Oe,V as Le,H as c,a_ as Y,E as z,G as R,_ as D,aM as Ue,ay as _e,J as ne,$ as Q,a0 as Z,a$ as We,M as Ae,aO as je,aN as Xe,b0 as Ye,a1 as M,t as Ve,u as se,c as s,N as U,B as K,S as W,b as A,i as qe,a as j,f as Ke,o as Je,g as Ge,e as Qe,I as Ze}from"./index-DU3akae0.js";import{u as et}from"./useTRouter-CQdtzKen.js";import{B as tt,a as rt}from"./BasicTopBar-D8zmHch7.js";import{D as ot}from"./DoubleDeckerContainer-DiWDSmCC.js";import{d as ie}from"./vue-utils-C8Ubh6bB.js";import{N as L,a as at}from"./FormItem-OC8cROAO.js";import{N as nt}from"./InputGroup-CNgR8C4C.js";import{B as st,a as it}from"./BookList-DZuTtsQW.js";import{E as lt}from"./Empty-6lKrsTL9.js";import{f as ee}from"./get-CdiFP34O.js";import"./utils-DG50A_wr.js";import"./Popconfirm-C6NmDyFA.js";import"./Popover-Bd5t-vwt.js";function ct(e){const{modalColor:o,textColor1:r,textColor2:u,boxShadow3:t,lineHeight:f,fontWeightStrong:b,dividerColor:h,closeColorHover:p,closeColorPressed:i,closeIconColor:a,closeIconColorHover:C,closeIconColorPressed:$,borderRadius:y,primaryColorHover:P}=e;return{bodyPadding:"16px 24px",borderRadius:y,headerPadding:"16px 24px",footerPadding:"16px 24px",color:o,textColor:u,titleTextColor:r,titleFontSize:"18px",titleFontWeight:b,boxShadow:t,lineHeight:f,headerBorderBottom:`1px solid ${h}`,footerBorderTop:`1px solid ${h}`,closeIconColor:a,closeIconColorHover:C,closeIconColorPressed:$,closeSize:"22px",closeIconSize:"18px",closeColorHover:p,closeColorPressed:i,closeBorderRadius:y,resizableTriggerColorHover:P}}const dt=Ce({name:"Drawer",common:ke,peers:{Scrollbar:$e},self:ct}),ut=X({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const o=g(!!e.show),r=g(null),u=Fe(ae);let t=0,f="",b=null;const h=g(!1),p=g(!1),i=F(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:a,mergedRtlRef:C}=te(e),$=Re("Drawer",C,a),y=n,P=l=>{p.value=!0,t=i.value?l.clientY:l.clientX,f=document.body.style.cursor,document.body.style.cursor=i.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",B),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",n)},O=()=>{b!==null&&(window.clearTimeout(b),b=null),p.value?h.value=!0:b=window.setTimeout(()=>{h.value=!0},300)},H=()=>{b!==null&&(window.clearTimeout(b),b=null),h.value=!1},{doUpdateHeight:d,doUpdateWidth:E}=u,T=l=>{const{maxWidth:v}=e;if(v&&l>v)return v;const{minWidth:S}=e;return S&&l<S?S:l},I=l=>{const{maxHeight:v}=e;if(v&&l>v)return v;const{minHeight:S}=e;return S&&l<S?S:l};function B(l){var v,S;if(p.value)if(i.value){let k=((v=r.value)===null||v===void 0?void 0:v.offsetHeight)||0;const N=t-l.clientY;k+=e.placement==="bottom"?N:-N,k=I(k),d(k),t=l.clientY}else{let k=((S=r.value)===null||S===void 0?void 0:S.offsetWidth)||0;const N=t-l.clientX;k+=e.placement==="right"?N:-N,k=T(k),E(k),t=l.clientX}}function n(){p.value&&(t=0,p.value=!1,document.body.style.cursor=f,document.body.removeEventListener("mousemove",B),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mouseleave",y))}Ee(()=>{e.show&&(o.value=!0)}),re(()=>e.show,l=>{l||n()}),Te(()=>{n()});const m=F(()=>{const{show:l}=e,v=[[G,l]];return e.showMask||v.push([De,e.onClickoutside,void 0,{capture:!0}]),v});function w(){var l;o.value=!1,(l=e.onAfterLeave)===null||l===void 0||l.call(e)}return Ie(F(()=>e.blockScroll&&o.value)),_(Me,r),_(Oe,null),_(Le,null),{bodyRef:r,rtlEnabled:$,mergedClsPrefix:u.mergedClsPrefixRef,isMounted:u.isMountedRef,mergedTheme:u.mergedThemeRef,displayed:o,transitionName:F(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:w,bodyDirectives:m,handleMousedownResizeTrigger:P,handleMouseenterResizeTrigger:O,handleMouseleaveResizeTrigger:H,isDragging:p,isHoverOnResizeTrigger:h}},render(){const{$slots:e,mergedClsPrefix:o}=this;return this.displayDirective==="show"||this.displayed||this.show?q(x("div",{role:"none"},x(Pe,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>x(oe,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>q(x("div",He(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${o}-drawer`,this.rtlEnabled&&`${o}-drawer--rtl`,`${o}-drawer--${this.placement}-placement`,this.isDragging&&`${o}-drawer--unselectable`,this.nativeScrollbar&&`${o}-drawer--native-scrollbar`]}),[this.resizable?x("div",{class:[`${o}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${o}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?x("div",{class:[`${o}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):x(Ne,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${o}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[G,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:ht,cubicBezierEaseOut:ft}=Y;function mt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-bottom"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${ht}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${ft}`}),c(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:bt,cubicBezierEaseOut:vt}=Y;function gt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-left"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${bt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${vt}`}),c(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:pt,cubicBezierEaseOut:yt}=Y;function wt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-right"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${pt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${yt}`}),c(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Bt,cubicBezierEaseOut:St}=Y;function zt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-top"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${Bt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${St}`}),c(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const xt=c([z("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[wt(),gt(),zt(),mt(),R("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),R("native-scrollbar",[z("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),D("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[R("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),z("drawer-content-wrapper",`
 box-sizing: border-box;
 `),z("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[R("native-scrollbar",[z("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),z("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),z("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),z("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[D("main",`
 flex: 1;
 `),D("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),R("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),R("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),R("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),R("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),c("body",[c(">",[z("drawer-container",`
 position: fixed;
 `)])]),z("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[c("> *",`
 pointer-events: all;
 `)]),z("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[R("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ue({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Ct=Object.assign(Object.assign({},ne.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),kt=X({name:"Drawer",inheritAttrs:!1,props:Ct,setup(e){const{mergedClsPrefixRef:o,namespaceRef:r,inlineThemeDisabled:u}=te(e),t=_e(),f=ne("Drawer","-drawer",xt,dt,e,o),b=g(e.defaultWidth),h=g(e.defaultHeight),p=Q(Z(e,"width"),b),i=Q(Z(e,"height"),h),a=F(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":ee(p.value)}),C=F(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":ee(i.value)}),$=n=>{const{onUpdateWidth:m,"onUpdate:width":w}=e;m&&M(m,n),w&&M(w,n),b.value=n},y=n=>{const{onUpdateHeight:m,"onUpdate:width":w}=e;m&&M(m,n),w&&M(w,n),h.value=n},P=F(()=>[{width:a.value,height:C.value},e.drawerStyle||""]);function O(n){const{onMaskClick:m,maskClosable:w}=e;w&&T(!1),m&&m(n)}function H(n){O(n)}const d=We();function E(n){var m;(m=e.onEsc)===null||m===void 0||m.call(e),e.show&&e.closeOnEsc&&Ye(n)&&(d.value||T(!1))}function T(n){const{onHide:m,onUpdateShow:w,"onUpdate:show":l}=e;w&&M(w,n),l&&M(l,n),m&&!n&&M(m,n)}_(ae,{isMountedRef:t,mergedThemeRef:f,mergedClsPrefixRef:o,doUpdateShow:T,doUpdateHeight:y,doUpdateWidth:$});const I=F(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:m,cubicBezierEaseOut:w},self:{color:l,textColor:v,boxShadow:S,lineHeight:k,headerPadding:N,footerPadding:le,borderRadius:ce,bodyPadding:de,titleFontSize:ue,titleTextColor:he,titleFontWeight:fe,headerBorderBottom:me,footerBorderTop:be,closeIconColor:ve,closeIconColorHover:ge,closeIconColorPressed:pe,closeColorHover:ye,closeColorPressed:we,closeIconSize:Be,closeSize:Se,closeBorderRadius:ze,resizableTriggerColorHover:xe}}=f.value;return{"--n-line-height":k,"--n-color":l,"--n-border-radius":ce,"--n-text-color":v,"--n-box-shadow":S,"--n-bezier":n,"--n-bezier-out":w,"--n-bezier-in":m,"--n-header-padding":N,"--n-body-padding":de,"--n-footer-padding":le,"--n-title-text-color":he,"--n-title-font-size":ue,"--n-title-font-weight":fe,"--n-header-border-bottom":me,"--n-footer-border-top":be,"--n-close-icon-color":ve,"--n-close-icon-color-hover":ge,"--n-close-icon-color-pressed":pe,"--n-close-size":Se,"--n-close-color-hover":ye,"--n-close-color-pressed":we,"--n-close-icon-size":Be,"--n-close-border-radius":ze,"--n-resize-trigger-color-hover":xe}}),B=u?Ae("drawer",void 0,I,e):void 0;return{mergedClsPrefix:o,namespace:r,mergedBodyStyle:P,handleOutsideClick:H,handleMaskClick:O,handleEsc:E,mergedTheme:f,cssVars:u?void 0:I,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender,isMounted:t}},render(){const{mergedClsPrefix:e}=this;return x(Xe,{to:this.to,show:this.show},{default:()=>{var o;return(o=this.onRender)===null||o===void 0||o.call(this),q(x("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?x(oe,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?x("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,x(ut,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[je,{zIndex:this.zIndex,enabled:this.show}]])}})}}),$t={"search-form":"_search-form_17xjc_1"};function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!qe(e)}const J={isbn:"",title:"",authors:"",publishers:"",tags:"",rating:void 0},Rt=X({name:"SearchForm",props:{searchParams:{type:Object,default:()=>({...J})},isLoading:{type:Boolean,default:!1},onScan:{type:Function},onChange:{type:Function}},setup(e){const{searchParams:o,isLoading:r}=Ve(e),{t:u}=se({useScope:"global"}),t=g({...o.value});re(()=>o.value,i=>{i.isbn?t.value={...J,isbn:i.isbn}:t.value={...i}},{immediate:!0});function f(i,a){t.value[i]=a}const b=F(()=>Object.keys(t.value).filter(i=>i!=="isbn").some(i=>t.value[i]!==""&&t.value[i]!==void 0&&t.value[i]!==null)),h=F(()=>t.value.isbn===""||t.value.isbn===void 0||t.value.isbn===null),p=()=>{var i;(i=e.onScan)==null||i.call(e)};return()=>{let i;return s(at,{class:A($t["search-form"]),labelPlacement:"top",model:t.value},{default:()=>[s(L,{label:"isbn",path:"isbn"},{default:()=>[s(nt,null,{default:()=>[s(U,{disabled:b.value,placeholder:u("pages.search.searchForm.fields.isbn.placeholder"),value:t.value.isbn,onUpdateValue:a=>{f("isbn",a)},onBlur:()=>{var a;t.value.isbn=(a=t.value.isbn)==null?void 0:a.trim()},inputProps:{enterKeyHint:"done"}},null),s(K,{ghost:!0,onClick:p},{default:()=>[s(W,{name:"barcodeScan"},null)]})]})]}),s(L,{label:u("pages.search.searchForm.fields.title.label"),path:"title"},{default:()=>[s(U,{disabled:!h.value,placeholder:u("pages.search.searchForm.fields.title.placeholder"),value:t.value.title,onUpdateValue:a=>{f("title",a)},onBlur:()=>{var a;t.value.title=(a=t.value.title)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.authors.label"),path:"authors"},{default:()=>[s(U,{disabled:!h.value,placeholder:u("pages.search.searchForm.fields.authors.placeholder"),value:t.value.authors,onUpdateValue:a=>{f("authors",a)},onBlur:()=>{var a;t.value.authors=(a=t.value.authors)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.publishers.label"),path:"publishers"},{default:()=>[s(U,{disabled:!h.value,placeholder:u("pages.search.searchForm.fields.publishers.placeholder"),value:t.value.publishers,onUpdateValue:a=>{f("publishers",a)},onBlur:()=>{var a;t.value.publishers=(a=t.value.publishers)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.tags.label"),path:"tags"},{default:()=>[s(U,{disabled:!h.value,placeholder:u("pages.search.searchForm.fields.tags.placeholder"),value:t.value.tags,onUpdateValue:a=>{f("tags",a)},onBlur:()=>{var a;t.value.tags=(a=t.value.tags)==null?void 0:a.trim()}},null)]}),s(L,null,{default:()=>[s(K,{type:"primary",onClick:()=>{var C;const a=ie(t.value);(C=e.onChange)==null||C.call(e,a)},loading:r.value},Ft(i=u("pages.search.searchForm.actions.search"))?i:{default:()=>[i]})]})]})}}});function Et(e){return e.isbn?j.book.queryRawBooksByIsbn(e.isbn):j.book.queryRawBooksByParams(e)}const Tt="_search_13buv_1",It="_main_13buv_1",Pt="_list_13buv_4",V={search:Tt,main:It,list:Pt},Vt=X({name:"Search",setup(){const{t:e}=se({useScope:"global"}),{router:o}=et(),{dialog:r}=Ke(),u=()=>j.book.getAllBooks();Je(()=>{try{const d=localStorage.getItem("searchParams")||"{}";y.value=JSON.parse(d),console.log(d,JSON.parse(d))}catch(d){console.error(d)}a()});const t=g(!1);Ge(()=>{t.value?localStorage.setItem("searchParams",JSON.stringify(y.value)):localStorage.removeItem("searchParams")});const f=g(!1),b=d=>{f.value=!0,r.success({title:e("pages.search.topbar.scanResultDialog.title"),content:e("pages.search.topbar.scanResultDialog.content",[d]),positiveText:e("common.yes"),negativeText:e("common.no"),onPositiveClick:()=>{y.value={isbn:d},f.value=!1,H.value=1},onNegativeClick:()=>{f.value=!1}})},h=g([]),p=()=>h.value.length===0?s(lt,{title:e("pages.search.empty.title"),description:s(Ze,{scope:"global",keypath:"pages.search.empty.description"},{default:()=>[s(W,{name:"filter"},null)]})},null):s(it,{data:h.value,onPreviewBook:d=>{o.push({path:`/book/preview/id/${d.id}`}),t.value=!0},onEditBook:d=>{o.push({path:`/book/edit/id/${d.id}`}),t.value=!0},onDeleteBook:d=>{j.book.deleteBook(d.id).then(()=>{h.value=h.value.filter(E=>E.id!==d.id)})}},null),i=g(!1),a=()=>{var T;const d=ie(y.value);(T=Object.keys(d).every(I=>{const B=d[I];return B===""||B===null||B===void 0})?u():Et(d))==null||T.then(I=>{h.value=I})},C=g(),$=g(!1),y=g(J),P=d=>s(rt,{topBar:s(tt,{rightSlots:[s(K,{onClick:()=>{$.value=!0}},{default:()=>[s(W,{name:"filter"},null)]})]},{default:()=>[s(W,{name:"magnifier"},null),Qe(" "),e("pages.search.topbar.title")]})},{default:()=>[s("div",{class:A(V.main),ref:C},[s("div",{class:A(V.list)},[p()]),s(kt,{show:$.value,to:C.value,onMaskClick:()=>{$.value=!1}},{default:()=>[s(Rt,{searchParams:y.value,isLoading:i.value,onScan:d,onChange:E=>{y.value=E,$.value=!1,a()}},null)]})])]}),O=()=>s(st,{holdon:f.value,onBarcodeDetect:b},null),H=g(1);return()=>s(ot,{class:A(V.search),layer:H.value,onLayerChange:d=>{H.value=d}},{default:P,decker:O})}});export{Vt as default};
