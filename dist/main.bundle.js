"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#card {
  font-family: "Madimi One", sans-serif;
  margin-top: 10px;
  height: 200px;
  width: 300px;
  border: 5px solid black;
  color: black;
}
#projectTitle,
#dateDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
}
#projectTitle {
  height: 50%;
  width: 100%;
}
#dateDiv {
  height: 30%;
  width: 100%;
}
#managingIcon {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
}

#managingIcon button {
  border: none;
  background-color: #e2e8f0;
}

#completedButton:hover {
  background-color: limegreen;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["#card {\r\n  font-family: \"Madimi One\", sans-serif;\r\n  margin-top: 10px;\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 5px solid black;\r\n  color: black;\r\n}\r\n#projectTitle,\r\n#dateDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 32px;\r\n  font-weight: 600;\r\n}\r\n#projectTitle {\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n#dateDiv {\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n#managingIcon {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n#managingIcon button {\r\n  border: none;\r\n  background-color: #e2e8f0;\r\n}\r\n\r\n#completedButton:hover {\r\n  background-color: limegreen;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-cards.js":
/*!**************************!*\
  !*** ./src/add-cards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   extra: () => (/* binding */ extra),
/* harmony export */   important: () => (/* binding */ important),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   optional: () => (/* binding */ optional)
/* harmony export */ });
/* harmony import */ var _edit_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-card */ "./src/edit-card.js");


let title = document.getElementById("title");
let date = document.getElementById("dueDate");

let cardCount = 0;
let deleteButtonCount = 0;
let optional = document.querySelectorAll(".optional");
let important = document.querySelectorAll(".important");
let extra = document.querySelectorAll(".extra");

const content = document.querySelector("#content");

// ---- STORAGE HELPERS ----
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// ---- RENDER A SINGLE CARD ----
function renderCard(task) {
  const cardDiv = document.createElement("div");
  cardDiv.id = "card";
  cardDiv.dataset.id = task.id;
  cardDiv.classList.add(`${++cardCount}`);

  const projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  projectTitle.textContent = `Title: ${task.title}`;
  cardDiv.appendChild(projectTitle);

  const dateDiv = document.createElement("div");
  dateDiv.id = "dateDiv";
  dateDiv.textContent = `Date: ${task.date}`;
  cardDiv.appendChild(dateDiv);

  if (task.priority === "Optional Task") {
    cardDiv.classList.add("optional");
  } else if (task.priority === "Important Task") {
    cardDiv.classList.add("important");
  } else {
    cardDiv.classList.add("extra");
  }

  const managingIcon = document.createElement("div");
  managingIcon.id = "managingIcon";

  // delete
  const removeButton = document.createElement("div");
  removeButton.classList.add("deleteButton");
  removeButton.id = `${++deleteButtonCount}`;
  removeButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>`;
  removeButton.addEventListener("click", () => {
    let tasks = getTasks();
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks(tasks);
    cardDiv.remove();
  });
  managingIcon.appendChild(removeButton);

  // complete
  const completeButton = document.createElement("div");
  completeButton.classList.add("completedButton");
  completeButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>completed</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg></button>`;
  managingIcon.appendChild(completeButton);

  // edit
  const editButton = document.createElement("div");
  editButton.classList.add("editButton");
  editButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>Edit</title><path d="M19.39 10.74L11 19.13V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47Z" /></svg></button>`;
  editButton.addEventListener("click", (e) => (0,_edit_card__WEBPACK_IMPORTED_MODULE_0__.editCard)(e, task));
  managingIcon.appendChild(editButton);

  cardDiv.appendChild(managingIcon);
  content.appendChild(cardDiv);
}

// ---- ADD PROJECT ----
function addProject() {
  const addProjectICon = document.querySelector("#add-project");
  const addMoreProjectsIcon = document.querySelector(".add-more-projects");
  let priority = document.querySelector("select");

  let formTitle = title.value;
  let formDate = date.value;

  addProjectICon.style.display = "none";
  addMoreProjectsIcon.style.display = "flex";
  content.style.display = "flex";

  const task = {
    id: Date.now(),
    title: formTitle,
    date: formDate,
    priority: priority.value,
  };

  let tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  renderCard(task);

  // reset filters
  optional = document.querySelectorAll(".optional");
  important = document.querySelectorAll(".important");
  extra = document.querySelectorAll(".extra");

  optional.forEach((item) => (item.style.display = "none"));
  important.forEach((item) => (item.style.display = "none"));
  extra.forEach((item) => (item.style.display = "none"));
}

// ---- LOAD TASKS ON STARTUP ----
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(renderCard);
}




/***/ }),

/***/ "./src/close-form.js":
/*!***************************!*\
  !*** ./src/close-form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeForm: () => (/* binding */ closeForm)
/* harmony export */ });
const dialog = document.getElementById("dialog-Box");

function closeForm() {
  dialog.close("cancel");
}




/***/ }),

/***/ "./src/edit-card.js":
/*!**************************!*\
  !*** ./src/edit-card.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editCard: () => (/* binding */ editCard)
/* harmony export */ });
// ---- storage helpers (same as in add-cards.js) ----
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function editCard(event, task) {
  const dialog = document.getElementById("dialog-Box-Two");
  dialog.showModal();

  // Get the clicked card
  const clickedCard = event.currentTarget.closest("#card");

  if (!clickedCard) {
    console.error("Clicked card not found");
    return;
  }

  // Populate form fields with card values
  const editTitle = document.querySelector("#editTitle");
  const editDueDate = document.querySelector("#editDueDate");

  editTitle.value = task.title;
  editDueDate.value = task.date;

  // --- handle submission ---
  const editButton = document.querySelector("#edit");

  // remove old listeners to prevent duplicates
  const newEditButton = editButton.cloneNode(true);
  editButton.parentNode.replaceChild(newEditButton, editButton);

  newEditButton.addEventListener("click", (e) => {
    e.preventDefault();

    // update task object
    task.title = editTitle.value;
    task.date = editDueDate.value;

    // update DOM
    clickedCard.querySelector(
      "#projectTitle"
    ).textContent = `Title: ${task.title}`;
    clickedCard.querySelector("#dateDiv").textContent = `Date: ${task.date}`;

    // update storage
    let tasks = getTasks();
    tasks = tasks.map((t) => (t.id === task.id ? task : t));
    saveTasks(tasks);

    dialog.close();
  });

  const cancelButton = document.querySelector("#cancelButton");
  cancelButton.addEventListener("click", () => {
    dialog.close("cancel");
  });
}




/***/ }),

/***/ "./src/form-data.js":
/*!**************************!*\
  !*** ./src/form-data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventDefault: () => (/* binding */ preventDefault)
/* harmony export */ });
/* harmony import */ var _add_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cards */ "./src/add-cards.js");


const dialog = document.getElementById("dialog-Box");

function preventDefault(event) {
  event.preventDefault();
  if (document.forms[0].checkValidity()) {
    (0,_add_cards__WEBPACK_IMPORTED_MODULE_0__.addProject)();
    dialog.close("cancel");
    console.log("i run");
  } else {
    alert("Please Fill All The Fields");
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _add_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-cards */ "./src/add-cards.js");
/* harmony import */ var _show_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-form */ "./src/show-form.js");
/* harmony import */ var _close_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close-form */ "./src/close-form.js");
/* harmony import */ var _form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-data */ "./src/form-data.js");
/* harmony import */ var _show_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-cards */ "./src/show-cards.js");








let optionalDiv = document
  .querySelector("#optional")
  .addEventListener("click", _show_cards__WEBPACK_IMPORTED_MODULE_5__.showOptional);
let importantDiv = document
  .querySelector("#important")
  .addEventListener("click", _show_cards__WEBPACK_IMPORTED_MODULE_5__.showImportant);
let extraDiv = document
  .querySelector("#extra")
  .addEventListener("click", _show_cards__WEBPACK_IMPORTED_MODULE_5__.showExtra);

const content = document.querySelector("#content");
const dialog = document.getElementById("dialog-Box");
const cancelButton = document.querySelector('button[value="cancel"]');
const confirmBtn = document.getElementById("confirm");

cancelButton.addEventListener("click", _close_form__WEBPACK_IMPORTED_MODULE_3__.closeForm);
const addMoreProjectsIcon = document
  .querySelector(".add-more-projects")
  .addEventListener("click", _show_form__WEBPACK_IMPORTED_MODULE_2__.showForm);

const addProjectICon = document
  .querySelector("#add-project")
  .addEventListener("click", _show_form__WEBPACK_IMPORTED_MODULE_2__.showForm);

cancelButton.addEventListener("click", _close_form__WEBPACK_IMPORTED_MODULE_3__.closeForm);
confirmBtn.addEventListener("click", _form_data__WEBPACK_IMPORTED_MODULE_4__.preventDefault);

document.addEventListener("DOMContentLoaded", () => {
  (0,_add_cards__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
});


/***/ }),

/***/ "./src/show-cards.js":
/*!***************************!*\
  !*** ./src/show-cards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showExtra: () => (/* binding */ showExtra),
/* harmony export */   showImportant: () => (/* binding */ showImportant),
/* harmony export */   showOptional: () => (/* binding */ showOptional)
/* harmony export */ });
/* harmony import */ var _add_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cards */ "./src/add-cards.js");


function showOptional() {
  _add_cards__WEBPACK_IMPORTED_MODULE_0__.optional.forEach((item) => {
    item.style.display = "grid";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.important.forEach((item) => {
    item.style.display = "none";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.extra.forEach((item) => {
    item.style.display = "none";
  });
}

function showImportant() {
  _add_cards__WEBPACK_IMPORTED_MODULE_0__.optional.forEach((item) => {
    item.style.display = "none";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.important.forEach((item) => {
    item.style.display = "grid";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.extra.forEach((item) => {
    item.style.display = "none";
  });
}

function showExtra() {
  _add_cards__WEBPACK_IMPORTED_MODULE_0__.optional.forEach((item) => {
    item.style.display = "none";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.important.forEach((item) => {
    item.style.display = "none";
  });

  _add_cards__WEBPACK_IMPORTED_MODULE_0__.extra.forEach((item) => {
    item.style.display = "grid";
  });
}




/***/ }),

/***/ "./src/show-form.js":
/*!**************************!*\
  !*** ./src/show-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showForm: () => (/* binding */ showForm)
/* harmony export */ });
const dialog = document.getElementById("dialog-Box");

function showForm() {
  dialog.showModal();
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksaUNBQWlDLDhDQUE4Qyx1QkFBdUIsb0JBQW9CLG1CQUFtQiw4QkFBOEIsbUJBQW1CLEtBQUssZ0NBQWdDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQix1QkFBdUIsS0FBSyxtQkFBbUIsa0JBQWtCLGtCQUFrQixLQUFLLGNBQWMsa0JBQWtCLGtCQUFrQixLQUFLLG1CQUFtQixvQkFBb0Isb0NBQW9DLDBCQUEwQixrQkFBa0Isa0JBQWtCLEtBQUssOEJBQThCLG1CQUFtQixnQ0FBZ0MsS0FBSyxnQ0FBZ0Msa0NBQWtDLEtBQUssdUJBQXVCO0FBQy9xQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9DMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG9EQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RDs7Ozs7Ozs7Ozs7Ozs7O0FDMUg3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QyxpRUFBaUUsVUFBVTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7O0FDOURxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkw7QUFDb0I7QUFDRjtBQUNFO0FBQ0k7QUFDeUI7QUFDOUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFZO0FBQ3pDO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWE7QUFDMUM7QUFDQTtBQUNBLDZCQUE2QixrREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQVM7QUFDaEQ7QUFDQTtBQUNBLDZCQUE2QixnREFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQVE7QUFDckM7QUFDQSx1Q0FBdUMsa0RBQVM7QUFDaEQscUNBQXFDLHNEQUFjO0FBQ25EO0FBQ0E7QUFDQSxFQUFFLHFEQUFTO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN3RDtBQUN6RDtBQUNBO0FBQ0EsRUFBRSxnREFBUTtBQUNWO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxpREFBUztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSw2Q0FBSztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0RBQVE7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsaURBQVM7QUFDWDtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsNkNBQUs7QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFRO0FBQ1Y7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLGlEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDZDQUFLO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNrRDs7Ozs7Ozs7Ozs7Ozs7O0FDNUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FkZC1jYXJkcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nsb3NlLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0LWNhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nob3ctY2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93LWZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjYXJkIHtcclxuICBmb250LWZhbWlseTogXCJNYWRpbWkgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI3Byb2plY3RUaXRsZSxcclxuI2RhdGVEaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4jcHJvamVjdFRpdGxlIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jZGF0ZURpdiB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI21hbmFnaW5nSWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbWFuYWdpbmdJY29uIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbn1cclxuXHJcbiNjb21wbGV0ZWRCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjYXJkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFkaW1pIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4jcHJvamVjdFRpdGxlLFxcclxcbiNkYXRlRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4jcHJvamVjdFRpdGxlIHtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiNkYXRlRGl2IHtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiNtYW5hZ2luZ0ljb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtYW5hZ2luZ0ljb24gYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0ZWRCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZWRpdENhcmQgfSBmcm9tIFwiLi9lZGl0LWNhcmRcIjtcclxuXHJcbmxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XHJcbmxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xyXG5cclxubGV0IGNhcmRDb3VudCA9IDA7XHJcbmxldCBkZWxldGVCdXR0b25Db3VudCA9IDA7XHJcbmxldCBvcHRpb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uYWxcIik7XHJcbmxldCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltcG9ydGFudFwiKTtcclxubGV0IGV4dHJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHRyYVwiKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4vLyAtLS0tIFNUT1JBR0UgSEVMUEVSUyAtLS0tXHJcbmZ1bmN0aW9uIHNhdmVUYXNrcyh0YXNrcykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbn1cclxuXHJcbi8vIC0tLS0gUkVOREVSIEEgU0lOR0xFIENBUkQgLS0tLVxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKHRhc2spIHtcclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkRGl2LmlkID0gXCJjYXJkXCI7XHJcbiAgY2FyZERpdi5kYXRhc2V0LmlkID0gdGFzay5pZDtcclxuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoYCR7KytjYXJkQ291bnR9YCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdFRpdGxlLmlkID0gXCJwcm9qZWN0VGl0bGVcIjtcclxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGFzay50aXRsZX1gO1xyXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZURpdi5pZCA9IFwiZGF0ZURpdlwiO1xyXG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRGF0ZTogJHt0YXNrLmRhdGV9YDtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG5cclxuICBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJPcHRpb25hbCBUYXNrXCIpIHtcclxuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcIm9wdGlvbmFsXCIpO1xyXG4gIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJJbXBvcnRhbnQgVGFza1wiKSB7XHJcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJpbXBvcnRhbnRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcImV4dHJhXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFuYWdpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYW5hZ2luZ0ljb24uaWQgPSBcIm1hbmFnaW5nSWNvblwiO1xyXG5cclxuICAvLyBkZWxldGVcclxuICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnV0dG9uXCIpO1xyXG4gIHJlbW92ZUJ1dHRvbi5pZCA9IGAkeysrZGVsZXRlQnV0dG9uQ291bnR9YDtcclxuICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gYDxidXR0b24+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiPjx0aXRsZT5kZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIiAvPjwvc3ZnPjwvYnV0dG9uPmA7XHJcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xyXG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IHRhc2suaWQpO1xyXG4gICAgc2F2ZVRhc2tzKHRhc2tzKTtcclxuICAgIGNhcmREaXYucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbiAgbWFuYWdpbmdJY29uLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XHJcblxyXG4gIC8vIGNvbXBsZXRlXHJcbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRCdXR0b25cIik7XHJcbiAgY29tcGxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxidXR0b24+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiPjx0aXRsZT5jb21wbGV0ZWQ8L3RpdGxlPjxwYXRoIGQ9XCJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaXCIgLz48L3N2Zz48L2J1dHRvbj5gO1xyXG4gIG1hbmFnaW5nSWNvbi5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XHJcblxyXG4gIC8vIGVkaXRcclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xyXG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxidXR0b24+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiPjx0aXRsZT5FZGl0PC90aXRsZT48cGF0aCBkPVwiTTE5LjM5IDEwLjc0TDExIDE5LjEzVjIySDZDNC44OSAyMiA0IDIxLjExIDQgMjBWNEM0IDIuOSA0Ljg5IDIgNiAySDdWOUw5LjUgNy41TDEyIDlWMkgxOEMxOS4xIDIgMjAgMi44OSAyMCA0VjEwLjNDMTkuNzggMTAuNDIgMTkuNTcgMTAuNTYgMTkuMzkgMTAuNzRNMTMgMTkuOTZWMjJIMTUuMDRMMjEuMTcgMTUuODhMMTkuMTMgMTMuODNMMTMgMTkuOTZNMjIuODUgMTMuNDdMMjEuNTMgMTIuMTVDMjEuMzMgMTEuOTUgMjEgMTEuOTUgMjAuODEgMTIuMTVMMTkuODMgMTMuMTNMMjEuODcgMTUuMTdMMjIuODUgMTQuMTlDMjMuMDUgMTQgMjMuMDUgMTMuNjcgMjIuODUgMTMuNDdaXCIgLz48L3N2Zz48L2J1dHRvbj5gO1xyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBlZGl0Q2FyZChlLCB0YXNrKSk7XHJcbiAgbWFuYWdpbmdJY29uLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG5cclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKG1hbmFnaW5nSWNvbik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkRGl2KTtcclxufVxyXG5cclxuLy8gLS0tLSBBREQgUFJPSkVDVCAtLS0tXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgY29uc3QgYWRkUHJvamVjdElDb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGFkZE1vcmVQcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1tb3JlLXByb2plY3RzXCIpO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XHJcblxyXG4gIGxldCBmb3JtVGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICBsZXQgZm9ybURhdGUgPSBkYXRlLnZhbHVlO1xyXG5cclxuICBhZGRQcm9qZWN0SUNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgYWRkTW9yZVByb2plY3RzSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gIGNvbnN0IHRhc2sgPSB7XHJcbiAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgIHRpdGxlOiBmb3JtVGl0bGUsXHJcbiAgICBkYXRlOiBmb3JtRGF0ZSxcclxuICAgIHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZSxcclxuICB9O1xyXG5cclxuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xyXG4gIHRhc2tzLnB1c2godGFzayk7XHJcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcclxuXHJcbiAgcmVuZGVyQ2FyZCh0YXNrKTtcclxuXHJcbiAgLy8gcmVzZXQgZmlsdGVyc1xyXG4gIG9wdGlvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25hbFwiKTtcclxuICBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltcG9ydGFudFwiKTtcclxuICBleHRyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXh0cmFcIik7XHJcblxyXG4gIG9wdGlvbmFsLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xyXG4gIGltcG9ydGFudC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcclxuICBleHRyYS5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcclxufVxyXG5cclxuLy8gLS0tLSBMT0FEIFRBU0tTIE9OIFNUQVJUVVAgLS0tLVxyXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xyXG4gIHRhc2tzLmZvckVhY2gocmVuZGVyQ2FyZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3QsIG9wdGlvbmFsLCBpbXBvcnRhbnQsIGV4dHJhLCBsb2FkVGFza3MgfTtcclxuIiwiY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2ctQm94XCIpO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG4gIGRpYWxvZy5jbG9zZShcImNhbmNlbFwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xvc2VGb3JtIH07XHJcbiIsIi8vIC0tLS0gc3RvcmFnZSBoZWxwZXJzIChzYW1lIGFzIGluIGFkZC1jYXJkcy5qcykgLS0tLVxyXG5mdW5jdGlvbiBzYXZlVGFza3ModGFza3MpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzKCkge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0Q2FyZChldmVudCwgdGFzaykge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nLUJveC1Ud29cIik7XHJcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG5cclxuICAvLyBHZXQgdGhlIGNsaWNrZWQgY2FyZFxyXG4gIGNvbnN0IGNsaWNrZWRDYXJkID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KFwiI2NhcmRcIik7XHJcblxyXG4gIGlmICghY2xpY2tlZENhcmQpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDbGlja2VkIGNhcmQgbm90IGZvdW5kXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gUG9wdWxhdGUgZm9ybSBmaWVsZHMgd2l0aCBjYXJkIHZhbHVlc1xyXG4gIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFRpdGxlXCIpO1xyXG4gIGNvbnN0IGVkaXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0RHVlRGF0ZVwiKTtcclxuXHJcbiAgZWRpdFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcclxuICBlZGl0RHVlRGF0ZS52YWx1ZSA9IHRhc2suZGF0ZTtcclxuXHJcbiAgLy8gLS0tIGhhbmRsZSBzdWJtaXNzaW9uIC0tLVxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRcIik7XHJcblxyXG4gIC8vIHJlbW92ZSBvbGQgbGlzdGVuZXJzIHRvIHByZXZlbnQgZHVwbGljYXRlc1xyXG4gIGNvbnN0IG5ld0VkaXRCdXR0b24gPSBlZGl0QnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcclxuICBlZGl0QnV0dG9uLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VkaXRCdXR0b24sIGVkaXRCdXR0b24pO1xyXG5cclxuICBuZXdFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0YXNrIG9iamVjdFxyXG4gICAgdGFzay50aXRsZSA9IGVkaXRUaXRsZS52YWx1ZTtcclxuICAgIHRhc2suZGF0ZSA9IGVkaXREdWVEYXRlLnZhbHVlO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBET01cclxuICAgIGNsaWNrZWRDYXJkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI3Byb2plY3RUaXRsZVwiXHJcbiAgICApLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3Rhc2sudGl0bGV9YDtcclxuICAgIGNsaWNrZWRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZURpdlwiKS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Rhc2suZGF0ZX1gO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBzdG9yYWdlXHJcbiAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xyXG4gICAgdGFza3MgPSB0YXNrcy5tYXAoKHQpID0+ICh0LmlkID09PSB0YXNrLmlkID8gdGFzayA6IHQpKTtcclxuICAgIHNhdmVUYXNrcyh0YXNrcyk7XHJcblxyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsQnV0dG9uXCIpO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGlhbG9nLmNsb3NlKFwiY2FuY2VsXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBlZGl0Q2FyZCB9O1xyXG4iLCJpbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vYWRkLWNhcmRzXCI7XHJcblxyXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZy1Cb3hcIik7XHJcblxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKGRvY3VtZW50LmZvcm1zWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgYWRkUHJvamVjdCgpO1xyXG4gICAgZGlhbG9nLmNsb3NlKFwiY2FuY2VsXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJpIHJ1blwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBBbGwgVGhlIEZpZWxkc1wiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByZXZlbnREZWZhdWx0IH07XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9hZGQtY2FyZHNcIjtcclxuaW1wb3J0IHsgc2hvd0Zvcm0gfSBmcm9tIFwiLi9zaG93LWZvcm1cIjtcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vY2xvc2UtZm9ybVwiO1xyXG5pbXBvcnQgeyBwcmV2ZW50RGVmYXVsdCB9IGZyb20gXCIuL2Zvcm0tZGF0YVwiO1xyXG5pbXBvcnQgeyBzaG93T3B0aW9uYWwsIHNob3dJbXBvcnRhbnQsIHNob3dFeHRyYSB9IGZyb20gXCIuL3Nob3ctY2FyZHNcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzIH0gZnJvbSBcIi4vYWRkLWNhcmRzXCI7XHJcblxyXG5sZXQgb3B0aW9uYWxEaXYgPSBkb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiI29wdGlvbmFsXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93T3B0aW9uYWwpO1xyXG5sZXQgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIiNpbXBvcnRhbnRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbXBvcnRhbnQpO1xyXG5sZXQgZXh0cmFEaXYgPSBkb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiI2V4dHJhXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RXh0cmEpO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2ctQm94XCIpO1xyXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdmFsdWU9XCJjYW5jZWxcIl0nKTtcclxuY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybVwiKTtcclxuXHJcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcclxuY29uc3QgYWRkTW9yZVByb2plY3RzSWNvbiA9IGRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW1vcmUtcHJvamVjdHNcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RJQ29uID0gZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xyXG5cclxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xyXG5jb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2ZW50RGVmYXVsdCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbG9hZFRhc2tzKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBvcHRpb25hbCwgaW1wb3J0YW50LCBleHRyYSB9IGZyb20gXCIuL2FkZC1jYXJkc1wiO1xyXG5cclxuZnVuY3Rpb24gc2hvd09wdGlvbmFsKCkge1xyXG4gIG9wdGlvbmFsLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gIH0pO1xyXG5cclxuICBpbXBvcnRhbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcblxyXG4gIGV4dHJhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW1wb3J0YW50KCkge1xyXG4gIG9wdGlvbmFsLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG5cclxuICBpbXBvcnRhbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgfSk7XHJcblxyXG4gIGV4dHJhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RXh0cmEoKSB7XHJcbiAgb3B0aW9uYWwuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcblxyXG4gIGltcG9ydGFudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuXHJcbiAgZXh0cmEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dPcHRpb25hbCwgc2hvd0ltcG9ydGFudCwgc2hvd0V4dHJhIH07XHJcbiIsImNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nLUJveFwiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xyXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcclxufVxyXG5leHBvcnQgeyBzaG93Rm9ybSB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=