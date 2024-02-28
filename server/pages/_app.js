(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/@utrecht/design-tokens/dist/index.css
var dist = __webpack_require__(2439);
// EXTERNAL MODULE: ./node_modules/@utrecht/component-library-css/dist/index.css
var component_library_css_dist = __webpack_require__(3537);
// EXTERNAL MODULE: ./node_modules/@utrecht/component-library-css/dist/html.css
var html = __webpack_require__(7077);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./pages/index.css
var pages = __webpack_require__(1713);
// EXTERNAL MODULE: ./src/context/MarriageOptionsContext.tsx
var MarriageOptionsContext = __webpack_require__(2670);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/matomo.ts

// Documentation for Next.js Router:
// https://nextjs.org/docs/api-reference/next/router
const matomo = ({ url , siteId  })=>{
    const _paq = window["_paq"] = window["_paq"] || [];
    let currentPath = location.pathname;
    const rpc = (...args)=>{
        _paq.push([
            ...args
        ]);
    };
    rpc("setTrackerUrl", `${url}matomo.php`);
    rpc("setSiteId", String(siteId));
    rpc("trackPageView");
    rpc("enableLinkTracking");
    const script = document.createElement("script"), head = document.getElementsByTagName("head")[0];
    script.async = true;
    script.src = `${url}matomo.js`;
    head.insertBefore(script, head.firstChild);
    router_default().events.on("routeChangeError", (err)=>{
        if (!err.cancelled) {
            rpc("setDocumentTitle", document.title);
            rpc("trackPageView");
        }
    });
    router_default().events.on("routeChangeStart", (path)=>{
        const pathname = path.replace(/\?.+/, "");
        if (currentPath) {
            rpc("setReferrerUrl", `${currentPath}`);
        }
        currentPath = pathname;
        rpc("setCustomUrl", pathname);
        rpc("deleteCustomVariables", "page");
    });
    router_default().events.on("routeChangeComplete", ()=>{
        // Wait until rendering of new <title> is complete
        setTimeout(()=>{
            rpc("setDocumentTitle", document.title);
            rpc("trackPageView");
        }, 0);
    });
};
/* harmony default export */ const src_matomo = ((/* unused pure expression or super */ null && (matomo)));

;// CONCATENATED MODULE: ./pages/_app.tsx











const MyApp = ({ Component , pageProps  })=>{
    (0,external_react_.useEffect)(()=>{
        if (true) {
            matomo({
                url: "https://stats.utrecht.nl/analytics/",
                siteId: "5"
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: external_clsx_default()("example-debugging-disabled", "leiden-theme"),
        children: /*#__PURE__*/ jsx_runtime.jsx(MarriageOptionsContext/* MarriageOptionsProvider */.F, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 7077:
/***/ (() => {



/***/ }),

/***/ 3537:
/***/ (() => {



/***/ }),

/***/ 2439:
/***/ (() => {



/***/ }),

/***/ 1713:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,525,670], () => (__webpack_exec__(7958)));
module.exports = __webpack_exports__;

})();