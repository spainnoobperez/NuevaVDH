! function(e) {
    var r = {};

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = r, s.d = function(e, r, t) {
        s.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }, s.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(r, "a", r), r
    }, s.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, s.p = "", s(s.s = 375)
}({
    2: function(e, r, s) {
        "use strict";
        var t;
        r.browser = s(4), t = "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime ? /\bOPR\//.test(navigator.userAgent) ? "opera" : "chrome" : /\bEdge\//.test(navigator.userAgent) ? "edge" : "firefox", r.browserType = t, r.isBrowser = function() {
            for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
            for (var n = 0; n < s.length; n++)
                if (s[n] == r.browserType) return !0;
            return !1
        }, r.error = function(e) {
            console.groupCollapsed(e.message), e.stack && console.error(e.stack), console.groupEnd()
        }
    },
    23: function(e, r, s) {
        "use strict";
        var t = s(2),
            n = t.browser;
        t.rpc = s(3);
        var i = n.runtime.connect({
            name: "weh:" + n.runtime.id + ":" + t.uiName
        });
        t.rpc.setPost(i.postMessage.bind(i)), i.onMessage.addListener(function(e) {
            t.rpc.receive(e, i.postMessage.bind(i))
        }), e.exports = t
    },
    3: function(e, r, s) {
        "use strict";
        var t = function() {
            function e(e, r) {
                for (var s = 0; s < r.length; s++) {
                    var t = r[s];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }
            return function(r, s, t) {
                return s && e(r.prototype, s), t && e(r, t), r
            }
        }();

        function n(e) {
            if (Array.isArray(e)) {
                for (var r = 0, s = Array(e.length); r < e.length; r++) s[r] = e[r];
                return s
            }
            return Array.from(e)
        }

        function i(e) {
            return Array.isArray(e) ? e : Array.from(e)
        }
        var o = function() {
            function e() {
                ! function(e, r) {
                    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.replyId = 0, this.replies = {}, this.listeners = {}, this.hook = this.nullHook, this.debugLevel = 0, this.useTarget = !1, this.logger = console, this.posts = {}
            }
            return t(e, [{
                key: "setPost",
                value: function(e, r) {
                    "string" == typeof e ? this.posts[e] = r : this.post = e
                }
            }, {
                key: "setUseTarget",
                value: function(e) {
                    this.useTarget = e
                }
            }, {
                key: "setDebugLevel",
                value: function(e) {
                    this.debugLevel = e
                }
            }, {
                key: "setHook",
                value: function(e) {
                    var r = this,
                        s = Date.now();
                    this.hook = e ? function(t) {
                        t.timestamp = "undefined" != typeof window && void 0 !== window.performance ? window.performance.now() : Date.now() - s;
                        try {
                            e(t)
                        } catch (e) {
                            r.logger.warn("Hoor error", e)
                        }
                    } : this.nullHook
                }
            }, {
                key: "nullHook",
                value: function() {}
            }, {
                key: "call",
                value: function() {
                    var e, r, s, t, o = this,
                        a = Array.prototype.slice.call(arguments);
                    if ("function" == typeof a[0] && (e = a.shift()), o.useTarget) {
                        var g = i(a);
                        r = g[0], s = g[1], t = g.slice(2)
                    } else {
                        var m = i(a);
                        s = m[0], t = m.slice(1)
                    }
                    return new Promise(function(i, a) {
                        var g = ++o.replyId;
                        o.debugLevel >= 2 && o.logger.info("rpc #" + g, "call =>", s, t), o.hook({
                            type: "call",
                            callee: r,
                            rid: g,
                            method: s,
                            args: t
                        }), o.replies[g] = {
                            resolve: i,
                            reject: a,
                            peer: r
                        };
                        var m = e || o.useTarget && o.posts[r] || o.post;
                        o.useTarget ? m(r, {
                            type: "weh#rpc",
                            _request: g,
                            _method: s,
                            _args: [].concat(n(t))
                        }) : m({
                            type: "weh#rpc",
                            _request: g,
                            _method: s,
                            _args: [].concat(n(t))
                        })
                    })
                }
            }, {
                key: "receive",
                value: function(e, r, s) {
                    var t = this;
                    if (e._request) Promise.resolve().then(function() {
                        var r = t.listeners[e._method];
                        if ("function" == typeof r) return t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args), t.hook({
                            type: "call",
                            caller: s,
                            rid: e._request,
                            method: e._method,
                            args: e._args
                        }), Promise.resolve(r.apply(null, e._args)).then(function(r) {
                            return t.hook({
                                type: "reply",
                                caller: s,
                                rid: e._request,
                                result: r
                            }), r
                        }).catch(function(r) {
                            throw t.hook({
                                type: "reply",
                                caller: s,
                                rid: e._request,
                                error: r.message
                            }), r
                        });
                        throw new Error("Method " + e._method + " is not a function")
                    }).then(function(s) {
                        t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve => ", s), r({
                            type: "weh#rpc",
                            _reply: e._request,
                            _result: s
                        })
                    }).catch(function(s) {
                        t.debugLevel >= 1 && t.logger.info("rpc #" + e._request, "serve => !", s.message), r({
                            type: "weh#rpc",
                            _reply: e._request,
                            _error: s.message
                        })
                    });
                    else if (e._reply) {
                        var n = t.replies[e._reply];
                        delete t.replies[e._reply], n ? e._error ? (t.debugLevel >= 1 && t.logger.info("rpc #" + e._reply, "call <= !", e._error), t.hook({
                            type: "reply",
                            callee: n.peer,
                            rid: e._reply,
                            error: e._error
                        }), n.reject(new Error(e._error))) : (t.debugLevel >= 2 && t.logger.info("rpc #" + e._reply, "call <= ", e._result), t.hook({
                            type: "reply",
                            callee: n.peer,
                            rid: e._reply,
                            result: e._result
                        }), n.resolve(e._result)) : t.logger.error("Missing reply handler")
                    }
                }
            }, {
                key: "listen",
                value: function(e) {
                    Object.assign(this.listeners, e)
                }
            }]), e
        }();
        e.exports = new o
    },
    37: function(e, r, s) {
        "use strict";
        e.exports = s(23)
    },
    375: function(e, r, s) {
        e.exports = s(376)
    },
    376: function(e, r, s) {
        "use strict";
        var t = s(37),
            n = t.browser,
            i = s(92).SmartNameEvaluate;
        n.runtime.onMessage.addListener(function(e, r) {
            return "DelayedGetInfo" === e.type && setTimeout(function() {
                ! function(e) {
                    var r = window.location.href,
                        s = function() {
                            var e = /[\?&]v=([a-zA-Z0-9\-_]+)/.exec(r);
                            return e ? e[1] : (e = /\/embed\/([a-zA-Z0-9\-_]+)/.exec(r)) ? e[1] : null
                        }(),
                        n = r;
                    try {
                        n = window.top.location.href
                    } catch (e) {}
                    var o = Object.assign(_$vdhData, {
                        pageUrl: r,
                        topUrl: n,
                        hitId: e
                    });
                    if (s) {
                        o.videoId = s, o.source = r;
                        var a = /^(https?:\/\/(?:[^\/]*\.)?youtube(?:\.co)?\.(?:[^\.\/]+))\//.exec(r);
                        a && (o.baseUrl = a[1])
                    }
                    o.hasVideo = !!s, Promise.resolve().then(function() {
                        return _$vdhSmartNameSpecs ? new Promise(function(e, r) {
                            setTimeout(function() {
                                e(i(_$vdhSmartNameSpecs))
                            }, _$vdhSmartNameSpecs.delay)
                        }) : new Promise(function(e, r) {
                            var s = 0;
                            ! function r() {
                                var t = document.querySelector("head>title"),
                                    n = t && t.firstChild && t.firstChild.nodeValue;
                                n && "YouTube" != n ? e(n) : ++s > 60 ? e("YouTube") : setTimeout(r, 1e3)
                            }()
                        })
                    }).then(function(e) {
                        e && (o.title = e), t.rpc.call("tbvwsDetectedVideo", o)
                    })
                }(e.hitId)
            }, e.delay), !1
        })
    },
    4: function(e, r, s) {
        var t, n, i, o;
        o = function(e) {
            "use strict";
            if ("undefined" == typeof browser) {
                const r = () => {
                    const e = {
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
                    if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    const r = (e, r) => {
                            const s = e => 1 == e ? "argument" : "arguments";
                            return function(t, ...n) {
                                if (n.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${n.length}`);
                                if (n.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${n.length}`);
                                return new Promise((r, s) => {
                                    t[e](...n, (e => (...r) => {
                                        chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : 1 === r.length ? e.resolve(r[0]) : e.resolve(r)
                                    })({
                                        resolve: r,
                                        reject: s
                                    }))
                                })
                            }
                        },
                        s = (e, r, s) => new Proxy(r, {
                            apply: (r, t, n) => s.call(t, e, ...n)
                        });
                    let t = Function.call.bind(Object.prototype.hasOwnProperty);
                    const n = (e, i = {}, o = {}) => {
                            let a = Object.create(null),
                                g = {
                                    has: (e, r) => r in e || r in a,
                                    get(e, g, m) {
                                        if (g in a) return a[g];
                                        if (!(g in e)) return;
                                        let l = e[g];
                                        if ("function" == typeof l)
                                            if ("function" == typeof i[g]) l = s(e, e[g], i[g]);
                                            else if (t(o, g)) {
                                            let t = r(g, o[g]);
                                            l = s(e, e[g], t)
                                        } else l = l.bind(e);
                                        else {
                                            if ("object" != typeof l || null === l || !t(i, g) && !t(o, g)) return Object.defineProperty(a, g, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[g],
                                                set(r) {
                                                    e[g] = r
                                                }
                                            }), l;
                                            l = n(l, i[g], o[g])
                                        }
                                        return a[g] = l, l
                                    },
                                    set: (e, r, s, t) => (r in a ? a[r] = s : e[r] = s, !0),
                                    defineProperty: (e, r, s) => Reflect.defineProperty(a, r, s),
                                    deleteProperty: (e, r) => Reflect.deleteProperty(a, r)
                                };
                            return new Proxy(e, g)
                        },
                        i = {
                            runtime: {
                                onMessage: (e => ({
                                    addListener(r, s, ...t) {
                                        r.addListener(e.get(s), ...t)
                                    }, hasListener: (r, s) => r.hasListener(e.get(s)), removeListener(r, s) {
                                        r.removeListener(e.get(s))
                                    }
                                }))(new class extends WeakMap {
                                    constructor(e, r) {
                                        super(r), this.createItem = e
                                    }
                                    get(e) {
                                        return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                                    }
                                }(e => "function" != typeof e ? e : function(r, s, t) {
                                    let n = e(r, s);
                                    if ((e => e && "object" == typeof e && "function" == typeof e.then)(n)) return n.then(t, e => {
                                        console.error(e), t(e)
                                    }), !0;
                                    void 0 !== n && t(n)
                                }))
                            }
                        };
                    return n(chrome, i, e)
                };
                e.exports = r()
            } else e.exports = browser
        }, n = [e], void 0 === (i = "function" == typeof(t = o) ? t.apply(r, n) : t) || (e.exports = i)
    },
    92: function(e, r, s) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.SmartNameEvaluate = function(e) {
            var r = e.xpath,
                s = null;

            function n() {
                if ((s = s && s.trim() || "") && e.regexp) {
                    var r = new RegExp(e.regexp, "m"),
                        t = r.exec(s);
                    s = t ? void 0 !== t[1] ? t[1] || "" : t[0] || "" : ""
                }
            }
            switch (e.mode) {
                case "page-title":
                    r = "/html/head/title/text()";
                case "page-content":
                    s = document.evaluate(r, document, null, XPathResult.STRING_TYPE, null).stringValue || null;
                    break;
                case "obfuscated":
                    return new Promise(function(e, r) {
                        crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(window.location.href)).then(function(r) {
                            var t = Array.from(new Uint8Array(r));
                            s = t.slice(0, 16).map(function(e) {
                                return ("00" + e.toString(16)).slice(-2)
                            }).join(""), n(), e(s)
                        }).catch(r)
                    });
                case "header-url":
                    if (!(s = e.headerFilename || e.urlFilename)) {
                        var i = t.exec(window.location.href);
                        s = i ? i[1] : ""
                    }
                    break;
                default:
                    s = ""
            }
            n(), s.length > 128 && (s = s.substr(0, 64));
            return s
        };
        var t = new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)")
    }
});