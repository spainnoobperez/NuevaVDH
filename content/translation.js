! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 377)
}({
    377: function(e, t, r) {
        e.exports = r(378)
    },
    378: function(e, t, r) {
        "use strict";
        var n = combineReducers({
                translate: translateReducer
            }),
            o = createStore(n),
            a = null;
        try {
            a = JSON.parse(browser.i18n.getMessage("__missingI18nTags"))
        } catch (e) {}
        render(React.createElement(Provider, {
            store: o
        }, React.createElement(WehTranslationForm, {
            missingTags: a,
            footerExtra: React.createElement("a", {
                href: "#",
                onClick: function() {
                    return weh.rpc.call("openTranslationForum")
                }
            }, "Please, share your translations")
        })), document.getElementById("root")), weh.setPageTitle(weh._("translation"))
    }
});