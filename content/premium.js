! function(n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = n, e.c = t, e.d = function(n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "", e(e.s = 360)
}({
    0: function(n, t, e) {
        "use strict";
        n.exports = e(42)
    },
    122: function(n, t, e) {
        (n.exports = e(43)(!1)).push([n.i, '/*!\n * Bootstrap v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex="-1"]:focus {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\ndfn {\n  font-style: italic;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml [type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer::before {\n  content: "\\2014 \\00A0";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\n\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*="col-"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #212529;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered {\n  border: 0;\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover tbody tr:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(2.875rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row > .col,\n.form-row > [class*="col-"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745;\n}\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n.custom-select:valid:focus,\n.custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip, .was-validated\n.custom-select:valid ~ .valid-feedback,\n.was-validated\n.custom-select:valid ~ .valid-tooltip,\n.custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control-file:valid ~ .valid-feedback,\n.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,\n.form-control-file.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  background-color: #71dd8a;\n}\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label::after, .custom-file-input.is-valid ~ .custom-file-label::after {\n  border-color: inherit;\n}\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545;\n}\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n.custom-select:invalid:focus,\n.custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\n.custom-select:invalid ~ .invalid-feedback,\n.was-validated\n.custom-select:invalid ~ .invalid-tooltip,\n.custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control-file:invalid ~ .invalid-feedback,\n.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,\n.form-control-file.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  background-color: #efa2a9;\n}\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label::after, .custom-file-input.is-invalid ~ .custom-file-label::after {\n  border-color: inherit;\n}\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.form-inline .form-check {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n\n.btn:hover, .btn:focus {\n  text-decoration: none;\n}\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success:focus, .btn-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info:focus, .btn-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light:focus, .btn-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark:focus, .btn-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n}\n\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn + .btn-group,\n.btn-group-vertical .btn-group + .btn,\n.btn-group-vertical .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.btn-group-vertical .btn,\n.btn-group-vertical .btn-group {\n  width: 100%;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle > .btn input[type="radio"],\n.btn-group-toggle > .btn input[type="checkbox"],\n.btn-group-toggle > .btn-group > .btn input[type="radio"],\n.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group > .form-control,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text input[type="radio"],\n.input-group-text input[type="checkbox"] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  height: calc(2.875rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input:active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n\n.custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: "";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: #dee2e6;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: "";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E");\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3E%3C/svg%3E");\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'%23fff\'/%3E%3C/svg%3E");\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(128, 189, 255, 0.5);\n}\n\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple], .custom-select[size]:not([size="1"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input:focus ~ .custom-file-label::after {\n  border-color: #80bdff;\n}\n\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: "Browse";\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: 2.25rem;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: "Browse";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-range:focus {\n  outline: none;\n}\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    transition: none;\n  }\n}\n\n.custom-range::-ms-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #6c757d;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.nav-fill .nav-item {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n.navbar > .container,\n.navbar > .container-fluid {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: "";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n\n.navbar-expand {\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-expand .navbar-nav {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.navbar-expand .navbar-collapse {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n}\n\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E");\n}\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E");\n}\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.card-body {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-deck {\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-group {\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-top,\n  .card-group > .card:first-child .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:first-child .card-img-bottom,\n  .card-group > .card:first-child .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-top,\n  .card-group > .card:last-child .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:last-child .card-img-bottom,\n  .card-group > .card:last-child .card-footer {\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:only-child {\n    border-radius: 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-top,\n  .card-group > .card:only-child .card-header {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-bottom,\n  .card-group > .card:only-child .card-footer {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: 0;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n    border-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0;\n}\n\n.accordion .card:not(:first-of-type) .card-header:first-child {\n  border-radius: 0;\n}\n\n.accordion .card:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion .card:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: "/";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-link:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0062cc;\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\n\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #545b62;\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.badge-success[href]:hover, .badge-success[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1e7e34;\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\n.badge-info[href]:hover, .badge-info[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #117a8b;\n}\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\n\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #d39e00;\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #bd2130;\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\n.badge-light[href]:hover, .badge-light[href]:focus {\n  color: #212529;\n  text-decoration: none;\n  background-color: #dae0e5;\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1d2124;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary .alert-link {\n  color: #002752;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary hr {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary .alert-link {\n  color: #202326;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning .alert-link {\n  color: #533f03;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger .alert-link {\n  color: #491217;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.media-body {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.list-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item:hover, .list-group-item:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  background-color: #fff;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n\n.modal.show .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-dialog-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2));\n}\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - (0.5rem * 2));\n  content: "";\n}\n\n.modal-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.modal-header .close {\n  padding: 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n\n.modal-footer > :not(:first-child) {\n  margin-left: .25rem;\n}\n\n.modal-footer > :not(:last-child) {\n  margin-right: .25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2));\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - (1.75rem * 2));\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.show {\n  opacity: 0.9;\n}\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {\n  bottom: 0;\n}\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {\n  top: 0;\n}\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^="top"] {\n  margin-bottom: 0.5rem;\n}\n\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^="top"] .arrow {\n  bottom: calc((0.5rem + 1px) * -1);\n}\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before,\n.bs-popover-top .arrow::after,\n.bs-popover-auto[x-placement^="top"] .arrow::after {\n  border-width: 0.5rem 0.5rem 0;\n}\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {\n  bottom: 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n\n\n.bs-popover-top .arrow::after,\n.bs-popover-auto[x-placement^="top"] .arrow::after {\n  bottom: 1px;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^="right"] {\n  margin-left: 0.5rem;\n}\n\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^="right"] .arrow {\n  left: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before,\n.bs-popover-right .arrow::after,\n.bs-popover-auto[x-placement^="right"] .arrow::after {\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n}\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {\n  left: 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n\n.bs-popover-right .arrow::after,\n.bs-popover-auto[x-placement^="right"] .arrow::after {\n  left: 1px;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {\n  margin-top: 0.5rem;\n}\n\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^="bottom"] .arrow {\n  top: calc((0.5rem + 1px) * -1);\n}\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before,\n.bs-popover-bottom .arrow::after,\n.bs-popover-auto[x-placement^="bottom"] .arrow::after {\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n}\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {\n  top: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n\n.bs-popover-bottom .arrow::after,\n.bs-popover-auto[x-placement^="bottom"] .arrow::after {\n  top: 1px;\n  border-bottom-color: #fff;\n}\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: "";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^="left"] {\n  margin-right: 0.5rem;\n}\n\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^="left"] .arrow {\n  right: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before,\n.bs-popover-left .arrow::after,\n.bs-popover-auto[x-placement^="left"] .arrow::after {\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n}\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {\n  right: 0;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n\n.bs-popover-left .arrow::after,\n.bs-popover-auto[x-placement^="left"] .arrow::after {\n  right: 1px;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-item.active,\n  .carousel-item-next,\n  .carousel-item-prev {\n    transition: none;\n  }\n}\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0;\n}\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next,\n  .active.carousel-item-right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-prev,\n  .active.carousel-item-left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-duration: .6s;\n  transition-property: opacity;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  opacity: 0;\n}\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev,\n.carousel-fade .carousel-item.active,\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-prev {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-fade .carousel-item-next,\n  .carousel-fade .carousel-item-prev,\n  .carousel-fade .carousel-item.active,\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-prev {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3E%3C/svg%3E");\n}\n\n.carousel-control-next-icon {\n  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3E%3C/svg%3E");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  position: relative;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.carousel-indicators li::before {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: "";\n}\n\n.carousel-indicators li::after {\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: "";\n}\n\n.carousel-indicators .active {\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #007bff !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n\n.bg-success {\n  background-color: #28a745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #007bff !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #28a745 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: "";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive::before {\n  display: block;\n  content: "";\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important;\n}\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #007bff !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0062cc !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #545b62 !important;\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #1e7e34 !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #117a8b !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #d39e00 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #bd2130 !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #dae0e5 !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #1d2124 !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: " (" attr(title) ")";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n  .container {\n    min-width: 992px !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important;\n  }\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #dee2e6;\n  }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}', ""])
    },
    123: function(n, t) {
        n.exports = function(n) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!n || "string" != typeof n) return n;
            var e = t.protocol + "//" + t.host,
                r = e + t.pathname.replace(/\/[^\/]*$/, "/");
            return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, t) {
                var o, a = t.trim().replace(/^"(.*)"$/, function(n, t) {
                    return t
                }).replace(/^'(.*)'$/, function(n, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a) ? n : (o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? e + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    },
    13: function(n, t, e) {
        "use strict";

        function r(n) {
            return function() {
                return n
            }
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(n) {
            return n
        }, n.exports = o
    },
    15: function(n, t, e) {
        "use strict";
        var r, o, a = e(2),
            i = a.browser,
            l = "undefined" != typeof _wehPanelName && {
                panel: _wehPanelName
            } || (r = /^([^\?]*)(?:\?(.*))?$/.exec(window.location.href), o = {}, r[2] && r[2].split("&").forEach(function(n) {
                var t = n.split("=");
                o[t[0]] = decodeURIComponent(t[1])
            }), o);
        if (!l.panel) throw new Error("Panel name not defined in URL");
        a.uiName = l.panel;
        var m = !l.noprefs;
        a.rpc = e(3), a.rpc.listen({
            close: function() {
                window.close()
            }
        });
        var s = i.runtime.connect({
            name: "weh:" + i.runtime.id + ":" + a.uiName
        });
        a.rpc.setPost(s.postMessage.bind(s)), s.onMessage.addListener(function(n) {
            a.rpc.receive(n, s.postMessage.bind(s))
        }), a.rpc.call("appStarted", {
            uiName: a.uiName,
            usePrefs: m
        }).catch(function(n) {
            console.info("appStarted failed", n)
        });
        var d = [new Promise(function(n, t) {
            window.addEventListener("DOMContentLoaded", function() {
                n()
            })
        })];
        if (m) {
            var c = e(24);
            a.prefs = c;
            var p = {};
            try {
                var f = localStorage.getItem("weh-prefs");
                f && JSON.parse(f).forEach(function(n) {
                    p[n.name] = n.value
                })
            } catch (n) {}
            c.assign(p), c.on("", {
                pack: !0
            }, function(n, t) {
                a.rpc.call("prefsSet", n)
            }), d.push(new Promise(function(n, t) {
                a.rpc.call("prefsGetSpecs").then(function(n) {
                    return c.declare(n), a.rpc.call("prefsGetAll")
                }).then(function(t) {
                    c.assign(t), c.forceNotify(!1), n()
                }).catch(t)
            })), a.rpc.listen({
                setPrefs: function(n) {
                    c.assign(n)
                }
            })
        }
        Promise.all(d).then(function() {
            return a.rpc.call("appReady", {
                uiName: a.uiName
            })
        }).then(function() {
            if (u = !0, g) {
                var n = b;
                b = void 0, g = !1, a.doTrigger(n)
            }
        }).catch(function(n) {
            console.error("app not ready:", n)
        });
        var g = !1,
            b = void 0,
            u = !1;
        a.doTrigger = function(n) {
            return a.rpc.call("trigger", a.uiName, n).catch(function() {})
        }, a.trigger = function(n) {
            if (u) return a.doTrigger(n);
            b = n, g = !0
        }, a._ = e(9).getMessage, a.copyToClipboard = function(n, t) {
            t = t || "text/plain", document.oncopy = function(e) {
                e.clipboardData.setData(t, n), e.preventDefault()
            }, document.execCommand("Copy", !1, null)
        }, a.setPageTitle = function(n) {
            var t = document.querySelector("head title");
            if (t)
                for (; t.firstChild;) t.removeChild(t.firstChild);
            else t = document.createElement("title"), document.head.appendChild(t);
            t.appendChild(document.createTextNode(n))
        }, n.exports = a
    },
    2: function(n, t, e) {
        "use strict";
        var r;
        t.browser = e(4), r = "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime ? /\bOPR\//.test(navigator.userAgent) ? "opera" : "chrome" : /\bEdge\//.test(navigator.userAgent) ? "edge" : "firefox", t.browserType = r, t.isBrowser = function() {
            for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
            for (var o = 0; o < e.length; o++)
                if (e[o] == t.browserType) return !0;
            return !1
        }, t.error = function(n) {
            console.groupCollapsed(n.message), n.stack && console.error(n.stack), console.groupEnd()
        }
    },
    233: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function n(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            return function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        }();

        function o(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(n, t) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? n : t
        }

        function i(n, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            n.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
        }
        e(41);
        var l = t.LicInfoPanelComponent = function(n) {
            function t(n) {
                o(this, t);
                var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                return e.state = {
                    error: !1,
                    skus: null,
                    purchases: null,
                    premium: null,
                    unneeded: !1,
                    notSigned: !1
                }, e
            }
            return i(t, React.Component), r(t, [{
                key: "componentDidMount",
                value: function(n) {
                    this.getInApp()
                }
            }, {
                key: "getInApp",
                value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this;
                    browser.runtime.getPlatformInfo().then(function(e) {
                        "linux" != e.os || weh.prefs.linuxLicense ? weh.rpc.call("getInApp", n).then(function(n) {
                            t.setState({
                                notSigned: !!n.notSigned,
                                skus: n.skus,
                                purchases: n.purchases,
                                premium: n.premium
                            }, function() {
                                t.updateTitle(), t.props.forceOpen && t.props.forceOpen(!n.premium)
                            })
                        }) : t.setState({
                            unneeded: !0
                        }, function() {
                            t.updateTitle()
                        })
                    })
                }
            }, {
                key: "purchase",
                value: function(n) {
                    var t = this;
                    weh.rpc.call("inAppBuy", n).then(function(n) {
                        t.setState({
                            skus: n.skus,
                            purchases: n.purchases,
                            premium: n.premium
                        }, function() {
                            t.updateTitle(), t.props.forceOpen && t.props.forceOpen(!n.premium)
                        })
                    })
                }
            }, {
                key: "updateTitle",
                value: function() {
                    var n = weh._("chrome_licensing");
                    this.state.unneeded ? n = weh._("lic_status_unneeded") : this.state.notSigned ? n = weh._("chrome_premium_not_signed") : this.state.error ? n = weh._("chrome_premium_check_error") : null === this.state.skus || this.state.premium ? this.state.premium && (n = weh._("chrome_premium_mode")) : n = weh._("chrome_basic_mode"), this.props.updateTitle && this.props.updateTitle(n)
                }
            }, {
                key: "chromeSignIn",
                value: function() {
                    weh.rpc.call("goto", "https://support.google.com/chrome/answer/185277")
                }
            }, {
                key: "render",
                value: function() {
                    var n = this,
                        t = React.createElement("div", null, weh._("chrome_verif_premium"));
                    if (this.state.unneeded) t = React.createElement("div", null, weh._("lic_not_needed_linux"));
                    else if (this.state.notSigned) t = React.createElement("div", null, React.createElement("p", null, weh._("chrome_premium_need_sign")), React.createElement("a", {
                        href: "#",
                        onClick: this.chromeSignIn.bind(this)
                    }, weh._("chrome_signing_in")));
                    else if (this.state.error) t = React.createElement("div", null, weh._("chrome_verif_premium_error"));
                    else if (null === this.state.skus || this.state.premium) this.state.premium && (t = React.createElement("div", null, weh._("chrome_premium_source", weh._("chrome_inapp_" + this.state.premium.sku) || this.state.premium.localeData[0].title)));
                    else {
                        var e = this.state.skus.map(function(t) {
                            var e = weh._("chrome_inapp_not_avail"),
                                r = t.prices && t.prices[0];
                            return r && (r = "" + parseInt(r.valueMicros) / 1e6, /\.[0-9]$/.test(r) && (r += "0"), e = r + " " + t.prices[0].currencyCode, /monthly/.test(t.sku) ? e += " " + weh._("per_month") : /yearly/.test(t.sku) && (e += " " + weh._("per_year"))), React.createElement("div", {
                                className: "chrome-product",
                                key: t.sku
                            }, React.createElement("div", {
                                className: "chrome-product-title"
                            }, weh._("chrome_inapp_" + t.sku) || t.localeData[0].title), React.createElement("button", {
                                className: "btn btn-primary chrome-product-purchase",
                                disabled: !r,
                                onClick: n.purchase.bind(n, t.sku)
                            }, e), React.createElement("div", {
                                className: "chrome-product-descr"
                            }, weh._("chrome_inapp_descr_" + t.sku) || t.localeData[0].description))
                        });
                        t = React.createElement("div", null, e, React.createElement("div", {
                            className: "chrome-product-intro"
                        }, weh._("chrome_inapp_no_subs")))
                    }
                    return t = React.createElement("div", null, t, React.createElement("br", null), React.createElement("div", {
                        className: "btn-toolbar float-right"
                    }, React.createElement("button", {
                        className: "btn btn-outline-primary",
                        onClick: this.getInApp.bind(this, !0)
                    }, weh._("chrome_premium_recheck")))), React.createElement("div", null, t)
                }
            }]), t
        }();
        window.LicInfoPanel = function(n) {
            function t(n) {
                o(this, t);
                var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                return e.state = {
                    title: weh._("chrome_licensing"),
                    forceOpen: !1
                }, e.updateTitle = e.updateTitle.bind(e), e.forceOpen = e.forceOpen.bind(e), e
            }
            return i(t, React.Component), r(t, [{
                key: "updateTitle",
                value: function(n) {
                    this.setState({
                        title: n
                    })
                }
            }, {
                key: "forceOpen",
                value: function(n) {
                    this.setState({
                        forceOpen: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var n = React.createElement(l, Object.assign({
                        updateTitle: this.updateTitle,
                        forceOpen: this.forceOpen
                    }, this.props), null);
                    return React.createElement("div", null, React.createElement(CollapsibleSection, {
                        title: this.state.title,
                        content: n,
                        open: this.props.open || this.state.forceOpen
                    }))
                }
            }]), t
        }()
    },
    24: function(n, t, e) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            },
            o = e(9).getMessage;

        function a() {
            this.$specs = {}, this.$values = null, this.$values || (this.$values = {}), this.$listeners = {}
        }
        a.prototype = {
            notify: function(n, t, e, r) {
                for (var o = this, a = n.split("."), i = [], l = a.length; l >= 0; l--) i.push(a.slice(0, l).join("."));
                i.forEach(function(a) {
                    var i = o.$listeners[a];
                    i && i.forEach(function(o) {
                        if (o.specs == r)
                            if (o.pack) o.pack[n] = t, void 0 === o.old[n] && (o.old[n] = e), o.timer && clearTimeout(o.timer), o.timer = setTimeout(function() {
                                delete o.timer;
                                var n = o.pack,
                                    t = o.old;
                                o.pack = {}, o.old = {};
                                try {
                                    o.callback(n, t)
                                } catch (n) {}
                            }, 0);
                            else try {
                                o.callback(n, t, e)
                            } catch (n) {}
                    })
                })
            },
            forceNotify: function(n) {
                void 0 === n && (n = !1);
                var t = this;
                Object.keys(t.$specs).forEach(function(e) {
                    t.notify(e, t.$values[e], t.$values[e], n)
                })
            },
            declare: function(n) {
                var t = this;
                Array.isArray(n) || (n = Object.keys(n).map(function(t) {
                    var e = n[t];
                    return e.name = t, e
                })), n.forEach(function(n) {
                    if (l[n.name]) throw new Error("Forbidden prefs key " + n.name);
                    if (n.hidden) n.label = n.name, n.description = "";
                    else {
                        var e = n.name.replace(/[^0-9a-zA-Z_]/g, "_");
                        n.label = n.label || o("weh_prefs_label_" + e) || n.name, n.description = n.description || o("weh_prefs_description_" + e) || ""
                    }
                    "choice" == n.type && (n.choices = (n.choices || []).map(function(t) {
                        if ("object" == (void 0 === t ? "undefined" : r(t))) return t;
                        if (n.hidden) return {
                            value: t,
                            name: t
                        };
                        var a = t.replace(/[^0-9a-zA-Z_]/g, "_");
                        return {
                            value: t,
                            name: o("weh_prefs_" + e + "_option_" + a) || t
                        }
                    }));
                    var a, i = null;
                    t.$specs[n.name] || (a = n.name, void 0 !== t[n.name] && (i = t[n.name]), Object.defineProperty(t, a, {
                        set: function(n) {
                            var e = t.$values[a];
                            e !== n && (t.$values[a] = n, t.notify(a, n, e, !1))
                        },
                        get: function() {
                            return void 0 !== t.$values[a] ? t.$values[a] : t.$specs[a] && t.$specs[a].defaultValue || void 0
                        }
                    }));
                    var m = t.$specs[n.name];
                    t.$specs[n.name] = n, null !== i ? t.$values[n.name] = i : void 0 === t.$values[n.name] && (t.$values[n.name] = n.defaultValue), t.notify(n.name, n, m, !0)
                })
            },
            on: function() {
                var n = "",
                    t = {},
                    e = 0;
                "string" == typeof arguments[e] && (n = arguments[e++]), "object" == r(arguments[e]) && (t = arguments[e++]);
                var o = arguments[e],
                    a = !!t.pack;
                this.$listeners[n] || (this.$listeners[n] = []);
                var i = {
                    callback: o,
                    specs: !!t.specs
                };
                a && (i.pack = {}, i.old = {}), this.$listeners[n].push(i)
            },
            off: function() {
                var n = "",
                    t = 0;
                "string" == typeof arguments[t] && (n = arguments[t++]);
                var e = arguments[t],
                    r = this.$listeners[n];
                if (r)
                    for (var o = r.length - 1; o >= 0; o--) e && r[o] != e || r.splice(o, 1)
            },
            getAll: function() {
                return Object.assign({}, this.$values)
            },
            getSpecs: function() {
                return Object.assign({}, this.$specs)
            },
            assign: function(n) {
                for (var t in n) n.hasOwnProperty(t) && (this[t] = n[t])
            },
            isValid: function(n, t) {
                var e = this.$specs[n];
                if (e) {
                    switch (e.type) {
                        case "string":
                            if (e.regexp && !new RegExp(e.regexp).test(t)) return !1;
                            break;
                        case "integer":
                            if (!/^-?[0-9]+$/.test(t)) return !1;
                            if (isNaN(parseInt(t))) return !1;
                        case "float":
                            if ("float" == e.type) {
                                if (!/^-?[0-9]+(\.[0-9]+)?|(\.[0-9]+)$/.test(t)) return !1;
                                if (isNaN(parseFloat(t))) return !1
                            }
                            if (void 0 !== e.minimum && t < e.minimum) return !1;
                            if (void 0 !== e.maximum && t > e.maximum) return !1;
                            break;
                        case "choice":
                            var r = !1;
                            if ((e.choices || []).forEach(function(n) {
                                t == n.value && (r = !0)
                            }), !r) return !1
                    }
                    return !0
                }
            },
            reducer: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                switch (t.type) {
                    case "weh.SET_PREFS":
                        n = Object.assign({}, n, t.payload)
                }
                return n
            },
            reduxDispatch: function(n) {
                this.on("", {
                    pack: !0
                }, function(t) {
                    n.dispatch({
                        type: "weh.SET_PREFS",
                        payload: t
                    })
                })
            }
        };
        var i = new a,
            l = {};
        for (var m in i) i.hasOwnProperty(m) && (l[m] = !0);
        n.exports = i
    },
    25: function(n, t, e) {
        "use strict";
        var r = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
        n.exports = function() {
            try {
                if (!Object.assign) return !1;
                var n = new String("abc");
                if (n[5] = "de", "5" === Object.getOwnPropertyNames(n)[0]) return !1;
                for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(n) {
                    return t[n]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(n) {
                    r[n] = n
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (n) {
                return !1
            }
        }() ? Object.assign : function(n, t) {
            for (var e, i, l = function(n) {
                if (null === n || void 0 === n) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(n)
            }(n), m = 1; m < arguments.length; m++) {
                for (var s in e = Object(arguments[m])) o.call(e, s) && (l[s] = e[s]);
                if (r) {
                    i = r(e);
                    for (var d = 0; d < i.length; d++) a.call(e, i[d]) && (l[i[d]] = e[i[d]])
                }
            }
            return l
        }
    },
    26: function(n, t, e) {
        "use strict";
        var r = {};
        n.exports = r
    },
    3: function(n, t, e) {
        "use strict";
        var r = function() {
            function n(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            return function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        }();

        function o(n) {
            if (Array.isArray(n)) {
                for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
                return e
            }
            return Array.from(n)
        }

        function a(n) {
            return Array.isArray(n) ? n : Array.from(n)
        }
        var i = function() {
            function n() {
                ! function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.replyId = 0, this.replies = {}, this.listeners = {}, this.hook = this.nullHook, this.debugLevel = 0, this.useTarget = !1, this.logger = console, this.posts = {}
            }
            return r(n, [{
                key: "setPost",
                value: function(n, t) {
                    "string" == typeof n ? this.posts[n] = t : this.post = n
                }
            }, {
                key: "setUseTarget",
                value: function(n) {
                    this.useTarget = n
                }
            }, {
                key: "setDebugLevel",
                value: function(n) {
                    this.debugLevel = n
                }
            }, {
                key: "setHook",
                value: function(n) {
                    var t = this,
                        e = Date.now();
                    this.hook = n ? function(r) {
                        r.timestamp = "undefined" != typeof window && void 0 !== window.performance ? window.performance.now() : Date.now() - e;
                        try {
                            n(r)
                        } catch (n) {
                            t.logger.warn("Hoor error", n)
                        }
                    } : this.nullHook
                }
            }, {
                key: "nullHook",
                value: function() {}
            }, {
                key: "call",
                value: function() {
                    var n, t, e, r, i = this,
                        l = Array.prototype.slice.call(arguments);
                    if ("function" == typeof l[0] && (n = l.shift()), i.useTarget) {
                        var m = a(l);
                        t = m[0], e = m[1], r = m.slice(2)
                    } else {
                        var s = a(l);
                        e = s[0], r = s.slice(1)
                    }
                    return new Promise(function(a, l) {
                        var m = ++i.replyId;
                        i.debugLevel >= 2 && i.logger.info("rpc #" + m, "call =>", e, r), i.hook({
                            type: "call",
                            callee: t,
                            rid: m,
                            method: e,
                            args: r
                        }), i.replies[m] = {
                            resolve: a,
                            reject: l,
                            peer: t
                        };
                        var s = n || i.useTarget && i.posts[t] || i.post;
                        i.useTarget ? s(t, {
                            type: "weh#rpc",
                            _request: m,
                            _method: e,
                            _args: [].concat(o(r))
                        }) : s({
                            type: "weh#rpc",
                            _request: m,
                            _method: e,
                            _args: [].concat(o(r))
                        })
                    })
                }
            }, {
                key: "receive",
                value: function(n, t, e) {
                    var r = this;
                    if (n._request) Promise.resolve().then(function() {
                        var t = r.listeners[n._method];
                        if ("function" == typeof t) return r.debugLevel >= 2 && r.logger.info("rpc #" + n._request, "serve <= ", n._method, n._args), r.hook({
                            type: "call",
                            caller: e,
                            rid: n._request,
                            method: n._method,
                            args: n._args
                        }), Promise.resolve(t.apply(null, n._args)).then(function(t) {
                            return r.hook({
                                type: "reply",
                                caller: e,
                                rid: n._request,
                                result: t
                            }), t
                        }).catch(function(t) {
                            throw r.hook({
                                type: "reply",
                                caller: e,
                                rid: n._request,
                                error: t.message
                            }), t
                        });
                        throw new Error("Method " + n._method + " is not a function")
                    }).then(function(e) {
                        r.debugLevel >= 2 && r.logger.info("rpc #" + n._request, "serve => ", e), t({
                            type: "weh#rpc",
                            _reply: n._request,
                            _result: e
                        })
                    }).catch(function(e) {
                        r.debugLevel >= 1 && r.logger.info("rpc #" + n._request, "serve => !", e.message), t({
                            type: "weh#rpc",
                            _reply: n._request,
                            _error: e.message
                        })
                    });
                    else if (n._reply) {
                        var o = r.replies[n._reply];
                        delete r.replies[n._reply], o ? n._error ? (r.debugLevel >= 1 && r.logger.info("rpc #" + n._reply, "call <= !", n._error), r.hook({
                            type: "reply",
                            callee: o.peer,
                            rid: n._reply,
                            error: n._error
                        }), o.reject(new Error(n._error))) : (r.debugLevel >= 2 && r.logger.info("rpc #" + n._reply, "call <= ", n._result), r.hook({
                            type: "reply",
                            callee: o.peer,
                            rid: n._reply,
                            result: n._result
                        }), o.resolve(n._result)) : r.logger.error("Missing reply handler")
                    }
                }
            }, {
                key: "listen",
                value: function(n) {
                    Object.assign(this.listeners, n)
                }
            }]), n
        }();
        n.exports = new i
    },
    360: function(n, t, e) {
        n.exports = e(361)
    },
    361: function(n, t, e) {
        "use strict";
        var r = e(362);
        render(React.createElement(r.Premium, null), document.getElementById("root"))
    },
    362: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Premium = void 0;
        var r = function() {
                function n(n, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                    }
                }
                return function(t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(),
            o = l(e(0)),
            a = l(e(15)),
            i = e(233);
        l(e(76));

        function l(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function m(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(n, t) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? n : t
        }

        function d(n, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            n.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
        }
        var c = createStore(function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments[1];
            switch (t.type) {
                case "SET_WEH_DATA":
                    n = Object.assign({}, n, {
                        wehData: t.payload
                    })
            }
            return n
        });
        a.default.rpc.listen({
            wehInitData: function(n) {
                c.dispatch({
                    type: "SET_WEH_DATA",
                    payload: n
                })
            }
        });
        var p = connect(function(n, t) {
            return {
                wehData: (n || {}).wehData
            }
        })(function(n) {
            function t(n) {
                return m(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n))
            }
            return d(t, o.default.Component), r(t, [{
                key: "render",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement(WehHeader, {
                        title: a.default._("chrome_premium_required")
                    }), o.default.createElement("main", null, o.default.createElement("div", {
                        className: "chrome-premium-content"
                    }, o.default.createElement("div", null, this.props.wehData && this.props.wehData.text && o.default.createElement("p", null, this.props.wehData.text), o.default.createElement(i.LicInfoPanelComponent, null)))), o.default.createElement("footer", null))
                }
            }]), t
        }());
        t.Premium = function(n) {
            function t(n) {
                return m(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n))
            }
            return d(t, o.default.Component), r(t, [{
                key: "render",
                value: function() {
                    return o.default.createElement(Provider, {
                        store: c
                    }, o.default.createElement(p, {
                        wehData: this.props.wehData
                    }))
                }
            }]), t
        }()
    },
    4: function(n, t, e) {
        var r, o, a, i;
        i = function(n) {
            "use strict";
            if ("undefined" == typeof browser) {
                const t = () => {
                    const n = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            export: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            import: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        downloads: {
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getBrowserInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(n).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    const t = (n, t) => {
                            const e = n => 1 == n ? "argument" : "arguments";
                            return function(r, ...o) {
                                if (o.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${e(t.minArgs)} for ${n}(), got ${o.length}`);
                                if (o.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${e(t.maxArgs)} for ${n}(), got ${o.length}`);
                                return new Promise((t, e) => {
                                    r[n](...o, (n => (...t) => {
                                        chrome.runtime.lastError ? n.reject(chrome.runtime.lastError) : 1 === t.length ? n.resolve(t[0]) : n.resolve(t)
                                    })({
                                        resolve: t,
                                        reject: e
                                    }))
                                })
                            }
                        },
                        e = (n, t, e) => new Proxy(t, {
                            apply: (t, r, o) => e.call(r, n, ...o)
                        });
                    let r = Function.call.bind(Object.prototype.hasOwnProperty);
                    const o = (n, a = {}, i = {}) => {
                            let l = Object.create(null),
                                m = {
                                    has: (n, t) => t in n || t in l,
                                    get(n, m, s) {
                                        if (m in l) return l[m];
                                        if (!(m in n)) return;
                                        let d = n[m];
                                        if ("function" == typeof d)
                                            if ("function" == typeof a[m]) d = e(n, n[m], a[m]);
                                            else if (r(i, m)) {
                                            let r = t(m, i[m]);
                                            d = e(n, n[m], r)
                                        } else d = d.bind(n);
                                        else {
                                            if ("object" != typeof d || null === d || !r(a, m) && !r(i, m)) return Object.defineProperty(l, m, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => n[m],
                                                set(t) {
                                                    n[m] = t
                                                }
                                            }), d;
                                            d = o(d, a[m], i[m])
                                        }
                                        return l[m] = d, d
                                    },
                                    set: (n, t, e, r) => (t in l ? l[t] = e : n[t] = e, !0),
                                    defineProperty: (n, t, e) => Reflect.defineProperty(l, t, e),
                                    deleteProperty: (n, t) => Reflect.deleteProperty(l, t)
                                };
                            return new Proxy(n, m)
                        },
                        a = {
                            runtime: {
                                onMessage: (n => ({
                                    addListener(t, e, ...r) {
                                        t.addListener(n.get(e), ...r)
                                    }, hasListener: (t, e) => t.hasListener(n.get(e)), removeListener(t, e) {
                                        t.removeListener(n.get(e))
                                    }
                                }))(new class extends WeakMap {
                                    constructor(n, t) {
                                        super(t), this.createItem = n
                                    }
                                    get(n) {
                                        return this.has(n) || this.set(n, this.createItem(n)), super.get(n)
                                    }
                                }(n => "function" != typeof n ? n : function(t, e, r) {
                                    let o = n(t, e);
                                    if ((n => n && "object" == typeof n && "function" == typeof n.then)(o)) return o.then(r, n => {
                                        console.error(n), r(n)
                                    }), !0;
                                    void 0 !== o && r(o)
                                }))
                            }
                        };
                    return o(chrome, a, n)
                };
                n.exports = t()
            } else n.exports = browser
        }, o = [n], void 0 === (a = "function" == typeof(r = i) ? r.apply(t, o) : r) || (n.exports = a)
    },
    41: function(n, t, e) {
        "use strict";
        ! function() {
            var n = this,
                t = function(t, e) {
                    var r, o = t.split("."),
                        a = window || n;
                    o[0] in a || !a.execScript || a.execScript("var " + o[0]);
                    for (; o.length && (r = o.shift());) o.length || void 0 === e ? a = a[r] ? a[r] : a[r] = {} : a[r] = e
                },
                e = function(n) {
                    var t = chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda", {}),
                        e = !1;
                    t.onMessage.addListener(function(t) {
                        e = !0, "response" in t && !("errorType" in t.response) ? n.success && n.success(t) : n.failure && n.failure(t)
                    }), t.onDisconnect.addListener(function() {
                        !e && n.failure && n.failure({
                            request: {},
                            response: {
                                errorType: "INTERNAL_SERVER_ERROR"
                            }
                        })
                    }), t.postMessage(n)
                };
            t("google.payments.inapp.buy", function(n) {
                n.method = "buy", e(n)
            }), t("google.payments.inapp.consumePurchase", function(n) {
                n.method = "consumePurchase", e(n)
            }), t("google.payments.inapp.getPurchases", function(n) {
                n.method = "getPurchases", e(n)
            }), t("google.payments.inapp.getSkuDetails", function(n) {
                n.method = "getSkuDetails", e(n)
            })
        }()
    },
    42: function(n, t, e) {
        "use strict";
        var r = e(25),
            o = e(26),
            a = e(13),
            i = "function" == typeof Symbol && Symbol.for,
            l = i ? Symbol.for("react.element") : 60103,
            m = i ? Symbol.for("react.call") : 60104,
            s = i ? Symbol.for("react.return") : 60105,
            d = i ? Symbol.for("react.portal") : 60106,
            c = i ? Symbol.for("react.fragment") : 60107,
            p = "function" == typeof Symbol && Symbol.iterator;

        function f(n) {
            for (var t = arguments.length - 1, e = "Minified React error #" + n + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + n, r = 0; r < t; r++) e += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            throw (t = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name = "Invariant Violation", t.framesToPop = 1, t
        }
        var g = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };

        function b(n, t, e) {
            this.props = n, this.context = t, this.refs = o, this.updater = e || g
        }

        function u(n, t, e) {
            this.props = n, this.context = t, this.refs = o, this.updater = e || g
        }

        function x() {}
        b.prototype.isReactComponent = {}, b.prototype.setState = function(n, t) {
            "object" != typeof n && "function" != typeof n && null != n && f("85"), this.updater.enqueueSetState(this, n, t, "setState")
        }, b.prototype.forceUpdate = function(n) {
            this.updater.enqueueForceUpdate(this, n, "forceUpdate")
        }, x.prototype = b.prototype;
        var h = u.prototype = new x;

        function v(n, t, e) {
            this.props = n, this.context = t, this.refs = o, this.updater = e || g
        }
        h.constructor = u, r(h, b.prototype), h.isPureReactComponent = !0;
        var w = v.prototype = new x;
        w.constructor = v, r(w, b.prototype), w.unstable_isAsyncReactComponent = !0, w.render = function() {
            return this.props.children
        };
        var y = {
                current: null
            },
            k = Object.prototype.hasOwnProperty,
            A = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function _(n, t, e) {
            var r, o = {},
                a = null,
                i = null;
            if (null != t)
                for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, r) && !A.hasOwnProperty(r) && (o[r] = t[r]);
            var m = arguments.length - 2;
            if (1 === m) o.children = e;
            else if (1 < m) {
                for (var s = Array(m), d = 0; d < m; d++) s[d] = arguments[d + 2];
                o.children = s
            }
            if (n && n.defaultProps)
                for (r in m = n.defaultProps) void 0 === o[r] && (o[r] = m[r]);
            return {
                $$typeof: l,
                type: n,
                key: a,
                ref: i,
                props: o,
                _owner: y.current
            }
        }

        function j(n) {
            return "object" == typeof n && null !== n && n.$$typeof === l
        }
        var z = /\/+/g,
            E = [];

        function S(n, t, e, r) {
            if (E.length) {
                var o = E.pop();
                return o.result = n, o.keyPrefix = t, o.func = e, o.context = r, o.count = 0, o
            }
            return {
                result: n,
                keyPrefix: t,
                func: e,
                context: r,
                count: 0
            }
        }

        function C(n) {
            n.result = null, n.keyPrefix = null, n.func = null, n.context = null, n.count = 0, 10 > E.length && E.push(n)
        }

        function O(n, t, e, r) {
            var o = typeof n;
            "undefined" !== o && "boolean" !== o || (n = null);
            var a = !1;
            if (null === n) a = !0;
            else switch (o) {
                case "string":
                case "number":
                    a = !0;
                    break;
                case "object":
                    switch (n.$$typeof) {
                        case l:
                        case m:
                        case s:
                        case d:
                            a = !0
                    }
            }
            if (a) return e(r, n, "" === t ? "." + R(n, 0) : t), 1;
            if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(n))
                for (var i = 0; i < n.length; i++) {
                    var c = t + R(o = n[i], i);
                    a += O(o, c, e, r)
                } else if (null === n || void 0 === n ? c = null : c = "function" == typeof(c = p && n[p] || n["@@iterator"]) ? c : null, "function" == typeof c)
                    for (n = c.call(n), i = 0; !(o = n.next()).done;) a += O(o = o.value, c = t + R(o, i++), e, r);
                else "object" === o && f("31", "[object Object]" === (e = "" + n) ? "object with keys {" + Object.keys(n).join(", ") + "}" : e, "");
            return a
        }

        function R(n, t) {
            return "object" == typeof n && null !== n && null != n.key ? function(n) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + n).replace(/[=:]/g, function(n) {
                    return t[n]
                })
            }(n.key) : t.toString(36)
        }

        function P(n, t) {
            n.func.call(n.context, t, n.count++)
        }

        function T(n, t, e) {
            var r = n.result,
                o = n.keyPrefix;
            n = n.func.call(n.context, t, n.count++), Array.isArray(n) ? I(n, r, e, a.thatReturnsArgument) : null != n && (j(n) && (t = o + (!n.key || t && t.key === n.key ? "" : ("" + n.key).replace(z, "$&/") + "/") + e, n = {
                $$typeof: l,
                type: n.type,
                key: t,
                ref: n.ref,
                props: n.props,
                _owner: n._owner
            }), r.push(n))
        }

        function I(n, t, e, r, o) {
            var a = "";
            null != e && (a = ("" + e).replace(z, "$&/") + "/"), t = S(t, a, r, o), null == n || O(n, "", T, t), C(t)
        }
        var M = {
                Children: {
                    map: function(n, t, e) {
                        if (null == n) return n;
                        var r = [];
                        return I(n, r, null, t, e), r
                    },
                    forEach: function(n, t, e) {
                        if (null == n) return n;
                        t = S(null, null, t, e), null == n || O(n, "", P, t), C(t)
                    },
                    count: function(n) {
                        return null == n ? 0 : O(n, "", a.thatReturnsNull, null)
                    },
                    toArray: function(n) {
                        var t = [];
                        return I(n, t, null, a.thatReturnsArgument), t
                    },
                    only: function(n) {
                        return j(n) || f("143"), n
                    }
                },
                Component: b,
                PureComponent: u,
                unstable_AsyncComponent: v,
                Fragment: c,
                createElement: _,
                cloneElement: function(n, t, e) {
                    var o = r({}, n.props),
                        a = n.key,
                        i = n.ref,
                        m = n._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (i = t.ref, m = y.current), void 0 !== t.key && (a = "" + t.key), n.type && n.type.defaultProps) var s = n.type.defaultProps;
                        for (d in t) k.call(t, d) && !A.hasOwnProperty(d) && (o[d] = void 0 === t[d] && void 0 !== s ? s[d] : t[d])
                    }
                    var d = arguments.length - 2;
                    if (1 === d) o.children = e;
                    else if (1 < d) {
                        s = Array(d);
                        for (var c = 0; c < d; c++) s[c] = arguments[c + 2];
                        o.children = s
                    }
                    return {
                        $$typeof: l,
                        type: n.type,
                        key: a,
                        ref: i,
                        props: o,
                        _owner: m
                    }
                },
                createFactory: function(n) {
                    var t = _.bind(null, n);
                    return t.type = n, t
                },
                isValidElement: j,
                version: "16.2.0",
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                    ReactCurrentOwner: y,
                    assign: r
                }
            },
            $ = Object.freeze({
                default: M
            }),
            L = $ && M || $;
        n.exports = L.default ? L.default : L
    },
    43: function(n, t, e) {
        "use strict";
        n.exports = function(n) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var e = function(n, t) {
                        var e = n[1] || "",
                            r = n[3];
                        if (!r) return e;
                        if (t && "function" == typeof btoa) {
                            var o = (i = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                                a = r.sources.map(function(n) {
                                    return "/*# sourceURL=" + r.sourceRoot + n + " */"
                                });
                            return [e].concat(a).concat([o]).join("\n")
                        }
                        var i;
                        return [e].join("\n")
                    }(t, n);
                    return t[2] ? "@media " + t[2] + "{" + e + "}" : e
                }).join("")
            }, t.i = function(n, e) {
                "string" == typeof n && (n = [
                    [null, n, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var a = this[o][0];
                    null != a && (r[a] = !0)
                }
                for (o = 0; o < n.length; o++) {
                    var i = n[o];
                    null != i[0] && r[i[0]] || (e && !i[2] ? i[2] = e : e && (i[2] = "(" + i[2] + ") and (" + e + ")"), t.push(i))
                }
            }, t
        }
    },
    44: function(n, t, e) {
        var r, o, a = {},
            i = (r = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === o && (o = r.apply(this, arguments)), o
            }),
            l = function(n) {
                var t = {};
                return function(n) {
                    return void 0 === t[n] && (t[n] = function(n) {
                        return document.querySelector(n)
                    }.call(this, n)), t[n]
                }
            }(),
            m = null,
            s = 0,
            d = [],
            c = e(123);

        function p(n, t) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e],
                    o = a[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) o.parts.push(h(r.parts[i], t))
                } else {
                    var l = [];
                    for (i = 0; i < r.parts.length; i++) l.push(h(r.parts[i], t));
                    a[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: l
                    }
                }
            }
        }

        function f(n, t) {
            for (var e = [], r = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    i = t.base ? a[0] + t.base : a[0],
                    l = {
                        css: a[1],
                        media: a[2],
                        sourceMap: a[3]
                    };
                r[i] ? r[i].parts.push(l) : e.push(r[i] = {
                    id: i,
                    parts: [l]
                })
            }
            return e
        }

        function g(n, t) {
            var e = l(n.insertInto);
            if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = d[d.length - 1];
            if ("top" === n.insertAt) r ? r.nextSibling ? e.insertBefore(t, r.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), d.push(t);
            else {
                if ("bottom" !== n.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                e.appendChild(t)
            }
        }

        function b(n) {
            if (null === n.parentNode) return !1;
            n.parentNode.removeChild(n);
            var t = d.indexOf(n);
            t >= 0 && d.splice(t, 1)
        }

        function u(n) {
            var t = document.createElement("style");
            return n.attrs.type = "text/css", x(t, n.attrs), g(n, t), t
        }

        function x(n, t) {
            Object.keys(t).forEach(function(e) {
                n.setAttribute(e, t[e])
            })
        }

        function h(n, t) {
            var e, r, o, a;
            if (t.transform && n.css) {
                if (!(a = t.transform(n.css))) return function() {};
                n.css = a
            }
            if (t.singleton) {
                var i = s++;
                e = m || (m = u(t)), r = y.bind(null, e, i, !1), o = y.bind(null, e, i, !0)
            } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function(n) {
                var t = document.createElement("link");
                return n.attrs.type = "text/css", n.attrs.rel = "stylesheet", x(t, n.attrs), g(n, t), t
            }(t), r = function(n, t, e) {
                var r = e.css,
                    o = e.sourceMap,
                    a = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || a) && (r = c(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var i = new Blob([r], {
                        type: "text/css"
                    }),
                    l = n.href;
                n.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l)
            }.bind(null, e, t), o = function() {
                b(e), e.href && URL.revokeObjectURL(e.href)
            }) : (e = u(t), r = function(n, t) {
                var e = t.css,
                    r = t.media;
                r && n.setAttribute("media", r);
                if (n.styleSheet) n.styleSheet.cssText = e;
                else {
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(e))
                }
            }.bind(null, e), o = function() {
                b(e)
            });
            return r(n),
                function(t) {
                    if (t) {
                        if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) return;
                        r(n = t)
                    } else o()
                }
        }
        n.exports = function(n, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var e = f(n, t);
            return p(e, t),
                function(n) {
                    for (var r = [], o = 0; o < e.length; o++) {
                        var i = e[o];
                        (l = a[i.id]).refs--, r.push(l)
                    }
                    n && p(f(n, t), t);
                    for (o = 0; o < r.length; o++) {
                        var l;
                        if (0 === (l = r[o]).refs) {
                            for (var m = 0; m < l.parts.length; m++) l.parts[m]();
                            delete a[l.id]
                        }
                    }
                }
        };
        var v, w = (v = [], function(n, t) {
            return v[n] = t, v.filter(Boolean).join("\n")
        });

        function y(n, t, e, r) {
            var o = e ? "" : r.css;
            if (n.styleSheet) n.styleSheet.cssText = w(t, o);
            else {
                var a = document.createTextNode(o),
                    i = n.childNodes;
                i[t] && n.removeChild(i[t]), i.length ? n.insertBefore(a, i[t]) : n.appendChild(a)
            }
        }
    },
    76: function(n, t, e) {
        var r = e(122);
        "string" == typeof r && (r = [
            [n.i, r, ""]
        ]);
        var o = {
            transform: void 0
        };
        e(44)(r, o);
        r.locals && (n.exports = r.locals)
    },
    9: function(n, t, e) {
        "use strict";
        var r = e(2).browser,
            o = {},
            a = new RegExp("\\$[a-zA-Z]*([0-9]+)\\$", "g");

        function i() {
            try {
                null === (o = JSON.parse(window.localStorage.getItem("wehI18nCustom"))) && (o = {}, r.storage.local.get("wehI18nCustom").then(function(n) {
                    var t = n.wehI18nCustom;
                    t && Object.assign(o, t)
                }))
            } catch (n) {
                o = {}
            }
        }
        i(), n.exports = {
            getMessage: function(n, t) {
                if (/-/.test(n)) {
                    var e = n.replace(/-/g, "_");
                    console.warn("Wrong i18n message name. Should it be", e, "instead of", n, "?"), n = e
                }
                var i = o[n];
                return i && i.message.length > 0 ? (Array.isArray(t) || (t = [t]), (i.message || "").replace(a, function(n) {
                    var e = a.exec(n);
                    return e && t[parseInt(e[1]) - 1] || "??"
                })) : r.i18n.getMessage.apply(r.i18n, arguments)
            },
            reload: i
        }
    }
});