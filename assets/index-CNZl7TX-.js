(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(u){if(u.ep)return;u.ep=!0;const c=o(u);fetch(u.href,c)}})();function ff(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ta={exports:{}},ci={},na={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function eh(){if(Od)return Se;Od=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,I={};function B(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}B.prototype.isReactComponent={},B.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=B.prototype;function T(j,F,ue){this.props=j,this.context=F,this.refs=I,this.updater=ue||b}var S=T.prototype=new M;S.constructor=T,P(S,B.prototype),S.isPureReactComponent=!0;var _=Array.isArray,N=Object.prototype.hasOwnProperty,A={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function G(j,F,ue){var ae,he={},fe=null,pe=null;if(F!=null)for(ae in F.ref!==void 0&&(pe=F.ref),F.key!==void 0&&(fe=""+F.key),F)N.call(F,ae)&&!Q.hasOwnProperty(ae)&&(he[ae]=F[ae]);var le=arguments.length-2;if(le===1)he.children=ue;else if(1<le){for(var ve=Array(le),_e=0;_e<le;_e++)ve[_e]=arguments[_e+2];he.children=ve}if(j&&j.defaultProps)for(ae in le=j.defaultProps,le)he[ae]===void 0&&(he[ae]=le[ae]);return{$$typeof:i,type:j,key:fe,ref:pe,props:he,_owner:A.current}}function H(j,F){return{$$typeof:i,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function W(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function R(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ue){return F[ue]})}var D=/\/+/g;function $(j,F){return typeof j=="object"&&j!==null&&j.key!=null?R(""+j.key):F.toString(36)}function U(j,F,ue,ae,he){var fe=typeof j;(fe==="undefined"||fe==="boolean")&&(j=null);var pe=!1;if(j===null)pe=!0;else switch(fe){case"string":case"number":pe=!0;break;case"object":switch(j.$$typeof){case i:case n:pe=!0}}if(pe)return pe=j,he=he(pe),j=ae===""?"."+$(pe,0):ae,_(he)?(ue="",j!=null&&(ue=j.replace(D,"$&/")+"/"),U(he,F,ue,"",function(_e){return _e})):he!=null&&(W(he)&&(he=H(he,ue+(!he.key||pe&&pe.key===he.key?"":(""+he.key).replace(D,"$&/")+"/")+j)),F.push(he)),1;if(pe=0,ae=ae===""?".":ae+":",_(j))for(var le=0;le<j.length;le++){fe=j[le];var ve=ae+$(fe,le);pe+=U(fe,F,ue,ve,he)}else if(ve=k(j),typeof ve=="function")for(j=ve.call(j),le=0;!(fe=j.next()).done;)fe=fe.value,ve=ae+$(fe,le++),pe+=U(fe,F,ue,ve,he);else if(fe==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return pe}function re(j,F,ue){if(j==null)return j;var ae=[],he=0;return U(j,ae,"","",function(fe){return F.call(ue,fe,he++)}),ae}function me(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(ue){(j._status===0||j._status===-1)&&(j._status=1,j._result=ue)},function(ue){(j._status===0||j._status===-1)&&(j._status=2,j._result=ue)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},V={transition:null},Z={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:V,ReactCurrentOwner:A};function X(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:re,forEach:function(j,F,ue){re(j,function(){F.apply(this,arguments)},ue)},count:function(j){var F=0;return re(j,function(){F++}),F},toArray:function(j){return re(j,function(F){return F})||[]},only:function(j){if(!W(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Se.Component=B,Se.Fragment=o,Se.Profiler=u,Se.PureComponent=T,Se.StrictMode=l,Se.Suspense=f,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Se.act=X,Se.cloneElement=function(j,F,ue){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ae=P({},j.props),he=j.key,fe=j.ref,pe=j._owner;if(F!=null){if(F.ref!==void 0&&(fe=F.ref,pe=A.current),F.key!==void 0&&(he=""+F.key),j.type&&j.type.defaultProps)var le=j.type.defaultProps;for(ve in F)N.call(F,ve)&&!Q.hasOwnProperty(ve)&&(ae[ve]=F[ve]===void 0&&le!==void 0?le[ve]:F[ve])}var ve=arguments.length-2;if(ve===1)ae.children=ue;else if(1<ve){le=Array(ve);for(var _e=0;_e<ve;_e++)le[_e]=arguments[_e+2];ae.children=le}return{$$typeof:i,type:j.type,key:he,ref:fe,props:ae,_owner:pe}},Se.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},Se.createElement=G,Se.createFactory=function(j){var F=G.bind(null,j);return F.type=j,F},Se.createRef=function(){return{current:null}},Se.forwardRef=function(j){return{$$typeof:g,render:j}},Se.isValidElement=W,Se.lazy=function(j){return{$$typeof:v,_payload:{_status:-1,_result:j},_init:me}},Se.memo=function(j,F){return{$$typeof:x,type:j,compare:F===void 0?null:F}},Se.startTransition=function(j){var F=V.transition;V.transition={};try{j()}finally{V.transition=F}},Se.unstable_act=X,Se.useCallback=function(j,F){return xe.current.useCallback(j,F)},Se.useContext=function(j){return xe.current.useContext(j)},Se.useDebugValue=function(){},Se.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},Se.useEffect=function(j,F){return xe.current.useEffect(j,F)},Se.useId=function(){return xe.current.useId()},Se.useImperativeHandle=function(j,F,ue){return xe.current.useImperativeHandle(j,F,ue)},Se.useInsertionEffect=function(j,F){return xe.current.useInsertionEffect(j,F)},Se.useLayoutEffect=function(j,F){return xe.current.useLayoutEffect(j,F)},Se.useMemo=function(j,F){return xe.current.useMemo(j,F)},Se.useReducer=function(j,F,ue){return xe.current.useReducer(j,F,ue)},Se.useRef=function(j){return xe.current.useRef(j)},Se.useState=function(j){return xe.current.useState(j)},Se.useSyncExternalStore=function(j,F,ue){return xe.current.useSyncExternalStore(j,F,ue)},Se.useTransition=function(){return xe.current.useTransition()},Se.version="18.3.1",Se}var Ld;function La(){return Ld||(Ld=1,na.exports=eh()),na.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function th(){if(Id)return ci;Id=1;var i=La(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(g,f,x){var v,y={},k=null,b=null;x!==void 0&&(k=""+x),f.key!==void 0&&(k=""+f.key),f.ref!==void 0&&(b=f.ref);for(v in f)l.call(f,v)&&!c.hasOwnProperty(v)&&(y[v]=f[v]);if(g&&g.defaultProps)for(v in f=g.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:n,type:g,key:k,ref:b,props:y,_owner:u.current}}return ci.Fragment=o,ci.jsx=p,ci.jsxs=p,ci}var Nd;function nh(){return Nd||(Nd=1,ta.exports=th()),ta.exports}var m=nh(),ye=La();const Te=ff(ye);var Lo={},ra={exports:{}},dt={},ia={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function rh(){return Ad||(Ad=1,function(i){function n(V,Z){var X=V.length;V.push(Z);e:for(;0<X;){var j=X-1>>>1,F=V[j];if(0<u(F,Z))V[j]=Z,V[X]=F,X=j;else break e}}function o(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var Z=V[0],X=V.pop();if(X!==Z){V[0]=X;e:for(var j=0,F=V.length,ue=F>>>1;j<ue;){var ae=2*(j+1)-1,he=V[ae],fe=ae+1,pe=V[fe];if(0>u(he,X))fe<F&&0>u(pe,he)?(V[j]=pe,V[fe]=X,j=fe):(V[j]=he,V[ae]=X,j=ae);else if(fe<F&&0>u(pe,X))V[j]=pe,V[fe]=X,j=fe;else break e}}return Z}function u(V,Z){var X=V.sortIndex-Z.sortIndex;return X!==0?X:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var f=[],x=[],v=1,y=null,k=3,b=!1,P=!1,I=!1,B=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var Z=o(x);Z!==null;){if(Z.callback===null)l(x);else if(Z.startTime<=V)l(x),Z.sortIndex=Z.expirationTime,n(f,Z);else break;Z=o(x)}}function _(V){if(I=!1,S(V),!P)if(o(f)!==null)P=!0,me(N);else{var Z=o(x);Z!==null&&xe(_,Z.startTime-V)}}function N(V,Z){P=!1,I&&(I=!1,M(G),G=-1),b=!0;var X=k;try{for(S(Z),y=o(f);y!==null&&(!(y.expirationTime>Z)||V&&!R());){var j=y.callback;if(typeof j=="function"){y.callback=null,k=y.priorityLevel;var F=j(y.expirationTime<=Z);Z=i.unstable_now(),typeof F=="function"?y.callback=F:y===o(f)&&l(f),S(Z)}else l(f);y=o(f)}if(y!==null)var ue=!0;else{var ae=o(x);ae!==null&&xe(_,ae.startTime-Z),ue=!1}return ue}finally{y=null,k=X,b=!1}}var A=!1,Q=null,G=-1,H=5,W=-1;function R(){return!(i.unstable_now()-W<H)}function D(){if(Q!==null){var V=i.unstable_now();W=V;var Z=!0;try{Z=Q(!0,V)}finally{Z?$():(A=!1,Q=null)}}else A=!1}var $;if(typeof T=="function")$=function(){T(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,re=U.port2;U.port1.onmessage=D,$=function(){re.postMessage(null)}}else $=function(){B(D,0)};function me(V){Q=V,A||(A=!0,$())}function xe(V,Z){G=B(function(){V(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){P||b||(P=!0,me(N))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(V){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var X=k;k=Z;try{return V()}finally{k=X}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=k;k=V;try{return Z()}finally{k=X}},i.unstable_scheduleCallback=function(V,Z,X){var j=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?j+X:j):X=j,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,V={id:v++,callback:Z,priorityLevel:V,startTime:X,expirationTime:F,sortIndex:-1},X>j?(V.sortIndex=X,n(x,V),o(f)===null&&V===o(x)&&(I?(M(G),G=-1):I=!0,xe(_,X-j))):(V.sortIndex=F,n(f,V),P||b||(P=!0,me(N))),V},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(V){var Z=k;return function(){var X=k;k=Z;try{return V.apply(this,arguments)}finally{k=X}}}}(oa)),oa}var Dd;function ih(){return Dd||(Dd=1,ia.exports=rh()),ia.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function oh(){if(Rd)return dt;Rd=1;var i=La(),n=ih();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function c(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function k(e){return f.call(y,e)?!0:f.call(v,e)?!1:x.test(e)?y[e]=!0:(v[e]=!0,!1)}function b(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,r,s){if(t===null||typeof t>"u"||b(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,s,a,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,T);B[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,r,s){var a=B.hasOwnProperty(t)?B[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,r,a,s)&&(r=null),s||a===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var _=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),A=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,j;function F(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ue=!1;function ae(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(L){var s=L}Reflect.construct(e,[],t)}else{try{t.call()}catch(L){s=L}e.call(t.prototype)}else{try{throw Error()}catch(L){s=L}e()}}catch(L){if(L&&s&&typeof L.stack=="string"){for(var a=L.stack.split(`
`),d=s.stack.split(`
`),h=a.length-1,w=d.length-1;1<=h&&0<=w&&a[h]!==d[w];)w--;for(;1<=h&&0<=w;h--,w--)if(a[h]!==d[w]){if(h!==1||w!==1)do if(h--,w--,0>w||a[h]!==d[w]){var E=`
`+a[h].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=h&&0<=w);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function he(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case A:return"Portal";case H:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:return(e.displayName||"Context")+".Consumer";case W:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){s=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qe(e){e._valueTracker||(e._valueTracker=_e(e))}function Fe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ve(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Pe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ke(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=le(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jt(e,t){t=t.checked,t!=null&&S(e,"checked",t,!1)}function Hn(e,t){jt(e,t);var r=le(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,r):t.hasOwnProperty("defaultValue")&&cs(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function cs(e,t,r){(t!=="number"||Pe(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Tr=Array.isArray;function Gn(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+le(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Tr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:le(r)}}function Ha(e,t){var r=le(t.value),s=le(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,qa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Ua(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Ya(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Ua(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var sp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vs=null,Wn=null,qn=null;function Xa(e){if(e=Xr(e)){if(typeof vs!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ui(t),vs(e.stateNode,e.type,t))}}function Qa(e){Wn?qn?qn.push(e):qn=[e]:Wn=e}function Ka(){if(Wn){var e=Wn,t=qn;if(qn=Wn=null,Xa(e),t)for(e=0;e<t.length;e++)Xa(t[e])}}function Za(e,t){return e(t)}function Ja(){}var ys=!1;function eu(e,t,r){if(ys)return e(t,r);ys=!0;try{return Za(e,t,r)}finally{ys=!1,(Wn!==null||qn!==null)&&(Ja(),Ka())}}function Pr(e,t){var r=e.stateNode;if(r===null)return null;var s=Ui(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var xs=!1;if(g)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{xs=!1}function lp(e,t,r,s,a,d,h,w,E){var L=Array.prototype.slice.call(arguments,3);try{t.apply(r,L)}catch(Y){this.onError(Y)}}var _r=!1,Ti=null,Ci=!1,ws=null,ap={onError:function(e){_r=!0,Ti=e}};function up(e,t,r,s,a,d,h,w,E){_r=!1,Ti=null,lp.apply(ap,arguments)}function cp(e,t,r,s,a,d,h,w,E){if(up.apply(this,arguments),_r){if(_r){var L=Ti;_r=!1,Ti=null}else throw Error(o(198));Ci||(Ci=!0,ws=L)}}function En(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(En(e)!==e)throw Error(o(188))}function dp(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var d=a.alternate;if(d===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===d.child){for(d=a.child;d;){if(d===r)return nu(a),e;if(d===s)return nu(a),t;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=a,s=d;else{for(var h=!1,w=a.child;w;){if(w===r){h=!0,r=a,s=d;break}if(w===s){h=!0,s=a,r=d;break}w=w.sibling}if(!h){for(w=d.child;w;){if(w===r){h=!0,r=d,s=a;break}if(w===s){h=!0,s=d,r=a;break}w=w.sibling}if(!h)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function ru(e){return e=dp(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=n.unstable_scheduleCallback,su=n.unstable_cancelCallback,fp=n.unstable_shouldYield,pp=n.unstable_requestPaint,Be=n.unstable_now,mp=n.unstable_getCurrentPriorityLevel,Ss=n.unstable_ImmediatePriority,lu=n.unstable_UserBlockingPriority,ji=n.unstable_NormalPriority,hp=n.unstable_LowPriority,au=n.unstable_IdlePriority,Pi=null,Dt=null;function gp(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:xp,vp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(vp(e)/yp|0)|0}var zi=64,_i=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,d=e.pingedLanes,h=r&268435455;if(h!==0){var w=h&~a;w!==0?s=Mr(w):(d&=h,d!==0&&(s=Mr(d)))}else h=r&~a,h!==0?s=Mr(h):d!==0&&(s=Mr(d));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,d=t&-t,a>=d||a===16&&(d&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Pt(t),a=1<<r,s|=e[r],t&=~a;return s}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Pt(d),w=1<<h,E=a[h];E===-1?(!(w&r)||w&s)&&(a[h]=wp(w,t)):E<=t&&(e.expiredLanes|=w),d&=~w}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function bs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Or(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=r}function kp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Pt(r),d=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~d}}function Es(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Pt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var je=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,Ts,fu,pu,mu,Cs=!1,Oi=[],nn=null,rn=null,on=null,Lr=new Map,Ir=new Map,sn=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function Nr(e,t,r,s,a,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[a]},t!==null&&(t=Xr(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ep(e,t,r,s,a){switch(t){case"focusin":return nn=Nr(nn,e,t,r,s,a),!0;case"dragenter":return rn=Nr(rn,e,t,r,s,a),!0;case"mouseover":return on=Nr(on,e,t,r,s,a),!0;case"pointerover":var d=a.pointerId;return Lr.set(d,Nr(Lr.get(d)||null,e,t,r,s,a)),!0;case"gotpointercapture":return d=a.pointerId,Ir.set(d,Nr(Ir.get(d)||null,e,t,r,s,a)),!0}return!1}function gu(e){var t=Tn(e.target);if(t!==null){var r=En(t);if(r!==null){if(t=r.tag,t===13){if(t=tu(r),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);hs=s,r.target.dispatchEvent(s),hs=null}else return t=Xr(r),t!==null&&Ts(t),e.blockedOn=r,!1;t.shift()}return!0}function vu(e,t,r){Li(e)&&r.delete(t)}function Tp(){Cs=!1,nn!==null&&Li(nn)&&(nn=null),rn!==null&&Li(rn)&&(rn=null),on!==null&&Li(on)&&(on=null),Lr.forEach(vu),Ir.forEach(vu)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Tp)))}function Dr(e){function t(a){return Ar(a,e)}if(0<Oi.length){Ar(Oi[0],e);for(var r=1;r<Oi.length;r++){var s=Oi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(nn!==null&&Ar(nn,e),rn!==null&&Ar(rn,e),on!==null&&Ar(on,e),Lr.forEach(t),Ir.forEach(t),r=0;r<sn.length;r++)s=sn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<sn.length&&(r=sn[0],r.blockedOn===null);)gu(r),r.blockedOn===null&&sn.shift()}var Un=_.ReactCurrentBatchConfig,Ii=!0;function Cp(e,t,r,s){var a=je,d=Un.transition;Un.transition=null;try{je=1,js(e,t,r,s)}finally{je=a,Un.transition=d}}function jp(e,t,r,s){var a=je,d=Un.transition;Un.transition=null;try{je=4,js(e,t,r,s)}finally{je=a,Un.transition=d}}function js(e,t,r,s){if(Ii){var a=Ps(e,t,r,s);if(a===null)Ws(e,t,s,Ni,r),hu(e,s);else if(Ep(a,e,t,r,s))s.stopPropagation();else if(hu(e,s),t&4&&-1<bp.indexOf(e)){for(;a!==null;){var d=Xr(a);if(d!==null&&du(d),d=Ps(e,t,r,s),d===null&&Ws(e,t,s,Ni,r),d===a)break;a=d}a!==null&&s.stopPropagation()}else Ws(e,t,s,null,r)}}var Ni=null;function Ps(e,t,r,s){if(Ni=null,e=gs(s),e=Tn(e),e!==null)if(t=En(e),t===null)e=null;else if(r=t.tag,r===13){if(e=tu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Ss:return 1;case lu:return 4;case ji:case hp:return 16;case au:return 536870912;default:return 16}default:return 16}}var ln=null,zs=null,Ai=null;function xu(){if(Ai)return Ai;var e,t=zs,r=t.length,s,a="value"in ln?ln.value:ln.textContent,d=a.length;for(e=0;e<r&&t[e]===a[e];e++);var h=r-e;for(s=1;s<=h&&t[r-s]===a[d-s];s++);return Ai=a.slice(e,1<s?1-s:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function wu(){return!1}function pt(e){function t(r,s,a,d,h){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ri:wu,this.isPropagationStopped=wu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=pt(Yn),Rr=X({},Yn,{view:0,detail:0}),Pp=pt(Rr),Ms,Os,Fr,Fi=X({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Ms=e.screenX-Fr.screenX,Os=e.screenY-Fr.screenY):Os=Ms=0,Fr=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),Su=pt(Fi),zp=X({},Fi,{dataTransfer:0}),_p=pt(zp),Mp=X({},Rr,{relatedTarget:0}),Ls=pt(Mp),Op=X({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=pt(Op),Ip=X({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=pt(Ip),Ap=X({},Yn,{data:0}),ku=pt(Ap),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function Is(){return Bp}var $p=X({},Rr,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=pt($p),Hp=X({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=pt(Hp),Gp=X({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Wp=pt(Gp),qp=X({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=pt(qp),Yp=X({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xp=pt(Yp),Qp=[9,13,27,32],Ns=g&&"CompositionEvent"in window,Br=null;g&&"documentMode"in document&&(Br=document.documentMode);var Kp=g&&"TextEvent"in window&&!Br,Eu=g&&(!Ns||Br&&8<Br&&11>=Br),Tu=" ",Cu=!1;function ju(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Zp(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(Cu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Cu?null:e;default:return null}}function Jp(e,t){if(Xn)return e==="compositionend"||!Ns&&ju(e,t)?(e=xu(),Ai=zs=ln=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!em[e.type]:t==="textarea"}function _u(e,t,r,s){Qa(s),t=Gi(t,"onChange"),0<t.length&&(r=new _s("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var $r=null,Vr=null;function tm(e){Yu(e,0)}function Bi(e){var t=er(e);if(Fe(t))return e}function nm(e,t){if(e==="change")return t}var Mu=!1;if(g){var As;if(g){var Ds="oninput"in document;if(!Ds){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Ds=typeof Ou.oninput=="function"}As=Ds}else As=!1;Mu=As&&(!document.documentMode||9<document.documentMode)}function Lu(){$r&&($r.detachEvent("onpropertychange",Iu),Vr=$r=null)}function Iu(e){if(e.propertyName==="value"&&Bi(Vr)){var t=[];_u(t,Vr,e,gs(e)),eu(tm,t)}}function rm(e,t,r){e==="focusin"?(Lu(),$r=t,Vr=r,$r.attachEvent("onpropertychange",Iu)):e==="focusout"&&Lu()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Vr)}function om(e,t){if(e==="click")return Bi(t)}function sm(e,t){if(e==="input"||e==="change")return Bi(t)}function lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:lm;function Hr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!f.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var r=Nu(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nu(r)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(){for(var e=window,t=Pe();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pe(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function am(e){var t=Ru(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Du(r.ownerDocument.documentElement,r)){if(s!==null&&Rs(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,d=Math.min(s.start,a);s=s.end===void 0?d:Math.min(s.end,a),!e.extend&&d>s&&(a=s,s=d,d=a),a=Au(r,d);var h=Au(r,s);a&&h&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var um=g&&"documentMode"in document&&11>=document.documentMode,Qn=null,Fs=null,Gr=null,Bs=!1;function Fu(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bs||Qn==null||Qn!==Pe(s)||(s=Qn,"selectionStart"in s&&Rs(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gr&&Hr(Gr,s)||(Gr=s,s=Gi(Fs,"onSelect"),0<s.length&&(t=new _s("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Qn)))}function $i(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Kn={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},$s={},Bu={};g&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Vi(e){if($s[e])return $s[e];if(!Kn[e])return e;var t=Kn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bu)return $s[e]=t[r];return e}var $u=Vi("animationend"),Vu=Vi("animationiteration"),Hu=Vi("animationstart"),Gu=Vi("transitionend"),Wu=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){Wu.set(e,t),c(t,[e])}for(var Vs=0;Vs<qu.length;Vs++){var Hs=qu[Vs],cm=Hs.toLowerCase(),dm=Hs[0].toUpperCase()+Hs.slice(1);an(cm,"on"+dm)}an($u,"onAnimationEnd"),an(Vu,"onAnimationIteration"),an(Hu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(Gu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Uu(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,cp(s,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var h=s.length-1;0<=h;h--){var w=s[h],E=w.instance,L=w.currentTarget;if(w=w.listener,E!==d&&a.isPropagationStopped())break e;Uu(a,w,L),d=E}else for(h=0;h<s.length;h++){if(w=s[h],E=w.instance,L=w.currentTarget,w=w.listener,E!==d&&a.isPropagationStopped())break e;Uu(a,w,L),d=E}}}if(Ci)throw e=ws,Ci=!1,ws=null,e}function Oe(e,t){var r=t[Ks];r===void 0&&(r=t[Ks]=new Set);var s=e+"__bubble";r.has(s)||(Xu(t,e,2,!1),r.add(s))}function Gs(e,t,r){var s=0;t&&(s|=4),Xu(r,e,s,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Hi]){e[Hi]=!0,l.forEach(function(r){r!=="selectionchange"&&(fm.has(r)||Gs(r,!1,e),Gs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Gs("selectionchange",!1,t))}}function Xu(e,t,r,s){switch(yu(t)){case 1:var a=Cp;break;case 4:a=jp;break;default:a=js}r=a.bind(null,t,r,e),a=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ws(e,t,r,s,a){var d=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var w=s.stateNode.containerInfo;if(w===a||w.nodeType===8&&w.parentNode===a)break;if(h===4)for(h=s.return;h!==null;){var E=h.tag;if((E===3||E===4)&&(E=h.stateNode.containerInfo,E===a||E.nodeType===8&&E.parentNode===a))return;h=h.return}for(;w!==null;){if(h=Tn(w),h===null)return;if(E=h.tag,E===5||E===6){s=d=h;continue e}w=w.parentNode}}s=s.return}eu(function(){var L=d,Y=gs(r),K=[];e:{var q=Wu.get(e);if(q!==void 0){var te=_s,ie=e;switch(e){case"keypress":if(Di(r)===0)break e;case"keydown":case"keyup":te=Vp;break;case"focusin":ie="focus",te=Ls;break;case"focusout":ie="blur",te=Ls;break;case"beforeblur":case"afterblur":te=Ls;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Wp;break;case $u:case Vu:case Hu:te=Lp;break;case Gu:te=Up;break;case"scroll":te=Pp;break;case"wheel":te=Xp;break;case"copy":case"cut":case"paste":te=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=bu}var oe=(t&4)!==0,$e=!oe&&e==="scroll",z=oe?q!==null?q+"Capture":null:q;oe=[];for(var C=L,O;C!==null;){O=C;var J=O.stateNode;if(O.tag===5&&J!==null&&(O=J,z!==null&&(J=Pr(C,z),J!=null&&oe.push(Ur(C,J,O)))),$e)break;C=C.return}0<oe.length&&(q=new te(q,ie,null,r,Y),K.push({event:q,listeners:oe}))}}if(!(t&7)){e:{if(q=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",q&&r!==hs&&(ie=r.relatedTarget||r.fromElement)&&(Tn(ie)||ie[Gt]))break e;if((te||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,te?(ie=r.relatedTarget||r.toElement,te=L,ie=ie?Tn(ie):null,ie!==null&&($e=En(ie),ie!==$e||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=L),te!==ie)){if(oe=Su,J="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=bu,J="onPointerLeave",z="onPointerEnter",C="pointer"),$e=te==null?q:er(te),O=ie==null?q:er(ie),q=new oe(J,C+"leave",te,r,Y),q.target=$e,q.relatedTarget=O,J=null,Tn(Y)===L&&(oe=new oe(z,C+"enter",ie,r,Y),oe.target=O,oe.relatedTarget=$e,J=oe),$e=J,te&&ie)t:{for(oe=te,z=ie,C=0,O=oe;O;O=Zn(O))C++;for(O=0,J=z;J;J=Zn(J))O++;for(;0<C-O;)oe=Zn(oe),C--;for(;0<O-C;)z=Zn(z),O--;for(;C--;){if(oe===z||z!==null&&oe===z.alternate)break t;oe=Zn(oe),z=Zn(z)}oe=null}else oe=null;te!==null&&Qu(K,q,te,oe,!1),ie!==null&&$e!==null&&Qu(K,$e,ie,oe,!0)}}e:{if(q=L?er(L):window,te=q.nodeName&&q.nodeName.toLowerCase(),te==="select"||te==="input"&&q.type==="file")var se=nm;else if(zu(q))if(Mu)se=sm;else{se=im;var ce=rm}else(te=q.nodeName)&&te.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(se=om);if(se&&(se=se(e,L))){_u(K,se,r,Y);break e}ce&&ce(e,q,L),e==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&cs(q,"number",q.value)}switch(ce=L?er(L):window,e){case"focusin":(zu(ce)||ce.contentEditable==="true")&&(Qn=ce,Fs=L,Gr=null);break;case"focusout":Gr=Fs=Qn=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Fu(K,r,Y);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Fu(K,r,Y)}var de;if(Ns)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Xn?ju(e,r)&&(ge="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ge="onCompositionStart");ge&&(Eu&&r.locale!=="ko"&&(Xn||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Xn&&(de=xu()):(ln=Y,zs="value"in ln?ln.value:ln.textContent,Xn=!0)),ce=Gi(L,ge),0<ce.length&&(ge=new ku(ge,e,null,r,Y),K.push({event:ge,listeners:ce}),de?ge.data=de:(de=Pu(r),de!==null&&(ge.data=de)))),(de=Kp?Zp(e,r):Jp(e,r))&&(L=Gi(L,"onBeforeInput"),0<L.length&&(Y=new ku("onBeforeInput","beforeinput",null,r,Y),K.push({event:Y,listeners:L}),Y.data=de))}Yu(K,t)})}function Ur(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gi(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,d=a.stateNode;a.tag===5&&d!==null&&(a=d,d=Pr(e,r),d!=null&&s.unshift(Ur(e,d,a)),d=Pr(e,t),d!=null&&s.push(Ur(e,d,a))),e=e.return}return s}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,r,s,a){for(var d=t._reactName,h=[];r!==null&&r!==s;){var w=r,E=w.alternate,L=w.stateNode;if(E!==null&&E===s)break;w.tag===5&&L!==null&&(w=L,a?(E=Pr(r,d),E!=null&&h.unshift(Ur(r,E,w))):a||(E=Pr(r,d),E!=null&&h.push(Ur(r,E,w)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var pm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(pm,`
`).replace(mm,"")}function Wi(e,t,r){if(t=Ku(t),Ku(e)!==t&&r)throw Error(o(425))}function qi(){}var qs=null,Us=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(vm)}:Xs;function vm(e){setTimeout(function(){throw e})}function Qs(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Dr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Dr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Jn,Yr="__reactProps$"+Jn,Gt="__reactContainer$"+Jn,Ks="__reactEvents$"+Jn,ym="__reactListeners$"+Jn,xm="__reactHandles$"+Jn;function Tn(e){var t=e[Rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Gt]||r[Rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ju(e);e!==null;){if(r=e[Rt])return r;e=Ju(e)}return t}e=r,r=e.parentNode}return null}function Xr(e){return e=e[Rt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ui(e){return e[Yr]||null}var Zs=[],tr=-1;function cn(e){return{current:e}}function Le(e){0>tr||(e.current=Zs[tr],Zs[tr]=null,tr--)}function Me(e,t){tr++,Zs[tr]=e.current,e.current=t}var dn={},et=cn(dn),st=cn(!1),Cn=dn;function nr(e,t){var r=e.type.contextTypes;if(!r)return dn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},d;for(d in r)a[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function lt(e){return e=e.childContextTypes,e!=null}function Yi(){Le(st),Le(et)}function ec(e,t,r){if(et.current!==dn)throw Error(o(168));Me(et,t),Me(st,r)}function tc(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(o(108,pe(e)||"Unknown",a));return X({},r,s)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=et.current,Me(et,e),Me(st,st.current),!0}function nc(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=tc(e,t,Cn),s.__reactInternalMemoizedMergedChildContext=e,Le(st),Le(et),Me(et,e)):Le(st),Me(st,r)}var Wt=null,Qi=!1,Js=!1;function rc(e){Wt===null?Wt=[e]:Wt.push(e)}function wm(e){Qi=!0,rc(e)}function fn(){if(!Js&&Wt!==null){Js=!0;var e=0,t=je;try{var r=Wt;for(je=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Wt=null,Qi=!1}catch(a){throw Wt!==null&&(Wt=Wt.slice(e+1)),ou(Ss,fn),a}finally{je=t,Js=!1}}return null}var rr=[],ir=0,Ki=null,Zi=0,wt=[],St=0,jn=null,qt=1,Ut="";function Pn(e,t){rr[ir++]=Zi,rr[ir++]=Ki,Ki=e,Zi=t}function ic(e,t,r){wt[St++]=qt,wt[St++]=Ut,wt[St++]=jn,jn=e;var s=qt;e=Ut;var a=32-Pt(s)-1;s&=~(1<<a),r+=1;var d=32-Pt(t)+a;if(30<d){var h=a-a%5;d=(s&(1<<h)-1).toString(32),s>>=h,a-=h,qt=1<<32-Pt(t)+a|r<<a|s,Ut=d+e}else qt=1<<d|r<<a|s,Ut=e}function el(e){e.return!==null&&(Pn(e,1),ic(e,1,0))}function tl(e){for(;e===Ki;)Ki=rr[--ir],rr[ir]=null,Zi=rr[--ir],rr[ir]=null;for(;e===jn;)jn=wt[--St],wt[St]=null,Ut=wt[--St],wt[St]=null,qt=wt[--St],wt[St]=null}var mt=null,ht=null,Ne=!1,_t=null;function oc(e,t){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function sc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,ht=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jn!==null?{id:qt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,mt=e,ht=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(Ne){var t=ht;if(t){var r=t;if(!sc(e,t)){if(nl(e))throw Error(o(418));t=un(r.nextSibling);var s=mt;t&&sc(e,t)?oc(s,r):(e.flags=e.flags&-4097|2,Ne=!1,mt=e)}}else{if(nl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,mt=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function Ji(e){if(e!==mt)return!1;if(!Ne)return lc(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=ht)){if(nl(e))throw ac(),Error(o(418));for(;t;)oc(e,t),t=un(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ht=un(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=mt?un(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=ht;e;)e=un(e.nextSibling)}function or(){ht=mt=null,Ne=!1}function il(e){_t===null?_t=[e]:_t.push(e)}var Sm=_.ReactCurrentBatchConfig;function Qr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var a=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var w=a.refs;h===null?delete w[d]:w[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function cc(e){function t(z,C){if(e){var O=z.deletions;O===null?(z.deletions=[C],z.flags|=16):O.push(C)}}function r(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function s(z,C){for(z=new Map;C!==null;)C.key!==null?z.set(C.key,C):z.set(C.index,C),C=C.sibling;return z}function a(z,C){return z=wn(z,C),z.index=0,z.sibling=null,z}function d(z,C,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<C?(z.flags|=2,C):O):(z.flags|=2,C)):(z.flags|=1048576,C)}function h(z){return e&&z.alternate===null&&(z.flags|=2),z}function w(z,C,O,J){return C===null||C.tag!==6?(C=Xl(O,z.mode,J),C.return=z,C):(C=a(C,O),C.return=z,C)}function E(z,C,O,J){var se=O.type;return se===Q?Y(z,C,O.props.children,J,O.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&uc(se)===C.type)?(J=a(C,O.props),J.ref=Qr(z,C,O),J.return=z,J):(J=To(O.type,O.key,O.props,null,z.mode,J),J.ref=Qr(z,C,O),J.return=z,J)}function L(z,C,O,J){return C===null||C.tag!==4||C.stateNode.containerInfo!==O.containerInfo||C.stateNode.implementation!==O.implementation?(C=Ql(O,z.mode,J),C.return=z,C):(C=a(C,O.children||[]),C.return=z,C)}function Y(z,C,O,J,se){return C===null||C.tag!==7?(C=An(O,z.mode,J,se),C.return=z,C):(C=a(C,O),C.return=z,C)}function K(z,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Xl(""+C,z.mode,O),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case N:return O=To(C.type,C.key,C.props,null,z.mode,O),O.ref=Qr(z,null,C),O.return=z,O;case A:return C=Ql(C,z.mode,O),C.return=z,C;case me:var J=C._init;return K(z,J(C._payload),O)}if(Tr(C)||Z(C))return C=An(C,z.mode,O,null),C.return=z,C;eo(z,C)}return null}function q(z,C,O,J){var se=C!==null?C.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return se!==null?null:w(z,C,""+O,J);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return O.key===se?E(z,C,O,J):null;case A:return O.key===se?L(z,C,O,J):null;case me:return se=O._init,q(z,C,se(O._payload),J)}if(Tr(O)||Z(O))return se!==null?null:Y(z,C,O,J,null);eo(z,O)}return null}function te(z,C,O,J,se){if(typeof J=="string"&&J!==""||typeof J=="number")return z=z.get(O)||null,w(C,z,""+J,se);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return z=z.get(J.key===null?O:J.key)||null,E(C,z,J,se);case A:return z=z.get(J.key===null?O:J.key)||null,L(C,z,J,se);case me:var ce=J._init;return te(z,C,O,ce(J._payload),se)}if(Tr(J)||Z(J))return z=z.get(O)||null,Y(C,z,J,se,null);eo(C,J)}return null}function ie(z,C,O,J){for(var se=null,ce=null,de=C,ge=C=0,Xe=null;de!==null&&ge<O.length;ge++){de.index>ge?(Xe=de,de=null):Xe=de.sibling;var Ee=q(z,de,O[ge],J);if(Ee===null){de===null&&(de=Xe);break}e&&de&&Ee.alternate===null&&t(z,de),C=d(Ee,C,ge),ce===null?se=Ee:ce.sibling=Ee,ce=Ee,de=Xe}if(ge===O.length)return r(z,de),Ne&&Pn(z,ge),se;if(de===null){for(;ge<O.length;ge++)de=K(z,O[ge],J),de!==null&&(C=d(de,C,ge),ce===null?se=de:ce.sibling=de,ce=de);return Ne&&Pn(z,ge),se}for(de=s(z,de);ge<O.length;ge++)Xe=te(de,z,ge,O[ge],J),Xe!==null&&(e&&Xe.alternate!==null&&de.delete(Xe.key===null?ge:Xe.key),C=d(Xe,C,ge),ce===null?se=Xe:ce.sibling=Xe,ce=Xe);return e&&de.forEach(function(Sn){return t(z,Sn)}),Ne&&Pn(z,ge),se}function oe(z,C,O,J){var se=Z(O);if(typeof se!="function")throw Error(o(150));if(O=se.call(O),O==null)throw Error(o(151));for(var ce=se=null,de=C,ge=C=0,Xe=null,Ee=O.next();de!==null&&!Ee.done;ge++,Ee=O.next()){de.index>ge?(Xe=de,de=null):Xe=de.sibling;var Sn=q(z,de,Ee.value,J);if(Sn===null){de===null&&(de=Xe);break}e&&de&&Sn.alternate===null&&t(z,de),C=d(Sn,C,ge),ce===null?se=Sn:ce.sibling=Sn,ce=Sn,de=Xe}if(Ee.done)return r(z,de),Ne&&Pn(z,ge),se;if(de===null){for(;!Ee.done;ge++,Ee=O.next())Ee=K(z,Ee.value,J),Ee!==null&&(C=d(Ee,C,ge),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return Ne&&Pn(z,ge),se}for(de=s(z,de);!Ee.done;ge++,Ee=O.next())Ee=te(de,z,ge,Ee.value,J),Ee!==null&&(e&&Ee.alternate!==null&&de.delete(Ee.key===null?ge:Ee.key),C=d(Ee,C,ge),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return e&&de.forEach(function(Jm){return t(z,Jm)}),Ne&&Pn(z,ge),se}function $e(z,C,O,J){if(typeof O=="object"&&O!==null&&O.type===Q&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case N:e:{for(var se=O.key,ce=C;ce!==null;){if(ce.key===se){if(se=O.type,se===Q){if(ce.tag===7){r(z,ce.sibling),C=a(ce,O.props.children),C.return=z,z=C;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&uc(se)===ce.type){r(z,ce.sibling),C=a(ce,O.props),C.ref=Qr(z,ce,O),C.return=z,z=C;break e}r(z,ce);break}else t(z,ce);ce=ce.sibling}O.type===Q?(C=An(O.props.children,z.mode,J,O.key),C.return=z,z=C):(J=To(O.type,O.key,O.props,null,z.mode,J),J.ref=Qr(z,C,O),J.return=z,z=J)}return h(z);case A:e:{for(ce=O.key;C!==null;){if(C.key===ce)if(C.tag===4&&C.stateNode.containerInfo===O.containerInfo&&C.stateNode.implementation===O.implementation){r(z,C.sibling),C=a(C,O.children||[]),C.return=z,z=C;break e}else{r(z,C);break}else t(z,C);C=C.sibling}C=Ql(O,z.mode,J),C.return=z,z=C}return h(z);case me:return ce=O._init,$e(z,C,ce(O._payload),J)}if(Tr(O))return ie(z,C,O,J);if(Z(O))return oe(z,C,O,J);eo(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,C!==null&&C.tag===6?(r(z,C.sibling),C=a(C,O),C.return=z,z=C):(r(z,C),C=Xl(O,z.mode,J),C.return=z,z=C),h(z)):r(z,C)}return $e}var sr=cc(!0),dc=cc(!1),to=cn(null),no=null,lr=null,ol=null;function sl(){ol=lr=no=null}function ll(e){var t=to.current;Le(to),e._currentValue=t}function al(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function ar(e,t){no=e,ol=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(no===null)throw Error(o(308));lr=e,no.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var zn=null;function ul(e){zn===null?zn=[e]:zn.push(e)}function fc(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,ul(t)):(r.next=a.next,a.next=r),t.interleaved=r,Yt(e,s)}function Yt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pn=!1;function cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ke&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Yt(e,r)}return a=s.interleaved,a===null?(t.next=t,ul(s)):(t.next=a.next,a.next=t),s.interleaved=t,Yt(e,r)}function ro(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Es(e,r)}}function mc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?a=d=h:d=d.next=h,r=r.next}while(r!==null);d===null?a=d=t:d=d.next=t}else a=d=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function io(e,t,r,s){var a=e.updateQueue;pn=!1;var d=a.firstBaseUpdate,h=a.lastBaseUpdate,w=a.shared.pending;if(w!==null){a.shared.pending=null;var E=w,L=E.next;E.next=null,h===null?d=L:h.next=L,h=E;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==h&&(w===null?Y.firstBaseUpdate=L:w.next=L,Y.lastBaseUpdate=E))}if(d!==null){var K=a.baseState;h=0,Y=L=E=null,w=d;do{var q=w.lane,te=w.eventTime;if((s&q)===q){Y!==null&&(Y=Y.next={eventTime:te,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ie=e,oe=w;switch(q=t,te=r,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){K=ie.call(te,K,q);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,q=typeof ie=="function"?ie.call(te,K,q):ie,q==null)break e;K=X({},K,q);break e;case 2:pn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,q=a.effects,q===null?a.effects=[w]:q.push(w))}else te={eventTime:te,lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(L=Y=te,E=K):Y=Y.next=te,h|=q;if(w=w.next,w===null){if(w=a.shared.pending,w===null)break;q=w,w=q.next,q.next=null,a.lastBaseUpdate=q,a.shared.pending=null}}while(!0);if(Y===null&&(E=K),a.baseState=E,a.firstBaseUpdate=L,a.lastBaseUpdate=Y,t=a.shared.interleaved,t!==null){a=t;do h|=a.lane,a=a.next;while(a!==t)}else d===null&&(a.shared.lanes=0);On|=h,e.lanes=h,e.memoizedState=K}}function hc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(o(191,a));a.call(s)}}}var Kr={},Ft=cn(Kr),Zr=cn(Kr),Jr=cn(Kr);function _n(e){if(e===Kr)throw Error(o(174));return e}function dl(e,t){switch(Me(Jr,t),Me(Zr,e),Me(Ft,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}Le(Ft),Me(Ft,t)}function ur(){Le(Ft),Le(Zr),Le(Jr)}function gc(e){_n(Jr.current);var t=_n(Ft.current),r=fs(t,e.type);t!==r&&(Me(Zr,e),Me(Ft,r))}function fl(e){Zr.current===e&&(Le(Ft),Le(Zr))}var Ae=cn(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function ml(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var so=_.ReactCurrentDispatcher,hl=_.ReactCurrentBatchConfig,Mn=0,De=null,Ge=null,Ue=null,lo=!1,ei=!1,ti=0,km=0;function tt(){throw Error(o(321))}function gl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function vl(e,t,r,s,a,d){if(Mn=d,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,so.current=e===null||e.memoizedState===null?Cm:jm,e=r(s,a),ei){d=0;do{if(ei=!1,ti=0,25<=d)throw Error(o(301));d+=1,Ue=Ge=null,t.updateQueue=null,so.current=Pm,e=r(s,a)}while(ei)}if(so.current=co,t=Ge!==null&&Ge.next!==null,Mn=0,Ue=Ge=De=null,lo=!1,t)throw Error(o(300));return e}function yl(){var e=ti!==0;return ti=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function bt(){if(Ge===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ue===null?De.memoizedState:Ue.next;if(t!==null)Ue=t,Ge=e;else{if(e===null)throw Error(o(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ue===null?De.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ni(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=bt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Ge,a=s.baseQueue,d=r.pending;if(d!==null){if(a!==null){var h=a.next;a.next=d.next,d.next=h}s.baseQueue=a=d,r.pending=null}if(a!==null){d=a.next,s=s.baseState;var w=h=null,E=null,L=d;do{var Y=L.lane;if((Mn&Y)===Y)E!==null&&(E=E.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),s=L.hasEagerState?L.eagerState:e(s,L.action);else{var K={lane:Y,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};E===null?(w=E=K,h=s):E=E.next=K,De.lanes|=Y,On|=Y}L=L.next}while(L!==null&&L!==d);E===null?h=s:E.next=w,zt(s,t.memoizedState)||(at=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=E,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do d=a.lane,De.lanes|=d,On|=d,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wl(e){var t=bt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,d=t.memoizedState;if(a!==null){r.pending=null;var h=a=a.next;do d=e(d,h.action),h=h.next;while(h!==a);zt(d,t.memoizedState)||(at=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,s]}function vc(){}function yc(e,t){var r=De,s=bt(),a=t(),d=!zt(s.memoizedState,a);if(d&&(s.memoizedState=a,at=!0),s=s.queue,Sl(Sc.bind(null,r,s,e),[e]),s.getSnapshot!==t||d||Ue!==null&&Ue.memoizedState.tag&1){if(r.flags|=2048,ri(9,wc.bind(null,r,s,a,t),void 0,null),Ye===null)throw Error(o(349));Mn&30||xc(r,t,a)}return a}function xc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wc(e,t,r,s){t.value=r,t.getSnapshot=s,kc(t)&&bc(e)}function Sc(e,t,r){return r(function(){kc(t)&&bc(e)})}function kc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function bc(e){var t=Yt(e,1);t!==null&&It(t,e,1,-1)}function Ec(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Tm.bind(null,De,e),[t.memoizedState,e]}function ri(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Tc(){return bt().memoizedState}function ao(e,t,r,s){var a=Bt();De.flags|=e,a.memoizedState=ri(1|t,r,void 0,s===void 0?null:s)}function uo(e,t,r,s){var a=bt();s=s===void 0?null:s;var d=void 0;if(Ge!==null){var h=Ge.memoizedState;if(d=h.destroy,s!==null&&gl(s,h.deps)){a.memoizedState=ri(t,r,d,s);return}}De.flags|=e,a.memoizedState=ri(1|t,r,d,s)}function Cc(e,t){return ao(8390656,8,e,t)}function Sl(e,t){return uo(2048,8,e,t)}function jc(e,t){return uo(4,2,e,t)}function Pc(e,t){return uo(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,r){return r=r!=null?r.concat([e]):null,uo(4,4,zc.bind(null,t,e),r)}function kl(){}function Mc(e,t){var r=bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&gl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Oc(e,t){var r=bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&gl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Lc(e,t,r){return Mn&21?(zt(r,t)||(r=uu(),De.lanes|=r,On|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=r)}function bm(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var s=hl.transition;hl.transition={};try{e(!1),t()}finally{je=r,hl.transition=s}}function Ic(){return bt().memoizedState}function Em(e,t,r){var s=yn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Nc(e))Ac(t,r);else if(r=fc(e,t,r,s),r!==null){var a=ot();It(r,e,s,a),Dc(r,t,s)}}function Tm(e,t,r){var s=yn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Ac(t,a);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,w=d(h,r);if(a.hasEagerState=!0,a.eagerState=w,zt(w,h)){var E=t.interleaved;E===null?(a.next=a,ul(t)):(a.next=E.next,E.next=a),t.interleaved=a;return}}catch{}finally{}r=fc(e,t,a,s),r!==null&&(a=ot(),It(r,e,s,a),Dc(r,t,s))}}function Nc(e){var t=e.alternate;return e===De||t!==null&&t===De}function Ac(e,t){ei=lo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dc(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Es(e,r)}}var co={readContext:kt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Cm={readContext:kt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Cc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ao(4194308,4,zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Bt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Em.bind(null,De,e),[s.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:kl,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=bm.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=De,a=Bt();if(Ne){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ye===null)throw Error(o(349));Mn&30||xc(s,t,r)}a.memoizedState=r;var d={value:r,getSnapshot:t};return a.queue=d,Cc(Sc.bind(null,s,d,e),[e]),s.flags|=2048,ri(9,wc.bind(null,s,d,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ye.identifierPrefix;if(Ne){var r=Ut,s=qt;r=(s&~(1<<32-Pt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=ti++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=km++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jm={readContext:kt,useCallback:Mc,useContext:kt,useEffect:Sl,useImperativeHandle:_c,useInsertionEffect:jc,useLayoutEffect:Pc,useMemo:Oc,useReducer:xl,useRef:Tc,useState:function(){return xl(ni)},useDebugValue:kl,useDeferredValue:function(e){var t=bt();return Lc(t,Ge.memoizedState,e)},useTransition:function(){var e=xl(ni)[0],t=bt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Ic,unstable_isNewReconciler:!1},Pm={readContext:kt,useCallback:Mc,useContext:kt,useEffect:Sl,useImperativeHandle:_c,useInsertionEffect:jc,useLayoutEffect:Pc,useMemo:Oc,useReducer:wl,useRef:Tc,useState:function(){return wl(ni)},useDebugValue:kl,useDeferredValue:function(e){var t=bt();return Ge===null?t.memoizedState=e:Lc(t,Ge.memoizedState,e)},useTransition:function(){var e=wl(ni)[0],t=bt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Ic,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function bl(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var fo={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ot(),a=yn(e),d=Xt(s,a);d.payload=t,r!=null&&(d.callback=r),t=mn(e,d,a),t!==null&&(It(t,e,a,s),ro(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ot(),a=yn(e),d=Xt(s,a);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=mn(e,d,a),t!==null&&(It(t,e,a,s),ro(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),s=yn(e),a=Xt(r,s);a.tag=2,t!=null&&(a.callback=t),t=mn(e,a,s),t!==null&&(It(t,e,s,r),ro(t,e,s))}};function Rc(e,t,r,s,a,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,h):t.prototype&&t.prototype.isPureReactComponent?!Hr(r,s)||!Hr(a,d):!0}function Fc(e,t,r){var s=!1,a=dn,d=t.contextType;return typeof d=="object"&&d!==null?d=kt(d):(a=lt(t)?Cn:et.current,s=t.contextTypes,d=(s=s!=null)?nr(e,a):dn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=d),t}function Bc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function El(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},cl(e);var d=t.contextType;typeof d=="object"&&d!==null?a.context=kt(d):(d=lt(t)?Cn:et.current,a.context=nr(e,d)),a.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(bl(e,t,d,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&fo.enqueueReplaceState(a,a.state,null),io(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var r="",s=t;do r+=he(s),s=s.return;while(s);var a=r}catch(d){a=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:a,digest:null}}function Tl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function $c(e,t,r){r=Xt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){xo||(xo=!0,$l=s),Cl(e,t)},r}function Vc(e,t,r){r=Xt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Cl(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Cl(e,t),typeof s!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Hc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new zm;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Hm.bind(null,e,t,r),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Xt(-1,1),t.tag=2,mn(r,t,1))),r.lanes|=1),e)}var _m=_.ReactCurrentOwner,at=!1;function it(e,t,r,s){t.child=e===null?dc(t,null,r,s):sr(t,e.child,r,s)}function qc(e,t,r,s,a){r=r.render;var d=t.ref;return ar(t,a),s=vl(e,t,r,s,d,a),r=yl(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(Ne&&r&&el(t),t.flags|=1,it(e,t,s,a),t.child)}function Uc(e,t,r,s,a){if(e===null){var d=r.type;return typeof d=="function"&&!Yl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Yc(e,t,d,s,a)):(e=To(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!(e.lanes&a)){var h=d.memoizedProps;if(r=r.compare,r=r!==null?r:Hr,r(h,s)&&e.ref===t.ref)return Qt(e,t,a)}return t.flags|=1,e=wn(d,s),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,r,s,a){if(e!==null){var d=e.memoizedProps;if(Hr(d,s)&&e.ref===t.ref)if(at=!1,t.pendingProps=s=d,(e.lanes&a)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,Qt(e,t,a)}return jl(e,t,r,s,a)}function Xc(e,t,r){var s=t.pendingProps,a=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(fr,gt),gt|=r;else{if(!(r&1073741824))return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(fr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:r,Me(fr,gt),gt|=s}else d!==null?(s=d.baseLanes|r,t.memoizedState=null):s=r,Me(fr,gt),gt|=s;return it(e,t,a,r),t.child}function Qc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,r,s,a){var d=lt(r)?Cn:et.current;return d=nr(t,d),ar(t,a),r=vl(e,t,r,s,d,a),s=yl(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(Ne&&s&&el(t),t.flags|=1,it(e,t,r,a),t.child)}function Kc(e,t,r,s,a){if(lt(r)){var d=!0;Xi(t)}else d=!1;if(ar(t,a),t.stateNode===null)mo(e,t),Fc(t,r,s),El(t,r,s,a),s=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var E=h.context,L=r.contextType;typeof L=="object"&&L!==null?L=kt(L):(L=lt(r)?Cn:et.current,L=nr(t,L));var Y=r.getDerivedStateFromProps,K=typeof Y=="function"||typeof h.getSnapshotBeforeUpdate=="function";K||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==s||E!==L)&&Bc(t,h,s,L),pn=!1;var q=t.memoizedState;h.state=q,io(t,s,h,a),E=t.memoizedState,w!==s||q!==E||st.current||pn?(typeof Y=="function"&&(bl(t,r,Y,s),E=t.memoizedState),(w=pn||Rc(t,r,w,s,q,E,L))?(K||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),h.props=s,h.state=E,h.context=L,s=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,pc(e,t),w=t.memoizedProps,L=t.type===t.elementType?w:Mt(t.type,w),h.props=L,K=t.pendingProps,q=h.context,E=r.contextType,typeof E=="object"&&E!==null?E=kt(E):(E=lt(r)?Cn:et.current,E=nr(t,E));var te=r.getDerivedStateFromProps;(Y=typeof te=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==K||q!==E)&&Bc(t,h,s,E),pn=!1,q=t.memoizedState,h.state=q,io(t,s,h,a);var ie=t.memoizedState;w!==K||q!==ie||st.current||pn?(typeof te=="function"&&(bl(t,r,te,s),ie=t.memoizedState),(L=pn||Rc(t,r,L,s,q,ie,E)||!1)?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ie,E),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ie,E)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ie),h.props=s,h.state=ie,h.context=E,s=L):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),s=!1)}return Pl(e,t,r,s,d,a)}function Pl(e,t,r,s,a,d){Qc(e,t);var h=(t.flags&128)!==0;if(!s&&!h)return a&&nc(t,r,!1),Qt(e,t,d);s=t.stateNode,_m.current=t;var w=h&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&h?(t.child=sr(t,e.child,null,d),t.child=sr(t,null,w,d)):it(e,t,w,d),t.memoizedState=s.state,a&&nc(t,r,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),dl(e,t.containerInfo)}function Jc(e,t,r,s,a){return or(),il(a),t.flags|=256,it(e,t,r,s),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,r){var s=t.pendingProps,a=Ae.current,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(a&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Me(Ae,a&1),e===null)return rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=s.children,e=s.fallback,d?(s=t.mode,d=t.child,h={mode:"hidden",children:h},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Co(h,s,0,null),e=An(e,s,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=_l(r),t.memoizedState=zl,e):Ml(t,h));if(a=e.memoizedState,a!==null&&(w=a.dehydrated,w!==null))return Mm(e,t,h,s,w,a,r);if(d){d=s.fallback,h=t.mode,a=e.child,w=a.sibling;var E={mode:"hidden",children:s.children};return!(h&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=E,t.deletions=null):(s=wn(a,E),s.subtreeFlags=a.subtreeFlags&14680064),w!==null?d=wn(w,d):(d=An(d,h,r,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,h=e.child.memoizedState,h=h===null?_l(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~r,t.memoizedState=zl,s}return d=e.child,e=d.sibling,s=wn(d,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ml(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,r,s){return s!==null&&il(s),sr(t,e.child,null,r),e=Ml(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mm(e,t,r,s,a,d,h){if(r)return t.flags&256?(t.flags&=-257,s=Tl(Error(o(422))),po(e,t,h,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,a=t.mode,s=Co({mode:"visible",children:s.children},a,0,null),d=An(d,a,h,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,t.mode&1&&sr(t,e.child,null,h),t.child.memoizedState=_l(h),t.memoizedState=zl,d);if(!(t.mode&1))return po(e,t,h,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var w=s.dgst;return s=w,d=Error(o(419)),s=Tl(d,s,void 0),po(e,t,h,s)}if(w=(h&e.childLanes)!==0,at||w){if(s=Ye,s!==null){switch(h&-h){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|h)?0:a,a!==0&&a!==d.retryLane&&(d.retryLane=a,Yt(e,a),It(s,e,a,-1))}return Ul(),s=Tl(Error(o(421))),po(e,t,h,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Gm.bind(null,e),a._reactRetry=t,null):(e=d.treeContext,ht=un(a.nextSibling),mt=t,Ne=!0,_t=null,e!==null&&(wt[St++]=qt,wt[St++]=Ut,wt[St++]=jn,qt=e.id,Ut=e.overflow,jn=t),t=Ml(t,s.children),t.flags|=4096,t)}function td(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),al(e.return,t,r)}function Ol(e,t,r,s,a){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=a)}function nd(e,t,r){var s=t.pendingProps,a=s.revealOrder,d=s.tail;if(it(e,t,s.children,r),s=Ae.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,r,t);else if(e.tag===19)td(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Me(Ae,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&oo(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ol(t,!1,a,r,d);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&oo(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ol(t,!0,r,null,d);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Om(e,t,r){switch(t.tag){case 3:Zc(t),or();break;case 5:gc(t);break;case 1:lt(t.type)&&Xi(t);break;case 4:dl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Me(to,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Me(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?ed(e,t,r):(Me(Ae,Ae.current&1),e=Qt(e,t,r),e!==null?e.sibling:null);Me(Ae,Ae.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return nd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(Ae,Ae.current),s)break;return null;case 22:case 23:return t.lanes=0,Xc(e,t,r)}return Qt(e,t,r)}var rd,Ll,id,od;rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ll=function(){},id=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,_n(Ft.current);var d=null;switch(r){case"input":a=be(e,a),s=be(e,s),d=[];break;case"select":a=X({},a,{value:void 0}),s=X({},s,{value:void 0}),d=[];break;case"textarea":a=ds(e,a),s=ds(e,s),d=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=qi)}ps(r,s);var h;r=null;for(L in a)if(!s.hasOwnProperty(L)&&a.hasOwnProperty(L)&&a[L]!=null)if(L==="style"){var w=a[L];for(h in w)w.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(u.hasOwnProperty(L)?d||(d=[]):(d=d||[]).push(L,null));for(L in s){var E=s[L];if(w=a!=null?a[L]:void 0,s.hasOwnProperty(L)&&E!==w&&(E!=null||w!=null))if(L==="style")if(w){for(h in w)!w.hasOwnProperty(h)||E&&E.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in E)E.hasOwnProperty(h)&&w[h]!==E[h]&&(r||(r={}),r[h]=E[h])}else r||(d||(d=[]),d.push(L,r)),r=E;else L==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(d=d||[]).push(L,E)):L==="children"?typeof E!="string"&&typeof E!="number"||(d=d||[]).push(L,""+E):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(u.hasOwnProperty(L)?(E!=null&&L==="onScroll"&&Oe("scroll",e),d||w===E||(d=[])):(d=d||[]).push(L,E))}r&&(d=d||[]).push("style",r);var L=d;(t.updateQueue=L)&&(t.flags|=4)}},od=function(e,t,r,s){r!==s&&(t.flags|=4)};function ii(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Lm(e,t,r){var s=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return lt(t.type)&&Yi(),nt(t),null;case 3:return s=t.stateNode,ur(),Le(st),Le(et),ml(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Gl(_t),_t=null))),Ll(e,t),nt(t),null;case 5:fl(t);var a=_n(Jr.current);if(r=t.type,e!==null&&t.stateNode!=null)id(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=_n(Ft.current),Ji(t)){s=t.stateNode,r=t.type;var d=t.memoizedProps;switch(s[Rt]=t,s[Yr]=d,e=(t.mode&1)!==0,r){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(a=0;a<Wr.length;a++)Oe(Wr[a],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Ke(s,d),Oe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Oe("invalid",s);break;case"textarea":Va(s,d),Oe("invalid",s)}ps(r,d),a=null;for(var h in d)if(d.hasOwnProperty(h)){var w=d[h];h==="children"?typeof w=="string"?s.textContent!==w&&(d.suppressHydrationWarning!==!0&&Wi(s.textContent,w,e),a=["children",w]):typeof w=="number"&&s.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Wi(s.textContent,w,e),a=["children",""+w]):u.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Oe("scroll",s)}switch(r){case"input":qe(s),$a(s,d,!0);break;case"textarea":qe(s),Ga(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=qi)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(r,{is:s.is}):(e=h.createElement(r),r==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,r),e[Rt]=t,e[Yr]=s,rd(e,t,!1,!1),t.stateNode=e;e:{switch(h=ms(r,s),r){case"dialog":Oe("cancel",e),Oe("close",e),a=s;break;case"iframe":case"object":case"embed":Oe("load",e),a=s;break;case"video":case"audio":for(a=0;a<Wr.length;a++)Oe(Wr[a],e);a=s;break;case"source":Oe("error",e),a=s;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),a=s;break;case"details":Oe("toggle",e),a=s;break;case"input":Ke(e,s),a=be(e,s),Oe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=X({},s,{value:void 0}),Oe("invalid",e);break;case"textarea":Va(e,s),a=ds(e,s),Oe("invalid",e);break;default:a=s}ps(r,a),w=a;for(d in w)if(w.hasOwnProperty(d)){var E=w[d];d==="style"?Ya(e,E):d==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&qa(e,E)):d==="children"?typeof E=="string"?(r!=="textarea"||E!=="")&&Cr(e,E):typeof E=="number"&&Cr(e,""+E):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?E!=null&&d==="onScroll"&&Oe("scroll",e):E!=null&&S(e,d,E,h))}switch(r){case"input":qe(e),$a(e,s,!1);break;case"textarea":qe(e),Ga(e);break;case"option":s.value!=null&&e.setAttribute("value",""+le(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?Gn(e,!!s.multiple,d,!1):s.defaultValue!=null&&Gn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=qi)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)od(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=_n(Jr.current),_n(Ft.current),Ji(t)){if(s=t.stateNode,r=t.memoizedProps,s[Rt]=t,(d=s.nodeValue!==r)&&(e=mt,e!==null))switch(e.tag){case 3:Wi(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(s.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Rt]=t,t.stateNode=s}return nt(t),null;case 13:if(Le(Ae),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ht!==null&&t.mode&1&&!(t.flags&128))ac(),or(),t.flags|=98560,d=!1;else if(d=Ji(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Rt]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),d=!1}else _t!==null&&(Gl(_t),_t=null),d=!0;if(!d)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?We===0&&(We=3):Ul())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return ur(),Ll(e,t),e===null&&qr(t.stateNode.containerInfo),nt(t),null;case 10:return ll(t.type._context),nt(t),null;case 17:return lt(t.type)&&Yi(),nt(t),null;case 19:if(Le(Ae),d=t.memoizedState,d===null)return nt(t),null;if(s=(t.flags&128)!==0,h=d.rendering,h===null)if(s)ii(d,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=oo(e),h!==null){for(t.flags|=128,ii(d,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)d=r,e=s,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me(Ae,Ae.current&1|2),t.child}e=e.sibling}d.tail!==null&&Be()>pr&&(t.flags|=128,s=!0,ii(d,!1),t.lanes=4194304)}else{if(!s)if(e=oo(h),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ii(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Ne)return nt(t),null}else 2*Be()-d.renderingStartTime>pr&&r!==1073741824&&(t.flags|=128,s=!0,ii(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(r=d.last,r!==null?r.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Be(),t.sibling=null,r=Ae.current,Me(Ae,s?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return ql(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?gt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Im(e,t){switch(tl(t),t.tag){case 1:return lt(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),Le(st),Le(et),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fl(t),null;case 13:if(Le(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(Ae),null;case 4:return ur(),null;case 10:return ll(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var ho=!1,rt=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,ne=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Re(e,t,s)}else r.current=null}function Il(e,t,r){try{r()}catch(s){Re(e,t,s)}}var sd=!1;function Am(e,t){if(qs=Ii,e=Ru(),Rs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var h=0,w=-1,E=-1,L=0,Y=0,K=e,q=null;t:for(;;){for(var te;K!==r||a!==0&&K.nodeType!==3||(w=h+a),K!==d||s!==0&&K.nodeType!==3||(E=h+s),K.nodeType===3&&(h+=K.nodeValue.length),(te=K.firstChild)!==null;)q=K,K=te;for(;;){if(K===e)break t;if(q===r&&++L===a&&(w=h),q===d&&++Y===s&&(E=h),(te=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=te}r=w===-1||E===-1?null:{start:w,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Us={focusedElem:e,selectionRange:r},Ii=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,$e=ie.memoizedState,z=t.stateNode,C=z.getSnapshotBeforeUpdate(t.elementType===t.type?oe:Mt(t.type,oe),$e);z.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var O=t.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(J){Re(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return ie=sd,sd=!1,ie}function oi(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var d=a.destroy;a.destroy=void 0,d!==void 0&&Il(t,r,d)}a=a.next}while(a!==s)}}function go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Nl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ld(e){var t=e.alternate;t!==null&&(e.alternate=null,ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Yr],delete t[Ks],delete t[ym],delete t[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qi));else if(s!==4&&(e=e.child,e!==null))for(Al(e,t,r),e=e.sibling;e!==null;)Al(e,t,r),e=e.sibling}function Dl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Dl(e,t,r),e=e.sibling;e!==null;)Dl(e,t,r),e=e.sibling}var Ze=null,Ot=!1;function hn(e,t,r){for(r=r.child;r!==null;)cd(e,t,r),r=r.sibling}function cd(e,t,r){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Pi,r)}catch{}switch(r.tag){case 5:rt||dr(r,t);case 6:var s=Ze,a=Ot;Ze=null,hn(e,t,r),Ze=s,Ot=a,Ze!==null&&(Ot?(e=Ze,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ze.removeChild(r.stateNode));break;case 18:Ze!==null&&(Ot?(e=Ze,r=r.stateNode,e.nodeType===8?Qs(e.parentNode,r):e.nodeType===1&&Qs(e,r),Dr(e)):Qs(Ze,r.stateNode));break;case 4:s=Ze,a=Ot,Ze=r.stateNode.containerInfo,Ot=!0,hn(e,t,r),Ze=s,Ot=a;break;case 0:case 11:case 14:case 15:if(!rt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var d=a,h=d.destroy;d=d.tag,h!==void 0&&(d&2||d&4)&&Il(r,t,h),a=a.next}while(a!==s)}hn(e,t,r);break;case 1:if(!rt&&(dr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(w){Re(r,t,w)}hn(e,t,r);break;case 21:hn(e,t,r);break;case 22:r.mode&1?(rt=(s=rt)||r.memoizedState!==null,hn(e,t,r),rt=s):hn(e,t,r);break;default:hn(e,t,r)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Nm),t.forEach(function(s){var a=Wm.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var d=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ze=w.stateNode,Ot=!1;break e;case 3:Ze=w.stateNode.containerInfo,Ot=!0;break e;case 4:Ze=w.stateNode.containerInfo,Ot=!0;break e}w=w.return}if(Ze===null)throw Error(o(160));cd(d,h,a),Ze=null,Ot=!1;var E=a.alternate;E!==null&&(E.return=null),a.return=null}catch(L){Re(a,t,L)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),$t(e),s&4){try{oi(3,e,e.return),go(3,e)}catch(oe){Re(e,e.return,oe)}try{oi(5,e,e.return)}catch(oe){Re(e,e.return,oe)}}break;case 1:Lt(t,e),$t(e),s&512&&r!==null&&dr(r,r.return);break;case 5:if(Lt(t,e),$t(e),s&512&&r!==null&&dr(r,r.return),e.flags&32){var a=e.stateNode;try{Cr(a,"")}catch(oe){Re(e,e.return,oe)}}if(s&4&&(a=e.stateNode,a!=null)){var d=e.memoizedProps,h=r!==null?r.memoizedProps:d,w=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&jt(a,d),ms(w,h);var L=ms(w,d);for(h=0;h<E.length;h+=2){var Y=E[h],K=E[h+1];Y==="style"?Ya(a,K):Y==="dangerouslySetInnerHTML"?qa(a,K):Y==="children"?Cr(a,K):S(a,Y,K,L)}switch(w){case"input":Hn(a,d);break;case"textarea":Ha(a,d);break;case"select":var q=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!d.multiple;var te=d.value;te!=null?Gn(a,!!d.multiple,te,!1):q!==!!d.multiple&&(d.defaultValue!=null?Gn(a,!!d.multiple,d.defaultValue,!0):Gn(a,!!d.multiple,d.multiple?[]:"",!1))}a[Yr]=d}catch(oe){Re(e,e.return,oe)}}break;case 6:if(Lt(t,e),$t(e),s&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,d=e.memoizedProps;try{a.nodeValue=d}catch(oe){Re(e,e.return,oe)}}break;case 3:if(Lt(t,e),$t(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(oe){Re(e,e.return,oe)}break;case 4:Lt(t,e),$t(e);break;case 13:Lt(t,e),$t(e),a=e.child,a.flags&8192&&(d=a.memoizedState!==null,a.stateNode.isHidden=d,!d||a.alternate!==null&&a.alternate.memoizedState!==null||(Bl=Be())),s&4&&dd(e);break;case 22:if(Y=r!==null&&r.memoizedState!==null,e.mode&1?(rt=(L=rt)||Y,Lt(t,e),rt=L):Lt(t,e),$t(e),s&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!Y&&e.mode&1)for(ne=e,Y=e.child;Y!==null;){for(K=ne=Y;ne!==null;){switch(q=ne,te=q.child,q.tag){case 0:case 11:case 14:case 15:oi(4,q,q.return);break;case 1:dr(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){s=q,r=q.return;try{t=s,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(oe){Re(s,r,oe)}}break;case 5:dr(q,q.return);break;case 22:if(q.memoizedState!==null){hd(K);continue}}te!==null?(te.return=q,ne=te):hd(K)}Y=Y.sibling}e:for(Y=null,K=e;;){if(K.tag===5){if(Y===null){Y=K;try{a=K.stateNode,L?(d=a.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=K.stateNode,E=K.memoizedProps.style,h=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Ua("display",h))}catch(oe){Re(e,e.return,oe)}}}else if(K.tag===6){if(Y===null)try{K.stateNode.nodeValue=L?"":K.memoizedProps}catch(oe){Re(e,e.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===e)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===e)break e;for(;K.sibling===null;){if(K.return===null||K.return===e)break e;Y===K&&(Y=null),K=K.return}Y===K&&(Y=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Lt(t,e),$t(e),s&4&&dd(e);break;case 21:break;default:Lt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ad(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Cr(a,""),s.flags&=-33);var d=ud(e);Dl(e,d,a);break;case 3:case 4:var h=s.stateNode.containerInfo,w=ud(e);Al(e,w,h);break;default:throw Error(o(161))}}catch(E){Re(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dm(e,t,r){ne=e,pd(e)}function pd(e,t,r){for(var s=(e.mode&1)!==0;ne!==null;){var a=ne,d=a.child;if(a.tag===22&&s){var h=a.memoizedState!==null||ho;if(!h){var w=a.alternate,E=w!==null&&w.memoizedState!==null||rt;w=ho;var L=rt;if(ho=h,(rt=E)&&!L)for(ne=a;ne!==null;)h=ne,E=h.child,h.tag===22&&h.memoizedState!==null?gd(a):E!==null?(E.return=h,ne=E):gd(a);for(;d!==null;)ne=d,pd(d),d=d.sibling;ne=a,ho=w,rt=L}md(e)}else a.subtreeFlags&8772&&d!==null?(d.return=a,ne=d):md(e)}}function md(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||go(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!rt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Mt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&hc(t,d,s);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hc(t,h,r)}break;case 5:var w=t.stateNode;if(r===null&&t.flags&4){r=w;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&r.focus();break;case"img":E.src&&(r.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var L=t.alternate;if(L!==null){var Y=L.memoizedState;if(Y!==null){var K=Y.dehydrated;K!==null&&Dr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}rt||t.flags&512&&Nl(t)}catch(q){Re(t,t.return,q)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function hd(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function gd(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{go(4,t)}catch(E){Re(t,r,E)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(E){Re(t,a,E)}}var d=t.return;try{Nl(t)}catch(E){Re(t,d,E)}break;case 5:var h=t.return;try{Nl(t)}catch(E){Re(t,h,E)}}}catch(E){Re(t,t.return,E)}if(t===e){ne=null;break}var w=t.sibling;if(w!==null){w.return=t.return,ne=w;break}ne=t.return}}var Rm=Math.ceil,vo=_.ReactCurrentDispatcher,Rl=_.ReactCurrentOwner,Et=_.ReactCurrentBatchConfig,ke=0,Ye=null,Ve=null,Je=0,gt=0,fr=cn(0),We=0,si=null,On=0,yo=0,Fl=0,li=null,ut=null,Bl=0,pr=1/0,Kt=null,xo=!1,$l=null,gn=null,wo=!1,vn=null,So=0,ai=0,Vl=null,ko=-1,bo=0;function ot(){return ke&6?Be():ko!==-1?ko:ko=Be()}function yn(e){return e.mode&1?ke&2&&Je!==0?Je&-Je:Sm.transition!==null?(bo===0&&(bo=uu()),bo):(e=je,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function It(e,t,r,s){if(50<ai)throw ai=0,Vl=null,Error(o(185));Or(e,r,s),(!(ke&2)||e!==Ye)&&(e===Ye&&(!(ke&2)&&(yo|=r),We===4&&xn(e,Je)),ct(e,s),r===1&&ke===0&&!(t.mode&1)&&(pr=Be()+500,Qi&&fn()))}function ct(e,t){var r=e.callbackNode;Sp(e,t);var s=Mi(e,e===Ye?Je:0);if(s===0)r!==null&&su(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&su(r),t===1)e.tag===0?wm(yd.bind(null,e)):rc(yd.bind(null,e)),gm(function(){!(ke&6)&&fn()}),r=null;else{switch(cu(s)){case 1:r=Ss;break;case 4:r=lu;break;case 16:r=ji;break;case 536870912:r=au;break;default:r=ji}r=Cd(r,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vd(e,t){if(ko=-1,bo=0,ke&6)throw Error(o(327));var r=e.callbackNode;if(mr()&&e.callbackNode!==r)return null;var s=Mi(e,e===Ye?Je:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Eo(e,s);else{t=s;var a=ke;ke|=2;var d=wd();(Ye!==e||Je!==t)&&(Kt=null,pr=Be()+500,In(e,t));do try{$m();break}catch(w){xd(e,w)}while(!0);sl(),vo.current=d,ke=a,Ve!==null?t=0:(Ye=null,Je=0,t=We)}if(t!==0){if(t===2&&(a=ks(e),a!==0&&(s=a,t=Hl(e,a))),t===1)throw r=si,In(e,0),xn(e,s),ct(e,Be()),r;if(t===6)xn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Fm(a)&&(t=Eo(e,s),t===2&&(d=ks(e),d!==0&&(s=d,t=Hl(e,d))),t===1))throw r=si,In(e,0),xn(e,s),ct(e,Be()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:Nn(e,ut,Kt);break;case 3:if(xn(e,s),(s&130023424)===s&&(t=Bl+500-Be(),10<t)){if(Mi(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){ot(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Xs(Nn.bind(null,e,ut,Kt),t);break}Nn(e,ut,Kt);break;case 4:if(xn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var h=31-Pt(s);d=1<<h,h=t[h],h>a&&(a=h),s&=~d}if(s=a,s=Be()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Rm(s/1960))-s,10<s){e.timeoutHandle=Xs(Nn.bind(null,e,ut,Kt),s);break}Nn(e,ut,Kt);break;case 5:Nn(e,ut,Kt);break;default:throw Error(o(329))}}}return ct(e,Be()),e.callbackNode===r?vd.bind(null,e):null}function Hl(e,t){var r=li;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=ut,ut=r,t!==null&&Gl(t)),e}function Gl(e){ut===null?ut=e:ut.push.apply(ut,e)}function Fm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],d=a.getSnapshot;a=a.value;try{if(!zt(d(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Fl,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Pt(t),s=1<<r;e[r]=-1,t&=~s}}function yd(e){if(ke&6)throw Error(o(327));mr();var t=Mi(e,0);if(!(t&1))return ct(e,Be()),null;var r=Eo(e,t);if(e.tag!==0&&r===2){var s=ks(e);s!==0&&(t=s,r=Hl(e,s))}if(r===1)throw r=si,In(e,0),xn(e,t),ct(e,Be()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,ut,Kt),ct(e,Be()),null}function Wl(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(pr=Be()+500,Qi&&fn())}}function Ln(e){vn!==null&&vn.tag===0&&!(ke&6)&&mr();var t=ke;ke|=1;var r=Et.transition,s=je;try{if(Et.transition=null,je=1,e)return e()}finally{je=s,Et.transition=r,ke=t,!(ke&6)&&fn()}}function ql(){gt=fr.current,Le(fr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,hm(r)),Ve!==null)for(r=Ve.return;r!==null;){var s=r;switch(tl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Yi();break;case 3:ur(),Le(st),Le(et),ml();break;case 5:fl(s);break;case 4:ur();break;case 13:Le(Ae);break;case 19:Le(Ae);break;case 10:ll(s.type._context);break;case 22:case 23:ql()}r=r.return}if(Ye=e,Ve=e=wn(e.current,null),Je=gt=t,We=0,si=null,Fl=yo=On=0,ut=li=null,zn!==null){for(t=0;t<zn.length;t++)if(r=zn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,d=r.pending;if(d!==null){var h=d.next;d.next=a,s.next=h}r.pending=s}zn=null}return e}function xd(e,t){do{var r=Ve;try{if(sl(),so.current=co,lo){for(var s=De.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}lo=!1}if(Mn=0,Ue=Ge=De=null,ei=!1,ti=0,Rl.current=null,r===null||r.return===null){We=1,si=t,Ve=null;break}e:{var d=e,h=r.return,w=r,E=t;if(t=Je,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var L=E,Y=w,K=Y.tag;if(!(Y.mode&1)&&(K===0||K===11||K===15)){var q=Y.alternate;q?(Y.updateQueue=q.updateQueue,Y.memoizedState=q.memoizedState,Y.lanes=q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var te=Gc(h);if(te!==null){te.flags&=-257,Wc(te,h,w,d,t),te.mode&1&&Hc(d,L,t),t=te,E=L;var ie=t.updateQueue;if(ie===null){var oe=new Set;oe.add(E),t.updateQueue=oe}else ie.add(E);break e}else{if(!(t&1)){Hc(d,L,t),Ul();break e}E=Error(o(426))}}else if(Ne&&w.mode&1){var $e=Gc(h);if($e!==null){!($e.flags&65536)&&($e.flags|=256),Wc($e,h,w,d,t),il(cr(E,w));break e}}d=E=cr(E,w),We!==4&&(We=2),li===null?li=[d]:li.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var z=$c(d,E,t);mc(d,z);break e;case 1:w=E;var C=d.type,O=d.stateNode;if(!(d.flags&128)&&(typeof C.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(gn===null||!gn.has(O)))){d.flags|=65536,t&=-t,d.lanes|=t;var J=Vc(d,w,t);mc(d,J);break e}}d=d.return}while(d!==null)}kd(r)}catch(se){t=se,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(!0)}function wd(){var e=vo.current;return vo.current=co,e===null?co:e}function Ul(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(On&268435455)&&!(yo&268435455)||xn(Ye,Je)}function Eo(e,t){var r=ke;ke|=2;var s=wd();(Ye!==e||Je!==t)&&(Kt=null,In(e,t));do try{Bm();break}catch(a){xd(e,a)}while(!0);if(sl(),ke=r,vo.current=s,Ve!==null)throw Error(o(261));return Ye=null,Je=0,We}function Bm(){for(;Ve!==null;)Sd(Ve)}function $m(){for(;Ve!==null&&!fp();)Sd(Ve)}function Sd(e){var t=Td(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?kd(e):Ve=t,Rl.current=null}function kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Im(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(r=Lm(r,t,gt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function Nn(e,t,r){var s=je,a=Et.transition;try{Et.transition=null,je=1,Vm(e,t,r,s)}finally{Et.transition=a,je=s}return null}function Vm(e,t,r,s){do mr();while(vn!==null);if(ke&6)throw Error(o(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(kp(e,d),e===Ye&&(Ve=Ye=null,Je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||wo||(wo=!0,Cd(ji,function(){return mr(),null})),d=(r.flags&15990)!==0,r.subtreeFlags&15990||d){d=Et.transition,Et.transition=null;var h=je;je=1;var w=ke;ke|=4,Rl.current=null,Am(e,r),fd(r,e),am(Us),Ii=!!qs,Us=qs=null,e.current=r,Dm(r),pp(),ke=w,je=h,Et.transition=d}else e.current=r;if(wo&&(wo=!1,vn=e,So=a),d=e.pendingLanes,d===0&&(gn=null),gp(r.stateNode),ct(e,Be()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(xo)throw xo=!1,e=$l,$l=null,e;return So&1&&e.tag!==0&&mr(),d=e.pendingLanes,d&1?e===Vl?ai++:(ai=0,Vl=e):ai=0,fn(),null}function mr(){if(vn!==null){var e=cu(So),t=Et.transition,r=je;try{if(Et.transition=null,je=16>e?16:e,vn===null)var s=!1;else{if(e=vn,vn=null,So=0,ke&6)throw Error(o(331));var a=ke;for(ke|=4,ne=e.current;ne!==null;){var d=ne,h=d.child;if(ne.flags&16){var w=d.deletions;if(w!==null){for(var E=0;E<w.length;E++){var L=w[E];for(ne=L;ne!==null;){var Y=ne;switch(Y.tag){case 0:case 11:case 15:oi(8,Y,d)}var K=Y.child;if(K!==null)K.return=Y,ne=K;else for(;ne!==null;){Y=ne;var q=Y.sibling,te=Y.return;if(ld(Y),Y===L){ne=null;break}if(q!==null){q.return=te,ne=q;break}ne=te}}}var ie=d.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var $e=oe.sibling;oe.sibling=null,oe=$e}while(oe!==null)}}ne=d}}if(d.subtreeFlags&2064&&h!==null)h.return=d,ne=h;else e:for(;ne!==null;){if(d=ne,d.flags&2048)switch(d.tag){case 0:case 11:case 15:oi(9,d,d.return)}var z=d.sibling;if(z!==null){z.return=d.return,ne=z;break e}ne=d.return}}var C=e.current;for(ne=C;ne!==null;){h=ne;var O=h.child;if(h.subtreeFlags&2064&&O!==null)O.return=h,ne=O;else e:for(h=C;ne!==null;){if(w=ne,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:go(9,w)}}catch(se){Re(w,w.return,se)}if(w===h){ne=null;break e}var J=w.sibling;if(J!==null){J.return=w.return,ne=J;break e}ne=w.return}}if(ke=a,fn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Pi,e)}catch{}s=!0}return s}finally{je=r,Et.transition=t}}return!1}function bd(e,t,r){t=cr(r,t),t=$c(e,t,1),e=mn(e,t,1),t=ot(),e!==null&&(Or(e,1,t),ct(e,t))}function Re(e,t,r){if(e.tag===3)bd(e,e,r);else for(;t!==null;){if(t.tag===3){bd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(gn===null||!gn.has(s))){e=cr(r,e),e=Vc(t,e,1),t=mn(t,e,1),e=ot(),t!==null&&(Or(t,1,e),ct(t,e));break}}t=t.return}}function Hm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(Je&r)===r&&(We===4||We===3&&(Je&130023424)===Je&&500>Be()-Bl?In(e,0):Fl|=r),ct(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):t=1);var r=ot();e=Yt(e,t),e!==null&&(Or(e,t,r),ct(e,r))}function Gm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(e,r)}function Wm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),Ed(e,r)}var Td;Td=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return at=!1,Om(e,t,r);at=!!(e.flags&131072)}else at=!1,Ne&&t.flags&1048576&&ic(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;mo(e,t),e=t.pendingProps;var a=nr(t,et.current);ar(t,r),a=vl(null,t,s,e,a,r);var d=yl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(s)?(d=!0,Xi(t)):d=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,cl(t),a.updater=fo,t.stateNode=a,a._reactInternals=t,El(t,s,e,r),t=Pl(null,t,s,!0,d,r)):(t.tag=0,Ne&&d&&el(t),it(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Um(s),e=Mt(s,e),a){case 0:t=jl(null,t,s,e,r);break e;case 1:t=Kc(null,t,s,e,r);break e;case 11:t=qc(null,t,s,e,r);break e;case 14:t=Uc(null,t,s,Mt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Mt(s,a),jl(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Mt(s,a),Kc(e,t,s,a,r);case 3:e:{if(Zc(t),e===null)throw Error(o(387));s=t.pendingProps,d=t.memoizedState,a=d.element,pc(e,t),io(t,s,null,r);var h=t.memoizedState;if(s=h.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){a=cr(Error(o(423)),t),t=Jc(e,t,s,r,a);break e}else if(s!==a){a=cr(Error(o(424)),t),t=Jc(e,t,s,r,a);break e}else for(ht=un(t.stateNode.containerInfo.firstChild),mt=t,Ne=!0,_t=null,r=dc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(or(),s===a){t=Qt(e,t,r);break e}it(e,t,s,r)}t=t.child}return t;case 5:return gc(t),e===null&&rl(t),s=t.type,a=t.pendingProps,d=e!==null?e.memoizedProps:null,h=a.children,Ys(s,a)?h=null:d!==null&&Ys(s,d)&&(t.flags|=32),Qc(e,t),it(e,t,h,r),t.child;case 6:return e===null&&rl(t),null;case 13:return ed(e,t,r);case 4:return dl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=sr(t,null,s,r):it(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Mt(s,a),qc(e,t,s,a,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,d=t.memoizedProps,h=a.value,Me(to,s._currentValue),s._currentValue=h,d!==null)if(zt(d.value,h)){if(d.children===a.children&&!st.current){t=Qt(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){h=d.child;for(var E=w.firstContext;E!==null;){if(E.context===s){if(d.tag===1){E=Xt(-1,r&-r),E.tag=2;var L=d.updateQueue;if(L!==null){L=L.shared;var Y=L.pending;Y===null?E.next=E:(E.next=Y.next,Y.next=E),L.pending=E}}d.lanes|=r,E=d.alternate,E!==null&&(E.lanes|=r),al(d.return,r,t),w.lanes|=r;break}E=E.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(o(341));h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),al(h,r,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}it(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,ar(t,r),a=kt(a),s=s(a),t.flags|=1,it(e,t,s,r),t.child;case 14:return s=t.type,a=Mt(s,t.pendingProps),a=Mt(s.type,a),Uc(e,t,s,a,r);case 15:return Yc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Mt(s,a),mo(e,t),t.tag=1,lt(s)?(e=!0,Xi(t)):e=!1,ar(t,r),Fc(t,s,a),El(t,s,a,r),Pl(null,t,s,!0,e,r);case 19:return nd(e,t,r);case 22:return Xc(e,t,r)}throw Error(o(156,t.tag))};function Cd(e,t){return ou(e,t)}function qm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,r,s){return new qm(e,t,r,s)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Um(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===re)return 14}return 2}function wn(e,t){var r=e.alternate;return r===null?(r=Tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function To(e,t,r,s,a,d){var h=2;if(s=e,typeof e=="function")Yl(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case Q:return An(r.children,a,d,t);case G:h=8,a|=8;break;case H:return e=Tt(12,r,t,a|2),e.elementType=H,e.lanes=d,e;case $:return e=Tt(13,r,t,a),e.elementType=$,e.lanes=d,e;case U:return e=Tt(19,r,t,a),e.elementType=U,e.lanes=d,e;case xe:return Co(r,a,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:h=10;break e;case R:h=9;break e;case D:h=11;break e;case re:h=14;break e;case me:h=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Tt(h,r,t,a),t.elementType=e,t.type=s,t.lanes=d,t}function An(e,t,r,s){return e=Tt(7,e,s,t),e.lanes=r,e}function Co(e,t,r,s){return e=Tt(22,e,s,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Xl(e,t,r){return e=Tt(6,e,null,t),e.lanes=r,e}function Ql(e,t,r){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ym(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kl(e,t,r,s,a,d,h,w,E){return e=new Ym(e,t,r,w,E),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Tt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},cl(d),e}function Xm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function jd(e){if(!e)return dn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(lt(r))return tc(e,r,t)}return t}function Pd(e,t,r,s,a,d,h,w,E){return e=Kl(r,s,!0,e,a,d,h,w,E),e.context=jd(null),r=e.current,s=ot(),a=yn(r),d=Xt(s,a),d.callback=t??null,mn(r,d,a),e.current.lanes=a,Or(e,a,s),ct(e,s),e}function jo(e,t,r,s){var a=t.current,d=ot(),h=yn(a);return r=jd(r),t.context===null?t.context=r:t.pendingContext=r,t=Xt(d,h),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=mn(a,t,h),e!==null&&(It(e,a,h,d),ro(e,a,h)),h}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Zl(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}zo.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));jo(e,t,null,null)},zo.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){jo(null,e,null,null)}),t[Gt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sn.length&&t!==0&&t<sn[r].priority;r++);sn.splice(r,0,e),r===0&&gu(e)}};function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Qm(e,t,r,s,a){if(a){if(typeof s=="function"){var d=s;s=function(){var L=Po(h);d.call(L)}}var h=Pd(t,s,e,0,null,!1,!1,"",Md);return e._reactRootContainer=h,e[Gt]=h.current,qr(e.nodeType===8?e.parentNode:e),Ln(),h}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var w=s;s=function(){var L=Po(E);w.call(L)}}var E=Kl(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=E,e[Gt]=E.current,qr(e.nodeType===8?e.parentNode:e),Ln(function(){jo(t,E,r,s)}),E}function Mo(e,t,r,s,a){var d=r._reactRootContainer;if(d){var h=d;if(typeof a=="function"){var w=a;a=function(){var E=Po(h);w.call(E)}}jo(t,h,e,a)}else h=Qm(r,t,e,a,s);return Po(h)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mr(t.pendingLanes);r!==0&&(Es(t,r|1),ct(t,Be()),!(ke&6)&&(pr=Be()+500,fn()))}break;case 13:Ln(function(){var s=Yt(e,1);if(s!==null){var a=ot();It(s,e,1,a)}}),Zl(e,1)}},Ts=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var r=ot();It(t,e,134217728,r)}Zl(e,134217728)}},fu=function(e){if(e.tag===13){var t=yn(e),r=Yt(e,t);if(r!==null){var s=ot();It(r,e,t,s)}Zl(e,t)}},pu=function(){return je},mu=function(e,t){var r=je;try{return je=e,t()}finally{je=r}},vs=function(e,t,r){switch(t){case"input":if(Hn(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=Ui(s);if(!a)throw Error(o(90));Fe(s),Hn(s,a)}}}break;case"textarea":Ha(e,r);break;case"select":t=r.value,t!=null&&Gn(e,!!r.multiple,t,!1)}},Za=Wl,Ja=Ln;var Km={usingClientEntryPoint:!1,Events:[Xr,er,Ui,Qa,Ka,Wl]},ui={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zm={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Pi=Oo.inject(Zm),Dt=Oo}catch{}}return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km,dt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(t))throw Error(o(200));return Xm(e,t,null,r)},dt.createRoot=function(e,t){if(!ea(e))throw Error(o(299));var r=!1,s="",a=_d;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kl(e,1,!1,null,null,r,!1,s,a),e[Gt]=t.current,qr(e.nodeType===8?e.parentNode:e),new Jl(t)},dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},dt.flushSync=function(e){return Ln(e)},dt.hydrate=function(e,t,r){if(!_o(t))throw Error(o(200));return Mo(null,e,t,!0,r)},dt.hydrateRoot=function(e,t,r){if(!ea(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,a=!1,d="",h=_d;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Pd(t,null,e,1,r??null,a,!1,d,h),e[Gt]=t.current,qr(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new zo(t)},dt.render=function(e,t,r){if(!_o(t))throw Error(o(200));return Mo(null,e,t,!1,r)},dt.unmountComponentAtNode=function(e){if(!_o(e))throw Error(o(40));return e._reactRootContainer?(Ln(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1},dt.unstable_batchedUpdates=Wl,dt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!_o(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Mo(e,t,r,!1,s)},dt.version="18.3.1-next-f1338f8080-20240426",dt}var Fd;function sh(){if(Fd)return ra.exports;Fd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),ra.exports=oh(),ra.exports}var Bd;function lh(){if(Bd)return Lo;Bd=1;var i=sh();return Lo.createRoot=i.createRoot,Lo.hydrateRoot=i.hydrateRoot,Lo}var ah=lh(),ft=function(){return ft=Object.assign||function(n){for(var o,l=1,u=arguments.length;l<u;l++){o=arguments[l];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},ft.apply(this,arguments)};function xi(i,n,o){if(o||arguments.length===2)for(var l=0,u=n.length,c;l<u;l++)(c||!(l in n))&&(c||(c=Array.prototype.slice.call(n,0,l)),c[l]=n[l]);return i.concat(c||Array.prototype.slice.call(n))}var Ie="-ms-",vi="-moz-",Ce="-webkit-",pf="comm",ns="rule",Ia="decl",uh="@import",mf="@keyframes",ch="@layer",hf=Math.abs,Na=String.fromCharCode,wa=Object.assign;function dh(i,n){return Qe(i,0)^45?(((n<<2^Qe(i,0))<<2^Qe(i,1))<<2^Qe(i,2))<<2^Qe(i,3):0}function gf(i){return i.trim()}function en(i,n){return(i=n.exec(i))?i[0]:i}function we(i,n,o){return i.replace(n,o)}function Bo(i,n,o){return i.indexOf(n,o)}function Qe(i,n){return i.charCodeAt(n)|0}function yr(i,n,o){return i.slice(n,o)}function Vt(i){return i.length}function vf(i){return i.length}function gi(i,n){return n.push(i),i}function fh(i,n){return i.map(n).join("")}function $d(i,n){return i.filter(function(o){return!en(o,n)})}var rs=1,xr=1,yf=0,Ct=0,He=0,br="";function is(i,n,o,l,u,c,p,g){return{value:i,root:n,parent:o,type:l,props:u,children:c,line:rs,column:xr,length:p,return:"",siblings:g}}function kn(i,n){return wa(is("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function hr(i){for(;i.root;)i=kn(i.root,{children:[i]});gi(i,i.siblings)}function ph(){return He}function mh(){return He=Ct>0?Qe(br,--Ct):0,xr--,He===10&&(xr=1,rs--),He}function Nt(){return He=Ct<yf?Qe(br,Ct++):0,xr++,He===10&&(xr=1,rs++),He}function Rn(){return Qe(br,Ct)}function $o(){return Ct}function os(i,n){return yr(br,i,n)}function Sa(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hh(i){return rs=xr=1,yf=Vt(br=i),Ct=0,[]}function gh(i){return br="",i}function sa(i){return gf(os(Ct-1,ka(i===91?i+2:i===40?i+1:i)))}function vh(i){for(;(He=Rn())&&He<33;)Nt();return Sa(i)>2||Sa(He)>3?"":" "}function yh(i,n){for(;--n&&Nt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return os(i,$o()+(n<6&&Rn()==32&&Nt()==32))}function ka(i){for(;Nt();)switch(He){case i:return Ct;case 34:case 39:i!==34&&i!==39&&ka(He);break;case 40:i===41&&ka(i);break;case 92:Nt();break}return Ct}function xh(i,n){for(;Nt()&&i+He!==57;)if(i+He===84&&Rn()===47)break;return"/*"+os(n,Ct-1)+"*"+Na(i===47?i:Nt())}function wh(i){for(;!Sa(Rn());)Nt();return os(i,Ct)}function Sh(i){return gh(Vo("",null,null,null,[""],i=hh(i),0,[0],i))}function Vo(i,n,o,l,u,c,p,g,f){for(var x=0,v=0,y=p,k=0,b=0,P=0,I=1,B=1,M=1,T=0,S="",_=u,N=c,A=l,Q=S;B;)switch(P=T,T=Nt()){case 40:if(P!=108&&Qe(Q,y-1)==58){Bo(Q+=we(sa(T),"&","&\f"),"&\f",hf(x?g[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:Q+=sa(T);break;case 9:case 10:case 13:case 32:Q+=vh(P);break;case 92:Q+=yh($o()-1,7);continue;case 47:switch(Rn()){case 42:case 47:gi(kh(xh(Nt(),$o()),n,o,f),f);break;default:Q+="/"}break;case 123*I:g[x++]=Vt(Q)*M;case 125*I:case 59:case 0:switch(T){case 0:case 125:B=0;case 59+v:M==-1&&(Q=we(Q,/\f/g,"")),b>0&&Vt(Q)-y&&gi(b>32?Hd(Q+";",l,o,y-1,f):Hd(we(Q," ","")+";",l,o,y-2,f),f);break;case 59:Q+=";";default:if(gi(A=Vd(Q,n,o,x,v,u,g,S,_=[],N=[],y,c),c),T===123)if(v===0)Vo(Q,n,A,A,_,c,y,g,N);else switch(k===99&&Qe(Q,3)===110?100:k){case 100:case 108:case 109:case 115:Vo(i,A,A,l&&gi(Vd(i,A,A,0,0,u,g,S,u,_=[],y,N),N),u,N,y,g,l?_:N);break;default:Vo(Q,A,A,A,[""],N,0,g,N)}}x=v=b=0,I=M=1,S=Q="",y=p;break;case 58:y=1+Vt(Q),b=P;default:if(I<1){if(T==123)--I;else if(T==125&&I++==0&&mh()==125)continue}switch(Q+=Na(T),T*I){case 38:M=v>0?1:(Q+="\f",-1);break;case 44:g[x++]=(Vt(Q)-1)*M,M=1;break;case 64:Rn()===45&&(Q+=sa(Nt())),k=Rn(),v=y=Vt(S=Q+=wh($o())),T++;break;case 45:P===45&&Vt(Q)==2&&(I=0)}}return c}function Vd(i,n,o,l,u,c,p,g,f,x,v,y){for(var k=u-1,b=u===0?c:[""],P=vf(b),I=0,B=0,M=0;I<l;++I)for(var T=0,S=yr(i,k+1,k=hf(B=p[I])),_=i;T<P;++T)(_=gf(B>0?b[T]+" "+S:we(S,/&\f/g,b[T])))&&(f[M++]=_);return is(i,n,o,u===0?ns:g,f,x,v,y)}function kh(i,n,o,l){return is(i,n,o,pf,Na(ph()),yr(i,2,-2),0,l)}function Hd(i,n,o,l,u){return is(i,n,o,Ia,yr(i,0,l),yr(i,l+1,-1),l,u)}function xf(i,n,o){switch(dh(i,n)){case 5103:return Ce+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+i+i;case 4789:return vi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+i+vi+i+Ie+i+i;case 5936:switch(Qe(i,n+11)){case 114:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ce+i+Ie+we(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Ce+i+Ie+i+i;case 6165:return Ce+i+Ie+"flex-"+i+i;case 5187:return Ce+i+we(i,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Ie+"flex-$1$2")+i;case 5443:return Ce+i+Ie+"flex-item-"+we(i,/flex-|-self/g,"")+(en(i,/flex-|baseline/)?"":Ie+"grid-row-"+we(i,/flex-|-self/g,""))+i;case 4675:return Ce+i+Ie+"flex-line-pack"+we(i,/align-content|flex-|-self/g,"")+i;case 5548:return Ce+i+Ie+we(i,"shrink","negative")+i;case 5292:return Ce+i+Ie+we(i,"basis","preferred-size")+i;case 6060:return Ce+"box-"+we(i,"-grow","")+Ce+i+Ie+we(i,"grow","positive")+i;case 4554:return Ce+we(i,/([^-])(transform)/g,"$1"+Ce+"$2")+i;case 6187:return we(we(we(i,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),i,"")+i;case 5495:case 3959:return we(i,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return we(we(i,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+i+i;case 4200:if(!en(i,/flex-|baseline/))return Ie+"grid-column-align"+yr(i,n)+i;break;case 2592:case 3360:return Ie+we(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(l,u){return n=u,en(l.props,/grid-\w+-end/)})?~Bo(i+(o=o[n].value),"span",0)?i:Ie+we(i,"-start","")+i+Ie+"grid-row-span:"+(~Bo(o,"span",0)?en(o,/\d+/):+en(o,/\d+/)-+en(i,/\d+/))+";":Ie+we(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(l){return en(l.props,/grid-\w+-start/)})?i:Ie+we(we(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return we(i,/(.+)-inline(.+)/,Ce+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vt(i)-1-n>6)switch(Qe(i,n+1)){case 109:if(Qe(i,n+4)!==45)break;case 102:return we(i,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+vi+(Qe(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~Bo(i,"stretch",0)?xf(we(i,"stretch","fill-available"),n,o)+i:i}break;case 5152:case 5920:return we(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,c,p,g,f,x){return Ie+u+":"+c+x+(p?Ie+u+"-span:"+(g?f:+f-+c)+x:"")+i});case 4949:if(Qe(i,n+6)===121)return we(i,":",":"+Ce)+i;break;case 6444:switch(Qe(i,Qe(i,14)===45?18:11)){case 120:return we(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(Qe(i,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Ie+"$2box$3")+i;case 100:return we(i,":",":"+Ie)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(i,"scroll-","scroll-snap-")+i}return i}function Uo(i,n){for(var o="",l=0;l<i.length;l++)o+=n(i[l],l,i,n)||"";return o}function bh(i,n,o,l){switch(i.type){case ch:if(i.children.length)break;case uh:case Ia:return i.return=i.return||i.value;case pf:return"";case mf:return i.return=i.value+"{"+Uo(i.children,l)+"}";case ns:if(!Vt(i.value=i.props.join(",")))return""}return Vt(o=Uo(i.children,l))?i.return=i.value+"{"+o+"}":""}function Eh(i){var n=vf(i);return function(o,l,u,c){for(var p="",g=0;g<n;g++)p+=i[g](o,l,u,c)||"";return p}}function Th(i){return function(n){n.root||(n=n.return)&&i(n)}}function Ch(i,n,o,l){if(i.length>-1&&!i.return)switch(i.type){case Ia:i.return=xf(i.value,i.length,o);return;case mf:return Uo([kn(i,{value:we(i.value,"@","@"+Ce)})],l);case ns:if(i.length)return fh(o=i.props,function(u){switch(en(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(kn(i,{props:[we(u,/:(read-\w+)/,":"+vi+"$1")]})),hr(kn(i,{props:[u]})),wa(i,{props:$d(o,l)});break;case"::placeholder":hr(kn(i,{props:[we(u,/:(plac\w+)/,":"+Ce+"input-$1")]})),hr(kn(i,{props:[we(u,/:(plac\w+)/,":"+vi+"$1")]})),hr(kn(i,{props:[we(u,/:(plac\w+)/,Ie+"input-$1")]})),hr(kn(i,{props:[u]})),wa(i,{props:$d(o,l)});break}return""})}}var jh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},wr=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",wf="active",Sf="data-styled-version",ss="6.1.13",Aa=`/*!sc*/
`,Yo=typeof window<"u"&&"HTMLElement"in window,Ph=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),ls=Object.freeze([]),Sr=Object.freeze({});function zh(i,n,o){return o===void 0&&(o=Sr),i.theme!==o.theme&&i.theme||n||o.theme}var kf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_h=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mh=/(^-|-$)/g;function Gd(i){return i.replace(_h,"-").replace(Mh,"")}var Oh=/(a)(d)/gi,Io=52,Wd=function(i){return String.fromCharCode(i+(i>25?39:97))};function ba(i){var n,o="";for(n=Math.abs(i);n>Io;n=n/Io|0)o=Wd(n%Io)+o;return(Wd(n%Io)+o).replace(Oh,"$1-$2")}var la,bf=5381,gr=function(i,n){for(var o=n.length;o;)i=33*i^n.charCodeAt(--o);return i},Ef=function(i){return gr(bf,i)};function Tf(i){return ba(Ef(i)>>>0)}function Lh(i){return i.displayName||i.name||"Component"}function aa(i){return typeof i=="string"&&!0}var Cf=typeof Symbol=="function"&&Symbol.for,jf=Cf?Symbol.for("react.memo"):60115,Ih=Cf?Symbol.for("react.forward_ref"):60112,Nh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ah={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dh=((la={})[Ih]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},la[jf]=Pf,la);function qd(i){return("type"in(n=i)&&n.type.$$typeof)===jf?Pf:"$$typeof"in i?Dh[i.$$typeof]:Nh;var n}var Rh=Object.defineProperty,Fh=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,Bh=Object.getOwnPropertyDescriptor,$h=Object.getPrototypeOf,Yd=Object.prototype;function zf(i,n,o){if(typeof n!="string"){if(Yd){var l=$h(n);l&&l!==Yd&&zf(i,l,o)}var u=Fh(n);Ud&&(u=u.concat(Ud(n)));for(var c=qd(i),p=qd(n),g=0;g<u.length;++g){var f=u[g];if(!(f in Ah||o&&o[f]||p&&f in p||c&&f in c)){var x=Bh(n,f);try{Rh(i,f,x)}catch{}}}}return i}function kr(i){return typeof i=="function"}function Da(i){return typeof i=="object"&&"styledComponentId"in i}function Dn(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function Ea(i,n){if(i.length===0)return"";for(var o=i[0],l=1;l<i.length;l++)o+=i[l];return o}function wi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ta(i,n,o){if(o===void 0&&(o=!1),!o&&!wi(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var l=0;l<n.length;l++)i[l]=Ta(i[l],n[l]);else if(wi(n))for(var l in n)i[l]=Ta(i[l],n[l]);return i}function Ra(i,n){Object.defineProperty(i,"toString",{value:n})}function Si(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Vh=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var o=0,l=0;l<n;l++)o+=this.groupSizes[l];return o},i.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,c=u;n>=c;)if((c<<=1)<0)throw Si(16,"".concat(n));this.groupSizes=new Uint32Array(c),this.groupSizes.set(l),this.length=c;for(var p=u;p<c;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(n+1),f=(p=0,o.length);p<f;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[n]++,g++)},i.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],l=this.indexOfGroup(n),u=l+o;this.groupSizes[n]=0;for(var c=l;c<u;c++)this.tag.deleteRule(l)}},i.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var l=this.groupSizes[n],u=this.indexOfGroup(n),c=u+l,p=u;p<c;p++)o+="".concat(this.tag.getRule(p)).concat(Aa);return o},i}(),Ho=new Map,Xo=new Map,Go=1,No=function(i){if(Ho.has(i))return Ho.get(i);for(;Xo.has(Go);)Go++;var n=Go++;return Ho.set(i,n),Xo.set(n,i),n},Hh=function(i,n){Go=n+1,Ho.set(i,n),Xo.set(n,i)},Gh="style[".concat(wr,"][").concat(Sf,'="').concat(ss,'"]'),Wh=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qh=function(i,n,o){for(var l,u=o.split(","),c=0,p=u.length;c<p;c++)(l=u[c])&&i.registerName(n,l)},Uh=function(i,n){for(var o,l=((o=n.textContent)!==null&&o!==void 0?o:"").split(Aa),u=[],c=0,p=l.length;c<p;c++){var g=l[c].trim();if(g){var f=g.match(Wh);if(f){var x=0|parseInt(f[1],10),v=f[2];x!==0&&(Hh(v,x),qh(i,v,f[3]),i.getTag().insertRules(x,u)),u.length=0}else u.push(g)}}},Xd=function(i){for(var n=document.querySelectorAll(Gh),o=0,l=n.length;o<l;o++){var u=n[o];u&&u.getAttribute(wr)!==wf&&(Uh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function Yh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _f=function(i){var n=document.head,o=i||n,l=document.createElement("style"),u=function(g){var f=Array.from(g.querySelectorAll("style[".concat(wr,"]")));return f[f.length-1]}(o),c=u!==void 0?u.nextSibling:null;l.setAttribute(wr,wf),l.setAttribute(Sf,ss);var p=Yh();return p&&l.setAttribute("nonce",p),o.insertBefore(l,c),l},Xh=function(){function i(n){this.element=_f(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,u=0,c=l.length;u<c;u++){var p=l[u];if(p.ownerNode===o)return p}throw Si(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},i}(),Qh=function(){function i(n){this.element=_f(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var l=document.createTextNode(o);return this.element.insertBefore(l,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),Kh=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),Qd=Yo,Zh={isServer:!Yo,useCSSOMInjection:!Ph},Mf=function(){function i(n,o,l){n===void 0&&(n=Sr),o===void 0&&(o={});var u=this;this.options=ft(ft({},Zh),n),this.gs=o,this.names=new Map(l),this.server=!!n.isServer,!this.server&&Yo&&Qd&&(Qd=!1,Xd(this)),Ra(this,function(){return function(c){for(var p=c.getTag(),g=p.length,f="",x=function(y){var k=function(M){return Xo.get(M)}(y);if(k===void 0)return"continue";var b=c.names.get(k),P=p.getGroup(y);if(b===void 0||!b.size||P.length===0)return"continue";var I="".concat(wr,".g").concat(y,'[id="').concat(k,'"]'),B="";b!==void 0&&b.forEach(function(M){M.length>0&&(B+="".concat(M,","))}),f+="".concat(P).concat(I,'{content:"').concat(B,'"}').concat(Aa)},v=0;v<g;v++)x(v);return f}(u)})}return i.registerId=function(n){return No(n)},i.prototype.rehydrate=function(){!this.server&&Yo&&Xd(this)},i.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new i(ft(ft({},this.options),n),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var l=o.useCSSOMInjection,u=o.target;return o.isServer?new Kh(u):l?new Xh(u):new Qh(u)}(this.options),new Vh(n)));var n},i.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},i.prototype.registerName=function(n,o){if(No(n),this.names.has(n))this.names.get(n).add(o);else{var l=new Set;l.add(o),this.names.set(n,l)}},i.prototype.insertRules=function(n,o,l){this.registerName(n,o),this.getTag().insertRules(No(n),l)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(No(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Jh=/&/g,e0=/^\s*\/\/.*$/gm;function Of(i,n){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(l){return"".concat(n," ").concat(l)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Of(o.children,n)),o})}function t0(i){var n,o,l,u=Sr,c=u.options,p=c===void 0?Sr:c,g=u.plugins,f=g===void 0?ls:g,x=function(k,b,P){return P.startsWith(o)&&P.endsWith(o)&&P.replaceAll(o,"").length>0?".".concat(n):k},v=f.slice();v.push(function(k){k.type===ns&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(Jh,o).replace(l,x))}),p.prefix&&v.push(Ch),v.push(bh);var y=function(k,b,P,I){b===void 0&&(b=""),P===void 0&&(P=""),I===void 0&&(I="&"),n=I,o=b,l=new RegExp("\\".concat(o,"\\b"),"g");var B=k.replace(e0,""),M=Sh(P||b?"".concat(P," ").concat(b," { ").concat(B," }"):B);p.namespace&&(M=Of(M,p.namespace));var T=[];return Uo(M,Eh(v.concat(Th(function(S){return T.push(S)})))),T};return y.hash=f.length?f.reduce(function(k,b){return b.name||Si(15),gr(k,b.name)},bf).toString():"",y}var n0=new Mf,Ca=t0(),Lf=Te.createContext({shouldForwardProp:void 0,styleSheet:n0,stylis:Ca});Lf.Consumer;Te.createContext(void 0);function Kd(){return ye.useContext(Lf)}var If=function(){function i(n,o){var l=this;this.inject=function(u,c){c===void 0&&(c=Ca);var p=l.name+c.hash;u.hasNameForId(l.id,p)||u.insertRules(l.id,p,c(l.rules,p,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,Ra(this,function(){throw Si(12,String(l.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=Ca),this.name+n.hash},i}(),r0=function(i){return i>="A"&&i<="Z"};function Zd(i){for(var n="",o=0;o<i.length;o++){var l=i[o];if(o===1&&l==="-"&&i[0]==="-")return i;r0(l)?n+="-"+l.toLowerCase():n+=l}return n.startsWith("ms-")?"-"+n:n}var Nf=function(i){return i==null||i===!1||i===""},Af=function(i){var n,o,l=[];for(var u in i){var c=i[u];i.hasOwnProperty(u)&&!Nf(c)&&(Array.isArray(c)&&c.isCss||kr(c)?l.push("".concat(Zd(u),":"),c,";"):wi(c)?l.push.apply(l,xi(xi(["".concat(u," {")],Af(c),!1),["}"],!1)):l.push("".concat(Zd(u),": ").concat((n=u,(o=c)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in jh||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return l};function Fn(i,n,o,l){if(Nf(i))return[];if(Da(i))return[".".concat(i.styledComponentId)];if(kr(i)){if(!kr(c=i)||c.prototype&&c.prototype.isReactComponent||!n)return[i];var u=i(n);return Fn(u,n,o,l)}var c;return i instanceof If?o?(i.inject(o,l),[i.getName(l)]):[i]:wi(i)?Af(i):Array.isArray(i)?Array.prototype.concat.apply(ls,i.map(function(p){return Fn(p,n,o,l)})):[i.toString()]}function i0(i){for(var n=0;n<i.length;n+=1){var o=i[n];if(kr(o)&&!Da(o))return!1}return!0}var o0=Ef(ss),s0=function(){function i(n,o,l){this.rules=n,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&i0(n),this.componentId=o,this.baseHash=gr(o0,o),this.baseStyle=l,Mf.registerId(o)}return i.prototype.generateAndInjectStyles=function(n,o,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=Dn(u,this.staticRulesId);else{var c=Ea(Fn(this.rules,n,o,l)),p=ba(gr(this.baseHash,c)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=l(c,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}u=Dn(u,p),this.staticRulesId=p}else{for(var f=gr(this.baseHash,l.hash),x="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")x+=y;else if(y){var k=Ea(Fn(y,n,o,l));f=gr(f,k+v),x+=k}}if(x){var b=ba(f>>>0);o.hasNameForId(this.componentId,b)||o.insertRules(this.componentId,b,l(x,".".concat(b),void 0,this.componentId)),u=Dn(u,b)}}return u},i}(),Df=Te.createContext(void 0);Df.Consumer;var ua={};function l0(i,n,o){var l=Da(i),u=i,c=!aa(i),p=n.attrs,g=p===void 0?ls:p,f=n.componentId,x=f===void 0?function(_,N){var A=typeof _!="string"?"sc":Gd(_);ua[A]=(ua[A]||0)+1;var Q="".concat(A,"-").concat(Tf(ss+A+ua[A]));return N?"".concat(N,"-").concat(Q):Q}(n.displayName,n.parentComponentId):f,v=n.displayName,y=v===void 0?function(_){return aa(_)?"styled.".concat(_):"Styled(".concat(Lh(_),")")}(i):v,k=n.displayName&&n.componentId?"".concat(Gd(n.displayName),"-").concat(n.componentId):n.componentId||x,b=l&&u.attrs?u.attrs.concat(g).filter(Boolean):g,P=n.shouldForwardProp;if(l&&u.shouldForwardProp){var I=u.shouldForwardProp;if(n.shouldForwardProp){var B=n.shouldForwardProp;P=function(_,N){return I(_,N)&&B(_,N)}}else P=I}var M=new s0(o,k,l?u.componentStyle:void 0);function T(_,N){return function(A,Q,G){var H=A.attrs,W=A.componentStyle,R=A.defaultProps,D=A.foldedComponentIds,$=A.styledComponentId,U=A.target,re=Te.useContext(Df),me=Kd(),xe=A.shouldForwardProp||me.shouldForwardProp,V=zh(Q,re,R)||Sr,Z=function(he,fe,pe){for(var le,ve=ft(ft({},fe),{className:void 0,theme:pe}),_e=0;_e<he.length;_e+=1){var qe=kr(le=he[_e])?le(ve):le;for(var Fe in qe)ve[Fe]=Fe==="className"?Dn(ve[Fe],qe[Fe]):Fe==="style"?ft(ft({},ve[Fe]),qe[Fe]):qe[Fe]}return fe.className&&(ve.className=Dn(ve.className,fe.className)),ve}(H,Q,V),X=Z.as||U,j={};for(var F in Z)Z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&Z.theme===V||(F==="forwardedAs"?j.as=Z.forwardedAs:xe&&!xe(F,X)||(j[F]=Z[F]));var ue=function(he,fe){var pe=Kd(),le=he.generateAndInjectStyles(fe,pe.styleSheet,pe.stylis);return le}(W,Z),ae=Dn(D,$);return ue&&(ae+=" "+ue),Z.className&&(ae+=" "+Z.className),j[aa(X)&&!kf.has(X)?"class":"className"]=ae,j.ref=G,ye.createElement(X,j)}(S,_,N)}T.displayName=y;var S=Te.forwardRef(T);return S.attrs=b,S.componentStyle=M,S.displayName=y,S.shouldForwardProp=P,S.foldedComponentIds=l?Dn(u.foldedComponentIds,u.styledComponentId):"",S.styledComponentId=k,S.target=l?u.target:i,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=l?function(N){for(var A=[],Q=1;Q<arguments.length;Q++)A[Q-1]=arguments[Q];for(var G=0,H=A;G<H.length;G++)Ta(N,H[G],!0);return N}({},u.defaultProps,_):_}}),Ra(S,function(){return".".concat(S.styledComponentId)}),c&&zf(S,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Jd(i,n){for(var o=[i[0]],l=0,u=n.length;l<u;l+=1)o.push(n[l],i[l+1]);return o}var ef=function(i){return Object.assign(i,{isCss:!0})};function Rf(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(kr(i)||wi(i))return ef(Fn(Jd(ls,xi([i],n,!0))));var l=i;return n.length===0&&l.length===1&&typeof l[0]=="string"?Fn(l):ef(Fn(Jd(l,n)))}function ja(i,n,o){if(o===void 0&&(o=Sr),!n)throw Si(1,n);var l=function(u){for(var c=[],p=1;p<arguments.length;p++)c[p-1]=arguments[p];return i(n,o,Rf.apply(void 0,xi([u],c,!1)))};return l.attrs=function(u){return ja(i,n,ft(ft({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return ja(i,n,ft(ft({},o),u))},l}var Ff=function(i){return ja(l0,i)},ee=Ff;kf.forEach(function(i){ee[i]=Ff(i)});function as(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var l=Ea(Rf.apply(void 0,xi([i],n,!1))),u=Tf(l);return new If(u,l)}var Wo={exports:{}},a0=Wo.exports,tf;function u0(){return tf||(tf=1,function(i,n){(function(o,l){i.exports=l()})(a0,function(){return function(o){function l(c){if(u[c])return u[c].exports;var p=u[c]={exports:{},id:c,loaded:!1};return o[c].call(p.exports,p,p.exports,l),p.loaded=!0,p.exports}var u={};return l.m=o,l.c=u,l.p="dist/",l(0)}([function(o,l,u){function c(U){return U&&U.__esModule?U:{default:U}}var p=Object.assign||function(U){for(var re=1;re<arguments.length;re++){var me=arguments[re];for(var xe in me)Object.prototype.hasOwnProperty.call(me,xe)&&(U[xe]=me[xe])}return U},g=u(1),f=(c(g),u(6)),x=c(f),v=u(7),y=c(v),k=u(8),b=c(k),P=u(9),I=c(P),B=u(10),M=c(B),T=u(11),S=c(T),_=u(14),N=c(_),A=[],Q=!1,G={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var U=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(U&&(Q=!0),Q)return A=(0,S.default)(A,G),(0,M.default)(A,G.once),A},W=function(){A=(0,N.default)(),H()},R=function(){A.forEach(function(U,re){U.node.removeAttribute("data-aos"),U.node.removeAttribute("data-aos-easing"),U.node.removeAttribute("data-aos-duration"),U.node.removeAttribute("data-aos-delay")})},D=function(U){return U===!0||U==="mobile"&&I.default.mobile()||U==="phone"&&I.default.phone()||U==="tablet"&&I.default.tablet()||typeof U=="function"&&U()===!0},$=function(U){G=p(G,U),A=(0,N.default)();var re=document.all&&!window.atob;return D(G.disable)||re?R():(G.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),G.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",G.easing),document.querySelector("body").setAttribute("data-aos-duration",G.duration),document.querySelector("body").setAttribute("data-aos-delay",G.delay),G.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):G.startEvent==="load"?window.addEventListener(G.startEvent,function(){H(!0)}):document.addEventListener(G.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(H,G.debounceDelay,!0)),window.addEventListener("scroll",(0,x.default)(function(){(0,M.default)(A,G.once)},G.throttleDelay)),G.disableMutationObserver||b.default.ready("[data-aos]",W),A)};o.exports={init:$,refresh:H,refreshHard:W}},function(o,l){},,,,,function(o,l){(function(u){function c(D,$,U){function re(be){var Ke=ae,jt=he;return ae=he=void 0,_e=be,pe=D.apply(jt,Ke)}function me(be){return _e=be,le=setTimeout(Z,$),qe?re(be):pe}function xe(be){var Ke=be-ve,jt=be-_e,Hn=$-Ke;return Fe?W(Hn,fe-jt):Hn}function V(be){var Ke=be-ve,jt=be-_e;return ve===void 0||Ke>=$||Ke<0||Fe&&jt>=fe}function Z(){var be=R();return V(be)?X(be):void(le=setTimeout(Z,xe(be)))}function X(be){return le=void 0,Pe&&ae?re(be):(ae=he=void 0,pe)}function j(){le!==void 0&&clearTimeout(le),_e=0,ae=ve=he=le=void 0}function F(){return le===void 0?pe:X(R())}function ue(){var be=R(),Ke=V(be);if(ae=arguments,he=this,ve=be,Ke){if(le===void 0)return me(ve);if(Fe)return le=setTimeout(Z,$),re(ve)}return le===void 0&&(le=setTimeout(Z,$)),pe}var ae,he,fe,pe,le,ve,_e=0,qe=!1,Fe=!1,Pe=!0;if(typeof D!="function")throw new TypeError(k);return $=v($)||0,g(U)&&(qe=!!U.leading,Fe="maxWait"in U,fe=Fe?H(v(U.maxWait)||0,$):fe,Pe="trailing"in U?!!U.trailing:Pe),ue.cancel=j,ue.flush=F,ue}function p(D,$,U){var re=!0,me=!0;if(typeof D!="function")throw new TypeError(k);return g(U)&&(re="leading"in U?!!U.leading:re,me="trailing"in U?!!U.trailing:me),c(D,$,{leading:re,maxWait:$,trailing:me})}function g(D){var $=typeof D>"u"?"undefined":y(D);return!!D&&($=="object"||$=="function")}function f(D){return!!D&&(typeof D>"u"?"undefined":y(D))=="object"}function x(D){return(typeof D>"u"?"undefined":y(D))=="symbol"||f(D)&&G.call(D)==P}function v(D){if(typeof D=="number")return D;if(x(D))return b;if(g(D)){var $=typeof D.valueOf=="function"?D.valueOf():D;D=g($)?$+"":$}if(typeof D!="string")return D===0?D:+D;D=D.replace(I,"");var U=M.test(D);return U||T.test(D)?S(D.slice(2),U?2:8):B.test(D)?b:+D}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},k="Expected a function",b=NaN,P="[object Symbol]",I=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,T=/^0o[0-7]+$/i,S=parseInt,_=(typeof u>"u"?"undefined":y(u))=="object"&&u&&u.Object===Object&&u,N=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,A=_||N||Function("return this")(),Q=Object.prototype,G=Q.toString,H=Math.max,W=Math.min,R=function(){return A.Date.now()};o.exports=p}).call(l,function(){return this}())},function(o,l){(function(u){function c(R,D,$){function U(Pe){var be=ue,Ke=ae;return ue=ae=void 0,ve=Pe,fe=R.apply(Ke,be)}function re(Pe){return ve=Pe,pe=setTimeout(V,D),_e?U(Pe):fe}function me(Pe){var be=Pe-le,Ke=Pe-ve,jt=D-be;return qe?H(jt,he-Ke):jt}function xe(Pe){var be=Pe-le,Ke=Pe-ve;return le===void 0||be>=D||be<0||qe&&Ke>=he}function V(){var Pe=W();return xe(Pe)?Z(Pe):void(pe=setTimeout(V,me(Pe)))}function Z(Pe){return pe=void 0,Fe&&ue?U(Pe):(ue=ae=void 0,fe)}function X(){pe!==void 0&&clearTimeout(pe),ve=0,ue=le=ae=pe=void 0}function j(){return pe===void 0?fe:Z(W())}function F(){var Pe=W(),be=xe(Pe);if(ue=arguments,ae=this,le=Pe,be){if(pe===void 0)return re(le);if(qe)return pe=setTimeout(V,D),U(le)}return pe===void 0&&(pe=setTimeout(V,D)),fe}var ue,ae,he,fe,pe,le,ve=0,_e=!1,qe=!1,Fe=!0;if(typeof R!="function")throw new TypeError(y);return D=x(D)||0,p($)&&(_e=!!$.leading,qe="maxWait"in $,he=qe?G(x($.maxWait)||0,D):he,Fe="trailing"in $?!!$.trailing:Fe),F.cancel=X,F.flush=j,F}function p(R){var D=typeof R>"u"?"undefined":v(R);return!!R&&(D=="object"||D=="function")}function g(R){return!!R&&(typeof R>"u"?"undefined":v(R))=="object"}function f(R){return(typeof R>"u"?"undefined":v(R))=="symbol"||g(R)&&Q.call(R)==b}function x(R){if(typeof R=="number")return R;if(f(R))return k;if(p(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=p(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=R.replace(P,"");var $=B.test(R);return $||M.test(R)?T(R.slice(2),$?2:8):I.test(R)?k:+R}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},y="Expected a function",k=NaN,b="[object Symbol]",P=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,M=/^0o[0-7]+$/i,T=parseInt,S=(typeof u>"u"?"undefined":v(u))=="object"&&u&&u.Object===Object&&u,_=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,N=S||_||Function("return this")(),A=Object.prototype,Q=A.toString,G=Math.max,H=Math.min,W=function(){return N.Date.now()};o.exports=c}).call(l,function(){return this}())},function(o,l){function u(v){var y=void 0,k=void 0;for(y=0;y<v.length;y+=1)if(k=v[y],k.dataset&&k.dataset.aos||k.children&&u(k.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(){return!!c()}function g(v,y){var k=window.document,b=c(),P=new b(f);x=y,P.observe(k.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(v){v&&v.forEach(function(y){var k=Array.prototype.slice.call(y.addedNodes),b=Array.prototype.slice.call(y.removedNodes),P=k.concat(b);if(u(P))return x()})}Object.defineProperty(l,"__esModule",{value:!0});var x=function(){};l.default={isSupported:p,ready:g}},function(o,l){function u(k,b){if(!(k instanceof b))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(l,"__esModule",{value:!0});var p=function(){function k(b,P){for(var I=0;I<P.length;I++){var B=P[I];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}return function(b,P,I){return P&&k(b.prototype,P),I&&k(b,I),b}}(),g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,x=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=function(){function k(){u(this,k)}return p(k,[{key:"phone",value:function(){var b=c();return!(!g.test(b)&&!f.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=c();return!(!x.test(b)&&!v.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),k}();l.default=new y},function(o,l){Object.defineProperty(l,"__esModule",{value:!0});var u=function(p,g,f){var x=p.node.getAttribute("data-aos-once");g>p.position?p.node.classList.add("aos-animate"):typeof x<"u"&&(x==="false"||!f&&x!=="true")&&p.node.classList.remove("aos-animate")},c=function(p,g){var f=window.pageYOffset,x=window.innerHeight;p.forEach(function(v,y){u(v,x+f,g)})};l.default=c},function(o,l,u){function c(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(l,"__esModule",{value:!0});var p=u(12),g=c(p),f=function(x,v){return x.forEach(function(y,k){y.node.classList.add("aos-init"),y.position=(0,g.default)(y.node,v.offset)}),x};l.default=f},function(o,l,u){function c(x){return x&&x.__esModule?x:{default:x}}Object.defineProperty(l,"__esModule",{value:!0});var p=u(13),g=c(p),f=function(x,v){var y=0,k=0,b=window.innerHeight,P={offset:x.getAttribute("data-aos-offset"),anchor:x.getAttribute("data-aos-anchor"),anchorPlacement:x.getAttribute("data-aos-anchor-placement")};switch(P.offset&&!isNaN(P.offset)&&(k=parseInt(P.offset)),P.anchor&&document.querySelectorAll(P.anchor)&&(x=document.querySelectorAll(P.anchor)[0]),y=(0,g.default)(x).top,P.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=x.offsetHeight/2;break;case"bottom-bottom":y+=x.offsetHeight;break;case"top-center":y+=b/2;break;case"bottom-center":y+=b/2+x.offsetHeight;break;case"center-center":y+=b/2+x.offsetHeight/2;break;case"top-top":y+=b;break;case"bottom-top":y+=x.offsetHeight+b;break;case"center-top":y+=x.offsetHeight/2+b}return P.anchorPlacement||P.offset||isNaN(v)||(k=v),y+k};l.default=f},function(o,l){Object.defineProperty(l,"__esModule",{value:!0});var u=function(c){for(var p=0,g=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)p+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),g+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:g,left:p}};l.default=u},function(o,l){Object.defineProperty(l,"__esModule",{value:!0});var u=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(p){return{node:p}})};l.default=u}])})}(Wo)),Wo.exports}var c0=u0();const Bf=ff(c0),d0=ee.header`
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
  transition: transform 0.4s ease;

  /* Quando scrolling = true, o header sobe (-100%) */
  /* Quando scrolling = false, ele volta para 0 */
  transform: ${({scrolling:i})=>i?"translateX(-50%) translateY(-150%)":"translateX(-50%) translateY(0)"};
`,f0=ee.div`
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
`;function p0(){const[i,n]=ye.useState(!1),o=ye.useRef(null);return ye.useEffect(()=>{Bf.init({duration:1500,offset:20,easing:"ease-in-out",once:!0})},[]),ye.useEffect(()=>{const l=()=>{n(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n(!1)},1e3)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),o.current&&clearTimeout(o.current)}},[]),m.jsx(d0,{scrolling:i,children:m.jsx(f0,{"data-aos":"zoom-out-top","data-aos-delay":"100",children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png",alt:"logo"})})})})}const m0=ee.button`
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
    
`,Vn=()=>m.jsx(m.Fragment,{children:m.jsxs(m0,{id:"click-button",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"})]})}),h0=ee.button`
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
    
`,g0=()=>m.jsx(m.Fragment,{children:m.jsx(h0,{id:"click-button",children:m.jsx("b",{children:"Saber mais"})})});as`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;const v0=ee.div`
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
`,y0=ee.section`
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
`,x0=ee.div`
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
`,w0=ee.div`
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
`,S0=ee.div`
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
`,k0=()=>(ye.useEffect(()=>{Bf.init({duration:1500,offset:20,easing:"ease-in-out",once:!0})},[]),m.jsxs(m.Fragment,{children:[m.jsx(v0,{}),m.jsxs(y0,{children:[m.jsxs(x0,{children:[m.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:["Já imaginou ter um ",m.jsx("b",{children:"site de altíssimo"})," padrão?"]}),m.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),m.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"300",children:[m.jsx(Vn,{}),m.jsx(g0,{})]}),m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),m.jsxs(S0,{"data-aos":"fade-in","data-aos-delay":"500",children:[m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsxs("article",{children:[m.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"4.9"}),m.jsx("img",{"data-aos":"fade-in","data-aos-delay":"1000",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"})]})]})]}),m.jsx(w0,{children:m.jsx("img",{"data-aos":"fade-up-right","data-aos-duration":"2000","data-aos-delay":"0",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png"})})]})]}));var $f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nf=Te.createContext&&Te.createContext($f),b0=["attr","size","title"];function E0(i,n){if(i==null)return{};var o=T0(i,n),l,u;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(u=0;u<c.length;u++)l=c[u],!(n.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(o[l]=i[l])}return o}function T0(i,n){if(i==null)return{};var o={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){if(n.indexOf(l)>=0)continue;o[l]=i[l]}return o}function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},Qo.apply(this,arguments)}function rf(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,l)}return o}function Ko(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?rf(Object(o),!0).forEach(function(l){C0(i,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):rf(Object(o)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(o,l))})}return i}function C0(i,n,o){return n=j0(n),n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function j0(i){var n=P0(i,"string");return typeof n=="symbol"?n:n+""}function P0(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var l=o.call(i,n||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function Vf(i){return i&&i.map((n,o)=>Te.createElement(n.tag,Ko({key:o},n.attr),Vf(n.child)))}function At(i){return n=>Te.createElement(z0,Qo({attr:Ko({},i.attr)},n),Vf(i.child))}function z0(i){var n=o=>{var{attr:l,size:u,title:c}=i,p=E0(i,b0),g=u||o.size||"1em",f;return o.className&&(f=o.className),i.className&&(f=(f?f+" ":"")+i.className),Te.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,p,{className:f,style:Ko(Ko({color:i.color||o.color},o.style),i.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),c&&Te.createElement("title",null,c),i.children)};return nf!==void 0?Te.createElement(nf.Consumer,null,o=>n(o)):n($f)}function Hf(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(i)}function _0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function M0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(i)}function Ao(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(i)}function O0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"},child:[]},{tag:"path",attr:{d:"M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"},child:[]}]})(i)}function L0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},child:[]},{tag:"path",attr:{d:"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"},child:[]}]})(i)}function I0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(i)}function N0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(i)}function A0(i){return At({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"},child:[]},{tag:"path",attr:{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"},child:[]}]})(i)}const D0=ee.div`
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

`,di=({title:i,description:n})=>m.jsxs(D0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Vn,{})]}),R0=ee.div`
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

`,fi=({title:i,description:n})=>m.jsxs(R0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Vn,{})]});function of(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Fa(i,n){i===void 0&&(i={}),n===void 0&&(n={}),Object.keys(n).forEach(o=>{typeof i[o]>"u"?i[o]=n[o]:of(n[o])&&of(i[o])&&Object.keys(n[o]).length>0&&Fa(i[o],n[o])})}const Gf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tn(){const i=typeof document<"u"?document:{};return Fa(i,Gf),i}const F0={document:Gf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function xt(){const i=typeof window<"u"?window:{};return Fa(i,F0),i}function B0(i){return i===void 0&&(i=""),i.trim().split(" ").filter(n=>!!n.trim())}function $0(i){const n=i;Object.keys(n).forEach(o=>{try{n[o]=null}catch{}try{delete n[o]}catch{}})}function Pa(i,n){return n===void 0&&(n=0),setTimeout(i,n)}function Bn(){return Date.now()}function V0(i){const n=xt();let o;return n.getComputedStyle&&(o=n.getComputedStyle(i,null)),!o&&i.currentStyle&&(o=i.currentStyle),o||(o=i.style),o}function H0(i,n){n===void 0&&(n="x");const o=xt();let l,u,c;const p=V0(i);return o.WebKitCSSMatrix?(u=p.transform||p.webkitTransform,u.split(",").length>6&&(u=u.split(", ").map(g=>g.replace(",",".")).join(", ")),c=new o.WebKitCSSMatrix(u==="none"?"":u)):(c=p.MozTransform||p.OTransform||p.MsTransform||p.msTransform||p.transform||p.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),l=c.toString().split(",")),n==="x"&&(o.WebKitCSSMatrix?u=c.m41:l.length===16?u=parseFloat(l[12]):u=parseFloat(l[4])),n==="y"&&(o.WebKitCSSMatrix?u=c.m42:l.length===16?u=parseFloat(l[13]):u=parseFloat(l[5])),u||0}function Do(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function G0(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function yt(){const i=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let o=1;o<arguments.length;o+=1){const l=o<0||arguments.length<=o?void 0:arguments[o];if(l!=null&&!G0(l)){const u=Object.keys(Object(l)).filter(c=>n.indexOf(c)<0);for(let c=0,p=u.length;c<p;c+=1){const g=u[c],f=Object.getOwnPropertyDescriptor(l,g);f!==void 0&&f.enumerable&&(Do(i[g])&&Do(l[g])?l[g].__swiper__?i[g]=l[g]:yt(i[g],l[g]):!Do(i[g])&&Do(l[g])?(i[g]={},l[g].__swiper__?i[g]=l[g]:yt(i[g],l[g])):i[g]=l[g])}}}return i}function Ro(i,n,o){i.style.setProperty(n,o)}function Wf(i){let{swiper:n,targetPosition:o,side:l}=i;const u=xt(),c=-n.translate;let p=null,g;const f=n.params.speed;n.wrapperEl.style.scrollSnapType="none",u.cancelAnimationFrame(n.cssModeFrameID);const x=o>c?"next":"prev",v=(k,b)=>x==="next"&&k>=b||x==="prev"&&k<=b,y=()=>{g=new Date().getTime(),p===null&&(p=g);const k=Math.max(Math.min((g-p)/f,1),0),b=.5-Math.cos(k*Math.PI)/2;let P=c+b*(o-c);if(v(P,o)&&(P=o),n.wrapperEl.scrollTo({[l]:P}),v(P,o)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[l]:P})}),u.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=u.requestAnimationFrame(y)};y()}function Ht(i,n){n===void 0&&(n="");const o=[...i.children];return i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),n?o.filter(l=>l.matches(n)):o}function W0(i,n){const o=n.contains(i);return!o&&n instanceof HTMLSlotElement?[...n.assignedElements()].includes(i):o}function Zo(i){try{console.warn(i);return}catch{}}function Jo(i,n){n===void 0&&(n=[]);const o=document.createElement(i);return o.classList.add(...Array.isArray(n)?n:B0(n)),o}function q0(i,n){const o=[];for(;i.previousElementSibling;){const l=i.previousElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function U0(i,n){const o=[];for(;i.nextElementSibling;){const l=i.nextElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function bn(i,n){return xt().getComputedStyle(i,null).getPropertyValue(n)}function es(i){let n=i,o;if(n){for(o=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(o+=1);return o}}function qf(i,n){const o=[];let l=i.parentElement;for(;l;)n?l.matches(n)&&o.push(l):o.push(l),l=l.parentElement;return o}function ca(i,n){function o(l){l.target===i&&(n.call(i,l),i.removeEventListener("transitionend",o))}n&&i.addEventListener("transitionend",o)}function za(i,n,o){const l=xt();return i[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}function Zt(i){return(Array.isArray(i)?i:[i]).filter(n=>!!n)}let da;function Y0(){const i=xt(),n=tn();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&n instanceof i.DocumentTouch)}}function Uf(){return da||(da=Y0()),da}let fa;function X0(i){let{userAgent:n}=i===void 0?{}:i;const o=Uf(),l=xt(),u=l.navigator.platform,c=n||l.navigator.userAgent,p={ios:!1,android:!1},g=l.screen.width,f=l.screen.height,x=c.match(/(Android);?[\s\/]+([\d.]+)?/);let v=c.match(/(iPad).*OS\s([\d_]+)/);const y=c.match(/(iPod)(.*OS\s([\d_]+))?/),k=!v&&c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=u==="Win32";let P=u==="MacIntel";const I=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!v&&P&&o.touch&&I.indexOf(`${g}x${f}`)>=0&&(v=c.match(/(Version)\/([\d.]+)/),v||(v=[0,1,"13_0_0"]),P=!1),x&&!b&&(p.os="android",p.android=!0),(v||k||y)&&(p.os="ios",p.ios=!0),p}function Yf(i){return i===void 0&&(i={}),fa||(fa=X0(i)),fa}let pa;function Q0(){const i=xt(),n=Yf();let o=!1;function l(){const g=i.navigator.userAgent.toLowerCase();return g.indexOf("safari")>=0&&g.indexOf("chrome")<0&&g.indexOf("android")<0}if(l()){const g=String(i.navigator.userAgent);if(g.includes("Version/")){const[f,x]=g.split("Version/")[1].split(" ")[0].split(".").map(v=>Number(v));o=f<16||f===16&&x<2}}const u=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),c=l(),p=c||u&&n.ios;return{isSafari:o||c,needPerspectiveFix:o,need3dFix:p,isWebView:u}}function K0(){return pa||(pa=Q0()),pa}function Z0(i){let{swiper:n,on:o,emit:l}=i;const u=xt();let c=null,p=null;const g=()=>{!n||n.destroyed||!n.initialized||(l("beforeResize"),l("resize"))},f=()=>{!n||n.destroyed||!n.initialized||(c=new ResizeObserver(y=>{p=u.requestAnimationFrame(()=>{const{width:k,height:b}=n;let P=k,I=b;y.forEach(B=>{let{contentBoxSize:M,contentRect:T,target:S}=B;S&&S!==n.el||(P=T?T.width:(M[0]||M).inlineSize,I=T?T.height:(M[0]||M).blockSize)}),(P!==k||I!==b)&&g()})}),c.observe(n.el))},x=()=>{p&&u.cancelAnimationFrame(p),c&&c.unobserve&&n.el&&(c.unobserve(n.el),c=null)},v=()=>{!n||n.destroyed||!n.initialized||l("orientationchange")};o("init",()=>{if(n.params.resizeObserver&&typeof u.ResizeObserver<"u"){f();return}u.addEventListener("resize",g),u.addEventListener("orientationchange",v)}),o("destroy",()=>{x(),u.removeEventListener("resize",g),u.removeEventListener("orientationchange",v)})}function J0(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const c=[],p=xt(),g=function(v,y){y===void 0&&(y={});const k=p.MutationObserver||p.WebkitMutationObserver,b=new k(P=>{if(n.__preventObserver__)return;if(P.length===1){u("observerUpdate",P[0]);return}const I=function(){u("observerUpdate",P[0])};p.requestAnimationFrame?p.requestAnimationFrame(I):p.setTimeout(I,0)});b.observe(v,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:n.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),c.push(b)},f=()=>{if(n.params.observer){if(n.params.observeParents){const v=qf(n.hostEl);for(let y=0;y<v.length;y+=1)g(v[y])}g(n.hostEl,{childList:n.params.observeSlideChildren}),g(n.wrapperEl,{attributes:!1})}},x=()=>{c.forEach(v=>{v.disconnect()}),c.splice(0,c.length)};o({observer:!1,observeParents:!1,observeSlideChildren:!1}),l("init",f),l("destroy",x)}var eg={on(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;const u=o?"unshift":"push";return i.split(" ").forEach(c=>{l.eventsListeners[c]||(l.eventsListeners[c]=[]),l.eventsListeners[c][u](n)}),l},once(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;function u(){l.off(i,u),u.__emitterProxy&&delete u.__emitterProxy;for(var c=arguments.length,p=new Array(c),g=0;g<c;g++)p[g]=arguments[g];n.apply(l,p)}return u.__emitterProxy=n,l.on(i,u,o)},onAny(i,n){const o=this;if(!o.eventsListeners||o.destroyed||typeof i!="function")return o;const l=n?"unshift":"push";return o.eventsAnyListeners.indexOf(i)<0&&o.eventsAnyListeners[l](i),o},offAny(i){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const o=n.eventsAnyListeners.indexOf(i);return o>=0&&n.eventsAnyListeners.splice(o,1),n},off(i,n){const o=this;return!o.eventsListeners||o.destroyed||!o.eventsListeners||i.split(" ").forEach(l=>{typeof n>"u"?o.eventsListeners[l]=[]:o.eventsListeners[l]&&o.eventsListeners[l].forEach((u,c)=>{(u===n||u.__emitterProxy&&u.__emitterProxy===n)&&o.eventsListeners[l].splice(c,1)})}),o},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let n,o,l;for(var u=arguments.length,c=new Array(u),p=0;p<u;p++)c[p]=arguments[p];return typeof c[0]=="string"||Array.isArray(c[0])?(n=c[0],o=c.slice(1,c.length),l=i):(n=c[0].events,o=c[0].data,l=c[0].context||i),o.unshift(l),(Array.isArray(n)?n:n.split(" ")).forEach(f=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(x=>{x.apply(l,[f,...o])}),i.eventsListeners&&i.eventsListeners[f]&&i.eventsListeners[f].forEach(x=>{x.apply(l,o)})}),i}};function tg(){const i=this;let n,o;const l=i.el;typeof i.params.width<"u"&&i.params.width!==null?n=i.params.width:n=l.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?o=i.params.height:o=l.clientHeight,!(n===0&&i.isHorizontal()||o===0&&i.isVertical())&&(n=n-parseInt(bn(l,"padding-left")||0,10)-parseInt(bn(l,"padding-right")||0,10),o=o-parseInt(bn(l,"padding-top")||0,10)-parseInt(bn(l,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(o)&&(o=0),Object.assign(i,{width:n,height:o,size:i.isHorizontal()?n:o}))}function ng(){const i=this;function n(W,R){return parseFloat(W.getPropertyValue(i.getDirectionLabel(R))||0)}const o=i.params,{wrapperEl:l,slidesEl:u,size:c,rtlTranslate:p,wrongRTL:g}=i,f=i.virtual&&o.virtual.enabled,x=f?i.virtual.slides.length:i.slides.length,v=Ht(u,`.${i.params.slideClass}, swiper-slide`),y=f?i.virtual.slides.length:v.length;let k=[];const b=[],P=[];let I=o.slidesOffsetBefore;typeof I=="function"&&(I=o.slidesOffsetBefore.call(i));let B=o.slidesOffsetAfter;typeof B=="function"&&(B=o.slidesOffsetAfter.call(i));const M=i.snapGrid.length,T=i.slidesGrid.length;let S=o.spaceBetween,_=-I,N=0,A=0;if(typeof c>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*c:typeof S=="string"&&(S=parseFloat(S)),i.virtualSize=-S,v.forEach(W=>{p?W.style.marginLeft="":W.style.marginRight="",W.style.marginBottom="",W.style.marginTop=""}),o.centeredSlides&&o.cssMode&&(Ro(l,"--swiper-centered-offset-before",""),Ro(l,"--swiper-centered-offset-after",""));const Q=o.grid&&o.grid.rows>1&&i.grid;Q?i.grid.initSlides(v):i.grid&&i.grid.unsetSlides();let G;const H=o.slidesPerView==="auto"&&o.breakpoints&&Object.keys(o.breakpoints).filter(W=>typeof o.breakpoints[W].slidesPerView<"u").length>0;for(let W=0;W<y;W+=1){G=0;let R;if(v[W]&&(R=v[W]),Q&&i.grid.updateSlide(W,R,v),!(v[W]&&bn(R,"display")==="none")){if(o.slidesPerView==="auto"){H&&(v[W].style[i.getDirectionLabel("width")]="");const D=getComputedStyle(R),$=R.style.transform,U=R.style.webkitTransform;if($&&(R.style.transform="none"),U&&(R.style.webkitTransform="none"),o.roundLengths)G=i.isHorizontal()?za(R,"width"):za(R,"height");else{const re=n(D,"width"),me=n(D,"padding-left"),xe=n(D,"padding-right"),V=n(D,"margin-left"),Z=n(D,"margin-right"),X=D.getPropertyValue("box-sizing");if(X&&X==="border-box")G=re+V+Z;else{const{clientWidth:j,offsetWidth:F}=R;G=re+me+xe+V+Z+(F-j)}}$&&(R.style.transform=$),U&&(R.style.webkitTransform=U),o.roundLengths&&(G=Math.floor(G))}else G=(c-(o.slidesPerView-1)*S)/o.slidesPerView,o.roundLengths&&(G=Math.floor(G)),v[W]&&(v[W].style[i.getDirectionLabel("width")]=`${G}px`);v[W]&&(v[W].swiperSlideSize=G),P.push(G),o.centeredSlides?(_=_+G/2+N/2+S,N===0&&W!==0&&(_=_-c/2-S),W===0&&(_=_-c/2-S),Math.abs(_)<1/1e3&&(_=0),o.roundLengths&&(_=Math.floor(_)),A%o.slidesPerGroup===0&&k.push(_),b.push(_)):(o.roundLengths&&(_=Math.floor(_)),(A-Math.min(i.params.slidesPerGroupSkip,A))%i.params.slidesPerGroup===0&&k.push(_),b.push(_),_=_+G+S),i.virtualSize+=G+S,N=G,A+=1}}if(i.virtualSize=Math.max(i.virtualSize,c)+B,p&&g&&(o.effect==="slide"||o.effect==="coverflow")&&(l.style.width=`${i.virtualSize+S}px`),o.setWrapperSize&&(l.style[i.getDirectionLabel("width")]=`${i.virtualSize+S}px`),Q&&i.grid.updateWrapperSize(G,k),!o.centeredSlides){const W=[];for(let R=0;R<k.length;R+=1){let D=k[R];o.roundLengths&&(D=Math.floor(D)),k[R]<=i.virtualSize-c&&W.push(D)}k=W,Math.floor(i.virtualSize-c)-Math.floor(k[k.length-1])>1&&k.push(i.virtualSize-c)}if(f&&o.loop){const W=P[0]+S;if(o.slidesPerGroup>1){const R=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/o.slidesPerGroup),D=W*o.slidesPerGroup;for(let $=0;$<R;$+=1)k.push(k[k.length-1]+D)}for(let R=0;R<i.virtual.slidesBefore+i.virtual.slidesAfter;R+=1)o.slidesPerGroup===1&&k.push(k[k.length-1]+W),b.push(b[b.length-1]+W),i.virtualSize+=W}if(k.length===0&&(k=[0]),S!==0){const W=i.isHorizontal()&&p?"marginLeft":i.getDirectionLabel("marginRight");v.filter((R,D)=>!o.cssMode||o.loop?!0:D!==v.length-1).forEach(R=>{R.style[W]=`${S}px`})}if(o.centeredSlides&&o.centeredSlidesBounds){let W=0;P.forEach(D=>{W+=D+(S||0)}),W-=S;const R=W>c?W-c:0;k=k.map(D=>D<=0?-I:D>R?R+B:D)}if(o.centerInsufficientSlides){let W=0;P.forEach(D=>{W+=D+(S||0)}),W-=S;const R=(o.slidesOffsetBefore||0)+(o.slidesOffsetAfter||0);if(W+R<c){const D=(c-W-R)/2;k.forEach(($,U)=>{k[U]=$-D}),b.forEach(($,U)=>{b[U]=$+D})}}if(Object.assign(i,{slides:v,snapGrid:k,slidesGrid:b,slidesSizesGrid:P}),o.centeredSlides&&o.cssMode&&!o.centeredSlidesBounds){Ro(l,"--swiper-centered-offset-before",`${-k[0]}px`),Ro(l,"--swiper-centered-offset-after",`${i.size/2-P[P.length-1]/2}px`);const W=-i.snapGrid[0],R=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(D=>D+W),i.slidesGrid=i.slidesGrid.map(D=>D+R)}if(y!==x&&i.emit("slidesLengthChange"),k.length!==M&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),b.length!==T&&i.emit("slidesGridLengthChange"),o.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!f&&!o.cssMode&&(o.effect==="slide"||o.effect==="fade")){const W=`${o.containerModifierClass}backface-hidden`,R=i.el.classList.contains(W);y<=o.maxBackfaceHiddenSlides?R||i.el.classList.add(W):R&&i.el.classList.remove(W)}}function rg(i){const n=this,o=[],l=n.virtual&&n.params.virtual.enabled;let u=0,c;typeof i=="number"?n.setTransition(i):i===!0&&n.setTransition(n.params.speed);const p=g=>l?n.slides[n.getSlideIndexByData(g)]:n.slides[g];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(g=>{o.push(g)});else for(c=0;c<Math.ceil(n.params.slidesPerView);c+=1){const g=n.activeIndex+c;if(g>n.slides.length&&!l)break;o.push(p(g))}else o.push(p(n.activeIndex));for(c=0;c<o.length;c+=1)if(typeof o[c]<"u"){const g=o[c].offsetHeight;u=g>u?g:u}(u||u===0)&&(n.wrapperEl.style.height=`${u}px`)}function ig(){const i=this,n=i.slides,o=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let l=0;l<n.length;l+=1)n[l].swiperSlideOffset=(i.isHorizontal()?n[l].offsetLeft:n[l].offsetTop)-o-i.cssOverflowAdjustment()}const sf=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function og(i){i===void 0&&(i=this&&this.translate||0);const n=this,o=n.params,{slides:l,rtlTranslate:u,snapGrid:c}=n;if(l.length===0)return;typeof l[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let p=-i;u&&(p=i),n.visibleSlidesIndexes=[],n.visibleSlides=[];let g=o.spaceBetween;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n.size:typeof g=="string"&&(g=parseFloat(g));for(let f=0;f<l.length;f+=1){const x=l[f];let v=x.swiperSlideOffset;o.cssMode&&o.centeredSlides&&(v-=l[0].swiperSlideOffset);const y=(p+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),k=(p-c[0]+(o.centeredSlides?n.minTranslate():0)-v)/(x.swiperSlideSize+g),b=-(p-v),P=b+n.slidesSizesGrid[f],I=b>=0&&b<=n.size-n.slidesSizesGrid[f],B=b>=0&&b<n.size-1||P>1&&P<=n.size||b<=0&&P>=n.size;B&&(n.visibleSlides.push(x),n.visibleSlidesIndexes.push(f)),sf(x,B,o.slideVisibleClass),sf(x,I,o.slideFullyVisibleClass),x.progress=u?-y:y,x.originalProgress=u?-k:k}}function sg(i){const n=this;if(typeof i>"u"){const v=n.rtlTranslate?-1:1;i=n&&n.translate&&n.translate*v||0}const o=n.params,l=n.maxTranslate()-n.minTranslate();let{progress:u,isBeginning:c,isEnd:p,progressLoop:g}=n;const f=c,x=p;if(l===0)u=0,c=!0,p=!0;else{u=(i-n.minTranslate())/l;const v=Math.abs(i-n.minTranslate())<1,y=Math.abs(i-n.maxTranslate())<1;c=v||u<=0,p=y||u>=1,v&&(u=0),y&&(u=1)}if(o.loop){const v=n.getSlideIndexByData(0),y=n.getSlideIndexByData(n.slides.length-1),k=n.slidesGrid[v],b=n.slidesGrid[y],P=n.slidesGrid[n.slidesGrid.length-1],I=Math.abs(i);I>=k?g=(I-k)/P:g=(I+P-b)/P,g>1&&(g-=1)}Object.assign(n,{progress:u,progressLoop:g,isBeginning:c,isEnd:p}),(o.watchSlidesProgress||o.centeredSlides&&o.autoHeight)&&n.updateSlidesProgress(i),c&&!f&&n.emit("reachBeginning toEdge"),p&&!x&&n.emit("reachEnd toEdge"),(f&&!c||x&&!p)&&n.emit("fromEdge"),n.emit("progress",u)}const ma=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function lg(){const i=this,{slides:n,params:o,slidesEl:l,activeIndex:u}=i,c=i.virtual&&o.virtual.enabled,p=i.grid&&o.grid&&o.grid.rows>1,g=y=>Ht(l,`.${o.slideClass}${y}, swiper-slide${y}`)[0];let f,x,v;if(c)if(o.loop){let y=u-i.virtual.slidesBefore;y<0&&(y=i.virtual.slides.length+y),y>=i.virtual.slides.length&&(y-=i.virtual.slides.length),f=g(`[data-swiper-slide-index="${y}"]`)}else f=g(`[data-swiper-slide-index="${u}"]`);else p?(f=n.filter(y=>y.column===u)[0],v=n.filter(y=>y.column===u+1)[0],x=n.filter(y=>y.column===u-1)[0]):f=n[u];f&&(p||(v=U0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!v&&(v=n[0]),x=q0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!x===0&&(x=n[n.length-1]))),n.forEach(y=>{ma(y,y===f,o.slideActiveClass),ma(y,y===v,o.slideNextClass),ma(y,y===x,o.slidePrevClass)}),i.emitSlidesClasses()}const qo=(i,n)=>{if(!i||i.destroyed||!i.params)return;const o=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,l=n.closest(o());if(l){let u=l.querySelector(`.${i.params.lazyPreloaderClass}`);!u&&i.isElement&&(l.shadowRoot?u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{l.shadowRoot&&(u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),u&&u.remove())})),u&&u.remove()}},ha=(i,n)=>{if(!i.slides[n])return;const o=i.slides[n].querySelector('[loading="lazy"]');o&&o.removeAttribute("loading")},_a=i=>{if(!i||i.destroyed||!i.params)return;let n=i.params.lazyPreloadPrevNext;const o=i.slides.length;if(!o||!n||n<0)return;n=Math.min(n,o);const l=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),u=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const p=u,g=[p-n];g.push(...Array.from({length:n}).map((f,x)=>p+l+x)),i.slides.forEach((f,x)=>{g.includes(f.column)&&ha(i,x)});return}const c=u+l-1;if(i.params.rewind||i.params.loop)for(let p=u-n;p<=c+n;p+=1){const g=(p%o+o)%o;(g<u||g>c)&&ha(i,g)}else for(let p=Math.max(u-n,0);p<=Math.min(c+n,o-1);p+=1)p!==u&&(p>c||p<u)&&ha(i,p)};function ag(i){const{slidesGrid:n,params:o}=i,l=i.rtlTranslate?i.translate:-i.translate;let u;for(let c=0;c<n.length;c+=1)typeof n[c+1]<"u"?l>=n[c]&&l<n[c+1]-(n[c+1]-n[c])/2?u=c:l>=n[c]&&l<n[c+1]&&(u=c+1):l>=n[c]&&(u=c);return o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0),u}function ug(i){const n=this,o=n.rtlTranslate?n.translate:-n.translate,{snapGrid:l,params:u,activeIndex:c,realIndex:p,snapIndex:g}=n;let f=i,x;const v=b=>{let P=b-n.virtual.slidesBefore;return P<0&&(P=n.virtual.slides.length+P),P>=n.virtual.slides.length&&(P-=n.virtual.slides.length),P};if(typeof f>"u"&&(f=ag(n)),l.indexOf(o)>=0)x=l.indexOf(o);else{const b=Math.min(u.slidesPerGroupSkip,f);x=b+Math.floor((f-b)/u.slidesPerGroup)}if(x>=l.length&&(x=l.length-1),f===c&&!n.params.loop){x!==g&&(n.snapIndex=x,n.emit("snapIndexChange"));return}if(f===c&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=v(f);return}const y=n.grid&&u.grid&&u.grid.rows>1;let k;if(n.virtual&&u.virtual.enabled&&u.loop)k=v(f);else if(y){const b=n.slides.filter(I=>I.column===f)[0];let P=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(P)&&(P=Math.max(n.slides.indexOf(b),0)),k=Math.floor(P/u.grid.rows)}else if(n.slides[f]){const b=n.slides[f].getAttribute("data-swiper-slide-index");b?k=parseInt(b,10):k=f}else k=f;Object.assign(n,{previousSnapIndex:g,snapIndex:x,previousRealIndex:p,realIndex:k,previousIndex:c,activeIndex:f}),n.initialized&&_a(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(p!==k&&n.emit("realIndexChange"),n.emit("slideChange"))}function cg(i,n){const o=this,l=o.params;let u=i.closest(`.${l.slideClass}, swiper-slide`);!u&&o.isElement&&n&&n.length>1&&n.includes(i)&&[...n.slice(n.indexOf(i)+1,n.length)].forEach(g=>{!u&&g.matches&&g.matches(`.${l.slideClass}, swiper-slide`)&&(u=g)});let c=!1,p;if(u){for(let g=0;g<o.slides.length;g+=1)if(o.slides[g]===u){c=!0,p=g;break}}if(u&&c)o.clickedSlide=u,o.virtual&&o.params.virtual.enabled?o.clickedIndex=parseInt(u.getAttribute("data-swiper-slide-index"),10):o.clickedIndex=p;else{o.clickedSlide=void 0,o.clickedIndex=void 0;return}l.slideToClickedSlide&&o.clickedIndex!==void 0&&o.clickedIndex!==o.activeIndex&&o.slideToClickedSlide()}var dg={updateSize:tg,updateSlides:ng,updateAutoHeight:rg,updateSlidesOffset:ig,updateSlidesProgress:og,updateProgress:sg,updateSlidesClasses:lg,updateActiveIndex:ug,updateClickedSlide:cg};function fg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const n=this,{params:o,rtlTranslate:l,translate:u,wrapperEl:c}=n;if(o.virtualTranslate)return l?-u:u;if(o.cssMode)return u;let p=H0(c,i);return p+=n.cssOverflowAdjustment(),l&&(p=-p),p||0}function pg(i,n){const o=this,{rtlTranslate:l,params:u,wrapperEl:c,progress:p}=o;let g=0,f=0;const x=0;o.isHorizontal()?g=l?-i:i:f=i,u.roundLengths&&(g=Math.floor(g),f=Math.floor(f)),o.previousTranslate=o.translate,o.translate=o.isHorizontal()?g:f,u.cssMode?c[o.isHorizontal()?"scrollLeft":"scrollTop"]=o.isHorizontal()?-g:-f:u.virtualTranslate||(o.isHorizontal()?g-=o.cssOverflowAdjustment():f-=o.cssOverflowAdjustment(),c.style.transform=`translate3d(${g}px, ${f}px, ${x}px)`);let v;const y=o.maxTranslate()-o.minTranslate();y===0?v=0:v=(i-o.minTranslate())/y,v!==p&&o.updateProgress(i),o.emit("setTranslate",o.translate,n)}function mg(){return-this.snapGrid[0]}function hg(){return-this.snapGrid[this.snapGrid.length-1]}function gg(i,n,o,l,u){i===void 0&&(i=0),n===void 0&&(n=this.params.speed),o===void 0&&(o=!0),l===void 0&&(l=!0);const c=this,{params:p,wrapperEl:g}=c;if(c.animating&&p.preventInteractionOnTransition)return!1;const f=c.minTranslate(),x=c.maxTranslate();let v;if(l&&i>f?v=f:l&&i<x?v=x:v=i,c.updateProgress(v),p.cssMode){const y=c.isHorizontal();if(n===0)g[y?"scrollLeft":"scrollTop"]=-v;else{if(!c.support.smoothScroll)return Wf({swiper:c,targetPosition:-v,side:y?"left":"top"}),!0;g.scrollTo({[y?"left":"top"]:-v,behavior:"smooth"})}return!0}return n===0?(c.setTransition(0),c.setTranslate(v),o&&(c.emit("beforeTransitionStart",n,u),c.emit("transitionEnd"))):(c.setTransition(n),c.setTranslate(v),o&&(c.emit("beforeTransitionStart",n,u),c.emit("transitionStart")),c.animating||(c.animating=!0,c.onTranslateToWrapperTransitionEnd||(c.onTranslateToWrapperTransitionEnd=function(k){!c||c.destroyed||k.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onTranslateToWrapperTransitionEnd),c.onTranslateToWrapperTransitionEnd=null,delete c.onTranslateToWrapperTransitionEnd,c.animating=!1,o&&c.emit("transitionEnd"))}),c.wrapperEl.addEventListener("transitionend",c.onTranslateToWrapperTransitionEnd))),!0}var vg={getTranslate:fg,setTranslate:pg,minTranslate:mg,maxTranslate:hg,translateTo:gg};function yg(i,n){const o=this;o.params.cssMode||(o.wrapperEl.style.transitionDuration=`${i}ms`,o.wrapperEl.style.transitionDelay=i===0?"0ms":""),o.emit("setTransition",i,n)}function Xf(i){let{swiper:n,runCallbacks:o,direction:l,step:u}=i;const{activeIndex:c,previousIndex:p}=n;let g=l;if(g||(c>p?g="next":c<p?g="prev":g="reset"),n.emit(`transition${u}`),o&&c!==p){if(g==="reset"){n.emit(`slideResetTransition${u}`);return}n.emit(`slideChangeTransition${u}`),g==="next"?n.emit(`slideNextTransition${u}`):n.emit(`slidePrevTransition${u}`)}}function xg(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;l.cssMode||(l.autoHeight&&o.updateAutoHeight(),Xf({swiper:o,runCallbacks:i,direction:n,step:"Start"}))}function wg(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;o.animating=!1,!l.cssMode&&(o.setTransition(0),Xf({swiper:o,runCallbacks:i,direction:n,step:"End"}))}var Sg={setTransition:yg,transitionStart:xg,transitionEnd:wg};function kg(i,n,o,l,u){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const c=this;let p=i;p<0&&(p=0);const{params:g,snapGrid:f,slidesGrid:x,previousIndex:v,activeIndex:y,rtlTranslate:k,wrapperEl:b,enabled:P}=c;if(!P&&!l&&!u||c.destroyed||c.animating&&g.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=c.params.speed);const I=Math.min(c.params.slidesPerGroupSkip,p);let B=I+Math.floor((p-I)/c.params.slidesPerGroup);B>=f.length&&(B=f.length-1);const M=-f[B];if(g.normalizeSlideIndex)for(let N=0;N<x.length;N+=1){const A=-Math.floor(M*100),Q=Math.floor(x[N]*100),G=Math.floor(x[N+1]*100);typeof x[N+1]<"u"?A>=Q&&A<G-(G-Q)/2?p=N:A>=Q&&A<G&&(p=N+1):A>=Q&&(p=N)}if(c.initialized&&p!==y&&(!c.allowSlideNext&&(k?M>c.translate&&M>c.minTranslate():M<c.translate&&M<c.minTranslate())||!c.allowSlidePrev&&M>c.translate&&M>c.maxTranslate()&&(y||0)!==p))return!1;p!==(v||0)&&o&&c.emit("beforeSlideChangeStart"),c.updateProgress(M);let T;p>y?T="next":p<y?T="prev":T="reset";const S=c.virtual&&c.params.virtual.enabled;if(!(S&&u)&&(k&&-M===c.translate||!k&&M===c.translate))return c.updateActiveIndex(p),g.autoHeight&&c.updateAutoHeight(),c.updateSlidesClasses(),g.effect!=="slide"&&c.setTranslate(M),T!=="reset"&&(c.transitionStart(o,T),c.transitionEnd(o,T)),!1;if(g.cssMode){const N=c.isHorizontal(),A=k?M:-M;if(n===0)S&&(c.wrapperEl.style.scrollSnapType="none",c._immediateVirtual=!0),S&&!c._cssModeVirtualInitialSet&&c.params.initialSlide>0?(c._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[N?"scrollLeft":"scrollTop"]=A})):b[N?"scrollLeft":"scrollTop"]=A,S&&requestAnimationFrame(()=>{c.wrapperEl.style.scrollSnapType="",c._immediateVirtual=!1});else{if(!c.support.smoothScroll)return Wf({swiper:c,targetPosition:A,side:N?"left":"top"}),!0;b.scrollTo({[N?"left":"top"]:A,behavior:"smooth"})}return!0}return c.setTransition(n),c.setTranslate(M),c.updateActiveIndex(p),c.updateSlidesClasses(),c.emit("beforeTransitionStart",n,l),c.transitionStart(o,T),n===0?c.transitionEnd(o,T):c.animating||(c.animating=!0,c.onSlideToWrapperTransitionEnd||(c.onSlideToWrapperTransitionEnd=function(A){!c||c.destroyed||A.target===this&&(c.wrapperEl.removeEventListener("transitionend",c.onSlideToWrapperTransitionEnd),c.onSlideToWrapperTransitionEnd=null,delete c.onSlideToWrapperTransitionEnd,c.transitionEnd(o,T))}),c.wrapperEl.addEventListener("transitionend",c.onSlideToWrapperTransitionEnd)),!0}function bg(i,n,o,l){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const u=this;if(u.destroyed)return;typeof n>"u"&&(n=u.params.speed);const c=u.grid&&u.params.grid&&u.params.grid.rows>1;let p=i;if(u.params.loop)if(u.virtual&&u.params.virtual.enabled)p=p+u.virtual.slidesBefore;else{let g;if(c){const k=p*u.params.grid.rows;g=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else g=u.getSlideIndexByData(p);const f=c?Math.ceil(u.slides.length/u.params.grid.rows):u.slides.length,{centeredSlides:x}=u.params;let v=u.params.slidesPerView;v==="auto"?v=u.slidesPerViewDynamic():(v=Math.ceil(parseFloat(u.params.slidesPerView,10)),x&&v%2===0&&(v=v+1));let y=f-g<v;if(x&&(y=y||g<Math.ceil(v/2)),l&&x&&u.params.slidesPerView!=="auto"&&!c&&(y=!1),y){const k=x?g<u.activeIndex?"prev":"next":g-u.activeIndex-1<u.params.slidesPerView?"next":"prev";u.loopFix({direction:k,slideTo:!0,activeSlideIndex:k==="next"?g+1:g-f+1,slideRealIndex:k==="next"?u.realIndex:void 0})}if(c){const k=p*u.params.grid.rows;p=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===k)[0].column}else p=u.getSlideIndexByData(p)}return requestAnimationFrame(()=>{u.slideTo(p,n,o,l)}),u}function Eg(i,n,o){n===void 0&&(n=!0);const l=this,{enabled:u,params:c,animating:p}=l;if(!u||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);let g=c.slidesPerGroup;c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(g=Math.max(l.slidesPerViewDynamic("current",!0),1));const f=l.activeIndex<c.slidesPerGroupSkip?1:g,x=l.virtual&&c.virtual.enabled;if(c.loop){if(p&&!x&&c.loopPreventsSliding)return!1;if(l.loopFix({direction:"next"}),l._clientLeft=l.wrapperEl.clientLeft,l.activeIndex===l.slides.length-1&&c.cssMode)return requestAnimationFrame(()=>{l.slideTo(l.activeIndex+f,i,n,o)}),!0}return c.rewind&&l.isEnd?l.slideTo(0,i,n,o):l.slideTo(l.activeIndex+f,i,n,o)}function Tg(i,n,o){n===void 0&&(n=!0);const l=this,{params:u,snapGrid:c,slidesGrid:p,rtlTranslate:g,enabled:f,animating:x}=l;if(!f||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);const v=l.virtual&&u.virtual.enabled;if(u.loop){if(x&&!v&&u.loopPreventsSliding)return!1;l.loopFix({direction:"prev"}),l._clientLeft=l.wrapperEl.clientLeft}const y=g?l.translate:-l.translate;function k(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const b=k(y),P=c.map(M=>k(M));let I=c[P.indexOf(b)-1];if(typeof I>"u"&&u.cssMode){let M;c.forEach((T,S)=>{b>=T&&(M=S)}),typeof M<"u"&&(I=c[M>0?M-1:M])}let B=0;if(typeof I<"u"&&(B=p.indexOf(I),B<0&&(B=l.activeIndex-1),u.slidesPerView==="auto"&&u.slidesPerGroup===1&&u.slidesPerGroupAuto&&(B=B-l.slidesPerViewDynamic("previous",!0)+1,B=Math.max(B,0))),u.rewind&&l.isBeginning){const M=l.params.virtual&&l.params.virtual.enabled&&l.virtual?l.virtual.slides.length-1:l.slides.length-1;return l.slideTo(M,i,n,o)}else if(u.loop&&l.activeIndex===0&&u.cssMode)return requestAnimationFrame(()=>{l.slideTo(B,i,n,o)}),!0;return l.slideTo(B,i,n,o)}function Cg(i,n,o){n===void 0&&(n=!0);const l=this;if(!l.destroyed)return typeof i>"u"&&(i=l.params.speed),l.slideTo(l.activeIndex,i,n,o)}function jg(i,n,o,l){n===void 0&&(n=!0),l===void 0&&(l=.5);const u=this;if(u.destroyed)return;typeof i>"u"&&(i=u.params.speed);let c=u.activeIndex;const p=Math.min(u.params.slidesPerGroupSkip,c),g=p+Math.floor((c-p)/u.params.slidesPerGroup),f=u.rtlTranslate?u.translate:-u.translate;if(f>=u.snapGrid[g]){const x=u.snapGrid[g],v=u.snapGrid[g+1];f-x>(v-x)*l&&(c+=u.params.slidesPerGroup)}else{const x=u.snapGrid[g-1],v=u.snapGrid[g];f-x<=(v-x)*l&&(c-=u.params.slidesPerGroup)}return c=Math.max(c,0),c=Math.min(c,u.slidesGrid.length-1),u.slideTo(c,i,n,o)}function Pg(){const i=this;if(i.destroyed)return;const{params:n,slidesEl:o}=i,l=n.slidesPerView==="auto"?i.slidesPerViewDynamic():n.slidesPerView;let u=i.clickedIndex,c;const p=i.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(i.animating)return;c=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?u<i.loopedSlides-l/2||u>i.slides.length-i.loopedSlides+l/2?(i.loopFix(),u=i.getSlideIndex(Ht(o,`${p}[data-swiper-slide-index="${c}"]`)[0]),Pa(()=>{i.slideTo(u)})):i.slideTo(u):u>i.slides.length-l?(i.loopFix(),u=i.getSlideIndex(Ht(o,`${p}[data-swiper-slide-index="${c}"]`)[0]),Pa(()=>{i.slideTo(u)})):i.slideTo(u)}else i.slideTo(u)}var zg={slideTo:kg,slideToLoop:bg,slideNext:Eg,slidePrev:Tg,slideReset:Cg,slideToClosest:jg,slideToClickedSlide:Pg};function _g(i){const n=this,{params:o,slidesEl:l}=n;if(!o.loop||n.virtual&&n.params.virtual.enabled)return;const u=()=>{Ht(l,`.${o.slideClass}, swiper-slide`).forEach((y,k)=>{y.setAttribute("data-swiper-slide-index",k)})},c=n.grid&&o.grid&&o.grid.rows>1,p=o.slidesPerGroup*(c?o.grid.rows:1),g=n.slides.length%p!==0,f=c&&n.slides.length%o.grid.rows!==0,x=v=>{for(let y=0;y<v;y+=1){const k=n.isElement?Jo("swiper-slide",[o.slideBlankClass]):Jo("div",[o.slideClass,o.slideBlankClass]);n.slidesEl.append(k)}};if(g){if(o.loopAddBlankSlides){const v=p-n.slides.length%p;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else if(f){if(o.loopAddBlankSlides){const v=o.grid.rows-n.slides.length%o.grid.rows;x(v),n.recalcSlides(),n.updateSlides()}else Zo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else u();n.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next"})}function Mg(i){let{slideRealIndex:n,slideTo:o=!0,direction:l,setTranslate:u,activeSlideIndex:c,byController:p,byMousewheel:g}=i===void 0?{}:i;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:x,allowSlidePrev:v,allowSlideNext:y,slidesEl:k,params:b}=f,{centeredSlides:P}=b;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&b.virtual.enabled){o&&(!b.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):b.centeredSlides&&f.snapIndex<b.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=v,f.allowSlideNext=y,f.emit("loopFix");return}let I=b.slidesPerView;I==="auto"?I=f.slidesPerViewDynamic():(I=Math.ceil(parseFloat(b.slidesPerView,10)),P&&I%2===0&&(I=I+1));const B=b.slidesPerGroupAuto?I:b.slidesPerGroup;let M=B;M%B!==0&&(M+=B-M%B),M+=b.loopAdditionalSlides,f.loopedSlides=M;const T=f.grid&&b.grid&&b.grid.rows>1;x.length<I+M?Zo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&b.grid.fill==="row"&&Zo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],_=[];let N=f.activeIndex;typeof c>"u"?c=f.getSlideIndex(x.filter($=>$.classList.contains(b.slideActiveClass))[0]):N=c;const A=l==="next"||!l,Q=l==="prev"||!l;let G=0,H=0;const W=T?Math.ceil(x.length/b.grid.rows):x.length,D=(T?x[c].column:c)+(P&&typeof u>"u"?-I/2+.5:0);if(D<M){G=Math.max(M-D,B);for(let $=0;$<M-D;$+=1){const U=$-Math.floor($/W)*W;if(T){const re=W-U-1;for(let me=x.length-1;me>=0;me-=1)x[me].column===re&&S.push(me)}else S.push(W-U-1)}}else if(D+I>W-M){H=Math.max(D-(W-M*2),B);for(let $=0;$<H;$+=1){const U=$-Math.floor($/W)*W;T?x.forEach((re,me)=>{re.column===U&&_.push(me)}):_.push(U)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),Q&&S.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.prepend(x[$]),x[$].swiperLoopMoveDOM=!1}),A&&_.forEach($=>{x[$].swiperLoopMoveDOM=!0,k.append(x[$]),x[$].swiperLoopMoveDOM=!1}),f.recalcSlides(),b.slidesPerView==="auto"?f.updateSlides():T&&(S.length>0&&Q||_.length>0&&A)&&f.slides.forEach(($,U)=>{f.grid.updateSlide(U,$,f.slides)}),b.watchSlidesProgress&&f.updateSlidesOffset(),o){if(S.length>0&&Q){if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N+G]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N+Math.ceil(G),0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else if(u){const $=T?S.length/b.grid.rows:S.length;f.slideTo(f.activeIndex+$,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(_.length>0&&A)if(typeof n>"u"){const $=f.slidesGrid[N],re=f.slidesGrid[N-H]-$;g?f.setTranslate(f.translate-re):(f.slideTo(N-H,0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-re,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-re))}else{const $=T?_.length/b.grid.rows:_.length;f.slideTo(f.activeIndex-$,0,!1,!0)}}if(f.allowSlidePrev=v,f.allowSlideNext=y,f.controller&&f.controller.control&&!p){const $={slideRealIndex:n,direction:l,setTranslate:u,activeSlideIndex:c,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...$,slideTo:U.params.slidesPerView===b.slidesPerView?o:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...$,slideTo:f.controller.control.params.slidesPerView===b.slidesPerView?o:!1})}f.emit("loopFix")}function Og(){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const l=[];i.slides.forEach(u=>{const c=typeof u.swiperSlideIndex>"u"?u.getAttribute("data-swiper-slide-index")*1:u.swiperSlideIndex;l[c]=u}),i.slides.forEach(u=>{u.removeAttribute("data-swiper-slide-index")}),l.forEach(u=>{o.append(u)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Lg={loopCreate:_g,loopFix:Mg,loopDestroy:Og};function Ig(i){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const o=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),o.style.cursor="move",o.style.cursor=i?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function Ng(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Ag={setGrabCursor:Ig,unsetGrabCursor:Ng};function Dg(i,n){n===void 0&&(n=this);function o(l){if(!l||l===tn()||l===xt())return null;l.assignedSlot&&(l=l.assignedSlot);const u=l.closest(i);return!u&&!l.getRootNode?null:u||o(l.getRootNode().host)}return o(n)}function lf(i,n,o){const l=xt(),{params:u}=i,c=u.edgeSwipeDetection,p=u.edgeSwipeThreshold;return c&&(o<=p||o>=l.innerWidth-p)?c==="prevent"?(n.preventDefault(),!0):!1:!0}function Rg(i){const n=this,o=tn();let l=i;l.originalEvent&&(l=l.originalEvent);const u=n.touchEventsData;if(l.type==="pointerdown"){if(u.pointerId!==null&&u.pointerId!==l.pointerId)return;u.pointerId=l.pointerId}else l.type==="touchstart"&&l.targetTouches.length===1&&(u.touchId=l.targetTouches[0].identifier);if(l.type==="touchstart"){lf(n,l,l.targetTouches[0].pageX);return}const{params:c,touches:p,enabled:g}=n;if(!g||!c.simulateTouch&&l.pointerType==="mouse"||n.animating&&c.preventInteractionOnTransition)return;!n.animating&&c.cssMode&&c.loop&&n.loopFix();let f=l.target;if(c.touchEventsTarget==="wrapper"&&!W0(f,n.wrapperEl)||"which"in l&&l.which===3||"button"in l&&l.button>0||u.isTouched&&u.isMoved)return;const x=!!c.noSwipingClass&&c.noSwipingClass!=="",v=l.composedPath?l.composedPath():l.path;x&&l.target&&l.target.shadowRoot&&v&&(f=v[0]);const y=c.noSwipingSelector?c.noSwipingSelector:`.${c.noSwipingClass}`,k=!!(l.target&&l.target.shadowRoot);if(c.noSwiping&&(k?Dg(y,f):f.closest(y))){n.allowClick=!0;return}if(c.swipeHandler&&!f.closest(c.swipeHandler))return;p.currentX=l.pageX,p.currentY=l.pageY;const b=p.currentX,P=p.currentY;if(!lf(n,l,b))return;Object.assign(u,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),p.startX=b,p.startY=P,u.touchStartTime=Bn(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,c.threshold>0&&(u.allowThresholdMove=!1);let I=!0;f.matches(u.focusableElements)&&(I=!1,f.nodeName==="SELECT"&&(u.isTouched=!1)),o.activeElement&&o.activeElement.matches(u.focusableElements)&&o.activeElement!==f&&(l.pointerType==="mouse"||l.pointerType!=="mouse"&&!f.matches(u.focusableElements))&&o.activeElement.blur();const B=I&&n.allowTouchMove&&c.touchStartPreventDefault;(c.touchStartForcePreventDefault||B)&&!f.isContentEditable&&l.preventDefault(),c.freeMode&&c.freeMode.enabled&&n.freeMode&&n.animating&&!c.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",l)}function Fg(i){const n=tn(),o=this,l=o.touchEventsData,{params:u,touches:c,rtlTranslate:p,enabled:g}=o;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(l.touchId!==null||f.pointerId!==l.pointerId))return;let x;if(f.type==="touchmove"){if(x=[...f.changedTouches].filter(A=>A.identifier===l.touchId)[0],!x||x.identifier!==l.touchId)return}else x=f;if(!l.isTouched){l.startMoving&&l.isScrolling&&o.emit("touchMoveOpposite",f);return}const v=x.pageX,y=x.pageY;if(f.preventedByNestedSwiper){c.startX=v,c.startY=y;return}if(!o.allowTouchMove){f.target.matches(l.focusableElements)||(o.allowClick=!1),l.isTouched&&(Object.assign(c,{startX:v,startY:y,currentX:v,currentY:y}),l.touchStartTime=Bn());return}if(u.touchReleaseOnEdges&&!u.loop){if(o.isVertical()){if(y<c.startY&&o.translate<=o.maxTranslate()||y>c.startY&&o.translate>=o.minTranslate()){l.isTouched=!1,l.isMoved=!1;return}}else if(v<c.startX&&o.translate<=o.maxTranslate()||v>c.startX&&o.translate>=o.minTranslate())return}if(n.activeElement&&n.activeElement.matches(l.focusableElements)&&n.activeElement!==f.target&&f.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&f.target===n.activeElement&&f.target.matches(l.focusableElements)){l.isMoved=!0,o.allowClick=!1;return}l.allowTouchCallbacks&&o.emit("touchMove",f),c.previousX=c.currentX,c.previousY=c.currentY,c.currentX=v,c.currentY=y;const k=c.currentX-c.startX,b=c.currentY-c.startY;if(o.params.threshold&&Math.sqrt(k**2+b**2)<o.params.threshold)return;if(typeof l.isScrolling>"u"){let A;o.isHorizontal()&&c.currentY===c.startY||o.isVertical()&&c.currentX===c.startX?l.isScrolling=!1:k*k+b*b>=25&&(A=Math.atan2(Math.abs(b),Math.abs(k))*180/Math.PI,l.isScrolling=o.isHorizontal()?A>u.touchAngle:90-A>u.touchAngle)}if(l.isScrolling&&o.emit("touchMoveOpposite",f),typeof l.startMoving>"u"&&(c.currentX!==c.startX||c.currentY!==c.startY)&&(l.startMoving=!0),l.isScrolling||f.type==="touchmove"&&l.preventTouchMoveFromPointerMove){l.isTouched=!1;return}if(!l.startMoving)return;o.allowClick=!1,!u.cssMode&&f.cancelable&&f.preventDefault(),u.touchMoveStopPropagation&&!u.nested&&f.stopPropagation();let P=o.isHorizontal()?k:b,I=o.isHorizontal()?c.currentX-c.previousX:c.currentY-c.previousY;u.oneWayMovement&&(P=Math.abs(P)*(p?1:-1),I=Math.abs(I)*(p?1:-1)),c.diff=P,P*=u.touchRatio,p&&(P=-P,I=-I);const B=o.touchesDirection;o.swipeDirection=P>0?"prev":"next",o.touchesDirection=I>0?"prev":"next";const M=o.params.loop&&!u.cssMode,T=o.touchesDirection==="next"&&o.allowSlideNext||o.touchesDirection==="prev"&&o.allowSlidePrev;if(!l.isMoved){if(M&&T&&o.loopFix({direction:o.swipeDirection}),l.startTranslate=o.getTranslate(),o.setTransition(0),o.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});o.wrapperEl.dispatchEvent(A)}l.allowMomentumBounce=!1,u.grabCursor&&(o.allowSlideNext===!0||o.allowSlidePrev===!0)&&o.setGrabCursor(!0),o.emit("sliderFirstMove",f)}let S;if(new Date().getTime(),l.isMoved&&l.allowThresholdMove&&B!==o.touchesDirection&&M&&T&&Math.abs(P)>=1){Object.assign(c,{startX:v,startY:y,currentX:v,currentY:y,startTranslate:l.currentTranslate}),l.loopSwapReset=!0,l.startTranslate=l.currentTranslate;return}o.emit("sliderMove",f),l.isMoved=!0,l.currentTranslate=P+l.startTranslate;let _=!0,N=u.resistanceRatio;if(u.touchReleaseOnEdges&&(N=0),P>0?(M&&T&&!S&&l.allowThresholdMove&&l.currentTranslate>(u.centeredSlides?o.minTranslate()-o.slidesSizesGrid[o.activeIndex+1]-(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.activeIndex+1]+o.params.spaceBetween:0)-o.params.spaceBetween:o.minTranslate())&&o.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),l.currentTranslate>o.minTranslate()&&(_=!1,u.resistance&&(l.currentTranslate=o.minTranslate()-1+(-o.minTranslate()+l.startTranslate+P)**N))):P<0&&(M&&T&&!S&&l.allowThresholdMove&&l.currentTranslate<(u.centeredSlides?o.maxTranslate()+o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween+(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween:0):o.maxTranslate())&&o.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:o.slides.length-(u.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(u.slidesPerView,10)))}),l.currentTranslate<o.maxTranslate()&&(_=!1,u.resistance&&(l.currentTranslate=o.maxTranslate()+1-(o.maxTranslate()-l.startTranslate-P)**N))),_&&(f.preventedByNestedSwiper=!0),!o.allowSlideNext&&o.swipeDirection==="next"&&l.currentTranslate<l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&o.swipeDirection==="prev"&&l.currentTranslate>l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&!o.allowSlideNext&&(l.currentTranslate=l.startTranslate),u.threshold>0)if(Math.abs(P)>u.threshold||l.allowThresholdMove){if(!l.allowThresholdMove){l.allowThresholdMove=!0,c.startX=c.currentX,c.startY=c.currentY,l.currentTranslate=l.startTranslate,c.diff=o.isHorizontal()?c.currentX-c.startX:c.currentY-c.startY;return}}else{l.currentTranslate=l.startTranslate;return}!u.followFinger||u.cssMode||((u.freeMode&&u.freeMode.enabled&&o.freeMode||u.watchSlidesProgress)&&(o.updateActiveIndex(),o.updateSlidesClasses()),u.freeMode&&u.freeMode.enabled&&o.freeMode&&o.freeMode.onTouchMove(),o.updateProgress(l.currentTranslate),o.setTranslate(l.currentTranslate))}function Bg(i){const n=this,o=n.touchEventsData;let l=i;l.originalEvent&&(l=l.originalEvent);let u;if(l.type==="touchend"||l.type==="touchcancel"){if(u=[...l.changedTouches].filter(N=>N.identifier===o.touchId)[0],!u||u.identifier!==o.touchId)return}else{if(o.touchId!==null||l.pointerId!==o.pointerId)return;u=l}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(l.type)&&!(["pointercancel","contextmenu"].includes(l.type)&&(n.browser.isSafari||n.browser.isWebView)))return;o.pointerId=null,o.touchId=null;const{params:p,touches:g,rtlTranslate:f,slidesGrid:x,enabled:v}=n;if(!v||!p.simulateTouch&&l.pointerType==="mouse")return;if(o.allowTouchCallbacks&&n.emit("touchEnd",l),o.allowTouchCallbacks=!1,!o.isTouched){o.isMoved&&p.grabCursor&&n.setGrabCursor(!1),o.isMoved=!1,o.startMoving=!1;return}p.grabCursor&&o.isMoved&&o.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const y=Bn(),k=y-o.touchStartTime;if(n.allowClick){const N=l.path||l.composedPath&&l.composedPath();n.updateClickedSlide(N&&N[0]||l.target,N),n.emit("tap click",l),k<300&&y-o.lastClickTime<300&&n.emit("doubleTap doubleClick",l)}if(o.lastClickTime=Bn(),Pa(()=>{n.destroyed||(n.allowClick=!0)}),!o.isTouched||!o.isMoved||!n.swipeDirection||g.diff===0&&!o.loopSwapReset||o.currentTranslate===o.startTranslate&&!o.loopSwapReset){o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;return}o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;let b;if(p.followFinger?b=f?n.translate:-n.translate:b=-o.currentTranslate,p.cssMode)return;if(p.freeMode&&p.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:b});return}const P=b>=-n.maxTranslate()&&!n.params.loop;let I=0,B=n.slidesSizesGrid[0];for(let N=0;N<x.length;N+=N<p.slidesPerGroupSkip?1:p.slidesPerGroup){const A=N<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;typeof x[N+A]<"u"?(P||b>=x[N]&&b<x[N+A])&&(I=N,B=x[N+A]-x[N]):(P||b>=x[N])&&(I=N,B=x[x.length-1]-x[x.length-2])}let M=null,T=null;p.rewind&&(n.isBeginning?T=p.virtual&&p.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(M=0));const S=(b-x[I])/B,_=I<p.slidesPerGroupSkip-1?1:p.slidesPerGroup;if(k>p.longSwipesMs){if(!p.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(S>=p.longSwipesRatio?n.slideTo(p.rewind&&n.isEnd?M:I+_):n.slideTo(I)),n.swipeDirection==="prev"&&(S>1-p.longSwipesRatio?n.slideTo(I+_):T!==null&&S<0&&Math.abs(S)>p.longSwipesRatio?n.slideTo(T):n.slideTo(I))}else{if(!p.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(l.target===n.navigation.nextEl||l.target===n.navigation.prevEl)?l.target===n.navigation.nextEl?n.slideTo(I+_):n.slideTo(I):(n.swipeDirection==="next"&&n.slideTo(M!==null?M:I+_),n.swipeDirection==="prev"&&n.slideTo(T!==null?T:I))}}function af(){const i=this,{params:n,el:o}=i;if(o&&o.offsetWidth===0)return;n.breakpoints&&i.setBreakpoint();const{allowSlideNext:l,allowSlidePrev:u,snapGrid:c}=i,p=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const g=p&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!g?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!p?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=u,i.allowSlideNext=l,i.params.watchOverflow&&c!==i.snapGrid&&i.checkOverflow()}function $g(i){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&i.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Vg(){const i=this,{wrapperEl:n,rtlTranslate:o,enabled:l}=i;if(!l)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-n.scrollLeft:i.translate=-n.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let u;const c=i.maxTranslate()-i.minTranslate();c===0?u=0:u=(i.translate-i.minTranslate())/c,u!==i.progress&&i.updateProgress(o?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Hg(i){const n=this;qo(n,i.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function Gg(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Qf=(i,n)=>{const o=tn(),{params:l,el:u,wrapperEl:c,device:p}=i,g=!!l.nested,f=n==="on"?"addEventListener":"removeEventListener",x=n;!u||typeof u=="string"||(o[f]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:g}),u[f]("touchstart",i.onTouchStart,{passive:!1}),u[f]("pointerdown",i.onTouchStart,{passive:!1}),o[f]("touchmove",i.onTouchMove,{passive:!1,capture:g}),o[f]("pointermove",i.onTouchMove,{passive:!1,capture:g}),o[f]("touchend",i.onTouchEnd,{passive:!0}),o[f]("pointerup",i.onTouchEnd,{passive:!0}),o[f]("pointercancel",i.onTouchEnd,{passive:!0}),o[f]("touchcancel",i.onTouchEnd,{passive:!0}),o[f]("pointerout",i.onTouchEnd,{passive:!0}),o[f]("pointerleave",i.onTouchEnd,{passive:!0}),o[f]("contextmenu",i.onTouchEnd,{passive:!0}),(l.preventClicks||l.preventClicksPropagation)&&u[f]("click",i.onClick,!0),l.cssMode&&c[f]("scroll",i.onScroll),l.updateOnWindowResize?i[x](p.ios||p.android?"resize orientationchange observerUpdate":"resize observerUpdate",af,!0):i[x]("observerUpdate",af,!0),u[f]("load",i.onLoad,{capture:!0}))};function Wg(){const i=this,{params:n}=i;i.onTouchStart=Rg.bind(i),i.onTouchMove=Fg.bind(i),i.onTouchEnd=Bg.bind(i),i.onDocumentTouchStart=Gg.bind(i),n.cssMode&&(i.onScroll=Vg.bind(i)),i.onClick=$g.bind(i),i.onLoad=Hg.bind(i),Qf(i,"on")}function qg(){Qf(this,"off")}var Ug={attachEvents:Wg,detachEvents:qg};const uf=(i,n)=>i.grid&&n.grid&&n.grid.rows>1;function Yg(){const i=this,{realIndex:n,initialized:o,params:l,el:u}=i,c=l.breakpoints;if(!c||c&&Object.keys(c).length===0)return;const p=i.getBreakpoint(c,i.params.breakpointsBase,i.el);if(!p||i.currentBreakpoint===p)return;const f=(p in c?c[p]:void 0)||i.originalParams,x=uf(i,l),v=uf(i,f),y=i.params.grabCursor,k=f.grabCursor,b=l.enabled;x&&!v?(u.classList.remove(`${l.containerModifierClass}grid`,`${l.containerModifierClass}grid-column`),i.emitContainerClasses()):!x&&v&&(u.classList.add(`${l.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&l.grid.fill==="column")&&u.classList.add(`${l.containerModifierClass}grid-column`),i.emitContainerClasses()),y&&!k?i.unsetGrabCursor():!y&&k&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(S=>{if(typeof f[S]>"u")return;const _=l[S]&&l[S].enabled,N=f[S]&&f[S].enabled;_&&!N&&i[S].disable(),!_&&N&&i[S].enable()});const P=f.direction&&f.direction!==l.direction,I=l.loop&&(f.slidesPerView!==l.slidesPerView||P),B=l.loop;P&&o&&i.changeDirection(),yt(i.params,f);const M=i.params.enabled,T=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),b&&!M?i.disable():!b&&M&&i.enable(),i.currentBreakpoint=p,i.emit("_beforeBreakpoint",f),o&&(I?(i.loopDestroy(),i.loopCreate(n),i.updateSlides()):!B&&T?(i.loopCreate(n),i.updateSlides()):B&&!T&&i.loopDestroy()),i.emit("breakpoint",f)}function Xg(i,n,o){if(n===void 0&&(n="window"),!i||n==="container"&&!o)return;let l=!1;const u=xt(),c=n==="window"?u.innerHeight:o.clientHeight,p=Object.keys(i).map(g=>{if(typeof g=="string"&&g.indexOf("@")===0){const f=parseFloat(g.substr(1));return{value:c*f,point:g}}return{value:g,point:g}});p.sort((g,f)=>parseInt(g.value,10)-parseInt(f.value,10));for(let g=0;g<p.length;g+=1){const{point:f,value:x}=p[g];n==="window"?u.matchMedia(`(min-width: ${x}px)`).matches&&(l=f):x<=o.clientWidth&&(l=f)}return l||"max"}var Qg={setBreakpoint:Yg,getBreakpoint:Xg};function Kg(i,n){const o=[];return i.forEach(l=>{typeof l=="object"?Object.keys(l).forEach(u=>{l[u]&&o.push(n+u)}):typeof l=="string"&&o.push(n+l)}),o}function Zg(){const i=this,{classNames:n,params:o,rtl:l,el:u,device:c}=i,p=Kg(["initialized",o.direction,{"free-mode":i.params.freeMode&&o.freeMode.enabled},{autoheight:o.autoHeight},{rtl:l},{grid:o.grid&&o.grid.rows>1},{"grid-column":o.grid&&o.grid.rows>1&&o.grid.fill==="column"},{android:c.android},{ios:c.ios},{"css-mode":o.cssMode},{centered:o.cssMode&&o.centeredSlides},{"watch-progress":o.watchSlidesProgress}],o.containerModifierClass);n.push(...p),u.classList.add(...n),i.emitContainerClasses()}function Jg(){const i=this,{el:n,classNames:o}=i;!n||typeof n=="string"||(n.classList.remove(...o),i.emitContainerClasses())}var ev={addClasses:Zg,removeClasses:Jg};function tv(){const i=this,{isLocked:n,params:o}=i,{slidesOffsetBefore:l}=o;if(l){const u=i.slides.length-1,c=i.slidesGrid[u]+i.slidesSizesGrid[u]+l*2;i.isLocked=i.size>c}else i.isLocked=i.snapGrid.length===1;o.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),o.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),n&&n!==i.isLocked&&(i.isEnd=!1),n!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var nv={checkOverflow:tv},Ma={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function rv(i,n){return function(l){l===void 0&&(l={});const u=Object.keys(l)[0],c=l[u];if(typeof c!="object"||c===null){yt(n,l);return}if(i[u]===!0&&(i[u]={enabled:!0}),u==="navigation"&&i[u]&&i[u].enabled&&!i[u].prevEl&&!i[u].nextEl&&(i[u].auto=!0),["pagination","scrollbar"].indexOf(u)>=0&&i[u]&&i[u].enabled&&!i[u].el&&(i[u].auto=!0),!(u in i&&"enabled"in c)){yt(n,l);return}typeof i[u]=="object"&&!("enabled"in i[u])&&(i[u].enabled=!0),i[u]||(i[u]={enabled:!1}),yt(n,l)}}const ga={eventsEmitter:eg,update:dg,translate:vg,transition:Sg,slide:zg,loop:Lg,grabCursor:Ag,events:Ug,breakpoints:Qg,checkOverflow:nv,classes:ev},va={};let Ba=class Jt{constructor(){let n,o;for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];u.length===1&&u[0].constructor&&Object.prototype.toString.call(u[0]).slice(8,-1)==="Object"?o=u[0]:[n,o]=u,o||(o={}),o=yt({},o),n&&!o.el&&(o.el=n);const p=tn();if(o.el&&typeof o.el=="string"&&p.querySelectorAll(o.el).length>1){const v=[];return p.querySelectorAll(o.el).forEach(y=>{const k=yt({},o,{el:y});v.push(new Jt(k))}),v}const g=this;g.__swiper__=!0,g.support=Uf(),g.device=Yf({userAgent:o.userAgent}),g.browser=K0(),g.eventsListeners={},g.eventsAnyListeners=[],g.modules=[...g.__modules__],o.modules&&Array.isArray(o.modules)&&g.modules.push(...o.modules);const f={};g.modules.forEach(v=>{v({params:o,swiper:g,extendParams:rv(o,f),on:g.on.bind(g),once:g.once.bind(g),off:g.off.bind(g),emit:g.emit.bind(g)})});const x=yt({},Ma,f);return g.params=yt({},x,va,o),g.originalParams=yt({},g.params),g.passedParams=yt({},o),g.params&&g.params.on&&Object.keys(g.params.on).forEach(v=>{g.on(v,g.params.on[v])}),g.params&&g.params.onAny&&g.onAny(g.params.onAny),Object.assign(g,{enabled:g.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return g.params.direction==="horizontal"},isVertical(){return g.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:g.params.allowSlideNext,allowSlidePrev:g.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:g.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:g.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),g.emit("_swiper"),g.params.init&&g.init(),g}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:o,params:l}=this,u=Ht(o,`.${l.slideClass}, swiper-slide`),c=es(u[0]);return es(n)-c}getSlideIndexByData(n){return this.getSlideIndex(this.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===n)[0])}recalcSlides(){const n=this,{slidesEl:o,params:l}=n;n.slides=Ht(o,`.${l.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,o){const l=this;n=Math.min(Math.max(n,0),1);const u=l.minTranslate(),p=(l.maxTranslate()-u)*n+u;l.translateTo(p,typeof o>"u"?0:o),l.updateActiveIndex(),l.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=n.el.className.split(" ").filter(l=>l.indexOf("swiper")===0||l.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",o.join(" "))}getSlideClasses(n){const o=this;return o.destroyed?"":n.className.split(" ").filter(l=>l.indexOf("swiper-slide")===0||l.indexOf(o.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=[];n.slides.forEach(l=>{const u=n.getSlideClasses(l);o.push({slideEl:l,classNames:u}),n.emit("_slideClass",l,u)}),n.emit("_slideClasses",o)}slidesPerViewDynamic(n,o){n===void 0&&(n="current"),o===void 0&&(o=!1);const l=this,{params:u,slides:c,slidesGrid:p,slidesSizesGrid:g,size:f,activeIndex:x}=l;let v=1;if(typeof u.slidesPerView=="number")return u.slidesPerView;if(u.centeredSlides){let y=c[x]?Math.ceil(c[x].swiperSlideSize):0,k;for(let b=x+1;b<c.length;b+=1)c[b]&&!k&&(y+=Math.ceil(c[b].swiperSlideSize),v+=1,y>f&&(k=!0));for(let b=x-1;b>=0;b-=1)c[b]&&!k&&(y+=c[b].swiperSlideSize,v+=1,y>f&&(k=!0))}else if(n==="current")for(let y=x+1;y<c.length;y+=1)(o?p[y]+g[y]-p[x]<f:p[y]-p[x]<f)&&(v+=1);else for(let y=x-1;y>=0;y-=1)p[x]-p[y]<f&&(v+=1);return v}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:o,params:l}=n;l.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(p=>{p.complete&&qo(n,p)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function u(){const p=n.rtlTranslate?n.translate*-1:n.translate,g=Math.min(Math.max(p,n.maxTranslate()),n.minTranslate());n.setTranslate(g),n.updateActiveIndex(),n.updateSlidesClasses()}let c;if(l.freeMode&&l.freeMode.enabled&&!l.cssMode)u(),l.autoHeight&&n.updateAutoHeight();else{if((l.slidesPerView==="auto"||l.slidesPerView>1)&&n.isEnd&&!l.centeredSlides){const p=n.virtual&&l.virtual.enabled?n.virtual.slides:n.slides;c=n.slideTo(p.length-1,0,!1,!0)}else c=n.slideTo(n.activeIndex,0,!1,!0);c||u()}l.watchOverflow&&o!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,o){o===void 0&&(o=!0);const l=this,u=l.params.direction;return n||(n=u==="horizontal"?"vertical":"horizontal"),n===u||n!=="horizontal"&&n!=="vertical"||(l.el.classList.remove(`${l.params.containerModifierClass}${u}`),l.el.classList.add(`${l.params.containerModifierClass}${n}`),l.emitContainerClasses(),l.params.direction=n,l.slides.forEach(c=>{n==="vertical"?c.style.width="":c.style.height=""}),l.emit("changeDirection"),o&&l.update()),l}changeLanguageDirection(n){const o=this;o.rtl&&n==="rtl"||!o.rtl&&n==="ltr"||(o.rtl=n==="rtl",o.rtlTranslate=o.params.direction==="horizontal"&&o.rtl,o.rtl?(o.el.classList.add(`${o.params.containerModifierClass}rtl`),o.el.dir="rtl"):(o.el.classList.remove(`${o.params.containerModifierClass}rtl`),o.el.dir="ltr"),o.update())}mount(n){const o=this;if(o.mounted)return!0;let l=n||o.params.el;if(typeof l=="string"&&(l=document.querySelector(l)),!l)return!1;l.swiper=o,l.parentNode&&l.parentNode.host&&l.parentNode.host.nodeName===o.params.swiperElementNodeName.toUpperCase()&&(o.isElement=!0);const u=()=>`.${(o.params.wrapperClass||"").trim().split(" ").join(".")}`;let p=l&&l.shadowRoot&&l.shadowRoot.querySelector?l.shadowRoot.querySelector(u()):Ht(l,u())[0];return!p&&o.params.createElements&&(p=Jo("div",o.params.wrapperClass),l.append(p),Ht(l,`.${o.params.slideClass}`).forEach(g=>{p.append(g)})),Object.assign(o,{el:l,wrapperEl:p,slidesEl:o.isElement&&!l.parentNode.host.slideSlots?l.parentNode.host:p,hostEl:o.isElement?l.parentNode.host:l,mounted:!0,rtl:l.dir.toLowerCase()==="rtl"||bn(l,"direction")==="rtl",rtlTranslate:o.params.direction==="horizontal"&&(l.dir.toLowerCase()==="rtl"||bn(l,"direction")==="rtl"),wrongRTL:bn(p,"display")==="-webkit-box"}),!0}init(n){const o=this;if(o.initialized||o.mount(n)===!1)return o;o.emit("beforeInit"),o.params.breakpoints&&o.setBreakpoint(),o.addClasses(),o.updateSize(),o.updateSlides(),o.params.watchOverflow&&o.checkOverflow(),o.params.grabCursor&&o.enabled&&o.setGrabCursor(),o.params.loop&&o.virtual&&o.params.virtual.enabled?o.slideTo(o.params.initialSlide+o.virtual.slidesBefore,0,o.params.runCallbacksOnInit,!1,!0):o.slideTo(o.params.initialSlide,0,o.params.runCallbacksOnInit,!1,!0),o.params.loop&&o.loopCreate(),o.attachEvents();const u=[...o.el.querySelectorAll('[loading="lazy"]')];return o.isElement&&u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),u.forEach(c=>{c.complete?qo(o,c):c.addEventListener("load",p=>{qo(o,p.target)})}),_a(o),o.initialized=!0,_a(o),o.emit("init"),o.emit("afterInit"),o}destroy(n,o){n===void 0&&(n=!0),o===void 0&&(o=!0);const l=this,{params:u,el:c,wrapperEl:p,slides:g}=l;return typeof l.params>"u"||l.destroyed||(l.emit("beforeDestroy"),l.initialized=!1,l.detachEvents(),u.loop&&l.loopDestroy(),o&&(l.removeClasses(),c&&typeof c!="string"&&c.removeAttribute("style"),p&&p.removeAttribute("style"),g&&g.length&&g.forEach(f=>{f.classList.remove(u.slideVisibleClass,u.slideFullyVisibleClass,u.slideActiveClass,u.slideNextClass,u.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),l.emit("destroy"),Object.keys(l.eventsListeners).forEach(f=>{l.off(f)}),n!==!1&&(l.el&&typeof l.el!="string"&&(l.el.swiper=null),$0(l)),l.destroyed=!0),null}static extendDefaults(n){yt(va,n)}static get extendedDefaults(){return va}static get defaults(){return Ma}static installModule(n){Jt.prototype.__modules__||(Jt.prototype.__modules__=[]);const o=Jt.prototype.__modules__;typeof n=="function"&&o.indexOf(n)<0&&o.push(n)}static use(n){return Array.isArray(n)?(n.forEach(o=>Jt.installModule(o)),Jt):(Jt.installModule(n),Jt)}};Object.keys(ga).forEach(i=>{Object.keys(ga[i]).forEach(n=>{Ba.prototype[n]=ga[i][n]})});Ba.use([Z0,J0]);const Kf=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function $n(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function vr(i,n){const o=["__proto__","constructor","prototype"];Object.keys(n).filter(l=>o.indexOf(l)<0).forEach(l=>{typeof i[l]>"u"?i[l]=n[l]:$n(n[l])&&$n(i[l])&&Object.keys(n[l]).length>0?n[l].__swiper__?i[l]=n[l]:vr(i[l],n[l]):i[l]=n[l]})}function Zf(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Jf(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function ep(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function tp(i){i===void 0&&(i="");const n=i.split(" ").map(l=>l.trim()).filter(l=>!!l),o=[];return n.forEach(l=>{o.indexOf(l)<0&&o.push(l)}),o.join(" ")}function iv(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function ov(i){let{swiper:n,slides:o,passedParams:l,changedParams:u,nextEl:c,prevEl:p,scrollbarEl:g,paginationEl:f}=i;const x=u.filter(H=>H!=="children"&&H!=="direction"&&H!=="wrapperClass"),{params:v,pagination:y,navigation:k,scrollbar:b,virtual:P,thumbs:I}=n;let B,M,T,S,_,N,A,Q;u.includes("thumbs")&&l.thumbs&&l.thumbs.swiper&&!l.thumbs.swiper.destroyed&&v.thumbs&&(!v.thumbs.swiper||v.thumbs.swiper.destroyed)&&(B=!0),u.includes("controller")&&l.controller&&l.controller.control&&v.controller&&!v.controller.control&&(M=!0),u.includes("pagination")&&l.pagination&&(l.pagination.el||f)&&(v.pagination||v.pagination===!1)&&y&&!y.el&&(T=!0),u.includes("scrollbar")&&l.scrollbar&&(l.scrollbar.el||g)&&(v.scrollbar||v.scrollbar===!1)&&b&&!b.el&&(S=!0),u.includes("navigation")&&l.navigation&&(l.navigation.prevEl||p)&&(l.navigation.nextEl||c)&&(v.navigation||v.navigation===!1)&&k&&!k.prevEl&&!k.nextEl&&(_=!0);const G=H=>{n[H]&&(n[H].destroy(),H==="navigation"?(n.isElement&&(n[H].prevEl.remove(),n[H].nextEl.remove()),v[H].prevEl=void 0,v[H].nextEl=void 0,n[H].prevEl=void 0,n[H].nextEl=void 0):(n.isElement&&n[H].el.remove(),v[H].el=void 0,n[H].el=void 0))};u.includes("loop")&&n.isElement&&(v.loop&&!l.loop?N=!0:!v.loop&&l.loop?A=!0:Q=!0),x.forEach(H=>{if($n(v[H])&&$n(l[H]))Object.assign(v[H],l[H]),(H==="navigation"||H==="pagination"||H==="scrollbar")&&"enabled"in l[H]&&!l[H].enabled&&G(H);else{const W=l[H];(W===!0||W===!1)&&(H==="navigation"||H==="pagination"||H==="scrollbar")?W===!1&&G(H):v[H]=l[H]}}),x.includes("controller")&&!M&&n.controller&&n.controller.control&&v.controller&&v.controller.control&&(n.controller.control=v.controller.control),u.includes("children")&&o&&P&&v.virtual.enabled?(P.slides=o,P.update(!0)):u.includes("virtual")&&P&&v.virtual.enabled&&(o&&(P.slides=o),P.update(!0)),u.includes("children")&&o&&v.loop&&(Q=!0),B&&I.init()&&I.update(!0),M&&(n.controller.control=v.controller.control),T&&(n.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),n.el.appendChild(f)),f&&(v.pagination.el=f),y.init(),y.render(),y.update()),S&&(n.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-scrollbar"),g.part.add("scrollbar"),n.el.appendChild(g)),g&&(v.scrollbar.el=g),b.init(),b.updateSize(),b.setTranslate()),_&&(n.isElement&&((!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-next"),c.innerHTML=n.hostEl.constructor.nextButtonSvg,c.part.add("button-next"),n.el.appendChild(c)),(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-button-prev"),p.innerHTML=n.hostEl.constructor.prevButtonSvg,p.part.add("button-prev"),n.el.appendChild(p))),c&&(v.navigation.nextEl=c),p&&(v.navigation.prevEl=p),k.init(),k.update()),u.includes("allowSlideNext")&&(n.allowSlideNext=l.allowSlideNext),u.includes("allowSlidePrev")&&(n.allowSlidePrev=l.allowSlidePrev),u.includes("direction")&&n.changeDirection(l.direction,!1),(N||Q)&&n.loopDestroy(),(A||Q)&&n.loopCreate(),n.update()}function sv(i,n){i===void 0&&(i={}),n===void 0&&(n=!0);const o={on:{}},l={},u={};vr(o,Ma),o._emitClasses=!0,o.init=!1;const c={},p=Kf.map(f=>f.replace(/_/,"")),g=Object.assign({},i);return Object.keys(g).forEach(f=>{typeof i[f]>"u"||(p.indexOf(f)>=0?$n(i[f])?(o[f]={},u[f]={},vr(o[f],i[f]),vr(u[f],i[f])):(o[f]=i[f],u[f]=i[f]):f.search(/on[A-Z]/)===0&&typeof i[f]=="function"?n?l[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:o.on[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:c[f]=i[f])}),["navigation","pagination","scrollbar"].forEach(f=>{o[f]===!0&&(o[f]={}),o[f]===!1&&delete o[f]}),{params:o,passedParams:u,rest:c,events:l}}function lv(i,n){let{el:o,nextEl:l,prevEl:u,paginationEl:c,scrollbarEl:p,swiper:g}=i;Zf(n)&&l&&u&&(g.params.navigation.nextEl=l,g.originalParams.navigation.nextEl=l,g.params.navigation.prevEl=u,g.originalParams.navigation.prevEl=u),Jf(n)&&c&&(g.params.pagination.el=c,g.originalParams.pagination.el=c),ep(n)&&p&&(g.params.scrollbar.el=p,g.originalParams.scrollbar.el=p),g.init(o)}function av(i,n,o,l,u){const c=[];if(!n)return c;const p=f=>{c.indexOf(f)<0&&c.push(f)};if(o&&l){const f=l.map(u),x=o.map(u);f.join("")!==x.join("")&&p("children"),l.length!==o.length&&p("children")}return Kf.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in i&&f in n)if($n(i[f])&&$n(n[f])){const x=Object.keys(i[f]),v=Object.keys(n[f]);x.length!==v.length?p(f):(x.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}),v.forEach(y=>{i[f][y]!==n[f][y]&&p(f)}))}else i[f]!==n[f]&&p(f)}),c}const uv=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function ts(){return ts=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},ts.apply(this,arguments)}function np(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function rp(i){const n=[];return Te.Children.toArray(i).forEach(o=>{np(o)?n.push(o):o.props&&o.props.children&&rp(o.props.children).forEach(l=>n.push(l))}),n}function cv(i){const n=[],o={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Te.Children.toArray(i).forEach(l=>{if(np(l))n.push(l);else if(l.props&&l.props.slot&&o[l.props.slot])o[l.props.slot].push(l);else if(l.props&&l.props.children){const u=rp(l.props.children);u.length>0?u.forEach(c=>n.push(c)):o["container-end"].push(l)}else o["container-end"].push(l)}),{slides:n,slots:o}}function dv(i,n,o){if(!o)return null;const l=v=>{let y=v;return v<0?y=n.length+v:y>=n.length&&(y=y-n.length),y},u=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:c,to:p}=o,g=i.params.loop?-n.length:0,f=i.params.loop?n.length*2:n.length,x=[];for(let v=g;v<f;v+=1)v>=c&&v<=p&&x.push(n[l(v)]);return x.map((v,y)=>Te.cloneElement(v,{swiper:i,style:u,key:v.props.virtualIndex||v.key||`slide-${y}`}))}function yi(i,n){return typeof window>"u"?ye.useEffect(i,n):ye.useLayoutEffect(i,n)}const cf=ye.createContext(null),fv=ye.createContext(null),Er=ye.forwardRef(function(i,n){let{className:o,tag:l="div",wrapperTag:u="div",children:c,onSwiper:p,...g}=i===void 0?{}:i,f=!1;const[x,v]=ye.useState("swiper"),[y,k]=ye.useState(null),[b,P]=ye.useState(!1),I=ye.useRef(!1),B=ye.useRef(null),M=ye.useRef(null),T=ye.useRef(null),S=ye.useRef(null),_=ye.useRef(null),N=ye.useRef(null),A=ye.useRef(null),Q=ye.useRef(null),{params:G,passedParams:H,rest:W,events:R}=sv(g),{slides:D,slots:$}=cv(c),U=()=>{P(!b)};Object.assign(G.on,{_containerClasses(Z,X){v(X)}});const re=()=>{Object.assign(G.on,R),f=!0;const Z={...G};if(delete Z.wrapperClass,M.current=new Ba(Z),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=D;const X={cache:!1,slides:D,renderExternal:k,renderExternalUpdate:!1};vr(M.current.params.virtual,X),vr(M.current.originalParams.virtual,X)}};B.current||re(),M.current&&M.current.on("_beforeBreakpoint",U);const me=()=>{f||!R||!M.current||Object.keys(R).forEach(Z=>{M.current.on(Z,R[Z])})},xe=()=>{!R||!M.current||Object.keys(R).forEach(Z=>{M.current.off(Z,R[Z])})};ye.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",U)}),ye.useEffect(()=>{!I.current&&M.current&&(M.current.emitSlidesClasses(),I.current=!0)}),yi(()=>{if(n&&(n.current=B.current),!!B.current)return M.current.destroyed&&re(),lv({el:B.current,nextEl:_.current,prevEl:N.current,paginationEl:A.current,scrollbarEl:Q.current,swiper:M.current},G),p&&!M.current.destroyed&&p(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),yi(()=>{me();const Z=av(H,T.current,D,S.current,X=>X.key);return T.current=H,S.current=D,Z.length&&M.current&&!M.current.destroyed&&ov({swiper:M.current,slides:D,passedParams:H,changedParams:Z,nextEl:_.current,prevEl:N.current,scrollbarEl:Q.current,paginationEl:A.current}),()=>{xe()}}),yi(()=>{uv(M.current)},[y]);function V(){return G.virtual?dv(M.current,D,y):D.map((Z,X)=>Te.cloneElement(Z,{swiper:M.current,swiperSlideIndex:X}))}return Te.createElement(l,ts({ref:B,className:tp(`${x}${o?` ${o}`:""}`)},W),Te.createElement(fv.Provider,{value:M.current},$["container-start"],Te.createElement(u,{className:iv(G.wrapperClass)},$["wrapper-start"],V(),$["wrapper-end"]),Zf(G)&&Te.createElement(Te.Fragment,null,Te.createElement("div",{ref:N,className:"swiper-button-prev"}),Te.createElement("div",{ref:_,className:"swiper-button-next"})),ep(G)&&Te.createElement("div",{ref:Q,className:"swiper-scrollbar"}),Jf(G)&&Te.createElement("div",{ref:A,className:"swiper-pagination"}),$["container-end"]))});Er.displayName="Swiper";const ze=ye.forwardRef(function(i,n){let{tag:o="div",children:l,className:u="",swiper:c,zoom:p,lazy:g,virtualIndex:f,swiperSlideIndex:x,...v}=i===void 0?{}:i;const y=ye.useRef(null),[k,b]=ye.useState("swiper-slide"),[P,I]=ye.useState(!1);function B(_,N,A){N===y.current&&b(A)}yi(()=>{if(typeof x<"u"&&(y.current.swiperSlideIndex=x),n&&(n.current=y.current),!(!y.current||!c)){if(c.destroyed){k!=="swiper-slide"&&b("swiper-slide");return}return c.on("_slideClass",B),()=>{c&&c.off("_slideClass",B)}}}),yi(()=>{c&&y.current&&!c.destroyed&&b(c.getSlideClasses(y.current))},[c]);const M={isActive:k.indexOf("swiper-slide-active")>=0,isVisible:k.indexOf("swiper-slide-visible")>=0,isPrev:k.indexOf("swiper-slide-prev")>=0,isNext:k.indexOf("swiper-slide-next")>=0},T=()=>typeof l=="function"?l(M):l,S=()=>{I(!0)};return Te.createElement(o,ts({ref:y,className:tp(`${k}${u?` ${u}`:""}`),"data-swiper-slide-index":f,onLoad:S},v),p&&Te.createElement(cf.Provider,{value:M},Te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof p=="number"?p:void 0},T(),g&&!P&&Te.createElement("div",{className:"swiper-lazy-preloader"}))),!p&&Te.createElement(cf.Provider,{value:M},T(),g&&!P&&Te.createElement("div",{className:"swiper-lazy-preloader"})))});ze.displayName="SwiperSlide";function pv(i,n,o,l){return i.params.createElements&&Object.keys(l).forEach(u=>{if(!o[u]&&o.auto===!0){let c=Ht(i.el,`.${l[u]}`)[0];c||(c=Jo("div",l[u]),c.className=l[u],i.el.append(c)),o[u]=c,n[u]=c}}),o}function pi(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ki(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const c="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),n.pagination={el:null,bullets:[]};let p,g=0;function f(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function x(T,S){const{bulletActiveClass:_}=n.params.pagination;T&&(T=T[`${S==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${_}-${S}`),T=T[`${S==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${_}-${S}-${S}`)))}function v(T,S,_){if(T=T%_,S=S%_,S===T+1)return"next";if(S===T-1)return"previous"}function y(T){const S=T.target.closest(pi(n.params.pagination.bulletClass));if(!S)return;T.preventDefault();const _=es(S)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===_)return;const N=v(n.realIndex,_,n.slides.length);N==="next"?n.slideNext():N==="previous"?n.slidePrev():n.slideToLoop(_)}else n.slideTo(_)}function k(){const T=n.rtl,S=n.params.pagination;if(f())return;let _=n.pagination.el;_=Zt(_);let N,A;const Q=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,G=n.params.loop?Math.ceil(Q/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(A=n.previousRealIndex||0,N=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(N=n.snapIndex,A=n.previousSnapIndex):(A=n.previousIndex||0,N=n.activeIndex||0),S.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const H=n.pagination.bullets;let W,R,D;if(S.dynamicBullets&&(p=za(H[0],n.isHorizontal()?"width":"height"),_.forEach($=>{$.style[n.isHorizontal()?"width":"height"]=`${p*(S.dynamicMainBullets+4)}px`}),S.dynamicMainBullets>1&&A!==void 0&&(g+=N-(A||0),g>S.dynamicMainBullets-1?g=S.dynamicMainBullets-1:g<0&&(g=0)),W=Math.max(N-g,0),R=W+(Math.min(H.length,S.dynamicMainBullets)-1),D=(R+W)/2),H.forEach($=>{const U=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(re=>`${S.bulletActiveClass}${re}`)].map(re=>typeof re=="string"&&re.includes(" ")?re.split(" "):re).flat();$.classList.remove(...U)}),_.length>1)H.forEach($=>{const U=es($);U===N?$.classList.add(...S.bulletActiveClass.split(" ")):n.isElement&&$.setAttribute("part","bullet"),S.dynamicBullets&&(U>=W&&U<=R&&$.classList.add(...`${S.bulletActiveClass}-main`.split(" ")),U===W&&x($,"prev"),U===R&&x($,"next"))});else{const $=H[N];if($&&$.classList.add(...S.bulletActiveClass.split(" ")),n.isElement&&H.forEach((U,re)=>{U.setAttribute("part",re===N?"bullet-active":"bullet")}),S.dynamicBullets){const U=H[W],re=H[R];for(let me=W;me<=R;me+=1)H[me]&&H[me].classList.add(...`${S.bulletActiveClass}-main`.split(" "));x(U,"prev"),x(re,"next")}}if(S.dynamicBullets){const $=Math.min(H.length,S.dynamicMainBullets+4),U=(p*$-p)/2-D*p,re=T?"right":"left";H.forEach(me=>{me.style[n.isHorizontal()?re:"top"]=`${U}px`})}}_.forEach((H,W)=>{if(S.type==="fraction"&&(H.querySelectorAll(pi(S.currentClass)).forEach(R=>{R.textContent=S.formatFractionCurrent(N+1)}),H.querySelectorAll(pi(S.totalClass)).forEach(R=>{R.textContent=S.formatFractionTotal(G)})),S.type==="progressbar"){let R;S.progressbarOpposite?R=n.isHorizontal()?"vertical":"horizontal":R=n.isHorizontal()?"horizontal":"vertical";const D=(N+1)/G;let $=1,U=1;R==="horizontal"?$=D:U=D,H.querySelectorAll(pi(S.progressbarFillClass)).forEach(re=>{re.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${U})`,re.style.transitionDuration=`${n.params.speed}ms`})}S.type==="custom"&&S.renderCustom?(H.innerHTML=S.renderCustom(n,N+1,G),W===0&&u("paginationRender",H)):(W===0&&u("paginationRender",H),u("paginationUpdate",H)),n.params.watchOverflow&&n.enabled&&H.classList[n.isLocked?"add":"remove"](S.lockClass)})}function b(){const T=n.params.pagination;if(f())return;const S=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let _=n.pagination.el;_=Zt(_);let N="";if(T.type==="bullets"){let A=n.params.loop?Math.ceil(S/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&A>S&&(A=S);for(let Q=0;Q<A;Q+=1)T.renderBullet?N+=T.renderBullet.call(n,Q,T.bulletClass):N+=`<${T.bulletElement} ${n.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?N=T.renderFraction.call(n,T.currentClass,T.totalClass):N=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?N=T.renderProgressbar.call(n,T.progressbarFillClass):N=`<span class="${T.progressbarFillClass}"></span>`),n.pagination.bullets=[],_.forEach(A=>{T.type!=="custom"&&(A.innerHTML=N||""),T.type==="bullets"&&n.pagination.bullets.push(...A.querySelectorAll(pi(T.bulletClass)))}),T.type!=="custom"&&u("paginationRender",_[0])}function P(){n.params.pagination=pv(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const T=n.params.pagination;if(!T.el)return;let S;typeof T.el=="string"&&n.isElement&&(S=n.el.querySelector(T.el)),!S&&typeof T.el=="string"&&(S=[...document.querySelectorAll(T.el)]),S||(S=T.el),!(!S||S.length===0)&&(n.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(S)&&S.length>1&&(S=[...n.el.querySelectorAll(T.el)],S.length>1&&(S=S.filter(_=>qf(_,".swiper")[0]===n.el)[0])),Array.isArray(S)&&S.length===1&&(S=S[0]),Object.assign(n.pagination,{el:S}),S=Zt(S),S.forEach(_=>{T.type==="bullets"&&T.clickable&&_.classList.add(...(T.clickableClass||"").split(" ")),_.classList.add(T.modifierClass+T.type),_.classList.add(n.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(_.classList.add(`${T.modifierClass}${T.type}-dynamic`),g=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&_.classList.add(T.progressbarOppositeClass),T.clickable&&_.addEventListener("click",y),n.enabled||_.classList.add(T.lockClass)}))}function I(){const T=n.params.pagination;if(f())return;let S=n.pagination.el;S&&(S=Zt(S),S.forEach(_=>{_.classList.remove(T.hiddenClass),_.classList.remove(T.modifierClass+T.type),_.classList.remove(n.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(_.classList.remove(...(T.clickableClass||"").split(" ")),_.removeEventListener("click",y))})),n.pagination.bullets&&n.pagination.bullets.forEach(_=>_.classList.remove(...T.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const T=n.params.pagination;let{el:S}=n.pagination;S=Zt(S),S.forEach(_=>{_.classList.remove(T.horizontalClass,T.verticalClass),_.classList.add(n.isHorizontal()?T.horizontalClass:T.verticalClass)})}),l("init",()=>{n.params.pagination.enabled===!1?M():(P(),b(),k())}),l("activeIndexChange",()=>{typeof n.snapIndex>"u"&&k()}),l("snapIndexChange",()=>{k()}),l("snapGridLengthChange",()=>{b(),k()}),l("destroy",()=>{I()}),l("enable disable",()=>{let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),l("lock unlock",()=>{k()}),l("click",(T,S)=>{const _=S.target,N=Zt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&N&&N.length>0&&!_.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&_===n.navigation.nextEl||n.navigation.prevEl&&_===n.navigation.prevEl))return;const A=N[0].classList.contains(n.params.pagination.hiddenClass);u(A===!0?"paginationShow":"paginationHide"),N.forEach(Q=>Q.classList.toggle(n.params.pagination.hiddenClass))}});const B=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList.remove(n.params.pagination.paginationDisabledClass))),P(),b(),k()},M=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:T}=n.pagination;T&&(T=Zt(T),T.forEach(S=>S.classList.add(n.params.pagination.paginationDisabledClass))),I()};Object.assign(n.pagination,{enable:B,disable:M,render:b,update:k,init:P,destroy:I})}function bi(i){let{swiper:n,extendParams:o,on:l,emit:u,params:c}=i;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,g,f=c&&c.autoplay?c.autoplay.delay:3e3,x=c&&c.autoplay?c.autoplay.delay:3e3,v,y=new Date().getTime(),k,b,P,I,B,M,T;function S(V){!n||n.destroyed||!n.wrapperEl||V.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",S),!(T||V.detail&&V.detail.bySwiperTouchMove)&&W())}const _=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?k=!0:k&&(x=v,k=!1);const V=n.autoplay.paused?v:y+x-new Date().getTime();n.autoplay.timeLeft=V,u("autoplayTimeLeft",V,V/f),g=requestAnimationFrame(()=>{_()})},N=()=>{let V;return n.virtual&&n.params.virtual.enabled?V=n.slides.filter(X=>X.classList.contains("swiper-slide-active"))[0]:V=n.slides[n.activeIndex],V?parseInt(V.getAttribute("data-swiper-autoplay"),10):void 0},A=V=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(g),_();let Z=typeof V>"u"?n.params.autoplay.delay:V;f=n.params.autoplay.delay,x=n.params.autoplay.delay;const X=N();!Number.isNaN(X)&&X>0&&typeof V>"u"&&(Z=X,f=X,x=X),v=Z;const j=n.params.speed,F=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,j,!0,!0),u("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,j,!0,!0),u("autoplay")),n.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return Z>0?(clearTimeout(p),p=setTimeout(()=>{F()},Z)):requestAnimationFrame(()=>{F()}),Z},Q=()=>{y=new Date().getTime(),n.autoplay.running=!0,A(),u("autoplayStart")},G=()=>{n.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(g),u("autoplayStop")},H=(V,Z)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(p),V||(M=!0);const X=()=>{u("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",S):W()};if(n.autoplay.paused=!0,Z){B&&(v=n.params.autoplay.delay),B=!1,X();return}v=(v||n.params.autoplay.delay)-(new Date().getTime()-y),!(n.isEnd&&v<0&&!n.params.loop)&&(v<0&&(v=0),X())},W=()=>{n.isEnd&&v<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(y=new Date().getTime(),M?(M=!1,A(v)):A(),n.autoplay.paused=!1,u("autoplayResume"))},R=()=>{if(n.destroyed||!n.autoplay.running)return;const V=tn();V.visibilityState==="hidden"&&(M=!0,H(!0)),V.visibilityState==="visible"&&W()},D=V=>{V.pointerType==="mouse"&&(M=!0,T=!0,!(n.animating||n.autoplay.paused)&&H(!0))},$=V=>{V.pointerType==="mouse"&&(T=!1,n.autoplay.paused&&W())},U=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",D),n.el.addEventListener("pointerleave",$))},re=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",D),n.el.removeEventListener("pointerleave",$))},me=()=>{tn().addEventListener("visibilitychange",R)},xe=()=>{tn().removeEventListener("visibilitychange",R)};l("init",()=>{n.params.autoplay.enabled&&(U(),me(),Q())}),l("destroy",()=>{re(),xe(),n.autoplay.running&&G()}),l("_freeModeStaticRelease",()=>{(P||M)&&W()}),l("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?G():H(!0,!0)}),l("beforeTransitionStart",(V,Z,X)=>{n.destroyed||!n.autoplay.running||(X||!n.params.autoplay.disableOnInteraction?H(!0,!0):G())}),l("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){G();return}b=!0,P=!1,M=!1,I=setTimeout(()=>{M=!0,P=!0,H(!0)},200)}}),l("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!b)){if(clearTimeout(I),clearTimeout(p),n.params.autoplay.disableOnInteraction){P=!1,b=!1;return}P&&n.params.cssMode&&W(),P=!1,b=!1}}),l("slideChange",()=>{n.destroyed||!n.autoplay.running||(B=!0)}),Object.assign(n.autoplay,{start:Q,stop:G,pause:H,resume:W})}function us(i){let{swiper:n,extendParams:o,emit:l,once:u}=i;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){if(n.params.cssMode)return;const f=n.getTranslate();n.setTranslate(f),n.setTransition(0),n.touchEventsData.velocities.length=0,n.freeMode.onTouchEnd({currentPos:n.rtl?n.translate:-n.translate})}function p(){if(n.params.cssMode)return;const{touchEventsData:f,touches:x}=n;f.velocities.length===0&&f.velocities.push({position:x[n.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:x[n.isHorizontal()?"currentX":"currentY"],time:Bn()})}function g(f){let{currentPos:x}=f;if(n.params.cssMode)return;const{params:v,wrapperEl:y,rtlTranslate:k,snapGrid:b,touchEventsData:P}=n,B=Bn()-P.touchStartTime;if(x<-n.minTranslate()){n.slideTo(n.activeIndex);return}if(x>-n.maxTranslate()){n.slides.length<b.length?n.slideTo(b.length-1):n.slideTo(n.slides.length-1);return}if(v.freeMode.momentum){if(P.velocities.length>1){const G=P.velocities.pop(),H=P.velocities.pop(),W=G.position-H.position,R=G.time-H.time;n.velocity=W/R,n.velocity/=2,Math.abs(n.velocity)<v.freeMode.minimumVelocity&&(n.velocity=0),(R>150||Bn()-G.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity*=v.freeMode.momentumVelocityRatio,P.velocities.length=0;let M=1e3*v.freeMode.momentumRatio;const T=n.velocity*M;let S=n.translate+T;k&&(S=-S);let _=!1,N;const A=Math.abs(n.velocity)*20*v.freeMode.momentumBounceRatio;let Q;if(S<n.maxTranslate())v.freeMode.momentumBounce?(S+n.maxTranslate()<-A&&(S=n.maxTranslate()-A),N=n.maxTranslate(),_=!0,P.allowMomentumBounce=!0):S=n.maxTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(S>n.minTranslate())v.freeMode.momentumBounce?(S-n.minTranslate()>A&&(S=n.minTranslate()+A),N=n.minTranslate(),_=!0,P.allowMomentumBounce=!0):S=n.minTranslate(),v.loop&&v.centeredSlides&&(Q=!0);else if(v.freeMode.sticky){let G;for(let H=0;H<b.length;H+=1)if(b[H]>-S){G=H;break}Math.abs(b[G]-S)<Math.abs(b[G-1]-S)||n.swipeDirection==="next"?S=b[G]:S=b[G-1],S=-S}if(Q&&u("transitionEnd",()=>{n.loopFix()}),n.velocity!==0){if(k?M=Math.abs((-S-n.translate)/n.velocity):M=Math.abs((S-n.translate)/n.velocity),v.freeMode.sticky){const G=Math.abs((k?-S:S)-n.translate),H=n.slidesSizesGrid[n.activeIndex];G<H?M=v.speed:G<2*H?M=v.speed*1.5:M=v.speed*2.5}}else if(v.freeMode.sticky){n.slideToClosest();return}v.freeMode.momentumBounce&&_?(n.updateProgress(N),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating=!0,ca(y,()=>{!n||n.destroyed||!P.allowMomentumBounce||(l("momentumBounce"),n.setTransition(v.speed),setTimeout(()=>{n.setTranslate(N),ca(y,()=>{!n||n.destroyed||n.transitionEnd()})},0))})):n.velocity?(l("_freeModeNoMomentumRelease"),n.updateProgress(S),n.setTransition(M),n.setTranslate(S),n.transitionStart(!0,n.swipeDirection),n.animating||(n.animating=!0,ca(y,()=>{!n||n.destroyed||n.transitionEnd()}))):n.updateProgress(S),n.updateActiveIndex(),n.updateSlidesClasses()}else if(v.freeMode.sticky){n.slideToClosest();return}else v.freeMode&&l("_freeModeNoMomentumRelease");(!v.freeMode.momentum||B>=v.longSwipesMs)&&(l("_freeModeStaticRelease"),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses())}Object.assign(n,{freeMode:{onTouchStart:c,onTouchMove:p,onTouchEnd:g}})}const mv=ee.div`
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
`,hv=ee.section`
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
`,gv=ee.section`
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
`,vv=ee.div`
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
`,yv=ee.div`
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
`,mi=ee(ze)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,xv=()=>m.jsx(m.Fragment,{children:m.jsxs(hv,{children:[m.jsx(mv,{}),m.jsxs(gv,{children:[m.jsxs(vv,{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),m.jsx("a",{href:"#",children:m.jsx(_0,{})})]}),m.jsx(yv,{children:m.jsxs(Er,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[bi,us,ki],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(mi,{children:m.jsxs("div",{children:[m.jsx(di,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(fi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),m.jsx(mi,{children:m.jsxs("div",{children:[m.jsx(fi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),m.jsx(di,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),m.jsx(mi,{children:m.jsxs("div",{children:[m.jsx(di,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(fi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),m.jsx(mi,{children:m.jsxs("div",{children:[m.jsx(fi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),m.jsx(di,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),m.jsx(mi,{children:m.jsxs("div",{children:[m.jsx(di,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(fi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})})]})})]})]})}),wv=ee.div`
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
`,ya=()=>m.jsx(wv,{children:m.jsxs(Er,{modules:[bi,us,ki],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})}),Sv=ee.button`
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
    
`,ip=()=>m.jsx(m.Fragment,{children:m.jsxs(Sv,{id:"click-button",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"})]})}),kv=as`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`,bv=ee.section`
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
`,Ev=ee.div`
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
`,Tv=ee.div`
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
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%);
        pointer-events: none;
    }

    .swiper-slide{
        display: flex;
        position: relative;
        z-index: 1;
    }

    & > div img {
        width: 600px;
        height: auto;
        object-fit: contain;
    }
`,Cv=ee.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
        animation: ${kv} 2s linear infinite alternate-reverse;
    }
`,jv=()=>m.jsx(m.Fragment,{children:m.jsxs(bv,{children:[m.jsxs(Ev,{children:[m.jsxs("div",{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),m.jsxs("p",{children:["Escolher a qualidade é a melhor escolha, veja nossos ",m.jsx("a",{href:"#",children:"pacotes."})]})]}),m.jsx("div",{children:m.jsx(ip,{})})]}),m.jsx(Tv,{children:m.jsxs(Er,{modules:[bi,us,ki],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/10_gyjqvc.png",alt:"le ange"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/18_zyjvhk.png",alt:"allox"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/19_f8pi7x.png",alt:"your name"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/13_cnu2os.png",alt:"thelastofus"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/12_nkzjqe.png",alt:"lifegreen"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/15_wehzuc.png",alt:"monkey"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/11_yvl8cq.png",alt:"etech"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/16_xklqek.png",alt:"wizardZ"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/14_vunelf.png",alt:"coffe"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/17_pgciit.png",alt:"horizen"})})}),m.jsx(ze,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/20_hfglfp.png",alt:"yellow"})})})]})}),m.jsx(Cv,{children:m.jsx("a",{href:"#",children:m.jsx(Hf,{})})})]})}),Pv=ee.div`
  width: 25%;
  height: 350px;
  border-radius: ${i=>i.borderRadius||"20px"};
  background-color: ${i=>i.bgColor||"var(--color--black)"};
  padding: 20px;
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
`,Fo=({borderRadius:i,bgColor:n,bBackground:o,icon:l,boldText:u,normalText:c})=>m.jsxs(Pv,{borderRadius:i,bgColor:n,bBackground:o,children:[m.jsx("a",{href:"#",children:l?m.jsx(l,{}):m.jsx(N0,{})}),m.jsxs("h4",{children:[m.jsx("b",{children:u||"Texto em Negrito"}),c||"Texto normal de exemplo"]}),m.jsx(Vn,{})]}),zv=ee.section`
    width: 100%;
    height: auto;
    padding-bottom: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 0 2.5% 10% 2.5%;
    }

`,_v=ee.div`
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
`,Mv=ee.div`
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
`,Ov=ee.div`
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
`,Lv=ee.div`
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
`,Iv=ee.div`
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
`,Nv=()=>m.jsx(m.Fragment,{children:m.jsxs(zv,{children:[m.jsx(_v,{children:m.jsxs("h1",{children:["Para quem ",m.jsx("b",{children:"nós somos?"})]})}),m.jsxs(Mv,{children:[m.jsx(Ov,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Ao,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Ao,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),m.jsxs(Lv,{children:[m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Ao,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),m.jsx(Fo,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Ao,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"}),m.jsx(Iv,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})}),Av=as`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`,Dv=ee.div`
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
    animation: ${({isOpen:i})=>i?Av:"none"} 0.3s ease;
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
`,Oa=({items:i,onTextClick:n})=>{n||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[o,l]=ye.useState(null),u=c=>{console.log(`OpenText clicked: ${c}`),l(o===c?null:c),n&&n(c)};return m.jsx(m.Fragment,{children:i.map((c,p)=>m.jsxs(Dv,{isOpen:o===p,onClick:()=>u(p),children:[m.jsxs("h3",{children:[c.title,m.jsx("span",{className:"arrow",children:m.jsx(I0,{})})]}),m.jsx("div",{className:"content",children:c.text})]},p))})},Rv=ee.div`
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
`,Fv=({images:i,activeIndex:n})=>(console.log("Active Index:",n),console.log("Images Array:",i),n===null||n<0||n>=i.length?m.jsx("div",{children:"Nenhuma imagem selecionada."}):m.jsx(Rv,{children:m.jsx("img",{src:i[n],alt:`Imagem ${n+1}`})})),Bv=ee.div`
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
`,$v=ee.section`
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
`,Vv=ee.section`
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
`,Hv=ee.div`
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
`,Gv=ee.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`,Wv=()=>{const[i,n]=ye.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],l=["https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png"],u=c=>{console.log(`Texto clicado: ${c}`),n(c)};return m.jsx(m.Fragment,{children:m.jsxs($v,{children:[m.jsx(Bv,{}),m.jsxs(Vv,{children:[m.jsxs(Hv,{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),m.jsx("div",{children:m.jsx(Oa,{items:o,onTextClick:u})}),m.jsx(Vn,{})]}),m.jsx(Gv,{children:m.jsx(Fv,{images:l,activeIndex:i})})]})]})})},qv=ee.div`
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
`,Uv=ee.div`
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
`,Yv=ee.div`
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
`,hi=({logo:i,nota:n,empresa:o,depoimento:l})=>m.jsx(m.Fragment,{children:m.jsxs(qv,{children:[m.jsxs(Uv,{children:[m.jsx("img",{src:i}),m.jsxs("div",{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsx("p",{children:n})]})]}),m.jsxs(Yv,{children:[m.jsx("h1",{children:o}),m.jsx("p",{children:l})]})]})}),Xv=ee.section`
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
`,Qv=ee.div`
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
`,Kv=ee.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`,Zv=ee.div`
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
`,Jv=ee.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`,e1=()=>m.jsx(m.Fragment,{children:m.jsxs(Xv,{children:[m.jsx(Qv,{children:m.jsx("h2",{children:"Depoimentos"})}),m.jsx(Kv,{children:m.jsx("a",{href:"#",children:m.jsx(Hf,{})})}),m.jsx(Zv,{children:m.jsxs("h1",{children:["Não tenha dúvidas, ",m.jsx("b",{children:"escolha o certo!"})]})}),m.jsx(Jv,{children:m.jsxs(Er,{modules:[bi,ki],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[m.jsx(ze,{children:m.jsx(hi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(ze,{children:m.jsx(hi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(ze,{children:m.jsx(hi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(ze,{children:m.jsx(hi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(ze,{children:m.jsx(hi,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})})]})})]})}),t1=ee.div`
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
`,n1=()=>m.jsx(t1,{children:m.jsxs(Er,{modules:[bi,us,ki],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(ze,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})}),r1=ee.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,i1=ee.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`,o1=ee.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`,s1=ee.div`
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
`,l1=ee.div`
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
`,a1=ee.div`
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
`,xa=({promoBold:i,promo:n,valor:o,servico:l,listItems:u=[]})=>m.jsxs(r1,{children:[m.jsx(i1,{}),m.jsxs(o1,{children:[m.jsx(s1,{children:m.jsxs("h4",{children:[m.jsx("b",{children:i})," ",n]})}),m.jsxs(l1,{children:[m.jsx("h1",{children:l}),m.jsxs("div",{children:[m.jsx("p",{children:"Economize agora"}),m.jsx("span",{children:o})]}),m.jsx(Vn,{})]})]}),m.jsx(a1,{children:m.jsx("ol",{children:u.map((c,p)=>m.jsx("li",{children:c},p))})})]}),u1=ee.section`
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
`,c1=ee.div`
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
`,d1=ee.div`
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

`,f1=()=>m.jsx(m.Fragment,{children:m.jsxs(u1,{children:[m.jsx(c1,{children:m.jsxs("h1",{children:["O que ",m.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),m.jsxs(d1,{children:[m.jsx("div",{children:m.jsx(xa,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"E-commerce",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(xa,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Landing Page",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(xa,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Institucional",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})})]})]})}),p1=ee.section`
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
`,m1=ee.div`
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
`,h1=ee.div`
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
`,g1=ee.div`
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
`,v1=()=>m.jsx(m.Fragment,{children:m.jsx(p1,{children:m.jsxs(m1,{children:[m.jsxs(h1,{children:[m.jsx("h1",{children:"Torne-se nosso parceiro"}),m.jsx("p",{children:"Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248919/whitePacerias_x9oj45.png"})]}),m.jsxs(g1,{children:[m.jsxs("ol",{children:[m.jsxs("li",{children:[m.jsx(L0,{}),"Descontos exclusivos"]}),m.jsxs("li",{children:[m.jsx(A0,{}),"Manutenção estendida"]}),m.jsxs("li",{children:[m.jsx(M0,{}),"Prioridade de entrega"]}),m.jsxs("li",{children:[m.jsx(O0,{}),"Feito para empresas"]})]}),m.jsx(ip,{})]})]})})}),y1=ee.div`
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
`,x1=ee.section`
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
`,w1=ee.section`
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
`,S1=ee.div`
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
`,k1=ee.div`
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
`,b1=()=>{const[i,n]=ye.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],l=[{title:"2Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"2Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"2Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"2Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],u=c=>{console.log(`Texto clicado: ${c}`),n(c)};return m.jsx(m.Fragment,{children:m.jsxs(x1,{children:[m.jsx(y1,{}),m.jsxs(w1,{children:[m.jsxs(S1,{children:[m.jsx("h1",{children:"Ficou com dúvidas?"}),m.jsx("p",{children:"Veja as perguntas mais recorrentes"})]}),m.jsxs(k1,{children:[m.jsx("div",{children:m.jsx(Oa,{items:o,onTextClick:u})}),m.jsx("div",{children:m.jsx(Oa,{items:l,onTextClick:u})})]}),m.jsx(Vn,{})]})]})})};function E1(i){return At({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function T1(i){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(i)}const C1=as`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,j1=ee.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,P1=ee.button`
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
`,z1=ee.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #35353520;
  backdrop-filter: blur(5px);
  border-radius: 15px 15px 0 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${C1} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--poppins);
`,_1=ee.button`
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
`,M1=ee.div`
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
`,O1=ee.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: ${i=>i.sent?"0":"8px"};
  margin-left: ${i=>i.sent?"8px":"0"};
`,L1=ee.div`
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
`,I1=ee.div`
  font-size: 10px;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: var(--font--poppins)!important;
`,N1=ee.div`
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
`,A1=ee.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--poppins)!important;
`,D1=ee.input`
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
`,R1=ee.button`
  padding: 8px 20px;
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: var(--font--poppins)!important;
  font-weight: 400;
`,F1=({footerRendered:i})=>{const[n,o]=ye.useState(!1),[l,u]=ye.useState(""),[c,p]=ye.useState([]),[g,f]=ye.useState(!1),[x,v]=ye.useState("Número inválido"),[y,k]=ye.useState(!1),[b,P]=ye.useState(!1),I="https://wa.link/dojlwi",B="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png";ye.useEffect(()=>{const _=setTimeout(()=>{o(!0),p([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},45e3);return()=>clearTimeout(_)},[]);const M=async()=>{if(l.trim()==="")return;const _={id:Date.now(),text:l,sent:!0};p(A=>[...A,_]);const N=l.trim();if(u(""),f(!0),!y&&x==="Número inválido"){setTimeout(()=>{f(!1),p(A=>[...A,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),k(!0)},1500);return}if(y&&x==="Número inválido"){const A=/^\d+$/.test(N),Q=A?N:"Número inválido";v(Q),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"userPhoneCaptured",phoneNumber:Q}),setTimeout(()=>{f(!1),p(G=>[...G,{id:Date.now(),text:A?m.jsxs("span",{children:["Muito obrigado, aumigo🐕!",m.jsx("br",{}),m.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{P(!0)},500),k(!1)},1500);return}f(!1)},T=_=>{_.key==="Enter"&&M()},S=()=>{o(!1)};return m.jsxs(j1,{children:[m.jsx(P1,{onClick:()=>window.open(I,"_blank"),id:"clickwpp",children:m.jsx(E1,{id:"clickwpp"})}),n&&m.jsxs(z1,{children:[m.jsx(_1,{onClick:S,children:m.jsx(T1,{})}),m.jsxs(M1,{children:[c.map(_=>m.jsxs(df,{sent:_.sent,children:[!_.sent&&m.jsx(O1,{src:B,alt:"Bot"}),m.jsxs(L1,{sent:_.sent,children:[!_.sent&&m.jsx(I1,{children:"aleph"}),m.jsx("div",{children:_.text})]})]},_.id)),g&&m.jsx(df,{children:m.jsx(N1,{})})]}),!b&&m.jsxs(A1,{children:[m.jsx(D1,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:l,onChange:_=>u(_.target.value),onKeyDown:T}),m.jsx(R1,{onClick:M,children:"Enviar"})]})]})]})},B1=ee.footer`
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
`,$1=()=>m.jsx(m.Fragment,{children:m.jsxs(B1,{children:[m.jsx("p",{children:"Todos os direitos reservados | desde 2024"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsxs("p",{children:["Desenvolvido por ",m.jsx("a",{href:"#",children:" Aleph "})]})]})}),V1=ee.div`
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
`,H1=ee.section`
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
`,G1=ee.section`
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
`,W1=ee.div`
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
`,q1=ee.div`
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
`,U1=()=>m.jsx(m.Fragment,{children:m.jsxs(H1,{children:[m.jsx(V1,{}),m.jsxs(G1,{children:[m.jsxs(W1,{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"}),m.jsxs("h1",{children:["Entre em ",m.jsx("b",{children:"contato"})," conosco"]}),m.jsx("p",{children:"Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados"}),m.jsxs("form",{id:"contactForm",children:[m.jsxs("label",{children:["Seu Nome",m.jsx("input",{type:"text",id:"name",placeholder:"Aleph Silva Ramos",required:!0})]}),m.jsxs("label",{children:["Seu e-mail",m.jsx("input",{type:"email",id:"email",placeholder:"aleph@gmail.com",required:!0})]}),m.jsxs("label",{children:["WhatsApp",m.jsx("input",{type:"tel",id:"tel",placeholder:"24981411940",required:!0})]}),m.jsx("button",{type:"submit",children:"Enviar e entrar em contato"}),m.jsx("span",{children:"*Usaremos essas informações apenas para fins de contato"})]})]}),m.jsx(q1,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png"})}),m.jsx($1,{})]})]})}),Y1=()=>m.jsxs(m.Fragment,{children:[m.jsx(p0,{}),m.jsx(k0,{}),m.jsx(xv,{}),m.jsx(ya,{}),m.jsx(jv,{}),m.jsx(Nv,{}),m.jsx(ya,{}),m.jsx(Wv,{}),m.jsx(e1,{}),m.jsx(n1,{}),m.jsx(f1,{}),m.jsx(v1,{}),m.jsx(ya,{}),m.jsx(b1,{}),m.jsx(U1,{}),m.jsx(F1,{})]});function X1(){return m.jsx(m.Fragment,{children:m.jsx(Y1,{})})}ah.createRoot(document.getElementById("root")).render(m.jsx(ye.StrictMode,{children:m.jsx(X1,{})}));
