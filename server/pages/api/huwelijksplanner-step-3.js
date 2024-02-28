"use strict";
(() => {
var exports = {};
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 5090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    if (req.method === "POST") {
        res.redirect("/digid?redirect-to=/huwelijksplanner-step-4");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5090));
module.exports = __webpack_exports__;

})();