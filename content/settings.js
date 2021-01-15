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
    }, a.p = "", a(a.s = 363)
}({
    363: function(e, t, a) {
        e.exports = a(364)
    },
    364: function(e, t, a) {
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
        var n = combineReducers({
                prefs: prefsSettingsReducer
            }),
            c = createStore(n);

        function l() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return function() {
                var e;
                (e = weh.rpc).call.apply(e, t)
            }
        }
        listenPrefs(c);
        var o = {
                renderInput: function() {
                    var e = this;
                    return React.createElement("div", {
                        className: "input-group",
                        id: "weh-param-" + e.paramIndex
                    }, React.createElement("input", {
                        ref: function(t) {
                            t && (t.value = e.state.value)
                        },
                        onChange: o.onChange.bind(e),
                        className: "form-control"
                    }), React.createElement("span", {
                        className: "input-group-btn"
                    }, React.createElement("button", {
                        className: "btn",
                        onClick: function() {
                            return o.selectDirectory.call(e)
                        }
                    }, weh._("change"))))
                },
                selectDirectory: function() {
                    var e = this;
                    weh.rpc.call("selectDirectory", this.state.value).then(function(t) {
                        t && e.setCustomValue(t.directory)
                    })
                },
                onChange: function(e) {
                    var t = this,
                        a = e.target;
                    weh.rpc.call("coappProxy", "path.homeJoin", a.value).then(function(e) {
                        return a.value = e, t.setCustomValue(e), weh.rpc.call("coappProxy", "fs.stat", e)
                    }).then(function(e) {
                        if (!e || !1 & e.mode) throw new Error;
                        a.style.backgroundColor = "#e8ffe8"
                    }).catch(function() {
                        a.style.backgroundColor = "#ffe8e8"
                    })
                }
            },
            i = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.state = {
                        activeTab: "general",
                        moreOpen: !1,
                        conversion: void 0,
                        modal: null
                    }, a.fileInputChange = a.fileInputChange.bind(a), a
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
                    key: "setActiveTab",
                    value: function(e) {
                        this.setState({
                            activeTab: e,
                            conversion: !1
                        })
                    }
                }, {
                    key: "local",
                    value: function(e) {
                        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                        var n = this;
                        return function() {
                            n[e].apply(n, a)
                        }
                    }
                }, {
                    key: "toggleMore",
                    value: function() {
                        var e = this;
                        return function() {
                            e.setState({
                                moreOpen: !e.state.moreOpen
                            })
                        }
                    }
                }, {
                    key: "closeModal",
                    value: function() {
                        this.setState({
                            modal: null
                        })
                    }
                }, {
                    key: "conversion",
                    value: function() {
                        var e = this;
                        return function() {
                            e.setState({
                                activeTab: "general",
                                conversion: !0
                            })
                        }
                    }
                }, {
                    key: "reloadAddon",
                    value: function() {
                        var e = this,
                            t = this;
                        return function() {
                            t.setState({
                                modal: {
                                    title: weh._("confirmation_required"),
                                    body: weh._("reload_addon_confirm"),
                                    buttons: [{
                                        text: weh._("cancel"),
                                        color: "secondary",
                                        click: function() {
                                            e.closeModal()
                                        }.bind(t)
                                    }, {
                                        text: weh._("reload_addon"),
                                        color: "danger",
                                        click: function() {
                                            weh.rpc.call("reloadAddon"), e.closeModal()
                                        }.bind(t)
                                    }]
                                }
                            })
                        }
                    }
                }, {
                    key: "import",
                    value: function() {
                        var e = this;
                        return function() {
                            e.fileInput.click()
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = this,
                            t = this,
                            a = {
                                prefs: !0,
                                backlist: !1,
                                outputconfigs: !1
                            };

                        function r(e) {
                            return function(t) {
                                a[e] = t.target.checked
                            }
                        }
                        return function() {
                            t.setState({
                                modal: {
                                    title: weh._("reset_settings"),
                                    body: React.createElement("div", {
                                        className: "reset-settings"
                                    }, React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.prefs,
                                        onChange: r("prefs"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-prefs"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-prefs"
                                    }, weh._("preferences"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.blacklist,
                                        onChange: r("blacklist"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-blacklist"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-blacklist"
                                    }, weh._("blacklist"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.smartnaming,
                                        onChange: r("smartnaming"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-smartnaming"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-smartnaming"
                                    }, weh._("smartnaming_rules"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.outputconfigs,
                                        onChange: r("outputconfigs"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-outputconfigs"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-outputconfigs"
                                    }, weh._("conversion_outputs"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.convrules,
                                        onChange: r("convrules"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-convrules"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-convrules"
                                    }, weh._("conversion_rules"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.variants,
                                        onChange: r("variants"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-variants"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-variants"
                                    }, weh._("video_qualities"))), React.createElement("div", {
                                        className: "form-group row"
                                    }, React.createElement("input", {
                                        defaultChecked: a.license,
                                        onChange: r("license"),
                                        className: "form-control",
                                        type: "checkbox",
                                        id: "reset-license"
                                    }), React.createElement("label", {
                                        className: "col-8 col-form-label",
                                        htmlFor: "reset-license"
                                    }, weh._("license")))),
                                    buttons: [{
                                        text: weh._("cancel"),
                                        color: "secondary",
                                        click: function() {
                                            e.closeModal()
                                        }.bind(t)
                                    }, {
                                        text: weh._("reset_settings"),
                                        color: "danger",
                                        click: function() {
                                            e.doReset(a), e.closeModal()
                                        }.bind(t)
                                    }]
                                }
                            })
                        }
                    }
                }, {
                    key: "doReset",
                    value: function(e) {
                        e.prefs && (c.dispatch({
                            type: "PREFS_RESET"
                        }), c.dispatch({
                            type: "PREFS_UPDATED",
                            payload: {}
                        }), c.dispatch({
                            type: "PREFS_SAVE",
                            payload: {}
                        })), e.blacklist && weh.rpc.call("setBlacklist", {}), e.smartnaming && weh.rpc.call("setSmartName", {}), e.outputconfigs && weh.rpc.call("setOutputConfigs", {}), e.convrules && weh.rpc.call("setConversionRules", []), e.variants && weh.rpc.call("resetVariants"), e.license && weh.rpc.call("setLicense", null)
                    }
                }, {
                    key: "fileInputChange",
                    value: function(e) {
                        var t = this,
                            a = this,
                            r = a.fileInput.files[0];
                        if (r) {
                            var n = new FileReader;
                            n.onload = function(e) {
                                try {
                                    var r = JSON.parse(e.target.result);
                                    weh.rpc.call("importSettings", r).then(function(e) {
                                        Object.keys(e).forEach(function(t) {
                                            c.dispatch({
                                                type: "PREF_UPDATE",
                                                payload: {
                                                    prefName: t,
                                                    value: e[t]
                                                }
                                            })
                                        })
                                    })
                                } catch (e) {
                                    a.setState({
                                        modal: {
                                            title: weh._("error"),
                                            body: weh._("import_invalid_format"),
                                            buttons: [{
                                                text: weh._("continue"),
                                                color: "secondary",
                                                click: function() {
                                                    t.closeModal()
                                                }.bind(a)
                                            }]
                                        }
                                    })
                                }
                            }, n.readAsText(r)
                        }
                    }
                }, {
                    key: "setFileInput",
                    value: function(e) {
                        var t = this;
                        return function(e) {
                            e && e.removeEventListener("change", t.fileInputChange), t.fileInput = e, e && e.addEventListener("change", t.fileInputChange)
                        }
                    }
                }, {
                    key: "renderTabGeneral",
                    value: function() {
                        return React.createElement(TabPane, {
                            tabId: "general"
                        }, !this.state.conversion && React.createElement("div", null, React.createElement(AddonInfoPanel, null), React.createElement(PlatformInfoPanel, null), React.createElement(CoAppInfoPanel, null)), React.createElement(LicInfoPanel, {
                            open: this.state.conversion
                        }))
                    }
                }, {
                    key: "renderTabAppearance",
                    value: function() {
                        return React.createElement(TabPane, {
                            tabId: "appearance"
                        }, React.createElement(WehParam, {
                            prefName: "titleMode"
                        }), React.createElement(WehParam, {
                            prefName: "iconActivation"
                        }), React.createElement(WehParam, {
                            prefName: "iconBadge"
                        }), React.createElement(WehParam, {
                            prefName: "hitsGotoTab"
                        }), React.createElement(WehParam, {
                            prefName: "notifyReady"
                        }), React.createElement(WehParam, {
                            prefName: "noPrivateNotification"
                        }), React.createElement(WehParam, {
                            prefName: "fileDialogType"
                        }), React.createElement(WehParam, {
                            prefName: "alertDialogType"
                        }), React.createElement(WehParam, {
                            prefName: "dialogAutoClose"
                        }), React.createElement(WehParam, {
                            prefName: "contextMenuEnabled"
                        }), weh.isBrowser("firefox") && React.createElement(WehParam, {
                            prefName: "toolsMenuEnabled"
                        }))
                    }
                }, {
                    key: "renderTabBehavior",
                    value: function() {
                        return React.createElement(TabPane, {
                            tabId: "behavior"
                        }, React.createElement(WehParam, {
                            prefName: "coappDownloads"
                        }), React.createElement(WehParam, {
                            prefName: "lastDownloadDirectory",
                            renderInput: o.renderInput
                        }), React.createElement(WehParam, {
                            prefName: "tbsnEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "rememberLastDir"
                        }), React.createElement(WehParam, {
                            prefName: "networkProbe"
                        }), React.createElement(WehParam, {
                            prefName: "monitorNetworkRequests"
                        }), React.createElement(WehParam, {
                            prefName: "smartnamerFnameSpaces"
                        }), React.createElement(WehParam, {
                            prefName: "smartnamerFnameMaxlen"
                        }), React.createElement(WehParam, {
                            prefName: "downloadControlledMax"
                        }), React.createElement(WehParam, {
                            prefName: "downloadStreamControlledMax"
                        }), React.createElement(WehParam, {
                            prefName: "convertControlledMax"
                        }), React.createElement(WehParam, {
                            prefName: "autoPin"
                        }), React.createElement(WehParam, {
                            prefName: "mediaExtensions"
                        }), React.createElement(WehParam, {
                            prefName: "coappRestartDelay"
                        }), React.createElement(WehParam, {
                            prefName: "coappIdleExit"
                        }), React.createElement(WehParam, {
                            prefName: "dashHideM4s"
                        }), React.createElement(WehParam, {
                            prefName: "mpegtsHideTs"
                        }), React.createElement(WehParam, {
                            prefName: "orphanExpiration"
                        }), React.createElement(WehParam, {
                            prefName: "chunksEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "hlsEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "dashEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "f4fEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "dashOnAdp"
                        }), React.createElement(WehParam, {
                            prefName: "hlsDownloadAsM2ts"
                        }), React.createElement(WehParam, {
                            prefName: "hlsRememberPrevLiveChunks"
                        }), React.createElement(WehParam, {
                            prefName: "chunkedCoappManifestsRequests"
                        }), React.createElement(WehParam, {
                            prefName: "chunkedCoappDataRequests"
                        }), React.createElement(WehParam, {
                            prefName: "coappUseProxy"
                        }), React.createElement(WehParam, {
                            prefName: "checkCoappOnStartup"
                        }), React.createElement(WehParam, {
                            prefName: "networkFilterOut"
                        }), React.createElement(WehParam, {
                            prefName: "mediaweightThreshold"
                        }), React.createElement(WehParam, {
                            prefName: "mediaweightMinSize"
                        }), React.createElement(WehParam, {
                            prefName: "ignoreProtectedVariants"
                        }), React.createElement(WehParam, {
                            prefName: "qualitiesMaxVariants"
                        }), React.createElement(WehParam, {
                            prefName: "adpHide"
                        }), React.createElement(WehParam, {
                            prefName: "converterThreads"
                        }), React.createElement(WehParam, {
                            prefName: "converterAggregTuneH264"
                        }), React.createElement(WehParam, {
                            prefName: "avplayEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "blacklistEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "chunksConcurrentDownloads"
                        }), React.createElement(WehParam, {
                            prefName: "chunksPrefetchCount"
                        }), React.createElement(WehParam, {
                            prefName: "downloadRetries"
                        }), React.createElement(WehParam, {
                            prefName: "downloadRetryDelay"
                        }), React.createElement(WehParam, {
                            prefName: "converterKeepTmpFiles"
                        }), React.createElement(WehParam, {
                            prefName: "contentRedirectEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "bulkEnabled"
                        }), React.createElement(WehParam, {
                            prefName: "galleryNaming"
                        }))
                    }
                }, {
                    key: "renderTabGallery",
                    value: function() {
                        return React.createElement(TabPane, {
                            tabId: "gallery"
                        }, React.createElement(WehParam, {
                            prefName: "medialinkAutoDetect"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkMinImgSize"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkMinFilesPerGroup"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkMaxHits"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkExtensions"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkScanImages"
                        }), React.createElement(WehParam, {
                            prefName: "medialinkScanLinks"
                        }))
                    }
                }, {
                    key: "renderSettings",
                    value: function() {
                        return React.createElement("div", null, React.createElement(Nav, {
                            tabs: !0
                        }, React.createElement(NavItem, null, React.createElement(NavLink, {
                            href: "#",
                            className: "general" !== this.state.activeTab || this.state.conversion ? "" : "active",
                            onClick: this.local("setActiveTab", "general")
                        }, weh._("general"))), React.createElement(NavItem, null, React.createElement(NavLink, {
                            href: "#",
                            className: "appearance" === this.state.activeTab ? "active" : "",
                            onClick: this.local("setActiveTab", "appearance")
                        }, weh._("appearance"))), React.createElement(NavItem, null, React.createElement(NavLink, {
                            href: "#",
                            className: "behavior" === this.state.activeTab ? "active" : "",
                            onClick: this.local("setActiveTab", "behavior")
                        }, weh._("behavior"))), React.createElement(Dropdown, {
                            nav: !0,
                            isOpen: this.state.moreOpen,
                            toggle: this.toggleMore()
                        }, React.createElement(DropdownToggle, {
                            nav: !0,
                            caret: !0
                        }, weh._("more")), React.createElement(DropdownMenu, null, React.createElement(DropdownItem, {
                            onClick: this.local("setActiveTab", "gallery")
                        }, weh._("gallery")), React.createElement(DropdownItem, {
                            onClick: l("editConverterConfigs")
                        }, weh._("conversion_outputs")), React.createElement(DropdownItem, {
                            onClick: l("editConversionRules")
                        }, weh._("conversion_rules")), React.createElement(DropdownItem, {
                            onClick: l("editBlacklist")
                        }, weh._("blacklist")), React.createElement(DropdownItem, {
                            onClick: l("editSmartName")
                        }, weh._("smartnaming_rules")), React.createElement(DropdownItem, {
                            onClick: l("editVariants")
                        }, weh._("video_qualities")), React.createElement(DropdownItem, {
                            onClick: this.conversion()
                        }, weh._("licensing")), React.createElement(DropdownItem, {
                            onClick: l("openTranslation")
                        }, weh._("translation")), weh.prefs.coappShellEnabled && React.createElement(DropdownItem, {
                            onClick: l("openCoapp")
                        }, weh._("coapp")), React.createElement(DropdownItem, {
                            divider: !0
                        }), React.createElement(DropdownItem, {
                            onClick: l("exportSettings")
                        }, weh._("export")), React.createElement(DropdownItem, {
                            onClick: this.import()
                        }, weh._("import")), React.createElement(DropdownItem, {
                            onClick: this.reloadAddon()
                        }, weh._("reload_addon")), React.createElement(DropdownItem, {
                            onClick: this.reset()
                        }, weh._("reset_settings"))))), React.createElement(TabContent, {
                            activeTab: this.state.activeTab
                        }, this.renderTabGeneral(), this.renderTabAppearance(), this.renderTabBehavior(), this.renderTabGallery()))
                    }
                }, {
                    key: "renderPrefsControls",
                    value: function() {
                        return React.createElement("div", {
                            className: "btn-toolbar justify-content-end"
                        }, React.createElement("div", {
                            className: "btn-group pull-right"
                        }, React.createElement("button", {
                            type: "button",
                            onClick: this.props.cancel,
                            className: "btn btn-default " + (this.props.flags.isModified ? "" : "disabled")
                        }, weh._("cancel")), React.createElement("button", {
                            type: "button",
                            onClick: this.props.reset,
                            className: "btn btn-warning " + (this.props.flags.isDefault ? "disabled" : "")
                        }, weh._("default")), React.createElement("button", {
                            type: "button",
                            onClick: this.props.save,
                            className: "btn btn-primary " + (this.props.flags.isModified && this.props.flags.isValid ? "" : "disabled")
                        }, weh._("save"))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return React.createElement(PrefsSettingsApp, null, React.createElement(WehHeader, null), React.createElement("main", null, React.createElement("div", {
                            className: "container settings"
                        }, React.createElement("section", null, this.renderSettings()))), "general" != this.state.activeTab && React.createElement("footer", null, React.createElement(WehPrefsControls, {
                            render: this.renderPrefsControls
                        })), React.createElement("input", {
                            type: "file",
                            style: {
                                display: "none"
                            },
                            accept: "application/json",
                            ref: this.setFileInput()
                        }), React.createElement(VDHModal, {
                            modalData: this.state.modal,
                            close: this.closeModal.bind(this)
                        }))
                    }
                }]), t
            }();
        render(React.createElement(Provider, {
            store: c
        }, React.createElement(i, null)), document.getElementById("root")), weh.setPageTitle(weh._("settings"))
    }
});