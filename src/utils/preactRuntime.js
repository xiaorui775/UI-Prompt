/**
 * Preact 運行時生成器
 * 為 iframe 創建完整的 Preact 執行環境
 */

import appCssUrl from '../index.css?url';
import lucideReactUmdUrl from 'lucide-react/dist/umd/lucide-react.min.js?url';

function wrapCustomStylesInBaseLayer(css) {
  const raw = String(css || '').trim();
  if (!raw) return '';
  // 保守處理：若樣式本身已有 layer / import 管理，避免破壞其語意。
  if (/@import\s/i.test(raw) || /@layer\s/i.test(raw)) return raw;
  return `@layer base {\n${raw}\n}\n`;
}

// ✅ 內聯 Preact UMD (壓縮後) - 避免 CDN 在 sandbox iframe 中被阻擋
const PREACT_UMD_INLINE = `!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).preact={})}(this,function(e){var n,t,_,o,l,r,u,i,s,f,c,p,a=65536,d=1<<17,h={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,m=Array.isArray;function g(e,n){for(var t in n)e[t]=n[t];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function k(e,t,_){var o,l,r,u={};for(r in t)"key"==r?o=t[r]:"ref"==r?l=t[r]:u[r]=t[r];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return w(e,u,o,l,null)}function w(e,n,o,l,r){var u={type:e,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++_:r,__i:-1,__u:0};return null==r&&null!=t.vnode&&t.vnode(u),u}function x(e){return e.children}function C(e,n){this.props=e,this.context=n}function P(e,n){if(null==n)return e.__?P(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?P(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function U(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!T.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||u)(T)}function T(){var e,n,_,o,r,u,s,f;for(l.sort(i);e=l.shift();)e.__d&&(n=l.length,o=void 0,u=(r=(_=e).__v).__e,s=[],f=[],_.__P&&((o=g({},r)).__v=r.__v+1,t.vnode&&t.vnode(o),A(_.__P,o,r,_.__n,_.__P.namespaceURI,32&r.__u?[u]:null,s,null==u?P(r):u,!!(32&r.__u),f),o.__v=r.__v,o.__.__k[o.__i]=o,R(s,o,f),o.__e!=u&&S(o)),l.length>n&&l.sort(i));T.__r=0}function D(e,n,t,_,o,l,r,u,i,s,f){var c,p,d,y,m,g=_&&_.__k||v,b=n.length;for(t.__d=i,M(t,n,g),i=t.__d,c=0;c<b;c++)null!=(d=t.__k[c])&&(p=-1===d.__i?h:g[d.__i]||h,d.__i=c,A(e,d,p,o,l,r,u,i,s,f),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&I(p.ref,null,d),f.push(d.ref,d.__c||y,d)),null==m&&null!=y&&(m=y),d.__u&a||p.__k===d.__k?i=E(d,i,e):"function"==typeof d.type&&void 0!==d.__d?i=d.__d:y&&(i=y.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=i,t.__e=m}function M(e,n,t){var _,o,l,r,u,i=n.length,s=t.length,f=s,c=0;for(e.__k=[],_=0;_<i;_++)null!=(o=n[_])&&"boolean"!=typeof o&&"function"!=typeof o?(r=_+c,(o=e.__k[_]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?w(null,o,null,null,null):m(o)?w(x,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?w(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,l=null,-1!==(u=o.__i=W(o,t,r,f))&&(f--,(l=t[u])&&(l.__u|=d)),null==l||null===l.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=a)):u!==r&&(u==r-1?c--:u==r+1?c++:(u>r?c--:c++,o.__u|=a))):o=e.__k[_]=null;if(f)for(_=0;_<s;_++)null!=(l=t[_])&&0==(l.__u&d)&&(l.__e==e.__d&&(e.__d=P(l)),$(l,l))}function E(e,n,t){var _,o;if("function"==typeof e.type){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,n=E(_[o],n,t));return n}e.__e!=n&&(n&&e.type&&!t.contains(n)&&(n=P(e)),t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function W(e,n,t,_){var o=e.key,l=e.type,r=t-1,u=t+1,i=n[t];if(null===i||i&&o==i.key&&l===i.type&&0==(i.__u&d))return t;if(_>(null!=i&&0==(i.__u&d)?1:0))for(;r>=0||u<n.length;){if(r>=0){if((i=n[r])&&0==(i.__u&d)&&o==i.key&&l===i.type)return r;r--}if(u<n.length){if((i=n[u])&&0==(i.__u&d)&&o==i.key&&l===i.type)return u;u++}}return-1}function L(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||y.test(n)?t:t+"px"}function F(e,n,t,_,o){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||L(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||L(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?_?t.t=_.t:(t.t=s,e.addEventListener(n,l?c:f,l)):e.removeEventListener(n,l?c:f,l);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function N(e){return function(n){if(this.l){var _=this.l[n.type+e];if(null==n.u)n.u=s++;else if(n.u<_.t)return;return _(t.event?t.event(n):n)}}}function A(e,n,_,o,l,r,u,i,s,f){var c,p,a,d,h,v,y,b,k,w,P,S,U,T,M,E,W=n.type;if(void 0!==n.constructor)return null;128&_.__u&&(s=!!(32&_.__u),r=[i=n.__e=_.__e]),(c=t.__b)&&c(n);e:if("function"==typeof W)try{if(b=n.props,k="prototype"in W&&W.prototype.render,w=(c=W.contextType)&&o[c.__c],P=c?w?w.props.value:c.__:o,_.__c?y=(p=n.__c=_.__c).__=p.__E:(k?n.__c=p=new W(b,P):(n.__c=p=new C(b,P),p.constructor=W,p.render=O),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=P,p.__n=o,a=p.__d=!0,p.__h=[],p._sb=[]),k&&null==p.__s&&(p.__s=p.state),k&&null!=W.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=g({},p.__s)),g(p.__s,W.getDerivedStateFromProps(b,p.__s))),d=p.props,h=p.state,p.__v=n,a)k&&null==W.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),k&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(k&&null==W.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,P)||n.__v===_.__v)){for(n.__v!==_.__v&&(p.props=b,p.state=p.__s,p.__d=!1),n.__e=_.__e,n.__k=_.__k,n.__k.some(function(e){e&&(e.__=n)}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,P),k&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,h,v)})}if(p.context=P,p.props=b,p.__P=e,p.__e=!1,U=t.__r,T=0,k){for(p.state=p.__s,p.__d=!1,U&&U(n),c=p.render(p.props,p.state,p.context),M=0;M<p._sb.length;M++)p.__h.push(p._sb[M]);p._sb=[]}else do{p.__d=!1,U&&U(n),c=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++T<25);p.state=p.__s,null!=p.getChildContext&&(o=g(g({},o),p.getChildContext())),k&&!a&&null!=p.getSnapshotBeforeUpdate&&(v=p.getSnapshotBeforeUpdate(d,h)),D(e,m(E=null!=c&&c.type===x&&null==c.key?c.props.children:c)?E:[E],n,_,o,l,r,u,i,s,f),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),y&&(p.__E=p.__=null)}catch(e){if(n.__v=null,s||null!=r){for(n.__u|=s?160:32;i&&8===i.nodeType&&i.nextSibling;)i=i.nextSibling;r[r.indexOf(i)]=null,n.__e=i}else n.__e=_.__e,n.__k=_.__k;t.__e(e,n,_)}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=H(_.__e,n,_,o,l,r,u,s,f);(c=t.diffed)&&c(n)}function R(e,n,_){n.__d=void 0;for(var o=0;o<_.length;o++)I(_[o],_[++o],_[++o]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function H(e,_,o,l,r,u,i,s,f){var c,p,a,d,v,y,g,k=o.props,w=_.props,x=_.type;if("svg"===x?r="http://www.w3.org/2000/svg":"math"===x?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((v=u[c])&&"setAttribute"in v==!!x&&(x?v.localName===x:3===v.nodeType)){e=v,u[c]=null;break}if(null==e){if(null===x)return document.createTextNode(w);e=document.createElementNS(r,x,w.is&&w),s&&(t.__m&&t.__m(_,u),s=!1),u=null}if(null===x)k===w||s&&e.data===w||(e.data=w);else{if(u=u&&n.call(e.childNodes),k=o.props||h,!s&&null!=u)for(k={},c=0;c<e.attributes.length;c++)k[(v=e.attributes[c]).name]=v.value;for(c in k)if(v=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)a=v;else if(!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;F(e,c,null,v,r)}for(c in w)v=w[c],"children"==c?d=v:"dangerouslySetInnerHTML"==c?p=v:"value"==c?y=v:"checked"==c?g=v:s&&"function"!=typeof v||k[c]===v||F(e,c,v,k[c],r);if(p)s||a&&(p.__html===a.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(a&&(e.innerHTML=""),D(e,m(d)?d:[d],_,o,l,"foreignObject"===x?"http://www.w3.org/1999/xhtml":r,u,i,u?u[0]:o.__k&&P(o,0),s,f),null!=u)for(c=u.length;c--;)b(u[c]);s||(c="value","progress"===x&&null==y?e.removeAttribute("value"):void 0!==y&&(y!==e[c]||"progress"===x&&!y||"option"===x&&y!==k[c])&&F(e,c,y,k[c],r),c="checked",void 0!==g&&g!==e[c]&&F(e,c,g,k[c],r))}return e}function I(e,n,_){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==n||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,_)}}function $(e,n,_){var o,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||I(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&$(o[l],n,_||"function"!=typeof e.type);_||b(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function B(e,_,o){var l,r,u,i;t.__&&t.__(e,_),r=(l="function"==typeof o)?null:o&&o.__k||_.__k,u=[],i=[],A(_,e=(!l&&o||_).__k=k(x,null,[e]),r||h,h,_.namespaceURI,!l&&o?[o]:r?null:_.firstChild?n.call(_.childNodes):null,u,!l&&o?o:r?r.__e:_.firstChild,l,i),R(u,e,i)}n=v.slice,t={__e:function(e,n,t,_){for(var o,l,r;n=n.__;)if((o=n.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),r=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),r=o.__d),r)return o.__E=o}catch(n){e=n}throw e}},_=0,o=function(e){return null!=e&&null==e.constructor},C.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof e&&(e=e(g({},t),this.props)),e&&g(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),U(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),U(this))},C.prototype.render=x,l=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=function(e,n){return e.__v.__b-n.__v.__b},T.__r=0,s=0,f=N(!1),c=N(!0),p=0,e.Component=C,e.Fragment=x,e.cloneElement=function(e,t,_){var o,l,r,u,i=g({},e.props);for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)"key"==r?o=t[r]:"ref"==r?l=t[r]:i[r]=void 0===t[r]&&void 0!==u?u[r]:t[r];return arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),w(e.type,i,o||e.key,l||e.ref,null)},e.createContext=function(e,n){var t={__c:n="__cC"+p++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(function(e){e.__e=!0,U(e)})},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t&&t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t},e.createElement=k,e.createRef=function(){return{current:null}},e.h=k,e.hydrate=function e(n,t){B(n,t,e)},e.isValidElement=o,e.options=t,e.render=B,e.toChildArray=function e(n,t){return t=t||[],null==n||"boolean"==typeof n||(m(n)?n.some(function(n){e(n,t)}):t.push(n)),t}});`;

// ✅ 內聯 Preact Hooks UMD (壓縮後)
const PREACT_HOOKS_UMD_INLINE = `!function(_,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],n):n((_||self).preactHooks={},_.preact)}(this,function(_,n){var t,e,u,o,r=0,c=[],i=n.options,f=i.__b,a=i.__r,h=i.diffed,s=i.__c,l=i.unmount,v=i.__;function m(_,n){i.__h&&i.__h(e,_,r||n),r=0;var t=e.__H||(e.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function p(_){return r=1,d(q,_)}function d(_,n,u){var o=m(t++,2);if(o.t=_,!o.__c&&(o.__=[u?u(n):q(void 0,n),function(_){var n=o.__N?o.__N[0]:o.__[0],t=o.t(n,_);n!==t&&(o.__N=[t,o.__[1]],o.__c.setState({}))}],o.__c=e,!e.u)){var r=function(_,n,t){if(!o.__c.__H)return!0;var e=o.__c.__H.__.filter(function(_){return!!_.__c});if(e.every(function(_){return!_.__N}))return!c||c.call(this,_,n,t);var u=!1;return e.forEach(function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(u=!0)}}),!(!u&&o.__c.props===_)&&(!c||c.call(this,_,n,t))};e.u=!0;var c=e.shouldComponentUpdate,i=e.componentWillUpdate;e.componentWillUpdate=function(_,n,t){if(this.__e){var e=c;c=void 0,r(_,n,t),c=e}i&&i.call(this,_,n,t)},e.shouldComponentUpdate=r}return o.__N||o.__}function H(_,n){var u=m(t++,4);!i.__s&&k(u.__H,n)&&(u.__=_,u.i=n,e.__h.push(u))}function y(_,n){var e=m(t++,7);return k(e.__H,n)&&(e.__=_(),e.__H=n,e.__h=_),e.__}function E(){for(var _;_=c.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(g),_.__H.__h.forEach(C),_.__H.__h=[]}catch(n){_.__H.__h=[],i.__e(n,_.__v)}}i.__b=function(_){e=null,f&&f(_)},i.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),v&&v(_,n)},i.__r=function(_){a&&a(_),t=0;var n=(e=_.__c).__H;n&&(u===e?(n.__h=[],e.__h=[],n.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(n.__h.forEach(g),n.__h.forEach(C),n.__h=[],t=0)),u=e},i.diffed=function(_){h&&h(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&o===i.requestAnimationFrame||((o=i.requestAnimationFrame)||b)(E)),n.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),u=e=null},i.__c=function(_,n){n.some(function(_){try{_.__h.forEach(g),_.__h=_.__h.filter(function(_){return!_.__||C(_)})}catch(t){n.some(function(_){_.__h&&(_.__h=[])}),n=[],i.__e(t,_.__v)}}),s&&s(_,n)},i.unmount=function(_){l&&l(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{g(_)}catch(_){n=_}}),t.__H=void 0,n&&i.__e(n,t.__v))};var N="function"==typeof requestAnimationFrame;function b(_){var n,t=function(){clearTimeout(e),N&&cancelAnimationFrame(n),setTimeout(_)},e=setTimeout(t,100);N&&(n=requestAnimationFrame(t))}function g(_){var n=e,t=_.__c;"function"==typeof t&&(_.__c=void 0,t()),e=n}function C(_){var n=e;_.__c=_.__(),e=n}function k(_,n){return!_||_.length!==n.length||n.some(function(n,t){return n!==_[t]})}function q(_,n){return"function"==typeof n?n(_):n}_.useCallback=function(_,n){return r=8,y(function(){return _},n)},_.useContext=function(_){var n=e.context[_.__c],u=m(t++,9);return u.c=_,n?(null==u.__&&(u.__=!0,n.sub(e)),n.props.value):_.__},_.useDebugValue=function(_,n){i.useDebugValue&&i.useDebugValue(n?n(_):_)},_.useEffect=function(_,n){var u=m(t++,3);!i.__s&&k(u.__H,n)&&(u.__=_,u.i=n,e.__H.__h.push(u))},_.useErrorBoundary=function(_){var n=m(t++,10),u=p();return n.__=_,e.componentDidCatch||(e.componentDidCatch=function(_,t){n.__&&n.__(_,t),u[1](_)}),[u[0],function(){u[1](void 0)}]},_.useId=function(){var _=m(t++,11);if(!_.__){for(var n=e.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var u=n.__m||(n.__m=[0,0]);_.__="P"+u[0]+"-"+u[1]++}return _.__},_.useImperativeHandle=function(_,n,t){r=6,H(function(){return"function"==typeof _?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},null==t?t:t.concat(_))},_.useLayoutEffect=H,_.useMemo=y,_.useReducer=d,_.useRef=function(_){return r=5,y(function(){return{current:_}},[])},_.useState=p});`;

/**
 * 生成 iframe 的完整 HTML 文檔
 */
export function generatePreactIframeHTML(options = {}) {
  const {
    compiledCode = '',
    customStyles = '',
    title = 'Preact Preview',
    mountId = 'root',
    theme = 'light',
    perfMode = false,
    enableLucide = false,
    includeTailwindCdn = false
  } = options;

  const perfScript = perfMode
    ? `
  <script>
    (function() {
      window.__UI_STYLE_PERF_MODE__ = true;
      try {
        document.documentElement.dataset.uiStylePerf = '1';
      } catch {}

      // Reduce costly mouse-driven effects (parallax/tilt) without breaking touch scroll.
      const stopMouseMoves = function(e) {
        if (e && e.type === 'pointermove' && e.pointerType && e.pointerType !== 'mouse') return;
        try { e.stopImmediatePropagation(); } catch {}
      };

      window.addEventListener('mousemove', stopMouseMoves, true);
      window.addEventListener('pointermove', stopMouseMoves, true);
    })();
  </script>
`.trim()
    : '';

  const lucideScriptTag = enableLucide
    ? `\n  <script src="${lucideReactUmdUrl}"></script>\n`
    : '';

  // Lucide React UMD expects a global React with forwardRef/createElement.
  // In our iframe runtime we mainly use Preact; this small guard prevents
  // `Cannot read properties of undefined (reading 'forwardRef')` when Lucide loads.
  const ensureReactForLucideUmd = enableLucide
    ? `
  <script>
    (function() {
      /* ui-style:lucide-umd-react-guard */
      try {
        const p = globalThis.preact;
        if (!p) return;

        // If React isn't present yet, provide a minimal compatible facade.
        const R = globalThis.React || (globalThis.React = {});
        // lucide-react UMD expects globalThis.react (lowercase) as the React runtime.
        if (!globalThis.react) globalThis.react = R;

        if (typeof R.createElement !== 'function') R.createElement = p.h;
        if (typeof R.Fragment === 'undefined') R.Fragment = p.Fragment;
        if (typeof R.forwardRef !== 'function') {
          R.forwardRef = p.forwardRef || function(render) {
            function ForwardRef(props) {
              var ref = props && props.ref;
              var newProps = {};
              for (var k in props) if (k !== 'ref') newProps[k] = props[k];
              return render(newProps, ref || null);
            }
            ForwardRef.displayName = 'ForwardRef(' + (render.displayName || render.name || '') + ')';
            return ForwardRef;
          };
        }
      } catch (_) {}
    })();
  </script>
`.trim()
    : '';

  const tailwindCdnScriptTag = includeTailwindCdn
    ? '\n  <script src="https://cdn.tailwindcss.com"></script>\n'
    : '';

  const layeredCustomStyles = wrapCustomStylesInBaseLayer(customStyles);

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  ${tailwindCdnScriptTag}

  <!-- App CSS (includes custom utilities) -->
  <link rel="stylesheet" href="${appCssUrl}">

  <!-- ✅ 內聯 Preact UMD (避免 CDN 被 sandbox 阻擋) -->
  <script>${PREACT_UMD_INLINE}</script>
  <script>${PREACT_HOOKS_UMD_INLINE}</script>

  ${perfScript}

  ${ensureReactForLucideUmd}

  <!-- 設置全局變量 (React 兼容層：提供 window.React / window.ReactDOM) -->
  <script>
    // 將 Preact 暴露為全局變量
    window.preact = {
      h: preact.h,
      render: preact.render,
      Fragment: preact.Fragment,
      Component: preact.Component,
      createContext: preact.createContext,
      createRef: preact.createRef,
      cloneElement: preact.cloneElement,
      // React 兼容 API
      createElement: preact.h,  // React.createElement = Preact.h
      // Hooks
      useState: preactHooks.useState,
      useEffect: preactHooks.useEffect,
      useRef: preactHooks.useRef,
      useMemo: preactHooks.useMemo,
      useCallback: preactHooks.useCallback,
      useReducer: preactHooks.useReducer,
      useContext: preactHooks.useContext,
      useLayoutEffect: preactHooks.useLayoutEffect,
      useImperativeHandle: preactHooks.useImperativeHandle,
      useDebugValue: preactHooks.useDebugValue,
      useErrorBoundary: preactHooks.useErrorBoundary,
      useId: preactHooks.useId,
      useDeferredValue: preactHooks.useDeferredValue || ((v) => v),
      useTransition: preactHooks.useTransition || (() => [false, (f) => f()]),
      useSyncExternalStore: preactHooks.useSyncExternalStore || ((s, g) => g()),
      useInsertionEffect: preactHooks.useInsertionEffect || preactHooks.useLayoutEffect,
      // React 18+ APIs (fallback implementations)
      memo: preact.memo || ((c) => c),
      forwardRef: preact.forwardRef || function(render) {
        function ForwardRef(props) {
          var ref = props && props.ref;
          var newProps = {};
          for (var k in props) if (k !== 'ref') newProps[k] = props[k];
          return render(newProps, ref || null);
        }
        ForwardRef.displayName = 'ForwardRef(' + (render.displayName || render.name || '') + ')';
        return ForwardRef;
      },
      lazy: preact.lazy || ((c) => c),
      Suspense: preact.Suspense || preact.Fragment,
      PureComponent: preact.PureComponent || preact.Component,
      // React.Children API 完整實現
      Children: (function() {
        const toArray = preact.toChildArray || function(children) {
          if (children == null) return [];
          return Array.isArray(children) ? children.flat() : [children];
        };
        return {
          toArray: toArray,
          map: function(children, fn) {
            if (children == null) return null;
            const arr = toArray(children);
            return arr.map(fn);
          },
          forEach: function(children, fn) {
            if (children == null) return;
            toArray(children).forEach(fn);
          },
          count: function(children) {
            return toArray(children).length;
          },
          only: function(children) {
            const arr = toArray(children);
            if (arr.length !== 1) throw new Error('React.Children.only expected one child');
            return arr[0];
          }
        };
      })(),
      isValidElement: preact.isValidElement || (() => false)
    };

    // 為了與 React 代碼兼容，也暴露為 React
    window.React = window.preact;
    // lucide-react UMD expects lowercase global react
    window.react = window.React;
    window.ReactDOM = {
      render: preact.render,
      hydrate: preact.hydrate,
      createPortal: preact.createPortal
    };
  </script>
  ${lucideScriptTag}

  <!-- 自定義樣式 -->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      min-height: 100vh;
    }

    #${mountId} {
      min-height: 100vh;
    }

    /* 錯誤顯示樣式 */
    .runtime-error {
      background: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
      padding: 16px;
      border-radius: 8px;
      margin: 16px;
      font-family: monospace;
      white-space: pre-wrap;
    }

    ${layeredCustomStyles}
  </style>
</head>
<body>
  <div id="${mountId}"></div>

  <!-- 錯誤處理 -->
  <script>
    window.onerror = function(message, source, lineno, colno, error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = \`
          <div class="runtime-error">
            <strong>運行時錯誤:</strong>
            <br/>\${message}
            <br/>位置: 第 \${lineno} 行, 第 \${colno} 列
          </div>
        \`;
      }
      return true;
    };
  </script>

  <!-- 用戶代碼 -->
  <script>
    try {
      ${compiledCode}
    } catch (error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = \`
          <div class="runtime-error">
            <strong>執行錯誤:</strong>
            <br/>\${error.message}
            <br/>\${error.stack || ''}
          </div>
        \`;
      }
    }
  </script>
</body>
</html>`;
}

/**
 * 生成支持 Framer Motion 替代品的 HTML
 * 使用 @preact/signals 和 CSS 動畫
 */
export function generatePreactWithAnimationHTML(options = {}) {
  const {
    compiledCode = '',
    customStyles = '',
    title = 'Preact Preview with Animation',
    mountId = 'root',
    theme = 'light'
  } = options;

  const layeredCustomStyles = wrapCustomStylesInBaseLayer(customStyles);

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  <!-- App CSS (includes Tailwind utilities) -->
  <link rel="stylesheet" href="${appCssUrl}">

  <!-- Preact + Signals -->
  <script src="https://unpkg.com/preact@10.24.0/dist/preact.umd.js"></script>
  <script src="https://unpkg.com/preact@10.24.0/hooks/dist/hooks.umd.js"></script>
  <script src="https://unpkg.com/@preact/signals-core@1.8.0/dist/signals-core.umd.js"></script>
  <script src="https://unpkg.com/@preact/signals@1.3.0/dist/signals.umd.js"></script>

  <script>
    // 設置全局變量
    window.preact = {
      h: preact.h,
      render: preact.render,
      Fragment: preact.Fragment,
      Component: preact.Component,
      createContext: preact.createContext,
      useState: preactHooks.useState,
      useEffect: preactHooks.useEffect,
      useRef: preactHooks.useRef,
      useMemo: preactHooks.useMemo,
      useCallback: preactHooks.useCallback,
      useReducer: preactHooks.useReducer,
      useContext: preactHooks.useContext
    };

    // Signals 作為動畫狀態管理
    window.preactSignals = {
      signal: preactSignals.signal,
      computed: preactSignals.computed,
      effect: preactSignals.effect,
      batch: preactSignals.batch,
      useSignal: preactSignals.useSignal,
      useComputed: preactSignals.useComputed
    };

    window.React = window.preact;
  </script>

  <!-- 動畫工具函數 -->
  <script>
    // 簡單的動畫工具函數，模擬 Framer Motion 的基本功能
    window.motion = {
      // 創建動畫組件
      div: function(props) {
        const { initial, animate, transition, ...rest } = props;
        const style = { ...rest.style };

        if (animate) {
          Object.keys(animate).forEach(key => {
            style[key] = animate[key];
          });
        }

        if (transition) {
          style.transition = \`all \${transition.duration || 0.3}s \${transition.ease || 'ease'}\`;
        }

        return preact.h('div', { ...rest, style });
      },

      // 其他常用元素
      span: function(props) {
        return this.div({ ...props, as: 'span' });
      },

      button: function(props) {
        const { initial, animate, transition, whileHover, whileTap, ...rest } = props;
        return preact.h('button', rest);
      }
    };

    // AnimatePresence 的簡單實現
    window.AnimatePresence = function({ children }) {
      return children;
    };
  </script>

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .runtime-error {
      background: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
      padding: 16px;
      border-radius: 8px;
      margin: 16px;
      font-family: monospace;
    }

    ${layeredCustomStyles}
  </style>
</head>
<body>
  <div id="${mountId}"></div>

  <script>
    window.onerror = function(message, source, lineno, colno, error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="runtime-error"><strong>Error:</strong> ' + message + '</div>';
      }
      return true;
    };
  </script>

  <script>
    try {
      ${compiledCode}
    } catch (error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="runtime-error"><strong>Error:</strong> ' + error.message + '</div>';
      }
    }
  </script>
</body>
</html>`;
}

/**
 * 獲取 Preact 版本信息
 */
export function getPreactVersion() {
  return {
    preact: '10.24.0',
    hooks: '10.24.0',
    signals: '1.3.0'
  };
}

/**
 * 計算預計的總體積（KB）
 */
export function estimateBundleSize(options = {}) {
  const {
    includeSignals = false,
    includeAnimation = false
  } = options;

  let total = 0;

  // 基礎 Preact
  total += 4;   // preact core
  total += 2;   // hooks

  // 可選
  if (includeSignals) {
    total += 3; // signals
  }

  if (includeAnimation) {
    total += 1; // 簡單動畫工具
  }

  return {
    total: `~${total}KB`,
    breakdown: {
      preact: '4KB',
      hooks: '2KB',
      signals: includeSignals ? '3KB' : '0KB',
      animation: includeAnimation ? '1KB' : '0KB'
    },
    note: 'CSS 由 App 內建樣式提供（iframe 直接引用 index.css）'
  };
}

export default {
  generatePreactIframeHTML,
  generatePreactWithAnimationHTML,
  getPreactVersion,
  estimateBundleSize
};
