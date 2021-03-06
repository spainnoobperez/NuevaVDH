! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
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
    }, n.p = "", n(n.s = 336)
}({
    336: function(e, t, n) {
        e.exports = n(337)
    },
    337: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }();
        var r = createStore(combineReducers({
            prefs: weh.prefs.reducer
        }));
        weh.prefs.reduxDispatch(r);
        var a = t.DlConvPanel = connect(function(e) {
            return {
                prefs: e.prefs,
                showSaveAs: "1" != new URL(window.location.href).searchParams.get("nosaveas")
            }
        })(function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    outputConfig: "",
                    outputConfigs: {},
                    hit: null
                }, n
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
            }(t, React.Component), o(t, [{
                key: "changeOutput",
                value: function() {
                    var e = this;
                    return function(t) {
                        e.setState({
                            outputConfig: t.target.value
                        })
                    }
                }
            }, {
                key: "save",
                value: function(e) {
                    var t = this;
                    return function() {
                        weh.trigger({
                            hitId: t.state.hit.id,
                            outputConfigId: t.state.outputConfig,
                            outputConfig: t.state.outputConfigs[t.state.outputConfig],
                            prompt: e
                        }).then(function() {
                            t.props.closeWindow && t.props.closeWindow()
                        })
                    }
                }
            }, {
                key: "configure",
                value: function() {
                    var e = this;
                    return function() {
                        weh.rpc.call("editConverterConfigs", e.state.outputConfig).then(function() {
                            e.props.closeWindow && e.props.closeWindow()
                        })
                    }
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var e = this,
                        t = decodeURIComponent(new URL(document.URL).hash.substr(1));
                    weh.rpc.call("getHit", t).then(function(t) {
                        e.setState({
                            hit: t
                        })
                    }), weh.rpc.call("getOutputConfigs").then(function(t) {
                        e.setState({
                            outputConfigs: t
                        })
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState({
                        outputConfig: e.prefs.dlconvLastOutput
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e;
                    e = this.state.outputConfig ? this.state.outputConfigs : Object.assign({}, this.state.outputConfigs, {
                        "": {
                            title: weh._("select_output_config")
                        }
                    });
                    var t = Object.keys(e).sort().map(function(t) {
                        return React.createElement("option", {
                            key: t,
                            value: t
                        }, e[t].title)
                    });
                    return React.createElement("div", {
                        className: "weh-shf embeddable"
                    }, React.createElement("div", null, React.createElement("main", null, React.createElement("div", {
                        className: "dlconv"
                    }, React.createElement("div", {
                        className: "explain"
                    }, React.createElement("h3", null, weh._("dlconv_download_and_convert")), this.state.hit && React.createElement("p", null, this.state.hit.title)), React.createElement("div", null, React.createElement("select", {
                        className: "form-control",
                        onChange: this.changeOutput(),
                        value: this.state.outputConfig
                    }, t)), React.createElement("div", null, React.createElement("a", {
                        onClick: this.configure(),
                        href: "#"
                    }, weh._("dlconv_output_details"))))), React.createElement("footer", null, React.createElement("div", {
                        className: "btn-toolbar justify-content-between"
                    }, React.createElement("div", null), React.createElement("div", {
                        className: "btn-group pull-right"
                    }, this.props.showSaveAs && React.createElement("button", {
                        type: "button",
                        onClick: this.save(!0),
                        disabled: "" == this.state.outputConfig,
                        className: "btn btn-outline-secondary"
                    }, weh._("save_as")), React.createElement("button", {
                        type: "button",
                        onClick: this.save(!1),
                        disabled: "" == this.state.outputConfig,
                        className: "btn btn-outline-primary"
                    }, weh._("save")))))))
                }
            }]), t
        }());
        render(React.createElement(Embedder, null, React.createElement(Provider, {
            store: r
        }, React.createElement(a, {
            closeWindow: function() {
                return weh.rpc.call("closePopup")
            }
        }))), document.getElementById("root"))
    }
});