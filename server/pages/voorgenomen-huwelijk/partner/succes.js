"use strict";
(() => {
var exports = {};
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 8599:
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
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
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
// EXTERNAL MODULE: ./src/data/huwelijksplanner-state.ts
var huwelijksplanner_state = __webpack_require__(8525);
;// CONCATENATED MODULE: ./pages/voorgenomen-huwelijk/partner/succes.tsx









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
    const data = {
        ...huwelijksplanner_state/* exampleState */.A
    };
    const { locale ="nl"  } = (0,router_.useRouter)();
    const onPartnerInvitationSubmit = (event)=>{
        event.preventDefault();
    };
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("huwelijksplanner-step-5:title")} - ${t("common:website-name")}`
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
                                    onSubmit: onPartnerInvitationSubmit,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.HeadingGroup, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                                    children: t("huwelijksplanner-step-5:heading-1")
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    lead: true,
                                                    children: "Stap 3 — Meld je voorgenomen huwelijk"
                                                })
                                            ]
                                        }),
                                        data["reservation"] ? /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                            reservation: data["reservation"],
                                            locale: locale || "en"
                                        }) : "",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.SpotlightSection, {
                                            type: "info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Heading2, {
                                                    children: [
                                                        "We wachten op ",
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataNoTranslate, {
                                                            children: data.partnerInvitation?.["name"]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                                    children: [
                                                        "We bewaren deze reservering 2 uur. Als",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataNoTranslate, {
                                                            children: data.partnerInvitation?.["name"]
                                                        }),
                                                        " niet voor die tijd heeft ingelogd, vervalt de reservering van deze datum en tijd."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: "Let op: u krijgt een e-mail als uw partner is ingelogd, dan kunt u doorgaan met uw huwelijksaanvraag."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.ButtonGroup, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.ButtonLink, {
                                                    appearance: "primary-action-button",
                                                    href: "/voorgenomen-huwelijk/partner/aanvrager-email",
                                                    children: "Bekijk e-mail voor aanvrager"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.ButtonLink, {
                                                    appearance: "primary-action-button",
                                                    href: "/voorgenomen-huwelijk/partner/invitation-email-partner",
                                                    children: "Bekijk e-mail voor partner"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(components.PartnerInvitation, {
                                            title: "Verstuur uitnodiging opnieuw",
                                            body: "Komt de uitnodiging niet aan? Controleer of je een foutje hebt gemaakt in het e-mailadres en verstuur de uitnodiging opnieuw.",
                                            partnerName: {
                                                value: (data.partnerInvitation && data.partnerInvitation["name"]) ?? "",
                                                label: t("form:name")
                                            },
                                            partnerEmail: {
                                                value: (data.partnerInvitation && data.partnerInvitation["email"]) ?? "",
                                                label: t("form:email")
                                            }
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fvoorgenomen-huwelijk%2Fpartner%2Fsucces&absolutePagePath=private-next-pages%2Fvoorgenomen-huwelijk%2Fpartner%2Fsucces.tsx&preferredRegion=!

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,525,707], () => (__webpack_exec__(8599)));
module.exports = __webpack_exports__;

})();