"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ PageFooterTemplate)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/footer-data.ts
const footerData = [
    {
        theme: "utrecht-theme",
        content: [
            {
                title: "Telefoon",
                value: "14 030"
            },
            {
                title: "Adres",
                subItems: [
                    {
                        title: "Stadskantoor",
                        value: "Stadsplateau 1, 3521AZ"
                    }
                ]
            }
        ]
    },
    {
        theme: "leiden-theme",
        content: [
            {
                title: "Telefoon",
                value: "14 071"
            },
            {
                title: "Adres",
                subItems: [
                    {
                        title: "STADSKANTOOR",
                        value: "Bargelaan 190"
                    }
                ]
            }
        ]
    }
];

;// CONCATENATED MODULE: ./src/components/huwelijksplanner/PageFooterTemplate.tsx
/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */ 


const PageFooterTemplate = ()=>{
    const [data, setData] = external_react_.useState(footerData.find((data)=>data.theme === "utrecht-theme"));
    external_react_.useEffect(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("address", {
                className: "utrecht-page-footer__address utrecht-page-footer__address--reset-address",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "utrecht-heading-2 utrecht-heading-2--reset-h2",
                        children: "Gemeente Leiden"
                    }),
                    data && data?.content.map((item, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "utrecht-heading-3 utrecht-heading-3--distanced",
                                    children: item.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "utrecht-paragraph utrecht-paragraph--distanced",
                                    children: [
                                        item.title === "Telefoon" && /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: `tel:+31${item.value}`,
                                            className: "utrecht-link utrecht-link--telephone",
                                            children: item.value
                                        }),
                                        item.title !== "Telefoon" && !item.subItems && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: item.value
                                        }),
                                        item.title !== "Telefoon" && item.subItems && item.subItems.map((subItem, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                        children: subItem.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    subItem.value
                                                ]
                                            }, idx))
                                    ]
                                })
                            ]
                        }, idx))
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "utrecht-page-footer__navigation",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "utrecht-link-list utrecht-link-list--chevron",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "utrecht-link-list__item",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/contact/",
                                className: "utrecht-link",
                                children: "Meer contactinformatie"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "utrecht-link-list__item",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/over-deze-website",
                                className: "utrecht-link",
                                children: "Over deze website"
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 5428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PageHeaderTemplate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */ 

const PageHeaderTemplate = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_1__.Logo, {
                layoutClassName: "utrecht-page-header__logo",
                variant: "header"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_1__.LanguageToggleButtons, {
                headingLevel: 2,
                className: "utrecht-page-header__alternate-lang-nav"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_1__.HeaderDivider, {})
        ]
    });


/***/ })

};
;