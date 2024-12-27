(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(u){if(u.ep)return;u.ep=!0;const c=o(u);fetch(u.href,c)}})();function ff(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tl={exports:{}},mi={},nl={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Jm(){if(Ld)return Se;Ld=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,I={};function B(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}B.prototype.isReactComponent={},B.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=B.prototype;function C(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}var S=C.prototype=new M;S.constructor=C,z(S,B.prototype),S.isPureReactComponent=!0;var _=Array.isArray,N=Object.prototype.hasOwnProperty,A={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function G(j,F,ue){var le,he={},fe=null,pe=null;if(F!=null)for(le in F.ref!==void 0&&(pe=F.ref),F.key!==void 0&&(fe=""+F.key),F)N.call(F,le)&&!Q.hasOwnProperty(le)&&(he[le]=F[le]);var ae=arguments.length-2;if(ae===1)he.children=ue;else if(1<ae){for(var ye=Array(ae),_e=0;_e<ae;_e++)ye[_e]=arguments[_e+2];he.children=ye}if(j&&j.defaultProps)for(le in ae=j.defaultProps,ae)he[le]===void 0&&(he[le]=ae[le]);return{$$typeof:i,type:j,key:fe,ref:pe,props:he,_owner:A.current}}function H(j,F){return{$$typeof:i,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function W(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function R(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ue){return F[ue]})}var D=/\/+/g;function $(j,F){return typeof j=="object"&&j!==null&&j.key!=null?R(""+j.key):F.toString(36)}function U(j,F,ue,le,he){var fe=typeof j;(fe==="undefined"||fe==="boolean")&&(j=null);var pe=!1;if(j===null)pe=!0;else switch(fe){case"string":case"number":pe=!0;break;case"object":switch(j.$$typeof){case i:case n:pe=!0}}if(pe)return pe=j,he=he(pe),j=le===""?"."+$(pe,0):le,_(he)?(ue="",j!=null&&(ue=j.replace(D,"$&/")+"/"),U(he,F,ue,"",function(_e){return _e})):he!=null&&(W(he)&&(he=H(he,ue+(!he.key||pe&&pe.key===he.key?"":(""+he.key).replace(D,"$&/")+"/")+j)),F.push(he)),1;if(pe=0,le=le===""?".":le+":",_(j))for(var ae=0;ae<j.length;ae++){fe=j[ae];var ye=le+$(fe,ae);pe+=U(fe,F,ue,ye,he)}else if(ye=k(j),typeof ye=="function")for(j=ye.call(j),ae=0;!(fe=j.next()).done;)fe=fe.value,ye=le+$(fe,ae++),pe+=U(fe,F,ue,ye,he);else if(fe==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return pe}function re(j,F,ue){if(j==null)return j;var le=[],he=0;return U(j,le,"","",function(fe){return F.call(ue,fe,he++)}),le}function me(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(ue){(j._status===0||j._status===-1)&&(j._status=1,j._result=ue)},function(ue){(j._status===0||j._status===-1)&&(j._status=2,j._result=ue)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},V={transition:null},Z={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:V,ReactCurrentOwner:A};function X(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:re,forEach:function(j,F,ue){re(j,function(){F.apply(this,arguments)},ue)},count:function(j){var F=0;return re(j,function(){F++}),F},toArray:function(j){return re(j,function(F){return F})||[]},only:function(j){if(!W(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Se.Component=B,Se.Fragment=o,Se.Profiler=u,Se.PureComponent=C,Se.StrictMode=a,Se.Suspense=f,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Se.act=X,Se.cloneElement=function(j,F,ue){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var le=z({},j.props),he=j.key,fe=j.ref,pe=j._owner;if(F!=null){if(F.ref!==void 0&&(fe=F.ref,pe=A.current),F.key!==void 0&&(he=""+F.key),j.type&&j.type.defaultProps)var ae=j.type.defaultProps;for(ye in F)N.call(F,ye)&&!Q.hasOwnProperty(ye)&&(le[ye]=F[ye]===void 0&&ae!==void 0?ae[ye]:F[ye])}var ye=arguments.length-2;if(ye===1)le.children=ue;else if(1<ye){ae=Array(ye);for(var _e=0;_e<ye;_e++)ae[_e]=arguments[_e+2];le.children=ae}return{$$typeof:i,type:j.type,key:he,ref:fe,props:le,_owner:pe}},Se.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},Se.createElement=G,Se.createFactory=function(j){var F=G.bind(null,j);return F.type=j,F},Se.createRef=function(){return{current:null}},Se.forwardRef=function(j){return{$$typeof:g,render:j}},Se.isValidElement=W,Se.lazy=function(j){return{$$typeof:v,_payload:{_status:-1,_result:j},_init:me}},Se.memo=function(j,F){return{$$typeof:x,type:j,compare:F===void 0?null:F}},Se.startTransition=function(j){var F=V.transition;V.transition={};try{j()}finally{V.transition=F}},Se.unstable_act=X,Se.useCallback=function(j,F){return xe.current.useCallback(j,F)},Se.useContext=function(j){return xe.current.useContext(j)},Se.useDebugValue=function(){},Se.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},Se.useEffect=function(j,F){return xe.current.useEffect(j,F)},Se.useId=function(){return xe.current.useId()},Se.useImperativeHandle=function(j,F,ue){return xe.current.useImperativeHandle(j,F,ue)},Se.useInsertionEffect=function(j,F){return xe.current.useInsertionEffect(j,F)},Se.useLayoutEffect=function(j,F){return xe.current.useLayoutEffect(j,F)},Se.useMemo=function(j,F){return xe.current.useMemo(j,F)},Se.useReducer=function(j,F,ue){return xe.current.useReducer(j,F,ue)},Se.useRef=function(j){return xe.current.useRef(j)},Se.useState=function(j){return xe.current.useState(j)},Se.useSyncExternalStore=function(j,F,ue){return xe.current.useSyncExternalStore(j,F,ue)},Se.useTransition=function(){return xe.current.useTransition()},Se.version="18.3.1",Se}var Od;function Ol(){return Od||(Od=1,nl.exports=Jm()),nl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function eh(){if(Id)return mi;Id=1;var i=Ol(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(g,f,x){var v,y={},k=null,b=null;x!==void 0&&(k=""+x),f.key!==void 0&&(k=""+f.key),f.ref!==void 0&&(b=f.ref);for(v in f)a.call(f,v)&&!c.hasOwnProperty(v)&&(y[v]=f[v]);if(g&&g.defaultProps)for(v in f=g.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:n,type:g,key:k,ref:b,props:y,_owner:u.current}}return mi.Fragment=o,mi.jsx=p,mi.jsxs=p,mi}var Nd;function th(){return Nd||(Nd=1,tl.exports=eh()),tl.exports}var m=th(),ge=Ol();const Ce=ff(ge);var Io={},rl={exports:{}},dt={},il={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function nh(){return Ad||(Ad=1,function(i){function n(V,Z){var X=V.length;V.push(Z);e:for(;0<X;){var j=X-1>>>1,F=V[j];if(0<u(F,Z))V[j]=Z,V[X]=F,X=j;else break e}}function o(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var Z=V[0],X=V.pop();if(X!==Z){V[0]=X;e:for(var j=0,F=V.length,ue=F>>>1;j<ue;){var le=2*(j+1)-1,he=V[le],fe=le+1,pe=V[fe];if(0>u(he,X))fe<F&&0>u(pe,he)?(V[j]=pe,V[fe]=X,j=fe):(V[j]=he,V[le]=X,j=le);else if(fe<F&&0>u(pe,X))V[j]=pe,V[fe]=X,j=fe;else break e}}return Z}function u(V,Z){var X=V.sortIndex-Z.sortIndex;return X!==0?X:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var f=[],x=[],v=1,y=null,k=3,b=!1,z=!1,I=!1,B=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var Z=o(x);Z!==null;){if(Z.callback===null)a(x);else if(Z.startTime<=V)a(x),Z.sortIndex=Z.expirationTime,n(f,Z);else break;Z=o(x)}}function _(V){if(I=!1,S(V),!z)if(o(f)!==null)z=!0,me(N);else{var Z=o(x);Z!==null&&xe(_,Z.startTime-V)}}function N(V,Z){z=!1,I&&(I=!1,M(G),G=-1),b=!0;var X=k;try{for(S(Z),y=o(f);y!==null&&(!(y.expirationTime>Z)||V&&!R());){var j=y.callback;if(typeof j=="function"){y.callback=null,k=y.priorityLevel;var F=j(y.expirationTime<=Z);Z=i.unstable_now(),typeof F=="function"?y.callback=F:y===o(f)&&a(f),S(Z)}else a(f);y=o(f)}if(y!==null)var ue=!0;else{var le=o(x);le!==null&&xe(_,le.startTime-Z),ue=!1}return ue}finally{y=null,k=X,b=!1}}var A=!1,Q=null,G=-1,H=5,W=-1;function R(){return!(i.unstable_now()-W<H)}function D(){if(Q!==null){var V=i.unstable_now();W=V;var Z=!0;try{Z=Q(!0,V)}finally{Z?$():(A=!1,Q=null)}}else A=!1}var $;if(typeof C=="function")$=function(){C(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,re=U.port2;U.port1.onmessage=D,$=function(){re.postMessage(null)}}else $=function(){B(D,0)};function me(V){Q=V,A||(A=!0,$())}function xe(V,Z){G=B(function(){V(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){z||b||(z=!0,me(N))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(V){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var X=k;k=Z;try{return V()}finally{k=X}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=k;k=V;try{return Z()}finally{k=X}},i.unstable_scheduleCallback=function(V,Z,X){var j=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?j+X:j):X=j,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,V={id:v++,callback:Z,priorityLevel:V,startTime:X,expirationTime:F,sortIndex:-1},X>j?(V.sortIndex=X,n(x,V),o(f)===null&&V===o(x)&&(I?(M(G),G=-1):I=!0,xe(_,X-j))):(V.sortIndex=F,n(f,V),z||b||(z=!0,me(N))),V},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(V){var Z=k;return function(){var X=k;k=Z;try{return V.apply(this,arguments)}finally{k=X}}}}(ol)),ol}var Dd;function rh(){return Dd||(Dd=1,il.exports=nh()),il.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function ih(){if(Rd)return dt;Rd=1;var i=Ol(),n=rh();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function c(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(u[e]=t,e=0;e<t.length;e++)a.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function k(e){return f.call(y,e)?!0:f.call(v,e)?!1:x.test(e)?y[e]=!0:(v[e]=!0,!1)}function b(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,r,s){if(t===null||typeof t>"u"||b(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,s,l,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,C);B[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,C);B[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,C);B[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,r,s){var l=B.hasOwnProperty(t)?B[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,r,l,s)&&(r=null),s||l===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var _=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),A=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,j;function F(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ue=!1;function le(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var s=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){s=O}e.call(t.prototype)}else{try{throw Error()}catch(O){s=O}e()}}catch(O){if(O&&s&&typeof O.stack=="string"){for(var l=O.stack.split(`
`),d=s.stack.split(`
`),h=l.length-1,w=d.length-1;1<=h&&0<=w&&l[h]!==d[w];)w--;for(;1<=h&&0<=w;h--,w--)if(l[h]!==d[w]){if(h!==1||w!==1)do if(h--,w--,0>w||l[h]!==d[w]){var E=`
`+l[h].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=h&&0<=w);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function he(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case A:return"Portal";case H:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:return(e.displayName||"Context")+".Consumer";case W:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ye(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){s=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qe(e){e._valueTracker||(e._valueTracker=_e(e))}function Fe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ye(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ke(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ae(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pt(e,t){t=t.checked,t!=null&&S(e,"checked",t,!1)}function Gn(e,t){Pt(e,t);var r=ae(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,r):t.hasOwnProperty("defaultValue")&&cs(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $l(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function cs(e,t,r){(t!=="number"||ze(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Pr=Array.isArray;function Wn(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ae(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Pr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ae(r)}}function Hl(e,t){var r=ae(t.value),s=ae(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Gl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ci,ql=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Ul(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Yl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=Ul(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var op=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vs=null,qn=null,Un=null;function Xl(e){if(e=Jr(e)){if(typeof vs!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Yi(t),vs(e.stateNode,e.type,t))}}function Ql(e){qn?Un?Un.push(e):Un=[e]:qn=e}function Kl(){if(qn){var e=qn,t=Un;if(Un=qn=null,Xl(e),t)for(e=0;e<t.length;e++)Xl(t[e])}}function Zl(e,t){return e(t)}function Jl(){}var ys=!1;function eu(e,t,r){if(ys)return e(t,r);ys=!0;try{return Zl(e,t,r)}finally{ys=!1,(qn!==null||Un!==null)&&(Jl(),Kl())}}function Lr(e,t){var r=e.stateNode;if(r===null)return null;var s=Yi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var xs=!1;if(g)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{xs=!1}function sp(e,t,r,s,l,d,h,w,E){var O=Array.prototype.slice.call(arguments,3);try{t.apply(r,O)}catch(Y){this.onError(Y)}}var Ir=!1,Ti=null,ji=!1,ws=null,ap={onError:function(e){Ir=!0,Ti=e}};function lp(e,t,r,s,l,d,h,w,E){Ir=!1,Ti=null,sp.apply(ap,arguments)}function up(e,t,r,s,l,d,h,w,E){if(lp.apply(this,arguments),Ir){if(Ir){var O=Ti;Ir=!1,Ti=null}else throw Error(o(198));ji||(ji=!0,ws=O)}}function Cn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(Cn(e)!==e)throw Error(o(188))}function cp(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return nu(l),e;if(d===s)return nu(l),t;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=l,s=d;else{for(var h=!1,w=l.child;w;){if(w===r){h=!0,r=l,s=d;break}if(w===s){h=!0,s=l,r=d;break}w=w.sibling}if(!h){for(w=d.child;w;){if(w===r){h=!0,r=d,s=l;break}if(w===s){h=!0,s=d,r=l;break}w=w.sibling}if(!h)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function ru(e){return e=cp(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=n.unstable_scheduleCallback,su=n.unstable_cancelCallback,dp=n.unstable_shouldYield,fp=n.unstable_requestPaint,Be=n.unstable_now,pp=n.unstable_getCurrentPriorityLevel,Ss=n.unstable_ImmediatePriority,au=n.unstable_UserBlockingPriority,zi=n.unstable_NormalPriority,mp=n.unstable_LowPriority,lu=n.unstable_IdlePriority,Pi=null,Rt=null;function hp(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:yp,gp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(gp(e)/vp|0)|0}var _i=64,Mi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,d=e.pingedLanes,h=r&268435455;if(h!==0){var w=h&~l;w!==0?s=Nr(w):(d&=h,d!==0&&(s=Nr(d)))}else h=r&~l,h!==0?s=Nr(h):d!==0&&(s=Nr(d));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-_t(t),l=1<<r,s|=e[r],t&=~l;return s}function xp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-_t(d),w=1<<h,E=l[h];E===-1?(!(w&r)||w&s)&&(l[h]=xp(w,t)):E<=t&&(e.expiredLanes|=w),d&=~w}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function bs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ar(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=r}function Sp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-_t(r),d=1<<l;t[l]=0,s[l]=-1,e[l]=-1,r&=~d}}function Es(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-_t(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}var je=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,Cs,fu,pu,mu,Ts=!1,Oi=[],rn=null,on=null,sn=null,Dr=new Map,Rr=new Map,an=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Fr(e,t,r,s,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Jr(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bp(e,t,r,s,l){switch(t){case"focusin":return rn=Fr(rn,e,t,r,s,l),!0;case"dragenter":return on=Fr(on,e,t,r,s,l),!0;case"mouseover":return sn=Fr(sn,e,t,r,s,l),!0;case"pointerover":var d=l.pointerId;return Dr.set(d,Fr(Dr.get(d)||null,e,t,r,s,l)),!0;case"gotpointercapture":return d=l.pointerId,Rr.set(d,Fr(Rr.get(d)||null,e,t,r,s,l)),!0}return!1}function gu(e){var t=Tn(e.target);if(t!==null){var r=Cn(t);if(r!==null){if(t=r.tag,t===13){if(t=tu(r),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);hs=s,r.target.dispatchEvent(s),hs=null}else return t=Jr(r),t!==null&&Cs(t),e.blockedOn=r,!1;t.shift()}return!0}function vu(e,t,r){Ii(e)&&r.delete(t)}function Ep(){Ts=!1,rn!==null&&Ii(rn)&&(rn=null),on!==null&&Ii(on)&&(on=null),sn!==null&&Ii(sn)&&(sn=null),Dr.forEach(vu),Rr.forEach(vu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Ts||(Ts=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ep)))}function $r(e){function t(l){return Br(l,e)}if(0<Oi.length){Br(Oi[0],e);for(var r=1;r<Oi.length;r++){var s=Oi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(rn!==null&&Br(rn,e),on!==null&&Br(on,e),sn!==null&&Br(sn,e),Dr.forEach(t),Rr.forEach(t),r=0;r<an.length;r++)s=an[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<an.length&&(r=an[0],r.blockedOn===null);)gu(r),r.blockedOn===null&&an.shift()}var Yn=_.ReactCurrentBatchConfig,Ni=!0;function Cp(e,t,r,s){var l=je,d=Yn.transition;Yn.transition=null;try{je=1,js(e,t,r,s)}finally{je=l,Yn.transition=d}}function Tp(e,t,r,s){var l=je,d=Yn.transition;Yn.transition=null;try{je=4,js(e,t,r,s)}finally{je=l,Yn.transition=d}}function js(e,t,r,s){if(Ni){var l=zs(e,t,r,s);if(l===null)Ws(e,t,s,Ai,r),hu(e,s);else if(bp(l,e,t,r,s))s.stopPropagation();else if(hu(e,s),t&4&&-1<kp.indexOf(e)){for(;l!==null;){var d=Jr(l);if(d!==null&&du(d),d=zs(e,t,r,s),d===null&&Ws(e,t,s,Ai,r),d===l)break;l=d}l!==null&&s.stopPropagation()}else Ws(e,t,s,null,r)}}var Ai=null;function zs(e,t,r,s){if(Ai=null,e=gs(s),e=Tn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=tu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Ss:return 1;case au:return 4;case zi:case mp:return 16;case lu:return 536870912;default:return 16}default:return 16}}var ln=null,Ps=null,Di=null;function xu(){if(Di)return Di;var e,t=Ps,r=t.length,s,l="value"in ln?ln.value:ln.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(s=1;s<=h&&t[r-s]===l[d-s];s++);return Di=l.slice(e,1<s?1-s:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function wu(){return!1}function mt(e){function t(r,s,l,d,h){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Fi:wu,this.isPropagationStopped=wu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=mt(Xn),Vr=X({},Xn,{view:0,detail:0}),jp=mt(Vr),Ms,Ls,Hr,Bi=X({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Ms=e.screenX-Hr.screenX,Ls=e.screenY-Hr.screenY):Ls=Ms=0,Hr=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Su=mt(Bi),zp=X({},Bi,{dataTransfer:0}),Pp=mt(zp),_p=X({},Vr,{relatedTarget:0}),Os=mt(_p),Mp=X({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=mt(Mp),Op=X({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=mt(Op),Np=X({},Xn,{data:0}),ku=mt(Np),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function Is(){return Fp}var Bp=X({},Vr,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=mt(Bp),Vp=X({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=mt(Vp),Hp=X({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Gp=mt(Hp),Wp=X({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=mt(Wp),Up=X({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=mt(Up),Xp=[9,13,27,32],Ns=g&&"CompositionEvent"in window,Gr=null;g&&"documentMode"in document&&(Gr=document.documentMode);var Qp=g&&"TextEvent"in window&&!Gr,Eu=g&&(!Ns||Gr&&8<Gr&&11>=Gr),Cu=" ",Tu=!1;function ju(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Kp(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Tu=!0,Cu);case"textInput":return e=t.data,e===Cu&&Tu?null:e;default:return null}}function Zp(e,t){if(Qn)return e==="compositionend"||!Ns&&ju(e,t)?(e=xu(),Di=Ps=ln=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jp[e.type]:t==="textarea"}function _u(e,t,r,s){Ql(s),t=Wi(t,"onChange"),0<t.length&&(r=new _s("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Wr=null,qr=null;function em(e){Yu(e,0)}function $i(e){var t=tr(e);if(Fe(t))return e}function tm(e,t){if(e==="change")return t}var Mu=!1;if(g){var As;if(g){var Ds="oninput"in document;if(!Ds){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Ds=typeof Lu.oninput=="function"}As=Ds}else As=!1;Mu=As&&(!document.documentMode||9<document.documentMode)}function Ou(){Wr&&(Wr.detachEvent("onpropertychange",Iu),qr=Wr=null)}function Iu(e){if(e.propertyName==="value"&&$i(qr)){var t=[];_u(t,qr,e,gs(e)),eu(em,t)}}function nm(e,t,r){e==="focusin"?(Ou(),Wr=t,qr=r,Wr.attachEvent("onpropertychange",Iu)):e==="focusout"&&Ou()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(qr)}function im(e,t){if(e==="click")return $i(t)}function om(e,t){if(e==="input"||e==="change")return $i(t)}function sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:sm;function Ur(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!f.call(t,l)||!Mt(e[l],t[l]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var r=Nu(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nu(r)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(){for(var e=window,t=ze();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ze(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function am(e){var t=Ru(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Du(r.ownerDocument.documentElement,r)){if(s!==null&&Rs(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(s.start,l);s=s.end===void 0?d:Math.min(s.end,l),!e.extend&&d>s&&(l=s,s=d,d=l),l=Au(r,d);var h=Au(r,s);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lm=g&&"documentMode"in document&&11>=document.documentMode,Kn=null,Fs=null,Yr=null,Bs=!1;function Fu(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bs||Kn==null||Kn!==ze(s)||(s=Kn,"selectionStart"in s&&Rs(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Yr&&Ur(Yr,s)||(Yr=s,s=Wi(Fs,"onSelect"),0<s.length&&(t=new _s("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Kn)))}function Vi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},$s={},Bu={};g&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Hi(e){if($s[e])return $s[e];if(!Zn[e])return e;var t=Zn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bu)return $s[e]=t[r];return e}var $u=Hi("animationend"),Vu=Hi("animationiteration"),Hu=Hi("animationstart"),Gu=Hi("transitionend"),Wu=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Wu.set(e,t),c(t,[e])}for(var Vs=0;Vs<qu.length;Vs++){var Hs=qu[Vs],um=Hs.toLowerCase(),cm=Hs[0].toUpperCase()+Hs.slice(1);un(um,"on"+cm)}un($u,"onAnimationEnd"),un(Vu,"onAnimationIteration"),un(Hu,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Gu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Uu(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,up(s,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var h=s.length-1;0<=h;h--){var w=s[h],E=w.instance,O=w.currentTarget;if(w=w.listener,E!==d&&l.isPropagationStopped())break e;Uu(l,w,O),d=E}else for(h=0;h<s.length;h++){if(w=s[h],E=w.instance,O=w.currentTarget,w=w.listener,E!==d&&l.isPropagationStopped())break e;Uu(l,w,O),d=E}}}if(ji)throw e=ws,ji=!1,ws=null,e}function Le(e,t){var r=t[Ks];r===void 0&&(r=t[Ks]=new Set);var s=e+"__bubble";r.has(s)||(Xu(t,e,2,!1),r.add(s))}function Gs(e,t,r){var s=0;t&&(s|=4),Xu(r,e,s,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Gi]){e[Gi]=!0,a.forEach(function(r){r!=="selectionchange"&&(dm.has(r)||Gs(r,!1,e),Gs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,Gs("selectionchange",!1,t))}}function Xu(e,t,r,s){switch(yu(t)){case 1:var l=Cp;break;case 4:l=Tp;break;default:l=js}r=l.bind(null,t,r,e),l=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Ws(e,t,r,s,l){var d=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var w=s.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(h===4)for(h=s.return;h!==null;){var E=h.tag;if((E===3||E===4)&&(E=h.stateNode.containerInfo,E===l||E.nodeType===8&&E.parentNode===l))return;h=h.return}for(;w!==null;){if(h=Tn(w),h===null)return;if(E=h.tag,E===5||E===6){s=d=h;continue e}w=w.parentNode}}s=s.return}eu(function(){var O=d,Y=gs(r),K=[];e:{var q=Wu.get(e);if(q!==void 0){var te=_s,ie=e;switch(e){case"keypress":if(Ri(r)===0)break e;case"keydown":case"keyup":te=$p;break;case"focusin":ie="focus",te=Os;break;case"focusout":ie="blur",te=Os;break;case"beforeblur":case"afterblur":te=Os;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Gp;break;case $u:case Vu:case Hu:te=Lp;break;case Gu:te=qp;break;case"scroll":te=jp;break;case"wheel":te=Yp;break;case"copy":case"cut":case"paste":te=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=bu}var oe=(t&4)!==0,$e=!oe&&e==="scroll",P=oe?q!==null?q+"Capture":null:q;oe=[];for(var T=O,L;T!==null;){L=T;var J=L.stateNode;if(L.tag===5&&J!==null&&(L=J,P!==null&&(J=Lr(T,P),J!=null&&oe.push(Kr(T,J,L)))),$e)break;T=T.return}0<oe.length&&(q=new te(q,ie,null,r,Y),K.push({event:q,listeners:oe}))}}if(!(t&7)){e:{if(q=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",q&&r!==hs&&(ie=r.relatedTarget||r.fromElement)&&(Tn(ie)||ie[Wt]))break e;if((te||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,te?(ie=r.relatedTarget||r.toElement,te=O,ie=ie?Tn(ie):null,ie!==null&&($e=Cn(ie),ie!==$e||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=O),te!==ie)){if(oe=Su,J="onMouseLeave",P="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(oe=bu,J="onPointerLeave",P="onPointerEnter",T="pointer"),$e=te==null?q:tr(te),L=ie==null?q:tr(ie),q=new oe(J,T+"leave",te,r,Y),q.target=$e,q.relatedTarget=L,J=null,Tn(Y)===O&&(oe=new oe(P,T+"enter",ie,r,Y),oe.target=L,oe.relatedTarget=$e,J=oe),$e=J,te&&ie)t:{for(oe=te,P=ie,T=0,L=oe;L;L=Jn(L))T++;for(L=0,J=P;J;J=Jn(J))L++;for(;0<T-L;)oe=Jn(oe),T--;for(;0<L-T;)P=Jn(P),L--;for(;T--;){if(oe===P||P!==null&&oe===P.alternate)break t;oe=Jn(oe),P=Jn(P)}oe=null}else oe=null;te!==null&&Qu(K,q,te,oe,!1),ie!==null&&$e!==null&&Qu(K,$e,ie,oe,!0)}}e:{if(q=O?tr(O):window,te=q.nodeName&&q.nodeName.toLowerCase(),te==="select"||te==="input"&&q.type==="file")var se=tm;else if(Pu(q))if(Mu)se=om;else{se=rm;var ce=nm}else(te=q.nodeName)&&te.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(se=im);if(se&&(se=se(e,O))){_u(K,se,r,Y);break e}ce&&ce(e,q,O),e==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&cs(q,"number",q.value)}switch(ce=O?tr(O):window,e){case"focusin":(Pu(ce)||ce.contentEditable==="true")&&(Kn=ce,Fs=O,Yr=null);break;case"focusout":Yr=Fs=Kn=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Fu(K,r,Y);break;case"selectionchange":if(lm)break;case"keydown":case"keyup":Fu(K,r,Y)}var de;if(Ns)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Qn?ju(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(Eu&&r.locale!=="ko"&&(Qn||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Qn&&(de=xu()):(ln=Y,Ps="value"in ln?ln.value:ln.textContent,Qn=!0)),ce=Wi(O,ve),0<ce.length&&(ve=new ku(ve,e,null,r,Y),K.push({event:ve,listeners:ce}),de?ve.data=de:(de=zu(r),de!==null&&(ve.data=de)))),(de=Qp?Kp(e,r):Zp(e,r))&&(O=Wi(O,"onBeforeInput"),0<O.length&&(Y=new ku("onBeforeInput","beforeinput",null,r,Y),K.push({event:Y,listeners:O}),Y.data=de))}Yu(K,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wi(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Lr(e,r),d!=null&&s.unshift(Kr(e,d,l)),d=Lr(e,t),d!=null&&s.push(Kr(e,d,l))),e=e.return}return s}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,r,s,l){for(var d=t._reactName,h=[];r!==null&&r!==s;){var w=r,E=w.alternate,O=w.stateNode;if(E!==null&&E===s)break;w.tag===5&&O!==null&&(w=O,l?(E=Lr(r,d),E!=null&&h.unshift(Kr(r,E,w))):l||(E=Lr(r,d),E!=null&&h.push(Kr(r,E,w)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var fm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(pm,"")}function qi(e,t,r){if(t=Ku(t),Ku(e)!==t&&r)throw Error(o(425))}function Ui(){}var qs=null,Us=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,mm=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(gm)}:Xs;function gm(e){setTimeout(function(){throw e})}function Qs(e,t){var r=t,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),$r(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);$r(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),Ft="__reactFiber$"+er,Zr="__reactProps$"+er,Wt="__reactContainer$"+er,Ks="__reactEvents$"+er,vm="__reactListeners$"+er,ym="__reactHandles$"+er;function Tn(e){var t=e[Ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Wt]||r[Ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ju(e);e!==null;){if(r=e[Ft])return r;e=Ju(e)}return t}e=r,r=e.parentNode}return null}function Jr(e){return e=e[Ft]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Yi(e){return e[Zr]||null}var Zs=[],nr=-1;function dn(e){return{current:e}}function Oe(e){0>nr||(e.current=Zs[nr],Zs[nr]=null,nr--)}function Me(e,t){nr++,Zs[nr]=e.current,e.current=t}var fn={},et=dn(fn),st=dn(!1),jn=fn;function rr(e,t){var r=e.type.contextTypes;if(!r)return fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function Xi(){Oe(st),Oe(et)}function ec(e,t,r){if(et.current!==fn)throw Error(o(168));Me(et,t),Me(st,r)}function tc(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,pe(e)||"Unknown",l));return X({},r,s)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,jn=et.current,Me(et,e),Me(st,st.current),!0}function nc(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=tc(e,t,jn),s.__reactInternalMemoizedMergedChildContext=e,Oe(st),Oe(et),Me(et,e)):Oe(st),Me(st,r)}var qt=null,Ki=!1,Js=!1;function rc(e){qt===null?qt=[e]:qt.push(e)}function xm(e){Ki=!0,rc(e)}function pn(){if(!Js&&qt!==null){Js=!0;var e=0,t=je;try{var r=qt;for(je=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}qt=null,Ki=!1}catch(l){throw qt!==null&&(qt=qt.slice(e+1)),ou(Ss,pn),l}finally{je=t,Js=!1}}return null}var ir=[],or=0,Zi=null,Ji=0,kt=[],bt=0,zn=null,Ut=1,Yt="";function Pn(e,t){ir[or++]=Ji,ir[or++]=Zi,Zi=e,Ji=t}function ic(e,t,r){kt[bt++]=Ut,kt[bt++]=Yt,kt[bt++]=zn,zn=e;var s=Ut;e=Yt;var l=32-_t(s)-1;s&=~(1<<l),r+=1;var d=32-_t(t)+l;if(30<d){var h=l-l%5;d=(s&(1<<h)-1).toString(32),s>>=h,l-=h,Ut=1<<32-_t(t)+l|r<<l|s,Yt=d+e}else Ut=1<<d|r<<l|s,Yt=e}function ea(e){e.return!==null&&(Pn(e,1),ic(e,1,0))}function ta(e){for(;e===Zi;)Zi=ir[--or],ir[or]=null,Ji=ir[--or],ir[or]=null;for(;e===zn;)zn=kt[--bt],kt[bt]=null,Yt=kt[--bt],kt[bt]=null,Ut=kt[--bt],kt[bt]=null}var ht=null,gt=null,Ne=!1,Lt=null;function oc(e,t){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function sc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,gt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zn!==null?{id:Ut,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,gt=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(Ne){var t=gt;if(t){var r=t;if(!sc(e,t)){if(na(e))throw Error(o(418));t=cn(r.nextSibling);var s=ht;t&&sc(e,t)?oc(s,r):(e.flags=e.flags&-4097|2,Ne=!1,ht=e)}}else{if(na(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,ht=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function eo(e){if(e!==ht)return!1;if(!Ne)return ac(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=gt)){if(na(e))throw lc(),Error(o(418));for(;t;)oc(e,t),t=cn(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){gt=cn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=ht?cn(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=gt;e;)e=cn(e.nextSibling)}function sr(){gt=ht=null,Ne=!1}function ia(e){Lt===null?Lt=[e]:Lt.push(e)}var wm=_.ReactCurrentBatchConfig;function ei(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var l=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var w=l.refs;h===null?delete w[d]:w[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function cc(e){function t(P,T){if(e){var L=P.deletions;L===null?(P.deletions=[T],P.flags|=16):L.push(T)}}function r(P,T){if(!e)return null;for(;T!==null;)t(P,T),T=T.sibling;return null}function s(P,T){for(P=new Map;T!==null;)T.key!==null?P.set(T.key,T):P.set(T.index,T),T=T.sibling;return P}function l(P,T){return P=Sn(P,T),P.index=0,P.sibling=null,P}function d(P,T,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<T?(P.flags|=2,T):L):(P.flags|=2,T)):(P.flags|=1048576,T)}function h(P){return e&&P.alternate===null&&(P.flags|=2),P}function w(P,T,L,J){return T===null||T.tag!==6?(T=Xa(L,P.mode,J),T.return=P,T):(T=l(T,L),T.return=P,T)}function E(P,T,L,J){var se=L.type;return se===Q?Y(P,T,L.props.children,J,L.key):T!==null&&(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&uc(se)===T.type)?(J=l(T,L.props),J.ref=ei(P,T,L),J.return=P,J):(J=To(L.type,L.key,L.props,null,P.mode,J),J.ref=ei(P,T,L),J.return=P,J)}function O(P,T,L,J){return T===null||T.tag!==4||T.stateNode.containerInfo!==L.containerInfo||T.stateNode.implementation!==L.implementation?(T=Qa(L,P.mode,J),T.return=P,T):(T=l(T,L.children||[]),T.return=P,T)}function Y(P,T,L,J,se){return T===null||T.tag!==7?(T=Dn(L,P.mode,J,se),T.return=P,T):(T=l(T,L),T.return=P,T)}function K(P,T,L){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Xa(""+T,P.mode,L),T.return=P,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case N:return L=To(T.type,T.key,T.props,null,P.mode,L),L.ref=ei(P,null,T),L.return=P,L;case A:return T=Qa(T,P.mode,L),T.return=P,T;case me:var J=T._init;return K(P,J(T._payload),L)}if(Pr(T)||Z(T))return T=Dn(T,P.mode,L,null),T.return=P,T;to(P,T)}return null}function q(P,T,L,J){var se=T!==null?T.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return se!==null?null:w(P,T,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case N:return L.key===se?E(P,T,L,J):null;case A:return L.key===se?O(P,T,L,J):null;case me:return se=L._init,q(P,T,se(L._payload),J)}if(Pr(L)||Z(L))return se!==null?null:Y(P,T,L,J,null);to(P,L)}return null}function te(P,T,L,J,se){if(typeof J=="string"&&J!==""||typeof J=="number")return P=P.get(L)||null,w(T,P,""+J,se);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return P=P.get(J.key===null?L:J.key)||null,E(T,P,J,se);case A:return P=P.get(J.key===null?L:J.key)||null,O(T,P,J,se);case me:var ce=J._init;return te(P,T,L,ce(J._payload),se)}if(Pr(J)||Z(J))return P=P.get(L)||null,Y(T,P,J,se,null);to(T,J)}return null}function ie(P,T,L,J){for(var se=null,ce=null,de=T,ve=T=0,Xe=null;de!==null&&ve<L.length;ve++){de.index>ve?(Xe=de,de=null):Xe=de.sibling;var Ee=q(P,de,L[ve],J);if(Ee===null){de===null&&(de=Xe);break}e&&de&&Ee.alternate===null&&t(P,de),T=d(Ee,T,ve),ce===null?se=Ee:ce.sibling=Ee,ce=Ee,de=Xe}if(ve===L.length)return r(P,de),Ne&&Pn(P,ve),se;if(de===null){for(;ve<L.length;ve++)de=K(P,L[ve],J),de!==null&&(T=d(de,T,ve),ce===null?se=de:ce.sibling=de,ce=de);return Ne&&Pn(P,ve),se}for(de=s(P,de);ve<L.length;ve++)Xe=te(de,P,ve,L[ve],J),Xe!==null&&(e&&Xe.alternate!==null&&de.delete(Xe.key===null?ve:Xe.key),T=d(Xe,T,ve),ce===null?se=Xe:ce.sibling=Xe,ce=Xe);return e&&de.forEach(function(kn){return t(P,kn)}),Ne&&Pn(P,ve),se}function oe(P,T,L,J){var se=Z(L);if(typeof se!="function")throw Error(o(150));if(L=se.call(L),L==null)throw Error(o(151));for(var ce=se=null,de=T,ve=T=0,Xe=null,Ee=L.next();de!==null&&!Ee.done;ve++,Ee=L.next()){de.index>ve?(Xe=de,de=null):Xe=de.sibling;var kn=q(P,de,Ee.value,J);if(kn===null){de===null&&(de=Xe);break}e&&de&&kn.alternate===null&&t(P,de),T=d(kn,T,ve),ce===null?se=kn:ce.sibling=kn,ce=kn,de=Xe}if(Ee.done)return r(P,de),Ne&&Pn(P,ve),se;if(de===null){for(;!Ee.done;ve++,Ee=L.next())Ee=K(P,Ee.value,J),Ee!==null&&(T=d(Ee,T,ve),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return Ne&&Pn(P,ve),se}for(de=s(P,de);!Ee.done;ve++,Ee=L.next())Ee=te(de,P,ve,Ee.value,J),Ee!==null&&(e&&Ee.alternate!==null&&de.delete(Ee.key===null?ve:Ee.key),T=d(Ee,T,ve),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return e&&de.forEach(function(Zm){return t(P,Zm)}),Ne&&Pn(P,ve),se}function $e(P,T,L,J){if(typeof L=="object"&&L!==null&&L.type===Q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case N:e:{for(var se=L.key,ce=T;ce!==null;){if(ce.key===se){if(se=L.type,se===Q){if(ce.tag===7){r(P,ce.sibling),T=l(ce,L.props.children),T.return=P,P=T;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&uc(se)===ce.type){r(P,ce.sibling),T=l(ce,L.props),T.ref=ei(P,ce,L),T.return=P,P=T;break e}r(P,ce);break}else t(P,ce);ce=ce.sibling}L.type===Q?(T=Dn(L.props.children,P.mode,J,L.key),T.return=P,P=T):(J=To(L.type,L.key,L.props,null,P.mode,J),J.ref=ei(P,T,L),J.return=P,P=J)}return h(P);case A:e:{for(ce=L.key;T!==null;){if(T.key===ce)if(T.tag===4&&T.stateNode.containerInfo===L.containerInfo&&T.stateNode.implementation===L.implementation){r(P,T.sibling),T=l(T,L.children||[]),T.return=P,P=T;break e}else{r(P,T);break}else t(P,T);T=T.sibling}T=Qa(L,P.mode,J),T.return=P,P=T}return h(P);case me:return ce=L._init,$e(P,T,ce(L._payload),J)}if(Pr(L))return ie(P,T,L,J);if(Z(L))return oe(P,T,L,J);to(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,T!==null&&T.tag===6?(r(P,T.sibling),T=l(T,L),T.return=P,P=T):(r(P,T),T=Xa(L,P.mode,J),T.return=P,P=T),h(P)):r(P,T)}return $e}var ar=cc(!0),dc=cc(!1),no=dn(null),ro=null,lr=null,oa=null;function sa(){oa=lr=ro=null}function aa(e){var t=no.current;Oe(no),e._currentValue=t}function la(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function ur(e,t){ro=e,oa=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(ro===null)throw Error(o(308));lr=e,ro.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var _n=null;function ua(e){_n===null?_n=[e]:_n.push(e)}function fc(e,t,r,s){var l=t.interleaved;return l===null?(r.next=r,ua(t)):(r.next=l.next,l.next=r),t.interleaved=r,Xt(e,s)}function Xt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mn=!1;function ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ke&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,Xt(e,r)}return l=s.interleaved,l===null?(t.next=t,ua(s)):(t.next=l.next,l.next=t),s.interleaved=t,Xt(e,r)}function io(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Es(e,r)}}function mc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=h:d=d.next=h,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function oo(e,t,r,s){var l=e.updateQueue;mn=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var E=w,O=E.next;E.next=null,h===null?d=O:h.next=O,h=E;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==h&&(w===null?Y.firstBaseUpdate=O:w.next=O,Y.lastBaseUpdate=E))}if(d!==null){var K=l.baseState;h=0,Y=O=E=null,w=d;do{var q=w.lane,te=w.eventTime;if((s&q)===q){Y!==null&&(Y=Y.next={eventTime:te,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ie=e,oe=w;switch(q=t,te=r,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){K=ie.call(te,K,q);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,q=typeof ie=="function"?ie.call(te,K,q):ie,q==null)break e;K=X({},K,q);break e;case 2:mn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,q=l.effects,q===null?l.effects=[w]:q.push(w))}else te={eventTime:te,lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(O=Y=te,E=K):Y=Y.next=te,h|=q;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;q=w,w=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);if(Y===null&&(E=K),l.baseState=E,l.firstBaseUpdate=O,l.lastBaseUpdate=Y,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);On|=h,e.lanes=h,e.memoizedState=K}}function hc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var ti={},Bt=dn(ti),ni=dn(ti),ri=dn(ti);function Mn(e){if(e===ti)throw Error(o(174));return e}function da(e,t){switch(Me(ri,t),Me(ni,e),Me(Bt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}Oe(Bt),Me(Bt,t)}function cr(){Oe(Bt),Oe(ni),Oe(ri)}function gc(e){Mn(ri.current);var t=Mn(Bt.current),r=fs(t,e.type);t!==r&&(Me(ni,e),Me(Bt,r))}function fa(e){ni.current===e&&(Oe(Bt),Oe(ni))}var Ae=dn(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function ma(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var ao=_.ReactCurrentDispatcher,ha=_.ReactCurrentBatchConfig,Ln=0,De=null,Ge=null,Ue=null,lo=!1,ii=!1,oi=0,Sm=0;function tt(){throw Error(o(321))}function ga(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Mt(e[r],t[r]))return!1;return!0}function va(e,t,r,s,l,d){if(Ln=d,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=e===null||e.memoizedState===null?Cm:Tm,e=r(s,l),ii){d=0;do{if(ii=!1,oi=0,25<=d)throw Error(o(301));d+=1,Ue=Ge=null,t.updateQueue=null,ao.current=jm,e=r(s,l)}while(ii)}if(ao.current=fo,t=Ge!==null&&Ge.next!==null,Ln=0,Ue=Ge=De=null,lo=!1,t)throw Error(o(300));return e}function ya(){var e=oi!==0;return oi=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ct(){if(Ge===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ue===null?De.memoizedState:Ue.next;if(t!==null)Ue=t,Ge=e;else{if(e===null)throw Error(o(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function si(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=Ct(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Ge,l=s.baseQueue,d=r.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}s.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,s=s.baseState;var w=h=null,E=null,O=d;do{var Y=O.lane;if((Ln&Y)===Y)E!==null&&(E=E.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),s=O.hasEagerState?O.eagerState:e(s,O.action);else{var K={lane:Y,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};E===null?(w=E=K,h=s):E=E.next=K,De.lanes|=Y,On|=Y}O=O.next}while(O!==null&&O!==d);E===null?h=s:E.next=w,Mt(s,t.memoizedState)||(lt=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=E,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do d=l.lane,De.lanes|=d,On|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wa(e){var t=Ct(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);Mt(d,t.memoizedState)||(lt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,s]}function vc(){}function yc(e,t){var r=De,s=Ct(),l=t(),d=!Mt(s.memoizedState,l);if(d&&(s.memoizedState=l,lt=!0),s=s.queue,Sa(Sc.bind(null,r,s,e),[e]),s.getSnapshot!==t||d||Ue!==null&&Ue.memoizedState.tag&1){if(r.flags|=2048,ai(9,wc.bind(null,r,s,l,t),void 0,null),Ye===null)throw Error(o(349));Ln&30||xc(r,t,l)}return l}function xc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wc(e,t,r,s){t.value=r,t.getSnapshot=s,kc(t)&&bc(e)}function Sc(e,t,r){return r(function(){kc(t)&&bc(e)})}function kc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Mt(e,r)}catch{return!0}}function bc(e){var t=Xt(e,1);t!==null&&At(t,e,1,-1)}function Ec(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Em.bind(null,De,e),[t.memoizedState,e]}function ai(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Cc(){return Ct().memoizedState}function uo(e,t,r,s){var l=$t();De.flags|=e,l.memoizedState=ai(1|t,r,void 0,s===void 0?null:s)}function co(e,t,r,s){var l=Ct();s=s===void 0?null:s;var d=void 0;if(Ge!==null){var h=Ge.memoizedState;if(d=h.destroy,s!==null&&ga(s,h.deps)){l.memoizedState=ai(t,r,d,s);return}}De.flags|=e,l.memoizedState=ai(1|t,r,d,s)}function Tc(e,t){return uo(8390656,8,e,t)}function Sa(e,t){return co(2048,8,e,t)}function jc(e,t){return co(4,2,e,t)}function zc(e,t){return co(4,4,e,t)}function Pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,r){return r=r!=null?r.concat([e]):null,co(4,4,Pc.bind(null,t,e),r)}function ka(){}function Mc(e,t){var r=Ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ga(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Lc(e,t){var r=Ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ga(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Oc(e,t,r){return Ln&21?(Mt(r,t)||(r=uu(),De.lanes|=r,On|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=r)}function km(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var s=ha.transition;ha.transition={};try{e(!1),t()}finally{je=r,ha.transition=s}}function Ic(){return Ct().memoizedState}function bm(e,t,r){var s=xn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Nc(e))Ac(t,r);else if(r=fc(e,t,r,s),r!==null){var l=ot();At(r,e,s,l),Dc(r,t,s)}}function Em(e,t,r){var s=xn(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Ac(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,w=d(h,r);if(l.hasEagerState=!0,l.eagerState=w,Mt(w,h)){var E=t.interleaved;E===null?(l.next=l,ua(t)):(l.next=E.next,E.next=l),t.interleaved=l;return}}catch{}finally{}r=fc(e,t,l,s),r!==null&&(l=ot(),At(r,e,s,l),Dc(r,t,s))}}function Nc(e){var t=e.alternate;return e===De||t!==null&&t===De}function Ac(e,t){ii=lo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dc(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Es(e,r)}}var fo={readContext:Et,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Cm={readContext:Et,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Tc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,uo(4194308,4,Pc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var r=$t();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=$t();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=bm.bind(null,De,e),[s.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:ka,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=km.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=De,l=$t();if(Ne){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ye===null)throw Error(o(349));Ln&30||xc(s,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Tc(Sc.bind(null,s,d,e),[e]),s.flags|=2048,ai(9,wc.bind(null,s,d,r,t),void 0,null),r},useId:function(){var e=$t(),t=Ye.identifierPrefix;if(Ne){var r=Yt,s=Ut;r=(s&~(1<<32-_t(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=oi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tm={readContext:Et,useCallback:Mc,useContext:Et,useEffect:Sa,useImperativeHandle:_c,useInsertionEffect:jc,useLayoutEffect:zc,useMemo:Lc,useReducer:xa,useRef:Cc,useState:function(){return xa(si)},useDebugValue:ka,useDeferredValue:function(e){var t=Ct();return Oc(t,Ge.memoizedState,e)},useTransition:function(){var e=xa(si)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Ic,unstable_isNewReconciler:!1},jm={readContext:Et,useCallback:Mc,useContext:Et,useEffect:Sa,useImperativeHandle:_c,useInsertionEffect:jc,useLayoutEffect:zc,useMemo:Lc,useReducer:wa,useRef:Cc,useState:function(){return wa(si)},useDebugValue:ka,useDeferredValue:function(e){var t=Ct();return Ge===null?t.memoizedState=e:Oc(t,Ge.memoizedState,e)},useTransition:function(){var e=wa(si)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Ic,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ba(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var po={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ot(),l=xn(e),d=Qt(s,l);d.payload=t,r!=null&&(d.callback=r),t=hn(e,d,l),t!==null&&(At(t,e,l,s),io(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ot(),l=xn(e),d=Qt(s,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=hn(e,d,l),t!==null&&(At(t,e,l,s),io(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),s=xn(e),l=Qt(r,s);l.tag=2,t!=null&&(l.callback=t),t=hn(e,l,s),t!==null&&(At(t,e,s,r),io(t,e,s))}};function Rc(e,t,r,s,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,h):t.prototype&&t.prototype.isPureReactComponent?!Ur(r,s)||!Ur(l,d):!0}function Fc(e,t,r){var s=!1,l=fn,d=t.contextType;return typeof d=="object"&&d!==null?d=Et(d):(l=at(t)?jn:et.current,s=t.contextTypes,d=(s=s!=null)?rr(e,l):fn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Bc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function Ea(e,t,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},ca(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=Et(d):(d=at(t)?jn:et.current,l.context=rr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(ba(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&po.enqueueReplaceState(l,l.state,null),oo(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var r="",s=t;do r+=he(s),s=s.return;while(s);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Ca(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function $c(e,t,r){r=Qt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){wo||(wo=!0,$a=s),Ta(e,t)},r}function Vc(e,t,r){r=Qt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;r.payload=function(){return s(l)},r.callback=function(){Ta(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Ta(e,t),typeof s!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Hc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new zm;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(l.add(r),e=Vm.bind(null,e,t,r),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,r,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Qt(-1,1),t.tag=2,hn(r,t,1))),r.lanes|=1),e)}var Pm=_.ReactCurrentOwner,lt=!1;function it(e,t,r,s){t.child=e===null?dc(t,null,r,s):ar(t,e.child,r,s)}function qc(e,t,r,s,l){r=r.render;var d=t.ref;return ur(t,l),s=va(e,t,r,s,d,l),r=ya(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Ne&&r&&ea(t),t.flags|=1,it(e,t,s,l),t.child)}function Uc(e,t,r,s,l){if(e===null){var d=r.type;return typeof d=="function"&&!Ya(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Yc(e,t,d,s,l)):(e=To(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!(e.lanes&l)){var h=d.memoizedProps;if(r=r.compare,r=r!==null?r:Ur,r(h,s)&&e.ref===t.ref)return Kt(e,t,l)}return t.flags|=1,e=Sn(d,s),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,r,s,l){if(e!==null){var d=e.memoizedProps;if(Ur(d,s)&&e.ref===t.ref)if(lt=!1,t.pendingProps=s=d,(e.lanes&l)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,Kt(e,t,l)}return ja(e,t,r,s,l)}function Xc(e,t,r){var s=t.pendingProps,l=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(pr,vt),vt|=r;else{if(!(r&1073741824))return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(pr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:r,Me(pr,vt),vt|=s}else d!==null?(s=d.baseLanes|r,t.memoizedState=null):s=r,Me(pr,vt),vt|=s;return it(e,t,l,r),t.child}function Qc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,r,s,l){var d=at(r)?jn:et.current;return d=rr(t,d),ur(t,l),r=va(e,t,r,s,d,l),s=ya(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Ne&&s&&ea(t),t.flags|=1,it(e,t,r,l),t.child)}function Kc(e,t,r,s,l){if(at(r)){var d=!0;Qi(t)}else d=!1;if(ur(t,l),t.stateNode===null)ho(e,t),Fc(t,r,s),Ea(t,r,s,l),s=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var E=h.context,O=r.contextType;typeof O=="object"&&O!==null?O=Et(O):(O=at(r)?jn:et.current,O=rr(t,O));var Y=r.getDerivedStateFromProps,K=typeof Y=="function"||typeof h.getSnapshotBeforeUpdate=="function";K||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==s||E!==O)&&Bc(t,h,s,O),mn=!1;var q=t.memoizedState;h.state=q,oo(t,s,h,l),E=t.memoizedState,w!==s||q!==E||st.current||mn?(typeof Y=="function"&&(ba(t,r,Y,s),E=t.memoizedState),(w=mn||Rc(t,r,w,s,q,E,O))?(K||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),h.props=s,h.state=E,h.context=O,s=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,pc(e,t),w=t.memoizedProps,O=t.type===t.elementType?w:Ot(t.type,w),h.props=O,K=t.pendingProps,q=h.context,E=r.contextType,typeof E=="object"&&E!==null?E=Et(E):(E=at(r)?jn:et.current,E=rr(t,E));var te=r.getDerivedStateFromProps;(Y=typeof te=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==K||q!==E)&&Bc(t,h,s,E),mn=!1,q=t.memoizedState,h.state=q,oo(t,s,h,l);var ie=t.memoizedState;w!==K||q!==ie||st.current||mn?(typeof te=="function"&&(ba(t,r,te,s),ie=t.memoizedState),(O=mn||Rc(t,r,O,s,q,ie,E)||!1)?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ie,E),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ie,E)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ie),h.props=s,h.state=ie,h.context=E,s=O):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),s=!1)}return za(e,t,r,s,d,l)}function za(e,t,r,s,l,d){Qc(e,t);var h=(t.flags&128)!==0;if(!s&&!h)return l&&nc(t,r,!1),Kt(e,t,d);s=t.stateNode,Pm.current=t;var w=h&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&h?(t.child=ar(t,e.child,null,d),t.child=ar(t,null,w,d)):it(e,t,w,d),t.memoizedState=s.state,l&&nc(t,r,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),da(e,t.containerInfo)}function Jc(e,t,r,s,l){return sr(),ia(l),t.flags|=256,it(e,t,r,s),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,r){var s=t.pendingProps,l=Ae.current,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(l&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Me(Ae,l&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=s.children,e=s.fallback,d?(s=t.mode,d=t.child,h={mode:"hidden",children:h},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=h):d=jo(h,s,0,null),e=Dn(e,s,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=_a(r),t.memoizedState=Pa,e):Ma(t,h));if(l=e.memoizedState,l!==null&&(w=l.dehydrated,w!==null))return _m(e,t,h,s,w,l,r);if(d){d=s.fallback,h=t.mode,l=e.child,w=l.sibling;var E={mode:"hidden",children:s.children};return!(h&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=E,t.deletions=null):(s=Sn(l,E),s.subtreeFlags=l.subtreeFlags&14680064),w!==null?d=Sn(w,d):(d=Dn(d,h,r,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,h=e.child.memoizedState,h=h===null?_a(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~r,t.memoizedState=Pa,s}return d=e.child,e=d.sibling,s=Sn(d,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ma(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,r,s){return s!==null&&ia(s),ar(t,e.child,null,r),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _m(e,t,r,s,l,d,h){if(r)return t.flags&256?(t.flags&=-257,s=Ca(Error(o(422))),mo(e,t,h,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,l=t.mode,s=jo({mode:"visible",children:s.children},l,0,null),d=Dn(d,l,h,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,t.mode&1&&ar(t,e.child,null,h),t.child.memoizedState=_a(h),t.memoizedState=Pa,d);if(!(t.mode&1))return mo(e,t,h,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var w=s.dgst;return s=w,d=Error(o(419)),s=Ca(d,s,void 0),mo(e,t,h,s)}if(w=(h&e.childLanes)!==0,lt||w){if(s=Ye,s!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|h)?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Xt(e,l),At(s,e,l,-1))}return Ua(),s=Ca(Error(o(421))),mo(e,t,h,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Hm.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,gt=cn(l.nextSibling),ht=t,Ne=!0,Lt=null,e!==null&&(kt[bt++]=Ut,kt[bt++]=Yt,kt[bt++]=zn,Ut=e.id,Yt=e.overflow,zn=t),t=Ma(t,s.children),t.flags|=4096,t)}function td(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),la(e.return,t,r)}function La(e,t,r,s,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=l)}function nd(e,t,r){var s=t.pendingProps,l=s.revealOrder,d=s.tail;if(it(e,t,s.children,r),s=Ae.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,r,t);else if(e.tag===19)td(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Me(Ae,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&so(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),La(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&so(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}La(t,!0,r,null,d);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Sn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Sn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mm(e,t,r){switch(t.tag){case 3:Zc(t),sr();break;case 5:gc(t);break;case 1:at(t.type)&&Qi(t);break;case 4:da(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;Me(no,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Me(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?ed(e,t,r):(Me(Ae,Ae.current&1),e=Kt(e,t,r),e!==null?e.sibling:null);Me(Ae,Ae.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return nd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Me(Ae,Ae.current),s)break;return null;case 22:case 23:return t.lanes=0,Xc(e,t,r)}return Kt(e,t,r)}var rd,Oa,id,od;rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Oa=function(){},id=function(e,t,r,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Mn(Bt.current);var d=null;switch(r){case"input":l=be(e,l),s=be(e,s),d=[];break;case"select":l=X({},l,{value:void 0}),s=X({},s,{value:void 0}),d=[];break;case"textarea":l=ds(e,l),s=ds(e,s),d=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ui)}ps(r,s);var h;r=null;for(O in l)if(!s.hasOwnProperty(O)&&l.hasOwnProperty(O)&&l[O]!=null)if(O==="style"){var w=l[O];for(h in w)w.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(u.hasOwnProperty(O)?d||(d=[]):(d=d||[]).push(O,null));for(O in s){var E=s[O];if(w=l!=null?l[O]:void 0,s.hasOwnProperty(O)&&E!==w&&(E!=null||w!=null))if(O==="style")if(w){for(h in w)!w.hasOwnProperty(h)||E&&E.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in E)E.hasOwnProperty(h)&&w[h]!==E[h]&&(r||(r={}),r[h]=E[h])}else r||(d||(d=[]),d.push(O,r)),r=E;else O==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(d=d||[]).push(O,E)):O==="children"?typeof E!="string"&&typeof E!="number"||(d=d||[]).push(O,""+E):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(u.hasOwnProperty(O)?(E!=null&&O==="onScroll"&&Le("scroll",e),d||w===E||(d=[])):(d=d||[]).push(O,E))}r&&(d=d||[]).push("style",r);var O=d;(t.updateQueue=O)&&(t.flags|=4)}},od=function(e,t,r,s){r!==s&&(t.flags|=4)};function li(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Lm(e,t,r){var s=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return at(t.type)&&Xi(),nt(t),null;case 3:return s=t.stateNode,cr(),Oe(st),Oe(et),ma(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Ga(Lt),Lt=null))),Oa(e,t),nt(t),null;case 5:fa(t);var l=Mn(ri.current);if(r=t.type,e!==null&&t.stateNode!=null)id(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=Mn(Bt.current),eo(t)){s=t.stateNode,r=t.type;var d=t.memoizedProps;switch(s[Ft]=t,s[Zr]=d,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(l=0;l<Xr.length;l++)Le(Xr[l],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":Ke(s,d),Le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Le("invalid",s);break;case"textarea":Vl(s,d),Le("invalid",s)}ps(r,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var w=d[h];h==="children"?typeof w=="string"?s.textContent!==w&&(d.suppressHydrationWarning!==!0&&qi(s.textContent,w,e),l=["children",w]):typeof w=="number"&&s.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&qi(s.textContent,w,e),l=["children",""+w]):u.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Le("scroll",s)}switch(r){case"input":qe(s),$l(s,d,!0);break;case"textarea":qe(s),Gl(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Ui)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(r,{is:s.is}):(e=h.createElement(r),r==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,r),e[Ft]=t,e[Zr]=s,rd(e,t,!1,!1),t.stateNode=e;e:{switch(h=ms(r,s),r){case"dialog":Le("cancel",e),Le("close",e),l=s;break;case"iframe":case"object":case"embed":Le("load",e),l=s;break;case"video":case"audio":for(l=0;l<Xr.length;l++)Le(Xr[l],e);l=s;break;case"source":Le("error",e),l=s;break;case"img":case"image":case"link":Le("error",e),Le("load",e),l=s;break;case"details":Le("toggle",e),l=s;break;case"input":Ke(e,s),l=be(e,s),Le("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=X({},s,{value:void 0}),Le("invalid",e);break;case"textarea":Vl(e,s),l=ds(e,s),Le("invalid",e);break;default:l=s}ps(r,l),w=l;for(d in w)if(w.hasOwnProperty(d)){var E=w[d];d==="style"?Yl(e,E):d==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&ql(e,E)):d==="children"?typeof E=="string"?(r!=="textarea"||E!=="")&&_r(e,E):typeof E=="number"&&_r(e,""+E):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?E!=null&&d==="onScroll"&&Le("scroll",e):E!=null&&S(e,d,E,h))}switch(r){case"input":qe(e),$l(e,s,!1);break;case"textarea":qe(e),Gl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ae(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?Wn(e,!!s.multiple,d,!1):s.defaultValue!=null&&Wn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ui)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)od(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=Mn(ri.current),Mn(Bt.current),eo(t)){if(s=t.stateNode,r=t.memoizedProps,s[Ft]=t,(d=s.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:qi(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(s.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Ft]=t,t.stateNode=s}return nt(t),null;case 13:if(Oe(Ae),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&gt!==null&&t.mode&1&&!(t.flags&128))lc(),sr(),t.flags|=98560,d=!1;else if(d=eo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Ft]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),d=!1}else Lt!==null&&(Ga(Lt),Lt=null),d=!0;if(!d)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?We===0&&(We=3):Ua())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return cr(),Oa(e,t),e===null&&Qr(t.stateNode.containerInfo),nt(t),null;case 10:return aa(t.type._context),nt(t),null;case 17:return at(t.type)&&Xi(),nt(t),null;case 19:if(Oe(Ae),d=t.memoizedState,d===null)return nt(t),null;if(s=(t.flags&128)!==0,h=d.rendering,h===null)if(s)li(d,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=so(e),h!==null){for(t.flags|=128,li(d,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)d=r,e=s,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me(Ae,Ae.current&1|2),t.child}e=e.sibling}d.tail!==null&&Be()>mr&&(t.flags|=128,s=!0,li(d,!1),t.lanes=4194304)}else{if(!s)if(e=so(h),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),li(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Ne)return nt(t),null}else 2*Be()-d.renderingStartTime>mr&&r!==1073741824&&(t.flags|=128,s=!0,li(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(r=d.last,r!==null?r.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Be(),t.sibling=null,r=Ae.current,Me(Ae,s?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return qa(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?vt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Om(e,t){switch(ta(t),t.tag){case 1:return at(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),Oe(st),Oe(et),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fa(t),null;case 13:if(Oe(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Ae),null;case 4:return cr(),null;case 10:return aa(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var go=!1,rt=!1,Im=typeof WeakSet=="function"?WeakSet:Set,ne=null;function fr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Re(e,t,s)}else r.current=null}function Ia(e,t,r){try{r()}catch(s){Re(e,t,s)}}var sd=!1;function Nm(e,t){if(qs=Ni,e=Ru(),Rs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var h=0,w=-1,E=-1,O=0,Y=0,K=e,q=null;t:for(;;){for(var te;K!==r||l!==0&&K.nodeType!==3||(w=h+l),K!==d||s!==0&&K.nodeType!==3||(E=h+s),K.nodeType===3&&(h+=K.nodeValue.length),(te=K.firstChild)!==null;)q=K,K=te;for(;;){if(K===e)break t;if(q===r&&++O===l&&(w=h),q===d&&++Y===s&&(E=h),(te=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=te}r=w===-1||E===-1?null:{start:w,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Us={focusedElem:e,selectionRange:r},Ni=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,$e=ie.memoizedState,P=t.stateNode,T=P.getSnapshotBeforeUpdate(t.elementType===t.type?oe:Ot(t.type,oe),$e);P.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(J){Re(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return ie=sd,sd=!1,ie}function ui(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&Ia(t,r,d)}l=l.next}while(l!==s)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Na(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ad(e){var t=e.alternate;t!==null&&(e.alternate=null,ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Zr],delete t[Ks],delete t[vm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aa(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ui));else if(s!==4&&(e=e.child,e!==null))for(Aa(e,t,r),e=e.sibling;e!==null;)Aa(e,t,r),e=e.sibling}function Da(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Da(e,t,r),e=e.sibling;e!==null;)Da(e,t,r),e=e.sibling}var Ze=null,It=!1;function gn(e,t,r){for(r=r.child;r!==null;)cd(e,t,r),r=r.sibling}function cd(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Pi,r)}catch{}switch(r.tag){case 5:rt||fr(r,t);case 6:var s=Ze,l=It;Ze=null,gn(e,t,r),Ze=s,It=l,Ze!==null&&(It?(e=Ze,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ze.removeChild(r.stateNode));break;case 18:Ze!==null&&(It?(e=Ze,r=r.stateNode,e.nodeType===8?Qs(e.parentNode,r):e.nodeType===1&&Qs(e,r),$r(e)):Qs(Ze,r.stateNode));break;case 4:s=Ze,l=It,Ze=r.stateNode.containerInfo,It=!0,gn(e,t,r),Ze=s,It=l;break;case 0:case 11:case 14:case 15:if(!rt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&(d&2||d&4)&&Ia(r,t,h),l=l.next}while(l!==s)}gn(e,t,r);break;case 1:if(!rt&&(fr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(w){Re(r,t,w)}gn(e,t,r);break;case 21:gn(e,t,r);break;case 22:r.mode&1?(rt=(s=rt)||r.memoizedState!==null,gn(e,t,r),rt=s):gn(e,t,r);break;default:gn(e,t,r)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Im),t.forEach(function(s){var l=Gm.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function Nt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var d=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ze=w.stateNode,It=!1;break e;case 3:Ze=w.stateNode.containerInfo,It=!0;break e;case 4:Ze=w.stateNode.containerInfo,It=!0;break e}w=w.return}if(Ze===null)throw Error(o(160));cd(d,h,l),Ze=null,It=!1;var E=l.alternate;E!==null&&(E.return=null),l.return=null}catch(O){Re(l,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Vt(e),s&4){try{ui(3,e,e.return),vo(3,e)}catch(oe){Re(e,e.return,oe)}try{ui(5,e,e.return)}catch(oe){Re(e,e.return,oe)}}break;case 1:Nt(t,e),Vt(e),s&512&&r!==null&&fr(r,r.return);break;case 5:if(Nt(t,e),Vt(e),s&512&&r!==null&&fr(r,r.return),e.flags&32){var l=e.stateNode;try{_r(l,"")}catch(oe){Re(e,e.return,oe)}}if(s&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=r!==null?r.memoizedProps:d,w=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&Pt(l,d),ms(w,h);var O=ms(w,d);for(h=0;h<E.length;h+=2){var Y=E[h],K=E[h+1];Y==="style"?Yl(l,K):Y==="dangerouslySetInnerHTML"?ql(l,K):Y==="children"?_r(l,K):S(l,Y,K,O)}switch(w){case"input":Gn(l,d);break;case"textarea":Hl(l,d);break;case"select":var q=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var te=d.value;te!=null?Wn(l,!!d.multiple,te,!1):q!==!!d.multiple&&(d.defaultValue!=null?Wn(l,!!d.multiple,d.defaultValue,!0):Wn(l,!!d.multiple,d.multiple?[]:"",!1))}l[Zr]=d}catch(oe){Re(e,e.return,oe)}}break;case 6:if(Nt(t,e),Vt(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(oe){Re(e,e.return,oe)}}break;case 3:if(Nt(t,e),Vt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(oe){Re(e,e.return,oe)}break;case 4:Nt(t,e),Vt(e);break;case 13:Nt(t,e),Vt(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(Ba=Be())),s&4&&dd(e);break;case 22:if(Y=r!==null&&r.memoizedState!==null,e.mode&1?(rt=(O=rt)||Y,Nt(t,e),rt=O):Nt(t,e),Vt(e),s&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!Y&&e.mode&1)for(ne=e,Y=e.child;Y!==null;){for(K=ne=Y;ne!==null;){switch(q=ne,te=q.child,q.tag){case 0:case 11:case 14:case 15:ui(4,q,q.return);break;case 1:fr(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){s=q,r=q.return;try{t=s,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(oe){Re(s,r,oe)}}break;case 5:fr(q,q.return);break;case 22:if(q.memoizedState!==null){hd(K);continue}}te!==null?(te.return=q,ne=te):hd(K)}Y=Y.sibling}e:for(Y=null,K=e;;){if(K.tag===5){if(Y===null){Y=K;try{l=K.stateNode,O?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=K.stateNode,E=K.memoizedProps.style,h=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Ul("display",h))}catch(oe){Re(e,e.return,oe)}}}else if(K.tag===6){if(Y===null)try{K.stateNode.nodeValue=O?"":K.memoizedProps}catch(oe){Re(e,e.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===e)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===e)break e;for(;K.sibling===null;){if(K.return===null||K.return===e)break e;Y===K&&(Y=null),K=K.return}Y===K&&(Y=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Nt(t,e),Vt(e),s&4&&dd(e);break;case 21:break;default:Nt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ld(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(_r(l,""),s.flags&=-33);var d=ud(e);Da(e,d,l);break;case 3:case 4:var h=s.stateNode.containerInfo,w=ud(e);Aa(e,w,h);break;default:throw Error(o(161))}}catch(E){Re(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,r){ne=e,pd(e)}function pd(e,t,r){for(var s=(e.mode&1)!==0;ne!==null;){var l=ne,d=l.child;if(l.tag===22&&s){var h=l.memoizedState!==null||go;if(!h){var w=l.alternate,E=w!==null&&w.memoizedState!==null||rt;w=go;var O=rt;if(go=h,(rt=E)&&!O)for(ne=l;ne!==null;)h=ne,E=h.child,h.tag===22&&h.memoizedState!==null?gd(l):E!==null?(E.return=h,ne=E):gd(l);for(;d!==null;)ne=d,pd(d),d=d.sibling;ne=l,go=w,rt=O}md(e)}else l.subtreeFlags&8772&&d!==null?(d.return=l,ne=d):md(e)}}function md(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||vo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!rt)if(r===null)s.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ot(t.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&hc(t,d,s);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hc(t,h,r)}break;case 5:var w=t.stateNode;if(r===null&&t.flags&4){r=w;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&r.focus();break;case"img":E.src&&(r.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var Y=O.memoizedState;if(Y!==null){var K=Y.dehydrated;K!==null&&$r(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}rt||t.flags&512&&Na(t)}catch(q){Re(t,t.return,q)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function hd(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function gd(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{vo(4,t)}catch(E){Re(t,r,E)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(E){Re(t,l,E)}}var d=t.return;try{Na(t)}catch(E){Re(t,d,E)}break;case 5:var h=t.return;try{Na(t)}catch(E){Re(t,h,E)}}}catch(E){Re(t,t.return,E)}if(t===e){ne=null;break}var w=t.sibling;if(w!==null){w.return=t.return,ne=w;break}ne=t.return}}var Dm=Math.ceil,yo=_.ReactCurrentDispatcher,Ra=_.ReactCurrentOwner,Tt=_.ReactCurrentBatchConfig,ke=0,Ye=null,Ve=null,Je=0,vt=0,pr=dn(0),We=0,ci=null,On=0,xo=0,Fa=0,di=null,ut=null,Ba=0,mr=1/0,Zt=null,wo=!1,$a=null,vn=null,So=!1,yn=null,ko=0,fi=0,Va=null,bo=-1,Eo=0;function ot(){return ke&6?Be():bo!==-1?bo:bo=Be()}function xn(e){return e.mode&1?ke&2&&Je!==0?Je&-Je:wm.transition!==null?(Eo===0&&(Eo=uu()),Eo):(e=je,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function At(e,t,r,s){if(50<fi)throw fi=0,Va=null,Error(o(185));Ar(e,r,s),(!(ke&2)||e!==Ye)&&(e===Ye&&(!(ke&2)&&(xo|=r),We===4&&wn(e,Je)),ct(e,s),r===1&&ke===0&&!(t.mode&1)&&(mr=Be()+500,Ki&&pn()))}function ct(e,t){var r=e.callbackNode;wp(e,t);var s=Li(e,e===Ye?Je:0);if(s===0)r!==null&&su(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&su(r),t===1)e.tag===0?xm(yd.bind(null,e)):rc(yd.bind(null,e)),hm(function(){!(ke&6)&&pn()}),r=null;else{switch(cu(s)){case 1:r=Ss;break;case 4:r=au;break;case 16:r=zi;break;case 536870912:r=lu;break;default:r=zi}r=Td(r,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vd(e,t){if(bo=-1,Eo=0,ke&6)throw Error(o(327));var r=e.callbackNode;if(hr()&&e.callbackNode!==r)return null;var s=Li(e,e===Ye?Je:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Co(e,s);else{t=s;var l=ke;ke|=2;var d=wd();(Ye!==e||Je!==t)&&(Zt=null,mr=Be()+500,Nn(e,t));do try{Bm();break}catch(w){xd(e,w)}while(!0);sa(),yo.current=d,ke=l,Ve!==null?t=0:(Ye=null,Je=0,t=We)}if(t!==0){if(t===2&&(l=ks(e),l!==0&&(s=l,t=Ha(e,l))),t===1)throw r=ci,Nn(e,0),wn(e,s),ct(e,Be()),r;if(t===6)wn(e,s);else{if(l=e.current.alternate,!(s&30)&&!Rm(l)&&(t=Co(e,s),t===2&&(d=ks(e),d!==0&&(s=d,t=Ha(e,d))),t===1))throw r=ci,Nn(e,0),wn(e,s),ct(e,Be()),r;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:An(e,ut,Zt);break;case 3:if(wn(e,s),(s&130023424)===s&&(t=Ba+500-Be(),10<t)){if(Li(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){ot(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xs(An.bind(null,e,ut,Zt),t);break}An(e,ut,Zt);break;case 4:if(wn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var h=31-_t(s);d=1<<h,h=t[h],h>l&&(l=h),s&=~d}if(s=l,s=Be()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Dm(s/1960))-s,10<s){e.timeoutHandle=Xs(An.bind(null,e,ut,Zt),s);break}An(e,ut,Zt);break;case 5:An(e,ut,Zt);break;default:throw Error(o(329))}}}return ct(e,Be()),e.callbackNode===r?vd.bind(null,e):null}function Ha(e,t){var r=di;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Co(e,t),e!==2&&(t=ut,ut=r,t!==null&&Ga(t)),e}function Ga(e){ut===null?ut=e:ut.push.apply(ut,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],d=l.getSnapshot;l=l.value;try{if(!Mt(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Fa,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-_t(t),s=1<<r;e[r]=-1,t&=~s}}function yd(e){if(ke&6)throw Error(o(327));hr();var t=Li(e,0);if(!(t&1))return ct(e,Be()),null;var r=Co(e,t);if(e.tag!==0&&r===2){var s=ks(e);s!==0&&(t=s,r=Ha(e,s))}if(r===1)throw r=ci,Nn(e,0),wn(e,t),ct(e,Be()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,ut,Zt),ct(e,Be()),null}function Wa(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(mr=Be()+500,Ki&&pn())}}function In(e){yn!==null&&yn.tag===0&&!(ke&6)&&hr();var t=ke;ke|=1;var r=Tt.transition,s=je;try{if(Tt.transition=null,je=1,e)return e()}finally{je=s,Tt.transition=r,ke=t,!(ke&6)&&pn()}}function qa(){vt=pr.current,Oe(pr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,mm(r)),Ve!==null)for(r=Ve.return;r!==null;){var s=r;switch(ta(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xi();break;case 3:cr(),Oe(st),Oe(et),ma();break;case 5:fa(s);break;case 4:cr();break;case 13:Oe(Ae);break;case 19:Oe(Ae);break;case 10:aa(s.type._context);break;case 22:case 23:qa()}r=r.return}if(Ye=e,Ve=e=Sn(e.current,null),Je=vt=t,We=0,ci=null,Fa=xo=On=0,ut=di=null,_n!==null){for(t=0;t<_n.length;t++)if(r=_n[t],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,d=r.pending;if(d!==null){var h=d.next;d.next=l,s.next=h}r.pending=s}_n=null}return e}function xd(e,t){do{var r=Ve;try{if(sa(),ao.current=fo,lo){for(var s=De.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}lo=!1}if(Ln=0,Ue=Ge=De=null,ii=!1,oi=0,Ra.current=null,r===null||r.return===null){We=1,ci=t,Ve=null;break}e:{var d=e,h=r.return,w=r,E=t;if(t=Je,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var O=E,Y=w,K=Y.tag;if(!(Y.mode&1)&&(K===0||K===11||K===15)){var q=Y.alternate;q?(Y.updateQueue=q.updateQueue,Y.memoizedState=q.memoizedState,Y.lanes=q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var te=Gc(h);if(te!==null){te.flags&=-257,Wc(te,h,w,d,t),te.mode&1&&Hc(d,O,t),t=te,E=O;var ie=t.updateQueue;if(ie===null){var oe=new Set;oe.add(E),t.updateQueue=oe}else ie.add(E);break e}else{if(!(t&1)){Hc(d,O,t),Ua();break e}E=Error(o(426))}}else if(Ne&&w.mode&1){var $e=Gc(h);if($e!==null){!($e.flags&65536)&&($e.flags|=256),Wc($e,h,w,d,t),ia(dr(E,w));break e}}d=E=dr(E,w),We!==4&&(We=2),di===null?di=[d]:di.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var P=$c(d,E,t);mc(d,P);break e;case 1:w=E;var T=d.type,L=d.stateNode;if(!(d.flags&128)&&(typeof T.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(vn===null||!vn.has(L)))){d.flags|=65536,t&=-t,d.lanes|=t;var J=Vc(d,w,t);mc(d,J);break e}}d=d.return}while(d!==null)}kd(r)}catch(se){t=se,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(!0)}function wd(){var e=yo.current;return yo.current=fo,e===null?fo:e}function Ua(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(On&268435455)&&!(xo&268435455)||wn(Ye,Je)}function Co(e,t){var r=ke;ke|=2;var s=wd();(Ye!==e||Je!==t)&&(Zt=null,Nn(e,t));do try{Fm();break}catch(l){xd(e,l)}while(!0);if(sa(),ke=r,yo.current=s,Ve!==null)throw Error(o(261));return Ye=null,Je=0,We}function Fm(){for(;Ve!==null;)Sd(Ve)}function Bm(){for(;Ve!==null&&!dp();)Sd(Ve)}function Sd(e){var t=Cd(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?kd(e):Ve=t,Ra.current=null}function kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Om(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(r=Lm(r,t,vt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function An(e,t,r){var s=je,l=Tt.transition;try{Tt.transition=null,je=1,$m(e,t,r,s)}finally{Tt.transition=l,je=s}return null}function $m(e,t,r,s){do hr();while(yn!==null);if(ke&6)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(Sp(e,d),e===Ye&&(Ve=Ye=null,Je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||So||(So=!0,Td(zi,function(){return hr(),null})),d=(r.flags&15990)!==0,r.subtreeFlags&15990||d){d=Tt.transition,Tt.transition=null;var h=je;je=1;var w=ke;ke|=4,Ra.current=null,Nm(e,r),fd(r,e),am(Us),Ni=!!qs,Us=qs=null,e.current=r,Am(r),fp(),ke=w,je=h,Tt.transition=d}else e.current=r;if(So&&(So=!1,yn=e,ko=l),d=e.pendingLanes,d===0&&(vn=null),hp(r.stateNode),ct(e,Be()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(wo)throw wo=!1,e=$a,$a=null,e;return ko&1&&e.tag!==0&&hr(),d=e.pendingLanes,d&1?e===Va?fi++:(fi=0,Va=e):fi=0,pn(),null}function hr(){if(yn!==null){var e=cu(ko),t=Tt.transition,r=je;try{if(Tt.transition=null,je=16>e?16:e,yn===null)var s=!1;else{if(e=yn,yn=null,ko=0,ke&6)throw Error(o(331));var l=ke;for(ke|=4,ne=e.current;ne!==null;){var d=ne,h=d.child;if(ne.flags&16){var w=d.deletions;if(w!==null){for(var E=0;E<w.length;E++){var O=w[E];for(ne=O;ne!==null;){var Y=ne;switch(Y.tag){case 0:case 11:case 15:ui(8,Y,d)}var K=Y.child;if(K!==null)K.return=Y,ne=K;else for(;ne!==null;){Y=ne;var q=Y.sibling,te=Y.return;if(ad(Y),Y===O){ne=null;break}if(q!==null){q.return=te,ne=q;break}ne=te}}}var ie=d.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var $e=oe.sibling;oe.sibling=null,oe=$e}while(oe!==null)}}ne=d}}if(d.subtreeFlags&2064&&h!==null)h.return=d,ne=h;else e:for(;ne!==null;){if(d=ne,d.flags&2048)switch(d.tag){case 0:case 11:case 15:ui(9,d,d.return)}var P=d.sibling;if(P!==null){P.return=d.return,ne=P;break e}ne=d.return}}var T=e.current;for(ne=T;ne!==null;){h=ne;var L=h.child;if(h.subtreeFlags&2064&&L!==null)L.return=h,ne=L;else e:for(h=T;ne!==null;){if(w=ne,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:vo(9,w)}}catch(se){Re(w,w.return,se)}if(w===h){ne=null;break e}var J=w.sibling;if(J!==null){J.return=w.return,ne=J;break e}ne=w.return}}if(ke=l,pn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Pi,e)}catch{}s=!0}return s}finally{je=r,Tt.transition=t}}return!1}function bd(e,t,r){t=dr(r,t),t=$c(e,t,1),e=hn(e,t,1),t=ot(),e!==null&&(Ar(e,1,t),ct(e,t))}function Re(e,t,r){if(e.tag===3)bd(e,e,r);else for(;t!==null;){if(t.tag===3){bd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(vn===null||!vn.has(s))){e=dr(r,e),e=Vc(t,e,1),t=hn(t,e,1),e=ot(),t!==null&&(Ar(t,1,e),ct(t,e));break}}t=t.return}}function Vm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(Je&r)===r&&(We===4||We===3&&(Je&130023424)===Je&&500>Be()-Ba?Nn(e,0):Fa|=r),ct(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var r=ot();e=Xt(e,t),e!==null&&(Ar(e,t,r),ct(e,r))}function Hm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(e,r)}function Gm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),Ed(e,r)}var Cd;Cd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return lt=!1,Mm(e,t,r);lt=!!(e.flags&131072)}else lt=!1,Ne&&t.flags&1048576&&ic(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ho(e,t),e=t.pendingProps;var l=rr(t,et.current);ur(t,r),l=va(null,t,s,e,l,r);var d=ya();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(s)?(d=!0,Qi(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ca(t),l.updater=po,t.stateNode=l,l._reactInternals=t,Ea(t,s,e,r),t=za(null,t,s,!0,d,r)):(t.tag=0,Ne&&d&&ea(t),it(null,t,l,r),t=t.child),t;case 16:s=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=qm(s),e=Ot(s,e),l){case 0:t=ja(null,t,s,e,r);break e;case 1:t=Kc(null,t,s,e,r);break e;case 11:t=qc(null,t,s,e,r);break e;case 14:t=Uc(null,t,s,Ot(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ot(s,l),ja(e,t,s,l,r);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ot(s,l),Kc(e,t,s,l,r);case 3:e:{if(Zc(t),e===null)throw Error(o(387));s=t.pendingProps,d=t.memoizedState,l=d.element,pc(e,t),oo(t,s,null,r);var h=t.memoizedState;if(s=h.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=dr(Error(o(423)),t),t=Jc(e,t,s,r,l);break e}else if(s!==l){l=dr(Error(o(424)),t),t=Jc(e,t,s,r,l);break e}else for(gt=cn(t.stateNode.containerInfo.firstChild),ht=t,Ne=!0,Lt=null,r=dc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),s===l){t=Kt(e,t,r);break e}it(e,t,s,r)}t=t.child}return t;case 5:return gc(t),e===null&&ra(t),s=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,Ys(s,l)?h=null:d!==null&&Ys(s,d)&&(t.flags|=32),Qc(e,t),it(e,t,h,r),t.child;case 6:return e===null&&ra(t),null;case 13:return ed(e,t,r);case 4:return da(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ar(t,null,s,r):it(e,t,s,r),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ot(s,l),qc(e,t,s,l,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,d=t.memoizedProps,h=l.value,Me(no,s._currentValue),s._currentValue=h,d!==null)if(Mt(d.value,h)){if(d.children===l.children&&!st.current){t=Kt(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){h=d.child;for(var E=w.firstContext;E!==null;){if(E.context===s){if(d.tag===1){E=Qt(-1,r&-r),E.tag=2;var O=d.updateQueue;if(O!==null){O=O.shared;var Y=O.pending;Y===null?E.next=E:(E.next=Y.next,Y.next=E),O.pending=E}}d.lanes|=r,E=d.alternate,E!==null&&(E.lanes|=r),la(d.return,r,t),w.lanes|=r;break}E=E.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(o(341));h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),la(h,r,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}it(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,ur(t,r),l=Et(l),s=s(l),t.flags|=1,it(e,t,s,r),t.child;case 14:return s=t.type,l=Ot(s,t.pendingProps),l=Ot(s.type,l),Uc(e,t,s,l,r);case 15:return Yc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ot(s,l),ho(e,t),t.tag=1,at(s)?(e=!0,Qi(t)):e=!1,ur(t,r),Fc(t,s,l),Ea(t,s,l,r),za(null,t,s,!0,e,r);case 19:return nd(e,t,r);case 22:return Xc(e,t,r)}throw Error(o(156,t.tag))};function Td(e,t){return ou(e,t)}function Wm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,r,s){return new Wm(e,t,r,s)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===re)return 14}return 2}function Sn(e,t){var r=e.alternate;return r===null?(r=jt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function To(e,t,r,s,l,d){var h=2;if(s=e,typeof e=="function")Ya(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case Q:return Dn(r.children,l,d,t);case G:h=8,l|=8;break;case H:return e=jt(12,r,t,l|2),e.elementType=H,e.lanes=d,e;case $:return e=jt(13,r,t,l),e.elementType=$,e.lanes=d,e;case U:return e=jt(19,r,t,l),e.elementType=U,e.lanes=d,e;case xe:return jo(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:h=10;break e;case R:h=9;break e;case D:h=11;break e;case re:h=14;break e;case me:h=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=jt(h,r,t,l),t.elementType=e,t.type=s,t.lanes=d,t}function Dn(e,t,r,s){return e=jt(7,e,s,t),e.lanes=r,e}function jo(e,t,r,s){return e=jt(22,e,s,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Xa(e,t,r){return e=jt(6,e,null,t),e.lanes=r,e}function Qa(e,t,r){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,r,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ka(e,t,r,s,l,d,h,w,E){return e=new Um(e,t,r,w,E),t===1?(t=1,d===!0&&(t|=8)):t=0,d=jt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ca(d),e}function Ym(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function jd(e){if(!e)return fn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(at(r))return tc(e,r,t)}return t}function zd(e,t,r,s,l,d,h,w,E){return e=Ka(r,s,!0,e,l,d,h,w,E),e.context=jd(null),r=e.current,s=ot(),l=xn(r),d=Qt(s,l),d.callback=t??null,hn(r,d,l),e.current.lanes=l,Ar(e,l,s),ct(e,s),e}function zo(e,t,r,s){var l=t.current,d=ot(),h=xn(l);return r=jd(r),t.context===null?t.context=r:t.pendingContext=r,t=Qt(d,h),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=hn(l,t,h),e!==null&&(At(e,l,h,d),io(e,l,h)),h}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Za(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}_o.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));zo(e,t,null,null)},_o.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){zo(null,e,null,null)}),t[Wt]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<an.length&&t!==0&&t<an[r].priority;r++);an.splice(r,0,e),r===0&&gu(e)}};function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Xm(e,t,r,s,l){if(l){if(typeof s=="function"){var d=s;s=function(){var O=Po(h);d.call(O)}}var h=zd(t,s,e,0,null,!1,!1,"",Md);return e._reactRootContainer=h,e[Wt]=h.current,Qr(e.nodeType===8?e.parentNode:e),In(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var w=s;s=function(){var O=Po(E);w.call(O)}}var E=Ka(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=E,e[Wt]=E.current,Qr(e.nodeType===8?e.parentNode:e),In(function(){zo(t,E,r,s)}),E}function Lo(e,t,r,s,l){var d=r._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var w=l;l=function(){var E=Po(h);w.call(E)}}zo(t,h,e,l)}else h=Xm(r,t,e,l,s);return Po(h)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Nr(t.pendingLanes);r!==0&&(Es(t,r|1),ct(t,Be()),!(ke&6)&&(mr=Be()+500,pn()))}break;case 13:In(function(){var s=Xt(e,1);if(s!==null){var l=ot();At(s,e,1,l)}}),Za(e,1)}},Cs=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var r=ot();At(t,e,134217728,r)}Za(e,134217728)}},fu=function(e){if(e.tag===13){var t=xn(e),r=Xt(e,t);if(r!==null){var s=ot();At(r,e,t,s)}Za(e,t)}},pu=function(){return je},mu=function(e,t){var r=je;try{return je=e,t()}finally{je=r}},vs=function(e,t,r){switch(t){case"input":if(Gn(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=Yi(s);if(!l)throw Error(o(90));Fe(s),Gn(s,l)}}}break;case"textarea":Hl(e,r);break;case"select":t=r.value,t!=null&&Wn(e,!!r.multiple,t,!1)}},Zl=Wa,Jl=In;var Qm={usingClientEntryPoint:!1,Events:[Jr,tr,Yi,Ql,Kl,Wa]},pi={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Km={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Pi=Oo.inject(Km),Rt=Oo}catch{}}return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm,dt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!el(t))throw Error(o(200));return Ym(e,t,null,r)},dt.createRoot=function(e,t){if(!el(e))throw Error(o(299));var r=!1,s="",l=_d;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ka(e,1,!1,null,null,r,!1,s,l),e[Wt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Ja(t)},dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},dt.flushSync=function(e){return In(e)},dt.hydrate=function(e,t,r){if(!Mo(t))throw Error(o(200));return Lo(null,e,t,!0,r)},dt.hydrateRoot=function(e,t,r){if(!el(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,l=!1,d="",h=_d;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=zd(t,null,e,1,r??null,l,!1,d,h),e[Wt]=t.current,Qr(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new _o(t)},dt.render=function(e,t,r){if(!Mo(t))throw Error(o(200));return Lo(null,e,t,!1,r)},dt.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(o(40));return e._reactRootContainer?(In(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},dt.unstable_batchedUpdates=Wa,dt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Mo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Lo(e,t,r,!1,s)},dt.version="18.3.1-next-f1338f8080-20240426",dt}var Fd;function oh(){if(Fd)return rl.exports;Fd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),rl.exports=ih(),rl.exports}var Bd;function sh(){if(Bd)return Io;Bd=1;var i=oh();return Io.createRoot=i.createRoot,Io.hydrateRoot=i.hydrateRoot,Io}var ah=sh(),ft=function(){return ft=Object.assign||function(n){for(var o,a=1,u=arguments.length;a<u;a++){o=arguments[a];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},ft.apply(this,arguments)};function wi(i,n,o){if(o||arguments.length===2)for(var a=0,u=n.length,c;a<u;a++)(c||!(a in n))&&(c||(c=Array.prototype.slice.call(n,0,a)),c[a]=n[a]);return i.concat(c||Array.prototype.slice.call(n))}var Ie="-ms-",yi="-moz-",Te="-webkit-",pf="comm",ns="rule",Il="decl",lh="@import",mf="@keyframes",uh="@layer",hf=Math.abs,Nl=String.fromCharCode,wl=Object.assign;function ch(i,n){return Qe(i,0)^45?(((n<<2^Qe(i,0))<<2^Qe(i,1))<<2^Qe(i,2))<<2^Qe(i,3):0}function gf(i){return i.trim()}function tn(i,n){return(i=n.exec(i))?i[0]:i}function we(i,n,o){return i.replace(n,o)}function Bo(i,n,o){return i.indexOf(n,o)}function Qe(i,n){return i.charCodeAt(n)|0}function kr(i,n,o){return i.slice(n,o)}function Ht(i){return i.length}function vf(i){return i.length}function vi(i,n){return n.push(i),i}function dh(i,n){return i.map(n).join("")}function $d(i,n){return i.filter(function(o){return!tn(o,n)})}var rs=1,br=1,yf=0,zt=0,He=0,jr="";function is(i,n,o,a,u,c,p,g){return{value:i,root:n,parent:o,type:a,props:u,children:c,line:rs,column:br,length:p,return:"",siblings:g}}function bn(i,n){return wl(is("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function gr(i){for(;i.root;)i=bn(i.root,{children:[i]});vi(i,i.siblings)}function fh(){return He}function ph(){return He=zt>0?Qe(jr,--zt):0,br--,He===10&&(br=1,rs--),He}function Dt(){return He=zt<yf?Qe(jr,zt++):0,br++,He===10&&(br=1,rs++),He}function Fn(){return Qe(jr,zt)}function $o(){return zt}function os(i,n){return kr(jr,i,n)}function Sl(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mh(i){return rs=br=1,yf=Ht(jr=i),zt=0,[]}function hh(i){return jr="",i}function sl(i){return gf(os(zt-1,kl(i===91?i+2:i===40?i+1:i)))}function gh(i){for(;(He=Fn())&&He<33;)Dt();return Sl(i)>2||Sl(He)>3?"":" "}function vh(i,n){for(;--n&&Dt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return os(i,$o()+(n<6&&Fn()==32&&Dt()==32))}function kl(i){for(;Dt();)switch(He){case i:return zt;case 34:case 39:i!==34&&i!==39&&kl(He);break;case 40:i===41&&kl(i);break;case 92:Dt();break}return zt}function yh(i,n){for(;Dt()&&i+He!==57;)if(i+He===84&&Fn()===47)break;return"/*"+os(n,zt-1)+"*"+Nl(i===47?i:Dt())}function xh(i){for(;!Sl(Fn());)Dt();return os(i,zt)}function wh(i){return hh(Vo("",null,null,null,[""],i=mh(i),0,[0],i))}function Vo(i,n,o,a,u,c,p,g,f){for(var x=0,v=0,y=p,k=0,b=0,z=0,I=1,B=1,M=1,C=0,S="",_=u,N=c,A=a,Q=S;B;)switch(z=C,C=Dt()){case 40:if(z!=108&&Qe(Q,y-1)==58){Bo(Q+=we(sl(C),"&","&\f"),"&\f",hf(x?g[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:Q+=sl(C);break;case 9:case 10:case 13:case 32:Q+=gh(z);break;case 92:Q+=vh($o()-1,7);continue;case 47:switch(Fn()){case 42:case 47:vi(Sh(yh(Dt(),$o()),n,o,f),f);break;default:Q+="/"}break;case 123*I:g[x++]=Ht(Q)*M;case 125*I:case 59:case 0:switch(C){case 0:case 125:B=0;case 59+v:M==-1&&(Q=we(Q,/\f/g,"")),b>0&&Ht(Q)-y&&vi(b>32?Hd(Q+";",a,o,y-1,f):Hd(we(Q," ","")+";",a,o,y-2,f),f);break;case 59:Q+=";";default:if(vi(A=Vd(Q,n,o,x,v,u,g,S,_=[],N=[],y,c),c),C===123)if(v===0)Vo(Q,n,A,A,_,c,y,g,N);else switch(k===99&&Qe(Q,3)===110?100:k){case 100:case 108:case 109:case 115:Vo(i,A,A,a&&vi(Vd(i,A,A,0,0,u,g,S,u,_=[],y,N),N),u,N,y,g,a?_:N);break;default:Vo(Q,A,A,A,[""],N,0,g,N)}}x=v=b=0,I=M=1,S=Q="",y=p;break;case 58:y=1+Ht(Q),b=z;default:if(I<1){if(C==123)--I;else if(C==125&&I++==0&&ph()==125)continue}switch(Q+=Nl(C),C*I){case 38:M=v>0?1:(Q+="\f",-1);break;case 44:g[x++]=(Ht(Q)-1)*M,M=1;break;case 64:Fn()===45&&(Q+=sl(Dt())),k=Fn(),v=y=Ht(S=Q+=xh($o())),C++;break;case 45:z===45&&Ht(Q)==2&&(I=0)}}return c}function Vd(i,n,o,a,u,c,p,g,f,x,v,y){for(var k=u-1,b=u===0?c:[""],z=vf(b),I=0,B=0,M=0;I<a;++I)for(var C=0,S=kr(i,k+1,k=hf(B=p[I])),_=i;C<z;++C)(_=gf(B>0?b[C]+" "+S:we(S,/&\f/g,b[C])))&&(f[M++]=_);return is(i,n,o,u===0?ns:g,f,x,v,y)}function Sh(i,n,o,a){return is(i,n,o,pf,Nl(fh()),kr(i,2,-2),0,a)}function Hd(i,n,o,a,u){return is(i,n,o,Il,kr(i,0,a),kr(i,a+1,-1),a,u)}function xf(i,n,o){switch(ch(i,n)){case 5103:return Te+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+i+i;case 4789:return yi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+i+yi+i+Ie+i+i;case 5936:switch(Qe(i,n+11)){case 114:return Te+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Te+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Te+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Te+i+Ie+i+i;case 6165:return Te+i+Ie+"flex-"+i+i;case 5187:return Te+i+we(i,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Ie+"flex-$1$2")+i;case 5443:return Te+i+Ie+"flex-item-"+we(i,/flex-|-self/g,"")+(tn(i,/flex-|baseline/)?"":Ie+"grid-row-"+we(i,/flex-|-self/g,""))+i;case 4675:return Te+i+Ie+"flex-line-pack"+we(i,/align-content|flex-|-self/g,"")+i;case 5548:return Te+i+Ie+we(i,"shrink","negative")+i;case 5292:return Te+i+Ie+we(i,"basis","preferred-size")+i;case 6060:return Te+"box-"+we(i,"-grow","")+Te+i+Ie+we(i,"grow","positive")+i;case 4554:return Te+we(i,/([^-])(transform)/g,"$1"+Te+"$2")+i;case 6187:return we(we(we(i,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),i,"")+i;case 5495:case 3959:return we(i,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return we(we(i,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+i+i;case 4200:if(!tn(i,/flex-|baseline/))return Ie+"grid-column-align"+kr(i,n)+i;break;case 2592:case 3360:return Ie+we(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(a,u){return n=u,tn(a.props,/grid-\w+-end/)})?~Bo(i+(o=o[n].value),"span",0)?i:Ie+we(i,"-start","")+i+Ie+"grid-row-span:"+(~Bo(o,"span",0)?tn(o,/\d+/):+tn(o,/\d+/)-+tn(i,/\d+/))+";":Ie+we(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(a){return tn(a.props,/grid-\w+-start/)})?i:Ie+we(we(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return we(i,/(.+)-inline(.+)/,Te+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(i)-1-n>6)switch(Qe(i,n+1)){case 109:if(Qe(i,n+4)!==45)break;case 102:return we(i,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+yi+(Qe(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~Bo(i,"stretch",0)?xf(we(i,"stretch","fill-available"),n,o)+i:i}break;case 5152:case 5920:return we(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,u,c,p,g,f,x){return Ie+u+":"+c+x+(p?Ie+u+"-span:"+(g?f:+f-+c)+x:"")+i});case 4949:if(Qe(i,n+6)===121)return we(i,":",":"+Te)+i;break;case 6444:switch(Qe(i,Qe(i,14)===45?18:11)){case 120:return we(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(Qe(i,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Ie+"$2box$3")+i;case 100:return we(i,":",":"+Ie)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(i,"scroll-","scroll-snap-")+i}return i}function Uo(i,n){for(var o="",a=0;a<i.length;a++)o+=n(i[a],a,i,n)||"";return o}function kh(i,n,o,a){switch(i.type){case uh:if(i.children.length)break;case lh:case Il:return i.return=i.return||i.value;case pf:return"";case mf:return i.return=i.value+"{"+Uo(i.children,a)+"}";case ns:if(!Ht(i.value=i.props.join(",")))return""}return Ht(o=Uo(i.children,a))?i.return=i.value+"{"+o+"}":""}function bh(i){var n=vf(i);return function(o,a,u,c){for(var p="",g=0;g<n;g++)p+=i[g](o,a,u,c)||"";return p}}function Eh(i){return function(n){n.root||(n=n.return)&&i(n)}}function Ch(i,n,o,a){if(i.length>-1&&!i.return)switch(i.type){case Il:i.return=xf(i.value,i.length,o);return;case mf:return Uo([bn(i,{value:we(i.value,"@","@"+Te)})],a);case ns:if(i.length)return dh(o=i.props,function(u){switch(tn(u,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gr(bn(i,{props:[we(u,/:(read-\w+)/,":"+yi+"$1")]})),gr(bn(i,{props:[u]})),wl(i,{props:$d(o,a)});break;case"::placeholder":gr(bn(i,{props:[we(u,/:(plac\w+)/,":"+Te+"input-$1")]})),gr(bn(i,{props:[we(u,/:(plac\w+)/,":"+yi+"$1")]})),gr(bn(i,{props:[we(u,/:(plac\w+)/,Ie+"input-$1")]})),gr(bn(i,{props:[u]})),wl(i,{props:$d(o,a)});break}return""})}}var Th={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},Er=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",wf="active",Sf="data-styled-version",ss="6.1.13",Al=`/*!sc*/
`,Yo=typeof window<"u"&&"HTMLElement"in window,jh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),as=Object.freeze([]),Cr=Object.freeze({});function zh(i,n,o){return o===void 0&&(o=Cr),i.theme!==o.theme&&i.theme||n||o.theme}var kf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ph=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_h=/(^-|-$)/g;function Gd(i){return i.replace(Ph,"-").replace(_h,"")}var Mh=/(a)(d)/gi,No=52,Wd=function(i){return String.fromCharCode(i+(i>25?39:97))};function bl(i){var n,o="";for(n=Math.abs(i);n>No;n=n/No|0)o=Wd(n%No)+o;return(Wd(n%No)+o).replace(Mh,"$1-$2")}var al,bf=5381,wr=function(i,n){for(var o=n.length;o;)i=33*i^n.charCodeAt(--o);return i},Ef=function(i){return wr(bf,i)};function Cf(i){return bl(Ef(i)>>>0)}function Lh(i){return i.displayName||i.name||"Component"}function ll(i){return typeof i=="string"&&!0}var Tf=typeof Symbol=="function"&&Symbol.for,jf=Tf?Symbol.for("react.memo"):60115,Oh=Tf?Symbol.for("react.forward_ref"):60112,Ih={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ah=((al={})[Oh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},al[jf]=zf,al);function qd(i){return("type"in(n=i)&&n.type.$$typeof)===jf?zf:"$$typeof"in i?Ah[i.$$typeof]:Ih;var n}var Dh=Object.defineProperty,Rh=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,Fh=Object.getOwnPropertyDescriptor,Bh=Object.getPrototypeOf,Yd=Object.prototype;function Pf(i,n,o){if(typeof n!="string"){if(Yd){var a=Bh(n);a&&a!==Yd&&Pf(i,a,o)}var u=Rh(n);Ud&&(u=u.concat(Ud(n)));for(var c=qd(i),p=qd(n),g=0;g<u.length;++g){var f=u[g];if(!(f in Nh||o&&o[f]||p&&f in p||c&&f in c)){var x=Fh(n,f);try{Dh(i,f,x)}catch{}}}}return i}function Tr(i){return typeof i=="function"}function Dl(i){return typeof i=="object"&&"styledComponentId"in i}function Rn(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function El(i,n){if(i.length===0)return"";for(var o=i[0],a=1;a<i.length;a++)o+=i[a];return o}function Si(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Cl(i,n,o){if(o===void 0&&(o=!1),!o&&!Si(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)i[a]=Cl(i[a],n[a]);else if(Si(n))for(var a in n)i[a]=Cl(i[a],n[a]);return i}function Rl(i,n){Object.defineProperty(i,"toString",{value:n})}function ki(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var $h=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var o=0,a=0;a<n;a++)o+=this.groupSizes[a];return o},i.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var a=this.groupSizes,u=a.length,c=u;n>=c;)if((c<<=1)<0)throw ki(16,"".concat(n));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var p=u;p<c;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(n+1),f=(p=0,o.length);p<f;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[n]++,g++)},i.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],a=this.indexOfGroup(n),u=a+o;this.groupSizes[n]=0;for(var c=a;c<u;c++)this.tag.deleteRule(a)}},i.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var a=this.groupSizes[n],u=this.indexOfGroup(n),c=u+a,p=u;p<c;p++)o+="".concat(this.tag.getRule(p)).concat(Al);return o},i}(),Ho=new Map,Xo=new Map,Go=1,Ao=function(i){if(Ho.has(i))return Ho.get(i);for(;Xo.has(Go);)Go++;var n=Go++;return Ho.set(i,n),Xo.set(n,i),n},Vh=function(i,n){Go=n+1,Ho.set(i,n),Xo.set(n,i)},Hh="style[".concat(Er,"][").concat(Sf,'="').concat(ss,'"]'),Gh=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wh=function(i,n,o){for(var a,u=o.split(","),c=0,p=u.length;c<p;c++)(a=u[c])&&i.registerName(n,a)},qh=function(i,n){for(var o,a=((o=n.textContent)!==null&&o!==void 0?o:"").split(Al),u=[],c=0,p=a.length;c<p;c++){var g=a[c].trim();if(g){var f=g.match(Gh);if(f){var x=0|parseInt(f[1],10),v=f[2];x!==0&&(Vh(v,x),Wh(i,v,f[3]),i.getTag().insertRules(x,u)),u.length=0}else u.push(g)}}},Xd=function(i){for(var n=document.querySelectorAll(Hh),o=0,a=n.length;o<a;o++){var u=n[o];u&&u.getAttribute(Er)!==wf&&(qh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function Uh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _f=function(i){var n=document.head,o=i||n,a=document.createElement("style"),u=function(g){var f=Array.from(g.querySelectorAll("style[".concat(Er,"]")));return f[f.length-1]}(o),c=u!==void 0?u.nextSibling:null;a.setAttribute(Er,wf),a.setAttribute(Sf,ss);var p=Uh();return p&&a.setAttribute("nonce",p),o.insertBefore(a,c),a},Yh=function(){function i(n){this.element=_f(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,u=0,c=a.length;u<c;u++){var p=a[u];if(p.ownerNode===o)return p}throw ki(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},i}(),Xh=function(){function i(n){this.element=_f(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var a=document.createTextNode(o);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),Qh=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),Qd=Yo,Kh={isServer:!Yo,useCSSOMInjection:!jh},Mf=function(){function i(n,o,a){n===void 0&&(n=Cr),o===void 0&&(o={});var u=this;this.options=ft(ft({},Kh),n),this.gs=o,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Yo&&Qd&&(Qd=!1,Xd(this)),Rl(this,function(){return function(c){for(var p=c.getTag(),g=p.length,f="",x=function(y){var k=function(M){return Xo.get(M)}(y);if(k===void 0)return"continue";var b=c.names.get(k),z=p.getGroup(y);if(b===void 0||!b.size||z.length===0)return"continue";var I="".concat(Er,".g").concat(y,'[id="').concat(k,'"]'),B="";b!==void 0&&b.forEach(function(M){M.length>0&&(B+="".concat(M,","))}),f+="".concat(z).concat(I,'{content:"').concat(B,'"}').concat(Al)},v=0;v<g;v++)x(v);return f}(u)})}return i.registerId=function(n){return Ao(n)},i.prototype.rehydrate=function(){!this.server&&Yo&&Xd(this)},i.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new i(ft(ft({},this.options),n),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var a=o.useCSSOMInjection,u=o.target;return o.isServer?new Qh(u):a?new Yh(u):new Xh(u)}(this.options),new $h(n)));var n},i.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},i.prototype.registerName=function(n,o){if(Ao(n),this.names.has(n))this.names.get(n).add(o);else{var a=new Set;a.add(o),this.names.set(n,a)}},i.prototype.insertRules=function(n,o,a){this.registerName(n,o),this.getTag().insertRules(Ao(n),a)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(Ao(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Zh=/&/g,Jh=/^\s*\/\/.*$/gm;function Lf(i,n){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Lf(o.children,n)),o})}function e0(i){var n,o,a,u=Cr,c=u.options,p=c===void 0?Cr:c,g=u.plugins,f=g===void 0?as:g,x=function(k,b,z){return z.startsWith(o)&&z.endsWith(o)&&z.replaceAll(o,"").length>0?".".concat(n):k},v=f.slice();v.push(function(k){k.type===ns&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(Zh,o).replace(a,x))}),p.prefix&&v.push(Ch),v.push(kh);var y=function(k,b,z,I){b===void 0&&(b=""),z===void 0&&(z=""),I===void 0&&(I="&"),n=I,o=b,a=new RegExp("\\".concat(o,"\\b"),"g");var B=k.replace(Jh,""),M=wh(z||b?"".concat(z," ").concat(b," { ").concat(B," }"):B);p.namespace&&(M=Lf(M,p.namespace));var C=[];return Uo(M,bh(v.concat(Eh(function(S){return C.push(S)})))),C};return y.hash=f.length?f.reduce(function(k,b){return b.name||ki(15),wr(k,b.name)},bf).toString():"",y}var t0=new Mf,Tl=e0(),Of=Ce.createContext({shouldForwardProp:void 0,styleSheet:t0,stylis:Tl});Of.Consumer;Ce.createContext(void 0);function Kd(){return ge.useContext(Of)}var If=function(){function i(n,o){var a=this;this.inject=function(u,c){c===void 0&&(c=Tl);var p=a.name+c.hash;u.hasNameForId(a.id,p)||u.insertRules(a.id,p,c(a.rules,p,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,Rl(this,function(){throw ki(12,String(a.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=Tl),this.name+n.hash},i}(),n0=function(i){return i>="A"&&i<="Z"};function Zd(i){for(var n="",o=0;o<i.length;o++){var a=i[o];if(o===1&&a==="-"&&i[0]==="-")return i;n0(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var Nf=function(i){return i==null||i===!1||i===""},Af=function(i){var n,o,a=[];for(var u in i){var c=i[u];i.hasOwnProperty(u)&&!Nf(c)&&(Array.isArray(c)&&c.isCss||Tr(c)?a.push("".concat(Zd(u),":"),c,";"):Si(c)?a.push.apply(a,wi(wi(["".concat(u," {")],Af(c),!1),["}"],!1)):a.push("".concat(Zd(u),": ").concat((n=u,(o=c)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Th||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return a};function Bn(i,n,o,a){if(Nf(i))return[];if(Dl(i))return[".".concat(i.styledComponentId)];if(Tr(i)){if(!Tr(c=i)||c.prototype&&c.prototype.isReactComponent||!n)return[i];var u=i(n);return Bn(u,n,o,a)}var c;return i instanceof If?o?(i.inject(o,a),[i.getName(a)]):[i]:Si(i)?Af(i):Array.isArray(i)?Array.prototype.concat.apply(as,i.map(function(p){return Bn(p,n,o,a)})):[i.toString()]}function r0(i){for(var n=0;n<i.length;n+=1){var o=i[n];if(Tr(o)&&!Dl(o))return!1}return!0}var i0=Ef(ss),o0=function(){function i(n,o,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&r0(n),this.componentId=o,this.baseHash=wr(i0,o),this.baseStyle=a,Mf.registerId(o)}return i.prototype.generateAndInjectStyles=function(n,o,a){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=Rn(u,this.staticRulesId);else{var c=El(Bn(this.rules,n,o,a)),p=bl(wr(this.baseHash,c)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=a(c,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}u=Rn(u,p),this.staticRulesId=p}else{for(var f=wr(this.baseHash,a.hash),x="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")x+=y;else if(y){var k=El(Bn(y,n,o,a));f=wr(f,k+v),x+=k}}if(x){var b=bl(f>>>0);o.hasNameForId(this.componentId,b)||o.insertRules(this.componentId,b,a(x,".".concat(b),void 0,this.componentId)),u=Rn(u,b)}}return u},i}(),Df=Ce.createContext(void 0);Df.Consumer;var ul={};function s0(i,n,o){var a=Dl(i),u=i,c=!ll(i),p=n.attrs,g=p===void 0?as:p,f=n.componentId,x=f===void 0?function(_,N){var A=typeof _!="string"?"sc":Gd(_);ul[A]=(ul[A]||0)+1;var Q="".concat(A,"-").concat(Cf(ss+A+ul[A]));return N?"".concat(N,"-").concat(Q):Q}(n.displayName,n.parentComponentId):f,v=n.displayName,y=v===void 0?function(_){return ll(_)?"styled.".concat(_):"Styled(".concat(Lh(_),")")}(i):v,k=n.displayName&&n.componentId?"".concat(Gd(n.displayName),"-").concat(n.componentId):n.componentId||x,b=a&&u.attrs?u.attrs.concat(g).filter(Boolean):g,z=n.shouldForwardProp;if(a&&u.shouldForwardProp){var I=u.shouldForwardProp;if(n.shouldForwardProp){var B=n.shouldForwardProp;z=function(_,N){return I(_,N)&&B(_,N)}}else z=I}var M=new o0(o,k,a?u.componentStyle:void 0);function C(_,N){return function(A,Q,G){var H=A.attrs,W=A.componentStyle,R=A.defaultProps,D=A.foldedComponentIds,$=A.styledComponentId,U=A.target,re=Ce.useContext(Df),me=Kd(),xe=A.shouldForwardProp||me.shouldForwardProp,V=zh(Q,re,R)||Cr,Z=function(he,fe,pe){for(var ae,ye=ft(ft({},fe),{className:void 0,theme:pe}),_e=0;_e<he.length;_e+=1){var qe=Tr(ae=he[_e])?ae(ye):ae;for(var Fe in qe)ye[Fe]=Fe==="className"?Rn(ye[Fe],qe[Fe]):Fe==="style"?ft(ft({},ye[Fe]),qe[Fe]):qe[Fe]}return fe.className&&(ye.className=Rn(ye.className,fe.className)),ye}(H,Q,V),X=Z.as||U,j={};for(var F in Z)Z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&Z.theme===V||(F==="forwardedAs"?j.as=Z.forwardedAs:xe&&!xe(F,X)||(j[F]=Z[F]));var ue=function(he,fe){var pe=Kd(),ae=he.generateAndInjectStyles(fe,pe.styleSheet,pe.stylis);return ae}(W,Z),le=Rn(D,$);return ue&&(le+=" "+ue),Z.className&&(le+=" "+Z.className),j[ll(X)&&!kf.has(X)?"class":"className"]=le,j.ref=G,ge.createElement(X,j)}(S,_,N)}C.displayName=y;var S=Ce.forwardRef(C);return S.attrs=b,S.componentStyle=M,S.displayName=y,S.shouldForwardProp=z,S.foldedComponentIds=a?Rn(u.foldedComponentIds,u.styledComponentId):"",S.styledComponentId=k,S.target=a?u.target:i,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=a?function(N){for(var A=[],Q=1;Q<arguments.length;Q++)A[Q-1]=arguments[Q];for(var G=0,H=A;G<H.length;G++)Cl(N,H[G],!0);return N}({},u.defaultProps,_):_}}),Rl(S,function(){return".".concat(S.styledComponentId)}),c&&Pf(S,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Jd(i,n){for(var o=[i[0]],a=0,u=n.length;a<u;a+=1)o.push(n[a],i[a+1]);return o}var ef=function(i){return Object.assign(i,{isCss:!0})};function Rf(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(Tr(i)||Si(i))return ef(Bn(Jd(as,wi([i],n,!0))));var a=i;return n.length===0&&a.length===1&&typeof a[0]=="string"?Bn(a):ef(Bn(Jd(a,n)))}function jl(i,n,o){if(o===void 0&&(o=Cr),!n)throw ki(1,n);var a=function(u){for(var c=[],p=1;p<arguments.length;p++)c[p-1]=arguments[p];return i(n,o,Rf.apply(void 0,wi([u],c,!1)))};return a.attrs=function(u){return jl(i,n,ft(ft({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},a.withConfig=function(u){return jl(i,n,ft(ft({},o),u))},a}var Ff=function(i){return jl(s0,i)},ee=Ff;kf.forEach(function(i){ee[i]=Ff(i)});function ls(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var a=El(Rf.apply(void 0,wi([i],n,!1))),u=Cf(a);return new If(u,a)}var Wo={exports:{}},a0=Wo.exports,tf;function l0(){return tf||(tf=1,function(i,n){(function(o,a){i.exports=a()})(a0,function(){return function(o){function a(c){if(u[c])return u[c].exports;var p=u[c]={exports:{},id:c,loaded:!1};return o[c].call(p.exports,p,p.exports,a),p.loaded=!0,p.exports}var u={};return a.m=o,a.c=u,a.p="dist/",a(0)}([function(o,a,u){function c(U){return U&&U.__esModule?U:{default:U}}var p=Object.assign||function(U){for(var re=1;re<arguments.length;re++){var me=arguments[re];for(var xe in me)Object.prototype.hasOwnProperty.call(me,xe)&&(U[xe]=me[xe])}return U},g=u(1),f=(c(g),u(6)),x=c(f),v=u(7),y=c(v),k=u(8),b=c(k),z=u(9),I=c(z),B=u(10),M=c(B),C=u(11),S=c(C),_=u(14),N=c(_),A=[],Q=!1,G={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var U=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(U&&(Q=!0),Q)return A=(0,S.default)(A,G),(0,M.default)(A,G.once),A},W=function(){A=(0,N.default)(),H()},R=function(){A.forEach(function(U,re){U.node.removeAttribute("data-aos"),U.node.removeAttribute("data-aos-easing"),U.node.removeAttribute("data-aos-duration"),U.node.removeAttribute("data-aos-delay")})},D=function(U){return U===!0||U==="mobile"&&I.default.mobile()||U==="phone"&&I.default.phone()||U==="tablet"&&I.default.tablet()||typeof U=="function"&&U()===!0},$=function(U){G=p(G,U),A=(0,N.default)();var re=document.all&&!window.atob;return D(G.disable)||re?R():(G.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),G.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",G.easing),document.querySelector("body").setAttribute("data-aos-duration",G.duration),document.querySelector("body").setAttribute("data-aos-delay",G.delay),G.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):G.startEvent==="load"?window.addEventListener(G.startEvent,function(){H(!0)}):document.addEventListener(G.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("scroll",(0,x.default)(function(){(0,M.default)(A,G.once)},G.throttleDelay)),G.disableMutationObserver||b.default.ready("[data-aos]",W),A)};o.exports={init:$,refresh:H,refreshHard:W}},function(o,a){},,,,,function(o,a){(function(u){function c(D,$,U){function re(be){var Ke=le,Pt=he;return le=he=void 0,_e=be,pe=D.apply(Pt,Ke)}function me(be){return _e=be,ae=setTimeout(Z,$),qe?re(be):pe}function xe(be){var Ke=be-ye,Pt=be-_e,Gn=$-Ke;return Fe?W(Gn,fe-Pt):Gn}function V(be){var Ke=be-ye,Pt=be-_e;return ye===void 0||Ke>=$||Ke<0||Fe&&Pt>=fe}function Z(){var be=R();return V(be)?X(be):void(ae=setTimeout(Z,xe(be)))}function X(be){return ae=void 0,ze&&le?re(be):(le=he=void 0,pe)}function j(){ae!==void 0&&clearTimeout(ae),_e=0,le=ye=he=ae=void 0}function F(){return ae===void 0?pe:X(R())}function ue(){var be=R(),Ke=V(be);if(le=arguments,he=this,ye=be,Ke){if(ae===void 0)return me(ye);if(Fe)return ae=setTimeout(Z,$),re(ye)}return ae===void 0&&(ae=setTimeout(Z,$)),pe}var le,he,fe,pe,ae,ye,_e=0,qe=!1,Fe=!1,ze=!0;if(typeof D!="function")throw new TypeError(k);return $=v($)||0,g(U)&&(qe=!!U.leading,Fe="maxWait"in U,fe=Fe?H(v(U.maxWait)||0,$):fe,ze="trailing"in U?!!U.trailing:ze),ue.cancel=j,ue.flush=F,ue}function p(D,$,U){var re=!0,me=!0;if(typeof D!="function")throw new TypeError(k);return g(U)&&(re="leading"in U?!!U.leading:re,me="trailing"in U?!!U.trailing:me),c(D,$,{leading:re,maxWait:$,trailing:me})}function g(D){var $=typeof D>"u"?"undefined":y(D);return!!D&&($=="object"||$=="function")}function f(D){return!!D&&(typeof D>"u"?"undefined":y(D))=="object"}function x(D){return(typeof D>"u"?"undefined":y(D))=="symbol"||f(D)&&G.call(D)==z}function v(D){if(typeof D=="number")return D;if(x(D))return b;if(g(D)){var $=typeof D.valueOf=="function"?D.valueOf():D;D=g($)?$+"":$}if(typeof D!="string")return D===0?D:+D;D=D.replace(I,"");var U=M.test(D);return U||C.test(D)?S(D.slice(2),U?2:8):B.test(D)?b:+D}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},k="Expected a function",b=NaN,z="[object Symbol]",I=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,C=/^0o[0-7]+$/i,S=parseInt,_=(typeof u>"u"?"undefined":y(u))=="object"&&u&&u.Object===Object&&u,N=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,A=_||N||Function("return this")(),Q=Object.prototype,G=Q.toString,H=Math.max,W=Math.min,R=function(){return A.Date.now()};o.exports=p}).call(a,function(){return this}())},function(o,a){(function(u){function c(R,D,$){function U(ze){var be=ue,Ke=le;return ue=le=void 0,ye=ze,fe=R.apply(Ke,be)}function re(ze){return ye=ze,pe=setTimeout(V,D),_e?U(ze):fe}function me(ze){var be=ze-ae,Ke=ze-ye,Pt=D-be;return qe?H(Pt,he-Ke):Pt}function xe(ze){var be=ze-ae,Ke=ze-ye;return ae===void 0||be>=D||be<0||qe&&Ke>=he}function V(){var ze=W();return xe(ze)?Z(ze):void(pe=setTimeout(V,me(ze)))}function Z(ze){return pe=void 0,Fe&&ue?U(ze):(ue=le=void 0,fe)}function X(){pe!==void 0&&clearTimeout(pe),ye=0,ue=ae=le=pe=void 0}function j(){return pe===void 0?fe:Z(W())}function F(){var ze=W(),be=xe(ze);if(ue=arguments,le=this,ae=ze,be){if(pe===void 0)return re(ae);if(qe)return pe=setTimeout(V,D),U(ae)}return pe===void 0&&(pe=setTimeout(V,D)),fe}var ue,le,he,fe,pe,ae,ye=0,_e=!1,qe=!1,Fe=!0;if(typeof R!="function")throw new TypeError(y);return D=x(D)||0,p($)&&(_e=!!$.leading,qe="maxWait"in $,he=qe?G(x($.maxWait)||0,D):he,Fe="trailing"in $?!!$.trailing:Fe),F.cancel=X,F.flush=j,F}function p(R){var D=typeof R>"u"?"undefined":v(R);return!!R&&(D=="object"||D=="function")}function g(R){return!!R&&(typeof R>"u"?"undefined":v(R))=="object"}function f(R){return(typeof R>"u"?"undefined":v(R))=="symbol"||g(R)&&Q.call(R)==b}function x(R){if(typeof R=="number")return R;if(f(R))return k;if(p(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=p(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=R.replace(z,"");var $=B.test(R);return $||M.test(R)?C(R.slice(2),$?2:8):I.test(R)?k:+R}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},y="Expected a function",k=NaN,b="[object Symbol]",z=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,M=/^0o[0-7]+$/i,C=parseInt,S=(typeof u>"u"?"undefined":v(u))=="object"&&u&&u.Object===Object&&u,_=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,N=S||_||Function("return this")(),A=Object.prototype,Q=A.toString,G=Math.max,H=Math.min,W=function(){return N.Date.now()};o.exports=c}).call(a,function(){return this}())},function(o,a){function u(v){var y=void 0,k=void 0;for(y=0;y<v.length;y+=1)if(k=v[y],k.dataset&&k.dataset.aos||k.children&&u(k.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(){return!!c()}function g(v,y){var k=window.document,b=c(),z=new b(f);x=y,z.observe(k.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(v){v&&v.forEach(function(y){var k=Array.prototype.slice.call(y.addedNodes),b=Array.prototype.slice.call(y.removedNodes),z=k.concat(b);if(u(z))return x()})}Object.defineProperty(a,"__esModule",{value:!0});var x=function(){};a.default={isSupported:p,ready:g}},function(o,a){function u(k,b){if(!(k instanceof b))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var p=function(){function k(b,z){for(var I=0;I<z.length;I++){var B=z[I];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}return function(b,z,I){return z&&k(b.prototype,z),I&&k(b,I),b}}(),g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,x=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=function(){function k(){u(this,k)}return p(k,[{key:"phone",value:function(){var b=c();return!(!g.test(b)&&!f.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=c();return!(!x.test(b)&&!v.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),k}();a.default=new y},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var u=function(p,g,f){var x=p.node.getAttribute("data-aos-once");g>p.position?p.node.classList.add("aos-animate"):typeof x<"u"&&(x==="false"||!f&&x!=="true")&&p.node.classList.remove("aos-animate")},c=function(p,g){var f=window.pageYOffset,x=window.innerHeight;p.forEach(function(v,y){u(v,x+f,g)})};a.default=c},function(o,a,u){function c(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(a,"__esModule",{value:!0});var p=u(12),g=c(p),f=function(x,v){return x.forEach(function(y,k){y.node.classList.add("aos-init"),y.position=(0,g.default)(y.node,v.offset)}),x};a.default=f},function(o,a,u){function c(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(a,"__esModule",{value:!0});var p=u(13),g=c(p),f=function(x,v){var y=0,k=0,b=window.innerHeight,z={offset:x.getAttribute("data-aos-offset"),anchor:x.getAttribute("data-aos-anchor"),anchorPlacement:x.getAttribute("data-aos-anchor-placement")};switch(z.offset&&!isNaN(z.offset)&&(k=parseInt(z.offset)),z.anchor&&document.querySelectorAll(z.anchor)&&(x=document.querySelectorAll(z.anchor)[0]),y=(0,g.default)(x).top,z.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=x.offsetHeight/2;break;case"bottom-bottom":y+=x.offsetHeight;break;case"top-center":y+=b/2;break;case"bottom-center":y+=b/2+x.offsetHeight;break;case"center-center":y+=b/2+x.offsetHeight/2;break;case"top-top":y+=b;break;case"bottom-top":y+=x.offsetHeight+b;break;case"center-top":y+=x.offsetHeight/2+b}return z.anchorPlacement||z.offset||isNaN(v)||(k=v),y+k};a.default=f},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var u=function(c){for(var p=0,g=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)p+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),g+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:g,left:p}};a.default=u},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var u=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(p){return{node:p}})};a.default=u}])})}(Wo)),Wo.exports}var u0=l0();const wt=ff(u0),c0=ee.header`
  width: auto;
  max-width: 1140px;
  height: 5vh;
  position: fixed;
  left: 50%;
  padding: 10px 20px;
  top: 10px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(1px);
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media (max-width: 768px){
    height: 5vh;
  }

  /* Transição suave para subir/descer */
  transition: transform 2s ease;

  /* Quando scrolling = true, o header sobe (-100%) */
  /* Quando scrolling = false, ele volta para 0 */
  transform: ${({scrolling:i})=>i?"translateX(-50%) translateY(-150%)":"translateX(-50%) translateY(0)"};
`,d0=ee.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    width: 70px;
    height: auto;
    & > img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;function f0(){const[i,n]=ge.useState(!1),o=ge.useRef(null);return ge.useEffect(()=>{wt.init({duration:1500,offset:20,easing:"ease-in-out",once:!0})},[]),ge.useEffect(()=>{const a=()=>{n(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n(!1)},200)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),o.current&&clearTimeout(o.current)}},[]),m.jsx(c0,{scrolling:i,children:m.jsx(d0,{"data-aos":"zoom-out-top","data-aos-delay":"100",children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png",alt:"logo"})})})})}const p0=ee.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: var(--color--white);

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > img {
        width: 20px;
        object-fit: contain;
    }

    & > b{
        background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
`,Hn=()=>m.jsx(m.Fragment,{children:m.jsxs(p0,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"})]})}),m0=ee.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid var(--color--white);

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
`,h0=()=>m.jsx(m.Fragment,{children:m.jsx(m0,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",children:m.jsx("b",{children:"Saber mais"})})});ls`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;const g0=ee.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    background: #000;

    @media (max-width: 768px){
        display: none;
    }

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg');
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        opacity: .3;
        border-image: fill 0 linear-gradient(#0000, #000);
    }
`,v0=ee.section`
    width: 100%;
    height: 100vh;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: 100dvh;
        padding: 10% 5%;
        background: #000;
    }

    &::before{
        @media (max-width: 768px) {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg');
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: .3;
            border-image: fill 0 linear-gradient(#0000, #000);
        }
    }
`,y0=ee.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-family: var(--font--poppins);
        font-size: 40px;
        line-height: 100%;
        font-weight: 200;
        color: var(--color--white);

        @media (max-width: 768px) {
            text-align: center;
            font-size: 28px;
            line-height: 110%;
        }

        & > b{
            font-weight: 400;
            background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
        }
    }

    & > div{
        width: 100%;
        display: flex;
        gap: 10px;

        & > button:nth-child(2){
            @media (max-width: 768px) {
                display: none;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }

    & > p{
        font-weight: 300;
        color: var(--color--white);
        font-size: 16px;
        line-height: 120%;
        font-family: var(--font--poppins);
        opacity: .6;
        width: 95%;

        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
            opacity: 0.8;
            font-size: 14px;
            font-weight: 200;
            line-height: 120%;
        }
    }

    & > span {
        width: 90%;
        font-size: 14px;
        font-family: var(--font--roboto);
        font-weight: 300;
        line-height: 120%;
        opacity: .3;
        color: var(--color--white);
        margin-top: -15px;
        

        @media (max-width: 768px) {
            text-align: center;
            width: 100%;
            font-size: 12px;
            font-weight: 100;
            opacity: .6;
        }
    }
`,x0=ee.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
        width: 80%;
    }

    & > img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`,w0=ee.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    height: 50px;

    @media (max-width: 768px) {
        border: 1px solid red;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 250px!important;
        display: none!important;
    }

    & > article {
        position: relative;
        left: 125px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 100%;

        @media (max-width: 768px) {
            left: 0px;
            border: 1px solid red;
        }

        & > span {
            font-weight: 400;
            background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 22px;
        }

        & > img {
            width: 18px;
        }
    }

    & > div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;

        @media (max-width:768px) {
            border: 1px solid red;
        }

        &:nth-child(1){
            top: 0;
            left: 0;
            z-index: 1;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834438/perfil1_hvoboh.jpg');
            background-position: center;
            background-size: cover;
            opacity: 0.6;
            transition: all .2s ease;

            &:hover{
                z-index: 4;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(2){
            top: 0;
            left: 20px;
            z-index: 2;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834439/perfil3_qg8mhu.jpg');
            background-position: center;
            background-size: cover;
            opacity: .7;
            transition: all .2s ease;

            &:hover{
                z-index: 4;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(3){
            top: 0;
            left: 40px;
            z-index: 3;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834439/perfil2_yhzm7x.jpg');
            background-position: center;
            background-size: cover;
            opacity: .8;
            transition: all .2s ease;

            &:hover{
                z-index: 5;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(4){
            top: 0;
            left: 60px;
            z-index: 4;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834440/perfil4_smjprm.jpg');
            background-position: center;
            background-size: cover;
            opacity: 1;
            transition: all .2s ease;

            &:hover{
                transform: translateY(-5px) scale(1.05);
            }
        }
    }
`,S0=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>800?1500:800;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsxs(m.Fragment,{children:[m.jsx(g0,{}),m.jsxs(v0,{children:[m.jsxs(y0,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:["Já imaginou ter um ",m.jsx("b",{children:"site de altíssimo"})," padrão?"]}),m.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),m.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"300",children:[m.jsx(Hn,{}),m.jsx(h0,{})]}),m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),m.jsxs(w0,{"data-aos":"fade-in","data-aos-delay":"500",children:[m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsxs("article",{children:[m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"4.9"}),m.jsx("img",{"data-aos":"fade-in","data-aos-delay":"1000",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"})]})]})]}),m.jsx(x0,{children:m.jsx("img",{"data-aos":"fade-up-right","data-aos-delay":"0",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png"})})]})]}));var Bf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nf=Ce.createContext&&Ce.createContext(Bf),k0=["attr","size","title"];function b0(i,n){if(i==null)return{};var o=E0(i,n),a,u;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(u=0;u<c.length;u++)a=c[u],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(o[a]=i[a])}return o}function E0(i,n){if(i==null)return{};var o={};for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(n.indexOf(a)>=0)continue;o[a]=i[a]}return o}function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a])}return i},Qo.apply(this,arguments)}function rf(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);n&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,a)}return o}function Ko(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?rf(Object(o),!0).forEach(function(a){C0(i,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):rf(Object(o)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(o,a))})}return i}function C0(i,n,o){return n=T0(n),n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function T0(i){var n=j0(i,"string");return typeof n=="symbol"?n:n+""}function j0(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var a=o.call(i,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function $f(i){return i&&i.map((n,o)=>Ce.createElement(n.tag,Ko({key:o},n.attr),$f(n.child)))}function pt(i){return n=>Ce.createElement(z0,Qo({attr:Ko({},i.attr)},n),$f(i.child))}function z0(i){var n=o=>{var{attr:a,size:u,title:c}=i,p=b0(i,k0),g=u||o.size||"1em",f;return o.className&&(f=o.className),i.className&&(f=(f?f+" ":"")+i.className),Ce.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,a,p,{className:f,style:Ko(Ko({color:i.color||o.color},o.style),i.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),c&&Ce.createElement("title",null,c),i.children)};return nf!==void 0?Ce.createElement(nf.Consumer,null,o=>n(o)):n(Bf)}function Vf(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(i)}function P0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function _0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(i)}function M0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(i)}function L0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"},child:[]},{tag:"path",attr:{d:"M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"},child:[]}]})(i)}function O0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},child:[]},{tag:"path",attr:{d:"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"},child:[]}]})(i)}function I0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(i)}function N0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"},child:[]}]})(i)}function A0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},child:[]}]})(i)}function D0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(i)}function R0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"},child:[]},{tag:"path",attr:{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"},child:[]}]})(i)}function F0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"},child:[]}]})(i)}const B0=ee.div`
  position: relative;
  width: 300px;
  height: 350px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px){
    width: 100%;
    height: 250px;
  }

  & > h1{
    font-size: 26px;
    background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
    -webkit-background-clip: text;
    color: transparent;
    line-height: 100%;
    font-family: var(--font--poppins);
    font-weight: 600;
    height: 20%;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  & > p {
    color: var(--color--white);
    font-size: 16px;
    font-family: var(--font--poppins);
    font-weight: 300;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  
  /* Estilos do ::before */
  &::before {
    content: '';
    position: absolute;
    inset: 0; /* top:0, right:0, bottom:0, left:0 */
    left: -5px;
    margin: auto;
    width: 310px;
    height: 360px;
    border-radius: 20px;
    background: linear-gradient(-45deg, var(--color--purple) 0%, var(--color--blue) 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @media (max-width: 768px){
      width: 103%;
      height: 260px;
    }
  }

  /* Estilos do ::after */
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  /* Hover */
  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-90deg) scaleX(1.15) scaleY(0.86);

    @media (max-width: 768px){
      transform: rotate(-90deg) scaleX(0.72) scaleY(1.38);
    }
  }

`,vr=({title:i,description:n})=>m.jsxs(B0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Hn,{})]}),$0=ee.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px){
    width: 100%;
    height: 220px;
  }

  & > h1{
    font-size: 26px;
    background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
    -webkit-background-clip: text;
    color: transparent;
    line-height: 100%;
    font-family: var(--font--poppins);
    font-weight: 600;
    height: 20%;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  & > p {
    color: var(--color--white);
    font-size: 16px;
    font-family: var(--font--poppins);
    font-weight: 300;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  
  /* Estilos do ::before */
  &::before {
    content: '';
    position: absolute;
    inset: 0; /* top:0, right:0, bottom:0, left:0 */
    left: -5px;
    margin: auto;
    width: 310px;
    height: 310px;
    border-radius: 20px;
    background: linear-gradient(-45deg, var(--color--purple) 0%, var(--color--blue) 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @media (max-width: 768px){
      width: 103%;
      height: 230px;
    }
  }

  /* Estilos do ::after */
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  /* Hover */
  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-90deg) scaleX(1) scaleY(1);

    @media (max-width: 768px){
      transform: rotate(-90deg) scaleX(0.63) scaleY(1.57);
    }
  }

`,yr=({title:i,description:n})=>m.jsxs($0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Hn,{})]});function of(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Fl(i,n){i===void 0&&(i={}),n===void 0&&(n={}),Object.keys(n).forEach(o=>{typeof i[o]>"u"?i[o]=n[o]:of(n[o])&&of(i[o])&&Object.keys(n[o]).length>0&&Fl(i[o],n[o])})}const Hf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function nn(){const i=typeof document<"u"?document:{};return Fl(i,Hf),i}const V0={document:Hf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function St(){const i=typeof window<"u"?window:{};return Fl(i,V0),i}function H0(i){return i===void 0&&(i=""),i.trim().split(" ").filter(n=>!!n.trim())}function G0(i){const n=i;Object.keys(n).forEach(o=>{try{n[o]=null}catch{}try{delete n[o]}catch{}})}function zl(i,n){return n===void 0&&(n=0),setTimeout(i,n)}function $n(){return Date.now()}function W0(i){const n=St();let o;return n.getComputedStyle&&(o=n.getComputedStyle(i,null)),!o&&i.currentStyle&&(o=i.currentStyle),o||(o=i.style),o}function q0(i,n){n===void 0&&(n="x");const o=St();let a,u,c;const p=W0(i);return o.WebKitCSSMatrix?(u=p.transform||p.webkitTransform,u.split(",").length>6&&(u=u.split(", ").map(g=>g.replace(",",".")).join(", ")),c=new o.WebKitCSSMatrix(u==="none"?"":u)):(c=p.MozTransform||p.OTransform||p.MsTransform||p.msTransform||p.transform||p.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=c.toString().split(",")),n==="x"&&(o.WebKitCSSMatrix?u=c.m41:a.length===16?u=parseFloat(a[12]):u=parseFloat(a[4])),n==="y"&&(o.WebKitCSSMatrix?u=c.m42:a.length===16?u=parseFloat(a[13]):u=parseFloat(a[5])),u||0}function Do(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function U0(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function xt(){const i=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let o=1;o<arguments.length;o+=1){const a=o<0||arguments.length<=o?void 0:arguments[o];if(a!=null&&!U0(a)){const u=Object.keys(Object(a)).filter(c=>n.indexOf(c)<0);for(let c=0,p=u.length;c<p;c+=1){const g=u[c],f=Object.getOwnPropertyDescriptor(a,g);f!==void 0&&f.enumerable&&(Do(i[g])&&Do(a[g])?a[g].__swiper__?i[g]=a[g]:xt(i[g],a[g]):!Do(i[g])&&Do(a[g])?(i[g]={},a[g].__swiper__?i[g]=a[g]:xt(i[g],a[g])):i[g]=a[g])}}}return i}function Ro(i,n,o){i.style.setProperty(n,o)}function Gf(i){let{swiper:n,targetPosition:o,side:a}=i;const u=St(),c=-n.translate;let p=null,g;const f=n.params.speed;n.wrapperEl.style.scrollSnapType="none",u.cancelAnimationFrame(n.cssModeFrameID);const x=o>c?"next":"prev",v=(k,b)=>x==="next"&&k>=b||x==="prev"&&k<=b,y=()=>{g=new Date().getTime(),p===null&&(p=g);const k=Math.max(Math.min((g-p)/f,1),0),b=.5-Math.cos(k*Math.PI)/2;let z=c+b*(o-c);if(v(z,o)&&(z=o),n.wrapperEl.scrollTo({[a]:z}),v(z,o)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[a]:z})}),u.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=u.requestAnimationFrame(y)};y()}function Gt(i,n){n===void 0&&(n="");const o=[...i.children];return i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),n?o.filter(a=>a.matches(n)):o}function Y0(i,n){const o=n.contains(i);return!o&&n instanceof HTMLSlotElement?[...n.assignedElements()].includes(i):o}function Zo(i){try{console.warn(i);return}catch{}}function Jo(i,n){n===void 0&&(n=[]);const o=document.createElement(i);return o.classList.add(...Array.isArray(n)?n:H0(n)),o}function X0(i,n){const o=[];for(;i.previousElementSibling;){const a=i.previousElementSibling;n?a.matches(n)&&o.push(a):o.push(a),i=a}return o}function Q0(i,n){const o=[];for(;i.nextElementSibling;){const a=i.nextElementSibling;n?a.matches(n)&&o.push(a):o.push(a),i=a}return o}function En(i,n){return St().getComputedStyle(i,null).getPropertyValue(n)}function es(i){let n=i,o;if(n){for(o=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(o+=1);return o}}function Wf(i,n){const o=[];let a=i.parentElement;for(;a;)n?a.matches(n)&&o.push(a):o.push(a),a=a.parentElement;return o}function cl(i,n){function o(a){a.target===i&&(n.call(i,a),i.removeEventListener("transitionend",o))}n&&i.addEventListener("transitionend",o)}function Pl(i,n,o){const a=St();return i[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}function Jt(i){return(Array.isArray(i)?i:[i]).filter(n=>!!n)}let dl;function K0(){const i=St(),n=nn();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&n instanceof i.DocumentTouch)}}function qf(){return dl||(dl=K0()),dl}let fl;function Z0(i){let{userAgent:n}=i===void 0?{}:i;const o=qf(),a=St(),u=a.navigator.platform,c=n||a.navigator.userAgent,p={ios:!1,android:!1},g=a.screen.width,f=a.screen.height,x=c.match(/(Android);?[\s\/]+([\d.]+)?/);let v=c.match(/(iPad).*OS\s([\d_]+)/);const y=c.match(/(iPod)(.*OS\s([\d_]+))?/),k=!v&&c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=u==="Win32";let z=u==="MacIntel";const I=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!v&&z&&o.touch&&I.indexOf(`${g}x${f}`)>=0&&(v=c.match(/(Version)\/([\d.]+)/),v||(v=[0,1,"13_0_0"]),z=!1),x&&!b&&(p.os="android",p.android=!0),(v||k||y)&&(p.os="ios",p.ios=!0),p}function Uf(i){return i===void 0&&(i={}),fl||(fl=Z0(i)),fl}let pl;function J0(){const i=St(),n=Uf();let o=!1;function a(){const g=i.navigator.userAgent.toLowerCase();return g.indexOf("safari")>=0&&g.indexOf("chrome")<0&&g.indexOf("android")<0}if(a()){const g=String(i.navigator.userAgent);if(g.includes("Version/")){const[f,x]=g.split("Version/")[1].split(" ")[0].split(".").map(v=>Number(v));o=f<16||f===16&&x<2}}const u=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),c=a(),p=c||u&&n.ios;return{isSafari:o||c,needPerspectiveFix:o,need3dFix:p,isWebView:u}}function eg(){return pl||(pl=J0()),pl}function tg(i){let{swiper:n,on:o,emit:a}=i;const u=St();let c=null,p=null;const g=()=>{!n||n.destroyed||!n.initialized||(a("beforeResize"),a("resize"))},f=()=>{!n||n.destroyed||!n.initialized||(c=new ResizeObserver(y=>{p=u.requestAnimationFrame(()=>{const{width:k,height:b}=n;let z=k,I=b;y.forEach(B=>{let{contentBoxSize:M,contentRect:C,target:S}=B;S&&S!==n.el||(z=C?C.width:(M[0]||M).inlineSize,I=C?C.height:(M[0]||M).blockSize)}),(z!==k||I!==b)&&g()})}),c.observe(n.el))},x=()=>{p&&u.cancelAnimationFrame(p),c&&c.unobserve&&n.el&&(c.unobserve(n.el),c=null)},v=()=>{!n||n.destroyed||!n.initialized||a("orientationchange")};o("init",()=>{if(n.params.resizeObserver&&typeof u.ResizeObserver<"u"){f();return}u.addEventListener("resize",g),u.addEventListener("orientationchange",v)}),o("destroy",()=>{x(),u.removeEventListener("resize",g),u.removeEventListener("orientationchange",v)})}function ng(i){let{swiper:n,extendParams:o,on:a,emit:u}=i;const c=[],p=St(),g=function(v,y){y===void 0&&(y={});const k=p.MutationObserver||p.WebkitMutationObserver,b=new k(z=>{if(n.__preventObserver__)return;if(z.length===1){u("observerUpdate",z[0]);return}const I=function(){u("observerUpdate",z[0])};p.requestAnimationFrame?p.requestAnimationFrame(I):p.setTimeout(I,0)});b.observe(v,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:n.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),c.push(b)},f=()=>{if(n.params.observer){if(n.params.observeParents){const v=Wf(n.hostEl);for(let y=0;y<v.length;y+=1)g(v[y])}g(n.hostEl,{childList:n.params.observeSlideChildren}),g(n.wrapperEl,{attributes:!1})}},x=()=>{c.forEach(v=>{v.disconnect()}),c.splice(0,c.length)};o({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",f),a("destroy",x)}var rg={on(i,n,o){const a=this;if(!a.eventsListeners||a.destroyed||typeof n!="function")return a;const u=o?"unshift":"push";return i.split(" ").forEach(c=>{a.eventsListeners[c]||(a.eventsListeners[c]=[]),a.eventsListeners[c][u](n)}),a},once(i,n,o){const a=this;if(!a.eventsListeners||a.destroyed||typeof n!="function")return a;function u(){a.off(i,u),u.__emitterProxy&&delete u.__emitterProxy;for(var c=arguments.length,p=new Array(c),g=0;g<c;g++)p[g]=arguments[g];n.apply(a,p)}return u.__emitterProxy=n,a.on(i,u,o)},onAny(i,n){const o=this;if(!o.eventsListeners||o.destroyed||typeof i!="function")return o;const a=n?"unshift":"push";return o.eventsAnyListeners.indexOf(i)<0&&o.eventsAnyListeners[a](i),o},offAny(i){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const o=n.eventsAnyListeners.indexOf(i);return o>=0&&n.eventsAnyListeners.splice(o,1),n},off(i,n){const o=this;return!o.eventsListeners||o.destroyed||!o.eventsListeners||i.split(" ").forEach(a=>{typeof n>"u"?o.eventsListeners[a]=[]:o.eventsListeners[a]&&o.eventsListeners[a].forEach((u,c)=>{(u===n||u.__emitterProxy&&u.__emitterProxy===n)&&o.eventsListeners[a].splice(c,1)})}),o},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let n,o,a;for(var u=arguments.length,c=new Array(u),p=0;p<u;p++)c[p]=arguments[p];return typeof c[0]=="string"||Array.isArray(c[0])?(n=c[0],o=c.slice(1,c.length),a=i):(n=c[0].events,o=c[0].data,a=c[0].context||i),o.unshift(a),(Array.isArray(n)?n:n.split(" ")).forEach(f=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(x=>{x.apply(a,[f,...o])}),i.eventsListeners&&i.eventsListeners[f]&&i.eventsListeners[f].forEach(x=>{x.apply(a,o)})}),i}};function ig(){const i=this;let n,o;const a=i.el;typeof i.params.width<"u"&&i.params.width!==null?n=i.params.width:n=a.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?o=i.params.height:o=a.clientHeight,!(n===0&&i.isHorizontal()||o===0&&i.isVertical())&&(n=n-parseInt(En(a,"padding-left")||0,10)-parseInt(En(a,"padding-right")||0,10),o=o-parseInt(En(a,"padding-top")||0,10)-parseInt(En(a,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(o)&&(o=0),Object.assign(i,{width:n,height:o,size:i.isHorizontal()?n:o}))}function og(){const i=this;function n(W,R){return parseFloat(W.getPropertyValue(i.getDirectionLabel(R))||0)}const o=i.params,{wrapperEl:a,slidesEl:u,size:c,rtlTranslate:p,wrongRTL:g}=i,f=i.virtual&&o.virtual.enabled,x=f?i.virtual.slides.length:i.slides.length,v=Gt(u,`.${i.params.slideClass}, swiper-slide`),y=f?i.virtual.slides.length:v.length;let k=[];const b=[],z=[];let I=o.slidesOffsetBefore;typeof I=="function"&&(I=o.slidesOffsetBefore.call(i));let B=o.slidesOffsetAfter;typeof B=="function"&&(B=o.slidesOffsetAfter.call(i));const M=i.snapGrid.length,C=i.slidesGrid.length;let S=o.spaceBetween,_=-I,N=0,A=0;if(typeof c>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*c:typeof S=="string"&&(S=parseFloat(S)),i.virtualSize=-S,v.forEach(W=>{p?W.style.marginLeft="":W.style.marginRight="",W.style.marginBottom="",W.style.marginTop=""}),o.centeredSlides&&o.cssMode&&(Ro(a,"--swiper-centered-offset-before",""),Ro(a,"--swiper-centered-offset-after",""));const Q=o.grid&&o.grid.rows>1&&i.grid;Q?i.grid.initSlides(v):i.grid&&i.grid.unsetSlides();let G;const H=o.slidesPerView==="auto"&&o.breakpoints&&Object.keys(o.breakpoints).filter(W=>typeof o.breakpoints[W].slidesPerView<"u").length>0;for(let W=0;W<y;W+=1){G=0;let R;if(v[W]&&(R=v[W]),Q&&i.grid.updateSlide(W,R,v),!(v[W]&&En(R,"display")==="none")){if(o.slidesPerView==="auto"){H&&(v[W].style[i.getDirectionLabel("width")]="");const D=getComputedStyle(R),$=R.style.transform,U=R.style.webkitTransform;if($&&(R.style.transform="none"),U&&(R.style.webkitTransform="none"),o.roundLengths)G=i.isHorizontal()?Pl(R,"width"):Pl(R,"height");else{const re=n(D,"width"),me=n(D,"padding-left"),xe=n(D,"padding-right"),V=n(D,"margin-left"),Z=n(D,"margin-right"),X=D.getPropertyValue("box-sizing");if(X&&X==="border-box")G=re+V+Z;else{const{clientWidth:j,offsetWidth:F}=R;G=re+me+xe+V+Z+(F-j)}}$&&(R.style.transform=$),U&&(R.style.webkitTransform=U),o.roundLengths&&(G=Math.floor(G))}else G=(c-(o.slidesPerView-1)*S)/o.slidesPerView,o.roundLengths&&(G=Math.floor(G)),v[W]&&(v[W].style[i.getDirectionLabel("width")]=`${G}px`);v[W]&&(v[W].swiperSlideSize=G),z.push(G),o.centeredSlides?(_=_+G/2+N/2+S,N===0&&W!==0&&(_=_-c/2-S),W===0&&(_=_-c/2-S),Math.abs(_)<1/1e3&&(_=0),o.roundLengths&&(_=Math.floor(_)),A%o.slidesPerGroup===0&&k.push(_),b.push(_)):(o.roundLengths&&(_=Math.floor(_)),(A-Math.min(i.params.slidesPerGroupSkip,A))%i.params.slidesPerGroup===0&&k.push(_),b.push(_),_=_+G+S),i.virtualSize+=G+S,N=G,A+=1}}if(i.virtualSize=Math.max(i.virtualSize,c)+B,p&&g&&(o.effect==="slide"||o.effect==="coverflow")&&(a.style.width=`${i.virtualSize+S}px`),o.setWrapperSize&&(a.style[i.getDirectionLabel("width")]=`${i.virtualSize+S}px`),Q&&i.grid.updateWrapperSize(G,k),!o.centeredSlides){const W=[];for(let R=0;R<k.length;R+=1){let D=k[R];o.roundLengths&&(D=Math.floor(D)),k[R]<=i.virtualSize-c&&W.push(D)}k=W,Math.floor(i.virtualSize-c)-Math.floor(k[k.length-1])>1&&k.push(i.virtualSize-c)}if(f&&o.loop){const W=z[0]+S;if(o.slidesPerGroup>1){const R=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/o.slidesPerGroup),D=W*o.slidesPerGroup;for(let $=0;$<R;$+=1)k.push(k[k.length-1]+D)}for(let R=0;R<i.virtual.slidesBefore+i.virtual.slidesAfter;R+=1)o.slidesPerGroup===1&&k.push(k[k.length-1]+W),b.push(b[b.length-1]+W),i.virtualSize+=W}if(k.length===0&&(k=[0]),S!==0){const W=i.isHorizontal()&&p?"marginLeft":i.getDirectionLabel("marginRight");v.filter((R,D)=>!o.cssMode||o.loop?!0:D!==v.length-1).forEach(R=>{R.style[W]=`${S}px`})}if(o.centeredSlides&&o.centeredSlidesBounds){let W=0;z.forEach(D=>{W+=D+(S||0)}),W-=S;const R=W>c?W-c:0;k=k.map(D=>D<=0?-I:D>R?R+B:D)}if(o.centerInsufficientSlides){let W=0;z.forEach(D=>{W+=D+(S||0)}),W-=S;const R=(o.slidesOffsetBefore||0)+(o.slidesOffsetAfter||0);if(W+R<c){const D=(c-W-R)/2;k.forEach(($,U)=>{k[U]=$-D}),b.forEach(($,U)=>{b[U]=$+D})}}if(Object.assign(i,{slides:v,snapGrid:k,slidesGrid:b,slidesSizesGrid:z}),o.centeredSlides&&o.cssMode&&!o.centeredSlidesBounds){Ro(a,"--swiper-centered-offset-before",`${-k[0]}px`),Ro(a,"--swiper-centered-offset-after",`${i.size/2-z[z.length-1]/2}px`);const W=-i.snapGrid[0],R=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(D=>D+W),i.slidesGrid=i.slidesGrid.map(D=>D+R)}if(y!==x&&i.emit("slidesLengthChange"),k.length!==M&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),b.length!==C&&i.emit("slidesGridLengthChange"),o.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!f&&!o.cssMode&&(o.effect==="slide"||o.effect==="fade")){const W=`${o.containerModifierClass}backface-hidden`,R=i.el.classList.contains(W);y<=o.maxBackfaceHiddenSlides?R||i.el.classList.add(W):R&&i.el.classList.remove(W)}}function sg(i){const n=this,o=[],a=n.virtual&&n.params.virtual.enabled;let u=0,c;typeof i=="number"?n.setTransition(i):i===!0&&n.setTransition(n.params.speed);const p=g=>a?n.slides[n.getSlideIndexByData(g)]:n.slides[g];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(g=>{o.push(g)});else for(c=0;c<Math.ceil(n.params.slidesPerView);c+=1){const g=n.activeIndex+c;if(g>n.slides.length&&!a)break;o.push(p(g))}else o.push(p(n.activeIndex));for(c=0;c<o.length;c+=1)if(typeof o[c]<"u"){const g=o[c].offsetHeight;u=g>u?g:u}(u||u===0)&&(n.wrapperEl.style.height=`${u}px`)}function ag(){const i=this,n=i.slides,o=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let a=0;a<n.length;a+=1)n[a].swiperSlideOffset=(i.isHorizontal()?n[a].offsetLeft:n[a].offsetTop)-o-i.cssOverflowAdjustment()}const sf=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function lg(i){i===void 0&&(i=this&&this.translate||0);const n=this,o=n.params,{slides:a,rtlTranslate:u,snapGrid:c}=n;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let p=-i;u&&(p=i),n.visibleSlidesIndexes=[],n.visibleSlides=[];let g=o.spaceBetween;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n.size:typeof g=="string"&&(g=parseFloat(g));for(let f=0;f<a.length;f+=1){const x=a[f];let v=x.swiperSlideOffset;o.cssMode&&o.centeredSlides&&(v-=a[0].swiperSlideOffset);const y=(p+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),k=(p-c[0]+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),b=-(p-v),z=b+n.slidesSizesGrid[f],I=b>=0&&b<=n.size-n.slidesSizesGrid[f],B=b>=0&&b<n.size-1||z>1&&z<=n.size||b<=0&&z>=n.size;B&&(n.visibleSlides.push(x),n.visibleSlidesIndexes.push(f)),sf(x,B,o.slideVisibleClass),sf(x,I,o.slideFullyVisibleClass),x.progress=u?-y:y,x.originalProgress=u?-k:k}}function ug(i){const n=this;if(typeof i>"u"){const v=n.rtlTranslate?-1:1;i=n&&n.translate&&n.translate*v||0}const o=n.params,a=n.maxTranslate()-n.minTranslate();let{progress:u,isBeginning:c,isEnd:p,progressLoop:g}=n;const f=c,x=p;if(a===0)u=0,c=!0,p=!0;else{u=(i-n.minTranslate())/a;const v=Math.abs(i-n.minTranslate())<1,y=Math.abs(i-n.maxTranslate())<1;c=v||u<=0,p=y||u>=1,v&&(u=0),y&&(u=1)}if(o.loop){const v=n.getSlideIndexByData(0),y=n.getSlideIndexByData(n.slides.length-1),k=n.slidesGrid[v],b=n.slidesGrid[y],z=n.slidesGrid[n.slidesGrid.length-1],I=Math.abs(i);I>=k?g=(I-k)/z:g=(I+z-b)/z,g>1&&(g-=1)}Object.assign(n,{progress:u,progressLoop:g,isBeginning:c,isEnd:p}),(o.watchSlidesProgress||o.centeredSlides&&o.autoHeight)&&n.updateSlidesProgress(i),c&&!f&&n.emit("reachBeginning toEdge"),p&&!x&&n.emit("reachEnd toEdge"),(f&&!c||x&&!p)&&n.emit("fromEdge"),n.emit("progress",u)}const ml=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function cg(){const i=this,{slides:n,params:o,slidesEl:a,activeIndex:u}=i,c=i.virtual&&o.virtual.enabled,p=i.grid&&o.grid&&o.grid.rows>1,g=y=>Gt(a,`.${o.slideClass}${y}, swiper-slide${y}`)[0];let f,x,v;if(c)if(o.loop){let y=u-i.virtual.slidesBefore;y<0&&(y=i.virtual.slides.length+y),y>=i.virtual.slides.length&&(y-=i.virtual.slides.length),f=g(`[data-swiper-slide-index="${y}"]`)}else f=g(`[data-swiper-slide-index="${u}"]`);else p?(f=n.filter(y=>y.column===u)[0],v=n.filter(y=>y.column===u+1)[0],x=n.filter(y=>y.column===u-1)[0]):f=n[u];f&&(p||(v=Q0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!v&&(v=n[0]),x=X0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!x===0&&(x=n[n.length-1]))),n.forEach(y=>{ml(y,y===f,o.slideActiveClass),ml(y,y===v,o.slideNextClass),ml(y,y===x,o.slidePrevClass)}),i.emitSlidesClasses()}const qo=(i,n)=>{if(!i||i.destroyed||!i.params)return;const o=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,a=n.closest(o());if(a){let u=a.querySelector(`.${i.params.lazyPreloaderClass}`);!u&&i.isElement&&(a.shadowRoot?u=a.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(u=a.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),u&&u.remove())})),u&&u.remove()}},hl=(i,n)=>{if(!i.slides[n])return;const o=i.slides[n].querySelector('[loading="lazy"]');o&&o.removeAttribute("loading")},_l=i=>{if(!i||i.destroyed||!i.params)return;let n=i.params.lazyPreloadPrevNext;const o=i.slides.length;if(!o||!n||n<0)return;n=Math.min(n,o);const a=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),u=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const p=u,g=[p-n];g.push(...Array.from({length:n}).map((f,x)=>p+a+x)),i.slides.forEach((f,x)=>{g.includes(f.column)&&hl(i,x)});return}const c=u+a-1;if(i.params.rewind||i.params.loop)for(let p=u-n;p<=c+n;p+=1){const g=(p%o+o)%o;(g<u||g>c)&&hl(i,g)}else for(let p=Math.max(u-n,0);p<=Math.min(c+n,o-1);p+=1)p!==u&&(p>c||p<u)&&hl(i,p)};function dg(i){const{slidesGrid:n,params:o}=i,a=i.rtlTranslate?i.translate:-i.translate;let u;for(let c=0;c<n.length;c+=1)typeof n[c+1]<"u"?a>=n[c]&&a<n[c+1]-(n[c+1]-n[c])/2?u=c:a>=n[c]&&a<n[c+1]&&(u=c+1):a>=n[c]&&(u=c);return o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0),u}function fg(i){const n=this,o=n.rtlTranslate?n.translate:-n.translate,{snapGrid:a,params:u,activeIndex:c,realIndex:p,snapIndex:g}=n;let f=i,x;const v=b=>{let z=b-n.virtual.slidesBefore;return z<0&&(z=n.virtual.slides.length+z),z>=n.virtual.slides.length&&(z-=n.virtual.slides.length),z};if(typeof f>"u"&&(f=dg(n)),a.indexOf(o)>=0)x=a.indexOf(o);else{const b=Math.min(u.slidesPerGroupSkip,f);x=b+Math.floor((f-b)/u.slidesPerGroup)}if(x>=a.length&&(x=a.length-1),f===c&&!n.params.loop){x!==g&&(n.snapIndex=x,n.emit("snapIndexChange"));return}if(f===c&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=v(f);return}const y=n.grid&&u.grid&&u.grid.rows>1;let k;if(n.virtual&&u.virtual.enabled&&u.loop)k=v(f);else if(y){const b=n.slides.filter(I=>I.column===f)[0];let z=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(z)&&(z=Math.max(n.slides.indexOf(b),0)),k=Math.floor(z/u.grid.rows)}else if(n.slides[f]){const b=n.slides[f].getAttribute("data-swiper-slide-index");b?k=parseInt(b,10):k=f}else k=f;Object.assign(n,{previousSnapIndex:g,snapIndex:x,previousRealIndex:p,realIndex:k,previousIndex:c,activeIndex:f}),n.initialized&&_l(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(p!==k&&n.emit("realIndexChange"),n.emit("slideChange"))}function pg(i,n){const o=this,a=o.params;let u=i.closest(`.${a.slideClass}, swiper-slide`);!u&&o.isElement&&n&&n.length>1&&n.includes(i)&&[...n.slice(n.indexOf(i)+1,n.length)].forEach(g=>{!u&&g.matches&&g.matches(`.${a.slideClass}, swiper-slide`)&&(u=g)});let c=!1,p;if(u){for(let g=0;g<o.slides.length;g+=1)if(o.slides[g]===u){c=!0,p=g;break}}if(u&&c)o.clickedSlide=u,o.virtual&&o.params.virtual.enabled?o.clickedIndex=parseInt(u.getAttribute("data-swiper-slide-index"),10):o.clickedIndex=p;else{o.clickedSlide=void 0,o.clickedIndex=void 0;return}a.slideToClickedSlide&&o.clickedIndex!==void 0&&o.clickedIndex!==o.activeIndex&&o.slideToClickedSlide()}var mg={updateSize:ig,updateSlides:og,updateAutoHeight:sg,updateSlidesOffset:ag,updateSlidesProgress:lg,updateProgress:ug,updateSlidesClasses:cg,updateActiveIndex:fg,updateClickedSlide:pg};function hg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const n=this,{params:o,rtlTranslate:a,translate:u,wrapperEl:c}=n;if(o.virtualTranslate)return a?-u:u;if(o.cssMode)return u;let p=q0(c,i);return p+=n.cssOverflowAdjustment(),a&&(p=-p),p||0}function gg(i,n){const o=this,{rtlTranslate:a,params:u,wrapperEl:c,progress:p}=o;let g=0,f=0;const x=0;o.isHorizontal()?g=a?-i:i:f=i,u.roundLengths&&(g=Math.floor(g),f=Math.floor(f)),o.previousTranslate=o.translate,o.translate=o.isHorizontal()?g:f,u.cssMode?c[o.isHorizontal()?"scrollLeft":"scrollTop"]=o.isHorizontal()?-g:-f:u.virtualTranslate||(o.isHorizontal()?g-=o.cssOverflowAdjustment():f-=o.cssOverflowAdjustment(),c.style.transform=`translate3d(${g}px, ${f}px, ${x}px)`);let v;const y=o.maxTranslate()-o.minTranslate();y===0?v=0:v=(i-o.minTranslate())/y,v!==p&&o.updateProgress(i),o.emit("setTranslate",o.translate,n)}function vg(){return-this.snapGrid[0]}function yg(){return-this.snapGrid[this.snapGrid.length-1]}function xg(i,n,o,a,u){i===void 0&&(i=0),n===void 0&&(n=this.params.speed),o===void 0&&(o=!0),a===void 0&&(a=!0);const c=this,{params:p,wrapperEl:g}=c;if(c.animating&&p.preventInteractionOnTransition)return!1;const f=c.minTranslate(),x=c.maxTranslate();let v;if(a&&i>f?v=f:a&&i<x?v=x:v=i,c.updateProgress(v),p.cssMode){const y=c.isHorizontal();if(n===0)g[y?"scrollLeft":"scrollTop"]=-v;else{if(!c.support.smoothScroll)return Gf({swiper:c,targetPosition:-v,side:y?"left":"top"}),!0;g.scrollTo({[y?"left":"top"]:-v,behavior:"smooth"})}return!0}return n===0?(c.setTransition(0),c.setTranslate(v),o&&(c.emit("beforeTransitionStart",n,u),c.emit("transitionEnd"))):(c.setTransition(n),c.setTranslate(v),o&&(c.emit("beforeTransitionStart",n,u),c.emit("transitionStart")),c.animating||(c.animating=!0,c.onTranslateToWrapperTransitionEnd||(c.onTranslateToWrapperTransitionEnd=function(k){!c||c.destroyed||k.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onTranslateToWrapperTransitionEnd),c.onTranslateToWrapperTransitionEnd=null,delete c.onTranslateToWrapperTransitionEnd,c.animating=!1,o&&c.emit("transitionEnd"))}),c.wrapperEl.addEventListener("transitionend",c.onTranslateToWrapperTransitionEnd))),!0}var wg={getTranslate:hg,setTranslate:gg,minTranslate:vg,maxTranslate:yg,translateTo:xg};function Sg(i,n){const o=this;o.params.cssMode||(o.wrapperEl.style.transitionDuration=`${i}ms`,o.wrapperEl.style.transitionDelay=i===0?"0ms":""),o.emit("setTransition",i,n)}function Yf(i){let{swiper:n,runCallbacks:o,direction:a,step:u}=i;const{activeIndex:c,previousIndex:p}=n;let g=a;if(g||(c>p?g="next":c<p?g="prev":g="reset"),n.emit(`transition${u}`),o&&c!==p){if(g==="reset"){n.emit(`slideResetTransition${u}`);return}n.emit(`slideChangeTransition${u}`),g==="next"?n.emit(`slideNextTransition${u}`):n.emit(`slidePrevTransition${u}`)}}function kg(i,n){i===void 0&&(i=!0);const o=this,{params:a}=o;a.cssMode||(a.autoHeight&&o.updateAutoHeight(),Yf({swiper:o,runCallbacks:i,direction:n,step:"Start"}))}function bg(i,n){i===void 0&&(i=!0);const o=this,{params:a}=o;o.animating=!1,!a.cssMode&&(o.setTransition(0),Yf({swiper:o,runCallbacks:i,direction:n,step:"End"}))}var Eg={setTransition:Sg,transitionStart:kg,transitionEnd:bg};function Cg(i,n,o,a,u){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const c=this;let p=i;p<0&&(p=0);const{params:g,snapGrid:f,slidesGrid:x,previousIndex:v,activeIndex:y,rtlTranslate:k,wrapperEl:b,enabled:z}=c;if(!z&&!a&&!u||c.destroyed||c.animating&&g.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=c.params.speed);const I=Math.min(c.params.slidesPerGroupSkip,p);let B=I+Math.floor((p-I)/c.params.slidesPerGroup);B>=f.length&&(B=f.length-1);const M=-f[B];if(g.normalizeSlideIndex)for(let N=0;N<x.length;N+=1){const A=-Math.floor(M*100),Q=Math.floor(x[N]*100),G=Math.floor(x[N+1]*100);typeof x[N+1]<"u"?A>=Q&&A<G-(G-Q)/2?p=N:A>=Q&&A<G&&(p=N+1):A>=Q&&(p=N)}if(c.initialized&&p!==y&&(!c.allowSlideNext&&(k?M>c.translate&&M>c.minTranslate():M<c.translate&&M<c.minTranslate())||!c.allowSlidePrev&&M>c.translate&&M>c.maxTranslate()&&(y||0)!==p))return!1;p!==(v||0)&&o&&c.emit("beforeSlideChangeStart"),c.updateProgress(M);let C;p>y?C="next":p<y?C="prev":C="reset";const S=c.virtual&&c.params.virtual.enabled;if(!(S&&u)&&(k&&-M===c.translate||!k&&M===c.translate))return c.updateActiveIndex(p),g.autoHeight&&c.updateAutoHeight(),c.updateSlidesClasses(),g.effect!=="slide"&&c.setTranslate(M),C!=="reset"&&(c.transitionStart(o,C),c.transitionEnd(o,C)),!1;if(g.cssMode){const N=c.isHorizontal(),A=k?M:-M;if(n===0)S&&(c.wrapperEl.style.scrollSnapType="none",c._immediateVirtual=!0),S&&!c._cssModeVirtualInitialSet&&c.params.initialSlide>0?(c._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[N?"scrollLeft":"scrollTop"]=A})):b[N?"scrollLeft":"scrollTop"]=A,S&&requestAnimationFrame(()=>{c.wrapperEl.style.scrollSnapType="",c._immediateVirtual=!1});else{if(!c.support.smoothScroll)return Gf({swiper:c,targetPosition:A,side:N?"left":"top"}),!0;b.scrollTo({[N?"left":"top"]:A,behavior:"smooth"})}return!0}return c.setTransition(n),c.setTranslate(M),c.updateActiveIndex(p),c.updateSlidesClasses(),c.emit("beforeTransitionStart",n,a),c.transitionStart(o,C),n===0?c.transitionEnd(o,C):c.animating||(c.animating=!0,c.onSlideToWrapperTransitionEnd||(c.onSlideToWrapperTransitionEnd=function(A){!c||c.destroyed||A.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onSlideToWrapperTransitionEnd),c.onSlideToWrapperTransitionEnd=null,delete c.onSlideToWrapperTransitionEnd,c.transitionEnd(o,C))}),c.wrapperEl.addEventListener("transitionend",c.onSlideToWrapperTransitionEnd)),!0}function Tg(i,n,o,a){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const u=this;if(u.destroyed)return;typeof n>"u"&&(n=u.params.speed);const c=u.grid&&u.params.grid&&u.params.grid.rows>1;let p=i;if(u.params.loop)if(u.virtual&&u.params.virtual.enabled)p=p+u.virtual.slidesBefore;else{let g;if(c){const k=p*u.params.grid.rows;g=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else g=u.getSlideIndexByData(p);const f=c?Math.ceil(u.slides.length/u.params.grid.rows):u.slides.length,{centeredSlides:x}=u.params;let v=u.params.slidesPerView;v==="auto"?v=u.slidesPerViewDynamic():(v=Math.ceil(parseFloat(u.params.slidesPerView,10)),x&&v%2===0&&(v=v+1));let y=f-g<v;if(x&&(y=y||g<Math.ceil(v/2)),a&&x&&u.params.slidesPerView!=="auto"&&!c&&(y=!1),y){const k=x?g<u.activeIndex?"prev":"next":g-u.activeIndex-1<u.params.slidesPerView?"next":"prev";u.loopFix({direction:k,slideTo:!0,activeSlideIndex:k==="next"?g+1:g-f+1,slideRealIndex:k==="next"?u.realIndex:void 0})}if(c){const k=p*u.params.grid.rows;p=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else p=u.getSlideIndexByData(p)}return requestAnimationFrame(()=>{u.slideTo(p,n,o,a)}),u}function jg(i,n,o){n===void 0&&(n=!0);const a=this,{enabled:u,params:c,animating:p}=a;if(!u||a.destroyed)return a;typeof i>"u"&&(i=a.params.speed);let g=c.slidesPerGroup;c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(g=Math.max(a.slidesPerViewDynamic("current",!0),1));const f=a.activeIndex<c.slidesPerGroupSkip?1:g,x=a.virtual&&c.virtual.enabled;if(c.loop){if(p&&!x&&c.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&c.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+f,i,n,o)}),!0}return c.rewind&&a.isEnd?a.slideTo(0,i,n,o):a.slideTo(a.activeIndex+f,i,n,o)}function zg(i,n,o){n===void 0&&(n=!0);const a=this,{params:u,snapGrid:c,slidesGrid:p,rtlTranslate:g,enabled:f,animating:x}=a;if(!f||a.destroyed)return a;typeof i>"u"&&(i=a.params.speed);const v=a.virtual&&u.virtual.enabled;if(u.loop){if(x&&!v&&u.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const y=g?a.translate:-a.translate;function k(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const b=k(y),z=c.map(M=>k(M));let I=c[z.indexOf(b)-1];if(typeof I>"u"&&u.cssMode){let M;c.forEach((C,S)=>{b>=C&&(M=S)}),typeof M<"u"&&(I=c[M>0?M-1:M])}let B=0;if(typeof I<"u"&&(B=p.indexOf(I),B<0&&(B=a.activeIndex-1),u.slidesPerView==="auto"&&u.slidesPerGroup===1&&u.slidesPerGroupAuto&&(B=B-a.slidesPerViewDynamic("previous",!0)+1,B=Math.max(B,0))),u.rewind&&a.isBeginning){const M=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(M,i,n,o)}else if(u.loop&&a.activeIndex===0&&u.cssMode)return requestAnimationFrame(()=>{a.slideTo(B,i,n,o)}),!0;return a.slideTo(B,i,n,o)}function Pg(i,n,o){n===void 0&&(n=!0);const a=this;if(!a.destroyed)return typeof i>"u"&&(i=a.params.speed),a.slideTo(a.activeIndex,i,n,o)}function _g(i,n,o,a){n===void 0&&(n=!0),a===void 0&&(a=.5);const u=this;if(u.destroyed)return;typeof i>"u"&&(i=u.params.speed);let c=u.activeIndex;const p=Math.min(u.params.slidesPerGroupSkip,c),g=p+Math.floor((c-p)/u.params.slidesPerGroup),f=u.rtlTranslate?u.translate:-u.translate;if(f>=u.snapGrid[g]){const x=u.snapGrid[g],v=u.snapGrid[g+1];f-x>(v-x)*a&&(c+=u.params.slidesPerGroup)}else{const x=u.snapGrid[g-1],v=u.snapGrid[g];f-x<=(v-x)*a&&(c-=u.params.slidesPerGroup)}return c=Math.max(c,0),c=Math.min(c,u.slidesGrid.length-1),u.slideTo(c,i,n,o)}function Mg(){const i=this;if(i.destroyed)return;const{params:n,slidesEl:o}=i,a=n.slidesPerView==="auto"?i.slidesPerViewDynamic():n.slidesPerView;let u=i.clickedIndex,c;const p=i.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(i.animating)return;c=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?u<i.loopedSlides-a/2||u>i.slides.length-i.loopedSlides+a/2?(i.loopFix(),u=i.getSlideIndex(Gt(o,`${p}[data-swiper-slide-index="${c}"]`)[0]),zl(()=>{i.slideTo(u)})):i.slideTo(u):u>i.slides.length-a?(i.loopFix(),u=i.getSlideIndex(Gt(o,`${p}[data-swiper-slide-index="${c}"]`)[0]),zl(()=>{i.slideTo(u)})):i.slideTo(u)}else i.slideTo(u)}var Lg={slideTo:Cg,slideToLoop:Tg,slideNext:jg,slidePrev:zg,slideReset:Pg,slideToClosest:_g,slideToClickedSlide:Mg};function Og(i){const n=this,{params:o,slidesEl:a}=n;if(!o.loop||n.virtual&&n.params.virtual.enabled)return;const u=()=>{Gt(a,`.${o.slideClass}, swiper-slide`).forEach((y,k)=>{y.setAttribute("data-swiper-slide-index",k)})},c=n.grid&&o.grid&&o.grid.rows>1,p=o.slidesPerGroup*(c?o.grid.rows:1),g=n.slides.length%p!==0,f=c&&n.slides.length%o.grid.rows!==0,x=v=>{for(let y=0;y<v;y+=1){const k=n.isElement?Jo("swiper-slide",[o.slideBlankClass]):Jo("div",[o.slideClass,o.slideBlankClass]);n.slidesEl.append(k)}};if(g){if(o.loopAddBlankSlides){const v=p-n.slides.length%p;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else if(f){if(o.loopAddBlankSlides){const v=o.grid.rows-n.slides.length%o.grid.rows;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else u();n.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next"})}function Ig(i){let{slideRealIndex:n,slideTo:o=!0,direction:a,setTranslate:u,activeSlideIndex:c,byController:p,byMousewheel:g}=i===void 0?{}:i;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:x,allowSlidePrev:v,allowSlideNext:y,slidesEl:k,params:b}=f,{centeredSlides:z}=b;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&b.virtual.enabled){o&&(!b.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):b.centeredSlides&&f.snapIndex<b.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=v,f.allowSlideNext=y,f.emit("loopFix");return}let I=b.slidesPerView;I==="auto"?I=f.slidesPerViewDynamic():(I=Math.ceil(parseFloat(b.slidesPerView,10)),z&&I%2===0&&(I=I+1));const B=b.slidesPerGroupAuto?I:b.slidesPerGroup;let M=B;M%B!==0&&(M+=B-M%B),M+=b.loopAdditionalSlides,f.loopedSlides=M;const C=f.grid&&b.grid&&b.grid.rows>1;x.length<I+M?Zo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):C&&b.grid.fill==="row"&&Zo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],_=[];let N=f.activeIndex;typeof c>"u"?c=f.getSlideIndex(x.filter($=>$.classList.contains(b.slideActiveClass))[0]):N=c;const A=a==="next"||!a,Q=a==="prev"||!a;let G=0,H=0;const W=C?Math.ceil(x.length/b.grid.rows):x.length,D=(C?x[c].column:c)+(z&&typeof u>"u"?-I/2+.5:0);if(D<M){G=Math.max(M-D,B);for(let $=0;$<M-D;$+=1){const U=$-Math.floor($/W)*W;if(C){const re=W-U-1;for(let me=x.length-1;me>=0;me-=1)x[me].column===re&&S.push(me)}else S.push(W-U-1)}}else if(D+I>W-M){H=Math.max(D-(W-M*2),B);for(let $=0;$<H;$+=1){const U=$-Math.floor($/W)*W;C?x.forEach((re,me)=>{re.column===U&&_.push(me)}):_.push(U)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),Q&&S.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.prepend(x[$]),x[$].swiperLoopMoveDOM=!1}),A&&_.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.append(x[$]),x[$].swiperLoopMoveDOM=!1}),f.recalcSlides(),b.slidesPerView==="auto"?f.updateSlides():C&&(S.length>0&&Q||_.length>0&&A)&&f.slides.forEach(($,U)=>{f.grid.updateSlide(U,$,f.slides)}),b.watchSlidesProgress&&f.updateSlidesOffset(),o){if(S.length>0&&Q){if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N+G]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N+Math.ceil(G),0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else if(u){const $=C?S.length/b.grid.rows:S.length;f.slideTo(f.activeIndex+$,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(_.length>0&&A)if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N-H]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N-H,0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else{const $=C?_.length/b.grid.rows:_.length;f.slideTo(f.activeIndex-$,0,!1,!0)}}if(f.allowSlidePrev=v,f.allowSlideNext=y,f.controller&&f.controller.control&&!p){const $={slideRealIndex:n,direction:a,setTranslate:u,activeSlideIndex:c,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...$,slideTo:U.params.slidesPerView===b.slidesPerView?o:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...$,slideTo:f.controller.control.params.slidesPerView===b.slidesPerView?o:!1})}f.emit("loopFix")}function Ng(){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const a=[];i.slides.forEach(u=>{const c=typeof u.swiperSlideIndex>"u"?u.getAttribute("data-swiper-slide-index")*1:u.swiperSlideIndex;a[c]=u}),i.slides.forEach(u=>{u.removeAttribute("data-swiper-slide-index")}),a.forEach(u=>{o.append(u)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Ag={loopCreate:Og,loopFix:Ig,loopDestroy:Ng};function Dg(i){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const o=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),o.style.cursor="move",o.style.cursor=i?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function Rg(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Fg={setGrabCursor:Dg,unsetGrabCursor:Rg};function Bg(i,n){n===void 0&&(n=this);function o(a){if(!a||a===nn()||a===St())return null;a.assignedSlot&&(a=a.assignedSlot);const u=a.closest(i);return!u&&!a.getRootNode?null:u||o(a.getRootNode().host)}return o(n)}function af(i,n,o){const a=St(),{params:u}=i,c=u.edgeSwipeDetection,p=u.edgeSwipeThreshold;return c&&(o<=p||o>=a.innerWidth-p)?c==="prevent"?(n.preventDefault(),!0):!1:!0}function $g(i){const n=this,o=nn();let a=i;a.originalEvent&&(a=a.originalEvent);const u=n.touchEventsData;if(a.type==="pointerdown"){if(u.pointerId!==null&&u.pointerId!==a.pointerId)return;u.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(u.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){af(n,a,a.targetTouches[0].pageX);return}const{params:c,touches:p,enabled:g}=n;if(!g||!c.simulateTouch&&a.pointerType==="mouse"||n.animating&&c.preventInteractionOnTransition)return;!n.animating&&c.cssMode&&c.loop&&n.loopFix();let f=a.target;if(c.touchEventsTarget==="wrapper"&&!Y0(f,n.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||u.isTouched&&u.isMoved)return;const x=!!c.noSwipingClass&&c.noSwipingClass!=="",v=a.composedPath?a.composedPath():a.path;x&&a.target&&a.target.shadowRoot&&v&&(f=v[0]);const y=c.noSwipingSelector?c.noSwipingSelector:`.${c.noSwipingClass}`,k=!!(a.target&&a.target.shadowRoot);if(c.noSwiping&&(k?Bg(y,f):f.closest(y))){n.allowClick=!0;return}if(c.swipeHandler&&!f.closest(c.swipeHandler))return;p.currentX=a.pageX,p.currentY=a.pageY;const b=p.currentX,z=p.currentY;if(!af(n,a,b))return;Object.assign(u,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),p.startX=b,p.startY=z,u.touchStartTime=$n(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,c.threshold>0&&(u.allowThresholdMove=!1);let I=!0;f.matches(u.focusableElements)&&(I=!1,f.nodeName==="SELECT"&&(u.isTouched=!1)),o.activeElement&&o.activeElement.matches(u.focusableElements)&&o.activeElement!==f&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!f.matches(u.focusableElements))&&o.activeElement.blur();const B=I&&n.allowTouchMove&&c.touchStartPreventDefault;(c.touchStartForcePreventDefault||B)&&!f.isContentEditable&&a.preventDefault(),c.freeMode&&c.freeMode.enabled&&n.freeMode&&n.animating&&!c.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",a)}function Vg(i){const n=nn(),o=this,a=o.touchEventsData,{params:u,touches:c,rtlTranslate:p,enabled:g}=o;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(a.touchId!==null||f.pointerId!==a.pointerId))return;let x;if(f.type==="touchmove"){if(x=[...f.changedTouches].filter(A=>A.identifier===a.touchId)[0],!x||x.identifier!==a.touchId)return}else x=f;if(!a.isTouched){a.startMoving&&a.isScrolling&&o.emit("touchMoveOpposite",f);return}const v=x.pageX,y=x.pageY;if(f.preventedByNestedSwiper){c.startX=v,c.startY=y;return}if(!o.allowTouchMove){f.target.matches(a.focusableElements)||(o.allowClick=!1),a.isTouched&&(Object.assign(c,{startX:v,startY:y,currentX:v,currentY:y}),a.touchStartTime=$n());return}if(u.touchReleaseOnEdges&&!u.loop){if(o.isVertical()){if(y<c.startY&&o.translate<=o.maxTranslate()||y>c.startY&&o.translate>=o.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else if(v<c.startX&&o.translate<=o.maxTranslate()||v>c.startX&&o.translate>=o.minTranslate())return}if(n.activeElement&&n.activeElement.matches(a.focusableElements)&&n.activeElement!==f.target&&f.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&f.target===n.activeElement&&f.target.matches(a.focusableElements)){a.isMoved=!0,o.allowClick=!1;return}a.allowTouchCallbacks&&o.emit("touchMove",f),c.previousX=c.currentX,c.previousY=c.currentY,c.currentX=v,c.currentY=y;const k=c.currentX-c.startX,b=c.currentY-c.startY;if(o.params.threshold&&Math.sqrt(k**2+b**2)<o.params.threshold)return;if(typeof a.isScrolling>"u"){let A;o.isHorizontal()&&c.currentY===c.startY||o.isVertical()&&c.currentX===c.startX?a.isScrolling=!1:k*k+b*b>=25&&(A=Math.atan2(Math.abs(b),Math.abs(k))*180/Math.PI,a.isScrolling=o.isHorizontal()?A>u.touchAngle:90-A>u.touchAngle)}if(a.isScrolling&&o.emit("touchMoveOpposite",f),typeof a.startMoving>"u"&&(c.currentX!==c.startX||c.currentY!==c.startY)&&(a.startMoving=!0),a.isScrolling||f.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;o.allowClick=!1,!u.cssMode&&f.cancelable&&f.preventDefault(),u.touchMoveStopPropagation&&!u.nested&&f.stopPropagation();let z=o.isHorizontal()?k:b,I=o.isHorizontal()?c.currentX-c.previousX:c.currentY-c.previousY;u.oneWayMovement&&(z=Math.abs(z)*(p?1:-1),I=Math.abs(I)*(p?1:-1)),c.diff=z,z*=u.touchRatio,p&&(z=-z,I=-I);const B=o.touchesDirection;o.swipeDirection=z>0?"prev":"next",o.touchesDirection=I>0?"prev":"next";const M=o.params.loop&&!u.cssMode,C=o.touchesDirection==="next"&&o.allowSlideNext||o.touchesDirection==="prev"&&o.allowSlidePrev;if(!a.isMoved){if(M&&C&&o.loopFix({direction:o.swipeDirection}),a.startTranslate=o.getTranslate(),o.setTransition(0),o.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});o.wrapperEl.dispatchEvent(A)}a.allowMomentumBounce=!1,u.grabCursor&&(o.allowSlideNext===!0||o.allowSlidePrev===!0)&&o.setGrabCursor(!0),o.emit("sliderFirstMove",f)}let S;if(new Date().getTime(),a.isMoved&&a.allowThresholdMove&&B!==o.touchesDirection&&M&&C&&Math.abs(z)>=1){Object.assign(c,{startX:v,startY:y,currentX:v,currentY:y,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}o.emit("sliderMove",f),a.isMoved=!0,a.currentTranslate=z+a.startTranslate;let _=!0,N=u.resistanceRatio;if(u.touchReleaseOnEdges&&(N=0),z>0?(M&&C&&!S&&a.allowThresholdMove&&a.currentTranslate>(u.centeredSlides?o.minTranslate()-o.slidesSizesGrid[o.activeIndex+1]-(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.activeIndex+1]+o.params.spaceBetween:0)-o.params.spaceBetween:o.minTranslate())&&o.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>o.minTranslate()&&(_=!1,u.resistance&&(a.currentTranslate=o.minTranslate()-1+(-o.minTranslate()+a.startTranslate+z)**N))):z<0&&(M&&C&&!S&&a.allowThresholdMove&&a.currentTranslate<(u.centeredSlides?o.maxTranslate()+o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween+(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween:0):o.maxTranslate())&&o.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:o.slides.length-(u.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(u.slidesPerView,10)))}),a.currentTranslate<o.maxTranslate()&&(_=!1,u.resistance&&(a.currentTranslate=o.maxTranslate()+1-(o.maxTranslate()-a.startTranslate-z)**N))),_&&(f.preventedByNestedSwiper=!0),!o.allowSlideNext&&o.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!o.allowSlidePrev&&o.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!o.allowSlidePrev&&!o.allowSlideNext&&(a.currentTranslate=a.startTranslate),u.threshold>0)if(Math.abs(z)>u.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,c.startX=c.currentX,c.startY=c.currentY,a.currentTranslate=a.startTranslate,c.diff=o.isHorizontal()?c.currentX-c.startX:c.currentY-c.startY;return}}else{a.currentTranslate=a.startTranslate;return}!u.followFinger||u.cssMode||((u.freeMode&&u.freeMode.enabled&&o.freeMode||u.watchSlidesProgress)&&(o.updateActiveIndex(),o.updateSlidesClasses()),u.freeMode&&u.freeMode.enabled&&o.freeMode&&o.freeMode.onTouchMove(),o.updateProgress(a.currentTranslate),o.setTranslate(a.currentTranslate))}function Hg(i){const n=this,o=n.touchEventsData;let a=i;a.originalEvent&&(a=a.originalEvent);let u;if(a.type==="touchend"||a.type==="touchcancel"){if(u=[...a.changedTouches].filter(N=>N.identifier===o.touchId)[0],!u||u.identifier!==o.touchId)return}else{if(o.touchId!==null||a.pointerId!==o.pointerId)return;u=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(n.browser.isSafari||n.browser.isWebView)))return;o.pointerId=null,o.touchId=null;const{params:p,touches:g,rtlTranslate:f,slidesGrid:x,enabled:v}=n;if(!v||!p.simulateTouch&&a.pointerType==="mouse")return;if(o.allowTouchCallbacks&&n.emit("touchEnd",a),o.allowTouchCallbacks=!1,!o.isTouched){o.isMoved&&p.grabCursor&&n.setGrabCursor(!1),o.isMoved=!1,o.startMoving=!1;return}p.grabCursor&&o.isMoved&&o.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const y=$n(),k=y-o.touchStartTime;if(n.allowClick){const N=a.path||a.composedPath&&a.composedPath();n.updateClickedSlide(N&&N[0]||a.target,N),n.emit("tap click",a),k<300&&y-o.lastClickTime<300&&n.emit("doubleTap doubleClick",a)}if(o.lastClickTime=$n(),zl(()=>{n.destroyed||(n.allowClick=!0)}),!o.isTouched||!o.isMoved||!n.swipeDirection||g.diff===0&&!o.loopSwapReset||o.currentTranslate===o.startTranslate&&!o.loopSwapReset){o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;return}o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;let b;if(p.followFinger?b=f?n.translate:-n.translate:b=-o.currentTranslate,p.cssMode)return;if(p.freeMode&&p.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:b});return}const z=b>=-n.maxTranslate()&&!n.params.loop;let I=0,B=n.slidesSizesGrid[0];for(let N=0;N<x.length;N+=N<p.slidesPerGroupSkip?1:p.slidesPerGroup){const A=N<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;typeof x[N+A]<"u"?(z||b>=x[N]&&b<x[N+A])&&(I=N,B=x[N+A]-x[N]):(z||b>=x[N])&&(I=N,B=x[x.length-1]-x[x.length-2])}let M=null,C=null;p.rewind&&(n.isBeginning?C=p.virtual&&p.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(M=0));const S=(b-x[I])/B,_=I<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;if(k>p.longSwipesMs){if(!p.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(S>=p.longSwipesRatio?n.slideTo(p.rewind&&n.isEnd?M:I+_):n.slideTo(I)),n.swipeDirection==="prev"&&(S>1-p.longSwipesRatio?n.slideTo(I+_):C!==null&&S<0&&Math.abs(S)>p.longSwipesRatio?n.slideTo(C):n.slideTo(I))}else{if(!p.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(a.target===n.navigation.nextEl||a.target===n.navigation.prevEl)?a.target===n.navigation.nextEl?n.slideTo(I+_):n.slideTo(I):(n.swipeDirection==="next"&&n.slideTo(M!==null?M:I+_),n.swipeDirection==="prev"&&n.slideTo(C!==null?C:I))}}function lf(){const i=this,{params:n,el:o}=i;if(o&&o.offsetWidth===0)return;n.breakpoints&&i.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:u,snapGrid:c}=i,p=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const g=p&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!g?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!p?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=u,i.allowSlideNext=a,i.params.watchOverflow&&c!==i.snapGrid&&i.checkOverflow()}function Gg(i){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&i.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Wg(){const i=this,{wrapperEl:n,rtlTranslate:o,enabled:a}=i;if(!a)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-n.scrollLeft:i.translate=-n.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let u;const c=i.maxTranslate()-i.minTranslate();c===0?u=0:u=(i.translate-i.minTranslate())/c,u!==i.progress&&i.updateProgress(o?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function qg(i){const n=this;qo(n,i.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function Ug(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Xf=(i,n)=>{const o=nn(),{params:a,el:u,wrapperEl:c,device:p}=i,g=!!a.nested,f=n==="on"?"addEventListener":"removeEventListener",x=n;!u||typeof u=="string"||(o[f]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:g}),u[f]("touchstart",i.onTouchStart,{passive:!1}),u[f]("pointerdown",i.onTouchStart,{passive:!1}),o[f]("touchmove",i.onTouchMove,{passive:!1,capture:g}),o[f]("pointermove",i.onTouchMove,{passive:!1,capture:g}),o[f]("touchend",i.onTouchEnd,{passive:!0}),o[f]("pointerup",i.onTouchEnd,{passive:!0}),o[f]("pointercancel",i.onTouchEnd,{passive:!0}),o[f]("touchcancel",i.onTouchEnd,{passive:!0}),o[f]("pointerout",i.onTouchEnd,{passive:!0}),o[f]("pointerleave",i.onTouchEnd,{passive:!0}),o[f]("contextmenu",i.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&u[f]("click",i.onClick,!0),a.cssMode&&c[f]("scroll",i.onScroll),a.updateOnWindowResize?i[x](p.ios||p.android?"resize orientationchange observerUpdate":"resize observerUpdate",lf,!0):i[x]("observerUpdate",lf,!0),u[f]("load",i.onLoad,{capture:!0}))};function Yg(){const i=this,{params:n}=i;i.onTouchStart=$g.bind(i),i.onTouchMove=Vg.bind(i),i.onTouchEnd=Hg.bind(i),i.onDocumentTouchStart=Ug.bind(i),n.cssMode&&(i.onScroll=Wg.bind(i)),i.onClick=Gg.bind(i),i.onLoad=qg.bind(i),Xf(i,"on")}function Xg(){Xf(this,"off")}var Qg={attachEvents:Yg,detachEvents:Xg};const uf=(i,n)=>i.grid&&n.grid&&n.grid.rows>1;function Kg(){const i=this,{realIndex:n,initialized:o,params:a,el:u}=i,c=a.breakpoints;if(!c||c&&Object.keys(c).length===0)return;const p=i.getBreakpoint(c,i.params.breakpointsBase,i.el);if(!p||i.currentBreakpoint===p)return;const f=(p in c?c[p]:void 0)||i.originalParams,x=uf(i,a),v=uf(i,f),y=i.params.grabCursor,k=f.grabCursor,b=a.enabled;x&&!v?(u.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),i.emitContainerClasses()):!x&&v&&(u.classList.add(`${a.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&a.grid.fill==="column")&&u.classList.add(`${a.containerModifierClass}grid-column`),i.emitContainerClasses()),y&&!k?i.unsetGrabCursor():!y&&k&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(S=>{if(typeof f[S]>"u")return;const _=a[S]&&a[S].enabled,N=f[S]&&f[S].enabled;_&&!N&&i[S].disable(),!_&&N&&i[S].enable()});const z=f.direction&&f.direction!==a.direction,I=a.loop&&(f.slidesPerView!==a.slidesPerView||z),B=a.loop;z&&o&&i.changeDirection(),xt(i.params,f);const M=i.params.enabled,C=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),b&&!M?i.disable():!b&&M&&i.enable(),i.currentBreakpoint=p,i.emit("_beforeBreakpoint",f),o&&(I?(i.loopDestroy(),i.loopCreate(n),i.updateSlides()):!B&&C?(i.loopCreate(n),i.updateSlides()):B&&!C&&i.loopDestroy()),i.emit("breakpoint",f)}function Zg(i,n,o){if(n===void 0&&(n="window"),!i||n==="container"&&!o)return;let a=!1;const u=St(),c=n==="window"?u.innerHeight:o.clientHeight,p=Object.keys(i).map(g=>{if(typeof g=="string"&&g.indexOf("@")===0){const f=parseFloat(g.substr(1));return{value:c*f,point:g}}return{value:g,point:g}});p.sort((g,f)=>parseInt(g.value,10)-parseInt(f.value,10));for(let g=0;g<p.length;g+=1){const{point:f,value:x}=p[g];n==="window"?u.matchMedia(`(min-width: ${x}px)`).matches&&(a=f):x<=o.clientWidth&&(a=f)}return a||"max"}var Jg={setBreakpoint:Kg,getBreakpoint:Zg};function ev(i,n){const o=[];return i.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(u=>{a[u]&&o.push(n+u)}):typeof a=="string"&&o.push(n+a)}),o}function tv(){const i=this,{classNames:n,params:o,rtl:a,el:u,device:c}=i,p=ev(["initialized",o.direction,{"free-mode":i.params.freeMode&&o.freeMode.enabled},{autoheight:o.autoHeight},{rtl:a},{grid:o.grid&&o.grid.rows>1},{"grid-column":o.grid&&o.grid.rows>1&&o.grid.fill==="column"},{android:c.android},{ios:c.ios},{"css-mode":o.cssMode},{centered:o.cssMode&&o.centeredSlides},{"watch-progress":o.watchSlidesProgress}],o.containerModifierClass);n.push(...p),u.classList.add(...n),i.emitContainerClasses()}function nv(){const i=this,{el:n,classNames:o}=i;!n||typeof n=="string"||(n.classList.remove(...o),i.emitContainerClasses())}var rv={addClasses:tv,removeClasses:nv};function iv(){const i=this,{isLocked:n,params:o}=i,{slidesOffsetBefore:a}=o;if(a){const u=i.slides.length-1,c=i.slidesGrid[u]+i.slidesSizesGrid[u]+a*2;i.isLocked=i.size>c}else i.isLocked=i.snapGrid.length===1;o.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),o.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),n&&n!==i.isLocked&&(i.isEnd=!1),n!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var ov={checkOverflow:iv},Ml={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function sv(i,n){return function(a){a===void 0&&(a={});const u=Object.keys(a)[0],c=a[u];if(typeof c!="object"||c===null){xt(n,a);return}if(i[u]===!0&&(i[u]={enabled:!0}),u==="navigation"&&i[u]&&i[u].enabled&&!i[u].prevEl&&!i[u].nextEl&&(i[u].auto=!0),["pagination","scrollbar"].indexOf(u)>=0&&i[u]&&i[u].enabled&&!i[u].el&&(i[u].auto=!0),!(u in i&&"enabled"in c)){xt(n,a);return}typeof i[u]=="object"&&!("enabled"in i[u])&&(i[u].enabled=!0),i[u]||(i[u]={enabled:!1}),xt(n,a)}}const gl={eventsEmitter:rg,update:mg,translate:wg,transition:Eg,slide:Lg,loop:Ag,grabCursor:Fg,events:Qg,breakpoints:Jg,checkOverflow:ov,classes:rv},vl={};let Bl=class en{constructor(){let n,o;for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];u.length===1&&u[0].constructor&&Object.prototype.toString.call(u[0]).slice(8,-1)==="Object"?o=u[0]:[n,o]=u,o||(o={}),o=xt({},o),n&&!o.el&&(o.el=n);const p=nn();if(o.el&&typeof o.el=="string"&&p.querySelectorAll(o.el).length>1){const v=[];return p.querySelectorAll(o.el).forEach(y=>{const k=xt({},o,{el:y});v.push(new en(k))}),v}const g=this;g.__swiper__=!0,g.support=qf(),g.device=Uf({userAgent:o.userAgent}),g.browser=eg(),g.eventsListeners={},g.eventsAnyListeners=[],g.modules=[...g.__modules__],o.modules&&Array.isArray(o.modules)&&g.modules.push(...o.modules);const f={};g.modules.forEach(v=>{v({params:o,swiper:g,extendParams:sv(o,f),on:g.on.bind(g),once:g.once.bind(g),off:g.off.bind(g),emit:g.emit.bind(g)})});const x=xt({},Ml,f);return g.params=xt({},x,vl,o),g.originalParams=xt({},g.params),g.passedParams=xt({},o),g.params&&g.params.on&&Object.keys(g.params.on).forEach(v=>{g.on(v,g.params.on[v])}),g.params&&g.params.onAny&&g.onAny(g.params.onAny),Object.assign(g,{enabled:g.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return g.params.direction==="horizontal"},isVertical(){return g.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:g.params.allowSlideNext,allowSlidePrev:g.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:g.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:g.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),g.emit("_swiper"),g.params.init&&g.init(),g}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:o,params:a}=this,u=Gt(o,`.${a.slideClass}, swiper-slide`),c=es(u[0]);return es(n)-c}getSlideIndexByData(n){return this.getSlideIndex(this.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===n)[0])}recalcSlides(){const n=this,{slidesEl:o,params:a}=n;n.slides=Gt(o,`.${a.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,o){const a=this;n=Math.min(Math.max(n,0),1);const u=a.minTranslate(),p=(a.maxTranslate()-u)*n+u;a.translateTo(p,typeof o>"u"?0:o),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=n.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",o.join(" "))}getSlideClasses(n){const o=this;return o.destroyed?"":n.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(o.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=[];n.slides.forEach(a=>{const u=n.getSlideClasses(a);o.push({slideEl:a,classNames:u}),n.emit("_slideClass",a,u)}),n.emit("_slideClasses",o)}slidesPerViewDynamic(n,o){n===void 0&&(n="current"),o===void 0&&(o=!1);const a=this,{params:u,slides:c,slidesGrid:p,slidesSizesGrid:g,size:f,activeIndex:x}=a;let v=1;if(typeof u.slidesPerView=="number")return u.slidesPerView;if(u.centeredSlides){let y=c[x]?Math.ceil(c[x].swiperSlideSize):0,k;for(let b=x+1;b<c.length;b+=1)c[b]&&!k&&(y+=Math.ceil(c[b].swiperSlideSize),v+=1,y>f&&(k=!0));for(let b=x-1;b>=0;b-=1)c[b]&&!k&&(y+=c[b].swiperSlideSize,v+=1,y>f&&(k=!0))}else if(n==="current")for(let y=x+1;y<c.length;y+=1)(o?p[y]+g[y]-p[x]<f:p[y]-p[x]<f)&&(v+=1);else for(let y=x-1;y>=0;y-=1)p[x]-p[y]<f&&(v+=1);return v}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:o,params:a}=n;a.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(p=>{p.complete&&qo(n,p)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function u(){const p=n.rtlTranslate?n.translate*-1:n.translate,g=Math.min(Math.max(p,n.maxTranslate()),n.minTranslate());n.setTranslate(g),n.updateActiveIndex(),n.updateSlidesClasses()}let c;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)u(),a.autoHeight&&n.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&n.isEnd&&!a.centeredSlides){const p=n.virtual&&a.virtual.enabled?n.virtual.slides:n.slides;c=n.slideTo(p.length-1,0,!1,!0)}else c=n.slideTo(n.activeIndex,0,!1,!0);c||u()}a.watchOverflow&&o!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,o){o===void 0&&(o=!0);const a=this,u=a.params.direction;return n||(n=u==="horizontal"?"vertical":"horizontal"),n===u||n!=="horizontal"&&n!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${u}`),a.el.classList.add(`${a.params.containerModifierClass}${n}`),a.emitContainerClasses(),a.params.direction=n,a.slides.forEach(c=>{n==="vertical"?c.style.width="":c.style.height=""}),a.emit("changeDirection"),o&&a.update()),a}changeLanguageDirection(n){const o=this;o.rtl&&n==="rtl"||!o.rtl&&n==="ltr"||(o.rtl=n==="rtl",o.rtlTranslate=o.params.direction==="horizontal"&&o.rtl,o.rtl?(o.el.classList.add(`${o.params.containerModifierClass}rtl`),o.el.dir="rtl"):(o.el.classList.remove(`${o.params.containerModifierClass}rtl`),o.el.dir="ltr"),o.update())}mount(n){const o=this;if(o.mounted)return!0;let a=n||o.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=o,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===o.params.swiperElementNodeName.toUpperCase()&&(o.isElement=!0);const u=()=>`.${(o.params.wrapperClass||"").trim().split(" ").join(".")}`;let p=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(u()):Gt(a,u())[0];return!p&&o.params.createElements&&(p=Jo("div",o.params.wrapperClass),a.append(p),Gt(a,`.${o.params.slideClass}`).forEach(g=>{p.append(g)})),Object.assign(o,{el:a,wrapperEl:p,slidesEl:o.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:p,hostEl:o.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||En(a,"direction")==="rtl",rtlTranslate:o.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||En(a,"direction")==="rtl"),wrongRTL:En(p,"display")==="-webkit-box"}),!0}init(n){const o=this;if(o.initialized||o.mount(n)===!1)return o;o.emit("beforeInit"),o.params.breakpoints&&o.setBreakpoint(),o.addClasses(),o.updateSize(),o.updateSlides(),o.params.watchOverflow&&o.checkOverflow(),o.params.grabCursor&&o.enabled&&o.setGrabCursor(),o.params.loop&&o.virtual&&o.params.virtual.enabled?o.slideTo(o.params.initialSlide+o.virtual.slidesBefore,0,o.params.runCallbacksOnInit,!1,!0):o.slideTo(o.params.initialSlide,0,o.params.runCallbacksOnInit,!1,!0),o.params.loop&&o.loopCreate(),o.attachEvents();const u=[...o.el.querySelectorAll('[loading="lazy"]')];return o.isElement&&u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),u.forEach(c=>{c.complete?qo(o,c):c.addEventListener("load",p=>{qo(o,p.target)})}),_l(o),o.initialized=!0,_l(o),o.emit("init"),o.emit("afterInit"),o}destroy(n,o){n===void 0&&(n=!0),o===void 0&&(o=!0);const a=this,{params:u,el:c,wrapperEl:p,slides:g}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),u.loop&&a.loopDestroy(),o&&(a.removeClasses(),c&&typeof c!="string"&&c.removeAttribute("style"),p&&p.removeAttribute("style"),g&&g.length&&g.forEach(f=>{f.classList.remove(u.slideVisibleClass,u.slideFullyVisibleClass,u.slideActiveClass,u.slideNextClass,u.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(f=>{a.off(f)}),n!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),G0(a)),a.destroyed=!0),null}static extendDefaults(n){xt(vl,n)}static get extendedDefaults(){return vl}static get defaults(){return Ml}static installModule(n){en.prototype.__modules__||(en.prototype.__modules__=[]);const o=en.prototype.__modules__;typeof n=="function"&&o.indexOf(n)<0&&o.push(n)}static use(n){return Array.isArray(n)?(n.forEach(o=>en.installModule(o)),en):(en.installModule(n),en)}};Object.keys(gl).forEach(i=>{Object.keys(gl[i]).forEach(n=>{Bl.prototype[n]=gl[i][n]})});Bl.use([tg,ng]);const Qf=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Vn(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function Sr(i,n){const o=["__proto__","constructor","prototype"];Object.keys(n).filter(a=>o.indexOf(a)<0).forEach(a=>{typeof i[a]>"u"?i[a]=n[a]:Vn(n[a])&&Vn(i[a])&&Object.keys(n[a]).length>0?n[a].__swiper__?i[a]=n[a]:Sr(i[a],n[a]):i[a]=n[a]})}function Kf(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Zf(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Jf(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function ep(i){i===void 0&&(i="");const n=i.split(" ").map(a=>a.trim()).filter(a=>!!a),o=[];return n.forEach(a=>{o.indexOf(a)<0&&o.push(a)}),o.join(" ")}function av(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function lv(i){let{swiper:n,slides:o,passedParams:a,changedParams:u,nextEl:c,prevEl:p,scrollbarEl:g,paginationEl:f}=i;const x=u.filter(H=>H!=="children"&&H!=="direction"&&H!=="wrapperClass"),{params:v,pagination:y,navigation:k,scrollbar:b,virtual:z,thumbs:I}=n;let B,M,C,S,_,N,A,Q;u.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&v.thumbs&&(!v.thumbs.swiper||v.thumbs.swiper.destroyed)&&(B=!0),u.includes("controller")&&a.controller&&a.controller.control&&v.controller&&!v.controller.control&&(M=!0),u.includes("pagination")&&a.pagination&&(a.pagination.el||f)&&(v.pagination||v.pagination===!1)&&y&&!y.el&&(C=!0),u.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||g)&&(v.scrollbar||v.scrollbar===!1)&&b&&!b.el&&(S=!0),u.includes("navigation")&&a.navigation&&(a.navigation.prevEl||p)&&(a.navigation.nextEl||c)&&(v.navigation||v.navigation===!1)&&k&&!k.prevEl&&!k.nextEl&&(_=!0);const G=H=>{n[H]&&(n[H].destroy(),H==="navigation"?(n.isElement&&(n[H].prevEl.remove(),n[H].nextEl.remove()),v[H].prevEl=void 0,v[H].nextEl=void 0,n[H].prevEl=void 0,n[H].nextEl=void 0):(n.isElement&&n[H].el.remove(),v[H].el=void 0,n[H].el=void 0))};u.includes("loop")&&n.isElement&&(v.loop&&!a.loop?N=!0:!v.loop&&a.loop?A=!0:Q=!0),x.forEach(H=>{if(Vn(v[H])&&Vn(a[H]))Object.assign(v[H],a[H]),(H==="navigation"||H==="pagination"||H==="scrollbar")&&"enabled"in a[H]&&!a[H].enabled&&G(H);else{const W=a[H];(W===!0||W===!1)&&(H==="navigation"||H==="pagination"||H==="scrollbar")?W===!1&&G(H):v[H]=a[H]}}),x.includes("controller")&&!M&&n.controller&&n.controller.control&&v.controller&&v.controller.control&&(n.controller.control=v.controller.control),u.includes("children")&&o&&z&&v.virtual.enabled?(z.slides=o,z.update(!0)):u.includes("virtual")&&z&&v.virtual.enabled&&(o&&(z.slides=o),z.update(!0)),u.includes("children")&&o&&v.loop&&(Q=!0),B&&I.init()&&I.update(!0),M&&(n.controller.control=v.controller.control),C&&(n.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),n.el.appendChild(f)),f&&(v.pagination.el=f),y.init(),y.render(),y.update()),S&&(n.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-scrollbar"),g.part.add("scrollbar"),n.el.appendChild(g)),g&&(v.scrollbar.el=g),b.init(),b.updateSize(),b.setTranslate()),_&&(n.isElement&&((!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-next"),c.innerHTML=n.hostEl.constructor.nextButtonSvg,c.part.add("button-next"),n.el.appendChild(c)),(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-button-prev"),p.innerHTML=n.hostEl.constructor.prevButtonSvg,p.part.add("button-prev"),n.el.appendChild(p))),c&&(v.navigation.nextEl=c),p&&(v.navigation.prevEl=p),k.init(),k.update()),u.includes("allowSlideNext")&&(n.allowSlideNext=a.allowSlideNext),u.includes("allowSlidePrev")&&(n.allowSlidePrev=a.allowSlidePrev),u.includes("direction")&&n.changeDirection(a.direction,!1),(N||Q)&&n.loopDestroy(),(A||Q)&&n.loopCreate(),n.update()}function uv(i,n){i===void 0&&(i={}),n===void 0&&(n=!0);const o={on:{}},a={},u={};Sr(o,Ml),o._emitClasses=!0,o.init=!1;const c={},p=Qf.map(f=>f.replace(/_/,"")),g=Object.assign({},i);return Object.keys(g).forEach(f=>{typeof i[f]>"u"||(p.indexOf(f)>=0?Vn(i[f])?(o[f]={},u[f]={},Sr(o[f],i[f]),Sr(u[f],i[f])):(o[f]=i[f],u[f]=i[f]):f.search(/on[A-Z]/)===0&&typeof i[f]=="function"?n?a[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:o.on[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:c[f]=i[f])}),["navigation","pagination","scrollbar"].forEach(f=>{o[f]===!0&&(o[f]={}),o[f]===!1&&delete o[f]}),{params:o,passedParams:u,rest:c,events:a}}function cv(i,n){let{el:o,nextEl:a,prevEl:u,paginationEl:c,scrollbarEl:p,swiper:g}=i;Kf(n)&&a&&u&&(g.params.navigation.nextEl=a,g.originalParams.navigation.nextEl=a,g.params.navigation.prevEl=u,g.originalParams.navigation.prevEl=u),Zf(n)&&c&&(g.params.pagination.el=c,g.originalParams.pagination.el=c),Jf(n)&&p&&(g.params.scrollbar.el=p,g.originalParams.scrollbar.el=p),g.init(o)}function dv(i,n,o,a,u){const c=[];if(!n)return c;const p=f=>{c.indexOf(f)<0&&c.push(f)};if(o&&a){const f=a.map(u),x=o.map(u);f.join("")!==x.join("")&&p("children"),a.length!==o.length&&p("children")}return Qf.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in i&&f in n)if(Vn(i[f])&&Vn(n[f])){const x=Object.keys(i[f]),v=Object.keys(n[f]);x.length!==v.length?p(f):(x.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}),v.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}))}else i[f]!==n[f]&&p(f)}),c}const fv=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function ts(){return ts=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a])}return i},ts.apply(this,arguments)}function tp(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function np(i){const n=[];return Ce.Children.toArray(i).forEach(o=>{tp(o)?n.push(o):o.props&&o.props.children&&np(o.props.children).forEach(a=>n.push(a))}),n}function pv(i){const n=[],o={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ce.Children.toArray(i).forEach(a=>{if(tp(a))n.push(a);else if(a.props&&a.props.slot&&o[a.props.slot])o[a.props.slot].push(a);else if(a.props&&a.props.children){const u=np(a.props.children);u.length>0?u.forEach(c=>n.push(c)):o["container-end"].push(a)}else o["container-end"].push(a)}),{slides:n,slots:o}}function mv(i,n,o){if(!o)return null;const a=v=>{let y=v;return v<0?y=n.length+v:y>=n.length&&(y=y-n.length),y},u=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:c,to:p}=o,g=i.params.loop?-n.length:0,f=i.params.loop?n.length*2:n.length,x=[];for(let v=g;v<f;v+=1)v>=c&&v<=p&&x.push(n[a(v)]);return x.map((v,y)=>Ce.cloneElement(v,{swiper:i,style:u,key:v.props.virtualIndex||v.key||`slide-${y}`}))}function xi(i,n){return typeof window>"u"?ge.useEffect(i,n):ge.useLayoutEffect(i,n)}const cf=ge.createContext(null),hv=ge.createContext(null),zr=ge.forwardRef(function(i,n){let{className:o,tag:a="div",wrapperTag:u="div",children:c,onSwiper:p,...g}=i===void 0?{}:i,f=!1;const[x,v]=ge.useState("swiper"),[y,k]=ge.useState(null),[b,z]=ge.useState(!1),I=ge.useRef(!1),B=ge.useRef(null),M=ge.useRef(null),C=ge.useRef(null),S=ge.useRef(null),_=ge.useRef(null),N=ge.useRef(null),A=ge.useRef(null),Q=ge.useRef(null),{params:G,passedParams:H,rest:W,events:R}=uv(g),{slides:D,slots:$}=pv(c),U=()=>{z(!b)};Object.assign(G.on,{_containerClasses(Z,X){v(X)}});const re=()=>{Object.assign(G.on,R),f=!0;const Z={...G};if(delete Z.wrapperClass,M.current=new Bl(Z),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=D;const X={cache:!1,slides:D,renderExternal:k,renderExternalUpdate:!1};Sr(M.current.params.virtual,X),Sr(M.current.originalParams.virtual,X)}};B.current||re(),M.current&&M.current.on("_beforeBreakpoint",U);const me=()=>{f||!R||!M.current||Object.keys(R).forEach(Z=>{M.current.on(Z,R[Z])})},xe=()=>{!R||!M.current||Object.keys(R).forEach(Z=>{M.current.off(Z,R[Z])})};ge.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",U)}),ge.useEffect(()=>{!I.current&&M.current&&(M.current.emitSlidesClasses(),I.current=!0)}),xi(()=>{if(n&&(n.current=B.current),!!B.current)return M.current.destroyed&&re(),cv({el:B.current,nextEl:_.current,prevEl:N.current,paginationEl:A.current,scrollbarEl:Q.current,swiper:M.current},G),p&&!M.current.destroyed&&p(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),xi(()=>{me();const Z=dv(H,C.current,D,S.current,X=>X.key);return C.current=H,S.current=D,Z.length&&M.current&&!M.current.destroyed&&lv({swiper:M.current,slides:D,passedParams:H,changedParams:Z,nextEl:_.current,prevEl:N.current,scrollbarEl:Q.current,paginationEl:A.current}),()=>{xe()}}),xi(()=>{fv(M.current)},[y]);function V(){return G.virtual?mv(M.current,D,y):D.map((Z,X)=>Ce.cloneElement(Z,{swiper:M.current,swiperSlideIndex:X}))}return Ce.createElement(a,ts({ref:B,className:ep(`${x}${o?` ${o}`:""}`)},W),Ce.createElement(hv.Provider,{value:M.current},$["container-start"],Ce.createElement(u,{className:av(G.wrapperClass)},$["wrapper-start"],V(),$["wrapper-end"]),Kf(G)&&Ce.createElement(Ce.Fragment,null,Ce.createElement("div",{ref:N,className:"swiper-button-prev"}),Ce.createElement("div",{ref:_,className:"swiper-button-next"})),Jf(G)&&Ce.createElement("div",{ref:Q,className:"swiper-scrollbar"}),Zf(G)&&Ce.createElement("div",{ref:A,className:"swiper-pagination"}),$["container-end"]))});zr.displayName="Swiper";const Pe=ge.forwardRef(function(i,n){let{tag:o="div",children:a,className:u="",swiper:c,zoom:p,lazy:g,virtualIndex:f,swiperSlideIndex:x,...v}=i===void 0?{}:i;const y=ge.useRef(null),[k,b]=ge.useState("swiper-slide"),[z,I]=ge.useState(!1);function B(_,N,A){N===y.current&&b(A)}xi(()=>{if(typeof x<"u"&&(y.current.swiperSlideIndex=x),n&&(n.current=y.current),!(!y.current||!c)){if(c.destroyed){k!=="swiper-slide"&&b("swiper-slide");return}return c.on("_slideClass",B),()=>{c&&c.off("_slideClass",B)}}}),xi(()=>{c&&y.current&&!c.destroyed&&b(c.getSlideClasses(y.current))},[c]);const M={isActive:k.indexOf("swiper-slide-active")>=0,isVisible:k.indexOf("swiper-slide-visible")>=0,isPrev:k.indexOf("swiper-slide-prev")>=0,isNext:k.indexOf("swiper-slide-next")>=0},C=()=>typeof a=="function"?a(M):a,S=()=>{I(!0)};return Ce.createElement(o,ts({ref:y,className:ep(`${k}${u?` ${u}`:""}`),"data-swiper-slide-index":f,onLoad:S},v),p&&Ce.createElement(cf.Provider,{value:M},Ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof p=="number"?p:void 0},C(),g&&!z&&Ce.createElement("div",{className:"swiper-lazy-preloader"}))),!p&&Ce.createElement(cf.Provider,{value:M},C(),g&&!z&&Ce.createElement("div",{className:"swiper-lazy-preloader"})))});Pe.displayName="SwiperSlide";function gv(i,n,o,a){return i.params.createElements&&Object.keys(a).forEach(u=>{if(!o[u]&&o.auto===!0){let c=Gt(i.el,`.${a[u]}`)[0];c||(c=Jo("div",a[u]),c.className=a[u],i.el.append(c)),o[u]=c,n[u]=c}}),o}function hi(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function bi(i){let{swiper:n,extendParams:o,on:a,emit:u}=i;const c="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:C=>C,formatFractionTotal:C=>C,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),n.pagination={el:null,bullets:[]};let p,g=0;function f(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function x(C,S){const{bulletActiveClass:_}=n.params.pagination;C&&(C=C[`${S==="prev"?"previous":"next"}ElementSibling`],C&&(C.classList.add(`${_}-${S}`),C=C[`${S==="prev"?"previous":"next"}ElementSibling`],C&&C.classList.add(`${_}-${S}-${S}`)))}function v(C,S,_){if(C=C%_,S=S%_,S===C+1)return"next";if(S===C-1)return"previous"}function y(C){const S=C.target.closest(hi(n.params.pagination.bulletClass));if(!S)return;C.preventDefault();const _=es(S)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===_)return;const N=v(n.realIndex,_,n.slides.length);N==="next"?n.slideNext():N==="previous"?n.slidePrev():n.slideToLoop(_)}else n.slideTo(_)}function k(){const C=n.rtl,S=n.params.pagination;if(f())return;let _=n.pagination.el;_=Jt(_);let N,A;const Q=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,G=n.params.loop?Math.ceil(Q/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(A=n.previousRealIndex||0,N=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(N=n.snapIndex,A=n.previousSnapIndex):(A=n.previousIndex||0,N=n.activeIndex||0),S.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const H=n.pagination.bullets;let W,R,D;if(S.dynamicBullets&&(p=Pl(H[0],n.isHorizontal()?"width":"height"),_.forEach($=>{$.style[n.isHorizontal()?"width":"height"]=`${p*(S.dynamicMainBullets+4)}px`}),S.dynamicMainBullets>1&&A!==void 0&&(g+=N-(A||0),g>S.dynamicMainBullets-1?g=S.dynamicMainBullets-1:g<0&&(g=0)),W=Math.max(N-g,0),R=W+(Math.min(H.length,S.dynamicMainBullets)-1),D=(R+W)/2),H.forEach($=>{const U=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${S.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();$.classList.remove(...U)}),_.length>1)H.forEach($=>{const U=es($);U===N?$.classList.add(...S.bulletActiveClass.split(" ")):n.isElement&&$.setAttribute("part","bullet"),S.dynamicBullets&&(U>=W&&U<=R&&$.classList.add(...`${S.bulletActiveClass}-main`.split(" ")),U===W&&x($,"prev"),U===R&&x($,"next"))});else{const $=H[N];if($&&$.classList.add(...S.bulletActiveClass.split(" ")),n.isElement&&H.forEach((U,re)=>{U.setAttribute("part",re===N?"bullet-active":"bullet")}),S.dynamicBullets){const U=H[W],re=H[R];for(let me=W;me<=R;me+=1)H[me]&&H[me].classList.add(...`${S.bulletActiveClass}-main`.split(" "));x(U,"prev"),x(re,"next")}}if(S.dynamicBullets){const $=Math.min(H.length,S.dynamicMainBullets+4),U=(p*$-p)/2-D*p,re=C?"right":"left";H.forEach(me=>{me.style[n.isHorizontal()?re:"top"]=`${U}px`})}}_.forEach((H,W)=>{if(S.type==="fraction"&&(H.querySelectorAll(hi(S.currentClass)).forEach(R=>{R.textContent=S.formatFractionCurrent(N+1)}),H.querySelectorAll(hi(S.totalClass)).forEach(R=>{R.textContent=S.formatFractionTotal(G)})),S.type==="progressbar"){let R;S.progressbarOpposite?R=n.isHorizontal()?"vertical":"horizontal":R=n.isHorizontal()?"horizontal":"vertical";const D=(N+1)/G;let $=1,U=1;R==="horizontal"?$=D:U=D,H.querySelectorAll(hi(S.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${U})`,re.style.transitionDuration=`${n.params.speed}ms`})}S.type==="custom"&&S.renderCustom?(H.innerHTML=S.renderCustom(n,N+1,G),W===0&&u("paginationRender",H)):(W===0&&u("paginationRender",H),u("paginationUpdate",H)),n.params.watchOverflow&&n.enabled&&H.classList[n.isLocked?"add":"remove"](S.lockClass)})}function b(){const C=n.params.pagination;if(f())return;const S=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let _=n.pagination.el;_=Jt(_);let N="";if(C.type==="bullets"){let A=n.params.loop?Math.ceil(S/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&A>S&&(A=S);for(let Q=0;Q<A;Q+=1)C.renderBullet?N+=C.renderBullet.call(n,Q,C.bulletClass):N+=`<${C.bulletElement} ${n.isElement?'part="bullet"':""} class="${C.bulletClass}"></${C.bulletElement}>`}C.type==="fraction"&&(C.renderFraction?N=C.renderFraction.call(n,C.currentClass,C.totalClass):N=`<span class="${C.currentClass}"></span> / <span class="${C.totalClass}"></span>`),C.type==="progressbar"&&(C.renderProgressbar?N=C.renderProgressbar.call(n,C.progressbarFillClass):N=`<span class="${C.progressbarFillClass}"></span>`),n.pagination.bullets=[],_.forEach(A=>{C.type!=="custom"&&(A.innerHTML=N||""),C.type==="bullets"&&n.pagination.bullets.push(...A.querySelectorAll(hi(C.bulletClass)))}),C.type!=="custom"&&u("paginationRender",_[0])}function z(){n.params.pagination=gv(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const C=n.params.pagination;if(!C.el)return;let S;typeof C.el=="string"&&n.isElement&&(S=n.el.querySelector(C.el)),!S&&typeof C.el=="string"&&(S=[...document.querySelectorAll(C.el)]),S||(S=C.el),!(!S||S.length===0)&&(n.params.uniqueNavElements&&typeof C.el=="string"&&Array.isArray(S)&&S.length>1&&(S=[...n.el.querySelectorAll(C.el)],S.length>1&&(S=S.filter(_=>Wf(_,".swiper")[0]===n.el)[0])),Array.isArray(S)&&S.length===1&&(S=S[0]),Object.assign(n.pagination,{el:S}),S=Jt(S),S.forEach(_=>{C.type==="bullets"&&C.clickable&&_.classList.add(...(C.clickableClass||"").split(" ")),_.classList.add(C.modifierClass+C.type),_.classList.add(n.isHorizontal()?C.horizontalClass:C.verticalClass),C.type==="bullets"&&C.dynamicBullets&&(_.classList.add(`${C.modifierClass}${C.type}-dynamic`),g=0,C.dynamicMainBullets<1&&(C.dynamicMainBullets=1)),C.type==="progressbar"&&C.progressbarOpposite&&_.classList.add(C.progressbarOppositeClass),C.clickable&&_.addEventListener("click",y),n.enabled||_.classList.add(C.lockClass)}))}function I(){const C=n.params.pagination;if(f())return;let S=n.pagination.el;S&&(S=Jt(S),S.forEach(_=>{_.classList.remove(C.hiddenClass),_.classList.remove(C.modifierClass+C.type),_.classList.remove(n.isHorizontal()?C.horizontalClass:C.verticalClass),C.clickable&&(_.classList.remove(...(C.clickableClass||"").split(" ")),_.removeEventListener("click",y))})),n.pagination.bullets&&n.pagination.bullets.forEach(_=>_.classList.remove(...C.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const C=n.params.pagination;let{el:S}=n.pagination;S=Jt(S),S.forEach(_=>{_.classList.remove(C.horizontalClass,C.verticalClass),_.classList.add(n.isHorizontal()?C.horizontalClass:C.verticalClass)})}),a("init",()=>{n.params.pagination.enabled===!1?M():(z(),b(),k())}),a("activeIndexChange",()=>{typeof n.snapIndex>"u"&&k()}),a("snapIndexChange",()=>{k()}),a("snapGridLengthChange",()=>{b(),k()}),a("destroy",()=>{I()}),a("enable disable",()=>{let{el:C}=n.pagination;C&&(C=Jt(C),C.forEach(S=>S.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),a("lock unlock",()=>{k()}),a("click",(C,S)=>{const _=S.target,N=Jt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&N&&N.length>0&&!_.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&_===n.navigation.nextEl||n.navigation.prevEl&&_===n.navigation.prevEl))return;const A=N[0].classList.contains(n.params.pagination.hiddenClass);u(A===!0?"paginationShow":"paginationHide"),N.forEach(Q=>Q.classList.toggle(n.params.pagination.hiddenClass))}});const B=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:C}=n.pagination;C&&(C=Jt(C),C.forEach(S=>S.classList.remove(n.params.pagination.paginationDisabledClass))),z(),b(),k()},M=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:C}=n.pagination;C&&(C=Jt(C),C.forEach(S=>S.classList.add(n.params.pagination.paginationDisabledClass))),I()};Object.assign(n.pagination,{enable:B,disable:M,render:b,update:k,init:z,destroy:I})}function Ei(i){let{swiper:n,extendParams:o,on:a,emit:u,params:c}=i;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,g,f=c&&c.autoplay?c.autoplay.delay:3e3,x=c&&c.autoplay?c.autoplay.delay:3e3,v,y=new Date().getTime(),k,b,z,I,B,M,C;function S(V){!n||n.destroyed||!n.wrapperEl||V.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",S),!(C||V.detail&&V.detail.bySwiperTouchMove)&&W())}const _=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?k=!0:k&&(x=v,k=!1);const V=n.autoplay.paused?v:y+x-new Date().getTime();n.autoplay.timeLeft=V,u("autoplayTimeLeft",V,V/f),g=requestAnimationFrame(()=>{_()})},N=()=>{let V;return n.virtual&&n.params.virtual.enabled?V=n.slides.filter(X=>X.classList.contains("swiper-slide-active"))[0]:V=n.slides[n.activeIndex],V?parseInt(V.getAttribute("data-swiper-autoplay"),10):void 0},A=V=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(g),_();let Z=typeof V>"u"?n.params.autoplay.delay:V;f=n.params.autoplay.delay,x=n.params.autoplay.delay;const X=N();!Number.isNaN(X)&&X>0&&typeof V>"u"&&(Z=X,f=X,x=X),v=Z;const j=n.params.speed,F=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,j,!0,!0),u("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,j,!0,!0),u("autoplay")),n.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return Z>0?(clearTimeout(p),p=setTimeout(()=>{F()},Z)):requestAnimationFrame(()=>{F()}),Z},Q=()=>{y=new Date().getTime(),n.autoplay.running=!0,A(),u("autoplayStart")},G=()=>{n.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(g),u("autoplayStop")},H=(V,Z)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(p),V||(M=!0);const X=()=>{u("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",S):W()};if(n.autoplay.paused=!0,Z){B&&(v=n.params.autoplay.delay),B=!1,X();return}v=(v||n.params.autoplay.delay)-(new Date().getTime()-y),!(n.isEnd&&v<0&&!n.params.loop)&&(v<0&&(v=0),X())},W=()=>{n.isEnd&&v<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(y=new Date().getTime(),M?(M=!1,A(v)):A(),n.autoplay.paused=!1,u("autoplayResume"))},R=()=>{if(n.destroyed||!n.autoplay.running)return;const V=nn();V.visibilityState==="hidden"&&(M=!0,H(!0)),V.visibilityState==="visible"&&W()},D=V=>{V.pointerType==="mouse"&&(M=!0,C=!0,!(n.animating||n.autoplay.paused)&&H(!0))},$=V=>{V.pointerType==="mouse"&&(C=!1,n.autoplay.paused&&W())},U=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",D),n.el.addEventListener("pointerleave",$))},re=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",D),n.el.removeEventListener("pointerleave",$))},me=()=>{nn().addEventListener("visibilitychange",R)},xe=()=>{nn().removeEventListener("visibilitychange",R)};a("init",()=>{n.params.autoplay.enabled&&(U(),me(),Q())}),a("destroy",()=>{re(),xe(),n.autoplay.running&&G()}),a("_freeModeStaticRelease",()=>{(z||M)&&W()}),a("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?G():H(!0,!0)}),a("beforeTransitionStart",(V,Z,X)=>{n.destroyed||!n.autoplay.running||(X||!n.params.autoplay.disableOnInteraction?H(!0,!0):G())}),a("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){G();return}b=!0,z=!1,M=!1,I=setTimeout(()=>{M=!0,z=!0,H(!0)},200)}}),a("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!b)){if(clearTimeout(I),clearTimeout(p),n.params.autoplay.disableOnInteraction){z=!1,b=!1;return}z&&n.params.cssMode&&W(),z=!1,b=!1}}),a("slideChange",()=>{n.destroyed||!n.autoplay.running||(B=!0)}),Object.assign(n.autoplay,{start:Q,stop:G,pause:H,resume:W})}function us(i){let{swiper:n,extendParams:o,emit:a,once:u}=i;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){if(n.params.cssMode)return;const f=n.getTranslate();n.setTranslate(f),n.setTransition(0),n.touchEventsData.velocities.length=0,n.freeMode.onTouchEnd({currentPos:n.rtl?n.translate:-n.translate})}function p(){if(n.params.cssMode)return;const{touchEventsData:f,touches:x}=n;f.velocities.length===0&&f.velocities.push({position:x[n.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:x[n.isHorizontal()?"currentX":"currentY"],time:$n()})}function g(f){let{currentPos:x}=f;if(n.params.cssMode)return;const{params:v,wrapperEl:y,rtlTranslate:k,snapGrid:b,touchEventsData:z}=n,B=$n()-z.touchStartTime;if(x<-n.minTranslate()){n.slideTo(n.activeIndex);return}if(x>-n.maxTranslate()){n.slides.length<b.length?n.slideTo(b.length-1):n.slideTo(n.slides.length-1);return}if(v.freeMode.momentum){if(z.velocities.length>1){const G=z.velocities.pop(),H=z.velocities.pop(),W=G.position-H.position,R=G.time-H.time;n.velocity=W/R,n.velocity/=2,Math.abs(n.velocity)<v.freeMode.minimumVelocity&&(n.velocity=0),(R>150||$n()-G.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity*=v.freeMode.momentumVelocityRatio,z.velocities.length=0;let M=1e3*v.freeMode.momentumRatio;const C=n.velocity*M;let S=n.translate+C;k&&(S=-S);let _=!1,N;const A=Math.abs(n.velocity)*20*v.freeMode.momentumBounceRatio;let Q;if(S<n.maxTranslate())v.freeMode.momentumBounce?(S+n.maxTranslate()<-A&&(S=n.maxTranslate()-A),N=n.maxTranslate(),_=!0,z.allowMomentumBounce=!0):S=n.maxTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(S>n.minTranslate())v.freeMode.momentumBounce?(S-n.minTranslate()>A&&(S=n.minTranslate()+A),N=n.minTranslate(),_=!0,z.allowMomentumBounce=!0):S=n.minTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(v.freeMode.sticky){let G;for(let H=0;H<b.length;H+=1)if(b[H]>-S){G=H;break}Math.abs(b[G]-S)<Math.abs(b[G-1]-S)||n.swipeDirection==="next"?S=b[G]:S=b[G-1],S=-S}if(Q&&u("transitionEnd",()=>{n.loopFix()}),n.velocity!==0){if(k?M=Math.abs((-S-n.translate)/n.velocity):M=Math.abs((S-n.translate)/n.velocity),v.freeMode.sticky){const G=Math.abs((k?-S:S)-n.translate),H=n.slidesSizesGrid[n.activeIndex];G<H?M=v.speed:G<2*H?M=v.speed*1.5:M=v.speed*2.5}}else if(v.freeMode.sticky){n.slideToClosest();return}v.freeMode.momentumBounce&&_?(n.updateProgress(N),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating=!0,cl(y,()=>{!n||n.destroyed||!z.allowMomentumBounce||(a("momentumBounce"),n.setTransition(v.speed),setTimeout(()=>{n.setTranslate(N),cl(y,()=>{!n||n.destroyed||n.transitionEnd()})},0))})):n.velocity?(a("_freeModeNoMomentumRelease"),n.updateProgress(S),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating||(n.animating=!0,cl(y,()=>{!n||n.destroyed||n.transitionEnd()}))):n.updateProgress(S),n.updateActiveIndex(),n.updateSlidesClasses()}else if(v.freeMode.sticky){n.slideToClosest();return}else v.freeMode&&a("_freeModeNoMomentumRelease");(!v.freeMode.momentum||B>=v.longSwipesMs)&&(a("_freeModeStaticRelease"),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses())}Object.assign(n,{freeMode:{onTouchStart:c,onTouchMove:p,onTouchEnd:g}})}const vv=ee.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(#000, #0000);
  }
`,yv=ee.section`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 5% 0;

  @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`,xv=ee.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`,wv=ee.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  & > h1 {
    font-size: 36px;
    color: var(--color--white);
    font-family: var(--font--poppins);
    font-weight: 200;
    width: 50%;
    line-height: 100%;

    @media (max-width: 768px){
        font-size: 26px;
        width: 100%;
        text-align: center;
    }

    & > b {
      background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 400;
    }
  }

  & > a {
    font-size: 36px;
    color: var(--color--white);
    opacity: 0.2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        display: none;
    }
  }
`,Sv=ee.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
  position: relative; /* Necessário para o posicionamento absoluto do degradê */
  overflow: hidden; /* Garante que o efeito de degradê não ultrapasse os limites */

  @media (max-width: 768px) {
    gap: -50px!important;
  }

  /* Degradê aplicado apenas nos cantos */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 1) 100%);
    z-index: 2; /* Coloca o degradê acima do fundo */
    pointer-events: none; /* Impede que o degradê interfira na interação do usuário */

    @media (max-width: 768px){
        display: none;
    }
  }
`,xr=ee(Pe)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,kv=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>800?1500:800;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(m.Fragment,{children:m.jsxs(yv,{children:[m.jsx(vv,{}),m.jsxs(xv,{children:[m.jsxs(wv,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[m.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),m.jsx("a",{href:"#",children:m.jsx(P0,{"data-aos":"fade-in","data-aos-delay":"400"})})]}),m.jsx(Sv,{"data-aos":"fade-up-right","data-aos-delay":"400",children:m.jsxs(zr,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[Ei,us,bi],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Velocidade",description:" Seus projetos são desenvolvidos com agilidade, garantindo a entrega rápida de sites funcionais e modernos, sem comprometer a qualidade. Ideal para quem precisa de resultados prontos no menor tempo possível."}),m.jsx(yr,{title:"Qualidade",description:"Cada site criado reflete atenção aos detalhes, com design profissional e performance impecável."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Otimização",description:" Seus sites são otimizados, garantindo carregamento rápido, navegação fluida e compatibilidade com todos os dispositivos"}),m.jsx(vr,{title:"SEO",description:"Seus sites já são construídos com estratégias de SEO integradas, aumentando a visibilidade nos motores de busca e atraindo tráfego qualificado. Você não entrega só um site bonito, mas também eficaz."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Autenticidade",description:"Você cria sites únicos e personalizados, refletindo a identidade de cada cliente e diferenciando-se de modelos genéricos. Cada projeto é exclusivo, pensado para destacar o cliente no mercado."}),m.jsx(yr,{title:"Versatilidade",description:"Com a capacidade de atender diferentes nichos e demandas, seu site se adapta ao que deseja."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Comunicação",description:"Você mantém uma comunicação clara e aberta durante todo o processo, garantindo que você esteja sempre informado e satisfeito com tudo."}),m.jsx(vr,{title:"Completo",description:"Solução completa, que vai além do design: desde registro de domínio e hospedagem até estratégias para redes sociais e integrações com ferramentas de marketing."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Manutenção",description:"Seus sites são desenvolvidos de forma que possam ser facilmente atualizados e mantidos, com suporte contínuo para garantir que tudo esteja sempre funcionando perfeitamente."}),m.jsx(yr,{title:"Escalabilidade",description:"Seus sites prontos para crescer junto com o seu negócio, permitindo a adição de novas funcionalidades e se adaptando às demandas futuras do mercado."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Desempenho",description:"Seus sites são projetados para desempenho máximo, com alta velocidade de carregamento."}),m.jsx(vr,{title:"Vendas",description:"Seus sites não são apenas vitrines, mas ferramentas estratégicas para aumentar as conversões e vendas, com design persuasivo, CTAs bem posicionados e integração com plataformas de pagamento."})]})})]})})]})]})})),bv=ee.div`
  width: 100%;
  height: 10vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));

  @media (max-width: 768px){
    height: 5vh;
  }

  // Importante: se quiser manter esse estilo, aplique no conteúdo interno ou nos .swiper-slide
  .swiper-slide {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    img {
      object-fit: contain;
      width: 25px;
      height: 25px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }

    h3 {
      font-size: 20px;
      font-family: var(--font--poppins);
      font-weight: 400;
      color: var(--color--white);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`,yl=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>500?1e3:500;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(bv,{"data-aos":"fade-in",children:m.jsxs(zr,{modules:[Ei,us,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),Ev=ee.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: linear-gradient(120deg, var(--color--purple), #dbdbdb, var(--color--blue));

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 20px;
    }
    
`,rp=()=>m.jsx(m.Fragment,{children:m.jsxs(Ev,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"})]})}),Cv=ls`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`,Tv=ee.section`
    width: 100%;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    height: auto;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 10% 0;
    }
`,jv=ee.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }

    & > div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;

        @media (max-width: 768px) {
            align-items: center;
        }

        & > h1 {
            font-size: 36px;
            font-family: var(--font--poppins);
            color: var(--color--black);
            font-weight: 200;
            width: 70%;
            line-height: 100%;

            @media (max-width: 768px) {
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

            & > b {
                background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
                color: transparent;
                -webkit-background-clip: text;
                font-weight: 400;
            }
        }

        & > p{
            font-family: var(--font--poppins);
            color: var(--color--black);
            font-size: 18px;
            width: 70%;
            line-height: 100%;
            font-weight: 200;

            @media (max-width: 768px) {
                font-size: 16px;
                text-align: center;
                width: 100%;
            }

            & > a {
                color: var(--color--purple);
                text-decoration: underline;
                font-weight: 300;
            }
        }
    }
`,zv=ee.div`
    display: flex;
    gap: 30px;
    width: 100%;
    position: relative;
    margin-top: -50px;
    margin-bottom: -50px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 2;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 1) 100%);
        pointer-events: none;
    }

    .swiper-slide{
        display: flex;
        position: relative;
        z-index: 1;
    }

    & > div img {
        width: 90%;
        margin-left: 5%;
        height: auto;
        object-fit: contain;
    }
`,Pv=ee.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
        animation: ${Cv} 2s linear infinite alternate-reverse;
    }
`,_v=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>800?1500:800;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(m.Fragment,{children:m.jsxs(Tv,{children:[m.jsxs(jv,{children:[m.jsxs("div",{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[m.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),m.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"300",children:["Escolher a qualidade é a melhor escolha, veja nossos ",m.jsx("a",{href:"#",children:"pacotes."})]})]}),m.jsx("div",{"data-aos":"fade-in","data-aos-delay":"500",children:m.jsx(rp,{})})]}),m.jsx(zv,{"data-aos":"fade-up-right","data-aos-delay":"300",children:m.jsxs(zr,{modules:[Ei,us,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:10}},children:[m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/10_gyjqvc.png",alt:"le ange"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/18_zyjvhk.png",alt:"allox"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/19_f8pi7x.png",alt:"your name"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/13_cnu2os.png",alt:"thelastofus"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/12_nkzjqe.png",alt:"lifegreen"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/15_wehzuc.png",alt:"monkey"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/11_yvl8cq.png",alt:"etech"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/16_xklqek.png",alt:"wizardZ"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/14_vunelf.png",alt:"coffe"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/17_pgciit.png",alt:"horizen"})})}),m.jsx(Pe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/20_hfglfp.png",alt:"yellow"})})})]})}),m.jsx(Pv,{"data-aos":"fade-down","data-aos-delay":"200",children:m.jsx("a",{href:"#",children:m.jsx(Vf,{})})})]})})),Mv=ee.div`
  width: 25%;
  height: 350px;
  border-radius: ${i=>i.borderRadius||"20px"};
  background-color: ${i=>i.bgColor||"var(--color--black)"};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 50%;
    height: 200px;
    align-items: center;
    padding: 20px;
    }

  & > a {
    color: var(--color--white);
    font-size: 60px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
  }

  & > h4 {
    color: var(--color--white);
    font-family: var(--font--poppins);
    line-height: 110%;
    font-size: 24px;
    font-weight: 200;
    width: 90%;

    @media (max-width: 768px) {
        font-size: 16px;
        width: 100%;
        text-align: center;
    }

    & > b {
      /* Background do <b> dinâmico, com fallback para um gradiente */
      background: ${i=>i.bBackground||"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"};
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 400;
      margin-right: 1cqh;
    }
  }

  & > button {
    white-space: nowrap;

    @media (max-width: 768px) {
    display: none;
    }
  }
`,Fo=({borderRadius:i,bgColor:n,bBackground:o,icon:a,boldText:u,normalText:c})=>m.jsxs(Mv,{"data-aos":"fade-up","data-aos-delay":"200",borderRadius:i,bgColor:n,bBackground:o,children:[m.jsx("a",{href:"#","data-aos":"fade-up","data-aos-delay":"200",children:a?m.jsx(a,{}):m.jsx(D0,{})}),m.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"400",children:[m.jsx("b",{children:u||"Texto em Negrito"}),c||"Texto normal de exemplo"]}),m.jsx(Hn,{})]}),Lv=ee.section`
    width: 100%;
    height: auto;
    padding-bottom: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: 0 2.5% 10% 2.5%;
    }

`,Ov=ee.div`
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    & > h1 {
        font-size: 32px;
        font-weight: 200;
        line-height: 100%;
        text-align: center;
        font-family: var(--font--poppins);

        @media (max-width: 768px) {
            font-size: 26px;
        }

        & > b {
            background: linear-gradient(120deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`,Iv=ee.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: 10px;
    padding-right: 5%;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`,Nv=ee.div`
    width: 50%;
    height: 350px;

    @media (max-width: 768px) {
        display: none;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 15px 15px 0px;
    }
`,Av=ee.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: 10px;
    margin-top: -40px;
    padding-left: 5%;

    @media (max-width: 768px) {
        padding-left: 0%;
    }
`,Dv=ee.div`
    width: 50%;
    height: 350px;

    @media (max-width: 768px) {
        display: none;
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 0px 0px 15px;
    }
`,Rv=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>800?1500:800;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(m.Fragment,{children:m.jsxs(Lv,{children:[m.jsx(Ov,{children:m.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Para quem ",m.jsx("b",{children:"nós somos?"})]})}),m.jsxs(Iv,{children:[m.jsx(Nv,{"data-aos":"fade-right","data-aos-delay":"400",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:F0,boldText:"Empresas",normalText:"que querem crescer no mercado"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:A0,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),m.jsxs(Av,{children:[m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:M0,boldText:"Lojas",normalText:"que querem aumentar suas vendas"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:N0,boldText:"Todos",normalText:"que querem evoluir seu negócio de patamar"}),m.jsx(Dv,{"data-aos":"fade-left","data-aos-delay":"400",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})})),Fv=ls`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`,Bv=ee.div`
  margin-bottom: 16px;
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 20px;
    font-family: var(--font--poppins);
    font-weight: ${({isOpen:i})=>i?"400":"200"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    margin-top: 20px;
    border-bottom: 1px solid white;
    background: ${({isOpen:i})=>i?"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))":"transparent"};
    color: ${({isOpen:i})=>i?"transparent":"white"};
    background-clip: ${({isOpen:i})=>i?"text":"border-box"};
    -webkit-background-clip: ${({isOpen:i})=>i?"text":"border-box"};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    .arrow {
      font-size: 14px;
      transform: ${({isOpen:i})=>i?"rotate(90deg)":"rotate(0)"};
      transition: transform 0.3s ease;
      color: var(--color--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .content {
    overflow: hidden;
    max-height: ${({isOpen:i})=>i?"200px":"0"};
    animation: ${({isOpen:i})=>i?Fv:"none"} 0.3s ease;
    transition: max-height 0.3s ease-in-out;
    font-size: 14px;
    color: black;
    border-radius: 0 0 8px 8px;
    margin-top: 10px;
    color: var(--color--white);
    font-family: var(--font--poppins);
    font-weight: 100;
    width: 85%;
    line-height: 110%;
  }
`,Ll=({items:i,onTextClick:n})=>{n||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[o,a]=ge.useState(null),u=c=>{console.log(`OpenText clicked: ${c}`),a(o===c?null:c),n&&n(c)};return m.jsx(m.Fragment,{children:i.map((c,p)=>m.jsxs(Bv,{isOpen:o===p,onClick:()=>u(p),children:[m.jsxs("h3",{children:[c.title,m.jsx("span",{className:"arrow",children:m.jsx(I0,{})})]}),m.jsx("div",{className:"content",children:c.text})]},p))})},$v=ee.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out;
  }
`,Vv=({images:i,activeIndex:n})=>(console.log("Active Index:",n),console.log("Images Array:",i),n===null||n<0||n>=i.length?m.jsx("div",{children:"Nenhuma imagem selecionada."}):m.jsx($v,{children:m.jsx("img",{src:i[n],alt:`Imagem ${n+1}`})})),Hv=ee.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    background: #000;

    @media (max-width: 768px){
        display: none;
    }

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1735047503/backgroundBeneficios_ubdtb9.jpg');
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        opacity: .3;
        border-image: fill 0 linear-gradient(#0000, #000);
    }
`,Gv=ee.section`
    width: 100%;
    position: relative;
    height: auto;
    z-index: 2;
    padding: 5% 0;

    @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1735047503/backgroundBeneficios_ubdtb9.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`,Wv=ee.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`,qv=ee.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-family: var(--font--poppins);
        color: var(--color--white);
        font-size: 28px;
        font-weight: 200;
        line-height: 100%;
        width: 80%;

        @media (max-width: 768px) {
            font-size: 24px;
            text-align: center;
            width: 100%;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`,Uv=ee.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`,Yv=()=>{const[i,n]=ge.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],a=["https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png"],u=c=>{console.log(`Texto clicado: ${c}`),n(c)};return m.jsx(m.Fragment,{children:m.jsxs(Gv,{children:[m.jsx(Hv,{}),m.jsxs(Wv,{children:[m.jsxs(qv,{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),m.jsx("div",{children:m.jsx(Ll,{items:o,onTextClick:u})}),m.jsx(Hn,{})]}),m.jsx(Uv,{children:m.jsx(Vv,{images:a,activeIndex:i})})]})]})})},Xv=ee.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    height: auto;
    gap: 30px;
    background-color: #353535;
    border-radius: 20px;
`,Qv=ee.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > img {
        object-fit: contain;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        & > img {
            width: 25px;
            height: auto;
            object-fit: contain;
        }

        & > p {
            background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 20px;
            font-weight: 600;
        }
    }
`,Kv=ee.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    & > h1 {
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-size: 26px;
        font-weight: 400;
        line-height: 120%;
    }

    & > p {
        font-size: 16px;
        color: var(--color--white);
        opacity: 1;
        font-weight: 100;
        font-family: var(--font--poppins);
        line-height: 120%;
        font-style: italic;
    }
`,gi=({logo:i,nota:n,empresa:o,depoimento:a})=>m.jsx(m.Fragment,{children:m.jsxs(Xv,{children:[m.jsxs(Qv,{children:[m.jsx("img",{src:i}),m.jsxs("div",{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsx("p",{children:n})]})]}),m.jsxs(Kv,{children:[m.jsx("h1",{children:o}),m.jsx("p",{children:a})]})]})}),Zv=ee.section`
    width: 100%;
    max-width: 1280px;
    padding: 5% 5%;
    height: auto;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 768px){
        padding: 10% 5%;
        gap: 30px;
    }
`,Jv=ee.div`
    padding: 10px 30px;
    border-radius: 30px;
    background-color: var(--color--black);

    @media (max-width: 768px){
        padding: 8px 20px;
    }

    & > h2 {
        font-size: 18px;
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 400;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`,e1=ee.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`,t1=ee.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > h1 {
        font-size: 28px;
        font-family: var(--font--poppins);
        color: var(--color--black);
        font-weight: 200;
        line-height: 100%;
        text-align: center;

        @media (max-width: 768px){
            font-size: 26px;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`,n1=ee.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`,r1=()=>m.jsx(m.Fragment,{children:m.jsxs(Zv,{children:[m.jsx(Jv,{children:m.jsx("h2",{children:"Depoimentos"})}),m.jsx(e1,{children:m.jsx("a",{href:"#",children:m.jsx(Vf,{})})}),m.jsx(t1,{children:m.jsxs("h1",{children:["Não tenha dúvidas, ",m.jsx("b",{children:"escolha o certo!"})]})}),m.jsx(n1,{children:m.jsxs(zr,{modules:[Ei,bi],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[m.jsx(Pe,{children:m.jsx(gi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Pe,{children:m.jsx(gi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Pe,{children:m.jsx(gi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Pe,{children:m.jsx(gi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Pe,{children:m.jsx(gi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})})]})})]})}),i1=ee.div`
  width: 100%;
  height: 10vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, var(--color--purple), #353535, var(--color--blue));

  @media (max-width: 768px){
    height: 5vh;
  }

  // Importante: se quiser manter esse estilo, aplique no conteúdo interno ou nos .swiper-slide
  .swiper-slide {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    img {
      object-fit: contain;
      width: 25px;
      height: 25px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }

    h3 {
      font-size: 20px;
      font-family: var(--font--poppins);
      font-weight: 400;
      color: var(--color--white);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`,o1=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>500?1e3:500;wt.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),wt.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(i1,{"data-aos":"fade-in",children:m.jsxs(zr,{modules:[Ei,us,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Pe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),s1=ee.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,a1=ee.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`,l1=ee.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`,u1=ee.div`
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0px;

  & > h4 {
    font-family: var(--font--poppins);
    color: var(--color--white);
    font-weight: 200;
    font-size: 16px;

    & > b {
      font-weight: 400;
    }
  }
`,c1=ee.div`
  background-color: var(--color--black);
  color: var(--color--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  & > h1 {
    font-family: var(--font--poppins);
    font-weight: 600;
    font-size: 24px;
    background: linear-gradient(
      90deg,
      var(--color--purple),
      #dbdbdb,
      var(--color--blue)
    );
    -webkit-background-clip: text;
    color: transparent;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;

    & > p {
      color: var(--color--white);
      font-family: var(--font--poppins);
      font-weight: 200;
      font-size: 14px;
      line-height: 100%;
    }

    & > span {
      font-family: var(--font--roboto);
      font-weight: 400;
      font-size: 18px;
      background: linear-gradient(
        90deg,
        var(--color--purple),
        #dbdbdb,
        var(--color--blue)
      );
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`,d1=ee.div`
  border-radius: 0 0 20px 20px;
  padding: 20px;
  background-color: #5339df10;
  margin-top: -20px;

  & > ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    padding-top: 20px;

    & > li {
      position: relative;
      padding-left: 30px;
      font-family: var(--font--poppins);
      font-size: 14px;
      color: var(--color--black);
      font-weight: 300;

      &::before {
        content: '';
        display: inline-block;
        background: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png')
          no-repeat center center;
        background-size: contain;
        width: 20px;
        height: 20px;

        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`,xl=({promoBold:i,promo:n,valor:o,servico:a,listItems:u=[]})=>m.jsxs(s1,{children:[m.jsx(a1,{}),m.jsxs(l1,{children:[m.jsx(u1,{children:m.jsxs("h4",{children:[m.jsx("b",{children:i})," ",n]})}),m.jsxs(c1,{children:[m.jsx("h1",{children:a}),m.jsxs("div",{children:[m.jsx("p",{children:"Economize agora"}),m.jsx("span",{children:o})]}),m.jsx(Hn,{})]})]}),m.jsx(d1,{children:m.jsx("ol",{children:u.map((c,p)=>m.jsx("li",{children:c},p))})})]}),f1=ee.section`
    width: 100%;
    max-width: 1280px;
    height: auto;
    padding: 5%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        padding: 10% 5%;    
    }
`,p1=ee.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    & > h1 {
        font-size: 28px;
        font-family: var(--font--poppins);
        font-weight: 200;
        line-height: 100%;
        width: 35%;
        color: var(--color--black);
        text-align: center;

        @media (max-width: 768px){
            width: 100%;
            font-size: 26px;
        }

        & > b{
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }
`,m1=ee.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        width: 30%;
        height: auto;

        @media (max-width: 768px){
            width: 100%;
        }
    }

`,h1=()=>m.jsx(m.Fragment,{children:m.jsxs(f1,{children:[m.jsx(p1,{children:m.jsxs("h1",{children:["O que ",m.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),m.jsxs(m1,{children:[m.jsx("div",{children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"E-commerce",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Landing Page",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Institucional",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})})]})]})}),g1=ee.section`
    width: 100%;
    max-width: 1280px;
    padding: 0 5% 5% 5%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    z-index: 10;

    @media (max-width: 768px){
        padding: 5%;
    }
`,v1=ee.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    gap: 50px;
    position: relative;
    z-index: 3;
    background-color: var(--color--black);

    @media (max-width: 768px){
        flex-direction: column;
        gap: 0px;
        border-radius: 25px;
    }
`,y1=ee.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    padding: 50px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        padding: 40px 30px 20px 30px;
        text-align: center;
        gap: 50px;
    }

    & > h1 {
        font-size: 32px;
        font-family: var(--font--poppins);
        font-weight: 400;
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;

        @media (max-width: 768px){
            line-height: 100%;
            font-size: 28px;
        }
    }

    & > p {
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-size: 16px;
        font-weight: 200;
        line-height: 110%;
        margin-top: -10px;
        width: 90%;

        @media (max-width: 768px){
            width: 95%;
        }
    }

    & > img {
        width: 180px;
        object-fit: contain;

        @media (max-width: 768px){
            display: none;
        }
    }
`,x1=ee.div`
    width: 45%;
    background-color: var(--color--white);
    border-radius: 25px;
    padding: 30px 25px; 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin: 20px;
    border: 3px solid var(--color--purple);

    & > button {
        @media (max-width: 768px){
            width: 100%;
        }
    }

    @media (max-width: 768px){
        width: 95%;
        margin-bottom: 10px;
        border-radius: 20px;
        align-items: flex-start;
    }

    & > ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    margin-left: 0;

    & > li {
      position: relative;
      font-family: var(--font--poppins);
      font-size: 16px;
      color: var(--color--black);
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;

      & > svg {
        font-size: 26px!important;
        color: var(--color--purple);
      }
    }
  }
`,w1=()=>m.jsx(m.Fragment,{children:m.jsx(g1,{children:m.jsxs(v1,{children:[m.jsxs(y1,{children:[m.jsx("h1",{children:"Torne-se nosso parceiro"}),m.jsx("p",{children:"Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248919/whitePacerias_x9oj45.png"})]}),m.jsxs(x1,{children:[m.jsxs("ol",{children:[m.jsxs("li",{children:[m.jsx(O0,{}),"Descontos exclusivos"]}),m.jsxs("li",{children:[m.jsx(R0,{}),"Manutenção estendida"]}),m.jsxs("li",{children:[m.jsx(_0,{}),"Prioridade de entrega"]}),m.jsxs("li",{children:[m.jsx(L0,{}),"Feito para empresas"]})]}),m.jsx(rp,{})]})]})})}),S1=ee.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(0deg, #000, #0000);
  }
`,k1=ee.section`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 5%;

  @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734872384/backgroundVantagens_zlyvi5.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(0deg, #000, #0000);
        }
    }
`,b1=ee.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  padding: 0 5%;

  @media (max-width: 768px){
        gap: 50px;
        padding: 5%;
    }
`,E1=ee.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px){
        gap: 5px;
    }

    & > h1 {
        background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-size: 36px;
        font-family: var(--font--poppins);
        font-weight: 400;
        line-height: 100%;
        text-align: center;

        @media (max-width: 768px){
            font-size: 28px;
        }
    }

    & > p {
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        font-size: 16px;
        opacity: 0.7;
    }
`,C1=ee.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 0px;
    }

    & > div:nth-child(2){
        @media (max-width: 768px){
            margin-top: -20px;
        }
    }
`,T1=()=>{const[i,n]=ge.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],a=[{title:"2Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"2Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"2Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"2Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],u=c=>{console.log(`Texto clicado: ${c}`),n(c)};return m.jsx(m.Fragment,{children:m.jsxs(k1,{children:[m.jsx(S1,{}),m.jsxs(b1,{children:[m.jsxs(E1,{children:[m.jsx("h1",{children:"Ficou com dúvidas?"}),m.jsx("p",{children:"Veja as perguntas mais recorrentes"})]}),m.jsxs(C1,{children:[m.jsx("div",{children:m.jsx(Ll,{items:o,onTextClick:u})}),m.jsx("div",{children:m.jsx(Ll,{items:a,onTextClick:u})})]}),m.jsx(Hn,{})]})]})})};function j1(i){return pt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function z1(i){return pt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(i)}const P1=ls`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_1=ee.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,M1=ee.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: #35353550;
  backdrop-filter: blur(1px);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  color: var(--color--purple);
  font-size: 24px;
  transition: transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }
`,L1=ee.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #35353520;
  backdrop-filter: blur(5px);
  border-radius: 15px 15px 0 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${P1} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--poppins);
`,O1=ee.button`
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
  left: 50%;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--color--purple);
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color--white);
  transition: all .2s ease;

  &:hover {
    color: #000;
    font-size: 22px;
  }
`,I1=ee.div`
background-color: var(--color--white);
  border-radius: 10px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--poppins)!important;
`,df=ee.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${i=>i.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--poppins)!important;
`,N1=ee.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: ${i=>i.sent?"0":"8px"};
  margin-left: ${i=>i.sent?"8px":"0"};
`,A1=ee.div`
  display: flex;
  flex-direction: column;
  background-color: ${i=>i.sent?"#dcf8c6":"#ffffff"};
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--poppins)!important;
  font-size: 12px;
`,D1=ee.div`
  font-size: 10px;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: var(--font--poppins)!important;
`,R1=ee.div`
  display: inline-block;
  font-size: 14px;
  font-style: italic;
  color: #b6b6b6;
  font-family: var(--font--poppins)!important;

  &::after {
    content: "";
    animation: typingDots 1s infinite;
  }

  @keyframes typingDots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`,F1=ee.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--poppins)!important;
`,B1=ee.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 12px;
  font-family: var(--font--poppins)!important;
  background: #ffffff05;
  backdrop-filter: blur(1px);
  color: var(--color--white);

  &::placeholder{
    font-size: 10px!important;
    font-weight: 400!important;
    padding-left: 5px;
  }
`,$1=ee.button`
  padding: 8px 20px;
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: var(--font--poppins)!important;
  font-weight: 400;
`,V1=({footerRendered:i})=>{const[n,o]=ge.useState(!1),[a,u]=ge.useState(""),[c,p]=ge.useState([]),[g,f]=ge.useState(!1),[x,v]=ge.useState("Número inválido"),[y,k]=ge.useState(!1),[b,z]=ge.useState(!1),I="https://wa.link/dojlwi",B="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png";ge.useEffect(()=>{const _=setTimeout(()=>{o(!0),p([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},45e3);return()=>clearTimeout(_)},[]);const M=async()=>{if(a.trim()==="")return;const _={id:Date.now(),text:a,sent:!0};p(A=>[...A,_]);const N=a.trim();if(u(""),f(!0),!y&&x==="Número inválido"){setTimeout(()=>{f(!1),p(A=>[...A,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),k(!0)},1500);return}if(y&&x==="Número inválido"){const A=/^\d+$/.test(N),Q=A?N:"Número inválido";v(Q),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"userPhoneCaptured",phoneNumber:Q}),setTimeout(()=>{f(!1),p(G=>[...G,{id:Date.now(),text:A?m.jsxs("span",{children:["Muito obrigado, aumigo🐕!",m.jsx("br",{}),m.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{z(!0)},500),k(!1)},1500);return}f(!1)},C=_=>{_.key==="Enter"&&M()},S=()=>{o(!1)};return m.jsxs(_1,{children:[m.jsx(M1,{onClick:()=>window.open(I,"_blank"),id:"clickwpp",children:m.jsx(j1,{id:"clickwpp"})}),n&&m.jsxs(L1,{children:[m.jsx(O1,{onClick:S,children:m.jsx(z1,{})}),m.jsxs(I1,{children:[c.map(_=>m.jsxs(df,{sent:_.sent,children:[!_.sent&&m.jsx(N1,{src:B,alt:"Bot"}),m.jsxs(A1,{sent:_.sent,children:[!_.sent&&m.jsx(D1,{children:"aleph"}),m.jsx("div",{children:_.text})]})]},_.id)),g&&m.jsx(df,{children:m.jsx(R1,{})})]}),!b&&m.jsxs(F1,{children:[m.jsx(B1,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:a,onChange:_=>u(_.target.value),onKeyDown:C}),m.jsx($1,{onClick:M,children:"Enviar"})]})]})]})},H1=ee.footer`
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
    background-color: var(--color--white);
    width: 100%;
    max-width: 1112px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-family: var(--font--poppins);

    @media (max-width: 768px){
        width: 90%;    
        bottom: -10px;
        padding: 8px 20px;
        background-color: #ffffff10;
        backdrop-filter: blur(2px);
    }

    & > p {
        font-size: 12px;
        font-weight: 400;
        background: linear-gradient(90deg, var(--color--purple), #353535, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;

        @media (max-width: 768px){
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
        }
     
        &:nth-child(1){
            @media (max-width: 768px){
                display: none;
            }
        }

    }

    & > img{
        position: absolute;
        width: 20px;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 768px){
            position: relative;
            left: 0;
            transform: translateX(0);
        }
    }
`,G1=()=>m.jsx(m.Fragment,{children:m.jsxs(H1,{children:[m.jsx("p",{children:"Todos os direitos reservados | desde 2024"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsxs("p",{children:["Desenvolvido por ",m.jsx("a",{href:"#",children:" Aleph "})]})]})}),W1=ee.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg");
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-image: fill 0 linear-gradient(#000, #0000);
  }
`,q1=ee.section`
  width: 100%;
  position: relative;
  height: auto;
  z-index: 2;
  padding: 0% 5% 5% 5%;

  @media (max-width: 768px){
    background: #000;
    height: auto;
    padding: 10% 0;
    }

    &::before{
        @media (max-width: 768px){
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg");
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: 0.3;
            border-image: fill 0 linear-gradient(#000, #0000);
        }
    }
`,U1=ee.section`
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  max-width: 1280px;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 2.5% 5% 5% 5%;

  @media (max-width: 768px){
        gap: 50px;
        padding: 5% 5% 20% 5%;
        flex-direction: column-reverse;
    }
`,Y1=ee.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > img {
        width: 150px;
        object-fit: contain;

        @media (max-width: 768px){
            width: 120px;
        }
    }

    & > h1 {
        font-size: 32px;
        font-family: var(--font--poppins);
        font-weight: 200;
        color: var(--color--white);
        line-height: 100%;

        @media (max-width: 768px){
            text-align: center;
            font-size: 28px;
        }

        & > b {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
        }
    }

    & > p{
        font-size: 16px;
        font-weight: 200;
        color: var(--color--white);
        font-family: var(--font--poppins);
        line-height: 110%;
        opacity: 0.7;

        @media (max-width: 768px){
            text-align: center;
        }
    }

    & > form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        width: 100%;

        @media (max-width: 768px){
            align-items: center;
            gap: 15px;
        }

        & > label {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-family: var(--font--poppins);
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 400;
            font-size: 16px;
            width: 80%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 14px;
            }

            & > input {
                padding: 12px;
                background: transparent;
                border: 1px solid var(--color--white);
                border-radius: 5px;
                font-family: var(--font--poppins);
                font-weight: 200;
                background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
                -webkit-background-clip: text;
                color: transparent;

                &::placeholder {
                    color: var(--color--white);
                    font-family: var(--font--poppins);
                    font-weight: 200;
                    opacity: 0.4;
                    font-size: 12px;
                }
            }
        }

        & > button {
            padding: 12px;
            width: 80%;
            background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
            border-radius: 5px;
            border: none;
            color: var(--color--white);
            font-weight: 400;
            font-family: var(--font--poppins);
            cursor: pointer;

            @media (max-width: 768px){
                margin-top: 5px;
                width: 100%;
                font-size: 16px;
            }
        }

        & > span {
            font-family: var(--font--poppins);
            font-size: 12px;
            color: var(--color--white);
            font-weight: 200;
            opacity: 0.6;
            line-height: 100%;

            @media (max-width: 768px){
                text-align: center;
            }
        }
    }
`,X1=ee.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        position: absolute;
        left: -60%;
        top: -10%;
        width: 150%;
        z-index: -1;
        opacity: 0.1;
    }

    & > img {
        width: 90%;
        object-fit: contain;
    }
`,Q1=()=>m.jsx(m.Fragment,{children:m.jsxs(q1,{children:[m.jsx(W1,{}),m.jsxs(U1,{children:[m.jsxs(Y1,{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"}),m.jsxs("h1",{children:["Entre em ",m.jsx("b",{children:"contato"})," conosco"]}),m.jsx("p",{children:"Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados"}),m.jsxs("form",{id:"contactForm",children:[m.jsxs("label",{children:["Seu Nome",m.jsx("input",{type:"text",id:"name",placeholder:"Aleph Silva Ramos",required:!0})]}),m.jsxs("label",{children:["Seu e-mail",m.jsx("input",{type:"email",id:"email",placeholder:"aleph@gmail.com",required:!0})]}),m.jsxs("label",{children:["WhatsApp",m.jsx("input",{type:"tel",id:"tel",placeholder:"24981411940",required:!0})]}),m.jsx("button",{type:"submit",children:"Enviar e entrar em contato"}),m.jsx("span",{children:"*Usaremos essas informações apenas para fins de contato"})]})]}),m.jsx(X1,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png"})}),m.jsx(G1,{})]})]})}),K1=()=>m.jsxs(m.Fragment,{children:[m.jsx(f0,{}),m.jsx(S0,{}),m.jsx(kv,{}),m.jsx(yl,{}),m.jsx(_v,{}),m.jsx(Rv,{}),m.jsx(yl,{}),m.jsx(Yv,{}),m.jsx(r1,{}),m.jsx(o1,{}),m.jsx(h1,{}),m.jsx(w1,{}),m.jsx(yl,{}),m.jsx(T1,{}),m.jsx(Q1,{}),m.jsx(V1,{})]});function Z1(){return m.jsx(m.Fragment,{children:m.jsx(K1,{})})}ah.createRoot(document.getElementById("root")).render(m.jsx(ge.StrictMode,{children:m.jsx(Z1,{})}));
