"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 6718:
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
;// CONCATENATED MODULE: ./pages/email-reservation-success.tsx





const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "huwelijksplanner-step-0",
                "common"
            ])
        }
    });
function HuwelijksplannerStep0() {
    const { t  } = (0,external_next_i18next_.useTranslation)("huwelijksplanner-step-0");
    return /*#__PURE__*/ jsx_runtime.jsx(components.Email, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `Melding Voorgenomen Huwelijk - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components.Page, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(components.PageContent, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.PageContentMain, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                    children: "Melding Voorgenomen Huwelijk"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                    children: [
                                        "Beste ",
                                        /*#__PURE__*/ jsx_runtime.jsx("bdi", {
                                            translate: "no",
                                            children: "Anne"
                                        }),
                                        " en ",
                                        /*#__PURE__*/ jsx_runtime.jsx("bdi", {
                                            translate: "no",
                                            children: "Sanne"
                                        }),
                                        ","
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: "De reservering is geslaagd. We hebben de melding van jullie voorgenomen huwelijk ontvangen."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                    children: [
                                        "Jullie gaan trouwen op ",
                                        /*#__PURE__*/ jsx_runtime.jsx("time", {
                                            dateTime: "2021-04-14T10:00+01:00",
                                            children: "14 april 2021 om 10.00 uur"
                                        }),
                                        ", op de vierde verdieping van het Stadskantoor. De ceremonie is een eenvoudig huwelijk."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                    children: [
                                        "Tot 24 maart kunnen jullie getuigen wijzigen of meer getuigen uitnodigen. Op",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("time", {
                                            dateTime: "2021-03-24",
                                            children: "24 maart"
                                        }),
                                        " moeten de getuigen bij de gemeente bekend zijn. De getuigen moet zelf inloggen met hun DigiD."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                    children: [
                                        "V\xf3\xf3r ",
                                        /*#__PURE__*/ jsx_runtime.jsx("time", {
                                            dateTime: "2021-03-31",
                                            children: "31 maart"
                                        }),
                                        " kunnen jullie nog besluiten of jullie een trouwboekje willen. Je kunt dat regelen door in te loggen met je DigiD. Daarna reken je weer af met iDEAL."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: "Willen jullie iets aanpassen aan de reservering, of gewoon kijken of alles goed is? Dat kan door in te loggen met je DigiD:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.ButtonGroup, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.ButtonLink, {
                                        href: "/",
                                        appearance: "primary-action-button",
                                        children: "Reservering aanpassen"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: "Of kopieer het adres hieronder en open het in je browser:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.URLValue, {
                                        children: "https://utrecht.nl/reservering"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: "Met vriendelijke groet,"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Address, {
                                    translate: "no",
                                    children: [
                                        "Gemeente Leiden",
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                        "Publiekszaken",
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                        "Burgerzaken",
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                        "Stadsplateau 1, 3521 AZ Utrecht"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(components.Logo, {})
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Femail-reservation-success&absolutePagePath=private-next-pages%2Femail-reservation-success.tsx&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277], () => (__webpack_exec__(6718)));
module.exports = __webpack_exports__;

})();