(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1976],{391:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/persoonsgegevens/[person]",function(){return t(8593)}])},8593:function(e,n,t){"use strict";let i;t.r(n),t.d(n,{DeclarationCheckboxGroup:function(){return R},__N_SSP:function(){return I},default:function(){return H}});var a=t(5893),r=t(4912),l=t(3946),s=t(1820),o=t(3882),c=t(5496),d=t(9008),u=t.n(d),h=t(1163),p=t(1213),m=t(7294),f=t(7536),j=t(549);let v="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var g={randomUUID:v};let x=new Uint8Array(16);function k(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(x)}let b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));var w=function(e,n,t){if(g.randomUUID&&!n&&!e)return g.randomUUID();e=e||{};let i=e.random||(e.rng||k)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=i[e];return n}return function(e,n=0){return b[e[n+0]]+b[e[n+1]]+b[e[n+2]]+b[e[n+3]]+"-"+b[e[n+4]]+b[e[n+5]]+"-"+b[e[n+6]]+b[e[n+7]]+"-"+b[e[n+8]]+b[e[n+9]]+"-"+b[e[n+10]]+b[e[n+11]]+b[e[n+12]]+b[e[n+13]]+b[e[n+14]]+b[e[n+15]]}(i)},y=t(3511);let z=e=>{var n,t,i,l,s;let{partner:o}=e,{t:c}=(0,p.$G)(["common","huwelijksplanner-step-4","form"]);return(0,a.jsxs)(r.FR,{"aria-describedby":"address",className:"utrecht-data-list--rows",children:[(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:c("form:street")}),(0,a.jsx)(r.JL,{value:o.verblijfplaats.straat,emptyDescription:c("form:data-item-unknown"),children:null!==(n=o.verblijfplaats.straat)&&void 0!==n?n:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:c("form:house-number")}),(0,a.jsx)(r.JL,{value:o.verblijfplaats.huisnummer,emptyDescription:c("form:data-item-unknown"),children:(0,a.jsx)(r.bt,{children:null!==(t=o.verblijfplaats.huisnummer)&&void 0!==t?t:"-"})})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:c("form:house-number-suffix")}),(0,a.jsx)(r.JL,{value:o.verblijfplaats.huisnummerToevoeging,emptyDescription:c("form:data-item-empty"),notranslate:!0,children:null!==(i=o.verblijfplaats.huisnummerToevoeging)&&void 0!==i?i:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:c("form:postal-code")}),(0,a.jsx)(r.JL,{value:o.verblijfplaats.postcode,emptyDescription:c("form:data-item-unknown"),children:null!==(l=o.verblijfplaats.postcode)&&void 0!==l?l:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:c("form:place-of-residence")}),(0,a.jsx)(r.JL,{value:o.verblijfplaats.woonplaats,emptyDescription:c("form:data-item-unknown"),notranslate:!0,children:null!==(s=o.verblijfplaats.woonplaats)&&void 0!==s?s:"-"})]})]})};var _=t(6198),N=t(5428);let S=e=>{var n,t,i,l,s,o,c,d;let{partner:u}=e,{t:h}=(0,p.$G)(["common","huwelijksplanner-step-4","form"]);return(0,a.jsxs)(r.FR,{"aria-describedby":"personal-details",className:"utrecht-data-list--rows",children:[(0,a.jsxs)(r.LC,{children:[(0,a.jsxs)(r.rt,{children:[h("form:bsn"),":"]}),(0,a.jsx)(r.JL,{value:null!==(n=u.burgerservicenummer)&&void 0!==n?n:"",emptyDescription:h("form:data-item-unknown"),children:(0,a.jsx)(r.bt,{children:u.burgerservicenummer})})]})," ",(0,a.jsxs)(r.LC,{children:[(0,a.jsxs)(r.rt,{children:[h("form:Geslacht"),":"]}),(0,a.jsx)(r.JL,{value:null!==(t=u.geslachtsaanduiding)&&void 0!==t?t:"",emptyDescription:h("form:data-item-unknown"),children:null!==(i=u.geslachtsaanduiding)&&void 0!==i?i:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:given-name")}),(0,a.jsx)(r.JL,{value:u.naam.voornamen,emptyDescription:h("form:data-item-unknown"),notranslate:!0,children:null!==(l=u.naam.voornamen)&&void 0!==l?l:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:family-name-prefix")}),(0,a.jsx)(r.JL,{value:u.naam.voorvoegsel,emptyDescription:h("form:data-item-empty"),notranslate:!0,children:null!==(s=u.naam.voorvoegsel)&&void 0!==s?s:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:family-name")}),(0,a.jsx)(r.JL,{value:u.naam.geslachtsnaam,emptyDescription:h("form:data-item-unknown"),notranslate:!0,children:null!==(o=u.naam.geslachtsnaam)&&void 0!==o?o:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:bday")}),(0,a.jsx)(r.JL,{value:u.geboorte.datumOnvolledig.datum,emptyDescription:h("form:data-item-unknown"),children:null!==(c=u.geboorte.datumOnvolledig.datum)&&void 0!==c?c:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:place-of-birth")}),(0,a.jsx)(r.JL,{value:u.geboorte.datumOnvolledig.plaats,emptyDescription:h("form:data-item-unknown"),notranslate:!0,children:null!==(d=u.geboorte.datumOnvolledig.plaats)&&void 0!==d?d:"-"})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:nationality")}),(0,a.jsx)(r.JL,{value:u.nationaliteiten[0].nationaliteit.code,emptyDescription:h("form:data-item-unknown"),notranslate:!0,children:u.nationaliteiten[0].nationaliteit.omschrijving||u.nationaliteiten[0].nationaliteit.code})]}),(0,a.jsxs)(r.LC,{children:[(0,a.jsx)(r.rt,{children:h("form:registered-guardianship")}),(0,a.jsx)(r.JL,{value:1===u.gezagsverhouding?"Ja":void 0,emptyDescription:h("form:data-item-unknown"),children:u.gezagsverhouding?"Ja":"-"})]})]})};var E=t(2670),C=t(8690),L=t(8981);let J=e=>{let[n,t]=(0,m.useState)(),[i,a]=(0,m.useState)(!1),[r,l]=(0,m.useState)();return(0,m.useEffect)(()=>{e&&0!==e.length&&(a(!0),C.$Q.ingeschrevenpersoonGetCollection({burgerservicenummer:e}).then(e=>{t((0,L.g)(e.results[0]))},e=>{l(e)}).finally(()=>{a(!1)}))},[e]),[n,i,r]};var D=t(8102),I=!0;function H(){let{t:e}=(0,p.$G)(["common","huwelijksplanner-step-4","form"]),[n,t]=(0,m.useState)({"correct-information-and-complete":!1,"not-marrying-relative":!1,unmarried:!1}),[i,d]=(0,m.useState)(!1),{query:{huwelijkId:v},locale:g="nl",push:x}=(0,h.useRouter)(),{formState:k,handleSubmit:b,register:L,reset:I}=(0,f.cI)(),[H,B]=(0,m.useContext)(E.K),[q]=J((0,D.p0)()),{reservation:P,ambtenaar:A,productId:G}=H,[X,F]=(0,m.useState)(H.id),[Z,W]=(0,m.useState)(!1),[$,V]=(0,m.useState)(!1),[M,K]=(0,m.useState)(!1),[Y,Q]=(0,m.useState)(!1),[ee,en]=(0,m.useState)(!1),[et,ei]=(0,m.useState)(!1),[ea,er]=(0,m.useState)(!1),el=(0,m.useRef)(!1),es=(0,m.useId)(),eo=e=>{switch(e["ceremony-type"]){case"gratis trouwen":default:return"EUR 0.00";case"flits/baliehuwelijk":return"EUR 32.50";case"eenvoudig huwelijk":return"EUR 220.00"}};(0,m.useEffect)(()=>{!0!==Z||!0!==$||!0!==M||!0!==Y||!0!==ee||!0!==et||v?v||er(!0):C._H.huwelijkGet({id:null!=X?X:" "}).then(e=>{if(!P)return;let n=e.results.find(e=>"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/f81cb98c-233c-4b8d-9de3-4ecc93032012"===e.eigenschap);B({...H,id:X||"",reservation:{...P,"ceremony-end":(function(e,n){(0,o.Z)(2,arguments);var t=(0,l.Z)(15);return(0,s.Z)(e,6e4*t)})(new Date(n.waarde||""),15).toString(),"ceremony-price-currency":eo(P).split(" ")[0]||"EUR","ceremony-price-amount":eo(P).split(" ")[1]||"-"}}),er(!1)})},[Z,$,M,Y,ee,et]),(0,m.useEffect)(()=>{!0===n["correct-information-and-complete"]&&!0===n["not-marrying-relative"]&&!0===n.unmarried?d(!0):d(!1)},[n]);let ec=(0,m.useCallback)(()=>{if(!P)return;er(!0);let e={identificatie:w(),bronorganisatie:"unknown",omschrijving:"Test ".concat((0,c.Z)(new Date,"HH:mm:ss")," huwelijk"),toelichting:"Test ".concat((0,c.Z)(new Date,"HH:mm:ss")," huwelijk"),zaaktype:"https://api.huwelijksplanner.online/api/ztc/v1/zaaktypen/4af1c0ea-12b7-4e23-8913-b3effc047951",verantwoordelijkeOrganisatie:null,startdatum:(0,c.Z)(new Date,"yyyy-MM-dd")};C._H.huwelijkCreate({requestBody:e}).then(e=>{var n,t,i,a,r,l,s,o,c,d;F(e.id),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(n=e.id)&&void 0!==n?n:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/a2f2bce4-3877-4ad9-833e-5241c3a71cab",waarde:null!=G?G:""}}).finally(()=>{W(!0)}),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(t=e.id)&&void 0!==t?t:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/d63af89f-0ee7-4b26-b07d-0faf02d34b51",waarde:null!==(i=P["ceremony-id"])&&void 0!==i?i:""}}).finally(()=>{V(!0)}),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(a=e.id)&&void 0!==a?a:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/f81cb98c-233c-4b8d-9de3-4ecc93032012",waarde:null!==(r=P["ceremony-start"])&&void 0!==r?r:""}}).finally(()=>{K(!0)}),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(l=e.id)&&void 0!==l?l:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/1f8e3903-ca20-4b34-a46a-aef0cc16eb19",waarde:null!=A?A:""}}).finally(()=>{Q(!0)}),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(s=e.id)&&void 0!==s?s:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/745d85cc-8972-43b9-916e-c268bf87d750",waarde:null!==(o=P["ceremony-location"])&&void 0!==o?o:""}}).finally(()=>{en(!0)}),C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!==(c=e.id)&&void 0!==c?c:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/416de8b8-d5d1-4f44-9a1e-1846d552292c",waarde:null!==(d=eo(P))&&void 0!==d?d:""}}).finally(()=>{ei(!0)})}).finally(()=>{er(!1)})},[A,H,G,P,B,q]);return(0,m.useEffect)(()=>{!el.current&&P&&q&&!H.id&&(ec(),el.current=!0)},[v,ec,H,P,B,q]),(0,m.useEffect)(()=>{k.isDirty&&I(void 0,{keepValues:!0,keepErrors:!0,keepIsValid:!0,keepIsSubmitted:!1})}),(0,a.jsx)(r.Tg,{children:(0,a.jsxs)(r.BB,{children:[(0,a.jsx)(u(),{children:(0,a.jsx)("title",{children:"".concat(e("common:step-n",{n:3}),": ").concat(e("huwelijksplanner-step-4:title")," - ").concat("Gemeente Leiden")})}),(0,a.jsx)(r.GX,{href:"#main",children:e("common:skip-link-main")}),(0,a.jsxs)(r.T3,{children:[(0,a.jsx)(r.mr,{children:(0,a.jsx)(N.P,{})}),(0,a.jsx)(r.JH,{children:(0,a.jsx)(y.J7,{children:(0,a.jsxs)("form",{onSubmit:b(e=>{er(!0),v?C._H.huwelijkGet({id:v.toString()}).then(n=>{var t;if(!P)return;let i=n.results.find(e=>"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3"===e.eigenschap),a=JSON.parse(i.waarde);C._H.huwelijkPatchEigenschap({id:i.id,requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!=v?v:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3",waarde:null!==(t=JSON.stringify([{...a},{...q,requester:(0,D.p0)(),contact:{subjectIdentificatie:{inpBsn:(0,D.p0)()},...U(e.email,e.phoneNumber)},results:T(),name:""}]))&&void 0!==t?t:""}}).then(()=>{x("/persoonsgegevens/succes?huwelijkId=".concat(v)),er(!1)})}):C._H.huwelijkGet({id:null!=X?X:" "}).then(n=>{var t;P&&C._H.huwelijkPostEigenschap({requestBody:{zaak:"https://api.huwelijksplanner.online/api/zrc/v1/zaken/".concat(null!=X?X:""),eigenschap:"https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3",waarde:null!==(t=JSON.stringify({...q,requester:(0,D.p0)(),contact:{subjectIdentificatie:{inpBsn:(0,D.p0)()},...U(e.email,e.phoneNumber)},results:T(),name:""}))&&void 0!==t?t:""}}).then(()=>{let n=JSON.stringify({...q,requester:(0,D.p0)(),contact:{subjectIdentificatie:{inpBsn:(0,D.p0)()},...U(e.email,e.phoneNumber)},results:T(),name:""});B({...H,partners:[n]}),x("/voorgenomen-huwelijk/partner"),er(!1)})})}),children:[(0,a.jsxs)(r.OX,{children:[(0,a.jsx)(r.nL,{children:e("huwelijksplanner-step-4:heading-1")}),(0,a.jsxs)(r.nv,{lead:!0,children:[e("common:step-n-of-m",{n:3,m:5})," — Meld je voorgenomen huwelijk"]})]}),ea?(0,a.jsx)(j.Z,{height:"50px"}):P&&(0,a.jsx)(y.Rf,{reservation:P,locale:g}),(0,a.jsxs)("section",{children:[(0,a.jsxs)(r.CY,{type:"info",children:[(0,a.jsx)(r.XJ,{children:"Gegevens uit Basisregistratie Personen"}),(0,a.jsxs)(r.nv,{children:["Hieronder zie je de gegevens die bij ons bekend zijn. Klopt er iets niet?"," ",(0,a.jsx)(r.rU,{href:"https://pki.utrecht.nl/Loket/product/499c98cd12284d9c6bfe658dd0ea95cb",children:"Neem contact op met de gemeente"}),"."]})]}),(0,a.jsx)(r.XJ,{id:"personal-details",children:"Persoonsgegevens"}),q?(0,a.jsx)(S,{partner:q}):(0,a.jsx)(j.Z,{height:"100px"}),(0,a.jsx)(r.XJ,{id:"address",children:"Adresgegevens"}),q?(0,a.jsx)(z,{partner:q}):(0,a.jsx)(j.Z,{height:"100px"}),(0,a.jsx)(r.XJ,{id:"contact",children:"Contactgegevens"}),(0,a.jsx)("p",{children:"Deze gegevens kun je zelf invullen of wijzigen."}),(0,a.jsxs)(r.Wi,{children:[(0,a.jsx)("p",{className:"utrecht-form-field__label",children:(0,a.jsx)(r.lX,{htmlFor:"tel",children:e("form:tel")})}),(0,a.jsx)(r.fE,{className:"utrecht-form-field__input",id:"tel",type:"tel",autoComplete:"tel",invalid:k.errors.phoneNumber&&k.isSubmitted,...L("phoneNumber",{required:!0})})]}),(0,a.jsxs)(r.Wi,{children:[(0,a.jsx)("p",{className:"utrecht-form-field__label",children:(0,a.jsx)(r.lX,{htmlFor:"email",children:e("form:email")})}),(0,a.jsxs)(r.ue,{id:"email-description",children:["We sturen je een bevestiging naar dit e-mailadres.",(0,a.jsx)("br",{}),"De mail heeft een link om nog veranderingen door te geven."]}),(0,a.jsx)(r.fE,{className:"utrecht-form-field__input",id:"email",type:"email",autoComplete:"email","aria-describedby":"email-description",invalid:k.errors.email&&k.isSubmitted,...L("email",{required:!0})})]}),(0,a.jsx)(R,{onChange:e=>{t({...n,[e.target.name]:e.target.checked})},register:L,checkboxData:O}),(0,a.jsx)(r.zx,{type:"submit",disabled:ea||!i,name:"type",appearance:"primary-action-button","aria-describedby":es,busy:ea,children:"Contactgegevens opslaan"}),!k.isValid&&(0,a.jsx)(a.Fragment,{children:k.isSubmitted?(0,a.jsx)(r.ue,{id:es,invalid:!0,"aria-live":"assertive",children:(0,a.jsx)(r.nv,{children:"Nog niet alle gegevens zijn ingevuld."})}):(0,a.jsx)(r.ue,{id:es,hidden:!0,children:(0,a.jsx)(r.nv,{children:"Vul eerst alle gegevens in."})})})]}),(0,a.jsxs)(y.xN,{children:[(0,a.jsx)(r.XJ,{children:"Meer informatie"}),(0,a.jsxs)(r.nv,{children:["Je mag in Nederland trouwen met je neef, nicht, oom of tante. Je moet dan wel komen verklaren dat je niet gedwongen wordt. Neem contact op met de gemeente: ",(0,a.jsx)(r.rU,{href:"tel:14030",children:"bel 14 030"})," of"," ",(0,a.jsx)(r.rU,{href:"https://www.utrecht.nl/contact/",children:"chat met ons"}),"."]}),(0,a.jsx)(r.nv,{children:(0,a.jsx)(r.rU,{href:"https://www.rijksoverheid.nl/onderwerpen/huwelijksdwang/huwelijksdwang-voorkomen",children:"Aanpak huwelijksdwang"})}),(0,a.jsx)(r.nv,{children:(0,a.jsx)(r.rU,{href:"https://pki.utrecht.nl/Loket/product/499c98cd12284d9c6bfe658dd0ea95cb",children:"Wat kan ik doen als mijn gegevens niet kloppen?"})})]})]})})}),(0,a.jsx)(r.WA,{children:(0,a.jsx)(_.O,{})})]})]})})}let O=[{id:"6e562ba6-0ed3-4f4d-95e2-7f35614771b2",label:"Ik verklaar dat ik nu niet met iemand anders getrouwd ben (in Nederland of in een ander land). Ik heb nu ook geen geregistreerd partnerschap.",value:"unmarried"},{id:"03aadd3e-49ad-43a6-89f9-de574d0b92df",label:"Ik verklaar dat ik niet trouw met mijn neef, nicht, oom of tante.",value:"not-marrying-relative"},{id:"f65c0e93-d550-4de2-a970-79df86269f5c",label:"De gegevens die hierboven staan kloppen en zijn compleet.",value:"correct-information-and-complete"}],R=e=>{let{checkboxData:n,register:t,onChange:i}=e;return(0,a.jsx)(r.pg,{children:n&&n.length>0&&n.map((e,n)=>{let{id:l,label:s,value:o}=e;return(0,a.jsxs)(r.Wi,{type:"checkbox",children:[(0,a.jsx)(y.Sk,{novalidate:!0,id:l,...t(o,{onChange:i,required:!0})}),(0,a.jsx)(r.lX,{htmlFor:l,type:"checkbox",children:s})]},n)})})},T=()=>[{display:"Ik verklaar dat ik niet trouw met mijn neef, nicht, oom of tante.",result:!0},{display:"Ik verklaar dat ik nu niet met iemand anders getrouwd ben (in Nederland of in een ander land). Ik heb nu ook geen geregistreerd partnerschap.",result:!0}],U=(e,n)=>{let t={};return e&&(t.emails=[{naam:e,email:e}]),n&&(t.telefoonnummers=[{naam:n,telefoonnummer:n}]),t}},6198:function(e,n,t){"use strict";t.d(n,{O:function(){return l}});var i=t(5893),a=t(7294);let r=[{theme:"utrecht-theme",content:[{title:"Telefoon",value:"14 030"},{title:"Adres",subItems:[{title:"Stadskantoor",value:"Stadsplateau 1, 3521AZ"}]}]},{theme:"leiden-theme",content:[{title:"Telefoon",value:"14 071"},{title:"Adres",subItems:[{title:"STADSKANTOOR",value:"Bargelaan 190"}]}]}],l=()=>{let[e,n]=a.useState(r.find(e=>"utrecht-theme"===e.theme));return a.useEffect(()=>{var e;n(r.find(e=>"leiden-theme"===e.theme))},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("address",{className:"utrecht-page-footer__address utrecht-page-footer__address--reset-address",children:[(0,i.jsx)("h2",{className:"utrecht-heading-2 utrecht-heading-2--reset-h2",children:"Gemeente Leiden"}),e&&(null==e?void 0:e.content.map((e,n)=>(0,i.jsxs)("section",{children:[(0,i.jsx)("h3",{className:"utrecht-heading-3 utrecht-heading-3--distanced",children:e.title}),(0,i.jsxs)("p",{className:"utrecht-paragraph utrecht-paragraph--distanced",children:["Telefoon"===e.title&&(0,i.jsx)("a",{href:"tel:+31".concat(e.value),className:"utrecht-link utrecht-link--telephone",children:e.value}),"Telefoon"!==e.title&&!e.subItems&&(0,i.jsx)("span",{children:e.value}),"Telefoon"!==e.title&&e.subItems&&e.subItems.map((e,n)=>(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("strong",{children:e.title}),(0,i.jsx)("br",{}),e.value]},n))]})]},n)))]}),(0,i.jsx)("div",{className:"utrecht-page-footer__navigation",children:(0,i.jsxs)("ul",{className:"utrecht-link-list utrecht-link-list--chevron",children:[(0,i.jsx)("li",{className:"utrecht-link-list__item",children:(0,i.jsx)("a",{href:"/contact/",className:"utrecht-link",children:"Meer contactinformatie"})}),(0,i.jsx)("li",{className:"utrecht-link-list__item",children:(0,i.jsx)("a",{href:"/over-deze-website",className:"utrecht-link",children:"Over deze website"})})]})})]})}},5428:function(e,n,t){"use strict";t.d(n,{P:function(){return r}});var i=t(5893),a=t(3511);/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */let r=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.TR,{layoutClassName:"utrecht-page-header__logo",variant:"header"}),(0,i.jsx)(a.Dm,{headingLevel:2,className:"utrecht-page-header__alternate-lang-nav"}),(0,i.jsx)(a.xF,{})]})},8981:function(e,n,t){"use strict";t.d(n,{g:function(){return c}});var i=t(1730),a=t.n(i),r=t(905),l=t.n(r),s=t(8146),o=t.n(s);let c=e=>l()(e,e=>o()(e)&&o()(e.embedded)?a()(Object.create(null),e,c(e.embedded),{embedded:void 0}):void 0)},8102:function(e,n,t){"use strict";t.d(n,{YR:function(){return l},_b:function(){return r},p0:function(){return s}});var i=t(8690);let a=window,r=()=>{i.fC.HEADERS={},null==a||a.sessionStorage.removeItem("JWT")},l=e=>{i.fC.HEADERS={Authorization:"Bearer ".concat(e)},null==a||a.sessionStorage.setItem("JWT",e)},s=()=>{let e=null==a?void 0:a.sessionStorage.getItem("JWT"),n=null==e?void 0:e.split(".");if(n&&n.length>=2){let e=JSON.parse(decodeURIComponent(escape(window.atob(n[1]))));return e.person}return""}},549:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(7294);let a=i.createContext({});function r({count:e=1,wrapper:n,className:t,containerClassName:r,containerTestId:l,circle:s=!1,style:o,...c}){var d,u,h;let p=i.useContext(a),m={...c};for(let[e,n]of Object.entries(c))void 0===n&&delete m[e];let f={...p,...m,circle:s},j={...o,...function({baseColor:e,highlightColor:n,width:t,height:i,borderRadius:a,circle:r,direction:l,duration:s,enableAnimation:o=!0}){let c={};return"rtl"===l&&(c["--animation-direction"]="reverse"),"number"==typeof s&&(c["--animation-duration"]=`${s}s`),o||(c["--pseudo-element-display"]="none"),("string"==typeof t||"number"==typeof t)&&(c.width=t),("string"==typeof i||"number"==typeof i)&&(c.height=i),("string"==typeof a||"number"==typeof a)&&(c.borderRadius=a),r&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==n&&(c["--highlight-color"]=n),c}(f)},v="react-loading-skeleton";t&&(v+=` ${t}`);let g=null!==(d=f.inline)&&void 0!==d&&d,x=[],k=Math.ceil(e);for(let n=0;n<k;n++){let t=j;if(k>e&&n===k-1){let n=null!==(u=t.width)&&void 0!==u?u:"100%",i=e%1,a="number"==typeof n?n*i:`calc(${n} * ${i})`;t={...t,width:a}}let a=i.createElement("span",{className:v,style:t,key:n},"‌");g?x.push(a):x.push(i.createElement(i.Fragment,{key:n},a,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":l,"aria-live":"polite","aria-busy":null===(h=f.enableAnimation)||void 0===h||h},n?x.map((e,t)=>i.createElement(n,{key:t},e)):x)}}},function(e){e.O(0,[4912,1664,7251,8764,7536,9595,5169,3850,9774,2888,179],function(){return e(e.s=391)}),_N_E=e.O()}]);