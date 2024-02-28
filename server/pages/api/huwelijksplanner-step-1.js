"use strict";
(() => {
var exports = {};
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 4326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { initialState } from "../../src/data/huwelijksplanner-state";
function handler(req, res) {
    if (req.method === "POST") {
        // const newState = {
        //   ...initialState,
        //   "registration-type": req.body.type,
        // };
        res.redirect("/huwelijksplanner-step-2");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4326));
module.exports = __webpack_exports__;

})();