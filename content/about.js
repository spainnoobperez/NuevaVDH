! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
    }, n.p = "", n(n.s = 276)
}({
    276: function(e, t, n) {
        e.exports = n(277)
    },
    277: function(e, t, n) {
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
        var a = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {}, n
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
                    key: "rpcCall",
                    value: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function() {
                            var e;
                            (e = weh.rpc).call.apply(e, t).then(function() {
                                close()
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = null,
                            t = null,
                            n = browser.runtime.getManifest();
                        return /a/.test(n.version_name || n.version) ? (e = weh._("about_alpha_intro"), /^7\.0.*a/.test(n.version_name || n.version) && weh.isBrowser("firefox") && (t = weh._("about_alpha_extra7_fx"))) : /b/.test(n.version_name || n.version) && (e = weh._("about_alpha_intro")), React.createElement("div", {
                            className: "about-vdh"
                        }, e && React.createElement("p", null, e), t && React.createElement("p", null, t), React.createElement("div", {
                            className: "about-links"
                        }, React.createElement("a", {
                            href: "#",
                            onClick: this.rpcCall("openForum")
                        }, weh._("support_forum")), React.createElement("a", {
                            href: "#",
                            onClick: this.rpcCall("openHomepage")
                        }, weh._("homepage"))), React.createElement(AddonInfoPanel, null), React.createElement(PlatformInfoPanel, null), React.createElement(CoAppInfoPanel, null), React.createElement(LicInfoPanel, null), React.createElement("div", {
                            className: "powered-by"
                        }, React.createElement("a", {
                            href: "#",
                            onClick: this.rpcCall("openWeh")
                        }, weh._("powered_by_weh"))))
                    }
                }]), t
            }(),
            o = null;
        render(React.createElement("div", {
            className: "weh-shf auto-height"
        }, React.createElement("div", null, React.createElement(WehHeader, {
            title: weh._("about_vdh")
        }), React.createElement("main", null, React.createElement(a, null)), React.createElement(ReactResizeDetector, {
            handleHeight: !0,
            onResize: function(e, t) {
                o && clearTimeout(o), o = setTimeout(function() {
                    weh.rpc.call("updateLastFocusedWindowHeight", t, document.body.clientHeight)
                }, 100)
            }
        }))), document.getElementById("root")), weh.setPageTitle(weh._("about_vdh"))
    }
});