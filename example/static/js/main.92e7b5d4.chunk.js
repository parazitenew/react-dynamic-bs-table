/*! For license information please see main.92e7b5d4.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-dynamic-bs-table-example"]=this["webpackJsonpreact-dynamic-bs-table-example"]||[]).push([[0],[,,function(e,t,a){e.exports=a(11)},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(3);var s=a(0),r=a.n(s),o=a(1),n=a.n(o);function l(e,t){return e(t={exports:{}},t.exports),t.exports}var i="function"===typeof Symbol&&Symbol.for,c=i?Symbol.for("react.element"):60103,m=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,d=i?Symbol.for("react.strict_mode"):60108,b=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,g=i?Symbol.for("react.context"):60110,_=i?Symbol.for("react.async_mode"):60111,h=i?Symbol.for("react.concurrent_mode"):60111,y=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.suspense_list"):60120,P=i?Symbol.for("react.memo"):60115,S=i?Symbol.for("react.lazy"):60116,C=i?Symbol.for("react.block"):60121,O=i?Symbol.for("react.fundamental"):60117,N=i?Symbol.for("react.responder"):60118,E=i?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case c:switch(e=e.type){case _:case h:case u:case b:case d:case f:return e;default:switch(e=e&&e.$$typeof){case g:case y:case S:case P:case p:return e;default:return t}}case m:return t}}}function k(e){return w(e)===h}var j={AsyncMode:_,ConcurrentMode:h,ContextConsumer:g,ContextProvider:p,Element:c,ForwardRef:y,Fragment:u,Lazy:S,Memo:P,Portal:m,Profiler:b,StrictMode:d,Suspense:f,isAsyncMode:function(e){return k(e)||w(e)===_},isConcurrentMode:k,isContextConsumer:function(e){return w(e)===g},isContextProvider:function(e){return w(e)===p},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===c},isForwardRef:function(e){return w(e)===y},isFragment:function(e){return w(e)===u},isLazy:function(e){return w(e)===S},isMemo:function(e){return w(e)===P},isPortal:function(e){return w(e)===m},isProfiler:function(e){return w(e)===b},isStrictMode:function(e){return w(e)===d},isSuspense:function(e){return w(e)===f},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===u||e===h||e===b||e===d||e===f||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===P||e.$$typeof===p||e.$$typeof===g||e.$$typeof===y||e.$$typeof===O||e.$$typeof===N||e.$$typeof===E||e.$$typeof===C)},typeOf:w},L=(l((function(e,t){0})),l((function(e){e.exports=j})),Object.getOwnPropertySymbols),x=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;function F(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(e){s[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(r){return!1}})()&&Object.assign;var T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function B(e,t,a,s,r){}B.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function M(){}function A(){}A.resetWarningCache=M;var R=l((function(e){e.exports=function(){function e(e,t,a,s,r,o){if(o!==T){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:A,resetWarningCache:M};return a.PropTypes=a,a}()})),W={table:"_styles-module__table__FnYjQ","table-sm":"_styles-module__table-sm__3d7OD","table-bordered":"_styles-module__table-bordered__3wqKd","table-borderless":"_styles-module__table-borderless__2Ux5e","table-striped":"_styles-module__table-striped__3NyrT","table-hover":"_styles-module__table-hover__3oD8Q","table-primary":"_styles-module__table-primary__3GXfE","table-secondary":"_styles-module__table-secondary__3VKUy","table-success":"_styles-module__table-success__3ppgt","table-info":"_styles-module__table-info__14-mx","table-warning":"_styles-module__table-warning__1O3D0","table-danger":"_styles-module__table-danger__1kWDx","table-light":"_styles-module__table-light__2fHRB","table-dark":"_styles-module__table-dark__2qX-A","table-active":"_styles-module__table-active__ar4Wc","thead-dark":"_styles-module__thead-dark__1qb7X","thead-light":"_styles-module__thead-light__HvtTL","table-responsive-sm":"_styles-module__table-responsive-sm__ezqvq","table-responsive-md":"_styles-module__table-responsive-md__11Wge","table-responsive-lg":"_styles-module__table-responsive-lg__3w3r_","table-responsive-xl":"_styles-module__table-responsive-xl__1nvmW","table-responsive":"_styles-module__table-responsive__KinjT",pagination:"_styles-module__pagination__Qe0aR","pagination-lg":"_styles-module__pagination-lg__3vydX","page-link":"_styles-module__page-link__3SvUo","page-item":"_styles-module__page-item__34CwJ","pagination-sm":"_styles-module__pagination-sm__11P4j",active:"_styles-module__active__3sodH",disabled:"_styles-module__disabled__2RWmX",searchbar:"_styles-module__searchbar__28hk2"};class U extends r.a.Component{constructor(e){super(e),this.numberOfPages=null,this.state={currentPage:1,bodyList:[],bodyListFiltered:[]}}componentDidUpdate(){this.state.bodyList.length!==this.props.bodyList.length&&this.setState({bodyList:this.props.bodyList,bodyListFiltered:this.props.bodyList})}nextPage(){this.state.currentPage<this.numberOfPages&&this.setState({currentPage:this.state.currentPage+1})}previousPage(){this.state.currentPage>1&&this.setState({currentPage:this.state.currentPage-1})}searchFor(e){let t=this.state.bodyList.filter(t=>Object.keys(t).some(a=>-1!=t[a].toLowerCase().indexOf(e.target.value)));this.setState({bodyListFiltered:t,currentPage:1})}render(){let{headList:e,imageHeight:t,imageWidth:a,itemsPerPage:s,rowNumber:o,enablePagination:n,tableHover:l,tableBkColor:i,tableBordered:c,tableStriped:m,tableResponsive:u,tableInverse:d,customClass:b,enableSearchBar:p,searchBarPlaceholder:g,searchBarClass:_}=this.props,h=this.state.bodyListFiltered;a=void 0===a?null:a,t=void 0===t?null:t,s=void 0===s?10:s,o=void 0!==o&&o,n=void 0!==n&&n,p=void 0!==p&&p,g=void 0===g?"Search for...":g,_=void 0===_?W.searchbar:_;let y=Math.ceil(h.length/s);this.numberOfPages=y;let f=!0===n?(this.state.currentPage-1)*s:0,v=!0===n?this.state.currentPage*s:h.length,P=W.table;switch(P=l?P+" "+W["table-hover"]:P,P=u?P+" "+W["table-responsive"]:P,P=c?P+" "+W["table-bordered"]:P,P=d?P+" "+W["table-inverse"]:P,P=m?P+" "+W["table-striped"]:P,i){case"info":P=P+" "+W["table-info"];break;case"success":P=P+" "+W["table-success"];break;case"danger":P=P+" "+W["table-danger"];break;case"warning":P=P+" "+W["table-warning"]}let S="",C="";return void 0!==b&&"object"===typeof b&&""!==b&&(void 0!==b.tableClass&&""!==b.tableClass&&(P=b.tableClass),void 0!==b.trClass&&""!==b.trClass&&(S=b.trClass),void 0!==b.theadClass&&""!==b.theadClass&&(C=b.theadClass)),r.a.createElement("div",null,p&&r.a.createElement("input",{type:"text",className:_,placeholder:g,onChange:e=>this.searchFor(e)}),r.a.createElement("table",{className:P},r.a.createElement("thead",{className:C},r.a.createElement("tr",{className:S},o&&r.a.createElement("th",null,"#"),e.map((e,t)=>r.a.createElement("th",{key:t},e)))),r.a.createElement("tbody",null,h.slice(f,v).map((e,n)=>{let l=Object.keys(e);return r.a.createElement("tr",{key:n,className:S},o&&r.a.createElement("th",null,n+(this.state.currentPage-1)*s+1),l.map((s,o)=>{const n=e[s].split(".");let l=n[n.length-1];return"jpg"===l||"png"===l||"jpeg"===l||"gif"===l?r.a.createElement("td",{key:o},r.a.createElement("img",{alt:"image",src:e[s],style:{height:t,width:a}})):r.a.createElement("td",{key:o},e[s])}))}))),n&&r.a.createElement("nav",null,r.a.createElement("ul",{className:W.pagination},r.a.createElement("li",{className:W["page-item"]},r.a.createElement("a",{className:W["page-link"],href:"#",onClick:()=>this.previousPage()},"Previous")),r.a.createElement("li",{className:W["page-item"]},r.a.createElement("a",{className:W["page-link"],href:"#"},this.state.currentPage+" / "+y)),r.a.createElement("li",{className:W["page-item"]},r.a.createElement("a",{className:W["page-link"],href:"#",onClick:()=>this.nextPage()},"Next")))))}}U.propTypes={headList:R.array,bodyList:R.array,imageHeight:R.number,imageWidth:R.number,itemsPerPage:R.number,rowNumber:R.bool,enablePagination:R.bool,tableHover:R.bool,tableBkColor:R.string,tableBordered:R.bool,tableStriped:R.bool,tableResponsive:R.bool,tableInverse:R.bool,customClass:R.object,enableSearchBar:R.bool,searchBarPlaceholder:R.string,searchBarClass:R.string};var D=U;a(10);const H=["Brand","Model","Country","Picture"],I=[{brandName:"Ford",modelName:"Fusion",country:"USA",imagePath:"https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2018FOC270001/2018FOC27000101.jpg"},{brandName:"Seat",modelName:"Ibiza",country:"Spain",imagePath:"https://www.seat.be/content/countries/be/seat-website/fr/modeles/ibiza/fr/_jcr_content.resizedViewPort.noscale.specsMiniature.png"},{brandName:"Volkswagen",modelName:"Golf",country:"Germany",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Renault",modelName:"Clio",country:"France",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Peugeot",modelName:"308",country:"France",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Chevrolet",modelName:"Cruze",country:"USA",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Renault",modelName:"Kangoo",country:"France",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Volkswagen",modelName:"Polo",country:"Germany",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Audi",modelName:"A3",country:"Germany",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Seat",modelName:"Ateca",country:"Spain",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"BMW",modelName:"M4",country:"Germany",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Mercedes",modelName:"Class A 180",country:"Germany",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"},{brandName:"Ford",modelName:"Fiesta",country:"USA",imagePath:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"}];class z extends r.a.Component{constructor(e){super(e),this.state={brandsList:[]}}simulateDataUpdate(){this.setState({brandsList:this.state.brandsList.slice(0,4)})}componentDidMount(){this.setState({brandsList:I})}render(){return r.a.createElement("div",{style:{width:600,marginLeft:200,marginTop:100,padding:5,borderColor:"grey",borderWidth:1,borderStyle:"solid",borderRadius:10}},r.a.createElement("button",{onClick:()=>this.simulateDataUpdate()},"SIMULATE DATA UPDATE"),r.a.createElement(D,{bodyList:this.state.brandsList,headList:H,imageHeight:75,rowNumber:!0,enablePagination:!0,itemsPerPage:5,customClass:{tableClass:"",trClass:"",theadClass:""},enableSearchBar:!0,tableHover:!0,searchBarPlaceholder:"Search..."}))}}var q=z;n.a.render(r.a.createElement(q,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.92e7b5d4.chunk.js.map