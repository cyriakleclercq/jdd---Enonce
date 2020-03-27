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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
//TODO

var partie = new _classes_partie__WEBPACK_IMPORTED_MODULE_0__["Partie"](5, 4);
partie.initialiser();
partie.lancer();
partie.afficher_gagnant();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gobelet", function() { return Gobelet; });
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Gobelet = /** @class */ (function (_super) {
    __extends(Gobelet, _super);
    function Gobelet(nb_des) {
        var _this = _super.call(this) || this;
        _this._valeurGobelet = 0;
        _this._des = [];
        _this.PushDe(nb_des);
        return _this;
    }
    Object.defineProperty(Gobelet.prototype, "ValeurGobelet", {
        get: function () {
            return this._valeurGobelet;
        },
        set: function (param) {
            this._valeurGobelet = param;
        },
        enumerable: true,
        configurable: true
    });
    Gobelet.prototype.PushDe = function (param) {
        this._valeurGobelet = 0;
        for (var i = 0; i < param; i++) {
            this._des.push(this.Valeur);
        }
    };
    Gobelet.prototype.lancerGobelet = function () {
        var score = 0;
        for (var i = 0; i < this._des.length; i++) {
            this.lancer();
            this._des[i] = this.Valeur;
            score += this._des[i];
        }
        this._valeurGobelet += score;
        this.afficher_score(this._valeurGobelet);
    };
    Gobelet.prototype.afficher_score = function (score) {
        console.log("fait un lancé de : " + score);
    };
    return Gobelet;
}(_de__WEBPACK_IMPORTED_MODULE_0__["De"]));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "De", function() { return De; });
var De = /** @class */ (function () {
    function De() {
        this._valeur = 0;
    }
    Object.defineProperty(De.prototype, "Valeur", {
        get: function () {
            return this._valeur;
        },
        set: function (v) {
            this._valeur = v;
        },
        enumerable: true,
        configurable: true
    });
    De.prototype.lancer = function () {
        this._valeur = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    return De;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _gobelet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _joueur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var Partie = /** @class */ (function () {
    function Partie(nb_tours, nb_des) {
        this._joueurs = [];
        this._nb_tours = nb_tours;
        this._gobelet = new _gobelet__WEBPACK_IMPORTED_MODULE_0__["Gobelet"](nb_des);
    }
    Object.defineProperty(Partie.prototype, "NbTour", {
        get: function () {
            return this._nb_tours;
        },
        set: function (nb) {
            this._nb_tours = nb;
        },
        enumerable: true,
        configurable: true
    });
    Partie.prototype.initialiser = function () {
        var _this = this;
        var participants = ['Monk', 'Superman', 'Batman', 'ActionMan'];
        participants.forEach(function (participant) {
            var joueur = new _joueur__WEBPACK_IMPORTED_MODULE_1__["Joueur"](participant);
            _this._joueurs.push(joueur);
        });
        console.log('Les joueurs présents sont :');
        this._joueurs.forEach(function (joueur) {
            console.log(joueur.Nom);
        });
    };
    Partie.prototype.lancer = function () {
        var _this = this;
        for (var i = 1; i <= this._nb_tours; i++) {
            console.log("\n Tour :" + i);
            this._joueurs.forEach(function (joueur) {
                console.log("\n" + joueur.Nom + " lance le gobelet");
                joueur.jouer(_this._gobelet);
                console.log(joueur.Nom + " fait un score de " + joueur.Score);
                joueur.afficherScore;
            });
        }
    };
    Partie.prototype.afficher_gagnant = function () {
        var scoreGagnant = 0;
        var nomGagnant = '';
        this._joueurs.forEach(function (joueur) {
            if (joueur.Score > scoreGagnant) {
                scoreGagnant = joueur.Score;
                nomGagnant = joueur.Nom;
            }
        });
        console.log(nomGagnant + " gagne avec " + scoreGagnant + " points.");
    };
    return Partie;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joueur", function() { return Joueur; });
var Joueur = /** @class */ (function () {
    function Joueur(nom) {
        this._nom = nom;
        this._score = 0;
    }
    Object.defineProperty(Joueur.prototype, "Nom", {
        get: function () {
            return this._nom;
        },
        set: function (n) {
            this._nom = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Joueur.prototype, "Score", {
        get: function () {
            return this._score;
        },
        set: function (s) {
            this._score = s;
        },
        enumerable: true,
        configurable: true
    });
    Joueur.prototype.jouer = function (gobelet) {
        gobelet.lancerGobelet();
        gobelet.afficher_score;
        this._score += gobelet.ValeurGobelet;
    };
    Joueur.prototype.afficherScore = function () {
        console.log(this._nom + "fait un score de : " + this._score);
    };
    return Joueur;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dvYmVsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvcGFydGllLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2pvdWV1ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsTUFBTTtBQUVvQztBQUUxQyxJQUFNLE1BQU0sR0FBVyxJQUFJLHNEQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsTUFBTSxD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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy9UT0RPXHJcblxyXG5pbXBvcnQgeyBQYXJ0aWUgfSBmcm9tIFwiLi9jbGFzc2VzL3BhcnRpZVwiO1xyXG5cclxuY29uc3QgcGFydGllOiBQYXJ0aWUgPSBuZXcgUGFydGllKDUsIDQpO1xyXG5cclxucGFydGllLmluaXRpYWxpc2VyKCk7XHJcbnBhcnRpZS5sYW5jZXIoKTtcclxucGFydGllLmFmZmljaGVyX2dhZ25hbnQoKTtcclxuXHJcbiIsImltcG9ydCB7IERlIH0gZnJvbSAnLi9kZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBHb2JlbGV0IGV4dGVuZHMgRGUge1xyXG5cclxuICAgIHByaXZhdGUgX3ZhbGV1ckdvYmVsZXQ6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBfZGVzOiBudW1iZXJbXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5iX2RlczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuX3ZhbGV1ckdvYmVsZXQgPSAwXHJcbiAgICAgICAgdGhpcy5fZGVzID0gW11cclxuICAgICAgICB0aGlzLlB1c2hEZShuYl9kZXMpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFZhbGV1ckdvYmVsZXQocGFyYW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ZhbGV1ckdvYmVsZXQgPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBWYWxldXJHb2JlbGV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxldXJHb2JlbGV0XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFB1c2hEZShwYXJhbTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGV1ckdvYmVsZXQgPSAwXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW07IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXMucHVzaCh0aGlzLlZhbGV1cilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhbmNlckdvYmVsZXQoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29yZTogbnVtYmVyID0gMFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmNlcigpXHJcbiAgICAgICAgICAgIHRoaXMuX2Rlc1tpXSA9IHRoaXMuVmFsZXVyXHJcbiAgICAgICAgICAgIHNjb3JlICs9IHRoaXMuX2Rlc1tpXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92YWxldXJHb2JlbGV0ICs9IHNjb3JlO1xyXG5cclxuICAgICAgICB0aGlzLmFmZmljaGVyX3Njb3JlKHRoaXMuX3ZhbGV1ckdvYmVsZXQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFmZmljaGVyX3Njb3JlKHNjb3JlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWl0IHVuIGxhbmPDqSBkZSA6IFwiICsgc2NvcmUpXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIERlIHtcclxuXHJcbiAgICBwcml2YXRlIF92YWxldXI6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3ZhbGV1ciA9IDBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFZhbGV1cih2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl92YWxldXIgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVmFsZXVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGV1clxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5jZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsZXVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDYgLSAxKSkgKyAxXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHb2JlbGV0IH0gZnJvbSBcIi4vZ29iZWxldFwiO1xyXG5pbXBvcnQgeyBKb3VldXIgfSBmcm9tIFwiLi9qb3VldXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWUge1xyXG5cclxuICAgIHByaXZhdGUgX2pvdWV1cnM6IEpvdWV1cltdID0gW107XHJcbiAgICBwcml2YXRlIF9uYl90b3VyczogbnVtYmVyXHJcbiAgICBwcml2YXRlIF9nb2JlbGV0OiBHb2JlbGV0XHJcblxyXG4gICAgY29uc3RydWN0b3IobmJfdG91cnM6IG51bWJlciwgbmJfZGVzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9uYl90b3VycyA9IG5iX3RvdXJzXHJcbiAgICAgICAgdGhpcy5fZ29iZWxldCA9IG5ldyBHb2JlbGV0KG5iX2RlcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IE5iVG91cihuYjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbmJfdG91cnMgPSBuYjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBOYlRvdXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmJfdG91cnNcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXNlcigpIHtcclxuICAgICAgICBsZXQgcGFydGljaXBhbnRzOiBzdHJpbmdbXSA9IFsnTW9uaycsICdTdXBlcm1hbicsICdCYXRtYW4nLCAnQWN0aW9uTWFuJ107XHJcblxyXG4gICAgICAgIHBhcnRpY2lwYW50cy5mb3JFYWNoKHBhcnRpY2lwYW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpvdWV1ciA9IG5ldyBKb3VldXIocGFydGljaXBhbnQpO1xyXG4gICAgICAgICAgICB0aGlzLl9qb3VldXJzLnB1c2goam91ZXVyKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTGVzIGpvdWV1cnMgcHLDqXNlbnRzIHNvbnQgOicpO1xyXG4gICAgICAgIHRoaXMuX2pvdWV1cnMuZm9yRWFjaChqb3VldXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqb3VldXIuTm9tKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsYW5jZXIoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuX25iX3RvdXJzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuIFRvdXIgOlwiICsgaSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9qb3VldXJzLmZvckVhY2goam91ZXVyID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiICsgam91ZXVyLk5vbSArIFwiIGxhbmNlIGxlIGdvYmVsZXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgam91ZXVyLmpvdWVyKHRoaXMuX2dvYmVsZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpvdWV1ci5Ob20gKyBcIiBmYWl0IHVuIHNjb3JlIGRlIFwiICsgam91ZXVyLlNjb3JlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBqb3VldXIuYWZmaWNoZXJTY29yZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVyX2dhZ25hbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29yZUdhZ25hbnQgPSAwO1xyXG4gICAgICAgIGxldCBub21HYWduYW50ID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuX2pvdWV1cnMuZm9yRWFjaChqb3VldXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoam91ZXVyLlNjb3JlID4gc2NvcmVHYWduYW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcmVHYWduYW50ID0gam91ZXVyLlNjb3JlO1xyXG4gICAgICAgICAgICAgICAgbm9tR2FnbmFudCA9IGpvdWV1ci5Ob207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobm9tR2FnbmFudCArIFwiIGdhZ25lIGF2ZWMgXCIgKyBzY29yZUdhZ25hbnQgKyBcIiBwb2ludHMuXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR29iZWxldCB9IGZyb20gJy4vZ29iZWxldCdcclxuXHJcbmV4cG9ydCBjbGFzcyBKb3VldXIge1xyXG5cclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nXHJcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBub21cclxuICAgICAgICB0aGlzLl9zY29yZSA9IDBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldCBOb20objogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbm9tID0gbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBOb20oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9tXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBTY29yZShzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgU2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICBqb3Vlcihnb2JlbGV0OiBHb2JlbGV0KSB7XHJcbiAgICAgICAgZ29iZWxldC5sYW5jZXJHb2JlbGV0KCk7XHJcbiAgICAgICAgZ29iZWxldC5hZmZpY2hlcl9zY29yZTtcclxuICAgICAgICB0aGlzLl9zY29yZSArPSBnb2JlbGV0LlZhbGV1ckdvYmVsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJTY29yZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ub20gKyBcImZhaXQgdW4gc2NvcmUgZGUgOiBcIiArIHRoaXMuX3Njb3JlKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=