! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 346)
}({
    346: function(e, t, n) {
        e.exports = n(347)
    },
    347: function(e, t, n) {
        "use strict";
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var o = n(38).buildOptions || {},
            a = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    n.state = {
                        downloadCount: null
                    };
                    var r = 0;
                    try {
                        r = JSON.parse(weh._("__missingI18nTags") || "[]").length || 0
                    } catch (e) {}
                    var o = n;
                    return weh.prefs.on("downloadCount", function(e, t) {
                        o.setState({
                            downloadCount: t,
                            missingLocales: r
                        })
                    }), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, React.Component), r(t, [{
                    key: "review",
                    value: function() {
                        return function() {
                            var e = null;
                            "firefox" == o.browser ? e = "https://addons.mozilla.org/firefox/addon/video-downloadhelper/reviews/add" : "chrome" == o.browser ? e = "https://chrome.google.com/webstore/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk/reviews" : "edge" == o.browser && (e = "https://microsoftedge.microsoft.com/addons/detail/jmkaglaafmhbcpleggkmaliipiilhldn"), e && weh.rpc.call("goto", e)
                        }
                    }
                }, {
                    key: "donate",
                    value: function() {
                        return function() {
                            weh.rpc.call("goto", "https://www.downloadhelper.net/donate")
                        }
                    }
                }, {
                    key: "translate",
                    value: function() {
                        return function() {
                            weh.rpc.call("goto", "https://groups.google.com/forum/#!forum/video-downloadhelper-internationalization")
                        }
                    }
                }, {
                    key: "notAgain",
                    value: function() {
                        return function() {
                            weh.rpc.call("fundingLater").then(function() {
                                weh.rpc.call("closePanel", weh.uiName)
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null !== this.state.downloadCount && React.createElement("div", {
                            className: "funding"
                        }, React.createElement(WehHeader, {
                            title: weh._("donate_vdh")
                        }), React.createElement("main", null, React.createElement("div", null, React.createElement("h1", null, weh._("congratulations")), React.createElement("br", null), React.createElement("p", null, weh._("you_downloaded_n_videos", "" + this.state.downloadCount)), React.createElement("p", null, weh._("req_donate")), "firefox" == o.browser && React.createElement("p", null, React.createElement("span", null, weh._("req_review")), " ", " ", React.createElement("a", {
                            onClick: this.review(),
                            href: "#"
                        }, weh._("req_review_link"))), "chrome" == o.browser && React.createElement("p", null, React.createElement("span", null, weh._("chrome_req_review")), " ", " ", React.createElement("a", {
                            onClick: this.review(),
                            href: "#"
                        }, weh._("req_review_link"))), "edge" == o.browser && React.createElement("p", null, React.createElement("span", null, weh._("edge_req_review")), " ", " ", React.createElement("a", {
                            onClick: this.review(),
                            href: "#"
                        }, weh._("req_review_link"))), this.state.missingLocales > 0 && React.createElement("p", null, React.createElement("span", null, weh._("req_locale", [browser.i18n.getUILanguage(), this.state.missingLocales])), " ", React.createElement("a", {
                            onClick: this.translate(),
                            href: "#"
                        }, weh._("help_translating"))), React.createElement("div", {
                            className: "donate-big-button",
                            onClick: this.donate()
                        }, weh._("donate")))), React.createElement("footer", null, React.createElement("div", {
                            className: "btn-toolbar justify-content-end"
                        }, React.createElement("div", {
                            className: "btn-group pull-right"
                        }, React.createElement("button", {
                            className: "btn btn-outline-secondary",
                            onClick: this.notAgain()
                        }, weh._("not_again_3months")), React.createElement("button", {
                            className: "btn btn-success",
                            onClick: this.donate()
                        }, weh._("donate")))))) || null
                    }
                }]), t
            }();
        render(React.createElement("div", {
            className: "weh-shf"
        }, React.createElement(a, null)), document.getElementById("root")), weh.setPageTitle(weh._("donate_vdh"))
    },
    38: function(e, t) {
        e.exports = {
            buildDate: "Fri Jan 08 2021 17:36:04 GMT+0100 (Central European Standard Time)",
            buildOptions: {
                browser: "chrome",
                noyt: "true"
            },
            prod: !0
        }
    }
});