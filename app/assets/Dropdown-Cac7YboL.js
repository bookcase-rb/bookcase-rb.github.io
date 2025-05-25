import{p as Ie,B as Re,V as Ke,a as ze,r as Oe,N as De,b as fe}from"./Popover-Dpij0fg9.js";import{aj as _e,ak as $e,a8 as q,w as de,al as Be,am as Te,a4 as Ae,a9 as G,r as H,d as O,E as l,U as Fe,k as he,m as He,an as ae,ao as L,ap as X,n as k,q as N,x as B,z as J,y as ve,C as w,D as me,aq as be,G as le,ar as W,as as Z,a6 as Le,at as ye,F as Me,au as je,av as We,aw as Ee,Z as Ue,V as ce,p as $,a3 as Ve,a2 as z,a7 as re,ax as qe,T as F}from"./index-B3qSu1dX.js";import{f as Ge}from"./get-DrtZLwal.js";import{h as ue,c as Ze}from"./create-D3Vn69pI.js";function Xe(e={},n){const i=_e({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,o=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==d.key)return;const h=r[y];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},a=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==d.key)return;const h=t[y];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=()=>{(n===void 0||n.value)&&(q("keydown",document,o),q("keyup",document,a)),n!==void 0&&de(n,d=>{d?(q("keydown",document,o),q("keyup",document,a)):(G("keydown",document,o),G("keyup",document,a))})};return Be()?(Te(u),Ae(()=>{(n===void 0||n.value)&&(G("keydown",document,o),G("keyup",document,a))})):u(),$e(i)}function Je(e,n,i){const r=H(e.value);let t=null;return de(e,o=>{t!==null&&window.clearTimeout(t),o===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}function Qe(e){return n=>{n?e.value=n.$el:e.value=null}}const Ye=O({name:"ChevronRight",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),eo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function oo(e){const{primaryColor:n,textColor2:i,dividerColor:r,hoverColor:t,popoverColor:o,invertedColor:a,borderRadius:u,fontSizeSmall:d,fontSizeMedium:y,fontSizeLarge:h,fontSizeHuge:g,heightSmall:S,heightMedium:P,heightLarge:I,heightHuge:D,textColor3:x,opacityDisabled:R}=e;return Object.assign(Object.assign({},eo),{optionHeightSmall:S,optionHeightMedium:P,optionHeightLarge:I,optionHeightHuge:D,borderRadius:u,fontSizeSmall:d,fontSizeMedium:y,fontSizeLarge:h,fontSizeHuge:g,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:n,optionTextColorChildActive:n,color:o,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:t,optionColorActive:He(n,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:R})}const no=Fe({name:"Dropdown",common:he,peers:{Popover:Ie},self:oo}),se=ae("n-dropdown-menu"),Q=ae("n-dropdown"),pe=ae("n-dropdown-option"),we=O({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),to=O({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=L(se),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:o}=L(Q);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:t,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:o,renderOption:a}=this,{rawNode:u}=this.tmNode,d=l("div",Object.assign({class:`${n}-dropdown-option`},t==null?void 0:t(u)),l("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},X(u.icon)),l("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(u):X((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),l("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:u}):d}});function ro(e){const{textColorBase:n,opacity1:i,opacity2:r,opacity3:t,opacity4:o,opacity5:a}=e;return{color:n,opacity1Depth:i,opacity2Depth:r,opacity3Depth:t,opacity4Depth:o,opacity5Depth:a}}const io={name:"Icon",common:he,self:ro},ao=k("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[B("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),B("svg",{height:"1em",width:"1em"})]),lo=Object.assign(Object.assign({},J.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),so=O({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:lo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=ve(e),r=J("Icon","-icon",ao,io,e,n),t=w(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:u},self:d}=r.value;if(a!==void 0){const{color:y,[`opacity${a}Depth`]:h}=d;return{"--n-bezier":u,"--n-color":y,"--n-opacity":h}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),o=i?me("icon",w(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:n,mergedStyle:w(()=>{const{size:a,color:u}=e;return{fontSize:Ge(a),color:u}}),cssVars:i?void 0:t,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:r,component:t,onRender:o,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&be("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),l("i",le(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:i,[`${r}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?l(t):this.$slots)}});function ie(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function co(e){return e.type==="group"}function ge(e){return e.type==="divider"}function uo(e){return e.type==="render"}const xe=O({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=L(Q),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:o,activeKeyPathRef:a,animatedRef:u,mergedShowRef:d,renderLabelRef:y,renderIconRef:h,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:P,nodePropsRef:I,menuPropsRef:D}=n,x=L(pe,null),R=L(se),E=L(ye),Y=w(()=>e.tmNode.rawNode),U=w(()=>{const{value:c}=S;return ie(e.tmNode.rawNode,c)}),ee=w(()=>{const{disabled:c}=e.tmNode;return c}),oe=w(()=>{if(!U.value)return!1;const{key:c,disabled:b}=e.tmNode;if(b)return!1;const{value:K}=i,{value:T}=r,{value:te}=t,{value:A}=o;return K!==null?A.includes(c):T!==null?A.includes(c)&&A[A.length-1]!==c:te!==null?A.includes(c):!1}),ne=w(()=>r.value===null&&!u.value),V=Je(oe,300,ne),M=w(()=>!!(x!=null&&x.enteringSubmenuRef.value)),j=H(!1);W(pe,{enteringSubmenuRef:j});function _(){j.value=!0}function s(){j.value=!1}function m(){const{parentKey:c,tmNode:b}=e;b.disabled||d.value&&(t.value=c,r.value=null,i.value=b.key)}function f(){const{tmNode:c}=e;c.disabled||d.value&&i.value!==c.key&&m()}function p(c){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=c;b&&!ue({target:b},"dropdownOption")&&!ue({target:b},"scrollbarRail")&&(i.value=null)}function C(){const{value:c}=U,{tmNode:b}=e;d.value&&!c&&!b.disabled&&(n.doSelect(b.key,b.rawNode),n.doUpdateShow(!1))}return{labelField:g,renderLabel:y,renderIcon:h,siblingHasIcon:R.showIconRef,siblingHasSubmenu:R.hasSubmenuRef,menuProps:D,popoverBody:E,animated:u,mergedShowSubmenu:w(()=>V.value&&!M.value),rawNode:Y,hasSubmenu:U,pending:Z(()=>{const{value:c}=o,{key:b}=e.tmNode;return c.includes(b)}),childActive:Z(()=>{const{value:c}=a,{key:b}=e.tmNode,K=c.findIndex(T=>b===T);return K===-1?!1:K<c.length-1}),active:Z(()=>{const{value:c}=a,{key:b}=e.tmNode,K=c.findIndex(T=>b===T);return K===-1?!1:K===c.length-1}),mergedDisabled:ee,renderOption:P,nodeProps:I,handleClick:C,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:s}},render(){var e,n;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:o,siblingHasIcon:a,siblingHasSubmenu:u,renderLabel:d,renderIcon:y,renderOption:h,nodeProps:g,props:S,scrollable:P}=this;let I=null;if(t){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=l(Se,Object.assign({},E,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const D={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),R=l("div",Object.assign({class:[`${o}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),l("div",le(D,S),[l("div",{class:[`${o}-dropdown-option-body__prefix`,a&&`${o}-dropdown-option-body__prefix--show-icon`]},[y?y(r):X(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},d?d(r):X((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,u&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(so,null,{default:()=>l(Ye,null)}):null)]),this.hasSubmenu?l(Re,null,{default:()=>[l(Ke,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(ze,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},i?l(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return h?h({node:R,option:r}):R}}),po=O({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:r}=e;return l(Me,null,l(to,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:o}=t;return o.show===!1?null:ge(o)?l(we,{clsPrefix:i,key:t.key}):t.isGroup?(be("dropdown","`group` node is not allowed to be put in `group` node."),null):l(xe,{clsPrefix:i,tmNode:t,parentKey:n,key:t.key})}))}}),fo=O({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return l("div",n,[e==null?void 0:e()])}}),Se=O({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=L(Q);W(se,{showIconRef:w(()=>{const t=n.value;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:u}=o;return t?t(u):u.icon})}),hasSubmenuRef:w(()=>{const{value:t}=i;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>ie(d,t));const{rawNode:u}=o;return ie(u,t)})})});const r=H(null);return W(We,null),W(Ee,null),W(ye,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:o}=t;return o.show===!1?null:uo(o)?l(fo,{tmNode:t,key:t.key}):ge(o)?l(we,{clsPrefix:n,key:t.key}):co(o)?l(po,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):l(xe,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:o.props,scrollable:i})});return l("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?l(je,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Oe({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ho=k("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ue(),k("dropdown-option",`
 position: relative;
 `,[B("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),k("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),B("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),B("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),k("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[N("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),k("icon",`
 font-size: var(--n-option-icon-size);
 `)]),k("dropdown-menu","pointer-events: all;")]),k("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),k("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),k("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),B(">",[k("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),vo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},mo=Object.keys(fe),bo=Object.assign(Object.assign(Object.assign({},fe),vo),J.props),So=O({name:"Dropdown",inheritAttrs:!1,props:bo,setup(e){const n=H(!1),i=Ve(z(e,"show"),n),r=w(()=>{const{keyField:s,childrenField:m}=e;return Ze(e.options,{getKey(f){return f[s]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),t=w(()=>r.value.treeNodes),o=H(null),a=H(null),u=H(null),d=w(()=>{var s,m,f;return(f=(m=(s=o.value)!==null&&s!==void 0?s:a.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=w(()=>r.value.getPath(d.value).keyPath),h=w(()=>r.value.getPath(e.value).keyPath),g=Z(()=>e.keyboard&&i.value);Xe({keydown:{ArrowUp:{prevent:!0,handler:ee},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:Y},Enter:{prevent:!0,handler:ne},Escape:E}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:P}=ve(e),I=J("Dropdown","-dropdown",ho,no,e,S);W(Q,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:a,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:h,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:D,doUpdateShow:x}),de(i,s=>{!e.animated&&!s&&R()});function D(s,m){const{onSelect:f}=e;f&&re(f,s,m)}function x(s){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&re(m,s),f&&re(f,s),n.value=s}function R(){o.value=null,a.value=null,u.value=null}function E(){x(!1)}function Y(){M("left")}function U(){M("right")}function ee(){M("up")}function oe(){M("down")}function ne(){const s=V();s!=null&&s.isLeaf&&i.value&&(D(s.key,s.rawNode),x(!1))}function V(){var s;const{value:m}=r,{value:f}=d;return!m||f===null?null:(s=m.getNode(f))!==null&&s!==void 0?s:null}function M(s){const{value:m}=d,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const C=f();C!==null&&(p=C.key)}else{const C=V();if(C){let c;switch(s){case"down":c=C.getNext();break;case"up":c=C.getPrev();break;case"right":c=C.getChild();break;case"left":c=C.getParent();break}c&&(p=c.key)}}p!==null&&(o.value=null,a.value=p)}const j=w(()=>{const{size:s,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=I.value,{padding:C,dividerColor:c,borderRadius:b,optionOpacityDisabled:K,[F("optionIconSuffixWidth",s)]:T,[F("optionSuffixWidth",s)]:te,[F("optionIconPrefixWidth",s)]:A,[F("optionPrefixWidth",s)]:Ce,[F("fontSize",s)]:Pe,[F("optionHeight",s)]:ke,[F("optionIconSize",s)]:Ne}=p,v={"--n-bezier":f,"--n-font-size":Pe,"--n-padding":C,"--n-border-radius":b,"--n-option-height":ke,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":te,"--n-option-icon-suffix-width":T,"--n-option-icon-size":Ne,"--n-divider-color":c,"--n-option-opacity-disabled":K};return m?(v["--n-color"]=p.colorInverted,v["--n-option-color-hover"]=p.optionColorHoverInverted,v["--n-option-color-active"]=p.optionColorActiveInverted,v["--n-option-text-color"]=p.optionTextColorInverted,v["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,v["--n-option-text-color-active"]=p.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,v["--n-prefix-color"]=p.prefixColorInverted,v["--n-suffix-color"]=p.suffixColorInverted,v["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(v["--n-color"]=p.color,v["--n-option-color-hover"]=p.optionColorHover,v["--n-option-color-active"]=p.optionColorActive,v["--n-option-text-color"]=p.optionTextColor,v["--n-option-text-color-hover"]=p.optionTextColorHover,v["--n-option-text-color-active"]=p.optionTextColorActive,v["--n-option-text-color-child-active"]=p.optionTextColorChildActive,v["--n-prefix-color"]=p.prefixColor,v["--n-suffix-color"]=p.suffixColor,v["--n-group-header-text-color"]=p.groupHeaderTextColor),v}),_=P?me("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),j,e):void 0;return{mergedClsPrefix:S,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&R()},doUpdateShow:x,cssVars:P?void 0:j,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(r,t,o,a,u)=>{var d;const{mergedClsPrefix:y,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(h==null?void 0:h(void 0,this.tmNodes.map(P=>P.rawNode)))||{},S={ref:Qe(t),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:u};return l(Se,le(this.$attrs,S,g))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(De,Object.assign({},qe(this.$props,mo),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{So as N};
//# sourceMappingURL=Dropdown-Cac7YboL.js.map
