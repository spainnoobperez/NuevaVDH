! function(e) {
    var t = {};

    function a(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 330)
}({
    330: function(e, t, a) {
        e.exports = a(331)
    },
    331: function(e, t, a) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t
                }
            }();
        var c = combineReducers({
                prefs: weh.prefs.reducer,
                configs: function() {
                    var e, t, a, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = arguments[1];
                    switch (o.type) {
                        case "SET_CONFIGS":
                            n = o.payload;
                            break;
                        case "UPDATE_CONFIG":
                            n = Object.assign({}, n, (e = {}, t = o.payload.id, a = o.payload, t in e ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = a, e)), weh.rpc.call("setOutputConfigs", n).then(s);
                            break;
                        case "REMOVE_CONFIG":
                            delete(n = Object.assign({}, n))[o.payload], weh.rpc.call("setOutputConfigs", n).then(s)
                    }
                    return n
                },
                config: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments[1];
                    switch (t.type) {
                        case "SET_CONFIG":
                            e = t.payload
                    }
                    return e
                },
                formats: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments[1];
                    switch (t.type) {
                        case "SET_FORMATS":
                            e = t.payload
                    }
                    return e
                },
                codecs: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments[1];
                    switch (t.type) {
                        case "SET_CODECS":
                            e = t.payload
                    }
                    return e
                }
            }),
            r = createStore(c);

        function s() {
            return weh.rpc.call("getOutputConfigs").then(function(e) {
                r.dispatch({
                    type: "SET_CONFIGS",
                    payload: e
                })
            })
        }
        weh.prefs.reduxDispatch(r), s(), weh.rpc.call("getFormats").then(function(e) {
            r.dispatch({
                type: "SET_FORMATS",
                payload: Object.keys(e).sort().map(function(t) {
                    return Object.assign({}, e[t], {
                        name: t
                    })
                })
            })
        }), weh.rpc.call("getCodecs").then(function(e) {
            r.dispatch({
                type: "SET_CODECS",
                payload: Object.keys(e).sort().map(function(t) {
                    return Object.assign({}, e[t], {
                        name: t
                    })
                })
            })
        });
        var i = decodeURIComponent(new URL(document.URL).hash.substr(1));
        i && r.dispatch({
            type: "SET_CONFIG",
            payload: i
        });
        var l = connect(function(e, t) {
            return {
                prefs: e.prefs,
                configs: e.configs,
                config: e.config,
                formats: e.formats,
                codecs: e.codecs
            }
        })(function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.state = Object.assign({
                    actionButtonsOpen: !1,
                    resetConfirmOpen: !1,
                    activeTab: "general"
                }, a.stateFromProps(e)), a
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
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.state && this.state.configId || e.config;
                    t && e.configs[t] || (t = Object.keys(e.configs).sort(function(t, a) {
                        return t = e.configs[t], a = e.configs[a], t.title < a.title ? -1 : t.title > a.title ? 1 : 0
                    })[0]), this.setState(this.stateFromProps(e, t))
                }
            }, {
                key: "stateFromProps",
                value: function(e, t) {
                    return e = e || this.props, {
                        configId: t = t || this.state && this.state.configId || e.config || "",
                        config: Object.assign({}, e.configs[t])
                    }
                }
            }, {
                key: "toggleActionButtons",
                value: function() {
                    this.setState({
                        actionButtonsOpen: !this.state.actionButtonsOpen
                    })
                }
            }, {
                key: "toggleResetConfirm",
                value: function() {
                    this.setState({
                        resetConfirmOpen: !this.state.resetConfirmOpen
                    })
                }
            }, {
                key: "setActiveTab",
                value: function(e) {
                    this.setState({
                        activeTab: e
                    })
                }
            }, {
                key: "local",
                value: function(e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
                    var o = this;
                    return function() {
                        o[e].apply(o, a)
                    }
                }
            }, {
                key: "changeConfig",
                value: function() {
                    var e = this;
                    return function(t) {
                        var a = t.target.value;
                        e.setState(e.stateFromProps(e.props, a))
                    }
                }
            }, {
                key: "changeTitle",
                value: function() {
                    var e = this;
                    return function(t) {
                        e.setState({
                            config: Object.assign({}, e.state.config, {
                                title: t.target.value
                            })
                        })
                    }
                }
            }, {
                key: "duplicate",
                value: function() {
                    var e = "" + Date.now(),
                        t = Object.assign({}, this.state.config, {
                            params: Object.assign({}, this.state.config.params),
                            readonly: !1,
                            title: weh._("copy_of", this.state.config.title),
                            id: e
                        });
                    this.setState({
                        configId: e,
                        config: t
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.setState({
                        resetConfirmOpen: !0
                    })
                }
            }, {
                key: "doReset",
                value: function() {
                    var e = this;
                    weh.rpc.call("resetOutputConfigs").then(function() {
                        e.setState({
                            resetConfirmOpen: !1
                        }), s()
                    })
                }
            }, {
                key: "shouldSave",
                value: function() {
                    if (!this.state.configId) return !1;
                    var e = this.props.configs[this.state.configId];
                    return !e || !deepEqual(e, this.state.config)
                }
            }, {
                key: "canReset",
                value: function() {
                    if (!this.props.configs[this.state.configId]) return !0;
                    for (var e = Object.keys(this.props.configs), t = 0; t < e.length; t++)
                        if (!this.props.configs[e[t]].readonly) return !0;
                    return !1
                }
            }, {
                key: "save",
                value: function() {
                    r.dispatch({
                        type: "UPDATE_CONFIG",
                        payload: this.state.config
                    })
                }
            }, {
                key: "remove",
                value: function() {
                    r.dispatch({
                        type: "REMOVE_CONFIG",
                        payload: this.state.config.id
                    })
                }
            }, {
                key: "create",
                value: function() {
                    var e = "" + Date.now(),
                        t = {
                            id: e,
                            title: weh._("custom_output"),
                            ext: "xxx",
                            readonly: !1,
                            params: {}
                        };
                    this.setState({
                        configId: e,
                        config: t
                    })
                }
            }, {
                key: "renderParameterList",
                value: function(e) {
                    if (!this.state.config.params) return null;
                    var t = this,
                        a = [{
                            label: weh._("yes"),
                            value: !0
                        }, {
                            label: weh._("no"),
                            value: !1
                        }],
                        o = this.getParameters()[e],
                        c = [];
                    return this.state.config.readonly ? o.forEach(function(e) {
                        var a = "";
                        if (e.paramValue) {
                            if (void 0 === (a = t.state.config.params[e.paramValue])) return
                        } else if (e.configValue && (void 0 === (a = t.state.config[e.configValue]) || null === a)) return;
                        c.push(React.createElement("div", {
                            key: e.paramValue || e.configValue,
                            className: "param"
                        }, React.createElement("div", {
                            className: "paramname"
                        }, weh._(e.label)), React.createElement("div", {
                            className: "paramvalue"
                        }, a)))
                    }) : o.forEach(function(e) {
                        var o = "",
                            r = !0;
                        e.paramValue ? void 0 === (o = t.state.config.params[e.paramValue]) && (r = !1) : e.configValue && (o = t.state.config[e.configValue]), "boolean" == e.type && (o = !!o);
                        var s, i = [];

                        function l() {
                            return function(a) {
                                var n = Object.assign({}, t.state.config);
                                e.paramValue ? (n.params = Object.assign({}, n.params), n.params[e.paramValue] = a.target.value) : n[e.configValue] = a.target.value, "boolean" == e.type && (n[e.configValue] = "true" === n[e.configValue]), t.setState({
                                    config: n
                                })
                            }
                        }
                        "select" != e.type && "boolean" != e.type || (i = e.options, "boolean" == e.type && (i = a), i = i.map(function(e) {
                            var t, a;
                            return "object" == (void 0 === e ? "undefined" : n(e)) ? (t = e.value, a = e.label) : (t = e, a = e), void 0 === s && (s = t), React.createElement("option", {
                                key: "" + t,
                                value: t
                            }, a)
                        }));
                        var u = e.style || {};
                        null !== o && void 0 !== o || (o = ""), c.push(React.createElement("div", {
                            key: e.paramValue + "/" + e.configValue,
                            className: "param"
                        }, React.createElement("div", {
                            className: "paramname"
                        }, weh._(e.label)), React.createElement("div", {
                            className: "paramedit"
                        }, React.createElement("span", {
                            style: {
                                display: r ? "none" : "inline-block"
                            }
                        }, o), "string" === e.type && React.createElement("div", {
                            style: {
                                display: r ? "inline-block" : "none"
                            }
                        }, React.createElement("input", {
                            value: o,
                            onChange: l(),
                            style: u,
                            type: "text"
                        })), ("select" === e.type || "boolean" == e.type) && React.createElement("div", {
                            style: {
                                display: r ? "inline-block" : "none"
                            }
                        }, React.createElement("select", {
                            onChange: l(),
                            style: u,
                            className: "form-control",
                            value: o
                        }, i)), e.paramValue && React.createElement("input", {
                            onChange: function(a) {
                                var n = Object.assign({}, t.state.config.params);
                                if (a.target.checked) switch (e.type) {
                                    case "string":
                                        n[e.paramValue] = "";
                                        break;
                                    case "select":
                                        n[e.paramValue] = s;
                                        break;
                                    case "boolean":
                                        n[e.paramValue] = !0
                                } else delete n[e.paramValue];
                                t.setState({
                                    config: Object.assign({}, t.state.config, {
                                        params: n
                                    })
                                })
                            },
                            type: "checkbox",
                            checked: r
                        }))))
                    }), React.createElement("div", {
                        className: "paramlist"
                    }, c)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = Object.keys(this.props.configs).sort(function(t, a) {
                            return t = e.props.configs[t], a = e.props.configs[a], t.title < a.title ? -1 : t.title > a.title ? 1 : 0
                        }).map(function(t) {
                            return React.createElement("option", {
                                key: t,
                                value: t
                            }, e.props.configs[t].title)
                        }),
                        a = this.shouldSave();
                    return React.createElement("div", {
                        className: "convconfs"
                    }, React.createElement("div", {
                        className: "toprow"
                    }, React.createElement("div", {
                        className: "selector"
                    }, React.createElement("select", {
                        value: this.state.configId,
                        onChange: this.changeConfig(),
                        className: "form-control"
                    }, !this.props.configs[this.state.configId] && React.createElement("option", {
                        value: "this.state.configId"
                    }, this.state.config.title), t)), React.createElement("div", {
                        className: "confname"
                    }, React.createElement("input", {
                        type: "text",
                        onChange: this.changeTitle(),
                        readOnly: this.state.config && this.state.config.readonly,
                        value: this.state.config && this.state.config.title || "",
                        className: "form-control"
                    })), React.createElement("div", {
                        className: "btn-group btn-primary"
                    }, a && React.createElement(Button, {
                        onClick: this.local("save"),
                        type: "button",
                        color: "success"
                    }, weh._("convconf_save")), !a && React.createElement(Button, {
                        onClick: this.local("duplicate"),
                        type: "button",
                        color: "secondary"
                    }, weh._("convconf_duplicate")), React.createElement(ButtonDropdown, {
                        isOpen: this.state.actionButtonsOpen,
                        toggle: this.local("toggleActionButtons")
                    }, React.createElement(DropdownToggle, {
                        caret: !0,
                        color: a ? "success" : "secondary"
                    }), React.createElement(DropdownMenu, null, React.createElement(DropdownItem, null), React.createElement(DropdownItem, {
                        onClick: this.local("create")
                    }, weh._("convconf_new")), React.createElement(DropdownItem, {
                        divider: !0
                    }), React.createElement(DropdownItem, {
                        onClick: this.local("remove"),
                        disabled: this.state.config.readonly
                    }, weh._("convconf_remove")), React.createElement(DropdownItem, {
                        disabled: !this.canReset(),
                        onClick: this.local("reset")
                    }, weh._("convconf_reset")))))), this.state.config && this.state.config.readonly && React.createElement("div", {
                        className: "notice"
                    }, weh._("convconf_readonly")), React.createElement("div", {
                        className: "params"
                    }, React.createElement(Nav, {
                        tabs: !0
                    }, React.createElement(NavItem, null, React.createElement(NavLink, {
                        className: "general" === this.state.activeTab ? "active" : "",
                        onClick: this.local("setActiveTab", "general")
                    }, weh._("general"))), React.createElement(NavItem, null, React.createElement(NavLink, {
                        className: "advanced" === this.state.activeTab ? "active" : "",
                        onClick: this.local("setActiveTab", "advanced")
                    }, weh._("advanced")))), React.createElement(TabContent, {
                        activeTab: this.state.activeTab
                    }, React.createElement(TabPane, {
                        tabId: "general"
                    }, this.renderParameterList("general")), React.createElement(TabPane, {
                        tabId: "advanced"
                    }, this.renderParameterList("advanced")))), React.createElement(Modal, {
                        isOpen: this.state.resetConfirmOpen,
                        toggle: this.local("toggleResetConfirm"),
                        className: this.props.className
                    }, React.createElement(ModalHeader, {
                        toggle: this.local("toggleResetConfirm")
                    }), React.createElement(ModalBody, null, weh._("convconf_reset_confirm")), React.createElement(ModalFooter, null, React.createElement(Button, {
                        color: "secondary",
                        onClick: this.local("toggleResetConfirm")
                    }, weh._("cancel")), React.createElement(Button, {
                        color: "primary",
                        onClick: this.local("doReset")
                    }, weh._("convconf_reset")), " ")))
                }
            }, {
                key: "getEncodingCodecs",
                value: function(e) {
                    return this.props.codecs.filter(function(t) {
                        return t.t = e
                    }).map(function(e) {
                        return e.name
                    })
                }
            }, {
                key: "getEncodingFormats",
                value: function() {
                    return this.props.formats.filter(function(e) {
                        return !!e.e
                    }).map(function(e) {
                        return e.name
                    })
                }
            }, {
                key: "getParameters",
                value: function() {
                    var e = ["", "pal-", "ntsc-", "film-"],
                        t = [];
                    return ["vcd", "svcd", "dvd", "dv", "dv50"].forEach(function(a) {
                        e.forEach(function(e) {
                            t.push(e + a)
                        })
                    }), {
                        general: [{
                            label: "convconf_ext",
                            type: "string",
                            configValue: "ext"
                        }, {
                            label: "convconf_container",
                            type: "select",
                            paramValue: "f",
                            options: this.getEncodingFormats()
                        }, {
                            label: "convconf_vcodec",
                            type: "select",
                            paramValue: "c:v",
                            options: this.getEncodingCodecs("V")
                        }, {
                            label: "convconf_acodec",
                            type: "select",
                            paramValue: "c:a",
                            options: this.getEncodingCodecs("A")
                        }, {
                            label: "convconf_audioonly",
                            type: "boolean",
                            configValue: "audioonly"
                        }, {
                            label: "convconf_videobitrate",
                            type: "string",
                            paramValue: "b:v"
                        }, {
                            label: "convconf_target",
                            type: "select",
                            paramValue: "target",
                            options: t
                        }, {
                            label: "convconf_rate",
                            type: "string",
                            paramValue: "r"
                        }],
                        advanced: [{
                            label: "convconf_2passes",
                            type: "boolean",
                            configValue: "twopasses"
                        }, {
                            label: "convconf_size",
                            type: "string",
                            paramValue: "s"
                        }, {
                            label: "convconf_audiofreq",
                            type: "string",
                            paramValue: "ar"
                        }, {
                            label: "convconf_audiobitrate",
                            type: "string",
                            paramValue: "b:a"
                        }, {
                            label: "convconf_ac",
                            type: "select",
                            paramValue: "ac",
                            options: [{
                                value: 0,
                                label: weh._("convconf_acnone")
                            }, {
                                value: 1,
                                label: weh._("convconf_mono")
                            }, {
                                value: 2,
                                label: weh._("convconf_stereo")
                            }]
                        }, {
                            label: "convconf_aspect",
                            type: "select",
                            paramValue: "aspect",
                            options: ["4:3", "16:9"]
                        }, {
                            label: "convconf_preset",
                            type: "select",
                            paramValue: "preset",
                            options: ["ultrafast", "superfast", "veryfast", "faster", "fast", "medium", "slow", "slower", "veryslow", "placebo"]
                        }, {
                            label: "convconf_tune",
                            type: "select",
                            paramValue: "tune",
                            options: ["film", "animation", "grain", "stillimage", "psnr", "ssim", "fastdecode", "zerolatency"]
                        }, {
                            label: "convconf_profilev",
                            type: "select",
                            paramValue: "profile:v",
                            options: ["baseline", "main", "high"]
                        }, {
                            label: "convconf_level",
                            type: "string",
                            paramValue: "level"
                        }, {
                            label: "convconf_extra",
                            type: "string",
                            configValue: "extra",
                            style: {
                                minWidth: "500px"
                            }
                        }]
                    }
                }
            }]), t
        }());
        render(React.createElement(Provider, {
            store: r
        }, React.createElement("div", {
            className: "weh-shf"
        }, React.createElement("div", null, React.createElement(WehHeader, {
            title: weh._("conversion_outputs")
        }), React.createElement("main", null, React.createElement(l, null))))), document.getElementById("root")), weh.setPageTitle(weh._("conversion_outputs"))
    }
});