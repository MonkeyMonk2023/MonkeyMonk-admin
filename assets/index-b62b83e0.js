function nw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qm={exports:{}},Ha={},Qm={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),rw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),ow=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),lw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),cw=Symbol.for("react.suspense"),fw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),sh=Symbol.iterator;function hw(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var Jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,eg={};function ni(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Jm}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tg(){}tg.prototype=ni.prototype;function of(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Jm}var sf=of.prototype=new tg;sf.constructor=of;Zm(sf,ni.prototype);sf.isPureReactComponent=!0;var ah=Array.isArray,ng=Object.prototype.hasOwnProperty,af={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function ig(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ng.call(t,r)&&!rg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:e,key:o,ref:s,props:i,_owner:af.current}}function pw(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function mw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lh=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mw(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xo:case rw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fl(s,0):r,ah(i)?(n="",e!=null&&(n=e.replace(lh,"$&/")+"/"),Ns(i,t,n,"",function(u){return u})):i!=null&&(lf(i)&&(i=pw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ah(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Fl(o,a);s+=Ns(o,t,n,l,i)}else if(l=hw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Fl(o,a++),s+=Ns(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function es(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},bs={transition:null},vw={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:bs,ReactCurrentOwner:af};function og(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:es,forEach:function(e,t,n){es(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return es(e,function(){t++}),t},toArray:function(e){return es(e,function(t){return t})||[]},only:function(e){if(!lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=ni;$.Fragment=iw;$.Profiler=sw;$.PureComponent=of;$.StrictMode=ow;$.Suspense=cw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vw;$.act=og;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ng.call(t,l)&&!rg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:lw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:aw,_context:e},e.Consumer=e};$.createElement=ig;$.createFactory=function(e){var t=ig.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:uw,render:e}};$.isValidElement=lf;$.lazy=function(e){return{$$typeof:dw,_payload:{_status:-1,_result:e},_init:gw}};$.memo=function(e,t){return{$$typeof:fw,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};$.unstable_act=og;$.useCallback=function(e,t){return De.current.useCallback(e,t)};$.useContext=function(e){return De.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return De.current.useDeferredValue(e)};$.useEffect=function(e,t){return De.current.useEffect(e,t)};$.useId=function(){return De.current.useId()};$.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return De.current.useMemo(e,t)};$.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};$.useRef=function(e){return De.current.useRef(e)};$.useState=function(e){return De.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return De.current.useTransition()};$.version="18.3.1";Qm.exports=$;var C=Qm.exports;const Wa=Xm(C),yw=nw({__proto__:null,default:Wa},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=C,_w=Symbol.for("react.element"),Ew=Symbol.for("react.fragment"),kw=Object.prototype.hasOwnProperty,Sw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iw={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kw.call(t,r)&&!Iw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_w,type:e,key:o,ref:s,props:i,_owner:Sw.current}}Ha.Fragment=Ew;Ha.jsx=sg;Ha.jsxs=sg;qm.exports=Ha;var B=qm.exports,Ou={},ag={exports:{}},Ge={},lg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var M=R.length;R.push(L);e:for(;0<M;){var ie=M-1>>>1,de=R[ie];if(0<i(de,L))R[ie]=L,R[M]=de,M=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],M=R.pop();if(M!==L){R[0]=M;e:for(var ie=0,de=R.length,Jo=de>>>1;ie<Jo;){var $n=2*(ie+1)-1,$l=R[$n],Fn=$n+1,Zo=R[Fn];if(0>i($l,M))Fn<de&&0>i(Zo,$l)?(R[ie]=Zo,R[Fn]=M,ie=Fn):(R[ie]=$l,R[$n]=M,ie=$n);else if(Fn<de&&0>i(Zo,M))R[ie]=Zo,R[Fn]=M,ie=Fn;else break e}}return L}function i(R,L){var M=R.sortIndex-L.sortIndex;return M!==0?M:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function y(R){if(w=!1,m(R),!v)if(n(l)!==null)v=!0,Ml(E);else{var L=n(u);L!==null&&Ul(y,L.startTime-R)}}function E(R,L){v=!1,w&&(w=!1,p(x),x=-1),g=!0;var M=h;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||R&&!it());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var de=ie(f.expirationTime<=L);L=e.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var Jo=!0;else{var $n=n(u);$n!==null&&Ul(y,$n.startTime-L),Jo=!1}return Jo}finally{f=null,h=M,g=!1}}var I=!1,T=null,x=-1,F=5,D=-1;function it(){return!(e.unstable_now()-D<F)}function di(){if(T!==null){var R=e.unstable_now();D=R;var L=!0;try{L=T(!0,R)}finally{L?hi():(I=!1,T=null)}}else I=!1}var hi;if(typeof d=="function")hi=function(){d(di)};else if(typeof MessageChannel<"u"){var oh=new MessageChannel,tw=oh.port2;oh.port1.onmessage=di,hi=function(){tw.postMessage(null)}}else hi=function(){_(di,0)};function Ml(R){T=R,I||(I=!0,hi())}function Ul(R,L){x=_(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Ml(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return R()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=h;h=R;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(R,L,M){var ie=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ie+M:ie):M=ie,R){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=M+de,R={id:c++,callback:L,priorityLevel:R,startTime:M,expirationTime:de,sortIndex:-1},M>ie?(R.sortIndex=M,t(u,R),n(l)===null&&R===n(u)&&(w?(p(x),x=-1):w=!0,Ul(y,M-ie))):(R.sortIndex=de,t(l,R),v||g||(v=!0,Ml(E))),R},e.unstable_shouldYield=it,e.unstable_wrapCallback=function(R){var L=h;return function(){var M=h;h=L;try{return R.apply(this,arguments)}finally{h=M}}}})(ug);lg.exports=ug;var Tw=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=C,Ke=Tw;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cg=new Set,Gi={};function cr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Gi[e]=t,e=0;e<t.length;e++)cg.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,Pw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},ch={};function Aw(e){return Nu.call(ch,e)?!0:Nu.call(uh,e)?!1:Pw.test(e)?ch[e]=!0:(uh[e]=!0,!1)}function Rw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xw(e,t,n,r){if(t===null||typeof t>"u"||Rw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uf,cf);Ee[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uf,cf);Ee[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uf,cf);Ee[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ff(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xw(t,n,i,r)&&(n=null),r||i===null?Aw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ts=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),fh=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,jl;function Ti(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var zl=!1;function Bl(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function Ow(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case bu:return"Profiler";case df:return"StrictMode";case Lu:return"Suspense";case Du:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dg:return(e.displayName||"Context")+".Consumer";case fg:return(e._context.displayName||"Context")+".Provider";case hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pf:return t=e.displayName||null,t!==null?t:Mu(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return Mu(e(t))}catch{}}return null}function Nw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(t);case 8:return t===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bw(e){var t=pg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){e._valueTracker||(e._valueTracker=bw(e))}function mg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uu(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gg(e,t){t=t.checked,t!=null&&ff(e,"checked",t,!1)}function $u(e,t){gg(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fu(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fu(e,t,n){(t!=="number"||Qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ju(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ph(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ci(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function vg(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rs,wg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lw=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){Lw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Li[t]=Li[e]})});function _g(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Li.hasOwnProperty(e)&&Li[e]?(""+t).trim():t+"px"}function Eg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_g(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(e,t){if(t){if(Dw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Vu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wu=null,Dr=null,Mr=null;function gh(e){if(e=bo(e)){if(typeof Wu!="function")throw Error(k(280));var t=e.stateNode;t&&(t=qa(t),Wu(e.stateNode,e.type,t))}}function kg(e){Dr?Mr?Mr.push(e):Mr=[e]:Dr=e}function Sg(){if(Dr){var e=Dr,t=Mr;if(Mr=Dr=null,gh(e),t)for(e=0;e<t.length;e++)gh(t[e])}}function Ig(e,t){return e(t)}function Tg(){}var Vl=!1;function Cg(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return Ig(e,t,n)}finally{Vl=!1,(Dr!==null||Mr!==null)&&(Tg(),Sg())}}function Xi(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ku=!1;if(Bt)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Ku=!1}function Mw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Di=!1,Js=null,Zs=!1,Gu=null,Uw={onError:function(e){Di=!0,Js=e}};function $w(e,t,n,r,i,o,s,a,l){Di=!1,Js=null,Mw.apply(Uw,arguments)}function Fw(e,t,n,r,i,o,s,a,l){if($w.apply(this,arguments),Di){if(Di){var u=Js;Di=!1,Js=null}else throw Error(k(198));Zs||(Zs=!0,Gu=u)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vh(e){if(fr(e)!==e)throw Error(k(188))}function jw(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vh(i),e;if(o===r)return vh(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ag(e){return e=jw(e),e!==null?Rg(e):null}function Rg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rg(e);if(t!==null)return t;e=e.sibling}return null}var xg=Ke.unstable_scheduleCallback,yh=Ke.unstable_cancelCallback,zw=Ke.unstable_shouldYield,Bw=Ke.unstable_requestPaint,oe=Ke.unstable_now,Vw=Ke.unstable_getCurrentPriorityLevel,gf=Ke.unstable_ImmediatePriority,Og=Ke.unstable_UserBlockingPriority,ea=Ke.unstable_NormalPriority,Hw=Ke.unstable_LowPriority,Ng=Ke.unstable_IdlePriority,Ka=null,kt=null;function Ww(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Yw,Kw=Math.log,Gw=Math.LN2;function Yw(e){return e>>>=0,e===0?32:31-(Kw(e)/Gw|0)|0}var is=64,os=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Pi(a):(o&=s,o!==0&&(r=Pi(o)))}else s=n&~i,s!==0?r=Pi(s):o!==0&&(r=Pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Xw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ft(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Xw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bg(){var e=is;return is<<=1,!(is&4194240)&&(is=64),e}function Hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Qw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Lg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dg,yf,Mg,Ug,$g,Xu=!1,ss=[],mn=null,gn=null,vn=null,qi=new Map,Qi=new Map,on=[],Jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function vi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=bo(t),t!==null&&yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zw(e,t,n,r,i){switch(t){case"focusin":return mn=vi(mn,e,t,n,r,i),!0;case"dragenter":return gn=vi(gn,e,t,n,r,i),!0;case"mouseover":return vn=vi(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qi.set(o,vi(qi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qi.set(o,vi(Qi.get(o)||null,e,t,n,r,i)),!0}return!1}function Fg(e){var t=Vn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Pg(n),t!==null){e.blockedOn=t,$g(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hu=r,n.target.dispatchEvent(r),Hu=null}else return t=bo(n),t!==null&&yf(t),e.blockedOn=n,!1;t.shift()}return!0}function _h(e,t,n){Ls(e)&&n.delete(t)}function e_(){Xu=!1,mn!==null&&Ls(mn)&&(mn=null),gn!==null&&Ls(gn)&&(gn=null),vn!==null&&Ls(vn)&&(vn=null),qi.forEach(_h),Qi.forEach(_h)}function yi(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,e_)))}function Ji(e){function t(i){return yi(i,e)}if(0<ss.length){yi(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&yi(mn,e),gn!==null&&yi(gn,e),vn!==null&&yi(vn,e),qi.forEach(t),Qi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Fg(n),n.blockedOn===null&&on.shift()}var Ur=Qt.ReactCurrentBatchConfig,na=!0;function t_(e,t,n,r){var i=H,o=Ur.transition;Ur.transition=null;try{H=1,wf(e,t,n,r)}finally{H=i,Ur.transition=o}}function n_(e,t,n,r){var i=H,o=Ur.transition;Ur.transition=null;try{H=4,wf(e,t,n,r)}finally{H=i,Ur.transition=o}}function wf(e,t,n,r){if(na){var i=qu(e,t,n,r);if(i===null)eu(e,t,r,ra,n),wh(e,r);else if(Zw(i,e,t,n,r))r.stopPropagation();else if(wh(e,r),t&4&&-1<Jw.indexOf(e)){for(;i!==null;){var o=bo(i);if(o!==null&&Dg(o),o=qu(e,t,n,r),o===null&&eu(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else eu(e,t,r,null,n)}}var ra=null;function qu(e,t,n,r){if(ra=null,e=mf(r),e=Vn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function jg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vw()){case gf:return 1;case Og:return 4;case ea:case Hw:return 16;case Ng:return 536870912;default:return 16}default:return 16}}var fn=null,_f=null,Ds=null;function zg(){if(Ds)return Ds;var e,t=_f,n=t.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function Eh(){return!1}function Ye(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?as:Eh,this.isPropagationStopped=Eh,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Ye(ri),No=te({},ri,{view:0,detail:0}),r_=Ye(No),Wl,Kl,wi,Ga=te({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Wl=e.screenX-wi.screenX,Kl=e.screenY-wi.screenY):Kl=Wl=0,wi=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),kh=Ye(Ga),i_=te({},Ga,{dataTransfer:0}),o_=Ye(i_),s_=te({},No,{relatedTarget:0}),Gl=Ye(s_),a_=te({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),l_=Ye(a_),u_=te({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c_=Ye(u_),f_=te({},ri,{data:0}),Sh=Ye(f_),d_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p_[e])?!!t[e]:!1}function kf(){return m_}var g_=te({},No,{key:function(e){if(e.key){var t=d_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v_=Ye(g_),y_=te({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=Ye(y_),w_=te({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),__=Ye(w_),E_=te({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=Ye(E_),S_=te({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I_=Ye(S_),T_=[9,13,27,32],Sf=Bt&&"CompositionEvent"in window,Mi=null;Bt&&"documentMode"in document&&(Mi=document.documentMode);var C_=Bt&&"TextEvent"in window&&!Mi,Bg=Bt&&(!Sf||Mi&&8<Mi&&11>=Mi),Th=String.fromCharCode(32),Ch=!1;function Vg(e,t){switch(e){case"keyup":return T_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function P_(e,t){switch(e){case"compositionend":return Hg(t);case"keypress":return t.which!==32?null:(Ch=!0,Th);case"textInput":return e=t.data,e===Th&&Ch?null:e;default:return null}}function A_(e,t){if(wr)return e==="compositionend"||!Sf&&Vg(e,t)?(e=zg(),Ds=_f=fn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bg&&t.locale!=="ko"?null:t.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R_[e.type]:t==="textarea"}function Wg(e,t,n,r){kg(r),t=ia(t,"onChange"),0<t.length&&(n=new Ef("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,Zi=null;function x_(e){nv(e,0)}function Ya(e){var t=kr(e);if(mg(t))return e}function O_(e,t){if(e==="change")return t}var Kg=!1;if(Bt){var Yl;if(Bt){var Xl="oninput"in document;if(!Xl){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Xl=typeof Ah.oninput=="function"}Yl=Xl}else Yl=!1;Kg=Yl&&(!document.documentMode||9<document.documentMode)}function Rh(){Ui&&(Ui.detachEvent("onpropertychange",Gg),Zi=Ui=null)}function Gg(e){if(e.propertyName==="value"&&Ya(Zi)){var t=[];Wg(t,Zi,e,mf(e)),Cg(x_,t)}}function N_(e,t,n){e==="focusin"?(Rh(),Ui=t,Zi=n,Ui.attachEvent("onpropertychange",Gg)):e==="focusout"&&Rh()}function b_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Zi)}function L_(e,t){if(e==="click")return Ya(t)}function D_(e,t){if(e==="input"||e==="change")return Ya(t)}function M_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:M_;function eo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nu.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oh(e,t){var n=xh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xg(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qs(e.document)}return t}function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function U_(e){var t=Xg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yg(n.ownerDocument.documentElement,n)){if(r!==null&&If(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Oh(n,o);var s=Oh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $_=Bt&&"documentMode"in document&&11>=document.documentMode,_r=null,Qu=null,$i=null,Ju=!1;function Nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||_r==null||_r!==Qs(r)||(r=_r,"selectionStart"in r&&If(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&eo($i,r)||($i=r,r=ia(Qu,"onSelect"),0<r.length&&(t=new Ef("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},ql={},qg={};Bt&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Xa(e){if(ql[e])return ql[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return ql[e]=t[n];return e}var Qg=Xa("animationend"),Jg=Xa("animationiteration"),Zg=Xa("animationstart"),ev=Xa("transitionend"),tv=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){tv.set(e,t),cr(t,[e])}for(var Ql=0;Ql<bh.length;Ql++){var Jl=bh[Ql],F_=Jl.toLowerCase(),j_=Jl[0].toUpperCase()+Jl.slice(1);Nn(F_,"on"+j_)}Nn(Qg,"onAnimationEnd");Nn(Jg,"onAnimationIteration");Nn(Zg,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(ev,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function Lh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fw(r,t,void 0,e),e.currentTarget=null}function nv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Lh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Lh(i,a,u),o=l}}}if(Zs)throw e=Gu,Zs=!1,Gu=null,e}function G(e,t){var n=t[rc];n===void 0&&(n=t[rc]=new Set);var r=e+"__bubble";n.has(r)||(rv(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),rv(n,e,r,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[us]){e[us]=!0,cg.forEach(function(n){n!=="selectionchange"&&(z_.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,Zl("selectionchange",!1,t))}}function rv(e,t,n,r){switch(jg(t)){case 1:var i=t_;break;case 4:i=n_;break;default:i=wf}n=i.bind(null,t,n,e),i=void 0,!Ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function eu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Vn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Cg(function(){var u=o,c=mf(n),f=[];e:{var h=tv.get(e);if(h!==void 0){var g=Ef,v=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":g=v_;break;case"focusin":v="focus",g=Gl;break;case"focusout":v="blur",g=Gl;break;case"beforeblur":case"afterblur":g=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=__;break;case Qg:case Jg:case Zg:g=l_;break;case ev:g=k_;break;case"scroll":g=r_;break;case"wheel":g=I_;break;case"copy":case"cut":case"paste":g=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ih}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Xi(d,p),y!=null&&w.push(no(d,y,m)))),_)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Hu&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[Vt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Vn(v):null,v!==null&&(_=fr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=kh,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ih,y="onPointerLeave",p="onPointerEnter",d="pointer"),_=g==null?h:kr(g),m=v==null?h:kr(v),h=new w(y,d+"leave",g,n,c),h.target=_,h.relatedTarget=m,y=null,Vn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=_,y=w),_=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=mr(m))d++;for(m=0,y=p;y;y=mr(y))m++;for(;0<d-m;)w=mr(w),d--;for(;0<m-d;)p=mr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=mr(w),p=mr(p)}w=null}else w=null;g!==null&&Dh(f,h,g,w,!1),v!==null&&_!==null&&Dh(f,_,v,w,!0)}}e:{if(h=u?kr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=O_;else if(Ph(h))if(Kg)E=D_;else{E=b_;var I=N_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=L_);if(E&&(E=E(e,u))){Wg(f,E,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Fu(h,"number",h.value)}switch(I=u?kr(u):window,e){case"focusin":(Ph(I)||I.contentEditable==="true")&&(_r=I,Qu=u,$i=null);break;case"focusout":$i=Qu=_r=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Nh(f,n,c);break;case"selectionchange":if($_)break;case"keydown":case"keyup":Nh(f,n,c)}var T;if(Sf)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else wr?Vg(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Bg&&n.locale!=="ko"&&(wr||x!=="onCompositionStart"?x==="onCompositionEnd"&&wr&&(T=zg()):(fn=c,_f="value"in fn?fn.value:fn.textContent,wr=!0)),I=ia(u,x),0<I.length&&(x=new Sh(x,e,null,n,c),f.push({event:x,listeners:I}),T?x.data=T:(T=Hg(n),T!==null&&(x.data=T)))),(T=C_?P_(e,n):A_(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(c=new Sh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}nv(f,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xi(e,n),o!=null&&r.unshift(no(e,o,i)),o=Xi(e,t),o!=null&&r.push(no(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xi(n,o),l!=null&&s.unshift(no(n,l,a))):i||(l=Xi(n,o),l!=null&&s.push(no(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var B_=/\r\n?/g,V_=/\u0000|\uFFFD/g;function Mh(e){return(typeof e=="string"?e:""+e).replace(B_,`
`).replace(V_,"")}function cs(e,t,n){if(t=Mh(t),Mh(e)!==t&&n)throw Error(k(425))}function oa(){}var Zu=null,ec=null;function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,H_=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch(K_)}:nc;function K_(e){setTimeout(function(){throw e})}function tu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),vt="__reactFiber$"+ii,ro="__reactProps$"+ii,Vt="__reactContainer$"+ii,rc="__reactEvents$"+ii,G_="__reactListeners$"+ii,Y_="__reactHandles$"+ii;function Vn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$h(e);e!==null;){if(n=e[vt])return n;e=$h(e)}return t}e=n,n=e.parentNode}return null}function bo(e){return e=e[vt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function qa(e){return e[ro]||null}var ic=[],Sr=-1;function bn(e){return{current:e}}function q(e){0>Sr||(e.current=ic[Sr],ic[Sr]=null,Sr--)}function K(e,t){Sr++,ic[Sr]=e.current,e.current=t}var Pn={},xe=bn(Pn),Fe=bn(!1),er=Pn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function sa(){q(Fe),q(xe)}function Fh(e,t,n){if(xe.current!==Pn)throw Error(k(168));K(xe,t),K(Fe,n)}function iv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Nw(e)||"Unknown",i));return te({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,er=xe.current,K(xe,e),K(Fe,Fe.current),!0}function jh(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=iv(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,q(Fe),q(xe),K(xe,e)):q(Fe),K(Fe,n)}var bt=null,Qa=!1,nu=!1;function ov(e){bt===null?bt=[e]:bt.push(e)}function X_(e){Qa=!0,ov(e)}function Ln(){if(!nu&&bt!==null){nu=!0;var e=0,t=H;try{var n=bt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Qa=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),xg(gf,Ln),i}finally{H=t,nu=!1}}return null}var Ir=[],Tr=0,la=null,ua=0,qe=[],Qe=0,tr=null,Lt=1,Dt="";function jn(e,t){Ir[Tr++]=ua,Ir[Tr++]=la,la=e,ua=t}function sv(e,t,n){qe[Qe++]=Lt,qe[Qe++]=Dt,qe[Qe++]=tr,tr=e;var r=Lt;e=Dt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Lt=1<<32-ft(t)+i|n<<i|r,Dt=o+e}else Lt=1<<o|n<<i|r,Dt=e}function Tf(e){e.return!==null&&(jn(e,1),sv(e,1,0))}function Cf(e){for(;e===la;)la=Ir[--Tr],Ir[Tr]=null,ua=Ir[--Tr],Ir[Tr]=null;for(;e===tr;)tr=qe[--Qe],qe[Qe]=null,Dt=qe[--Qe],qe[Qe]=null,Lt=qe[--Qe],qe[Qe]=null}var We=null,Ve=null,J=!1,lt=null;function av(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ve=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:Lt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ve=null,!0):!1;default:return!1}}function oc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sc(e){if(J){var t=Ve;if(t){var n=t;if(!zh(e,t)){if(oc(e))throw Error(k(418));t=yn(n.nextSibling);var r=We;t&&zh(e,t)?av(r,n):(e.flags=e.flags&-4097|2,J=!1,We=e)}}else{if(oc(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,We=e}}}function Bh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function fs(e){if(e!==We)return!1;if(!J)return Bh(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tc(e.type,e.memoizedProps)),t&&(t=Ve)){if(oc(e))throw lv(),Error(k(418));for(;t;)av(e,t),t=yn(t.nextSibling)}if(Bh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=We?yn(e.stateNode.nextSibling):null;return!0}function lv(){for(var e=Ve;e;)e=yn(e.nextSibling)}function Yr(){Ve=We=null,J=!1}function Pf(e){lt===null?lt=[e]:lt.push(e)}var q_=Qt.ReactCurrentBatchConfig;function _i(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ds(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vh(e){var t=e._init;return t(e._payload)}function uv(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,y){return d===null||d.tag!==6?(d=uu(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var E=m.type;return E===yr?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&Vh(E)===d.type)?(y=i(d,m.props),y.ref=_i(p,d,m),y.return=p,y):(y=Vs(m.type,m.key,m.props,null,p.mode,y),y.ref=_i(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=cu(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,E){return d===null||d.tag!==7?(d=Qn(m,p.mode,y,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=uu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ts:return m=Vs(d.type,d.key,d.props,null,p.mode,m),m.ref=_i(p,null,d),m.return=p,m;case vr:return d=cu(d,p.mode,m),d.return=p,d;case nn:var y=d._init;return f(p,y(d._payload),m)}if(Ci(d)||mi(d))return d=Qn(d,p.mode,m,null),d.return=p,d;ds(p,d)}return null}function h(p,d,m,y){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ts:return m.key===E?l(p,d,m,y):null;case vr:return m.key===E?u(p,d,m,y):null;case nn:return E=m._init,h(p,d,E(m._payload),y)}if(Ci(m)||mi(m))return E!==null?null:c(p,d,m,y,null);ds(p,m)}return null}function g(p,d,m,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(d,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ts:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,E);case vr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,E);case nn:var I=y._init;return g(p,d,m,I(y._payload),E)}if(Ci(y)||mi(y))return p=p.get(m)||null,c(d,p,y,E,null);ds(d,y)}return null}function v(p,d,m,y){for(var E=null,I=null,T=d,x=d=0,F=null;T!==null&&x<m.length;x++){T.index>x?(F=T,T=null):F=T.sibling;var D=h(p,T,m[x],y);if(D===null){T===null&&(T=F);break}e&&T&&D.alternate===null&&t(p,T),d=o(D,d,x),I===null?E=D:I.sibling=D,I=D,T=F}if(x===m.length)return n(p,T),J&&jn(p,x),E;if(T===null){for(;x<m.length;x++)T=f(p,m[x],y),T!==null&&(d=o(T,d,x),I===null?E=T:I.sibling=T,I=T);return J&&jn(p,x),E}for(T=r(p,T);x<m.length;x++)F=g(T,p,x,m[x],y),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?x:F.key),d=o(F,d,x),I===null?E=F:I.sibling=F,I=F);return e&&T.forEach(function(it){return t(p,it)}),J&&jn(p,x),E}function w(p,d,m,y){var E=mi(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var I=E=null,T=d,x=d=0,F=null,D=m.next();T!==null&&!D.done;x++,D=m.next()){T.index>x?(F=T,T=null):F=T.sibling;var it=h(p,T,D.value,y);if(it===null){T===null&&(T=F);break}e&&T&&it.alternate===null&&t(p,T),d=o(it,d,x),I===null?E=it:I.sibling=it,I=it,T=F}if(D.done)return n(p,T),J&&jn(p,x),E;if(T===null){for(;!D.done;x++,D=m.next())D=f(p,D.value,y),D!==null&&(d=o(D,d,x),I===null?E=D:I.sibling=D,I=D);return J&&jn(p,x),E}for(T=r(p,T);!D.done;x++,D=m.next())D=g(T,p,x,D.value,y),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?x:D.key),d=o(D,d,x),I===null?E=D:I.sibling=D,I=D);return e&&T.forEach(function(di){return t(p,di)}),J&&jn(p,x),E}function _(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===yr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ts:e:{for(var E=m.key,I=d;I!==null;){if(I.key===E){if(E=m.type,E===yr){if(I.tag===7){n(p,I.sibling),d=i(I,m.props.children),d.return=p,p=d;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&Vh(E)===I.type){n(p,I.sibling),d=i(I,m.props),d.ref=_i(p,I,m),d.return=p,p=d;break e}n(p,I);break}else t(p,I);I=I.sibling}m.type===yr?(d=Qn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Vs(m.type,m.key,m.props,null,p.mode,y),y.ref=_i(p,d,m),y.return=p,p=y)}return s(p);case vr:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=cu(m,p.mode,y),d.return=p,p=d}return s(p);case nn:return I=m._init,_(p,d,I(m._payload),y)}if(Ci(m))return v(p,d,m,y);if(mi(m))return w(p,d,m,y);ds(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=uu(m,p.mode,y),d.return=p,p=d),s(p)):n(p,d)}return _}var Xr=uv(!0),cv=uv(!1),ca=bn(null),fa=null,Cr=null,Af=null;function Rf(){Af=Cr=fa=null}function xf(e){var t=ca.current;q(ca),e._currentValue=t}function ac(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){fa=e,Af=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Af!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(fa===null)throw Error(k(308));Cr=e,fa.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Hn=null;function Of(e){Hn===null?Hn=[e]:Hn.push(e)}function fv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Of(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Of(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function Us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}function Hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=te({},f,h);break e;case 2:rn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rr|=s,e.lanes=s,e.memoizedState=f}}function Wh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Lo={},St=bn(Lo),io=bn(Lo),oo=bn(Lo);function Wn(e){if(e===Lo)throw Error(k(174));return e}function bf(e,t){switch(K(oo,t),K(io,e),K(St,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}q(St),K(St,t)}function qr(){q(St),q(io),q(oo)}function hv(e){Wn(oo.current);var t=Wn(St.current),n=zu(t,e.type);t!==n&&(K(io,e),K(St,n))}function Lf(e){io.current===e&&(q(St),q(io))}var Z=bn(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ru=[];function Df(){for(var e=0;e<ru.length;e++)ru[e]._workInProgressVersionPrimary=null;ru.length=0}var $s=Qt.ReactCurrentDispatcher,iu=Qt.ReactCurrentBatchConfig,nr=0,ee=null,le=null,he=null,pa=!1,Fi=!1,so=0,Q_=0;function ke(){throw Error(k(321))}function Mf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Uf(e,t,n,r,i,o){if(nr=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?tE:nE,e=n(r,i),Fi){o=0;do{if(Fi=!1,so=0,25<=o)throw Error(k(301));o+=1,he=le=null,t.updateQueue=null,$s.current=rE,e=n(r,i)}while(Fi)}if($s.current=ma,t=le!==null&&le.next!==null,nr=0,he=le=ee=null,pa=!1,t)throw Error(k(300));return e}function $f(){var e=so!==0;return so=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function nt(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function ao(e,t){return typeof t=="function"?t(e):t}function ou(e){var t=nt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ee.lanes|=c,rr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ht(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function su(e){var t=nt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ht(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pv(){}function mv(e,t){var n=ee,r=nt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Ff(yv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,lo(9,vv.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(k(349));nr&30||gv(n,t,i)}return i}function gv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vv(e,t,n,r){t.value=n,t.getSnapshot=r,wv(t)&&_v(e)}function yv(e,t,n){return n(function(){wv(t)&&_v(e)})}function wv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function _v(e){var t=Ht(e,1);t!==null&&dt(t,e,1,-1)}function Kh(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},t.queue=e,e=e.dispatch=eE.bind(null,ee,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ev(){return nt().memoizedState}function Fs(e,t,n,r){var i=gt();ee.flags|=e,i.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&Mf(r,s.deps)){i.memoizedState=lo(t,n,o,r);return}}ee.flags|=e,i.memoizedState=lo(1|t,n,o,r)}function Gh(e,t){return Fs(8390656,8,e,t)}function Ff(e,t){return Ja(2048,8,e,t)}function kv(e,t){return Ja(4,2,e,t)}function Sv(e,t){return Ja(4,4,e,t)}function Iv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tv(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,Iv.bind(null,t,e),n)}function jf(){}function Cv(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pv(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Av(e,t,n){return nr&21?(ht(n,t)||(n=bg(),ee.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function J_(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=iu.transition;iu.transition={};try{e(!1),t()}finally{H=n,iu.transition=r}}function Rv(){return nt().memoizedState}function Z_(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xv(e))Ov(t,n);else if(n=fv(e,t,n,r),n!==null){var i=Le();dt(n,e,r,i),Nv(n,t,r)}}function eE(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(e))Ov(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,s)){var l=t.interleaved;l===null?(i.next=i,Of(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=fv(e,t,i,r),n!==null&&(i=Le(),dt(n,e,r,i),Nv(n,t,r))}}function xv(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ov(e,t){Fi=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}var ma={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},tE={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Gh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,Iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z_.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Kh,useDebugValue:jf,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Kh(!1),t=e[0];return e=J_.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=gt();if(J){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),pe===null)throw Error(k(349));nr&30||gv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gh(yv.bind(null,r,o,e),[e]),r.flags|=2048,lo(9,vv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=pe.identifierPrefix;if(J){var n=Dt,r=Lt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nE={readContext:tt,useCallback:Cv,useContext:tt,useEffect:Ff,useImperativeHandle:Tv,useInsertionEffect:kv,useLayoutEffect:Sv,useMemo:Pv,useReducer:ou,useRef:Ev,useState:function(){return ou(ao)},useDebugValue:jf,useDeferredValue:function(e){var t=nt();return Av(t,le.memoizedState,e)},useTransition:function(){var e=ou(ao)[0],t=nt().memoizedState;return[e,t]},useMutableSource:pv,useSyncExternalStore:mv,useId:Rv,unstable_isNewReconciler:!1},rE={readContext:tt,useCallback:Cv,useContext:tt,useEffect:Ff,useImperativeHandle:Tv,useInsertionEffect:kv,useLayoutEffect:Sv,useMemo:Pv,useReducer:su,useRef:Ev,useState:function(){return su(ao)},useDebugValue:jf,useDeferredValue:function(e){var t=nt();return le===null?t.memoizedState=e:Av(t,le.memoizedState,e)},useTransition:function(){var e=su(ao)[0],t=nt().memoizedState;return[e,t]},useMutableSource:pv,useSyncExternalStore:mv,useId:Rv,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=En(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(dt(t,e,i,r),Us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=En(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(dt(t,e,i,r),Us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=En(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(dt(t,e,r,n),Us(t,e,r))}};function Yh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(i,o):!0}function bv(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=je(t)?er:xe.current,r=t.contextTypes,o=(r=r!=null)?Gr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function uc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=je(t)?er:xe.current,i.context=Gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(lc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Za.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=Ow(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function au(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function Lv(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){va||(va=!0,_c=r),cc(e,t)},n}function Dv(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cc(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yE.bind(null,e,t,n),t.then(e,e))}function Qh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var oE=Qt.ReactCurrentOwner,$e=!1;function Ne(e,t,n,r){t.child=e===null?cv(t,null,n,r):Xr(t,e.child,n,r)}function Zh(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=Uf(e,t,n,r,o,i),n=$f(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(J&&n&&Tf(t),t.flags|=1,Ne(e,t,r,i),t.child)}function ep(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mv(e,t,o,r,i)):(e=Vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(s,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(eo(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return fc(e,t,n,r,i)}function Uv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Ar,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Ar,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(Ar,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(Ar,Be),Be|=r;return Ne(e,t,i,n),t.child}function $v(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fc(e,t,n,r,i){var o=je(n)?er:xe.current;return o=Gr(t,o),$r(t,i),n=Uf(e,t,n,r,o,i),r=$f(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(J&&r&&Tf(t),t.flags|=1,Ne(e,t,n,i),t.child)}function tp(e,t,n,r,i){if(je(n)){var o=!0;aa(t)}else o=!1;if($r(t,i),t.stateNode===null)js(e,t),bv(t,n,r),uc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=je(n)?er:xe.current,u=Gr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xh(t,s,r,u),rn=!1;var h=t.memoizedState;s.state=h,da(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Fe.current||rn?(typeof c=="function"&&(lc(t,n,c,r),l=t.memoizedState),(a=rn||Yh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:st(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=je(n)?er:xe.current,l=Gr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Xh(t,s,r,l),rn=!1,h=t.memoizedState,s.state=h,da(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||Fe.current||rn?(typeof g=="function"&&(lc(t,n,g,r),v=t.memoizedState),(u=rn||Yh(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return dc(e,t,n,r,o,i)}function dc(e,t,n,r,i,o){$v(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&jh(t,n,!1),Wt(e,t,o);r=t.stateNode,oE.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Xr(t,e.child,null,o),t.child=Xr(t,null,a,o)):Ne(e,t,a,o),t.memoizedState=r.state,i&&jh(t,n,!0),t.child}function Fv(e){var t=e.stateNode;t.pendingContext?Fh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fh(e,t.context,!1),bf(e,t.containerInfo)}function np(e,t,n,r,i){return Yr(),Pf(i),t.flags|=256,Ne(e,t,n,r),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function jv(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(Z,i&1),e===null)return sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=nl(s,r,0,null),e=Qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pc(n),t.memoizedState=hc,e):zf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sE(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=kn(a,o):(o=Qn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?pc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=hc,r}return o=e.child,e=o.sibling,r=kn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zf(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&Pf(r),Xr(t,e.child,null,n),e=zf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sE(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=au(Error(k(422))),hs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=nl({mode:"visible",children:r.children},i,0,null),o=Qn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xr(t,e.child,null,s),t.child.memoizedState=pc(s),t.memoizedState=hc,o);if(!(t.mode&1))return hs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=au(o,r,void 0),hs(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ht(e,i),dt(r,e,i,-1))}return Gf(),r=au(Error(k(421))),hs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=yn(i.nextSibling),We=t,J=!0,lt=null,e!==null&&(qe[Qe++]=Lt,qe[Qe++]=Dt,qe[Qe++]=tr,Lt=e.id,Dt=e.overflow,tr=t),t=zf(t,r.children),t.flags|=4096,t)}function rp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ac(e.return,t,n)}function lu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,n,t);else if(e.tag===19)rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),lu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}lu(t,!0,n,null,o);break;case"together":lu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function aE(e,t,n){switch(t.tag){case 3:Fv(t),Yr();break;case 5:hv(t);break;case 1:je(t.type)&&aa(t);break;case 4:bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?jv(e,t,n):(K(Z,Z.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Uv(e,t,n)}return Wt(e,t,n)}var Bv,mc,Vv,Hv;Bv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mc=function(){};Vv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(St.current);var o=null;switch(n){case"input":i=Uu(e,i),r=Uu(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=ju(e,i),r=ju(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}Bu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Hv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lE(e,t,n){var r=t.pendingProps;switch(Cf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return je(t.type)&&sa(),Se(t),null;case 3:return r=t.stateNode,qr(),q(Fe),q(xe),Df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Sc(lt),lt=null))),mc(e,t),Se(t),null;case 5:Lf(t);var i=Wn(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)Vv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Se(t),null}if(e=Wn(St.current),fs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[ro]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)G(Ai[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":dh(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":ph(r,o),G("invalid",r)}Bu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,a,e),i=["children",""+a]):Gi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":ns(r),hh(r,o,!0);break;case"textarea":ns(r),mh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[ro]=r,Bv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vu(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)G(Ai[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":dh(e,r),i=Uu(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":ph(e,r),i=ju(e,r),G("invalid",e);break;default:i=r}Bu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Eg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yi(e,l):typeof l=="number"&&Yi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",e):l!=null&&ff(e,o,l,s))}switch(n){case"input":ns(e),hh(e,r,!1);break;case"textarea":ns(e),mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Hv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Wn(oo.current),Wn(St.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Se(t),null;case 13:if(q(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ve!==null&&t.mode&1&&!(t.flags&128))lv(),Yr(),t.flags|=98560,o=!1;else if(o=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[vt]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else lt!==null&&(Sc(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ue===0&&(ue=3):Gf())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return qr(),mc(e,t),e===null&&to(t.stateNode.containerInfo),Se(t),null;case 10:return xf(t.type._context),Se(t),null;case 17:return je(t.type)&&sa(),Se(t),null;case 19:if(q(Z),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ei(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ha(e),s!==null){for(t.flags|=128,Ei(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Jr&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=ha(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return Se(t),null}else 2*oe()-o.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Kf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function uE(e,t){switch(Cf(t),t.tag){case 1:return je(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),q(Fe),q(xe),Df(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lf(t),null;case 13:if(q(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Z),null;case 4:return qr(),null;case 10:return xf(t.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var ps=!1,Te=!1,cE=typeof WeakSet=="function"?WeakSet:Set,A=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function gc(e,t,n){try{n()}catch(r){ne(e,t,r)}}var ip=!1;function fE(e,t){if(Zu=na,e=Xg(),If(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:e,selectionRange:n},na=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:st(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){ne(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=ip,ip=!1,v}function ji(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gc(t,n,o)}i=i.next}while(i!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wv(e){var t=e.alternate;t!==null&&(e.alternate=null,Wv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[ro],delete t[rc],delete t[G_],delete t[Y_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kv(e){return e.tag===5||e.tag===3||e.tag===4}function op(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(yc(e,t,n),e=e.sibling;e!==null;)yc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var ve=null,at=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Gv(e,t,n),n=n.sibling}function Gv(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:Te||Pr(n,t);case 6:var r=ve,i=at;ve=null,Zt(e,t,n),ve=r,at=i,ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(at?(e=ve,n=n.stateNode,e.nodeType===8?tu(e.parentNode,n):e.nodeType===1&&tu(e,n),Ji(e)):tu(ve,n.stateNode));break;case 4:r=ve,i=at,ve=n.stateNode.containerInfo,at=!0,Zt(e,t,n),ve=r,at=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&gc(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Te&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Zt(e,t,n),Te=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function sp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cE),t.forEach(function(r){var i=_E.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,at=!1;break e;case 3:ve=a.stateNode.containerInfo,at=!0;break e;case 4:ve=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(ve===null)throw Error(k(160));Gv(o,s,i),ve=null,at=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yv(t,e),t=t.sibling}function Yv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{ji(3,e,e.return),el(3,e)}catch(w){ne(e,e.return,w)}try{ji(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(w){ne(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gg(i,o),Vu(a,s);var u=Vu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Eg(i,f):c==="dangerouslySetInnerHTML"?wg(i,f):c==="children"?Yi(i,f):ff(i,c,f,u)}switch(a){case"input":$u(i,o);break;case"textarea":vg(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Lr(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ro]=o}catch(w){ne(e,e.return,w)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ne(e,e.return,w)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hf=oe())),r&4&&sp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,ot(t,e),Te=u):ot(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(f=A=c;A!==null;){switch(h=A,g=h.child,h.tag){case 0:case 11:case 14:case 15:ji(4,h,h.return);break;case 1:Pr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ne(r,n,w)}}break;case 5:Pr(h,h.return);break;case 22:if(h.memoizedState!==null){lp(f);continue}}g!==null?(g.return=h,A=g):lp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_g("display",s))}catch(w){ne(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ne(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),mt(e),r&4&&sp(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kv(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var o=op(e);wc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=op(e);yc(e,a,s);break;default:throw Error(k(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dE(e,t,n){A=e,Xv(e)}function Xv(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ps;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=ps;var u=Te;if(ps=s,(Te=l)&&!u)for(A=i;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?up(i):l!==null?(l.return=s,A=l):up(i);for(;o!==null;)A=o,Xv(o),o=o.sibling;A=i,ps=a,Te=u}ap(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):ap(e)}}function ap(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ji(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Te||t.flags&512&&vc(t)}catch(h){ne(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function lp(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function up(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{vc(t)}catch(l){ne(t,o,l)}break;case 5:var s=t.return;try{vc(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var hE=Math.ceil,ga=Qt.ReactCurrentDispatcher,Bf=Qt.ReactCurrentOwner,et=Qt.ReactCurrentBatchConfig,z=0,pe=null,ae=null,we=0,Be=0,Ar=bn(0),ue=0,uo=null,rr=0,tl=0,Vf=0,zi=null,Ue=null,Hf=0,Jr=1/0,Nt=null,va=!1,_c=null,_n=null,ms=!1,dn=null,ya=0,Bi=0,Ec=null,zs=-1,Bs=0;function Le(){return z&6?oe():zs!==-1?zs:zs=oe()}function En(e){return e.mode&1?z&2&&we!==0?we&-we:q_.transition!==null?(Bs===0&&(Bs=bg()),Bs):(e=H,e!==0||(e=window.event,e=e===void 0?16:jg(e.type)),e):1}function dt(e,t,n,r){if(50<Bi)throw Bi=0,Ec=null,Error(k(185));Oo(e,n,r),(!(z&2)||e!==pe)&&(e===pe&&(!(z&2)&&(tl|=n),ue===4&&sn(e,we)),ze(e,r),n===1&&z===0&&!(t.mode&1)&&(Jr=oe()+500,Qa&&Ln()))}function ze(e,t){var n=e.callbackNode;qw(e,t);var r=ta(e,e===pe?we:0);if(r===0)n!==null&&yh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yh(n),t===1)e.tag===0?X_(cp.bind(null,e)):ov(cp.bind(null,e)),W_(function(){!(z&6)&&Ln()}),n=null;else{switch(Lg(r)){case 1:n=gf;break;case 4:n=Og;break;case 16:n=ea;break;case 536870912:n=Ng;break;default:n=ea}n=ry(n,qv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qv(e,t){if(zs=-1,Bs=0,z&6)throw Error(k(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=ta(e,e===pe?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wa(e,r);else{t=r;var i=z;z|=2;var o=Jv();(pe!==e||we!==t)&&(Nt=null,Jr=oe()+500,qn(e,t));do try{gE();break}catch(a){Qv(e,a)}while(1);Rf(),ga.current=o,z=i,ae!==null?t=0:(pe=null,we=0,t=ue)}if(t!==0){if(t===2&&(i=Yu(e),i!==0&&(r=i,t=kc(e,i))),t===1)throw n=uo,qn(e,0),sn(e,r),ze(e,oe()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!pE(i)&&(t=wa(e,r),t===2&&(o=Yu(e),o!==0&&(r=o,t=kc(e,o))),t===1))throw n=uo,qn(e,0),sn(e,r),ze(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:zn(e,Ue,Nt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Hf+500-oe(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nc(zn.bind(null,e,Ue,Nt),t);break}zn(e,Ue,Nt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ft(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hE(r/1960))-r,10<r){e.timeoutHandle=nc(zn.bind(null,e,Ue,Nt),r);break}zn(e,Ue,Nt);break;case 5:zn(e,Ue,Nt);break;default:throw Error(k(329))}}}return ze(e,oe()),e.callbackNode===n?qv.bind(null,e):null}function kc(e,t){var n=zi;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=wa(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Sc(t)),e}function Sc(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function pE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Vf,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function cp(e){if(z&6)throw Error(k(327));Fr();var t=ta(e,0);if(!(t&1))return ze(e,oe()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=Yu(e);r!==0&&(t=r,n=kc(e,r))}if(n===1)throw n=uo,qn(e,0),sn(e,t),ze(e,oe()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Ue,Nt),ze(e,oe()),null}function Wf(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Jr=oe()+500,Qa&&Ln())}}function ir(e){dn!==null&&dn.tag===0&&!(z&6)&&Fr();var t=z;z|=1;var n=et.transition,r=H;try{if(et.transition=null,H=1,e)return e()}finally{H=r,et.transition=n,z=t,!(z&6)&&Ln()}}function Kf(){Be=Ar.current,q(Ar)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H_(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:qr(),q(Fe),q(xe),Df();break;case 5:Lf(r);break;case 4:qr();break;case 13:q(Z);break;case 19:q(Z);break;case 10:xf(r.type._context);break;case 22:case 23:Kf()}n=n.return}if(pe=e,ae=e=kn(e.current,null),we=Be=t,ue=0,uo=null,Vf=tl=rr=0,Ue=zi=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Hn=null}return e}function Qv(e,t){do{var n=ae;try{if(Rf(),$s.current=ma,pa){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pa=!1}if(nr=0,he=le=ee=null,Fi=!1,so=0,Bf.current=null,n===null||n.return===null){ue=1,uo=t,ae=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Qh(s);if(g!==null){g.flags&=-257,Jh(g,s,a,o,t),g.mode&1&&qh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){qh(o,u,t),Gf();break e}l=Error(k(426))}}else if(J&&a.mode&1){var _=Qh(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Jh(_,s,a,o,t),Pf(Qr(l,a));break e}}o=l=Qr(l,a),ue!==4&&(ue=2),zi===null?zi=[o]:zi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Lv(o,l,t);Hh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Dv(o,a,t);Hh(o,y);break e}}o=o.return}while(o!==null)}ey(n)}catch(E){t=E,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function Jv(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Gf(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(rr&268435455)&&!(tl&268435455)||sn(pe,we)}function wa(e,t){var n=z;z|=2;var r=Jv();(pe!==e||we!==t)&&(Nt=null,qn(e,t));do try{mE();break}catch(i){Qv(e,i)}while(1);if(Rf(),z=n,ga.current=r,ae!==null)throw Error(k(261));return pe=null,we=0,ue}function mE(){for(;ae!==null;)Zv(ae)}function gE(){for(;ae!==null&&!zw();)Zv(ae)}function Zv(e){var t=ny(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?ey(e):ae=t,Bf.current=null}function ey(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uE(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}else if(n=lE(n,t,Be),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function zn(e,t,n){var r=H,i=et.transition;try{et.transition=null,H=1,vE(e,t,n,r)}finally{et.transition=i,H=r}return null}function vE(e,t,n,r){do Fr();while(dn!==null);if(z&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qw(e,o),e===pe&&(ae=pe=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,ry(ea,function(){return Fr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var s=H;H=1;var a=z;z|=4,Bf.current=null,fE(e,n),Yv(n,e),U_(ec),na=!!Zu,ec=Zu=null,e.current=n,dE(n),Bw(),z=a,H=s,et.transition=o}else e.current=n;if(ms&&(ms=!1,dn=e,ya=i),o=e.pendingLanes,o===0&&(_n=null),Ww(n.stateNode),ze(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(va)throw va=!1,e=_c,_c=null,e;return ya&1&&e.tag!==0&&Fr(),o=e.pendingLanes,o&1?e===Ec?Bi++:(Bi=0,Ec=e):Bi=0,Ln(),null}function Fr(){if(dn!==null){var e=Lg(ya),t=et.transition,n=H;try{if(et.transition=null,H=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,ya=0,z&6)throw Error(k(331));var i=z;for(z|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:ji(8,c,o)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var h=c.sibling,g=c.return;if(Wv(c),c===u){A=null;break}if(h!==null){h.return=g,A=h;break}A=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ji(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=d;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:el(9,a)}}catch(E){ne(a,a.return,E)}if(a===s){A=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,A=y;break e}A=a.return}}if(z=i,Ln(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{H=n,et.transition=t}}return!1}function fp(e,t,n){t=Qr(n,t),t=Lv(e,t,1),e=wn(e,t,1),t=Le(),e!==null&&(Oo(e,1,t),ze(e,t))}function ne(e,t,n){if(e.tag===3)fp(e,e,n);else for(;t!==null;){if(t.tag===3){fp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Qr(n,e),e=Dv(t,e,1),t=wn(t,e,1),e=Le(),t!==null&&(Oo(t,1,e),ze(t,e));break}}t=t.return}}function yE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(we&n)===n&&(ue===4||ue===3&&(we&130023424)===we&&500>oe()-Hf?qn(e,0):Vf|=n),ze(e,t)}function ty(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=Le();e=Ht(e,t),e!==null&&(Oo(e,t,n),ze(e,n))}function wE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ty(e,n)}function _E(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ty(e,n)}var ny;ny=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,aE(e,t,n);$e=!!(e.flags&131072)}else $e=!1,J&&t.flags&1048576&&sv(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Gr(t,xe.current);$r(t,n),i=Uf(null,t,r,e,i,n);var o=$f();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Za,t.stateNode=i,i._reactInternals=t,uc(t,r,e,n),t=dc(null,t,r,!0,o,n)):(t.tag=0,J&&o&&Tf(t),Ne(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kE(r),e=st(r,e),i){case 0:t=fc(null,t,r,e,n);break e;case 1:t=tp(null,t,r,e,n);break e;case 11:t=Zh(null,t,r,e,n);break e;case 14:t=ep(null,t,r,st(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),fc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),tp(e,t,r,i,n);case 3:e:{if(Fv(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dv(e,t),da(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(k(423)),t),t=np(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(k(424)),t),t=np(e,t,r,n,i);break e}else for(Ve=yn(t.stateNode.containerInfo.firstChild),We=t,J=!0,lt=null,n=cv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){t=Wt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return hv(t),e===null&&sc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tc(r,i)?s=null:o!==null&&tc(r,o)&&(t.flags|=32),$v(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&sc(t),null;case 13:return jv(e,t,n);case 4:return bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Zh(e,t,r,i,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,K(ca,r._currentValue),r._currentValue=s,o!==null)if(ht(o.value,s)){if(o.children===i.children&&!Fe.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ac(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ac(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=tt(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),ep(e,t,r,i,n);case 15:return Mv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),js(e,t),t.tag=1,je(r)?(e=!0,aa(t)):e=!1,$r(t,n),bv(t,r,i),uc(t,r,i,n),dc(null,t,r,!0,e,n);case 19:return zv(e,t,n);case 22:return Uv(e,t,n)}throw Error(k(156,t.tag))};function ry(e,t){return xg(e,t)}function EE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new EE(e,t,n,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kE(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===pf)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case yr:return Qn(n.children,i,o,t);case df:s=8,i|=8;break;case bu:return e=Ze(12,n,t,i|2),e.elementType=bu,e.lanes=o,e;case Lu:return e=Ze(13,n,t,i),e.elementType=Lu,e.lanes=o,e;case Du:return e=Ze(19,n,t,i),e.elementType=Du,e.lanes=o,e;case hg:return nl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fg:s=10;break e;case dg:s=9;break e;case hf:s=11;break e;case pf:s=14;break e;case nn:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Qn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=hg,e.lanes=n,e.stateNode={isHidden:!1},e}function uu(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function cu(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function SE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xf(e,t,n,r,i,o,s,a,l){return e=new SE(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(o),e}function IE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function iy(e){if(!e)return Pn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(je(n))return iv(e,n,t)}return t}function oy(e,t,n,r,i,o,s,a,l){return e=Xf(n,r,!0,e,i,o,s,a,l),e.context=iy(null),n=e.current,r=Le(),i=En(n),o=zt(r,i),o.callback=t??null,wn(n,o,i),e.current.lanes=i,Oo(e,i,r),ze(e,r),e}function rl(e,t,n,r){var i=t.current,o=Le(),s=En(i);return n=iy(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,s),e!==null&&(dt(e,i,s,o),Us(e,i,s)),s}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qf(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function TE(){return null}var sy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qf(e){this._internalRoot=e}il.prototype.render=Qf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));rl(e,t,null,null)};il.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){rl(null,e,null,null)}),t[Vt]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ug();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Fg(e)}};function Jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hp(){}function CE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_a(s);o.call(u)}}var s=oy(t,r,e,0,null,!1,!1,"",hp);return e._reactRootContainer=s,e[Vt]=s.current,to(e.nodeType===8?e.parentNode:e),ir(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_a(l);a.call(u)}}var l=Xf(e,0,!1,null,null,!1,!1,"",hp);return e._reactRootContainer=l,e[Vt]=l.current,to(e.nodeType===8?e.parentNode:e),ir(function(){rl(t,l,n,r)}),l}function sl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=_a(s);a.call(l)}}rl(t,s,e,i)}else s=CE(n,t,e,i,r);return _a(s)}Dg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(vf(t,n|1),ze(t,oe()),!(z&6)&&(Jr=oe()+500,Ln()))}break;case 13:ir(function(){var r=Ht(e,1);if(r!==null){var i=Le();dt(r,e,1,i)}}),qf(e,1)}};yf=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Le();dt(t,e,134217728,n)}qf(e,134217728)}};Mg=function(e){if(e.tag===13){var t=En(e),n=Ht(e,t);if(n!==null){var r=Le();dt(n,e,t,r)}qf(e,t)}};Ug=function(){return H};$g=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Wu=function(e,t,n){switch(t){case"input":if($u(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qa(r);if(!i)throw Error(k(90));mg(r),$u(r,i)}}}break;case"textarea":vg(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};Ig=Wf;Tg=ir;var PE={usingClientEntryPoint:!1,Events:[bo,kr,qa,kg,Sg,Wf]},ki={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AE={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ag(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||TE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{Ka=gs.inject(AE),kt=gs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(t))throw Error(k(200));return IE(e,t,null,n)};Ge.createRoot=function(e,t){if(!Jf(e))throw Error(k(299));var n=!1,r="",i=sy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xf(e,1,!1,null,null,n,!1,r,i),e[Vt]=t.current,to(e.nodeType===8?e.parentNode:e),new Qf(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ag(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return ir(e)};Ge.hydrate=function(e,t,n){if(!ol(t))throw Error(k(200));return sl(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Jf(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=oy(t,null,e,1,n??null,i,!1,o,s),e[Vt]=t.current,to(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new il(t)};Ge.render=function(e,t,n){if(!ol(t))throw Error(k(200));return sl(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ol(e))throw Error(k(40));return e._reactRootContainer?(ir(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Wf;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return sl(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay)}catch(e){console.error(e)}}ay(),ag.exports=Ge;var RE=ag.exports,pp=RE;Ou.createRoot=pp.createRoot,Ou.hydrateRoot=pp.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const mp="popstate";function xE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ea("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ed(i)}return ly(t,n,null,e)}function OE(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=dr(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Ea("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:ed(o))}function r(i,o){Zf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ly(t,n,r,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function NE(){return Math.random().toString(36).substr(2,8)}function gp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||NE()})}function ed(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ly(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=hn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(co({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=hn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:w.location,delta:p})}function h(_,p){a=hn.Push;let d=Ea(w.location,_,p);n&&n(d,_),u=c()+1;let m=gp(d,u),y=w.createHref(d);try{s.pushState(m,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&l&&l({action:a,location:w.location,delta:1})}function g(_,p){a=hn.Replace;let d=Ea(w.location,_,p);n&&n(d,_),u=c();let m=gp(d,u),y=w.createHref(d);s.replaceState(m,"",y),o&&l&&l({action:a,location:w.location,delta:0})}function v(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:ed(_);return d=d.replace(/ $/,"%20"),ce(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mp,f),l=_,()=>{i.removeEventListener(mp,f),l=null}},createHref(_){return t(i,_)},createURL:v,encodeLocation(_){let p=v(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(_){return s.go(_)}};return w}var vp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vp||(vp={}));function bE(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dr(t):t,i=fy(r.pathname||"/",n);if(i==null)return null;let o=uy(e);LE(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=KE(i);s=VE(o[a],l)}return s}function uy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uy(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:zE(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of cy(o.path))i(o,s,l)}),t}function cy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=cy(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function LE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DE=/^:[\w-]+$/,ME=3,UE=2,$E=1,FE=10,jE=-2,yp=e=>e==="*";function zE(e,t){let n=e.split("/"),r=n.length;return n.some(yp)&&(r+=jE),t&&(r+=UE),n.filter(i=>!yp(i)).reduce((i,o)=>i+(DE.test(o)?ME:o===""?$E:FE),r)}function BE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function VE(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=HE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:JE(Jn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return o}function HE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=WE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function WE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function KE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function GE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:YE(n,t):t,search:ZE(r),hash:ek(i)}}function YE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qE(e,t){let n=XE(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function QE(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dr(e):(i=co({},e),ce(!i.pathname||!i.pathname.includes("?"),fu("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),fu("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),fu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=GE(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),JE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ZE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ek=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dy=["post","put","patch","delete"];new Set(dy);const nk=["get",...dy];new Set(nk);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}const td=C.createContext(null),rk=C.createContext(null),al=C.createContext(null),ll=C.createContext(null),oi=C.createContext({outlet:null,matches:[],isDataRoute:!1}),hy=C.createContext(null);function ul(){return C.useContext(ll)!=null}function nd(){return ul()||ce(!1),C.useContext(ll).location}function py(e){C.useContext(al).static||C.useLayoutEffect(e)}function ik(){let{isDataRoute:e}=C.useContext(oi);return e?vk():ok()}function ok(){ul()||ce(!1);let e=C.useContext(td),{basename:t,future:n,navigator:r}=C.useContext(al),{matches:i}=C.useContext(oi),{pathname:o}=nd(),s=JSON.stringify(qE(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return py(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=QE(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Jn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}function sk(e,t){return ak(e,t)}function ak(e,t,n,r){ul()||ce(!1);let{navigator:i}=C.useContext(al),{matches:o}=C.useContext(oi),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=nd(),c;if(t){var f;let _=typeof t=="string"?dr(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||ce(!1),c=_}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let _=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let v=bE(e,{pathname:g}),w=dk(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Jn([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Jn([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&w?C.createElement(ll.Provider,{value:{location:fo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hn.Pop}},w):w}function lk(){let e=gk(),t=tk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const uk=C.createElement(lk,null);class ck extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(oi.Provider,{value:this.props.routeContext},C.createElement(hy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fk(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(td);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(oi.Provider,{value:t},r)}function dk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||ce(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,h)=>{let g,v=!1,w=null,_=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||uk,l&&(u<0&&h===0?(yk("route-fallback",!1),v=!0,_=null):u===h&&(v=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),d=()=>{let m;return g?m=w:v?m=_:f.route.Component?m=C.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,C.createElement(fk,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?C.createElement(ck,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var my=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(my||{}),ka=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ka||{});function hk(e){let t=C.useContext(td);return t||ce(!1),t}function pk(e){let t=C.useContext(rk);return t||ce(!1),t}function mk(e){let t=C.useContext(oi);return t||ce(!1),t}function gy(e){let t=mk(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function gk(){var e;let t=C.useContext(hy),n=pk(ka.UseRouteError),r=gy(ka.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function vk(){let{router:e}=hk(my.UseNavigateStable),t=gy(ka.UseNavigateStable),n=C.useRef(!1);return py(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fo({fromRouteId:t},o)))},[e,t])}const wp={};function yk(e,t,n){!t&&!wp[e]&&(wp[e]=!0)}function vy(e){ce(!1)}function yy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hn.Pop,navigator:o,static:s=!1,future:a}=e;ul()&&ce(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:s,future:fo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=dr(r));let{pathname:c="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,w=C.useMemo(()=>{let _=fy(c,l);return _==null?null:{location:{pathname:_,search:f,hash:h,state:g,key:v},navigationType:i}},[l,c,f,h,g,v,i]);return w==null?null:C.createElement(al.Provider,{value:u},C.createElement(ll.Provider,{children:n,value:w}))}function wk(e){let{children:t,location:n}=e;return sk(Ic(t),n)}new Promise(()=>{});function Ic(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Ic(r.props.children,o));return}r.type!==vy&&ce(!1),!r.props.index||!r.props.children||ce(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ic(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _k="6";try{window.__reactRouterVersion=_k}catch{}const Ek="startTransition",Sa=yw[Ek];function kk(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=xE({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&Sa?Sa(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.createElement(yy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function Sk(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=OE({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&Sa?Sa(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.createElement(yy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var _p;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_p||(_p={}));var Ep;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ep||(Ep={}));/**
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
 *//**
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
 */const wy=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ik=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wy(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ik(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new Tk;const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ck=function(e){const t=wy(e);return _y.encodeByteArray(t,!0)},Ia=function(e){return Ck(e).replace(/\./g,"")},Ey=function(e){try{return _y.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ak=()=>Pk().__FIREBASE_DEFAULTS__,Rk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ey(e[1]);return t&&JSON.parse(t)},rd=()=>{try{return Ak()||Rk()||xk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ky=e=>{var t,n;return(n=(t=rd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Sy=e=>{const t=ky(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Iy=()=>{var e;return(e=rd())===null||e===void 0?void 0:e.config},Ty=e=>{var t;return(t=rd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ok{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Cy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ia(JSON.stringify(n)),Ia(JSON.stringify(s)),a].join(".")}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function bk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Lk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dk(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Mk(){try{return typeof indexedDB=="object"}catch{return!1}}function Uk(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const $k="FirebaseError";class Rt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$k,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Fk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Rt(i,a,r)}}function Fk(e,t){return e.replace(jk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;function zk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ta(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(kp(o)&&kp(s)){if(!Ta(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kp(e){return e!==null&&typeof e=="object"}/**
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
 */function Mo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function xi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Bk(e,t){const n=new Vk(e,t);return n.subscribe.bind(n)}class Vk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hk(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=du),i.error===void 0&&(i.error=du),i.complete===void 0&&(i.complete=du);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hk(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function du(){}/**
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
 */function xt(e){return e&&e._delegate?e._delegate:e}class An{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class Wk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ok;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gk(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kk(e){return e===Bn?void 0:e}function Gk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Yk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Xk={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},qk=V.INFO,Qk={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Jk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Qk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class id{constructor(t){this.name=t,this._logLevel=qk,this._logHandler=Jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Zk=(e,t)=>t.some(n=>e instanceof n);let Sp,Ip;function eS(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tS(){return Ip||(Ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Tc=new WeakMap,Ay=new WeakMap,hu=new WeakMap,od=new WeakMap;function nS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Sn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Py.set(n,e)}).catch(()=>{}),od.set(t,e),t}function rS(e){if(Tc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Tc.set(e,t)}let Cc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ay.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iS(e){Cc=e(Cc)}function oS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(pu(this),t,...n);return Ay.set(r,t.sort?t.sort():[t]),Sn(r)}:tS().includes(e)?function(...t){return e.apply(pu(this),t),Sn(Py.get(this))}:function(...t){return Sn(e.apply(pu(this),t))}}function sS(e){return typeof e=="function"?oS(e):(e instanceof IDBTransaction&&rS(e),Zk(e,eS())?new Proxy(e,Cc):e)}function Sn(e){if(e instanceof IDBRequest)return nS(e);if(hu.has(e))return hu.get(e);const t=sS(e);return t!==e&&(hu.set(e,t),od.set(t,e)),t}const pu=e=>od.get(e);function aS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Sn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Sn(s.result),l.oldVersion,l.newVersion,Sn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lS=["get","getKey","getAll","getAllKeys","count"],uS=["put","add","delete","clear"],mu=new Map;function Tp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mu.get(t))return mu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=uS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mu.set(t,o),o}iS(e=>({...e,get:(t,n,r)=>Tp(t,n)||e.get(t,n,r),has:(t,n)=>!!Tp(t,n)||e.has(t,n)}));/**
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
 */class cS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pc="@firebase/app",Cp="0.10.2";/**
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
 */const or=new id("@firebase/app"),dS="@firebase/app-compat",hS="@firebase/analytics-compat",pS="@firebase/analytics",mS="@firebase/app-check-compat",gS="@firebase/app-check",vS="@firebase/auth",yS="@firebase/auth-compat",wS="@firebase/database",_S="@firebase/database-compat",ES="@firebase/functions",kS="@firebase/functions-compat",SS="@firebase/installations",IS="@firebase/installations-compat",TS="@firebase/messaging",CS="@firebase/messaging-compat",PS="@firebase/performance",AS="@firebase/performance-compat",RS="@firebase/remote-config",xS="@firebase/remote-config-compat",OS="@firebase/storage",NS="@firebase/storage-compat",bS="@firebase/firestore",LS="@firebase/firestore-compat",DS="firebase",MS="10.11.1";/**
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
 */const Ac="[DEFAULT]",US={[Pc]:"fire-core",[dS]:"fire-core-compat",[pS]:"fire-analytics",[hS]:"fire-analytics-compat",[gS]:"fire-app-check",[mS]:"fire-app-check-compat",[vS]:"fire-auth",[yS]:"fire-auth-compat",[wS]:"fire-rtdb",[_S]:"fire-rtdb-compat",[ES]:"fire-fn",[kS]:"fire-fn-compat",[SS]:"fire-iid",[IS]:"fire-iid-compat",[TS]:"fire-fcm",[CS]:"fire-fcm-compat",[PS]:"fire-perf",[AS]:"fire-perf-compat",[RS]:"fire-rc",[xS]:"fire-rc-compat",[OS]:"fire-gcs",[NS]:"fire-gcs-compat",[bS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[DS]:"fire-js-all"};/**
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
 */const Ca=new Map,$S=new Map,Rc=new Map;function Pp(e,t){try{e.container.addComponent(t)}catch(n){or.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function sr(e){const t=e.name;if(Rc.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;Rc.set(t,e);for(const n of Ca.values())Pp(n,e);for(const n of $S.values())Pp(n,e);return!0}function cl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Mt(e){return e.settings!==void 0}/**
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
 */const FS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Do("app","Firebase",FS);/**
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
 */class jS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=MS;function fl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=Iy()),!n)throw In.create("no-options");const o=Ca.get(i);if(o){if(Ta(n,o.options)&&Ta(r,o.config))return o;throw In.create("duplicate-app",{appName:i})}const s=new Yk(i);for(const l of Rc.values())s.addComponent(l);const a=new jS(n,r,s);return Ca.set(i,a),a}function sd(e=Ac){const t=Ca.get(e);if(!t&&e===Ac&&Iy())return fl();if(!t)throw In.create("no-app",{appName:e});return t}function It(e,t,n){var r;let i=(r=US[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}sr(new An(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const zS="firebase-heartbeat-database",BS=1,ho="firebase-heartbeat-store";let gu=null;function Ry(){return gu||(gu=aS(zS,BS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(e=>{throw In.create("idb-open",{originalErrorMessage:e.message})})),gu}async function VS(e){try{const n=(await Ry()).transaction(ho),r=await n.objectStore(ho).get(xy(e));return await n.done,r}catch(t){if(t instanceof Rt)or.warn(t.message);else{const n=In.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});or.warn(n.message)}}}async function Ap(e,t){try{const r=(await Ry()).transaction(ho,"readwrite");await r.objectStore(ho).put(t,xy(e)),await r.done}catch(n){if(n instanceof Rt)or.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function xy(e){return`${e.name}!${e.options.appId}`}/**
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
 */const HS=1024,WS=30*24*60*60*1e3;class KS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Rp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=WS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rp(),{heartbeatsToSend:r,unsentEntries:i}=GS(this._heartbeatsCache.heartbeats),o=Ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Rp(){return new Date().toISOString().substring(0,10)}function GS(e,t=HS){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),xp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mk()?Uk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function xp(e){return Ia(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function XS(e){sr(new An("platform-logger",t=>new cS(t),"PRIVATE")),sr(new An("heartbeat",t=>new KS(t),"PRIVATE")),It(Pc,Cp,e),It(Pc,Cp,"esm2017"),It("fire-js","")}XS("");function ad(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qS=Oy,Ny=new Do("auth","Firebase",Oy());/**
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
 */const Pa=new id("@firebase/auth");function QS(e,...t){Pa.logLevel<=V.WARN&&Pa.warn(`Auth (${hr}): ${e}`,...t)}function Hs(e,...t){Pa.logLevel<=V.ERROR&&Pa.error(`Auth (${hr}): ${e}`,...t)}/**
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
 */function pt(e,...t){throw ld(e,...t)}function Tt(e,...t){return ld(e,...t)}function by(e,t,n){const r=Object.assign(Object.assign({},qS()),{[t]:n});return new Do("auth","Firebase",r).create(t,{appName:e.name})}function Tn(e){return by(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ny.create(e,...t)}function N(e,t,...n){if(!e)throw ld(t,...n)}function Ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Hs(t),new Error(t)}function Kt(e,t){e||Ut(t)}/**
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
 */function xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function JS(){return Op()==="http:"||Op()==="https:"}function Op(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||bk()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Uo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Kt(n>t,"Short delay should be less than long delay!"),this.isMobile=Nk()||Lk()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ud(e,t){Kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ly{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=new Uo(3e4,6e4);function pr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dn(e,t,n,r,i={}){return Dy(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Mo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ly.fetch()(My(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Dy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},tI),t);try{const i=new iI(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw vs(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw vs(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw vs(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw by(e,c,u);pt(e,c)}}catch(i){if(i instanceof Rt)throw i;pt(e,"network-request-failed",{message:String(i)})}}async function dl(e,t,n,r,i={}){const o=await Dn(e,t,n,r,i);return"mfaPendingCredential"in o&&pt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function My(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ud(e.config,i):`${e.config.apiScheme}://${i}`}function rI(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),nI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}function Np(e){return e!==void 0&&e.enterprise!==void 0}class oI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return rI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function sI(e,t){return Dn(e,"GET","/v2/recaptchaConfig",pr(e,t))}/**
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
 */async function aI(e,t){return Dn(e,"POST","/v1/accounts:delete",t)}async function Uy(e,t){return Dn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lI(e,t=!1){const n=xt(e),r=await n.getIdToken(t),i=cd(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Vi(vu(i.auth_time)),issuedAtTime:Vi(vu(i.iat)),expirationTime:Vi(vu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function vu(e){return Number(e)*1e3}function cd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ey(n);return i?JSON.parse(i):(Hs("Failed to decode base64 JWT payload"),null)}catch(i){return Hs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bp(e){const t=cd(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function po(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Rt&&uI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function uI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class cI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await po(e,Uy(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?$y(o.providerUserInfo):[],a=dI(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Oc(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function fI(e){const t=xt(e);await Aa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function $y(e){return e.map(t=>{var{providerId:n}=t,r=ad(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hI(e,t){const n=await Dy(e,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=My(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ly.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pI(e,t){return Dn(e,"POST","/v2/accounts:revokeToken",pr(e,t))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=bp(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await hI(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new jr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function en(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $t{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ad(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Oc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await po(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lI(this,t)}reload(){return fI(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Tn(this.auth));const t=await this.getIdToken();return await po(this,aI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:E,providerData:I,stsTokenManager:T}=n;N(m&&T,t,"internal-error");const x=jr.fromJSON(this.name,T);N(typeof m=="string",t,"internal-error"),en(f,t.name),en(h,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof E=="boolean",t,"internal-error"),en(g,t.name),en(v,t.name),en(w,t.name),en(_,t.name),en(p,t.name),en(d,t.name);const F=new $t({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:x,createdAt:p,lastLoginAt:d});return I&&Array.isArray(I)&&(F.providerData=I.map(D=>Object.assign({},D))),_&&(F._redirectEventId=_),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const o=new $t({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Aa(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?$y(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new jr;a.updateFromIdToken(r);const l=new $t({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Lp=new Map;function Ft(e){Kt(e instanceof Function,"Expected a class definition");let t=Lp.get(e);return t?(Kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lp.set(e,t),t)}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Fy.type="NONE";const Dp=Fy;/**
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
 */function Ws(e,t,n){return`firebase:${e}:${t}:${n}`}class zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ws(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ws("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zr(Ft(Dp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ft(Dp);const s=Ws(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=$t._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new zr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new zr(o,t,r))}}/**
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
 */function Mp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(By(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hy(t))return"Blackberry";if(Wy(t))return"Webos";if(fd(t))return"Safari";if((t.includes("chrome/")||zy(t))&&!t.includes("edge/"))return"Chrome";if(Vy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jy(e=Oe()){return/firefox\//i.test(e)}function fd(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zy(e=Oe()){return/crios\//i.test(e)}function By(e=Oe()){return/iemobile/i.test(e)}function Vy(e=Oe()){return/android/i.test(e)}function Hy(e=Oe()){return/blackberry/i.test(e)}function Wy(e=Oe()){return/webos/i.test(e)}function hl(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mI(e=Oe()){var t;return hl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gI(){return Dk()&&document.documentMode===10}function Ky(e=Oe()){return hl(e)||Vy(e)||Wy(e)||Hy(e)||/windows phone/i.test(e)||By(e)}function vI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gy(e,t=[]){let n;switch(e){case"Browser":n=Mp(Oe());break;case"Worker":n=`${Mp(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class yI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function wI(e,t={}){return Dn(e,"GET","/v2/passwordPolicy",pr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const _I=6;class EI{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:_I,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class kI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Uy(this,{idToken:t}),r=await $t._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Mt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Aa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mt(this.app))return Promise.reject(Tn(this));const n=t?xt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wI(this),n=new EI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Do("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ft(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&QS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(e){return xt(e)}class Up{constructor(t){this.auth=t,this.observer=null,this.addObserver=Bk(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SI(e){pl=e}function Yy(e){return pl.loadJS(e)}function II(){return pl.recaptchaEnterpriseScript}function TI(){return pl.gapiScript}function CI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const PI="recaptcha-enterprise",AI="NO_RECAPTCHA";class RI{constructor(t){this.type=PI,this.auth=si(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{sI(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new oI(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Np(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(AI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Np(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=II();l.length!==0&&(l+=a),Yy(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function $p(e,t,n,r=!1){const i=new RI(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Fp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await $p(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await $p(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function xI(e,t){const n=cl(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ta(o,t??{}))return i;pt(i,"already-initialized")}return n.initialize({options:t})}function OI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function NI(e,t,n){const r=si(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Xy(t),{host:s,port:a}=bI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LI()}function Xy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bI(e){const t=Xy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:jp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:jp(s)}}}function jp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function LI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class dd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(t){return Ut("not implemented")}_linkToIdToken(t,n){return Ut("not implemented")}_getReauthenticationResolver(t){return Ut("not implemented")}}async function DI(e,t){return Dn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function MI(e,t){return dl(e,"POST","/v1/accounts:signInWithPassword",pr(e,t))}/**
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
 */async function UI(e,t){return dl(e,"POST","/v1/accounts:signInWithEmailLink",pr(e,t))}async function $I(e,t){return dl(e,"POST","/v1/accounts:signInWithEmailLink",pr(e,t))}/**
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
 */class mo extends dd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new mo(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new mo(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fp(t,n,"signInWithPassword",MI);case"emailLink":return UI(t,{email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fp(t,r,"signUpPassword",DI);case"emailLink":return $I(t,{idToken:n,email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Br(e,t){return dl(e,"POST","/v1/accounts:signInWithIdp",pr(e,t))}/**
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
 */const FI="http://localhost";class ar extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ar(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Br(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Br(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Br(t,n)}buildRequest(){const t={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Mo(n)}return t}}/**
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
 */function jI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zI(e){const t=Ri(xi(e)).link,n=t?Ri(xi(t)).deep_link_id:null,r=Ri(xi(e)).deep_link_id;return(r?Ri(xi(r)).link:null)||r||n||t||e}class hd{constructor(t){var n,r,i,o,s,a;const l=Ri(xi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=jI((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=zI(t);try{return new hd(n)}catch{return null}}}/**
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
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(t,n){return mo._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hd.parseLink(n);return N(r,"argument-error"),mo._fromEmailAndCode(t,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends qy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class an extends $o{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return an.credentialFromTaggedObject(t)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return an.credential(t.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
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
 */class ln extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ar._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class un extends $o{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return un.credential(t.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class cn extends $o{constructor(){super("twitter.com")}static credential(t,n){return ar._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */class Zr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await $t._fromIdTokenResponse(t,r,i),s=zp(r);return new Zr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=zp(r);return new Zr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function zp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ra extends Rt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ra(t,n,r,i)}}function Qy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(e,o,t,r):o})}async function BI(e,t,n=!1){const r=await po(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zr._forOperation(e,"link",r)}/**
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
 */async function VI(e,t,n=!1){const{auth:r}=e;if(Mt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const o=await po(e,Qy(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=cd(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Zr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),o}}/**
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
 */async function Jy(e,t,n=!1){if(Mt(e.app))return Promise.reject(Tn(e));const r="signIn",i=await Qy(e,r,t),o=await Zr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function HI(e,t){return Jy(si(e),t)}/**
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
 */async function WI(e){const t=si(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Zy(e,t,n){return Mt(e.app)?Promise.reject(Tn(e)):HI(xt(e),ai.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WI(e),r})}function KI(e,t,n,r){return xt(e).onIdTokenChanged(t,n,r)}function GI(e,t,n){return xt(e).beforeAuthStateChanged(t,n)}function YI(e,t,n,r){return xt(e).onAuthStateChanged(t,n,r)}function XI(e){return xt(e).signOut()}const xa="__sak";/**
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
 */class e0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qI(){const e=Oe();return fd(e)||hl(e)}const QI=1e3,JI=10;class t0 extends e0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qI()&&vI(),this.fallbackToPolling=Ky(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);gI()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,JI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}t0.type="LOCAL";const ZI=t0;/**
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
 */class n0 extends e0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}n0.type="SESSION";const r0=n0;/**
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
 */function e2(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ml(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await e2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
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
 */function pd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class t2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=pd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ct(){return window}function n2(e){Ct().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function i0(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function r2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i2(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function o2(){return i0()?self:null}/**
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
 */const o0="firebaseLocalStorageDb",s2=1,Oa="firebaseLocalStorage",s0="fbase_key";class Fo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(e,t){return e.transaction([Oa],t?"readwrite":"readonly").objectStore(Oa)}function a2(){const e=indexedDB.deleteDatabase(o0);return new Fo(e).toPromise()}function Nc(){const e=indexedDB.open(o0,s2);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Oa,{keyPath:s0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Oa)?t(r):(r.close(),await a2(),t(await Nc()))})})}async function Bp(e,t,n){const r=gl(e,!0).put({[s0]:t,value:n});return new Fo(r).toPromise()}async function l2(e,t){const n=gl(e,!1).get(t),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function Vp(e,t){const n=gl(e,!0).delete(t);return new Fo(n).toPromise()}const u2=800,c2=3;class a0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>c2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(o2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await r2(),!this.activeServiceWorker)return;this.sender=new t2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||i2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Nc();return await Bp(t,xa,"1"),await Vp(t,xa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>l2(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=gl(i,!1).getAll();return new Fo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a0.type="LOCAL";const f2=a0;new Uo(3e4,6e4);/**
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
 */function d2(e,t){return t?Ft(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class md extends dd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Br(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Br(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Br(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function h2(e){return Jy(e.auth,new md(e),e.bypassAuthState)}function p2(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),VI(n,new md(e),e.bypassAuthState)}async function m2(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),BI(n,new md(e),e.bypassAuthState)}/**
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
 */class l0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return h2;case"linkViaPopup":case"linkViaRedirect":return m2;case"reauthViaPopup":case"reauthViaRedirect":return p2;default:pt(this.auth,"internal-error")}}resolve(t){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const g2=new Uo(2e3,1e4);class Rr extends l0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const t=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,g2.get())};t()}}Rr.currentPopupAction=null;/**
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
 */const v2="pendingRedirect",Ks=new Map;class y2 extends l0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ks.get(this.auth._key());if(!t){try{const r=await w2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ks.set(this.auth._key(),t)}return this.bypassAuthState||Ks.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w2(e,t){const n=k2(t),r=E2(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _2(e,t){Ks.set(e._key(),t)}function E2(e){return Ft(e._redirectPersistence)}function k2(e){return Ws(v2,e.config.apiKey,e.name)}async function S2(e,t,n=!1){if(Mt(e.app))return Promise.reject(Tn(e));const r=si(e),i=d2(r,t),s=await new y2(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const I2=10*60*1e3;class T2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!C2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!u0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=I2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hp(t))}saveEventToCache(t){this.cachedEventUids.add(Hp(t)),this.lastProcessedEventTime=Date.now()}}function Hp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function u0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function C2(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u0(e);default:return!1}}/**
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
 */async function P2(e,t={}){return Dn(e,"GET","/v1/projects",t)}/**
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
 */const A2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R2=/^https?/;async function x2(e){if(e.config.emulator)return;const{authorizedDomains:t}=await P2(e);for(const n of t)try{if(O2(n))return}catch{}pt(e,"unauthorized-domain")}function O2(e){const t=xc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!R2.test(n))return!1;if(A2.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const N2=new Uo(3e4,6e4);function Wp(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function b2(e){return new Promise((t,n)=>{var r,i,o;function s(){Wp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wp(),n(Tt(e,"network-request-failed"))},timeout:N2.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ct().gapi)===null||o===void 0)&&o.load)s();else{const a=CI("iframefcb");return Ct()[a]=()=>{gapi.load?s():n(Tt(e,"network-request-failed"))},Yy(`${TI()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Gs=null,t})}let Gs=null;function L2(e){return Gs=Gs||b2(e),Gs}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const D2=new Uo(5e3,15e3),M2="__/auth/iframe",U2="emulator/auth/iframe",$2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j2(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ud(t,U2):`https://${e.config.authDomain}/${M2}`,r={apiKey:t.apiKey,appName:e.name,v:hr},i=F2.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Mo(r).slice(1)}`}async function z2(e){const t=await L2(e),n=Ct().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:j2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$2,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Tt(e,"network-request-failed"),a=Ct().setTimeout(()=>{o(s)},D2.get());function l(){Ct().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const B2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V2=500,H2=600,W2="_blank",K2="http://localhost";class Kp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G2(e,t,n,r=V2,i=H2){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B2),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Oe().toLowerCase();n&&(a=zy(u)?W2:n),jy(u)&&(t=t||K2,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(mI(u)&&a!=="_self")return Y2(t||"",a),new Kp(null);const f=window.open(t||"",a,c);N(f,e,"popup-blocked");try{f.focus()}catch{}return new Kp(f)}function Y2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const X2="__/auth/handler",q2="emulator/auth/handler",Q2=encodeURIComponent("fac");async function Gp(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:i};if(t instanceof qy){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",zk(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof $o){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${Q2}=${encodeURIComponent(l)}`:"";return`${J2(e)}?${Mo(a).slice(1)}${u}`}function J2({config:e}){return e.emulator?ud(e,q2):`https://${e.authDomain}/${X2}`}/**
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
 */const yu="webStorageSupport";class Z2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r0,this._completeRedirectFn=S2,this._overrideRedirectResult=_2}async _openPopup(t,n,r,i){var o;Kt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gp(t,n,r,xc(),i);return G2(t,s,pd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Gp(t,n,r,xc(),i);return n2(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await z2(t),r=new T2(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(yu,{type:yu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[yu];s!==void 0&&n(!!s),pt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ky()||fd()||hl()}}const eT=Z2;var Yp="@firebase/auth",Xp="1.7.2";/**
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
 */class tT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(e){sr(new An("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(e)},u=new kI(r,i,o,l);return OI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),sr(new An("auth-internal",t=>{const n=si(t.getProvider("auth").getImmediate());return(r=>new tT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Yp,Xp,nT(e)),It(Yp,Xp,"esm2017")}/**
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
 */const iT=5*60,oT=Ty("authIdTokenMaxAge")||iT;let qp=null;const sT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oT)return;const i=n==null?void 0:n.token;qp!==i&&(qp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function c0(e=sd()){const t=cl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xI(e,{popupRedirectResolver:eT,persistence:[f2,ZI,r0]}),r=Ty("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=sT(o.toString());GI(n,s,()=>s(n.currentUser)),KI(n,a=>s(a))}}const i=ky("auth");return i&&NI(n,`http://${i}`),n}function aT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}SI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Tt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",aT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");var lT="firebase",uT="10.11.1";/**
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
 */It(lT,uT,"app");var cT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,gd=gd||{},b=cT||self;function vl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function jo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function fT(e){return Object.prototype.hasOwnProperty.call(e,wu)&&e[wu]||(e[wu]=++dT)}var wu="closure_uid_"+(1e9*Math.random()>>>0),dT=0;function hT(e,t,n){return e.call.apply(e.bind,arguments)}function pT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ae(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=hT:Ae=pT,Ae.apply(null,arguments)}function ys(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ge(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Mn(){this.s=this.s,this.o=this.o}var mT=0;Mn.prototype.s=!1;Mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mT!=0)&&fT(this)};Mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const f0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Qp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var gT=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};b.addEventListener("test",n,t),b.removeEventListener("test",n,t)}catch{}return e}();function go(e){return/^[\s\xa0]*$/.test(e)}function yl(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return yl().indexOf(e)!=-1}function yd(e){return yd[" "](e),e}yd[" "]=function(){};function vT(e,t){var n=cC;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var yT=yt("Opera"),vo=yt("Trident")||yt("MSIE"),d0=yt("Edge"),bc=d0||vo,h0=yt("Gecko")&&!(yl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),wT=yl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function p0(){var e=b.document;return e?e.documentMode:void 0}e:{var Jp="",_u=function(){var e=yl();if(h0)return/rv:([^\);]+)(\)|;)/.exec(e);if(d0)return/Edge\/([\d\.]+)/.exec(e);if(vo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(wT)return/WebKit\/(\S+)/.exec(e);if(yT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_u&&(Jp=_u?_u[1]:""),vo){var Zp=p0();if(Zp!=null&&Zp>parseFloat(Jp))break e}}b.document&&vo&&p0();function yo(e,t){if(Re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(h0){e:{try{yd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:_T[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&yo.$.h.call(this)}}ge(yo,Re);var _T={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var zo="closure_listenable_"+(1e6*Math.random()|0),ET=0;function kT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ET,this.fa=this.ia=!1}function wl(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function wd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ST(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function m0(e){const t={};for(const n in e)t[n]=e[n];return t}const em="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<em.length;o++)n=em[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _l(e){this.src=e,this.g={},this.h=0}_l.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Dc(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new kT(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function Lc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=f0(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(wl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Dc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var _d="closure_lm_"+(1e6*Math.random()|0),Eu={};function v0(e,t,n,r,i){if(r&&r.once)return w0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)v0(e,t[o],n,r,i);return null}return n=Sd(n),e&&e[zo]?e.O(t,n,jo(r)?!!r.capture:!!r,i):y0(e,t,n,!1,r,i)}function y0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=jo(i)?!!i.capture:!!i,a=kd(e);if(a||(e[_d]=a=new _l(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=IT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)gT||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(E0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IT(){function e(n){return t.call(e.src,e.listener,n)}const t=TT;return e}function w0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)w0(e,t[o],n,r,i);return null}return n=Sd(n),e&&e[zo]?e.P(t,n,jo(r)?!!r.capture:!!r,i):y0(e,t,n,!0,r,i)}function _0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)_0(e,t[o],n,r,i);else r=jo(r)?!!r.capture:!!r,n=Sd(n),e&&e[zo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Dc(o,n,r,i),-1<n&&(wl(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=kd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Dc(t,n,r,i)),(n=-1<e?t[e]:null)&&Ed(n))}function Ed(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[zo])Lc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(E0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=kd(t))?(Lc(n,e),n.h==0&&(n.src=null,t[_d]=null)):wl(e)}}}function E0(e){return e in Eu?Eu[e]:Eu[e]="on"+e}function TT(e,t){if(e.fa)e=!0;else{t=new yo(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ed(e),e=n.call(r,t)}return e}function kd(e){return e=e[_d],e instanceof _l?e:null}var ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sd(e){return typeof e=="function"?e:(e[ku]||(e[ku]=function(t){return e.handleEvent(t)}),e[ku])}function me(){Mn.call(this),this.i=new _l(this),this.S=this,this.J=null}ge(me,Mn);me.prototype[zo]=!0;me.prototype.removeEventListener=function(e,t,n,r){_0(this,e,t,n,r)};function _e(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Re(t,e);else if(t instanceof Re)t.target=t.target||e;else{var i=t;t=new Re(r,e),g0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=ws(s,r,!0,t)&&i}if(s=t.g=e,i=ws(s,r,!0,t)&&i,i=ws(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=ws(s,r,!1,t)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)wl(n[r]);delete e.g[t],e.h--}}this.J=null};me.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};me.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ws(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&Lc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Id=b.JSON.stringify;class CT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function PT(){var e=Td;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class AT{constructor(){this.h=this.g=null}add(t,n){const r=k0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var k0=new CT(()=>new RT,e=>e.reset());class RT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function OT(e){b.setTimeout(()=>{throw e},0)}let wo,_o=!1,Td=new AT,S0=()=>{const e=b.Promise.resolve(void 0);wo=()=>{e.then(NT)}};var NT=()=>{for(var e;e=PT();){try{e.h.call(e.g)}catch(n){OT(n)}var t=k0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_o=!1};function El(e,t){me.call(this),this.h=e||1,this.g=t||b,this.j=Ae(this.qb,this),this.l=Date.now()}ge(El,me);S=El.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(Cd(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}S.N=function(){El.$.N.call(this),Cd(this),delete this.g};function Pd(e,t,n){if(typeof e=="function")n&&(e=Ae(e,n));else if(e&&typeof e.handleEvent=="function")e=Ae(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function I0(e){e.g=Pd(()=>{e.g=null,e.i&&(e.i=!1,I0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class bT extends Mn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:I0(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(e){Mn.call(this),this.h=e,this.g={}}ge(Eo,Mn);var tm=[];function T0(e,t,n,r){Array.isArray(n)||(n&&(tm[0]=n.toString()),n=tm);for(var i=0;i<n.length;i++){var o=v0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function C0(e){wd(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ed(t)},e),e.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),C0(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kl(){this.g=!0}kl.prototype.Ea=function(){this.g=!1};function LT(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function DT(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function xr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+UT(e,n)+(r?" "+r:"")})}function MT(e,t){e.info(function(){return"TIMEOUT: "+t})}kl.prototype.info=function(){};function UT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Id(n)}catch{return t}}var li={},nm=null;function Ad(){return nm=nm||new me}li.Ta="serverreachability";function P0(e){Re.call(this,li.Ta,e)}ge(P0,Re);function ko(e){const t=Ad();_e(t,new P0(t))}li.STAT_EVENT="statevent";function A0(e,t){Re.call(this,li.STAT_EVENT,e),this.stat=t}ge(A0,Re);function be(e){const t=Ad();_e(t,new A0(t,e))}li.Ua="timingevent";function R0(e,t){Re.call(this,li.Ua,e),this.size=t}ge(R0,Re);function Bo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var Rd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$T={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xd(){}xd.prototype.h=null;function rm(e){return e.h||(e.h=e.i())}function FT(){}var Vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Od(){Re.call(this,"d")}ge(Od,Re);function Nd(){Re.call(this,"c")}ge(Nd,Re);var Mc;function Sl(){}ge(Sl,xd);Sl.prototype.g=function(){return new XMLHttpRequest};Sl.prototype.i=function(){return{}};Mc=new Sl;function Ho(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Eo(this),this.P=jT,e=bc?125:void 0,this.V=new El(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new x0}function x0(){this.i=null,this.g="",this.h=!1}var jT=45e3,O0={},Uc={};S=Ho.prototype;S.setTimeout=function(e){this.P=e};function $c(e,t,n){e.L=1,e.A=Tl(Gt(t)),e.u=n,e.S=!0,N0(e,null)}function N0(e,t){e.G=Date.now(),Wo(e),e.B=Gt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),j0(n.i,"t",r),e.o=0,n=e.l.J,e.h=new x0,e.g=a1(e.l,n?t:null,!e.u),0<e.O&&(e.M=new bT(Ae(e.Pa,e,e.g),e.O)),T0(e.U,e.g,"readystatechange",e.nb),t=e.I?m0(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ko(),LT(e.j,e.v,e.B,e.m,e.W,e.u)}S.nb=function(e){e=e.target;const t=this.M;t&&wt(e)==3?t.l():this.Pa(e)};S.Pa=function(e){try{if(e==this.g)e:{const c=wt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||bc||this.g&&(this.h.h||this.g.ja()||am(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?ko(3):ko(2)),Il(this);var n=this.g.da();this.ca=n;t:if(b0(this)){var r=am(this.g);e="";var i=r.length,o=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),Hi(this);var s="";break t}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,DT(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var u=a;break t}}u=null}if(n=u)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fc(this,n);else{this.i=!1,this.s=3,be(12),Kn(this),Hi(this);break e}}this.S?(L0(this,c,s),bc&&this.i&&c==3&&(T0(this.U,this.V,"tick",this.mb),this.V.start())):(xr(this.j,this.m,s,null),Fc(this,s)),c==4&&Kn(this),this.i&&!this.J&&(c==4?r1(this.l,this):(this.i=!1,Wo(this)))}else aC(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),Kn(this),Hi(this)}}}catch{}finally{}};function b0(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function L0(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=zT(e,n),i==Uc){t==4&&(e.s=4,be(14),r=!1),xr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==O0){e.s=4,be(15),xr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else xr(e.j,e.m,i,null),Fc(e,i);b0(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,be(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$d(t),t.M=!0,be(11))):(xr(e.j,e.m,n,"[Invalid Chunked Response]"),Kn(e),Hi(e))}S.mb=function(){if(this.g){var e=wt(this.g),t=this.g.ja();this.o<t.length&&(Il(this),L0(this,e,t),this.i&&e!=4&&Wo(this))}};function zT(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Uc:(n=Number(t.substring(n,r)),isNaN(n)?O0:(r+=1,r+n>t.length?Uc:(t=t.slice(r,r+n),e.o=r+n,t)))}S.cancel=function(){this.J=!0,Kn(this)};function Wo(e){e.Y=Date.now()+e.P,D0(e,e.P)}function D0(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Bo(Ae(e.lb,e),t)}function Il(e){e.C&&(b.clearTimeout(e.C),e.C=null)}S.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(MT(this.j,this.B),this.L!=2&&(ko(),be(17)),Kn(this),this.s=2,Hi(this)):D0(this,this.Y-e)};function Hi(e){e.l.H==0||e.J||r1(e.l,e)}function Kn(e){Il(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Cd(e.V),C0(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Fc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||jc(n.i,e))){if(!e.K&&jc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)La(n),Rl(n);else break e;Ud(n),be(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bo(Ae(n.ib,n),6e3));if(1>=V0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gn(n,11)}else if((e.K||n.g==e)&&La(n),!go(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.i;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(bd(o,o.h),o.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,X(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=s1(r,r.J?r.pa:null,r.Y),s.K){H0(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Il(a),Wo(a)),r.g=s}else t1(r);0<n.j.length&&xl(n)}else u[0]!="stop"&&u[0]!="close"||Gn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gn(n,7):Md(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ko(4)}catch{}}function BT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(vl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function VT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(vl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function M0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(vl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=VT(e),r=BT(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var U0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Zn){this.h=e.h,Na(this,e.j),this.s=e.s,this.g=e.g,ba(this,e.m),this.l=e.l;var t=e.i,n=new So;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),im(this,n),this.o=e.o}else e&&(t=String(e).match(U0))?(this.h=!1,Na(this,t[1]||"",!0),this.s=Oi(t[2]||""),this.g=Oi(t[3]||"",!0),ba(this,t[4]),this.l=Oi(t[5]||"",!0),im(this,t[6]||"",!0),this.o=Oi(t[7]||"")):(this.h=!1,this.i=new So(null,this.h))}Zn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ni(t,om,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ni(t,om,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ni(n,n.charAt(0)=="/"?GT:KT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ni(n,XT)),e.join("")};function Gt(e){return new Zn(e)}function Na(e,t,n){e.j=n?Oi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ba(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function im(e,t,n){t instanceof So?(e.i=t,qT(e.i,e.h)):(n||(t=Ni(t,YT)),e.i=new So(t,e.h))}function X(e,t,n){e.i.set(t,n)}function Tl(e){return X(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Oi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ni(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,WT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function WT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var om=/[#\/\?@]/g,KT=/[#\?:]/g,GT=/[#\?]/g,YT=/[#\?@]/g,XT=/#/g;function So(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Un(e){e.g||(e.g=new Map,e.h=0,e.i&&HT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}S=So.prototype;S.add=function(e,t){Un(this),this.i=null,e=ui(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $0(e,t){Un(e),t=ui(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function F0(e,t){return Un(e),t=ui(e,t),e.g.has(t)}S.forEach=function(e,t){Un(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};S.ta=function(){Un(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};S.Z=function(e){Un(this);let t=[];if(typeof e=="string")F0(this,e)&&(t=t.concat(this.g.get(ui(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};S.set=function(e,t){return Un(this),this.i=null,e=ui(this,e),F0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};S.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function j0(e,t,n){$0(e,t),0<n.length&&(e.i=null,e.g.set(ui(e,t),vd(n)),e.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ui(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qT(e,t){t&&!e.j&&(Un(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($0(this,r),j0(this,i,n))},e)),e.j=t}var QT=class{constructor(e,t){this.g=e,this.map=t}};function z0(e){this.l=e||JT,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JT=10;function B0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function V0(e){return e.h?1:e.g?e.g.size:0}function jc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function bd(e,t){e.g?e.g.add(t):e.h=t}function H0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}z0.prototype.cancel=function(){if(this.i=W0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function W0(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vd(e.i)}var ZT=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function eC(){this.g=new ZT}function tC(e,t,n){const r=n||"";try{M0(e,function(i,o){let s=i;jo(i)&&(s=Id(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function nC(e,t){const n=new kl;if(b.Image){const r=new Image;r.onload=ys(_s,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ys(_s,n,r,"TestLoadImage: error",!1,t),r.onabort=ys(_s,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ys(_s,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function _s(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Cl(e){this.l=e.ec||null,this.j=e.ob||!1}ge(Cl,xd);Cl.prototype.g=function(){return new Pl(this.l,this.j)};Cl.prototype.i=function(e){return function(){return e}}({});function Pl(e,t){me.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ld,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(Pl,me);var Ld=0;S=Pl.prototype;S.open=function(e,t){if(this.readyState!=Ld)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Io(this)};S.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=Ld};S.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;K0(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function K0(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}S.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ko(this):Io(this),this.readyState==3&&K0(this)}};S.Za=function(e){this.g&&(this.response=this.responseText=e,Ko(this))};S.Ya=function(e){this.g&&(this.response=e,Ko(this))};S.ka=function(){this.g&&Ko(this)};function Ko(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Io(e)}S.setRequestHeader=function(e,t){this.v.append(e,t)};S.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Io(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var rC=b.JSON.parse;function se(e){me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=G0,this.L=this.M=!1}ge(se,me);var G0="",iC=/^https?$/i,oC=["POST","PUT"];S=se.prototype;S.Oa=function(e){this.M=e};S.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mc.g(),this.C=this.u?rm(this.u):rm(Mc),this.g.onreadystatechange=Ae(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){sm(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=f0(oC,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{q0(this),0<this.B&&((this.L=sC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.ua,this)):this.A=Pd(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){sm(this,o)}};function sC(e){return vo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}S.ua=function(){typeof gd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function sm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Y0(e),Al(e)}function Y0(e){e.F||(e.F=!0,_e(e,"complete"),_e(e,"error"))}S.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),Al(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),se.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?X0(this):this.kb())};S.kb=function(){X0(this)};function X0(e){if(e.h&&typeof gd<"u"&&(!e.C[1]||wt(e)!=4||e.da()!=2)){if(e.v&&wt(e)==4)Pd(e.La,0,e);else if(_e(e,"readystatechange"),wt(e)==4){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=s===0){var i=String(e.I).match(U0)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!iC.test(i?i.toLowerCase():"")}n=r}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",Y0(e)}}finally{Al(e)}}}}function Al(e,t){if(e.g){q0(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||_e(e,"ready");try{n.onreadystatechange=r}catch{}}}function q0(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}S.isActive=function(){return!!this.g};function wt(e){return e.g?e.g.readyState:0}S.da=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),rC(t)}};function am(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case G0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function aC(e){const t={};e=(e.g&&2<=wt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(go(e[r]))continue;var n=xT(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}ST(t,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Q0(e){let t="";return wd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Dd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Q0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):X(e,t,n))}function Si(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function J0(e){this.Ga=0,this.j=[],this.l=new kl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Si("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Si("baseRetryDelayMs",5e3,e),this.hb=Si("retryDelaySeedMs",1e4,e),this.eb=Si("forwardChannelMaxRetries",2,e),this.xa=Si("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new z0(e&&e.concurrentRequestLimit),this.Ja=new eC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=J0.prototype;S.ra=8;S.H=1;function Md(e){if(Z0(e),e.H==3){var t=e.W++,n=Gt(e.I);if(X(n,"SID",e.K),X(n,"RID",t),X(n,"TYPE","terminate"),Go(e,n),t=new Ho(e,e.l,t),t.L=2,t.A=Tl(Gt(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.A,n=!0),n||(t.g=a1(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Wo(t)}o1(e)}function Rl(e){e.g&&($d(e),e.g.cancel(),e.g=null)}function Z0(e){Rl(e),e.u&&(b.clearTimeout(e.u),e.u=null),La(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function xl(e){if(!B0(e.i)&&!e.m){e.m=!0;var t=e.Na;wo||S0(),_o||(wo(),_o=!0),Td.add(t,e),e.C=0}}function lC(e,t){return V0(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Bo(Ae(e.Na,e,t),i1(e,e.C)),e.C++,!0)}S.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ho(this,this.l,e);let o=this.s;if(this.U&&(o?(o=m0(o),g0(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=e1(this,i,t),n=Gt(this.I),X(n,"RID",e),X(n,"CVER",22),this.F&&X(n,"X-HTTP-Session-Id",this.F),Go(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(Q0(o)))+"&"+t:this.o&&Dd(n,this.o,o)),bd(this.i,i),this.bb&&X(n,"TYPE","init"),this.P?(X(n,"$req",t),X(n,"SID","null"),i.aa=!0,$c(i,n,null)):$c(i,n,t),this.H=2}}else this.H==3&&(e?lm(this,e):this.j.length==0||B0(this.i)||lm(this))};function lm(e,t){var n;t?n=t.m:n=e.W++;const r=Gt(e.I);X(r,"SID",e.K),X(r,"RID",n),X(r,"AID",e.V),Go(e,r),e.o&&e.s&&Dd(r,e.o,e.s),n=new Ho(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=e1(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),bd(e.i,n),$c(n,r,t)}function Go(e,t){e.na&&wd(e.na,function(n,r){X(t,r,n)}),e.h&&M0({},function(n,r){X(t,r,n)})}function e1(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ae(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{tC(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function t1(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;wo||S0(),_o||(wo(),_o=!0),Td.add(t,e),e.A=0}}function Ud(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Bo(Ae(e.Ma,e),i1(e,e.A)),e.A++,!0)}S.Ma=function(){if(this.u=null,n1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Bo(Ae(this.jb,this),e)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,be(10),Rl(this),n1(this))};function $d(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function n1(e){e.g=new Ho(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Gt(e.wa);X(t,"RID","rpc"),X(t,"SID",e.K),X(t,"AID",e.V),X(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&X(t,"TO",e.qa),X(t,"TYPE","xmlhttp"),Go(e,t),e.o&&e.s&&Dd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Tl(Gt(t)),n.u=null,n.S=!0,N0(n,e)}S.ib=function(){this.v!=null&&(this.v=null,Rl(this),Ud(this),be(19))};function La(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function r1(e,t){var n=null;if(e.g==t){La(e),$d(e),e.g=null;var r=2}else if(jc(e.i,t))n=t.F,H0(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Ad(),_e(r,new R0(r,n)),xl(e)}else t1(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&lC(e,t)||r==2&&Ud(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Gn(e,5);break;case 4:Gn(e,10);break;case 3:Gn(e,6);break;default:Gn(e,2)}}}function i1(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Gn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ae(e.pb,e);n||(n=new Zn("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Na(n,"https"),Tl(n)),nC(n.toString(),r)}else be(2);e.H=0,e.h&&e.h.za(t),o1(e),Z0(e)}S.pb=function(e){e?(this.l.info("Successfully pinged google.com"),be(2)):(this.l.info("Failed to ping google.com"),be(1))};function o1(e){if(e.H=0,e.ma=[],e.h){const t=W0(e.i);(t.length!=0||e.j.length!=0)&&(Qp(e.ma,t),Qp(e.ma,e.j),e.i.i.length=0,vd(e.j),e.j.length=0),e.h.ya()}}function s1(e,t,n){var r=n instanceof Zn?Gt(n):new Zn(n);if(r.g!="")t&&(r.g=t+"."+r.g),ba(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Zn(null);r&&Na(o,r),t&&(o.g=t),i&&ba(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&X(r,n,t),X(r,"VER",e.ra),Go(e,r),r}function a1(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new se(new Cl({ob:n})):new se(e.va),t.Oa(e.J),t}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function l1(){}S=l1.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function rt(e,t){me.call(this),this.g=new J0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!go(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!go(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ci(this)}ge(rt,me);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;be(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=s1(e,null,e.Y),xl(e)};rt.prototype.close=function(){Md(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Id(e),e=n);t.j.push(new QT(t.fb++,e)),t.H==3&&xl(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,Md(this.g),delete this.g,rt.$.N.call(this)};function u1(e){Od.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ge(u1,Od);function c1(){Nd.call(this),this.status=1}ge(c1,Nd);function ci(e){this.g=e}ge(ci,l1);ci.prototype.Ba=function(){_e(this.g,"a")};ci.prototype.Aa=function(e){_e(this.g,new u1(e))};ci.prototype.za=function(e){_e(this.g,new c1)};ci.prototype.ya=function(){_e(this.g,"b")};function uC(){this.blockSize=-1}function Pt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Pt,uC);Pt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Su(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Pt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)Su(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){Su(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){Su(this,r),i=0;break}}this.h=i,this.i+=t};Pt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function W(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var cC={};function Fd(e){return-128<=e&&128>e?vT(e,function(t){return new W([t|0],0>t?-1:0)}):new W([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return Vr;if(0>e)return ye(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=zc;return new W(t,0)}function f1(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ye(f1(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=Vr,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=_t(Math.pow(t,o)),r=r.R(o).add(_t(s))):(r=r.R(n),r=r.add(_t(s)))}return r}var zc=4294967296,Vr=Fd(0),Bc=Fd(1),um=Fd(16777216);S=W.prototype;S.ea=function(){if(Je(this))return-ye(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:zc+r)*t,t*=zc}return e};S.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(jt(this))return"0";if(Je(this))return"-"+ye(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var i=Ma(n,t).g;n=Da(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,jt(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};S.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function jt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Je(e){return e.h==-1}S.X=function(e){return e=Da(this,e),Je(e)?-1:jt(e)?0:1};function ye(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new W(n,~e.h).add(Bc)}S.abs=function(){return Je(this)?ye(this):this};S.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new W(n,n[n.length-1]&-2147483648?-1:0)};function Da(e,t){return e.add(ye(t))}S.R=function(e){if(jt(this)||jt(e))return Vr;if(Je(this))return Je(e)?ye(this).R(ye(e)):ye(ye(this).R(e));if(Je(e))return ye(this.R(ye(e)));if(0>this.X(um)&&0>e.X(um))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=s*l,Es(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Es(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Es(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Es(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new W(n,0)};function Es(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ii(e,t){this.g=e,this.h=t}function Ma(e,t){if(jt(t))throw Error("division by zero");if(jt(e))return new Ii(Vr,Vr);if(Je(e))return t=Ma(ye(e),t),new Ii(ye(t.g),ye(t.h));if(Je(t))return t=Ma(e,ye(t)),new Ii(ye(t.g),t.h);if(30<e.g.length){if(Je(e)||Je(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Bc,r=t;0>=r.X(e);)n=cm(n),r=cm(r);var i=gr(n,1),o=gr(r,1);for(r=gr(r,2),n=gr(n,2);!jt(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=gr(r,1),n=gr(n,1)}return t=Da(e,i.R(t)),new Ii(i,t)}for(i=Vr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=_t(n),s=o.R(t);Je(s)||0<s.X(e);)n-=r,o=_t(n),s=o.R(t);jt(o)&&(o=Bc),i=i.add(o),e=Da(e,s)}return new Ii(i,e)}S.gb=function(e){return Ma(this,e).h};S.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new W(n,this.h&e.h)};S.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new W(n,this.h|e.h)};S.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new W(n,this.h^e.h)};function cm(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new W(n,e.h)}function gr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new W(i,e.h)}rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Rd.NO_ERROR=0;Rd.TIMEOUT=8;Rd.HTTP_ERROR=6;$T.COMPLETE="complete";FT.EventType=Vo;Vo.OPEN="a";Vo.CLOSE="b";Vo.ERROR="c";Vo.MESSAGE="d";me.prototype.listen=me.prototype.O;se.prototype.listenOnce=se.prototype.P;se.prototype.getLastError=se.prototype.Sa;se.prototype.getLastErrorCode=se.prototype.Ia;se.prototype.getStatus=se.prototype.da;se.prototype.getResponseJson=se.prototype.Wa;se.prototype.getResponseText=se.prototype.ja;se.prototype.send=se.prototype.ha;se.prototype.setWithCredentials=se.prototype.Oa;Pt.prototype.digest=Pt.prototype.l;Pt.prototype.reset=Pt.prototype.reset;Pt.prototype.update=Pt.prototype.j;W.prototype.add=W.prototype.add;W.prototype.multiply=W.prototype.R;W.prototype.modulo=W.prototype.gb;W.prototype.compare=W.prototype.X;W.prototype.toNumber=W.prototype.ea;W.prototype.toString=W.prototype.toString;W.prototype.getBits=W.prototype.D;W.fromNumber=_t;W.fromString=f1;var fC=W;const fm="@firebase/firestore";/**
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
 */class Ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let Yo="10.11.1";/**
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
 */const ei=new id("@firebase/firestore");function He(e,...t){if(ei.logLevel<=V.DEBUG){const n=t.map(zd);ei.debug(`Firestore (${Yo}): ${e}`,...n)}}function jd(e,...t){if(ei.logLevel<=V.ERROR){const n=t.map(zd);ei.error(`Firestore (${Yo}): ${e}`,...n)}}function dC(e,...t){if(ei.logLevel<=V.WARN){const n=t.map(zd);ei.warn(`Firestore (${Yo}): ${e}`,...n)}}function zd(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Bd(e="Unexpected state"){const t=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+e;throw jd(t),new Error(t)}function Vc(e,t){e||Bd()}/**
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
 */const Ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pe extends Rt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class d1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(t){this.t=t,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Hr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Hr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vc(typeof r.accessToken=="string"),new d1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vc(t===null||typeof t=="string"),new Ie(t)}}class gC{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vC{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new gC(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,He("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vc(typeof n.token=="string"),this.R=n.token,new yC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _C(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class EC{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=_C(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function h1(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class kC{constructor(t,n,r,i,o,s,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ua{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ua&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var dm,j;(j=dm||(dm={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new fC([4294967295,4294967295],0);function Iu(){return typeof document<"u"?document:null}/**
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
 */class SC{constructor(t,n,r=1e3,i=1.5,o=6e4){this.si=t,this.timerId=n,this.Oo=r,this.No=i,this.Lo=o,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&He("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Vd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new Vd(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Pe(Ce.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function IC(e,t){if(jd("AsyncQueue",`${t}: ${e}`),h1(e))return new Pe(Ce.UNAVAILABLE,`${t}: ${e}`);throw e}var hm,pm;(pm=hm||(hm={})).J_="default",pm.Cache="cache";/**
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
 */class TC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=EC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{He("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(He("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pe(Ce.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=IC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function p1(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const mm=new Map;function CC(e,t,n,r){if(t===!0&&r===!0)throw new Pe(Ce.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function PC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Bd()}function AC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pe(Ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PC(e);throw new Pe(Ce.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class gm{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Pe(Ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Pe(Ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}CC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p1((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Pe(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Pe(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Pe(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class m1{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pe(Ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Pe(Ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gm(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hC;switch(r.type){case"firstParty":return new vC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Pe(Ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mm.get(n);r&&(He("ComponentProvider","Removing Datastore"),mm.delete(n),r.terminate())}(this),Promise.resolve()}}function RC(e,t,n,r={}){var i;const o=(e=AC(e,m1))._getSettings(),s=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&dC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ie.MOCK_USER;else{a=Cy(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Pe(Ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ie(u)}e._authCredentials=new pC(new d1(a,l))}}/**
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
 */class xC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new SC(this,"async_queue_retry"),this.hu=()=>{const n=Iu();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const t=Iu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=Iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Hr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!h1(t))throw t;He("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw jd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=Vd.createAndSchedule(this,t,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&Bd()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class OC extends m1{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new xC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NC(this),this._firestoreClient.terminate()}}function g1(e,t){const n=typeof e=="object"?e:sd(),r=typeof e=="string"?e:t||"(default)",i=cl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Sy("firestore");o&&RC(i,...o)}return i}function NC(e){var t,n,r;const i=e._freezeSettings(),o=function(a,l,u,c){return new kC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,p1(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new TC(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){Yo=i})(hr),sr(new An("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new OC(new mC(r.getProvider("auth-internal")),new wC(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Pe(Ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),It(fm,"4.6.1",t),It(fm,"4.6.1","esm2017")})();/**
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
 */const v1="firebasestorage.googleapis.com",bC="storageBucket",LC=2*60*1e3,DC=10*60*1e3;/**
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
 */class Ot extends Rt{constructor(t,n,r=0){super(Tu(t),`Firebase Storage: ${n} (${Tu(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ot.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Tu(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Tu(e){return"storage/"+e}function MC(){const e="An unknown error occurred, please check the error payload for server response.";return new Ot(At.UNKNOWN,e)}function UC(){return new Ot(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $C(){return new Ot(At.CANCELED,"User canceled the upload/download.")}function FC(e){return new Ot(At.INVALID_URL,"Invalid URL '"+e+"'.")}function jC(e){return new Ot(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function vm(e){return new Ot(At.INVALID_ARGUMENT,e)}function y1(){return new Ot(At.APP_DELETED,"The Firebase app was deleted.")}function zC(e){return new Ot(At.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ut{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ut.makeFromUrl(t,n)}catch{return new ut(t,"")}if(r.path==="")return r;throw jC(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},w=n===v1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${_}`,"i"),m=[{regex:a,indices:l,postModify:o},{regex:g,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<m.length;y++){const E=m[y],I=E.regex.exec(t);if(I){const T=I[E.indices.bucket];let x=I[E.indices.path];x||(x=""),r=new ut(T,x),E.postModify(r);break}}if(r==null)throw FC(t);return r}}class BC{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function VC(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,t.apply(null,_))}function f(_){i=setTimeout(()=>{i=null,e(g,l())},_)}function h(){o&&clearTimeout(o)}function g(_,...p){if(u){h();return}if(_){h(),c.call(null,_,...p);return}if(l()||s){h(),c.call(null,_,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,f(m)}let v=!1;function w(_){v||(v=!0,h(),!u&&(i!==null?(_||(a=2),clearTimeout(i),f(0)):_||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,w(!0)},n),w}function HC(e){e(!1)}/**
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
 */function WC(e){return e!==void 0}function ym(e,t,n,r){if(r<t)throw vm(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw vm(`Invalid value for '${e}'. Expected ${n} or less.`)}function KC(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var $a;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})($a||($a={}));/**
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
 */function GC(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class YC{constructor(t,n,r,i,o,s,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ks(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===$a.NO_ERROR,l=o.getStatus();if(!a||GC(l,this.additionalRetryCodes_)&&this.retry){const c=o.getErrorCode()===$a.ABORT;r(!1,new ks(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ks(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WC(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=MC();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?y1():$C();s(l)}else{const l=UC();s(l)}};this.canceled_?n(!1,new ks(!1,null,!0)):this.backoffId_=VC(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&HC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ks{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function XC(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qC(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function QC(e,t){t&&(e["X-Firebase-GMPID"]=t)}function JC(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ZC(e,t,n,r,i,o,s=!0){const a=KC(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return QC(u,t),XC(u,n),qC(u,o),JC(u,r),new YC(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function eP(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function tP(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Fa{constructor(t,n){this._service=t,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Fa(t,n)}get root(){const t=new ut(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tP(this._location.path)}get storage(){return this._service}get parent(){const t=eP(this._location.path);if(t===null)return null;const n=new ut(this._location.bucket,t);return new Fa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw zC(t)}}function wm(e,t){const n=t==null?void 0:t[bC];return n==null?null:ut.makeFromBucketSpec(n,e)}function nP(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Cy(i,e.app.options.projectId))}class rP{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=v1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LC,this._maxUploadRetryTime=DC,this._requests=new Set,i!=null?this._bucket=ut.makeFromBucketSpec(i,this._host):this._bucket=wm(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,t):this._bucket=wm(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ym("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ym("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Fa(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new BC(y1());{const s=ZC(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const _m="@firebase/storage",Em="0.12.4";/**
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
 */const w1="storage";function _1(e=sd(),t){e=xt(e);const r=cl(e,w1).getImmediate({identifier:t}),i=Sy("storage");return i&&iP(r,...i),r}function iP(e,t,n,r={}){nP(e,t,n,r)}function oP(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new rP(n,r,i,t,hr)}function sP(){sr(new An(w1,oP,"PUBLIC").setMultipleInstances(!0)),It(_m,Em,""),It(_m,Em,"esm2017")}sP();const E1={apiKey:"AIzaSyArfalO_S4pTD8kG2vo4iZAG0LLUKOnQHA",authDomain:"monkeymonk-8d654.firebaseapp.com",projectId:"monkeymonk-8d654",storageBucket:"monkeymonk-8d654.appspot.com",messagingSenderId:"1047229573839",appId:"1:1047229573839:web:ec6ec594d218df419de5ba"},aP={apiKey:"AIzaSyCLxGtwrnQIfz9UM4OkCOHNPowfS_CraXk",authDomain:"monkeymonk-admin.firebaseapp.com",projectId:"monkeymonk-admin",storageBucket:"monkeymonk-admin.appspot.com",messagingSenderId:"87062934187",appId:"1:87062934187:web:51c327e332cf5e12fc7dee"},Hd=fl(E1),Wd=fl(aP,"login");c0(Hd);g1(Hd);_1(Hd);const Ys=c0(Wd);g1(Wd);_1(Wd);const lP=C.createContext({}),uP=({children:e})=>{const[t,n]=C.useState({}),r=(o,s)=>Zy(Ys,o,s),i=()=>XI(Ys);return C.useEffect(()=>{const o=YI(Ys,s=>{console.log(s),n(s)});return()=>{o()}},[]),B.jsx(lP.Provider,{value:{user:t,logout:i,signIn:r},children:e})};function km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?km(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ja(e){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ja(e)}function cP(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fP(e,t,n){return t&&Sm(e.prototype,t),n&&Sm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kd(e,t){return hP(e)||mP(e,t)||k1(e,t)||vP()}function Xo(e){return dP(e)||pP(e)||k1(e)||gP()}function dP(e){if(Array.isArray(e))return Hc(e)}function hP(e){if(Array.isArray(e))return e}function pP(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mP(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function k1(e,t){if(e){if(typeof e=="string")return Hc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hc(e,t)}}function Hc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Im=function(){},Gd={},S1={},I1=null,T1={mark:Im,measure:Im};try{typeof window<"u"&&(Gd=window),typeof document<"u"&&(S1=document),typeof MutationObserver<"u"&&(I1=MutationObserver),typeof performance<"u"&&(T1=performance)}catch{}var yP=Gd.navigator||{},Tm=yP.userAgent,Cm=Tm===void 0?"":Tm,Rn=Gd,Q=S1,Pm=I1,Ss=T1;Rn.document;var Jt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",C1=~Cm.indexOf("MSIE")||~Cm.indexOf("Trident/"),Is,Ts,Cs,Ps,As,Yt="___FONT_AWESOME___",Wc=16,P1="fa",A1="svg-inline--fa",lr="data-fa-i2svg",Kc="data-fa-pseudo-element",wP="data-fa-pseudo-element-pending",Yd="data-prefix",Xd="data-icon",Am="fontawesome-i2svg",_P="async",EP=["HTML","HEAD","STYLE","SCRIPT"],R1=function(){try{return!0}catch{return!1}}(),Y="classic",re="sharp",qd=[Y,re];function qo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var To=qo((Is={},fe(Is,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(Is,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Is)),Co=qo((Ts={},fe(Ts,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Ts,re,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ts)),Po=qo((Cs={},fe(Cs,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Cs,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Cs)),kP=qo((Ps={},fe(Ps,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Ps,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ps)),SP=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,x1="fa-layers-text",IP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,TP=qo((As={},fe(As,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(As,re,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),As)),O1=[1,2,3,4,5,6,7,8,9,10],CP=O1.concat([11,12,13,14,15,16,17,18,19,20]),PP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ao=new Set;Object.keys(Co[Y]).map(Ao.add.bind(Ao));Object.keys(Co[re]).map(Ao.add.bind(Ao));var AP=[].concat(qd,Xo(Ao),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(O1.map(function(e){return"".concat(e,"x")})).concat(CP.map(function(e){return"w-".concat(e)})),Wi=Rn.FontAwesomeConfig||{};function RP(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xP(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var OP=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];OP.forEach(function(e){var t=Kd(e,2),n=t[0],r=t[1],i=xP(RP(n));i!=null&&(Wi[r]=i)})}var N1={styleDefault:"solid",familyDefault:"classic",cssPrefix:P1,replacementClass:A1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wi.familyPrefix&&(Wi.cssPrefix=Wi.familyPrefix);var ti=P(P({},N1),Wi);ti.autoReplaceSvg||(ti.observeMutations=!1);var O={};Object.keys(N1).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){ti[e]=n,Ki.forEach(function(r){return r(O)})},get:function(){return ti[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Ki.forEach(function(n){return n(O)})},get:function(){return ti.cssPrefix}});Rn.FontAwesomeConfig=O;var Ki=[];function NP(e){return Ki.push(e),function(){Ki.splice(Ki.indexOf(e),1)}}var tn=Wc,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bP(e){if(!(!e||!Jt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var LP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var e=12,t="";e-- >0;)t+=LP[Math.random()*62|0];return t}function fi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qd(e){return e.classList?fi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function b1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function DP(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(b1(e[n]),'" ')},"").trim()}function Ol(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Jd(e){return e.size!==Et.size||e.x!==Et.x||e.y!==Et.y||e.rotate!==Et.rotate||e.flipX||e.flipY}function MP(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function UP(e){var t=e.transform,n=e.width,r=n===void 0?Wc:n,i=e.height,o=i===void 0?Wc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&C1?l+="translate(".concat(t.x/tn-r/2,"em, ").concat(t.y/tn-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/tn,"em), calc(-50% + ").concat(t.y/tn,"em)) "):l+="translate(".concat(t.x/tn,"em, ").concat(t.y/tn,"em) "),l+="scale(".concat(t.size/tn*(t.flipX?-1:1),", ").concat(t.size/tn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $P=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function L1(){var e=P1,t=A1,n=O.cssPrefix,r=O.replacementClass,i=$P;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Rm=!1;function Cu(){O.autoAddCss&&!Rm&&(bP(L1()),Rm=!0)}var FP={mixout:function(){return{dom:{css:L1,insertCss:Cu}}},hooks:function(){return{beforeDOMElementCreation:function(){Cu()},beforeI2svg:function(){Cu()}}}},Xt=Rn||{};Xt[Yt]||(Xt[Yt]={});Xt[Yt].styles||(Xt[Yt].styles={});Xt[Yt].hooks||(Xt[Yt].hooks={});Xt[Yt].shims||(Xt[Yt].shims=[]);var ct=Xt[Yt],D1=[],jP=function e(){Q.removeEventListener("DOMContentLoaded",e),za=1,D1.map(function(t){return t()})},za=!1;Jt&&(za=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),za||Q.addEventListener("DOMContentLoaded",jP));function zP(e){Jt&&(za?setTimeout(e,0):D1.push(e))}function Qo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?b1(e):"<".concat(t," ").concat(DP(r),">").concat(o.map(Qo).join(""),"</").concat(t,">")}function xm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var BP=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Pu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?BP(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function VP(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Gc(e){var t=VP(e);return t.length===1?t[0].toString(16):null}function HP(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Om(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Om(t);typeof ct.hooks.addPack=="function"&&!i?ct.hooks.addPack(e,Om(t)):ct.styles[e]=P(P({},ct.styles[e]||{}),o),e==="fas"&&Yc("fa",t)}var Rs,xs,Os,Or=ct.styles,WP=ct.shims,KP=(Rs={},fe(Rs,Y,Object.values(Po[Y])),fe(Rs,re,Object.values(Po[re])),Rs),Zd=null,M1={},U1={},$1={},F1={},j1={},GP=(xs={},fe(xs,Y,Object.keys(To[Y])),fe(xs,re,Object.keys(To[re])),xs);function YP(e){return~AP.indexOf(e)}function XP(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!YP(i)?i:null}var z1=function(){var t=function(o){return Pu(Or,function(s,a,l){return s[l]=Pu(a,o,{}),s},{})};M1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),U1=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),j1=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Or||O.autoFetchSvg,r=Pu(WP,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});$1=r.names,F1=r.unicodes,Zd=Nl(O.styleDefault,{family:O.familyDefault})};NP(function(e){Zd=Nl(e.styleDefault,{family:O.familyDefault})});z1();function eh(e,t){return(M1[e]||{})[t]}function qP(e,t){return(U1[e]||{})[t]}function Xn(e,t){return(j1[e]||{})[t]}function B1(e){return $1[e]||{prefix:null,iconName:null}}function QP(e){var t=F1[e],n=eh("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xn(){return Zd}var th=function(){return{prefix:null,iconName:null,rest:[]}};function Nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=To[r][e],o=Co[r][e]||Co[r][i],s=e in ct.styles?e:null;return o||s||null}var Nm=(Os={},fe(Os,Y,Object.keys(Po[Y])),fe(Os,re,Object.keys(Po[re])),Os);function bl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},fe(t,Y,"".concat(O.cssPrefix,"-").concat(Y)),fe(t,re,"".concat(O.cssPrefix,"-").concat(re)),t),s=null,a=Y;(e.includes(o[Y])||e.some(function(u){return Nm[Y].includes(u)}))&&(a=Y),(e.includes(o[re])||e.some(function(u){return Nm[re].includes(u)}))&&(a=re);var l=e.reduce(function(u,c){var f=XP(O.cssPrefix,c);if(Or[c]?(c=KP[a].includes(c)?kP[a][c]:c,s=c,u.prefix=c):GP[a].indexOf(c)>-1?(s=c,u.prefix=Nl(c,{family:a})):f?u.iconName=f:c!==O.replacementClass&&c!==o[Y]&&c!==o[re]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?B1(u.iconName):{},g=Xn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Or.far&&Or.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},th());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===re&&(Or.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=xn()||"fas"),l}var JP=function(){function e(){cP(this,e),this.definitions={}}return fP(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),s[a]),Yc(a,s[a]);var l=Po[Y][a];l&&Yc(l,s[a]),z1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),bm=[],Nr={},Wr={},ZP=Object.keys(Wr);function eA(e,t){var n=t.mixoutsTo;return bm=e,Nr={},Object.keys(Wr).forEach(function(r){ZP.indexOf(r)===-1&&delete Wr[r]}),bm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ja(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Nr[s]||(Nr[s]=[]),Nr[s].push(o[s])})}r.provides&&r.provides(Wr)}),n}function Xc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Nr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nr[e]||[];i.forEach(function(o){o.apply(null,n)})}function qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wr[e]?Wr[e].apply(null,t):void 0}function qc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xn();if(t)return t=Xn(n,t)||t,xm(V1.definitions,n,t)||xm(ct.styles,n,t)}var V1=new JP,tA=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,ur("noAuto")},nA={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jt?(ur("beforeI2svg",t),qt("pseudoElements2svg",t),qt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,zP(function(){iA({autoReplaceSvgRoot:n}),ur("watch",t)})}},rA={icon:function(t){if(t===null)return null;if(ja(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nl(t[0]);return{prefix:r,iconName:Xn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(SP))){var i=bl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xn(),iconName:Xn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=xn();return{prefix:o,iconName:Xn(o,t)||t}}}},Xe={noAuto:tA,config:O,dom:nA,parse:rA,library:V1,findIconDefinition:qc,toHtml:Qo},iA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(ct.styles).length>0||O.autoFetchSvg)&&Jt&&O.autoReplaceSvg&&Xe.dom.i2svg({node:r})};function Ll(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Qo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Jt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function oA(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Jd(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ol(P(P({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function sA(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:s}),children:r}]}]}function nh(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,_=v.height,p=i==="fak",d=[O.replacementClass,o?"".concat(O.cssPrefix,"-").concat(o):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),m={children:[],attributes:P(P({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(_)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/_*16*.0625,"em")}:{};g&&(m.attributes[lr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ro())},children:[l]}),delete m.attributes.title);var E=P(P({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:P(P({},y),f.styles)}),I=r.found&&n.found?qt("generateAbstractMask",E)||{children:[],attributes:{}}:qt("generateAbstractIcon",E)||{children:[],attributes:{}},T=I.children,x=I.attributes;return E.children=T,E.attributes=x,a?sA(E):oA(E)}function Lm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=P(P(P({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[lr]="");var c=P({},s.styles);Jd(i)&&(c.transform=UP({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ol(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function aA(e){var t=e.content,n=e.title,r=e.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ol(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Au=ct.styles;function Qc(e){var t=e[0],n=e[1],r=e.slice(4),i=Kd(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var lA={found:!1,width:512,height:512};function uA(e,t){!R1&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Jc(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=xn()),new Promise(function(r,i){if(qt("missingIconAbstract"),n==="fa"){var o=B1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Au[t]&&Au[t][e]){var s=Au[t][e];return r(Qc(s))}uA(e,t),r(P(P({},lA),{},{icon:O.showMissingIcons&&e?qt("missingIconAbstract")||{}:{}}))})}var Dm=function(){},Zc=O.measurePerformance&&Ss&&Ss.mark&&Ss.measure?Ss:{mark:Dm,measure:Dm},bi='FA "6.5.2"',cA=function(t){return Zc.mark("".concat(bi," ").concat(t," begins")),function(){return H1(t)}},H1=function(t){Zc.mark("".concat(bi," ").concat(t," ends")),Zc.measure("".concat(bi," ").concat(t),"".concat(bi," ").concat(t," begins"),"".concat(bi," ").concat(t," ends"))},rh={begin:cA,end:H1},Xs=function(){};function Mm(e){var t=e.getAttribute?e.getAttribute(lr):null;return typeof t=="string"}function fA(e){var t=e.getAttribute?e.getAttribute(Yd):null,n=e.getAttribute?e.getAttribute(Xd):null;return t&&n}function dA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function hA(){if(O.autoReplaceSvg===!0)return qs.replace;var e=qs[O.autoReplaceSvg];return e||qs.replace}function pA(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function mA(e){return Q.createElement(e)}function W1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pA:mA:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(W1(s,{ceFn:r}))}),i}function gA(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var qs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(W1(i),n)}),n.getAttribute(lr)===null&&O.keepOriginalSource){var r=Q.createComment(gA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qd(n).indexOf(O.replacementClass))return qs.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Qo(a)}).join(`
`);n.setAttribute(lr,""),n.innerHTML=s}};function Um(e){e()}function K1(e,t){var n=typeof t=="function"?t:Xs;if(e.length===0)n();else{var r=Um;O.mutateApproach===_P&&(r=Rn.requestAnimationFrame||Um),r(function(){var i=hA(),o=rh.begin("mutate");e.map(i),o(),n()})}}var ih=!1;function G1(){ih=!0}function ef(){ih=!1}var Ba=null;function $m(e){if(Pm&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Xs:t,r=e.nodeCallback,i=r===void 0?Xs:r,o=e.pseudoElementsCallback,s=o===void 0?Xs:o,a=e.observeMutationsRoot,l=a===void 0?Q:a;Ba=new Pm(function(u){if(!ih){var c=xn();fi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Mm(f.addedNodes[0])&&(O.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Mm(f.target)&&~PP.indexOf(f.attributeName))if(f.attributeName==="class"&&fA(f.target)){var h=bl(Qd(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Yd,g||c),v&&f.target.setAttribute(Xd,v)}else dA(f.target)&&i(f.target)})}}),Jt&&Ba.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vA(){Ba&&Ba.disconnect()}function yA(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function wA(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=bl(Qd(e));return i.prefix||(i.prefix=xn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qP(i.prefix,e.innerText)||eh(i.prefix,Gc(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function _A(e){var t=fi(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Ro()):(t["aria-hidden"]="true",t.focusable="false")),t}function EA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wA(e),r=n.iconName,i=n.prefix,o=n.rest,s=_A(e),a=Xc("parseNodeAttributes",{},e),l=t.styleParser?yA(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var kA=ct.styles;function Y1(e){var t=O.autoReplaceSvg==="nest"?Fm(e,{styleParser:!1}):Fm(e);return~t.extra.classes.indexOf(x1)?qt("generateLayersText",e,t):qt("generateSvgReplacementMutation",e,t)}var On=new Set;qd.map(function(e){On.add("fa-".concat(e))});Object.keys(To[Y]).map(On.add.bind(On));Object.keys(To[re]).map(On.add.bind(On));On=Xo(On);function jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(Am,"-").concat(f))},i=function(f){return n.remove("".concat(Am,"-").concat(f))},o=O.autoFetchSvg?On:qd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(kA));o.includes("fa")||o.push("fa");var s=[".".concat(x1,":not([").concat(lr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(lr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=fi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=rh.begin("onTree"),u=a.reduce(function(c,f){try{var h=Y1(f);h&&c.push(h)}catch(g){R1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){K1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function SA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y1(e).then(function(n){n&&K1([n],t)})}function IA(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:qc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qc(i||{})),e(r,P(P({},n),{},{mask:i}))}}var TA=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Et:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,_=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var E=t.prefix,I=t.iconName,T=t.icon;return Ll(P({type:"icon"},t),function(){return ur("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?d["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||Ro()):(d["aria-hidden"]="true",d.focusable="false")),nh({icons:{main:Qc(T),mask:l?Qc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:I,transform:P(P({},Et),i),symbol:s,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:_}})})}},CA={mixout:function(){return{icon:IA(TA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=jm,n.nodeCallback=SA,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,s=o===void 0?function(){}:o;return jm(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Jc(i,a),c.iconName?Jc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var _=Kd(w,2),p=_[0],d=_[1];g([n,nh({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Ol(a);l.length>0&&(i.style=l);var u;return Jd(s)&&(u=qt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},PA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Ll({type:"layer"},function(){ur("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Xo(o)).join(" ")},children:s}]})}}}},AA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ll({type:"counter",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),aA({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Xo(a))}})})}}}},RA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Et:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Ll({type:"text",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),Lm({content:n,transform:P(P({},Et),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Xo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(C1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Lm({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},xA=new RegExp('"',"ug"),zm=[1105920,1112319];function OA(e){var t=e.replace(xA,""),n=HP(t,0),r=n>=zm[0]&&n<=zm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Gc(i?t[0]:t),isSecondary:r||i}}function Bm(e,t){var n="".concat(wP).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=fi(e.children),s=o.filter(function(T){return T.getAttribute(Kc)===t})[0],a=Rn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(IP),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?re:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Co[h][l[2].toLowerCase()]:TP[h][u],v=OA(f),w=v.value,_=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=eh(g,w),m=d;if(p){var y=QP(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!_&&(!s||s.getAttribute(Yd)!==g||s.getAttribute(Xd)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var E=EA(),I=E.extra;I.attributes[Kc]=t,Jc(d,g).then(function(T){var x=nh(P(P({},E),{},{icons:{main:T,mask:th()},prefix:g,iconName:m,extra:I,watchable:!0})),F=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=x.map(function(D){return Qo(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function NA(e){return Promise.all([Bm(e,"::before"),Bm(e,"::after")])}function bA(e){return e.parentNode!==document.head&&!~EP.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vm(e){if(Jt)return new Promise(function(t,n){var r=fi(e.querySelectorAll("*")).filter(bA).map(NA),i=rh.begin("searchPseudoElements");G1(),Promise.all(r).then(function(){i(),ef(),t()}).catch(function(){i(),ef(),n()})})}var LA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;O.searchPseudoElements&&Vm(i)}}},Hm=!1,DA={mixout:function(){return{dom:{unwatch:function(){G1(),Hm=!0}}}},hooks:function(){return{bootstrap:function(){$m(Xc("mutationObserverCallbacks",{}))},noAuto:function(){vA()},watch:function(n){var r=n.observeMutationsRoot;Hm?ef():$m(Xc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},MA={mixout:function(){return{parse:{transform:function(n){return Wm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Wm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},Ru={x:0,y:0,width:"100%",height:"100%"};function Km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function UA(e){return e.tag==="g"?e.children:[e]}var $A={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?bl(i.split(" ").map(function(s){return s.trim()})):th();return o.prefix||(o.prefix=xn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,g=MP({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:P(P({},Ru),{},{fill:"white"})},w=c.children?{children:c.children.map(Km)}:{},_={tag:"g",attributes:P({},g.inner),children:[Km(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},w))]},p={tag:"g",attributes:P({},g.outer),children:[_]},d="mask-".concat(a||Ro()),m="clip-".concat(a||Ro()),y={tag:"mask",attributes:P(P({},Ru),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:UA(h)},y]};return r.push(E,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Ru)}),{children:r,attributes:i}}}},FA={provides:function(t){var n=!1;Rn.matchMedia&&(n=Rn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=P(P({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},zA=[FP,CA,PA,AA,RA,LA,DA,MA,$A,FA,jA];eA(zA,{mixoutsTo:Xe});Xe.noAuto;Xe.config;Xe.library;Xe.dom;var tf=Xe.parse;Xe.findIconDefinition;Xe.toHtml;var BA=Xe.icon;Xe.layer;Xe.text;Xe.counter;var X1={exports:{}},VA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HA=VA,WA=HA;function q1(){}function Q1(){}Q1.resetWarningCache=q1;var KA=function(){function e(r,i,o,s,a,l){if(l!==WA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Q1,resetWarningCache:q1};return n.PropTypes=n,n};X1.exports=KA();var GA=X1.exports;const U=Xm(GA);function Gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gm(Object(n),!0).forEach(function(r){br(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Va(e){"@babel/helpers - typeof";return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Va(e)}function br(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function XA(e,t){if(e==null)return{};var n=YA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nf(e){return qA(e)||QA(e)||JA(e)||ZA()}function qA(e){if(Array.isArray(e))return rf(e)}function QA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function JA(e,t){if(e){if(typeof e=="string")return rf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rf(e,t)}}function rf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eR(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,_=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},br(t,"fa-".concat(p),typeof p<"u"&&p!==null),br(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),br(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),br(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(E){return y[E]?E:null}).filter(function(E){return E})}function tR(e){return e=e-0,e===e}function J1(e){return tR(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var nR=["style"];function rR(e){return e.charAt(0).toUpperCase()+e.slice(1)}function iR(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=J1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[rR(i)]=o:t[i]=o,t},{})}function Z1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Z1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=iR(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[J1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=XA(n,nR);return i.attrs.style=pn(pn({},i.attrs.style),s),e.apply(void 0,[t.tag,pn(pn({},i.attrs),a)].concat(nf(r)))}var ew=!1;try{ew=!0}catch{}function oR(){if(!ew&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ym(e){if(e&&Va(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tf.icon)return tf.icon(e);if(e===null)return null;if(e&&Va(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?br({},e,t):{}}var Dl=Wa.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Ym(n),c=xu("classes",[].concat(nf(eR(e)),nf(o.split(" ")))),f=xu("transform",typeof e.transform=="string"?tf.transform(e.transform):e.transform),h=xu("mask",Ym(r)),g=BA(u,pn(pn(pn(pn({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return oR("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(_){Dl.defaultProps.hasOwnProperty(_)||(w[_]=e[_])}),sR(v[0],w)});Dl.displayName="FontAwesomeIcon";Dl.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};Dl.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sR=Z1.bind(null,Wa.createElement),aR={exports:{}};(function(e,t){(function(n,r){r()})(pi,function(){function n(u,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,c,f){var h=new XMLHttpRequest;h.open("GET",u),h.responseType="blob",h.onload=function(){l(h.response,c,f)},h.onerror=function(){console.error("could not download file")},h.send()}function i(u){var c=new XMLHttpRequest;c.open("HEAD",u,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function o(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(c)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof pi=="object"&&pi.global===pi?pi:void 0,a=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(u,c,f){var h=s.URL||s.webkitURL,g=document.createElement("a");c=c||u.name||"download",g.download=c,g.rel="noopener",typeof u=="string"?(g.href=u,g.origin===location.origin?o(g):i(g.href)?r(u,c,f):o(g,g.target="_blank")):(g.href=h.createObjectURL(u),setTimeout(function(){h.revokeObjectURL(g.href)},4e4),setTimeout(function(){o(g)},0))}:"msSaveOrOpenBlob"in navigator?function(u,c,f){if(c=c||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,f),c);else if(i(u))r(u,c,f);else{var h=document.createElement("a");h.href=u,h.target="_blank",setTimeout(function(){o(h)})}}:function(u,c,f,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof u=="string")return r(u,c,f);var g=u.type==="application/octet-stream",v=/constructor/i.test(s.HTMLElement)||s.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||g&&v||a)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var m=_.result;m=w?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=m:location=m,h=null},_.readAsDataURL(u)}else{var p=s.URL||s.webkitURL,d=p.createObjectURL(u);h?h.location=d:location.href=d,h=null,setTimeout(function(){p.revokeObjectURL(d)},4e4)}});s.saveAs=l.saveAs=l,e.exports=l})})(aR);const lR=()=>{const e=ik(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,s]=C.useState(""),a=async()=>{try{await Zy(Ys,t,r),e("/")}catch(l){s("Failed to sign in"),console.error("Error signing in:",l)}};return B.jsx("div",{className:"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12",children:B.jsxs("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto",children:[B.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-meta-6 to-meta-1 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),B.jsx("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:B.jsxs("div",{className:"max-w-md mx-auto",children:[B.jsx("div",{className:"my-5",children:B.jsx("h1",{className:"text-3xl text-center",children:"MonkeyMonk Admin"})}),B.jsx("div",{children:B.jsx("h1",{className:"text-2xl font-semibold",children:"Login"})}),B.jsx("div",{className:"divide-y divide-gray-200",children:B.jsxs("div",{className:"py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7",children:[B.jsxs("div",{className:"relative",children:[B.jsx("input",{id:"email",name:"email",type:"text",value:t,onChange:l=>n(l.target.value),className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Email address"}),B.jsx("label",{htmlFor:"email",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Email Address"})]}),B.jsxs("div",{className:"relative",children:[B.jsx("input",{autoComplete:"off",id:"password",name:"password",type:"password",value:r,onChange:l=>i(l.target.value),className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password"}),B.jsx("label",{htmlFor:"password",className:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Password"})]}),B.jsx("div",{className:"relative",children:B.jsx("button",{onClick:a,className:"bg-meta-6 text-white rounded-md px-2 py-1",children:"Submit"})}),o&&B.jsx("p",{className:"text-red-500",children:o})]})})]})})]})})};function uR(){const[e,t]=C.useState(!0),{pathname:n}=nd();return C.useEffect(()=>{window.scrollTo(0,0)},[n]),C.useEffect(()=>{setTimeout(()=>t(!1),1e3)},[]),B.jsx(B.Fragment,{children:B.jsx(kk,{basename:{}.PUBLIC_URL,children:B.jsx(wk,{children:B.jsx(vy,{path:{}.PUBLIC_URL+"/login",element:B.jsx(lR,{})})})})})}fl(E1);Ou.createRoot(document.getElementById("root")).render(B.jsx(Wa.StrictMode,{children:B.jsx(Sk,{children:B.jsx(uP,{children:B.jsx(uR,{})})})}));
