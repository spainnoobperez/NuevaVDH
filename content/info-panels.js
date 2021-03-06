! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
    }, n.p = "", n(n.s = 350)
}({
    350: function(e, t, n) {
        e.exports = n(351)
    },
    351: function(e, t, n) {
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

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = n(352).info;
        n(353), window.CollapsibleSection = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    open: n.props.open || !1
                }, n
            }
            return a(t, React.Component), r(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.open != this.props.open && this.setState({
                        open: !!e.open
                    })
                }
            }, {
                key: "toggle",
                value: function() {
                    var e = this;
                    return function() {
                        e.setState({
                            open: !e.state.open
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return React.createElement("div", {
                        className: "collapsible-section"
                    }, React.createElement("div", {
                        className: "section-header " + (this.state.open ? "section-open" : "section-close"),
                        onClick: this.toggle()
                    }, React.createElement("div", {
                        className: "open-close-sign"
                    }, this.state.open ? "⊖" : "⊕"), React.createElement("span", {
                        className: "title"
                    }, this.props.title)), React.createElement(Collapse, {
                        isOpen: this.state.open
                    }, React.createElement(Card, null, React.createElement(CardBody, null, this.props.content))))
                }
            }]), t
        }(), window.AddonInfoPanel = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.state = {
                    manifest: browser.runtime.getManifest(),
                    build: null
                };
                var r = n;
                return weh.rpc.call("getBuild").then(function(e) {
                    r.setState({
                        build: e
                    })
                }), n
            }
            return a(t, React.Component), r(t, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.state.manifest.version_name || this.state.manifest.version,
                        n = React.createElement("div", null, React.createElement("div", null, this.state.manifest.name), React.createElement("div", null, weh._("version", t)), React.createElement("div", null, weh._("browser_locale", browser.i18n.getUILanguage())), this.state.build && React.createElement("div", null, React.createElement("div", null, this.state.build.prod ? weh._("prod_build") : weh._("dev_build")), React.createElement("div", null, weh._("built_on", this.state.build.buildDate)), Object.keys(this.state.build.buildOptions).length > 0 && React.createElement("div", null, weh._("build_options", Object.keys(this.state.build.buildOptions).sort().map(function(t) {
                            return t + "=" + e.state.build.buildOptions[t]
                        }).join(", "))))),
                        r = this.state.manifest.name + " " + t;
                    return React.createElement(CollapsibleSection, {
                        title: r,
                        content: n
                    })
                }
            }]), t
        }(), window.PlatformInfoPanel = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.state = {
                    platform: null,
                    browser: null
                };
                var r = n;
                return browser.runtime.getBrowserInfo && browser.runtime.getBrowserInfo().then(function(e) {
                    r.setState({
                        browser: e
                    })
                }), browser.runtime.getPlatformInfo().then(function(e) {
                    r.setState({
                        platform: e
                    })
                }), n
            }
            return a(t, React.Component), r(t, [{
                key: "capitalize",
                value: function(e) {
                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = weh._("platform"),
                        t = React.createElement("div", null, this.state.platform && React.createElement("div", null, weh._("platform_info", [this.capitalize(this.state.platform.os), this.state.platform.arch])), this.state.browser && React.createElement("div", null, weh._("browser_info", [this.state.browser.vendor, this.state.browser.name, this.state.browser.version])) || React.createElement("div", null, navigator.userAgent));
                    return React.createElement(CollapsibleSection, {
                        title: e,
                        content: t
                    })
                }
            }]), t
        }(), window.CoAppInfoPanel = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    status: null,
                    info: null,
                    error: null
                }, n
            }
            return a(t, React.Component), r(t, [{
                key: "componentWillMount",
                value: function() {
                    this.check()
                }
            }, {
                key: "check",
                value: function(e) {
                    var t = this;
                    t.setState({
                        status: null,
                        info: null,
                        error: null
                    }), Promise.resolve().then(function() {
                        if (e) return weh.rpc.call("coappProxy", "quit").catch(function() {}).then(function() {
                            return new Promise(function(e, t) {
                                setTimeout(function() {
                                    e()
                                }, weh.prefs.coappRestartDelay)
                            })
                        })
                    }).then(function() {
                        weh.rpc.call("checkCoApp").then(function(e) {
                            t.setState(Object.assign({
                                status: null,
                                info: null,
                                error: null
                            }, e))
                        })
                    })
                }
            }, {
                key: "isMinimumVersion",
                value: function(e, t) {
                    for (var n = e.split(".").map(function(e) {
                        return parseInt(e)
                    }), r = t.split(".").map(function(e) {
                        return parseInt(e)
                    }), i = 0; i < n.length; i++) {
                        if (void 0 === r[i]) return !0;
                        if (n[i] > r[i]) return !0;
                        if (n[i] < r[i]) return !1
                    }
                    return !0
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = !1;
                    null === this.state.status ? e = weh._("coapp_unchecked") : this.state.status ? this.isMinimumVersion(this.state.info.version, s.lastVersion) ? e = weh._("coapp_installed") : (e = weh._("coapp_outdated"), t = !0) : e = weh._("coapp_not_installed");
                    var n = React.createElement("div", null, this.state.error && React.createElement("div", null, weh._("coapp_error"), " ", " ", React.createElement("em", null, this.state.error.message || this.state.error)), this.state.status && React.createElement("div", null, React.createElement("div", null, weh._("coapp_found"), " ", " ", React.createElement("em", null, this.state.info.displayName, " ", this.state.info.version)), t && React.createElement("div", null, weh._("coapp_latest_version", s.lastVersion)), React.createElement("div", null, weh._("coapp_path"), " ", " ", React.createElement("em", null, this.state.info.binary))), React.createElement("br", null), React.createElement("div", {
                        className: "btn-toolbar float-right"
                    }, React.createElement("button", {
                        className: "btn btn-outline-secondary",
                        onClick: this.check.bind(this, !0)
                    }, weh._("coapp_recheck")), !this.state.status && React.createElement("button", {
                        className: "btn btn-outline-primary",
                        onClick: function() {
                            return weh.rpc.call("installCoApp")
                        }
                    }, weh._("coapp_install")), t && React.createElement("button", {
                        className: "btn btn-outline-primary",
                        onClick: function() {
                            return weh.rpc.call("installCoApp")
                        }
                    }, weh._("coapp_update"))));
                    return React.createElement("div", null, React.createElement(CollapsibleSection, {
                        title: e,
                        content: n
                    }))
                }
            }]), t
        }()
    },
    352: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.info = {
            lastVersion: "1.6.0"
        }
    },
    353: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
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

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        n(41);
        var s = t.LicInfoPanelComponent = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    error: !1,
                    skus: null,
                    purchases: null,
                    premium: null,
                    unneeded: !1,
                    notSigned: !1
                }, n
            }
            return a(t, React.Component), r(t, [{
                key: "componentDidMount",
                value: function(e) {
                    this.getInApp()
                }
            }, {
                key: "getInApp",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this;
                    browser.runtime.getPlatformInfo().then(function(n) {
                        "linux" != n.os || weh.prefs.linuxLicense ? weh.rpc.call("getInApp", e).then(function(e) {
                            t.setState({
                                notSigned: !!e.notSigned,
                                skus: e.skus,
                                purchases: e.purchases,
                                premium: e.premium
                            }, function() {
                                t.updateTitle(), t.props.forceOpen && t.props.forceOpen(!e.premium)
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
                value: function(e) {
                    var t = this;
                    weh.rpc.call("inAppBuy", e).then(function(e) {
                        t.setState({
                            skus: e.skus,
                            purchases: e.purchases,
                            premium: e.premium
                        }, function() {
                            t.updateTitle(), t.props.forceOpen && t.props.forceOpen(!e.premium)
                        })
                    })
                }
            }, {
                key: "updateTitle",
                value: function() {
                    var e = weh._("chrome_licensing");
                    this.state.unneeded ? e = weh._("lic_status_unneeded") : this.state.notSigned ? e = weh._("chrome_premium_not_signed") : this.state.error ? e = weh._("chrome_premium_check_error") : null === this.state.skus || this.state.premium ? this.state.premium && (e = weh._("chrome_premium_mode")) : e = weh._("chrome_basic_mode"), this.props.updateTitle && this.props.updateTitle(e)
                }
            }, {
                key: "chromeSignIn",
                value: function() {
                    weh.rpc.call("goto", "https://support.google.com/chrome/answer/185277")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = React.createElement("div", null, weh._("chrome_verif_premium"));
                    if (this.state.unneeded) t = React.createElement("div", null, weh._("lic_not_needed_linux"));
                    else if (this.state.notSigned) t = React.createElement("div", null, React.createElement("p", null, weh._("chrome_premium_need_sign")), React.createElement("a", {
                        href: "#",
                        onClick: this.chromeSignIn.bind(this)
                    }, weh._("chrome_signing_in")));
                    else if (this.state.error) t = React.createElement("div", null, weh._("chrome_verif_premium_error"));
                    else if (null === this.state.skus || this.state.premium) this.state.premium && (t = React.createElement("div", null, weh._("chrome_premium_source", weh._("chrome_inapp_" + this.state.premium.sku) || this.state.premium.localeData[0].title)));
                    else {
                        var n = this.state.skus.map(function(t) {
                            var n = weh._("chrome_inapp_not_avail"),
                                r = t.prices && t.prices[0];
                            return r && (r = "" + parseInt(r.valueMicros) / 1e6, /\.[0-9]$/.test(r) && (r += "0"), n = r + " " + t.prices[0].currencyCode, /monthly/.test(t.sku) ? n += " " + weh._("per_month") : /yearly/.test(t.sku) && (n += " " + weh._("per_year"))), React.createElement("div", {
                                className: "chrome-product",
                                key: t.sku
                            }, React.createElement("div", {
                                className: "chrome-product-title"
                            }, weh._("chrome_inapp_" + t.sku) || t.localeData[0].title), React.createElement("button", {
                                className: "btn btn-primary chrome-product-purchase",
                                disabled: !r,
                                onClick: e.purchase.bind(e, t.sku)
                            }, n), React.createElement("div", {
                                className: "chrome-product-descr"
                            }, weh._("chrome_inapp_descr_" + t.sku) || t.localeData[0].description))
                        });
                        t = React.createElement("div", null, n, React.createElement("div", {
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
        window.LicInfoPanel = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    title: weh._("chrome_licensing"),
                    forceOpen: !1
                }, n.updateTitle = n.updateTitle.bind(n), n.forceOpen = n.forceOpen.bind(n), n
            }
            return a(t, React.Component), r(t, [{
                key: "updateTitle",
                value: function(e) {
                    this.setState({
                        title: e
                    })
                }
            }, {
                key: "forceOpen",
                value: function(e) {
                    this.setState({
                        forceOpen: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = React.createElement(s, Object.assign({
                        updateTitle: this.updateTitle,
                        forceOpen: this.forceOpen
                    }, this.props), null);
                    return React.createElement("div", null, React.createElement(CollapsibleSection, {
                        title: this.state.title,
                        content: e,
                        open: this.props.open || this.state.forceOpen
                    }))
                }
            }]), t
        }()
    },
    41: function(e, t, n) {
        "use strict";
        ! function() {
            var e = this,
                t = function(t, n) {
                    var r, i = t.split("."),
                        o = window || e;
                    i[0] in o || !o.execScript || o.execScript("var " + i[0]);
                    for (; i.length && (r = i.shift());) i.length || void 0 === n ? o = o[r] ? o[r] : o[r] = {} : o[r] = n
                },
                n = function(e) {
                    var t = chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda", {}),
                        n = !1;
                    t.onMessage.addListener(function(t) {
                        n = !0, "response" in t && !("errorType" in t.response) ? e.success && e.success(t) : e.failure && e.failure(t)
                    }), t.onDisconnect.addListener(function() {
                        !n && e.failure && e.failure({
                            request: {},
                            response: {
                                errorType: "INTERNAL_SERVER_ERROR"
                            }
                        })
                    }), t.postMessage(e)
                };
            t("google.payments.inapp.buy", function(e) {
                e.method = "buy", n(e)
            }), t("google.payments.inapp.consumePurchase", function(e) {
                e.method = "consumePurchase", n(e)
            }), t("google.payments.inapp.getPurchases", function(e) {
                e.method = "getPurchases", n(e)
            }), t("google.payments.inapp.getSkuDetails", function(e) {
                e.method = "getSkuDetails", n(e)
            })
        }()
    }
});