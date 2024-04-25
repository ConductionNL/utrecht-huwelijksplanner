"use strict";
(() => {
var exports = {};
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 5782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_voorgenomen_huwelijk_getuigen_index_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_voorgenomen_huwelijk_getuigen_index_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_voorgenomen_huwelijk_getuigen_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_voorgenomen_huwelijk_getuigen_index_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_voorgenomen_huwelijk_getuigen_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (/* binding */ MultistepForm1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1353);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4277);
/* harmony import */ var _src_components_huwelijksplanner_PageFooterTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6198);
/* harmony import */ var _src_components_huwelijksplanner_PageHeaderTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5428);
/* harmony import */ var _src_context_MarriageOptionsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2670);
/* harmony import */ var _src_generated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_7__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-getuigen",
                "form"
            ])
        }
    });
function MultistepForm1() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)([
        "common",
        "huwelijksplanner-step-getuigen",
        "form"
    ]);
    const [marriageOptions] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_src_context_MarriageOptionsContext__WEBPACK_IMPORTED_MODULE_11__/* .MarriageOptionsContext */ .K);
    const { locale ="nl" , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const watch = formMethods.watch();
    const hasWitnesses = (watch.witnesses && watch.witnesses.some((witness)=>{
        return witness.name.length > 0 || witness.email?.length > 0;
    })) ?? false;
    const onContinueWithoutInvite = ()=>{
        push("/voorgenomen-huwelijk/getuigen/succes");
    };
    const onWitnessSubmit = (formData)=>{
        if (!formData.witnesses) {
            onContinueWithoutInvite();
            return;
        }
        let hasError = false;
        formData.witnesses.forEach((witness, index)=>{
            if (witness.name && !witness.email) {
                formMethods.setError(`witnesses.${index}.email`, {
                    type: "required"
                });
                hasError = true;
            }
            if (!witness.name && witness.email) {
                formMethods.setError(`witnesses.${index}.name`, {
                    type: "required"
                });
                hasError = true;
            }
        });
        if (hasError) return;
        if (marriageOptions.id) {
            _src_generated__WEBPACK_IMPORTED_MODULE_12__/* .HuwelijkService.huwelijkGet */ ._H.huwelijkGet({
                id: marriageOptions.id.toString()
            }).then(()=>{
                // Getuigen
                _src_generated__WEBPACK_IMPORTED_MODULE_12__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                    requestBody: {
                        zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${marriageOptions.id ?? ""}`,
                        eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/7e950e1d-04ab-482e-a066-299711d4b4ed",
                        waarde: JSON.stringify(mapWitnesses(formData.witnesses ?? [])) ?? ""
                    }
                }).then(()=>{
                    push("/voorgenomen-huwelijk/getuigen/succes");
                    setLoading(false);
                });
            });
        }
    // setLoading(true);
    // HuwelijkService.huwelijkPatchItem({
    //   id: marriageOptions.id as string,
    //   requestBody: {
    //     getuigen: mapWitnesses(formData.witnesses),
    //   },
    // }).then(() => {
    //   push("/voorgenomen-huwelijk/getuigen/succes");
    //   setLoading(false);
    // });
    };
    const formHeaderId = (0,react__WEBPACK_IMPORTED_MODULE_6__.useId)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Surface, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.Document, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${t("common:step-n", {
                            n: 3
                        })}: ${t("huwelijksplanner-step-getuigen:title")} - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.SkipLink, {
                    href: "#main",
                    children: t("common:skip-link-main")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.Page, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.PageHeader, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_PageHeaderTemplate__WEBPACK_IMPORTED_MODULE_10__/* .PageHeaderTemplate */ .P, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.PageContent, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.PageContentMain, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.HeadingGroup, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Heading1, {
                                                children: t("huwelijksplanner-step-getuigen:heading-1")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.Paragraph, {
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
                                    marriageOptions.reservation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.ReservationCard, {
                                        reservation: marriageOptions.reservation,
                                        locale: locale
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.FormProvider, {
                                            ...formMethods,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                onSubmit: formMethods.handleSubmit(onWitnessSubmit),
                                                "aria-labelledby": formHeaderId,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Heading2, {
                                                        id: formHeaderId,
                                                        children: "Nodig alvast getuigen uit"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Paragraph, {
                                                        children: "Bij je huwelijk zijn minimaal twee en maximaal vier getuigen nodig."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Paragraph, {
                                                        children: "Het is niet verplicht om hun namen nu al in te vullen. Uiterlijk vier weken voor je huwelijksdatum moet je de getuigen aanmelden."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WitnessFieldset, {
                                                        index: 1
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WitnessFieldset, {
                                                        index: 2
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WitnessFieldset, {
                                                        index: 3
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WitnessFieldset, {
                                                        index: 4
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.ButtonGroup, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                // disabled={loading || !hasWitnesses}
                                                                appearance: "primary-action-button",
                                                                type: "submit",
                                                                value: "invite",
                                                                ...formMethods.register("submit"),
                                                                children: "Verstuur uitnodiging"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                type: "submit",
                                                                appearance: "secondary-action-button",
                                                                value: "continue",
                                                                onClick: onContinueWithoutInvite,
                                                                children: "Later uitnodigen"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.PageFooter, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_PageFooterTemplate__WEBPACK_IMPORTED_MODULE_9__/* .PageFooterTemplate */ .O, {})
                        })
                    ]
                })
            ]
        })
    });
}
const mapWitnesses = (witnesses)=>{
    return witnesses.filter((witness)=>witness.name.length > 0 || witness.email.length > 0).map((witness)=>{
        const { name , email  } = witness;
        return {
            name: name,
            requester: null,
            contact: {
                voornaam: name,
                emails: [
                    {
                        naam: name,
                        email: email
                    }
                ]
            }
        };
    });
};
const WitnessFieldset = ({ index  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)([
        "form"
    ]);
    const { register , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useFormContext)();
    const nameId = (0,react__WEBPACK_IMPORTED_MODULE_6__.useId)();
    const emailId = (0,react__WEBPACK_IMPORTED_MODULE_6__.useId)();
    const nameInvalid = !!formState.errors.witnesses?.[index]?.name;
    const emailInvalid = !!formState.errors.witnesses?.[index]?.email;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.Fieldset, {
        invalid: nameInvalid || emailInvalid,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.FieldsetLegend, {
                children: [
                    t("form:legal-witness"),
                    " ",
                    index
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.FormField, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "utrecht-form-field__label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.FormLabel, {
                            htmlFor: nameId,
                            children: t("form:name")
                        })
                    }),
                    formState.errors.witnesses?.[index]?.name?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormFieldDescription, {
                        invalid: true,
                        children: t("form:name-required")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Textbox, {
                        id: nameId,
                        type: "text",
                        invalid: nameInvalid,
                        autoComplete: `section-witness-${index} name`,
                        ...register(`witnesses.${index}.name`)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_8__.FormField, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "utrecht-form-field__label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.FormLabel, {
                            htmlFor: emailId,
                            children: t("form:email")
                        })
                    }),
                    formState.errors.witnesses?.[index]?.email?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormFieldDescription, {
                        invalid: true,
                        children: t("form:email-required")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_8__.Textbox, {
                        id: emailId,
                        type: "email",
                        invalid: emailInvalid,
                        autoComplete: `section-witness-${index} email`,
                        ...register(`witnesses.${index}.email`)
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,670,277,707,850], () => (__webpack_exec__(5782)));
module.exports = __webpack_exports__;

})();