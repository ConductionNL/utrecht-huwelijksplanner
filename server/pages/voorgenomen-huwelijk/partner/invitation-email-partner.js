"use strict";
(() => {
var exports = {};
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 2720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ApplicantEmail),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@utrecht/web-component-library-react/dist/index.cjs.js
var index_cjs = __webpack_require__(4146);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/index.ts
var components = __webpack_require__(4277);
// EXTERNAL MODULE: ./src/data/huwelijksplanner-state.ts
var huwelijksplanner_state = __webpack_require__(8525);
;// CONCATENATED MODULE: ./pages/voorgenomen-huwelijk/partner/invitation-email-partner.tsx
// import { ButtonLink, Heading1 } from "@utrecht/component-library-react";
// import { UtrechtDigidButton, UtrechtIconArrow } from "@utrecht/web-component-library-react";
// import { NextPage } from "next";
// import Link from "next/link";
// // This is a temporarily page to show the email
// const InvitationEmailPartner: NextPage = () => {
//   return (
//     <div>
//       <Heading1>Eenvoudig trouwen</Heading1>
//       <Link passHref href="/login">
//         <UtrechtDigidButton>
//           <ButtonLink appearance="primary-action-button">
//             Inloggen met DigiD <UtrechtIconArrow />
//           </ButtonLink>
//         </UtrechtDigidButton>
//       </Link>
//     </div>
//   );
// };
// export default InvitationEmailPartner;







const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "huwelijksplanner-step-0",
                "common"
            ])
        }
    });
function ApplicantEmail() {
    const { t  } = (0,external_next_i18next_.useTranslation)("huwelijksplanner-step-0");
    const partner = huwelijksplanner_state/* exampleState.partners.1 */.A.partners[1];
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
                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataNoTranslate, {
                                            children: partner["given-name"]
                                        }),
                                        ","
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                    children: "Uw partner heeft u uitgenodigd om te loggen met DigiD. Zo bevestigt u met uw partner dat jullie het huwelijk willen regelen."
                                }),
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fvoorgenomen-huwelijk%2Fpartner%2Finvitation-email-partner&absolutePagePath=private-next-pages%2Fvoorgenomen-huwelijk%2Fpartner%2Finvitation-email-partner.tsx&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,525], () => (__webpack_exec__(2720)));
module.exports = __webpack_exports__;

})();