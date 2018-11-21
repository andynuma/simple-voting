module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var _web3_voters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3/voters */ "./web3/voters.js");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! domain */ "domain");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/andy/simple_evoting/client/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logUser",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var ownerInfo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_web3_voters__WEBPACK_IMPORTED_MODULE_4__["getOwnerInfo"])();

            case 2:
              ownerInfo = _context.sent;
              console.log(ownerInfo);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "SendVote",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_web3_voters__WEBPACK_IMPORTED_MODULE_4__["sendVote"])();

            case 2:
              console.log(_web3_voters__WEBPACK_IMPORTED_MODULE_4__["sendVote"]);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "viewResult",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_web3_voters__WEBPACK_IMPORTED_MODULE_4__["viewResult"])();

            case 2:
              result = _context3.sent;
              console.log(result); // console.log()

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var storage, ownerAddr, addresses, balance, etherValue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_web3_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

              case 2:
                storage = _context4.sent;
                console.log(storage);
                _context4.next = 6;
                return storage.ownerAddr.call();

              case 6:
                ownerAddr = _context4.sent;
                console.log("Owner Address : ", ownerAddr);
                _context4.next = 10;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 10:
                addresses = _context4.sent;
                console.log("Your address : ", addresses[0]);
                _context4.next = 14;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getBalance(addresses[0]);

              case 14:
                balance = _context4.sent;
                _context4.next = 17;
                return web3.fromWei(balance, 'ether');

              case 17:
                etherValue = _context4.sent;
                console.log("Your account balance :", etherValue, "ETH");

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.logUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Get Owner address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_voters__WEBPACK_IMPORTED_MODULE_4__["CreateVote"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.SendVote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "SendVote"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.viewResult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "View Result"));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./web3/artifacts/Vote.json":
/*!**********************************!*\
  !*** ./web3/artifacts/Vote.json ***!
  \**********************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"Vote","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"result","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterAddressToCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterToVote","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Send","type":"event"},{"constant":false,"inputs":[{"name":"_testAddr","type":"uint256"}],"name":"test","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_vote","type":"bytes"}],"name":"createVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sendVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610dd1806100a06000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806329e99f07146100a95780633356745f146100e65780633c5940591461010f5780633cff03801461014c5780633d229ae7146101775780639c675eaa1461018e578063d09be43a146101b9578063da58c7d9146101f6578063e6c6f00414610233578063f2fde38b14610270575b600080fd5b3480156100b557600080fd5b506100d060048036036100cb9190810190610b02565b610299565b6040516100dd9190610c4c565b60405180910390f35b3480156100f257600080fd5b5061010d60048036036101089190810190610ac1565b6102a3565b005b34801561011b57600080fd5b5061013660048036036101319190810190610b02565b6103ce565b6040516101439190610c2a565b60405180910390f35b34801561015857600080fd5b50610161610489565b60405161016e9190610c08565b60405180910390f35b34801561018357600080fd5b5061018c610572565b005b34801561019a57600080fd5b506101a3610715565b6040516101b09190610bed565b60405180910390f35b3480156101c557600080fd5b506101e060048036036101db9190810190610a98565b61073a565b6040516101ed9190610c4c565b60405180910390f35b34801561020257600080fd5b5061021d60048036036102189190810190610b02565b610752565b60405161022a9190610bed565b60405180910390f35b34801561023f57600080fd5b5061025a60048036036102559190810190610a98565b610790565b6040516102679190610c2a565b60405180910390f35b34801561027c57600080fd5b5061029760048036036102929190810190610a98565b610840565b005b6000819050919050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156102f157600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610393929190610975565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80336040516103c39190610bed565b60405180910390a150565b6004818154811015156103dd57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b505050505081565b60606004805480602002602001604051908101604052809291908181526020016000905b82821015610569578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105555780601f1061052a57610100808354040283529160200191610555565b820191906000526020600020905b81548152906001019060200180831161053857829003601f168201915b5050505050815260200190600101906104ad565b50505050905090565b60606001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156105c257600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106955780601f1061066a57610100808354040283529160200191610695565b820191906000526020600020905b81548152906001019060200180831161067857829003601f168201915b5050505050905060048190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906106d9929190610975565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b103360405161070a9190610bed565b60405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60018181548110151561076157fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108385780601f1061080d57610100808354040283529160200191610838565b820191906000526020600020905b81548152906001019060200180831161081b57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561089b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108f657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561093257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109b657805160ff19168380011785556109e4565b828001600101855582156109e4579182015b828111156109e35782518255916020019190600101906109c8565b5b5090506109f191906109f5565b5090565b610a1791905b80821115610a135760008160009055506001016109fb565b5090565b90565b6000610a268235610d1a565b905092915050565b600082601f8301121515610a4157600080fd5b8135610a54610a4f82610c94565b610c67565b91508082526020830160208301858383011115610a7057600080fd5b610a7b838284610d44565b50505092915050565b6000610a908235610d3a565b905092915050565b600060208284031215610aaa57600080fd5b6000610ab884828501610a1a565b91505092915050565b600060208284031215610ad357600080fd5b600082013567ffffffffffffffff811115610aed57600080fd5b610af984828501610a2e565b91505092915050565b600060208284031215610b1457600080fd5b6000610b2284828501610a84565b91505092915050565b610b3481610cf0565b82525050565b6000610b4582610ccd565b80845260208401935083602082028501610b5e85610cc0565b60005b84811015610b97578383038852610b79838351610ba8565b9250610b8482610ce3565b9150602088019750600181019050610b61565b508196508694505050505092915050565b6000610bb382610cd8565b808452610bc7816020860160208601610d53565b610bd081610d86565b602085010191505092915050565b610be781610d10565b82525050565b6000602082019050610c026000830184610b2b565b92915050565b60006020820190508181036000830152610c228184610b3a565b905092915050565b60006020820190508181036000830152610c448184610ba8565b905092915050565b6000602082019050610c616000830184610bde565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610c8a57600080fd5b8060405250919050565b600067ffffffffffffffff821115610cab57600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d71578082015181840152602081019050610d56565b83811115610d80576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820c27895d760d5ce94c0a087ee824cf794d184be45459b1686f0b0728601b8befe6c6578706572696d656e74616cf50037","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806329e99f07146100a95780633356745f146100e65780633c5940591461010f5780633cff03801461014c5780633d229ae7146101775780639c675eaa1461018e578063d09be43a146101b9578063da58c7d9146101f6578063e6c6f00414610233578063f2fde38b14610270575b600080fd5b3480156100b557600080fd5b506100d060048036036100cb9190810190610b02565b610299565b6040516100dd9190610c4c565b60405180910390f35b3480156100f257600080fd5b5061010d60048036036101089190810190610ac1565b6102a3565b005b34801561011b57600080fd5b5061013660048036036101319190810190610b02565b6103ce565b6040516101439190610c2a565b60405180910390f35b34801561015857600080fd5b50610161610489565b60405161016e9190610c08565b60405180910390f35b34801561018357600080fd5b5061018c610572565b005b34801561019a57600080fd5b506101a3610715565b6040516101b09190610bed565b60405180910390f35b3480156101c557600080fd5b506101e060048036036101db9190810190610a98565b61073a565b6040516101ed9190610c4c565b60405180910390f35b34801561020257600080fd5b5061021d60048036036102189190810190610b02565b610752565b60405161022a9190610bed565b60405180910390f35b34801561023f57600080fd5b5061025a60048036036102559190810190610a98565b610790565b6040516102679190610c2a565b60405180910390f35b34801561027c57600080fd5b5061029760048036036102929190810190610a98565b610840565b005b6000819050919050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156102f157600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610393929190610975565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80336040516103c39190610bed565b60405180910390a150565b6004818154811015156103dd57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b505050505081565b60606004805480602002602001604051908101604052809291908181526020016000905b82821015610569578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105555780601f1061052a57610100808354040283529160200191610555565b820191906000526020600020905b81548152906001019060200180831161053857829003601f168201915b5050505050815260200190600101906104ad565b50505050905090565b60606001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156105c257600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106955780601f1061066a57610100808354040283529160200191610695565b820191906000526020600020905b81548152906001019060200180831161067857829003601f168201915b5050505050905060048190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906106d9929190610975565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b103360405161070a9190610bed565b60405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60018181548110151561076157fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108385780601f1061080d57610100808354040283529160200191610838565b820191906000526020600020905b81548152906001019060200180831161081b57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561089b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108f657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561093257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109b657805160ff19168380011785556109e4565b828001600101855582156109e4579182015b828111156109e35782518255916020019190600101906109c8565b5b5090506109f191906109f5565b5090565b610a1791905b80821115610a135760008160009055506001016109fb565b5090565b90565b6000610a268235610d1a565b905092915050565b600082601f8301121515610a4157600080fd5b8135610a54610a4f82610c94565b610c67565b91508082526020830160208301858383011115610a7057600080fd5b610a7b838284610d44565b50505092915050565b6000610a908235610d3a565b905092915050565b600060208284031215610aaa57600080fd5b6000610ab884828501610a1a565b91505092915050565b600060208284031215610ad357600080fd5b600082013567ffffffffffffffff811115610aed57600080fd5b610af984828501610a2e565b91505092915050565b600060208284031215610b1457600080fd5b6000610b2284828501610a84565b91505092915050565b610b3481610cf0565b82525050565b6000610b4582610ccd565b80845260208401935083602082028501610b5e85610cc0565b60005b84811015610b97578383038852610b79838351610ba8565b9250610b8482610ce3565b9150602088019750600181019050610b61565b508196508694505050505092915050565b6000610bb382610cd8565b808452610bc7816020860160208601610d53565b610bd081610d86565b602085010191505092915050565b610be781610d10565b82525050565b6000602082019050610c026000830184610b2b565b92915050565b60006020820190508181036000830152610c228184610b3a565b905092915050565b60006020820190508181036000830152610c448184610ba8565b905092915050565b6000602082019050610c616000830184610bde565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610c8a57600080fd5b8060405250919050565b600067ffffffffffffffff821115610cab57600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d71578082015181840152602081019050610d56565b83811115610d80576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820c27895d760d5ce94c0a087ee824cf794d184be45459b1686f0b0728601b8befe6c6578706572696d656e74616cf50037","sourceMap":"83:1642:1:-;;;500:53;8:9:-1;5:2;;;30:1;27;20:12;5:2;500:53:1;231:10:0;219:9;;:22;;;;;;;;;;;;;;;;;;536:10:1;524:9;;:22;;;;;;;;;;;;;;;;;;83:1642;;;;;;","deployedSourceMap":"83:1642:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;938:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:83:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1027:344;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1027:344:1;;;;;;;;;;;;;;;;;;;360:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;360:21:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1643:80;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1643:80:1;;;;;;;;;;;;;;;;;;;;1377:260;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1377:260:1;;;;;;47:24:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;47:24:0;;;;;;;;;;;;;;;;;;;;280:53:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;280:53:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;136:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;136:23:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;196:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;196:46:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;254:296:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;254:296:0;;;;;;;;;;;;;;;;;;;938:83:1;983:4;1005:9;998:16;;938:83;;;:::o;1027:344::-;1176:1;1141:19;:31;1161:10;1141:31;;;;;;;;;;;;;;;;:36;1133:45;;;;;;;;1256:19;:31;1276:10;1256:31;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;1325:5;1299:11;:23;1311:10;1299:23;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1346:18;1353:10;1346:18;;;;;;;;;;;;;;;1027:344;:::o;360:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1643:80::-;1685:7;1710:6;1703:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1643:80;:::o;1377:260::-;1524:19;1512:1;1477:19;:31;1497:10;1477:31;;;;;;;;;;;;;;;;:36;1469:45;;;;;;;;1546:11;:23;1558:10;1546:23;;;;;;;;;;;;;;;1524:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1579:6;1591;1579:19;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1579:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1614:16;1619:10;1614:16;;;;;;;;;;;;;;;1377:260;:::o;47:24:0:-;;;;;;;;;;;;;:::o;280:53:1:-;;;;;;;;;;;;;;;;;:::o;136:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;196:46::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;254:296:0:-;130:9;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;407:9;;;;;;;;;;;393:23;;:10;:23;;;385:32;;;;;;;;508:1;487:23;;:9;:23;;;;479:32;;;;;;;;534:9;522;;:21;;;;;;;;;;;;;;;;;;254:296;:::o;83:1642:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:440;;232:3;225:4;217:6;213:17;209:27;202:35;199:2;;;250:1;247;240:12;199:2;287:6;274:20;309:64;324:48;365:6;324:48;;;309:64;;;300:73;;393:6;386:5;379:21;429:4;421:6;417:17;462:4;455:5;451:16;497:3;488:6;483:3;479:16;476:25;473:2;;;514:1;511;504:12;473:2;524:41;558:6;553:3;548;524:41;;;192:379;;;;;;;;579:118;;646:46;684:6;671:20;646:46;;;637:55;;631:66;;;;;704:241;;808:2;796:9;787:7;783:23;779:32;776:2;;;824:1;821;814:12;776:2;859:1;876:53;921:7;912:6;901:9;897:22;876:53;;;866:63;;838:97;770:175;;;;;952:345;;1065:2;1053:9;1044:7;1040:23;1036:32;1033:2;;;1081:1;1078;1071:12;1033:2;1144:1;1133:9;1129:17;1116:31;1167:18;1159:6;1156:30;1153:2;;;1199:1;1196;1189:12;1153:2;1219:62;1273:7;1264:6;1253:9;1249:22;1219:62;;;1209:72;;1095:192;1027:270;;;;;1304:241;;1408:2;1396:9;1387:7;1383:23;1379:32;1376:2;;;1424:1;1421;1414:12;1376:2;1459:1;1476:53;1521:7;1512:6;1501:9;1497:22;1476:53;;;1466:63;;1438:97;1370:175;;;;;1552:110;1625:31;1650:5;1625:31;;;1620:3;1613:44;1607:55;;;1696:766;;1841:59;1894:5;1841:59;;;1918:6;1913:3;1906:19;1942:4;1937:3;1933:14;1926:21;;1990:3;2032:4;2024:6;2020:17;2015:3;2011:27;2058:61;2113:5;2058:61;;;2140:1;2125:298;2150:6;2147:1;2144:13;2125:298;;;2212:9;2206:4;2202:20;2197:3;2190:33;2238:68;2301:4;2292:6;2286:13;2238:68;;;2230:76;;2323:65;2381:6;2323:65;;;2313:75;;2411:4;2406:3;2402:14;2395:21;;2172:1;2169;2165:9;2160:14;;2125:298;;;2129:14;2436:4;2429:11;;2453:3;2446:10;;1820:642;;;;;;;;;2470:289;;2566:34;2594:5;2566:34;;;2617:6;2612:3;2605:19;2629:63;2685:6;2678:4;2673:3;2669:14;2662:4;2655:5;2651:16;2629:63;;;2724:29;2746:6;2724:29;;;2717:4;2712:3;2708:14;2704:50;2697:57;;2546:213;;;;;;2766:110;2839:31;2864:5;2839:31;;;2834:3;2827:44;2821:55;;;2883:193;;2991:2;2980:9;2976:18;2968:26;;3005:61;3063:1;3052:9;3048:17;3039:6;3005:61;;;2962:114;;;;;3083:361;;3251:2;3240:9;3236:18;3228:26;;3301:9;3295:4;3291:20;3287:1;3276:9;3272:17;3265:47;3326:108;3429:4;3420:6;3326:108;;;3318:116;;3222:222;;;;;3451:269;;3573:2;3562:9;3558:18;3550:26;;3623:9;3617:4;3613:20;3609:1;3598:9;3594:17;3587:47;3648:62;3705:4;3696:6;3648:62;;;3640:70;;3544:176;;;;;3727:193;;3835:2;3824:9;3820:18;3812:26;;3849:61;3907:1;3896:9;3892:17;3883:6;3849:61;;;3806:114;;;;;3927:256;;3989:2;3983:9;3973:19;;4027:4;4019:6;4015:17;4126:6;4114:10;4111:22;4090:18;4078:10;4075:34;4072:62;4069:2;;;4147:1;4144;4137:12;4069:2;4167:10;4163:2;4156:22;3967:216;;;;;4190:258;;4333:18;4325:6;4322:30;4319:2;;;4365:1;4362;4355:12;4319:2;4409:4;4405:9;4398:4;4390:6;4386:17;4382:33;4374:41;;4438:4;4432;4428:15;4420:23;;4256:192;;;;4457:126;;4571:4;4563:6;4559:17;4548:28;;4540:43;;;;4592:112;;4693:5;4687:12;4677:22;;4671:33;;;;4711:87;;4787:5;4781:12;4771:22;;4765:33;;;;4806:127;;4922:4;4914:6;4910:17;4899:28;;4892:41;;;;4941:128;;5021:42;5014:5;5010:54;4999:65;;4993:76;;;;5076:79;;5145:5;5134:16;;5128:27;;;;5162:128;;5242:42;5235:5;5231:54;5220:65;;5214:76;;;;5297:79;;5366:5;5355:16;;5349:27;;;;5384:145;5465:6;5460:3;5455;5442:30;5521:1;5512:6;5507:3;5503:16;5496:27;5435:94;;;;5538:268;5603:1;5610:101;5624:6;5621:1;5618:13;5610:101;;;5700:1;5695:3;5691:11;5685:18;5681:1;5676:3;5672:11;5665:39;5646:2;5643:1;5639:10;5634:15;;5610:101;;;5726:6;5723:1;5720:13;5717:2;;;5791:1;5782:6;5777:3;5773:16;5766:27;5717:2;5587:219;;;;;5814:97;;5902:2;5898:7;5893:2;5886:5;5882:14;5878:28;5868:38;;5862:49;;;","source":"pragma experimental ABIEncoderV2;\npragma solidity ^0.4.19;\n\nimport \"./Owned.sol\";\n\ncontract Vote is Owned{\n\n    // confirmed voters\n    address[] public voters;\n\n    // voterAddr => vote text\n    mapping (address => bytes)  public voterToVote;\n\n    // voterAddr => vote count\n    mapping (address => uint)  public voterAddressToCount;\n\n    //voting result\n    bytes[] public result;\n\n    // create vote event\n    event Create(address from);\n\n    // send vote event\n    event Send(address from);\n\n    constructor() {\n        ownerAddr = msg.sender;\n    }\n\n    // function setVoterAddr(address _voterAddr) public onlyOwner{\n    //     voters.push(_voterAddr);\n    // }\n\n    // function checkVoterAddr(address _voterAddr) public returns(bool){\n    //     for(uint i = 0; i < voters.length; i++){\n    //         if(voters[i] == _voterAddr){\n    //             return true;\n    //         }\n    //     }\n    //     return false;\n    // }\n\n    function test(uint _testAddr) public returns(uint){\n        return _testAddr;\n    }\n\n    function createVote(bytes _vote) public {\n        // require(checkVoterAddr(msg.sender) == true);\n        require(voterAddressToCount[msg.sender] == 0);\n        //TODO:voterCountをインクリメントする必要ある\n        voterAddressToCount[msg.sender]++;\n        voterToVote[msg.sender] = _vote;\n\n        emit Create(msg.sender);\n    }\n\n    function sendVote() public{\n        // require(checkVoterAddr(msg.sender) == true);\n        require(voterAddressToCount[msg.sender] == 1);\n        bytes memory myVote = voterToVote[msg.sender];\n        result.push(myVote);\n\n        emit Send(msg.sender);\n    }\n\n    function viewResult() view public returns(bytes[]){\n        return result;\n    }\n}","sourcePath":"/Users/andy/simple_evoting/contracts/Vote.sol","ast":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[172]},"id":173,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:1"},{"id":54,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"34:24:1"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":173,"sourceUnit":52,"src":"60:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"100:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"100:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":172,"linearizedBaseContracts":[172,51],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"voters","nodeType":"VariableDeclaration","scope":172,"src":"136:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":58,"name":"address","nodeType":"ElementaryTypeName","src":"136:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":59,"length":null,"nodeType":"ArrayTypeName","src":"136:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":64,"name":"voterToVote","nodeType":"VariableDeclaration","scope":172,"src":"196:46:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes)"},"typeName":{"id":63,"keyType":{"id":61,"name":"address","nodeType":"ElementaryTypeName","src":"205:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"196:26:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes)"},"valueType":{"id":62,"name":"bytes","nodeType":"ElementaryTypeName","src":"216:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}}},"value":null,"visibility":"public"},{"constant":false,"id":68,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":172,"src":"280:53:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":67,"keyType":{"id":65,"name":"address","nodeType":"ElementaryTypeName","src":"289:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"280:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":66,"name":"uint","nodeType":"ElementaryTypeName","src":"300:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":71,"name":"result","nodeType":"VariableDeclaration","scope":172,"src":"360:21:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes[]"},"typeName":{"baseType":{"id":69,"name":"bytes","nodeType":"ElementaryTypeName","src":"360:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"id":70,"length":null,"nodeType":"ArrayTypeName","src":"360:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage_ptr","typeString":"bytes[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":75,"name":"Create","nodeType":"EventDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":75,"src":"426:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"426:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"425:14:1"},"src":"413:27:1"},{"anonymous":false,"documentation":null,"id":79,"name":"Send","nodeType":"EventDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":77,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":79,"src":"480:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":76,"name":"address","nodeType":"ElementaryTypeName","src":"480:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"479:14:1"},"src":"469:25:1"},{"body":{"id":87,"nodeType":"Block","src":"514:39:1","statements":[{"expression":{"argumentTypes":null,"id":85,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":82,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"524:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":83,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"536:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"536:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"524:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":86,"nodeType":"ExpressionStatement","src":"524:22:1"}]},"documentation":null,"id":88,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"511:2:1"},"payable":false,"returnParameters":{"id":81,"nodeType":"ParameterList","parameters":[],"src":"514:0:1"},"scope":172,"src":"500:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":97,"nodeType":"Block","src":"988:33:1","statements":[{"expression":{"argumentTypes":null,"id":95,"name":"_testAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"1005:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":94,"id":96,"nodeType":"Return","src":"998:16:1"}]},"documentation":null,"id":98,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"test","nodeType":"FunctionDefinition","parameters":{"id":91,"nodeType":"ParameterList","parameters":[{"constant":false,"id":90,"name":"_testAddr","nodeType":"VariableDeclaration","scope":98,"src":"952:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":89,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:16:1"},"payable":false,"returnParameters":{"id":94,"nodeType":"ParameterList","parameters":[{"constant":false,"id":93,"name":"","nodeType":"VariableDeclaration","scope":98,"src":"983:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":92,"name":"uint","nodeType":"ElementaryTypeName","src":"983:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"982:6:1"},"scope":172,"src":"938:83:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":130,"nodeType":"Block","src":"1067:304:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":104,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1141:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":107,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":105,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1161:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":106,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1161:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1141:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":108,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1176:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1141:36:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":103,"name":"require","nodeType":"Identifier","overloadedDeclarations":[190,191],"referencedDeclaration":190,"src":"1133:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":110,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1133:45:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":111,"nodeType":"ExpressionStatement","src":"1133:45:1"},{"expression":{"argumentTypes":null,"id":116,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1256:33:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":112,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1256:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":115,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":113,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1276:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":114,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1276:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1256:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":117,"nodeType":"ExpressionStatement","src":"1256:33:1"},{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":118,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"1299:11:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes storage ref)"}},"id":121,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":119,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1311:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":120,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1311:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1299:23:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":122,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":100,"src":"1325:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}},"src":"1299:31:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"id":124,"nodeType":"ExpressionStatement","src":"1299:31:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":126,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1353:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1353:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":125,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":75,"src":"1346:6:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1346:18:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":129,"nodeType":"EmitStatement","src":"1341:23:1"}]},"documentation":null,"id":131,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":101,"nodeType":"ParameterList","parameters":[{"constant":false,"id":100,"name":"_vote","nodeType":"VariableDeclaration","scope":131,"src":"1047:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":99,"name":"bytes","nodeType":"ElementaryTypeName","src":"1047:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"1046:13:1"},"payable":false,"returnParameters":{"id":102,"nodeType":"ParameterList","parameters":[],"src":"1067:0:1"},"scope":172,"src":"1027:344:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":161,"nodeType":"Block","src":"1403:234:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":140,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":135,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1477:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":138,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":136,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1497:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1497:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1477:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"31","id":139,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1512:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1477:36:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":134,"name":"require","nodeType":"Identifier","overloadedDeclarations":[190,191],"referencedDeclaration":190,"src":"1469:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":141,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1469:45:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":142,"nodeType":"ExpressionStatement","src":"1469:45:1"},{"assignments":[144],"declarations":[{"constant":false,"id":144,"name":"myVote","nodeType":"VariableDeclaration","scope":162,"src":"1524:19:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":143,"name":"bytes","nodeType":"ElementaryTypeName","src":"1524:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"id":149,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":145,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"1546:11:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes storage ref)"}},"id":148,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":146,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1558:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1558:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1546:23:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1524:45:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":153,"name":"myVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1591:6:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}],"expression":{"argumentTypes":null,"id":150,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":71,"src":"1579:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes storage ref[] storage ref"}},"id":152,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1579:11:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_bytes_storage_$returns$_t_uint256_$","typeString":"function (bytes storage ref) returns (uint256)"}},"id":154,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1579:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":155,"nodeType":"ExpressionStatement","src":"1579:19:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":157,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1619:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1619:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":156,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1614:4:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":159,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1614:16:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":160,"nodeType":"EmitStatement","src":"1609:21:1"}]},"documentation":null,"id":162,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendVote","nodeType":"FunctionDefinition","parameters":{"id":132,"nodeType":"ParameterList","parameters":[],"src":"1394:2:1"},"payable":false,"returnParameters":{"id":133,"nodeType":"ParameterList","parameters":[],"src":"1403:0:1"},"scope":172,"src":"1377:260:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":170,"nodeType":"Block","src":"1693:30:1","statements":[{"expression":{"argumentTypes":null,"id":168,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":71,"src":"1710:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes storage ref[] storage ref"}},"functionReturnParameters":167,"id":169,"nodeType":"Return","src":"1703:13:1"}]},"documentation":null,"id":171,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":163,"nodeType":"ParameterList","parameters":[],"src":"1662:2:1"},"payable":false,"returnParameters":{"id":167,"nodeType":"ParameterList","parameters":[{"constant":false,"id":166,"name":"","nodeType":"VariableDeclaration","scope":171,"src":"1685:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_memory_$dyn_memory_ptr","typeString":"bytes[]"},"typeName":{"baseType":{"id":164,"name":"bytes","nodeType":"ElementaryTypeName","src":"1685:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"id":165,"length":null,"nodeType":"ArrayTypeName","src":"1685:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage_ptr","typeString":"bytes[]"}},"value":null,"visibility":"internal"}],"src":"1684:9:1"},"scope":172,"src":"1643:80:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":173,"src":"83:1642:1"}],"src":"0:1725:1"},"legacyAST":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[172]},"id":173,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:1"},{"id":54,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"34:24:1"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":173,"sourceUnit":52,"src":"60:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"100:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"100:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":172,"linearizedBaseContracts":[172,51],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"voters","nodeType":"VariableDeclaration","scope":172,"src":"136:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":58,"name":"address","nodeType":"ElementaryTypeName","src":"136:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":59,"length":null,"nodeType":"ArrayTypeName","src":"136:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":64,"name":"voterToVote","nodeType":"VariableDeclaration","scope":172,"src":"196:46:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes)"},"typeName":{"id":63,"keyType":{"id":61,"name":"address","nodeType":"ElementaryTypeName","src":"205:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"196:26:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes)"},"valueType":{"id":62,"name":"bytes","nodeType":"ElementaryTypeName","src":"216:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}}},"value":null,"visibility":"public"},{"constant":false,"id":68,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":172,"src":"280:53:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":67,"keyType":{"id":65,"name":"address","nodeType":"ElementaryTypeName","src":"289:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"280:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":66,"name":"uint","nodeType":"ElementaryTypeName","src":"300:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":71,"name":"result","nodeType":"VariableDeclaration","scope":172,"src":"360:21:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes[]"},"typeName":{"baseType":{"id":69,"name":"bytes","nodeType":"ElementaryTypeName","src":"360:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"id":70,"length":null,"nodeType":"ArrayTypeName","src":"360:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage_ptr","typeString":"bytes[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":75,"name":"Create","nodeType":"EventDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":75,"src":"426:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"426:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"425:14:1"},"src":"413:27:1"},{"anonymous":false,"documentation":null,"id":79,"name":"Send","nodeType":"EventDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":77,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":79,"src":"480:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":76,"name":"address","nodeType":"ElementaryTypeName","src":"480:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"479:14:1"},"src":"469:25:1"},{"body":{"id":87,"nodeType":"Block","src":"514:39:1","statements":[{"expression":{"argumentTypes":null,"id":85,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":82,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"524:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":83,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"536:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"536:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"524:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":86,"nodeType":"ExpressionStatement","src":"524:22:1"}]},"documentation":null,"id":88,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"511:2:1"},"payable":false,"returnParameters":{"id":81,"nodeType":"ParameterList","parameters":[],"src":"514:0:1"},"scope":172,"src":"500:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":97,"nodeType":"Block","src":"988:33:1","statements":[{"expression":{"argumentTypes":null,"id":95,"name":"_testAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"1005:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":94,"id":96,"nodeType":"Return","src":"998:16:1"}]},"documentation":null,"id":98,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"test","nodeType":"FunctionDefinition","parameters":{"id":91,"nodeType":"ParameterList","parameters":[{"constant":false,"id":90,"name":"_testAddr","nodeType":"VariableDeclaration","scope":98,"src":"952:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":89,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:16:1"},"payable":false,"returnParameters":{"id":94,"nodeType":"ParameterList","parameters":[{"constant":false,"id":93,"name":"","nodeType":"VariableDeclaration","scope":98,"src":"983:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":92,"name":"uint","nodeType":"ElementaryTypeName","src":"983:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"982:6:1"},"scope":172,"src":"938:83:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":130,"nodeType":"Block","src":"1067:304:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":104,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1141:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":107,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":105,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1161:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":106,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1161:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1141:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":108,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1176:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1141:36:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":103,"name":"require","nodeType":"Identifier","overloadedDeclarations":[190,191],"referencedDeclaration":190,"src":"1133:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":110,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1133:45:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":111,"nodeType":"ExpressionStatement","src":"1133:45:1"},{"expression":{"argumentTypes":null,"id":116,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1256:33:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":112,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1256:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":115,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":113,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1276:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":114,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1276:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1256:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":117,"nodeType":"ExpressionStatement","src":"1256:33:1"},{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":118,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"1299:11:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes storage ref)"}},"id":121,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":119,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1311:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":120,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1311:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1299:23:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":122,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":100,"src":"1325:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}},"src":"1299:31:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"id":124,"nodeType":"ExpressionStatement","src":"1299:31:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":126,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1353:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1353:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":125,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":75,"src":"1346:6:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1346:18:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":129,"nodeType":"EmitStatement","src":"1341:23:1"}]},"documentation":null,"id":131,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":101,"nodeType":"ParameterList","parameters":[{"constant":false,"id":100,"name":"_vote","nodeType":"VariableDeclaration","scope":131,"src":"1047:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":99,"name":"bytes","nodeType":"ElementaryTypeName","src":"1047:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"1046:13:1"},"payable":false,"returnParameters":{"id":102,"nodeType":"ParameterList","parameters":[],"src":"1067:0:1"},"scope":172,"src":"1027:344:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":161,"nodeType":"Block","src":"1403:234:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":140,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":135,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"1477:19:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":138,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":136,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1497:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1497:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1477:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"31","id":139,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1512:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1477:36:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":134,"name":"require","nodeType":"Identifier","overloadedDeclarations":[190,191],"referencedDeclaration":190,"src":"1469:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":141,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1469:45:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":142,"nodeType":"ExpressionStatement","src":"1469:45:1"},{"assignments":[144],"declarations":[{"constant":false,"id":144,"name":"myVote","nodeType":"VariableDeclaration","scope":162,"src":"1524:19:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":143,"name":"bytes","nodeType":"ElementaryTypeName","src":"1524:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"id":149,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":145,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"1546:11:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bytes_storage_$","typeString":"mapping(address => bytes storage ref)"}},"id":148,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":146,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1558:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1558:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1546:23:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage","typeString":"bytes storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1524:45:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":153,"name":"myVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1591:6:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}],"expression":{"argumentTypes":null,"id":150,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":71,"src":"1579:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes storage ref[] storage ref"}},"id":152,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1579:11:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_bytes_storage_$returns$_t_uint256_$","typeString":"function (bytes storage ref) returns (uint256)"}},"id":154,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1579:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":155,"nodeType":"ExpressionStatement","src":"1579:19:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":157,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1619:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1619:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":156,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1614:4:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":159,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1614:16:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":160,"nodeType":"EmitStatement","src":"1609:21:1"}]},"documentation":null,"id":162,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendVote","nodeType":"FunctionDefinition","parameters":{"id":132,"nodeType":"ParameterList","parameters":[],"src":"1394:2:1"},"payable":false,"returnParameters":{"id":133,"nodeType":"ParameterList","parameters":[],"src":"1403:0:1"},"scope":172,"src":"1377:260:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":170,"nodeType":"Block","src":"1693:30:1","statements":[{"expression":{"argumentTypes":null,"id":168,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":71,"src":"1710:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage","typeString":"bytes storage ref[] storage ref"}},"functionReturnParameters":167,"id":169,"nodeType":"Return","src":"1703:13:1"}]},"documentation":null,"id":171,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":163,"nodeType":"ParameterList","parameters":[],"src":"1662:2:1"},"payable":false,"returnParameters":{"id":167,"nodeType":"ParameterList","parameters":[{"constant":false,"id":166,"name":"","nodeType":"VariableDeclaration","scope":171,"src":"1685:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_memory_$dyn_memory_ptr","typeString":"bytes[]"},"typeName":{"baseType":{"id":164,"name":"bytes","nodeType":"ElementaryTypeName","src":"1685:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"id":165,"length":null,"nodeType":"ArrayTypeName","src":"1685:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes_storage_$dyn_storage_ptr","typeString":"bytes[]"}},"value":null,"visibility":"internal"}],"src":"1684:9:1"},"scope":172,"src":"1643:80:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":173,"src":"83:1642:1"}],"src":"0:1725:1"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xc6b11db40a46f73c049cac3e564e1fd207f49a4f","transactionHash":"0xf6d6df8adb1462c64d3329d9a855c2ebe13d572c397cbd6088a57fb72956effc"}},"schemaVersion":"2.0.1","updatedAt":"2018-11-21T04:40:39.808Z"};

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/*! exports provided: getInstance, eth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eth", function() { return eth; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! truffle-contract */ "truffle-contract");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_1__);


var getInstance = function getInstance(artifact) {
  var contractObj = truffle_contract__WEBPACK_IMPORTED_MODULE_1___default()(artifact);
  contractObj.setProvider(provider());
  return contractObj.deployed();
};

var provider = function provider() {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider;
  } else {
    console.error("You need to install MetaMask for this app to work!");
  }
};

var eth = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider()).eth;

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
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
}();
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
}();
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
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Input your vote:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }));
    }
  }]);

  return CreateVote;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // ボタンを押したら，投票結果(result)を表示させたい
// export class ViewResult extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value:["a"]};
//     this.setResult = this.setResult.bind(this);
//   }
//   viewResult = async() => {
//     const storage = await getInstance(Vote)
//     const addresses = await eth.getAccounts()
//     const result =  await storage.viewResult({from:addresses[0]})
//     return result
//   }
//   setResult(){
//     // this.setState.value = this.viewResult()
//     this.setState({ value: this.viewResult() })
//     console.log(this.state.value)
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.setResult}>
//           View Result
//         </button>
//       </div>
//     )
//   }
// }

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("domain");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "truffle-contract":
/*!***********************************!*\
  !*** external "truffle-contract" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map