(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8690],{4577:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gateway-login",function(){return s(8823)}])},8823:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=s(4912),i=s(1163),o=s(7294),a=s(7536),l=s(8690),u=s(9413),d=s(8102);t.default=()=>{let[e,t]=(0,o.useState)(!1),[s,c]=(0,o.useState)(!1),{push:m,query:p}=(0,i.useRouter)(),{redirectUrl:f,assentId:h}=p,{register:_,handleSubmit:w}=(0,a.cI)();return(0,n.jsx)("div",{className:"example-login",children:(0,n.jsxs)("form",{onSubmit:w(e=>{c(!1),t(!0),(0,d._b)(),(0,u.W)(l.fC,{method:"POST",url:"/users/login",body:e,mediaType:"application/json"}).then(e=>{(0,d.YR)(e.jwtToken),h?m("".concat(f,"&assentId=").concat(h)):m(f),t(!1)}).catch(()=>c(!0))}),children:[(0,n.jsxs)(r.Wi,{children:[(0,n.jsx)("p",{className:"utrecht-form-field__label",children:(0,n.jsx)(r.lX,{htmlFor:"username",children:"Email"})}),(0,n.jsx)(r.fE,{disabled:e,className:"utrecht-form-field__input",id:"username",type:"email",autoComplete:"email",..._("username",{required:!0})})]}),(0,n.jsxs)(r.Wi,{children:[(0,n.jsx)("p",{className:"utrecht-form-field__label",children:(0,n.jsx)(r.lX,{htmlFor:"password",children:"Password"})}),(0,n.jsx)(r.fE,{disabled:e,className:"utrecht-form-field__input",id:"password",type:"password",autoComplete:"password",..._("password",{required:!0})})]}),(0,n.jsx)(r.zx,{disabled:e,type:"submit",children:e?"Loading...":"Submit"}),s&&(0,n.jsx)("span",{className:"example-error",children:"Something went wrong."})]})})}},8102:function(e,t,s){"use strict";s.d(t,{YR:function(){return o},_b:function(){return i},p0:function(){return a}});var n=s(8690);let r=window,i=()=>{n.fC.HEADERS={},null==r||r.sessionStorage.removeItem("JWT")},o=e=>{n.fC.HEADERS={Authorization:"Bearer ".concat(e)},null==r||r.sessionStorage.setItem("JWT",e)},a=()=>{let e=null==r?void 0:r.sessionStorage.getItem("JWT"),t=null==e?void 0:e.split(".");if(t&&t.length>=2){let e=JSON.parse(decodeURIComponent(escape(window.atob(t[1]))));return e.person}return""}}},function(e){e.O(0,[4912,8764,7536,3850,9774,2888,179],function(){return e(e.s=4577)}),_N_E=e.O()}]);