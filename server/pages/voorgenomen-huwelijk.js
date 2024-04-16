"use strict";
(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 8679:
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
// EXTERNAL MODULE: ./node_modules/@utrecht/web-component-library-react/dist/index.cjs.js
var index_cjs = __webpack_require__(4146);
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
;// CONCATENATED MODULE: ./pages/voorgenomen-huwelijk/index.tsx












const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-3"
            ])
        }
    });
function MultistepForm1() {
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "common",
        "huwelijksplanner-step-3"
    ]);
    const { push , locale ="nl"  } = (0,router_.useRouter)();
    const [marriageOptions] = (0,external_react_.useContext)(MarriageOptionsContext/* MarriageOptionsContext */.K);
    // FIXME: get slug from state
    const slug = "huwelijk";
    const productName = "Eenvoudig trouwen";
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("common:step-n", {
                            n: 3
                        })}: ${t("huwelijksplanner-step-3:eenvoudig-trouwen")} - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components.SkipLink, {
                    href: "#main",
                    children: t("common:skip-link-main")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Page, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageHeader, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PageHeaderTemplate/* PageHeaderTemplate */.P, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.PageContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(components.BackLink, {
                                    href: `/trouw-opties/${slug}`,
                                    children: "← Terug"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.PageContentMain, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.HeadingGroup, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                                    children: productName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                                    lead: true,
                                                    children: [
                                                        t("common:step-n-of-m", {
                                                            n: 3,
                                                            m: 5
                                                        }),
                                                        " — ",
                                                        t("huwelijksplanner-step-3:title")
                                                    ]
                                                })
                                            ]
                                        }),
                                        marriageOptions?.reservation && /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                            reservation: marriageOptions.reservation,
                                            locale: locale
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Meld je voorgenomen huwelijk"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: "Je logt hier in met DigiD. Zo geef je door aan de gemeente dat je wil gaan trouwen."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: "Na deze stap vragen we ook aan je partner om in te loggen met DigiD."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.ButtonGroup, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(index_cjs/* UtrechtDigidButton */.JoR, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.ButtonLink, {
                                                                appearance: "primary-action-button",
                                                                href: "/login",
                                                                children: [
                                                                    "Inloggen met DigiD ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx(index_cjs/* UtrechtIconArrow */.tf5, {})
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(component_library_react_.Button, {
                                                            onClick: ()=>push("/gateway-login?redirectUrl=/persoonsgegevens/persoon"),
                                                            children: "Testomgeving login"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Aside, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Meer informatie"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                        href: "https://digid.nl/aanvragen",
                                                        external: true,
                                                        target: "_blank",
                                                        children: "DigiD aanvragen"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fvoorgenomen-huwelijk&absolutePagePath=private-next-pages%2Fvoorgenomen-huwelijk%2Findex.tsx&preferredRegion=!

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,525,707,670], () => (__webpack_exec__(8679)));
module.exports = __webpack_exports__;

})();