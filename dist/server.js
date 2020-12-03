/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/pupRouter/index.ts":
/*!***************************************!*\
  !*** ./src/server/pupRouter/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\r\nvar router = express.Router();\r\nrouter.get(\"/\", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var browser, USERNAME, PASSWORD, page, data, numItems, iterations, currentMonthShip, shipStatus, TempCurrentMonthShip, lastMonthShip, shipStatus, TempLastMonthShip, currentMonthSoldFor, shipStatus, _a, _b, lastMonthSoldFor, shipStatus, _c, _d, e_1;\r\n    return __generator(this, function (_e) {\r\n        switch (_e.label) {\r\n            case 0:\r\n                _e.trys.push([0, 45, , 46]);\r\n                return [4 /*yield*/, puppeteer.launch({\r\n                        args: ['--no-sandbox', '--disable-setuid-sandbox'],\r\n                        headless: false,\r\n                        executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',\r\n                    })];\r\n            case 1:\r\n                browser = _e.sent();\r\n                USERNAME = \"PUT YOUR USERNAME HERE\";\r\n                PASSWORD = \"PUT YOUR PASSWORD HERE\";\r\n                return [4 /*yield*/, browser.newPage()];\r\n            case 2:\r\n                page = _e.sent();\r\n                return [4 /*yield*/, page.goto(\"https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&SortOrder=DESCEND&NewPeriod=CurrentMonth&&searchText=&Column=DATE_PURCHASED&pg=1&CurrentPage=LabelManagement&searchBy=NONE&COUNT=100&guest=1\", {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 3:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.waitFor(15000)];\r\n            case 4:\r\n                _e.sent();\r\n                data = {\r\n                    currentMonthShip: 0,\r\n                    currentMonthItems: 0,\r\n                    lastMonthItems: 0,\r\n                    lastMonthShip: 0,\r\n                    currentMonthSoldFor: 0,\r\n                    lastMonthSoldFor: 0,\r\n                    index: []\r\n                };\r\n                //LOGIN\r\n                return [4 /*yield*/, page.waitFor('#signin-form > div:nth-child(1) > div > div > label')];\r\n            case 5:\r\n                //LOGIN\r\n                _e.sent();\r\n                return [4 /*yield*/, page.type('#signin-form > div:nth-child(1) > div > div > label', USERNAME)];\r\n            case 6:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.click('#signin-continue-btn')];\r\n            case 7:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.waitFor(3000)];\r\n            case 8:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.waitFor('#pass')];\r\n            case 9:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.type('#pass', PASSWORD)];\r\n            case 10:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.click('#sgnBt')];\r\n            case 11:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.waitFor(10000)];\r\n            case 12:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.$$eval(\"tbody > tr:nth-child(2) > td:nth-child(4)\", function (le) { return le.length; })];\r\n            case 13:\r\n                numItems = _e.sent();\r\n                iterations = 2;\r\n                numItems = numItems - 1;\r\n                currentMonthShip = 0;\r\n                return [4 /*yield*/, page.waitFor(8000)];\r\n            case 14:\r\n                _e.sent();\r\n                _e.label = 15;\r\n            case 15:\r\n                if (!((iterations - 1) <= numItems)) return [3 /*break*/, 20];\r\n                return [4 /*yield*/, page.$eval(\"tbody > tr:nth-child(\" + iterations + \") > td:nth-child(7)\", function (el) { return el.innerText; })];\r\n            case 16:\r\n                shipStatus = _e.sent();\r\n                return [4 /*yield*/, page.waitFor(4000)];\r\n            case 17:\r\n                _e.sent();\r\n                if (!(shipStatus.charAt(0) != 'V')) return [3 /*break*/, 19];\r\n                return [4 /*yield*/, page.$eval(\"tbody > tr:nth-child(\" + iterations + \") > td:nth-child(4)\", function (el) { return el.innerText.substring(1); })];\r\n            case 18:\r\n                TempCurrentMonthShip = _e.sent();\r\n                currentMonthShip += parseFloat(TempCurrentMonthShip);\r\n                _e.label = 19;\r\n            case 19:\r\n                iterations++;\r\n                return [3 /*break*/, 15];\r\n            case 20:\r\n                //SEND DATA TO MAIN\r\n                data.currentMonthShip = currentMonthShip;\r\n                /**GO TO GET PREV MONTH SHIP**/\r\n                return [4 /*yield*/, page.goto(\"https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&CurrentPage=LabelManagement&NewPeriod=LastMonth&COUNT=100&pg=1&searchBy=NONE&searchText=&Column=DATE_PURCHASED&SortOrder=DESCEND\", {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 21:\r\n                /**GO TO GET PREV MONTH SHIP**/\r\n                _e.sent();\r\n                return [4 /*yield*/, page.$$eval(\"tbody > tr:nth-child(2) > td:nth-child(4)\", function (le) { return le.length; })];\r\n            case 22:\r\n                //GET # OF ITEMS\r\n                numItems = _e.sent();\r\n                iterations = 2;\r\n                numItems = numItems - 1;\r\n                lastMonthShip = 0;\r\n                return [4 /*yield*/, page.waitFor(4000)];\r\n            case 23:\r\n                _e.sent();\r\n                _e.label = 24;\r\n            case 24:\r\n                if (!((iterations - 1) <= numItems)) return [3 /*break*/, 28];\r\n                return [4 /*yield*/, page.$eval(\"tbody > tr:nth-child(\" + iterations + \") > td:nth-child(7)\", function (el) { return el.innerText; })];\r\n            case 25:\r\n                shipStatus = _e.sent();\r\n                if (!(shipStatus.charAt(0) != 'V')) return [3 /*break*/, 27];\r\n                return [4 /*yield*/, page.$eval(\"tbody > tr:nth-child(\" + iterations + \") > td:nth-child(4)\", function (el) { return el.innerText.substring(1); })];\r\n            case 26:\r\n                TempLastMonthShip = _e.sent();\r\n                lastMonthShip += parseFloat(TempLastMonthShip);\r\n                _e.label = 27;\r\n            case 27:\r\n                iterations++;\r\n                return [3 /*break*/, 24];\r\n            case 28:\r\n                //SEND DATA TO MAIN\r\n                data.lastMonthShip = lastMonthShip;\r\n                /**GO TO GET CURRENT MONTH SOLD**/\r\n                return [4 /*yield*/, page.goto(\"https://www.ebay.com/sh/ord/?offset=0&limit=50&filter=status%3AALL_ORDERS%2Ctimerange%3ACURRENTMONTH\", {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 29:\r\n                /**GO TO GET CURRENT MONTH SOLD**/\r\n                _e.sent();\r\n                return [4 /*yield*/, page.waitFor(3000)];\r\n            case 30:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.$$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr\", function (le) { return le.length; })];\r\n            case 31:\r\n                numItems = _e.sent();\r\n                data.currentMonthItems = numItems / 3;\r\n                iterations = 1;\r\n                currentMonthSoldFor = 0;\r\n                _e.label = 32;\r\n            case 32:\r\n                if (!(iterations <= numItems)) return [3 /*break*/, 37];\r\n                return [4 /*yield*/, page.waitFor(3000)];\r\n            case 33:\r\n                _e.sent();\r\n                return [4 /*yield*/, page.$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(\" + iterations + \") > td:nth-child(2)\", function (el) { return el.innerText; })];\r\n            case 34:\r\n                shipStatus = _e.sent();\r\n                if (!(shipStatus.charAt(0) != 'C')) return [3 /*break*/, 36];\r\n                //IF HAS NOT BEEN CANCELED\r\n                _a = currentMonthSoldFor;\r\n                _b = parseFloat;\r\n                return [4 /*yield*/, page.$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(\" + iterations + \") > td:nth-child(5)\", function (el) { return el.innerText.substring(1); })];\r\n            case 35:\r\n                //IF HAS NOT BEEN CANCELED\r\n                currentMonthSoldFor = _a + _b.apply(void 0, [_e.sent()]);\r\n                _e.label = 36;\r\n            case 36:\r\n                iterations = iterations + 3;\r\n                return [3 /*break*/, 32];\r\n            case 37:\r\n                //SEND DATA TO MAIN\r\n                data.currentMonthSoldFor = currentMonthSoldFor;\r\n                /**GO TO GET PREV MONTH SOLD**/\r\n                return [4 /*yield*/, page.goto(\"https://www.ebay.com/sh/ord/?filter=status%3AALL_ORDERS%2Ctimerange%3APREVIOUSMONTH\", {\r\n                        waitUntil: \"domcontentloaded\"\r\n                    })];\r\n            case 38:\r\n                /**GO TO GET PREV MONTH SOLD**/\r\n                _e.sent();\r\n                return [4 /*yield*/, page.$$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr\", function (le) { return le.length; })];\r\n            case 39:\r\n                numItems = _e.sent();\r\n                data.lastMonthItems = numItems / 3;\r\n                iterations = 1;\r\n                lastMonthSoldFor = 0;\r\n                _e.label = 40;\r\n            case 40:\r\n                if (!(iterations <= numItems)) return [3 /*break*/, 44];\r\n                return [4 /*yield*/, page.$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(\" + iterations + \") > td:nth-child(2)\", function (el) { return el.innerText; })];\r\n            case 41:\r\n                shipStatus = _e.sent();\r\n                if (!(shipStatus.charAt(0) != 'C')) return [3 /*break*/, 43];\r\n                //IF NOT CANCELED\r\n                _c = lastMonthSoldFor;\r\n                _d = parseFloat;\r\n                return [4 /*yield*/, page.$eval(\"#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(\" + iterations + \") > td:nth-child(5)\", function (el) { return el.innerText.substring(1); })];\r\n            case 42:\r\n                //IF NOT CANCELED\r\n                lastMonthSoldFor = _c + _d.apply(void 0, [_e.sent()]);\r\n                _e.label = 43;\r\n            case 43:\r\n                iterations = iterations + 3;\r\n                return [3 /*break*/, 40];\r\n            case 44:\r\n                //SEND DATA TO MAIN\r\n                data.lastMonthSoldFor = lastMonthSoldFor;\r\n                data.index.push[0];\r\n                browser.close();\r\n                res.send(JSON.stringify(data));\r\n                return [3 /*break*/, 46];\r\n            case 45:\r\n                e_1 = _e.sent();\r\n                throw e_1;\r\n            case 46: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/pupRouter/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar pupRouter_1 = __webpack_require__(/*! ../pupRouter */ \"./src/server/pupRouter/index.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/pupRouter\", pupRouter_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\nvar p = path.join(__dirname, \"../public\");\r\napp.use(express.static(p));\r\napp.use(express.json());\r\napp.use(routes_1.default);\r\napp.use(\"*\", function (req, res, next) {\r\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () {\r\n    console.log(\"Server listening on port: \" + port);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });