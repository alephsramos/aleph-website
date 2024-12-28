(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function ff(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tl={exports:{}},hi={},nl={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function Jm(){if(Lc)return Se;Lc=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,I={};function B(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}B.prototype.isReactComponent={},B.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=B.prototype;function T(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}var S=T.prototype=new M;S.constructor=T,z(S,B.prototype),S.isPureReactComponent=!0;var _=Array.isArray,N=Object.prototype.hasOwnProperty,A={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function G(j,F,ue){var le,he={},fe=null,pe=null;if(F!=null)for(le in F.ref!==void 0&&(pe=F.ref),F.key!==void 0&&(fe=""+F.key),F)N.call(F,le)&&!Q.hasOwnProperty(le)&&(he[le]=F[le]);var se=arguments.length-2;if(se===1)he.children=ue;else if(1<se){for(var ye=Array(se),_e=0;_e<se;_e++)ye[_e]=arguments[_e+2];he.children=ye}if(j&&j.defaultProps)for(le in se=j.defaultProps,se)he[le]===void 0&&(he[le]=se[le]);return{$$typeof:i,type:j,key:fe,ref:pe,props:he,_owner:A.current}}function H(j,F){return{$$typeof:i,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function W(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function R(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ue){return F[ue]})}var D=/\/+/g;function $(j,F){return typeof j=="object"&&j!==null&&j.key!=null?R(""+j.key):F.toString(36)}function U(j,F,ue,le,he){var fe=typeof j;(fe==="undefined"||fe==="boolean")&&(j=null);var pe=!1;if(j===null)pe=!0;else switch(fe){case"string":case"number":pe=!0;break;case"object":switch(j.$$typeof){case i:case n:pe=!0}}if(pe)return pe=j,he=he(pe),j=le===""?"."+$(pe,0):le,_(he)?(ue="",j!=null&&(ue=j.replace(D,"$&/")+"/"),U(he,F,ue,"",function(_e){return _e})):he!=null&&(W(he)&&(he=H(he,ue+(!he.key||pe&&pe.key===he.key?"":(""+he.key).replace(D,"$&/")+"/")+j)),F.push(he)),1;if(pe=0,le=le===""?".":le+":",_(j))for(var se=0;se<j.length;se++){fe=j[se];var ye=le+$(fe,se);pe+=U(fe,F,ue,ye,he)}else if(ye=k(j),typeof ye=="function")for(j=ye.call(j),se=0;!(fe=j.next()).done;)fe=fe.value,ye=le+$(fe,se++),pe+=U(fe,F,ue,ye,he);else if(fe==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return pe}function re(j,F,ue){if(j==null)return j;var le=[],he=0;return U(j,le,"","",function(fe){return F.call(ue,fe,he++)}),le}function me(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(ue){(j._status===0||j._status===-1)&&(j._status=1,j._result=ue)},function(ue){(j._status===0||j._status===-1)&&(j._status=2,j._result=ue)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},V={transition:null},Z={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:V,ReactCurrentOwner:A};function X(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:re,forEach:function(j,F,ue){re(j,function(){F.apply(this,arguments)},ue)},count:function(j){var F=0;return re(j,function(){F++}),F},toArray:function(j){return re(j,function(F){return F})||[]},only:function(j){if(!W(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Se.Component=B,Se.Fragment=o,Se.Profiler=u,Se.PureComponent=T,Se.StrictMode=s,Se.Suspense=f,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Se.act=X,Se.cloneElement=function(j,F,ue){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var le=z({},j.props),he=j.key,fe=j.ref,pe=j._owner;if(F!=null){if(F.ref!==void 0&&(fe=F.ref,pe=A.current),F.key!==void 0&&(he=""+F.key),j.type&&j.type.defaultProps)var se=j.type.defaultProps;for(ye in F)N.call(F,ye)&&!Q.hasOwnProperty(ye)&&(le[ye]=F[ye]===void 0&&se!==void 0?se[ye]:F[ye])}var ye=arguments.length-2;if(ye===1)le.children=ue;else if(1<ye){se=Array(ye);for(var _e=0;_e<ye;_e++)se[_e]=arguments[_e+2];le.children=se}return{$$typeof:i,type:j.type,key:he,ref:fe,props:le,_owner:pe}},Se.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:d,_context:j},j.Consumer=j},Se.createElement=G,Se.createFactory=function(j){var F=G.bind(null,j);return F.type=j,F},Se.createRef=function(){return{current:null}},Se.forwardRef=function(j){return{$$typeof:g,render:j}},Se.isValidElement=W,Se.lazy=function(j){return{$$typeof:v,_payload:{_status:-1,_result:j},_init:me}},Se.memo=function(j,F){return{$$typeof:x,type:j,compare:F===void 0?null:F}},Se.startTransition=function(j){var F=V.transition;V.transition={};try{j()}finally{V.transition=F}},Se.unstable_act=X,Se.useCallback=function(j,F){return xe.current.useCallback(j,F)},Se.useContext=function(j){return xe.current.useContext(j)},Se.useDebugValue=function(){},Se.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},Se.useEffect=function(j,F){return xe.current.useEffect(j,F)},Se.useId=function(){return xe.current.useId()},Se.useImperativeHandle=function(j,F,ue){return xe.current.useImperativeHandle(j,F,ue)},Se.useInsertionEffect=function(j,F){return xe.current.useInsertionEffect(j,F)},Se.useLayoutEffect=function(j,F){return xe.current.useLayoutEffect(j,F)},Se.useMemo=function(j,F){return xe.current.useMemo(j,F)},Se.useReducer=function(j,F,ue){return xe.current.useReducer(j,F,ue)},Se.useRef=function(j){return xe.current.useRef(j)},Se.useState=function(j){return xe.current.useState(j)},Se.useSyncExternalStore=function(j,F,ue){return xe.current.useSyncExternalStore(j,F,ue)},Se.useTransition=function(){return xe.current.useTransition()},Se.version="18.3.1",Se}var Oc;function Ol(){return Oc||(Oc=1,nl.exports=Jm()),nl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic;function eh(){if(Ic)return hi;Ic=1;var i=Ol(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(g,f,x){var v,y={},k=null,b=null;x!==void 0&&(k=""+x),f.key!==void 0&&(k=""+f.key),f.ref!==void 0&&(b=f.ref);for(v in f)s.call(f,v)&&!d.hasOwnProperty(v)&&(y[v]=f[v]);if(g&&g.defaultProps)for(v in f=g.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:n,type:g,key:k,ref:b,props:y,_owner:u.current}}return hi.Fragment=o,hi.jsx=p,hi.jsxs=p,hi}var Nc;function th(){return Nc||(Nc=1,tl.exports=eh()),tl.exports}var m=th(),ge=Ol();const Te=ff(ge);var Io={},rl={exports:{}},ct={},il={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function nh(){return Ac||(Ac=1,function(i){function n(V,Z){var X=V.length;V.push(Z);e:for(;0<X;){var j=X-1>>>1,F=V[j];if(0<u(F,Z))V[j]=Z,V[X]=F,X=j;else break e}}function o(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var Z=V[0],X=V.pop();if(X!==Z){V[0]=X;e:for(var j=0,F=V.length,ue=F>>>1;j<ue;){var le=2*(j+1)-1,he=V[le],fe=le+1,pe=V[fe];if(0>u(he,X))fe<F&&0>u(pe,he)?(V[j]=pe,V[fe]=X,j=fe):(V[j]=he,V[le]=X,j=le);else if(fe<F&&0>u(pe,X))V[j]=pe,V[fe]=X,j=fe;else break e}}return Z}function u(V,Z){var X=V.sortIndex-Z.sortIndex;return X!==0?X:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var f=[],x=[],v=1,y=null,k=3,b=!1,z=!1,I=!1,B=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var Z=o(x);Z!==null;){if(Z.callback===null)s(x);else if(Z.startTime<=V)s(x),Z.sortIndex=Z.expirationTime,n(f,Z);else break;Z=o(x)}}function _(V){if(I=!1,S(V),!z)if(o(f)!==null)z=!0,me(N);else{var Z=o(x);Z!==null&&xe(_,Z.startTime-V)}}function N(V,Z){z=!1,I&&(I=!1,M(G),G=-1),b=!0;var X=k;try{for(S(Z),y=o(f);y!==null&&(!(y.expirationTime>Z)||V&&!R());){var j=y.callback;if(typeof j=="function"){y.callback=null,k=y.priorityLevel;var F=j(y.expirationTime<=Z);Z=i.unstable_now(),typeof F=="function"?y.callback=F:y===o(f)&&s(f),S(Z)}else s(f);y=o(f)}if(y!==null)var ue=!0;else{var le=o(x);le!==null&&xe(_,le.startTime-Z),ue=!1}return ue}finally{y=null,k=X,b=!1}}var A=!1,Q=null,G=-1,H=5,W=-1;function R(){return!(i.unstable_now()-W<H)}function D(){if(Q!==null){var V=i.unstable_now();W=V;var Z=!0;try{Z=Q(!0,V)}finally{Z?$():(A=!1,Q=null)}}else A=!1}var $;if(typeof T=="function")$=function(){T(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,re=U.port2;U.port1.onmessage=D,$=function(){re.postMessage(null)}}else $=function(){B(D,0)};function me(V){Q=V,A||(A=!0,$())}function xe(V,Z){G=B(function(){V(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){z||b||(z=!0,me(N))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(V){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var X=k;k=Z;try{return V()}finally{k=X}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=k;k=V;try{return Z()}finally{k=X}},i.unstable_scheduleCallback=function(V,Z,X){var j=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?j+X:j):X=j,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,V={id:v++,callback:Z,priorityLevel:V,startTime:X,expirationTime:F,sortIndex:-1},X>j?(V.sortIndex=X,n(x,V),o(f)===null&&V===o(x)&&(I?(M(G),G=-1):I=!0,xe(_,X-j))):(V.sortIndex=F,n(f,V),z||b||(z=!0,me(N))),V},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(V){var Z=k;return function(){var X=k;k=Z;try{return V.apply(this,arguments)}finally{k=X}}}}(ol)),ol}var Dc;function rh(){return Dc||(Dc=1,il.exports=nh()),il.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function ih(){if(Rc)return ct;Rc=1;var i=Ol(),n=rh();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,u={};function d(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(u[e]=t,e=0;e<t.length;e++)s.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function k(e){return f.call(y,e)?!0:f.call(v,e)?!1:x.test(e)?y[e]=!0:(v[e]=!0,!1)}function b(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,r,a){if(t===null||typeof t>"u"||b(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,a,l,c,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=h}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,r,a){var l=B.hasOwnProperty(t)?B[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,r,l,a)&&(r=null),a||l===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var _=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),A=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,j;function F(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ue=!1;function le(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var a=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){a=O}e.call(t.prototype)}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var l=O.stack.split(`
`),c=a.stack.split(`
`),h=l.length-1,w=c.length-1;1<=h&&0<=w&&l[h]!==c[w];)w--;for(;1<=h&&0<=w;h--,w--)if(l[h]!==c[w]){if(h!==1||w!==1)do if(h--,w--,0>w||l[h]!==c[w]){var E=`
`+l[h].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=h&&0<=w);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function he(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case A:return"Portal";case H:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:return(e.displayName||"Context")+".Consumer";case W:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ye(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qe(e){e._valueTracker||(e._valueTracker=_e(e))}function Fe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=ye(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Pe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ke(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=se(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zt(e,t){t=t.checked,t!=null&&S(e,"checked",t,!1)}function Gn(e,t){zt(e,t);var r=se(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,r):t.hasOwnProperty("defaultValue")&&da(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $l(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function da(e,t,r){(t!=="number"||Pe(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var _r=Array.isArray;function Wn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(_r(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:se(r)}}function Hl(e,t){var r=se(t.value),a=se(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Gl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ti,ql=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Ul(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Yl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=Ul(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var op=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,qn=null,Un=null;function Xl(e){if(e=ei(e)){if(typeof va!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Yi(t),va(e.stateNode,e.type,t))}}function Ql(e){qn?Un?Un.push(e):Un=[e]:qn=e}function Kl(){if(qn){var e=qn,t=Un;if(Un=qn=null,Xl(e),t)for(e=0;e<t.length;e++)Xl(t[e])}}function Zl(e,t){return e(t)}function Jl(){}var ya=!1;function eu(e,t,r){if(ya)return e(t,r);ya=!0;try{return Zl(e,t,r)}finally{ya=!1,(qn!==null||Un!==null)&&(Jl(),Kl())}}function Or(e,t){var r=e.stateNode;if(r===null)return null;var a=Yi(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var xa=!1;if(g)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){xa=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{xa=!1}function ap(e,t,r,a,l,c,h,w,E){var O=Array.prototype.slice.call(arguments,3);try{t.apply(r,O)}catch(Y){this.onError(Y)}}var Nr=!1,Ci=null,ji=!1,wa=null,sp={onError:function(e){Nr=!0,Ci=e}};function lp(e,t,r,a,l,c,h,w,E){Nr=!1,Ci=null,ap.apply(sp,arguments)}function up(e,t,r,a,l,c,h,w,E){if(lp.apply(this,arguments),Nr){if(Nr){var O=Ci;Nr=!1,Ci=null}else throw Error(o(198));ji||(ji=!0,wa=O)}}function En(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(En(e)!==e)throw Error(o(188))}function dp(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===r)return nu(l),e;if(c===a)return nu(l),t;c=c.sibling}throw Error(o(188))}if(r.return!==a.return)r=l,a=c;else{for(var h=!1,w=l.child;w;){if(w===r){h=!0,r=l,a=c;break}if(w===a){h=!0,a=l,r=c;break}w=w.sibling}if(!h){for(w=c.child;w;){if(w===r){h=!0,r=c,a=l;break}if(w===a){h=!0,a=c,r=l;break}w=w.sibling}if(!h)throw Error(o(189))}}if(r.alternate!==a)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function ru(e){return e=dp(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=n.unstable_scheduleCallback,au=n.unstable_cancelCallback,cp=n.unstable_shouldYield,fp=n.unstable_requestPaint,Be=n.unstable_now,pp=n.unstable_getCurrentPriorityLevel,Sa=n.unstable_ImmediatePriority,su=n.unstable_UserBlockingPriority,zi=n.unstable_NormalPriority,mp=n.unstable_LowPriority,lu=n.unstable_IdlePriority,Pi=null,Dt=null;function hp(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:yp,gp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(gp(e)/vp|0)|0}var _i=64,Mi=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,c=e.pingedLanes,h=r&268435455;if(h!==0){var w=h&~l;w!==0?a=Ar(w):(c&=h,c!==0&&(a=Ar(c)))}else h=r&~l,h!==0?a=Ar(h):c!==0&&(a=Ar(c));if(a===0)return 0;if(t!==0&&t!==a&&!(t&l)&&(l=a&-a,c=t&-t,l>=c||l===16&&(c&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Pt(t),l=1<<r,a|=e[r],t&=~l;return a}function xp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes;0<c;){var h=31-Pt(c),w=1<<h,E=l[h];E===-1?(!(w&r)||w&a)&&(l[h]=xp(w,t)):E<=t&&(e.expiredLanes|=w),c&=~w}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function ba(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Dr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=r}function Sp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Pt(r),c=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~c}}function Ea(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Pt(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var je=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cu,Ta,fu,pu,mu,Ca=!1,Oi=[],nn=null,rn=null,on=null,Rr=new Map,Fr=new Map,an=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function Br(e,t,r,a,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},t!==null&&(t=ei(t),t!==null&&Ta(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bp(e,t,r,a,l){switch(t){case"focusin":return nn=Br(nn,e,t,r,a,l),!0;case"dragenter":return rn=Br(rn,e,t,r,a,l),!0;case"mouseover":return on=Br(on,e,t,r,a,l),!0;case"pointerover":var c=l.pointerId;return Rr.set(c,Br(Rr.get(c)||null,e,t,r,a,l)),!0;case"gotpointercapture":return c=l.pointerId,Fr.set(c,Br(Fr.get(c)||null,e,t,r,a,l)),!0}return!1}function gu(e){var t=Tn(e.target);if(t!==null){var r=En(t);if(r!==null){if(t=r.tag,t===13){if(t=tu(r),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);ha=a,r.target.dispatchEvent(a),ha=null}else return t=ei(r),t!==null&&Ta(t),e.blockedOn=r,!1;t.shift()}return!0}function vu(e,t,r){Ii(e)&&r.delete(t)}function Ep(){Ca=!1,nn!==null&&Ii(nn)&&(nn=null),rn!==null&&Ii(rn)&&(rn=null),on!==null&&Ii(on)&&(on=null),Rr.forEach(vu),Fr.forEach(vu)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ca||(Ca=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ep)))}function Vr(e){function t(l){return $r(l,e)}if(0<Oi.length){$r(Oi[0],e);for(var r=1;r<Oi.length;r++){var a=Oi[r];a.blockedOn===e&&(a.blockedOn=null)}}for(nn!==null&&$r(nn,e),rn!==null&&$r(rn,e),on!==null&&$r(on,e),Rr.forEach(t),Fr.forEach(t),r=0;r<an.length;r++)a=an[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<an.length&&(r=an[0],r.blockedOn===null);)gu(r),r.blockedOn===null&&an.shift()}var Yn=_.ReactCurrentBatchConfig,Ni=!0;function Tp(e,t,r,a){var l=je,c=Yn.transition;Yn.transition=null;try{je=1,ja(e,t,r,a)}finally{je=l,Yn.transition=c}}function Cp(e,t,r,a){var l=je,c=Yn.transition;Yn.transition=null;try{je=4,ja(e,t,r,a)}finally{je=l,Yn.transition=c}}function ja(e,t,r,a){if(Ni){var l=za(e,t,r,a);if(l===null)Wa(e,t,a,Ai,r),hu(e,a);else if(bp(l,e,t,r,a))a.stopPropagation();else if(hu(e,a),t&4&&-1<kp.indexOf(e)){for(;l!==null;){var c=ei(l);if(c!==null&&cu(c),c=za(e,t,r,a),c===null&&Wa(e,t,a,Ai,r),c===l)break;l=c}l!==null&&a.stopPropagation()}else Wa(e,t,a,null,r)}}var Ai=null;function za(e,t,r,a){if(Ai=null,e=ga(a),e=Tn(e),e!==null)if(t=En(e),t===null)e=null;else if(r=t.tag,r===13){if(e=tu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Sa:return 1;case su:return 4;case zi:case mp:return 16;case lu:return 536870912;default:return 16}default:return 16}}var sn=null,Pa=null,Di=null;function xu(){if(Di)return Di;var e,t=Pa,r=t.length,a,l="value"in sn?sn.value:sn.textContent,c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(a=1;a<=h&&t[r-a]===l[c-a];a++);return Di=l.slice(e,1<a?1-a:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function wu(){return!1}function mt(e){function t(r,a,l,c,h){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fi:wu,this.isPropagationStopped=wu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=mt(Xn),Hr=X({},Xn,{view:0,detail:0}),jp=mt(Hr),Ma,La,Gr,Bi=X({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Ma=e.screenX-Gr.screenX,La=e.screenY-Gr.screenY):La=Ma=0,Gr=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:La}}),Su=mt(Bi),zp=X({},Bi,{dataTransfer:0}),Pp=mt(zp),_p=X({},Hr,{relatedTarget:0}),Oa=mt(_p),Mp=X({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=mt(Mp),Op=X({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=mt(Op),Np=X({},Xn,{data:0}),ku=mt(Np),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function Ia(){return Fp}var Bp=X({},Hr,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=mt(Bp),Vp=X({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=mt(Vp),Hp=X({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Gp=mt(Hp),Wp=X({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=mt(Wp),Up=X({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=mt(Up),Xp=[9,13,27,32],Na=g&&"CompositionEvent"in window,Wr=null;g&&"documentMode"in document&&(Wr=document.documentMode);var Qp=g&&"TextEvent"in window&&!Wr,Eu=g&&(!Na||Wr&&8<Wr&&11>=Wr),Tu=" ",Cu=!1;function ju(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Kp(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Cu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Cu?null:e;default:return null}}function Zp(e,t){if(Qn)return e==="compositionend"||!Na&&ju(e,t)?(e=xu(),Di=Pa=sn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jp[e.type]:t==="textarea"}function _u(e,t,r,a){Ql(a),t=Wi(t,"onChange"),0<t.length&&(r=new _a("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var qr=null,Ur=null;function em(e){Yu(e,0)}function $i(e){var t=tr(e);if(Fe(t))return e}function tm(e,t){if(e==="change")return t}var Mu=!1;if(g){var Aa;if(g){var Da="oninput"in document;if(!Da){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Da=typeof Lu.oninput=="function"}Aa=Da}else Aa=!1;Mu=Aa&&(!document.documentMode||9<document.documentMode)}function Ou(){qr&&(qr.detachEvent("onpropertychange",Iu),Ur=qr=null)}function Iu(e){if(e.propertyName==="value"&&$i(Ur)){var t=[];_u(t,Ur,e,ga(e)),eu(em,t)}}function nm(e,t,r){e==="focusin"?(Ou(),qr=t,Ur=r,qr.attachEvent("onpropertychange",Iu)):e==="focusout"&&Ou()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Ur)}function im(e,t){if(e==="click")return $i(t)}function om(e,t){if(e==="input"||e==="change")return $i(t)}function am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:am;function Yr(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!f.call(t,l)||!_t(e[l],t[l]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var r=Nu(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nu(r)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(){for(var e=window,t=Pe();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pe(e.document)}return t}function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sm(e){var t=Ru(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Du(r.ownerDocument.documentElement,r)){if(a!==null&&Ra(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,c=Math.min(a.start,l);a=a.end===void 0?c:Math.min(a.end,l),!e.extend&&c>a&&(l=a,a=c,c=l),l=Au(r,c);var h=Au(r,a);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),c>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lm=g&&"documentMode"in document&&11>=document.documentMode,Kn=null,Fa=null,Xr=null,Ba=!1;function Fu(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ba||Kn==null||Kn!==Pe(a)||(a=Kn,"selectionStart"in a&&Ra(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xr&&Yr(Xr,a)||(Xr=a,a=Wi(Fa,"onSelect"),0<a.length&&(t=new _a("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Kn)))}function Vi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},$a={},Bu={};g&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Hi(e){if($a[e])return $a[e];if(!Zn[e])return e;var t=Zn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bu)return $a[e]=t[r];return e}var $u=Hi("animationend"),Vu=Hi("animationiteration"),Hu=Hi("animationstart"),Gu=Hi("transitionend"),Wu=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Wu.set(e,t),d(t,[e])}for(var Va=0;Va<qu.length;Va++){var Ha=qu[Va],um=Ha.toLowerCase(),dm=Ha[0].toUpperCase()+Ha.slice(1);ln(um,"on"+dm)}ln($u,"onAnimationEnd"),ln(Vu,"onAnimationIteration"),ln(Hu,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(Gu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Uu(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,up(a,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var h=a.length-1;0<=h;h--){var w=a[h],E=w.instance,O=w.currentTarget;if(w=w.listener,E!==c&&l.isPropagationStopped())break e;Uu(l,w,O),c=E}else for(h=0;h<a.length;h++){if(w=a[h],E=w.instance,O=w.currentTarget,w=w.listener,E!==c&&l.isPropagationStopped())break e;Uu(l,w,O),c=E}}}if(ji)throw e=wa,ji=!1,wa=null,e}function Le(e,t){var r=t[Ka];r===void 0&&(r=t[Ka]=new Set);var a=e+"__bubble";r.has(a)||(Xu(t,e,2,!1),r.add(a))}function Ga(e,t,r){var a=0;t&&(a|=4),Xu(r,e,a,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[Gi]){e[Gi]=!0,s.forEach(function(r){r!=="selectionchange"&&(cm.has(r)||Ga(r,!1,e),Ga(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,Ga("selectionchange",!1,t))}}function Xu(e,t,r,a){switch(yu(t)){case 1:var l=Tp;break;case 4:l=Cp;break;default:l=ja}r=l.bind(null,t,r,e),l=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Wa(e,t,r,a,l){var c=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var w=a.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(h===4)for(h=a.return;h!==null;){var E=h.tag;if((E===3||E===4)&&(E=h.stateNode.containerInfo,E===l||E.nodeType===8&&E.parentNode===l))return;h=h.return}for(;w!==null;){if(h=Tn(w),h===null)return;if(E=h.tag,E===5||E===6){a=c=h;continue e}w=w.parentNode}}a=a.return}eu(function(){var O=c,Y=ga(r),K=[];e:{var q=Wu.get(e);if(q!==void 0){var te=_a,ie=e;switch(e){case"keypress":if(Ri(r)===0)break e;case"keydown":case"keyup":te=$p;break;case"focusin":ie="focus",te=Oa;break;case"focusout":ie="blur",te=Oa;break;case"beforeblur":case"afterblur":te=Oa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Gp;break;case $u:case Vu:case Hu:te=Lp;break;case Gu:te=qp;break;case"scroll":te=jp;break;case"wheel":te=Yp;break;case"copy":case"cut":case"paste":te=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=bu}var oe=(t&4)!==0,$e=!oe&&e==="scroll",P=oe?q!==null?q+"Capture":null:q;oe=[];for(var C=O,L;C!==null;){L=C;var J=L.stateNode;if(L.tag===5&&J!==null&&(L=J,P!==null&&(J=Or(C,P),J!=null&&oe.push(Zr(C,J,L)))),$e)break;C=C.return}0<oe.length&&(q=new te(q,ie,null,r,Y),K.push({event:q,listeners:oe}))}}if(!(t&7)){e:{if(q=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",q&&r!==ha&&(ie=r.relatedTarget||r.fromElement)&&(Tn(ie)||ie[Gt]))break e;if((te||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,te?(ie=r.relatedTarget||r.toElement,te=O,ie=ie?Tn(ie):null,ie!==null&&($e=En(ie),ie!==$e||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=O),te!==ie)){if(oe=Su,J="onMouseLeave",P="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=bu,J="onPointerLeave",P="onPointerEnter",C="pointer"),$e=te==null?q:tr(te),L=ie==null?q:tr(ie),q=new oe(J,C+"leave",te,r,Y),q.target=$e,q.relatedTarget=L,J=null,Tn(Y)===O&&(oe=new oe(P,C+"enter",ie,r,Y),oe.target=L,oe.relatedTarget=$e,J=oe),$e=J,te&&ie)t:{for(oe=te,P=ie,C=0,L=oe;L;L=Jn(L))C++;for(L=0,J=P;J;J=Jn(J))L++;for(;0<C-L;)oe=Jn(oe),C--;for(;0<L-C;)P=Jn(P),L--;for(;C--;){if(oe===P||P!==null&&oe===P.alternate)break t;oe=Jn(oe),P=Jn(P)}oe=null}else oe=null;te!==null&&Qu(K,q,te,oe,!1),ie!==null&&$e!==null&&Qu(K,$e,ie,oe,!0)}}e:{if(q=O?tr(O):window,te=q.nodeName&&q.nodeName.toLowerCase(),te==="select"||te==="input"&&q.type==="file")var ae=tm;else if(Pu(q))if(Mu)ae=om;else{ae=rm;var de=nm}else(te=q.nodeName)&&te.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=im);if(ae&&(ae=ae(e,O))){_u(K,ae,r,Y);break e}de&&de(e,q,O),e==="focusout"&&(de=q._wrapperState)&&de.controlled&&q.type==="number"&&da(q,"number",q.value)}switch(de=O?tr(O):window,e){case"focusin":(Pu(de)||de.contentEditable==="true")&&(Kn=de,Fa=O,Xr=null);break;case"focusout":Xr=Fa=Kn=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Fu(K,r,Y);break;case"selectionchange":if(lm)break;case"keydown":case"keyup":Fu(K,r,Y)}var ce;if(Na)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Qn?ju(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(Eu&&r.locale!=="ko"&&(Qn||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Qn&&(ce=xu()):(sn=Y,Pa="value"in sn?sn.value:sn.textContent,Qn=!0)),de=Wi(O,ve),0<de.length&&(ve=new ku(ve,e,null,r,Y),K.push({event:ve,listeners:de}),ce?ve.data=ce:(ce=zu(r),ce!==null&&(ve.data=ce)))),(ce=Qp?Kp(e,r):Zp(e,r))&&(O=Wi(O,"onBeforeInput"),0<O.length&&(Y=new ku("onBeforeInput","beforeinput",null,r,Y),K.push({event:Y,listeners:O}),Y.data=ce))}Yu(K,t)})}function Zr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wi(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=Or(e,r),c!=null&&a.unshift(Zr(e,c,l)),c=Or(e,t),c!=null&&a.push(Zr(e,c,l))),e=e.return}return a}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,r,a,l){for(var c=t._reactName,h=[];r!==null&&r!==a;){var w=r,E=w.alternate,O=w.stateNode;if(E!==null&&E===a)break;w.tag===5&&O!==null&&(w=O,l?(E=Or(r,c),E!=null&&h.unshift(Zr(r,E,w))):l||(E=Or(r,c),E!=null&&h.push(Zr(r,E,w)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var fm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(pm,"")}function qi(e,t,r){if(t=Ku(t),Ku(e)!==t&&r)throw Error(o(425))}function Ui(){}var qa=null,Ua=null;function Ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,mm=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(gm)}:Xa;function gm(e){setTimeout(function(){throw e})}function Qa(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Vr(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Vr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),Rt="__reactFiber$"+er,Jr="__reactProps$"+er,Gt="__reactContainer$"+er,Ka="__reactEvents$"+er,vm="__reactListeners$"+er,ym="__reactHandles$"+er;function Tn(e){var t=e[Rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Gt]||r[Rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ju(e);e!==null;){if(r=e[Rt])return r;e=Ju(e)}return t}e=r,r=e.parentNode}return null}function ei(e){return e=e[Rt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Yi(e){return e[Jr]||null}var Za=[],nr=-1;function dn(e){return{current:e}}function Oe(e){0>nr||(e.current=Za[nr],Za[nr]=null,nr--)}function Me(e,t){nr++,Za[nr]=e.current,e.current=t}var cn={},et=dn(cn),at=dn(!1),Cn=cn;function rr(e,t){var r=e.type.contextTypes;if(!r)return cn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in r)l[c]=t[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function st(e){return e=e.childContextTypes,e!=null}function Xi(){Oe(at),Oe(et)}function ed(e,t,r){if(et.current!==cn)throw Error(o(168));Me(et,t),Me(at,r)}function td(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(o(108,pe(e)||"Unknown",l));return X({},r,a)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Cn=et.current,Me(et,e),Me(at,at.current),!0}function nd(e,t,r){var a=e.stateNode;if(!a)throw Error(o(169));r?(e=td(e,t,Cn),a.__reactInternalMemoizedMergedChildContext=e,Oe(at),Oe(et),Me(et,e)):Oe(at),Me(at,r)}var Wt=null,Ki=!1,Ja=!1;function rd(e){Wt===null?Wt=[e]:Wt.push(e)}function xm(e){Ki=!0,rd(e)}function fn(){if(!Ja&&Wt!==null){Ja=!0;var e=0,t=je;try{var r=Wt;for(je=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Wt=null,Ki=!1}catch(l){throw Wt!==null&&(Wt=Wt.slice(e+1)),ou(Sa,fn),l}finally{je=t,Ja=!1}}return null}var ir=[],or=0,Zi=null,Ji=0,St=[],kt=0,jn=null,qt=1,Ut="";function zn(e,t){ir[or++]=Ji,ir[or++]=Zi,Zi=e,Ji=t}function id(e,t,r){St[kt++]=qt,St[kt++]=Ut,St[kt++]=jn,jn=e;var a=qt;e=Ut;var l=32-Pt(a)-1;a&=~(1<<l),r+=1;var c=32-Pt(t)+l;if(30<c){var h=l-l%5;c=(a&(1<<h)-1).toString(32),a>>=h,l-=h,qt=1<<32-Pt(t)+l|r<<l|a,Ut=c+e}else qt=1<<c|r<<l|a,Ut=e}function es(e){e.return!==null&&(zn(e,1),id(e,1,0))}function ts(e){for(;e===Zi;)Zi=ir[--or],ir[or]=null,Ji=ir[--or],ir[or]=null;for(;e===jn;)jn=St[--kt],St[kt]=null,Ut=St[--kt],St[kt]=null,qt=St[--kt],St[kt]=null}var ht=null,gt=null,Ne=!1,Mt=null;function od(e,t){var r=Ct(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ad(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,gt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jn!==null?{id:qt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ct(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,gt=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(Ne){var t=gt;if(t){var r=t;if(!ad(e,t)){if(ns(e))throw Error(o(418));t=un(r.nextSibling);var a=ht;t&&ad(e,t)?od(a,r):(e.flags=e.flags&-4097|2,Ne=!1,ht=e)}}else{if(ns(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,ht=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function eo(e){if(e!==ht)return!1;if(!Ne)return sd(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ya(e.type,e.memoizedProps)),t&&(t=gt)){if(ns(e))throw ld(),Error(o(418));for(;t;)od(e,t),t=un(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){gt=un(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=ht?un(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=gt;e;)e=un(e.nextSibling)}function ar(){gt=ht=null,Ne=!1}function is(e){Mt===null?Mt=[e]:Mt.push(e)}var wm=_.ReactCurrentBatchConfig;function ti(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var a=r.stateNode}if(!a)throw Error(o(147,e));var l=a,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(h){var w=l.refs;h===null?delete w[c]:w[c]=h},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ud(e){var t=e._init;return t(e._payload)}function dd(e){function t(P,C){if(e){var L=P.deletions;L===null?(P.deletions=[C],P.flags|=16):L.push(C)}}function r(P,C){if(!e)return null;for(;C!==null;)t(P,C),C=C.sibling;return null}function a(P,C){for(P=new Map;C!==null;)C.key!==null?P.set(C.key,C):P.set(C.index,C),C=C.sibling;return P}function l(P,C){return P=wn(P,C),P.index=0,P.sibling=null,P}function c(P,C,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<C?(P.flags|=2,C):L):(P.flags|=2,C)):(P.flags|=1048576,C)}function h(P){return e&&P.alternate===null&&(P.flags|=2),P}function w(P,C,L,J){return C===null||C.tag!==6?(C=Xs(L,P.mode,J),C.return=P,C):(C=l(C,L),C.return=P,C)}function E(P,C,L,J){var ae=L.type;return ae===Q?Y(P,C,L.props.children,J,L.key):C!==null&&(C.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===me&&ud(ae)===C.type)?(J=l(C,L.props),J.ref=ti(P,C,L),J.return=P,J):(J=Co(L.type,L.key,L.props,null,P.mode,J),J.ref=ti(P,C,L),J.return=P,J)}function O(P,C,L,J){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=Qs(L,P.mode,J),C.return=P,C):(C=l(C,L.children||[]),C.return=P,C)}function Y(P,C,L,J,ae){return C===null||C.tag!==7?(C=An(L,P.mode,J,ae),C.return=P,C):(C=l(C,L),C.return=P,C)}function K(P,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Xs(""+C,P.mode,L),C.return=P,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case N:return L=Co(C.type,C.key,C.props,null,P.mode,L),L.ref=ti(P,null,C),L.return=P,L;case A:return C=Qs(C,P.mode,L),C.return=P,C;case me:var J=C._init;return K(P,J(C._payload),L)}if(_r(C)||Z(C))return C=An(C,P.mode,L,null),C.return=P,C;to(P,C)}return null}function q(P,C,L,J){var ae=C!==null?C.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ae!==null?null:w(P,C,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case N:return L.key===ae?E(P,C,L,J):null;case A:return L.key===ae?O(P,C,L,J):null;case me:return ae=L._init,q(P,C,ae(L._payload),J)}if(_r(L)||Z(L))return ae!==null?null:Y(P,C,L,J,null);to(P,L)}return null}function te(P,C,L,J,ae){if(typeof J=="string"&&J!==""||typeof J=="number")return P=P.get(L)||null,w(C,P,""+J,ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return P=P.get(J.key===null?L:J.key)||null,E(C,P,J,ae);case A:return P=P.get(J.key===null?L:J.key)||null,O(C,P,J,ae);case me:var de=J._init;return te(P,C,L,de(J._payload),ae)}if(_r(J)||Z(J))return P=P.get(L)||null,Y(C,P,J,ae,null);to(C,J)}return null}function ie(P,C,L,J){for(var ae=null,de=null,ce=C,ve=C=0,Xe=null;ce!==null&&ve<L.length;ve++){ce.index>ve?(Xe=ce,ce=null):Xe=ce.sibling;var Ee=q(P,ce,L[ve],J);if(Ee===null){ce===null&&(ce=Xe);break}e&&ce&&Ee.alternate===null&&t(P,ce),C=c(Ee,C,ve),de===null?ae=Ee:de.sibling=Ee,de=Ee,ce=Xe}if(ve===L.length)return r(P,ce),Ne&&zn(P,ve),ae;if(ce===null){for(;ve<L.length;ve++)ce=K(P,L[ve],J),ce!==null&&(C=c(ce,C,ve),de===null?ae=ce:de.sibling=ce,de=ce);return Ne&&zn(P,ve),ae}for(ce=a(P,ce);ve<L.length;ve++)Xe=te(ce,P,ve,L[ve],J),Xe!==null&&(e&&Xe.alternate!==null&&ce.delete(Xe.key===null?ve:Xe.key),C=c(Xe,C,ve),de===null?ae=Xe:de.sibling=Xe,de=Xe);return e&&ce.forEach(function(Sn){return t(P,Sn)}),Ne&&zn(P,ve),ae}function oe(P,C,L,J){var ae=Z(L);if(typeof ae!="function")throw Error(o(150));if(L=ae.call(L),L==null)throw Error(o(151));for(var de=ae=null,ce=C,ve=C=0,Xe=null,Ee=L.next();ce!==null&&!Ee.done;ve++,Ee=L.next()){ce.index>ve?(Xe=ce,ce=null):Xe=ce.sibling;var Sn=q(P,ce,Ee.value,J);if(Sn===null){ce===null&&(ce=Xe);break}e&&ce&&Sn.alternate===null&&t(P,ce),C=c(Sn,C,ve),de===null?ae=Sn:de.sibling=Sn,de=Sn,ce=Xe}if(Ee.done)return r(P,ce),Ne&&zn(P,ve),ae;if(ce===null){for(;!Ee.done;ve++,Ee=L.next())Ee=K(P,Ee.value,J),Ee!==null&&(C=c(Ee,C,ve),de===null?ae=Ee:de.sibling=Ee,de=Ee);return Ne&&zn(P,ve),ae}for(ce=a(P,ce);!Ee.done;ve++,Ee=L.next())Ee=te(ce,P,ve,Ee.value,J),Ee!==null&&(e&&Ee.alternate!==null&&ce.delete(Ee.key===null?ve:Ee.key),C=c(Ee,C,ve),de===null?ae=Ee:de.sibling=Ee,de=Ee);return e&&ce.forEach(function(Zm){return t(P,Zm)}),Ne&&zn(P,ve),ae}function $e(P,C,L,J){if(typeof L=="object"&&L!==null&&L.type===Q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case N:e:{for(var ae=L.key,de=C;de!==null;){if(de.key===ae){if(ae=L.type,ae===Q){if(de.tag===7){r(P,de.sibling),C=l(de,L.props.children),C.return=P,P=C;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===me&&ud(ae)===de.type){r(P,de.sibling),C=l(de,L.props),C.ref=ti(P,de,L),C.return=P,P=C;break e}r(P,de);break}else t(P,de);de=de.sibling}L.type===Q?(C=An(L.props.children,P.mode,J,L.key),C.return=P,P=C):(J=Co(L.type,L.key,L.props,null,P.mode,J),J.ref=ti(P,C,L),J.return=P,P=J)}return h(P);case A:e:{for(de=L.key;C!==null;){if(C.key===de)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){r(P,C.sibling),C=l(C,L.children||[]),C.return=P,P=C;break e}else{r(P,C);break}else t(P,C);C=C.sibling}C=Qs(L,P.mode,J),C.return=P,P=C}return h(P);case me:return de=L._init,$e(P,C,de(L._payload),J)}if(_r(L))return ie(P,C,L,J);if(Z(L))return oe(P,C,L,J);to(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,C!==null&&C.tag===6?(r(P,C.sibling),C=l(C,L),C.return=P,P=C):(r(P,C),C=Xs(L,P.mode,J),C.return=P,P=C),h(P)):r(P,C)}return $e}var sr=dd(!0),cd=dd(!1),no=dn(null),ro=null,lr=null,os=null;function as(){os=lr=ro=null}function ss(e){var t=no.current;Oe(no),e._currentValue=t}function ls(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function ur(e,t){ro=e,os=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(os!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(ro===null)throw Error(o(308));lr=e,ro.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Pn=null;function us(e){Pn===null?Pn=[e]:Pn.push(e)}function fd(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,us(t)):(r.next=l.next,l.next=r),t.interleaved=r,Yt(e,a)}function Yt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pn=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,ke&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Yt(e,r)}return l=a.interleaved,l===null?(t.next=t,us(a)):(t.next=l.next,l.next=t),a.interleaved=t,Yt(e,r)}function io(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ea(e,r)}}function md(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?l=c=h:c=c.next=h,r=r.next}while(r!==null);c===null?l=c=t:c=c.next=t}else l=c=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function oo(e,t,r,a){var l=e.updateQueue;pn=!1;var c=l.firstBaseUpdate,h=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var E=w,O=E.next;E.next=null,h===null?c=O:h.next=O,h=E;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==h&&(w===null?Y.firstBaseUpdate=O:w.next=O,Y.lastBaseUpdate=E))}if(c!==null){var K=l.baseState;h=0,Y=O=E=null,w=c;do{var q=w.lane,te=w.eventTime;if((a&q)===q){Y!==null&&(Y=Y.next={eventTime:te,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ie=e,oe=w;switch(q=t,te=r,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){K=ie.call(te,K,q);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,q=typeof ie=="function"?ie.call(te,K,q):ie,q==null)break e;K=X({},K,q);break e;case 2:pn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,q=l.effects,q===null?l.effects=[w]:q.push(w))}else te={eventTime:te,lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(O=Y=te,E=K):Y=Y.next=te,h|=q;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;q=w,w=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);if(Y===null&&(E=K),l.baseState=E,l.firstBaseUpdate=O,l.lastBaseUpdate=Y,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else c===null&&(l.shared.lanes=0);Ln|=h,e.lanes=h,e.memoizedState=K}}function hd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(o(191,l));l.call(a)}}}var ni={},Ft=dn(ni),ri=dn(ni),ii=dn(ni);function _n(e){if(e===ni)throw Error(o(174));return e}function cs(e,t){switch(Me(ii,t),Me(ri,e),Me(Ft,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}Oe(Ft),Me(Ft,t)}function dr(){Oe(Ft),Oe(ri),Oe(ii)}function gd(e){_n(ii.current);var t=_n(Ft.current),r=fa(t,e.type);t!==r&&(Me(ri,e),Me(Ft,r))}function fs(e){ri.current===e&&(Oe(Ft),Oe(ri))}var Ae=dn(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function ms(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var so=_.ReactCurrentDispatcher,hs=_.ReactCurrentBatchConfig,Mn=0,De=null,Ge=null,Ue=null,lo=!1,oi=!1,ai=0,Sm=0;function tt(){throw Error(o(321))}function gs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function vs(e,t,r,a,l,c){if(Mn=c,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,so.current=e===null||e.memoizedState===null?Tm:Cm,e=r(a,l),oi){c=0;do{if(oi=!1,ai=0,25<=c)throw Error(o(301));c+=1,Ue=Ge=null,t.updateQueue=null,so.current=jm,e=r(a,l)}while(oi)}if(so.current=fo,t=Ge!==null&&Ge.next!==null,Mn=0,Ue=Ge=De=null,lo=!1,t)throw Error(o(300));return e}function ys(){var e=ai!==0;return ai=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Et(){if(Ge===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ue===null?De.memoizedState:Ue.next;if(t!==null)Ue=t,Ge=e;else{if(e===null)throw Error(o(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function si(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=Et(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=Ge,l=a.baseQueue,c=r.pending;if(c!==null){if(l!==null){var h=l.next;l.next=c.next,c.next=h}a.baseQueue=l=c,r.pending=null}if(l!==null){c=l.next,a=a.baseState;var w=h=null,E=null,O=c;do{var Y=O.lane;if((Mn&Y)===Y)E!==null&&(E=E.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),a=O.hasEagerState?O.eagerState:e(a,O.action);else{var K={lane:Y,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};E===null?(w=E=K,h=a):E=E.next=K,De.lanes|=Y,Ln|=Y}O=O.next}while(O!==null&&O!==c);E===null?h=a:E.next=w,_t(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=E,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do c=l.lane,De.lanes|=c,Ln|=c,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ws(e){var t=Et(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,c=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do c=e(c,h.action),h=h.next;while(h!==l);_t(c,t.memoizedState)||(lt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,a]}function vd(){}function yd(e,t){var r=De,a=Et(),l=t(),c=!_t(a.memoizedState,l);if(c&&(a.memoizedState=l,lt=!0),a=a.queue,Ss(Sd.bind(null,r,a,e),[e]),a.getSnapshot!==t||c||Ue!==null&&Ue.memoizedState.tag&1){if(r.flags|=2048,li(9,wd.bind(null,r,a,l,t),void 0,null),Ye===null)throw Error(o(349));Mn&30||xd(r,t,l)}return l}function xd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wd(e,t,r,a){t.value=r,t.getSnapshot=a,kd(t)&&bd(e)}function Sd(e,t,r){return r(function(){kd(t)&&bd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function bd(e){var t=Yt(e,1);t!==null&&Nt(t,e,1,-1)}function Ed(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Em.bind(null,De,e),[t.memoizedState,e]}function li(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Td(){return Et().memoizedState}function uo(e,t,r,a){var l=Bt();De.flags|=e,l.memoizedState=li(1|t,r,void 0,a===void 0?null:a)}function co(e,t,r,a){var l=Et();a=a===void 0?null:a;var c=void 0;if(Ge!==null){var h=Ge.memoizedState;if(c=h.destroy,a!==null&&gs(a,h.deps)){l.memoizedState=li(t,r,c,a);return}}De.flags|=e,l.memoizedState=li(1|t,r,c,a)}function Cd(e,t){return uo(8390656,8,e,t)}function Ss(e,t){return co(2048,8,e,t)}function jd(e,t){return co(4,2,e,t)}function zd(e,t){return co(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _d(e,t,r){return r=r!=null?r.concat([e]):null,co(4,4,Pd.bind(null,t,e),r)}function ks(){}function Md(e,t){var r=Et();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&gs(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Ld(e,t){var r=Et();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&gs(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Od(e,t,r){return Mn&21?(_t(r,t)||(r=uu(),De.lanes|=r,Ln|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=r)}function km(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var a=hs.transition;hs.transition={};try{e(!1),t()}finally{je=r,hs.transition=a}}function Id(){return Et().memoizedState}function bm(e,t,r){var a=yn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Nd(e))Ad(t,r);else if(r=fd(e,t,r,a),r!==null){var l=ot();Nt(r,e,a,l),Dd(r,t,a)}}function Em(e,t,r){var a=yn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Ad(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,w=c(h,r);if(l.hasEagerState=!0,l.eagerState=w,_t(w,h)){var E=t.interleaved;E===null?(l.next=l,us(t)):(l.next=E.next,E.next=l),t.interleaved=l;return}}catch{}finally{}r=fd(e,t,l,a),r!==null&&(l=ot(),Nt(r,e,a,l),Dd(r,t,a))}}function Nd(e){var t=e.alternate;return e===De||t!==null&&t===De}function Ad(e,t){oi=lo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dd(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ea(e,r)}}var fo={readContext:bt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Tm={readContext:bt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Cd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,uo(4194308,4,Pd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Bt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=bm.bind(null,De,e),[a.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Ed,useDebugValue:ks,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Ed(!1),t=e[0];return e=km.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=De,l=Bt();if(Ne){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ye===null)throw Error(o(349));Mn&30||xd(a,t,r)}l.memoizedState=r;var c={value:r,getSnapshot:t};return l.queue=c,Cd(Sd.bind(null,a,c,e),[e]),a.flags|=2048,li(9,wd.bind(null,a,c,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ye.identifierPrefix;if(Ne){var r=Ut,a=qt;r=(a&~(1<<32-Pt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=ai++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cm={readContext:bt,useCallback:Md,useContext:bt,useEffect:Ss,useImperativeHandle:_d,useInsertionEffect:jd,useLayoutEffect:zd,useMemo:Ld,useReducer:xs,useRef:Td,useState:function(){return xs(si)},useDebugValue:ks,useDeferredValue:function(e){var t=Et();return Od(t,Ge.memoizedState,e)},useTransition:function(){var e=xs(si)[0],t=Et().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:yd,useId:Id,unstable_isNewReconciler:!1},jm={readContext:bt,useCallback:Md,useContext:bt,useEffect:Ss,useImperativeHandle:_d,useInsertionEffect:jd,useLayoutEffect:zd,useMemo:Ld,useReducer:ws,useRef:Td,useState:function(){return ws(si)},useDebugValue:ks,useDeferredValue:function(e){var t=Et();return Ge===null?t.memoizedState=e:Od(t,Ge.memoizedState,e)},useTransition:function(){var e=ws(si)[0],t=Et().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:yd,useId:Id,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function bs(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var po={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=ot(),l=yn(e),c=Xt(a,l);c.payload=t,r!=null&&(c.callback=r),t=mn(e,c,l),t!==null&&(Nt(t,e,l,a),io(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=ot(),l=yn(e),c=Xt(a,l);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=mn(e,c,l),t!==null&&(Nt(t,e,l,a),io(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),a=yn(e),l=Xt(r,a);l.tag=2,t!=null&&(l.callback=t),t=mn(e,l,a),t!==null&&(Nt(t,e,a,r),io(t,e,a))}};function Rd(e,t,r,a,l,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,h):t.prototype&&t.prototype.isPureReactComponent?!Yr(r,a)||!Yr(l,c):!0}function Fd(e,t,r){var a=!1,l=cn,c=t.contextType;return typeof c=="object"&&c!==null?c=bt(c):(l=st(t)?Cn:et.current,a=t.contextTypes,c=(a=a!=null)?rr(e,l):cn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=c),t}function Bd(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function Es(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},ds(e);var c=t.contextType;typeof c=="object"&&c!==null?l.context=bt(c):(c=st(t)?Cn:et.current,l.context=rr(e,c)),l.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(bs(e,t,c,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&po.enqueueReplaceState(l,l.state,null),oo(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var r="",a=t;do r+=he(a),a=a.return;while(a);var l=r}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:l,digest:null}}function Ts(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function $d(e,t,r){r=Xt(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){wo||(wo=!0,$s=a),Cs(e,t)},r}function Vd(e,t,r){r=Xt(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Cs(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Cs(e,t),typeof a!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Hd(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new zm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Vm.bind(null,e,t,r),t.then(e,e))}function Gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,r,a,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Xt(-1,1),t.tag=2,mn(r,t,1))),r.lanes|=1),e)}var Pm=_.ReactCurrentOwner,lt=!1;function it(e,t,r,a){t.child=e===null?cd(t,null,r,a):sr(t,e.child,r,a)}function qd(e,t,r,a,l){r=r.render;var c=t.ref;return ur(t,l),a=vs(e,t,r,a,c,l),r=ys(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(Ne&&r&&es(t),t.flags|=1,it(e,t,a,l),t.child)}function Ud(e,t,r,a,l){if(e===null){var c=r.type;return typeof c=="function"&&!Ys(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Yd(e,t,c,a,l)):(e=Co(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&l)){var h=c.memoizedProps;if(r=r.compare,r=r!==null?r:Yr,r(h,a)&&e.ref===t.ref)return Qt(e,t,l)}return t.flags|=1,e=wn(c,a),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,r,a,l){if(e!==null){var c=e.memoizedProps;if(Yr(c,a)&&e.ref===t.ref)if(lt=!1,t.pendingProps=a=c,(e.lanes&l)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,Qt(e,t,l)}return js(e,t,r,a,l)}function Xd(e,t,r){var a=t.pendingProps,l=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(pr,vt),vt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(pr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:r,Me(pr,vt),vt|=a}else c!==null?(a=c.baseLanes|r,t.memoizedState=null):a=r,Me(pr,vt),vt|=a;return it(e,t,l,r),t.child}function Qd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,r,a,l){var c=st(r)?Cn:et.current;return c=rr(t,c),ur(t,l),r=vs(e,t,r,a,c,l),a=ys(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(Ne&&a&&es(t),t.flags|=1,it(e,t,r,l),t.child)}function Kd(e,t,r,a,l){if(st(r)){var c=!0;Qi(t)}else c=!1;if(ur(t,l),t.stateNode===null)ho(e,t),Fd(t,r,a),Es(t,r,a,l),a=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var E=h.context,O=r.contextType;typeof O=="object"&&O!==null?O=bt(O):(O=st(r)?Cn:et.current,O=rr(t,O));var Y=r.getDerivedStateFromProps,K=typeof Y=="function"||typeof h.getSnapshotBeforeUpdate=="function";K||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==a||E!==O)&&Bd(t,h,a,O),pn=!1;var q=t.memoizedState;h.state=q,oo(t,a,h,l),E=t.memoizedState,w!==a||q!==E||at.current||pn?(typeof Y=="function"&&(bs(t,r,Y,a),E=t.memoizedState),(w=pn||Rd(t,r,w,a,q,E,O))?(K||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),h.props=a,h.state=E,h.context=O,a=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,pd(e,t),w=t.memoizedProps,O=t.type===t.elementType?w:Lt(t.type,w),h.props=O,K=t.pendingProps,q=h.context,E=r.contextType,typeof E=="object"&&E!==null?E=bt(E):(E=st(r)?Cn:et.current,E=rr(t,E));var te=r.getDerivedStateFromProps;(Y=typeof te=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==K||q!==E)&&Bd(t,h,a,E),pn=!1,q=t.memoizedState,h.state=q,oo(t,a,h,l);var ie=t.memoizedState;w!==K||q!==ie||at.current||pn?(typeof te=="function"&&(bs(t,r,te,a),ie=t.memoizedState),(O=pn||Rd(t,r,O,a,q,ie,E)||!1)?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,ie,E),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,ie,E)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ie),h.props=a,h.state=ie,h.context=E,a=O):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),a=!1)}return zs(e,t,r,a,c,l)}function zs(e,t,r,a,l,c){Qd(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return l&&nd(t,r,!1),Qt(e,t,c);a=t.stateNode,Pm.current=t;var w=h&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=sr(t,e.child,null,c),t.child=sr(t,null,w,c)):it(e,t,w,c),t.memoizedState=a.state,l&&nd(t,r,!0),t.child}function Zd(e){var t=e.stateNode;t.pendingContext?ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ed(e,t.context,!1),cs(e,t.containerInfo)}function Jd(e,t,r,a,l){return ar(),is(l),t.flags|=256,it(e,t,r,a),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,r){var a=t.pendingProps,l=Ae.current,c=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(l&2)!==0),w?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Me(Ae,l&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=a.children,e=a.fallback,c?(a=t.mode,c=t.child,h={mode:"hidden",children:h},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=h):c=jo(h,a,0,null),e=An(e,a,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=_s(r),t.memoizedState=Ps,e):Ms(t,h));if(l=e.memoizedState,l!==null&&(w=l.dehydrated,w!==null))return _m(e,t,h,a,w,l,r);if(c){c=a.fallback,h=t.mode,l=e.child,w=l.sibling;var E={mode:"hidden",children:a.children};return!(h&1)&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=E,t.deletions=null):(a=wn(l,E),a.subtreeFlags=l.subtreeFlags&14680064),w!==null?c=wn(w,c):(c=An(c,h,r,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,h=e.child.memoizedState,h=h===null?_s(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},c.memoizedState=h,c.childLanes=e.childLanes&~r,t.memoizedState=Ps,a}return c=e.child,e=c.sibling,a=wn(c,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Ms(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,r,a){return a!==null&&is(a),sr(t,e.child,null,r),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _m(e,t,r,a,l,c,h){if(r)return t.flags&256?(t.flags&=-257,a=Ts(Error(o(422))),mo(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=a.fallback,l=t.mode,a=jo({mode:"visible",children:a.children},l,0,null),c=An(c,l,h,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,t.mode&1&&sr(t,e.child,null,h),t.child.memoizedState=_s(h),t.memoizedState=Ps,c);if(!(t.mode&1))return mo(e,t,h,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var w=a.dgst;return a=w,c=Error(o(419)),a=Ts(c,a,void 0),mo(e,t,h,a)}if(w=(h&e.childLanes)!==0,lt||w){if(a=Ye,a!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(a.suspendedLanes|h)?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,Yt(e,l),Nt(a,e,l,-1))}return Us(),a=Ts(Error(o(421))),mo(e,t,h,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Hm.bind(null,e),l._reactRetry=t,null):(e=c.treeContext,gt=un(l.nextSibling),ht=t,Ne=!0,Mt=null,e!==null&&(St[kt++]=qt,St[kt++]=Ut,St[kt++]=jn,qt=e.id,Ut=e.overflow,jn=t),t=Ms(t,a.children),t.flags|=4096,t)}function tc(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ls(e.return,t,r)}function Ls(e,t,r,a,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=r,c.tailMode=l)}function nc(e,t,r){var a=t.pendingProps,l=a.revealOrder,c=a.tail;if(it(e,t,a.children,r),a=Ae.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,r,t);else if(e.tag===19)tc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Me(Ae,a),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&ao(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Ls(t,!1,l,r,c);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ao(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Ls(t,!0,r,null,c);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mm(e,t,r){switch(t.tag){case 3:Zd(t),ar();break;case 5:gd(t);break;case 1:st(t.type)&&Qi(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Me(no,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Me(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?ec(e,t,r):(Me(Ae,Ae.current&1),e=Qt(e,t,r),e!==null?e.sibling:null);Me(Ae,Ae.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return nc(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Me(Ae,Ae.current),a)break;return null;case 22:case 23:return t.lanes=0,Xd(e,t,r)}return Qt(e,t,r)}var rc,Os,ic,oc;rc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Os=function(){},ic=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,_n(Ft.current);var c=null;switch(r){case"input":l=be(e,l),a=be(e,a),c=[];break;case"select":l=X({},l,{value:void 0}),a=X({},a,{value:void 0}),c=[];break;case"textarea":l=ca(e,l),a=ca(e,a),c=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ui)}pa(r,a);var h;r=null;for(O in l)if(!a.hasOwnProperty(O)&&l.hasOwnProperty(O)&&l[O]!=null)if(O==="style"){var w=l[O];for(h in w)w.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(u.hasOwnProperty(O)?c||(c=[]):(c=c||[]).push(O,null));for(O in a){var E=a[O];if(w=l!=null?l[O]:void 0,a.hasOwnProperty(O)&&E!==w&&(E!=null||w!=null))if(O==="style")if(w){for(h in w)!w.hasOwnProperty(h)||E&&E.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in E)E.hasOwnProperty(h)&&w[h]!==E[h]&&(r||(r={}),r[h]=E[h])}else r||(c||(c=[]),c.push(O,r)),r=E;else O==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(c=c||[]).push(O,E)):O==="children"?typeof E!="string"&&typeof E!="number"||(c=c||[]).push(O,""+E):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(u.hasOwnProperty(O)?(E!=null&&O==="onScroll"&&Le("scroll",e),c||w===E||(c=[])):(c=c||[]).push(O,E))}r&&(c=c||[]).push("style",r);var O=c;(t.updateQueue=O)&&(t.flags|=4)}},oc=function(e,t,r,a){r!==a&&(t.flags|=4)};function ui(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Lm(e,t,r){var a=t.pendingProps;switch(ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return st(t.type)&&Xi(),nt(t),null;case 3:return a=t.stateNode,dr(),Oe(at),Oe(et),ms(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Gs(Mt),Mt=null))),Os(e,t),nt(t),null;case 5:fs(t);var l=_n(ii.current);if(r=t.type,e!==null&&t.stateNode!=null)ic(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=_n(Ft.current),eo(t)){a=t.stateNode,r=t.type;var c=t.memoizedProps;switch(a[Rt]=t,a[Jr]=c,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",a),Le("close",a);break;case"iframe":case"object":case"embed":Le("load",a);break;case"video":case"audio":for(l=0;l<Qr.length;l++)Le(Qr[l],a);break;case"source":Le("error",a);break;case"img":case"image":case"link":Le("error",a),Le("load",a);break;case"details":Le("toggle",a);break;case"input":Ke(a,c),Le("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},Le("invalid",a);break;case"textarea":Vl(a,c),Le("invalid",a)}pa(r,c),l=null;for(var h in c)if(c.hasOwnProperty(h)){var w=c[h];h==="children"?typeof w=="string"?a.textContent!==w&&(c.suppressHydrationWarning!==!0&&qi(a.textContent,w,e),l=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(c.suppressHydrationWarning!==!0&&qi(a.textContent,w,e),l=["children",""+w]):u.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Le("scroll",a)}switch(r){case"input":qe(a),$l(a,c,!0);break;case"textarea":qe(a),Gl(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Ui)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(r,{is:a.is}):(e=h.createElement(r),r==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,r),e[Rt]=t,e[Jr]=a,rc(e,t,!1,!1),t.stateNode=e;e:{switch(h=ma(r,a),r){case"dialog":Le("cancel",e),Le("close",e),l=a;break;case"iframe":case"object":case"embed":Le("load",e),l=a;break;case"video":case"audio":for(l=0;l<Qr.length;l++)Le(Qr[l],e);l=a;break;case"source":Le("error",e),l=a;break;case"img":case"image":case"link":Le("error",e),Le("load",e),l=a;break;case"details":Le("toggle",e),l=a;break;case"input":Ke(e,a),l=be(e,a),Le("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=X({},a,{value:void 0}),Le("invalid",e);break;case"textarea":Vl(e,a),l=ca(e,a),Le("invalid",e);break;default:l=a}pa(r,l),w=l;for(c in w)if(w.hasOwnProperty(c)){var E=w[c];c==="style"?Yl(e,E):c==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&ql(e,E)):c==="children"?typeof E=="string"?(r!=="textarea"||E!=="")&&Mr(e,E):typeof E=="number"&&Mr(e,""+E):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?E!=null&&c==="onScroll"&&Le("scroll",e):E!=null&&S(e,c,E,h))}switch(r){case"input":qe(e),$l(e,a,!1);break;case"textarea":qe(e),Gl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+se(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?Wn(e,!!a.multiple,c,!1):a.defaultValue!=null&&Wn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ui)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(r=_n(ii.current),_n(Ft.current),eo(t)){if(a=t.stateNode,r=t.memoizedProps,a[Rt]=t,(c=a.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:qi(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(a.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Rt]=t,t.stateNode=a}return nt(t),null;case 13:if(Oe(Ae),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&gt!==null&&t.mode&1&&!(t.flags&128))ld(),ar(),t.flags|=98560,c=!1;else if(c=eo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Rt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),c=!1}else Mt!==null&&(Gs(Mt),Mt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?We===0&&(We=3):Us())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return dr(),Os(e,t),e===null&&Kr(t.stateNode.containerInfo),nt(t),null;case 10:return ss(t.type._context),nt(t),null;case 17:return st(t.type)&&Xi(),nt(t),null;case 19:if(Oe(Ae),c=t.memoizedState,c===null)return nt(t),null;if(a=(t.flags&128)!==0,h=c.rendering,h===null)if(a)ui(c,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=ao(e),h!==null){for(t.flags|=128,ui(c,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)c=r,e=a,c.flags&=14680066,h=c.alternate,h===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=h.childLanes,c.lanes=h.lanes,c.child=h.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=h.memoizedProps,c.memoizedState=h.memoizedState,c.updateQueue=h.updateQueue,c.type=h.type,e=h.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me(Ae,Ae.current&1|2),t.child}e=e.sibling}c.tail!==null&&Be()>mr&&(t.flags|=128,a=!0,ui(c,!1),t.lanes=4194304)}else{if(!a)if(e=ao(h),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ui(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Ne)return nt(t),null}else 2*Be()-c.renderingStartTime>mr&&r!==1073741824&&(t.flags|=128,a=!0,ui(c,!1),t.lanes=4194304);c.isBackwards?(h.sibling=t.child,t.child=h):(r=c.last,r!==null?r.sibling=h:t.child=h,c.last=h)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Be(),t.sibling=null,r=Ae.current,Me(Ae,a?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return qs(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?vt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Om(e,t){switch(ts(t),t.tag){case 1:return st(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Oe(at),Oe(et),ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fs(t),null;case 13:if(Oe(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Ae),null;case 4:return dr(),null;case 10:return ss(t.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var go=!1,rt=!1,Im=typeof WeakSet=="function"?WeakSet:Set,ne=null;function fr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Re(e,t,a)}else r.current=null}function Is(e,t,r){try{r()}catch(a){Re(e,t,a)}}var ac=!1;function Nm(e,t){if(qa=Ni,e=Ru(),Ra(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var h=0,w=-1,E=-1,O=0,Y=0,K=e,q=null;t:for(;;){for(var te;K!==r||l!==0&&K.nodeType!==3||(w=h+l),K!==c||a!==0&&K.nodeType!==3||(E=h+a),K.nodeType===3&&(h+=K.nodeValue.length),(te=K.firstChild)!==null;)q=K,K=te;for(;;){if(K===e)break t;if(q===r&&++O===l&&(w=h),q===c&&++Y===a&&(E=h),(te=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=te}r=w===-1||E===-1?null:{start:w,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ua={focusedElem:e,selectionRange:r},Ni=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,$e=ie.memoizedState,P=t.stateNode,C=P.getSnapshotBeforeUpdate(t.elementType===t.type?oe:Lt(t.type,oe),$e);P.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(J){Re(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return ie=ac,ac=!1,ie}function di(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var c=l.destroy;l.destroy=void 0,c!==void 0&&Is(t,r,c)}l=l.next}while(l!==a)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Ns(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Jr],delete t[Ka],delete t[vm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ui));else if(a!==4&&(e=e.child,e!==null))for(As(e,t,r),e=e.sibling;e!==null;)As(e,t,r),e=e.sibling}function Ds(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ds(e,t,r),e=e.sibling;e!==null;)Ds(e,t,r),e=e.sibling}var Ze=null,Ot=!1;function hn(e,t,r){for(r=r.child;r!==null;)dc(e,t,r),r=r.sibling}function dc(e,t,r){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Pi,r)}catch{}switch(r.tag){case 5:rt||fr(r,t);case 6:var a=Ze,l=Ot;Ze=null,hn(e,t,r),Ze=a,Ot=l,Ze!==null&&(Ot?(e=Ze,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ze.removeChild(r.stateNode));break;case 18:Ze!==null&&(Ot?(e=Ze,r=r.stateNode,e.nodeType===8?Qa(e.parentNode,r):e.nodeType===1&&Qa(e,r),Vr(e)):Qa(Ze,r.stateNode));break;case 4:a=Ze,l=Ot,Ze=r.stateNode.containerInfo,Ot=!0,hn(e,t,r),Ze=a,Ot=l;break;case 0:case 11:case 14:case 15:if(!rt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var c=l,h=c.destroy;c=c.tag,h!==void 0&&(c&2||c&4)&&Is(r,t,h),l=l.next}while(l!==a)}hn(e,t,r);break;case 1:if(!rt&&(fr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(w){Re(r,t,w)}hn(e,t,r);break;case 21:hn(e,t,r);break;case 22:r.mode&1?(rt=(a=rt)||r.memoizedState!==null,hn(e,t,r),rt=a):hn(e,t,r);break;default:hn(e,t,r)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Im),t.forEach(function(a){var l=Gm.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function It(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var c=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ze=w.stateNode,Ot=!1;break e;case 3:Ze=w.stateNode.containerInfo,Ot=!0;break e;case 4:Ze=w.stateNode.containerInfo,Ot=!0;break e}w=w.return}if(Ze===null)throw Error(o(160));dc(c,h,l),Ze=null,Ot=!1;var E=l.alternate;E!==null&&(E.return=null),l.return=null}catch(O){Re(l,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),$t(e),a&4){try{di(3,e,e.return),vo(3,e)}catch(oe){Re(e,e.return,oe)}try{di(5,e,e.return)}catch(oe){Re(e,e.return,oe)}}break;case 1:It(t,e),$t(e),a&512&&r!==null&&fr(r,r.return);break;case 5:if(It(t,e),$t(e),a&512&&r!==null&&fr(r,r.return),e.flags&32){var l=e.stateNode;try{Mr(l,"")}catch(oe){Re(e,e.return,oe)}}if(a&4&&(l=e.stateNode,l!=null)){var c=e.memoizedProps,h=r!==null?r.memoizedProps:c,w=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{w==="input"&&c.type==="radio"&&c.name!=null&&zt(l,c),ma(w,h);var O=ma(w,c);for(h=0;h<E.length;h+=2){var Y=E[h],K=E[h+1];Y==="style"?Yl(l,K):Y==="dangerouslySetInnerHTML"?ql(l,K):Y==="children"?Mr(l,K):S(l,Y,K,O)}switch(w){case"input":Gn(l,c);break;case"textarea":Hl(l,c);break;case"select":var q=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var te=c.value;te!=null?Wn(l,!!c.multiple,te,!1):q!==!!c.multiple&&(c.defaultValue!=null?Wn(l,!!c.multiple,c.defaultValue,!0):Wn(l,!!c.multiple,c.multiple?[]:"",!1))}l[Jr]=c}catch(oe){Re(e,e.return,oe)}}break;case 6:if(It(t,e),$t(e),a&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,c=e.memoizedProps;try{l.nodeValue=c}catch(oe){Re(e,e.return,oe)}}break;case 3:if(It(t,e),$t(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(oe){Re(e,e.return,oe)}break;case 4:It(t,e),$t(e);break;case 13:It(t,e),$t(e),l=e.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(Bs=Be())),a&4&&cc(e);break;case 22:if(Y=r!==null&&r.memoizedState!==null,e.mode&1?(rt=(O=rt)||Y,It(t,e),rt=O):It(t,e),$t(e),a&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!Y&&e.mode&1)for(ne=e,Y=e.child;Y!==null;){for(K=ne=Y;ne!==null;){switch(q=ne,te=q.child,q.tag){case 0:case 11:case 14:case 15:di(4,q,q.return);break;case 1:fr(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){a=q,r=q.return;try{t=a,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(oe){Re(a,r,oe)}}break;case 5:fr(q,q.return);break;case 22:if(q.memoizedState!==null){hc(K);continue}}te!==null?(te.return=q,ne=te):hc(K)}Y=Y.sibling}e:for(Y=null,K=e;;){if(K.tag===5){if(Y===null){Y=K;try{l=K.stateNode,O?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(w=K.stateNode,E=K.memoizedProps.style,h=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Ul("display",h))}catch(oe){Re(e,e.return,oe)}}}else if(K.tag===6){if(Y===null)try{K.stateNode.nodeValue=O?"":K.memoizedProps}catch(oe){Re(e,e.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===e)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===e)break e;for(;K.sibling===null;){if(K.return===null||K.return===e)break e;Y===K&&(Y=null),K=K.return}Y===K&&(Y=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:It(t,e),$t(e),a&4&&cc(e);break;case 21:break;default:It(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lc(r)){var a=r;break e}r=r.return}throw Error(o(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Mr(l,""),a.flags&=-33);var c=uc(e);Ds(e,c,l);break;case 3:case 4:var h=a.stateNode.containerInfo,w=uc(e);As(e,w,h);break;default:throw Error(o(161))}}catch(E){Re(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,r){ne=e,pc(e)}function pc(e,t,r){for(var a=(e.mode&1)!==0;ne!==null;){var l=ne,c=l.child;if(l.tag===22&&a){var h=l.memoizedState!==null||go;if(!h){var w=l.alternate,E=w!==null&&w.memoizedState!==null||rt;w=go;var O=rt;if(go=h,(rt=E)&&!O)for(ne=l;ne!==null;)h=ne,E=h.child,h.tag===22&&h.memoizedState!==null?gc(l):E!==null?(E.return=h,ne=E):gc(l);for(;c!==null;)ne=c,pc(c),c=c.sibling;ne=l,go=w,rt=O}mc(e)}else l.subtreeFlags&8772&&c!==null?(c.return=l,ne=c):mc(e)}}function mc(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||vo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!rt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Lt(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&hd(t,c,a);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hd(t,h,r)}break;case 5:var w=t.stateNode;if(r===null&&t.flags&4){r=w;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&r.focus();break;case"img":E.src&&(r.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var Y=O.memoizedState;if(Y!==null){var K=Y.dehydrated;K!==null&&Vr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}rt||t.flags&512&&Ns(t)}catch(q){Re(t,t.return,q)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function hc(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function gc(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{vo(4,t)}catch(E){Re(t,r,E)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(E){Re(t,l,E)}}var c=t.return;try{Ns(t)}catch(E){Re(t,c,E)}break;case 5:var h=t.return;try{Ns(t)}catch(E){Re(t,h,E)}}}catch(E){Re(t,t.return,E)}if(t===e){ne=null;break}var w=t.sibling;if(w!==null){w.return=t.return,ne=w;break}ne=t.return}}var Dm=Math.ceil,yo=_.ReactCurrentDispatcher,Rs=_.ReactCurrentOwner,Tt=_.ReactCurrentBatchConfig,ke=0,Ye=null,Ve=null,Je=0,vt=0,pr=dn(0),We=0,ci=null,Ln=0,xo=0,Fs=0,fi=null,ut=null,Bs=0,mr=1/0,Kt=null,wo=!1,$s=null,gn=null,So=!1,vn=null,ko=0,pi=0,Vs=null,bo=-1,Eo=0;function ot(){return ke&6?Be():bo!==-1?bo:bo=Be()}function yn(e){return e.mode&1?ke&2&&Je!==0?Je&-Je:wm.transition!==null?(Eo===0&&(Eo=uu()),Eo):(e=je,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Nt(e,t,r,a){if(50<pi)throw pi=0,Vs=null,Error(o(185));Dr(e,r,a),(!(ke&2)||e!==Ye)&&(e===Ye&&(!(ke&2)&&(xo|=r),We===4&&xn(e,Je)),dt(e,a),r===1&&ke===0&&!(t.mode&1)&&(mr=Be()+500,Ki&&fn()))}function dt(e,t){var r=e.callbackNode;wp(e,t);var a=Li(e,e===Ye?Je:0);if(a===0)r!==null&&au(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&au(r),t===1)e.tag===0?xm(yc.bind(null,e)):rd(yc.bind(null,e)),hm(function(){!(ke&6)&&fn()}),r=null;else{switch(du(a)){case 1:r=Sa;break;case 4:r=su;break;case 16:r=zi;break;case 536870912:r=lu;break;default:r=zi}r=Cc(r,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vc(e,t){if(bo=-1,Eo=0,ke&6)throw Error(o(327));var r=e.callbackNode;if(hr()&&e.callbackNode!==r)return null;var a=Li(e,e===Ye?Je:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=To(e,a);else{t=a;var l=ke;ke|=2;var c=wc();(Ye!==e||Je!==t)&&(Kt=null,mr=Be()+500,In(e,t));do try{Bm();break}catch(w){xc(e,w)}while(!0);as(),yo.current=c,ke=l,Ve!==null?t=0:(Ye=null,Je=0,t=We)}if(t!==0){if(t===2&&(l=ka(e),l!==0&&(a=l,t=Hs(e,l))),t===1)throw r=ci,In(e,0),xn(e,a),dt(e,Be()),r;if(t===6)xn(e,a);else{if(l=e.current.alternate,!(a&30)&&!Rm(l)&&(t=To(e,a),t===2&&(c=ka(e),c!==0&&(a=c,t=Hs(e,c))),t===1))throw r=ci,In(e,0),xn(e,a),dt(e,Be()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:Nn(e,ut,Kt);break;case 3:if(xn(e,a),(a&130023424)===a&&(t=Bs+500-Be(),10<t)){if(Li(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){ot(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xa(Nn.bind(null,e,ut,Kt),t);break}Nn(e,ut,Kt);break;case 4:if(xn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var h=31-Pt(a);c=1<<h,h=t[h],h>l&&(l=h),a&=~c}if(a=l,a=Be()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Dm(a/1960))-a,10<a){e.timeoutHandle=Xa(Nn.bind(null,e,ut,Kt),a);break}Nn(e,ut,Kt);break;case 5:Nn(e,ut,Kt);break;default:throw Error(o(329))}}}return dt(e,Be()),e.callbackNode===r?vc.bind(null,e):null}function Hs(e,t){var r=fi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=To(e,t),e!==2&&(t=ut,ut=r,t!==null&&Gs(t)),e}function Gs(e){ut===null?ut=e:ut.push.apply(ut,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],c=l.getSnapshot;l=l.value;try{if(!_t(c(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Fs,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Pt(t),a=1<<r;e[r]=-1,t&=~a}}function yc(e){if(ke&6)throw Error(o(327));hr();var t=Li(e,0);if(!(t&1))return dt(e,Be()),null;var r=To(e,t);if(e.tag!==0&&r===2){var a=ka(e);a!==0&&(t=a,r=Hs(e,a))}if(r===1)throw r=ci,In(e,0),xn(e,t),dt(e,Be()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,ut,Kt),dt(e,Be()),null}function Ws(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(mr=Be()+500,Ki&&fn())}}function On(e){vn!==null&&vn.tag===0&&!(ke&6)&&hr();var t=ke;ke|=1;var r=Tt.transition,a=je;try{if(Tt.transition=null,je=1,e)return e()}finally{je=a,Tt.transition=r,ke=t,!(ke&6)&&fn()}}function qs(){vt=pr.current,Oe(pr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,mm(r)),Ve!==null)for(r=Ve.return;r!==null;){var a=r;switch(ts(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Xi();break;case 3:dr(),Oe(at),Oe(et),ms();break;case 5:fs(a);break;case 4:dr();break;case 13:Oe(Ae);break;case 19:Oe(Ae);break;case 10:ss(a.type._context);break;case 22:case 23:qs()}r=r.return}if(Ye=e,Ve=e=wn(e.current,null),Je=vt=t,We=0,ci=null,Fs=xo=Ln=0,ut=fi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(r=Pn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,c=r.pending;if(c!==null){var h=c.next;c.next=l,a.next=h}r.pending=a}Pn=null}return e}function xc(e,t){do{var r=Ve;try{if(as(),so.current=fo,lo){for(var a=De.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}lo=!1}if(Mn=0,Ue=Ge=De=null,oi=!1,ai=0,Rs.current=null,r===null||r.return===null){We=1,ci=t,Ve=null;break}e:{var c=e,h=r.return,w=r,E=t;if(t=Je,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var O=E,Y=w,K=Y.tag;if(!(Y.mode&1)&&(K===0||K===11||K===15)){var q=Y.alternate;q?(Y.updateQueue=q.updateQueue,Y.memoizedState=q.memoizedState,Y.lanes=q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var te=Gd(h);if(te!==null){te.flags&=-257,Wd(te,h,w,c,t),te.mode&1&&Hd(c,O,t),t=te,E=O;var ie=t.updateQueue;if(ie===null){var oe=new Set;oe.add(E),t.updateQueue=oe}else ie.add(E);break e}else{if(!(t&1)){Hd(c,O,t),Us();break e}E=Error(o(426))}}else if(Ne&&w.mode&1){var $e=Gd(h);if($e!==null){!($e.flags&65536)&&($e.flags|=256),Wd($e,h,w,c,t),is(cr(E,w));break e}}c=E=cr(E,w),We!==4&&(We=2),fi===null?fi=[c]:fi.push(c),c=h;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=$d(c,E,t);md(c,P);break e;case 1:w=E;var C=c.type,L=c.stateNode;if(!(c.flags&128)&&(typeof C.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(gn===null||!gn.has(L)))){c.flags|=65536,t&=-t,c.lanes|=t;var J=Vd(c,w,t);md(c,J);break e}}c=c.return}while(c!==null)}kc(r)}catch(ae){t=ae,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(!0)}function wc(){var e=yo.current;return yo.current=fo,e===null?fo:e}function Us(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(Ln&268435455)&&!(xo&268435455)||xn(Ye,Je)}function To(e,t){var r=ke;ke|=2;var a=wc();(Ye!==e||Je!==t)&&(Kt=null,In(e,t));do try{Fm();break}catch(l){xc(e,l)}while(!0);if(as(),ke=r,yo.current=a,Ve!==null)throw Error(o(261));return Ye=null,Je=0,We}function Fm(){for(;Ve!==null;)Sc(Ve)}function Bm(){for(;Ve!==null&&!cp();)Sc(Ve)}function Sc(e){var t=Tc(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?kc(e):Ve=t,Rs.current=null}function kc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Om(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(r=Lm(r,t,vt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function Nn(e,t,r){var a=je,l=Tt.transition;try{Tt.transition=null,je=1,$m(e,t,r,a)}finally{Tt.transition=l,je=a}return null}function $m(e,t,r,a){do hr();while(vn!==null);if(ke&6)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(Sp(e,c),e===Ye&&(Ve=Ye=null,Je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||So||(So=!0,Cc(zi,function(){return hr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=Tt.transition,Tt.transition=null;var h=je;je=1;var w=ke;ke|=4,Rs.current=null,Nm(e,r),fc(r,e),sm(Ua),Ni=!!qa,Ua=qa=null,e.current=r,Am(r),fp(),ke=w,je=h,Tt.transition=c}else e.current=r;if(So&&(So=!1,vn=e,ko=l),c=e.pendingLanes,c===0&&(gn=null),hp(r.stateNode),dt(e,Be()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(wo)throw wo=!1,e=$s,$s=null,e;return ko&1&&e.tag!==0&&hr(),c=e.pendingLanes,c&1?e===Vs?pi++:(pi=0,Vs=e):pi=0,fn(),null}function hr(){if(vn!==null){var e=du(ko),t=Tt.transition,r=je;try{if(Tt.transition=null,je=16>e?16:e,vn===null)var a=!1;else{if(e=vn,vn=null,ko=0,ke&6)throw Error(o(331));var l=ke;for(ke|=4,ne=e.current;ne!==null;){var c=ne,h=c.child;if(ne.flags&16){var w=c.deletions;if(w!==null){for(var E=0;E<w.length;E++){var O=w[E];for(ne=O;ne!==null;){var Y=ne;switch(Y.tag){case 0:case 11:case 15:di(8,Y,c)}var K=Y.child;if(K!==null)K.return=Y,ne=K;else for(;ne!==null;){Y=ne;var q=Y.sibling,te=Y.return;if(sc(Y),Y===O){ne=null;break}if(q!==null){q.return=te,ne=q;break}ne=te}}}var ie=c.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var $e=oe.sibling;oe.sibling=null,oe=$e}while(oe!==null)}}ne=c}}if(c.subtreeFlags&2064&&h!==null)h.return=c,ne=h;else e:for(;ne!==null;){if(c=ne,c.flags&2048)switch(c.tag){case 0:case 11:case 15:di(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,ne=P;break e}ne=c.return}}var C=e.current;for(ne=C;ne!==null;){h=ne;var L=h.child;if(h.subtreeFlags&2064&&L!==null)L.return=h,ne=L;else e:for(h=C;ne!==null;){if(w=ne,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:vo(9,w)}}catch(ae){Re(w,w.return,ae)}if(w===h){ne=null;break e}var J=w.sibling;if(J!==null){J.return=w.return,ne=J;break e}ne=w.return}}if(ke=l,fn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Pi,e)}catch{}a=!0}return a}finally{je=r,Tt.transition=t}}return!1}function bc(e,t,r){t=cr(r,t),t=$d(e,t,1),e=mn(e,t,1),t=ot(),e!==null&&(Dr(e,1,t),dt(e,t))}function Re(e,t,r){if(e.tag===3)bc(e,e,r);else for(;t!==null;){if(t.tag===3){bc(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))){e=cr(r,e),e=Vd(t,e,1),t=mn(t,e,1),e=ot(),t!==null&&(Dr(t,1,e),dt(t,e));break}}t=t.return}}function Vm(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(Je&r)===r&&(We===4||We===3&&(Je&130023424)===Je&&500>Be()-Bs?In(e,0):Fs|=r),dt(e,t)}function Ec(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var r=ot();e=Yt(e,t),e!==null&&(Dr(e,t,r),dt(e,r))}function Hm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ec(e,r)}function Gm(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Ec(e,r)}var Tc;Tc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)lt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return lt=!1,Mm(e,t,r);lt=!!(e.flags&131072)}else lt=!1,Ne&&t.flags&1048576&&id(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ho(e,t),e=t.pendingProps;var l=rr(t,et.current);ur(t,r),l=vs(null,t,a,e,l,r);var c=ys();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(a)?(c=!0,Qi(t)):c=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ds(t),l.updater=po,t.stateNode=l,l._reactInternals=t,Es(t,a,e,r),t=zs(null,t,a,!0,c,r)):(t.tag=0,Ne&&c&&es(t),it(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=qm(a),e=Lt(a,e),l){case 0:t=js(null,t,a,e,r);break e;case 1:t=Kd(null,t,a,e,r);break e;case 11:t=qd(null,t,a,e,r);break e;case 14:t=Ud(null,t,a,Lt(a.type,e),r);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),js(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),Kd(e,t,a,l,r);case 3:e:{if(Zd(t),e===null)throw Error(o(387));a=t.pendingProps,c=t.memoizedState,l=c.element,pd(e,t),oo(t,a,null,r);var h=t.memoizedState;if(a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){l=cr(Error(o(423)),t),t=Jd(e,t,a,r,l);break e}else if(a!==l){l=cr(Error(o(424)),t),t=Jd(e,t,a,r,l);break e}else for(gt=un(t.stateNode.containerInfo.firstChild),ht=t,Ne=!0,Mt=null,r=cd(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ar(),a===l){t=Qt(e,t,r);break e}it(e,t,a,r)}t=t.child}return t;case 5:return gd(t),e===null&&rs(t),a=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,h=l.children,Ya(a,l)?h=null:c!==null&&Ya(a,c)&&(t.flags|=32),Qd(e,t),it(e,t,h,r),t.child;case 6:return e===null&&rs(t),null;case 13:return ec(e,t,r);case 4:return cs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=sr(t,null,a,r):it(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),qd(e,t,a,l,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,c=t.memoizedProps,h=l.value,Me(no,a._currentValue),a._currentValue=h,c!==null)if(_t(c.value,h)){if(c.children===l.children&&!at.current){t=Qt(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var w=c.dependencies;if(w!==null){h=c.child;for(var E=w.firstContext;E!==null;){if(E.context===a){if(c.tag===1){E=Xt(-1,r&-r),E.tag=2;var O=c.updateQueue;if(O!==null){O=O.shared;var Y=O.pending;Y===null?E.next=E:(E.next=Y.next,Y.next=E),O.pending=E}}c.lanes|=r,E=c.alternate,E!==null&&(E.lanes|=r),ls(c.return,r,t),w.lanes|=r;break}E=E.next}}else if(c.tag===10)h=c.type===t.type?null:c.child;else if(c.tag===18){if(h=c.return,h===null)throw Error(o(341));h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),ls(h,r,t),h=c.sibling}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===t){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}it(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ur(t,r),l=bt(l),a=a(l),t.flags|=1,it(e,t,a,r),t.child;case 14:return a=t.type,l=Lt(a,t.pendingProps),l=Lt(a.type,l),Ud(e,t,a,l,r);case 15:return Yd(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),ho(e,t),t.tag=1,st(a)?(e=!0,Qi(t)):e=!1,ur(t,r),Fd(t,a,l),Es(t,a,l,r),zs(null,t,a,!0,e,r);case 19:return nc(e,t,r);case 22:return Xd(e,t,r)}throw Error(o(156,t.tag))};function Cc(e,t){return ou(e,t)}function Wm(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,r,a){return new Wm(e,t,r,a)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===re)return 14}return 2}function wn(e,t){var r=e.alternate;return r===null?(r=Ct(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Co(e,t,r,a,l,c){var h=2;if(a=e,typeof e=="function")Ys(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case Q:return An(r.children,l,c,t);case G:h=8,l|=8;break;case H:return e=Ct(12,r,t,l|2),e.elementType=H,e.lanes=c,e;case $:return e=Ct(13,r,t,l),e.elementType=$,e.lanes=c,e;case U:return e=Ct(19,r,t,l),e.elementType=U,e.lanes=c,e;case xe:return jo(r,l,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:h=10;break e;case R:h=9;break e;case D:h=11;break e;case re:h=14;break e;case me:h=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ct(h,r,t,l),t.elementType=e,t.type=a,t.lanes=c,t}function An(e,t,r,a){return e=Ct(7,e,a,t),e.lanes=r,e}function jo(e,t,r,a){return e=Ct(22,e,a,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Xs(e,t,r){return e=Ct(6,e,null,t),e.lanes=r,e}function Qs(e,t,r){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ks(e,t,r,a,l,c,h,w,E){return e=new Um(e,t,r,w,E),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Ct(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(c),e}function Ym(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function jc(e){if(!e)return cn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(st(r))return td(e,r,t)}return t}function zc(e,t,r,a,l,c,h,w,E){return e=Ks(r,a,!0,e,l,c,h,w,E),e.context=jc(null),r=e.current,a=ot(),l=yn(r),c=Xt(a,l),c.callback=t??null,mn(r,c,l),e.current.lanes=l,Dr(e,l,a),dt(e,a),e}function zo(e,t,r,a){var l=t.current,c=ot(),h=yn(l);return r=jc(r),t.context===null?t.context=r:t.pendingContext=r,t=Xt(c,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=mn(l,t,h),e!==null&&(Nt(e,l,h,c),io(e,l,h)),h}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Zs(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}_o.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));zo(e,t,null,null)},_o.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){zo(null,e,null,null)}),t[Gt]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<an.length&&t!==0&&t<an[r].priority;r++);an.splice(r,0,e),r===0&&gu(e)}};function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function Xm(e,t,r,a,l){if(l){if(typeof a=="function"){var c=a;a=function(){var O=Po(h);c.call(O)}}var h=zc(t,a,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=h,e[Gt]=h.current,Kr(e.nodeType===8?e.parentNode:e),On(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var w=a;a=function(){var O=Po(E);w.call(O)}}var E=Ks(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=E,e[Gt]=E.current,Kr(e.nodeType===8?e.parentNode:e),On(function(){zo(t,E,r,a)}),E}function Lo(e,t,r,a,l){var c=r._reactRootContainer;if(c){var h=c;if(typeof l=="function"){var w=l;l=function(){var E=Po(h);w.call(E)}}zo(t,h,e,l)}else h=Xm(r,t,e,l,a);return Po(h)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ar(t.pendingLanes);r!==0&&(Ea(t,r|1),dt(t,Be()),!(ke&6)&&(mr=Be()+500,fn()))}break;case 13:On(function(){var a=Yt(e,1);if(a!==null){var l=ot();Nt(a,e,1,l)}}),Zs(e,1)}},Ta=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var r=ot();Nt(t,e,134217728,r)}Zs(e,134217728)}},fu=function(e){if(e.tag===13){var t=yn(e),r=Yt(e,t);if(r!==null){var a=ot();Nt(r,e,t,a)}Zs(e,t)}},pu=function(){return je},mu=function(e,t){var r=je;try{return je=e,t()}finally{je=r}},va=function(e,t,r){switch(t){case"input":if(Gn(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=Yi(a);if(!l)throw Error(o(90));Fe(a),Gn(a,l)}}}break;case"textarea":Hl(e,r);break;case"select":t=r.value,t!=null&&Wn(e,!!r.multiple,t,!1)}},Zl=Ws,Jl=On;var Qm={usingClientEntryPoint:!1,Events:[ei,tr,Yi,Ql,Kl,Ws]},mi={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Km={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Pi=Oo.inject(Km),Dt=Oo}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm,ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!el(t))throw Error(o(200));return Ym(e,t,null,r)},ct.createRoot=function(e,t){if(!el(e))throw Error(o(299));var r=!1,a="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ks(e,1,!1,null,null,r,!1,a,l),e[Gt]=t.current,Kr(e.nodeType===8?e.parentNode:e),new Js(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return On(e)},ct.hydrate=function(e,t,r){if(!Mo(t))throw Error(o(200));return Lo(null,e,t,!0,r)},ct.hydrateRoot=function(e,t,r){if(!el(e))throw Error(o(405));var a=r!=null&&r.hydratedSources||null,l=!1,c="",h=_c;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=zc(t,null,e,1,r??null,l,!1,c,h),e[Gt]=t.current,Kr(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new _o(t)},ct.render=function(e,t,r){if(!Mo(t))throw Error(o(200));return Lo(null,e,t,!1,r)},ct.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(o(40));return e._reactRootContainer?(On(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1},ct.unstable_batchedUpdates=Ws,ct.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Mo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Lo(e,t,r,!1,a)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var Fc;function oh(){if(Fc)return rl.exports;Fc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),rl.exports=ih(),rl.exports}var Bc;function ah(){if(Bc)return Io;Bc=1;var i=oh();return Io.createRoot=i.createRoot,Io.hydrateRoot=i.hydrateRoot,Io}var sh=ah(),ft=function(){return ft=Object.assign||function(n){for(var o,s=1,u=arguments.length;s<u;s++){o=arguments[s];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(n[d]=o[d])}return n},ft.apply(this,arguments)};function wi(i,n,o){if(o||arguments.length===2)for(var s=0,u=n.length,d;s<u;s++)(d||!(s in n))&&(d||(d=Array.prototype.slice.call(n,0,s)),d[s]=n[s]);return i.concat(d||Array.prototype.slice.call(n))}var Ie="-ms-",yi="-moz-",Ce="-webkit-",pf="comm",na="rule",Il="decl",lh="@import",mf="@keyframes",uh="@layer",hf=Math.abs,Nl=String.fromCharCode,wl=Object.assign;function dh(i,n){return Qe(i,0)^45?(((n<<2^Qe(i,0))<<2^Qe(i,1))<<2^Qe(i,2))<<2^Qe(i,3):0}function gf(i){return i.trim()}function en(i,n){return(i=n.exec(i))?i[0]:i}function we(i,n,o){return i.replace(n,o)}function Bo(i,n,o){return i.indexOf(n,o)}function Qe(i,n){return i.charCodeAt(n)|0}function br(i,n,o){return i.slice(n,o)}function Vt(i){return i.length}function vf(i){return i.length}function vi(i,n){return n.push(i),i}function ch(i,n){return i.map(n).join("")}function $c(i,n){return i.filter(function(o){return!en(o,n)})}var ra=1,Er=1,yf=0,jt=0,He=0,zr="";function ia(i,n,o,s,u,d,p,g){return{value:i,root:n,parent:o,type:s,props:u,children:d,line:ra,column:Er,length:p,return:"",siblings:g}}function kn(i,n){return wl(ia("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function gr(i){for(;i.root;)i=kn(i.root,{children:[i]});vi(i,i.siblings)}function fh(){return He}function ph(){return He=jt>0?Qe(zr,--jt):0,Er--,He===10&&(Er=1,ra--),He}function At(){return He=jt<yf?Qe(zr,jt++):0,Er++,He===10&&(Er=1,ra++),He}function Rn(){return Qe(zr,jt)}function $o(){return jt}function oa(i,n){return br(zr,i,n)}function Sl(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mh(i){return ra=Er=1,yf=Vt(zr=i),jt=0,[]}function hh(i){return zr="",i}function al(i){return gf(oa(jt-1,kl(i===91?i+2:i===40?i+1:i)))}function gh(i){for(;(He=Rn())&&He<33;)At();return Sl(i)>2||Sl(He)>3?"":" "}function vh(i,n){for(;--n&&At()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return oa(i,$o()+(n<6&&Rn()==32&&At()==32))}function kl(i){for(;At();)switch(He){case i:return jt;case 34:case 39:i!==34&&i!==39&&kl(He);break;case 40:i===41&&kl(i);break;case 92:At();break}return jt}function yh(i,n){for(;At()&&i+He!==57;)if(i+He===84&&Rn()===47)break;return"/*"+oa(n,jt-1)+"*"+Nl(i===47?i:At())}function xh(i){for(;!Sl(Rn());)At();return oa(i,jt)}function wh(i){return hh(Vo("",null,null,null,[""],i=mh(i),0,[0],i))}function Vo(i,n,o,s,u,d,p,g,f){for(var x=0,v=0,y=p,k=0,b=0,z=0,I=1,B=1,M=1,T=0,S="",_=u,N=d,A=s,Q=S;B;)switch(z=T,T=At()){case 40:if(z!=108&&Qe(Q,y-1)==58){Bo(Q+=we(al(T),"&","&\f"),"&\f",hf(x?g[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:Q+=al(T);break;case 9:case 10:case 13:case 32:Q+=gh(z);break;case 92:Q+=vh($o()-1,7);continue;case 47:switch(Rn()){case 42:case 47:vi(Sh(yh(At(),$o()),n,o,f),f);break;default:Q+="/"}break;case 123*I:g[x++]=Vt(Q)*M;case 125*I:case 59:case 0:switch(T){case 0:case 125:B=0;case 59+v:M==-1&&(Q=we(Q,/\f/g,"")),b>0&&Vt(Q)-y&&vi(b>32?Hc(Q+";",s,o,y-1,f):Hc(we(Q," ","")+";",s,o,y-2,f),f);break;case 59:Q+=";";default:if(vi(A=Vc(Q,n,o,x,v,u,g,S,_=[],N=[],y,d),d),T===123)if(v===0)Vo(Q,n,A,A,_,d,y,g,N);else switch(k===99&&Qe(Q,3)===110?100:k){case 100:case 108:case 109:case 115:Vo(i,A,A,s&&vi(Vc(i,A,A,0,0,u,g,S,u,_=[],y,N),N),u,N,y,g,s?_:N);break;default:Vo(Q,A,A,A,[""],N,0,g,N)}}x=v=b=0,I=M=1,S=Q="",y=p;break;case 58:y=1+Vt(Q),b=z;default:if(I<1){if(T==123)--I;else if(T==125&&I++==0&&ph()==125)continue}switch(Q+=Nl(T),T*I){case 38:M=v>0?1:(Q+="\f",-1);break;case 44:g[x++]=(Vt(Q)-1)*M,M=1;break;case 64:Rn()===45&&(Q+=al(At())),k=Rn(),v=y=Vt(S=Q+=xh($o())),T++;break;case 45:z===45&&Vt(Q)==2&&(I=0)}}return d}function Vc(i,n,o,s,u,d,p,g,f,x,v,y){for(var k=u-1,b=u===0?d:[""],z=vf(b),I=0,B=0,M=0;I<s;++I)for(var T=0,S=br(i,k+1,k=hf(B=p[I])),_=i;T<z;++T)(_=gf(B>0?b[T]+" "+S:we(S,/&\f/g,b[T])))&&(f[M++]=_);return ia(i,n,o,u===0?na:g,f,x,v,y)}function Sh(i,n,o,s){return ia(i,n,o,pf,Nl(fh()),br(i,2,-2),0,s)}function Hc(i,n,o,s,u){return ia(i,n,o,Il,br(i,0,s),br(i,s+1,-1),s,u)}function xf(i,n,o){switch(dh(i,n)){case 5103:return Ce+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+i+i;case 4789:return yi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+i+yi+i+Ie+i+i;case 5936:switch(Qe(i,n+11)){case 114:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Ce+i+Ie+i+i;case 6165:return Ce+i+Ie+"flex-"+i+i;case 5187:return Ce+i+we(i,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Ie+"flex-$1$2")+i;case 5443:return Ce+i+Ie+"flex-item-"+we(i,/flex-|-self/g,"")+(en(i,/flex-|baseline/)?"":Ie+"grid-row-"+we(i,/flex-|-self/g,""))+i;case 4675:return Ce+i+Ie+"flex-line-pack"+we(i,/align-content|flex-|-self/g,"")+i;case 5548:return Ce+i+Ie+we(i,"shrink","negative")+i;case 5292:return Ce+i+Ie+we(i,"basis","preferred-size")+i;case 6060:return Ce+"box-"+we(i,"-grow","")+Ce+i+Ie+we(i,"grow","positive")+i;case 4554:return Ce+we(i,/([^-])(transform)/g,"$1"+Ce+"$2")+i;case 6187:return we(we(we(i,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),i,"")+i;case 5495:case 3959:return we(i,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return we(we(i,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+i+i;case 4200:if(!en(i,/flex-|baseline/))return Ie+"grid-column-align"+br(i,n)+i;break;case 2592:case 3360:return Ie+we(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(s,u){return n=u,en(s.props,/grid-\w+-end/)})?~Bo(i+(o=o[n].value),"span",0)?i:Ie+we(i,"-start","")+i+Ie+"grid-row-span:"+(~Bo(o,"span",0)?en(o,/\d+/):+en(o,/\d+/)-+en(i,/\d+/))+";":Ie+we(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(s){return en(s.props,/grid-\w+-start/)})?i:Ie+we(we(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return we(i,/(.+)-inline(.+)/,Ce+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vt(i)-1-n>6)switch(Qe(i,n+1)){case 109:if(Qe(i,n+4)!==45)break;case 102:return we(i,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+yi+(Qe(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~Bo(i,"stretch",0)?xf(we(i,"stretch","fill-available"),n,o)+i:i}break;case 5152:case 5920:return we(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,d,p,g,f,x){return Ie+u+":"+d+x+(p?Ie+u+"-span:"+(g?f:+f-+d)+x:"")+i});case 4949:if(Qe(i,n+6)===121)return we(i,":",":"+Ce)+i;break;case 6444:switch(Qe(i,Qe(i,14)===45?18:11)){case 120:return we(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(Qe(i,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Ie+"$2box$3")+i;case 100:return we(i,":",":"+Ie)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(i,"scroll-","scroll-snap-")+i}return i}function Uo(i,n){for(var o="",s=0;s<i.length;s++)o+=n(i[s],s,i,n)||"";return o}function kh(i,n,o,s){switch(i.type){case uh:if(i.children.length)break;case lh:case Il:return i.return=i.return||i.value;case pf:return"";case mf:return i.return=i.value+"{"+Uo(i.children,s)+"}";case na:if(!Vt(i.value=i.props.join(",")))return""}return Vt(o=Uo(i.children,s))?i.return=i.value+"{"+o+"}":""}function bh(i){var n=vf(i);return function(o,s,u,d){for(var p="",g=0;g<n;g++)p+=i[g](o,s,u,d)||"";return p}}function Eh(i){return function(n){n.root||(n=n.return)&&i(n)}}function Th(i,n,o,s){if(i.length>-1&&!i.return)switch(i.type){case Il:i.return=xf(i.value,i.length,o);return;case mf:return Uo([kn(i,{value:we(i.value,"@","@"+Ce)})],s);case na:if(i.length)return ch(o=i.props,function(u){switch(en(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gr(kn(i,{props:[we(u,/:(read-\w+)/,":"+yi+"$1")]})),gr(kn(i,{props:[u]})),wl(i,{props:$c(o,s)});break;case"::placeholder":gr(kn(i,{props:[we(u,/:(plac\w+)/,":"+Ce+"input-$1")]})),gr(kn(i,{props:[we(u,/:(plac\w+)/,":"+yi+"$1")]})),gr(kn(i,{props:[we(u,/:(plac\w+)/,Ie+"input-$1")]})),gr(kn(i,{props:[u]})),wl(i,{props:$c(o,s)});break}return""})}}var Ch={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},Tr=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",wf="active",Sf="data-styled-version",aa="6.1.13",Al=`/*!sc*/
`,Yo=typeof window<"u"&&"HTMLElement"in window,jh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),sa=Object.freeze([]),Cr=Object.freeze({});function zh(i,n,o){return o===void 0&&(o=Cr),i.theme!==o.theme&&i.theme||n||o.theme}var kf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ph=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_h=/(^-|-$)/g;function Gc(i){return i.replace(Ph,"-").replace(_h,"")}var Mh=/(a)(d)/gi,No=52,Wc=function(i){return String.fromCharCode(i+(i>25?39:97))};function bl(i){var n,o="";for(n=Math.abs(i);n>No;n=n/No|0)o=Wc(n%No)+o;return(Wc(n%No)+o).replace(Mh,"$1-$2")}var sl,bf=5381,Sr=function(i,n){for(var o=n.length;o;)i=33*i^n.charCodeAt(--o);return i},Ef=function(i){return Sr(bf,i)};function Tf(i){return bl(Ef(i)>>>0)}function Lh(i){return i.displayName||i.name||"Component"}function ll(i){return typeof i=="string"&&!0}var Cf=typeof Symbol=="function"&&Symbol.for,jf=Cf?Symbol.for("react.memo"):60115,Oh=Cf?Symbol.for("react.forward_ref"):60112,Ih={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ah=((sl={})[Oh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sl[jf]=zf,sl);function qc(i){return("type"in(n=i)&&n.type.$$typeof)===jf?zf:"$$typeof"in i?Ah[i.$$typeof]:Ih;var n}var Dh=Object.defineProperty,Rh=Object.getOwnPropertyNames,Uc=Object.getOwnPropertySymbols,Fh=Object.getOwnPropertyDescriptor,Bh=Object.getPrototypeOf,Yc=Object.prototype;function Pf(i,n,o){if(typeof n!="string"){if(Yc){var s=Bh(n);s&&s!==Yc&&Pf(i,s,o)}var u=Rh(n);Uc&&(u=u.concat(Uc(n)));for(var d=qc(i),p=qc(n),g=0;g<u.length;++g){var f=u[g];if(!(f in Nh||o&&o[f]||p&&f in p||d&&f in d)){var x=Fh(n,f);try{Dh(i,f,x)}catch{}}}}return i}function jr(i){return typeof i=="function"}function Dl(i){return typeof i=="object"&&"styledComponentId"in i}function Dn(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function El(i,n){if(i.length===0)return"";for(var o=i[0],s=1;s<i.length;s++)o+=i[s];return o}function Si(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Tl(i,n,o){if(o===void 0&&(o=!1),!o&&!Si(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var s=0;s<n.length;s++)i[s]=Tl(i[s],n[s]);else if(Si(n))for(var s in n)i[s]=Tl(i[s],n[s]);return i}function Rl(i,n){Object.defineProperty(i,"toString",{value:n})}function ki(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var $h=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var o=0,s=0;s<n;s++)o+=this.groupSizes[s];return o},i.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,d=u;n>=d;)if((d<<=1)<0)throw ki(16,"".concat(n));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var p=u;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(n+1),f=(p=0,o.length);p<f;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[n]++,g++)},i.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],s=this.indexOfGroup(n),u=s+o;this.groupSizes[n]=0;for(var d=s;d<u;d++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var s=this.groupSizes[n],u=this.indexOfGroup(n),d=u+s,p=u;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(Al);return o},i}(),Ho=new Map,Xo=new Map,Go=1,Ao=function(i){if(Ho.has(i))return Ho.get(i);for(;Xo.has(Go);)Go++;var n=Go++;return Ho.set(i,n),Xo.set(n,i),n},Vh=function(i,n){Go=n+1,Ho.set(i,n),Xo.set(n,i)},Hh="style[".concat(Tr,"][").concat(Sf,'="').concat(aa,'"]'),Gh=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wh=function(i,n,o){for(var s,u=o.split(","),d=0,p=u.length;d<p;d++)(s=u[d])&&i.registerName(n,s)},qh=function(i,n){for(var o,s=((o=n.textContent)!==null&&o!==void 0?o:"").split(Al),u=[],d=0,p=s.length;d<p;d++){var g=s[d].trim();if(g){var f=g.match(Gh);if(f){var x=0|parseInt(f[1],10),v=f[2];x!==0&&(Vh(v,x),Wh(i,v,f[3]),i.getTag().insertRules(x,u)),u.length=0}else u.push(g)}}},Xc=function(i){for(var n=document.querySelectorAll(Hh),o=0,s=n.length;o<s;o++){var u=n[o];u&&u.getAttribute(Tr)!==wf&&(qh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function Uh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _f=function(i){var n=document.head,o=i||n,s=document.createElement("style"),u=function(g){var f=Array.from(g.querySelectorAll("style[".concat(Tr,"]")));return f[f.length-1]}(o),d=u!==void 0?u.nextSibling:null;s.setAttribute(Tr,wf),s.setAttribute(Sf,aa);var p=Uh();return p&&s.setAttribute("nonce",p),o.insertBefore(s,d),s},Yh=function(){function i(n){this.element=_f(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,u=0,d=s.length;u<d;u++){var p=s[u];if(p.ownerNode===o)return p}throw ki(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},i}(),Xh=function(){function i(n){this.element=_f(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),Qh=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),Qc=Yo,Kh={isServer:!Yo,useCSSOMInjection:!jh},Mf=function(){function i(n,o,s){n===void 0&&(n=Cr),o===void 0&&(o={});var u=this;this.options=ft(ft({},Kh),n),this.gs=o,this.names=new Map(s),this.server=!!n.isServer,!this.server&&Yo&&Qc&&(Qc=!1,Xc(this)),Rl(this,function(){return function(d){for(var p=d.getTag(),g=p.length,f="",x=function(y){var k=function(M){return Xo.get(M)}(y);if(k===void 0)return"continue";var b=d.names.get(k),z=p.getGroup(y);if(b===void 0||!b.size||z.length===0)return"continue";var I="".concat(Tr,".g").concat(y,'[id="').concat(k,'"]'),B="";b!==void 0&&b.forEach(function(M){M.length>0&&(B+="".concat(M,","))}),f+="".concat(z).concat(I,'{content:"').concat(B,'"}').concat(Al)},v=0;v<g;v++)x(v);return f}(u)})}return i.registerId=function(n){return Ao(n)},i.prototype.rehydrate=function(){!this.server&&Yo&&Xc(this)},i.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new i(ft(ft({},this.options),n),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var s=o.useCSSOMInjection,u=o.target;return o.isServer?new Qh(u):s?new Yh(u):new Xh(u)}(this.options),new $h(n)));var n},i.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},i.prototype.registerName=function(n,o){if(Ao(n),this.names.has(n))this.names.get(n).add(o);else{var s=new Set;s.add(o),this.names.set(n,s)}},i.prototype.insertRules=function(n,o,s){this.registerName(n,o),this.getTag().insertRules(Ao(n),s)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(Ao(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Zh=/&/g,Jh=/^\s*\/\/.*$/gm;function Lf(i,n){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(s){return"".concat(n," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Lf(o.children,n)),o})}function e0(i){var n,o,s,u=Cr,d=u.options,p=d===void 0?Cr:d,g=u.plugins,f=g===void 0?sa:g,x=function(k,b,z){return z.startsWith(o)&&z.endsWith(o)&&z.replaceAll(o,"").length>0?".".concat(n):k},v=f.slice();v.push(function(k){k.type===na&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(Zh,o).replace(s,x))}),p.prefix&&v.push(Th),v.push(kh);var y=function(k,b,z,I){b===void 0&&(b=""),z===void 0&&(z=""),I===void 0&&(I="&"),n=I,o=b,s=new RegExp("\\".concat(o,"\\b"),"g");var B=k.replace(Jh,""),M=wh(z||b?"".concat(z," ").concat(b," { ").concat(B," }"):B);p.namespace&&(M=Lf(M,p.namespace));var T=[];return Uo(M,bh(v.concat(Eh(function(S){return T.push(S)})))),T};return y.hash=f.length?f.reduce(function(k,b){return b.name||ki(15),Sr(k,b.name)},bf).toString():"",y}var t0=new Mf,Cl=e0(),Of=Te.createContext({shouldForwardProp:void 0,styleSheet:t0,stylis:Cl});Of.Consumer;Te.createContext(void 0);function Kc(){return ge.useContext(Of)}var If=function(){function i(n,o){var s=this;this.inject=function(u,d){d===void 0&&(d=Cl);var p=s.name+d.hash;u.hasNameForId(s.id,p)||u.insertRules(s.id,p,d(s.rules,p,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,Rl(this,function(){throw ki(12,String(s.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=Cl),this.name+n.hash},i}(),n0=function(i){return i>="A"&&i<="Z"};function Zc(i){for(var n="",o=0;o<i.length;o++){var s=i[o];if(o===1&&s==="-"&&i[0]==="-")return i;n0(s)?n+="-"+s.toLowerCase():n+=s}return n.startsWith("ms-")?"-"+n:n}var Nf=function(i){return i==null||i===!1||i===""},Af=function(i){var n,o,s=[];for(var u in i){var d=i[u];i.hasOwnProperty(u)&&!Nf(d)&&(Array.isArray(d)&&d.isCss||jr(d)?s.push("".concat(Zc(u),":"),d,";"):Si(d)?s.push.apply(s,wi(wi(["".concat(u," {")],Af(d),!1),["}"],!1)):s.push("".concat(Zc(u),": ").concat((n=u,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Ch||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function Fn(i,n,o,s){if(Nf(i))return[];if(Dl(i))return[".".concat(i.styledComponentId)];if(jr(i)){if(!jr(d=i)||d.prototype&&d.prototype.isReactComponent||!n)return[i];var u=i(n);return Fn(u,n,o,s)}var d;return i instanceof If?o?(i.inject(o,s),[i.getName(s)]):[i]:Si(i)?Af(i):Array.isArray(i)?Array.prototype.concat.apply(sa,i.map(function(p){return Fn(p,n,o,s)})):[i.toString()]}function r0(i){for(var n=0;n<i.length;n+=1){var o=i[n];if(jr(o)&&!Dl(o))return!1}return!0}var i0=Ef(aa),o0=function(){function i(n,o,s){this.rules=n,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&r0(n),this.componentId=o,this.baseHash=Sr(i0,o),this.baseStyle=s,Mf.registerId(o)}return i.prototype.generateAndInjectStyles=function(n,o,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=Dn(u,this.staticRulesId);else{var d=El(Fn(this.rules,n,o,s)),p=bl(Sr(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=s(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}u=Dn(u,p),this.staticRulesId=p}else{for(var f=Sr(this.baseHash,s.hash),x="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")x+=y;else if(y){var k=El(Fn(y,n,o,s));f=Sr(f,k+v),x+=k}}if(x){var b=bl(f>>>0);o.hasNameForId(this.componentId,b)||o.insertRules(this.componentId,b,s(x,".".concat(b),void 0,this.componentId)),u=Dn(u,b)}}return u},i}(),Df=Te.createContext(void 0);Df.Consumer;var ul={};function a0(i,n,o){var s=Dl(i),u=i,d=!ll(i),p=n.attrs,g=p===void 0?sa:p,f=n.componentId,x=f===void 0?function(_,N){var A=typeof _!="string"?"sc":Gc(_);ul[A]=(ul[A]||0)+1;var Q="".concat(A,"-").concat(Tf(aa+A+ul[A]));return N?"".concat(N,"-").concat(Q):Q}(n.displayName,n.parentComponentId):f,v=n.displayName,y=v===void 0?function(_){return ll(_)?"styled.".concat(_):"Styled(".concat(Lh(_),")")}(i):v,k=n.displayName&&n.componentId?"".concat(Gc(n.displayName),"-").concat(n.componentId):n.componentId||x,b=s&&u.attrs?u.attrs.concat(g).filter(Boolean):g,z=n.shouldForwardProp;if(s&&u.shouldForwardProp){var I=u.shouldForwardProp;if(n.shouldForwardProp){var B=n.shouldForwardProp;z=function(_,N){return I(_,N)&&B(_,N)}}else z=I}var M=new o0(o,k,s?u.componentStyle:void 0);function T(_,N){return function(A,Q,G){var H=A.attrs,W=A.componentStyle,R=A.defaultProps,D=A.foldedComponentIds,$=A.styledComponentId,U=A.target,re=Te.useContext(Df),me=Kc(),xe=A.shouldForwardProp||me.shouldForwardProp,V=zh(Q,re,R)||Cr,Z=function(he,fe,pe){for(var se,ye=ft(ft({},fe),{className:void 0,theme:pe}),_e=0;_e<he.length;_e+=1){var qe=jr(se=he[_e])?se(ye):se;for(var Fe in qe)ye[Fe]=Fe==="className"?Dn(ye[Fe],qe[Fe]):Fe==="style"?ft(ft({},ye[Fe]),qe[Fe]):qe[Fe]}return fe.className&&(ye.className=Dn(ye.className,fe.className)),ye}(H,Q,V),X=Z.as||U,j={};for(var F in Z)Z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&Z.theme===V||(F==="forwardedAs"?j.as=Z.forwardedAs:xe&&!xe(F,X)||(j[F]=Z[F]));var ue=function(he,fe){var pe=Kc(),se=he.generateAndInjectStyles(fe,pe.styleSheet,pe.stylis);return se}(W,Z),le=Dn(D,$);return ue&&(le+=" "+ue),Z.className&&(le+=" "+Z.className),j[ll(X)&&!kf.has(X)?"class":"className"]=le,j.ref=G,ge.createElement(X,j)}(S,_,N)}T.displayName=y;var S=Te.forwardRef(T);return S.attrs=b,S.componentStyle=M,S.displayName=y,S.shouldForwardProp=z,S.foldedComponentIds=s?Dn(u.foldedComponentIds,u.styledComponentId):"",S.styledComponentId=k,S.target=s?u.target:i,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=s?function(N){for(var A=[],Q=1;Q<arguments.length;Q++)A[Q-1]=arguments[Q];for(var G=0,H=A;G<H.length;G++)Tl(N,H[G],!0);return N}({},u.defaultProps,_):_}}),Rl(S,function(){return".".concat(S.styledComponentId)}),d&&Pf(S,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Jc(i,n){for(var o=[i[0]],s=0,u=n.length;s<u;s+=1)o.push(n[s],i[s+1]);return o}var ef=function(i){return Object.assign(i,{isCss:!0})};function Rf(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(jr(i)||Si(i))return ef(Fn(Jc(sa,wi([i],n,!0))));var s=i;return n.length===0&&s.length===1&&typeof s[0]=="string"?Fn(s):ef(Fn(Jc(s,n)))}function jl(i,n,o){if(o===void 0&&(o=Cr),!n)throw ki(1,n);var s=function(u){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return i(n,o,Rf.apply(void 0,wi([u],d,!1)))};return s.attrs=function(u){return jl(i,n,ft(ft({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return jl(i,n,ft(ft({},o),u))},s}var Ff=function(i){return jl(a0,i)},ee=Ff;kf.forEach(function(i){ee[i]=Ff(i)});function la(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var s=El(Rf.apply(void 0,wi([i],n,!1))),u=Tf(s);return new If(u,s)}var Wo={exports:{}},s0=Wo.exports,tf;function l0(){return tf||(tf=1,function(i,n){(function(o,s){i.exports=s()})(s0,function(){return function(o){function s(d){if(u[d])return u[d].exports;var p=u[d]={exports:{},id:d,loaded:!1};return o[d].call(p.exports,p,p.exports,s),p.loaded=!0,p.exports}var u={};return s.m=o,s.c=u,s.p="dist/",s(0)}([function(o,s,u){function d(U){return U&&U.__esModule?U:{default:U}}var p=Object.assign||function(U){for(var re=1;re<arguments.length;re++){var me=arguments[re];for(var xe in me)Object.prototype.hasOwnProperty.call(me,xe)&&(U[xe]=me[xe])}return U},g=u(1),f=(d(g),u(6)),x=d(f),v=u(7),y=d(v),k=u(8),b=d(k),z=u(9),I=d(z),B=u(10),M=d(B),T=u(11),S=d(T),_=u(14),N=d(_),A=[],Q=!1,G={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var U=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(U&&(Q=!0),Q)return A=(0,S.default)(A,G),(0,M.default)(A,G.once),A},W=function(){A=(0,N.default)(),H()},R=function(){A.forEach(function(U,re){U.node.removeAttribute("data-aos"),U.node.removeAttribute("data-aos-easing"),U.node.removeAttribute("data-aos-duration"),U.node.removeAttribute("data-aos-delay")})},D=function(U){return U===!0||U==="mobile"&&I.default.mobile()||U==="phone"&&I.default.phone()||U==="tablet"&&I.default.tablet()||typeof U=="function"&&U()===!0},$=function(U){G=p(G,U),A=(0,N.default)();var re=document.all&&!window.atob;return D(G.disable)||re?R():(G.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),G.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",G.easing),document.querySelector("body").setAttribute("data-aos-duration",G.duration),document.querySelector("body").setAttribute("data-aos-delay",G.delay),G.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):G.startEvent==="load"?window.addEventListener(G.startEvent,function(){H(!0)}):document.addEventListener(G.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("scroll",(0,x.default)(function(){(0,M.default)(A,G.once)},G.throttleDelay)),G.disableMutationObserver||b.default.ready("[data-aos]",W),A)};o.exports={init:$,refresh:H,refreshHard:W}},function(o,s){},,,,,function(o,s){(function(u){function d(D,$,U){function re(be){var Ke=le,zt=he;return le=he=void 0,_e=be,pe=D.apply(zt,Ke)}function me(be){return _e=be,se=setTimeout(Z,$),qe?re(be):pe}function xe(be){var Ke=be-ye,zt=be-_e,Gn=$-Ke;return Fe?W(Gn,fe-zt):Gn}function V(be){var Ke=be-ye,zt=be-_e;return ye===void 0||Ke>=$||Ke<0||Fe&&zt>=fe}function Z(){var be=R();return V(be)?X(be):void(se=setTimeout(Z,xe(be)))}function X(be){return se=void 0,Pe&&le?re(be):(le=he=void 0,pe)}function j(){se!==void 0&&clearTimeout(se),_e=0,le=ye=he=se=void 0}function F(){return se===void 0?pe:X(R())}function ue(){var be=R(),Ke=V(be);if(le=arguments,he=this,ye=be,Ke){if(se===void 0)return me(ye);if(Fe)return se=setTimeout(Z,$),re(ye)}return se===void 0&&(se=setTimeout(Z,$)),pe}var le,he,fe,pe,se,ye,_e=0,qe=!1,Fe=!1,Pe=!0;if(typeof D!="function")throw new TypeError(k);return $=v($)||0,g(U)&&(qe=!!U.leading,Fe="maxWait"in U,fe=Fe?H(v(U.maxWait)||0,$):fe,Pe="trailing"in U?!!U.trailing:Pe),ue.cancel=j,ue.flush=F,ue}function p(D,$,U){var re=!0,me=!0;if(typeof D!="function")throw new TypeError(k);return g(U)&&(re="leading"in U?!!U.leading:re,me="trailing"in U?!!U.trailing:me),d(D,$,{leading:re,maxWait:$,trailing:me})}function g(D){var $=typeof D>"u"?"undefined":y(D);return!!D&&($=="object"||$=="function")}function f(D){return!!D&&(typeof D>"u"?"undefined":y(D))=="object"}function x(D){return(typeof D>"u"?"undefined":y(D))=="symbol"||f(D)&&G.call(D)==z}function v(D){if(typeof D=="number")return D;if(x(D))return b;if(g(D)){var $=typeof D.valueOf=="function"?D.valueOf():D;D=g($)?$+"":$}if(typeof D!="string")return D===0?D:+D;D=D.replace(I,"");var U=M.test(D);return U||T.test(D)?S(D.slice(2),U?2:8):B.test(D)?b:+D}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},k="Expected a function",b=NaN,z="[object Symbol]",I=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,T=/^0o[0-7]+$/i,S=parseInt,_=(typeof u>"u"?"undefined":y(u))=="object"&&u&&u.Object===Object&&u,N=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,A=_||N||Function("return this")(),Q=Object.prototype,G=Q.toString,H=Math.max,W=Math.min,R=function(){return A.Date.now()};o.exports=p}).call(s,function(){return this}())},function(o,s){(function(u){function d(R,D,$){function U(Pe){var be=ue,Ke=le;return ue=le=void 0,ye=Pe,fe=R.apply(Ke,be)}function re(Pe){return ye=Pe,pe=setTimeout(V,D),_e?U(Pe):fe}function me(Pe){var be=Pe-se,Ke=Pe-ye,zt=D-be;return qe?H(zt,he-Ke):zt}function xe(Pe){var be=Pe-se,Ke=Pe-ye;return se===void 0||be>=D||be<0||qe&&Ke>=he}function V(){var Pe=W();return xe(Pe)?Z(Pe):void(pe=setTimeout(V,me(Pe)))}function Z(Pe){return pe=void 0,Fe&&ue?U(Pe):(ue=le=void 0,fe)}function X(){pe!==void 0&&clearTimeout(pe),ye=0,ue=se=le=pe=void 0}function j(){return pe===void 0?fe:Z(W())}function F(){var Pe=W(),be=xe(Pe);if(ue=arguments,le=this,se=Pe,be){if(pe===void 0)return re(se);if(qe)return pe=setTimeout(V,D),U(se)}return pe===void 0&&(pe=setTimeout(V,D)),fe}var ue,le,he,fe,pe,se,ye=0,_e=!1,qe=!1,Fe=!0;if(typeof R!="function")throw new TypeError(y);return D=x(D)||0,p($)&&(_e=!!$.leading,qe="maxWait"in $,he=qe?G(x($.maxWait)||0,D):he,Fe="trailing"in $?!!$.trailing:Fe),F.cancel=X,F.flush=j,F}function p(R){var D=typeof R>"u"?"undefined":v(R);return!!R&&(D=="object"||D=="function")}function g(R){return!!R&&(typeof R>"u"?"undefined":v(R))=="object"}function f(R){return(typeof R>"u"?"undefined":v(R))=="symbol"||g(R)&&Q.call(R)==b}function x(R){if(typeof R=="number")return R;if(f(R))return k;if(p(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=p(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=R.replace(z,"");var $=B.test(R);return $||M.test(R)?T(R.slice(2),$?2:8):I.test(R)?k:+R}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},y="Expected a function",k=NaN,b="[object Symbol]",z=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,M=/^0o[0-7]+$/i,T=parseInt,S=(typeof u>"u"?"undefined":v(u))=="object"&&u&&u.Object===Object&&u,_=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,N=S||_||Function("return this")(),A=Object.prototype,Q=A.toString,G=Math.max,H=Math.min,W=function(){return N.Date.now()};o.exports=d}).call(s,function(){return this}())},function(o,s){function u(v){var y=void 0,k=void 0;for(y=0;y<v.length;y+=1)if(k=v[y],k.dataset&&k.dataset.aos||k.children&&u(k.children))return!0;return!1}function d(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(){return!!d()}function g(v,y){var k=window.document,b=d(),z=new b(f);x=y,z.observe(k.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(v){v&&v.forEach(function(y){var k=Array.prototype.slice.call(y.addedNodes),b=Array.prototype.slice.call(y.removedNodes),z=k.concat(b);if(u(z))return x()})}Object.defineProperty(s,"__esModule",{value:!0});var x=function(){};s.default={isSupported:p,ready:g}},function(o,s){function u(k,b){if(!(k instanceof b))throw new TypeError("Cannot call a class as a function")}function d(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var p=function(){function k(b,z){for(var I=0;I<z.length;I++){var B=z[I];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}return function(b,z,I){return z&&k(b.prototype,z),I&&k(b,I),b}}(),g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,x=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=function(){function k(){u(this,k)}return p(k,[{key:"phone",value:function(){var b=d();return!(!g.test(b)&&!f.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=d();return!(!x.test(b)&&!v.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),k}();s.default=new y},function(o,s){Object.defineProperty(s,"__esModule",{value:!0});var u=function(p,g,f){var x=p.node.getAttribute("data-aos-once");g>p.position?p.node.classList.add("aos-animate"):typeof x<"u"&&(x==="false"||!f&&x!=="true")&&p.node.classList.remove("aos-animate")},d=function(p,g){var f=window.pageYOffset,x=window.innerHeight;p.forEach(function(v,y){u(v,x+f,g)})};s.default=d},function(o,s,u){function d(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(s,"__esModule",{value:!0});var p=u(12),g=d(p),f=function(x,v){return x.forEach(function(y,k){y.node.classList.add("aos-init"),y.position=(0,g.default)(y.node,v.offset)}),x};s.default=f},function(o,s,u){function d(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(s,"__esModule",{value:!0});var p=u(13),g=d(p),f=function(x,v){var y=0,k=0,b=window.innerHeight,z={offset:x.getAttribute("data-aos-offset"),anchor:x.getAttribute("data-aos-anchor"),anchorPlacement:x.getAttribute("data-aos-anchor-placement")};switch(z.offset&&!isNaN(z.offset)&&(k=parseInt(z.offset)),z.anchor&&document.querySelectorAll(z.anchor)&&(x=document.querySelectorAll(z.anchor)[0]),y=(0,g.default)(x).top,z.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=x.offsetHeight/2;break;case"bottom-bottom":y+=x.offsetHeight;break;case"top-center":y+=b/2;break;case"bottom-center":y+=b/2+x.offsetHeight;break;case"center-center":y+=b/2+x.offsetHeight/2;break;case"top-top":y+=b;break;case"bottom-top":y+=x.offsetHeight+b;break;case"center-top":y+=x.offsetHeight/2+b}return z.anchorPlacement||z.offset||isNaN(v)||(k=v),y+k};s.default=f},function(o,s){Object.defineProperty(s,"__esModule",{value:!0});var u=function(d){for(var p=0,g=0;d&&!isNaN(d.offsetLeft)&&!isNaN(d.offsetTop);)p+=d.offsetLeft-(d.tagName!="BODY"?d.scrollLeft:0),g+=d.offsetTop-(d.tagName!="BODY"?d.scrollTop:0),d=d.offsetParent;return{top:g,left:p}};s.default=u},function(o,s){Object.defineProperty(s,"__esModule",{value:!0});var u=function(d){return d=d||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(d,function(p){return{node:p}})};s.default=u}])})}(Wo)),Wo.exports}var u0=l0();const $n=ff(u0),d0=ee.header`
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
`,c0=ee.div`
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
`;function f0(){const[i,n]=ge.useState(!1),o=ge.useRef(null);return ge.useEffect(()=>{$n.init({duration:1500,offset:20,easing:"ease-in-out",once:!0})},[]),ge.useEffect(()=>{const s=()=>{n(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n(!1)},200)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),o.current&&clearTimeout(o.current)}},[]),m.jsx(d0,{scrolling:i,children:m.jsx(c0,{"data-aos":"zoom-out-top","data-aos-delay":"100",children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png",alt:"logo"})})})})}const p0=ee.button`
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
    
`,h0=()=>m.jsx(m.Fragment,{children:m.jsx(m0,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",children:m.jsx("b",{children:"Saber mais"})})});la`
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
        padding: 5% 5%;
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
        width: 100%;
    }

    & > video {
        width: 55%!important;
        height: 100%;
        object-fit: contain;
        background-color: transparent!important;
        -webkit-overflow-scrolling: touch!important;
        -webkit-backface-visibility: hidden!important;
        -webkit-transform: translate3d(0, 0, 0)!important; 
        filter: drop-shadow(0 0 10px rgba(225, 255, 255, 0.4)) drop-shadow(0 0 20px #D552D040) drop-shadow(0 0 30px #5339DF40);
        transition: filter 0.3s ease;
        position: relative;

        & > video::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-color: transparent;
            pointer-events: none;
        }

        @media (max-width: 768px) {
            width: 65%!important;
            display: none;
        }
    }

    & > img {
        width: 95%!important;
        height: 100%;
        object-fit: contain;
        border-radius: 8px; 
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
`,S0=()=>{const i=ge.useRef(null),[n,o]=ge.useState(!1);return ge.useEffect(()=>{const s=i.current;if(window.innerWidth<=768){o(!0);return}if(s){const d=()=>{o(!0)};return s.addEventListener("ended",d),()=>{s.removeEventListener("ended",d)}}},[]),m.jsxs(m.Fragment,{children:[m.jsx(g0,{}),m.jsxs(v0,{children:[m.jsxs(y0,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:["Já imaginou ter um ",m.jsx("b",{children:"site de altíssimo"})," padrão?"]}),m.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),m.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"300",children:[m.jsx(Hn,{}),m.jsx(h0,{})]}),m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),m.jsxs(w0,{"data-aos":"fade-in","data-aos-delay":"500",children:[m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsxs("article",{children:[m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"4.9"}),m.jsx("img",{"data-aos":"fade-in","data-aos-delay":"1000",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"})]})]})]}),m.jsx(x0,{"data-aos":"fade-in","data-aos-delay":"300","data-aos-duration":"1000",children:n?m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png",alt:"Final do vídeo",style:{width:"100%",height:"auto"}}):m.jsx("video",{ref:i,autoPlay:!0,muted:!0,playsInline:!0,src:"https://res.cloudinary.com/dabucfkmg/video/upload/v1735397679/semfundo_keds6p.webm",style:{width:"100%",height:"auto"},children:"Seu navegador não suporta o elemento de vídeo."})})]})]})};var Bf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nf=Te.createContext&&Te.createContext(Bf),k0=["attr","size","title"];function b0(i,n){if(i==null)return{};var o=E0(i,n),s,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);for(u=0;u<d.length;u++)s=d[u],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(o[s]=i[s])}return o}function E0(i,n){if(i==null)return{};var o={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(n.indexOf(s)>=0)continue;o[s]=i[s]}return o}function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},Qo.apply(this,arguments)}function rf(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);n&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,s)}return o}function Ko(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?rf(Object(o),!0).forEach(function(s){T0(i,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):rf(Object(o)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(o,s))})}return i}function T0(i,n,o){return n=C0(n),n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function C0(i){var n=j0(i,"string");return typeof n=="symbol"?n:n+""}function j0(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var s=o.call(i,n||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function $f(i){return i&&i.map((n,o)=>Te.createElement(n.tag,Ko({key:o},n.attr),$f(n.child)))}function pt(i){return n=>Te.createElement(z0,Qo({attr:Ko({},i.attr)},n),$f(i.child))}function z0(i){var n=o=>{var{attr:s,size:u,title:d}=i,p=b0(i,k0),g=u||o.size||"1em",f;return o.className&&(f=o.className),i.className&&(f=(f?f+" ":"")+i.className),Te.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,p,{className:f,style:Ko(Ko({color:i.color||o.color},o.style),i.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&Te.createElement("title",null,d),i.children)};return nf!==void 0?Te.createElement(nf.Consumer,null,o=>n(o)):n(Bf)}function Vf(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(i)}function P0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function _0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(i)}function M0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(i)}function L0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"},child:[]},{tag:"path",attr:{d:"M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"},child:[]}]})(i)}function O0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},child:[]},{tag:"path",attr:{d:"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"},child:[]}]})(i)}function I0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(i)}function N0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"},child:[]}]})(i)}function A0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},child:[]}]})(i)}function D0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(i)}function R0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"},child:[]},{tag:"path",attr:{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"},child:[]}]})(i)}function F0(i){return pt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"},child:[]}]})(i)}const B0=ee.div`
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
    gap: 15px;
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
    gap: 15px;
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

`,yr=({title:i,description:n})=>m.jsxs($0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Hn,{})]});function of(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Fl(i,n){i===void 0&&(i={}),n===void 0&&(n={}),Object.keys(n).forEach(o=>{typeof i[o]>"u"?i[o]=n[o]:of(n[o])&&of(i[o])&&Object.keys(n[o]).length>0&&Fl(i[o],n[o])})}const Hf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tn(){const i=typeof document<"u"?document:{};return Fl(i,Hf),i}const V0={document:Hf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function wt(){const i=typeof window<"u"?window:{};return Fl(i,V0),i}function H0(i){return i===void 0&&(i=""),i.trim().split(" ").filter(n=>!!n.trim())}function G0(i){const n=i;Object.keys(n).forEach(o=>{try{n[o]=null}catch{}try{delete n[o]}catch{}})}function zl(i,n){return n===void 0&&(n=0),setTimeout(i,n)}function Bn(){return Date.now()}function W0(i){const n=wt();let o;return n.getComputedStyle&&(o=n.getComputedStyle(i,null)),!o&&i.currentStyle&&(o=i.currentStyle),o||(o=i.style),o}function q0(i,n){n===void 0&&(n="x");const o=wt();let s,u,d;const p=W0(i);return o.WebKitCSSMatrix?(u=p.transform||p.webkitTransform,u.split(",").length>6&&(u=u.split(", ").map(g=>g.replace(",",".")).join(", ")),d=new o.WebKitCSSMatrix(u==="none"?"":u)):(d=p.MozTransform||p.OTransform||p.MsTransform||p.msTransform||p.transform||p.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=d.toString().split(",")),n==="x"&&(o.WebKitCSSMatrix?u=d.m41:s.length===16?u=parseFloat(s[12]):u=parseFloat(s[4])),n==="y"&&(o.WebKitCSSMatrix?u=d.m42:s.length===16?u=parseFloat(s[13]):u=parseFloat(s[5])),u||0}function Do(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function U0(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function xt(){const i=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let o=1;o<arguments.length;o+=1){const s=o<0||arguments.length<=o?void 0:arguments[o];if(s!=null&&!U0(s)){const u=Object.keys(Object(s)).filter(d=>n.indexOf(d)<0);for(let d=0,p=u.length;d<p;d+=1){const g=u[d],f=Object.getOwnPropertyDescriptor(s,g);f!==void 0&&f.enumerable&&(Do(i[g])&&Do(s[g])?s[g].__swiper__?i[g]=s[g]:xt(i[g],s[g]):!Do(i[g])&&Do(s[g])?(i[g]={},s[g].__swiper__?i[g]=s[g]:xt(i[g],s[g])):i[g]=s[g])}}}return i}function Ro(i,n,o){i.style.setProperty(n,o)}function Gf(i){let{swiper:n,targetPosition:o,side:s}=i;const u=wt(),d=-n.translate;let p=null,g;const f=n.params.speed;n.wrapperEl.style.scrollSnapType="none",u.cancelAnimationFrame(n.cssModeFrameID);const x=o>d?"next":"prev",v=(k,b)=>x==="next"&&k>=b||x==="prev"&&k<=b,y=()=>{g=new Date().getTime(),p===null&&(p=g);const k=Math.max(Math.min((g-p)/f,1),0),b=.5-Math.cos(k*Math.PI)/2;let z=d+b*(o-d);if(v(z,o)&&(z=o),n.wrapperEl.scrollTo({[s]:z}),v(z,o)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[s]:z})}),u.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=u.requestAnimationFrame(y)};y()}function Ht(i,n){n===void 0&&(n="");const o=[...i.children];return i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),n?o.filter(s=>s.matches(n)):o}function Y0(i,n){const o=n.contains(i);return!o&&n instanceof HTMLSlotElement?[...n.assignedElements()].includes(i):o}function Zo(i){try{console.warn(i);return}catch{}}function Jo(i,n){n===void 0&&(n=[]);const o=document.createElement(i);return o.classList.add(...Array.isArray(n)?n:H0(n)),o}function X0(i,n){const o=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;n?s.matches(n)&&o.push(s):o.push(s),i=s}return o}function Q0(i,n){const o=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;n?s.matches(n)&&o.push(s):o.push(s),i=s}return o}function bn(i,n){return wt().getComputedStyle(i,null).getPropertyValue(n)}function ea(i){let n=i,o;if(n){for(o=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(o+=1);return o}}function Wf(i,n){const o=[];let s=i.parentElement;for(;s;)n?s.matches(n)&&o.push(s):o.push(s),s=s.parentElement;return o}function dl(i,n){function o(s){s.target===i&&(n.call(i,s),i.removeEventListener("transitionend",o))}n&&i.addEventListener("transitionend",o)}function Pl(i,n,o){const s=wt();return i[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}function Zt(i){return(Array.isArray(i)?i:[i]).filter(n=>!!n)}let cl;function K0(){const i=wt(),n=tn();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&n instanceof i.DocumentTouch)}}function qf(){return cl||(cl=K0()),cl}let fl;function Z0(i){let{userAgent:n}=i===void 0?{}:i;const o=qf(),s=wt(),u=s.navigator.platform,d=n||s.navigator.userAgent,p={ios:!1,android:!1},g=s.screen.width,f=s.screen.height,x=d.match(/(Android);?[\s\/]+([\d.]+)?/);let v=d.match(/(iPad).*OS\s([\d_]+)/);const y=d.match(/(iPod)(.*OS\s([\d_]+))?/),k=!v&&d.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=u==="Win32";let z=u==="MacIntel";const I=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!v&&z&&o.touch&&I.indexOf(`${g}x${f}`)>=0&&(v=d.match(/(Version)\/([\d.]+)/),v||(v=[0,1,"13_0_0"]),z=!1),x&&!b&&(p.os="android",p.android=!0),(v||k||y)&&(p.os="ios",p.ios=!0),p}function Uf(i){return i===void 0&&(i={}),fl||(fl=Z0(i)),fl}let pl;function J0(){const i=wt(),n=Uf();let o=!1;function s(){const g=i.navigator.userAgent.toLowerCase();return g.indexOf("safari")>=0&&g.indexOf("chrome")<0&&g.indexOf("android")<0}if(s()){const g=String(i.navigator.userAgent);if(g.includes("Version/")){const[f,x]=g.split("Version/")[1].split(" ")[0].split(".").map(v=>Number(v));o=f<16||f===16&&x<2}}const u=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),d=s(),p=d||u&&n.ios;return{isSafari:o||d,needPerspectiveFix:o,need3dFix:p,isWebView:u}}function eg(){return pl||(pl=J0()),pl}function tg(i){let{swiper:n,on:o,emit:s}=i;const u=wt();let d=null,p=null;const g=()=>{!n||n.destroyed||!n.initialized||(s("beforeResize"),s("resize"))},f=()=>{!n||n.destroyed||!n.initialized||(d=new ResizeObserver(y=>{p=u.requestAnimationFrame(()=>{const{width:k,height:b}=n;let z=k,I=b;y.forEach(B=>{let{contentBoxSize:M,contentRect:T,target:S}=B;S&&S!==n.el||(z=T?T.width:(M[0]||M).inlineSize,I=T?T.height:(M[0]||M).blockSize)}),(z!==k||I!==b)&&g()})}),d.observe(n.el))},x=()=>{p&&u.cancelAnimationFrame(p),d&&d.unobserve&&n.el&&(d.unobserve(n.el),d=null)},v=()=>{!n||n.destroyed||!n.initialized||s("orientationchange")};o("init",()=>{if(n.params.resizeObserver&&typeof u.ResizeObserver<"u"){f();return}u.addEventListener("resize",g),u.addEventListener("orientationchange",v)}),o("destroy",()=>{x(),u.removeEventListener("resize",g),u.removeEventListener("orientationchange",v)})}function ng(i){let{swiper:n,extendParams:o,on:s,emit:u}=i;const d=[],p=wt(),g=function(v,y){y===void 0&&(y={});const k=p.MutationObserver||p.WebkitMutationObserver,b=new k(z=>{if(n.__preventObserver__)return;if(z.length===1){u("observerUpdate",z[0]);return}const I=function(){u("observerUpdate",z[0])};p.requestAnimationFrame?p.requestAnimationFrame(I):p.setTimeout(I,0)});b.observe(v,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:n.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),d.push(b)},f=()=>{if(n.params.observer){if(n.params.observeParents){const v=Wf(n.hostEl);for(let y=0;y<v.length;y+=1)g(v[y])}g(n.hostEl,{childList:n.params.observeSlideChildren}),g(n.wrapperEl,{attributes:!1})}},x=()=>{d.forEach(v=>{v.disconnect()}),d.splice(0,d.length)};o({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",f),s("destroy",x)}var rg={on(i,n,o){const s=this;if(!s.eventsListeners||s.destroyed||typeof n!="function")return s;const u=o?"unshift":"push";return i.split(" ").forEach(d=>{s.eventsListeners[d]||(s.eventsListeners[d]=[]),s.eventsListeners[d][u](n)}),s},once(i,n,o){const s=this;if(!s.eventsListeners||s.destroyed||typeof n!="function")return s;function u(){s.off(i,u),u.__emitterProxy&&delete u.__emitterProxy;for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];n.apply(s,p)}return u.__emitterProxy=n,s.on(i,u,o)},onAny(i,n){const o=this;if(!o.eventsListeners||o.destroyed||typeof i!="function")return o;const s=n?"unshift":"push";return o.eventsAnyListeners.indexOf(i)<0&&o.eventsAnyListeners[s](i),o},offAny(i){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const o=n.eventsAnyListeners.indexOf(i);return o>=0&&n.eventsAnyListeners.splice(o,1),n},off(i,n){const o=this;return!o.eventsListeners||o.destroyed||!o.eventsListeners||i.split(" ").forEach(s=>{typeof n>"u"?o.eventsListeners[s]=[]:o.eventsListeners[s]&&o.eventsListeners[s].forEach((u,d)=>{(u===n||u.__emitterProxy&&u.__emitterProxy===n)&&o.eventsListeners[s].splice(d,1)})}),o},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let n,o,s;for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];return typeof d[0]=="string"||Array.isArray(d[0])?(n=d[0],o=d.slice(1,d.length),s=i):(n=d[0].events,o=d[0].data,s=d[0].context||i),o.unshift(s),(Array.isArray(n)?n:n.split(" ")).forEach(f=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(x=>{x.apply(s,[f,...o])}),i.eventsListeners&&i.eventsListeners[f]&&i.eventsListeners[f].forEach(x=>{x.apply(s,o)})}),i}};function ig(){const i=this;let n,o;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?n=i.params.width:n=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?o=i.params.height:o=s.clientHeight,!(n===0&&i.isHorizontal()||o===0&&i.isVertical())&&(n=n-parseInt(bn(s,"padding-left")||0,10)-parseInt(bn(s,"padding-right")||0,10),o=o-parseInt(bn(s,"padding-top")||0,10)-parseInt(bn(s,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(o)&&(o=0),Object.assign(i,{width:n,height:o,size:i.isHorizontal()?n:o}))}function og(){const i=this;function n(W,R){return parseFloat(W.getPropertyValue(i.getDirectionLabel(R))||0)}const o=i.params,{wrapperEl:s,slidesEl:u,size:d,rtlTranslate:p,wrongRTL:g}=i,f=i.virtual&&o.virtual.enabled,x=f?i.virtual.slides.length:i.slides.length,v=Ht(u,`.${i.params.slideClass}, swiper-slide`),y=f?i.virtual.slides.length:v.length;let k=[];const b=[],z=[];let I=o.slidesOffsetBefore;typeof I=="function"&&(I=o.slidesOffsetBefore.call(i));let B=o.slidesOffsetAfter;typeof B=="function"&&(B=o.slidesOffsetAfter.call(i));const M=i.snapGrid.length,T=i.slidesGrid.length;let S=o.spaceBetween,_=-I,N=0,A=0;if(typeof d>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*d:typeof S=="string"&&(S=parseFloat(S)),i.virtualSize=-S,v.forEach(W=>{p?W.style.marginLeft="":W.style.marginRight="",W.style.marginBottom="",W.style.marginTop=""}),o.centeredSlides&&o.cssMode&&(Ro(s,"--swiper-centered-offset-before",""),Ro(s,"--swiper-centered-offset-after",""));const Q=o.grid&&o.grid.rows>1&&i.grid;Q?i.grid.initSlides(v):i.grid&&i.grid.unsetSlides();let G;const H=o.slidesPerView==="auto"&&o.breakpoints&&Object.keys(o.breakpoints).filter(W=>typeof o.breakpoints[W].slidesPerView<"u").length>0;for(let W=0;W<y;W+=1){G=0;let R;if(v[W]&&(R=v[W]),Q&&i.grid.updateSlide(W,R,v),!(v[W]&&bn(R,"display")==="none")){if(o.slidesPerView==="auto"){H&&(v[W].style[i.getDirectionLabel("width")]="");const D=getComputedStyle(R),$=R.style.transform,U=R.style.webkitTransform;if($&&(R.style.transform="none"),U&&(R.style.webkitTransform="none"),o.roundLengths)G=i.isHorizontal()?Pl(R,"width"):Pl(R,"height");else{const re=n(D,"width"),me=n(D,"padding-left"),xe=n(D,"padding-right"),V=n(D,"margin-left"),Z=n(D,"margin-right"),X=D.getPropertyValue("box-sizing");if(X&&X==="border-box")G=re+V+Z;else{const{clientWidth:j,offsetWidth:F}=R;G=re+me+xe+V+Z+(F-j)}}$&&(R.style.transform=$),U&&(R.style.webkitTransform=U),o.roundLengths&&(G=Math.floor(G))}else G=(d-(o.slidesPerView-1)*S)/o.slidesPerView,o.roundLengths&&(G=Math.floor(G)),v[W]&&(v[W].style[i.getDirectionLabel("width")]=`${G}px`);v[W]&&(v[W].swiperSlideSize=G),z.push(G),o.centeredSlides?(_=_+G/2+N/2+S,N===0&&W!==0&&(_=_-d/2-S),W===0&&(_=_-d/2-S),Math.abs(_)<1/1e3&&(_=0),o.roundLengths&&(_=Math.floor(_)),A%o.slidesPerGroup===0&&k.push(_),b.push(_)):(o.roundLengths&&(_=Math.floor(_)),(A-Math.min(i.params.slidesPerGroupSkip,A))%i.params.slidesPerGroup===0&&k.push(_),b.push(_),_=_+G+S),i.virtualSize+=G+S,N=G,A+=1}}if(i.virtualSize=Math.max(i.virtualSize,d)+B,p&&g&&(o.effect==="slide"||o.effect==="coverflow")&&(s.style.width=`${i.virtualSize+S}px`),o.setWrapperSize&&(s.style[i.getDirectionLabel("width")]=`${i.virtualSize+S}px`),Q&&i.grid.updateWrapperSize(G,k),!o.centeredSlides){const W=[];for(let R=0;R<k.length;R+=1){let D=k[R];o.roundLengths&&(D=Math.floor(D)),k[R]<=i.virtualSize-d&&W.push(D)}k=W,Math.floor(i.virtualSize-d)-Math.floor(k[k.length-1])>1&&k.push(i.virtualSize-d)}if(f&&o.loop){const W=z[0]+S;if(o.slidesPerGroup>1){const R=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/o.slidesPerGroup),D=W*o.slidesPerGroup;for(let $=0;$<R;$+=1)k.push(k[k.length-1]+D)}for(let R=0;R<i.virtual.slidesBefore+i.virtual.slidesAfter;R+=1)o.slidesPerGroup===1&&k.push(k[k.length-1]+W),b.push(b[b.length-1]+W),i.virtualSize+=W}if(k.length===0&&(k=[0]),S!==0){const W=i.isHorizontal()&&p?"marginLeft":i.getDirectionLabel("marginRight");v.filter((R,D)=>!o.cssMode||o.loop?!0:D!==v.length-1).forEach(R=>{R.style[W]=`${S}px`})}if(o.centeredSlides&&o.centeredSlidesBounds){let W=0;z.forEach(D=>{W+=D+(S||0)}),W-=S;const R=W>d?W-d:0;k=k.map(D=>D<=0?-I:D>R?R+B:D)}if(o.centerInsufficientSlides){let W=0;z.forEach(D=>{W+=D+(S||0)}),W-=S;const R=(o.slidesOffsetBefore||0)+(o.slidesOffsetAfter||0);if(W+R<d){const D=(d-W-R)/2;k.forEach(($,U)=>{k[U]=$-D}),b.forEach(($,U)=>{b[U]=$+D})}}if(Object.assign(i,{slides:v,snapGrid:k,slidesGrid:b,slidesSizesGrid:z}),o.centeredSlides&&o.cssMode&&!o.centeredSlidesBounds){Ro(s,"--swiper-centered-offset-before",`${-k[0]}px`),Ro(s,"--swiper-centered-offset-after",`${i.size/2-z[z.length-1]/2}px`);const W=-i.snapGrid[0],R=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(D=>D+W),i.slidesGrid=i.slidesGrid.map(D=>D+R)}if(y!==x&&i.emit("slidesLengthChange"),k.length!==M&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),b.length!==T&&i.emit("slidesGridLengthChange"),o.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!f&&!o.cssMode&&(o.effect==="slide"||o.effect==="fade")){const W=`${o.containerModifierClass}backface-hidden`,R=i.el.classList.contains(W);y<=o.maxBackfaceHiddenSlides?R||i.el.classList.add(W):R&&i.el.classList.remove(W)}}function ag(i){const n=this,o=[],s=n.virtual&&n.params.virtual.enabled;let u=0,d;typeof i=="number"?n.setTransition(i):i===!0&&n.setTransition(n.params.speed);const p=g=>s?n.slides[n.getSlideIndexByData(g)]:n.slides[g];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(g=>{o.push(g)});else for(d=0;d<Math.ceil(n.params.slidesPerView);d+=1){const g=n.activeIndex+d;if(g>n.slides.length&&!s)break;o.push(p(g))}else o.push(p(n.activeIndex));for(d=0;d<o.length;d+=1)if(typeof o[d]<"u"){const g=o[d].offsetHeight;u=g>u?g:u}(u||u===0)&&(n.wrapperEl.style.height=`${u}px`)}function sg(){const i=this,n=i.slides,o=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<n.length;s+=1)n[s].swiperSlideOffset=(i.isHorizontal()?n[s].offsetLeft:n[s].offsetTop)-o-i.cssOverflowAdjustment()}const af=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function lg(i){i===void 0&&(i=this&&this.translate||0);const n=this,o=n.params,{slides:s,rtlTranslate:u,snapGrid:d}=n;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let p=-i;u&&(p=i),n.visibleSlidesIndexes=[],n.visibleSlides=[];let g=o.spaceBetween;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n.size:typeof g=="string"&&(g=parseFloat(g));for(let f=0;f<s.length;f+=1){const x=s[f];let v=x.swiperSlideOffset;o.cssMode&&o.centeredSlides&&(v-=s[0].swiperSlideOffset);const y=(p+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),k=(p-d[0]+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),b=-(p-v),z=b+n.slidesSizesGrid[f],I=b>=0&&b<=n.size-n.slidesSizesGrid[f],B=b>=0&&b<n.size-1||z>1&&z<=n.size||b<=0&&z>=n.size;B&&(n.visibleSlides.push(x),n.visibleSlidesIndexes.push(f)),af(x,B,o.slideVisibleClass),af(x,I,o.slideFullyVisibleClass),x.progress=u?-y:y,x.originalProgress=u?-k:k}}function ug(i){const n=this;if(typeof i>"u"){const v=n.rtlTranslate?-1:1;i=n&&n.translate&&n.translate*v||0}const o=n.params,s=n.maxTranslate()-n.minTranslate();let{progress:u,isBeginning:d,isEnd:p,progressLoop:g}=n;const f=d,x=p;if(s===0)u=0,d=!0,p=!0;else{u=(i-n.minTranslate())/s;const v=Math.abs(i-n.minTranslate())<1,y=Math.abs(i-n.maxTranslate())<1;d=v||u<=0,p=y||u>=1,v&&(u=0),y&&(u=1)}if(o.loop){const v=n.getSlideIndexByData(0),y=n.getSlideIndexByData(n.slides.length-1),k=n.slidesGrid[v],b=n.slidesGrid[y],z=n.slidesGrid[n.slidesGrid.length-1],I=Math.abs(i);I>=k?g=(I-k)/z:g=(I+z-b)/z,g>1&&(g-=1)}Object.assign(n,{progress:u,progressLoop:g,isBeginning:d,isEnd:p}),(o.watchSlidesProgress||o.centeredSlides&&o.autoHeight)&&n.updateSlidesProgress(i),d&&!f&&n.emit("reachBeginning toEdge"),p&&!x&&n.emit("reachEnd toEdge"),(f&&!d||x&&!p)&&n.emit("fromEdge"),n.emit("progress",u)}const ml=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function dg(){const i=this,{slides:n,params:o,slidesEl:s,activeIndex:u}=i,d=i.virtual&&o.virtual.enabled,p=i.grid&&o.grid&&o.grid.rows>1,g=y=>Ht(s,`.${o.slideClass}${y}, swiper-slide${y}`)[0];let f,x,v;if(d)if(o.loop){let y=u-i.virtual.slidesBefore;y<0&&(y=i.virtual.slides.length+y),y>=i.virtual.slides.length&&(y-=i.virtual.slides.length),f=g(`[data-swiper-slide-index="${y}"]`)}else f=g(`[data-swiper-slide-index="${u}"]`);else p?(f=n.filter(y=>y.column===u)[0],v=n.filter(y=>y.column===u+1)[0],x=n.filter(y=>y.column===u-1)[0]):f=n[u];f&&(p||(v=Q0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!v&&(v=n[0]),x=X0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!x===0&&(x=n[n.length-1]))),n.forEach(y=>{ml(y,y===f,o.slideActiveClass),ml(y,y===v,o.slideNextClass),ml(y,y===x,o.slidePrevClass)}),i.emitSlidesClasses()}const qo=(i,n)=>{if(!i||i.destroyed||!i.params)return;const o=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=n.closest(o());if(s){let u=s.querySelector(`.${i.params.lazyPreloaderClass}`);!u&&i.isElement&&(s.shadowRoot?u=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(u=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),u&&u.remove())})),u&&u.remove()}},hl=(i,n)=>{if(!i.slides[n])return;const o=i.slides[n].querySelector('[loading="lazy"]');o&&o.removeAttribute("loading")},_l=i=>{if(!i||i.destroyed||!i.params)return;let n=i.params.lazyPreloadPrevNext;const o=i.slides.length;if(!o||!n||n<0)return;n=Math.min(n,o);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),u=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const p=u,g=[p-n];g.push(...Array.from({length:n}).map((f,x)=>p+s+x)),i.slides.forEach((f,x)=>{g.includes(f.column)&&hl(i,x)});return}const d=u+s-1;if(i.params.rewind||i.params.loop)for(let p=u-n;p<=d+n;p+=1){const g=(p%o+o)%o;(g<u||g>d)&&hl(i,g)}else for(let p=Math.max(u-n,0);p<=Math.min(d+n,o-1);p+=1)p!==u&&(p>d||p<u)&&hl(i,p)};function cg(i){const{slidesGrid:n,params:o}=i,s=i.rtlTranslate?i.translate:-i.translate;let u;for(let d=0;d<n.length;d+=1)typeof n[d+1]<"u"?s>=n[d]&&s<n[d+1]-(n[d+1]-n[d])/2?u=d:s>=n[d]&&s<n[d+1]&&(u=d+1):s>=n[d]&&(u=d);return o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0),u}function fg(i){const n=this,o=n.rtlTranslate?n.translate:-n.translate,{snapGrid:s,params:u,activeIndex:d,realIndex:p,snapIndex:g}=n;let f=i,x;const v=b=>{let z=b-n.virtual.slidesBefore;return z<0&&(z=n.virtual.slides.length+z),z>=n.virtual.slides.length&&(z-=n.virtual.slides.length),z};if(typeof f>"u"&&(f=cg(n)),s.indexOf(o)>=0)x=s.indexOf(o);else{const b=Math.min(u.slidesPerGroupSkip,f);x=b+Math.floor((f-b)/u.slidesPerGroup)}if(x>=s.length&&(x=s.length-1),f===d&&!n.params.loop){x!==g&&(n.snapIndex=x,n.emit("snapIndexChange"));return}if(f===d&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=v(f);return}const y=n.grid&&u.grid&&u.grid.rows>1;let k;if(n.virtual&&u.virtual.enabled&&u.loop)k=v(f);else if(y){const b=n.slides.filter(I=>I.column===f)[0];let z=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(z)&&(z=Math.max(n.slides.indexOf(b),0)),k=Math.floor(z/u.grid.rows)}else if(n.slides[f]){const b=n.slides[f].getAttribute("data-swiper-slide-index");b?k=parseInt(b,10):k=f}else k=f;Object.assign(n,{previousSnapIndex:g,snapIndex:x,previousRealIndex:p,realIndex:k,previousIndex:d,activeIndex:f}),n.initialized&&_l(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(p!==k&&n.emit("realIndexChange"),n.emit("slideChange"))}function pg(i,n){const o=this,s=o.params;let u=i.closest(`.${s.slideClass}, swiper-slide`);!u&&o.isElement&&n&&n.length>1&&n.includes(i)&&[...n.slice(n.indexOf(i)+1,n.length)].forEach(g=>{!u&&g.matches&&g.matches(`.${s.slideClass}, swiper-slide`)&&(u=g)});let d=!1,p;if(u){for(let g=0;g<o.slides.length;g+=1)if(o.slides[g]===u){d=!0,p=g;break}}if(u&&d)o.clickedSlide=u,o.virtual&&o.params.virtual.enabled?o.clickedIndex=parseInt(u.getAttribute("data-swiper-slide-index"),10):o.clickedIndex=p;else{o.clickedSlide=void 0,o.clickedIndex=void 0;return}s.slideToClickedSlide&&o.clickedIndex!==void 0&&o.clickedIndex!==o.activeIndex&&o.slideToClickedSlide()}var mg={updateSize:ig,updateSlides:og,updateAutoHeight:ag,updateSlidesOffset:sg,updateSlidesProgress:lg,updateProgress:ug,updateSlidesClasses:dg,updateActiveIndex:fg,updateClickedSlide:pg};function hg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const n=this,{params:o,rtlTranslate:s,translate:u,wrapperEl:d}=n;if(o.virtualTranslate)return s?-u:u;if(o.cssMode)return u;let p=q0(d,i);return p+=n.cssOverflowAdjustment(),s&&(p=-p),p||0}function gg(i,n){const o=this,{rtlTranslate:s,params:u,wrapperEl:d,progress:p}=o;let g=0,f=0;const x=0;o.isHorizontal()?g=s?-i:i:f=i,u.roundLengths&&(g=Math.floor(g),f=Math.floor(f)),o.previousTranslate=o.translate,o.translate=o.isHorizontal()?g:f,u.cssMode?d[o.isHorizontal()?"scrollLeft":"scrollTop"]=o.isHorizontal()?-g:-f:u.virtualTranslate||(o.isHorizontal()?g-=o.cssOverflowAdjustment():f-=o.cssOverflowAdjustment(),d.style.transform=`translate3d(${g}px, ${f}px, ${x}px)`);let v;const y=o.maxTranslate()-o.minTranslate();y===0?v=0:v=(i-o.minTranslate())/y,v!==p&&o.updateProgress(i),o.emit("setTranslate",o.translate,n)}function vg(){return-this.snapGrid[0]}function yg(){return-this.snapGrid[this.snapGrid.length-1]}function xg(i,n,o,s,u){i===void 0&&(i=0),n===void 0&&(n=this.params.speed),o===void 0&&(o=!0),s===void 0&&(s=!0);const d=this,{params:p,wrapperEl:g}=d;if(d.animating&&p.preventInteractionOnTransition)return!1;const f=d.minTranslate(),x=d.maxTranslate();let v;if(s&&i>f?v=f:s&&i<x?v=x:v=i,d.updateProgress(v),p.cssMode){const y=d.isHorizontal();if(n===0)g[y?"scrollLeft":"scrollTop"]=-v;else{if(!d.support.smoothScroll)return Gf({swiper:d,targetPosition:-v,side:y?"left":"top"}),!0;g.scrollTo({[y?"left":"top"]:-v,behavior:"smooth"})}return!0}return n===0?(d.setTransition(0),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionEnd"))):(d.setTransition(n),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionStart")),d.animating||(d.animating=!0,d.onTranslateToWrapperTransitionEnd||(d.onTranslateToWrapperTransitionEnd=function(k){!d||d.destroyed||k.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onTranslateToWrapperTransitionEnd),d.onTranslateToWrapperTransitionEnd=null,delete d.onTranslateToWrapperTransitionEnd,d.animating=!1,o&&d.emit("transitionEnd"))}),d.wrapperEl.addEventListener("transitionend",d.onTranslateToWrapperTransitionEnd))),!0}var wg={getTranslate:hg,setTranslate:gg,minTranslate:vg,maxTranslate:yg,translateTo:xg};function Sg(i,n){const o=this;o.params.cssMode||(o.wrapperEl.style.transitionDuration=`${i}ms`,o.wrapperEl.style.transitionDelay=i===0?"0ms":""),o.emit("setTransition",i,n)}function Yf(i){let{swiper:n,runCallbacks:o,direction:s,step:u}=i;const{activeIndex:d,previousIndex:p}=n;let g=s;if(g||(d>p?g="next":d<p?g="prev":g="reset"),n.emit(`transition${u}`),o&&d!==p){if(g==="reset"){n.emit(`slideResetTransition${u}`);return}n.emit(`slideChangeTransition${u}`),g==="next"?n.emit(`slideNextTransition${u}`):n.emit(`slidePrevTransition${u}`)}}function kg(i,n){i===void 0&&(i=!0);const o=this,{params:s}=o;s.cssMode||(s.autoHeight&&o.updateAutoHeight(),Yf({swiper:o,runCallbacks:i,direction:n,step:"Start"}))}function bg(i,n){i===void 0&&(i=!0);const o=this,{params:s}=o;o.animating=!1,!s.cssMode&&(o.setTransition(0),Yf({swiper:o,runCallbacks:i,direction:n,step:"End"}))}var Eg={setTransition:Sg,transitionStart:kg,transitionEnd:bg};function Tg(i,n,o,s,u){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const d=this;let p=i;p<0&&(p=0);const{params:g,snapGrid:f,slidesGrid:x,previousIndex:v,activeIndex:y,rtlTranslate:k,wrapperEl:b,enabled:z}=d;if(!z&&!s&&!u||d.destroyed||d.animating&&g.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=d.params.speed);const I=Math.min(d.params.slidesPerGroupSkip,p);let B=I+Math.floor((p-I)/d.params.slidesPerGroup);B>=f.length&&(B=f.length-1);const M=-f[B];if(g.normalizeSlideIndex)for(let N=0;N<x.length;N+=1){const A=-Math.floor(M*100),Q=Math.floor(x[N]*100),G=Math.floor(x[N+1]*100);typeof x[N+1]<"u"?A>=Q&&A<G-(G-Q)/2?p=N:A>=Q&&A<G&&(p=N+1):A>=Q&&(p=N)}if(d.initialized&&p!==y&&(!d.allowSlideNext&&(k?M>d.translate&&M>d.minTranslate():M<d.translate&&M<d.minTranslate())||!d.allowSlidePrev&&M>d.translate&&M>d.maxTranslate()&&(y||0)!==p))return!1;p!==(v||0)&&o&&d.emit("beforeSlideChangeStart"),d.updateProgress(M);let T;p>y?T="next":p<y?T="prev":T="reset";const S=d.virtual&&d.params.virtual.enabled;if(!(S&&u)&&(k&&-M===d.translate||!k&&M===d.translate))return d.updateActiveIndex(p),g.autoHeight&&d.updateAutoHeight(),d.updateSlidesClasses(),g.effect!=="slide"&&d.setTranslate(M),T!=="reset"&&(d.transitionStart(o,T),d.transitionEnd(o,T)),!1;if(g.cssMode){const N=d.isHorizontal(),A=k?M:-M;if(n===0)S&&(d.wrapperEl.style.scrollSnapType="none",d._immediateVirtual=!0),S&&!d._cssModeVirtualInitialSet&&d.params.initialSlide>0?(d._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[N?"scrollLeft":"scrollTop"]=A})):b[N?"scrollLeft":"scrollTop"]=A,S&&requestAnimationFrame(()=>{d.wrapperEl.style.scrollSnapType="",d._immediateVirtual=!1});else{if(!d.support.smoothScroll)return Gf({swiper:d,targetPosition:A,side:N?"left":"top"}),!0;b.scrollTo({[N?"left":"top"]:A,behavior:"smooth"})}return!0}return d.setTransition(n),d.setTranslate(M),d.updateActiveIndex(p),d.updateSlidesClasses(),d.emit("beforeTransitionStart",n,s),d.transitionStart(o,T),n===0?d.transitionEnd(o,T):d.animating||(d.animating=!0,d.onSlideToWrapperTransitionEnd||(d.onSlideToWrapperTransitionEnd=function(A){!d||d.destroyed||A.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onSlideToWrapperTransitionEnd),d.onSlideToWrapperTransitionEnd=null,delete d.onSlideToWrapperTransitionEnd,d.transitionEnd(o,T))}),d.wrapperEl.addEventListener("transitionend",d.onSlideToWrapperTransitionEnd)),!0}function Cg(i,n,o,s){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const u=this;if(u.destroyed)return;typeof n>"u"&&(n=u.params.speed);const d=u.grid&&u.params.grid&&u.params.grid.rows>1;let p=i;if(u.params.loop)if(u.virtual&&u.params.virtual.enabled)p=p+u.virtual.slidesBefore;else{let g;if(d){const k=p*u.params.grid.rows;g=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else g=u.getSlideIndexByData(p);const f=d?Math.ceil(u.slides.length/u.params.grid.rows):u.slides.length,{centeredSlides:x}=u.params;let v=u.params.slidesPerView;v==="auto"?v=u.slidesPerViewDynamic():(v=Math.ceil(parseFloat(u.params.slidesPerView,10)),x&&v%2===0&&(v=v+1));let y=f-g<v;if(x&&(y=y||g<Math.ceil(v/2)),s&&x&&u.params.slidesPerView!=="auto"&&!d&&(y=!1),y){const k=x?g<u.activeIndex?"prev":"next":g-u.activeIndex-1<u.params.slidesPerView?"next":"prev";u.loopFix({direction:k,slideTo:!0,activeSlideIndex:k==="next"?g+1:g-f+1,slideRealIndex:k==="next"?u.realIndex:void 0})}if(d){const k=p*u.params.grid.rows;p=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else p=u.getSlideIndexByData(p)}return requestAnimationFrame(()=>{u.slideTo(p,n,o,s)}),u}function jg(i,n,o){n===void 0&&(n=!0);const s=this,{enabled:u,params:d,animating:p}=s;if(!u||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);let g=d.slidesPerGroup;d.slidesPerView==="auto"&&d.slidesPerGroup===1&&d.slidesPerGroupAuto&&(g=Math.max(s.slidesPerViewDynamic("current",!0),1));const f=s.activeIndex<d.slidesPerGroupSkip?1:g,x=s.virtual&&d.virtual.enabled;if(d.loop){if(p&&!x&&d.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&d.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+f,i,n,o)}),!0}return d.rewind&&s.isEnd?s.slideTo(0,i,n,o):s.slideTo(s.activeIndex+f,i,n,o)}function zg(i,n,o){n===void 0&&(n=!0);const s=this,{params:u,snapGrid:d,slidesGrid:p,rtlTranslate:g,enabled:f,animating:x}=s;if(!f||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);const v=s.virtual&&u.virtual.enabled;if(u.loop){if(x&&!v&&u.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const y=g?s.translate:-s.translate;function k(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const b=k(y),z=d.map(M=>k(M));let I=d[z.indexOf(b)-1];if(typeof I>"u"&&u.cssMode){let M;d.forEach((T,S)=>{b>=T&&(M=S)}),typeof M<"u"&&(I=d[M>0?M-1:M])}let B=0;if(typeof I<"u"&&(B=p.indexOf(I),B<0&&(B=s.activeIndex-1),u.slidesPerView==="auto"&&u.slidesPerGroup===1&&u.slidesPerGroupAuto&&(B=B-s.slidesPerViewDynamic("previous",!0)+1,B=Math.max(B,0))),u.rewind&&s.isBeginning){const M=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(M,i,n,o)}else if(u.loop&&s.activeIndex===0&&u.cssMode)return requestAnimationFrame(()=>{s.slideTo(B,i,n,o)}),!0;return s.slideTo(B,i,n,o)}function Pg(i,n,o){n===void 0&&(n=!0);const s=this;if(!s.destroyed)return typeof i>"u"&&(i=s.params.speed),s.slideTo(s.activeIndex,i,n,o)}function _g(i,n,o,s){n===void 0&&(n=!0),s===void 0&&(s=.5);const u=this;if(u.destroyed)return;typeof i>"u"&&(i=u.params.speed);let d=u.activeIndex;const p=Math.min(u.params.slidesPerGroupSkip,d),g=p+Math.floor((d-p)/u.params.slidesPerGroup),f=u.rtlTranslate?u.translate:-u.translate;if(f>=u.snapGrid[g]){const x=u.snapGrid[g],v=u.snapGrid[g+1];f-x>(v-x)*s&&(d+=u.params.slidesPerGroup)}else{const x=u.snapGrid[g-1],v=u.snapGrid[g];f-x<=(v-x)*s&&(d-=u.params.slidesPerGroup)}return d=Math.max(d,0),d=Math.min(d,u.slidesGrid.length-1),u.slideTo(d,i,n,o)}function Mg(){const i=this;if(i.destroyed)return;const{params:n,slidesEl:o}=i,s=n.slidesPerView==="auto"?i.slidesPerViewDynamic():n.slidesPerView;let u=i.clickedIndex,d;const p=i.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(i.animating)return;d=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?u<i.loopedSlides-s/2||u>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),u=i.getSlideIndex(Ht(o,`${p}[data-swiper-slide-index="${d}"]`)[0]),zl(()=>{i.slideTo(u)})):i.slideTo(u):u>i.slides.length-s?(i.loopFix(),u=i.getSlideIndex(Ht(o,`${p}[data-swiper-slide-index="${d}"]`)[0]),zl(()=>{i.slideTo(u)})):i.slideTo(u)}else i.slideTo(u)}var Lg={slideTo:Tg,slideToLoop:Cg,slideNext:jg,slidePrev:zg,slideReset:Pg,slideToClosest:_g,slideToClickedSlide:Mg};function Og(i){const n=this,{params:o,slidesEl:s}=n;if(!o.loop||n.virtual&&n.params.virtual.enabled)return;const u=()=>{Ht(s,`.${o.slideClass}, swiper-slide`).forEach((y,k)=>{y.setAttribute("data-swiper-slide-index",k)})},d=n.grid&&o.grid&&o.grid.rows>1,p=o.slidesPerGroup*(d?o.grid.rows:1),g=n.slides.length%p!==0,f=d&&n.slides.length%o.grid.rows!==0,x=v=>{for(let y=0;y<v;y+=1){const k=n.isElement?Jo("swiper-slide",[o.slideBlankClass]):Jo("div",[o.slideClass,o.slideBlankClass]);n.slidesEl.append(k)}};if(g){if(o.loopAddBlankSlides){const v=p-n.slides.length%p;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else if(f){if(o.loopAddBlankSlides){const v=o.grid.rows-n.slides.length%o.grid.rows;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else u();n.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next"})}function Ig(i){let{slideRealIndex:n,slideTo:o=!0,direction:s,setTranslate:u,activeSlideIndex:d,byController:p,byMousewheel:g}=i===void 0?{}:i;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:x,allowSlidePrev:v,allowSlideNext:y,slidesEl:k,params:b}=f,{centeredSlides:z}=b;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&b.virtual.enabled){o&&(!b.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):b.centeredSlides&&f.snapIndex<b.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=v,f.allowSlideNext=y,f.emit("loopFix");return}let I=b.slidesPerView;I==="auto"?I=f.slidesPerViewDynamic():(I=Math.ceil(parseFloat(b.slidesPerView,10)),z&&I%2===0&&(I=I+1));const B=b.slidesPerGroupAuto?I:b.slidesPerGroup;let M=B;M%B!==0&&(M+=B-M%B),M+=b.loopAdditionalSlides,f.loopedSlides=M;const T=f.grid&&b.grid&&b.grid.rows>1;x.length<I+M?Zo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&b.grid.fill==="row"&&Zo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],_=[];let N=f.activeIndex;typeof d>"u"?d=f.getSlideIndex(x.filter($=>$.classList.contains(b.slideActiveClass))[0]):N=d;const A=s==="next"||!s,Q=s==="prev"||!s;let G=0,H=0;const W=T?Math.ceil(x.length/b.grid.rows):x.length,D=(T?x[d].column:d)+(z&&typeof u>"u"?-I/2+.5:0);if(D<M){G=Math.max(M-D,B);for(let $=0;$<M-D;$+=1){const U=$-Math.floor($/W)*W;if(T){const re=W-U-1;for(let me=x.length-1;me>=0;me-=1)x[me].column===re&&S.push(me)}else S.push(W-U-1)}}else if(D+I>W-M){H=Math.max(D-(W-M*2),B);for(let $=0;$<H;$+=1){const U=$-Math.floor($/W)*W;T?x.forEach((re,me)=>{re.column===U&&_.push(me)}):_.push(U)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),Q&&S.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.prepend(x[$]),x[$].swiperLoopMoveDOM=!1}),A&&_.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.append(x[$]),x[$].swiperLoopMoveDOM=!1}),f.recalcSlides(),b.slidesPerView==="auto"?f.updateSlides():T&&(S.length>0&&Q||_.length>0&&A)&&f.slides.forEach(($,U)=>{f.grid.updateSlide(U,$,f.slides)}),b.watchSlidesProgress&&f.updateSlidesOffset(),o){if(S.length>0&&Q){if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N+G]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N+Math.ceil(G),0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else if(u){const $=T?S.length/b.grid.rows:S.length;f.slideTo(f.activeIndex+$,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(_.length>0&&A)if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N-H]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N-H,0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else{const $=T?_.length/b.grid.rows:_.length;f.slideTo(f.activeIndex-$,0,!1,!0)}}if(f.allowSlidePrev=v,f.allowSlideNext=y,f.controller&&f.controller.control&&!p){const $={slideRealIndex:n,direction:s,setTranslate:u,activeSlideIndex:d,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...$,slideTo:U.params.slidesPerView===b.slidesPerView?o:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...$,slideTo:f.controller.control.params.slidesPerView===b.slidesPerView?o:!1})}f.emit("loopFix")}function Ng(){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(u=>{const d=typeof u.swiperSlideIndex>"u"?u.getAttribute("data-swiper-slide-index")*1:u.swiperSlideIndex;s[d]=u}),i.slides.forEach(u=>{u.removeAttribute("data-swiper-slide-index")}),s.forEach(u=>{o.append(u)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Ag={loopCreate:Og,loopFix:Ig,loopDestroy:Ng};function Dg(i){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const o=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),o.style.cursor="move",o.style.cursor=i?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function Rg(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Fg={setGrabCursor:Dg,unsetGrabCursor:Rg};function Bg(i,n){n===void 0&&(n=this);function o(s){if(!s||s===tn()||s===wt())return null;s.assignedSlot&&(s=s.assignedSlot);const u=s.closest(i);return!u&&!s.getRootNode?null:u||o(s.getRootNode().host)}return o(n)}function sf(i,n,o){const s=wt(),{params:u}=i,d=u.edgeSwipeDetection,p=u.edgeSwipeThreshold;return d&&(o<=p||o>=s.innerWidth-p)?d==="prevent"?(n.preventDefault(),!0):!1:!0}function $g(i){const n=this,o=tn();let s=i;s.originalEvent&&(s=s.originalEvent);const u=n.touchEventsData;if(s.type==="pointerdown"){if(u.pointerId!==null&&u.pointerId!==s.pointerId)return;u.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(u.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){sf(n,s,s.targetTouches[0].pageX);return}const{params:d,touches:p,enabled:g}=n;if(!g||!d.simulateTouch&&s.pointerType==="mouse"||n.animating&&d.preventInteractionOnTransition)return;!n.animating&&d.cssMode&&d.loop&&n.loopFix();let f=s.target;if(d.touchEventsTarget==="wrapper"&&!Y0(f,n.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||u.isTouched&&u.isMoved)return;const x=!!d.noSwipingClass&&d.noSwipingClass!=="",v=s.composedPath?s.composedPath():s.path;x&&s.target&&s.target.shadowRoot&&v&&(f=v[0]);const y=d.noSwipingSelector?d.noSwipingSelector:`.${d.noSwipingClass}`,k=!!(s.target&&s.target.shadowRoot);if(d.noSwiping&&(k?Bg(y,f):f.closest(y))){n.allowClick=!0;return}if(d.swipeHandler&&!f.closest(d.swipeHandler))return;p.currentX=s.pageX,p.currentY=s.pageY;const b=p.currentX,z=p.currentY;if(!sf(n,s,b))return;Object.assign(u,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),p.startX=b,p.startY=z,u.touchStartTime=Bn(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,d.threshold>0&&(u.allowThresholdMove=!1);let I=!0;f.matches(u.focusableElements)&&(I=!1,f.nodeName==="SELECT"&&(u.isTouched=!1)),o.activeElement&&o.activeElement.matches(u.focusableElements)&&o.activeElement!==f&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!f.matches(u.focusableElements))&&o.activeElement.blur();const B=I&&n.allowTouchMove&&d.touchStartPreventDefault;(d.touchStartForcePreventDefault||B)&&!f.isContentEditable&&s.preventDefault(),d.freeMode&&d.freeMode.enabled&&n.freeMode&&n.animating&&!d.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",s)}function Vg(i){const n=tn(),o=this,s=o.touchEventsData,{params:u,touches:d,rtlTranslate:p,enabled:g}=o;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(s.touchId!==null||f.pointerId!==s.pointerId))return;let x;if(f.type==="touchmove"){if(x=[...f.changedTouches].filter(A=>A.identifier===s.touchId)[0],!x||x.identifier!==s.touchId)return}else x=f;if(!s.isTouched){s.startMoving&&s.isScrolling&&o.emit("touchMoveOpposite",f);return}const v=x.pageX,y=x.pageY;if(f.preventedByNestedSwiper){d.startX=v,d.startY=y;return}if(!o.allowTouchMove){f.target.matches(s.focusableElements)||(o.allowClick=!1),s.isTouched&&(Object.assign(d,{startX:v,startY:y,currentX:v,currentY:y}),s.touchStartTime=Bn());return}if(u.touchReleaseOnEdges&&!u.loop){if(o.isVertical()){if(y<d.startY&&o.translate<=o.maxTranslate()||y>d.startY&&o.translate>=o.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(v<d.startX&&o.translate<=o.maxTranslate()||v>d.startX&&o.translate>=o.minTranslate())return}if(n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==f.target&&f.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&f.target===n.activeElement&&f.target.matches(s.focusableElements)){s.isMoved=!0,o.allowClick=!1;return}s.allowTouchCallbacks&&o.emit("touchMove",f),d.previousX=d.currentX,d.previousY=d.currentY,d.currentX=v,d.currentY=y;const k=d.currentX-d.startX,b=d.currentY-d.startY;if(o.params.threshold&&Math.sqrt(k**2+b**2)<o.params.threshold)return;if(typeof s.isScrolling>"u"){let A;o.isHorizontal()&&d.currentY===d.startY||o.isVertical()&&d.currentX===d.startX?s.isScrolling=!1:k*k+b*b>=25&&(A=Math.atan2(Math.abs(b),Math.abs(k))*180/Math.PI,s.isScrolling=o.isHorizontal()?A>u.touchAngle:90-A>u.touchAngle)}if(s.isScrolling&&o.emit("touchMoveOpposite",f),typeof s.startMoving>"u"&&(d.currentX!==d.startX||d.currentY!==d.startY)&&(s.startMoving=!0),s.isScrolling||f.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;o.allowClick=!1,!u.cssMode&&f.cancelable&&f.preventDefault(),u.touchMoveStopPropagation&&!u.nested&&f.stopPropagation();let z=o.isHorizontal()?k:b,I=o.isHorizontal()?d.currentX-d.previousX:d.currentY-d.previousY;u.oneWayMovement&&(z=Math.abs(z)*(p?1:-1),I=Math.abs(I)*(p?1:-1)),d.diff=z,z*=u.touchRatio,p&&(z=-z,I=-I);const B=o.touchesDirection;o.swipeDirection=z>0?"prev":"next",o.touchesDirection=I>0?"prev":"next";const M=o.params.loop&&!u.cssMode,T=o.touchesDirection==="next"&&o.allowSlideNext||o.touchesDirection==="prev"&&o.allowSlidePrev;if(!s.isMoved){if(M&&T&&o.loopFix({direction:o.swipeDirection}),s.startTranslate=o.getTranslate(),o.setTransition(0),o.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});o.wrapperEl.dispatchEvent(A)}s.allowMomentumBounce=!1,u.grabCursor&&(o.allowSlideNext===!0||o.allowSlidePrev===!0)&&o.setGrabCursor(!0),o.emit("sliderFirstMove",f)}let S;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&B!==o.touchesDirection&&M&&T&&Math.abs(z)>=1){Object.assign(d,{startX:v,startY:y,currentX:v,currentY:y,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}o.emit("sliderMove",f),s.isMoved=!0,s.currentTranslate=z+s.startTranslate;let _=!0,N=u.resistanceRatio;if(u.touchReleaseOnEdges&&(N=0),z>0?(M&&T&&!S&&s.allowThresholdMove&&s.currentTranslate>(u.centeredSlides?o.minTranslate()-o.slidesSizesGrid[o.activeIndex+1]-(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.activeIndex+1]+o.params.spaceBetween:0)-o.params.spaceBetween:o.minTranslate())&&o.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>o.minTranslate()&&(_=!1,u.resistance&&(s.currentTranslate=o.minTranslate()-1+(-o.minTranslate()+s.startTranslate+z)**N))):z<0&&(M&&T&&!S&&s.allowThresholdMove&&s.currentTranslate<(u.centeredSlides?o.maxTranslate()+o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween+(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween:0):o.maxTranslate())&&o.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:o.slides.length-(u.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(u.slidesPerView,10)))}),s.currentTranslate<o.maxTranslate()&&(_=!1,u.resistance&&(s.currentTranslate=o.maxTranslate()+1-(o.maxTranslate()-s.startTranslate-z)**N))),_&&(f.preventedByNestedSwiper=!0),!o.allowSlideNext&&o.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!o.allowSlidePrev&&o.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!o.allowSlidePrev&&!o.allowSlideNext&&(s.currentTranslate=s.startTranslate),u.threshold>0)if(Math.abs(z)>u.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,d.startX=d.currentX,d.startY=d.currentY,s.currentTranslate=s.startTranslate,d.diff=o.isHorizontal()?d.currentX-d.startX:d.currentY-d.startY;return}}else{s.currentTranslate=s.startTranslate;return}!u.followFinger||u.cssMode||((u.freeMode&&u.freeMode.enabled&&o.freeMode||u.watchSlidesProgress)&&(o.updateActiveIndex(),o.updateSlidesClasses()),u.freeMode&&u.freeMode.enabled&&o.freeMode&&o.freeMode.onTouchMove(),o.updateProgress(s.currentTranslate),o.setTranslate(s.currentTranslate))}function Hg(i){const n=this,o=n.touchEventsData;let s=i;s.originalEvent&&(s=s.originalEvent);let u;if(s.type==="touchend"||s.type==="touchcancel"){if(u=[...s.changedTouches].filter(N=>N.identifier===o.touchId)[0],!u||u.identifier!==o.touchId)return}else{if(o.touchId!==null||s.pointerId!==o.pointerId)return;u=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(n.browser.isSafari||n.browser.isWebView)))return;o.pointerId=null,o.touchId=null;const{params:p,touches:g,rtlTranslate:f,slidesGrid:x,enabled:v}=n;if(!v||!p.simulateTouch&&s.pointerType==="mouse")return;if(o.allowTouchCallbacks&&n.emit("touchEnd",s),o.allowTouchCallbacks=!1,!o.isTouched){o.isMoved&&p.grabCursor&&n.setGrabCursor(!1),o.isMoved=!1,o.startMoving=!1;return}p.grabCursor&&o.isMoved&&o.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const y=Bn(),k=y-o.touchStartTime;if(n.allowClick){const N=s.path||s.composedPath&&s.composedPath();n.updateClickedSlide(N&&N[0]||s.target,N),n.emit("tap click",s),k<300&&y-o.lastClickTime<300&&n.emit("doubleTap doubleClick",s)}if(o.lastClickTime=Bn(),zl(()=>{n.destroyed||(n.allowClick=!0)}),!o.isTouched||!o.isMoved||!n.swipeDirection||g.diff===0&&!o.loopSwapReset||o.currentTranslate===o.startTranslate&&!o.loopSwapReset){o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;return}o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;let b;if(p.followFinger?b=f?n.translate:-n.translate:b=-o.currentTranslate,p.cssMode)return;if(p.freeMode&&p.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:b});return}const z=b>=-n.maxTranslate()&&!n.params.loop;let I=0,B=n.slidesSizesGrid[0];for(let N=0;N<x.length;N+=N<p.slidesPerGroupSkip?1:p.slidesPerGroup){const A=N<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;typeof x[N+A]<"u"?(z||b>=x[N]&&b<x[N+A])&&(I=N,B=x[N+A]-x[N]):(z||b>=x[N])&&(I=N,B=x[x.length-1]-x[x.length-2])}let M=null,T=null;p.rewind&&(n.isBeginning?T=p.virtual&&p.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(M=0));const S=(b-x[I])/B,_=I<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;if(k>p.longSwipesMs){if(!p.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(S>=p.longSwipesRatio?n.slideTo(p.rewind&&n.isEnd?M:I+_):n.slideTo(I)),n.swipeDirection==="prev"&&(S>1-p.longSwipesRatio?n.slideTo(I+_):T!==null&&S<0&&Math.abs(S)>p.longSwipesRatio?n.slideTo(T):n.slideTo(I))}else{if(!p.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(s.target===n.navigation.nextEl||s.target===n.navigation.prevEl)?s.target===n.navigation.nextEl?n.slideTo(I+_):n.slideTo(I):(n.swipeDirection==="next"&&n.slideTo(M!==null?M:I+_),n.swipeDirection==="prev"&&n.slideTo(T!==null?T:I))}}function lf(){const i=this,{params:n,el:o}=i;if(o&&o.offsetWidth===0)return;n.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:u,snapGrid:d}=i,p=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const g=p&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!g?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!p?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=u,i.allowSlideNext=s,i.params.watchOverflow&&d!==i.snapGrid&&i.checkOverflow()}function Gg(i){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&i.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Wg(){const i=this,{wrapperEl:n,rtlTranslate:o,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-n.scrollLeft:i.translate=-n.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let u;const d=i.maxTranslate()-i.minTranslate();d===0?u=0:u=(i.translate-i.minTranslate())/d,u!==i.progress&&i.updateProgress(o?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function qg(i){const n=this;qo(n,i.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function Ug(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Xf=(i,n)=>{const o=tn(),{params:s,el:u,wrapperEl:d,device:p}=i,g=!!s.nested,f=n==="on"?"addEventListener":"removeEventListener",x=n;!u||typeof u=="string"||(o[f]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:g}),u[f]("touchstart",i.onTouchStart,{passive:!1}),u[f]("pointerdown",i.onTouchStart,{passive:!1}),o[f]("touchmove",i.onTouchMove,{passive:!1,capture:g}),o[f]("pointermove",i.onTouchMove,{passive:!1,capture:g}),o[f]("touchend",i.onTouchEnd,{passive:!0}),o[f]("pointerup",i.onTouchEnd,{passive:!0}),o[f]("pointercancel",i.onTouchEnd,{passive:!0}),o[f]("touchcancel",i.onTouchEnd,{passive:!0}),o[f]("pointerout",i.onTouchEnd,{passive:!0}),o[f]("pointerleave",i.onTouchEnd,{passive:!0}),o[f]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&u[f]("click",i.onClick,!0),s.cssMode&&d[f]("scroll",i.onScroll),s.updateOnWindowResize?i[x](p.ios||p.android?"resize orientationchange observerUpdate":"resize observerUpdate",lf,!0):i[x]("observerUpdate",lf,!0),u[f]("load",i.onLoad,{capture:!0}))};function Yg(){const i=this,{params:n}=i;i.onTouchStart=$g.bind(i),i.onTouchMove=Vg.bind(i),i.onTouchEnd=Hg.bind(i),i.onDocumentTouchStart=Ug.bind(i),n.cssMode&&(i.onScroll=Wg.bind(i)),i.onClick=Gg.bind(i),i.onLoad=qg.bind(i),Xf(i,"on")}function Xg(){Xf(this,"off")}var Qg={attachEvents:Yg,detachEvents:Xg};const uf=(i,n)=>i.grid&&n.grid&&n.grid.rows>1;function Kg(){const i=this,{realIndex:n,initialized:o,params:s,el:u}=i,d=s.breakpoints;if(!d||d&&Object.keys(d).length===0)return;const p=i.getBreakpoint(d,i.params.breakpointsBase,i.el);if(!p||i.currentBreakpoint===p)return;const f=(p in d?d[p]:void 0)||i.originalParams,x=uf(i,s),v=uf(i,f),y=i.params.grabCursor,k=f.grabCursor,b=s.enabled;x&&!v?(u.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!x&&v&&(u.classList.add(`${s.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&s.grid.fill==="column")&&u.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),y&&!k?i.unsetGrabCursor():!y&&k&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(S=>{if(typeof f[S]>"u")return;const _=s[S]&&s[S].enabled,N=f[S]&&f[S].enabled;_&&!N&&i[S].disable(),!_&&N&&i[S].enable()});const z=f.direction&&f.direction!==s.direction,I=s.loop&&(f.slidesPerView!==s.slidesPerView||z),B=s.loop;z&&o&&i.changeDirection(),xt(i.params,f);const M=i.params.enabled,T=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),b&&!M?i.disable():!b&&M&&i.enable(),i.currentBreakpoint=p,i.emit("_beforeBreakpoint",f),o&&(I?(i.loopDestroy(),i.loopCreate(n),i.updateSlides()):!B&&T?(i.loopCreate(n),i.updateSlides()):B&&!T&&i.loopDestroy()),i.emit("breakpoint",f)}function Zg(i,n,o){if(n===void 0&&(n="window"),!i||n==="container"&&!o)return;let s=!1;const u=wt(),d=n==="window"?u.innerHeight:o.clientHeight,p=Object.keys(i).map(g=>{if(typeof g=="string"&&g.indexOf("@")===0){const f=parseFloat(g.substr(1));return{value:d*f,point:g}}return{value:g,point:g}});p.sort((g,f)=>parseInt(g.value,10)-parseInt(f.value,10));for(let g=0;g<p.length;g+=1){const{point:f,value:x}=p[g];n==="window"?u.matchMedia(`(min-width: ${x}px)`).matches&&(s=f):x<=o.clientWidth&&(s=f)}return s||"max"}var Jg={setBreakpoint:Kg,getBreakpoint:Zg};function ev(i,n){const o=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(u=>{s[u]&&o.push(n+u)}):typeof s=="string"&&o.push(n+s)}),o}function tv(){const i=this,{classNames:n,params:o,rtl:s,el:u,device:d}=i,p=ev(["initialized",o.direction,{"free-mode":i.params.freeMode&&o.freeMode.enabled},{autoheight:o.autoHeight},{rtl:s},{grid:o.grid&&o.grid.rows>1},{"grid-column":o.grid&&o.grid.rows>1&&o.grid.fill==="column"},{android:d.android},{ios:d.ios},{"css-mode":o.cssMode},{centered:o.cssMode&&o.centeredSlides},{"watch-progress":o.watchSlidesProgress}],o.containerModifierClass);n.push(...p),u.classList.add(...n),i.emitContainerClasses()}function nv(){const i=this,{el:n,classNames:o}=i;!n||typeof n=="string"||(n.classList.remove(...o),i.emitContainerClasses())}var rv={addClasses:tv,removeClasses:nv};function iv(){const i=this,{isLocked:n,params:o}=i,{slidesOffsetBefore:s}=o;if(s){const u=i.slides.length-1,d=i.slidesGrid[u]+i.slidesSizesGrid[u]+s*2;i.isLocked=i.size>d}else i.isLocked=i.snapGrid.length===1;o.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),o.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),n&&n!==i.isLocked&&(i.isEnd=!1),n!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var ov={checkOverflow:iv},Ml={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function av(i,n){return function(s){s===void 0&&(s={});const u=Object.keys(s)[0],d=s[u];if(typeof d!="object"||d===null){xt(n,s);return}if(i[u]===!0&&(i[u]={enabled:!0}),u==="navigation"&&i[u]&&i[u].enabled&&!i[u].prevEl&&!i[u].nextEl&&(i[u].auto=!0),["pagination","scrollbar"].indexOf(u)>=0&&i[u]&&i[u].enabled&&!i[u].el&&(i[u].auto=!0),!(u in i&&"enabled"in d)){xt(n,s);return}typeof i[u]=="object"&&!("enabled"in i[u])&&(i[u].enabled=!0),i[u]||(i[u]={enabled:!1}),xt(n,s)}}const gl={eventsEmitter:rg,update:mg,translate:wg,transition:Eg,slide:Lg,loop:Ag,grabCursor:Fg,events:Qg,breakpoints:Jg,checkOverflow:ov,classes:rv},vl={};let Bl=class Jt{constructor(){let n,o;for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];u.length===1&&u[0].constructor&&Object.prototype.toString.call(u[0]).slice(8,-1)==="Object"?o=u[0]:[n,o]=u,o||(o={}),o=xt({},o),n&&!o.el&&(o.el=n);const p=tn();if(o.el&&typeof o.el=="string"&&p.querySelectorAll(o.el).length>1){const v=[];return p.querySelectorAll(o.el).forEach(y=>{const k=xt({},o,{el:y});v.push(new Jt(k))}),v}const g=this;g.__swiper__=!0,g.support=qf(),g.device=Uf({userAgent:o.userAgent}),g.browser=eg(),g.eventsListeners={},g.eventsAnyListeners=[],g.modules=[...g.__modules__],o.modules&&Array.isArray(o.modules)&&g.modules.push(...o.modules);const f={};g.modules.forEach(v=>{v({params:o,swiper:g,extendParams:av(o,f),on:g.on.bind(g),once:g.once.bind(g),off:g.off.bind(g),emit:g.emit.bind(g)})});const x=xt({},Ml,f);return g.params=xt({},x,vl,o),g.originalParams=xt({},g.params),g.passedParams=xt({},o),g.params&&g.params.on&&Object.keys(g.params.on).forEach(v=>{g.on(v,g.params.on[v])}),g.params&&g.params.onAny&&g.onAny(g.params.onAny),Object.assign(g,{enabled:g.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return g.params.direction==="horizontal"},isVertical(){return g.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:g.params.allowSlideNext,allowSlidePrev:g.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:g.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:g.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),g.emit("_swiper"),g.params.init&&g.init(),g}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:o,params:s}=this,u=Ht(o,`.${s.slideClass}, swiper-slide`),d=ea(u[0]);return ea(n)-d}getSlideIndexByData(n){return this.getSlideIndex(this.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===n)[0])}recalcSlides(){const n=this,{slidesEl:o,params:s}=n;n.slides=Ht(o,`.${s.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,o){const s=this;n=Math.min(Math.max(n,0),1);const u=s.minTranslate(),p=(s.maxTranslate()-u)*n+u;s.translateTo(p,typeof o>"u"?0:o),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=n.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",o.join(" "))}getSlideClasses(n){const o=this;return o.destroyed?"":n.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(o.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=[];n.slides.forEach(s=>{const u=n.getSlideClasses(s);o.push({slideEl:s,classNames:u}),n.emit("_slideClass",s,u)}),n.emit("_slideClasses",o)}slidesPerViewDynamic(n,o){n===void 0&&(n="current"),o===void 0&&(o=!1);const s=this,{params:u,slides:d,slidesGrid:p,slidesSizesGrid:g,size:f,activeIndex:x}=s;let v=1;if(typeof u.slidesPerView=="number")return u.slidesPerView;if(u.centeredSlides){let y=d[x]?Math.ceil(d[x].swiperSlideSize):0,k;for(let b=x+1;b<d.length;b+=1)d[b]&&!k&&(y+=Math.ceil(d[b].swiperSlideSize),v+=1,y>f&&(k=!0));for(let b=x-1;b>=0;b-=1)d[b]&&!k&&(y+=d[b].swiperSlideSize,v+=1,y>f&&(k=!0))}else if(n==="current")for(let y=x+1;y<d.length;y+=1)(o?p[y]+g[y]-p[x]<f:p[y]-p[x]<f)&&(v+=1);else for(let y=x-1;y>=0;y-=1)p[x]-p[y]<f&&(v+=1);return v}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:o,params:s}=n;s.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(p=>{p.complete&&qo(n,p)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function u(){const p=n.rtlTranslate?n.translate*-1:n.translate,g=Math.min(Math.max(p,n.maxTranslate()),n.minTranslate());n.setTranslate(g),n.updateActiveIndex(),n.updateSlidesClasses()}let d;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)u(),s.autoHeight&&n.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&n.isEnd&&!s.centeredSlides){const p=n.virtual&&s.virtual.enabled?n.virtual.slides:n.slides;d=n.slideTo(p.length-1,0,!1,!0)}else d=n.slideTo(n.activeIndex,0,!1,!0);d||u()}s.watchOverflow&&o!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,o){o===void 0&&(o=!0);const s=this,u=s.params.direction;return n||(n=u==="horizontal"?"vertical":"horizontal"),n===u||n!=="horizontal"&&n!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${u}`),s.el.classList.add(`${s.params.containerModifierClass}${n}`),s.emitContainerClasses(),s.params.direction=n,s.slides.forEach(d=>{n==="vertical"?d.style.width="":d.style.height=""}),s.emit("changeDirection"),o&&s.update()),s}changeLanguageDirection(n){const o=this;o.rtl&&n==="rtl"||!o.rtl&&n==="ltr"||(o.rtl=n==="rtl",o.rtlTranslate=o.params.direction==="horizontal"&&o.rtl,o.rtl?(o.el.classList.add(`${o.params.containerModifierClass}rtl`),o.el.dir="rtl"):(o.el.classList.remove(`${o.params.containerModifierClass}rtl`),o.el.dir="ltr"),o.update())}mount(n){const o=this;if(o.mounted)return!0;let s=n||o.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=o,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===o.params.swiperElementNodeName.toUpperCase()&&(o.isElement=!0);const u=()=>`.${(o.params.wrapperClass||"").trim().split(" ").join(".")}`;let p=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(u()):Ht(s,u())[0];return!p&&o.params.createElements&&(p=Jo("div",o.params.wrapperClass),s.append(p),Ht(s,`.${o.params.slideClass}`).forEach(g=>{p.append(g)})),Object.assign(o,{el:s,wrapperEl:p,slidesEl:o.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:p,hostEl:o.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||bn(s,"direction")==="rtl",rtlTranslate:o.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||bn(s,"direction")==="rtl"),wrongRTL:bn(p,"display")==="-webkit-box"}),!0}init(n){const o=this;if(o.initialized||o.mount(n)===!1)return o;o.emit("beforeInit"),o.params.breakpoints&&o.setBreakpoint(),o.addClasses(),o.updateSize(),o.updateSlides(),o.params.watchOverflow&&o.checkOverflow(),o.params.grabCursor&&o.enabled&&o.setGrabCursor(),o.params.loop&&o.virtual&&o.params.virtual.enabled?o.slideTo(o.params.initialSlide+o.virtual.slidesBefore,0,o.params.runCallbacksOnInit,!1,!0):o.slideTo(o.params.initialSlide,0,o.params.runCallbacksOnInit,!1,!0),o.params.loop&&o.loopCreate(),o.attachEvents();const u=[...o.el.querySelectorAll('[loading="lazy"]')];return o.isElement&&u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),u.forEach(d=>{d.complete?qo(o,d):d.addEventListener("load",p=>{qo(o,p.target)})}),_l(o),o.initialized=!0,_l(o),o.emit("init"),o.emit("afterInit"),o}destroy(n,o){n===void 0&&(n=!0),o===void 0&&(o=!0);const s=this,{params:u,el:d,wrapperEl:p,slides:g}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),u.loop&&s.loopDestroy(),o&&(s.removeClasses(),d&&typeof d!="string"&&d.removeAttribute("style"),p&&p.removeAttribute("style"),g&&g.length&&g.forEach(f=>{f.classList.remove(u.slideVisibleClass,u.slideFullyVisibleClass,u.slideActiveClass,u.slideNextClass,u.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(f=>{s.off(f)}),n!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),G0(s)),s.destroyed=!0),null}static extendDefaults(n){xt(vl,n)}static get extendedDefaults(){return vl}static get defaults(){return Ml}static installModule(n){Jt.prototype.__modules__||(Jt.prototype.__modules__=[]);const o=Jt.prototype.__modules__;typeof n=="function"&&o.indexOf(n)<0&&o.push(n)}static use(n){return Array.isArray(n)?(n.forEach(o=>Jt.installModule(o)),Jt):(Jt.installModule(n),Jt)}};Object.keys(gl).forEach(i=>{Object.keys(gl[i]).forEach(n=>{Bl.prototype[n]=gl[i][n]})});Bl.use([tg,ng]);const Qf=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Vn(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function kr(i,n){const o=["__proto__","constructor","prototype"];Object.keys(n).filter(s=>o.indexOf(s)<0).forEach(s=>{typeof i[s]>"u"?i[s]=n[s]:Vn(n[s])&&Vn(i[s])&&Object.keys(n[s]).length>0?n[s].__swiper__?i[s]=n[s]:kr(i[s],n[s]):i[s]=n[s]})}function Kf(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Zf(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Jf(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function ep(i){i===void 0&&(i="");const n=i.split(" ").map(s=>s.trim()).filter(s=>!!s),o=[];return n.forEach(s=>{o.indexOf(s)<0&&o.push(s)}),o.join(" ")}function sv(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function lv(i){let{swiper:n,slides:o,passedParams:s,changedParams:u,nextEl:d,prevEl:p,scrollbarEl:g,paginationEl:f}=i;const x=u.filter(H=>H!=="children"&&H!=="direction"&&H!=="wrapperClass"),{params:v,pagination:y,navigation:k,scrollbar:b,virtual:z,thumbs:I}=n;let B,M,T,S,_,N,A,Q;u.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&!s.thumbs.swiper.destroyed&&v.thumbs&&(!v.thumbs.swiper||v.thumbs.swiper.destroyed)&&(B=!0),u.includes("controller")&&s.controller&&s.controller.control&&v.controller&&!v.controller.control&&(M=!0),u.includes("pagination")&&s.pagination&&(s.pagination.el||f)&&(v.pagination||v.pagination===!1)&&y&&!y.el&&(T=!0),u.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||g)&&(v.scrollbar||v.scrollbar===!1)&&b&&!b.el&&(S=!0),u.includes("navigation")&&s.navigation&&(s.navigation.prevEl||p)&&(s.navigation.nextEl||d)&&(v.navigation||v.navigation===!1)&&k&&!k.prevEl&&!k.nextEl&&(_=!0);const G=H=>{n[H]&&(n[H].destroy(),H==="navigation"?(n.isElement&&(n[H].prevEl.remove(),n[H].nextEl.remove()),v[H].prevEl=void 0,v[H].nextEl=void 0,n[H].prevEl=void 0,n[H].nextEl=void 0):(n.isElement&&n[H].el.remove(),v[H].el=void 0,n[H].el=void 0))};u.includes("loop")&&n.isElement&&(v.loop&&!s.loop?N=!0:!v.loop&&s.loop?A=!0:Q=!0),x.forEach(H=>{if(Vn(v[H])&&Vn(s[H]))Object.assign(v[H],s[H]),(H==="navigation"||H==="pagination"||H==="scrollbar")&&"enabled"in s[H]&&!s[H].enabled&&G(H);else{const W=s[H];(W===!0||W===!1)&&(H==="navigation"||H==="pagination"||H==="scrollbar")?W===!1&&G(H):v[H]=s[H]}}),x.includes("controller")&&!M&&n.controller&&n.controller.control&&v.controller&&v.controller.control&&(n.controller.control=v.controller.control),u.includes("children")&&o&&z&&v.virtual.enabled?(z.slides=o,z.update(!0)):u.includes("virtual")&&z&&v.virtual.enabled&&(o&&(z.slides=o),z.update(!0)),u.includes("children")&&o&&v.loop&&(Q=!0),B&&I.init()&&I.update(!0),M&&(n.controller.control=v.controller.control),T&&(n.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),n.el.appendChild(f)),f&&(v.pagination.el=f),y.init(),y.render(),y.update()),S&&(n.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-scrollbar"),g.part.add("scrollbar"),n.el.appendChild(g)),g&&(v.scrollbar.el=g),b.init(),b.updateSize(),b.setTranslate()),_&&(n.isElement&&((!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-next"),d.innerHTML=n.hostEl.constructor.nextButtonSvg,d.part.add("button-next"),n.el.appendChild(d)),(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-button-prev"),p.innerHTML=n.hostEl.constructor.prevButtonSvg,p.part.add("button-prev"),n.el.appendChild(p))),d&&(v.navigation.nextEl=d),p&&(v.navigation.prevEl=p),k.init(),k.update()),u.includes("allowSlideNext")&&(n.allowSlideNext=s.allowSlideNext),u.includes("allowSlidePrev")&&(n.allowSlidePrev=s.allowSlidePrev),u.includes("direction")&&n.changeDirection(s.direction,!1),(N||Q)&&n.loopDestroy(),(A||Q)&&n.loopCreate(),n.update()}function uv(i,n){i===void 0&&(i={}),n===void 0&&(n=!0);const o={on:{}},s={},u={};kr(o,Ml),o._emitClasses=!0,o.init=!1;const d={},p=Qf.map(f=>f.replace(/_/,"")),g=Object.assign({},i);return Object.keys(g).forEach(f=>{typeof i[f]>"u"||(p.indexOf(f)>=0?Vn(i[f])?(o[f]={},u[f]={},kr(o[f],i[f]),kr(u[f],i[f])):(o[f]=i[f],u[f]=i[f]):f.search(/on[A-Z]/)===0&&typeof i[f]=="function"?n?s[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:o.on[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:d[f]=i[f])}),["navigation","pagination","scrollbar"].forEach(f=>{o[f]===!0&&(o[f]={}),o[f]===!1&&delete o[f]}),{params:o,passedParams:u,rest:d,events:s}}function dv(i,n){let{el:o,nextEl:s,prevEl:u,paginationEl:d,scrollbarEl:p,swiper:g}=i;Kf(n)&&s&&u&&(g.params.navigation.nextEl=s,g.originalParams.navigation.nextEl=s,g.params.navigation.prevEl=u,g.originalParams.navigation.prevEl=u),Zf(n)&&d&&(g.params.pagination.el=d,g.originalParams.pagination.el=d),Jf(n)&&p&&(g.params.scrollbar.el=p,g.originalParams.scrollbar.el=p),g.init(o)}function cv(i,n,o,s,u){const d=[];if(!n)return d;const p=f=>{d.indexOf(f)<0&&d.push(f)};if(o&&s){const f=s.map(u),x=o.map(u);f.join("")!==x.join("")&&p("children"),s.length!==o.length&&p("children")}return Qf.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in i&&f in n)if(Vn(i[f])&&Vn(n[f])){const x=Object.keys(i[f]),v=Object.keys(n[f]);x.length!==v.length?p(f):(x.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}),v.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}))}else i[f]!==n[f]&&p(f)}),d}const fv=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function ta(){return ta=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}return i},ta.apply(this,arguments)}function tp(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function np(i){const n=[];return Te.Children.toArray(i).forEach(o=>{tp(o)?n.push(o):o.props&&o.props.children&&np(o.props.children).forEach(s=>n.push(s))}),n}function pv(i){const n=[],o={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Te.Children.toArray(i).forEach(s=>{if(tp(s))n.push(s);else if(s.props&&s.props.slot&&o[s.props.slot])o[s.props.slot].push(s);else if(s.props&&s.props.children){const u=np(s.props.children);u.length>0?u.forEach(d=>n.push(d)):o["container-end"].push(s)}else o["container-end"].push(s)}),{slides:n,slots:o}}function mv(i,n,o){if(!o)return null;const s=v=>{let y=v;return v<0?y=n.length+v:y>=n.length&&(y=y-n.length),y},u=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:d,to:p}=o,g=i.params.loop?-n.length:0,f=i.params.loop?n.length*2:n.length,x=[];for(let v=g;v<f;v+=1)v>=d&&v<=p&&x.push(n[s(v)]);return x.map((v,y)=>Te.cloneElement(v,{swiper:i,style:u,key:v.props.virtualIndex||v.key||`slide-${y}`}))}function xi(i,n){return typeof window>"u"?ge.useEffect(i,n):ge.useLayoutEffect(i,n)}const df=ge.createContext(null),hv=ge.createContext(null),Pr=ge.forwardRef(function(i,n){let{className:o,tag:s="div",wrapperTag:u="div",children:d,onSwiper:p,...g}=i===void 0?{}:i,f=!1;const[x,v]=ge.useState("swiper"),[y,k]=ge.useState(null),[b,z]=ge.useState(!1),I=ge.useRef(!1),B=ge.useRef(null),M=ge.useRef(null),T=ge.useRef(null),S=ge.useRef(null),_=ge.useRef(null),N=ge.useRef(null),A=ge.useRef(null),Q=ge.useRef(null),{params:G,passedParams:H,rest:W,events:R}=uv(g),{slides:D,slots:$}=pv(d),U=()=>{z(!b)};Object.assign(G.on,{_containerClasses(Z,X){v(X)}});const re=()=>{Object.assign(G.on,R),f=!0;const Z={...G};if(delete Z.wrapperClass,M.current=new Bl(Z),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=D;const X={cache:!1,slides:D,renderExternal:k,renderExternalUpdate:!1};kr(M.current.params.virtual,X),kr(M.current.originalParams.virtual,X)}};B.current||re(),M.current&&M.current.on("_beforeBreakpoint",U);const me=()=>{f||!R||!M.current||Object.keys(R).forEach(Z=>{M.current.on(Z,R[Z])})},xe=()=>{!R||!M.current||Object.keys(R).forEach(Z=>{M.current.off(Z,R[Z])})};ge.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",U)}),ge.useEffect(()=>{!I.current&&M.current&&(M.current.emitSlidesClasses(),I.current=!0)}),xi(()=>{if(n&&(n.current=B.current),!!B.current)return M.current.destroyed&&re(),dv({el:B.current,nextEl:_.current,prevEl:N.current,paginationEl:A.current,scrollbarEl:Q.current,swiper:M.current},G),p&&!M.current.destroyed&&p(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),xi(()=>{me();const Z=cv(H,T.current,D,S.current,X=>X.key);return T.current=H,S.current=D,Z.length&&M.current&&!M.current.destroyed&&lv({swiper:M.current,slides:D,passedParams:H,changedParams:Z,nextEl:_.current,prevEl:N.current,scrollbarEl:Q.current,paginationEl:A.current}),()=>{xe()}}),xi(()=>{fv(M.current)},[y]);function V(){return G.virtual?mv(M.current,D,y):D.map((Z,X)=>Te.cloneElement(Z,{swiper:M.current,swiperSlideIndex:X}))}return Te.createElement(s,ta({ref:B,className:ep(`${x}${o?` ${o}`:""}`)},W),Te.createElement(hv.Provider,{value:M.current},$["container-start"],Te.createElement(u,{className:sv(G.wrapperClass)},$["wrapper-start"],V(),$["wrapper-end"]),Kf(G)&&Te.createElement(Te.Fragment,null,Te.createElement("div",{ref:N,className:"swiper-button-prev"}),Te.createElement("div",{ref:_,className:"swiper-button-next"})),Jf(G)&&Te.createElement("div",{ref:Q,className:"swiper-scrollbar"}),Zf(G)&&Te.createElement("div",{ref:A,className:"swiper-pagination"}),$["container-end"]))});Pr.displayName="Swiper";const ze=ge.forwardRef(function(i,n){let{tag:o="div",children:s,className:u="",swiper:d,zoom:p,lazy:g,virtualIndex:f,swiperSlideIndex:x,...v}=i===void 0?{}:i;const y=ge.useRef(null),[k,b]=ge.useState("swiper-slide"),[z,I]=ge.useState(!1);function B(_,N,A){N===y.current&&b(A)}xi(()=>{if(typeof x<"u"&&(y.current.swiperSlideIndex=x),n&&(n.current=y.current),!(!y.current||!d)){if(d.destroyed){k!=="swiper-slide"&&b("swiper-slide");return}return d.on("_slideClass",B),()=>{d&&d.off("_slideClass",B)}}}),xi(()=>{d&&y.current&&!d.destroyed&&b(d.getSlideClasses(y.current))},[d]);const M={isActive:k.indexOf("swiper-slide-active")>=0,isVisible:k.indexOf("swiper-slide-visible")>=0,isPrev:k.indexOf("swiper-slide-prev")>=0,isNext:k.indexOf("swiper-slide-next")>=0},T=()=>typeof s=="function"?s(M):s,S=()=>{I(!0)};return Te.createElement(o,ta({ref:y,className:ep(`${k}${u?` ${u}`:""}`),"data-swiper-slide-index":f,onLoad:S},v),p&&Te.createElement(df.Provider,{value:M},Te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof p=="number"?p:void 0},T(),g&&!z&&Te.createElement("div",{className:"swiper-lazy-preloader"}))),!p&&Te.createElement(df.Provider,{value:M},T(),g&&!z&&Te.createElement("div",{className:"swiper-lazy-preloader"})))});ze.displayName="SwiperSlide";function gv(i,n,o,s){return i.params.createElements&&Object.keys(s).forEach(u=>{if(!o[u]&&o.auto===!0){let d=Ht(i.el,`.${s[u]}`)[0];d||(d=Jo("div",s[u]),d.className=s[u],i.el.append(d)),o[u]=d,n[u]=d}}),o}function gi(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function bi(i){let{swiper:n,extendParams:o,on:s,emit:u}=i;const d="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),n.pagination={el:null,bullets:[]};let p,g=0;function f(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function x(T,S){const{bulletActiveClass:_}=n.params.pagination;T&&(T=T[`${S==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${_}-${S}`),T=T[`${S==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${_}-${S}-${S}`)))}function v(T,S,_){if(T=T%_,S=S%_,S===T+1)return"next";if(S===T-1)return"previous"}function y(T){const S=T.target.closest(gi(n.params.pagination.bulletClass));if(!S)return;T.preventDefault();const _=ea(S)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===_)return;const N=v(n.realIndex,_,n.slides.length);N==="next"?n.slideNext():N==="previous"?n.slidePrev():n.slideToLoop(_)}else n.slideTo(_)}function k(){const T=n.rtl,S=n.params.pagination;if(f())return;let _=n.pagination.el;_=Zt(_);let N,A;const Q=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,G=n.params.loop?Math.ceil(Q/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(A=n.previousRealIndex||0,N=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(N=n.snapIndex,A=n.previousSnapIndex):(A=n.previousIndex||0,N=n.activeIndex||0),S.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const H=n.pagination.bullets;let W,R,D;if(S.dynamicBullets&&(p=Pl(H[0],n.isHorizontal()?"width":"height"),_.forEach($=>{$.style[n.isHorizontal()?"width":"height"]=`${p*(S.dynamicMainBullets+4)}px`}),S.dynamicMainBullets>1&&A!==void 0&&(g+=N-(A||0),g>S.dynamicMainBullets-1?g=S.dynamicMainBullets-1:g<0&&(g=0)),W=Math.max(N-g,0),R=W+(Math.min(H.length,S.dynamicMainBullets)-1),D=(R+W)/2),H.forEach($=>{const U=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${S.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();$.classList.remove(...U)}),_.length>1)H.forEach($=>{const U=ea($);U===N?$.classList.add(...S.bulletActiveClass.split(" ")):n.isElement&&$.setAttribute("part","bullet"),S.dynamicBullets&&(U>=W&&U<=R&&$.classList.add(...`${S.bulletActiveClass}-main`.split(" ")),U===W&&x($,"prev"),U===R&&x($,"next"))});else{const $=H[N];if($&&$.classList.add(...S.bulletActiveClass.split(" ")),n.isElement&&H.forEach((U,re)=>{U.setAttribute("part",re===N?"bullet-active":"bullet")}),S.dynamicBullets){const U=H[W],re=H[R];for(let me=W;me<=R;me+=1)H[me]&&H[me].classList.add(...`${S.bulletActiveClass}-main`.split(" "));x(U,"prev"),x(re,"next")}}if(S.dynamicBullets){const $=Math.min(H.length,S.dynamicMainBullets+4),U=(p*$-p)/2-D*p,re=T?"right":"left";H.forEach(me=>{me.style[n.isHorizontal()?re:"top"]=`${U}px`})}}_.forEach((H,W)=>{if(S.type==="fraction"&&(H.querySelectorAll(gi(S.currentClass)).forEach(R=>{R.textContent=S.formatFractionCurrent(N+1)}),H.querySelectorAll(gi(S.totalClass)).forEach(R=>{R.textContent=S.formatFractionTotal(G)})),S.type==="progressbar"){let R;S.progressbarOpposite?R=n.isHorizontal()?"vertical":"horizontal":R=n.isHorizontal()?"horizontal":"vertical";const D=(N+1)/G;let $=1,U=1;R==="horizontal"?$=D:U=D,H.querySelectorAll(gi(S.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${U})`,re.style.transitionDuration=`${n.params.speed}ms`})}S.type==="custom"&&S.renderCustom?(H.innerHTML=S.renderCustom(n,N+1,G),W===0&&u("paginationRender",H)):(W===0&&u("paginationRender",H),u("paginationUpdate",H)),n.params.watchOverflow&&n.enabled&&H.classList[n.isLocked?"add":"remove"](S.lockClass)})}function b(){const T=n.params.pagination;if(f())return;const S=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let _=n.pagination.el;_=Zt(_);let N="";if(T.type==="bullets"){let A=n.params.loop?Math.ceil(S/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&A>S&&(A=S);for(let Q=0;Q<A;Q+=1)T.renderBullet?N+=T.renderBullet.call(n,Q,T.bulletClass):N+=`<${T.bulletElement} ${n.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?N=T.renderFraction.call(n,T.currentClass,T.totalClass):N=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?N=T.renderProgressbar.call(n,T.progressbarFillClass):N=`<span class="${T.progressbarFillClass}"></span>`),n.pagination.bullets=[],_.forEach(A=>{T.type!=="custom"&&(A.innerHTML=N||""),T.type==="bullets"&&n.pagination.bullets.push(...A.querySelectorAll(gi(T.bulletClass)))}),T.type!=="custom"&&u("paginationRender",_[0])}function z(){n.params.pagination=gv(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const T=n.params.pagination;if(!T.el)return;let S;typeof T.el=="string"&&n.isElement&&(S=n.el.querySelector(T.el)),!S&&typeof T.el=="string"&&(S=[...document.querySelectorAll(T.el)]),S||(S=T.el),!(!S||S.length===0)&&(n.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(S)&&S.length>1&&(S=[...n.el.querySelectorAll(T.el)],S.length>1&&(S=S.filter(_=>Wf(_,".swiper")[0]===n.el)[0])),Array.isArray(S)&&S.length===1&&(S=S[0]),Object.assign(n.pagination,{el:S}),S=Zt(S),S.forEach(_=>{T.type==="bullets"&&T.clickable&&_.classList.add(...(T.clickableClass||"").split(" ")),_.classList.add(T.modifierClass+T.type),_.classList.add(n.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(_.classList.add(`${T.modifierClass}${T.type}-dynamic`),g=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&_.classList.add(T.progressbarOppositeClass),T.clickable&&_.addEventListener("click",y),n.enabled||_.classList.add(T.lockClass)}))}function I(){const T=n.params.pagination;if(f())return;let S=n.pagination.el;S&&(S=Zt(S),S.forEach(_=>{_.classList.remove(T.hiddenClass),_.classList.remove(T.modifierClass+T.type),_.classList.remove(n.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(_.classList.remove(...(T.clickableClass||"").split(" ")),_.removeEventListener("click",y))})),n.pagination.bullets&&n.pagination.bullets.forEach(_=>_.classList.remove(...T.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const T=n.params.pagination;let{el:S}=n.pagination;S=Zt(S),S.forEach(_=>{_.classList.remove(T.horizontalClass,T.verticalClass),_.classList.add(n.isHorizontal()?T.horizontalClass:T.verticalClass)})}),s("init",()=>{n.params.pagination.enabled===!1?M():(z(),b(),k())}),s("activeIndexChange",()=>{typeof n.snapIndex>"u"&&k()}),s("snapIndexChange",()=>{k()}),s("snapGridLengthChange",()=>{b(),k()}),s("destroy",()=>{I()}),s("enable disable",()=>{let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),s("lock unlock",()=>{k()}),s("click",(T,S)=>{const _=S.target,N=Zt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&N&&N.length>0&&!_.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&_===n.navigation.nextEl||n.navigation.prevEl&&_===n.navigation.prevEl))return;const A=N[0].classList.contains(n.params.pagination.hiddenClass);u(A===!0?"paginationShow":"paginationHide"),N.forEach(Q=>Q.classList.toggle(n.params.pagination.hiddenClass))}});const B=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList.remove(n.params.pagination.paginationDisabledClass))),z(),b(),k()},M=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList.add(n.params.pagination.paginationDisabledClass))),I()};Object.assign(n.pagination,{enable:B,disable:M,render:b,update:k,init:z,destroy:I})}function Ei(i){let{swiper:n,extendParams:o,on:s,emit:u,params:d}=i;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,g,f=d&&d.autoplay?d.autoplay.delay:3e3,x=d&&d.autoplay?d.autoplay.delay:3e3,v,y=new Date().getTime(),k,b,z,I,B,M,T;function S(V){!n||n.destroyed||!n.wrapperEl||V.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",S),!(T||V.detail&&V.detail.bySwiperTouchMove)&&W())}const _=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?k=!0:k&&(x=v,k=!1);const V=n.autoplay.paused?v:y+x-new Date().getTime();n.autoplay.timeLeft=V,u("autoplayTimeLeft",V,V/f),g=requestAnimationFrame(()=>{_()})},N=()=>{let V;return n.virtual&&n.params.virtual.enabled?V=n.slides.filter(X=>X.classList.contains("swiper-slide-active"))[0]:V=n.slides[n.activeIndex],V?parseInt(V.getAttribute("data-swiper-autoplay"),10):void 0},A=V=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(g),_();let Z=typeof V>"u"?n.params.autoplay.delay:V;f=n.params.autoplay.delay,x=n.params.autoplay.delay;const X=N();!Number.isNaN(X)&&X>0&&typeof V>"u"&&(Z=X,f=X,x=X),v=Z;const j=n.params.speed,F=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,j,!0,!0),u("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,j,!0,!0),u("autoplay")),n.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return Z>0?(clearTimeout(p),p=setTimeout(()=>{F()},Z)):requestAnimationFrame(()=>{F()}),Z},Q=()=>{y=new Date().getTime(),n.autoplay.running=!0,A(),u("autoplayStart")},G=()=>{n.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(g),u("autoplayStop")},H=(V,Z)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(p),V||(M=!0);const X=()=>{u("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",S):W()};if(n.autoplay.paused=!0,Z){B&&(v=n.params.autoplay.delay),B=!1,X();return}v=(v||n.params.autoplay.delay)-(new Date().getTime()-y),!(n.isEnd&&v<0&&!n.params.loop)&&(v<0&&(v=0),X())},W=()=>{n.isEnd&&v<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(y=new Date().getTime(),M?(M=!1,A(v)):A(),n.autoplay.paused=!1,u("autoplayResume"))},R=()=>{if(n.destroyed||!n.autoplay.running)return;const V=tn();V.visibilityState==="hidden"&&(M=!0,H(!0)),V.visibilityState==="visible"&&W()},D=V=>{V.pointerType==="mouse"&&(M=!0,T=!0,!(n.animating||n.autoplay.paused)&&H(!0))},$=V=>{V.pointerType==="mouse"&&(T=!1,n.autoplay.paused&&W())},U=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",D),n.el.addEventListener("pointerleave",$))},re=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",D),n.el.removeEventListener("pointerleave",$))},me=()=>{tn().addEventListener("visibilitychange",R)},xe=()=>{tn().removeEventListener("visibilitychange",R)};s("init",()=>{n.params.autoplay.enabled&&(U(),me(),Q())}),s("destroy",()=>{re(),xe(),n.autoplay.running&&G()}),s("_freeModeStaticRelease",()=>{(z||M)&&W()}),s("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?G():H(!0,!0)}),s("beforeTransitionStart",(V,Z,X)=>{n.destroyed||!n.autoplay.running||(X||!n.params.autoplay.disableOnInteraction?H(!0,!0):G())}),s("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){G();return}b=!0,z=!1,M=!1,I=setTimeout(()=>{M=!0,z=!0,H(!0)},200)}}),s("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!b)){if(clearTimeout(I),clearTimeout(p),n.params.autoplay.disableOnInteraction){z=!1,b=!1;return}z&&n.params.cssMode&&W(),z=!1,b=!1}}),s("slideChange",()=>{n.destroyed||!n.autoplay.running||(B=!0)}),Object.assign(n.autoplay,{start:Q,stop:G,pause:H,resume:W})}function ua(i){let{swiper:n,extendParams:o,emit:s,once:u}=i;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(n.params.cssMode)return;const f=n.getTranslate();n.setTranslate(f),n.setTransition(0),n.touchEventsData.velocities.length=0,n.freeMode.onTouchEnd({currentPos:n.rtl?n.translate:-n.translate})}function p(){if(n.params.cssMode)return;const{touchEventsData:f,touches:x}=n;f.velocities.length===0&&f.velocities.push({position:x[n.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:x[n.isHorizontal()?"currentX":"currentY"],time:Bn()})}function g(f){let{currentPos:x}=f;if(n.params.cssMode)return;const{params:v,wrapperEl:y,rtlTranslate:k,snapGrid:b,touchEventsData:z}=n,B=Bn()-z.touchStartTime;if(x<-n.minTranslate()){n.slideTo(n.activeIndex);return}if(x>-n.maxTranslate()){n.slides.length<b.length?n.slideTo(b.length-1):n.slideTo(n.slides.length-1);return}if(v.freeMode.momentum){if(z.velocities.length>1){const G=z.velocities.pop(),H=z.velocities.pop(),W=G.position-H.position,R=G.time-H.time;n.velocity=W/R,n.velocity/=2,Math.abs(n.velocity)<v.freeMode.minimumVelocity&&(n.velocity=0),(R>150||Bn()-G.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity*=v.freeMode.momentumVelocityRatio,z.velocities.length=0;let M=1e3*v.freeMode.momentumRatio;const T=n.velocity*M;let S=n.translate+T;k&&(S=-S);let _=!1,N;const A=Math.abs(n.velocity)*20*v.freeMode.momentumBounceRatio;let Q;if(S<n.maxTranslate())v.freeMode.momentumBounce?(S+n.maxTranslate()<-A&&(S=n.maxTranslate()-A),N=n.maxTranslate(),_=!0,z.allowMomentumBounce=!0):S=n.maxTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(S>n.minTranslate())v.freeMode.momentumBounce?(S-n.minTranslate()>A&&(S=n.minTranslate()+A),N=n.minTranslate(),_=!0,z.allowMomentumBounce=!0):S=n.minTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(v.freeMode.sticky){let G;for(let H=0;H<b.length;H+=1)if(b[H]>-S){G=H;break}Math.abs(b[G]-S)<Math.abs(b[G-1]-S)||n.swipeDirection==="next"?S=b[G]:S=b[G-1],S=-S}if(Q&&u("transitionEnd",()=>{n.loopFix()}),n.velocity!==0){if(k?M=Math.abs((-S-n.translate)/n.velocity):M=Math.abs((S-n.translate)/n.velocity),v.freeMode.sticky){const G=Math.abs((k?-S:S)-n.translate),H=n.slidesSizesGrid[n.activeIndex];G<H?M=v.speed:G<2*H?M=v.speed*1.5:M=v.speed*2.5}}else if(v.freeMode.sticky){n.slideToClosest();return}v.freeMode.momentumBounce&&_?(n.updateProgress(N),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating=!0,dl(y,()=>{!n||n.destroyed||!z.allowMomentumBounce||(s("momentumBounce"),n.setTransition(v.speed),setTimeout(()=>{n.setTranslate(N),dl(y,()=>{!n||n.destroyed||n.transitionEnd()})},0))})):n.velocity?(s("_freeModeNoMomentumRelease"),n.updateProgress(S),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating||(n.animating=!0,dl(y,()=>{!n||n.destroyed||n.transitionEnd()}))):n.updateProgress(S),n.updateActiveIndex(),n.updateSlidesClasses()}else if(v.freeMode.sticky){n.slideToClosest();return}else v.freeMode&&s("_freeModeNoMomentumRelease");(!v.freeMode.momentum||B>=v.longSwipesMs)&&(s("_freeModeStaticRelease"),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses())}Object.assign(n,{freeMode:{onTouchStart:d,onTouchMove:p,onTouchEnd:g}})}const vv=ee.div`
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
`,xr=ee(ze)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,kv=()=>m.jsx(m.Fragment,{children:m.jsxs(yv,{children:[m.jsx(vv,{}),m.jsxs(xv,{children:[m.jsxs(wv,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[m.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),m.jsx("a",{href:"#",children:m.jsx(P0,{"data-aos":"fade-in","data-aos-delay":"400"})})]}),m.jsx(Sv,{"data-aos":"fade-up-right","data-aos-delay":"400",children:m.jsxs(Pr,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[Ei,ua,bi],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Velocidade",description:" Seus projetos são desenvolvidos com agilidade, garantindo a entrega rápida de sites funcionais e modernos, sem comprometer a qualidade. Ideal para quem precisa de resultados prontos no menor tempo possível."}),m.jsx(yr,{title:"Qualidade",description:"Cada site criado reflete atenção aos detalhes, com design profissional e performance impecável."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Otimização",description:" Seus sites são otimizados, garantindo carregamento rápido, navegação fluida e compatibilidade com todos os dispositivos"}),m.jsx(vr,{title:"SEO",description:"Seus sites já são construídos com estratégias de SEO integradas, aumentando a visibilidade nos motores de busca e atraindo tráfego qualificado. Você não entrega só um site bonito, mas também eficaz."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Autenticidade",description:"Você cria sites únicos e personalizados, refletindo a identidade de cada cliente e diferenciando-se de modelos genéricos. Cada projeto é exclusivo, pensado para destacar o cliente no mercado."}),m.jsx(yr,{title:"Versatilidade",description:"Com a capacidade de atender diferentes nichos e demandas, seu site se adapta ao que deseja."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Comunicação",description:"Você mantém uma comunicação clara e aberta durante todo o processo, garantindo que você esteja sempre informado e satisfeito com tudo."}),m.jsx(vr,{title:"Completo",description:"Solução completa, que vai além do design: desde registro de domínio e hospedagem até estratégias para redes sociais e integrações com ferramentas de marketing."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(vr,{title:"Manutenção",description:"Seus sites são desenvolvidos de forma que possam ser facilmente atualizados e mantidos, com suporte contínuo para garantir que tudo esteja sempre funcionando perfeitamente."}),m.jsx(yr,{title:"Escalabilidade",description:"Seus sites prontos para crescer junto com o seu negócio, permitindo a adição de novas funcionalidades e se adaptando às demandas futuras do mercado."})]})}),m.jsx(xr,{children:m.jsxs("div",{children:[m.jsx(yr,{title:"Desempenho",description:"Seus sites são projetados para desempenho máximo, com alta velocidade de carregamento."}),m.jsx(vr,{title:"Vendas",description:"Seus sites não são apenas vitrines, mas ferramentas estratégicas para aumentar as conversões e vendas, com design persuasivo, CTAs bem posicionados e integração com plataformas de pagamento."})]})})]})})]})]})}),bv=ee.div`
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
`,yl=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>500?1e3:500;$n.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),$n.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(bv,{"data-aos":"fade-in",children:m.jsxs(Pr,{modules:[Ei,ua,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),Ev=ee.button`
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
    
`,rp=()=>m.jsx(m.Fragment,{children:m.jsxs(Ev,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"})]})}),Tv=la`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`,Cv=ee.section`
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
        animation: ${Tv} 2s linear infinite alternate-reverse;
    }
`,_v=()=>m.jsx(m.Fragment,{children:m.jsxs(Cv,{children:[m.jsxs(jv,{children:[m.jsxs("div",{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[m.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),m.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"300",children:["Escolher a qualidade é a melhor escolha, veja nossos ",m.jsx("a",{href:"#",children:"pacotes."})]})]}),m.jsx("div",{"data-aos":"fade-in","data-aos-delay":"500",children:m.jsx(rp,{})})]}),m.jsx(zv,{"data-aos":"fade-up-right","data-aos-delay":"300",children:m.jsxs(Pr,{modules:[Ei,ua,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/10_gyjqvc.png",alt:"le ange"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/18_zyjvhk.png",alt:"allox"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/19_f8pi7x.png",alt:"your name"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/13_cnu2os.png",alt:"thelastofus"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/12_nkzjqe.png",alt:"lifegreen"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/15_wehzuc.png",alt:"monkey"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/11_yvl8cq.png",alt:"etech"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/16_xklqek.png",alt:"wizardZ"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/14_vunelf.png",alt:"coffe"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/17_pgciit.png",alt:"horizen"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/20_hfglfp.png",alt:"yellow"})})})]})}),m.jsx(Pv,{"data-aos":"fade-down","data-aos-delay":"200",children:m.jsx("a",{href:"#",children:m.jsx(Vf,{})})})]})}),Mv=ee.div`
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
`,Fo=({borderRadius:i,bgColor:n,bBackground:o,icon:s,boldText:u,normalText:d})=>m.jsxs(Mv,{"data-aos":"fade-up","data-aos-delay":"200",borderRadius:i,bgColor:n,bBackground:o,children:[m.jsx("a",{href:"#","data-aos":"fade-up","data-aos-delay":"200",children:s?m.jsx(s,{}):m.jsx(D0,{})}),m.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"400",children:[m.jsx("b",{children:u||"Texto em Negrito"}),d||"Texto normal de exemplo"]}),m.jsx(Hn,{})]}),Lv=ee.section`
    width: 100%;
    height: auto;
    padding-bottom: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    overflow: hidden;

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
`,Rv=()=>m.jsx(m.Fragment,{children:m.jsxs(Lv,{children:[m.jsx(Ov,{children:m.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Para quem ",m.jsx("b",{children:"nós somos?"})]})}),m.jsxs(Iv,{children:[m.jsx(Nv,{"data-aos":"fade-right","data-aos-delay":"400",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:F0,boldText:"Empresas",normalText:"que querem crescer no mercado"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:A0,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),m.jsxs(Av,{children:[m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:M0,boldText:"Lojas",normalText:"que querem aumentar suas vendas"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:N0,boldText:"Todos",normalText:"que querem evoluir seu negócio de patamar"}),m.jsx(Dv,{"data-aos":"fade-left","data-aos-delay":"400",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})}),Fv=la`
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
`,Ll=({items:i,onTextClick:n})=>{n||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[o,s]=ge.useState(null),u=d=>{console.log(`OpenText clicked: ${d}`),s(o===d?null:d),n&&n(d)};return m.jsx(m.Fragment,{children:i.map((d,p)=>m.jsxs(Bv,{isOpen:o===p,onClick:()=>u(p),children:[m.jsxs("h3",{children:[d.title,m.jsx("span",{className:"arrow",children:m.jsx(I0,{})})]}),m.jsx("div",{className:"content",children:d.text})]},p))})},$v=ee.div`
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
    overflow: hidden;

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
`,Yv=()=>{const[i,n]=ge.useState(0),o=[{title:"Exclusividade",text:"Contato direto com o desenvolvedor para atendimento ágil e personalizado."},{title:"Manutenção gratuita",text:"Suporte completo por 12 meses, sem custos extras."},{title:"Aprenda a mexer no seu site",text:"Treinamento prático para você gerenciar tudo com facilidade."},{title:"Descontos em outros serviços",text:"Acesso a condições especiais em serviços adicionais."}],s=["https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png"],u=d=>{console.log(`Texto clicado: ${d}`),n(d)};return m.jsx(m.Fragment,{children:m.jsxs(Gv,{children:[m.jsx(Hv,{}),m.jsxs(Wv,{children:[m.jsxs(qv,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[m.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(Ll,{items:o,onTextClick:u})}),m.jsx(Hn,{})]}),m.jsx(Uv,{"data-aos":"fade-up-left","data-aos-delay":"200",children:m.jsx(Vv,{images:s,activeIndex:i})})]})]})})},Xv=ee.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    height: auto;
    gap: 20px;
    background-color: #353535;
    border-radius: 20px;
`,Qv=ee.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: -10px;

    & > img {
        object-fit: contain;
        width: 100px;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        & > img {
            width: 20px;
            height: auto;
            object-fit: contain;
        }

        & > p {
            background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 20px;
            font-weight: 400;
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
`,wr=({logo:i,nota:n,empresa:o,depoimento:s})=>m.jsx(m.Fragment,{children:m.jsxs(Xv,{children:[m.jsxs(Qv,{children:[m.jsx("img",{src:i}),m.jsxs("div",{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"}),m.jsx("p",{children:n})]})]}),m.jsxs(Kv,{children:[m.jsx("h1",{children:o}),m.jsx("p",{children:s})]})]})}),Zv=ee.section`
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
`,r1=()=>m.jsx(m.Fragment,{children:m.jsxs(Zv,{children:[m.jsx(Jv,{"data-aos":"fade-down","data-aos-delay":"100",children:m.jsx("h2",{"data-aos":"zoom-in","data-aos-delay":"300",children:"Depoimentos"})}),m.jsx(e1,{"data-aos":"fade-down","data-aos-delay":"300",children:m.jsx("a",{href:"#",children:m.jsx(Vf,{})})}),m.jsx(t1,{children:m.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:["Não tenha dúvidas, ",m.jsx("b",{children:"escolha o certo!"})]})}),m.jsx(n1,{"data-aos":"fade-up","data-aos-delay":"400",children:m.jsxs(Pr,{modules:[Ei,bi],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/6_bv5zu4.svg",nota:"4.9",empresa:"Le Ange",depoimento:"Nosso site ficou simplesmente perfeito! Ele reflete o charme, sofisticação e o acolhimento que queríamos transmitir para nossos hóspedes. A experiência com o Aleph foi impecável, desde o design até o suporte pós-lançamento. Recomendo de olhos fechados!"})}),m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/5_tnvyoj.svg",nota:"4.7",empresa:"Al Lox",depoimento:"Precisávamos de um site que fosse moderno, funcional e ao mesmo tempo destacasse nossos produtos eletrônicos. O Aleph superou todas as expectativas! O design ficou incrível e a navegação é super intuitiva, o que aumentou nossas vendas online."})}),m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/7_berqb9.svg",nota:"4.9",empresa:"Life Green",depoimento:"O site desenvolvido pelo Aleph conseguiu traduzir perfeitamente nossa missão de sustentabilidade. Ficamos impressionados com o cuidado nos detalhes e o alinhamento com nossos valores. Muito bom mesmo!"})}),m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/4_teeinx.svg",nota:"4.6",empresa:"WizardZ",depoimento:"Como agência de marketing, precisávamos de um site que destacasse nossa criatividade. O Aleph criou algo que não apenas impressiona visualmente, mas também é altamente funcional. A entrega foi rápida e o suporte constante é ótimo!"})}),m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/3_qckj5u.svg",nota:"4.9",empresa:"Etech",depoimento:"Para uma escola online como a nossa, um site bem estruturado é essencial. O Aleph entregou uma plataforma educativa completa, com design intuitivo e ferramentas que facilitam a experiência dos alunos. Estamos muito satisfeitos com o resultado!"})}),m.jsx(ze,{children:m.jsx(wr,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/2_xqs2va.svg",nota:"4.9",empresa:"Meal Monkey",depoimento:"O Aleph transformou nosso site em uma verdadeira extensão da nossa marca! Agora temos um espaço que não só facilita pedidos online, mas também encanta nossos clientes com um design moderno e funcional. Um investimento que valeu a pena!"})})]})})]})}),i1=ee.div`
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
`,o1=()=>(ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>500?1e3:500;$n.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),$n.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(i1,{"data-aos":"fade-in",children:m.jsxs(Pr,{modules:[Ei,ua,bi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),a1=ee.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,s1=ee.div`
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
`,d1=ee.div`
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
      font-family: var(--font--poppins);
      font-weight: 400;
      font-size: 20px;
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
`,c1=ee.div`
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
`,xl=({promoBold:i,promo:n,valor:o,servico:s,listItems:u=[]})=>m.jsxs(a1,{children:[m.jsx(s1,{}),m.jsxs(l1,{children:[m.jsx(u1,{children:m.jsxs("h4",{children:[m.jsx("b",{children:i})," ",n]})}),m.jsxs(d1,{children:[m.jsx("h1",{children:s}),m.jsxs("div",{children:[m.jsx("p",{children:"Economize agora"}),m.jsx("span",{children:o})]}),m.jsx(Hn,{})]})]}),m.jsx(c1,{children:m.jsx("ol",{children:u.map((d,p)=>m.jsx("li",{children:d},p))})})]}),f1=ee.section`
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

`,h1=()=>m.jsx(m.Fragment,{children:m.jsxs(f1,{children:[m.jsx(p1,{children:m.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["O que ",m.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),m.jsxs(m1,{children:[m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$890,90",servico:"Landing Page",listItems:["Alta conversão","Tempo de carregamento veloz","Versátilidade de design","Instalação de Pixel","Aumentar a visibilidade online","Aumento de leads qualificados","Design responsivo ( mobile-first )","Otimização para SEO","Integração com ferramentas de automação de marketing","Geração de tráfego pago eficaz"]})}),m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$1290,90",servico:"Institucional",listItems:["Posicionamento de marca","Versatilidade de design","Instalação de Pixel","Apresentação de equipe e valores da empresa","Integração com redes sociais","Seções interativas (ex.: FAQ, chat ao vivo)","Blog ou seção de noticias","Facilitação de contato (formulários e links rápidos)","Geração de tráfego pago eficaz"]})}),m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(xl,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$1890,90",servico:"E-commerce",listItems:["Alto número de vendas","Sistemas fácil de manipular","Instalação de Pixel","Função de recomendação de produtos","Carrinho de compras otimizado","Pagamento integrado e seguro","Monitoramento de comportamento do usúarios","Ofertas personalizadas e promoções","Sistema de reviews e avaliações de produtos"]})})]})]})}),g1=ee.section`
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
`,w1=()=>m.jsx(m.Fragment,{children:m.jsx(g1,{children:m.jsxs(v1,{children:[m.jsxs(y1,{children:[m.jsx("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:"Torne-se nosso parceiro"}),m.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos"}),m.jsx("img",{"data-aos":"fade-in","data-aos-delay":"600",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248919/whitePacerias_x9oj45.png"})]}),m.jsxs(x1,{children:[m.jsxs("ol",{children:[m.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"200",children:[m.jsx(O0,{}),"Descontos exclusivos"]}),m.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"300",children:[m.jsx(R0,{}),"Manutenção estendida"]}),m.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"400",children:[m.jsx(_0,{}),"Prioridade de entrega"]}),m.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"500",children:[m.jsx(L0,{}),"Feito para empresas"]})]}),m.jsx(rp,{})]})]})})}),S1=ee.div`
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
`,T1=ee.div`
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
`,C1=()=>{const[i,n]=ge.useState(0),o=[{title:"Qual a vantagem de eu ter um site?",text:"Ter um site profissional aumenta sua visibilidade, fortalece a sua marca e permite atender seus clientes de forma eficiente, 24 horas por dia."},{title:"Como faço um site para vender?",text:"Crio sites otimizados para vendas, com integração a meios de pagamento, carrinho de compras e estratégias para aumentar sua conversão."},{title:"Quantas seções tem no site?",text:"Sim! Seu site será personalizado, com quantas seções forem necessárias para atender às suas necessidades e objetivos."},{title:"Qual tipo de linguagem você usa?",text:"Uso tecnologias modernas como React, HTML5, CSS3, JavaScript e frameworks que garantem um site rápido e funcional."}],s=[{title:"O valor mínimo para um site é?",text:"O valor inicial depende da complexidade do projeto, mas ofereço opções acessíveis para atender diferentes necessidades."},{title:"Existe garantia na entrega do site?",text:"Sim! A entrega é garantida dentro do prazo combinado, com suporte técnico incluso por 3 meses para ajustes e manutenção."},{title:"Quais são os meios de contato?",text:"Você pode entrar em contato via WhatsApp, e-mail ou diretamente pelas redes sociais. Estou sempre disponível para atender você!"},{title:"A hospedagem do site está inclusa?",text:"A hospedagem pode ser inclusa como um serviço adicional, garantindo um pacote completo e funcional."}],u=d=>{console.log(`Texto clicado: ${d}`),n(d)};return m.jsx(m.Fragment,{children:m.jsxs(k1,{children:[m.jsx(S1,{}),m.jsxs(b1,{children:[m.jsxs(E1,{children:[m.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Ficou com dúvidas?"}),m.jsx("p",{"data-aos":"fade-in","data-aos-delay":"500",children:"Veja as perguntas mais recorrentes"})]}),m.jsxs(T1,{children:[m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(Ll,{items:o,onTextClick:u})}),m.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(Ll,{items:s,onTextClick:u})})]}),m.jsx(Hn,{})]})]})})};function j1(i){return pt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function z1(i){return pt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(i)}const P1=la`
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
  background-color: #ffffff10;
  backdrop-filter: blur(2px);
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
  background-color: #fbfbfb;
  border-radius: 10px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--poppins)!important;
`,cf=ee.div`
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
  border-radius: 50px 50px 0px 50px ;
  margin-right: ${i=>i.sent?"0":"8px"};
  margin-left: ${i=>i.sent?"8px":"0"};
  background-color: var(--color--white);
  padding: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`,A1=ee.div`
  display: flex;
  flex-direction: column;
  background-color: ${i=>i.sent?"#dcf8c6":"#ffffff"};
  border-radius: 10px ;
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
  width: 100%;
`,B1=ee.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 12px;
  font-family: var(--font--poppins)!important;
  background: #ffffff;
  color: var(--color--purple);
  width: 70%;

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
  width: 30%;
`,V1=({footerRendered:i})=>{const[n,o]=ge.useState(!1),[s,u]=ge.useState(""),[d,p]=ge.useState([]),[g,f]=ge.useState(!1),[x,v]=ge.useState("Número inválido"),[y,k]=ge.useState(!1),[b,z]=ge.useState(!1),I="https://wa.link/dojlwi",B="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png";ge.useEffect(()=>{const _=setTimeout(()=>{o(!0),p([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},45e3);return()=>clearTimeout(_)},[]);const M=async()=>{if(s.trim()==="")return;const _={id:Date.now(),text:s,sent:!0};p(A=>[...A,_]);const N=s.trim();if(u(""),f(!0),!y&&x==="Número inválido"){setTimeout(()=>{f(!1),p(A=>[...A,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),k(!0)},1500);return}if(y&&x==="Número inválido"){const A=/^\d+$/.test(N),Q=A?N:"Número inválido";v(Q),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"userPhoneCaptured",phoneNumber:Q}),setTimeout(()=>{f(!1),p(G=>[...G,{id:Date.now(),text:A?m.jsxs("span",{children:["Muito obrigado, aumigo🐕!",m.jsx("br",{}),m.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{z(!0)},500),k(!1)},1500);return}f(!1)},T=_=>{_.key==="Enter"&&M()},S=()=>{o(!1)};return m.jsxs(_1,{children:[m.jsx(M1,{onClick:()=>window.open(I,"_blank"),id:"clickwpp","data-aos":"fade-up","data-aos-delay":"200",children:m.jsx(j1,{id:"clickwpp"})}),n&&m.jsxs(L1,{children:[m.jsx(O1,{onClick:S,children:m.jsx(z1,{})}),m.jsxs(I1,{children:[d.map(_=>m.jsxs(cf,{sent:_.sent,children:[!_.sent&&m.jsx(N1,{src:B,alt:"Bot"}),m.jsxs(A1,{sent:_.sent,children:[!_.sent&&m.jsx(D1,{children:"aleph"}),m.jsx("div",{children:_.text})]})]},_.id)),g&&m.jsx(cf,{children:m.jsx(R1,{})})]}),!b&&m.jsxs(F1,{children:[m.jsx(B1,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:s,onChange:_=>u(_.target.value),onKeyDown:T}),m.jsx($1,{onClick:M,children:"Enviar"})]})]})]})},H1=ee.footer`
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
`,G1=()=>m.jsx(m.Fragment,{children:m.jsxs(H1,{children:[m.jsx("p",{"data-aos":"fade-left","data-aos-delay":"200",children:"Todos os direitos reservados | desde 2024"}),m.jsx("img",{"data-aos":"fade-up","data-aos-delay":"300",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsxs("p",{"data-aos":"fade-right","data-aos-delay":"400",children:["Desenvolvido por ",m.jsx("a",{href:"#",children:" Aleph "})]})]})}),W1=ee.div`
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
`,Q1=()=>m.jsx(m.Fragment,{children:m.jsxs(q1,{children:[m.jsx(W1,{}),m.jsxs(U1,{children:[m.jsxs(Y1,{children:[m.jsx("img",{"data-aos":"fade-up","data-aos-delay":"100",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"}),m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"200",children:["Entre em ",m.jsx("b",{children:"contato"})," conosco"]}),m.jsx("p",{"data-aos":"fade-up-right","data-aos-delay":"400",children:"Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados"}),m.jsxs("form",{id:"contactForm",children:[m.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"300",children:["Seu Nome",m.jsx("input",{type:"text",id:"name",placeholder:"Aleph Silva Ramos",required:!0})]}),m.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"200",children:["Seu e-mail",m.jsx("input",{type:"email",id:"email",placeholder:"aleph@gmail.com",required:!0})]}),m.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"100",children:["WhatsApp",m.jsx("input",{type:"tel",id:"tel",placeholder:"24981411940",required:!0})]}),m.jsx("button",{type:"submit","data-aos":"fade-in","data-aos-delay":"500",children:"Enviar e entrar em contato"}),m.jsx("span",{"data-aos":"fade-up","data-aos-delay":"500",children:"*Usaremos essas informações apenas para fins de contato"})]})]}),m.jsx(X1,{children:m.jsx("img",{"data-aos":"fade-up-right","data-aos-delay":"400",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png"})}),m.jsx(G1,{})]})]})}),K1=()=>m.jsxs(m.Fragment,{children:[m.jsx(f0,{}),m.jsx(S0,{}),m.jsx(kv,{}),m.jsx(yl,{}),m.jsx(_v,{}),m.jsx(Rv,{}),m.jsx(yl,{}),m.jsx(Yv,{}),m.jsx(r1,{}),m.jsx(o1,{}),m.jsx(h1,{}),m.jsx(w1,{}),m.jsx(yl,{}),m.jsx(C1,{}),m.jsx(Q1,{}),m.jsx(V1,{})]});function Z1(){return ge.useEffect(()=>{const i=()=>{const n=window.innerWidth>1e3?1500:1e3;$n.init({duration:n,offset:20,easing:"ease-in-out",once:!0}),$n.refresh()};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),m.jsx(m.Fragment,{children:m.jsx(K1,{})})}sh.createRoot(document.getElementById("root")).render(m.jsx(ge.StrictMode,{children:m.jsx(Z1,{})}));
