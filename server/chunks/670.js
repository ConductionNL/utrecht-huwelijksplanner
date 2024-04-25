"use strict";
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 2670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ MarriageOptionsProvider),
/* harmony export */   "K": () => (/* binding */ MarriageOptionsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_huwelijksplanner_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8525);



const myWindow =  false ? 0 : undefined;
const getSavedMarriageOptions = ()=>{
    const savedOptions = myWindow?.sessionStorage.getItem("marriageOptions");
    return savedOptions ? JSON.parse(savedOptions) : {};
};
const MarriageOptionsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([
    _data_huwelijksplanner_state__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E,
    ()=>null
]);
const MarriageOptionsProvider = ({ children  })=>{
    const [marriageOptions, setMarriageOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_huwelijksplanner_state__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMarriageOptions(getSavedMarriageOptions);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!marriageOptions?.productId) return;
        myWindow?.sessionStorage.setItem("marriageOptions", JSON.stringify(marriageOptions));
    }, [
        marriageOptions
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarriageOptionsContext.Provider, {
        value: [
            marriageOptions,
            setMarriageOptions
        ],
        children: children
    });
};


/***/ }),

/***/ 8525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ exampleState),
/* harmony export */   "E": () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
    partners: [],
    witnesses: [],
    minWitnessPerPartner: 1,
    maxWitnessPerPartner: 2
};
const exampleState = {
    ...initialState,
    partnerInvitation: {
        name: "Sanne van den Broecke",
        email: "sanne.vandenbroecke@live.com"
    },
    partners: [
        {
            contact: {
                voornaam: "Anne Nico Johannes",
                achternaam: "Deursen"
            },
            _self: {
                id: "567EE1FC1C-A28A-43E7-8950-769E9"
            },
            id: "EC4D6AEF-0E23-4686-8778-71D2C02D7A38",
            name: "Anne Nico Johannes",
            "given-name": "Anne Nico Johannes",
            "family-name": "Deursen",
            "family-name-prefix": "",
            bday: "1988-06-10",
            bsn: "185001943",
            email: "anne.deursen@gmail.com",
            tel: "030 2434257",
            "postal-code": "3582JH",
            "house-number": "127",
            "house-number-letter": "",
            "house-number-suffix": "achterste voren",
            street: "Rubenslaan",
            "place-of-residence": "Utrecht",
            "place-of-birth": "Arnhem",
            nationality: "Nederlandse",
            "country-of-birth": "Nederland",
            salutation: "De heer",
            "indicatie-curateleregister": 0,
            "marital-status": "Ongehuwd en nooit gehuwd geweest"
        },
        {
            _self: {
                id: "567EE1FC1C-A28A-43E7-8950-769E9"
            },
            contact: {
                voornaam: "Sanne",
                achternaam: "Broecke"
            },
            id: "67EEFC1C-A28A-43E7-8950-76C289E905C7",
            name: "Sanne van den Broecke",
            "given-name": "Sanne",
            "family-name": "Broecke",
            "family-name-prefix": "van den",
            bday: "1988-10-13",
            bsn: "193341437",
            email: "sanne.vandenbroecke@live.com",
            tel: "06 27923411",
            "postal-code": "3582JH",
            "house-number": "127",
            "house-number-letter": "",
            "house-number-suffix": "achterste voren",
            street: "Rubenslaan",
            "place-of-residence": "Utrecht",
            "country-of-birth": "Nederland",
            "place-of-birth": "Apeldoorn",
            nationality: "Nederlandse",
            salutation: "Mevrouw",
            "indicatie-curateleregister": 0,
            "marital-status": "Ongehuwd en nooit gehuwd geweest",
            partner: true
        }
    ],
    reservation: {
        expiry: "FIXME: over 2 uur",
        "ceremony-type": "Eenvoudig huwelijk",
        "ceremony-start": "2021-04-14T09:00+01:00",
        "ceremony-end": "2021-04-14T09:10+01:00",
        "ceremony-location": "Locatie Stadskantoor",
        "ceremony-price-currency": "EUR",
        "ceremony-price-amount": "168"
    },
    "registration-type": "huwelijk",
    witnesses: [
        {
            id: "d79c67b8-fa97-49e8-b177-679594cb95c4",
            name: "Jip Schmidt",
            email: "jip@example.com"
        },
        {
            id: "2586fcba-fba0-4ca1-bb4c-a9b7fbbb1986",
            name: "Janneke Westendorp",
            email: "janneke@example.com"
        },
        {
            id: "410ee2cb-2c02-4d3a-afaf-69b45c03fde4",
            name: "Joost Jansen",
            email: "joost@example.com"
        },
        {
            id: "4b9fdbd9-ccf2-48c5-8157-cc7df7d697cc",
            name: "Judith Jongejan",
            email: "judith@example.com"
        }
    ],
    minWitnessBday: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString(),
    inviteWitnessEndDate: "2021-03-31T23:59:59+01:00",
    acceptWitnessEndDate: "2021-03-31T23:59:59+01:00",
    orderProductEndDate: "2021-03-31T23:59:59+01:00",
    canInviteWitnesses: true,
    canOrderProducts: true,
    cancelled: false,
    cancelable: true
};


/***/ })

};
;