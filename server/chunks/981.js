"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

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


/***/ })

};
;