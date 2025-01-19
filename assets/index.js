(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var fc={exports:{}},Ro={},dc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function z_(){if(vp)return ct;vp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function v(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||y}v.prototype.isReactComponent={},v.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||y}var L=I.prototype=new g;L.constructor=I,T(L,v.prototype),L.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Y(U,ne,Ie){var Z,he={},ye=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(ye=""+ne.key),ne)G.call(ne,Z)&&!F.hasOwnProperty(Z)&&(he[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)he.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];he.children=Ue}if(U&&U.defaultProps)for(Z in Te=U.defaultProps,Te)he[Z]===void 0&&(he[Z]=Te[Z]);return{$$typeof:o,type:U,key:ye,ref:ve,props:he,_owner:B.current}}function P(U,ne){return{$$typeof:o,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function z(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return ne[Ie]})}var le=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ne.toString(36)}function ue(U,ne,Ie,Z,he){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(ye){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case o:case e:ve=!0}}if(ve)return ve=U,he=he(ve),U=Z===""?"."+te(ve,0):Z,C(he)?(Ie="",U!=null&&(Ie=U.replace(le,"$&/")+"/"),ue(he,ne,Ie,"",function(Ze){return Ze})):he!=null&&(R(he)&&(he=P(he,Ie+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+U)),ne.push(he)),1;if(ve=0,Z=Z===""?".":Z+":",C(U))for(var Te=0;Te<U.length;Te++){ye=U[Te];var Ue=Z+te(ye,Te);ve+=ue(ye,ne,Ie,Ue,he)}else if(Ue=x(U),typeof Ue=="function")for(U=Ue.call(U),Te=0;!(ye=U.next()).done;)ye=ye.value,Ue=Z+te(ye,Te++),ve+=ue(ye,ne,Ie,Ue,he);else if(ye==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function fe(U,ne,Ie){if(U==null)return U;var Z=[],he=0;return ue(U,Z,"","",function(ye){return ne.call(Ie,ye,he++)}),Z}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var re={current:null},k={transition:null},ae={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function ie(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:fe,forEach:function(U,ne,Ie){fe(U,function(){ne.apply(this,arguments)},Ie)},count:function(U){var ne=0;return fe(U,function(){ne++}),ne},toArray:function(U){return fe(U,function(ne){return ne})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ct.Component=v,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=ie,ct.cloneElement=function(U,ne,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=T({},U.props),he=U.key,ye=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(ye=ne.ref,ve=B.current),ne.key!==void 0&&(he=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ue in ne)G.call(ne,Ue)&&!F.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:o,type:U.type,key:he,ref:ye,props:Z,_owner:ve}},ct.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ct.createElement=Y,ct.createFactory=function(U){var ne=Y.bind(null,U);return ne.type=U,ne},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=R,ct.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},ct.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ct.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},ct.unstable_act=ie,ct.useCallback=function(U,ne){return re.current.useCallback(U,ne)},ct.useContext=function(U){return re.current.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U){return re.current.useDeferredValue(U)},ct.useEffect=function(U,ne){return re.current.useEffect(U,ne)},ct.useId=function(){return re.current.useId()},ct.useImperativeHandle=function(U,ne,Ie){return re.current.useImperativeHandle(U,ne,Ie)},ct.useInsertionEffect=function(U,ne){return re.current.useInsertionEffect(U,ne)},ct.useLayoutEffect=function(U,ne){return re.current.useLayoutEffect(U,ne)},ct.useMemo=function(U,ne){return re.current.useMemo(U,ne)},ct.useReducer=function(U,ne,Ie){return re.current.useReducer(U,ne,Ie)},ct.useRef=function(U){return re.current.useRef(U)},ct.useState=function(U){return re.current.useState(U)},ct.useSyncExternalStore=function(U,ne,Ie){return re.current.useSyncExternalStore(U,ne,Ie)},ct.useTransition=function(){return re.current.useTransition()},ct.version="18.3.1",ct}var xp;function zf(){return xp||(xp=1,dc.exports=z_()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function H_(){if(Sp)return Ro;Sp=1;var o=zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,S={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(S[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:y,props:S,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=f,Ro.jsxs=f,Ro}var yp;function V_(){return yp||(yp=1,fc.exports=H_()),fc.exports}var Tt=V_(),ii=zf(),ja={},hc={exports:{}},Pn={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function G_(){return Mp||(Mp=1,function(o){function e(k,ae){var ie=k.length;k.push(ae);e:for(;0<ie;){var U=ie-1>>>1,ne=k[U];if(0<a(ne,ae))k[U]=ae,k[ie]=ne,ie=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],ie=k.pop();if(ie!==ae){k[0]=ie;e:for(var U=0,ne=k.length,Ie=ne>>>1;U<Ie;){var Z=2*(U+1)-1,he=k[Z],ye=Z+1,ve=k[ye];if(0>a(he,ie))ye<ne&&0>a(ve,he)?(k[U]=ve,k[ye]=ie,U=ye):(k[U]=he,k[Z]=ie,U=Z);else if(ye<ne&&0>a(ve,ie))k[U]=ve,k[ye]=ie,U=ye;else break e}}return ae}function a(k,ae){var ie=k.sortIndex-ae.sortIndex;return ie!==0?ie:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,S=null,x=3,y=!1,T=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=k)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(k){if(w=!1,L(k),!T)if(n(p)!==null)T=!0,oe(G);else{var ae=n(m);ae!==null&&re(C,ae.startTime-k)}}function G(k,ae){T=!1,w&&(w=!1,g(Y),Y=-1),y=!0;var ie=x;try{for(L(ae),S=n(p);S!==null&&(!(S.expirationTime>ae)||k&&!z());){var U=S.callback;if(typeof U=="function"){S.callback=null,x=S.priorityLevel;var ne=U(S.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?S.callback=ne:S===n(p)&&r(p),L(ae)}else r(p);S=n(p)}if(S!==null)var Ie=!0;else{var Z=n(m);Z!==null&&re(C,Z.startTime-ae),Ie=!1}return Ie}finally{S=null,x=ie,y=!1}}var B=!1,F=null,Y=-1,P=5,R=-1;function z(){return!(o.unstable_now()-R<P)}function le(){if(F!==null){var k=o.unstable_now();R=k;var ae=!0;try{ae=F(!0,k)}finally{ae?te():(B=!1,F=null)}}else B=!1}var te;if(typeof I=="function")te=function(){I(le)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=le,te=function(){fe.postMessage(null)}}else te=function(){v(le,0)};function oe(k){F=k,B||(B=!0,te())}function re(k,ae){Y=v(function(){k(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){T||y||(T=!0,oe(G))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var ie=x;x=ae;try{return k()}finally{x=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ie=x;x=k;try{return ae()}finally{x=ie}},o.unstable_scheduleCallback=function(k,ae,ie){var U=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ie+ne,k={id:_++,callback:ae,priorityLevel:k,startTime:ie,expirationTime:ne,sortIndex:-1},ie>U?(k.sortIndex=ie,e(m,k),n(p)===null&&k===n(m)&&(w?(g(Y),Y=-1):w=!0,re(C,ie-U))):(k.sortIndex=ne,e(p,k),T||y||(T=!0,oe(G))),k},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(k){var ae=x;return function(){var ie=x;x=ae;try{return k.apply(this,arguments)}finally{x=ie}}}}(mc)),mc}var Ep;function W_(){return Ep||(Ep=1,pc.exports=G_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function X_(){if(Tp)return Pn;Tp=1;var o=zf(),e=W_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function x(t){return p.call(S,t)?!0:p.call(_,t)?!1:m.test(t)?S[t]=!0:(_[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ie=!1;function Z(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var N=`
`+c[M].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=M&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ne(t):""}function he(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case B:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Ze(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var s=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function _n(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function lt(t,i){ft(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,s):i.hasOwnProperty("defaultValue")&&At(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function At(t,i,s){(i!=="number"||bt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,se=null,de=null;function be(t){if(t=fo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),Ae(t.stateNode,t.type,i))}}function Pe(t){se?de?de.push(t):de=[t]:se=t}function it(){if(se){var t=se,i=de;if(de=se=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function qt(){}var _t=!1;function En(t,i,s){if(_t)return t(i,s);_t=!0;try{return Dt(t,i,s)}finally{_t=!1,(se!==null||de!==null)&&(qt(),it())}}function vn(t,i){var s=t.stateNode;if(s===null)return null;var l=ua(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Kr=!1;if(d)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Kr=!1}function Si(t,i,s,l,c,h,M,D,N){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(_e){this.onError(_e)}}var yi=!1,Mr=null,Er=!1,Gi=null,Ho={onError:function(t){yi=!0,Mr=t}};function Zr(t,i,s,l,c,h,M,D,N){yi=!1,Mr=null,Si.apply(Ho,arguments)}function Vo(t,i,s,l,c,h,M,D,N){if(Zr.apply(this,arguments),yi){if(yi){var J=Mr;yi=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,Gi=J)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Go(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Wo(t){if(ui(t)!==t)throw Error(n(188))}function Il(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Wo(c),t;if(h===l)return Wo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===s){M=!0,s=c,l=h;break}if(D===l){M=!0,l=c,s=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===s){M=!0,s=h,l=c;break}if(D===l){M=!0,l=h,s=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Xo(t){return t=Il(t),t!==null?Yo(t):null}function Yo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Yo(t);if(i!==null)return i;t=t.sibling}return null}var qo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,Q=e.unstable_requestPaint,j=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function pt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:gt,zt=Math.log,Nt=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(zt(t)/Nt|0)|0}var qe=64,Ht=4194304;function ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var D=M&~c;D!==0?l=ht(D):(h&=M,h!==0&&(l=ht(h)))}else M=s&~c,M!==0?l=ht(M):h!==0&&(l=ht(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-rt(i),c=1<<s,l|=t[s],i&=~c;return l}function Wi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-rt(h),D=1<<M,N=c[M];N===-1?(!(D&s)||D&l)&&(c[M]=Wi(D,i)):N<=i&&(t.expiredLanes|=D),h&=~D}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pt(){var t=qe;return qe<<=1,!(qe&4194240)&&(qe=64),t}function cn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=s}function sn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-rt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Jt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-rt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var vt=0;function ci(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zf,Nl,Qf,Jf,ed,Fl=!1,jo=[],Xi=null,Yi=null,qi=null,$s=new Map,Ks=new Map,ji=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=fo(i),i!==null&&Nl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function cg(t,i,s,l,c){switch(i){case"focusin":return Xi=Zs(Xi,t,i,s,l,c),!0;case"dragenter":return Yi=Zs(Yi,t,i,s,l,c),!0;case"mouseover":return qi=Zs(qi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return $s.set(h,Zs($s.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Ks.set(h,Zs(Ks.get(h)||null,t,i,s,l,c)),!0}return!1}function nd(t){var i=Tr(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=Go(s),i!==null){t.blockedOn=i,ed(t.priority,function(){Qf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=fo(s),i!==null&&Nl(i),t.blockedOn=s,!1;i.shift()}return!0}function id(t,i,s){$o(t)&&s.delete(i)}function fg(){Fl=!1,Xi!==null&&$o(Xi)&&(Xi=null),Yi!==null&&$o(Yi)&&(Yi=null),qi!==null&&$o(qi)&&(qi=null),$s.forEach(id),Ks.forEach(id)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fg)))}function Js(t){function i(c){return Qs(c,t)}if(0<jo.length){Qs(jo[0],t);for(var s=1;s<jo.length;s++){var l=jo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Qs(Xi,t),Yi!==null&&Qs(Yi,t),qi!==null&&Qs(qi,t),$s.forEach(i),Ks.forEach(i),s=0;s<ji.length;s++)l=ji[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(s=ji[0],s.blockedOn===null);)nd(s),s.blockedOn===null&&ji.shift()}var Qr=C.ReactCurrentBatchConfig,Ko=!0;function dg(t,i,s,l){var c=vt,h=Qr.transition;Qr.transition=null;try{vt=1,Ol(t,i,s,l)}finally{vt=c,Qr.transition=h}}function hg(t,i,s,l){var c=vt,h=Qr.transition;Qr.transition=null;try{vt=4,Ol(t,i,s,l)}finally{vt=c,Qr.transition=h}}function Ol(t,i,s,l){if(Ko){var c=Bl(t,i,s,l);if(c===null)tu(t,i,l,Zo,s),td(t,l);else if(cg(c,t,i,s,l))l.stopPropagation();else if(td(t,l),i&4&&-1<ug.indexOf(t)){for(;c!==null;){var h=fo(c);if(h!==null&&Zf(h),h=Bl(t,i,s,l),h===null&&tu(t,i,l,Zo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else tu(t,i,l,null,s)}}var Zo=null;function Bl(t,i,s,l){if(Zo=null,t=V(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Go(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zo=t,null}function rd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Se:return 1;case Re:return 4;case Le:case ke:return 16;case et:return 536870912;default:return 16}default:return 16}}var $i=null,kl=null,Qo=null;function sd(){if(Qo)return Qo;var t,i=kl,s=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Qo=c.slice(t,1<l?1-l:void 0)}function Jo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function od(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ea:od,this.isPropagationStopped=od,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Un(Jr),eo=ie({},Jr,{view:0,detail:0}),pg=Un(eo),Hl,Vl,to,ta=ie({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Hl=t.screenX-to.screenX,Vl=t.screenY-to.screenY):Vl=Hl=0,to=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),ad=Un(ta),mg=ie({},ta,{dataTransfer:0}),gg=Un(mg),_g=ie({},eo,{relatedTarget:0}),Gl=Un(_g),vg=ie({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=Un(vg),Sg=ie({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yg=Un(Sg),Mg=ie({},Jr,{data:0}),ld=Un(Mg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ag(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wg[t])?!!i[t]:!1}function Wl(){return Ag}var Rg=ie({},eo,{key:function(t){if(t.key){var i=Eg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cg=Un(Rg),Pg=ie({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=Un(Pg),bg=ie({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Lg=Un(bg),Dg=ie({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ug=Un(Dg),Ig=ie({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=Un(Ig),Fg=[9,13,27,32],Xl=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var Og=d&&"TextEvent"in window&&!no,cd=d&&(!Xl||no&&8<no&&11>=no),fd=" ",dd=!1;function hd(t,i){switch(t){case"keyup":return Fg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Bg(t,i){switch(t){case"compositionend":return pd(i);case"keypress":return i.which!==32?null:(dd=!0,fd);case"textInput":return t=i.data,t===fd&&dd?null:t;default:return null}}function kg(t,i){if(es)return t==="compositionend"||!Xl&&hd(t,i)?(t=sd(),Qo=kl=$i=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cd&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zg[t.type]:i==="textarea"}function gd(t,i,s,l){Pe(l),i=oa(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var io=null,ro=null;function Hg(t){Id(t,0)}function na(t){var i=ss(t);if(dt(i))return t}function Vg(t,i){if(t==="change")return i}var _d=!1;if(d){var Yl;if(d){var ql="oninput"in document;if(!ql){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),ql=typeof vd.oninput=="function"}Yl=ql}else Yl=!1;_d=Yl&&(!document.documentMode||9<document.documentMode)}function xd(){io&&(io.detachEvent("onpropertychange",Sd),ro=io=null)}function Sd(t){if(t.propertyName==="value"&&na(ro)){var i=[];gd(i,ro,t,V(t)),En(Hg,i)}}function Gg(t,i,s){t==="focusin"?(xd(),io=i,ro=s,io.attachEvent("onpropertychange",Sd)):t==="focusout"&&xd()}function Wg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(ro)}function Xg(t,i){if(t==="click")return na(i)}function Yg(t,i){if(t==="input"||t==="change")return na(i)}function qg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:qg;function so(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!jn(t[c],i[c]))return!1}return!0}function yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Md(t,i){var s=yd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=yd(s)}}function Ed(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ed(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Td(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bt(t.document)}return i}function jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function jg(t){var i=Td(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ed(s.ownerDocument.documentElement,s)){if(l!==null&&jl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Md(s,h);var M=Md(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $g=d&&"documentMode"in document&&11>=document.documentMode,ts=null,$l=null,oo=null,Kl=!1;function wd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Kl||ts==null||ts!==bt(l)||(l=ts,"selectionStart"in l&&jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=oa($l,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ts)))}function ia(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ns={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Zl={},Ad={};d&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ra(t){if(Zl[t])return Zl[t];if(!ns[t])return t;var i=ns[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ad)return Zl[t]=i[s];return t}var Rd=ra("animationend"),Cd=ra("animationiteration"),Pd=ra("animationstart"),bd=ra("transitionend"),Ld=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Ld.set(t,i),u(i,[t])}for(var Ql=0;Ql<Dd.length;Ql++){var Jl=Dd[Ql],Kg=Jl.toLowerCase(),Zg=Jl[0].toUpperCase()+Jl.slice(1);Ki(Kg,"on"+Zg)}Ki(Rd,"onAnimationEnd"),Ki(Cd,"onAnimationIteration"),Ki(Pd,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(bd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Ud(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Vo(l,i,void 0,t),t.currentTarget=null}function Id(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],N=D.instance,J=D.currentTarget;if(D=D.listener,N!==h&&c.isPropagationStopped())break e;Ud(c,D,J),h=N}else for(M=0;M<l.length;M++){if(D=l[M],N=D.instance,J=D.currentTarget,D=D.listener,N!==h&&c.isPropagationStopped())break e;Ud(c,D,J),h=N}}}if(Er)throw t=Gi,Er=!1,Gi=null,t}function Ut(t,i){var s=i[au];s===void 0&&(s=i[au]=new Set);var l=t+"__bubble";s.has(l)||(Nd(i,t,2,!1),s.add(l))}function eu(t,i,s){var l=0;i&&(l|=4),Nd(s,t,l,i)}var sa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[sa]){t[sa]=!0,r.forEach(function(s){s!=="selectionchange"&&(Qg.has(s)||eu(s,!1,t),eu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[sa]||(i[sa]=!0,eu("selectionchange",!1,i))}}function Nd(t,i,s,l){switch(rd(i)){case 1:var c=dg;break;case 4:c=hg;break;default:c=Ol}s=c.bind(null,i,s,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function tu(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var N=M.tag;if((N===3||N===4)&&(N=M.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(N=M.tag,N===5||N===6){l=h=M;continue e}D=D.parentNode}}l=l.return}En(function(){var J=h,_e=V(s),xe=[];e:{var me=Ld.get(t);if(me!==void 0){var De=zl,ze=t;switch(t){case"keypress":if(Jo(s)===0)break e;case"keydown":case"keyup":De=Cg;break;case"focusin":ze="focus",De=Gl;break;case"focusout":ze="blur",De=Gl;break;case"beforeblur":case"afterblur":De=Gl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Lg;break;case Rd:case Cd:case Pd:De=xg;break;case bd:De=Ug;break;case"scroll":De=pg;break;case"wheel":De=Ng;break;case"copy":case"cut":case"paste":De=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=ud}var Ve=(i&4)!==0,Wt=!Ve&&t==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=J,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=vn(H,q),Ee!=null&&Ve.push(uo(H,Ee,$)))),Wt)break;H=H.return}0<Ve.length&&(me=new De(me,ze,null,s,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==Et&&(ze=s.relatedTarget||s.fromElement)&&(Tr(ze)||ze[Ei]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ze=s.relatedTarget||s.toElement,De=J,ze=ze?Tr(ze):null,ze!==null&&(Wt=ui(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=J),De!==ze)){if(Ve=ad,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=ud,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),Wt=De==null?me:ss(De),$=ze==null?me:ss(ze),me=new Ve(Ee,H+"leave",De,s,_e),me.target=Wt,me.relatedTarget=$,Ee=null,Tr(_e)===J&&(Ve=new Ve(q,H+"enter",ze,s,_e),Ve.target=$,Ve.relatedTarget=Wt,Ee=Ve),Wt=Ee,De&&ze)t:{for(Ve=De,q=ze,H=0,$=Ve;$;$=is($))H++;for($=0,Ee=q;Ee;Ee=is(Ee))$++;for(;0<H-$;)Ve=is(Ve),H--;for(;0<$-H;)q=is(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=is(Ve),q=is(q)}Ve=null}else Ve=null;De!==null&&Fd(xe,me,De,Ve,!1),ze!==null&&Wt!==null&&Fd(xe,Wt,ze,Ve,!0)}}e:{if(me=J?ss(J):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=Vg;else if(md(me))if(_d)Xe=Yg;else{Xe=Wg;var $e=Gg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Xg);if(Xe&&(Xe=Xe(t,J))){gd(xe,Xe,s,_e);break e}$e&&$e(t,me,J),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&At(me,"number",me.value)}switch($e=J?ss(J):window,t){case"focusin":(md($e)||$e.contentEditable==="true")&&(ts=$e,$l=J,oo=null);break;case"focusout":oo=$l=ts=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,wd(xe,s,_e);break;case"selectionchange":if($g)break;case"keydown":case"keyup":wd(xe,s,_e)}var Ke;if(Xl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else es?hd(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(cd&&s.locale!=="ko"&&(es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&es&&(Ke=sd()):($i=_e,kl="value"in $i?$i.value:$i.textContent,es=!0)),$e=oa(J,tt),0<$e.length&&(tt=new ld(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=pd(s),Ke!==null&&(tt.data=Ke)))),(Ke=Og?Bg(t,s):kg(t,s))&&(J=oa(J,"onBeforeInput"),0<J.length&&(_e=new ld("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:J}),_e.data=Ke))}Id(xe,i)})}function uo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function oa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vn(t,s),h!=null&&l.unshift(uo(t,h,c)),h=vn(t,i),h!=null&&l.push(uo(t,h,c))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var D=s,N=D.alternate,J=D.stateNode;if(N!==null&&N===l)break;D.tag===5&&J!==null&&(D=J,c?(N=vn(s,h),N!=null&&M.unshift(uo(s,N,D))):c||(N=vn(s,h),N!=null&&M.push(uo(s,N,D)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Jg=/\r\n?/g,e_=/\u0000|\uFFFD/g;function Od(t){return(typeof t=="string"?t:""+t).replace(Jg,`
`).replace(e_,"")}function aa(t,i,s){if(i=Od(i),Od(t)!==i&&s)throw Error(n(425))}function la(){}var nu=null,iu=null;function ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(i_)}:su;function i_(t){setTimeout(function(){throw t})}function ou(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Js(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Js(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function kd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),fi="__reactFiber$"+rs,co="__reactProps$"+rs,Ei="__reactContainer$"+rs,au="__reactEvents$"+rs,r_="__reactListeners$"+rs,s_="__reactHandles$"+rs;function Tr(t){var i=t[fi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ei]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=kd(t);t!==null;){if(s=t[fi])return s;t=kd(t)}return i}t=s,s=t.parentNode}return null}function fo(t){return t=t[fi]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[co]||null}var lu=[],os=-1;function Qi(t){return{current:t}}function It(t){0>os||(t.current=lu[os],lu[os]=null,os--)}function Lt(t,i){os++,lu[os]=t.current,t.current=i}var Ji={},fn=Qi(Ji),Tn=Qi(!1),wr=Ji;function as(t,i){var s=t.type.contextTypes;if(!s)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function ca(){It(Tn),It(fn)}function zd(t,i,s){if(fn.current!==Ji)throw Error(n(168));Lt(fn,i),Lt(Tn,s)}function Hd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return ie({},s,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,wr=fn.current,Lt(fn,t),Lt(Tn,Tn.current),!0}function Vd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Hd(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,It(Tn),It(fn),Lt(fn,t)):It(Tn),Lt(Tn,s)}var Ti=null,da=!1,uu=!1;function Gd(t){Ti===null?Ti=[t]:Ti.push(t)}function o_(t){da=!0,Gd(t)}function er(){if(!uu&&Ti!==null){uu=!0;var t=0,i=vt;try{var s=Ti;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ti=null,da=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),qo(Se,er),c}finally{vt=i,uu=!1}}return null}var ls=[],us=0,ha=null,pa=0,kn=[],zn=0,Ar=null,wi=1,Ai="";function Rr(t,i){ls[us++]=pa,ls[us++]=ha,ha=t,pa=i}function Wd(t,i,s){kn[zn++]=wi,kn[zn++]=Ai,kn[zn++]=Ar,Ar=t;var l=wi;t=Ai;var c=32-rt(l)-1;l&=~(1<<c),s+=1;var h=32-rt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,wi=1<<32-rt(i)+c|s<<c|l,Ai=h+t}else wi=1<<h|s<<c|l,Ai=t}function cu(t){t.return!==null&&(Rr(t,1),Wd(t,1,0))}function fu(t){for(;t===ha;)ha=ls[--us],ls[us]=null,pa=ls[--us],ls[us]=null;for(;t===Ar;)Ar=kn[--zn],kn[zn]=null,Ai=kn[--zn],kn[zn]=null,wi=kn[--zn],kn[zn]=null}var In=null,Nn=null,Ft=!1,$n=null;function Xd(t,i){var s=Wn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Yd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ar!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Wn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Nn=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(Ft){var i=Nn;if(i){var s=i;if(!Yd(t,i)){if(du(t))throw Error(n(418));i=Zi(s.nextSibling);var l=In;i&&Yd(t,i)?Xd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function qd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function ma(t){if(t!==In)return!1;if(!Ft)return qd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ru(t.type,t.memoizedProps)),i&&(i=Nn)){if(du(t))throw jd(),Error(n(418));for(;i;)Xd(t,i),i=Zi(i.nextSibling)}if(qd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=Zi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Zi(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Nn;t;)t=Zi(t.nextSibling)}function cs(){Nn=In=null,Ft=!1}function pu(t){$n===null?$n=[t]:$n.push(t)}var a_=C.ReactCurrentBatchConfig;function ho(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ga(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function $d(t){var i=t._init;return i(t._payload)}function Kd(t){function i(q,H){if(t){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function s(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function c(q,H){return q=lr(q,H),q.index=0,q.sibling=null,q}function h(q,H,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,H,$,Ee){return H===null||H.tag!==6?(H=sc($,q.mode,Ee),H.return=q,H):(H=c(H,$),H.return=q,H)}function N(q,H,$,Ee){var Xe=$.type;return Xe===F?_e(q,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&$d(Xe)===H.type)?(Ee=c(H,$.props),Ee.ref=ho(q,H,$),Ee.return=q,Ee):(Ee=za($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=ho(q,H,$),Ee.return=q,Ee)}function J(q,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=oc($,q.mode,Ee),H.return=q,H):(H=c(H,$.children||[]),H.return=q,H)}function _e(q,H,$,Ee,Xe){return H===null||H.tag!==7?(H=Nr($,q.mode,Ee,Xe),H.return=q,H):(H=c(H,$),H.return=q,H)}function xe(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=sc(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return $=za(H.type,H.key,H.props,null,q.mode,$),$.ref=ho(q,null,H),$.return=q,$;case B:return H=oc(H,q.mode,$),H.return=q,H;case oe:var Ee=H._init;return xe(q,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=Nr(H,q.mode,$,null),H.return=q,H;ga(q,H)}return null}function me(q,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:D(q,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===Xe?N(q,H,$,Ee):null;case B:return $.key===Xe?J(q,H,$,Ee):null;case oe:return Xe=$._init,me(q,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,H,$,Ee,null);ga(q,$)}return null}function De(q,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,D(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return q=q.get(Ee.key===null?$:Ee.key)||null,N(H,q,Ee,Xe);case B:return q=q.get(Ee.key===null?$:Ee.key)||null,J(H,q,Ee,Xe);case oe:var $e=Ee._init;return De(q,H,$,$e(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(H,q,Ee,Xe,null);ga(H,Ee)}return null}function ze(q,H,$,Ee){for(var Xe=null,$e=null,Ke=H,tt=H=0,nn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var yt=me(q,Ke,$[tt],Ee);if(yt===null){Ke===null&&(Ke=nn);break}t&&Ke&&yt.alternate===null&&i(q,Ke),H=h(yt,H,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt,Ke=nn}if(tt===$.length)return s(q,Ke),Ft&&Rr(q,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(q,$[tt],Ee),Ke!==null&&(H=h(Ke,H,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Rr(q,tt),Xe}for(Ke=l(q,Ke);tt<$.length;tt++)nn=De(Ke,q,tt,$[tt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ke.delete(nn.key===null?tt:nn.key),H=h(nn,H,tt),$e===null?Xe=nn:$e.sibling=nn,$e=nn);return t&&Ke.forEach(function(ur){return i(q,ur)}),Ft&&Rr(q,tt),Xe}function Ve(q,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var $e=Xe=null,Ke=H,tt=H=0,nn=null,yt=$.next();Ke!==null&&!yt.done;tt++,yt=$.next()){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var ur=me(q,Ke,yt.value,Ee);if(ur===null){Ke===null&&(Ke=nn);break}t&&Ke&&ur.alternate===null&&i(q,Ke),H=h(ur,H,tt),$e===null?Xe=ur:$e.sibling=ur,$e=ur,Ke=nn}if(yt.done)return s(q,Ke),Ft&&Rr(q,tt),Xe;if(Ke===null){for(;!yt.done;tt++,yt=$.next())yt=xe(q,yt.value,Ee),yt!==null&&(H=h(yt,H,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return Ft&&Rr(q,tt),Xe}for(Ke=l(q,Ke);!yt.done;tt++,yt=$.next())yt=De(Ke,q,tt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?tt:yt.key),H=h(yt,H,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(k_){return i(q,k_)}),Ft&&Rr(q,tt),Xe}function Wt(q,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var Xe=$.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===F){if($e.tag===7){s(q,$e.sibling),H=c($e,$.props.children),H.return=q,q=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&$d(Xe)===$e.type){s(q,$e.sibling),H=c($e,$.props),H.ref=ho(q,$e,$),H.return=q,q=H;break e}s(q,$e);break}else i(q,$e);$e=$e.sibling}$.type===F?(H=Nr($.props.children,q.mode,Ee,$.key),H.return=q,q=H):(Ee=za($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=ho(q,H,$),Ee.return=q,q=Ee)}return M(q);case B:e:{for($e=$.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){s(q,H.sibling),H=c(H,$.children||[]),H.return=q,q=H;break e}else{s(q,H);break}else i(q,H);H=H.sibling}H=oc($,q.mode,Ee),H.return=q,q=H}return M(q);case oe:return $e=$._init,Wt(q,H,$e($._payload),Ee)}if(Ge($))return ze(q,H,$,Ee);if(ae($))return Ve(q,H,$,Ee);ga(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(s(q,H.sibling),H=c(H,$),H.return=q,q=H):(s(q,H),H=sc($,q.mode,Ee),H.return=q,q=H),M(q)):s(q,H)}return Wt}var fs=Kd(!0),Zd=Kd(!1),_a=Qi(null),va=null,ds=null,mu=null;function gu(){mu=ds=va=null}function _u(t){var i=_a.current;It(_a),t._currentValue=i}function vu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function hs(t,i){va=t,mu=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(An=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(mu!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(va===null)throw Error(n(308));ds=t,va.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Cr=null;function xu(t){Cr===null?Cr=[t]:Cr.push(t)}function Qd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,xu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ri(t,l)}function Ri(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var tr=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,xt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,s)}return c=l.interleaved,c===null?(i.next=i,xu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,s)}function xa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}function eh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Sa(t,i,s,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var N=D,J=N.next;N.next=null,M===null?h=J:M.next=J,M=N;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=J:D.next=J,_e.lastBaseUpdate=N))}if(h!==null){var xe=c.baseState;M=0,_e=J=N=null,D=h;do{var me=D.lane,De=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(me=i,De=s,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(De,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(De,xe,me):ze,me==null)break e;xe=ie({},xe,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else De={eventTime:De,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(J=_e=De,N=xe):_e=_e.next=De,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(N=xe),c.baseState=N,c.firstBaseUpdate=J,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function th(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var po={},di=Qi(po),mo=Qi(po),go=Qi(po);function Pr(t){if(t===po)throw Error(n(174));return t}function yu(t,i){switch(Lt(go,i),Lt(mo,t),Lt(di,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}It(di),Lt(di,i)}function ps(){It(di),It(mo),It(go)}function nh(t){Pr(go.current);var i=Pr(di.current),s=We(i,t.type);i!==s&&(Lt(mo,t),Lt(di,s))}function Mu(t){mo.current===t&&(It(di),It(mo))}var Ot=Qi(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eu=[];function Tu(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var Ma=C.ReactCurrentDispatcher,wu=C.ReactCurrentBatchConfig,br=0,Bt=null,jt=null,en=null,Ea=!1,_o=!1,vo=0,l_=0;function dn(){throw Error(n(321))}function Au(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!jn(t[s],i[s]))return!1;return!0}function Ru(t,i,s,l,c,h){if(br=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?d_:h_,t=s(l,c),_o){h=0;do{if(_o=!1,vo=0,25<=h)throw Error(n(301));h+=1,en=jt=null,i.updateQueue=null,Ma.current=p_,t=s(l,c)}while(_o)}if(Ma.current=Aa,i=jt!==null&&jt.next!==null,br=0,en=jt=Bt=null,Ea=!1,i)throw Error(n(300));return t}function Cu(){var t=vo!==0;return vo=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Vn(){if(jt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function xo(t,i){return typeof i=="function"?i(t):i}function Pu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=jt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,N=null,J=h;do{var _e=J.lane;if((br&_e)===_e)N!==null&&(N=N.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};N===null?(D=N=xe,M=l):N=N.next=xe,Bt.lanes|=_e,Lr|=_e}J=J.next}while(J!==null&&J!==h);N===null?M=l:N.next=D,jn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=N,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Bt.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function bu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);jn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ih(){}function rh(t,i){var s=Bt,l=Vn(),c=i(),h=!jn(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Lu(ah.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,So(9,oh.bind(null,s,l,c,i),void 0,null),tn===null)throw Error(n(349));br&30||sh(s,i,c)}return c}function sh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function oh(t,i,s,l){i.value=s,i.getSnapshot=l,lh(i)&&uh(t)}function ah(t,i,s){return s(function(){lh(i)&&uh(t)})}function lh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!jn(t,s)}catch{return!0}}function uh(t){var i=Ri(t,1);i!==null&&Jn(i,t,1,-1)}function ch(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=f_.bind(null,Bt,t),[i.memoizedState,t]}function So(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function fh(){return Vn().memoizedState}function Ta(t,i,s,l){var c=hi();Bt.flags|=t,c.memoizedState=So(1|i,s,void 0,l===void 0?null:l)}function wa(t,i,s,l){var c=Vn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var M=jt.memoizedState;if(h=M.destroy,l!==null&&Au(l,M.deps)){c.memoizedState=So(i,s,h,l);return}}Bt.flags|=t,c.memoizedState=So(1|i,s,h,l)}function dh(t,i){return Ta(8390656,8,t,i)}function Lu(t,i){return wa(2048,8,t,i)}function hh(t,i){return wa(4,2,t,i)}function ph(t,i){return wa(4,4,t,i)}function mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gh(t,i,s){return s=s!=null?s.concat([t]):null,wa(4,4,mh.bind(null,i,t),s)}function Du(){}function _h(t,i){var s=Vn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function vh(t,i){var s=Vn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function xh(t,i,s){return br&21?(jn(s,i)||(s=Pt(),Bt.lanes|=s,Lr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=s)}function u_(t,i){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=wu.transition;wu.transition={};try{t(!1),i()}finally{vt=s,wu.transition=l}}function Sh(){return Vn().memoizedState}function c_(t,i,s){var l=or(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},yh(t))Mh(i,s);else if(s=Qd(t,i,s,l),s!==null){var c=yn();Jn(s,t,l,c),Eh(s,i,l)}}function f_(t,i,s){var l=or(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(yh(t))Mh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,s);if(c.hasEagerState=!0,c.eagerState=D,jn(D,M)){var N=i.interleaved;N===null?(c.next=c,xu(i)):(c.next=N.next,N.next=c),i.interleaved=c;return}}catch{}finally{}s=Qd(t,i,c,l),s!==null&&(c=yn(),Jn(s,t,l,c),Eh(s,i,l))}}function yh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Mh(t,i){_o=Ea=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Eh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}var Aa={readContext:Hn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},d_={readContext:Hn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:dh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4194308,4,mh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var s=hi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=hi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=c_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:ch,useDebugValue:Du,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=ch(!1),i=t[0];return t=u_.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Bt,c=hi();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));br&30||sh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,dh(ah.bind(null,l,h,t),[t]),l.flags|=2048,So(9,oh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=hi(),i=tn.identifierPrefix;if(Ft){var s=Ai,l=wi;s=(l&~(1<<32-rt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=vo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=l_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},h_={readContext:Hn,useCallback:_h,useContext:Hn,useEffect:Lu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:Pu,useRef:fh,useState:function(){return Pu(xo)},useDebugValue:Du,useDeferredValue:function(t){var i=Vn();return xh(i,jt.memoizedState,t)},useTransition:function(){var t=Pu(xo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:Sh,unstable_isNewReconciler:!1},p_={readContext:Hn,useCallback:_h,useContext:Hn,useEffect:Lu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:bu,useRef:fh,useState:function(){return bu(xo)},useDebugValue:Du,useDeferredValue:function(t){var i=Vn();return jt===null?i.memoizedState=t:xh(i,jt.memoizedState,t)},useTransition:function(){var t=bu(xo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:Sh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=ie({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Uu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ie({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ra={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=or(t),h=Ci(l,c);h.payload=i,s!=null&&(h.callback=s),i=nr(t,h,c),i!==null&&(Jn(i,t,c,l),xa(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=or(t),h=Ci(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=nr(t,h,c),i!==null&&(Jn(i,t,c,l),xa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=or(t),c=Ci(s,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(Jn(i,t,l,s),xa(i,t,l))}};function Th(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!so(s,l)||!so(c,h):!0}function wh(t,i,s){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(c=wn(i)?wr:fn.current,l=i.contextTypes,h=(l=l!=null)?as(t,c):Ji),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ah(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Iu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Su(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Hn(h):(h=wn(i)?wr:fn.current,c.context=as(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Uu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ra.enqueueReplaceState(c,c.state,null),Sa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var s="",l=i;do s+=he(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Nu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Fu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var m_=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ia||(Ia=!0,Zu=l),Fu(t,i)},s}function Ch(t,i,s){s=Ci(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Fu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Fu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Ph(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new m_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=P_.bind(null,t,i,s),i.then(t,t))}function bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Lh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,nr(s,i,1))),s.lanes|=1),t)}var g_=C.ReactCurrentOwner,An=!1;function Sn(t,i,s,l){i.child=t===null?Zd(i,null,s,l):fs(i,t.child,s,l)}function Dh(t,i,s,l,c){s=s.render;var h=i.ref;return hs(i,c),l=Ru(t,i,s,l,h,c),s=Cu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&s&&cu(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Uh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Ih(t,i,h,l,c)):(t=za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ih(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(so(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(An=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return Ou(t,i,s,l,c)}function Nh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(_s,Fn),Fn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(_s,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(_s,Fn),Fn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(_s,Fn),Fn|=l;return Sn(t,i,c,s),i.child}function Fh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,s,l,c){var h=wn(s)?wr:fn.current;return h=as(i,h),hs(i,c),s=Ru(t,i,s,l,h,c),l=Cu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&l&&cu(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Oh(t,i,s,l,c){if(wn(s)){var h=!0;fa(i)}else h=!1;if(hs(i,c),i.stateNode===null)Pa(t,i),wh(i,s,l),Iu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var N=M.context,J=s.contextType;typeof J=="object"&&J!==null?J=Hn(J):(J=wn(s)?wr:fn.current,J=as(i,J));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||N!==J)&&Ah(i,M,l,J),tr=!1;var me=i.memoizedState;M.state=me,Sa(i,l,M,c),N=i.memoizedState,D!==l||me!==N||Tn.current||tr?(typeof _e=="function"&&(Uu(i,s,_e,l),N=i.memoizedState),(D=tr||Th(i,s,D,l,me,N,J))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),M.props=l,M.state=N,M.context=J,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Jd(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:Kn(i.type,D),M.props=J,xe=i.pendingProps,me=M.context,N=s.contextType,typeof N=="object"&&N!==null?N=Hn(N):(N=wn(s)?wr:fn.current,N=as(i,N));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==N)&&Ah(i,M,l,N),tr=!1,me=i.memoizedState,M.state=me,Sa(i,l,M,c);var ze=i.memoizedState;D!==xe||me!==ze||Tn.current||tr?(typeof De=="function"&&(Uu(i,s,De,l),ze=i.memoizedState),(J=tr||Th(i,s,J,l,me,ze,N)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,N),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,N)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=N,l=J):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Bu(t,i,s,l,h,c)}function Bu(t,i,s,l,c,h){Fh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Vd(i,s,!1),Pi(t,i,h);l=i.stateNode,g_.current=i;var D=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,c&&Vd(i,s,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?zd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&zd(t,i.context,!1),yu(t,i.containerInfo)}function kh(t,i,s,l,c){return cs(),pu(c),i.flags|=256,Sn(t,i,s,l),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return hu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ha(M,l,0,null),t=Nr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zu(s),i.memoizedState=ku,t):Hu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return __(t,i,M,l,D,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var N={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=N,i.deletions=null):(l=lr(c,N),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Nr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?zu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=ku,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Hu(t,i){return i=Ha({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ca(t,i,s,l){return l!==null&&pu(l),fs(i,t.child,null,s),t=Hu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function __(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Nu(Error(n(422))),Ca(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ha({mode:"visible",children:l.children},c,0,null),h=Nr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&fs(i,t.child,null,M),i.child.memoizedState=zu(M),i.memoizedState=ku,h);if(!(i.mode&1))return Ca(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Nu(h,l,void 0),Ca(t,i,M,l)}if(D=(M&t.childLanes)!==0,An||D){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),Jn(l,t,c,-1))}return ic(),l=Nu(Error(n(421))),Ca(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=b_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Zi(c.nextSibling),In=i,Ft=!0,$n=null,t!==null&&(kn[zn++]=wi,kn[zn++]=Ai,kn[zn++]=Ar,wi=t.id,Ai=t.overflow,Ar=i),i=Hu(i,l.children),i.flags|=4096,i)}function Hh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vu(t.return,i,s)}function Vu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Vh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=Ot.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,s,i);else if(t.tag===19)Hh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ya(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Vu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Vu(i,!0,s,null,h);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=lr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=lr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function v_(t,i,s){switch(i.tag){case 3:Bh(i),cs();break;case 5:nh(i);break;case 1:wn(i.type)&&fa(i);break;case 4:yu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(_a,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):s&i.child.childLanes?zh(t,i,s):(Lt(Ot,Ot.current&1),t=Pi(t,i,s),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Vh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return Pi(t,i,s)}var Gh,Gu,Wh,Xh;Gh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Gu=function(){},Wh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Pr(di.current);var h=null;switch(s){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=ie({},c,{value:void 0}),l=ie({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=la)}ut(s,l);var M;s=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var D=c[J];for(M in D)D.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var N=l[J];if(D=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&N!==D&&(N!=null||D!=null))if(J==="style")if(D){for(M in D)!D.hasOwnProperty(M)||N&&N.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in N)N.hasOwnProperty(M)&&D[M]!==N[M]&&(s||(s={}),s[M]=N[M])}else s||(h||(h=[]),h.push(J,s)),s=N;else J==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,D=D?D.__html:void 0,N!=null&&D!==N&&(h=h||[]).push(J,N)):J==="children"?typeof N!="string"&&typeof N!="number"||(h=h||[]).push(J,""+N):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(N!=null&&J==="onScroll"&&Ut("scroll",t),h||D===N||(h=[])):(h=h||[]).push(J,N))}s&&(h=h||[]).push("style",s);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Xh=function(t,i,s,l){s!==l&&(i.flags|=4)};function yo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function x_(t,i,s){var l=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return wn(i.type)&&ca(),hn(i),null;case 3:return l=i.stateNode,ps(),It(Tn),It(fn),Tu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,$n!==null&&(ec($n),$n=null))),Gu(t,i),hn(i),null;case 5:Mu(i);var c=Pr(go.current);if(s=i.type,t!==null&&i.stateNode!=null)Wh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Pr(di.current),ma(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[fi]=i,l[co]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<ao.length;c++)Ut(ao[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":_n(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":K(l,h),Ut("invalid",l)}ut(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Rt(l),Ye(l,h,!0);break;case"textarea":Rt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=la)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[fi]=i,t[co]=l,Gh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<ao.length;c++)Ut(ao[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":_n(t,l),c=O(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ie({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":K(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ut(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var N=D[h];h==="style"?Je(t,N):h==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ne(t,N)):h==="children"?typeof N=="string"?(s!=="textarea"||N!=="")&&at(t,N):typeof N=="number"&&at(t,""+N):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?N!=null&&h==="onScroll"&&Ut("scroll",t):N!=null&&L(t,h,N,M))}switch(s){case"input":Rt(t),Ye(t,l,!1);break;case"textarea":Rt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=la)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Xh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Pr(go.current),Pr(di.current),ma(i)){if(l=i.stateNode,s=i.memoizedProps,l[fi]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:aa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return hn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Nn!==null&&i.mode&1&&!(i.flags&128))jd(),cs(),i.flags|=98560,h=!1;else if(h=ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[fi]=i}else cs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else $n!==null&&(ec($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Ot.current&1?$t===0&&($t=3):ic())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return ps(),Gu(t,i),t===null&&lo(i.stateNode.containerInfo),hn(i),null;case 10:return _u(i.type._context),hn(i),null;case 17:return wn(i.type)&&ca(),hn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)yo(h,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=ya(t),M!==null){for(i.flags|=128,yo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&j()>vs&&(i.flags|=128,l=!0,yo(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),yo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return hn(i),null}else 2*j()-h.renderingStartTime>vs&&s!==1073741824&&(i.flags|=128,l=!0,yo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=j(),i.sibling=null,s=Ot.current,Lt(Ot,l?s&1|2:s&1),i):(hn(i),null);case 22:case 23:return nc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Fn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function S_(t,i){switch(fu(i),i.tag){case 1:return wn(i.type)&&ca(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(Tn),It(fn),Tu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Mu(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ps(),null;case 10:return _u(i.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var ba=!1,pn=!1,y_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gs(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Vt(t,i,l)}else s.current=null}function Wu(t,i,s){try{s()}catch(l){Vt(t,i,l)}}var Yh=!1;function M_(t,i){if(nu=Ko,t=Td(),jl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,D=-1,N=-1,J=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(N=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++J===c&&(D=M),me===h&&++_e===l&&(N=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=D===-1||N===-1?null:{start:D,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(iu={focusedElem:t,selectionRange:s},Ko=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Wt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Kn(i.type,Ve),Wt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Yh,Yh=!1,ze}function Mo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Wu(i,s,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Xu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function qh(t){var i=t.alternate;i!==null&&(t.alternate=null,qh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[co],delete i[au],delete i[r_],delete i[s_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,s),t=t.sibling;t!==null;)Yu(t,i,s),t=t.sibling}function qu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,s),t=t.sibling;t!==null;)qu(t,i,s),t=t.sibling}var on=null,Zn=!1;function ir(t,i,s){for(s=s.child;s!==null;)Kh(t,i,s),s=s.sibling}function Kh(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:pn||gs(s,i);case 6:var l=on,c=Zn;on=null,ir(t,i,s),on=l,Zn=c,on!==null&&(Zn?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(Zn?(t=on,s=s.stateNode,t.nodeType===8?ou(t.parentNode,s):t.nodeType===1&&ou(t,s),Js(t)):ou(on,s.stateNode));break;case 4:l=on,c=Zn,on=s.stateNode.containerInfo,Zn=!0,ir(t,i,s),on=l,Zn=c;break;case 0:case 11:case 14:case 15:if(!pn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&Wu(s,i,M),c=c.next}while(c!==l)}ir(t,i,s);break;case 1:if(!pn&&(gs(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Vt(s,i,D)}ir(t,i,s);break;case 21:ir(t,i,s);break;case 22:s.mode&1?(pn=(l=pn)||s.memoizedState!==null,ir(t,i,s),pn=l):ir(t,i,s);break;default:ir(t,i,s)}}function Zh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new y_),i.forEach(function(l){var c=L_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,Zn=!1;break e;case 3:on=D.stateNode.containerInfo,Zn=!0;break e;case 4:on=D.stateNode.containerInfo,Zn=!0;break e}D=D.return}if(on===null)throw Error(n(160));Kh(h,M,c),on=null,Zn=!1;var N=c.alternate;N!==null&&(N.return=null),c.return=null}catch(J){Vt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qh(i,t),i=i.sibling}function Qh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),pi(t),l&4){try{Mo(3,t,t.return),La(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Mo(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:Qn(i,t),pi(t),l&512&&s!==null&&gs(s,s.return);break;case 5:if(Qn(i,t),pi(t),l&512&&s!==null&&gs(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,D=t.type,N=t.updateQueue;if(t.updateQueue=null,N!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),nt(D,M);var J=nt(D,h);for(M=0;M<N.length;M+=2){var _e=N[M],xe=N[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):L(c,_e,xe,J)}switch(D){case"input":lt(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[co]=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(Qn(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(Qn(i,t),pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:Qn(i,t),pi(t);break;case 13:Qn(i,t),pi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ku=j())),l&4&&Zh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(pn=(J=pn)||_e,Qn(i,t),pn=J):Qn(i,t),pi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&t.mode&1)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Mo(4,me,me.return);break;case 1:gs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Vt(l,s,Ve)}}break;case 5:gs(me,me.return);break;case 22:if(me.memoizedState!==null){tp(xe);continue}}De!==null?(De.return=me,Fe=De):tp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,N=xe.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null,D.style.display=je("display",M))}catch(Ve){Vt(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Qn(i,t),pi(t),l&4&&Zh(t);break;case 21:break;default:Qn(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(jh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=$h(t);qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=$h(t);Yu(t,D,M);break;default:throw Error(n(161))}}catch(N){Vt(t,t.return,N)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function E_(t,i,s){Fe=t,Jh(t)}function Jh(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||ba;if(!M){var D=c.alternate,N=D!==null&&D.memoizedState!==null||pn;D=ba;var J=pn;if(ba=M,(pn=N)&&!J)for(Fe=c;Fe!==null;)M=Fe,N=M.child,M.tag===22&&M.memoizedState!==null?np(c):N!==null?(N.return=M,Fe=N):np(c);for(;h!==null;)Fe=h,Jh(h),h=h.sibling;Fe=c,ba=D,pn=J}ep(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Fe=h):ep(t)}}function ep(t){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&th(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}th(i,M,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&s.focus();break;case"img":N.src&&(s.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Js(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Xu(i)}catch(me){Vt(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function tp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function np(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{La(4,i)}catch(N){Vt(i,s,N)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(N){Vt(i,c,N)}}var h=i.return;try{Xu(i)}catch(N){Vt(i,h,N)}break;case 5:var M=i.return;try{Xu(i)}catch(N){Vt(i,M,N)}}}catch(N){Vt(i,i.return,N)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var T_=Math.ceil,Da=C.ReactCurrentDispatcher,ju=C.ReactCurrentOwner,Gn=C.ReactCurrentBatchConfig,xt=0,tn=null,Xt=null,an=0,Fn=0,_s=Qi(0),$t=0,Eo=null,Lr=0,Ua=0,$u=0,To=null,Rn=null,Ku=0,vs=1/0,bi=null,Ia=!1,Zu=null,rr=null,Na=!1,sr=null,Fa=0,wo=0,Qu=null,Oa=-1,Ba=0;function yn(){return xt&6?j():Oa!==-1?Oa:Oa=j()}function or(t){return t.mode&1?xt&2&&an!==0?an&-an:a_.transition!==null?(Ba===0&&(Ba=Pt()),Ba):(t=vt,t!==0||(t=window.event,t=t===void 0?16:rd(t.type)),t):1}function Jn(t,i,s,l){if(50<wo)throw wo=0,Qu=null,Error(n(185));Qt(t,s,l),(!(xt&2)||t!==tn)&&(t===tn&&(!(xt&2)&&(Ua|=s),$t===4&&ar(t,an)),Cn(t,l),s===1&&xt===0&&!(i.mode&1)&&(vs=j()+500,da&&er()))}function Cn(t,i){var s=t.callbackNode;xn(t,i);var l=un(t,t===tn?an:0);if(l===0)s!==null&&A(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&A(s),i===1)t.tag===0?o_(rp.bind(null,t)):Gd(rp.bind(null,t)),n_(function(){!(xt&6)&&er()}),s=null;else{switch(ci(l)){case 1:s=Se;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=et;break;default:s=Le}s=dp(s,ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ip(t,i){if(Oa=-1,Ba=0,xt&6)throw Error(n(327));var s=t.callbackNode;if(xs()&&t.callbackNode!==s)return null;var l=un(t,t===tn?an:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=ka(t,l);else{i=l;var c=xt;xt|=2;var h=op();(tn!==t||an!==i)&&(bi=null,vs=j()+500,Ur(t,i));do try{R_();break}catch(D){sp(t,D)}while(!0);gu(),Da.current=h,xt=c,Xt!==null?i=0:(tn=null,an=0,i=$t)}if(i!==0){if(i===2&&(c=Mi(t),c!==0&&(l=c,i=Ju(t,c))),i===1)throw s=Eo,Ur(t,0),ar(t,l),Cn(t,j()),s;if(i===6)ar(t,l);else{if(c=t.current.alternate,!(l&30)&&!w_(c)&&(i=ka(t,l),i===2&&(h=Mi(t),h!==0&&(l=h,i=Ju(t,h))),i===1))throw s=Eo,Ur(t,0),ar(t,l),Cn(t,j()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,Rn,bi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Ku+500-j(),10<i)){if(un(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=su(Ir.bind(null,t,Rn,bi),i);break}Ir(t,Rn,bi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-rt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=j()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*T_(l/1960))-l,10<l){t.timeoutHandle=su(Ir.bind(null,t,Rn,bi),l);break}Ir(t,Rn,bi);break;case 5:Ir(t,Rn,bi);break;default:throw Error(n(329))}}}return Cn(t,j()),t.callbackNode===s?ip.bind(null,t):null}function Ju(t,i){var s=To;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=ka(t,i),t!==2&&(i=Rn,Rn=s,i!==null&&ec(i)),t}function ec(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function w_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!jn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~$u,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-rt(i),l=1<<s;t[s]=-1,i&=~l}}function rp(t){if(xt&6)throw Error(n(327));xs();var i=un(t,0);if(!(i&1))return Cn(t,j()),null;var s=ka(t,i);if(t.tag!==0&&s===2){var l=Mi(t);l!==0&&(i=l,s=Ju(t,l))}if(s===1)throw s=Eo,Ur(t,0),ar(t,i),Cn(t,j()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,Rn,bi),Cn(t,j()),null}function tc(t,i){var s=xt;xt|=1;try{return t(i)}finally{xt=s,xt===0&&(vs=j()+500,da&&er())}}function Dr(t){sr!==null&&sr.tag===0&&!(xt&6)&&xs();var i=xt;xt|=1;var s=Gn.transition,l=vt;try{if(Gn.transition=null,vt=1,t)return t()}finally{vt=l,Gn.transition=s,xt=i,!(xt&6)&&er()}}function nc(){Fn=_s.current,It(_s)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,t_(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(fu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ca();break;case 3:ps(),It(Tn),It(fn),Tu();break;case 5:Mu(l);break;case 4:ps();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:_u(l.type._context);break;case 22:case 23:nc()}s=s.return}if(tn=t,Xt=t=lr(t.current,null),an=Fn=i,$t=0,Eo=null,$u=Ua=Lr=0,Rn=To=null,Cr!==null){for(i=0;i<Cr.length;i++)if(s=Cr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Cr=null}return t}function sp(t,i){do{var s=Xt;try{if(gu(),Ma.current=Aa,Ea){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ea=!1}if(br=0,en=jt=Bt=null,_o=!1,vo=0,ju.current=null,s===null||s.return===null){$t=1,Eo=i,Xt=null;break}e:{var h=t,M=s.return,D=s,N=i;if(i=an,D.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var J=N,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=bh(M);if(De!==null){De.flags&=-257,Lh(De,M,D,h,i),De.mode&1&&Ph(h,J,i),i=De,N=J;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(N),i.updateQueue=Ve}else ze.add(N);break e}else{if(!(i&1)){Ph(h,J,i),ic();break e}N=Error(n(426))}}else if(Ft&&D.mode&1){var Wt=bh(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Lh(Wt,M,D,h,i),pu(ms(N,D));break e}}h=N=ms(N,D),$t!==4&&($t=2),To===null?To=[h]:To.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Rh(h,N,i);eh(h,q);break e;case 1:D=N;var H=h.type,$=h.stateNode;if(!(h.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(rr===null||!rr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Ch(h,D,i);eh(h,Ee);break e}}h=h.return}while(h!==null)}lp(s)}catch(Xe){i=Xe,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function op(){var t=Da.current;return Da.current=Aa,t===null?Aa:t}function ic(){($t===0||$t===3||$t===2)&&($t=4),tn===null||!(Lr&268435455)&&!(Ua&268435455)||ar(tn,an)}function ka(t,i){var s=xt;xt|=2;var l=op();(tn!==t||an!==i)&&(bi=null,Ur(t,i));do try{A_();break}catch(c){sp(t,c)}while(!0);if(gu(),xt=s,Da.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,$t}function A_(){for(;Xt!==null;)ap(Xt)}function R_(){for(;Xt!==null&&!W();)ap(Xt)}function ap(t){var i=fp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?lp(t):Xt=i,ju.current=null}function lp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=S_(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Xt=null;return}}else if(s=x_(s,i,Fn),s!==null){Xt=s;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);$t===0&&($t=5)}function Ir(t,i,s){var l=vt,c=Gn.transition;try{Gn.transition=null,vt=1,C_(t,i,s,l)}finally{Gn.transition=c,vt=l}return null}function C_(t,i,s,l){do xs();while(sr!==null);if(xt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(sn(t,h),t===tn&&(Xt=tn=null,an=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Na||(Na=!0,dp(Le,function(){return xs(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Gn.transition,Gn.transition=null;var M=vt;vt=1;var D=xt;xt|=4,ju.current=null,M_(t,s),Qh(s,t),jg(iu),Ko=!!nu,iu=nu=null,t.current=s,E_(s),Q(),xt=D,vt=M,Gn.transition=h}else t.current=s;if(Na&&(Na=!1,sr=t,Fa=c),h=t.pendingLanes,h===0&&(rr=null),pt(s.stateNode),Cn(t,j()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Zu,Zu=null,t;return Fa&1&&t.tag!==0&&xs(),h=t.pendingLanes,h&1?t===Qu?wo++:(wo=0,Qu=t):wo=0,er(),null}function xs(){if(sr!==null){var t=ci(Fa),i=Gn.transition,s=vt;try{if(Gn.transition=null,vt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Fa=0,xt&6)throw Error(n(331));var c=xt;for(xt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if(Fe.flags&16){var D=h.deletions;if(D!==null){for(var N=0;N<D.length;N++){var J=D[N];for(Fe=J;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Mo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(qh(_e),_e===J){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Wt=Ve.sibling;Ve.sibling=null,Ve=Wt}while(Ve!==null)}}Fe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Fe=q;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Fe=$;else e:for(M=H;Fe!==null;){if(D=Fe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:La(9,D)}}catch(Xe){Vt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Fe=Ee;break e}Fe=D.return}}if(xt=c,er(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{vt=s,Gn.transition=i}}return!1}function up(t,i,s){i=ms(s,i),i=Rh(t,i,1),t=nr(t,i,1),i=yn(),t!==null&&(Qt(t,1,i),Cn(t,i))}function Vt(t,i,s){if(t.tag===3)up(t,t,s);else for(;i!==null;){if(i.tag===3){up(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=ms(s,t),t=Ch(i,t,1),i=nr(i,t,1),t=yn(),i!==null&&(Qt(i,1,t),Cn(i,t));break}}i=i.return}}function P_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&($t===4||$t===3&&(an&130023424)===an&&500>j()-Ku?Ur(t,0):$u|=s),Cn(t,i)}function cp(t,i){i===0&&(t.mode&1?(i=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):i=1);var s=yn();t=Ri(t,i),t!==null&&(Qt(t,i,s),Cn(t,s))}function b_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),cp(t,s)}function L_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),cp(t,s)}var fp;fp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return An=!1,v_(t,i,s);An=!!(t.flags&131072)}else An=!1,Ft&&i.flags&1048576&&Wd(i,pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var c=as(i,fn.current);hs(i,s),c=Ru(null,i,l,t,c,s);var h=Cu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,fa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Su(i),c.updater=Ra,i.stateNode=c,c._reactInternals=i,Iu(i,l,t,s),i=Bu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&cu(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=U_(l),t=Kn(l,t),c){case 0:i=Ou(null,i,l,t,s);break e;case 1:i=Oh(null,i,l,t,s);break e;case 11:i=Dh(null,i,l,t,s);break e;case 14:i=Uh(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Ou(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Oh(t,i,l,c,s);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Jd(t,i),Sa(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ms(Error(n(423)),i),i=kh(t,i,l,s,c);break e}else if(l!==c){c=ms(Error(n(424)),i),i=kh(t,i,l,s,c);break e}else for(Nn=Zi(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,$n=null,s=Zd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(cs(),l===c){i=Pi(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return nh(i),t===null&&hu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,ru(l,c)?M=null:h!==null&&ru(l,h)&&(i.flags|=32),Fh(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&hu(i),null;case 13:return zh(t,i,s);case 4:return yu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Dh(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(_a,l._currentValue),l._currentValue=M,h!==null)if(jn(h.value,M)){if(h.children===c.children&&!Tn.current){i=Pi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var N=D.firstContext;N!==null;){if(N.context===l){if(h.tag===1){N=Ci(-1,s&-s),N.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?N.next=N:(N.next=_e.next,_e.next=N),J.pending=N}}h.lanes|=s,N=h.alternate,N!==null&&(N.lanes|=s),vu(h.return,s,i),D.lanes|=s;break}N=N.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,D=M.alternate,D!==null&&(D.lanes|=s),vu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,hs(i,s),c=Hn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),Uh(t,i,l,c,s);case 15:return Ih(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Pa(t,i),i.tag=1,wn(l)?(t=!0,fa(i)):t=!1,hs(i,s),wh(i,l,c),Iu(i,l,c,s),Bu(null,i,l,!0,t,s);case 19:return Vh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function dp(t,i){return qo(t,i)}function D_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,s,l){return new D_(t,i,s,l)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U_(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===fe)return 14}return 2}function lr(t,i){var s=t.alternate;return s===null?(s=Wn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function za(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")rc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Nr(s.children,c,h,i);case Y:M=8,c|=8;break;case P:return t=Wn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case te:return t=Wn(13,s,i,c),t.elementType=te,t.lanes=h,t;case ue:return t=Wn(19,s,i,c),t.elementType=ue,t.lanes=h,t;case re:return Ha(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case z:M=9;break e;case le:M=11;break e;case fe:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Nr(t,i,s,l){return t=Wn(7,t,l,i),t.lanes=s,t}function Ha(t,i,s,l){return t=Wn(22,t,l,i),t.elementType=re,t.lanes=s,t.stateNode={isHidden:!1},t}function sc(t,i,s){return t=Wn(6,t,null,i),t.lanes=s,t}function oc(t,i,s){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function I_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ac(t,i,s,l,c,h,M,D,N){return t=new I_(t,i,s,D,N),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(h),t}function N_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function hp(t){if(!t)return Ji;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(wn(s))return Hd(t,s,i)}return i}function pp(t,i,s,l,c,h,M,D,N){return t=ac(s,l,!0,t,c,h,M,D,N),t.context=hp(null),s=t.current,l=yn(),c=or(s),h=Ci(l,c),h.callback=i??null,nr(s,h,c),t.current.lanes=c,Qt(t,c,l),Cn(t,l),t}function Va(t,i,s,l){var c=i.current,h=yn(),M=or(c);return s=hp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(Jn(t,c,M,h),xa(t,c,M)),M}function Ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function lc(t,i){mp(t,i),(t=t.alternate)&&mp(t,i)}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uc(t){this._internalRoot=t}Wa.prototype.render=uc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Va(t,i,null,null)},Wa.prototype.unmount=uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Va(null,t,null,null)}),i[Ei]=null}};function Wa(t){this._internalRoot=t}Wa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Jf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ji.length&&i!==0&&i<ji[s].priority;s++);ji.splice(s,0,t),s===0&&nd(t)}};function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function F_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Ga(M);h.call(J)}}var M=pp(i,l,t,0,null,!1,!1,"",_p);return t._reactRootContainer=M,t[Ei]=M.current,lo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var J=Ga(N);D.call(J)}}var N=ac(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=N,t[Ei]=N.current,lo(t.nodeType===8?t.parentNode:t),Dr(function(){Va(i,N,s,l)}),N}function Ya(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var N=Ga(M);D.call(N)}}Va(i,M,t,c)}else M=F_(s,i,t,c,l);return Ga(M)}Zf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=ht(i.pendingLanes);s!==0&&(Jt(i,s|1),Cn(i,j()),!(xt&6)&&(vs=j()+500,er()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var c=yn();Jn(l,t,1,c)}}),lc(t,1)}},Nl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var s=yn();Jn(i,t,134217728,s)}lc(t,134217728)}},Qf=function(t){if(t.tag===13){var i=or(t),s=Ri(t,i);if(s!==null){var l=yn();Jn(s,t,i,l)}lc(t,i)}},Jf=function(){return vt},ed=function(t,i){var s=vt;try{return vt=t,i()}finally{vt=s}},Ae=function(t,i,s){switch(i){case"input":if(lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=ua(l);if(!c)throw Error(n(90));dt(l),lt(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Dt=tc,qt=Dr;var O_={usingClientEntryPoint:!1,Events:[fo,ss,ua,Pe,it,tc]},Ao={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xo(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Qe=qa.inject(B_),He=qa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,Pn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(i))throw Error(n(200));return N_(t,i,null,s)},Pn.createRoot=function(t,i){if(!cc(t))throw Error(n(299));var s=!1,l="",c=gp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ac(t,1,!1,null,null,s,!1,l,c),t[Ei]=i.current,lo(t.nodeType===8?t.parentNode:t),new uc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Xo(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Dr(t)},Pn.hydrate=function(t,i,s){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!0,s)},Pn.hydrateRoot=function(t,i,s){if(!cc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=gp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=pp(i,null,t,1,s??null,c,!1,h,M),t[Ei]=i.current,lo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Wa(i)},Pn.render=function(t,i,s){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!1,s)},Pn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Pn.unstable_batchedUpdates=tc,Pn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Xa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,s,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var wp;function Y_(){if(wp)return hc.exports;wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hc.exports=X_(),hc.exports}var Ap;function q_(){if(Ap)return ja;Ap=1;var o=Y_();return ja.createRoot=o.createRoot,ja.hydrateRoot=o.hydrateRoot,ja}var j_=q_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="172",$_=0,Rp=1,K_=2,Rm=1,Z_=2,Fi=3,Sr=0,Ln=1,Oi=2,vr=0,Fs=1,Cp=2,Pp=3,bp=4,Q_=5,Wr=100,J_=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,ov=203,Zc=204,Qc=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,Jc=0,ef=1,tf=2,ks=3,nf=4,rf=5,sf=6,of=7,Cm=0,gv=1,_v=2,xr=0,vv=1,xv=2,Sv=3,yv=4,Mv=5,Ev=6,Tv=7,Pm=300,zs=301,Hs=302,af=303,lf=304,bl=306,uf=1e3,Yr=1001,cf=1002,oi=1003,wv=1004,$a=1005,gi=1006,gc=1007,qr=1008,Hi=1009,bm=1010,Lm=1011,No=1012,Vf=1013,jr=1014,Bi=1015,Fo=1016,Gf=1017,Wf=1018,Vs=1020,Dm=35902,Um=1021,Im=1022,si=1023,Nm=1024,Fm=1025,Os=1026,Gs=1027,Om=1028,Xf=1029,Bm=1030,Yf=1031,qf=1033,xl=33776,Sl=33777,yl=33778,Ml=33779,ff=35840,df=35841,hf=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37808,xf=37809,Sf=37810,yf=37811,Mf=37812,Ef=37813,Tf=37814,wf=37815,Af=37816,Rf=37817,Cf=37818,Pf=37819,bf=37820,Lf=37821,El=36492,Df=36494,Uf=36495,km=36283,If=36284,Nf=36285,Ff=36286,Av=3200,Rv=3201,zm=0,Cv=1,_r="",Yn="srgb",Ws="srgb-linear",wl="linear",Ct="srgb",Ss=7680,Lp=519,Pv=512,bv=513,Lv=514,Hm=515,Dv=516,Uv=517,Iv=518,Nv=519,Dp=35044,Up="300 es",ki=2e3,Al=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Of=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[o&255]+mn[o>>8&255]+mn[o>>16&255]+mn[o>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function mt(o,e,n){return Math.max(e,Math.min(n,o))}function Fv(o,e){return(o%e+e)%e}function vc(o,e,n){return(1-n)*o+n*e}function Co(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],S=r[7],x=r[2],y=r[5],T=r[8],w=a[0],v=a[3],g=a[6],I=a[1],L=a[4],C=a[7],G=a[2],B=a[5],F=a[8];return u[0]=f*w+d*I+p*G,u[3]=f*v+d*L+p*B,u[6]=f*g+d*C+p*F,u[1]=m*w+_*I+S*G,u[4]=m*v+_*L+S*B,u[7]=m*g+_*C+S*F,u[2]=x*w+y*I+T*G,u[5]=x*v+y*L+T*B,u[8]=x*g+y*C+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=_*f-d*m,x=d*p-_*u,y=m*u-f*p,T=n*S+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(a*m-_*r)*w,e[2]=(d*r-a*f)*w,e[3]=x*w,e[4]=(_*n-a*p)*w,e[5]=(a*u-d*n)*w,e[6]=y*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new st;function Vm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ov(){const o=Rl("canvas");return o.style.display="block",o}const Ip={};function Is(o){o in Ip||(Ip[o]=!0,console.warn(o))}function Bv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function kv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Np=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){const o={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ct&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ct&&(a.r=Bs(a.r),a.g=Bs(a.g),a.b=Bs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?wl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ws]:{primaries:e,whitePoint:r,transfer:wl,toXYZ:Np,fromXYZ:Fp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:Ct,toXYZ:Np,fromXYZ:Fp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Mt=Hv();function zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ys;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Rl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=zi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Sc(a[f].image)):u.push(Sc(a[f]))}else u=Sc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Sc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class Dn extends Ys{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Yr,a=Yr,u=gi,f=qr,d=si,p=Hi,m=Dn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Oo(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Pm;Dn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],S=p[8],x=p[1],y=p[5],T=p[9],w=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(S-w)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(S+w)<.1&&Math.abs(T+v)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(y+1)/2,G=(g+1)/2,B=(_+x)/4,F=(S+w)/4,Y=(T+v)/4;return L>C&&L>G?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=B/r,u=F/r):C>G?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=B/a,u=Y/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=F/u,a=Y/u),this.set(r,a,u,n),this}let I=Math.sqrt((v-T)*(v-T)+(S-w)*(S-w)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(v-T)/I,this.y=(S-w)/I,this.z=(x-_)/I,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Gm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Wm extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];const x=u[f+0],y=u[f+1],T=u[f+2],w=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=w;return}if(S!==w||p!==x||m!==y||_!==T){let v=1-d;const g=p*x+m*y+_*T+S*w,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),B=Math.atan2(G,g*I);v=Math.sin(v*B)/G,d=Math.sin(d*B)/G}const C=d*I;if(p=p*v+x*C,m=m*v+y*C,_=_*v+T*C,S=S*v+w*C,v===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+S*S);p*=G,m*=G,_*=G,S*=G}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],S=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+_*S+p*y-m*x,e[n+1]=p*T+_*x+m*S-d*y,e[n+2]=m*T+_*y+d*x-p*S,e[n+3]=_*T-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),S=d(u/2),x=p(r/2),y=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*_*S+m*y*T,this._y=m*y*S-x*_*T,this._z=m*_*T+x*y*S,this._w=m*_*S-x*y*T;break;case"YXZ":this._x=x*_*S+m*y*T,this._y=m*y*S-x*_*T,this._z=m*_*T-x*y*S,this._w=m*_*S+x*y*T;break;case"ZXY":this._x=x*_*S-m*y*T,this._y=m*y*S+x*_*T,this._z=m*_*T+x*y*S,this._w=m*_*S-x*y*T;break;case"ZYX":this._x=x*_*S-m*y*T,this._y=m*y*S+x*_*T,this._z=m*_*T-x*y*S,this._w=m*_*S+x*y*T;break;case"YZX":this._x=x*_*S+m*y*T,this._y=m*y*S+x*_*T,this._z=m*_*T-x*y*S,this._w=m*_*S-x*y*T;break;case"XZY":this._x=x*_*S-m*y*T,this._y=m*y*S-x*_*T,this._z=m*_*T+x*y*S,this._w=m*_*S+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],S=n[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(_-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),S=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*S+this._w*x,this._x=r*S+this._x*x,this._y=a*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),S=2*(u*r-f*n);return this.x=n+p*m+f*S-d*_,this.y=r+p*_+d*m-u*S,this.z=a+p*S+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new ee,Op=new Bo;class ko{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ei):ei.fromBufferAttribute(u,f),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Za.subVectors(this.max,Po),Ms.subVectors(e.a,Po),Es.subVectors(e.b,Po),Ts.subVectors(e.c,Po),cr.subVectors(Es,Ms),fr.subVectors(Ts,Es),Fr.subVectors(Ms,Ts);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Fr.y,Fr.x,0];return!Mc(n,Ms,Es,Ts,Za)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,Ms,Es,Ts,Za))?!1:(Qa.crossVectors(cr,fr),n=[Qa.x,Qa.y,Qa.z],Mc(n,Ms,Es,Ts,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ei=new ee,Ka=new ko,Ms=new ee,Es=new ee,Ts=new ee,cr=new ee,fr=new ee,Fr=new ee,Po=new ee,Za=new ee,Qa=new ee,Or=new ee;function Mc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Or.fromArray(o,u);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const qv=new ko,bo=new ee,Ec=new ee;class Ll{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):qv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ec)),this.expandByPoint(bo.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new ee,Tc=new ee,Ja=new ee,dr=new ee,wc=new ee,el=new ee,Ac=new ee;class Xm{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tc.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Tc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ja),d=dr.dot(this.direction),p=-dr.dot(Ja),m=dr.lengthSq(),_=Math.abs(1-f*f);let S,x,y,T;if(_>0)if(S=f*p-d,x=f*d-p,T=u*_,S>=0)if(x>=-T)if(x<=T){const w=1/_;S*=w,x*=w,y=S*(S+f*x+2*d)+x*(f*S+x+2*p)+m}else x=u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x=-u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-T?(S=Math.max(0,-(-f*u+d)),x=S>0?-u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m):x<=T?(S=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(S=Math.max(0,-(f*u+d)),x=S>0?u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m);else x=f>0?-u:u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Tc).addScaledVector(Ja,x),y}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){wc.subVectors(n,e),el.subVectors(r,e),Ac.crossVectors(wc,el);let f=this.direction.dot(Ac),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(el.crossVectors(dr,el));if(p<0)return null;const m=d*this.direction.dot(wc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(Ac);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,r,a,u,f,d,p,m,_,S,x,y,T,w,v){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,S,x,y,T,w,v)}set(e,n,r,a,u,f,d,p,m,_,S,x,y,T,w,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=S,g[14]=x,g[3]=y,g[7]=T,g[11]=w,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=f*_,y=f*S,T=d*_,w=d*S;n[0]=p*_,n[4]=-p*S,n[8]=m,n[1]=y+T*m,n[5]=x-w*m,n[9]=-d*p,n[2]=w-x*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,y=p*S,T=m*_,w=m*S;n[0]=x+w*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*S,n[5]=f*_,n[9]=-d,n[2]=y*d-T,n[6]=w+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,y=p*S,T=m*_,w=m*S;n[0]=x-w*d,n[4]=-f*S,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*_,n[9]=w-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,y=f*S,T=d*_,w=d*S;n[0]=p*_,n[4]=T*m-y,n[8]=x*m+w,n[1]=p*S,n[5]=w*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=w-x*S,n[8]=T*S+y,n[1]=S,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*S+T,n[10]=x-w*S}else if(e.order==="XZY"){const x=f*p,y=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=-S,n[8]=m*_,n[1]=x*S+w,n[5]=f*_,n[9]=y*S-T,n[2]=T*S-y,n[6]=d*_,n[10]=w*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,$v)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),tl.crossVectors(On,hr),a[0]=hr.x,a[4]=tl.x,a[8]=On.x,a[1]=hr.y,a[5]=tl.y,a[9]=On.y,a[2]=hr.z,a[6]=tl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],S=r[5],x=r[9],y=r[13],T=r[2],w=r[6],v=r[10],g=r[14],I=r[3],L=r[7],C=r[11],G=r[15],B=a[0],F=a[4],Y=a[8],P=a[12],R=a[1],z=a[5],le=a[9],te=a[13],ue=a[2],fe=a[6],oe=a[10],re=a[14],k=a[3],ae=a[7],ie=a[11],U=a[15];return u[0]=f*B+d*R+p*ue+m*k,u[4]=f*F+d*z+p*fe+m*ae,u[8]=f*Y+d*le+p*oe+m*ie,u[12]=f*P+d*te+p*re+m*U,u[1]=_*B+S*R+x*ue+y*k,u[5]=_*F+S*z+x*fe+y*ae,u[9]=_*Y+S*le+x*oe+y*ie,u[13]=_*P+S*te+x*re+y*U,u[2]=T*B+w*R+v*ue+g*k,u[6]=T*F+w*z+v*fe+g*ae,u[10]=T*Y+w*le+v*oe+g*ie,u[14]=T*P+w*te+v*re+g*U,u[3]=I*B+L*R+C*ue+G*k,u[7]=I*F+L*z+C*fe+G*ae,u[11]=I*Y+L*le+C*oe+G*ie,u[15]=I*P+L*te+C*re+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],S=e[6],x=e[10],y=e[14],T=e[3],w=e[7],v=e[11],g=e[15];return T*(+u*p*S-a*m*S-u*d*x+r*m*x+a*d*y-r*p*y)+w*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*_-u*p*_)+v*(+n*m*S-n*d*y-u*f*S+r*f*y+u*d*_-r*m*_)+g*(-a*d*_-n*p*S+n*d*x+a*f*S-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=e[9],x=e[10],y=e[11],T=e[12],w=e[13],v=e[14],g=e[15],I=S*v*m-w*x*m+w*p*y-d*v*y-S*p*g+d*x*g,L=T*x*m-_*v*m-T*p*y+f*v*y+_*p*g-f*x*g,C=_*w*m-T*S*m+T*d*y-f*w*y-_*d*g+f*S*g,G=T*S*p-_*w*p-T*d*x+f*w*x+_*d*v-f*S*v,B=n*I+r*L+a*C+u*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=I*F,e[1]=(w*x*u-S*v*u-w*a*y+r*v*y+S*a*g-r*x*g)*F,e[2]=(d*v*u-w*p*u+w*a*m-r*v*m-d*a*g+r*p*g)*F,e[3]=(S*p*u-d*x*u-S*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=L*F,e[5]=(_*v*u-T*x*u+T*a*y-n*v*y-_*a*g+n*x*g)*F,e[6]=(T*p*u-f*v*u-T*a*m+n*v*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=C*F,e[9]=(T*S*u-_*w*u-T*r*y+n*w*y+_*r*g-n*S*g)*F,e[10]=(f*w*u-T*d*u+T*r*m-n*w*m-f*r*g+n*d*g)*F,e[11]=(_*d*u-f*S*u-_*r*m+n*S*m+f*r*y-n*d*y)*F,e[12]=G*F,e[13]=(_*w*a-T*S*a+T*r*x-n*w*x-_*r*v+n*S*v)*F,e[14]=(T*d*a-f*w*a-T*r*p+n*w*p+f*r*v-n*d*v)*F,e[15]=(f*S*a-_*d*a+_*r*p-n*S*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,S=d+d,x=u*m,y=u*_,T=u*S,w=f*_,v=f*S,g=d*S,I=p*m,L=p*_,C=p*S,G=r.x,B=r.y,F=r.z;return a[0]=(1-(w+g))*G,a[1]=(y+C)*G,a[2]=(T-L)*G,a[3]=0,a[4]=(y-C)*B,a[5]=(1-(x+g))*B,a[6]=(v+I)*B,a[7]=0,a[8]=(T+L)*F,a[9]=(v-I)*F,a[10]=(1-(x+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const m=1/u,_=1/f,S=1/d;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=_,ti.elements[5]*=_,ti.elements[6]*=_,ti.elements[8]*=S,ti.elements[9]*=S,ti.elements[10]*=S,n.setFromRotationMatrix(ti),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=ki){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),S=(n+e)/(n-e),x=(r+a)/(r-a);let y,T;if(d===ki)y=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Al)y=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=ki){const p=this.elements,m=1/(n-e),_=1/(r-a),S=1/(f-u),x=(n+e)*m,y=(r+a)*_;let T,w;if(d===ki)T=(f+u)*S,w=-2*S;else if(d===Al)T=u*S,w=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new ee,ti=new kt,jv=new ee(0,0,0),$v=new ee(1,1,1),hr=new ee,tl=new ee,On=new ee,Bp=new kt,kp=new Bo;class vi{constructor(e=0,n=0,r=0,a=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],S=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const zp=new ee,As=new Bo,Ui=new kt,nl=new ee,Lo=new ee,Zv=new ee,Qv=new Bo,Hp=new ee(1,0,0),Vp=new ee(0,1,0),Gp=new ee(0,0,1),Wp={type:"added"},Jv={type:"removed"},Rs={type:"childadded",child:null},Rc={type:"childremoved",child:null};class ln extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new ee,n=new vi,r=new Bo,a=new ee(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new st}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?nl.copy(e):nl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Lo,nl,this.up):Ui.lookAt(nl,Lo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Ui),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jv),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),S=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new ee(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new ee,Ii=new ee,Cc=new ee,Ni=new ee,Cs=new ee,Ps=new ee,Xp=new ee,Pc=new ee,bc=new ee,Lc=new ee,Dc=new Gt,Uc=new Gt,Ic=new Gt;class ri{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ni.subVectors(e,n),a.cross(ni);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ni.subVectors(a,n),Ii.subVectors(r,n),Cc.subVectors(e,n);const f=ni.dot(ni),d=ni.dot(Ii),p=ni.dot(Cc),m=Ii.dot(Ii),_=Ii.dot(Cc),S=f*m-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(m*p-d*_)*x,T=(f*_-d*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(f,Ni.y),p.addScaledVector(d,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Dc.setScalar(0),Uc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Dc,u.x),f.addScaledVector(Uc,u.y),f.addScaledVector(Ic,u.z),f}static isFrontFacing(e,n,r,a){return ni.subVectors(r,n),Ii.subVectors(e,n),ni.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Ps.subVectors(u,r),Pc.subVectors(e,r);const p=Cs.dot(Pc),m=Ps.dot(Pc);if(p<=0&&m<=0)return n.copy(r);bc.subVectors(e,a);const _=Cs.dot(bc),S=Ps.dot(bc);if(_>=0&&S<=_)return n.copy(a);const x=p*S-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Cs,f);Lc.subVectors(e,u);const y=Cs.dot(Lc),T=Ps.dot(Lc);if(T>=0&&y<=T)return n.copy(u);const w=y*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ps,d);const v=_*T-y*S;if(v<=0&&S-_>=0&&y-T>=0)return Xp.subVectors(u,a),d=(S-_)/(S-_+(y-T)),n.copy(a).addScaledVector(Xp,d);const g=1/(v+w+x);return f=w*g,d=x*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Nc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Fv(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Nc(f,u,e+1/3),this.g=Nc(f,u,e),this.b=Nc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(mt(gn.r*255,0,255))*65536+Math.round(mt(gn.g*255,0,255))*256+Math.round(mt(gn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,u=gn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const S=f-d;switch(m=_<=.5?S/(f+d):S/(2-f-d),f){case r:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-r)/S+2;break;case u:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(il);const r=vc(pr.h,il.h,n),a=vc(pr.s,il.s,n),u=vc(pr.l,il.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new St;St.NAMES=qm;let e0=0;class qs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=Fs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zc&&(r.blendSrc=this.blendSrc),this.blendDst!==Qc&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jm extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ee,rl=new wt;class ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),u=bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class $m extends ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class li extends ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t0=0;const Xn=new kt,Fc=new ln,bs=new ee,Bn=new ko,Do=new ko,rn=new ee;class xi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Bn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(Bn.min,Do.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,Do.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(Do.min),Bn.expandByPoint(Do.max))}Bn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)rn.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),rn.add(bs)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new ee,p[Y]=new ee;const m=new ee,_=new ee,S=new ee,x=new wt,y=new wt,T=new wt,w=new ee,v=new ee;function g(Y,P,R){m.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,R),x.fromBufferAttribute(u,Y),y.fromBufferAttribute(u,P),T.fromBufferAttribute(u,R),_.sub(m),S.sub(m),y.sub(x),T.sub(x);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(z),v.copy(S).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),d[Y].add(w),d[P].add(w),d[R].add(w),p[Y].add(v),p[P].add(v),p[R].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,P=I.length;Y<P;++Y){const R=I[Y],z=R.start,le=R.count;for(let te=z,ue=z+le;te<ue;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new ee,C=new ee,G=new ee,B=new ee;function F(Y){G.fromBufferAttribute(a,Y),B.copy(G);const P=d[Y];L.copy(P),L.sub(G.multiplyScalar(G.dot(P))).normalize(),C.crossVectors(B,P);const z=C.dot(p[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,z)}for(let Y=0,P=I.length;Y<P;++Y){const R=I[Y],z=R.start,le=R.count;for(let te=z,ue=z+le;te<ue;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ee,u=new ee,f=new ee,d=new ee,p=new ee,m=new ee,_=new ee,S=new ee;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),w=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,v),_.subVectors(f,u),S.subVectors(a,u),_.cross(S),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),S.subVectors(a,u),_.cross(S),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,S=d.normalized,x=new m.constructor(p.length*_);let y=0,T=0;for(let w=0,v=p.length;w<v;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let g=0;g<_;g++)x[T++]=m[y++]}return new ai(x,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,S=m.length;_<S;_++){const x=m[_],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],S=u[m];for(let x=0,y=S.length;x<y;x++)_.push(S[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new kt,Br=new Xm,sl=new Ll,qp=new ee,ol=new ee,al=new ee,ll=new ee,Oc=new ee,ul=new ee,jp=new ee,cl=new ee;class _i extends ln{constructor(e=new xi,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ul.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],S=u[p];_!==0&&(Oc.fromBufferAttribute(S,e),f?ul.addScaledVector(Oc,_):ul.addScaledVector(Oc.sub(n),_))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(u),Br.copy(e.ray).recast(e.near),!(sl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(sl,qp)===null||Br.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(u).invert(),Br.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const v=x[T],g=f[v.materialIndex],I=Math.max(v.start,y.start),L=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let C=I,G=L;C<G;C+=3){const B=d.getX(C),F=d.getX(C+1),Y=d.getX(C+2);a=fl(this,g,e,r,m,_,S,B,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let v=T,g=w;v<g;v+=3){const I=d.getX(v),L=d.getX(v+1),C=d.getX(v+2);a=fl(this,f,e,r,m,_,S,I,L,C),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const v=x[T],g=f[v.materialIndex],I=Math.max(v.start,y.start),L=Math.min(p.count,Math.min(v.start+v.count,y.start+y.count));for(let C=I,G=L;C<G;C+=3){const B=C,F=C+1,Y=C+2;a=fl(this,g,e,r,m,_,S,B,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let v=T,g=w;v<g;v+=3){const I=v,L=v+1,C=v+2;a=fl(this,f,e,r,m,_,S,I,L,C),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function n0(o,e,n,r,a,u,f,d){let p;if(e.side===Ln?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Sr,d),p===null)return null;cl.copy(d),cl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(cl);return m<n.near||m>n.far?null:{distance:m,point:cl.clone(),object:o}}function fl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,ol),o.getVertexPosition(p,al),o.getVertexPosition(m,ll);const _=n0(o,e,n,r,ol,al,ll,jp);if(_){const S=new ee;ri.getBarycoord(jp,ol,al,ll,S),a&&(_.uv=ri.getInterpolatedAttribute(a,d,p,m,S,new wt)),u&&(_.uv1=ri.getInterpolatedAttribute(u,d,p,m,S,new wt)),f&&(_.normal=ri.getInterpolatedAttribute(f,d,p,m,S,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ee,materialIndex:0};ri.getNormal(ol,al,ll,x.normal),_.face=x,_.barycoord=S}return _}class zo extends xi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],S=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new li(m,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(S,2));function T(w,v,g,I,L,C,G,B,F,Y,P){const R=C/F,z=G/Y,le=C/2,te=G/2,ue=B/2,fe=F+1,oe=Y+1;let re=0,k=0;const ae=new ee;for(let ie=0;ie<oe;ie++){const U=ie*z-te;for(let ne=0;ne<fe;ne++){const Ie=ne*R-le;ae[w]=Ie*I,ae[v]=U*L,ae[g]=ue,m.push(ae.x,ae.y,ae.z),ae[w]=0,ae[v]=0,ae[g]=B>0?1:-1,_.push(ae.x,ae.y,ae.z),S.push(ne/F),S.push(1-ie/Y),re+=1}}for(let ie=0;ie<Y;ie++)for(let U=0;U<F;U++){const ne=x+U+fe*ie,Ie=x+U+fe*(ie+1),Z=x+(U+1)+fe*(ie+1),he=x+(U+1)+fe*ie;p.push(ne,Ie,he),p.push(Ie,Z,he),k+=6}d.addGroup(y,k,P),y+=k,x+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=Xs(o[n]);for(const a in r)e[a]=r[a]}return e}function i0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Zm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const r0={clone:Xs,merge:Mn};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Qm extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ee,$p=new wt,Kp=new wt;class qn extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,$p,Kp),n.subVectors(Kp,$p)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class a0 extends ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const u=new qn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new qn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new qn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new qn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new qn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Al)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(S,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Jm extends Dn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new zo(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:vr});u.uniforms.tEquirect.value=n;const f=new _i(a,u),d=n.minFilter;return n.minFilter===qr&&(n.minFilter=gi),new a0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class u0 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bc=new ee,c0=new ee,f0=new st;class Vr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bc.subVectors(r,n).cross(c0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||f0.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ll,dl=new ee;class jf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],S=a[6],x=a[7],y=a[8],T=a[9],w=a[10],v=a[11],g=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,v-y,C-g).normalize(),r[1].setComponents(p+u,x+m,v+y,C+g).normalize(),r[2].setComponents(p+f,x+_,v+T,C+I).normalize(),r[3].setComponents(p-f,x-_,v-T,C-I).normalize(),r[4].setComponents(p-d,x-S,v-w,C-L).normalize(),n===ki)r[5].setComponents(p+d,x+S,v+w,C+L).normalize();else if(n===Al)r[5].setComponents(d,S,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eg extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new ee,Pl=new ee,Zp=new kt,Uo=new Xm,hl=new Ll,kc=new ee,Qp=new ee;class d0 extends ln{constructor(e=new xi,n=new eg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Cl.fromBufferAttribute(n,a-1),Pl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new li(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(a),hl.radius+=u,e.ray.intersectsSphere(hl)===!1)return;Zp.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(Zp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const y=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let w=y,v=T-1;w<v;w+=m){const g=_.getX(w),I=_.getX(w+1),L=pl(this,e,Uo,p,g,I);L&&n.push(L)}if(this.isLineLoop){const w=_.getX(T-1),v=_.getX(y),g=pl(this,e,Uo,p,w,v);g&&n.push(g)}}else{const y=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let w=y,v=T-1;w<v;w+=m){const g=pl(this,e,Uo,p,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=pl(this,e,Uo,p,T-1,y);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function pl(o,e,n,r,a,u){const f=o.geometry.attributes.position;if(Cl.fromBufferAttribute(f,a),Pl.fromBufferAttribute(f,u),n.distanceSqToSegment(Cl,Pl,kc,Qp)>r)return;kc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(kc);if(!(p<e.near||p>e.far))return{distance:p,point:Qp.clone().applyMatrix4(o.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:o}}class ml extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class tg extends Dn{constructor(e,n,r,a,u,f,d,p,m,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=jr),r===void 0&&_===Gs&&(r=Vs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:oi,this.minFilter=p!==void 0?p:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Dl extends xi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,S=e/d,x=n/p,y=[],T=[],w=[],v=[];for(let g=0;g<_;g++){const I=g*x-f;for(let L=0;L<m;L++){const C=L*S-u;T.push(C,-I,0),w.push(0,0,1),v.push(L/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const L=I+m*g,C=I+m*(g+1),G=I+1+m*(g+1),B=I+1+m*g;y.push(L,C,B),y.push(C,G,B)}this.setIndex(y),this.setAttribute("position",new li(T,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class $f extends xi{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],S=new ee,x=new ee,y=[],T=[],w=[],v=[];for(let g=0;g<=r;g++){const I=[],L=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let G=0;G<=n;G++){const B=G/n;S.x=-e*Math.cos(a+B*u)*Math.sin(f+L*d),S.y=e*Math.cos(f+L*d),S.z=e*Math.sin(a+B*u)*Math.sin(f+L*d),T.push(S.x,S.y,S.z),x.copy(S).normalize(),w.push(x.x,x.y,x.z),v.push(B+C,1-L),I.push(m++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const L=_[g][I+1],C=_[g][I],G=_[g+1][I],B=_[g+1][I+1];(g!==0||f>0)&&y.push(L,C,B),(g!==r-1||p<Math.PI)&&y.push(C,G,B)}this.setIndex(y),this.setAttribute("position",new li(T,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h0 extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zm,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p0 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ng extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const zc=new kt,Jp=new ee,em=new ee;class g0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jf,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jp),em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(em),n.updateMatrixWorld(),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ig extends Qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _0 extends g0{constructor(){super(new ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v0 extends ng{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x0 extends ng{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class S0 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function tm(o,e,n,r){const a=y0(r);switch(n){case Um:return o*e;case Nm:return o*e;case Fm:return o*e*2;case Om:return o*e/a.components*a.byteLength;case Xf:return o*e/a.components*a.byteLength;case Bm:return o*e*2/a.components*a.byteLength;case Yf:return o*e*2/a.components*a.byteLength;case Im:return o*e*3/a.components*a.byteLength;case si:return o*e*4/a.components*a.byteLength;case qf:return o*e*4/a.components*a.byteLength;case xl:case Sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yl:case Ml:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:case pf:return Math.max(o,16)*Math.max(e,8)/4;case ff:case hf:return Math.max(o,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case El:case Df:case Uf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case km:case If:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Nf:case Ff:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y0(o){switch(o){case Hi:case bm:return{byteLength:1,components:1};case No:case Lm:case Fo:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case jr:case Vf:case Bi:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rg(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function M0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const _=p.array,S=p.updateRanges;if(o.bindBuffer(m,d),S.length===0)o.bufferSubData(m,0,_);else{S.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<S.length;y++){const T=S[x],w=S[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,S[x]=w)}S.length=x+1;for(let y=0,T=S.length;y<T;y++){const w=S[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:w0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:b0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:I0,bsdfs:N0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:Y0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:j0,displacementmap_pars_vertex:$0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:Q0,colorspace_fragment:J0,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:ux,gradientmap_pars_fragment:cx,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:hx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:Sx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:Tx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:bx,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Nx,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:$x,opaque_fragment:Kx,packing:Zx,premultiplied_alpha_fragment:Qx,project_vertex:Jx,dithering_fragment:eS,dithering_pars_fragment:tS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:rS,shadowmap_pars_vertex:sS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:uS,skinning_vertex:cS,skinnormal_vertex:fS,specularmap_fragment:dS,specularmap_pars_fragment:hS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:_S,uv_pars_fragment:vS,uv_pars_vertex:xS,uv_vertex:SS,worldpos_vertex:yS,background_vert:MS,background_frag:ES,backgroundCube_vert:TS,backgroundCube_frag:wS,cube_vert:AS,cube_frag:RS,depth_vert:CS,depth_frag:PS,distanceRGBA_vert:bS,distanceRGBA_frag:LS,equirect_vert:DS,equirect_frag:US,linedashed_vert:IS,linedashed_frag:NS,meshbasic_vert:FS,meshbasic_frag:OS,meshlambert_vert:BS,meshlambert_frag:kS,meshmatcap_vert:zS,meshmatcap_frag:HS,meshnormal_vert:VS,meshnormal_frag:GS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:YS,meshphysical_frag:qS,meshtoon_vert:jS,meshtoon_frag:$S,points_vert:KS,points_frag:ZS,shadow_vert:QS,shadow_frag:JS,sprite_vert:ey,sprite_frag:ty},Ce={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const gl={r:0,b:0,g:0},zr=new vi,ny=new kt;function iy(o,e,n,r,a,u,f){const d=new St(0);let p=u===!0?0:1,m,_,S=null,x=0,y=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function w(L){let C=!1;const G=T(L);G===null?g(d,p):G&&G.isColor&&(g(G,1),C=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(L,C){const G=T(C);G&&(G.isCubeTexture||G.mapping===bl)?(_===void 0&&(_=new _i(new zo(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Xs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(C.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(zr)),_.material.toneMapped=Mt.getTransfer(G.colorSpace)!==Ct,(S!==G||x!==G.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new _i(new Dl(2,2),new yr({name:"BackgroundMaterial",uniforms:Xs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(G.colorSpace)!==Ct,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(S!==G||x!==G.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,C){L.getRGB(gl,Zm(o)),r.buffers.color.setClear(gl.r,gl.g,gl.b,C,f)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:w,addToRenderList:v,dispose:I}}function ry(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,z,le,te,ue){let fe=!1;const oe=S(te,le,z);u!==oe&&(u=oe,m(u.object)),fe=y(R,te,le,ue),fe&&T(R,te,le,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,C(R,z,le,te),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function S(R,z,le){const te=le.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let fe=ue[z.id];fe===void 0&&(fe={},ue[z.id]=fe);let oe=fe[te];return oe===void 0&&(oe=x(p()),fe[te]=oe),oe}function x(R){const z=[],le=[],te=[];for(let ue=0;ue<n;ue++)z[ue]=0,le[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:te,object:R,attributes:{},index:null}}function y(R,z,le,te){const ue=u.attributes,fe=z.attributes;let oe=0;const re=le.getAttributes();for(const k in re)if(re[k].location>=0){const ie=ue[k];let U=fe[k];if(U===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;oe++}return u.attributesNum!==oe||u.index!==te}function T(R,z,le,te){const ue={},fe=z.attributes;let oe=0;const re=le.getAttributes();for(const k in re)if(re[k].location>=0){let ie=fe[k];ie===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),ue[k]=U,oe++}u.attributes=ue,u.attributesNum=oe,u.index=te}function w(){const R=u.newAttributes;for(let z=0,le=R.length;z<le;z++)R[z]=0}function v(R){g(R,0)}function g(R,z){const le=u.newAttributes,te=u.enabledAttributes,ue=u.attributeDivisors;le[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ue[R]!==z&&(o.vertexAttribDivisor(R,z),ue[R]=z)}function I(){const R=u.newAttributes,z=u.enabledAttributes;for(let le=0,te=z.length;le<te;le++)z[le]!==R[le]&&(o.disableVertexAttribArray(le),z[le]=0)}function L(R,z,le,te,ue,fe,oe){oe===!0?o.vertexAttribIPointer(R,z,le,ue,fe):o.vertexAttribPointer(R,z,le,te,ue,fe)}function C(R,z,le,te){w();const ue=te.attributes,fe=le.getAttributes(),oe=z.defaultAttributeValues;for(const re in fe){const k=fe[re];if(k.location>=0){let ae=ue[re];if(ae===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const ie=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,he=ne.bytesPerElement,ye=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===Vf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)v(k.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<k.locationSize;Ze++)L(k.location+Ze,U/k.locationSize,Z,ie,Te*he,(Ue+U/k.locationSize*Ze)*he,ye)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)v(k.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,U/k.locationSize,Z,ie,U*he,U/k.locationSize*ve*he,ye)}}else if(oe!==void 0){const ie=oe[re];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(k.location,ie);break;case 3:o.vertexAttrib3fv(k.location,ie);break;case 4:o.vertexAttrib4fv(k.location,ie);break;default:o.vertexAttrib1fv(k.location,ie)}}}}I()}function G(){Y();for(const R in r){const z=r[R];for(const le in z){const te=z[le];for(const ue in te)_(te[ue].object),delete te[ue];delete z[le]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const le in z){const te=z[le];for(const ue in te)_(te[ue].object),delete te[ue];delete z[le]}delete r[R.id]}function F(R){for(const z in r){const le=r[z];if(le[R.id]===void 0)continue;const te=le[R.id];for(const ue in te)_(te[ue].object),delete te[ue];delete le[R.id]}}function Y(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:v,disableUnusedAttributes:I}}function sy(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,S){S!==0&&(o.drawArraysInstanced(r,m,_,S),n.update(_,r,S))}function d(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,S);let y=0;for(let T=0;T<S;T++)y+=_[T];n.update(y,r,1)}function p(m,_,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)f(m[T],_[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,S);let T=0;for(let w=0;w<S;w++)T+=_[w]*x[w];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function oy(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==si&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Hi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!Y)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),v=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:G,maxSamples:B}}function ay(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||a;return a=x,r=S.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){n=_(S,x,0)},this.setState=function(S,x,y){const T=S.clippingPlanes,w=S.clipIntersection,v=S.clipShadows,g=o.get(S);if(!a||T===null||T.length===0||u&&!v)u?_(null):m();else{const I=u?0:r,L=I*4;let C=g.clippingState||null;p.value=C,C=_(T,x,L,y);for(let G=0;G!==L;++G)C[G]=n[G];g.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,x,y,T){const w=S!==null?S.length:0;let v=null;if(w!==0){if(v=p.value,T!==!0||v===null){const g=y+w*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,C=y;L!==w;++L,C+=4)f.copy(S[L]).applyMatrix4(I,d),f.normal.toArray(v,C),v[C+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function ly(o){let e=new WeakMap;function n(f,d){return d===af?f.mapping=zs:d===lf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===af||d===lf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new l0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,nm=[.125,.215,.35,.446,.526,.582],Xr=20,Hc=new ig,im=new St;let Vc=null,Gc=0,Wc=0,Xc=!1;const Gr=(1+Math.sqrt(5))/2,Us=1/Gr,rm=[new ee(-Gr,Us,0),new ee(Gr,Us,0),new ee(-Us,0,Gr),new ee(Us,0,Gr),new ee(0,Gr,-Us),new ee(0,Gr,Us),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Fo,format:si,colorSpace:Ws,depthBuffer:!1},a=om(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(u)),this._blurMaterial=cy(u,e,n)}return a}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,r,a){const d=new qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,x=_.toneMapping;_.getClearColor(im),_.toneMapping=xr,_.autoClear=!1;const y=new jm({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new _i(new zo,y);let w=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,w=!0):(y.color.copy(im),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;_l(a,I*L,g>2?L:0,L,L),_.setRenderTarget(a),w&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=S,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new _i(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Hc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=rm[(a-u-1)%rm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new _i(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Xr-1),w=u/T,v=isFinite(u)?1+Math.floor(_*w):Xr;v>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const g=[];let I=0;for(let F=0;F<Xr;++F){const Y=F/w,P=Math.exp(-Y*Y/2);g.push(P),F===0?I+=P:F<v&&(I+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[a],G=3*C*(a>L-Ns?a-L+Ns:0),B=4*(this._cubeSize-C);_l(n,G,B,3*C,2*C),p.setRenderTarget(n),p.render(S,Hc)}}function uy(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+nm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ns?p=nm[f-o+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,S=1+m,x=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,T=6,w=3,v=2,g=1,I=new Float32Array(w*T*y),L=new Float32Array(v*T*y),C=new Float32Array(g*T*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,Y=B>2?0:-1,P=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];I.set(P,w*T*B),L.set(x,v*T*B);const R=[B,B,B,B,B,B];C.set(R,g*T*B)}const G=new xi;G.setAttribute("position",new ai(I,w)),G.setAttribute("uv",new ai(L,v)),G.setAttribute("faceIndex",new ai(C,g)),e.push(G),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function om(o,e,n){const r=new $r(o,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function cy(o,e,n){const r=new Float32Array(Xr),a=new ee(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function am(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fy(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===af||p===lf,_=p===zs||p===Hs;if(m||_){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new sm(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new sm(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function dy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Is("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hy(o,e,n,r){const a={},u=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(S){const x=[],y=S.index,T=S.attributes.position;let w=0;if(y!==null){const I=y.array;w=y.version;for(let L=0,C=I.length;L<C;L+=3){const G=I[L+0],B=I[L+1],F=I[L+2];x.push(G,B,B,F,F,G)}}else if(T!==void 0){const I=T.array;w=T.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const G=L+0,B=L+1,F=L+2;x.push(G,B,B,F,F,G)}}else return;const v=new(Vm(x)?Km:$m)(x,1);v.version=w;const g=u.get(S);g&&e.remove(g),u.set(S,v)}function _(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return u.get(S)}return{get:d,update:p,getWireframeAttribute:_}}function py(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,T){T!==0&&(o.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function _(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let v=0;for(let g=0;g<T;g++)v+=y[g];n.update(v,r,1)}function S(x,y,T,w){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],w[g]);else{v.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,w,0,T);let g=0;for(let I=0;I<T;I++)g+=y[I]*w[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function my(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function gy(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let R=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),v===!0&&(C=3);let G=d.attributes.position.count*C,B=1;G>e.maxTextureSize&&(B=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*B*4*S),Y=new Wm(F,G,B,S);Y.type=Bi,Y.needsUpdate=!0;const P=C*4;for(let z=0;z<S;z++){const le=g[z],te=I[z],ue=L[z],fe=G*B*4*z;for(let oe=0;oe<le.count;oe++){const re=oe*P;T===!0&&(a.fromBufferAttribute(le,oe),F[fe+re+0]=a.x,F[fe+re+1]=a.y,F[fe+re+2]=a.z,F[fe+re+3]=0),w===!0&&(a.fromBufferAttribute(te,oe),F[fe+re+4]=a.x,F[fe+re+5]=a.y,F[fe+re+6]=a.z,F[fe+re+7]=0),v===!0&&(a.fromBufferAttribute(ue,oe),F[fe+re+8]=a.x,F[fe+re+9]=a.y,F[fe+re+10]=a.z,F[fe+re+11]=ue.itemSize===4?a.w:1)}}x={count:S,texture:Y,size:new wt(G,B)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function _y(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,S=e.get(p,_);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return S}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const sg=new Dn,um=new tg(1,1),og=new Wm,ag=new Yv,lg=new Jm,cm=[],fm=[],dm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function js(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=cm[a];if(u===void 0&&(u=new Float32Array(a),cm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Kt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Zt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ul(o,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function vy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function xy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2fv(this.addr,e),Zt(n,e)}}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;o.uniform3fv(this.addr,e),Zt(n,e)}}function yy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4fv(this.addr,e),Zt(n,e)}}function My(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;pm.set(r),o.uniformMatrix2fv(this.addr,!1,pm),Zt(n,r)}}function Ey(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;hm.set(r),o.uniformMatrix3fv(this.addr,!1,hm),Zt(n,r)}}function Ty(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;dm.set(r),o.uniformMatrix4fv(this.addr,!1,dm),Zt(n,r)}}function wy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2iv(this.addr,e),Zt(n,e)}}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3iv(this.addr,e),Zt(n,e)}}function Cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4iv(this.addr,e),Zt(n,e)}}function Py(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function by(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2uiv(this.addr,e),Zt(n,e)}}function Ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3uiv(this.addr,e),Zt(n,e)}}function Dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4uiv(this.addr,e),Zt(n,e)}}function Uy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(um.compareFunction=Hm,u=um):u=sg,n.setTexture2D(e||u,a)}function Iy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ag,a)}function Ny(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||lg,a)}function Fy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||og,a)}function Oy(o){switch(o){case 5126:return vy;case 35664:return xy;case 35665:return Sy;case 35666:return yy;case 35674:return My;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return wy;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return by;case 36295:return Ly;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Fy}}function By(o,e){o.uniform1fv(this.addr,e)}function ky(o,e){const n=js(e,this.size,2);o.uniform2fv(this.addr,n)}function zy(o,e){const n=js(e,this.size,3);o.uniform3fv(this.addr,n)}function Hy(o,e){const n=js(e,this.size,4);o.uniform4fv(this.addr,n)}function Vy(o,e){const n=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Gy(o,e){const n=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Wy(o,e){const n=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Xy(o,e){o.uniform1iv(this.addr,e)}function Yy(o,e){o.uniform2iv(this.addr,e)}function qy(o,e){o.uniform3iv(this.addr,e)}function jy(o,e){o.uniform4iv(this.addr,e)}function $y(o,e){o.uniform1uiv(this.addr,e)}function Ky(o,e){o.uniform2uiv(this.addr,e)}function Zy(o,e){o.uniform3uiv(this.addr,e)}function Qy(o,e){o.uniform4uiv(this.addr,e)}function Jy(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||sg,u[f])}function eM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||ag,u[f])}function tM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||lg,u[f])}function nM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||og,u[f])}function iM(o){switch(o){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Hy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return qy;case 35669:case 35673:return jy;case 5125:return $y;case 36294:return Ky;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Oy(n.type)}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iM(n.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function mm(o,e){o.seq.push(e),o.map[e.id]=e}function aM(o,e,n){const r=o.name,a=r.length;for(Yc.lastIndex=0;;){const u=Yc.exec(r),f=Yc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){mm(n,m===void 0?new rM(d,o,e):new sM(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new oM(d),mm(n,S)),n=S}}}class Tl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);aM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function gm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const lM=37297;let uM=0;function cM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const _m=new st;function fM(o){Mt._getMatrix(_m,Mt.workingColorSpace,o);const e=`mat3( ${_m.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case wl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function vm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+cM(o.getShaderSource(e),f)}else return a}function dM(o,e){const n=fM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hM(o,e){let n;switch(e){case vv:n="Linear";break;case xv:n="Reinhard";break;case Sv:n="Cineon";break;case yv:n="ACESFilmic";break;case Ev:n="AgX";break;case Tv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new ee;function pM(){Mt.getLuminanceCoefficients(vl);const o=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function gM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function _M(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Io(o){return o!==""}function xm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(o){return o.replace(vM,SM)}const xM=new Map;function SM(o,e){let n=ot[e];if(n===void 0){const r=xM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(o){return o.replace(yM,MM)}function MM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Mm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function RM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function CM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=EM(n),m=TM(n),_=wM(n),S=AM(n),x=RM(n),y=mM(n),T=gM(u),w=a.createProgram();let v,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(v=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?ot.tonemapping_pars_fragment:"",n.toneMapping!==xr?hM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),pM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),f=Bf(f),f=xm(f,n),f=Sm(f,n),d=Bf(d),d=xm(d,n),d=Sm(d,n),f=ym(f),d=ym(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+v+f,C=I+g+d,G=gm(a,a.VERTEX_SHADER,L),B=gm(a,a.FRAGMENT_SHADER,C);a.attachShader(w,G),a.attachShader(w,B),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(z){if(o.debug.checkShaderErrors){const le=a.getProgramInfoLog(w).trim(),te=a.getShaderInfoLog(G).trim(),ue=a.getShaderInfoLog(B).trim();let fe=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,w,G,B);else{const re=vm(a,G,"vertex"),k=vm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+re+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||ue==="")&&(oe=!1);oe&&(z.diagnostics={runnable:fe,programLog:le,vertexShader:{log:te,prefix:v},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(G),a.deleteShader(B),Y=new Tl(a,w),P=_M(a,w)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,lM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=B,this}let PM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new LM(e),n.set(e,r)),r}}class LM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function DM(o,e,n,r,a,u,f){const d=new Ym,p=new bM,m=new Set,_=[],S=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function v(P,R,z,le,te){const ue=le.fog,fe=te.geometry,oe=P.isMeshStandardMaterial?le.environment:null,re=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),k=re&&re.mapping===bl?re.image.height:null,ae=T[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const ie=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ie!==void 0?ie.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,he,ye;if(ae){const _t=mi[ae];Ie=_t.vertexShader,Z=_t.fragmentShader}else Ie=P.vertexShader,Z=P.fragmentShader,p.update(P),he=p.getVertexShaderID(P),ye=p.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,Rt=!!P.map,dt=!!P.matcap,bt=!!re,O=!!P.aoMap,_n=!!P.lightMap,ft=!!P.bumpMap,lt=!!P.normalMap,Ye=!!P.displacementMap,At=!!P.emissiveMap,Ge=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,K=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,We=P.transmission>0,we=E&&!!P.anisotropyMap,Ne=K&&!!P.clearcoatMap,at=K&&!!P.clearcoatNormalMap,Me=K&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,je=ge&&!!P.iridescenceThicknessMap,Je=ce&&!!P.sheenColorMap,Be=ce&&!!P.sheenRoughnessMap,ut=!!P.specularMap,nt=!!P.specularColorMap,Et=!!P.specularIntensityMap,V=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,se=!!P.gradientMap,de=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Dt=xr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=o.toneMapping);const qt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Z,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!P.alphaToCoverage,map:Rt,matcap:dt,envMap:bt,envMapMode:bt&&re.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:_n,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:At,normalMapObjectSpace:lt&&P.normalMapType===Cv,normalMapTangentSpace:lt&&P.normalMapType===zm,metalnessMap:Ge,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:K,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Et,transmission:We,transmissionMap:V,thicknessMap:Ae,gradientMap:se,opaque:P.transparent===!1&&P.blending===Fs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Rt&&w(P.map.channel),aoMapUv:O&&w(P.aoMap.channel),lightMapUv:_n&&w(P.lightMap.channel),bumpMapUv:ft&&w(P.bumpMap.channel),normalMapUv:lt&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:At&&w(P.emissiveMap.channel),metalnessMapUv:Ge&&w(P.metalnessMap.channel),roughnessMapUv:b&&w(P.roughnessMap.channel),anisotropyMapUv:we&&w(P.anisotropyMap.channel),clearcoatMapUv:Ne&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:je&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:ut&&w(P.specularMap.channel),specularColorMapUv:nt&&w(P.specularColorMap.channel),specularIntensityMapUv:Et&&w(P.specularIntensityMap.channel),transmissionMapUv:V&&w(P.transmissionMap.channel),thicknessMapUv:Ae&&w(P.thicknessMap.channel),alphaMapUv:de&&w(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(lt||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!fe.attributes.uv&&(Rt||de),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)R.push(z),R.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(R,P),L(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function I(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=T[P.type];let z;if(R){const le=mi[R];z=r0.clone(le.uniforms)}else z=P.uniforms;return z}function G(P,R){let z;for(let le=0,te=_.length;le<te;le++){const ue=_[le];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new CM(o,R,P,u),_.push(z)),z}function B(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function Y(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:Y}}function UM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function IM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Em(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Tm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(S,x,y,T,w,v){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:T,renderOrder:S.renderOrder,z:w,group:v},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=T,g.renderOrder=S.renderOrder,g.z=w,g.group=v),e++,g}function d(S,x,y,T,w,v){const g=f(S,x,y,T,w,v);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(S,x,y,T,w,v){const g=f(S,x,y,T,w,v);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(S,x){n.length>1&&n.sort(S||IM),r.length>1&&r.sort(x||Em),a.length>1&&a.sort(x||Em)}function _(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function NM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Tm,o.set(r,[f])):a>=u.length?(f=new Tm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function FM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new St};break;case"SpotLight":n={position:new ee,direction:new ee,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[e.id]=n,n}}}function OM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let BM=0;function kM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function zM(o){const e=new FM,n=OM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,u=new kt,f=new kt;function d(m){let _=0,S=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,T=0,w=0,v=0,g=0,I=0,L=0,C=0,G=0,B=0,F=0;m.sort(kM);for(let P=0,R=m.length;P<R;P++){const z=m[P],le=z.color,te=z.intensity,ue=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=le.r*te,S+=le.g*te,x+=le.b*te;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],te);F++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const re=z.shadow,k=n.get(z);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=z.shadow.matrix,I++}r.directional[y]=oe,y++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(le).multiplyScalar(te),oe.distance=ue,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[w]=oe;const re=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,re.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[w]=re.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.spotShadow[w]=k,r.spotShadowMap[w]=fe,C++}w++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(le).multiplyScalar(te),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=oe,v++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const re=z.shadow,k=n.get(z);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,k.shadowCameraNear=re.camera.near,k.shadowCameraFar=re.camera.far,r.pointShadow[T]=k,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=oe,T++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(te),oe.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[g]=oe,g++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==y||Y.pointLength!==T||Y.spotLength!==w||Y.rectAreaLength!==v||Y.hemiLength!==g||Y.numDirectionalShadows!==I||Y.numPointShadows!==L||Y.numSpotShadows!==C||Y.numSpotMaps!==G||Y.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=v,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+G-B,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,Y.directionalLength=y,Y.pointLength=T,Y.spotLength=w,Y.rectAreaLength=v,Y.hemiLength=g,Y.numDirectionalShadows=I,Y.numPointShadows=L,Y.numSpotShadows=C,Y.numSpotMaps=G,Y.numLightProbes=F,r.version=BM++)}function p(m,_){let S=0,x=0,y=0,T=0,w=0;const v=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[S];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),S++}else if(L.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),y++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),f.identity(),u.copy(L.matrixWorld),u.premultiply(v),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(v),w++}}}return{setup:d,setupView:p,state:r}}function wm(o){const e=new zM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function HM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new wm(o),e.set(a,[d])):u>=f.length?(d=new wm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(o,e,n){let r=new jf;const a=new wt,u=new wt,f=new Gt,d=new p0({depthPacking:Rv}),p=new m0,m={},_=n.maxTextureSize,S={[Sr]:Ln,[Ln]:Sr,[Oi]:Oi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:VM,fragmentShader:GM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new xi;T.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new _i(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let g=this.type;this.render=function(B,F,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),le=o.state;le.setBlending(vr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=g!==Fi&&this.type===Fi,ue=g===Fi&&this.type!==Fi;for(let fe=0,oe=B.length;fe<oe;fe++){const re=B[fe],k=re.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,k.mapSize.y=u.y)),k.map===null||te===!0||ue===!0){const U=this.type!==Fi?{minFilter:oi,magFilter:oi}:{};k.map!==null&&k.map.dispose(),k.map=new $r(a.x,a.y,U),k.map.texture.name=re.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const ie=k.getViewportCount();for(let U=0;U<ie;U++){const ne=k.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),le.viewport(f),k.updateMatrices(re,U),r=k.getFrustum(),C(F,Y,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===Fi&&I(k,Y),k.needsUpdate=!1}g=this.type,v.needsUpdate=!1,o.setRenderTarget(P,R,z)};function I(B,F){const Y=e.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,Y,x,w,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,Y,y,w,null)}function L(B,F,Y,P){let R=null;const z=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)R=z;else if(R=Y.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=R.uuid,te=F.uuid;let ue=m[le];ue===void 0&&(ue={},m[le]=ue);let fe=ue[te];fe===void 0&&(fe=R.clone(),ue[te]=fe,F.addEventListener("dispose",G)),R=fe}if(R.visible=F.visible,R.wireframe=F.wireframe,P===Fi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:S[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=o.properties.get(R);le.light=Y}return R}function C(B,F,Y,P,R){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Fi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const te=e.update(B),ue=B.material;if(Array.isArray(ue)){const fe=te.groups;for(let oe=0,re=fe.length;oe<re;oe++){const k=fe[oe],ae=ue[k.materialIndex];if(ae&&ae.visible){const ie=L(B,ae,P,R);B.onBeforeShadow(o,B,F,Y,te,ie,k),o.renderBufferDirect(Y,null,te,ie,B,k),B.onAfterShadow(o,B,F,Y,te,ie,k)}}}else if(ue.visible){const fe=L(B,ue,P,R);B.onBeforeShadow(o,B,F,Y,te,fe,null),o.renderBufferDirect(Y,null,te,fe,B,null),B.onAfterShadow(o,B,F,Y,te,fe,null)}}const le=B.children;for(let te=0,ue=le.length;te<ue;te++)C(le[te],F,Y,P,R)}function G(B){B.target.removeEventListener("dispose",G);for(const Y in m){const P=m[Y],R=B.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const XM={[Jc]:ef,[tf]:sf,[nf]:of,[ks]:rf,[ef]:Jc,[sf]:tf,[of]:nf,[rf]:ks};function YM(o,e){function n(){let V=!1;const Ae=new Gt;let se=null;const de=new Gt(0,0,0,0);return{setMask:function(be){se!==be&&!V&&(o.colorMask(be,be,be,be),se=be)},setLocked:function(be){V=be},setClear:function(be,Pe,it,Dt,qt){qt===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Ae.set(be,Pe,it,Dt),de.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Dt),de.copy(Ae))},reset:function(){V=!1,se=null,de.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,se=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!V&&(o.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Ae&&(Pe=XM[Pe]),de!==Pe){switch(Pe){case Jc:o.depthFunc(o.NEVER);break;case ef:o.depthFunc(o.ALWAYS);break;case tf:o.depthFunc(o.LESS);break;case ks:o.depthFunc(o.LEQUAL);break;case nf:o.depthFunc(o.EQUAL);break;case rf:o.depthFunc(o.GEQUAL);break;case sf:o.depthFunc(o.GREATER);break;case of:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){V=!1,se=null,de=null,be=null,Ae=!1}}}function a(){let V=!1,Ae=null,se=null,de=null,be=null,Pe=null,it=null,Dt=null,qt=null;return{setTest:function(_t){V||(_t?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!V&&(o.stencilMask(_t),Ae=_t)},setFunc:function(_t,En,vn){(se!==_t||de!==En||be!==vn)&&(o.stencilFunc(_t,En,vn),se=_t,de=En,be=vn)},setOp:function(_t,En,vn){(Pe!==_t||it!==En||Dt!==vn)&&(o.stencilOp(_t,En,vn),Pe=_t,it=En,Dt=vn)},setLocked:function(_t){V=_t},setClear:function(_t){qt!==_t&&(o.clearStencil(_t),qt=_t)},reset:function(){V=!1,Ae=null,se=null,de=null,be=null,Pe=null,it=null,Dt=null,qt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},S={},x=new WeakMap,y=[],T=null,w=!1,v=null,g=null,I=null,L=null,C=null,G=null,B=null,F=new St(0,0,0),Y=0,P=!1,R=null,z=null,le=null,te=null,ue=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,re=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(k)[1]),oe=re>=1):k.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),oe=re>=2);let ae=null,ie={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ie=new Gt().fromArray(U),Z=new Gt().fromArray(ne);function he(V,Ae,se,de){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(V,Pe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<se;it++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const ye={};ye[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(ks),ft(!1),lt(Rp),ve(o.CULL_FACE),O(vr);function ve(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function Te(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function Ue(V,Ae){return S[V]!==Ae?(o.bindFramebuffer(V,Ae),S[V]=Ae,V===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ae),V===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let se=y,de=!1;if(V){se=x.get(Ae),se===void 0&&(se=[],x.set(Ae,se));const be=V.textures;if(se.length!==be.length||se[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)se[Pe]=o.COLOR_ATTACHMENT0+Pe;se.length=be.length,de=!0}}else se[0]!==o.BACK&&(se[0]=o.BACK,de=!0);de&&o.drawBuffers(se)}function Rt(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const dt={[Wr]:o.FUNC_ADD,[J_]:o.FUNC_SUBTRACT,[ev]:o.FUNC_REVERSE_SUBTRACT};dt[tv]=o.MIN,dt[nv]=o.MAX;const bt={[iv]:o.ZERO,[rv]:o.ONE,[sv]:o.SRC_COLOR,[Zc]:o.SRC_ALPHA,[fv]:o.SRC_ALPHA_SATURATE,[uv]:o.DST_COLOR,[av]:o.DST_ALPHA,[ov]:o.ONE_MINUS_SRC_COLOR,[Qc]:o.ONE_MINUS_SRC_ALPHA,[cv]:o.ONE_MINUS_DST_COLOR,[lv]:o.ONE_MINUS_DST_ALPHA,[dv]:o.CONSTANT_COLOR,[hv]:o.ONE_MINUS_CONSTANT_COLOR,[pv]:o.CONSTANT_ALPHA,[mv]:o.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ae,se,de,be,Pe,it,Dt,qt,_t){if(V===vr){w===!0&&(Te(o.BLEND),w=!1);return}if(w===!1&&(ve(o.BLEND),w=!0),V!==Q_){if(V!==v||_t!==P){if((g!==Wr||C!==Wr)&&(o.blendEquation(o.FUNC_ADD),g=Wr,C=Wr),_t)switch(V){case Fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.ONE,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,G=null,B=null,F.set(0,0,0),Y=0,v=V,P=_t}return}be=be||Ae,Pe=Pe||se,it=it||de,(Ae!==g||be!==C)&&(o.blendEquationSeparate(dt[Ae],dt[be]),g=Ae,C=be),(se!==I||de!==L||Pe!==G||it!==B)&&(o.blendFuncSeparate(bt[se],bt[de],bt[Pe],bt[it]),I=se,L=de,G=Pe,B=it),(Dt.equals(F)===!1||qt!==Y)&&(o.blendColor(Dt.r,Dt.g,Dt.b,qt),F.copy(Dt),Y=qt),v=V,P=!1}function _n(V,Ae){V.side===Oi?Te(o.CULL_FACE):ve(o.CULL_FACE);let se=V.side===Ln;Ae&&(se=!se),ft(se),V.blending===Fs&&V.transparent===!1?O(vr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const de=V.stencilWrite;d.setTest(de),de&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function lt(V){V!==$_?(ve(o.CULL_FACE),V!==z&&(V===Rp?o.cullFace(o.BACK):V===K_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=V}function Ye(V){V!==le&&(oe&&o.lineWidth(V),le=V)}function At(V,Ae,se){V?(ve(o.POLYGON_OFFSET_FILL),(te!==Ae||ue!==se)&&(o.polygonOffset(Ae,se),te=Ae,ue=se)):Te(o.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(V){V===void 0&&(V=o.TEXTURE0+fe-1),ae!==V&&(o.activeTexture(V),ae=V)}function E(V,Ae,se){se===void 0&&(ae===null?se=o.TEXTURE0+fe-1:se=ae);let de=ie[se];de===void 0&&(de={type:void 0,texture:void 0},ie[se]=de),(de.type!==V||de.texture!==Ae)&&(ae!==se&&(o.activeTexture(se),ae=se),o.bindTexture(V,Ae||ye[V]),de.type=V,de.texture=Ae)}function K(){const V=ie[ae];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ie.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Be(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ut(V,Ae){let se=m.get(Ae);se===void 0&&(se=new WeakMap,m.set(Ae,se));let de=se.get(V);de===void 0&&(de=o.getUniformBlockIndex(Ae,V.name),se.set(V,de))}function nt(V,Ae){const de=m.get(Ae).get(V);p.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,V.__bindingPointIndex),p.set(Ae,de))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ae=null,ie={},S={},x=new WeakMap,y=[],T=null,w=!1,v=null,g=null,I=null,L=null,C=null,G=null,B=null,F=new St(0,0,0),Y=0,P=!1,R=null,z=null,le=null,te=null,ue=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:O,setMaterial:_n,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:Ge,activeTexture:b,bindTexture:E,unbindTexture:K,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Me,texSubImage2D:ce,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:Et}}function qM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):Rl("canvas")}function w(b,E,K){let pe=1;const ge=Ge(b);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);S===void 0&&(S=T(ce,We));const we=E?T(ce,We):S;return we.width=ce,we.height=We,we.getContext("2d").drawImage(b,0,0,ce,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+We+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function v(b){return b.generateMipmaps}function g(b){o.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(b,E,K,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;if(E===o.RED&&(K===o.FLOAT&&(ce=o.R32F),K===o.HALF_FLOAT&&(ce=o.R16F),K===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.R8UI),K===o.UNSIGNED_SHORT&&(ce=o.R16UI),K===o.UNSIGNED_INT&&(ce=o.R32UI),K===o.BYTE&&(ce=o.R8I),K===o.SHORT&&(ce=o.R16I),K===o.INT&&(ce=o.R32I)),E===o.RG&&(K===o.FLOAT&&(ce=o.RG32F),K===o.HALF_FLOAT&&(ce=o.RG16F),K===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RG8UI),K===o.UNSIGNED_SHORT&&(ce=o.RG16UI),K===o.UNSIGNED_INT&&(ce=o.RG32UI),K===o.BYTE&&(ce=o.RG8I),K===o.SHORT&&(ce=o.RG16I),K===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),K===o.UNSIGNED_INT&&(ce=o.RGB32UI),K===o.BYTE&&(ce=o.RGB8I),K===o.SHORT&&(ce=o.RGB16I),K===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),K===o.UNSIGNED_INT&&(ce=o.RGBA32UI),K===o.BYTE&&(ce=o.RGBA8I),K===o.SHORT&&(ce=o.RGBA16I),K===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),E===o.RGBA){const We=ge?wl:Mt.getTransfer(pe);K===o.FLOAT&&(ce=o.RGBA32F),K===o.HALF_FLOAT&&(ce=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ce=We===Ct?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(b,E){let K;return b?E===null||E===jr||E===Vs?K=o.DEPTH24_STENCIL8:E===Bi?K=o.DEPTH32F_STENCIL8:E===No&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jr||E===Vs?K=o.DEPTH_COMPONENT24:E===Bi?K=o.DEPTH_COMPONENT32F:E===No&&(K=o.DEPTH_COMPONENT16),K}function G(b,E){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==oi&&b.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function B(b){const E=b.target;E.removeEventListener("dispose",B),Y(E),E.isVideoTexture&&_.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),R(E)}function Y(b){const E=r.get(b);if(E.__webglInit===void 0)return;const K=b.source,pe=x.get(K);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete(K)}r.remove(b)}function P(b){const E=r.get(b);o.deleteTexture(E.__webglTexture);const K=b.source,pe=x.get(K);delete pe[E.__cacheKey],f.memory.textures--}function R(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=b.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const ce=r.get(K[pe]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(K[pe])}r.remove(b)}let z=0;function le(){z=0}function te(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ue(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function fe(b,E){const K=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,b,E);return}}n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+E)}function oe(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+E)}function re(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,E);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+E)}function k(b,E){const K=r.get(b);if(b.version>0&&K.__version!==b.version){he(K,b,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+E)}const ae={[uf]:o.REPEAT,[Yr]:o.CLAMP_TO_EDGE,[cf]:o.MIRRORED_REPEAT},ie={[oi]:o.NEAREST,[wv]:o.NEAREST_MIPMAP_NEAREST,[$a]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[gc]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},U={[Pv]:o.NEVER,[Nv]:o.ALWAYS,[bv]:o.LESS,[Hm]:o.LEQUAL,[Lv]:o.EQUAL,[Iv]:o.GEQUAL,[Dv]:o.GREATER,[Uv]:o.NOTEQUAL};function ne(b,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===gc||E.magFilter===$a||E.magFilter===qr||E.minFilter===gi||E.minFilter===gc||E.minFilter===$a||E.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ae[E.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,ie[E.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==$a&&E.minFilter!==qr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=ue(E);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ge[ce].usedTimes++;const We=ge[b.__cacheKey];We!==void 0&&(ge[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(E)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return K}function Z(b,E,K){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(b,E),ce=E.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+K);const We=r.get(ce);if(ce.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+K);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===_r?null:Mt.getPrimaries(E.colorSpace),at=E.colorSpace===_r||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=w(E.image,!1,a.maxTextureSize);Me=At(E,Me);const Oe=u.convert(E.format,E.colorSpace),je=u.convert(E.type);let Je=L(E.internalFormat,Oe,je,E.colorSpace,E.isVideoTexture);ne(pe,E);let Be;const ut=E.mipmaps,nt=E.isVideoTexture!==!0,Et=We.__version===void 0||ge===!0,V=ce.dataReady,Ae=G(E,Me);if(E.isDepthTexture)Je=C(E.format===Gs,E.type),Et&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,null));else if(E.isDataTexture)if(ut.length>0){nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let se=0,de=ut.length;se<de;se++)Be=ut[se],nt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,se,Je,Be.width,Be.height,0,Oe,je,Be.data);E.generateMipmaps=!1}else nt?(Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,je,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ut[0].width,ut[0].height,Me.depth);for(let se=0,de=ut.length;se<de;se++)if(Be=ut[se],E.format!==si)if(Oe!==null)if(nt){if(V)if(E.layerUpdates.size>0){const be=tm(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,Pe,Be.width,Be.height,1,Oe,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Me.depth,Oe,je,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,se,Je,Be.width,Be.height,Me.depth,0,Oe,je,Be.data)}else{nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let se=0,de=ut.length;se<de;se++)Be=ut[se],E.format!==si?Oe!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,se,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,se,Je,Be.width,Be.height,0,Oe,je,Be.data)}else if(E.isDataArrayTexture)if(nt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),V)if(E.layerUpdates.size>0){const se=tm(Me.width,Me.height,E.format,E.type);for(const de of E.layerUpdates){const be=Me.data.subarray(de*se/Me.data.BYTES_PER_ELEMENT,(de+1)*se/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Oe,je,be)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(E.isData3DTexture)nt?(Et&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(E.isFramebufferTexture){if(Et)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let se=Me.width,de=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Je,se,de,0,Oe,je,null),se>>=1,de>>=1}}else if(ut.length>0){if(nt&&Et){const se=Ge(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,se.width,se.height)}for(let se=0,de=ut.length;se<de;se++)Be=ut[se],nt?V&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Oe,je,Be):n.texImage2D(o.TEXTURE_2D,se,Je,Oe,je,Be);E.generateMipmaps=!1}else if(nt){if(Et){const se=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,se.width,se.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,je,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,je,Me);v(E)&&g(pe),We.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function he(b,E,K){if(E.image.length!==6)return;const pe=Ie(b,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+K);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(o.TEXTURE0+K);const We=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===_r?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===_r||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!at&&!Me?Oe[de]=w(E.image[de],!0,a.maxCubemapSize):Oe[de]=Me?E.image[de].image:E.image[de],Oe[de]=At(E,Oe[de]);const je=Oe[0],Je=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ut=L(E.internalFormat,Je,Be,E.colorSpace),nt=E.isVideoTexture!==!0,Et=ce.__version===void 0||pe===!0,V=ge.dataReady;let Ae=G(E,je);ne(o.TEXTURE_CUBE_MAP,E);let se;if(at){nt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,je.width,je.height);for(let de=0;de<6;de++){se=Oe[de].mipmaps;for(let be=0;be<se.length;be++){const Pe=se[be];E.format!==si?Je!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(se=E.mipmaps,nt&&Et){se.length>0&&Ae++;const de=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Me){nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,Je,Be,Oe[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Oe[de].width,Oe[de].height,0,Je,Be,Oe[de].data);for(let be=0;be<se.length;be++){const it=se[be].image[de].image;nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Je,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,it.width,it.height,0,Je,Be,it.data)}}else{nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,Be,Oe[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Je,Be,Oe[de]);for(let be=0;be<se.length;be++){const Pe=se[be];nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Je,Be,Pe.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,Je,Be,Pe.image[de])}}}v(E)&&g(o.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ye(b,E,K,pe,ge,ce){const We=u.convert(K.format,K.colorSpace),we=u.convert(K.type),Ne=L(K.internalFormat,We,we,K.colorSpace),at=r.get(E),Me=r.get(K);if(Me.__renderTarget=E,!at.__hasExternalTextures){const Oe=Math.max(1,E.width>>ce),je=Math.max(1,E.height>>ce);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,Oe,je,E.depth,0,We,we,null):n.texImage2D(ge,ce,Ne,Oe,je,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ft(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ce),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,E,K){if(o.bindRenderbuffer(o.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(E.stencilBuffer,ge),We=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(E);lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ce,E.width,E.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],We=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Ne=L(ce.internalFormat,We,we,ce.colorSpace),at=ft(E);K&&lt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,E.width,E.height):lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe(E.depthTexture,0);const ge=pe.__webglTexture,ce=ft(E);if(E.depthTexture.format===Os)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Gs)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const E=r.get(b),K=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if(K){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,E,K){const pe=r.get(b);E!==void 0&&ye(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Ue(b)}function Rt(b){const E=b.texture,K=r.get(b),pe=r.get(E);b.addEventListener("dispose",F);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),ce){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)K.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else K.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)K.__webglFramebuffer[we]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&lt(b)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];K.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=L(Ne.internalFormat,at,Me,Ne.colorSpace,b.isXRRenderTarget===!0),je=ft(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,K.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ye(K.__webglFramebuffer[we][Ne],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ye(K.__webglFramebuffer[we],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],Me=r.get(at);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,at),ye(K.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),v(at)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ne(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ye(K.__webglFramebuffer[Ne],b,E,o.COLOR_ATTACHMENT0,we,Ne);else ye(K.__webglFramebuffer,b,E,o.COLOR_ATTACHMENT0,we,0);v(E)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function dt(b){const E=b.textures;for(let K=0,pe=E.length;K<pe;K++){const ge=E[K];if(v(ge)){const ce=I(b),We=r.get(ge).__webglTexture;n.bindTexture(ce,We),g(ce),n.unbindTexture()}}}const bt=[],O=[];function _n(b){if(b.samples>0){if(lt(b)===!1){const E=b.textures,K=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,o.NEAREST),p===!0&&(bt.length=0,O.length=0,bt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(ce),O.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,O)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ft(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function At(b,E){const K=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||K!==Ws&&K!==_r&&(Mt.getTransfer(K)===Ct?(pe!==si||ge!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt}function jM(o,e){function n(r,a=_r){let u;const f=Mt.getTransfer(a);if(r===Hi)return o.UNSIGNED_BYTE;if(r===Gf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Dm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return o.BYTE;if(r===Lm)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===Vf)return o.INT;if(r===jr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Fo)return o.HALF_FLOAT;if(r===Um)return o.ALPHA;if(r===Im)return o.RGB;if(r===si)return o.RGBA;if(r===Nm)return o.LUMINANCE;if(r===Fm)return o.LUMINANCE_ALPHA;if(r===Os)return o.DEPTH_COMPONENT;if(r===Gs)return o.DEPTH_STENCIL;if(r===Om)return o.RED;if(r===Xf)return o.RED_INTEGER;if(r===Bm)return o.RG;if(r===Yf)return o.RG_INTEGER;if(r===qf)return o.RGBA_INTEGER;if(r===xl||r===Sl||r===yl||r===Ml)if(f===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ff||r===df||r===hf||r===pf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ff)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===df)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===mf||r===gf)return f===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===_f)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===vf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ef)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Af)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===Df||r===Uf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===El)return f===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Df)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===km||r===If||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===El)return u.COMPRESSED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ff)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const $M={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),g=this._getHandJoint(m,w);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=_.position.distanceTo(S.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($M)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Dn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:KM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Dl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,S=null,x=null,y=null,T=null;const w=new QM,v=n.getContextAttributes();let g=null,I=null;const L=[],C=[],G=new wt;let B=null;const F=new qn;F.viewport=new Gt;const Y=new qn;Y.viewport=new Gt;const P=[F,Y],R=new S0;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new qc,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new qc,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new qc,L[Z]=he),he.getHandSpace()};function te(Z){const he=C.indexOf(Z.inputSource);if(he===-1)return;const ye=L[he];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,m||f),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",fe);for(let Z=0;Z<L.length;Z++){const he=C[Z];he!==null&&(C[Z]=null,L[Z].disconnect(he))}z=null,le=null,w.reset(),e.setRenderTarget(g),y=null,x=null,S=null,a=null,I=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",fe),v.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(G),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let ye=null,ve=null,Te=null;v.depth&&(Te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=v.stencil?Gs:Os,ve=v.stencil?Vs:jr);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};S=new XRWebGLBinding(a,n),x=S.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new $r(x.textureWidth,x.textureHeight,{format:si,type:Hi,depthTexture:new tg(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new $r(y.framebufferWidth,y.framebufferHeight,{format:si,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function fe(Z){for(let he=0;he<Z.removed.length;he++){const ye=Z.removed[he],ve=C.indexOf(ye);ve>=0&&(C[ve]=null,L[ve].disconnect(ye))}for(let he=0;he<Z.added.length;he++){const ye=Z.added[he];let ve=C.indexOf(ye);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=C.length){C.push(ye),ve=Ue;break}else if(C[Ue]===null){C[Ue]=ye,ve=Ue;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(ye)}}const oe=new ee,re=new ee;function k(Z,he,ye){oe.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(ye.matrixWorld);const ve=oe.distanceTo(re),Te=he.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],_n=(Ue[8]+1)/Ue[0],ft=Ze*O,lt=Ze*_n,Ye=ve/(-O+_n),At=Ye*-O;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ze+Ye,b=Rt+Ye,E=ft-At,K=lt+(ve-At),pe=dt*Rt/b*Ge,ge=bt*Rt/b*Ge;Z.projectionMatrix.makePerspective(E,K,pe,ge,Ge,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let he=Z.near,ye=Z.far;w.texture!==null&&(w.depthNear>0&&(he=w.depthNear),w.depthFar>0&&(ye=w.depthFar)),R.near=Y.near=F.near=he,R.far=Y.far=F.far=ye,(z!==R.near||le!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,le=R.far),F.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,R.layers.mask=F.layers.mask|Y.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?k(R,F,Y):R.projectionMatrix.copy(F.projectionMatrix),ie(Z,R,ve)};function ie(Z,he,ye){ye===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Of*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let U=null;function ne(Z,he){if(_=he.getViewerPose(m||f),T=he,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<ye.length;Ue++){const Ze=ye[Ue];let Rt=null;if(y!==null)Rt=y.getViewport(Ze);else{const bt=S.getViewSubImage(x,Ze);Rt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(I,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(I))}let dt=P[Ue];dt===void 0&&(dt=new qn,dt.layers.enable(Ue),dt.viewport=new Gt,P[Ue]=dt),dt.matrix.fromArray(Ze.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ze.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(dt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=S.getDepthInformation(ye[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,a.renderState)}}for(let ye=0;ye<L.length;ye++){const ve=C[ye],Te=L[ye];ve!==null&&Te!==void 0&&Te.update(ve,he,m||f)}U&&U(Z,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),T=null}const Ie=new rg;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Hr=new vi,eE=new kt;function tE(o,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Zm(o)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,I,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),S(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&y(v,g,C)):g.isMeshMatcapMaterial?(u(v,g),T(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),w(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,I,L):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Ln&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Ln&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),L=I.envMap,C=I.envMapRotation;L&&(v.envMap.value=L,Hr.copy(C),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(Hr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,I,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=L*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function S(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function y(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function w(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function nE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(T(I),C=_(I),a[I.id]=C,I.addEventListener("dispose",v));const G=L.program;r.updateUBOMapping(I,G);const B=e.render.frame;u[I.id]!==B&&(x(I),u[I.id]=B)}function _(I){const L=S();I.__bindingPointIndex=L;const C=o.createBuffer(),G=I.__size,B=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function S(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,G=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,F=C.length;B<F;B++){const Y=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,R=Y.length;P<R;P++){const z=Y[P];if(y(z,B,P,G)===!0){const le=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let fe=0;fe<te.length;fe++){const oe=te[fe],re=w(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,le+ue,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ue),ue+=re.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,L,C,G){const B=I.value,F=L+"_"+C;if(G[F]===void 0)return typeof B=="number"||typeof B=="boolean"?G[F]=B:G[F]=B.clone(),!0;{const Y=G[F];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return G[F]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function T(I){const L=I.uniforms;let C=0;const G=16;for(let F=0,Y=L.length;F<Y;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,z=P.length;R<z;R++){const le=P[R],te=Array.isArray(le.value)?le.value:[le.value];for(let ue=0,fe=te.length;ue<fe;ue++){const oe=te[ue],re=w(oe),k=C%G,ae=k%re.boundary,ie=k+ae;C+=ae,ie!==0&&G-ie<re.storage&&(C+=G-ie),le.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=re.storage}}}const B=C%G;return B>0&&(C+=G-B),I.__size=C,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function v(I){const L=I.target;L.removeEventListener("dispose",v);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const I in a)o.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class iE{constructor(e={}){const{canvas:n=Ov(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),w=new Int32Array(4);let v=null,g=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let G=!1,B=0,F=0,Y=null,P=-1,R=null;const z=new Gt,le=new Gt;let te=null;const ue=new St(0);let fe=0,oe=n.width,re=n.height,k=1,ae=null,ie=null;const U=new Gt(0,0,oe,re),ne=new Gt(0,0,oe,re);let Ie=!1;const Z=new jf;let he=!1,ye=!1;this.transmissionResolutionScale=1;const ve=new kt,Te=new kt,Ue=new ee,Ze=new Gt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function bt(){return Y===null?k:1}let O=r;function _n(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=_n(W,A),O===null)throw _n(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,lt,Ye,At,Ge,b,E,K,pe,ge,ce,We,we,Ne,at,Me,Oe,je,Je,Be,ut,nt,Et,V;function Ae(){ft=new dy(O),ft.init(),nt=new jM(O,ft),lt=new oy(O,ft,e,nt),Ye=new YM(O,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),At=new my(O),Ge=new UM,b=new qM(O,ft,Ye,Ge,lt,nt,At),E=new ly(C),K=new fy(C),pe=new M0(O),Et=new ry(O,pe),ge=new hy(O,pe,At,Et),ce=new _y(O,ge,pe,At),Je=new gy(O,lt,b),Me=new ay(Ge),We=new DM(C,E,K,ft,lt,Et,Me),we=new tE(C,Ge),Ne=new NM,at=new HM(ft),je=new iy(C,E,K,Ye,ce,y,p),Oe=new WM(C,ce,lt),V=new nE(O,At,lt,Ye),Be=new sy(O,ft,At),ut=new py(O,ft,At),At.programs=We.programs,C.capabilities=lt,C.extensions=ft,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=Ye,C.info=At}Ae();const se=new JM(C,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(oe,re,!1))},this.getSize=function(A){return A.set(oe,re)},this.setSize=function(A,W,Q=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,re=W,n.width=Math.floor(A*k),n.height=Math.floor(W*k),Q===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(oe*k,re*k).floor()},this.setDrawingBufferSize=function(A,W,Q){oe=A,re=W,k=Q,n.width=Math.floor(A*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,W,Q,j){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,W,Q,j),Ye.viewport(z.copy(U).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,Q,j){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,Q,j),Ye.scissor(le.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){Ye.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let j=0;if(A){let X=!1;if(Y!==null){const Se=Y.texture.format;X=Se===qf||Se===Yf||Se===Xf}if(X){const Se=Y.texture.type,Re=Se===Hi||Se===jr||Se===No||Se===Vs||Se===Gf||Se===Wf,Le=je.getClearColor(),ke=je.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(T[0]=et,T[1]=Qe,T[2]=He,T[3]=ke,O.clearBufferuiv(O.COLOR,0,T)):(w[0]=et,w[1]=Qe,w[2]=He,w[3]=ke,O.clearBufferiv(O.COLOR,0,w))}else j|=O.COLOR_BUFFER_BIT}W&&(j|=O.DEPTH_BUFFER_BIT),Q&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),je.dispose(),Ne.dispose(),at.dispose(),Ge.dispose(),E.dispose(),K.dispose(),ce.dispose(),Et.dispose(),V.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",Kr),se.removeEventListener("sessionend",Vi),Si.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=At.autoReset,W=Oe.enabled,Q=Oe.autoUpdate,j=Oe.needsUpdate,X=Oe.type;Ae(),At.autoReset=A,Oe.enabled=W,Oe.autoUpdate=Q,Oe.needsUpdate=j,Oe.type=X}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const W=A.target;W.removeEventListener("dispose",it),Dt(W)}function Dt(A){qt(A),Ge.remove(A)}function qt(A){const W=Ge.get(A).programs;W!==void 0&&(W.forEach(function(Q){We.releaseProgram(Q)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,j,X,Se){W===null&&(W=Rt);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Le=Go(A,W,Q,j,X);Ye.setMaterial(j,Re);let ke=Q.index,et=1;if(j.wireframe===!0){if(ke=ge.getWireframeAttribute(Q),ke===void 0)return;et=2}const Qe=Q.drawRange,He=Q.attributes.position;let pt=Qe.start*et,rt=(Qe.start+Qe.count)*et;Se!==null&&(pt=Math.max(pt,Se.start*et),rt=Math.min(rt,(Se.start+Se.count)*et)),ke!==null?(pt=Math.max(pt,0),rt=Math.min(rt,ke.count)):He!=null&&(pt=Math.max(pt,0),rt=Math.min(rt,He.count));const zt=rt-pt;if(zt<0||zt===1/0)return;Et.setup(X,j,Le,Q,ke);let Nt,gt=Be;if(ke!==null&&(Nt=pe.get(ke),gt=ut,gt.setIndex(Nt)),X.isMesh)j.wireframe===!0?(Ye.setLineWidth(j.wireframeLinewidth*bt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(X.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*bt()),X.isLineSegments?gt.setMode(O.LINES):X.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else X.isPoints?gt.setMode(O.POINTS):X.isSprite&&gt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)gt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,Ht=X._multiDrawCounts,ht=X._multiDrawCount,un=ke?pe.get(ke).bytesPerElement:1,Wi=Ge.get(j).currentProgram.getUniforms();for(let xn=0;xn<ht;xn++)Wi.setValue(O,"_gl_DrawID",xn),gt.render(qe[xn]/un,Ht[xn])}else if(X.isInstancedMesh)gt.renderInstances(pt,zt,X.count);else if(Q.isInstancedBufferGeometry){const qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ht=Math.min(Q.instanceCount,qe);gt.renderInstances(pt,zt,Ht)}else gt.render(pt,zt)};function _t(A,W,Q){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Zr(A,W,Q),A.side=Sr,A.needsUpdate=!0,Zr(A,W,Q),A.side=Oi):Zr(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),g=at.get(Q),g.init(W),L.push(g),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const j=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];_t(Le,Q,X),j.add(Le)}else _t(Se,Q,X),j.add(Se)}),L.pop(),g=null,j},this.compileAsync=function(A,W,Q=null){const j=this.compile(A,W,Q);return new Promise(X=>{function Se(){if(j.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){X(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let En=null;function vn(A){En&&En(A)}function Kr(){Si.stop()}function Vi(){Si.start()}const Si=new rg;Si.setAnimationLoop(vn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){En=A,se.setAnimationLoop(A),A===null?Si.stop():Si.start()},se.addEventListener("sessionstart",Kr),se.addEventListener("sessionend",Vi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,Y),g=at.get(A,L.length),g.init(W),L.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,he=Me.init(this.clippingPlanes,ye),v=Ne.get(A,I.length),v.init(),I.push(v),se.enabled===!0&&se.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&yi(Se,W,-1/0,C.sortObjects)}yi(A,W,0,C.sortObjects),v.finish(),C.sortObjects===!0&&v.sort(ae,ie),dt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,dt&&je.addToRenderList(v,A),this.info.render.frame++,he===!0&&Me.beginShadows();const Q=g.state.shadowsArray;Oe.render(Q,A,W),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,X=v.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const ke=Se[Re];Er(j,X,A,ke)}dt&&je.render(A);for(let Re=0,Le=Se.length;Re<Le;Re++){const ke=Se[Re];Mr(v,A,ke,ke.viewport)}}else X.length>0&&Er(j,X,A,W),dt&&je.render(A),Mr(v,A,W);Y!==null&&F===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(C,A,W),Et.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function yi(A,W,Q,j){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){j&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ce.update(A),Le=A.material;Le.visible&&v.push(A,Re,Le,Q,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ce.update(A),Le=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const ke=Re.groups;for(let et=0,Qe=ke.length;et<Qe;et++){const He=ke[et],pt=Le[He.materialIndex];pt&&pt.visible&&v.push(A,Re,pt,Q,Ze.z,He)}}else Le.visible&&v.push(A,Re,Le,Q,Ze.z,null)}}const Se=A.children;for(let Re=0,Le=Se.length;Re<Le;Re++)yi(Se[Re],W,Q,j)}function Mr(A,W,Q,j){const X=A.opaque,Se=A.transmissive,Re=A.transparent;g.setupLightsView(Q),he===!0&&Me.setGlobalState(C.clippingPlanes,Q),j&&Ye.viewport(z.copy(j)),X.length>0&&Gi(X,W,Q),Se.length>0&&Gi(Se,W,Q),Re.length>0&&Gi(Re,W,Q),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Er(A,W,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new $r(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Fo:Hi,minFilter:qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[j.id],Re=j.viewport||z;Se.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ue),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),dt&&je.render(Q);const ke=C.toneMapping;C.toneMapping=xr;const et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),he===!0&&Me.setGlobalState(C.clippingPlanes,j),Gi(A,Q,j),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,pt=W.length;He<pt;He++){const rt=W[He],zt=rt.object,Nt=rt.geometry,gt=rt.material,qe=rt.group;if(gt.side===Oi&&zt.layers.test(j.layers)){const Ht=gt.side;gt.side=Ln,gt.needsUpdate=!0,Ho(zt,Q,j,Nt,gt,qe),gt.side=Ht,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(Le),C.setClearColor(ue,fe),et!==void 0&&(j.viewport=et),C.toneMapping=ke}function Gi(A,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){const Re=A[X],Le=Re.object,ke=Re.geometry,et=j===null?Re.material:j,Qe=Re.group;Le.layers.test(Q.layers)&&Ho(Le,W,Q,ke,et,Qe)}}function Ho(A,W,Q,j,X,Se){A.onBeforeRender(C,W,Q,j,X,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,W,Q,j,A,Se),X.transparent===!0&&X.side===Oi&&X.forceSinglePass===!1?(X.side=Ln,X.needsUpdate=!0,C.renderBufferDirect(Q,W,j,X,A,Se),X.side=Sr,X.needsUpdate=!0,C.renderBufferDirect(Q,W,j,X,A,Se),X.side=Oi):C.renderBufferDirect(Q,W,j,X,A,Se),A.onAfterRender(C,W,Q,j,X,Se)}function Zr(A,W,Q){W.isScene!==!0&&(W=Rt);const j=Ge.get(A),X=g.state.lights,Se=g.state.shadowsArray,Re=X.state.version,Le=We.getParameters(A,X.state,Se,W,Q),ke=We.getProgramCacheKey(Le);let et=j.programs;j.environment=A.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(A.isMeshStandardMaterial?K:E).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",it),et=new Map,j.programs=et);let Qe=et.get(ke);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Re)return ui(A,Le),Qe}else Le.uniforms=We.getUniforms(A),A.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,ke),et.set(ke,Qe),j.uniforms=Le.uniforms;const He=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),ui(A,Le),j.needsLights=Il(A),j.lightsStateVersion=Re,j.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function Vo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Tl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ui(A,W){const Q=Ge.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Go(A,W,Q,j,X){W.isScene!==!0&&(W=Rt),b.resetTextureUnits();const Se=W.fog,Re=j.isMeshStandardMaterial?W.environment:null,Le=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ws,ke=(j.isMeshStandardMaterial?K:E).get(j.envMap||Re),et=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,rt=!!Q.morphAttributes.color;let zt=xr;j.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(zt=C.toneMapping);const Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,qe=Ge.get(j),Ht=g.state.lights;if(he===!0&&(ye===!0||A!==R)){const sn=A===R&&j.id===P;Me.setState(j,A,sn)}let ht=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Le||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==ke||j.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==Qe||qe.morphTargets!==He||qe.morphNormals!==pt||qe.morphColors!==rt||qe.toneMapping!==zt||qe.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,qe.__version=j.version);let un=qe.currentProgram;ht===!0&&(un=Zr(j,W,X));let Wi=!1,xn=!1,Mi=!1;const Pt=un.getUniforms(),cn=qe.uniforms;if(Ye.useProgram(un.program)&&(Wi=!0,xn=!0,Mi=!0),j.id!==P&&(P=j.id,xn=!0),Wi||R!==A){Ye.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),kv(ve),zv(ve),Pt.setValue(O,"projectionMatrix",ve)):Pt.setValue(O,"projectionMatrix",A.projectionMatrix),Pt.setValue(O,"viewMatrix",A.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,Ue.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,xn=!0,Mi=!0)}if(X.isSkinnedMesh){Pt.setOptional(O,X,"bindMatrix"),Pt.setOptional(O,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(O,"boneTexture",sn.boneTexture,b))}X.isBatchedMesh&&(Pt.setOptional(O,X,"batchingTexture"),Pt.setValue(O,"batchingTexture",X._matricesTexture,b),Pt.setOptional(O,X,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",X._indirectTexture,b),Pt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",X._colorsTexture,b));const Qt=Q.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Je.update(X,Q,un),(xn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Pt.setValue(O,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(cn.envMap.value=ke,cn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(cn.envMapIntensity.value=W.environmentIntensity),xn&&(Pt.setValue(O,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Wo(cn,Mi),Se&&j.fog===!0&&we.refreshFogUniforms(cn,Se),we.refreshMaterialUniforms(cn,j,k,re,g.state.transmissionRenderTarget[A.id]),Tl.upload(O,Vo(qe),cn,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tl.upload(O,Vo(qe),cn,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pt.setValue(O,"center",X.center),Pt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Pt.setValue(O,"normalMatrix",X.normalMatrix),Pt.setValue(O,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const sn=j.uniformsGroups;for(let Jt=0,vt=sn.length;Jt<vt;Jt++){const ci=sn[Jt];V.update(ci,un),V.bind(ci,un)}}return un}function Wo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,W,Q){Ge.get(A.texture).__webglTexture=W,Ge.get(A.depthTexture).__webglTexture=Q;const j=Ge.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=Ge.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const Xo=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){Y=A,B=W,F=Q;let j=!0,X=null,Se=!1,Re=!1;if(A){const ke=Ge.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ke.__hasExternalTextures)b.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?X=Qe[W][Q]:X=Qe[W],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?X=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[Q]:X=Qe,z.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest}else z.copy(U).multiplyScalar(k).floor(),le.copy(ne).multiplyScalar(k).floor(),te=Ie;if(Q!==0&&(X=Xo),Ye.bindFramebuffer(O.FRAMEBUFFER,X)&&j&&Ye.drawBuffers(A,X),Ye.viewport(z),Ye.scissor(le),Ye.setScissorTest(te),Se){const ke=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,Q)}else if(Re){const ke=Ge.get(A.texture),et=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,Q,et)}else if(A!==null&&Q!==0){const ke=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(A,W,Q,j,X,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);try{const ke=A.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-X&&O.readPixels(W,Q,j,X,nt.convert(et),nt.convert(Qe),Se)}finally{const ke=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,j,X,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ke=A.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-X){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);const He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,Q,j,X,nt.convert(et),nt.convert(Qe),0);const pt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,pt);const rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Bv(O,rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(He),O.deleteSync(rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Q),X=Math.floor(A.image.width*j),Se=Math.floor(A.image.height*j),Re=W!==null?W.x:0,Le=W!==null?W.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Re,Le,X,Se),Ye.unbindTexture()};const Yo=O.createFramebuffer(),qo=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,j=null,X=0,Se=null){A.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(X!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Re,Le,ke,et,Qe,He,pt,rt,zt;const Nt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Re=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,Qe=Q.min.y,He=Q.isBox3?Q.min.z:0;else{const Qt=Math.pow(2,-X);Re=Math.floor(Nt.width*Qt),Le=Math.floor(Nt.height*Qt),A.isDataArrayTexture?ke=Nt.depth:A.isData3DTexture?ke=Math.floor(Nt.depth*Qt):ke=1,et=0,Qe=0,He=0}j!==null?(pt=j.x,rt=j.y,zt=j.z):(pt=0,rt=0,zt=0);const gt=nt.convert(W.format),qe=nt.convert(W.type);let Ht;W.isData3DTexture?(b.setTexture3D(W,0),Ht=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Ht=O.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Ht=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const ht=O.getParameter(O.UNPACK_ROW_LENGTH),un=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wi=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),Mi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const Pt=A.isDataArrayTexture||A.isData3DTexture,cn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Qt=Ge.get(A),sn=Ge.get(W),Jt=Ge.get(Qt.__renderTarget),vt=Ge.get(sn.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ci=0;ci<ke;ci++)Pt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,X,He+ci),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,Se,zt+ci)),O.blitFramebuffer(et,Qe,Re,Le,pt,rt,Re,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Ge.has(A)){const Qt=Ge.get(A),sn=Ge.get(W);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Yo),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,qo);for(let Jt=0;Jt<ke;Jt++)Pt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,X,He+Jt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,X),cn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,Se,zt+Jt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,Se),X!==0?O.blitFramebuffer(et,Qe,Re,Le,pt,rt,Re,Le,O.COLOR_BUFFER_BIT,O.NEAREST):cn?O.copyTexSubImage3D(Ht,Se,pt,rt,zt+Jt,et,Qe,Re,Le):O.copyTexSubImage2D(Ht,Se,pt,rt,et,Qe,Re,Le);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ht,Se,pt,rt,zt,Re,Le,ke,gt,qe,Nt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ht,Se,pt,rt,zt,Re,Le,ke,gt,Nt.data):O.texSubImage3D(Ht,Se,pt,rt,zt,Re,Le,ke,gt,qe,Nt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,pt,rt,Re,Le,gt,qe,Nt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,pt,rt,Nt.width,Nt.height,gt,Nt.data):O.texSubImage2D(O.TEXTURE_2D,Se,pt,rt,Re,Le,gt,qe,Nt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,un),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mi),Se===0&&W.generateMipmaps&&O.generateMipmap(Ht),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,j=null,X=0){return A.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,j=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Q,j,X)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){B=0,F=0,Y=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const rE=({gridWidth:o,gridHeight:e,gridDepth:n,radius:r,speed:a,healingDuration:u,breakingDuration:f,instability:d,setGridWidth:p,setGridHeight:m,setGridDepth:_,setRadius:S,setSpeed:x,setHealingDuration:y,setBreakingDuration:T,setInstability:w})=>Tt.jsxs("div",{className:"controls",children:[Tt.jsxs("label",{children:["Width: ",Tt.jsx("span",{children:o}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"10",value:o,onChange:v=>p(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Height: ",Tt.jsx("span",{children:e}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"10",value:e,onChange:v=>m(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Depth: ",Tt.jsx("span",{children:n}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"10",value:n,onChange:v=>_(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Radius: ",Tt.jsx("span",{children:r}),Tt.jsx("input",{type:"range",step:"1",min:"10",max:"30",value:r,onChange:v=>S(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Movement Speed: ",Tt.jsx("span",{children:a}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"30",value:a,onChange:v=>x(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Healing Speed: ",Tt.jsx("span",{children:u}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"30",value:u,onChange:v=>y(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Breaking Speed: ",Tt.jsx("span",{children:f*10}),Tt.jsx("input",{type:"range",step:"0.1",min:"0.1",max:"5",value:f,onChange:v=>T(Number(v.target.value))})]}),Tt.jsxs("label",{children:["Instability: ",Tt.jsx("span",{children:d}),Tt.jsx("input",{type:"range",step:"1",min:"1",max:"10",value:d,onChange:v=>w(Number(v.target.value))})]})]}),gr=[];let kf=[];function sE(o,e,n,r){const a=[],u=Math.sqrt(3)*r,f=2*r,d=1*u,p=1*f*.75,m=new Set,_=[];for(let x=0;x<n;x++){const y=x*r;for(let T=0;T<e;T++)for(let w=0;w<o;w++){let v=T*d,g=w*p;v=w%2==0?v-u/2:v,g=w*p;const I=Am(g,v,y,r);a.push(...I),x===0&&I.map(L=>L[0]).forEach(L=>_.push(L))}}for(let x=0;x<n-1;x++)for(let y=0;y<_.length;y++){const T=[..._[y]],w=[..._[y]];T[2]=x*r,w[2]=(x+1)*r,a.push([T,w])}for(let x=0;x<n;x++){const y=x*r;for(let T=0;T<e;T++)for(let w=0;w<o;w++){let v=T*d,g=w*p;v=w%2==0?v-u/2:v,g=w*p,Am(g,v,y,r).flat().forEach(L=>m.add(JSON.stringify(L)))}}return kf=Array.from(m).map(x=>JSON.parse(x)),oE(a)}function Am(o,e,n,r){const a=[],u=2*Math.PI/6,f=[];for(let d=0;d<6;d++){const p=d*u,m=o+r*Math.cos(p),_=e+r*Math.sin(p);f.push([m,_,n])}for(let d=0;d<f.length;d++){const p=f[d],m=f[(d+1)%f.length];a.push([p,m])}return a}function oE(o,e=1e-10){const n=new Set;console.log("Original number of lines:",o.length);function r(u){return u.map(f=>Math.round(f/e)*e)}for(const u of o){const[f,d,p]=u,m=r(f),_=r(d),S=JSON.stringify(m[0]<_[0]||m[0]===_[0]&&m[1]<_[1]?[m,_,p]:[_,m,p]);n.add(S)}const a=Array.from(n).map(u=>JSON.parse(u));return console.log("Final number of lines:",a.length),a}function aE(o,e,n=.1){const r=new $f(n,32,32),a=new h0({color:12088115});o.forEach(u=>{const[f,d,p]=u,m=new _i(r,a);m.position.set(f,d,p),e.add(m)})}function lE(o){for(const e of o){const[n,r]=e,a=new xi,u=new Float32Array([n[0],n[1],n[2],r[0],r[1],r[2]]);a.setAttribute("position",new ai(u,3));const f=new eg({color:9662683}),d=new d0(a,f);d.userData.originalColor=f.color.getHex(),d.userData.originalPositions=u.slice(),gr.push(d)}}function uE(o,e,n){o.material.color.set(16753920),o.userData.isAnimating=!0;const r=o.geometry.attributes.position.array,a=r[3],u=r[4],f=r[5],d=n*1e3,p=e*1e3,m=performance.now();function _(){const T=(performance.now()-m)/d;if(T<1){const w=r[0]+(a-r[0])*(1-T),v=r[1]+(u-r[1])*(1-T),g=r[2]+(f-r[2])*(1-T);r[3]=w,r[4]=v,r[5]=g,o.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(_)}else o.material.color.set(32896),S()}function S(){const x=performance.now();function y(){const v=(performance.now()-x)/p;if(v<1){const g=r[0]+(a-r[0])*v,I=r[1]+(u-r[1])*v,L=r[2]+(f-r[2])*v;r[3]=g,r[4]=I,r[5]=L,o.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(y)}else cE(o),o.userData.isAnimating=!1}requestAnimationFrame(y)}requestAnimationFrame(_)}function cE(o){o.material.color.set(o.userData.originalColor);const e=o.userData.originalPositions,n=o.geometry.attributes.position.array;n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],o.geometry.attributes.position.needsUpdate=!0}let jc,$c,Kc;const fE=()=>{const o=ii.useRef(null),[e,n]=ii.useState(3),[r,a]=ii.useState(3),[u,f]=ii.useState(4),[d,p]=ii.useState(10),[m,_]=ii.useState(7),[S,x]=ii.useState(3),[y,T]=ii.useState(1),[w,v]=ii.useState(1);return ii.useEffect(()=>{const g=window.innerWidth,I=window.innerHeight,L=new u0;L.background=new St(16776656);const C=new qn(75,g/I,.1,1e3);C.position.z=100;const G=new iE;G.setSize(g,I),G.shadowMap.enabled=!0,o.current.appendChild(G.domElement);const B=new v0(16777215,1);B.position.set(50,50,50),B.castShadow=!0,L.add(B);const F=new x0(4210752);return L.add(F),(()=>{for(gr.length=0,kf.length=0,jc=e*d,$c=u*d,Kc=r*d*Math.sqrt(3)/2;L.children.length>0;)L.remove(L.children[0]);const P=sE(e,r,u,d);lE(P),gr.forEach(re=>{re.castShadow=!0,re.receiveShadow=!0,L.add(re)}),aE(kf,L,.7);const R=(e-1)*d*1.5/2,z=(r-1)*d*Math.sqrt(3)/2,le=(u-1)*d/2,te=(S+y)*1e3,ue=()=>{const re=Math.floor(gr.length*.1),k=Math.floor(gr.length*.2),ae=Math.floor(Math.random()*(k-re+1))+re,ie=[];for(let U=0;U<ae;U++){let ne;do ne=Math.floor(Math.random()*gr.length);while(gr[ne].userData.isAnimating);ie.push(ne)}ie.forEach(U=>{uE(gr[U],S,y)}),setTimeout(ue,te+1e3)};ue();const fe=()=>{const re=Date.now()*5e-4;C.position.x=Math.cos(re*(m/10))*(jc/2),C.position.y=Math.sin(re*(m/10))*(Kc*2)+10,C.position.z=Math.sin(re*(m/10))*($c*2);const k=R+Math.sin(re*(w/10))*jc,ae=z+Math.sin(re*(w/10))*Kc,ie=le+Math.cos(re*(w/10))*($c*.5);C.lookAt(new ee(k,ae,ie)),console.log("Instability: ",w/10),requestAnimationFrame(fe)};fe();const oe=()=>{requestAnimationFrame(oe),G.render(L,C)};oe()})(),()=>{o.current.removeChild(G.domElement)}},[e,r,u,d,m,S,y,w]),Tt.jsxs("div",{children:[Tt.jsx(rE,{gridWidth:e,gridHeight:r,gridDepth:u,radius:d,speed:m,healingDuration:S,breakingDuration:y,instability:w,setGridWidth:n,setGridHeight:a,setGridDepth:f,setRadius:p,setSpeed:_,setHealingDuration:x,setBreakingDuration:T,setInstability:v}),Tt.jsx("div",{ref:o})]})};j_.createRoot(document.getElementById("root")).render(Tt.jsx(ii.StrictMode,{children:Tt.jsx(fE,{})}));
