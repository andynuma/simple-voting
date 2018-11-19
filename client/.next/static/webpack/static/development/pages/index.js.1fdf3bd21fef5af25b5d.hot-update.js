webpackHotUpdate("static/development/pages/index.js",{

/***/ "./web3/voters.js":
/*!************************!*\
  !*** ./web3/voters.js ***!
  \************************/
/*! exports provided: getOwnerInfo, createVote, sendVote, viewResult, CreateVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerInfo", function() { return getOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVote", function() { return createVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendVote", function() { return sendVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVote", function() { return CreateVote; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andy/simple_evoting/client/web3/voters.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var hexToString = web3__WEBPACK_IMPORTED_MODULE_4___default.a.utils.hexToString;
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
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context.sent;
            _context.next = 5;
            return storage.ownerAddr.call();

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
}(); // //function 型
// export const setVoterAddr = async(address) => {
//   const storage = await getInstance(Vote)
//   const addresses = await eth.getAccounts()
//   await storage.setVoterAddr(
//     //TODO:Ganacheにあるアカウントでは実行できるけど，テストネットのアカウントで実行する場合には
//     // 引数にaddressを入れて実行できるか不明
//     // address
//     addresses[2],
//   {
//      from:eth.accounts[0]
//   }
// )}
// export const test = async(value)  => {
//   const storage = await getInstance(Vote)
//   const addresses = await eth.getAccounts()
//   // console.log(eth.getAccounts())
//   const tx = await storage.test(
//     value,
//   {
//     from:addresses[0],
//   })
//   return tx
// }

var createVote =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(vote) {
    var storage, addresses;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context2.sent;
            _context2.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context2.sent;
            _context2.next = 8;
            return storage.createVote(vote, {
              from: addresses[0]
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createVote(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var sendVote =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var storage, addresses;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context3.sent;
            _context3.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context3.sent;
            _context3.next = 8;
            return storage.sendVote({
              from: addresses[0]
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function sendVote() {
    return _ref3.apply(this, arguments);
  };
}();
var viewResult =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var storage, addresses, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context4.sent;
            _context4.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context4.sent;
            _context4.next = 8;
            return storage.viewResult({
              from: addresses[0]
            });

          case 8:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function viewResult() {
    return _ref4.apply(this, arguments);
  };
}(); // export class SetVoterAddr extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value:''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   async handleChange(event){
//     this.setState({value:event.target.value});
//   }
//   async handleSubmit(event){
//     console.log("An address was submitted:" + this.state.value);
//     event.preventDefault();
//     await setVoterAddr(this.state.value)
//     // console.log(await test(this.state.value))
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Voter Address:
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     )
//   }
// }

var CreateVote =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateVote, _React$Component);

  function CreateVote(props) {
    var _this;

    _classCallCheck(this, CreateVote);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateVote).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CreateVote, [{
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.setState({
                  value: event.target.value
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function handleChange(_x2) {
        return _handleChange.apply(this, arguments);
      };
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log("Vote was Created:" + this.state.value);
                event.preventDefault();
                _context6.next = 4;
                return createVote(this.state.value);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function handleSubmit(_x3) {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Input your vote:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }));
    }
  }]);

  return CreateVote;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.1fdf3bd21fef5af25b5d.hot-update.js.map