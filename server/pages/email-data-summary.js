"use strict";
(() => {
var exports = {};
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 1300:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/index.ts
var components = __webpack_require__(4277);
// EXTERNAL MODULE: ./src/data/huwelijksplanner-state.ts
var huwelijksplanner_state = __webpack_require__(8525);
;// CONCATENATED MODULE: ./pages/email-data-summary.tsx







const formatAddress = (partner)=>[
        `${partner.street || ""} ${partner["house-number"] || ""}${partner["house-number-letter"] || ""}${partner["house-number-suffix"] || ""}`,
        `${partner["postal-code"] || ""} ${partner["place-of-residence"] || ""}`,
        partner["country-of-residence"] || ""
    ].join("\n");
const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "huwelijksplanner-step-4",
                "huwelijksplanner",
                "form",
                "common"
            ])
        }
    });
function HuwelijksplannerStep0() {
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "huwelijksplanner-step-4",
        "huwelijksplanner",
        "form",
        "common"
    ]);
    const data = {
        ...huwelijksplanner_state/* exampleState */.A
    };
    const { locale ="nl"  } = (0,router_.useRouter)();
    const PartnerDataList = ({ partner  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--rows",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:bsn")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.NumberValue, {
                                children: partner.bsn
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:salutation")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: partner.salutation
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:family-name")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListValue, {
                            notranslate: true,
                            children: [
                                partner["family-name-prefix"],
                                " ",
                                partner["family-name"]
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:given-name")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            notranslate: true,
                            children: partner["given-name"]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:bday")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: partner["bday"] ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                dateTime: partner["bday"],
                                locale: locale
                            }) : /*#__PURE__*/ jsx_runtime.jsx(components.EmptyIndicator, {
                                title: t("value-unknown.bday")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: "Geboorteplaats, - land"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListValue, {
                            children: [
                                partner["place-of-birth"],
                                ", ",
                                partner["country-of-birth"]
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:address")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            multiline: true,
                            notranslate: true,
                            children: formatAddress(partner)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:nationality")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: partner.nationality
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: "Burgerlijke staat"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: "Ongehuwd en nooit gehuwd geweest"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: "Indicatie curateleregister"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: partner["indicatie-curateleregister"] === 1 ? "Ja" : "Nee"
                        })
                    ]
                })
            ]
        });
    const WitnessDataList = ({ witness , locale  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--rows",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:bsn")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.NumberValue, {
                                children: witness.bsn
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: "Geslachtsnaam en voorna(a)m(en)"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            notranslate: true,
                            children: "Deursen, Adriaan"
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
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:bday")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: witness["bday"] ? /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                dateTime: witness["bday"],
                                locale: locale
                            }) : /*#__PURE__*/ jsx_runtime.jsx(components.EmptyIndicator, {
                                title: t("value-unknown.bday")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: "Adres, postcode, woonplaats en land"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            multiline: true,
                            notranslate: true,
                            children: `Nieuwegracht 17\n3512 LC Utrecht\nNederland`
                        })
                    ]
                })
            ]
        });
    const ContactInfoDataList = ({ partner  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
            className: "utrecht-data-list--rows",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                            children: t("form:tel")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(components.NumberValue, {
                                children: partner.tel
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
                        })
                    ]
                })
            ]
        });
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
                                data["reservation"] ? /*#__PURE__*/ jsx_runtime.jsx(components.ReservationCard, {
                                    reservation: data["reservation"],
                                    locale: locale
                                }) : "",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Heading2, {
                                            children: [
                                                t("huwelijksplanner:aanstaande"),
                                                " 1"
                                            ]
                                        }),
                                        data.partners[0] ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(PartnerDataList, {
                                                    partner: data.partners[0]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                    children: "Gegevens ouders echtgeno(o)t(e) 1"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
                                                    className: "utrecht-data-list--rows",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                    children: "Geslachtsnaam en voorna(a)m(en) ouder 1"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                    children: "Deursen, Adriaan"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                    children: "Geslachtsnaam en voorna(a)m(en) ouder 2"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                    children: "Deursen - Verhagen, Anna Maria Johanna"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                    children: "Aanstaande echtgeno(o)t(e) 1 heeft verklaard dat:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.UnorderedList, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                children: "Niet met iemand anders getrouwd is (in Nederland of in een ander land). Heeft nu ook geen geregistreerd partnerschap."
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                children: "Niet trouwt met neef, nicht, oom of tante."
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                children: "De gegevens die hierboven staan kloppen en compleet zijn."
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                            children: "Contactgevens"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(ContactInfoDataList, {
                                                            partner: data.partners[0],
                                                            locale: locale
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : "",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading2, {
                                                    children: "Aanstaande echtgeno(o)t(e) 2"
                                                }),
                                                data.partners[1] ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(PartnerDataList, {
                                                            partner: data.partners[1]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                            children: "Gegevens ouders echtgeno(o)t(e) 2"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataList, {
                                                            className: "utrecht-data-list--rows",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                            children: "Geslachtsnaam en voorna(a)m(en) ouder 1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                            children: "Broecke, van den, Hans Eric"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                            children: "Geslachtsnaam en voorna(a)m(en) ouder 2"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                            children: "Broecke, van den, Elisabeth Cornelia"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.DataListItem, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListKey, {
                                                                            children: "Aanstaande echtgeno(o)t(e) 2 heeft verklaard dat:"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.DataListValue, {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.UnorderedList, {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                        children: "Niet met iemand anders getrouwd is (in Nederland of in een ander land). Heeft nu ook geen geregistreerd partnerschap."
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                        children: "Niet trouwt met neef, nicht, oom of tante."
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx(components.UnorderedListItem, {
                                                                                        children: "De gegevens die hierboven staan kloppen en compleet zijn."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(components.Heading3, {
                                                                    children: "Contactgevens"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(ContactInfoDataList, {
                                                                    partner: data.partners[1],
                                                                    locale: locale
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }) : "",
                                                data.witnesses.length > 0 ? data.witnesses.map((witness, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Heading3, {
                                                                children: [
                                                                    t("huwelijksplanner:legal-witness"),
                                                                    " ",
                                                                    index + 1
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(WitnessDataList, {
                                                                witness: witness,
                                                                locale: locale
                                                            })
                                                        ]
                                                    }, index)) : /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                    children: t("huwelijksplanner:no-required-witness")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Femail-data-summary&absolutePagePath=private-next-pages%2Femail-data-summary.tsx&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,277,525], () => (__webpack_exec__(1300)));
module.exports = __webpack_exports__;

})();