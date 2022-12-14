! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";

    function C(e, t, n) {
        var r, i, o = (n = n || w).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function D(e, n, r) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function I(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function B(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function F() {
        w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready()
    }

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(_, U)
    }

    function Q() {
        this.expando = E.expando + Q.uid++
    }

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }

    function ue(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    function me(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n)
            for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }

    function xe() {
        return !0
    }

    function we() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return w.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe)
    }

    function ke(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a))
        }
    }

    function qe(n, r, i, o) {
        r = v(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = b(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : C(u.textContent.replace(Se, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Me(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function ze(e) {
        return E.cssProps[e] || $e[e] || (e in Fe ? e : $e[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                if ((e = We[n] + t) in Fe) return e
        }(e) || e)
    }

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = He(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function rt(e) {
        return (e.match(H) || []).join(" ")
    }

    function it(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ot(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }

    function ht(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) {
            r || ct.test(n) ? i(n, t) : ht(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== T(e)) i(n, e);
        else
            for (t in e) ht(n + "[" + t + "]", e[t], r, i)
    }
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        w = g.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        f = "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        E = function(e, t) {
            return new E.fn.init(e, t)
        };
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = y.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            C(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return v(a)
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && (C(e), e = e || T, E)) {
                if (11 !== d && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n
                    }
                if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
                        for ((f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return O.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        k(t, !0)
                    } finally {
                        s === A && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[A] = !0, e
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function me() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [N, d];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(p, h, g, v, y, e) {
            return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : Ce(c, s, p, n, r),
                    d = g ? y || (e ? p : l || v) ? [] : t : f;
                if (g && g(f, d, n, r), v)
                    for (i = Ce(d, u), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < H(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                        return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, A = "sizzle" + 1 * new Date,
            d = n.document,
            N = 0,
            r = 0,
            m = ue(),
            b = ue(),
            S = ue(),
            k = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            L = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            O = t.push,
            P = t.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(W),
            X = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                C()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    q.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, C = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : d;
                return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), p.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ce(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function(e) {
                    return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
                }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0
                }), T
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    k(t, !0)
                }
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != T && C(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                    for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [N, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a !== e)););
                                return (p -= v) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = H(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[A] ? le(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);
        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = x.preFilter; a;) {
                for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, b, r, i = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
                (a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        p = e || b && x.find.TAG("*", i),
                        h = N += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument == T || (C(o), n = !E); s = v[a++];)
                                if (s(o, t || T, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (N = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        for (a = 0; s = y[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = j.call(r));
                            f = Ce(f)
                        }
                        O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (N = h, w = d), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(g);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
    var h = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        A = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = E.expr.match.needsContext,
        k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
        }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t))
                    for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, L = E(w);
    var q = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return A(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = b(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t))
                            }
                        }
                        var u = 0;
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
            for (; t--;) B(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        g.setTimeout(function() {
            throw e
        })
    };
    var W = E.Deferred();
    E.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E])
        }
    }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === T(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        _ = /-([a-z])/g,
        X = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new Q,
        G = new Q,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = w.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
        },
        se = {};
    E.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var le, ce, fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
    var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/,
        be = /^([^.]*)(?:\.(.+)|)/;
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.get(t);
            if (X(t))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(H) || [""]).length; l--;) p = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--;)
                    if (p = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = E.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Ee(this, e, Ce), !1
            },
            trigger: function() {
                return Ee(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);
                else je(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = g), t.getComputedStyle(e)
        },
        Ie = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Re = new RegExp(ne.join("|"), "i");
    ! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = g.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = w.createElement("div"),
            l = w.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var _e, Ue, We = ["Webkit", "Moz", "ms"],
        Fe = w.createElement("div").style,
        $e = {},
        Ve = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20,
                        s = function() {
                            return E.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, E.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i
                }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Xe.test(t) || (t = ze(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Ie(e, Qe, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = He(e),
                    o = !m.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Ge(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = Me(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Ge)
    }), E.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = He(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = g.setTimeout(e, r);
            t.stop = function() {
                g.clearTimeout(n)
            }
        })
    }, _e = w.createElement("input"), Ue = w.createElement("select").appendChild(w.createElement("option")), _e.type = "checkbox", m.checkOn = "" !== _e.value, m.optSelected = Ue.selected, (_e = w.createElement("input")).value = "t", _e.type = "radio", m.radioValue = "t" === _e.value;
    var Ze, et = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return $(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Ze = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = et[t] || E.find.attr;
        et[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = et[o], et[o] = r, r = null != a(e, t, n) ? o : null, et[o] = i), r
        }
    });
    var tt = /^(?:input|select|textarea|button)$/i,
        nt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return $(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (b(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, it(this)))
            });
            if ((e = ot(t)).length)
                for (; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && " " + rt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = rt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (b(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, it(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ot(t)).length)
                for (; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && " " + rt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = rt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, it(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = E(this), r = ot(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = it(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + rt(it(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var at = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(at, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : rt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in g;
    var st = /^(?:focusinfocus|focusoutblur)$/,
        ut = function(e) {
            e.stopPropagation()
        };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = [n || w],
                p = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !st.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || p, st.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g)
                }
                for (i = 0;
                    (o = d[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ut), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ut), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    }), E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new g.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var lt, ct = /\[\]$/,
        ft = /\r?\n/g,
        dt = /^(?:submit|button|image|reset|file)$/i,
        pt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = b(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) ht(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && pt.test(this.nodeName) && !dt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ft, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ft, "\r\n")
                }
            }).get()
        }
    }), E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, m.createHTMLDocument = ((lt = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === lt.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Me(m.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function(e) {
        return null == e ? "" : (e + "").replace(gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var vt = g.jQuery,
        yt = g.$;
    return E.noConflict = function(e) {
        return g.$ === E && (g.$ = yt), e && g.jQuery === E && (g.jQuery = vt), E
    }, void 0 === e && (g.jQuery = g.$ = E), E
}),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, r) {
    (function(e, n) {
        e.extend(e.support, {
            orientation: "orientation" in t && "onorientationchange" in t
        })
    })(e),
    function(e) {
        e.event.special.throttledresize = {
            setup: function() {
                e(this).bind("resize", n)
            },
            teardown: function() {
                e(this).unbind("resize", n)
            }
        };
        var i, s, o, n = function() {
                s = (new Date).getTime(), (o = s - r) >= 250 ? (r = s, e(this).trigger("throttledresize")) : (i && clearTimeout(i), i = setTimeout(n, 250 - o))
            },
            r = 0
    }(e),
    function(e, t) {
        function p() {
            var e = s();
            e !== o && (o = e, r.trigger(i))
        }
        var s, o, u, a, l, c, h, r = e(t),
            i = "orientationchange",
            f = {
                0: !0,
                180: !0
            };
        e.support.orientation && (h = 50, u = (l = t.innerWidth || r.width()) > (c = t.innerHeight || r.height()) && l - c > h, a = f[t.orientation], (u && a || !u && !a) && (f = {
            "-90": !0,
            90: !0
        })), e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1;
                o = s(), r.bind("throttledresize", p)
            },
            teardown: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1;
                r.unbind("throttledresize", p)
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = s(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = s = function() {
            var i = n.documentElement;
            return (e.support.orientation ? f[t.orientation] : i && i.clientWidth / i.clientHeight < 1.1) ? "portrait" : "landscape"
        }, e.fn[i] = function(e) {
            return e ? this.bind(i, e) : this.trigger(i)
        }, e.attrFn && (e.attrFn[i] = !0)
    }(e, this),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t, n) {
        e.extend(e.mobile, {
            version: "1.4.5",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: e(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(e),
    function(e, t, n) {
        var r = {},
            i = e.find,
            s = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            o = /:jqmData\(([^)]*)\)/g;
        e.extend(e.mobile, {
            ns: "",
            getAttribute: function(t, n) {
                var r;
                (t = t.jquery ? t[0] : t) && t.getAttribute && (r = t.getAttribute("data-" + e.mobile.ns + n));
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : s.test(r) ? JSON.parse(r) : r)
                } catch (i) {}
                return r
            },
            nsNormalizeDict: r,
            nsNormalize: function(t) {
                return r[t] || (r[t] = e.camelCase(e.mobile.ns + t))
            },
            closestPageData: function(e) {
                return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), e.fn.jqmData = function(t, r) {
            var i;
            return void 0 !== t && (t && (t = e.mobile.nsNormalize(t)), i = arguments.length < 2 || void 0 === r ? this.data(t) : this.data(t, r)), i
        }, e.jqmData = function(t, n, r) {
            var i;
            return void 0 !== n && (i = e.data(t, n ? e.mobile.nsNormalize(n) : n, r)), i
        }, e.fn.jqmRemoveData = function(t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function(t, n) {
            return e.removeData(t, e.mobile.nsNormalize(n))
        }, e.find = function(t, n, r, s) {
            return t.indexOf(":jqmData") > -1 && (t = t.replace(o, "[data-" + (e.mobile.ns || "") + "$1]")), i.call(this, t, n, r, s)
        }, e.extend(e.find, i)
    }(e),
    function(e, t) {
        function s(t, n) {
            var r, i, s, u = t.nodeName.toLowerCase();
            return "area" === u ? (r = t.parentNode, i = r.name, !(!t.href || !i || "map" !== r.nodeName.toLowerCase()) && (!!(s = e("img[usemap=#" + i + "]")[0]) && o(s))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && o(t)
        }

        function o(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        var r = 0,
            i = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function(t) {
                return function(n, r) {
                    return "number" == typeof n ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), r && r.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || n) : t
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    i.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function(t) {
                return s(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && s(t, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
            function u(t, n, r, s) {
                return e.each(i, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function(n) {
                return n === t ? o["inner" + r].call(this) : this.each(function() {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function(t, n) {
                return "number" != typeof t ? o["outer" + r].call(this, t) : this.each(function() {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in n.createElement("div"), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(r) {
                if (r !== t) return this.css("zIndex", r);
                if (this.length)
                    for (var s, o, i = e(this[0]); i.length && i[0] !== n;) {
                        if (("absolute" === (s = i.css("position")) || "relative" === s || "fixed" === s) && (o = parseInt(i.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        i = i.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n, r) {
                var i, s = e.plugins[t];
                if (s && (r || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
            }
        }
    }(e),
    function(e, t, r) {
        e.extend(e.mobile, {
            window: e(t),
            document: e(n),
            keyCode: e.ui.keyCode,
            behaviors: {},
            silentScroll: function(n) {
                "number" !== e.type(n) && (n = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function() {
                    t.scrollTo(0, n), e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: n
                    })
                }, 20), setTimeout(function() {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function(t) {
                var n = e(t).closest(".ui-page").jqmData("url"),
                    r = e.mobile.path.documentBase.hrefNoHash;
                return e.mobile.dynamicBaseEnabled && n && e.mobile.path.isPath(n) || (n = r), e.mobile.path.makeUrlAbsolute(n, r)
            },
            removeActiveLinkClass: function(t) {
                !!e.mobile.activeClickedLink && (!e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length || t) && e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass), e.mobile.activeClickedLink = null
            },
            getInheritedTheme: function(e, t) {
                for (var s, o, n = e[0], r = "", i = /ui-(bar|body|overlay)-([a-z])\b/; n && !((s = n.className || "") && (o = i.exec(s)) && (r = o[2]));) n = n.parentNode;
                return r || t || "a"
            },
            enhanceable: function(e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function(e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function(t, n) {
                if (!e.mobile.ignoreContentEnabled) return t;
                var s, o, u, a, r = t.length,
                    i = e();
                for (a = 0; a < r; a++) {
                    for (o = t.eq(a), u = !1, s = t[a]; s;) {
                        if ("false" === (s.getAttribute ? s.getAttribute("data-" + e.mobile.ns + n) : "")) {
                            u = !0;
                            break
                        }
                        s = s.parentNode
                    }
                    u || (i = i.add(o))
                }
                return i
            },
            getScreenHeight: function() {
                return t.innerHeight || e.mobile.window.height()
            },
            resetActivePageHeight: function(t) {
                var n = e("." + e.mobile.activePageClass),
                    r = n.height(),
                    s = n.outerHeight(!0);
                t = function(t, n) {
                    var r = t.parent(),
                        i = [],
                        s = function() {
                            var t = e(this),
                                n = e.mobile.toolbar && t.data("mobile-toolbar") ? t.toolbar("option") : {
                                    position: t.attr("data-" + e.mobile.ns + "position"),
                                    updatePagePadding: !1 !== t.attr("data-" + e.mobile.ns + "update-page-padding")
                                };
                            return "fixed" !== n.position || !0 !== n.updatePagePadding
                        },
                        o = r.children(":jqmData(role='header')").filter(s),
                        u = t.children(":jqmData(role='header')"),
                        a = r.children(":jqmData(role='footer')").filter(s),
                        f = t.children(":jqmData(role='footer')");
                    return 0 === u.length && o.length > 0 && (i = i.concat(o.toArray())), 0 === f.length && a.length > 0 && (i = i.concat(a.toArray())), e.each(i, function(t, r) {
                        n -= e(r).outerHeight()
                    }), Math.max(0, n)
                }(n, "number" == typeof t ? t : e.mobile.getScreenHeight()), n.css("min-height", ""), n.height() < t && n.css("min-height", t - (s - r))
            },
            loading: function() {
                var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader(),
                    n = t.loader.apply(t, arguments);
                return this.loading._widget = t, n
            }
        }), e.addDependents = function(t, n) {
            var r = e(t),
                i = r.jqmData("dependents") || e();
            r.jqmData("dependents", e(i).add(n))
        }, e.fn.extend({
            removeWithDependents: function() {
                e.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var t, n = {},
                    r = e.mobile.page.prototype.keepNativeSelector(),
                    i = this;
                e.mobile.nojs && e.mobile.nojs(this), e.mobile.links && e.mobile.links(this), e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this), e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(), e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(), e.each(e.mobile.widgets, function(t, s) {
                    if (s.initSelector) {
                        var o = e.mobile.enhanceable(i.find(s.initSelector));
                        o.length > 0 && (o = o.not(r)), o.length > 0 && (n[s.prototype.widgetName] = o)
                    }
                });
                for (t in n) n[t][t]();
                return this
            },
            addDependents: function(t) {
                e.addDependents(this, t)
            },
            getEncodedText: function() {
                return e("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return e.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return e.mobile.hijackable(this)
            }
        }), e.removeWithDependents = function(t) {
            var n = e(t);
            (n.jqmData("dependents") || e()).remove(), n.remove()
        }, e.addDependents = function(t, n) {
            var r = e(t),
                i = r.jqmData("dependents") || e();
            r.jqmData("dependents", e(i).add(n))
        }, e.find.matches = function(t, n) {
            return e.find(t, null, null, n)
        }, e.find.matchesSelector = function(t, n) {
            return e.find(n, null, null, [t]).length > 0
        }
    }(e, this),
    function(e) {
        var t = e("meta[name=viewport]"),
            n = t.attr("content"),
            r = n + ",maximum-scale=1, user-scalable=no",
            i = n + ",maximum-scale=10, user-scalable=yes",
            s = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);
        e.mobile.zoom = e.extend({}, {
            enabled: !s,
            locked: !1,
            disable: function(n) {
                !s && !e.mobile.zoom.locked && (t.attr("content", r), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = n || !1)
            },
            enable: function(n) {
                !s && (!e.mobile.zoom.locked || !0 === n) && (t.attr("content", i), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
            },
            restore: function() {
                s || (t.attr("content", n), e.mobile.zoom.enabled = !0)
            }
        })
    }(e),
    function(e, t) {
        function f(e) {
            i = e.originalEvent, a = i.accelerationIncludingGravity, s = Math.abs(a.x), o = Math.abs(a.y), u = Math.abs(a.z), !t.orientation && (s > 7 || (u > 6 && o < 8 || u < 8 && o > 6) && s > 5) ? r.enabled && r.disable() : r.enabled || r.enable()
        }
        e.mobile.iosorientationfixEnabled = !0;
        var r, i, s, o, u, a, n = navigator.userAgent;
        /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(n) && n.indexOf("AppleWebKit") > -1 ? (r = e.mobile.zoom, e.mobile.document.on("mobileinit", function() {
            e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", r.enable).bind("devicemotion.iosorientationfix", f)
        })) : e.mobile.iosorientationfixEnabled = !1
    }(e, this)
});
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(a) {
            var b = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                d = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                e = /[cLlsS]/g,
                f = "CustomEase only accepts Cubic Bezier data.",
                g = function(a, b, c, d, e, f, h, i, j, k, l) {
                    var m, n = (a + c) / 2,
                        o = (b + d) / 2,
                        p = (c + e) / 2,
                        q = (d + f) / 2,
                        r = (e + h) / 2,
                        s = (f + i) / 2,
                        t = (n + p) / 2,
                        u = (o + q) / 2,
                        v = (p + r) / 2,
                        w = (q + s) / 2,
                        x = (t + v) / 2,
                        y = (u + w) / 2,
                        z = h - a,
                        A = i - b,
                        B = Math.abs((c - h) * A - (d - i) * z),
                        C = Math.abs((e - h) * A - (f - i) * z);
                    return k || (k = [{
                        x: a,
                        y: b
                    }, {
                        x: h,
                        y: i
                    }], l = 1), k.splice(l || k.length - 1, 0, {
                        x: x,
                        y: y
                    }), (B + C) * (B + C) > j * (z * z + A * A) && (m = k.length, g(a, b, n, o, t, u, x, y, j, k, l), g(x, y, v, w, r, s, h, i, j, k, l + 1 + (k.length - m))), k
                },
                h = function(a) {
                    var b, e, g, h, i, j, k, l, m, n, o, p = (a + "").replace(d, function(a) {
                            var b = +a;
                            return 1e-4 > b && b > -1e-4 ? 0 : b
                        }).match(c) || [],
                        q = [],
                        r = 0,
                        s = 0,
                        t = p.length,
                        u = 2;
                    for (b = 0; t > b; b++)
                        if (m = h, isNaN(p[b]) ? (h = p[b].toUpperCase(), i = h !== p[b]) : b--, e = +p[b + 1], g = +p[b + 2], i && (e += r, g += s), b || (k = e, l = g), "M" === h) j && j.length < 8 && (q.length -= 1, u = 0), r = k = e, s = l = g, j = [e, g], u = 2, q.push(j), b += 2, h = "L";
                        else if ("C" === h) j || (j = [0, 0]), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r + 1 * p[b + 3], j[u++] = s + 1 * p[b + 4], j[u++] = r += 1 * p[b + 5], j[u++] = s += 1 * p[b + 6], b += 6;
                    else if ("S" === h) "C" === m || "S" === m ? (n = r - j[u - 4], o = s - j[u - 3], j[u++] = r + n, j[u++] = s + o) : (j[u++] = r, j[u++] = s), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r += 1 * p[b + 3], j[u++] = s += 1 * p[b + 4], b += 4;
                    else {
                        if ("L" !== h && "Z" !== h) throw f;
                        "Z" === h && (e = k, g = l, j.closed = !0), ("L" === h || Math.abs(r - e) > .5 || Math.abs(s - g) > .5) && (j[u++] = r + (e - r) / 3, j[u++] = s + (g - s) / 3, j[u++] = r + 2 * (e - r) / 3, j[u++] = s + 2 * (g - s) / 3, j[u++] = e, j[u++] = g, "L" === h && (b += 2)), r = e, s = g
                    }
                    return q[0]
                },
                k = function(a) {
                    var b = this.lookup[a * this.l | 0] || this.lookup[this.l - 1];
                    return b.nx < a && (b = b.n), b.y + (a - b.x) / b.cx * b.cy
                },
                l = function(b, c, d) {
                    this._calcEnd = !0, this.id = b, b && (a.map[b] = this), this.getRatio = k, this.setData(c, d)
                },
                m = l.prototype = new a;
            return m.constructor = l, m.setData = function(a, c) {
                var d, i, k, l, m, n, o, p, q, r, s = (a = a || "0,0,1,1").match(b),
                    t = 1,
                    u = [];
                if (c = c || {}, r = c.precision || 1, this.data = a, this.lookup = [], this.points = u, this.fast = 1 >= r, (e.test(a) || -1 !== a.indexOf("M") && -1 === a.indexOf("C")) && (s = h(a)), 4 === (d = s.length)) s.unshift(0, 0), s.push(1, 1), d = 8;
                else if ((d - 2) % 6) throw f;
                for ((0 != +s[0] || 1 != +s[d - 2]) && function(a, b, c) {
                        c || 0 === c || (c = Math.max(+a[a.length - 1], +a[1]));
                        var d, e = -1 * +a[0],
                            f = -c,
                            g = a.length,
                            h = 1 / (+a[g - 2] + e),
                            j = -b || (Math.abs(+a[g - 1] - +a[1]) < .01 * (+a[g - 2] - +a[0]) ? function(a) {
                                var b, c = a.length,
                                    d = 999999999999;
                                for (b = 1; c > b; b += 6) + a[b] < d && (d = +a[b]);
                                return d
                            }(a) + f : +a[g - 1] + f);
                        for (j = j ? 1 / j : -h, d = 0; g > d; d += 2) a[d] = (+a[d] + e) * h, a[d + 1] = (+a[d + 1] + f) * j
                    }(s, c.height, c.originY), this.rawBezier = s, l = 2; d > l; l += 6) i = {
                    x: +s[l - 2],
                    y: +s[l - 1]
                }, k = {
                    x: +s[l + 4],
                    y: +s[l + 5]
                }, u.push(i, k), g(i.x, i.y, +s[l], +s[l + 1], +s[l + 2], +s[l + 3], k.x, k.y, 1 / (2e5 * r), u, u.length - 1);
                for (d = u.length, l = 0; d > l; l++) o = u[l], p = u[l - 1] || o, o.x > p.x || p.y !== o.y && p.x === o.x || o === p ? (p.cx = o.x - p.x, p.cy = o.y - p.y, p.n = o, p.nx = o.x, this.fast && l > 1 && Math.abs(p.cy / p.cx - u[l - 2].cy / u[l - 2].cx) > 2 && (this.fast = !1), p.cx < t && (p.cx ? t = p.cx : (p.cx = .001, l === d - 1 && (p.x -= .001, t = Math.min(t, .001), this.fast = !1)))) : (u.splice(l--, 1), d--);
                if (d = 1 / t + 1 | 0, this.l = d, m = 1 / d, n = 0, o = u[0], this.fast) {
                    for (l = 0; d > l; l++) q = l * m, o.nx < q && (o = u[++n]), i = o.y + (q - o.x) / o.cx * o.cy, this.lookup[l] = {
                        x: q,
                        cx: m,
                        y: i,
                        cy: 0,
                        nx: 9
                    }, l && (this.lookup[l - 1].cy = i - this.lookup[l - 1].y);
                    this.lookup[d - 1].cy = u[u.length - 1].y - i
                } else {
                    for (l = 0; d > l; l++) o.nx < l * m && (o = u[++n]), this.lookup[l] = o;
                    n < u.length - 1 && (this.lookup[l - 1] = u[u.length - 2])
                }
                return this._calcEnd = 1 !== u[u.length - 1].y || 0 !== u[0].y, this
            }, m.getRatio = k, m.getSVGData = function(a) {
                return l.getSVGData(this, a)
            }, l.create = function(a, b, c) {
                return new l(a, b, c)
            }, l.version = "0.2.1", l.bezierToPoints = g, l.get = function(b) {
                return a.map[b]
            }, l.getSVGData = function(b, c) {
                var d, e, f, g, h, i, j, k, l, m, n = 1e3,
                    o = (c = c || {}).width || 100,
                    p = c.height || 100,
                    q = c.x || 0,
                    r = (c.y || 0) + p,
                    s = c.path;
                if (c.invert && (p = -p, r = 0), (b = b.getRatio ? b : a.map[b] || console.log("No ease found: ", b)).rawBezier) {
                    for (d = [], j = b.rawBezier.length, f = 0; j > f; f += 2) d.push(((q + b.rawBezier[f] * o) * n | 0) / n + "," + ((r + b.rawBezier[f + 1] * -p) * n | 0) / n);
                    d[0] = "M" + d[0], d[1] = "C" + d[1]
                } else
                    for (d = ["M" + q + "," + r], j = Math.max(5, 200 * (c.precision || 1)), g = 1 / j, j += 2, k = 5 / j, l = ((q + g * o) * n | 0) / n, m = ((r + b.getRatio(g) * -p) * n | 0) / n, e = (m - r) / (l - q), f = 2; j > f; f++) h = ((q + f * g * o) * n | 0) / n, i = ((r + b.getRatio(f * g) * -p) * n | 0) / n, (Math.abs((i - m) / (h - l) - e) > k || f === j - 1) && (d.push(l + "," + m), e = (i - m) / (h - l)), l = h, m = i;
                return s && ("string" == typeof s ? document.querySelector(s) : s).setAttribute("d", d.join(" ")), d.join(" ")
            }, l
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
    }(),
    function(window, undefined) {
        function Proton(proParticleCount, integrationType) {
            this.proParticleCount = Proton.Util.initValue(proParticleCount, Proton.POOL_MAX), this.integrationType = Proton.Util.initValue(integrationType, Proton.EULER), this.emitters = [], this.renderers = [], this.time = 0, this.oldTime = 0, Proton.pool = new Proton.ParticlePool(this.proParticleCount), Proton.integrator = new Proton.NumericalIntegration(this.integrationType)
        }

        function EventDispatcher() {
            this.initialize()
        }

        function MStack() {
            this.mats = [], this.size = 0;
            for (var i = 0; i < 20; i++) this.mats.push(Proton.Mat3.create([0, 0, 0, 0, 0, 0, 0, 0, 0]))
        }

        function Particle(pOBJ) {
            this.id = "particle_" + Particle.ID++, this.reset(!0), Proton.Util.setPrototypeByObject(this, pOBJ)
        }

        function ParticlePool(num, releaseTime) {
            this.proParticleCount = Proton.Util.initValue(num, 0), this.releaseTime = Proton.Util.initValue(releaseTime, -1), this.poolList = [], this.timeoutID = 0;
            for (var i = 0; i < this.proParticleCount; i++) this.add();
            this.releaseTime > 0 && (this.timeoutID = setTimeout(this.release, this.releaseTime / 1e3))
        }

        function Span(a, b, center) {
            this.isArray = !1, Proton.Util.isArray(a) ? (this.isArray = !0, this.a = a) : (this.a = Proton.Util.initValue(a, 1), this.b = Proton.Util.initValue(b, this.a), this.center = Proton.Util.initValue(center, !1))
        }

        function ColorSpan(color) {
            Proton.Util.isArray(color) ? this.colorArr = color : this.colorArr = [color]
        }

        function Rectangle(x, y, w, h) {
            this.x = x, this.y = y, this.width = w, this.height = h, this.bottom = this.y + this.height, this.right = this.x + this.width
        }

        function Behaviour(life, easing) {
            this.id = "Behaviour_" + Behaviour.id++, this.life = Proton.Util.initValue(life, 1 / 0), this.easing = Proton.ease.setEasingByName(easing), this.age = 0, this.energy = 1, this.dead = !1, this.parents = [], this.name = "Behaviour"
        }

        function Rate(numpan, timepan) {
            this.numPan = Proton.Util.initValue(numpan, 1), this.timePan = Proton.Util.initValue(timepan, 1), this.numPan = Proton.Util.setSpanValue(this.numPan), this.timePan = Proton.Util.setSpanValue(this.timePan), this.startTime = 0, this.nextTime = 0, this.init()
        }

        function Initialize() {}

        function Life(a, b, c) {
            Life._super_.call(this), this.lifePan = Proton.Util.setSpanValue(a, b, c)
        }

        function Position(zone) {
            Position._super_.call(this), this.zone = Proton.Util.initValue(zone, new Proton.PointZone)
        }

        function Velocity(rpan, thapan, type) {
            Velocity._super_.call(this), this.rPan = Proton.Util.setSpanValue(rpan), this.thaPan = Proton.Util.setSpanValue(thapan), this.type = Proton.Util.initValue(type, "vector")
        }

        function Mass(a, b, c) {
            Mass._super_.call(this), this.massPan = Proton.Util.setSpanValue(a, b, c)
        }

        function Radius(a, b, c) {
            Radius._super_.call(this), this.radius = Proton.Util.setSpanValue(a, b, c)
        }

        function ImageTarget(image, w, h) {
            ImageTarget._super_.call(this), this.image = this.setSpanValue(image), this.w = Proton.Util.initValue(w, 20), this.h = Proton.Util.initValue(h, this.w)
        }

        function Force(fx, fy, life, easing) {
            Force._super_.call(this, life, easing), this.force = this.normalizeForce(new Proton.Vector2D(fx, fy)), this.name = "Force"
        }

        function Attraction(targetPosition, force, radius, life, easing) {
            Attraction._super_.call(this, life, easing), this.targetPosition = Proton.Util.initValue(targetPosition, new Proton.Vector2D), this.radius = Proton.Util.initValue(radius, 1e3), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.radiusSq = this.radius * this.radius, this.attractionForce = new Proton.Vector2D, this.lengthSq = 0, this.name = "Attraction"
        }

        function RandomDrift(driftX, driftY, delay, life, easing) {
            RandomDrift._super_.call(this, life, easing), this.reset(driftX, driftY, delay), this.time = 0, this.name = "RandomDrift"
        }

        function Repulsion(targetPosition, force, radius, life, easing) {
            Repulsion._super_.call(this, targetPosition, force, radius, life, easing), this.force *= -1, this.name = "Repulsion"
        }

        function Gravity(g, life, easing) {
            Gravity._super_.call(this, 0, g, life, easing), this.name = "Gravity"
        }

        function Collision(emitter, mass, callback, life, easing) {
            Collision._super_.call(this, life, easing), this.reset(emitter, mass, callback), this.name = "Collision"
        }

        function CrossZone(zone, crossType, life, easing) {
            CrossZone._super_.call(this, life, easing), this.reset(zone, crossType), this.name = "CrossZone"
        }

        function Alpha(a, b, life, easing) {
            Alpha._super_.call(this, life, easing), this.reset(a, b), this.name = "Alpha"
        }

        function Scale(a, b, life, easing) {
            Scale._super_.call(this, life, easing), this.reset(a, b), this.name = "Scale"
        }

        function Rotate(a, b, style, life, easing) {
            Rotate._super_.call(this, life, easing), this.reset(a, b, style), this.name = "Rotate"
        }

        function Color(color1, color2, life, easing) {
            Color._super_.call(this, life, easing), this.reset(color1, color2), this.name = "Color"
        }

        function GravityWell(centerPoint, force, life, easing) {
            GravityWell._super_.call(this, life, easing), this.distanceVec = new Proton.Vector2D, this.centerPoint = Proton.Util.initValue(centerPoint, new Proton.Vector2D), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.name = "GravityWell"
        }

        function Emitter(pObj) {
            this.initializes = [], this.particles = [], this.behaviours = [], this.emitTime = 0, this.emitTotalTimes = -1, this.damping = .006, this.bindEmitter = !0, this.rate = new Proton.Rate(1, .1), Emitter._super_.call(this, pObj), this.id = "emitter_" + Emitter.ID++
        }

        function BehaviourEmitter(pObj) {
            this.selfBehaviours = [], BehaviourEmitter._super_.call(this, pObj)
        }

        function FollowEmitter(mouseTarget, ease, pObj) {
            this.mouseTarget = Proton.Util.initValue(mouseTarget, window), this.ease = Proton.Util.initValue(ease, .7), this._allowEmitting = !1, this.initEventHandler(), FollowEmitter._super_.call(this, pObj)
        }

        function Renderer(type, proton, element) {
            this.element = element, this.type = Proton.Util.initValue(type, "canvas"), this.proton = proton, this.renderer = this.getRenderer()
        }

        function BaseRender(proton, element, stroke) {
            this.proton = proton, this.element = element, this.stroke = stroke
        }

        function DomRender(proton, element) {
            DomRender._super_.call(this, proton, element), this.stroke = null
        }

        function EaselRender(proton, element, stroke) {
            EaselRender._super_.call(this, proton, element), this.stroke = stroke
        }

        function CanvasRender(proton, element) {
            CanvasRender._super_.call(this, proton, element), this.stroke = null, this.context = this.element.getContext("2d"), this.bufferCache = {}
        }

        function PixelRender(proton, element, rectangle) {
            PixelRender._super_.call(this, proton, element), this.context = this.element.getContext("2d"), this.imageData = null, this.rectangle = null, this.rectangle = rectangle, this.createImageData(rectangle)
        }

        function WebGLRender(proton, element) {
            WebGLRender._super_.call(this, proton, element), this.gl = this.element.getContext("experimental-webgl", {
                antialias: !0,
                stencil: !1,
                depth: !1
            }), this.gl || alert("Sorry your browser do not suppest WebGL!"), this.initVar(), this.setMaxRadius(), this.initShaders(), this.initBuffers(), this.gl.blendEquation(this.gl.FUNC_ADD), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.enable(this.gl.BLEND)
        }

        function Zone() {
            this.vector = new Proton.Vector2D(0, 0), this.random = 0, this.crossType = "dead", this.alert = !0
        }

        function LineZone(x1, y1, x2, y2, direction) {
            LineZone._super_.call(this), x2 - x1 >= 0 ? (this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2) : (this.x1 = x2, this.y1 = y2, this.x2 = x1, this.y2 = y1), this.dx = this.x2 - this.x1, this.dy = this.y2 - this.y1, this.minx = Math.min(this.x1, this.x2), this.miny = Math.min(this.y1, this.y2), this.maxx = Math.max(this.x1, this.x2), this.maxy = Math.max(this.y1, this.y2), this.dot = this.x2 * this.y1 - this.x1 * this.y2, this.xxyy = this.dx * this.dx + this.dy * this.dy, this.gradient = this.getGradient(), this.length = this.getLength(), this.direction = Proton.Util.initValue(direction, ">")
        }

        function CircleZone(x, y, radius) {
            CircleZone._super_.call(this), this.x = x, this.y = y, this.radius = radius, this.angle = 0, this.center = {
                x: this.x,
                y: this.y
            }
        }

        function PointZone(x, y) {
            PointZone._super_.call(this), this.x = x, this.y = y
        }

        function RectZone(x, y, width, height) {
            RectZone._super_.call(this), this.x = x, this.y = y, this.width = width, this.height = height
        }

        function ImageZone(imageData, x, y, d) {
            ImageZone._super_.call(this), this.reset(imageData, x, y, d)
        }
        Proton.POOL_MAX = 1e3, Proton.TIME_STEP = 60, Proton.MEASURE = 100, Proton.EULER = "euler", Proton.RK2 = "runge-kutta2", Proton.RK4 = "runge-kutta4", Proton.VERLET = "verlet", Proton.PARTICLE_CREATED = "partilcleCreated", Proton.PARTICLE_UPDATE = "partilcleUpdate", Proton.PARTICLE_SLEEP = "particleSleep", Proton.PARTICLE_DEAD = "partilcleDead", Proton.PROTON_UPDATE = "protonUpdate", Proton.PROTON_UPDATE_AFTER = "protonUpdateAfter", Proton.EMITTER_ADDED = "emitterAdded", Proton.EMITTER_REMOVED = "emitterRemoved", Proton.amendChangeTabsBug = !0, Proton.TextureBuffer = {}, Proton.TextureCanvasBuffer = {}, Proton.prototype = {
            addRender: function(render) {
                render.proton = this, this.renderers.push(render.proton)
            },
            addEmitter: function(emitter) {
                this.emitters.push(emitter), emitter.parent = this, this.dispatchEvent(new Proton.Event({
                    type: Proton.EMITTER_ADDED,
                    emitter: emitter
                }))
            },
            removeEmitter: function(emitter) {
                var index = this.emitters.indexOf(emitter);
                this.emitters.splice(index, 1), emitter.parent = null, this.dispatchEvent(new Proton.Event({
                    type: Proton.EMITTER_REMOVED,
                    emitter: emitter
                }))
            },
            update: function() {
                this.dispatchEvent(new Proton.Event({
                    type: Proton.PROTON_UPDATE
                })), this.oldTime || (this.oldTime = (new Date).getTime());
                var time = (new Date).getTime();
                if (this.elapsed = (time - this.oldTime) / 1e3, Proton.amendChangeTabsBug && this.amendChangeTabsBug(), this.oldTime = time, this.elapsed > 0)
                    for (var i = 0; i < this.emitters.length; i++) this.emitters[i].update(this.elapsed);
                this.dispatchEvent(new Proton.Event({
                    type: Proton.PROTON_UPDATE_AFTER
                }))
            },
            amendChangeTabsBug: function() {
                this.elapsed > .5 && (this.oldTime = (new Date).getTime(), this.elapsed = 0)
            },
            getCount: function() {
                for (var total = 0, length = this.emitters.length, i = 0; i < length; i++) total += this.emitters[i].particles.length;
                return total
            },
            destory: function() {
                for (var length = this.emitters.length, i = 0; i < length; i++) this.emitters[i].destory(), delete this.emitters[i];
                this.emitters = [], this.time = 0, this.oldTime = 0, Proton.pool.release()
            }
        }, window.Proton = Proton;
        var p = EventDispatcher.prototype;
        EventDispatcher.initialize = function(target) {
            target.addEventListener = p.addEventListener, target.removeEventListener = p.removeEventListener, target.removeAllEventListeners = p.removeAllEventListeners, target.hasEventListener = p.hasEventListener, target.dispatchEvent = p.dispatchEvent
        }, p._listeners = null, p.initialize = function() {}, p.addEventListener = function(type, listener) {
            var listeners = this._listeners;
            listeners ? this.removeEventListener(type, listener) : listeners = this._listeners = {};
            var arr = listeners[type];
            return arr || (arr = listeners[type] = []), arr.push(listener), listener
        }, p.removeEventListener = function(type, listener) {
            var listeners = this._listeners;
            if (listeners) {
                var arr = listeners[type];
                if (arr)
                    for (var i = 0, l = arr.length; i < l; i++)
                        if (arr[i] == listener) {
                            1 == l ? delete listeners[type] : arr.splice(i, 1);
                            break
                        }
            }
        }, p.removeAllEventListeners = function(type) {
            type ? this._listeners && delete this._listeners[type] : this._listeners = null
        }, p.dispatchEvent = function(eventObj) {
            var ret = !1,
                listeners = this._listeners;
            if (eventObj && listeners) {
                var arr = listeners[eventObj.type];
                if (!arr) return ret;
                for (var i = 0, l = (arr = arr.slice()).length; i < l; i++) {
                    var o = arr[i];
                    ret = ret || o(eventObj)
                }
            }
            return !!ret
        }, p.hasEventListener = function(type) {
            var listeners = this._listeners;
            return !(!listeners || !listeners[type])
        }, (Proton.EventDispatcher = EventDispatcher).initialize(Proton.prototype), Proton.Event = function(pObj) {
            this.type = pObj.type, this.particle = pObj.particle, this.emitter = pObj.emitter
        };
        var Util = Util || {
            initValue: function(value, defaults) {
                return value = null != value && void 0 != value ? value : defaults
            },
            isArray: function(value) {
                return "object" == typeof value && value.hasOwnProperty("length")
            },
            destroyArray: function(array) {
                array.length = 0
            },
            destroyObject: function(obj) {
                for (var o in obj) delete obj[o]
            },
            getVector2D: function(postionOrX, y) {
                if ("object" == typeof postionOrX) return postionOrX;
                return new Proton.Vector2D(postionOrX, y)
            },
            judgeVector2D: function(pOBJ) {
                var result = "";
                return (pOBJ.hasOwnProperty("x") || pOBJ.hasOwnProperty("y") || pOBJ.hasOwnProperty("p") || pOBJ.hasOwnProperty("position")) && (result += "p"), (pOBJ.hasOwnProperty("vx") || pOBJ.hasOwnProperty("vx") || pOBJ.hasOwnProperty("v") || pOBJ.hasOwnProperty("velocity")) && (result += "v"), (pOBJ.hasOwnProperty("ax") || pOBJ.hasOwnProperty("ax") || pOBJ.hasOwnProperty("a") || pOBJ.hasOwnProperty("accelerate")) && (result += "a"), result
            },
            setVector2DByObject: function(target, pOBJ) {
                pOBJ.hasOwnProperty("x") && (target.p.x = pOBJ.x), pOBJ.hasOwnProperty("y") && (target.p.y = pOBJ.y), pOBJ.hasOwnProperty("vx") && (target.v.x = pOBJ.vx), pOBJ.hasOwnProperty("vy") && (target.v.y = pOBJ.vy), pOBJ.hasOwnProperty("ax") && (target.a.x = pOBJ.ax), pOBJ.hasOwnProperty("ay") && (target.a.y = pOBJ.ay), pOBJ.hasOwnProperty("p") && particle.p.copy(pOBJ.p), pOBJ.hasOwnProperty("v") && particle.v.copy(pOBJ.v), pOBJ.hasOwnProperty("a") && particle.a.copy(pOBJ.a), pOBJ.hasOwnProperty("position") && particle.p.copy(pOBJ.position), pOBJ.hasOwnProperty("velocity") && particle.v.copy(pOBJ.velocity), pOBJ.hasOwnProperty("accelerate") && particle.a.copy(pOBJ.accelerate)
            },
            addPrototypeByObject: function(target, prototypeObject, filters) {
                for (var singlePrototype in prototypeObject) filters ? filters.indexOf(singlePrototype) < 0 && (target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype])) : target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype]);
                return target
            },
            setPrototypeByObject: function(target, prototypeObject, filters) {
                for (var singlePrototype in prototypeObject) target.hasOwnProperty(singlePrototype) && (filters ? filters.indexOf(singlePrototype) < 0 && (target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype])) : target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype]));
                return target
            },
            setSpanValue: function(a, b, c) {
                return a instanceof Proton.Span ? a : b ? c ? new Proton.Span(a, b, c) : new Proton.Span(a, b) : new Proton.Span(a)
            },
            getSpanValue: function(pan) {
                return pan instanceof Proton.Span ? pan.getValue() : pan
            },
            inherits: function(subClass, superClass) {
                if (subClass._super_ = superClass, Object.create) subClass.prototype = Object.create(superClass.prototype, {
                    constructor: {
                        value: superClass
                    }
                });
                else {
                    var F = function() {};
                    F.prototype = superClass.prototype, subClass.prototype = new F, subClass.prototype.constructor = subClass
                }
            },
            getImageData: function(context, image, rect) {
                context.drawImage(image, rect.x, rect.y);
                var imagedata = context.getImageData(rect.x, rect.y, rect.width, rect.height);
                return context.clearRect(rect.x, rect.y, rect.width, rect.height), imagedata
            },
            getImage: function(img, particle, drawCanvas, fun) {
                "string" == typeof img ? this.loadAndSetImage(img, particle, drawCanvas, fun) : "object" == typeof img ? this.loadAndSetImage(img.src, particle, drawCanvas, fun) : img instanceof Image && this.loadedImage(img.src, particle, drawCanvas, fun, img)
            },
            loadedImage: function(src, particle, drawCanvas, fun, target) {
                if (particle.target = target, particle.transform.src = src, Proton.TextureBuffer[src] || (Proton.TextureBuffer[src] = particle.target), drawCanvas)
                    if (Proton.TextureCanvasBuffer[src]) particle.transform.canvas = Proton.TextureCanvasBuffer[src];
                    else {
                        var _width = Proton.WebGLUtil.nhpot(particle.target.width),
                            _height = Proton.WebGLUtil.nhpot(particle.target.height);
                        particle.transform.canvas = Proton.DomUtil.createCanvas("canvas" + src, _width, _height);
                        particle.transform.canvas.getContext("2d").drawImage(particle.target, 0, 0, particle.target.width, particle.target.height), Proton.TextureCanvasBuffer[src] = particle.transform.canvas
                    }
                fun && fun(particle)
            },
            loadAndSetImage: function(src, particle, drawCanvas, fun) {
                if (Proton.TextureBuffer[src]) this.loadedImage(src, particle, drawCanvas, fun, Proton.TextureBuffer[src]);
                else {
                    var self = this,
                        myImage = new Image;
                    myImage.onload = function(e) {
                        self.loadedImage(src, particle, drawCanvas, fun, e.target)
                    }, myImage.src = src
                }
            },
            hexToRGB: function(h) {
                var hex16 = "#" == h.charAt(0) ? h.substring(1, 7) : h;
                return {
                    r: parseInt(hex16.substring(0, 2), 16),
                    g: parseInt(hex16.substring(2, 4), 16),
                    b: parseInt(hex16.substring(4, 6), 16)
                }
            },
            rgbToHex: function(rbg) {
                return "rgb(" + rbg.r + ", " + rbg.g + ", " + rbg.b + ")"
            }
        };
        Proton.Util = Util;
        var WebGLUtil = WebGLUtil || {
            ipot: function(length) {
                return 0 == (length & length - 1)
            },
            nhpot: function(length) {
                --length;
                for (var i = 1; i < 32; i <<= 1) length |= length >> i;
                return length + 1
            },
            makeTranslation: function(tx, ty) {
                return [1, 0, 0, 0, 1, 0, tx, ty, 1]
            },
            makeRotation: function(angleInRadians) {
                var c = Math.cos(angleInRadians),
                    s = Math.sin(angleInRadians);
                return [c, -s, 0, s, c, 0, 0, 0, 1]
            },
            makeScale: function(sx, sy) {
                return [sx, 0, 0, 0, sy, 0, 0, 0, 1]
            },
            matrixMultiply: function(a, b) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    b00 = b[0],
                    b01 = b[1],
                    b02 = b[2],
                    b10 = b[3],
                    b11 = b[4],
                    b12 = b[5],
                    b20 = b[6],
                    b21 = b[7],
                    b22 = b[8];
                return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22]
            }
        };
        Proton.WebGLUtil = WebGLUtil;
        var DomUtil = DomUtil || {
            createCanvas: function($id, $width, $height, $position) {
                var element = document.createElement("canvas"),
                    position = $position || "absolute";
                return element.id = $id, element.width = $width, element.height = $height, element.style.position = position, element.style.opacity = 0, this.transformDom(element, -500, -500, 0, 0), element
            },
            transformDom: function($div, $x, $y, $scale, $rotate) {
                $div.style.WebkitTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.MozTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.OTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.msTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.transform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)"
            }
        };
        Proton.DomUtil = DomUtil, MStack.prototype.set = function(m, i) {
            0 == i ? Proton.Mat3.set(m, this.mats[0]) : Proton.Mat3.multiply(this.mats[i - 1], m, this.mats[i]), this.size = Math.max(this.size, i + 1)
        }, MStack.prototype.push = function(m) {
            0 == this.size ? Proton.Mat3.set(m, this.mats[0]) : Proton.Mat3.multiply(this.mats[this.size - 1], m, this.mats[this.size]), this.size++
        }, MStack.prototype.pop = function() {
            this.size > 0 && this.size--
        }, MStack.prototype.top = function() {
            return this.mats[this.size - 1]
        }, Proton.MStack = MStack, Particle.ID = 0, Particle.prototype = {
            getDirection: function() {
                return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI)
            },
            reset: function(init) {
                return this.life = 1 / 0, this.age = 0, this.energy = 1, this.dead = !1, this.sleep = !1, this.target = null, this.sprite = null, this.parent = null, this.mass = 1, this.radius = 10, this.alpha = 1, this.scale = 1, this.rotation = 0, this.color = null, this.easing = Proton.ease.setEasingByName(Proton.easeLinear), init ? (this.transform = {}, this.p = new Proton.Vector2D, this.v = new Proton.Vector2D, this.a = new Proton.Vector2D, this.old = {
                    p: new Proton.Vector2D,
                    v: new Proton.Vector2D,
                    a: new Proton.Vector2D
                }, this.behaviours = []) : (Proton.Util.destroyObject(this.transform), this.p.set(0, 0), this.v.set(0, 0), this.a.set(0, 0), this.old.p.set(0, 0), this.old.v.set(0, 0), this.old.a.set(0, 0), this.removeAllBehaviours()), this.transform.rgb = {
                    r: 255,
                    g: 255,
                    b: 255
                }, this
            },
            update: function(time, index) {
                if (!this.sleep) {
                    this.age += time;
                    var i, length = this.behaviours.length;
                    for (i = 0; i < length; i++) this.behaviours[i] && this.behaviours[i].applyBehaviour(this, time, index)
                }
                if (this.age >= this.life) this.destory();
                else {
                    var scale = this.easing(this.age / this.life);
                    this.energy = Math.max(1 - scale, 0)
                }
            },
            addBehaviour: function(behaviour) {
                this.behaviours.push(behaviour), behaviour.hasOwnProperty("parents") && behaviour.parents.push(this), behaviour.initialize(this)
            },
            addBehaviours: function(behaviours) {
                var i, length = behaviours.length;
                for (i = 0; i < length; i++) this.addBehaviour(behaviours[i])
            },
            removeBehaviour: function(behaviour) {
                var index = this.behaviours.indexOf(behaviour);
                if (index > -1) {
                    (behaviour = this.behaviours.splice(index, 1)).parents = null
                }
            },
            removeAllBehaviours: function() {
                Proton.Util.destroyArray(this.behaviours)
            },
            destory: function() {
                this.removeAllBehaviours(), this.energy = 0, this.dead = !0, this.parent = null
            }
        }, Proton.Particle = Particle, ParticlePool.prototype = {
            create: function(newTypeParticleClass) {
                return newTypeParticleClass ? new newTypeParticle : new Proton.Particle
            },
            getCount: function() {
                return this.poolList.length
            },
            add: function() {
                return this.poolList.push(this.create())
            },
            get: function() {
                return 0 === this.poolList.length ? this.create() : this.poolList.pop().reset()
            },
            set: function(particle) {
                if (this.poolList.length < Proton.POOL_MAX) return this.poolList.push(particle)
            },
            release: function() {
                for (var i = 0; i < this.poolList.length; i++) this.poolList[i].destory && this.poolList[i].destory(), delete this.poolList[i];
                this.poolList = []
            }
        }, Proton.ParticlePool = ParticlePool;
        var MathUtils = {
            randomAToB: function(a, b, INT) {
                return INT ? Math.floor(Math.random() * (b - a)) + a : a + Math.random() * (b - a)
            },
            randomFloating: function(center, f, INT) {
                return MathUtils.randomAToB(center - f, center + f, INT)
            },
            randomZone: function(display) {},
            degreeTransform: function(a) {
                return a * Math.PI / 180
            },
            toColor16: function(num) {
                return "#" + num.toString(16)
            },
            randomColor: function() {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
            }
        };
        Proton.MathUtils = MathUtils;
        var NumericalIntegration = function(type) {
            this.type = Proton.Util.initValue(type, Proton.EULER)
        };
        NumericalIntegration.prototype = {
            integrate: function(particles, time, damping) {
                this.eulerIntegrate(particles, time, damping)
            },
            eulerIntegrate: function(particle, time, damping) {
                particle.sleep || (particle.old.p.copy(particle.p), particle.old.v.copy(particle.v), particle.a.multiplyScalar(1 / particle.mass), particle.v.add(particle.a.multiplyScalar(time)), particle.p.add(particle.old.v.multiplyScalar(time)), damping && particle.v.multiplyScalar(damping), particle.a.clear())
            }
        }, Proton.NumericalIntegration = NumericalIntegration;
        var Vector2D = function(x, y) {
            this.x = x || 0, this.y = y || 0
        };
        Vector2D.prototype = {
            set: function(x, y) {
                return this.x = x, this.y = y, this
            },
            setX: function(x) {
                return this.x = x, this
            },
            setY: function(y) {
                return this.y = y, this
            },
            setComponent: function(index, value) {
                switch (index) {
                    case 0:
                        this.x = value;
                        break;
                    case 1:
                        this.y = value;
                        break;
                    default:
                        throw new Error("index is out of range: " + index)
                }
            },
            getGradient: function() {
                return 0 != this.x ? Math.atan2(this.y, this.x) : this.y > 0 ? Math.PI / 2 : this.y < 0 ? -Math.PI / 2 : void 0
            },
            getComponent: function(index) {
                switch (index) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + index)
                }
            },
            copy: function(v) {
                return this.x = v.x, this.y = v.y, this
            },
            add: function(v, w) {
                return void 0 !== w ? this.addVectors(v, w) : (this.x += v.x, this.y += v.y, this)
            },
            addXY: function(a, b) {
                return this.x += a, this.y += b, this
            },
            addVectors: function(a, b) {
                return this.x = a.x + b.x, this.y = a.y + b.y, this
            },
            addScalar: function(s) {
                return this.x += s, this.y += s, this
            },
            sub: function(v, w) {
                return void 0 !== w ? this.subVectors(v, w) : (this.x -= v.x, this.y -= v.y, this)
            },
            subVectors: function(a, b) {
                return this.x = a.x - b.x, this.y = a.y - b.y, this
            },
            multiplyScalar: function(s) {
                return this.x *= s, this.y *= s, this
            },
            divideScalar: function(s) {
                return 0 !== s ? (this.x /= s, this.y /= s) : this.set(0, 0), this
            },
            min: function(v) {
                return this.x > v.x && (this.x = v.x), this.y > v.y && (this.y = v.y), this
            },
            max: function(v) {
                return this.x < v.x && (this.x = v.x), this.y < v.y && (this.y = v.y), this
            },
            clamp: function(min, max) {
                return this.x < min.x ? this.x = min.x : this.x > max.x && (this.x = max.x), this.y < min.y ? this.y = min.y : this.y > max.y && (this.y = max.y), this
            },
            negate: function() {
                return this.multiplyScalar(-1)
            },
            dot: function(v) {
                return this.x * v.x + this.y * v.y
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            distanceTo: function(v) {
                return Math.sqrt(this.distanceToSquared(v))
            },
            rotate: function(tha) {
                var x = this.x,
                    y = this.y;
                return this.x = x * Math.cos(tha) + y * Math.sin(tha), this.y = -x * Math.sin(tha) + y * Math.cos(tha), this
            },
            distanceToSquared: function(v) {
                var dx = this.x - v.x,
                    dy = this.y - v.y;
                return dx * dx + dy * dy
            },
            setLength: function(l) {
                var oldLength = this.length();
                return 0 !== oldLength && l !== oldLength && this.multiplyScalar(l / oldLength), this
            },
            lerp: function(v, alpha) {
                return this.x += (v.x - this.x) * alpha, this.y += (v.y - this.y) * alpha, this
            },
            equals: function(v) {
                return v.x === this.x && v.y === this.y
            },
            toArray: function() {
                return [this.x, this.y]
            },
            clear: function() {
                return this.x = 0, this.y = 0, this
            },
            clone: function() {
                return new Proton.Vector2D(this.x, this.y)
            }
        }, Proton.Vector2D = Vector2D;
        var Polar2D = function(r, tha) {
            this.r = Math.abs(r) || 0, this.tha = tha || 0
        };
        Polar2D.prototype = {
            set: function(r, tha) {
                return this.r = r, this.tha = tha, this
            },
            setR: function(r) {
                return this.r = r, this
            },
            setTha: function(tha) {
                return this.tha = tha, this
            },
            copy: function(p) {
                return this.r = p.r, this.tha = p.tha, this
            },
            toVector: function() {
                return new Proton.Vector2D(this.getX(), this.getY())
            },
            getX: function() {
                return this.r * Math.sin(this.tha)
            },
            getY: function() {
                return -this.r * Math.cos(this.tha)
            },
            normalize: function() {
                return this.r = 1, this
            },
            equals: function(v) {
                return v.r === this.r && v.tha === this.tha
            },
            toArray: function() {
                return [this.r, this.tha]
            },
            clear: function() {
                return this.r = 0, this.tha = 0, this
            },
            clone: function() {
                return new Proton.Polar2D(this.r, this.tha)
            }
        }, Proton.Polar2D = Polar2D, Span.prototype = {
            getValue: function(INT) {
                return this.isArray ? this.a[Math.floor(this.a.length * Math.random())] : this.center ? Proton.MathUtils.randomFloating(this.a, this.b, INT) : Proton.MathUtils.randomAToB(this.a, this.b, INT)
            }
        }, Proton.Span = Span, Proton.getSpan = function(a, b, center) {
            return new Proton.Span(a, b, center)
        }, Proton.Util.inherits(ColorSpan, Proton.Span), ColorSpan.prototype.getValue = function() {
            var color = this.colorArr[Math.floor(this.colorArr.length * Math.random())];
            return "random" == color || "Random" == color ? Proton.MathUtils.randomColor() : color
        }, Proton.ColorSpan = ColorSpan, Rectangle.prototype = {
            contains: function(x, y) {
                return x <= this.right && x >= this.x && y <= this.bottom && y >= this.y
            }
        }, Proton.Rectangle = Rectangle;
        var Mat3 = Mat3 || {
            create: function(mat3) {
                var mat = new Float32Array(9);
                return mat3 && this.set(mat3, mat), mat
            },
            set: function(mat1, mat2) {
                for (var i = 0; i < 9; i++) mat2[i] = mat1[i];
                return mat2
            },
            multiply: function(mat, mat2, mat3) {
                var a00 = mat[0],
                    a01 = mat[1],
                    a02 = mat[2],
                    a10 = mat[3],
                    a11 = mat[4],
                    a20 = mat[6],
                    a21 = mat[7],
                    b00 = mat2[0],
                    b01 = mat2[1],
                    b02 = mat2[2],
                    b10 = mat2[3],
                    b11 = mat2[4],
                    b20 = mat2[6],
                    b21 = mat2[7];
                return mat3[0] = b00 * a00 + b01 * a10, mat3[1] = b00 * a01 + b01 * a11, mat3[2] = a02 * b02, mat3[3] = b10 * a00 + b11 * a10, mat3[4] = b10 * a01 + b11 * a11, mat3[6] = b20 * a00 + b21 * a10 + a20, mat3[7] = b20 * a01 + b21 * a11 + a21, mat3
            },
            inverse: function(mat, mat3) {
                var id, a00 = mat[0],
                    a01 = mat[1],
                    a10 = mat[3],
                    a11 = mat[4],
                    a20 = mat[6],
                    a21 = mat[7],
                    b01 = a11,
                    b11 = -a10,
                    b21 = a21 * a10 - a11 * a20;
                return id = 1 / (a00 * b01 + a01 * b11), mat3[0] = b01 * id, mat3[1] = -a01 * id, mat3[3] = b11 * id, mat3[4] = a00 * id, mat3[6] = b21 * id, mat3[7] = (-a21 * a00 + a01 * a20) * id, mat3
            },
            multiplyVec2: function(m, vec, mat3) {
                var x = vec[0],
                    y = vec[1];
                return mat3[0] = x * m[0] + y * m[3] + m[6], mat3[1] = x * m[1] + y * m[4] + m[7], mat3
            }
        };
        Proton.Mat3 = Mat3, Behaviour.id = 0, Behaviour.prototype = {
            reset: function(life, easing) {
                this.life = Proton.Util.initValue(life, 1 / 0), this.easing = Proton.Util.initValue(easing, Proton.ease.setEasingByName(Proton.easeLinear))
            },
            normalizeForce: function(force) {
                return force.multiplyScalar(Proton.MEASURE)
            },
            normalizeValue: function(value) {
                return value * Proton.MEASURE
            },
            initialize: function(particle) {},
            applyBehaviour: function(particle, time, index) {
                if (this.age += time, this.age >= this.life || this.dead) this.energy = 0, this.dead = !0, this.destory();
                else {
                    var scale = this.easing(particle.age / particle.life);
                    this.energy = Math.max(1 - scale, 0)
                }
            },
            destory: function() {
                var i, length = this.parents.length;
                for (i = 0; i < length; i++) this.parents[i].removeBehaviour(this);
                this.parents = []
            }
        }, Proton.Behaviour = Behaviour, Rate.prototype = {
            init: function() {
                this.startTime = 0, this.nextTime = this.timePan.getValue()
            },
            getValue: function(time) {
                return this.startTime += time, this.startTime >= this.nextTime ? (this.startTime = 0, this.nextTime = this.timePan.getValue(), 1 == this.numPan.b ? this.numPan.getValue(!1) > .5 ? 1 : 0 : this.numPan.getValue(!0)) : 0
            }
        }, Proton.Rate = Rate, Initialize.prototype.reset = function() {}, Initialize.prototype.init = function(emitter, particle) {
            particle ? this.initialize(particle) : this.initialize(emitter)
        }, Initialize.prototype.initialize = function(target) {}, Proton.Initialize = Initialize;
        Proton.InitializeUtil = {
            initialize: function(emitter, particle, initializes) {
                var i, length = initializes.length;
                for (i = 0; i < length; i++) initializes[i] instanceof Proton.Initialize ? initializes[i].init(emitter, particle) : Proton.InitializeUtil.init(emitter, particle, initializes[i]);
                Proton.InitializeUtil.bindEmitter(emitter, particle)
            },
            init: function(emitter, particle, initialize) {
                Proton.Util.setPrototypeByObject(particle, initialize), Proton.Util.setVector2DByObject(particle, initialize)
            },
            bindEmitter: function(emitter, particle) {
                emitter.bindEmitter && (particle.p.add(emitter.p), particle.v.add(emitter.v), particle.a.add(emitter.a), particle.v.rotate(Proton.MathUtils.degreeTransform(emitter.rotation)))
            }
        }, Proton.Util.inherits(Life, Proton.Initialize), Life.prototype.initialize = function(target) {
            this.lifePan.a == 1 / 0 ? target.life = 1 / 0 : target.life = this.lifePan.getValue()
        }, Proton.Life = Life, Proton.Util.inherits(Position, Proton.Initialize), Position.prototype.reset = function(zone) {
            this.zone = Proton.Util.initValue(zone, new Proton.PointZone)
        }, Position.prototype.initialize = function(target) {
            this.zone.getPosition(), target.p.x = this.zone.vector.x, target.p.y = this.zone.vector.y
        }, Proton.Position = Position, Proton.P = Position, Proton.Util.inherits(Velocity, Proton.Initialize), Velocity.prototype.reset = function(rpan, thapan, type) {
            this.rPan = Proton.Util.setSpanValue(rpan), this.thaPan = Proton.Util.setSpanValue(thapan), this.type = Proton.Util.initValue(type, "vector")
        }, Velocity.prototype.normalizeVelocity = function(vr) {
            return vr * Proton.MEASURE
        }, Velocity.prototype.initialize = function(target) {
            if ("p" == this.type || "P" == this.type || "polar" == this.type) {
                var polar2d = new Proton.Polar2D(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
                target.v.x = polar2d.getX(), target.v.y = polar2d.getY()
            } else target.v.x = this.normalizeVelocity(this.rPan.getValue()), target.v.y = this.normalizeVelocity(this.thaPan.getValue())
        }, Proton.Velocity = Velocity, Proton.V = Velocity, Proton.Util.inherits(Mass, Proton.Initialize), Mass.prototype.initialize = function(target) {
            target.mass = this.massPan.getValue()
        }, Proton.Mass = Mass, Proton.Util.inherits(Radius, Proton.Initialize), Radius.prototype.reset = function(a, b, c) {
            this.radius = Proton.Util.setSpanValue(a, b, c)
        }, Radius.prototype.initialize = function(particle) {
            particle.radius = this.radius.getValue(), particle.transform.oldRadius = particle.radius
        }, Proton.Radius = Radius, Proton.Util.inherits(ImageTarget, Proton.Initialize), ImageTarget.prototype.initialize = function(particle) {
            var imagetarget = this.image.getValue();
            particle.target = "string" == typeof imagetarget ? {
                width: this.w,
                height: this.h,
                src: imagetarget
            } : imagetarget
        }, ImageTarget.prototype.setSpanValue = function(color) {
            return color instanceof Proton.ColorSpan ? color : new Proton.ColorSpan(color)
        }, Proton.ImageTarget = ImageTarget, Proton.Util.inherits(Force, Proton.Behaviour), Force.prototype.reset = function(fx, fy, life, easing) {
            this.force = this.normalizeForce(new Proton.Vector2D(fx, fy)), life && Force._super_.prototype.reset.call(this, life, easing)
        }, Force.prototype.applyBehaviour = function(particle, time, index) {
            Force._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.a.add(this.force)
        }, Proton.Force = Force, Proton.F = Force, Proton.Util.inherits(Attraction, Proton.Behaviour), Attraction.prototype.reset = function(targetPosition, force, radius, life, easing) {
            this.targetPosition = Proton.Util.initValue(targetPosition, new Proton.Vector2D), this.radius = Proton.Util.initValue(radius, 1e3), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.radiusSq = this.radius * this.radius, this.attractionForce = new Proton.Vector2D, this.lengthSq = 0, life && Attraction._super_.prototype.reset.call(this, life, easing)
        }, Attraction.prototype.applyBehaviour = function(particle, time, index) {
            Attraction._super_.prototype.applyBehaviour.call(this, particle, time, index), this.attractionForce.copy(this.targetPosition), this.attractionForce.sub(particle.p), this.lengthSq = this.attractionForce.lengthSq(), this.lengthSq > 4e-6 && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(), this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq), this.attractionForce.multiplyScalar(this.force), particle.a.add(this.attractionForce))
        }, Proton.Attraction = Attraction, Proton.Util.inherits(RandomDrift, Proton.Behaviour), RandomDrift.prototype.reset = function(driftX, driftY, delay, life, easing) {
            this.panFoce = new Proton.Vector2D(driftX, driftY), this.panFoce = this.normalizeForce(this.panFoce), this.delay = delay, life && RandomDrift._super_.prototype.reset.call(this, life, easing)
        }, RandomDrift.prototype.applyBehaviour = function(particle, time, index) {
            RandomDrift._super_.prototype.applyBehaviour.call(this, particle, time, index), this.time += time, this.time >= this.delay && (particle.a.addXY(Proton.MathUtils.randomAToB(-this.panFoce.x, this.panFoce.x), Proton.MathUtils.randomAToB(-this.panFoce.y, this.panFoce.y)), this.time = 0)
        }, Proton.RandomDrift = RandomDrift, Proton.Util.inherits(Repulsion, Proton.Attraction), Repulsion.prototype.reset = function(targetPosition, force, radius, life, easing) {
            Repulsion._super_.prototype.reset.call(this, targetPosition, force, radius, life, easing), this.force *= -1
        }, Proton.Repulsion = Repulsion, Proton.Util.inherits(Gravity, Proton.Force), Gravity.prototype.reset = function(g, life, easing) {
            Gravity._super_.prototype.reset.call(this, 0, g, life, easing)
        }, Proton.Gravity = Gravity, Proton.G = Gravity, Proton.Util.inherits(Collision, Proton.Behaviour), Collision.prototype.reset = function(emitter, mass, callback, life, easing) {
            this.emitter = Proton.Util.initValue(emitter, null), this.mass = Proton.Util.initValue(mass, !0), this.callback = Proton.Util.initValue(callback, null), this.collisionPool = [], this.delta = new Proton.Vector2D, life && Collision._super_.prototype.reset.call(this, life, easing)
        }, Collision.prototype.applyBehaviour = function(particle, time, index) {
            for (var otherParticle, lengthSq, overlap, averageMass1, averageMass2, newPool = this.emitter ? this.emitter.particles.slice(index) : this.pool.slice(index), length = newPool.length, i = 0; i < length; i++)(otherParticle = newPool[i]) !== particle && (this.delta.copy(otherParticle.p), this.delta.sub(particle.p), lengthSq = this.delta.lengthSq(), distance = particle.radius + otherParticle.radius, lengthSq <= distance * distance && (overlap = distance - Math.sqrt(lengthSq), overlap += .5, totalMass = particle.mass + otherParticle.mass, averageMass1 = this.mass ? otherParticle.mass / totalMass : .5, averageMass2 = this.mass ? particle.mass / totalMass : .5, particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1)), otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2)), this.callback && this.callback(particle, otherParticle)))
        }, Proton.Collision = Collision, Proton.Util.inherits(CrossZone, Proton.Behaviour), CrossZone.prototype.reset = function(zone, crossType, life, easing) {
            this.zone = zone, this.zone.crossType = Proton.Util.initValue(crossType, "dead"), life && CrossZone._super_.prototype.reset.call(this, life, easing)
        }, CrossZone.prototype.applyBehaviour = function(particle, time, index) {
            CrossZone._super_.prototype.applyBehaviour.call(this, particle, time, index), this.zone.crossing(particle)
        }, Proton.CrossZone = CrossZone, Proton.Util.inherits(Alpha, Proton.Behaviour), Alpha.prototype.reset = function(a, b, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, 1)), this.b = Proton.Util.setSpanValue(b), life && Alpha._super_.prototype.reset.call(this, life, easing)
        }, Alpha.prototype.initialize = function(particle) {
            particle.transform.alphaA = this.a.getValue(), this.same ? particle.transform.alphaB = particle.transform.alphaA : particle.transform.alphaB = this.b.getValue()
        }, Alpha.prototype.applyBehaviour = function(particle, time, index) {
            Alpha._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy, particle.alpha < .001 && (particle.alpha = 0)
        }, Proton.Alpha = Alpha, Proton.Util.inherits(Scale, Proton.Behaviour), Scale.prototype.reset = function(a, b, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, 1)), this.b = Proton.Util.setSpanValue(b), life && Scale._super_.prototype.reset.call(this, life, easing)
        }, Scale.prototype.initialize = function(particle) {
            particle.transform.scaleA = this.a.getValue(), particle.transform.oldRadius = particle.radius, this.same ? particle.transform.scaleB = particle.transform.scaleA : particle.transform.scaleB = this.b.getValue()
        }, Scale.prototype.applyBehaviour = function(particle, time, index) {
            Scale._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy, particle.scale < 1e-4 && (particle.scale = 0), particle.radius = particle.transform.oldRadius * particle.scale
        }, Proton.Scale = Scale, Proton.Util.inherits(Rotate, Proton.Behaviour), Rotate.prototype.reset = function(a, b, style, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, "Velocity")), this.b = Proton.Util.setSpanValue(Proton.Util.initValue(b, 0)), this.style = Proton.Util.initValue(style, "to"), life && Rotate._super_.prototype.reset.call(this, life, easing)
        }, Rotate.prototype.initialize = function(particle) {
            particle.rotation = this.a.getValue(), particle.transform.rotationA = this.a.getValue(), this.same || (particle.transform.rotationB = this.b.getValue())
        }, Rotate.prototype.applyBehaviour = function(particle, time, index) {
            Rotate._super_.prototype.applyBehaviour.call(this, particle, time, index), this.same ? "V" != this.a.a && "Velocity" != this.a.a && "v" != this.a.a || (particle.rotation = particle.getDirection()) : "to" == this.style || "TO" == this.style || "_" == this.style ? particle.rotation += particle.transform.rotationB + (particle.transform.rotationA - particle.transform.rotationB) * this.energy : particle.rotation += particle.transform.rotationB
        }, Proton.Rotate = Rotate, Proton.Util.inherits(Color, Proton.Behaviour), Color.prototype.reset = function(color1, color2, life, easing) {
            this.color1 = this.setSpanValue(color1), this.color2 = this.setSpanValue(color2), life && Color._super_.prototype.reset.call(this, life, easing)
        }, Color.prototype.initialize = function(particle) {
            particle.color = this.color1.getValue(), particle.transform.beginRGB = Proton.Util.hexToRGB(particle.color), this.color2 && (particle.transform.endRGB = Proton.Util.hexToRGB(this.color2.getValue()))
        }, Color.prototype.applyBehaviour = function(particle, time, index) {
            this.color2 ? (Color._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.transform.rgb.r = particle.transform.endRGB.r + (particle.transform.beginRGB.r - particle.transform.endRGB.r) * this.energy, particle.transform.rgb.g = particle.transform.endRGB.g + (particle.transform.beginRGB.g - particle.transform.endRGB.g) * this.energy, particle.transform.rgb.b = particle.transform.endRGB.b + (particle.transform.beginRGB.b - particle.transform.endRGB.b) * this.energy, particle.transform.rgb.r = parseInt(particle.transform.rgb.r, 10), particle.transform.rgb.g = parseInt(particle.transform.rgb.g, 10), particle.transform.rgb.b = parseInt(particle.transform.rgb.b, 10)) : (particle.transform.rgb.r = particle.transform.beginRGB.r, particle.transform.rgb.g = particle.transform.beginRGB.g, particle.transform.rgb.b = particle.transform.beginRGB.b)
        }, Color.prototype.setSpanValue = function(color) {
            return color ? color instanceof Proton.ColorSpan ? color : new Proton.ColorSpan(color) : null
        }, Proton.Color = Color, Proton.Util.inherits(GravityWell, Proton.Behaviour), GravityWell.prototype.reset = function(centerPoint, force, life, easing) {
            this.distanceVec = new Proton.Vector2D, this.centerPoint = Proton.Util.initValue(centerPoint, new Proton.Vector2D), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), life && GravityWell._super_.prototype.reset.call(this, life, easing)
        }, GravityWell.prototype.initialize = function(particle) {}, GravityWell.prototype.applyBehaviour = function(particle, time, index) {
            this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
            var distanceSq = this.distanceVec.lengthSq();
            if (0 != distanceSq) {
                var distance = this.distanceVec.length(),
                    factor = this.force * time / (distanceSq * distance);
                particle.v.x += factor * this.distanceVec.x, particle.v.y += factor * this.distanceVec.y
            }
        }, Proton.GravityWell = GravityWell, Emitter.ID = 0, Proton.Util.inherits(Emitter, Proton.Particle), Proton.EventDispatcher.initialize(Emitter.prototype), Emitter.prototype.emit = function(emitTime, life) {
            this.emitTime = 0, this.emitTotalTimes = Proton.Util.initValue(emitTime, 1 / 0), 1 == life || "life" == life || "destroy" == life ? this.life = "once" == emitTime ? 1 : this.emitTotalTimes : isNaN(life) || (this.life = life), this.rate.init()
        }, Emitter.prototype.stopEmit = function() {
            this.emitTotalTimes = -1, this.emitTime = 0
        }, Emitter.prototype.removeAllParticles = function() {
            for (var i = 0; i < this.particles.length; i++) this.particles[i].dead = !0
        }, Emitter.prototype.createParticle = function(initialize, behaviour) {
            var particle = Proton.pool.get();
            return this.setupParticle(particle, initialize, behaviour), this.dispatchEvent(new Proton.Event({
                type: Proton.PARTICLE_CREATED,
                particle: particle
            })), particle
        }, Emitter.prototype.addSelfInitialize = function(pObj) {
            pObj.init ? pObj.init(this) : this.initAll()
        }, Emitter.prototype.addInitialize = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.initializes.push(arguments[i])
        }, Emitter.prototype.removeInitialize = function(initializer) {
            var index = this.initializes.indexOf(initializer);
            index > -1 && this.initializes.splice(index, 1)
        }, Emitter.prototype.removeInitializers = function() {
            Proton.Util.destroyArray(this.initializes)
        }, Emitter.prototype.addBehaviour = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.behaviours.push(arguments[i]), arguments[i].hasOwnProperty("parents") && arguments[i].parents.push(this)
        }, Emitter.prototype.removeBehaviour = function(behaviour) {
            var index = this.behaviours.indexOf(behaviour);
            index > -1 && this.behaviours.splice(index, 1)
        }, Emitter.prototype.removeAllBehaviours = function() {
            Proton.Util.destroyArray(this.behaviours)
        }, Emitter.prototype.integrate = function(time) {
            var damping = 1 - this.damping;
            Proton.integrator.integrate(this, time, damping);
            var i, length = this.particles.length;
            for (i = 0; i < length; i++) {
                var particle = this.particles[i];
                particle.update(time, i), Proton.integrator.integrate(particle, time, damping), this.dispatchEvent(new Proton.Event({
                    type: Proton.PARTICLE_UPDATE,
                    particle: particle
                }))
            }
        }, Emitter.prototype.emitting = function(time) {
            if ("once" == this.emitTotalTimes) {
                var length = this.rate.getValue(99999);
                for (i = 0; i < length; i++) this.createParticle();
                this.emitTotalTimes = "none"
            } else if (!isNaN(this.emitTotalTimes) && (this.emitTime += time, this.emitTime < this.emitTotalTimes)) {
                var i;
                length = this.rate.getValue(time);
                for (i = 0; i < length; i++) this.createParticle()
            }
        }, Emitter.prototype.update = function(time) {
            this.age += time, (this.age >= this.life || this.dead) && this.destroy(), this.emitting(time), this.integrate(time);
            var particle, k;
            for (k = this.particles.length - 1; k >= 0; k--)(particle = this.particles[k]).dead && (Proton.pool.set(particle), this.particles.splice(k, 1), this.dispatchEvent(new Proton.Event({
                type: Proton.PARTICLE_DEAD,
                particle: particle
            })))
        }, Emitter.prototype.setupParticle = function(particle, initialize, behaviour) {
            var initializes = this.initializes,
                behaviours = this.behaviours;
            initialize && (initializes = initialize instanceof Array ? initialize : [initialize]), behaviour && (behaviours = behaviour instanceof Array ? behaviour : [behaviour]), Proton.InitializeUtil.initialize(this, particle, initializes), particle.addBehaviours(behaviours), particle.parent = this, this.particles.push(particle)
        }, Emitter.prototype.destroy = function() {
            this.dead = !0, this.emitTotalTimes = -1, 0 == this.particles.length && (this.removeInitializers(), this.removeAllBehaviours(), this.parent && this.parent.removeEmitter(this))
        }, Proton.Emitter = Emitter, Proton.Util.inherits(BehaviourEmitter, Proton.Emitter), BehaviourEmitter.prototype.addSelfBehaviour = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.selfBehaviours.push(arguments[i])
        }, BehaviourEmitter.prototype.removeSelfBehaviour = function(behaviour) {
            var index = this.selfBehaviours.indexOf(behaviour);
            index > -1 && this.selfBehaviours.splice(index, 1)
        }, BehaviourEmitter.prototype.update = function(time) {
            if (BehaviourEmitter._super_.prototype.update.call(this, time), !this.sleep) {
                var i, length = this.selfBehaviours.length;
                for (i = 0; i < length; i++) this.selfBehaviours[i].applyBehaviour(this, time, i)
            }
        }, Proton.BehaviourEmitter = BehaviourEmitter, Proton.Util.inherits(FollowEmitter, Proton.Emitter), FollowEmitter.prototype.initEventHandler = function() {
            var self = this;
            this.mousemoveHandler = function(e) {
                self.mousemove.call(self, e)
            }, this.mousedownHandler = function(e) {
                self.mousedown.call(self, e)
            }, this.mouseupHandler = function(e) {
                self.mouseup.call(self, e)
            }, this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, !1)
        }, FollowEmitter.prototype.emit = function() {
            this._allowEmitting = !0
        }, FollowEmitter.prototype.stopEmit = function() {
            this._allowEmitting = !1
        }, FollowEmitter.prototype.mousemove = function(e) {
            e.layerX || 0 == e.layerX ? (this.p.x += (e.layerX - this.p.x) * this.ease, this.p.y += (e.layerY - this.p.y) * this.ease) : (e.offsetX || 0 == e.offsetX) && (this.p.x += (e.offsetX - this.p.x) * this.ease, this.p.y += (e.offsetY - this.p.y) * this.ease), this._allowEmitting && FollowEmitter._super_.prototype.emit.call(this, "once")
        }, FollowEmitter.prototype.destroy = function() {
            FollowEmitter._super_.prototype.destroy.call(this), this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, !1)
        }, Proton.FollowEmitter = FollowEmitter;
        var ease = ease || {
            easeLinear: function(value) {
                return value
            },
            easeInQuad: function(value) {
                return Math.pow(value, 2)
            },
            easeOutQuad: function(value) {
                return -(Math.pow(value - 1, 2) - 1)
            },
            easeInOutQuad: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 2) : -.5 * ((value -= 2) * value - 2)
            },
            easeInCubic: function(value) {
                return Math.pow(value, 3)
            },
            easeOutCubic: function(value) {
                return Math.pow(value - 1, 3) + 1
            },
            easeInOutCubic: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 3) : .5 * (Math.pow(value - 2, 3) + 2)
            },
            easeInQuart: function(value) {
                return Math.pow(value, 4)
            },
            easeOutQuart: function(value) {
                return -(Math.pow(value - 1, 4) - 1)
            },
            easeInOutQuart: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 4) : -.5 * ((value -= 2) * Math.pow(value, 3) - 2)
            },
            easeInSine: function(value) {
                return 1 - Math.cos(value * (Math.PI / 2))
            },
            easeOutSine: function(value) {
                return Math.sin(value * (Math.PI / 2))
            },
            easeInOutSine: function(value) {
                return -.5 * (Math.cos(Math.PI * value) - 1)
            },
            easeInExpo: function(value) {
                return 0 === value ? 0 : Math.pow(2, 10 * (value - 1))
            },
            easeOutExpo: function(value) {
                return 1 === value ? 1 : 1 - Math.pow(2, -10 * value)
            },
            easeInOutExpo: function(value) {
                return 0 === value ? 0 : 1 === value ? 1 : (value /= .5) < 1 ? .5 * Math.pow(2, 10 * (value - 1)) : .5 * (2 - Math.pow(2, -10 * --value))
            },
            easeInCirc: function(value) {
                return -(Math.sqrt(1 - value * value) - 1)
            },
            easeOutCirc: function(value) {
                return Math.sqrt(1 - Math.pow(value - 1, 2))
            },
            easeInOutCirc: function(value) {
                return (value /= .5) < 1 ? -.5 * (Math.sqrt(1 - value * value) - 1) : .5 * (Math.sqrt(1 - (value -= 2) * value) + 1)
            },
            easeInBack: function(value) {
                var s = 1.70158;
                return value * value * ((s + 1) * value - s)
            },
            easeOutBack: function(value) {
                var s = 1.70158;
                return (value -= 1) * value * ((s + 1) * value + s) + 1
            },
            easeInOutBack: function(value) {
                var s = 1.70158;
                return (value /= .5) < 1 ? value * value * ((1 + (s *= 1.525)) * value - s) * .5 : .5 * ((value -= 2) * value * ((1 + (s *= 1.525)) * value + s) + 2)
            },
            setEasingByName: function(name) {
                switch (name) {
                    case "easeLinear":
                        return Proton.ease.easeLinear;
                    case "easeInQuad":
                        return Proton.ease.easeInQuad;
                    case "easeOutQuad":
                        return Proton.ease.easeOutQuad;
                    case "easeInOutQuad":
                        return Proton.ease.easeInOutQuad;
                    case "easeInCubic":
                        return Proton.ease.easeInCubic;
                    case "easeOutCubic":
                        return Proton.ease.easeOutCubic;
                    case "easeInOutCubic":
                        return Proton.ease.easeInOutCubic;
                    case "easeInQuart":
                        return Proton.ease.easeInQuart;
                    case "easeOutQuart":
                        return Proton.ease.easeOutQuart;
                    case "easeInOutQuart":
                        return Proton.ease.easeInOutQuart;
                    case "easeInSine":
                        return Proton.ease.easeInSine;
                    case "easeOutSine":
                        return Proton.ease.easeOutSine;
                    case "easeInOutSine":
                        return Proton.ease.easeInOutSine;
                    case "easeInExpo":
                        return Proton.ease.easeInExpo;
                    case "easeOutExpo":
                        return Proton.ease.easeOutExpo;
                    case "easeInOutExpo":
                        return Proton.ease.easeInOutExpo;
                    case "easeInCirc":
                        return Proton.ease.easeInCirc;
                    case "easeOutCirc":
                        return Proton.ease.easeOutCirc;
                    case "easeInOutCirc":
                        return Proton.ease.easeInOutCirc;
                    case "easeInBack":
                        return Proton.ease.easeInBack;
                    case "easeOutBack":
                        return Proton.ease.easeOutBack;
                    case "easeInOutBack":
                        return Proton.ease.easeInOutBack;
                    default:
                        return Proton.ease.easeLinear
                }
            }
        };
        Proton.ease = ease, Proton.easeLinear = "easeLinear", Proton.easeInQuad = "easeInQuad", Proton.easeOutQuad = "easeOutQuad", Proton.easeInOutQuad = "easeInOutQuad", Proton.easeInCubic = "easeInCubic", Proton.easeOutCubic = "easeOutCubic", Proton.easeInOutCubic = "easeInOutCubic", Proton.easeInQuart = "easeInQuart", Proton.easeOutQuart = "easeOutQuart", Proton.easeInOutQuart = "easeInOutQuart", Proton.easeInSine = "easeInSine", Proton.easeOutSine = "easeOutSine", Proton.easeInOutSine = "easeInOutSine", Proton.easeInExpo = "easeInExpo", Proton.easeOutExpo = "easeOutExpo", Proton.easeInOutExpo = "easeInOutExpo", Proton.easeInCirc = "easeInCirc", Proton.easeOutCirc = "easeOutCirc", Proton.easeInOutCirc = "easeInOutCirc", Proton.easeInBack = "easeInBack", Proton.easeOutBack = "easeOutBack", Proton.easeInOutBack = "easeInOutBack", Renderer.prototype = {
            start: function() {
                this.addEventHandler(), this.renderer.start()
            },
            stop: function() {
                this.renderer.stop()
            },
            resize: function(width, height) {
                this.renderer.resize(width, height)
            },
            setStroke: function(color, thinkness) {
                this.renderer.hasOwnProperty("stroke") ? this.renderer.setStroke(color, thinkness) : alert("Sorry this renderer do not suppest stroke method!")
            },
            createImageData: function(data) {
                this.renderer instanceof Proton.PixelRender && this.renderer.createImageData(data)
            },
            setMaxRadius: function(radius) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.setMaxRadius(radius)
            },
            blendEquation: function(A) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.blendEquation(A)
            },
            blendFunc: function(A, B) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.blendFunc(A, B)
            },
            setType: function(type) {
                this.type = type, this.renderer = this.getRenderer()
            },
            getRenderer: function() {
                switch (this.type) {
                    case "dom":
                        return new Proton.DomRender(this.proton, this.element);
                    case "canvas":
                        return new Proton.CanvasRender(this.proton, this.element);
                    case "webgl":
                        return new Proton.WebGLRender(this.proton, this.element);
                    case "easel":
                    case "easeljs":
                        return new Proton.EaselRender(this.proton, this.element);
                    case "pixel":
                        return new Proton.PixelRender(this.proton, this.element);
                    default:
                        return new Proton.BaseRender(this.proton, this.element)
                }
            },
            render: function(callback) {
                this.renderer.render(callback)
            },
            addEventHandler: function() {
                this.onProtonUpdate && (this.renderer.onProtonUpdate = this.onProtonUpdate), this.onParticleCreated && (this.renderer.onParticleCreated = this.onParticleCreated), this.onParticleUpdate && (this.renderer.onParticleUpdate = this.onParticleUpdate), this.onParticleDead && (this.renderer.onParticleDead = this.onParticleDead)
            }
        }, Proton.Renderer = Renderer, BaseRender.prototype = {
            start: function() {
                var self = this;
                this.proton.addEventListener(Proton.PROTON_UPDATE, function(e) {
                    self.onProtonUpdate.call(self)
                }), this.proton.addEventListener(Proton.PROTON_UPDATE_AFTER, function(e) {
                    self.onProtonUpdateAfter.call(self)
                }), this.proton.addEventListener(Proton.EMITTER_ADDED, function(e) {
                    self.onEmitterAdded.call(self, e.emitter)
                }), this.proton.addEventListener(Proton.EMITTER_REMOVED, function(e) {
                    self.onEmitterRemoved.call(self, e.emitter)
                });
                var i, length = this.proton.emitters.length;
                for (i = 0; i < length; i++) {
                    var emitter = this.proton.emitters[i];
                    this.addEmitterListener(emitter)
                }
            },
            resize: function(width, height) {},
            addEmitterListener: function(emitter) {
                var self = this;
                emitter.addEventListener(Proton.PARTICLE_CREATED, function(e) {
                    self.onParticleCreated.call(self, e.particle)
                }), emitter.addEventListener(Proton.PARTICLE_UPDATE, function(e) {
                    self.onParticleUpdate.call(self, e.particle)
                }), emitter.addEventListener(Proton.PARTICLE_DEAD, function(e) {
                    self.onParticleDead.call(self, e.particle)
                })
            },
            stop: function() {
                var i, length = this.proton.emitters.length;
                for (this.proton.removeAllEventListeners(), i = 0; i < length; i++) {
                    this.proton.emitters[i].removeAllEventListeners()
                }
            },
            onEmitterAdded: function(emitter) {
                this.addEmitterListener(emitter)
            },
            onEmitterRemoved: function(emitter) {
                emitter.removeAllEventListeners()
            },
            onProtonUpdate: function() {},
            onProtonUpdateAfter: function() {},
            onParticleCreated: function(particle) {},
            onParticleUpdate: function(particle) {},
            onParticleDead: function(particle) {}
        }, Proton.BaseRender = BaseRender, Proton.Util.inherits(DomRender, Proton.BaseRender), DomRender.prototype.start = function() {
            DomRender._super_.prototype.start.call(this)
        }, DomRender.prototype.setStroke = function(color, thinkness) {
            color = Proton.Util.initValue(color, "#000000"), thinkness = Proton.Util.initValue(thinkness, 1), this.stroke = {
                color: color,
                thinkness: thinkness
            }
        }, DomRender.prototype.onProtonUpdate = function() {}, DomRender.prototype.onParticleCreated = function(particle) {
            if (particle.target) {
                var self = this;
                Proton.Util.getImage(particle.target, particle, !1, function(particle) {
                    self.setImgInDIV.call(self, particle)
                })
            } else particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + "_canvas", particle.radius + 1, particle.radius + 1, "absolute"), particle.transform.bakOldRadius = particle.radius, this.stroke ? (particle.transform.canvas.width = 2 * particle.radius + 2 * this.stroke.thinkness, particle.transform.canvas.height = 2 * particle.radius + 2 * this.stroke.thinkness) : (particle.transform.canvas.width = 2 * particle.radius + 1, particle.transform.canvas.height = 2 * particle.radius + 1), particle.transform.context = particle.transform.canvas.getContext("2d"), particle.transform.context.fillStyle = particle.color, particle.transform.context.beginPath(), particle.transform.context.arc(particle.radius, particle.radius, particle.radius, 0, 2 * Math.PI, !0), this.stroke && (particle.transform.context.strokeStyle = this.stroke.color, particle.transform.context.lineWidth = this.stroke.thinkness, particle.transform.context.stroke()), particle.transform.context.closePath(), particle.transform.context.fill(), this.element.appendChild(particle.transform.canvas)
        }, DomRender.prototype.onParticleUpdate = function(particle) {
            particle.target ? particle.target instanceof Image && (particle.transform.canvas.style.opacity = particle.alpha, Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.target.width / 2, particle.p.y - particle.target.height / 2, particle.scale, particle.rotation)) : (particle.transform.canvas.style.opacity = particle.alpha, particle.transform.oldRadius ? Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.oldRadius, particle.p.y - particle.transform.oldRadius, particle.scale, particle.rotation) : Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.bakOldRadius, particle.p.y - particle.transform.bakOldRadius, particle.scale, particle.rotation))
        }, DomRender.prototype.onParticleDead = function(particle) {
            particle.transform.canvas && this.element.removeChild(particle.transform.canvas)
        }, DomRender.prototype.setImgInDIV = function(particle) {
            particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + "_canvas", particle.target.width + 1, particle.target.height + 1, "absolute", particle.p.x - particle.radius, particle.p.y - particle.radius), particle.transform.context = particle.transform.canvas.getContext("2d"), particle.transform.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height), this.element.appendChild(particle.transform.canvas)
        }, Proton.DomRender = DomRender, Proton.Util.inherits(EaselRender, Proton.BaseRender), EaselRender.prototype.resize = function(width, height) {}, EaselRender.prototype.start = function() {
            EaselRender._super_.prototype.start.call(this)
        }, EaselRender.prototype.onProtonUpdate = function() {}, EaselRender.prototype.onParticleCreated = function(particle) {
            if (particle.target) particle.target = particle.target.clone(!0), particle.target.parent || (particle.target.image && (particle.target.regX = particle.target.image.width / 2, particle.target.regY = particle.target.image.height / 2), particle.target.visible = !0, this.element.addChild(particle.target));
            else {
                var graphics = new createjs.Graphics;
                this.stroke && (1 == this.stroke ? graphics.beginStroke("#000000") : this.stroke instanceof String && graphics.beginStroke(this.stroke)), graphics.beginFill(particle.color).drawCircle(0, 0, particle.radius);
                var shape = new createjs.Shape(graphics);
                particle.target = shape, this.element.addChild(particle.target)
            }
        }, EaselRender.prototype.onParticleUpdate = function(particle) {
            particle.target && (particle.target.x = particle.p.x, particle.target.y = particle.p.y, particle.target.alpha = particle.alpha, particle.target.scaleX = particle.target.scaleY = particle.scale, particle.target.rotation = particle.rotation)
        }, EaselRender.prototype.onParticleDead = function(particle) {
            particle.target && particle.target.parent && particle.target.parent.removeChild(particle.target)
        }, Proton.EaselRender = EaselRender, Proton.Util.inherits(CanvasRender, Proton.BaseRender), CanvasRender.prototype.resize = function(width, height) {
            this.element.width = width, this.element.height = height
        }, CanvasRender.prototype.start = function() {
            CanvasRender._super_.prototype.start.call(this)
        }, CanvasRender.prototype.setStroke = function(color, thinkness) {
            color = Proton.Util.initValue(color, "#000000"), thinkness = Proton.Util.initValue(thinkness, 1), this.stroke = {
                color: color,
                thinkness: thinkness
            }
        }, CanvasRender.prototype.onProtonUpdate = function() {
            this.context.clearRect(0, 0, this.element.width, this.element.height)
        }, CanvasRender.prototype.onParticleCreated = function(particle) {
            particle.target ? Proton.Util.getImage(particle.target, particle, !1) : particle.color = particle.color ? particle.color : "#ff0000"
        }, CanvasRender.prototype.onParticleUpdate = function(particle) {
            if (particle.target) {
                if (particle.target instanceof Image) {
                    var w = particle.target.width * particle.scale | 0,
                        h = particle.target.height * particle.scale | 0,
                        x = particle.p.x - w / 2,
                        y = particle.p.y - h / 2;
                    if (particle.color) {
                        particle.transform.buffer || (particle.transform.buffer = this.getBuffer(particle.target));
                        var bufferContext = particle.transform.buffer.getContext("2d");
                        bufferContext.clearRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height), bufferContext.globalAlpha = particle.alpha, bufferContext.drawImage(particle.target, 0, 0), bufferContext.globalCompositeOperation = "source-atop", bufferContext.fillStyle = Proton.Util.rgbToHex(particle.transform.rgb), bufferContext.fillRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height), bufferContext.globalCompositeOperation = "source-over", bufferContext.globalAlpha = 1, this.context.drawImage(particle.transform.buffer, 0, 0, particle.transform.buffer.width, particle.transform.buffer.height, x, y, w, h)
                    } else this.context.save(), this.context.globalAlpha = particle.alpha, this.context.translate(particle.p.x, particle.p.y), this.context.rotate(Proton.MathUtils.degreeTransform(particle.rotation)), this.context.translate(-particle.p.x, -particle.p.y), this.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height, x, y, w, h), this.context.globalAlpha = 1, this.context.restore()
                }
            } else particle.transform.rgb ? this.context.fillStyle = "rgba(" + particle.transform.rgb.r + "," + particle.transform.rgb.g + "," + particle.transform.rgb.b + "," + particle.alpha + ")" : this.context.fillStyle = particle.color, this.context.beginPath(), this.context.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI, !0), this.stroke && (this.context.strokeStyle = this.stroke.color, this.context.lineWidth = this.stroke.thinkness, this.context.stroke()), this.context.closePath(), this.context.fill()
        }, CanvasRender.prototype.onParticleDead = function(particle) {}, CanvasRender.prototype.getBuffer = function(image) {
            if (image instanceof Image) {
                var size = image.width + "_" + image.height,
                    canvas = this.bufferCache[size];
                return canvas || ((canvas = document.createElement("canvas")).width = image.width, canvas.height = image.height, this.bufferCache[size] = canvas), canvas
            }
        }, Proton.CanvasRender = CanvasRender, Proton.Util.inherits(PixelRender, Proton.BaseRender), PixelRender.prototype.resize = function(width, height) {
            this.element.width = width, this.element.height = height
        }, PixelRender.prototype.createImageData = function(rectangle) {
            this.rectangle = rectangle || new Proton.Rectangle(0, 0, this.element.width, this.element.height), this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height), this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
        }, PixelRender.prototype.start = function() {
            PixelRender._super_.prototype.start.call(this)
        }, PixelRender.prototype.onProtonUpdate = function() {
            this.context.clearRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height), this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height)
        }, PixelRender.prototype.onProtonUpdateAfter = function() {
            this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
        }, PixelRender.prototype.onParticleCreated = function(particle) {}, PixelRender.prototype.onParticleUpdate = function(particle) {
            this.imageData && this.setPixel(this.imageData, Math.floor(particle.p.x - this.rectangle.x), Math.floor(particle.p.y - this.rectangle.y), particle)
        }, PixelRender.prototype.setPixel = function(imagedata, x, y, particle) {
            var rgb = particle.transform.rgb;
            if (!(x < 0 || x > this.element.width || y < 0 || y > this.elementwidth)) {
                var i = 4 * ((y >> 0) * imagedata.width + (x >> 0));
                imagedata.data[i] = rgb.r, imagedata.data[i + 1] = rgb.g, imagedata.data[i + 2] = rgb.b, imagedata.data[i + 3] = 255 * particle.alpha
            }
        }, PixelRender.prototype.onParticleDead = function(particle) {}, Proton.PixelRender = PixelRender, Proton.Util.inherits(WebGLRender, Proton.BaseRender), WebGLRender.prototype.resize = function(width, height) {
            this.umat[4] = -2, this.umat[7] = 1, this.smat[0] = 1 / width, this.smat[4] = 1 / height, this.mstack.set(this.umat, 0), this.mstack.set(this.smat, 1), this.gl.viewport(0, 0, width, height), this.element.width = width, this.element.height = height
        }, WebGLRender.prototype.setMaxRadius = function(radius) {
            this.circleCanvasURL = this.createCircle(radius)
        }, WebGLRender.prototype.getVertexShader = function() {
            return ["uniform vec2 viewport;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 tMat;", "varying vec2 vTextureCoord;", "varying float alpha;", "void main() {", "vec3 v = tMat * vec3(aVertexPosition, 1.0);", "gl_Position = vec4(v.x, v.y, 0, 1);", "vTextureCoord = aTextureCoord;", "alpha = tMat[0][2];", "}"].join("\n")
        }, WebGLRender.prototype.getFragmentShader = function() {
            return ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float alpha;", "uniform sampler2D uSampler;", "uniform vec4 color;", "uniform bool useTexture;", "uniform vec3 uColor;", "void main() {", "vec4 textureColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor = textureColor * vec4(uColor, 1.0);", "gl_FragColor.w *= alpha;", "}"].join("\n")
        }, WebGLRender.prototype.initVar = function() {
            this.mstack = new Proton.MStack, this.umat = Proton.Mat3.create([2, 0, 1, 0, -2, 0, -1, 1, 1]), this.smat = Proton.Mat3.create([.01, 0, 1, 0, .01, 0, 0, 0, 1]), this.texturebuffers = {}
        }, WebGLRender.prototype.start = function() {
            WebGLRender._super_.prototype.start.call(this), this.resize(this.element.width, this.element.height)
        }, WebGLRender.prototype.blendEquation = function(A) {
            this.gl.blendEquation(this.gl[A])
        }, WebGLRender.prototype.blendFunc = function(A, B) {
            this.gl.blendFunc(this.gl[A], this.gl[B])
        }, WebGLRender.prototype.getShader = function(gl, str, fs) {
            var shader;
            return shader = fs ? gl.createShader(gl.FRAGMENT_SHADER) : gl.createShader(gl.VERTEX_SHADER), gl.shaderSource(shader, str), gl.compileShader(shader), gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : (alert(gl.getShaderInfoLog(shader)), null)
        }, WebGLRender.prototype.initShaders = function() {
            var fragmentShader = this.getShader(this.gl, this.getFragmentShader(), !0),
                vertexShader = this.getShader(this.gl, this.getVertexShader(), !1);
            this.sprogram = this.gl.createProgram(), this.gl.attachShader(this.sprogram, vertexShader), this.gl.attachShader(this.sprogram, fragmentShader), this.gl.linkProgram(this.sprogram), this.gl.getProgramParameter(this.sprogram, this.gl.LINK_STATUS) || alert("Could not initialise shaders"), this.gl.useProgram(this.sprogram), this.sprogram.vpa = this.gl.getAttribLocation(this.sprogram, "aVertexPosition"), this.sprogram.tca = this.gl.getAttribLocation(this.sprogram, "aTextureCoord"), this.gl.enableVertexAttribArray(this.sprogram.tca), this.gl.enableVertexAttribArray(this.sprogram.vpa), this.sprogram.tMatUniform = this.gl.getUniformLocation(this.sprogram, "tMat"), this.sprogram.samplerUniform = this.gl.getUniformLocation(this.sprogram, "uSampler"), this.sprogram.useTex = this.gl.getUniformLocation(this.sprogram, "useTexture"), this.sprogram.color = this.gl.getUniformLocation(this.sprogram, "uColor"), this.gl.uniform1i(this.sprogram.useTex, 1)
        }, WebGLRender.prototype.initBuffers = function() {
            this.unitIBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 3, 1, 0, 2, 3]), this.gl.STATIC_DRAW);
            for (var ids = [], i = 0; i < 100; i++) ids.push(i);
            for (idx = new Uint16Array(ids), this.unitI33 = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitI33), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW), ids = [], i = 0; i < 100; i++) ids.push(i, i + 1, i + 2);
            idx = new Uint16Array(ids), this.stripBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW)
        }, WebGLRender.prototype.createCircle = function(raidus) {
            this.circleCanvasRadius = Proton.WebGLUtil.nhpot(Proton.Util.initValue(raidus, 32));
            var canvas = Proton.DomUtil.createCanvas("circle_canvas", 2 * this.circleCanvasRadius, 2 * this.circleCanvasRadius),
                context = canvas.getContext("2d");
            return context.beginPath(), context.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, 2 * Math.PI, !0), context.closePath(), context.fillStyle = "#FFF", context.fill(), canvas.toDataURL()
        }, WebGLRender.prototype.setImgInCanvas = function(particle) {
            var _w = particle.target.width,
                _h = particle.target.height,
                _width = Proton.WebGLUtil.nhpot(particle.target.width),
                _height = Proton.WebGLUtil.nhpot(particle.target.height),
                _scaleX = particle.target.width / _width,
                _scaleY = particle.target.height / _height;
            this.texturebuffers[particle.transform.src] || (this.texturebuffers[particle.transform.src] = [this.gl.createTexture(), this.gl.createBuffer(), this.gl.createBuffer()]), particle.transform.texture = this.texturebuffers[particle.transform.src][0], particle.transform.vcBuffer = this.texturebuffers[particle.transform.src][1], particle.transform.tcBuffer = this.texturebuffers[particle.transform.src][2], this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.tcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, _scaleX, 0, 0, _scaleY, _scaleY, _scaleY]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.vcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, _w, 0, 0, _h, _w, _h]), this.gl.STATIC_DRAW);
            var data = particle.transform.canvas.getContext("2d").getImageData(0, 0, _width, _height);
            this.gl.bindTexture(this.gl.TEXTURE_2D, particle.transform.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST), this.gl.generateMipmap(this.gl.TEXTURE_2D), particle.transform.textureLoaded = !0, particle.transform.textureWidth = _w, particle.transform.textureHeight = _h
        }, WebGLRender.prototype.setStroke = function(color, thinkness) {}, WebGLRender.prototype.onProtonUpdate = function() {}, WebGLRender.prototype.onParticleCreated = function(particle) {
            var self = this;
            particle.transform.textureLoaded = !1, particle.transform.tmat = Proton.Mat3.create(), particle.transform.tmat[8] = 1, particle.transform.imat = Proton.Mat3.create(), particle.transform.imat[8] = 1, particle.target ? Proton.Util.getImage(particle.target, particle, !0, function(particle) {
                self.setImgInCanvas.call(self, particle), particle.transform.oldScale = 1
            }) : Proton.Util.getImage(this.circleCanvasURL, particle, !0, function(particle) {
                self.setImgInCanvas.call(self, particle), particle.transform.oldScale = particle.radius / self.circleCanvasRadius
            })
        }, WebGLRender.prototype.onParticleUpdate = function(particle) {
            particle.transform.textureLoaded && (this.updateMatrix(particle), this.gl.uniform3f(this.sprogram.color, particle.transform.rgb.r / 255, particle.transform.rgb.g / 255, particle.transform.rgb.b / 255), this.gl.uniformMatrix3fv(this.sprogram.tMatUniform, !1, this.mstack.top()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.vcBuffer), this.gl.vertexAttribPointer(this.sprogram.vpa, 2, this.gl.FLOAT, !1, 0, 0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.tcBuffer), this.gl.vertexAttribPointer(this.sprogram.tca, 2, this.gl.FLOAT, !1, 0, 0), this.gl.bindTexture(this.gl.TEXTURE_2D, particle.transform.texture), this.gl.uniform1i(this.sprogram.samplerUniform, 0), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0), this.mstack.pop())
        }, WebGLRender.prototype.onParticleDead = function(particle) {}, WebGLRender.prototype.updateMatrix = function(particle) {
            var moveOriginMatrix = Proton.WebGLUtil.makeTranslation(-particle.transform.textureWidth / 2, -particle.transform.textureHeight / 2),
                translationMatrix = Proton.WebGLUtil.makeTranslation(particle.p.x, particle.p.y),
                angel = particle.rotation * (Math.PI / 180),
                rotationMatrix = Proton.WebGLUtil.makeRotation(angel),
                scale = particle.scale * particle.transform.oldScale,
                scaleMatrix = Proton.WebGLUtil.makeScale(scale, scale),
                matrix = Proton.WebGLUtil.matrixMultiply(moveOriginMatrix, scaleMatrix);
            matrix = Proton.WebGLUtil.matrixMultiply(matrix, rotationMatrix), matrix = Proton.WebGLUtil.matrixMultiply(matrix, translationMatrix), Proton.Mat3.inverse(matrix, particle.transform.imat), matrix[2] = particle.alpha, this.mstack.push(matrix)
        }, Proton.WebGLRender = WebGLRender, Zone.prototype = {
            getPosition: function() {},
            crossing: function(particle) {}
        }, Proton.Zone = Zone, Proton.Util.inherits(LineZone, Proton.Zone), LineZone.prototype.getPosition = function() {
            return this.random = Math.random(), this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient), this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient), this.vector
        }, LineZone.prototype.getDirection = function(x, y) {
            var A = this.dy,
                B = -this.dx;
            return (A * x + B * y + this.dot) * (0 == B ? 1 : B) > 0
        }, LineZone.prototype.getDistance = function(x, y) {
            return (this.dy * x + -this.dx * y + this.dot) / Math.sqrt(this.xxyy)
        }, LineZone.prototype.getSymmetric = function(v) {
            var tha2 = v.getGradient(),
                tha = 2 * (this.getGradient() - tha2),
                oldx = v.x,
                oldy = v.y;
            return v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha), v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha), v
        }, LineZone.prototype.getGradient = function() {
            return Math.atan2(this.dy, this.dx)
        }, LineZone.prototype.getRange = function(particle, fun) {
            Math.abs(this.getGradient()) <= Math.PI / 4 ? particle.p.x < this.maxx && particle.p.x > this.minx && fun() : particle.p.y < this.maxy && particle.p.y > this.miny && fun()
        }, LineZone.prototype.getLength = function() {
            return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
        }, LineZone.prototype.crossing = function(particle) {
            var self = this;
            "dead" == this.crossType ? ">" == this.direction || "R" == this.direction || "right" == this.direction || "down" == this.direction ? this.getRange(particle, function() {
                self.getDirection(particle.p.x, particle.p.y) && (particle.dead = !0)
            }) : this.getRange(particle, function() {
                self.getDirection(particle.p.x, particle.p.y) || (particle.dead = !0)
            }) : "bound" == this.crossType ? this.getRange(particle, function() {
                self.getDistance(particle.p.x, particle.p.y) <= particle.radius && (0 == self.dx ? particle.v.x *= -1 : 0 == self.dy ? particle.v.y *= -1 : self.getSymmetric(particle.v))
            }) : "cross" == this.crossType && this.alert && (alert("Sorry lineZone does not support cross method"), this.alert = !1)
        }, Proton.LineZone = LineZone, Proton.Util.inherits(CircleZone, Proton.Zone), CircleZone.prototype.getPosition = function() {
            return this.random = Math.random(), this.angle = 2 * Math.PI * Math.random(), this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle), this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle), this.vector
        }, CircleZone.prototype.setCenter = function(x, y) {
            this.center.x = x, this.center.y = y
        }, CircleZone.prototype.crossing = function(particle) {
            var d = particle.p.distanceTo(this.center);
            "dead" == this.crossType ? d - particle.radius > this.radius && (particle.dead = !0) : "bound" == this.crossType ? d + particle.radius >= this.radius && this.getSymmetric(particle) : "cross" == this.crossType && this.alert && (alert("Sorry CircleZone does not support cross method"), this.alert = !1)
        }, CircleZone.prototype.getSymmetric = function(particle) {
            var tha2 = particle.v.getGradient(),
                tha = 2 * (this.getGradient(particle) - tha2),
                oldx = particle.v.x,
                oldy = particle.v.y;
            particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha), particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha)
        }, CircleZone.prototype.getGradient = function(particle) {
            return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x)
        }, Proton.CircleZone = CircleZone, Proton.Util.inherits(PointZone, Proton.Zone), PointZone.prototype.getPosition = function() {
            return this.vector.x = this.x, this.vector.y = this.y, this.vector
        }, PointZone.prototype.crossing = function(particle) {
            this.alert && (alert("Sorry PointZone does not support crossing method"), this.alert = !1)
        }, Proton.PointZone = PointZone, Proton.Util.inherits(RectZone, Proton.Zone), RectZone.prototype.getPosition = function() {
            return this.vector.x = this.x + Math.random() * this.width, this.vector.y = this.y + Math.random() * this.height, this.vector
        }, RectZone.prototype.crossing = function(particle) {
            "dead" == this.crossType ? (particle.p.x + particle.radius < this.x ? particle.dead = !0 : particle.p.x - particle.radius > this.x + this.width && (particle.dead = !0), particle.p.y + particle.radius < this.y ? particle.dead = !0 : particle.p.y - particle.radius > this.y + this.height && (particle.dead = !0)) : "bound" == this.crossType ? (particle.p.x - particle.radius < this.x ? (particle.p.x = this.x + particle.radius, particle.v.x *= -1) : particle.p.x + particle.radius > this.x + this.width && (particle.p.x = this.x + this.width - particle.radius, particle.v.x *= -1), particle.p.y - particle.radius < this.y ? (particle.p.y = this.y + particle.radius, particle.v.y *= -1) : particle.p.y + particle.radius > this.y + this.height && (particle.p.y = this.y + this.height - particle.radius, particle.v.y *= -1)) : "cross" == this.crossType && (particle.p.x + particle.radius < this.x && particle.v.x <= 0 ? particle.p.x = this.x + this.width + particle.radius : particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0 && (particle.p.x = this.x - particle.radius), particle.p.y + particle.radius < this.y && particle.v.y <= 0 ? particle.p.y = this.y + this.height + particle.radius : particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0 && (particle.p.y = this.y - particle.radius))
        }, Proton.RectZone = RectZone, Proton.Util.inherits(ImageZone, Proton.Zone), ImageZone.prototype.reset = function(imageData, x, y, d) {
            this.imageData = imageData, this.x = Proton.Util.initValue(x, 0), this.y = Proton.Util.initValue(y, 0), this.d = Proton.Util.initValue(d, 2), this.vectors = [], this.setVectors()
        }, ImageZone.prototype.setVectors = function() {
            var i, j, length1 = this.imageData.width,
                length2 = this.imageData.height;
            for (i = 0; i < length1; i += this.d)
                for (j = 0; j < length2; j += this.d) {
                    var index = 4 * ((j >> 0) * length1 + (i >> 0));
                    this.imageData.data[index + 3] > 0 && this.vectors.push({
                        x: i + this.x,
                        y: j + this.y
                    })
                }
            return this.vector
        }, ImageZone.prototype.getBound = function(x, y) {
            var index = 4 * ((y >> 0) * this.imageData.width + (x >> 0));
            return this.imageData.data[index + 3] > 0
        }, ImageZone.prototype.getPosition = function() {
            return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)])
        }, ImageZone.prototype.getColor = function(x, y) {
            x -= this.x;
            var i = 4 * (((y -= this.y) >> 0) * this.imageData.width + (x >> 0));
            return {
                r: this.imageData.data[i],
                g: this.imageData.data[i + 1],
                b: this.imageData.data[i + 2],
                a: this.imageData.data[i + 3]
            }
        }, ImageZone.prototype.crossing = function(particle) {
            "dead" == this.crossType ? this.getBound(particle.p.x - this.x, particle.p.y - this.y) ? particle.dead = !0 : particle.dead = !1 : "bound" == this.crossType && (this.getBound(particle.p.x - this.x, particle.p.y - this.y) || particle.v.negate())
        }, Proton.ImageZone = ImageZone;
        var log = function() {
            if (window.console && window.console.log) {
                var arg = arguments;
                if ("string" == typeof arguments[0])
                    if (0 == arguments[0].indexOf("+")) {
                        var n = parseInt(arguments[0]);
                        log.once < n && (delete arg[0], console.log(arg), log.once++)
                    } else console.log(arg);
                else console.log(arg)
            }
        };
        log.once = 0, Proton.log = log;
        var Debug = Debug || {
            addEventListener: function(proton, fun) {
                proton.addEventListener(Proton.PROTON_UPDATE, function(e) {
                    fun()
                })
            },
            setStyle: function(c) {
                var color = c || "#ff0000",
                    rgb = Proton.Util.hexToRGB(color);
                return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)"
            },
            drawZone: function(proton, canvas, zone, clear) {
                var context = canvas.getContext("2d"),
                    style = this.setStyle();
                this.addEventListener(proton, function() {
                    clear && context.clearRect(0, 0, canvas.width, canvas.height), zone instanceof Proton.PointZone ? (context.beginPath(), context.fillStyle = style, context.arc(zone.x, zone.y, 10, 0, 2 * Math.PI, !0), context.fill(), context.closePath()) : zone instanceof Proton.LineZone ? (context.beginPath(), context.strokeStyle = style, context.moveTo(zone.x1, zone.y1), context.lineTo(zone.x2, zone.y2), context.stroke(), context.closePath()) : zone instanceof Proton.RectZone ? (context.beginPath(), context.strokeStyle = style, context.drawRect(zone.x, zone.y, zone.width, zone.height), context.stroke(), context.closePath()) : zone instanceof Proton.CircleZone && (context.beginPath(), context.strokeStyle = style, context.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI, !0), context.stroke(), context.closePath())
                })
            },
            drawEmitter: function(proton, canvas, emitter, clear) {
                var context = canvas.getContext("2d"),
                    style = this.setStyle();
                this.addEventListener(proton, function() {
                    clear && context.clearRect(0, 0, canvas.width, canvas.height), context.beginPath(), context.fillStyle = style, context.arc(emitter.p.x, emitter.p.y, 10, 0, 2 * Math.PI, !0), context.fill(), context.closePath()
                })
            },
            test: {},
            setTest: function(id, value) {
                this.test[id] = value
            },
            getTest: function(id) {
                return !!this.test.hasOwnProperty(id) && this.test[id]
            }
        };
        Proton.Debug = Debug
    }(window),
    function() {
        for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(callback, element) {
            var currTime = (new Date).getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = window.setTimeout(function() {
                    callback(currTime + timeToCall)
                }, timeToCall);
            return lastTime = currTime + timeToCall, id
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
            clearTimeout(id)
        })
    }(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, e, i, s) {
            var r, n, a, o, l = function() {
                    t.call(this, "throwProps"), this._overwriteProps.length = 0
                },
                h = 999999999999999,
                u = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                },
                p = function(t, e, i, s) {
                    if ("auto" === t.end) return t;
                    i = isNaN(i) ? h : i, s = isNaN(s) ? -h : s;
                    var r = "function" == typeof t.end ? t.end(e) : t.end instanceof Array ? function(t, e, i, s) {
                        for (var r, n, a = e.length, o = 0, l = h; --a > -1;) r = e[a], 0 > (n = r - t) && (n = -n), l > n && r >= s && i >= r && (o = a, l = n);
                        return e[o]
                    }(e, t.end, i, s) : Number(t.end);
                    return r > i ? r = i : s > r && (r = s), {
                        max: r,
                        min: r
                    }
                },
                c = l.calculateChange = function(t, s, r, n) {
                    null == n && (n = .05);
                    return r * n * t / (s instanceof i ? s : s ? new i(s) : e.defaultEase).getRatio(n)
                },
                f = l.calculateDuration = function(t, s, r, n, a) {
                    a = a || .05;
                    var o = n instanceof i ? n : n ? new i(n) : e.defaultEase;
                    return Math.abs((s - t) * o.getRatio(a) / r / a)
                },
                d = l.calculateTweenDuration = function(t, r, n, a, o) {
                    if ("string" == typeof t && (t = e.selector(t)), !t) return 0;
                    null == n && (n = 10), null == a && (a = .2), null == o && (o = 1), t.length && (t = t[0] || t);
                    var h, u, _, d, m, g, v, y, w, x, T = 0,
                        b = 9999999999,
                        P = r.throwProps || r,
                        k = r.ease instanceof i ? r.ease : r.ease ? new i(r.ease) : e.defaultEase,
                        S = isNaN(P.checkpoint) ? .05 : Number(P.checkpoint),
                        C = isNaN(P.resistance) ? l.defaultResistance : Number(P.resistance);
                    for (h in P) "resistance" !== h && "checkpoint" !== h && ("object" != typeof(u = P[h]) && ((w = w || s.getByTarget(t)) && w.isTrackingProp(h) ? u = "number" == typeof u ? {
                        velocity: u
                    } : {
                        velocity: w.getVelocity(h)
                    } : (d = Number(u) || 0, _ = d * C > 0 ? d / C : d / -C)), "object" == typeof u && (void 0 !== u.velocity && "number" == typeof u.velocity ? d = Number(u.velocity) || 0 : (w = w || s.getByTarget(t), d = w && w.isTrackingProp(h) ? w.getVelocity(h) : 0), m = isNaN(u.resistance) ? C : Number(u.resistance), _ = d * m > 0 ? d / m : d / -m, g = "function" == typeof t[h] ? t[h.indexOf("set") || "function" != typeof t["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : t[h] || 0, v = g + c(d, k, _, S), void 0 !== u.end && (u = p(u, v, u.max, u.min)), void 0 !== u.max && v > Number(u.max) ? (x = u.unitFactor || 1, y = g > u.max && u.min !== u.max || d * x > -15 && 45 > d * x ? a + .1 * (n - a) : f(g, u.max, d, k, S), b > y + o && (b = y + o)) : void 0 !== u.min && Number(u.min) > v && (x = u.unitFactor || 1, y = u.min > g && u.min !== u.max || d * x > -45 && 15 > d * x ? a + .1 * (n - a) : f(g, u.min, d, k, S), b > y + o && (b = y + o)), y > T && (T = y)), _ > T && (T = _));
                    return T > b && (T = b), T > n ? n : a > T ? a : T
                },
                m = l.prototype = new t("throwProps");
            return m.constructor = l, l.version = "0.9.0", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.track = function(t, e, i) {
                return s.track(t, e, i)
            }, l.untrack = function(t, e) {
                s.untrack(t, e)
            }, l.isTracking = function(t, e) {
                return s.isTracking(t, e)
            }, l.getVelocity = function(t, e) {
                var i = s.getByTarget(t);
                return i ? i.getVelocity(e) : NaN
            }, l._cssRegister = function() {
                var t = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        a = e._setPluginRatio,
                        o = e.CSSPropTween;
                    e._registerComplexSpecialProp("throwProps", {
                        parser: function(t, e, h, _, p, c) {
                            c = new l;
                            var d, m, g, v, y = {},
                                w = {},
                                x = {},
                                T = {},
                                b = {};
                            n = {};
                            for (m in e) "resistance" !== m && ("object" == typeof(d = e[m]) ? (void 0 !== d.velocity && "number" == typeof d.velocity ? y[m] = Number(d.velocity) || 0 : (v = v || s.getByTarget(t), y[m] = v && v.isTrackingProp(m) ? v.getVelocity(m) : 0), void 0 !== d.end && (T[m] = d.end), void 0 !== d.min && (w[m] = d.min), void 0 !== d.max && (x[m] = d.max), void 0 !== d.resistance && (!0, b[m] = d.resistance)) : "number" == typeof d ? y[m] = d : (v = v || s.getByTarget(t), y[m] = v && v.isTrackingProp(m) ? v.getVelocity(m) : d || 0), u[m] && _._enableTransforms(2 === u[m]));
                            g = i(t, y, _, p, c), r = g.proxy, y = g.end;
                            for (m in r) n[m] = {
                                velocity: y[m],
                                min: w[m],
                                max: x[m],
                                end: T[m],
                                resistance: b[m]
                            };
                            return null != e.resistance && (n.resistance = e.resistance), p = new o(t, "throwProps", 0, 0, g.pt, 2), p.plugin = c, p.setRatio = a, p.data = g, c._onInitTween(r, n, _._tween), p
                        }
                    })
                }
            }, l.to = function(t, i, s, l, h) {
                i.throwProps || (i = {
                    throwProps: i
                });
                var u = new e(t, 1, i);
                return u.render(0, !0, !0), u.vars.css ? (u.duration(d(r, {
                    throwProps: n,
                    ease: i.ease
                }, s, l, h)), u._delay && !u.vars.immediateRender ? u.invalidate() : a._onInitTween(r, o, u), u) : (u.kill(), new e(t, d(t, i, s, l, h), i))
            }, m._onInitTween = function(t, e, i) {
                this.target = t, this._props = [], a = this, o = e;
                var r, n, l, h, u, _, f, d, m, g = i._ease,
                    v = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
                    y = i._duration,
                    w = 0;
                for (r in e)
                    if ("resistance" !== r && "checkpoint" !== r) {
                        if ("number" == typeof(n = e[r])) u = Number(n) || 0;
                        else if ("object" != typeof n || isNaN(n.velocity)) {
                            if (!(m = m || s.getByTarget(t)) || !m.isTrackingProp(r)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + r;
                            u = m.getVelocity(r)
                        } else u = Number(n.velocity);
                        _ = c(u, g, y, v), d = 0, l = (h = "function" == typeof t[r]) ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : t[r], "object" == typeof n && (f = l + _, void 0 !== n.end && (n = p(n, f, n.max, n.min)), void 0 !== n.max && f > Number(n.max) ? d = n.max - l - _ : void 0 !== n.min && Number(n.min) > f && (d = n.min - l - _)), this._props[w++] = {
                            p: r,
                            s: l,
                            c1: _,
                            c2: d,
                            f: h,
                            r: !1
                        }, this._overwriteProps[w] = r
                    }
                return !0
            }, m._kill = function(e) {
                for (var i = this._props.length; --i > -1;) null != e[this._props[i].p] && this._props.splice(i, 1);
                return t.prototype._kill.call(this, e)
            }, m._roundProps = function(t, e) {
                for (var i = this._props, s = i.length; --s > -1;)(t[i[s]] || t.throwProps) && (i[s].r = e)
            }, m.setRatio = function(t) {
                for (var e, i, s = this._props.length; --s > -1;) e = this._props[s], i = e.s + e.c1 * t + e.c2 * t * t, e.r && (i = 0 | i + (i > 0 ? .5 : -.5)), e.f ? this.target[e.p](i) : this.target[e.p] = i
            }, t.activate([l]), l
        }, !0), window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
            var e, i, s, n = /([A-Z])/g,
                a = {},
                o = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                },
                l = document.defaultView ? document.defaultView.getComputedStyle : function() {},
                h = function(t, e, i) {
                    var s = (t._gsTransform || a)[e];
                    return s || 0 === s ? s : (t.style[e] ? s = t.style[e] : (i = i || l(t, null)) ? (t = i.getPropertyValue(e.replace(n, "-$1").toLowerCase()), s = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, s = i[e]), parseFloat(s) || 0)
                },
                u = t.ticker,
                _ = function(t, e, i) {
                    this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this)
                },
                p = function() {
                    var t, i, n = e,
                        a = u.time;
                    if (a - s >= .03)
                        for (s, s = a; n;) {
                            for (i = n._firstVP; i;)((t = i.css ? h(n.target, i.p) : i.f ? n.target[i.p]() : n.target[i.p]) !== i.v1 || a - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = a), i = i._next;
                            n = n._next
                        }
                },
                c = function(t) {
                    this._lookup = {}, this.target = t, this.elem = !(!t.style || !t.nodeType), i || (u.addEventListener("tick", p, null, !1, -100), s = u.time, i = !0), e && (this._next = e, e._prev = this), e = this
                },
                f = c.getByTarget = function(t) {
                    for (var i = e; i;) {
                        if (i.target === t) return i;
                        i = i._next
                    }
                },
                d = c.prototype;
            return d.addProp = function(e, i) {
                if (!this._lookup[e]) {
                    var s = this.target,
                        r = "function" == typeof s[e],
                        n = r ? this._altProp(e) : e,
                        a = this._firstVP;
                    this._firstVP = this._lookup[e] = this._lookup[n] = a = new _(n !== e && 0 === e.indexOf("set") ? n : e, r, a), a.css = this.elem && (void 0 !== this.target.style[a.p] || o[a.p]), a.css && o[a.p] && !s._gsTransform && t.set(s, {
                        x: "+=0"
                    }), a.type = i || a.css && 0 === e.indexOf("rotation") ? "deg" : "", a.v1 = a.v2 = a.css ? h(s, a.p) : r ? s[a.p]() : s[a.p]
                }
            }, d.removeProp = function(t) {
                var e = this._lookup[t];
                e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0))
            }, d.isTrackingProp = function(t) {
                return this._lookup[t] instanceof _
            }, d.getVelocity = function(t) {
                var e, i, s, r = this._lookup[t],
                    n = this.target;
                if (!r) throw "The velocity of " + t + " is not being tracked.";
                return e = r.css ? h(n, r.p) : r.f ? n[r.p]() : n[r.p], i = e - r.v2, ("rad" === r.type || "deg" === r.type) && (s = "rad" === r.type ? 2 * Math.PI : 360, (i %= s) !== i % (s / 2) && (i = 0 > i ? i + s : i - s)), i / (u.time - r.t2)
            }, d._altProp = function(t) {
                var e = t.substr(0, 3),
                    i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
                return "function" == typeof this.target[i] ? i : t
            }, c.getByTarget = function(t) {
                for (var i = e; i;) {
                    if (i.target === t) return i;
                    i = i._next
                }
            }, c.track = function(t, e, i) {
                var s = f(t),
                    r = e.split(","),
                    n = r.length;
                for (i = (i || "").split(","), s || (s = new c(t)); --n > -1;) s.addProp(r[n], i[n] || i[0]);
                return s
            }, c.untrack = function(t, i) {
                var s = f(t),
                    r = (i || "").split(","),
                    n = r.length;
                if (s) {
                    for (; --n > -1;) s.removeProp(r[n]);
                    s._firstVP && i || (s._prev ? s._prev._next = s._next : s === e && (e = s._next), s._next && (s._next._prev = s._prev))
                }
            }, c.isTracking = function(t, e) {
                var i = f(t);
                return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e))
            }, c
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()();
var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.17.0", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next
                    }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === n) && v !== t && (i = !0, v > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && l >= .5) && (l = 1 - l), 3 === _ && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === _ ? 1 - l : 2 === _ ? l : .5 > this._time / g ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), p !== this._time || i || d !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
                    } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, c) {
                    a = a || 0;
                    var f, p, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(c || n.callbackScope || this, u || _)
                        };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && ((t = s(t)).reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        p = {};
                        for (d in n) p[d] = n[d];
                        p.delay = g, m === f && l && (p.onComplete = y), v[m] = new r(t[m], e, p), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    c = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = c(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, c, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in f)
                                for (l = f[_].target.parentNode; l;) l === t && (n = n.concat(f[_].tweens)), l = l.parentNode;
                            for (c = n.length, u = 0; c > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, s, r) {
                    i = !1 !== i, s = !1 !== s;
                    for (var n, a, o = c(r = !1 !== r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = a.pauseCallback = function(t, e, i, s) {
                        var n, a = t._timeline,
                            o = a._totalTime,
                            h = t._startTime,
                            l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                            _ = l ? 0 : r,
                            c = l ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = c, n = n._prev;
                            for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                            e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && c.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && c.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && c.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                    var u, c = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        callbackScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = m(t)), 0 > (n = n || 0) && ((t = m(t)).reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = f(r.startAt)), c.to(t[u], e, f(r), u * n);
                    return this.add(c, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var l, _, u, c, f, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(c = r[u]) && (c = new s({
                                tweens: c
                            })), this.add(c, l), "string" != typeof c && "function" != typeof c && ("sequence" === a ? l = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
                    return n.data = "isPause", this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        p = this._timeScale,
                        m = this._paused;
                    if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== c && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (f === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), r = (s = i.getTweensOf(t)).length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), (i = r._startTime + r._totalDuration / r._timeScale) > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    h = new i(null, null, 1, 0),
                    l = s.prototype = new t;
                return l.constructor = s, l.kill()._gc = !1, s.version = "1.17.0", l.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, l.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, l.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, l.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, l.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, l.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, l.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, h, l, _, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._startTime,
                        g = this._timeScale,
                        v = this._rawPrevTime,
                        y = this._paused,
                        T = this._cycle;
                    if (t >= c) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > v || v === r) && v !== t && this._first && (_ = !0, v > r && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === f && v !== r && (v > 0 || 0 > t && v >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, l = "onReverseComplete") : v >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else 0 === f && 0 > v && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== T && !this._locked) {
                        var x = this._yoyo && 0 != (1 & T),
                            w = x === (this._yoyo && 0 != (1 & this._cycle)),
                            b = this._totalTime,
                            P = this._cycle,
                            k = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = T * f, T > this._cycle ? x = !x : this._totalTime += f, this._time = p, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = T, this._locked = !0, p = x ? 0 : f, this.render(p, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (p = x ? f + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                        this._time = S, this._totalTime = b, this._cycle = P, this._rawPrevTime = k
                    }
                    if (this._time !== p && this._first || i || _) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= p)
                            for (s = this._first; s && (h = s._next, !this._paused || y);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                        else
                            for (s = this._last; s && (h = s._prev, !this._paused || y);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (d === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, l.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++)(r = a[s]).isActive() && (n[o++] = r);
                    return n
                }, l.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, l.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, l.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, l.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, l.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, l.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, l.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    h = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            c = (l + _) / 2,
                            f = (c - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, r, n, a, o) {
                        var l, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; w > l; l++) f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[l], T = i[l], x = .25 * (T + y) * r / (a ? .5 : s[l] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        (f = t[b]).b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, h, l, _, u, c, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(c = t[h][s]) && "=" === c.charAt(1) && (t[h][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
                        if (0 > (o = t.length - 2)) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][s], 0, 0, t[h + 1][s]), f
                    },
                    u = function(t, n, a, h, u, c) {
                        var f, p, m, d, g, v, y, T, x = {},
                            w = [],
                            b = c || t[0];
                        u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!h) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) p = w[f], m = x[p], l(m, n, a, h, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    c = function(t, e, i) {
                        var s, r, n, o, h, l, _, u, c, f, p, m = {},
                            d = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (l = v.length; --l > -1;) {
                            for (m[c = v[l]] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, h = c.b - n, s = r = 0, _ = 1; i >= _; _++) l = p * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    p = function(t, e) {
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = (e = e >> 0 || 6) - 1,
                            u = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, c[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (l = c - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), f[n] ? p[n](h) : p[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, x, w, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = !0 === b[r][4] ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](h) : p[n] = h)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new m;
                                var l, _, u, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    d = {};
                                if (0 > f) return o;
                                for (l = 0; f >= l; l++) u = i(t, c[l], a, o, h, f !== l), p[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x && [
                                    ["x", "y", "rotation", l, !1]
                                ]), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    N = document,
                    E = function(t) {
                        return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    },
                    L = E("div"),
                    X = E("img"),
                    B = a._internals = {
                        _specialProps: h
                    },
                    Y = navigator.userAgent,
                    j = function() {
                        var t = Y.indexOf("Android"),
                            e = E("a");
                        return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), p = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), f = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    U = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        var i, s, r = (e = e || L).style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = A.test(i),
                            u = t,
                            c = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || N.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                c[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && !1 !== a.cacheWidths && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = o / s * 100), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (r = e[i]).indexOf("-transform") || Pe === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || be === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
                        return j || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Se && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new fe(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, h;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) != a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(t, e, i) {
                        return 0 | 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    le = a.parseColor = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                    },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(_e) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)
                                for (; _ > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, _ > c--)
                                for (; _ > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    ce = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    fe = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT; o;) e = a[o.v], o.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if ((i = o.t).type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pe = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            c = {},
                            f = {},
                            p = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (l = new fe(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], c[o] = s[h], n || (l = new fe(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, c) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
                    }),
                    me = function(t, e, i, s, r, n) {
                        var a = new pe(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    de = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
                        i = i || n || "", a = new pe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, c, f, p, m, v, y, T, x, w, b, k, S = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            O = S.length,
                            A = !1 !== _;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = h, a.setRatio = l, u = 0; O > u; u++)
                            if (p = S[u], m = R[u], (T = parseFloat(p)) || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === p.charAt(0) || oe[p] || P.test(p))) k = "," === m.charAt(m.length - 1) ? ")," : ")", p = le(p), m = le(m), (x = p.length + m.length > 6) && !j && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (j || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : k, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, k, !1)));
                        else if (v = p.match(d)) {
                            if (!(y = m.match(g)) || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++) k += a["xs" + u] + a.data["xn" + u];
                            a.e = k + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ge = 9;
                for ((l = pe.prototype).l = l.pr = 0; --ge > 0;) l["xn" + ge] = 0, l["xs" + ge] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ve = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    ye = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, new ve(n[s], e)
                    },
                    Te = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ye(t, {
                                parser: function(t, i, s, r, n, a, l) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                (l = ve.prototype).parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, c = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : c && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return de(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, l.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    ye(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = c || f;
                var xe, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    be = W("transform"),
                    Pe = V + "transform",
                    ke = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    Re = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Se) && (a.defaultForce3D || "auto")
                    },
                    Oe = window.SVGElement,
                    Ae = function(t, e, i) {
                        var s, r = N.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Ce = N.documentElement,
                    De = function() {
                        var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
                        return N.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[ke] = "50% 50%", e.style[be] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Se), Ce.removeChild(t)), s
                    }(),
                    Me = function(t, e, i, s, r) {
                        var n, o, h, l, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform,
                            x = Fe(t, !0);
                        T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = l = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = l * (p / g) + _ * (-f / g) + (f * d - p * m) / g, h = l * (-c / g) + _ * (u / g) - (u * d - c * m) / g, l = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = h), T && (r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (o = l - v, h = _ - y, T.xOffset += o * x[0] + h * x[2] - o, T.yOffset += o * x[1] + h * x[3] - h) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    ze = function(t) {
                        return !!(Oe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Fe = function(t, e) {
                        var i, s, r, n, a, o = t._gsTransform || new Re;
                        if (be ? s = Q(t, Pe, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && ze(t)) && (i && -1 !== (t.style[be] + "").indexOf("matrix") && (s = t.style[be], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ge = r.length; --ge > -1;) n = Number(r[ge]), r[ge] = (a = n - (n |= 0)) ? (0 | 1e5 * a + (0 > a ? -.5 : .5)) / 1e5 + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ne = B.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var o, h, l, _, u, c, f = s ? t._gsTransform || new Re : new Re,
                            p = 0 > f.scaleX,
                            d = 1e5,
                            g = Se ? parseFloat(Q(t, ke, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !ze(t)), f.svg && (Me(t, Q(t, ke, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), xe = a.useSVGTransformAttr || De), (o = Fe(t)) !== Ie) {
                            if (16 === o.length) {
                                var y, T, x, w, b, P = o[0],
                                    k = o[1],
                                    S = o[2],
                                    R = o[3],
                                    O = o[4],
                                    A = o[5],
                                    C = o[6],
                                    D = o[7],
                                    M = o[8],
                                    z = o[9],
                                    F = o[10],
                                    N = o[12],
                                    E = o[13],
                                    L = o[14],
                                    X = o[11],
                                    B = Math.atan2(C, F);
                                f.zOrigin && (L = -f.zOrigin, N = M * L - o[12], E = z * L - o[13], L = F * L + f.zOrigin - o[14]), f.rotationX = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + F * b, M = O * -b + M * w, z = A * -b + z * w, F = C * -b + F * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, F), f.rotationY = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - F * b, z = k * b + z * w, F = S * b + F * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + F * F) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = N, f.y = E, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Se && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var Y = o.length >= 6,
                                    j = Y ? o[0] : 1,
                                    U = o[1] || 0,
                                    q = o[2] || 0,
                                    V = Y ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(j * j + U * U), _ = Math.sqrt(V * V + q * q), u = j || U ? Math.atan2(U, j) * I : f.rotation || 0, c = q || V ? Math.atan2(q, V) * I + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (l *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = l, f.scaleY = _, f.rotation = u, f.skewX = c, Se && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                            }
                            f.zOrigin = g;
                            for (h in f) 2e-5 > f[h] && f[h] > -2e-5 && (f[h] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (xe && t.style[be] ? e.delayedCall(.001, function() {
                            Be(t.style, be)
                        }) : !xe && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Ee = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = h, h = -l, l = -i, e = c.filter, u.filter = "";
                            var f, p, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * h), b += p - (f * l + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * h) + w) + ", Dy=" + (p - (f * l + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, k, S, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), ge = 0; 4 > ge; ge++) k = ee[ge], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ge ? -s.ieOffsetX : -s.ieOffsetY : 2 > ge ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ge || 2 === ge ? 1 : R))) + "px"
                            }
                        }
                    },
                    Le = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data,
                            S = this.t.style,
                            R = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            C = k.scaleX,
                            D = k.scaleY,
                            M = k.scaleZ,
                            I = k.x,
                            F = k.y,
                            N = k.z,
                            E = k.svg,
                            L = k.perspective,
                            X = k.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || N || L || A || O) || xe && E || !Se) R || k.skewX || E ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, xe && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), I += .01 * k.xPercent * m.width, F += .01 * k.yPercent * m.height), (m = 1e-6) > I && I > -m && (I = 0), m > F && F > -m && (F = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", E && xe ? this.t.setAttribute("transform", "matrix(" + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + I + "," + F + ")";
                        else {
                            if (f && ((m = 1e-4) > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;
                            else {
                                if (!(A || O || 1 !== M || L || E)) return void(S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + F + "px," + N + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                                e = n = 1, i = r = 0
                            }
                            l = 1, s = a = o = h = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", (R = A * z) && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, l = d, c *= d, e *= d, r *= d), (R = O * z) && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, h = l * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, l *= M, c *= M), 1 !== D && (i *= D, n *= D, h *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || E) && (p && (I += s * -p, F += a * -p, N += l * -p + p), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > I && I > -m && (I = w), m > F && F > -m && (F = w), m > N && N > -m && (N = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > h && h > -m ? w : h) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > l && l > -m ? w : l) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += I + x + F + x + N + x + (L ? 1 + -N / L : 1) + ")", S[be] = T
                        }
                    };
                (l = Re.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, c, f, p, m, d, g, v = t._gsTransform,
                            y = s._transform = Ne(t, r, !0, h.parseTransform),
                            T = t.style,
                            w = we.length,
                            b = h,
                            P = {},
                            k = "transformOrigin";
                        if ("string" == typeof b.transform && be) u = L.style, u[be] = b.transform, u.display = "block", u.position = "absolute", N.body.appendChild(L), l = Ne(L, null, !1), N.body.removeChild(L), null != b.xPercent && (l.xPercent = ne(b.xPercent, y.xPercent)), null != b.yPercent && (l.yPercent = ne(b.yPercent, y.yPercent));
                        else if ("object" == typeof b) {
                            if (l = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, y.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, y.scaleY),
                                    scaleZ: ne(b.scaleZ, y.scaleZ),
                                    x: ne(b.x, y.x),
                                    y: ne(b.y, y.y),
                                    z: ne(b.z, y.z),
                                    xPercent: ne(b.xPercent, y.xPercent),
                                    yPercent: ne(b.yPercent, y.yPercent),
                                    perspective: ne(b.transformPerspective, y.perspective)
                                }, null != (m = b.directionalRotation))
                                if ("object" == typeof m)
                                    for (u in m) b[u] = m[u];
                                else b.rotation = m;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (l.x = 0, l.xPercent = ne(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (l.y = 0, l.yPercent = ne(b.y, y.yPercent)), l.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", P), Se && (l.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), l.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), l.skewX = null == b.skewX ? y.skewX : ae(b.skewX, y.skewX), l.skewY = null == b.skewY ? y.skewY : ae(b.skewY, y.skewY), (_ = l.skewY - y.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (Se && null != b.force3D && (y.force3D = b.force3D, p = !0), y.skewType = b.skewType || y.skewType || a.defaultSkewType, (f = y.force3D || y.z || y.rotationX || y.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == b.scale || (l.scaleZ = 1); --w > -1;) i = we[w], ((c = l[i] - y[i]) > 1e-6 || -1e-6 > c || null != b[i] || null != F[i]) && (p = !0, n = new pe(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return c = b.transformOrigin, y.svg && (c || b.svgOrigin) && (d = y.xOffset, g = y.yOffset, Me(t, se(c), l, b.svgOrigin, b.smoothOrigin), n = me(y, "xOrigin", (v ? y : l).xOrigin, l.xOrigin, n, k), n = me(y, "yOrigin", (v ? y : l).yOrigin, l.yOrigin, n, k), (d !== y.xOffset || g !== y.yOffset) && (n = me(y, "xOffset", v ? d : y.xOffset, y.xOffset, n, k), n = me(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, k)), c = xe ? null : "0px 0px"), (c || Se && f && y.zOrigin) && (be ? (p = !0, i = ke, c = (c || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Se ? (u = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === u || "0px" !== c[2]) ? parseFloat(c[2]) : u) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new pe(y, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : se(c + "", y)), p && (s._transformType = y.svg && xe || !f && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), ye("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ye("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), -1 !== (u = _ = Q(t, b[h], r, !1, "0px")).indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), (y = "=" === c.charAt(1)) ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = T / m * 100 + "%", _ = x / d * 100 + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, l = parseFloat(_) + p + g)), a = de(P, b[h], u + " " + _, c + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ye("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, c, f = "background-position",
                            p = r || Z(t, null),
                            d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, "")) && "none" !== c) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", c), l = 2; --l > -1;) d = o[l], (_ = -1 !== d.indexOf("%")) !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), ye("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), ye("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ye("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ye("transformStyle", {
                    prefix: !0
                }), ye("backfaceVisibility", {
                    prefix: !0
                }), ye("userSelect", {
                    prefix: !0
                }), ye("margin", {
                    parser: ce("marginTop,marginRight,marginBottom,marginLeft")
                }), ye("padding", {
                    parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ye("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), ye("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ye("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), ye("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
                    }
                }), ye("borderWidth", {
                    parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ye("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Xe = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
                };
                ye("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), j ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Xe), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Be = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ye = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Be(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ye("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, c, f, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = J(t, _, K(t), h, c), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)
                    }
                });
                var je = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? ke : h[i].p), Be(a, i);
                        r && (Be(a, be), (n = this.t._gsTransform) && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (ye("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = je, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ge = l.length; ge--;) Te(l[ge]);
                (l = a.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var l, f, m, d, g, v, y, T, x, b = t.style;
                    if (u && "" === b.zIndex && ("auto" === (l = Q(t, "zIndex", r)) || "" === l) && this._addLazySet(b, "zIndex", 0), "string" == typeof e && (d = b.cssText, l = K(t, r), b.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !j && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = d), this._firstPT = f = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, be ? c && (u = !0, "" === b.zIndex && ("auto" === (y = Q(t, "zIndex", r)) || "" === y) && this._addLazySet(b, "zIndex", 0), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = be ? Le : Ee, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, l.parse = function(t, e, i, n) {
                    var a, o, l, u, c, f, p, m, d, g, v = t.style;
                    for (a in e) f = e[a], (o = h[a]) ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = le(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = de(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (l = parseFloat(c), p = l || 0 === l ? c.substr((l + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (l = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (l = H(t, a, r), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), (g = d && "=" === f.charAt(1)) ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + l : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, p), "%" === m ? (l /= $(t, a, 100, "%") / 100, !0 !== e.strictUnits && (c = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || l || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, l, u - l, i, 0, a, !1 !== _ && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = de(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, s, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && xe || !t && 3 !== this._transformType ? 2 : 3
                };
                var Ue = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ue, s.data = this
                }, l._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var qe = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) qe(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qe(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, h = e.to(t, i, s),
                        l = [h],
                        _ = [],
                        u = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = h._targets || h.target, qe(t, _, c), h.render(i, !0, !0), qe(t, u), h.render(0, !0, !0), h._enabled(!0), r = c.length; --r > -1;)
                        if ((n = J(c[r], _[r], u[r])).firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            l.push(e.fromTo(c[r], i, o, n))
                        }
                    return l
                }, t.activate([a]), a
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    priority: -1,
                    API: 2,
                    init: function(t, e, i) {
                        return this._tween = i, !0
                    }
                }).prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, s) {
                        var r, n, a, o, h;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (r in s) this._start[r] = this._proxy[r] = n = i.getAttribute(r) + "", this._end[r] = a = s[r] + "", this._suffix[r] = o = e.test(a) ? a.replace(t, "") : e.test(n) ? n.replace(t, "") : "", o && -1 !== (h = a.indexOf(o)) && (a = a.substr(0, h)), this._addTween(this._proxy, r, parseFloat(n), a, r) || (this._suffix[r] = ""), "=" === a.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + o), this._overwriteProps.push(r);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, n = r === this._proxy; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + (n ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (-1 !== (s = o.join("_")).indexOf("short") && (a %= h) != a % (h / 2) && (a = 0 > a ? a + h : a - h), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    p = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    for (var i, s, r, n, a, o, h = (e = e || {}).taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = !1 !== e.randomize, m = !0 === e.clamp, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return 1 - Math.cos(t * o)
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                m = function(s, r, n, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, c, f, d = r.length, g = d; --d > -1;)(_ = p[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), c = u.pop(), f = h(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : "TweenMax" === s && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = l._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for ((n = T.prototype)._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, r = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1;) n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
            x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (n = b.prototype).addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;)(n = l[h]).c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (r = (s = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = S(),
                    f = !1 !== e && P,
                    p = 500,
                    m = 33,
                    g = function(t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || !0 === t) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), !0 !== t && (r = s(g)), a && l.dispatchEvent("tick")
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() {
                    g(!0)
                }, l.lagSmoothing = function(t, e) {
                    p = t || 1 / _, m = Math.min(e, p, 0)
                }, l.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, l === a && (o = !1))
                }, l.wake = function() {
                    null !== r ? l.sleep() : l.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === a && (o = !0), g(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, void l.wake()) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), f = t, void l.fps(i)) : f
                }, l.fps(t), setTimeout(function() {
                    f && 5 > l.frame && l.useRAF(!1)
                }, 1500)
            }), (n = l.Ticker.prototype = new l.events.EventDispatcher).constructor = l.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, U) {
                    o || a.wake();
                    var i = this.vars.useFrames ? j : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new l.Ticker, (n = O.prototype)._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var A = function() {
                o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (n = C.prototype = new O).constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)(n = a[r]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === h && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = D.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === h && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (n = D.prototype = new O).constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.17.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                F = {},
                N = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: I
                },
                E = D._plugins = {},
                L = N.tweenLookup = {},
                X = 0,
                B = N.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                j = O._rootFramesTimeline = new C,
                U = O._rootTimeline = new C,
                q = 30,
                V = N.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            U._startTime = a.time, j._startTime = a.frame, U._active = j._active = !0, setTimeout(V, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                    q = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in L) {
                        for (t = (e = L[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if ((!(i = U._first) || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var G = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens
                },
                W = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), (a = D.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
                },
                Z = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Q(e, 0, p), 0 === Q(o, l, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !W(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                Q = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return (n /= r) > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== n.lazy, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in n) B[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== n.lazy, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : x[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && E.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, s = {};
                    for (i in t) B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                }(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], B[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (E[n] && (h = new E[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !W(this, i, e, u)) return !1
                        }
                        for (n in l)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = G(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var $ = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype
            }, !0);
            if (n = $.prototype, $.version = "1.10.1", $.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - Number(i) : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, $.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === $.API && (E[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            $.call(this, i, s), this._overwriteProps = r || []
                        }, !0 === t.global),
                        o = a.prototype = new $(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, $.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function() {
        function n(n) {
            return function(r, e, u, i) {
                e = d(e, i, 4);
                var o = !w(r) && m.keys(r),
                    a = (o || r).length,
                    c = n > 0 ? 0 : a - 1;
                return arguments.length < 3 && (u = r[o ? o[c] : c], c += n),
                    function(t, r, e, u, i, o) {
                        for (; i >= 0 && o > i; i += n) {
                            var a = u ? u[i] : i;
                            e = r(e, t[a], a, t)
                        }
                        return e
                    }(r, e, u, o, c, a)
            }
        }

        function t(n) {
            return function(t, r, e) {
                r = b(r, e);
                for (var u = null != t && t.length, i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                    if (r(t[i], i, t)) return i;
                return -1
            }
        }

        function r(n, t) {
            var r = S.length,
                e = n.constructor,
                u = m.isFunction(e) && e.prototype || o,
                i = "constructor";
            for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)(i = S[r]) in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
        }
        var e = this,
            u = e._,
            i = Array.prototype,
            o = Object.prototype,
            a = Function.prototype,
            c = i.push,
            l = i.slice,
            f = o.toString,
            s = o.hasOwnProperty,
            p = Array.isArray,
            h = Object.keys,
            v = a.bind,
            g = Object.create,
            y = function() {},
            m = function(n) {
                return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : e._ = m, m.VERSION = "1.8.2";
        var d = function(n, t, r) {
                if (void 0 === t) return n;
                switch (null == r ? 3 : r) {
                    case 1:
                        return function(r) {
                            return n.call(t, r)
                        };
                    case 2:
                        return function(r, e) {
                            return n.call(t, r, e)
                        };
                    case 3:
                        return function(r, e, u) {
                            return n.call(t, r, e, u)
                        };
                    case 4:
                        return function(r, e, u, i) {
                            return n.call(t, r, e, u, i)
                        }
                }
                return function() {
                    return n.apply(t, arguments)
                }
            },
            b = function(n, t, r) {
                return null == n ? m.identity : m.isFunction(n) ? d(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
            };
        m.iteratee = function(n, t) {
            return b(n, t, 1 / 0)
        };
        var x = function(n, t) {
                return function(r) {
                    var e = arguments.length;
                    if (2 > e || null == r) return r;
                    for (var u = 1; e > u; u++)
                        for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                            var l = o[c];
                            t && void 0 !== r[l] || (r[l] = i[l])
                        }
                    return r
                }
            },
            j = Math.pow(2, 53) - 1,
            w = function(n) {
                var t = n && n.length;
                return "number" == typeof t && t >= 0 && j >= t
            };
        m.each = m.forEach = function(n, t, r) {
            t = d(t, r);
            var e, u;
            if (w(n))
                for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
            else {
                var i = m.keys(n);
                for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
            }
            return n
        }, m.map = m.collect = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
                var a = e ? e[o] : o;
                i[o] = t(n[a], a, n)
            }
            return i
        }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
            var e;
            return void 0 !== (e = w(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r)) && -1 !== e ? n[e] : void 0
        }, m.filter = m.select = function(n, t, r) {
            var e = [];
            return t = b(t, r), m.each(n, function(n, r, u) {
                t(n, r, u) && e.push(n)
            }), e
        }, m.reject = function(n, t, r) {
            return m.filter(n, m.negate(b(t)), r)
        }, m.every = m.all = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (!t(n[o], o, n)) return !1
            }
            return !0
        }, m.some = m.any = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (t(n[o], o, n)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(n, t, r) {
            return w(n) || (n = m.values(n)), m.indexOf(n, t, "number" == typeof r && r) >= 0
        }, m.invoke = function(n, t) {
            var r = l.call(arguments, 2),
                e = m.isFunction(t);
            return m.map(n, function(n) {
                var u = e ? t : n[t];
                return null == u ? u : u.apply(n, r)
            })
        }, m.pluck = function(n, t) {
            return m.map(n, m.property(t))
        }, m.where = function(n, t) {
            return m.filter(n, m.matcher(t))
        }, m.findWhere = function(n, t) {
            return m.find(n, m.matcher(t))
        }, m.max = function(n, t, r) {
            var e, u, i = -1 / 0,
                o = -1 / 0;
            if (null == t && null != n)
                for (var a = 0, c = (n = w(n) ? n : m.values(n)).length; c > a; a++)(e = n[a]) > i && (i = e);
            else t = b(t, r), m.each(n, function(n, r, e) {
                ((u = t(n, r, e)) > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
            });
            return i
        }, m.min = function(n, t, r) {
            var e, u, i = 1 / 0,
                o = 1 / 0;
            if (null == t && null != n)
                for (var a = 0, c = (n = w(n) ? n : m.values(n)).length; c > a; a++) e = n[a], i > e && (i = e);
            else t = b(t, r), m.each(n, function(n, r, e) {
                u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
            });
            return i
        }, m.shuffle = function(n) {
            for (var t, r = w(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)(t = m.random(0, i)) !== i && (u[i] = u[t]), u[t] = r[i];
            return u
        }, m.sample = function(n, t, r) {
            return null == t || r ? (w(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
        }, m.sortBy = function(n, t, r) {
            return t = b(t, r), m.pluck(m.map(n, function(n, r, e) {
                return {
                    value: n,
                    index: r,
                    criteria: t(n, r, e)
                }
            }).sort(function(n, t) {
                var r = n.criteria,
                    e = t.criteria;
                if (r !== e) {
                    if (r > e || void 0 === r) return 1;
                    if (e > r || void 0 === e) return -1
                }
                return n.index - t.index
            }), "value")
        };
        var A = function(n) {
            return function(t, r, e) {
                var u = {};
                return r = b(r, e), m.each(t, function(e, i) {
                    var o = r(e, i, t);
                    n(u, e, o)
                }), u
            }
        };
        m.groupBy = A(function(n, t, r) {
            m.has(n, r) ? n[r].push(t) : n[r] = [t]
        }), m.indexBy = A(function(n, t, r) {
            n[r] = t
        }), m.countBy = A(function(n, t, r) {
            m.has(n, r) ? n[r]++ : n[r] = 1
        }), m.toArray = function(n) {
            return n ? m.isArray(n) ? l.call(n) : w(n) ? m.map(n, m.identity) : m.values(n) : []
        }, m.size = function(n) {
            return null == n ? 0 : w(n) ? n.length : m.keys(n).length
        }, m.partition = function(n, t, r) {
            t = b(t, r);
            var e = [],
                u = [];
            return m.each(n, function(n, r, i) {
                (t(n, r, i) ? e : u).push(n)
            }), [e, u]
        }, m.first = m.head = m.take = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
        }, m.initial = function(n, t, r) {
            return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
        }, m.last = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
        }, m.rest = m.tail = m.drop = function(n, t, r) {
            return l.call(n, null == t || r ? 1 : t)
        }, m.compact = function(n) {
            return m.filter(n, m.identity)
        };
        var k = function(n, t, r, e) {
            for (var u = [], i = 0, o = e || 0, a = n && n.length; a > o; o++) {
                var c = n[o];
                if (w(c) && (m.isArray(c) || m.isArguments(c))) {
                    t || (c = k(c, t, r));
                    var l = 0,
                        f = c.length;
                    for (u.length += f; f > l;) u[i++] = c[l++]
                } else r || (u[i++] = c)
            }
            return u
        };
        m.flatten = function(n, t) {
            return k(n, t, !1)
        }, m.without = function(n) {
            return m.difference(n, l.call(arguments, 1))
        }, m.uniq = m.unique = function(n, t, r, e) {
            if (null == n) return [];
            m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = b(r, e));
            for (var u = [], i = [], o = 0, a = n.length; a > o; o++) {
                var c = n[o],
                    l = r ? r(c, o, n) : c;
                t ? (o && i === l || u.push(c), i = l) : r ? m.contains(i, l) || (i.push(l), u.push(c)) : m.contains(u, c) || u.push(c)
            }
            return u
        }, m.union = function() {
            return m.uniq(k(arguments, !0, !0))
        }, m.intersection = function(n) {
            if (null == n) return [];
            for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
                var i = n[e];
                if (!m.contains(t, i)) {
                    for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                    o === r && t.push(i)
                }
            }
            return t
        }, m.difference = function(n) {
            var t = k(arguments, !0, !0, 1);
            return m.filter(n, function(n) {
                return !m.contains(t, n)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(n) {
            for (var t = n && m.max(n, "length").length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
            return r
        }, m.object = function(n, t) {
            for (var r = {}, e = 0, u = n && n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
            return r
        }, m.indexOf = function(n, t, r) {
            var e = 0,
                u = n && n.length;
            if ("number" == typeof r) e = 0 > r ? Math.max(0, u + r) : r;
            else if (r && u) return e = m.sortedIndex(n, t), n[e] === t ? e : -1;
            if (t != t) return m.findIndex(l.call(n, e), m.isNaN);
            for (; u > e; e++)
                if (n[e] === t) return e;
            return -1
        }, m.lastIndexOf = function(n, t, r) {
            var e = n ? n.length : 0;
            if ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)), t != t) return m.findLastIndex(l.call(n, 0, e), m.isNaN);
            for (; --e >= 0;)
                if (n[e] === t) return e;
            return -1
        }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
            for (var u = (r = b(r, e, 1))(t), i = 0, o = n.length; o > i;) {
                var a = Math.floor((i + o) / 2);
                r(n[a]) < u ? i = a + 1 : o = a
            }
            return i
        }, m.range = function(n, t, r) {
            arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1;
            for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
            return u
        };
        var O = function(n, t, r, e, u) {
            if (!(e instanceof t)) return n.apply(r, u);
            var i = function(n) {
                    if (!m.isObject(n)) return {};
                    if (g) return g(n);
                    y.prototype = n;
                    var t = new y;
                    return y.prototype = null, t
                }(n.prototype),
                o = n.apply(i, u);
            return m.isObject(o) ? o : i
        };
        m.bind = function(n, t) {
            if (v && n.bind === v) return v.apply(n, l.call(arguments, 1));
            if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
            var r = l.call(arguments, 2),
                e = function() {
                    return O(n, e, t, this, r.concat(l.call(arguments)))
                };
            return e
        }, m.partial = function(n) {
            var t = l.call(arguments, 1),
                r = function() {
                    for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
                    for (; e < arguments.length;) i.push(arguments[e++]);
                    return O(n, r, this, this, i)
                };
            return r
        }, m.bindAll = function(n) {
            var t, r, e = arguments.length;
            if (1 >= e) throw new Error("bindAll must be passed function names");
            for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
            return n
        }, m.memoize = function(n, t) {
            var r = function(e) {
                var u = r.cache,
                    i = "" + (t ? t.apply(this, arguments) : e);
                return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
            };
            return r.cache = {}, r
        }, m.delay = function(n, t) {
            var r = l.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, r)
            }, t)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
            var e, u, i, o = null,
                a = 0;
            r || (r = {});
            var c = function() {
                a = !1 === r.leading ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
            };
            return function() {
                var l = m.now();
                a || !1 !== r.leading || (a = l);
                var f = t - (l - a);
                return e = this, u = arguments, 0 >= f || f > t ? (o && (clearTimeout(o), o = null), a = l, i = n.apply(e, u), o || (e = u = null)) : o || !1 === r.trailing || (o = setTimeout(c, f)), i
            }
        }, m.debounce = function(n, t, r) {
            var e, u, i, o, a, c = function() {
                var l = m.now() - o;
                t > l && l >= 0 ? e = setTimeout(c, t - l) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
            };
            return function() {
                i = this, u = arguments, o = m.now();
                var l = r && !e;
                return e || (e = setTimeout(c, t)), l && (a = n.apply(i, u), i = u = null), a
            }
        }, m.wrap = function(n, t) {
            return m.partial(t, n)
        }, m.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        }, m.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
                return e
            }
        }, m.after = function(n, t) {
            return function() {
                return --n < 1 ? t.apply(this, arguments) : void 0
            }
        }, m.before = function(n, t) {
            var r;
            return function() {
                return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
            }
        }, m.once = m.partial(m.before, 2);
        var F = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            S = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        m.keys = function(n) {
            if (!m.isObject(n)) return [];
            if (h) return h(n);
            var t = [];
            for (var e in n) m.has(n, e) && t.push(e);
            return F && r(n, t), t
        }, m.allKeys = function(n) {
            if (!m.isObject(n)) return [];
            var t = [];
            for (var e in n) t.push(e);
            return F && r(n, t), t
        }, m.values = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
            return e
        }, m.mapObject = function(n, t, r) {
            t = b(t, r);
            for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
            return o
        }, m.pairs = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
            return e
        }, m.invert = function(n) {
            for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
            return t
        }, m.functions = m.methods = function(n) {
            var t = [];
            for (var r in n) m.isFunction(n[r]) && t.push(r);
            return t.sort()
        }, m.extend = x(m.allKeys), m.extendOwn = m.assign = x(m.keys), m.findKey = function(n, t, r) {
            t = b(t, r);
            for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
                if (e = u[i], t(n[e], e, n)) return e
        }, m.pick = function(n, t, r) {
            var e, u, i = {},
                o = n;
            if (null == o) return i;
            m.isFunction(t) ? (u = m.allKeys(o), e = d(t, r)) : (u = k(arguments, !1, !1, 1), e = function(n, t, r) {
                return t in r
            }, o = Object(o));
            for (var a = 0, c = u.length; c > a; a++) {
                var l = u[a],
                    f = o[l];
                e(f, l, o) && (i[l] = f)
            }
            return i
        }, m.omit = function(n, t, r) {
            if (m.isFunction(t)) t = m.negate(t);
            else {
                var e = m.map(k(arguments, !1, !1, 1), String);
                t = function(n, t) {
                    return !m.contains(e, t)
                }
            }
            return m.pick(n, t, r)
        }, m.defaults = x(m.allKeys, !0), m.clone = function(n) {
            return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
        }, m.tap = function(n, t) {
            return t(n), n
        }, m.isMatch = function(n, t) {
            var r = m.keys(t),
                e = r.length;
            if (null == n) return !e;
            for (var u = Object(n), i = 0; e > i; i++) {
                var o = r[i];
                if (t[o] !== u[o] || !(o in u)) return !1
            }
            return !0
        };
        var E = function(n, t, r, e) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
            var u = f.call(n);
            if (u !== f.call(t)) return !1;
            switch (u) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + n == "" + t;
                case "[object Number]":
                    return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +n == +t
            }
            var i = "[object Array]" === u;
            if (!i) {
                if ("object" != typeof n || "object" != typeof t) return !1;
                var o = n.constructor,
                    a = t.constructor;
                if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
            }
            r = r || [], e = e || [];
            for (var c = r.length; c--;)
                if (r[c] === n) return e[c] === t;
            if (r.push(n), e.push(t), i) {
                if ((c = n.length) !== t.length) return !1;
                for (; c--;)
                    if (!E(n[c], t[c], r, e)) return !1
            } else {
                var l, s = m.keys(n);
                if (c = s.length, m.keys(t).length !== c) return !1;
                for (; c--;)
                    if (l = s[c], !m.has(t, l) || !E(n[l], t[l], r, e)) return !1
            }
            return r.pop(), e.pop(), !0
        };
        m.isEqual = function(n, t) {
            return E(n, t)
        }, m.isEmpty = function(n) {
            return null == n || (w(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
        }, m.isElement = function(n) {
            return !(!n || 1 !== n.nodeType)
        }, m.isArray = p || function(n) {
            return "[object Array]" === f.call(n)
        }, m.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
            m["is" + n] = function(t) {
                return f.call(t) === "[object " + n + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function(n) {
            return m.has(n, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
            return "function" == typeof n || !1
        }), m.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        }, m.isNaN = function(n) {
            return m.isNumber(n) && n !== +n
        }, m.isBoolean = function(n) {
            return !0 === n || !1 === n || "[object Boolean]" === f.call(n)
        }, m.isNull = function(n) {
            return null === n
        }, m.isUndefined = function(n) {
            return void 0 === n
        }, m.has = function(n, t) {
            return null != n && s.call(n, t)
        }, m.noConflict = function() {
            return e._ = u, this
        }, m.identity = function(n) {
            return n
        }, m.constant = function(n) {
            return function() {
                return n
            }
        }, m.noop = function() {}, m.property = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        }, m.propertyOf = function(n) {
            return null == n ? function() {} : function(t) {
                return n[t]
            }
        }, m.matcher = m.matches = function(n) {
            return n = m.extendOwn({}, n),
                function(t) {
                    return m.isMatch(t, n)
                }
        }, m.times = function(n, t, r) {
            var e = Array(Math.max(0, n));
            t = d(t, r, 1);
            for (var u = 0; n > u; u++) e[u] = t(u);
            return e
        }, m.random = function(n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        }, m.now = Date.now || function() {
            return (new Date).getTime()
        };
        var M = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            N = m.invert(M),
            I = function(n) {
                var t = function(t) {
                        return n[t]
                    },
                    r = "(?:" + m.keys(n).join("|") + ")",
                    e = RegExp(r),
                    u = RegExp(r, "g");
                return function(n) {
                    return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
                }
            };
        m.escape = I(M), m.unescape = I(N), m.result = function(n, t, r) {
            var e = null == n ? void 0 : n[t];
            return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e
        };
        var B = 0;
        m.uniqueId = function(n) {
            var t = ++B + "";
            return n ? n + t : t
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var T = /(.)^/,
            R = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            q = /\\|'|\r|\n|\u2028|\u2029/g,
            K = function(n) {
                return "\\" + R[n]
            };
        m.template = function(n, t, r) {
            !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
            var e = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
                u = 0,
                i = "__p+='";
            n.replace(e, function(t, r, e, o, a) {
                return i += n.slice(u, a).replace(q, K), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
            }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", i)
            } catch (a) {
                throw a.source = i, a
            }
            var c = function(n) {
                    return o.call(this, n, m)
                },
                l = t.variable || "obj";
            return c.source = "function(" + l + "){\n" + i + "}", c
        }, m.chain = function(n) {
            var t = m(n);
            return t._chain = !0, t
        };
        var z = function(n, t) {
            return n._chain ? m(t).chain() : t
        };
        m.mixin = function(n) {
            m.each(m.functions(n), function(t) {
                var r = m[t] = n[t];
                m.prototype[t] = function() {
                    var n = [this._wrapped];
                    return c.apply(n, arguments), z(this, r.apply(m, n))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
            var t = i[n];
            m.prototype[n] = function() {
                var r = this._wrapped;
                return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], z(this, r)
            }
        }), m.each(["concat", "join", "slice"], function(n) {
            var t = i[n];
            m.prototype[n] = function() {
                return z(this, t.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return m
        })
    }.call(this), this.createjs = this.createjs || {}, createjs.extend = function(subclass, superclass) {
        "use strict";

        function o() {
            this.constructor = subclass
        }
        return o.prototype = superclass.prototype, subclass.prototype = new o
    }, createjs.promote = function(subclass, prefix) {
        "use strict";
        var subP = subclass.prototype,
            supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
        if (supP) {
            subP[(prefix += "_") + "constructor"] = supP.constructor;
            for (var n in supP) subP.hasOwnProperty(n) && "function" == typeof supP[n] && (subP[prefix + n] = supP[n])
        }
        return subclass
    }, createjs.indexOf = function(array, searchElement) {
        "use strict";
        for (var i = 0, l = array.length; i < l; i++)
            if (searchElement === array[i]) return i;
        return -1
    },
    function() {
        "use strict";

        function Event(type, bubbles, cancelable) {
            this.type = type, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!bubbles, this.cancelable = !!cancelable, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var p = Event.prototype;
        p.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, p.stopPropagation = function() {
            this.propagationStopped = !0
        }, p.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, p.remove = function() {
            this.removed = !0
        }, p.clone = function() {
            return new Event(this.type, this.bubbles, this.cancelable)
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = Event
    }(),
    function() {
        "use strict";

        function EventDispatcher() {
            this._listeners = null, this._captureListeners = null
        }
        var p = EventDispatcher.prototype;
        EventDispatcher.initialize = function(target) {
            target.addEventListener = p.addEventListener, target.on = p.on, target.removeEventListener = target.off = p.removeEventListener, target.removeAllEventListeners = p.removeAllEventListeners, target.hasEventListener = p.hasEventListener, target.dispatchEvent = p.dispatchEvent, target._dispatchEvent = p._dispatchEvent, target.willTrigger = p.willTrigger
        }, p.addEventListener = function(type, listener, useCapture) {
            var listeners, arr = (listeners = useCapture ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[type];
            return arr && this.removeEventListener(type, listener, useCapture), (arr = listeners[type]) ? arr.push(listener) : listeners[type] = [listener], listener
        }, p.on = function(type, listener, scope, once, data, useCapture) {
            return listener.handleEvent && (scope = scope || listener, listener = listener.handleEvent), scope = scope || this, this.addEventListener(type, function(evt) {
                listener.call(scope, evt, data), once && evt.remove()
            }, useCapture)
        }, p.removeEventListener = function(type, listener, useCapture) {
            var listeners = useCapture ? this._captureListeners : this._listeners;
            if (listeners) {
                var arr = listeners[type];
                if (arr)
                    for (var i = 0, l = arr.length; i < l; i++)
                        if (arr[i] == listener) {
                            1 == l ? delete listeners[type] : arr.splice(i, 1);
                            break
                        }
            }
        }, p.off = p.removeEventListener, p.removeAllEventListeners = function(type) {
            type ? (this._listeners && delete this._listeners[type], this._captureListeners && delete this._captureListeners[type]) : this._listeners = this._captureListeners = null
        }, p.dispatchEvent = function(eventObj, bubbles, cancelable) {
            if ("string" == typeof eventObj) {
                var listeners = this._listeners;
                if (!(bubbles || listeners && listeners[eventObj])) return !0;
                eventObj = new createjs.Event(eventObj, bubbles, cancelable)
            } else eventObj.target && eventObj.clone && (eventObj = eventObj.clone());
            try {
                eventObj.target = this
            } catch (e) {}
            if (eventObj.bubbles && this.parent) {
                for (var top = this, list = [top]; top.parent;) list.push(top = top.parent);
                var i, l = list.length;
                for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) list[i]._dispatchEvent(eventObj, 1 + (0 == i));
                for (i = 1; i < l && !eventObj.propagationStopped; i++) list[i]._dispatchEvent(eventObj, 3)
            } else this._dispatchEvent(eventObj, 2);
            return !eventObj.defaultPrevented
        }, p.hasEventListener = function(type) {
            var listeners = this._listeners,
                captureListeners = this._captureListeners;
            return !!(listeners && listeners[type] || captureListeners && captureListeners[type])
        }, p.willTrigger = function(type) {
            for (var o = this; o;) {
                if (o.hasEventListener(type)) return !0;
                o = o.parent
            }
            return !1
        }, p.toString = function() {
            return "[EventDispatcher]"
        }, p._dispatchEvent = function(eventObj, eventPhase) {
            var l, listeners = 1 == eventPhase ? this._captureListeners : this._listeners;
            if (eventObj && listeners) {
                var arr = listeners[eventObj.type];
                if (!arr || !(l = arr.length)) return;
                try {
                    eventObj.currentTarget = this
                } catch (e) {}
                try {
                    eventObj.eventPhase = eventPhase
                } catch (e) {}
                eventObj.removed = !1, arr = arr.slice();
                for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
                    var o = arr[i];
                    o.handleEvent ? o.handleEvent(eventObj) : o(eventObj), eventObj.removed && (this.off(eventObj.type, o, 1 == eventPhase), eventObj.removed = !1)
                }
            }
        }, createjs.EventDispatcher = EventDispatcher
    }(),
    function() {
        "use strict";

        function Ticker() {
            throw "Ticker cannot be instantiated."
        }
        Ticker.RAF_SYNCHED = "synched", Ticker.RAF = "raf", Ticker.TIMEOUT = "timeout", Ticker.useRAF = !1, Ticker.timingMode = null, Ticker.maxDelta = 0, Ticker.paused = !1, Ticker.removeEventListener = null, Ticker.removeAllEventListeners = null, Ticker.dispatchEvent = null, Ticker.hasEventListener = null, Ticker._listeners = null, createjs.EventDispatcher.initialize(Ticker), Ticker._addEventListener = Ticker.addEventListener, Ticker.addEventListener = function() {
            return !Ticker._inited && Ticker.init(), Ticker._addEventListener.apply(Ticker, arguments)
        }, Ticker._inited = !1, Ticker._startTime = 0, Ticker._pausedTime = 0, Ticker._ticks = 0, Ticker._pausedTicks = 0, Ticker._interval = 50, Ticker._lastTime = 0, Ticker._times = null, Ticker._tickTimes = null, Ticker._timerId = null, Ticker._raf = !0, Ticker.setInterval = function(interval) {
            Ticker._interval = interval, Ticker._inited && Ticker._setupTick()
        }, Ticker.getInterval = function() {
            return Ticker._interval
        }, Ticker.setFPS = function(value) {
            Ticker.setInterval(1e3 / value)
        }, Ticker.getFPS = function() {
            return 1e3 / Ticker._interval
        };
        try {
            Object.defineProperties(Ticker, {
                interval: {
                    get: Ticker.getInterval,
                    set: Ticker.setInterval
                },
                framerate: {
                    get: Ticker.getFPS,
                    set: Ticker.setFPS
                }
            })
        } catch (e) {
            console.log(e)
        }
        Ticker.init = function() {
            Ticker._inited || (Ticker._inited = !0, Ticker._times = [], Ticker._tickTimes = [], Ticker._startTime = Ticker._getTime(), Ticker._times.push(Ticker._lastTime = 0), Ticker.interval = Ticker._interval)
        }, Ticker.reset = function() {
            if (Ticker._raf) {
                var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                f && f(Ticker._timerId)
            } else clearTimeout(Ticker._timerId);
            Ticker.removeAllEventListeners("tick"), Ticker._timerId = Ticker._times = Ticker._tickTimes = null, Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0, Ticker._inited = !1
        }, Ticker.getMeasuredTickTime = function(ticks) {
            var ttl = 0,
                times = Ticker._tickTimes;
            if (!times || times.length < 1) return -1;
            ticks = Math.min(times.length, ticks || 0 | Ticker.getFPS());
            for (var i = 0; i < ticks; i++) ttl += times[i];
            return ttl / ticks
        }, Ticker.getMeasuredFPS = function(ticks) {
            var times = Ticker._times;
            return !times || times.length < 2 ? -1 : (ticks = Math.min(times.length - 1, ticks || 0 | Ticker.getFPS()), 1e3 / ((times[0] - times[ticks]) / ticks))
        }, Ticker.setPaused = function(value) {
            Ticker.paused = value
        }, Ticker.getPaused = function() {
            return Ticker.paused
        }, Ticker.getTime = function(runTime) {
            return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1
        }, Ticker.getEventTime = function(runTime) {
            return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1
        }, Ticker.getTicks = function(pauseable) {
            return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0)
        }, Ticker._handleSynch = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._getTime() - Ticker._lastTime >= .97 * (Ticker._interval - 1) && Ticker._tick()
        }, Ticker._handleRAF = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._tick()
        }, Ticker._handleTimeout = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._tick()
        }, Ticker._setupTick = function() {
            if (null == Ticker._timerId) {
                var mode = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
                if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
                    var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (f) return Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch), void(Ticker._raf = !0)
                }
                Ticker._raf = !1, Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval)
            }
        }, Ticker._tick = function() {
            var paused = Ticker.paused,
                time = Ticker._getTime(),
                elapsedTime = time - Ticker._lastTime;
            if (Ticker._lastTime = time, Ticker._ticks++, paused && (Ticker._pausedTicks++, Ticker._pausedTime += elapsedTime), Ticker.hasEventListener("tick")) {
                var event = new createjs.Event("tick"),
                    maxDelta = Ticker.maxDelta;
                event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime, event.paused = paused, event.time = time, event.runTime = time - Ticker._pausedTime, Ticker.dispatchEvent(event)
            }
            for (Ticker._tickTimes.unshift(Ticker._getTime() - time); Ticker._tickTimes.length > 100;) Ticker._tickTimes.pop();
            for (Ticker._times.unshift(time); Ticker._times.length > 100;) Ticker._times.pop()
        };
        var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        Ticker._getTime = function() {
            return (now && now.call(performance) || (new Date).getTime()) - Ticker._startTime
        }, createjs.Ticker = Ticker
    }(),
    function() {
        "use strict";

        function UID() {
            throw "UID cannot be instantiated"
        }
        UID._nextID = 0, UID.get = function() {
            return UID._nextID++
        }, createjs.UID = UID
    }(),
    function() {
        "use strict";

        function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
            this.Event_constructor(type, bubbles, cancelable), this.stageX = stageX, this.stageY = stageY, this.rawX = null == rawX ? stageX : rawX, this.rawY = null == rawY ? stageY : rawY, this.nativeEvent = nativeEvent, this.pointerID = pointerID, this.primary = !!primary, this.relatedTarget = relatedTarget
        }
        var p = createjs.extend(MouseEvent, createjs.Event);
        p._get_localX = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, p._get_localY = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        }, p._get_isTouch = function() {
            return -1 !== this.pointerID
        };
        try {
            Object.defineProperties(p, {
                localX: {
                    get: p._get_localX
                },
                localY: {
                    get: p._get_localY
                },
                isTouch: {
                    get: p._get_isTouch
                }
            })
        } catch (e) {}
        p.clone = function() {
            return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, p.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = createjs.promote(MouseEvent, "Event")
    }(),
    function() {
        "use strict";

        function Matrix2D(a, b, c, d, tx, ty) {
            this.setValues(a, b, c, d, tx, ty)
        }
        var p = Matrix2D.prototype;
        Matrix2D.DEG_TO_RAD = Math.PI / 180, Matrix2D.identity = null, p.setValues = function(a, b, c, d, tx, ty) {
            return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = tx || 0, this.ty = ty || 0, this
        }, p.append = function(a, b, c, d, tx, ty) {
            var a1 = this.a,
                b1 = this.b,
                c1 = this.c,
                d1 = this.d;
            return 1 == a && 0 == b && 0 == c && 1 == d || (this.a = a1 * a + c1 * b, this.b = b1 * a + d1 * b, this.c = a1 * c + c1 * d, this.d = b1 * c + d1 * d), this.tx = a1 * tx + c1 * ty + this.tx, this.ty = b1 * tx + d1 * ty + this.ty, this
        }, p.prepend = function(a, b, c, d, tx, ty) {
            var a1 = this.a,
                c1 = this.c,
                tx1 = this.tx;
            return this.a = a * a1 + c * this.b, this.b = b * a1 + d * this.b, this.c = a * c1 + c * this.d, this.d = b * c1 + d * this.d, this.tx = a * tx1 + c * this.ty + tx, this.ty = b * tx1 + d * this.ty + ty, this
        }, p.appendMatrix = function(matrix) {
            return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.prependMatrix = function(matrix) {
            return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.appendTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            if (rotation % 360) var r = rotation * Matrix2D.DEG_TO_RAD,
                cos = Math.cos(r),
                sin = Math.sin(r);
            else cos = 1, sin = 0;
            return skewX || skewY ? (skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y), this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0)) : this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y), (regX || regY) && (this.tx -= regX * this.a + regY * this.c, this.ty -= regX * this.b + regY * this.d), this
        }, p.prependTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            if (rotation % 360) var r = rotation * Matrix2D.DEG_TO_RAD,
                cos = Math.cos(r),
                sin = Math.sin(r);
            else cos = 1, sin = 0;
            return (regX || regY) && (this.tx -= regX, this.ty -= regY), skewX || skewY ? (skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0), this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y)) : this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y), this
        }, p.rotate = function(angle) {
            angle *= Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(angle),
                sin = Math.sin(angle),
                a1 = this.a,
                b1 = this.b;
            return this.a = a1 * cos + this.c * sin, this.b = b1 * cos + this.d * sin, this.c = -a1 * sin + this.c * cos, this.d = -b1 * sin + this.d * cos, this
        }, p.skew = function(skewX, skewY) {
            return skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0), this
        }, p.scale = function(x, y) {
            return this.a *= x, this.b *= x, this.c *= y, this.d *= y, this
        }, p.translate = function(x, y) {
            return this.tx += this.a * x + this.c * y, this.ty += this.b * x + this.d * y, this
        }, p.identity = function() {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
        }, p.invert = function() {
            var a1 = this.a,
                b1 = this.b,
                c1 = this.c,
                d1 = this.d,
                tx1 = this.tx,
                n = a1 * d1 - b1 * c1;
            return this.a = d1 / n, this.b = -b1 / n, this.c = -c1 / n, this.d = a1 / n, this.tx = (c1 * this.ty - d1 * tx1) / n, this.ty = -(a1 * this.ty - b1 * tx1) / n, this
        }, p.isIdentity = function() {
            return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
        }, p.equals = function(matrix) {
            return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d
        }, p.transformPoint = function(x, y, pt) {
            return pt = pt || {}, pt.x = x * this.a + y * this.c + this.tx, pt.y = x * this.b + y * this.d + this.ty, pt
        }, p.decompose = function(target) {
            null == target && (target = {}), target.x = this.tx, target.y = this.ty, target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var skewX = Math.atan2(-this.c, this.d),
                skewY = Math.atan2(this.b, this.a);
            return Math.abs(1 - skewX / skewY) < 1e-5 ? (target.rotation = skewY / Matrix2D.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (target.rotation += target.rotation <= 0 ? 180 : -180), target.skewX = target.skewY = 0) : (target.skewX = skewX / Matrix2D.DEG_TO_RAD, target.skewY = skewY / Matrix2D.DEG_TO_RAD), target
        }, p.copy = function(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.clone = function() {
            return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty)
        }, p.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, Matrix2D.identity = new Matrix2D, createjs.Matrix2D = Matrix2D
    }(),
    function() {
        "use strict";

        function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
            this.setValues(visible, alpha, shadow, compositeOperation, matrix)
        }
        var p = DisplayProps.prototype;
        p.setValues = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.visible = null == visible || !!visible, this.alpha = null == alpha ? 1 : alpha, this.shadow = shadow, this.compositeOperation = compositeOperation, this.matrix = matrix || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
        }, p.append = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.alpha *= alpha, this.shadow = shadow || this.shadow, this.compositeOperation = compositeOperation || this.compositeOperation, this.visible = this.visible && visible, matrix && this.matrix.appendMatrix(matrix), this
        }, p.prepend = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.alpha *= alpha, this.shadow = this.shadow || shadow, this.compositeOperation = this.compositeOperation || compositeOperation, this.visible = this.visible && visible, matrix && this.matrix.prependMatrix(matrix), this
        }, p.identity = function() {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
        }, p.clone = function() {
            return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
        }, createjs.DisplayProps = DisplayProps
    }(),
    function() {
        "use strict";

        function Point(x, y) {
            this.setValues(x, y)
        }
        var p = Point.prototype;
        p.setValues = function(x, y) {
            return this.x = x || 0, this.y = y || 0, this
        }, p.copy = function(point) {
            return this.x = point.x, this.y = point.y, this
        }, p.clone = function() {
            return new Point(this.x, this.y)
        }, p.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = Point
    }(),
    function() {
        "use strict";

        function Rectangle(x, y, width, height) {
            this.setValues(x, y, width, height)
        }
        var p = Rectangle.prototype;
        p.setValues = function(x, y, width, height) {
            return this.x = x || 0, this.y = y || 0, this.width = width || 0, this.height = height || 0, this
        }, p.extend = function(x, y, width, height) {
            return width = width || 0, height = height || 0, x + width > this.x + this.width && (this.width = x + width - this.x), y + height > this.y + this.height && (this.height = y + height - this.y), x < this.x && (this.width += this.x - x, this.x = x), y < this.y && (this.height += this.y - y, this.y = y), this
        }, p.pad = function(top, left, bottom, right) {
            return this.x -= left, this.y -= top, this.width += left + right, this.height += top + bottom, this
        }, p.copy = function(rectangle) {
            return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
        }, p.contains = function(x, y, width, height) {
            return width = width || 0, height = height || 0, x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height
        }, p.union = function(rect) {
            return this.clone().extend(rect.x, rect.y, rect.width, rect.height)
        }, p.intersection = function(rect) {
            var x1 = rect.x,
                y1 = rect.y,
                x2 = x1 + rect.width,
                y2 = y1 + rect.height;
            return this.x > x1 && (x1 = this.x), this.y > y1 && (y1 = this.y), this.x + this.width < x2 && (x2 = this.x + this.width), this.y + this.height < y2 && (y2 = this.y + this.height), x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1)
        }, p.intersects = function(rect) {
            return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height
        }, p.isEmpty = function() {
            return this.width <= 0 || this.height <= 0
        }, p.clone = function() {
            return new Rectangle(this.x, this.y, this.width, this.height)
        }, p.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = Rectangle
    }(),
    function() {
        "use strict";

        function ButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
            target.addEventListener && (this.target = target, this.overLabel = null == overLabel ? "over" : overLabel, this.outLabel = null == outLabel ? "out" : outLabel, this.downLabel = null == downLabel ? "down" : downLabel, this.play = play, this._isPressed = !1, this._isOver = !1, this._enabled = !1, target.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), hitArea && (hitLabel && (hitArea.actionsEnabled = !1, hitArea.gotoAndStop && hitArea.gotoAndStop(hitLabel)), target.hitArea = hitArea))
        }
        var p = ButtonHelper.prototype;
        p.setEnabled = function(value) {
            if (value != this._enabled) {
                var o = this.target;
                this._enabled = value, value ? (o.cursor = "pointer", o.addEventListener("rollover", this), o.addEventListener("rollout", this), o.addEventListener("mousedown", this), o.addEventListener("pressup", this), o._reset && (o.__reset = o._reset, o._reset = this._reset)) : (o.cursor = null, o.removeEventListener("rollover", this), o.removeEventListener("rollout", this), o.removeEventListener("mousedown", this), o.removeEventListener("pressup", this), o.__reset && (o._reset = o.__reset, delete o.__reset))
            }
        }, p.getEnabled = function() {
            return this._enabled
        };
        try {
            Object.defineProperties(p, {
                enabled: {
                    get: p.getEnabled,
                    set: p.setEnabled
                }
            })
        } catch (e) {}
        p.toString = function() {
            return "[ButtonHelper]"
        }, p.handleEvent = function(evt) {
            var label, t = this.target,
                type = evt.type;
            "mousedown" == type ? (this._isPressed = !0, label = this.downLabel) : "pressup" == type ? (this._isPressed = !1, label = this._isOver ? this.overLabel : this.outLabel) : "rollover" == type ? (this._isOver = !0, label = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, label = this._isPressed ? this.overLabel : this.outLabel), this.play ? t.gotoAndPlay && t.gotoAndPlay(label) : t.gotoAndStop && t.gotoAndStop(label)
        }, p._reset = function() {
            var p = this.paused;
            this.__reset(), this.paused = p
        }, createjs.ButtonHelper = ButtonHelper
    }(),
    function() {
        "use strict";

        function Shadow(color, offsetX, offsetY, blur) {
            this.color = color || "black", this.offsetX = offsetX || 0, this.offsetY = offsetY || 0, this.blur = blur || 0
        }
        var p = Shadow.prototype;
        Shadow.identity = new Shadow("transparent", 0, 0, 0), p.toString = function() {
            return "[Shadow]"
        }, p.clone = function() {
            return new Shadow(this.color, this.offsetX, this.offsetY, this.blur)
        }, createjs.Shadow = Shadow
    }(),
    function() {
        "use strict";

        function SpriteSheet(data) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(data)
        }
        var p = createjs.extend(SpriteSheet, createjs.EventDispatcher);
        p.getAnimations = function() {
            return this._animations.slice()
        };
        try {
            Object.defineProperties(p, {
                animations: {
                    get: p.getAnimations
                }
            })
        } catch (e) {}
        p.getNumFrames = function(animation) {
            if (null == animation) return this._frames ? this._frames.length : this._numFrames || 0;
            var data = this._data[animation];
            return null == data ? 0 : data.frames.length
        }, p.getAnimation = function(name) {
            return this._data[name]
        }, p.getFrame = function(frameIndex) {
            var frame;
            return this._frames && (frame = this._frames[frameIndex]) ? frame : null
        }, p.getFrameBounds = function(frameIndex, rectangle) {
            var frame = this.getFrame(frameIndex);
            return frame ? (rectangle || new createjs.Rectangle).setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null
        }, p.toString = function() {
            return "[SpriteSheet]"
        }, p.clone = function() {
            throw "SpriteSheet cannot be cloned."
        }, p._parseData = function(data) {
            var i, l, o, a;
            if (null != data) {
                if (this.framerate = data.framerate || 0, data.images && (l = data.images.length) > 0)
                    for (a = this._images = [], i = 0; i < l; i++) {
                        var img = data.images[i];
                        if ("string" == typeof img) {
                            var src = img;
                            (img = document.createElement("img")).src = src
                        }
                        a.push(img), img.getContext || img.naturalWidth || (this._loadCount++, this.complete = !1, function(o, src) {
                            img.onload = function() {
                                o._handleImageLoad(src)
                            }
                        }(this, src), function(o, src) {
                            img.onerror = function() {
                                o._handleImageError(src)
                            }
                        }(this, src))
                    }
                if (null == data.frames);
                else if (Array.isArray(data.frames))
                    for (this._frames = [], i = 0, l = (a = data.frames).length; i < l; i++) {
                        var arr = a[i];
                        this._frames.push({
                            image: this._images[arr[4] ? arr[4] : 0],
                            rect: new createjs.Rectangle(arr[0], arr[1], arr[2], arr[3]),
                            regX: arr[5] || 0,
                            regY: arr[6] || 0
                        })
                    } else o = data.frames, this._frameWidth = o.width, this._frameHeight = o.height, this._regX = o.regX || 0, this._regY = o.regY || 0, this._spacing = o.spacing || 0, this._margin = o.margin || 0, this._numFrames = o.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (o = data.animations)) {
                    this._data = {};
                    var name;
                    for (name in o) {
                        var anim = {
                                name: name
                            },
                            obj = o[name];
                        if ("number" == typeof obj) a = anim.frames = [obj];
                        else if (Array.isArray(obj))
                            if (1 == obj.length) anim.frames = [obj[0]];
                            else
                                for (anim.speed = obj[3], anim.next = obj[2], a = anim.frames = [], i = obj[0]; i <= obj[1]; i++) a.push(i);
                        else {
                            anim.speed = obj.speed, anim.next = obj.next;
                            var frames = obj.frames;
                            a = anim.frames = "number" == typeof frames ? [frames] : frames.slice(0)
                        }!0 !== anim.next && void 0 !== anim.next || (anim.next = name), (!1 === anim.next || a.length < 2 && anim.next == name) && (anim.next = null), anim.speed || (anim.speed = 1), this._animations.push(name), this._data[name] = anim
                    }
                }
            }
        }, p._handleImageLoad = function(src) {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, p._handleImageError = function(src) {
            var errorEvent = new createjs.Event("error");
            errorEvent.src = src, this.dispatchEvent(errorEvent), 0 == --this._loadCount && this.dispatchEvent("complete")
        }, p._calculateFrames = function() {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                var maxFrames = this._numFrames || 1e5,
                    frameCount = 0,
                    frameWidth = this._frameWidth,
                    frameHeight = this._frameHeight,
                    spacing = this._spacing,
                    margin = this._margin;
                imgLoop: for (var i = 0, imgs = this._images; i < imgs.length; i++)
                    for (var img = imgs[i], imgW = img.width, imgH = img.height, y = margin; y <= imgH - margin - frameHeight;) {
                        for (var x = margin; x <= imgW - margin - frameWidth;) {
                            if (frameCount >= maxFrames) break imgLoop;
                            frameCount++, this._frames.push({
                                image: img,
                                rect: new createjs.Rectangle(x, y, frameWidth, frameHeight),
                                regX: this._regX,
                                regY: this._regY
                            }), x += frameWidth + spacing
                        }
                        y += frameHeight + spacing
                    }
                this._numFrames = frameCount
            }
        }, createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Graphics() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
        }
        var p = Graphics.prototype,
            G = Graphics;
        Graphics.getRGB = function(r, g, b, alpha) {
            return null != r && null == b && (alpha = g, b = 255 & r, g = r >> 8 & 255, r = r >> 16 & 255), null == alpha ? "rgb(" + r + "," + g + "," + b + ")" : "rgba(" + r + "," + g + "," + b + "," + alpha + ")"
        }, Graphics.getHSL = function(hue, saturation, lightness, alpha) {
            return null == alpha ? "hsl(" + hue % 360 + "," + saturation + "%," + lightness + "%)" : "hsla(" + hue % 360 + "," + saturation + "%," + lightness + "%," + alpha + ")"
        }, Graphics.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"], Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (Graphics._ctx = canvas.getContext("2d"), canvas.width = canvas.height = 1), p.getInstructions = function() {
            return this._updateInstructions(), this._instructions
        };
        try {
            Object.defineProperties(p, {
                instructions: {
                    get: p.getInstructions
                }
            })
        } catch (e) {}
        p.isEmpty = function() {
            return !(this._instructions.length || this._activeInstructions.length)
        }, p.draw = function(ctx, data) {
            this._updateInstructions();
            for (var instr = this._instructions, i = this._storeIndex, l = instr.length; i < l; i++) instr[i].exec(ctx, data)
        }, p.drawAsPath = function(ctx) {
            this._updateInstructions();
            for (var instr, instrs = this._instructions, i = this._storeIndex, l = instrs.length; i < l; i++) !1 !== (instr = instrs[i]).path && instr.exec(ctx)
        }, p.moveTo = function(x, y) {
            return this.append(new G.MoveTo(x, y), !0)
        }, p.lineTo = function(x, y) {
            return this.append(new G.LineTo(x, y))
        }, p.arcTo = function(x1, y1, x2, y2, radius) {
            return this.append(new G.ArcTo(x1, y1, x2, y2, radius))
        }, p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this.append(new G.Arc(x, y, radius, startAngle, endAngle, anticlockwise))
        }, p.quadraticCurveTo = function(cpx, cpy, x, y) {
            return this.append(new G.QuadraticCurveTo(cpx, cpy, x, y))
        }, p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this.append(new G.BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y))
        }, p.rect = function(x, y, w, h) {
            return this.append(new G.Rect(x, y, w, h))
        }, p.closePath = function() {
            return this._activeInstructions.length ? this.append(new G.ClosePath) : this
        }, p.clear = function() {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
        }, p.beginFill = function(color) {
            return this._setFill(color ? new G.Fill(color) : null)
        }, p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
            return this._setFill((new G.Fill).linearGradient(colors, ratios, x0, y0, x1, y1))
        }, p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._setFill((new G.Fill).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1))
        }, p.beginBitmapFill = function(image, repetition, matrix) {
            return this._setFill(new G.Fill(null, matrix).bitmap(image, repetition))
        }, p.endFill = function() {
            return this.beginFill()
        }, p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale), this._stroke && (this._stroke.ignoreScale = ignoreScale), this._strokeIgnoreScale = ignoreScale, this
        }, p.setStrokeDash = function(segments, offset) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new G.StrokeDash(segments, offset), this
        }, p.beginStroke = function(color) {
            return this._setStroke(color ? new G.Stroke(color) : null)
        }, p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
            return this._setStroke((new G.Stroke).linearGradient(colors, ratios, x0, y0, x1, y1))
        }, p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._setStroke((new G.Stroke).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1))
        }, p.beginBitmapStroke = function(image, repetition) {
            return this._setStroke((new G.Stroke).bitmap(image, repetition))
        }, p.endStroke = function() {
            return this.beginStroke()
        }, p.curveTo = p.quadraticCurveTo, p.drawRect = p.rect, p.drawRoundRect = function(x, y, w, h, radius) {
            return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius)
        }, p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
            return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL))
        }, p.drawCircle = function(x, y, radius) {
            return this.append(new G.Circle(x, y, radius))
        }, p.drawEllipse = function(x, y, w, h) {
            return this.append(new G.Ellipse(x, y, w, h))
        }, p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle))
        }, p.append = function(command, clean) {
            return this._activeInstructions.push(command), this.command = command, clean || (this._dirty = !0), this
        }, p.decodePath = function(str) {
            for (var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], paramCount = [2, 2, 4, 6, 0], i = 0, l = str.length, params = [], x = 0, y = 0, base64 = Graphics.BASE_64; i < l;) {
                var c = str.charAt(i),
                    n = base64[c],
                    fi = n >> 3,
                    f = instructions[fi];
                if (!f || 3 & n) throw "bad path data (@" + i + "): " + c;
                var pl = paramCount[fi];
                fi || (x = y = 0), params.length = 0, i++;
                for (var charCount = 2 + (n >> 2 & 1), p = 0; p < pl; p++) {
                    var num = base64[str.charAt(i)],
                        sign = num >> 5 ? -1 : 1;
                    num = (31 & num) << 6 | base64[str.charAt(i + 1)], 3 == charCount && (num = num << 6 | base64[str.charAt(i + 2)]), num = sign * num / 10, p % 2 ? x = num += x : y = num += y, params[p] = num, i += charCount
                }
                f.apply(this, params)
            }
            return this
        }, p.store = function() {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
        }, p.unstore = function() {
            return this._storeIndex = 0, this
        }, p.clone = function() {
            var o = new Graphics;
            return o.command = this.command, o._stroke = this._stroke, o._strokeStyle = this._strokeStyle, o._strokeDash = this._strokeDash, o._strokeIgnoreScale = this._strokeIgnoreScale, o._fill = this._fill, o._instructions = this._instructions.slice(), o._commitIndex = this._commitIndex, o._activeInstructions = this._activeInstructions.slice(), o._dirty = this._dirty, o._storeIndex = this._storeIndex, o
        }, p.toString = function() {
            return "[Graphics]"
        }, p.mt = p.moveTo, p.lt = p.lineTo, p.at = p.arcTo, p.bt = p.bezierCurveTo, p.qt = p.quadraticCurveTo, p.a = p.arc, p.r = p.rect, p.cp = p.closePath, p.c = p.clear, p.f = p.beginFill, p.lf = p.beginLinearGradientFill, p.rf = p.beginRadialGradientFill, p.bf = p.beginBitmapFill, p.ef = p.endFill, p.ss = p.setStrokeStyle, p.sd = p.setStrokeDash, p.s = p.beginStroke, p.ls = p.beginLinearGradientStroke, p.rs = p.beginRadialGradientStroke, p.bs = p.beginBitmapStroke, p.es = p.endStroke, p.dr = p.drawRect, p.rr = p.drawRoundRect, p.rc = p.drawRoundRectComplex, p.dc = p.drawCircle, p.de = p.drawEllipse, p.dp = p.drawPolyStar, p.p = p.decodePath, p._updateInstructions = function(commit) {
            var instr = this._instructions,
                active = this._activeInstructions,
                commitIndex = this._commitIndex;
            if (this._dirty && active.length) {
                instr.length = commitIndex, instr.push(Graphics.beginCmd);
                var l = active.length,
                    ll = instr.length;
                instr.length = ll + l;
                for (var i = 0; i < l; i++) instr[i + ll] = active[i];
                this._fill && instr.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, instr.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, instr.push(this._strokeStyle)), instr.push(this._stroke)), this._dirty = !1
            }
            commit && (active.length = 0, this._commitIndex = instr.length)
        }, p._setFill = function(fill) {
            return this._updateInstructions(!0), this.command = this._fill = fill, this
        }, p._setStroke = function(stroke) {
            return this._updateInstructions(!0), (this.command = this._stroke = stroke) && (stroke.ignoreScale = this._strokeIgnoreScale), this
        }, (G.LineTo = function(x, y) {
            this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.lineTo(this.x, this.y)
        }, (G.MoveTo = function(x, y) {
            this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.moveTo(this.x, this.y)
        }, (G.ArcTo = function(x1, y1, x2, y2, radius) {
            this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2, this.radius = radius
        }).prototype.exec = function(ctx) {
            ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
        }, (G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            this.x = x, this.y = y, this.radius = radius, this.startAngle = startAngle, this.endAngle = endAngle, this.anticlockwise = !!anticlockwise
        }).prototype.exec = function(ctx) {
            ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
        }, (G.QuadraticCurveTo = function(cpx, cpy, x, y) {
            this.cpx = cpx, this.cpy = cpy, this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
        }, (G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            this.cp1x = cp1x, this.cp1y = cp1y, this.cp2x = cp2x, this.cp2y = cp2y, this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
        }, (G.Rect = function(x, y, w, h) {
            this.x = x, this.y = y, this.w = w, this.h = h
        }).prototype.exec = function(ctx) {
            ctx.rect(this.x, this.y, this.w, this.h)
        }, (G.ClosePath = function() {}).prototype.exec = function(ctx) {
            ctx.closePath()
        }, (G.BeginPath = function() {}).prototype.exec = function(ctx) {
            ctx.beginPath()
        }, (p = (G.Fill = function(style, matrix) {
            this.style = style, this.matrix = matrix
        }).prototype).exec = function(ctx) {
            if (this.style) {
                ctx.fillStyle = this.style;
                var mtx = this.matrix;
                mtx && (ctx.save(), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)), ctx.fill(), mtx && ctx.restore()
            }
        }, p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
            for (var o = this.style = Graphics._ctx.createLinearGradient(x0, y0, x1, y1), i = 0, l = colors.length; i < l; i++) o.addColorStop(ratios[i], colors[i]);
            return o.props = {
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                x1: x1,
                y1: y1,
                type: "linear"
            }, this
        }, p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            for (var o = this.style = Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1), i = 0, l = colors.length; i < l; i++) o.addColorStop(ratios[i], colors[i]);
            return o.props = {
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: r0,
                x1: x1,
                y1: y1,
                r1: r1,
                type: "radial"
            }, this
        }, p.bitmap = function(image, repetition) {
            if (image.naturalWidth || image.getContext || image.readyState >= 2) {
                (this.style = Graphics._ctx.createPattern(image, repetition || "")).props = {
                    image: image,
                    repetition: repetition,
                    type: "bitmap"
                }
            }
            return this
        }, p.path = !1, (p = (G.Stroke = function(style, ignoreScale) {
            this.style = style, this.ignoreScale = ignoreScale
        }).prototype).exec = function(ctx) {
            this.style && (ctx.strokeStyle = this.style, this.ignoreScale && (ctx.save(), ctx.setTransform(1, 0, 0, 1, 0, 0)), ctx.stroke(), this.ignoreScale && ctx.restore())
        }, p.linearGradient = G.Fill.prototype.linearGradient, p.radialGradient = G.Fill.prototype.radialGradient, p.bitmap = G.Fill.prototype.bitmap, p.path = !1, (p = (G.StrokeStyle = function(width, caps, joints, miterLimit, ignoreScale) {
            this.width = width, this.caps = caps, this.joints = joints, this.miterLimit = miterLimit, this.ignoreScale = ignoreScale
        }).prototype).exec = function(ctx) {
            ctx.lineWidth = null == this.width ? "1" : this.width, ctx.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps], ctx.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints], ctx.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, ctx.ignoreScale = null != this.ignoreScale && this.ignoreScale
        }, p.path = !1, (G.StrokeDash = function(segments, offset) {
            this.segments = segments, this.offset = offset || 0
        }).prototype.exec = function(ctx) {
            ctx.setLineDash && (ctx.setLineDash(this.segments || G.StrokeDash.EMPTY_SEGMENTS), ctx.lineDashOffset = this.offset || 0)
        }, G.StrokeDash.EMPTY_SEGMENTS = [], (G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
            this.x = x, this.y = y, this.w = w, this.h = h, this.radiusTL = radiusTL, this.radiusTR = radiusTR, this.radiusBR = radiusBR, this.radiusBL = radiusBL
        }).prototype.exec = function(ctx) {
            var max = (w < h ? w : h) / 2,
                mTL = 0,
                mTR = 0,
                mBR = 0,
                mBL = 0,
                x = this.x,
                y = this.y,
                w = this.w,
                h = this.h,
                rTL = this.radiusTL,
                rTR = this.radiusTR,
                rBR = this.radiusBR,
                rBL = this.radiusBL;
            rTL < 0 && (rTL *= mTL = -1), rTL > max && (rTL = max), rTR < 0 && (rTR *= mTR = -1), rTR > max && (rTR = max), rBR < 0 && (rBR *= mBR = -1), rBR > max && (rBR = max), rBL < 0 && (rBL *= mBL = -1), rBL > max && (rBL = max), ctx.moveTo(x + w - rTR, y), ctx.arcTo(x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR), ctx.lineTo(x + w, y + h - rBR), ctx.arcTo(x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR), ctx.lineTo(x + rBL, y + h), ctx.arcTo(x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL), ctx.lineTo(x, y + rTL), ctx.arcTo(x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL), ctx.closePath()
        }, (G.Circle = function(x, y, radius) {
            this.x = x, this.y = y, this.radius = radius
        }).prototype.exec = function(ctx) {
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        }, (G.Ellipse = function(x, y, w, h) {
            this.x = x, this.y = y, this.w = w, this.h = h
        }).prototype.exec = function(ctx) {
            var x = this.x,
                y = this.y,
                w = this.w,
                h = this.h,
                k = .5522848,
                ox = w / 2 * k,
                oy = h / 2 * k,
                xe = x + w,
                ye = y + h,
                xm = x + w / 2,
                ym = y + h / 2;
            ctx.moveTo(x, ym), ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y), ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym), ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye), ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)
        }, (G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
            this.x = x, this.y = y, this.radius = radius, this.sides = sides, this.pointSize = pointSize, this.angle = angle
        }).prototype.exec = function(ctx) {
            var x = this.x,
                y = this.y,
                radius = this.radius,
                angle = (this.angle || 0) / 180 * Math.PI,
                sides = this.sides,
                ps = 1 - (this.pointSize || 0),
                a = Math.PI / sides;
            ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
            for (var i = 0; i < sides; i++) angle += a, 1 != ps && ctx.lineTo(x + Math.cos(angle) * radius * ps, y + Math.sin(angle) * radius * ps), angle += a, ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
            ctx.closePath()
        }, Graphics.beginCmd = new G.BeginPath, createjs.Graphics = Graphics
    }(),
    function() {
        "use strict";

        function DisplayObject() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null
        }
        var p = createjs.extend(DisplayObject, createjs.EventDispatcher);
        DisplayObject._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], DisplayObject.suppressCrossDomainErrors = !1, DisplayObject._snapToPixelEnabled = !1;
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (DisplayObject._hitTestCanvas = canvas, DisplayObject._hitTestContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), DisplayObject._nextCacheID = 1, p.getStage = function() {
            for (var o = this, _Stage = createjs.Stage; o.parent;) o = o.parent;
            return o instanceof _Stage ? o : null
        };
        try {
            Object.defineProperties(p, {
                stage: {
                    get: p.getStage
                }
            })
        } catch (e) {}
        p.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, p.draw = function(ctx, ignoreCache) {
            var cacheCanvas = this.cacheCanvas;
            if (ignoreCache || !cacheCanvas) return !1;
            var scale = this._cacheScale;
            return ctx.drawImage(cacheCanvas, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale), !0
        }, p.updateContext = function(ctx) {
            var o = this,
                mask = o.mask,
                mtx = o._props.matrix;
            mask && mask.graphics && !mask.graphics.isEmpty() && (mask.getMatrix(mtx), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty), mask.graphics.drawAsPath(ctx), ctx.clip(), mtx.invert(), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)), this.getMatrix(mtx);
            var tx = mtx.tx,
                ty = mtx.ty;
            DisplayObject._snapToPixelEnabled && o.snapToPixel && (tx = tx + (tx < 0 ? -.5 : .5) | 0, ty = ty + (ty < 0 ? -.5 : .5) | 0), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty), ctx.globalAlpha *= o.alpha, o.compositeOperation && (ctx.globalCompositeOperation = o.compositeOperation), o.shadow && this._applyShadow(ctx, o.shadow)
        }, p.cache = function(x, y, width, height, scale) {
            scale = scale || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = width, this._cacheHeight = height, this._cacheOffsetX = x, this._cacheOffsetY = y, this._cacheScale = scale, this.updateCache()
        }, p.updateCache = function(compositeOperation) {
            var cacheCanvas = this.cacheCanvas;
            if (!cacheCanvas) throw "cache() must be called before updateCache()";
            var scale = this._cacheScale,
                offX = this._cacheOffsetX * scale,
                offY = this._cacheOffsetY * scale,
                w = this._cacheWidth,
                h = this._cacheHeight,
                ctx = cacheCanvas.getContext("2d"),
                fBounds = this._getFilterBounds();
            offX += this._filterOffsetX = fBounds.x, offY += this._filterOffsetY = fBounds.y, w = Math.ceil(w * scale) + fBounds.width, h = Math.ceil(h * scale) + fBounds.height, w != cacheCanvas.width || h != cacheCanvas.height ? (cacheCanvas.width = w, cacheCanvas.height = h) : compositeOperation || ctx.clearRect(0, 0, w + 1, h + 1), ctx.save(), ctx.globalCompositeOperation = compositeOperation, ctx.setTransform(scale, 0, 0, scale, -offX, -offY), this.draw(ctx, !0), this._applyFilters(), ctx.restore(), this.cacheID = DisplayObject._nextCacheID++
        }, p.uncache = function() {
            this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
        }, p.getCacheDataURL = function() {
            return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
        }, p.localToGlobal = function(x, y, pt) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x, y, pt || new createjs.Point)
        }, p.globalToLocal = function(x, y, pt) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x, y, pt || new createjs.Point)
        }, p.localToLocal = function(x, y, target, pt) {
            return pt = this.localToGlobal(x, y, pt), target.globalToLocal(pt.x, pt.y, pt)
        }, p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            return this.x = x || 0, this.y = y || 0, this.scaleX = null == scaleX ? 1 : scaleX, this.scaleY = null == scaleY ? 1 : scaleY, this.rotation = rotation || 0, this.skewX = skewX || 0, this.skewY = skewY || 0, this.regX = regX || 0, this.regY = regY || 0, this
        }, p.getMatrix = function(matrix) {
            var o = this,
                mtx = matrix && matrix.identity() || new createjs.Matrix2D;
            return o.transformMatrix ? mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY)
        }, p.getConcatenatedMatrix = function(matrix) {
            for (var o = this, mtx = this.getMatrix(matrix); o = o.parent;) mtx.prependMatrix(o.getMatrix(o._props.matrix));
            return mtx
        }, p.getConcatenatedDisplayProps = function(props) {
            props = props ? props.identity() : new createjs.DisplayProps;
            var o = this,
                mtx = o.getMatrix(props.matrix);
            do {
                props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation), o != this && mtx.prependMatrix(o.getMatrix(o._props.matrix))
            } while (o = o.parent);
            return props
        }, p.hitTest = function(x, y) {
            var ctx = DisplayObject._hitTestContext;
            ctx.setTransform(1, 0, 0, 1, -x, -y), this.draw(ctx);
            var hit = this._testHit(ctx);
            return ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), hit
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var cacheCanvas = this.cacheCanvas;
            if (cacheCanvas) {
                var scale = this._cacheScale;
                return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale)
            }
            return null
        }, p.getTransformedBounds = function() {
            return this._getBounds()
        }, p.setBounds = function(x, y, width, height) {
            null == x && (this._bounds = x), this._bounds = (this._bounds || new createjs.Rectangle).setValues(x, y, width, height)
        }, p.clone = function() {
            return this._cloneProps(new DisplayObject)
        }, p.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]"
        }, p._cloneProps = function(o) {
            return o.alpha = this.alpha, o.mouseEnabled = this.mouseEnabled, o.tickEnabled = this.tickEnabled, o.name = this.name, o.regX = this.regX, o.regY = this.regY, o.rotation = this.rotation, o.scaleX = this.scaleX, o.scaleY = this.scaleY, o.shadow = this.shadow, o.skewX = this.skewX, o.skewY = this.skewY, o.visible = this.visible, o.x = this.x, o.y = this.y, o.compositeOperation = this.compositeOperation, o.snapToPixel = this.snapToPixel, o.filters = null == this.filters ? null : this.filters.slice(0), o.mask = this.mask, o.hitArea = this.hitArea, o.cursor = this.cursor, o._bounds = this._bounds, o
        }, p._applyShadow = function(ctx, shadow) {
            shadow = shadow || Shadow.identity, ctx.shadowColor = shadow.color, ctx.shadowOffsetX = shadow.offsetX, ctx.shadowOffsetY = shadow.offsetY, ctx.shadowBlur = shadow.blur
        }, p._tick = function(evtObj) {
            var ls = this._listeners;
            ls && ls.tick && (evtObj.target = null, evtObj.propagationStopped = evtObj.immediatePropagationStopped = !1, this.dispatchEvent(evtObj))
        }, p._testHit = function(ctx) {
            try {
                var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (e) {
                if (!DisplayObject.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return hit
        }, p._applyFilters = function() {
            if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                for (var l = this.filters.length, ctx = this.cacheCanvas.getContext("2d"), w = this.cacheCanvas.width, h = this.cacheCanvas.height, i = 0; i < l; i++) this.filters[i].applyFilter(ctx, 0, 0, w, h)
        }, p._getFilterBounds = function(rect) {
            var l, filters = this.filters,
                bounds = this._rectangle.setValues(0, 0, 0, 0);
            if (!filters || !(l = filters.length)) return bounds;
            for (var i = 0; i < l; i++) {
                var f = this.filters[i];
                f.getBounds && f.getBounds(bounds)
            }
            return bounds
        }, p._getBounds = function(matrix, ignoreTransform) {
            return this._transformBounds(this.getBounds(), matrix, ignoreTransform)
        }, p._transformBounds = function(bounds, matrix, ignoreTransform) {
            if (!bounds) return bounds;
            var x = bounds.x,
                y = bounds.y,
                width = bounds.width,
                height = bounds.height,
                mtx = this._props.matrix;
            mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx), (x || y) && mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y), matrix && mtx.prependMatrix(matrix);
            var x_a = width * mtx.a,
                x_b = width * mtx.b,
                y_c = height * mtx.c,
                y_d = height * mtx.d,
                tx = mtx.tx,
                ty = mtx.ty,
                minX = tx,
                maxX = tx,
                minY = ty,
                maxY = ty;
            return (x = x_a + tx) < minX ? minX = x : x > maxX && (maxX = x), (x = x_a + y_c + tx) < minX ? minX = x : x > maxX && (maxX = x), (x = y_c + tx) < minX ? minX = x : x > maxX && (maxX = x), (y = x_b + ty) < minY ? minY = y : y > maxY && (maxY = y), (y = x_b + y_d + ty) < minY ? minY = y : y > maxY && (maxY = y), (y = y_d + ty) < minY ? minY = y : y > maxY && (maxY = y), bounds.setValues(minX, minY, maxX - minX, maxY - minY)
        }, p._hasMouseEventListener = function() {
            for (var evts = DisplayObject._MOUSE_EVENTS, i = 0, l = evts.length; i < l; i++)
                if (this.hasEventListener(evts[i])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Container() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
        }
        var p = createjs.extend(Container, createjs.DisplayObject);
        p.getNumChildren = function() {
            return this.children.length
        };
        try {
            Object.defineProperties(p, {
                numChildren: {
                    get: p.getNumChildren
                }
            })
        } catch (e) {}
        p.initialize = Container, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            for (var list = this.children.slice(), i = 0, l = list.length; i < l; i++) {
                var child = list[i];
                child.isVisible() && (ctx.save(), child.updateContext(ctx), child.draw(ctx), ctx.restore())
            }
            return !0
        }, p.addChild = function(child) {
            if (null == child) return child;
            var l = arguments.length;
            if (l > 1) {
                for (var i = 0; i < l; i++) this.addChild(arguments[i]);
                return arguments[l - 1]
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.push(child), child.dispatchEvent("added"), child
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child.dispatchEvent("added"), child
        }, p.removeChild = function(child) {
            var l = arguments.length;
            if (l > 1) {
                for (var good = !0, i = 0; i < l; i++) good = good && this.removeChild(arguments[i]);
                return good
            }
            return this.removeChildAt(createjs.indexOf(this.children, child))
        }, p.removeChildAt = function(index) {
            var l = arguments.length;
            if (l > 1) {
                for (var a = [], i = 0; i < l; i++) a[i] = arguments[i];
                a.sort(function(a, b) {
                    return b - a
                });
                var good = !0;
                for (i = 0; i < l; i++) good = good && this.removeChildAt(a[i]);
                return good
            }
            if (index < 0 || index > this.children.length - 1) return !1;
            var child = this.children[index];
            return child && (child.parent = null), this.children.splice(index, 1), child.dispatchEvent("removed"), !0
        }, p.removeAllChildren = function() {
            for (var kids = this.children; kids.length;) this.removeChildAt(0)
        }, p.getChildAt = function(index) {
            return this.children[index]
        }, p.getChildByName = function(name) {
            for (var kids = this.children, i = 0, l = kids.length; i < l; i++)
                if (kids[i].name == name) return kids[i];
            return null
        }, p.sortChildren = function(sortFunction) {
            this.children.sort(sortFunction)
        }, p.getChildIndex = function(child) {
            return createjs.indexOf(this.children, child)
        }, p.swapChildrenAt = function(index1, index2) {
            var kids = this.children,
                o1 = kids[index1],
                o2 = kids[index2];
            o1 && o2 && (kids[index1] = o2, kids[index2] = o1)
        }, p.swapChildren = function(child1, child2) {
            for (var index1, index2, kids = this.children, i = 0, l = kids.length; i < l && (kids[i] == child1 && (index1 = i), kids[i] == child2 && (index2 = i), null == index1 || null == index2); i++);
            i != l && (kids[index1] = child2, kids[index2] = child1)
        }, p.setChildIndex = function(child, index) {
            var kids = this.children,
                l = kids.length;
            if (!(child.parent != this || index < 0 || index >= l)) {
                for (var i = 0; i < l && kids[i] != child; i++);
                i != l && i != index && (kids.splice(i, 1), kids.splice(index, 0, child))
            }
        }, p.contains = function(child) {
            for (; child;) {
                if (child == this) return !0;
                child = child.parent
            }
            return !1
        }, p.hitTest = function(x, y) {
            return null != this.getObjectUnderPoint(x, y)
        }, p.getObjectsUnderPoint = function(x, y, mode) {
            var arr = [],
                pt = this.localToGlobal(x, y);
            return this._getObjectsUnderPoint(pt.x, pt.y, arr, mode > 0, 1 == mode), arr
        }, p.getObjectUnderPoint = function(x, y, mode) {
            var pt = this.localToGlobal(x, y);
            return this._getObjectsUnderPoint(pt.x, pt.y, null, mode > 0, 1 == mode)
        }, p.getBounds = function() {
            return this._getBounds(null, !0)
        }, p.getTransformedBounds = function() {
            return this._getBounds()
        }, p.clone = function(recursive) {
            var o = this._cloneProps(new Container);
            return recursive && this._cloneChildren(o), o
        }, p.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            if (this.tickChildren)
                for (var i = this.children.length - 1; i >= 0; i--) {
                    var child = this.children[i];
                    child.tickEnabled && child._tick && child._tick(evtObj)
                }
            this.DisplayObject__tick(evtObj)
        }, p._cloneChildren = function(o) {
            o.children.length && o.removeAllChildren();
            for (var arr = o.children, i = 0, l = this.children.length; i < l; i++) {
                var clone = this.children[i].clone(!0);
                clone.parent = o, arr.push(clone)
            }
        }, p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
            if (!(currentDepth = currentDepth || 0) && !this._testMask(this, x, y)) return null;
            var mtx, ctx = createjs.DisplayObject._hitTestContext;
            activeListener = activeListener || mouse && this._hasMouseEventListener();
            for (var children = this.children, i = children.length - 1; i >= 0; i--) {
                var child = children[i],
                    hitArea = child.hitArea;
                if (child.visible && (hitArea || child.isVisible()) && (!mouse || child.mouseEnabled) && (hitArea || this._testMask(child, x, y)))
                    if (!hitArea && child instanceof Container) {
                        var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth + 1);
                        if (!arr && result) return mouse && !this.mouseChildren ? this : result
                    } else {
                        if (mouse && !activeListener && !child._hasMouseEventListener()) continue;
                        var props = child.getConcatenatedDisplayProps(child._props);
                        if (mtx = props.matrix, hitArea && (mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix)), props.alpha = hitArea.alpha), ctx.globalAlpha = props.alpha, ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y), (hitArea || child).draw(ctx), !this._testHit(ctx)) continue;
                        if (ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), !arr) return mouse && !this.mouseChildren ? this : child;
                        arr.push(child)
                    }
            }
            return null
        }, p._testMask = function(target, x, y) {
            var mask = target.mask;
            if (!mask || !mask.graphics || mask.graphics.isEmpty()) return !0;
            var mtx = this._props.matrix,
                parent = target.parent;
            mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity(), mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
            var ctx = createjs.DisplayObject._hitTestContext;
            return ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y), mask.graphics.drawAsPath(ctx), ctx.fillStyle = "#000", ctx.fill(), !!this._testHit(ctx) && (ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), !0)
        }, p._getBounds = function(matrix, ignoreTransform) {
            var bounds = this.DisplayObject_getBounds();
            if (bounds) return this._transformBounds(bounds, matrix, ignoreTransform);
            var mtx = this._props.matrix;
            mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx), matrix && mtx.prependMatrix(matrix);
            for (var l = this.children.length, rect = null, i = 0; i < l; i++) {
                var child = this.children[i];
                if (!child || this.children.length !== l) {
                    if (!this._infinityLoopProtection) return this._infinityLoopProtection = !0, this._getBounds(matrix, ignoreTransform);
                    console.warn("Serious problem - looped more than once, please investigate me!")
                }
                child.visible && (bounds = child._getBounds(mtx)) && (rect ? rect.extend(bounds.x, bounds.y, bounds.width, bounds.height) : rect = bounds.clone())
            }
            return this._infinityLoopProtection = !1, rect
        }, createjs.Container = createjs.promote(Container, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Stage(canvas) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof canvas ? document.getElementById(canvas) : canvas, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
        }
        var p = createjs.extend(Stage, createjs.Container);
        p._get_nextStage = function() {
            return this._nextStage
        }, p._set_nextStage = function(value) {
            this._nextStage && (this._nextStage._prevStage = null), value && (value._prevStage = this), this._nextStage = value
        };
        try {
            Object.defineProperties(p, {
                nextStage: {
                    get: p._get_nextStage,
                    set: p._set_nextStage
                }
            })
        } catch (e) {}
        p.update = function(props) {
            if (this.canvas && (this.tickOnUpdate && this.tick(props), !1 !== this.dispatchEvent("drawstart", !1, !0))) {
                createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
                var r = this.drawRect,
                    ctx = this.canvas.getContext("2d");
                ctx.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (r ? ctx.clearRect(r.x, r.y, r.width, r.height) : ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), ctx.save(), this.drawRect && (ctx.beginPath(), ctx.rect(r.x, r.y, r.width, r.height), ctx.clip()), this.updateContext(ctx), this.draw(ctx, !1), ctx.restore(), this.dispatchEvent("drawend")
            }
        }, p.tick = function(props) {
            if (this.tickEnabled && !1 !== this.dispatchEvent("tickstart", !1, !0)) {
                var evtObj = new createjs.Event("tick");
                if (props)
                    for (var n in props) props.hasOwnProperty(n) && (evtObj[n] = props[n]);
                this._tick(evtObj), this.dispatchEvent("tickend")
            }
        }, p.handleEvent = function(evt) {
            "tick" == evt.type && this.update(evt)
        }, p.clear = function() {
            if (this.canvas) {
                var ctx = this.canvas.getContext("2d");
                ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, p.toDataURL = function(backgroundColor, mimeType) {
            var data, ctx = this.canvas.getContext("2d"),
                w = this.canvas.width,
                h = this.canvas.height;
            if (backgroundColor) {
                data = ctx.getImageData(0, 0, w, h);
                var compositeOperation = ctx.globalCompositeOperation;
                ctx.globalCompositeOperation = "destination-over", ctx.fillStyle = backgroundColor, ctx.fillRect(0, 0, w, h)
            }
            var dataURL = this.canvas.toDataURL(mimeType || "image/png");
            return backgroundColor && (ctx.putImageData(data, 0, 0), ctx.globalCompositeOperation = compositeOperation), dataURL
        }, p.enableMouseOver = function(frequency) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == frequency && this._testMouseOver(!0)), null == frequency) frequency = 20;
            else if (frequency <= 0) return;
            var o = this;
            this._mouseOverIntervalID = setInterval(function() {
                o._testMouseOver()
            }, 1e3 / Math.min(50, frequency))
        }, p.enableDOMEvents = function(enable) {
            null == enable && (enable = !0);
            var n, o, ls = this._eventListeners;
            if (!enable && ls) {
                for (n in ls)(o = ls[n]).t.removeEventListener(n, o.f, !1);
                this._eventListeners = null
            } else if (enable && !ls && this.canvas) {
                var t = window.addEventListener ? window : document,
                    _this = this;
                (ls = this._eventListeners = {}).mouseup = {
                    t: t,
                    f: function(e) {
                        _this._handleMouseUp(e)
                    }
                }, ls.mousemove = {
                    t: t,
                    f: function(e) {
                        _this._handleMouseMove(e)
                    }
                }, ls.dblclick = {
                    t: this.canvas,
                    f: function(e) {
                        _this._handleDoubleClick(e)
                    }
                }, ls.mousedown = {
                    t: this.canvas,
                    f: function(e) {
                        _this._handleMouseDown(e)
                    }
                };
                for (n in ls)(o = ls[n]).t.addEventListener(n, o.f, !1)
            }
        }, p.clone = function() {
            throw "Stage cannot be cloned."
        }, p.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, p._getElementRect = function(e) {
            var bounds;
            try {
                bounds = e.getBoundingClientRect()
            } catch (err) {
                bounds = {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                styles = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle,
                padL = parseInt(styles.paddingLeft) + parseInt(styles.borderLeftWidth),
                padT = parseInt(styles.paddingTop) + parseInt(styles.borderTopWidth),
                padR = parseInt(styles.paddingRight) + parseInt(styles.borderRightWidth),
                padB = parseInt(styles.paddingBottom) + parseInt(styles.borderBottomWidth);
            return {
                left: bounds.left + offX + padL,
                right: bounds.right + offX - padR,
                top: bounds.top + offY + padT,
                bottom: bounds.bottom + offY - padB
            }
        }, p._getPointerData = function(id) {
            var data = this._pointerData[id];
            return data || (data = this._pointerData[id] = {
                x: 0,
                y: 0
            }), data
        }, p._handleMouseMove = function(e) {
            e || (e = window.event), this._handlePointerMove(-1, e, e.pageX, e.pageY)
        }, p._handlePointerMove = function(id, e, pageX, pageY, owner) {
            if ((!this._prevStage || void 0 !== owner) && this.canvas) {
                var nextStage = this._nextStage,
                    o = this._getPointerData(id),
                    inBounds = o.inBounds;
                this._updatePointerPosition(id, e, pageX, pageY), (inBounds || o.inBounds || this.mouseMoveOutside) && (-1 === id && o.inBounds == !inBounds && this._dispatchMouseEvent(this, inBounds ? "mouseleave" : "mouseenter", !1, id, o, e), this._dispatchMouseEvent(this, "stagemousemove", !1, id, o, e), this._dispatchMouseEvent(o.target, "pressmove", !0, id, o, e)), nextStage && nextStage._handlePointerMove(id, e, pageX, pageY, null)
            }
        }, p._updatePointerPosition = function(id, e, pageX, pageY) {
            var rect = this._getElementRect(this.canvas);
            pageX -= rect.left, pageY -= rect.top;
            var w = this.canvas.width,
                h = this.canvas.height;
            pageX /= (rect.right - rect.left) / w, pageY /= (rect.bottom - rect.top) / h;
            var o = this._getPointerData(id);
            (o.inBounds = pageX >= 0 && pageY >= 0 && pageX <= w - 1 && pageY <= h - 1) ? (o.x = pageX, o.y = pageY) : this.mouseMoveOutside && (o.x = pageX < 0 ? 0 : pageX > w - 1 ? w - 1 : pageX, o.y = pageY < 0 ? 0 : pageY > h - 1 ? h - 1 : pageY), o.posEvtObj = e, o.rawX = pageX, o.rawY = pageY, id !== this._primaryPointerID && -1 !== id || (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds)
        }, p._handleMouseUp = function(e) {
            this._handlePointerUp(-1, e, !1)
        }, p._handlePointerUp = function(id, e, clear, owner) {
            var nextStage = this._nextStage,
                o = this._getPointerData(id);
            if (!this._prevStage || void 0 !== owner) {
                var target = null,
                    oTarget = o.target;
                owner || !oTarget && !nextStage || (target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, id, o, e, target), o.down = !1), target == oTarget && this._dispatchMouseEvent(oTarget, "click", !0, id, o, e), this._dispatchMouseEvent(oTarget, "pressup", !0, id, o, e), clear ? (id == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[id]) : o.target = null, nextStage && nextStage._handlePointerUp(id, e, clear, owner || target && this)
            }
        }, p._handleMouseDown = function(e) {
            this._handlePointerDown(-1, e, e.pageX, e.pageY)
        }, p._handlePointerDown = function(id, e, pageX, pageY, owner) {
            this.preventSelection && e.preventDefault(), null != this._primaryPointerID && -1 !== id || (this._primaryPointerID = id), null != pageY && this._updatePointerPosition(id, e, pageX, pageY);
            var target = null,
                nextStage = this._nextStage,
                o = this._getPointerData(id);
            owner || (target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, id, o, e, target), o.down = !0), this._dispatchMouseEvent(target, "mousedown", !0, id, o, e), nextStage && nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this)
        }, p._testMouseOver = function(clear, owner, eventTarget) {
            if (!this._prevStage || void 0 !== owner) {
                var nextStage = this._nextStage;
                if (this._mouseOverIntervalID) {
                    var o = this._getPointerData(-1);
                    if (o && (clear || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                        var t, i, l, e = o.posEvtObj,
                            isEventTarget = eventTarget || e && e.target == this.canvas,
                            target = null,
                            common = -1,
                            cursor = "";
                        !owner && (clear || this.mouseInBounds && isEventTarget) && (target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                        var oldList = this._mouseOverTarget || [],
                            oldTarget = oldList[oldList.length - 1],
                            list = this._mouseOverTarget = [];
                        for (t = target; t;) list.unshift(t), cursor || (cursor = t.cursor), t = t.parent;
                        for (this.canvas.style.cursor = cursor, !owner && eventTarget && (eventTarget.canvas.style.cursor = cursor), i = 0, l = list.length; i < l && list[i] == oldList[i]; i++) common = i;
                        for (oldTarget != target && this._dispatchMouseEvent(oldTarget, "mouseout", !0, -1, o, e, target), i = oldList.length - 1; i > common; i--) this._dispatchMouseEvent(oldList[i], "rollout", !1, -1, o, e, target);
                        for (i = list.length - 1; i > common; i--) this._dispatchMouseEvent(list[i], "rollover", !1, -1, o, e, oldTarget);
                        oldTarget != target && this._dispatchMouseEvent(target, "mouseover", !0, -1, o, e, oldTarget), nextStage && nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this)
                    }
                } else nextStage && nextStage._testMouseOver(clear, owner, eventTarget)
            }
        }, p._handleDoubleClick = function(e, owner) {
            var target = null,
                nextStage = this._nextStage,
                o = this._getPointerData(-1);
            owner || (target = this._getObjectsUnderPoint(o.x, o.y, null, !0), this._dispatchMouseEvent(target, "dblclick", !0, -1, o, e)), nextStage && nextStage._handleDoubleClick(e, owner || target && this)
        }, p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
            if (target && (bubbles || target.hasEventListener(type))) {
                var evt = new createjs.MouseEvent(type, bubbles, !1, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || -1 === pointerId, o.rawX, o.rawY, relatedTarget);
                target.dispatchEvent(evt)
            }
        }, createjs.Stage = createjs.promote(Stage, "Container")
    }(),
    function() {
        function Bitmap(imageOrUri) {
            this.DisplayObject_constructor(), "string" == typeof imageOrUri ? (this.image = document.createElement("img"), this.image.src = imageOrUri) : this.image = imageOrUri, this.sourceRect = null
        }
        var p = createjs.extend(Bitmap, createjs.DisplayObject);
        p.initialize = Bitmap, p.isVisible = function() {
            var image = this.image,
                hasContent = this.cacheCanvas || image && (image.naturalWidth || image.getContext || image.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) return !0;
            var img = this.image,
                rect = this.sourceRect;
            if (rect) {
                var x1 = rect.x,
                    y1 = rect.y,
                    x2 = x1 + rect.width,
                    y2 = y1 + rect.height,
                    x = 0,
                    y = 0,
                    w = img.width,
                    h = img.height;
                x1 < 0 && (x -= x1, x1 = 0), x2 > w && (x2 = w), y1 < 0 && (y -= y1, y1 = 0), y2 > h && (y2 = h), ctx.drawImage(img, x1, y1, x2 - x1, y2 - y1, x, y, x2 - x1, y2 - y1)
            } else ctx.drawImage(img, 0, 0);
            return !0
        }, p.getBounds = function() {
            var rect = this.DisplayObject_getBounds();
            if (rect) return rect;
            var image = this.image,
                o = this.sourceRect || image;
            return image && (image.naturalWidth || image.getContext || image.readyState >= 2) ? this._rectangle.setValues(0, 0, o.width, o.height) : null
        }, p.clone = function() {
            var o = new Bitmap(this.image);
            return this.sourceRect && (o.sourceRect = this.sourceRect.clone()), this._cloneProps(o), o
        }, p.toString = function() {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Sprite(spriteSheet, frameOrAnimation) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = spriteSheet, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != frameOrAnimation && this.gotoAndPlay(frameOrAnimation)
        }
        var p = createjs.extend(Sprite, createjs.DisplayObject);
        p.initialize = Sprite, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            this._normalizeFrame();
            var o = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!o) return !1;
            var rect = o.rect;
            return rect.width && rect.height && ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height), !0
        }, p.play = function() {
            this.paused = !1
        }, p.stop = function() {
            this.paused = !0
        }, p.gotoAndPlay = function(frameOrAnimation) {
            this.paused = !1, this._skipAdvance = !0, this._goto(frameOrAnimation)
        }, p.gotoAndStop = function(frameOrAnimation) {
            this.paused = !0, this._goto(frameOrAnimation)
        }, p.advance = function(time) {
            var fps = this.framerate || this.spriteSheet.framerate,
                t = fps && null != time ? time / (1e3 / fps) : 1;
            this._normalizeFrame(t)
        }, p.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, p.clone = function() {
            return this._cloneProps(new Sprite(this.spriteSheet))
        }, p.toString = function() {
            return "[Sprite (name=" + this.name + ")]"
        }, p._cloneProps = function(o) {
            return this.DisplayObject__cloneProps(o), o.currentFrame = this.currentFrame, o.currentAnimation = this.currentAnimation, o.paused = this.paused, o.currentAnimationFrame = this.currentAnimationFrame, o.framerate = this.framerate, o._animation = this._animation, o._currentFrame = this._currentFrame, o._skipAdvance = this._skipAdvance, o
        }, p._tick = function(evtObj) {
            this.paused || (this._skipAdvance || this.advance(evtObj && evtObj.delta), this._skipAdvance = !1), this.DisplayObject__tick(evtObj)
        }, p._normalizeFrame = function(frameDelta) {
            frameDelta = frameDelta || 0;
            var l, animation = this._animation,
                paused = this.paused,
                frame = this._currentFrame;
            if (animation) {
                var speed = animation.speed || 1,
                    animFrame = this.currentAnimationFrame;
                if (l = animation.frames.length, animFrame + frameDelta * speed >= l) {
                    var next = animation.next;
                    if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) return;
                    if (next) return this._goto(next, frameDelta - (l - animFrame) / speed);
                    this.paused = !0, animFrame = animation.frames.length - 1
                } else animFrame += frameDelta * speed;
                this.currentAnimationFrame = animFrame, this._currentFrame = animation.frames[0 | animFrame]
            } else if (frame = this._currentFrame += frameDelta, l = this.spriteSheet.getNumFrames(), frame >= l && l > 0 && !this._dispatchAnimationEnd(animation, frame, paused, l - 1) && (this._currentFrame -= l) >= l) return this._normalizeFrame();
            frame = 0 | this._currentFrame, this.currentFrame != frame && (this.currentFrame = frame, this.dispatchEvent("change"))
        }, p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
            var name = animation ? animation.name : null;
            if (this.hasEventListener("animationend")) {
                var evt = new createjs.Event("animationend");
                evt.name = name, evt.next = next, this.dispatchEvent(evt)
            }
            var changed = this._animation != animation || this._currentFrame != frame;
            return changed || paused || !this.paused || (this.currentAnimationFrame = end, changed = !0), changed
        }, p._goto = function(frameOrAnimation, frame) {
            if (this.currentAnimationFrame = 0, isNaN(frameOrAnimation)) {
                var data = this.spriteSheet.getAnimation(frameOrAnimation);
                data && (this._animation = data, this.currentAnimation = frameOrAnimation, this._normalizeFrame(frame))
            } else this.currentAnimation = this._animation = null, this._currentFrame = frameOrAnimation, this._normalizeFrame()
        }, createjs.Sprite = createjs.promote(Sprite, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Shape(graphics) {
            this.DisplayObject_constructor(), this.graphics = graphics || new createjs.Graphics
        }
        var p = createjs.extend(Shape, createjs.DisplayObject);
        p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            return !!this.DisplayObject_draw(ctx, ignoreCache) || (this.graphics.draw(ctx, this), !0)
        }, p.clone = function(recursive) {
            var g = recursive && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new Shape(g))
        }, p.toString = function() {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = createjs.promote(Shape, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Text(text, font, color) {
            this.DisplayObject_constructor(), this.text = text, this.font = font, this.color = color, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
        }
        var p = createjs.extend(Text, createjs.DisplayObject),
            canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (Text._workingContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), Text.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, Text.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, p.isVisible = function() {
            var hasContent = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            var col = this.color || "#000";
            return this.outline ? (ctx.strokeStyle = col, ctx.lineWidth = 1 * this.outline) : ctx.fillStyle = col, this._drawText(this._prepContext(ctx)), !0
        }, p.getMeasuredWidth = function() {
            return this._getMeasuredWidth(this.text)
        }, p.getMeasuredLineHeight = function() {
            return 1.2 * this._getMeasuredWidth("M")
        }, p.getMeasuredHeight = function() {
            return this._drawText(null, {}).height
        }, p.getBounds = function() {
            var rect = this.DisplayObject_getBounds();
            if (rect) return rect;
            if (null == this.text || "" === this.text) return null;
            var o = this._drawText(null, {}),
                w = this.maxWidth && this.maxWidth < o.width ? this.maxWidth : o.width,
                x = w * Text.H_OFFSETS[this.textAlign || "left"],
                y = (this.lineHeight || this.getMeasuredLineHeight()) * Text.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(x, y, w, o.height)
        }, p.getMetrics = function() {
            var o = {
                lines: []
            };
            return o.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, o, o.lines)
        }, p.clone = function() {
            return this._cloneProps(new Text(this.text, this.font, this.color))
        }, p.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, p._cloneProps = function(o) {
            return this.DisplayObject__cloneProps(o), o.textAlign = this.textAlign, o.textBaseline = this.textBaseline, o.maxWidth = this.maxWidth, o.outline = this.outline, o.lineHeight = this.lineHeight, o.lineWidth = this.lineWidth, o
        }, p._prepContext = function(ctx) {
            return ctx.font = this.font || "10px sans-serif", ctx.textAlign = this.textAlign || "left", ctx.textBaseline = this.textBaseline || "top", ctx
        }, p._drawText = function(ctx, o, lines) {
            var paint = !!ctx;
            paint || ((ctx = Text._workingContext).save(), this._prepContext(ctx));
            for (var lineHeight = this.lineHeight || this.getMeasuredLineHeight(), maxW = 0, count = 0, hardLines = String(this.text).split(/(?:\r\n|\r|\n)/), i = 0, l = hardLines.length; i < l; i++) {
                var str = hardLines[i],
                    w = null;
                if (null != this.lineWidth && (w = ctx.measureText(str).width) > this.lineWidth) {
                    var words = str.split(/(\s)/);
                    str = words[0], w = ctx.measureText(str).width;
                    for (var j = 1, jl = words.length; j < jl; j += 2) {
                        var wordW = ctx.measureText(words[j] + words[j + 1]).width;
                        w + wordW > this.lineWidth ? (paint && this._drawTextLine(ctx, str, count * lineHeight), lines && lines.push(str), w > maxW && (maxW = w), str = words[j + 1], w = ctx.measureText(str).width, count++) : (str += words[j] + words[j + 1], w += wordW)
                    }
                }
                paint && this._drawTextLine(ctx, str, count * lineHeight), lines && lines.push(str), o && null == w && (w = ctx.measureText(str).width), w > maxW && (maxW = w), count++
            }
            return o && (o.width = maxW, o.height = count * lineHeight), paint || ctx.restore(), o
        }, p._drawTextLine = function(ctx, text, y) {
            this.outline ? ctx.strokeText(text, 0, y, this.maxWidth || 65535) : ctx.fillText(text, 0, y, this.maxWidth || 65535)
        }, p._getMeasuredWidth = function(text) {
            var ctx = Text._workingContext;
            ctx.save();
            var w = this._prepContext(ctx).measureText(text).width;
            return ctx.restore(), w
        }, createjs.Text = createjs.promote(Text, "DisplayObject")
    }(),
    function() {
        "use strict";

        function BitmapText(text, spriteSheet) {
            this.Container_constructor(), this.text = text || "", this.spriteSheet = spriteSheet, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
                text: 0,
                spriteSheet: 0,
                lineHeight: 0,
                letterSpacing: 0,
                spaceWidth: 0
            }
        }
        var p = createjs.extend(BitmapText, createjs.Container);
        BitmapText.maxPoolSize = 100, BitmapText._spritePool = [], p.draw = function(ctx, ignoreCache) {
            this.DisplayObject_draw(ctx, ignoreCache) || (this._updateText(), this.Container_draw(ctx, ignoreCache))
        }, p.getBounds = function() {
            return this._updateText(), this.Container_getBounds()
        }, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && hasContent)
        }, p.clone = function() {
            return this._cloneProps(new BitmapText(this.text, this.spriteSheet))
        }, p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {}, p._cloneProps = function(o) {
            return this.Container__cloneProps(o), o.lineHeight = this.lineHeight, o.letterSpacing = this.letterSpacing, o.spaceWidth = this.spaceWidth, o
        }, p._getFrameIndex = function(character, spriteSheet) {
            var c, o = spriteSheet.getAnimation(character);
            return o || (character != (c = character.toUpperCase()) || character != (c = character.toLowerCase()) || (c = null), c && (o = spriteSheet.getAnimation(c))), o && o.frames[0]
        }, p._getFrame = function(character, spriteSheet) {
            var index = this._getFrameIndex(character, spriteSheet);
            return null == index ? index : spriteSheet.getFrame(index)
        }, p._getLineHeight = function(ss) {
            var frame = this._getFrame("1", ss) || this._getFrame("T", ss) || this._getFrame("L", ss) || ss.getFrame(0);
            return frame ? frame.rect.height : 1
        }, p._getSpaceWidth = function(ss) {
            var frame = this._getFrame("1", ss) || this._getFrame("l", ss) || this._getFrame("e", ss) || this._getFrame("a", ss) || ss.getFrame(0);
            return frame ? frame.rect.width : 1
        }, p._updateText = function() {
            var sprite, x = 0,
                y = 0,
                o = this._oldProps,
                change = !1,
                spaceW = this.spaceWidth,
                lineH = this.lineHeight,
                ss = this.spriteSheet,
                pool = BitmapText._spritePool,
                kids = this.children,
                childIndex = 0,
                numKids = kids.length;
            for (var n in o) o[n] != this[n] && (o[n] = this[n], change = !0);
            if (change) {
                var hasSpace = !!this._getFrame(" ", ss);
                hasSpace || spaceW || (spaceW = this._getSpaceWidth(ss)), lineH || (lineH = this._getLineHeight(ss));
                for (var i = 0, l = this.text.length; i < l; i++) {
                    var character = this.text.charAt(i);
                    if (" " != character || hasSpace)
                        if ("\n" != character && "\r" != character) {
                            var index = this._getFrameIndex(character, ss);
                            null != index && (childIndex < numKids ? sprite = kids[childIndex] : (kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite), sprite.parent = this, numKids++), sprite.spriteSheet = ss, sprite.gotoAndStop(index), sprite.x = x, sprite.y = y, childIndex++, x += sprite.getBounds().width + this.letterSpacing)
                        } else "\r" == character && "\n" == this.text.charAt(i + 1) && i++, x = 0, y += lineH;
                    else x += spaceW
                }
                for (; numKids > childIndex;) pool.push(sprite = kids.pop()), sprite.parent = null, numKids--;
                pool.length > BitmapText.maxPoolSize && (pool.length = BitmapText.maxPoolSize)
            }
        }, createjs.BitmapText = createjs.promote(BitmapText, "Container")
    }(),
    function() {
        "use strict";

        function MovieClip(mode, startPosition, loop, labels) {
            this.Container_constructor(), !MovieClip.inited && MovieClip.init(), this.mode = mode || MovieClip.INDEPENDENT, this.startPosition = startPosition || 0, this.loop = loop, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, labels, {
                paused: !0,
                position: startPosition,
                useTicks: !0
            }), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
        }

        function MovieClipPlugin() {
            throw "MovieClipPlugin cannot be instantiated."
        }
        var p = createjs.extend(MovieClip, createjs.Container);
        MovieClip.INDEPENDENT = "independent", MovieClip.SINGLE_FRAME = "single", MovieClip.SYNCHED = "synched", MovieClip.inited = !1, MovieClip.init = function() {
            MovieClip.inited || (MovieClipPlugin.install(), MovieClip.inited = !0)
        }, p.getLabels = function() {
            return this.timeline.getLabels()
        }, p.getCurrentLabel = function() {
            return this._updateTimeline(), this.timeline.getCurrentLabel()
        }, p.getDuration = function() {
            return this.timeline.duration
        };
        try {
            Object.defineProperties(p, {
                labels: {
                    get: p.getLabels
                },
                currentLabel: {
                    get: p.getCurrentLabel
                },
                totalFrames: {
                    get: p.getDuration
                },
                duration: {
                    get: p.getDuration
                }
            })
        } catch (e) {}
        p.initialize = MovieClip, p.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, p.draw = function(ctx, ignoreCache) {
            return !!this.DisplayObject_draw(ctx, ignoreCache) || (this._updateTimeline(), this.Container_draw(ctx, ignoreCache), !0)
        }, p.play = function() {
            this.paused = !1
        }, p.stop = function() {
            this.paused = !0
        }, p.gotoAndPlay = function(positionOrLabel) {
            this.paused = !1, this._goto(positionOrLabel)
        }, p.gotoAndStop = function(positionOrLabel) {
            this.paused = !0, this._goto(positionOrLabel)
        }, p.advance = function(time) {
            var independent = MovieClip.INDEPENDENT;
            if (this.mode == independent) {
                for (var o = this, fps = o.framerate;
                    (o = o.parent) && null == fps;) o.mode == independent && (fps = o._framerate);
                this._framerate = fps;
                var t = null != fps && -1 != fps && null != time ? time / (1e3 / fps) + this._t : 1,
                    frames = 0 | t;
                for (this._t = t - frames; !this.paused && frames--;) this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
            }
        }, p.clone = function() {
            throw "MovieClip cannot be cloned."
        }, p.toString = function() {
            return "[MovieClip (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            this.advance(evtObj && evtObj.delta), this.Container__tick(evtObj)
        }, p._goto = function(positionOrLabel) {
            var pos = this.timeline.resolve(positionOrLabel);
            null != pos && (-1 == this._prevPos && (this._prevPos = NaN), this._prevPosition = pos, this._t = 0, this._updateTimeline())
        }, p._reset = function() {
            this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, p._updateTimeline = function() {
            var tl = this.timeline,
                synched = this.mode != MovieClip.INDEPENDENT;
            tl.loop = null == this.loop || this.loop;
            var pos = synched ? this.startPosition + (this.mode == MovieClip.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition,
                mode = synched || !this.actionsEnabled ? createjs.Tween.NONE : null;
            if (this.currentFrame = tl._calcPosition(pos), tl.setPosition(pos, mode), this._prevPosition = tl._prevPosition, this._prevPos != tl._prevPos) {
                this.currentFrame = this._prevPos = tl._prevPos;
                for (var n in this._managed) this._managed[n] = 1;
                for (var tweens = tl._tweens, i = 0, l = tweens.length; i < l; i++) {
                    var tween = tweens[i],
                        target = tween._target;
                    if (target != this && !tween.passive) {
                        var offset = tween._stepPosition;
                        target instanceof createjs.DisplayObject ? this._addManagedChild(target, offset) : this._setState(target.state, offset)
                    }
                }
                var kids = this.children;
                for (i = kids.length - 1; i >= 0; i--) {
                    var id = kids[i].id;
                    1 == this._managed[id] && (this.removeChildAt(i), delete this._managed[id])
                }
            }
        }, p._setState = function(state, offset) {
            if (state)
                for (var i = state.length - 1; i >= 0; i--) {
                    var o = state[i],
                        target = o.t,
                        props = o.p;
                    for (var n in props) target[n] = props[n];
                    this._addManagedChild(target, offset)
                }
        }, p._addManagedChild = function(child, offset) {
            child._off || (this.addChildAt(child, 0), child instanceof MovieClip && (child._synchOffset = offset, child.mode == MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id] && child._reset()), this._managed[child.id] = 2)
        }, p._getBounds = function(matrix, ignoreTransform) {
            var bounds = this.DisplayObject_getBounds();
            return bounds || (this._updateTimeline(), this.frameBounds && (bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]))), bounds ? this._transformBounds(bounds, matrix, ignoreTransform) : this.Container__getBounds(matrix, ignoreTransform)
        }, createjs.MovieClip = createjs.promote(MovieClip, "Container"), MovieClipPlugin.priority = 100, MovieClipPlugin.install = function() {
            createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"])
        }, MovieClipPlugin.init = function(tween, prop, value) {
            return value
        }, MovieClipPlugin.step = function() {}, MovieClipPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
            return tween.target instanceof MovieClip ? 1 == ratio ? endValues[prop] : startValues[prop] : value
        }
    }(),
    function() {
        "use strict";

        function SpriteSheetUtils() {
            throw "SpriteSheetUtils cannot be instantiated"
        }
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (SpriteSheetUtils._workingCanvas = canvas, SpriteSheetUtils._workingContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
            if (horizontal || vertical || both) {
                var count = 0;
                horizontal && SpriteSheetUtils._flip(spriteSheet, ++count, !0, !1), vertical && SpriteSheetUtils._flip(spriteSheet, ++count, !1, !0), both && SpriteSheetUtils._flip(spriteSheet, ++count, !0, !0)
            }
        }, SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
            isNaN(frameOrAnimation) && (frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0]);
            var data = spriteSheet.getFrame(frameOrAnimation);
            if (!data) return null;
            var r = data.rect,
                canvas = SpriteSheetUtils._workingCanvas;
            canvas.width = r.width, canvas.height = r.height, SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
            var img = document.createElement("img");
            return img.src = canvas.toDataURL("image/png"), img
        }, SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
            canvas || (canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), canvas.width = Math.max(alphaImage.width, rgbImage.width), canvas.height = Math.max(alphaImage.height, rgbImage.height);
            var ctx = canvas.getContext("2d");
            return ctx.save(), ctx.drawImage(rgbImage, 0, 0), ctx.globalCompositeOperation = "destination-in", ctx.drawImage(alphaImage, 0, 0), ctx.restore(), canvas
        }, SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
            for (var imgs = spriteSheet._images, canvas = SpriteSheetUtils._workingCanvas, ctx = SpriteSheetUtils._workingContext, il = imgs.length / count, i = 0; i < il; i++) {
                var src = imgs[i];
                src.__tmp = i, ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1), canvas.width = src.width, canvas.height = src.height, ctx.setTransform(h ? -1 : 1, 0, 0, v ? -1 : 1, h ? src.width : 0, v ? src.height : 0), ctx.drawImage(src, 0, 0);
                var img = document.createElement("img");
                img.src = canvas.toDataURL("image/png"), img.width = src.width, img.height = src.height, imgs.push(img)
            }
            var frames = spriteSheet._frames,
                fl = frames.length / count;
            for (i = 0; i < fl; i++) {
                var rect = (src = frames[i]).rect.clone(),
                    frame = {
                        image: img = imgs[src.image.__tmp + il * count],
                        rect: rect,
                        regX: src.regX,
                        regY: src.regY
                    };
                h && (rect.x = img.width - rect.x - rect.width, frame.regX = rect.width - src.regX), v && (rect.y = img.height - rect.y - rect.height, frame.regY = rect.height - src.regY), frames.push(frame)
            }
            var sfx = "_" + (h ? "h" : "") + (v ? "v" : ""),
                names = spriteSheet._animations,
                data = spriteSheet._data,
                al = names.length / count;
            for (i = 0; i < al; i++) {
                var name = names[i],
                    anim = {
                        name: name + sfx,
                        speed: (src = data[name]).speed,
                        next: src.next,
                        frames: []
                    };
                src.next && (anim.next += sfx);
                for (var j = 0, l = (frames = src.frames).length; j < l; j++) anim.frames.push(frames[j] + fl * count);
                data[anim.name] = anim, names.push(anim.name)
            }
        }, createjs.SpriteSheetUtils = SpriteSheetUtils
    }(),
    function() {
        "use strict";

        function SpriteSheetBuilder(framerate) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = framerate || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
        }
        var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);
        SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", SpriteSheetBuilder.ERR_RUNNING = "a build is already running", p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            var rect = sourceRect || source.bounds || source.nominalBounds;
            return !rect && source.getBounds && (rect = source.getBounds()), rect ? (scale = scale || 1, this._frames.push({
                source: source,
                sourceRect: rect,
                scale: scale,
                funct: setupFunction,
                data: setupData,
                index: this._frames.length,
                height: rect.height * scale
            }) - 1) : null
        }, p.addAnimation = function(name, frames, next, speed) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            this._animations[name] = {
                frames: frames,
                next: next,
                speed: speed
            }
        }, p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            var rects = source.frameBounds,
                rect = sourceRect || source.bounds || source.nominalBounds;
            if (!rect && source.getBounds && (rect = source.getBounds()), rect || rects) {
                var i, l, baseFrameIndex = this._frames.length,
                    duration = source.timeline.duration;
                for (i = 0; i < duration; i++) {
                    var r = rects && rects[i] ? rects[i] : rect;
                    this.addFrame(source, r, scale, this._setupMovieClipFrame, {
                        i: i,
                        f: setupFunction,
                        d: setupData
                    })
                }
                var labels = source.timeline._labels,
                    lbls = [];
                for (var n in labels) lbls.push({
                    index: labels[n],
                    label: n
                });
                if (lbls.length)
                    for (lbls.sort(function(a, b) {
                            return a.index - b.index
                        }), i = 0, l = lbls.length; i < l; i++) {
                        for (var label = lbls[i].label, start = baseFrameIndex + lbls[i].index, end = baseFrameIndex + (i == l - 1 ? duration : lbls[i + 1].index), frames = [], j = start; j < end; j++) frames.push(j);
                        labelFunction && !(label = labelFunction(label, source, start, end)) || this.addAnimation(label, frames, !0)
                    }
            }
        }, p.build = function() {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, p.buildAsync = function(timeSlice) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            this.timeSlice = timeSlice, this._startBuild();
            var _this = this;
            this._timerID = setTimeout(function() {
                _this._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, p.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null
        }, p.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned."
        }, p.toString = function() {
            return "[SpriteSheetBuilder]"
        }, p._startBuild = function() {
            var pad = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var dataFrames = [];
            this._data = {
                images: [],
                frames: dataFrames,
                framerate: this.framerate,
                animations: this._animations
            };
            var frames = this._frames.slice();
            if (frames.sort(function(a, b) {
                    return a.height <= b.height ? -1 : 1
                }), frames[frames.length - 1].height + 2 * pad > this.maxHeight) throw SpriteSheetBuilder.ERR_DIMENSIONS;
            for (var y = 0, x = 0, img = 0; frames.length;) {
                var o = this._fillRow(frames, y, img, dataFrames, pad);
                if (o.w > x && (x = o.w), y += o.h, !o.h || !frames.length) {
                    var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    canvas.width = this._getSize(x, this.maxWidth), canvas.height = this._getSize(y, this.maxHeight), this._data.images[img] = canvas, o.h || (x = y = 0, img++)
                }
            }
        }, p._setupMovieClipFrame = function(source, data) {
            var ae = source.actionsEnabled;
            source.actionsEnabled = !1, source.gotoAndStop(data.i), source.actionsEnabled = ae, data.f && data.f(source, data.d, data.i)
        }, p._getSize = function(size, max) {
            for (var pow = 4; Math.pow(2, ++pow) < size;);
            return Math.min(max, Math.pow(2, pow))
        }, p._fillRow = function(frames, y, img, dataFrames, pad) {
            for (var w = this.maxWidth, h = this.maxHeight - (y += pad), x = pad, height = 0, i = frames.length - 1; i >= 0; i--) {
                var frame = frames[i],
                    sc = this._scale * frame.scale,
                    rect = frame.sourceRect,
                    source = frame.source,
                    rx = Math.floor(sc * rect.x - pad),
                    ry = Math.floor(sc * rect.y - pad),
                    rh = Math.ceil(sc * rect.height + 2 * pad),
                    rw = Math.ceil(sc * rect.width + 2 * pad);
                if (rw > w) throw SpriteSheetBuilder.ERR_DIMENSIONS;
                rh > h || x + rw > w || (frame.img = img, frame.rect = new createjs.Rectangle(x, y, rw, rh), height = height || rh, frames.splice(i, 1), dataFrames[frame.index] = [x, y, rw, rh, img, Math.round(-rx + sc * source.regX - pad), Math.round(-ry + sc * source.regY - pad)], x += rw)
            }
            return {
                w: x,
                h: height
            }
        }, p._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, p._run = function() {
            for (var ts = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), t = (new Date).getTime() + ts, complete = !1; t > (new Date).getTime();)
                if (!this._drawNext()) {
                    complete = !0;
                    break
                }
            if (complete) this._endBuild();
            else {
                var _this = this;
                this._timerID = setTimeout(function() {
                    _this._run()
                }, 50 - ts)
            }
            var p = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var evt = new createjs.Event("progress");
                evt.progress = p, this.dispatchEvent(evt)
            }
        }, p._drawNext = function() {
            var frame = this._frames[this._index],
                sc = frame.scale * this._scale,
                rect = frame.rect,
                sourceRect = frame.sourceRect,
                ctx = this._data.images[frame.img].getContext("2d");
            return frame.funct && frame.funct(frame.source, frame.data), ctx.save(), ctx.beginPath(), ctx.rect(rect.x, rect.y, rect.width, rect.height), ctx.clip(), ctx.translate(Math.ceil(rect.x - sourceRect.x * sc), Math.ceil(rect.y - sourceRect.y * sc)), ctx.scale(sc, sc), frame.source.draw(ctx), ctx.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function DOMElement(htmlElement) {
            this.DisplayObject_constructor(), "string" == typeof htmlElement && (htmlElement = document.getElementById(htmlElement)), this.mouseEnabled = !1;
            var style = htmlElement.style;
            style.position = "absolute", style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%", this.htmlElement = htmlElement, this._oldProps = null
        }
        var p = createjs.extend(DOMElement, createjs.DisplayObject);
        p.isVisible = function() {
            return null != this.htmlElement
        }, p.draw = function(ctx, ignoreCache) {
            return !0
        }, p.cache = function() {}, p.uncache = function() {}, p.updateCache = function() {}, p.hitTest = function() {}, p.localToGlobal = function() {}, p.globalToLocal = function() {}, p.localToLocal = function() {}, p.clone = function() {
            throw "DOMElement cannot be cloned."
        }, p.toString = function() {
            return "[DOMElement (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            var stage = this.getStage();
            stage && stage.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(evtObj)
        }, p._handleDrawEnd = function(evt) {
            var o = this.htmlElement;
            if (o) {
                var style = o.style,
                    props = this.getConcatenatedDisplayProps(this._props),
                    mtx = props.matrix,
                    visibility = props.visible ? "visible" : "hidden";
                if (visibility != style.visibility && (style.visibility = visibility), props.visible) {
                    var oldProps = this._oldProps,
                        oldMtx = oldProps && oldProps.matrix,
                        n = 1e4;
                    if (!oldMtx || !oldMtx.equals(mtx)) {
                        var str = "matrix(" + (mtx.a * n | 0) / n + "," + (mtx.b * n | 0) / n + "," + (mtx.c * n | 0) / n + "," + (mtx.d * n | 0) / n + "," + (mtx.tx + .5 | 0);
                        style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str + "," + (mtx.ty + .5 | 0) + ")", style.MozTransform = str + "px," + (mtx.ty + .5 | 0) + "px)", oldProps || (oldProps = this._oldProps = new createjs.DisplayProps(!0, NaN)), oldProps.matrix.copy(mtx)
                    }
                    oldProps.alpha != props.alpha && (style.opacity = "" + (props.alpha * n | 0) / n, oldProps.alpha = props.alpha)
                }
            }
        }, createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Filter() {}
        var p = Filter.prototype;
        p.getBounds = function(rect) {
            return rect
        }, p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
            targetCtx = targetCtx || ctx, null == targetX && (targetX = x), null == targetY && (targetY = y);
            try {
                var imageData = ctx.getImageData(x, y, width, height)
            } catch (e) {
                return !1
            }
            return !!this._applyFilter(imageData) && (targetCtx.putImageData(imageData, targetX, targetY), !0)
        }, p.toString = function() {
            return "[Filter]"
        }, p.clone = function() {
            return new Filter
        }, p._applyFilter = function(imageData) {
            return !0
        }, createjs.Filter = Filter
    }(),
    function() {
        "use strict";

        function BlurFilter(blurX, blurY, quality) {
            (isNaN(blurX) || blurX < 0) && (blurX = 0), (isNaN(blurY) || blurY < 0) && (blurY = 0), (isNaN(quality) || quality < 1) && (quality = 1), this.blurX = 0 | blurX, this.blurY = 0 | blurY, this.quality = 0 | quality
        }
        var p = createjs.extend(BlurFilter, createjs.Filter);
        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], p.getBounds = function(rect) {
            var x = 0 | this.blurX,
                y = 0 | this.blurY;
            if (x <= 0 && y <= 0) return rect;
            var q = Math.pow(this.quality, .2);
            return (rect || new createjs.Rectangle).pad(x * q + 1, y * q + 1, x * q + 1, y * q + 1)
        }, p.clone = function() {
            return new BlurFilter(this.blurX, this.blurY, this.quality)
        }, p.toString = function() {
            return "[BlurFilter]"
        }, p._applyFilter = function(imageData) {
            var radiusX = this.blurX >> 1;
            if (isNaN(radiusX) || radiusX < 0) return !1;
            var radiusY = this.blurY >> 1;
            if (isNaN(radiusY) || radiusY < 0) return !1;
            if (0 == radiusX && 0 == radiusY) return !1;
            var iterations = this.quality;
            (isNaN(iterations) || iterations < 1) && (iterations = 1), (iterations |= 0) > 3 && (iterations = 3), iterations < 1 && (iterations = 1);
            var px = imageData.data,
                x = 0,
                y = 0,
                i = 0,
                p = 0,
                yp = 0,
                yi = 0,
                yw = 0,
                r = 0,
                g = 0,
                b = 0,
                a = 0,
                pr = 0,
                pg = 0,
                pb = 0,
                pa = 0,
                divx = radiusX + radiusX + 1 | 0,
                divy = radiusY + radiusY + 1 | 0,
                w = 0 | imageData.width,
                h = 0 | imageData.height,
                w1 = w - 1 | 0,
                h1 = h - 1 | 0,
                rxp1 = radiusX + 1 | 0,
                ryp1 = radiusY + 1 | 0,
                ssx = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sx = ssx;
            for (i = 1; i < divx; i++) sx = sx.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sx.n = ssx;
            var ssy = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sy = ssy;
            for (i = 1; i < divy; i++) sy = sy.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sy.n = ssy;
            for (var si = null, mtx = 0 | BlurFilter.MUL_TABLE[radiusX], stx = 0 | BlurFilter.SHG_TABLE[radiusX], mty = 0 | BlurFilter.MUL_TABLE[radiusY], sty = 0 | BlurFilter.SHG_TABLE[radiusY]; iterations-- > 0;) {
                yw = yi = 0;
                var ms = mtx,
                    ss = stx;
                for (y = h; --y > -1;) {
                    for (r = rxp1 * (pr = px[0 | yi]), g = rxp1 * (pg = px[yi + 1 | 0]), b = rxp1 * (pb = px[yi + 2 | 0]), a = rxp1 * (pa = px[yi + 3 | 0]), sx = ssx, i = rxp1; --i > -1;) sx.r = pr, sx.g = pg, sx.b = pb, sx.a = pa, sx = sx.n;
                    for (i = 1; i < rxp1; i++) p = yi + ((w1 < i ? w1 : i) << 2) | 0, r += sx.r = px[p], g += sx.g = px[p + 1], b += sx.b = px[p + 2], a += sx.a = px[p + 3], sx = sx.n;
                    for (si = ssx, x = 0; x < w; x++) px[yi++] = r * ms >>> ss, px[yi++] = g * ms >>> ss, px[yi++] = b * ms >>> ss, px[yi++] = a * ms >>> ss, p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n;
                    yw += w
                }
                for (ms = mty, ss = sty, x = 0; x < w; x++) {
                    for (r = ryp1 * (pr = px[yi = x << 2 | 0]) | 0, g = ryp1 * (pg = px[yi + 1 | 0]) | 0, b = ryp1 * (pb = px[yi + 2 | 0]) | 0, a = ryp1 * (pa = px[yi + 3 | 0]) | 0, sy = ssy, i = 0; i < ryp1; i++) sy.r = pr, sy.g = pg, sy.b = pb, sy.a = pa, sy = sy.n;
                    for (yp = w, i = 1; i <= radiusY; i++) yi = yp + x << 2, r += sy.r = px[yi], g += sy.g = px[yi + 1], b += sy.b = px[yi + 2], a += sy.a = px[yi + 3], sy = sy.n, i < h1 && (yp += w);
                    if (yi = x, si = ssy, iterations > 0)
                        for (y = 0; y < h; y++) px[(p = yi << 2) + 3] = pa = a * ms >>> ss, pa > 0 ? (px[p] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss) : px[p] = px[p + 1] = px[p + 2] = 0, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w;
                    else
                        for (y = 0; y < h; y++) px[(p = yi << 2) + 3] = pa = a * ms >>> ss, pa > 0 ? (pa = 255 / pa, px[p] = (r * ms >>> ss) * pa, px[p + 1] = (g * ms >>> ss) * pa, px[p + 2] = (b * ms >>> ss) * pa) : px[p] = px[p + 1] = px[p + 2] = 0, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w
                }
            }
            return !0
        }, createjs.BlurFilter = createjs.promote(BlurFilter, "Filter")
    }(),
    function() {
        "use strict";

        function AlphaMapFilter(alphaMap) {
            this.alphaMap = alphaMap, this._alphaMap = null, this._mapData = null
        }
        var p = createjs.extend(AlphaMapFilter, createjs.Filter);
        p.clone = function() {
            var o = new AlphaMapFilter(this.alphaMap);
            return o._alphaMap = this._alphaMap, o._mapData = this._mapData, o
        }, p.toString = function() {
            return "[AlphaMapFilter]"
        }, p._applyFilter = function(imageData) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var data = imageData.data, map = this._mapData, i = 0, l = data.length; i < l; i += 4) data[i + 3] = map[i] || 0;
            return !0
        }, p._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var ctx, map = this._alphaMap = this.alphaMap,
                canvas = map;
            map instanceof HTMLCanvasElement ? ctx = canvas.getContext("2d") : ((canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).width = map.width, canvas.height = map.height, (ctx = canvas.getContext("2d")).drawImage(map, 0, 0));
            try {
                var imgData = ctx.getImageData(0, 0, map.width, map.height)
            } catch (e) {
                return !1
            }
            return this._mapData = imgData.data, !0
        }, createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter")
    }(),
    function() {
        "use strict";

        function AlphaMaskFilter(mask) {
            this.mask = mask
        }
        var p = createjs.extend(AlphaMaskFilter, createjs.Filter);
        p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
            return !this.mask || (targetCtx = targetCtx || ctx, null == targetX && (targetX = x), null == targetY && (targetY = y), targetCtx.save(), ctx == targetCtx && (targetCtx.globalCompositeOperation = "destination-in", targetCtx.drawImage(this.mask, targetX, targetY), targetCtx.restore(), !0))
        }, p.clone = function() {
            return new AlphaMaskFilter(this.mask)
        }, p.toString = function() {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter")
    }(),
    function() {
        "use strict";

        function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
            this.redMultiplier = null != redMultiplier ? redMultiplier : 1, this.greenMultiplier = null != greenMultiplier ? greenMultiplier : 1, this.blueMultiplier = null != blueMultiplier ? blueMultiplier : 1, this.alphaMultiplier = null != alphaMultiplier ? alphaMultiplier : 1, this.redOffset = redOffset || 0, this.greenOffset = greenOffset || 0, this.blueOffset = blueOffset || 0, this.alphaOffset = alphaOffset || 0
        }
        var p = createjs.extend(ColorFilter, createjs.Filter);
        p.toString = function() {
            return "[ColorFilter]"
        }, p.clone = function() {
            return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, p._applyFilter = function(imageData) {
            for (var data = imageData.data, l = data.length, i = 0; i < l; i += 4) data[i] = data[i] * this.redMultiplier + this.redOffset, data[i + 1] = data[i + 1] * this.greenMultiplier + this.greenOffset, data[i + 2] = data[i + 2] * this.blueMultiplier + this.blueOffset, data[i + 3] = data[i + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0
        }, createjs.ColorFilter = createjs.promote(ColorFilter, "Filter")
    }(),
    function() {
        "use strict";

        function ColorMatrix(brightness, contrast, saturation, hue) {
            this.setColor(brightness, contrast, saturation, hue)
        }
        var p = ColorMatrix.prototype;
        ColorMatrix.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], ColorMatrix.LENGTH = (ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]).length, p.setColor = function(brightness, contrast, saturation, hue) {
            return this.reset().adjustColor(brightness, contrast, saturation, hue)
        }, p.reset = function() {
            return this.copy(ColorMatrix.IDENTITY_MATRIX)
        }, p.adjustColor = function(brightness, contrast, saturation, hue) {
            return this.adjustHue(hue), this.adjustContrast(contrast), this.adjustBrightness(brightness), this.adjustSaturation(saturation)
        }, p.adjustBrightness = function(value) {
            return 0 == value || isNaN(value) ? this : (value = this._cleanValue(value, 255), this._multiplyMatrix([1, 0, 0, 0, value, 0, 1, 0, 0, value, 0, 0, 1, 0, value, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, p.adjustContrast = function(value) {
            if (0 == value || isNaN(value)) return this;
            var x;
            return x = (value = this._cleanValue(value, 100)) < 0 ? 127 + value / 100 * 127 : 127 * (x = 0 == (x = value % 1) ? ColorMatrix.DELTA_INDEX[value] : ColorMatrix.DELTA_INDEX[value << 0] * (1 - x) + ColorMatrix.DELTA_INDEX[1 + (value << 0)] * x) + 127, this._multiplyMatrix([x / 127, 0, 0, 0, .5 * (127 - x), 0, x / 127, 0, 0, .5 * (127 - x), 0, 0, x / 127, 0, .5 * (127 - x), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.adjustSaturation = function(value) {
            if (0 == value || isNaN(value)) return this;
            var x = 1 + ((value = this._cleanValue(value, 100)) > 0 ? 3 * value / 100 : value / 100);
            return this._multiplyMatrix([.3086 * (1 - x) + x, .6094 * (1 - x), .082 * (1 - x), 0, 0, .3086 * (1 - x), .6094 * (1 - x) + x, .082 * (1 - x), 0, 0, .3086 * (1 - x), .6094 * (1 - x), .082 * (1 - x) + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.adjustHue = function(value) {
            if (0 == value || isNaN(value)) return this;
            value = this._cleanValue(value, 180) / 180 * Math.PI;
            var cosVal = Math.cos(value),
                sinVal = Math.sin(value);
            return this._multiplyMatrix([.213 + .787 * cosVal + -.213 * sinVal, .715 + -.715 * cosVal + -.715 * sinVal, .072 + -.072 * cosVal + .928 * sinVal, 0, 0, .213 + -.213 * cosVal + .143 * sinVal, .715 + cosVal * (1 - .715) + .14 * sinVal, .072 + -.072 * cosVal + -.283 * sinVal, 0, 0, .213 + -.213 * cosVal + -.787 * sinVal, .715 + -.715 * cosVal + .715 * sinVal, .072 + .928 * cosVal + .072 * sinVal, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.concat = function(matrix) {
            return (matrix = this._fixMatrix(matrix)).length != ColorMatrix.LENGTH ? this : (this._multiplyMatrix(matrix), this)
        }, p.clone = function() {
            return (new ColorMatrix).copy(this)
        }, p.toArray = function() {
            for (var arr = [], i = 0, l = ColorMatrix.LENGTH; i < l; i++) arr[i] = this[i];
            return arr
        }, p.copy = function(matrix) {
            for (var l = ColorMatrix.LENGTH, i = 0; i < l; i++) this[i] = matrix[i];
            return this
        }, p.toString = function() {
            return "[ColorMatrix]"
        }, p._multiplyMatrix = function(matrix) {
            var i, j, k, col = [];
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 5; j++) col[j] = this[j + 5 * i];
                for (j = 0; j < 5; j++) {
                    var val = 0;
                    for (k = 0; k < 5; k++) val += matrix[j + 5 * k] * col[k];
                    this[j + 5 * i] = val
                }
            }
        }, p._cleanValue = function(value, limit) {
            return Math.min(limit, Math.max(-limit, value))
        }, p._fixMatrix = function(matrix) {
            return matrix instanceof ColorMatrix && (matrix = matrix.toArray()), matrix.length < ColorMatrix.LENGTH ? matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH)) : matrix.length > ColorMatrix.LENGTH && (matrix = matrix.slice(0, ColorMatrix.LENGTH)), matrix
        }, createjs.ColorMatrix = ColorMatrix
    }(),
    function() {
        "use strict";

        function ColorMatrixFilter(matrix) {
            this.matrix = matrix
        }
        var p = createjs.extend(ColorMatrixFilter, createjs.Filter);
        p.toString = function() {
            return "[ColorMatrixFilter]"
        }, p.clone = function() {
            return new ColorMatrixFilter(this.matrix)
        }, p._applyFilter = function(imageData) {
            for (var r, g, b, a, data = imageData.data, l = data.length, mtx = this.matrix, m0 = mtx[0], m1 = mtx[1], m2 = mtx[2], m3 = mtx[3], m4 = mtx[4], m5 = mtx[5], m6 = mtx[6], m7 = mtx[7], m8 = mtx[8], m9 = mtx[9], m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14], m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19], i = 0; i < l; i += 4) r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3], data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4, data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9, data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14, data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19;
            return !0
        }, createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter")
    }(),
    function() {
        "use strict";

        function Touch() {
            throw "Touch cannot be instantiated"
        }
        Touch.isSupported = function() {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
        }, Touch.enable = function(stage, singleTouch, allowDefault) {
            return !!(stage && stage.canvas && Touch.isSupported()) && (!!stage.__touch || (stage.__touch = {
                pointers: {},
                multitouch: !singleTouch,
                preventDefault: !allowDefault,
                count: 0
            }, "ontouchstart" in window ? Touch._IOS_enable(stage) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && Touch._IE_enable(stage), !0))
        }, Touch.disable = function(stage) {
            stage && ("ontouchstart" in window ? Touch._IOS_disable(stage) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && Touch._IE_disable(stage), delete stage.__touch)
        }, Touch._IOS_enable = function(stage) {
            var canvas = stage.canvas,
                f = stage.__touch.f = function(e) {
                    Touch._IOS_handleEvent(stage, e)
                };
            canvas.addEventListener("touchstart", f, !1), canvas.addEventListener("touchmove", f, !1), canvas.addEventListener("touchend", f, !1), canvas.addEventListener("touchcancel", f, !1)
        }, Touch._IOS_disable = function(stage) {
            var canvas = stage.canvas;
            if (canvas) {
                var f = stage.__touch.f;
                canvas.removeEventListener("touchstart", f, !1), canvas.removeEventListener("touchmove", f, !1), canvas.removeEventListener("touchend", f, !1), canvas.removeEventListener("touchcancel", f, !1)
            }
        }, Touch._IOS_handleEvent = function(stage, e) {
            if (stage) {
                stage.__touch.preventDefault && e.preventDefault && e.preventDefault();
                for (var touches = e.changedTouches, type = e.type, i = 0, l = touches.length; i < l; i++) {
                    var touch = touches[i],
                        id = touch.identifier;
                    touch.target == stage.canvas && ("touchstart" == type ? this._handleStart(stage, id, e, touch.pageX, touch.pageY) : "touchmove" == type ? this._handleMove(stage, id, e, touch.pageX, touch.pageY) : "touchend" != type && "touchcancel" != type || this._handleEnd(stage, id, e))
                }
            }
        }, Touch._IE_enable = function(stage) {
            var canvas = stage.canvas,
                f = stage.__touch.f = function(e) {
                    Touch._IE_handleEvent(stage, e)
                };
            void 0 === window.navigator.pointerEnabled ? (canvas.addEventListener("MSPointerDown", f, !1), window.addEventListener("MSPointerMove", f, !1), window.addEventListener("MSPointerUp", f, !1), window.addEventListener("MSPointerCancel", f, !1), stage.__touch.preventDefault && (canvas.style.msTouchAction = "none")) : (canvas.addEventListener("pointerdown", f, !1), window.addEventListener("pointermove", f, !1), window.addEventListener("pointerup", f, !1), window.addEventListener("pointercancel", f, !1), stage.__touch.preventDefault && (canvas.style.touchAction = "none")), stage.__touch.activeIDs = {}
        }, Touch._IE_disable = function(stage) {
            var f = stage.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", f, !1), window.removeEventListener("MSPointerUp", f, !1), window.removeEventListener("MSPointerCancel", f, !1), stage.canvas && stage.canvas.removeEventListener("MSPointerDown", f, !1)) : (window.removeEventListener("pointermove", f, !1), window.removeEventListener("pointerup", f, !1), window.removeEventListener("pointercancel", f, !1), stage.canvas && stage.canvas.removeEventListener("pointerdown", f, !1))
        }, Touch._IE_handleEvent = function(stage, e) {
            if (stage) {
                stage.__touch.preventDefault && e.preventDefault && e.preventDefault();
                var type = e.type,
                    id = e.pointerId,
                    ids = stage.__touch.activeIDs;
                if ("MSPointerDown" == type || "pointerdown" == type) {
                    if (e.srcElement != stage.canvas) return;
                    ids[id] = !0, this._handleStart(stage, id, e, e.pageX, e.pageY)
                } else ids[id] && ("MSPointerMove" == type || "pointermove" == type ? this._handleMove(stage, id, e, e.pageX, e.pageY) : "MSPointerUp" != type && "MSPointerCancel" != type && "pointerup" != type && "pointercancel" != type || (delete ids[id], this._handleEnd(stage, id, e)))
            }
        }, Touch._handleStart = function(stage, id, e, x, y) {
            var props = stage.__touch;
            if (props.multitouch || !props.count) {
                var ids = props.pointers;
                ids[id] || (ids[id] = !0, props.count++, stage._handlePointerDown(id, e, x, y))
            }
        }, Touch._handleMove = function(stage, id, e, x, y) {
            stage.__touch.pointers[id] && stage._handlePointerMove(id, e, x, y)
        }, Touch._handleEnd = function(stage, id, e) {
            var props = stage.__touch,
                ids = props.pointers;
            ids[id] && (props.count--, stage._handlePointerUp(id, e, !0), delete ids[id])
        }, createjs.Touch = Touch
    }(),
    function() {
        "use strict";
        var s = createjs.EaselJS = createjs.EaselJS || {};
        s.version = "0.8.2", s.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
    }(),
    function() {
        "use strict";
        var s = createjs.PreloadJS = createjs.PreloadJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(),
    function() {
        "use strict";
        createjs.proxy = function(method, scope) {
            var aArgs = Array.prototype.slice.call(arguments, 2);
            return function() {
                return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs))
            }
        }
    }(),
    function() {
        "use strict";

        function ErrorEvent(title, message, data) {
            this.Event_constructor("error"), this.title = title, this.message = message, this.data = data
        }
        createjs.extend(ErrorEvent, createjs.Event).clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event")
    }(),
    function(scope) {
        "use strict";

        function ProgressEvent(loaded, total) {
            this.Event_constructor("progress"), this.loaded = loaded, this.total = null == total ? 1 : total, this.progress = 0 == total ? 0 : this.loaded / this.total
        }
        createjs.extend(ProgressEvent, createjs.Event).clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event")
    }(window),
    function() {
        function runInContext(context, exports) {
            function has(name) {
                if (has[name] !== undef) return has[name];
                var isSupported;
                if ("bug-string-char-index" == name) isSupported = "a" != "a" [0];
                else if ("json" == name) isSupported = has("json-stringify") && has("json-parse");
                else {
                    var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == name) {
                        var stringify = exports.stringify,
                            stringifySupported = "function" == typeof stringify && isExtended;
                        if (stringifySupported) {
                            (value = function() {
                                return 1
                            }).toJSON = value;
                            try {
                                stringifySupported = "0" === stringify(0) && "0" === stringify(new Number) && '""' == stringify(new String) && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && "1" === stringify(value) && "[1]" == stringify([value]) && "[null]" == stringify([undef]) && "null" == stringify(null) && "[null,null,null]" == stringify([undef, getClass, null]) && stringify({
                                    a: [value, !0, !1, null, "\0\b\n\f\r\t"]
                                }) == serialized && "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1))
                            } catch (exception) {
                                stringifySupported = !1
                            }
                        }
                        isSupported = stringifySupported
                    }
                    if ("json-parse" == name) {
                        var parse = exports.parse;
                        if ("function" == typeof parse) try {
                            if (0 === parse("0") && !parse(!1)) {
                                var parseSupported = 5 == (value = parse(serialized)).a.length && 1 === value.a[0];
                                if (parseSupported) {
                                    try {
                                        parseSupported = !parse('"\t"')
                                    } catch (exception) {}
                                    if (parseSupported) try {
                                        parseSupported = 1 !== parse("01")
                                    } catch (exception) {}
                                    if (parseSupported) try {
                                        parseSupported = 1 !== parse("1.")
                                    } catch (exception) {}
                                }
                            }
                        } catch (exception) {
                            parseSupported = !1
                        }
                        isSupported = parseSupported
                    }
                }
                return has[name] = !!isSupported
            }
            context || (context = root.Object()), exports || (exports = root.Object());
            var Number = context.Number || root.Number,
                String = context.String || root.String,
                Object = context.Object || root.Object,
                Date = context.Date || root.Date,
                SyntaxError = context.SyntaxError || root.SyntaxError,
                TypeError = context.TypeError || root.TypeError,
                Math = context.Math || root.Math,
                nativeJSON = context.JSON || root.JSON;
            "object" == typeof nativeJSON && nativeJSON && (exports.stringify = nativeJSON.stringify, exports.parse = nativeJSON.parse);
            var isProperty, forEach, undef, objectProto = Object.prototype,
                getClass = objectProto.toString,
                isExtended = new Date(-0xc782b5b800cec);
            try {
                isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds()
            } catch (exception) {}
            if (!has("json")) {
                var charIndexBuggy = has("bug-string-char-index");
                if (!isExtended) var floor = Math.floor,
                    Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    getDay = function(year, month) {
                        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400)
                    };
                if ((isProperty = objectProto.hasOwnProperty) || (isProperty = function(property) {
                        var constructor, members = {};
                        return (members.__proto__ = null, members.__proto__ = {
                            toString: 1
                        }, members).toString != getClass ? isProperty = function(property) {
                            var original = this.__proto__,
                                result = property in (this.__proto__ = null, this);
                            return this.__proto__ = original, result
                        } : (constructor = members.constructor, isProperty = function(property) {
                            var parent = (this.constructor || constructor).prototype;
                            return property in this && !(property in parent && this[property] === parent[property])
                        }), members = null, isProperty.call(this, property)
                    }), forEach = function(object, callback) {
                        var Properties, members, property, size = 0;
                        (Properties = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, members = new Properties;
                        for (property in members) isProperty.call(members, property) && size++;
                        return Properties = members = null, size ? forEach = 2 == size ? function(object, callback) {
                            var property, members = {},
                                isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) isFunction && "prototype" == property || isProperty.call(members, property) || !(members[property] = 1) || !isProperty.call(object, property) || callback(property)
                        } : function(object, callback) {
                            var property, isConstructor, isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                            (isConstructor || isProperty.call(object, property = "constructor")) && callback(property)
                        } : (members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], forEach = function(object, callback) {
                            var property, length, isFunction = "[object Function]" == getClass.call(object),
                                hasProperty = !isFunction && "function" != typeof object.constructor && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                            for (property in object) isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                        }), forEach(object, callback)
                    }, !has("json-stringify")) {
                    var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        toPaddedString = function(width, value) {
                            return ("000000" + (value || 0)).slice(-width)
                        },
                        quote = function(value) {
                            for (var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10, symbols = useCharIndex && (charIndexBuggy ? value.split("") : value); index < length; index++) {
                                var charCode = value.charCodeAt(index);
                                switch (charCode) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        result += Escapes[charCode];
                                        break;
                                    default:
                                        if (charCode < 32) {
                                            result += "\\u00" + toPaddedString(2, charCode.toString(16));
                                            break
                                        }
                                        result += useCharIndex ? symbols[index] : value.charAt(index)
                                }
                            }
                            return result + '"'
                        },
                        serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                value = object[property]
                            } catch (exception) {}
                            if ("object" == typeof value && value)
                                if ("[object Date]" != (className = getClass.call(value)) || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && ("[object Number]" != className && "[object String]" != className && "[object Array]" != className || isProperty.call(value, "toJSON")) && (value = value.toJSON(property));
                                else if (value > -1 / 0 && value < 1 / 0) {
                                if (getDay) {
                                    for (date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                    date = 1 + date - getDay(year, month), hours = floor((time = (value % 864e5 + 864e5) % 864e5) / 36e5) % 24, minutes = floor(time / 6e4) % 60, seconds = floor(time / 1e3) % 60, milliseconds = time % 1e3
                                } else year = value.getUTCFullYear(), month = value.getUTCMonth(), date = value.getUTCDate(), hours = value.getUTCHours(), minutes = value.getUTCMinutes(), seconds = value.getUTCSeconds(), milliseconds = value.getUTCMilliseconds();
                                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z"
                            } else value = null;
                            if (callback && (value = callback.call(object, property, value)), null === value) return "null";
                            if ("[object Boolean]" == (className = getClass.call(value))) return "" + value;
                            if ("[object Number]" == className) return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                            if ("[object String]" == className) return quote("" + value);
                            if ("object" == typeof value) {
                                for (length = stack.length; length--;)
                                    if (stack[length] === value) throw TypeError();
                                if (stack.push(value), results = [], prefix = indentation, indentation += whitespace, "[object Array]" == className) {
                                    for (index = 0, length = value.length; index < length; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), results.push(element === undef ? "null" : element);
                                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]"
                                } else forEach(properties || value, function(property) {
                                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                    element !== undef && results.push(quote(property) + ":" + (whitespace ? " " : "") + element)
                                }), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                                return stack.pop(), result
                            }
                        };
                    exports.stringify = function(source, filter, width) {
                        var whitespace, callback, properties, className;
                        if (objectTypes[typeof filter] && filter)
                            if ("[object Function]" == (className = getClass.call(filter))) callback = filter;
                            else if ("[object Array]" == className) {
                            properties = {};
                            for (var value, index = 0, length = filter.length; index < length; value = filter[index++], ("[object String]" == (className = getClass.call(value)) || "[object Number]" == className) && (properties[value] = 1));
                        }
                        if (width)
                            if ("[object Number]" == (className = getClass.call(width))) {
                                if ((width -= width % 1) > 0)
                                    for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                            } else "[object String]" == className && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
                        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", [])
                    }
                }
                if (!has("json-parse")) {
                    var Index, Source, fromCharCode = String.fromCharCode,
                        Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        abort = function() {
                            throw Index = Source = null, SyntaxError()
                        },
                        lex = function() {
                            for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; Index < length;) switch (charCode = source.charCodeAt(Index)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    Index++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return value = charIndexBuggy ? source.charAt(Index) : source[Index], Index++, value;
                                case 34:
                                    for (value = "@", Index++; Index < length;)
                                        if ((charCode = source.charCodeAt(Index)) < 32) abort();
                                        else if (92 == charCode) switch (charCode = source.charCodeAt(++Index)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            value += Unescapes[charCode], Index++;
                                            break;
                                        case 117:
                                            for (begin = ++Index, position = Index + 4; Index < position; Index++)(charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70 || abort();
                                            value += fromCharCode("0x" + source.slice(begin, Index));
                                            break;
                                        default:
                                            abort()
                                    } else {
                                        if (34 == charCode) break;
                                        for (charCode = source.charCodeAt(Index), begin = Index; charCode >= 32 && 92 != charCode && 34 != charCode;) charCode = source.charCodeAt(++Index);
                                        value += source.slice(begin, Index)
                                    }
                                    if (34 == source.charCodeAt(Index)) return Index++, value;
                                    abort();
                                default:
                                    if (begin = Index, 45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), charCode >= 48 && charCode <= 57) {
                                        for (48 == charCode && (charCode = source.charCodeAt(Index + 1)) >= 48 && charCode <= 57 && abort(), isSigned = !1; Index < length && (charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57; Index++);
                                        if (46 == source.charCodeAt(Index)) {
                                            for (position = ++Index; position < length && (charCode = source.charCodeAt(position)) >= 48 && charCode <= 57; position++);
                                            position == Index && abort(), Index = position
                                        }
                                        if (101 == (charCode = source.charCodeAt(Index)) || 69 == charCode) {
                                            for (43 != (charCode = source.charCodeAt(++Index)) && 45 != charCode || Index++, position = Index; position < length && (charCode = source.charCodeAt(position)) >= 48 && charCode <= 57; position++);
                                            position == Index && abort(), Index = position
                                        }
                                        return +source.slice(begin, Index)
                                    }
                                    if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, !0;
                                    if ("false" == source.slice(Index, Index + 5)) return Index += 5, !1;
                                    if ("null" == source.slice(Index, Index + 4)) return Index += 4, null;
                                    abort()
                            }
                            return "$"
                        },
                        get = function(value) {
                            var results, hasMembers;
                            if ("$" == value && abort(), "string" == typeof value) {
                                if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) return value.slice(1);
                                if ("[" == value) {
                                    for (results = [];
                                        "]" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "]" == (value = lex()) && abort() : abort()), "," == value && abort(), results.push(get(value));
                                    return results
                                }
                                if ("{" == value) {
                                    for (results = {};
                                        "}" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "}" == (value = lex()) && abort() : abort()), "," != value && "string" == typeof value && "@" == (charIndexBuggy ? value.charAt(0) : value[0]) && ":" == lex() || abort(), results[value.slice(1)] = get(lex());
                                    return results
                                }
                                abort()
                            }
                            return value
                        },
                        update = function(source, property, callback) {
                            var element = walk(source, property, callback);
                            element === undef ? delete source[property] : source[property] = element
                        },
                        walk = function(source, property, callback) {
                            var length, value = source[property];
                            if ("object" == typeof value && value)
                                if ("[object Array]" == getClass.call(value))
                                    for (length = value.length; length--;) update(value, length, callback);
                                else forEach(value, function(property) {
                                    update(value, property, callback)
                                });
                            return callback.call(source, property, value)
                        };
                    exports.parse = function(source, callback) {
                        var result, value;
                        return Index = 0, Source = "" + source, result = get(lex()), "$" != lex() && abort(), Index = Source = null, callback && "[object Function]" == getClass.call(callback) ? walk((value = {}, value[""] = result, value), "", callback) : result
                    }
                }
            }
            return exports.runInContext = runInContext, exports
        }
        var isLoader = "function" == typeof define && define.amd,
            objectTypes = {
                function: !0,
                object: !0
            },
            freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
            root = objectTypes[typeof window] && window || this,
            freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!freeGlobal || freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self !== freeGlobal || (root = freeGlobal), freeExports && !isLoader) runInContext(root, freeExports);
        else {
            var nativeJSON = root.JSON,
                previousJSON = root.JSON3,
                isRestored = !1,
                JSON3 = runInContext(root, root.JSON3 = {
                    noConflict: function() {
                        return isRestored || (isRestored = !0, root.JSON = nativeJSON, root.JSON3 = previousJSON, nativeJSON = previousJSON = null), JSON3
                    }
                });
            root.JSON = {
                parse: JSON3.parse,
                stringify: JSON3.stringify
            }
        }
        isLoader && define(function() {
            return JSON3
        })
    }.call(this),
    function() {
        var s = {};
        s.appendToHead = function(el) {
            s.getHead().appendChild(el)
        }, s.getHead = function() {
            return document.head || document.getElementsByTagName("head")[0]
        }, s.getBody = function() {
            return document.body || document.getElementsByTagName("body")[0]
        }, createjs.DomUtils = s
    }(),
    function() {
        var s = {};
        s.parseXML = function(text, type) {
            var xml = null;
            try {
                if (window.DOMParser) {
                    var parser = new DOMParser;
                    xml = parser.parseFromString(text, type)
                }
            } catch (e) {}
            if (!xml) try {
                (xml = new ActiveXObject("Microsoft.XMLDOM")).async = !1, xml.loadXML(text)
            } catch (e) {
                xml = null
            }
            return xml
        }, s.parseJSON = function(value) {
            if (null == value) return null;
            try {
                return JSON.parse(value)
            } catch (e) {
                throw e
            }
        }, createjs.DataUtils = s
    }(),
    function() {
        "use strict";

        function LoadItem() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT
        }
        var p = LoadItem.prototype = {},
            s = LoadItem;
        s.LOAD_TIMEOUT_DEFAULT = 8e3, s.create = function(value) {
            if ("string" == typeof value) {
                var item = new LoadItem;
                return item.src = value, item
            }
            if (value instanceof s) return value;
            if (value instanceof Object && value.src) return null == value.loadTimeout && (value.loadTimeout = s.LOAD_TIMEOUT_DEFAULT), value;
            throw new Error("Type not recognized.")
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, createjs.LoadItem = s
    }(),
    function() {
        var s = {};
        s.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, s.RELATIVE_PATT = /^[./]*?\//i, s.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i, s.parseURI = function(path) {
            var info = {
                absolute: !1,
                relative: !1
            };
            if (null == path) return info;
            var queryIndex = path.indexOf("?");
            queryIndex > -1 && (path = path.substr(0, queryIndex));
            var match;
            return s.ABSOLUTE_PATT.test(path) ? info.absolute = !0 : s.RELATIVE_PATT.test(path) && (info.relative = !0), (match = path.match(s.EXTENSION_PATT)) && (info.extension = match[1].toLowerCase()), info
        }, s.formatQueryString = function(data, query) {
            if (null == data) throw new Error("You must specify data.");
            var params = [];
            for (var n in data) params.push(n + "=" + escape(data[n]));
            return query && (params = params.concat(query)), params.join("&")
        }, s.buildPath = function(src, data) {
            if (null == data) return src;
            var query = [],
                idx = src.indexOf("?");
            if (-1 != idx) {
                var q = src.slice(idx + 1);
                query = query.concat(q.split("&"))
            }
            return -1 != idx ? src.slice(0, idx) + "?" + this.formatQueryString(data, query) : src + "?" + this.formatQueryString(data, query)
        }, s.isCrossDomain = function(item) {
            var target = document.createElement("a");
            target.href = item.src;
            var host = document.createElement("a");
            host.href = location.href;
            return "" != target.hostname && (target.port != host.port || target.protocol != host.protocol || target.hostname != host.hostname)
        }, s.isLocal = function(item) {
            var target = document.createElement("a");
            return target.href = item.src, "" == target.hostname && "file:" == target.protocol
        }, s.isBinary = function(type) {
            switch (type) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, s.isImageTag = function(item) {
            return item instanceof HTMLImageElement
        }, s.isAudioTag = function(item) {
            return !!window.HTMLAudioElement && item instanceof HTMLAudioElement
        }, s.isVideoTag = function(item) {
            return !!window.HTMLVideoElement && item instanceof HTMLVideoElement
        }, s.isText = function(type) {
            switch (type) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                case createjs.AbstractLoader.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        }, s.getTypeByExtension = function(extension) {
            if (null == extension) return createjs.AbstractLoader.TEXT;
            switch (extension.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = s
    }(),
    function() {
        "use strict";

        function AbstractLoader(loadItem, preferXHR, type) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = type, this.resultFormatter = null, this._item = loadItem ? createjs.LoadItem.create(loadItem) : null, this._preferXHR = preferXHR, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var p = createjs.extend(AbstractLoader, createjs.EventDispatcher),
            s = AbstractLoader;
        s.POST = "POST", s.GET = "GET", s.BINARY = "binary", s.CSS = "css", s.IMAGE = "image", s.JAVASCRIPT = "javascript", s.JSON = "json", s.JSONP = "jsonp", s.MANIFEST = "manifest", s.SOUND = "sound", s.VIDEO = "video", s.SPRITESHEET = "spritesheet", s.SVG = "svg", s.TEXT = "text", s.XML = "xml", p.getItem = function() {
            return this._item
        }, p.getResult = function(raw) {
            return raw ? this._rawResult : this._result
        }, p.getTag = function() {
            return this._tag
        }, p.setTag = function(tag) {
            this._tag = tag
        }, p.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var evt = new createjs.Event("initialize");
            evt.loader = this._request, this.dispatchEvent(evt), this._request.load()
        }, p.cancel = function() {
            this.canceled = !0, this.destroy()
        }, p.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, p.getLoadedItems = function() {
            return this._loadedItems
        }, p._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, p._createTag = function(src) {
            return null
        }, p._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, p._sendProgress = function(value) {
            if (!this._isCanceled()) {
                var event = null;
                "number" == typeof value ? (this.progress = value, event = new createjs.ProgressEvent(this.progress)) : (event = value, this.progress = value.loaded / value.total, event.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(event)
            }
        }, p._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var event = new createjs.Event("complete");
                event.rawResult = this._rawResult, null != this._result && (event.result = this._result), this.dispatchEvent(event)
            }
        }, p._sendError = function(event) {
            !this._isCanceled() && this.hasEventListener("error") && (null == event && (event = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(event))
        }, p._isCanceled = function() {
            return !(null != window.createjs && !this.canceled)
        }, p.resultFormatter = null, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    this._rawResult = event.target._response;
                    var result = this.resultFormatter && this.resultFormatter(this);
                    result instanceof Function ? result.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = result || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(event);
                    break;
                case "error":
                    this._sendError(event);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + event.type.toUpperCase() + "_ERROR"))
            }
        }, p._resultFormatSuccess = function(result) {
            this._result = result, this._sendComplete()
        }, p._resultFormatFailed = function(event) {
            this._sendError(event)
        }, p.buildPath = function(src, data) {
            return createjs.RequestUtils.buildPath(src, data)
        }, p.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function AbstractMediaLoader(loadItem, preferXHR, type) {
            this.AbstractLoader_constructor(loadItem, preferXHR, type), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
        p.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, p._createTag = function() {}, p._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, p._updateXHR = function(event) {
            event.loader.setResponseType && event.loader.setResponseType("blob")
        }, p._formatResult = function(loader) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var URL = window.URL || window.webkitURL,
                    result = loader.getResult(!0);
                loader.getTag().src = URL.createObjectURL(result)
            }
            return loader.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";
        var AbstractRequest = function(item) {
                this._item = item
            },
            p = createjs.extend(AbstractRequest, createjs.EventDispatcher);
        p.load = function() {}, p.destroy = function() {}, p.cancel = function() {}, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function TagRequest(loadItem, tag, srcAttribute) {
            this.AbstractRequest_constructor(loadItem), this._tag = tag, this._tagSrcAttribute = srcAttribute, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var p = createjs.extend(TagRequest, createjs.AbstractRequest);
        p.load = function() {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var evt = new createjs.Event("initialize");
            evt.loader = this._tag, this.dispatchEvent(evt), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
        }, p.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, p._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var tag = this._tag;
            "loaded" != tag.readyState && "complete" != tag.readyState || this._handleTagComplete()
        }, p._handleError = function() {
            this._clean(), this.dispatchEvent("error")
        }, p._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, p._handleTimeout = function() {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, p._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, p._hideTag = function() {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, p._showTag = function() {
            this._tag.style.visibility = this._startTagVisibility
        }, p._handleStalled = function() {}, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest")
    }(),
    function() {
        "use strict";

        function MediaTagRequest(loadItem, tag, srcAttribute) {
            this.AbstractRequest_constructor(loadItem), this._tag = tag, this._tagSrcAttribute = srcAttribute, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var p = createjs.extend(MediaTagRequest, createjs.TagRequest);
        p.load = function() {
            var sc = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = sc;
            var pc = createjs.proxy(this._handleProgress, this);
            this._handleProgress = pc, this._tag.addEventListener("stalled", sc), this._tag.addEventListener("progress", pc), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, p._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var tag = this._tag;
            "loaded" != tag.readyState && "complete" != tag.readyState || this._handleTagComplete()
        }, p._handleStalled = function() {}, p._handleProgress = function(event) {
            if (event && !(event.loaded > 0 && 0 == event.total)) {
                var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
                this.dispatchEvent(newEvent)
            }
        }, p._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest")
    }(),
    function() {
        "use strict";

        function XHRRequest(item) {
            this.AbstractRequest_constructor(item), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(item)
        }
        var p = createjs.extend(XHRRequest, createjs.AbstractRequest);
        XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], p.getResult = function(raw) {
            return raw && this._rawResponse ? this._rawResponse : this._response
        }, p.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, p.load = function() {
            if (null != this._request) {
                null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
                try {
                    this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
                } catch (error) {
                    this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, error))
                }
            } else this._handleError()
        }, p.setResponseType = function(type) {
            "blob" === type && (type = window.URL ? "blob" : "arraybuffer", this._responseType = type), this._request.responseType = type
        }, p.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, p.getResponseHeader = function(header) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(header) : null
        }, p._handleProgress = function(event) {
            if (event && !(event.loaded > 0 && 0 == event.total)) {
                var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
                this.dispatchEvent(newEvent)
            }
        }, p._handleLoadStart = function(event) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, p._handleAbort = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, event))
        }, p._handleError = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(event.message))
        }, p._handleReadyStateChange = function(event) {
            4 == this._request.readyState && this._handleLoad()
        }, p._handleLoad = function(event) {
            if (!this.loaded) {
                this.loaded = !0;
                var error = this._checkError();
                if (error) this._handleError(error);
                else {
                    if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                        this._response = new Blob([this._response])
                    } catch (e) {
                        if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === e.name && window.BlobBuilder) {
                            var builder = new BlobBuilder;
                            builder.append(this._response), this._response = builder.getBlob()
                        }
                    }
                    this._clean(), this.dispatchEvent(new createjs.Event("complete"))
                }
            }
        }, p._handleTimeout = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, event))
        }, p._checkError = function() {
            var status = parseInt(this._request.status);
            switch (status) {
                case 404:
                case 0:
                    return new Error(status)
            }
            return null
        }, p._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (e) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (e) {}
            return null
        }, p._createXHR = function(item) {
            var crossdomain = createjs.RequestUtils.isCrossDomain(item),
                headers = {},
                req = null;
            if (window.XMLHttpRequest) req = new XMLHttpRequest, crossdomain && void 0 === req.withCredentials && window.XDomainRequest && (req = new XDomainRequest);
            else {
                for (var i = 0, l = s.ACTIVEX_VERSIONS.length; i < l; i++) {
                    var axVersion = s.ACTIVEX_VERSIONS[i];
                    try {
                        req = new ActiveXObject(axVersion);
                        break
                    } catch (e) {}
                }
                if (null == req) return !1
            }
            null == item.mimeType && createjs.RequestUtils.isText(item.type) && (item.mimeType = "text/plain; charset=utf-8"), item.mimeType && req.overrideMimeType && req.overrideMimeType(item.mimeType), this._xhrLevel = "string" == typeof req.responseType ? 2 : 1;
            var src = null;
            if (src = item.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(item.src, item.values) : item.src, req.open(item.method || createjs.AbstractLoader.GET, src, !0), crossdomain && req instanceof XMLHttpRequest && 1 == this._xhrLevel && (headers.Origin = location.origin), item.values && item.method == createjs.AbstractLoader.POST && (headers["Content-Type"] = "application/x-www-form-urlencoded"), crossdomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), item.headers)
                for (var n in item.headers) headers[n] = item.headers[n];
            for (n in headers) req.setRequestHeader(n, headers[n]);
            return req instanceof XMLHttpRequest && void 0 !== item.withCredentials && (req.withCredentials = item.withCredentials), this._request = req, !0
        }, p._clean = function() {
            clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, p.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest")
    }(),
    function() {
        "use strict";

        function LoadQueue(preferXHR, basePath, crossOrigin) {
            this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(preferXHR, basePath, crossOrigin)
        }
        var p = createjs.extend(LoadQueue, createjs.AbstractLoader),
            s = LoadQueue;
        p.init = function(preferXHR, basePath, crossOrigin) {
            this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(preferXHR), this._paused = !1, this._basePath = basePath, this._crossOrigin = crossOrigin, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
        }, s.loadTimeout = 8e3, s.LOAD_TIMEOUT = 0, s.BINARY = createjs.AbstractLoader.BINARY, s.CSS = createjs.AbstractLoader.CSS, s.IMAGE = createjs.AbstractLoader.IMAGE, s.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, s.JSON = createjs.AbstractLoader.JSON, s.JSONP = createjs.AbstractLoader.JSONP, s.MANIFEST = createjs.AbstractLoader.MANIFEST, s.SOUND = createjs.AbstractLoader.SOUND, s.VIDEO = createjs.AbstractLoader.VIDEO, s.SVG = createjs.AbstractLoader.SVG, s.TEXT = createjs.AbstractLoader.TEXT, s.XML = createjs.AbstractLoader.XML, s.POST = createjs.AbstractLoader.POST, s.GET = createjs.AbstractLoader.GET, p.registerLoader = function(loader) {
            if (!loader || !loader.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(loader)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(loader)
        }, p.unregisterLoader = function(loader) {
            var idx = this._availableLoaders.indexOf(loader); - 1 != idx && idx < this._defaultLoaderLength - 1 && this._availableLoaders.splice(idx, 1)
        }, p.setUseXHR = function(value) {
            return this.setPreferXHR(value)
        }, p.setPreferXHR = function(value) {
            return this.preferXHR = 0 != value && null != window.XMLHttpRequest, this.preferXHR
        }, p.removeAll = function() {
            this.remove()
        }, p.remove = function(idsOrUrls) {
            var args = null;
            if (idsOrUrls && !Array.isArray(idsOrUrls)) args = [idsOrUrls];
            else if (idsOrUrls) args = idsOrUrls;
            else if (arguments.length > 0) return;
            var itemsWereRemoved = !1;
            if (args) {
                for (; args.length;) {
                    var item = args.pop(),
                        r = this.getResult(item);
                    for (i = this._loadQueue.length - 1; i >= 0; i--)
                        if ((loadItem = this._loadQueue[i].getItem()).id == item || loadItem.src == item) {
                            this._loadQueue.splice(i, 1)[0].cancel();
                            break
                        }
                    for (i = this._loadQueueBackup.length - 1; i >= 0; i--)
                        if ((loadItem = this._loadQueueBackup[i].getItem()).id == item || loadItem.src == item) {
                            this._loadQueueBackup.splice(i, 1)[0].cancel();
                            break
                        }
                    if (r) this._disposeItem(this.getItem(item));
                    else
                        for (var i = this._currentLoads.length - 1; i >= 0; i--) {
                            var loadItem = this._currentLoads[i].getItem();
                            if (loadItem.id == item || loadItem.src == item) {
                                this._currentLoads.splice(i, 1)[0].cancel(), itemsWereRemoved = !0;
                                break
                            }
                        }
                }
                itemsWereRemoved && this._loadNext()
            } else {
                this.close();
                for (var n in this._loadItemsById) this._disposeItem(this._loadItemsById[n]);
                this.init(this.preferXHR, this._basePath)
            }
        }, p.reset = function() {
            this.close();
            for (var n in this._loadItemsById) this._disposeItem(this._loadItemsById[n]);
            for (var a = [], i = 0, l = this._loadQueueBackup.length; i < l; i++) a.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(a, !1)
        }, p.installPlugin = function(plugin) {
            if (null != plugin && null != plugin.getPreloadHandlers) {
                this._plugins.push(plugin);
                var map = plugin.getPreloadHandlers();
                if (map.scope = plugin, null != map.types)
                    for (var i = 0, l = map.types.length; i < l; i++) this._typeCallbacks[map.types[i]] = map;
                if (null != map.extensions)
                    for (i = 0, l = map.extensions.length; i < l; i++) this._extensionCallbacks[map.extensions[i]] = map
            }
        }, p.setMaxConnections = function(value) {
            this._maxConnections = value, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, p.loadFile = function(file, loadNow, basePath) {
            if (null != file) this._addItem(file, null, basePath), !1 !== loadNow ? this.setPaused(!1) : this.setPaused(!0);
            else {
                var event = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                this._sendError(event)
            }
        }, p.loadManifest = function(manifest, loadNow, basePath) {
            var fileList = null,
                path = null;
            if (Array.isArray(manifest)) {
                if (0 == manifest.length) {
                    var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(event)
                }
                fileList = manifest
            } else if ("string" == typeof manifest) fileList = [{
                src: manifest,
                type: s.MANIFEST
            }];
            else {
                if ("object" != typeof manifest) {
                    event = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(event)
                }
                if (void 0 !== manifest.src) {
                    if (null == manifest.type) manifest.type = s.MANIFEST;
                    else if (manifest.type != s.MANIFEST) {
                        var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(event)
                    }
                    fileList = [manifest]
                } else void 0 !== manifest.manifest && (fileList = manifest.manifest, path = manifest.path)
            }
            for (var i = 0, l = fileList.length; i < l; i++) this._addItem(fileList[i], path, basePath);
            !1 !== loadNow ? this.setPaused(!1) : this.setPaused(!0)
        }, p.load = function() {
            this.setPaused(!1)
        }, p.getItem = function(value) {
            return this._loadItemsById[value] || this._loadItemsBySrc[value]
        }, p.getResult = function(value, rawResult) {
            var item = this._loadItemsById[value] || this._loadItemsBySrc[value];
            if (null == item) return null;
            var id = item.id;
            return rawResult && this._loadedRawResults[id] ? this._loadedRawResults[id] : this._loadedResults[id]
        }, p.getItems = function(loaded) {
            var arr = [];
            for (var n in this._loadItemsById) {
                var item = this._loadItemsById[n],
                    result = this.getResult(n);
                !0 === loaded && null == result || arr.push({
                    item: item,
                    result: result,
                    rawResult: this.getResult(n, !0)
                })
            }
            return arr
        }, p.setPaused = function(value) {
            this._paused = value, this._paused || this._loadNext()
        }, p.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, p._addItem = function(value, path, basePath) {
            var item = this._createLoadItem(value, path, basePath);
            if (null != item) {
                var loader = this._createLoader(item);
                null != loader && ("plugins" in loader && (loader.plugins = this._plugins), item._loader = loader, this._loadQueue.push(loader), this._loadQueueBackup.push(loader), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT || !0 === item.maintainOrder) && (this._scriptOrder.push(item), this._loadedScripts.push(null)))
            }
        }, p._createLoadItem = function(value, path, basePath) {
            var item = createjs.LoadItem.create(value);
            if (null == item) return null;
            var bp = "",
                useBasePath = basePath || this._basePath;
            if (item.src instanceof Object) {
                if (!item.type) return null;
                if (path) {
                    bp = path;
                    var pathMatch = createjs.RequestUtils.parseURI(path);
                    null == useBasePath || pathMatch.absolute || pathMatch.relative || (bp = useBasePath + bp)
                } else null != useBasePath && (bp = useBasePath)
            } else {
                var match = createjs.RequestUtils.parseURI(item.src);
                match.extension && (item.ext = match.extension), null == item.type && (item.type = createjs.RequestUtils.getTypeByExtension(item.ext));
                var autoId = item.src;
                if (!match.absolute && !match.relative)
                    if (path) {
                        bp = path;
                        pathMatch = createjs.RequestUtils.parseURI(path);
                        autoId = path + autoId, null == useBasePath || pathMatch.absolute || pathMatch.relative || (bp = useBasePath + bp)
                    } else null != useBasePath && (bp = useBasePath);
                item.src = bp + item.src
            }
            item.path = bp, void 0 !== item.id && null !== item.id && "" !== item.id || (item.id = autoId);
            var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
            if (customHandler) {
                var result = customHandler.callback.call(customHandler.scope, item, this);
                if (!1 === result) return null;
                !0 === result || null != result && (item._loader = result), null != (match = createjs.RequestUtils.parseURI(item.src)).extension && (item.ext = match.extension)
            }
            return this._loadItemsById[item.id] = item, this._loadItemsBySrc[item.src] = item, null == item.crossOrigin && (item.crossOrigin = this._crossOrigin), item
        }, p._createLoader = function(item) {
            if (null != item._loader) return item._loader;
            for (var preferXHR = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
                var loader = this._availableLoaders[i];
                if (loader && loader.canLoadItem(item)) return new loader(item, preferXHR)
            }
            return null
        }, p._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var i = 0; i < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); i++) {
                    var loader = this._loadQueue[i];
                    this._canStartLoad(loader) && (this._loadQueue.splice(i, 1), i--, this._loadItem(loader))
                }
            }
        }, p._loadItem = function(loader) {
            loader.on("fileload", this._handleFileLoad, this), loader.on("progress", this._handleProgress, this), loader.on("complete", this._handleFileComplete, this), loader.on("error", this._handleError, this), loader.on("fileerror", this._handleFileError, this), this._currentLoads.push(loader), this._sendFileStart(loader.getItem()), loader.load()
        }, p._handleFileLoad = function(event) {
            event.target = null, this.dispatchEvent(event)
        }, p._handleFileError = function(event) {
            var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, event.item);
            this._sendError(newEvent)
        }, p._handleError = function(event) {
            var loader = event.target;
            this._numItemsLoaded++, this._finishOrderedItem(loader, !0), this._updateProgress();
            var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, loader.getItem());
            this._sendError(newEvent), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(loader), this._cleanLoadItem(loader), this._loadNext())
        }, p._handleFileComplete = function(event) {
            var loader = event.target,
                item = loader.getItem(),
                result = loader.getResult();
            this._loadedResults[item.id] = result;
            var rawResult = loader.getResult(!0);
            null != rawResult && rawResult !== result && (this._loadedRawResults[item.id] = rawResult), this._saveLoadedItems(loader), this._removeLoadItem(loader), this._finishOrderedItem(loader) || this._processFinishedLoad(item, loader), this._cleanLoadItem(loader)
        }, p._saveLoadedItems = function(loader) {
            var list = loader.getLoadedItems();
            if (null !== list)
                for (var i = 0; i < list.length; i++) {
                    var item = list[i].item;
                    this._loadItemsBySrc[item.src] = item, this._loadItemsById[item.id] = item, this._loadedResults[item.id] = list[i].result, this._loadedRawResults[item.id] = list[i].rawResult
                }
        }, p._finishOrderedItem = function(loader, loadFailed) {
            var item = loader.getItem();
            if (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT || item.maintainOrder) {
                loader instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var index = createjs.indexOf(this._scriptOrder, item);
                return -1 != index && (this._loadedScripts[index] = !0 === loadFailed || item, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, p._checkScriptLoadOrder = function() {
            for (var l = this._loadedScripts.length, i = 0; i < l; i++) {
                var item = this._loadedScripts[i];
                if (null === item) break;
                if (!0 !== item) {
                    var loadItem = this._loadedResults[item.id];
                    item.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(loadItem);
                    var loader = item._loader;
                    this._processFinishedLoad(item, loader), this._loadedScripts[i] = !0
                }
            }
        }, p._processFinishedLoad = function(item, loader) {
            if (this._numItemsLoaded++, !this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT) {
                var tag = loader.getTag();
                createjs.DomUtils.appendToHead(tag)
            }
            this._updateProgress(), this._sendFileComplete(item, loader), this._loadNext()
        }, p._canStartLoad = function(loader) {
            if (!this.maintainScriptOrder || loader.preferXHR) return !0;
            var item = loader.getItem();
            if (item.type != createjs.LoadQueue.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var index = this._scriptOrder.indexOf(item), i = 0; i < index;) {
                if (null == this._loadedScripts[i]) return !1;
                i++
            }
            return this._currentlyLoadingScript = !0, !0
        }, p._removeLoadItem = function(loader) {
            for (var l = this._currentLoads.length, i = 0; i < l; i++)
                if (this._currentLoads[i] == loader) {
                    this._currentLoads.splice(i, 1);
                    break
                }
        }, p._cleanLoadItem = function(loader) {
            var item = loader.getItem();
            item && delete item._loader
        }, p._handleProgress = function(event) {
            var loader = event.target;
            this._sendFileProgress(loader.getItem(), loader.progress), this._updateProgress()
        }, p._updateProgress = function() {
            var loaded = this._numItemsLoaded / this._numItems,
                remaining = this._numItems - this._numItemsLoaded;
            if (remaining > 0) {
                for (var chunk = 0, i = 0, l = this._currentLoads.length; i < l; i++) chunk += this._currentLoads[i].progress;
                loaded += chunk / remaining * (remaining / this._numItems)
            }
            this._lastProgress != loaded && (this._sendProgress(loaded), this._lastProgress = loaded)
        }, p._disposeItem = function(item) {
            delete this._loadedResults[item.id], delete this._loadedRawResults[item.id], delete this._loadItemsById[item.id], delete this._loadItemsBySrc[item.src]
        }, p._sendFileProgress = function(item, progress) {
            if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var event = new createjs.Event("fileprogress");
                event.progress = progress, event.loaded = progress, event.total = 1, event.item = item, this.dispatchEvent(event)
            }
        }, p._sendFileComplete = function(item, loader) {
            if (!this._isCanceled() && !this._paused) {
                var event = new createjs.Event("fileload");
                event.loader = loader, event.item = item, event.result = this._loadedResults[item.id], event.rawResult = this._loadedRawResults[item.id], item.completeHandler && item.completeHandler(event), this.hasEventListener("fileload") && this.dispatchEvent(event)
            }
        }, p._sendFileStart = function(item) {
            var event = new createjs.Event("filestart");
            event.item = item, this.hasEventListener("filestart") && this.dispatchEvent(event)
        }, p.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function TextLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.TEXT)
        }
        createjs.extend(TextLoader, createjs.AbstractLoader);
        TextLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.TEXT
        }, createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function BinaryLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(BinaryLoader, createjs.AbstractLoader);
        BinaryLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.BINARY
        }, p._updateXHR = function(event) {
            event.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function CSSLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = preferXHR ? document.createElement("style") : document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var p = createjs.extend(CSSLoader, createjs.AbstractLoader);
        CSSLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.CSS
        }, p._formatResult = function(loader) {
            if (this._preferXHR) {
                var tag = loader.getTag();
                if (tag.styleSheet) tag.styleSheet.cssText = loader.getResult(!0);
                else {
                    var textNode = document.createTextNode(loader.getResult(!0));
                    tag.appendChild(textNode)
                }
            } else tag = this._tag;
            return createjs.DomUtils.appendToHead(tag), tag
        }, createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function ImageLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(loadItem) ? this._tag = loadItem : createjs.RequestUtils.isImageTag(loadItem.src) ? this._tag = loadItem.src : createjs.RequestUtils.isImageTag(loadItem.tag) && (this._tag = loadItem.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(ImageLoader, createjs.AbstractLoader);
        ImageLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.IMAGE
        }, p.load = function() {
            if ("" != this._tag.src && this._tag.complete) this._sendComplete();
            else {
                var crossOrigin = this._item.crossOrigin;
                1 == crossOrigin && (crossOrigin = "Anonymous"), null == crossOrigin || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = crossOrigin), this.AbstractLoader_load()
            }
        }, p._updateXHR = function(event) {
            event.loader.mimeType = "text/plain; charset=x-user-defined-binary", event.loader.setResponseType && event.loader.setResponseType("blob")
        }, p._formatResult = function(loader) {
            return this._formatImage
        }, p._formatImage = function(successCallback, errorCallback) {
            var tag = this._tag,
                URL = window.URL || window.webkitURL;
            if (this._preferXHR)
                if (URL) {
                    var objURL = URL.createObjectURL(this.getResult(!0));
                    tag.src = objURL
                } else tag.src = this._item.src;
            else;
            tag.complete ? successCallback(tag) : (tag.onload = createjs.proxy(function() {
                successCallback(this._tag)
            }, this), tag.onerror = createjs.proxy(function() {
                errorCallback(this._tag)
            }, this))
        }, p._cleanUpURL = function(event) {
            (window.URL || window.webkitURL).revokeObjectURL(event.target.src)
        }, createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JavaScriptLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
        }
        var p = createjs.extend(JavaScriptLoader, createjs.AbstractLoader);
        JavaScriptLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JAVASCRIPT
        }, p._formatResult = function(loader) {
            var tag = loader.getTag();
            return this._preferXHR && (tag.text = loader.getResult(!0)), tag
        }, createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JSONLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
        }
        var p = createjs.extend(JSONLoader, createjs.AbstractLoader);
        JSONLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JSON
        }, p._formatResult = function(loader) {
            var json = null;
            try {
                json = createjs.DataUtils.parseJSON(loader.getResult(!0))
            } catch (e) {
                var event = new createjs.ErrorEvent("JSON_FORMAT", null, e);
                return this._sendError(event), e
            }
            return json
        }, createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JSONPLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
        }
        var p = createjs.extend(JSONPLoader, createjs.AbstractLoader);
        JSONPLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JSONP
        }, p.cancel = function() {
            this.AbstractLoader_cancel(), this._dispose()
        }, p.load = function() {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
        }, p._handleLoad = function(data) {
            this._result = this._rawResult = data, this._sendComplete(), this._dispose()
        }, p._handleTimeout = function() {
            this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
        }, p._dispose = function() {
            window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
        }, createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function ManifestLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
        }
        var p = createjs.extend(ManifestLoader, createjs.AbstractLoader),
            s = ManifestLoader;
        s.MANIFEST_PROGRESS = .25, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.MANIFEST
        }, p.load = function() {
            this.AbstractLoader_load()
        }, p._createRequest = function() {
            var callback = this._item.callback;
            this._request = null != callback ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
        }, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    return this._rawResult = event.target.getResult(!0), this._result = event.target.getResult(), this._sendProgress(s.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return event.loaded *= s.MANIFEST_PROGRESS, this.progress = event.loaded / event.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(event)
            }
            this.AbstractLoader_handleEvent(event)
        }, p.destroy = function() {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, p._loadManifest = function(json) {
            if (json && json.manifest) {
                var queue = this._manifestQueue = new createjs.LoadQueue;
                queue.on("fileload", this._handleManifestFileLoad, this), queue.on("progress", this._handleManifestProgress, this), queue.on("complete", this._handleManifestComplete, this, !0), queue.on("error", this._handleManifestError, this, !0);
                for (var i = 0, l = this.plugins.length; i < l; i++) queue.installPlugin(this.plugins[i]);
                queue.loadManifest(json)
            } else this._sendComplete()
        }, p._handleManifestFileLoad = function(event) {
            event.target = null, this.dispatchEvent(event)
        }, p._handleManifestComplete = function(event) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, p._handleManifestProgress = function(event) {
            this.progress = event.progress * (1 - s.MANIFEST_PROGRESS) + s.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, p._handleManifestError = function(event) {
            var newEvent = new createjs.Event("fileerror");
            newEvent.item = event.data, this.dispatchEvent(newEvent)
        }, createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function SoundLoader(loadItem, preferXHR) {
            this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(loadItem) ? this._tag = loadItem : createjs.RequestUtils.isAudioTag(loadItem.src) ? this._tag = loadItem : createjs.RequestUtils.isAudioTag(loadItem.tag) && (this._tag = createjs.RequestUtils.isAudioTag(loadItem) ? loadItem : loadItem.src), null != this._tag && (this._preferXHR = !1)
        }
        var p = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
        SoundLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SOUND
        }, p._createTag = function(src) {
            var tag = document.createElement("audio");
            return tag.autoplay = !1, tag.preload = "none", tag.src = src, tag
        }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader")
    }(),
    function() {
        "use strict";

        function VideoLoader(loadItem, preferXHR) {
            this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(loadItem) || createjs.RequestUtils.isVideoTag(loadItem.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(loadItem) ? loadItem : loadItem.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var s = VideoLoader;
        createjs.extend(VideoLoader, createjs.AbstractMediaLoader)._createTag = function() {
            return document.createElement("video")
        }, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.VIDEO
        }, createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader")
    }(),
    function() {
        "use strict";

        function SpriteSheetLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
        }
        var p = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader),
            s = SpriteSheetLoader;
        s.SPRITESHEET_PROGRESS = .25, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SPRITESHEET
        }, p.destroy = function() {
            this.AbstractLoader_destroy, this._manifestQueue.close()
        }, p._createRequest = function() {
            var callback = this._item.callback;
            this._request = null != callback ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
        }, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    return this._rawResult = event.target.getResult(!0), this._result = event.target.getResult(), this._sendProgress(s.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return event.loaded *= s.SPRITESHEET_PROGRESS, this.progress = event.loaded / event.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(event)
            }
            this.AbstractLoader_handleEvent(event)
        }, p._loadManifest = function(json) {
            if (json && json.images) {
                var queue = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                queue.on("complete", this._handleManifestComplete, this, !0), queue.on("fileload", this._handleManifestFileLoad, this), queue.on("progress", this._handleManifestProgress, this), queue.on("error", this._handleManifestError, this, !0), queue.loadManifest(json.images)
            }
        }, p._handleManifestFileLoad = function(event) {
            var image = event.result;
            if (null != image) {
                var images = this.getResult().images;
                images[images.indexOf(event.item.src)] = image
            }
        }, p._handleManifestComplete = function(event) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, p._handleManifestProgress = function(event) {
            this.progress = event.progress * (1 - s.SPRITESHEET_PROGRESS) + s.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, p._handleManifestError = function(event) {
            var newEvent = new createjs.Event("fileerror");
            newEvent.item = event.data, this.dispatchEvent(newEvent)
        }, createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function SVGLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", preferXHR ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
        }
        var p = createjs.extend(SVGLoader, createjs.AbstractLoader);
        SVGLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SVG
        }, p._formatResult = function(loader) {
            var xml = createjs.DataUtils.parseXML(loader.getResult(!0), "text/xml"),
                tag = loader.getTag();
            return !this._preferXHR && document.body.contains(tag) && document.body.removeChild(tag), null != xml.documentElement ? (tag.appendChild(xml.documentElement), tag.style.visibility = "visible", tag) : xml
        }, createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function XMLLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
        }
        var p = createjs.extend(XMLLoader, createjs.AbstractLoader);
        XMLLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.XML
        }, p._formatResult = function(loader) {
            return createjs.DataUtils.parseXML(loader.getResult(!0), "text/xml")
        }, createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader")
    }(),
    function() {
        var s = createjs.SoundJS = createjs.SoundJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), createjs.indexOf = function(array, searchElement) {
        "use strict";
        for (var i = 0, l = array.length; i < l; i++)
            if (searchElement === array[i]) return i;
        return -1
    },
    function() {
        "use strict";
        createjs.proxy = function(method, scope) {
            var aArgs = Array.prototype.slice.call(arguments, 2);
            return function() {
                return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs))
            }
        }
    }(),
    function() {
        "use strict";

        function BrowserDetect() {
            throw "BrowserDetect cannot be instantiated"
        }
        var agent = BrowserDetect.agent = window.navigator.userAgent;
        BrowserDetect.isWindowPhone = agent.indexOf("IEMobile") > -1 || agent.indexOf("Windows Phone") > -1, BrowserDetect.isFirefox = agent.indexOf("Firefox") > -1, BrowserDetect.isOpera = null != window.opera, BrowserDetect.isChrome = agent.indexOf("Chrome") > -1, BrowserDetect.isIOS = (agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone, BrowserDetect.isAndroid = agent.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone, BrowserDetect.isBlackberry = agent.indexOf("Blackberry") > -1, createjs.BrowserDetect = BrowserDetect
    }(),
    function() {
        "use strict";
        var PlayPropsConfig = function() {
                this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
            },
            p = PlayPropsConfig.prototype = {},
            s = PlayPropsConfig;
        s.create = function(value) {
            if (value instanceof s || value instanceof Object) {
                var ppc = new createjs.PlayPropsConfig;
                return ppc.set(value), ppc
            }
            throw new Error("Type not recognized.")
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.toString = function() {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = s
    }(),
    function() {
        "use strict";

        function Sound() {
            throw "Sound cannot be instantiated"
        }

        function SoundChannel(src, max) {
            this.init(src, max)
        }
        var s = Sound;
        s.INTERRUPT_ANY = "any", s.INTERRUPT_EARLY = "early", s.INTERRUPT_LATE = "late", s.INTERRUPT_NONE = "none", s.PLAY_INITED = "playInited", s.PLAY_SUCCEEDED = "playSucceeded", s.PLAY_INTERRUPTED = "playInterrupted", s.PLAY_FINISHED = "playFinished", s.PLAY_FAILED = "playFailed", s.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], s.EXTENSION_MAP = {
            m4a: "mp4"
        }, s.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, s.defaultInterruptBehavior = s.INTERRUPT_NONE, s.alternateExtensions = [], s.activePlugin = null, s._masterVolume = 1, Object.defineProperty(s, "volume", {
            get: function() {
                return this._masterVolume
            },
            set: function(value) {
                if (null == Number(value)) return !1;
                if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value))
                    for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterVolume(value)
            }
        }), s._masterMute = !1, Object.defineProperty(s, "muted", {
            get: function() {
                return this._masterMute
            },
            set: function(value) {
                if (null == value) return !1;
                if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value))
                    for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterMute(value);
                return !0
            }
        }), Object.defineProperty(s, "capabilities", {
            get: function() {
                return null == s.activePlugin ? null : s.activePlugin._capabilities
            },
            set: function(value) {
                return !1
            }
        }), s._pluginsRegistered = !1, s._lastID = 0, s._instances = [], s._idHash = {}, s._preloadHash = {}, s._defaultPlayPropsHash = {}, s.addEventListener = null, s.removeEventListener = null, s.removeAllEventListeners = null, s.dispatchEvent = null, s.hasEventListener = null, s._listeners = null, createjs.EventDispatcher.initialize(s), s.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(s.initLoad, s),
                types: ["sound"],
                extensions: s.SUPPORTED_EXTENSIONS
            }
        }, s._handleLoadComplete = function(event) {
            var src = event.target.getItem().src;
            if (s._preloadHash[src])
                for (var i = 0, l = s._preloadHash[src].length; i < l; i++) {
                    var item = s._preloadHash[src][i];
                    if (s._preloadHash[src][i] = !0, s.hasEventListener("fileload")) {
                        (event = new createjs.Event("fileload")).src = item.src, event.id = item.id, event.data = item.data, event.sprite = item.sprite, s.dispatchEvent(event)
                    }
                }
        }, s._handleLoadError = function(event) {
            var src = event.target.getItem().src;
            if (s._preloadHash[src])
                for (var i = 0, l = s._preloadHash[src].length; i < l; i++) {
                    var item = s._preloadHash[src][i];
                    if (s._preloadHash[src][i] = !1, s.hasEventListener("fileerror")) {
                        (event = new createjs.Event("fileerror")).src = item.src, event.id = item.id, event.data = item.data, event.sprite = item.sprite, s.dispatchEvent(event)
                    }
                }
        }, s._registerPlugin = function(plugin) {
            return !!plugin.isSupported() && (s.activePlugin = new plugin, !0)
        }, s.registerPlugins = function(plugins) {
            s._pluginsRegistered = !0;
            for (var i = 0, l = plugins.length; i < l; i++)
                if (s._registerPlugin(plugins[i])) return !0;
            return !1
        }, s.initializeDefaultPlugins = function() {
            return null != s.activePlugin || !s._pluginsRegistered && !!s.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
        }, s.isReady = function() {
            return null != s.activePlugin
        }, s.getCapabilities = function() {
            return null == s.activePlugin ? null : s.activePlugin._capabilities
        }, s.getCapability = function(key) {
            return null == s.activePlugin ? null : s.activePlugin._capabilities[key]
        }, s.initLoad = function(loadItem) {
            return s._registerSound(loadItem)
        }, s._registerSound = function(loadItem) {
            if (!s.initializeDefaultPlugins()) return !1;
            var details;
            if (loadItem.src instanceof Object ? (details = s._parseSrc(loadItem.src)).src = loadItem.path + details.src : details = s._parsePath(loadItem.src), null == details) return !1;
            loadItem.src = details.src, loadItem.type = "sound";
            var data = loadItem.data,
                numChannels = null;
            if (null != data && (isNaN(data.channels) ? isNaN(data) || (numChannels = parseInt(data)) : numChannels = parseInt(data.channels), data.audioSprite))
                for (var sp, i = data.audioSprite.length; i--;) sp = data.audioSprite[i], s._idHash[sp.id] = {
                    src: loadItem.src,
                    startTime: parseInt(sp.startTime),
                    duration: parseInt(sp.duration)
                }, sp.defaultPlayProps && (s._defaultPlayPropsHash[sp.id] = createjs.PlayPropsConfig.create(sp.defaultPlayProps));
            null != loadItem.id && (s._idHash[loadItem.id] = {
                src: loadItem.src
            });
            var loader = s.activePlugin.register(loadItem);
            return SoundChannel.create(loadItem.src, numChannels), null != data && isNaN(data) ? loadItem.data.channels = numChannels || SoundChannel.maxPerChannel() : loadItem.data = numChannels || SoundChannel.maxPerChannel(), loader.type && (loadItem.type = loader.type), loadItem.defaultPlayProps && (s._defaultPlayPropsHash[loadItem.src] = createjs.PlayPropsConfig.create(loadItem.defaultPlayProps)), loader
        }, s.registerSound = function(src, id, data, basePath, defaultPlayProps) {
            var loadItem = {
                src: src,
                id: id,
                data: data,
                defaultPlayProps: defaultPlayProps
            };
            src instanceof Object && src.src && (basePath = id, loadItem = src), (loadItem = createjs.LoadItem.create(loadItem)).path = basePath, null == basePath || loadItem.src instanceof Object || (loadItem.src = basePath + src);
            var loader = s._registerSound(loadItem);
            if (!loader) return !1;
            if (s._preloadHash[loadItem.src] || (s._preloadHash[loadItem.src] = []), s._preloadHash[loadItem.src].push(loadItem), 1 == s._preloadHash[loadItem.src].length) loader.on("complete", createjs.proxy(this._handleLoadComplete, this)), loader.on("error", createjs.proxy(this._handleLoadError, this)), s.activePlugin.preload(loader);
            else if (1 == s._preloadHash[loadItem.src][0]) return !0;
            return loadItem
        }, s.registerSounds = function(sounds, basePath) {
            var returnValues = [];
            sounds.path && (basePath ? basePath += sounds.path : basePath = sounds.path, sounds = sounds.manifest);
            for (var i = 0, l = sounds.length; i < l; i++) returnValues[i] = createjs.Sound.registerSound(sounds[i].src, sounds[i].id, sounds[i].data, basePath, sounds[i].defaultPlayProps);
            return returnValues
        }, s.removeSound = function(src, basePath) {
            if (null == s.activePlugin) return !1;
            src instanceof Object && src.src && (src = src.src);
            var details;
            if (src instanceof Object ? details = s._parseSrc(src) : (src = s._getSrcById(src).src, details = s._parsePath(src)), null == details) return !1;
            src = details.src, null != basePath && (src = basePath + src);
            for (var prop in s._idHash) s._idHash[prop].src == src && delete s._idHash[prop];
            return SoundChannel.removeSrc(src), delete s._preloadHash[src], s.activePlugin.removeSound(src), !0
        }, s.removeSounds = function(sounds, basePath) {
            var returnValues = [];
            sounds.path && (basePath ? basePath += sounds.path : basePath = sounds.path, sounds = sounds.manifest);
            for (var i = 0, l = sounds.length; i < l; i++) returnValues[i] = createjs.Sound.removeSound(sounds[i].src, basePath);
            return returnValues
        }, s.removeAllSounds = function() {
            s._idHash = {}, s._preloadHash = {}, SoundChannel.removeAll(), s.activePlugin && s.activePlugin.removeAllSounds()
        }, s.loadComplete = function(src) {
            if (!s.isReady()) return !1;
            var details = s._parsePath(src);
            return src = details ? s._getSrcById(details.src).src : s._getSrcById(src).src, void 0 != s._preloadHash[src] && 1 == s._preloadHash[src][0]
        }, s._parsePath = function(value) {
            "string" != typeof value && (value = value.toString());
            var match = value.match(s.FILE_PATTERN);
            if (null == match) return !1;
            for (var name = match[4], ext = match[5], c = s.capabilities, i = 0; !c[ext];)
                if (ext = s.alternateExtensions[i++], i > s.alternateExtensions.length) return null;
            return {
                name: name,
                src: value = value.replace("." + match[5], "." + ext),
                extension: ext
            }
        }, s._parseSrc = function(value) {
            var ret = {
                    name: void 0,
                    src: void 0,
                    extension: void 0
                },
                c = s.capabilities;
            for (var prop in value)
                if (value.hasOwnProperty(prop) && c[prop]) {
                    ret.src = value[prop], ret.extension = prop;
                    break
                }
            if (!ret.src) return !1;
            var i = ret.src.lastIndexOf("/");
            return ret.name = -1 != i ? ret.src.slice(i + 1) : ret.src, ret
        }, s.play = function(src, interrupt, delay, offset, loop, volume, pan, startTime, duration) {
            var playProps;
            playProps = interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(interrupt) : createjs.PlayPropsConfig.create({
                interrupt: interrupt,
                delay: delay,
                offset: offset,
                loop: loop,
                volume: volume,
                pan: pan,
                startTime: startTime,
                duration: duration
            });
            var instance = s.createInstance(src, playProps.startTime, playProps.duration);
            return s._playInstance(instance, playProps) || instance._playFailed(), instance
        }, s.createInstance = function(src, startTime, duration) {
            if (!s.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(src, startTime, duration);
            var defaultPlayProps = s._defaultPlayPropsHash[src];
            src = s._getSrcById(src);
            var details = s._parsePath(src.src),
                instance = null;
            return null != details && null != details.src ? (SoundChannel.create(details.src), null == startTime && (startTime = src.startTime), instance = s.activePlugin.create(details.src, startTime, duration || src.duration), (defaultPlayProps = defaultPlayProps || s._defaultPlayPropsHash[details.src]) && instance.applyPlayProps(defaultPlayProps)) : instance = new createjs.DefaultSoundInstance(src, startTime, duration), instance.uniqueId = s._lastID++, instance
        }, s.stop = function() {
            for (var instances = this._instances, i = instances.length; i--;) instances[i].stop()
        }, s.setVolume = function(value) {
            if (null == Number(value)) return !1;
            if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value))
                for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterVolume(value)
        }, s.getVolume = function() {
            return this._masterVolume
        }, s.setMute = function(value) {
            if (null == value) return !1;
            if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value))
                for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterMute(value);
            return !0
        }, s.getMute = function() {
            return this._masterMute
        }, s.setDefaultPlayProps = function(src, playProps) {
            src = s._getSrcById(src), s._defaultPlayPropsHash[s._parsePath(src.src).src] = createjs.PlayPropsConfig.create(playProps)
        }, s.getDefaultPlayProps = function(src) {
            return src = s._getSrcById(src), s._defaultPlayPropsHash[s._parsePath(src.src).src]
        }, s._playInstance = function(instance, playProps) {
            var defaultPlayProps = s._defaultPlayPropsHash[instance.src] || {};
            if (null == playProps.interrupt && (playProps.interrupt = defaultPlayProps.interrupt || s.defaultInterruptBehavior), null == playProps.delay && (playProps.delay = defaultPlayProps.delay || 0), null == playProps.offset && (playProps.offset = instance.getPosition()), null == playProps.loop && (playProps.loop = instance.loop), null == playProps.volume && (playProps.volume = instance.volume), null == playProps.pan && (playProps.pan = instance.pan), 0 == playProps.delay) {
                if (!s._beginPlaying(instance, playProps)) return !1
            } else {
                var delayTimeoutId = setTimeout(function() {
                    s._beginPlaying(instance, playProps)
                }, playProps.delay);
                instance.delayTimeoutId = delayTimeoutId
            }
            return this._instances.push(instance), !0
        }, s._beginPlaying = function(instance, playProps) {
            if (!SoundChannel.add(instance, playProps.interrupt)) return !1;
            if (!instance._beginPlaying(playProps)) {
                var index = createjs.indexOf(this._instances, instance);
                return index > -1 && this._instances.splice(index, 1), !1
            }
            return !0
        }, s._getSrcById = function(value) {
            return s._idHash[value] || {
                src: value
            }
        }, s._playFinished = function(instance) {
            SoundChannel.remove(instance);
            var index = createjs.indexOf(this._instances, instance);
            index > -1 && this._instances.splice(index, 1)
        }, createjs.Sound = Sound, SoundChannel.channels = {}, SoundChannel.create = function(src, max) {
            return null == SoundChannel.get(src) && (SoundChannel.channels[src] = new SoundChannel(src, max), !0)
        }, SoundChannel.removeSrc = function(src) {
            var channel = SoundChannel.get(src);
            return null != channel && (channel._removeAll(), delete SoundChannel.channels[src], !0)
        }, SoundChannel.removeAll = function() {
            for (var channel in SoundChannel.channels) SoundChannel.channels[channel]._removeAll();
            SoundChannel.channels = {}
        }, SoundChannel.add = function(instance, interrupt) {
            var channel = SoundChannel.get(instance.src);
            return null != channel && channel._add(instance, interrupt)
        }, SoundChannel.remove = function(instance) {
            var channel = SoundChannel.get(instance.src);
            return null != channel && (channel._remove(instance), !0)
        }, SoundChannel.maxPerChannel = function() {
            return p.maxDefault
        }, SoundChannel.get = function(src) {
            return SoundChannel.channels[src]
        };
        var p = SoundChannel.prototype;
        p.constructor = SoundChannel, p.src = null, p.max = null, p.maxDefault = 100, p.length = 0, p.init = function(src, max) {
            this.src = src, this.max = max || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, p._get = function(index) {
            return this._instances[index]
        }, p._add = function(instance, interrupt) {
            return !!this._getSlot(interrupt, instance) && (this._instances.push(instance), this.length++, !0)
        }, p._remove = function(instance) {
            var index = createjs.indexOf(this._instances, instance);
            return -1 != index && (this._instances.splice(index, 1), this.length--, !0)
        }, p._removeAll = function() {
            for (var i = this.length - 1; i >= 0; i--) this._instances[i].stop()
        }, p._getSlot = function(interrupt, instance) {
            var target, replacement;
            if (interrupt != Sound.INTERRUPT_NONE && null == (replacement = this._get(0))) return !0;
            for (var i = 0, l = this.max; i < l; i++) {
                if (null == (target = this._get(i))) return !0;
                if (target.playState == Sound.PLAY_FINISHED || target.playState == Sound.PLAY_INTERRUPTED || target.playState == Sound.PLAY_FAILED) {
                    replacement = target;
                    break
                }
                interrupt != Sound.INTERRUPT_NONE && ((interrupt == Sound.INTERRUPT_EARLY && target.getPosition() < replacement.getPosition() || interrupt == Sound.INTERRUPT_LATE && target.getPosition() > replacement.getPosition()) && (replacement = target))
            }
            return null != replacement && (replacement._interrupt(), this._remove(replacement), !0)
        }, p.toString = function() {
            return "[Sound SoundChannel]"
        }
    }(),
    function() {
        "use strict";
        var AbstractSoundInstance = function(src, startTime, duration, playbackResource) {
                this.EventDispatcher_constructor(), this.src = src, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                    get: this.getVolume,
                    set: this.setVolume
                }), this._pan = 0, Object.defineProperty(this, "pan", {
                    get: this.getPan,
                    set: this.setPan
                }), this._startTime = Math.max(0, startTime || 0), Object.defineProperty(this, "startTime", {
                    get: this.getStartTime,
                    set: this.setStartTime
                }), this._duration = Math.max(0, duration || 0), Object.defineProperty(this, "duration", {
                    get: this.getDuration,
                    set: this.setDuration
                }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                    get: this.getPlaybackResource,
                    set: this.setPlaybackResource
                }), !1 !== playbackResource && !0 !== playbackResource && this.setPlaybackResource(playbackResource), this._position = 0, Object.defineProperty(this, "position", {
                    get: this.getPosition,
                    set: this.setPosition
                }), this._loop = 0, Object.defineProperty(this, "loop", {
                    get: this.getLoop,
                    set: this.setLoop
                }), this._muted = !1, Object.defineProperty(this, "muted", {
                    get: this.getMuted,
                    set: this.setMuted
                }), this._paused = !1, Object.defineProperty(this, "paused", {
                    get: this.getPaused,
                    set: this.setPaused
                })
            },
            p = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);
        p.play = function(interrupt, delay, offset, loop, volume, pan) {
            var playProps;
            return playProps = interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(interrupt) : createjs.PlayPropsConfig.create({
                interrupt: interrupt,
                delay: delay,
                offset: offset,
                loop: loop,
                volume: volume,
                pan: pan
            }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(playProps), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, playProps), this)
        }, p.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, p.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, p.applyPlayProps = function(playProps) {
            return null != playProps.offset && this.setPosition(playProps.offset), null != playProps.loop && this.setLoop(playProps.loop), null != playProps.volume && this.setVolume(playProps.volume), null != playProps.pan && this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), this
        }, p.toString = function() {
            return "[AbstractSoundInstance]"
        }, p.getPaused = function() {
            return this._paused
        }, p.setPaused = function(value) {
            if (!(!0 !== value && !1 !== value || this._paused == value || 1 == value && this.playState != createjs.Sound.PLAY_SUCCEEDED)) return this._paused = value, value ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this
        }, p.setVolume = function(value) {
            return value == this._volume ? this : (this._volume = Math.max(0, Math.min(1, value)), this._muted || this._updateVolume(), this)
        }, p.getVolume = function() {
            return this._volume
        }, p.setMuted = function(value) {
            if (!0 === value || !1 === value) return this._muted = value, this._updateVolume(), this
        }, p.getMuted = function() {
            return this._muted
        }, p.setPan = function(value) {
            return value == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, value)), this._updatePan(), this)
        }, p.getPan = function() {
            return this._pan
        }, p.getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, p.setPosition = function(value) {
            return this._position = Math.max(0, value), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, p.getStartTime = function() {
            return this._startTime
        }, p.setStartTime = function(value) {
            return value == this._startTime ? this : (this._startTime = Math.max(0, value || 0), this._updateStartTime(), this)
        }, p.getDuration = function() {
            return this._duration
        }, p.setDuration = function(value) {
            return value == this._duration ? this : (this._duration = Math.max(0, value || 0), this._updateDuration(), this)
        }, p.setPlaybackResource = function(value) {
            return this._playbackResource = value, 0 == this._duration && this._setDurationFromSource(), this
        }, p.getPlaybackResource = function() {
            return this._playbackResource
        }, p.getLoop = function() {
            return this._loop
        }, p.setLoop = function(value) {
            null != this._playbackResource && (0 != this._loop && 0 == value ? this._removeLooping(value) : 0 == this._loop && 0 != value && this._addLooping(value)), this._loop = value
        }, p._sendEvent = function(type) {
            var event = new createjs.Event(type);
            this.dispatchEvent(event)
        }, p._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, p._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, p._beginPlaying = function(playProps) {
            return this.setPosition(playProps.offset), this.setLoop(playProps.loop), this.setVolume(playProps.volume), this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, p._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, p._handleSoundComplete = function(event) {
            if (this._position = 0, 0 != this._loop) return this._loop--, this._handleLoop(), void this._sendEvent("loop");
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete")
        }, p._handleSoundReady = function() {}, p._updateVolume = function() {}, p._updatePan = function() {}, p._updateStartTime = function() {}, p._updateDuration = function() {}, p._setDurationFromSource = function() {}, p._calculateCurrentPosition = function() {}, p._updatePosition = function() {}, p._removeLooping = function(value) {}, p._addLooping = function(value) {}, p._pause = function() {}, p._resume = function() {}, p._handleStop = function() {}, p._handleCleanUp = function() {}, p._handleLoop = function() {}, createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(),
    function() {
        "use strict";
        var AbstractPlugin = function() {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
            },
            p = AbstractPlugin.prototype;
        AbstractPlugin._capabilities = null, AbstractPlugin.isSupported = function() {
            return !0
        }, p.register = function(loadItem) {
            var loader = this._loaders[loadItem.src];
            return loader && !loader.canceled ? this._loaders[loadItem.src] : (this._audioSources[loadItem.src] = !0, this._soundInstances[loadItem.src] = [], (loader = new this._loaderClass(loadItem)).on("complete", this._handlePreloadComplete, this), this._loaders[loadItem.src] = loader, loader)
        }, p.preload = function(loader) {
            loader.on("error", this._handlePreloadError, this), loader.load()
        }, p.isPreloadStarted = function(src) {
            return null != this._audioSources[src]
        }, p.isPreloadComplete = function(src) {
            return !(null == this._audioSources[src] || 1 == this._audioSources[src])
        }, p.removeSound = function(src) {
            if (this._soundInstances[src]) {
                for (var i = this._soundInstances[src].length; i--;) {
                    this._soundInstances[src][i].destroy()
                }
                delete this._soundInstances[src], delete this._audioSources[src], this._loaders[src] && this._loaders[src].destroy(), delete this._loaders[src]
            }
        }, p.removeAllSounds = function() {
            for (var key in this._audioSources) this.removeSound(key)
        }, p.create = function(src, startTime, duration) {
            this.isPreloadStarted(src) || this.preload(this.register(src));
            var si = new this._soundInstanceClass(src, startTime, duration, this._audioSources[src]);
            return this._soundInstances[src].push(si), si
        }, p.setVolume = function(value) {
            return this._volume = value, this._updateVolume(), !0
        }, p.getVolume = function() {
            return this._volume
        }, p.setMute = function(value) {
            return this._updateVolume(), !0
        }, p.toString = function() {
            return "[AbstractPlugin]"
        }, p._handlePreloadComplete = function(event) {
            var src = event.target.getItem().src;
            this._audioSources[src] = event.result;
            for (var i = 0, l = this._soundInstances[src].length; i < l; i++) {
                this._soundInstances[src][i].setPlaybackResource(this._audioSources[src])
            }
        }, p._handlePreloadError = function(event) {}, p._updateVolume = function() {}, createjs.AbstractPlugin = AbstractPlugin
    }(),
    function() {
        "use strict";

        function Loader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.SOUND)
        }
        var p = createjs.extend(Loader, createjs.AbstractLoader);
        Loader.context = null, p.toString = function() {
            return "[WebAudioLoader]"
        }, p._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, p._sendComplete = function(event) {
            Loader.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, p._handleAudioDecoded = function(decodedAudio) {
            this._result = decodedAudio, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(Loader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function WebAudioSoundInstance(src, startTime, duration, playbackResource) {
            this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource), this.gainNode = s.context.createGain(), this.panNode = s.context.createPanner(), this.panNode.panningModel = s._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var p = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance),
            s = WebAudioSoundInstance;
        s.context = null, s._scratchBuffer = null, s.destinationNode = null, s._panningModel = "equalpower", p.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, p.toString = function() {
            return "[WebAudioSoundInstance]"
        }, p._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, p._removeLooping = function(value) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, p._addLooping = function(value) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, p._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration
        }, p._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, p._cleanUpAudioNode = function(audioNode) {
            if (audioNode) {
                audioNode.stop(0), audioNode.disconnect(0);
                try {
                    audioNode.buffer = s._scratchBuffer
                } catch (e) {}
                audioNode = null
            }
            return audioNode
        }, p._handleSoundReady = function(event) {
            this.gainNode.connect(s.destinationNode);
            var dur = .001 * this._duration,
                pos = .001 * this._position;
            pos > dur && (pos = dur), this.sourceNode = this._createAndPlayAudioNode(s.context.currentTime - dur, pos), this._playbackStartTime = this.sourceNode.startTime - pos, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (dur - pos)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, p._createAndPlayAudioNode = function(startTime, offset) {
            var audioNode = s.context.createBufferSource();
            audioNode.buffer = this.playbackResource, audioNode.connect(this.panNode);
            var dur = .001 * this._duration;
            return audioNode.startTime = startTime + dur, audioNode.start(audioNode.startTime, offset + .001 * this._startTime, dur - offset), audioNode
        }, p._pause = function() {
            this._position = 1e3 * (s.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, p._resume = function() {
            this._handleSoundReady()
        }, p._updateVolume = function() {
            var newVolume = this._muted ? 0 : this._volume;
            newVolume != this.gainNode.gain.value && (this.gainNode.gain.value = newVolume)
        }, p._calculateCurrentPosition = function() {
            return 1e3 * (s.context.currentTime - this._playbackStartTime)
        }, p._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, p._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, p._updateDuration = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance")
    }(),
    function() {
        "use strict";

        function WebAudioPlugin() {
            this.AbstractPlugin_constructor(), this._panningModel = s._panningModel, this.context = s.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = s._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var p = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin),
            s = WebAudioPlugin;
        s._capabilities = null, s._panningModel = "equalpower", s.context = null, s._scratchBuffer = null, s._unlocked = !1, s.isSupported = function() {
            var isMobilePhoneGap = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return !("file:" == location.protocol && !isMobilePhoneGap && !this._isFileXHRSupported()) && (s._generateCapabilities(), null != s.context)
        }, s.playEmptySound = function() {
            if (null != s.context) {
                var source = s.context.createBufferSource();
                source.buffer = s._scratchBuffer, source.connect(s.context.destination), source.start(0, 0, 0)
            }
        }, s._isFileXHRSupported = function() {
            var supported = !0,
                xhr = new XMLHttpRequest;
            try {
                xhr.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (error) {
                return supported = !1
            }
            xhr.onerror = function() {
                supported = !1
            }, xhr.onload = function() {
                supported = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                xhr.send()
            } catch (error) {
                supported = !1
            }
            return supported
        }, s._generateCapabilities = function() {
            if (null == s._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                if (null == s.context)
                    if (window.AudioContext) s.context = new AudioContext;
                    else {
                        if (!window.webkitAudioContext) return null;
                        s.context = new webkitAudioContext
                    }
                null == s._scratchBuffer && (s._scratchBuffer = s.context.createBuffer(1, 1, 22050)), s._compatibilitySetUp(), "ontouchstart" in window && "running" != s.context.state && (s._unlock(), document.addEventListener("mousedown", s._unlock, !0), document.addEventListener("touchend", s._unlock, !0)), s._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS, extensionMap = createjs.Sound.EXTENSION_MAP, i = 0, l = supportedExtensions.length; i < l; i++) {
                    var ext = supportedExtensions[i],
                        playType = extensionMap[ext] || ext;
                    s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType)
                }
                s.context.destination.numberOfChannels < 2 && (s._capabilities.panning = !1)
            }
        }, s._compatibilitySetUp = function() {
            if (s._panningModel = "equalpower", !s.context.createGain) {
                s.context.createGain = s.context.createGainNode;
                var audioNode = s.context.createBufferSource();
                audioNode.__proto__.start = audioNode.__proto__.noteGrainOn, audioNode.__proto__.stop = audioNode.__proto__.noteOff, s._panningModel = 0
            }
        }, s._unlock = function() {
            s._unlocked || (s.playEmptySound(), "running" == s.context.state && (document.removeEventListener("mousedown", s._unlock, !0), document.removeEventListener("touchend", s._unlock, !0), s._unlocked = !0))
        }, p.toString = function() {
            return "[WebAudioPlugin]"
        }, p._addPropsToClasses = function() {
            var c = this._soundInstanceClass;
            c.context = this.context, c._scratchBuffer = s._scratchBuffer, c.destinationNode = this.gainNode, c._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, p._updateVolume = function() {
            var newVolume = createjs.Sound._masterMute ? 0 : this._volume;
            newVolume != this.gainNode.gain.value && (this.gainNode.gain.value = newVolume)
        }, createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin")
    }(),
    function() {
        "use strict";

        function HTMLAudioTagPool() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function TagPool(src) {
            this._tags = []
        }
        var s = HTMLAudioTagPool;
        s._tags = {}, s._tagPool = new TagPool, s._tagUsed = {}, s.get = function(src) {
            var t = s._tags[src];
            return null == t ? (t = s._tags[src] = s._tagPool.get()).src = src : s._tagUsed[src] ? (t = s._tagPool.get()).src = src : s._tagUsed[src] = !0, t
        }, s.set = function(src, tag) {
            tag == s._tags[src] ? s._tagUsed[src] = !1 : s._tagPool.set(tag)
        }, s.remove = function(src) {
            var tag = s._tags[src];
            return null != tag && (s._tagPool.set(tag), delete s._tags[src], delete s._tagUsed[src], !0)
        }, s.getDuration = function(src) {
            var t = s._tags[src];
            return null != t && t.duration ? 1e3 * t.duration : 0
        }, createjs.HTMLAudioTagPool = HTMLAudioTagPool;
        var p = TagPool.prototype;
        p.constructor = TagPool, p.get = function() {
            var tag;
            return null == (tag = 0 == this._tags.length ? this._createTag() : this._tags.pop()).parentNode && document.body.appendChild(tag), tag
        }, p.set = function(tag) {
            -1 == createjs.indexOf(this._tags, tag) && (this._tags.src = null, this._tags.push(tag))
        }, p.toString = function() {
            return "[TagPool]"
        }, p._createTag = function() {
            var tag = document.createElement("audio");
            return tag.autoplay = !1, tag.preload = "none", tag
        }
    }(),
    function() {
        "use strict";

        function HTMLAudioSoundInstance(src, startTime, duration, playbackResource) {
            this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), duration ? this._audioSpriteStopTime = .001 * (startTime + duration) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var p = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
        p.setMasterVolume = function(value) {
            this._updateVolume()
        }, p.setMasterMute = function(isMuted) {
            this._updateVolume()
        }, p.toString = function() {
            return "[HTMLAudioSoundInstance]"
        }, p._removeLooping = function() {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._addLooping = function() {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, p._handleCleanUp = function() {
            var tag = this._playbackResource;
            if (null != tag) {
                tag.pause(), tag.loop = !1, tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    tag.currentTime = this._startTime
                } catch (e) {}
                createjs.HTMLAudioTagPool.set(this.src, tag), this._playbackResource = null
            }
        }, p._beginPlaying = function(playProps) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(playProps)
        }, p._handleSoundReady = function(event) {
            if (4 !== this._playbackResource.readyState) {
                var tag = this._playbackResource;
                return tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), tag.preload = "auto", void tag.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, p._handleTagReady = function(event) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, p._pause = function() {
            this._playbackResource.pause()
        }, p._resume = function() {
            this._playbackResource.play()
        }, p._updateVolume = function() {
            if (null != this._playbackResource) {
                var newVolume = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                newVolume != this._playbackResource.volume && (this._playbackResource.volume = newVolume)
            }
        }, p._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, p._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (error) {
                this._handleSetPositionSeek(null)
            }
        }, p._handleSetPositionSeek = function(event) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._handleAudioSpriteLoop = function(event) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, p._handleLoop = function(event) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._updateStartTime = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, p._updateDuration = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, p._setDurationFromSource = function() {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance")
    }(),
    function() {
        "use strict";

        function HTMLAudioPlugin() {
            this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = s._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var p = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin),
            s = HTMLAudioPlugin;
        s.MAX_INSTANCES = 30, s._AUDIO_READY = "canplaythrough", s._AUDIO_ENDED = "ended", s._AUDIO_SEEKED = "seeked", s._AUDIO_STALLED = "stalled", s._TIME_UPDATE = "timeupdate", s._capabilities = null, s.isSupported = function() {
            return s._generateCapabilities(), null != s._capabilities
        }, s._generateCapabilities = function() {
            if (null == s._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                s._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS, extensionMap = createjs.Sound.EXTENSION_MAP, i = 0, l = supportedExtensions.length; i < l; i++) {
                    var ext = supportedExtensions[i],
                        playType = extensionMap[ext] || ext;
                    s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType)
                }
            }
        }, p.register = function(loadItem) {
            var tag = createjs.HTMLAudioTagPool.get(loadItem.src),
                loader = this.AbstractPlugin_register(loadItem);
            return loader.setTag(tag), loader
        }, p.removeSound = function(src) {
            this.AbstractPlugin_removeSound(src), createjs.HTMLAudioTagPool.remove(src)
        }, p.create = function(src, startTime, duration) {
            var si = this.AbstractPlugin_create(src, startTime, duration);
            return si.setPlaybackResource(null), si
        }, p.toString = function() {
            return "[HTMLAudioPlugin]"
        }, p.setVolume = p.getVolume = p.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin")
    }(),
    function() {
        "use strict";

        function Tween(target, props, pluginData) {
            this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = pluginData || {}, this.target = target, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = target, this._useTicks = !1, this._inited = !1, this._registered = !1, props && (this._useTicks = props.useTicks, this.ignoreGlobalPause = props.ignoreGlobalPause, this.loop = props.loop, props.onChange && this.addEventListener("change", props.onChange), props.override && Tween.removeTweens(target)), props && props.paused ? this._paused = !0 : createjs.Tween._register(this, !0), props && null != props.position && this.setPosition(props.position, Tween.NONE)
        }
        var p = createjs.extend(Tween, createjs.EventDispatcher);
        Tween.NONE = 0, Tween.LOOP = 1, Tween.REVERSE = 2, Tween.IGNORE = {}, Tween._tweens = [], Tween._plugins = {}, Tween.get = function(target, props, pluginData, override) {
            return override && Tween.removeTweens(target), new Tween(target, props, pluginData)
        }, Tween.tick = function(delta, paused) {
            for (var tweens = Tween._tweens.slice(), i = tweens.length - 1; i >= 0; i--) {
                var tween = tweens[i];
                paused && !tween.ignoreGlobalPause || tween._paused || tween.tick(tween._useTicks ? 1 : delta)
            }
        }, Tween.handleEvent = function(event) {
            "tick" == event.type && this.tick(event.delta, event.paused)
        }, Tween.removeTweens = function(target) {
            if (target.tweenjs_count) {
                for (var tweens = Tween._tweens, i = tweens.length - 1; i >= 0; i--) {
                    var tween = tweens[i];
                    tween._target == target && (tween._paused = !0, tweens.splice(i, 1))
                }
                target.tweenjs_count = 0
            }
        }, Tween.removeAllTweens = function() {
            for (var tweens = Tween._tweens, i = 0, l = tweens.length; i < l; i++) {
                var tween = tweens[i];
                tween._paused = !0, tween.target && (tween.target.tweenjs_count = 0)
            }
            tweens.length = 0
        }, Tween.hasActiveTweens = function(target) {
            return target ? null != target.tweenjs_count && !!target.tweenjs_count : Tween._tweens && !!Tween._tweens.length
        }, Tween.installPlugin = function(plugin, properties) {
            var priority = plugin.priority;
            null == priority && (plugin.priority = priority = 0);
            for (var i = 0, l = properties.length, p = Tween._plugins; i < l; i++) {
                var n = properties[i];
                if (p[n]) {
                    for (var arr = p[n], j = 0, jl = arr.length; j < jl && !(priority < arr[j].priority); j++);
                    p[n].splice(j, 0, plugin)
                } else p[n] = [plugin]
            }
        }, Tween._register = function(tween, value) {
            var target = tween._target,
                tweens = Tween._tweens;
            if (value && !tween._registered) target && (target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1), tweens.push(tween), !Tween._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", Tween), Tween._inited = !0);
            else if (!value && tween._registered) {
                target && target.tweenjs_count--;
                for (var i = tweens.length; i--;)
                    if (tweens[i] == tween) {
                        tweens.splice(i, 1);
                        break
                    }
            }
            tween._registered = value
        }, p.wait = function(duration, passive) {
            if (null == duration || duration <= 0) return this;
            var o = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: duration,
                p0: o,
                e: this._linearEase,
                p1: o,
                v: passive
            })
        }, p.to = function(props, duration, ease) {
            return (isNaN(duration) || duration < 0) && (duration = 0), this._addStep({
                d: duration || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: ease,
                p1: this._cloneProps(this._appendQueueProps(props))
            })
        }, p.call = function(callback, params, scope) {
            return this._addAction({
                f: callback,
                p: params || [this],
                o: scope || this._target
            })
        }, p.set = function(props, target) {
            return this._addAction({
                f: this._set,
                o: this,
                p: [props, target || this._target]
            })
        }, p.play = function(tween) {
            return tween || (tween = this), this.call(tween.setPaused, [!1], tween)
        }, p.pause = function(tween) {
            return tween || (tween = this), this.call(tween.setPaused, [!0], tween)
        }, p.setPosition = function(value, actionsMode) {
            value < 0 && (value = 0), null == actionsMode && (actionsMode = 1);
            var t = value,
                end = !1;
            if (t >= this.duration && (this.loop ? t %= this.duration : (t = this.duration, end = !0)), t == this._prevPos) return end;
            var prevPos = this._prevPos;
            if (this.position = this._prevPos = t, this._prevPosition = value, this._target)
                if (end) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                for (var i = 0, l = this._steps.length; i < l && !(this._steps[i].t > t); i++);
                var step = this._steps[i - 1];
                this._updateTargetProps(step, (this._stepPosition = t - step.t) / step.d)
            }
            return 0 != actionsMode && this._actions.length > 0 && (this._useTicks ? this._runActions(t, t) : 1 == actionsMode && t < prevPos ? (prevPos != this.duration && this._runActions(prevPos, this.duration), this._runActions(0, t, !0)) : this._runActions(prevPos, t)), end && this.setPaused(!0), this.dispatchEvent("change"), end
        }, p.tick = function(delta) {
            this._paused || this.setPosition(this._prevPosition + delta)
        }, p.setPaused = function(value) {
            return this._paused === !!value ? this : (this._paused = !!value, Tween._register(this, !value), this)
        }, p.w = p.wait, p.t = p.to, p.c = p.call, p.s = p.set, p.toString = function() {
            return "[Tween]"
        }, p.clone = function() {
            throw "Tween can not be cloned."
        }, p._updateTargetProps = function(step, ratio) {
            var p0, p1, v, v0, v1, arr;
            if (step || 1 != ratio) {
                if (this.passive = !!step.v, this.passive) return;
                step.e && (ratio = step.e(ratio, 0, 1, 1)), p0 = step.p0, p1 = step.p1
            } else this.passive = !1, p0 = p1 = this._curQueueProps;
            for (var n in this._initQueueProps) {
                null == (v0 = p0[n]) && (p0[n] = v0 = this._initQueueProps[n]), null == (v1 = p1[n]) && (p1[n] = v1 = v0), v = v0 == v1 || 0 == ratio || 1 == ratio || "number" != typeof v0 ? 1 == ratio ? v1 : v0 : v0 + (v1 - v0) * ratio;
                var ignore = !1;
                if (arr = Tween._plugins[n])
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
                        v2 == Tween.IGNORE ? ignore = !0 : v = v2
                    }
                ignore || (this._target[n] = v)
            }
        }, p._runActions = function(startPos, endPos, includeStart) {
            var sPos = startPos,
                ePos = endPos,
                i = -1,
                j = this._actions.length,
                k = 1;
            for (startPos > endPos && (sPos = endPos, ePos = startPos, i = j, j = k = -1);
                (i += k) != j;) {
                var action = this._actions[i],
                    pos = action.t;
                (pos == ePos || pos > sPos && pos < ePos || includeStart && pos == startPos) && action.f.apply(action.o, action.p)
            }
        }, p._appendQueueProps = function(o) {
            var arr, oldValue, i, l, injectProps;
            for (var n in o)
                if (void 0 === this._initQueueProps[n]) {
                    if (oldValue = this._target[n], arr = Tween._plugins[n])
                        for (i = 0, l = arr.length; i < l; i++) oldValue = arr[i].init(this, n, oldValue);
                    this._initQueueProps[n] = this._curQueueProps[n] = void 0 === oldValue ? null : oldValue
                } else oldValue = this._curQueueProps[n];
            for (var n in o) {
                if (oldValue = this._curQueueProps[n], arr = Tween._plugins[n])
                    for (injectProps = injectProps || {}, i = 0, l = arr.length; i < l; i++) arr[i].step && arr[i].step(this, n, oldValue, o[n], injectProps);
                this._curQueueProps[n] = o[n]
            }
            return injectProps && this._appendQueueProps(injectProps), this._curQueueProps
        }, p._cloneProps = function(props) {
            var o = {};
            for (var n in props) o[n] = props[n];
            return o
        }, p._addStep = function(o) {
            return o.d > 0 && (this._steps.push(o), o.t = this.duration, this.duration += o.d), this
        }, p._addAction = function(o) {
            return o.t = this.duration, this._actions.push(o), this
        }, p._set = function(props, o) {
            for (var n in props) o[n] = props[n]
        }, createjs.Tween = createjs.promote(Tween, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Timeline(tweens, labels, props) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, props && (this._useTicks = props.useTicks, this.loop = props.loop, this.ignoreGlobalPause = props.ignoreGlobalPause, props.onChange && this.addEventListener("change", props.onChange)), tweens && this.addTween.apply(this, tweens), this.setLabels(labels), props && props.paused ? this._paused = !0 : createjs.Tween._register(this, !0), props && null != props.position && this.setPosition(props.position, createjs.Tween.NONE)
        }
        var p = createjs.extend(Timeline, createjs.EventDispatcher);
        p.addTween = function(tween) {
            var l = arguments.length;
            if (l > 1) {
                for (var i = 0; i < l; i++) this.addTween(arguments[i]);
                return arguments[0]
            }
            return 0 == l ? null : (this.removeTween(tween), this._tweens.push(tween), tween.setPaused(!0), tween._paused = !1, tween._useTicks = this._useTicks, tween.duration > this.duration && (this.duration = tween.duration), this._prevPos >= 0 && tween.setPosition(this._prevPos, createjs.Tween.NONE), tween)
        }, p.removeTween = function(tween) {
            var l = arguments.length;
            if (l > 1) {
                for (var good = !0, i = 0; i < l; i++) good = good && this.removeTween(arguments[i]);
                return good
            }
            if (0 == l) return !1;
            var tweens = this._tweens;
            for (i = tweens.length; i--;)
                if (tweens[i] == tween) return tweens.splice(i, 1), tween.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, p.addLabel = function(label, position) {
            this._labels[label] = position;
            var list = this._labelList;
            if (list) {
                for (var i = 0, l = list.length; i < l && !(position < list[i].position); i++);
                list.splice(i, 0, {
                    label: label,
                    position: position
                })
            }
        }, p.setLabels = function(o) {
            this._labels = o || {}
        }, p.getLabels = function() {
            var list = this._labelList;
            if (!list) {
                list = this._labelList = [];
                var labels = this._labels;
                for (var n in labels) list.push({
                    label: n,
                    position: labels[n]
                });
                list.sort(function(a, b) {
                    return a.position - b.position
                })
            }
            return list
        }, p.getCurrentLabel = function() {
            var labels = this.getLabels(),
                pos = this.position,
                l = labels.length;
            if (l) {
                for (var i = 0; i < l && !(pos < labels[i].position); i++);
                return 0 == i ? null : labels[i - 1].label
            }
            return null
        }, p.gotoAndPlay = function(positionOrLabel) {
            this.setPaused(!1), this._goto(positionOrLabel)
        }, p.gotoAndStop = function(positionOrLabel) {
            this.setPaused(!0), this._goto(positionOrLabel)
        }, p.setPosition = function(value, actionsMode) {
            var t = this._calcPosition(value),
                end = !this.loop && value >= this.duration;
            if (t == this._prevPos) return end;
            this._prevPosition = value, this.position = this._prevPos = t;
            for (var i = 0, l = this._tweens.length; i < l; i++)
                if (this._tweens[i].setPosition(t, actionsMode), t != this._prevPos) return !1;
            return end && this.setPaused(!0), this.dispatchEvent("change"), end
        }, p.setPaused = function(value) {
            this._paused = !!value, createjs.Tween._register(this, !value)
        }, p.updateDuration = function() {
            this.duration = 0;
            for (var i = 0, l = this._tweens.length; i < l; i++) {
                var tween = this._tweens[i];
                tween.duration > this.duration && (this.duration = tween.duration)
            }
        }, p.tick = function(delta) {
            this.setPosition(this._prevPosition + delta)
        }, p.resolve = function(positionOrLabel) {
            var pos = Number(positionOrLabel);
            return isNaN(pos) && (pos = this._labels[positionOrLabel]), pos
        }, p.toString = function() {
            return "[Timeline]"
        }, p.clone = function() {
            throw "Timeline can not be cloned."
        }, p._goto = function(positionOrLabel) {
            var pos = this.resolve(positionOrLabel);
            null != pos && this.setPosition(pos)
        }, p._calcPosition = function(value) {
            return value < 0 ? 0 : value < this.duration ? value : this.loop ? value % this.duration : this.duration
        }, createjs.Timeline = createjs.promote(Timeline, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Ease() {
            throw "Ease cannot be instantiated."
        }
        Ease.none = Ease.linear = function(t) {
            return t
        }, Ease.get = function(amount) {
            return amount < -1 && (amount = -1), amount > 1 && (amount = 1),
                function(t) {
                    return 0 == amount ? t : amount < 0 ? t * (t * -amount + 1 + amount) : t * ((2 - t) * amount + (1 - amount))
                }
        }, Ease.getPowIn = function(pow) {
            return function(t) {
                return Math.pow(t, pow)
            }
        }, Ease.getPowOut = function(pow) {
            return function(t) {
                return 1 - Math.pow(1 - t, pow)
            }
        }, Ease.getPowInOut = function(pow) {
            return function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(t, pow) : 1 - .5 * Math.abs(Math.pow(2 - t, pow))
            }
        }, Ease.quadIn = Ease.getPowIn(2), Ease.quadOut = Ease.getPowOut(2), Ease.quadInOut = Ease.getPowInOut(2), Ease.cubicIn = Ease.getPowIn(3), Ease.cubicOut = Ease.getPowOut(3), Ease.cubicInOut = Ease.getPowInOut(3), Ease.quartIn = Ease.getPowIn(4), Ease.quartOut = Ease.getPowOut(4), Ease.quartInOut = Ease.getPowInOut(4), Ease.quintIn = Ease.getPowIn(5), Ease.quintOut = Ease.getPowOut(5), Ease.quintInOut = Ease.getPowInOut(5), Ease.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Ease.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2)
        }, Ease.sineInOut = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, Ease.getBackIn = function(amount) {
            return function(t) {
                return t * t * ((amount + 1) * t - amount)
            }
        }, Ease.backIn = Ease.getBackIn(1.7), Ease.getBackOut = function(amount) {
            return function(t) {
                return --t * t * ((amount + 1) * t + amount) + 1
            }
        }, Ease.backOut = Ease.getBackOut(1.7), Ease.getBackInOut = function(amount) {
            return amount *= 1.525,
                function(t) {
                    return (t *= 2) < 1 ? t * t * ((amount + 1) * t - amount) * .5 : .5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2)
                }
        }, Ease.backInOut = Ease.getBackInOut(1.7), Ease.circIn = function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }, Ease.circOut = function(t) {
            return Math.sqrt(1 - --t * t)
        }, Ease.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, Ease.bounceIn = function(t) {
            return 1 - Ease.bounceOut(1 - t)
        }, Ease.bounceOut = function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, Ease.bounceInOut = function(t) {
            return t < .5 ? .5 * Ease.bounceIn(2 * t) : .5 * Ease.bounceOut(2 * t - 1) + .5
        }, Ease.getElasticIn = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                if (0 == t || 1 == t) return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return -amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period)
            }
        }, Ease.elasticIn = Ease.getElasticIn(1, .3), Ease.getElasticOut = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                if (0 == t || 1 == t) return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1
            }
        }, Ease.elasticOut = Ease.getElasticOut(1, .3), Ease.getElasticInOut = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                var s = period / pi2 * Math.asin(1 / amplitude);
                return (t *= 2) < 1 ? amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * -.5 : amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * .5 + 1
            }
        }, Ease.elasticInOut = Ease.getElasticInOut(1, .3 * 1.5), createjs.Ease = Ease
    }(),
    function() {
        "use strict";

        function MotionGuidePlugin() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        MotionGuidePlugin.priority = 0, MotionGuidePlugin.install = function() {
            return createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
        }, MotionGuidePlugin.init = function(tween, prop, value) {
            var target = tween.target;
            return target.hasOwnProperty("x") || (target.x = 0), target.hasOwnProperty("y") || (target.y = 0), target.hasOwnProperty("rotation") || (target.rotation = 0), "rotation" == prop && (tween.__needsRot = !0), "guide" == prop ? null : value
        }, MotionGuidePlugin.step = function(tween, prop, startValue, endValue, injectProps) {
            if ("rotation" == prop && (tween.__rotGlobalS = startValue, tween.__rotGlobalE = endValue, MotionGuidePlugin.testRotData(tween, injectProps)), "guide" != prop) return endValue;
            var temp, data = endValue;
            data.hasOwnProperty("path") || (data.path = []);
            var path = data.path;
            if (data.hasOwnProperty("end") || (data.end = 1), data.hasOwnProperty("start") || (data.start = startValue && startValue.hasOwnProperty("end") && startValue.path === path ? startValue.end : 0), data.hasOwnProperty("_segments") && data._length) return endValue;
            var l = path.length;
            if (!(l >= 6 && (l - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
            data._segments = [], data._length = 0;
            for (var i = 2; i < l; i += 4) {
                for (var tempX, tempY, sx = path[i - 2], sy = path[i - 1], cx = path[i + 0], cy = path[i + 1], ex = path[i + 2], ey = path[i + 3], oldX = sx, oldY = sy, total = 0, sublines = [], j = 1; j <= 10; j++) {
                    var t = j / 10,
                        inv = 1 - t;
                    tempX = inv * inv * sx + 2 * inv * t * cx + t * t * ex, tempY = inv * inv * sy + 2 * inv * t * cy + t * t * ey, total += sublines[sublines.push(Math.sqrt((temp = tempX - oldX) * temp + (temp = tempY - oldY) * temp)) - 1], oldX = tempX, oldY = tempY
                }
                data._segments.push(total), data._segments.push(sublines), data._length += total
            }
            temp = data.orient, data.orient = !0;
            var o = {};
            return MotionGuidePlugin.calc(data, data.start, o), tween.__rotPathS = Number(o.rotation.toFixed(5)), MotionGuidePlugin.calc(data, data.end, o), tween.__rotPathE = Number(o.rotation.toFixed(5)), data.orient = !1, MotionGuidePlugin.calc(data, data.end, injectProps), data.orient = temp, data.orient ? (tween.__guideData = data, MotionGuidePlugin.testRotData(tween, injectProps), endValue) : endValue
        }, MotionGuidePlugin.testRotData = function(tween, injectProps) {
            if (void 0 === tween.__rotGlobalS || void 0 === tween.__rotGlobalE) {
                if (tween.__needsRot) return;
                void 0 !== tween._curQueueProps.rotation ? tween.__rotGlobalS = tween.__rotGlobalE = tween._curQueueProps.rotation : tween.__rotGlobalS = tween.__rotGlobalE = injectProps.rotation = tween.target.rotation || 0
            }
            if (void 0 !== tween.__guideData) {
                var data = tween.__guideData,
                    rotGlobalD = tween.__rotGlobalE - tween.__rotGlobalS,
                    rotPathD = tween.__rotPathE - tween.__rotPathS,
                    rot = rotGlobalD - rotPathD;
                if ("auto" == data.orient) rot > 180 ? rot -= 360 : rot < -180 && (rot += 360);
                else if ("cw" == data.orient) {
                    for (; rot < 0;) rot += 360;
                    0 == rot && rotGlobalD > 0 && 180 != rotGlobalD && (rot += 360)
                } else if ("ccw" == data.orient) {
                    for (rot = rotGlobalD - (rotPathD > 180 ? 360 - rotPathD : rotPathD); rot > 0;) rot -= 360;
                    0 == rot && rotGlobalD < 0 && -180 != rotGlobalD && (rot -= 360)
                }
                data.rotDelta = rot, data.rotOffS = tween.__rotGlobalS - tween.__rotPathS, tween.__rotGlobalS = tween.__rotGlobalE = tween.__guideData = tween.__needsRot = void 0
            }
        }, MotionGuidePlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
            var data = endValues.guide;
            if (void 0 == data || data === startValues.guide) return value;
            if (data.lastRatio != ratio) {
                var t = (data.end - data.start) * (wait ? data.end : ratio) + data.start;
                switch (MotionGuidePlugin.calc(data, t, tween.target), data.orient) {
                    case "cw":
                    case "ccw":
                    case "auto":
                        tween.target.rotation += data.rotOffS + data.rotDelta * ratio;
                        break;
                    case "fixed":
                    default:
                        tween.target.rotation += data.rotOffS
                }
                data.lastRatio = ratio
            }
            return "rotation" != prop || data.orient && "false" != data.orient ? tween.target[prop] : value
        }, MotionGuidePlugin.calc = function(data, ratio, target) {
            if (void 0 == data._segments) throw "Missing critical pre-calculated information, please file a bug";
            void 0 == target && (target = {
                x: 0,
                y: 0,
                rotation: 0
            });
            for (var seg = data._segments, path = data.path, pos = data._length * ratio, cap = seg.length - 2, n = 0; pos > seg[n] && n < cap;) pos -= seg[n], n += 2;
            var sublines = seg[n + 1],
                i = 0;
            for (cap = sublines.length - 1; pos > sublines[i] && i < cap;) pos -= sublines[i], i++;
            var t = i / ++cap + pos / (cap * sublines[i]);
            n = 2 * n + 2;
            var inv = 1 - t;
            return target.x = inv * inv * path[n - 2] + 2 * inv * t * path[n + 0] + t * t * path[n + 2], target.y = inv * inv * path[n - 1] + 2 * inv * t * path[n + 1] + t * t * path[n + 3], data.orient && (target.rotation = 57.2957795 * Math.atan2((path[n + 1] - path[n - 1]) * inv + (path[n + 3] - path[n + 1]) * t, (path[n + 0] - path[n - 2]) * inv + (path[n + 2] - path[n + 0]) * t)), target
        }, createjs.MotionGuidePlugin = MotionGuidePlugin
    }(),
    function() {
        "use strict";
        var s = createjs.TweenJS = createjs.TweenJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function BlurFilter(blurX, blurY, quality) {
            (isNaN(blurX) || blurX < 0) && (blurX = 0), (isNaN(blurY) || blurY < 0) && (blurY = 0), (isNaN(quality) || quality < 1) && (quality = 1), this.blurX = 0 | blurX, this.blurY = 0 | blurY, this.quality = 0 | quality
        }
        var p = createjs.extend(BlurFilter, createjs.Filter);
        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], p.getBounds = function(rect) {
            var x = 0 | this.blurX,
                y = 0 | this.blurY;
            if (x <= 0 && y <= 0) return rect;
            var q = Math.pow(this.quality, .2);
            return (rect || new createjs.Rectangle).pad(x * q + 1, y * q + 1, x * q + 1, y * q + 1)
        }, p.clone = function() {
            return new BlurFilter(this.blurX, this.blurY, this.quality)
        }, p.toString = function() {
            return "[BlurFilter]"
        }, p._applyFilter = function(imageData) {
            ! function(imageData) {
                for (var pixels = imageData.data, size = imageData.width * imageData.height * 4, i = 0; i < size; i += 4) {
                    var a = pixels[i + 3] / 255;
                    pixels[i] *= a, pixels[i + 1] *= a, pixels[i + 2] *= a
                }
            }(imageData);
            var radiusX = this.blurX >> 1;
            if (isNaN(radiusX) || radiusX < 0) return !1;
            var radiusY = this.blurY >> 1;
            if (isNaN(radiusY) || radiusY < 0) return !1;
            if (0 == radiusX && 0 == radiusY) return !1;
            var iterations = this.quality;
            (isNaN(iterations) || iterations < 1) && (iterations = 1), (iterations |= 0) > 3 && (iterations = 3), iterations < 1 && (iterations = 1);
            var px = imageData.data,
                x = 0,
                y = 0,
                i = 0,
                p = 0,
                yp = 0,
                yi = 0,
                yw = 0,
                r = 0,
                g = 0,
                b = 0,
                a = 0,
                pr = 0,
                pg = 0,
                pb = 0,
                pa = 0,
                divx = radiusX + radiusX + 1 | 0,
                divy = radiusY + radiusY + 1 | 0,
                w = 0 | imageData.width,
                h = 0 | imageData.height,
                w1 = w - 1 | 0,
                h1 = h - 1 | 0,
                rxp1 = radiusX + 1 | 0,
                ryp1 = radiusY + 1 | 0,
                ssx = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sx = ssx;
            for (i = 1; i < divx; i++) sx = sx.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sx.n = ssx;
            var ssy = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sy = ssy;
            for (i = 1; i < divy; i++) sy = sy.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sy.n = ssy;
            for (var si = null, mtx = 0 | BlurFilter.MUL_TABLE[radiusX], stx = 0 | BlurFilter.SHG_TABLE[radiusX], mty = 0 | BlurFilter.MUL_TABLE[radiusY], sty = 0 | BlurFilter.SHG_TABLE[radiusY]; iterations-- > 0;) {
                yw = yi = 0;
                var ms = mtx,
                    ss = stx;
                for (y = h; --y > -1;) {
                    for (r = rxp1 * (pr = px[0 | yi]), g = rxp1 * (pg = px[yi + 1 | 0]), b = rxp1 * (pb = px[yi + 2 | 0]), a = rxp1 * (pa = px[yi + 3 | 0]), sx = ssx, i = rxp1; --i > -1;) sx.r = pr, sx.g = pg, sx.b = pb, sx.a = pa, sx = sx.n;
                    for (i = 1; i < rxp1; i++) p = yi + ((w1 < i ? w1 : i) << 2) | 0, r += sx.r = px[p], g += sx.g = px[p + 1], b += sx.b = px[p + 2], a += sx.a = px[p + 3], sx = sx.n;
                    for (si = ssx, x = 0; x < w; x++) px[yi++] = r * ms >>> ss, px[yi++] = g * ms >>> ss, px[yi++] = b * ms >>> ss, px[yi++] = a * ms >>> ss, p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n;
                    yw += w
                }
                for (ms = mty, ss = sty, x = 0; x < w; x++) {
                    for (r = ryp1 * (pr = px[yi = x << 2 | 0]) | 0, g = ryp1 * (pg = px[yi + 1 | 0]) | 0, b = ryp1 * (pb = px[yi + 2 | 0]) | 0, a = ryp1 * (pa = px[yi + 3 | 0]) | 0, sy = ssy, i = 0; i < ryp1; i++) sy.r = pr, sy.g = pg, sy.b = pb, sy.a = pa, sy = sy.n;
                    for (yp = w, i = 1; i <= radiusY; i++) yi = yp + x << 2, r += sy.r = px[yi], g += sy.g = px[yi + 1], b += sy.b = px[yi + 2], a += sy.a = px[yi + 3], sy = sy.n, i < h1 && (yp += w);
                    if (yi = x, si = ssy, iterations > 0)
                        for (y = 0; y < h; y++) px[p = yi << 2] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss, px[p + 3] = a * ms >>> ss, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w;
                    else
                        for (y = 0; y < h; y++) px[p = yi << 2] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss, px[p + 3] = a * ms >>> ss, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w
                }
            }
            return function(imageData) {
                for (var pixels = imageData.data, size = imageData.width * imageData.height * 4, i = 0; i < size; i += 4) {
                    var a = pixels[i + 3];
                    0 != a && (a = 255 / a, pixels[i] *= a, pixels[i + 1] *= a, pixels[i + 2] *= a)
                }
            }(imageData), !0
        }, createjs.BlurFilter = createjs.promote(BlurFilter, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function SpriteContainer(spriteSheet) {
            this.Container_constructor(), this.spriteSheet = spriteSheet
        }
        var p = createjs.extend(SpriteContainer, createjs.Container);
        p.addChild = function(child) {
            return null == child ? child : arguments.length > 1 ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(child, this.children.length)
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            if (!(child._spritestage_compatibility >= 1)) return console && console.log("Error: You can only add children of type SpriteContainer, Sprite, BitmapText, or DOMElement [" + child.toString() + "]"), child;
            if (child._spritestage_compatibility <= 4) {
                var spriteSheet = child.spriteSheet;
                if (!spriteSheet || !spriteSheet._images || spriteSheet._images.length > 1 || this.spriteSheet && this.spriteSheet !== spriteSheet) return console && console.log("Error: A child's spriteSheet must be equal to its parent spriteSheet and only use one image. [" + child.toString() + "]"), child;
                this.spriteSheet = spriteSheet
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child
        }, p.toString = function() {
            return "[SpriteContainer (name=" + this.name + ")]"
        }, createjs.SpriteContainer = createjs.promote(SpriteContainer, "Container")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function SpriteStage(canvas, preserveDrawingBuffer, antialias) {
            this.Stage_constructor(canvas), this._preserveDrawingBuffer = preserveDrawingBuffer || !1, this._antialias = antialias || !1, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._webGLErrorDetected = !1, this._clearColor = null, this._maxTexturesPerDraw = 1, this._maxBoxesPointsPerDraw = null, this._maxBoxesPerDraw = null, this._maxIndicesPerDraw = null, this._shaderProgram = null, this._vertices = null, this._verticesBuffer = null, this._indices = null, this._indicesBuffer = null, this._currentBoxIndex = -1, this._drawTexture = null, this._initializeWebGL()
        }[createjs.SpriteContainer, createjs.Sprite, createjs.BitmapText, createjs.Bitmap, createjs.DOMElement].forEach(function(_class, index) {
            _class.prototype._spritestage_compatibility = index + 1
        });
        var p = createjs.extend(SpriteStage, createjs.Stage);
        SpriteStage.NUM_VERTEX_PROPERTIES = 5, SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX = (SpriteStage.POINTS_PER_BOX = 4) * SpriteStage.NUM_VERTEX_PROPERTIES, SpriteStage.INDICES_PER_BOX = 6, SpriteStage.MAX_INDEX_SIZE = Math.pow(2, 16), SpriteStage.MAX_BOXES_POINTS_INCREMENT = SpriteStage.MAX_INDEX_SIZE / 4, p._get_isWebGL = function() {
            return !!this._webGLContext
        };
        try {
            Object.defineProperties(p, {
                isWebGL: {
                    get: p._get_isWebGL
                }
            })
        } catch (e) {}
        p.addChild = function(child) {
            return null == child ? child : arguments.length > 1 ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(child, this.children.length)
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            return child._spritestage_compatibility >= 1 ? !child.image && !child.spriteSheet && child._spritestage_compatibility <= 4 ? (console && console.log("Error: You can only add children that have an image or spriteSheet defined on them. [" + child.toString() + "]"), child) : (child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child) : (console && console.log("Error: You can only add children of type SpriteContainer, Sprite, Bitmap, BitmapText, or DOMElement. [" + child.toString() + "]"), child)
        }, p.update = function(props) {
            if (this.canvas) {
                this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), this.autoClear && this.clear();
                var ctx = this._setWebGLContext();
                ctx ? this.draw(ctx, !1) : ((ctx = this.canvas.getContext("2d")).save(), this.updateContext(ctx), this.draw(ctx, !1), ctx.restore()), this.dispatchEvent("drawend")
            }
        }, p.clear = function() {
            if (this.canvas) {
                var ctx = this._setWebGLContext();
                ctx ? ctx.clear(ctx.COLOR_BUFFER_BIT) : ((ctx = this.canvas.getContext("2d")).setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1))
            }
        }, p.draw = function(ctx, ignoreCache) {
            return "undefined" != typeof WebGLRenderingContext && (ctx === this._webGLContext || ctx instanceof WebGLRenderingContext) ? (this._drawWebGLKids(this.children, ctx), !0) : this.Stage_draw(ctx, ignoreCache)
        }, p.updateViewport = function(width, height) {
            this._viewportWidth = width, this._viewportHeight = height, this._webGLContext && (this._webGLContext.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix || (this._projectionMatrix = new Float32Array([0, 0, 0, 0, 0, 1, -1, 1, 1])), this._projectionMatrix[0] = 2 / width, this._projectionMatrix[4] = -2 / height)
        }, p.clearImageTexture = function(image) {
            image.__easeljs_texture = null
        }, p.toString = function() {
            return "[SpriteStage (name=" + this.name + ")]"
        }, p._initializeWebGL = function() {
            this._clearColor = {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            }, this._setWebGLContext()
        }, p._setWebGLContext = function() {
            return this.canvas ? this._webGLContext && this._webGLContext.canvas === this.canvas || this._initializeWebGLContext() : this._webGLContext = null, this._webGLContext
        }, p._initializeWebGLContext = function() {
            var options = {
                    depth: !1,
                    alpha: !0,
                    preserveDrawingBuffer: this._preserveDrawingBuffer,
                    antialias: this._antialias,
                    premultipliedAlpha: !0
                },
                ctx = this._webGLContext = this.canvas.getContext("webgl", options) || this.canvas.getContext("experimental-webgl", options);
            ctx && (this._maxTexturesPerDraw = 1, this._setClearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), ctx.enable(ctx.BLEND), ctx.blendFuncSeparate(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA, ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA), ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), this._createShaderProgram(ctx), this._webGLErrorDetected ? this._webGLContext = null : (this._createBuffers(ctx), this.updateViewport(this._viewportWidth || this.canvas.width || 0, this._viewportHeight || this.canvas.height || 0)))
        }, p._setClearColor = function(r, g, b, a) {
            this._clearColor.r = r, this._clearColor.g = g, this._clearColor.b = b, this._clearColor.a = a, this._webGLContext && this._webGLContext.clearColor(r, g, b, a)
        }, p._createShaderProgram = function(ctx) {
            var fragmentShader = this._createShader(ctx, ctx.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D uSampler0;varying vec3 vTextureCoord;void main(void) {vec4 color = texture2D(uSampler0, vTextureCoord.st);gl_FragColor = vec4(color.rgb, color.a * vTextureCoord.z);}"),
                vertexShader = this._createShader(ctx, ctx.VERTEX_SHADER, "attribute vec2 aVertexPosition;attribute vec3 aTextureCoord;uniform mat3 uPMatrix;varying vec3 vTextureCoord;void main(void) {vTextureCoord = aTextureCoord;gl_Position = vec4((uPMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);}");
            if (!this._webGLErrorDetected && fragmentShader && vertexShader) {
                var program = ctx.createProgram();
                ctx.attachShader(program, fragmentShader), ctx.attachShader(program, vertexShader), ctx.linkProgram(program), ctx.getProgramParameter(program, ctx.LINK_STATUS) ? (program.vertexPositionAttribute = ctx.getAttribLocation(program, "aVertexPosition"), program.textureCoordAttribute = ctx.getAttribLocation(program, "aTextureCoord"), program.sampler0uniform = ctx.getUniformLocation(program, "uSampler0"), ctx.enableVertexAttribArray(program.vertexPositionAttribute), ctx.enableVertexAttribArray(program.textureCoordAttribute), program.pMatrixUniform = ctx.getUniformLocation(program, "uPMatrix"), ctx.useProgram(program), this._shaderProgram = program) : this._webGLErrorDetected = !0
            }
        }, p._createShader = function(ctx, type, str) {
            var shader = ctx.createShader(type);
            return ctx.shaderSource(shader, str), ctx.compileShader(shader), ctx.getShaderParameter(shader, ctx.COMPILE_STATUS) ? shader : (this._webGLErrorDetected = !0, null)
        }, p._createBuffers = function(ctx) {
            this._verticesBuffer = ctx.createBuffer(), ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer);
            var byteCount = 4 * SpriteStage.NUM_VERTEX_PROPERTIES;
            ctx.vertexAttribPointer(this._shaderProgram.vertexPositionAttribute, 2, ctx.FLOAT, ctx.FALSE, byteCount, 0), ctx.vertexAttribPointer(this._shaderProgram.textureCoordAttribute, 3, ctx.FLOAT, ctx.FALSE, byteCount, 8), this._indicesBuffer = ctx.createBuffer(), this._setMaxBoxesPoints(ctx, SpriteStage.MAX_BOXES_POINTS_INCREMENT)
        }, p._setMaxBoxesPoints = function(ctx, value) {
            this._maxBoxesPointsPerDraw = value, this._maxBoxesPerDraw = this._maxBoxesPointsPerDraw / SpriteStage.POINTS_PER_BOX | 0, this._maxIndicesPerDraw = this._maxBoxesPerDraw * SpriteStage.INDICES_PER_BOX, ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer), this._vertices = new Float32Array(this._maxBoxesPerDraw * SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX), ctx.bufferData(ctx.ARRAY_BUFFER, this._vertices, ctx.DYNAMIC_DRAW), this._indices = new Uint16Array(this._maxIndicesPerDraw);
            for (var i = 0, l = this._indices.length; i < l; i += SpriteStage.INDICES_PER_BOX) {
                var j = i * SpriteStage.POINTS_PER_BOX / SpriteStage.INDICES_PER_BOX;
                this._indices[i] = j, this._indices[i + 1] = j + 1, this._indices[i + 2] = j + 2, this._indices[i + 3] = j, this._indices[i + 4] = j + 2, this._indices[i + 5] = j + 3
            }
            ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this._indicesBuffer), ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER, this._indices, ctx.STATIC_DRAW)
        }, p._setupImageTexture = function(ctx, image) {
            if (image && (image.naturalWidth || image.getContext || image.readyState >= 2)) {
                var texture = image.__easeljs_texture;
                return texture || (texture = image.__easeljs_texture = ctx.createTexture(), ctx.bindTexture(ctx.TEXTURE_2D, texture), ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, image), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE)), texture
            }
        }, p._drawWebGLKids = function(kids, ctx, parentMVMatrix) {
            for (var kid, mtx, snapToPixelEnabled = this.snapToPixelEnabled, image = null, leftSide = 0, topSide = 0, rightSide = 0, bottomSide = 0, vertices = this._vertices, numVertexPropertiesPerBox = SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX, maxIndexSize = SpriteStage.MAX_INDEX_SIZE, maxBoxIndex = this._maxBoxesPerDraw - 1, i = 0, l = kids.length; i < l; i++)
                if ((kid = kids[i]).isVisible()) {
                    var texture = (image = kid.image || kid.spriteSheet && kid.spriteSheet._images[0]).__easeljs_texture;
                    if (texture || (texture = this._setupImageTexture(ctx, image))) {
                        mtx = kid._props.matrix, mtx = (parentMVMatrix ? mtx.copy(parentMVMatrix) : mtx.identity()).appendTransform(kid.x, kid.y, kid.scaleX, kid.scaleY, kid.rotation, kid.skewX, kid.skewY, kid.regX, kid.regY);
                        var uStart = 0,
                            uEnd = 1,
                            vStart = 0,
                            vEnd = 1;
                        if (4 === kid._spritestage_compatibility) leftSide = 0, topSide = 0, rightSide = image.width, bottomSide = image.height;
                        else if (2 === kid._spritestage_compatibility) {
                            var frame = kid.spriteSheet.getFrame(kid.currentFrame),
                                rect = frame.rect;
                            leftSide = -frame.regX, topSide = -frame.regY, rightSide = leftSide + rect.width, bottomSide = topSide + rect.height, uStart = rect.x / image.width, vStart = rect.y / image.height, uEnd = uStart + rect.width / image.width, vEnd = vStart + rect.height / image.height
                        } else image = null, 3 === kid._spritestage_compatibility && kid._updateText();
                        if (!parentMVMatrix && kid._spritestage_compatibility <= 4 && texture !== this._drawTexture && (this._drawToGPU(ctx), this._drawTexture = texture), null !== image) {
                            var offset = ++this._currentBoxIndex * numVertexPropertiesPerBox,
                                a = mtx.a,
                                b = mtx.b,
                                c = mtx.c,
                                d = mtx.d,
                                tx = mtx.tx,
                                ty = mtx.ty;
                            snapToPixelEnabled && kid.snapToPixel && (tx = tx + (tx < 0 ? -.5 : .5) | 0, ty = ty + (ty < 0 ? -.5 : .5) | 0), vertices[offset] = leftSide * a + topSide * c + tx, vertices[offset + 1] = leftSide * b + topSide * d + ty, vertices[offset + 5] = leftSide * a + bottomSide * c + tx, vertices[offset + 6] = leftSide * b + bottomSide * d + ty, vertices[offset + 10] = rightSide * a + bottomSide * c + tx, vertices[offset + 11] = rightSide * b + bottomSide * d + ty, vertices[offset + 15] = rightSide * a + topSide * c + tx, vertices[offset + 16] = rightSide * b + topSide * d + ty, vertices[offset + 2] = vertices[offset + 7] = uStart, vertices[offset + 12] = vertices[offset + 17] = uEnd, vertices[offset + 3] = vertices[offset + 18] = vStart, vertices[offset + 8] = vertices[offset + 13] = vEnd, vertices[offset + 4] = vertices[offset + 9] = vertices[offset + 14] = vertices[offset + 19] = kid.alpha, this._currentBoxIndex === maxBoxIndex && (this._drawToGPU(ctx), this._drawTexture = texture, this._maxBoxesPointsPerDraw < maxIndexSize && (this._setMaxBoxesPoints(ctx, this._maxBoxesPointsPerDraw + SpriteStage.MAX_BOXES_POINTS_INCREMENT), maxBoxIndex = this._maxBoxesPerDraw - 1))
                        }
                        kid.children && (this._drawWebGLKids(kid.children, ctx, mtx), maxBoxIndex = this._maxBoxesPerDraw - 1)
                    }
                }
            parentMVMatrix || this._drawToGPU(ctx)
        }, p._drawToGPU = function(ctx) {
            if (this._drawTexture) {
                var numBoxes = this._currentBoxIndex + 1;
                ctx.activeTexture(ctx.TEXTURE0), ctx.bindTexture(ctx.TEXTURE_2D, this._drawTexture), ctx.uniform1i(this._shaderProgram.sampler0uniform, 0), ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer), ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this._indicesBuffer), ctx.uniformMatrix3fv(this._shaderProgram.pMatrixUniform, !1, this._projectionMatrix), ctx.bufferSubData(ctx.ARRAY_BUFFER, 0, this._vertices), ctx.drawElements(ctx.TRIANGLES, numBoxes * SpriteStage.INDICES_PER_BOX, ctx.UNSIGNED_SHORT, 0), this._currentBoxIndex = -1, this._drawTexture = null
            }
        }, createjs.SpriteStage = createjs.promote(SpriteStage, "Stage")
    }(),
    function() {
        "use strict";
        var HowlerGlobal = function() {
            this.init()
        };
        HowlerGlobal.prototype = {
            init: function() {
                var self = this || Howler;
                return self._codecs = {}, self._howls = [], self._muted = !1, self._volume = 1, self._canPlayEvent = "canplaythrough", self._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, self.masterGain = null, self.noAudio = !1, self.usingWebAudio = !0, self.autoSuspend = !0, self.ctx = null, self.mobileAutoEnable = !0, self._setup(), self
            },
            volume: function(vol) {
                var self = this || Howler;
                if (vol = parseFloat(vol), self.ctx || setupAudioContext(), void 0 !== vol && vol >= 0 && vol <= 1) {
                    if (self._volume = vol, self._muted) return self;
                    self.usingWebAudio && (self.masterGain.gain.value = vol);
                    for (var i = 0; i < self._howls.length; i++)
                        if (!self._howls[i]._webAudio)
                            for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                                var sound = self._howls[i]._soundById(ids[j]);
                                sound && sound._node && (sound._node.volume = sound._volume * vol)
                            }
                    return self
                }
                return self._volume
            },
            mute: function(muted) {
                var self = this || Howler;
                self.ctx || setupAudioContext(), self._muted = muted, self.usingWebAudio && (self.masterGain.gain.value = muted ? 0 : self._volume);
                for (var i = 0; i < self._howls.length; i++)
                    if (!self._howls[i]._webAudio)
                        for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                            var sound = self._howls[i]._soundById(ids[j]);
                            sound && sound._node && (sound._node.muted = !!muted || sound._muted)
                        }
                return self
            },
            unload: function() {
                for (var self = this || Howler, i = self._howls.length - 1; i >= 0; i--) self._howls[i].unload();
                return self.usingWebAudio && void 0 !== self.ctx.close && (self.ctx.close(), self.ctx = null, setupAudioContext()), self
            },
            codecs: function(ext) {
                return (this || Howler)._codecs[ext]
            },
            _setup: function() {
                var self = this || Howler;
                return self.state = self.ctx ? self.ctx.state || "running" : "running", self._autoSuspend(), self.noAudio || self._setupCodecs(), self
            },
            _setupCodecs: function() {
                var self = this || Howler,
                    audioTest = "undefined" != typeof Audio ? new Audio : null;
                if (!audioTest || "function" != typeof audioTest.canPlayType) return self;
                var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g),
                    isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33,
                    isEdge = self._navigator && /Edge\//g.test(self._navigator.userAgent);
                return self._codecs = {
                    mp3: !(isOldOpera || !mpegTest && !audioTest.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!mpegTest,
                    opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && !isEdge,
                    oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
                }, self
            },
            _enableMobileAudio: function() {
                var self = this || Howler,
                    isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent),
                    isTouch = !!("ontouchend" in window || self._navigator && self._navigator.maxTouchPoints > 0 || self._navigator && self._navigator.msMaxTouchPoints > 0);
                if (!self._mobileEnabled && self.ctx && (isMobile || isTouch)) {
                    self._mobileEnabled = !1, self._mobileUnloaded || 44100 === self.ctx.sampleRate || (self._mobileUnloaded = !0, self.unload()), self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
                    var unlock = function() {
                        var source = self.ctx.createBufferSource();
                        source.buffer = self._scratchBuffer, source.connect(self.ctx.destination), void 0 === source.start ? source.noteOn(0) : source.start(0), source.onended = function() {
                            source.disconnect(0), self._mobileEnabled = !0, self.mobileAutoEnable = !1, document.removeEventListener("touchend", unlock, !0)
                        }
                    };
                    return document.addEventListener("touchend", unlock, !0), self
                }
            },
            _autoSuspend: function() {
                var self = this;
                if (self.autoSuspend && self.ctx && void 0 !== self.ctx.suspend && Howler.usingWebAudio) {
                    for (var i = 0; i < self._howls.length; i++)
                        if (self._howls[i]._webAudio)
                            for (var j = 0; j < self._howls[i]._sounds.length; j++)
                                if (!self._howls[i]._sounds[j]._paused) return self;
                    return self._suspendTimer && clearTimeout(self._suspendTimer), self._suspendTimer = setTimeout(function() {
                        self.autoSuspend && (self._suspendTimer = null, null == self.ctx || "interrupted" === self.ctx.state ? (self.state = "suspended", self._autoResume()) : (self.state = "suspending", self.ctx.suspend().then(function() {
                            self.state = "suspended", self._resumeAfterSuspend && (delete self._resumeAfterSuspend, self._autoResume())
                        })))
                    }, 3e4), self
                }
            },
            _autoResume: function() {
                var self = this;
                if (self.ctx && void 0 !== self.ctx.resume && Howler.usingWebAudio) return "running" === self.state && self._suspendTimer ? (clearTimeout(self._suspendTimer), self._suspendTimer = null) : "suspended" === self.state ? (self.state = "resuming", self.ctx.resume().then(function() {
                    self.state = "running"
                }), self._suspendTimer && (clearTimeout(self._suspendTimer), self._suspendTimer = null)) : "suspending" === self.state && (self._resumeAfterSuspend = !0), self
            }
        };
        var Howler = new HowlerGlobal,
            Howl = function(o) {
                o.src && 0 !== o.src.length ? this.init(o) : console.error("An array of source files must be passed with any new Howl.")
            };
        Howl.prototype = {
            init: function(o) {
                return Howler.ctx || setupAudioContext(), this._autoplay = o.autoplay || !1, this._format = "string" != typeof o.format ? o.format : [o.format], this._html5 = o.html5 || !1, this._muted = o.mute || !1, this._loop = o.loop || !1, this._pool = o.pool || 5, this._preload = "boolean" != typeof o.preload || o.preload, this._rate = o.rate || 1, this._sprite = o.sprite || {}, this._src = "string" != typeof o.src ? o.src : [o.src], this._volume = void 0 !== o.volume ? o.volume : 1, this._duration = 0, this._state = "unloaded", this._sounds = [], this._endTimers = {}, this._queue = [], this._onend = o.onend ? [{
                    fn: o.onend
                }] : [], this._onfade = o.onfade ? [{
                    fn: o.onfade
                }] : [], this._onload = o.onload ? [{
                    fn: o.onload
                }] : [], this._onloaderror = o.onloaderror ? [{
                    fn: o.onloaderror
                }] : [], this._onpause = o.onpause ? [{
                    fn: o.onpause
                }] : [], this._onplay = o.onplay ? [{
                    fn: o.onplay
                }] : [], this._onstop = o.onstop ? [{
                    fn: o.onstop
                }] : [], this._onmute = o.onmute ? [{
                    fn: o.onmute
                }] : [], this._onvolume = o.onvolume ? [{
                    fn: o.onvolume
                }] : [], this._onrate = o.onrate ? [{
                    fn: o.onrate
                }] : [], this._onseek = o.onseek ? [{
                    fn: o.onseek
                }] : [], this._webAudio = Howler.usingWebAudio && !this._html5, void 0 !== Howler.ctx && Howler.ctx && Howler.mobileAutoEnable && Howler._enableMobileAudio(), Howler._howls.push(this), this._preload && this.load(), this
            },
            load: function() {
                var url = null;
                if (Howler.noAudio) this._emit("loaderror", null, "No audio support.");
                else {
                    "string" == typeof this._src && (this._src = [this._src]);
                    for (var i = 0; i < this._src.length; i++) {
                        var ext, str;
                        if (this._format && this._format[i]) ext = this._format[i];
                        else {
                            if ("string" != typeof(str = this._src[i])) {
                                this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }(ext = /^data:audio\/([^;,]+);/i.exec(str)) || (ext = /\.([^.]+)$/.exec(str.split("?", 1)[0])), ext && (ext = ext[1].toLowerCase())
                        }
                        if (Howler.codecs(ext)) {
                            url = this._src[i];
                            break
                        }
                    }
                    if (url) return this._src = url, this._state = "loading", "https:" === window.location.protocol && "http:" === url.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new Sound(this), this._webAudio && loadBuffer(this), this;
                    this._emit("loaderror", null, "No codec support for selected audio sources.")
                }
            },
            play: function(sprite, internal) {
                var self = this,
                    id = null;
                if ("number" == typeof sprite) id = sprite, sprite = null;
                else {
                    if ("string" == typeof sprite && "loaded" === self._state && !self._sprite[sprite]) return null;
                    if (void 0 === sprite) {
                        sprite = "__default";
                        for (var num = 0, i = 0; i < self._sounds.length; i++) self._sounds[i]._paused && !self._sounds[i]._ended && (num++, id = self._sounds[i]._id);
                        1 === num ? sprite = null : id = null
                    }
                }
                var sound = id ? self._soundById(id) : self._inactiveSound();
                if (!sound) return null;
                if (id && !sprite && (sprite = sound._sprite || "__default"), "loaded" !== self._state && !self._sprite[sprite]) return self._queue.push({
                    event: "play",
                    action: function() {
                        self.play(self._soundById(sound._id) ? sound._id : void 0)
                    }
                }), sound._id;
                if (id && !sound._paused) return internal || setTimeout(function() {
                    self._emit("play", sound._id)
                }, 0), sound._id;
                self._webAudio && Howler._autoResume();
                var seek = sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3,
                    duration = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek;
                duration < 0 && (duration = 0);
                var timeout = 1e3 * duration / Math.abs(sound._rate);
                sound._paused = !1, sound._ended = !1, sound._sprite = sprite, sound._seek = seek, sound._start = self._sprite[sprite][0] / 1e3, sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3, sound._loop = !(!sound._loop && !self._sprite[sprite][2]);
                var node = sound._node;
                if (self._webAudio) {
                    var playWebAudio = function() {
                        self._refreshBuffer(sound);
                        var vol = sound._muted || self._muted ? 0 : sound._volume;
                        node.gain.setValueAtTime(vol, Howler.ctx.currentTime), sound._playStart = Howler.ctx.currentTime, void 0 === node.bufferSource.start ? sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration) : sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration), timeout !== 1 / 0 && (self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)), internal || setTimeout(function() {
                            self._emit("play", sound._id)
                        }, 0)
                    };
                    "loaded" === self._state ? playWebAudio() : (self.once("load", playWebAudio, sound._id), self._clearTimer(sound._id))
                } else {
                    var playHtml5 = function() {
                            node.currentTime = seek, node.muted = sound._muted || self._muted || Howler._muted || node.muted, node.volume = sound._volume * Howler.volume(), node.playbackRate = sound._rate, setTimeout(function() {
                                var play = node.play();
                                play && play.catch(function(e) {
                                    console.warn(e)
                                }), timeout !== 1 / 0 && (self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)), internal || self._emit("play", sound._id)
                            }, 0)
                        },
                        loadedNoReadyState = "loaded" === self._state && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS);
                    if (4 === node.readyState || loadedNoReadyState) playHtml5();
                    else {
                        var listener = function() {
                            playHtml5(), node.removeEventListener(Howler._canPlayEvent, listener, !1)
                        };
                        node.addEventListener(Howler._canPlayEvent, listener, !1), self._clearTimer(sound._id)
                    }
                }
                return sound._id
            },
            pause: function(id) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "pause",
                    action: function() {
                        self.pause(id)
                    }
                }), self;
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    self._clearTimer(ids[i]);
                    var sound = self._soundById(ids[i]);
                    if (sound && !sound._paused) {
                        if (sound._seek = self.seek(ids[i]), sound._rateSeek = 0, sound._paused = !0, self._stopFade(ids[i]), sound._node)
                            if (self._webAudio) {
                                if (!sound._node.bufferSource) return self;
                                void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), self._cleanBuffer(sound._node)
                            } else isNaN(sound._node.duration) && sound._node.duration !== 1 / 0 || sound._node.pause();
                        arguments[1] || self._emit("pause", sound._id)
                    }
                }
                return self
            },
            stop: function(id, internal) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "stop",
                    action: function() {
                        self.stop(id)
                    }
                }), self;
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    self._clearTimer(ids[i]);
                    var sound = self._soundById(ids[i]);
                    if (sound && !sound._paused && (sound._seek = sound._start || 0, sound._rateSeek = 0, sound._paused = !0, sound._ended = !0, self._stopFade(ids[i]), sound._node))
                        if (self._webAudio) {
                            if (!sound._node.bufferSource) return self;
                            void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), self._cleanBuffer(sound._node)
                        } else isNaN(sound._node.duration) && sound._node.duration !== 1 / 0 || (sound._node.currentTime = sound._start || 0, sound._node.pause());
                    sound && !internal && self._emit("stop", sound._id)
                }
                return self
            },
            mute: function(muted, id) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "mute",
                    action: function() {
                        self.mute(muted, id)
                    }
                }), self;
                if (void 0 === id) {
                    if ("boolean" != typeof muted) return self._muted;
                    self._muted = muted
                }
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    var sound = self._soundById(ids[i]);
                    sound && (sound._muted = muted, self._webAudio && sound._node ? sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime) : sound._node && (sound._node.muted = !!Howler._muted || muted), self._emit("mute", sound._id))
                }
                return self
            },
            volume: function() {
                var vol, id, self = this,
                    args = arguments;
                if (0 === args.length) return self._volume;
                if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : vol = parseFloat(args[0])
                } else args.length >= 2 && (vol = parseFloat(args[0]), id = parseInt(args[1], 10));
                var sound;
                if (!(void 0 !== vol && vol >= 0 && vol <= 1)) return (sound = id ? self._soundById(id) : self._sounds[0]) ? sound._volume : 0;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "volume",
                    action: function() {
                        self.volume.apply(self, args)
                    }
                }), self;
                void 0 === id && (self._volume = vol), id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++)(sound = self._soundById(id[i])) && (sound._volume = vol, args[2] || self._stopFade(id[i]), self._webAudio && sound._node && !sound._muted ? sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime) : sound._node && !sound._muted && (sound._node.volume = vol * Howler.volume()), self._emit("volume", sound._id));
                return self
            },
            fade: function(from, to, len, id) {
                var self = this,
                    diff = Math.abs(from - to),
                    dir = from > to ? "out" : "in",
                    stepLen = len / (diff / .01);
                if ("loaded" !== self._state) return self._queue.push({
                    event: "fade",
                    action: function() {
                        self.fade(from, to, len, id)
                    }
                }), self;
                self.volume(from, id);
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    var sound = self._soundById(ids[i]);
                    if (sound) {
                        if (id || self._stopFade(ids[i]), self._webAudio && !sound._muted) {
                            var currentTime = Howler.ctx.currentTime,
                                end = currentTime + len / 1e3;
                            sound._volume = from, sound._node.gain.setValueAtTime(from, currentTime), sound._node.gain.linearRampToValueAtTime(to, end)
                        }
                        var vol = from;
                        sound._interval = setInterval(function(soundId, sound) {
                            vol += "in" === dir ? .01 : -.01, vol = Math.max(0, vol), vol = Math.min(1, vol), vol = Math.round(100 * vol) / 100, self._webAudio ? (void 0 === id && (self._volume = vol), sound._volume = vol) : self.volume(vol, soundId, !0), vol === to && (clearInterval(sound._interval), sound._interval = null, self.volume(vol, soundId), self._emit("fade", soundId))
                        }.bind(self, ids[i], sound), stepLen)
                    }
                }
                return self
            },
            _stopFade: function(id) {
                var sound = this._soundById(id);
                return sound && sound._interval && (this._webAudio && sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime), clearInterval(sound._interval), sound._interval = null, this._emit("fade", id)), this
            },
            loop: function() {
                var loop, id, sound, args = arguments;
                if (0 === args.length) return this._loop;
                if (1 === args.length) {
                    if ("boolean" != typeof args[0]) return !!(sound = this._soundById(parseInt(args[0], 10))) && sound._loop;
                    loop = args[0], this._loop = loop
                } else 2 === args.length && (loop = args[0], id = parseInt(args[1], 10));
                for (var ids = this._getSoundIds(id), i = 0; i < ids.length; i++)(sound = this._soundById(ids[i])) && (sound._loop = loop, !this._webAudio && sound._node && (sound._node.loop = loop), this._webAudio && sound._node && sound._node.bufferSource && (sound._node.bufferSource.loop = loop, loop && (sound._node.bufferSource.loopStart = sound._start || 0, sound._node.bufferSource.loopEnd = sound._stop, this.playing(ids[i]) && (void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), this._refreshBuffer(sound), void 0 === sound._node.bufferSource.start ? sound._node.bufferSource.noteGrainOn(0, this.seek(ids[i]), 86400) : sound._node.bufferSource.start(0, this.seek(ids[i]), 86400)))));
                return this
            },
            rate: function() {
                var rate, id, self = this,
                    args = arguments;
                if (0 === args.length) id = self._sounds[0]._id;
                else if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : rate = parseFloat(args[0])
                } else 2 === args.length && (rate = parseFloat(args[0]), id = parseInt(args[1], 10));
                var sound;
                if ("number" != typeof rate) return (sound = self._soundById(id)) ? sound._rate : self._rate;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "rate",
                    action: function() {
                        self.rate.apply(self, args)
                    }
                }), self;
                void 0 === id && (self._rate = rate), id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++)
                    if (sound = self._soundById(id[i])) {
                        sound._rateSeek = self.seek(id[i]), sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart, sound._rate = rate, self._webAudio && sound._node && sound._node.bufferSource ? sound._node.bufferSource.playbackRate.value = rate : sound._node && (sound._node.playbackRate = rate);
                        var seek = self.seek(id[i]),
                            timeout = 1e3 * ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek) / Math.abs(sound._rate);
                        !self._endTimers[id[i]] && sound._paused || (self._clearTimer(id[i]), self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout)), self._emit("rate", sound._id)
                    }
                return self
            },
            seek: function() {
                var seek, id, self = this,
                    args = arguments;
                if (0 === args.length) id = self._sounds[0]._id;
                else if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : (id = self._sounds[0]._id, seek = parseFloat(args[0]))
                } else 2 === args.length && (seek = parseFloat(args[0]), id = parseInt(args[1], 10));
                if (void 0 === id) return self;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "seek",
                    action: function() {
                        self.seek.apply(self, args)
                    }
                }), self;
                var sound = self._soundById(id);
                if (sound) {
                    if (!("number" == typeof seek && seek >= 0)) {
                        if (self._webAudio) {
                            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0,
                                rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate))
                        }
                        return sound._node.currentTime
                    }
                    var playing = self.playing(id);
                    playing && self.pause(id, !0), sound._seek = seek, sound._ended = !1, self._clearTimer(id), playing && self.play(id, !0), !self._webAudio && sound._node && (sound._node.currentTime = seek), self._emit("seek", id)
                }
                return self
            },
            playing: function(id) {
                if ("number" == typeof id) {
                    var sound = this._soundById(id);
                    return !!sound && !sound._paused
                }
                for (var i = 0; i < this._sounds.length; i++)
                    if (!this._sounds[i]._paused) return !0;
                return !1
            },
            duration: function(id) {
                var duration = this._duration,
                    sound = this._soundById(id);
                return sound && (duration = this._sprite[sound._sprite][1] / 1e3), duration
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var self = this, sounds = self._sounds, i = 0; i < sounds.length; i++) {
                    sounds[i]._paused || (self.stop(sounds[i]._id), self._emit("end", sounds[i]._id)), self._webAudio || (sounds[i]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, !1), sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, !1)), delete sounds[i]._node, self._clearTimer(sounds[i]._id);
                    var index = Howler._howls.indexOf(self);
                    index >= 0 && Howler._howls.splice(index, 1)
                }
                var remCache = !0;
                for (i = 0; i < Howler._howls.length; i++)
                    if (Howler._howls[i]._src === self._src) {
                        remCache = !1;
                        break
                    }
                return cache && remCache && delete cache[self._src], self._state = "unloaded", self._sounds = [], self = null, null
            },
            on: function(event, fn, id, once) {
                var events = this["_on" + event];
                return "function" == typeof fn && events.push(once ? {
                    id: id,
                    fn: fn,
                    once: once
                } : {
                    id: id,
                    fn: fn
                }), this
            },
            off: function(event, fn, id) {
                var events = this["_on" + event],
                    i = 0;
                if (fn) {
                    for (i = 0; i < events.length; i++)
                        if (fn === events[i].fn && id === events[i].id) {
                            events.splice(i, 1);
                            break
                        }
                } else if (event) this["_on" + event] = [];
                else {
                    var keys = Object.keys(this);
                    for (i = 0; i < keys.length; i++) 0 === keys[i].indexOf("_on") && Array.isArray(this[keys[i]]) && (this[keys[i]] = [])
                }
                return this
            },
            once: function(event, fn, id) {
                return this.on(event, fn, id, 1), this
            },
            _emit: function(event, id, msg) {
                for (var events = this["_on" + event], i = events.length - 1; i >= 0; i--) events[i].id && events[i].id !== id && "load" !== event || (setTimeout(function(fn) {
                    fn.call(this, id, msg)
                }.bind(this, events[i].fn), 0), events[i].once && this.off(event, events[i].fn, events[i].id));
                return "loaderror" === event && (this.__hasLoadError = !0), this
            },
            _loadQueue: function() {
                var self = this;
                if (self._queue.length > 0) {
                    var task = self._queue[0];
                    self.once(task.event, function() {
                        self._queue.shift(), self._loadQueue()
                    }), task.action()
                }
                return self
            },
            _ended: function(sound) {
                var sprite = sound._sprite,
                    loop = !(!sound._loop && !this._sprite[sprite][2]);
                if (this._emit("end", sound._id), this._webAudio, this._webAudio && loop) {
                    this._emit("play", sound._id), sound._seek = sound._start || 0, sound._rateSeek = 0, sound._playStart = Howler.ctx.currentTime;
                    var timeout = 1e3 * (sound._stop - sound._start) / Math.abs(sound._rate);
                    this._endTimers[sound._id] = setTimeout(this._ended.bind(this, sound), timeout)
                }
                return this._webAudio && !loop && (sound._paused = !0, sound._ended = !0, sound._seek = sound._start || 0, sound._rateSeek = 0, this._clearTimer(sound._id), this._cleanBuffer(sound._node), Howler._autoSuspend()), this._webAudio || loop || this.stop(sound._id), this
            },
            _clearTimer: function(id) {
                return this._endTimers[id] && (clearTimeout(this._endTimers[id]), delete this._endTimers[id]), this
            },
            _soundById: function(id) {
                for (var i = 0; i < this._sounds.length; i++)
                    if (id === this._sounds[i]._id) return this._sounds[i];
                return null
            },
            _inactiveSound: function() {
                this._drain();
                for (var i = 0; i < this._sounds.length; i++)
                    if (this._sounds[i]._ended) return this._sounds[i].reset();
                return new Sound(this)
            },
            _drain: function() {
                var limit = this._pool,
                    cnt = 0,
                    i = 0;
                if (!(this._sounds.length < limit)) {
                    for (i = 0; i < this._sounds.length; i++) this._sounds[i]._ended && cnt++;
                    for (i = this._sounds.length - 1; i >= 0; i--) {
                        if (cnt <= limit) return;
                        this._sounds[i]._ended && (this._webAudio && this._sounds[i]._node && this._sounds[i]._node.disconnect(0), this._sounds.splice(i, 1), cnt--)
                    }
                }
            },
            _getSoundIds: function(id) {
                if (void 0 === id) {
                    for (var ids = [], i = 0; i < this._sounds.length; i++) ids.push(this._sounds[i]._id);
                    return ids
                }
                return [id]
            },
            _refreshBuffer: function(sound) {
                return sound._node.bufferSource = Howler.ctx.createBufferSource(), sound._node.bufferSource.buffer = cache[this._src], sound._panner ? sound._node.bufferSource.connect(sound._panner) : sound._node.bufferSource.connect(sound._node), sound._node.bufferSource.loop = sound._loop, sound._loop && (sound._node.bufferSource.loopStart = sound._start || 0, sound._node.bufferSource.loopEnd = sound._stop), sound._node.bufferSource.playbackRate.value = sound._rate, this
            },
            _cleanBuffer: function(node) {
                if (this._scratchBuffer) {
                    node.bufferSource.onended = null, node.bufferSource.disconnect(0);
                    try {
                        node.bufferSource.buffer = this._scratchBuffer
                    } catch (e) {}
                }
                return node.bufferSource = null, this
            }
        };
        var Sound = function(howl) {
            this._parent = howl, this.init()
        };
        Sound.prototype = {
            init: function() {
                var parent = this._parent;
                this._muted = parent._muted, this._loop = parent._loop, this._volume = parent._volume, this._muted = parent._muted, this._rate = parent._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = Math.round(Date.now() * Math.random()), parent._sounds.push(this);
                try {
                    this.create()
                } catch (e) {
                    console.log(e)
                }
                return this
            },
            create: function() {
                var parent = this._parent,
                    volume = Howler._muted || this._muted || this._parent._muted ? 0 : this._volume;
                return parent._webAudio ? (this._node = void 0 === Howler.ctx.createGain ? Howler.ctx.createGainNode() : Howler.ctx.createGain(), this._node.gain.setValueAtTime(volume, Howler.ctx.currentTime), this._node.paused = !0, this._node.connect(Howler.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(Howler._canPlayEvent, this._loadFn, !1), this._node.src = parent._src, this._node.preload = "auto", this._node.volume = volume * Howler.volume(), this._node.load()), this
            },
            reset: function() {
                var parent = this._parent;
                return this._muted = parent._muted, this._loop = parent._loop, this._volume = parent._volume, this._muted = parent._muted, this._rate = parent._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = Math.round(Date.now() * Math.random()), this
            },
            _errorListener: function() {
                this._node.error && 4 === this._node.error.code && (Howler.noAudio = !0), this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorListener, !1)
            },
            _loadListener: function() {
                var parent = this._parent;
                parent._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(parent._sprite).length && (parent._sprite = {
                    __default: [0, 1e3 * parent._duration]
                }), "loaded" !== parent._state && (parent._state = "loaded", parent._emit("load"), parent._loadQueue()), parent._autoplay && parent.play(), this._node.removeEventListener(Howler._canPlayEvent, this._loadFn, !1)
            }
        };
        var cache = {},
            loadBuffer = function(self) {
                var url = self._src;
                if (cache[url]) return self._duration = cache[url].duration, void loadSound(self);
                if (/^data:[^;]+;base64,/.test(url)) {
                    for (var data = atob(url.split(",")[1]), dataView = new Uint8Array(data.length), i = 0; i < data.length; ++i) dataView[i] = data.charCodeAt(i);
                    decodeAudioData(dataView.buffer, self)
                } else {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
                        var code = (xhr.status + "")[0];
                        "0" === code || "2" === code || "3" === code ? decodeAudioData(xhr.response, self) : self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".")
                    }, xhr.onerror = function() {
                        self._webAudio && (self._html5 = !0, self._webAudio = !1, self._sounds = [], delete cache[url], self.load())
                    }, safeXhrSend(xhr)
                }
            },
            safeXhrSend = function(xhr) {
                try {
                    xhr.send()
                } catch (e) {
                    xhr.onerror()
                }
            },
            decodeAudioData = function(arraybuffer, self) {
                var decoder = Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
                    buffer && self._sounds.length > 0 && (cache[self._src] = buffer, loadSound(self, buffer))
                }, function() {
                    self._emit("loaderror", null, "Decoding audio data failed.")
                });
                decoder && decoder.catch(function() {
                    console.warn("Decoding audio data failed.")
                })
            },
            loadSound = function(self, buffer) {
                buffer && !self._duration && (self._duration = buffer.duration), 0 === Object.keys(self._sprite).length && (self._sprite = {
                    __default: [0, 1e3 * self._duration]
                }), "loaded" !== self._state && (self._state = "loaded", self._emit("load"), self._loadQueue()), self._autoplay && self.play()
            },
            setupAudioContext = function() {
                Howler.noAudio = !1;
                try {
                    "undefined" != typeof AudioContext ? Howler.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? Howler.ctx = new webkitAudioContext : Howler.usingWebAudio = !1
                } catch (e) {
                    Howler.usingWebAudio = !1
                }
                if (Howler.ctx) {
                    if (!Howler.usingWebAudio)
                        if ("undefined" != typeof Audio) try {
                            void 0 === (new Audio).oncanplaythrough && (Howler._canPlayEvent = "canplay")
                        } catch (e) {
                            Howler.noAudio = !0
                        } else Howler.noAudio = !0
                } else Howler.usingWebAudio = !1, Howler.noAudio = !0;
                try {
                    (new Audio).muted && (Howler.noAudio = !0)
                } catch (e) {}
                var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform),
                    appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    version = appVersion ? parseInt(appVersion[1], 10) : null;
                if (iOS && version && version < 9) {
                    var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
                    (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) && (Howler.usingWebAudio = !1)
                }
                Howler.usingWebAudio && (Howler.masterGain = void 0 === Howler.ctx.createGain ? Howler.ctx.createGainNode() : Howler.ctx.createGain(), Howler.masterGain.gain.value = 1, Howler.masterGain.connect(Howler.ctx.destination)), Howler._setup()
            };
        "function" == typeof define && define.amd && define([], function() {
            return {
                Howler: Howler,
                Howl: Howl
            }
        }), "undefined" != typeof exports && (exports.Howler = Howler, exports.Howl = Howl), "undefined" != typeof window ? (window.HowlerGlobal = HowlerGlobal, window.Howler = Howler, window.Howl = Howl, window.Sound = Sound) : "undefined" != typeof global && (global.HowlerGlobal = HowlerGlobal, global.Howler = Howler, global.Howl = Howl, global.Sound = Sound)
    }(),
    function() {
        "use strict";
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(pan) {
            if (!this.ctx || !this.ctx.listener) return this;
            for (var i = this._howls.length - 1; i >= 0; i--) this._howls[i].stereo(pan);
            return this
        }, HowlerGlobal.prototype.pos = function(x, y, z) {
            return this.ctx && this.ctx.listener ? (y = "number" != typeof y ? this._pos[1] : y, z = "number" != typeof z ? this._pos[2] : z, "number" != typeof x ? this._pos : (this._pos = [x, y, z], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this)) : this
        }, HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
            if (!this.ctx || !this.ctx.listener) return this;
            var or = this._orientation;
            return y = "number" != typeof y ? or[1] : y, z = "number" != typeof z ? or[2] : z, xUp = "number" != typeof xUp ? or[3] : xUp, yUp = "number" != typeof yUp ? or[4] : yUp, zUp = "number" != typeof zUp ? or[5] : zUp, "number" != typeof x ? or : (this._orientation = [x, y, z, xUp, yUp, zUp], this.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp), this)
        }, Howl.prototype.init = function(_super) {
            return function(o) {
                return this._orientation = o.orientation || [1, 0, 0], this._stereo = o.stereo || null, this._pos = o.pos || null, this._pannerAttr = {
                    coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : 360,
                    coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : 360,
                    coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : 0,
                    distanceModel: void 0 !== o.distanceModel ? o.distanceModel : "inverse",
                    maxDistance: void 0 !== o.maxDistance ? o.maxDistance : 1e4,
                    panningModel: void 0 !== o.panningModel ? o.panningModel : "HRTF",
                    refDistance: void 0 !== o.refDistance ? o.refDistance : 1,
                    rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : 1
                }, this._onstereo = o.onstereo ? [{
                    fn: o.onstereo
                }] : [], this._onpos = o.onpos ? [{
                    fn: o.onpos
                }] : [], this._onorientation = o.onorientation ? [{
                    fn: o.onorientation
                }] : [], _super.call(this, o)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(pan, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "stereo",
                action: function() {
                    self.stereo(pan, id)
                }
            }), self;
            var pannerType = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
            if (void 0 === id) {
                if ("number" != typeof pan) return self._stereo;
                self._stereo = pan, self._pos = [pan, 0, 0]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof pan) return sound._stereo;
                    sound._stereo = pan, sound._pos = [pan, 0, 0], sound._node && (sound._pannerAttr.panningModel = "equalpower", sound._panner && sound._panner.pan || setupPanner(sound, pannerType), "spatial" === pannerType ? sound._panner.setPosition(pan, 0, 0) : sound._panner.pan.value = pan), self._emit("stereo", sound._id)
                }
            }
            return self
        }, Howl.prototype.pos = function(x, y, z, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "pos",
                action: function() {
                    self.pos(x, y, z, id)
                }
            }), self;
            if (y = "number" != typeof y ? 0 : y, z = "number" != typeof z ? -.5 : z, void 0 === id) {
                if ("number" != typeof x) return self._pos;
                self._pos = [x, y, z]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof x) return sound._pos;
                    sound._pos = [x, y, z], sound._node && (sound._panner && !sound._panner.pan || setupPanner(sound, "spatial"), sound._panner.setPosition(x, y, z)), self._emit("pos", sound._id)
                }
            }
            return self
        }, Howl.prototype.orientation = function(x, y, z, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "orientation",
                action: function() {
                    self.orientation(x, y, z, id)
                }
            }), self;
            if (y = "number" != typeof y ? self._orientation[1] : y, z = "number" != typeof z ? self._orientation[2] : z, void 0 === id) {
                if ("number" != typeof x) return self._orientation;
                self._orientation = [x, y, z]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof x) return sound._orientation;
                    sound._orientation = [x, y, z], sound._node && (sound._panner || (sound._pos || (sound._pos = self._pos || [0, 0, -.5]), setupPanner(sound, "spatial")), sound._panner.setOrientation(x, y, z)), self._emit("orientation", sound._id)
                }
            }
            return self
        }, Howl.prototype.pannerAttr = function() {
            var o, id, sound, args = arguments;
            if (!this._webAudio) return this;
            if (0 === args.length) return this._pannerAttr;
            if (1 === args.length) {
                if ("object" != typeof args[0]) return (sound = this._soundById(parseInt(args[0], 10))) ? sound._pannerAttr : this._pannerAttr;
                o = args[0], void 0 === id && (this._pannerAttr = {
                    coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : this._coneInnerAngle,
                    coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : this._coneOuterAngle,
                    coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : this._coneOuterGain,
                    distanceModel: void 0 !== o.distanceModel ? o.distanceModel : this._distanceModel,
                    maxDistance: void 0 !== o.maxDistance ? o.maxDistance : this._maxDistance,
                    panningModel: void 0 !== o.panningModel ? o.panningModel : this._panningModel,
                    refDistance: void 0 !== o.refDistance ? o.refDistance : this._refDistance,
                    rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : this._rolloffFactor
                })
            } else 2 === args.length && (o = args[0], id = parseInt(args[1], 10));
            for (var ids = this._getSoundIds(id), i = 0; i < ids.length; i++)
                if (sound = this._soundById(ids[i])) {
                    var pa = sound._pannerAttr;
                    pa = {
                        coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : pa.coneInnerAngle,
                        coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : pa.coneOuterAngle,
                        coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : pa.coneOuterGain,
                        distanceModel: void 0 !== o.distanceModel ? o.distanceModel : pa.distanceModel,
                        maxDistance: void 0 !== o.maxDistance ? o.maxDistance : pa.maxDistance,
                        panningModel: void 0 !== o.panningModel ? o.panningModel : pa.panningModel,
                        refDistance: void 0 !== o.refDistance ? o.refDistance : pa.refDistance,
                        rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : pa.rolloffFactor
                    };
                    var panner = sound._panner;
                    panner ? (panner.coneInnerAngle = pa.coneInnerAngle, panner.coneOuterAngle = pa.coneOuterAngle, panner.coneOuterGain = pa.coneOuterGain, panner.distanceModel = pa.distanceModel, panner.maxDistance = pa.maxDistance, panner.panningModel = pa.panningModel, panner.refDistance = pa.refDistance, panner.rolloffFactor = pa.rolloffFactor) : (sound._pos || (sound._pos = this._pos || [0, 0, -.5]), setupPanner(sound, "spatial"))
                }
            return this
        }, Sound.prototype.init = function(_super) {
            return function() {
                var parent = this._parent;
                this._orientation = parent._orientation, this._stereo = parent._stereo, this._pos = parent._pos, this._pannerAttr = parent._pannerAttr, _super.call(this), this._stereo ? parent.stereo(this._stereo) : this._pos && parent.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(_super) {
            return function() {
                var parent = this._parent;
                return this._orientation = parent._orientation, this._pos = parent._pos, this._pannerAttr = parent._pannerAttr, _super.call(this)
            }
        }(Sound.prototype.reset);
        var setupPanner = function(sound, type) {
            "spatial" === (type = type || "spatial") ? (sound._panner = Howler.ctx.createPanner(), sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle, sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle, sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain, sound._panner.distanceModel = sound._pannerAttr.distanceModel, sound._panner.maxDistance = sound._pannerAttr.maxDistance, sound._panner.panningModel = sound._pannerAttr.panningModel, sound._panner.refDistance = sound._pannerAttr.refDistance, sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor, sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]), sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2])) : (sound._panner = Howler.ctx.createStereoPanner(), sound._panner.pan.value = sound._stereo), sound._panner.connect(sound._node), sound._paused || sound._parent.pause(sound._id, !0).play(sound._id)
        };
        Object.defineProperty(HowlerGlobal.prototype, "_mobileUnloaded", {
            get: function() {
                return !!/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform) || this.__mobileUnloaded
            },
            set: function(val) {
                this.__mobileUnloaded = val
            }
        })
    }(),
    function() {
        if (!(Howl && Howl.prototype && Howl.prototype.play && Howler)) return console.error("Howler or Howl are not globally available");
        var events = ["touchend", "keypress", "click"],
            superStop = Howl.prototype.stop;
        Howl.prototype.stop = function(id, internal) {
            return "loaded" === this._state && this._suspendedAt && delete this._suspendedAt, superStop.call(this, id, internal)
        };
        var _resume = function() {
            events.forEach(function(event) {
                document.removeEventListener(event, _resume, !0)
            }), Howler && Howler.ctx && "suspended" === Howler.ctx.state && Howler.ctx.resume().then(function() {
                Howler._howls.forEach(function(howl) {
                    if (howl._suspendedAt) {
                        var seek = (Date.now() - howl._suspendedAt) / 1e3;
                        if (howl._loop || seek < howl._duration) return howl.seek(seek).play()
                    }
                })
            })
        };
        events.forEach(function(event) {
            document.addEventListener(event, _resume, !0)
        })
    }(),
    function() {
        "use strict";
        Howl.prototype.fadeIn = function(duration) {
            return this.fadeTo(duration, 1), this
        }, Howl.prototype.fadeOut = function(duration, autoStop) {
            return void 0 === autoStop && (autoStop = !0), this.fadeTo(duration, 0, autoStop ? this.stop.bind(this) : null), this
        }, Howl.prototype.fadeTo = function(duration, volume, callback) {
            void 0 === duration && (duration = .5), void 0 === volume && (volume = .5), this.__tween = {
                _volume: this.volume()
            };
            var syncTime = duration * Math.abs(this.__tween._volume - volume);
            return TweenMax.to(this.__tween, syncTime, {
                _volume: volume,
                onUpdate: function() {
                    this.volume(this.__tween._volume)
                }.bind(this),
                onComplete: callback || null
            }), this
        }, Howl.prototype.play = function(_super) {
            return function() {
                var interval = this.__limitInterval || 0;
                return null === arguments[0] && (arguments[0] = void 0), void 0 !== arguments[1] && (interval = arguments[1], arguments[1] = void 0, Howl.__warningShown || (Howl.__warningShown = !0, console.warn("DEPRECATED: This usage of .play(null, interval) is deprecated! Please use .limitInterval(interval).play() instead"))), Howler && Howler.ctx && "suspended" === Howler.ctx.state ? (this._suspendedAt = Date.now(), this) : this.__lastPlayedAt && this.__lastSoundId && Date.now() - this.__lastPlayedAt < interval ? this : (this.__lastSoundId = _super.apply(this, arguments), this.__lastPlayedAt = Date.now(), this)
            }
        }(Howl.prototype.play), Howl.prototype.limitInterval = function(interval) {
            return this.__limitInterval = interval, this
        }, Howl.prototype.getSoundId = function(duration, autoStop) {
            return this.__lastSoundId
        };
        Howl.prototype.delay = function(secs) {
            return this._delayed && (console.warn("Sorry, but multiple delays are not supported yet, so I will just kill the previous one"), this.clearDelay()), this._delayed = !0, this._delayCallbacks = [], this._delayTimeout = _.wait(secs, function() {
                var callbacks = this._delayCallbacks;
                this.clearDelay(), callbacks.forEach(function(callback) {
                    callback()
                })
            }, this), this
        }, Howl.prototype.clearDelay = function() {
            this._delayTimeout && _.clearWait(this._delayTimeout), this._delayed = !1, this._delayCallbacks = null, this._delayTimeout = null
        }, ["play", "stop", "pause", "seek", "loop", "volume", "mute", "fade", "fadeIn", "fadeOut", "fadeTo", "delay", "limit"].forEach(function(method) {
            Howl.prototype[method] = function(_super) {
                return function() {
                    if (this.__hasLoadError) return this.__warningSkipShown || (this.__warningSkipShown = !0, console.warn("This sound wasn't loaded successfuly, so will be skipped:", JSON.stringify(this._src))), this;
                    if (this._delayed) {
                        var me = this,
                            args = arguments;
                        return this._delayCallbacks.push(function() {
                            _super.apply(me, args)
                        }), this
                    }
                    return _super.apply(this, arguments)
                }
            }(Howl.prototype[method])
        }), HowlerGlobal.prototype.resumeAll = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++)
                for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);
                    sound && sound._wasPaused && (self._howls[i].play(sound._id), sound._wasPaused = !1)
                }
            return self
        }, HowlerGlobal.prototype.pauseAll = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++)
                for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]),
                        isPlaying = sound && !sound._paused && !sound._ended;
                    sound && isPlaying && (sound._wasPaused = !0, self._howls[i].pause(sound._id))
                }
            return self
        }, Sound.prototype.setRate = function(rate) {
            var parent = this._parent;
            return this._rate = rate, parent._webAudio && this._node && this._node.bufferSource && (this._node.bufferSource.playbackRate.value = rate), this
        }, Sound.prototype.getRate = function() {
            var parent = this._parent,
                rate = 1;
            return this._rate && (rate = this._rate), parent._webAudio && this._node && this._node.bufferSource && (rate = this._node.bufferSource.playbackRate.value), rate
        }, Howl.prototype.setRate = function(rate) {
            for (var ids = this._getSoundIds(), j = 0; j < ids.length; j++) {
                var sound = this._soundById(ids[j]);
                sound && sound.setRate(rate)
            }
            return this._rate = rate, this
        }, Howl.prototype.restoreRate = function() {
            for (var ids = this._getSoundIds(), j = 0; j < ids.length; j++) {
                var sound = this._soundById(ids[j]);
                sound && sound.setRate(1)
            }
            return this._rate = 1, this
        }, HowlerGlobal.prototype.setRate = function(rate) {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++) self._howls[i].setRate(rate);
            return self
        }, HowlerGlobal.prototype.restoreRate = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++) self._howls[i].restoreRate();
            return self
        }
    }();