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


/***/ })

};
;