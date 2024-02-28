"use strict";
(() => {
var exports = {};
exports.id = 464;
exports.ids = [464,981];
exports.modules = {

/***/ 6507:
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
// EXTERNAL MODULE: ./node_modules/@utrecht/web-component-library-react/dist/index.cjs.js
var index_cjs = __webpack_require__(4146);
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
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
// EXTERNAL MODULE: ./src/data/huwelijksplanner-state.ts
var huwelijksplanner_state = __webpack_require__(8525);
// EXTERNAL MODULE: ./src/embedded.ts
var embedded = __webpack_require__(8981);
// EXTERNAL MODULE: ./src/generated/index.ts + 84 modules
var generated = __webpack_require__(8690);
;// CONCATENATED MODULE: ./src/openapi/test-env.ts


const MissingIdError = ()=>new TypeError("Argument must have `id` property");
const putAssent = (data)=>data.id ? generated/* AssentService.assentPutItem */.J1.assentPutItem({
        id: data.id,
        requestBody: data
    }) : Promise.reject(MissingIdError());
const HuwelijksplannerAPI = {
    getProducten: ()=>generated/* SdgproductService.sdgproductGetCollection */.ZD.sdgproductGetCollection({
            upnLabel: ""
        }).then((data)=>(0,embedded/* resolveEmbedded */.g)(data.results || [])),
    getAccommodations: ()=>generated/* AccommodationService.accommodationGetCollection */.fz.accommodationGetCollection({
            name: ""
        }).then((data)=>(0,embedded/* resolveEmbedded */.g)(data.results || [])),
    getAssents: ()=>generated/* AssentService.assentGetCollection */.J1.assentGetCollection({
            requester: "",
            name: ""
        }).then((data)=>(0,embedded/* resolveEmbedded */.g)(data.results || [])),
    deleteAssent: (data)=>data.id ? generated/* AssentService.assentDeleteItem */.J1.assentDeleteItem({
            id: data.id
        }) : Promise.reject(MissingIdError()),
    putAssent,
    declineAssent: (assent)=>putAssent({
            ...assent,
            status: generated/* Assent.status.DECLINED */.gN.status.DECLINED
        }),
    grantAssent: (assent)=>putAssent({
            ...assent,
            status: generated/* Assent.status.GRANTED */.gN.status.GRANTED
        }),
    getHuwelijk: (id)=>generated/* HuwelijkService.huwelijkGetItem */._H.huwelijkGetItem({
            id
        }).then((data)=>(0,embedded/* resolveEmbedded */.g)(data)),
    getHuwelijken: ()=>generated/* HuwelijkService.huwelijkGetCollection */._H.huwelijkGetCollection({}).then((data)=>(0,embedded/* resolveEmbedded */.g)(data.results || [])),
    deleteHuwelijk: (huwelijk)=>generated/* HuwelijkService.huwelijkDeleteItem */._H.huwelijkDeleteItem({
            id: huwelijk.id || ""
        }),
    getKlanten: ()=>generated/* KlantService.klantGetCollection */.xQ.klantGetCollection({}).then((data)=>(0,embedded/* resolveEmbedded */.g)(data.results)),
    getKlant: (uuid)=>generated/* KlantService.klantGetItem */.xQ.klantGetItem({
            id: uuid
        }),
    getAvailability: ()=>generated/* AvailabilityService.availabilityGetCollection */.N2.availabilityGetCollection({}).then((data)=>data.results || [])
};

;// CONCATENATED MODULE: ./src/openapi/index.ts
// export * from './mock-api';


;// CONCATENATED MODULE: ./pages/voorgenomen-huwelijk/betalen/succes.tsx













const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "huwelijksplanner-step-0",
                "huwelijksplanner",
                "form",
                "common"
            ])
        }
    });
function HuwelijksplannerStep0() {
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "huwelijksplanner-step-0",
        "huwelijksplanner",
        "form",
        "common"
    ]);
    const [data, setData] = (0,external_react_.useState)({
        ...huwelijksplanner_state/* exampleState */.A
    });
    const { locale ="nl"  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const huwelijkId = "6e69d32c-afdb-4aef-85cc-fd5ff743a84b";
        HuwelijksplannerAPI.getHuwelijk(huwelijkId).then((huwelijk)=>{
            setData(external_lodash_merge_default()(data, {
                "ceremony-start": huwelijk.moment,
                reservation: {
                    "ceremony-start": huwelijk.moment
                }
            }));
        });
    }, [
        data
    ]);
    const isValidMinWitnesses = (data)=>{
        // Return `true` for valid when every partner has reached the minimum amount of witnesses
        return data.witnesses.length >= data.minWitnessPerPartner * 2;
    };
    const MarriageProcessSteps = ({ data  })=>/*#__PURE__*/ jsx_runtime.jsx(components.ProcessSteps, {
            steps: [
                {
                    id: "cc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    marker: 1,
                    status: isValidMinWitnesses(data) ? "checked" : undefined,
                    title: "Getuigen wijzigen of meer getuigen uitnodigen",
                    meta: data.canInviteWitnesses ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                            children: [
                                "tussen vandaag en",
                                " ",
                                data["inviteWitnessEndDate"] ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                    dateTime: data["inviteWitnessEndDate"],
                                    locale: locale
                                }) : "",
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx(index_cjs/* UtrechtBadgeStatus */.fY6, {
                                    status: "neutral",
                                    children: "niet verplicht"
                                })
                            ]
                        })
                    }) : "",
                    steps: [
                        {
                            id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                            status: isValidMinWitnesses(data) ? "checked" : undefined,
                            title: `tussen vandaag en ${data["inviteWitnessEndDate"]}`
                        }
                    ]
                },
                {
                    id: "12ca94b2-7179-4ae8-9032-dad49c294ff2",
                    marker: 2,
                    title: "Getuigen zijn definitief en bevestigingen van getuigen ontvangen"
                },
                {
                    id: "e51f2b4c-d62f-4347-8dc1-c83a9be0afc2",
                    marker: 3,
                    title: "Eventuele extra’s bestellen"
                },
                {
                    id: "1fc162c6-f1ab-4d1b-9007-d891cbd5614b",
                    title: "Trouwdag",
                    marker: 4,
                    date: data.reservation ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                        dateTime: data.reservation["ceremony-start"],
                        locale: locale
                    }) : "",
                    meta: data.reservation && data.reservation["ceremony-location"] === "Locatie Stadskantoor" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                        children: [
                            "Jullie gaan trouwen op de vierde verdieping van het",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "https://www.utrecht.nl/contact/stadskantoor",
                                children: "Stadskantoor Utrecht"
                            }),
                            "."
                        ]
                    }) : ""
                }
            ]
        });
    const PartnerDataList = ({ partner  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--grid",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:name")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: partner.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:tel")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.NumberValue, {
                                children: partner.tel
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "/huwelijksplanner-edit#tel",
                                title: t("form:data-list-actions-edit-subject", {
                                    subject: t("form:tel")
                                }),
                                children: t("form:data-list-actions-edit")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:email")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.URLValue, {
                                children: partner.email
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "/huwelijksplanner-edit#email",
                                title: t("form:data-list-actions-edit-subject", {
                                    subject: t("form:email")
                                }),
                                children: t("form:data-list-actions-edit")
                            })
                        })
                    ]
                })
            ]
        });
    const WitnessDataList = ({ witness  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--grid",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:name")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: witness.name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "/huwelijksplanner-witness-edit#name",
                                title: t("form:data-list-actions-edit-subject", {
                                    subject: t("form:name")
                                }),
                                children: t("form:data-list-actions-edit")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:email")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.URLValue, {
                                children: witness.email
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "/huwelijksplanner-witness-edit#email",
                                title: t("form:data-list-actions-edit-subject", {
                                    subject: t("form:email")
                                }),
                                children: t("form:data-list-actions-edit")
                            })
                        })
                    ]
                })
            ]
        });
    const CeremonyDataList = ({ data , reservation  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--grid",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("huwelijksplanner:ceremony-type")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: reservation["ceremony-type"]
                        }),
                        data.cancelable ? /*#__PURE__*/ jsx_runtime.jsx(components.DataListActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.Link, {
                                href: "/huwelijksplanner-cancel",
                                children: t("huwelijksplanner:cancel-ceremony-link", {
                                    context: "eenvoudig-huwelijk"
                                })
                            })
                        }) : ""
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("huwelijksplanner:ceremony-date")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                dateTime: reservation["ceremony-start"],
                                locale: locale
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("huwelijksplanner:ceremony-time")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListValue, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(components.TimeValue, {
                                    dateTime: reservation["ceremony-start"],
                                    locale: locale
                                }),
                                " – ",
                                /*#__PURE__*/ jsx_runtime.jsx(components.TimeValue, {
                                    dateTime: reservation["ceremony-end"],
                                    locale: locale
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("huwelijksplanner:ceremony-location")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: reservation["ceremony-location"]
                        })
                    ]
                })
            ]
        });
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("huwelijksplanner-payment-success:title")} - ${t("common:website-name")}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Page, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageHeader, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PageHeaderTemplate/* PageHeaderTemplate */.P, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.PageContent, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.PageContentMain, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                        children: "Melding Voorgenomen Huwelijk"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                        children: "Stap 5 van 5 – Je huwelijksdatum is geregeld"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Alert, {
                                        type: "ok",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.HeadingGroup, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Betaling ontvangen"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.PreHeading, {
                                                    children: "Gelukt"
                                                })
                                            ]
                                        })
                                    }),
                                    data["reservation"] ? /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                        reservation: data["reservation"],
                                        locale: locale
                                    }) : "",
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                        children: "Jullie reservering is geslaagd en we hebben de melding van het voorgenomen huwelijk ontvangen."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                        children: "Je krijgt van ons een e-mail met daarin een link naar deze pagina. Zo kunnen jullie de gegevens later wijzigen of aanvullen."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                children: "Nog te doen"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(MarriageProcessSteps, {
                                                data: data,
                                                locale: locale
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                children: "Dit hebben jullie doorgegeven"
                                            }),
                                            data.reservation ? /*#__PURE__*/ jsx_runtime.jsx(CeremonyDataList, {
                                                data: data,
                                                reservation: data.reservation,
                                                locale: locale
                                            }) : "",
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                        children: "Partners"
                                                    }),
                                                    data.partners.map((partner, index)=>/*#__PURE__*/ jsx_runtime.jsx(PartnerDataList, {
                                                            partner: partner
                                                        }, index))
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                        children: "Getuigen"
                                                    }),
                                                    data.witnesses.map((witness, index)=>/*#__PURE__*/ jsx_runtime.jsx(WitnessDataList, {
                                                            locale: locale,
                                                            witness: witness
                                                        }, index))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Aside, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                children: "Deze pagina is automatisch bewaard"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                children: "We hebben een e-mail naar jullie gestuurd met daarin een link naar deze pagina. Je kunt veilig de pagina verlaten."
                                            })
                                        ]
                                    })
                                ]
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fvoorgenomen-huwelijk%2Fbetalen%2Fsucces&absolutePagePath=private-next-pages%2Fvoorgenomen-huwelijk%2Fbetalen%2Fsucces.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ resolveEmbedded)
/* harmony export */ });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2945);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_clonedeepwith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6127);
/* harmony import */ var lodash_clonedeepwith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeepwith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1056);
/* harmony import */ var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isplainobject__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Utility to resolve references that the Conduction APIs use to refer to embedded
 * data from related objects into one object.
 *
 * {
 *   "items": ["/api/item-1"],
 *   "embedded": {
 *     "items": [
 *       { "id": 1, "value": "Hello, world!" }
 *     ]
 *   }
 * }
 *
 * Becomes:
 *
 * {
 *   "items": [{ "id": 1, "value": "Hello, world!" }],
 *   "embedded": undefined
 * }
 */ const resolveEmbedded = (data)=>lodash_clonedeepwith__WEBPACK_IMPORTED_MODULE_1___default()(data, (value)=>{
        return lodash_isplainobject__WEBPACK_IMPORTED_MODULE_2___default()(value) && lodash_isplainobject__WEBPACK_IMPORTED_MODULE_2___default()(value["embedded"]) ? lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object.create(null), value, resolveEmbedded(value["embedded"]), {
            embedded: undefined
        }) : undefined;
    });


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

/***/ 2945:
/***/ ((module) => {

module.exports = require("lodash.assign");

/***/ }),

/***/ 6127:
/***/ ((module) => {

module.exports = require("lodash.clonedeepwith");

/***/ }),

/***/ 1056:
/***/ ((module) => {

module.exports = require("lodash.isplainobject");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,525,707,850], () => (__webpack_exec__(6507)));
module.exports = __webpack_exports__;

})();