"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ HuwelijksplannerStep0),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/index.ts
var components = __webpack_require__(4277);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageFooterTemplate.tsx + 1 modules
var PageFooterTemplate = __webpack_require__(6198);
// EXTERNAL MODULE: ./src/components/huwelijksplanner/PageHeaderTemplate.tsx
var PageHeaderTemplate = __webpack_require__(5428);
;// CONCATENATED MODULE: ./pages/index.tsx







const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-0"
            ])
        }
    });
function HuwelijksplannerStep0() {
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "common",
        "huwelijksplanner-step-0"
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("huwelijksplanner-step-0:title")} - ${"Gemeente Leiden"}`
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
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageContent, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.PageContentMain, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                            children: t("huwelijksplanner-step-0:heading-1")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                            lead: true,
                                            children: "Plan een datum en tijd. En doe een offici\xeble melding bij de gemeente."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Strong, {
                                                    children: "Let op:"
                                                }),
                                                " hou je DigiD bij de hand."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Welke stappen kun je verwachten?"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.UnorderedList, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Kies tussen trouwen en geregistreerd partnerschap"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Kies een datum en tijd voor de bijeenkomst"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Log in met je DigiD"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Je partner logt ook in met DigID"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Nodig getuigen uit"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Betaal met iDEAL"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                            children: "Je datum is geregeld!"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.ButtonLink, {
                                                        appearance: "primary-action-button",
                                                        href: "/trouw-opties",
                                                        children: [
                                                            "Start",
                                                            /*#__PURE__*/ jsx_runtime.jsx(components.UtrechtIconArrow, {})
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.SpotlightSection, {
                                            aside: true,
                                            type: "info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Meer informatie"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                        href: "https://www.uabc.nl/?osc=uabc",
                                                        external: true,
                                                        children: "Vindt u DigiD ingewikkeld? Bekijk dan deze uitleg over DigiD."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                        href: "https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/vraag-en-antwoord/wat-is-het-verschil-tussen-een-huwelijk-geregistreerd-partnerschap-en-samenlevingscontract",
                                                        external: true,
                                                        children: "Wat zijn de verschillen tussen een huwelijk, geregistreerd partnerschap en een samenlevingscontract?"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                                        href: "https://example.com/#TODO",
                                                        external: true,
                                                        children: "Wat is een spoedhuwelijk en hoe kun je dat regelen?"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageFooter, {
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "todo-page-footer__content",
                                children: /*#__PURE__*/ jsx_runtime.jsx(PageFooterTemplate/* PageFooterTemplate */.O, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,707], () => (__webpack_exec__(1599)));
module.exports = __webpack_exports__;

})();