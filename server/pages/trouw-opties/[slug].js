"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695,981];
exports.modules = {

/***/ 984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _slug_),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@utrecht/component-library-react"
var component_library_react_ = __webpack_require__(1353);
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
// EXTERNAL MODULE: ./src/generated/index.ts + 84 modules
var generated = __webpack_require__(8690);
;// CONCATENATED MODULE: ./src/hooks/useAvailabilitycheckGetCollection.tsx



const dateFormat = "yyyy-MM-dd";
const useAvailabilitycheckGetCollection = (input)=>{
    const [data, setData] = (0,external_react_.useState)({});
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (input.ceremonyData.length === 0) return;
        setLoading(true);
        generated/* AvailabilitycheckService.availabilitycheckGetCollection */.SY.availabilitycheckGetCollection({
            resourcesCould: input.ceremonyData.map((ceremony)=>ceremony.id),
            interval: input.interval,
            start: (0,external_date_fns_.format)(input.start, dateFormat),
            stop: (0,external_date_fns_.format)(input.stop, dateFormat)
        }).then((response)=>{
            const availabilityResults = response;
            setData(availabilityResults);
        }, (error)=>{
            setError(error);
        }).finally(()=>{
            setLoading(false);
        });
    }, [
        input.ceremonyData,
        input.start.toISOString()
    ]);
    return [
        data,
        loading,
        error
    ];
};

// EXTERNAL MODULE: ./src/embedded.ts
var embedded = __webpack_require__(8981);
;// CONCATENATED MODULE: ./src/hooks/useSdgProductGetItem.tsx



const mapToCeremonyData = (products)=>{
    return products.gerelateerdeProducten.map((ceremony)=>({
            id: ceremony.id,
            type: ceremony.upnLabel,
            locationId: ceremony.gerelateerdeProducten[0].id
        }));
};
const useSdgProductGetItem = (id)=>{
    const [data, setData] = (0,external_react_.useState)([]);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (id === undefined) return;
        setLoading(true);
        generated/* SdgproductService.sdgproductGetItem */.ZD.sdgproductGetItem({
            id: id
        }).then((response)=>{
            const mappedResult = mapToCeremonyData((0,embedded/* resolveEmbedded */.g)(response));
            setData(mappedResult);
        }, (error)=>{
            setError(error);
        }).finally(()=>{
            setLoading(false);
        });
    }, [
        id
    ]);
    return [
        data,
        loading,
        error
    ];
};

;// CONCATENATED MODULE: ./pages/trouw-opties/[slug].tsx















const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-2"
            ])
        }
    });
const _slug_dateFormat = "yyyy-MM-dd";
const PlanningFormPage = ()=>{
    const { locale ="nl" , push  } = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)([
        "common",
        "huwelijksplanner-step-2"
    ]);
    const [marriageOptions, setMarriageOptions] = (0,external_react_.useContext)(MarriageOptionsContext/* MarriageOptionsContext */.K);
    const [calendarData, setCalendarData] = (0,external_react_.useState)({
        start: (0,external_date_fns_.startOfMonth)(Date.now()),
        end: (0,external_date_fns_.endOfMonth)(Date.now()),
        selectedDate: undefined
    });
    const [selectedSlot, setSelectedSlot] = (0,external_react_.useState)();
    const [selectedRadio, setSelectedRadio] = (0,external_react_.useState)("");
    const [ceremonyData, ceremoniesLoading, ceremonyError] = useSdgProductGetItem(marriageOptions.productId);
    const [availabilityData, availabilityLoading, availabilityError] = useAvailabilitycheckGetCollection({
        ceremonyData: ceremonyData,
        interval: "PT2H",
        start: calendarData.start,
        stop: calendarData.end
    });
    const onRadioChange = (event, slotData)=>{
        if (!event.target.checked) return;
        setSelectedRadio(event.target.id);
        setSelectedSlot({
            ceremony: slotData.ceremony,
            startTime: slotData.start,
            endTime: slotData.end
        });
    };
    const onCalendarDateSelected = (date)=>{
        setCalendarData({
            start: (0,external_date_fns_.startOfMonth)(date),
            end: (0,external_date_fns_.endOfMonth)(date),
            selectedDate: date
        });
        if (calendarData.selectedDate !== date) {
            setSelectedSlot(undefined);
            setSelectedRadio("");
        }
    };
    const onSubmit = (event)=>{
        event.preventDefault();
        if (!selectedSlot) return;
        setMarriageOptions({
            ...marriageOptions,
            ambtenaar: selectedSlot.ceremony?.ambtenaarId,
            reservation: {
                "ceremony-id": selectedSlot.ceremony.id,
                "ceremony-type": selectedSlot.ceremony.type,
                "ceremony-location": selectedSlot.ceremony.locationId,
                "ceremony-start": selectedSlot.startTime,
                "ceremony-end": selectedSlot.endTime
            }
        });
        push("/voorgenomen-huwelijk");
    };
    return /*#__PURE__*/ jsx_runtime.jsx(components.Surface, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Document, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `${t("common:step-n", {
                            n: 2
                        })}: ${t("huwelijksplanner-step-2:title")} - ${"Gemeente Leiden"}`
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
                                    href: "/trouw-opties/",
                                    children: "← Terug"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components.PageContentMain, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        onSubmit: onSubmit,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.HeadingGroup, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.Heading1, {
                                                        children: t("huwelijksplanner-step-2:heading-1")
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Paragraph, {
                                                        lead: true,
                                                        children: [
                                                            t("common:step-n-of-m", {
                                                                n: 2,
                                                                m: 5
                                                            }),
                                                            " — ",
                                                            t("huwelijksplanner-step-2:title")
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                lead: true,
                                                children: "Kies hier de datum waarop jullie willen trouwen. Als je op de datum klikt zie je de beschikbare tijden, plaatsen en manieren waarop je kunt trouwen."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(components.FormField, {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(components.Calendar, {
                                                            onCalendarClick: (date)=>onCalendarDateSelected(new Date(date)),
                                                            minDate: (0,external_date_fns_.addWeeks)(new Date(), 3),
                                                            maxDate: (0,external_date_fns_.addYears)(new Date(), 1)
                                                        })
                                                    }),
                                                    calendarData.selectedDate && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            ceremonyData.map((ceremony, idx)=>{
                                                                const legendId = `${ceremony.type}-legend`;
                                                                const ceremonyType = external_lodash_default().upperFirst(ceremony.type);
                                                                const ceremonyUniqueDayId = `${ceremony.id}-${calendarData.selectedDate?.toISOString()}`;
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Fieldset, {
                                                                    role: "radiogroup",
                                                                    "aria-describedby": legendId,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(components.FieldsetLegend, {
                                                                            id: legendId,
                                                                            children: ceremonyType
                                                                        }),
                                                                        calendarData.selectedDate && availabilityData[(0,external_date_fns_.format)(calendarData.selectedDate, _slug_dateFormat)]?.filter((slot)=>slot.resources.includes(ceremony.id)).map((slot, idx)=>/*#__PURE__*/ jsx_runtime.jsx(components.FormField, {
                                                                                type: "radio",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(components.Paragraph, {
                                                                                    className: "utrecht-form-field__label utrecht-form-field__label--radio",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(component_library_react_.FormLabel, {
                                                                                        htmlFor: `${ceremonyUniqueDayId}-${idx}`,
                                                                                        type: "radio",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.RadioButton2, {
                                                                                                className: "utrecht-form-field__input",
                                                                                                id: `${ceremonyUniqueDayId}-${idx}`,
                                                                                                value: `${ceremonyUniqueDayId}-${idx}`,
                                                                                                name: "event",
                                                                                                onChange: (e)=>onRadioChange(e, {
                                                                                                        ceremony: ceremony,
                                                                                                        start: slot.start,
                                                                                                        end: slot.stop
                                                                                                    }),
                                                                                                checked: `${ceremonyUniqueDayId}-${idx}` === selectedRadio,
                                                                                                required: true,
                                                                                                novalidate: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.DateValue, {
                                                                                                dateTime: slot.start,
                                                                                                locale: locale
                                                                                            }),
                                                                                            " van",
                                                                                            " ",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.TimeValue, {
                                                                                                dateTime: slot.start,
                                                                                                locale: locale
                                                                                            }),
                                                                                            " tot",
                                                                                            " ",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(components.TimeValue, {
                                                                                                dateTime: slot.stop,
                                                                                                locale: locale
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }, idx))
                                                                    ]
                                                                }, idx);
                                                            }),
                                                            selectedRadio && /*#__PURE__*/ jsx_runtime.jsx(components.ButtonGroup, {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(components.Button, {
                                                                    type: "submit",
                                                                    appearance: "primary-action-button",
                                                                    children: "Ja, dit wil ik!"
                                                                })
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
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(components.Link, {
                                                            href: "/",
                                                            external: true,
                                                            children: [
                                                                "Trouwen of partnerschap registreren in",
                                                                " ",
                                                                process.env.NEXT_PUBLIC_ORGANISATION_NAME_SHORT ?? "Utrecht"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
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
};
/* harmony default export */ const _slug_ = (PlanningFormPage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Ftrouw-opties%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Ftrouw-opties%2F%5Bslug%5D.tsx&preferredRegion=!

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

/***/ 7727:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,670,277,707,850], () => (__webpack_exec__(984)));
module.exports = __webpack_exports__;

})();