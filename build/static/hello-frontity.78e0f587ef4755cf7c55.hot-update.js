webpackHotUpdate("hello-frontity",{

/***/ "./node_modules/@frontity/components/switch.tsx":
/*!******************************************************!*\
  !*** ./node_modules/@frontity/components/switch.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}const Switch=({children})=>{const components=react__WEBPACK_IMPORTED_MODULE_1__[\"Children\"].toArray(children);// Check if components[] has a non-ReactNode type Element\nconst hasInvalidComponent=components.findIndex(component=>!/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component))!==-1;// last element in components[]\nconst lastComponent=components[components.length-1];// Check if last component is default component - No when props\nconst lastComponentIsDefault=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(lastComponent)&&!(\"when\"in lastComponent.props);if(hasInvalidComponent){Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(\"Children of <Switch /> component should be a type of ReactNode\");}// Filter components by the value of the 'when' props or path\nconst filteredComponent=components.find(component=>/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component)&&component.props.when);// Render filteredComponents\nif(filteredComponent){const _filteredComponent$pr=filteredComponent.props,{when}=_filteredComponent$pr,props=_objectWithoutProperties(_filteredComponent$pr,[\"when\"]);return/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(filteredComponent.type,_objectSpread({},props));}// render last component if it's diffult component (without when props);\nif(lastComponentIsDefault)return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:lastComponent});// Return `null` if none of the children have matched.\nreturn null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Switch));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoLnRzeD8zNTVjIl0sIm5hbWVzIjpbIlN3aXRjaCIsImNoaWxkcmVuIiwiY29tcG9uZW50cyIsIlJlYWN0IiwidG9BcnJheSIsImhhc0ludmFsaWRDb21wb25lbnQiLCJmaW5kSW5kZXgiLCJjb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudCIsImxhc3RDb21wb25lbnQiLCJsZW5ndGgiLCJsYXN0Q29tcG9uZW50SXNEZWZhdWx0IiwicHJvcHMiLCJ3YXJuIiwiZmlsdGVyZWRDb21wb25lbnQiLCJmaW5kIiwid2hlbiIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzRwREFjQSxLQUFNQSxPQUFnQyxDQUFHLENBQUMsQ0FBRUMsUUFBRixDQUFELEdBQWtCLENBQ3pELEtBQU1DLFdBQTBCLENBQUdDLDhDQUFBLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5DLENBRUE7QUFDQSxLQUFNSSxvQkFBNEIsQ0FDaENILFVBQVUsQ0FBQ0ksU0FBWCxDQUFzQkMsU0FBRCxFQUFlLGNBQUNDLDREQUFjLENBQUNELFNBQUQsQ0FBbkQsSUFBb0UsQ0FBQyxDQUR2RSxDQUdBO0FBQ0EsS0FBTUUsY0FBYSxDQUFHUCxVQUFVLENBQUNBLFVBQVUsQ0FBQ1EsTUFBWCxDQUFvQixDQUFyQixDQUFoQyxDQUVBO0FBQ0EsS0FBTUMsdUJBQXNCLENBQzFCLGFBQUFILDREQUFjLENBQUNDLGFBQUQsQ0FBZCxFQUFpQyxFQUFFLFFBQVVBLGNBQWEsQ0FBQ0csS0FBMUIsQ0FEbkMsQ0FHQSxHQUFJUCxtQkFBSixDQUF5QixDQUN2QlEscURBQUksQ0FBQyxnRUFBRCxDQUFKLENBQ0QsQ0FFRDtBQUNBLEtBQU1DLGtCQUFpQixDQUFHWixVQUFVLENBQUNhLElBQVgsQ0FDdkJSLFNBQUQsRUFDRSxhQUFBQyw0REFBYyxDQUFjRCxTQUFkLENBQWQsRUFBMENBLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQkksSUFGcEMsQ0FBMUIsQ0FLQTtBQUNBLEdBQUlGLGlCQUFKLENBQXVCLENBQ3JCLDRCQUEyQkEsaUJBQWlCLENBQUNGLEtBQTdDLENBQU0sQ0FBRUksSUFBRixDQUFOLHVCQUFpQkosS0FBakIsMERBQ0EsbUJBQU9LLDJEQUFhLENBQUNILGlCQUFpQixDQUFDSSxJQUFuQixrQkFBOEJOLEtBQTlCLEVBQXBCLENBQ0QsQ0FFRDtBQUNBLEdBQUlELHNCQUFKLENBQTRCLE1BQU8sc0pBQUdGLGFBQUgsRUFBUCxDQUU1QjtBQUNBLE1BQU8sS0FBUCxDQUNELENBbkNELENBcUNlVSx1SEFBTyxDQUFDbkIsTUFBRCxDQUF0QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgd2FybiB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gXCJmcm9udGl0eS90eXBlc1wiO1xuaW1wb3J0IHtcbiAgaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9kZUFycmF5LFxuICBSZWFjdEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTd2l0Y2hDaGlsZCB7XG4gIHdoZW4/OiBib29sZWFuO1xufVxuXG5jb25zdCBTd2l0Y2g6IFJlYWN0LkZDPFBhY2thZ2U+IHwgbnVsbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29tcG9uZW50czogUmVhY3ROb2RlQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuICAvLyBDaGVjayBpZiBjb21wb25lbnRzW10gaGFzIGEgbm9uLVJlYWN0Tm9kZSB0eXBlIEVsZW1lbnRcbiAgY29uc3QgaGFzSW52YWxpZENvbXBvbmVudDogYm9vbGVhbiA9XG4gICAgY29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXBvbmVudCkgPT4gIWlzVmFsaWRFbGVtZW50KGNvbXBvbmVudCkpICE9PSAtMTtcblxuICAvLyBsYXN0IGVsZW1lbnQgaW4gY29tcG9uZW50c1tdXG4gIGNvbnN0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gQ2hlY2sgaWYgbGFzdCBjb21wb25lbnQgaXMgZGVmYXVsdCBjb21wb25lbnQgLSBObyB3aGVuIHByb3BzXG4gIGNvbnN0IGxhc3RDb21wb25lbnRJc0RlZmF1bHQgPVxuICAgIGlzVmFsaWRFbGVtZW50KGxhc3RDb21wb25lbnQpICYmICEoXCJ3aGVuXCIgaW4gbGFzdENvbXBvbmVudC5wcm9wcyk7XG5cbiAgaWYgKGhhc0ludmFsaWRDb21wb25lbnQpIHtcbiAgICB3YXJuKFwiQ2hpbGRyZW4gb2YgPFN3aXRjaCAvPiBjb21wb25lbnQgc2hvdWxkIGJlIGEgdHlwZSBvZiBSZWFjdE5vZGVcIik7XG4gIH1cblxuICAvLyBGaWx0ZXIgY29tcG9uZW50cyBieSB0aGUgdmFsdWUgb2YgdGhlICd3aGVuJyBwcm9wcyBvciBwYXRoXG4gIGNvbnN0IGZpbHRlcmVkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKFxuICAgIChjb21wb25lbnQpID0+XG4gICAgICBpc1ZhbGlkRWxlbWVudDxTd2l0Y2hDaGlsZD4oY29tcG9uZW50KSAmJiBjb21wb25lbnQucHJvcHMud2hlblxuICApIGFzIFJlYWN0RWxlbWVudDxTd2l0Y2hDaGlsZD47XG5cbiAgLy8gUmVuZGVyIGZpbHRlcmVkQ29tcG9uZW50c1xuICBpZiAoZmlsdGVyZWRDb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHdoZW4sIC4uLnByb3BzIH0gPSBmaWx0ZXJlZENvbXBvbmVudC5wcm9wcztcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChmaWx0ZXJlZENvbXBvbmVudC50eXBlLCB7IC4uLnByb3BzIH0pO1xuICB9XG5cbiAgLy8gcmVuZGVyIGxhc3QgY29tcG9uZW50IGlmIGl0J3MgZGlmZnVsdCBjb21wb25lbnQgKHdpdGhvdXQgd2hlbiBwcm9wcyk7XG4gIGlmIChsYXN0Q29tcG9uZW50SXNEZWZhdWx0KSByZXR1cm4gPD57bGFzdENvbXBvbmVudH08Lz47XG5cbiAgLy8gUmV0dXJuIGBudWxsYCBpZiBub25lIG9mIHRoZSBjaGlsZHJlbiBoYXZlIG1hdGNoZWQuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChTd2l0Y2gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@frontity/components/switch.tsx\n");

/***/ }),

/***/ "./packages/amirs-frontity-theme/src/components/Root.jsx":
/*!***************************************************************!*\
  !*** ./packages/amirs-frontity-theme/src/components/Root.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ \"./packages/amirs-frontity-theme/src/components/NavBar.jsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction Root(props){const{state}=props;const data=state.source.get(state.router.link);console.log(data);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\",{children:\"Amir's Frontity Theme\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"p\",{children:[\"Current URL : \",state.router.link]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"main\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{when:data.isArchive,children:\"This is a list\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{when:data.isPost,children:\"This is a post\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{when:data.isPage,children:\"This is a pagef\"})]})})]});}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));//HoC to provide state to the component//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbWlycy1mcm9udGl0eS10aGVtZS9zcmMvY29tcG9uZW50cy9Sb290LmpzeD9lYzgxIl0sIm5hbWVzIjpbIlJvb3QiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwiaXNBcmNoaXZlIiwiaXNQb3N0IiwiaXNQYWdlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsUUFBU0EsS0FBVCxDQUFjQyxLQUFkLENBQXFCLENBRWpCLEtBQU0sQ0FBQ0MsS0FBRCxFQUFVRCxLQUFoQixDQUNBLEtBQU1FLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLEVBRUEsTUFDSSx3SkFHRSx1RUFBQywrQ0FBRCxJQUhGLENBSUUsK0dBSkYsQ0FLRSx3R0FBa0JELEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUEvQixHQUxGLENBTUUsd0ZBQ0Usd0VBQUMsbUVBQUQsWUFDSSw4RUFBSyxJQUFJLENBQUVKLElBQUksQ0FBQ08sU0FBaEIsNEJBREosQ0FFSSw4RUFBSyxJQUFJLENBQUVQLElBQUksQ0FBQ1EsTUFBaEIsNEJBRkosQ0FHSSw4RUFBSyxJQUFJLENBQUVSLElBQUksQ0FBQ1MsTUFBaEIsNkJBSEosR0FERixFQU5GLEdBREosQ0FnQkgsQ0FFY0MsdUhBQU8sQ0FBQ2IsSUFBRCxDQUF0QixFQUE4QiIsImZpbGUiOiIuL3BhY2thZ2VzL2FtaXJzLWZyb250aXR5LXRoZW1lL3NyYy9jb21wb25lbnRzL1Jvb3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuXG5cbmZ1bmN0aW9uIFJvb3QocHJvcHMpIHtcblxuICAgIGNvbnN0IHtzdGF0ZX0gPSBwcm9wcztcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBZb3UgY2FuIGVkaXQgeW91ciBwYWNrYWdlIGluOlxuICAgICAgICAgIDxwcmU+cGFja2FnZXMvYW1pcnMtZnJvbnRpdHktdGhlbWUvc3JjL2luZGV4LmpzPC9wcmU+ICovfVxuICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgIDxoMT5BbWlyJ3MgRnJvbnRpdHkgVGhlbWU8L2gxPlxuICAgICAgICAgIDxwPkN1cnJlbnQgVVJMIDoge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPGRpdiB3aGVuPXtkYXRhLmlzQXJjaGl2ZX0+VGhpcyBpcyBhIGxpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHdoZW49e2RhdGEuaXNQb3N0fT5UaGlzIGlzIGEgcG9zdDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc1BhZ2V9PlRoaXMgaXMgYSBwYWdlZjwvZGl2PlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7IC8vSG9DIHRvIHByb3ZpZGUgc3RhdGUgdG8gdGhlIGNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/amirs-frontity-theme/src/components/Root.jsx\n");

/***/ })

})