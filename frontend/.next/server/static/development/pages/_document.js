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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\qiugu\\Desktop\\Blog\\frontend\\pages\\_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_2___default()();

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-151200904-1');        
        `
      };
    }
  }

  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "UTF-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/styles.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-151200904-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("script", {
      dangerouslySetInnerHTML: this.setGoogleTags(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJwcm9jZXNzIiwiQ29tcG9uZW50IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJjdHgiLCJzdHlsZXMiLCJfZG9jdW1lbnRQcm9wcyIsIl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmciLCJEYXRlIiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiaW5BbXBNb2RlIiwiSHRtbCIsImNvbnRleHRUeXBlIiwiRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsImNzc0xpbmtFbGVtZW50cyIsImZpbGUiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJSZWFjdCIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiaGVhZCIsImJhZFByb3AiLCJ0eXBlIiwiT2JqZWN0IiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsIl9faHRtbCIsImNhbm9uaWNhbEJhc2UiLCJzdHlsZSIsImdldEFtcFBhdGgiLCJidWlsZElkIiwiZ2V0UGFnZUZpbGUiLCJoZWFkVGFncyIsIkhlYWQiLCJub25jZSIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJNYWluIiwiZ2V0RHluYW1pY0NodW5rcyIsImRlZHVwZSIsIm1vZGVyblByb3BzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZGF0YSIsIkpTT04iLCJlcnIiLCJkZXZGaWxlcyIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwic3RhdGljTWFya3VwIiwiTmV4dFNjcmlwdCIsImJvZHlUYWdzIiwicGFnZVNjcmlwdCIsImFwcFNjcmlwdCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsInN0YXJ0aW5nVXJsIiwicHVibGljUnVudGltZUNvbmZpZyIsImdldENvbmZpZyIsIk15RG9jdW1lbnQiLCJzZXRHb29nbGVUYWdzIiwiUFJPRFVDVElPTiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLG1FOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFDQTs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTTzs7QUFBQSwwQkFBMEI7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUF5RCxDQUVoRTs7QUFBQSx5QkFBdUM7QUFDckMsUUFBTUEsS0FBSyxHQUFHLElBQWQsR0FBYyxFQUFkO0FBQ0EsUUFBTUMsSUFBSSxHQUFWOztBQUVBLE9BQUssTUFBTCxtQkFBOEI7QUFDNUIsUUFBSUQsS0FBSyxDQUFMQSxJQUFVRSxNQUFNLENBQXBCLElBQUlGLENBQUosRUFBNEI7QUFDNUJBLFNBQUssQ0FBTEEsSUFBVUUsTUFBTSxDQUFoQkY7QUFDQUMsUUFBSSxDQUFKQTtBQUVGOztBQUFBO0FBR0Y7O0FBQUEsOENBQThEO0FBQzVELE1BQUlFLEtBQUosRUFBcUMsRUFHckM7O0FBQUE7QUFHRjtBQUFBOzs7Ozs7QUFJZSx1QkFBK0JDLGdCQUEvQixDQUE0RDtBQW9CekU7Ozs7QUFJQSxvQ0FFaUM7QUFDL0IsVUFBTUMsU0FBUyxHQUFHRixTQUNkLFNBRGNBLEdBQWxCOztBQU9BLFVBQU1HLFVBQVUsR0FBSUMsR0FBRCxJQUFjO0FBQy9CLFdBQUssTUFBTCx1QkFBa0M7QUFDaENBLFdBQUcsR0FBR0MsUUFBUSxDQUFkRCxHQUFjLENBQWRBO0FBRUY7O0FBQUEsYUFBUUUsS0FBRCxpQkFBZ0Isa0NBQXZCLEtBQXVCLENBQXZCO0FBSkY7O0FBT0EsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFpQixNQUFNQyxHQUFHLENBQUhBLFdBQWU7QUFBNUM7QUFBNEMsS0FBZkEsQ0FBN0I7QUFDQSxVQUFNQyxNQUFNLEdBQUcsQ0FDYixHQUFHLFlBRFUsT0FDVixHQURVLEVBRWIsSUFBSVIsU0FDQSxTQURBQSxHQUZOLEVBRUUsQ0FGYSxDQUFmO0FBU0EsV0FBTztBQUFBO0FBQUE7QUFBUDtBQUFPLEtBQVA7QUFHRjs7QUFBQSx5Q0FHc0I7QUFDcEIsd0JBQ0UsNkJBQUMsaUJBQUQsZUFBQyxDQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xTLHNCQUFjLEVBRFQ7QUFFTDtBQUNBO0FBQ0E7QUFDQUMsMENBQWtDLEVBQ2hDVixPQUF3QyxTQUFTVyxJQUFJLENBQXJEWCxHQUFpRFcsRUFBakRYLEdBUE47QUFDUztBQURULG9CQVVFLHVDQVhKLEtBV0ksQ0FWRixDQURGO0FBZ0JGWTs7QUFBQUEsUUFBTSxHQUFHO0FBQ1Asd0JBQ0Usc0RBQ0UsbUNBREYsSUFDRSxDQURGLGVBRUUsd0RBQ0UsbUNBREYsSUFDRSxDQURGLGVBRUUseUNBTE4sSUFLTSxDQUZGLENBRkYsQ0FERjtBQTNFdUU7O0FBQUE7OztBQUF0REMsUSxDQUNaQyxrQkFEWUQsR0FDU2IscUJBS3hCLE1BQU0sRUFOU2E7QUFBQUEsUSxDQU9aRSxrQkFQWUYsR0FPU2IscUJBS3hCLE1BQU0sRUFaU2E7QUFBQUEsUSxDQWFaRyxtQkFiWUgsR0FhVWIscUJBS3pCLE1BQU0sRUFsQlNhOztBQXVGZCxtQkFBbUJaLGdCQUFuQixDQUtMO0FBQUE7QUFBQTtBQUFBO0FBU0FXOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQTJCLGFBQWpDO0FBQ0Esd0JBQ0Usa0VBRU0sS0FGTjtBQUdFLFNBQUcsRUFBRUssU0FBUyxRQUhoQjtBQUlFLHlCQUNFQSx5QkFOTjtBQUNFLE9BREY7QUFYRjs7QUFBQTs7O0FBTFdDLEksQ0FNSkMsV0FOSUQsR0FNVUUsZ0NBTlZGO0FBQUFBLEksQ0FRSkcsU0FSSUgsR0FRUTtBQUNqQkksVUFBUSxFQUFFQyx3QkFETztBQUFBLENBUlJMOztBQTZCTixtQkFBbUJqQixnQkFBbkIsQ0FNTDtBQUFBO0FBQUE7QUFBQTtBQVVBdUI7O0FBQUFBLGFBQVcsR0FBeUI7QUFDbEMsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUF5QixhQUEvQjtBQUNBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DO0FBQ0EsVUFBTUMsUUFBUSxHQUNaNUIsS0FBSyxJQUFJQSxLQUFLLENBQWRBLFNBQXdCQSxLQUFLLENBQUxBLE9BQWM2QixDQUFELElBQU8sY0FBNUM3QixDQUE0QyxDQUFwQkEsQ0FBeEJBLEdBREY7QUFHQSxVQUFNOEIsZUFBOEIsR0FBcEM7QUFDQUYsWUFBUSxDQUFSQSxRQUFrQkcsSUFBRCxJQUFVO0FBQ3pCRCxxQkFBZSxDQUFmQSxtQkFDRTtBQUNFLFdBQUcsRUFBRyxHQUFFQyxJQURWO0FBRUUsYUFBSyxFQUFFLFdBRlQ7QUFHRSxXQUFHLEVBSEw7QUFJRSxZQUFJLEVBQUcsR0FBRUMsV0FBWSxVQUFTQyxTQUFTLE1BRXJDLEdBQUVwQixrQ0FOTjtBQU9FLFVBQUUsRUFQSjtBQVFFLG1CQUFXLEVBQUUsMEJBQTBCVixTQVQzQzJCO0FBQ0UsUUFERkEsZUFXRTtBQUNFLFdBQUcsRUFETDtBQUVFLGFBQUssRUFBRSxXQUZUO0FBR0UsV0FBRyxFQUhMO0FBSUUsWUFBSSxFQUFHLEdBQUVFLFdBQVksVUFBU0MsU0FBUyxNQUVyQyxHQUFFcEIsa0NBTk47QUFPRSxtQkFBVyxFQUFFLDBCQUEwQlYsU0FsQjNDMkI7QUFXRSxRQVhGQTtBQURGRjtBQXdCQSxXQUFPRSxlQUFlLENBQWZBLHNCQUFQO0FBR0ZJOztBQUFBQSx5QkFBdUIsR0FBRztBQUN4QixVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQWtDLGFBQXhDO0FBQ0EsVUFBTTtBQUFBO0FBQUEsUUFBeUMsS0FBL0M7QUFFQSxXQUNFLE1BQU0sQ0FBTixjQUFNLENBQU4sS0FDUWhDLE1BQUQsSUFBaUI7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsVUFBSSxDQUFDQSxNQUFNLENBQU5BLGNBQXFCaUMsOEJBQThCLENBQXhELEtBQXdELENBQW5EakMsQ0FBTCxFQUFrRTtBQUNoRTtBQUdGOztBQUFBLDBCQUNFO0FBQ0UsV0FBRyxFQURMO0FBRUUsV0FBRyxFQUFFQSxNQUFNLENBRmI7QUFHRSxZQUFJLEVBQUcsR0FBRThCLFdBQVksVUFBU0MsU0FBUyxDQUNyQy9CLE1BQU0sQ0FEK0IsS0FFckMsR0FBRVcsa0NBTE47QUFNRSxVQUFFLEVBTko7QUFPRSxhQUFLLEVBQUUsV0FQVDtBQVFFLG1CQUFXLEVBQUUsMEJBQTBCVixTQVQzQztBQUNFLFFBREY7QUFUSixPQXNCRTtBQXRCRixZQURGLE9BQ0UsQ0FERjtBQTRCRmlDOztBQUFBQSxxQkFBbUIsR0FBeUI7QUFDMUMsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUF5QixhQUEvQjtBQUNBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DO0FBRUEsVUFBTUMsWUFBWSxHQUNoQixLQUFLLElBQUlyQyxLQUFLLENBQWQsU0FDSSxLQUFLLENBQUwsT0FBYytCLElBQUQsSUFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsYUFBT0EsSUFBSSxDQUFKQSxTQUFjSSw4QkFBOEIsQ0FBbkQsS0FBbUQsQ0FBNUNKLENBQVA7QUFMTixLQUNJLENBREosR0FERjtBQVVBLFdBQU8sQ0FBQ00sWUFBWSxDQUFiLGdCQUVIQSxZQUFZLENBQVpBLElBQWtCTixJQUFELGlCQUNmO0FBQ0UsU0FBRyxFQURMO0FBRUUsV0FBSyxFQUFFLFdBRlQ7QUFHRSxTQUFHLEVBSEw7QUFJRSxVQUFJLEVBQUcsR0FBRUMsV0FBWSxVQUFTQyxTQUFTLE1BRXJDLEdBQUVwQixrQ0FOTjtBQU9FLFFBQUUsRUFQSjtBQVFFLGlCQUFXLEVBQUUsMEJBQTBCVixTQVgvQztBQUdNLE1BREZrQyxDQUZKO0FBZ0JGdEI7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBV0YsYUFYSjtBQVlBLFVBQU11QixnQkFBZ0IsR0FBR0Msa0JBQWtCLEtBQTNDO0FBQ0EsVUFBTTtBQUFBO0FBQUEsUUFBeUMsS0FBL0M7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQU47QUFFQSxRQUFJO0FBQUE7QUFBQSxRQUFXLGFBQWY7QUFDQSxRQUFJZCxRQUFRLEdBQUcsV0FBZixTQWxCTyxDQW1CUDs7QUFDQSxjQUEyQztBQUN6Q0EsY0FBUSxHQUFHZSxzQ0FBOEJDLEtBQUQsSUFBZ0I7QUFBQTs7QUFDdEQsY0FBTUMsYUFBYSxHQUFHRCxLQUFILFNBQUdBLFNBQUgsV0FBR0EsR0FBSCxNQUFHQSxHQUFILGdCQUFHQSxLQUFLLENBQVIsc0RBQUdBLGFBQXRCLG1CQUFzQkEsQ0FBdEI7O0FBQ0EsWUFBSSxNQUFLLEtBQUwsYUFBSyxVQUFMLGtCQUFLLENBQUwscUJBQTJCLENBQS9CLGVBQStDO0FBQzdDRSxpQkFBTyxDQUFQQTtBQUlGOztBQUFBO0FBUEZsQixPQUFXZSxDQUFYZjtBQVNBLFVBQUksV0FBSixhQUNFa0IsT0FBTyxDQUFQQTtBQUtKOztBQUFBLFFBQUlDLGFBQWEsR0FBakI7QUFDQSxRQUFJQyxlQUFlLEdBQW5CLE1BckNPLENBdUNQOztBQUNBQyxRQUFJLEdBQUdOLDRCQUFtQk0sSUFBSSxJQUF2Qk4sSUFBZ0NDLEtBQUQsSUFBVztBQUMvQyxVQUFJLENBQUosT0FBWTtBQUNaLFlBQU07QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxxQkFBZTtBQUNiLFlBQUlNLE9BQWUsR0FBbkI7O0FBRUEsWUFBSUMsSUFBSSxLQUFKQSxVQUFtQnZDLEtBQUssQ0FBTEEsU0FBdkIsWUFBa0Q7QUFDaERzQyxpQkFBTyxHQUFQQTtBQURGLGVBRU8sSUFBSUMsSUFBSSxLQUFKQSxVQUFtQnZDLEtBQUssQ0FBTEEsUUFBdkIsYUFBa0Q7QUFDdkRvQyx5QkFBZSxHQUFmQTtBQURLLGVBRUEsSUFBSUcsSUFBSSxLQUFSLFVBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FDR3ZDLEtBQUssQ0FBTEEsT0FBYUEsS0FBSyxDQUFMQSw0QkFBa0MsQ0FBaEQsQ0FBQ0EsSUFDQUEsS0FBSyxDQUFMQSw0QkFDRSxDQUFDQSxLQUFLLENBQU4sUUFBZUEsS0FBSyxDQUFMQSxTQUhwQixpQkFFR0EsQ0FGSCxFQUlFO0FBQ0FzQyxtQkFBTyxHQUFQQTtBQUNBRSxrQkFBTSxDQUFOQSxvQkFBNEJDLElBQUQsSUFBVTtBQUNuQ0gscUJBQU8sSUFBSyxJQUFHRyxJQUFLLEtBQUl6QyxLQUFLLE1BQTdCc0M7QUFERkU7QUFHQUYsbUJBQU8sSUFBUEE7QUFFSDtBQUVEOztBQUFBLHFCQUFhO0FBQ1hKLGlCQUFPLENBQVBBLEtBQ0csOEJBQTZCRixLQUFLLENBQUNPLElBQUssMkJBQTBCRCxPQUFRLE9BQU1JLGFBQWEsQ0FBQ0MsSUFEakdUO0FBR0E7QUFFSDtBQS9CRCxhQStCTztBQUNMO0FBQ0EsWUFBSUssSUFBSSxLQUFKQSxVQUFtQnZDLEtBQUssQ0FBTEEsUUFBdkIsV0FBZ0Q7QUFDOUNtQyx1QkFBYSxHQUFiQTtBQUVIO0FBQ0Q7O0FBQUE7QUF6Q0ZFLEtBQU9OLENBQVBNLENBeENPLENBb0ZQOztBQUNBLFVBQU1PLFNBQStCLEdBQUdDLEtBQUssQ0FBTEEsMkJBQXhDOztBQUdBLFFBQ0UsU0FBUyxJQUFULFVBRUE7QUFDQTNDLFVBQU0sQ0FITixTQUlBO0FBQ0EyQyxTQUFLLENBQUxBLFFBQWMzQyxNQUFNLENBQU5BLE1BTmhCLFFBTUUyQyxDQU5GLEVBT0U7QUFDQSxZQUFNQyxTQUFTLEdBQUlDLEVBQUQ7QUFBQTs7QUFBQSxlQUNoQkEsRUFEZ0IsU0FDaEJBLE1BRGdCLFdBQ2hCQSxHQURnQixNQUNoQkEsR0FEZ0IsYUFDaEJBLEVBQUUsQ0FEYyw0RUFDaEJBLFVBRGdCLGlGQUNoQkEsc0JBRGdCO0FBQWxCLFFBREEsQ0FHQTs7O0FBQ0E3QyxZQUFNLENBQU5BLHVCQUErQjhCLEtBQUQsSUFBK0I7QUFDM0QsWUFBSWEsS0FBSyxDQUFMQSxRQUFKLEtBQUlBLENBQUosRUFBMEI7QUFDeEJiLGVBQUssQ0FBTEEsUUFBZWUsRUFBRCxJQUFRRCxTQUFTLENBQVRBLEVBQVMsQ0FBVEEsSUFBaUJGLFNBQVMsQ0FBVEEsS0FBdkNaLEVBQXVDWSxDQUF2Q1o7QUFERixlQUVPLElBQUljLFNBQVMsQ0FBYixLQUFhLENBQWIsRUFBc0I7QUFDM0JGLG1CQUFTLENBQVRBO0FBRUg7QUFORDFDO0FBU0Y7O0FBQUEsd0JBQ0UscUNBQVUsS0FBVixPQUNHLDBEQUNDLHlFQUNFO0FBQ0UsNkJBREY7QUFFRSx5QkFBaUJTLFNBQVMsWUFGNUI7QUFHRSw2QkFBdUIsRUFBRTtBQUN2QnFDLGNBQU0sRUFMWjtBQUk2QjtBQUgzQixNQURGLGVBUUU7QUFDRSw2QkFERjtBQUVFLHlCQUFpQnJDLFNBQVMsWUFGNUI7QUFBQSxvQkFJRTtBQUNFLDZCQUF1QixFQUFFO0FBQ3ZCcUMsY0FBTSxFQWhCbEI7QUFlbUM7QUFEM0IsTUFKRixDQVJGLENBRkosK0JBd0JFO0FBQ0UsVUFBSSxFQUROO0FBRUUsYUFBTyxFQUFFakIsOEJBQXFCTSxJQUFJLElBQXpCTixJQTFCYixRQTBCYUE7QUFGWCxNQXhCRixFQTRCR3BCLFNBQVMsaUJBQ1IseUVBQ0U7QUFDRSxVQUFJLEVBRE47QUFFRSxhQUFPLEVBSFg7QUFDRSxNQURGLEVBS0csaUNBQ0M7QUFDRSxTQUFHLEVBREw7QUFFRSxVQUFJLEVBQUVzQyxhQUFhLEdBQUcsMEJBUjVCLGVBUTRCO0FBRnhCLE1BTkosZUFZRTtBQUNFLFNBQUcsRUFETDtBQUVFLFFBQUUsRUFGSjtBQUdFLFVBQUksRUFmUjtBQVlFLE1BWkYsRUFrQkcvQyxNQUFNLGlCQUNMO0FBQ0Usb0JBREY7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QjhDLGNBQU0sRUFBRUosU0FBUyxDQUFUQSxJQUNBTSxLQUFELElBQVdBLEtBQUssQ0FBTEEsOEJBRFZOLG1HQXRCaEIsRUFzQmdCQTtBQURlO0FBRjNCLE1BbkJKLGVBOEJFO0FBQ0UseUJBREY7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QkksY0FBTSxFQWpDWjtBQWdDNkI7QUFGM0IsTUE5QkYsZUFvQ0UsNERBQ0U7QUFDRSx5QkFERjtBQUVFLDZCQUF1QixFQUFFO0FBQ3ZCQSxjQUFNLEVBeENkO0FBdUMrQjtBQUYzQixNQURGLENBcENGLGVBNENFO0FBQVEsV0FBSyxFQUFiO0FBQWMsU0FBRyxFQXpFdkI7QUF5RU0sTUE1Q0YsQ0E3QkosRUE0RUcsMkJBQ0MsNERBQ0csNENBQ0M7QUFDRSxTQUFHLEVBREw7QUFFRSxVQUFJLEVBQUVDLGFBQWEsR0FBR0UsVUFBVSxVQUp0QyxlQUlzQztBQUZsQyxNQUZKLEVBT0csS0FQSCxXQU9HLEVBUEgsRUFRRyxrQ0FDQztBQUNFLFNBQUcsRUFETDtBQUVFLFVBQUksRUFDRjVCLFdBQVcsR0FDWEcsOEJBQThCLENBQzVCRixTQUFTLENBQUUsaUJBQWdCNEIsT0FGN0I3QixnQkFFVyxDQURtQixDQUQ5QkEsR0FISjtBQVNFLFFBQUUsRUFUSjtBQVVFLFdBQUssRUFBRSxXQVZUO0FBV0UsaUJBQVcsRUFBRSwwQkFBMEI3QixTQXBCN0M7QUFTSSxNQVRKLEVBdUJHLHFCQUFxQmlELElBQUksS0FBekIsMEJBQ0M7QUFDRSxTQUFHLEVBREw7QUFFRSxVQUFJLEVBQ0ZwQixXQUFXLEdBQ1hHLDhCQUE4QixDQUM1QkYsU0FBUyxDQUNOLGlCQUFnQjRCLE9BQVEsU0FBUUMsV0FBVyxNQUhoRDlCLEVBRVcsQ0FEbUIsQ0FEOUJBLEdBSEo7QUFXRSxRQUFFLEVBWEo7QUFZRSxXQUFLLEVBQUUsV0FaVDtBQWFFLGlCQUFXLEVBQUUsMEJBQTBCN0IsU0FyQzdDO0FBd0JJLE1BeEJKLEVBd0NHLHFCQUFxQixLQXhDeEIsdUJBd0N3QixFQXhDeEIsRUF5Q0cscUJBQXFCLEtBekN4QixtQkF5Q3dCLEVBekN4QixFQTBDRztBQUFBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFBVSxRQUFFLEVBOUNoQjtBQThDSSxNQTlDSixFQWdER1EsTUFBTSxJQTdIYixJQTZFSSxDQTdFSixFQWdJRzZCLDZCQUFvQkEsZUFBcEJBLGNBQXdDLElBQUl1QixRQUFRLElBakl6RCxFQWlJNkMsQ0FBeEN2QixDQWhJSCxDQURGO0FBdE5GOztBQUFBOzs7QUFOV3dCLEksQ0FPSjFDLFdBUEkwQyxHQU9VekMsZ0NBUFZ5QztBQUFBQSxJLENBU0p4QyxTQVRJd0MsR0FTUTtBQUNqQkMsT0FBSyxFQUFFdkMsbUJBRFU7QUFFakJ3QyxhQUFXLEVBQUV4QyxtQkFGSTtBQUFBLENBVFJzQzs7QUFtV04sbUJBQW1CNUQsZ0JBQW5CLENBQTZCO0FBQUE7QUFBQTtBQUFBO0FBS2xDVzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFzQixhQUE1QjtBQUNBLG1CQUFlLE9BQU9vRCxXQUFQO0FBQ2Ysd0JBQU87QUFBSyxRQUFFLEVBQVA7QUFBaUIsNkJBQXVCLEVBQUU7QUFBRVYsY0FBTSxFQUF6RDtBQUFpRDtBQUExQyxNQUFQO0FBUmdDOztBQUFBOzs7QUFBdkJXLEksQ0FDSjlDLFdBREk4QyxHQUNVN0MsZ0NBRFY2Qzs7QUFZTix5QkFBeUJoRSxnQkFBekIsQ0FBZ0Q7QUFBQTtBQUFBO0FBQUE7QUFjckRpRTs7QUFBQUEsa0JBQWdCLEdBQUc7QUFDakIsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXlDLGFBQS9DO0FBQ0EsVUFBTTtBQUFBO0FBQUEsUUFBeUMsS0FBL0M7QUFFQSxXQUFPQyxNQUFNLENBQU5BLGNBQU0sQ0FBTkEsS0FBNEJwRSxNQUFELElBQWlCO0FBQ2pELFVBQUlxRSxXQUFXLEdBQWY7O0FBQ0EsVUFBSXBFLEtBQUosRUFBcUMsRUFNckM7O0FBQUEsVUFBSSxDQUFDLGFBQWFELE1BQU0sQ0FBcEIsSUFBQyxDQUFELElBQThCRixLQUFLLENBQUxBLFNBQWVFLE1BQU0sQ0FBdkQsSUFBa0NGLENBQWxDLEVBQStEO0FBRS9ELDBCQUNFO0FBQ0UsYUFBSyxFQURQO0FBRUUsV0FBRyxFQUFFRSxNQUFNLENBRmI7QUFHRSxXQUFHLEVBQUcsR0FBRThCLFdBQVksVUFBU0MsU0FBUyxDQUNwQy9CLE1BQU0sQ0FEOEIsS0FFcEMsR0FBRVcsa0NBTE47QUFNRSxhQUFLLEVBQUUsV0FOVDtBQU9FLG1CQUFXLEVBQUUsMEJBQTBCVixTQVB6QztBQUFBLFNBREYsV0FDRSxFQURGO0FBVkYsS0FBT21FLENBQVA7QUF5QkZFOztBQUFBQSxZQUFVLEdBQUc7QUFDWCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBMkMsYUFBakQ7QUFDQSxVQUFNO0FBQUE7QUFBQSxRQUF5QyxLQUEvQztBQUVBLFVBQU1DLGFBQWEsR0FBR3pFLEtBQUgsU0FBR0EsU0FBSCxXQUFHQSxHQUFILE1BQUdBLFFBQUssQ0FBTEEsT0FBZStCLElBQUQsSUFBVUEsSUFBSSxDQUFKQSxTQUE5QyxLQUE4Q0EsQ0FBeEIvQixDQUF0QjtBQUNBLFVBQU0wRSxrQkFBa0IsR0FBR0MsZ0JBQUgsU0FBR0Esb0JBQUgsV0FBR0EsR0FBSCxNQUFHQSxtQkFBZ0IsQ0FBaEJBLE9BQTBCNUMsSUFBRCxJQUNsREEsSUFBSSxDQUFKQSxTQURGLEtBQ0VBLENBRHlCNEMsQ0FBM0I7QUFJQSxXQUFPLENBQUMsR0FBRCxlQUFtQixHQUFuQix3QkFBK0M1QyxJQUFELElBQVU7QUFDN0QsVUFBSXdDLFdBQVcsR0FBZjs7QUFDQSxVQUFJcEUsS0FBSixFQUFxQyxFQUtyQzs7QUFBQSwwQkFDRTtBQUNFLFdBQUcsRUFETDtBQUVFLFdBQUcsRUFBRyxHQUFFNkIsV0FBWSxVQUFTQyxTQUFTLE1BRXBDLEdBQUVwQixrQ0FKTjtBQUtFLGFBQUssRUFBRSxXQUxUO0FBTUUsYUFBSyxFQU5QO0FBT0UsbUJBQVcsRUFBRSwwQkFBMEJWLFNBUHpDO0FBQUEsU0FERixXQUNFLEVBREY7QUFQRixLQUFPLENBQVA7QUFzQkZ5RTs7QUFBQUEsb0JBQWtCLEdBQUc7QUFDbkI7QUFDQTtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBaUMsYUFBdkM7QUFDQSxVQUFNO0FBQUE7QUFBQSxRQUF5QyxLQUEvQztBQUVBLFdBQU9DLGFBQWEsQ0FBYkEsT0FFRkMsUUFBRCxJQUNFQSxRQUFRLENBQVJBLG1CQUE0QixDQUFDLHFCQUg1QkQsUUFHNEIsQ0FINUJBLE1BS0NDLFFBQUQsaUJBQ0g7QUFDRSxTQUFHLEVBREw7QUFFRSxXQUFLLEVBQUUsV0FGVDtBQUdFLGlCQUFXLEVBQUUsMEJBQTBCM0UsU0FIekM7QUFJRSxjQUFRLEVBSlY7QUFLRSxTQUFHLEVBQUcsR0FBRTZCLFdBQVksVUFBUzhDLFFBQVMsR0FBRWpFLGtDQVg5QztBQU1JLE1BTkdnRSxDQUFQO0FBZ0JGOztBQUFBLDhDQUFtRTtBQUNqRSxVQUFNO0FBQUE7QUFBQSxRQUFOOztBQUNBLFFBQUk7QUFDRixZQUFNRSxJQUFJLEdBQUdDLElBQUksQ0FBSkEsVUFBYixhQUFhQSxDQUFiO0FBQ0EsYUFBTyxzQ0FBUCxJQUFPLENBQVA7QUFDQSxLQUhGLENBR0UsWUFBWTtBQUNaLFVBQUlDLEdBQUcsQ0FBSEEsZ0JBQUosb0JBQUlBLENBQUosRUFBK0M7QUFDN0MsY0FBTSxVQUNILDJEQUEwRDlCLGFBQWEsQ0FBQ0MsSUFEM0UscURBQU0sQ0FBTjtBQUlGOztBQUFBO0FBRUg7QUFFRHJDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVFGLGFBUko7QUFTQSxVQUFNdUIsZ0JBQWdCLEdBQUdDLGtCQUFrQixLQUEzQztBQUVBLFVBQU07QUFBQTtBQUFBLFFBQXlDLEtBQS9DOztBQUVBLG1CQUFlO0FBQ2IsaUJBQTJDLEVBSTNDOztBQUFBLFlBQU0yQyxRQUFRLEdBQUcsQ0FDZkMsV0FEZSwyQ0FFZkMsV0FGZSxpQ0FHZkMsV0FIRixtQ0FBaUIsQ0FBakI7QUFNQSwwQkFDRSw0REFDR0MsWUFBWSxJQUFaQSx1Q0FDQztBQUNFLFVBQUUsRUFESjtBQUVFLFlBQUksRUFGTjtBQUdFLGFBQUssRUFBRSxXQUhUO0FBSUUsbUJBQVcsRUFBRSwwQkFBMEJuRixTQUp6QztBQUtFLCtCQUF1QixFQUFFO0FBQ3ZCc0QsZ0JBQU0sRUFBRThCLFVBQVUsQ0FBVkEsc0JBQ04sYUFQTixjQU1ZQTtBQURlLFNBTDNCO0FBVUUsMkJBWk47QUFFSSxRQUZKLEVBZUdMLFFBQVEsR0FDTEEsUUFBUSxDQUFSQSxJQUFjbkQsSUFBRCxpQkFDWDtBQUNFLFdBQUcsRUFETDtBQUVFLFdBQUcsRUFBRyxHQUFFQyxXQUFZLFVBQVNELElBQUssR0FBRWxCLGtDQUZ0QztBQUdFLGFBQUssRUFBRSxXQUhUO0FBSUUsbUJBQVcsRUFBRSwwQkFBMEJWLFNBSnpDO0FBS0UsMkJBUEM7QUFFSCxRQURGK0UsQ0FESyxHQWZYLE1BMEJHMUMsNkJBQW9CQSxlQUFwQkEsY0FBd0MsSUFBSWdELFFBQVEsSUEzQnpELEVBMkI2QyxDQUF4Q2hELENBMUJILENBREY7QUFnQ0Y7O0FBQUEsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFOOztBQUVBLGNBQTJDO0FBQ3pDLFVBQUksV0FBSixhQUNFRyxPQUFPLENBQVBBO0FBS0o7O0FBQUEsVUFBTThDLFVBQVUsR0FBRyxjQUNqQjtBQUNFLFdBQUssRUFEUDtBQUVFLHdCQUZGO0FBR0UsU0FBRyxFQUhMO0FBSUUsU0FBRyxFQUNEekQsV0FBVyxHQUNYQyxTQUFTLENBQUUsaUJBQWdCNEIsT0FBUSxTQUFRQyxXQUFXLE1BRHREOUIsRUFDUyxDQURUQSxHQUxKO0FBU0UsV0FBSyxFQUFFLFdBVFQ7QUFVRSxpQkFBVyxFQUFFLDBCQUEwQjdCLFNBVnpDO0FBQUEsT0FXT0EsU0FBa0MsU0FBbENBLEdBWlUsRUFDakIsRUFEaUIsRUFjakJBLHVCQUNFLEtBZmUsQ0FBbkI7QUFpQ0EsVUFBTXVGLFNBQVMsR0FBRyxjQUNoQjtBQUNFLFdBQUssRUFEUDtBQUVFLHdCQUZGO0FBR0UsU0FBRyxFQUNEMUQsV0FBVyxHQUNWLGlCQUFnQjZCLE9BRGpCN0IsbUJBSko7QUFRRSxTQUFHLEVBUkw7QUFTRSxXQUFLLEVBQUUsV0FUVDtBQVVFLGlCQUFXLEVBQUUsMEJBQTBCN0IsU0FWekM7QUFBQSxPQVdPQSxTQUFrQyxTQUFsQ0EsR0FaUyxFQUNoQixFQURnQixFQWNoQkEsdUJBQ0UsS0FmYyxDQUFsQjtBQStCQSx3QkFDRSw0REFDRyxnQ0FDRytFLFFBQVEsQ0FBUkEsSUFDR25ELElBQUQsSUFDRSxDQUFDQSxJQUFJLENBQUpBLE1BQUQsV0FBQ0EsQ0FBRCxpQkFDRTtBQUNFLFNBQUcsRUFETDtBQUVFLFNBQUcsRUFBRyxHQUFFQyxXQUFZLFVBQVNDLFNBQVMsTUFFcEMsR0FBRXBCLGtDQUpOO0FBS0UsV0FBSyxFQUFFLFdBTFQ7QUFNRSxpQkFBVyxFQUFFLDBCQUEwQlYsU0FWbEQ7QUFJUyxNQUhOK0UsQ0FESCxHQURILE1BZ0JHSSxZQUFZLElBQVpBLHVDQUNDO0FBQ0UsUUFBRSxFQURKO0FBRUUsVUFBSSxFQUZOO0FBR0UsV0FBSyxFQUFFLFdBSFQ7QUFJRSxpQkFBVyxFQUFFLDBCQUEwQm5GLFNBSnpDO0FBS0UsNkJBQXVCLEVBQUU7QUFDdkJzRCxjQUFNLEVBQUU4QixVQUFVLENBQVZBLHNCQUNOLGFBeEJWLGNBdUJnQkE7QUFEZTtBQUwzQixNQWpCSixFQTZCR3BGLHNCQUNDLFNBRERBLEdBN0JILE1BdUNHLHFCQUFxQixLQXZDeEIsa0JBdUN3QixFQXZDeEIsRUF3Q0cscUJBeENILFdBeUNHLHFCQUFxQmlELElBQUksS0FBekIsYUF6Q0gsWUEwQ0dkLGdCQUFnQixJQUFoQkEsc0JBQTBDLEtBMUM3QyxnQkEwQzZDLEVBMUM3QyxFQTJDR0EsZ0JBQWdCLElBQWhCQSxzQkFBMEMsS0EzQzdDLFVBMkM2QyxFQTNDN0MsRUE0Q0dFLDZCQUFvQkEsZUFBcEJBLGNBQXdDLElBQUlnRCxRQUFRLElBN0N6RCxFQTZDNkMsQ0FBeENoRCxDQTVDSCxDQURGO0FBalBtRDs7QUFBQTs7O0FBQTFDK0MsVSxDQUNKakUsV0FESWlFLEdBQ1VoRSxnQ0FEVmdFO0FBQUFBLFUsQ0FHSi9ELFNBSEkrRCxHQUdRO0FBQ2pCdEIsT0FBSyxFQUFFdkMsbUJBRFU7QUFFakJ3QyxhQUFXLEVBQUV4QyxtQkFGSTtBQUFBLENBSFI2RDtBQUFBQSxVLENBV0pJLGlCQVhJSixHQVlULDBUQVpTQTs7QUFvU2IscUNBQTZEO0FBQzNELFNBQU9LLE9BQU8sSUFBSyxHQUFFQyxNQUFPLEdBQUVBLE1BQU0sQ0FBTkEsc0JBQTZCLEdBQTNEO0FBR0Y7O0FBQUEsb0NBQTZEO0FBQzNELFFBQU1DLFdBQVcsR0FBRzFDLElBQUksS0FBSkEsaUJBQXBCO0FBQ0EsU0FBT1MsT0FBTyxHQUFJLEdBQUVpQyxXQUFZLElBQUdqQyxPQUFyQixRQUFxQyxHQUFFaUMsV0FBckQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNoMEJZLHdCQUF3QixrREFBa0Q7QUFDdkY7QUFDQSxxQkFBcUIsaUZBQWlGLHdDQUF3QyxtQ0FBbUM7QUFDakwsc0M7Ozs7Ozs7Ozs7O0FDSEEsaUJBQWlCLG1CQUFPLENBQUMsMkVBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqRDtBQUNBO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQTBCQyxrREFBUyxFQUF6Qzs7QUFFQSxNQUFNQyxVQUFOLFNBQXlCakYsb0RBQXpCLENBQWtDO0FBRWhDa0YsZUFBYSxHQUFFO0FBQ2IsUUFBR0gsbUJBQW1CLENBQUNJLFVBQXZCLEVBQWtDO0FBQ2hDLGFBQU87QUFDTDFDLGNBQU0sRUFBRTs7Ozs7O0FBREgsT0FBUDtBQVFEO0FBQ0Y7O0FBR0QxQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxhQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQyxzRkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFRRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyx3QkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFBUSxXQUFLLE1BQWI7QUFBYyxTQUFHLEVBQUMsNERBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixFQVVFO0FBQVEsNkJBQXVCLEVBQUUsS0FBS21GLGFBQUwsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQWJGLENBREY7QUFvQkQ7O0FBckMrQjs7QUF3Q25CRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZSh7IHJlcSwgcmVzIH06IERvY3VtZW50Q29udGV4dCkge31cblxuZnVuY3Rpb24gZGVkdXBlKGJ1bmRsZXM6IGFueVtdKTogYW55W10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBrZXB0ID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuanMkLywgJy5tb2R1bGUuanMnKVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG4gIHN0YXRpYyBib2R5VGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWJvZHktdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGh0bWxQcm9wc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWh0bWwtcHJvcHMtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VycyA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZW5oYW5jZS1hcHAtc2VydmVyISdcbiAgICAgICAgKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KGN0eCkpXG4gICAgICA6IFtdXG5cbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVuaGFuY2VyIG9mIGVuaGFuY2Vycykge1xuICAgICAgICBBcHAgPSBlbmhhbmNlcihBcHApXG4gICAgICB9XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgLi4uZmx1c2goKSxcbiAgICAgIC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyISdcbiAgICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgICAgOiBbXSksXG4gICAgXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIF9kb2N1bWVudFByb3BzOiBwcm9wcyxcbiAgICAgICAgICAvLyBJbiBkZXYgd2UgaW52YWxpZGF0ZSB0aGUgY2FjaGUgYnkgYXBwZW5kaW5nIGEgdGltZXN0YW1wIHRvIHRoZSByZXNvdXJjZSBVUkwuXG4gICAgICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvNTg2MFxuICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJz90cz0nICsgRGF0ZS5ub3coKSA6ICcnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RG9jdW1lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sIGV4dGVuZHMgQ29tcG9uZW50PFxuICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWxQcm9wcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sXG4gICAgICAgIHsuLi5odG1sUHJvcHN9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICBhbXA9e2luQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIE9yaWdpblByb3BzICZcbiAgICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkRWxlbWVudD4sXG4gICAgICBIVE1MSGVhZEVsZW1lbnRcbiAgICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIGdldENzc0xpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPyBmaWxlcy5maWx0ZXIoKGYpID0+IC9cXC5jc3MkLy50ZXN0KGYpKSA6IFtdXG5cbiAgICBjb25zdCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cywgYXNzZXRQcmVmaXggfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgZGVkdXBlKGR5bmFtaWNJbXBvcnRzKVxuICAgICAgICAubWFwKChidW5kbGU6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG5cbiAgZ2V0UHJlbG9hZE1haW5MaW5rcygpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPVxuICAgICAgZmlsZXMgJiYgZmlsZXMubGVuZ3RoXG4gICAgICAgID8gZmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuXG4gICAgICAgICAgICAvLyB0aGUgZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZVxuICAgICAgICAgICAgLy8gbW9kZXJuIHZhcmlhbnRzIG9ubHkuXG4gICAgICAgICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKVxuICAgICAgICAgIH0pXG4gICAgICAgIDogW11cblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCB7IHBhZ2UsIGJ1aWxkSWQgfSA9IF9fTkVYVF9EQVRBX19cblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnICYmICFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmdldENzc0xpbmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gQU1QX1JFTkRFUl9UQVJHRVRcbiAgICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSAvXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEvXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKSB8fCBmaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoKSB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMsIGxvd1ByaW9yaXR5RmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXM/LmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gbG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApXG5cbiAgICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBmaWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgICAgICA/IHsgdHlwZTogJ21vZHVsZScgfVxuICAgICAgICAgIDogeyBub01vZHVsZTogdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIHBvbHlmaWxsRmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gcG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhL1xcLm1vZHVsZVxcLmpzJC8udGVzdChwb2x5ZmlsbClcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IERvY3VtZW50UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhdGljTWFya3VwLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBkZXZGaWxlcyxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBib2R5VGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZGaWxlcyA9IFtcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXZGaWxlc1xuICAgICAgICAgICAgPyBkZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPXtwYWdlfVxuICAgICAgICAgIGtleT17YCR7cGFnZX0tbW9kZXJuYH1cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YClcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICBjb25zdCBhcHBTY3JpcHQgPSBbXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAga2V5PVwiX2FwcFwiXG4gICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICB7Li4uKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgPyB7IG5vTW9kdWxlOiB0cnVlIH0gOiB7fSl9XG4gICAgICAvPixcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBkYXRhLW5leHQtcGFnZT1cIi9fYXBwXCJcbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLm1vZHVsZS5qc2AgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXk9XCJfYXBwLW1vZGVyblwiXG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBkZXZGaWxlc1xuICAgICAgICAgID8gZGV2RmlsZXMubWFwKFxuICAgICAgICAgICAgICAoZmlsZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICFmaWxlLm1hdGNoKC9cXC5qc1xcLm1hcC8pICYmIChcbiAgICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7c3RhdGljTWFya3VwIHx8IGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAhZGlzYWJsZVJ1bnRpbWVKUyA/IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYXBwU2NyaXB0fVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIHBhZ2VTY3JpcHR9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTIHx8IHN0YXRpY01hcmt1cCA/IG51bGwgOiB0aGlzLmdldER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cygpfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihib2R5VGFncyB8fCBbXSkpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuXG5mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlOiBzdHJpbmcsIGJ1aWxkSWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzdGFydGluZ1VybCA9IHBhZ2UgPT09ICcvJyA/ICcvaW5kZXgnIDogcGFnZVxuICByZXR1cm4gYnVpbGRJZCA/IGAke3N0YXJ0aW5nVXJsfS4ke2J1aWxkSWR9LmpzYCA6IGAke3N0YXJ0aW5nVXJsfS5qc2Bcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuXHJcbiAgc2V0R29vZ2xlVGFncygpe1xyXG4gICAgaWYocHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6YFxyXG4gICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgZ3RhZygnY29uZmlnJywgJ1VBLTE1MTIwMDkwNC0xJyk7ICAgICAgICBcclxuICAgICAgICBgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ucHJvZ3Jlc3MvMC4yLjAvbnByb2dyZXNzLm1pbi5jc3NcIi8+Ki99XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTE1MTIwMDkwNC0xXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLnNldEdvb2dsZVRhZ3MoKX0+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L0h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=