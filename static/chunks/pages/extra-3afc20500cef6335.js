(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9189],{8103:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extra",function(){return n(9847)}])},9847:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return k},default:function(){return _}});var r=n(5893),i=n(4912),l=n(9008),a=n.n(l),s=n(5675),c=n.n(s),o=n(1163),d=n(1213),u=n(7294),h=n(7536),m=n(549),f=n(3511),p=n(6198),j=n(5428),v=n(2670),x=n(8690),g=n(8981);let b=e=>{let[t,n]=(0,u.useState)(),[r,i]=(0,u.useState)(!1),[l,a]=(0,u.useState)();return(0,u.useEffect)(()=>{e&&(i(!0),x.ZD.sdgproductGetCollection({upnLabel:e}).then(e=>{let t=(0,g.g)(e.results[0]);n(t)},e=>{a(e)}).finally(()=>{i(!1)}))},[e]),[t,r,l]};var k=!0;function _(){let{t:e}=(0,d.$G)(["common","huwelijksplanner-step-5","form"]),[t,n]=(0,u.useContext)(v.K),{locale:l="nl",push:s}=(0,o.useRouter)(),[g,k]=b("trouwboekje"),{register:_,handleSubmit:w}=(0,h.cI)(),y=t.reservation,[N,S]=(0,u.useState)(!1),E="marriage-certificate-kind",T=(0,u.useId)(),F=e=>{var n,r,i,l,a,s,c,o;switch(e){case"998206bc-d530-4291-89eb-02ebe21a7289":return parseFloat(null!==(r=null===(n=t.reservation)||void 0===n?void 0:n["ceremony-price-amount"])&&void 0!==r?r:"0")+32.5;case"22f40941-72ff-4825-87f4-1a67d6daf7f2":return parseFloat(null!==(l=null===(i=t.reservation)||void 0===i?void 0:i["ceremony-price-amount"])&&void 0!==l?l:"0")+32.5;case"c8c733e1-13c8-4d96-a388-de30d787f15b":return parseFloat(null!==(s=null===(a=t.reservation)||void 0===a?void 0:a["ceremony-price-amount"])&&void 0!==s?s:"0")+30;default:return parseFloat(null!==(o=null===(c=t.reservation)||void 0===c?void 0:c["ceremony-price-amount"])&&void 0!==o?o:"0")+0}};return(0,r.jsx)(f.Tg,{children:(0,r.jsxs)(f.BB,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"".concat(e("huwelijksplanner-step-5:title")," -  ").concat("Gemeente Leiden")})}),(0,r.jsxs)(f.T3,{children:[(0,r.jsx)(f.mr,{children:(0,r.jsx)(j.P,{})}),(0,r.jsx)(f.JH,{children:(0,r.jsx)(f.J7,{children:(0,r.jsxs)("form",{onSubmit:w(e=>{if("none"===e["marriage-certificate-kind"]){s("/voorgenomen-huwelijk/checken");return}y&&(S(!0),t.id&&x._H.huwelijkGet({id:t.id.toString()}).then(r=>{var i,l;x._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(i=r.id)&&void 0!==i?i:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/416de8b8-d5d1-4f44-9a1e-1846d552292c",waarde:null!==(l=F(e["marriage-certificate-kind"]).toString())&&void 0!==l?l:""}}).finally(()=>{n({...t,reservation:{...y,"ceremony-price-amount":F(e["marriage-certificate-kind"]).toString()}}),S(!1),s("/voorgenomen-huwelijk/checken")})}))}),children:[(0,r.jsxs)(f.OX,{children:[(0,r.jsx)(f.nL,{children:e("huwelijksplanner-step-5:heading-1")}),(0,r.jsx)(f.nv,{lead:!0,children:"Stap 3 — Meld je voorgenomen huwelijk"})]}),t.reservation&&(0,r.jsx)(f.Rf,{reservation:t.reservation,locale:l}),(0,r.jsxs)("section",{children:[(0,r.jsx)(f.XJ,{children:"Kies je extra’s"}),(0,r.jsx)(f.nv,{children:"Een trouwboekje hoort niet meer standaard bij een huwelijk. Je kunt het wel bestellen als extra - dan is het een mooie aandenken aan jullie trouwdag."}),k?(0,r.jsx)(m.Z,{height:"250px"}):(0,r.jsxs)(f.pg,{style:{width:"fit-content"},children:[(0,r.jsx)(f.Qv,{children:"Trouwboekje"}),(0,r.jsx)(f.nv,{children:(0,r.jsx)(c(),{src:"/img/voorbeeld-trouwboekjes.jpg",width:600,height:385,alt:"trouwboekjes"})}),(0,r.jsx)(i.Wi,{type:"radio",children:(0,r.jsx)(f.nv,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:(0,r.jsxs)(i.lX,{htmlFor:T,type:"radio",children:[(0,r.jsx)(f.PZ,{className:"utrecht-form-field__input",id:T,defaultChecked:!0,value:"none",..._(E)}),"Nee, wij willen geen trouwboekje"]})})}),g&&g.vertalingen.map(e=>(0,r.jsx)(i.Wi,{type:"radio",children:(0,r.jsx)(f.nv,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:(0,r.jsxs)(i.lX,{htmlFor:e.id,type:"radio",children:[(0,r.jsx)(f.PZ,{className:"utrecht-form-field__input",id:e.id,value:e.id,..._(E)}),e.specifiekeTekst," (",e.kosten,")"]})})},e.id))]})]}),(0,r.jsx)(i.hE,{children:(0,r.jsx)(f.zx,{disabled:N||k,type:"submit",name:"type",appearance:"primary-action-button",children:"Bevestigen"})})]})})}),(0,r.jsx)(f.WA,{children:(0,r.jsx)(p.O,{})})]})]})})}},6198:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(5893),i=n(7294);let l=[{theme:"utrecht-theme",content:[{title:"Telefoon",value:"14 030"},{title:"Adres",subItems:[{title:"Stadskantoor",value:"Stadsplateau 1, 3521AZ"}]}]},{theme:"leiden-theme",content:[{title:"Telefoon",value:"14 071"},{title:"Adres",subItems:[{title:"STADSKANTOOR",value:"Bargelaan 190"}]}]}],a=()=>{let[e,t]=i.useState(l.find(e=>"utrecht-theme"===e.theme));return i.useEffect(()=>{var e;t(l.find(e=>"leiden-theme"===e.theme))},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("address",{className:"utrecht-page-footer__address utrecht-page-footer__address--reset-address",children:[(0,r.jsx)("h2",{className:"utrecht-heading-2 utrecht-heading-2--reset-h2",children:"Gemeente Leiden"}),e&&(null==e?void 0:e.content.map((e,t)=>(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{className:"utrecht-heading-3 utrecht-heading-3--distanced",children:e.title}),(0,r.jsxs)("p",{className:"utrecht-paragraph utrecht-paragraph--distanced",children:["Telefoon"===e.title&&(0,r.jsx)("a",{href:"tel:+31".concat(e.value),className:"utrecht-link utrecht-link--telephone",children:e.value}),"Telefoon"!==e.title&&!e.subItems&&(0,r.jsx)("span",{children:e.value}),"Telefoon"!==e.title&&e.subItems&&e.subItems.map((e,t)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("strong",{children:e.title}),(0,r.jsx)("br",{}),e.value]},t))]})]},t)))]}),(0,r.jsx)("div",{className:"utrecht-page-footer__navigation",children:(0,r.jsxs)("ul",{className:"utrecht-link-list utrecht-link-list--chevron",children:[(0,r.jsx)("li",{className:"utrecht-link-list__item",children:(0,r.jsx)("a",{href:"/contact/",className:"utrecht-link",children:"Meer contactinformatie"})}),(0,r.jsx)("li",{className:"utrecht-link-list__item",children:(0,r.jsx)("a",{href:"/over-deze-website",className:"utrecht-link",children:"Over deze website"})})]})})]})}},5428:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var r=n(5893),i=n(3511);/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */let l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.TR,{layoutClassName:"utrecht-page-header__logo",variant:"header"}),(0,r.jsx)(i.Dm,{headingLevel:2,className:"utrecht-page-header__alternate-lang-nav"}),(0,r.jsx)(i.xF,{})]})},8981:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=n(1730),i=n.n(r),l=n(905),a=n.n(l),s=n(8146),c=n.n(s);let o=e=>a()(e,e=>c()(e)&&c()(e.embedded)?i()(Object.create(null),e,o(e.embedded),{embedded:void 0}):void 0)},549:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294);let i=r.createContext({});function l({count:e=1,wrapper:t,className:n,containerClassName:l,containerTestId:a,circle:s=!1,style:c,...o}){var d,u,h;let m=r.useContext(i),f={...o};for(let[e,t]of Object.entries(o))void 0===t&&delete f[e];let p={...m,...f,circle:s},j={...c,...function({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:l,direction:a,duration:s,enableAnimation:c=!0}){let o={};return"rtl"===a&&(o["--animation-direction"]="reverse"),"number"==typeof s&&(o["--animation-duration"]=`${s}s`),c||(o["--pseudo-element-display"]="none"),("string"==typeof n||"number"==typeof n)&&(o.width=n),("string"==typeof r||"number"==typeof r)&&(o.height=r),("string"==typeof i||"number"==typeof i)&&(o.borderRadius=i),l&&(o.borderRadius="50%"),void 0!==e&&(o["--base-color"]=e),void 0!==t&&(o["--highlight-color"]=t),o}(p)},v="react-loading-skeleton";n&&(v+=` ${n}`);let x=null!==(d=p.inline)&&void 0!==d&&d,g=[],b=Math.ceil(e);for(let t=0;t<b;t++){let n=j;if(b>e&&t===b-1){let t=null!==(u=n.width)&&void 0!==u?u:"100%",r=e%1,i="number"==typeof t?t*r:`calc(${t} * ${r})`;n={...n,width:i}}let i=r.createElement("span",{className:v,style:n,key:t},"‌");x?g.push(i):g.push(r.createElement(r.Fragment,{key:t},i,r.createElement("br",null)))}return r.createElement("span",{className:l,"data-testid":a,"aria-live":"polite","aria-busy":null===(h=p.enableAnimation)||void 0===h||h},t?g.map((e,n)=>r.createElement(t,{key:n},e)):g)}}},function(e){e.O(0,[4912,1664,7251,8764,7536,9595,5675,5169,3850,9774,2888,179],function(){return e(e.s=8103)}),_N_E=e.O()}]);