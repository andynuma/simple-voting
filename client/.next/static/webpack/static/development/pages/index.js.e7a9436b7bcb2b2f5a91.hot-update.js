webpackHotUpdate("static/development/pages/index.js",{

/***/ "./web3/voters.js":
/*!************************!*\
  !*** ./web3/voters.js ***!
  \************************/
/*! exports provided: getOwnerInfo, setVoterAddr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerInfo", function() { return getOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVoterAddr", function() { return setVoterAddr; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getOwnerInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var storage, ownerProfile;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_1__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_2__);

          case 2:
            storage = _context.sent;
            _context.next = 5;
            return storage.ownerAddress;

          case 5:
            ownerProfile = _context.sent;
            return _context.abrupt("return", ownerProfile);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getOwnerInfo() {
    return _ref.apply(this, arguments);
  };
}();
var setVoterAddr =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(address) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return storage.setVoterAddr(address, {
              // ownerAddrを与えるべき or そのままエラーを出せば良いのか
              from: address[0]
            });

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function setVoterAddr(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.e7a9436b7bcb2b2f5a91.hot-update.js.map