"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ MultistepForm1),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@utrecht/component-library-react"
var component_library_react_ = __webpack_require__(1353);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/index.ts
var components = __webpack_require__(4277);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageFooterTemplate.tsx + 1 modules
var PageFooterTemplate = __webpack_require__(6198);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageHeaderTemplate.tsx
var PageHeaderTemplate = __webpack_require__(5428);
// EXTERNAL MODULE: ./src/context/MarriageOptionsContext.tsx
var MarriageOptionsContext = __webpack_require__(2670);
// EXTERNAL MODULE: ./src/data/huwelijksplanner-state.ts
var huwelijksplanner_state = __webpack_require__(8525);
;// CONCATENATED MODULE: ./pages/voorgenomen-huwelijk/checken.tsx












const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-5",
                "form"
            ])
        }
    });
function MultistepForm1() {
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "common",
        "huwelijksplanner-step-5",
        "form"
    ]);
    const [marriageOptions] = (0,external_react_.useContext)(MarriageOptionsContext/* MarriageOptionsContext */.K);
    const data = {
        ...huwelijksplanner_state/* exampleState */.A
    };
    const { locale ="nl"  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("huwelijksplanner-step-5:title")} - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Page, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageHeader, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PageHeaderTemplate/* PageHeaderTemplate */.P, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageContent, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.PageContentMain, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    method: "POST",
                                    action: "/api/huwelijksplanner-step-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.HeadingGroup, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                                    children: t("huwelijksplanner-step-5:heading-1")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                                    lead: true,
                                                    children: [
                                                        t("common:step-n-of-m", {
                                                            n: 3,
                                                            m: 5
                                                        }),
                                                        " — Meld je voorgenomen huwelijk"
                                                    ]
                                                })
                                            ]
                                        }),
                                        marriageOptions.reservation && /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                            reservation: marriageOptions.reservation,
                                            locale: locale
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Gelukt"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: "De gemeente heeft de volgende punten gecontroleerd:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(component_library_react_.UnorderedList, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Jullie zijn beide 18 jaar of ouder"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Jullie zijn niet met iemand anders getrouwd of hebben een geregistreerd partnerschap met iemand anders"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Jullie staan niet onder curatele"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Jullie zijn geen directe familie van elkaar (ouder en kind, grootouder en kleinkind, broer en zus)"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Jullie hebben verklaard dat:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(component_library_react_.UnorderedList, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Jullie nu niet met iemand anders getrouwd zijn (in Nederland of in een ander land). Jullie hebben nu ook geen geregistreerd partnerschap."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.UnorderedListItem, {
                                                            children: "Geen neef, nicht, oom of tante van elkaar zijn."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: "Je kunt nu je reservering voor datum en tijd vastleggen door te betalen."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.ButtonGroup, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.ButtonLink, {
                                                        appearance: "primary-action-button",
                                                        href: "/voorgenomen-huwelijk/betalen",
                                                        children: "Ga betalen"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageFooter, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PageFooterTemplate/* PageFooterTemplate */.O, {})
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fvoorgenomen-huwelijk%2Fchecken&absolutePagePath=private-next-pages%2Fvoorgenomen-huwelijk%2Fchecken.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 5940:
/***/ ((module) => {

module.exports = require("@gemeente-denhaag/process-steps");

/***/ }),

/***/ 1353:
/***/ ((module) => {

module.exports = require("@utrecht/component-library-react");

/***/ }),

/***/ 6694:
/***/ ((module) => {

module.exports = require("@utrecht/web-component-library-stencil/loader");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,670,277,707], () => (__webpack_exec__(1753)));
module.exports = __webpack_exports__;

})();