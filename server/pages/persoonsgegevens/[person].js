"use strict";
(() => {
var exports = {};
exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 5488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclarationCheckboxGroup": () => (/* reexport safe */ private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__.ww),
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__.Ns)
/* harmony export */ });
/* harmony import */ var private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_persoonsgegevens_person_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ getServerSideProps),
/* harmony export */   "ZP": () => (/* binding */ MultistepForm1),
/* harmony export */   "ww": () => (/* binding */ DeclarationCheckboxGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1353);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7727);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4275);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6555);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4277);
/* harmony import */ var _src_components_huwelijksplanner_AddressDataList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1631);
/* harmony import */ var _src_components_huwelijksplanner_PageFooterTemplate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6198);
/* harmony import */ var _src_components_huwelijksplanner_PageHeaderTemplate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5428);
/* harmony import */ var _src_components_huwelijksplanner_PersonalDataList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4646);
/* harmony import */ var _src_context_MarriageOptionsContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2670);
/* harmony import */ var _src_generated__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8690);
/* harmony import */ var _src_hooks_useIngeschrevenpersoonGetByBsn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3969);
/* harmony import */ var _src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__, uuid__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__, uuid__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const getServerSideProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common",
                "huwelijksplanner-step-4",
                "form"
            ])
        }
    });
function MultistepForm1() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)([
        "common",
        "huwelijksplanner-step-4",
        "form"
    ]);
    const [declarationCheckboxData, setDeclarationCheckboxData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        "correct-information-and-complete": false,
        "not-marrying-relative": false,
        unmarried: false
    });
    const [declarationCheckboxChecked, setDeclarationCheckboxChecked] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { query: { huwelijkId  } , locale ="nl" , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { formState , handleSubmit , register , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const [marriageOptions, setMarriageOptions] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_src_context_MarriageOptionsContext__WEBPACK_IMPORTED_MODULE_16__/* .MarriageOptionsContext */ .K);
    const [persoonData] = (0,_src_hooks_useIngeschrevenpersoonGetByBsn__WEBPACK_IMPORTED_MODULE_18__/* .useIngeschrevenpersoonGetByBsn */ .D)((0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)());
    const { reservation , ambtenaar , productId  } = marriageOptions;
    const [huwelijkIdCreate, setHuwelijkIdCreate] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(marriageOptions.id);
    const [loadingType, setLoadingType] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loadingCeremonie, setLoadingCeremonie] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loadingMoment, setLoadingMoment] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loadingAmbtenaar, setLoadingAmbtenaar] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loadingLocatie, setLoadingLocatie] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loadingKosten, setLoadingKosten] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const pageInitialized = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
    const invalidStateDescriptionId = (0,react__WEBPACK_IMPORTED_MODULE_7__.useId)();
    const getCosts = (reservation)=>{
        switch(reservation["ceremony-type"]){
            case "gratis trouwen":
                return "EUR 0.00";
            case "flits/baliehuwelijk":
                return "EUR 32.50";
            case "eenvoudig huwelijk":
                return "EUR 220.00";
            default:
                return "EUR 0.00";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (loadingType === true && loadingCeremonie === true && loadingMoment === true && loadingAmbtenaar === true && loadingLocatie === true && loadingKosten === true && !huwelijkId) {
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkGet */ ._H.huwelijkGet({
                id: huwelijkIdCreate ?? " "
            }).then((response)=>{
                if (!reservation) return;
                const moment = response.results.find((result)=>result.eigenschap === "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/f81cb98c-233c-4b8d-9de3-4ecc93032012");
                setMarriageOptions({
                    ...marriageOptions,
                    id: huwelijkIdCreate || "",
                    reservation: {
                        ...reservation,
                        "ceremony-end": (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMinutes)(new Date(moment.waarde || ""), 15).toString(),
                        "ceremony-price-currency": getCosts(reservation).split(" ")[0] || "EUR",
                        "ceremony-price-amount": getCosts(reservation).split(" ")[1] || "-"
                    }
                });
                setLoading(false);
            });
        } else {
            if (!huwelijkId) setLoading(true);
        }
    }, [
        loadingType,
        loadingCeremonie,
        loadingMoment,
        loadingAmbtenaar,
        loadingLocatie,
        loadingKosten
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (declarationCheckboxData["correct-information-and-complete"] === true && declarationCheckboxData["not-marrying-relative"] === true && declarationCheckboxData["unmarried"] === true) {
            setDeclarationCheckboxChecked(true);
        } else {
            setDeclarationCheckboxChecked(false);
        }
    }, [
        declarationCheckboxData
    ]);
    const initializeMarriage = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        if (!reservation) return;
        setLoading(true);
        const postHuwelijk = {
            identificatie: (0,uuid__WEBPACK_IMPORTED_MODULE_10__.v4)(),
            bronorganisatie: "unknown",
            omschrijving: `Test ${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(), "HH:mm:ss")} huwelijk`,
            toelichting: `Test ${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(), "HH:mm:ss")} huwelijk`,
            zaaktype: "https://api.huwelijksplanner.online/api/ztc/v1/zaaktypen/4af1c0ea-12b7-4e23-8913-b3effc047951",
            verantwoordelijkeOrganisatie: null,
            startdatum: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(), "yyyy-MM-dd")
        };
        _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkCreate */ ._H.huwelijkCreate({
            requestBody: postHuwelijk
        }).then((response)=>{
            setHuwelijkIdCreate(response.id);
            // ID
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/a2f2bce4-3877-4ad9-833e-5241c3a71cab",
                    waarde: productId ?? ""
                }
            }).finally(()=>{
                setLoadingType(true);
            });
            // Ceremonie
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/d63af89f-0ee7-4b26-b07d-0faf02d34b51",
                    waarde: reservation["ceremony-id"] ?? ""
                }
            }).finally(()=>{
                setLoadingCeremonie(true);
            });
            // Moment
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/f81cb98c-233c-4b8d-9de3-4ecc93032012",
                    waarde: reservation["ceremony-start"] ?? ""
                }
            }).finally(()=>{
                setLoadingMoment(true);
            });
            // Ambtenaar
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/1f8e3903-ca20-4b34-a46a-aef0cc16eb19",
                    waarde: ambtenaar ?? ""
                }
            }).finally(()=>{
                setLoadingAmbtenaar(true);
            });
            // Location
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/745d85cc-8972-43b9-916e-c268bf87d750",
                    waarde: reservation["ceremony-location"] ?? ""
                }
            }).finally(()=>{
                setLoadingLocatie(true);
            });
            // Kosten
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                requestBody: {
                    zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${response.id ?? ""}`,
                    eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/416de8b8-d5d1-4f44-9a1e-1846d552292c",
                    waarde: getCosts(reservation) ?? ""
                }
            }).finally(()=>{
                setLoadingKosten(true);
            });
        }).finally(()=>{
            setLoading(false);
        });
    }, [
        ambtenaar,
        marriageOptions,
        productId,
        reservation,
        setMarriageOptions,
        persoonData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (pageInitialized.current || !reservation || !persoonData) return;
        if (!marriageOptions.id) {
            initializeMarriage();
            pageInitialized.current = true;
        }
    }, [
        huwelijkId,
        initializeMarriage,
        marriageOptions,
        reservation,
        setMarriageOptions,
        persoonData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (formState.isDirty) reset(undefined, {
            keepValues: true,
            keepErrors: true,
            keepIsValid: true,
            keepIsSubmitted: false
        });
    });
    const onContactDetailsSubmit = (data)=>{
        setLoading(true);
        if (huwelijkId) {
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkGet */ ._H.huwelijkGet({
                id: huwelijkId.toString()
            }).then((response)=>{
                if (!reservation) return;
                const partnerString = response.results.find((result)=>result.eigenschap === "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3");
                const partner = JSON.parse(partnerString.waarde);
                // Partner
                _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPatchEigenschap */ ._H.huwelijkPatchEigenschap({
                    id: partnerString.id,
                    requestBody: {
                        zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${huwelijkId ?? ""}`,
                        eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3",
                        waarde: JSON.stringify([
                            {
                                ...partner
                            },
                            {
                                ...persoonData,
                                requester: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)(),
                                contact: {
                                    subjectIdentificatie: {
                                        inpBsn: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)()
                                    },
                                    ...mapToContactObject(data.email, data.phoneNumber)
                                },
                                results: getResultsChecklist(),
                                name: ""
                            }
                        ]) ?? ""
                    }
                }).then(()=>{
                    push(`/persoonsgegevens/succes?huwelijkId=${huwelijkId}`);
                    setLoading(false);
                });
            });
        } else {
            _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkGet */ ._H.huwelijkGet({
                id: huwelijkIdCreate ?? " "
            }).then((response)=>{
                if (!reservation) return;
                // Partner
                _src_generated__WEBPACK_IMPORTED_MODULE_17__/* .HuwelijkService.huwelijkPostEigenschap */ ._H.huwelijkPostEigenschap({
                    requestBody: {
                        zaak: `https://api.huwelijksplanner.online/api/zrc/v1/zaken/${huwelijkIdCreate ?? ""}`,
                        eigenschap: "https://api.huwelijksplanner.online/api/ztc/v1/eigenschappen/4dee2797-1faf-4dc0-95f8-ddc4956302f3",
                        waarde: JSON.stringify({
                            ...persoonData,
                            requester: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)(),
                            contact: {
                                subjectIdentificatie: {
                                    inpBsn: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)()
                                },
                                ...mapToContactObject(data.email, data.phoneNumber)
                            },
                            results: getResultsChecklist(),
                            name: ""
                        }) ?? ""
                    }
                }).then(()=>{
                    const newPartner = JSON.stringify({
                        ...persoonData,
                        requester: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)(),
                        contact: {
                            subjectIdentificatie: {
                                inpBsn: (0,_src_openapi_authentication__WEBPACK_IMPORTED_MODULE_19__/* .getBsnFromJWT */ .p0)()
                            },
                            ...mapToContactObject(data.email, data.phoneNumber)
                        },
                        results: getResultsChecklist(),
                        name: ""
                    });
                    setMarriageOptions({
                        ...marriageOptions,
                        partners: [
                            newPartner
                        ]
                    });
                    push("/voorgenomen-huwelijk/partner");
                    setLoading(false);
                });
            });
        }
    };
    const onDeclarationCheckboxChange = (event)=>{
        setDeclarationCheckboxData({
            ...declarationCheckboxData,
            [event.target.name]: event.target.checked
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Surface, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Document, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${t("common:step-n", {
                            n: 3
                        })}: ${t("huwelijksplanner-step-4:title")} - ${"Gemeente Leiden"}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.SkipLink, {
                    href: "#main",
                    children: t("common:skip-link-main")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Page, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_PageHeaderTemplate__WEBPACK_IMPORTED_MODULE_14__/* .PageHeaderTemplate */ .P, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.PageContent, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_11__.PageContentMain, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit(onContactDetailsSubmit),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.HeadingGroup, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading1, {
                                                    children: t("huwelijksplanner-step-4:heading-1")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
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
                                        loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            height: "50px"
                                        }) : reservation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_11__.ReservationCard, {
                                            reservation: reservation,
                                            locale: locale
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.SpotlightSection, {
                                                    type: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading2, {
                                                            children: "Gegevens uit Basisregistratie Personen"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                            children: [
                                                                "Hieronder zie je de gegevens die bij ons bekend zijn. Klopt er iets niet?",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                                    href: "https://pki.utrecht.nl/Loket/product/499c98cd12284d9c6bfe658dd0ea95cb",
                                                                    children: "Neem contact op met de gemeente"
                                                                }),
                                                                "."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading2, {
                                                    id: "personal-details",
                                                    children: "Persoonsgegevens"
                                                }),
                                                persoonData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_PersonalDataList__WEBPACK_IMPORTED_MODULE_15__/* .PersonalDataList */ .e, {
                                                    partner: persoonData
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                    height: "100px"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading2, {
                                                    id: "address",
                                                    children: "Adresgegevens"
                                                }),
                                                persoonData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_AddressDataList__WEBPACK_IMPORTED_MODULE_12__/* .AddressDataList */ .z, {
                                                    partner: persoonData
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                    height: "100px"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading2, {
                                                    id: "contact",
                                                    children: "Contactgegevens"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Deze gegevens kun je zelf invullen of wijzigen."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormField, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "utrecht-form-field__label",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                                htmlFor: "tel",
                                                                children: t("form:tel")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Textbox, {
                                                            className: "utrecht-form-field__input",
                                                            id: "tel",
                                                            type: "tel",
                                                            autoComplete: "tel",
                                                            invalid: formState.errors.phoneNumber && formState.isSubmitted,
                                                            ...register("phoneNumber", {
                                                                required: true
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormField, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "utrecht-form-field__label",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                                htmlFor: "email",
                                                                children: t("form:email")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormFieldDescription, {
                                                            id: "email-description",
                                                            children: [
                                                                "We sturen je een bevestiging naar dit e-mailadres.",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                "De mail heeft een link om nog veranderingen door te geven."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Textbox, {
                                                            className: "utrecht-form-field__input",
                                                            id: "email",
                                                            type: "email",
                                                            autoComplete: "email",
                                                            "aria-describedby": "email-description",
                                                            invalid: formState.errors.email && formState.isSubmitted,
                                                            ...register("email", {
                                                                required: true
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeclarationCheckboxGroup, {
                                                    onChange: onDeclarationCheckboxChange,
                                                    register: register,
                                                    checkboxData: checkboxData
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                    type: "submit",
                                                    disabled: loading || !declarationCheckboxChecked,
                                                    name: "type",
                                                    appearance: "primary-action-button",
                                                    "aria-describedby": invalidStateDescriptionId,
                                                    busy: loading,
                                                    children: "Contactgegevens opslaan"
                                                }),
                                                !formState.isValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: !formState.isSubmitted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormFieldDescription, {
                                                        id: invalidStateDescriptionId,
                                                        hidden: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                            children: "Vul eerst alle gegevens in."
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormFieldDescription, {
                                                        id: invalidStateDescriptionId,
                                                        invalid: true,
                                                        "aria-live": "assertive",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                            children: "Nog niet alle gegevens zijn ingevuld."
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components__WEBPACK_IMPORTED_MODULE_11__.Aside, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Heading2, {
                                                    children: "Meer informatie"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                    children: [
                                                        "Je mag in Nederland trouwen met je neef, nicht, oom of tante. Je moet dan wel komen verklaren dat je niet gedwongen wordt. Neem contact op met de gemeente: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                            href: "tel:14030",
                                                            children: "bel 14 030"
                                                        }),
                                                        " of",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                            href: "https://www.utrecht.nl/contact/",
                                                            children: "chat met ons"
                                                        }),
                                                        "."
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                        href: "https://www.rijksoverheid.nl/onderwerpen/huwelijksdwang/huwelijksdwang-voorkomen",
                                                        children: "Aanpak huwelijksdwang"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                        href: "https://pki.utrecht.nl/Loket/product/499c98cd12284d9c6bfe658dd0ea95cb",
                                                        children: "Wat kan ik doen als mijn gegevens niet kloppen?"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.PageFooter, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_huwelijksplanner_PageFooterTemplate__WEBPACK_IMPORTED_MODULE_13__/* .PageFooterTemplate */ .O, {})
                        })
                    ]
                })
            ]
        })
    });
}
const checkboxData = [
    {
        id: "6e562ba6-0ed3-4f4d-95e2-7f35614771b2",
        label: "Ik verklaar dat ik nu niet met iemand anders getrouwd ben (in Nederland of in een ander land). Ik heb nu ook geen geregistreerd partnerschap.",
        value: "unmarried"
    },
    {
        id: "03aadd3e-49ad-43a6-89f9-de574d0b92df",
        label: "Ik verklaar dat ik niet trouw met mijn neef, nicht, oom of tante.",
        value: "not-marrying-relative"
    },
    {
        id: "f65c0e93-d550-4de2-a970-79df86269f5c",
        label: "De gegevens die hierboven staan kloppen en zijn compleet.",
        value: "correct-information-and-complete"
    }
];
const DeclarationCheckboxGroup = ({ checkboxData , register , onChange  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.Fieldset, {
        children: checkboxData && checkboxData.length > 0 && checkboxData.map(({ id , label , value  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormField, {
                type: "checkbox",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_11__.Checkbox2, {
                        novalidate: true,
                        id: id,
                        ...register(value, {
                            onChange: onChange,
                            required: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        htmlFor: id,
                        type: "checkbox",
                        children: label
                    })
                ]
            }, index))
    });
};
const getResultsChecklist = ()=>{
    return [
        {
            display: "Ik verklaar dat ik niet trouw met mijn neef, nicht, oom of tante.",
            result: true
        },
        {
            display: "Ik verklaar dat ik nu niet met iemand anders getrouwd ben (in Nederland of in een ander land). Ik heb nu ook geen geregistreerd partnerschap.",
            result: true
        }
    ];
};
const mapToContactObject = (email, phoneNumber)=>{
    const contactObject = {};
    if (email) {
        contactObject.emails = [
            {
                naam: email,
                email: email
            }
        ];
    }
    if (phoneNumber) {
        contactObject.telefoonnummers = [
            {
                naam: phoneNumber,
                telefoonnummer: phoneNumber
            }
        ];
    }
    return contactObject;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ AddressDataList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1353);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const AddressDataList = ({ partner  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)([
        "common",
        "huwelijksplanner-step-4",
        "form"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataList, {
        "aria-describedby": "address",
        className: "utrecht-data-list--rows",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:street")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.verblijfplaats.straat,
                        emptyDescription: t("form:data-item-unknown"),
                        children: partner.verblijfplaats.straat ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:house-number")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.verblijfplaats.huisnummer,
                        emptyDescription: t("form:data-item-unknown"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.NumberValue, {
                            children: partner.verblijfplaats.huisnummer ?? "-"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:house-number-suffix")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.verblijfplaats.huisnummerToevoeging,
                        emptyDescription: t("form:data-item-empty"),
                        notranslate: true,
                        children: partner.verblijfplaats.huisnummerToevoeging ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:postal-code")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.verblijfplaats.postcode,
                        emptyDescription: t("form:data-item-unknown"),
                        children: partner.verblijfplaats.postcode ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:place-of-residence")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.verblijfplaats.woonplaats,
                        emptyDescription: t("form:data-item-unknown"),
                        notranslate: true,
                        children: partner.verblijfplaats.woonplaats ?? "-"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ PersonalDataList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1353);
/* harmony import */ var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const PersonalDataList = ({ partner  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)([
        "common",
        "huwelijksplanner-step-4",
        "form"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataList, {
        "aria-describedby": "personal-details",
        className: "utrecht-data-list--rows",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: [
                            t("form:bsn"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.burgerservicenummer ?? "",
                        emptyDescription: t("form:data-item-unknown"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.NumberValue, {
                            children: partner.burgerservicenummer
                        })
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: [
                            t("form:Geslacht"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.geslachtsaanduiding ?? "",
                        emptyDescription: t("form:data-item-unknown"),
                        children: partner.geslachtsaanduiding ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:given-name")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.naam.voornamen,
                        emptyDescription: t("form:data-item-unknown"),
                        notranslate: true,
                        children: partner.naam.voornamen ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:family-name-prefix")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.naam.voorvoegsel,
                        emptyDescription: t("form:data-item-empty"),
                        notranslate: true,
                        children: partner.naam.voorvoegsel ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:family-name")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.naam.geslachtsnaam,
                        emptyDescription: t("form:data-item-unknown"),
                        notranslate: true,
                        children: partner.naam.geslachtsnaam ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:bday")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.geboorte.datumOnvolledig.datum,
                        emptyDescription: t("form:data-item-unknown"),
                        children: partner.geboorte.datumOnvolledig.datum ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:place-of-birth")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.geboorte.datumOnvolledig.plaats,
                        emptyDescription: t("form:data-item-unknown"),
                        notranslate: true,
                        children: partner.geboorte.datumOnvolledig.plaats ?? "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:nationality")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.nationaliteiten[0].nationaliteit.code,
                        emptyDescription: t("form:data-item-unknown"),
                        notranslate: true,
                        children: partner.nationaliteiten[0].nationaliteit.omschrijving || partner.nationaliteiten[0].nationaliteit.code
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListItem, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListKey, {
                        children: t("form:registered-guardianship")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_1__.DataListValue, {
                        value: partner.gezagsverhouding === 1 ? "Ja" : undefined,
                        emptyDescription: t("form:data-item-unknown"),
                        children: partner.gezagsverhouding ? "Ja" : "-"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useIngeschrevenpersoonGetByBsn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _embedded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8981);
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8690);



const useIngeschrevenpersoonGetByBsn = (bsn)=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!bsn || bsn.length === 0) return;
        setLoading(true);
        _generated__WEBPACK_IMPORTED_MODULE_2__/* .IngeschrevenpersoonService.ingeschrevenpersoonGetCollection */ .$Q.ingeschrevenpersoonGetCollection({
            burgerservicenummer: bsn
        }).then((response)=>{
            setData((0,_embedded__WEBPACK_IMPORTED_MODULE_1__/* .resolveEmbedded */ .g)(response.results[0]));
        }, (error)=>{
            setError(error);
        }).finally(()=>{
            setLoading(false);
        });
    }, [
        bsn
    ]);
    return [
        data,
        loading,
        error
    ];
};


/***/ }),

/***/ 8102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YR": () => (/* binding */ authenticate),
/* harmony export */   "_b": () => (/* binding */ unauthenticate),
/* harmony export */   "p0": () => (/* binding */ getBsnFromJWT)
/* harmony export */ });
/* unused harmony export isAuthenticated */
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8690);

const myWindow =  false ? 0 : undefined;
const unauthenticate = ()=>{
    _generated__WEBPACK_IMPORTED_MODULE_0__/* .OpenAPI.HEADERS */ .fC.HEADERS = {};
    myWindow?.sessionStorage.removeItem("JWT");
};
const authenticate = (JWT)=>{
    _generated__WEBPACK_IMPORTED_MODULE_0__/* .OpenAPI.HEADERS */ .fC.HEADERS = {
        Authorization: `Bearer ${JWT}`
    };
    myWindow?.sessionStorage.setItem("JWT", JWT);
};
const isAuthenticated = ()=>!!myWindow?.sessionStorage.getItem("JWT");
const getBsnFromJWT = ()=>{
    const JWT = myWindow?.sessionStorage.getItem("JWT");
    const jwtArray = JWT?.split(".");
    if (jwtArray && jwtArray.length >= 2) {
        const jwtJSON = JSON.parse(decodeURIComponent(escape(window.atob(jwtArray[1]))));
        return jwtJSON.person; // BSN
    }
    return "";
};


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

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 4275:
/***/ ((module) => {

module.exports = import("react-loading-skeleton");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,146,670,277,707,850,981], () => (__webpack_exec__(5488)));
module.exports = __webpack_exports__;

})();