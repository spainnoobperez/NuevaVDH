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
    }, n.p = "", n(n.s = 354)
}({
    354: function(e, t, n) {
        e.exports = n(355)
    },
    355: function(e, t, n) {
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
        var a = t.LogDetails = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.state = {
                    message: null,
                    details: null
                };
                var r = n,
                    a = decodeURIComponent(new URL(document.URL).hash.substr(1));
                return weh.rpc.call("getLogEntry", a).then(function(e) {
                    r.setState({
                        message: e.message,
                        details: e.details
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
                key: "render",
                value: function() {
                    return React.createElement("div", {
                        className: "weh-shf embeddable"
                    }, React.createElement("div", null, React.createElement("main", null, React.createElement("div", {
                        className: "log-details"
                    }, React.createElement("div", {
                        className: "message"
                    }, this.state.message && React.createElement("h3", null, this.state.message), this.state.details && React.createElement("pre", null, this.state.details))))))
                }
            }]), t
        }();
        render(React.createElement(Embedder, null, React.createElement(a, null)), document.getElementById("root"))
    }
});