! function(e) {
    var t = {};

    function a(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
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
    }, a.p = "", a(a.s = 367)
}({
    367: function(e, t, a) {
        e.exports = a(368)
    },
    368: function(e, t, a) {
        "use strict";
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, a, r) {
                return a && e(t.prototype, a), r && e(t, r), t
            }
        }();

        function n() {
            return weh.rpc.call("getSmartNameRules").then(function(e) {
                window.store.dispatch({
                    type: "SET_SMARTNAME_DATA",
                    payload: e
                })
            })
        }
        window.store = createStore(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments[1];
            switch (t.type) {
                case "SET_SMARTNAME_DATA":
                    e = t.payload
            }
            return e
        }), n();
        var l = connect(function(e, t) {
            return {
                rules: e || []
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
                return a.state = {
                    rule: null,
                    newRule: !1,
                    xpathClass: "",
                    regexpClass: "",
                    delayClass: "",
                    domainClass: ""
                }, a
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
                key: "addRule",
                value: function() {
                    var e = this;
                    return function() {
                        e.setState({
                            rule: {
                                domain: "",
                                mode: "page-title",
                                xpath: "",
                                regexp: ".*",
                                delay: 0
                            },
                            newRule: !0
                        })
                    }
                }
            }, {
                key: "cancelInput",
                value: function() {
                    var e = this;
                    return function() {
                        e.setState({
                            rule: null
                        })
                    }
                }
            }, {
                key: "removeRule",
                value: function(e) {
                    return function(t) {
                        t.stopPropagation(), weh.rpc.call("removeFromSmartName", [e]).then(function() {
                            return n()
                        })
                    }
                }
            }, {
                key: "editRule",
                value: function(e) {
                    var t = this;
                    return function() {
                        t.setState({
                            rule: Object.assign({}, t.props.rules[e]),
                            newRule: !1
                        })
                    }
                }
            }, {
                key: "renderAll",
                value: function() {
                    var e = this,
                        t = Object.keys(this.props.rules).sort().map(function(t) {
                            return React.createElement("div", {
                                key: t,
                                className: "domain",
                                onClick: e.editRule(t)
                            }, React.createElement("div", null, t), React.createElement("div", {
                                className: "delete",
                                onClick: e.removeRule(t)
                            }, "X"))
                        });
                    return React.createElement("div", {
                        className: "all-rules"
                    }, React.createElement("div", {
                        className: "description"
                    }, React.createElement("p", null, weh._("smartname_edit_descr")), React.createElement("a", {
                        href: "#",
                        onClick: this.addRule()
                    }, weh._("smartname_add_domain"))), React.createElement("div", {
                        className: "list-column"
                    }, 0 == t.length && React.createElement("div", {
                        className: "empty"
                    }, weh._("smartname_empty")), t.length > 0 && React.createElement("div", {
                        className: "list"
                    }, t)))
                }
            }, {
                key: "saveRule",
                value: function() {
                    var e = this;
                    return function() {
                        weh.rpc.call("addSmartNameRule", e.state.rule).then(function() {
                            n()
                        }), e.setState({
                            rule: null
                        })
                    }
                }
            }, {
                key: "cancelRule",
                value: function() {
                    var e = this;
                    return function() {
                        e.setState({
                            rule: null
                        })
                    }
                }
            }, {
                key: "onChange",
                value: function(e) {
                    var t = this;
                    return function(a) {
                        var r = a.target.value,
                            n = {
                                rule: {}
                            };
                        switch (e) {
                            case "mode":
                                n.rule.mode = r;
                                break;
                            case "xpath":
                                n.rule.xpath = r;
                                try {
                                    document.evaluate(r, document, null, XPathResult.STRING_TYPE, null), n.xpathClass = ""
                                } catch (e) {
                                    n.xpathClass = "error", !0
                                }
                                break;
                            case "regexp":
                                n.rule.regexp = r;
                                try {
                                    new RegExp(r), n.regexpClass = ""
                                } catch (e) {
                                    n.regexpClass = "error", !0
                                }
                                break;
                            case "domain":
                                n.rule.domain = r, /^\S+\.\S+$/.test(r) ? n.domainClass = "" : n.domainClass = "error";
                                break;
                            case "delay":
                                n.rule.delay = r, /^[0-9]+$/.test(r) ? n.delayClass = "" : n.delayClass = "error"
                        }
                        n.rule = Object.assign({}, t.state.rule, n.rule), t.setState(Object.assign({}, t.state, n))
                    }
                }
            }, {
                key: "renderRule",
                value: function() {
                    return React.createElement("div", {
                        className: "container edit-rule"
                    }, React.createElement("div", {
                        className: "form-group row"
                    }, React.createElement("label", {
                        className: "col-form-label col-sm-4"
                    }, weh._("smartnamer_domain")), React.createElement("input", {
                        className: "form-control col-sm-8 " + this.state.domainClass,
                        onChange: this.onChange("domain"),
                        type: "text",
                        value: this.state.rule.domain,
                        disabled: !this.state.newRule
                    })), React.createElement("div", {
                        className: "form-group row"
                    }, React.createElement("select", {
                        className: "form-control col-sm-12",
                        onChange: this.onChange("mode"),
                        value: this.state.rule.mode
                    }, React.createElement("option", {
                        value: "header-url"
                    }, weh._("smartnamer_get_name_from_header_url")), React.createElement("option", {
                        value: "page-title"
                    }, weh._("smartnamer_get_name_from_page_title")), React.createElement("option", {
                        value: "page-content"
                    }, weh._("smartnamer_get_name_from_page_content")), React.createElement("option", {
                        value: "obfuscated"
                    }, weh._("smartnamer_get_obfuscated_name")))), React.createElement("div", {
                        className: "form-group row"
                    }, React.createElement("label", {
                        className: "col-form-label col-sm-12"
                    }, weh._("smartnamer_xpath_expr")), React.createElement("textarea", {
                        className: "form-control col-sm-12 " + this.state.xpathClass,
                        rows: "2",
                        onChange: this.onChange("xpath"),
                        value: this.state.rule.xpath
                    })), React.createElement("div", {
                        className: "form-group row"
                    }, React.createElement("label", {
                        className: "col-form-label col-sm-6"
                    }, weh._("smartnamer_regexp")), React.createElement("input", {
                        className: "form-control col-sm-6 " + this.state.regexpClass,
                        onChange: this.onChange("regexp"),
                        type: "text",
                        value: this.state.rule.regexp
                    })), React.createElement("div", {
                        className: "form-group row"
                    }, React.createElement("label", {
                        className: "col-form-label col-sm-6"
                    }, weh._("smartnamer_delay")), React.createElement("input", {
                        className: "form-control col-sm-6 " + this.state.delayClass,
                        onChange: this.onChange("delay"),
                        type: "text",
                        value: this.state.rule.delay
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    return React.createElement("div", {
                        className: "weh-shf smartname"
                    }, React.createElement(WehHeader, {
                        title: weh._("smartnaming_rules")
                    }), React.createElement("main", null, this.state.rule && this.renderRule() || this.renderAll()), this.state.rule && React.createElement("footer", null, React.createElement("div", {
                        className: "btn-toolbar float-right"
                    }, React.createElement("div", {
                        className: "btn-group"
                    }, React.createElement("button", {
                        type: "button",
                        onClick: this.cancelRule(),
                        className: "btn btn-outline-secondary"
                    }, weh._("cancel")), React.createElement("button", {
                        type: "button",
                        onClick: this.saveRule(),
                        disabled: this.state.xpathClass || this.state.regexpClass || this.state.delayClass || this.state.domainClass,
                        className: "btn btn-primary"
                    }, weh._(this.state.newRule ? "smartname_create_rule" : "smartname_update_rule"))))))
                }
            }]), t
        }());
        render(React.createElement(Provider, {
            store: store
        }, React.createElement(l, null)), document.getElementById("root")), weh.setPageTitle(weh._("smartnaming_rules"))
    }
});