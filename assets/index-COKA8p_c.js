(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function Qm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kl={exports:{}},oi={},Zl={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Km(){if(Md)return he;Md=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function T(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,N={};function F(j,D,ce){this.props=j,this.context=D,this.refs=N,this.updater=ce||b}F.prototype.isReactComponent={},F.prototype.setState=function(j,D){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,D,"setState")},F.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=F.prototype;function E(j,D,ce){this.props=j,this.context=D,this.refs=N,this.updater=ce||b}var w=E.prototype=new M;w.constructor=E,I(w,F.prototype),w.isPureReactComponent=!0;var z=Array.isArray,O=Object.prototype.hasOwnProperty,A={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function K(j,D,ce){var de,ge={},me=null,Ee=null;if(D!=null)for(de in D.ref!==void 0&&(Ee=D.ref),D.key!==void 0&&(me=""+D.key),D)O.call(D,de)&&!U.hasOwnProperty(de)&&(ge[de]=D[de]);var xe=arguments.length-2;if(xe===1)ge.children=ce;else if(1<xe){for(var Se=Array(xe),Ue=0;Ue<xe;Ue++)Se[Ue]=arguments[Ue+2];ge.children=Se}if(j&&j.defaultProps)for(de in xe=j.defaultProps,xe)ge[de]===void 0&&(ge[de]=xe[de]);return{$$typeof:i,type:j,key:me,ref:Ee,props:ge,_owner:A.current}}function V(j,D){return{$$typeof:i,type:j.type,key:D,ref:j.ref,props:j.props,_owner:j._owner}}function G(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function Z(j){var D={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ce){return D[ce]})}var te=/\/+/g;function X(j,D){return typeof j=="object"&&j!==null&&j.key!=null?Z(""+j.key):D.toString(36)}function oe(j,D,ce,de,ge){var me=typeof j;(me==="undefined"||me==="boolean")&&(j=null);var Ee=!1;if(j===null)Ee=!0;else switch(me){case"string":case"number":Ee=!0;break;case"object":switch(j.$$typeof){case i:case n:Ee=!0}}if(Ee)return Ee=j,ge=ge(Ee),j=de===""?"."+X(Ee,0):de,z(ge)?(ce="",j!=null&&(ce=j.replace(te,"$&/")+"/"),oe(ge,D,ce,"",function(Ue){return Ue})):ge!=null&&(G(ge)&&(ge=V(ge,ce+(!ge.key||Ee&&Ee.key===ge.key?"":(""+ge.key).replace(te,"$&/")+"/")+j)),D.push(ge)),1;if(Ee=0,de=de===""?".":de+":",z(j))for(var xe=0;xe<j.length;xe++){me=j[xe];var Se=de+X(me,xe);Ee+=oe(me,D,ce,Se,ge)}else if(Se=T(j),typeof Se=="function")for(j=Se.call(j),xe=0;!(me=j.next()).done;)me=me.value,Se=de+X(me,xe++),Ee+=oe(me,D,ce,Se,ge);else if(me==="object")throw D=String(j),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ae(j,D,ce){if(j==null)return j;var de=[],ge=0;return oe(j,de,"","",function(me){return D.call(ce,me,ge++)}),de}function ve(j){if(j._status===-1){var D=j._result;D=D(),D.then(function(ce){(j._status===0||j._status===-1)&&(j._status=1,j._result=ce)},function(ce){(j._status===0||j._status===-1)&&(j._status=2,j._result=ce)}),j._status===-1&&(j._status=0,j._result=D)}if(j._status===1)return j._result.default;throw j._result}var we={current:null},R={transition:null},Y={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:R,ReactCurrentOwner:A};function W(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:ae,forEach:function(j,D,ce){ae(j,function(){D.apply(this,arguments)},ce)},count:function(j){var D=0;return ae(j,function(){D++}),D},toArray:function(j){return ae(j,function(D){return D})||[]},only:function(j){if(!G(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},he.Component=F,he.Fragment=o,he.Profiler=u,he.PureComponent=E,he.StrictMode=l,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,he.act=W,he.cloneElement=function(j,D,ce){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var de=I({},j.props),ge=j.key,me=j.ref,Ee=j._owner;if(D!=null){if(D.ref!==void 0&&(me=D.ref,Ee=A.current),D.key!==void 0&&(ge=""+D.key),j.type&&j.type.defaultProps)var xe=j.type.defaultProps;for(Se in D)O.call(D,Se)&&!U.hasOwnProperty(Se)&&(de[Se]=D[Se]===void 0&&xe!==void 0?xe[Se]:D[Se])}var Se=arguments.length-2;if(Se===1)de.children=ce;else if(1<Se){xe=Array(Se);for(var Ue=0;Ue<Se;Ue++)xe[Ue]=arguments[Ue+2];de.children=xe}return{$$typeof:i,type:j.type,key:ge,ref:me,props:de,_owner:Ee}},he.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:d,_context:j},j.Consumer=j},he.createElement=K,he.createFactory=function(j){var D=K.bind(null,j);return D.type=j,D},he.createRef=function(){return{current:null}},he.forwardRef=function(j){return{$$typeof:g,render:j}},he.isValidElement=G,he.lazy=function(j){return{$$typeof:v,_payload:{_status:-1,_result:j},_init:ve}},he.memo=function(j,D){return{$$typeof:S,type:j,compare:D===void 0?null:D}},he.startTransition=function(j){var D=R.transition;R.transition={};try{j()}finally{R.transition=D}},he.unstable_act=W,he.useCallback=function(j,D){return we.current.useCallback(j,D)},he.useContext=function(j){return we.current.useContext(j)},he.useDebugValue=function(){},he.useDeferredValue=function(j){return we.current.useDeferredValue(j)},he.useEffect=function(j,D){return we.current.useEffect(j,D)},he.useId=function(){return we.current.useId()},he.useImperativeHandle=function(j,D,ce){return we.current.useImperativeHandle(j,D,ce)},he.useInsertionEffect=function(j,D){return we.current.useInsertionEffect(j,D)},he.useLayoutEffect=function(j,D){return we.current.useLayoutEffect(j,D)},he.useMemo=function(j,D){return we.current.useMemo(j,D)},he.useReducer=function(j,D,ce){return we.current.useReducer(j,D,ce)},he.useRef=function(j){return we.current.useRef(j)},he.useState=function(j){return we.current.useState(j)},he.useSyncExternalStore=function(j,D,ce){return we.current.useSyncExternalStore(j,D,ce)},he.useTransition=function(){return we.current.useTransition()},he.version="18.3.1",he}var Ld;function za(){return Ld||(Ld=1,Zl.exports=Km()),Zl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Zm(){if(Id)return oi;Id=1;var i=za(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(g,f,S){var v,y={},T=null,b=null;S!==void 0&&(T=""+S),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(b=f.ref);for(v in f)l.call(f,v)&&!d.hasOwnProperty(v)&&(y[v]=f[v]);if(g&&g.defaultProps)for(v in f=g.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:n,type:g,key:T,ref:b,props:y,_owner:u.current}}return oi.Fragment=o,oi.jsx=h,oi.jsxs=h,oi}var Od;function Jm(){return Od||(Od=1,Kl.exports=Zm()),Kl.exports}var m=Jm(),fe=za();const Ce=Qm(fe);var zo={},Jl={exports:{}},st={},ea={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function eh(){return Nd||(Nd=1,function(i){function n(R,Y){var W=R.length;R.push(Y);e:for(;0<W;){var j=W-1>>>1,D=R[j];if(0<u(D,Y))R[j]=Y,R[W]=D,W=j;else break e}}function o(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var Y=R[0],W=R.pop();if(W!==Y){R[0]=W;e:for(var j=0,D=R.length,ce=D>>>1;j<ce;){var de=2*(j+1)-1,ge=R[de],me=de+1,Ee=R[me];if(0>u(ge,W))me<D&&0>u(Ee,ge)?(R[j]=Ee,R[me]=W,j=me):(R[j]=ge,R[de]=W,j=de);else if(me<D&&0>u(Ee,W))R[j]=Ee,R[me]=W,j=me;else break e}}return Y}function u(R,Y){var W=R.sortIndex-Y.sortIndex;return W!==0?W:R.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();i.unstable_now=function(){return h.now()-g}}var f=[],S=[],v=1,y=null,T=3,b=!1,I=!1,N=!1,F=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var Y=o(S);Y!==null;){if(Y.callback===null)l(S);else if(Y.startTime<=R)l(S),Y.sortIndex=Y.expirationTime,n(f,Y);else break;Y=o(S)}}function z(R){if(N=!1,w(R),!I)if(o(f)!==null)I=!0,ve(O);else{var Y=o(S);Y!==null&&we(z,Y.startTime-R)}}function O(R,Y){I=!1,N&&(N=!1,M(K),K=-1),b=!0;var W=T;try{for(w(Y),y=o(f);y!==null&&(!(y.expirationTime>Y)||R&&!Z());){var j=y.callback;if(typeof j=="function"){y.callback=null,T=y.priorityLevel;var D=j(y.expirationTime<=Y);Y=i.unstable_now(),typeof D=="function"?y.callback=D:y===o(f)&&l(f),w(Y)}else l(f);y=o(f)}if(y!==null)var ce=!0;else{var de=o(S);de!==null&&we(z,de.startTime-Y),ce=!1}return ce}finally{y=null,T=W,b=!1}}var A=!1,U=null,K=-1,V=5,G=-1;function Z(){return!(i.unstable_now()-G<V)}function te(){if(U!==null){var R=i.unstable_now();G=R;var Y=!0;try{Y=U(!0,R)}finally{Y?X():(A=!1,U=null)}}else A=!1}var X;if(typeof E=="function")X=function(){E(te)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ae=oe.port2;oe.port1.onmessage=te,X=function(){ae.postMessage(null)}}else X=function(){F(te,0)};function ve(R){U=R,A||(A=!0,X())}function we(R,Y){K=F(function(){R(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_continueExecution=function(){I||b||(I=!0,ve(O))},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return o(f)},i.unstable_next=function(R){switch(T){case 1:case 2:case 3:var Y=3;break;default:Y=T}var W=T;T=Y;try{return R()}finally{T=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=T;T=R;try{return Y()}finally{T=W}},i.unstable_scheduleCallback=function(R,Y,W){var j=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?j+W:j):W=j,R){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,R={id:v++,callback:Y,priorityLevel:R,startTime:W,expirationTime:D,sortIndex:-1},W>j?(R.sortIndex=W,n(S,R),o(f)===null&&R===o(S)&&(N?(M(K),K=-1):N=!0,we(z,W-j))):(R.sortIndex=D,n(f,R),I||b||(I=!0,ve(O))),R},i.unstable_shouldYield=Z,i.unstable_wrapCallback=function(R){var Y=T;return function(){var W=T;T=Y;try{return R.apply(this,arguments)}finally{T=W}}}}(ta)),ta}var Ad;function th(){return Ad||(Ad=1,ea.exports=eh()),ea.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function nh(){if(Dd)return st;Dd=1;var i=za(),n=th();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function T(e){return f.call(y,e)?!0:f.call(v,e)?!1:S.test(e)?y[e]=!0:(v[e]=!0,!1)}function b(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,s){if(t===null||typeof t>"u"||b(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,r,s,a,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,E);F[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,E);F[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,E);F[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function w(e,t,r,s){var a=F.hasOwnProperty(t)?F[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,a,s)&&(r=null),s||a===null?T(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),R=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,j;function D(e){if(j===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ce=!1;function de(e,t){if(!e||ce)return"";ce=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(L){var s=L}Reflect.construct(e,[],t)}else{try{t.call()}catch(L){s=L}e.call(t.prototype)}else{try{throw Error()}catch(L){s=L}e()}}catch(L){if(L&&s&&typeof L.stack=="string"){for(var a=L.stack.split(`
`),c=s.stack.split(`
`),p=a.length-1,x=c.length-1;1<=p&&0<=x&&a[p]!==c[x];)x--;for(;1<=p&&0<=x;p--,x--)if(a[p]!==c[x]){if(p!==1||x!==1)do if(p--,x--,0>x||a[p]!==c[x]){var k=`
`+a[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=x);break}}}finally{ce=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function ge(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case A:return"Portal";case V:return"Profiler";case K:return"StrictMode";case X:return"Suspense";case oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(t);case 8:return t===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=Se(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){e._valueTracker||(e._valueTracker=Ue(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Se(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function is(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ra(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=xe(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fa(e,t){t=t.checked,t!=null&&w(e,"checked",t,!1)}function os(e,t){Fa(e,t);var r=xe(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,r):t.hasOwnProperty("defaultValue")&&ss(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ba(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ss(e,t,r){(t!=="number"||yi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wr=Array.isArray;function Fn(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+xe(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $a(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(wr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:xe(r)}}function Va(e,t){var r=xe(t.value),s=xe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wi,Wa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wi=wi||document.createElement("div"),wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Ua(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function qa(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Ua(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var np=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ds=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,Bn=null,$n=null;function Ya(e){if(e=Hr(e)){if(typeof ps!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Gi(t),ps(e.stateNode,e.type,t))}}function Xa(e){Bn?$n?$n.push(e):$n=[e]:Bn=e}function Qa(){if(Bn){var e=Bn,t=$n;if($n=Bn=null,Ya(e),t)for(e=0;e<t.length;e++)Ya(t[e])}}function Ka(e,t){return e(t)}function Za(){}var ms=!1;function Ja(e,t,r){if(ms)return e(t,r);ms=!0;try{return Ka(e,t,r)}finally{ms=!1,(Bn!==null||$n!==null)&&(Za(),Qa())}}function Er(e,t){var r=e.stateNode;if(r===null)return null;var s=Gi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var hs=!1;if(g)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{hs=!1}function rp(e,t,r,s,a,c,p,x,k){var L=Array.prototype.slice.call(arguments,3);try{t.apply(r,L)}catch($){this.onError($)}}var Tr=!1,Si=null,ki=!1,gs=null,ip={onError:function(e){Tr=!0,Si=e}};function op(e,t,r,s,a,c,p,x,k){Tr=!1,Si=null,rp.apply(ip,arguments)}function sp(e,t,r,s,a,c,p,x,k){if(op.apply(this,arguments),Tr){if(Tr){var L=Si;Tr=!1,Si=null}else throw Error(o(198));ki||(ki=!0,gs=L)}}function wn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tu(e){if(wn(e)!==e)throw Error(o(188))}function lp(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var c=a.alternate;if(c===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===r)return tu(a),e;if(c===s)return tu(a),t;c=c.sibling}throw Error(o(188))}if(r.return!==s.return)r=a,s=c;else{for(var p=!1,x=a.child;x;){if(x===r){p=!0,r=a,s=c;break}if(x===s){p=!0,s=a,r=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===r){p=!0,r=c,s=a;break}if(x===s){p=!0,s=c,r=a;break}x=x.sibling}if(!p)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function nu(e){return e=lp(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ru(e);if(t!==null)return t;e=e.sibling}return null}var iu=n.unstable_scheduleCallback,ou=n.unstable_cancelCallback,ap=n.unstable_shouldYield,up=n.unstable_requestPaint,Ae=n.unstable_now,cp=n.unstable_getCurrentPriorityLevel,vs=n.unstable_ImmediatePriority,su=n.unstable_UserBlockingPriority,Ei=n.unstable_NormalPriority,dp=n.unstable_LowPriority,lu=n.unstable_IdlePriority,Ci=null,Lt=null;function fp(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:hp,pp=Math.log,mp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(pp(e)/mp|0)|0}var Ti=64,bi=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,c=e.pingedLanes,p=r&268435455;if(p!==0){var x=p&~a;x!==0?s=br(x):(c&=p,c!==0&&(s=br(c)))}else p=r&~a,p!==0?s=br(p):c!==0&&(s=br(c));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Et(t),a=1<<r,s|=e[r],t&=~a;return s}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Et(c),x=1<<p,k=a[p];k===-1?(!(x&r)||x&s)&&(a[p]=gp(x,t)):k<=t&&(e.expiredLanes|=x),c&=~x}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function ys(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function jr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=r}function xp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Et(r),c=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~c}}function ws(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Et(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var be=0;function uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cu,Ss,du,fu,pu,ks=!1,Pi=[],Zt=null,Jt=null,en=null,Pr=new Map,zr=new Map,tn=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function _r(e,t,r,s,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:c,targetContainers:[a]},t!==null&&(t=Hr(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function wp(e,t,r,s,a){switch(t){case"focusin":return Zt=_r(Zt,e,t,r,s,a),!0;case"dragenter":return Jt=_r(Jt,e,t,r,s,a),!0;case"mouseover":return en=_r(en,e,t,r,s,a),!0;case"pointerover":var c=a.pointerId;return Pr.set(c,_r(Pr.get(c)||null,e,t,r,s,a)),!0;case"gotpointercapture":return c=a.pointerId,zr.set(c,_r(zr.get(c)||null,e,t,r,s,a)),!0}return!1}function hu(e){var t=Sn(e.target);if(t!==null){var r=wn(t);if(r!==null){if(t=r.tag,t===13){if(t=eu(r),t!==null){e.blockedOn=t,pu(e.priority,function(){du(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ds=s,r.target.dispatchEvent(s),ds=null}else return t=Hr(r),t!==null&&Ss(t),e.blockedOn=r,!1;t.shift()}return!0}function gu(e,t,r){zi(e)&&r.delete(t)}function Sp(){ks=!1,Zt!==null&&zi(Zt)&&(Zt=null),Jt!==null&&zi(Jt)&&(Jt=null),en!==null&&zi(en)&&(en=null),Pr.forEach(gu),zr.forEach(gu)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Sp)))}function Lr(e){function t(a){return Mr(a,e)}if(0<Pi.length){Mr(Pi[0],e);for(var r=1;r<Pi.length;r++){var s=Pi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Zt!==null&&Mr(Zt,e),Jt!==null&&Mr(Jt,e),en!==null&&Mr(en,e),Pr.forEach(t),zr.forEach(t),r=0;r<tn.length;r++)s=tn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<tn.length&&(r=tn[0],r.blockedOn===null);)hu(r),r.blockedOn===null&&tn.shift()}var Vn=z.ReactCurrentBatchConfig,_i=!0;function kp(e,t,r,s){var a=be,c=Vn.transition;Vn.transition=null;try{be=1,Es(e,t,r,s)}finally{be=a,Vn.transition=c}}function Ep(e,t,r,s){var a=be,c=Vn.transition;Vn.transition=null;try{be=4,Es(e,t,r,s)}finally{be=a,Vn.transition=c}}function Es(e,t,r,s){if(_i){var a=Cs(e,t,r,s);if(a===null)$s(e,t,s,Mi,r),mu(e,s);else if(wp(a,e,t,r,s))s.stopPropagation();else if(mu(e,s),t&4&&-1<yp.indexOf(e)){for(;a!==null;){var c=Hr(a);if(c!==null&&cu(c),c=Cs(e,t,r,s),c===null&&$s(e,t,s,Mi,r),c===a)break;a=c}a!==null&&s.stopPropagation()}else $s(e,t,s,null,r)}}var Mi=null;function Cs(e,t,r,s){if(Mi=null,e=fs(s),e=Sn(e),e!==null)if(t=wn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=eu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case vs:return 1;case su:return 4;case Ei:case dp:return 16;case lu:return 536870912;default:return 16}default:return 16}}var nn=null,Ts=null,Li=null;function xu(){if(Li)return Li;var e,t=Ts,r=t.length,s,a="value"in nn?nn.value:nn.textContent,c=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(s=1;s<=p&&t[r-s]===a[c-s];s++);return Li=a.slice(e,1<s?1-s:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function yu(){return!1}function at(e){function t(r,s,a,c,p){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Oi:yu,this.isPropagationStopped=yu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=at(Gn),Ir=W({},Gn,{view:0,detail:0}),Cp=at(Ir),js,Ps,Or,Ni=W({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(js=e.screenX-Or.screenX,Ps=e.screenY-Or.screenY):Ps=js=0,Or=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),wu=at(Ni),Tp=W({},Ni,{dataTransfer:0}),bp=at(Tp),jp=W({},Ir,{relatedTarget:0}),zs=at(jp),Pp=W({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=at(Pp),_p=W({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=at(_p),Lp=W({},Gn,{data:0}),Su=at(Lp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function _s(){return Ap}var Dp=W({},Ir,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=at(Dp),Fp=W({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=at(Fp),Bp=W({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),$p=at(Bp),Vp=W({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=at(Vp),Hp=W({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=at(Hp),Up=[9,13,27,32],Ms=g&&"CompositionEvent"in window,Nr=null;g&&"documentMode"in document&&(Nr=document.documentMode);var qp=g&&"TextEvent"in window&&!Nr,Eu=g&&(!Ms||Nr&&8<Nr&&11>=Nr),Cu=" ",Tu=!1;function bu(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Yp(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Tu=!0,Cu);case"textInput":return e=t.data,e===Cu&&Tu?null:e;default:return null}}function Xp(e,t){if(Hn)return e==="compositionend"||!Ms&&bu(e,t)?(e=xu(),Li=Ts=nn=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function zu(e,t,r,s){Xa(s),t=Bi(t,"onChange"),0<t.length&&(r=new bs("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Ar=null,Dr=null;function Kp(e){qu(e,0)}function Ai(e){var t=Xn(e);if(kt(t))return e}function Zp(e,t){if(e==="change")return t}var _u=!1;if(g){var Ls;if(g){var Is="oninput"in document;if(!Is){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Is=typeof Mu.oninput=="function"}Ls=Is}else Ls=!1;_u=Ls&&(!document.documentMode||9<document.documentMode)}function Lu(){Ar&&(Ar.detachEvent("onpropertychange",Iu),Dr=Ar=null)}function Iu(e){if(e.propertyName==="value"&&Ai(Dr)){var t=[];zu(t,Dr,e,fs(e)),Ja(Kp,t)}}function Jp(e,t,r){e==="focusin"?(Lu(),Ar=t,Dr=r,Ar.attachEvent("onpropertychange",Iu)):e==="focusout"&&Lu()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(Dr)}function tm(e,t){if(e==="click")return Ai(t)}function nm(e,t){if(e==="input"||e==="change")return Ai(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:rm;function Rr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!f.call(t,a)||!Ct(e[a],t[a]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var r=Ou(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ou(r)}}function Au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=yi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=yi(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function im(e){var t=Du(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Au(r.ownerDocument.documentElement,r)){if(s!==null&&Os(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,c=Math.min(s.start,a);s=s.end===void 0?c:Math.min(s.end,a),!e.extend&&c>s&&(a=s,s=c,c=a),a=Nu(r,c);var p=Nu(r,s);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=g&&"documentMode"in document&&11>=document.documentMode,Wn=null,Ns=null,Fr=null,As=!1;function Ru(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;As||Wn==null||Wn!==yi(s)||(s=Wn,"selectionStart"in s&&Os(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fr&&Rr(Fr,s)||(Fr=s,s=Bi(Ns,"onSelect"),0<s.length&&(t=new bs("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Wn)))}function Di(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Un={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Ds={},Fu={};g&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Ri(e){if(Ds[e])return Ds[e];if(!Un[e])return e;var t=Un[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fu)return Ds[e]=t[r];return e}var Bu=Ri("animationend"),$u=Ri("animationiteration"),Vu=Ri("animationstart"),Gu=Ri("transitionend"),Hu=new Map,Wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Hu.set(e,t),d(t,[e])}for(var Rs=0;Rs<Wu.length;Rs++){var Fs=Wu[Rs],sm=Fs.toLowerCase(),lm=Fs[0].toUpperCase()+Fs.slice(1);rn(sm,"on"+lm)}rn(Bu,"onAnimationEnd"),rn($u,"onAnimationIteration"),rn(Vu,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Gu,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Uu(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,sp(s,t,void 0,e),e.currentTarget=null}function qu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var p=s.length-1;0<=p;p--){var x=s[p],k=x.instance,L=x.currentTarget;if(x=x.listener,k!==c&&a.isPropagationStopped())break e;Uu(a,x,L),c=k}else for(p=0;p<s.length;p++){if(x=s[p],k=x.instance,L=x.currentTarget,x=x.listener,k!==c&&a.isPropagationStopped())break e;Uu(a,x,L),c=k}}}if(ki)throw e=gs,ki=!1,gs=null,e}function Pe(e,t){var r=t[qs];r===void 0&&(r=t[qs]=new Set);var s=e+"__bubble";r.has(s)||(Yu(t,e,2,!1),r.add(s))}function Bs(e,t,r){var s=0;t&&(s|=4),Yu(r,e,s,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Fi]){e[Fi]=!0,l.forEach(function(r){r!=="selectionchange"&&(am.has(r)||Bs(r,!1,e),Bs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,Bs("selectionchange",!1,t))}}function Yu(e,t,r,s){switch(vu(t)){case 1:var a=kp;break;case 4:a=Ep;break;default:a=Es}r=a.bind(null,t,r,e),a=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function $s(e,t,r,s,a){var c=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var x=s.stateNode.containerInfo;if(x===a||x.nodeType===8&&x.parentNode===a)break;if(p===4)for(p=s.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;p=p.return}for(;x!==null;){if(p=Sn(x),p===null)return;if(k=p.tag,k===5||k===6){s=c=p;continue e}x=x.parentNode}}s=s.return}Ja(function(){var L=c,$=fs(r),H=[];e:{var B=Hu.get(e);if(B!==void 0){var J=bs,ne=e;switch(e){case"keypress":if(Ii(r)===0)break e;case"keydown":case"keyup":J=Rp;break;case"focusin":ne="focus",J=zs;break;case"focusout":ne="blur",J=zs;break;case"beforeblur":case"afterblur":J=zs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=$p;break;case Bu:case $u:case Vu:J=zp;break;case Gu:J=Gp;break;case"scroll":J=Cp;break;case"wheel":J=Wp;break;case"copy":case"cut":case"paste":J=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=ku}var re=(t&4)!==0,De=!re&&e==="scroll",P=re?B!==null?B+"Capture":null:B;re=[];for(var C=L,_;C!==null;){_=C;var q=_.stateNode;if(_.tag===5&&q!==null&&(_=q,P!==null&&(q=Er(C,P),q!=null&&re.push(Vr(C,q,_)))),De)break;C=C.return}0<re.length&&(B=new J(B,ne,null,r,$),H.push({event:B,listeners:re}))}}if(!(t&7)){e:{if(B=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",B&&r!==ds&&(ne=r.relatedTarget||r.fromElement)&&(Sn(ne)||ne[Bt]))break e;if((J||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,J?(ne=r.relatedTarget||r.toElement,J=L,ne=ne?Sn(ne):null,ne!==null&&(De=wn(ne),ne!==De||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(J=null,ne=L),J!==ne)){if(re=wu,q="onMouseLeave",P="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(re=ku,q="onPointerLeave",P="onPointerEnter",C="pointer"),De=J==null?B:Xn(J),_=ne==null?B:Xn(ne),B=new re(q,C+"leave",J,r,$),B.target=De,B.relatedTarget=_,q=null,Sn($)===L&&(re=new re(P,C+"enter",ne,r,$),re.target=_,re.relatedTarget=De,q=re),De=q,J&&ne)t:{for(re=J,P=ne,C=0,_=re;_;_=qn(_))C++;for(_=0,q=P;q;q=qn(q))_++;for(;0<C-_;)re=qn(re),C--;for(;0<_-C;)P=qn(P),_--;for(;C--;){if(re===P||P!==null&&re===P.alternate)break t;re=qn(re),P=qn(P)}re=null}else re=null;J!==null&&Xu(H,B,J,re,!1),ne!==null&&De!==null&&Xu(H,De,ne,re,!0)}}e:{if(B=L?Xn(L):window,J=B.nodeName&&B.nodeName.toLowerCase(),J==="select"||J==="input"&&B.type==="file")var ie=Zp;else if(Pu(B))if(_u)ie=nm;else{ie=em;var se=Jp}else(J=B.nodeName)&&J.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ie=tm);if(ie&&(ie=ie(e,L))){zu(H,ie,r,$);break e}se&&se(e,B,L),e==="focusout"&&(se=B._wrapperState)&&se.controlled&&B.type==="number"&&ss(B,"number",B.value)}switch(se=L?Xn(L):window,e){case"focusin":(Pu(se)||se.contentEditable==="true")&&(Wn=se,Ns=L,Fr=null);break;case"focusout":Fr=Ns=Wn=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,Ru(H,r,$);break;case"selectionchange":if(om)break;case"keydown":case"keyup":Ru(H,r,$)}var le;if(Ms)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Hn?bu(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(Eu&&r.locale!=="ko"&&(Hn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Hn&&(le=xu()):(nn=$,Ts="value"in nn?nn.value:nn.textContent,Hn=!0)),se=Bi(L,ue),0<se.length&&(ue=new Su(ue,e,null,r,$),H.push({event:ue,listeners:se}),le?ue.data=le:(le=ju(r),le!==null&&(ue.data=le)))),(le=qp?Yp(e,r):Xp(e,r))&&(L=Bi(L,"onBeforeInput"),0<L.length&&($=new Su("onBeforeInput","beforeinput",null,r,$),H.push({event:$,listeners:L}),$.data=le))}qu(H,t)})}function Vr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Bi(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Er(e,r),c!=null&&s.unshift(Vr(e,c,a)),c=Er(e,t),c!=null&&s.push(Vr(e,c,a))),e=e.return}return s}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,r,s,a){for(var c=t._reactName,p=[];r!==null&&r!==s;){var x=r,k=x.alternate,L=x.stateNode;if(k!==null&&k===s)break;x.tag===5&&L!==null&&(x=L,a?(k=Er(r,c),k!=null&&p.unshift(Vr(r,k,x))):a||(k=Er(r,c),k!=null&&p.push(Vr(r,k,x)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var um=/\r\n?/g,cm=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(um,`
`).replace(cm,"")}function $i(e,t,r){if(t=Qu(t),Qu(e)!==t&&r)throw Error(o(425))}function Vi(){}var Vs=null,Gs=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ws=typeof setTimeout=="function"?setTimeout:void 0,dm=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(pm)}:Ws;function pm(e){setTimeout(function(){throw e})}function Us(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Lr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Lr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),It="__reactFiber$"+Yn,Gr="__reactProps$"+Yn,Bt="__reactContainer$"+Yn,qs="__reactEvents$"+Yn,mm="__reactListeners$"+Yn,hm="__reactHandles$"+Yn;function Sn(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Bt]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Zu(e);e!==null;){if(r=e[It])return r;e=Zu(e)}return t}e=r,r=e.parentNode}return null}function Hr(e){return e=e[It]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Gi(e){return e[Gr]||null}var Ys=[],Qn=-1;function sn(e){return{current:e}}function ze(e){0>Qn||(e.current=Ys[Qn],Ys[Qn]=null,Qn--)}function je(e,t){Qn++,Ys[Qn]=e.current,e.current=t}var ln={},Xe=sn(ln),tt=sn(!1),kn=ln;function Kn(e,t){var r=e.type.contextTypes;if(!r)return ln;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in r)a[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function nt(e){return e=e.childContextTypes,e!=null}function Hi(){ze(tt),ze(Xe)}function Ju(e,t,r){if(Xe.current!==ln)throw Error(o(168));je(Xe,t),je(tt,r)}function ec(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(o(108,Ee(e)||"Unknown",a));return W({},r,s)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,kn=Xe.current,je(Xe,e),je(tt,tt.current),!0}function tc(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=ec(e,t,kn),s.__reactInternalMemoizedMergedChildContext=e,ze(tt),ze(Xe),je(Xe,e)):ze(tt),je(tt,r)}var $t=null,Ui=!1,Xs=!1;function nc(e){$t===null?$t=[e]:$t.push(e)}function gm(e){Ui=!0,nc(e)}function an(){if(!Xs&&$t!==null){Xs=!0;var e=0,t=be;try{var r=$t;for(be=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}$t=null,Ui=!1}catch(a){throw $t!==null&&($t=$t.slice(e+1)),iu(vs,an),a}finally{be=t,Xs=!1}}return null}var Zn=[],Jn=0,qi=null,Yi=0,ht=[],gt=0,En=null,Vt=1,Gt="";function Cn(e,t){Zn[Jn++]=Yi,Zn[Jn++]=qi,qi=e,Yi=t}function rc(e,t,r){ht[gt++]=Vt,ht[gt++]=Gt,ht[gt++]=En,En=e;var s=Vt;e=Gt;var a=32-Et(s)-1;s&=~(1<<a),r+=1;var c=32-Et(t)+a;if(30<c){var p=a-a%5;c=(s&(1<<p)-1).toString(32),s>>=p,a-=p,Vt=1<<32-Et(t)+a|r<<a|s,Gt=c+e}else Vt=1<<c|r<<a|s,Gt=e}function Qs(e){e.return!==null&&(Cn(e,1),rc(e,1,0))}function Ks(e){for(;e===qi;)qi=Zn[--Jn],Zn[Jn]=null,Yi=Zn[--Jn],Zn[Jn]=null;for(;e===En;)En=ht[--gt],ht[gt]=null,Gt=ht[--gt],ht[gt]=null,Vt=ht[--gt],ht[gt]=null}var ut=null,ct=null,Me=!1,Tt=null;function ic(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function oc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=En!==null?{id:Vt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ut=e,ct=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(Me){var t=ct;if(t){var r=t;if(!oc(e,t)){if(Zs(e))throw Error(o(418));t=on(r.nextSibling);var s=ut;t&&oc(e,t)?ic(s,r):(e.flags=e.flags&-4097|2,Me=!1,ut=e)}}else{if(Zs(e))throw Error(o(418));e.flags=e.flags&-4097|2,Me=!1,ut=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Xi(e){if(e!==ut)return!1;if(!Me)return sc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=ct)){if(Zs(e))throw lc(),Error(o(418));for(;t;)ic(e,t),t=on(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ct=on(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?on(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=ct;e;)e=on(e.nextSibling)}function er(){ct=ut=null,Me=!1}function el(e){Tt===null?Tt=[e]:Tt.push(e)}var vm=z.ReactCurrentBatchConfig;function Wr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var a=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var x=a.refs;p===null?delete x[c]:x[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function uc(e){function t(P,C){if(e){var _=P.deletions;_===null?(P.deletions=[C],P.flags|=16):_.push(C)}}function r(P,C){if(!e)return null;for(;C!==null;)t(P,C),C=C.sibling;return null}function s(P,C){for(P=new Map;C!==null;)C.key!==null?P.set(C.key,C):P.set(C.index,C),C=C.sibling;return P}function a(P,C){return P=gn(P,C),P.index=0,P.sibling=null,P}function c(P,C,_){return P.index=_,e?(_=P.alternate,_!==null?(_=_.index,_<C?(P.flags|=2,C):_):(P.flags|=2,C)):(P.flags|=1048576,C)}function p(P){return e&&P.alternate===null&&(P.flags|=2),P}function x(P,C,_,q){return C===null||C.tag!==6?(C=Wl(_,P.mode,q),C.return=P,C):(C=a(C,_),C.return=P,C)}function k(P,C,_,q){var ie=_.type;return ie===U?$(P,C,_.props.children,q,_.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ve&&ac(ie)===C.type)?(q=a(C,_.props),q.ref=Wr(P,C,_),q.return=P,q):(q=So(_.type,_.key,_.props,null,P.mode,q),q.ref=Wr(P,C,_),q.return=P,q)}function L(P,C,_,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==_.containerInfo||C.stateNode.implementation!==_.implementation?(C=Ul(_,P.mode,q),C.return=P,C):(C=a(C,_.children||[]),C.return=P,C)}function $(P,C,_,q,ie){return C===null||C.tag!==7?(C=Ln(_,P.mode,q,ie),C.return=P,C):(C=a(C,_),C.return=P,C)}function H(P,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Wl(""+C,P.mode,_),C.return=P,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return _=So(C.type,C.key,C.props,null,P.mode,_),_.ref=Wr(P,null,C),_.return=P,_;case A:return C=Ul(C,P.mode,_),C.return=P,C;case ve:var q=C._init;return H(P,q(C._payload),_)}if(wr(C)||Y(C))return C=Ln(C,P.mode,_,null),C.return=P,C;Qi(P,C)}return null}function B(P,C,_,q){var ie=C!==null?C.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return ie!==null?null:x(P,C,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case O:return _.key===ie?k(P,C,_,q):null;case A:return _.key===ie?L(P,C,_,q):null;case ve:return ie=_._init,B(P,C,ie(_._payload),q)}if(wr(_)||Y(_))return ie!==null?null:$(P,C,_,q,null);Qi(P,_)}return null}function J(P,C,_,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number")return P=P.get(_)||null,x(C,P,""+q,ie);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case O:return P=P.get(q.key===null?_:q.key)||null,k(C,P,q,ie);case A:return P=P.get(q.key===null?_:q.key)||null,L(C,P,q,ie);case ve:var se=q._init;return J(P,C,_,se(q._payload),ie)}if(wr(q)||Y(q))return P=P.get(_)||null,$(C,P,q,ie,null);Qi(C,q)}return null}function ne(P,C,_,q){for(var ie=null,se=null,le=C,ue=C=0,He=null;le!==null&&ue<_.length;ue++){le.index>ue?(He=le,le=null):He=le.sibling;var ke=B(P,le,_[ue],q);if(ke===null){le===null&&(le=He);break}e&&le&&ke.alternate===null&&t(P,le),C=c(ke,C,ue),se===null?ie=ke:se.sibling=ke,se=ke,le=He}if(ue===_.length)return r(P,le),Me&&Cn(P,ue),ie;if(le===null){for(;ue<_.length;ue++)le=H(P,_[ue],q),le!==null&&(C=c(le,C,ue),se===null?ie=le:se.sibling=le,se=le);return Me&&Cn(P,ue),ie}for(le=s(P,le);ue<_.length;ue++)He=J(le,P,ue,_[ue],q),He!==null&&(e&&He.alternate!==null&&le.delete(He.key===null?ue:He.key),C=c(He,C,ue),se===null?ie=He:se.sibling=He,se=He);return e&&le.forEach(function(vn){return t(P,vn)}),Me&&Cn(P,ue),ie}function re(P,C,_,q){var ie=Y(_);if(typeof ie!="function")throw Error(o(150));if(_=ie.call(_),_==null)throw Error(o(151));for(var se=ie=null,le=C,ue=C=0,He=null,ke=_.next();le!==null&&!ke.done;ue++,ke=_.next()){le.index>ue?(He=le,le=null):He=le.sibling;var vn=B(P,le,ke.value,q);if(vn===null){le===null&&(le=He);break}e&&le&&vn.alternate===null&&t(P,le),C=c(vn,C,ue),se===null?ie=vn:se.sibling=vn,se=vn,le=He}if(ke.done)return r(P,le),Me&&Cn(P,ue),ie;if(le===null){for(;!ke.done;ue++,ke=_.next())ke=H(P,ke.value,q),ke!==null&&(C=c(ke,C,ue),se===null?ie=ke:se.sibling=ke,se=ke);return Me&&Cn(P,ue),ie}for(le=s(P,le);!ke.done;ue++,ke=_.next())ke=J(le,P,ue,ke.value,q),ke!==null&&(e&&ke.alternate!==null&&le.delete(ke.key===null?ue:ke.key),C=c(ke,C,ue),se===null?ie=ke:se.sibling=ke,se=ke);return e&&le.forEach(function(Xm){return t(P,Xm)}),Me&&Cn(P,ue),ie}function De(P,C,_,q){if(typeof _=="object"&&_!==null&&_.type===U&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case O:e:{for(var ie=_.key,se=C;se!==null;){if(se.key===ie){if(ie=_.type,ie===U){if(se.tag===7){r(P,se.sibling),C=a(se,_.props.children),C.return=P,P=C;break e}}else if(se.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ve&&ac(ie)===se.type){r(P,se.sibling),C=a(se,_.props),C.ref=Wr(P,se,_),C.return=P,P=C;break e}r(P,se);break}else t(P,se);se=se.sibling}_.type===U?(C=Ln(_.props.children,P.mode,q,_.key),C.return=P,P=C):(q=So(_.type,_.key,_.props,null,P.mode,q),q.ref=Wr(P,C,_),q.return=P,P=q)}return p(P);case A:e:{for(se=_.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===_.containerInfo&&C.stateNode.implementation===_.implementation){r(P,C.sibling),C=a(C,_.children||[]),C.return=P,P=C;break e}else{r(P,C);break}else t(P,C);C=C.sibling}C=Ul(_,P.mode,q),C.return=P,P=C}return p(P);case ve:return se=_._init,De(P,C,se(_._payload),q)}if(wr(_))return ne(P,C,_,q);if(Y(_))return re(P,C,_,q);Qi(P,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,C!==null&&C.tag===6?(r(P,C.sibling),C=a(C,_),C.return=P,P=C):(r(P,C),C=Wl(_,P.mode,q),C.return=P,P=C),p(P)):r(P,C)}return De}var tr=uc(!0),cc=uc(!1),Ki=sn(null),Zi=null,nr=null,tl=null;function nl(){tl=nr=Zi=null}function rl(e){var t=Ki.current;ze(Ki),e._currentValue=t}function il(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function rr(e,t){Zi=e,tl=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(tl!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Zi===null)throw Error(o(308));nr=e,Zi.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Tn=null;function ol(e){Tn===null?Tn=[e]:Tn.push(e)}function dc(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,ol(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ht(e,s)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var un=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ye&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Ht(e,r)}return a=s.interleaved,a===null?(t.next=t,ol(s)):(t.next=a.next,a.next=t),s.interleaved=t,Ht(e,r)}function Ji(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ws(e,r)}}function pc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?a=c=p:c=c.next=p,r=r.next}while(r!==null);c===null?a=c=t:c=c.next=t}else a=c=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function eo(e,t,r,s){var a=e.updateQueue;un=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,x=a.shared.pending;if(x!==null){a.shared.pending=null;var k=x,L=k.next;k.next=null,p===null?c=L:p.next=L,p=k;var $=e.alternate;$!==null&&($=$.updateQueue,x=$.lastBaseUpdate,x!==p&&(x===null?$.firstBaseUpdate=L:x.next=L,$.lastBaseUpdate=k))}if(c!==null){var H=a.baseState;p=0,$=L=k=null,x=c;do{var B=x.lane,J=x.eventTime;if((s&B)===B){$!==null&&($=$.next={eventTime:J,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ne=e,re=x;switch(B=t,J=r,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){H=ne.call(J,H,B);break e}H=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,B=typeof ne=="function"?ne.call(J,H,B):ne,B==null)break e;H=W({},H,B);break e;case 2:un=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[x]:B.push(x))}else J={eventTime:J,lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},$===null?(L=$=J,k=H):$=$.next=J,p|=B;if(x=x.next,x===null){if(x=a.shared.pending,x===null)break;B=x,x=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if($===null&&(k=H),a.baseState=k,a.firstBaseUpdate=L,a.lastBaseUpdate=$,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Pn|=p,e.lanes=p,e.memoizedState=H}}function mc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(o(191,a));a.call(s)}}}var Ur={},Ot=sn(Ur),qr=sn(Ur),Yr=sn(Ur);function bn(e){if(e===Ur)throw Error(o(174));return e}function ll(e,t){switch(je(Yr,t),je(qr,e),je(Ot,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}ze(Ot),je(Ot,t)}function ir(){ze(Ot),ze(qr),ze(Yr)}function hc(e){bn(Yr.current);var t=bn(Ot.current),r=as(t,e.type);t!==r&&(je(qr,e),je(Ot,r))}function al(e){qr.current===e&&(ze(Ot),ze(qr))}var Le=sn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function cl(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var no=z.ReactCurrentDispatcher,dl=z.ReactCurrentBatchConfig,jn=0,Ie=null,Be=null,Ve=null,ro=!1,Xr=!1,Qr=0,xm=0;function Qe(){throw Error(o(321))}function fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function pl(e,t,r,s,a,c){if(jn=c,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?km:Em,e=r(s,a),Xr){c=0;do{if(Xr=!1,Qr=0,25<=c)throw Error(o(301));c+=1,Ve=Be=null,t.updateQueue=null,no.current=Cm,e=r(s,a)}while(Xr)}if(no.current=so,t=Be!==null&&Be.next!==null,jn=0,Ve=Be=Ie=null,ro=!1,t)throw Error(o(300));return e}function ml(){var e=Qr!==0;return Qr=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ie.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function xt(){if(Be===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ve===null?Ie.memoizedState:Ve.next;if(t!==null)Ve=t,Be=e;else{if(e===null)throw Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ve===null?Ie.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Kr(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=xt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Be,a=s.baseQueue,c=r.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}s.baseQueue=a=c,r.pending=null}if(a!==null){c=a.next,s=s.baseState;var x=p=null,k=null,L=c;do{var $=L.lane;if((jn&$)===$)k!==null&&(k=k.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),s=L.hasEagerState?L.eagerState:e(s,L.action);else{var H={lane:$,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};k===null?(x=k=H,p=s):k=k.next=H,Ie.lanes|=$,Pn|=$}L=L.next}while(L!==null&&L!==c);k===null?p=s:k.next=x,Ct(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseState=p,t.baseQueue=k,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do c=a.lane,Ie.lanes|=c,Pn|=c,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function gl(e){var t=xt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,c=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);Ct(c,t.memoizedState)||(rt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,s]}function gc(){}function vc(e,t){var r=Ie,s=xt(),a=t(),c=!Ct(s.memoizedState,a);if(c&&(s.memoizedState=a,rt=!0),s=s.queue,vl(wc.bind(null,r,s,e),[e]),s.getSnapshot!==t||c||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Zr(9,yc.bind(null,r,s,a,t),void 0,null),Ge===null)throw Error(o(349));jn&30||xc(r,t,a)}return a}function xc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yc(e,t,r,s){t.value=r,t.getSnapshot=s,Sc(t)&&kc(e)}function wc(e,t,r){return r(function(){Sc(t)&&kc(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function kc(e){var t=Ht(e,1);t!==null&&zt(t,e,1,-1)}function Ec(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sm.bind(null,Ie,e),[t.memoizedState,e]}function Zr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Cc(){return xt().memoizedState}function io(e,t,r,s){var a=Nt();Ie.flags|=e,a.memoizedState=Zr(1|t,r,void 0,s===void 0?null:s)}function oo(e,t,r,s){var a=xt();s=s===void 0?null:s;var c=void 0;if(Be!==null){var p=Be.memoizedState;if(c=p.destroy,s!==null&&fl(s,p.deps)){a.memoizedState=Zr(t,r,c,s);return}}Ie.flags|=e,a.memoizedState=Zr(1|t,r,c,s)}function Tc(e,t){return io(8390656,8,e,t)}function vl(e,t){return oo(2048,8,e,t)}function bc(e,t){return oo(4,2,e,t)}function jc(e,t){return oo(4,4,e,t)}function Pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zc(e,t,r){return r=r!=null?r.concat([e]):null,oo(4,4,Pc.bind(null,t,e),r)}function xl(){}function _c(e,t){var r=xt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&fl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Mc(e,t){var r=xt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&fl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Lc(e,t,r){return jn&21?(Ct(r,t)||(r=au(),Ie.lanes|=r,Pn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r)}function ym(e,t){var r=be;be=r!==0&&4>r?r:4,e(!0);var s=dl.transition;dl.transition={};try{e(!1),t()}finally{be=r,dl.transition=s}}function Ic(){return xt().memoizedState}function wm(e,t,r){var s=mn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Oc(e))Nc(t,r);else if(r=dc(e,t,r,s),r!==null){var a=et();zt(r,e,s,a),Ac(r,t,s)}}function Sm(e,t,r){var s=mn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))Nc(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,x=c(p,r);if(a.hasEagerState=!0,a.eagerState=x,Ct(x,p)){var k=t.interleaved;k===null?(a.next=a,ol(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}r=dc(e,t,a,s),r!==null&&(a=et(),zt(r,e,s,a),Ac(r,t,s))}}function Oc(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Nc(e,t){Xr=ro=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ac(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ws(e,r)}}var so={readContext:vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},km={readContext:vt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Tc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,io(4194308,4,Pc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var r=Nt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Nt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=wm.bind(null,Ie,e),[s.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:xl,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=ym.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ie,a=Nt();if(Me){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ge===null)throw Error(o(349));jn&30||xc(s,t,r)}a.memoizedState=r;var c={value:r,getSnapshot:t};return a.queue=c,Tc(wc.bind(null,s,c,e),[e]),s.flags|=2048,Zr(9,yc.bind(null,s,c,r,t),void 0,null),r},useId:function(){var e=Nt(),t=Ge.identifierPrefix;if(Me){var r=Gt,s=Vt;r=(s&~(1<<32-Et(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Qr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Em={readContext:vt,useCallback:_c,useContext:vt,useEffect:vl,useImperativeHandle:zc,useInsertionEffect:bc,useLayoutEffect:jc,useMemo:Mc,useReducer:hl,useRef:Cc,useState:function(){return hl(Kr)},useDebugValue:xl,useDeferredValue:function(e){var t=xt();return Lc(t,Be.memoizedState,e)},useTransition:function(){var e=hl(Kr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:Ic,unstable_isNewReconciler:!1},Cm={readContext:vt,useCallback:_c,useContext:vt,useEffect:vl,useImperativeHandle:zc,useInsertionEffect:bc,useLayoutEffect:jc,useMemo:Mc,useReducer:gl,useRef:Cc,useState:function(){return gl(Kr)},useDebugValue:xl,useDeferredValue:function(e){var t=xt();return Be===null?t.memoizedState=e:Lc(t,Be.memoizedState,e)},useTransition:function(){var e=gl(Kr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:Ic,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function yl(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var lo={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=et(),a=mn(e),c=Wt(s,a);c.payload=t,r!=null&&(c.callback=r),t=cn(e,c,a),t!==null&&(zt(t,e,a,s),Ji(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=et(),a=mn(e),c=Wt(s,a);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=cn(e,c,a),t!==null&&(zt(t,e,a,s),Ji(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=et(),s=mn(e),a=Wt(r,s);a.tag=2,t!=null&&(a.callback=t),t=cn(e,a,s),t!==null&&(zt(t,e,s,r),Ji(t,e,s))}};function Dc(e,t,r,s,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,p):t.prototype&&t.prototype.isPureReactComponent?!Rr(r,s)||!Rr(a,c):!0}function Rc(e,t,r){var s=!1,a=ln,c=t.contextType;return typeof c=="object"&&c!==null?c=vt(c):(a=nt(t)?kn:Xe.current,s=t.contextTypes,c=(s=s!=null)?Kn(e,a):ln),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Fc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function wl(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},sl(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=vt(c):(c=nt(t)?kn:Xe.current,a.context=Kn(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(yl(e,t,c,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&lo.enqueueReplaceState(a,a.state,null),eo(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var r="",s=t;do r+=ge(s),s=s.return;while(s);var a=r}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Tm=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ho||(ho=!0,Dl=s),kl(e,t)},r}function $c(e,t,r){r=Wt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){kl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){kl(e,t),typeof s!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Vc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Tm;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Fm.bind(null,e,t,r),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,cn(r,t,1))),r.lanes|=1),e)}var bm=z.ReactCurrentOwner,rt=!1;function Je(e,t,r,s){t.child=e===null?cc(t,null,r,s):tr(t,e.child,r,s)}function Wc(e,t,r,s,a){r=r.render;var c=t.ref;return rr(t,a),s=pl(e,t,r,s,c,a),r=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(Me&&r&&Qs(t),t.flags|=1,Je(e,t,s,a),t.child)}function Uc(e,t,r,s,a){if(e===null){var c=r.type;return typeof c=="function"&&!Hl(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,qc(e,t,c,s,a)):(e=So(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&a)){var p=c.memoizedProps;if(r=r.compare,r=r!==null?r:Rr,r(p,s)&&e.ref===t.ref)return Ut(e,t,a)}return t.flags|=1,e=gn(c,s),e.ref=t.ref,e.return=t,t.child=e}function qc(e,t,r,s,a){if(e!==null){var c=e.memoizedProps;if(Rr(c,s)&&e.ref===t.ref)if(rt=!1,t.pendingProps=s=c,(e.lanes&a)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Ut(e,t,a)}return El(e,t,r,s,a)}function Yc(e,t,r){var s=t.pendingProps,a=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(lr,dt),dt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(lr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:r,je(lr,dt),dt|=s}else c!==null?(s=c.baseLanes|r,t.memoizedState=null):s=r,je(lr,dt),dt|=s;return Je(e,t,a,r),t.child}function Xc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,r,s,a){var c=nt(r)?kn:Xe.current;return c=Kn(t,c),rr(t,a),r=pl(e,t,r,s,c,a),s=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(Me&&s&&Qs(t),t.flags|=1,Je(e,t,r,a),t.child)}function Qc(e,t,r,s,a){if(nt(r)){var c=!0;Wi(t)}else c=!1;if(rr(t,a),t.stateNode===null)uo(e,t),Rc(t,r,s),wl(t,r,s,a),s=!0;else if(e===null){var p=t.stateNode,x=t.memoizedProps;p.props=x;var k=p.context,L=r.contextType;typeof L=="object"&&L!==null?L=vt(L):(L=nt(r)?kn:Xe.current,L=Kn(t,L));var $=r.getDerivedStateFromProps,H=typeof $=="function"||typeof p.getSnapshotBeforeUpdate=="function";H||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==s||k!==L)&&Fc(t,p,s,L),un=!1;var B=t.memoizedState;p.state=B,eo(t,s,p,a),k=t.memoizedState,x!==s||B!==k||tt.current||un?(typeof $=="function"&&(yl(t,r,$,s),k=t.memoizedState),(x=un||Dc(t,r,x,s,B,k,L))?(H||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=k),p.props=s,p.state=k,p.context=L,s=x):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,fc(e,t),x=t.memoizedProps,L=t.type===t.elementType?x:bt(t.type,x),p.props=L,H=t.pendingProps,B=p.context,k=r.contextType,typeof k=="object"&&k!==null?k=vt(k):(k=nt(r)?kn:Xe.current,k=Kn(t,k));var J=r.getDerivedStateFromProps;($=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==H||B!==k)&&Fc(t,p,s,k),un=!1,B=t.memoizedState,p.state=B,eo(t,s,p,a);var ne=t.memoizedState;x!==H||B!==ne||tt.current||un?(typeof J=="function"&&(yl(t,r,J,s),ne=t.memoizedState),(L=un||Dc(t,r,L,s,B,ne,k)||!1)?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,ne,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,ne,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ne),p.props=s,p.state=ne,p.context=k,s=L):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),s=!1)}return Cl(e,t,r,s,c,a)}function Cl(e,t,r,s,a,c){Xc(e,t);var p=(t.flags&128)!==0;if(!s&&!p)return a&&tc(t,r,!1),Ut(e,t,c);s=t.stateNode,bm.current=t;var x=p&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&p?(t.child=tr(t,e.child,null,c),t.child=tr(t,null,x,c)):Je(e,t,x,c),t.memoizedState=s.state,a&&tc(t,r,!0),t.child}function Kc(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),ll(e,t.containerInfo)}function Zc(e,t,r,s,a){return er(),el(a),t.flags|=256,Je(e,t,r,s),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,t,r){var s=t.pendingProps,a=Le.current,c=!1,p=(t.flags&128)!==0,x;if((x=p)||(x=e!==null&&e.memoizedState===null?!1:(a&2)!==0),x?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),je(Le,a&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=s.children,e=s.fallback,c?(s=t.mode,c=t.child,p={mode:"hidden",children:p},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=ko(p,s,0,null),e=Ln(e,s,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=bl(r),t.memoizedState=Tl,e):jl(t,p));if(a=e.memoizedState,a!==null&&(x=a.dehydrated,x!==null))return jm(e,t,p,s,x,a,r);if(c){c=s.fallback,p=t.mode,a=e.child,x=a.sibling;var k={mode:"hidden",children:s.children};return!(p&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=k,t.deletions=null):(s=gn(a,k),s.subtreeFlags=a.subtreeFlags&14680064),x!==null?c=gn(x,c):(c=Ln(c,p,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,p=e.child.memoizedState,p=p===null?bl(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~r,t.memoizedState=Tl,s}return c=e.child,e=c.sibling,s=gn(c,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function jl(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,r,s){return s!==null&&el(s),tr(t,e.child,null,r),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jm(e,t,r,s,a,c,p){if(r)return t.flags&256?(t.flags&=-257,s=Sl(Error(o(422))),ao(e,t,p,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,a=t.mode,s=ko({mode:"visible",children:s.children},a,0,null),c=Ln(c,a,p,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,t.mode&1&&tr(t,e.child,null,p),t.child.memoizedState=bl(p),t.memoizedState=Tl,c);if(!(t.mode&1))return ao(e,t,p,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var x=s.dgst;return s=x,c=Error(o(419)),s=Sl(c,s,void 0),ao(e,t,p,s)}if(x=(p&e.childLanes)!==0,rt||x){if(s=Ge,s!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|p)?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,Ht(e,a),zt(s,e,a,-1))}return Gl(),s=Sl(Error(o(421))),ao(e,t,p,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Bm.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,ct=on(a.nextSibling),ut=t,Me=!0,Tt=null,e!==null&&(ht[gt++]=Vt,ht[gt++]=Gt,ht[gt++]=En,Vt=e.id,Gt=e.overflow,En=t),t=jl(t,s.children),t.flags|=4096,t)}function ed(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),il(e.return,t,r)}function Pl(e,t,r,s,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=r,c.tailMode=a)}function td(e,t,r){var s=t.pendingProps,a=s.revealOrder,c=s.tail;if(Je(e,t,s.children,r),s=Le.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,r,t);else if(e.tag===19)ed(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(je(Le,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&to(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Pl(t,!1,a,r,c);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&to(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Pl(t,!0,r,null,c);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=gn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Pm(e,t,r){switch(t.tag){case 3:Kc(t),er();break;case 5:hc(t);break;case 1:nt(t.type)&&Wi(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;je(Ki,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(je(Le,Le.current&1),t.flags|=128,null):r&t.child.childLanes?Jc(e,t,r):(je(Le,Le.current&1),e=Ut(e,t,r),e!==null?e.sibling:null);je(Le,Le.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return td(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),je(Le,Le.current),s)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,r)}return Ut(e,t,r)}var nd,zl,rd,id;nd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zl=function(){},rd=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,bn(Ot.current);var c=null;switch(r){case"input":a=is(e,a),s=is(e,s),c=[];break;case"select":a=W({},a,{value:void 0}),s=W({},s,{value:void 0}),c=[];break;case"textarea":a=ls(e,a),s=ls(e,s),c=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Vi)}us(r,s);var p;r=null;for(L in a)if(!s.hasOwnProperty(L)&&a.hasOwnProperty(L)&&a[L]!=null)if(L==="style"){var x=a[L];for(p in x)x.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(u.hasOwnProperty(L)?c||(c=[]):(c=c||[]).push(L,null));for(L in s){var k=s[L];if(x=a!=null?a[L]:void 0,s.hasOwnProperty(L)&&k!==x&&(k!=null||x!=null))if(L==="style")if(x){for(p in x)!x.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in k)k.hasOwnProperty(p)&&x[p]!==k[p]&&(r||(r={}),r[p]=k[p])}else r||(c||(c=[]),c.push(L,r)),r=k;else L==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,x=x?x.__html:void 0,k!=null&&x!==k&&(c=c||[]).push(L,k)):L==="children"?typeof k!="string"&&typeof k!="number"||(c=c||[]).push(L,""+k):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(u.hasOwnProperty(L)?(k!=null&&L==="onScroll"&&Pe("scroll",e),c||x===k||(c=[])):(c=c||[]).push(L,k))}r&&(c=c||[]).push("style",r);var L=c;(t.updateQueue=L)&&(t.flags|=4)}},id=function(e,t,r,s){r!==s&&(t.flags|=4)};function Jr(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function zm(e,t,r){var s=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return nt(t.type)&&Hi(),Ke(t),null;case 3:return s=t.stateNode,ir(),ze(tt),ze(Xe),cl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(Bl(Tt),Tt=null))),zl(e,t),Ke(t),null;case 5:al(t);var a=bn(Yr.current);if(r=t.type,e!==null&&t.stateNode!=null)rd(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(e=bn(Ot.current),Xi(t)){s=t.stateNode,r=t.type;var c=t.memoizedProps;switch(s[It]=t,s[Gr]=c,e=(t.mode&1)!==0,r){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(a=0;a<Br.length;a++)Pe(Br[a],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Ra(s,c),Pe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},Pe("invalid",s);break;case"textarea":$a(s,c),Pe("invalid",s)}us(r,c),a=null;for(var p in c)if(c.hasOwnProperty(p)){var x=c[p];p==="children"?typeof x=="string"?s.textContent!==x&&(c.suppressHydrationWarning!==!0&&$i(s.textContent,x,e),a=["children",x]):typeof x=="number"&&s.textContent!==""+x&&(c.suppressHydrationWarning!==!0&&$i(s.textContent,x,e),a=["children",""+x]):u.hasOwnProperty(p)&&x!=null&&p==="onScroll"&&Pe("scroll",s)}switch(r){case"input":Ft(s),Ba(s,c,!0);break;case"textarea":Ft(s),Ga(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Vi)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ha(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=p.createElement(r,{is:s.is}):(e=p.createElement(r),r==="select"&&(p=e,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):e=p.createElementNS(e,r),e[It]=t,e[Gr]=s,nd(e,t,!1,!1),t.stateNode=e;e:{switch(p=cs(r,s),r){case"dialog":Pe("cancel",e),Pe("close",e),a=s;break;case"iframe":case"object":case"embed":Pe("load",e),a=s;break;case"video":case"audio":for(a=0;a<Br.length;a++)Pe(Br[a],e);a=s;break;case"source":Pe("error",e),a=s;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),a=s;break;case"details":Pe("toggle",e),a=s;break;case"input":Ra(e,s),a=is(e,s),Pe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=W({},s,{value:void 0}),Pe("invalid",e);break;case"textarea":$a(e,s),a=ls(e,s),Pe("invalid",e);break;default:a=s}us(r,a),x=a;for(c in x)if(x.hasOwnProperty(c)){var k=x[c];c==="style"?qa(e,k):c==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Wa(e,k)):c==="children"?typeof k=="string"?(r!=="textarea"||k!=="")&&Sr(e,k):typeof k=="number"&&Sr(e,""+k):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?k!=null&&c==="onScroll"&&Pe("scroll",e):k!=null&&w(e,c,k,p))}switch(r){case"input":Ft(e),Ba(e,s,!1);break;case"textarea":Ft(e),Ga(e);break;case"option":s.value!=null&&e.setAttribute("value",""+xe(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?Fn(e,!!s.multiple,c,!1):s.defaultValue!=null&&Fn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vi)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=bn(Yr.current),bn(Ot.current),Xi(t)){if(s=t.stateNode,r=t.memoizedProps,s[It]=t,(c=s.nodeValue!==r)&&(e=ut,e!==null))switch(e.tag){case 3:$i(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(s.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[It]=t,t.stateNode=s}return Ke(t),null;case 13:if(ze(Le),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&ct!==null&&t.mode&1&&!(t.flags&128))lc(),er(),t.flags|=98560,c=!1;else if(c=Xi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[It]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),c=!1}else Tt!==null&&(Bl(Tt),Tt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?$e===0&&($e=3):Gl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return ir(),zl(e,t),e===null&&$r(t.stateNode.containerInfo),Ke(t),null;case 10:return rl(t.type._context),Ke(t),null;case 17:return nt(t.type)&&Hi(),Ke(t),null;case 19:if(ze(Le),c=t.memoizedState,c===null)return Ke(t),null;if(s=(t.flags&128)!==0,p=c.rendering,p===null)if(s)Jr(c,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=to(e),p!==null){for(t.flags|=128,Jr(c,!1),s=p.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)c=r,e=s,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(Le,Le.current&1|2),t.child}e=e.sibling}c.tail!==null&&Ae()>ar&&(t.flags|=128,s=!0,Jr(c,!1),t.lanes=4194304)}else{if(!s)if(e=to(p),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Jr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Me)return Ke(t),null}else 2*Ae()-c.renderingStartTime>ar&&r!==1073741824&&(t.flags|=128,s=!0,Jr(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(r=c.last,r!==null?r.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ae(),t.sibling=null,r=Le.current,je(Le,s?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return Vl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?dt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function _m(e,t){switch(Ks(t),t.tag){case 1:return nt(t.type)&&Hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),ze(tt),ze(Xe),cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return al(t),null;case 13:if(ze(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Le),null;case 4:return ir(),null;case 10:return rl(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var co=!1,Ze=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,ee=null;function sr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ne(e,t,s)}else r.current=null}function _l(e,t,r){try{r()}catch(s){Ne(e,t,s)}}var od=!1;function Lm(e,t){if(Vs=_i,e=Du(),Os(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var p=0,x=-1,k=-1,L=0,$=0,H=e,B=null;t:for(;;){for(var J;H!==r||a!==0&&H.nodeType!==3||(x=p+a),H!==c||s!==0&&H.nodeType!==3||(k=p+s),H.nodeType===3&&(p+=H.nodeValue.length),(J=H.firstChild)!==null;)B=H,H=J;for(;;){if(H===e)break t;if(B===r&&++L===a&&(x=p),B===c&&++$===s&&(k=p),(J=H.nextSibling)!==null)break;H=B,B=H.parentNode}H=J}r=x===-1||k===-1?null:{start:x,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gs={focusedElem:e,selectionRange:r},_i=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var ne=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,De=ne.memoizedState,P=t.stateNode,C=P.getSnapshotBeforeUpdate(t.elementType===t.type?re:bt(t.type,re),De);P.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(q){Ne(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return ne=od,od=!1,ne}function ei(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&_l(t,r,c)}a=a.next}while(a!==s)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ml(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sd(e){var t=e.alternate;t!==null&&(e.alternate=null,sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Gr],delete t[qs],delete t[mm],delete t[hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Vi));else if(s!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}function Il(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Il(e,t,r),e=e.sibling;e!==null;)Il(e,t,r),e=e.sibling}var qe=null,jt=!1;function dn(e,t,r){for(r=r.child;r!==null;)ud(e,t,r),r=r.sibling}function ud(e,t,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Ci,r)}catch{}switch(r.tag){case 5:Ze||sr(r,t);case 6:var s=qe,a=jt;qe=null,dn(e,t,r),qe=s,jt=a,qe!==null&&(jt?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(jt?(e=qe,r=r.stateNode,e.nodeType===8?Us(e.parentNode,r):e.nodeType===1&&Us(e,r),Lr(e)):Us(qe,r.stateNode));break;case 4:s=qe,a=jt,qe=r.stateNode.containerInfo,jt=!0,dn(e,t,r),qe=s,jt=a;break;case 0:case 11:case 14:case 15:if(!Ze&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var c=a,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&_l(r,t,p),a=a.next}while(a!==s)}dn(e,t,r);break;case 1:if(!Ze&&(sr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(x){Ne(r,t,x)}dn(e,t,r);break;case 21:dn(e,t,r);break;case 22:r.mode&1?(Ze=(s=Ze)||r.memoizedState!==null,dn(e,t,r),Ze=s):dn(e,t,r);break;default:dn(e,t,r)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Mm),t.forEach(function(s){var a=$m.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Pt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var c=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 5:qe=x.stateNode,jt=!1;break e;case 3:qe=x.stateNode.containerInfo,jt=!0;break e;case 4:qe=x.stateNode.containerInfo,jt=!0;break e}x=x.return}if(qe===null)throw Error(o(160));ud(c,p,a),qe=null,jt=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(L){Ne(a,t,L)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),At(e),s&4){try{ei(3,e,e.return),fo(3,e)}catch(re){Ne(e,e.return,re)}try{ei(5,e,e.return)}catch(re){Ne(e,e.return,re)}}break;case 1:Pt(t,e),At(e),s&512&&r!==null&&sr(r,r.return);break;case 5:if(Pt(t,e),At(e),s&512&&r!==null&&sr(r,r.return),e.flags&32){var a=e.stateNode;try{Sr(a,"")}catch(re){Ne(e,e.return,re)}}if(s&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,p=r!==null?r.memoizedProps:c,x=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{x==="input"&&c.type==="radio"&&c.name!=null&&Fa(a,c),cs(x,p);var L=cs(x,c);for(p=0;p<k.length;p+=2){var $=k[p],H=k[p+1];$==="style"?qa(a,H):$==="dangerouslySetInnerHTML"?Wa(a,H):$==="children"?Sr(a,H):w(a,$,H,L)}switch(x){case"input":os(a,c);break;case"textarea":Va(a,c);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?Fn(a,!!c.multiple,J,!1):B!==!!c.multiple&&(c.defaultValue!=null?Fn(a,!!c.multiple,c.defaultValue,!0):Fn(a,!!c.multiple,c.multiple?[]:"",!1))}a[Gr]=c}catch(re){Ne(e,e.return,re)}}break;case 6:if(Pt(t,e),At(e),s&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(re){Ne(e,e.return,re)}}break;case 3:if(Pt(t,e),At(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(re){Ne(e,e.return,re)}break;case 4:Pt(t,e),At(e);break;case 13:Pt(t,e),At(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Al=Ae())),s&4&&cd(e);break;case 22:if($=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(L=Ze)||$,Pt(t,e),Ze=L):Pt(t,e),At(e),s&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!$&&e.mode&1)for(ee=e,$=e.child;$!==null;){for(H=ee=$;ee!==null;){switch(B=ee,J=B.child,B.tag){case 0:case 11:case 14:case 15:ei(4,B,B.return);break;case 1:sr(B,B.return);var ne=B.stateNode;if(typeof ne.componentWillUnmount=="function"){s=B,r=B.return;try{t=s,ne.props=t.memoizedProps,ne.state=t.memoizedState,ne.componentWillUnmount()}catch(re){Ne(s,r,re)}}break;case 5:sr(B,B.return);break;case 22:if(B.memoizedState!==null){md(H);continue}}J!==null?(J.return=B,ee=J):md(H)}$=$.sibling}e:for($=null,H=e;;){if(H.tag===5){if($===null){$=H;try{a=H.stateNode,L?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(x=H.stateNode,k=H.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,x.style.display=Ua("display",p))}catch(re){Ne(e,e.return,re)}}}else if(H.tag===6){if($===null)try{H.stateNode.nodeValue=L?"":H.memoizedProps}catch(re){Ne(e,e.return,re)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;$===H&&($=null),H=H.return}$===H&&($=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Pt(t,e),At(e),s&4&&cd(e);break;case 21:break;default:Pt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ld(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Sr(a,""),s.flags&=-33);var c=ad(e);Il(e,c,a);break;case 3:case 4:var p=s.stateNode.containerInfo,x=ad(e);Ll(e,x,p);break;default:throw Error(o(161))}}catch(k){Ne(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,r){ee=e,fd(e)}function fd(e,t,r){for(var s=(e.mode&1)!==0;ee!==null;){var a=ee,c=a.child;if(a.tag===22&&s){var p=a.memoizedState!==null||co;if(!p){var x=a.alternate,k=x!==null&&x.memoizedState!==null||Ze;x=co;var L=Ze;if(co=p,(Ze=k)&&!L)for(ee=a;ee!==null;)p=ee,k=p.child,p.tag===22&&p.memoizedState!==null?hd(a):k!==null?(k.return=p,ee=k):hd(a);for(;c!==null;)ee=c,fd(c),c=c.sibling;ee=a,co=x,Ze=L}pd(e)}else a.subtreeFlags&8772&&c!==null?(c.return=a,ee=c):pd(e)}}function pd(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||fo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ze)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:bt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&mc(t,c,s);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}mc(t,p,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&r.focus();break;case"img":k.src&&(r.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var L=t.alternate;if(L!==null){var $=L.memoizedState;if($!==null){var H=$.dehydrated;H!==null&&Lr(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ze||t.flags&512&&Ml(t)}catch(B){Ne(t,t.return,B)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function md(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function hd(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fo(4,t)}catch(k){Ne(t,r,k)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(k){Ne(t,a,k)}}var c=t.return;try{Ml(t)}catch(k){Ne(t,c,k)}break;case 5:var p=t.return;try{Ml(t)}catch(k){Ne(t,p,k)}}}catch(k){Ne(t,t.return,k)}if(t===e){ee=null;break}var x=t.sibling;if(x!==null){x.return=t.return,ee=x;break}ee=t.return}}var Om=Math.ceil,po=z.ReactCurrentDispatcher,Ol=z.ReactCurrentOwner,yt=z.ReactCurrentBatchConfig,ye=0,Ge=null,Re=null,Ye=0,dt=0,lr=sn(0),$e=0,ti=null,Pn=0,mo=0,Nl=0,ni=null,it=null,Al=0,ar=1/0,qt=null,ho=!1,Dl=null,fn=null,go=!1,pn=null,vo=0,ri=0,Rl=null,xo=-1,yo=0;function et(){return ye&6?Ae():xo!==-1?xo:xo=Ae()}function mn(e){return e.mode&1?ye&2&&Ye!==0?Ye&-Ye:vm.transition!==null?(yo===0&&(yo=au()),yo):(e=be,e!==0||(e=window.event,e=e===void 0?16:vu(e.type)),e):1}function zt(e,t,r,s){if(50<ri)throw ri=0,Rl=null,Error(o(185));jr(e,r,s),(!(ye&2)||e!==Ge)&&(e===Ge&&(!(ye&2)&&(mo|=r),$e===4&&hn(e,Ye)),ot(e,s),r===1&&ye===0&&!(t.mode&1)&&(ar=Ae()+500,Ui&&an()))}function ot(e,t){var r=e.callbackNode;vp(e,t);var s=ji(e,e===Ge?Ye:0);if(s===0)r!==null&&ou(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&ou(r),t===1)e.tag===0?gm(vd.bind(null,e)):nc(vd.bind(null,e)),fm(function(){!(ye&6)&&an()}),r=null;else{switch(uu(s)){case 1:r=vs;break;case 4:r=su;break;case 16:r=Ei;break;case 536870912:r=lu;break;default:r=Ei}r=Td(r,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function gd(e,t){if(xo=-1,yo=0,ye&6)throw Error(o(327));var r=e.callbackNode;if(ur()&&e.callbackNode!==r)return null;var s=ji(e,e===Ge?Ye:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=wo(e,s);else{t=s;var a=ye;ye|=2;var c=yd();(Ge!==e||Ye!==t)&&(qt=null,ar=Ae()+500,_n(e,t));do try{Dm();break}catch(x){xd(e,x)}while(!0);nl(),po.current=c,ye=a,Re!==null?t=0:(Ge=null,Ye=0,t=$e)}if(t!==0){if(t===2&&(a=xs(e),a!==0&&(s=a,t=Fl(e,a))),t===1)throw r=ti,_n(e,0),hn(e,s),ot(e,Ae()),r;if(t===6)hn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Nm(a)&&(t=wo(e,s),t===2&&(c=xs(e),c!==0&&(s=c,t=Fl(e,c))),t===1))throw r=ti,_n(e,0),hn(e,s),ot(e,Ae()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:Mn(e,it,qt);break;case 3:if(hn(e,s),(s&130023424)===s&&(t=Al+500-Ae(),10<t)){if(ji(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){et(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ws(Mn.bind(null,e,it,qt),t);break}Mn(e,it,qt);break;case 4:if(hn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var p=31-Et(s);c=1<<p,p=t[p],p>a&&(a=p),s&=~c}if(s=a,s=Ae()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Om(s/1960))-s,10<s){e.timeoutHandle=Ws(Mn.bind(null,e,it,qt),s);break}Mn(e,it,qt);break;case 5:Mn(e,it,qt);break;default:throw Error(o(329))}}}return ot(e,Ae()),e.callbackNode===r?gd.bind(null,e):null}function Fl(e,t){var r=ni;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=wo(e,t),e!==2&&(t=it,it=r,t!==null&&Bl(t)),e}function Bl(e){it===null?it=e:it.push.apply(it,e)}function Nm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],c=a.getSnapshot;a=a.value;try{if(!Ct(c(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Nl,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Et(t),s=1<<r;e[r]=-1,t&=~s}}function vd(e){if(ye&6)throw Error(o(327));ur();var t=ji(e,0);if(!(t&1))return ot(e,Ae()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var s=xs(e);s!==0&&(t=s,r=Fl(e,s))}if(r===1)throw r=ti,_n(e,0),hn(e,t),ot(e,Ae()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,it,qt),ot(e,Ae()),null}function $l(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(ar=Ae()+500,Ui&&an())}}function zn(e){pn!==null&&pn.tag===0&&!(ye&6)&&ur();var t=ye;ye|=1;var r=yt.transition,s=be;try{if(yt.transition=null,be=1,e)return e()}finally{be=s,yt.transition=r,ye=t,!(ye&6)&&an()}}function Vl(){dt=lr.current,ze(lr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,dm(r)),Re!==null)for(r=Re.return;r!==null;){var s=r;switch(Ks(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Hi();break;case 3:ir(),ze(tt),ze(Xe),cl();break;case 5:al(s);break;case 4:ir();break;case 13:ze(Le);break;case 19:ze(Le);break;case 10:rl(s.type._context);break;case 22:case 23:Vl()}r=r.return}if(Ge=e,Re=e=gn(e.current,null),Ye=dt=t,$e=0,ti=null,Nl=mo=Pn=0,it=ni=null,Tn!==null){for(t=0;t<Tn.length;t++)if(r=Tn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,c=r.pending;if(c!==null){var p=c.next;c.next=a,s.next=p}r.pending=s}Tn=null}return e}function xd(e,t){do{var r=Re;try{if(nl(),no.current=so,ro){for(var s=Ie.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ro=!1}if(jn=0,Ve=Be=Ie=null,Xr=!1,Qr=0,Ol.current=null,r===null||r.return===null){$e=1,ti=t,Re=null;break}e:{var c=e,p=r.return,x=r,k=t;if(t=Ye,x.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var L=k,$=x,H=$.tag;if(!($.mode&1)&&(H===0||H===11||H===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var J=Gc(p);if(J!==null){J.flags&=-257,Hc(J,p,x,c,t),J.mode&1&&Vc(c,L,t),t=J,k=L;var ne=t.updateQueue;if(ne===null){var re=new Set;re.add(k),t.updateQueue=re}else ne.add(k);break e}else{if(!(t&1)){Vc(c,L,t),Gl();break e}k=Error(o(426))}}else if(Me&&x.mode&1){var De=Gc(p);if(De!==null){!(De.flags&65536)&&(De.flags|=256),Hc(De,p,x,c,t),el(or(k,x));break e}}c=k=or(k,x),$e!==4&&($e=2),ni===null?ni=[c]:ni.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=Bc(c,k,t);pc(c,P);break e;case 1:x=k;var C=c.type,_=c.stateNode;if(!(c.flags&128)&&(typeof C.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(fn===null||!fn.has(_)))){c.flags|=65536,t&=-t,c.lanes|=t;var q=$c(c,x,t);pc(c,q);break e}}c=c.return}while(c!==null)}Sd(r)}catch(ie){t=ie,Re===r&&r!==null&&(Re=r=r.return);continue}break}while(!0)}function yd(){var e=po.current;return po.current=so,e===null?so:e}function Gl(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(Pn&268435455)&&!(mo&268435455)||hn(Ge,Ye)}function wo(e,t){var r=ye;ye|=2;var s=yd();(Ge!==e||Ye!==t)&&(qt=null,_n(e,t));do try{Am();break}catch(a){xd(e,a)}while(!0);if(nl(),ye=r,po.current=s,Re!==null)throw Error(o(261));return Ge=null,Ye=0,$e}function Am(){for(;Re!==null;)wd(Re)}function Dm(){for(;Re!==null&&!ap();)wd(Re)}function wd(e){var t=Cd(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Sd(e):Re=t,Ol.current=null}function Sd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=_m(r,t),r!==null){r.flags&=32767,Re=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Re=null;return}}else if(r=zm(r,t,dt),r!==null){Re=r;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);$e===0&&($e=5)}function Mn(e,t,r){var s=be,a=yt.transition;try{yt.transition=null,be=1,Rm(e,t,r,s)}finally{yt.transition=a,be=s}return null}function Rm(e,t,r,s){do ur();while(pn!==null);if(ye&6)throw Error(o(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(xp(e,c),e===Ge&&(Re=Ge=null,Ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||go||(go=!0,Td(Ei,function(){return ur(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=yt.transition,yt.transition=null;var p=be;be=1;var x=ye;ye|=4,Ol.current=null,Lm(e,r),dd(r,e),im(Gs),_i=!!Vs,Gs=Vs=null,e.current=r,Im(r),up(),ye=x,be=p,yt.transition=c}else e.current=r;if(go&&(go=!1,pn=e,vo=a),c=e.pendingLanes,c===0&&(fn=null),fp(r.stateNode),ot(e,Ae()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ho)throw ho=!1,e=Dl,Dl=null,e;return vo&1&&e.tag!==0&&ur(),c=e.pendingLanes,c&1?e===Rl?ri++:(ri=0,Rl=e):ri=0,an(),null}function ur(){if(pn!==null){var e=uu(vo),t=yt.transition,r=be;try{if(yt.transition=null,be=16>e?16:e,pn===null)var s=!1;else{if(e=pn,pn=null,vo=0,ye&6)throw Error(o(331));var a=ye;for(ye|=4,ee=e.current;ee!==null;){var c=ee,p=c.child;if(ee.flags&16){var x=c.deletions;if(x!==null){for(var k=0;k<x.length;k++){var L=x[k];for(ee=L;ee!==null;){var $=ee;switch($.tag){case 0:case 11:case 15:ei(8,$,c)}var H=$.child;if(H!==null)H.return=$,ee=H;else for(;ee!==null;){$=ee;var B=$.sibling,J=$.return;if(sd($),$===L){ee=null;break}if(B!==null){B.return=J,ee=B;break}ee=J}}}var ne=c.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var De=re.sibling;re.sibling=null,re=De}while(re!==null)}}ee=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,ee=p;else e:for(;ee!==null;){if(c=ee,c.flags&2048)switch(c.tag){case 0:case 11:case 15:ei(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,ee=P;break e}ee=c.return}}var C=e.current;for(ee=C;ee!==null;){p=ee;var _=p.child;if(p.subtreeFlags&2064&&_!==null)_.return=p,ee=_;else e:for(p=C;ee!==null;){if(x=ee,x.flags&2048)try{switch(x.tag){case 0:case 11:case 15:fo(9,x)}}catch(ie){Ne(x,x.return,ie)}if(x===p){ee=null;break e}var q=x.sibling;if(q!==null){q.return=x.return,ee=q;break e}ee=x.return}}if(ye=a,an(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Ci,e)}catch{}s=!0}return s}finally{be=r,yt.transition=t}}return!1}function kd(e,t,r){t=or(r,t),t=Bc(e,t,1),e=cn(e,t,1),t=et(),e!==null&&(jr(e,1,t),ot(e,t))}function Ne(e,t,r){if(e.tag===3)kd(e,e,r);else for(;t!==null;){if(t.tag===3){kd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(fn===null||!fn.has(s))){e=or(r,e),e=$c(t,e,1),t=cn(t,e,1),e=et(),t!==null&&(jr(t,1,e),ot(t,e));break}}t=t.return}}function Fm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Ye&r)===r&&($e===4||$e===3&&(Ye&130023424)===Ye&&500>Ae()-Al?_n(e,0):Nl|=r),ot(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):t=1);var r=et();e=Ht(e,t),e!==null&&(jr(e,t,r),ot(e,r))}function Bm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(e,r)}function $m(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),Ed(e,r)}var Cd;Cd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return rt=!1,Pm(e,t,r);rt=!!(e.flags&131072)}else rt=!1,Me&&t.flags&1048576&&rc(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;uo(e,t),e=t.pendingProps;var a=Kn(t,Xe.current);rr(t,r),a=pl(null,t,s,e,a,r);var c=ml();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(s)?(c=!0,Wi(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,sl(t),a.updater=lo,t.stateNode=a,a._reactInternals=t,wl(t,s,e,r),t=Cl(null,t,s,!0,c,r)):(t.tag=0,Me&&c&&Qs(t),Je(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Gm(s),e=bt(s,e),a){case 0:t=El(null,t,s,e,r);break e;case 1:t=Qc(null,t,s,e,r);break e;case 11:t=Wc(null,t,s,e,r);break e;case 14:t=Uc(null,t,s,bt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:bt(s,a),El(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:bt(s,a),Qc(e,t,s,a,r);case 3:e:{if(Kc(t),e===null)throw Error(o(387));s=t.pendingProps,c=t.memoizedState,a=c.element,fc(e,t),eo(t,s,null,r);var p=t.memoizedState;if(s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=or(Error(o(423)),t),t=Zc(e,t,s,r,a);break e}else if(s!==a){a=or(Error(o(424)),t),t=Zc(e,t,s,r,a);break e}else for(ct=on(t.stateNode.containerInfo.firstChild),ut=t,Me=!0,Tt=null,r=cc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),s===a){t=Ut(e,t,r);break e}Je(e,t,s,r)}t=t.child}return t;case 5:return hc(t),e===null&&Js(t),s=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,p=a.children,Hs(s,a)?p=null:c!==null&&Hs(s,c)&&(t.flags|=32),Xc(e,t),Je(e,t,p,r),t.child;case 6:return e===null&&Js(t),null;case 13:return Jc(e,t,r);case 4:return ll(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=tr(t,null,s,r):Je(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:bt(s,a),Wc(e,t,s,a,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,c=t.memoizedProps,p=a.value,je(Ki,s._currentValue),s._currentValue=p,c!==null)if(Ct(c.value,p)){if(c.children===a.children&&!tt.current){t=Ut(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var x=c.dependencies;if(x!==null){p=c.child;for(var k=x.firstContext;k!==null;){if(k.context===s){if(c.tag===1){k=Wt(-1,r&-r),k.tag=2;var L=c.updateQueue;if(L!==null){L=L.shared;var $=L.pending;$===null?k.next=k:(k.next=$.next,$.next=k),L.pending=k}}c.lanes|=r,k=c.alternate,k!==null&&(k.lanes|=r),il(c.return,r,t),x.lanes|=r;break}k=k.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(o(341));p.lanes|=r,x=p.alternate,x!==null&&(x.lanes|=r),il(p,r,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}Je(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,rr(t,r),a=vt(a),s=s(a),t.flags|=1,Je(e,t,s,r),t.child;case 14:return s=t.type,a=bt(s,t.pendingProps),a=bt(s.type,a),Uc(e,t,s,a,r);case 15:return qc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:bt(s,a),uo(e,t),t.tag=1,nt(s)?(e=!0,Wi(t)):e=!1,rr(t,r),Rc(t,s,a),wl(t,s,a,r),Cl(null,t,s,!0,e,r);case 19:return td(e,t,r);case 22:return Yc(e,t,r)}throw Error(o(156,t.tag))};function Td(e,t){return iu(e,t)}function Vm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,s){return new Vm(e,t,r,s)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gm(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===ae)return 14}return 2}function gn(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function So(e,t,r,s,a,c){var p=2;if(s=e,typeof e=="function")Hl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case U:return Ln(r.children,a,c,t);case K:p=8,a|=8;break;case V:return e=wt(12,r,t,a|2),e.elementType=V,e.lanes=c,e;case X:return e=wt(13,r,t,a),e.elementType=X,e.lanes=c,e;case oe:return e=wt(19,r,t,a),e.elementType=oe,e.lanes=c,e;case we:return ko(r,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:p=10;break e;case Z:p=9;break e;case te:p=11;break e;case ae:p=14;break e;case ve:p=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=wt(p,r,t,a),t.elementType=e,t.type=s,t.lanes=c,t}function Ln(e,t,r,s){return e=wt(7,e,s,t),e.lanes=r,e}function ko(e,t,r,s){return e=wt(22,e,s,t),e.elementType=we,e.lanes=r,e.stateNode={isHidden:!1},e}function Wl(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Ul(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hm(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ql(e,t,r,s,a,c,p,x,k){return e=new Hm(e,t,r,x,k),t===1?(t=1,c===!0&&(t|=8)):t=0,c=wt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(c),e}function Wm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function bd(e){if(!e)return ln;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(nt(r))return ec(e,r,t)}return t}function jd(e,t,r,s,a,c,p,x,k){return e=ql(r,s,!0,e,a,c,p,x,k),e.context=bd(null),r=e.current,s=et(),a=mn(r),c=Wt(s,a),c.callback=t??null,cn(r,c,a),e.current.lanes=a,jr(e,a,s),ot(e,s),e}function Eo(e,t,r,s){var a=t.current,c=et(),p=mn(a);return r=bd(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(c,p),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=cn(a,t,p),e!==null&&(zt(e,a,p,c),Ji(e,a,p)),p}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Yl(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}var zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}To.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Eo(e,t,null,null)},To.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Eo(null,e,null,null)}),t[Bt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tn.length&&t!==0&&t<tn[r].priority;r++);tn.splice(r,0,e),r===0&&hu(e)}};function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function Um(e,t,r,s,a){if(a){if(typeof s=="function"){var c=s;s=function(){var L=Co(p);c.call(L)}}var p=jd(t,s,e,0,null,!1,!1,"",_d);return e._reactRootContainer=p,e[Bt]=p.current,$r(e.nodeType===8?e.parentNode:e),zn(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var x=s;s=function(){var L=Co(k);x.call(L)}}var k=ql(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=k,e[Bt]=k.current,$r(e.nodeType===8?e.parentNode:e),zn(function(){Eo(t,k,r,s)}),k}function jo(e,t,r,s,a){var c=r._reactRootContainer;if(c){var p=c;if(typeof a=="function"){var x=a;a=function(){var k=Co(p);x.call(k)}}Eo(t,p,e,a)}else p=Um(r,t,e,a,s);return Co(p)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(ws(t,r|1),ot(t,Ae()),!(ye&6)&&(ar=Ae()+500,an()))}break;case 13:zn(function(){var s=Ht(e,1);if(s!==null){var a=et();zt(s,e,1,a)}}),Yl(e,1)}},Ss=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=et();zt(t,e,134217728,r)}Yl(e,134217728)}},du=function(e){if(e.tag===13){var t=mn(e),r=Ht(e,t);if(r!==null){var s=et();zt(r,e,t,s)}Yl(e,t)}},fu=function(){return be},pu=function(e,t){var r=be;try{return be=e,t()}finally{be=r}},ps=function(e,t,r){switch(t){case"input":if(os(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=Gi(s);if(!a)throw Error(o(90));kt(s),os(s,a)}}}break;case"textarea":Va(e,r);break;case"select":t=r.value,t!=null&&Fn(e,!!r.multiple,t,!1)}},Ka=$l,Za=zn;var qm={usingClientEntryPoint:!1,Events:[Hr,Xn,Gi,Xa,Qa,$l]},ii={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ym={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Ci=Po.inject(Ym),Lt=Po}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm,st.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ql(t))throw Error(o(200));return Wm(e,t,null,r)},st.createRoot=function(e,t){if(!Ql(e))throw Error(o(299));var r=!1,s="",a=zd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ql(e,1,!1,null,null,r,!1,s,a),e[Bt]=t.current,$r(e.nodeType===8?e.parentNode:e),new Xl(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=nu(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return zn(e)},st.hydrate=function(e,t,r){if(!bo(t))throw Error(o(200));return jo(null,e,t,!0,r)},st.hydrateRoot=function(e,t,r){if(!Ql(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,a=!1,c="",p=zd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=jd(t,null,e,1,r??null,a,!1,c,p),e[Bt]=t.current,$r(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new To(t)},st.render=function(e,t,r){if(!bo(t))throw Error(o(200));return jo(null,e,t,!1,r)},st.unmountComponentAtNode=function(e){if(!bo(e))throw Error(o(40));return e._reactRootContainer?(zn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},st.unstable_batchedUpdates=$l,st.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!bo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return jo(e,t,r,!1,s)},st.version="18.3.1-next-f1338f8080-20240426",st}var Rd;function rh(){if(Rd)return Jl.exports;Rd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Jl.exports=nh(),Jl.exports}var Fd;function ih(){if(Fd)return zo;Fd=1;var i=rh();return zo.createRoot=i.createRoot,zo.hydrateRoot=i.hydrateRoot,zo}var oh=ih(),lt=function(){return lt=Object.assign||function(n){for(var o,l=1,u=arguments.length;l<u;l++){o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(n[d]=o[d])}return n},lt.apply(this,arguments)};function mi(i,n,o){if(o||arguments.length===2)for(var l=0,u=n.length,d;l<u;l++)(d||!(l in n))&&(d||(d=Array.prototype.slice.call(n,0,l)),d[l]=n[l]);return i.concat(d||Array.prototype.slice.call(n))}var _e="-ms-",fi="-moz-",Te="-webkit-",cf="comm",Ko="rule",_a="decl",sh="@import",df="@keyframes",lh="@layer",ff=Math.abs,Ma=String.fromCharCode,ga=Object.assign;function ah(i,n){return We(i,0)^45?(((n<<2^We(i,0))<<2^We(i,1))<<2^We(i,2))<<2^We(i,3):0}function pf(i){return i.trim()}function Qt(i,n){return(i=n.exec(i))?i[0]:i}function pe(i,n,o){return i.replace(n,o)}function Ao(i,n,o){return i.indexOf(n,o)}function We(i,n){return i.charCodeAt(n)|0}function pr(i,n,o){return i.slice(n,o)}function Dt(i){return i.length}function mf(i){return i.length}function di(i,n){return n.push(i),i}function uh(i,n){return i.map(n).join("")}function Bd(i,n){return i.filter(function(o){return!Qt(o,n)})}var Zo=1,mr=1,hf=0,St=0,Fe=0,xr="";function Jo(i,n,o,l,u,d,h,g){return{value:i,root:n,parent:o,type:l,props:u,children:d,line:Zo,column:mr,length:h,return:"",siblings:g}}function xn(i,n){return ga(Jo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function cr(i){for(;i.root;)i=xn(i.root,{children:[i]});di(i,i.siblings)}function ch(){return Fe}function dh(){return Fe=St>0?We(xr,--St):0,mr--,Fe===10&&(mr=1,Zo--),Fe}function _t(){return Fe=St<hf?We(xr,St++):0,mr++,Fe===10&&(mr=1,Zo++),Fe}function On(){return We(xr,St)}function Do(){return St}function es(i,n){return pr(xr,i,n)}function va(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fh(i){return Zo=mr=1,hf=Dt(xr=i),St=0,[]}function ph(i){return xr="",i}function na(i){return pf(es(St-1,xa(i===91?i+2:i===40?i+1:i)))}function mh(i){for(;(Fe=On())&&Fe<33;)_t();return va(i)>2||va(Fe)>3?"":" "}function hh(i,n){for(;--n&&_t()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return es(i,Do()+(n<6&&On()==32&&_t()==32))}function xa(i){for(;_t();)switch(Fe){case i:return St;case 34:case 39:i!==34&&i!==39&&xa(Fe);break;case 40:i===41&&xa(i);break;case 92:_t();break}return St}function gh(i,n){for(;_t()&&i+Fe!==57;)if(i+Fe===84&&On()===47)break;return"/*"+es(n,St-1)+"*"+Ma(i===47?i:_t())}function vh(i){for(;!va(On());)_t();return es(i,St)}function xh(i){return ph(Ro("",null,null,null,[""],i=fh(i),0,[0],i))}function Ro(i,n,o,l,u,d,h,g,f){for(var S=0,v=0,y=h,T=0,b=0,I=0,N=1,F=1,M=1,E=0,w="",z=u,O=d,A=l,U=w;F;)switch(I=E,E=_t()){case 40:if(I!=108&&We(U,y-1)==58){Ao(U+=pe(na(E),"&","&\f"),"&\f",ff(S?g[S-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:U+=na(E);break;case 9:case 10:case 13:case 32:U+=mh(I);break;case 92:U+=hh(Do()-1,7);continue;case 47:switch(On()){case 42:case 47:di(yh(gh(_t(),Do()),n,o,f),f);break;default:U+="/"}break;case 123*N:g[S++]=Dt(U)*M;case 125*N:case 59:case 0:switch(E){case 0:case 125:F=0;case 59+v:M==-1&&(U=pe(U,/\f/g,"")),b>0&&Dt(U)-y&&di(b>32?Vd(U+";",l,o,y-1,f):Vd(pe(U," ","")+";",l,o,y-2,f),f);break;case 59:U+=";";default:if(di(A=$d(U,n,o,S,v,u,g,w,z=[],O=[],y,d),d),E===123)if(v===0)Ro(U,n,A,A,z,d,y,g,O);else switch(T===99&&We(U,3)===110?100:T){case 100:case 108:case 109:case 115:Ro(i,A,A,l&&di($d(i,A,A,0,0,u,g,w,u,z=[],y,O),O),u,O,y,g,l?z:O);break;default:Ro(U,A,A,A,[""],O,0,g,O)}}S=v=b=0,N=M=1,w=U="",y=h;break;case 58:y=1+Dt(U),b=I;default:if(N<1){if(E==123)--N;else if(E==125&&N++==0&&dh()==125)continue}switch(U+=Ma(E),E*N){case 38:M=v>0?1:(U+="\f",-1);break;case 44:g[S++]=(Dt(U)-1)*M,M=1;break;case 64:On()===45&&(U+=na(_t())),T=On(),v=y=Dt(w=U+=vh(Do())),E++;break;case 45:I===45&&Dt(U)==2&&(N=0)}}return d}function $d(i,n,o,l,u,d,h,g,f,S,v,y){for(var T=u-1,b=u===0?d:[""],I=mf(b),N=0,F=0,M=0;N<l;++N)for(var E=0,w=pr(i,T+1,T=ff(F=h[N])),z=i;E<I;++E)(z=pf(F>0?b[E]+" "+w:pe(w,/&\f/g,b[E])))&&(f[M++]=z);return Jo(i,n,o,u===0?Ko:g,f,S,v,y)}function yh(i,n,o,l){return Jo(i,n,o,cf,Ma(ch()),pr(i,2,-2),0,l)}function Vd(i,n,o,l,u){return Jo(i,n,o,_a,pr(i,0,l),pr(i,l+1,-1),l,u)}function gf(i,n,o){switch(ah(i,n)){case 5103:return Te+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+i+i;case 4789:return fi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+i+fi+i+_e+i+i;case 5936:switch(We(i,n+11)){case 114:return Te+i+_e+pe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Te+i+_e+pe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Te+i+_e+pe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return Te+i+_e+i+i;case 6165:return Te+i+_e+"flex-"+i+i;case 5187:return Te+i+pe(i,/(\w+).+(:[^]+)/,Te+"box-$1$2"+_e+"flex-$1$2")+i;case 5443:return Te+i+_e+"flex-item-"+pe(i,/flex-|-self/g,"")+(Qt(i,/flex-|baseline/)?"":_e+"grid-row-"+pe(i,/flex-|-self/g,""))+i;case 4675:return Te+i+_e+"flex-line-pack"+pe(i,/align-content|flex-|-self/g,"")+i;case 5548:return Te+i+_e+pe(i,"shrink","negative")+i;case 5292:return Te+i+_e+pe(i,"basis","preferred-size")+i;case 6060:return Te+"box-"+pe(i,"-grow","")+Te+i+_e+pe(i,"grow","positive")+i;case 4554:return Te+pe(i,/([^-])(transform)/g,"$1"+Te+"$2")+i;case 6187:return pe(pe(pe(i,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),i,"")+i;case 5495:case 3959:return pe(i,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return pe(pe(i,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+i+i;case 4200:if(!Qt(i,/flex-|baseline/))return _e+"grid-column-align"+pr(i,n)+i;break;case 2592:case 3360:return _e+pe(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(l,u){return n=u,Qt(l.props,/grid-\w+-end/)})?~Ao(i+(o=o[n].value),"span",0)?i:_e+pe(i,"-start","")+i+_e+"grid-row-span:"+(~Ao(o,"span",0)?Qt(o,/\d+/):+Qt(o,/\d+/)-+Qt(i,/\d+/))+";":_e+pe(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(l){return Qt(l.props,/grid-\w+-start/)})?i:_e+pe(pe(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return pe(i,/(.+)-inline(.+)/,Te+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(i)-1-n>6)switch(We(i,n+1)){case 109:if(We(i,n+4)!==45)break;case 102:return pe(i,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+fi+(We(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~Ao(i,"stretch",0)?gf(pe(i,"stretch","fill-available"),n,o)+i:i}break;case 5152:case 5920:return pe(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,d,h,g,f,S){return _e+u+":"+d+S+(h?_e+u+"-span:"+(g?f:+f-+d)+S:"")+i});case 4949:if(We(i,n+6)===121)return pe(i,":",":"+Te)+i;break;case 6444:switch(We(i,We(i,14)===45?18:11)){case 120:return pe(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(We(i,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+_e+"$2box$3")+i;case 100:return pe(i,":",":"+_e)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(i,"scroll-","scroll-snap-")+i}return i}function Vo(i,n){for(var o="",l=0;l<i.length;l++)o+=n(i[l],l,i,n)||"";return o}function wh(i,n,o,l){switch(i.type){case lh:if(i.children.length)break;case sh:case _a:return i.return=i.return||i.value;case cf:return"";case df:return i.return=i.value+"{"+Vo(i.children,l)+"}";case Ko:if(!Dt(i.value=i.props.join(",")))return""}return Dt(o=Vo(i.children,l))?i.return=i.value+"{"+o+"}":""}function Sh(i){var n=mf(i);return function(o,l,u,d){for(var h="",g=0;g<n;g++)h+=i[g](o,l,u,d)||"";return h}}function kh(i){return function(n){n.root||(n=n.return)&&i(n)}}function Eh(i,n,o,l){if(i.length>-1&&!i.return)switch(i.type){case _a:i.return=gf(i.value,i.length,o);return;case df:return Vo([xn(i,{value:pe(i.value,"@","@"+Te)})],l);case Ko:if(i.length)return uh(o=i.props,function(u){switch(Qt(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(xn(i,{props:[pe(u,/:(read-\w+)/,":"+fi+"$1")]})),cr(xn(i,{props:[u]})),ga(i,{props:Bd(o,l)});break;case"::placeholder":cr(xn(i,{props:[pe(u,/:(plac\w+)/,":"+Te+"input-$1")]})),cr(xn(i,{props:[pe(u,/:(plac\w+)/,":"+fi+"$1")]})),cr(xn(i,{props:[pe(u,/:(plac\w+)/,_e+"input-$1")]})),cr(xn(i,{props:[u]})),ga(i,{props:Bd(o,l)});break}return""})}}var Ch={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft={},hr=typeof process<"u"&&ft!==void 0&&(ft.REACT_APP_SC_ATTR||ft.SC_ATTR)||"data-styled",vf="active",xf="data-styled-version",ts="6.1.13",La=`/*!sc*/
`,Go=typeof window<"u"&&"HTMLElement"in window,Th=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==""?ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.SC_DISABLE_SPEEDY!==void 0&&ft.SC_DISABLE_SPEEDY!==""&&ft.SC_DISABLE_SPEEDY!=="false"&&ft.SC_DISABLE_SPEEDY),ns=Object.freeze([]),gr=Object.freeze({});function bh(i,n,o){return o===void 0&&(o=gr),i.theme!==o.theme&&i.theme||n||o.theme}var yf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ph=/(^-|-$)/g;function Gd(i){return i.replace(jh,"-").replace(Ph,"")}var zh=/(a)(d)/gi,_o=52,Hd=function(i){return String.fromCharCode(i+(i>25?39:97))};function ya(i){var n,o="";for(n=Math.abs(i);n>_o;n=n/_o|0)o=Hd(n%_o)+o;return(Hd(n%_o)+o).replace(zh,"$1-$2")}var ra,wf=5381,dr=function(i,n){for(var o=n.length;o;)i=33*i^n.charCodeAt(--o);return i},Sf=function(i){return dr(wf,i)};function kf(i){return ya(Sf(i)>>>0)}function _h(i){return i.displayName||i.name||"Component"}function ia(i){return typeof i=="string"&&!0}var Ef=typeof Symbol=="function"&&Symbol.for,Cf=Ef?Symbol.for("react.memo"):60115,Mh=Ef?Symbol.for("react.forward_ref"):60112,Lh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ih={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oh=((ra={})[Mh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ra[Cf]=Tf,ra);function Wd(i){return("type"in(n=i)&&n.type.$$typeof)===Cf?Tf:"$$typeof"in i?Oh[i.$$typeof]:Lh;var n}var Nh=Object.defineProperty,Ah=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,Dh=Object.getOwnPropertyDescriptor,Rh=Object.getPrototypeOf,qd=Object.prototype;function bf(i,n,o){if(typeof n!="string"){if(qd){var l=Rh(n);l&&l!==qd&&bf(i,l,o)}var u=Ah(n);Ud&&(u=u.concat(Ud(n)));for(var d=Wd(i),h=Wd(n),g=0;g<u.length;++g){var f=u[g];if(!(f in Ih||o&&o[f]||h&&f in h||d&&f in d)){var S=Dh(n,f);try{Nh(i,f,S)}catch{}}}}return i}function vr(i){return typeof i=="function"}function Ia(i){return typeof i=="object"&&"styledComponentId"in i}function In(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function wa(i,n){if(i.length===0)return"";for(var o=i[0],l=1;l<i.length;l++)o+=i[l];return o}function hi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Sa(i,n,o){if(o===void 0&&(o=!1),!o&&!hi(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var l=0;l<n.length;l++)i[l]=Sa(i[l],n[l]);else if(hi(n))for(var l in n)i[l]=Sa(i[l],n[l]);return i}function Oa(i,n){Object.defineProperty(i,"toString",{value:n})}function gi(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Fh=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var o=0,l=0;l<n;l++)o+=this.groupSizes[l];return o},i.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,d=u;n>=d;)if((d<<=1)<0)throw gi(16,"".concat(n));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var h=u;h<d;h++)this.groupSizes[h]=0}for(var g=this.indexOfGroup(n+1),f=(h=0,o.length);h<f;h++)this.tag.insertRule(g,o[h])&&(this.groupSizes[n]++,g++)},i.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],l=this.indexOfGroup(n),u=l+o;this.groupSizes[n]=0;for(var d=l;d<u;d++)this.tag.deleteRule(l)}},i.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var l=this.groupSizes[n],u=this.indexOfGroup(n),d=u+l,h=u;h<d;h++)o+="".concat(this.tag.getRule(h)).concat(La);return o},i}(),Fo=new Map,Ho=new Map,Bo=1,Mo=function(i){if(Fo.has(i))return Fo.get(i);for(;Ho.has(Bo);)Bo++;var n=Bo++;return Fo.set(i,n),Ho.set(n,i),n},Bh=function(i,n){Bo=n+1,Fo.set(i,n),Ho.set(n,i)},$h="style[".concat(hr,"][").concat(xf,'="').concat(ts,'"]'),Vh=new RegExp("^".concat(hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gh=function(i,n,o){for(var l,u=o.split(","),d=0,h=u.length;d<h;d++)(l=u[d])&&i.registerName(n,l)},Hh=function(i,n){for(var o,l=((o=n.textContent)!==null&&o!==void 0?o:"").split(La),u=[],d=0,h=l.length;d<h;d++){var g=l[d].trim();if(g){var f=g.match(Vh);if(f){var S=0|parseInt(f[1],10),v=f[2];S!==0&&(Bh(v,S),Gh(i,v,f[3]),i.getTag().insertRules(S,u)),u.length=0}else u.push(g)}}},Yd=function(i){for(var n=document.querySelectorAll($h),o=0,l=n.length;o<l;o++){var u=n[o];u&&u.getAttribute(hr)!==vf&&(Hh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function Wh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jf=function(i){var n=document.head,o=i||n,l=document.createElement("style"),u=function(g){var f=Array.from(g.querySelectorAll("style[".concat(hr,"]")));return f[f.length-1]}(o),d=u!==void 0?u.nextSibling:null;l.setAttribute(hr,vf),l.setAttribute(xf,ts);var h=Wh();return h&&l.setAttribute("nonce",h),o.insertBefore(l,d),l},Uh=function(){function i(n){this.element=jf(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,u=0,d=l.length;u<d;u++){var h=l[u];if(h.ownerNode===o)return h}throw gi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},i}(),qh=function(){function i(n){this.element=jf(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var l=document.createTextNode(o);return this.element.insertBefore(l,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),Yh=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),Xd=Go,Xh={isServer:!Go,useCSSOMInjection:!Th},Pf=function(){function i(n,o,l){n===void 0&&(n=gr),o===void 0&&(o={});var u=this;this.options=lt(lt({},Xh),n),this.gs=o,this.names=new Map(l),this.server=!!n.isServer,!this.server&&Go&&Xd&&(Xd=!1,Yd(this)),Oa(this,function(){return function(d){for(var h=d.getTag(),g=h.length,f="",S=function(y){var T=function(M){return Ho.get(M)}(y);if(T===void 0)return"continue";var b=d.names.get(T),I=h.getGroup(y);if(b===void 0||!b.size||I.length===0)return"continue";var N="".concat(hr,".g").concat(y,'[id="').concat(T,'"]'),F="";b!==void 0&&b.forEach(function(M){M.length>0&&(F+="".concat(M,","))}),f+="".concat(I).concat(N,'{content:"').concat(F,'"}').concat(La)},v=0;v<g;v++)S(v);return f}(u)})}return i.registerId=function(n){return Mo(n)},i.prototype.rehydrate=function(){!this.server&&Go&&Yd(this)},i.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new i(lt(lt({},this.options),n),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var l=o.useCSSOMInjection,u=o.target;return o.isServer?new Yh(u):l?new Uh(u):new qh(u)}(this.options),new Fh(n)));var n},i.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},i.prototype.registerName=function(n,o){if(Mo(n),this.names.has(n))this.names.get(n).add(o);else{var l=new Set;l.add(o),this.names.set(n,l)}},i.prototype.insertRules=function(n,o,l){this.registerName(n,o),this.getTag().insertRules(Mo(n),l)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(Mo(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Qh=/&/g,Kh=/^\s*\/\/.*$/gm;function zf(i,n){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(l){return"".concat(n," ").concat(l)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=zf(o.children,n)),o})}function Zh(i){var n,o,l,u=gr,d=u.options,h=d===void 0?gr:d,g=u.plugins,f=g===void 0?ns:g,S=function(T,b,I){return I.startsWith(o)&&I.endsWith(o)&&I.replaceAll(o,"").length>0?".".concat(n):T},v=f.slice();v.push(function(T){T.type===Ko&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(Qh,o).replace(l,S))}),h.prefix&&v.push(Eh),v.push(wh);var y=function(T,b,I,N){b===void 0&&(b=""),I===void 0&&(I=""),N===void 0&&(N="&"),n=N,o=b,l=new RegExp("\\".concat(o,"\\b"),"g");var F=T.replace(Kh,""),M=xh(I||b?"".concat(I," ").concat(b," { ").concat(F," }"):F);h.namespace&&(M=zf(M,h.namespace));var E=[];return Vo(M,Sh(v.concat(kh(function(w){return E.push(w)})))),E};return y.hash=f.length?f.reduce(function(T,b){return b.name||gi(15),dr(T,b.name)},wf).toString():"",y}var Jh=new Pf,ka=Zh(),_f=Ce.createContext({shouldForwardProp:void 0,styleSheet:Jh,stylis:ka});_f.Consumer;Ce.createContext(void 0);function Qd(){return fe.useContext(_f)}var Mf=function(){function i(n,o){var l=this;this.inject=function(u,d){d===void 0&&(d=ka);var h=l.name+d.hash;u.hasNameForId(l.id,h)||u.insertRules(l.id,h,d(l.rules,h,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,Oa(this,function(){throw gi(12,String(l.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=ka),this.name+n.hash},i}(),e0=function(i){return i>="A"&&i<="Z"};function Kd(i){for(var n="",o=0;o<i.length;o++){var l=i[o];if(o===1&&l==="-"&&i[0]==="-")return i;e0(l)?n+="-"+l.toLowerCase():n+=l}return n.startsWith("ms-")?"-"+n:n}var Lf=function(i){return i==null||i===!1||i===""},If=function(i){var n,o,l=[];for(var u in i){var d=i[u];i.hasOwnProperty(u)&&!Lf(d)&&(Array.isArray(d)&&d.isCss||vr(d)?l.push("".concat(Kd(u),":"),d,";"):hi(d)?l.push.apply(l,mi(mi(["".concat(u," {")],If(d),!1),["}"],!1)):l.push("".concat(Kd(u),": ").concat((n=u,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Ch||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return l};function Nn(i,n,o,l){if(Lf(i))return[];if(Ia(i))return[".".concat(i.styledComponentId)];if(vr(i)){if(!vr(d=i)||d.prototype&&d.prototype.isReactComponent||!n)return[i];var u=i(n);return Nn(u,n,o,l)}var d;return i instanceof Mf?o?(i.inject(o,l),[i.getName(l)]):[i]:hi(i)?If(i):Array.isArray(i)?Array.prototype.concat.apply(ns,i.map(function(h){return Nn(h,n,o,l)})):[i.toString()]}function t0(i){for(var n=0;n<i.length;n+=1){var o=i[n];if(vr(o)&&!Ia(o))return!1}return!0}var n0=Sf(ts),r0=function(){function i(n,o,l){this.rules=n,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&t0(n),this.componentId=o,this.baseHash=dr(n0,o),this.baseStyle=l,Pf.registerId(o)}return i.prototype.generateAndInjectStyles=function(n,o,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=In(u,this.staticRulesId);else{var d=wa(Nn(this.rules,n,o,l)),h=ya(dr(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,h)){var g=l(d,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,g)}u=In(u,h),this.staticRulesId=h}else{for(var f=dr(this.baseHash,l.hash),S="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")S+=y;else if(y){var T=wa(Nn(y,n,o,l));f=dr(f,T+v),S+=T}}if(S){var b=ya(f>>>0);o.hasNameForId(this.componentId,b)||o.insertRules(this.componentId,b,l(S,".".concat(b),void 0,this.componentId)),u=In(u,b)}}return u},i}(),Of=Ce.createContext(void 0);Of.Consumer;var oa={};function i0(i,n,o){var l=Ia(i),u=i,d=!ia(i),h=n.attrs,g=h===void 0?ns:h,f=n.componentId,S=f===void 0?function(z,O){var A=typeof z!="string"?"sc":Gd(z);oa[A]=(oa[A]||0)+1;var U="".concat(A,"-").concat(kf(ts+A+oa[A]));return O?"".concat(O,"-").concat(U):U}(n.displayName,n.parentComponentId):f,v=n.displayName,y=v===void 0?function(z){return ia(z)?"styled.".concat(z):"Styled(".concat(_h(z),")")}(i):v,T=n.displayName&&n.componentId?"".concat(Gd(n.displayName),"-").concat(n.componentId):n.componentId||S,b=l&&u.attrs?u.attrs.concat(g).filter(Boolean):g,I=n.shouldForwardProp;if(l&&u.shouldForwardProp){var N=u.shouldForwardProp;if(n.shouldForwardProp){var F=n.shouldForwardProp;I=function(z,O){return N(z,O)&&F(z,O)}}else I=N}var M=new r0(o,T,l?u.componentStyle:void 0);function E(z,O){return function(A,U,K){var V=A.attrs,G=A.componentStyle,Z=A.defaultProps,te=A.foldedComponentIds,X=A.styledComponentId,oe=A.target,ae=Ce.useContext(Of),ve=Qd(),we=A.shouldForwardProp||ve.shouldForwardProp,R=bh(U,ae,Z)||gr,Y=function(ge,me,Ee){for(var xe,Se=lt(lt({},me),{className:void 0,theme:Ee}),Ue=0;Ue<ge.length;Ue+=1){var Ft=vr(xe=ge[Ue])?xe(Se):xe;for(var kt in Ft)Se[kt]=kt==="className"?In(Se[kt],Ft[kt]):kt==="style"?lt(lt({},Se[kt]),Ft[kt]):Ft[kt]}return me.className&&(Se.className=In(Se.className,me.className)),Se}(V,U,R),W=Y.as||oe,j={};for(var D in Y)Y[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&Y.theme===R||(D==="forwardedAs"?j.as=Y.forwardedAs:we&&!we(D,W)||(j[D]=Y[D]));var ce=function(ge,me){var Ee=Qd(),xe=ge.generateAndInjectStyles(me,Ee.styleSheet,Ee.stylis);return xe}(G,Y),de=In(te,X);return ce&&(de+=" "+ce),Y.className&&(de+=" "+Y.className),j[ia(W)&&!yf.has(W)?"class":"className"]=de,j.ref=K,fe.createElement(W,j)}(w,z,O)}E.displayName=y;var w=Ce.forwardRef(E);return w.attrs=b,w.componentStyle=M,w.displayName=y,w.shouldForwardProp=I,w.foldedComponentIds=l?In(u.foldedComponentIds,u.styledComponentId):"",w.styledComponentId=T,w.target=l?u.target:i,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=l?function(O){for(var A=[],U=1;U<arguments.length;U++)A[U-1]=arguments[U];for(var K=0,V=A;K<V.length;K++)Sa(O,V[K],!0);return O}({},u.defaultProps,z):z}}),Oa(w,function(){return".".concat(w.styledComponentId)}),d&&bf(w,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Zd(i,n){for(var o=[i[0]],l=0,u=n.length;l<u;l+=1)o.push(n[l],i[l+1]);return o}var Jd=function(i){return Object.assign(i,{isCss:!0})};function Nf(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(vr(i)||hi(i))return Jd(Nn(Zd(ns,mi([i],n,!0))));var l=i;return n.length===0&&l.length===1&&typeof l[0]=="string"?Nn(l):Jd(Nn(Zd(l,n)))}function Ea(i,n,o){if(o===void 0&&(o=gr),!n)throw gi(1,n);var l=function(u){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return i(n,o,Nf.apply(void 0,mi([u],d,!1)))};return l.attrs=function(u){return Ea(i,n,lt(lt({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return Ea(i,n,lt(lt({},o),u))},l}var Af=function(i){return Ea(i0,i)},Q=Af;yf.forEach(function(i){Q[i]=Af(i)});function Na(i){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var l=wa(Nf.apply(void 0,mi([i],n,!1))),u=kf(l);return new Mf(u,l)}const o0=Q.header`
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
`,s0=Q.div`
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
`;function l0(){const[i,n]=fe.useState(!1),o=fe.useRef(null);return fe.useEffect(()=>{const l=()=>{n(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n(!1)},1e3)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),o.current&&clearTimeout(o.current)}},[]),m.jsx(o0,{scrolling:i,children:m.jsx(s0,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png",alt:"logo"})})})})}const a0=Q.button`
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
    
`,Rn=()=>m.jsx(m.Fragment,{children:m.jsxs(a0,{id:"click-button",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"})]})}),u0=Q.button`
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
    
`,c0=()=>m.jsx(m.Fragment,{children:m.jsx(u0,{id:"click-button",children:m.jsx("b",{children:"Saber mais"})})}),d0=Q.div`
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
`,f0=Q.section`
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
`,p0=Q.div`
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
`,m0=Q.div`
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
`,h0=Q.div`
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
`,g0=()=>m.jsxs(m.Fragment,{children:[m.jsx(d0,{}),m.jsxs(f0,{children:[m.jsxs(p0,{children:[m.jsxs("h1",{children:["Já imaginou ter um ",m.jsx("b",{children:"site de altíssimo"})," padrão?"]}),m.jsx("p",{children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),m.jsxs("div",{children:[m.jsx(Rn,{}),m.jsx(c0,{})]}),m.jsx("span",{children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),m.jsxs(h0,{children:[m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsxs("article",{children:[m.jsx("span",{children:"4.9"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"})]})]})]}),m.jsx(m0,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png"})})]})]});var Df={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ef=Ce.createContext&&Ce.createContext(Df),v0=["attr","size","title"];function x0(i,n){if(i==null)return{};var o=y0(i,n),l,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);for(u=0;u<d.length;u++)l=d[u],!(n.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(o[l]=i[l])}return o}function y0(i,n){if(i==null)return{};var o={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){if(n.indexOf(l)>=0)continue;o[l]=i[l]}return o}function Wo(){return Wo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},Wo.apply(this,arguments)}function tf(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,l)}return o}function Uo(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?tf(Object(o),!0).forEach(function(l){w0(i,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):tf(Object(o)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(o,l))})}return i}function w0(i,n,o){return n=S0(n),n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function S0(i){var n=k0(i,"string");return typeof n=="symbol"?n:n+""}function k0(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var l=o.call(i,n||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function Rf(i){return i&&i.map((n,o)=>Ce.createElement(n.tag,Uo({key:o},n.attr),Rf(n.child)))}function Mt(i){return n=>Ce.createElement(E0,Wo({attr:Uo({},i.attr)},n),Rf(i.child))}function E0(i){var n=o=>{var{attr:l,size:u,title:d}=i,h=x0(i,v0),g=u||o.size||"1em",f;return o.className&&(f=o.className),i.className&&(f=(f?f+" ":"")+i.className),Ce.createElement("svg",Wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,h,{className:f,style:Uo(Uo({color:i.color||o.color},o.style),i.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&Ce.createElement("title",null,d),i.children)};return ef!==void 0?Ce.createElement(ef.Consumer,null,o=>n(o)):n(Df)}function Ff(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(i)}function C0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(i)}function T0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(i)}function Lo(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(i)}function b0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"},child:[]},{tag:"path",attr:{d:"M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"},child:[]}]})(i)}function j0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},child:[]},{tag:"path",attr:{d:"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"},child:[]}]})(i)}function P0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(i)}function z0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(i)}function _0(i){return Mt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"},child:[]},{tag:"path",attr:{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"},child:[]}]})(i)}const M0=Q.div`
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

`,si=({title:i,description:n})=>m.jsxs(M0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Rn,{})]}),L0=Q.div`
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

`,li=({title:i,description:n})=>m.jsxs(L0,{children:[m.jsx("h1",{children:i}),m.jsx("p",{children:n}),m.jsx(Rn,{})]});function nf(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Aa(i,n){i===void 0&&(i={}),n===void 0&&(n={}),Object.keys(n).forEach(o=>{typeof i[o]>"u"?i[o]=n[o]:nf(n[o])&&nf(i[o])&&Object.keys(n[o]).length>0&&Aa(i[o],n[o])})}const Bf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Kt(){const i=typeof document<"u"?document:{};return Aa(i,Bf),i}const I0={document:Bf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function mt(){const i=typeof window<"u"?window:{};return Aa(i,I0),i}function O0(i){return i===void 0&&(i=""),i.trim().split(" ").filter(n=>!!n.trim())}function N0(i){const n=i;Object.keys(n).forEach(o=>{try{n[o]=null}catch{}try{delete n[o]}catch{}})}function Ca(i,n){return n===void 0&&(n=0),setTimeout(i,n)}function An(){return Date.now()}function A0(i){const n=mt();let o;return n.getComputedStyle&&(o=n.getComputedStyle(i,null)),!o&&i.currentStyle&&(o=i.currentStyle),o||(o=i.style),o}function D0(i,n){n===void 0&&(n="x");const o=mt();let l,u,d;const h=A0(i);return o.WebKitCSSMatrix?(u=h.transform||h.webkitTransform,u.split(",").length>6&&(u=u.split(", ").map(g=>g.replace(",",".")).join(", ")),d=new o.WebKitCSSMatrix(u==="none"?"":u)):(d=h.MozTransform||h.OTransform||h.MsTransform||h.msTransform||h.transform||h.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),l=d.toString().split(",")),n==="x"&&(o.WebKitCSSMatrix?u=d.m41:l.length===16?u=parseFloat(l[12]):u=parseFloat(l[4])),n==="y"&&(o.WebKitCSSMatrix?u=d.m42:l.length===16?u=parseFloat(l[13]):u=parseFloat(l[5])),u||0}function Io(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function R0(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function pt(){const i=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let o=1;o<arguments.length;o+=1){const l=o<0||arguments.length<=o?void 0:arguments[o];if(l!=null&&!R0(l)){const u=Object.keys(Object(l)).filter(d=>n.indexOf(d)<0);for(let d=0,h=u.length;d<h;d+=1){const g=u[d],f=Object.getOwnPropertyDescriptor(l,g);f!==void 0&&f.enumerable&&(Io(i[g])&&Io(l[g])?l[g].__swiper__?i[g]=l[g]:pt(i[g],l[g]):!Io(i[g])&&Io(l[g])?(i[g]={},l[g].__swiper__?i[g]=l[g]:pt(i[g],l[g])):i[g]=l[g])}}}return i}function Oo(i,n,o){i.style.setProperty(n,o)}function $f(i){let{swiper:n,targetPosition:o,side:l}=i;const u=mt(),d=-n.translate;let h=null,g;const f=n.params.speed;n.wrapperEl.style.scrollSnapType="none",u.cancelAnimationFrame(n.cssModeFrameID);const S=o>d?"next":"prev",v=(T,b)=>S==="next"&&T>=b||S==="prev"&&T<=b,y=()=>{g=new Date().getTime(),h===null&&(h=g);const T=Math.max(Math.min((g-h)/f,1),0),b=.5-Math.cos(T*Math.PI)/2;let I=d+b*(o-d);if(v(I,o)&&(I=o),n.wrapperEl.scrollTo({[l]:I}),v(I,o)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[l]:I})}),u.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=u.requestAnimationFrame(y)};y()}function Rt(i,n){n===void 0&&(n="");const o=[...i.children];return i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),n?o.filter(l=>l.matches(n)):o}function F0(i,n){const o=n.contains(i);return!o&&n instanceof HTMLSlotElement?[...n.assignedElements()].includes(i):o}function qo(i){try{console.warn(i);return}catch{}}function Yo(i,n){n===void 0&&(n=[]);const o=document.createElement(i);return o.classList.add(...Array.isArray(n)?n:O0(n)),o}function B0(i,n){const o=[];for(;i.previousElementSibling;){const l=i.previousElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function $0(i,n){const o=[];for(;i.nextElementSibling;){const l=i.nextElementSibling;n?l.matches(n)&&o.push(l):o.push(l),i=l}return o}function yn(i,n){return mt().getComputedStyle(i,null).getPropertyValue(n)}function Xo(i){let n=i,o;if(n){for(o=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(o+=1);return o}}function Vf(i,n){const o=[];let l=i.parentElement;for(;l;)n?l.matches(n)&&o.push(l):o.push(l),l=l.parentElement;return o}function sa(i,n){function o(l){l.target===i&&(n.call(i,l),i.removeEventListener("transitionend",o))}n&&i.addEventListener("transitionend",o)}function Ta(i,n,o){const l=mt();return i[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(l.getComputedStyle(i,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom"))}function Yt(i){return(Array.isArray(i)?i:[i]).filter(n=>!!n)}let la;function V0(){const i=mt(),n=Kt();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&n instanceof i.DocumentTouch)}}function Gf(){return la||(la=V0()),la}let aa;function G0(i){let{userAgent:n}=i===void 0?{}:i;const o=Gf(),l=mt(),u=l.navigator.platform,d=n||l.navigator.userAgent,h={ios:!1,android:!1},g=l.screen.width,f=l.screen.height,S=d.match(/(Android);?[\s\/]+([\d.]+)?/);let v=d.match(/(iPad).*OS\s([\d_]+)/);const y=d.match(/(iPod)(.*OS\s([\d_]+))?/),T=!v&&d.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=u==="Win32";let I=u==="MacIntel";const N=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!v&&I&&o.touch&&N.indexOf(`${g}x${f}`)>=0&&(v=d.match(/(Version)\/([\d.]+)/),v||(v=[0,1,"13_0_0"]),I=!1),S&&!b&&(h.os="android",h.android=!0),(v||T||y)&&(h.os="ios",h.ios=!0),h}function Hf(i){return i===void 0&&(i={}),aa||(aa=G0(i)),aa}let ua;function H0(){const i=mt(),n=Hf();let o=!1;function l(){const g=i.navigator.userAgent.toLowerCase();return g.indexOf("safari")>=0&&g.indexOf("chrome")<0&&g.indexOf("android")<0}if(l()){const g=String(i.navigator.userAgent);if(g.includes("Version/")){const[f,S]=g.split("Version/")[1].split(" ")[0].split(".").map(v=>Number(v));o=f<16||f===16&&S<2}}const u=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),d=l(),h=d||u&&n.ios;return{isSafari:o||d,needPerspectiveFix:o,need3dFix:h,isWebView:u}}function W0(){return ua||(ua=H0()),ua}function U0(i){let{swiper:n,on:o,emit:l}=i;const u=mt();let d=null,h=null;const g=()=>{!n||n.destroyed||!n.initialized||(l("beforeResize"),l("resize"))},f=()=>{!n||n.destroyed||!n.initialized||(d=new ResizeObserver(y=>{h=u.requestAnimationFrame(()=>{const{width:T,height:b}=n;let I=T,N=b;y.forEach(F=>{let{contentBoxSize:M,contentRect:E,target:w}=F;w&&w!==n.el||(I=E?E.width:(M[0]||M).inlineSize,N=E?E.height:(M[0]||M).blockSize)}),(I!==T||N!==b)&&g()})}),d.observe(n.el))},S=()=>{h&&u.cancelAnimationFrame(h),d&&d.unobserve&&n.el&&(d.unobserve(n.el),d=null)},v=()=>{!n||n.destroyed||!n.initialized||l("orientationchange")};o("init",()=>{if(n.params.resizeObserver&&typeof u.ResizeObserver<"u"){f();return}u.addEventListener("resize",g),u.addEventListener("orientationchange",v)}),o("destroy",()=>{S(),u.removeEventListener("resize",g),u.removeEventListener("orientationchange",v)})}function q0(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const d=[],h=mt(),g=function(v,y){y===void 0&&(y={});const T=h.MutationObserver||h.WebkitMutationObserver,b=new T(I=>{if(n.__preventObserver__)return;if(I.length===1){u("observerUpdate",I[0]);return}const N=function(){u("observerUpdate",I[0])};h.requestAnimationFrame?h.requestAnimationFrame(N):h.setTimeout(N,0)});b.observe(v,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:n.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),d.push(b)},f=()=>{if(n.params.observer){if(n.params.observeParents){const v=Vf(n.hostEl);for(let y=0;y<v.length;y+=1)g(v[y])}g(n.hostEl,{childList:n.params.observeSlideChildren}),g(n.wrapperEl,{attributes:!1})}},S=()=>{d.forEach(v=>{v.disconnect()}),d.splice(0,d.length)};o({observer:!1,observeParents:!1,observeSlideChildren:!1}),l("init",f),l("destroy",S)}var Y0={on(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;const u=o?"unshift":"push";return i.split(" ").forEach(d=>{l.eventsListeners[d]||(l.eventsListeners[d]=[]),l.eventsListeners[d][u](n)}),l},once(i,n,o){const l=this;if(!l.eventsListeners||l.destroyed||typeof n!="function")return l;function u(){l.off(i,u),u.__emitterProxy&&delete u.__emitterProxy;for(var d=arguments.length,h=new Array(d),g=0;g<d;g++)h[g]=arguments[g];n.apply(l,h)}return u.__emitterProxy=n,l.on(i,u,o)},onAny(i,n){const o=this;if(!o.eventsListeners||o.destroyed||typeof i!="function")return o;const l=n?"unshift":"push";return o.eventsAnyListeners.indexOf(i)<0&&o.eventsAnyListeners[l](i),o},offAny(i){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;const o=n.eventsAnyListeners.indexOf(i);return o>=0&&n.eventsAnyListeners.splice(o,1),n},off(i,n){const o=this;return!o.eventsListeners||o.destroyed||!o.eventsListeners||i.split(" ").forEach(l=>{typeof n>"u"?o.eventsListeners[l]=[]:o.eventsListeners[l]&&o.eventsListeners[l].forEach((u,d)=>{(u===n||u.__emitterProxy&&u.__emitterProxy===n)&&o.eventsListeners[l].splice(d,1)})}),o},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let n,o,l;for(var u=arguments.length,d=new Array(u),h=0;h<u;h++)d[h]=arguments[h];return typeof d[0]=="string"||Array.isArray(d[0])?(n=d[0],o=d.slice(1,d.length),l=i):(n=d[0].events,o=d[0].data,l=d[0].context||i),o.unshift(l),(Array.isArray(n)?n:n.split(" ")).forEach(f=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(S=>{S.apply(l,[f,...o])}),i.eventsListeners&&i.eventsListeners[f]&&i.eventsListeners[f].forEach(S=>{S.apply(l,o)})}),i}};function X0(){const i=this;let n,o;const l=i.el;typeof i.params.width<"u"&&i.params.width!==null?n=i.params.width:n=l.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?o=i.params.height:o=l.clientHeight,!(n===0&&i.isHorizontal()||o===0&&i.isVertical())&&(n=n-parseInt(yn(l,"padding-left")||0,10)-parseInt(yn(l,"padding-right")||0,10),o=o-parseInt(yn(l,"padding-top")||0,10)-parseInt(yn(l,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(o)&&(o=0),Object.assign(i,{width:n,height:o,size:i.isHorizontal()?n:o}))}function Q0(){const i=this;function n(G,Z){return parseFloat(G.getPropertyValue(i.getDirectionLabel(Z))||0)}const o=i.params,{wrapperEl:l,slidesEl:u,size:d,rtlTranslate:h,wrongRTL:g}=i,f=i.virtual&&o.virtual.enabled,S=f?i.virtual.slides.length:i.slides.length,v=Rt(u,`.${i.params.slideClass}, swiper-slide`),y=f?i.virtual.slides.length:v.length;let T=[];const b=[],I=[];let N=o.slidesOffsetBefore;typeof N=="function"&&(N=o.slidesOffsetBefore.call(i));let F=o.slidesOffsetAfter;typeof F=="function"&&(F=o.slidesOffsetAfter.call(i));const M=i.snapGrid.length,E=i.slidesGrid.length;let w=o.spaceBetween,z=-N,O=0,A=0;if(typeof d>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*d:typeof w=="string"&&(w=parseFloat(w)),i.virtualSize=-w,v.forEach(G=>{h?G.style.marginLeft="":G.style.marginRight="",G.style.marginBottom="",G.style.marginTop=""}),o.centeredSlides&&o.cssMode&&(Oo(l,"--swiper-centered-offset-before",""),Oo(l,"--swiper-centered-offset-after",""));const U=o.grid&&o.grid.rows>1&&i.grid;U?i.grid.initSlides(v):i.grid&&i.grid.unsetSlides();let K;const V=o.slidesPerView==="auto"&&o.breakpoints&&Object.keys(o.breakpoints).filter(G=>typeof o.breakpoints[G].slidesPerView<"u").length>0;for(let G=0;G<y;G+=1){K=0;let Z;if(v[G]&&(Z=v[G]),U&&i.grid.updateSlide(G,Z,v),!(v[G]&&yn(Z,"display")==="none")){if(o.slidesPerView==="auto"){V&&(v[G].style[i.getDirectionLabel("width")]="");const te=getComputedStyle(Z),X=Z.style.transform,oe=Z.style.webkitTransform;if(X&&(Z.style.transform="none"),oe&&(Z.style.webkitTransform="none"),o.roundLengths)K=i.isHorizontal()?Ta(Z,"width"):Ta(Z,"height");else{const ae=n(te,"width"),ve=n(te,"padding-left"),we=n(te,"padding-right"),R=n(te,"margin-left"),Y=n(te,"margin-right"),W=te.getPropertyValue("box-sizing");if(W&&W==="border-box")K=ae+R+Y;else{const{clientWidth:j,offsetWidth:D}=Z;K=ae+ve+we+R+Y+(D-j)}}X&&(Z.style.transform=X),oe&&(Z.style.webkitTransform=oe),o.roundLengths&&(K=Math.floor(K))}else K=(d-(o.slidesPerView-1)*w)/o.slidesPerView,o.roundLengths&&(K=Math.floor(K)),v[G]&&(v[G].style[i.getDirectionLabel("width")]=`${K}px`);v[G]&&(v[G].swiperSlideSize=K),I.push(K),o.centeredSlides?(z=z+K/2+O/2+w,O===0&&G!==0&&(z=z-d/2-w),G===0&&(z=z-d/2-w),Math.abs(z)<1/1e3&&(z=0),o.roundLengths&&(z=Math.floor(z)),A%o.slidesPerGroup===0&&T.push(z),b.push(z)):(o.roundLengths&&(z=Math.floor(z)),(A-Math.min(i.params.slidesPerGroupSkip,A))%i.params.slidesPerGroup===0&&T.push(z),b.push(z),z=z+K+w),i.virtualSize+=K+w,O=K,A+=1}}if(i.virtualSize=Math.max(i.virtualSize,d)+F,h&&g&&(o.effect==="slide"||o.effect==="coverflow")&&(l.style.width=`${i.virtualSize+w}px`),o.setWrapperSize&&(l.style[i.getDirectionLabel("width")]=`${i.virtualSize+w}px`),U&&i.grid.updateWrapperSize(K,T),!o.centeredSlides){const G=[];for(let Z=0;Z<T.length;Z+=1){let te=T[Z];o.roundLengths&&(te=Math.floor(te)),T[Z]<=i.virtualSize-d&&G.push(te)}T=G,Math.floor(i.virtualSize-d)-Math.floor(T[T.length-1])>1&&T.push(i.virtualSize-d)}if(f&&o.loop){const G=I[0]+w;if(o.slidesPerGroup>1){const Z=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/o.slidesPerGroup),te=G*o.slidesPerGroup;for(let X=0;X<Z;X+=1)T.push(T[T.length-1]+te)}for(let Z=0;Z<i.virtual.slidesBefore+i.virtual.slidesAfter;Z+=1)o.slidesPerGroup===1&&T.push(T[T.length-1]+G),b.push(b[b.length-1]+G),i.virtualSize+=G}if(T.length===0&&(T=[0]),w!==0){const G=i.isHorizontal()&&h?"marginLeft":i.getDirectionLabel("marginRight");v.filter((Z,te)=>!o.cssMode||o.loop?!0:te!==v.length-1).forEach(Z=>{Z.style[G]=`${w}px`})}if(o.centeredSlides&&o.centeredSlidesBounds){let G=0;I.forEach(te=>{G+=te+(w||0)}),G-=w;const Z=G>d?G-d:0;T=T.map(te=>te<=0?-N:te>Z?Z+F:te)}if(o.centerInsufficientSlides){let G=0;I.forEach(te=>{G+=te+(w||0)}),G-=w;const Z=(o.slidesOffsetBefore||0)+(o.slidesOffsetAfter||0);if(G+Z<d){const te=(d-G-Z)/2;T.forEach((X,oe)=>{T[oe]=X-te}),b.forEach((X,oe)=>{b[oe]=X+te})}}if(Object.assign(i,{slides:v,snapGrid:T,slidesGrid:b,slidesSizesGrid:I}),o.centeredSlides&&o.cssMode&&!o.centeredSlidesBounds){Oo(l,"--swiper-centered-offset-before",`${-T[0]}px`),Oo(l,"--swiper-centered-offset-after",`${i.size/2-I[I.length-1]/2}px`);const G=-i.snapGrid[0],Z=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(te=>te+G),i.slidesGrid=i.slidesGrid.map(te=>te+Z)}if(y!==S&&i.emit("slidesLengthChange"),T.length!==M&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),b.length!==E&&i.emit("slidesGridLengthChange"),o.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!f&&!o.cssMode&&(o.effect==="slide"||o.effect==="fade")){const G=`${o.containerModifierClass}backface-hidden`,Z=i.el.classList.contains(G);y<=o.maxBackfaceHiddenSlides?Z||i.el.classList.add(G):Z&&i.el.classList.remove(G)}}function K0(i){const n=this,o=[],l=n.virtual&&n.params.virtual.enabled;let u=0,d;typeof i=="number"?n.setTransition(i):i===!0&&n.setTransition(n.params.speed);const h=g=>l?n.slides[n.getSlideIndexByData(g)]:n.slides[g];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(g=>{o.push(g)});else for(d=0;d<Math.ceil(n.params.slidesPerView);d+=1){const g=n.activeIndex+d;if(g>n.slides.length&&!l)break;o.push(h(g))}else o.push(h(n.activeIndex));for(d=0;d<o.length;d+=1)if(typeof o[d]<"u"){const g=o[d].offsetHeight;u=g>u?g:u}(u||u===0)&&(n.wrapperEl.style.height=`${u}px`)}function Z0(){const i=this,n=i.slides,o=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let l=0;l<n.length;l+=1)n[l].swiperSlideOffset=(i.isHorizontal()?n[l].offsetLeft:n[l].offsetTop)-o-i.cssOverflowAdjustment()}const rf=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function J0(i){i===void 0&&(i=this&&this.translate||0);const n=this,o=n.params,{slides:l,rtlTranslate:u,snapGrid:d}=n;if(l.length===0)return;typeof l[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let h=-i;u&&(h=i),n.visibleSlidesIndexes=[],n.visibleSlides=[];let g=o.spaceBetween;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n.size:typeof g=="string"&&(g=parseFloat(g));for(let f=0;f<l.length;f+=1){const S=l[f];let v=S.swiperSlideOffset;o.cssMode&&o.centeredSlides&&(v-=l[0].swiperSlideOffset);const y=(h+(o.centeredSlides?n.minTranslate():0)-v)/(S.swiperSlideSize+g),T=(h-d[0]+(o.centeredSlides?n.minTranslate():0)-v)/(S.swiperSlideSize+g),b=-(h-v),I=b+n.slidesSizesGrid[f],N=b>=0&&b<=n.size-n.slidesSizesGrid[f],F=b>=0&&b<n.size-1||I>1&&I<=n.size||b<=0&&I>=n.size;F&&(n.visibleSlides.push(S),n.visibleSlidesIndexes.push(f)),rf(S,F,o.slideVisibleClass),rf(S,N,o.slideFullyVisibleClass),S.progress=u?-y:y,S.originalProgress=u?-T:T}}function eg(i){const n=this;if(typeof i>"u"){const v=n.rtlTranslate?-1:1;i=n&&n.translate&&n.translate*v||0}const o=n.params,l=n.maxTranslate()-n.minTranslate();let{progress:u,isBeginning:d,isEnd:h,progressLoop:g}=n;const f=d,S=h;if(l===0)u=0,d=!0,h=!0;else{u=(i-n.minTranslate())/l;const v=Math.abs(i-n.minTranslate())<1,y=Math.abs(i-n.maxTranslate())<1;d=v||u<=0,h=y||u>=1,v&&(u=0),y&&(u=1)}if(o.loop){const v=n.getSlideIndexByData(0),y=n.getSlideIndexByData(n.slides.length-1),T=n.slidesGrid[v],b=n.slidesGrid[y],I=n.slidesGrid[n.slidesGrid.length-1],N=Math.abs(i);N>=T?g=(N-T)/I:g=(N+I-b)/I,g>1&&(g-=1)}Object.assign(n,{progress:u,progressLoop:g,isBeginning:d,isEnd:h}),(o.watchSlidesProgress||o.centeredSlides&&o.autoHeight)&&n.updateSlidesProgress(i),d&&!f&&n.emit("reachBeginning toEdge"),h&&!S&&n.emit("reachEnd toEdge"),(f&&!d||S&&!h)&&n.emit("fromEdge"),n.emit("progress",u)}const ca=(i,n,o)=>{n&&!i.classList.contains(o)?i.classList.add(o):!n&&i.classList.contains(o)&&i.classList.remove(o)};function tg(){const i=this,{slides:n,params:o,slidesEl:l,activeIndex:u}=i,d=i.virtual&&o.virtual.enabled,h=i.grid&&o.grid&&o.grid.rows>1,g=y=>Rt(l,`.${o.slideClass}${y}, swiper-slide${y}`)[0];let f,S,v;if(d)if(o.loop){let y=u-i.virtual.slidesBefore;y<0&&(y=i.virtual.slides.length+y),y>=i.virtual.slides.length&&(y-=i.virtual.slides.length),f=g(`[data-swiper-slide-index="${y}"]`)}else f=g(`[data-swiper-slide-index="${u}"]`);else h?(f=n.filter(y=>y.column===u)[0],v=n.filter(y=>y.column===u+1)[0],S=n.filter(y=>y.column===u-1)[0]):f=n[u];f&&(h||(v=$0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!v&&(v=n[0]),S=B0(f,`.${o.slideClass}, swiper-slide`)[0],o.loop&&!S===0&&(S=n[n.length-1]))),n.forEach(y=>{ca(y,y===f,o.slideActiveClass),ca(y,y===v,o.slideNextClass),ca(y,y===S,o.slidePrevClass)}),i.emitSlidesClasses()}const $o=(i,n)=>{if(!i||i.destroyed||!i.params)return;const o=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,l=n.closest(o());if(l){let u=l.querySelector(`.${i.params.lazyPreloaderClass}`);!u&&i.isElement&&(l.shadowRoot?u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{l.shadowRoot&&(u=l.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),u&&u.remove())})),u&&u.remove()}},da=(i,n)=>{if(!i.slides[n])return;const o=i.slides[n].querySelector('[loading="lazy"]');o&&o.removeAttribute("loading")},ba=i=>{if(!i||i.destroyed||!i.params)return;let n=i.params.lazyPreloadPrevNext;const o=i.slides.length;if(!o||!n||n<0)return;n=Math.min(n,o);const l=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),u=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const h=u,g=[h-n];g.push(...Array.from({length:n}).map((f,S)=>h+l+S)),i.slides.forEach((f,S)=>{g.includes(f.column)&&da(i,S)});return}const d=u+l-1;if(i.params.rewind||i.params.loop)for(let h=u-n;h<=d+n;h+=1){const g=(h%o+o)%o;(g<u||g>d)&&da(i,g)}else for(let h=Math.max(u-n,0);h<=Math.min(d+n,o-1);h+=1)h!==u&&(h>d||h<u)&&da(i,h)};function ng(i){const{slidesGrid:n,params:o}=i,l=i.rtlTranslate?i.translate:-i.translate;let u;for(let d=0;d<n.length;d+=1)typeof n[d+1]<"u"?l>=n[d]&&l<n[d+1]-(n[d+1]-n[d])/2?u=d:l>=n[d]&&l<n[d+1]&&(u=d+1):l>=n[d]&&(u=d);return o.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0),u}function rg(i){const n=this,o=n.rtlTranslate?n.translate:-n.translate,{snapGrid:l,params:u,activeIndex:d,realIndex:h,snapIndex:g}=n;let f=i,S;const v=b=>{let I=b-n.virtual.slidesBefore;return I<0&&(I=n.virtual.slides.length+I),I>=n.virtual.slides.length&&(I-=n.virtual.slides.length),I};if(typeof f>"u"&&(f=ng(n)),l.indexOf(o)>=0)S=l.indexOf(o);else{const b=Math.min(u.slidesPerGroupSkip,f);S=b+Math.floor((f-b)/u.slidesPerGroup)}if(S>=l.length&&(S=l.length-1),f===d&&!n.params.loop){S!==g&&(n.snapIndex=S,n.emit("snapIndexChange"));return}if(f===d&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=v(f);return}const y=n.grid&&u.grid&&u.grid.rows>1;let T;if(n.virtual&&u.virtual.enabled&&u.loop)T=v(f);else if(y){const b=n.slides.filter(N=>N.column===f)[0];let I=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(I)&&(I=Math.max(n.slides.indexOf(b),0)),T=Math.floor(I/u.grid.rows)}else if(n.slides[f]){const b=n.slides[f].getAttribute("data-swiper-slide-index");b?T=parseInt(b,10):T=f}else T=f;Object.assign(n,{previousSnapIndex:g,snapIndex:S,previousRealIndex:h,realIndex:T,previousIndex:d,activeIndex:f}),n.initialized&&ba(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(h!==T&&n.emit("realIndexChange"),n.emit("slideChange"))}function ig(i,n){const o=this,l=o.params;let u=i.closest(`.${l.slideClass}, swiper-slide`);!u&&o.isElement&&n&&n.length>1&&n.includes(i)&&[...n.slice(n.indexOf(i)+1,n.length)].forEach(g=>{!u&&g.matches&&g.matches(`.${l.slideClass}, swiper-slide`)&&(u=g)});let d=!1,h;if(u){for(let g=0;g<o.slides.length;g+=1)if(o.slides[g]===u){d=!0,h=g;break}}if(u&&d)o.clickedSlide=u,o.virtual&&o.params.virtual.enabled?o.clickedIndex=parseInt(u.getAttribute("data-swiper-slide-index"),10):o.clickedIndex=h;else{o.clickedSlide=void 0,o.clickedIndex=void 0;return}l.slideToClickedSlide&&o.clickedIndex!==void 0&&o.clickedIndex!==o.activeIndex&&o.slideToClickedSlide()}var og={updateSize:X0,updateSlides:Q0,updateAutoHeight:K0,updateSlidesOffset:Z0,updateSlidesProgress:J0,updateProgress:eg,updateSlidesClasses:tg,updateActiveIndex:rg,updateClickedSlide:ig};function sg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const n=this,{params:o,rtlTranslate:l,translate:u,wrapperEl:d}=n;if(o.virtualTranslate)return l?-u:u;if(o.cssMode)return u;let h=D0(d,i);return h+=n.cssOverflowAdjustment(),l&&(h=-h),h||0}function lg(i,n){const o=this,{rtlTranslate:l,params:u,wrapperEl:d,progress:h}=o;let g=0,f=0;const S=0;o.isHorizontal()?g=l?-i:i:f=i,u.roundLengths&&(g=Math.floor(g),f=Math.floor(f)),o.previousTranslate=o.translate,o.translate=o.isHorizontal()?g:f,u.cssMode?d[o.isHorizontal()?"scrollLeft":"scrollTop"]=o.isHorizontal()?-g:-f:u.virtualTranslate||(o.isHorizontal()?g-=o.cssOverflowAdjustment():f-=o.cssOverflowAdjustment(),d.style.transform=`translate3d(${g}px, ${f}px, ${S}px)`);let v;const y=o.maxTranslate()-o.minTranslate();y===0?v=0:v=(i-o.minTranslate())/y,v!==h&&o.updateProgress(i),o.emit("setTranslate",o.translate,n)}function ag(){return-this.snapGrid[0]}function ug(){return-this.snapGrid[this.snapGrid.length-1]}function cg(i,n,o,l,u){i===void 0&&(i=0),n===void 0&&(n=this.params.speed),o===void 0&&(o=!0),l===void 0&&(l=!0);const d=this,{params:h,wrapperEl:g}=d;if(d.animating&&h.preventInteractionOnTransition)return!1;const f=d.minTranslate(),S=d.maxTranslate();let v;if(l&&i>f?v=f:l&&i<S?v=S:v=i,d.updateProgress(v),h.cssMode){const y=d.isHorizontal();if(n===0)g[y?"scrollLeft":"scrollTop"]=-v;else{if(!d.support.smoothScroll)return $f({swiper:d,targetPosition:-v,side:y?"left":"top"}),!0;g.scrollTo({[y?"left":"top"]:-v,behavior:"smooth"})}return!0}return n===0?(d.setTransition(0),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionEnd"))):(d.setTransition(n),d.setTranslate(v),o&&(d.emit("beforeTransitionStart",n,u),d.emit("transitionStart")),d.animating||(d.animating=!0,d.onTranslateToWrapperTransitionEnd||(d.onTranslateToWrapperTransitionEnd=function(T){!d||d.destroyed||T.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onTranslateToWrapperTransitionEnd),d.onTranslateToWrapperTransitionEnd=null,delete d.onTranslateToWrapperTransitionEnd,d.animating=!1,o&&d.emit("transitionEnd"))}),d.wrapperEl.addEventListener("transitionend",d.onTranslateToWrapperTransitionEnd))),!0}var dg={getTranslate:sg,setTranslate:lg,minTranslate:ag,maxTranslate:ug,translateTo:cg};function fg(i,n){const o=this;o.params.cssMode||(o.wrapperEl.style.transitionDuration=`${i}ms`,o.wrapperEl.style.transitionDelay=i===0?"0ms":""),o.emit("setTransition",i,n)}function Wf(i){let{swiper:n,runCallbacks:o,direction:l,step:u}=i;const{activeIndex:d,previousIndex:h}=n;let g=l;if(g||(d>h?g="next":d<h?g="prev":g="reset"),n.emit(`transition${u}`),o&&d!==h){if(g==="reset"){n.emit(`slideResetTransition${u}`);return}n.emit(`slideChangeTransition${u}`),g==="next"?n.emit(`slideNextTransition${u}`):n.emit(`slidePrevTransition${u}`)}}function pg(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;l.cssMode||(l.autoHeight&&o.updateAutoHeight(),Wf({swiper:o,runCallbacks:i,direction:n,step:"Start"}))}function mg(i,n){i===void 0&&(i=!0);const o=this,{params:l}=o;o.animating=!1,!l.cssMode&&(o.setTransition(0),Wf({swiper:o,runCallbacks:i,direction:n,step:"End"}))}var hg={setTransition:fg,transitionStart:pg,transitionEnd:mg};function gg(i,n,o,l,u){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const d=this;let h=i;h<0&&(h=0);const{params:g,snapGrid:f,slidesGrid:S,previousIndex:v,activeIndex:y,rtlTranslate:T,wrapperEl:b,enabled:I}=d;if(!I&&!l&&!u||d.destroyed||d.animating&&g.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=d.params.speed);const N=Math.min(d.params.slidesPerGroupSkip,h);let F=N+Math.floor((h-N)/d.params.slidesPerGroup);F>=f.length&&(F=f.length-1);const M=-f[F];if(g.normalizeSlideIndex)for(let O=0;O<S.length;O+=1){const A=-Math.floor(M*100),U=Math.floor(S[O]*100),K=Math.floor(S[O+1]*100);typeof S[O+1]<"u"?A>=U&&A<K-(K-U)/2?h=O:A>=U&&A<K&&(h=O+1):A>=U&&(h=O)}if(d.initialized&&h!==y&&(!d.allowSlideNext&&(T?M>d.translate&&M>d.minTranslate():M<d.translate&&M<d.minTranslate())||!d.allowSlidePrev&&M>d.translate&&M>d.maxTranslate()&&(y||0)!==h))return!1;h!==(v||0)&&o&&d.emit("beforeSlideChangeStart"),d.updateProgress(M);let E;h>y?E="next":h<y?E="prev":E="reset";const w=d.virtual&&d.params.virtual.enabled;if(!(w&&u)&&(T&&-M===d.translate||!T&&M===d.translate))return d.updateActiveIndex(h),g.autoHeight&&d.updateAutoHeight(),d.updateSlidesClasses(),g.effect!=="slide"&&d.setTranslate(M),E!=="reset"&&(d.transitionStart(o,E),d.transitionEnd(o,E)),!1;if(g.cssMode){const O=d.isHorizontal(),A=T?M:-M;if(n===0)w&&(d.wrapperEl.style.scrollSnapType="none",d._immediateVirtual=!0),w&&!d._cssModeVirtualInitialSet&&d.params.initialSlide>0?(d._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[O?"scrollLeft":"scrollTop"]=A})):b[O?"scrollLeft":"scrollTop"]=A,w&&requestAnimationFrame(()=>{d.wrapperEl.style.scrollSnapType="",d._immediateVirtual=!1});else{if(!d.support.smoothScroll)return $f({swiper:d,targetPosition:A,side:O?"left":"top"}),!0;b.scrollTo({[O?"left":"top"]:A,behavior:"smooth"})}return!0}return d.setTransition(n),d.setTranslate(M),d.updateActiveIndex(h),d.updateSlidesClasses(),d.emit("beforeTransitionStart",n,l),d.transitionStart(o,E),n===0?d.transitionEnd(o,E):d.animating||(d.animating=!0,d.onSlideToWrapperTransitionEnd||(d.onSlideToWrapperTransitionEnd=function(A){!d||d.destroyed||A.target===this&&(d.wrapperEl.removeEventListener("transitionend",d.onSlideToWrapperTransitionEnd),d.onSlideToWrapperTransitionEnd=null,delete d.onSlideToWrapperTransitionEnd,d.transitionEnd(o,E))}),d.wrapperEl.addEventListener("transitionend",d.onSlideToWrapperTransitionEnd)),!0}function vg(i,n,o,l){i===void 0&&(i=0),o===void 0&&(o=!0),typeof i=="string"&&(i=parseInt(i,10));const u=this;if(u.destroyed)return;typeof n>"u"&&(n=u.params.speed);const d=u.grid&&u.params.grid&&u.params.grid.rows>1;let h=i;if(u.params.loop)if(u.virtual&&u.params.virtual.enabled)h=h+u.virtual.slidesBefore;else{let g;if(d){const T=h*u.params.grid.rows;g=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===T)[0].column}else g=u.getSlideIndexByData(h);const f=d?Math.ceil(u.slides.length/u.params.grid.rows):u.slides.length,{centeredSlides:S}=u.params;let v=u.params.slidesPerView;v==="auto"?v=u.slidesPerViewDynamic():(v=Math.ceil(parseFloat(u.params.slidesPerView,10)),S&&v%2===0&&(v=v+1));let y=f-g<v;if(S&&(y=y||g<Math.ceil(v/2)),l&&S&&u.params.slidesPerView!=="auto"&&!d&&(y=!1),y){const T=S?g<u.activeIndex?"prev":"next":g-u.activeIndex-1<u.params.slidesPerView?"next":"prev";u.loopFix({direction:T,slideTo:!0,activeSlideIndex:T==="next"?g+1:g-f+1,slideRealIndex:T==="next"?u.realIndex:void 0})}if(d){const T=h*u.params.grid.rows;h=u.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===T)[0].column}else h=u.getSlideIndexByData(h)}return requestAnimationFrame(()=>{u.slideTo(h,n,o,l)}),u}function xg(i,n,o){n===void 0&&(n=!0);const l=this,{enabled:u,params:d,animating:h}=l;if(!u||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);let g=d.slidesPerGroup;d.slidesPerView==="auto"&&d.slidesPerGroup===1&&d.slidesPerGroupAuto&&(g=Math.max(l.slidesPerViewDynamic("current",!0),1));const f=l.activeIndex<d.slidesPerGroupSkip?1:g,S=l.virtual&&d.virtual.enabled;if(d.loop){if(h&&!S&&d.loopPreventsSliding)return!1;if(l.loopFix({direction:"next"}),l._clientLeft=l.wrapperEl.clientLeft,l.activeIndex===l.slides.length-1&&d.cssMode)return requestAnimationFrame(()=>{l.slideTo(l.activeIndex+f,i,n,o)}),!0}return d.rewind&&l.isEnd?l.slideTo(0,i,n,o):l.slideTo(l.activeIndex+f,i,n,o)}function yg(i,n,o){n===void 0&&(n=!0);const l=this,{params:u,snapGrid:d,slidesGrid:h,rtlTranslate:g,enabled:f,animating:S}=l;if(!f||l.destroyed)return l;typeof i>"u"&&(i=l.params.speed);const v=l.virtual&&u.virtual.enabled;if(u.loop){if(S&&!v&&u.loopPreventsSliding)return!1;l.loopFix({direction:"prev"}),l._clientLeft=l.wrapperEl.clientLeft}const y=g?l.translate:-l.translate;function T(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const b=T(y),I=d.map(M=>T(M));let N=d[I.indexOf(b)-1];if(typeof N>"u"&&u.cssMode){let M;d.forEach((E,w)=>{b>=E&&(M=w)}),typeof M<"u"&&(N=d[M>0?M-1:M])}let F=0;if(typeof N<"u"&&(F=h.indexOf(N),F<0&&(F=l.activeIndex-1),u.slidesPerView==="auto"&&u.slidesPerGroup===1&&u.slidesPerGroupAuto&&(F=F-l.slidesPerViewDynamic("previous",!0)+1,F=Math.max(F,0))),u.rewind&&l.isBeginning){const M=l.params.virtual&&l.params.virtual.enabled&&l.virtual?l.virtual.slides.length-1:l.slides.length-1;return l.slideTo(M,i,n,o)}else if(u.loop&&l.activeIndex===0&&u.cssMode)return requestAnimationFrame(()=>{l.slideTo(F,i,n,o)}),!0;return l.slideTo(F,i,n,o)}function wg(i,n,o){n===void 0&&(n=!0);const l=this;if(!l.destroyed)return typeof i>"u"&&(i=l.params.speed),l.slideTo(l.activeIndex,i,n,o)}function Sg(i,n,o,l){n===void 0&&(n=!0),l===void 0&&(l=.5);const u=this;if(u.destroyed)return;typeof i>"u"&&(i=u.params.speed);let d=u.activeIndex;const h=Math.min(u.params.slidesPerGroupSkip,d),g=h+Math.floor((d-h)/u.params.slidesPerGroup),f=u.rtlTranslate?u.translate:-u.translate;if(f>=u.snapGrid[g]){const S=u.snapGrid[g],v=u.snapGrid[g+1];f-S>(v-S)*l&&(d+=u.params.slidesPerGroup)}else{const S=u.snapGrid[g-1],v=u.snapGrid[g];f-S<=(v-S)*l&&(d-=u.params.slidesPerGroup)}return d=Math.max(d,0),d=Math.min(d,u.slidesGrid.length-1),u.slideTo(d,i,n,o)}function kg(){const i=this;if(i.destroyed)return;const{params:n,slidesEl:o}=i,l=n.slidesPerView==="auto"?i.slidesPerViewDynamic():n.slidesPerView;let u=i.clickedIndex,d;const h=i.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(i.animating)return;d=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?u<i.loopedSlides-l/2||u>i.slides.length-i.loopedSlides+l/2?(i.loopFix(),u=i.getSlideIndex(Rt(o,`${h}[data-swiper-slide-index="${d}"]`)[0]),Ca(()=>{i.slideTo(u)})):i.slideTo(u):u>i.slides.length-l?(i.loopFix(),u=i.getSlideIndex(Rt(o,`${h}[data-swiper-slide-index="${d}"]`)[0]),Ca(()=>{i.slideTo(u)})):i.slideTo(u)}else i.slideTo(u)}var Eg={slideTo:gg,slideToLoop:vg,slideNext:xg,slidePrev:yg,slideReset:wg,slideToClosest:Sg,slideToClickedSlide:kg};function Cg(i){const n=this,{params:o,slidesEl:l}=n;if(!o.loop||n.virtual&&n.params.virtual.enabled)return;const u=()=>{Rt(l,`.${o.slideClass}, swiper-slide`).forEach((y,T)=>{y.setAttribute("data-swiper-slide-index",T)})},d=n.grid&&o.grid&&o.grid.rows>1,h=o.slidesPerGroup*(d?o.grid.rows:1),g=n.slides.length%h!==0,f=d&&n.slides.length%o.grid.rows!==0,S=v=>{for(let y=0;y<v;y+=1){const T=n.isElement?Yo("swiper-slide",[o.slideBlankClass]):Yo("div",[o.slideClass,o.slideBlankClass]);n.slidesEl.append(T)}};if(g){if(o.loopAddBlankSlides){const v=h-n.slides.length%h;S(v),n.recalcSlides(),n.updateSlides()}else qo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else if(f){if(o.loopAddBlankSlides){const v=o.grid.rows-n.slides.length%o.grid.rows;S(v),n.recalcSlides(),n.updateSlides()}else qo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");u()}else u();n.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next"})}function Tg(i){let{slideRealIndex:n,slideTo:o=!0,direction:l,setTranslate:u,activeSlideIndex:d,byController:h,byMousewheel:g}=i===void 0?{}:i;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:S,allowSlidePrev:v,allowSlideNext:y,slidesEl:T,params:b}=f,{centeredSlides:I}=b;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&b.virtual.enabled){o&&(!b.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):b.centeredSlides&&f.snapIndex<b.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=v,f.allowSlideNext=y,f.emit("loopFix");return}let N=b.slidesPerView;N==="auto"?N=f.slidesPerViewDynamic():(N=Math.ceil(parseFloat(b.slidesPerView,10)),I&&N%2===0&&(N=N+1));const F=b.slidesPerGroupAuto?N:b.slidesPerGroup;let M=F;M%F!==0&&(M+=F-M%F),M+=b.loopAdditionalSlides,f.loopedSlides=M;const E=f.grid&&b.grid&&b.grid.rows>1;S.length<N+M?qo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):E&&b.grid.fill==="row"&&qo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],z=[];let O=f.activeIndex;typeof d>"u"?d=f.getSlideIndex(S.filter(X=>X.classList.contains(b.slideActiveClass))[0]):O=d;const A=l==="next"||!l,U=l==="prev"||!l;let K=0,V=0;const G=E?Math.ceil(S.length/b.grid.rows):S.length,te=(E?S[d].column:d)+(I&&typeof u>"u"?-N/2+.5:0);if(te<M){K=Math.max(M-te,F);for(let X=0;X<M-te;X+=1){const oe=X-Math.floor(X/G)*G;if(E){const ae=G-oe-1;for(let ve=S.length-1;ve>=0;ve-=1)S[ve].column===ae&&w.push(ve)}else w.push(G-oe-1)}}else if(te+N>G-M){V=Math.max(te-(G-M*2),F);for(let X=0;X<V;X+=1){const oe=X-Math.floor(X/G)*G;E?S.forEach((ae,ve)=>{ae.column===oe&&z.push(ve)}):z.push(oe)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),U&&w.forEach(X=>{S[X].swiperLoopMoveDOM=!0,T.prepend(S[X]),S[X].swiperLoopMoveDOM=!1}),A&&z.forEach(X=>{S[X].swiperLoopMoveDOM=!0,T.append(S[X]),S[X].swiperLoopMoveDOM=!1}),f.recalcSlides(),b.slidesPerView==="auto"?f.updateSlides():E&&(w.length>0&&U||z.length>0&&A)&&f.slides.forEach((X,oe)=>{f.grid.updateSlide(oe,X,f.slides)}),b.watchSlidesProgress&&f.updateSlidesOffset(),o){if(w.length>0&&U){if(typeof n>"u"){const X=f.slidesGrid[O],ae=f.slidesGrid[O+K]-X;g?f.setTranslate(f.translate-ae):(f.slideTo(O+Math.ceil(K),0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ae,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ae))}else if(u){const X=E?w.length/b.grid.rows:w.length;f.slideTo(f.activeIndex+X,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(z.length>0&&A)if(typeof n>"u"){const X=f.slidesGrid[O],ae=f.slidesGrid[O-V]-X;g?f.setTranslate(f.translate-ae):(f.slideTo(O-V,0,!1,!0),u&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ae,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ae))}else{const X=E?z.length/b.grid.rows:z.length;f.slideTo(f.activeIndex-X,0,!1,!0)}}if(f.allowSlidePrev=v,f.allowSlideNext=y,f.controller&&f.controller.control&&!h){const X={slideRealIndex:n,direction:l,setTranslate:u,activeSlideIndex:d,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(oe=>{!oe.destroyed&&oe.params.loop&&oe.loopFix({...X,slideTo:oe.params.slidesPerView===b.slidesPerView?o:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...X,slideTo:f.controller.control.params.slidesPerView===b.slidesPerView?o:!1})}f.emit("loopFix")}function bg(){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const l=[];i.slides.forEach(u=>{const d=typeof u.swiperSlideIndex>"u"?u.getAttribute("data-swiper-slide-index")*1:u.swiperSlideIndex;l[d]=u}),i.slides.forEach(u=>{u.removeAttribute("data-swiper-slide-index")}),l.forEach(u=>{o.append(u)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var jg={loopCreate:Cg,loopFix:Tg,loopDestroy:bg};function Pg(i){const n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;const o=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),o.style.cursor="move",o.style.cursor=i?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function zg(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var _g={setGrabCursor:Pg,unsetGrabCursor:zg};function Mg(i,n){n===void 0&&(n=this);function o(l){if(!l||l===Kt()||l===mt())return null;l.assignedSlot&&(l=l.assignedSlot);const u=l.closest(i);return!u&&!l.getRootNode?null:u||o(l.getRootNode().host)}return o(n)}function of(i,n,o){const l=mt(),{params:u}=i,d=u.edgeSwipeDetection,h=u.edgeSwipeThreshold;return d&&(o<=h||o>=l.innerWidth-h)?d==="prevent"?(n.preventDefault(),!0):!1:!0}function Lg(i){const n=this,o=Kt();let l=i;l.originalEvent&&(l=l.originalEvent);const u=n.touchEventsData;if(l.type==="pointerdown"){if(u.pointerId!==null&&u.pointerId!==l.pointerId)return;u.pointerId=l.pointerId}else l.type==="touchstart"&&l.targetTouches.length===1&&(u.touchId=l.targetTouches[0].identifier);if(l.type==="touchstart"){of(n,l,l.targetTouches[0].pageX);return}const{params:d,touches:h,enabled:g}=n;if(!g||!d.simulateTouch&&l.pointerType==="mouse"||n.animating&&d.preventInteractionOnTransition)return;!n.animating&&d.cssMode&&d.loop&&n.loopFix();let f=l.target;if(d.touchEventsTarget==="wrapper"&&!F0(f,n.wrapperEl)||"which"in l&&l.which===3||"button"in l&&l.button>0||u.isTouched&&u.isMoved)return;const S=!!d.noSwipingClass&&d.noSwipingClass!=="",v=l.composedPath?l.composedPath():l.path;S&&l.target&&l.target.shadowRoot&&v&&(f=v[0]);const y=d.noSwipingSelector?d.noSwipingSelector:`.${d.noSwipingClass}`,T=!!(l.target&&l.target.shadowRoot);if(d.noSwiping&&(T?Mg(y,f):f.closest(y))){n.allowClick=!0;return}if(d.swipeHandler&&!f.closest(d.swipeHandler))return;h.currentX=l.pageX,h.currentY=l.pageY;const b=h.currentX,I=h.currentY;if(!of(n,l,b))return;Object.assign(u,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),h.startX=b,h.startY=I,u.touchStartTime=An(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,d.threshold>0&&(u.allowThresholdMove=!1);let N=!0;f.matches(u.focusableElements)&&(N=!1,f.nodeName==="SELECT"&&(u.isTouched=!1)),o.activeElement&&o.activeElement.matches(u.focusableElements)&&o.activeElement!==f&&(l.pointerType==="mouse"||l.pointerType!=="mouse"&&!f.matches(u.focusableElements))&&o.activeElement.blur();const F=N&&n.allowTouchMove&&d.touchStartPreventDefault;(d.touchStartForcePreventDefault||F)&&!f.isContentEditable&&l.preventDefault(),d.freeMode&&d.freeMode.enabled&&n.freeMode&&n.animating&&!d.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",l)}function Ig(i){const n=Kt(),o=this,l=o.touchEventsData,{params:u,touches:d,rtlTranslate:h,enabled:g}=o;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(l.touchId!==null||f.pointerId!==l.pointerId))return;let S;if(f.type==="touchmove"){if(S=[...f.changedTouches].filter(A=>A.identifier===l.touchId)[0],!S||S.identifier!==l.touchId)return}else S=f;if(!l.isTouched){l.startMoving&&l.isScrolling&&o.emit("touchMoveOpposite",f);return}const v=S.pageX,y=S.pageY;if(f.preventedByNestedSwiper){d.startX=v,d.startY=y;return}if(!o.allowTouchMove){f.target.matches(l.focusableElements)||(o.allowClick=!1),l.isTouched&&(Object.assign(d,{startX:v,startY:y,currentX:v,currentY:y}),l.touchStartTime=An());return}if(u.touchReleaseOnEdges&&!u.loop){if(o.isVertical()){if(y<d.startY&&o.translate<=o.maxTranslate()||y>d.startY&&o.translate>=o.minTranslate()){l.isTouched=!1,l.isMoved=!1;return}}else if(v<d.startX&&o.translate<=o.maxTranslate()||v>d.startX&&o.translate>=o.minTranslate())return}if(n.activeElement&&n.activeElement.matches(l.focusableElements)&&n.activeElement!==f.target&&f.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&f.target===n.activeElement&&f.target.matches(l.focusableElements)){l.isMoved=!0,o.allowClick=!1;return}l.allowTouchCallbacks&&o.emit("touchMove",f),d.previousX=d.currentX,d.previousY=d.currentY,d.currentX=v,d.currentY=y;const T=d.currentX-d.startX,b=d.currentY-d.startY;if(o.params.threshold&&Math.sqrt(T**2+b**2)<o.params.threshold)return;if(typeof l.isScrolling>"u"){let A;o.isHorizontal()&&d.currentY===d.startY||o.isVertical()&&d.currentX===d.startX?l.isScrolling=!1:T*T+b*b>=25&&(A=Math.atan2(Math.abs(b),Math.abs(T))*180/Math.PI,l.isScrolling=o.isHorizontal()?A>u.touchAngle:90-A>u.touchAngle)}if(l.isScrolling&&o.emit("touchMoveOpposite",f),typeof l.startMoving>"u"&&(d.currentX!==d.startX||d.currentY!==d.startY)&&(l.startMoving=!0),l.isScrolling||f.type==="touchmove"&&l.preventTouchMoveFromPointerMove){l.isTouched=!1;return}if(!l.startMoving)return;o.allowClick=!1,!u.cssMode&&f.cancelable&&f.preventDefault(),u.touchMoveStopPropagation&&!u.nested&&f.stopPropagation();let I=o.isHorizontal()?T:b,N=o.isHorizontal()?d.currentX-d.previousX:d.currentY-d.previousY;u.oneWayMovement&&(I=Math.abs(I)*(h?1:-1),N=Math.abs(N)*(h?1:-1)),d.diff=I,I*=u.touchRatio,h&&(I=-I,N=-N);const F=o.touchesDirection;o.swipeDirection=I>0?"prev":"next",o.touchesDirection=N>0?"prev":"next";const M=o.params.loop&&!u.cssMode,E=o.touchesDirection==="next"&&o.allowSlideNext||o.touchesDirection==="prev"&&o.allowSlidePrev;if(!l.isMoved){if(M&&E&&o.loopFix({direction:o.swipeDirection}),l.startTranslate=o.getTranslate(),o.setTransition(0),o.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});o.wrapperEl.dispatchEvent(A)}l.allowMomentumBounce=!1,u.grabCursor&&(o.allowSlideNext===!0||o.allowSlidePrev===!0)&&o.setGrabCursor(!0),o.emit("sliderFirstMove",f)}let w;if(new Date().getTime(),l.isMoved&&l.allowThresholdMove&&F!==o.touchesDirection&&M&&E&&Math.abs(I)>=1){Object.assign(d,{startX:v,startY:y,currentX:v,currentY:y,startTranslate:l.currentTranslate}),l.loopSwapReset=!0,l.startTranslate=l.currentTranslate;return}o.emit("sliderMove",f),l.isMoved=!0,l.currentTranslate=I+l.startTranslate;let z=!0,O=u.resistanceRatio;if(u.touchReleaseOnEdges&&(O=0),I>0?(M&&E&&!w&&l.allowThresholdMove&&l.currentTranslate>(u.centeredSlides?o.minTranslate()-o.slidesSizesGrid[o.activeIndex+1]-(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.activeIndex+1]+o.params.spaceBetween:0)-o.params.spaceBetween:o.minTranslate())&&o.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),l.currentTranslate>o.minTranslate()&&(z=!1,u.resistance&&(l.currentTranslate=o.minTranslate()-1+(-o.minTranslate()+l.startTranslate+I)**O))):I<0&&(M&&E&&!w&&l.allowThresholdMove&&l.currentTranslate<(u.centeredSlides?o.maxTranslate()+o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween+(u.slidesPerView!=="auto"&&o.slides.length-u.slidesPerView>=2?o.slidesSizesGrid[o.slidesSizesGrid.length-1]+o.params.spaceBetween:0):o.maxTranslate())&&o.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:o.slides.length-(u.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(u.slidesPerView,10)))}),l.currentTranslate<o.maxTranslate()&&(z=!1,u.resistance&&(l.currentTranslate=o.maxTranslate()+1-(o.maxTranslate()-l.startTranslate-I)**O))),z&&(f.preventedByNestedSwiper=!0),!o.allowSlideNext&&o.swipeDirection==="next"&&l.currentTranslate<l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&o.swipeDirection==="prev"&&l.currentTranslate>l.startTranslate&&(l.currentTranslate=l.startTranslate),!o.allowSlidePrev&&!o.allowSlideNext&&(l.currentTranslate=l.startTranslate),u.threshold>0)if(Math.abs(I)>u.threshold||l.allowThresholdMove){if(!l.allowThresholdMove){l.allowThresholdMove=!0,d.startX=d.currentX,d.startY=d.currentY,l.currentTranslate=l.startTranslate,d.diff=o.isHorizontal()?d.currentX-d.startX:d.currentY-d.startY;return}}else{l.currentTranslate=l.startTranslate;return}!u.followFinger||u.cssMode||((u.freeMode&&u.freeMode.enabled&&o.freeMode||u.watchSlidesProgress)&&(o.updateActiveIndex(),o.updateSlidesClasses()),u.freeMode&&u.freeMode.enabled&&o.freeMode&&o.freeMode.onTouchMove(),o.updateProgress(l.currentTranslate),o.setTranslate(l.currentTranslate))}function Og(i){const n=this,o=n.touchEventsData;let l=i;l.originalEvent&&(l=l.originalEvent);let u;if(l.type==="touchend"||l.type==="touchcancel"){if(u=[...l.changedTouches].filter(O=>O.identifier===o.touchId)[0],!u||u.identifier!==o.touchId)return}else{if(o.touchId!==null||l.pointerId!==o.pointerId)return;u=l}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(l.type)&&!(["pointercancel","contextmenu"].includes(l.type)&&(n.browser.isSafari||n.browser.isWebView)))return;o.pointerId=null,o.touchId=null;const{params:h,touches:g,rtlTranslate:f,slidesGrid:S,enabled:v}=n;if(!v||!h.simulateTouch&&l.pointerType==="mouse")return;if(o.allowTouchCallbacks&&n.emit("touchEnd",l),o.allowTouchCallbacks=!1,!o.isTouched){o.isMoved&&h.grabCursor&&n.setGrabCursor(!1),o.isMoved=!1,o.startMoving=!1;return}h.grabCursor&&o.isMoved&&o.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);const y=An(),T=y-o.touchStartTime;if(n.allowClick){const O=l.path||l.composedPath&&l.composedPath();n.updateClickedSlide(O&&O[0]||l.target,O),n.emit("tap click",l),T<300&&y-o.lastClickTime<300&&n.emit("doubleTap doubleClick",l)}if(o.lastClickTime=An(),Ca(()=>{n.destroyed||(n.allowClick=!0)}),!o.isTouched||!o.isMoved||!n.swipeDirection||g.diff===0&&!o.loopSwapReset||o.currentTranslate===o.startTranslate&&!o.loopSwapReset){o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;return}o.isTouched=!1,o.isMoved=!1,o.startMoving=!1;let b;if(h.followFinger?b=f?n.translate:-n.translate:b=-o.currentTranslate,h.cssMode)return;if(h.freeMode&&h.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:b});return}const I=b>=-n.maxTranslate()&&!n.params.loop;let N=0,F=n.slidesSizesGrid[0];for(let O=0;O<S.length;O+=O<h.slidesPerGroupSkip?1:h.slidesPerGroup){const A=O<h.slidesPerGroupSkip-1?1:h.slidesPerGroup;typeof S[O+A]<"u"?(I||b>=S[O]&&b<S[O+A])&&(N=O,F=S[O+A]-S[O]):(I||b>=S[O])&&(N=O,F=S[S.length-1]-S[S.length-2])}let M=null,E=null;h.rewind&&(n.isBeginning?E=h.virtual&&h.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(M=0));const w=(b-S[N])/F,z=N<h.slidesPerGroupSkip-1?1:h.slidesPerGroup;if(T>h.longSwipesMs){if(!h.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(w>=h.longSwipesRatio?n.slideTo(h.rewind&&n.isEnd?M:N+z):n.slideTo(N)),n.swipeDirection==="prev"&&(w>1-h.longSwipesRatio?n.slideTo(N+z):E!==null&&w<0&&Math.abs(w)>h.longSwipesRatio?n.slideTo(E):n.slideTo(N))}else{if(!h.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(l.target===n.navigation.nextEl||l.target===n.navigation.prevEl)?l.target===n.navigation.nextEl?n.slideTo(N+z):n.slideTo(N):(n.swipeDirection==="next"&&n.slideTo(M!==null?M:N+z),n.swipeDirection==="prev"&&n.slideTo(E!==null?E:N))}}function sf(){const i=this,{params:n,el:o}=i;if(o&&o.offsetWidth===0)return;n.breakpoints&&i.setBreakpoint();const{allowSlideNext:l,allowSlidePrev:u,snapGrid:d}=i,h=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const g=h&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!g?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!h?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=u,i.allowSlideNext=l,i.params.watchOverflow&&d!==i.snapGrid&&i.checkOverflow()}function Ng(i){const n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&i.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Ag(){const i=this,{wrapperEl:n,rtlTranslate:o,enabled:l}=i;if(!l)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-n.scrollLeft:i.translate=-n.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let u;const d=i.maxTranslate()-i.minTranslate();d===0?u=0:u=(i.translate-i.minTranslate())/d,u!==i.progress&&i.updateProgress(o?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Dg(i){const n=this;$o(n,i.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function Rg(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Uf=(i,n)=>{const o=Kt(),{params:l,el:u,wrapperEl:d,device:h}=i,g=!!l.nested,f=n==="on"?"addEventListener":"removeEventListener",S=n;!u||typeof u=="string"||(o[f]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:g}),u[f]("touchstart",i.onTouchStart,{passive:!1}),u[f]("pointerdown",i.onTouchStart,{passive:!1}),o[f]("touchmove",i.onTouchMove,{passive:!1,capture:g}),o[f]("pointermove",i.onTouchMove,{passive:!1,capture:g}),o[f]("touchend",i.onTouchEnd,{passive:!0}),o[f]("pointerup",i.onTouchEnd,{passive:!0}),o[f]("pointercancel",i.onTouchEnd,{passive:!0}),o[f]("touchcancel",i.onTouchEnd,{passive:!0}),o[f]("pointerout",i.onTouchEnd,{passive:!0}),o[f]("pointerleave",i.onTouchEnd,{passive:!0}),o[f]("contextmenu",i.onTouchEnd,{passive:!0}),(l.preventClicks||l.preventClicksPropagation)&&u[f]("click",i.onClick,!0),l.cssMode&&d[f]("scroll",i.onScroll),l.updateOnWindowResize?i[S](h.ios||h.android?"resize orientationchange observerUpdate":"resize observerUpdate",sf,!0):i[S]("observerUpdate",sf,!0),u[f]("load",i.onLoad,{capture:!0}))};function Fg(){const i=this,{params:n}=i;i.onTouchStart=Lg.bind(i),i.onTouchMove=Ig.bind(i),i.onTouchEnd=Og.bind(i),i.onDocumentTouchStart=Rg.bind(i),n.cssMode&&(i.onScroll=Ag.bind(i)),i.onClick=Ng.bind(i),i.onLoad=Dg.bind(i),Uf(i,"on")}function Bg(){Uf(this,"off")}var $g={attachEvents:Fg,detachEvents:Bg};const lf=(i,n)=>i.grid&&n.grid&&n.grid.rows>1;function Vg(){const i=this,{realIndex:n,initialized:o,params:l,el:u}=i,d=l.breakpoints;if(!d||d&&Object.keys(d).length===0)return;const h=i.getBreakpoint(d,i.params.breakpointsBase,i.el);if(!h||i.currentBreakpoint===h)return;const f=(h in d?d[h]:void 0)||i.originalParams,S=lf(i,l),v=lf(i,f),y=i.params.grabCursor,T=f.grabCursor,b=l.enabled;S&&!v?(u.classList.remove(`${l.containerModifierClass}grid`,`${l.containerModifierClass}grid-column`),i.emitContainerClasses()):!S&&v&&(u.classList.add(`${l.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&l.grid.fill==="column")&&u.classList.add(`${l.containerModifierClass}grid-column`),i.emitContainerClasses()),y&&!T?i.unsetGrabCursor():!y&&T&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof f[w]>"u")return;const z=l[w]&&l[w].enabled,O=f[w]&&f[w].enabled;z&&!O&&i[w].disable(),!z&&O&&i[w].enable()});const I=f.direction&&f.direction!==l.direction,N=l.loop&&(f.slidesPerView!==l.slidesPerView||I),F=l.loop;I&&o&&i.changeDirection(),pt(i.params,f);const M=i.params.enabled,E=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),b&&!M?i.disable():!b&&M&&i.enable(),i.currentBreakpoint=h,i.emit("_beforeBreakpoint",f),o&&(N?(i.loopDestroy(),i.loopCreate(n),i.updateSlides()):!F&&E?(i.loopCreate(n),i.updateSlides()):F&&!E&&i.loopDestroy()),i.emit("breakpoint",f)}function Gg(i,n,o){if(n===void 0&&(n="window"),!i||n==="container"&&!o)return;let l=!1;const u=mt(),d=n==="window"?u.innerHeight:o.clientHeight,h=Object.keys(i).map(g=>{if(typeof g=="string"&&g.indexOf("@")===0){const f=parseFloat(g.substr(1));return{value:d*f,point:g}}return{value:g,point:g}});h.sort((g,f)=>parseInt(g.value,10)-parseInt(f.value,10));for(let g=0;g<h.length;g+=1){const{point:f,value:S}=h[g];n==="window"?u.matchMedia(`(min-width: ${S}px)`).matches&&(l=f):S<=o.clientWidth&&(l=f)}return l||"max"}var Hg={setBreakpoint:Vg,getBreakpoint:Gg};function Wg(i,n){const o=[];return i.forEach(l=>{typeof l=="object"?Object.keys(l).forEach(u=>{l[u]&&o.push(n+u)}):typeof l=="string"&&o.push(n+l)}),o}function Ug(){const i=this,{classNames:n,params:o,rtl:l,el:u,device:d}=i,h=Wg(["initialized",o.direction,{"free-mode":i.params.freeMode&&o.freeMode.enabled},{autoheight:o.autoHeight},{rtl:l},{grid:o.grid&&o.grid.rows>1},{"grid-column":o.grid&&o.grid.rows>1&&o.grid.fill==="column"},{android:d.android},{ios:d.ios},{"css-mode":o.cssMode},{centered:o.cssMode&&o.centeredSlides},{"watch-progress":o.watchSlidesProgress}],o.containerModifierClass);n.push(...h),u.classList.add(...n),i.emitContainerClasses()}function qg(){const i=this,{el:n,classNames:o}=i;!n||typeof n=="string"||(n.classList.remove(...o),i.emitContainerClasses())}var Yg={addClasses:Ug,removeClasses:qg};function Xg(){const i=this,{isLocked:n,params:o}=i,{slidesOffsetBefore:l}=o;if(l){const u=i.slides.length-1,d=i.slidesGrid[u]+i.slidesSizesGrid[u]+l*2;i.isLocked=i.size>d}else i.isLocked=i.snapGrid.length===1;o.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),o.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),n&&n!==i.isLocked&&(i.isEnd=!1),n!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Qg={checkOverflow:Xg},ja={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Kg(i,n){return function(l){l===void 0&&(l={});const u=Object.keys(l)[0],d=l[u];if(typeof d!="object"||d===null){pt(n,l);return}if(i[u]===!0&&(i[u]={enabled:!0}),u==="navigation"&&i[u]&&i[u].enabled&&!i[u].prevEl&&!i[u].nextEl&&(i[u].auto=!0),["pagination","scrollbar"].indexOf(u)>=0&&i[u]&&i[u].enabled&&!i[u].el&&(i[u].auto=!0),!(u in i&&"enabled"in d)){pt(n,l);return}typeof i[u]=="object"&&!("enabled"in i[u])&&(i[u].enabled=!0),i[u]||(i[u]={enabled:!1}),pt(n,l)}}const fa={eventsEmitter:Y0,update:og,translate:dg,transition:hg,slide:Eg,loop:jg,grabCursor:_g,events:$g,breakpoints:Hg,checkOverflow:Qg,classes:Yg},pa={};let Da=class Xt{constructor(){let n,o;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];u.length===1&&u[0].constructor&&Object.prototype.toString.call(u[0]).slice(8,-1)==="Object"?o=u[0]:[n,o]=u,o||(o={}),o=pt({},o),n&&!o.el&&(o.el=n);const h=Kt();if(o.el&&typeof o.el=="string"&&h.querySelectorAll(o.el).length>1){const v=[];return h.querySelectorAll(o.el).forEach(y=>{const T=pt({},o,{el:y});v.push(new Xt(T))}),v}const g=this;g.__swiper__=!0,g.support=Gf(),g.device=Hf({userAgent:o.userAgent}),g.browser=W0(),g.eventsListeners={},g.eventsAnyListeners=[],g.modules=[...g.__modules__],o.modules&&Array.isArray(o.modules)&&g.modules.push(...o.modules);const f={};g.modules.forEach(v=>{v({params:o,swiper:g,extendParams:Kg(o,f),on:g.on.bind(g),once:g.once.bind(g),off:g.off.bind(g),emit:g.emit.bind(g)})});const S=pt({},ja,f);return g.params=pt({},S,pa,o),g.originalParams=pt({},g.params),g.passedParams=pt({},o),g.params&&g.params.on&&Object.keys(g.params.on).forEach(v=>{g.on(v,g.params.on[v])}),g.params&&g.params.onAny&&g.onAny(g.params.onAny),Object.assign(g,{enabled:g.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return g.params.direction==="horizontal"},isVertical(){return g.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:g.params.allowSlideNext,allowSlidePrev:g.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:g.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:g.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),g.emit("_swiper"),g.params.init&&g.init(),g}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){const{slidesEl:o,params:l}=this,u=Rt(o,`.${l.slideClass}, swiper-slide`),d=Xo(u[0]);return Xo(n)-d}getSlideIndexByData(n){return this.getSlideIndex(this.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===n)[0])}recalcSlides(){const n=this,{slidesEl:o,params:l}=n;n.slides=Rt(o,`.${l.slideClass}, swiper-slide`)}enable(){const n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){const n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,o){const l=this;n=Math.min(Math.max(n,0),1);const u=l.minTranslate(),h=(l.maxTranslate()-u)*n+u;l.translateTo(h,typeof o>"u"?0:o),l.updateActiveIndex(),l.updateSlidesClasses()}emitContainerClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=n.el.className.split(" ").filter(l=>l.indexOf("swiper")===0||l.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",o.join(" "))}getSlideClasses(n){const o=this;return o.destroyed?"":n.className.split(" ").filter(l=>l.indexOf("swiper-slide")===0||l.indexOf(o.params.slideClass)===0).join(" ")}emitSlidesClasses(){const n=this;if(!n.params._emitClasses||!n.el)return;const o=[];n.slides.forEach(l=>{const u=n.getSlideClasses(l);o.push({slideEl:l,classNames:u}),n.emit("_slideClass",l,u)}),n.emit("_slideClasses",o)}slidesPerViewDynamic(n,o){n===void 0&&(n="current"),o===void 0&&(o=!1);const l=this,{params:u,slides:d,slidesGrid:h,slidesSizesGrid:g,size:f,activeIndex:S}=l;let v=1;if(typeof u.slidesPerView=="number")return u.slidesPerView;if(u.centeredSlides){let y=d[S]?Math.ceil(d[S].swiperSlideSize):0,T;for(let b=S+1;b<d.length;b+=1)d[b]&&!T&&(y+=Math.ceil(d[b].swiperSlideSize),v+=1,y>f&&(T=!0));for(let b=S-1;b>=0;b-=1)d[b]&&!T&&(y+=d[b].swiperSlideSize,v+=1,y>f&&(T=!0))}else if(n==="current")for(let y=S+1;y<d.length;y+=1)(o?h[y]+g[y]-h[S]<f:h[y]-h[S]<f)&&(v+=1);else for(let y=S-1;y>=0;y-=1)h[S]-h[y]<f&&(v+=1);return v}update(){const n=this;if(!n||n.destroyed)return;const{snapGrid:o,params:l}=n;l.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(h=>{h.complete&&$o(n,h)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function u(){const h=n.rtlTranslate?n.translate*-1:n.translate,g=Math.min(Math.max(h,n.maxTranslate()),n.minTranslate());n.setTranslate(g),n.updateActiveIndex(),n.updateSlidesClasses()}let d;if(l.freeMode&&l.freeMode.enabled&&!l.cssMode)u(),l.autoHeight&&n.updateAutoHeight();else{if((l.slidesPerView==="auto"||l.slidesPerView>1)&&n.isEnd&&!l.centeredSlides){const h=n.virtual&&l.virtual.enabled?n.virtual.slides:n.slides;d=n.slideTo(h.length-1,0,!1,!0)}else d=n.slideTo(n.activeIndex,0,!1,!0);d||u()}l.watchOverflow&&o!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,o){o===void 0&&(o=!0);const l=this,u=l.params.direction;return n||(n=u==="horizontal"?"vertical":"horizontal"),n===u||n!=="horizontal"&&n!=="vertical"||(l.el.classList.remove(`${l.params.containerModifierClass}${u}`),l.el.classList.add(`${l.params.containerModifierClass}${n}`),l.emitContainerClasses(),l.params.direction=n,l.slides.forEach(d=>{n==="vertical"?d.style.width="":d.style.height=""}),l.emit("changeDirection"),o&&l.update()),l}changeLanguageDirection(n){const o=this;o.rtl&&n==="rtl"||!o.rtl&&n==="ltr"||(o.rtl=n==="rtl",o.rtlTranslate=o.params.direction==="horizontal"&&o.rtl,o.rtl?(o.el.classList.add(`${o.params.containerModifierClass}rtl`),o.el.dir="rtl"):(o.el.classList.remove(`${o.params.containerModifierClass}rtl`),o.el.dir="ltr"),o.update())}mount(n){const o=this;if(o.mounted)return!0;let l=n||o.params.el;if(typeof l=="string"&&(l=document.querySelector(l)),!l)return!1;l.swiper=o,l.parentNode&&l.parentNode.host&&l.parentNode.host.nodeName===o.params.swiperElementNodeName.toUpperCase()&&(o.isElement=!0);const u=()=>`.${(o.params.wrapperClass||"").trim().split(" ").join(".")}`;let h=l&&l.shadowRoot&&l.shadowRoot.querySelector?l.shadowRoot.querySelector(u()):Rt(l,u())[0];return!h&&o.params.createElements&&(h=Yo("div",o.params.wrapperClass),l.append(h),Rt(l,`.${o.params.slideClass}`).forEach(g=>{h.append(g)})),Object.assign(o,{el:l,wrapperEl:h,slidesEl:o.isElement&&!l.parentNode.host.slideSlots?l.parentNode.host:h,hostEl:o.isElement?l.parentNode.host:l,mounted:!0,rtl:l.dir.toLowerCase()==="rtl"||yn(l,"direction")==="rtl",rtlTranslate:o.params.direction==="horizontal"&&(l.dir.toLowerCase()==="rtl"||yn(l,"direction")==="rtl"),wrongRTL:yn(h,"display")==="-webkit-box"}),!0}init(n){const o=this;if(o.initialized||o.mount(n)===!1)return o;o.emit("beforeInit"),o.params.breakpoints&&o.setBreakpoint(),o.addClasses(),o.updateSize(),o.updateSlides(),o.params.watchOverflow&&o.checkOverflow(),o.params.grabCursor&&o.enabled&&o.setGrabCursor(),o.params.loop&&o.virtual&&o.params.virtual.enabled?o.slideTo(o.params.initialSlide+o.virtual.slidesBefore,0,o.params.runCallbacksOnInit,!1,!0):o.slideTo(o.params.initialSlide,0,o.params.runCallbacksOnInit,!1,!0),o.params.loop&&o.loopCreate(),o.attachEvents();const u=[...o.el.querySelectorAll('[loading="lazy"]')];return o.isElement&&u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),u.forEach(d=>{d.complete?$o(o,d):d.addEventListener("load",h=>{$o(o,h.target)})}),ba(o),o.initialized=!0,ba(o),o.emit("init"),o.emit("afterInit"),o}destroy(n,o){n===void 0&&(n=!0),o===void 0&&(o=!0);const l=this,{params:u,el:d,wrapperEl:h,slides:g}=l;return typeof l.params>"u"||l.destroyed||(l.emit("beforeDestroy"),l.initialized=!1,l.detachEvents(),u.loop&&l.loopDestroy(),o&&(l.removeClasses(),d&&typeof d!="string"&&d.removeAttribute("style"),h&&h.removeAttribute("style"),g&&g.length&&g.forEach(f=>{f.classList.remove(u.slideVisibleClass,u.slideFullyVisibleClass,u.slideActiveClass,u.slideNextClass,u.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),l.emit("destroy"),Object.keys(l.eventsListeners).forEach(f=>{l.off(f)}),n!==!1&&(l.el&&typeof l.el!="string"&&(l.el.swiper=null),N0(l)),l.destroyed=!0),null}static extendDefaults(n){pt(pa,n)}static get extendedDefaults(){return pa}static get defaults(){return ja}static installModule(n){Xt.prototype.__modules__||(Xt.prototype.__modules__=[]);const o=Xt.prototype.__modules__;typeof n=="function"&&o.indexOf(n)<0&&o.push(n)}static use(n){return Array.isArray(n)?(n.forEach(o=>Xt.installModule(o)),Xt):(Xt.installModule(n),Xt)}};Object.keys(fa).forEach(i=>{Object.keys(fa[i]).forEach(n=>{Da.prototype[n]=fa[i][n]})});Da.use([U0,q0]);const qf=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Dn(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function fr(i,n){const o=["__proto__","constructor","prototype"];Object.keys(n).filter(l=>o.indexOf(l)<0).forEach(l=>{typeof i[l]>"u"?i[l]=n[l]:Dn(n[l])&&Dn(i[l])&&Object.keys(n[l]).length>0?n[l].__swiper__?i[l]=n[l]:fr(i[l],n[l]):i[l]=n[l]})}function Yf(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Xf(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Qf(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Kf(i){i===void 0&&(i="");const n=i.split(" ").map(l=>l.trim()).filter(l=>!!l),o=[];return n.forEach(l=>{o.indexOf(l)<0&&o.push(l)}),o.join(" ")}function Zg(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function Jg(i){let{swiper:n,slides:o,passedParams:l,changedParams:u,nextEl:d,prevEl:h,scrollbarEl:g,paginationEl:f}=i;const S=u.filter(V=>V!=="children"&&V!=="direction"&&V!=="wrapperClass"),{params:v,pagination:y,navigation:T,scrollbar:b,virtual:I,thumbs:N}=n;let F,M,E,w,z,O,A,U;u.includes("thumbs")&&l.thumbs&&l.thumbs.swiper&&!l.thumbs.swiper.destroyed&&v.thumbs&&(!v.thumbs.swiper||v.thumbs.swiper.destroyed)&&(F=!0),u.includes("controller")&&l.controller&&l.controller.control&&v.controller&&!v.controller.control&&(M=!0),u.includes("pagination")&&l.pagination&&(l.pagination.el||f)&&(v.pagination||v.pagination===!1)&&y&&!y.el&&(E=!0),u.includes("scrollbar")&&l.scrollbar&&(l.scrollbar.el||g)&&(v.scrollbar||v.scrollbar===!1)&&b&&!b.el&&(w=!0),u.includes("navigation")&&l.navigation&&(l.navigation.prevEl||h)&&(l.navigation.nextEl||d)&&(v.navigation||v.navigation===!1)&&T&&!T.prevEl&&!T.nextEl&&(z=!0);const K=V=>{n[V]&&(n[V].destroy(),V==="navigation"?(n.isElement&&(n[V].prevEl.remove(),n[V].nextEl.remove()),v[V].prevEl=void 0,v[V].nextEl=void 0,n[V].prevEl=void 0,n[V].nextEl=void 0):(n.isElement&&n[V].el.remove(),v[V].el=void 0,n[V].el=void 0))};u.includes("loop")&&n.isElement&&(v.loop&&!l.loop?O=!0:!v.loop&&l.loop?A=!0:U=!0),S.forEach(V=>{if(Dn(v[V])&&Dn(l[V]))Object.assign(v[V],l[V]),(V==="navigation"||V==="pagination"||V==="scrollbar")&&"enabled"in l[V]&&!l[V].enabled&&K(V);else{const G=l[V];(G===!0||G===!1)&&(V==="navigation"||V==="pagination"||V==="scrollbar")?G===!1&&K(V):v[V]=l[V]}}),S.includes("controller")&&!M&&n.controller&&n.controller.control&&v.controller&&v.controller.control&&(n.controller.control=v.controller.control),u.includes("children")&&o&&I&&v.virtual.enabled?(I.slides=o,I.update(!0)):u.includes("virtual")&&I&&v.virtual.enabled&&(o&&(I.slides=o),I.update(!0)),u.includes("children")&&o&&v.loop&&(U=!0),F&&N.init()&&N.update(!0),M&&(n.controller.control=v.controller.control),E&&(n.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),n.el.appendChild(f)),f&&(v.pagination.el=f),y.init(),y.render(),y.update()),w&&(n.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-scrollbar"),g.part.add("scrollbar"),n.el.appendChild(g)),g&&(v.scrollbar.el=g),b.init(),b.updateSize(),b.setTranslate()),z&&(n.isElement&&((!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-next"),d.innerHTML=n.hostEl.constructor.nextButtonSvg,d.part.add("button-next"),n.el.appendChild(d)),(!h||typeof h=="string")&&(h=document.createElement("div"),h.classList.add("swiper-button-prev"),h.innerHTML=n.hostEl.constructor.prevButtonSvg,h.part.add("button-prev"),n.el.appendChild(h))),d&&(v.navigation.nextEl=d),h&&(v.navigation.prevEl=h),T.init(),T.update()),u.includes("allowSlideNext")&&(n.allowSlideNext=l.allowSlideNext),u.includes("allowSlidePrev")&&(n.allowSlidePrev=l.allowSlidePrev),u.includes("direction")&&n.changeDirection(l.direction,!1),(O||U)&&n.loopDestroy(),(A||U)&&n.loopCreate(),n.update()}function ev(i,n){i===void 0&&(i={}),n===void 0&&(n=!0);const o={on:{}},l={},u={};fr(o,ja),o._emitClasses=!0,o.init=!1;const d={},h=qf.map(f=>f.replace(/_/,"")),g=Object.assign({},i);return Object.keys(g).forEach(f=>{typeof i[f]>"u"||(h.indexOf(f)>=0?Dn(i[f])?(o[f]={},u[f]={},fr(o[f],i[f]),fr(u[f],i[f])):(o[f]=i[f],u[f]=i[f]):f.search(/on[A-Z]/)===0&&typeof i[f]=="function"?n?l[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:o.on[`${f[2].toLowerCase()}${f.substr(3)}`]=i[f]:d[f]=i[f])}),["navigation","pagination","scrollbar"].forEach(f=>{o[f]===!0&&(o[f]={}),o[f]===!1&&delete o[f]}),{params:o,passedParams:u,rest:d,events:l}}function tv(i,n){let{el:o,nextEl:l,prevEl:u,paginationEl:d,scrollbarEl:h,swiper:g}=i;Yf(n)&&l&&u&&(g.params.navigation.nextEl=l,g.originalParams.navigation.nextEl=l,g.params.navigation.prevEl=u,g.originalParams.navigation.prevEl=u),Xf(n)&&d&&(g.params.pagination.el=d,g.originalParams.pagination.el=d),Qf(n)&&h&&(g.params.scrollbar.el=h,g.originalParams.scrollbar.el=h),g.init(o)}function nv(i,n,o,l,u){const d=[];if(!n)return d;const h=f=>{d.indexOf(f)<0&&d.push(f)};if(o&&l){const f=l.map(u),S=o.map(u);f.join("")!==S.join("")&&h("children"),l.length!==o.length&&h("children")}return qf.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in i&&f in n)if(Dn(i[f])&&Dn(n[f])){const S=Object.keys(i[f]),v=Object.keys(n[f]);S.length!==v.length?h(f):(S.forEach(y=>{i[f][y]!==n[f][y]&&h(f)}),v.forEach(y=>{i[f][y]!==n[f][y]&&h(f)}))}else i[f]!==n[f]&&h(f)}),d}const rv=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},Qo.apply(this,arguments)}function Zf(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function Jf(i){const n=[];return Ce.Children.toArray(i).forEach(o=>{Zf(o)?n.push(o):o.props&&o.props.children&&Jf(o.props.children).forEach(l=>n.push(l))}),n}function iv(i){const n=[],o={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ce.Children.toArray(i).forEach(l=>{if(Zf(l))n.push(l);else if(l.props&&l.props.slot&&o[l.props.slot])o[l.props.slot].push(l);else if(l.props&&l.props.children){const u=Jf(l.props.children);u.length>0?u.forEach(d=>n.push(d)):o["container-end"].push(l)}else o["container-end"].push(l)}),{slides:n,slots:o}}function ov(i,n,o){if(!o)return null;const l=v=>{let y=v;return v<0?y=n.length+v:y>=n.length&&(y=y-n.length),y},u=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:d,to:h}=o,g=i.params.loop?-n.length:0,f=i.params.loop?n.length*2:n.length,S=[];for(let v=g;v<f;v+=1)v>=d&&v<=h&&S.push(n[l(v)]);return S.map((v,y)=>Ce.cloneElement(v,{swiper:i,style:u,key:v.props.virtualIndex||v.key||`slide-${y}`}))}function pi(i,n){return typeof window>"u"?fe.useEffect(i,n):fe.useLayoutEffect(i,n)}const af=fe.createContext(null),sv=fe.createContext(null),yr=fe.forwardRef(function(i,n){let{className:o,tag:l="div",wrapperTag:u="div",children:d,onSwiper:h,...g}=i===void 0?{}:i,f=!1;const[S,v]=fe.useState("swiper"),[y,T]=fe.useState(null),[b,I]=fe.useState(!1),N=fe.useRef(!1),F=fe.useRef(null),M=fe.useRef(null),E=fe.useRef(null),w=fe.useRef(null),z=fe.useRef(null),O=fe.useRef(null),A=fe.useRef(null),U=fe.useRef(null),{params:K,passedParams:V,rest:G,events:Z}=ev(g),{slides:te,slots:X}=iv(d),oe=()=>{I(!b)};Object.assign(K.on,{_containerClasses(Y,W){v(W)}});const ae=()=>{Object.assign(K.on,Z),f=!0;const Y={...K};if(delete Y.wrapperClass,M.current=new Da(Y),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=te;const W={cache:!1,slides:te,renderExternal:T,renderExternalUpdate:!1};fr(M.current.params.virtual,W),fr(M.current.originalParams.virtual,W)}};F.current||ae(),M.current&&M.current.on("_beforeBreakpoint",oe);const ve=()=>{f||!Z||!M.current||Object.keys(Z).forEach(Y=>{M.current.on(Y,Z[Y])})},we=()=>{!Z||!M.current||Object.keys(Z).forEach(Y=>{M.current.off(Y,Z[Y])})};fe.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",oe)}),fe.useEffect(()=>{!N.current&&M.current&&(M.current.emitSlidesClasses(),N.current=!0)}),pi(()=>{if(n&&(n.current=F.current),!!F.current)return M.current.destroyed&&ae(),tv({el:F.current,nextEl:z.current,prevEl:O.current,paginationEl:A.current,scrollbarEl:U.current,swiper:M.current},K),h&&!M.current.destroyed&&h(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),pi(()=>{ve();const Y=nv(V,E.current,te,w.current,W=>W.key);return E.current=V,w.current=te,Y.length&&M.current&&!M.current.destroyed&&Jg({swiper:M.current,slides:te,passedParams:V,changedParams:Y,nextEl:z.current,prevEl:O.current,scrollbarEl:U.current,paginationEl:A.current}),()=>{we()}}),pi(()=>{rv(M.current)},[y]);function R(){return K.virtual?ov(M.current,te,y):te.map((Y,W)=>Ce.cloneElement(Y,{swiper:M.current,swiperSlideIndex:W}))}return Ce.createElement(l,Qo({ref:F,className:Kf(`${S}${o?` ${o}`:""}`)},G),Ce.createElement(sv.Provider,{value:M.current},X["container-start"],Ce.createElement(u,{className:Zg(K.wrapperClass)},X["wrapper-start"],R(),X["wrapper-end"]),Yf(K)&&Ce.createElement(Ce.Fragment,null,Ce.createElement("div",{ref:O,className:"swiper-button-prev"}),Ce.createElement("div",{ref:z,className:"swiper-button-next"})),Qf(K)&&Ce.createElement("div",{ref:U,className:"swiper-scrollbar"}),Xf(K)&&Ce.createElement("div",{ref:A,className:"swiper-pagination"}),X["container-end"]))});yr.displayName="Swiper";const Oe=fe.forwardRef(function(i,n){let{tag:o="div",children:l,className:u="",swiper:d,zoom:h,lazy:g,virtualIndex:f,swiperSlideIndex:S,...v}=i===void 0?{}:i;const y=fe.useRef(null),[T,b]=fe.useState("swiper-slide"),[I,N]=fe.useState(!1);function F(z,O,A){O===y.current&&b(A)}pi(()=>{if(typeof S<"u"&&(y.current.swiperSlideIndex=S),n&&(n.current=y.current),!(!y.current||!d)){if(d.destroyed){T!=="swiper-slide"&&b("swiper-slide");return}return d.on("_slideClass",F),()=>{d&&d.off("_slideClass",F)}}}),pi(()=>{d&&y.current&&!d.destroyed&&b(d.getSlideClasses(y.current))},[d]);const M={isActive:T.indexOf("swiper-slide-active")>=0,isVisible:T.indexOf("swiper-slide-visible")>=0,isPrev:T.indexOf("swiper-slide-prev")>=0,isNext:T.indexOf("swiper-slide-next")>=0},E=()=>typeof l=="function"?l(M):l,w=()=>{N(!0)};return Ce.createElement(o,Qo({ref:y,className:Kf(`${T}${u?` ${u}`:""}`),"data-swiper-slide-index":f,onLoad:w},v),h&&Ce.createElement(af.Provider,{value:M},Ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof h=="number"?h:void 0},E(),g&&!I&&Ce.createElement("div",{className:"swiper-lazy-preloader"}))),!h&&Ce.createElement(af.Provider,{value:M},E(),g&&!I&&Ce.createElement("div",{className:"swiper-lazy-preloader"})))});Oe.displayName="SwiperSlide";function lv(i,n,o,l){return i.params.createElements&&Object.keys(l).forEach(u=>{if(!o[u]&&o.auto===!0){let d=Rt(i.el,`.${l[u]}`)[0];d||(d=Yo("div",l[u]),d.className=l[u],i.el.append(d)),o[u]=d,n[u]=d}}),o}function ai(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function vi(i){let{swiper:n,extendParams:o,on:l,emit:u}=i;const d="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),n.pagination={el:null,bullets:[]};let h,g=0;function f(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function S(E,w){const{bulletActiveClass:z}=n.params.pagination;E&&(E=E[`${w==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${z}-${w}`),E=E[`${w==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${z}-${w}-${w}`)))}function v(E,w,z){if(E=E%z,w=w%z,w===E+1)return"next";if(w===E-1)return"previous"}function y(E){const w=E.target.closest(ai(n.params.pagination.bulletClass));if(!w)return;E.preventDefault();const z=Xo(w)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===z)return;const O=v(n.realIndex,z,n.slides.length);O==="next"?n.slideNext():O==="previous"?n.slidePrev():n.slideToLoop(z)}else n.slideTo(z)}function T(){const E=n.rtl,w=n.params.pagination;if(f())return;let z=n.pagination.el;z=Yt(z);let O,A;const U=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,K=n.params.loop?Math.ceil(U/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(A=n.previousRealIndex||0,O=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(O=n.snapIndex,A=n.previousSnapIndex):(A=n.previousIndex||0,O=n.activeIndex||0),w.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const V=n.pagination.bullets;let G,Z,te;if(w.dynamicBullets&&(h=Ta(V[0],n.isHorizontal()?"width":"height"),z.forEach(X=>{X.style[n.isHorizontal()?"width":"height"]=`${h*(w.dynamicMainBullets+4)}px`}),w.dynamicMainBullets>1&&A!==void 0&&(g+=O-(A||0),g>w.dynamicMainBullets-1?g=w.dynamicMainBullets-1:g<0&&(g=0)),G=Math.max(O-g,0),Z=G+(Math.min(V.length,w.dynamicMainBullets)-1),te=(Z+G)/2),V.forEach(X=>{const oe=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(ae=>`${w.bulletActiveClass}${ae}`)].map(ae=>typeof ae=="string"&&ae.includes(" ")?ae.split(" "):ae).flat();X.classList.remove(...oe)}),z.length>1)V.forEach(X=>{const oe=Xo(X);oe===O?X.classList.add(...w.bulletActiveClass.split(" ")):n.isElement&&X.setAttribute("part","bullet"),w.dynamicBullets&&(oe>=G&&oe<=Z&&X.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),oe===G&&S(X,"prev"),oe===Z&&S(X,"next"))});else{const X=V[O];if(X&&X.classList.add(...w.bulletActiveClass.split(" ")),n.isElement&&V.forEach((oe,ae)=>{oe.setAttribute("part",ae===O?"bullet-active":"bullet")}),w.dynamicBullets){const oe=V[G],ae=V[Z];for(let ve=G;ve<=Z;ve+=1)V[ve]&&V[ve].classList.add(...`${w.bulletActiveClass}-main`.split(" "));S(oe,"prev"),S(ae,"next")}}if(w.dynamicBullets){const X=Math.min(V.length,w.dynamicMainBullets+4),oe=(h*X-h)/2-te*h,ae=E?"right":"left";V.forEach(ve=>{ve.style[n.isHorizontal()?ae:"top"]=`${oe}px`})}}z.forEach((V,G)=>{if(w.type==="fraction"&&(V.querySelectorAll(ai(w.currentClass)).forEach(Z=>{Z.textContent=w.formatFractionCurrent(O+1)}),V.querySelectorAll(ai(w.totalClass)).forEach(Z=>{Z.textContent=w.formatFractionTotal(K)})),w.type==="progressbar"){let Z;w.progressbarOpposite?Z=n.isHorizontal()?"vertical":"horizontal":Z=n.isHorizontal()?"horizontal":"vertical";const te=(O+1)/K;let X=1,oe=1;Z==="horizontal"?X=te:oe=te,V.querySelectorAll(ai(w.progressbarFillClass)).forEach(ae=>{ae.style.transform=`translate3d(0,0,0) scaleX(${X}) scaleY(${oe})`,ae.style.transitionDuration=`${n.params.speed}ms`})}w.type==="custom"&&w.renderCustom?(V.innerHTML=w.renderCustom(n,O+1,K),G===0&&u("paginationRender",V)):(G===0&&u("paginationRender",V),u("paginationUpdate",V)),n.params.watchOverflow&&n.enabled&&V.classList[n.isLocked?"add":"remove"](w.lockClass)})}function b(){const E=n.params.pagination;if(f())return;const w=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let z=n.pagination.el;z=Yt(z);let O="";if(E.type==="bullets"){let A=n.params.loop?Math.ceil(w/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&A>w&&(A=w);for(let U=0;U<A;U+=1)E.renderBullet?O+=E.renderBullet.call(n,U,E.bulletClass):O+=`<${E.bulletElement} ${n.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?O=E.renderFraction.call(n,E.currentClass,E.totalClass):O=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?O=E.renderProgressbar.call(n,E.progressbarFillClass):O=`<span class="${E.progressbarFillClass}"></span>`),n.pagination.bullets=[],z.forEach(A=>{E.type!=="custom"&&(A.innerHTML=O||""),E.type==="bullets"&&n.pagination.bullets.push(...A.querySelectorAll(ai(E.bulletClass)))}),E.type!=="custom"&&u("paginationRender",z[0])}function I(){n.params.pagination=lv(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const E=n.params.pagination;if(!E.el)return;let w;typeof E.el=="string"&&n.isElement&&(w=n.el.querySelector(E.el)),!w&&typeof E.el=="string"&&(w=[...document.querySelectorAll(E.el)]),w||(w=E.el),!(!w||w.length===0)&&(n.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(w)&&w.length>1&&(w=[...n.el.querySelectorAll(E.el)],w.length>1&&(w=w.filter(z=>Vf(z,".swiper")[0]===n.el)[0])),Array.isArray(w)&&w.length===1&&(w=w[0]),Object.assign(n.pagination,{el:w}),w=Yt(w),w.forEach(z=>{E.type==="bullets"&&E.clickable&&z.classList.add(...(E.clickableClass||"").split(" ")),z.classList.add(E.modifierClass+E.type),z.classList.add(n.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(z.classList.add(`${E.modifierClass}${E.type}-dynamic`),g=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&z.classList.add(E.progressbarOppositeClass),E.clickable&&z.addEventListener("click",y),n.enabled||z.classList.add(E.lockClass)}))}function N(){const E=n.params.pagination;if(f())return;let w=n.pagination.el;w&&(w=Yt(w),w.forEach(z=>{z.classList.remove(E.hiddenClass),z.classList.remove(E.modifierClass+E.type),z.classList.remove(n.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(z.classList.remove(...(E.clickableClass||"").split(" ")),z.removeEventListener("click",y))})),n.pagination.bullets&&n.pagination.bullets.forEach(z=>z.classList.remove(...E.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const E=n.params.pagination;let{el:w}=n.pagination;w=Yt(w),w.forEach(z=>{z.classList.remove(E.horizontalClass,E.verticalClass),z.classList.add(n.isHorizontal()?E.horizontalClass:E.verticalClass)})}),l("init",()=>{n.params.pagination.enabled===!1?M():(I(),b(),T())}),l("activeIndexChange",()=>{typeof n.snapIndex>"u"&&T()}),l("snapIndexChange",()=>{T()}),l("snapGridLengthChange",()=>{b(),T()}),l("destroy",()=>{N()}),l("enable disable",()=>{let{el:E}=n.pagination;E&&(E=Yt(E),E.forEach(w=>w.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),l("lock unlock",()=>{T()}),l("click",(E,w)=>{const z=w.target,O=Yt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&O&&O.length>0&&!z.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&z===n.navigation.nextEl||n.navigation.prevEl&&z===n.navigation.prevEl))return;const A=O[0].classList.contains(n.params.pagination.hiddenClass);u(A===!0?"paginationShow":"paginationHide"),O.forEach(U=>U.classList.toggle(n.params.pagination.hiddenClass))}});const F=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:E}=n.pagination;E&&(E=Yt(E),E.forEach(w=>w.classList.remove(n.params.pagination.paginationDisabledClass))),I(),b(),T()},M=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:E}=n.pagination;E&&(E=Yt(E),E.forEach(w=>w.classList.add(n.params.pagination.paginationDisabledClass))),N()};Object.assign(n.pagination,{enable:F,disable:M,render:b,update:T,init:I,destroy:N})}function xi(i){let{swiper:n,extendParams:o,on:l,emit:u,params:d}=i;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let h,g,f=d&&d.autoplay?d.autoplay.delay:3e3,S=d&&d.autoplay?d.autoplay.delay:3e3,v,y=new Date().getTime(),T,b,I,N,F,M,E;function w(R){!n||n.destroyed||!n.wrapperEl||R.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",w),!(E||R.detail&&R.detail.bySwiperTouchMove)&&G())}const z=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?T=!0:T&&(S=v,T=!1);const R=n.autoplay.paused?v:y+S-new Date().getTime();n.autoplay.timeLeft=R,u("autoplayTimeLeft",R,R/f),g=requestAnimationFrame(()=>{z()})},O=()=>{let R;return n.virtual&&n.params.virtual.enabled?R=n.slides.filter(W=>W.classList.contains("swiper-slide-active"))[0]:R=n.slides[n.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},A=R=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(g),z();let Y=typeof R>"u"?n.params.autoplay.delay:R;f=n.params.autoplay.delay,S=n.params.autoplay.delay;const W=O();!Number.isNaN(W)&&W>0&&typeof R>"u"&&(Y=W,f=W,S=W),v=Y;const j=n.params.speed,D=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,j,!0,!0),u("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(j,!0,!0),u("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,j,!0,!0),u("autoplay")),n.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return Y>0?(clearTimeout(h),h=setTimeout(()=>{D()},Y)):requestAnimationFrame(()=>{D()}),Y},U=()=>{y=new Date().getTime(),n.autoplay.running=!0,A(),u("autoplayStart")},K=()=>{n.autoplay.running=!1,clearTimeout(h),cancelAnimationFrame(g),u("autoplayStop")},V=(R,Y)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(h),R||(M=!0);const W=()=>{u("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",w):G()};if(n.autoplay.paused=!0,Y){F&&(v=n.params.autoplay.delay),F=!1,W();return}v=(v||n.params.autoplay.delay)-(new Date().getTime()-y),!(n.isEnd&&v<0&&!n.params.loop)&&(v<0&&(v=0),W())},G=()=>{n.isEnd&&v<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(y=new Date().getTime(),M?(M=!1,A(v)):A(),n.autoplay.paused=!1,u("autoplayResume"))},Z=()=>{if(n.destroyed||!n.autoplay.running)return;const R=Kt();R.visibilityState==="hidden"&&(M=!0,V(!0)),R.visibilityState==="visible"&&G()},te=R=>{R.pointerType==="mouse"&&(M=!0,E=!0,!(n.animating||n.autoplay.paused)&&V(!0))},X=R=>{R.pointerType==="mouse"&&(E=!1,n.autoplay.paused&&G())},oe=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",te),n.el.addEventListener("pointerleave",X))},ae=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",te),n.el.removeEventListener("pointerleave",X))},ve=()=>{Kt().addEventListener("visibilitychange",Z)},we=()=>{Kt().removeEventListener("visibilitychange",Z)};l("init",()=>{n.params.autoplay.enabled&&(oe(),ve(),U())}),l("destroy",()=>{ae(),we(),n.autoplay.running&&K()}),l("_freeModeStaticRelease",()=>{(I||M)&&G()}),l("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?K():V(!0,!0)}),l("beforeTransitionStart",(R,Y,W)=>{n.destroyed||!n.autoplay.running||(W||!n.params.autoplay.disableOnInteraction?V(!0,!0):K())}),l("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){K();return}b=!0,I=!1,M=!1,N=setTimeout(()=>{M=!0,I=!0,V(!0)},200)}}),l("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!b)){if(clearTimeout(N),clearTimeout(h),n.params.autoplay.disableOnInteraction){I=!1,b=!1;return}I&&n.params.cssMode&&G(),I=!1,b=!1}}),l("slideChange",()=>{n.destroyed||!n.autoplay.running||(F=!0)}),Object.assign(n.autoplay,{start:U,stop:K,pause:V,resume:G})}function rs(i){let{swiper:n,extendParams:o,emit:l,once:u}=i;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(n.params.cssMode)return;const f=n.getTranslate();n.setTranslate(f),n.setTransition(0),n.touchEventsData.velocities.length=0,n.freeMode.onTouchEnd({currentPos:n.rtl?n.translate:-n.translate})}function h(){if(n.params.cssMode)return;const{touchEventsData:f,touches:S}=n;f.velocities.length===0&&f.velocities.push({position:S[n.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:S[n.isHorizontal()?"currentX":"currentY"],time:An()})}function g(f){let{currentPos:S}=f;if(n.params.cssMode)return;const{params:v,wrapperEl:y,rtlTranslate:T,snapGrid:b,touchEventsData:I}=n,F=An()-I.touchStartTime;if(S<-n.minTranslate()){n.slideTo(n.activeIndex);return}if(S>-n.maxTranslate()){n.slides.length<b.length?n.slideTo(b.length-1):n.slideTo(n.slides.length-1);return}if(v.freeMode.momentum){if(I.velocities.length>1){const K=I.velocities.pop(),V=I.velocities.pop(),G=K.position-V.position,Z=K.time-V.time;n.velocity=G/Z,n.velocity/=2,Math.abs(n.velocity)<v.freeMode.minimumVelocity&&(n.velocity=0),(Z>150||An()-K.time>300)&&(n.velocity=0)}else n.velocity=0;n.velocity*=v.freeMode.momentumVelocityRatio,I.velocities.length=0;let M=1e3*v.freeMode.momentumRatio;const E=n.velocity*M;let w=n.translate+E;T&&(w=-w);let z=!1,O;const A=Math.abs(n.velocity)*20*v.freeMode.momentumBounceRatio;let U;if(w<n.maxTranslate())v.freeMode.momentumBounce?(w+n.maxTranslate()<-A&&(w=n.maxTranslate()-A),O=n.maxTranslate(),z=!0,I.allowMomentumBounce=!0):w=n.maxTranslate(),v.loop&&v.centeredSlides&&(U=!0);else if(w>n.minTranslate())v.freeMode.momentumBounce?(w-n.minTranslate()>A&&(w=n.minTranslate()+A),O=n.minTranslate(),z=!0,I.allowMomentumBounce=!0):w=n.minTranslate(),v.loop&&v.centeredSlides&&(U=!0);else if(v.freeMode.sticky){let K;for(let V=0;V<b.length;V+=1)if(b[V]>-w){K=V;break}Math.abs(b[K]-w)<Math.abs(b[K-1]-w)||n.swipeDirection==="next"?w=b[K]:w=b[K-1],w=-w}if(U&&u("transitionEnd",()=>{n.loopFix()}),n.velocity!==0){if(T?M=Math.abs((-w-n.translate)/n.velocity):M=Math.abs((w-n.translate)/n.velocity),v.freeMode.sticky){const K=Math.abs((T?-w:w)-n.translate),V=n.slidesSizesGrid[n.activeIndex];K<V?M=v.speed:K<2*V?M=v.speed*1.5:M=v.speed*2.5}}else if(v.freeMode.sticky){n.slideToClosest();return}v.freeMode.momentumBounce&&z?(n.updateProgress(O),n.setTransition(M),n.setTranslate(w),n.transitionStart(!0,n.swipeDirection),n.animating=!0,sa(y,()=>{!n||n.destroyed||!I.allowMomentumBounce||(l("momentumBounce"),n.setTransition(v.speed),setTimeout(()=>{n.setTranslate(O),sa(y,()=>{!n||n.destroyed||n.transitionEnd()})},0))})):n.velocity?(l("_freeModeNoMomentumRelease"),n.updateProgress(w),n.setTransition(M),n.setTranslate(w),n.transitionStart(!0,n.swipeDirection),n.animating||(n.animating=!0,sa(y,()=>{!n||n.destroyed||n.transitionEnd()}))):n.updateProgress(w),n.updateActiveIndex(),n.updateSlidesClasses()}else if(v.freeMode.sticky){n.slideToClosest();return}else v.freeMode&&l("_freeModeNoMomentumRelease");(!v.freeMode.momentum||F>=v.longSwipesMs)&&(l("_freeModeStaticRelease"),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses())}Object.assign(n,{freeMode:{onTouchStart:d,onTouchMove:h,onTouchEnd:g}})}const av=Q.div`
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
`,uv=Q.section`
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
`,cv=Q.section`
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
`,dv=Q.div`
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
`,fv=Q.div`
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
`,ui=Q(Oe)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,pv=()=>m.jsx(m.Fragment,{children:m.jsxs(uv,{children:[m.jsx(av,{}),m.jsxs(cv,{children:[m.jsxs(dv,{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),m.jsx("a",{href:"#",children:m.jsx(C0,{})})]}),m.jsx(fv,{children:m.jsxs(yr,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[xi,rs,vi],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(ui,{children:m.jsxs("div",{children:[m.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(li,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),m.jsx(ui,{children:m.jsxs("div",{children:[m.jsx(li,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),m.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),m.jsx(ui,{children:m.jsxs("div",{children:[m.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(li,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})}),m.jsx(ui,{children:m.jsxs("div",{children:[m.jsx(li,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."}),m.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."})]})}),m.jsx(ui,{children:m.jsxs("div",{children:[m.jsx(si,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível, porém dependendo do seu projeto, consulte mais em pacotes."}),m.jsx(li,{title:"Velocidade de entrega",description:"O tempo mais acessível para você ter seu projeto em mãos o mais rápido possível."})]})})]})})]})]})}),mv=Q.div`
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
`,ma=()=>m.jsx(mv,{children:m.jsxs(yr,{modules:[xi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})}),hv=Q.button`
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
    
`,ep=()=>m.jsx(m.Fragment,{children:m.jsxs(hv,{id:"click-button",children:[m.jsx("b",{children:"Solicitar orçamento"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"})]})}),gv=Na`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`,vv=Q.section`
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
`,xv=Q.div`
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
`,yv=Q.div`
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
`,wv=Q.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
        animation: ${gv} 2s linear infinite alternate-reverse;
    }
`,Sv=()=>m.jsx(m.Fragment,{children:m.jsxs(vv,{children:[m.jsxs(xv,{children:[m.jsxs("div",{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),m.jsxs("p",{children:["Escolher a qualidade é a melhor escolha, veja nossos ",m.jsx("a",{href:"#",children:"pacotes."})]})]}),m.jsx("div",{children:m.jsx(ep,{})})]}),m.jsx(yv,{children:m.jsxs(yr,{modules:[xi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})}),m.jsx(Oe,{children:m.jsx("a",{href:"#",children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png",alt:"mockup"})})})]})}),m.jsx(wv,{children:m.jsx("a",{href:"#",children:m.jsx(Ff,{})})})]})}),kv=Q.div`
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
`,No=({borderRadius:i,bgColor:n,bBackground:o,icon:l,boldText:u,normalText:d})=>m.jsxs(kv,{borderRadius:i,bgColor:n,bBackground:o,children:[m.jsx("a",{href:"#",children:l?m.jsx(l,{}):m.jsx(z0,{})}),m.jsxs("h4",{children:[m.jsx("b",{children:u||"Texto em Negrito"}),d||"Texto normal de exemplo"]}),m.jsx(Rn,{})]}),Ev=Q.section`
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

`,Cv=Q.div`
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
`,Tv=Q.div`
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
`,bv=Q.div`
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
`,jv=Q.div`
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
`,Pv=Q.div`
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
`,zv=()=>m.jsx(m.Fragment,{children:m.jsxs(Ev,{children:[m.jsx(Cv,{children:m.jsxs("h1",{children:["Para quem ",m.jsx("b",{children:"nós somos?"})]})}),m.jsxs(Tv,{children:[m.jsx(bv,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),m.jsx(No,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Lo,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),m.jsx(No,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Lo,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),m.jsxs(jv,{children:[m.jsx(No,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:Lo,boldText:"Empresas",normalText:"que querem aumentar suas vendas"}),m.jsx(No,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:Lo,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"}),m.jsx(Pv,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})}),_v=Na`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`,Mv=Q.div`
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
    animation: ${({isOpen:i})=>i?_v:"none"} 0.3s ease;
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
`,Pa=({items:i,onTextClick:n})=>{n||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[o,l]=fe.useState(null),u=d=>{console.log(`OpenText clicked: ${d}`),l(o===d?null:d),n&&n(d)};return m.jsx(m.Fragment,{children:i.map((d,h)=>m.jsxs(Mv,{isOpen:o===h,onClick:()=>u(h),children:[m.jsxs("h3",{children:[d.title,m.jsx("span",{className:"arrow",children:m.jsx(P0,{})})]}),m.jsx("div",{className:"content",children:d.text})]},h))})},Lv=Q.div`
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
`,Iv=({images:i,activeIndex:n})=>(console.log("Active Index:",n),console.log("Images Array:",i),n===null||n<0||n>=i.length?m.jsx("div",{children:"Nenhuma imagem selecionada."}):m.jsx(Lv,{children:m.jsx("img",{src:i[n],alt:`Imagem ${n+1}`})})),Ov=Q.div`
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
`,Nv=Q.section`
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
`,Av=Q.section`
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
`,Dv=Q.div`
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
`,Rv=Q.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`,Fv=()=>{const[i,n]=fe.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],l=["https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955150/mockupCell_aefv8r.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1734955151/mockupDesktop_pxgaar.png"],u=d=>{console.log(`Texto clicado: ${d}`),n(d)};return m.jsx(m.Fragment,{children:m.jsxs(Nv,{children:[m.jsx(Ov,{}),m.jsxs(Av,{children:[m.jsxs(Dv,{children:[m.jsxs("h1",{children:[m.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),m.jsx("div",{children:m.jsx(Pa,{items:o,onTextClick:u})}),m.jsx(Rn,{})]}),m.jsx(Rv,{children:m.jsx(Iv,{images:l,activeIndex:i})})]})]})})},Bv=Q.div`
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
`,$v=Q.div`
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
`,Vv=Q.div`
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
`,ci=({logo:i,nota:n,empresa:o,depoimento:l})=>m.jsx(m.Fragment,{children:m.jsxs(Bv,{children:[m.jsxs($v,{children:[m.jsx("img",{src:i}),m.jsxs("div",{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsx("p",{children:n})]})]}),m.jsxs(Vv,{children:[m.jsx("h1",{children:o}),m.jsx("p",{children:l})]})]})}),Gv=Q.section`
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
`,Hv=Q.div`
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
`,Wv=Q.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`,Uv=Q.div`
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
`,qv=Q.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`,Yv=()=>m.jsx(m.Fragment,{children:m.jsxs(Gv,{children:[m.jsx(Hv,{children:m.jsx("h2",{children:"Depoimentos"})}),m.jsx(Wv,{children:m.jsx("a",{href:"#",children:m.jsx(Ff,{})})}),m.jsx(Uv,{children:m.jsxs("h1",{children:["Não tenha dúvidas, ",m.jsx("b",{children:"escolha o certo!"})]})}),m.jsx(qv,{children:m.jsxs(yr,{modules:[xi,vi],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[m.jsx(Oe,{children:m.jsx(ci,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Oe,{children:m.jsx(ci,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Oe,{children:m.jsx(ci,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Oe,{children:m.jsx(ci,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis... Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})}),m.jsx(Oe,{children:m.jsx(ci,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734817357/logoHeader_h5hxl2.png",nota:"4.9",empresa:"Aleph Company",depoimento:"Criei diversos sites com o aleph e sempre tive qualidade e tempo de entrega de acordo como sempre quis..."})})]})})]})}),Xv=Q.div`
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
`,Qv=()=>m.jsx(Xv,{children:m.jsxs(yr,{modules:[xi,rs,vi],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),m.jsx(Oe,{children:m.jsxs("div",{children:[m.jsx("h3",{children:"Faça seu site conosco"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})}),Kv=Q.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,Zv=Q.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`,Jv=Q.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`,e1=Q.div`
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
`,t1=Q.div`
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
`,n1=Q.div`
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
`,ha=({promoBold:i,promo:n,valor:o,servico:l,listItems:u=[]})=>m.jsxs(Kv,{children:[m.jsx(Zv,{}),m.jsxs(Jv,{children:[m.jsx(e1,{children:m.jsxs("h4",{children:[m.jsx("b",{children:i})," ",n]})}),m.jsxs(t1,{children:[m.jsx("h1",{children:l}),m.jsxs("div",{children:[m.jsx("p",{children:"Economize agora"}),m.jsx("span",{children:o})]}),m.jsx(Rn,{})]})]}),m.jsx(n1,{children:m.jsx("ol",{children:u.map((d,h)=>m.jsx("li",{children:d},h))})})]}),r1=Q.section`
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
`,i1=Q.div`
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
`,o1=Q.div`
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

`,s1=()=>m.jsx(m.Fragment,{children:m.jsxs(r1,{children:[m.jsx(i1,{children:m.jsxs("h1",{children:["O que ",m.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),m.jsxs(o1,{children:[m.jsx("div",{children:m.jsx(ha,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"E-commerce",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(ha,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Landing Page",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})}),m.jsx("div",{children:m.jsx(ha,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$ 890,90",servico:"Institucional",listItems:["Ideal para capturar leads","Converter leads em vendas orgânicas","Aumentar visibilidade online","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção","Garantir suporte e manutenção"]})})]})]})}),l1=Q.section`
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
`,a1=Q.div`
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
`,u1=Q.div`
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
`,c1=Q.div`
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
`,d1=()=>m.jsx(m.Fragment,{children:m.jsx(l1,{children:m.jsxs(a1,{children:[m.jsxs(u1,{children:[m.jsx("h1",{children:"Torne-se nosso parceiro"}),m.jsx("p",{children:"Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248919/whitePacerias_x9oj45.png"})]}),m.jsxs(c1,{children:[m.jsxs("ol",{children:[m.jsxs("li",{children:[m.jsx(j0,{}),"Descontos exclusivos"]}),m.jsxs("li",{children:[m.jsx(_0,{}),"Manutenção estendida"]}),m.jsxs("li",{children:[m.jsx(T0,{}),"Prioridade de entrega"]}),m.jsxs("li",{children:[m.jsx(b0,{}),"Feito para empresas"]})]}),m.jsx(ep,{})]})]})})}),f1=Q.div`
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
`,p1=Q.section`
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
`,m1=Q.section`
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
`,h1=Q.div`
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
`,g1=Q.div`
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
`,v1=()=>{const[i,n]=fe.useState(0),o=[{title:"Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],l=[{title:"2Comunicação facilitada",text:"Aqui você resolve tudo diretamente com o desenvolvedor, o que você precisar e quando precisar, trazendo mais eficiência e clareza em suas necessidades"},{title:"2Manutenção gratuita",text:"Garantimos suporte gratuito por 12 meses."},{title:"2Aprenda a mexer no seu site",text:"Receba treinamentos para gerenciar o seu site."},{title:"2Descontos em outros serviços",text:"Aproveite descontos exclusivos."}],u=d=>{console.log(`Texto clicado: ${d}`),n(d)};return m.jsx(m.Fragment,{children:m.jsxs(p1,{children:[m.jsx(f1,{}),m.jsxs(m1,{children:[m.jsxs(h1,{children:[m.jsx("h1",{children:"Ficou com dúvidas?"}),m.jsx("p",{children:"Veja as perguntas mais recorrentes"})]}),m.jsxs(g1,{children:[m.jsx("div",{children:m.jsx(Pa,{items:o,onTextClick:u})}),m.jsx("div",{children:m.jsx(Pa,{items:l,onTextClick:u})})]}),m.jsx(Rn,{})]})]})})},x1=Q.footer`
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
`,y1=()=>m.jsx(m.Fragment,{children:m.jsxs(x1,{children:[m.jsx("p",{children:"Todos os direitos reservados | desde 2024"}),m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),m.jsxs("p",{children:["Desenvolvido por ",m.jsx("a",{href:"#",children:" Aleph "})]})]})}),w1=Q.div`
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
`,S1=Q.section`
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
`,k1=Q.section`
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
`,E1=Q.div`
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
`,C1=Q.div`
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
`,T1=()=>m.jsx(m.Fragment,{children:m.jsxs(S1,{children:[m.jsx(w1,{}),m.jsxs(k1,{children:[m.jsxs(E1,{children:[m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"}),m.jsxs("h1",{children:["Entre em ",m.jsx("b",{children:"contato"})," conosco"]}),m.jsx("p",{children:"Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados"}),m.jsxs("form",{id:"contactForm",children:[m.jsxs("label",{children:["Seu Nome",m.jsx("input",{type:"text",id:"name",placeholder:"Aleph Silva Ramos",required:!0})]}),m.jsxs("label",{children:["Seu e-mail",m.jsx("input",{type:"email",id:"email",placeholder:"aleph@gmail.com",required:!0})]}),m.jsxs("label",{children:["WhatsApp",m.jsx("input",{type:"tel",id:"tel",placeholder:"24981411940",required:!0})]}),m.jsx("button",{type:"submit",children:"Enviar e entrar em contato"}),m.jsx("span",{children:"*Usaremos essas informações apenas para fins de contato"})]})]}),m.jsx(C1,{children:m.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png"})}),m.jsx(y1,{})]})]})});function b1(i){return Mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function j1(i){return Mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(i)}const P1=Na`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,z1=Q.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,_1=Q.button`
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
`,M1=Q.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #fbfbfb;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${P1} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--comfortaa);
`,L1=Q.button`
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
  left: 50%;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #b10000;
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
`,I1=Q.div`
  background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d8641711-b18b-4d15-33a0-110225c0cc00/public');
  border-radius: 20px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--comfortaa)!important;
`,uf=Q.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${i=>i.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--comfortaa)!important;
`,O1=Q.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${i=>i.sent?"0":"8px"};
  margin-left: ${i=>i.sent?"8px":"0"};
`,N1=Q.div`
  display: flex;
  flex-direction: column;
  background-color: ${i=>i.sent?"#dcf8c6":"#ffffff"};
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--comfortaa)!important;
  font-size: 12px;
`,A1=Q.div`
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: var(--font--comfortaa)!important;
`,D1=Q.div`
  display: inline-block;
  font-size: 14px;
  font-style: italic;
  color: #b6b6b6;
  font-family: var(--font--comfortaa)!important;

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
`,R1=Q.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--comfortaa)!important;
`,F1=Q.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 12px;
  font-family: var(--font--comfortaa)!important;

  &::placeholder{
    font-size: 12px!important;
    font-weight: 200!important;
  }
`,B1=Q.button`
  padding: 8px 15px;
  background-color: #00d757;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: var(--font--comfortaa)!important;
  font-weight: 300;

  &:hover {
    background-color: #00b94a;
  }
`,$1=({footerRendered:i})=>{const[n,o]=fe.useState(!1),[l,u]=fe.useState(""),[d,h]=fe.useState([]),[g,f]=fe.useState(!1),[S,v]=fe.useState("Número inválido"),[y,T]=fe.useState(!1),[b,I]=fe.useState(!1),N="https://wa.link/dojlwi",F="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c41f0fe-aedf-44cf-d36f-47c09d855d00/public";fe.useEffect(()=>{if(i){const z=setTimeout(()=>{o(!0),h([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},2e3);return()=>clearTimeout(z)}},[i]);const M=async()=>{if(l.trim()==="")return;const z={id:Date.now(),text:l,sent:!0};h(A=>[...A,z]);const O=l.trim();if(u(""),f(!0),!y&&S==="Número inválido"){setTimeout(()=>{f(!1),h(A=>[...A,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),T(!0)},1500);return}if(y&&S==="Número inválido"){const A=/^\d+$/.test(O),U=A?O:"Número inválido";v(U),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"userPhoneCaptured",phoneNumber:U}),setTimeout(()=>{f(!1),h(K=>[...K,{id:Date.now(),text:A?m.jsxs("span",{children:["Muito obrigado, aumigo🐕!",m.jsx("br",{}),m.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{I(!0)},500),T(!1)},1500);return}f(!1)},E=z=>{z.key==="Enter"&&M()},w=()=>{o(!1)};return m.jsxs(z1,{children:[m.jsx(_1,{onClick:()=>window.open(N,"_blank"),id:"clickwpp",children:m.jsx(b1,{id:"clickwpp"})}),n&&m.jsxs(M1,{children:[m.jsx(L1,{onClick:w,children:m.jsx(j1,{})}),m.jsxs(I1,{children:[d.map(z=>m.jsxs(uf,{sent:z.sent,children:[!z.sent&&m.jsx(O1,{src:F,alt:"Bot"}),m.jsxs(N1,{sent:z.sent,children:[!z.sent&&m.jsx(A1,{children:"Pousada Le Ange"}),m.jsx("div",{children:z.text})]})]},z.id)),g&&m.jsx(uf,{children:m.jsx(D1,{})})]}),!b&&m.jsxs(R1,{children:[m.jsx(F1,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:l,onChange:z=>u(z.target.value),onKeyDown:E}),m.jsx(B1,{onClick:M,children:"Enviar"})]})]})]})},V1=()=>m.jsxs(m.Fragment,{children:[m.jsx(l0,{}),m.jsx(g0,{}),m.jsx(pv,{}),m.jsx(ma,{}),m.jsx(Sv,{}),m.jsx(zv,{}),m.jsx(ma,{}),m.jsx(Fv,{}),m.jsx(Yv,{}),m.jsx(Qv,{}),m.jsx(s1,{}),m.jsx(d1,{}),m.jsx(ma,{}),m.jsx(v1,{}),m.jsx(T1,{}),m.jsx($1,{})]});function G1(){return m.jsx(m.Fragment,{children:m.jsx(V1,{})})}oh.createRoot(document.getElementById("root")).render(m.jsx(fe.StrictMode,{children:m.jsx(G1,{})}));
