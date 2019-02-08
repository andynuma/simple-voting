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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./artifacts/Vote.json":
/*!*****************************!*\
  !*** ./artifacts/Vote.json ***!
  \*****************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Vote","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3477ee2e"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"result","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3c594059"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c675eaa"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterAddressToCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd09be43a"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda58c7d9"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterToVote","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe6c6f004"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Create","type":"event","signature":"0xe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Send","type":"event","signature":"0x7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b10"},{"constant":false,"inputs":[{"name":"_vote","type":"string"}],"name":"createVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x13292a02"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cff0380"}],"bytecode":"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d4b806100a06000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313292a021461009e5780633477ee2e146100c75780633c594059146101045780633cff0380146101415780639c675eaa1461016c578063d09be43a14610197578063da58c7d9146101d4578063e6c6f00414610211578063f2fde38b1461024e575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c091908101906109d7565b610277565b005b3480156100d357600080fd5b506100ee60048036036100e99190810190610a18565b6103cc565b6040516100fb9190610b6a565b60405180910390f35b34801561011057600080fd5b5061012b60048036036101269190810190610a18565b610487565b6040516101389190610b6a565b60405180910390f35b34801561014d57600080fd5b50610156610542565b6040516101639190610b48565b60405180910390f35b34801561017857600080fd5b5061018161062b565b60405161018e9190610b12565b60405180910390f35b3480156101a357600080fd5b506101be60048036036101b991908101906109ae565b610650565b6040516101cb9190610b8c565b60405180910390f35b3480156101e057600080fd5b506101fb60048036036101f69190810190610a18565b610668565b6040516102089190610b12565b60405180910390f35b34801561021d57600080fd5b50610238600480360361023391908101906109ae565b6106a6565b6040516102459190610b6a565b60405180910390f35b34801561025a57600080fd5b50610275600480360361027091908101906109ae565b610756565b005b33600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908051906020019061031a92919061088b565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a803360405161034a9190610b2d565b60405180910390a1600582908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061038f92919061088b565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b10336040516103c09190610b2d565b60405180910390a15050565b6002818154811015156103db57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047f5780601f106104545761010080835404028352916020019161047f565b820191906000526020600020905b81548152906001019060200180831161046257829003601f168201915b505050505081565b60058181548110151561049657fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b60606005805480602002602001604051908101604052809291908181526020016000905b82821015610622578382906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060e5780601f106105e35761010080835404028352916020019161060e565b820191906000526020600020905b8154815290600101906020018083116105f157829003601f168201915b505050505081526020019060010190610566565b50505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60018181548110151561067757fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107b157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108cc57805160ff19168380011785556108fa565b828001600101855582156108fa579182015b828111156108f95782518255916020019190600101906108de565b5b509050610907919061090b565b5090565b61092d91905b80821115610929576000816000905550600101610911565b5090565b90565b600061093c8235610c6c565b905092915050565b600082601f830112151561095757600080fd5b813561096a61096582610bd4565b610ba7565b9150808252602083016020830185838301111561098657600080fd5b610991838284610cbe565b50505092915050565b60006109a68235610c7e565b905092915050565b6000602082840312156109c057600080fd5b60006109ce84828501610930565b91505092915050565b6000602082840312156109e957600080fd5b600082013567ffffffffffffffff811115610a0357600080fd5b610a0f84828501610944565b91505092915050565b600060208284031215610a2a57600080fd5b6000610a388482850161099a565b91505092915050565b610a4a81610c88565b82525050565b610a5981610c30565b82525050565b6000610a6a82610c0d565b80845260208401935083602082028501610a8385610c00565b60005b84811015610abc578383038852610a9e838351610acd565b9250610aa982610c23565b9150602088019750600181019050610a86565b508196508694505050505092915050565b6000610ad882610c18565b808452610aec816020860160208601610ccd565b610af581610d00565b602085010191505092915050565b610b0c81610c62565b82525050565b6000602082019050610b276000830184610a50565b92915050565b6000602082019050610b426000830184610a41565b92915050565b60006020820190508181036000830152610b628184610a5f565b905092915050565b60006020820190508181036000830152610b848184610acd565b905092915050565b6000602082019050610ba16000830184610b03565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610bca57600080fd5b8060405250919050565b600067ffffffffffffffff821115610beb57600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000610c3b82610c42565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c7782610c42565b9050919050565b6000819050919050565b6000610c9382610c9a565b9050919050565b6000610ca582610cac565b9050919050565b6000610cb782610c42565b9050919050565b82818337600083830152505050565b60005b83811015610ceb578082015181840152602081019050610cd0565b83811115610cfa576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820a3c8f22f1cd686f939ccc1890483d747943e57b480cfb482a875569fdd5e70516c6578706572696d656e74616cf50037","deployedBytecode":"0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313292a021461009e5780633477ee2e146100c75780633c594059146101045780633cff0380146101415780639c675eaa1461016c578063d09be43a14610197578063da58c7d9146101d4578063e6c6f00414610211578063f2fde38b1461024e575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c091908101906109d7565b610277565b005b3480156100d357600080fd5b506100ee60048036036100e99190810190610a18565b6103cc565b6040516100fb9190610b6a565b60405180910390f35b34801561011057600080fd5b5061012b60048036036101269190810190610a18565b610487565b6040516101389190610b6a565b60405180910390f35b34801561014d57600080fd5b50610156610542565b6040516101639190610b48565b60405180910390f35b34801561017857600080fd5b5061018161062b565b60405161018e9190610b12565b60405180910390f35b3480156101a357600080fd5b506101be60048036036101b991908101906109ae565b610650565b6040516101cb9190610b8c565b60405180910390f35b3480156101e057600080fd5b506101fb60048036036101f69190810190610a18565b610668565b6040516102089190610b12565b60405180910390f35b34801561021d57600080fd5b50610238600480360361023391908101906109ae565b6106a6565b6040516102459190610b6a565b60405180910390f35b34801561025a57600080fd5b50610275600480360361027091908101906109ae565b610756565b005b33600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908051906020019061031a92919061088b565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a803360405161034a9190610b2d565b60405180910390a1600582908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061038f92919061088b565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b10336040516103c09190610b2d565b60405180910390a15050565b6002818154811015156103db57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047f5780601f106104545761010080835404028352916020019161047f565b820191906000526020600020905b81548152906001019060200180831161046257829003601f168201915b505050505081565b60058181548110151561049657fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b60606005805480602002602001604051908101604052809291908181526020016000905b82821015610622578382906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060e5780601f106105e35761010080835404028352916020019161060e565b820191906000526020600020905b8154815290600101906020018083116105f157829003601f168201915b505050505081526020019060010190610566565b50505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60018181548110151561067757fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107b157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108cc57805160ff19168380011785556108fa565b828001600101855582156108fa579182015b828111156108f95782518255916020019190600101906108de565b5b509050610907919061090b565b5090565b61092d91905b80821115610929576000816000905550600101610911565b5090565b90565b600061093c8235610c6c565b905092915050565b600082601f830112151561095757600080fd5b813561096a61096582610bd4565b610ba7565b9150808252602083016020830185838301111561098657600080fd5b610991838284610cbe565b50505092915050565b60006109a68235610c7e565b905092915050565b6000602082840312156109c057600080fd5b60006109ce84828501610930565b91505092915050565b6000602082840312156109e957600080fd5b600082013567ffffffffffffffff811115610a0357600080fd5b610a0f84828501610944565b91505092915050565b600060208284031215610a2a57600080fd5b6000610a388482850161099a565b91505092915050565b610a4a81610c88565b82525050565b610a5981610c30565b82525050565b6000610a6a82610c0d565b80845260208401935083602082028501610a8385610c00565b60005b84811015610abc578383038852610a9e838351610acd565b9250610aa982610c23565b9150602088019750600181019050610a86565b508196508694505050505092915050565b6000610ad882610c18565b808452610aec816020860160208601610ccd565b610af581610d00565b602085010191505092915050565b610b0c81610c62565b82525050565b6000602082019050610b276000830184610a50565b92915050565b6000602082019050610b426000830184610a41565b92915050565b60006020820190508181036000830152610b628184610a5f565b905092915050565b60006020820190508181036000830152610b848184610acd565b905092915050565b6000602082019050610ba16000830184610b03565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610bca57600080fd5b8060405250919050565b600067ffffffffffffffff821115610beb57600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000610c3b82610c42565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c7782610c42565b9050919050565b6000819050919050565b6000610c9382610c9a565b9050919050565b6000610ca582610cac565b9050919050565b6000610cb782610c42565b9050919050565b82818337600083830152505050565b60005b83811015610ceb578082015181840152602081019050610cd0565b83811115610cfa576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820a3c8f22f1cd686f939ccc1890483d747943e57b480cfb482a875569fdd5e70516c6578706572696d656e74616cf50037","sourceMap":"90:1599:2:-;;;559:60;8:9:-1;5:2;;;30:1;27;20:12;5:2;559:60:2;238:10:1;226:9;;:22;;;;;;;;;;;;;;;;;;602:10:2;590:9;;:22;;;;;;;;;;;;;;;;;;90:1599;;;;;;","deployedSourceMap":"90:1599:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;841:571;;8:9:-1;5:2;;;30:1;27;20:12;5:2;841:571:2;;;;;;;;;;;;;;;;;;;190:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;190:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;418:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;418:22:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1418:269;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1418:269:2;;;;;;;;;;;;;;;;;;;;54:24:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:24:1;;;;;;;;;;;;;;;;;;;;338:53:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;338:53:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;143:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;143:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;253:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;253:47:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;261:288:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;261:288:1;;;;;;;;;;;;;;;;;;;841:571:2;898:10;1048:19;:31;1068:10;1048:31;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;1117:5;1091:11;:23;1103:10;1091:23;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1138:18;1145:10;1138:18;;;;;;;;;;;;;;;1355:6;1367:5;1355:18;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1355:18:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1389:16;1394:10;1389:16;;;;;;;;;;;;;;;841:571;;:::o;190:26::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;418:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1418:269::-;1460:15;1674:6;1667:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1418:269;:::o;54:24:1:-;;;;;;;;;;;;;:::o;338:53:2:-;;;;;;;;;;;;;;;;;:::o;143:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;253:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;261:288:1:-;137:9;;;;;;;;;;;123:23;;:10;:23;;;115:32;;;;;;;;414:9;;;;;;;;;;;400:23;;:10;:23;;;392:32;;;;;;;;507:1;486:23;;:9;:23;;;;478:32;;;;;;;;533:9;521;;:21;;;;;;;;;;;;;;;;;;261:288;:::o;90:1599:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:132;1637:45;1676:5;1637:45;;;1632:3;1625:58;1619:69;;;1695:110;1768:31;1793:5;1768:31;;;1763:3;1756:44;1750:55;;;1841:773;;1988:60;2042:5;1988:60;;;2066:6;2061:3;2054:19;2090:4;2085:3;2081:14;2074:21;;2138:3;2180:4;2172:6;2168:17;2163:3;2159:27;2206:62;2262:5;2206:62;;;2289:1;2274:301;2299:6;2296:1;2293:13;2274:301;;;2361:9;2355:4;2351:20;2346:3;2339:33;2387:70;2452:4;2443:6;2437:13;2387:70;;;2379:78;;2474:66;2533:6;2474:66;;;2464:76;;2563:4;2558:3;2554:14;2547:21;;2321:1;2318;2314:9;2309:14;;2274:301;;;2278:14;2588:4;2581:11;;2605:3;2598:10;;1967:647;;;;;;;;;2622:292;;2720:35;2749:5;2720:35;;;2772:6;2767:3;2760:19;2784:63;2840:6;2833:4;2828:3;2824:14;2817:4;2810:5;2806:16;2784:63;;;2879:29;2901:6;2879:29;;;2872:4;2867:3;2863:14;2859:50;2852:57;;2700:214;;;;;;2921:110;2994:31;3019:5;2994:31;;;2989:3;2982:44;2976:55;;;3038:193;;3146:2;3135:9;3131:18;3123:26;;3160:61;3218:1;3207:9;3203:17;3194:6;3160:61;;;3117:114;;;;;3238:209;;3354:2;3343:9;3339:18;3331:26;;3368:69;3434:1;3423:9;3419:17;3410:6;3368:69;;;3325:122;;;;;3454:365;;3624:2;3613:9;3609:18;3601:26;;3674:9;3668:4;3664:20;3660:1;3649:9;3645:17;3638:47;3699:110;3804:4;3795:6;3699:110;;;3691:118;;3595:224;;;;;3826:273;;3950:2;3939:9;3935:18;3927:26;;4000:9;3994:4;3990:20;3986:1;3975:9;3971:17;3964:47;4025:64;4084:4;4075:6;4025:64;;;4017:72;;3921:178;;;;;4106:193;;4214:2;4203:9;4199:18;4191:26;;4228:61;4286:1;4275:9;4271:17;4262:6;4228:61;;;4185:114;;;;;4306:256;;4368:2;4362:9;4352:19;;4406:4;4398:6;4394:17;4505:6;4493:10;4490:22;4469:18;4457:10;4454:34;4451:62;4448:2;;;4526:1;4523;4516:12;4448:2;4546:10;4542:2;4535:22;4346:216;;;;;4569:259;;4713:18;4705:6;4702:30;4699:2;;;4745:1;4742;4735:12;4699:2;4789:4;4785:9;4778:4;4770:6;4766:17;4762:33;4754:41;;4818:4;4812;4808:15;4800:23;;4636:192;;;;4837:127;;4952:4;4944:6;4940:17;4929:28;;4921:43;;;;4973:113;;5075:5;5069:12;5059:22;;5053:33;;;;5093:88;;5170:5;5164:12;5154:22;;5148:33;;;;5189:128;;5306:4;5298:6;5294:17;5283:28;;5276:41;;;;5325:105;;5394:31;5419:5;5394:31;;;5383:42;;5377:53;;;;5437:128;;5517:42;5510:5;5506:54;5495:65;;5489:76;;;;5572:79;;5641:5;5630:16;;5624:27;;;;5658:105;;5727:31;5752:5;5727:31;;;5716:42;;5710:53;;;;5770:79;;5839:5;5828:16;;5822:27;;;;5856:129;;5943:37;5974:5;5943:37;;;5930:50;;5924:61;;;;5992:121;;6071:37;6102:5;6071:37;;;6058:50;;6052:61;;;;6120:115;;6199:31;6224:5;6199:31;;;6186:44;;6180:55;;;;6243:145;6324:6;6319:3;6314;6301:30;6380:1;6371:6;6366:3;6362:16;6355:27;6294:94;;;;6397:268;6462:1;6469:101;6483:6;6480:1;6477:13;6469:101;;;6559:1;6554:3;6550:11;6544:18;6540:1;6535:3;6531:11;6524:39;6505:2;6502:1;6498:10;6493:15;;6469:101;;;6585:6;6582:1;6579:13;6576:2;;;6650:1;6641:6;6636:3;6632:16;6625:27;6576:2;6446:219;;;;;6673:97;;6761:2;6757:7;6752:2;6745:5;6741:14;6737:28;6727:38;;6721:49;;;","source":"pragma experimental ABIEncoderV2;\npragma solidity >0.4.99 <0.6.0;\n\nimport \"./Owned.sol\";\n\ncontract Vote is Owned{\n\n    // confirmed voters\n    address[] public voters;\n\n    // candidate\n    string[] public candidates;\n\n    // voterAddr => vote text\n    mapping (address => string)  public voterToVote;\n\n    // voterAddr => vote count\n    mapping (address => uint)  public voterAddressToCount;\n\n    //voting result\n    string[] public result;\n\n    // create vote event\n    event Create(address from);\n\n    // send vote event\n    event Send(address from);\n\n    constructor() public {\n        ownerAddr = msg.sender;\n    }\n\n    // one address has one ballot.\n    modifier onceVote(address _user) {\n        //TODO:テスト用にrequireを外しているので戻す事\n        // require(voterAddressToCount[_user] == 0);\n        _;\n    }\n\n    function createVote(string memory _vote) public onceVote(msg.sender){\n        //TODO:テスト用にrequireを外しているので戻す事\n        // require(voterAddressToCount[msg.sender] == 0);\n        voterAddressToCount[msg.sender]++;\n        voterToVote[msg.sender] = _vote;\n\n        emit Create(msg.sender);\n\n        //TODO:テスト用にrequireを外しているので戻す事\n        // require(voterAddressToCount[msg.sender] == 1);\n        // string memory myVote = voterToVote[msg.sender];\n        result.push(_vote);\n\n        emit Send(msg.sender);\n    }\n\n    function viewResult() view public returns(string[] memory){\n        //TODO:テストのためにコメントアウトしているのを戻すこと\n        // require(voterAddressToCount[msg.sender] == 1, \"You shold vote for view result.\");\n        return result;\n    }\n}","sourcePath":"/Users/andy/simple_evoting/contracts/Vote.sol","ast":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[203]},"id":204,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:2"},{"id":111,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"34:31:2"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":204,"sourceUnit":109,"src":"67:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"107:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"107:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":203,"linearizedBaseContracts":[203,108],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"voters","nodeType":"VariableDeclaration","scope":203,"src":"143:23:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":115,"name":"address","nodeType":"ElementaryTypeName","src":"143:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":116,"length":null,"nodeType":"ArrayTypeName","src":"143:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":120,"name":"candidates","nodeType":"VariableDeclaration","scope":203,"src":"190:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":118,"name":"string","nodeType":"ElementaryTypeName","src":"190:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":119,"length":null,"nodeType":"ArrayTypeName","src":"190:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":124,"name":"voterToVote","nodeType":"VariableDeclaration","scope":203,"src":"253:47:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"typeName":{"id":123,"keyType":{"id":121,"name":"address","nodeType":"ElementaryTypeName","src":"262:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"253:27:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"valueType":{"id":122,"name":"string","nodeType":"ElementaryTypeName","src":"273:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}}},"value":null,"visibility":"public"},{"constant":false,"id":128,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":203,"src":"338:53:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":127,"keyType":{"id":125,"name":"address","nodeType":"ElementaryTypeName","src":"347:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"338:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"358:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":131,"name":"result","nodeType":"VariableDeclaration","scope":203,"src":"418:22:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":129,"name":"string","nodeType":"ElementaryTypeName","src":"418:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":130,"length":null,"nodeType":"ArrayTypeName","src":"418:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":135,"name":"Create","nodeType":"EventDefinition","parameters":{"id":134,"nodeType":"ParameterList","parameters":[{"constant":false,"id":133,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":135,"src":"485:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":132,"name":"address","nodeType":"ElementaryTypeName","src":"485:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"484:14:2"},"src":"472:27:2"},{"anonymous":false,"documentation":null,"id":139,"name":"Send","nodeType":"EventDefinition","parameters":{"id":138,"nodeType":"ParameterList","parameters":[{"constant":false,"id":137,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":139,"src":"539:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":136,"name":"address","nodeType":"ElementaryTypeName","src":"539:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"538:14:2"},"src":"528:25:2"},{"body":{"id":147,"nodeType":"Block","src":"580:39:2","statements":[{"expression":{"argumentTypes":null,"id":145,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":142,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"590:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":143,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"602:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":144,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"602:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"590:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":146,"nodeType":"ExpressionStatement","src":"590:22:2"}]},"documentation":null,"id":148,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":140,"nodeType":"ParameterList","parameters":[],"src":"570:2:2"},"returnParameters":{"id":141,"nodeType":"ParameterList","parameters":[],"src":"580:0:2"},"scope":203,"src":"559:60:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":153,"nodeType":"Block","src":"693:142:2","statements":[{"id":152,"nodeType":"PlaceholderStatement","src":"827:1:2"}]},"documentation":null,"id":154,"name":"onceVote","nodeType":"ModifierDefinition","parameters":{"id":151,"nodeType":"ParameterList","parameters":[{"constant":false,"id":150,"name":"_user","nodeType":"VariableDeclaration","scope":154,"src":"678:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":149,"name":"address","nodeType":"ElementaryTypeName","src":"678:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"677:15:2"},"src":"660:175:2","visibility":"internal"},{"body":{"id":192,"nodeType":"Block","src":"909:503:2","statements":[{"expression":{"argumentTypes":null,"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1048:33:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":163,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1048:19:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":166,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":164,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1068:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":165,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1068:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1048:31:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":168,"nodeType":"ExpressionStatement","src":"1048:33:2"},{"expression":{"argumentTypes":null,"id":174,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":169,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":124,"src":"1091:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":172,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":170,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1103:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":171,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1103:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1091:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":173,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":156,"src":"1117:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1091:31:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":175,"nodeType":"ExpressionStatement","src":"1091:31:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":177,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1145:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1145:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":176,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":135,"src":"1138:6:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":179,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1138:18:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":180,"nodeType":"EmitStatement","src":"1133:23:2"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":184,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":156,"src":"1367:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":181,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1355:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":183,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1355:11:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":185,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1355:18:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"nodeType":"ExpressionStatement","src":"1355:18:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":188,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1394:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1394:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":187,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":139,"src":"1389:4:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1389:16:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":191,"nodeType":"EmitStatement","src":"1384:21:2"}]},"documentation":null,"id":193,"implemented":true,"kind":"function","modifiers":[{"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"898:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":160,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"898:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"id":161,"modifierName":{"argumentTypes":null,"id":158,"name":"onceVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"889:8:2","typeDescriptions":{"typeIdentifier":"t_modifier$_t_address_$","typeString":"modifier (address)"}},"nodeType":"ModifierInvocation","src":"889:20:2"}],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":157,"nodeType":"ParameterList","parameters":[{"constant":false,"id":156,"name":"_vote","nodeType":"VariableDeclaration","scope":193,"src":"861:19:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":155,"name":"string","nodeType":"ElementaryTypeName","src":"861:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"860:21:2"},"returnParameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"909:0:2"},"scope":203,"src":"841:571:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":201,"nodeType":"Block","src":"1476:211:2","statements":[{"expression":{"argumentTypes":null,"id":199,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1674:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"functionReturnParameters":198,"id":200,"nodeType":"Return","src":"1667:13:2"}]},"documentation":null,"id":202,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[],"src":"1437:2:2"},"returnParameters":{"id":198,"nodeType":"ParameterList","parameters":[{"constant":false,"id":197,"name":"","nodeType":"VariableDeclaration","scope":202,"src":"1460:15:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_string_memory_$dyn_memory_ptr","typeString":"string[]"},"typeName":{"baseType":{"id":195,"name":"string","nodeType":"ElementaryTypeName","src":"1460:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":196,"length":null,"nodeType":"ArrayTypeName","src":"1460:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"internal"}],"src":"1459:17:2"},"scope":203,"src":"1418:269:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":204,"src":"90:1599:2"}],"src":"0:1689:2"},"legacyAST":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[203]},"id":204,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:2"},{"id":111,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"34:31:2"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":204,"sourceUnit":109,"src":"67:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"107:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"107:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":203,"linearizedBaseContracts":[203,108],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"voters","nodeType":"VariableDeclaration","scope":203,"src":"143:23:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":115,"name":"address","nodeType":"ElementaryTypeName","src":"143:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":116,"length":null,"nodeType":"ArrayTypeName","src":"143:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":120,"name":"candidates","nodeType":"VariableDeclaration","scope":203,"src":"190:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":118,"name":"string","nodeType":"ElementaryTypeName","src":"190:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":119,"length":null,"nodeType":"ArrayTypeName","src":"190:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":124,"name":"voterToVote","nodeType":"VariableDeclaration","scope":203,"src":"253:47:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"typeName":{"id":123,"keyType":{"id":121,"name":"address","nodeType":"ElementaryTypeName","src":"262:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"253:27:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"valueType":{"id":122,"name":"string","nodeType":"ElementaryTypeName","src":"273:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}}},"value":null,"visibility":"public"},{"constant":false,"id":128,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":203,"src":"338:53:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":127,"keyType":{"id":125,"name":"address","nodeType":"ElementaryTypeName","src":"347:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"338:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"358:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":131,"name":"result","nodeType":"VariableDeclaration","scope":203,"src":"418:22:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":129,"name":"string","nodeType":"ElementaryTypeName","src":"418:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":130,"length":null,"nodeType":"ArrayTypeName","src":"418:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":135,"name":"Create","nodeType":"EventDefinition","parameters":{"id":134,"nodeType":"ParameterList","parameters":[{"constant":false,"id":133,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":135,"src":"485:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":132,"name":"address","nodeType":"ElementaryTypeName","src":"485:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"484:14:2"},"src":"472:27:2"},{"anonymous":false,"documentation":null,"id":139,"name":"Send","nodeType":"EventDefinition","parameters":{"id":138,"nodeType":"ParameterList","parameters":[{"constant":false,"id":137,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":139,"src":"539:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":136,"name":"address","nodeType":"ElementaryTypeName","src":"539:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"538:14:2"},"src":"528:25:2"},{"body":{"id":147,"nodeType":"Block","src":"580:39:2","statements":[{"expression":{"argumentTypes":null,"id":145,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":142,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"590:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":143,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"602:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":144,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"602:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"590:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":146,"nodeType":"ExpressionStatement","src":"590:22:2"}]},"documentation":null,"id":148,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":140,"nodeType":"ParameterList","parameters":[],"src":"570:2:2"},"returnParameters":{"id":141,"nodeType":"ParameterList","parameters":[],"src":"580:0:2"},"scope":203,"src":"559:60:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":153,"nodeType":"Block","src":"693:142:2","statements":[{"id":152,"nodeType":"PlaceholderStatement","src":"827:1:2"}]},"documentation":null,"id":154,"name":"onceVote","nodeType":"ModifierDefinition","parameters":{"id":151,"nodeType":"ParameterList","parameters":[{"constant":false,"id":150,"name":"_user","nodeType":"VariableDeclaration","scope":154,"src":"678:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":149,"name":"address","nodeType":"ElementaryTypeName","src":"678:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"677:15:2"},"src":"660:175:2","visibility":"internal"},{"body":{"id":192,"nodeType":"Block","src":"909:503:2","statements":[{"expression":{"argumentTypes":null,"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1048:33:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":163,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1048:19:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":166,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":164,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1068:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":165,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1068:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1048:31:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":168,"nodeType":"ExpressionStatement","src":"1048:33:2"},{"expression":{"argumentTypes":null,"id":174,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":169,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":124,"src":"1091:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":172,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":170,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1103:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":171,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1103:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1091:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":173,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":156,"src":"1117:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1091:31:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":175,"nodeType":"ExpressionStatement","src":"1091:31:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":177,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1145:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1145:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":176,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":135,"src":"1138:6:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":179,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1138:18:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":180,"nodeType":"EmitStatement","src":"1133:23:2"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":184,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":156,"src":"1367:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":181,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1355:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":183,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1355:11:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":185,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1355:18:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"nodeType":"ExpressionStatement","src":"1355:18:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":188,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"1394:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1394:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":187,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":139,"src":"1389:4:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1389:16:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":191,"nodeType":"EmitStatement","src":"1384:21:2"}]},"documentation":null,"id":193,"implemented":true,"kind":"function","modifiers":[{"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":218,"src":"898:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":160,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"898:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"id":161,"modifierName":{"argumentTypes":null,"id":158,"name":"onceVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"889:8:2","typeDescriptions":{"typeIdentifier":"t_modifier$_t_address_$","typeString":"modifier (address)"}},"nodeType":"ModifierInvocation","src":"889:20:2"}],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":157,"nodeType":"ParameterList","parameters":[{"constant":false,"id":156,"name":"_vote","nodeType":"VariableDeclaration","scope":193,"src":"861:19:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":155,"name":"string","nodeType":"ElementaryTypeName","src":"861:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"860:21:2"},"returnParameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"909:0:2"},"scope":203,"src":"841:571:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":201,"nodeType":"Block","src":"1476:211:2","statements":[{"expression":{"argumentTypes":null,"id":199,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1674:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"functionReturnParameters":198,"id":200,"nodeType":"Return","src":"1667:13:2"}]},"documentation":null,"id":202,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[],"src":"1437:2:2"},"returnParameters":{"id":198,"nodeType":"ParameterList","parameters":[{"constant":false,"id":197,"name":"","nodeType":"VariableDeclaration","scope":202,"src":"1460:15:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_string_memory_$dyn_memory_ptr","typeString":"string[]"},"typeName":{"baseType":{"id":195,"name":"string","nodeType":"ElementaryTypeName","src":"1460:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":196,"length":null,"nodeType":"ArrayTypeName","src":"1460:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"internal"}],"src":"1459:17:2"},"scope":203,"src":"1418:269:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":204,"src":"90:1599:2"}],"src":"0:1689:2"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xF2417037357b892fAfa677AF343e9cf4B25C3FB5","transactionHash":"0x4e9094cf38f087cbc3b83590f41b806e08198f7ff5a9466c1e489f576a0636ed"}},"schemaVersion":"3.0.0","updatedAt":"2019-02-08T00:01:22.921Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./components/createVote.js":
/*!**********************************!*\
  !*** ./components/createVote.js ***!
  \**********************************/
/*! exports provided: SetUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider */ "./components/provider.js");
/* harmony import */ var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json");
var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json", 1);

var _jsxFileName = "/Users/andy/simple_evoting/client/components/createVote.js";



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



var SetUserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetUserInfo, _React$Component);

  function SetUserInfo(props) {
    var _this;

    _classCallCheck(this, SetUserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetUserInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setName",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
        var storage, addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_4__);

              case 2:
                storage = _context.sent;
                _context.next = 5;
                return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

              case 5:
                addresses = _context.sent;
                _context.next = 8;
                return storage.createVote(name, {
                  from: addresses[0]
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setName = _this.setName.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.sendVote = this.sendVote.bind(this);

    return _this;
  }

  _createClass(SetUserInfo, [{
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  value: event.target.value
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("User was Created:" + this.state.value);
                event.preventDefault();
                _context3.next = 4;
                return this.setName(this.state.value);

              case 4:
                this.setState({
                  value: ""
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleSubmit(_x3) {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1007230343",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1007230343" + " " + "voterForm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-1007230343",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Please input your select:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-1007230343",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1007230343" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1007230343",
        css: ".btn.jsx-1007230343{margin:5px;color:white;display:inline-block;opacity:0.8;border-radius:4px;text-align:center;background-color:#239b76;}.btn.jsx-1007230343:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3NpbXBsZV9ldm90aW5nL2NsaWVudC9jb21wb25lbnRzL2NyZWF0ZVZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QixBQUdtQyxBQVVBLFVBQ2QsQ0FWZ0IsWUFDUyxxQkFDVCxZQUNNLGtCQUNBLGtCQUNPLHlCQUU3QiIsImZpbGUiOiIvVXNlcnMvYW5keS9zaW1wbGVfZXZvdGluZy9jbGllbnQvY29tcG9uZW50cy9jcmVhdGVWb3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4vcHJvdmlkZXInXG5pbXBvcnQgVm90ZSBmcm9tIFwiLi4vYXJ0aWZhY3RzL1ZvdGUuanNvblwiXG5cbmV4cG9ydCBjbGFzcyBTZXRVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTonJ307XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldE5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zZW5kVm90ZSA9IHRoaXMuc2VuZFZvdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXROYW1lID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFZvdGUpXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgICAgIGF3YWl0IHN0b3JhZ2UuY3JlYXRlVm90ZShuYW1lLHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIHdhcyBDcmVhdGVkOlwiICsgdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TmFtZSh0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZSA6IFwiXCJ9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInZvdGVyRm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBpbnB1dCB5b3VyIHNlbGVjdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnZhbHVlfSAqL31cbiAgICAgICAgICAgICAgICB7LyogPHA+e3RoaXMuc3RhdGUudmFsdWV9PC9wPiAqL31cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzliNzY7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZvdGVyRm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/andy/simple_evoting/client/components/createVote.js */",
        __self: this
      }));
    }
  }]);

  return SetUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/***/ }),

/***/ "./components/getOwnerInfo.js":
/*!************************************!*\
  !*** ./components/getOwnerInfo.js ***!
  \************************************/
/*! exports provided: GetOwnerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOwnerInfo", function() { return GetOwnerInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./components/provider.js");
/* harmony import */ var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json");
var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json", 1);

var _jsxFileName = "/Users/andy/simple_evoting/client/components/getOwnerInfo.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GetOwnerInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GetOwnerInfo, _React$Component);

  function GetOwnerInfo(props) {
    var _this;

    _classCallCheck(this, GetOwnerInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetOwnerInfo).call(this, props));
    _this.state = {
      ownerAddress: ""
    };
    return _this;
  }

  _createClass(GetOwnerInfo, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var storage, ownerProfile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

              case 2:
                storage = _context.sent;
                _context.next = 5;
                return storage.ownerAddr.call();

              case 5:
                ownerProfile = _context.sent;
                this.setState({
                  ownerAddress: ownerProfile
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Contract Owner address:    ", this.state.ownerAddress));
    }
  }]);

  return GetOwnerInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./components/provider.js":
/*!********************************!*\
  !*** ./components/provider.js ***!
  \********************************/
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

/***/ "./components/userInfo.js":
/*!********************************!*\
  !*** ./components/userInfo.js ***!
  \********************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./components/provider.js");

var _jsxFileName = "/Users/andy/simple_evoting/client/components/userInfo.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var UserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo(props) {
    var _this;

    _classCallCheck(this, UserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserInfo).call(this, props));
    _this.state = {
      userAddress: ""
    };
    _this.state = {
      userBalance: ""
    };
    return _this;
  }

  _createClass(UserInfo, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var addresses, balance, etherValue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 2:
                addresses = _context.sent;
                this.setState({
                  userAddress: addresses
                });
                _context.next = 6;
                return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getBalance(addresses[0]);

              case 6:
                balance = _context.sent;
                _context.next = 9;
                return web3.fromWei(balance, 'ether');

              case 9:
                etherValue = _context.sent;
                this.setState({
                  userBalance: etherValue
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Your Address :    ", this.state.userAddress), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Your Balance:   ", this.state.userBalance, " ETH"));
    }
  }]);

  return UserInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // export default UserInfo;

/***/ }),

/***/ "./components/viewResult.js":
/*!**********************************!*\
  !*** ./components/viewResult.js ***!
  \**********************************/
/*! exports provided: ViewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResult", function() { return ViewResult; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./components/provider.js");
/* harmony import */ var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json");
var _artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Vote.json */ "./artifacts/Vote.json", 1);

var _jsxFileName = "/Users/andy/simple_evoting/client/components/viewResult.js";


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



var ViewResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewResult, _React$Component);

  function ViewResult(props) {
    var _this;

    _classCallCheck(this, ViewResult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewResult).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, resultVoting;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

            case 2:
              storage = _context.sent;
              _context.next = 5;
              return storage.viewResult();

            case 5:
              resultVoting = _context.sent;
              // console.log("result",storage.result.call())
              console.log(resultVoting); // console.log(ownerProfile)

              console.log(_this.state.result);

              _this.setState({
                result: resultVoting
              }); //  これだと二次元配列ができてしまう
              // this.setState({
              //     result :  [...this.state.result, resultVoting]
              // })


              console.log(_this.state.result);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      result: []
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ViewResult, [{
    key: "render",
    value: function render() {
      var list = this.state.result.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, user);
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Get Result"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Result"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Ballots List"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, list));
    }
  }]);

  return ViewResult;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./pages/dapp.js":
/*!***********************!*\
  !*** ./pages/dapp.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_getOwnerInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getOwnerInfo */ "./components/getOwnerInfo.js");
/* harmony import */ var _components_createVote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createVote */ "./components/createVote.js");
/* harmony import */ var _components_viewResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/viewResult */ "./components/viewResult.js");
/* harmony import */ var _components_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/userInfo */ "./components/userInfo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/andy/simple_evoting/client/pages/dapp.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Dapp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dapp, _React$Component);

  function Dapp() {
    _classCallCheck(this, Dapp);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dapp).apply(this, arguments));
  }

  _createClass(Dapp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-420983311",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_getOwnerInfo__WEBPACK_IMPORTED_MODULE_2__["GetOwnerInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_createVote__WEBPACK_IMPORTED_MODULE_3__["SetUserInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "./result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("buttom", {
        className: "jsx-420983311" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "See the Result")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "420983311",
        css: ".btn.jsx-420983311{margin-top:90px;padding:8px 24px;color:white;display:inline-block;opacity:0.8;border-radius:4px;text-align:center;background-color:red;}.btn.jsx-420983311:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3NpbXBsZV9ldm90aW5nL2NsaWVudC9wYWdlcy9kYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFHZ0MsQUFXTCxVQUNkLE1BWHFCLGlCQUNMLFlBQ1MscUJBQ1QsWUFDTSxrQkFDQSxrQkFDRyxxQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2FuZHkvc2ltcGxlX2V2b3RpbmcvY2xpZW50L3BhZ2VzL2RhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRPd25lckluZm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRPd25lckluZm9cIjtcbmltcG9ydCB7IFNldFVzZXJJbmZvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlVm90ZVwiO1xuaW1wb3J0IHsgVmlld1Jlc3VsdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXdSZXN1bHRcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlckluZm9cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgRGFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxVc2VySW5mbyAvPlxuICAgICAgICAgICAgPEdldE93bmVySW5mbyAvPlxuICAgICAgICAgICAgPFNldFVzZXJJbmZvIC8+XG4gICAgICAgICAgICB7LyogPFZpZXdSZXN1bHQgLz4gKi99XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLi9yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbSBjbGFzc05hbWU9XCJidG5cIiA+U2VlIHRoZSBSZXN1bHQ8L2J1dHRvbT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo5MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFwcDsiXX0= */\n/*@ sourceURL=/Users/andy/simple_evoting/client/pages/dapp.js */",
        __self: this
      }));
    }
  }]);

  return Dapp;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dapp);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/dapp.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dapp.js */"./pages/dapp.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=dapp.js.map