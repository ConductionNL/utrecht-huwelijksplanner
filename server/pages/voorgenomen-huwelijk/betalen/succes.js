"use strict";
(() => {
var exports = {};
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 4640:
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
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(7727);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
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
// EXTERNAL MODULE: ./src/generated/index.ts + 84 modules
var generated = __webpack_require__(8690);
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
    const [get, setGet] = (0,external_react_.useState)(0);
    const [partnerData, setPartnerData] = (0,external_react_.useState)({});
    const [witnessData, setWitnessData] = (0,external_react_.useState)({});
    const { push , locale ="nl"  } = (0,router_.useRouter)();
    const [marriageOptions] = (0,external_react_.useContext)(MarriageOptionsContext/* MarriageOptionsContext */.K);
    (0,external_react_.useEffect)(()=>{
        if (marriageOptions.id) {
            generated/* HuwelijkService.huwelijkGet */._H.huwelijkGet({
                id: marriageOptions.id
            }).then((response)=>{
                const partnerString = response.results.find((result)=>result.eigenschap === "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3");
                const partners = JSON.parse(partnerString.waarde);
                setPartnerData(partners);
                const witnessString = response.results.find((result)=>result.eigenschap === "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/7e950e1d-04ab-482e-a066-299711d4b4ed");
                const witnesses = JSON.parse(witnessString.waarde);
                setWitnessData(witnesses);
            });
        }
    }, [
        marriageOptions.id
    ]);
    const getLocation = (location)=>{
        switch(location){
            case "e1b2aa89-dcd8-4b77-96fc-d41501cbc57f":
                return `Stadskantoor ${process.env.NEXT_PUBLIC_ORGANISATION_NAME_SHORT ?? "Utrecht"}`;
            default:
                return `Stadskantoor ${process.env.NEXT_PUBLIC_ORGANISATION_NAME_SHORT ?? "Utrecht"}`;
        }
    };
    const isValidMinWitnesses = (data)=>{
        // Return `true` for valid when every partner has reached the minimum amount of witnesses
        return data.length >= 1 * 2;
    };
    function parseISOString(s) {
        const b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    }
    const MarriageProcessSteps = ({ data  })=>/*#__PURE__*/ jsx_runtime.jsx(components.ProcessSteps, {
            steps: [
                {
                    id: "cc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    marker: 1,
                    status: isValidMinWitnesses(witnessData) ? "checked" : undefined,
                    title: "Getuigen wijzigen of meer getuigen uitnodigen",
                    meta: data.canInviteWitnesses ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                            children: [
                                "tussen vandaag en",
                                " ",
                                marriageOptions.reservation?.["ceremony-start"] !== undefined ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                    dateTime: (0,external_date_fns_.addWeeks)(parseISOString(marriageOptions.reservation?.["ceremony-start"]), -2).toISOString(),
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
                            status: isValidMinWitnesses(witnessData) ? "checked" : undefined,
                            title: `tussen vandaag en ${marriageOptions.reservation?.["ceremony-start"] !== undefined ? new Intl.DateTimeFormat(locale, {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }).format(new Date((0,external_date_fns_.addWeeks)(parseISOString(marriageOptions.reservation?.["ceremony-start"] ?? ""), -2))) : ""}`
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
                    date: marriageOptions.reservation ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                        dateTime: marriageOptions.reservation["ceremony-start"],
                        locale: locale
                    }) : "",
                    meta: marriageOptions.reservation && marriageOptions.reservation["ceremony-location"] === "e1b2aa89-dcd8-4b77-96fc-d41501cbc57f" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                        children: [
                            "Jullie gaan trouwen op de vierde verdieping van het",
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Link, {
                                href: "#",
                                children: [
                                    "Stadskantoor ",
                                    process.env.NEXT_PUBLIC_ORGANISATION_NAME_SHORT ?? "Utrecht"
                                ]
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
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListValue, {
                            children: [
                                partner.naam.voornamen,
                                " ",
                                partner.naam.voorvoegsel,
                                " ",
                                partner.naam.geslachtsnaam
                            ]
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
                                children: partner.contact.telefoonnummers[0].telefoonnummer
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
                                children: partner.contact.emails[0].email
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
                                children: witness.contact.emails[0].email
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
                            children: getLocation(reservation["ceremony-location"])
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
                        children: `Succes - ${"Gemeente Leiden"}`
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
                                    marriageOptions.reservation ? /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                        reservation: marriageOptions.reservation,
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
                                                data: marriageOptions,
                                                reservation: marriageOptions.reservation ?? data.reservation,
                                                locale: locale
                                            }) : "",
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                        children: "Partners"
                                                    }),
                                                    !external_lodash_default().isEmpty(partnerData) && partnerData?.map((partner, index)=>/*#__PURE__*/ jsx_runtime.jsx(PartnerDataList, {
                                                            partner: partner
                                                        }, index))
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                        children: "Getuigen"
                                                    }),
                                                    !external_lodash_default().isEmpty(witnessData) && witnessData.map((witness, index)=>/*#__PURE__*/ jsx_runtime.jsx(WitnessDataList, {
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

/***/ 7727:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,670,277,707,850], () => (__webpack_exec__(4640)));
module.exports = __webpack_exports__;

})();