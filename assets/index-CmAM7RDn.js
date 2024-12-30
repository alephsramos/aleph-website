(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function Zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uc={exports:{}},vs={},Gc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function E1(){if(kh)return Se;kh=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,O={};function L(I,B,ue){this.props=I,this.context=B,this.refs=O,this.updater=ue||x}L.prototype.isReactComponent={},L.prototype.setState=function(I,B){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,B,"setState")},L.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=L.prototype;function T(I,B,ue){this.props=I,this.context=B,this.refs=O,this.updater=ue||x}var E=T.prototype=new P;E.constructor=T,b(E,L.prototype),E.isPureReactComponent=!0;var N=Array.isArray,j=Object.prototype.hasOwnProperty,D={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function W(I,B,ue){var ce,ve={},he=null,me=null;if(B!=null)for(ce in B.ref!==void 0&&(me=B.ref),B.key!==void 0&&(he=""+B.key),B)j.call(B,ce)&&!Q.hasOwnProperty(ce)&&(ve[ce]=B[ce]);var le=arguments.length-2;if(le===1)ve.children=ue;else if(1<le){for(var we=Array(le),De=0;De<le;De++)we[De]=arguments[De+2];ve.children=we}if(I&&I.defaultProps)for(ce in le=I.defaultProps,le)ve[ce]===void 0&&(ve[ce]=le[ce]);return{$$typeof:t,type:I,key:he,ref:me,props:ve,_owner:D.current}}function H(I,B){return{$$typeof:t,type:I.type,key:B,ref:I.ref,props:I.props,_owner:I._owner}}function U(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function F(I){var B={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ue){return B[ue]})}var z=/\/+/g;function $(I,B){return typeof I=="object"&&I!==null&&I.key!=null?F(""+I.key):B.toString(36)}function q(I,B,ue,ce,ve){var he=typeof I;(he==="undefined"||he==="boolean")&&(I=null);var me=!1;if(I===null)me=!0;else switch(he){case"string":case"number":me=!0;break;case"object":switch(I.$$typeof){case t:case e:me=!0}}if(me)return me=I,ve=ve(me),I=ce===""?"."+$(me,0):ce,N(ve)?(ue="",I!=null&&(ue=I.replace(z,"$&/")+"/"),q(ve,B,ue,"",function(De){return De})):ve!=null&&(U(ve)&&(ve=H(ve,ue+(!ve.key||me&&me.key===ve.key?"":(""+ve.key).replace(z,"$&/")+"/")+I)),B.push(ve)),1;if(me=0,ce=ce===""?".":ce+":",N(I))for(var le=0;le<I.length;le++){he=I[le];var we=ce+$(he,le);me+=q(he,B,ue,we,ve)}else if(we=_(I),typeof we=="function")for(I=we.call(I),le=0;!(he=I.next()).done;)he=he.value,we=ce+$(he,le++),me+=q(he,B,ue,we,ve);else if(he==="object")throw B=String(I),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return me}function ie(I,B,ue){if(I==null)return I;var ce=[],ve=0;return q(I,ce,"","",function(he){return B.call(ue,he,ve++)}),ce}function ge(I){if(I._status===-1){var B=I._result;B=B(),B.then(function(ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=ue)},function(ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=ue)}),I._status===-1&&(I._status=0,I._result=B)}if(I._status===1)return I._result.default;throw I._result}var _e={current:null},V={transition:null},J={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:V,ReactCurrentOwner:D};function K(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ie,forEach:function(I,B,ue){ie(I,function(){B.apply(this,arguments)},ue)},count:function(I){var B=0;return ie(I,function(){B++}),B},toArray:function(I){return ie(I,function(B){return B})||[]},only:function(I){if(!U(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Se.Component=L,Se.Fragment=r,Se.Profiler=o,Se.PureComponent=T,Se.StrictMode=s,Se.Suspense=f,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Se.act=K,Se.cloneElement=function(I,B,ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ce=b({},I.props),ve=I.key,he=I.ref,me=I._owner;if(B!=null){if(B.ref!==void 0&&(he=B.ref,me=D.current),B.key!==void 0&&(ve=""+B.key),I.type&&I.type.defaultProps)var le=I.type.defaultProps;for(we in B)j.call(B,we)&&!Q.hasOwnProperty(we)&&(ce[we]=B[we]===void 0&&le!==void 0?le[we]:B[we])}var we=arguments.length-2;if(we===1)ce.children=ue;else if(1<we){le=Array(we);for(var De=0;De<we;De++)le[De]=arguments[De+2];ce.children=le}return{$$typeof:t,type:I.type,key:ve,ref:he,props:ce,_owner:me}},Se.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Se.createElement=W,Se.createFactory=function(I){var B=W.bind(null,I);return B.type=I,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:p,render:I}},Se.isValidElement=U,Se.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ge}},Se.memo=function(I,B){return{$$typeof:m,type:I,compare:B===void 0?null:B}},Se.startTransition=function(I){var B=V.transition;V.transition={};try{I()}finally{V.transition=B}},Se.unstable_act=K,Se.useCallback=function(I,B){return _e.current.useCallback(I,B)},Se.useContext=function(I){return _e.current.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I){return _e.current.useDeferredValue(I)},Se.useEffect=function(I,B){return _e.current.useEffect(I,B)},Se.useId=function(){return _e.current.useId()},Se.useImperativeHandle=function(I,B,ue){return _e.current.useImperativeHandle(I,B,ue)},Se.useInsertionEffect=function(I,B){return _e.current.useInsertionEffect(I,B)},Se.useLayoutEffect=function(I,B){return _e.current.useLayoutEffect(I,B)},Se.useMemo=function(I,B){return _e.current.useMemo(I,B)},Se.useReducer=function(I,B,ue){return _e.current.useReducer(I,B,ue)},Se.useRef=function(I){return _e.current.useRef(I)},Se.useState=function(I){return _e.current.useState(I)},Se.useSyncExternalStore=function(I,B,ue){return _e.current.useSyncExternalStore(I,B,ue)},Se.useTransition=function(){return _e.current.useTransition()},Se.version="18.3.1",Se}var Ih;function ed(){return Ih||(Ih=1,Gc.exports=E1()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function b1(){if(Ph)return vs;Ph=1;var t=ed(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(p,f,m){var g,y={},_=null,x=null;m!==void 0&&(_=""+m),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(x=f.ref);for(g in f)s.call(f,g)&&!l.hasOwnProperty(g)&&(y[g]=f[g]);if(p&&p.defaultProps)for(g in f=p.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:e,type:p,key:_,ref:x,props:y,_owner:o.current}}return vs.Fragment=r,vs.jsx=u,vs.jsxs=u,vs}var Nh;function C1(){return Nh||(Nh=1,Uc.exports=b1()),Uc.exports}var v=C1(),pe=ed();const Pe=Zm(pe);var ta={},qc={exports:{}},It={},Yc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function T1(){return Mh||(Mh=1,function(t){function e(V,J){var K=V.length;V.push(J);e:for(;0<K;){var I=K-1>>>1,B=V[I];if(0<o(B,J))V[I]=J,V[K]=B,K=I;else break e}}function r(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var J=V[0],K=V.pop();if(K!==J){V[0]=K;e:for(var I=0,B=V.length,ue=B>>>1;I<ue;){var ce=2*(I+1)-1,ve=V[ce],he=ce+1,me=V[he];if(0>o(ve,K))he<B&&0>o(me,ve)?(V[I]=me,V[he]=K,I=he):(V[I]=ve,V[ce]=K,I=ce);else if(he<B&&0>o(me,K))V[I]=me,V[he]=K,I=he;else break e}}return J}function o(V,J){var K=V.sortIndex-J.sortIndex;return K!==0?K:V.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();t.unstable_now=function(){return u.now()-p}}var f=[],m=[],g=1,y=null,_=3,x=!1,b=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var J=r(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=V)s(m),J.sortIndex=J.expirationTime,e(f,J);else break;J=r(m)}}function N(V){if(O=!1,E(V),!b)if(r(f)!==null)b=!0,ge(j);else{var J=r(m);J!==null&&_e(N,J.startTime-V)}}function j(V,J){b=!1,O&&(O=!1,P(W),W=-1),x=!0;var K=_;try{for(E(J),y=r(f);y!==null&&(!(y.expirationTime>J)||V&&!F());){var I=y.callback;if(typeof I=="function"){y.callback=null,_=y.priorityLevel;var B=I(y.expirationTime<=J);J=t.unstable_now(),typeof B=="function"?y.callback=B:y===r(f)&&s(f),E(J)}else s(f);y=r(f)}if(y!==null)var ue=!0;else{var ce=r(m);ce!==null&&_e(N,ce.startTime-J),ue=!1}return ue}finally{y=null,_=K,x=!1}}var D=!1,Q=null,W=-1,H=5,U=-1;function F(){return!(t.unstable_now()-U<H)}function z(){if(Q!==null){var V=t.unstable_now();U=V;var J=!0;try{J=Q(!0,V)}finally{J?$():(D=!1,Q=null)}}else D=!1}var $;if(typeof T=="function")$=function(){T(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ie=q.port2;q.port1.onmessage=z,$=function(){ie.postMessage(null)}}else $=function(){L(z,0)};function ge(V){Q=V,D||(D=!0,$())}function _e(V,J){W=L(function(){V(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){b||x||(b=!0,ge(j))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return r(f)},t.unstable_next=function(V){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var K=_;_=J;try{return V()}finally{_=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,J){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=_;_=V;try{return J()}finally{_=K}},t.unstable_scheduleCallback=function(V,J,K){var I=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?I+K:I):K=I,V){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=K+B,V={id:g++,callback:J,priorityLevel:V,startTime:K,expirationTime:B,sortIndex:-1},K>I?(V.sortIndex=K,e(m,V),r(f)===null&&V===r(m)&&(O?(P(W),W=-1):O=!0,_e(N,K-I))):(V.sortIndex=B,e(f,V),b||x||(b=!0,ge(j))),V},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(V){var J=_;return function(){var K=_;_=J;try{return V.apply(this,arguments)}finally{_=K}}}}(Kc)),Kc}var Oh;function k1(){return Oh||(Oh=1,Yc.exports=T1()),Yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function I1(){if(Ah)return It;Ah=1;var t=ed(),e=k1();function r(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function _(n){return f.call(y,n)?!0:f.call(g,n)?!1:m.test(n)?y[n]=!0:(g[n]=!0,!1)}function x(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||x(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(n,i,a,c,d,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){L[n]=new O(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];L[i]=new O(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){L[n]=new O(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){L[n]=new O(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){L[n]=new O(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){L[n]=new O(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){L[n]=new O(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){L[n]=new O(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){L[n]=new O(n,5,!1,n.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(P,T);L[i]=new O(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(P,T);L[i]=new O(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(P,T);L[i]=new O(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){L[n]=new O(n,1,!1,n.toLowerCase(),null,!1,!1)}),L.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){L[n]=new O(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,i,a,c){var d=L.hasOwnProperty(i)?L[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),D=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),F=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),V=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,I;function B(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var ue=!1;function ce(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){var c=R}Reflect.construct(n,[],i)}else{try{i.call()}catch(R){c=R}n.call(i.prototype)}else{try{throw Error()}catch(R){c=R}n()}}catch(R){if(R&&c&&typeof R.stack=="string"){for(var d=R.stack.split(`
`),h=c.stack.split(`
`),w=d.length-1,S=h.length-1;1<=w&&0<=S&&d[w]!==h[S];)S--;for(;1<=w&&0<=S;w--,S--)if(d[w]!==h[S]){if(w!==1||S!==1)do if(w--,S--,0>S||d[w]!==h[S]){var C=`
`+d[w].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=w&&0<=S);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function ve(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=ce(n.type,!1),n;case 11:return n=ce(n.type.render,!1),n;case 1:return n=ce(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Q:return"Fragment";case D:return"Portal";case H:return"Profiler";case W:return"StrictMode";case $:return"Suspense";case q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case U:return(n._context.displayName||"Context")+".Provider";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=we(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,h.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rt(n){n._valueTracker||(n._valueTracker=De(n))}function Ke(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=we(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Re(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ke(n,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Kt(n,i){i=i.checked,i!=null&&E(n,"checked",i,!1)}function Rr(n,i){Kt(n,i);var a=le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?el(n,i.type,a):i.hasOwnProperty("defaultValue")&&el(n,i.type,le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function jd(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function el(n,i,a){(i!=="number"||Re(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Oi=Array.isArray;function jr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function tl(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dd(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(r(92));if(Oi(a)){if(1<a.length)throw Error(r(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:le(a)}}function Ld(n,i){var a=le(i.value),c=le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zd(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Fd(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Fd(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Gs,Bd=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ai(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(n){Iv.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ri[i]=Ri[n]})});function $d(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ri.hasOwnProperty(n)&&Ri[n]?(""+i).trim():i+"px"}function Vd(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=$d(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Pv=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(n,i){if(i){if(Pv[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function il(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function ol(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var al=null,Dr=null,Lr=null;function Hd(n){if(n=ns(n)){if(typeof al!="function")throw Error(r(280));var i=n.stateNode;i&&(i=go(i),al(n.stateNode,n.type,i))}}function Wd(n){Dr?Lr?Lr.push(n):Lr=[n]:Dr=n}function Ud(){if(Dr){var n=Dr,i=Lr;if(Lr=Dr=null,Hd(n),i)for(n=0;n<i.length;n++)Hd(i[n])}}function Gd(n,i){return n(i)}function qd(){}var ll=!1;function Yd(n,i,a){if(ll)return n(i,a);ll=!0;try{return Gd(n,i,a)}finally{ll=!1,(Dr!==null||Lr!==null)&&(qd(),Ud())}}function ji(n,i){var a=n.stateNode;if(a===null)return null;var c=go(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var cl=!1;if(p)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{cl=!1}function Nv(n,i,a,c,d,h,w,S,C){var R=Array.prototype.slice.call(arguments,3);try{i.apply(a,R)}catch(Y){this.onError(Y)}}var Li=!1,qs=null,Ys=!1,ul=null,Mv={onError:function(n){Li=!0,qs=n}};function Ov(n,i,a,c,d,h,w,S,C){Li=!1,qs=null,Nv.apply(Mv,arguments)}function Av(n,i,a,c,d,h,w,S,C){if(Ov.apply(this,arguments),Li){if(Li){var R=qs;Li=!1,qs=null}else throw Error(r(198));Ys||(Ys=!0,ul=R)}}function sr(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Kd(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Qd(n){if(sr(n)!==n)throw Error(r(188))}function Rv(n){var i=n.alternate;if(!i){if(i=sr(n),i===null)throw Error(r(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return Qd(d),n;if(h===c)return Qd(d),i;h=h.sibling}throw Error(r(188))}if(a.return!==c.return)a=d,c=h;else{for(var w=!1,S=d.child;S;){if(S===a){w=!0,a=d,c=h;break}if(S===c){w=!0,c=d,a=h;break}S=S.sibling}if(!w){for(S=h.child;S;){if(S===a){w=!0,a=h,c=d;break}if(S===c){w=!0,c=h,a=d;break}S=S.sibling}if(!w)throw Error(r(189))}}if(a.alternate!==c)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:i}function Xd(n){return n=Rv(n),n!==null?Jd(n):null}function Jd(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Jd(n);if(i!==null)return i;n=n.sibling}return null}var Zd=e.unstable_scheduleCallback,ef=e.unstable_cancelCallback,jv=e.unstable_shouldYield,Dv=e.unstable_requestPaint,Qe=e.unstable_now,Lv=e.unstable_getCurrentPriorityLevel,dl=e.unstable_ImmediatePriority,tf=e.unstable_UserBlockingPriority,Ks=e.unstable_NormalPriority,zv=e.unstable_LowPriority,nf=e.unstable_IdlePriority,Qs=null,an=null;function Fv(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Qs,n,void 0,(n.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Vv,Bv=Math.log,$v=Math.LN2;function Vv(n){return n>>>=0,n===0?32:31-(Bv(n)/$v|0)|0}var Xs=64,Js=4194304;function zi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zs(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,h=n.pingedLanes,w=a&268435455;if(w!==0){var S=w&~d;S!==0?c=zi(S):(h&=w,h!==0&&(c=zi(h)))}else w=a&~d,w!==0?c=zi(w):h!==0&&(c=zi(h));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Qt(i),d=1<<a,c|=n[a],i&=~d;return c}function Hv(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wv(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,h=n.pendingLanes;0<h;){var w=31-Qt(h),S=1<<w,C=d[w];C===-1?(!(S&a)||S&c)&&(d[w]=Hv(S,i)):C<=i&&(n.expiredLanes|=S),h&=~S}}function fl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function rf(){var n=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),n}function pl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Qt(i),n[i]=a}function Uv(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Qt(a),h=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~h}}function hl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Qt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Oe=0;function sf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var of,ml,af,lf,cf,gl=!1,eo=[],Rn=null,jn=null,Dn=null,Bi=new Map,$i=new Map,Ln=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(n,i){switch(n){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(i.pointerId)}}function Vi(n,i,a,c,d,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=ns(i),i!==null&&ml(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function qv(n,i,a,c,d){switch(i){case"focusin":return Rn=Vi(Rn,n,i,a,c,d),!0;case"dragenter":return jn=Vi(jn,n,i,a,c,d),!0;case"mouseover":return Dn=Vi(Dn,n,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return Bi.set(h,Vi(Bi.get(h)||null,n,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,$i.set(h,Vi($i.get(h)||null,n,i,a,c,d)),!0}return!1}function df(n){var i=or(n.target);if(i!==null){var a=sr(i);if(a!==null){if(i=a.tag,i===13){if(i=Kd(a),i!==null){n.blockedOn=i,cf(n.priority,function(){af(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function to(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);sl=c,a.target.dispatchEvent(c),sl=null}else return i=ns(a),i!==null&&ml(i),n.blockedOn=a,!1;i.shift()}return!0}function ff(n,i,a){to(n)&&a.delete(i)}function Yv(){gl=!1,Rn!==null&&to(Rn)&&(Rn=null),jn!==null&&to(jn)&&(jn=null),Dn!==null&&to(Dn)&&(Dn=null),Bi.forEach(ff),$i.forEach(ff)}function Hi(n,i){n.blockedOn===i&&(n.blockedOn=null,gl||(gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yv)))}function Wi(n){function i(d){return Hi(d,n)}if(0<eo.length){Hi(eo[0],n);for(var a=1;a<eo.length;a++){var c=eo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rn!==null&&Hi(Rn,n),jn!==null&&Hi(jn,n),Dn!==null&&Hi(Dn,n),Bi.forEach(i),$i.forEach(i),a=0;a<Ln.length;a++)c=Ln[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ln.length&&(a=Ln[0],a.blockedOn===null);)df(a),a.blockedOn===null&&Ln.shift()}var zr=N.ReactCurrentBatchConfig,no=!0;function Kv(n,i,a,c){var d=Oe,h=zr.transition;zr.transition=null;try{Oe=1,vl(n,i,a,c)}finally{Oe=d,zr.transition=h}}function Qv(n,i,a,c){var d=Oe,h=zr.transition;zr.transition=null;try{Oe=4,vl(n,i,a,c)}finally{Oe=d,zr.transition=h}}function vl(n,i,a,c){if(no){var d=yl(n,i,a,c);if(d===null)jl(n,i,c,ro,a),uf(n,c);else if(qv(d,n,i,a,c))c.stopPropagation();else if(uf(n,c),i&4&&-1<Gv.indexOf(n)){for(;d!==null;){var h=ns(d);if(h!==null&&of(h),h=yl(n,i,a,c),h===null&&jl(n,i,c,ro,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else jl(n,i,c,null,a)}}var ro=null;function yl(n,i,a,c){if(ro=null,n=ol(c),n=or(n),n!==null)if(i=sr(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Kd(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ro=n,null}function pf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case dl:return 1;case tf:return 4;case Ks:case zv:return 16;case nf:return 536870912;default:return 16}default:return 16}}var zn=null,wl=null,io=null;function hf(){if(io)return io;var n,i=wl,a=i.length,c,d="value"in zn?zn.value:zn.textContent,h=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[h-c];c++);return io=d.slice(n,1<c?1-c:void 0)}function so(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function oo(){return!0}function mf(){return!1}function At(n){function i(a,c,d,h,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(h):h[S]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:mf,this.isPropagationStopped=mf,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=At(Fr),Ui=K({},Fr,{view:0,detail:0}),Xv=At(Ui),xl,Sl,Gi,ao=K({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gi&&(Gi&&n.type==="mousemove"?(xl=n.screenX-Gi.screenX,Sl=n.screenY-Gi.screenY):Sl=xl=0,Gi=n),xl)},movementY:function(n){return"movementY"in n?n.movementY:Sl}}),gf=At(ao),Jv=K({},ao,{dataTransfer:0}),Zv=At(Jv),ey=K({},Ui,{relatedTarget:0}),El=At(ey),ty=K({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=At(ty),ry=K({},Fr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),iy=At(ry),sy=K({},Fr,{data:0}),vf=At(sy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ly[n])?!!i[n]:!1}function bl(){return cy}var uy=K({},Ui,{key:function(n){if(n.key){var i=oy[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=so(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ay[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(n){return n.type==="keypress"?so(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?so(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dy=At(uy),fy=K({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=At(fy),py=K({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),hy=At(py),my=K({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=At(my),vy=K({},ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=At(vy),wy=[9,13,27,32],Cl=p&&"CompositionEvent"in window,qi=null;p&&"documentMode"in document&&(qi=document.documentMode);var _y=p&&"TextEvent"in window&&!qi,wf=p&&(!Cl||qi&&8<qi&&11>=qi),_f=" ",xf=!1;function Sf(n,i){switch(n){case"keyup":return wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Br=!1;function xy(n,i){switch(n){case"compositionend":return Ef(i);case"keypress":return i.which!==32?null:(xf=!0,_f);case"textInput":return n=i.data,n===_f&&xf?null:n;default:return null}}function Sy(n,i){if(Br)return n==="compositionend"||!Cl&&Sf(n,i)?(n=hf(),io=wl=zn=null,Br=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wf&&i.locale!=="ko"?null:i.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ey[n.type]:i==="textarea"}function Cf(n,i,a,c){Wd(c),i=po(i,"onChange"),0<i.length&&(a=new _l("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Yi=null,Ki=null;function by(n){Hf(n,0)}function lo(n){var i=Ur(n);if(Ke(i))return n}function Cy(n,i){if(n==="change")return i}var Tf=!1;if(p){var Tl;if(p){var kl="oninput"in document;if(!kl){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),kl=typeof kf.oninput=="function"}Tl=kl}else Tl=!1;Tf=Tl&&(!document.documentMode||9<document.documentMode)}function If(){Yi&&(Yi.detachEvent("onpropertychange",Pf),Ki=Yi=null)}function Pf(n){if(n.propertyName==="value"&&lo(Ki)){var i=[];Cf(i,Ki,n,ol(n)),Yd(by,i)}}function Ty(n,i,a){n==="focusin"?(If(),Yi=i,Ki=a,Yi.attachEvent("onpropertychange",Pf)):n==="focusout"&&If()}function ky(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lo(Ki)}function Iy(n,i){if(n==="click")return lo(i)}function Py(n,i){if(n==="input"||n==="change")return lo(i)}function Ny(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Xt=typeof Object.is=="function"?Object.is:Ny;function Qi(n,i){if(Xt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!f.call(i,d)||!Xt(n[d],i[d]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mf(n,i){var a=Nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Of(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Of(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Af(){for(var n=window,i=Re();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Re(n.document)}return i}function Il(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function My(n){var i=Af(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(c!==null&&Il(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!n.extend&&h>c&&(d=c,c=h,h=d),d=Mf(a,h);var w=Mf(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),h>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Oy=p&&"documentMode"in document&&11>=document.documentMode,$r=null,Pl=null,Xi=null,Nl=!1;function Rf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nl||$r==null||$r!==Re(c)||(c=$r,"selectionStart"in c&&Il(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xi&&Qi(Xi,c)||(Xi=c,c=po(Pl,"onSelect"),0<c.length&&(i=new _l("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$r)))}function co(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Vr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Ml={},jf={};p&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function uo(n){if(Ml[n])return Ml[n];if(!Vr[n])return n;var i=Vr[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in jf)return Ml[n]=i[a];return n}var Df=uo("animationend"),Lf=uo("animationiteration"),zf=uo("animationstart"),Ff=uo("transitionend"),Bf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(n,i){Bf.set(n,i),l(i,[n])}for(var Ol=0;Ol<$f.length;Ol++){var Al=$f[Ol],Ay=Al.toLowerCase(),Ry=Al[0].toUpperCase()+Al.slice(1);Fn(Ay,"on"+Ry)}Fn(Df,"onAnimationEnd"),Fn(Lf,"onAnimationIteration"),Fn(zf,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Ff,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function Vf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Av(c,i,void 0,n),n.currentTarget=null}function Hf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var w=c.length-1;0<=w;w--){var S=c[w],C=S.instance,R=S.currentTarget;if(S=S.listener,C!==h&&d.isPropagationStopped())break e;Vf(d,S,R),h=C}else for(w=0;w<c.length;w++){if(S=c[w],C=S.instance,R=S.currentTarget,S=S.listener,C!==h&&d.isPropagationStopped())break e;Vf(d,S,R),h=C}}}if(Ys)throw n=ul,Ys=!1,ul=null,n}function Fe(n,i){var a=i[$l];a===void 0&&(a=i[$l]=new Set);var c=n+"__bubble";a.has(c)||(Wf(i,n,2,!1),a.add(c))}function Rl(n,i,a){var c=0;i&&(c|=4),Wf(a,n,c,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Zi(n){if(!n[fo]){n[fo]=!0,s.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||Rl(a,!1,n),Rl(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[fo]||(i[fo]=!0,Rl("selectionchange",!1,i))}}function Wf(n,i,a,c){switch(pf(i)){case 1:var d=Kv;break;case 4:d=Qv;break;default:d=vl}a=d.bind(null,i,a,n),d=void 0,!cl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function jl(n,i,a,c,d){var h=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var C=w.tag;if((C===3||C===4)&&(C=w.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;w=w.return}for(;S!==null;){if(w=or(S),w===null)return;if(C=w.tag,C===5||C===6){c=h=w;continue e}S=S.parentNode}}c=c.return}Yd(function(){var R=h,Y=ol(a),X=[];e:{var G=Bf.get(n);if(G!==void 0){var ne=_l,se=n;switch(n){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":ne=dy;break;case"focusin":se="focus",ne=El;break;case"focusout":se="blur",ne=El;break;case"beforeblur":case"afterblur":ne=El;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=hy;break;case Df:case Lf:case zf:ne=ny;break;case Ff:ne=gy;break;case"scroll":ne=Xv;break;case"wheel":ne=yy;break;case"copy":case"cut":case"paste":ne=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=yf}var oe=(i&4)!==0,Xe=!oe&&n==="scroll",M=oe?G!==null?G+"Capture":null:G;oe=[];for(var k=R,A;k!==null;){A=k;var Z=A.stateNode;if(A.tag===5&&Z!==null&&(A=Z,M!==null&&(Z=ji(k,M),Z!=null&&oe.push(es(k,Z,A)))),Xe)break;k=k.return}0<oe.length&&(G=new ne(G,se,null,a,Y),X.push({event:G,listeners:oe}))}}if(!(i&7)){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==sl&&(se=a.relatedTarget||a.fromElement)&&(or(se)||se[gn]))break e;if((ne||G)&&(G=Y.window===Y?Y:(G=Y.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(se=a.relatedTarget||a.toElement,ne=R,se=se?or(se):null,se!==null&&(Xe=sr(se),se!==Xe||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=R),ne!==se)){if(oe=gf,Z="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(oe=yf,Z="onPointerLeave",M="onPointerEnter",k="pointer"),Xe=ne==null?G:Ur(ne),A=se==null?G:Ur(se),G=new oe(Z,k+"leave",ne,a,Y),G.target=Xe,G.relatedTarget=A,Z=null,or(Y)===R&&(oe=new oe(M,k+"enter",se,a,Y),oe.target=A,oe.relatedTarget=Xe,Z=oe),Xe=Z,ne&&se)t:{for(oe=ne,M=se,k=0,A=oe;A;A=Hr(A))k++;for(A=0,Z=M;Z;Z=Hr(Z))A++;for(;0<k-A;)oe=Hr(oe),k--;for(;0<A-k;)M=Hr(M),A--;for(;k--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Hr(oe),M=Hr(M)}oe=null}else oe=null;ne!==null&&Uf(X,G,ne,oe,!1),se!==null&&Xe!==null&&Uf(X,Xe,se,oe,!0)}}e:{if(G=R?Ur(R):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var ae=Cy;else if(bf(G))if(Tf)ae=Py;else{ae=ky;var de=Ty}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ae=Iy);if(ae&&(ae=ae(n,R))){Cf(X,ae,a,Y);break e}de&&de(n,G,R),n==="focusout"&&(de=G._wrapperState)&&de.controlled&&G.type==="number"&&el(G,"number",G.value)}switch(de=R?Ur(R):window,n){case"focusin":(bf(de)||de.contentEditable==="true")&&($r=de,Pl=R,Xi=null);break;case"focusout":Xi=Pl=$r=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,Rf(X,a,Y);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Rf(X,a,Y)}var fe;if(Cl)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Br?Sf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(wf&&a.locale!=="ko"&&(Br||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Br&&(fe=hf()):(zn=Y,wl="value"in zn?zn.value:zn.textContent,Br=!0)),de=po(R,ye),0<de.length&&(ye=new vf(ye,n,null,a,Y),X.push({event:ye,listeners:de}),fe?ye.data=fe:(fe=Ef(a),fe!==null&&(ye.data=fe)))),(fe=_y?xy(n,a):Sy(n,a))&&(R=po(R,"onBeforeInput"),0<R.length&&(Y=new vf("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:R}),Y.data=fe))}Hf(X,i)})}function es(n,i,a){return{instance:n,listener:i,currentTarget:a}}function po(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ji(n,a),h!=null&&c.unshift(es(n,h,d)),h=ji(n,i),h!=null&&c.push(es(n,h,d))),n=n.return}return c}function Hr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uf(n,i,a,c,d){for(var h=i._reactName,w=[];a!==null&&a!==c;){var S=a,C=S.alternate,R=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&R!==null&&(S=R,d?(C=ji(a,h),C!=null&&w.unshift(es(a,C,S))):d||(C=ji(a,h),C!=null&&w.push(es(a,C,S)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Dy=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Gf(n){return(typeof n=="string"?n:""+n).replace(Dy,`
`).replace(Ly,"")}function ho(n,i,a){if(i=Gf(i),Gf(n)!==i&&a)throw Error(r(425))}function mo(){}var Dl=null,Ll=null;function zl(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(n){return qf.resolve(null).then(n).catch(By)}:Fl;function By(n){setTimeout(function(){throw n})}function Bl(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Wi(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Wi(i)}function Bn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),ln="__reactFiber$"+Wr,ts="__reactProps$"+Wr,gn="__reactContainer$"+Wr,$l="__reactEvents$"+Wr,$y="__reactListeners$"+Wr,Vy="__reactHandles$"+Wr;function or(n){var i=n[ln];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gn]||a[ln]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yf(n);n!==null;){if(a=n[ln])return a;n=Yf(n)}return i}n=a,a=n.parentNode}return null}function ns(n){return n=n[ln]||n[gn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ur(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(r(33))}function go(n){return n[ts]||null}var Vl=[],Gr=-1;function $n(n){return{current:n}}function Be(n){0>Gr||(n.current=Vl[Gr],Vl[Gr]=null,Gr--)}function Le(n,i){Gr++,Vl[Gr]=n.current,n.current=i}var Vn={},mt=$n(Vn),Et=$n(!1),ar=Vn;function qr(n,i){var a=n.type.contextTypes;if(!a)return Vn;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bt(n){return n=n.childContextTypes,n!=null}function vo(){Be(Et),Be(mt)}function Kf(n,i,a){if(mt.current!==Vn)throw Error(r(168));Le(mt,i),Le(Et,a)}function Qf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(r(108,me(n)||"Unknown",d));return K({},a,c)}function yo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vn,ar=mt.current,Le(mt,n),Le(Et,Et.current),!0}function Xf(n,i,a){var c=n.stateNode;if(!c)throw Error(r(169));a?(n=Qf(n,i,ar),c.__reactInternalMemoizedMergedChildContext=n,Be(Et),Be(mt),Le(mt,n)):Be(Et),Le(Et,a)}var vn=null,wo=!1,Hl=!1;function Jf(n){vn===null?vn=[n]:vn.push(n)}function Hy(n){wo=!0,Jf(n)}function Hn(){if(!Hl&&vn!==null){Hl=!0;var n=0,i=Oe;try{var a=vn;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vn=null,wo=!1}catch(d){throw vn!==null&&(vn=vn.slice(n+1)),Zd(dl,Hn),d}finally{Oe=i,Hl=!1}}return null}var Yr=[],Kr=0,_o=null,xo=0,Bt=[],$t=0,lr=null,yn=1,wn="";function cr(n,i){Yr[Kr++]=xo,Yr[Kr++]=_o,_o=n,xo=i}function Zf(n,i,a){Bt[$t++]=yn,Bt[$t++]=wn,Bt[$t++]=lr,lr=n;var c=yn;n=wn;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var h=32-Qt(i)+d;if(30<h){var w=d-d%5;h=(c&(1<<w)-1).toString(32),c>>=w,d-=w,yn=1<<32-Qt(i)+d|a<<d|c,wn=h+n}else yn=1<<h|a<<d|c,wn=n}function Wl(n){n.return!==null&&(cr(n,1),Zf(n,1,0))}function Ul(n){for(;n===_o;)_o=Yr[--Kr],Yr[Kr]=null,xo=Yr[--Kr],Yr[Kr]=null;for(;n===lr;)lr=Bt[--$t],Bt[$t]=null,wn=Bt[--$t],Bt[$t]=null,yn=Bt[--$t],Bt[$t]=null}var Rt=null,jt=null,Ue=!1,Jt=null;function ep(n,i){var a=Ut(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Rt=n,jt=Bn(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Rt=n,jt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=lr!==null?{id:yn,overflow:wn}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ut(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Rt=n,jt=null,!0):!1;default:return!1}}function Gl(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ql(n){if(Ue){var i=jt;if(i){var a=i;if(!tp(n,i)){if(Gl(n))throw Error(r(418));i=Bn(a.nextSibling);var c=Rt;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,Ue=!1,Rt=n)}}else{if(Gl(n))throw Error(r(418));n.flags=n.flags&-4097|2,Ue=!1,Rt=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rt=n}function So(n){if(n!==Rt)return!1;if(!Ue)return np(n),Ue=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zl(n.type,n.memoizedProps)),i&&(i=jt)){if(Gl(n))throw rp(),Error(r(418));for(;i;)ep(n,i),i=Bn(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jt=Bn(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jt=null}}else jt=Rt?Bn(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=jt;n;)n=Bn(n.nextSibling)}function Qr(){jt=Rt=null,Ue=!1}function Yl(n){Jt===null?Jt=[n]:Jt.push(n)}var Wy=N.ReactCurrentBatchConfig;function rs(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(r(309));var c=a.stateNode}if(!c)throw Error(r(147,n));var d=c,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var S=d.refs;w===null?delete S[h]:S[h]=w},i._stringRef=h,i)}if(typeof n!="string")throw Error(r(284));if(!a._owner)throw Error(r(290,n))}return n}function Eo(n,i){throw n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ip(n){var i=n._init;return i(n._payload)}function sp(n){function i(M,k){if(n){var A=M.deletions;A===null?(M.deletions=[k],M.flags|=16):A.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)i(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Xn(M,k),M.index=0,M.sibling=null,M}function h(M,k,A){return M.index=A,n?(A=M.alternate,A!==null?(A=A.index,A<k?(M.flags|=2,k):A):(M.flags|=2,k)):(M.flags|=1048576,k)}function w(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,k,A,Z){return k===null||k.tag!==6?(k=Fc(A,M.mode,Z),k.return=M,k):(k=d(k,A),k.return=M,k)}function C(M,k,A,Z){var ae=A.type;return ae===Q?Y(M,k,A.props.children,Z,A.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ge&&ip(ae)===k.type)?(Z=d(k,A.props),Z.ref=rs(M,k,A),Z.return=M,Z):(Z=qo(A.type,A.key,A.props,null,M.mode,Z),Z.ref=rs(M,k,A),Z.return=M,Z)}function R(M,k,A,Z){return k===null||k.tag!==4||k.stateNode.containerInfo!==A.containerInfo||k.stateNode.implementation!==A.implementation?(k=Bc(A,M.mode,Z),k.return=M,k):(k=d(k,A.children||[]),k.return=M,k)}function Y(M,k,A,Z,ae){return k===null||k.tag!==7?(k=vr(A,M.mode,Z,ae),k.return=M,k):(k=d(k,A),k.return=M,k)}function X(M,k,A){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Fc(""+k,M.mode,A),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case j:return A=qo(k.type,k.key,k.props,null,M.mode,A),A.ref=rs(M,null,k),A.return=M,A;case D:return k=Bc(k,M.mode,A),k.return=M,k;case ge:var Z=k._init;return X(M,Z(k._payload),A)}if(Oi(k)||J(k))return k=vr(k,M.mode,A,null),k.return=M,k;Eo(M,k)}return null}function G(M,k,A,Z){var ae=k!==null?k.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ae!==null?null:S(M,k,""+A,Z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case j:return A.key===ae?C(M,k,A,Z):null;case D:return A.key===ae?R(M,k,A,Z):null;case ge:return ae=A._init,G(M,k,ae(A._payload),Z)}if(Oi(A)||J(A))return ae!==null?null:Y(M,k,A,Z,null);Eo(M,A)}return null}function ne(M,k,A,Z,ae){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return M=M.get(A)||null,S(k,M,""+Z,ae);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case j:return M=M.get(Z.key===null?A:Z.key)||null,C(k,M,Z,ae);case D:return M=M.get(Z.key===null?A:Z.key)||null,R(k,M,Z,ae);case ge:var de=Z._init;return ne(M,k,A,de(Z._payload),ae)}if(Oi(Z)||J(Z))return M=M.get(A)||null,Y(k,M,Z,ae,null);Eo(k,Z)}return null}function se(M,k,A,Z){for(var ae=null,de=null,fe=k,ye=k=0,ot=null;fe!==null&&ye<A.length;ye++){fe.index>ye?(ot=fe,fe=null):ot=fe.sibling;var Ie=G(M,fe,A[ye],Z);if(Ie===null){fe===null&&(fe=ot);break}n&&fe&&Ie.alternate===null&&i(M,fe),k=h(Ie,k,ye),de===null?ae=Ie:de.sibling=Ie,de=Ie,fe=ot}if(ye===A.length)return a(M,fe),Ue&&cr(M,ye),ae;if(fe===null){for(;ye<A.length;ye++)fe=X(M,A[ye],Z),fe!==null&&(k=h(fe,k,ye),de===null?ae=fe:de.sibling=fe,de=fe);return Ue&&cr(M,ye),ae}for(fe=c(M,fe);ye<A.length;ye++)ot=ne(fe,M,ye,A[ye],Z),ot!==null&&(n&&ot.alternate!==null&&fe.delete(ot.key===null?ye:ot.key),k=h(ot,k,ye),de===null?ae=ot:de.sibling=ot,de=ot);return n&&fe.forEach(function(Jn){return i(M,Jn)}),Ue&&cr(M,ye),ae}function oe(M,k,A,Z){var ae=J(A);if(typeof ae!="function")throw Error(r(150));if(A=ae.call(A),A==null)throw Error(r(151));for(var de=ae=null,fe=k,ye=k=0,ot=null,Ie=A.next();fe!==null&&!Ie.done;ye++,Ie=A.next()){fe.index>ye?(ot=fe,fe=null):ot=fe.sibling;var Jn=G(M,fe,Ie.value,Z);if(Jn===null){fe===null&&(fe=ot);break}n&&fe&&Jn.alternate===null&&i(M,fe),k=h(Jn,k,ye),de===null?ae=Jn:de.sibling=Jn,de=Jn,fe=ot}if(Ie.done)return a(M,fe),Ue&&cr(M,ye),ae;if(fe===null){for(;!Ie.done;ye++,Ie=A.next())Ie=X(M,Ie.value,Z),Ie!==null&&(k=h(Ie,k,ye),de===null?ae=Ie:de.sibling=Ie,de=Ie);return Ue&&cr(M,ye),ae}for(fe=c(M,fe);!Ie.done;ye++,Ie=A.next())Ie=ne(fe,M,ye,Ie.value,Z),Ie!==null&&(n&&Ie.alternate!==null&&fe.delete(Ie.key===null?ye:Ie.key),k=h(Ie,k,ye),de===null?ae=Ie:de.sibling=Ie,de=Ie);return n&&fe.forEach(function(S1){return i(M,S1)}),Ue&&cr(M,ye),ae}function Xe(M,k,A,Z){if(typeof A=="object"&&A!==null&&A.type===Q&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case j:e:{for(var ae=A.key,de=k;de!==null;){if(de.key===ae){if(ae=A.type,ae===Q){if(de.tag===7){a(M,de.sibling),k=d(de,A.props.children),k.return=M,M=k;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ge&&ip(ae)===de.type){a(M,de.sibling),k=d(de,A.props),k.ref=rs(M,de,A),k.return=M,M=k;break e}a(M,de);break}else i(M,de);de=de.sibling}A.type===Q?(k=vr(A.props.children,M.mode,Z,A.key),k.return=M,M=k):(Z=qo(A.type,A.key,A.props,null,M.mode,Z),Z.ref=rs(M,k,A),Z.return=M,M=Z)}return w(M);case D:e:{for(de=A.key;k!==null;){if(k.key===de)if(k.tag===4&&k.stateNode.containerInfo===A.containerInfo&&k.stateNode.implementation===A.implementation){a(M,k.sibling),k=d(k,A.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else i(M,k);k=k.sibling}k=Bc(A,M.mode,Z),k.return=M,M=k}return w(M);case ge:return de=A._init,Xe(M,k,de(A._payload),Z)}if(Oi(A))return se(M,k,A,Z);if(J(A))return oe(M,k,A,Z);Eo(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,A),k.return=M,M=k):(a(M,k),k=Fc(A,M.mode,Z),k.return=M,M=k),w(M)):a(M,k)}return Xe}var Xr=sp(!0),op=sp(!1),bo=$n(null),Co=null,Jr=null,Kl=null;function Ql(){Kl=Jr=Co=null}function Xl(n){var i=bo.current;Be(bo),n._currentValue=i}function Jl(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Zr(n,i){Co=n,Kl=Jr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Ct=!0),n.firstContext=null)}function Vt(n){var i=n._currentValue;if(Kl!==n)if(n={context:n,memoizedValue:i,next:null},Jr===null){if(Co===null)throw Error(r(308));Jr=n,Co.dependencies={lanes:0,firstContext:n}}else Jr=Jr.next=n;return i}var ur=null;function Zl(n){ur===null?ur=[n]:ur.push(n)}function ap(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Zl(i)):(a.next=d.next,d.next=a),i.interleaved=a,_n(n,c)}function _n(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wn=!1;function ec(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Te&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,_n(n,a)}return d=c.interleaved,d===null?(i.next=i,Zl(c)):(i.next=d.next,d.next=i),c.interleaved=i,_n(n,a)}function To(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,hl(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ko(n,i,a,c){var d=n.updateQueue;Wn=!1;var h=d.firstBaseUpdate,w=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var C=S,R=C.next;C.next=null,w===null?h=R:w.next=R,w=C;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==w&&(S===null?Y.firstBaseUpdate=R:S.next=R,Y.lastBaseUpdate=C))}if(h!==null){var X=d.baseState;w=0,Y=R=C=null,S=h;do{var G=S.lane,ne=S.eventTime;if((c&G)===G){Y!==null&&(Y=Y.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var se=n,oe=S;switch(G=i,ne=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){X=se.call(ne,X,G);break e}X=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,G=typeof se=="function"?se.call(ne,X,G):se,G==null)break e;X=K({},X,G);break e;case 2:Wn=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(R=Y=ne,C=X):Y=Y.next=ne,w|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Y===null&&(C=X),d.baseState=C,d.firstBaseUpdate=R,d.lastBaseUpdate=Y,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);pr|=w,n.lanes=w,n.memoizedState=X}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(r(191,d));d.call(c)}}}var is={},cn=$n(is),ss=$n(is),os=$n(is);function dr(n){if(n===is)throw Error(r(174));return n}function tc(n,i){switch(Le(os,i),Le(ss,n),Le(cn,is),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:nl(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=nl(i,n)}Be(cn),Le(cn,i)}function ei(){Be(cn),Be(ss),Be(os)}function dp(n){dr(os.current);var i=dr(cn.current),a=nl(i,n.type);i!==a&&(Le(ss,n),Le(cn,a))}function nc(n){ss.current===n&&(Be(cn),Be(ss))}var Ge=$n(0);function Io(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function ic(){for(var n=0;n<rc.length;n++)rc[n]._workInProgressVersionPrimary=null;rc.length=0}var Po=N.ReactCurrentDispatcher,sc=N.ReactCurrentBatchConfig,fr=0,qe=null,et=null,it=null,No=!1,as=!1,ls=0,Uy=0;function gt(){throw Error(r(321))}function oc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Xt(n[a],i[a]))return!1;return!0}function ac(n,i,a,c,d,h){if(fr=h,qe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=n===null||n.memoizedState===null?Ky:Qy,n=a(c,d),as){h=0;do{if(as=!1,ls=0,25<=h)throw Error(r(301));h+=1,it=et=null,i.updateQueue=null,Po.current=Xy,n=a(c,d)}while(as)}if(Po.current=Ao,i=et!==null&&et.next!==null,fr=0,it=et=qe=null,No=!1,i)throw Error(r(300));return n}function lc(){var n=ls!==0;return ls=0,n}function un(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?qe.memoizedState=it=n:it=it.next=n,it}function Ht(){if(et===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var i=it===null?qe.memoizedState:it.next;if(i!==null)it=i,et=n;else{if(n===null)throw Error(r(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},it===null?qe.memoizedState=it=n:it=it.next=n}return it}function cs(n,i){return typeof i=="function"?i(n):i}function cc(n){var i=Ht(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var c=et,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var w=d.next;d.next=h.next,h.next=w}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var S=w=null,C=null,R=h;do{var Y=R.lane;if((fr&Y)===Y)C!==null&&(C=C.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),c=R.hasEagerState?R.eagerState:n(c,R.action);else{var X={lane:Y,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};C===null?(S=C=X,w=c):C=C.next=X,qe.lanes|=Y,pr|=Y}R=R.next}while(R!==null&&R!==h);C===null?w=c:C.next=S,Xt(c,i.memoizedState)||(Ct=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do h=d.lane,qe.lanes|=h,pr|=h,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function uc(n){var i=Ht(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do h=n(h,w.action),w=w.next;while(w!==d);Xt(h,i.memoizedState)||(Ct=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function fp(){}function pp(n,i){var a=qe,c=Ht(),d=i(),h=!Xt(c.memoizedState,d);if(h&&(c.memoizedState=d,Ct=!0),c=c.queue,dc(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||h||it!==null&&it.memoizedState.tag&1){if(a.flags|=2048,us(9,mp.bind(null,a,c,d,i),void 0,null),st===null)throw Error(r(349));fr&30||hp(a,i,d)}return d}function hp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qe.updateQueue,i===null?(i={lastEffect:null,stores:null},qe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,vp(i)&&yp(n)}function gp(n,i,a){return a(function(){vp(i)&&yp(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Xt(n,a)}catch{return!0}}function yp(n){var i=_n(n,1);i!==null&&nn(i,n,1,-1)}function wp(n){var i=un();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},i.queue=n,n=n.dispatch=Yy.bind(null,qe,n),[i.memoizedState,n]}function us(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=qe.updateQueue,i===null?(i={lastEffect:null,stores:null},qe.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function _p(){return Ht().memoizedState}function Mo(n,i,a,c){var d=un();qe.flags|=n,d.memoizedState=us(1|i,a,void 0,c===void 0?null:c)}function Oo(n,i,a,c){var d=Ht();c=c===void 0?null:c;var h=void 0;if(et!==null){var w=et.memoizedState;if(h=w.destroy,c!==null&&oc(c,w.deps)){d.memoizedState=us(i,a,h,c);return}}qe.flags|=n,d.memoizedState=us(1|i,a,h,c)}function xp(n,i){return Mo(8390656,8,n,i)}function dc(n,i){return Oo(2048,8,n,i)}function Sp(n,i){return Oo(4,2,n,i)}function Ep(n,i){return Oo(4,4,n,i)}function bp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cp(n,i,a){return a=a!=null?a.concat([n]):null,Oo(4,4,bp.bind(null,i,n),a)}function fc(){}function Tp(n,i){var a=Ht();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function kp(n,i){var a=Ht();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Ip(n,i,a){return fr&21?(Xt(a,i)||(a=rf(),qe.lanes|=a,pr|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Ct=!0),n.memoizedState=a)}function Gy(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=sc.transition;sc.transition={};try{n(!1),i()}finally{Oe=a,sc.transition=c}}function Pp(){return Ht().memoizedState}function qy(n,i,a){var c=Kn(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Mp(i,a);else if(a=ap(n,i,a,c),a!==null){var d=St();nn(a,n,c,d),Op(a,i,c)}}function Yy(n,i,a){var c=Kn(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Mp(i,d);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,S=h(w,a);if(d.hasEagerState=!0,d.eagerState=S,Xt(S,w)){var C=i.interleaved;C===null?(d.next=d,Zl(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=ap(n,i,d,c),a!==null&&(d=St(),nn(a,n,c,d),Op(a,i,c))}}function Np(n){var i=n.alternate;return n===qe||i!==null&&i===qe}function Mp(n,i){as=No=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Op(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,hl(n,a)}}var Ao={readContext:Vt,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Ky={readContext:Vt,useCallback:function(n,i){return un().memoizedState=[n,i===void 0?null:i],n},useContext:Vt,useEffect:xp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Mo(4194308,4,bp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Mo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Mo(4,2,n,i)},useMemo:function(n,i){var a=un();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=un();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qy.bind(null,qe,n),[c.memoizedState,n]},useRef:function(n){var i=un();return n={current:n},i.memoizedState=n},useState:wp,useDebugValue:fc,useDeferredValue:function(n){return un().memoizedState=n},useTransition:function(){var n=wp(!1),i=n[0];return n=Gy.bind(null,n[1]),un().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=qe,d=un();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),st===null)throw Error(r(349));fr&30||hp(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,xp(gp.bind(null,c,h,n),[n]),c.flags|=2048,us(9,mp.bind(null,c,h,a,i),void 0,null),a},useId:function(){var n=un(),i=st.identifierPrefix;if(Ue){var a=wn,c=yn;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ls++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Uy++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qy={readContext:Vt,useCallback:Tp,useContext:Vt,useEffect:dc,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ep,useMemo:kp,useReducer:cc,useRef:_p,useState:function(){return cc(cs)},useDebugValue:fc,useDeferredValue:function(n){var i=Ht();return Ip(i,et.memoizedState,n)},useTransition:function(){var n=cc(cs)[0],i=Ht().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1},Xy={readContext:Vt,useCallback:Tp,useContext:Vt,useEffect:dc,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ep,useMemo:kp,useReducer:uc,useRef:_p,useState:function(){return uc(cs)},useDebugValue:fc,useDeferredValue:function(n){var i=Ht();return et===null?i.memoizedState=n:Ip(i,et.memoizedState,n)},useTransition:function(){var n=uc(cs)[0],i=Ht().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1};function Zt(n,i){if(n&&n.defaultProps){i=K({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:K({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ro={isMounted:function(n){return(n=n._reactInternals)?sr(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=St(),d=Kn(n),h=xn(c,d);h.payload=i,a!=null&&(h.callback=a),i=Un(n,h,d),i!==null&&(nn(i,n,d,c),To(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=St(),d=Kn(n),h=xn(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Un(n,h,d),i!==null&&(nn(i,n,d,c),To(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=St(),c=Kn(n),d=xn(a,c);d.tag=2,i!=null&&(d.callback=i),i=Un(n,d,c),i!==null&&(nn(i,n,c,a),To(i,n,c))}};function Ap(n,i,a,c,d,h,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,h,w):i.prototype&&i.prototype.isPureReactComponent?!Qi(a,c)||!Qi(d,h):!0}function Rp(n,i,a){var c=!1,d=Vn,h=i.contextType;return typeof h=="object"&&h!==null?h=Vt(h):(d=bt(i)?ar:mt.current,c=i.contextTypes,h=(c=c!=null)?qr(n,d):Vn),i=new i(a,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ro,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=h),i}function jp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ro.enqueueReplaceState(i,i.state,null)}function hc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ec(n);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Vt(h):(h=bt(i)?ar:mt.current,d.context=qr(n,h)),d.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(pc(n,i,h,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ro.enqueueReplaceState(d,d.state,null),ko(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ti(n,i){try{var a="",c=i;do a+=ve(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:d,digest:null}}function mc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function gc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,i,a){a=xn(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){$o||($o=!0,Mc=c),gc(n,i)},a}function Lp(n,i,a){a=xn(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){gc(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){gc(n,i),typeof c!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Jy;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=f1.bind(null,n,i,a),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bp(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xn(-1,1),i.tag=2,Un(a,i,1))),a.lanes|=1),n)}var Zy=N.ReactCurrentOwner,Ct=!1;function xt(n,i,a,c){i.child=n===null?op(i,null,a,c):Xr(i,n.child,a,c)}function $p(n,i,a,c,d){a=a.render;var h=i.ref;return Zr(i,d),c=ac(n,i,a,c,h,d),a=lc(),n!==null&&!Ct?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sn(n,i,d)):(Ue&&a&&Wl(i),i.flags|=1,xt(n,i,c,d),i.child)}function Vp(n,i,a,c,d){if(n===null){var h=a.type;return typeof h=="function"&&!zc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Hp(n,i,h,c,d)):(n=qo(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!(n.lanes&d)){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qi,a(w,c)&&n.ref===i.ref)return Sn(n,i,d)}return i.flags|=1,n=Xn(h,c),n.ref=i.ref,n.return=i,i.child=n}function Hp(n,i,a,c,d){if(n!==null){var h=n.memoizedProps;if(Qi(h,c)&&n.ref===i.ref)if(Ct=!1,i.pendingProps=c=h,(n.lanes&d)!==0)n.flags&131072&&(Ct=!0);else return i.lanes=n.lanes,Sn(n,i,d)}return vc(n,i,a,c,d)}function Wp(n,i,a){var c=i.pendingProps,d=c.children,h=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(ri,Dt),Dt|=a;else{if(!(a&1073741824))return n=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Le(ri,Dt),Dt|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,Le(ri,Dt),Dt|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,Le(ri,Dt),Dt|=c;return xt(n,i,d,a),i.child}function Up(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vc(n,i,a,c,d){var h=bt(a)?ar:mt.current;return h=qr(i,h),Zr(i,d),a=ac(n,i,a,c,h,d),c=lc(),n!==null&&!Ct?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sn(n,i,d)):(Ue&&c&&Wl(i),i.flags|=1,xt(n,i,a,d),i.child)}function Gp(n,i,a,c,d){if(bt(a)){var h=!0;yo(i)}else h=!1;if(Zr(i,d),i.stateNode===null)Do(n,i),Rp(i,a,c),hc(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,S=i.memoizedProps;w.props=S;var C=w.context,R=a.contextType;typeof R=="object"&&R!==null?R=Vt(R):(R=bt(a)?ar:mt.current,R=qr(i,R));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==c||C!==R)&&jp(i,w,c,R),Wn=!1;var G=i.memoizedState;w.state=G,ko(i,c,w,d),C=i.memoizedState,S!==c||G!==C||Et.current||Wn?(typeof Y=="function"&&(pc(i,a,Y,c),C=i.memoizedState),(S=Wn||Ap(i,a,S,c,G,C,R))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),w.props=c,w.state=C,w.context=R,c=S):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,lp(n,i),S=i.memoizedProps,R=i.type===i.elementType?S:Zt(i.type,S),w.props=R,X=i.pendingProps,G=w.context,C=a.contextType,typeof C=="object"&&C!==null?C=Vt(C):(C=bt(a)?ar:mt.current,C=qr(i,C));var ne=a.getDerivedStateFromProps;(Y=typeof ne=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==X||G!==C)&&jp(i,w,c,C),Wn=!1,G=i.memoizedState,w.state=G,ko(i,c,w,d);var se=i.memoizedState;S!==X||G!==se||Et.current||Wn?(typeof ne=="function"&&(pc(i,a,ne,c),se=i.memoizedState),(R=Wn||Ap(i,a,R,c,G,se,C)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,se,C),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,se,C)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),w.props=c,w.state=se,w.context=C,c=R):(typeof w.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return yc(n,i,a,c,h,d)}function yc(n,i,a,c,d,h){Up(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&Xf(i,a,!1),Sn(n,i,h);c=i.stateNode,Zy.current=i;var S=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Xr(i,n.child,null,h),i.child=Xr(i,null,S,h)):xt(n,i,S,h),i.memoizedState=c.state,d&&Xf(i,a,!0),i.child}function qp(n){var i=n.stateNode;i.pendingContext?Kf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kf(n,i.context,!1),tc(n,i.containerInfo)}function Yp(n,i,a,c,d){return Qr(),Yl(d),i.flags|=256,xt(n,i,a,c),i.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function _c(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,a){var c=i.pendingProps,d=Ge.current,h=!1,w=(i.flags&128)!==0,S;if((S=w)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Le(Ge,d&1),n===null)return ql(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(w=c.children,n=c.fallback,h?(c=i.mode,h=i.child,w={mode:"hidden",children:w},!(c&1)&&h!==null?(h.childLanes=0,h.pendingProps=w):h=Yo(w,c,0,null),n=vr(n,c,a,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=_c(a),i.memoizedState=wc,n):xc(i,w));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return e1(n,i,w,c,S,d,a);if(h){h=c.fallback,w=i.mode,d=n.child,S=d.sibling;var C={mode:"hidden",children:c.children};return!(w&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=Xn(d,C),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?h=Xn(S,h):(h=vr(h,w,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,w=n.child.memoizedState,w=w===null?_c(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=n.childLanes&~a,i.memoizedState=wc,c}return h=n.child,n=h.sibling,c=Xn(h,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function xc(n,i){return i=Yo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function jo(n,i,a,c){return c!==null&&Yl(c),Xr(i,n.child,null,a),n=xc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function e1(n,i,a,c,d,h,w){if(a)return i.flags&256?(i.flags&=-257,c=mc(Error(r(422))),jo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=Yo({mode:"visible",children:c.children},d,0,null),h=vr(h,d,w,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,i.mode&1&&Xr(i,n.child,null,w),i.child.memoizedState=_c(w),i.memoizedState=wc,h);if(!(i.mode&1))return jo(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,h=Error(r(419)),c=mc(h,c,void 0),jo(n,i,w,c)}if(S=(w&n.childLanes)!==0,Ct||S){if(c=st,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|w)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,_n(n,d),nn(c,n,d,-1))}return Lc(),c=mc(Error(r(421))),jo(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=p1.bind(null,n),d._reactRetry=i,null):(n=h.treeContext,jt=Bn(d.nextSibling),Rt=i,Ue=!0,Jt=null,n!==null&&(Bt[$t++]=yn,Bt[$t++]=wn,Bt[$t++]=lr,yn=n.id,wn=n.overflow,lr=i),i=xc(i,c.children),i.flags|=4096,i)}function Qp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jl(n.return,i,a)}function Sc(n,i,a,c,d){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function Xp(n,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(xt(n,i,c.children,a),c=Ge.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,a,i);else if(n.tag===19)Qp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Le(Ge,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Io(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Sc(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Io(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sc(i,!0,a,null,h);break;case"together":Sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Sn(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),pr|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,a=Xn(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Xn(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function t1(n,i,a){switch(i.tag){case 3:qp(i),Qr();break;case 5:dp(i);break;case 1:bt(i.type)&&yo(i);break;case 4:tc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Le(bo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Le(Ge,Ge.current&1),i.flags|=128,null):a&i.child.childLanes?Kp(n,i,a):(Le(Ge,Ge.current&1),n=Sn(n,i,a),n!==null?n.sibling:null);Le(Ge,Ge.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Xp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Le(Ge,Ge.current),c)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,a)}return Sn(n,i,a)}var Jp,Ec,Zp,eh;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ec=function(){},Zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,dr(cn.current);var h=null;switch(a){case"input":d=ke(n,d),c=ke(n,c),h=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),h=[];break;case"textarea":d=tl(n,d),c=tl(n,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=mo)}rl(a,c);var w;a=null;for(R in d)if(!c.hasOwnProperty(R)&&d.hasOwnProperty(R)&&d[R]!=null)if(R==="style"){var S=d[R];for(w in S)S.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(o.hasOwnProperty(R)?h||(h=[]):(h=h||[]).push(R,null));for(R in c){var C=c[R];if(S=d!=null?d[R]:void 0,c.hasOwnProperty(R)&&C!==S&&(C!=null||S!=null))if(R==="style")if(S){for(w in S)!S.hasOwnProperty(w)||C&&C.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in C)C.hasOwnProperty(w)&&S[w]!==C[w]&&(a||(a={}),a[w]=C[w])}else a||(h||(h=[]),h.push(R,a)),a=C;else R==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(h=h||[]).push(R,C)):R==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(R,""+C):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(o.hasOwnProperty(R)?(C!=null&&R==="onScroll"&&Fe("scroll",n),h||S===C||(h=[])):(h=h||[]).push(R,C))}a&&(h=h||[]).push("style",a);var R=h;(i.updateQueue=R)&&(i.flags|=4)}},eh=function(n,i,a,c){a!==c&&(i.flags|=4)};function ds(n,i){if(!Ue)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function n1(n,i,a){var c=i.pendingProps;switch(Ul(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(i),null;case 1:return bt(i.type)&&vo(),vt(i),null;case 3:return c=i.stateNode,ei(),Be(Et),Be(mt),ic(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(So(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Jt!==null&&(Rc(Jt),Jt=null))),Ec(n,i),vt(i),null;case 5:nc(i);var d=dr(os.current);if(a=i.type,n!==null&&i.stateNode!=null)Zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(r(166));return vt(i),null}if(n=dr(cn.current),So(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[ln]=i,c[ts]=h,n=(i.mode&1)!==0,a){case"dialog":Fe("cancel",c),Fe("close",c);break;case"iframe":case"object":case"embed":Fe("load",c);break;case"video":case"audio":for(d=0;d<Ji.length;d++)Fe(Ji[d],c);break;case"source":Fe("error",c);break;case"img":case"image":case"link":Fe("error",c),Fe("load",c);break;case"details":Fe("toggle",c);break;case"input":ut(c,h),Fe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Fe("invalid",c);break;case"textarea":Dd(c,h),Fe("invalid",c)}rl(a,h),d=null;for(var w in h)if(h.hasOwnProperty(w)){var S=h[w];w==="children"?typeof S=="string"?c.textContent!==S&&(h.suppressHydrationWarning!==!0&&ho(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(h.suppressHydrationWarning!==!0&&ho(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(w)&&S!=null&&w==="onScroll"&&Fe("scroll",c)}switch(a){case"input":rt(c),jd(c,h,!0);break;case"textarea":rt(c),zd(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=mo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fd(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[ln]=i,n[ts]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(w=il(a,c),a){case"dialog":Fe("cancel",n),Fe("close",n),d=c;break;case"iframe":case"object":case"embed":Fe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ji.length;d++)Fe(Ji[d],n);d=c;break;case"source":Fe("error",n),d=c;break;case"img":case"image":case"link":Fe("error",n),Fe("load",n),d=c;break;case"details":Fe("toggle",n),d=c;break;case"input":ut(n,c),d=ke(n,c),Fe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),Fe("invalid",n);break;case"textarea":Dd(n,c),d=tl(n,c),Fe("invalid",n);break;default:d=c}rl(a,d),S=d;for(h in S)if(S.hasOwnProperty(h)){var C=S[h];h==="style"?Vd(n,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Bd(n,C)):h==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Ai(n,C):typeof C=="number"&&Ai(n,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Fe("scroll",n):C!=null&&E(n,h,C,w))}switch(a){case"input":rt(n),jd(n,c,!1);break;case"textarea":rt(n),zd(n);break;case"option":c.value!=null&&n.setAttribute("value",""+le(c.value));break;case"select":n.multiple=!!c.multiple,h=c.value,h!=null?jr(n,!!c.multiple,h,!1):c.defaultValue!=null&&jr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vt(i),null;case 6:if(n&&i.stateNode!=null)eh(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(a=dr(os.current),dr(cn.current),So(i)){if(c=i.stateNode,a=i.memoizedProps,c[ln]=i,(h=c.nodeValue!==a)&&(n=Rt,n!==null))switch(n.tag){case 3:ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ho(c.nodeValue,a,(n.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ln]=i,i.stateNode=c}return vt(i),null;case 13:if(Be(Ge),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ue&&jt!==null&&i.mode&1&&!(i.flags&128))rp(),Qr(),i.flags|=98560,h=!1;else if(h=So(i),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[ln]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;vt(i),h=!1}else Jt!==null&&(Rc(Jt),Jt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Ge.current&1?tt===0&&(tt=3):Lc())),i.updateQueue!==null&&(i.flags|=4),vt(i),null);case 4:return ei(),Ec(n,i),n===null&&Zi(i.stateNode.containerInfo),vt(i),null;case 10:return Xl(i.type._context),vt(i),null;case 17:return bt(i.type)&&vo(),vt(i),null;case 19:if(Be(Ge),h=i.memoizedState,h===null)return vt(i),null;if(c=(i.flags&128)!==0,w=h.rendering,w===null)if(c)ds(h,!1);else{if(tt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(w=Io(n),w!==null){for(i.flags|=128,ds(h,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,n=c,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,n=w.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Le(Ge,Ge.current&1|2),i.child}n=n.sibling}h.tail!==null&&Qe()>ii&&(i.flags|=128,c=!0,ds(h,!1),i.lanes=4194304)}else{if(!c)if(n=Io(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ds(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!Ue)return vt(i),null}else 2*Qe()-h.renderingStartTime>ii&&a!==1073741824&&(i.flags|=128,c=!0,ds(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(a=h.last,a!==null?a.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Qe(),i.sibling=null,a=Ge.current,Le(Ge,c?a&1|2:a&1),i):(vt(i),null);case 22:case 23:return Dc(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?Dt&1073741824&&(vt(i),i.subtreeFlags&6&&(i.flags|=8192)):vt(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function r1(n,i){switch(Ul(i),i.tag){case 1:return bt(i.type)&&vo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ei(),Be(Et),Be(mt),ic(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return nc(i),null;case 13:if(Be(Ge),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Qr()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Be(Ge),null;case 4:return ei(),null;case 10:return Xl(i.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var Lo=!1,yt=!1,i1=typeof WeakSet=="function"?WeakSet:Set,re=null;function ni(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ye(n,i,c)}else a.current=null}function bc(n,i,a){try{a()}catch(c){Ye(n,i,c)}}var th=!1;function s1(n,i){if(Dl=no,n=Af(),Il(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,S=-1,C=-1,R=0,Y=0,X=n,G=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(S=w+d),X!==h||c!==0&&X.nodeType!==3||(C=w+c),X.nodeType===3&&(w+=X.nodeValue.length),(ne=X.firstChild)!==null;)G=X,X=ne;for(;;){if(X===n)break t;if(G===a&&++R===d&&(S=w),G===h&&++Y===c&&(C=w),(ne=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ne}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ll={focusedElem:n,selectionRange:a},no=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var se=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,Xe=se.memoizedState,M=i.stateNode,k=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Zt(i.type,oe),Xe);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var A=i.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Z){Ye(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return se=th,th=!1,se}function fs(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var h=d.destroy;d.destroy=void 0,h!==void 0&&bc(i,a,h)}d=d.next}while(d!==c)}}function zo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Cc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nh(n){var i=n.alternate;i!==null&&(n.alternate=null,nh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ln],delete i[ts],delete i[$l],delete i[$y],delete i[Vy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rh(n){return n.tag===5||n.tag===3||n.tag===4}function ih(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mo));else if(c!==4&&(n=n.child,n!==null))for(Tc(n,i,a),n=n.sibling;n!==null;)Tc(n,i,a),n=n.sibling}function kc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kc(n,i,a),n=n.sibling;n!==null;)kc(n,i,a),n=n.sibling}var dt=null,en=!1;function Gn(n,i,a){for(a=a.child;a!==null;)sh(n,i,a),a=a.sibling}function sh(n,i,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Qs,a)}catch{}switch(a.tag){case 5:yt||ni(a,i);case 6:var c=dt,d=en;dt=null,Gn(n,i,a),dt=c,en=d,dt!==null&&(en?(n=dt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):dt.removeChild(a.stateNode));break;case 18:dt!==null&&(en?(n=dt,a=a.stateNode,n.nodeType===8?Bl(n.parentNode,a):n.nodeType===1&&Bl(n,a),Wi(n)):Bl(dt,a.stateNode));break;case 4:c=dt,d=en,dt=a.stateNode.containerInfo,en=!0,Gn(n,i,a),dt=c,en=d;break;case 0:case 11:case 14:case 15:if(!yt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,w=h.destroy;h=h.tag,w!==void 0&&(h&2||h&4)&&bc(a,i,w),d=d.next}while(d!==c)}Gn(n,i,a);break;case 1:if(!yt&&(ni(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){Ye(a,i,S)}Gn(n,i,a);break;case 21:Gn(n,i,a);break;case 22:a.mode&1?(yt=(c=yt)||a.memoizedState!==null,Gn(n,i,a),yt=c):Gn(n,i,a);break;default:Gn(n,i,a)}}function oh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new i1),i.forEach(function(c){var d=h1.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function tn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=n,w=i,S=w;e:for(;S!==null;){switch(S.tag){case 5:dt=S.stateNode,en=!1;break e;case 3:dt=S.stateNode.containerInfo,en=!0;break e;case 4:dt=S.stateNode.containerInfo,en=!0;break e}S=S.return}if(dt===null)throw Error(r(160));sh(h,w,d),dt=null,en=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(R){Ye(d,i,R)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ah(i,n),i=i.sibling}function ah(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(tn(i,n),dn(n),c&4){try{fs(3,n,n.return),zo(3,n)}catch(oe){Ye(n,n.return,oe)}try{fs(5,n,n.return)}catch(oe){Ye(n,n.return,oe)}}break;case 1:tn(i,n),dn(n),c&512&&a!==null&&ni(a,a.return);break;case 5:if(tn(i,n),dn(n),c&512&&a!==null&&ni(a,a.return),n.flags&32){var d=n.stateNode;try{Ai(d,"")}catch(oe){Ye(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var h=n.memoizedProps,w=a!==null?a.memoizedProps:h,S=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{S==="input"&&h.type==="radio"&&h.name!=null&&Kt(d,h),il(S,w);var R=il(S,h);for(w=0;w<C.length;w+=2){var Y=C[w],X=C[w+1];Y==="style"?Vd(d,X):Y==="dangerouslySetInnerHTML"?Bd(d,X):Y==="children"?Ai(d,X):E(d,Y,X,R)}switch(S){case"input":Rr(d,h);break;case"textarea":Ld(d,h);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var ne=h.value;ne!=null?jr(d,!!h.multiple,ne,!1):G!==!!h.multiple&&(h.defaultValue!=null?jr(d,!!h.multiple,h.defaultValue,!0):jr(d,!!h.multiple,h.multiple?[]:"",!1))}d[ts]=h}catch(oe){Ye(n,n.return,oe)}}break;case 6:if(tn(i,n),dn(n),c&4){if(n.stateNode===null)throw Error(r(162));d=n.stateNode,h=n.memoizedProps;try{d.nodeValue=h}catch(oe){Ye(n,n.return,oe)}}break;case 3:if(tn(i,n),dn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wi(i.containerInfo)}catch(oe){Ye(n,n.return,oe)}break;case 4:tn(i,n),dn(n);break;case 13:tn(i,n),dn(n),d=n.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Nc=Qe())),c&4&&oh(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(yt=(R=yt)||Y,tn(i,n),yt=R):tn(i,n),dn(n),c&8192){if(R=n.memoizedState!==null,(n.stateNode.isHidden=R)&&!Y&&n.mode&1)for(re=n,Y=n.child;Y!==null;){for(X=re=Y;re!==null;){switch(G=re,ne=G.child,G.tag){case 0:case 11:case 14:case 15:fs(4,G,G.return);break;case 1:ni(G,G.return);var se=G.stateNode;if(typeof se.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){Ye(c,a,oe)}}break;case 5:ni(G,G.return);break;case 22:if(G.memoizedState!==null){uh(X);continue}}ne!==null?(ne.return=G,re=ne):uh(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,R?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(S=X.stateNode,C=X.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=$d("display",w))}catch(oe){Ye(n,n.return,oe)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=R?"":X.memoizedProps}catch(oe){Ye(n,n.return,oe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:tn(i,n),dn(n),c&4&&oh(n);break;case 21:break;default:tn(i,n),dn(n)}}function dn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rh(a)){var c=a;break e}a=a.return}throw Error(r(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ai(d,""),c.flags&=-33);var h=ih(n);kc(n,h,d);break;case 3:case 4:var w=c.stateNode.containerInfo,S=ih(n);Tc(n,S,w);break;default:throw Error(r(161))}}catch(C){Ye(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function o1(n,i,a){re=n,lh(n)}function lh(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,h=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Lo;if(!w){var S=d.alternate,C=S!==null&&S.memoizedState!==null||yt;S=Lo;var R=yt;if(Lo=w,(yt=C)&&!R)for(re=d;re!==null;)w=re,C=w.child,w.tag===22&&w.memoizedState!==null?dh(d):C!==null?(C.return=w,re=C):dh(d);for(;h!==null;)re=h,lh(h),h=h.sibling;re=d,Lo=S,yt=R}ch(n)}else d.subtreeFlags&8772&&h!==null?(h.return=d,re=h):ch(n)}}function ch(n){for(;re!==null;){var i=re;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:yt||zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Zt(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&up(i,h,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,w,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var R=i.alternate;if(R!==null){var Y=R.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Wi(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}yt||i.flags&512&&Cc(i)}catch(G){Ye(i,i.return,G)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function uh(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function dh(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zo(4,i)}catch(C){Ye(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){Ye(i,d,C)}}var h=i.return;try{Cc(i)}catch(C){Ye(i,h,C)}break;case 5:var w=i.return;try{Cc(i)}catch(C){Ye(i,w,C)}}}catch(C){Ye(i,i.return,C)}if(i===n){re=null;break}var S=i.sibling;if(S!==null){S.return=i.return,re=S;break}re=i.return}}var a1=Math.ceil,Fo=N.ReactCurrentDispatcher,Ic=N.ReactCurrentOwner,Wt=N.ReactCurrentBatchConfig,Te=0,st=null,Je=null,ft=0,Dt=0,ri=$n(0),tt=0,ps=null,pr=0,Bo=0,Pc=0,hs=null,Tt=null,Nc=0,ii=1/0,En=null,$o=!1,Mc=null,qn=null,Vo=!1,Yn=null,Ho=0,ms=0,Oc=null,Wo=-1,Uo=0;function St(){return Te&6?Qe():Wo!==-1?Wo:Wo=Qe()}function Kn(n){return n.mode&1?Te&2&&ft!==0?ft&-ft:Wy.transition!==null?(Uo===0&&(Uo=rf()),Uo):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:pf(n.type)),n):1}function nn(n,i,a,c){if(50<ms)throw ms=0,Oc=null,Error(r(185));Fi(n,a,c),(!(Te&2)||n!==st)&&(n===st&&(!(Te&2)&&(Bo|=a),tt===4&&Qn(n,ft)),kt(n,c),a===1&&Te===0&&!(i.mode&1)&&(ii=Qe()+500,wo&&Hn()))}function kt(n,i){var a=n.callbackNode;Wv(n,i);var c=Zs(n,n===st?ft:0);if(c===0)a!==null&&ef(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ef(a),i===1)n.tag===0?Hy(ph.bind(null,n)):Jf(ph.bind(null,n)),Fy(function(){!(Te&6)&&Hn()}),a=null;else{switch(sf(c)){case 1:a=dl;break;case 4:a=tf;break;case 16:a=Ks;break;case 536870912:a=nf;break;default:a=Ks}a=xh(a,fh.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function fh(n,i){if(Wo=-1,Uo=0,Te&6)throw Error(r(327));var a=n.callbackNode;if(si()&&n.callbackNode!==a)return null;var c=Zs(n,n===st?ft:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=Go(n,c);else{i=c;var d=Te;Te|=2;var h=mh();(st!==n||ft!==i)&&(En=null,ii=Qe()+500,mr(n,i));do try{u1();break}catch(S){hh(n,S)}while(!0);Ql(),Fo.current=h,Te=d,Je!==null?i=0:(st=null,ft=0,i=tt)}if(i!==0){if(i===2&&(d=fl(n),d!==0&&(c=d,i=Ac(n,d))),i===1)throw a=ps,mr(n,0),Qn(n,c),kt(n,Qe()),a;if(i===6)Qn(n,c);else{if(d=n.current.alternate,!(c&30)&&!l1(d)&&(i=Go(n,c),i===2&&(h=fl(n),h!==0&&(c=h,i=Ac(n,h))),i===1))throw a=ps,mr(n,0),Qn(n,c),kt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(r(345));case 2:gr(n,Tt,En);break;case 3:if(Qn(n,c),(c&130023424)===c&&(i=Nc+500-Qe(),10<i)){if(Zs(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){St(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Fl(gr.bind(null,n,Tt,En),i);break}gr(n,Tt,En);break;case 4:if(Qn(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-Qt(c);h=1<<w,w=i[w],w>d&&(d=w),c&=~h}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*a1(c/1960))-c,10<c){n.timeoutHandle=Fl(gr.bind(null,n,Tt,En),c);break}gr(n,Tt,En);break;case 5:gr(n,Tt,En);break;default:throw Error(r(329))}}}return kt(n,Qe()),n.callbackNode===a?fh.bind(null,n):null}function Ac(n,i){var a=hs;return n.current.memoizedState.isDehydrated&&(mr(n,i).flags|=256),n=Go(n,i),n!==2&&(i=Tt,Tt=a,i!==null&&Rc(i)),n}function Rc(n){Tt===null?Tt=n:Tt.push.apply(Tt,n)}function l1(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!Xt(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qn(n,i){for(i&=~Pc,i&=~Bo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Qt(i),c=1<<a;n[a]=-1,i&=~c}}function ph(n){if(Te&6)throw Error(r(327));si();var i=Zs(n,0);if(!(i&1))return kt(n,Qe()),null;var a=Go(n,i);if(n.tag!==0&&a===2){var c=fl(n);c!==0&&(i=c,a=Ac(n,c))}if(a===1)throw a=ps,mr(n,0),Qn(n,i),kt(n,Qe()),a;if(a===6)throw Error(r(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gr(n,Tt,En),kt(n,Qe()),null}function jc(n,i){var a=Te;Te|=1;try{return n(i)}finally{Te=a,Te===0&&(ii=Qe()+500,wo&&Hn())}}function hr(n){Yn!==null&&Yn.tag===0&&!(Te&6)&&si();var i=Te;Te|=1;var a=Wt.transition,c=Oe;try{if(Wt.transition=null,Oe=1,n)return n()}finally{Oe=c,Wt.transition=a,Te=i,!(Te&6)&&Hn()}}function Dc(){Dt=ri.current,Be(ri)}function mr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zy(a)),Je!==null)for(a=Je.return;a!==null;){var c=a;switch(Ul(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vo();break;case 3:ei(),Be(Et),Be(mt),ic();break;case 5:nc(c);break;case 4:ei();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:Xl(c.type._context);break;case 22:case 23:Dc()}a=a.return}if(st=n,Je=n=Xn(n.current,null),ft=Dt=i,tt=0,ps=null,Pc=Bo=pr=0,Tt=hs=null,ur!==null){for(i=0;i<ur.length;i++)if(a=ur[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var w=h.next;h.next=d,c.next=w}a.pending=c}ur=null}return n}function hh(n,i){do{var a=Je;try{if(Ql(),Po.current=Ao,No){for(var c=qe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}No=!1}if(fr=0,it=et=qe=null,as=!1,ls=0,Ic.current=null,a===null||a.return===null){tt=1,ps=i,Je=null;break}e:{var h=n,w=a.return,S=a,C=i;if(i=ft,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var R=C,Y=S,X=Y.tag;if(!(Y.mode&1)&&(X===0||X===11||X===15)){var G=Y.alternate;G?(Y.updateQueue=G.updateQueue,Y.memoizedState=G.memoizedState,Y.lanes=G.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ne=Fp(w);if(ne!==null){ne.flags&=-257,Bp(ne,w,S,h,i),ne.mode&1&&zp(h,R,i),i=ne,C=R;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(C),i.updateQueue=oe}else se.add(C);break e}else{if(!(i&1)){zp(h,R,i),Lc();break e}C=Error(r(426))}}else if(Ue&&S.mode&1){var Xe=Fp(w);if(Xe!==null){!(Xe.flags&65536)&&(Xe.flags|=256),Bp(Xe,w,S,h,i),Yl(ti(C,S));break e}}h=C=ti(C,S),tt!==4&&(tt=2),hs===null?hs=[h]:hs.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var M=Dp(h,C,i);cp(h,M);break e;case 1:S=C;var k=h.type,A=h.stateNode;if(!(h.flags&128)&&(typeof k.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(qn===null||!qn.has(A)))){h.flags|=65536,i&=-i,h.lanes|=i;var Z=Lp(h,S,i);cp(h,Z);break e}}h=h.return}while(h!==null)}vh(a)}catch(ae){i=ae,Je===a&&a!==null&&(Je=a=a.return);continue}break}while(!0)}function mh(){var n=Fo.current;return Fo.current=Ao,n===null?Ao:n}function Lc(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(pr&268435455)&&!(Bo&268435455)||Qn(st,ft)}function Go(n,i){var a=Te;Te|=2;var c=mh();(st!==n||ft!==i)&&(En=null,mr(n,i));do try{c1();break}catch(d){hh(n,d)}while(!0);if(Ql(),Te=a,Fo.current=c,Je!==null)throw Error(r(261));return st=null,ft=0,tt}function c1(){for(;Je!==null;)gh(Je)}function u1(){for(;Je!==null&&!jv();)gh(Je)}function gh(n){var i=_h(n.alternate,n,Dt);n.memoizedProps=n.pendingProps,i===null?vh(n):Je=i,Ic.current=null}function vh(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=r1(a,i),a!==null){a.flags&=32767,Je=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tt=6,Je=null;return}}else if(a=n1(a,i,Dt),a!==null){Je=a;return}if(i=i.sibling,i!==null){Je=i;return}Je=i=n}while(i!==null);tt===0&&(tt=5)}function gr(n,i,a){var c=Oe,d=Wt.transition;try{Wt.transition=null,Oe=1,d1(n,i,a,c)}finally{Wt.transition=d,Oe=c}return null}function d1(n,i,a,c){do si();while(Yn!==null);if(Te&6)throw Error(r(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0;var h=a.lanes|a.childLanes;if(Uv(n,h),n===st&&(Je=st=null,ft=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Vo||(Vo=!0,xh(Ks,function(){return si(),null})),h=(a.flags&15990)!==0,a.subtreeFlags&15990||h){h=Wt.transition,Wt.transition=null;var w=Oe;Oe=1;var S=Te;Te|=4,Ic.current=null,s1(n,a),ah(a,n),My(Ll),no=!!Dl,Ll=Dl=null,n.current=a,o1(a),Dv(),Te=S,Oe=w,Wt.transition=h}else n.current=a;if(Vo&&(Vo=!1,Yn=n,Ho=d),h=n.pendingLanes,h===0&&(qn=null),Fv(a.stateNode),kt(n,Qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($o)throw $o=!1,n=Mc,Mc=null,n;return Ho&1&&n.tag!==0&&si(),h=n.pendingLanes,h&1?n===Oc?ms++:(ms=0,Oc=n):ms=0,Hn(),null}function si(){if(Yn!==null){var n=sf(Ho),i=Wt.transition,a=Oe;try{if(Wt.transition=null,Oe=16>n?16:n,Yn===null)var c=!1;else{if(n=Yn,Yn=null,Ho=0,Te&6)throw Error(r(331));var d=Te;for(Te|=4,re=n.current;re!==null;){var h=re,w=h.child;if(re.flags&16){var S=h.deletions;if(S!==null){for(var C=0;C<S.length;C++){var R=S[C];for(re=R;re!==null;){var Y=re;switch(Y.tag){case 0:case 11:case 15:fs(8,Y,h)}var X=Y.child;if(X!==null)X.return=Y,re=X;else for(;re!==null;){Y=re;var G=Y.sibling,ne=Y.return;if(nh(Y),Y===R){re=null;break}if(G!==null){G.return=ne,re=G;break}re=ne}}}var se=h.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var Xe=oe.sibling;oe.sibling=null,oe=Xe}while(oe!==null)}}re=h}}if(h.subtreeFlags&2064&&w!==null)w.return=h,re=w;else e:for(;re!==null;){if(h=re,h.flags&2048)switch(h.tag){case 0:case 11:case 15:fs(9,h,h.return)}var M=h.sibling;if(M!==null){M.return=h.return,re=M;break e}re=h.return}}var k=n.current;for(re=k;re!==null;){w=re;var A=w.child;if(w.subtreeFlags&2064&&A!==null)A.return=w,re=A;else e:for(w=k;re!==null;){if(S=re,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:zo(9,S)}}catch(ae){Ye(S,S.return,ae)}if(S===w){re=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,re=Z;break e}re=S.return}}if(Te=d,Hn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Qs,n)}catch{}c=!0}return c}finally{Oe=a,Wt.transition=i}}return!1}function yh(n,i,a){i=ti(a,i),i=Dp(n,i,1),n=Un(n,i,1),i=St(),n!==null&&(Fi(n,1,i),kt(n,i))}function Ye(n,i,a){if(n.tag===3)yh(n,n,a);else for(;i!==null;){if(i.tag===3){yh(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qn===null||!qn.has(c))){n=ti(a,n),n=Lp(i,n,1),i=Un(i,n,1),n=St(),i!==null&&(Fi(i,1,n),kt(i,n));break}}i=i.return}}function f1(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=St(),n.pingedLanes|=n.suspendedLanes&a,st===n&&(ft&a)===a&&(tt===4||tt===3&&(ft&130023424)===ft&&500>Qe()-Nc?mr(n,0):Pc|=a),kt(n,i)}function wh(n,i){i===0&&(n.mode&1?(i=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):i=1);var a=St();n=_n(n,i),n!==null&&(Fi(n,i,a),kt(n,a))}function p1(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),wh(n,a)}function h1(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(r(314))}c!==null&&c.delete(i),wh(n,a)}var _h;_h=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Et.current)Ct=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Ct=!1,t1(n,i,a);Ct=!!(n.flags&131072)}else Ct=!1,Ue&&i.flags&1048576&&Zf(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Do(n,i),n=i.pendingProps;var d=qr(i,mt.current);Zr(i,a),d=ac(null,i,c,n,d,a);var h=lc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bt(c)?(h=!0,yo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ec(i),d.updater=Ro,i.stateNode=d,d._reactInternals=i,hc(i,c,n,a),i=yc(null,i,c,!0,h,a)):(i.tag=0,Ue&&h&&Wl(i),xt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Do(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=g1(c),n=Zt(c,n),d){case 0:i=vc(null,i,c,n,a);break e;case 1:i=Gp(null,i,c,n,a);break e;case 11:i=$p(null,i,c,n,a);break e;case 14:i=Vp(null,i,c,Zt(c.type,n),a);break e}throw Error(r(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zt(c,d),vc(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zt(c,d),Gp(n,i,c,d,a);case 3:e:{if(qp(i),n===null)throw Error(r(387));c=i.pendingProps,h=i.memoizedState,d=h.element,lp(n,i),ko(i,c,null,a);var w=i.memoizedState;if(c=w.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ti(Error(r(423)),i),i=Yp(n,i,c,a,d);break e}else if(c!==d){d=ti(Error(r(424)),i),i=Yp(n,i,c,a,d);break e}else for(jt=Bn(i.stateNode.containerInfo.firstChild),Rt=i,Ue=!0,Jt=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qr(),c===d){i=Sn(n,i,a);break e}xt(n,i,c,a)}i=i.child}return i;case 5:return dp(i),n===null&&ql(i),c=i.type,d=i.pendingProps,h=n!==null?n.memoizedProps:null,w=d.children,zl(c,d)?w=null:h!==null&&zl(c,h)&&(i.flags|=32),Up(n,i),xt(n,i,w,a),i.child;case 6:return n===null&&ql(i),null;case 13:return Kp(n,i,a);case 4:return tc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Xr(i,null,c,a):xt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zt(c,d),$p(n,i,c,d,a);case 7:return xt(n,i,i.pendingProps,a),i.child;case 8:return xt(n,i,i.pendingProps.children,a),i.child;case 12:return xt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,w=d.value,Le(bo,c._currentValue),c._currentValue=w,h!==null)if(Xt(h.value,w)){if(h.children===d.children&&!Et.current){i=Sn(n,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var S=h.dependencies;if(S!==null){w=h.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(h.tag===1){C=xn(-1,a&-a),C.tag=2;var R=h.updateQueue;if(R!==null){R=R.shared;var Y=R.pending;Y===null?C.next=C:(C.next=Y.next,Y.next=C),R.pending=C}}h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),Jl(h.return,a,i),S.lanes|=a;break}C=C.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(r(341));w.lanes|=a,S=w.alternate,S!==null&&(S.lanes|=a),Jl(w,a,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}xt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Zr(i,a),d=Vt(d),c=c(d),i.flags|=1,xt(n,i,c,a),i.child;case 14:return c=i.type,d=Zt(c,i.pendingProps),d=Zt(c.type,d),Vp(n,i,c,d,a);case 15:return Hp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Zt(c,d),Do(n,i),i.tag=1,bt(c)?(n=!0,yo(i)):n=!1,Zr(i,a),Rp(i,c,d),hc(i,c,d,a),yc(null,i,c,!0,n,a);case 19:return Xp(n,i,a);case 22:return Wp(n,i,a)}throw Error(r(156,i.tag))};function xh(n,i){return Zd(n,i)}function m1(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(n,i,a,c){return new m1(n,i,a,c)}function zc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function g1(n){if(typeof n=="function")return zc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===ie)return 14}return 2}function Xn(n,i){var a=n.alternate;return a===null?(a=Ut(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function qo(n,i,a,c,d,h){var w=2;if(c=n,typeof n=="function")zc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case Q:return vr(a.children,d,h,i);case W:w=8,d|=8;break;case H:return n=Ut(12,a,i,d|2),n.elementType=H,n.lanes=h,n;case $:return n=Ut(13,a,i,d),n.elementType=$,n.lanes=h,n;case q:return n=Ut(19,a,i,d),n.elementType=q,n.lanes=h,n;case _e:return Yo(a,d,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case U:w=10;break e;case F:w=9;break e;case z:w=11;break e;case ie:w=14;break e;case ge:w=16,c=null;break e}throw Error(r(130,n==null?n:typeof n,""))}return i=Ut(w,a,i,d),i.elementType=n,i.type=c,i.lanes=h,i}function vr(n,i,a,c){return n=Ut(7,n,c,i),n.lanes=a,n}function Yo(n,i,a,c){return n=Ut(22,n,c,i),n.elementType=_e,n.lanes=a,n.stateNode={isHidden:!1},n}function Fc(n,i,a){return n=Ut(6,n,null,i),n.lanes=a,n}function Bc(n,i,a){return i=Ut(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function v1(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $c(n,i,a,c,d,h,w,S,C){return n=new v1(n,i,a,S,C),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ut(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(h),n}function y1(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Sh(n){if(!n)return Vn;n=n._reactInternals;e:{if(sr(n)!==n||n.tag!==1)throw Error(r(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(n.tag===1){var a=n.type;if(bt(a))return Qf(n,a,i)}return i}function Eh(n,i,a,c,d,h,w,S,C){return n=$c(a,c,!0,n,d,h,w,S,C),n.context=Sh(null),a=n.current,c=St(),d=Kn(a),h=xn(c,d),h.callback=i??null,Un(a,h,d),n.current.lanes=d,Fi(n,d,c),kt(n,c),n}function Ko(n,i,a,c){var d=i.current,h=St(),w=Kn(d);return a=Sh(a),i.context===null?i.context=a:i.pendingContext=a,i=xn(h,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Un(d,i,w),n!==null&&(nn(n,d,w,h),To(n,d,w)),w}function Qo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function bh(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Vc(n,i){bh(n,i),(n=n.alternate)&&bh(n,i)}var Ch=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hc(n){this._internalRoot=n}Xo.prototype.render=Hc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));Ko(n,i,null,null)},Xo.prototype.unmount=Hc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hr(function(){Ko(null,n,null,null)}),i[gn]=null}};function Xo(n){this._internalRoot=n}Xo.prototype.unstable_scheduleHydration=function(n){if(n){var i=lf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ln.length&&i!==0&&i<Ln[a].priority;a++);Ln.splice(a,0,n),a===0&&df(n)}};function Wc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Jo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Th(){}function w1(n,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var R=Qo(w);h.call(R)}}var w=Eh(i,c,n,0,null,!1,!1,"",Th);return n._reactRootContainer=w,n[gn]=w.current,Zi(n.nodeType===8?n.parentNode:n),hr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var R=Qo(C);S.call(R)}}var C=$c(n,0,!1,null,null,!1,!1,"",Th);return n._reactRootContainer=C,n[gn]=C.current,Zi(n.nodeType===8?n.parentNode:n),hr(function(){Ko(i,C,a,c)}),C}function Zo(n,i,a,c,d){var h=a._reactRootContainer;if(h){var w=h;if(typeof d=="function"){var S=d;d=function(){var C=Qo(w);S.call(C)}}Ko(i,w,n,d)}else w=w1(a,i,n,d,c);return Qo(w)}of=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zi(i.pendingLanes);a!==0&&(hl(i,a|1),kt(i,Qe()),!(Te&6)&&(ii=Qe()+500,Hn()))}break;case 13:hr(function(){var c=_n(n,1);if(c!==null){var d=St();nn(c,n,1,d)}}),Vc(n,1)}},ml=function(n){if(n.tag===13){var i=_n(n,134217728);if(i!==null){var a=St();nn(i,n,134217728,a)}Vc(n,134217728)}},af=function(n){if(n.tag===13){var i=Kn(n),a=_n(n,i);if(a!==null){var c=St();nn(a,n,i,c)}Vc(n,i)}},lf=function(){return Oe},cf=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},al=function(n,i,a){switch(i){case"input":if(Rr(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=go(c);if(!d)throw Error(r(90));Ke(c),Rr(c,d)}}}break;case"textarea":Ld(n,a);break;case"select":i=a.value,i!=null&&jr(n,!!a.multiple,i,!1)}},Gd=jc,qd=hr;var _1={usingClientEntryPoint:!1,Events:[ns,Ur,go,Wd,Ud,jc]},gs={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x1={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xd(n),n===null?null:n.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Qs=ea.inject(x1),an=ea}catch{}}return It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1,It.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(i))throw Error(r(200));return y1(n,i,null,a)},It.createRoot=function(n,i){if(!Wc(n))throw Error(r(299));var a=!1,c="",d=Ch;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$c(n,1,!1,null,null,a,!1,c,d),n[gn]=i.current,Zi(n.nodeType===8?n.parentNode:n),new Hc(i)},It.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=Xd(i),n=n===null?null:n.stateNode,n},It.flushSync=function(n){return hr(n)},It.hydrate=function(n,i,a){if(!Jo(i))throw Error(r(200));return Zo(null,n,i,!0,a)},It.hydrateRoot=function(n,i,a){if(!Wc(n))throw Error(r(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",w=Ch;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Eh(i,null,n,1,a??null,d,!1,h,w),n[gn]=i.current,Zi(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Xo(i)},It.render=function(n,i,a){if(!Jo(i))throw Error(r(200));return Zo(null,n,i,!1,a)},It.unmountComponentAtNode=function(n){if(!Jo(n))throw Error(r(40));return n._reactRootContainer?(hr(function(){Zo(null,null,n,!1,function(){n._reactRootContainer=null,n[gn]=null})}),!0):!1},It.unstable_batchedUpdates=jc,It.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Jo(a))throw Error(r(200));if(n==null||n._reactInternals===void 0)throw Error(r(38));return Zo(n,i,a,!1,c)},It.version="18.3.1-next-f1338f8080-20240426",It}var Rh;function P1(){if(Rh)return qc.exports;Rh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),qc.exports=I1(),qc.exports}var jh;function N1(){if(jh)return ta;jh=1;var t=P1();return ta.createRoot=t.createRoot,ta.hydrateRoot=t.hydrateRoot,ta}var M1=N1(),Pt=function(){return Pt=Object.assign||function(e){for(var r,s=1,o=arguments.length;s<o;s++){r=arguments[s];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},Pt.apply(this,arguments)};function Ms(t,e,r){if(r||arguments.length===2)for(var s=0,o=e.length,l;s<o;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return t.concat(l||Array.prototype.slice.call(e))}var $e="-ms-",Cs="-moz-",Ne="-webkit-",eg="comm",za="rule",td="decl",O1="@import",tg="@keyframes",A1="@layer",ng=Math.abs,nd=String.fromCharCode,xu=Object.assign;function R1(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function rg(t){return t.trim()}function Tn(t,e){return(t=e.exec(t))?t[0]:t}function xe(t,e,r){return t.replace(e,r)}function ca(t,e,r){return t.indexOf(e,r)}function lt(t,e){return t.charCodeAt(e)|0}function vi(t,e,r){return t.slice(e,r)}function fn(t){return t.length}function ig(t){return t.length}function bs(t,e){return e.push(t),t}function j1(t,e){return t.map(e).join("")}function Dh(t,e){return t.filter(function(r){return!Tn(r,e)})}var Fa=1,yi=1,sg=0,qt=0,Ze=0,Ci="";function Ba(t,e,r,s,o,l,u,p){return{value:t,root:e,parent:r,type:s,props:o,children:l,line:Fa,column:yi,length:u,return:"",siblings:p}}function Zn(t,e){return xu(Ba("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function oi(t){for(;t.root;)t=Zn(t.root,{children:[t]});bs(t,t.siblings)}function D1(){return Ze}function L1(){return Ze=qt>0?lt(Ci,--qt):0,yi--,Ze===10&&(yi=1,Fa--),Ze}function sn(){return Ze=qt<sg?lt(Ci,qt++):0,yi++,Ze===10&&(yi=1,Fa++),Ze}function Er(){return lt(Ci,qt)}function ua(){return qt}function $a(t,e){return vi(Ci,t,e)}function Su(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z1(t){return Fa=yi=1,sg=fn(Ci=t),qt=0,[]}function F1(t){return Ci="",t}function Qc(t){return rg($a(qt-1,Eu(t===91?t+2:t===40?t+1:t)))}function B1(t){for(;(Ze=Er())&&Ze<33;)sn();return Su(t)>2||Su(Ze)>3?"":" "}function $1(t,e){for(;--e&&sn()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return $a(t,ua()+(e<6&&Er()==32&&sn()==32))}function Eu(t){for(;sn();)switch(Ze){case t:return qt;case 34:case 39:t!==34&&t!==39&&Eu(Ze);break;case 40:t===41&&Eu(t);break;case 92:sn();break}return qt}function V1(t,e){for(;sn()&&t+Ze!==57;)if(t+Ze===84&&Er()===47)break;return"/*"+$a(e,qt-1)+"*"+nd(t===47?t:sn())}function H1(t){for(;!Su(Er());)sn();return $a(t,qt)}function W1(t){return F1(da("",null,null,null,[""],t=z1(t),0,[0],t))}function da(t,e,r,s,o,l,u,p,f){for(var m=0,g=0,y=u,_=0,x=0,b=0,O=1,L=1,P=1,T=0,E="",N=o,j=l,D=s,Q=E;L;)switch(b=T,T=sn()){case 40:if(b!=108&&lt(Q,y-1)==58){ca(Q+=xe(Qc(T),"&","&\f"),"&\f",ng(m?p[m-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:Q+=Qc(T);break;case 9:case 10:case 13:case 32:Q+=B1(b);break;case 92:Q+=$1(ua()-1,7);continue;case 47:switch(Er()){case 42:case 47:bs(U1(V1(sn(),ua()),e,r,f),f);break;default:Q+="/"}break;case 123*O:p[m++]=fn(Q)*P;case 125*O:case 59:case 0:switch(T){case 0:case 125:L=0;case 59+g:P==-1&&(Q=xe(Q,/\f/g,"")),x>0&&fn(Q)-y&&bs(x>32?zh(Q+";",s,r,y-1,f):zh(xe(Q," ","")+";",s,r,y-2,f),f);break;case 59:Q+=";";default:if(bs(D=Lh(Q,e,r,m,g,o,p,E,N=[],j=[],y,l),l),T===123)if(g===0)da(Q,e,D,D,N,l,y,p,j);else switch(_===99&&lt(Q,3)===110?100:_){case 100:case 108:case 109:case 115:da(t,D,D,s&&bs(Lh(t,D,D,0,0,o,p,E,o,N=[],y,j),j),o,j,y,p,s?N:j);break;default:da(Q,D,D,D,[""],j,0,p,j)}}m=g=x=0,O=P=1,E=Q="",y=u;break;case 58:y=1+fn(Q),x=b;default:if(O<1){if(T==123)--O;else if(T==125&&O++==0&&L1()==125)continue}switch(Q+=nd(T),T*O){case 38:P=g>0?1:(Q+="\f",-1);break;case 44:p[m++]=(fn(Q)-1)*P,P=1;break;case 64:Er()===45&&(Q+=Qc(sn())),_=Er(),g=y=fn(E=Q+=H1(ua())),T++;break;case 45:b===45&&fn(Q)==2&&(O=0)}}return l}function Lh(t,e,r,s,o,l,u,p,f,m,g,y){for(var _=o-1,x=o===0?l:[""],b=ig(x),O=0,L=0,P=0;O<s;++O)for(var T=0,E=vi(t,_+1,_=ng(L=u[O])),N=t;T<b;++T)(N=rg(L>0?x[T]+" "+E:xe(E,/&\f/g,x[T])))&&(f[P++]=N);return Ba(t,e,r,o===0?za:p,f,m,g,y)}function U1(t,e,r,s){return Ba(t,e,r,eg,nd(D1()),vi(t,2,-2),0,s)}function zh(t,e,r,s,o){return Ba(t,e,r,td,vi(t,0,s),vi(t,s+1,-1),s,o)}function og(t,e,r){switch(R1(t,e)){case 5103:return Ne+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ne+t+t;case 4789:return Cs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ne+t+Cs+t+$e+t+t;case 5936:switch(lt(t,e+11)){case 114:return Ne+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ne+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ne+t+$e+xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ne+t+$e+t+t;case 6165:return Ne+t+$e+"flex-"+t+t;case 5187:return Ne+t+xe(t,/(\w+).+(:[^]+)/,Ne+"box-$1$2"+$e+"flex-$1$2")+t;case 5443:return Ne+t+$e+"flex-item-"+xe(t,/flex-|-self/g,"")+(Tn(t,/flex-|baseline/)?"":$e+"grid-row-"+xe(t,/flex-|-self/g,""))+t;case 4675:return Ne+t+$e+"flex-line-pack"+xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ne+t+$e+xe(t,"shrink","negative")+t;case 5292:return Ne+t+$e+xe(t,"basis","preferred-size")+t;case 6060:return Ne+"box-"+xe(t,"-grow","")+Ne+t+$e+xe(t,"grow","positive")+t;case 4554:return Ne+xe(t,/([^-])(transform)/g,"$1"+Ne+"$2")+t;case 6187:return xe(xe(xe(t,/(zoom-|grab)/,Ne+"$1"),/(image-set)/,Ne+"$1"),t,"")+t;case 5495:case 3959:return xe(t,/(image-set\([^]*)/,Ne+"$1$`$1");case 4968:return xe(xe(t,/(.+:)(flex-)?(.*)/,Ne+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ne+t+t;case 4200:if(!Tn(t,/flex-|baseline/))return $e+"grid-column-align"+vi(t,e)+t;break;case 2592:case 3360:return $e+xe(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,o){return e=o,Tn(s.props,/grid-\w+-end/)})?~ca(t+(r=r[e].value),"span",0)?t:$e+xe(t,"-start","")+t+$e+"grid-row-span:"+(~ca(r,"span",0)?Tn(r,/\d+/):+Tn(r,/\d+/)-+Tn(t,/\d+/))+";":$e+xe(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return Tn(s.props,/grid-\w+-start/)})?t:$e+xe(xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return xe(t,/(.+)-inline(.+)/,Ne+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return xe(t,/(.+:)(.+)-([^]+)/,"$1"+Ne+"$2-$3$1"+Cs+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ca(t,"stretch",0)?og(xe(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,u,p,f,m){return $e+o+":"+l+m+(u?$e+o+"-span:"+(p?f:+f-+l)+m:"")+t});case 4949:if(lt(t,e+6)===121)return xe(t,":",":"+Ne)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ne+(lt(t,14)===45?"inline-":"")+"box$3$1"+Ne+"$2$3$1"+$e+"$2box$3")+t;case 100:return xe(t,":",":"+$e)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(t,"scroll-","scroll-snap-")+t}return t}function va(t,e){for(var r="",s=0;s<t.length;s++)r+=e(t[s],s,t,e)||"";return r}function G1(t,e,r,s){switch(t.type){case A1:if(t.children.length)break;case O1:case td:return t.return=t.return||t.value;case eg:return"";case tg:return t.return=t.value+"{"+va(t.children,s)+"}";case za:if(!fn(t.value=t.props.join(",")))return""}return fn(r=va(t.children,s))?t.return=t.value+"{"+r+"}":""}function q1(t){var e=ig(t);return function(r,s,o,l){for(var u="",p=0;p<e;p++)u+=t[p](r,s,o,l)||"";return u}}function Y1(t){return function(e){e.root||(e=e.return)&&t(e)}}function K1(t,e,r,s){if(t.length>-1&&!t.return)switch(t.type){case td:t.return=og(t.value,t.length,r);return;case tg:return va([Zn(t,{value:xe(t.value,"@","@"+Ne)})],s);case za:if(t.length)return j1(r=t.props,function(o){switch(Tn(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oi(Zn(t,{props:[xe(o,/:(read-\w+)/,":"+Cs+"$1")]})),oi(Zn(t,{props:[o]})),xu(t,{props:Dh(r,s)});break;case"::placeholder":oi(Zn(t,{props:[xe(o,/:(plac\w+)/,":"+Ne+"input-$1")]})),oi(Zn(t,{props:[xe(o,/:(plac\w+)/,":"+Cs+"$1")]})),oi(Zn(t,{props:[xe(o,/:(plac\w+)/,$e+"input-$1")]})),oi(Zn(t,{props:[o]})),xu(t,{props:Dh(r,s)});break}return""})}}var Q1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},wi=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",ag="active",lg="data-styled-version",Va="6.1.13",rd=`/*!sc*/
`,ya=typeof window<"u"&&"HTMLElement"in window,X1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),Ha=Object.freeze([]),_i=Object.freeze({});function J1(t,e,r){return r===void 0&&(r=_i),t.theme!==r.theme&&t.theme||e||r.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Z1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ew=/(^-|-$)/g;function Fh(t){return t.replace(Z1,"-").replace(ew,"")}var tw=/(a)(d)/gi,na=52,Bh=function(t){return String.fromCharCode(t+(t>25?39:97))};function bu(t){var e,r="";for(e=Math.abs(t);e>na;e=e/na|0)r=Bh(e%na)+r;return(Bh(e%na)+r).replace(tw,"$1-$2")}var Xc,ug=5381,di=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},dg=function(t){return di(ug,t)};function fg(t){return bu(dg(t)>>>0)}function nw(t){return t.displayName||t.name||"Component"}function Jc(t){return typeof t=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,hg=pg?Symbol.for("react.memo"):60115,rw=pg?Symbol.for("react.forward_ref"):60112,iw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ow=((Xc={})[rw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[hg]=mg,Xc);function $h(t){return("type"in(e=t)&&e.type.$$typeof)===hg?mg:"$$typeof"in t?ow[t.$$typeof]:iw;var e}var aw=Object.defineProperty,lw=Object.getOwnPropertyNames,Vh=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,uw=Object.getPrototypeOf,Hh=Object.prototype;function gg(t,e,r){if(typeof e!="string"){if(Hh){var s=uw(e);s&&s!==Hh&&gg(t,s,r)}var o=lw(e);Vh&&(o=o.concat(Vh(e)));for(var l=$h(t),u=$h(e),p=0;p<o.length;++p){var f=o[p];if(!(f in sw||r&&r[f]||u&&f in u||l&&f in l)){var m=cw(e,f);try{aw(t,f,m)}catch{}}}}return t}function xi(t){return typeof t=="function"}function id(t){return typeof t=="object"&&"styledComponentId"in t}function _r(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Cu(t,e){if(t.length===0)return"";for(var r=t[0],s=1;s<t.length;s++)r+=t[s];return r}function Os(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Tu(t,e,r){if(r===void 0&&(r=!1),!r&&!Os(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)t[s]=Tu(t[s],e[s]);else if(Os(e))for(var s in e)t[s]=Tu(t[s],e[s]);return t}function sd(t,e){Object.defineProperty(t,"toString",{value:e})}function zs(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dw=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,s=0;s<e;s++)r+=this.groupSizes[s];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;e>=l;)if((l<<=1)<0)throw zs(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var p=this.indexOfGroup(e+1),f=(u=0,r.length);u<f;u++)this.tag.insertRule(p,r[u])&&(this.groupSizes[e]++,p++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],s=this.indexOfGroup(e),o=s+r;this.groupSizes[e]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),l=o+s,u=o;u<l;u++)r+="".concat(this.tag.getRule(u)).concat(rd);return r},t}(),fa=new Map,wa=new Map,pa=1,ra=function(t){if(fa.has(t))return fa.get(t);for(;wa.has(pa);)pa++;var e=pa++;return fa.set(t,e),wa.set(e,t),e},fw=function(t,e){pa=e+1,fa.set(t,e),wa.set(e,t)},pw="style[".concat(wi,"][").concat(lg,'="').concat(Va,'"]'),hw=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mw=function(t,e,r){for(var s,o=r.split(","),l=0,u=o.length;l<u;l++)(s=o[l])&&t.registerName(e,s)},gw=function(t,e){for(var r,s=((r=e.textContent)!==null&&r!==void 0?r:"").split(rd),o=[],l=0,u=s.length;l<u;l++){var p=s[l].trim();if(p){var f=p.match(hw);if(f){var m=0|parseInt(f[1],10),g=f[2];m!==0&&(fw(g,m),mw(t,g,f[3]),t.getTag().insertRules(m,o)),o.length=0}else o.push(p)}}},Wh=function(t){for(var e=document.querySelectorAll(pw),r=0,s=e.length;r<s;r++){var o=e[r];o&&o.getAttribute(wi)!==ag&&(gw(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function vw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(t){var e=document.head,r=t||e,s=document.createElement("style"),o=function(p){var f=Array.from(p.querySelectorAll("style[".concat(wi,"]")));return f[f.length-1]}(r),l=o!==void 0?o.nextSibling:null;s.setAttribute(wi,ag),s.setAttribute(lg,Va);var u=vw();return u&&s.setAttribute("nonce",u),r.insertBefore(s,l),s},yw=function(){function t(e){this.element=vg(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var u=s[o];if(u.ownerNode===r)return u}throw zs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),ww=function(){function t(e){this.element=vg(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),_w=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Uh=ya,xw={isServer:!ya,useCSSOMInjection:!X1},yg=function(){function t(e,r,s){e===void 0&&(e=_i),r===void 0&&(r={});var o=this;this.options=Pt(Pt({},xw),e),this.gs=r,this.names=new Map(s),this.server=!!e.isServer,!this.server&&ya&&Uh&&(Uh=!1,Wh(this)),sd(this,function(){return function(l){for(var u=l.getTag(),p=u.length,f="",m=function(y){var _=function(P){return wa.get(P)}(y);if(_===void 0)return"continue";var x=l.names.get(_),b=u.getGroup(y);if(x===void 0||!x.size||b.length===0)return"continue";var O="".concat(wi,".g").concat(y,'[id="').concat(_,'"]'),L="";x!==void 0&&x.forEach(function(P){P.length>0&&(L+="".concat(P,","))}),f+="".concat(b).concat(O,'{content:"').concat(L,'"}').concat(rd)},g=0;g<p;g++)m(g);return f}(o)})}return t.registerId=function(e){return ra(e)},t.prototype.rehydrate=function(){!this.server&&ya&&Wh(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(Pt(Pt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var s=r.useCSSOMInjection,o=r.target;return r.isServer?new _w(o):s?new yw(o):new ww(o)}(this.options),new dw(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(ra(e),this.names.has(e))this.names.get(e).add(r);else{var s=new Set;s.add(r),this.names.set(e,s)}},t.prototype.insertRules=function(e,r,s){this.registerName(e,r),this.getTag().insertRules(ra(e),s)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ra(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Sw=/&/g,Ew=/^\s*\/\/.*$/gm;function wg(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=wg(r.children,e)),r})}function bw(t){var e,r,s,o=_i,l=o.options,u=l===void 0?_i:l,p=o.plugins,f=p===void 0?Ha:p,m=function(_,x,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):_},g=f.slice();g.push(function(_){_.type===za&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(Sw,r).replace(s,m))}),u.prefix&&g.push(K1),g.push(G1);var y=function(_,x,b,O){x===void 0&&(x=""),b===void 0&&(b=""),O===void 0&&(O="&"),e=O,r=x,s=new RegExp("\\".concat(r,"\\b"),"g");var L=_.replace(Ew,""),P=W1(b||x?"".concat(b," ").concat(x," { ").concat(L," }"):L);u.namespace&&(P=wg(P,u.namespace));var T=[];return va(P,q1(g.concat(Y1(function(E){return T.push(E)})))),T};return y.hash=f.length?f.reduce(function(_,x){return x.name||zs(15),di(_,x.name)},ug).toString():"",y}var Cw=new yg,ku=bw(),_g=Pe.createContext({shouldForwardProp:void 0,styleSheet:Cw,stylis:ku});_g.Consumer;Pe.createContext(void 0);function Gh(){return pe.useContext(_g)}var xg=function(){function t(e,r){var s=this;this.inject=function(o,l){l===void 0&&(l=ku);var u=s.name+l.hash;o.hasNameForId(s.id,u)||o.insertRules(s.id,u,l(s.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,sd(this,function(){throw zs(12,String(s.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ku),this.name+e.hash},t}(),Tw=function(t){return t>="A"&&t<="Z"};function qh(t){for(var e="",r=0;r<t.length;r++){var s=t[r];if(r===1&&s==="-"&&t[0]==="-")return t;Tw(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var Sg=function(t){return t==null||t===!1||t===""},Eg=function(t){var e,r,s=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!Sg(l)&&(Array.isArray(l)&&l.isCss||xi(l)?s.push("".concat(qh(o),":"),l,";"):Os(l)?s.push.apply(s,Ms(Ms(["".concat(o," {")],Eg(l),!1),["}"],!1)):s.push("".concat(qh(o),": ").concat((e=o,(r=l)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Q1||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function br(t,e,r,s){if(Sg(t))return[];if(id(t))return[".".concat(t.styledComponentId)];if(xi(t)){if(!xi(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return br(o,e,r,s)}var l;return t instanceof xg?r?(t.inject(r,s),[t.getName(s)]):[t]:Os(t)?Eg(t):Array.isArray(t)?Array.prototype.concat.apply(Ha,t.map(function(u){return br(u,e,r,s)})):[t.toString()]}function kw(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(xi(r)&&!id(r))return!1}return!0}var Iw=dg(Va),Pw=function(){function t(e,r,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&kw(e),this.componentId=r,this.baseHash=di(Iw,r),this.baseStyle=s,yg.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=_r(o,this.staticRulesId);else{var l=Cu(br(this.rules,e,r,s)),u=bu(di(this.baseHash,l)>>>0);if(!r.hasNameForId(this.componentId,u)){var p=s(l,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,p)}o=_r(o,u),this.staticRulesId=u}else{for(var f=di(this.baseHash,s.hash),m="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")m+=y;else if(y){var _=Cu(br(y,e,r,s));f=di(f,_+g),m+=_}}if(m){var x=bu(f>>>0);r.hasNameForId(this.componentId,x)||r.insertRules(this.componentId,x,s(m,".".concat(x),void 0,this.componentId)),o=_r(o,x)}}return o},t}(),bg=Pe.createContext(void 0);bg.Consumer;var Zc={};function Nw(t,e,r){var s=id(t),o=t,l=!Jc(t),u=e.attrs,p=u===void 0?Ha:u,f=e.componentId,m=f===void 0?function(N,j){var D=typeof N!="string"?"sc":Fh(N);Zc[D]=(Zc[D]||0)+1;var Q="".concat(D,"-").concat(fg(Va+D+Zc[D]));return j?"".concat(j,"-").concat(Q):Q}(e.displayName,e.parentComponentId):f,g=e.displayName,y=g===void 0?function(N){return Jc(N)?"styled.".concat(N):"Styled(".concat(nw(N),")")}(t):g,_=e.displayName&&e.componentId?"".concat(Fh(e.displayName),"-").concat(e.componentId):e.componentId||m,x=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,b=e.shouldForwardProp;if(s&&o.shouldForwardProp){var O=o.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;b=function(N,j){return O(N,j)&&L(N,j)}}else b=O}var P=new Pw(r,_,s?o.componentStyle:void 0);function T(N,j){return function(D,Q,W){var H=D.attrs,U=D.componentStyle,F=D.defaultProps,z=D.foldedComponentIds,$=D.styledComponentId,q=D.target,ie=Pe.useContext(bg),ge=Gh(),_e=D.shouldForwardProp||ge.shouldForwardProp,V=J1(Q,ie,F)||_i,J=function(ve,he,me){for(var le,we=Pt(Pt({},he),{className:void 0,theme:me}),De=0;De<ve.length;De+=1){var rt=xi(le=ve[De])?le(we):le;for(var Ke in rt)we[Ke]=Ke==="className"?_r(we[Ke],rt[Ke]):Ke==="style"?Pt(Pt({},we[Ke]),rt[Ke]):rt[Ke]}return he.className&&(we.className=_r(we.className,he.className)),we}(H,Q,V),K=J.as||q,I={};for(var B in J)J[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&J.theme===V||(B==="forwardedAs"?I.as=J.forwardedAs:_e&&!_e(B,K)||(I[B]=J[B]));var ue=function(ve,he){var me=Gh(),le=ve.generateAndInjectStyles(he,me.styleSheet,me.stylis);return le}(U,J),ce=_r(z,$);return ue&&(ce+=" "+ue),J.className&&(ce+=" "+J.className),I[Jc(K)&&!cg.has(K)?"class":"className"]=ce,I.ref=W,pe.createElement(K,I)}(E,N,j)}T.displayName=y;var E=Pe.forwardRef(T);return E.attrs=x,E.componentStyle=P,E.displayName=y,E.shouldForwardProp=b,E.foldedComponentIds=s?_r(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=_,E.target=s?o.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=s?function(j){for(var D=[],Q=1;Q<arguments.length;Q++)D[Q-1]=arguments[Q];for(var W=0,H=D;W<H.length;W++)Tu(j,H[W],!0);return j}({},o.defaultProps,N):N}}),sd(E,function(){return".".concat(E.styledComponentId)}),l&&gg(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Yh(t,e){for(var r=[t[0]],s=0,o=e.length;s<o;s+=1)r.push(e[s],t[s+1]);return r}var Kh=function(t){return Object.assign(t,{isCss:!0})};function Cg(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(xi(t)||Os(t))return Kh(br(Yh(Ha,Ms([t],e,!0))));var s=t;return e.length===0&&s.length===1&&typeof s[0]=="string"?br(s):Kh(br(Yh(s,e)))}function Iu(t,e,r){if(r===void 0&&(r=_i),!e)throw zs(1,e);var s=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return t(e,r,Cg.apply(void 0,Ms([o],l,!1)))};return s.attrs=function(o){return Iu(t,e,Pt(Pt({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Iu(t,e,Pt(Pt({},r),o))},s}var Tg=function(t){return Iu(Nw,t)},ee=Tg;cg.forEach(function(t){ee[t]=Tg(t)});function Wa(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var s=Cu(Cg.apply(void 0,Ms([t],e,!1))),o=fg(s);return new xg(o,s)}var ha={exports:{}},Mw=ha.exports,Qh;function Ow(){return Qh||(Qh=1,function(t,e){(function(r,s){t.exports=s()})(Mw,function(){return function(r){function s(l){if(o[l])return o[l].exports;var u=o[l]={exports:{},id:l,loaded:!1};return r[l].call(u.exports,u,u.exports,s),u.loaded=!0,u.exports}var o={};return s.m=r,s.c=o,s.p="dist/",s(0)}([function(r,s,o){function l(q){return q&&q.__esModule?q:{default:q}}var u=Object.assign||function(q){for(var ie=1;ie<arguments.length;ie++){var ge=arguments[ie];for(var _e in ge)Object.prototype.hasOwnProperty.call(ge,_e)&&(q[_e]=ge[_e])}return q},p=o(1),f=(l(p),o(6)),m=l(f),g=o(7),y=l(g),_=o(8),x=l(_),b=o(9),O=l(b),L=o(10),P=l(L),T=o(11),E=l(T),N=o(14),j=l(N),D=[],Q=!1,W={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var q=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(q&&(Q=!0),Q)return D=(0,E.default)(D,W),(0,P.default)(D,W.once),D},U=function(){D=(0,j.default)(),H()},F=function(){D.forEach(function(q,ie){q.node.removeAttribute("data-aos"),q.node.removeAttribute("data-aos-easing"),q.node.removeAttribute("data-aos-duration"),q.node.removeAttribute("data-aos-delay")})},z=function(q){return q===!0||q==="mobile"&&O.default.mobile()||q==="phone"&&O.default.phone()||q==="tablet"&&O.default.tablet()||typeof q=="function"&&q()===!0},$=function(q){W=u(W,q),D=(0,j.default)();var ie=document.all&&!window.atob;return z(W.disable)||ie?F():(W.disableMutationObserver||x.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),W.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",W.easing),document.querySelector("body").setAttribute("data-aos-duration",W.duration),document.querySelector("body").setAttribute("data-aos-delay",W.delay),W.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):W.startEvent==="load"?window.addEventListener(W.startEvent,function(){H(!0)}):document.addEventListener(W.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,y.default)(H,W.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(H,W.debounceDelay,!0)),window.addEventListener("scroll",(0,m.default)(function(){(0,P.default)(D,W.once)},W.throttleDelay)),W.disableMutationObserver||x.default.ready("[data-aos]",U),D)};r.exports={init:$,refresh:H,refreshHard:U}},function(r,s){},,,,,function(r,s){(function(o){function l(z,$,q){function ie(ke){var ut=ce,Kt=ve;return ce=ve=void 0,De=ke,me=z.apply(Kt,ut)}function ge(ke){return De=ke,le=setTimeout(J,$),rt?ie(ke):me}function _e(ke){var ut=ke-we,Kt=ke-De,Rr=$-ut;return Ke?U(Rr,he-Kt):Rr}function V(ke){var ut=ke-we,Kt=ke-De;return we===void 0||ut>=$||ut<0||Ke&&Kt>=he}function J(){var ke=F();return V(ke)?K(ke):void(le=setTimeout(J,_e(ke)))}function K(ke){return le=void 0,Re&&ce?ie(ke):(ce=ve=void 0,me)}function I(){le!==void 0&&clearTimeout(le),De=0,ce=we=ve=le=void 0}function B(){return le===void 0?me:K(F())}function ue(){var ke=F(),ut=V(ke);if(ce=arguments,ve=this,we=ke,ut){if(le===void 0)return ge(we);if(Ke)return le=setTimeout(J,$),ie(we)}return le===void 0&&(le=setTimeout(J,$)),me}var ce,ve,he,me,le,we,De=0,rt=!1,Ke=!1,Re=!0;if(typeof z!="function")throw new TypeError(_);return $=g($)||0,p(q)&&(rt=!!q.leading,Ke="maxWait"in q,he=Ke?H(g(q.maxWait)||0,$):he,Re="trailing"in q?!!q.trailing:Re),ue.cancel=I,ue.flush=B,ue}function u(z,$,q){var ie=!0,ge=!0;if(typeof z!="function")throw new TypeError(_);return p(q)&&(ie="leading"in q?!!q.leading:ie,ge="trailing"in q?!!q.trailing:ge),l(z,$,{leading:ie,maxWait:$,trailing:ge})}function p(z){var $=typeof z>"u"?"undefined":y(z);return!!z&&($=="object"||$=="function")}function f(z){return!!z&&(typeof z>"u"?"undefined":y(z))=="object"}function m(z){return(typeof z>"u"?"undefined":y(z))=="symbol"||f(z)&&W.call(z)==b}function g(z){if(typeof z=="number")return z;if(m(z))return x;if(p(z)){var $=typeof z.valueOf=="function"?z.valueOf():z;z=p($)?$+"":$}if(typeof z!="string")return z===0?z:+z;z=z.replace(O,"");var q=P.test(z);return q||T.test(z)?E(z.slice(2),q?2:8):L.test(z)?x:+z}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},_="Expected a function",x=NaN,b="[object Symbol]",O=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,T=/^0o[0-7]+$/i,E=parseInt,N=(typeof o>"u"?"undefined":y(o))=="object"&&o&&o.Object===Object&&o,j=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,D=N||j||Function("return this")(),Q=Object.prototype,W=Q.toString,H=Math.max,U=Math.min,F=function(){return D.Date.now()};r.exports=u}).call(s,function(){return this}())},function(r,s){(function(o){function l(F,z,$){function q(Re){var ke=ue,ut=ce;return ue=ce=void 0,we=Re,he=F.apply(ut,ke)}function ie(Re){return we=Re,me=setTimeout(V,z),De?q(Re):he}function ge(Re){var ke=Re-le,ut=Re-we,Kt=z-ke;return rt?H(Kt,ve-ut):Kt}function _e(Re){var ke=Re-le,ut=Re-we;return le===void 0||ke>=z||ke<0||rt&&ut>=ve}function V(){var Re=U();return _e(Re)?J(Re):void(me=setTimeout(V,ge(Re)))}function J(Re){return me=void 0,Ke&&ue?q(Re):(ue=ce=void 0,he)}function K(){me!==void 0&&clearTimeout(me),we=0,ue=le=ce=me=void 0}function I(){return me===void 0?he:J(U())}function B(){var Re=U(),ke=_e(Re);if(ue=arguments,ce=this,le=Re,ke){if(me===void 0)return ie(le);if(rt)return me=setTimeout(V,z),q(le)}return me===void 0&&(me=setTimeout(V,z)),he}var ue,ce,ve,he,me,le,we=0,De=!1,rt=!1,Ke=!0;if(typeof F!="function")throw new TypeError(y);return z=m(z)||0,u($)&&(De=!!$.leading,rt="maxWait"in $,ve=rt?W(m($.maxWait)||0,z):ve,Ke="trailing"in $?!!$.trailing:Ke),B.cancel=K,B.flush=I,B}function u(F){var z=typeof F>"u"?"undefined":g(F);return!!F&&(z=="object"||z=="function")}function p(F){return!!F&&(typeof F>"u"?"undefined":g(F))=="object"}function f(F){return(typeof F>"u"?"undefined":g(F))=="symbol"||p(F)&&Q.call(F)==x}function m(F){if(typeof F=="number")return F;if(f(F))return _;if(u(F)){var z=typeof F.valueOf=="function"?F.valueOf():F;F=u(z)?z+"":z}if(typeof F!="string")return F===0?F:+F;F=F.replace(b,"");var $=L.test(F);return $||P.test(F)?T(F.slice(2),$?2:8):O.test(F)?_:+F}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},y="Expected a function",_=NaN,x="[object Symbol]",b=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,P=/^0o[0-7]+$/i,T=parseInt,E=(typeof o>"u"?"undefined":g(o))=="object"&&o&&o.Object===Object&&o,N=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,j=E||N||Function("return this")(),D=Object.prototype,Q=D.toString,W=Math.max,H=Math.min,U=function(){return j.Date.now()};r.exports=l}).call(s,function(){return this}())},function(r,s){function o(g){var y=void 0,_=void 0;for(y=0;y<g.length;y+=1)if(_=g[y],_.dataset&&_.dataset.aos||_.children&&o(_.children))return!0;return!1}function l(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!l()}function p(g,y){var _=window.document,x=l(),b=new x(f);m=y,b.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(g){g&&g.forEach(function(y){var _=Array.prototype.slice.call(y.addedNodes),x=Array.prototype.slice.call(y.removedNodes),b=_.concat(x);if(o(b))return m()})}Object.defineProperty(s,"__esModule",{value:!0});var m=function(){};s.default={isSupported:u,ready:p}},function(r,s){function o(_,x){if(!(_ instanceof x))throw new TypeError("Cannot call a class as a function")}function l(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var u=function(){function _(x,b){for(var O=0;O<b.length;O++){var L=b[O];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}return function(x,b,O){return b&&_(x.prototype,b),O&&_(x,O),x}}(),p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,m=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=function(){function _(){o(this,_)}return u(_,[{key:"phone",value:function(){var x=l();return!(!p.test(x)&&!f.test(x.substr(0,4)))}},{key:"mobile",value:function(){var x=l();return!(!m.test(x)&&!g.test(x.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_}();s.default=new y},function(r,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(u,p,f){var m=u.node.getAttribute("data-aos-once");p>u.position?u.node.classList.add("aos-animate"):typeof m<"u"&&(m==="false"||!f&&m!=="true")&&u.node.classList.remove("aos-animate")},l=function(u,p){var f=window.pageYOffset,m=window.innerHeight;u.forEach(function(g,y){o(g,m+f,p)})};s.default=l},function(r,s,o){function l(m){return m&&m.__esModule?m:{default:m}}Object.defineProperty(s,"__esModule",{value:!0});var u=o(12),p=l(u),f=function(m,g){return m.forEach(function(y,_){y.node.classList.add("aos-init"),y.position=(0,p.default)(y.node,g.offset)}),m};s.default=f},function(r,s,o){function l(m){return m&&m.__esModule?m:{default:m}}Object.defineProperty(s,"__esModule",{value:!0});var u=o(13),p=l(u),f=function(m,g){var y=0,_=0,x=window.innerHeight,b={offset:m.getAttribute("data-aos-offset"),anchor:m.getAttribute("data-aos-anchor"),anchorPlacement:m.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(_=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(m=document.querySelectorAll(b.anchor)[0]),y=(0,p.default)(m).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=m.offsetHeight/2;break;case"bottom-bottom":y+=m.offsetHeight;break;case"top-center":y+=x/2;break;case"bottom-center":y+=x/2+m.offsetHeight;break;case"center-center":y+=x/2+m.offsetHeight/2;break;case"top-top":y+=x;break;case"bottom-top":y+=m.offsetHeight+x;break;case"center-top":y+=m.offsetHeight/2+x}return b.anchorPlacement||b.offset||isNaN(g)||(_=g),y+_};s.default=f},function(r,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(l){for(var u=0,p=0;l&&!isNaN(l.offsetLeft)&&!isNaN(l.offsetTop);)u+=l.offsetLeft-(l.tagName!="BODY"?l.scrollLeft:0),p+=l.offsetTop-(l.tagName!="BODY"?l.scrollTop:0),l=l.offsetParent;return{top:p,left:u}};s.default=o},function(r,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(l){return l=l||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(l,function(u){return{node:u}})};s.default=o}])})}(ha)),ha.exports}var Aw=Ow();const Tr=Zm(Aw),Rw=ee.header`
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
  transform: ${({scrolling:t})=>t?"translateX(-50%) translateY(-150%)":"translateX(-50%) translateY(0)"};
`,jw=ee.div`
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
`;function Dw(){const[t,e]=pe.useState(!1),r=pe.useRef(null);return pe.useEffect(()=>{Tr.init({duration:1500,offset:20,easing:"ease-in-out",once:!0})},[]),pe.useEffect(()=>{const s=()=>{e(!0),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{e(!1)},200)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),r.current&&clearTimeout(r.current)}},[]),v.jsx(Rw,{scrolling:t,children:v.jsx(jw,{"data-aos":"zoom-out-top","data-aos-delay":"100",children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png",alt:"logo"})})})})}const Lw=ee.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: var(--color--white);
    transition: all .2s ease-in-out;

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    &:hover{
        background-color: transparent;
        border: 1px solid var(--color--white);
    }

    &:hover > b {
        color: var(--color--white);
        background: transparent;
        font-weight: 400;
    }

    &:hover > img {
        filter: brightness(500%);
    }

    & > img {
        width: 20px;
        object-fit: contain;
        transition: all .2s ease-in-out;
    }

    & > b{
        background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
`,Mr=()=>v.jsx(v.Fragment,{children:v.jsxs(Lw,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",onClick:()=>{window.open("https://w.app/5AaZMJ","_blank")},children:[v.jsx("b",{children:"Solicitar orçamento"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"})]})}),zw=ee.button`
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
    transition: all .2s ease-in-out;

    &:hover{
        background-color: var(--color--white);
    }

    &:hover > b {
        background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 400;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 200;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
    
`,Fw=()=>v.jsx(v.Fragment,{children:v.jsx(zw,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",onClick:()=>{window.open("https://w.app/5AaZMJ","_blank")},children:v.jsx("b",{children:"Saber mais"})})});Wa`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;const Bw=ee.div`
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
`,$w=ee.section`
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
`,Vw=ee.div`
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
`,Hw=ee.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 50px!important;
        height: 70%!important;
        margin-bottom: -20px!important;
    }

    & > video {
        width: 55%!important;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 0 10px rgba(225, 255, 255, 0.4)) drop-shadow(0 0 20px #D552D040) drop-shadow(0 0 30px #5339DF40);
        transition: filter 0.3s ease;
        position: relative;

        @media (max-width: 768px) {
            display: none;
        }
    }

    & > img {
        width: 95%!important;
        height: 100%;
        object-fit: contain;
        border-radius: 8px; 

        @media (max-width: 768px){
            width: 90%!important;
        }
    }
`,Ww=ee.div`
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
`,Uw=()=>{const t=pe.useRef(null),[e,r]=pe.useState(!1);return pe.useEffect(()=>{const s=t.current;if(window.innerWidth<=768){r(!0);return}if(s){const l=()=>{r(!0)};return s.addEventListener("ended",l),()=>{s.removeEventListener("ended",l)}}},[]),v.jsxs(v.Fragment,{children:[v.jsx(Bw,{}),v.jsxs($w,{children:[v.jsxs(Vw,{children:[v.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:["Já imaginou ter um ",v.jsx("b",{children:"site de altíssimo"})," padrão?"]}),v.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta."}),v.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"300",children:[v.jsx(Mr,{}),v.jsx(Fw,{})]}),v.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos."}),v.jsxs(Ww,{"data-aos":"fade-in","data-aos-delay":"500",children:[v.jsx("div",{}),v.jsx("div",{}),v.jsx("div",{}),v.jsx("div",{}),v.jsxs("article",{children:[v.jsx("span",{"data-aos":"fade-in","data-aos-delay":"1000",children:"4.9"}),v.jsx("img",{"data-aos":"fade-in","data-aos-delay":"1000",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"})]})]})]}),v.jsx(Hw,{"data-aos":"fade-in","data-aos-delay":"300","data-aos-duration":"1000",children:e?v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png",alt:"Final do vídeo",style:{width:"100%",height:"auto"}}):v.jsx("video",{ref:t,autoPlay:!0,muted:!0,playsInline:!0,src:"https://res.cloudinary.com/dabucfkmg/video/upload/v1735398678/Video-Home_zdu370.webm",style:{width:"100%",height:"auto"},children:"Seu navegador não suporta o elemento de vídeo."})})]})]})};var kg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xh=Pe.createContext&&Pe.createContext(kg),Gw=["attr","size","title"];function qw(t,e){if(t==null)return{};var r=Yw(t,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}function Yw(t,e){if(t==null)return{};var r={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;r[s]=t[s]}return r}function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},_a.apply(this,arguments)}function Jh(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,s)}return r}function xa(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Jh(Object(r),!0).forEach(function(s){Kw(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Jh(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function Kw(t,e,r){return e=Qw(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Qw(t){var e=Xw(t,"string");return typeof e=="symbol"?e:e+""}function Xw(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ig(t){return t&&t.map((e,r)=>Pe.createElement(e.tag,xa({key:r},e.attr),Ig(e.child)))}function Ot(t){return e=>Pe.createElement(Jw,_a({attr:xa({},t.attr)},e),Ig(t.child))}function Jw(t){var e=r=>{var{attr:s,size:o,title:l}=t,u=qw(t,Gw),p=o||r.size||"1em",f;return r.className&&(f=r.className),t.className&&(f=(f?f+" ":"")+t.className),Pe.createElement("svg",_a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,u,{className:f,style:xa(xa({color:t.color||r.color},r.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&Pe.createElement("title",null,l),t.children)};return Xh!==void 0?Pe.createElement(Xh.Consumer,null,r=>e(r)):e(kg)}function Pg(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"},child:[]}]})(t)}function Zw(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"},child:[]}]})(t)}function e_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(t)}function t_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"},child:[]}]})(t)}function n_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"},child:[]},{tag:"path",attr:{d:"M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"},child:[]}]})(t)}function r_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},child:[]},{tag:"path",attr:{d:"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"},child:[]}]})(t)}function i_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(t)}function s_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"},child:[]}]})(t)}function o_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},child:[]}]})(t)}function a_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]},{tag:"path",attr:{d:"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"},child:[]}]})(t)}function l_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"},child:[]},{tag:"path",attr:{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"},child:[]}]})(t)}function c_(t){return Ot({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"},child:[]}]})(t)}const u_=ee.div`
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

`,ai=({title:t,description:e})=>v.jsxs(u_,{children:[v.jsx("h1",{children:t}),v.jsx("p",{children:e}),v.jsx(Mr,{})]}),d_=ee.div`
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

`,li=({title:t,description:e})=>v.jsxs(d_,{children:[v.jsx("h1",{children:t}),v.jsx("p",{children:e}),v.jsx(Mr,{})]});function Zh(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function od(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Zh(e[r])&&Zh(t[r])&&Object.keys(e[r]).length>0&&od(t[r],e[r])})}const Ng={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function In(){const t=typeof document<"u"?document:{};return od(t,Ng),t}const f_={document:Ng,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Ft(){const t=typeof window<"u"?window:{};return od(t,f_),t}function p_(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function h_(t){const e=t;Object.keys(e).forEach(r=>{try{e[r]=null}catch{}try{delete e[r]}catch{}})}function Pu(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Cr(){return Date.now()}function m_(t){const e=Ft();let r;return e.getComputedStyle&&(r=e.getComputedStyle(t,null)),!r&&t.currentStyle&&(r=t.currentStyle),r||(r=t.style),r}function g_(t,e){e===void 0&&(e="x");const r=Ft();let s,o,l;const u=m_(t);return r.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(p=>p.replace(",",".")).join(", ")),l=new r.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=l.toString().split(",")),e==="x"&&(r.WebKitCSSMatrix?o=l.m41:s.length===16?o=parseFloat(s[12]):o=parseFloat(s[4])),e==="y"&&(r.WebKitCSSMatrix?o=l.m42:s.length===16?o=parseFloat(s[13]):o=parseFloat(s[5])),o||0}function ia(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function v_(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function zt(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let r=1;r<arguments.length;r+=1){const s=r<0||arguments.length<=r?void 0:arguments[r];if(s!=null&&!v_(s)){const o=Object.keys(Object(s)).filter(l=>e.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const p=o[l],f=Object.getOwnPropertyDescriptor(s,p);f!==void 0&&f.enumerable&&(ia(t[p])&&ia(s[p])?s[p].__swiper__?t[p]=s[p]:zt(t[p],s[p]):!ia(t[p])&&ia(s[p])?(t[p]={},s[p].__swiper__?t[p]=s[p]:zt(t[p],s[p])):t[p]=s[p])}}}return t}function sa(t,e,r){t.style.setProperty(e,r)}function Mg(t){let{swiper:e,targetPosition:r,side:s}=t;const o=Ft(),l=-e.translate;let u=null,p;const f=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const m=r>l?"next":"prev",g=(_,x)=>m==="next"&&_>=x||m==="prev"&&_<=x,y=()=>{p=new Date().getTime(),u===null&&(u=p);const _=Math.max(Math.min((p-u)/f,1),0),x=.5-Math.cos(_*Math.PI)/2;let b=l+x*(r-l);if(g(b,r)&&(b=r),e.wrapperEl.scrollTo({[s]:b}),g(b,r)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:b})}),o.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=o.requestAnimationFrame(y)};y()}function pn(t,e){e===void 0&&(e="");const r=[...t.children];return t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(s=>s.matches(e)):r}function y_(t,e){const r=e.contains(t);return!r&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(t):r}function Sa(t){try{console.warn(t);return}catch{}}function Ea(t,e){e===void 0&&(e=[]);const r=document.createElement(t);return r.classList.add(...Array.isArray(e)?e:p_(e)),r}function w_(t,e){const r=[];for(;t.previousElementSibling;){const s=t.previousElementSibling;e?s.matches(e)&&r.push(s):r.push(s),t=s}return r}function __(t,e){const r=[];for(;t.nextElementSibling;){const s=t.nextElementSibling;e?s.matches(e)&&r.push(s):r.push(s),t=s}return r}function er(t,e){return Ft().getComputedStyle(t,null).getPropertyValue(e)}function ba(t){let e=t,r;if(e){for(r=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(r+=1);return r}}function Og(t,e){const r=[];let s=t.parentElement;for(;s;)e?s.matches(e)&&r.push(s):r.push(s),s=s.parentElement;return r}function eu(t,e){function r(s){s.target===t&&(e.call(t,s),t.removeEventListener("transitionend",r))}e&&t.addEventListener("transitionend",r)}function Nu(t,e,r){const s=Ft();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function bn(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let tu;function x_(){const t=Ft(),e=In();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Ag(){return tu||(tu=x_()),tu}let nu;function S_(t){let{userAgent:e}=t===void 0?{}:t;const r=Ag(),s=Ft(),o=s.navigator.platform,l=e||s.navigator.userAgent,u={ios:!1,android:!1},p=s.screen.width,f=s.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),_=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),x=o==="Win32";let b=o==="MacIntel";const O=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&b&&r.touch&&O.indexOf(`${p}x${f}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),b=!1),m&&!x&&(u.os="android",u.android=!0),(g||_||y)&&(u.os="ios",u.ios=!0),u}function Rg(t){return t===void 0&&(t={}),nu||(nu=S_(t)),nu}let ru;function E_(){const t=Ft(),e=Rg();let r=!1;function s(){const p=t.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(s()){const p=String(t.navigator.userAgent);if(p.includes("Version/")){const[f,m]=p.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));r=f<16||f===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),l=s(),u=l||o&&e.ios;return{isSafari:r||l,needPerspectiveFix:r,need3dFix:u,isWebView:o}}function b_(){return ru||(ru=E_()),ru}function C_(t){let{swiper:e,on:r,emit:s}=t;const o=Ft();let l=null,u=null;const p=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},f=()=>{!e||e.destroyed||!e.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:_,height:x}=e;let b=_,O=x;y.forEach(L=>{let{contentBoxSize:P,contentRect:T,target:E}=L;E&&E!==e.el||(b=T?T.width:(P[0]||P).inlineSize,O=T?T.height:(P[0]||P).blockSize)}),(b!==_||O!==x)&&p()})}),l.observe(e.el))},m=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&e.el&&(l.unobserve(e.el),l=null)},g=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};r("init",()=>{if(e.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",p),o.addEventListener("orientationchange",g)}),r("destroy",()=>{m(),o.removeEventListener("resize",p),o.removeEventListener("orientationchange",g)})}function T_(t){let{swiper:e,extendParams:r,on:s,emit:o}=t;const l=[],u=Ft(),p=function(g,y){y===void 0&&(y={});const _=u.MutationObserver||u.WebkitMutationObserver,x=new _(b=>{if(e.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const O=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(O):u.setTimeout(O,0)});x.observe(g,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(x)},f=()=>{if(e.params.observer){if(e.params.observeParents){const g=Og(e.hostEl);for(let y=0;y<g.length;y+=1)p(g[y])}p(e.hostEl,{childList:e.params.observeSlideChildren}),p(e.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};r({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",f),s("destroy",m)}var k_={on(t,e,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const o=r?"unshift":"push";return t.split(" ").forEach(l=>{s.eventsListeners[l]||(s.eventsListeners[l]=[]),s.eventsListeners[l][o](e)}),s},once(t,e,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function o(){s.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),p=0;p<l;p++)u[p]=arguments[p];e.apply(s,u)}return o.__emitterProxy=e,s.on(t,o,r)},onAny(t,e){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const s=e?"unshift":"push";return r.eventsAnyListeners.indexOf(t)<0&&r.eventsAnyListeners[s](t),r},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const r=e.eventsAnyListeners.indexOf(t);return r>=0&&e.eventsAnyListeners.splice(r,1),e},off(t,e){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?r.eventsListeners[s]=[]:r.eventsListeners[s]&&r.eventsListeners[s].forEach((o,l)=>{(o===e||o.__emitterProxy&&o.__emitterProxy===e)&&r.eventsListeners[s].splice(l,1)})}),r},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,r,s;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(e=l[0],r=l.slice(1,l.length),s=t):(e=l[0].events,r=l[0].data,s=l[0].context||t),r.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(f=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(m=>{m.apply(s,[f,...r])}),t.eventsListeners&&t.eventsListeners[f]&&t.eventsListeners[f].forEach(m=>{m.apply(s,r)})}),t}};function I_(){const t=this;let e,r;const s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?r=t.params.height:r=s.clientHeight,!(e===0&&t.isHorizontal()||r===0&&t.isVertical())&&(e=e-parseInt(er(s,"padding-left")||0,10)-parseInt(er(s,"padding-right")||0,10),r=r-parseInt(er(s,"padding-top")||0,10)-parseInt(er(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(r)&&(r=0),Object.assign(t,{width:e,height:r,size:t.isHorizontal()?e:r}))}function P_(){const t=this;function e(U,F){return parseFloat(U.getPropertyValue(t.getDirectionLabel(F))||0)}const r=t.params,{wrapperEl:s,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:p}=t,f=t.virtual&&r.virtual.enabled,m=f?t.virtual.slides.length:t.slides.length,g=pn(o,`.${t.params.slideClass}, swiper-slide`),y=f?t.virtual.slides.length:g.length;let _=[];const x=[],b=[];let O=r.slidesOffsetBefore;typeof O=="function"&&(O=r.slidesOffsetBefore.call(t));let L=r.slidesOffsetAfter;typeof L=="function"&&(L=r.slidesOffsetAfter.call(t));const P=t.snapGrid.length,T=t.slidesGrid.length;let E=r.spaceBetween,N=-O,j=0,D=0;if(typeof l>"u")return;typeof E=="string"&&E.indexOf("%")>=0?E=parseFloat(E.replace("%",""))/100*l:typeof E=="string"&&(E=parseFloat(E)),t.virtualSize=-E,g.forEach(U=>{u?U.style.marginLeft="":U.style.marginRight="",U.style.marginBottom="",U.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(sa(s,"--swiper-centered-offset-before",""),sa(s,"--swiper-centered-offset-after",""));const Q=r.grid&&r.grid.rows>1&&t.grid;Q?t.grid.initSlides(g):t.grid&&t.grid.unsetSlides();let W;const H=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(U=>typeof r.breakpoints[U].slidesPerView<"u").length>0;for(let U=0;U<y;U+=1){W=0;let F;if(g[U]&&(F=g[U]),Q&&t.grid.updateSlide(U,F,g),!(g[U]&&er(F,"display")==="none")){if(r.slidesPerView==="auto"){H&&(g[U].style[t.getDirectionLabel("width")]="");const z=getComputedStyle(F),$=F.style.transform,q=F.style.webkitTransform;if($&&(F.style.transform="none"),q&&(F.style.webkitTransform="none"),r.roundLengths)W=t.isHorizontal()?Nu(F,"width"):Nu(F,"height");else{const ie=e(z,"width"),ge=e(z,"padding-left"),_e=e(z,"padding-right"),V=e(z,"margin-left"),J=e(z,"margin-right"),K=z.getPropertyValue("box-sizing");if(K&&K==="border-box")W=ie+V+J;else{const{clientWidth:I,offsetWidth:B}=F;W=ie+ge+_e+V+J+(B-I)}}$&&(F.style.transform=$),q&&(F.style.webkitTransform=q),r.roundLengths&&(W=Math.floor(W))}else W=(l-(r.slidesPerView-1)*E)/r.slidesPerView,r.roundLengths&&(W=Math.floor(W)),g[U]&&(g[U].style[t.getDirectionLabel("width")]=`${W}px`);g[U]&&(g[U].swiperSlideSize=W),b.push(W),r.centeredSlides?(N=N+W/2+j/2+E,j===0&&U!==0&&(N=N-l/2-E),U===0&&(N=N-l/2-E),Math.abs(N)<1/1e3&&(N=0),r.roundLengths&&(N=Math.floor(N)),D%r.slidesPerGroup===0&&_.push(N),x.push(N)):(r.roundLengths&&(N=Math.floor(N)),(D-Math.min(t.params.slidesPerGroupSkip,D))%t.params.slidesPerGroup===0&&_.push(N),x.push(N),N=N+W+E),t.virtualSize+=W+E,j=W,D+=1}}if(t.virtualSize=Math.max(t.virtualSize,l)+L,u&&p&&(r.effect==="slide"||r.effect==="coverflow")&&(s.style.width=`${t.virtualSize+E}px`),r.setWrapperSize&&(s.style[t.getDirectionLabel("width")]=`${t.virtualSize+E}px`),Q&&t.grid.updateWrapperSize(W,_),!r.centeredSlides){const U=[];for(let F=0;F<_.length;F+=1){let z=_[F];r.roundLengths&&(z=Math.floor(z)),_[F]<=t.virtualSize-l&&U.push(z)}_=U,Math.floor(t.virtualSize-l)-Math.floor(_[_.length-1])>1&&_.push(t.virtualSize-l)}if(f&&r.loop){const U=b[0]+E;if(r.slidesPerGroup>1){const F=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/r.slidesPerGroup),z=U*r.slidesPerGroup;for(let $=0;$<F;$+=1)_.push(_[_.length-1]+z)}for(let F=0;F<t.virtual.slidesBefore+t.virtual.slidesAfter;F+=1)r.slidesPerGroup===1&&_.push(_[_.length-1]+U),x.push(x[x.length-1]+U),t.virtualSize+=U}if(_.length===0&&(_=[0]),E!==0){const U=t.isHorizontal()&&u?"marginLeft":t.getDirectionLabel("marginRight");g.filter((F,z)=>!r.cssMode||r.loop?!0:z!==g.length-1).forEach(F=>{F.style[U]=`${E}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let U=0;b.forEach(z=>{U+=z+(E||0)}),U-=E;const F=U>l?U-l:0;_=_.map(z=>z<=0?-O:z>F?F+L:z)}if(r.centerInsufficientSlides){let U=0;b.forEach(z=>{U+=z+(E||0)}),U-=E;const F=(r.slidesOffsetBefore||0)+(r.slidesOffsetAfter||0);if(U+F<l){const z=(l-U-F)/2;_.forEach(($,q)=>{_[q]=$-z}),x.forEach(($,q)=>{x[q]=$+z})}}if(Object.assign(t,{slides:g,snapGrid:_,slidesGrid:x,slidesSizesGrid:b}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){sa(s,"--swiper-centered-offset-before",`${-_[0]}px`),sa(s,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const U=-t.snapGrid[0],F=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(z=>z+U),t.slidesGrid=t.slidesGrid.map(z=>z+F)}if(y!==m&&t.emit("slidesLengthChange"),_.length!==P&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),x.length!==T&&t.emit("slidesGridLengthChange"),r.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!f&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const U=`${r.containerModifierClass}backface-hidden`,F=t.el.classList.contains(U);y<=r.maxBackfaceHiddenSlides?F||t.el.classList.add(U):F&&t.el.classList.remove(U)}}function N_(t){const e=this,r=[],s=e.virtual&&e.params.virtual.enabled;let o=0,l;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const u=p=>s?e.slides[e.getSlideIndexByData(p)]:e.slides[p];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(p=>{r.push(p)});else for(l=0;l<Math.ceil(e.params.slidesPerView);l+=1){const p=e.activeIndex+l;if(p>e.slides.length&&!s)break;r.push(u(p))}else r.push(u(e.activeIndex));for(l=0;l<r.length;l+=1)if(typeof r[l]<"u"){const p=r[l].offsetHeight;o=p>o?p:o}(o||o===0)&&(e.wrapperEl.style.height=`${o}px`)}function M_(){const t=this,e=t.slides,r=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-r-t.cssOverflowAdjustment()}const em=(t,e,r)=>{e&&!t.classList.contains(r)?t.classList.add(r):!e&&t.classList.contains(r)&&t.classList.remove(r)};function O_(t){t===void 0&&(t=this&&this.translate||0);const e=this,r=e.params,{slides:s,rtlTranslate:o,snapGrid:l}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let u=-t;o&&(u=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let p=r.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p));for(let f=0;f<s.length;f+=1){const m=s[f];let g=m.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(g-=s[0].swiperSlideOffset);const y=(u+(r.centeredSlides?e.minTranslate():0)-g)/(m.swiperSlideSize+p),_=(u-l[0]+(r.centeredSlides?e.minTranslate():0)-g)/(m.swiperSlideSize+p),x=-(u-g),b=x+e.slidesSizesGrid[f],O=x>=0&&x<=e.size-e.slidesSizesGrid[f],L=x>=0&&x<e.size-1||b>1&&b<=e.size||x<=0&&b>=e.size;L&&(e.visibleSlides.push(m),e.visibleSlidesIndexes.push(f)),em(m,L,r.slideVisibleClass),em(m,O,r.slideFullyVisibleClass),m.progress=o?-y:y,m.originalProgress=o?-_:_}}function A_(t){const e=this;if(typeof t>"u"){const g=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*g||0}const r=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:p}=e;const f=l,m=u;if(s===0)o=0,l=!0,u=!0;else{o=(t-e.minTranslate())/s;const g=Math.abs(t-e.minTranslate())<1,y=Math.abs(t-e.maxTranslate())<1;l=g||o<=0,u=y||o>=1,g&&(o=0),y&&(o=1)}if(r.loop){const g=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),_=e.slidesGrid[g],x=e.slidesGrid[y],b=e.slidesGrid[e.slidesGrid.length-1],O=Math.abs(t);O>=_?p=(O-_)/b:p=(O+b-x)/b,p>1&&(p-=1)}Object.assign(e,{progress:o,progressLoop:p,isBeginning:l,isEnd:u}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&e.updateSlidesProgress(t),l&&!f&&e.emit("reachBeginning toEdge"),u&&!m&&e.emit("reachEnd toEdge"),(f&&!l||m&&!u)&&e.emit("fromEdge"),e.emit("progress",o)}const iu=(t,e,r)=>{e&&!t.classList.contains(r)?t.classList.add(r):!e&&t.classList.contains(r)&&t.classList.remove(r)};function R_(){const t=this,{slides:e,params:r,slidesEl:s,activeIndex:o}=t,l=t.virtual&&r.virtual.enabled,u=t.grid&&r.grid&&r.grid.rows>1,p=y=>pn(s,`.${r.slideClass}${y}, swiper-slide${y}`)[0];let f,m,g;if(l)if(r.loop){let y=o-t.virtual.slidesBefore;y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),f=p(`[data-swiper-slide-index="${y}"]`)}else f=p(`[data-swiper-slide-index="${o}"]`);else u?(f=e.filter(y=>y.column===o)[0],g=e.filter(y=>y.column===o+1)[0],m=e.filter(y=>y.column===o-1)[0]):f=e[o];f&&(u||(g=__(f,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!g&&(g=e[0]),m=w_(f,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!m===0&&(m=e[e.length-1]))),e.forEach(y=>{iu(y,y===f,r.slideActiveClass),iu(y,y===g,r.slideNextClass),iu(y,y===m,r.slidePrevClass)}),t.emitSlidesClasses()}const ma=(t,e)=>{if(!t||t.destroyed||!t.params)return;const r=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(r());if(s){let o=s.querySelector(`.${t.params.lazyPreloaderClass}`);!o&&t.isElement&&(s.shadowRoot?o=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(o=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},su=(t,e)=>{if(!t.slides[e])return;const r=t.slides[e].querySelector('[loading="lazy"]');r&&r.removeAttribute("loading")},Mu=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const r=t.slides.length;if(!r||!e||e<0)return;e=Math.min(e,r);const s=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const u=o,p=[u-e];p.push(...Array.from({length:e}).map((f,m)=>u+s+m)),t.slides.forEach((f,m)=>{p.includes(f.column)&&su(t,m)});return}const l=o+s-1;if(t.params.rewind||t.params.loop)for(let u=o-e;u<=l+e;u+=1){const p=(u%r+r)%r;(p<o||p>l)&&su(t,p)}else for(let u=Math.max(o-e,0);u<=Math.min(l+e,r-1);u+=1)u!==o&&(u>l||u<o)&&su(t,u)};function j_(t){const{slidesGrid:e,params:r}=t,s=t.rtlTranslate?t.translate:-t.translate;let o;for(let l=0;l<e.length;l+=1)typeof e[l+1]<"u"?s>=e[l]&&s<e[l+1]-(e[l+1]-e[l])/2?o=l:s>=e[l]&&s<e[l+1]&&(o=l+1):s>=e[l]&&(o=l);return r.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function D_(t){const e=this,r=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:o,activeIndex:l,realIndex:u,snapIndex:p}=e;let f=t,m;const g=x=>{let b=x-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof f>"u"&&(f=j_(e)),s.indexOf(r)>=0)m=s.indexOf(r);else{const x=Math.min(o.slidesPerGroupSkip,f);m=x+Math.floor((f-x)/o.slidesPerGroup)}if(m>=s.length&&(m=s.length-1),f===l&&!e.params.loop){m!==p&&(e.snapIndex=m,e.emit("snapIndexChange"));return}if(f===l&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=g(f);return}const y=e.grid&&o.grid&&o.grid.rows>1;let _;if(e.virtual&&o.virtual.enabled&&o.loop)_=g(f);else if(y){const x=e.slides.filter(O=>O.column===f)[0];let b=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(x),0)),_=Math.floor(b/o.grid.rows)}else if(e.slides[f]){const x=e.slides[f].getAttribute("data-swiper-slide-index");x?_=parseInt(x,10):_=f}else _=f;Object.assign(e,{previousSnapIndex:p,snapIndex:m,previousRealIndex:u,realIndex:_,previousIndex:l,activeIndex:f}),e.initialized&&Mu(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(u!==_&&e.emit("realIndexChange"),e.emit("slideChange"))}function L_(t,e){const r=this,s=r.params;let o=t.closest(`.${s.slideClass}, swiper-slide`);!o&&r.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(p=>{!o&&p.matches&&p.matches(`.${s.slideClass}, swiper-slide`)&&(o=p)});let l=!1,u;if(o){for(let p=0;p<r.slides.length;p+=1)if(r.slides[p]===o){l=!0,u=p;break}}if(o&&l)r.clickedSlide=o,r.virtual&&r.params.virtual.enabled?r.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):r.clickedIndex=u;else{r.clickedSlide=void 0,r.clickedIndex=void 0;return}s.slideToClickedSlide&&r.clickedIndex!==void 0&&r.clickedIndex!==r.activeIndex&&r.slideToClickedSlide()}var z_={updateSize:I_,updateSlides:P_,updateAutoHeight:N_,updateSlidesOffset:M_,updateSlidesProgress:O_,updateProgress:A_,updateSlidesClasses:R_,updateActiveIndex:D_,updateClickedSlide:L_};function F_(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:r,rtlTranslate:s,translate:o,wrapperEl:l}=e;if(r.virtualTranslate)return s?-o:o;if(r.cssMode)return o;let u=g_(l,t);return u+=e.cssOverflowAdjustment(),s&&(u=-u),u||0}function B_(t,e){const r=this,{rtlTranslate:s,params:o,wrapperEl:l,progress:u}=r;let p=0,f=0;const m=0;r.isHorizontal()?p=s?-t:t:f=t,o.roundLengths&&(p=Math.floor(p),f=Math.floor(f)),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?p:f,o.cssMode?l[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-p:-f:o.virtualTranslate||(r.isHorizontal()?p-=r.cssOverflowAdjustment():f-=r.cssOverflowAdjustment(),l.style.transform=`translate3d(${p}px, ${f}px, ${m}px)`);let g;const y=r.maxTranslate()-r.minTranslate();y===0?g=0:g=(t-r.minTranslate())/y,g!==u&&r.updateProgress(t),r.emit("setTranslate",r.translate,e)}function $_(){return-this.snapGrid[0]}function V_(){return-this.snapGrid[this.snapGrid.length-1]}function H_(t,e,r,s,o){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),r===void 0&&(r=!0),s===void 0&&(s=!0);const l=this,{params:u,wrapperEl:p}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),m=l.maxTranslate();let g;if(s&&t>f?g=f:s&&t<m?g=m:g=t,l.updateProgress(g),u.cssMode){const y=l.isHorizontal();if(e===0)p[y?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return Mg({swiper:l,targetPosition:-g,side:y?"left":"top"}),!0;p.scrollTo({[y?"left":"top"]:-g,behavior:"smooth"})}return!0}return e===0?(l.setTransition(0),l.setTranslate(g),r&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionEnd"))):(l.setTransition(e),l.setTranslate(g),r&&(l.emit("beforeTransitionStart",e,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,r&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var W_={getTranslate:F_,setTranslate:B_,minTranslate:$_,maxTranslate:V_,translateTo:H_};function U_(t,e){const r=this;r.params.cssMode||(r.wrapperEl.style.transitionDuration=`${t}ms`,r.wrapperEl.style.transitionDelay=t===0?"0ms":""),r.emit("setTransition",t,e)}function jg(t){let{swiper:e,runCallbacks:r,direction:s,step:o}=t;const{activeIndex:l,previousIndex:u}=e;let p=s;if(p||(l>u?p="next":l<u?p="prev":p="reset"),e.emit(`transition${o}`),r&&l!==u){if(p==="reset"){e.emit(`slideResetTransition${o}`);return}e.emit(`slideChangeTransition${o}`),p==="next"?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`)}}function G_(t,e){t===void 0&&(t=!0);const r=this,{params:s}=r;s.cssMode||(s.autoHeight&&r.updateAutoHeight(),jg({swiper:r,runCallbacks:t,direction:e,step:"Start"}))}function q_(t,e){t===void 0&&(t=!0);const r=this,{params:s}=r;r.animating=!1,!s.cssMode&&(r.setTransition(0),jg({swiper:r,runCallbacks:t,direction:e,step:"End"}))}var Y_={setTransition:U_,transitionStart:G_,transitionEnd:q_};function K_(t,e,r,s,o){t===void 0&&(t=0),r===void 0&&(r=!0),typeof t=="string"&&(t=parseInt(t,10));const l=this;let u=t;u<0&&(u=0);const{params:p,snapGrid:f,slidesGrid:m,previousIndex:g,activeIndex:y,rtlTranslate:_,wrapperEl:x,enabled:b}=l;if(!b&&!s&&!o||l.destroyed||l.animating&&p.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=l.params.speed);const O=Math.min(l.params.slidesPerGroupSkip,u);let L=O+Math.floor((u-O)/l.params.slidesPerGroup);L>=f.length&&(L=f.length-1);const P=-f[L];if(p.normalizeSlideIndex)for(let j=0;j<m.length;j+=1){const D=-Math.floor(P*100),Q=Math.floor(m[j]*100),W=Math.floor(m[j+1]*100);typeof m[j+1]<"u"?D>=Q&&D<W-(W-Q)/2?u=j:D>=Q&&D<W&&(u=j+1):D>=Q&&(u=j)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(_?P>l.translate&&P>l.minTranslate():P<l.translate&&P<l.minTranslate())||!l.allowSlidePrev&&P>l.translate&&P>l.maxTranslate()&&(y||0)!==u))return!1;u!==(g||0)&&r&&l.emit("beforeSlideChangeStart"),l.updateProgress(P);let T;u>y?T="next":u<y?T="prev":T="reset";const E=l.virtual&&l.params.virtual.enabled;if(!(E&&o)&&(_&&-P===l.translate||!_&&P===l.translate))return l.updateActiveIndex(u),p.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),p.effect!=="slide"&&l.setTranslate(P),T!=="reset"&&(l.transitionStart(r,T),l.transitionEnd(r,T)),!1;if(p.cssMode){const j=l.isHorizontal(),D=_?P:-P;if(e===0)E&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),E&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[j?"scrollLeft":"scrollTop"]=D})):x[j?"scrollLeft":"scrollTop"]=D,E&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return Mg({swiper:l,targetPosition:D,side:j?"left":"top"}),!0;x.scrollTo({[j?"left":"top"]:D,behavior:"smooth"})}return!0}return l.setTransition(e),l.setTranslate(P),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",e,s),l.transitionStart(r,T),e===0?l.transitionEnd(r,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(D){!l||l.destroyed||D.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(r,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function Q_(t,e,r,s){t===void 0&&(t=0),r===void 0&&(r=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let p;if(l){const _=u*o.params.grid.rows;p=o.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===_)[0].column}else p=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let y=f-p<g;if(m&&(y=y||p<Math.ceil(g/2)),s&&m&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const _=m?p<o.activeIndex?"prev":"next":p-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?p+1:p-f+1,slideRealIndex:_==="next"?o.realIndex:void 0})}if(l){const _=u*o.params.grid.rows;u=o.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===_)[0].column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,e,r,s)}),o}function X_(t,e,r){e===void 0&&(e=!0);const s=this,{enabled:o,params:l,animating:u}=s;if(!o||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);let p=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(p=Math.max(s.slidesPerViewDynamic("current",!0),1));const f=s.activeIndex<l.slidesPerGroupSkip?1:p,m=s.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+f,t,e,r)}),!0}return l.rewind&&s.isEnd?s.slideTo(0,t,e,r):s.slideTo(s.activeIndex+f,t,e,r)}function J_(t,e,r){e===void 0&&(e=!0);const s=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:p,enabled:f,animating:m}=s;if(!f||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);const g=s.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const y=p?s.translate:-s.translate;function _(P){return P<0?-Math.floor(Math.abs(P)):Math.floor(P)}const x=_(y),b=l.map(P=>_(P));let O=l[b.indexOf(x)-1];if(typeof O>"u"&&o.cssMode){let P;l.forEach((T,E)=>{x>=T&&(P=E)}),typeof P<"u"&&(O=l[P>0?P-1:P])}let L=0;if(typeof O<"u"&&(L=u.indexOf(O),L<0&&(L=s.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(L=L-s.slidesPerViewDynamic("previous",!0)+1,L=Math.max(L,0))),o.rewind&&s.isBeginning){const P=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(P,t,e,r)}else if(o.loop&&s.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{s.slideTo(L,t,e,r)}),!0;return s.slideTo(L,t,e,r)}function Z_(t,e,r){e===void 0&&(e=!0);const s=this;if(!s.destroyed)return typeof t>"u"&&(t=s.params.speed),s.slideTo(s.activeIndex,t,e,r)}function ex(t,e,r,s){e===void 0&&(e=!0),s===void 0&&(s=.5);const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),p=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[p]){const m=o.snapGrid[p],g=o.snapGrid[p+1];f-m>(g-m)*s&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[p-1],g=o.snapGrid[p];f-m<=(g-m)*s&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,t,e,r)}function tx(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:r}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let o=t.clickedIndex,l;const u=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;l=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?o<t.loopedSlides-s/2||o>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),o=t.getSlideIndex(pn(r,`${u}[data-swiper-slide-index="${l}"]`)[0]),Pu(()=>{t.slideTo(o)})):t.slideTo(o):o>t.slides.length-s?(t.loopFix(),o=t.getSlideIndex(pn(r,`${u}[data-swiper-slide-index="${l}"]`)[0]),Pu(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}var nx={slideTo:K_,slideToLoop:Q_,slideNext:X_,slidePrev:J_,slideReset:Z_,slideToClosest:ex,slideToClickedSlide:tx};function rx(t){const e=this,{params:r,slidesEl:s}=e;if(!r.loop||e.virtual&&e.params.virtual.enabled)return;const o=()=>{pn(s,`.${r.slideClass}, swiper-slide`).forEach((y,_)=>{y.setAttribute("data-swiper-slide-index",_)})},l=e.grid&&r.grid&&r.grid.rows>1,u=r.slidesPerGroup*(l?r.grid.rows:1),p=e.slides.length%u!==0,f=l&&e.slides.length%r.grid.rows!==0,m=g=>{for(let y=0;y<g;y+=1){const _=e.isElement?Ea("swiper-slide",[r.slideBlankClass]):Ea("div",[r.slideClass,r.slideBlankClass]);e.slidesEl.append(_)}};if(p){if(r.loopAddBlankSlides){const g=u-e.slides.length%u;m(g),e.recalcSlides(),e.updateSlides()}else Sa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(f){if(r.loopAddBlankSlides){const g=r.grid.rows-e.slides.length%r.grid.rows;m(g),e.recalcSlides(),e.updateSlides()}else Sa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();e.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next"})}function ix(t){let{slideRealIndex:e,slideTo:r=!0,direction:s,setTranslate:o,activeSlideIndex:l,byController:u,byMousewheel:p}=t===void 0?{}:t;const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:m,allowSlidePrev:g,allowSlideNext:y,slidesEl:_,params:x}=f,{centeredSlides:b}=x;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&x.virtual.enabled){r&&(!x.centeredSlides&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):x.centeredSlides&&f.snapIndex<x.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=g,f.allowSlideNext=y,f.emit("loopFix");return}let O=x.slidesPerView;O==="auto"?O=f.slidesPerViewDynamic():(O=Math.ceil(parseFloat(x.slidesPerView,10)),b&&O%2===0&&(O=O+1));const L=x.slidesPerGroupAuto?O:x.slidesPerGroup;let P=L;P%L!==0&&(P+=L-P%L),P+=x.loopAdditionalSlides,f.loopedSlides=P;const T=f.grid&&x.grid&&x.grid.rows>1;m.length<O+P?Sa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&x.grid.fill==="row"&&Sa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],N=[];let j=f.activeIndex;typeof l>"u"?l=f.getSlideIndex(m.filter($=>$.classList.contains(x.slideActiveClass))[0]):j=l;const D=s==="next"||!s,Q=s==="prev"||!s;let W=0,H=0;const U=T?Math.ceil(m.length/x.grid.rows):m.length,z=(T?m[l].column:l)+(b&&typeof o>"u"?-O/2+.5:0);if(z<P){W=Math.max(P-z,L);for(let $=0;$<P-z;$+=1){const q=$-Math.floor($/U)*U;if(T){const ie=U-q-1;for(let ge=m.length-1;ge>=0;ge-=1)m[ge].column===ie&&E.push(ge)}else E.push(U-q-1)}}else if(z+O>U-P){H=Math.max(z-(U-P*2),L);for(let $=0;$<H;$+=1){const q=$-Math.floor($/U)*U;T?m.forEach((ie,ge)=>{ie.column===q&&N.push(ge)}):N.push(q)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),Q&&E.forEach($=>{m[$].swiperLoopMoveDOM=!0,_.prepend(m[$]),m[$].swiperLoopMoveDOM=!1}),D&&N.forEach($=>{m[$].swiperLoopMoveDOM=!0,_.append(m[$]),m[$].swiperLoopMoveDOM=!1}),f.recalcSlides(),x.slidesPerView==="auto"?f.updateSlides():T&&(E.length>0&&Q||N.length>0&&D)&&f.slides.forEach(($,q)=>{f.grid.updateSlide(q,$,f.slides)}),x.watchSlidesProgress&&f.updateSlidesOffset(),r){if(E.length>0&&Q){if(typeof e>"u"){const $=f.slidesGrid[j],ie=f.slidesGrid[j+W]-$;p?f.setTranslate(f.translate-ie):(f.slideTo(j+Math.ceil(W),0,!1,!0),o&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ie,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ie))}else if(o){const $=T?E.length/x.grid.rows:E.length;f.slideTo(f.activeIndex+$,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(N.length>0&&D)if(typeof e>"u"){const $=f.slidesGrid[j],ie=f.slidesGrid[j-H]-$;p?f.setTranslate(f.translate-ie):(f.slideTo(j-H,0,!1,!0),o&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-ie,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-ie))}else{const $=T?N.length/x.grid.rows:N.length;f.slideTo(f.activeIndex-$,0,!1,!0)}}if(f.allowSlidePrev=g,f.allowSlideNext=y,f.controller&&f.controller.control&&!u){const $={slideRealIndex:e,direction:s,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...$,slideTo:q.params.slidesPerView===x.slidesPerView?r:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...$,slideTo:f.controller.control.params.slidesPerView===x.slidesPerView?r:!1})}f.emit("loopFix")}function sx(){const t=this,{params:e,slidesEl:r}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const s=[];t.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;s[l]=o}),t.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),s.forEach(o=>{r.append(o)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var ox={loopCreate:rx,loopFix:ix,loopDestroy:sx};function ax(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const r=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),r.style.cursor="move",r.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function lx(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var cx={setGrabCursor:ax,unsetGrabCursor:lx};function ux(t,e){e===void 0&&(e=this);function r(s){if(!s||s===In()||s===Ft())return null;s.assignedSlot&&(s=s.assignedSlot);const o=s.closest(t);return!o&&!s.getRootNode?null:o||r(s.getRootNode().host)}return r(e)}function tm(t,e,r){const s=Ft(),{params:o}=t,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(r<=u||r>=s.innerWidth-u)?l==="prevent"?(e.preventDefault(),!0):!1:!0}function dx(t){const e=this,r=In();let s=t;s.originalEvent&&(s=s.originalEvent);const o=e.touchEventsData;if(s.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==s.pointerId)return;o.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(o.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){tm(e,s,s.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:p}=e;if(!p||!l.simulateTouch&&s.pointerType==="mouse"||e.animating&&l.preventInteractionOnTransition)return;!e.animating&&l.cssMode&&l.loop&&e.loopFix();let f=s.target;if(l.touchEventsTarget==="wrapper"&&!y_(f,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=s.composedPath?s.composedPath():s.path;m&&s.target&&s.target.shadowRoot&&g&&(f=g[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,_=!!(s.target&&s.target.shadowRoot);if(l.noSwiping&&(_?ux(y,f):f.closest(y))){e.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=s.pageX,u.currentY=s.pageY;const x=u.currentX,b=u.currentY;if(!tm(e,s,x))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=x,u.startY=b,o.touchStartTime=Cr(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let O=!0;f.matches(o.focusableElements)&&(O=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),r.activeElement&&r.activeElement.matches(o.focusableElements)&&r.activeElement!==f&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&r.activeElement.blur();const L=O&&e.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||L)&&!f.isContentEditable&&s.preventDefault(),l.freeMode&&l.freeMode.enabled&&e.freeMode&&e.animating&&!l.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function fx(t){const e=In(),r=this,s=r.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:p}=r;if(!p||!o.simulateTouch&&t.pointerType==="mouse")return;let f=t;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(s.touchId!==null||f.pointerId!==s.pointerId))return;let m;if(f.type==="touchmove"){if(m=[...f.changedTouches].filter(D=>D.identifier===s.touchId)[0],!m||m.identifier!==s.touchId)return}else m=f;if(!s.isTouched){s.startMoving&&s.isScrolling&&r.emit("touchMoveOpposite",f);return}const g=m.pageX,y=m.pageY;if(f.preventedByNestedSwiper){l.startX=g,l.startY=y;return}if(!r.allowTouchMove){f.target.matches(s.focusableElements)||(r.allowClick=!1),s.isTouched&&(Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y}),s.touchStartTime=Cr());return}if(o.touchReleaseOnEdges&&!o.loop){if(r.isVertical()){if(y<l.startY&&r.translate<=r.maxTranslate()||y>l.startY&&r.translate>=r.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(g<l.startX&&r.translate<=r.maxTranslate()||g>l.startX&&r.translate>=r.minTranslate())return}if(e.activeElement&&e.activeElement.matches(s.focusableElements)&&e.activeElement!==f.target&&f.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&f.target===e.activeElement&&f.target.matches(s.focusableElements)){s.isMoved=!0,r.allowClick=!1;return}s.allowTouchCallbacks&&r.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=y;const _=l.currentX-l.startX,x=l.currentY-l.startY;if(r.params.threshold&&Math.sqrt(_**2+x**2)<r.params.threshold)return;if(typeof s.isScrolling>"u"){let D;r.isHorizontal()&&l.currentY===l.startY||r.isVertical()&&l.currentX===l.startX?s.isScrolling=!1:_*_+x*x>=25&&(D=Math.atan2(Math.abs(x),Math.abs(_))*180/Math.PI,s.isScrolling=r.isHorizontal()?D>o.touchAngle:90-D>o.touchAngle)}if(s.isScrolling&&r.emit("touchMoveOpposite",f),typeof s.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(s.startMoving=!0),s.isScrolling||f.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;r.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=r.isHorizontal()?_:x,O=r.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),O=Math.abs(O)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,O=-O);const L=r.touchesDirection;r.swipeDirection=b>0?"prev":"next",r.touchesDirection=O>0?"prev":"next";const P=r.params.loop&&!o.cssMode,T=r.touchesDirection==="next"&&r.allowSlideNext||r.touchesDirection==="prev"&&r.allowSlidePrev;if(!s.isMoved){if(P&&T&&r.loopFix({direction:r.swipeDirection}),s.startTranslate=r.getTranslate(),r.setTransition(0),r.animating){const D=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});r.wrapperEl.dispatchEvent(D)}s.allowMomentumBounce=!1,o.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",f)}let E;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&L!==r.touchesDirection&&P&&T&&Math.abs(b)>=1){Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}r.emit("sliderMove",f),s.isMoved=!0,s.currentTranslate=b+s.startTranslate;let N=!0,j=o.resistanceRatio;if(o.touchReleaseOnEdges&&(j=0),b>0?(P&&T&&!E&&s.allowThresholdMove&&s.currentTranslate>(o.centeredSlides?r.minTranslate()-r.slidesSizesGrid[r.activeIndex+1]-(o.slidesPerView!=="auto"&&r.slides.length-o.slidesPerView>=2?r.slidesSizesGrid[r.activeIndex+1]+r.params.spaceBetween:0)-r.params.spaceBetween:r.minTranslate())&&r.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>r.minTranslate()&&(N=!1,o.resistance&&(s.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+s.startTranslate+b)**j))):b<0&&(P&&T&&!E&&s.allowThresholdMove&&s.currentTranslate<(o.centeredSlides?r.maxTranslate()+r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween+(o.slidesPerView!=="auto"&&r.slides.length-o.slidesPerView>=2?r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween:0):r.maxTranslate())&&r.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:r.slides.length-(o.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),s.currentTranslate<r.maxTranslate()&&(N=!1,o.resistance&&(s.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-s.startTranslate-b)**j))),N&&(f.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(s.currentTranslate=s.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,s.currentTranslate=s.startTranslate,l.diff=r.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{s.currentTranslate=s.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&r.freeMode||o.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(s.currentTranslate),r.setTranslate(s.currentTranslate))}function px(t){const e=this,r=e.touchEventsData;let s=t;s.originalEvent&&(s=s.originalEvent);let o;if(s.type==="touchend"||s.type==="touchcancel"){if(o=[...s.changedTouches].filter(j=>j.identifier===r.touchId)[0],!o||o.identifier!==r.touchId)return}else{if(r.touchId!==null||s.pointerId!==r.pointerId)return;o=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;r.pointerId=null,r.touchId=null;const{params:u,touches:p,rtlTranslate:f,slidesGrid:m,enabled:g}=e;if(!g||!u.simulateTouch&&s.pointerType==="mouse")return;if(r.allowTouchCallbacks&&e.emit("touchEnd",s),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&u.grabCursor&&e.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}u.grabCursor&&r.isMoved&&r.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=Cr(),_=y-r.touchStartTime;if(e.allowClick){const j=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(j&&j[0]||s.target,j),e.emit("tap click",s),_<300&&y-r.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(r.lastClickTime=Cr(),Pu(()=>{e.destroyed||(e.allowClick=!0)}),!r.isTouched||!r.isMoved||!e.swipeDirection||p.diff===0&&!r.loopSwapReset||r.currentTranslate===r.startTranslate&&!r.loopSwapReset){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let x;if(u.followFinger?x=f?e.translate:-e.translate:x=-r.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:x});return}const b=x>=-e.maxTranslate()&&!e.params.loop;let O=0,L=e.slidesSizesGrid[0];for(let j=0;j<m.length;j+=j<u.slidesPerGroupSkip?1:u.slidesPerGroup){const D=j<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[j+D]<"u"?(b||x>=m[j]&&x<m[j+D])&&(O=j,L=m[j+D]-m[j]):(b||x>=m[j])&&(O=j,L=m[m.length-1]-m[m.length-2])}let P=null,T=null;u.rewind&&(e.isBeginning?T=u.virtual&&u.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(P=0));const E=(x-m[O])/L,N=O<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(_>u.longSwipesMs){if(!u.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(E>=u.longSwipesRatio?e.slideTo(u.rewind&&e.isEnd?P:O+N):e.slideTo(O)),e.swipeDirection==="prev"&&(E>1-u.longSwipesRatio?e.slideTo(O+N):T!==null&&E<0&&Math.abs(E)>u.longSwipesRatio?e.slideTo(T):e.slideTo(O))}else{if(!u.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(O+N):e.slideTo(O):(e.swipeDirection==="next"&&e.slideTo(P!==null?P:O+N),e.swipeDirection==="prev"&&e.slideTo(T!==null?T:O))}}function nm(){const t=this,{params:e,el:r}=t;if(r&&r.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:o,snapGrid:l}=t,u=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const p=u&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!p?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!u?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=s,t.params.watchOverflow&&l!==t.snapGrid&&t.checkOverflow()}function hx(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function mx(){const t=this,{wrapperEl:e,rtlTranslate:r,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(t.translate-t.minTranslate())/l,o!==t.progress&&t.updateProgress(r?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function gx(t){const e=this;ma(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function vx(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Dg=(t,e)=>{const r=In(),{params:s,el:o,wrapperEl:l,device:u}=t,p=!!s.nested,f=e==="on"?"addEventListener":"removeEventListener",m=e;!o||typeof o=="string"||(r[f]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:p}),o[f]("touchstart",t.onTouchStart,{passive:!1}),o[f]("pointerdown",t.onTouchStart,{passive:!1}),r[f]("touchmove",t.onTouchMove,{passive:!1,capture:p}),r[f]("pointermove",t.onTouchMove,{passive:!1,capture:p}),r[f]("touchend",t.onTouchEnd,{passive:!0}),r[f]("pointerup",t.onTouchEnd,{passive:!0}),r[f]("pointercancel",t.onTouchEnd,{passive:!0}),r[f]("touchcancel",t.onTouchEnd,{passive:!0}),r[f]("pointerout",t.onTouchEnd,{passive:!0}),r[f]("pointerleave",t.onTouchEnd,{passive:!0}),r[f]("contextmenu",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&o[f]("click",t.onClick,!0),s.cssMode&&l[f]("scroll",t.onScroll),s.updateOnWindowResize?t[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",nm,!0):t[m]("observerUpdate",nm,!0),o[f]("load",t.onLoad,{capture:!0}))};function yx(){const t=this,{params:e}=t;t.onTouchStart=dx.bind(t),t.onTouchMove=fx.bind(t),t.onTouchEnd=px.bind(t),t.onDocumentTouchStart=vx.bind(t),e.cssMode&&(t.onScroll=mx.bind(t)),t.onClick=hx.bind(t),t.onLoad=gx.bind(t),Dg(t,"on")}function wx(){Dg(this,"off")}var _x={attachEvents:yx,detachEvents:wx};const rm=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function xx(){const t=this,{realIndex:e,initialized:r,params:s,el:o}=t,l=s.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=t.getBreakpoint(l,t.params.breakpointsBase,t.el);if(!u||t.currentBreakpoint===u)return;const f=(u in l?l[u]:void 0)||t.originalParams,m=rm(t,s),g=rm(t,f),y=t.params.grabCursor,_=f.grabCursor,x=s.enabled;m&&!g?(o.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!m&&g&&(o.classList.add(`${s.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&s.grid.fill==="column")&&o.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),y&&!_?t.unsetGrabCursor():!y&&_&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(E=>{if(typeof f[E]>"u")return;const N=s[E]&&s[E].enabled,j=f[E]&&f[E].enabled;N&&!j&&t[E].disable(),!N&&j&&t[E].enable()});const b=f.direction&&f.direction!==s.direction,O=s.loop&&(f.slidesPerView!==s.slidesPerView||b),L=s.loop;b&&r&&t.changeDirection(),zt(t.params,f);const P=t.params.enabled,T=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),x&&!P?t.disable():!x&&P&&t.enable(),t.currentBreakpoint=u,t.emit("_beforeBreakpoint",f),r&&(O?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!L&&T?(t.loopCreate(e),t.updateSlides()):L&&!T&&t.loopDestroy()),t.emit("breakpoint",f)}function Sx(t,e,r){if(e===void 0&&(e="window"),!t||e==="container"&&!r)return;let s=!1;const o=Ft(),l=e==="window"?o.innerHeight:r.clientHeight,u=Object.keys(t).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const f=parseFloat(p.substr(1));return{value:l*f,point:p}}return{value:p,point:p}});u.sort((p,f)=>parseInt(p.value,10)-parseInt(f.value,10));for(let p=0;p<u.length;p+=1){const{point:f,value:m}=u[p];e==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(s=f):m<=r.clientWidth&&(s=f)}return s||"max"}var Ex={setBreakpoint:xx,getBreakpoint:Sx};function bx(t,e){const r=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(o=>{s[o]&&r.push(e+o)}):typeof s=="string"&&r.push(e+s)}),r}function Cx(){const t=this,{classNames:e,params:r,rtl:s,el:o,device:l}=t,u=bx(["initialized",r.direction,{"free-mode":t.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:s},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);e.push(...u),o.classList.add(...e),t.emitContainerClasses()}function Tx(){const t=this,{el:e,classNames:r}=t;!e||typeof e=="string"||(e.classList.remove(...r),t.emitContainerClasses())}var kx={addClasses:Cx,removeClasses:Tx};function Ix(){const t=this,{isLocked:e,params:r}=t,{slidesOffsetBefore:s}=r;if(s){const o=t.slides.length-1,l=t.slidesGrid[o]+t.slidesSizesGrid[o]+s*2;t.isLocked=t.size>l}else t.isLocked=t.snapGrid.length===1;r.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),r.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Px={checkOverflow:Ix},Ou={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Nx(t,e){return function(s){s===void 0&&(s={});const o=Object.keys(s)[0],l=s[o];if(typeof l!="object"||l===null){zt(e,s);return}if(t[o]===!0&&(t[o]={enabled:!0}),o==="navigation"&&t[o]&&t[o].enabled&&!t[o].prevEl&&!t[o].nextEl&&(t[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&t[o]&&t[o].enabled&&!t[o].el&&(t[o].auto=!0),!(o in t&&"enabled"in l)){zt(e,s);return}typeof t[o]=="object"&&!("enabled"in t[o])&&(t[o].enabled=!0),t[o]||(t[o]={enabled:!1}),zt(e,s)}}const ou={eventsEmitter:k_,update:z_,translate:W_,transition:Y_,slide:nx,loop:ox,grabCursor:cx,events:_x,breakpoints:Ex,checkOverflow:Px,classes:kx},au={};let ad=class Cn{constructor(){let e,r;for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?r=o[0]:[e,r]=o,r||(r={}),r=zt({},r),e&&!r.el&&(r.el=e);const u=In();if(r.el&&typeof r.el=="string"&&u.querySelectorAll(r.el).length>1){const g=[];return u.querySelectorAll(r.el).forEach(y=>{const _=zt({},r,{el:y});g.push(new Cn(_))}),g}const p=this;p.__swiper__=!0,p.support=Ag(),p.device=Rg({userAgent:r.userAgent}),p.browser=b_(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],r.modules&&Array.isArray(r.modules)&&p.modules.push(...r.modules);const f={};p.modules.forEach(g=>{g({params:r,swiper:p,extendParams:Nx(r,f),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});const m=zt({},Ou,f);return p.params=zt({},m,au,r),p.originalParams=zt({},p.params),p.passedParams=zt({},r),p.params&&p.params.on&&Object.keys(p.params.on).forEach(g=>{p.on(g,p.params.on[g])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:r,params:s}=this,o=pn(r,`.${s.slideClass}, swiper-slide`),l=ba(o[0]);return ba(e)-l}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(r=>r.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:r,params:s}=e;e.slides=pn(r,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,r){const s=this;e=Math.min(Math.max(e,0),1);const o=s.minTranslate(),u=(s.maxTranslate()-o)*e+o;s.translateTo(u,typeof r>"u"?0:r),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const r=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",r.join(" "))}getSlideClasses(e){const r=this;return r.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const r=[];e.slides.forEach(s=>{const o=e.getSlideClasses(s);r.push({slideEl:s,classNames:o}),e.emit("_slideClass",s,o)}),e.emit("_slideClasses",r)}slidesPerViewDynamic(e,r){e===void 0&&(e="current"),r===void 0&&(r=!1);const s=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:p,size:f,activeIndex:m}=s;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[m]?Math.ceil(l[m].swiperSlideSize):0,_;for(let x=m+1;x<l.length;x+=1)l[x]&&!_&&(y+=Math.ceil(l[x].swiperSlideSize),g+=1,y>f&&(_=!0));for(let x=m-1;x>=0;x-=1)l[x]&&!_&&(y+=l[x].swiperSlideSize,g+=1,y>f&&(_=!0))}else if(e==="current")for(let y=m+1;y<l.length;y+=1)(r?u[y]+p[y]-u[m]<f:u[y]-u[m]<f)&&(g+=1);else for(let y=m-1;y>=0;y-=1)u[m]-u[y]<f&&(g+=1);return g}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:r,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&ma(e,u)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function o(){const u=e.rtlTranslate?e.translate*-1:e.translate,p=Math.min(Math.max(u,e.maxTranslate()),e.minTranslate());e.setTranslate(p),e.updateActiveIndex(),e.updateSlidesClasses()}let l;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)o(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const u=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;l=e.slideTo(u.length-1,0,!1,!0)}else l=e.slideTo(e.activeIndex,0,!1,!0);l||o()}s.watchOverflow&&r!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,r){r===void 0&&(r=!0);const s=this,o=s.params.direction;return e||(e=o==="horizontal"?"vertical":"horizontal"),e===o||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${o}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(l=>{e==="vertical"?l.style.width="":l.style.height=""}),s.emit("changeDirection"),r&&s.update()),s}changeLanguageDirection(e){const r=this;r.rtl&&e==="rtl"||!r.rtl&&e==="ltr"||(r.rtl=e==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.el.classList.add(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.el.classList.remove(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(e){const r=this;if(r.mounted)return!0;let s=e||r.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=r,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===r.params.swiperElementNodeName.toUpperCase()&&(r.isElement=!0);const o=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(o()):pn(s,o())[0];return!u&&r.params.createElements&&(u=Ea("div",r.params.wrapperClass),s.append(u),pn(s,`.${r.params.slideClass}`).forEach(p=>{u.append(p)})),Object.assign(r,{el:s,wrapperEl:u,slidesEl:r.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:u,hostEl:r.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||er(s,"direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||er(s,"direction")==="rtl"),wrongRTL:er(u,"display")==="-webkit-box"}),!0}init(e){const r=this;if(r.initialized||r.mount(e)===!1)return r;r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.loop&&r.virtual&&r.params.virtual.enabled?r.slideTo(r.params.initialSlide+r.virtual.slidesBefore,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.params.loop&&r.loopCreate(),r.attachEvents();const o=[...r.el.querySelectorAll('[loading="lazy"]')];return r.isElement&&o.push(...r.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?ma(r,l):l.addEventListener("load",u=>{ma(r,u.target)})}),Mu(r),r.initialized=!0,Mu(r),r.emit("init"),r.emit("afterInit"),r}destroy(e,r){e===void 0&&(e=!0),r===void 0&&(r=!0);const s=this,{params:o,el:l,wrapperEl:u,slides:p}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),o.loop&&s.loopDestroy(),r&&(s.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),p&&p.length&&p.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(f=>{s.off(f)}),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),h_(s)),s.destroyed=!0),null}static extendDefaults(e){zt(au,e)}static get extendedDefaults(){return au}static get defaults(){return Ou}static installModule(e){Cn.prototype.__modules__||(Cn.prototype.__modules__=[]);const r=Cn.prototype.__modules__;typeof e=="function"&&r.indexOf(e)<0&&r.push(e)}static use(e){return Array.isArray(e)?(e.forEach(r=>Cn.installModule(r)),Cn):(Cn.installModule(e),Cn)}};Object.keys(ou).forEach(t=>{Object.keys(ou[t]).forEach(e=>{ad.prototype[e]=ou[t][e]})});ad.use([C_,T_]);const Lg=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function kr(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function pi(t,e){const r=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>r.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:kr(e[s])&&kr(t[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?t[s]=e[s]:pi(t[s],e[s]):t[s]=e[s]})}function zg(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Fg(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Bg(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function $g(t){t===void 0&&(t="");const e=t.split(" ").map(s=>s.trim()).filter(s=>!!s),r=[];return e.forEach(s=>{r.indexOf(s)<0&&r.push(s)}),r.join(" ")}function Mx(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function Ox(t){let{swiper:e,slides:r,passedParams:s,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:p,paginationEl:f}=t;const m=o.filter(H=>H!=="children"&&H!=="direction"&&H!=="wrapperClass"),{params:g,pagination:y,navigation:_,scrollbar:x,virtual:b,thumbs:O}=e;let L,P,T,E,N,j,D,Q;o.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&!s.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(L=!0),o.includes("controller")&&s.controller&&s.controller.control&&g.controller&&!g.controller.control&&(P=!0),o.includes("pagination")&&s.pagination&&(s.pagination.el||f)&&(g.pagination||g.pagination===!1)&&y&&!y.el&&(T=!0),o.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||p)&&(g.scrollbar||g.scrollbar===!1)&&x&&!x.el&&(E=!0),o.includes("navigation")&&s.navigation&&(s.navigation.prevEl||u)&&(s.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&_&&!_.prevEl&&!_.nextEl&&(N=!0);const W=H=>{e[H]&&(e[H].destroy(),H==="navigation"?(e.isElement&&(e[H].prevEl.remove(),e[H].nextEl.remove()),g[H].prevEl=void 0,g[H].nextEl=void 0,e[H].prevEl=void 0,e[H].nextEl=void 0):(e.isElement&&e[H].el.remove(),g[H].el=void 0,e[H].el=void 0))};o.includes("loop")&&e.isElement&&(g.loop&&!s.loop?j=!0:!g.loop&&s.loop?D=!0:Q=!0),m.forEach(H=>{if(kr(g[H])&&kr(s[H]))Object.assign(g[H],s[H]),(H==="navigation"||H==="pagination"||H==="scrollbar")&&"enabled"in s[H]&&!s[H].enabled&&W(H);else{const U=s[H];(U===!0||U===!1)&&(H==="navigation"||H==="pagination"||H==="scrollbar")?U===!1&&W(H):g[H]=s[H]}}),m.includes("controller")&&!P&&e.controller&&e.controller.control&&g.controller&&g.controller.control&&(e.controller.control=g.controller.control),o.includes("children")&&r&&b&&g.virtual.enabled?(b.slides=r,b.update(!0)):o.includes("virtual")&&b&&g.virtual.enabled&&(r&&(b.slides=r),b.update(!0)),o.includes("children")&&r&&g.loop&&(Q=!0),L&&O.init()&&O.update(!0),P&&(e.controller.control=g.controller.control),T&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),e.el.appendChild(f)),f&&(g.pagination.el=f),y.init(),y.render(),y.update()),E&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),p.part.add("scrollbar"),e.el.appendChild(p)),p&&(g.scrollbar.el=p),x.init(),x.updateSize(),x.setTranslate()),N&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),l.innerHTML=e.hostEl.constructor.nextButtonSvg,l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),u.innerHTML=e.hostEl.constructor.prevButtonSvg,u.part.add("button-prev"),e.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),_.init(),_.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),o.includes("direction")&&e.changeDirection(s.direction,!1),(j||Q)&&e.loopDestroy(),(D||Q)&&e.loopCreate(),e.update()}function Ax(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const r={on:{}},s={},o={};pi(r,Ou),r._emitClasses=!0,r.init=!1;const l={},u=Lg.map(f=>f.replace(/_/,"")),p=Object.assign({},t);return Object.keys(p).forEach(f=>{typeof t[f]>"u"||(u.indexOf(f)>=0?kr(t[f])?(r[f]={},o[f]={},pi(r[f],t[f]),pi(o[f],t[f])):(r[f]=t[f],o[f]=t[f]):f.search(/on[A-Z]/)===0&&typeof t[f]=="function"?e?s[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:r.on[`${f[2].toLowerCase()}${f.substr(3)}`]=t[f]:l[f]=t[f])}),["navigation","pagination","scrollbar"].forEach(f=>{r[f]===!0&&(r[f]={}),r[f]===!1&&delete r[f]}),{params:r,passedParams:o,rest:l,events:s}}function Rx(t,e){let{el:r,nextEl:s,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:p}=t;zg(e)&&s&&o&&(p.params.navigation.nextEl=s,p.originalParams.navigation.nextEl=s,p.params.navigation.prevEl=o,p.originalParams.navigation.prevEl=o),Fg(e)&&l&&(p.params.pagination.el=l,p.originalParams.pagination.el=l),Bg(e)&&u&&(p.params.scrollbar.el=u,p.originalParams.scrollbar.el=u),p.init(r)}function jx(t,e,r,s,o){const l=[];if(!e)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(r&&s){const f=s.map(o),m=r.map(o);f.join("")!==m.join("")&&u("children"),s.length!==r.length&&u("children")}return Lg.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in t&&f in e)if(kr(t[f])&&kr(e[f])){const m=Object.keys(t[f]),g=Object.keys(e[f]);m.length!==g.length?u(f):(m.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}),g.forEach(y=>{t[f][y]!==e[f][y]&&u(f)}))}else t[f]!==e[f]&&u(f)}),l}const Dx=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Ca.apply(this,arguments)}function Vg(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Hg(t){const e=[];return Pe.Children.toArray(t).forEach(r=>{Vg(r)?e.push(r):r.props&&r.props.children&&Hg(r.props.children).forEach(s=>e.push(s))}),e}function Lx(t){const e=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Pe.Children.toArray(t).forEach(s=>{if(Vg(s))e.push(s);else if(s.props&&s.props.slot&&r[s.props.slot])r[s.props.slot].push(s);else if(s.props&&s.props.children){const o=Hg(s.props.children);o.length>0?o.forEach(l=>e.push(l)):r["container-end"].push(s)}else r["container-end"].push(s)}),{slides:e,slots:r}}function zx(t,e,r){if(!r)return null;const s=g=>{let y=g;return g<0?y=e.length+g:y>=e.length&&(y=y-e.length),y},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:l,to:u}=r,p=t.params.loop?-e.length:0,f=t.params.loop?e.length*2:e.length,m=[];for(let g=p;g<f;g+=1)g>=l&&g<=u&&m.push(e[s(g)]);return m.map((g,y)=>Pe.cloneElement(g,{swiper:t,style:o,key:g.props.virtualIndex||g.key||`slide-${y}`}))}function Ts(t,e){return typeof window>"u"?pe.useEffect(t,e):pe.useLayoutEffect(t,e)}const im=pe.createContext(null),Fx=pe.createContext(null),Ti=pe.forwardRef(function(t,e){let{className:r,tag:s="div",wrapperTag:o="div",children:l,onSwiper:u,...p}=t===void 0?{}:t,f=!1;const[m,g]=pe.useState("swiper"),[y,_]=pe.useState(null),[x,b]=pe.useState(!1),O=pe.useRef(!1),L=pe.useRef(null),P=pe.useRef(null),T=pe.useRef(null),E=pe.useRef(null),N=pe.useRef(null),j=pe.useRef(null),D=pe.useRef(null),Q=pe.useRef(null),{params:W,passedParams:H,rest:U,events:F}=Ax(p),{slides:z,slots:$}=Lx(l),q=()=>{b(!x)};Object.assign(W.on,{_containerClasses(J,K){g(K)}});const ie=()=>{Object.assign(W.on,F),f=!0;const J={...W};if(delete J.wrapperClass,P.current=new ad(J),P.current.virtual&&P.current.params.virtual.enabled){P.current.virtual.slides=z;const K={cache:!1,slides:z,renderExternal:_,renderExternalUpdate:!1};pi(P.current.params.virtual,K),pi(P.current.originalParams.virtual,K)}};L.current||ie(),P.current&&P.current.on("_beforeBreakpoint",q);const ge=()=>{f||!F||!P.current||Object.keys(F).forEach(J=>{P.current.on(J,F[J])})},_e=()=>{!F||!P.current||Object.keys(F).forEach(J=>{P.current.off(J,F[J])})};pe.useEffect(()=>()=>{P.current&&P.current.off("_beforeBreakpoint",q)}),pe.useEffect(()=>{!O.current&&P.current&&(P.current.emitSlidesClasses(),O.current=!0)}),Ts(()=>{if(e&&(e.current=L.current),!!L.current)return P.current.destroyed&&ie(),Rx({el:L.current,nextEl:N.current,prevEl:j.current,paginationEl:D.current,scrollbarEl:Q.current,swiper:P.current},W),u&&!P.current.destroyed&&u(P.current),()=>{P.current&&!P.current.destroyed&&P.current.destroy(!0,!1)}},[]),Ts(()=>{ge();const J=jx(H,T.current,z,E.current,K=>K.key);return T.current=H,E.current=z,J.length&&P.current&&!P.current.destroyed&&Ox({swiper:P.current,slides:z,passedParams:H,changedParams:J,nextEl:N.current,prevEl:j.current,scrollbarEl:Q.current,paginationEl:D.current}),()=>{_e()}}),Ts(()=>{Dx(P.current)},[y]);function V(){return W.virtual?zx(P.current,z,y):z.map((J,K)=>Pe.cloneElement(J,{swiper:P.current,swiperSlideIndex:K}))}return Pe.createElement(s,Ca({ref:L,className:$g(`${m}${r?` ${r}`:""}`)},U),Pe.createElement(Fx.Provider,{value:P.current},$["container-start"],Pe.createElement(o,{className:Mx(W.wrapperClass)},$["wrapper-start"],V(),$["wrapper-end"]),zg(W)&&Pe.createElement(Pe.Fragment,null,Pe.createElement("div",{ref:j,className:"swiper-button-prev"}),Pe.createElement("div",{ref:N,className:"swiper-button-next"})),Bg(W)&&Pe.createElement("div",{ref:Q,className:"swiper-scrollbar"}),Fg(W)&&Pe.createElement("div",{ref:D,className:"swiper-pagination"}),$["container-end"]))});Ti.displayName="Swiper";const Ae=pe.forwardRef(function(t,e){let{tag:r="div",children:s,className:o="",swiper:l,zoom:u,lazy:p,virtualIndex:f,swiperSlideIndex:m,...g}=t===void 0?{}:t;const y=pe.useRef(null),[_,x]=pe.useState("swiper-slide"),[b,O]=pe.useState(!1);function L(N,j,D){j===y.current&&x(D)}Ts(()=>{if(typeof m<"u"&&(y.current.swiperSlideIndex=m),e&&(e.current=y.current),!(!y.current||!l)){if(l.destroyed){_!=="swiper-slide"&&x("swiper-slide");return}return l.on("_slideClass",L),()=>{l&&l.off("_slideClass",L)}}}),Ts(()=>{l&&y.current&&!l.destroyed&&x(l.getSlideClasses(y.current))},[l]);const P={isActive:_.indexOf("swiper-slide-active")>=0,isVisible:_.indexOf("swiper-slide-visible")>=0,isPrev:_.indexOf("swiper-slide-prev")>=0,isNext:_.indexOf("swiper-slide-next")>=0},T=()=>typeof s=="function"?s(P):s,E=()=>{O(!0)};return Pe.createElement(r,Ca({ref:y,className:$g(`${_}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:E},g),u&&Pe.createElement(im.Provider,{value:P},Pe.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},T(),p&&!b&&Pe.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Pe.createElement(im.Provider,{value:P},T(),p&&!b&&Pe.createElement("div",{className:"swiper-lazy-preloader"})))});Ae.displayName="SwiperSlide";function Bx(t,e,r,s){return t.params.createElements&&Object.keys(s).forEach(o=>{if(!r[o]&&r.auto===!0){let l=pn(t.el,`.${s[o]}`)[0];l||(l=Ea("div",s[o]),l.className=s[o],t.el.append(l)),r[o]=l,e[o]=l}}),r}function ys(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Fs(t){let{swiper:e,extendParams:r,on:s,emit:o}=t;const l="swiper-pagination";r({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,p=0;function f(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function m(T,E){const{bulletActiveClass:N}=e.params.pagination;T&&(T=T[`${E==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${N}-${E}`),T=T[`${E==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${N}-${E}-${E}`)))}function g(T,E,N){if(T=T%N,E=E%N,E===T+1)return"next";if(E===T-1)return"previous"}function y(T){const E=T.target.closest(ys(e.params.pagination.bulletClass));if(!E)return;T.preventDefault();const N=ba(E)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===N)return;const j=g(e.realIndex,N,e.slides.length);j==="next"?e.slideNext():j==="previous"?e.slidePrev():e.slideToLoop(N)}else e.slideTo(N)}function _(){const T=e.rtl,E=e.params.pagination;if(f())return;let N=e.pagination.el;N=bn(N);let j,D;const Q=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,W=e.params.loop?Math.ceil(Q/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(D=e.previousRealIndex||0,j=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(j=e.snapIndex,D=e.previousSnapIndex):(D=e.previousIndex||0,j=e.activeIndex||0),E.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const H=e.pagination.bullets;let U,F,z;if(E.dynamicBullets&&(u=Nu(H[0],e.isHorizontal()?"width":"height"),N.forEach($=>{$.style[e.isHorizontal()?"width":"height"]=`${u*(E.dynamicMainBullets+4)}px`}),E.dynamicMainBullets>1&&D!==void 0&&(p+=j-(D||0),p>E.dynamicMainBullets-1?p=E.dynamicMainBullets-1:p<0&&(p=0)),U=Math.max(j-p,0),F=U+(Math.min(H.length,E.dynamicMainBullets)-1),z=(F+U)/2),H.forEach($=>{const q=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(ie=>`${E.bulletActiveClass}${ie}`)].map(ie=>typeof ie=="string"&&ie.includes(" ")?ie.split(" "):ie).flat();$.classList.remove(...q)}),N.length>1)H.forEach($=>{const q=ba($);q===j?$.classList.add(...E.bulletActiveClass.split(" ")):e.isElement&&$.setAttribute("part","bullet"),E.dynamicBullets&&(q>=U&&q<=F&&$.classList.add(...`${E.bulletActiveClass}-main`.split(" ")),q===U&&m($,"prev"),q===F&&m($,"next"))});else{const $=H[j];if($&&$.classList.add(...E.bulletActiveClass.split(" ")),e.isElement&&H.forEach((q,ie)=>{q.setAttribute("part",ie===j?"bullet-active":"bullet")}),E.dynamicBullets){const q=H[U],ie=H[F];for(let ge=U;ge<=F;ge+=1)H[ge]&&H[ge].classList.add(...`${E.bulletActiveClass}-main`.split(" "));m(q,"prev"),m(ie,"next")}}if(E.dynamicBullets){const $=Math.min(H.length,E.dynamicMainBullets+4),q=(u*$-u)/2-z*u,ie=T?"right":"left";H.forEach(ge=>{ge.style[e.isHorizontal()?ie:"top"]=`${q}px`})}}N.forEach((H,U)=>{if(E.type==="fraction"&&(H.querySelectorAll(ys(E.currentClass)).forEach(F=>{F.textContent=E.formatFractionCurrent(j+1)}),H.querySelectorAll(ys(E.totalClass)).forEach(F=>{F.textContent=E.formatFractionTotal(W)})),E.type==="progressbar"){let F;E.progressbarOpposite?F=e.isHorizontal()?"vertical":"horizontal":F=e.isHorizontal()?"horizontal":"vertical";const z=(j+1)/W;let $=1,q=1;F==="horizontal"?$=z:q=z,H.querySelectorAll(ys(E.progressbarFillClass)).forEach(ie=>{ie.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${q})`,ie.style.transitionDuration=`${e.params.speed}ms`})}E.type==="custom"&&E.renderCustom?(H.innerHTML=E.renderCustom(e,j+1,W),U===0&&o("paginationRender",H)):(U===0&&o("paginationRender",H),o("paginationUpdate",H)),e.params.watchOverflow&&e.enabled&&H.classList[e.isLocked?"add":"remove"](E.lockClass)})}function x(){const T=e.params.pagination;if(f())return;const E=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let N=e.pagination.el;N=bn(N);let j="";if(T.type==="bullets"){let D=e.params.loop?Math.ceil(E/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&D>E&&(D=E);for(let Q=0;Q<D;Q+=1)T.renderBullet?j+=T.renderBullet.call(e,Q,T.bulletClass):j+=`<${T.bulletElement} ${e.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?j=T.renderFraction.call(e,T.currentClass,T.totalClass):j=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?j=T.renderProgressbar.call(e,T.progressbarFillClass):j=`<span class="${T.progressbarFillClass}"></span>`),e.pagination.bullets=[],N.forEach(D=>{T.type!=="custom"&&(D.innerHTML=j||""),T.type==="bullets"&&e.pagination.bullets.push(...D.querySelectorAll(ys(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",N[0])}function b(){e.params.pagination=Bx(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const T=e.params.pagination;if(!T.el)return;let E;typeof T.el=="string"&&e.isElement&&(E=e.el.querySelector(T.el)),!E&&typeof T.el=="string"&&(E=[...document.querySelectorAll(T.el)]),E||(E=T.el),!(!E||E.length===0)&&(e.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(E)&&E.length>1&&(E=[...e.el.querySelectorAll(T.el)],E.length>1&&(E=E.filter(N=>Og(N,".swiper")[0]===e.el)[0])),Array.isArray(E)&&E.length===1&&(E=E[0]),Object.assign(e.pagination,{el:E}),E=bn(E),E.forEach(N=>{T.type==="bullets"&&T.clickable&&N.classList.add(...(T.clickableClass||"").split(" ")),N.classList.add(T.modifierClass+T.type),N.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(N.classList.add(`${T.modifierClass}${T.type}-dynamic`),p=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&N.classList.add(T.progressbarOppositeClass),T.clickable&&N.addEventListener("click",y),e.enabled||N.classList.add(T.lockClass)}))}function O(){const T=e.params.pagination;if(f())return;let E=e.pagination.el;E&&(E=bn(E),E.forEach(N=>{N.classList.remove(T.hiddenClass),N.classList.remove(T.modifierClass+T.type),N.classList.remove(e.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(N.classList.remove(...(T.clickableClass||"").split(" ")),N.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(N=>N.classList.remove(...T.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const T=e.params.pagination;let{el:E}=e.pagination;E=bn(E),E.forEach(N=>{N.classList.remove(T.horizontalClass,T.verticalClass),N.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?P():(b(),x(),_())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&_()}),s("snapIndexChange",()=>{_()}),s("snapGridLengthChange",()=>{x(),_()}),s("destroy",()=>{O()}),s("enable disable",()=>{let{el:T}=e.pagination;T&&(T=bn(T),T.forEach(E=>E.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{_()}),s("click",(T,E)=>{const N=E.target,j=bn(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&j&&j.length>0&&!N.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&N===e.navigation.nextEl||e.navigation.prevEl&&N===e.navigation.prevEl))return;const D=j[0].classList.contains(e.params.pagination.hiddenClass);o(D===!0?"paginationShow":"paginationHide"),j.forEach(Q=>Q.classList.toggle(e.params.pagination.hiddenClass))}});const L=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=bn(T),T.forEach(E=>E.classList.remove(e.params.pagination.paginationDisabledClass))),b(),x(),_()},P=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:T}=e.pagination;T&&(T=bn(T),T.forEach(E=>E.classList.add(e.params.pagination.paginationDisabledClass))),O()};Object.assign(e.pagination,{enable:L,disable:P,render:x,update:_,init:b,destroy:O})}function Bs(t){let{swiper:e,extendParams:r,on:s,emit:o,params:l}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,p,f=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,y=new Date().getTime(),_,x,b,O,L,P,T;function E(V){!e||e.destroyed||!e.wrapperEl||V.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",E),!(T||V.detail&&V.detail.bySwiperTouchMove)&&U())}const N=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?_=!0:_&&(m=g,_=!1);const V=e.autoplay.paused?g:y+m-new Date().getTime();e.autoplay.timeLeft=V,o("autoplayTimeLeft",V,V/f),p=requestAnimationFrame(()=>{N()})},j=()=>{let V;return e.virtual&&e.params.virtual.enabled?V=e.slides.filter(K=>K.classList.contains("swiper-slide-active"))[0]:V=e.slides[e.activeIndex],V?parseInt(V.getAttribute("data-swiper-autoplay"),10):void 0},D=V=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),N();let J=typeof V>"u"?e.params.autoplay.delay:V;f=e.params.autoplay.delay,m=e.params.autoplay.delay;const K=j();!Number.isNaN(K)&&K>0&&typeof V>"u"&&(J=K,f=K,m=K),g=J;const I=e.params.speed,B=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),o("autoplay")),e.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{D()})))};return J>0?(clearTimeout(u),u=setTimeout(()=>{B()},J)):requestAnimationFrame(()=>{B()}),J},Q=()=>{y=new Date().getTime(),e.autoplay.running=!0,D(),o("autoplayStart")},W=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(p),o("autoplayStop")},H=(V,J)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),V||(P=!0);const K=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",E):U()};if(e.autoplay.paused=!0,J){L&&(g=e.params.autoplay.delay),L=!1,K();return}g=(g||e.params.autoplay.delay)-(new Date().getTime()-y),!(e.isEnd&&g<0&&!e.params.loop)&&(g<0&&(g=0),K())},U=()=>{e.isEnd&&g<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(y=new Date().getTime(),P?(P=!1,D(g)):D(),e.autoplay.paused=!1,o("autoplayResume"))},F=()=>{if(e.destroyed||!e.autoplay.running)return;const V=In();V.visibilityState==="hidden"&&(P=!0,H(!0)),V.visibilityState==="visible"&&U()},z=V=>{V.pointerType==="mouse"&&(P=!0,T=!0,!(e.animating||e.autoplay.paused)&&H(!0))},$=V=>{V.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&U())},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",z),e.el.addEventListener("pointerleave",$))},ie=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",z),e.el.removeEventListener("pointerleave",$))},ge=()=>{In().addEventListener("visibilitychange",F)},_e=()=>{In().removeEventListener("visibilitychange",F)};s("init",()=>{e.params.autoplay.enabled&&(q(),ge(),Q())}),s("destroy",()=>{ie(),_e(),e.autoplay.running&&W()}),s("_freeModeStaticRelease",()=>{(b||P)&&U()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?W():H(!0,!0)}),s("beforeTransitionStart",(V,J,K)=>{e.destroyed||!e.autoplay.running||(K||!e.params.autoplay.disableOnInteraction?H(!0,!0):W())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){W();return}x=!0,b=!1,P=!1,O=setTimeout(()=>{P=!0,b=!0,H(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!x)){if(clearTimeout(O),clearTimeout(u),e.params.autoplay.disableOnInteraction){b=!1,x=!1;return}b&&e.params.cssMode&&U(),b=!1,x=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(L=!0)}),Object.assign(e.autoplay,{start:Q,stop:W,pause:H,resume:U})}function Ua(t){let{swiper:e,extendParams:r,emit:s,once:o}=t;r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function l(){if(e.params.cssMode)return;const f=e.getTranslate();e.setTranslate(f),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function u(){if(e.params.cssMode)return;const{touchEventsData:f,touches:m}=e;f.velocities.length===0&&f.velocities.push({position:m[e.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:m[e.isHorizontal()?"currentX":"currentY"],time:Cr()})}function p(f){let{currentPos:m}=f;if(e.params.cssMode)return;const{params:g,wrapperEl:y,rtlTranslate:_,snapGrid:x,touchEventsData:b}=e,L=Cr()-b.touchStartTime;if(m<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(m>-e.maxTranslate()){e.slides.length<x.length?e.slideTo(x.length-1):e.slideTo(e.slides.length-1);return}if(g.freeMode.momentum){if(b.velocities.length>1){const W=b.velocities.pop(),H=b.velocities.pop(),U=W.position-H.position,F=W.time-H.time;e.velocity=U/F,e.velocity/=2,Math.abs(e.velocity)<g.freeMode.minimumVelocity&&(e.velocity=0),(F>150||Cr()-W.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=g.freeMode.momentumVelocityRatio,b.velocities.length=0;let P=1e3*g.freeMode.momentumRatio;const T=e.velocity*P;let E=e.translate+T;_&&(E=-E);let N=!1,j;const D=Math.abs(e.velocity)*20*g.freeMode.momentumBounceRatio;let Q;if(E<e.maxTranslate())g.freeMode.momentumBounce?(E+e.maxTranslate()<-D&&(E=e.maxTranslate()-D),j=e.maxTranslate(),N=!0,b.allowMomentumBounce=!0):E=e.maxTranslate(),g.loop&&g.centeredSlides&&(Q=!0);else if(E>e.minTranslate())g.freeMode.momentumBounce?(E-e.minTranslate()>D&&(E=e.minTranslate()+D),j=e.minTranslate(),N=!0,b.allowMomentumBounce=!0):E=e.minTranslate(),g.loop&&g.centeredSlides&&(Q=!0);else if(g.freeMode.sticky){let W;for(let H=0;H<x.length;H+=1)if(x[H]>-E){W=H;break}Math.abs(x[W]-E)<Math.abs(x[W-1]-E)||e.swipeDirection==="next"?E=x[W]:E=x[W-1],E=-E}if(Q&&o("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(_?P=Math.abs((-E-e.translate)/e.velocity):P=Math.abs((E-e.translate)/e.velocity),g.freeMode.sticky){const W=Math.abs((_?-E:E)-e.translate),H=e.slidesSizesGrid[e.activeIndex];W<H?P=g.speed:W<2*H?P=g.speed*1.5:P=g.speed*2.5}}else if(g.freeMode.sticky){e.slideToClosest();return}g.freeMode.momentumBounce&&N?(e.updateProgress(j),e.setTransition(P),e.setTranslate(E),e.transitionStart(!0,e.swipeDirection),e.animating=!0,eu(y,()=>{!e||e.destroyed||!b.allowMomentumBounce||(s("momentumBounce"),e.setTransition(g.speed),setTimeout(()=>{e.setTranslate(j),eu(y,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(E),e.setTransition(P),e.setTranslate(E),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,eu(y,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(E),e.updateActiveIndex(),e.updateSlidesClasses()}else if(g.freeMode.sticky){e.slideToClosest();return}else g.freeMode&&s("_freeModeNoMomentumRelease");(!g.freeMode.momentum||L>=g.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:l,onTouchMove:u,onTouchEnd:p}})}const $x=ee.div`
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
`,Vx=ee.section`
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
`,Hx=ee.section`
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
`,Wx=ee.div`
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
`,Ux=ee.div`
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
`,ci=ee(Ae)`
  padding: 20px;
  position: relative; /* Permite que o conteúdo do slide seja colocado acima do degradê */
  z-index: 1; /* Garante que o slide fique acima do degradê */
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`,Gx=()=>v.jsx(v.Fragment,{children:v.jsxs(Vx,{children:[v.jsx($x,{}),v.jsxs(Hx,{children:[v.jsxs(Wx,{children:[v.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[v.jsx("b",{children:"Vantagens"})," em ter um site conosco"]}),v.jsx("a",{href:"#",children:v.jsx(Zw,{"data-aos":"fade-in","data-aos-delay":"400"})})]}),v.jsx(Ux,{"data-aos":"fade-up-right","data-aos-delay":"400",children:v.jsxs(Ti,{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:5e3,modules:[Bs,Ua,Fs],pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(ai,{title:"Velocidade",description:" Seus projetos são desenvolvidos com agilidade, garantindo a entrega rápida de sites funcionais e modernos, sem comprometer a qualidade. Ideal para quem precisa de resultados prontos no menor tempo possível."}),v.jsx(li,{title:"Qualidade",description:"Cada site criado reflete atenção aos detalhes, com design profissional e performance impecável."})]})}),v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(li,{title:"Otimização",description:" Seus sites são otimizados, garantindo carregamento rápido, navegação fluida e compatibilidade com todos os dispositivos"}),v.jsx(ai,{title:"SEO",description:"Seus sites já são construídos com estratégias de SEO integradas, aumentando a visibilidade nos motores de busca e atraindo tráfego qualificado. Você não entrega só um site bonito, mas também eficaz."})]})}),v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(ai,{title:"Autenticidade",description:"Você cria sites únicos e personalizados, refletindo a identidade de cada cliente e diferenciando-se de modelos genéricos. Cada projeto é exclusivo, pensado para destacar o cliente no mercado."}),v.jsx(li,{title:"Versatilidade",description:"Com a capacidade de atender diferentes nichos e demandas, seu site se adapta ao que deseja."})]})}),v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(li,{title:"Comunicação",description:"Você mantém uma comunicação clara e aberta durante todo o processo, garantindo que você esteja sempre informado e satisfeito com tudo."}),v.jsx(ai,{title:"Completo",description:"Solução completa, que vai além do design: desde registro de domínio e hospedagem até estratégias para redes sociais e integrações com ferramentas de marketing."})]})}),v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(ai,{title:"Manutenção",description:"Seus sites são desenvolvidos de forma que possam ser facilmente atualizados e mantidos, com suporte contínuo para garantir que tudo esteja sempre funcionando perfeitamente."}),v.jsx(li,{title:"Escalabilidade",description:"Seus sites prontos para crescer junto com o seu negócio, permitindo a adição de novas funcionalidades e se adaptando às demandas futuras do mercado."})]})}),v.jsx(ci,{children:v.jsxs("div",{children:[v.jsx(li,{title:"Desempenho",description:"Seus sites são projetados para desempenho máximo, com alta velocidade de carregamento."}),v.jsx(ai,{title:"Vendas",description:"Seus sites não são apenas vitrines, mas ferramentas estratégicas para aumentar as conversões e vendas, com design persuasivo, CTAs bem posicionados e integração com plataformas de pagamento."})]})})]})})]})]})}),qx=ee.div`
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
`,lu=()=>(pe.useEffect(()=>{const t=()=>{const e=window.innerWidth>500?1e3:500;Tr.init({duration:e,offset:20,easing:"ease-in-out",once:!0}),Tr.refresh()};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),v.jsx(qx,{"data-aos":"fade-in",children:v.jsxs(Ti,{modules:[Bs,Ua,Fs],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),Yx=ee.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: linear-gradient(120deg, var(--color--purple), #dbdbdb, var(--color--blue));
    transition: all .2s ease-in-out;

    @media (max-width: 768px) {
        border-radius: 10px;
    }

    &:hover{
        background: #353535;
        border: 1px solid var(--color--white);
    }

    &:hover > b {
        color: var(--color--white);
        background: transparent;
        font-weight: 400;
    }

    &:hover > img {
        filter: brightness(500%);
    }


    & > b{
        color: var(--color--white);
        font-family: var(--font--poppins);
        font-weight: 600;
        font-size: 16px;
        transition: all .2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & > img {
        width: 20px;
        transition: all .2s ease-in-out; 
    }
    
`,Wg=()=>v.jsx(v.Fragment,{children:v.jsxs(Yx,{id:"click-button","data-aos":"fade-up","data-aos-delay":"200",onClick:()=>{window.open("https://w.app/5AaZMJ","_blank")},children:[v.jsx("b",{children:"Solicitar orçamento"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png"})]})}),Kx=Wa`
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-10px);
    }
`,Qx=ee.section`
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
`,Xx=ee.div`
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
`,Jx=ee.div`
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
`,Zx=ee.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

    & > a{
        font-size: 32px;
        color: var(--color--purple);
        opacity: 0.4;
        animation: ${Kx} 2s linear infinite alternate-reverse;
    }
`,eS=()=>v.jsx(v.Fragment,{children:v.jsxs(Qx,{children:[v.jsxs(Xx,{children:[v.jsxs("div",{children:[v.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[v.jsx("b",{children:"As empresas"})," sempres nos escolhem"]}),v.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"300",children:["Escolher a qualidade é a melhor escolha, veja nossos ",v.jsx("a",{href:"#",children:"pacotes."})]})]}),v.jsx("div",{"data-aos":"fade-in","data-aos-delay":"500",children:v.jsx(Wg,{})})]}),v.jsx(Jx,{"data-aos":"fade-up-right","data-aos-delay":"300",children:v.jsxs(Ti,{modules:[Bs,Ua,Fs],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:0,slidesPerView:3,freeMode:!0,speed:4e3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:10}},children:[v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/10_gyjqvc.png",alt:"le ange"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/18_zyjvhk.png",alt:"allox"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/19_f8pi7x.png",alt:"your name"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/13_cnu2os.png",alt:"thelastofus"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/12_nkzjqe.png",alt:"lifegreen"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/15_wehzuc.png",alt:"monkey"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264979/11_yvl8cq.png",alt:"etech"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/16_xklqek.png",alt:"wizardZ"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/14_vunelf.png",alt:"coffe"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/17_pgciit.png",alt:"horizen"})})}),v.jsx(Ae,{children:v.jsx("a",{href:"#",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735264980/20_hfglfp.png",alt:"yellow"})})})]})}),v.jsx(Zx,{"data-aos":"fade-down","data-aos-delay":"200",children:v.jsx("a",{href:"#",children:v.jsx(Pg,{})})})]})}),tS=ee.div`
  width: 25%;
  height: 350px;
  border-radius: ${t=>t.borderRadius||"20px"};
  background-color: ${t=>t.bgColor||"var(--color--black)"};
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
      background: ${t=>t.bBackground||"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))"};
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
`,oa=({borderRadius:t,bgColor:e,bBackground:r,icon:s,boldText:o,normalText:l})=>v.jsxs(tS,{"data-aos":"fade-up","data-aos-delay":"200",borderRadius:t,bgColor:e,bBackground:r,children:[v.jsx("a",{href:"#","data-aos":"fade-up","data-aos-delay":"200",children:s?v.jsx(s,{}):v.jsx(a_,{})}),v.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"400",children:[v.jsx("b",{children:o||"Texto em Negrito"}),l||"Texto normal de exemplo"]}),v.jsx(Mr,{})]}),nS=ee.section`
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

`,rS=ee.div`
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
`,iS=ee.div`
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
`,sS=ee.div`
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
`,oS=ee.div`
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
`,aS=ee.div`
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
`,lS=()=>v.jsx(v.Fragment,{children:v.jsxs(nS,{children:[v.jsx(rS,{children:v.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Para quem ",v.jsx("b",{children:"nós somos?"})]})}),v.jsxs(iS,{children:[v.jsx(sS,{"data-aos":"fade-right","data-aos-delay":"400",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959436/pessoas1_mzx60k.jpg"})}),v.jsx(oa,{borderRadius:"15px",bgColor:"var(--color--black)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:c_,boldText:"Empresas",normalText:"que querem crescer no mercado"}),v.jsx(oa,{borderRadius:"15px",bgColor:"var(--color--purple)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:o_,boldText:"Pessoas",normalText:"que querem aumentar sua visibilidade"})]}),v.jsxs(oS,{children:[v.jsx(oa,{borderRadius:"15px",bgColor:"var(--color--blue)",bBackground:"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))",icon:t_,boldText:"Lojas",normalText:"que querem aumentar suas vendas"}),v.jsx(oa,{borderRadius:"15px",bgColor:"var(--color--gray)",bBackground:"linear-gradient(90deg, #dbdbdb, var(--color--blue))",icon:s_,boldText:"Todos",normalText:"que querem evoluir seu negócio de patamar"}),v.jsx(aS,{"data-aos":"fade-left","data-aos-delay":"400",children:v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1734959437/pessoas2_rcc7yv.jpg"})})]})]})}),cS=Wa`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* Ajuste conforme o conteúdo */
    opacity: 1;
  }
`,uS=ee.div`
  margin-bottom: 16px;
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 20px;
    font-family: var(--font--poppins);
    font-weight: ${({isOpen:t})=>t?"400":"200"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    margin-top: 20px;
    border-bottom: 1px solid white;
    background: ${({isOpen:t})=>t?"linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue))":"transparent"};
    color: ${({isOpen:t})=>t?"transparent":"white"};
    background-clip: ${({isOpen:t})=>t?"text":"border-box"};
    -webkit-background-clip: ${({isOpen:t})=>t?"text":"border-box"};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    .arrow {
      font-size: 14px;
      transform: ${({isOpen:t})=>t?"rotate(90deg)":"rotate(0)"};
      transition: transform 0.3s ease;
      color: var(--color--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .content {
    overflow: hidden;
    max-height: ${({isOpen:t})=>t?"200px":"0"};
    animation: ${({isOpen:t})=>t?cS:"none"} 0.3s ease;
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
`,Au=({items:t,onTextClick:e})=>{e||console.error("Prop 'onTextClick' não foi passada para o OpenText.");const[r,s]=pe.useState(null),o=l=>{console.log(`OpenText clicked: ${l}`),s(r===l?null:l),e&&e(l)};return v.jsx(v.Fragment,{children:t.map((l,u)=>v.jsxs(uS,{isOpen:r===u,onClick:()=>o(u),children:[v.jsxs("h3",{children:[l.title,v.jsx("span",{className:"arrow",children:v.jsx(i_,{})})]}),v.jsx("div",{className:"content",children:l.text})]},u))})},dS=ee.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    transition: opacity 0.5s ease-in-out;
    object-fit: contain;
    opacity: ${({isVisible:t})=>t?1:0};
  }
`,fS=({images:t,activeIndex:e})=>{const[r,s]=pe.useState(!1);return pe.useEffect(()=>{s(!1);const o=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(o)},[e]),e===null||e<0||e>=t.length?v.jsx("div",{children:"Nenhuma imagem selecionada."}):v.jsx(dS,{isVisible:r,children:v.jsx("img",{src:t[e],alt:`Imagem ${e+1}`})})},pS=ee.div`
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
`,hS=ee.section`
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
`,mS=ee.section`
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
`,gS=ee.div`
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
`,vS=ee.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`,yS=()=>{const[t,e]=pe.useState(0),r=[{title:"Exclusividade",text:"Contato direto com o desenvolvedor para atendimento ágil e personalizado."},{title:"Manutenção gratuita",text:"Suporte completo por 12 meses, sem custos extras."},{title:"Aprenda a mexer no seu site",text:"Treinamento prático para você gerenciar tudo com facilidade."},{title:"Descontos em outros serviços",text:"Acesso a condições especiais em serviços adicionais."}],s=["https://res.cloudinary.com/dabucfkmg/image/upload/v1735406828/1_wpksrg.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1735406829/2_yx40ez.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1735406829/3_dvzidx.png","https://res.cloudinary.com/dabucfkmg/image/upload/v1735406829/4_izdnqm.png"],o=l=>{e(l)};return v.jsx(v.Fragment,{children:v.jsxs(hS,{children:[v.jsx(pS,{}),v.jsxs(mS,{children:[v.jsxs(gS,{children:[v.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:[v.jsx("b",{children:"Para te motivar"}),", dedicamos alguns benefícios a você"]}),v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(Au,{items:r,onTextClick:o})}),v.jsx(Mr,{})]}),v.jsx(vS,{"data-aos":"fade-up-left","data-aos-delay":"200",children:v.jsx(fS,{images:s,activeIndex:t})})]})]})})},wS=ee.div`
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
`,_S=ee.div`
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
`,xS=ee.div`
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
`,ui=({logo:t,nota:e,empresa:r,depoimento:s})=>v.jsx(v.Fragment,{children:v.jsxs(wS,{children:[v.jsxs(_S,{children:[v.jsx("img",{src:t}),v.jsxs("div",{children:[v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png"}),v.jsx("p",{children:e})]})]}),v.jsxs(xS,{children:[v.jsx("h1",{children:r}),v.jsx("p",{children:s})]})]})}),SS=ee.section`
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
`,ES=ee.div`
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
`,bS=ee.div`
    & > a {
        font-size: 28px;
        color: var(--color--purple);
        opacity: .6;
    }
`,CS=ee.div`
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
`,TS=ee.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`,kS=()=>v.jsx(v.Fragment,{children:v.jsxs(SS,{children:[v.jsx(ES,{"data-aos":"fade-down","data-aos-delay":"100",children:v.jsx("h2",{"data-aos":"zoom-in","data-aos-delay":"300",children:"Depoimentos"})}),v.jsx(bS,{"data-aos":"fade-down","data-aos-delay":"300",children:v.jsx("a",{href:"#",children:v.jsx(Pg,{})})}),v.jsx(CS,{children:v.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:["Não tenha dúvidas, ",v.jsx("b",{children:"escolha o certo!"})]})}),v.jsx(TS,{"data-aos":"fade-up","data-aos-delay":"400",children:v.jsxs(Ti,{modules:[Bs,Fs],loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},spaceBetween:30,slidesPerView:3,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:3,spaceBetween:20}},children:[v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/6_bv5zu4.svg",nota:"4.9",empresa:"Le Ange",depoimento:"Nosso site ficou simplesmente perfeito! Ele reflete o charme, sofisticação e o acolhimento que queríamos transmitir para nossos hóspedes. A experiência com o Aleph foi impecável, desde o design até o suporte pós-lançamento. Recomendo de olhos fechados!"})}),v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/5_tnvyoj.svg",nota:"4.7",empresa:"Al Lox",depoimento:"Precisávamos de um site que fosse moderno, funcional e ao mesmo tempo destacasse nossos produtos eletrônicos. O Aleph superou todas as expectativas! O design ficou incrível e a navegação é super intuitiva, o que aumentou nossas vendas online."})}),v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/7_berqb9.svg",nota:"4.9",empresa:"Life Green",depoimento:"O site desenvolvido pelo Aleph conseguiu traduzir perfeitamente nossa missão de sustentabilidade. Ficamos impressionados com o cuidado nos detalhes e o alinhamento com nossos valores. Muito bom mesmo!"})}),v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332714/4_teeinx.svg",nota:"4.6",empresa:"WizardZ",depoimento:"Como agência de marketing, precisávamos de um site que destacasse nossa criatividade. O Aleph criou algo que não apenas impressiona visualmente, mas também é altamente funcional. A entrega foi rápida e o suporte constante é ótimo!"})}),v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/3_qckj5u.svg",nota:"4.9",empresa:"Etech",depoimento:"Para uma escola online como a nossa, um site bem estruturado é essencial. O Aleph entregou uma plataforma educativa completa, com design intuitivo e ferramentas que facilitam a experiência dos alunos. Estamos muito satisfeitos com o resultado!"})}),v.jsx(Ae,{children:v.jsx(ui,{logo:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735332713/2_xqs2va.svg",nota:"4.9",empresa:"Meal Monkey",depoimento:"O Aleph transformou nosso site em uma verdadeira extensão da nossa marca! Agora temos um espaço que não só facilita pedidos online, mas também encanta nossos clientes com um design moderno e funcional. Um investimento que valeu a pena!"})})]})})]})}),IS=ee.div`
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
`,PS=()=>(pe.useEffect(()=>{const t=()=>{const e=window.innerWidth>500?1e3:500;Tr.init({duration:e,offset:20,easing:"ease-in-out",once:!0}),Tr.refresh()};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),v.jsx(IS,{"data-aos":"fade-in",children:v.jsxs(Ti,{modules:[Bs,Ua,Fs],loop:!0,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:50,slidesPerView:4,freeMode:!0,speed:2500,pagination:!1,breakpoints:{0:{slidesPerView:1,spaceBetween:10},1080:{slidesPerView:4,spaceBetween:10}},children:[v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})}),v.jsx(Ae,{children:v.jsxs("div",{children:[v.jsx("h3",{children:"Faça seu site conosco"}),v.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248625/iconWhite_muzw7l.png",alt:"icon"})]})})]})})),NS=ee.div`
  width: 100%;
  /* Não coloque overflow: hidden ou auto aqui */
`,MS=ee.div`
  position: sticky;
  top: 0;
  height: 20px;
  background-color: #fff; 
  z-index: 1; /* abaixo do cabeçalho real */
`,OS=ee.div`
  position: sticky;
  top: 20px; /* Começa a 100px do topo */
  z-index: 2; /* acima do WhiteTopSpace */
`,AS=ee.div`
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
`,RS=ee.div`
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
`,jS=ee.div`
  border-radius: 0 0 20px 20px;
  padding: 20px;
  background-color: #D552D005;
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
`,cu=({promoBold:t,promo:e,valor:r,servico:s,listItems:o=[]})=>v.jsxs(NS,{children:[v.jsx(MS,{}),v.jsxs(OS,{children:[v.jsx(AS,{children:v.jsxs("h4",{children:[v.jsx("b",{children:t})," ",e]})}),v.jsxs(RS,{children:[v.jsx("h1",{children:s}),v.jsxs("div",{children:[v.jsx("p",{children:"Economize agora"}),v.jsx("span",{children:r})]}),v.jsx(Mr,{})]})]}),v.jsx(jS,{children:v.jsx("ol",{children:o.map((l,u)=>v.jsx("li",{children:l},u))})})]}),DS=ee.section`
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
`,LS=ee.div`
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
`,zS=ee.div`
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

`,FS=()=>v.jsx(v.Fragment,{children:v.jsxs(DS,{children:[v.jsx(LS,{children:v.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["O que ",v.jsx("b",{children:"você busca"}),", escolha abaixo:"]})}),v.jsxs(zS,{children:[v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(cu,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$890,90",servico:"Landing Page",listItems:["Alta conversão","Tempo de carregamento veloz","Versátilidade de design","Instalação de Pixel","Aumentar a visibilidade online","Aumento de leads qualificados","Design responsivo ( mobile-first )","Otimização para SEO","Integração com ferramentas de automação de marketing","Geração de tráfego pago eficaz"]})}),v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(cu,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$1290,90",servico:"Institucional",listItems:["Posicionamento de marca","Versatilidade de design","Instalação de Pixel","Apresentação de equipe e valores da empresa","Integração com redes sociais","Seções interativas (ex.: FAQ, chat ao vivo)","Blog ou seção de noticias","Facilitação de contato (formulários e links rápidos)","Geração de tráfego pago eficaz"]})}),v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(cu,{promoBold:"3 MESES",promo:"de manutenção grátis",valor:"R$1890,90",servico:"E-commerce",listItems:["Alto número de vendas","Sistemas fácil de manipular","Instalação de Pixel","Função de recomendação de produtos","Carrinho de compras otimizado","Pagamento integrado e seguro","Monitoramento de comportamento do usúarios","Ofertas personalizadas e promoções","Sistema de reviews e avaliações de produtos"]})})]})]})}),BS=ee.section`
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
`,$S=ee.div`
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
`,VS=ee.div`
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
`,HS=ee.div`
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
`,WS=()=>v.jsx(v.Fragment,{children:v.jsx(BS,{children:v.jsxs($S,{children:[v.jsxs(VS,{children:[v.jsx("h1",{"data-aos":"fade-up-right","data-aos-delay":"100",children:"Torne-se nosso parceiro"}),v.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Se você está buscando criar mais de 1 site, oferecemos uma proposta para você, se tornando nosso parceiro, você garante preços exclusivos"}),v.jsx("img",{"data-aos":"fade-in","data-aos-delay":"600",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248919/whitePacerias_x9oj45.png"})]}),v.jsxs(HS,{children:[v.jsxs("ol",{children:[v.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"200",children:[v.jsx(r_,{}),"Descontos exclusivos"]}),v.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"300",children:[v.jsx(l_,{}),"Manutenção estendida"]}),v.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"400",children:[v.jsx(e_,{}),"Prioridade de entrega"]}),v.jsxs("li",{"data-aos":"fade-up","data-aos-delay":"500",children:[v.jsx(n_,{}),"Feito para empresas"]})]}),v.jsx(Wg,{})]})]})})}),US=ee.div`
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
`,GS=ee.section`
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
`,qS=ee.section`
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
`,YS=ee.div`
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
`,KS=ee.div`
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
`,QS=()=>{const[t,e]=pe.useState(0),r=[{title:"Qual a vantagem de eu ter um site?",text:"Ter um site profissional aumenta sua visibilidade, fortalece a sua marca e permite atender seus clientes de forma eficiente, 24 horas por dia."},{title:"Como faço um site para vender?",text:"Crio sites otimizados para vendas, com integração a meios de pagamento, carrinho de compras e estratégias para aumentar sua conversão."},{title:"Quantas seções tem no site?",text:"Sim! Seu site será personalizado, com quantas seções forem necessárias para atender às suas necessidades e objetivos."},{title:"Qual tipo de linguagem você usa?",text:"Uso tecnologias modernas como React, HTML5, CSS3, JavaScript e frameworks que garantem um site rápido e funcional."}],s=[{title:"O valor mínimo para um site é?",text:"O valor inicial depende da complexidade do projeto, mas ofereço opções acessíveis para atender diferentes necessidades."},{title:"Existe garantia na entrega do site?",text:"Sim! A entrega é garantida dentro do prazo combinado, com suporte técnico incluso por 3 meses para ajustes e manutenção."},{title:"Quais são os meios de contato?",text:"Você pode entrar em contato via WhatsApp, e-mail ou diretamente pelas redes sociais. Estou sempre disponível para atender você!"},{title:"A hospedagem do site está inclusa?",text:"A hospedagem pode ser inclusa como um serviço adicional, garantindo um pacote completo e funcional."}],o=l=>{console.log(`Texto clicado: ${l}`),e(l)};return v.jsx(v.Fragment,{children:v.jsxs(GS,{children:[v.jsx(US,{}),v.jsxs(qS,{children:[v.jsxs(YS,{children:[v.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Ficou com dúvidas?"}),v.jsx("p",{"data-aos":"fade-in","data-aos-delay":"500",children:"Veja as perguntas mais recorrentes"})]}),v.jsxs(KS,{children:[v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(Au,{items:r,onTextClick:o})}),v.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(Au,{items:s,onTextClick:o})})]}),v.jsx(Mr,{})]})]})})};function XS(t){return Ot({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function JS(t){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}var sm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(t,e){if(!t)throw ki(e)},ki=function(t){return new Error("Firebase Database ("+Ug.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128)}return e},ZS=function(t){const e=[];let r=0,s=0;for(;r<t.length;){const o=t[r++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[r++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[r++],u=t[r++],p=t[r++],f=((o&7)<<18|(l&63)<<12|(u&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=t[r++],u=t[r++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,p=u?t[o+1]:0,f=o+2<t.length,m=f?t[o+2]:0,g=l>>2,y=(l&3)<<4|p>>4;let _=(p&15)<<2|m>>6,x=m&63;f||(x=64,u||(_=64)),s.push(r[g],r[y],r[_],r[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=r[t.charAt(o++)],p=o<t.length?r[t.charAt(o)]:0;++o;const m=o<t.length?r[t.charAt(o)]:64;++o;const y=o<t.length?r[t.charAt(o)]:64;if(++o,l==null||p==null||m==null||y==null)throw new eE;const _=l<<2|p>>4;if(s.push(_),m!==64){const x=p<<4&240|m>>2;if(s.push(x),y!==64){const b=m<<6&192|y;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qg=function(t){const e=Gg(t);return ld.encodeByteArray(e,!0)},Ta=function(t){return qg(t).replace(/\./g,"")},Ru=function(t){try{return ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return Yg(void 0,t)}function Yg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)!e.hasOwnProperty(r)||!nE(r)||(t[r]=Yg(t[r],e[r]));return t}function nE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=()=>rE().__FIREBASE_DEFAULTS__,sE=()=>{if(typeof process>"u"||typeof sm>"u")return;const t=sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ru(t[1]);return e&&JSON.parse(e)},Kg=()=>{try{return iE()||sE()||oE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aE=t=>{var e,r;return(r=(e=Kg())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},lE=t=>{const e=aE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),s]:[e.substring(0,r),s]},Qg=()=>{var t;return(t=Kg())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ta(JSON.stringify(r)),Ta(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(uE())}function dE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jg(){return Ug.NODE_ADMIN===!0}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((t,e)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="FirebaseError";class $s extends Error{constructor(e,r,s){super(r),this.code=e,this.customData=s,this.name=hE,Object.setPrototypeOf(this,$s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zg.prototype.create)}}class Zg{constructor(e,r,s){this.service=e,this.serviceName=r,this.errors=s}create(e,...r){const s=r[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?mE(l,s):"Error",p=`${this.serviceName}: ${u} (${o}).`;return new $s(o,p,s)}}function mE(t,e){return t.replace(gE,(r,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const gE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return JSON.parse(t)}function ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(t){let e={},r={},s={},o="";try{const l=t.split(".");e=As(Ru(l[0])||""),r=As(Ru(l[1])||""),o=l[2],s=r.d||{},delete r.d}catch{}return{header:e,claims:r,data:s,signature:o}},vE=function(t){const e=e0(t),r=e.claims;return!!r&&typeof r=="object"&&r.hasOwnProperty("iat")},yE=function(t){const e=e0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ka(t,e,r){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=e.call(r,t[o],o,t));return s}function ju(t,e){if(t===e)return!0;const r=Object.keys(t),s=Object.keys(e);for(const o of r){if(!s.includes(o))return!1;const l=t[o],u=e[o];if(am(l)&&am(u)){if(!ju(l,u))return!1}else if(l!==u)return!1}for(const o of s)if(!r.includes(o))return!1;return!0}function am(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){const e=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,r){r||(r=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(let y=0;y<16;y++)s[y]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(let y=16;y<80;y++){const _=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],p=this.chain_[3],f=this.chain_[4],m,g;for(let y=0;y<80;y++){y<40?y<20?(m=p^l&(u^p),g=1518500249):(m=l^u^p,g=1859775393):y<60?(m=l&u|p&(l|u),g=2400959708):(m=l^u^p,g=3395469782);const _=(o<<5|o>>>27)+m+f+g+s[y]&4294967295;f=p,p=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,r){if(e==null)return;r===void 0&&(r=e.length);const s=r-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<r;){if(u===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<r;)if(l[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<r;)if(l[u]=e[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=r}digest(){const e=[];let r=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=r&255,r/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function cd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,te(s<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(s)-56320;o=65536+(l<<10)+u}o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):o<65536?(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128)}return e},qa=function(t){let e=0;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,r++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return t&&t._delegate?t._delegate:t}class Rs{constructor(e,r,s){this.name=e,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const s=new Ga;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[l,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&u.resolve(o)}return o}onInit(e,r){var s;const o=this.normalizeInstanceIdentifier(r),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&e(u,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,r){const s=this.onInitCallbacks.get(r);if(s)for(const o of s)try{o(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:EE(e),options:r}),this.instances.set(e,s),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EE(t){return t===yr?void 0:t}function bE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new SE(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const TE={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},kE=ze.INFO,IE={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},PE=(t,e,...r)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=IE[e];if(o)console[o](`[${s}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class t0{constructor(e){this.name=e,this._logLevel=kE,this._logHandler=PE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const NE=(t,e)=>e.some(r=>t instanceof r);let lm,cm;function ME(){return lm||(lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OE(){return cm||(cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,Du=new WeakMap,r0=new WeakMap,uu=new WeakMap,ud=new WeakMap;function AE(t){const e=new Promise((r,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",u)},l=()=>{r(tr(t.result)),o()},u=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",u)});return e.then(r=>{r instanceof IDBCursor&&n0.set(r,t)}).catch(()=>{}),ud.set(e,t),e}function RE(t){if(Du.has(t))return;const e=new Promise((r,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",u),t.removeEventListener("abort",u)},l=()=>{r(),o()},u=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",u),t.addEventListener("abort",u)});Du.set(t,e)}let Lu={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return tr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jE(t){Lu=t(Lu)}function DE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const s=t.call(du(this),e,...r);return r0.set(s,e.sort?e.sort():[e]),tr(s)}:OE().includes(t)?function(...e){return t.apply(du(this),e),tr(n0.get(this))}:function(...e){return tr(t.apply(du(this),e))}}function LE(t){return typeof t=="function"?DE(t):(t instanceof IDBTransaction&&RE(t),NE(t,ME())?new Proxy(t,Lu):t)}function tr(t){if(t instanceof IDBRequest)return AE(t);if(uu.has(t))return uu.get(t);const e=LE(t);return e!==t&&(uu.set(t,e),ud.set(e,t)),e}const du=t=>ud.get(t);function zE(t,e,{blocked:r,upgrade:s,blocking:o,terminated:l}={}){const u=indexedDB.open(t,e),p=tr(u);return s&&u.addEventListener("upgradeneeded",f=>{s(tr(u.result),f.oldVersion,f.newVersion,tr(u.transaction),f)}),r&&u.addEventListener("blocked",f=>r(f.oldVersion,f.newVersion,f)),p.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const FE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],fu=new Map;function um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const r=e.replace(/FromIndex$/,""),s=e!==r,o=BE.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(o||FE.includes(r)))return;const l=async function(u,...p){const f=this.transaction(u,o?"readwrite":"readonly");let m=f.store;return s&&(m=m.index(p.shift())),(await Promise.all([m[r](...p),o&&f.done]))[0]};return fu.set(e,l),l}jE(t=>({...t,get:(e,r,s)=>um(e,r)||t.get(e,r,s),has:(e,r)=>!!um(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(VE(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function VE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",dm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new t0("@firebase/app"),HE="@firebase/app-compat",WE="@firebase/analytics-compat",UE="@firebase/analytics",GE="@firebase/app-check-compat",qE="@firebase/app-check",YE="@firebase/auth",KE="@firebase/auth-compat",QE="@firebase/database",XE="@firebase/data-connect",JE="@firebase/database-compat",ZE="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",ib="@firebase/messaging-compat",sb="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",cb="@firebase/storage",ub="@firebase/storage-compat",db="@firebase/firestore",fb="@firebase/vertexai",pb="@firebase/firestore-compat",hb="firebase",mb="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="[DEFAULT]",gb={[zu]:"fire-core",[HE]:"fire-core-compat",[UE]:"fire-analytics",[WE]:"fire-analytics-compat",[qE]:"fire-app-check",[GE]:"fire-app-check-compat",[YE]:"fire-auth",[KE]:"fire-auth-compat",[QE]:"fire-rtdb",[XE]:"fire-data-connect",[JE]:"fire-rtdb-compat",[ZE]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[ib]:"fire-fcm-compat",[sb]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[cb]:"fire-gcs",[ub]:"fire-gcs-compat",[db]:"fire-fst",[pb]:"fire-fst-compat",[fb]:"fire-vertex","fire-js":"fire-js",[hb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map,vb=new Map,Bu=new Map;function fm(t,e){try{t.container.addComponent(e)}catch(r){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Pa(t){const e=t.name;if(Bu.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const r of Ia.values())fm(r,t);for(const r of vb.values())fm(r,t);return!0}function yb(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new Zg("app","Firebase",wb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,r,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=mb;function i0(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw nr.create("bad-app-name",{appName:String(o)});if(r||(r=Qg()),!r)throw nr.create("no-options");const l=Ia.get(o);if(l){if(ju(r,l.options)&&ju(s,l.config))return l;throw nr.create("duplicate-app",{appName:o})}const u=new CE(o);for(const f of Bu.values())u.addComponent(f);const p=new _b(r,s,u);return Ia.set(o,p),p}function Sb(t=Fu){const e=Ia.get(t);if(!e&&t===Fu&&Qg())return i0();if(!e)throw nr.create("no-app",{appName:t});return e}function hi(t,e,r){var s;let o=(s=gb[t])!==null&&s!==void 0?s:t;r&&(o+=`-${r}`);const l=o.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&p.push("and"),u&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(p.join(" "));return}Pa(new Rs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firebase-heartbeat-database",bb=1,js="firebase-heartbeat-store";let pu=null;function s0(){return pu||(pu=zE(Eb,bb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(r){console.warn(r)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),pu}async function Cb(t){try{const r=(await s0()).transaction(js),s=await r.objectStore(js).get(o0(t));return await r.done,s}catch(e){if(e instanceof $s)Nn.warn(e.message);else{const r=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(r.message)}}}async function pm(t,e){try{const s=(await s0()).transaction(js,"readwrite");await s.objectStore(js).put(e,o0(t)),await s.done}catch(r){if(r instanceof $s)Nn.warn(r.message);else{const s=nr.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Nn.warn(s.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1024,kb=30*24*60*60*1e3;class Ib{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Nb(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=hm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const p=new Date(u.date).valueOf();return Date.now()-p<=kb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Nn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=hm(),{heartbeatsToSend:s,unsentEntries:o}=Pb(this._heartbeatsCache.heartbeats),l=Ta(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(r){return Nn.warn(r),""}}}function hm(){return new Date().toISOString().substring(0,10)}function Pb(t,e=Tb){const r=[];let s=t.slice();for(const o of t){const l=r.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),mm(r)>e){l.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),mm(r)>e){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class Nb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Cb(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return pm(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return pm(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function mm(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){Pa(new Rs("platform-logger",e=>new $E(e),"PRIVATE")),Pa(new Rs("heartbeat",e=>new Ib(e),"PRIVATE")),hi(zu,dm,t),hi(zu,dm,"esm2017"),hi("fire-js","")}Mb("");var Ob="firebase",Ab="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(Ob,Ab,"app");var gm={};const vm="@firebase/database",ym="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a0="";function Rb(t){a0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,r){r==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(r))}get(e){const r=this.domStorage_.getItem(this.prefixedName_(e));return r==null?null:As(r)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,r){r==null?delete this.cache_[e]:this.cache_[e]=r}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jb(e)}}catch{}return new Db},xr=l0("localStorage"),Lb=l0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new t0("@firebase/database"),zb=function(){let t=1;return function(){return t++}}(),c0=function(t){const e=xE(t),r=new _E;r.update(e);const s=r.digest();return ld.encodeByteArray(s)},Vs=function(...t){let e="";for(let r=0;r<t.length;r++){const s=t[r];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=ht(s):e+=s,e+=" "}return e};let ks=null,wm=!0;const Fb=function(t,e){te(!e,"Can't turn on custom loggers persistently."),mi.logLevel=ze.VERBOSE,ks=mi.log.bind(mi)},wt=function(...t){if(wm===!0&&(wm=!1,ks===null&&Lb.get("logging_enabled")===!0&&Fb()),ks){const e=Vs.apply(null,t);ks(e)}},Hs=function(t){return function(...e){wt(t,...e)}},$u=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vs(...t);mi.error(e)},Mn=function(...t){const e=`FIREBASE FATAL ERROR: ${Vs(...t)}`;throw mi.error(e),new Error(e)},Mt=function(...t){const e="FIREBASE WARNING: "+Vs(...t);mi.warn(e)},Bb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},u0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$b=function(t){if(document.readyState==="complete")t();else{let e=!1;const r=function(){if(!document.body){setTimeout(r,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",r,!1),window.addEventListener("load",r,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&r()}),window.attachEvent("onload",r))}},Ei="[MIN_NAME]",Ir="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===Ei||e===Ir)return-1;if(e===Ei||t===Ir)return 1;{const r=_m(t),s=_m(e);return r!==null?s!==null?r-s===0?t.length-e.length:r-s:-1:s!==null?1:t<e?-1:1}},Vb=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ht(e))},dd=function(t){if(typeof t!="object"||t===null)return ht(t);const e=[];for(const s in t)e.push(s);e.sort();let r="{";for(let s=0;s<e.length;s++)s!==0&&(r+=","),r+=ht(e[s]),r+=":",r+=dd(t[e[s]]);return r+="}",r},d0=function(t,e){const r=t.length;if(r<=e)return[t];const s=[];for(let o=0;o<r;o+=e)o+e>r?s.push(t.substring(o,r)):s.push(t.substring(o,o+e));return s};function Yt(t,e){for(const r in t)t.hasOwnProperty(r)&&e(r,t[r])}const f0=function(t){te(!u0(t),"Invalid JSON number");const e=11,r=52,s=(1<<e-1)-1;let o,l,u,p,f;t===0?(l=0,u=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(p=Math.min(Math.floor(Math.log(t)/Math.LN2),s),l=p+s,u=Math.round(t*Math.pow(2,r-p)-Math.pow(2,r))):(l=0,u=Math.round(t/Math.pow(2,1-s-r))));const m=[];for(f=r;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const g=m.join("");let y="";for(f=0;f<64;f+=8){let _=parseInt(g.substr(f,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},Hb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Wb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ub=new RegExp("^-?(0*)\\d{1,10}$"),Gb=-2147483648,qb=2147483647,_m=function(t){if(Ub.test(t)){const e=Number(t);if(e>=Gb&&e<=qb)return e}return null},Ni=function(t){try{t()}catch(e){setTimeout(()=>{const r=e.stack||"";throw Mt("Exception was thrown by user callback.",r),e},Math.floor(0))}},Yb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(t,e){const r=setTimeout(t,e);return typeof r=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(r):typeof r=="object"&&r.unref&&r.unref(),r};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,r){this.appName_=e,this.appCheckProvider=r,this.appCheck=r==null?void 0:r.getImmediate({optional:!0}),this.appCheck||r==null||r.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((r,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(r,s):r(null)},0)})}addTokenChangeListener(e){var r;(r=this.appCheckProvider)===null||r===void 0||r.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,r,s){this.appName_=e,this.firebaseOptions_=r,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(r=>r&&r.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)):new Promise((r,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(r,s):r(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(r=>r.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(r=>r.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class ga{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ga.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="5",p0="v",h0="s",m0="r",g0="f",v0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,y0="ls",w0="p",Vu="ac",_0="websocket",x0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,r,s,o,l=!1,u="",p=!1,f=!1){this.secure=r,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",r=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${r}`}}function Xb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function E0(t,e,r){te(typeof e=="string","typeof type must == string"),te(typeof r=="object","typeof params must == object");let s;if(e===_0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xb(t)&&(r.ns=t.namespace);const o=[];return Yt(r,(l,u)=>{o.push(l+"="+u)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.counters_={}}incrementCounter(e,r=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=r}get(){return tE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu={},mu={};function pd(t){const e=t.toString();return hu[e]||(hu[e]=new Jb),hu[e]}function Zb(t,e){const r=t.toString();return mu[r]||(mu[r]=e()),mu[r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,r){this.closeAfterResponse=e,this.onClose=r,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,r){for(this.pendingResponses[e]=r;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Ni(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="start",tC="close",nC="pLPCommand",rC="pRTLPCB",b0="id",C0="pw",T0="ser",iC="cb",sC="seg",oC="ts",aC="d",lC="dframe",k0=1870,I0=30,cC=k0-I0,uC=25e3,dC=3e4;class fi{constructor(e,r,s,o,l,u,p){this.connId=e,this.repoInfo=r,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hs(e),this.stats_=pd(r),this.urlFn=f=>(this.appCheckToken&&(f[Vu]=this.appCheckToken),E0(r,x0,f))}open(e,r){this.curSegmentNum=0,this.onDisconnect_=r,this.myPacketOrderer=new eC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dC)),$b(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hd((...l)=>{const[u,p,f,m,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===xm)this.id=p,this.password=f;else if(u===tC)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,p]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,p)},()=>{this.onClosed_()},this.urlFn);const s={};s[xm]="t",s[T0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[p0]=fd,this.transportSessionId&&(s[h0]=this.transportSessionId),this.lastSessionId&&(s[y0]=this.lastSessionId),this.applicationId&&(s[w0]=this.applicationId),this.appCheckToken&&(s[Vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&v0.test(location.hostname)&&(s[m0]=g0);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fi.forceAllow_=!0}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){return fi.forceAllow_?!0:!fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hb()&&!Wb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const r=ht(e);this.bytesSent+=r.length,this.stats_.incrementCounter("bytes_sent",r.length);const s=qg(r),o=d0(s,cC);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,r){this.myDisconnFrame=document.createElement("iframe");const s={};s[lC]="t",s[b0]=e,s[C0]=r,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const r=ht(e).length;this.bytesReceived+=r,this.stats_.incrementCounter("bytes_received",r)}}class hd{constructor(e,r,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zb(),window[nC+this.uniqueCallbackIdentifier]=e,window[rC+this.uniqueCallbackIdentifier]=r,this.myIFrame=hd.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(p){wt("frame writing exception"),p.stack&&wt(p.stack),wt(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,r){for(this.myID=e,this.myPW=r,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[b0]=this.myID,e[C0]=this.myPW,e[T0]=this.currentSerial;let r=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I0+s.length<=k0;){const u=this.pendingSegs.shift();s=s+"&"+sC+o+"="+u.seg+"&"+oC+o+"="+u.ts+"&"+aC+o+"="+u.d,o++}return r=r+s,this.addLongPollTag_(r,this.currentSerial),!0}else return!1}enqueueSegment(e,r,s){this.pendingSegs.push({seg:e,ts:r,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,r){this.outstandingRequests.add(r);const s=()=>{this.outstandingRequests.delete(r),this.newRequest_()},o=setTimeout(s,Math.floor(uC)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,r){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),r())},s.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=16384,pC=45e3;let Na=null;typeof MozWebSocket<"u"?Na=MozWebSocket:typeof WebSocket<"u"&&(Na=WebSocket);class hn{constructor(e,r,s,o,l,u,p){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hs(this.connId),this.stats_=pd(r),this.connURL=hn.connectionURL_(r,u,p,o,s),this.nodeAdmin=r.nodeAdmin}static connectionURL_(e,r,s,o,l){const u={};return u[p0]=fd,typeof location<"u"&&location.hostname&&v0.test(location.hostname)&&(u[m0]=g0),r&&(u[h0]=r),s&&(u[y0]=s),o&&(u[Vu]=o),l&&(u[w0]=l),E0(e,_0,u)}open(e,r){this.onDisconnect=r,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xr.set("previous_websocket_failure",!0);try{let s;Jg(),this.mySock=new Na(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const r=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(r);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Na!==null&&!hn.forceDisallow_}static previouslyFailed(){return xr.isInMemoryStorage||xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const r=this.frames.join("");this.frames=null;const s=As(r);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const r=Number(e);if(!isNaN(r))return this.handleNewFrameCount_(r),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const r=e.data;if(this.bytesReceived+=r.length,this.stats_.incrementCounter("bytes_received",r.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(r);else{const s=this.extractFrameCount_(r);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const r=ht(e);this.bytesSent+=r.length,this.stats_.incrementCounter("bytes_sent",r.length);const s=d0(r,fC);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pC))}sendString_(e){try{this.mySock.send(e)}catch(r){this.log_("Exception thrown from WebSocket.send():",r.message||r.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static get ALL_TRANSPORTS(){return[fi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const r=hn.isAvailable();let s=r&&!hn.previouslyFailed();if(e.webSocketOnly&&(r||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const o=this.transports_=[];for(const l of Ds.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=6e4,mC=5e3,gC=10*1024,vC=100*1024,gu="t",Sm="d",yC="s",Em="r",wC="e",bm="o",Cm="a",Tm="n",km="p",_C="h";class xC{constructor(e,r,s,o,l,u,p,f,m,g){this.id=e,this.repoInfo_=r,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=p,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hs("c:"+this.id+":"),this.transportManager_=new Ds(r),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const r=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(r,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return r=>{e===this.conn_?this.onConnectionLost_(r):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return r=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(r):e===this.secondaryConn_?this.onSecondaryMessageReceived_(r):this.log_("message on old connection"))}}sendRequest(e){const r={t:"d",d:e};this.sendData_(r)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gu in e){const r=e[gu];r===Cm?this.upgradeIfSecondaryHealthy_():r===Em?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):r===bm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const r=ws("t",e),s=ws("d",e);if(r==="c")this.onSecondaryControl_(s);else if(r==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+r)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const r=ws("t",e),s=ws("d",e);r==="c"?this.onControl_(s):r==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const r=ws(gu,e);if(Sm in e){const s=e[Sm];if(r===_C){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(r===Tm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else r===yC?this.onConnectionShutdown_(s):r===Em?this.onReset_(s):r===wC?$u("Server Error: "+s):r===bm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$u("Unknown control packet command: "+r)}}onHandshake_(e){const r=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,r),fd!==s&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const r=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,s),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,r){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(r,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{put(e,r,s,o){}merge(e,r,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,r,s){}onDisconnectMerge(e,r,s){}onDisconnectCancel(e,r){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...r){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,r)}}on(e,r,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:r,context:s});const o=this.getInitialEvent(e);o&&r.apply(s,o)}off(e,r,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===r&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){te(this.allowedEvents_.find(r=>r===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends N0{static getInstance(){return new Ma}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=32,Pm=768;class We{constructor(e,r){if(r===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=r}toString(){let e="";for(let r=this.pieceNum_;r<this.pieces_.length;r++)this.pieces_[r]!==""&&(e+="/"+this.pieces_[r]);return e||"/"}}function je(){return new We("")}function Ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ir(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function M0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SC(t){let e="";for(let r=t.pieceNum_;r<t.pieces_.length;r++)t.pieces_[r]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[r])));return e||"/"}function O0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function A0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let r=t.pieceNum_;r<t.pieces_.length-1;r++)e.push(t.pieces_[r]);return new We(e,0)}function nt(t,e){const r=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)r.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)r.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&r.push(s[o])}return new We(r,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const r=Ee(t),s=Ee(e);if(r===null)return e;if(r===s)return Gt(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function R0(t,e){if(ir(t)!==ir(e))return!1;for(let r=t.pieceNum_,s=e.pieceNum_;r<=t.pieces_.length;r++,s++)if(t.pieces_[r]!==e.pieces_[s])return!1;return!0}function rn(t,e){let r=t.pieceNum_,s=e.pieceNum_;if(ir(t)>ir(e))return!1;for(;r<t.pieces_.length;){if(t.pieces_[r]!==e.pieces_[s])return!1;++r,++s}return!0}class EC{constructor(e,r){this.errorPrefix_=r,this.parts_=O0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qa(this.parts_[s]);j0(this)}}function bC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qa(e),j0(t)}function CC(t){const e=t.parts_.pop();t.byteLength_-=qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function j0(t){if(t.byteLength_>Pm)throw new Error(t.errorPrefix_+"has a key path longer than "+Pm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Im)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Im+") or object contains a cycle "+wr(t))}function wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends N0{static getInstance(){return new md}constructor(){super(["visible"]);let e,r;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(r="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(r="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(r="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(r="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,r&&document.addEventListener(r,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=1e3,TC=60*5*1e3,Nm=30*1e3,kC=1.3,IC=3e4,PC="server_kill",Mm=3;class Pn extends P0{constructor(e,r,s,o,l,u,p,f){if(super(),this.repoInfo_=e,this.applicationId_=r,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=p,this.authOverride_=f,this.id=Pn.nextPersistentConnectionId_++,this.log_=Hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_s,this.maxReconnectDelay_=TC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f&&!Jg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ma.getInstance().on("online",this.onOnline_,this)}sendRequest(e,r,s){const o=++this.requestNumber_,l={r:o,a:e,b:r};this.log_(ht(l)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const r=new Ga,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const p=u.d;u.s==="ok"?r.resolve(p):r.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),r.promise}listen(e,r,s,o){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:r,query:e,tag:s};this.listens.get(u).set(l,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const r=this.outstandingGets_[e];this.sendRequest("g",r.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),r.onComplete&&r.onComplete(s)})}sendListen_(e){const r=e.query,s=r._path.toString(),o=r._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},u="q";e.tag&&(l.q=r._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,p=>{const f=p.d,m=p.s;Pn.warnOnListenWarnings_(f,r),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",p),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,r){if(e&&typeof e=="object"&&An(e,"w")){const s=Si(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',l=r._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,r=vE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(r,s,o=>{const l=o.s,u=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const r=e.s,s=e.d||"error";r==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(r,s)})}unlisten(e,r){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,r)}sendUnlisten_(e,r,s,o){this.log_("Unlisten on "+e+" for "+r);const l={p:e},u="n";o&&(l.q=s,l.t=o),this.sendRequest(u,l)}onDisconnectPut(e,r,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,r,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:r,onComplete:s})}onDisconnectMerge(e,r,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,r,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:r,onComplete:s})}onDisconnectCancel(e,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:r})}sendOnDisconnect_(e,r,s,o){const l={p:r,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,r,s,o){this.putInternal("p",e,r,s,o)}merge(e,r,s,o){this.putInternal("m",e,r,s,o)}putInternal(e,r,s,o,l){this.initConnection_();const u={p:r,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+r)}sendPut_(e){const r=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(r,s,l=>{this.log_(r+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const r={c:e};this.log_("reportStats",r),this.sendRequest("s",r,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const r=e.r,s=this.requestCBHash_[r];s&&(delete this.requestCBHash_[r],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,r){this.log_("handleServerMessage",e,r),e==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):e==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):e==="c"?this.onListenRevoked_(r.p,r.q):e==="ac"?this.onAuthRevoked_(r.s,r.d):e==="apc"?this.onAppCheckRevoked_(r.s,r.d):e==="sd"?this.onSecurityDebugPacket_(r):$u("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IC&&(this.reconnectDelay_=_s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let r=Math.max(0,this.reconnectDelay_-e);r=Math.random()*r,this.log_("Trying to reconnect in "+r+"ms"),this.scheduleConnect_(r),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Pn.nextConnectionId_++,l=this.lastSessionId;let u=!1,p=null;const f=function(){p?p.close():(u=!0,s())},m=function(y){te(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(y)};this.realtime_={close:f,sendRequest:m};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,p=new xC(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,r,s,x=>{Mt(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(PC)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&Mt(y),f())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],om(this.interruptReasons_)&&(this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const r=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const r=this.outstandingPuts_[e];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,r){let s;r?s=r.map(l=>dd(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,r){const s=new We(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(r),l.delete(r),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,r){wt("Auth token revoked: "+e+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mm&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,r){wt("App check token revoked: "+e+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const r of e.values())this.sendListen_(r);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let r="js";e["sdk."+r+"."+a0.replace(/\./g,"-")]=1,Xg()?e["framework.cordova"]=1:dE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ma.getInstance().currentlyOnline();return om(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,r){this.name=e,this.node=r}static Wrap(e,r){return new Ce(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,r){const s=new Ce(Ei,e),o=new Ce(Ei,r);return this.compare(s,o)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;class D0 extends Ya{static get __EMPTY_NODE(){return aa}static set __EMPTY_NODE(e){aa=e}compare(e,r){return Pi(e.name,r.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,r){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(Ir,aa)}makePost(e,r){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,aa)}toString(){return".key"}}const gi=new D0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,r,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=r?s(e.key,r):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),r;if(this.resultGenerator_?r=this.resultGenerator_(e.key,e.value):r={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return r}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,r,s,o,l){this.key=e,this.value=r,this.color=s??ct.RED,this.left=o??Nt.EMPTY_NODE,this.right=l??Nt.EMPTY_NODE}copy(e,r,s,o,l){return new ct(e??this.key,r??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,r,s),null):l===0?o=o.copy(null,r,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,r,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,r){let s,o;if(s=this,r(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),r(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class NC{copy(e,r,s,o,l){return this}insert(e,r,s){return new ct(e,r,null)}remove(e,r){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,r=Nt.EMPTY_NODE){this.comparator_=e,this.root_=r}insert(e,r){return new Nt(this.comparator_,this.root_.insert(e,r,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let r,s=this.root_;for(;!s.isEmpty();){if(r=this.comparator_(e,s.key),r===0)return s.value;r<0?s=s.left:r>0&&(s=s.right)}return null}getPredecessorKey(e){let r,s=this.root_,o=null;for(;!s.isEmpty();)if(r=this.comparator_(e,s.key),r===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else r<0?s=s.left:r>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new la(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,r){return new la(this.root_,e,this.comparator_,!1,r)}getReverseIteratorFrom(e,r){return new la(this.root_,e,this.comparator_,!0,r)}getReverseIterator(e){return new la(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new NC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e){return Pi(t.name,e.name)}function gd(t,e){return Pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;function OC(t){Hu=t}const L0=function(t){return typeof t=="number"?"number:"+f0(t):"string:"+t},z0=function(t){if(t.isLeafNode()){const e=t.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else te(t===Hu||t.isEmpty(),"priority of unexpected type.");te(t===Hu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om;class at{static set __childrenNodeConstructor(e){Om=e}static get __childrenNodeConstructor(){return Om}constructor(e,r=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=r,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),z0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Ee(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,r){return null}updateImmediateChild(e,r){return e===".priority"?this.updatePriority(r):r.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,r).updatePriority(this.priorityNode_)}updateChild(e,r){const s=Ee(e);return s===null?r:r.isEmpty()&&s!==".priority"?this:(te(s!==".priority"||ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),r)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,r){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+L0(this.priorityNode_.val())+":");const r=typeof this.value_;e+=r+":",r==="number"?e+=f0(this.value_):e+=this.value_,this.lazyHash_=c0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const r=typeof e.value_,s=typeof this.value_,o=at.VALUE_TYPE_ORDER.indexOf(r),l=at.VALUE_TYPE_ORDER.indexOf(s);return te(o>=0,"Unknown leaf type: "+r),te(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const r=e;return this.value_===r.value_&&this.priorityNode_.equals(r.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F0,B0;function AC(t){F0=t}function RC(t){B0=t}class jC extends Ya{compare(e,r){const s=e.node.getPriority(),o=r.node.getPriority(),l=s.compareTo(o);return l===0?Pi(e.name,r.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,r){return!e.getPriority().equals(r.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(Ir,new at("[PRIORITY-POST]",B0))}makePost(e,r){const s=F0(e);return new Ce(r,new at("[PRIORITY-POST]",s))}toString(){return".priority"}}const _t=new jC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=Math.log(2);class LC{constructor(e){const r=l=>parseInt(Math.log(l)/DC,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=r(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oa=function(t,e,r,s){t.sort(e);const o=function(f,m){const g=m-f;let y,_;if(g===0)return null;if(g===1)return y=t[f],_=r?r(y):y,new ct(_,y.node,ct.BLACK,null,null);{const x=parseInt(g/2,10)+f,b=o(f,x),O=o(x+1,m);return y=t[x],_=r?r(y):y,new ct(_,y.node,ct.BLACK,b,O)}},l=function(f){let m=null,g=null,y=t.length;const _=function(b,O){const L=y-b,P=y;y-=b;const T=o(L+1,P),E=t[L],N=r?r(E):E;x(new ct(N,E.node,O,null,T))},x=function(b){m?(m.left=b,m=b):(g=b,m=b)};for(let b=0;b<f.count;++b){const O=f.nextBitIsOne(),L=Math.pow(2,f.count-(b+1));O?_(L,ct.BLACK):(_(L,ct.BLACK),_(L,ct.RED))}return g},u=new LC(t.length),p=l(u);return new Nt(s||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const xs={};class kn{static get Default(){return te(_t,"ChildrenNode.ts has not been loaded"),vu=vu||new kn({".priority":xs},{".priority":_t}),vu}constructor(e,r){this.indexes_=e,this.indexSet_=r}get(e){const r=Si(this.indexes_,e);if(!r)throw new Error("No index defined for "+e);return r instanceof Nt?r:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,r){te(e!==gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=r.getIterator(Ce.Wrap);let u=l.getNext();for(;u;)o=o||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let p;o?p=Oa(s,e.getCompare()):p=xs;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const g=Object.assign({},this.indexes_);return g[f]=p,new kn(g,m)}addToIndexes(e,r){const s=ka(this.indexes_,(o,l)=>{const u=Si(this.indexSet_,l);if(te(u,"Missing index implementation for "+l),o===xs)if(u.isDefinedOn(e.node)){const p=[],f=r.getIterator(Ce.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&p.push(m),m=f.getNext();return p.push(e),Oa(p,u.getCompare())}else return xs;else{const p=r.get(e.name);let f=o;return p&&(f=f.remove(new Ce(e.name,p))),f.insert(e,e.node)}});return new kn(s,this.indexSet_)}removeFromIndexes(e,r){const s=ka(this.indexes_,o=>{if(o===xs)return o;{const l=r.get(e.name);return l?o.remove(new Ce(e.name,l)):o}});return new kn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class Me{static get EMPTY_NODE(){return Ss||(Ss=new Me(new Nt(gd),null,kn.Default))}constructor(e,r,s){this.children_=e,this.priorityNode_=r,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&z0(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const r=this.children_.get(e);return r===null?Ss:r}}getChild(e){const r=Ee(e);return r===null?this:this.getImmediateChild(r).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,r){if(te(r,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(r);{const s=new Ce(e,r);let o,l;r.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,r),l=this.indexMap_.addToIndexes(s,this.children_));const u=o.isEmpty()?Ss:this.priorityNode_;return new Me(o,u,l)}}updateChild(e,r){const s=Ee(e);if(s===null)return r;{te(Ee(e)!==".priority"||ir(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(He(e),r);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const r={};let s=0,o=0,l=!0;if(this.forEachChild(_t,(u,p)=>{r[u]=p.val(e),s++,l&&Me.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!e&&l&&o<2*s){const u=[];for(const p in r)u[p]=r[p];return u}else return e&&!this.getPriority().isEmpty()&&(r[".priority"]=this.getPriority().val()),r}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+L0(this.getPriority().val())+":"),this.forEachChild(_t,(r,s)=>{const o=s.hash();o!==""&&(e+=":"+r+":"+o)}),this.lazyHash_=e===""?"":c0(e)}return this.lazyHash_}getPredecessorChildName(e,r,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new Ce(e,r));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const r=this.resolveIndex_(e);if(r){const s=r.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const r=this.getFirstChildName(e);return r?new Ce(r,this.children_.get(r)):null}getLastChildName(e){const r=this.resolveIndex_(e);if(r){const s=r.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const r=this.getLastChildName(e);return r?new Ce(r,this.children_.get(r)):null}forEachChild(e,r){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>r(o.name,o.node)):this.children_.inorderTraversal(r)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,r){const s=this.resolveIndex_(r);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Ce.Wrap);let l=o.peek();for(;l!=null&&r.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,r){const s=this.resolveIndex_(r);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let l=o.peek();for(;l!=null&&r.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===gi||this.indexMap_.hasIndex(e))return this;{const r=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,r)}}isIndexed(e){return e===gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const r=e;if(this.getPriority().equals(r.getPriority()))if(this.children_.count()===r.children_.count()){const s=this.getIterator(_t),o=r.getIterator(_t);let l=s.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===gi?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zC extends Me{constructor(){super(new Nt(gd),Me.EMPTY_NODE,kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const Ws=new zC;Object.defineProperties(Ce,{MIN:{value:new Ce(Ei,Me.EMPTY_NODE)},MAX:{value:new Ce(Ir,Ws)}});D0.__EMPTY_NODE=Me.EMPTY_NODE;at.__childrenNodeConstructor=Me;OC(Ws);RC(Ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=!0;function pt(t,e=null){if(t===null)return Me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const r=t;return new at(r,pt(e))}if(!(t instanceof Array)&&FC){const r=[];let s=!1;if(Yt(t,(u,p)=>{if(u.substring(0,1)!=="."){const f=pt(p);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),r.push(new Ce(u,f)))}}),r.length===0)return Me.EMPTY_NODE;const l=Oa(r,MC,u=>u.name,gd);if(s){const u=Oa(r,_t.getCompare());return new Me(l,pt(e),new kn({".priority":u},{".priority":_t}))}else return new Me(l,pt(e),kn.Default)}else{let r=Me.EMPTY_NODE;return Yt(t,(s,o)=>{if(An(t,s)&&s.substring(0,1)!=="."){const l=pt(o);(l.isLeafNode()||!l.isEmpty())&&(r=r.updateImmediateChild(s,l))}}),r.updatePriority(pt(e))}}AC(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC extends Ya{constructor(e){super(),this.indexPath_=e,te(!be(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,r){const s=this.extractChild(e.node),o=this.extractChild(r.node),l=s.compareTo(o);return l===0?Pi(e.name,r.name):l}makePost(e,r){const s=pt(e),o=Me.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(r,o)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new Ce(Ir,e)}toString(){return O0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C extends Ya{compare(e,r){const s=e.node.compareTo(r.node);return s===0?Pi(e.name,r.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,r){return!e.equals(r)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,r){const s=pt(e);return new Ce(r,s)}toString(){return".value"}}const VC=new $C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){return{type:"value",snapshotNode:t}}function WC(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function UC(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Am(t,e,r){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:r}}function GC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rm(t){const e={};if(t.isDefault())return e;let r;if(t.index_===_t?r="$priority":t.index_===VC?r="$value":t.index_===gi?r="$key":(te(t.index_ instanceof BC,"Unrecognized index type!"),r=t.index_.toString()),e.orderBy=ht(r),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ht(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ht(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ht(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let r=t.viewFrom_;r===""&&(t.isViewFromLeft()?r="l":r="r"),e.vf=r}return t.index_!==_t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends P0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,r){return r!==void 0?"tag$"+r:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,r,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Hs("p:rest:"),this.listens_={}}listen(e,r,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=Aa.getListenId_(e,s),p={};this.listens_[u]=p;const f=Rm(e._queryParams);this.restRequest_(l+".json",f,(m,g)=>{let y=g;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(l,y,!1,s),Si(this.listens_,u)===p){let _;m?m===401?_="permission_denied":_="rest_error:"+m:_="ok",o(_,null)}})}unlisten(e,r){const s=Aa.getListenId_(e,r);delete this.listens_[s]}get(e){const r=Rm(e._queryParams),s=e._path.toString(),o=new Ga;return this.restRequest_(s+".json",r,(l,u)=>{let p=u;l===404&&(p=null,l=null),l===null?(this.onDataUpdate_(s,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(e){}restRequest_(e,r={},s){return r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(r.auth=o.accessToken),l&&l.token&&(r.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wE(r);this.log_("Sending REST request for "+u);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(s&&p.readyState===4){this.log_("REST Response for "+u+" received. status:",p.status,"response:",p.responseText);let f=null;if(p.status>=200&&p.status<300){try{f=As(p.responseText)}catch{Mt("Failed to parse JSON response for "+u+": "+p.responseText)}s(null,f)}else p.status!==401&&p.status!==404&&Mt("Got unsuccessful REST response for "+u+" Status: "+p.status),s(p.status);s=null}},p.open("GET",u,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,r){this.rootNode_=this.rootNode_.updateChild(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return{value:null,children:new Map}}function $0(t,e,r){if(be(e))t.value=r,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,r);else{const s=Ee(e);t.children.has(s)||t.children.set(s,Ra());const o=t.children.get(s);e=He(e),$0(o,e,r)}}function Wu(t,e,r){t.value!==null?r(e,t.value):YC(t,(s,o)=>{const l=new We(e.toString()+"/"+s);Wu(o,l,r)})}function YC(t,e){t.children.forEach((r,s)=>{e(s,r)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),r=Object.assign({},e);return this.last_&&Yt(this.last_,(s,o)=>{r[s]=r[s]-o}),this.last_=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=10*1e3,QC=30*1e3,XC=5*60*1e3;class JC{constructor(e,r){this.server_=r,this.statsToReport_={},this.statsListener_=new KC(e);const s=Dm+(QC-Dm)*Math.random();Is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),r={};let s=!1;Yt(e,(o,l)=>{l>0&&An(this.statsToReport_,o)&&(r[o]=l,s=!0)}),s&&this.server_.reportStats(r),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*XC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function V0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function H0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function W0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,r,s){this.path=e,this.affectedTree=r,this.revert=s,this.type=mn.ACK_USER_WRITE,this.source=V0()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const r=this.affectedTree.subtree(new We(e));return new ja(je(),r,this.revert)}}else return te(Ee(this.path)===e,"operationForChild called for unrelated child."),new ja(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,r,s){this.source=e,this.path=r,this.snap=s,this.type=mn.OVERWRITE}operationForChild(e){return be(this.path)?new Pr(this.source,je(),this.snap.getImmediateChild(e)):new Pr(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,r,s){this.source=e,this.path=r,this.children=s,this.type=mn.MERGE}operationForChild(e){if(be(this.path)){const r=this.children.subtree(new We(e));return r.isEmpty()?null:r.value?new Pr(this.source,je(),r.value):new Ls(this.source,je(),r)}else return te(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,r,s){this.node_=e,this.fullyInitialized_=r,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const r=Ee(e);return this.isCompleteForChild(r)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZC(t,e,r,s){const o=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(GC(u.childName,u.snapshotNode))}),Es(t,o,"child_removed",e,s,r),Es(t,o,"child_added",e,s,r),Es(t,o,"child_moved",l,s,r),Es(t,o,"child_changed",e,s,r),Es(t,o,"value",e,s,r),o}function Es(t,e,r,s,o,l){const u=s.filter(p=>p.type===r);u.sort((p,f)=>tT(t,p,f)),u.forEach(p=>{const f=eT(t,p,l);o.forEach(m=>{m.respondsTo(p.type)&&e.push(m.createEvent(f,t.query_))})})}function eT(t,e,r){return e.type==="value"||e.type==="child_removed"||(e.prevName=r.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tT(t,e,r){if(e.childName==null||r.childName==null)throw ki("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),o=new Ce(r.childName,r.snapshotNode);return t.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t,e){return{eventCache:t,serverCache:e}}function Ps(t,e,r,s){return U0(new yd(e,r,s),t.serverCache)}function G0(t,e,r,s){return U0(t.eventCache,new yd(e,r,s))}function Uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const nT=()=>(yu||(yu=new Nt(Vb)),yu);class Ve{static fromObject(e){let r=new Ve(null);return Yt(e,(s,o)=>{r=r.set(new We(s),o)}),r}constructor(e,r=nT()){this.value=e,this.children=r}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,r){if(this.value!=null&&r(this.value))return{path:je(),value:this.value};if(be(e))return null;{const s=Ee(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(He(e),r);return l!=null?{path:nt(new We(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const r=Ee(e),s=this.children.get(r);return s!==null?s.subtree(He(e)):new Ve(null)}}set(e,r){if(be(e))return new Ve(r,this.children);{const s=Ee(e),l=(this.children.get(s)||new Ve(null)).set(He(e),r),u=this.children.insert(s,l);return new Ve(this.value,u)}}remove(e){if(be(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const r=Ee(e),s=this.children.get(r);if(s){const o=s.remove(He(e));let l;return o.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,o),this.value===null&&l.isEmpty()?new Ve(null):new Ve(this.value,l)}else return this}}get(e){if(be(e))return this.value;{const r=Ee(e),s=this.children.get(r);return s?s.get(He(e)):null}}setTree(e,r){if(be(e))return r;{const s=Ee(e),l=(this.children.get(s)||new Ve(null)).setTree(He(e),r);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new Ve(this.value,u)}}fold(e){return this.fold_(je(),e)}fold_(e,r){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(nt(e,o),r)}),r(e,this.value,s)}findOnPath(e,r){return this.findOnPath_(e,je(),r)}findOnPath_(e,r,s){const o=this.value?s(r,this.value):!1;if(o)return o;if(be(e))return null;{const l=Ee(e),u=this.children.get(l);return u?u.findOnPath_(He(e),nt(r,l),s):null}}foreachOnPath(e,r){return this.foreachOnPath_(e,je(),r)}foreachOnPath_(e,r,s){if(be(e))return this;{this.value&&s(r,this.value);const o=Ee(e),l=this.children.get(o);return l?l.foreachOnPath_(He(e),nt(r,o),s):new Ve(null)}}foreach(e){this.foreach_(je(),e)}foreach_(e,r){this.children.inorderTraversal((s,o)=>{o.foreach_(nt(e,s),r)}),this.value&&r(e,this.value)}foreachChild(e){this.children.inorderTraversal((r,s)=>{s.value&&e(r,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new Ve(null))}}function Ns(t,e,r){if(be(e))return new on(new Ve(r));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const u=Gt(o,e);return l=l.updateChild(u,r),new on(t.writeTree_.set(o,l))}else{const o=new Ve(r),l=t.writeTree_.setTree(e,o);return new on(l)}}}function Lm(t,e,r){let s=t;return Yt(r,(o,l)=>{s=Ns(s,nt(e,o),l)}),s}function zm(t,e){if(be(e))return on.empty();{const r=t.writeTree_.setTree(e,new Ve(null));return new on(r)}}function Gu(t,e){return Or(t,e)!=null}function Or(t,e){const r=t.writeTree_.findRootMostValueAndPath(e);return r!=null?t.writeTree_.get(r.path).getChild(Gt(r.path,e)):null}function Fm(t){const e=[],r=t.writeTree_.value;return r!=null?r.isLeafNode()||r.forEachChild(_t,(s,o)=>{e.push(new Ce(s,o))}):t.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new Ce(s,o.value))}),e}function rr(t,e){if(be(e))return t;{const r=Or(t,e);return r!=null?new on(new Ve(r)):new on(t.writeTree_.subtree(e))}}function qu(t){return t.writeTree_.isEmpty()}function bi(t,e){return q0(je(),t.writeTree_,e)}function q0(t,e,r){if(e.value!=null)return r.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(te(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):r=q0(nt(t,o),l,r)}),!r.getChild(t).isEmpty()&&s!==null&&(r=r.updateChild(nt(t,".priority"),s)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e){return Z0(e,t)}function rT(t,e,r,s,o){te(s>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:r,writeId:s,visible:o}),o&&(t.visibleWrites=Ns(t.visibleWrites,e,r)),t.lastWriteId=s}function iT(t,e){for(let r=0;r<t.allWrites.length;r++){const s=t.allWrites[r];if(s.writeId===e)return s}return null}function sT(t,e){const r=t.allWrites.findIndex(p=>p.writeId===e);te(r>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[r];t.allWrites.splice(r,1);let o=s.visible,l=!1,u=t.allWrites.length-1;for(;o&&u>=0;){const p=t.allWrites[u];p.visible&&(u>=r&&oT(p,s.path)?o=!1:rn(s.path,p.path)&&(l=!0)),u--}if(o){if(l)return aT(t),!0;if(s.snap)t.visibleWrites=zm(t.visibleWrites,s.path);else{const p=s.children;Yt(p,f=>{t.visibleWrites=zm(t.visibleWrites,nt(s.path,f))})}return!0}else return!1}function oT(t,e){if(t.snap)return rn(t.path,e);for(const r in t.children)if(t.children.hasOwnProperty(r)&&rn(nt(t.path,r),e))return!0;return!1}function aT(t){t.visibleWrites=K0(t.allWrites,lT,je()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lT(t){return t.visible}function K0(t,e,r){let s=on.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const u=l.path;let p;if(l.snap)rn(r,u)?(p=Gt(r,u),s=Ns(s,p,l.snap)):rn(u,r)&&(p=Gt(u,r),s=Ns(s,je(),l.snap.getChild(p)));else if(l.children){if(rn(r,u))p=Gt(r,u),s=Lm(s,p,l.children);else if(rn(u,r))if(p=Gt(u,r),be(p))s=Lm(s,je(),l.children);else{const f=Si(l.children,Ee(p));if(f){const m=f.getChild(He(p));s=Ns(s,je(),m)}}}else throw ki("WriteRecord should have .snap or .children")}}return s}function Q0(t,e,r,s,o){if(!s&&!o){const l=Or(t.visibleWrites,e);if(l!=null)return l;{const u=rr(t.visibleWrites,e);if(qu(u))return r;if(r==null&&!Gu(u,je()))return null;{const p=r||Me.EMPTY_NODE;return bi(u,p)}}}else{const l=rr(t.visibleWrites,e);if(!o&&qu(l))return r;if(!o&&r==null&&!Gu(l,je()))return null;{const u=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(rn(m.path,e)||rn(e,m.path))},p=K0(t.allWrites,u,e),f=r||Me.EMPTY_NODE;return bi(p,f)}}}function cT(t,e,r){let s=Me.EMPTY_NODE;const o=Or(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(_t,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(r){const l=rr(t.visibleWrites,e);return r.forEachChild(_t,(u,p)=>{const f=bi(rr(l,new We(u)),p);s=s.updateImmediateChild(u,f)}),Fm(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=rr(t.visibleWrites,e);return Fm(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function uT(t,e,r,s,o){te(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=nt(e,r);if(Gu(t.visibleWrites,l))return null;{const u=rr(t.visibleWrites,l);return qu(u)?o.getChild(r):bi(u,o.getChild(r))}}function dT(t,e,r,s){const o=nt(e,r),l=Or(t.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(r)){const u=rr(t.visibleWrites,o);return bi(u,s.getNode().getImmediateChild(r))}else return null}function fT(t,e){return Or(t.visibleWrites,e)}function pT(t,e,r,s,o,l,u){let p;const f=rr(t.visibleWrites,e),m=Or(f,je());if(m!=null)p=m;else if(r!=null)p=bi(f,r);else return[];if(p=p.withIndex(u),!p.isEmpty()&&!p.isLeafNode()){const g=[],y=u.getCompare(),_=l?p.getReverseIteratorFrom(s,u):p.getIteratorFrom(s,u);let x=_.getNext();for(;x&&g.length<o;)y(x,s)!==0&&g.push(x),x=_.getNext();return g}else return[]}function hT(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function Yu(t,e,r,s){return Q0(t.writeTree,t.treePath,e,r,s)}function X0(t,e){return cT(t.writeTree,t.treePath,e)}function Bm(t,e,r,s){return uT(t.writeTree,t.treePath,e,r,s)}function Da(t,e){return fT(t.writeTree,nt(t.treePath,e))}function mT(t,e,r,s,o,l){return pT(t.writeTree,t.treePath,e,r,s,o,l)}function wd(t,e,r){return dT(t.writeTree,t.treePath,e,r)}function J0(t,e){return Z0(nt(t.treePath,e),t.writeTree)}function Z0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.changeMap=new Map}trackChildChange(e){const r=e.type,s=e.childName;te(r==="child_added"||r==="child_changed"||r==="child_removed","Only child changes supported for tracking"),te(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(r==="child_added"&&l==="child_removed")this.changeMap.set(s,Am(s,e.snapshotNode,o.snapshotNode));else if(r==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(r==="child_removed"&&l==="child_changed")this.changeMap.set(s,UC(s,o.oldSnap));else if(r==="child_changed"&&l==="child_added")this.changeMap.set(s,WC(s,e.snapshotNode));else if(r==="child_changed"&&l==="child_changed")this.changeMap.set(s,Am(s,e.snapshotNode,o.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{getCompleteChild(e){return null}getChildAfterChild(e,r,s){return null}}const ev=new vT;class _d{constructor(e,r,s=null){this.writes_=e,this.viewCache_=r,this.optCompleteServerCache_=s}getCompleteChild(e){const r=this.viewCache_.eventCache;if(r.isCompleteForChild(e))return r.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wd(this.writes_,e,s)}}getChildAfterChild(e,r,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),l=mT(this.writes_,o,r,1,s,e);return l.length===0?null:l[0]}}function yT(t,e){te(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wT(t,e,r,s,o){const l=new gT;let u,p;if(r.type===mn.OVERWRITE){const m=r;m.source.fromUser?u=Ku(t,e,m.path,m.snap,s,o,l):(te(m.source.fromServer,"Unknown source."),p=m.source.tagged||e.serverCache.isFiltered()&&!be(m.path),u=La(t,e,m.path,m.snap,s,o,p,l))}else if(r.type===mn.MERGE){const m=r;m.source.fromUser?u=xT(t,e,m.path,m.children,s,o,l):(te(m.source.fromServer,"Unknown source."),p=m.source.tagged||e.serverCache.isFiltered(),u=Qu(t,e,m.path,m.children,s,o,p,l))}else if(r.type===mn.ACK_USER_WRITE){const m=r;m.revert?u=bT(t,e,m.path,s,o,l):u=ST(t,e,m.path,m.affectedTree,s,o,l)}else if(r.type===mn.LISTEN_COMPLETE)u=ET(t,e,r.path,s,l);else throw ki("Unknown operation type: "+r.type);const f=l.getChanges();return _T(e,u,f),{viewCache:u,changes:f}}function _T(t,e,r){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Uu(t);(r.length>0||!t.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&r.push(HC(Uu(e)))}}function tv(t,e,r,s,o,l){const u=e.eventCache;if(Da(s,r)!=null)return e;{let p,f;if(be(r))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Nr(e),g=m instanceof Me?m:Me.EMPTY_NODE,y=X0(s,g);p=t.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const m=Yu(s,Nr(e));p=t.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=Ee(r);if(m===".priority"){te(ir(r)===1,"Can't have a priority with additional path components");const g=u.getNode();f=e.serverCache.getNode();const y=Bm(s,r,g,f);y!=null?p=t.filter.updatePriority(g,y):p=u.getNode()}else{const g=He(r);let y;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const _=Bm(s,r,u.getNode(),f);_!=null?y=u.getNode().getImmediateChild(m).updateChild(g,_):y=u.getNode().getImmediateChild(m)}else y=wd(s,m,e.serverCache);y!=null?p=t.filter.updateChild(u.getNode(),m,y,g,o,l):p=u.getNode()}}return Ps(e,p,u.isFullyInitialized()||be(r),t.filter.filtersNodes())}}function La(t,e,r,s,o,l,u,p){const f=e.serverCache;let m;const g=u?t.filter:t.filter.getIndexedFilter();if(be(r))m=g.updateFullNode(f.getNode(),s,null);else if(g.filtersNodes()&&!f.isFiltered()){const x=f.getNode().updateChild(r,s);m=g.updateFullNode(f.getNode(),x,null)}else{const x=Ee(r);if(!f.isCompleteForPath(r)&&ir(r)>1)return e;const b=He(r),L=f.getNode().getImmediateChild(x).updateChild(b,s);x===".priority"?m=g.updatePriority(f.getNode(),L):m=g.updateChild(f.getNode(),x,L,b,ev,null)}const y=G0(e,m,f.isFullyInitialized()||be(r),g.filtersNodes()),_=new _d(o,y,l);return tv(t,y,r,o,_,p)}function Ku(t,e,r,s,o,l,u){const p=e.eventCache;let f,m;const g=new _d(o,e,l);if(be(r))m=t.filter.updateFullNode(e.eventCache.getNode(),s,u),f=Ps(e,m,!0,t.filter.filtersNodes());else{const y=Ee(r);if(y===".priority")m=t.filter.updatePriority(e.eventCache.getNode(),s),f=Ps(e,m,p.isFullyInitialized(),p.isFiltered());else{const _=He(r),x=p.getNode().getImmediateChild(y);let b;if(be(_))b=s;else{const O=g.getCompleteChild(y);O!=null?M0(_)===".priority"&&O.getChild(A0(_)).isEmpty()?b=O:b=O.updateChild(_,s):b=Me.EMPTY_NODE}if(x.equals(b))f=e;else{const O=t.filter.updateChild(p.getNode(),y,b,_,g,u);f=Ps(e,O,p.isFullyInitialized(),t.filter.filtersNodes())}}}return f}function $m(t,e){return t.eventCache.isCompleteForChild(e)}function xT(t,e,r,s,o,l,u){let p=e;return s.foreach((f,m)=>{const g=nt(r,f);$m(e,Ee(g))&&(p=Ku(t,p,g,m,o,l,u))}),s.foreach((f,m)=>{const g=nt(r,f);$m(e,Ee(g))||(p=Ku(t,p,g,m,o,l,u))}),p}function Vm(t,e,r){return r.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Qu(t,e,r,s,o,l,u,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;be(r)?m=s:m=new Ve(null).setTree(r,s);const g=e.serverCache.getNode();return m.children.inorderTraversal((y,_)=>{if(g.hasChild(y)){const x=e.serverCache.getNode().getImmediateChild(y),b=Vm(t,x,_);f=La(t,f,new We(y),b,o,l,u,p)}}),m.children.inorderTraversal((y,_)=>{const x=!e.serverCache.isCompleteForChild(y)&&_.value===null;if(!g.hasChild(y)&&!x){const b=e.serverCache.getNode().getImmediateChild(y),O=Vm(t,b,_);f=La(t,f,new We(y),O,o,l,u,p)}}),f}function ST(t,e,r,s,o,l,u){if(Da(o,r)!=null)return e;const p=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(be(r)&&f.isFullyInitialized()||f.isCompleteForPath(r))return La(t,e,r,f.getNode().getChild(r),o,l,p,u);if(be(r)){let m=new Ve(null);return f.getNode().forEachChild(gi,(g,y)=>{m=m.set(new We(g),y)}),Qu(t,e,r,m,o,l,p,u)}else return e}else{let m=new Ve(null);return s.foreach((g,y)=>{const _=nt(r,g);f.isCompleteForPath(_)&&(m=m.set(g,f.getNode().getChild(_)))}),Qu(t,e,r,m,o,l,p,u)}}function ET(t,e,r,s,o){const l=e.serverCache,u=G0(e,l.getNode(),l.isFullyInitialized()||be(r),l.isFiltered());return tv(t,u,r,s,ev,o)}function bT(t,e,r,s,o,l){let u;if(Da(s,r)!=null)return e;{const p=new _d(s,e,o),f=e.eventCache.getNode();let m;if(be(r)||Ee(r)===".priority"){let g;if(e.serverCache.isFullyInitialized())g=Yu(s,Nr(e));else{const y=e.serverCache.getNode();te(y instanceof Me,"serverChildren would be complete if leaf node"),g=X0(s,y)}g=g,m=t.filter.updateFullNode(f,g,l)}else{const g=Ee(r);let y=wd(s,g,e.serverCache);y==null&&e.serverCache.isCompleteForChild(g)&&(y=f.getImmediateChild(g)),y!=null?m=t.filter.updateChild(f,g,y,He(r),p,l):e.eventCache.getNode().hasChild(g)?m=t.filter.updateChild(f,g,Me.EMPTY_NODE,He(r),p,l):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Yu(s,Nr(e)),u.isLeafNode()&&(m=t.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||Da(s,je())!=null,Ps(e,m,u,t.filter.filtersNodes())}}function CT(t,e){const r=Nr(t.viewCache_);return r&&(t.query._queryParams.loadsAllData()||!be(e)&&!r.getImmediateChild(Ee(e)).isEmpty())?r.getChild(e):null}function Hm(t,e,r,s){e.type===mn.MERGE&&e.source.queryId!==null&&(te(Nr(t.viewCache_),"We should always have a full cache before handling merges"),te(Uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=wT(t.processor_,o,e,r,s);return yT(t.processor_,l.viewCache),te(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,TT(t,l.changes,l.viewCache.eventCache.getNode())}function TT(t,e,r,s){const o=t.eventRegistrations_;return ZC(t.eventGenerator_,e,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm;function kT(t){te(!Wm,"__referenceConstructor has already been defined"),Wm=t}function xd(t,e,r,s){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return te(l!=null,"SyncTree gave us an op for an invalid query."),Hm(l,e,r,s)}else{let l=[];for(const u of t.views.values())l=l.concat(Hm(u,e,r,s));return l}}function Sd(t,e){let r=null;for(const s of t.views.values())r=r||CT(s,e);return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Um;function IT(t){te(!Um,"__referenceConstructor has already been defined"),Um=t}class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=hT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nv(t,e,r,s,o){return rT(t.pendingWriteTree_,e,r,s,o),o?Qa(t,new Pr(V0(),e,r)):[]}function Sr(t,e,r=!1){const s=iT(t.pendingWriteTree_,e);if(sT(t.pendingWriteTree_,e)){let l=new Ve(null);return s.snap!=null?l=l.set(je(),!0):Yt(s.children,u=>{l=l.set(new We(u),!0)}),Qa(t,new ja(s.path,l,r))}else return[]}function Ka(t,e,r){return Qa(t,new Pr(H0(),e,r))}function PT(t,e,r){const s=Ve.fromObject(r);return Qa(t,new Ls(H0(),e,s))}function NT(t,e,r,s){const o=sv(t,s);if(o!=null){const l=ov(o),u=l.path,p=l.queryId,f=Gt(u,e),m=new Pr(W0(p),f,r);return av(t,u,m)}else return[]}function MT(t,e,r,s){const o=sv(t,s);if(o){const l=ov(o),u=l.path,p=l.queryId,f=Gt(u,e),m=Ve.fromObject(r),g=new Ls(W0(p),f,m);return av(t,u,g)}else return[]}function Ed(t,e,r){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(u,p)=>{const f=Gt(u,e),m=Sd(p,f);if(m)return m});return Q0(o,e,l,r,!0)}function Qa(t,e){return rv(e,t.syncPointTree_,null,Y0(t.pendingWriteTree_,je()))}function rv(t,e,r,s){if(be(t.path))return iv(t,e,r,s);{const o=e.get(je());r==null&&o!=null&&(r=Sd(o,je()));let l=[];const u=Ee(t.path),p=t.operationForChild(u),f=e.children.get(u);if(f&&p){const m=r?r.getImmediateChild(u):null,g=J0(s,u);l=l.concat(rv(p,f,m,g))}return o&&(l=l.concat(xd(o,t,s,r))),l}}function iv(t,e,r,s){const o=e.get(je());r==null&&o!=null&&(r=Sd(o,je()));let l=[];return e.children.inorderTraversal((u,p)=>{const f=r?r.getImmediateChild(u):null,m=J0(s,u),g=t.operationForChild(u);g&&(l=l.concat(iv(g,p,f,m)))}),o&&(l=l.concat(xd(o,t,s,r))),l}function sv(t,e){return t.tagToQueryMap.get(e)}function ov(t){const e=t.indexOf("$");return te(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function av(t,e,r){const s=t.syncPointTree_.get(e);te(s,"Missing sync point for query tag that we're tracking");const o=Y0(t.pendingWriteTree_,e);return xd(s,r,o,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.node_=e}getImmediateChild(e){const r=this.node_.getImmediateChild(e);return new bd(r)}node(){return this.node_}}class Cd{constructor(e,r){this.syncTree_=e,this.path_=r}getImmediateChild(e){const r=nt(this.path_,e);return new Cd(this.syncTree_,r)}node(){return Ed(this.syncTree_,this.path_)}}const OT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qm=function(t,e,r){if(!t||typeof t!="object")return t;if(te(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AT(t[".sv"],e,r);if(typeof t[".sv"]=="object")return RT(t[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AT=function(t,e,r){switch(t){case"timestamp":return r.timestamp;default:te(!1,"Unexpected server value: "+t)}},RT=function(t,e,r){t.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&te(!1,"Unexpected increment value: "+s);const o=e.node();if(te(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const u=o.getValue();return typeof u!="number"?s:u+s},jT=function(t,e,r,s){return Td(e,new Cd(r,t),s)},lv=function(t,e,r){return Td(t,new bd(e),r)};function Td(t,e,r){const s=t.getPriority().val(),o=qm(s,e.getImmediateChild(".priority"),r);let l;if(t.isLeafNode()){const u=t,p=qm(u.getValue(),e,r);return p!==u.getValue()||o!==u.getPriority().val()?new at(p,pt(o)):t}else{const u=t;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new at(o))),u.forEachChild(_t,(p,f)=>{const m=Td(f,e.getImmediateChild(p),r);m!==f&&(l=l.updateImmediateChild(p,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e="",r=null,s={children:{},childCount:0}){this.name=e,this.parent=r,this.node=s}}function Id(t,e){let r=e instanceof We?e:new We(e),s=t,o=Ee(r);for(;o!==null;){const l=Si(s.node.children,o)||{children:{},childCount:0};s=new kd(o,s,l),r=He(r),o=Ee(r)}return s}function Mi(t){return t.node.value}function cv(t,e){t.node.value=e,Xu(t)}function uv(t){return t.node.childCount>0}function DT(t){return Mi(t)===void 0&&!uv(t)}function Xa(t,e){Yt(t.node.children,(r,s)=>{e(new kd(r,t,s))})}function dv(t,e,r,s){r&&!s&&e(t),Xa(t,o=>{dv(o,e,!0,s)})}function LT(t,e,r){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(t){return new We(t.parent===null?t.name:Us(t.parent)+"/"+t.name)}function Xu(t){t.parent!==null&&zT(t.parent,t.name,t)}function zT(t,e,r){const s=DT(r),o=An(t.node.children,e);s&&o?(delete t.node.children[e],t.node.childCount--,Xu(t)):!s&&!o&&(t.node.children[e]=r.node,t.node.childCount++,Xu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/[\[\].#$\/\u0000-\u001F\u007F]/,BT=/[\[\].#$\u0000-\u001F\u007F]/,wu=10*1024*1024,fv=function(t){return typeof t=="string"&&t.length!==0&&!FT.test(t)},pv=function(t){return typeof t=="string"&&t.length!==0&&!BT.test(t)},$T=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pv(t)},hv=function(t,e,r,s){s&&e===void 0||Pd(cd(t,"value"),e,r)},Pd=function(t,e,r){const s=r instanceof We?new EC(r,t):r;if(e===void 0)throw new Error(t+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(t+"contains a function "+wr(s)+" with contents = "+e.toString());if(u0(e))throw new Error(t+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>wu/3&&qa(e)>wu)throw new Error(t+"contains a string greater than "+wu+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(Yt(e,(u,p)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!fv(u)))throw new Error(t+" contains an invalid key ("+u+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bC(s,u),Pd(t,p,s),CC(s)}),o&&l)throw new Error(t+' contains ".value" child '+wr(s)+" in addition to actual children.")}},mv=function(t,e,r,s){if(!pv(r))throw new Error(cd(t,e)+'was an invalid path = "'+r+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},VT=function(t,e,r,s){r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),mv(t,e,r)},gv=function(t,e){if(Ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},HT=function(t,e){const r=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||r.length!==0&&!$T(r))throw new Error(cd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vv(t,e){let r=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();r!==null&&!R0(l,r.path)&&(t.eventLists_.push(r),r=null),r===null&&(r={events:[],path:l}),r.events.push(o)}r&&t.eventLists_.push(r)}function On(t,e,r){vv(t,r),UT(t,s=>rn(s,e)||rn(e,s))}function UT(t,e){t.recursionDepth_++;let r=!0;for(let s=0;s<t.eventLists_.length;s++){const o=t.eventLists_[s];if(o){const l=o.path;e(l)?(GT(t.eventLists_[s]),t.eventLists_[s]=null):r=!1}}r&&(t.eventLists_=[]),t.recursionDepth_--}function GT(t){for(let e=0;e<t.events.length;e++){const r=t.events[e];if(r!==null){t.events[e]=null;const s=r.getEventRunner();ks&&wt("event: "+r.toString()),Ni(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="repo_interrupt",YT=25;class KT{constructor(e,r,s,o){this.repoInfo_=e,this.forceRestClient_=r,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ra(),this.transactionQueueTree_=new kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QT(t,e,r){if(t.stats_=pd(t.repoInfo_),t.forceRestClient_||Yb())t.server_=new Aa(t.repoInfo_,(s,o,l,u)=>{Ym(t,s,o,l,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Km(t,!0),0);else{if(typeof r<"u"&&r!==null){if(typeof r!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(r)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(s,o,l,u)=>{Ym(t,s,o,l,u)},s=>{Km(t,s)},s=>{XT(t,s)},t.authTokenProvider_,t.appCheckProvider_,r),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Zb(t.repoInfo_,()=>new JC(t.stats_,t.server_)),t.infoData_=new qC,t.infoSyncTree_=new Gm({startListening:(s,o,l,u)=>{let p=[];const f=t.infoData_.getNode(s._path);return f.isEmpty()||(p=Ka(t.infoSyncTree_,s._path,f),setTimeout(()=>{u("ok")},0)),p},stopListening:()=>{}}),Md(t,"connected",!1),t.serverSyncTree_=new Gm({startListening:(s,o,l,u)=>(t.server_.listen(s,l,o,(p,f)=>{const m=u(p,f);On(t.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{t.server_.unlisten(s,o)}})}function yv(t){const r=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+r}function Nd(t){return OT({timestamp:yv(t)})}function Ym(t,e,r,s,o){t.dataUpdateCount++;const l=new We(e);r=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,r):r;let u=[];if(o)if(s){const f=ka(r,m=>pt(m));u=MT(t.serverSyncTree_,l,f,o)}else{const f=pt(r);u=NT(t.serverSyncTree_,l,f,o)}else if(s){const f=ka(r,m=>pt(m));u=PT(t.serverSyncTree_,l,f)}else{const f=pt(r);u=Ka(t.serverSyncTree_,l,f)}let p=l;u.length>0&&(p=Ja(t,l)),On(t.eventQueue_,p,u)}function Km(t,e){Md(t,"connected",e),e===!1&&ZT(t)}function XT(t,e){Yt(e,(r,s)=>{Md(t,r,s)})}function Md(t,e,r){const s=new We("/.info/"+e),o=pt(r);t.infoData_.updateSnapshot(s,o);const l=Ka(t.infoSyncTree_,s,o);On(t.eventQueue_,s,l)}function wv(t){return t.nextWriteId_++}function JT(t,e,r,s,o){Od(t,"set",{path:e.toString(),value:r,priority:s});const l=Nd(t),u=pt(r,s),p=Ed(t.serverSyncTree_,e),f=lv(u,p,l),m=wv(t),g=nv(t.serverSyncTree_,e,f,m,!0);vv(t.eventQueue_,g),t.server_.put(e.toString(),u.val(!0),(_,x)=>{const b=_==="ok";b||Mt("set at "+e+" failed: "+_);const O=Sr(t.serverSyncTree_,m,!b);On(t.eventQueue_,e,O),tk(t,o,_,x)});const y=bv(t,e);Ja(t,y),On(t.eventQueue_,y,[])}function ZT(t){Od(t,"onDisconnectEvents");const e=Nd(t),r=Ra();Wu(t.onDisconnect_,je(),(o,l)=>{const u=jT(o,l,t.serverSyncTree_,e);$0(r,o,u)});let s=[];Wu(r,je(),(o,l)=>{s=s.concat(Ka(t.serverSyncTree_,o,l));const u=bv(t,o);Ja(t,u)}),t.onDisconnect_=Ra(),On(t.eventQueue_,je(),s)}function ek(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qT)}function Od(t,...e){let r="";t.persistentConnection_&&(r=t.persistentConnection_.id+":"),wt(r,...e)}function tk(t,e,r,s){e&&Ni(()=>{if(r==="ok")e(null);else{const o=(r||"error").toUpperCase();let l=o;s&&(l+=": "+s);const u=new Error(l);u.code=o,e(u)}})}function _v(t,e,r){return Ed(t.serverSyncTree_,e,r)||Me.EMPTY_NODE}function Ad(t,e=t.transactionQueueTree_){if(e||Za(t,e),Mi(e)){const r=Sv(t,e);te(r.length>0,"Sending zero length transaction queue"),r.every(o=>o.status===0)&&nk(t,Us(e),r)}else uv(e)&&Xa(e,r=>{Ad(t,r)})}function nk(t,e,r){const s=r.map(m=>m.currentWriteId),o=_v(t,e,s);let l=o;const u=o.hash();for(let m=0;m<r.length;m++){const g=r[m];te(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=Gt(e,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const p=l.val(!0),f=e;t.server_.put(f.toString(),p,m=>{Od(t,"transaction put response",{path:f.toString(),status:m});let g=[];if(m==="ok"){const y=[];for(let _=0;_<r.length;_++)r[_].status=2,g=g.concat(Sr(t.serverSyncTree_,r[_].currentWriteId)),r[_].onComplete&&y.push(()=>r[_].onComplete(null,!0,r[_].currentOutputSnapshotResolved)),r[_].unwatcher();Za(t,Id(t.transactionQueueTree_,e)),Ad(t,t.transactionQueueTree_),On(t.eventQueue_,e,g);for(let _=0;_<y.length;_++)Ni(y[_])}else{if(m==="datastale")for(let y=0;y<r.length;y++)r[y].status===3?r[y].status=4:r[y].status=0;else{Mt("transaction at "+f.toString()+" failed: "+m);for(let y=0;y<r.length;y++)r[y].status=4,r[y].abortReason=m}Ja(t,e)}},u)}function Ja(t,e){const r=xv(t,e),s=Us(r),o=Sv(t,r);return rk(t,o,s),s}function rk(t,e,r){if(e.length===0)return;const s=[];let o=[];const u=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const f=e[p],m=Gt(r,f.path);let g=!1,y;if(te(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)g=!0,y=f.abortReason,o=o.concat(Sr(t.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=YT)g=!0,y="maxretry",o=o.concat(Sr(t.serverSyncTree_,f.currentWriteId,!0));else{const _=_v(t,f.path,u);f.currentInputSnapshot=_;const x=e[p].update(_.val());if(x!==void 0){Pd("transaction failed: Data returned ",x,f.path);let b=pt(x);typeof x=="object"&&x!=null&&An(x,".priority")||(b=b.updatePriority(_.getPriority()));const L=f.currentWriteId,P=Nd(t),T=lv(b,_,P);f.currentOutputSnapshotRaw=b,f.currentOutputSnapshotResolved=T,f.currentWriteId=wv(t),u.splice(u.indexOf(L),1),o=o.concat(nv(t.serverSyncTree_,f.path,T,f.currentWriteId,f.applyLocally)),o=o.concat(Sr(t.serverSyncTree_,L,!0))}else g=!0,y="nodata",o=o.concat(Sr(t.serverSyncTree_,f.currentWriteId,!0))}On(t.eventQueue_,r,o),o=[],g&&(e[p].status=2,function(_){setTimeout(_,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(y==="nodata"?s.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):s.push(()=>e[p].onComplete(new Error(y),!1,null))))}Za(t,t.transactionQueueTree_);for(let p=0;p<s.length;p++)Ni(s[p]);Ad(t,t.transactionQueueTree_)}function xv(t,e){let r,s=t.transactionQueueTree_;for(r=Ee(e);r!==null&&Mi(s)===void 0;)s=Id(s,r),e=He(e),r=Ee(e);return s}function Sv(t,e){const r=[];return Ev(t,e,r),r.sort((s,o)=>s.order-o.order),r}function Ev(t,e,r){const s=Mi(e);if(s)for(let o=0;o<s.length;o++)r.push(s[o]);Xa(e,o=>{Ev(t,o,r)})}function Za(t,e){const r=Mi(e);if(r){let s=0;for(let o=0;o<r.length;o++)r[o].status!==2&&(r[s]=r[o],s++);r.length=s,cv(e,r.length>0?r:void 0)}Xa(e,s=>{Za(t,s)})}function bv(t,e){const r=Us(xv(t,e)),s=Id(t.transactionQueueTree_,e);return LT(s,o=>{_u(t,o)}),_u(t,s),dv(s,o=>{_u(t,o)}),r}function _u(t,e){const r=Mi(e);if(r){const s=[];let o=[],l=-1;for(let u=0;u<r.length;u++)r[u].status===3||(r[u].status===1?(te(l===u-1,"All SENT items should be at beginning of queue."),l=u,r[u].status=3,r[u].abortReason="set"):(te(r[u].status===0,"Unexpected transaction status in abort"),r[u].unwatcher(),o=o.concat(Sr(t.serverSyncTree_,r[u].currentWriteId,!0)),r[u].onComplete&&s.push(r[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?cv(e,void 0):r.length=l+1,On(t.eventQueue_,Us(e),o);for(let u=0;u<s.length;u++)Ni(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){let e="";const r=t.split("/");for(let s=0;s<r.length;s++)if(r[s].length>0){let o=r[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function sk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const r of t.split("&")){if(r.length===0)continue;const s=r.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Mt(`Invalid query segment '${r}' in query '${t}'`)}return e}const Qm=function(t,e){const r=ok(t),s=r.namespace;r.domain==="firebase.com"&&Mn(r.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&r.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),r.secure||Bb();const o=r.scheme==="ws"||r.scheme==="wss";return{repoInfo:new S0(r.host,r.secure,s,o,e,"",s!==r.subdomain),path:new We(r.pathString)}},ok=function(t){let e="",r="",s="",o="",l="",u=!0,p="https",f=443;if(typeof t=="string"){let m=t.indexOf("//");m>=0&&(p=t.substring(0,m-1),t=t.substring(m+2));let g=t.indexOf("/");g===-1&&(g=t.length);let y=t.indexOf("?");y===-1&&(y=t.length),e=t.substring(0,Math.min(g,y)),g<y&&(o=ik(t.substring(g,y)));const _=sk(t.substring(Math.min(t.length,y)));m=e.indexOf(":"),m>=0?(u=p==="https"||p==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const x=e.slice(0,m);if(x.toLowerCase()==="localhost")r="localhost";else if(x.split(".").length<=2)r=x;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),r=e.substring(b+1),l=s}"ns"in _&&(l=_.ns)}return{host:e,port:f,domain:r,subdomain:s,secure:u,scheme:p,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ak=function(){let t=0;const e=[];return function(r){const s=r===t;t=r;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=Xm.charAt(r%64),r=Math.floor(r/64);te(r===0,"Cannot push at time == 0");let u=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=Xm.charAt(e[o]);return te(u.length===20,"nextPushId: Length should be 20."),u}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,r,s,o){this._repo=e,this._path=r,this._queryParams=s,this._orderByCalled=o}get key(){return be(this._path)?null:M0(this._path)}get ref(){return new Ar(this._repo,this._path)}get _queryIdentifier(){const e=jm(this._queryParams),r=dd(e);return r==="{}"?"default":r}get _queryObject(){return jm(this._queryParams)}isEqual(e){if(e=Ii(e),!(e instanceof Rd))return!1;const r=this._repo===e._repo,s=R0(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return r&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+SC(this._path)}}class Ar extends Rd{constructor(e,r){super(e,r,new vd,!1)}get parent(){const e=A0(this._path);return e===null?null:new Ar(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Cv(t,e){return t=Ii(t),t._checkNotDeleted("ref"),e!==void 0?Ju(t._root,e):t._root}function Ju(t,e){return t=Ii(t),Ee(t._path)===null?VT("child","path",e):mv("child","path",e),new Ar(t._repo,nt(t._path,e))}function Tv(t,e){t=Ii(t),gv("push",t._path),hv("push",e,t._path,!0);const r=yv(t._repo),s=ak(r),o=Ju(t,s),l=Ju(t,s);let u;return e!=null?u=lk(l,e).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function lk(t,e){t=Ii(t),gv("set",t._path),hv("set",e,t._path,!1);const r=new Ga;return JT(t._repo,t._path,e,null,r.wrapCallback(()=>{})),r.promise}kT(Ar);IT(Ar);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let uk=!1;function dk(t,e,r,s){t.repoInfo_=new S0(`${e}:${r}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function fk(t,e,r,s,o){let l=s||t.options.databaseURL;l===void 0&&(t.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=Qm(l,o),p=u.repoInfo,f;typeof process<"u"&&gm&&(f=gm[ck]),f?(l=`http://${f}?ns=${p.namespace}`,u=Qm(l,o),p=u.repoInfo):u.repoInfo.secure;const m=new Qb(t.name,t.options,e);HT("Invalid Firebase Database URL",u),be(u.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const g=hk(p,t,m,new Kb(t.name,r));return new mk(g,t)}function pk(t,e){const r=Zu[e];(!r||r[t.key]!==t)&&Mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ek(t),delete r[t.key]}function hk(t,e,r,s){let o=Zu[e.name];o||(o={},Zu[e.name]=o);let l=o[t.toURLString()];return l&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new KT(t,uk,r,s),o[t.toURLString()]=l,l}class mk{constructor(e,r){this._repoInternal=e,this.app=r,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ar(this._repo,je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mn("Cannot call "+e+" on a deleted database.")}}function gk(t=Sb(),e){const r=yb(t,"database").getImmediate({identifier:e});if(!r._instanceStarted){const s=lE("database");s&&vk(r,...s)}return r}function vk(t,e,r,s={}){t=Ii(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mn("Cannot call useEmulator() after instance has already been initialized.");const o=t._repoInternal;let l;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new ga(ga.OWNER);else if(s.mockUserToken){const u=typeof s.mockUserToken=="string"?s.mockUserToken:cE(s.mockUserToken,t.app.options.projectId);l=new ga(u)}dk(o,e,r,l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){Rb(xb),Pa(new Rs("database",(e,{instanceIdentifier:r})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return fk(s,o,l,r)},"PUBLIC").setMultipleInstances(!0)),hi(vm,ym,t),hi(vm,ym,"esm2017")}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yk();const wk={apiKey:"AIzaSyD6jXiGTUF5AtyOZHqQl3zPIE2XIy4rXtY",authDomain:"lp-form-13862.firebaseapp.com",databaseURL:"https://lp-form-13862-default-rtdb.firebaseio.com",projectId:"lp-form-13862",storageBucket:"lp-form-13862.firebasestorage.app",messagingSenderId:"498308374335",appId:"1:498308374335:web:0bc3433ef93697a4bd7d8a",measurementId:"G-F83SWTVEJX"},_k=i0(wk),kv=gk(_k),xk=Wa`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Sk=ee.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,Ek=ee.button`
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
`,bk=ee.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #ffffff10;
  backdrop-filter: blur(2px);
  border-radius: 15px 15px 0 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${xk} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--poppins);
`,Ck=ee.button`
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
`,Tk=ee.div`
  background-color: #fbfbfb;
  border-radius: 10px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--poppins)!important;
`,Jm=ee.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${t=>t.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--poppins)!important;
`,kk=ee.img`
  width: 20px;
  height: 20px;
  border-radius: 50px 50px 0px 50px ;
  margin-right: ${t=>t.sent?"0":"8px"};
  margin-left: ${t=>t.sent?"8px":"0"};
  background-color: var(--color--white);
  padding: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`,Ik=ee.div`
  display: flex;
  flex-direction: column;
  background-color: ${t=>t.sent?"#dcf8c6":"#ffffff"};
  border-radius: 10px ;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--poppins)!important;
  font-size: 12px;
`,Pk=ee.div`
  font-size: 10px;
  background: linear-gradient(90deg, var(--color--purple), #dbdbdb, var(--color--blue));
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: var(--font--poppins)!important;
`,Nk=ee.div`
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
`,Mk=ee.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--poppins)!important;
  width: 100%;
`,Ok=ee.input`
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
`,Ak=ee.button`
  padding: 8px 20px;
  background: linear-gradient(90deg, var(--color--purple), var(--color--blue));
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: var(--font--poppins)!important;
  font-weight: 400;
  width: 30%;
`,Rk=({footerRendered:t})=>{const[e,r]=pe.useState(!1),[s,o]=pe.useState(""),[l,u]=pe.useState([]),[p,f]=pe.useState(!1),[m,g]=pe.useState("Número inválido"),[y,_]=pe.useState(!1),[x,b]=pe.useState(!1),O="https://w.app/5AaZMJ",L="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png",P=async()=>{if(s.trim()==="")return;const N={id:Date.now(),text:s,sent:!0};u(D=>[...D,N]);const j=s.trim();if(o(""),f(!0),!y&&m==="Número inválido"){setTimeout(()=>{f(!1),u(D=>[...D,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂`,sent:!1}]),_(!0)},1500);return}if(y&&m==="Número inválido"){const D=/^\d+$/.test(j),Q=D?j:"Número inválido";if(g(Q),D)try{const W=new Date().toISOString().split("T")[0],H=Cv(kv,`data/${W}/whatsappNumbers`);await Tv(H,{phone:Q,timestamp:Date.now()}),console.log("Número salvo no Firebase:",Q)}catch(W){console.error("Erro ao salvar o número no Firebase:",W)}setTimeout(()=>{f(!1),u(W=>[...W,{id:Date.now(),text:D?"Muito obrigado! Entraremos em contato em breve. 📞":"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{b(!0)},500),_(!1)},1500);return}f(!1)},T=N=>{N.key==="Enter"&&P()},E=()=>{r(!1)};return pe.useEffect(()=>{const N=setTimeout(()=>{r(!0),u([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},45e3);return()=>clearTimeout(N)},[]),v.jsxs(Sk,{children:[v.jsx(Ek,{onClick:()=>window.open(O,"_blank"),id:"clickwpp","data-aos":"fade-up","data-aos-delay":"200",children:v.jsx(XS,{id:"clickwpp"})}),e&&v.jsxs(bk,{children:[v.jsx(Ck,{onClick:E,children:v.jsx(JS,{})}),v.jsxs(Tk,{children:[l.map(N=>v.jsxs(Jm,{sent:N.sent,children:[!N.sent&&v.jsx(kk,{src:L,alt:"Bot"}),v.jsxs(Ik,{sent:N.sent,children:[!N.sent&&v.jsx(Pk,{children:"aleph"}),v.jsx("div",{children:N.text})]})]},N.id)),p&&v.jsx(Jm,{children:v.jsx(Nk,{})})]}),!x&&v.jsxs(Mk,{children:[v.jsx(Ok,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:s,onChange:N=>o(N.target.value),onKeyDown:T}),v.jsx(Ak,{onClick:P,children:"Enviar"})]})]})]})},jk=ee.footer`
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
`,Dk=()=>v.jsx(v.Fragment,{children:v.jsxs(jk,{children:[v.jsx("p",{"data-aos":"fade-left","data-aos-delay":"200",children:"Todos os direitos reservados | desde 2024"}),v.jsx("img",{"data-aos":"fade-up","data-aos-delay":"300",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248623/iconColorido_bdgxgi.png"}),v.jsxs("p",{"data-aos":"fade-right","data-aos-delay":"400",children:["Desenvolvido por ",v.jsx("a",{href:"#",children:" Aleph "})]})]})}),Lk=()=>{const[t,e]=pe.useState({});return pe.useEffect(()=>{const r=new URLSearchParams(window.location.search);e({utm_source:r.get("utm_source")||"Orgânico",utm_medium:r.get("utm_medium")||"Indisponivel",utm_campaign:r.get("utm_campaign")||"Indisponivel",utm_term:r.get("utm_term")||"Indisponivel",utm_content:r.get("utm_content")||"Indisponivel"})},[]),t},zk=ee.div`
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
`,Fk=ee.section`
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
`,Bk=ee.section`
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
`,$k=ee.div`
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
`,Vk=ee.div`
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
`,Hk=()=>{const t=Lk(),e=async r=>{r.preventDefault();const s={name:document.getElementById("name").value,email:document.getElementById("email").value,tel:document.getElementById("tel").value,...t};try{const o=new Date().toISOString().split("T")[0],l=Cv(kv,`data/${o}/formSubmissions`);await Tv(l,s),alert("Dados do formulário enviados com sucesso!")}catch(o){console.error("Erro ao salvar os dados do formulário:",o),alert("Erro ao enviar os dados.")}};return v.jsx(v.Fragment,{children:v.jsxs(Fk,{children:[v.jsx(zk,{}),v.jsxs(Bk,{children:[v.jsxs($k,{children:[v.jsx("img",{"data-aos":"fade-up","data-aos-delay":"100",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735248380/white_mkxq1r.png"}),v.jsxs("h1",{"data-aos":"fade-up-right","data-aos-delay":"200",children:["Entre em ",v.jsx("b",{children:"contato"})," conosco"]}),v.jsx("p",{"data-aos":"fade-up-right","data-aos-delay":"400",children:"Ao preencher o formulário, você está de acordo com os nossos termos de serviço, e politica de dados"}),v.jsxs("form",{id:"contactForm",onSubmit:e,children:[v.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"300",children:["Seu Nome",v.jsx("input",{type:"text",id:"name",placeholder:"Aleph Silva Ramos",required:!0})]}),v.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"200",children:["Seu e-mail",v.jsx("input",{type:"email",id:"email",placeholder:"aleph@gmail.com",required:!0})]}),v.jsxs("label",{"data-aos":"fade-up","data-aos-delay":"100",children:["WhatsApp",v.jsx("input",{type:"tel",id:"tel",placeholder:"24981411940",required:!0})]}),v.jsx("button",{type:"submit","data-aos":"fade-in","data-aos-delay":"500",children:"Enviar e entrar em contato"}),v.jsx("span",{"data-aos":"fade-up","data-aos-delay":"500",children:"*Usaremos essas informações apenas para fins de contato"})]})]}),v.jsx(Vk,{children:v.jsx("img",{"data-aos":"fade-up-right","data-aos-delay":"400",src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1735223665/mockupWpp_1_nlq60u.png"})}),v.jsx(Dk,{})]})]})})},Wk=()=>v.jsxs(v.Fragment,{children:[v.jsx(Dw,{}),v.jsx(Uw,{}),v.jsx(Gx,{}),v.jsx(lu,{}),v.jsx(eS,{}),v.jsx(lS,{}),v.jsx(lu,{}),v.jsx(yS,{}),v.jsx(kS,{}),v.jsx(PS,{}),v.jsx(FS,{}),v.jsx(WS,{}),v.jsx(lu,{}),v.jsx(QS,{}),v.jsx(Hk,{}),v.jsx(Rk,{})]});function Uk(){return pe.useEffect(()=>{const t=()=>{const e=window.innerWidth>1e3?1500:1e3;Tr.init({duration:e,offset:20,easing:"ease-in-out",once:!0}),Tr.refresh()};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),v.jsx(v.Fragment,{children:v.jsx(Wk,{})})}M1.createRoot(document.getElementById("root")).render(v.jsx(pe.StrictMode,{children:v.jsx(Uk,{})}));
