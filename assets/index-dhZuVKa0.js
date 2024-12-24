(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function Um(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kl={exports:{}},ii={},Zl={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function qm(){if(_d)return me;_d=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function C(P){return P===null||typeof P!="object"?null:(P=w&&P[w]||P["@@iterator"],typeof P=="function"?P:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,N={};function F(P,R,ce){this.props=P,this.context=R,this.refs=N,this.updater=ce||j}F.prototype.isReactComponent={},F.prototype.setState=function(P,R){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,R,"setState")},F.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function b(){}b.prototype=F.prototype;function k(P,R,ce){this.props=P,this.context=R,this.refs=N,this.updater=ce||j}var x=k.prototype=new b;x.constructor=k,I(x,F.prototype),x.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,D={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function Q(P,R,ce){var de,he={},pe=null,ke=null;if(R!=null)for(de in R.ref!==void 0&&(ke=R.ref),R.key!==void 0&&(pe=""+R.key),R)O.call(R,de)&&!q.hasOwnProperty(de)&&(he[de]=R[de]);var ve=arguments.length-2;if(ve===1)he.children=ce;else if(1<ve){for(var we=Array(ve),Ue=0;Ue<ve;Ue++)we[Ue]=arguments[Ue+2];he.children=we}if(P&&P.defaultProps)for(de in ve=P.defaultProps,ve)he[de]===void 0&&(he[de]=ve[de]);return{$$typeof:i,type:P,key:pe,ref:ke,props:he,_owner:D.current}}function V(P,R){return{$$typeof:i,type:P.type,key:R,ref:P.ref,props:P.props,_owner:P._owner}}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function K(P){var R={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return R[ce]})}var ee=/\/+/g;function X(P,R){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):R.toString(36)}function ie(P,R,ce,de,he){var pe=typeof P;(pe==="undefined"||pe==="boolean")&&(P=null);var ke=!1;if(P===null)ke=!0;else switch(pe){case"string":case"number":ke=!0;break;case"object":switch(P.$$typeof){case i:case n:ke=!0}}if(ke)return ke=P,he=he(ke),P=de===""?"."+X(ke,0):de,L(he)?(ce="",P!=null&&(ce=P.replace(ee,"$&/")+"/"),ie(he,R,ce,"",function(Ue){return Ue})):he!=null&&(G(he)&&(he=V(he,ce+(!he.key||ke&&ke.key===he.key?"":(""+he.key).replace(ee,"$&/")+"/")+P)),R.push(he)),1;if(ke=0,de=de===""?".":de+":",L(P))for(var ve=0;ve<P.length;ve++){pe=P[ve];var we=de+X(pe,ve);ke+=ie(pe,R,ce,we,he)}else if(we=C(P),typeof we=="function")for(P=we.call(P),ve=0;!(pe=P.next()).done;)pe=pe.value,we=de+X(pe,ve++),ke+=ie(pe,R,ce,we,he);else if(pe==="object")throw R=String(P),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ke}function ae(P,R,ce){if(P==null)return P;var de=[],he=0;return ie(P,de,"","",function(pe){return R.call(ce,pe,he++)}),de}function ge(P){if(P._status===-1){var R=P._result;R=R(),R.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=R)}if(P._status===1)return P._result.default;throw P._result}var xe={current:null},A={transition:null},Y={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:A,ReactCurrentOwner:D};function W(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:ae,forEach:function(P,R,ce){ae(P,function(){R.apply(this,arguments)},ce)},count:function(P){var R=0;return ae(P,function(){R++}),R},toArray:function(P){return ae(P,function(R){return R})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},me.Component=F,me.Fragment=o,me.Profiler=u,me.PureComponent=k,me.StrictMode=l,me.Suspense=f,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,me.act=W,me.cloneElement=function(P,R,ce){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var de=I({},P.props),he=P.key,pe=P.ref,ke=P._owner;if(R!=null){if(R.ref!==void 0&&(pe=R.ref,ke=D.current),R.key!==void 0&&(he=""+R.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(we in R)O.call(R,we)&&!q.hasOwnProperty(we)&&(de[we]=R[we]===void 0&&ve!==void 0?ve[we]:R[we])}var we=arguments.length-2;if(we===1)de.children=ce;else if(1<we){ve=Array(we);for(var Ue=0;Ue<we;Ue++)ve[Ue]=arguments[Ue+2];de.children=ve}return{$$typeof:i,type:P.type,key:he,ref:pe,props:de,_owner:ke}},me.createContext=function(P){return P={$$typeof:m,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:d,_context:P},P.Consumer=P},me.createElement=Q,me.createFactory=function(P){var R=Q.bind(null,P);return R.type=P,R},me.createRef=function(){return{current:null}},me.forwardRef=function(P){return{$$typeof:h,render:P}},me.isValidElement=G,me.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ge}},me.memo=function(P,R){return{$$typeof:S,type:P,compare:R===void 0?null:R}},me.startTransition=function(P){var R=A.transition;A.transition={};try{P()}finally{A.transition=R}},me.unstable_act=W,me.useCallback=function(P,R){return xe.current.useCallback(P,R)},me.useContext=function(P){return xe.current.useContext(P)},me.useDebugValue=function(){},me.useDeferredValue=function(P){return xe.current.useDeferredValue(P)},me.useEffect=function(P,R){return xe.current.useEffect(P,R)},me.useId=function(){return xe.current.useId()},me.useImperativeHandle=function(P,R,ce){return xe.current.useImperativeHandle(P,R,ce)},me.useInsertionEffect=function(P,R){return xe.current.useInsertionEffect(P,R)},me.useLayoutEffect=function(P,R){return xe.current.useLayoutEffect(P,R)},me.useMemo=function(P,R){return xe.current.useMemo(P,R)},me.useReducer=function(P,R,ce){return xe.current.useReducer(P,R,ce)},me.useRef=function(P){return xe.current.useRef(P)},me.useState=function(P){return xe.current.useState(P)},me.useSyncExternalStore=function(P,R,ce){return xe.current.useSyncExternalStore(P,R,ce)},me.useTransition=function(){return xe.current.useTransition()},me.version="18.3.1",me}var zd;function ja(){return zd||(zd=1,Zl.exports=qm()),Zl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Ym(){if(bd)return ii;bd=1;var i=ja(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(h,f,S){var v,w={},C=null,j=null;S!==void 0&&(C=""+S),f.key!==void 0&&(C=""+f.key),f.ref!==void 0&&(j=f.ref);for(v in f)l.call(f,v)&&!d.hasOwnProperty(v)&&(w[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:n,type:h,key:C,ref:j,props:w,_owner:u.current}}return ii.Fragment=o,ii.jsx=m,ii.jsxs=m,ii}var Md;function Xm(){return Md||(Md=1,Kl.exports=Ym()),Kl.exports}var g=Xm(),Ee=ja();const Te=Um(Ee);var zo={},Jl={exports:{}},st={},ea={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Qm(){return Id||(Id=1,function(i){function n(A,Y){var W=A.length;A.push(Y);e:for(;0<W;){var P=W-1>>>1,R=A[P];if(0<u(R,Y))A[P]=Y,A[W]=R,W=P;else break e}}function o(A){return A.length===0?null:A[0]}function l(A){if(A.length===0)return null;var Y=A[0],W=A.pop();if(W!==Y){A[0]=W;e:for(var P=0,R=A.length,ce=R>>>1;P<ce;){var de=2*(P+1)-1,he=A[de],pe=de+1,ke=A[pe];if(0>u(he,W))pe<R&&0>u(ke,he)?(A[P]=ke,A[pe]=W,P=pe):(A[P]=he,A[de]=W,P=de);else if(pe<R&&0>u(ke,W))A[P]=ke,A[pe]=W,P=pe;else break e}}return Y}function u(A,Y){var W=A.sortIndex-Y.sortIndex;return W!==0?W:A.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var m=Date,h=m.now();i.unstable_now=function(){return m.now()-h}}var f=[],S=[],v=1,w=null,C=3,j=!1,I=!1,N=!1,F=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(A){for(var Y=o(S);Y!==null;){if(Y.callback===null)l(S);else if(Y.startTime<=A)l(S),Y.sortIndex=Y.expirationTime,n(f,Y);else break;Y=o(S)}}function L(A){if(N=!1,x(A),!I)if(o(f)!==null)I=!0,ge(O);else{var Y=o(S);Y!==null&&xe(L,Y.startTime-A)}}function O(A,Y){I=!1,N&&(N=!1,b(Q),Q=-1),j=!0;var W=C;try{for(x(Y),w=o(f);w!==null&&(!(w.expirationTime>Y)||A&&!K());){var P=w.callback;if(typeof P=="function"){w.callback=null,C=w.priorityLevel;var R=P(w.expirationTime<=Y);Y=i.unstable_now(),typeof R=="function"?w.callback=R:w===o(f)&&l(f),x(Y)}else l(f);w=o(f)}if(w!==null)var ce=!0;else{var de=o(S);de!==null&&xe(L,de.startTime-Y),ce=!1}return ce}finally{w=null,C=W,j=!1}}var D=!1,q=null,Q=-1,V=5,G=-1;function K(){return!(i.unstable_now()-G<V)}function ee(){if(q!==null){var A=i.unstable_now();G=A;var Y=!0;try{Y=q(!0,A)}finally{Y?X():(D=!1,q=null)}}else D=!1}var X;if(typeof k=="function")X=function(){k(ee)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ee,X=function(){ae.postMessage(null)}}else X=function(){F(ee,0)};function ge(A){q=A,D||(D=!0,X())}function xe(A,Y){Q=F(function(){A(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(A){A.callback=null},i.unstable_continueExecution=function(){I||j||(I=!0,ge(O))},i.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<A?Math.floor(1e3/A):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(A){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var W=C;C=Y;try{return A()}finally{C=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(A,Y){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=C;C=A;try{return Y()}finally{C=W}},i.unstable_scheduleCallback=function(A,Y,W){var P=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?P+W:P):W=P,A){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=W+R,A={id:v++,callback:Y,priorityLevel:A,startTime:W,expirationTime:R,sortIndex:-1},W>P?(A.sortIndex=W,n(S,A),o(f)===null&&A===o(S)&&(N?(b(Q),Q=-1):N=!0,xe(L,W-P))):(A.sortIndex=R,n(f,A),I||j||(I=!0,ge(O))),A},i.unstable_shouldYield=K,i.unstable_wrapCallback=function(A){var Y=C;return function(){var W=C;C=Y;try{return A.apply(this,arguments)}finally{C=W}}}}(ta)),ta}var Ld;function Km(){return Ld||(Ld=1,ea.exports=Qm()),ea.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Zm(){if(Od)return st;Od=1;var i=ja(),n=Km();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function C(e){return f.call(w,e)?!0:f.call(v,e)?!1:S.test(e)?w[e]=!0:(v[e]=!0,!1)}function j(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,s){if(t===null||typeof t>"u"||j(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,r,s,a,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function k(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(b,k);F[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(b,k);F[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(b,k);F[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function x(e,t,r,s){var a=F.hasOwnProperty(t)?F[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,a,s)&&(r=null),s||a===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),D=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),K=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),A=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,P;function R(e){if(P===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var ce=!1;function de(e,t){if(!e||ce)return"";ce=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var s=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){s=M}e.call(t.prototype)}else{try{throw Error()}catch(M){s=M}e()}}catch(M){if(M&&s&&typeof M.stack=="string"){for(var a=M.stack.split(`
`),c=s.stack.split(`
`),p=a.length-1,y=c.length-1;1<=p&&0<=y&&a[p]!==c[y];)y--;for(;1<=p&&0<=y;p--,y--)if(a[p]!==c[y]){if(p!==1||y!==1)do if(p--,y--,0>y||a[p]!==c[y]){var E=`
`+a[p].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=p&&0<=y);break}}}finally{ce=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function he(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case D:return"Portal";case V:return"Profiler";case Q:return"StrictMode";case X:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function At(e){e._valueTracker||(e._valueTracker=Ue(e))}function Et(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=we(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function is(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Na(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ve(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ra(e,t){t=t.checked,t!=null&&x(e,"checked",t,!1)}function os(e,t){Ra(e,t);var r=ve(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,r):t.hasOwnProperty("defaultValue")&&ss(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ss(e,t,r){(t!=="number"||xi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var xr=Array.isArray;function Dn(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ve(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Aa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(xr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ve(r)}}function Fa(e,t){var r=ve(t.value),s=ve(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $a(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$a(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wi,Va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wi=wi||document.createElement("div"),wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kf=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Kf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Ga(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Ha(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Ga(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Zf=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(Zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ds=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,An=null,Fn=null;function Wa(e){if(e=Gr(e)){if(typeof ps!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Gi(t),ps(e.stateNode,e.type,t))}}function Ua(e){An?Fn?Fn.push(e):Fn=[e]:An=e}function qa(){if(An){var e=An,t=Fn;if(Fn=An=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function Ya(e,t){return e(t)}function Xa(){}var ms=!1;function Qa(e,t,r){if(ms)return e(t,r);ms=!0;try{return Ya(e,t,r)}finally{ms=!1,(An!==null||Fn!==null)&&(Xa(),qa())}}function Er(e,t){var r=e.stateNode;if(r===null)return null;var s=Gi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var hs=!1;if(h)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{hs=!1}function Jf(e,t,r,s,a,c,p,y,E){var M=Array.prototype.slice.call(arguments,3);try{t.apply(r,M)}catch($){this.onError($)}}var Tr=!1,Si=null,Ei=!1,gs=null,ep={onError:function(e){Tr=!0,Si=e}};function tp(e,t,r,s,a,c,p,y,E){Tr=!1,Si=null,Jf.apply(ep,arguments)}function np(e,t,r,s,a,c,p,y,E){if(tp.apply(this,arguments),Tr){if(Tr){var M=Si;Tr=!1,Si=null}else throw Error(o(198));Ei||(Ei=!0,gs=M)}}function xn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ka(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Za(e){if(xn(e)!==e)throw Error(o(188))}function rp(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var c=a.alternate;if(c===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===r)return Za(a),e;if(c===s)return Za(a),t;c=c.sibling}throw Error(o(188))}if(r.return!==s.return)r=a,s=c;else{for(var p=!1,y=a.child;y;){if(y===r){p=!0,r=a,s=c;break}if(y===s){p=!0,s=a,r=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===r){p=!0,r=c,s=a;break}if(y===s){p=!0,s=c,r=a;break}y=y.sibling}if(!p)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function Ja(e){return e=rp(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=n.unstable_scheduleCallback,nu=n.unstable_cancelCallback,ip=n.unstable_shouldYield,op=n.unstable_requestPaint,Re=n.unstable_now,sp=n.unstable_getCurrentPriorityLevel,vs=n.unstable_ImmediatePriority,ru=n.unstable_UserBlockingPriority,ki=n.unstable_NormalPriority,lp=n.unstable_LowPriority,iu=n.unstable_IdlePriority,Ti=null,Mt=null;function ap(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:dp,up=Math.log,cp=Math.LN2;function dp(e){return e>>>=0,e===0?32:31-(up(e)/cp|0)|0}var Ci=64,Pi=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,c=e.pingedLanes,p=r&268435455;if(p!==0){var y=p&~a;y!==0?s=Cr(y):(c&=p,c!==0&&(s=Cr(c)))}else p=r&~a,p!==0?s=Cr(p):c!==0&&(s=Cr(c));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-kt(t),a=1<<r,s|=e[r],t&=~a;return s}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-kt(c),y=1<<p,E=a[p];E===-1?(!(y&r)||y&s)&&(a[p]=fp(y,t)):E<=t&&(e.expiredLanes|=y),c&=~y}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function xs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Pr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function mp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-kt(r),c=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~c}}function ws(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-kt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Pe=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,Ss,au,uu,cu,Es=!1,_i=[],Kt=null,Zt=null,Jt=null,jr=new Map,_r=new Map,en=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function zr(e,t,r,s,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:c,targetContainers:[a]},t!==null&&(t=Gr(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function gp(e,t,r,s,a){switch(t){case"focusin":return Kt=zr(Kt,e,t,r,s,a),!0;case"dragenter":return Zt=zr(Zt,e,t,r,s,a),!0;case"mouseover":return Jt=zr(Jt,e,t,r,s,a),!0;case"pointerover":var c=a.pointerId;return jr.set(c,zr(jr.get(c)||null,e,t,r,s,a)),!0;case"gotpointercapture":return c=a.pointerId,_r.set(c,zr(_r.get(c)||null,e,t,r,s,a)),!0}return!1}function fu(e){var t=wn(e.target);if(t!==null){var r=xn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ka(r),t!==null){e.blockedOn=t,cu(e.priority,function(){au(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ds=s,r.target.dispatchEvent(s),ds=null}else return t=Gr(r),t!==null&&Ss(t),e.blockedOn=r,!1;t.shift()}return!0}function pu(e,t,r){zi(e)&&r.delete(t)}function vp(){Es=!1,Kt!==null&&zi(Kt)&&(Kt=null),Zt!==null&&zi(Zt)&&(Zt=null),Jt!==null&&zi(Jt)&&(Jt=null),jr.forEach(pu),_r.forEach(pu)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vp)))}function Mr(e){function t(a){return br(a,e)}if(0<_i.length){br(_i[0],e);for(var r=1;r<_i.length;r++){var s=_i[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Kt!==null&&br(Kt,e),Zt!==null&&br(Zt,e),Jt!==null&&br(Jt,e),jr.forEach(t),_r.forEach(t),r=0;r<en.length;r++)s=en[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<en.length&&(r=en[0],r.blockedOn===null);)fu(r),r.blockedOn===null&&en.shift()}var Bn=L.ReactCurrentBatchConfig,bi=!0;function yp(e,t,r,s){var a=Pe,c=Bn.transition;Bn.transition=null;try{Pe=1,ks(e,t,r,s)}finally{Pe=a,Bn.transition=c}}function xp(e,t,r,s){var a=Pe,c=Bn.transition;Bn.transition=null;try{Pe=4,ks(e,t,r,s)}finally{Pe=a,Bn.transition=c}}function ks(e,t,r,s){if(bi){var a=Ts(e,t,r,s);if(a===null)$s(e,t,s,Mi,r),du(e,s);else if(gp(a,e,t,r,s))s.stopPropagation();else if(du(e,s),t&4&&-1<hp.indexOf(e)){for(;a!==null;){var c=Gr(a);if(c!==null&&lu(c),c=Ts(e,t,r,s),c===null&&$s(e,t,s,Mi,r),c===a)break;a=c}a!==null&&s.stopPropagation()}else $s(e,t,s,null,r)}}var Mi=null;function Ts(e,t,r,s){if(Mi=null,e=fs(s),e=wn(e),e!==null)if(t=xn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ka(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case vs:return 1;case ru:return 4;case ki:case lp:return 16;case iu:return 536870912;default:return 16}default:return 16}}var tn=null,Cs=null,Ii=null;function hu(){if(Ii)return Ii;var e,t=Cs,r=t.length,s,a="value"in tn?tn.value:tn.textContent,c=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(s=1;s<=p&&t[r-s]===a[c-s];s++);return Ii=a.slice(e,1<s?1-s:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function gu(){return!1}function at(e){function t(r,s,a,c,p){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Oi:gu,this.isPropagationStopped=gu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=at($n),Ir=W({},$n,{view:0,detail:0}),wp=at(Ir),js,_s,Lr,Ni=W({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(js=e.screenX-Lr.screenX,_s=e.screenY-Lr.screenY):_s=js=0,Lr=e),js)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),vu=at(Ni),Sp=W({},Ni,{dataTransfer:0}),Ep=at(Sp),kp=W({},Ir,{relatedTarget:0}),zs=at(kp),Tp=W({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=at(Tp),Pp=W({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jp=at(Pp),_p=W({},$n,{data:0}),yu=at(_p),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function bs(){return Ip}var Lp=W({},Ir,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=at(Lp),Np=W({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=at(Np),Rp=W({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Dp=at(Rp),Ap=W({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=at(Ap),Bp=W({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=at(Bp),Vp=[9,13,27,32],Ms=h&&"CompositionEvent"in window,Or=null;h&&"documentMode"in document&&(Or=document.documentMode);var Gp=h&&"TextEvent"in window&&!Or,wu=h&&(!Ms||Or&&8<Or&&11>=Or),Su=" ",Eu=!1;function ku(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Hp(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Eu=!0,Su);case"textInput":return e=t.data,e===Su&&Eu?null:e;default:return null}}function Wp(e,t){if(Vn)return e==="compositionend"||!Ms&&ku(e,t)?(e=hu(),Ii=Cs=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Up[e.type]:t==="textarea"}function Pu(e,t,r,s){Ua(s),t=Bi(t,"onChange"),0<t.length&&(r=new Ps("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Nr=null,Rr=null;function qp(e){Hu(e,0)}function Ri(e){var t=qn(e);if(Et(t))return e}function Yp(e,t){if(e==="change")return t}var ju=!1;if(h){var Is;if(h){var Ls="oninput"in document;if(!Ls){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Ls=typeof _u.oninput=="function"}Is=Ls}else Is=!1;ju=Is&&(!document.documentMode||9<document.documentMode)}function zu(){Nr&&(Nr.detachEvent("onpropertychange",bu),Rr=Nr=null)}function bu(e){if(e.propertyName==="value"&&Ri(Rr)){var t=[];Pu(t,Rr,e,fs(e)),Qa(qp,t)}}function Xp(e,t,r){e==="focusin"?(zu(),Nr=t,Rr=r,Nr.attachEvent("onpropertychange",bu)):e==="focusout"&&zu()}function Qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Rr)}function Kp(e,t){if(e==="click")return Ri(t)}function Zp(e,t){if(e==="input"||e==="change")return Ri(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Jp;function Dr(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!f.call(t,a)||!Tt(e[a],t[a]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var r=Mu(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mu(r)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=xi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=xi(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function em(e){var t=Ou(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Lu(r.ownerDocument.documentElement,r)){if(s!==null&&Os(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,c=Math.min(s.start,a);s=s.end===void 0?c:Math.min(s.end,a),!e.extend&&c>s&&(a=s,s=c,c=a),a=Iu(r,c);var p=Iu(r,s);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tm=h&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ns=null,Ar=null,Rs=!1;function Nu(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Rs||Gn==null||Gn!==xi(s)||(s=Gn,"selectionStart"in s&&Os(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ar&&Dr(Ar,s)||(Ar=s,s=Bi(Ns,"onSelect"),0<s.length&&(t=new Ps("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Gn)))}function Di(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Hn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Ds={},Ru={};h&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Ai(e){if(Ds[e])return Ds[e];if(!Hn[e])return e;var t=Hn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ru)return Ds[e]=t[r];return e}var Du=Ai("animationend"),Au=Ai("animationiteration"),Fu=Ai("animationstart"),Bu=Ai("transitionend"),$u=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){$u.set(e,t),d(t,[e])}for(var As=0;As<Vu.length;As++){var Fs=Vu[As],nm=Fs.toLowerCase(),rm=Fs[0].toUpperCase()+Fs.slice(1);nn(nm,"on"+rm)}nn(Du,"onAnimationEnd"),nn(Au,"onAnimationIteration"),nn(Fu,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(Bu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Gu(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,np(s,t,void 0,e),e.currentTarget=null}function Hu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var p=s.length-1;0<=p;p--){var y=s[p],E=y.instance,M=y.currentTarget;if(y=y.listener,E!==c&&a.isPropagationStopped())break e;Gu(a,y,M),c=E}else for(p=0;p<s.length;p++){if(y=s[p],E=y.instance,M=y.currentTarget,y=y.listener,E!==c&&a.isPropagationStopped())break e;Gu(a,y,M),c=E}}}if(Ei)throw e=gs,Ei=!1,gs=null,e}function _e(e,t){var r=t[qs];r===void 0&&(r=t[qs]=new Set);var s=e+"__bubble";r.has(s)||(Wu(t,e,2,!1),r.add(s))}function Bs(e,t,r){var s=0;t&&(s|=4),Wu(r,e,s,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Fi]){e[Fi]=!0,l.forEach(function(r){r!=="selectionchange"&&(im.has(r)||Bs(r,!1,e),Bs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,Bs("selectionchange",!1,t))}}function Wu(e,t,r,s){switch(mu(t)){case 1:var a=yp;break;case 4:a=xp;break;default:a=ks}r=a.bind(null,t,r,e),a=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function $s(e,t,r,s,a){var c=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var y=s.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(p===4)for(p=s.return;p!==null;){var E=p.tag;if((E===3||E===4)&&(E=p.stateNode.containerInfo,E===a||E.nodeType===8&&E.parentNode===a))return;p=p.return}for(;y!==null;){if(p=wn(y),p===null)return;if(E=p.tag,E===5||E===6){s=c=p;continue e}y=y.parentNode}}s=s.return}Qa(function(){var M=c,$=fs(r),H=[];e:{var B=$u.get(e);if(B!==void 0){var Z=Ps,te=e;switch(e){case"keypress":if(Li(r)===0)break e;case"keydown":case"keyup":Z=Op;break;case"focusin":te="focus",Z=zs;break;case"focusout":te="blur",Z=zs;break;case"beforeblur":case"afterblur":Z=zs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Dp;break;case Du:case Au:case Fu:Z=Cp;break;case Bu:Z=Fp;break;case"scroll":Z=wp;break;case"wheel":Z=$p;break;case"copy":case"cut":case"paste":Z=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=xu}var ne=(t&4)!==0,De=!ne&&e==="scroll",_=ne?B!==null?B+"Capture":null:B;ne=[];for(var T=M,z;T!==null;){z=T;var U=z.stateNode;if(z.tag===5&&U!==null&&(z=U,_!==null&&(U=Er(T,_),U!=null&&ne.push($r(T,U,z)))),De)break;T=T.return}0<ne.length&&(B=new Z(B,te,null,r,$),H.push({event:B,listeners:ne}))}}if(!(t&7)){e:{if(B=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",B&&r!==ds&&(te=r.relatedTarget||r.fromElement)&&(wn(te)||te[Ft]))break e;if((Z||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(te=r.relatedTarget||r.toElement,Z=M,te=te?wn(te):null,te!==null&&(De=xn(te),te!==De||te.tag!==5&&te.tag!==6)&&(te=null)):(Z=null,te=M),Z!==te)){if(ne=vu,U="onMouseLeave",_="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ne=xu,U="onPointerLeave",_="onPointerEnter",T="pointer"),De=Z==null?B:qn(Z),z=te==null?B:qn(te),B=new ne(U,T+"leave",Z,r,$),B.target=De,B.relatedTarget=z,U=null,wn($)===M&&(ne=new ne(_,T+"enter",te,r,$),ne.target=z,ne.relatedTarget=De,U=ne),De=U,Z&&te)t:{for(ne=Z,_=te,T=0,z=ne;z;z=Wn(z))T++;for(z=0,U=_;U;U=Wn(U))z++;for(;0<T-z;)ne=Wn(ne),T--;for(;0<z-T;)_=Wn(_),z--;for(;T--;){if(ne===_||_!==null&&ne===_.alternate)break t;ne=Wn(ne),_=Wn(_)}ne=null}else ne=null;Z!==null&&Uu(H,B,Z,ne,!1),te!==null&&De!==null&&Uu(H,De,te,ne,!0)}}e:{if(B=M?qn(M):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var re=Yp;else if(Cu(B))if(ju)re=Zp;else{re=Qp;var se=Xp}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(re=Kp);if(re&&(re=re(e,M))){Pu(H,re,r,$);break e}se&&se(e,B,M),e==="focusout"&&(se=B._wrapperState)&&se.controlled&&B.type==="number"&&ss(B,"number",B.value)}switch(se=M?qn(M):window,e){case"focusin":(Cu(se)||se.contentEditable==="true")&&(Gn=se,Ns=M,Ar=null);break;case"focusout":Ar=Ns=Gn=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,Nu(H,r,$);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Nu(H,r,$)}var le;if(Ms)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Vn?ku(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(wu&&r.locale!=="ko"&&(Vn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Vn&&(le=hu()):(tn=$,Cs="value"in tn?tn.value:tn.textContent,Vn=!0)),se=Bi(M,ue),0<se.length&&(ue=new yu(ue,e,null,r,$),H.push({event:ue,listeners:se}),le?ue.data=le:(le=Tu(r),le!==null&&(ue.data=le)))),(le=Gp?Hp(e,r):Wp(e,r))&&(M=Bi(M,"onBeforeInput"),0<M.length&&($=new yu("onBeforeInput","beforeinput",null,r,$),H.push({event:$,listeners:M}),$.data=le))}Hu(H,t)})}function $r(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Bi(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Er(e,r),c!=null&&s.unshift($r(e,c,a)),c=Er(e,t),c!=null&&s.push($r(e,c,a))),e=e.return}return s}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,t,r,s,a){for(var c=t._reactName,p=[];r!==null&&r!==s;){var y=r,E=y.alternate,M=y.stateNode;if(E!==null&&E===s)break;y.tag===5&&M!==null&&(y=M,a?(E=Er(r,c),E!=null&&p.unshift($r(r,E,y))):a||(E=Er(r,c),E!=null&&p.push($r(r,E,y)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var om=/\r\n?/g,sm=/\u0000|\uFFFD/g;function qu(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(sm,"")}function $i(e,t,r){if(t=qu(t),qu(e)!==t&&r)throw Error(o(425))}function Vi(){}var Vs=null,Gs=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ws=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(um)}:Ws;function um(e){setTimeout(function(){throw e})}function Us(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Mr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Mr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),It="__reactFiber$"+Un,Vr="__reactProps$"+Un,Ft="__reactContainer$"+Un,qs="__reactEvents$"+Un,cm="__reactListeners$"+Un,dm="__reactHandles$"+Un;function wn(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ft]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Xu(e);e!==null;){if(r=e[It])return r;e=Xu(e)}return t}e=r,r=e.parentNode}return null}function Gr(e){return e=e[It]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Gi(e){return e[Vr]||null}var Ys=[],Yn=-1;function on(e){return{current:e}}function ze(e){0>Yn||(e.current=Ys[Yn],Ys[Yn]=null,Yn--)}function je(e,t){Yn++,Ys[Yn]=e.current,e.current=t}var sn={},Xe=on(sn),tt=on(!1),Sn=sn;function Xn(e,t){var r=e.type.contextTypes;if(!r)return sn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in r)a[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function nt(e){return e=e.childContextTypes,e!=null}function Hi(){ze(tt),ze(Xe)}function Qu(e,t,r){if(Xe.current!==sn)throw Error(o(168));je(Xe,t),je(tt,r)}function Ku(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(o(108,ke(e)||"Unknown",a));return W({},r,s)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=Xe.current,je(Xe,e),je(tt,tt.current),!0}function Zu(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=Ku(e,t,Sn),s.__reactInternalMemoizedMergedChildContext=e,ze(tt),ze(Xe),je(Xe,e)):ze(tt),je(tt,r)}var Bt=null,Ui=!1,Xs=!1;function Ju(e){Bt===null?Bt=[e]:Bt.push(e)}function fm(e){Ui=!0,Ju(e)}function ln(){if(!Xs&&Bt!==null){Xs=!0;var e=0,t=Pe;try{var r=Bt;for(Pe=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Bt=null,Ui=!1}catch(a){throw Bt!==null&&(Bt=Bt.slice(e+1)),tu(vs,ln),a}finally{Pe=t,Xs=!1}}return null}var Qn=[],Kn=0,qi=null,Yi=0,ht=[],gt=0,En=null,$t=1,Vt="";function kn(e,t){Qn[Kn++]=Yi,Qn[Kn++]=qi,qi=e,Yi=t}function ec(e,t,r){ht[gt++]=$t,ht[gt++]=Vt,ht[gt++]=En,En=e;var s=$t;e=Vt;var a=32-kt(s)-1;s&=~(1<<a),r+=1;var c=32-kt(t)+a;if(30<c){var p=a-a%5;c=(s&(1<<p)-1).toString(32),s>>=p,a-=p,$t=1<<32-kt(t)+a|r<<a|s,Vt=c+e}else $t=1<<c|r<<a|s,Vt=e}function Qs(e){e.return!==null&&(kn(e,1),ec(e,1,0))}function Ks(e){for(;e===qi;)qi=Qn[--Kn],Qn[Kn]=null,Yi=Qn[--Kn],Qn[Kn]=null;for(;e===En;)En=ht[--gt],ht[gt]=null,Vt=ht[--gt],ht[gt]=null,$t=ht[--gt],ht[gt]=null}var ut=null,ct=null,Me=!1,Ct=null;function tc(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function nc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=En!==null?{id:$t,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ut=e,ct=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(Me){var t=ct;if(t){var r=t;if(!nc(e,t)){if(Zs(e))throw Error(o(418));t=rn(r.nextSibling);var s=ut;t&&nc(e,t)?tc(s,r):(e.flags=e.flags&-4097|2,Me=!1,ut=e)}}else{if(Zs(e))throw Error(o(418));e.flags=e.flags&-4097|2,Me=!1,ut=e}}}function rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Xi(e){if(e!==ut)return!1;if(!Me)return rc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=ct)){if(Zs(e))throw ic(),Error(o(418));for(;t;)tc(e,t),t=rn(t.nextSibling)}if(rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ct=rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?rn(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=ct;e;)e=rn(e.nextSibling)}function Zn(){ct=ut=null,Me=!1}function el(e){Ct===null?Ct=[e]:Ct.push(e)}var pm=L.ReactCurrentBatchConfig;function Hr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var a=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var y=a.refs;p===null?delete y[c]:y[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function sc(e){function t(_,T){if(e){var z=_.deletions;z===null?(_.deletions=[T],_.flags|=16):z.push(T)}}function r(_,T){if(!e)return null;for(;T!==null;)t(_,T),T=T.sibling;return null}function s(_,T){for(_=new Map;T!==null;)T.key!==null?_.set(T.key,T):_.set(T.index,T),T=T.sibling;return _}function a(_,T){return _=hn(_,T),_.index=0,_.sibling=null,_}function c(_,T,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<T?(_.flags|=2,T):z):(_.flags|=2,T)):(_.flags|=1048576,T)}function p(_){return e&&_.alternate===null&&(_.flags|=2),_}function y(_,T,z,U){return T===null||T.tag!==6?(T=Wl(z,_.mode,U),T.return=_,T):(T=a(T,z),T.return=_,T)}function E(_,T,z,U){var re=z.type;return re===q?$(_,T,z.props.children,U,z.key):T!==null&&(T.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ge&&oc(re)===T.type)?(U=a(T,z.props),U.ref=Hr(_,T,z),U.return=_,U):(U=So(z.type,z.key,z.props,null,_.mode,U),U.ref=Hr(_,T,z),U.return=_,U)}function M(_,T,z,U){return T===null||T.tag!==4||T.stateNode.containerInfo!==z.containerInfo||T.stateNode.implementation!==z.implementation?(T=Ul(z,_.mode,U),T.return=_,T):(T=a(T,z.children||[]),T.return=_,T)}function $(_,T,z,U,re){return T===null||T.tag!==7?(T=Mn(z,_.mode,U,re),T.return=_,T):(T=a(T,z),T.return=_,T)}function H(_,T,z){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Wl(""+T,_.mode,z),T.return=_,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return z=So(T.type,T.key,T.props,null,_.mode,z),z.ref=Hr(_,null,T),z.return=_,z;case D:return T=Ul(T,_.mode,z),T.return=_,T;case ge:var U=T._init;return H(_,U(T._payload),z)}if(xr(T)||Y(T))return T=Mn(T,_.mode,z,null),T.return=_,T;Qi(_,T)}return null}function B(_,T,z,U){var re=T!==null?T.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return re!==null?null:y(_,T,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case O:return z.key===re?E(_,T,z,U):null;case D:return z.key===re?M(_,T,z,U):null;case ge:return re=z._init,B(_,T,re(z._payload),U)}if(xr(z)||Y(z))return re!==null?null:$(_,T,z,U,null);Qi(_,z)}return null}function Z(_,T,z,U,re){if(typeof U=="string"&&U!==""||typeof U=="number")return _=_.get(z)||null,y(T,_,""+U,re);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case O:return _=_.get(U.key===null?z:U.key)||null,E(T,_,U,re);case D:return _=_.get(U.key===null?z:U.key)||null,M(T,_,U,re);case ge:var se=U._init;return Z(_,T,z,se(U._payload),re)}if(xr(U)||Y(U))return _=_.get(z)||null,$(T,_,U,re,null);Qi(T,U)}return null}function te(_,T,z,U){for(var re=null,se=null,le=T,ue=T=0,He=null;le!==null&&ue<z.length;ue++){le.index>ue?(He=le,le=null):He=le.sibling;var Se=B(_,le,z[ue],U);if(Se===null){le===null&&(le=He);break}e&&le&&Se.alternate===null&&t(_,le),T=c(Se,T,ue),se===null?re=Se:se.sibling=Se,se=Se,le=He}if(ue===z.length)return r(_,le),Me&&kn(_,ue),re;if(le===null){for(;ue<z.length;ue++)le=H(_,z[ue],U),le!==null&&(T=c(le,T,ue),se===null?re=le:se.sibling=le,se=le);return Me&&kn(_,ue),re}for(le=s(_,le);ue<z.length;ue++)He=Z(le,_,ue,z[ue],U),He!==null&&(e&&He.alternate!==null&&le.delete(He.key===null?ue:He.key),T=c(He,T,ue),se===null?re=He:se.sibling=He,se=He);return e&&le.forEach(function(gn){return t(_,gn)}),Me&&kn(_,ue),re}function ne(_,T,z,U){var re=Y(z);if(typeof re!="function")throw Error(o(150));if(z=re.call(z),z==null)throw Error(o(151));for(var se=re=null,le=T,ue=T=0,He=null,Se=z.next();le!==null&&!Se.done;ue++,Se=z.next()){le.index>ue?(He=le,le=null):He=le.sibling;var gn=B(_,le,Se.value,U);if(gn===null){le===null&&(le=He);break}e&&le&&gn.alternate===null&&t(_,le),T=c(gn,T,ue),se===null?re=gn:se.sibling=gn,se=gn,le=He}if(Se.done)return r(_,le),Me&&kn(_,ue),re;if(le===null){for(;!Se.done;ue++,Se=z.next())Se=H(_,Se.value,U),Se!==null&&(T=c(Se,T,ue),se===null?re=Se:se.sibling=Se,se=Se);return Me&&kn(_,ue),re}for(le=s(_,le);!Se.done;ue++,Se=z.next())Se=Z(le,_,ue,Se.value,U),Se!==null&&(e&&Se.alternate!==null&&le.delete(Se.key===null?ue:Se.key),T=c(Se,T,ue),se===null?re=Se:se.sibling=Se,se=Se);return e&&le.forEach(function(Wm){return t(_,Wm)}),Me&&kn(_,ue),re}function De(_,T,z,U){if(typeof z=="object"&&z!==null&&z.type===q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case O:e:{for(var re=z.key,se=T;se!==null;){if(se.key===re){if(re=z.type,re===q){if(se.tag===7){r(_,se.sibling),T=a(se,z.props.children),T.return=_,_=T;break e}}else if(se.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ge&&oc(re)===se.type){r(_,se.sibling),T=a(se,z.props),T.ref=Hr(_,se,z),T.return=_,_=T;break e}r(_,se);break}else t(_,se);se=se.sibling}z.type===q?(T=Mn(z.props.children,_.mode,U,z.key),T.return=_,_=T):(U=So(z.type,z.key,z.props,null,_.mode,U),U.ref=Hr(_,T,z),U.return=_,_=U)}return p(_);case D:e:{for(se=z.key;T!==null;){if(T.key===se)if(T.tag===4&&T.stateNode.containerInfo===z.containerInfo&&T.stateNode.implementation===z.implementation){r(_,T.sibling),T=a(T,z.children||[]),T.return=_,_=T;break e}else{r(_,T);break}else t(_,T);T=T.sibling}T=Ul(z,_.mode,U),T.return=_,_=T}return p(_);case ge:return se=z._init,De(_,T,se(z._payload),U)}if(xr(z))return te(_,T,z,U);if(Y(z))return ne(_,T,z,U);Qi(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,T!==null&&T.tag===6?(r(_,T.sibling),T=a(T,z),T.return=_,_=T):(r(_,T),T=Wl(z,_.mode,U),T.return=_,_=T),p(_)):r(_,T)}return De}var Jn=sc(!0),lc=sc(!1),Ki=on(null),Zi=null,er=null,tl=null;function nl(){tl=er=Zi=null}function rl(e){var t=Ki.current;ze(Ki),e._currentValue=t}function il(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function tr(e,t){Zi=e,tl=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(tl!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Zi===null)throw Error(o(308));er=e,Zi.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var Tn=null;function ol(e){Tn===null?Tn=[e]:Tn.push(e)}function ac(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,ol(t)):(r.next=a.next,a.next=r),t.interleaved=r,Gt(e,s)}function Gt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var an=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ye&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Gt(e,r)}return a=s.interleaved,a===null?(t.next=t,ol(s)):(t.next=a.next,a.next=t),s.interleaved=t,Gt(e,r)}function Ji(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ws(e,r)}}function cc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?a=c=p:c=c.next=p,r=r.next}while(r!==null);c===null?a=c=t:c=c.next=t}else a=c=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function eo(e,t,r,s){var a=e.updateQueue;an=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var E=y,M=E.next;E.next=null,p===null?c=M:p.next=M,p=E;var $=e.alternate;$!==null&&($=$.updateQueue,y=$.lastBaseUpdate,y!==p&&(y===null?$.firstBaseUpdate=M:y.next=M,$.lastBaseUpdate=E))}if(c!==null){var H=a.baseState;p=0,$=M=E=null,y=c;do{var B=y.lane,Z=y.eventTime;if((s&B)===B){$!==null&&($=$.next={eventTime:Z,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var te=e,ne=y;switch(B=t,Z=r,ne.tag){case 1:if(te=ne.payload,typeof te=="function"){H=te.call(Z,H,B);break e}H=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ne.payload,B=typeof te=="function"?te.call(Z,H,B):te,B==null)break e;H=W({},H,B);break e;case 2:an=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[y]:B.push(y))}else Z={eventTime:Z,lane:B,tag:y.tag,payload:y.payload,callback:y.callback,next:null},$===null?(M=$=Z,E=H):$=$.next=Z,p|=B;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;B=y,y=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if($===null&&(E=H),a.baseState=E,a.firstBaseUpdate=M,a.lastBaseUpdate=$,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);jn|=p,e.lanes=p,e.memoizedState=H}}function dc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(o(191,a));a.call(s)}}}var Wr={},Lt=on(Wr),Ur=on(Wr),qr=on(Wr);function Cn(e){if(e===Wr)throw Error(o(174));return e}function ll(e,t){switch(je(qr,t),je(Ur,e),je(Lt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}ze(Lt),je(Lt,t)}function nr(){ze(Lt),ze(Ur),ze(qr)}function fc(e){Cn(qr.current);var t=Cn(Lt.current),r=as(t,e.type);t!==r&&(je(Ur,e),je(Lt,r))}function al(e){Ur.current===e&&(ze(Lt),ze(Ur))}var Ie=on(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function cl(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var no=L.ReactCurrentDispatcher,dl=L.ReactCurrentBatchConfig,Pn=0,Le=null,Be=null,Ve=null,ro=!1,Yr=!1,Xr=0,mm=0;function Qe(){throw Error(o(321))}function fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Tt(e[r],t[r]))return!1;return!0}function pl(e,t,r,s,a,c){if(Pn=c,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?ym:xm,e=r(s,a),Yr){c=0;do{if(Yr=!1,Xr=0,25<=c)throw Error(o(301));c+=1,Ve=Be=null,t.updateQueue=null,no.current=wm,e=r(s,a)}while(Yr)}if(no.current=so,t=Be!==null&&Be.next!==null,Pn=0,Ve=Be=Le=null,ro=!1,t)throw Error(o(300));return e}function ml(){var e=Xr!==0;return Xr=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Le.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function yt(){if(Be===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ve===null?Le.memoizedState:Ve.next;if(t!==null)Ve=t,Be=e;else{if(e===null)throw Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ve===null?Le.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Qr(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=yt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Be,a=s.baseQueue,c=r.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}s.baseQueue=a=c,r.pending=null}if(a!==null){c=a.next,s=s.baseState;var y=p=null,E=null,M=c;do{var $=M.lane;if((Pn&$)===$)E!==null&&(E=E.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),s=M.hasEagerState?M.eagerState:e(s,M.action);else{var H={lane:$,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};E===null?(y=E=H,p=s):E=E.next=H,Le.lanes|=$,jn|=$}M=M.next}while(M!==null&&M!==c);E===null?p=s:E.next=y,Tt(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseState=p,t.baseQueue=E,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do c=a.lane,Le.lanes|=c,jn|=c,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function gl(e){var t=yt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,c=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);Tt(c,t.memoizedState)||(rt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,s]}function pc(){}function mc(e,t){var r=Le,s=yt(),a=t(),c=!Tt(s.memoizedState,a);if(c&&(s.memoizedState=a,rt=!0),s=s.queue,vl(vc.bind(null,r,s,e),[e]),s.getSnapshot!==t||c||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Kr(9,gc.bind(null,r,s,a,t),void 0,null),Ge===null)throw Error(o(349));Pn&30||hc(r,t,a)}return a}function hc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function gc(e,t,r,s){t.value=r,t.getSnapshot=s,yc(t)&&xc(e)}function vc(e,t,r){return r(function(){yc(t)&&xc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Tt(e,r)}catch{return!0}}function xc(e){var t=Gt(e,1);t!==null&&zt(t,e,1,-1)}function wc(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,Le,e),[t.memoizedState,e]}function Kr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Sc(){return yt().memoizedState}function io(e,t,r,s){var a=Ot();Le.flags|=e,a.memoizedState=Kr(1|t,r,void 0,s===void 0?null:s)}function oo(e,t,r,s){var a=yt();s=s===void 0?null:s;var c=void 0;if(Be!==null){var p=Be.memoizedState;if(c=p.destroy,s!==null&&fl(s,p.deps)){a.memoizedState=Kr(t,r,c,s);return}}Le.flags|=e,a.memoizedState=Kr(1|t,r,c,s)}function Ec(e,t){return io(8390656,8,e,t)}function vl(e,t){return oo(2048,8,e,t)}function kc(e,t){return oo(4,2,e,t)}function Tc(e,t){return oo(4,4,e,t)}function Cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,r){return r=r!=null?r.concat([e]):null,oo(4,4,Cc.bind(null,t,e),r)}function yl(){}function jc(e,t){var r=yt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&fl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function _c(e,t){var r=yt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&fl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function zc(e,t,r){return Pn&21?(Tt(r,t)||(r=ou(),Le.lanes|=r,jn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r)}function hm(e,t){var r=Pe;Pe=r!==0&&4>r?r:4,e(!0);var s=dl.transition;dl.transition={};try{e(!1),t()}finally{Pe=r,dl.transition=s}}function bc(){return yt().memoizedState}function gm(e,t,r){var s=pn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(e))Ic(t,r);else if(r=ac(e,t,r,s),r!==null){var a=et();zt(r,e,s,a),Lc(r,t,s)}}function vm(e,t,r){var s=pn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Ic(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,r);if(a.hasEagerState=!0,a.eagerState=y,Tt(y,p)){var E=t.interleaved;E===null?(a.next=a,ol(t)):(a.next=E.next,E.next=a),t.interleaved=a;return}}catch{}finally{}r=ac(e,t,a,s),r!==null&&(a=et(),zt(r,e,s,a),Lc(r,t,s))}}function Mc(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Ic(e,t){Yr=ro=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Lc(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ws(e,r)}}var so={readContext:vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},ym={readContext:vt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Ec,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,io(4194308,4,Cc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var r=Ot();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Ot();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=gm.bind(null,Le,e),[s.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:wc,useDebugValue:yl,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=wc(!1),t=e[0];return e=hm.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Le,a=Ot();if(Me){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ge===null)throw Error(o(349));Pn&30||hc(s,t,r)}a.memoizedState=r;var c={value:r,getSnapshot:t};return a.queue=c,Ec(vc.bind(null,s,c,e),[e]),s.flags|=2048,Kr(9,gc.bind(null,s,c,r,t),void 0,null),r},useId:function(){var e=Ot(),t=Ge.identifierPrefix;if(Me){var r=Vt,s=$t;r=(s&~(1<<32-kt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Xr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=mm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xm={readContext:vt,useCallback:jc,useContext:vt,useEffect:vl,useImperativeHandle:Pc,useInsertionEffect:kc,useLayoutEffect:Tc,useMemo:_c,useReducer:hl,useRef:Sc,useState:function(){return hl(Qr)},useDebugValue:yl,useDeferredValue:function(e){var t=yt();return zc(t,Be.memoizedState,e)},useTransition:function(){var e=hl(Qr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:bc,unstable_isNewReconciler:!1},wm={readContext:vt,useCallback:jc,useContext:vt,useEffect:vl,useImperativeHandle:Pc,useInsertionEffect:kc,useLayoutEffect:Tc,useMemo:_c,useReducer:gl,useRef:Sc,useState:function(){return gl(Qr)},useDebugValue:yl,useDeferredValue:function(e){var t=yt();return Be===null?t.memoizedState=e:zc(t,Be.memoizedState,e)},useTransition:function(){var e=gl(Qr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:bc,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function xl(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var lo={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=et(),a=pn(e),c=Ht(s,a);c.payload=t,r!=null&&(c.callback=r),t=un(e,c,a),t!==null&&(zt(t,e,a,s),Ji(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=et(),a=pn(e),c=Ht(s,a);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=un(e,c,a),t!==null&&(zt(t,e,a,s),Ji(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=et(),s=pn(e),a=Ht(r,s);a.tag=2,t!=null&&(a.callback=t),t=un(e,a,s),t!==null&&(zt(t,e,s,r),Ji(t,e,s))}};function Oc(e,t,r,s,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,p):t.prototype&&t.prototype.isPureReactComponent?!Dr(r,s)||!Dr(a,c):!0}function Nc(e,t,r){var s=!1,a=sn,c=t.contextType;return typeof c=="object"&&c!==null?c=vt(c):(a=nt(t)?Sn:Xe.current,s=t.contextTypes,c=(s=s!=null)?Xn(e,a):sn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Rc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function wl(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},sl(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=vt(c):(c=nt(t)?Sn:Xe.current,a.context=Xn(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(xl(e,t,c,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&lo.enqueueReplaceState(a,a.state,null),eo(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var r="",s=t;do r+=he(s),s=s.return;while(s);var a=r}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ho||(ho=!0,Dl=s),El(e,t)},r}function Ac(e,t,r){r=Ht(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){El(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){El(e,t),typeof s!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Fc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Sm;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Nm.bind(null,e,t,r),t.then(e,e))}function Bc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $c(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,un(r,t,1))),r.lanes|=1),e)}var Em=L.ReactCurrentOwner,rt=!1;function Je(e,t,r,s){t.child=e===null?lc(t,null,r,s):Jn(t,e.child,r,s)}function Vc(e,t,r,s,a){r=r.render;var c=t.ref;return tr(t,a),s=pl(e,t,r,s,c,a),r=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wt(e,t,a)):(Me&&r&&Qs(t),t.flags|=1,Je(e,t,s,a),t.child)}function Gc(e,t,r,s,a){if(e===null){var c=r.type;return typeof c=="function"&&!Hl(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Hc(e,t,c,s,a)):(e=So(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&a)){var p=c.memoizedProps;if(r=r.compare,r=r!==null?r:Dr,r(p,s)&&e.ref===t.ref)return Wt(e,t,a)}return t.flags|=1,e=hn(c,s),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,r,s,a){if(e!==null){var c=e.memoizedProps;if(Dr(c,s)&&e.ref===t.ref)if(rt=!1,t.pendingProps=s=c,(e.lanes&a)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Wt(e,t,a)}return kl(e,t,r,s,a)}function Wc(e,t,r){var s=t.pendingProps,a=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(or,dt),dt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(or,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:r,je(or,dt),dt|=s}else c!==null?(s=c.baseLanes|r,t.memoizedState=null):s=r,je(or,dt),dt|=s;return Je(e,t,a,r),t.child}function Uc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,r,s,a){var c=nt(r)?Sn:Xe.current;return c=Xn(t,c),tr(t,a),r=pl(e,t,r,s,c,a),s=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wt(e,t,a)):(Me&&s&&Qs(t),t.flags|=1,Je(e,t,r,a),t.child)}function qc(e,t,r,s,a){if(nt(r)){var c=!0;Wi(t)}else c=!1;if(tr(t,a),t.stateNode===null)uo(e,t),Nc(t,r,s),wl(t,r,s,a),s=!0;else if(e===null){var p=t.stateNode,y=t.memoizedProps;p.props=y;var E=p.context,M=r.contextType;typeof M=="object"&&M!==null?M=vt(M):(M=nt(r)?Sn:Xe.current,M=Xn(t,M));var $=r.getDerivedStateFromProps,H=typeof $=="function"||typeof p.getSnapshotBeforeUpdate=="function";H||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==s||E!==M)&&Rc(t,p,s,M),an=!1;var B=t.memoizedState;p.state=B,eo(t,s,p,a),E=t.memoizedState,y!==s||B!==E||tt.current||an?(typeof $=="function"&&(xl(t,r,$,s),E=t.memoizedState),(y=an||Oc(t,r,y,s,B,E,M))?(H||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),p.props=s,p.state=E,p.context=M,s=y):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,uc(e,t),y=t.memoizedProps,M=t.type===t.elementType?y:Pt(t.type,y),p.props=M,H=t.pendingProps,B=p.context,E=r.contextType,typeof E=="object"&&E!==null?E=vt(E):(E=nt(r)?Sn:Xe.current,E=Xn(t,E));var Z=r.getDerivedStateFromProps;($=typeof Z=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==H||B!==E)&&Rc(t,p,s,E),an=!1,B=t.memoizedState,p.state=B,eo(t,s,p,a);var te=t.memoizedState;y!==H||B!==te||tt.current||an?(typeof Z=="function"&&(xl(t,r,Z,s),te=t.memoizedState),(M=an||Oc(t,r,M,s,B,te,E)||!1)?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,te,E),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,te,E)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=te),p.props=s,p.state=te,p.context=E,s=M):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),s=!1)}return Tl(e,t,r,s,c,a)}function Tl(e,t,r,s,a,c){Uc(e,t);var p=(t.flags&128)!==0;if(!s&&!p)return a&&Zu(t,r,!1),Wt(e,t,c);s=t.stateNode,Em.current=t;var y=p&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&p?(t.child=Jn(t,e.child,null,c),t.child=Jn(t,null,y,c)):Je(e,t,y,c),t.memoizedState=s.state,a&&Zu(t,r,!0),t.child}function Yc(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),ll(e,t.containerInfo)}function Xc(e,t,r,s,a){return Zn(),el(a),t.flags|=256,Je(e,t,r,s),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,r){var s=t.pendingProps,a=Ie.current,c=!1,p=(t.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),je(Ie,a&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=s.children,e=s.fallback,c?(s=t.mode,c=t.child,p={mode:"hidden",children:p},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=Eo(p,s,0,null),e=Mn(e,s,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Pl(r),t.memoizedState=Cl,e):jl(t,p));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return km(e,t,p,s,y,a,r);if(c){c=s.fallback,p=t.mode,a=e.child,y=a.sibling;var E={mode:"hidden",children:s.children};return!(p&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=E,t.deletions=null):(s=hn(a,E),s.subtreeFlags=a.subtreeFlags&14680064),y!==null?c=hn(y,c):(c=Mn(c,p,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,p=e.child.memoizedState,p=p===null?Pl(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~r,t.memoizedState=Cl,s}return c=e.child,e=c.sibling,s=hn(c,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function jl(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,r,s){return s!==null&&el(s),Jn(t,e.child,null,r),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,r,s,a,c,p){if(r)return t.flags&256?(t.flags&=-257,s=Sl(Error(o(422))),ao(e,t,p,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,a=t.mode,s=Eo({mode:"visible",children:s.children},a,0,null),c=Mn(c,a,p,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,t.mode&1&&Jn(t,e.child,null,p),t.child.memoizedState=Pl(p),t.memoizedState=Cl,c);if(!(t.mode&1))return ao(e,t,p,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var y=s.dgst;return s=y,c=Error(o(419)),s=Sl(c,s,void 0),ao(e,t,p,s)}if(y=(p&e.childLanes)!==0,rt||y){if(s=Ge,s!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|p)?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,Gt(e,a),zt(s,e,a,-1))}return Gl(),s=Sl(Error(o(421))),ao(e,t,p,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Rm.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,ct=rn(a.nextSibling),ut=t,Me=!0,Ct=null,e!==null&&(ht[gt++]=$t,ht[gt++]=Vt,ht[gt++]=En,$t=e.id,Vt=e.overflow,En=t),t=jl(t,s.children),t.flags|=4096,t)}function Kc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),il(e.return,t,r)}function _l(e,t,r,s,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=r,c.tailMode=a)}function Zc(e,t,r){var s=t.pendingProps,a=s.revealOrder,c=s.tail;if(Je(e,t,s.children,r),s=Ie.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,r,t);else if(e.tag===19)Kc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(je(Ie,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&to(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),_l(t,!1,a,r,c);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&to(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}_l(t,!0,r,null,c);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=hn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=hn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Tm(e,t,r){switch(t.tag){case 3:Yc(t),Zn();break;case 5:fc(t);break;case 1:nt(t.type)&&Wi(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;je(Ki,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(je(Ie,Ie.current&1),t.flags|=128,null):r&t.child.childLanes?Qc(e,t,r):(je(Ie,Ie.current&1),e=Wt(e,t,r),e!==null?e.sibling:null);je(Ie,Ie.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Zc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),je(Ie,Ie.current),s)break;return null;case 22:case 23:return t.lanes=0,Wc(e,t,r)}return Wt(e,t,r)}var Jc,zl,ed,td;Jc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zl=function(){},ed=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Cn(Lt.current);var c=null;switch(r){case"input":a=is(e,a),s=is(e,s),c=[];break;case"select":a=W({},a,{value:void 0}),s=W({},s,{value:void 0}),c=[];break;case"textarea":a=ls(e,a),s=ls(e,s),c=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Vi)}us(r,s);var p;r=null;for(M in a)if(!s.hasOwnProperty(M)&&a.hasOwnProperty(M)&&a[M]!=null)if(M==="style"){var y=a[M];for(p in y)y.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(u.hasOwnProperty(M)?c||(c=[]):(c=c||[]).push(M,null));for(M in s){var E=s[M];if(y=a!=null?a[M]:void 0,s.hasOwnProperty(M)&&E!==y&&(E!=null||y!=null))if(M==="style")if(y){for(p in y)!y.hasOwnProperty(p)||E&&E.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in E)E.hasOwnProperty(p)&&y[p]!==E[p]&&(r||(r={}),r[p]=E[p])}else r||(c||(c=[]),c.push(M,r)),r=E;else M==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(c=c||[]).push(M,E)):M==="children"?typeof E!="string"&&typeof E!="number"||(c=c||[]).push(M,""+E):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(u.hasOwnProperty(M)?(E!=null&&M==="onScroll"&&_e("scroll",e),c||y===E||(c=[])):(c=c||[]).push(M,E))}r&&(c=c||[]).push("style",r);var M=c;(t.updateQueue=M)&&(t.flags|=4)}},td=function(e,t,r,s){r!==s&&(t.flags|=4)};function Zr(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Cm(e,t,r){var s=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return nt(t.type)&&Hi(),Ke(t),null;case 3:return s=t.stateNode,nr(),ze(tt),ze(Xe),cl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(Bl(Ct),Ct=null))),zl(e,t),Ke(t),null;case 5:al(t);var a=Cn(qr.current);if(r=t.type,e!==null&&t.stateNode!=null)ed(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(e=Cn(Lt.current),Xi(t)){s=t.stateNode,r=t.type;var c=t.memoizedProps;switch(s[It]=t,s[Vr]=c,e=(t.mode&1)!==0,r){case"dialog":_e("cancel",s),_e("close",s);break;case"iframe":case"object":case"embed":_e("load",s);break;case"video":case"audio":for(a=0;a<Fr.length;a++)_e(Fr[a],s);break;case"source":_e("error",s);break;case"img":case"image":case"link":_e("error",s),_e("load",s);break;case"details":_e("toggle",s);break;case"input":Na(s,c),_e("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},_e("invalid",s);break;case"textarea":Aa(s,c),_e("invalid",s)}us(r,c),a=null;for(var p in c)if(c.hasOwnProperty(p)){var y=c[p];p==="children"?typeof y=="string"?s.textContent!==y&&(c.suppressHydrationWarning!==!0&&$i(s.textContent,y,e),a=["children",y]):typeof y=="number"&&s.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&$i(s.textContent,y,e),a=["children",""+y]):u.hasOwnProperty(p)&&y!=null&&p==="onScroll"&&_e("scroll",s)}switch(r){case"input":At(s),Da(s,c,!0);break;case"textarea":At(s),Ba(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Vi)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$a(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=p.createElement(r,{is:s.is}):(e=p.createElement(r),r==="select"&&(p=e,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):e=p.createElementNS(e,r),e[It]=t,e[Vr]=s,Jc(e,t,!1,!1),t.stateNode=e;e:{switch(p=cs(r,s),r){case"dialog":_e("cancel",e),_e("close",e),a=s;break;case"iframe":case"object":case"embed":_e("load",e),a=s;break;case"video":case"audio":for(a=0;a<Fr.length;a++)_e(Fr[a],e);a=s;break;case"source":_e("error",e),a=s;break;case"img":case"image":case"link":_e("error",e),_e("load",e),a=s;break;case"details":_e("toggle",e),a=s;break;case"input":Na(e,s),a=is(e,s),_e("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=W({},s,{value:void 0}),_e("invalid",e);break;case"textarea":Aa(e,s),a=ls(e,s),_e("invalid",e);break;default:a=s}us(r,a),y=a;for(c in y)if(y.hasOwnProperty(c)){var E=y[c];c==="style"?Ha(e,E):c==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Va(e,E)):c==="children"?typeof E=="string"?(r!=="textarea"||E!=="")&&wr(e,E):typeof E=="number"&&wr(e,""+E):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?E!=null&&c==="onScroll"&&_e("scroll",e):E!=null&&x(e,c,E,p))}switch(r){case"input":At(e),Da(e,s,!1);break;case"textarea":At(e),Ba(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ve(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?Dn(e,!!s.multiple,c,!1):s.defaultValue!=null&&Dn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vi)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=Cn(qr.current),Cn(Lt.current),Xi(t)){if(s=t.stateNode,r=t.memoizedProps,s[It]=t,(c=s.nodeValue!==r)&&(e=ut,e!==null))switch(e.tag){case 3:$i(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(s.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[It]=t,t.stateNode=s}return Ke(t),null;case 13:if(ze(Ie),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&ct!==null&&t.mode&1&&!(t.flags&128))ic(),Zn(),t.flags|=98560,c=!1;else if(c=Xi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[It]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),c=!1}else Ct!==null&&(Bl(Ct),Ct=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?$e===0&&($e=3):Gl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return nr(),zl(e,t),e===null&&Br(t.stateNode.containerInfo),Ke(t),null;case 10:return rl(t.type._context),Ke(t),null;case 17:return nt(t.type)&&Hi(),Ke(t),null;case 19:if(ze(Ie),c=t.memoizedState,c===null)return Ke(t),null;if(s=(t.flags&128)!==0,p=c.rendering,p===null)if(s)Zr(c,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=to(e),p!==null){for(t.flags|=128,Zr(c,!1),s=p.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)c=r,e=s,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&Re()>sr&&(t.flags|=128,s=!0,Zr(c,!1),t.lanes=4194304)}else{if(!s)if(e=to(p),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Zr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Me)return Ke(t),null}else 2*Re()-c.renderingStartTime>sr&&r!==1073741824&&(t.flags|=128,s=!0,Zr(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(r=c.last,r!==null?r.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Re(),t.sibling=null,r=Ie.current,je(Ie,s?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return Vl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?dt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Pm(e,t){switch(Ks(t),t.tag){case 1:return nt(t.type)&&Hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),ze(tt),ze(Xe),cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return al(t),null;case 13:if(ze(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ie),null;case 4:return nr(),null;case 10:return rl(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var co=!1,Ze=!1,jm=typeof WeakSet=="function"?WeakSet:Set,J=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ne(e,t,s)}else r.current=null}function bl(e,t,r){try{r()}catch(s){Ne(e,t,s)}}var nd=!1;function _m(e,t){if(Vs=bi,e=Ou(),Os(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var p=0,y=-1,E=-1,M=0,$=0,H=e,B=null;t:for(;;){for(var Z;H!==r||a!==0&&H.nodeType!==3||(y=p+a),H!==c||s!==0&&H.nodeType!==3||(E=p+s),H.nodeType===3&&(p+=H.nodeValue.length),(Z=H.firstChild)!==null;)B=H,H=Z;for(;;){if(H===e)break t;if(B===r&&++M===a&&(y=p),B===c&&++$===s&&(E=p),(Z=H.nextSibling)!==null)break;H=B,B=H.parentNode}H=Z}r=y===-1||E===-1?null:{start:y,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gs={focusedElem:e,selectionRange:r},bi=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var te=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var ne=te.memoizedProps,De=te.memoizedState,_=t.stateNode,T=_.getSnapshotBeforeUpdate(t.elementType===t.type?ne:Pt(t.type,ne),De);_.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var z=t.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(U){Ne(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return te=nd,nd=!1,te}function Jr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&bl(t,r,c)}a=a.next}while(a!==s)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ml(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Vr],delete t[qs],delete t[cm],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function id(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Vi));else if(s!==4&&(e=e.child,e!==null))for(Il(e,t,r),e=e.sibling;e!==null;)Il(e,t,r),e=e.sibling}function Ll(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}var qe=null,jt=!1;function cn(e,t,r){for(r=r.child;r!==null;)sd(e,t,r),r=r.sibling}function sd(e,t,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ti,r)}catch{}switch(r.tag){case 5:Ze||ir(r,t);case 6:var s=qe,a=jt;qe=null,cn(e,t,r),qe=s,jt=a,qe!==null&&(jt?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(jt?(e=qe,r=r.stateNode,e.nodeType===8?Us(e.parentNode,r):e.nodeType===1&&Us(e,r),Mr(e)):Us(qe,r.stateNode));break;case 4:s=qe,a=jt,qe=r.stateNode.containerInfo,jt=!0,cn(e,t,r),qe=s,jt=a;break;case 0:case 11:case 14:case 15:if(!Ze&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var c=a,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&bl(r,t,p),a=a.next}while(a!==s)}cn(e,t,r);break;case 1:if(!Ze&&(ir(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(y){Ne(r,t,y)}cn(e,t,r);break;case 21:cn(e,t,r);break;case 22:r.mode&1?(Ze=(s=Ze)||r.memoizedState!==null,cn(e,t,r),Ze=s):cn(e,t,r);break;default:cn(e,t,r)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new jm),t.forEach(function(s){var a=Dm.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function _t(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 5:qe=y.stateNode,jt=!1;break e;case 3:qe=y.stateNode.containerInfo,jt=!0;break e;case 4:qe=y.stateNode.containerInfo,jt=!0;break e}y=y.return}if(qe===null)throw Error(o(160));sd(c,p,a),qe=null,jt=!1;var E=a.alternate;E!==null&&(E.return=null),a.return=null}catch(M){Ne(a,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}function ad(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Nt(e),s&4){try{Jr(3,e,e.return),fo(3,e)}catch(ne){Ne(e,e.return,ne)}try{Jr(5,e,e.return)}catch(ne){Ne(e,e.return,ne)}}break;case 1:_t(t,e),Nt(e),s&512&&r!==null&&ir(r,r.return);break;case 5:if(_t(t,e),Nt(e),s&512&&r!==null&&ir(r,r.return),e.flags&32){var a=e.stateNode;try{wr(a,"")}catch(ne){Ne(e,e.return,ne)}}if(s&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,p=r!==null?r.memoizedProps:c,y=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&Ra(a,c),cs(y,p);var M=cs(y,c);for(p=0;p<E.length;p+=2){var $=E[p],H=E[p+1];$==="style"?Ha(a,H):$==="dangerouslySetInnerHTML"?Va(a,H):$==="children"?wr(a,H):x(a,$,H,M)}switch(y){case"input":os(a,c);break;case"textarea":Fa(a,c);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var Z=c.value;Z!=null?Dn(a,!!c.multiple,Z,!1):B!==!!c.multiple&&(c.defaultValue!=null?Dn(a,!!c.multiple,c.defaultValue,!0):Dn(a,!!c.multiple,c.multiple?[]:"",!1))}a[Vr]=c}catch(ne){Ne(e,e.return,ne)}}break;case 6:if(_t(t,e),Nt(e),s&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(ne){Ne(e,e.return,ne)}}break;case 3:if(_t(t,e),Nt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(ne){Ne(e,e.return,ne)}break;case 4:_t(t,e),Nt(e);break;case 13:_t(t,e),Nt(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Rl=Re())),s&4&&ld(e);break;case 22:if($=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(M=Ze)||$,_t(t,e),Ze=M):_t(t,e),Nt(e),s&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!$&&e.mode&1)for(J=e,$=e.child;$!==null;){for(H=J=$;J!==null;){switch(B=J,Z=B.child,B.tag){case 0:case 11:case 14:case 15:Jr(4,B,B.return);break;case 1:ir(B,B.return);var te=B.stateNode;if(typeof te.componentWillUnmount=="function"){s=B,r=B.return;try{t=s,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(ne){Ne(s,r,ne)}}break;case 5:ir(B,B.return);break;case 22:if(B.memoizedState!==null){dd(H);continue}}Z!==null?(Z.return=B,J=Z):dd(H)}$=$.sibling}e:for($=null,H=e;;){if(H.tag===5){if($===null){$=H;try{a=H.stateNode,M?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=H.stateNode,E=H.memoizedProps.style,p=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=Ga("display",p))}catch(ne){Ne(e,e.return,ne)}}}else if(H.tag===6){if($===null)try{H.stateNode.nodeValue=M?"":H.memoizedProps}catch(ne){Ne(e,e.return,ne)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;$===H&&($=null),H=H.return}$===H&&($=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:_t(t,e),Nt(e),s&4&&ld(e);break;case 21:break;default:_t(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(id(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(wr(a,""),s.flags&=-33);var c=od(e);Ll(e,c,a);break;case 3:case 4:var p=s.stateNode.containerInfo,y=od(e);Il(e,y,p);break;default:throw Error(o(161))}}catch(E){Ne(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zm(e,t,r){J=e,ud(e)}function ud(e,t,r){for(var s=(e.mode&1)!==0;J!==null;){var a=J,c=a.child;if(a.tag===22&&s){var p=a.memoizedState!==null||co;if(!p){var y=a.alternate,E=y!==null&&y.memoizedState!==null||Ze;y=co;var M=Ze;if(co=p,(Ze=E)&&!M)for(J=a;J!==null;)p=J,E=p.child,p.tag===22&&p.memoizedState!==null?fd(a):E!==null?(E.return=p,J=E):fd(a);for(;c!==null;)J=c,ud(c),c=c.sibling;J=a,co=y,Ze=M}cd(e)}else a.subtreeFlags&8772&&c!==null?(c.return=a,J=c):cd(e)}}function cd(e){for(;J!==null;){var t=J;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||fo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ze)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Pt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&dc(t,c,s);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}dc(t,p,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&r.focus();break;case"img":E.src&&(r.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var $=M.memoizedState;if($!==null){var H=$.dehydrated;H!==null&&Mr(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ze||t.flags&512&&Ml(t)}catch(B){Ne(t,t.return,B)}}if(t===e){J=null;break}if(r=t.sibling,r!==null){r.return=t.return,J=r;break}J=t.return}}function dd(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var r=t.sibling;if(r!==null){r.return=t.return,J=r;break}J=t.return}}function fd(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fo(4,t)}catch(E){Ne(t,r,E)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(E){Ne(t,a,E)}}var c=t.return;try{Ml(t)}catch(E){Ne(t,c,E)}break;case 5:var p=t.return;try{Ml(t)}catch(E){Ne(t,p,E)}}}catch(E){Ne(t,t.return,E)}if(t===e){J=null;break}var y=t.sibling;if(y!==null){y.return=t.return,J=y;break}J=t.return}}var bm=Math.ceil,po=L.ReactCurrentDispatcher,Ol=L.ReactCurrentOwner,xt=L.ReactCurrentBatchConfig,ye=0,Ge=null,Ae=null,Ye=0,dt=0,or=on(0),$e=0,ei=null,jn=0,mo=0,Nl=0,ti=null,it=null,Rl=0,sr=1/0,Ut=null,ho=!1,Dl=null,dn=null,go=!1,fn=null,vo=0,ni=0,Al=null,yo=-1,xo=0;function et(){return ye&6?Re():yo!==-1?yo:yo=Re()}function pn(e){return e.mode&1?ye&2&&Ye!==0?Ye&-Ye:pm.transition!==null?(xo===0&&(xo=ou()),xo):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e):1}function zt(e,t,r,s){if(50<ni)throw ni=0,Al=null,Error(o(185));Pr(e,r,s),(!(ye&2)||e!==Ge)&&(e===Ge&&(!(ye&2)&&(mo|=r),$e===4&&mn(e,Ye)),ot(e,s),r===1&&ye===0&&!(t.mode&1)&&(sr=Re()+500,Ui&&ln()))}function ot(e,t){var r=e.callbackNode;pp(e,t);var s=ji(e,e===Ge?Ye:0);if(s===0)r!==null&&nu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&nu(r),t===1)e.tag===0?fm(md.bind(null,e)):Ju(md.bind(null,e)),am(function(){!(ye&6)&&ln()}),r=null;else{switch(su(s)){case 1:r=vs;break;case 4:r=ru;break;case 16:r=ki;break;case 536870912:r=iu;break;default:r=ki}r=Ed(r,pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function pd(e,t){if(yo=-1,xo=0,ye&6)throw Error(o(327));var r=e.callbackNode;if(lr()&&e.callbackNode!==r)return null;var s=ji(e,e===Ge?Ye:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=wo(e,s);else{t=s;var a=ye;ye|=2;var c=gd();(Ge!==e||Ye!==t)&&(Ut=null,sr=Re()+500,zn(e,t));do try{Lm();break}catch(y){hd(e,y)}while(!0);nl(),po.current=c,ye=a,Ae!==null?t=0:(Ge=null,Ye=0,t=$e)}if(t!==0){if(t===2&&(a=ys(e),a!==0&&(s=a,t=Fl(e,a))),t===1)throw r=ei,zn(e,0),mn(e,s),ot(e,Re()),r;if(t===6)mn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Mm(a)&&(t=wo(e,s),t===2&&(c=ys(e),c!==0&&(s=c,t=Fl(e,c))),t===1))throw r=ei,zn(e,0),mn(e,s),ot(e,Re()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:bn(e,it,Ut);break;case 3:if(mn(e,s),(s&130023424)===s&&(t=Rl+500-Re(),10<t)){if(ji(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){et(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ws(bn.bind(null,e,it,Ut),t);break}bn(e,it,Ut);break;case 4:if(mn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var p=31-kt(s);c=1<<p,p=t[p],p>a&&(a=p),s&=~c}if(s=a,s=Re()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*bm(s/1960))-s,10<s){e.timeoutHandle=Ws(bn.bind(null,e,it,Ut),s);break}bn(e,it,Ut);break;case 5:bn(e,it,Ut);break;default:throw Error(o(329))}}}return ot(e,Re()),e.callbackNode===r?pd.bind(null,e):null}function Fl(e,t){var r=ti;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=wo(e,t),e!==2&&(t=it,it=r,t!==null&&Bl(t)),e}function Bl(e){it===null?it=e:it.push.apply(it,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],c=a.getSnapshot;a=a.value;try{if(!Tt(c(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Nl,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),s=1<<r;e[r]=-1,t&=~s}}function md(e){if(ye&6)throw Error(o(327));lr();var t=ji(e,0);if(!(t&1))return ot(e,Re()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var s=ys(e);s!==0&&(t=s,r=Fl(e,s))}if(r===1)throw r=ei,zn(e,0),mn(e,t),ot(e,Re()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,it,Ut),ot(e,Re()),null}function $l(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(sr=Re()+500,Ui&&ln())}}function _n(e){fn!==null&&fn.tag===0&&!(ye&6)&&lr();var t=ye;ye|=1;var r=xt.transition,s=Pe;try{if(xt.transition=null,Pe=1,e)return e()}finally{Pe=s,xt.transition=r,ye=t,!(ye&6)&&ln()}}function Vl(){dt=or.current,ze(or)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lm(r)),Ae!==null)for(r=Ae.return;r!==null;){var s=r;switch(Ks(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Hi();break;case 3:nr(),ze(tt),ze(Xe),cl();break;case 5:al(s);break;case 4:nr();break;case 13:ze(Ie);break;case 19:ze(Ie);break;case 10:rl(s.type._context);break;case 22:case 23:Vl()}r=r.return}if(Ge=e,Ae=e=hn(e.current,null),Ye=dt=t,$e=0,ei=null,Nl=mo=jn=0,it=ti=null,Tn!==null){for(t=0;t<Tn.length;t++)if(r=Tn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,c=r.pending;if(c!==null){var p=c.next;c.next=a,s.next=p}r.pending=s}Tn=null}return e}function hd(e,t){do{var r=Ae;try{if(nl(),no.current=so,ro){for(var s=Le.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ro=!1}if(Pn=0,Ve=Be=Le=null,Yr=!1,Xr=0,Ol.current=null,r===null||r.return===null){$e=1,ei=t,Ae=null;break}e:{var c=e,p=r.return,y=r,E=t;if(t=Ye,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var M=E,$=y,H=$.tag;if(!($.mode&1)&&(H===0||H===11||H===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var Z=Bc(p);if(Z!==null){Z.flags&=-257,$c(Z,p,y,c,t),Z.mode&1&&Fc(c,M,t),t=Z,E=M;var te=t.updateQueue;if(te===null){var ne=new Set;ne.add(E),t.updateQueue=ne}else te.add(E);break e}else{if(!(t&1)){Fc(c,M,t),Gl();break e}E=Error(o(426))}}else if(Me&&y.mode&1){var De=Bc(p);if(De!==null){!(De.flags&65536)&&(De.flags|=256),$c(De,p,y,c,t),el(rr(E,y));break e}}c=E=rr(E,y),$e!==4&&($e=2),ti===null?ti=[c]:ti.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var _=Dc(c,E,t);cc(c,_);break e;case 1:y=E;var T=c.type,z=c.stateNode;if(!(c.flags&128)&&(typeof T.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(dn===null||!dn.has(z)))){c.flags|=65536,t&=-t,c.lanes|=t;var U=Ac(c,y,t);cc(c,U);break e}}c=c.return}while(c!==null)}yd(r)}catch(re){t=re,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function gd(){var e=po.current;return po.current=so,e===null?so:e}function Gl(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(jn&268435455)&&!(mo&268435455)||mn(Ge,Ye)}function wo(e,t){var r=ye;ye|=2;var s=gd();(Ge!==e||Ye!==t)&&(Ut=null,zn(e,t));do try{Im();break}catch(a){hd(e,a)}while(!0);if(nl(),ye=r,po.current=s,Ae!==null)throw Error(o(261));return Ge=null,Ye=0,$e}function Im(){for(;Ae!==null;)vd(Ae)}function Lm(){for(;Ae!==null&&!ip();)vd(Ae)}function vd(e){var t=Sd(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?yd(e):Ae=t,Ol.current=null}function yd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Pm(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ae=null;return}}else if(r=Cm(r,t,dt),r!==null){Ae=r;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);$e===0&&($e=5)}function bn(e,t,r){var s=Pe,a=xt.transition;try{xt.transition=null,Pe=1,Om(e,t,r,s)}finally{xt.transition=a,Pe=s}return null}function Om(e,t,r,s){do lr();while(fn!==null);if(ye&6)throw Error(o(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(mp(e,c),e===Ge&&(Ae=Ge=null,Ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||go||(go=!0,Ed(ki,function(){return lr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=xt.transition,xt.transition=null;var p=Pe;Pe=1;var y=ye;ye|=4,Ol.current=null,_m(e,r),ad(r,e),em(Gs),bi=!!Vs,Gs=Vs=null,e.current=r,zm(r),op(),ye=y,Pe=p,xt.transition=c}else e.current=r;if(go&&(go=!1,fn=e,vo=a),c=e.pendingLanes,c===0&&(dn=null),ap(r.stateNode),ot(e,Re()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ho)throw ho=!1,e=Dl,Dl=null,e;return vo&1&&e.tag!==0&&lr(),c=e.pendingLanes,c&1?e===Al?ni++:(ni=0,Al=e):ni=0,ln(),null}function lr(){if(fn!==null){var e=su(vo),t=xt.transition,r=Pe;try{if(xt.transition=null,Pe=16>e?16:e,fn===null)var s=!1;else{if(e=fn,fn=null,vo=0,ye&6)throw Error(o(331));var a=ye;for(ye|=4,J=e.current;J!==null;){var c=J,p=c.child;if(J.flags&16){var y=c.deletions;if(y!==null){for(var E=0;E<y.length;E++){var M=y[E];for(J=M;J!==null;){var $=J;switch($.tag){case 0:case 11:case 15:Jr(8,$,c)}var H=$.child;if(H!==null)H.return=$,J=H;else for(;J!==null;){$=J;var B=$.sibling,Z=$.return;if(rd($),$===M){J=null;break}if(B!==null){B.return=Z,J=B;break}J=Z}}}var te=c.alternate;if(te!==null){var ne=te.child;if(ne!==null){te.child=null;do{var De=ne.sibling;ne.sibling=null,ne=De}while(ne!==null)}}J=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,J=p;else e:for(;J!==null;){if(c=J,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Jr(9,c,c.return)}var _=c.sibling;if(_!==null){_.return=c.return,J=_;break e}J=c.return}}var T=e.current;for(J=T;J!==null;){p=J;var z=p.child;if(p.subtreeFlags&2064&&z!==null)z.return=p,J=z;else e:for(p=T;J!==null;){if(y=J,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:fo(9,y)}}catch(re){Ne(y,y.return,re)}if(y===p){J=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,J=U;break e}J=y.return}}if(ye=a,ln(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ti,e)}catch{}s=!0}return s}finally{Pe=r,xt.transition=t}}return!1}function xd(e,t,r){t=rr(r,t),t=Dc(e,t,1),e=un(e,t,1),t=et(),e!==null&&(Pr(e,1,t),ot(e,t))}function Ne(e,t,r){if(e.tag===3)xd(e,e,r);else for(;t!==null;){if(t.tag===3){xd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(dn===null||!dn.has(s))){e=rr(r,e),e=Ac(t,e,1),t=un(t,e,1),e=et(),t!==null&&(Pr(t,1,e),ot(t,e));break}}t=t.return}}function Nm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Ye&r)===r&&($e===4||$e===3&&(Ye&130023424)===Ye&&500>Re()-Rl?zn(e,0):Nl|=r),ot(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var r=et();e=Gt(e,t),e!==null&&(Pr(e,t,r),ot(e,r))}function Rm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),wd(e,r)}function Dm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),wd(e,r)}var Sd;Sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return rt=!1,Tm(e,t,r);rt=!!(e.flags&131072)}else rt=!1,Me&&t.flags&1048576&&ec(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;uo(e,t),e=t.pendingProps;var a=Xn(t,Xe.current);tr(t,r),a=pl(null,t,s,e,a,r);var c=ml();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(s)?(c=!0,Wi(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,sl(t),a.updater=lo,t.stateNode=a,a._reactInternals=t,wl(t,s,e,r),t=Tl(null,t,s,!0,c,r)):(t.tag=0,Me&&c&&Qs(t),Je(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Fm(s),e=Pt(s,e),a){case 0:t=kl(null,t,s,e,r);break e;case 1:t=qc(null,t,s,e,r);break e;case 11:t=Vc(null,t,s,e,r);break e;case 14:t=Gc(null,t,s,Pt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),kl(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),qc(e,t,s,a,r);case 3:e:{if(Yc(t),e===null)throw Error(o(387));s=t.pendingProps,c=t.memoizedState,a=c.element,uc(e,t),eo(t,s,null,r);var p=t.memoizedState;if(s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=rr(Error(o(423)),t),t=Xc(e,t,s,r,a);break e}else if(s!==a){a=rr(Error(o(424)),t),t=Xc(e,t,s,r,a);break e}else for(ct=rn(t.stateNode.containerInfo.firstChild),ut=t,Me=!0,Ct=null,r=lc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zn(),s===a){t=Wt(e,t,r);break e}Je(e,t,s,r)}t=t.child}return t;case 5:return fc(t),e===null&&Js(t),s=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,p=a.children,Hs(s,a)?p=null:c!==null&&Hs(s,c)&&(t.flags|=32),Uc(e,t),Je(e,t,p,r),t.child;case 6:return e===null&&Js(t),null;case 13:return Qc(e,t,r);case 4:return ll(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Jn(t,null,s,r):Je(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),Vc(e,t,s,a,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,c=t.memoizedProps,p=a.value,je(Ki,s._currentValue),s._currentValue=p,c!==null)if(Tt(c.value,p)){if(c.children===a.children&&!tt.current){t=Wt(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var y=c.dependencies;if(y!==null){p=c.child;for(var E=y.firstContext;E!==null;){if(E.context===s){if(c.tag===1){E=Ht(-1,r&-r),E.tag=2;var M=c.updateQueue;if(M!==null){M=M.shared;var $=M.pending;$===null?E.next=E:(E.next=$.next,$.next=E),M.pending=E}}c.lanes|=r,E=c.alternate,E!==null&&(E.lanes|=r),il(c.return,r,t),y.lanes|=r;break}E=E.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(o(341));p.lanes|=r,y=p.alternate,y!==null&&(y.lanes|=r),il(p,r,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}Je(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,tr(t,r),a=vt(a),s=s(a),t.flags|=1,Je(e,t,s,r),t.child;case 14:return s=t.type,a=Pt(s,t.pendingProps),a=Pt(s.type,a),Gc(e,t,s,a,r);case 15:return Hc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),uo(e,t),t.tag=1,nt(s)?(e=!0,Wi(t)):e=!1,tr(t,r),Nc(t,s,a),wl(t,s,a,r),Tl(null,t,s,!0,e,r);case 19:return Zc(e,t,r);case 22:return Wc(e,t,r)}throw Error(o(156,t.tag))};function Ed(e,t){return tu(e,t)}function Am(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,s){return new Am(e,t,r,s)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===ae)return 14}return 2}function hn(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function So(e,t,r,s,a,c){var p=2;if(s=e,typeof e=="function")Hl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case q:return Mn(r.children,a,c,t);case Q:p=8,a|=8;break;case V:return e=wt(12,r,t,a|2),e.elementType=V,e.lanes=c,e;case X:return e=wt(13,r,t,a),e.elementType=X,e.lanes=c,e;case ie:return e=wt(19,r,t,a),e.elementType=ie,e.lanes=c,e;case xe:return Eo(r,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:p=10;break e;case K:p=9;break e;case ee:p=11;break e;case ae:p=14;break e;case ge:p=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=wt(p,r,t,a),t.elementType=e,t.type=s,t.lanes=c,t}function Mn(e,t,r,s){return e=wt(7,e,s,t),e.lanes=r,e}function Eo(e,t,r,s){return e=wt(22,e,s,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Wl(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Ul(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bm(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ql(e,t,r,s,a,c,p,y,E){return e=new Bm(e,t,r,y,E),t===1?(t=1,c===!0&&(t|=8)):t=0,c=wt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(c),e}function $m(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function kd(e){if(!e)return sn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(nt(r))return Ku(e,r,t)}return t}function Td(e,t,r,s,a,c,p,y,E){return e=ql(r,s,!0,e,a,c,p,y,E),e.context=kd(null),r=e.current,s=et(),a=pn(r),c=Ht(s,a),c.callback=t??null,un(r,c,a),e.current.lanes=a,Pr(e,a,s),ot(e,s),e}function ko(e,t,r,s){var a=t.current,c=et(),p=pn(a);return r=kd(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(c,p),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=un(a,t,p),e!==null&&(zt(e,a,p,c),Ji(e,a,p)),p}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Yl(e,t){Cd(e,t),(e=e.alternate)&&Cd(e,t)}var Pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}Co.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ko(e,t,null,null)},Co.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){ko(null,e,null,null)}),t[Ft]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<en.length&&t!==0&&t<en[r].priority;r++);en.splice(r,0,e),r===0&&fu(e)}};function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function Vm(e,t,r,s,a){if(a){if(typeof s=="function"){var c=s;s=function(){var M=To(p);c.call(M)}}var p=Td(t,s,e,0,null,!1,!1,"",jd);return e._reactRootContainer=p,e[Ft]=p.current,Br(e.nodeType===8?e.parentNode:e),_n(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var y=s;s=function(){var M=To(E);y.call(M)}}var E=ql(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=E,e[Ft]=E.current,Br(e.nodeType===8?e.parentNode:e),_n(function(){ko(t,E,r,s)}),E}function jo(e,t,r,s,a){var c=r._reactRootContainer;if(c){var p=c;if(typeof a=="function"){var y=a;a=function(){var E=To(p);y.call(E)}}ko(t,p,e,a)}else p=Vm(r,t,e,a,s);return To(p)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Cr(t.pendingLanes);r!==0&&(ws(t,r|1),ot(t,Re()),!(ye&6)&&(sr=Re()+500,ln()))}break;case 13:_n(function(){var s=Gt(e,1);if(s!==null){var a=et();zt(s,e,1,a)}}),Yl(e,1)}},Ss=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var r=et();zt(t,e,134217728,r)}Yl(e,134217728)}},au=function(e){if(e.tag===13){var t=pn(e),r=Gt(e,t);if(r!==null){var s=et();zt(r,e,t,s)}Yl(e,t)}},uu=function(){return Pe},cu=function(e,t){var r=Pe;try{return Pe=e,t()}finally{Pe=r}},ps=function(e,t,r){switch(t){case"input":if(os(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=Gi(s);if(!a)throw Error(o(90));Et(s),os(s,a)}}}break;case"textarea":Fa(e,r);break;case"select":t=r.value,t!=null&&Dn(e,!!r.multiple,t,!1)}},Ya=$l,Xa=_n;var Gm={usingClientEntryPoint:!1,Events:[Gr,qn,Gi,Ua,qa,$l]},ri={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hm={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Ti=_o.inject(Hm),Mt=_o}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm,st.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ql(t))throw Error(o(200));return $m(e,t,null,r)},st.createRoot=function(e,t){if(!Ql(e))throw Error(o(299));var r=!1,s="",a=Pd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ql(e,1,!1,null,null,r,!1,s,a),e[Ft]=t.current,Br(e.nodeType===8?e.parentNode:e),new Xl(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return _n(e)},st.hydrate=function(e,t,r){if(!Po(t))throw Error(o(200));return jo(null,e,t,!0,r)},st.hydrateRoot=function(e,t,r){if(!Ql(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,a=!1,c="",p=Pd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=Td(t,null,e,1,r??null,a,!1,c,p),e[Ft]=t.current,Br(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Co(t)},st.render=function(e,t,r){if(!Po(t))throw Error(o(200));return jo(null,e,t,!1,r)},st.unmountComponentAtNode=function(e){if(!Po(e))throw Error(o(40));return e._reactRootContainer?(_n(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1},st.unstable_batchedUpdates=$l,st.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Po(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return jo(e,t,r,!1,s)},st.version="18.3.1-next-f1338f8080-20240426",st}var Nd;function Jm(){if(Nd)return Jl.exports;Nd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Jl.exports=Zm(),Jl.exports}var Rd;function eh(){if(Rd)return zo;Rd=1;var i=Jm();return zo.createRoot=i.createRoot,zo.hydrateRoot=i.hydrateRoot,zo}var th=eh(),lt=function(){return lt=Object.assign||function(n){for(var o,l=1,u=arguments.length;l<u;l++){o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(n[d]=o[d])}return n},lt.apply(this,arguments)};function pi(i,n,o){if(o||arguments.length===2)for(var l=0,u=n.length,d;l<u;l++)(d||!(l in n))&&(d||(d=Array.prototype.slice.call(n,0,l)),d[l]=n[l]);return i.concat(d||Array.prototype.slice.call(n))}var be="-ms-",di="-moz-",Ce="-webkit-",lf="comm",Ko="rule",_a="decl",nh="@import",af="@keyframes",rh="@layer",uf=Math.abs,za=String.fromCharCode,ha=Object.assign;function ih(i,n){return We(i,0)^45?(((n<<2^We(i,0))<<2^We(i,1))<<2^We(i,2))<<2^We(i,3):0}function cf(i){return i.trim()}function Xt(i,n){return(i=n.exec(i))?i[0]:i}function fe(i,n,o){return i.replace(n,o)}function Ro(i,n,o){return i.indexOf(n,o)}function We(i,n){return i.charCodeAt(n)|0}function dr(i,n,o){return i.slice(n,o)}function Rt(i){return i.length}function df(i){return i.length}function ci(i,n){return n.push(i),i}function oh(i,n){return i.map(n).join("")}function Dd(i,n){return i.filter(function(o){return!Xt(o,n)})}var Zo=1,fr=1,ff=0,St=0,Fe=0,gr="";function Jo(i,n,o,l,u,d,m,h){return{value:i,root:n,parent:o,type:l,props:u,children:d,line:Zo,column:fr,length:m,return:"",siblings:h}}function vn(i,n){return ha(Jo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function ar(i){for(;i.root;)i=vn(i.root,{children:[i]});ci(i,i.siblings)}function sh(){return Fe}function lh(){return Fe=St>0?We(gr,--St):0,fr--,Fe===10&&(fr=1,Zo--),Fe}function bt(){return Fe=St<ff?We(gr,St++):0,fr++,Fe===10&&(fr=1,Zo++),Fe}function Ln(){return We(gr,St)}function Do(){return St}function es(i,n){return dr(gr,i,n)}function ga(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ah(i){return Zo=fr=1,ff=Rt(gr=i),St=0,[]}function uh(i){return gr="",i}function na(i){return cf(es(St-1,va(i===91?i+2:i===40?i+1:i)))}function ch(i){for(;(Fe=Ln())&&Fe<33;)bt();return ga(i)>2||ga(Fe)>3?"":" "}function dh(i,n){for(;--n&&bt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return es(i,Do()+(n<6&&Ln()==32&&bt()==32))}function va(i){for(;bt();)switch(Fe){case i:return St;case 34:case 39:i!==34&&i!==39&&va(Fe);break;case 40:i===41&&va(i);break;case 92:bt();break}return St}function fh(i,n){for(;bt()&&i+Fe!==57;)if(i+Fe===84&&Ln()===47)break;return"/*"+es(n,St-1)+"*"+za(i===47?i:bt())}function ph(i){for(;!ga(Ln());)bt();return es(i,St)}function mh(i){return uh(Ao("",null,null,null,[""],i=ah(i),0,[0],i))}function Ao(i,n,o,l,u,d,m,h,f){for(var S=0,v=0,w=m,C=0,j=0,I=0,N=1,F=1,b=1,k=0,x="",L=u,O=d,D=l,q=x;F;)switch(I=k,k=bt()){case 40:if(I!=108&&We(q,w-1)==58){Ro(q+=fe(na(k),"&","&\f"),"&\f",uf(S?h[S-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:q+=na(k);break;case 9:case 10:case 13:case 32:q+=ch(I);break;case 92:q+=dh(Do()-1,7);continue;case 47:switch(Ln()){case 42:case 47:ci(hh(fh(bt(),Do()),n,o,f),f);break;default:q+="/"}break;case 123*N:h[S++]=Rt(q)*b;case 125*N:case 59:case 0:switch(k){case 0:case 125:F=0;case 59+v:b==-1&&(q=fe(q,/\f/g,"")),j>0&&Rt(q)-w&&ci(j>32?Fd(q+";",l,o,w-1,f):Fd(fe(q," ","")+";",l,o,w-2,f),f);break;case 59:q+=";";default:if(ci(D=Ad(q,n,o,S,v,u,h,x,L=[],O=[],w,d),d),k===123)if(v===0)Ao(q,n,D,D,L,d,w,h,O);else switch(C===99&&We(q,3)===110?100:C){case 100:case 108:case 109:case 115:Ao(i,D,D,l&&ci(Ad(i,D,D,0,0,u,h,x,u,L=[],w,O),O),u,O,w,h,l?L:O);break;default:Ao(q,D,D,D,[""],O,0,h,O)}}S=v=j=0,N=b=1,x=q="",w=m;break;case 58:w=1+Rt(q),j=I;default:if(N<1){if(k==123)--N;else if(k==125&&N++==0&&lh()==125)continue}switch(q+=za(k),k*N){case 38:b=v>0?1:(q+="\f",-1);break;case 44:h[S++]=(Rt(q)-1)*b,b=1;break;case 64:Ln()===45&&(q+=na(bt())),C=Ln(),v=w=Rt(x=q+=ph(Do())),k++;break;case 45:I===45&&Rt(q)==2&&(N=0)}}return d}function Ad(i,n,o,l,u,d,m,h,f,S,v,w){for(var C=u-1,j=u===0?d:[""],I=df(j),N=0,F=0,b=0;N<l;++N)for(var k=0,x=dr(i,C+1,C=uf(F=m[N])),L=i;k<I;++k)(L=cf(F>0?j[k]+" "+x:fe(x,/&\f/g,j[k])))&&(f[b++]=L);return Jo(i,n,o,u===0?Ko:h,f,S,v,w)}function hh(i,n,o,l){return Jo(i,n,o,lf,za(sh()),dr(i,2,-2),0,l)}function Fd(i,n,o,l,u){return Jo(i,n,o,_a,dr(i,0,l),dr(i,l+1,-1),l,u)}function pf(i,n,o){switch(ih(i,n)){case 5103:return Ce+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+i+i;case 4789:return di+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+i+di+i+be+i+i;case 5936:switch(We(i,n+11)){case 114:return Ce+i+be+fe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ce+i+be+fe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ce+i+be+fe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Ce+i+be+i+i;case 6165:return Ce+i+be+"flex-"+i+i;case 5187:return Ce+i+fe(i,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+be+"flex-$1$2")+i;case 5443:return Ce+i+be+"flex-item-"+fe(i,/flex-|-self/g,"")+(Xt(i,/flex-|baseline/)?"":be+"grid-row-"+fe(i,/flex-|-self/g,""))+i;case 4675:return Ce+i+be+"flex-line-pack"+fe(i,/align-content|flex-|-self/g,"")+i;case 5548:return Ce+i+be+fe(i,"shrink","negative")+i;case 5292:return Ce+i+be+fe(i,"basis","preferred-size")+i;case 6060:return Ce+"box-"+fe(i,"-grow","")+Ce+i+be+fe(i,"grow","positive")+i;case 4554:return Ce+fe(i,/([^-])(transform)/g,"$1"+Ce+"$2")+i;case 6187:return fe(fe(fe(i,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),i,"")+i;case 5495:case 3959:return fe(i,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return fe(fe(i,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+i+i;case 4200:if(!Xt(i,/flex-|baseline/))return be+"grid-column-align"+dr(i,n)+i;break;case 2592:case 3360:return be+fe(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(l,u){return n=u,Xt(l.props,/grid-\w+-end/)})?~Ro(i+(o=o[n].value),"span",0)?i:be+fe(i,"-start","")+i+be+"grid-row-span:"+(~Ro(o,"span",0)?Xt(o,/\d+/):+Xt(o,/\d+/)-+Xt(i,/\d+/))+";":be+fe(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(l){return Xt(l.props,/grid-\w+-start/)})?i:be+fe(fe(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return fe(i,/(.+)-inline(.+)/,Ce+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(i)-1-n>6)switch(We(i,n+1)){case 109:if(We(i,n+4)!==45)break;case 102:return fe(i,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+di+(We(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~Ro(i,"stretch",0)?pf(fe(i,"stretch","fill-available"),n,o)+i:i}break;case 5152:case 5920:return fe(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,d,m,h,f,S){return be+u+":"+d+S+(m?be+u+"-span:"+(h?f:+f-+d)+S:"")+i});case 4949:if(We(i,n+6)===121)return fe(i,":",":"+Ce)+i;break;case 6444:switch(We(i,We(i,14)===45?18:11)){case 120:return fe(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(We(i,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+be+"$2box$3")+i;case 100:return fe(i,":",":"+be)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(i,"scroll-","scroll-snap-")+i}return i}function Vo(i,n){for(var o="",l=0;l<i.length;l++)o+=n(i[l],l,i,n)||"";return o}function gh(i,n,o,l){switch(i.type){case rh:if(i.children.length)break;case nh:case _a:return i.return=i.return||i.value;case lf:return"";case af:return i.return=i.value+"{"+Vo(i.children,l)+"}";case Ko:if(!Rt(i.value=i.props.join(",")))return""}return Rt(o=Vo(i.children,l))?i.return=i.value+"{"+o+"}":""}function vh(i){var n=df(i);return function(o,l,u,d){for(var m="",h=0;h<n;h++)m+=i[h](o,l,u,d)||"";return m}}function yh(i){return function(n){n.root||(n=n.return)&&i(n)}}function xh(i,n,o,l){if(i.length>-1&&!i.return)switch(i.type){case _a:i.return=pf(i.value,i.length,o);return;case af:return Vo([vn(i,{value:fe(i.value,"@","@"+Ce)})],l);case Ko:if(i.length)return oh(o=i.props,function(u){switch(Xt(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ar(vn(i,{props:[fe(u,/:(read-\w+)/,":"+di+"$1")]})),ar(vn(i,{props:[u]})),ha(i,{props:Dd(o,l)});break;case"::placeholder":ar(vn(i,{props:[fe(u,/:(plac\w+)/,":"+Ce+"input-$1")]})),ar(vn(i,{props:[fe(u,/:(plac\w+)/,":"+di+"$1")]})),ar(vn(i,{props:[fe(u,/:(plac\w+)/,be+"input-$1")]})),ar(vn(i,{props:[u]})),ha(i,{props:Dd(o,l)});break}return""})}}var wh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft={},pr=typeof process<"u"&&ft!==void 0&&(ft.REACT_APP_SC_ATTR||ft.SC_ATTR)||"data-styled",mf="active",hf="data-styled-version",ts="6.1.13",ba=`/*!sc*/
`,Go=typeof window<"u"&&"HTMLElement"in window,Sh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==""?ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.SC_DISABLE_SPEEDY!==void 0&&ft.SC_DISABLE_SPEEDY!==""&&ft.SC_DISABLE_SPEEDY!=="false"&&ft.SC_DISABLE_SPEEDY),ns=Object.freeze([]),mr=Object.freeze({});function Eh(i,n,o){return o===void 0&&(o=mr),i.theme!==o.theme&&i.theme||n||o.theme}var gf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Th=/(^-|-$)/g;function Bd(i){return i.replace(kh,"-").replace(Th,"")}var Ch=/(a)(d)/gi,bo=52,$d=function(i){return String.fromCharCode(i+(i>25?39:97))};function ya(i){var n,o="";for(n=Math.abs(i);n>bo;n=n/bo|0)o=$d(n%bo)+o;return($d(n%bo)+o).replace(Ch,"$1-$2")}var ra,vf=5381,ur=function(i,n){for(var o=n.length;o;)i=33*i^n.charCodeAt(--o);return i},yf=function(i){return ur(vf,i)};function xf(i){return ya(yf(i)>>>0)}function Ph(i){return i.displayName||i.name||"Component"}function ia(i){return typeof i=="string"&&!0}var wf=typeof Symbol=="function"&&Symbol.for,Sf=wf?Symbol.for("react.memo"):60115,jh=wf?Symbol.for("react.forward_ref"):60112,_h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ef={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bh=((ra={})[jh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ra[Sf]=Ef,ra);function Vd(i){return("type"in(n=i)&&n.type.$$typeof)===Sf?Ef:"$$typeof"in i?bh[i.$$typeof]:_h;var n}var Mh=Object.defineProperty,Ih=Object.getOwnPropertyNames,Gd=Object.getOwnPropertySymbols,Lh=Object.getOwnPropertyDescriptor,Oh=Object.getPrototypeOf,Hd=Object.prototype;function kf(i,n,o){if(typeof n!="string"){if(Hd){var l=Oh(n);l&&l!==Hd&&kf(i,l,o)}var u=Ih(n);Gd&&(u=u.concat(Gd(n)));for(var d=Vd(i),m=Vd(n),h=0;h<u.length;++h){var f=u[h];if(!(f in zh||o&&o[f]||m&&f in m||d&&f in d)){var S=Lh(n,f);try{Mh(i,f,S)}catch{}}}}return i}function hr(i){return typeof i=="function"}function Ma(i){return typeof i=="object"&&"styledComponentId"in i}function In(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function xa(i,n){if(i.length===0)return"";for(var o=i[0],l=1;l<i.length;l++)o+=i[l];return o}function mi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function wa(i,n,o){if(o===void 0&&(o=!1),!o&&!mi(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var l=0;l<n.length;l++)i[l]=wa(i[l],n[l]);else if(mi(n))for(var l in n)i[l]=wa(i[l],n[l]);return i}function Ia(i,n){Object.defineProperty(i,"toString",{value:n})}function hi(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Nh=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var o=0,l=0;l<n;l++)o+=this.groupSizes[l];return o},i.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,d=u;n>=d;)if((d<<=1)<0)throw hi(16,"".concat(n));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var m=u;m<d;m++)this.groupSizes[m]=0}for(var h=this.indexOfGroup(n+1),f=(m=0,o.length);m<f;m++)this.tag.insertRule(h,o[m])&&(this.groupSizes[n]++,h++)},i.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],l=this.indexOfGroup(n),u=l+o;this.groupSizes[n]=0;for(var d=l;d<u;d++)this.tag.deleteRule(l)}},i.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var l=this.groupSizes[n],u=this.indexOfGroup(n),d=u+l,m=u;m<d;m++)o+="".concat(this.tag.getRule(m)).concat(ba);return o},i}(),Fo=new Map,Ho=new Map,Bo=1,Mo=function(i){if(Fo.has(i))return Fo.get(i);for(;Ho.has(Bo);)Bo++;var n=Bo++;return Fo.set(i,n),Ho.set(n,i),n},Rh=function(i,n){Bo=n+1,Fo.set(i,n),Ho.set(n,i)},Dh="style[".concat(pr,"][").concat(hf,'="').concat(ts,'"]'),Ah=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fh=function(i,n,o){for(var l,u=o.split(","),d=0,m=u.length;d<m;d++)(l=u[d])&&i.registerName(n,l)},Bh=function(i,n){for(var o,l=((o=n.textContent)!==null&&o!==void 0?o:"").split(ba),u=[],d=0,m=l.length;d<m;d++){var h=l[d].trim();if(h){var f=h.match(Ah);if(f){var S=0|parseInt(f[1],10),v=f[2];S!==0&&(Rh(v,S),Fh(i,v,f[3]),i.getTag().insertRules(S,u)),u.length=0}else u.push(h)}}},Wd=function(i){for(var n=document.querySelectorAll(Dh),o=0,l=n.length;o<l;o++){var u=n[o];u&&u.getAttribute(pr)!==mf&&(Bh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function $h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tf=function(i){var n=document.head,o=i||n,l=document.createElement("style"),u=function(h){var f=Array.from(h.querySelectorAll("style[".concat(pr,"]")));return f[f.length-1]}(o),d=u!==void 0?u.nextSibling:null;l.setAttribute(pr,mf),l.setAttribute(hf,ts);var m=$h();return m&&l.setAttribute("nonce",m),o.insertBefore(l,d),l},Vh=function(){function i(n){this.element=Tf(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,u=0,d=l.length;u<d;u++){var m=l[u];if(m.ownerNode===o)return m}throw hi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},i}(),Gh=function(){function i(n){this.element=Tf(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var l=document.createTextNode(o);return this.element.insertBefore(l,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),Hh=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),Ud=Go,Wh={isServer:!Go,useCSSOMInjection:!Sh},Cf=function(){function i(n,o,l){n===void 0&&(n=mr),o===void 0&&(o={});var u=this;this.options=lt(lt({},Wh),n),this.gs=o,this.names=new Map(l),this.server=!!n.isServer,!this.server&&Go&&Ud&&(Ud=!1,Wd(this)),Ia(this,function(){return function(d){for(var m=d.getTag(),h=m.length,f="",S=function(w){var C=function(b){return Ho.get(b)}(w);if(C===void 0)return"continue";var j=d.names.get(C),I=m.getGroup(w);if(j===void 0||!j.size||I.length===0)return"continue";var N="".concat(pr,".g").concat(w,'[id="').concat(C,'"]'),F="";j!==void 0&&j.forEach(function(b){b.length>0&&(F+="".concat(b,","))}),f+="".concat(I).concat(N,'{content:"').concat(F,'"}').concat(ba)},v=0;v<h;v++)S(v);return f}(u)})}return i.registerId=function(n){return Mo(n)},i.prototype.rehydrate=function(){!this.server&&Go&&Wd(this)},i.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new i(lt(lt({},this.options),n),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var l=o.useCSSOMInjection,u=o.target;return o.isServer?new Hh(u):l?new Vh(u):new Gh(u)}(this.options),new Nh(n)));var n},i.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},i.prototype.registerName=function(n,o){if(Mo(n),this.names.has(n))this.names.get(n).add(o);else{var l=new Set;l.add(o),this.names.set(n,l)}},i.prototype.insertRules=function(n,o,l){this.registerName(n,o),this.getTag().insertRules(Mo(n),l)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(Mo(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Uh=/&/g,qh=/^\s*\/\/.*$/gm;function Pf(i,n){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(l){return"".concat(n," ").concat(l)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Pf(o.children,n)),o})}function Yh(i){var n,o,l,u=mr,d=u.options,m=d===void 0?mr:d,h=u.plugins,f=h===void 0?ns:h,S=function(C,j,I){return I.startsWith(o)&&I.endsWith(o)&&I.replaceAll(o,"").length>0?".".concat(n):C},v=f.slice();v.push(function(C){C.type===Ko&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(Uh,o).replace(l,S))}),m.prefix&&v.push(xh),v.push(gh);var w=function(C,j,I,N){j===void 0&&(j=""),I===void 0&&(I=""),N===void 0&&(N="&"),n=N,o=j,l=new RegExp("\\".concat(o,"\\b"),"g");var F=C.replace(qh,""),b=mh(I||j?"".concat(I," ").concat(j," { ").concat(F," }"):F);m.namespace&&(b=Pf(b,m.namespace));var k=[];return Vo(b,vh(v.concat(yh(function(x){return k.push(x)})))),k};return w.hash=f.length?f.reduce(function(C,j){return j.name||hi(15),ur(C,j.name)},vf).toString():"",w}var Xh=new Cf,Sa=Yh(),jf=Te.createContext({shouldForwardProp:void 0,styleSheet:Xh,stylis:Sa});jf.Consumer;Te.createContext(void 0);function qd(){return Ee.useContext(jf)}var _f=function(){function i(n,o){var l=this;this.inject=function(u,d){d===void 0&&(d=Sa);var m=l.name+d.hash;u.hasNameForId(l.id,m)||u.insertRules(l.id,m,d(l.rules,m,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,Ia(this,function(){throw hi(12,String(l.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=Sa),this.name+n.hash},i}(),Qh=function(i){return i>="A"&&i<="Z"};function Yd(i){for(var n="",o=0;o<i.length;o++){var l=i[o];if(o===1&&l==="-"&&i[0]==="-")return i;Qh(l)?n+="-"+l.toLowerCase():n+=l}return n.startsWith("ms-")?"-"+n:n}var zf=function(i){return i==null||i===!1||i===""},bf=function(i){var n,o,l=[];for(var u in i){var d=i[u];i.hasOwnProperty(u)&&!zf(d)&&(Array.isArray(d)&&d.isCss||hr(d)?l.push("".concat(Yd(u),":"),d,";"):mi(d)?l.push.apply(l,pi(pi(["".concat(u," {")],bf(d),!1),["}"],!1)):l.push("".concat(Yd(u),": ").concat((n=u,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in wh||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return l};function On(i,n,o,l){if(zf(i))return[];if(Ma(i))return[".".concat(i.styledComponentId)];if(hr(i)){if(!hr(d=i)||d.prototype&&d.prototype.isReactComponent||!n)return[i];var u=i(n);return On(u,n,o,l)}var d;return i instanceof _f?o?(i.inject(o,l),[i.getName(l)]):[i]:mi(i)?bf(i):Array.isArray(i)?Array.prototype.concat.apply(ns,i.map(function(m){return On(m,n,o,l)})):[i.toString()]}function Kh(i){for(var n=0;n<i.length;n+=1){var o=i[n];if(hr(o)&&!Ma(o))return!1}return!0}var Zh=yf(ts),Jh=function(){function i(n,o,l){this.rules=n,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Kh(n),this.componentId=o,this.baseHash=ur(Zh,o),this.baseStyle=l,Cf.registerId(o)}return i.prototype.generateAndInjectStyles=function(n,o,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=In(u,this.staticRulesId);else{var d=xa(On(this.rules,n,o,l)),m=ya(ur(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,m)){var h=l(d,".".concat(m),void 0,this.componentId);o.insertRules(this.componentId,m,h)}u=In(u,m),this.staticRulesId=m}else{for(var f=ur(this.baseHash,l.hash),S="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")S+=w;else if(w){var C=xa(On(w,n,o,l));f=ur(f,C+v),S+=C}}if(S){var j=ya(f>>>0);o.hasNameForId(this.componentId,j)||o.insertRules(this.componentId,j,l(S,".".concat(j),void 0,this.componentId)),u=In(u,j)}}return u},i}(),Mf=Te.createContext(void 0);Mf.Consumer;var oa={};function eg(i,n,o){var l=Ma(i),u=i,d=!ia(i),m=n.attrs,h=m===void 0?ns:m,f=n.componentId,S=f===void 0?function(L,O){var D=typeof L!="string"?"sc":Bd(L);oa[D]=(oa[D]||0)+1;var q="".concat(D,"-").concat(xf(ts+D+oa[D]));return O?"".concat(O,"-").concat(q):q}(n.displayName,n.parentComponentId):f,v=n.displayName,w=v===void 0?function(L){return ia(L)?"styled.".concat(L):"Styled(".concat(Ph(L),")")}(i):v,C=n.displayName&&n.componentId?"".concat(Bd(n.displayName),"-").concat(n.componentId):n.componentId||S,j=l&&u.attrs?u.attrs.concat(h).filter(Boolean):h,I=n.shouldForwardProp;if(l&&u.shouldForwardProp){var N=u.shouldForwardProp;if(n.shouldForwardProp){var F=n.shouldForwardProp;I=function(L,O){return N(L,O)&&F(L,O)}}else I=N}var b=new Jh(o,C,l?u.componentStyle:void 0);function k(L,O){return function(D,q,Q){var V=D.attrs,G=D.componentStyle,K=D.defaultProps,ee=D.foldedComponentIds,X=D.styledComponentId,ie=D.target,ae=Te.useContext(Mf),ge=qd(),xe=D.shouldForwardProp||ge.shouldForwardProp,A=Eh(q,ae,K)||mr,Y=function(he,pe,ke){for(var ve,we=lt(lt({},pe),{className:void 0,theme:ke}),Ue=0;Ue<he.length;Ue+=1){var At=hr(ve=he[Ue])?ve(we):ve;for(var Et in At)we[Et]=Et==="className"?In(we[Et],At[Et]):Et==="style"?lt(lt({},we[Et]),At[Et]):At[Et]}return pe.className&&(we.className=In(we.className,pe.className)),we}(V,q,A),W=Y.as||ie,P={};for(var R in Y)Y[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&Y.theme===A||(R==="forwardedAs"?P.as=Y.forwardedAs:xe&&!xe(R,W)||(P[R]=Y[R]));var ce=function(he,pe){var ke=qd(),ve=he.generateAndInjectStyles(pe,ke.styleSheet,ke.stylis);return ve}(G,Y),de=In(ee,X);return ce&&(de+=" "+ce),Y.className&&(de+=" "+Y.className),P[ia(W)&&!gf.has(W)?"class":"className"]=de,P.ref=Q,Ee.createElement(W,P)}(x,L,O)}k.displayName=w;var x=Te.forwardRef(k);return x.attrs=j,x.componentStyle=b,x.displayName=w,x.shouldForwardProp=I,x.foldedComponentIds=l?In(u.foldedComponentIds,u.styledComponentId):"",x.styledComponentId=C,x.target=l?u.target:i,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=l?function(O){for(var D=[],q=1;q<arguments.length;q++)D[q-1]=arguments[q];for(var Q=0,V=D;Q<V.length;Q++)wa(O,V[Q],!0);return O}({},u.defaultProps,L):L}}),Ia(x,function(){return".".concat(x.styledComponentId)}),d&&kf(x,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Xd(i,n){for(var o=[i[0]],l=0,u=n.length;l<u;l+=1)o.push(n[l],i[l+1]);return o}var Qd=function(i){return Object.assign(i,{isCss:!0})};function If(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(hr(i)||mi(i))return Qd(On(Xd(ns,pi([i],n,!0))));var l=i;return n.length===0&&l.length===1&&typeof l[0]=="string"?On(l):Qd(On(Xd(l,n)))}function Ea(i,n,o){if(o===void 0&&(o=mr),!n)throw hi(1,n);var l=function(u){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return i(n,o,If.apply(void 0,pi([u],d,!1)))};return l.attrs=function(u){return Ea(i,n,lt(lt({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return Ea(i,n,lt(lt({},o),u))},l}var Lf=function(i){return Ea(eg,i)},oe=Lf;gf.forEach(function(i){oe[i]=Lf(i)});function tg(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var l=xa(If.apply(void 0,pi([i],n,!1))),u=xf(l);return new _f(u,l)}const ng=oe.header`
  width: 95%;
  max-width: 1140px;
  height: 8vh;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  border-radius: 0 0 15px 15px;
  background-color: #00000050;
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  /* Transição suave para subir/descer */
  transition: transform 0.4s ease;

  /* Quando scrolling = true, o header sobe (-100%) */
  /* Quando scrolling = false, ele volta para 0 */
  transform: ${({scrolling:i})=>i?"translateX(-50%) translateY(-100%)":"translateX(-50%) translateY(0)"};
`,rg=oe.div`
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
`;function ig(){const[i,n]=Ee.useState(!1),o=Ee.useRef(null);return Ee.useEffect(()=>{const l=()=>{n(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n(!1)},1e3)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),o.current&&clearTimeout(o.current)}},[]),g.jsx(ng,{scrolling:i,children:g.jsx(rg,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",alt:"logo"})})})})}const og=oe.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        border-radius: 10px;
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
    
`,vr=()=>g.jsx(g.Fragment,{children:g.jsxs(og,{children:[g.jsx("b",{children:"Solicitar orçamento"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png"})]})}),sg=oe.button`
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
    
`,lg=()=>g.jsx(g.Fragment,{children:g.jsx(sg,{children:g.jsx("b",{children:"Saber mais"})})}),ag=oe.div`
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
`,ug=oe.section`
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
`,cg=oe.div`
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
            font-weight: 100;
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
`,dg=oe.div`
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
`,fg=oe.div`
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
            font-weight: 500;
            background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 24px;
        }

        & > img {
            transform: rotate(45deg);
            width: 26px;
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
`,pg=()=>g.jsxs(g.Fragment,{children:[g.jsx(ag,{}),g.jsxs(ug,{children:[g.jsxs(cg,{children:[g.jsxs("h1",{children:["Já imaginou ter um ",g.jsx("b",{children:"site de altíssimo"})," padrão?"]}),g.jsx("p",{children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),g.jsxs("div",{children:[g.jsx(vr,{}),g.jsx(lg,{})]}),g.jsx("span",{children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),g.jsxs(fg,{children:[g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{}),g.jsxs("article",{children:[g.jsx("span",{children:"4.9"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png"})]})]})]}),g.jsx(dg,{children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png"})})]})]});var Of={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kd=Te.createContext&&Te.createContext(Of),mg=["attr","size","title"];function hg(i,n){if(i==null)return{};var o=gg(i,n),l,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);for(u=0;u<d.length;u++)l=d[u],!(n.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(o[l]=i[l])}return o}function gg(i,n){if(i==null)return{};var o={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){if(n.indexOf(l)>=0)continue;o[l]=i[l]}return o}function Wo(){return Wo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},Wo.apply(this,arguments)}function Zd(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,l)}return o}function Uo(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?Zd(Object(o),!0).forEach(function(l){vg(i,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):Zd(Object(o)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(o,l))})}return i}function vg(i,n,o){return n=yg(n),n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function yg(i){var n=xg(i,"string");return typeof n=="symbol"?n:n+""}function xg(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var l=o.call(i,n||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function Nf(i){return i&&i.map((n,o)=>Te.createElement(n.tag,Uo({key:o},n.attr),Nf(n.child)))}function gi(i){return n=>Te.createElement(wg,Wo({attr:Uo({},i.attr)},n),Nf(i.child))}function wg(i){var n=o=>{var{attr:l,size:u,title:d}=i,m=hg(i,mg),h=u||o.size||"1em",f;return o.className&&(f=o.className),i.className&&(f=(f?f+" ":"")+i.className),Te.createElement("svg",Wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,m,{className:f,style:Uo(Uo({color:i.color||o.color},o.style),i.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&Te.createElement("title",null,d),i.children)};return Kd!==void 0?Te.createElement(Kd.Consumer,null,o=>n(o)):n(Of)}function Rf(i){return gi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(i)}function Sg(i){return gi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function Io(i){return gi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(i)}function Eg(i){return gi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(i)}function kg(i){return gi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(i)}const Tg=oe.div`
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

`,oi=({title:i,description:n})=>g.jsxs(Tg,{children:[g.jsx("h1",{children:i}),g.jsx("p",{children:n}),g.jsx(vr,{})]}),Cg=oe.div`
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

`,si=({title:i,description:n})=>g.jsxs(Cg,{children:[g.jsx("h1",{children:i}),g.jsx("p",{children:n}),g.jsx(vr,{})]});function Jd(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function La(i,n){i===void 0&&(i={}),n===void 0&&(n={}),Object.keys(n).forEach(o=>{typeof i[o]>"u"?i[o]=n[o]:Jd(n[o])&&Jd(i[o])&&Object.keys(n[o]).length>0&&La(i[o],n[o])})}const Df={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Qt(){const i=typeof document<"u"?document:{};return La(i,Df),i}const Pg={document:Df,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function mt(){const i=typeof window<"u"?window:{};return La(i,Pg),i}function jg(i){return i===void 0&&(i=""),i.trim().split(" ").filter(n=>!!n.trim())}function _g(i){const n=i;Object.keys(n).forEach(o=>{try{n[o]=null}catch{}try{delete n[o]}catch{}})}function ka(i,n){return n===void 0&&(n=0),setTimeout(i,n)}function Nn(){return Date.now()}function zg(i){const n=mt();let o;return n.getComputedStyle&&(o=n.getComputedStyle(i,null)),!o&&i.currentStyle&&(o=i.currentStyle),o||(o=i.style),o}function bg(i,n){n===void 0&&(n="x");const o=mt();let l,u,d;const m=zg(i);return o.WebKitCSSMatrix?(u=m.transform||m.webkitTransform,u.split(",").length>6&&(u=u.split(", ").map(h=>h.replace(",",".")).join(", ")),d=new o.WebKitCSSMatrix(u==="none"?"":u)):(d=m.MozTransform||m.OTransform||m.MsTransform||m.msTransform||m.transform||m.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),l=d.toString().split(",")),n==="x"&&(o.WebKitCSSMatrix?u=d.m41:l.length===16?u=parseFloat(l[12]):u=parseFloat(l[4])),n==="y"&&(o.WebKitCSSMatrix?u=d.m42:l.length===16?u=parseFloat(l[13]):u=parseFloat(l[5])),u||0}function Lo(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Mg(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function pt(){const i=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let o=1;o<arguments.length;o+=1){const l=o<0||arguments.length<=o?void 0:arguments[o];if(l!=null&&!Mg(l)){const u=Object.keys(Object(l)).filter(d=>n.indexOf(d)<0);for(let d=0,m=u.length;d<m;d+=1){const h=u[d],f=Object.getOwnPropertyDescriptor(l,h);f!==void 0&&f.enumerable&&(Lo(i[h])&&Lo(l[h])?l[h].__swiper__?i[h]=l[h]:pt(i[h],l[h]):!Lo(i[h])&&Lo(l[h])?(i[h]={},l[h].__swiper__?i[h]=l[h]:pt(i[h],l[h])):i[h]=l[h])}}}return i}function Oo(i,n,o){i.style.setProperty(n,o)}function Af(i){let{swiper:n,targetPosition:o,side:l}=i;const u=mt(),d=-n.translate;let m=null,h;const f=n.params.speed;n.wrapperEl.style.scrollSnapType="none",u.cancelAnimationFrame(n.cssModeFrameID);const S=o>d?"next":"prev",v=(C,j)=>S==="next"&&C>=j||S==="prev"&&C<=j,w=()=>{h=new Date().getTime(),m===null&&(m=h);const C=Math.max(Math.min((h-m)/f,1),0),j=.5-Math.cos(C*Math.PI)/2;let I=d+j*(o-d);if(v(I,o)&&(I=o),n.wrapperEl.scrollTo({[l]:I}),v(I,o)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[l]:I})}),u.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=u.requestAnimationFrame(w)};w()}function Dt(i,n){n===void 0&&(n="");const o=[...i.children];return i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),n?o.filter(l=>l.matches(n)):o}function Ig(i,n){const o=n.contains(i);return!o&&n instanceof HTMLSlotElement?[...n.assignedElements()].includes(i):o}function qo(i){try{console.warn(i);return}catch{}}function Yo(i,n){n===void 0&&(n=[]);const o=document.createElement(i);return o.classList.add(...Array.isArray(n)?n:jg(n)),o}function Lg(i,n){const o=[];for(;i.previousElementSibling;){const l=i.previousElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function Og(i,n){const o=[];for(;i.nextElementSibling;){const l=i.nextElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function yn(i,n){return mt().getComputedStyle(i,null).getPropertyValue(n)}function Xo(i){let n=i,o;if(n){for(o=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(o+=1);return o}}function Ff(i,n){const o=[];let l=i.parentElement;for(;l;)n?l.matches(n)&&o.push(l):o.push(l),l=l.parentElement;return o}function sa(i,n){function o(l){l.target===i&&(n.call(i,l),i.removeEventListener("transitionend",o))}n&&i.addEventListener("transitionend",o)}function Ta(i,n,o){const l=mt();return i[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}function qt(i){return(Array.isArray(i)?i:[i]).filter(n=>!!n)}let la;function Ng(){const i=mt(),n=Qt();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&n instanceof i.DocumentTouch)}}function Bf(){return la||(la=Ng()),la}let aa;function Rg(i){let{userAgent:n}=i===void 0?{}:i;const o=Bf(),l=mt(),u=l.navigator.platform,d=n||l.navigator.userAgent,m={ios:!1,android:!1},h=l.screen.width,f=l.screen.height,S=d.match(/(Android);?[\s\/]+([\d.]+)?/);let v=d.match(/(iPad).*OS\s([\d_]+)/);const w=d.match(/(iPod)(.*OS\s([\d_]+))?/),C=!v&&d.match(/(iPhone\sOS|iOS)\s([\d_]+)/),j=u==="Win32";let I=u==="MacIntel";const N=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!v&&I&&o.touch&&N.indexOf(`${h}x${f}`)>=0&&(v=d.match(/(Version)\/([\d.]+)/),v||(v=[0,1,"13_0_0"]),I=!1),S&&!j&&(m.os="android",m.android=!0),(v||C||w)&&(m.os="ios",m.ios=!0),m}function $f(i){return i===void 0&&(i={}),aa||(aa=Rg(i)),aa}let ua;function Dg(){const i=mt(),n=$f();let o=!1;function l(){const h=i.navigator.userAgent.toLowerCase();return h.indexOf("safari")>=0&&h.indexOf("chrome")<0&&h.indexOf("android")<0}if(l()){const h=String(i.navigator.userAgent);if(h.includes("Version/")){const[f,S]=h.split("Version/")[1].split(" ")[0].split(".").map(v=>Number(v));o=f<16||f===16&&S<2}}const u=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),d=l(),m=d||u&&n.ios;return{isSafari:o||d,needPerspectiveFix:o,need3dFix:m,isWebView:u}}function Ag(){return ua||(ua=Dg()),ua}function Fg(i){let{swiper:n,on:o,emit:l}=i;const u=mt();let d=null,m=null;const h=()=>{!n||n.destroyed||!n.initialized||(l("beforeResize"),l("resize"))},f=()=>{!n||n.destroyed||!n.initialized||(d=new ResizeObserver(w=>{m=u.requestAnimationFrame(()=>{const{width:C,height:j}=n;let I=C,N=j;w.forEach(F=>{let{contentBoxSize:b,contentRect:k,target:x}=F;x&&x!==n.el||(I=k?k.width:(b[0]||b).inlineSize,N=k?k.height:(b[0]||b).blockSize)}),(I!==C||N!==j)&&h()})}),d.observe(n.el))},S=()=>{m&&u.cancelAnimationFrame(m),d&&d.unobserve&&n.el&&(d.unobserve(n.el),d=null)},v=()=>{!n||n.destroyed||!n.initialized||l("orientationchange")};o("init",()=>{if(n.params.resizeObserver&&typeof u.ResizeObserver<"u"){f();return}u.addEventListener("resize",h),u.addEventListener("orientationchange",v)}),o("destroy",()=>{S(),u.removeEventListener("resize",h),u.removeEventListener("orientationchange",v)})}function Bg(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const d=[],m=mt(),h=function(v,w){w===void 0&&(w={});const C=m.MutationObserver||m.WebkitMutationObserver,j=new C(I=>{if(n.__preventObserver__)return;if(I.length===1){u("observerUpdate",I[0]);return}const N=function(){u("observerUpdate",I[0])};m.requestAnimationFrame?m.requestAnimationFrame(N):m.setTimeout(N,0)});j.observe(v,{attributes:typeof w.attributes>"u"?!0:w.attributes,childList:n.isElement||(typeof w.childList>"u"?!0:w).childList,characterData:typeof w.characterData>"u"?!0:w.characterData}),d.push(j)},f=()=>{if(n.params.observer){if(n.params.observeParents){const v=Ff(n.hostEl);for(let w=0;w<v.length;w+=1)h(v[w])}h(n.hostEl,{childList:n.params.observeSlideChildren}),h(n.wrapperEl,{attributes:!1})}},S=()=>{d.forEach(v=>{v.disconnect()}),d.splice(0,d.length)};o({observer:!1,observeParents:!1,observeSlideChildren:!1}),l("init",f),l("destroy",S)}var $g={on(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;const u=o?"unshift":"push";return i.split(" ").forEach(d=>{l.eventsListeners[d]||(l.eventsListeners[d]=[]),l.eventsListeners[d][u](n)}),l},once(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;function u(){l.off(i,u),u.__emitterProxy&&delete u.__emitterProxy;for(var d=arguments.length,m=new Array(d),h=0;h<d;h++)m[h]=arguments[h];n.apply(l,m)}return u.__emitterProxy=n,l.on(i,u,o)},onAny(i,n){const o=this;if(!o.eventsListeners||o.destroyed||typeof i!="function")return o;const l=n?"unshift":"push";return o.eventsAnyListeners.indexOf(i)<0&&o.eventsAnyListeners[l](i),o},offAny(i){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const o=n.eventsAnyListeners.indexOf(i);return o>=0&&n.eventsAnyListeners.splice(o,1),n},off(i,n){const o=this;return!o.eventsListeners||o.destroyed||!o.eventsListeners||i.split(" ").forEach(l=>{typeof n>"u"?o.eventsListeners[l]=[]:o.eventsListeners[l]&&o.eventsListeners[l].forEach((u,d)=>{(u===n||u.__emitterProxy&&u.__emitterProxy===n)&&o.eventsListeners[l].splice(d,1)})}),o},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let n,o,l;for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];return typeof d[0]=="string"||Array.isArray(d[0])?(n=d[0],o=d.slice(1,d.length),l=i):(n=d[0].events,o=d[0].data,l=d[0].context||i),o.unshift(l),(Array.isArray(n)?n:n.split(" ")).forEach(f=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(S=>{S.apply(l,[f,...o])}),i.eventsListeners&&i.eventsListeners[f]&&i.eventsListeners[f].forEach(S=>{S.apply(l,o)})}),i}};function Vg(){const i=this;let n,o;const l=i.el;typeof i.params.width<"u"&&i.params.width!==null?n=i.params.width:n=l.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?o=i.params.height:o=l.clientHeight,!(n===0&&i.isHorizontal()||o===0&&i.isVertical())&&(n=n-parseInt(yn(l,"padding-left")||0,10)-parseInt(yn(l,"padding-right")||0,10),o=o-parseInt(yn(l,"padding-top")||0,10)-parseInt(yn(l,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(o)&&(o=0),Object.assign(i,{width:n,height:o,size:i.isHorizontal()?n:o}))}function Gg(){const i=this;function n(G,K){return parseFloat(G.getPropertyValue(i.getDirectionLabel(K))||0)}const o=i.params,{wrapperEl:l,slidesEl:u,size:d,rtlTranslate:m,wrongRTL:h}=i,f=i.virtual&&o.virtual.enabled,S=f?i.virtual.slides.length:i.slides.length,v=Dt(u,`.${i.params.slideClass}, swiper-slide`),w=f?i.virtual.slides.length:v.length;let C=[];const j=[],I=[];let N=o.slidesOffsetBefore;typeof N=="function"&&(N=o.slidesOffsetBefore.call(i));let F=o.slidesOffsetAfter;typeof F=="function"&&(F=o.slidesOffsetAfter.call(i));const b=i.snapGrid.length,k=i.slidesGrid.length;let x=o.spaceBetween,L=-N,O=0,D=0;if(typeof d>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*d:typeof x=="string"&&(x=parseFloat(x)),i.virtualSize=-x,v.forEach(G=>{m?G.style.marginLeft="":G.style.marginRight="",G.style.marginBottom="",G.style.marginTop=""}),o.centeredSlides&&o.cssMode&&(Oo(l,"--swiper-centered-offset-before",""),Oo(l,"--swiper-centered-offset-after",""));const q=o.grid&&o.grid.rows>1&&i.grid;q?i.grid.initSlides(v):i.grid&&i.grid.unsetSlides();let Q;const V=o.slidesPerView==="auto"&&o.breakpoints&&Object.keys(o.breakpoints).filter(G=>typeof o.breakpoints[G].slidesPerView<"u").length>0;for(let G=0;G<w;G+=1){Q=0;let K;if(v[G]&&(K=v[G]),q&&i.grid.updateSlide(G,K,v),!(v[G]&&yn(K,"display")==="none")){if(o.slidesPerView==="auto"){V&&(v[G].style[i.getDirectionLabel("width")]="");const ee=getComputedStyle(K),X=K.style.transform,ie=K.style.webkitTransform;if(X&&(K.style.transform="none"),ie&&(K.style.webkitTransform="none"),o.roundLengths)Q=i.isHorizontal()?Ta(K,"width"):Ta(K,"height");else{const ae=n(ee,"width"),ge=n(ee,"padding-left"),xe=n(ee,"padding-right"),A=n(ee,"margin-left"),Y=n(ee,"margin-right"),W=ee.getPropertyValue("box-sizing");if(W&&W==="border-box")Q=ae+A+Y;else{const{clientWidth:P,offsetWidth:R}=K;Q=ae+ge+xe+A+Y+(R-P)}}X&&(K.style.transform=X),ie&&(K.style.webkitTransform=ie),o.roundLengths&&(Q=Math.floor(Q))}else Q=(d-(o.slidesPerView-1)*x)/o.slidesPerView,o.roundLengths&&(Q=Math.floor(Q)),v[G]&&(v[G].style[i.getDirectionLabel("width")]=`${Q}px`);v[G]&&(v[G].swiperSlideSize=Q),I.push(Q),o.centeredSlides?(L=L+Q/2+O/2+x,O===0&&G!==0&&(L=L-d/2-x),G===0&&(L=L-d/2-x),Math.abs(L)<1/1e3&&(L=0),o.roundLengths&&(L=Math.floor(L)),D%o.slidesPerGroup===0&&C.push(L),j.push(L)):(o.roundLengths&&(L=Math.floor(L)),(D-Math.min(i.params.slidesPerGroupSkip,D))%i.params.slidesPerGroup===0&&C.push(L),j.push(L),L=L+Q+x),i.virtualSize+=Q+x,O=Q,D+=1}}if(i.virtualSize=Math.max(i.virtualSize,d)+F,m&&h&&(o.effect==="slide"||o.effect==="coverflow")&&(l.style.width=`${i.virtualSize+x}px`),o.setWrapperSize&&(l.style[i.getDirectionLabel("width")]=`${i.virtualSize+x}px`),q&&i.grid.updateWrapperSize(Q,C),!o.centeredSlides){const G=[];for(let K=0;K<C.length;K+=1){let ee=C[K];o.roundLengths&&(ee=Math.floor(ee)),C[K]<=i.virtualSize-d&&G.push(ee)}C=G,Math.floor(i.virtualSize-d)-Math.floor(C[C.length-1])>1&&C.push(i.virtualSize-d)}if(f&&o.loop){const G=I[0]+x;if(o.slidesPerGroup>1){const K=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/o.slidesPerGroup),ee=G*o.slidesPerGroup;for(let X=0;X<K;X+=1)C.push(C[C.length-1]+ee)}for(let K=0;K<i.virtual.slidesBefore+i.virtual.slidesAfter;K+=1)o.slidesPerGroup===1&&C.push(C[C.length-1]+G),j.push(j[j.length-1]+G),i.virtualSize+=G}if(C.length===0&&(C=[0]),x!==0){const G=i.isHorizontal()&&m?"marginLeft":i.getDirectionLabel("marginRight");v.filter((K,ee)=>!o.cssMode||o.loop?!0:ee!==v.length-1).forEach(K=>{K.style[G]=`${x}px`})}if(o.centeredSlides&&o.centeredSlidesBounds){let G=0;I.forEach(ee=>{G+=ee+(x||0)}),G-=x;const K=G>d?G-d:0;C=C.map(ee=>ee<=0?-N:ee>K?K+F:ee)}if(o.centerInsufficientSlides){let G=0;I.forEach(ee=>{G+=ee+(x||0)}),G-=x;const K=(o.slidesOffsetBefore||0)+(o.slidesOffsetAfter||0);if(G+K<d){const ee=(d-G-K)/2;C.forEach((X,ie)=>{C[ie]=X-ee}),j.forEach((X,ie)=>{j[ie]=X+ee})}}if(Object.assign(i,{slides:v,snapGrid:C,slidesGrid:j,slidesSizesGrid:I}),o.centeredSlides&&o.cssMode&&!o.centeredSlidesBounds){Oo(l,"--swiper-centered-offset-before",`${-C[0]}px`),Oo(l,"--swiper-centered-offset-after",`${i.size/2-I[I.length-1]/2}px`);const G=-i.snapGrid[0],K=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(ee=>ee+G),i.slidesGrid=i.slidesGrid.map(ee=>ee+K)}if(w!==S&&i.emit("slidesLengthChange"),C.length!==b&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),j.length!==k&&i.emit("slidesGridLengthChange"),o.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!f&&!o.cssMode&&(o.effect==="slide"||o.effect==="fade")){const G=`${o.containerModifierClass}backface-hidden`,K=i.el.classList.contains(G);w<=o.maxBackfaceHiddenSlides?K||i.el.classList.add(G):K&&i.el.classList.remove(G)}}function Hg(i){const n=this,o=[],l=n.virtual&&n.params.virtual.enabled;let u=0,d;typeof i=="number"?n.setTransition(i):i===!0&&n.setTransition(n.params.speed);const m=h=>l?n.slides[n.getSlideIndexByData(h)]:n.slides[h];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(h=>{o.push(h)});else for(d=0;d<Math.ceil(n.params.slidesPerView);d+=1){const h=n.activeIndex+d;if(h>n.slides.length&&!l)break;o.push(m(h))}else o.push(m(n.activeIndex));for(d=0;d<o.length;d+=1)if(typeof o[d]<"u"){const h=o[d].offsetHeight;u=h>u?h:u}(u||u===0)&&(n.wrapperEl.style.height=`${u}px`)}function Wg(){const i=this,n=i.slides,o=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let l=0;l<n.length;l+=1)n[l].swiperSlideOffset=(i.isHorizontal()?n[l].offsetLeft:n[l].offsetTop)-o-i.cssOverflowAdjustment()}const ef=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function Ug(i){i===void 0&&(i=this&&this.translate||0);const n=this,o=n.params,{slides:l,rtlTranslate:u,snapGrid:d}=n;if(l.length===0)return;typeof l[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let m=-i;u&&(m=i),n.visibleSlidesIndexes=[],n.visibleSlides=[];let h=o.spaceBetween;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*n.size:typeof h=="string"&&(h=parseFloat(h));for(let f=0;f<l.length;f+=1){const S=l[f];let v=S.swiperSlideOffset;o.cssMode&&o.centeredSlides&&(v-=l[0].swiperSlideOffset);const w=(m+(o.centeredSlides?n.minTranslate():0)-v)/(S.swiperSlideSize+h),C=(m-d[0]+(o.centeredSlides?n.minTranslate():0)-v)/(S.swiperSlideSize+h),j=-(m-v),I=j+n.slidesSizesGrid[f],N=j>=0&&j<=n.size-n.slidesSizesGrid[f],F=j>=0&&j<n.size-1||I>1&&I<=n.size||j<=0&&I>=n.size;F&&(n.visibleSlides.push(S),n.visibleSlidesIndexes.push(f)),ef(S,F,o.slideVisibleClass),ef(S,N,o.slideFullyVisibleClass),S.progress=u?-w:w,S.originalProgress=u?-C:C}}function qg(i){const n=this;if(typeof i>"u"){const v=n.rtlTranslate?-1:1;i=n&&n.translate&&n.translate*v||0}const o=n.params,l=n.maxTranslate()-n.minTranslate();let{progress:u,isBeginning:d,isEnd:m,progressLoop:h}=n;const f=d,S=m;if(l===0)u=0,d=!0,m=!0;else{u=(i-n.minTranslate())/l;const v=Math.abs(i-n.minTranslate())<1,w=Math.abs(i-n.maxTranslate())<1;d=v||u<=0,m=w||u>=1,v&&(u=0),w&&(u=1)}if(o.loop){const v=n.getSlideIndexByData(0),w=n.getSlideIndexByData(n.slides.length-1),C=n.slidesGrid[v],j=n.slidesGrid[w],I=n.slidesGrid[n.slidesGrid.length-1],N=Math.abs(i);N>=C?h=(N-C)/I:h=(N+I-j)/I,h>1&&(h-=1)}Object.assign(n,{progress:u,progressLoop:h,isBeginning:d,isEnd:m}),(o.watchSlidesProgress||o.centeredSlides&&o.autoHeight)&&n.updateSlidesProgress(i),d&&!f&&n.emit("reachBeginning toEdge"),m&&!S&&n.emit("reachEnd toEdge"),(f&&!d||S&&!m)&&n.emit("fromEdge"),n.emit("progress",u)}const ca=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function Yg(){const i=this,{slides:n,params:o,slidesEl:l,activeIndex:u}=i,d=i.virtual&&o.virtual.enabled,m=i.grid&&o.grid&&o.grid.rows>1,h=w=>Dt(l,`.${o.slideClass}${w}, swiper-slide${w}`)[0];let f,S,v;if(d)if(o.loop){let w=u-i.virtual.slidesBefore;w<0&&(w=i.virtual.slides.length+w),w>=i.virtual.slides.length&&(w-=i.virtual.slides.length),f=h(`[data-swiper-slide-index="${w}"]`)}else f=h(`[data-swiper-slide-index="${u}"]`);else m?(f=n.filter(w=>w.column===u)[0],v=n.filter(w=>w.column===u+1)[0],S=n.filter(w=>w.column===u-1)[0]):f=n[u];f&&(m||(v=Og(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!v&&(v=n[0]),S=Lg(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!S===0&&(S=n[n.length-1]))),n.forEach(w=>{ca(w,w===f,o.slideActiveClass),ca(w,w===v,o.slideNextClass),ca(w,w===S,o.slidePrevClass)}),i.emitSlidesClasses()}const $o=(i,n)=>{if(!i||i.destroyed||!i.params)return;const o=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,l=n.closest(o());if(l){let u=l.querySelector(`.${i.params.lazyPreloaderClass}`);!u&&i.isElement&&(l.shadowRoot?u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{l.shadowRoot&&(u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),u&&u.remove())})),u&&u.remove()}},da=(i,n)=>{if(!i.slides[n])return;const o=i.slides[n].querySelector('[loading="lazy"]');o&&o.removeAttribute("loading")},Ca=i=>{if(!i||i.destroyed||!i.params)return;let n=i.params.lazyPreloadPrevNext;const o=i.slides.length;if(!o||!n||n<0)return;n=Math.min(n,o);const l=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),u=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const m=u,h=[m-n];h.push(...Array.from({length:n}).map((f,S)=>m+l+S)),i.slides.forEach((f,S)=>{h.includes(f.column)&&da(i,S)});return}const d=u+l-1;if(i.params.rewind||i.params.loop)for(let m=u-n;m<=d+n;m+=1){const h=(m%o+o)%o;(h<u||h>d)&&da(i,h)}else for(let m=Math.max(u-n,0);m<=Math.min(d+n,o-1);m+=1)m!==u&&(m>d||m<u)&&da(i,m)};function Xg(i){const{slidesGrid:n,params:o}=i,l=i.rtlTranslate?i.translate:-i.translate;let u;for(let d=0;d<n.length;d+=1)typeof n[d+1]<"u"?l>=n[d]&&l<n[d+1]-(n[d+1]-n[d])/2?u=d:l>=n[d]&&l<n[d+1]&&(u=d+1):l>=n[d]&&(u=d);return o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0),u}function Qg(i){const n=this,o=n.rtlTranslate?n.translate:-n.translate,{snapGrid:l,params:u,activeIndex:d,realIndex:m,snapIndex:h}=n;let f=i,S;const v=j=>{let I=j-n.virtual.slidesBefore;return I<0&&(I=n.virtual.slides.length+I),I>=n.virtual.slides.length&&(I-=n.virtual.slides.length),I};if(typeof f>"u"&&(f=Xg(n)),l.indexOf(o)>=0)S=l.indexOf(o);else{const j=Math.min(u.slidesPerGroupSkip,f);S=j+Math.floor((f-j)/u.slidesPerGroup)}if(S>=l.length&&(S=l.length-1),f===d&&!n.params.loop){S!==h&&(n.snapIndex=S,n.emit("snapIndexChange"));return}if(f===d&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=v(f);return}const w=n.grid&&u.grid&&u.grid.rows>1;let C;if(n.virtual&&u.virtual.enabled&&u.loop)C=v(f);else if(w){const j=n.slides.filter(N=>N.column===f)[0];let I=parseInt(j.getAttribute("data-swiper-slide-index"),10);Number.isNaN(I)&&(I=Math.max(n.slides.indexOf(j),0)),C=Math.floor(I/u.grid.rows)}else if(n.slides[f]){const j=n.slides[f].getAttribute("data-swiper-slide-index");j?C=parseInt(j,10):C=f}else C=f;Object.assign(n,{previousSnapIndex:h,snapIndex:S,previousRealIndex:m,realIndex:C,previousIndex:d,activeIndex:f}),n.initialized&&Ca(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(m!==C&&n.emit("realIndexChange"),n.emit("slideChange"))}function Kg(i,n){const o=this,l=o.params;let u=i.closest(`.${l.slideClass}, swiper-slide`);!u&&o.isElement&&n&&n.length>1&&n.includes(i)&&[...n.slice(n.indexOf(i)+1,n.length)].forEach(h=>{!u&&h.matches&&h.matches(`.${l.slideClass}, swiper-slide`)&&(u=h)});let d=!1,m;if(u){for(let h=0;h<o.slides.length;h+=1)if(o.slides[h]===u){d=!0,m=h;break}}if(u&&d)o.clickedSlide=u,o.virtual&&o.params.virtual.enabled?o.clickedIndex=parseInt(u.getAttribute("data-swiper-slide-index"),10):o.clickedIndex=m;else{o.clickedSlide=void 0,o.clickedIndex=void 0;return}l.slideToClickedSlide&&o.clickedIndex!==void 0&&o.clickedIndex!==o.activeIndex&&o.slideToClickedSlide()}var Zg={updateSize:Vg,updateSlides:Gg,updateAutoHeight:Hg,updateSlidesOffset:Wg,updateSlidesProgress:Ug,updateProgress:qg,updateSlidesClasses:Yg,updateActiveIndex:Qg,updateClickedSlide:Kg};function Jg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const n=this,{params:o,rtlTranslate:l,translate:u,wrapperEl:d}=n;if(o.virtualTranslate)return l?-u:u;if(o.cssMode)return u;let m=bg(d,i);return m+=n.cssOverflowAdjustment(),l&&(m=-m),m||0}function e0(i,n){const o=this,{rtlTranslate:l,params:u,wrapperEl:d,progress:m}=o;let h=0,f=0;const S=0;o.isHorizontal()?h=l?-i:i:f=i,u.roundLengths&&(h=Math.floor(h),f=Math.floor(f)),o.previousTranslate=o.translate,o.translate=o.isHorizontal()?h:f,u.cssMode?d[o.isHorizontal()?"scrollLeft":"scrollTop"]=o.isHorizontal()?-h:-f:u.virtualTranslate||(o.isHorizontal()?h-=o.cssOverflowAdjustment():f-=o.cssOverflowAdjustment(),d.style.transform=`translate3d(${h}px, ${f}px, ${S}px)`);let v;const w=o.maxTranslate()-o.minTranslate();w===0?v=0:v=(i-o.minTranslate())/w,v!==m&&o.updateProgress(i),o.emit("setTranslate",o.translate,n)}function t0(){return-this.snapGrid[0]}function n0(){return-this.snapGrid[this.snapGrid.length-1]}function r0(i,n,o,l,u){i===void 0&&(i=0),n===void 0&&(n=this.params.speed),o===void 0&&(o=!0),l===void 0&&(l=!0);const d=this,{params:m,wrapperEl:h}=d;if(d.animating&&m.preventInteractionOnTransition)return!1;const f=d.minTranslate(),S=d.maxTranslate();let v;if(l&&i>f?v=f:l&&i<S?v=S:v=i,d.updateProgress(v),m.cssMode){const w=d.isHorizontal();if(n===0)h[w?"scrollLeft":"scrollTop"]=-v;else{if(!d.support.smoothScroll)return Af({swiper:d,targetPosition:-v,side:w?"left":"top"}),!0;h.scrollTo({[w?"left":"top"]:-v,behavior:"smooth"})}return!0}return n===0?(d.setTransition(0),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionEnd"))):(d.setTransition(n),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionStart")),d.animating||(d.animating=!0,d.onTranslateToWrapperTransitionEnd||(d.onTranslateToWrapperTransitionEnd=function(C){!d||d.destroyed||C.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onTranslateToWrapperTransitionEnd),d.onTranslateToWrapperTransitionEnd=null,delete d.onTranslateToWrapperTransitionEnd,d.animating=!1,o&&d.emit("transitionEnd"))}),d.wrapperEl.addEventListener("transitionend",d.onTranslateToWrapperTransitionEnd))),!0}var i0={getTranslate:Jg,setTranslate:e0,minTranslate:t0,maxTranslate:n0,translateTo:r0};function o0(i,n){const o=this;o.params.cssMode||(o.wrapperEl.style.transitionDuration=`${i}ms`,o.wrapperEl.style.transitionDelay=i===0?"0ms":""),o.emit("setTransition",i,n)}function Vf(i){let{swiper:n,runCallbacks:o,direction:l,step:u}=i;const{activeIndex:d,previousIndex:m}=n;let h=l;if(h||(d>m?h="next":d<m?h="prev":h="reset"),n.emit(`transition${u}`),o&&d!==m){if(h==="reset"){n.emit(`slideResetTransition${u}`);return}n.emit(`slideChangeTransition${u}`),h==="next"?n.emit(`slideNextTransition${u}`):n.emit(`slidePrevTransition${u}`)}}function s0(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;l.cssMode||(l.autoHeight&&o.updateAutoHeight(),Vf({swiper:o,runCallbacks:i,direction:n,step:"Start"}))}function l0(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;o.animating=!1,!l.cssMode&&(o.setTransition(0),Vf({swiper:o,runCallbacks:i,direction:n,step:"End"}))}var a0={setTransition:o0,transitionStart:s0,transitionEnd:l0};function u0(i,n,o,l,u){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const d=this;let m=i;m<0&&(m=0);const{params:h,snapGrid:f,slidesGrid:S,previousIndex:v,activeIndex:w,rtlTranslate:C,wrapperEl:j,enabled:I}=d;if(!I&&!l&&!u||d.destroyed||d.animating&&h.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=d.params.speed);const N=Math.min(d.params.slidesPerGroupSkip,m);let F=N+Math.floor((m-N)/d.params.slidesPerGroup);F>=f.length&&(F=f.length-1);const b=-f[F];if(h.normalizeSlideIndex)for(let O=0;O<S.length;O+=1){const D=-Math.floor(b*100),q=Math.floor(S[O]*100),Q=Math.floor(S[O+1]*100);typeof S[O+1]<"u"?D>=q&&D<Q-(Q-q)/2?m=O:D>=q&&D<Q&&(m=O+1):D>=q&&(m=O)}if(d.initialized&&m!==w&&(!d.allowSlideNext&&(C?b>d.translate&&b>d.minTranslate():b<d.translate&&b<d.minTranslate())||!d.allowSlidePrev&&b>d.translate&&b>d.maxTranslate()&&(w||0)!==m))return!1;m!==(v||0)&&o&&d.emit("beforeSlideChangeStart"),d.updateProgress(b);let k;m>w?k="next":m<w?k="prev":k="reset";const x=d.virtual&&d.params.virtual.enabled;if(!(x&&u)&&(C&&-b===d.translate||!C&&b===d.translate))return d.updateActiveIndex(m),h.autoHeight&&d.updateAutoHeight(),d.updateSlidesClasses(),h.effect!=="slide"&&d.setTranslate(b),k!=="reset"&&(d.transitionStart(o,k),d.transitionEnd(o,k)),!1;if(h.cssMode){const O=d.isHorizontal(),D=C?b:-b;if(n===0)x&&(d.wrapperEl.style.scrollSnapType="none",d._immediateVirtual=!0),x&&!d._cssModeVirtualInitialSet&&d.params.initialSlide>0?(d._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{j[O?"scrollLeft":"scrollTop"]=D})):j[O?"scrollLeft":"scrollTop"]=D,x&&requestAnimationFrame(()=>{d.wrapperEl.style.scrollSnapType="",d._immediateVirtual=!1});else{if(!d.support.smoothScroll)return Af({swiper:d,targetPosition:D,side:O?"left":"top"}),!0;j.scrollTo({[O?"left":"top"]:D,behavior:"smooth"})}return!0}return d.setTransition(n),d.setTranslate(b),d.updateActiveIndex(m),d.updateSlidesClasses(),d.emit("beforeTransitionStart",n,l),d.transitionStart(o,k),n===0?d.transitionEnd(o,k):d.animating||(d.animating=!0,d.onSlideToWrapperTransitionEnd||(d.onSlideToWrapperTransitionEnd=function(D){!d||d.destroyed||D.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onSlideToWrapperTransitionEnd),d.onSlideToWrapperTransitionEnd=null,delete d.onSlideToWrapperTransitionEnd,d.transitionEnd(o,k))}),d.wrapperEl.addEventListener("transitionend",d.onSlideToWrapperTransitionEnd)),!0}function c0(i,n,o,l){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const u=this;if(u.destroyed)return;typeof n>"u"&&(n=u.params.speed);const d=u.grid&&u.params.grid&&u.params.grid.rows>1;let m=i;if(u.params.loop)if(u.virtual&&u.params.virtual.enabled)m=m+u.virtual.slidesBefore;else{let h;if(d){const C=m*u.params.grid.rows;h=u.slides.filter(j=>j.getAttribute("data-swiper-slide-index")*1===C)[0].column}else h=u.getSlideIndexByData(m);const f=d?Math.ceil(u.slides.length/u.params.grid.rows):u.slides.length,{centeredSlides:S}=u.params;let v=u.params.slidesPerView;v==="auto"?v=u.slidesPerViewDynamic():(v=Math.ceil(parseFloat(u.params.slidesPerView,10)),S&&v%2===0&&(v=v+1));let w=f-h<v;if(S&&(w=w||h<Math.ceil(v/2)),l&&S&&u.params.slidesPerView!=="auto"&&!d&&(w=!1),w){const C=S?h<u.activeIndex?"prev":"next":h-u.activeIndex-1<u.params.slidesPerView?"next":"prev";u.loopFix({direction:C,slideTo:!0,activeSlideIndex:C==="next"?h+1:h-f+1,slideRealIndex:C==="next"?u.realIndex:void 0})}if(d){const C=m*u.params.grid.rows;m=u.slides.filter(j=>j.getAttribute("data-swiper-slide-index")*1===C)[0].column}else m=u.getSlideIndexByData(m)}return requestAnimationFrame(()=>{u.slideTo(m,n,o,l)}),u}function d0(i,n,o){n===void 0&&(n=!0);const l=this,{enabled:u,params:d,animating:m}=l;if(!u||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);let h=d.slidesPerGroup;d.slidesPerView==="auto"&&d.slidesPerGroup===1&&d.slidesPerGroupAuto&&(h=Math.max(l.slidesPerViewDynamic("current",!0),1));const f=l.activeIndex<d.slidesPerGroupSkip?1:h,S=l.virtual&&d.virtual.enabled;if(d.loop){if(m&&!S&&d.loopPreventsSliding)return!1;if(l.loopFix({direction:"next"}),l._clientLeft=l.wrapperEl.clientLeft,l.activeIndex===l.slides.length-1&&d.cssMode)return requestAnimationFrame(()=>{l.slideTo(l.activeIndex+f,i,n,o)}),!0}return d.rewind&&l.isEnd?l.slideTo(0,i,n,o):l.slideTo(l.activeIndex+f,i,n,o)}function f0(i,n,o){n===void 0&&(n=!0);const l=this,{params:u,snapGrid:d,slidesGrid:m,rtlTranslate:h,enabled:f,animating:S}=l;if(!f||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);const v=l.virtual&&u.virtual.enabled;if(u.loop){if(S&&!v&&u.loopPreventsSliding)return!1;l.loopFix({direction:"prev"}),l._clientLeft=l.wrapperEl.clientLeft}const w=h?l.translate:-l.translate;function C(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const j=C(w),I=d.map(b=>C(b));let N=d[I.indexOf(j)-1];if(typeof N>"u"&&u.cssMode){let b;d.forEach((k,x)=>{j>=k&&(b=x)}),typeof b<"u"&&(N=d[b>0?b-1:b])}let F=0;if(typeof N<"u"&&(F=m.indexOf(N),F<0&&(F=l.activeIndex-1),u.slidesPerView==="auto"&&u.slidesPerGroup===1&&u.slidesPerGroupAuto&&(F=F-l.slidesPerViewDynamic("previous",!0)+1,F=Math.max(F,0))),u.rewind&&l.isBeginning){const b=l.params.virtual&&l.params.virtual.enabled&&l.virtual?l.virtual.slides.length-1:l.slides.length-1;return l.slideTo(b,i,n,o)}else if(u.loop&&l.activeIndex===0&&u.cssMode)return requestAnimationFrame(()=>{l.slideTo(F,i,n,o)}),!0;return l.slideTo(F,i,n,o)}function p0(i,n,o){n===void 0&&(n=!0);const l=this;if(!l.destroyed)return typeof i>"u"&&(i=l.params.speed),l.slideTo(l.activeIndex,i,n,o)}function m0(i,n,o,l){n===void 0&&(n=!0),l===void 0&&(l=.5);const u=this;if(u.destroyed)return;typeof i>"u"&&(i=u.params.speed);let d=u.activeIndex;const m=Math.min(u.params.slidesPerGroupSkip,d),h=m+Math.floor((d-m)/u.params.slidesPerGroup),f=u.rtlTranslate?u.translate:-u.translate;if(f>=u.snapGrid[h]){const S=u.snapGrid[h],v=u.snapGrid[h+1];f-S>(v-S)*l&&(d+=u.params.slidesPerGroup)}else{const S=u.snapGrid[h-1],v=u.snapGrid[h];f-S<=(v-S)*l&&(d-=u.params.slidesPerGroup)}return d=Math.max(d,0),d=Math.min(d,u.slidesGrid.length-1),u.slideTo(d,i,n,o)}function h0(){const i=this;if(i.destroyed)return;const{params:n,slidesEl:o}=i,l=n.slidesPerView==="auto"?i.slidesPerViewDynamic():n.slidesPerView;let u=i.clickedIndex,d;const m=i.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(i.animating)return;d=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?u<i.loopedSlides-l/2||u>i.slides.length-i.loopedSlides+l/2?(i.loopFix(),u=i.getSlideIndex(Dt(o,`${m}[data-swiper-slide-index="${d}"]`)[0]),ka(()=>{i.slideTo(u)})):i.slideTo(u):u>i.slides.length-l?(i.loopFix(),u=i.getSlideIndex(Dt(o,`${m}[data-swiper-slide-index="${d}"]`)[0]),ka(()=>{i.slideTo(u)})):i.slideTo(u)}else i.slideTo(u)}var g0={slideTo:u0,slideToLoop:c0,slideNext:d0,slidePrev:f0,slideReset:p0,slideToClosest:m0,slideToClickedSlide:h0};function v0(i){const n=this,{params:o,slidesEl:l}=n;if(!o.loop||n.virtual&&n.params.virtual.enabled)return;const u=()=>{Dt(l,`.${o.slideClass}, swiper-slide`).forEach((w,C)=>{w.setAttribute("data-swiper-slide-index",C)})},d=n.grid&&o.grid&&o.grid.rows>1,m=o.slidesPerGroup*(d?o.grid.rows:1),h=n.slides.length%m!==0,f=d&&n.slides.length%o.grid.rows!==0,S=v=>{for(let w=0;w<v;w+=1){const C=n.isElement?Yo("swiper-slide",[o.slideBlankClass]):Yo("div",[o.slideClass,o.slideBlankClass]);n.slidesEl.append(C)}};if(h){if(o.loopAddBlankSlides){const v=m-n.slides.length%m;S(v),n.recalcSlides(),n.updateSlides()}else qo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else if(f){if(o.loopAddBlankSlides){const v=o.grid.rows-n.slides.length%o.grid.rows;S(v),n.recalcSlides(),n.updateSlides()}else qo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else u();n.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next"})}function y0(i){let{slideRealIndex:n,slideTo:o=!0,direction:l,setTranslate:u,activeSlideIndex:d,byController:m,byMousewheel:h}=i===void 0?{}:i;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:S,allowSlidePrev:v,allowSlideNext:w,slidesEl:C,params:j}=f,{centeredSlides:I}=j;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&j.virtual.enabled){o&&(!j.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):j.centeredSlides&&f.snapIndex<j.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=v,f.allowSlideNext=w,f.emit("loopFix");return}let N=j.slidesPerView;N==="auto"?N=f.slidesPerViewDynamic():(N=Math.ceil(parseFloat(j.slidesPerView,10)),I&&N%2===0&&(N=N+1));const F=j.slidesPerGroupAuto?N:j.slidesPerGroup;let b=F;b%F!==0&&(b+=F-b%F),b+=j.loopAdditionalSlides,f.loopedSlides=b;const k=f.grid&&j.grid&&j.grid.rows>1;S.length<N+b?qo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&j.grid.fill==="row"&&qo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],L=[];let O=f.activeIndex;typeof d>"u"?d=f.getSlideIndex(S.filter(X=>X.classList.contains(j.slideActiveClass))[0]):O=d;const D=l==="next"||!l,q=l==="prev"||!l;let Q=0,V=0;const G=k?Math.ceil(S.length/j.grid.rows):S.length,ee=(k?S[d].column:d)+(I&&typeof u>"u"?-N/2+.5:0);if(ee<b){Q=Math.max(b-ee,F);for(let X=0;X<b-ee;X+=1){const ie=X-Math.floor(X/G)*G;if(k){const ae=G-ie-1;for(let ge=S.length-1;ge>=0;ge-=1)S[ge].column===ae&&x.push(ge)}else x.push(G-ie-1)}}else if(ee+N>G-b){V=Math.max(ee-(G-b*2),F);for(let X=0;X<V;X+=1){const ie=X-Math.floor(X/G)*G;k?S.forEach((ae,ge)=>{ae.column===ie&&L.push(ge)}):L.push(ie)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),q&&x.forEach(X=>{S[X].swiperLoopMoveDOM=!0,C.prepend(S[X]),S[X].swiperLoopMoveDOM=!1}),D&&L.forEach(X=>{S[X].swiperLoopMoveDOM=!0,C.append(S[X]),S[X].swiperLoopMoveDOM=!1}),f.recalcSlides(),j.slidesPerView==="auto"?f.updateSlides():k&&(x.length>0&&q||L.length>0&&D)&&f.slides.forEach((X,ie)=>{f.grid.updateSlide(ie,X,f.slides)}),j.watchSlidesProgress&&f.updateSlidesOffset(),o){if(x.length>0&&q){if(typeof n>"u"){const X=f.slidesGrid[O],ae=f.slidesGrid[O+Q]-X;h?f.setTranslate(f.translate-ae):(f.slideTo(O+Math.ceil(Q),0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ae,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ae))}else if(u){const X=k?x.length/j.grid.rows:x.length;f.slideTo(f.activeIndex+X,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(L.length>0&&D)if(typeof n>"u"){const X=f.slidesGrid[O],ae=f.slidesGrid[O-V]-X;h?f.setTranslate(f.translate-ae):(f.slideTo(O-V,0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ae,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ae))}else{const X=k?L.length/j.grid.rows:L.length;f.slideTo(f.activeIndex-X,0,!1,!0)}}if(f.allowSlidePrev=v,f.allowSlideNext=w,f.controller&&f.controller.control&&!m){const X={slideRealIndex:n,direction:l,setTranslate:u,activeSlideIndex:d,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(ie=>{!ie.destroyed&&ie.params.loop&&ie.loopFix({...X,slideTo:ie.params.slidesPerView===j.slidesPerView?o:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...X,slideTo:f.controller.control.params.slidesPerView===j.slidesPerView?o:!1})}f.emit("loopFix")}function x0(){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const l=[];i.slides.forEach(u=>{const d=typeof u.swiperSlideIndex>"u"?u.getAttribute("data-swiper-slide-index")*1:u.swiperSlideIndex;l[d]=u}),i.slides.forEach(u=>{u.removeAttribute("data-swiper-slide-index")}),l.forEach(u=>{o.append(u)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var w0={loopCreate:v0,loopFix:y0,loopDestroy:x0};function S0(i){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const o=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),o.style.cursor="move",o.style.cursor=i?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function E0(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var k0={setGrabCursor:S0,unsetGrabCursor:E0};function T0(i,n){n===void 0&&(n=this);function o(l){if(!l||l===Qt()||l===mt())return null;l.assignedSlot&&(l=l.assignedSlot);const u=l.closest(i);return!u&&!l.getRootNode?null:u||o(l.getRootNode().host)}return o(n)}function tf(i,n,o){const l=mt(),{params:u}=i,d=u.edgeSwipeDetection,m=u.edgeSwipeThreshold;return d&&(o<=m||o>=l.innerWidth-m)?d==="prevent"?(n.preventDefault(),!0):!1:!0}function C0(i){const n=this,o=Qt();let l=i;l.originalEvent&&(l=l.originalEvent);const u=n.touchEventsData;if(l.type==="pointerdown"){if(u.pointerId!==null&&u.pointerId!==l.pointerId)return;u.pointerId=l.pointerId}else l.type==="touchstart"&&l.targetTouches.length===1&&(u.touchId=l.targetTouches[0].identifier);if(l.type==="touchstart"){tf(n,l,l.targetTouches[0].pageX);return}const{params:d,touches:m,enabled:h}=n;if(!h||!d.simulateTouch&&l.pointerType==="mouse"||n.animating&&d.preventInteractionOnTransition)return;!n.animating&&d.cssMode&&d.loop&&n.loopFix();let f=l.target;if(d.touchEventsTarget==="wrapper"&&!Ig(f,n.wrapperEl)||"which"in l&&l.which===3||"button"in l&&l.button>0||u.isTouched&&u.isMoved)return;const S=!!d.noSwipingClass&&d.noSwipingClass!=="",v=l.composedPath?l.composedPath():l.path;S&&l.target&&l.target.shadowRoot&&v&&(f=v[0]);const w=d.noSwipingSelector?d.noSwipingSelector:`.${d.noSwipingClass}`,C=!!(l.target&&l.target.shadowRoot);if(d.noSwiping&&(C?T0(w,f):f.closest(w))){n.allowClick=!0;return}if(d.swipeHandler&&!f.closest(d.swipeHandler))return;m.currentX=l.pageX,m.currentY=l.pageY;const j=m.currentX,I=m.currentY;if(!tf(n,l,j))return;Object.assign(u,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),m.startX=j,m.startY=I,u.touchStartTime=Nn(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,d.threshold>0&&(u.allowThresholdMove=!1);let N=!0;f.matches(u.focusableElements)&&(N=!1,f.nodeName==="SELECT"&&(u.isTouched=!1)),o.activeElement&&o.activeElement.matches(u.focusableElements)&&o.activeElement!==f&&(l.pointerType==="mouse"||l.pointerType!=="mouse"&&!f.matches(u.focusableElements))&&o.activeElement.blur();const F=N&&n.allowTouchMove&&d.touchStartPreventDefault;(d.touchStartForcePreventDefault||F)&&!f.isContentEditable&&l.preventDefault(),d.freeMode&&d.freeMode.enabled&&n.freeMode&&n.animating&&!d.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",l)}function P0(i){const n=Qt(),o=this,l=o.touchEventsData,{params:u,touches:d,rtlTranslate:m,enabled:h}=o;if(!h||!u.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(l.touchId!==null||f.pointerId!==l.pointerId))return;let S;if(f.type==="touchmove"){if(S=[...f.changedTouches].filter(D=>D.identifier===l.touchId)[0],!S||S.identifier!==l.touchId)return}else S=f;if(!l.isTouched){l.startMoving&&l.isScrolling&&o.emit("touchMoveOpposite",f);return}const v=S.pageX,w=S.pageY;if(f.preventedByNestedSwiper){d.startX=v,d.startY=w;return}if(!o.allowTouchMove){f.target.matches(l.focusableElements)||(o.allowClick=!1),l.isTouched&&(Object.assign(d,{startX:v,startY:w,currentX:v,currentY:w}),l.touchStartTime=Nn());return}if(u.touchReleaseOnEdges&&!u.loop){if(o.isVertical()){if(w<d.startY&&o.translate<=o.maxTranslate()||w>d.startY&&o.translate>=o.minTranslate()){l.isTouched=!1,l.isMoved=!1;return}}else if(v<d.startX&&o.translate<=o.maxTranslate()||v>d.startX&&o.translate>=o.minTranslate())return}if(n.activeElement&&n.activeElement.matches(l.focusableElements)&&n.activeElement!==f.target&&f.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&f.target===n.activeElement&&f.target.matches(l.focusableElements)){l.isMoved=!0,o.allowClick=!1;return}l.allowTouchCallbacks&&o.emit("touchMove",f),d.previousX=d.currentX,d.previousY=d.currentY,d.currentX=v,d.currentY=w;const C=d.currentX-d.startX,j=d.currentY-d.startY;if(o.params.threshold&&Math.sqrt(C**2+j**2)<o.params.threshold)return;if(typeof l.isScrolling>"u"){let D;o.isHorizontal()&&d.currentY===d.startY||o.isVertical()&&d.currentX===d.startX?l.isScrolling=!1:C*C+j*j>=25&&(D=Math.atan2(Math.abs(j),Math.abs(C))*180/Math.PI,l.isScrolling=o.isHorizontal()?D>u.touchAngle:90-D>u.touchAngle)}if(l.isScrolling&&o.emit("touchMoveOpposite",f),typeof l.startMoving>"u"&&(d.currentX!==d.startX||d.currentY!==d.startY)&&(l.startMoving=!0),l.isScrolling||f.type==="touchmove"&&l.preventTouchMoveFromPointerMove){l.isTouched=!1;return}if(!l.startMoving)return;o.allowClick=!1,!u.cssMode&&f.cancelable&&f.preventDefault(),u.touchMoveStopPropagation&&!u.nested&&f.stopPropagation();let I=o.isHorizontal()?C:j,N=o.isHorizontal()?d.currentX-d.previousX:d.currentY-d.previousY;u.oneWayMovement&&(I=Math.abs(I)*(m?1:-1),N=Math.abs(N)*(m?1:-1)),d.diff=I,I*=u.touchRatio,m&&(I=-I,N=-N);const F=o.touchesDirection;o.swipeDirection=I>0?"prev":"next",o.touchesDirection=N>0?"prev":"next";const b=o.params.loop&&!u.cssMode,k=o.touchesDirection==="next"&&o.allowSlideNext||o.touchesDirection==="prev"&&o.allowSlidePrev;if(!l.isMoved){if(b&&k&&o.loopFix({direction:o.swipeDirection}),l.startTranslate=o.getTranslate(),o.setTransition(0),o.animating){const D=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});o.wrapperEl.dispatchEvent(D)}l.allowMomentumBounce=!1,u.grabCursor&&(o.allowSlideNext===!0||o.allowSlidePrev===!0)&&o.setGrabCursor(!0),o.emit("sliderFirstMove",f)}let x;if(new Date().getTime(),l.isMoved&&l.allowThresholdMove&&F!==o.touchesDirection&&b&&k&&Math.abs(I)>=1){Object.assign(d,{startX:v,startY:w,currentX:v,currentY:w,startTranslate:l.currentTranslate}),l.loopSwapReset=!0,l.startTranslate=l.currentTranslate;return}o.emit("sliderMove",f),l.isMoved=!0,l.currentTranslate=I+l.startTranslate;let L=!0,O=u.resistanceRatio;if(u.touchReleaseOnEdges&&(O=0),I>0?(b&&k&&!x&&l.allowThresholdMove&&l.currentTranslate>(u.centeredSlides?o.minTranslate()-o.slidesSizesGrid[o.activeIndex+1]-(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.activeIndex+1]+o.params.spaceBetween:0)-o.params.spaceBetween:o.minTranslate())&&o.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),l.currentTranslate>o.minTranslate()&&(L=!1,u.resistance&&(l.currentTranslate=o.minTranslate()-1+(-o.minTranslate()+l.startTranslate+I)**O))):I<0&&(b&&k&&!x&&l.allowThresholdMove&&l.currentTranslate<(u.centeredSlides?o.maxTranslate()+o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween+(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween:0):o.maxTranslate())&&o.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:o.slides.length-(u.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(u.slidesPerView,10)))}),l.currentTranslate<o.maxTranslate()&&(L=!1,u.resistance&&(l.currentTranslate=o.maxTranslate()+1-(o.maxTranslate()-l.startTranslate-I)**O))),L&&(f.preventedByNestedSwiper=!0),!o.allowSlideNext&&o.swipeDirection==="next"&&l.currentTranslate<l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&o.swipeDirection==="prev"&&l.currentTranslate>l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&!o.allowSlideNext&&(l.currentTranslate=l.startTranslate),u.threshold>0)if(Math.abs(I)>u.threshold||l.allowThresholdMove){if(!l.allowThresholdMove){l.allowThresholdMove=!0,d.startX=d.currentX,d.startY=d.currentY,l.currentTranslate=l.startTranslate,d.diff=o.isHorizontal()?d.currentX-d.startX:d.currentY-d.startY;return}}else{l.currentTranslate=l.startTranslate;return}!u.followFinger||u.cssMode||((u.freeMode&&u.freeMode.enabled&&o.freeMode||u.watchSlidesProgress)&&(o.updateActiveIndex(),o.updateSlidesClasses()),u.freeMode&&u.freeMode.enabled&&o.freeMode&&o.freeMode.onTouchMove(),o.updateProgress(l.currentTranslate),o.setTranslate(l.currentTranslate))}function j0(i){const n=this,o=n.touchEventsData;let l=i;l.originalEvent&&(l=l.originalEvent);let u;if(l.type==="touchend"||l.type==="touchcancel"){if(u=[...l.changedTouches].filter(O=>O.identifier===o.touchId)[0],!u||u.identifier!==o.touchId)return}else{if(o.touchId!==null||l.pointerId!==o.pointerId)return;u=l}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(l.type)&&!(["pointercancel","contextmenu"].includes(l.type)&&(n.browser.isSafari||n.browser.isWebView)))return;o.pointerId=null,o.touchId=null;const{params:m,touches:h,rtlTranslate:f,slidesGrid:S,enabled:v}=n;if(!v||!m.simulateTouch&&l.pointerType==="mouse")return;if(o.allowTouchCallbacks&&n.emit("touchEnd",l),o.allowTouchCallbacks=!1,!o.isTouched){o.isMoved&&m.grabCursor&&n.setGrabCursor(!1),o.isMoved=!1,o.startMoving=!1;return}m.grabCursor&&o.isMoved&&o.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const w=Nn(),C=w-o.touchStartTime;if(n.allowClick){const O=l.path||l.composedPath&&l.composedPath();n.updateClickedSlide(O&&O[0]||l.target,O),n.emit("tap click",l),C<300&&w-o.lastClickTime<300&&n.emit("doubleTap doubleClick",l)}if(o.lastClickTime=Nn(),ka(()=>{n.destroyed||(n.allowClick=!0)}),!o.isTouched||!o.isMoved||!n.swipeDirection||h.diff===0&&!o.loopSwapReset||o.currentTranslate===o.startTranslate&&!o.loopSwapReset){o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;return}o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;let j;if(m.followFinger?j=f?n.translate:-n.translate:j=-o.currentTranslate,m.cssMode)return;if(m.freeMode&&m.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:j});return}const I=j>=-n.maxTranslate()&&!n.params.loop;let N=0,F=n.slidesSizesGrid[0];for(let O=0;O<S.length;O+=O<m.slidesPerGroupSkip?1:m.slidesPerGroup){const D=O<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;typeof S[O+D]<"u"?(I||j>=S[O]&&j<S[O+D])&&(N=O,F=S[O+D]-S[O]):(I||j>=S[O])&&(N=O,F=S[S.length-1]-S[S.length-2])}let b=null,k=null;m.rewind&&(n.isBeginning?k=m.virtual&&m.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(b=0));const x=(j-S[N])/F,L=N<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;if(C>m.longSwipesMs){if(!m.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(x>=m.longSwipesRatio?n.slideTo(m.rewind&&n.isEnd?b:N+L):n.slideTo(N)),n.swipeDirection==="prev"&&(x>1-m.longSwipesRatio?n.slideTo(N+L):k!==null&&x<0&&Math.abs(x)>m.longSwipesRatio?n.slideTo(k):n.slideTo(N))}else{if(!m.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(l.target===n.navigation.nextEl||l.target===n.navigation.prevEl)?l.target===n.navigation.nextEl?n.slideTo(N+L):n.slideTo(N):(n.swipeDirection==="next"&&n.slideTo(b!==null?b:N+L),n.swipeDirection==="prev"&&n.slideTo(k!==null?k:N))}}function nf(){const i=this,{params:n,el:o}=i;if(o&&o.offsetWidth===0)return;n.breakpoints&&i.setBreakpoint();const{allowSlideNext:l,allowSlidePrev:u,snapGrid:d}=i,m=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const h=m&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!h?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!m?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=u,i.allowSlideNext=l,i.params.watchOverflow&&d!==i.snapGrid&&i.checkOverflow()}function _0(i){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&i.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function z0(){const i=this,{wrapperEl:n,rtlTranslate:o,enabled:l}=i;if(!l)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-n.scrollLeft:i.translate=-n.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let u;const d=i.maxTranslate()-i.minTranslate();d===0?u=0:u=(i.translate-i.minTranslate())/d,u!==i.progress&&i.updateProgress(o?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function b0(i){const n=this;$o(n,i.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function M0(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Gf=(i,n)=>{const o=Qt(),{params:l,el:u,wrapperEl:d,device:m}=i,h=!!l.nested,f=n==="on"?"addEventListener":"removeEventListener",S=n;!u||typeof u=="string"||(o[f]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:h}),u[f]("touchstart",i.onTouchStart,{passive:!1}),u[f]("pointerdown",i.onTouchStart,{passive:!1}),o[f]("touchmove",i.onTouchMove,{passive:!1,capture:h}),o[f]("pointermove",i.onTouchMove,{passive:!1,capture:h}),o[f]("touchend",i.onTouchEnd,{passive:!0}),o[f]("pointerup",i.onTouchEnd,{passive:!0}),o[f]("pointercancel",i.onTouchEnd,{passive:!0}),o[f]("touchcancel",i.onTouchEnd,{passive:!0}),o[f]("pointerout",i.onTouchEnd,{passive:!0}),o[f]("pointerleave",i.onTouchEnd,{passive:!0}),o[f]("contextmenu",i.onTouchEnd,{passive:!0}),(l.preventClicks||l.preventClicksPropagation)&&u[f]("click",i.onClick,!0),l.cssMode&&d[f]("scroll",i.onScroll),l.updateOnWindowResize?i[S](m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",nf,!0):i[S]("observerUpdate",nf,!0),u[f]("load",i.onLoad,{capture:!0}))};function I0(){const i=this,{params:n}=i;i.onTouchStart=C0.bind(i),i.onTouchMove=P0.bind(i),i.onTouchEnd=j0.bind(i),i.onDocumentTouchStart=M0.bind(i),n.cssMode&&(i.onScroll=z0.bind(i)),i.onClick=_0.bind(i),i.onLoad=b0.bind(i),Gf(i,"on")}function L0(){Gf(this,"off")}var O0={attachEvents:I0,detachEvents:L0};const rf=(i,n)=>i.grid&&n.grid&&n.grid.rows>1;function N0(){const i=this,{realIndex:n,initialized:o,params:l,el:u}=i,d=l.breakpoints;if(!d||d&&Object.keys(d).length===0)return;const m=i.getBreakpoint(d,i.params.breakpointsBase,i.el);if(!m||i.currentBreakpoint===m)return;const f=(m in d?d[m]:void 0)||i.originalParams,S=rf(i,l),v=rf(i,f),w=i.params.grabCursor,C=f.grabCursor,j=l.enabled;S&&!v?(u.classList.remove(`${l.containerModifierClass}grid`,`${l.containerModifierClass}grid-column`),i.emitContainerClasses()):!S&&v&&(u.classList.add(`${l.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&l.grid.fill==="column")&&u.classList.add(`${l.containerModifierClass}grid-column`),i.emitContainerClasses()),w&&!C?i.unsetGrabCursor():!w&&C&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof f[x]>"u")return;const L=l[x]&&l[x].enabled,O=f[x]&&f[x].enabled;L&&!O&&i[x].disable(),!L&&O&&i[x].enable()});const I=f.direction&&f.direction!==l.direction,N=l.loop&&(f.slidesPerView!==l.slidesPerView||I),F=l.loop;I&&o&&i.changeDirection(),pt(i.params,f);const b=i.params.enabled,k=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),j&&!b?i.disable():!j&&b&&i.enable(),i.currentBreakpoint=m,i.emit("_beforeBreakpoint",f),o&&(N?(i.loopDestroy(),i.loopCreate(n),i.updateSlides()):!F&&k?(i.loopCreate(n),i.updateSlides()):F&&!k&&i.loopDestroy()),i.emit("breakpoint",f)}function R0(i,n,o){if(n===void 0&&(n="window"),!i||n==="container"&&!o)return;let l=!1;const u=mt(),d=n==="window"?u.innerHeight:o.clientHeight,m=Object.keys(i).map(h=>{if(typeof h=="string"&&h.indexOf("@")===0){const f=parseFloat(h.substr(1));return{value:d*f,point:h}}return{value:h,point:h}});m.sort((h,f)=>parseInt(h.value,10)-parseInt(f.value,10));for(let h=0;h<m.length;h+=1){const{point:f,value:S}=m[h];n==="window"?u.matchMedia(`(min-width: ${S}px)`).matches&&(l=f):S<=o.clientWidth&&(l=f)}return l||"max"}var D0={setBreakpoint:N0,getBreakpoint:R0};function A0(i,n){const o=[];return i.forEach(l=>{typeof l=="object"?Object.keys(l).forEach(u=>{l[u]&&o.push(n+u)}):typeof l=="string"&&o.push(n+l)}),o}function F0(){const i=this,{classNames:n,params:o,rtl:l,el:u,device:d}=i,m=A0(["initialized",o.direction,{"free-mode":i.params.freeMode&&o.freeMode.enabled},{autoheight:o.autoHeight},{rtl:l},{grid:o.grid&&o.grid.rows>1},{"grid-column":o.grid&&o.grid.rows>1&&o.grid.fill==="column"},{android:d.android},{ios:d.ios},{"css-mode":o.cssMode},{centered:o.cssMode&&o.centeredSlides},{"watch-progress":o.watchSlidesProgress}],o.containerModifierClass);n.push(...m),u.classList.add(...n),i.emitContainerClasses()}function B0(){const i=this,{el:n,classNames:o}=i;!n||typeof n=="string"||(n.classList.remove(...o),i.emitContainerClasses())}var $0={addClasses:F0,removeClasses:B0};function V0(){const i=this,{isLocked:n,params:o}=i,{slidesOffsetBefore:l}=o;if(l){const u=i.slides.length-1,d=i.slidesGrid[u]+i.slidesSizesGrid[u]+l*2;i.isLocked=i.size>d}else i.isLocked=i.snapGrid.length===1;o.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),o.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),n&&n!==i.isLocked&&(i.isEnd=!1),n!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var G0={checkOverflow:V0},Pa={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function H0(i,n){return function(l){l===void 0&&(l={});const u=Object.keys(l)[0],d=l[u];if(typeof d!="object"||d===null){pt(n,l);return}if(i[u]===!0&&(i[u]={enabled:!0}),u==="navigation"&&i[u]&&i[u].enabled&&!i[u].prevEl&&!i[u].nextEl&&(i[u].auto=!0),["pagination","scrollbar"].indexOf(u)>=0&&i[u]&&i[u].enabled&&!i[u].el&&(i[u].auto=!0),!(u in i&&"enabled"in d)){pt(n,l);return}typeof i[u]=="object"&&!("enabled"in i[u])&&(i[u].enabled=!0),i[u]||(i[u]={enabled:!1}),pt(n,l)}}const fa={eventsEmitter:$g,update:Zg,translate:i0,transition:a0,slide:g0,loop:w0,grabCursor:k0,events:O0,breakpoints:D0,checkOverflow:G0,classes:$0},pa={};let Oa=class Yt{constructor(){let n,o;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];u.length===1&&u[0].constructor&&Object.prototype.toString.call(u[0]).slice(8,-1)==="Object"?o=u[0]:[n,o]=u,o||(o={}),o=pt({},o),n&&!o.el&&(o.el=n);const m=Qt();if(o.el&&typeof o.el=="string"&&m.querySelectorAll(o.el).length>1){const v=[];return m.querySelectorAll(o.el).forEach(w=>{const C=pt({},o,{el:w});v.push(new Yt(C))}),v}const h=this;h.__swiper__=!0,h.support=Bf(),h.device=$f({userAgent:o.userAgent}),h.browser=Ag(),h.eventsListeners={},h.eventsAnyListeners=[],h.modules=[...h.__modules__],o.modules&&Array.isArray(o.modules)&&h.modules.push(...o.modules);const f={};h.modules.forEach(v=>{v({params:o,swiper:h,extendParams:H0(o,f),on:h.on.bind(h),once:h.once.bind(h),off:h.off.bind(h),emit:h.emit.bind(h)})});const S=pt({},Pa,f);return h.params=pt({},S,pa,o),h.originalParams=pt({},h.params),h.passedParams=pt({},o),h.params&&h.params.on&&Object.keys(h.params.on).forEach(v=>{h.on(v,h.params.on[v])}),h.params&&h.params.onAny&&h.onAny(h.params.onAny),Object.assign(h,{enabled:h.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return h.params.direction==="horizontal"},isVertical(){return h.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:h.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.emit("_swiper"),h.params.init&&h.init(),h}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:o,params:l}=this,u=Dt(o,`.${l.slideClass}, swiper-slide`),d=Xo(u[0]);return Xo(n)-d}getSlideIndexByData(n){return this.getSlideIndex(this.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===n)[0])}recalcSlides(){const n=this,{slidesEl:o,params:l}=n;n.slides=Dt(o,`.${l.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,o){const l=this;n=Math.min(Math.max(n,0),1);const u=l.minTranslate(),m=(l.maxTranslate()-u)*n+u;l.translateTo(m,typeof o>"u"?0:o),l.updateActiveIndex(),l.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=n.el.className.split(" ").filter(l=>l.indexOf("swiper")===0||l.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",o.join(" "))}getSlideClasses(n){const o=this;return o.destroyed?"":n.className.split(" ").filter(l=>l.indexOf("swiper-slide")===0||l.indexOf(o.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=[];n.slides.forEach(l=>{const u=n.getSlideClasses(l);o.push({slideEl:l,classNames:u}),n.emit("_slideClass",l,u)}),n.emit("_slideClasses",o)}slidesPerViewDynamic(n,o){n===void 0&&(n="current"),o===void 0&&(o=!1);const l=this,{params:u,slides:d,slidesGrid:m,slidesSizesGrid:h,size:f,activeIndex:S}=l;let v=1;if(typeof u.slidesPerView=="number")return u.slidesPerView;if(u.centeredSlides){let w=d[S]?Math.ceil(d[S].swiperSlideSize):0,C;for(let j=S+1;j<d.length;j+=1)d[j]&&!C&&(w+=Math.ceil(d[j].swiperSlideSize),v+=1,w>f&&(C=!0));for(let j=S-1;j>=0;j-=1)d[j]&&!C&&(w+=d[j].swiperSlideSize,v+=1,w>f&&(C=!0))}else if(n==="current")for(let w=S+1;w<d.length;w+=1)(o?m[w]+h[w]-m[S]<f:m[w]-m[S]<f)&&(v+=1);else for(let w=S-1;w>=0;w-=1)m[S]-m[w]<f&&(v+=1);return v}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:o,params:l}=n;l.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(m=>{m.complete&&$o(n,m)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function u(){const m=n.rtlTranslate?n.translate*-1:n.translate,h=Math.min(Math.max(m,n.maxTranslate()),n.minTranslate());n.setTranslate(h),n.updateActiveIndex(),n.updateSlidesClasses()}let d;if(l.freeMode&&l.freeMode.enabled&&!l.cssMode)u(),l.autoHeight&&n.updateAutoHeight();else{if((l.slidesPerView==="auto"||l.slidesPerView>1)&&n.isEnd&&!l.centeredSlides){const m=n.virtual&&l.virtual.enabled?n.virtual.slides:n.slides;d=n.slideTo(m.length-1,0,!1,!0)}else d=n.slideTo(n.activeIndex,0,!1,!0);d||u()}l.watchOverflow&&o!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,o){o===void 0&&(o=!0);const l=this,u=l.params.direction;return n||(n=u==="horizontal"?"vertical":"horizontal"),n===u||n!=="horizontal"&&n!=="vertical"||(l.el.classList.remove(`${l.params.containerModifierClass}${u}`),l.el.classList.add(`${l.params.containerModifierClass}${n}`),l.emitContainerClasses(),l.params.direction=n,l.slides.forEach(d=>{n==="vertical"?d.style.width="":d.style.height=""}),l.emit("changeDirection"),o&&l.update()),l}changeLanguageDirection(n){const o=this;o.rtl&&n==="rtl"||!o.rtl&&n==="ltr"||(o.rtl=n==="rtl",o.rtlTranslate=o.params.direction==="horizontal"&&o.rtl,o.rtl?(o.el.classList.add(`${o.params.containerModifierClass}rtl`),o.el.dir="rtl"):(o.el.classList.remove(`${o.params.containerModifierClass}rtl`),o.el.dir="ltr"),o.update())}mount(n){const o=this;if(o.mounted)return!0;let l=n||o.params.el;if(typeof l=="string"&&(l=document.querySelector(l)),!l)return!1;l.swiper=o,l.parentNode&&l.parentNode.host&&l.parentNode.host.nodeName===o.params.swiperElementNodeName.toUpperCase()&&(o.isElement=!0);const u=()=>`.${(o.params.wrapperClass||"").trim().split(" ").join(".")}`;let m=l&&l.shadowRoot&&l.shadowRoot.querySelector?l.shadowRoot.querySelector(u()):Dt(l,u())[0];return!m&&o.params.createElements&&(m=Yo("div",o.params.wrapperClass),l.append(m),Dt(l,`.${o.params.slideClass}`).forEach(h=>{m.append(h)})),Object.assign(o,{el:l,wrapperEl:m,slidesEl:o.isElement&&!l.parentNode.host.slideSlots?l.parentNode.host:m,hostEl:o.isElement?l.parentNode.host:l,mounted:!0,rtl:l.dir.toLowerCase()==="rtl"||yn(l,"direction")==="rtl",rtlTranslate:o.params.direction==="horizontal"&&(l.dir.toLowerCase()==="rtl"||yn(l,"direction")==="rtl"),wrongRTL:yn(m,"display")==="-webkit-box"}),!0}init(n){const o=this;if(o.initialized||o.mount(n)===!1)return o;o.emit("beforeInit"),o.params.breakpoints&&o.setBreakpoint(),o.addClasses(),o.updateSize(),o.updateSlides(),o.params.watchOverflow&&o.checkOverflow(),o.params.grabCursor&&o.enabled&&o.setGrabCursor(),o.params.loop&&o.virtual&&o.params.virtual.enabled?o.slideTo(o.params.initialSlide+o.virtual.slidesBefore,0,o.params.runCallbacksOnInit,!1,!0):o.slideTo(o.params.initialSlide,0,o.params.runCallbacksOnInit,!1,!0),o.params.loop&&o.loopCreate(),o.attachEvents();const u=[...o.el.querySelectorAll('[loading="lazy"]')];return o.isElement&&u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),u.forEach(d=>{d.complete?$o(o,d):d.addEventListener("load",m=>{$o(o,m.target)})}),Ca(o),o.initialized=!0,Ca(o),o.emit("init"),o.emit("afterInit"),o}destroy(n,o){n===void 0&&(n=!0),o===void 0&&(o=!0);const l=this,{params:u,el:d,wrapperEl:m,slides:h}=l;return typeof l.params>"u"||l.destroyed||(l.emit("beforeDestroy"),l.initialized=!1,l.detachEvents(),u.loop&&l.loopDestroy(),o&&(l.removeClasses(),d&&typeof d!="string"&&d.removeAttribute("style"),m&&m.removeAttribute("style"),h&&h.length&&h.forEach(f=>{f.classList.remove(u.slideVisibleClass,u.slideFullyVisibleClass,u.slideActiveClass,u.slideNextClass,u.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),l.emit("destroy"),Object.keys(l.eventsListeners).forEach(f=>{l.off(f)}),n!==!1&&(l.el&&typeof l.el!="string"&&(l.el.swiper=null),_g(l)),l.destroyed=!0),null}static extendDefaults(n){pt(pa,n)}static get extendedDefaults(){return pa}static get defaults(){return Pa}static installModule(n){Yt.prototype.__modules__||(Yt.prototype.__modules__=[]);const o=Yt.prototype.__modules__;typeof n=="function"&&o.indexOf(n)<0&&o.push(n)}static use(n){return Array.isArray(n)?(n.forEach(o=>Yt.installModule(o)),Yt):(Yt.installModule(n),Yt)}};Object.keys(fa).forEach(i=>{Object.keys(fa[i]).forEach(n=>{Oa.prototype[n]=fa[i][n]})});Oa.use([Fg,Bg]);const Hf=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Rn(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function cr(i,n){const o=["__proto__","constructor","prototype"];Object.keys(n).filter(l=>o.indexOf(l)<0).forEach(l=>{typeof i[l]>"u"?i[l]=n[l]:Rn(n[l])&&Rn(i[l])&&Object.keys(n[l]).length>0?n[l].__swiper__?i[l]=n[l]:cr(i[l],n[l]):i[l]=n[l]})}function Wf(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Uf(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function qf(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Yf(i){i===void 0&&(i="");const n=i.split(" ").map(l=>l.trim()).filter(l=>!!l),o=[];return n.forEach(l=>{o.indexOf(l)<0&&o.push(l)}),o.join(" ")}function W0(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function U0(i){let{swiper:n,slides:o,passedParams:l,changedParams:u,nextEl:d,prevEl:m,scrollbarEl:h,paginationEl:f}=i;const S=u.filter(V=>V!=="children"&&V!=="direction"&&V!=="wrapperClass"),{params:v,pagination:w,navigation:C,scrollbar:j,virtual:I,thumbs:N}=n;let F,b,k,x,L,O,D,q;u.includes("thumbs")&&l.thumbs&&l.thumbs.swiper&&!l.thumbs.swiper.destroyed&&v.thumbs&&(!v.thumbs.swiper||v.thumbs.swiper.destroyed)&&(F=!0),u.includes("controller")&&l.controller&&l.controller.control&&v.controller&&!v.controller.control&&(b=!0),u.includes("pagination")&&l.pagination&&(l.pagination.el||f)&&(v.pagination||v.pagination===!1)&&w&&!w.el&&(k=!0),u.includes("scrollbar")&&l.scrollbar&&(l.scrollbar.el||h)&&(v.scrollbar||v.scrollbar===!1)&&j&&!j.el&&(x=!0),u.includes("navigation")&&l.navigation&&(l.navigation.prevEl||m)&&(l.navigation.nextEl||d)&&(v.navigation||v.navigation===!1)&&C&&!C.prevEl&&!C.nextEl&&(L=!0);const Q=V=>{n[V]&&(n[V].destroy(),V==="navigation"?(n.isElement&&(n[V].prevEl.remove(),n[V].nextEl.remove()),v[V].prevEl=void 0,v[V].nextEl=void 0,n[V].prevEl=void 0,n[V].nextEl=void 0):(n.isElement&&n[V].el.remove(),v[V].el=void 0,n[V].el=void 0))};u.includes("loop")&&n.isElement&&(v.loop&&!l.loop?O=!0:!v.loop&&l.loop?D=!0:q=!0),S.forEach(V=>{if(Rn(v[V])&&Rn(l[V]))Object.assign(v[V],l[V]),(V==="navigation"||V==="pagination"||V==="scrollbar")&&"enabled"in l[V]&&!l[V].enabled&&Q(V);else{const G=l[V];(G===!0||G===!1)&&(V==="navigation"||V==="pagination"||V==="scrollbar")?G===!1&&Q(V):v[V]=l[V]}}),S.includes("controller")&&!b&&n.controller&&n.controller.control&&v.controller&&v.controller.control&&(n.controller.control=v.controller.control),u.includes("children")&&o&&I&&v.virtual.enabled?(I.slides=o,I.update(!0)):u.includes("virtual")&&I&&v.virtual.enabled&&(o&&(I.slides=o),I.update(!0)),u.includes("children")&&o&&v.loop&&(q=!0),F&&N.init()&&N.update(!0),b&&(n.controller.control=v.controller.control),k&&(n.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),n.el.appendChild(f)),f&&(v.pagination.el=f),w.init(),w.render(),w.update()),x&&(n.isElement&&(!h||typeof h=="string")&&(h=document.createElement("div"),h.classList.add("swiper-scrollbar"),h.part.add("scrollbar"),n.el.appendChild(h)),h&&(v.scrollbar.el=h),j.init(),j.updateSize(),j.setTranslate()),L&&(n.isElement&&((!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-next"),d.innerHTML=n.hostEl.constructor.nextButtonSvg,d.part.add("button-next"),n.el.appendChild(d)),(!m||typeof m=="string")&&(m=document.createElement("div"),m.classList.add("swiper-button-prev"),m.innerHTML=n.hostEl.constructor.prevButtonSvg,m.part.add("button-prev"),n.el.appendChild(m))),d&&(v.navigation.nextEl=d),m&&(v.navigation.prevEl=m),C.init(),C.update()),u.includes("allowSlideNext")&&(n.allowSlideNext=l.allowSlideNext),u.includes("allowSlidePrev")&&(n.allowSlidePrev=l.allowSlidePrev),u.includes("direction")&&n.changeDirection(l.direction,!1),(O||q)&&n.loopDestroy(),(D||q)&&n.loopCreate(),n.update()}function q0(i,n){i===void 0&&(i={}),n===void 0&&(n=!0);const o={on:{}},l={},u={};cr(o,Pa),o._emitClasses=!0,o.init=!1;const d={},m=Hf.map(f=>f.replace(/_/,"")),h=Object.assign({},i);return Object.keys(h).forEach(f=>{typeof i[f]>"u"||(m.indexOf(f)>=0?Rn(i[f])?(o[f]={},u[f]={},cr(o[f],i[f]),cr(u[f],i[f])):(o[f]=i[f],u[f]=i[f]):f.search(/on[A-Z]/)===0&&typeof i[f]=="function"?n?l[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:o.on[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:d[f]=i[f])}),["navigation","pagination","scrollbar"].forEach(f=>{o[f]===!0&&(o[f]={}),o[f]===!1&&delete o[f]}),{params:o,passedParams:u,rest:d,events:l}}function Y0(i,n){let{el:o,nextEl:l,prevEl:u,paginationEl:d,scrollbarEl:m,swiper:h}=i;Wf(n)&&l&&u&&(h.params.navigation.nextEl=l,h.originalParams.navigation.nextEl=l,h.params.navigation.prevEl=u,h.originalParams.navigation.prevEl=u),Uf(n)&&d&&(h.params.pagination.el=d,h.originalParams.pagination.el=d),qf(n)&&m&&(h.params.scrollbar.el=m,h.originalParams.scrollbar.el=m),h.init(o)}function X0(i,n,o,l,u){const d=[];if(!n)return d;const m=f=>{d.indexOf(f)<0&&d.push(f)};if(o&&l){const f=l.map(u),S=o.map(u);f.join("")!==S.join("")&&m("children"),l.length!==o.length&&m("children")}return Hf.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in i&&f in n)if(Rn(i[f])&&Rn(n[f])){const S=Object.keys(i[f]),v=Object.keys(n[f]);S.length!==v.length?m(f):(S.forEach(w=>{i[f][w]!==n[f][w]&&m(f)}),v.forEach(w=>{i[f][w]!==n[f][w]&&m(f)}))}else i[f]!==n[f]&&m(f)}),d}const Q0=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},Qo.apply(this,arguments)}function Xf(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function Qf(i){const n=[];return Te.Children.toArray(i).forEach(o=>{Xf(o)?n.push(o):o.props&&o.props.children&&Qf(o.props.children).forEach(l=>n.push(l))}),n}function K0(i){const n=[],o={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Te.Children.toArray(i).forEach(l=>{if(Xf(l))n.push(l);else if(l.props&&l.props.slot&&o[l.props.slot])o[l.props.slot].push(l);else if(l.props&&l.props.children){const u=Qf(l.props.children);u.length>0?u.forEach(d=>n.push(d)):o["container-end"].push(l)}else o["container-end"].push(l)}),{slides:n,slots:o}}function Z0(i,n,o){if(!o)return null;const l=v=>{let w=v;return v<0?w=n.length+v:w>=n.length&&(w=w-n.length),w},u=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:d,to:m}=o,h=i.params.loop?-n.length:0,f=i.params.loop?n.length*2:n.length,S=[];for(let v=h;v<f;v+=1)v>=d&&v<=m&&S.push(n[l(v)]);return S.map((v,w)=>Te.cloneElement(v,{swiper:i,style:u,key:v.props.virtualIndex||v.key||`slide-${w}`}))}function fi(i,n){return typeof window>"u"?Ee.useEffect(i,n):Ee.useLayoutEffect(i,n)}const of=Ee.createContext(null),J0=Ee.createContext(null),yr=Ee.forwardRef(function(i,n){let{className:o,tag:l="div",wrapperTag:u="div",children:d,onSwiper:m,...h}=i===void 0?{}:i,f=!1;const[S,v]=Ee.useState("swiper"),[w,C]=Ee.useState(null),[j,I]=Ee.useState(!1),N=Ee.useRef(!1),F=Ee.useRef(null),b=Ee.useRef(null),k=Ee.useRef(null),x=Ee.useRef(null),L=Ee.useRef(null),O=Ee.useRef(null),D=Ee.useRef(null),q=Ee.useRef(null),{params:Q,passedParams:V,rest:G,events:K}=q0(h),{slides:ee,slots:X}=K0(d),ie=()=>{I(!j)};Object.assign(Q.on,{_containerClasses(Y,W){v(W)}});const ae=()=>{Object.assign(Q.on,K),f=!0;const Y={...Q};if(delete Y.wrapperClass,b.current=new Oa(Y),b.current.virtual&&b.current.params.virtual.enabled){b.current.virtual.slides=ee;const W={cache:!1,slides:ee,renderExternal:C,renderExternalUpdate:!1};cr(b.current.params.virtual,W),cr(b.current.originalParams.virtual,W)}};F.current||ae(),b.current&&b.current.on("_beforeBreakpoint",ie);const ge=()=>{f||!K||!b.current||Object.keys(K).forEach(Y=>{b.current.on(Y,K[Y])})},xe=()=>{!K||!b.current||Object.keys(K).forEach(Y=>{b.current.off(Y,K[Y])})};Ee.useEffect(()=>()=>{b.current&&b.current.off("_beforeBreakpoint",ie)}),Ee.useEffect(()=>{!N.current&&b.current&&(b.current.emitSlidesClasses(),N.current=!0)}),fi(()=>{if(n&&(n.current=F.current),!!F.current)return b.current.destroyed&&ae(),Y0({el:F.current,nextEl:L.current,prevEl:O.current,paginationEl:D.current,scrollbarEl:q.current,swiper:b.current},Q),m&&!b.current.destroyed&&m(b.current),()=>{b.current&&!b.current.destroyed&&b.current.destroy(!0,!1)}},[]),fi(()=>{ge();const Y=X0(V,k.current,ee,x.current,W=>W.key);return k.current=V,x.current=ee,Y.length&&b.current&&!b.current.destroyed&&U0({swiper:b.current,slides:ee,passedParams:V,changedParams:Y,nextEl:L.current,prevEl:O.current,scrollbarEl:q.current,paginationEl:D.current}),()=>{xe()}}),fi(()=>{Q0(b.current)},[w]);function A(){return Q.virtual?Z0(b.current,ee,w):ee.map((Y,W)=>Te.cloneElement(Y,{swiper:b.current,swiperSlideIndex:W}))}return Te.createElement(l,Qo({ref:F,className:Yf(`${S}${o?` ${o}`:""}`)},G),Te.createElement(J0.Provider,{value:b.current},X["container-start"],Te.createElement(u,{className:W0(Q.wrapperClass)},X["wrapper-start"],A(),X["wrapper-end"]),Wf(Q)&&Te.createElement(Te.Fragment,null,Te.createElement("div",{ref:O,className:"swiper-button-prev"}),Te.createElement("div",{ref:L,className:"swiper-button-next"})),qf(Q)&&Te.createElement("div",{ref:q,className:"swiper-scrollbar"}),Uf(Q)&&Te.createElement("div",{ref:D,className:"swiper-pagination"}),X["container-end"]))});yr.displayName="Swiper";const Oe=Ee.forwardRef(function(i,n){let{tag:o="div",children:l,className:u="",swiper:d,zoom:m,lazy:h,virtualIndex:f,swiperSlideIndex:S,...v}=i===void 0?{}:i;const w=Ee.useRef(null),[C,j]=Ee.useState("swiper-slide"),[I,N]=Ee.useState(!1);function F(L,O,D){O===w.current&&j(D)}fi(()=>{if(typeof S<"u"&&(w.current.swiperSlideIndex=S),n&&(n.current=w.current),!(!w.current||!d)){if(d.destroyed){C!=="swiper-slide"&&j("swiper-slide");return}return d.on("_slideClass",F),()=>{d&&d.off("_slideClass",F)}}}),fi(()=>{d&&w.current&&!d.destroyed&&j(d.getSlideClasses(w.current))},[d]);const b={isActive:C.indexOf("swiper-slide-active")>=0,isVisible:C.indexOf("swiper-slide-visible")>=0,isPrev:C.indexOf("swiper-slide-prev")>=0,isNext:C.indexOf("swiper-slide-next")>=0},k=()=>typeof l=="function"?l(b):l,x=()=>{N(!0)};return Te.createElement(o,Qo({ref:w,className:Yf(`${C}${u?` ${u}`:""}`),"data-swiper-slide-index":f,onLoad:x},v),m&&Te.createElement(of.Provider,{value:b},Te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof m=="number"?m:void 0},k(),h&&!I&&Te.createElement("div",{className:"swiper-lazy-preloader"}))),!m&&Te.createElement(of.Provider,{value:b},k(),h&&!I&&Te.createElement("div",{className:"swiper-lazy-preloader"})))});Oe.displayName="SwiperSlide";function ev(i,n,o,l){return i.params.createElements&&Object.keys(l).forEach(u=>{if(!o[u]&&o.auto===!0){let d=Dt(i.el,`.${l[u]}`)[0];d||(d=Yo("div",l[u]),d.className=l[u],i.el.append(d)),o[u]=d,n[u]=d}}),o}function li(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function vi(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const d="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:k=>k,formatFractionTotal:k=>k,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),n.pagination={el:null,bullets:[]};let m,h=0;function f(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function S(k,x){const{bulletActiveClass:L}=n.params.pagination;k&&(k=k[`${x==="prev"?"previous":"next"}ElementSibling`],k&&(k.classList.add(`${L}-${x}`),k=k[`${x==="prev"?"previous":"next"}ElementSibling`],k&&k.classList.add(`${L}-${x}-${x}`)))}function v(k,x,L){if(k=k%L,x=x%L,x===k+1)return"next";if(x===k-1)return"previous"}function w(k){const x=k.target.closest(li(n.params.pagination.bulletClass));if(!x)return;k.preventDefault();const L=Xo(x)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===L)return;const O=v(n.realIndex,L,n.slides.length);O==="next"?n.slideNext():O==="previous"?n.slidePrev():n.slideToLoop(L)}else n.slideTo(L)}function C(){const k=n.rtl,x=n.params.pagination;if(f())return;let L=n.pagination.el;L=qt(L);let O,D;const q=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,Q=n.params.loop?Math.ceil(q/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(D=n.previousRealIndex||0,O=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(O=n.snapIndex,D=n.previousSnapIndex):(D=n.previousIndex||0,O=n.activeIndex||0),x.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const V=n.pagination.bullets;let G,K,ee;if(x.dynamicBullets&&(m=Ta(V[0],n.isHorizontal()?"width":"height"),L.forEach(X=>{X.style[n.isHorizontal()?"width":"height"]=`${m*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&D!==void 0&&(h+=O-(D||0),h>x.dynamicMainBullets-1?h=x.dynamicMainBullets-1:h<0&&(h=0)),G=Math.max(O-h,0),K=G+(Math.min(V.length,x.dynamicMainBullets)-1),ee=(K+G)/2),V.forEach(X=>{const ie=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(ae=>`${x.bulletActiveClass}${ae}`)].map(ae=>typeof ae=="string"&&ae.includes(" ")?ae.split(" "):ae).flat();X.classList.remove(...ie)}),L.length>1)V.forEach(X=>{const ie=Xo(X);ie===O?X.classList.add(...x.bulletActiveClass.split(" ")):n.isElement&&X.setAttribute("part","bullet"),x.dynamicBullets&&(ie>=G&&ie<=K&&X.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),ie===G&&S(X,"prev"),ie===K&&S(X,"next"))});else{const X=V[O];if(X&&X.classList.add(...x.bulletActiveClass.split(" ")),n.isElement&&V.forEach((ie,ae)=>{ie.setAttribute("part",ae===O?"bullet-active":"bullet")}),x.dynamicBullets){const ie=V[G],ae=V[K];for(let ge=G;ge<=K;ge+=1)V[ge]&&V[ge].classList.add(...`${x.bulletActiveClass}-main`.split(" "));S(ie,"prev"),S(ae,"next")}}if(x.dynamicBullets){const X=Math.min(V.length,x.dynamicMainBullets+4),ie=(m*X-m)/2-ee*m,ae=k?"right":"left";V.forEach(ge=>{ge.style[n.isHorizontal()?ae:"top"]=`${ie}px`})}}L.forEach((V,G)=>{if(x.type==="fraction"&&(V.querySelectorAll(li(x.currentClass)).forEach(K=>{K.textContent=x.formatFractionCurrent(O+1)}),V.querySelectorAll(li(x.totalClass)).forEach(K=>{K.textContent=x.formatFractionTotal(Q)})),x.type==="progressbar"){let K;x.progressbarOpposite?K=n.isHorizontal()?"vertical":"horizontal":K=n.isHorizontal()?"horizontal":"vertical";const ee=(O+1)/Q;let X=1,ie=1;K==="horizontal"?X=ee:ie=ee,V.querySelectorAll(li(x.progressbarFillClass)).forEach(ae=>{ae.style.transform=`translate3d(0,0,0) scaleX(${X}) scaleY(${ie})`,ae.style.transitionDuration=`${n.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(V.innerHTML=x.renderCustom(n,O+1,Q),G===0&&u("paginationRender",V)):(G===0&&u("paginationRender",V),u("paginationUpdate",V)),n.params.watchOverflow&&n.enabled&&V.classList[n.isLocked?"add":"remove"](x.lockClass)})}function j(){const k=n.params.pagination;if(f())return;const x=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let L=n.pagination.el;L=qt(L);let O="";if(k.type==="bullets"){let D=n.params.loop?Math.ceil(x/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&D>x&&(D=x);for(let q=0;q<D;q+=1)k.renderBullet?O+=k.renderBullet.call(n,q,k.bulletClass):O+=`<${k.bulletElement} ${n.isElement?'part="bullet"':""} class="${k.bulletClass}"></${k.bulletElement}>`}k.type==="fraction"&&(k.renderFraction?O=k.renderFraction.call(n,k.currentClass,k.totalClass):O=`<span class="${k.currentClass}"></span> / <span class="${k.totalClass}"></span>`),k.type==="progressbar"&&(k.renderProgressbar?O=k.renderProgressbar.call(n,k.progressbarFillClass):O=`<span class="${k.progressbarFillClass}"></span>`),n.pagination.bullets=[],L.forEach(D=>{k.type!=="custom"&&(D.innerHTML=O||""),k.type==="bullets"&&n.pagination.bullets.push(...D.querySelectorAll(li(k.bulletClass)))}),k.type!=="custom"&&u("paginationRender",L[0])}function I(){n.params.pagination=ev(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const k=n.params.pagination;if(!k.el)return;let x;typeof k.el=="string"&&n.isElement&&(x=n.el.querySelector(k.el)),!x&&typeof k.el=="string"&&(x=[...document.querySelectorAll(k.el)]),x||(x=k.el),!(!x||x.length===0)&&(n.params.uniqueNavElements&&typeof k.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...n.el.querySelectorAll(k.el)],x.length>1&&(x=x.filter(L=>Ff(L,".swiper")[0]===n.el)[0])),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(n.pagination,{el:x}),x=qt(x),x.forEach(L=>{k.type==="bullets"&&k.clickable&&L.classList.add(...(k.clickableClass||"").split(" ")),L.classList.add(k.modifierClass+k.type),L.classList.add(n.isHorizontal()?k.horizontalClass:k.verticalClass),k.type==="bullets"&&k.dynamicBullets&&(L.classList.add(`${k.modifierClass}${k.type}-dynamic`),h=0,k.dynamicMainBullets<1&&(k.dynamicMainBullets=1)),k.type==="progressbar"&&k.progressbarOpposite&&L.classList.add(k.progressbarOppositeClass),k.clickable&&L.addEventListener("click",w),n.enabled||L.classList.add(k.lockClass)}))}function N(){const k=n.params.pagination;if(f())return;let x=n.pagination.el;x&&(x=qt(x),x.forEach(L=>{L.classList.remove(k.hiddenClass),L.classList.remove(k.modifierClass+k.type),L.classList.remove(n.isHorizontal()?k.horizontalClass:k.verticalClass),k.clickable&&(L.classList.remove(...(k.clickableClass||"").split(" ")),L.removeEventListener("click",w))})),n.pagination.bullets&&n.pagination.bullets.forEach(L=>L.classList.remove(...k.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const k=n.params.pagination;let{el:x}=n.pagination;x=qt(x),x.forEach(L=>{L.classList.remove(k.horizontalClass,k.verticalClass),L.classList.add(n.isHorizontal()?k.horizontalClass:k.verticalClass)})}),l("init",()=>{n.params.pagination.enabled===!1?b():(I(),j(),C())}),l("activeIndexChange",()=>{typeof n.snapIndex>"u"&&C()}),l("snapIndexChange",()=>{C()}),l("snapGridLengthChange",()=>{j(),C()}),l("destroy",()=>{N()}),l("enable disable",()=>{let{el:k}=n.pagination;k&&(k=qt(k),k.forEach(x=>x.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),l("lock unlock",()=>{C()}),l("click",(k,x)=>{const L=x.target,O=qt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&O&&O.length>0&&!L.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&L===n.navigation.nextEl||n.navigation.prevEl&&L===n.navigation.prevEl))return;const D=O[0].classList.contains(n.params.pagination.hiddenClass);u(D===!0?"paginationShow":"paginationHide"),O.forEach(q=>q.classList.toggle(n.params.pagination.hiddenClass))}});const F=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:k}=n.pagination;k&&(k=qt(k),k.forEach(x=>x.classList.remove(n.params.pagination.paginationDisabledClass))),I(),j(),C()},b=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:k}=n.pagination;k&&(k=qt(k),k.forEach(x=>x.classList.add(n.params.pagination.paginationDisabledClass))),N()};Object.assign(n.pagination,{enable:F,disable:b,render:j,update:C,init:I,destroy:N})}function yi(i){let{swiper:n,extendParams:o,on:l,emit:u,params:d}=i;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let m,h,f=d&&d.autoplay?d.autoplay.delay:3e3,S=d&&d.autoplay?d.autoplay.delay:3e3,v,w=new Date().getTime(),C,j,I,N,F,b,k;function x(A){!n||n.destroyed||!n.wrapperEl||A.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",x),!(k||A.detail&&A.detail.bySwiperTouchMove)&&G())}const L=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?C=!0:C&&(S=v,C=!1);const A=n.autoplay.paused?v:w+S-new Date().getTime();n.autoplay.timeLeft=A,u("autoplayTimeLeft",A,A/f),h=requestAnimationFrame(()=>{L()})},O=()=>{let A;return n.virtual&&n.params.virtual.enabled?A=n.slides.filter(W=>W.classList.contains("swiper-slide-active"))[0]:A=n.slides[n.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},D=A=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(h),L();let Y=typeof A>"u"?n.params.autoplay.delay:A;f=n.params.autoplay.delay,S=n.params.autoplay.delay;const W=O();!Number.isNaN(W)&&W>0&&typeof A>"u"&&(Y=W,f=W,S=W),v=Y;const P=n.params.speed,R=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(P,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,P,!0,!0),u("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(P,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,P,!0,!0),u("autoplay")),n.params.cssMode&&(w=new Date().getTime(),requestAnimationFrame(()=>{D()})))};return Y>0?(clearTimeout(m),m=setTimeout(()=>{R()},Y)):requestAnimationFrame(()=>{R()}),Y},q=()=>{w=new Date().getTime(),n.autoplay.running=!0,D(),u("autoplayStart")},Q=()=>{n.autoplay.running=!1,clearTimeout(m),cancelAnimationFrame(h),u("autoplayStop")},V=(A,Y)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(m),A||(b=!0);const W=()=>{u("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",x):G()};if(n.autoplay.paused=!0,Y){F&&(v=n.params.autoplay.delay),F=!1,W();return}v=(v||n.params.autoplay.delay)-(new Date().getTime()-w),!(n.isEnd&&v<0&&!n.params.loop)&&(v<0&&(v=0),W())},G=()=>{n.isEnd&&v<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(w=new Date().getTime(),b?(b=!1,D(v)):D(),n.autoplay.paused=!1,u("autoplayResume"))},K=()=>{if(n.destroyed||!n.autoplay.running)return;const A=Qt();A.visibilityState==="hidden"&&(b=!0,V(!0)),A.visibilityState==="visible"&&G()},ee=A=>{A.pointerType==="mouse"&&(b=!0,k=!0,!(n.animating||n.autoplay.paused)&&V(!0))},X=A=>{A.pointerType==="mouse"&&(k=!1,n.autoplay.paused&&G())},ie=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",ee),n.el.addEventListener("pointerleave",X))},ae=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",ee),n.el.removeEventListener("pointerleave",X))},ge=()=>{Qt().addEventListener("visibilitychange",K)},xe=()=>{Qt().removeEventListener("visibilitychange",K)};l("init",()=>{n.params.autoplay.enabled&&(ie(),ge(),q())}),l("destroy",()=>{ae(),xe(),n.autoplay.running&&Q()}),l("_freeModeStaticRelease",()=>{(I||b)&&G()}),l("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?Q():V(!0,!0)}),l("beforeTransitionStart",(A,Y,W)=>{n.destroyed||!n.autoplay.running||(W||!n.params.autoplay.disableOnInteraction?V(!0,!0):Q())}),l("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){Q();return}j=!0,I=!1,b=!1,N=setTimeout(()=>{b=!0,I=!0,V(!0)},200)}}),l("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!j)){if(clearTimeout(N),clearTimeout(m),n.params.autoplay.disableOnInteraction){I=!1,j=!1;return}I&&n.params.cssMode&&G(),I=!1,j=!1}}),l("slideChange",()=>{n.destroyed||!n.autoplay.running||(F=!0)}),Object.assign(n.autoplay,{start:q,stop:Q,pause:V,resume:G})}function rs(i){let{swiper:n,extendParams:o,emit:l,once:u}=i;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(n.params.cssMode)return;const f=n.getTranslate();n.setTranslate(f),n.setTransition(0),n.touchEventsData.velocities.length=0,n.freeMode.onTouchEnd({currentPos:n.rtl?n.translate:-n.translate})}function m(){if(n.params.cssMode)return;const{touchEventsData:f,touches:S}=n;f.velocities.length===0&&f.velocities.push({position:S[n.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:S[n.isHorizontal()?"currentX":"currentY"],time:Nn()})}function h(f){let{currentPos:S}=f;if(n.params.cssMode)return;const{params:v,wrapperEl:w,rtlTranslate:C,snapGrid:j,touchEventsData:I}=n,F=Nn()-I.touchStartTime;if(S<-n.minTranslate()){n.slideTo(n.activeIndex);return}if(S>-n.maxTranslate()){n.slides.length<j.length?n.slideTo(j.length-1):n.slideTo(n.slides.length-1);return}if(v.freeMode.momentum){if(I.velocities.length>1){const Q=I.velocities.pop(),V=I.velocities.pop(),G=Q.position-V.position,K=Q.time-V.time;n.velocity=G/K,n.velocity/=2,Math.abs(n.velocity)<v.freeMode.minimumVelocity&&(n.velocity=0),(K>150||Nn()-Q.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity*=v.freeMode.momentumVelocityRatio,I.velocities.length=0;let b=1e3*v.freeMode.momentumRatio;const k=n.velocity*b;let x=n.translate+k;C&&(x=-x);let L=!1,O;const D=Math.abs(n.velocity)*20*v.freeMode.momentumBounceRatio;let q;if(x<n.maxTranslate())v.freeMode.momentumBounce?(x+n.maxTranslate()<-D&&(x=n.maxTranslate()-D),O=n.maxTranslate(),L=!0,I.allowMomentumBounce=!0):x=n.maxTranslate(),v.loop&&v.centeredSlides&&(q=!0);else if(x>n.minTranslate())v.freeMode.momentumBounce?(x-n.minTranslate()>D&&(x=n.minTranslate()+D),O=n.minTranslate(),L=!0,I.allowMomentumBounce=!0):x=n.minTranslate(),v.loop&&v.centeredSlides&&(q=!0);else if(v.freeMode.sticky){let Q;for(let V=0;V<j.length;V+=1)if(j[V]>-x){Q=V;break}Math.abs(j[Q]-x)<Math.abs(j[Q-1]-x)||n.swipeDirection==="next"?x=j[Q]:x=j[Q-1],x=-x}if(q&&u("transitionEnd",()=>{n.loopFix()}),n.velocity!==0){if(C?b=Math.abs((-x-n.translate)/n.velocity):b=Math.abs((x-n.translate)/n.velocity),v.freeMode.sticky){const Q=Math.abs((C?-x:x)-n.translate),V=n.slidesSizesGrid[n.activeIndex];Q<V?b=v.speed:Q<2*V?b=v.speed*1.5:b=v.speed*2.5}}else if(v.freeMode.sticky){n.slideToClosest();return}v.freeMode.momentumBounce&&L?(n.updateProgress(O),n.setTransition(b),n.setTranslate(x),n.transitionStart(!0,n.swipeDirection),n.animating=!0,sa(w,()=>{!n||n.destroyed||!I.allowMomentumBounce||(l("momentumBounce"),n.setTransition(v.speed),setTimeout(()=>{n.setTranslate(O),sa(w,()=>{!n||n.destroyed||n.transitionEnd()})},0))})):n.velocity?(l("_freeModeNoMomentumRelease"),n.updateProgress(x),n.setTransition(b),n.setTranslate(x),n.transitionStart(!0,n.swipeDirection),n.animating||(n.animating=!0,sa(w,()=>{!n||n.destroyed||n.transitionEnd()}))):n.updateProgress(x),n.updateActiveIndex(),n.updateSlidesClasses()}else if(v.freeMode.sticky){n.slideToClosest();return}else v.freeMode&&l("_freeModeNoMomentumRelease");(!v.freeMode.momentum||F>=v.longSwipesMs)&&(l("_freeModeStaticRelease"),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses())}Object.assign(n,{freeMode:{onTouchStart:d,onTouchMove:m,onTouchEnd:h}})}const tv=oe.div`
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
`,nv=oe.section`
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
`,rv=oe.section`
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
`,iv=oe.div`
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
`,ov=oe.div`
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
`,ai=oe(Oe)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,sv=()=>g.jsx(g.Fragment,{children:g.jsxs(nv,{children:[g.jsx(tv,{}),g.jsxs(rv,{children:[g.jsxs(iv,{children:[g.jsxs("h1",{children:[g.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),g.jsx("a",{href:"#",children:g.jsx(Sg,{})})]}),g.jsx(ov,{children:g.jsxs(yr,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[yi,rs,vi],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[g.jsx(ai,{children:g.jsxs("div",{children:[g.jsx(oi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),g.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),g.jsx(ai,{children:g.jsxs("div",{children:[g.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),g.jsx(oi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),g.jsx(ai,{children:g.jsxs("div",{children:[g.jsx(oi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),g.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),g.jsx(ai,{children:g.jsxs("div",{children:[g.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),g.jsx(oi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),g.jsx(ai,{children:g.jsxs("div",{children:[g.jsx(oi,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),g.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})})]})})]})]})}),lv=oe.div`
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
`,sf=()=>g.jsx(lv,{children:g.jsxs(yr,{modules:[yi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})})]})}),av=oe.button`
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
        font-weight: 400;
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 25px;
    }
    
`,uv=()=>g.jsx(g.Fragment,{children:g.jsxs(av,{children:[g.jsx("b",{children:"Solicitar orçamento"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png"})]})}),cv=oe.section`
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
`,dv=oe.div`
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
`,fv=oe.div`
    display: flex;
    gap: 30px;
    width: 100%;
    position: relative;

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
`,pv=oe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
    }
`,mv=()=>g.jsx(g.Fragment,{children:g.jsxs(cv,{children:[g.jsxs(dv,{children:[g.jsxs("div",{children:[g.jsxs("h1",{children:[g.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),g.jsxs("p",{children:["Escolher a qualidade é a melhor escolha, veja nossos ",g.jsx("a",{href:"#",children:"pacotes."})]})]}),g.jsx("div",{children:g.jsx(uv,{})})]}),g.jsx(fv,{children:g.jsxs(yr,{modules:[yi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),g.jsx(Oe,{children:g.jsx("a",{href:"#",children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})})]})}),g.jsx(pv,{children:g.jsx("a",{href:"#",children:g.jsx(Rf,{})})})]})}),hv=oe.div`
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
`,No=({borderRadius:i,bgColor:n,bBackground:o,icon:l,boldText:u,normalText:d})=>g.jsxs(hv,{borderRadius:i,bgColor:n,bBackground:o,children:[g.jsx("a",{href:"#",children:l?g.jsx(l,{}):g.jsx(kg,{})}),g.jsxs("h4",{children:[g.jsx("b",{children:u||"Texto em Negrito"}),d||"Texto normal de exemplo"]}),g.jsx(vr,{})]}),gv=oe.section`
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

`,vv=oe.div`
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
`,yv=oe.div`
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
`,xv=oe.div`
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
`,wv=oe.div`
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
`,Sv=oe.div`
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
`,Ev=()=>g.jsx(g.Fragment,{children:g.jsxs(gv,{children:[g.jsx(vv,{children:g.jsxs("h1",{children:["Para quem ",g.jsx("b",{children:"nós somos?"})]})}),g.jsxs(yv,{children:[g.jsx(xv,{children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),g.jsx(No,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Io,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),g.jsx(No,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Io,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),g.jsxs(wv,{children:[g.jsx(No,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Io,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),g.jsx(No,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Io,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"}),g.jsx(Sv,{children:g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})}),kv=tg`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`,Tv=oe.div`
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
    animation: ${({isOpen:i})=>i?kv:"none"} 0.3s ease;
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
`,Cv=({items:i,onTextClick:n})=>{n||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[o,l]=Ee.useState(null),u=d=>{console.log(`OpenText clicked: ${d}`),l(o===d?null:d),n&&n(d)};return g.jsx(g.Fragment,{children:i.map((d,m)=>g.jsxs(Tv,{isOpen:o===m,onClick:()=>u(m),children:[g.jsxs("h3",{children:[d.title,g.jsx("span",{className:"arrow",children:g.jsx(Eg,{})})]}),g.jsx("div",{className:"content",children:d.text})]},m))})},Pv=oe.div`
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
`,jv=({images:i,activeIndex:n})=>(console.log("Active Index:",n),console.log("Images Array:",i),n===null||n<0||n>=i.length?g.jsx("div",{children:"Nenhuma imagem selecionada."}):g.jsx(Pv,{children:g.jsx("img",{src:i[n],alt:`Imagem ${n+1}`})})),_v=oe.div`
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
`,zv=oe.section`
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
`,bv=oe.section`
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
`,Mv=oe.div`
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
`,Iv=oe.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`,Lv=()=>{const[i,n]=Ee.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],l=["https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png"],u=d=>{console.log(`Texto clicado: ${d}`),n(d)};return g.jsx(g.Fragment,{children:g.jsxs(zv,{children:[g.jsx(_v,{}),g.jsxs(bv,{children:[g.jsxs(Mv,{children:[g.jsxs("h1",{children:[g.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),g.jsx("div",{children:g.jsx(Cv,{items:o,onTextClick:u})}),g.jsx(vr,{})]}),g.jsx(Iv,{children:g.jsx(jv,{images:l,activeIndex:i})})]})]})})},Ov=oe.div`
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
`,Nv=oe.div`
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
`,Rv=oe.div`
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
`,ui=({logo:i,nota:n,empresa:o,depoimento:l})=>g.jsx(g.Fragment,{children:g.jsxs(Ov,{children:[g.jsxs(Nv,{children:[g.jsx("img",{src:i}),g.jsxs("div",{children:[g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png"}),g.jsx("p",{children:n})]})]}),g.jsxs(Rv,{children:[g.jsx("h1",{children:o}),g.jsx("p",{children:l})]})]})}),Dv=oe.section`
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
`,Av=oe.div`
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
`,Fv=oe.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`,Bv=oe.div`
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
`,$v=oe.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`,Vv=()=>g.jsx(g.Fragment,{children:g.jsxs(Dv,{children:[g.jsx(Av,{children:g.jsx("h2",{children:"Depoimentos"})}),g.jsx(Fv,{children:g.jsx("a",{href:"#",children:g.jsx(Rf,{})})}),g.jsx(Bv,{children:g.jsxs("h1",{children:["Não tenha dúvidas, ",g.jsx("b",{children:"escolha o certo!"})]})}),g.jsx($v,{children:g.jsxs(yr,{modules:[yi,vi],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[g.jsx(Oe,{children:g.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),g.jsx(Oe,{children:g.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),g.jsx(Oe,{children:g.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),g.jsx(Oe,{children:g.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),g.jsx(Oe,{children:g.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})})]})})]})}),Gv=oe.div`
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
`,Hv=()=>g.jsx(Gv,{children:g.jsxs(yr,{modules:[yi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})}),g.jsx(Oe,{children:g.jsxs("div",{children:[g.jsx("h3",{children:"Faça seu site conosco"}),g.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734953001/iconWhite_stkg7v.png",alt:"icon"})]})})]})}),Wv=oe.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,Uv=oe.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`,qv=oe.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`,Yv=oe.div`
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
`,Xv=oe.div`
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
`,Qv=oe.div`
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
        background: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734821975/icon_vbq67u.png')
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
`,ma=({promoBold:i,promo:n,valor:o,servico:l,listItems:u=[]})=>g.jsxs(Wv,{children:[g.jsx(Uv,{}),g.jsxs(qv,{children:[g.jsx(Yv,{children:g.jsxs("h4",{children:[g.jsx("b",{children:i})," ",n]})}),g.jsxs(Xv,{children:[g.jsx("h1",{children:l}),g.jsxs("div",{children:[g.jsx("p",{children:"Economize agora"}),g.jsx("span",{children:o})]}),g.jsx(vr,{})]})]}),g.jsx(Qv,{children:g.jsx("ol",{children:u.map((d,m)=>g.jsx("li",{children:d},m))})})]}),Kv=oe.section`
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
`,Zv=oe.div`
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
`,Jv=oe.div`
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

`,e1=()=>g.jsx(g.Fragment,{children:g.jsxs(Kv,{children:[g.jsx(Zv,{children:g.jsxs("h1",{children:["O que ",g.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),g.jsxs(Jv,{children:[g.jsx("div",{children:g.jsx(ma,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"E-commerce",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),g.jsx("div",{children:g.jsx(ma,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Landing Page",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),g.jsx("div",{children:g.jsx(ma,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Institucional",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})})]})]})}),t1=()=>g.jsxs(g.Fragment,{children:[g.jsx(ig,{}),g.jsx(pg,{}),g.jsx(sv,{}),g.jsx(sf,{}),g.jsx(mv,{}),g.jsx(Ev,{}),g.jsx(sf,{}),g.jsx(Lv,{}),g.jsx(Vv,{}),g.jsx(Hv,{}),g.jsx(e1,{})]});function n1(){return g.jsx(g.Fragment,{children:g.jsx(t1,{})})}th.createRoot(document.getElementById("root")).render(g.jsx(Ee.StrictMode,{children:g.jsx(n1,{})}));
