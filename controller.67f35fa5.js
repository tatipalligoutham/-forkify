! function() {
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        e = {};
    var r = function(t) {
        var r = e[t];
        if (null == r) throw new Error("Could not resolve bundle with id " + t);
        return r
    };
    (function(t) {
        for (var r = Object.keys(t), n = 0; n < r.length; n++) e[r[n]] = t[r[n]]
    })(JSON.parse('{"bf39cc533f408cac":"controller.67f35fa5.js","8a996067874c0422":"icons.c781f215.svg"}'));
    var n, o = {},
        i = function(t) {
            return t && t.Math == Math && t
        };
    o = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || Function("return this")();
    var a, u;
    a = !(u = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    })((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }));
    var c, s = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        l = f && !s.call({
            1: 2
        }, 1) ? function(t) {
            var e = f(this, t);
            return !!e && e.enumerable
        } : s;
    c = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    };
    var h, p, d = {},
        v = {}.toString;
    p = function(t) {
        return v.call(t).slice(8, -1)
    };
    var g = "".split;
    d = u((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == p(t) ? g.call(t, "") : Object(t)
    } : Object;
    var y;
    y = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }, h = function(t) {
        return d(y(t))
    };
    var m, b;
    b = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }, m = function(t, e) {
        if (!b(t)) return t;
        var r, n;
        if (e && "function" == typeof(r = t.toString) && !b(n = r.call(t))) return n;
        if ("function" == typeof(r = t.valueOf) && !b(n = r.call(t))) return n;
        if (!e && "function" == typeof(r = t.toString) && !b(n = r.call(t))) return n;
        throw TypeError("Can't convert object to primitive value")
    };
    var w, S = {}.hasOwnProperty;
    w = function(t, e) {
        return S.call(t, e)
    };
    var _, E, x = o.document,
        O = b(x) && b(x.createElement);
    E = function(t) {
        return O ? x.createElement(t) : {}
    }, _ = !a && !u((function() {
        return 7 != Object.defineProperty(E("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }));
    var A, k = Object.getOwnPropertyDescriptor,
        j = a ? k : function(t, e) {
            if (t = h(t), e = m(e, !0), _) try {
                return k(t, e)
            } catch (t) {}
            if (w(t, e)) return c(!l.call(t, e), t[e])
        },
        R = j,
        P = {};
    A = function(t) {
        if (!b(t)) throw TypeError(String(t) + " is not an object");
        return t
    };
    var T = Object.defineProperty,
        M = a ? T : function(t, e, r) {
            if (A(t), e = m(e, !0), A(r), _) try {
                return T(t, e, r)
            } catch (t) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t
        };
    P = a ? function(t, e, r) {
        return M(t, e, c(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    };
    var I, L;
    L = function(t, e) {
        try {
            P(o, t, e)
        } catch (r) {
            o[t] = e
        }
        return e
    };
    var F = {},
        N = {},
        U = o["__core-js_shared__"] || L("__core-js_shared__", {});
    N = U;
    var C = Function.toString;
    "function" != typeof N.inspectSource && (N.inspectSource = function(t) {
        return C.call(t)
    }), F = N.inspectSource;
    var D, q, B = o.WeakMap;
    q = "function" == typeof B && /native code/.test(F(B));
    var z, W;
    (W = function(t, e) {
        return N[t] || (N[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.6.5",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
    var H, G = 0,
        V = Math.random();
    H = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++G + V).toString(36)
    };
    var $ = W("keys");
    z = function(t) {
        return $[t] || ($[t] = H(t))
    };
    var Y = {};
    Y = {};
    var X, J, K, Q = o.WeakMap;
    if (q) {
        var Z = new Q,
            tt = Z.get,
            et = Z.has,
            rt = Z.set;
        X = function(t, e) {
            return rt.call(Z, t, e), e
        }, J = function(t) {
            return tt.call(Z, t) || {}
        }, K = function(t) {
            return et.call(Z, t)
        }
    } else {
        var nt = z("state");
        Y[nt] = !0, X = function(t, e) {
            return P(t, nt, e), e
        }, J = function(t) {
            return w(t, nt) ? t[nt] : {}
        }, K = function(t) {
            return w(t, nt)
        }
    }
    var ot = (D = {
            set: X,
            get: J,
            has: K,
            enforce: function(t) {
                return K(t) ? J(t) : X(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!b(e) || (r = J(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        }).get,
        it = D.enforce,
        at = String(String).split("String");
    (I = function(t, e, r, n) {
        var i = !!n && !!n.unsafe,
            a = !!n && !!n.enumerable,
            u = !!n && !!n.noTargetGet;
        "function" == typeof r && ("string" != typeof e || w(r, "name") || P(r, "name", e), it(r).source = at.join("string" == typeof e ? e : "")), t !== o ? (i ? !u && t[e] && (a = !0) : delete t[e], a ? t[e] = r : P(t, e, r)) : a ? t[e] = r : L(e, r)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && ot(this).source || F(this)
    }));
    var ut, ct, st = {},
        ft = {};
    ft = o;
    var lt = function(t) {
        return "function" == typeof t ? t : void 0
    };
    ct = function(t, e) {
        return arguments.length < 2 ? lt(ft[t]) || lt(o[t]) : ft[t] && ft[t][e] || o[t] && o[t][e]
    };
    var ht, pt, dt, vt, gt = Math.ceil,
        yt = Math.floor;
    vt = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? yt : gt)(t)
    };
    var mt = Math.min;
    dt = function(t) {
        return t > 0 ? mt(vt(t), 9007199254740991) : 0
    };
    var bt, wt = Math.max,
        St = Math.min;
    bt = function(t, e) {
        var r = vt(t);
        return r < 0 ? wt(r + e, 0) : St(r, e)
    };
    var _t = function(t) {
            return function(e, r, n) {
                var o, i = h(e),
                    a = dt(i.length),
                    u = bt(n, a);
                if (t && r != r) {
                    for (; a > u;)
                        if ((o = i[u++]) != o) return !0
                } else
                    for (; a > u; u++)
                        if ((t || u in i) && i[u] === r) return t || u || 0;
                return !t && -1
            }
        },
        Et = (pt = {
            includes: _t(!0),
            indexOf: _t(!1)
        }).indexOf;
    ht = function(t, e) {
        var r, n = h(t),
            o = 0,
            i = [];
        for (r in n) !w(Y, r) && w(n, r) && i.push(r);
        for (; e.length > o;) w(n, r = e[o++]) && (~Et(i, r) || i.push(r));
        return i
    };
    var xt = {},
        Ot = (xt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]).concat("length", "prototype"),
        At = Object.getOwnPropertyNames || function(t) {
            return ht(t, Ot)
        },
        kt = Object.getOwnPropertySymbols;
    st = ct("Reflect", "ownKeys") || function(t) {
        var e = At(A(t)),
            r = kt;
        return r ? e.concat(r(t)) : e
    }, ut = function(t, e) {
        for (var r = st(e), n = M, o = j, i = 0; i < r.length; i++) {
            var a = r[i];
            w(t, a) || n(t, a, o(e, a))
        }
    };
    var jt = {},
        Rt = /#|\.prototype\./,
        Pt = function(t, e) {
            var r = Mt[Tt(t)];
            return r == Lt || r != It && ("function" == typeof e ? u(e) : !!e)
        },
        Tt = Pt.normalize = function(t) {
            return String(t).replace(Rt, ".").toLowerCase()
        },
        Mt = Pt.data = {},
        It = Pt.NATIVE = "N",
        Lt = Pt.POLYFILL = "P";
    jt = Pt, n = function(t, e) {
        var r, n, i, a, u, c = t.target,
            s = t.global,
            f = t.stat;
        if (r = s ? o : f ? o[c] || L(c, {}) : (o[c] || {}).prototype)
            for (n in e) {
                if (a = e[n], i = t.noTargetGet ? (u = R(r, n)) && u.value : r[n], !jt(s ? n : c + (f ? "." : "#") + n, t.forced) && void 0 !== i) {
                    if (typeof a == typeof i) continue;
                    ut(a, i)
                }(t.sham || i && i.sham) && P(a, "sham", !0), I(r, n, a, t)
            }
    };
    var Ft, Nt;
    Nt = (Ft = !!Object.getOwnPropertySymbols && !u((function() {
        return !String(Symbol())
    }))) && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    var Ut = {};
    Ut = Array.isArray || function(t) {
        return "Array" == p(t)
    };
    var Ct;
    Ct = function(t) {
        return Object(y(t))
    };
    var Dt = {},
        qt = {},
        Bt = {};
    Bt = Object.keys || function(t) {
        return ht(t, xt)
    }, qt = a ? Object.defineProperties : function(t, e) {
        A(t);
        for (var r, n = Bt(e), o = n.length, i = 0; o > i;) M(t, r = n[i++], e[r]);
        return t
    };
    var zt = {};
    zt = ct("document", "documentElement");
    var Wt, Ht = z("IE_PROTO"),
        Gt = function() {},
        Vt = function(t) {
            return "<script>" + t + "<\/script>"
        },
        $t = function() {
            try {
                Wt = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            $t = Wt ? function(t) {
                t.write(Vt("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(Wt) : ((e = E("iframe")).style.display = "none", zt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Vt("document.F=Object")), t.close(), t.F);
            for (var r = xt.length; r--;) delete $t.prototype[xt[r]];
            return $t()
        };
    Y[Ht] = !0, Dt = Object.create || function(t, e) {
        var r;
        return null !== t ? (Gt.prototype = A(t), r = new Gt, Gt.prototype = null, r[Ht] = t) : r = $t(), void 0 === e ? r : qt(r, e)
    };
    var Yt, Xt = At,
        Jt = {}.toString,
        Kt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Qt = function(t) {
            return Kt && "[object Window]" == Jt.call(t) ? function(t) {
                try {
                    return Xt(t)
                } catch (t) {
                    return Kt.slice()
                }
            }(t) : Xt(h(t))
        },
        Zt = {},
        te = W("wks"),
        ee = o.Symbol,
        re = Nt ? ee : ee && ee.withoutSetter || H,
        ne = M;
    Yt = function(t) {
        var e = ft.Symbol || (ft.Symbol = {});
        w(e, t) || ne(e, t, {
            value: Zt(t)
        })
    };
    var oe, ie = M,
        ae = (Zt = function(t) {
            return w(te, t) || (Ft && w(ee, t) ? te[t] = ee[t] : te[t] = re("Symbol." + t)), te[t]
        })("toStringTag");
    oe = function(t, e, r) {
        t && !w(t = r ? t : t.prototype, ae) && ie(t, ae, {
            configurable: !0,
            value: e
        })
    };
    var ue, ce, se;
    se = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }, ce = function(t, e, r) {
        if (se(t), void 0 === e) return t;
        switch (r) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(r) {
                    return t.call(e, r)
                };
            case 2:
                return function(r, n) {
                    return t.call(e, r, n)
                };
            case 3:
                return function(r, n, o) {
                    return t.call(e, r, n, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    var fe, le = Zt("species");
    fe = function(t, e) {
        var r;
        return Ut(t) && ("function" != typeof(r = t.constructor) || r !== Array && !Ut(r.prototype) ? b(r) && null === (r = r[le]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
    };
    var he = [].push,
        pe = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                o = 4 == t,
                i = 6 == t,
                a = 5 == t || i;
            return function(u, c, s, f) {
                for (var l, h, p = Ct(u), v = d(p), g = ce(c, s, 3), y = dt(v.length), m = 0, b = f || fe, w = e ? b(u, y) : r ? b(u, 0) : void 0; y > m; m++)
                    if ((a || m in v) && (h = g(l = v[m], m, p), t))
                        if (e) w[m] = h;
                        else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return l;
                    case 6:
                        return m;
                    case 2:
                        he.call(w, l)
                } else if (o) return !1;
                return i ? -1 : n || o ? o : w
            }
        },
        de = (ue = {
            forEach: pe(0),
            map: pe(1),
            filter: pe(2),
            some: pe(3),
            every: pe(4),
            find: pe(5),
            findIndex: pe(6)
        }).forEach,
        ve = z("hidden"),
        ge = Zt("toPrimitive"),
        ye = D.set,
        me = D.getterFor("Symbol"),
        be = Object.prototype,
        we = o.Symbol,
        Se = ct("JSON", "stringify"),
        _e = j,
        Ee = M,
        xe = Qt,
        Oe = l,
        Ae = W("symbols"),
        ke = W("op-symbols"),
        je = W("string-to-symbol-registry"),
        Re = W("symbol-to-string-registry"),
        Pe = W("wks"),
        Te = o.QObject,
        Me = !Te || !Te.prototype || !Te.prototype.findChild,
        Ie = a && u((function() {
            return 7 != Dt(Ee({}, "a", {
                get: function() {
                    return Ee(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, r) {
            var n = _e(be, e);
            n && delete be[e], Ee(t, e, r), n && t !== be && Ee(be, e, n)
        } : Ee,
        Le = function(t, e) {
            var r = Ae[t] = Dt(we.prototype);
            return ye(r, {
                type: "Symbol",
                tag: t,
                description: e
            }), a || (r.description = e), r
        },
        Fe = Nt ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof we
        },
        Ne = function(t, e, r) {
            t === be && Ne(ke, e, r), A(t);
            var n = m(e, !0);
            return A(r), w(Ae, n) ? (r.enumerable ? (w(t, ve) && t[ve][n] && (t[ve][n] = !1), r = Dt(r, {
                enumerable: c(0, !1)
            })) : (w(t, ve) || Ee(t, ve, c(1, {})), t[ve][n] = !0), Ie(t, n, r)) : Ee(t, n, r)
        },
        Ue = function(t, e) {
            A(t);
            var r = h(e),
                n = Bt(r).concat(Be(r));
            return de(n, (function(e) {
                a && !Ce.call(r, e) || Ne(t, e, r[e])
            })), t
        },
        Ce = function(t) {
            var e = m(t, !0),
                r = Oe.call(this, e);
            return !(this === be && w(Ae, e) && !w(ke, e)) && (!(r || !w(this, e) || !w(Ae, e) || w(this, ve) && this[ve][e]) || r)
        },
        De = function(t, e) {
            var r = h(t),
                n = m(e, !0);
            if (r !== be || !w(Ae, n) || w(ke, n)) {
                var o = _e(r, n);
                return !o || !w(Ae, n) || w(r, ve) && r[ve][n] || (o.enumerable = !0), o
            }
        },
        qe = function(t) {
            var e = xe(h(t)),
                r = [];
            return de(e, (function(t) {
                w(Ae, t) || w(Y, t) || r.push(t)
            })), r
        },
        Be = function(t) {
            var e = t === be,
                r = xe(e ? ke : h(t)),
                n = [];
            return de(r, (function(t) {
                !w(Ae, t) || e && !w(be, t) || n.push(Ae[t])
            })), n
        };
    if (Ft || (I((we = function() {
            if (this instanceof we) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                e = H(t),
                r = function(t) {
                    this === be && r.call(ke, t), w(this, ve) && w(this[ve], e) && (this[ve][e] = !1), Ie(this, e, c(1, t))
                };
            return a && Me && Ie(be, e, {
                configurable: !0,
                set: r
            }), Le(e, t)
        }).prototype, "toString", (function() {
            return me(this).tag
        })), I(we, "withoutSetter", (function(t) {
            return Le(H(t), t)
        })), l = Ce, M = Ne, j = De, At = Qt = qe, kt = Be, Zt = function(t) {
            return Le(Zt(t), t)
        }, a && (Ee(we.prototype, "description", {
            configurable: !0,
            get: function() {
                return me(this).description
            }
        }), I(be, "propertyIsEnumerable", Ce, {
            unsafe: !0
        }))), n({
            global: !0,
            wrap: !0,
            forced: !Ft,
            sham: !Ft
        }, {
            Symbol: we
        }), de(Bt(Pe), (function(t) {
            Yt(t)
        })), n({
            target: "Symbol",
            stat: !0,
            forced: !Ft
        }, {
            for: function(t) {
                var e = String(t);
                if (w(je, e)) return je[e];
                var r = we(e);
                return je[e] = r, Re[r] = e, r
            },
            keyFor: function(t) {
                if (!Fe(t)) throw TypeError(t + " is not a symbol");
                if (w(Re, t)) return Re[t]
            },
            useSetter: function() {
                Me = !0
            },
            useSimple: function() {
                Me = !1
            }
        }), n({
            target: "Object",
            stat: !0,
            forced: !Ft,
            sham: !a
        }, {
            create: function(t, e) {
                return void 0 === e ? Dt(t) : Ue(Dt(t), e)
            },
            defineProperty: Ne,
            defineProperties: Ue,
            getOwnPropertyDescriptor: De
        }), n({
            target: "Object",
            stat: !0,
            forced: !Ft
        }, {
            getOwnPropertyNames: qe,
            getOwnPropertySymbols: Be
        }), n({
            target: "Object",
            stat: !0,
            forced: u((function() {
                kt(1)
            }))
        }, {
            getOwnPropertySymbols: function(t) {
                return kt(Ct(t))
            }
        }), Se) {
        var ze = !Ft || u((function() {
            var t = we();
            return "[null]" != Se([t]) || "{}" != Se({
                a: t
            }) || "{}" != Se(Object(t))
        }));
        n({
            target: "JSON",
            stat: !0,
            forced: ze
        }, {
            stringify: function(t, e, r) {
                for (var n, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
                if (n = e, (b(e) || void 0 !== t) && !Fe(t)) return Ut(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !Fe(e)) return e
                }), o[1] = e, Se.apply(null, o)
            }
        })
    }
    we.prototype[ge] || P(we.prototype, ge, we.prototype.valueOf), oe(we, "Symbol"), Y[ve] = !0;
    var We = M,
        He = o.Symbol;
    if (a && "function" == typeof He && (!("description" in He.prototype) || void 0 !== He().description)) {
        var Ge = {},
            Ve = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof Ve ? new He(t) : void 0 === t ? He() : He(t);
                return "" === t && (Ge[e] = !0), e
            };
        ut(Ve, He);
        var $e = Ve.prototype = He.prototype;
        $e.constructor = Ve;
        var Ye = $e.toString,
            Xe = "Symbol(test)" == String(He("test")),
            Je = /^Symbol\((.*)\)[^)]+$/;
        We($e, "description", {
            configurable: !0,
            get: function() {
                var t = b(this) ? this.valueOf() : this,
                    e = Ye.call(t);
                if (w(Ge, t)) return "";
                var r = Xe ? e.slice(7, -1) : e.replace(Je, "$1");
                return "" === r ? void 0 : r
            }
        }), n({
            global: !0,
            forced: !0
        }, {
            Symbol: Ve
        })
    }
    Yt("asyncIterator"), Yt("hasInstance"), Yt("isConcatSpreadable"), Yt("iterator"), Yt("match"), Yt("replace"), Yt("search"), Yt("species"), Yt("split"), Yt("toPrimitive"), Yt("toStringTag"), Yt("unscopables");
    var Ke;
    Ke = function(t, e, r) {
        var n = m(e);
        n in t ? M(t, n, c(0, r)) : t[n] = r
    };
    var Qe, Ze, tr = {};
    tr = ct("navigator", "userAgent") || "";
    var er, rr, nr = o.process,
        or = nr && nr.versions,
        ir = or && or.v8;
    ir ? rr = (er = ir.split("."))[0] + er[1] : tr && (!(er = tr.match(/Edge\/(\d+)/)) || er[1] >= 74) && (er = tr.match(/Chrome\/(\d+)/)) && (rr = er[1]), Ze = rr && +rr;
    var ar = Zt("species");
    Qe = function(t) {
        return Ze >= 51 || !u((function() {
            var e = [];
            return (e.constructor = {})[ar] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        }))
    };
    var ur = Zt("isConcatSpreadable"),
        cr = Ze >= 51 || !u((function() {
            var t = [];
            return t[ur] = !1, t.concat()[0] !== t
        })),
        sr = Qe("concat"),
        fr = function(t) {
            if (!b(t)) return !1;
            var e = t[ur];
            return void 0 !== e ? !!e : Ut(t)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !cr || !sr
    }, {
        concat: function(t) {
            var e, r, n, o, i, a = Ct(this),
                u = fe(a, 0),
                c = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (fr(i = -1 === e ? a : arguments[e])) {
                    if (c + (o = dt(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (r = 0; r < o; r++, c++) r in i && Ke(u, c, i[r])
                } else {
                    if (c >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    Ke(u, c++, i)
                }
            return u.length = c, u
        }
    });
    var lr = {},
        hr = Math.min;
    lr = [].copyWithin || function(t, e) {
        var r = Ct(this),
            n = dt(r.length),
            o = bt(t, n),
            i = bt(e, n),
            a = arguments.length > 2 ? arguments[2] : void 0,
            u = hr((void 0 === a ? n : bt(a, n)) - i, n - o),
            c = 1;
        for (i < o && o < i + u && (c = -1, i += u - 1, o += u - 1); u-- > 0;) i in r ? r[o] = r[i] : delete r[o], o += c, i += c;
        return r
    };
    var pr, dr = Zt("unscopables"),
        vr = Array.prototype;
    null == vr[dr] && M(vr, dr, {
        configurable: !0,
        value: Dt(null)
    }), pr = function(t) {
        vr[dr][t] = !0
    }, n({
        target: "Array",
        proto: !0
    }, {
        copyWithin: lr
    }), pr("copyWithin");
    var gr, yr = ue.every;
    gr = function(t, e) {
        var r = [][t];
        return !!r && u((function() {
            r.call(null, e || function() {
                throw 1
            }, 1)
        }))
    };
    var mr, br = Object.defineProperty,
        wr = {},
        Sr = function(t) {
            throw t
        };
    mr = function(t, e) {
        if (w(wr, t)) return wr[t];
        e || (e = {});
        var r = [][t],
            n = !!w(e, "ACCESSORS") && e.ACCESSORS,
            o = w(e, 0) ? e[0] : Sr,
            i = w(e, 1) ? e[1] : void 0;
        return wr[t] = !!r && !u((function() {
            if (n && !a) return !0;
            var t = {
                length: -1
            };
            n ? br(t, 1, {
                enumerable: !0,
                get: Sr
            }) : t[1] = 1, r.call(t, o, i)
        }))
    };
    var _r = gr("every"),
        Er = mr("every");
    n({
        target: "Array",
        proto: !0,
        forced: !_r || !Er
    }, {
        every: function(t) {
            return yr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var xr;
    n({
        target: "Array",
        proto: !0
    }, {
        fill: xr = function(t) {
            for (var e = Ct(this), r = dt(e.length), n = arguments.length, o = bt(n > 1 ? arguments[1] : void 0, r), i = n > 2 ? arguments[2] : void 0, a = void 0 === i ? r : bt(i, r); a > o;) e[o++] = t;
            return e
        }
    }), pr("fill");
    var Or = ue.filter,
        Ar = Qe("filter"),
        kr = mr("filter");
    n({
        target: "Array",
        proto: !0,
        forced: !Ar || !kr
    }, {
        filter: function(t) {
            return Or(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var jr = ue.find,
        Rr = !0,
        Pr = mr("find");
    "find" in [] && Array(1).find((function() {
        Rr = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: Rr || !Pr
    }, {
        find: function(t) {
            return jr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), pr("find");
    var Tr = ue.findIndex,
        Mr = !0,
        Ir = mr("findIndex");
    "findIndex" in [] && Array(1).findIndex((function() {
        Mr = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: Mr || !Ir
    }, {
        findIndex: function(t) {
            return Tr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), pr("findIndex");
    var Lr = {},
        Fr = function(t, e, r, n, o, i, a, u) {
            for (var c, s = o, f = 0, l = !!a && ce(a, u, 3); f < n;) {
                if (f in r) {
                    if (c = l ? l(r[f], f, e) : r[f], i > 0 && Ut(c)) s = Fr(t, e, c, dt(c.length), s, i - 1) - 1;
                    else {
                        if (s >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        t[s] = c
                    }
                    s++
                }
                f++
            }
            return s
        };
    Lr = Fr, n({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var t = arguments.length ? arguments[0] : void 0,
                e = Ct(this),
                r = dt(e.length),
                n = fe(e, 0);
            return n.length = Lr(n, e, e, r, 0, void 0 === t ? 1 : vt(t)), n
        }
    }), n({
        target: "Array",
        proto: !0
    }, {
        flatMap: function(t) {
            var e, r = Ct(this),
                n = dt(r.length);
            return se(t), (e = fe(r, 0)).length = Lr(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
        }
    });
    var Nr, Ur = ue.forEach,
        Cr = gr("forEach"),
        Dr = mr("forEach");
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != (Nr = Cr && Dr ? [].forEach : function(t) {
            return Ur(this, t, arguments.length > 1 ? arguments[1] : void 0)
        })
    }, {
        forEach: Nr
    });
    var qr, Br;
    Br = function(t, e, r, n) {
        try {
            return n ? e(A(r)[0], r[1]) : e(r)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && A(o.call(t)), e
        }
    };
    var zr, Wr = {};
    Wr = {};
    var Hr = Zt("iterator"),
        Gr = Array.prototype;
    zr = function(t) {
        return void 0 !== t && (Wr.Array === t || Gr[Hr] === t)
    };
    var Vr, $r, Yr = {},
        Xr = {};
    Xr[Zt("toStringTag")] = "z", $r = "[object z]" === String(Xr);
    var Jr = Zt("toStringTag"),
        Kr = "Arguments" == p(function() {
            return arguments
        }());
    Yr = $r ? p : function(t) {
        var e, r, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), Jr)) ? r : Kr ? p(e) : "Object" == (n = p(e)) && "function" == typeof e.callee ? "Arguments" : n
    };
    var Qr = Zt("iterator");
    Vr = function(t) {
        if (null != t) return t[Qr] || t["@@iterator"] || Wr[Yr(t)]
    }, qr = function(t) {
        var e, r, n, o, i, a, u = Ct(t),
            c = "function" == typeof this ? this : Array,
            s = arguments.length,
            f = s > 1 ? arguments[1] : void 0,
            l = void 0 !== f,
            h = Vr(u),
            p = 0;
        if (l && (f = ce(f, s > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && zr(h))
            for (r = new c(e = dt(u.length)); e > p; p++) a = l ? f(u[p], p) : u[p], Ke(r, p, a);
        else
            for (i = (o = h.call(u)).next, r = new c; !(n = i.call(o)).done; p++) a = l ? Br(o, f, [n.value, p], !0) : n.value, Ke(r, p, a);
        return r.length = p, r
    };
    var Zr, tn = Zt("iterator"),
        en = !1;
    try {
        var rn = 0,
            nn = {
                next: function() {
                    return {
                        done: !!rn++
                    }
                },
                return: function() {
                    en = !0
                }
            };
        nn[tn] = function() {
            return this
        }, Array.from(nn, (function() {
            throw 2
        }))
    } catch (t) {}
    var on = !(Zr = function(t, e) {
        if (!e && !en) return !1;
        var r = !1;
        try {
            var n = {};
            n[tn] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        }
                    }
                }
            }, t(n)
        } catch (t) {}
        return r
    })((function(t) {
        Array.from(t)
    }));
    n({
        target: "Array",
        stat: !0,
        forced: on
    }, {
        from: qr
    });
    var an = pt.includes,
        un = mr("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: !un
    }, {
        includes: function(t) {
            return an(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), pr("includes");
    var cn = pt.indexOf,
        sn = [].indexOf,
        fn = !!sn && 1 / [1].indexOf(1, -0) < 0,
        ln = gr("indexOf"),
        hn = mr("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: fn || !ln || !hn
    }, {
        indexOf: function(t) {
            return fn ? sn.apply(this, arguments) || 0 : cn(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var pn, dn, vn, gn, yn, mn = {};
    yn = !u((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }));
    var bn = z("IE_PROTO"),
        wn = Object.prototype;
    mn = yn ? Object.getPrototypeOf : function(t) {
        return t = Ct(t), w(t, bn) ? t[bn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? wn : null
    };
    var Sn, _n, En, xn = Zt("iterator"),
        On = !1;
    [].keys && ("next" in (En = [].keys()) ? (_n = mn(mn(En))) !== Object.prototype && (Sn = _n) : On = !0), null == Sn && (Sn = {}), w(Sn, xn) || P(Sn, xn, (function() {
        return this
    }));
    var An = (gn = {
            IteratorPrototype: Sn,
            BUGGY_SAFARI_ITERATORS: On
        }).IteratorPrototype,
        kn = function() {
            return this
        };
    vn = function(t, e, r) {
        var n = e + " Iterator";
        return t.prototype = Dt(An, {
            next: c(1, r)
        }), oe(t, n, !1), Wr[n] = kn, t
    };
    var jn, Rn = {};
    jn = function(t) {
        if (!b(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }, Rn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            r = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
        } catch (t) {}
        return function(r, n) {
            return A(r), jn(n), e ? t.call(r, n) : r.__proto__ = n, r
        }
    }() : void 0);
    var Pn = gn.IteratorPrototype,
        Tn = gn.BUGGY_SAFARI_ITERATORS,
        Mn = Zt("iterator"),
        In = function() {
            return this
        };
    dn = function(t, e, r, o, i, a, u) {
        vn(r, e, o);
        var c, s, f, l = function(t) {
                if (t === i && g) return g;
                if (!Tn && t in d) return d[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new r(this, t)
                        }
                }
                return function() {
                    return new r(this)
                }
            },
            h = e + " Iterator",
            p = !1,
            d = t.prototype,
            v = d[Mn] || d["@@iterator"] || i && d[i],
            g = !Tn && v || l(i),
            y = "Array" == e && d.entries || v;
        if (y && (c = mn(y.call(new t)), Pn !== Object.prototype && c.next && (mn(c) !== Pn && (Rn ? Rn(c, Pn) : "function" != typeof c[Mn] && P(c, Mn, In)), oe(c, h, !0))), "values" == i && v && "values" !== v.name && (p = !0, g = function() {
                return v.call(this)
            }), d[Mn] !== g && P(d, Mn, g), Wr[e] = g, i)
            if (s = {
                    values: l("values"),
                    keys: a ? g : l("keys"),
                    entries: l("entries")
                }, u)
                for (f in s)(Tn || p || !(f in d)) && I(d, f, s[f]);
            else n({
                target: e,
                proto: !0,
                forced: Tn || p
            }, s);
        return s
    };
    var Ln = D.set,
        Fn = D.getterFor("Array Iterator");
    pn = dn(Array, "Array", (function(t, e) {
        Ln(this, {
            type: "Array Iterator",
            target: h(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = Fn(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }), "values"), Wr.Arguments = Wr.Array, pr("keys"), pr("values"), pr("entries");
    var Nn = [].join,
        Un = d != Object,
        Cn = gr("join", ",");
    n({
        target: "Array",
        proto: !0,
        forced: Un || !Cn
    }, {
        join: function(t) {
            return Nn.call(h(this), void 0 === t ? "," : t)
        }
    });
    var Dn = {},
        qn = Math.min,
        Bn = [].lastIndexOf,
        zn = !!Bn && 1 / [1].lastIndexOf(1, -0) < 0,
        Wn = gr("lastIndexOf"),
        Hn = mr("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: (Dn = zn || !Wn || !Hn ? function(t) {
            if (zn) return Bn.apply(this, arguments) || 0;
            var e = h(this),
                r = dt(e.length),
                n = r - 1;
            for (arguments.length > 1 && (n = qn(n, vt(arguments[1]))), n < 0 && (n = r + n); n >= 0; n--)
                if (n in e && e[n] === t) return n || 0;
            return -1
        } : Bn) !== [].lastIndexOf
    }, {
        lastIndexOf: Dn
    });
    var Gn = ue.map,
        Vn = Qe("map"),
        $n = mr("map");
    n({
        target: "Array",
        proto: !0,
        forced: !Vn || !$n
    }, {
        map: function(t) {
            return Gn(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Yn = u((function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }));
    n({
        target: "Array",
        stat: !0,
        forced: Yn
    }, { of: function() {
            for (var t = 0, e = arguments.length, r = new("function" == typeof this ? this : Array)(e); e > t;) Ke(r, t, arguments[t++]);
            return r.length = e, r
        }
    });
    var Xn, Jn = function(t) {
            return function(e, r, n, o) {
                se(r);
                var i = Ct(e),
                    a = d(i),
                    u = dt(i.length),
                    c = t ? u - 1 : 0,
                    s = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in a) {
                            o = a[c], c += s;
                            break
                        }
                        if (c += s, t ? c < 0 : u <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : u > c; c += s) c in a && (o = r(o, a[c], c, i));
                return o
            }
        },
        Kn = (Xn = {
            left: Jn(!1),
            right: Jn(!0)
        }).left,
        Qn = gr("reduce"),
        Zn = mr("reduce", {
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: !Qn || !Zn
    }, {
        reduce: function(t) {
            return Kn(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var to = Xn.right,
        eo = gr("reduceRight"),
        ro = mr("reduce", {
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: !eo || !ro
    }, {
        reduceRight: function(t) {
            return to(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var no = [].reverse,
        oo = [1, 2];
    n({
        target: "Array",
        proto: !0,
        forced: String(oo) === String(oo.reverse())
    }, {
        reverse: function() {
            return Ut(this) && (this.length = this.length), no.call(this)
        }
    });
    var io = Qe("slice"),
        ao = mr("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        uo = Zt("species"),
        co = [].slice,
        so = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !io || !ao
    }, {
        slice: function(t, e) {
            var r, n, o, i = h(this),
                a = dt(i.length),
                u = bt(t, a),
                c = bt(void 0 === e ? a : e, a);
            if (Ut(i) && ("function" != typeof(r = i.constructor) || r !== Array && !Ut(r.prototype) ? b(r) && null === (r = r[uo]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return co.call(i, u, c);
            for (n = new(void 0 === r ? Array : r)(so(c - u, 0)), o = 0; u < c; u++, o++) u in i && Ke(n, o, i[u]);
            return n.length = o, n
        }
    });
    var fo = ue.some,
        lo = gr("some"),
        ho = mr("some");
    n({
        target: "Array",
        proto: !0,
        forced: !lo || !ho
    }, {
        some: function(t) {
            return fo(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var po = [],
        vo = po.sort,
        go = u((function() {
            po.sort(void 0)
        })),
        yo = u((function() {
            po.sort(null)
        })),
        mo = gr("sort");
    n({
        target: "Array",
        proto: !0,
        forced: go || !yo || !mo
    }, {
        sort: function(t) {
            return void 0 === t ? vo.call(Ct(this)) : vo.call(Ct(this), se(t))
        }
    });
    var bo, wo = Zt("species");
    (bo = function(t) {
        var e = ct(t),
            r = M;
        a && e && !e[wo] && r(e, wo, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    })("Array");
    var So = Qe("splice"),
        _o = mr("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        Eo = Math.max,
        xo = Math.min;
    n({
        target: "Array",
        proto: !0,
        forced: !So || !_o
    }, {
        splice: function(t, e) {
            var r, n, o, i, a, u, c = Ct(this),
                s = dt(c.length),
                f = bt(t, s),
                l = arguments.length;
            if (0 === l ? r = n = 0 : 1 === l ? (r = 0, n = s - f) : (r = l - 2, n = xo(Eo(vt(e), 0), s - f)), s + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (o = fe(c, n), i = 0; i < n; i++)(a = f + i) in c && Ke(o, i, c[a]);
            if (o.length = n, r < n) {
                for (i = f; i < s - n; i++) u = i + r, (a = i + n) in c ? c[u] = c[a] : delete c[u];
                for (i = s; i > s - n + r; i--) delete c[i - 1]
            } else if (r > n)
                for (i = s - n; i > f; i--) u = i + r - 1, (a = i + n - 1) in c ? c[u] = c[a] : delete c[u];
            for (i = 0; i < r; i++) c[i + f] = arguments[i + 2];
            return c.length = s - n + r, o
        }
    }), pr("flat"), pr("flatMap");
    var Oo, Ao;
    Ao = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    var ko;
    ko = function(t, e, r) {
        for (var n in e) I(t, n, e[n], r);
        return t
    };
    var jo;
    jo = function(t, e, r) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return t
    };
    var Ro;
    Ro = function(t) {
        if (void 0 === t) return 0;
        var e = vt(t),
            r = dt(e);
        if (e !== r) throw RangeError("Wrong length or index");
        return r
    };
    var Po, To = Math.abs,
        Mo = Math.pow,
        Io = Math.floor,
        Lo = Math.log,
        Fo = Math.LN2;
    Po = {
        pack: function(t, e, r) {
            var n, o, i, a = new Array(r),
                u = 8 * r - e - 1,
                c = (1 << u) - 1,
                s = c >> 1,
                f = 23 === e ? Mo(2, -24) - Mo(2, -77) : 0,
                l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                h = 0;
            for ((t = To(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, n = c) : (n = Io(Lo(t) / Fo), t * (i = Mo(2, -n)) < 1 && (n--, i *= 2), (t += n + s >= 1 ? f / i : f * Mo(2, 1 - s)) * i >= 2 && (n++, i /= 2), n + s >= c ? (o = 0, n = c) : n + s >= 1 ? (o = (t * i - 1) * Mo(2, e), n += s) : (o = t * Mo(2, s - 1) * Mo(2, e), n = 0)); e >= 8; a[h++] = 255 & o, o /= 256, e -= 8);
            for (n = n << e | o, u += e; u > 0; a[h++] = 255 & n, n /= 256, u -= 8);
            return a[--h] |= 128 * l, a
        },
        unpack: function(t, e) {
            var r, n = t.length,
                o = 8 * n - e - 1,
                i = (1 << o) - 1,
                a = i >> 1,
                u = o - 7,
                c = n - 1,
                s = t[c--],
                f = 127 & s;
            for (s >>= 7; u > 0; f = 256 * f + t[c], c--, u -= 8);
            for (r = f & (1 << -u) - 1, f >>= -u, u += e; u > 0; r = 256 * r + t[c], c--, u -= 8);
            if (0 === f) f = 1 - a;
            else {
                if (f === i) return r ? NaN : s ? -1 / 0 : 1 / 0;
                r += Mo(2, e), f -= a
            }
            return (s ? -1 : 1) * r * Mo(2, f - e)
        }
    };
    var No = At,
        Uo = M,
        Co = D.get,
        Do = D.set,
        qo = o.ArrayBuffer,
        Bo = qo,
        zo = o.DataView,
        Wo = zo && zo.prototype,
        Ho = Object.prototype,
        Go = o.RangeError,
        Vo = Po.pack,
        $o = Po.unpack,
        Yo = function(t) {
            return [255 & t]
        },
        Xo = function(t) {
            return [255 & t, t >> 8 & 255]
        },
        Jo = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        Ko = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        Qo = function(t) {
            return Vo(t, 23, 4)
        },
        Zo = function(t) {
            return Vo(t, 52, 8)
        },
        ti = function(t, e) {
            Uo(t.prototype, e, {
                get: function() {
                    return Co(this)[e]
                }
            })
        },
        ei = function(t, e, r, n) {
            var o = Ro(r),
                i = Co(t);
            if (o + e > i.byteLength) throw Go("Wrong index");
            var a = Co(i.buffer).bytes,
                u = o + i.byteOffset,
                c = a.slice(u, u + e);
            return n ? c : c.reverse()
        },
        ri = function(t, e, r, n, o, i) {
            var a = Ro(r),
                u = Co(t);
            if (a + e > u.byteLength) throw Go("Wrong index");
            for (var c = Co(u.buffer).bytes, s = a + u.byteOffset, f = n(+o), l = 0; l < e; l++) c[s + l] = f[i ? l : e - l - 1]
        };
    if (Ao) {
        if (!u((function() {
                qo(1)
            })) || !u((function() {
                new qo(-1)
            })) || u((function() {
                return new qo, new qo(1.5), new qo(NaN), "ArrayBuffer" != qo.name
            }))) {
            for (var ni, oi = (Bo = function(t) {
                    return jo(this, Bo), new qo(Ro(t))
                }).prototype = qo.prototype, ii = No(qo), ai = 0; ii.length > ai;)(ni = ii[ai++]) in Bo || P(Bo, ni, qo[ni]);
            oi.constructor = Bo
        }
        Rn && mn(Wo) !== Ho && Rn(Wo, Ho);
        var ui = new zo(new Bo(2)),
            ci = Wo.setInt8;
        ui.setInt8(0, 2147483648), ui.setInt8(1, 2147483649), !ui.getInt8(0) && ui.getInt8(1) || ko(Wo, {
            setInt8: function(t, e) {
                ci.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                ci.call(this, t, e << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else Bo = function(t) {
        jo(this, Bo, "ArrayBuffer");
        var e = Ro(t);
        Do(this, {
            bytes: xr.call(new Array(e), 0),
            byteLength: e
        }), a || (this.byteLength = e)
    }, zo = function(t, e, r) {
        jo(this, zo, "DataView"), jo(t, Bo, "DataView");
        var n = Co(t).byteLength,
            o = vt(e);
        if (o < 0 || o > n) throw Go("Wrong offset");
        if (o + (r = void 0 === r ? n - o : dt(r)) > n) throw Go("Wrong length");
        Do(this, {
            buffer: t,
            byteLength: r,
            byteOffset: o
        }), a || (this.buffer = t, this.byteLength = r, this.byteOffset = o)
    }, a && (ti(Bo, "byteLength"), ti(zo, "buffer"), ti(zo, "byteLength"), ti(zo, "byteOffset")), ko(zo.prototype, {
        getInt8: function(t) {
            return ei(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return ei(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = ei(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = ei(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return Ko(ei(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function(t) {
            return Ko(ei(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function(t) {
            return $o(ei(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function(t) {
            return $o(ei(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function(t, e) {
            ri(this, 1, t, Yo, e)
        },
        setUint8: function(t, e) {
            ri(this, 1, t, Yo, e)
        },
        setInt16: function(t, e) {
            ri(this, 2, t, Xo, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function(t, e) {
            ri(this, 2, t, Xo, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function(t, e) {
            ri(this, 4, t, Jo, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function(t, e) {
            ri(this, 4, t, Jo, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function(t, e) {
            ri(this, 4, t, Qo, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function(t, e) {
            ri(this, 8, t, Zo, e, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    oe(Bo, "ArrayBuffer"), oe(zo, "DataView");
    var si = (Oo = {
            ArrayBuffer: Bo,
            DataView: zo
        }).ArrayBuffer,
        fi = o.ArrayBuffer;
    n({
        global: !0,
        forced: fi !== si
    }, {
        ArrayBuffer: si
    }), bo("ArrayBuffer");
    var li, hi = Zt("species");
    li = function(t, e) {
        var r, n = A(t).constructor;
        return void 0 === n || null == (r = A(n)[hi]) ? e : se(r)
    };
    var pi = Oo.ArrayBuffer,
        di = Oo.DataView,
        vi = pi.prototype.slice,
        gi = u((function() {
            return !new pi(2).slice(1, void 0).byteLength
        }));
    n({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: gi
    }, {
        slice: function(t, e) {
            if (void 0 !== vi && void 0 === e) return vi.call(A(this), t);
            for (var r = A(this).byteLength, n = bt(t, r), o = bt(void 0 === e ? r : e, r), i = new(li(this, pi))(dt(o - n)), a = new di(this), u = new di(i), c = 0; n < o;) u.setUint8(c++, a.getUint8(n++));
            return i
        }
    });
    var yi;
    yi = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return m(A(this), "number" !== t)
    };
    var mi = Zt("toPrimitive"),
        bi = Date.prototype;
    mi in bi || P(bi, mi, yi);
    var wi = Zt("hasInstance"),
        Si = Function.prototype;
    wi in Si || M(Si, wi, {
        value: function(t) {
            if ("function" != typeof this || !b(t)) return !1;
            if (!b(this.prototype)) return t instanceof this;
            for (; t = mn(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    });
    var _i = M,
        Ei = Function.prototype,
        xi = Ei.toString,
        Oi = /^\s*function ([^ (]*)/;
    a && !("name" in Ei) && _i(Ei, "name", {
        configurable: !0,
        get: function() {
            try {
                return xi.call(this).match(Oi)[1]
            } catch (t) {
                return ""
            }
        }
    }), oe(o.JSON, "JSON", !0);
    var Ai, ki, ji = {},
        Ri = M;
    ki = !u((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }));
    var Pi = H("meta"),
        Ti = 0,
        Mi = Object.isExtensible || function() {
            return !0
        },
        Ii = function(t) {
            Ri(t, Pi, {
                value: {
                    objectID: "O" + ++Ti,
                    weakData: {}
                }
            })
        },
        Li = ji = {
            REQUIRED: !1,
            fastKey: function(t, e) {
                if (!b(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!w(t, Pi)) {
                    if (!Mi(t)) return "F";
                    if (!e) return "E";
                    Ii(t)
                }
                return t[Pi].objectID
            },
            getWeakData: function(t, e) {
                if (!w(t, Pi)) {
                    if (!Mi(t)) return !0;
                    if (!e) return !1;
                    Ii(t)
                }
                return t[Pi].weakData
            },
            onFreeze: function(t) {
                return ki && Li.REQUIRED && Mi(t) && !w(t, Pi) && Ii(t), t
            }
        };
    Y[Pi] = !0;
    var Fi, Ni = function(t, e) {
        this.stopped = t, this.result = e
    };
    (Fi = function(t, e, r, n, o) {
        var i, a, u, c, s, f, l, h = ce(e, r, n ? 2 : 1);
        if (o) i = t;
        else {
            if ("function" != typeof(a = Vr(t))) throw TypeError("Target is not iterable");
            if (zr(a)) {
                for (u = 0, c = dt(t.length); c > u; u++)
                    if ((s = n ? h(A(l = t[u])[0], l[1]) : h(t[u])) && s instanceof Ni) return s;
                return new Ni(!1)
            }
            i = a.call(t)
        }
        for (f = i.next; !(l = f.call(i)).done;)
            if ("object" == typeof(s = Br(i, h, l.value, n)) && s && s instanceof Ni) return s;
        return new Ni(!1)
    }).stop = function(t) {
        return new Ni(!0, t)
    };
    var Ui;
    Ui = function(t, e, r) {
        var n, o;
        return Rn && "function" == typeof(n = e.constructor) && n !== r && b(o = n.prototype) && o !== r.prototype && Rn(t, o), t
    }, Ai = function(t, e, r) {
        var i = -1 !== t.indexOf("Map"),
            a = -1 !== t.indexOf("Weak"),
            c = i ? "set" : "add",
            s = o[t],
            f = s && s.prototype,
            l = s,
            h = {},
            p = function(t) {
                var e = f[t];
                I(f, t, "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function(t) {
                    return !(a && !b(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return a && !b(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(a && !b(t)) && e.call(this, 0 === t ? 0 : t)
                } : function(t, r) {
                    return e.call(this, 0 === t ? 0 : t, r), this
                })
            };
        if (jt(t, "function" != typeof s || !(a || f.forEach && !u((function() {
                (new s).entries().next()
            }))))) l = r.getConstructor(e, t, i, c), ji.REQUIRED = !0;
        else if (jt(t, !0)) {
            var d = new l,
                v = d[c](a ? {} : -0, 1) != d,
                g = u((function() {
                    d.has(1)
                })),
                y = Zr((function(t) {
                    new s(t)
                })),
                m = !a && u((function() {
                    for (var t = new s, e = 5; e--;) t[c](e, e);
                    return !t.has(-0)
                }));
            y || ((l = e((function(e, r) {
                jo(e, l, t);
                var n = Ui(new s, e, l);
                return null != r && Fi(r, n[c], n, i), n
            }))).prototype = f, f.constructor = l), (g || m) && (p("delete"), p("has"), i && p("get")), (m || v) && p(c), a && f.clear && delete f.clear
        }
        return h[t] = l, n({
            global: !0,
            forced: l != s
        }, h), oe(l, t), a || r.setStrong(l, t, i), l
    };
    var Ci, Di = M,
        qi = ji.fastKey,
        Bi = D.set,
        zi = D.getterFor;
    Ai("Map", (function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }), Ci = {
        getConstructor: function(t, e, r, n) {
            var o = t((function(t, i) {
                    jo(t, o, e), Bi(t, {
                        type: e,
                        index: Dt(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), a || (t.size = 0), null != i && Fi(i, t[n], t, r)
                })),
                i = zi(e),
                u = function(t, e, r) {
                    var n, o, u = i(t),
                        s = c(t, e);
                    return s ? s.value = r : (u.last = s = {
                        index: o = qi(e, !0),
                        key: e,
                        value: r,
                        previous: n = u.last,
                        next: void 0,
                        removed: !1
                    }, u.first || (u.first = s), n && (n.next = s), a ? u.size++ : t.size++, "F" !== o && (u.index[o] = s)), t
                },
                c = function(t, e) {
                    var r, n = i(t),
                        o = qi(e);
                    if ("F" !== o) return n.index[o];
                    for (r = n.first; r; r = r.next)
                        if (r.key == e) return r
                };
            return ko(o.prototype, {
                clear: function() {
                    for (var t = i(this), e = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next;
                    t.first = t.last = void 0, a ? t.size = 0 : this.size = 0
                },
                delete: function(t) {
                    var e = i(this),
                        r = c(this, t);
                    if (r) {
                        var n = r.next,
                            o = r.previous;
                        delete e.index[r.index], r.removed = !0, o && (o.next = n), n && (n.previous = o), e.first == r && (e.first = n), e.last == r && (e.last = o), a ? e.size-- : this.size--
                    }
                    return !!r
                },
                forEach: function(t) {
                    for (var e, r = i(this), n = ce(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : r.first;)
                        for (n(e.value, e.key, this); e && e.removed;) e = e.previous
                },
                has: function(t) {
                    return !!c(this, t)
                }
            }), ko(o.prototype, r ? {
                get: function(t) {
                    var e = c(this, t);
                    return e && e.value
                },
                set: function(t, e) {
                    return u(this, 0 === t ? 0 : t, e)
                }
            } : {
                add: function(t) {
                    return u(this, t = 0 === t ? 0 : t, t)
                }
            }), a && Di(o.prototype, "size", {
                get: function() {
                    return i(this).size
                }
            }), o
        },
        setStrong: function(t, e, r) {
            var n = e + " Iterator",
                o = zi(e),
                i = zi(n);
            dn(t, e, (function(t, e) {
                Bi(this, {
                    type: n,
                    target: t,
                    state: o(t),
                    kind: e,
                    last: void 0
                })
            }), (function() {
                for (var t = i(this), e = t.kind, r = t.last; r && r.removed;) r = r.previous;
                return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? {
                    value: r.key,
                    done: !1
                } : "values" == e ? {
                    value: r.value,
                    done: !1
                } : {
                    value: [r.key, r.value],
                    done: !1
                } : (t.target = void 0, {
                    value: void 0,
                    done: !0
                })
            }), r ? "entries" : "values", !r, !0), bo(e)
        }
    });
    var Wi = {},
        Hi = Math.log;
    Wi = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Hi(1 + t)
    };
    var Gi = Math.acosh,
        Vi = Math.log,
        $i = Math.sqrt,
        Yi = Math.LN2,
        Xi = !Gi || 710 != Math.floor(Gi(Number.MAX_VALUE)) || Gi(1 / 0) != 1 / 0;
    n({
        target: "Math",
        stat: !0,
        forced: Xi
    }, {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Vi(t) + Yi : Wi(t - 1 + $i(t - 1) * $i(t + 1))
        }
    });
    var Ji = Math.asinh,
        Ki = Math.log,
        Qi = Math.sqrt;
    n({
        target: "Math",
        stat: !0,
        forced: !(Ji && 1 / Ji(0) > 0)
    }, {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Ki(e + Qi(e * e + 1)) : e
        }
    });
    var Zi = Math.atanh,
        ta = Math.log;
    n({
        target: "Math",
        stat: !0,
        forced: !(Zi && 1 / Zi(-0) < 0)
    }, {
        atanh: function(t) {
            return 0 == (t = +t) ? t : ta((1 + t) / (1 - t)) / 2
        }
    });
    var ea = {};
    ea = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    };
    var ra = Math.abs,
        na = Math.pow;
    n({
        target: "Math",
        stat: !0
    }, {
        cbrt: function(t) {
            return ea(t = +t) * na(ra(t), 1 / 3)
        }
    });
    var oa = Math.floor,
        ia = Math.log,
        aa = Math.LOG2E;
    n({
        target: "Math",
        stat: !0
    }, {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - oa(ia(t + .5) * aa) : 32
        }
    });
    var ua = {},
        ca = Math.expm1,
        sa = Math.exp;
    ua = !ca || ca(10) > 22025.465794806718 || ca(10) < 22025.465794806718 || -2e-17 != ca(-2e-17) ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : sa(t) - 1
    } : ca;
    var fa = Math.cosh,
        la = Math.abs,
        ha = Math.E;
    n({
        target: "Math",
        stat: !0,
        forced: !fa || fa(710) === 1 / 0
    }, {
        cosh: function(t) {
            var e = ua(la(t) - 1) + 1;
            return (e + 1 / (e * ha * ha)) * (ha / 2)
        }
    }), n({
        target: "Math",
        stat: !0,
        forced: ua != Math.expm1
    }, {
        expm1: ua
    });
    var pa, da = Math.abs,
        va = Math.pow,
        ga = va(2, -52),
        ya = va(2, -23),
        ma = va(2, 127) * (2 - ya),
        ba = va(2, -126);
    pa = Math.fround || function(t) {
        var e, r, n = da(t),
            o = ea(t);
        return n < ba ? o * (n / ba / ya + 1 / ga - 1 / ga) * ba * ya : (r = (e = (1 + ya / ga) * n) - (e - n)) > ma || r != r ? o * (1 / 0) : o * r
    }, n({
        target: "Math",
        stat: !0
    }, {
        fround: pa
    });
    var wa = Math.hypot,
        Sa = Math.abs,
        _a = Math.sqrt,
        Ea = !!wa && wa(1 / 0, NaN) !== 1 / 0;
    n({
        target: "Math",
        stat: !0,
        forced: Ea
    }, {
        hypot: function(t, e) {
            for (var r, n, o = 0, i = 0, a = arguments.length, u = 0; i < a;) u < (r = Sa(arguments[i++])) ? (o = o * (n = u / r) * n + 1, u = r) : o += r > 0 ? (n = r / u) * n : r;
            return u === 1 / 0 ? 1 / 0 : u * _a(o)
        }
    });
    var xa = Math.imul,
        Oa = u((function() {
            return -5 != xa(4294967295, 5) || 2 != xa.length
        }));
    n({
        target: "Math",
        stat: !0,
        forced: Oa
    }, {
        imul: function(t, e) {
            var r = +t,
                n = +e,
                o = 65535 & r,
                i = 65535 & n;
            return 0 | o * i + ((65535 & r >>> 16) * i + o * (65535 & n >>> 16) << 16 >>> 0)
        }
    });
    var Aa = Math.log,
        ka = Math.LOG10E;
    n({
        target: "Math",
        stat: !0
    }, {
        log10: function(t) {
            return Aa(t) * ka
        }
    }), n({
        target: "Math",
        stat: !0
    }, {
        log1p: Wi
    });
    var ja = Math.log,
        Ra = Math.LN2;
    n({
        target: "Math",
        stat: !0
    }, {
        log2: function(t) {
            return ja(t) / Ra
        }
    }), n({
        target: "Math",
        stat: !0
    }, {
        sign: ea
    });
    var Pa = Math.abs,
        Ta = Math.exp,
        Ma = Math.E,
        Ia = u((function() {
            return -2e-17 != Math.sinh(-2e-17)
        }));
    n({
        target: "Math",
        stat: !0,
        forced: Ia
    }, {
        sinh: function(t) {
            return Pa(t = +t) < 1 ? (ua(t) - ua(-t)) / 2 : (Ta(t - 1) - Ta(-t - 1)) * (Ma / 2)
        }
    });
    var La = Math.exp;
    n({
        target: "Math",
        stat: !0
    }, {
        tanh: function(t) {
            var e = ua(t = +t),
                r = ua(-t);
            return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (La(t) + La(-t))
        }
    }), oe(Math, "Math", !0);
    var Fa = Math.ceil,
        Na = Math.floor;
    n({
        target: "Math",
        stat: !0
    }, {
        trunc: function(t) {
            return (t > 0 ? Na : Fa)(t)
        }
    });
    var Ua, Ca = At,
        Da = j,
        qa = M;
    var Ba = RegExp("^[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*"),
        za = RegExp("[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*$"),
        Wa = function(t) {
            return function(e) {
                var r = String(y(e));
                return 1 & t && (r = r.replace(Ba, "")), 2 & t && (r = r.replace(za, "")), r
            }
        },
        Ha = (Ua = {
            start: Wa(1),
            end: Wa(2),
            trim: Wa(3)
        }).trim,
        Ga = o.Number,
        Va = Ga.prototype,
        $a = "Number" == p(Dt(Va)),
        Ya = function(t) {
            var e, r, n, o, i, a, u, c, s = m(t, !1);
            if ("string" == typeof s && s.length > 2)
                if (43 === (e = (s = Ha(s)).charCodeAt(0)) || 45 === e) {
                    if (88 === (r = s.charCodeAt(2)) || 120 === r) return NaN
                } else if (48 === e) {
                switch (s.charCodeAt(1)) {
                    case 66:
                    case 98:
                        n = 2, o = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8, o = 55;
                        break;
                    default:
                        return +s
                }
                for (a = (i = s.slice(2)).length, u = 0; u < a; u++)
                    if ((c = i.charCodeAt(u)) < 48 || c > o) return NaN;
                return parseInt(i, n)
            }
            return +s
        };
    if (jt("Number", !Ga(" 0o1") || !Ga("0b1") || Ga("+0x1"))) {
        for (var Xa, Ja = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    r = this;
                return r instanceof Ja && ($a ? u((function() {
                    Va.valueOf.call(r)
                })) : "Number" != p(r)) ? Ui(new Ga(Ya(e)), r, Ja) : Ya(e)
            }, Ka = a ? Ca(Ga) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Qa = 0; Ka.length > Qa; Qa++) w(Ga, Xa = Ka[Qa]) && !w(Ja, Xa) && qa(Ja, Xa, Da(Ga, Xa));
        Ja.prototype = Va, Va.constructor = Ja, I(o, "Number", Ja)
    }
    n({
        target: "Number",
        stat: !0
    }, {
        EPSILON: Math.pow(2, -52)
    });
    var Za, tu = o.isFinite;
    Za = Number.isFinite || function(t) {
        return "number" == typeof t && tu(t)
    }, n({
        target: "Number",
        stat: !0
    }, {
        isFinite: Za
    });
    var eu, ru = Math.floor;
    n({
        target: "Number",
        stat: !0
    }, {
        isInteger: eu = function(t) {
            return !b(t) && isFinite(t) && ru(t) === t
        }
    }), n({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(t) {
            return t != t
        }
    });
    var nu = Math.abs;
    n({
        target: "Number",
        stat: !0
    }, {
        isSafeInteger: function(t) {
            return eu(t) && nu(t) <= 9007199254740991
        }
    }), n({
        target: "Number",
        stat: !0
    }, {
        MAX_SAFE_INTEGER: 9007199254740991
    }), n({
        target: "Number",
        stat: !0
    }, {
        MIN_SAFE_INTEGER: -9007199254740991
    });
    var ou, iu = Ua.trim,
        au = o.parseFloat;
    ou = 1 / au("\t\n\v\f\r                　\u2028\u2029\ufeff-0") != -1 / 0 ? function(t) {
        var e = iu(String(t)),
            r = au(e);
        return 0 === r && "-" == e.charAt(0) ? -0 : r
    } : au, n({
        target: "Number",
        stat: !0,
        forced: Number.parseFloat != ou
    }, {
        parseFloat: ou
    });
    var uu, cu = Ua.trim,
        su = o.parseInt,
        fu = /^[+-]?0[Xx]/;
    uu = 8 !== su("\t\n\v\f\r                　\u2028\u2029\ufeff08") || 22 !== su("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") ? function(t, e) {
        var r = cu(String(t));
        return su(r, e >>> 0 || (fu.test(r) ? 16 : 10))
    } : su, n({
        target: "Number",
        stat: !0,
        forced: Number.parseInt != uu
    }, {
        parseInt: uu
    });
    var lu;
    lu = function(t) {
        if ("number" != typeof t && "Number" != p(t)) throw TypeError("Incorrect invocation");
        return +t
    };
    var hu = {};
    hu = "".repeat || function(t) {
        var e = String(y(this)),
            r = "",
            n = vt(t);
        if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
        for (; n > 0;
            (n >>>= 1) && (e += e)) 1 & n && (r += e);
        return r
    };
    var pu = 1..toFixed,
        du = Math.floor,
        vu = function(t, e, r) {
            return 0 === e ? r : e % 2 == 1 ? vu(t, e - 1, r * t) : vu(t * t, e / 2, r)
        },
        gu = pu && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !u((function() {
            pu.call({})
        }));
    n({
        target: "Number",
        proto: !0,
        forced: gu
    }, {
        toFixed: function(t) {
            var e, r, n, o, i = lu(this),
                a = vt(t),
                u = [0, 0, 0, 0, 0, 0],
                c = "",
                s = "0",
                f = function(t, e) {
                    for (var r = -1, n = e; ++r < 6;) n += t * u[r], u[r] = n % 1e7, n = du(n / 1e7)
                },
                l = function(t) {
                    for (var e = 6, r = 0; --e >= 0;) r += u[e], u[e] = du(r / t), r = r % t * 1e7
                },
                h = function() {
                    for (var t = 6, e = ""; --t >= 0;)
                        if ("" !== e || 0 === t || 0 !== u[t]) {
                            var r = String(u[t]);
                            e = "" === e ? r : e + hu.call("0", 7 - r.length) + r
                        }
                    return e
                };
            if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
            if (i != i) return "NaN";
            if (i <= -1e21 || i >= 1e21) return String(i);
            if (i < 0 && (c = "-", i = -i), i > 1e-21)
                if (r = (e = function(t) {
                        for (var e = 0, r = t; r >= 4096;) e += 12, r /= 4096;
                        for (; r >= 2;) e += 1, r /= 2;
                        return e
                    }(i * vu(2, 69, 1)) - 69) < 0 ? i * vu(2, -e, 1) : i / vu(2, e, 1), r *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, r), n = a; n >= 7;) f(1e7, 0), n -= 7;
                    for (f(vu(10, n, 1), 0), n = e - 1; n >= 23;) l(1 << 23), n -= 23;
                    l(1 << n), f(1, 1), l(2), s = h()
                } else f(0, r), f(1 << -e, 0), s = h() + hu.call("0", a);
            return s = a > 0 ? c + ((o = s.length) <= a ? "0." + hu.call("0", a - o) + s : s.slice(0, o - a) + "." + s.slice(o - a)) : c + s
        }
    });
    var yu = {},
        mu = Object.assign,
        bu = Object.defineProperty;
    yu = !mu || u((function() {
        if (a && 1 !== mu({
                b: 1
            }, mu(bu({}, "a", {
                enumerable: !0,
                get: function() {
                    bu(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var t = {},
            e = {},
            r = Symbol();
        return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
            e[t] = t
        })), 7 != mu({}, t)[r] || "abcdefghijklmnopqrst" != Bt(mu({}, e)).join("")
    })) ? function(t, e) {
        for (var r = Ct(t), n = arguments.length, o = 1, i = kt, u = l; n > o;)
            for (var c, s = d(arguments[o++]), f = i ? Bt(s).concat(i(s)) : Bt(s), h = f.length, p = 0; h > p;) c = f[p++], a && !u.call(s, c) || (r[c] = s[c]);
        return r
    } : mu, n({
        target: "Object",
        stat: !0,
        forced: Object.assign !== yu
    }, {
        assign: yu
    });
    var wu;
    wu = !u((function() {
        var t = Math.random();
        __defineSetter__.call(null, t, (function() {})), delete o[t]
    })), a && n({
        target: "Object",
        proto: !0,
        forced: wu
    }, {
        __defineGetter__: function(t, e) {
            M(Ct(this), t, {
                get: se(e),
                enumerable: !0,
                configurable: !0
            })
        }
    }), a && n({
        target: "Object",
        proto: !0,
        forced: wu
    }, {
        __defineSetter__: function(t, e) {
            M(Ct(this), t, {
                set: se(e),
                enumerable: !0,
                configurable: !0
            })
        }
    });
    var Su, _u = l,
        Eu = function(t) {
            return function(e) {
                for (var r, n = h(e), o = Bt(n), i = o.length, u = 0, c = []; i > u;) r = o[u++], a && !_u.call(n, r) || c.push(t ? [r, n[r]] : n[r]);
                return c
            }
        },
        xu = (Su = {
            entries: Eu(!0),
            values: Eu(!1)
        }).entries;
    n({
        target: "Object",
        stat: !0
    }, {
        entries: function(t) {
            return xu(t)
        }
    });
    var Ou = ji.onFreeze,
        Au = Object.freeze,
        ku = u((function() {
            Au(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: ku,
        sham: !ki
    }, {
        freeze: function(t) {
            return Au && b(t) ? Au(Ou(t)) : t
        }
    }), n({
        target: "Object",
        stat: !0
    }, {
        fromEntries: function(t) {
            var e = {};
            return Fi(t, (function(t, r) {
                Ke(e, t, r)
            }), void 0, !0), e
        }
    });
    var ju = j,
        Ru = u((function() {
            ju(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: !a || Ru,
        sham: !a
    }, {
        getOwnPropertyDescriptor: function(t, e) {
            return ju(h(t), e)
        }
    }), n({
        target: "Object",
        stat: !0,
        sham: !a
    }, {
        getOwnPropertyDescriptors: function(t) {
            for (var e, r, n = h(t), o = j, i = st(n), a = {}, u = 0; i.length > u;) void 0 !== (r = o(n, e = i[u++])) && Ke(a, e, r);
            return a
        }
    });
    var Pu = Qt,
        Tu = u((function() {
            return !Object.getOwnPropertyNames(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Tu
    }, {
        getOwnPropertyNames: Pu
    });
    var Mu = u((function() {
        mn(1)
    }));
    n({
        target: "Object",
        stat: !0,
        forced: Mu,
        sham: !yn
    }, {
        getPrototypeOf: function(t) {
            return mn(Ct(t))
        }
    });
    var Iu = {};
    Iu = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }, n({
        target: "Object",
        stat: !0
    }, {
        is: Iu
    });
    var Lu = Object.isExtensible,
        Fu = u((function() {
            Lu(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Fu
    }, {
        isExtensible: function(t) {
            return !!b(t) && (!Lu || Lu(t))
        }
    });
    var Nu = Object.isFrozen,
        Uu = u((function() {
            Nu(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Uu
    }, {
        isFrozen: function(t) {
            return !b(t) || !!Nu && Nu(t)
        }
    });
    var Cu = Object.isSealed,
        Du = u((function() {
            Cu(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Du
    }, {
        isSealed: function(t) {
            return !b(t) || !!Cu && Cu(t)
        }
    });
    var qu = u((function() {
        Bt(1)
    }));
    n({
        target: "Object",
        stat: !0,
        forced: qu
    }, {
        keys: function(t) {
            return Bt(Ct(t))
        }
    });
    var Bu = j;
    a && n({
        target: "Object",
        proto: !0,
        forced: wu
    }, {
        __lookupGetter__: function(t) {
            var e, r = Ct(this),
                n = m(t, !0);
            do {
                if (e = Bu(r, n)) return e.get
            } while (r = mn(r))
        }
    });
    var zu = j;
    a && n({
        target: "Object",
        proto: !0,
        forced: wu
    }, {
        __lookupSetter__: function(t) {
            var e, r = Ct(this),
                n = m(t, !0);
            do {
                if (e = zu(r, n)) return e.set
            } while (r = mn(r))
        }
    });
    var Wu = ji.onFreeze,
        Hu = Object.preventExtensions,
        Gu = u((function() {
            Hu(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Gu,
        sham: !ki
    }, {
        preventExtensions: function(t) {
            return Hu && b(t) ? Hu(Wu(t)) : t
        }
    });
    var Vu = ji.onFreeze,
        $u = Object.seal,
        Yu = u((function() {
            $u(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: Yu,
        sham: !ki
    }, {
        seal: function(t) {
            return $u && b(t) ? $u(Vu(t)) : t
        }
    });
    var Xu;
    Xu = $r ? {}.toString : function() {
        return "[object " + Yr(this) + "]"
    }, $r || I(Object.prototype, "toString", Xu, {
        unsafe: !0
    });
    var Ju = Su.values;
    n({
        target: "Object",
        stat: !0
    }, {
        values: function(t) {
            return Ju(t)
        }
    });
    var Ku = {};
    Ku = o.Promise;
    var Qu, Zu;
    Zu = /(iphone|ipod|ipad).*applewebkit/i.test(tr);
    var tc, ec, rc, nc = o.location,
        oc = o.setImmediate,
        ic = o.clearImmediate,
        ac = o.process,
        uc = o.MessageChannel,
        cc = o.Dispatch,
        sc = 0,
        fc = {},
        lc = function(t) {
            if (fc.hasOwnProperty(t)) {
                var e = fc[t];
                delete fc[t], e()
            }
        },
        hc = function(t) {
            return function() {
                lc(t)
            }
        },
        pc = function(t) {
            lc(t.data)
        },
        dc = function(t) {
            o.postMessage(t + "", nc.protocol + "//" + nc.host)
        };
    oc && ic || (oc = function(t) {
        for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
        return fc[++sc] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, tc(sc), sc
    }, ic = function(t) {
        delete fc[t]
    }, "process" == p(ac) ? tc = function(t) {
        ac.nextTick(hc(t))
    } : cc && cc.now ? tc = function(t) {
        cc.now(hc(t))
    } : uc && !Zu ? (rc = (ec = new uc).port2, ec.port1.onmessage = pc, tc = ce(rc.postMessage, rc, 1)) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || u(dc) || "file:" === nc.protocol ? tc = "onreadystatechange" in E("script") ? function(t) {
        zt.appendChild(E("script")).onreadystatechange = function() {
            zt.removeChild(this), lc(t)
        }
    } : function(t) {
        setTimeout(hc(t), 0)
    } : (tc = dc, o.addEventListener("message", pc, !1)));
    var vc, gc, yc, mc, bc, wc, Sc, _c, Ec = (Qu = {
            set: oc,
            clear: ic
        }).set,
        xc = {},
        Oc = j,
        Ac = Qu.set,
        kc = o.MutationObserver || o.WebKitMutationObserver,
        jc = o.process,
        Rc = o.Promise,
        Pc = "process" == p(jc),
        Tc = Oc(o, "queueMicrotask"),
        Mc = Tc && Tc.value;
    Mc || (vc = function() {
        var t, e;
        for (Pc && (t = jc.domain) && t.exit(); gc;) {
            e = gc.fn, gc = gc.next;
            try {
                e()
            } catch (t) {
                throw gc ? mc() : yc = void 0, t
            }
        }
        yc = void 0, t && t.enter()
    }, Pc ? mc = function() {
        jc.nextTick(vc)
    } : kc && !Zu ? (bc = !0, wc = document.createTextNode(""), new kc(vc).observe(wc, {
        characterData: !0
    }), mc = function() {
        wc.data = bc = !bc
    }) : Rc && Rc.resolve ? (Sc = Rc.resolve(void 0), _c = Sc.then, mc = function() {
        _c.call(Sc, vc)
    }) : mc = function() {
        Ac.call(o, vc)
    }), xc = Mc || function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        yc && (yc.next = e), gc || (gc = e, mc()), yc = e
    };
    var Ic, Lc = function(t) {
            var e, r;
            this.promise = new t((function(t, n) {
                if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                e = t, r = n
            })), this.resolve = se(e), this.reject = se(r)
        },
        Fc = function(t) {
            return new Lc(t)
        };
    Ic = function(t, e) {
        if (A(t), b(e) && e.constructor === t) return e;
        var r = Fc(t);
        return (0, r.resolve)(e), r.promise
    };
    var Nc;
    Nc = function(t, e) {
        var r = o.console;
        r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e))
    };
    var Uc;
    Uc = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    };
    var Cc, Dc, qc, Bc, zc = Zt("species"),
        Wc = D.get,
        Hc = D.set,
        Gc = D.getterFor("Promise"),
        Vc = o.TypeError,
        $c = o.document,
        Yc = o.process,
        Xc = ct("fetch"),
        Jc = Fc,
        Kc = Jc,
        Qc = "process" == p(Yc),
        Zc = !!($c && $c.createEvent && o.dispatchEvent),
        ts = jt("Promise", (function() {
            if (!(F(Ku) !== String(Ku))) {
                if (66 === Ze) return !0;
                if (!Qc && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (Ze >= 51 && /native code/.test(Ku)) return !1;
            var t = Ku.resolve(1),
                e = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[zc] = e, !(t.then((function() {})) instanceof e)
        })),
        es = ts || !Zr((function(t) {
            Ku.all(t).catch((function() {}))
        })),
        rs = function(t) {
            var e;
            return !(!b(t) || "function" != typeof(e = t.then)) && e
        },
        ns = function(t, e, r) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                xc((function() {
                    for (var o = e.value, i = 1 == e.state, a = 0; n.length > a;) {
                        var u, c, s, f = n[a++],
                            l = i ? f.ok : f.fail,
                            h = f.resolve,
                            p = f.reject,
                            d = f.domain;
                        try {
                            l ? (i || (2 === e.rejection && us(t, e), e.rejection = 1), !0 === l ? u = o : (d && d.enter(), u = l(o), d && (d.exit(), s = !0)), u === f.promise ? p(Vc("Promise-chain cycle")) : (c = rs(u)) ? c.call(u, h, p) : h(u)) : p(o)
                        } catch (t) {
                            d && !s && d.exit(), p(t)
                        }
                    }
                    e.reactions = [], e.notified = !1, r && !e.rejection && is(t, e)
                }))
            }
        },
        os = function(t, e, r) {
            var n, i;
            Zc ? ((n = $c.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), o.dispatchEvent(n)) : n = {
                promise: e,
                reason: r
            }, (i = o["on" + t]) ? i(n) : "unhandledrejection" === t && Nc("Unhandled promise rejection", r)
        },
        is = function(t, e) {
            Ec.call(o, (function() {
                var r, n = e.value;
                if (as(e) && (r = Uc((function() {
                        Qc ? Yc.emit("unhandledRejection", n, t) : os("unhandledrejection", t, n)
                    })), e.rejection = Qc || as(e) ? 2 : 1, r.error)) throw r.value
            }))
        },
        as = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        us = function(t, e) {
            Ec.call(o, (function() {
                Qc ? Yc.emit("rejectionHandled", t) : os("rejectionhandled", t, e.value)
            }))
        },
        cs = function(t, e, r, n) {
            return function(o) {
                t(e, r, o, n)
            }
        },
        ss = function(t, e, r, n) {
            e.done || (e.done = !0, n && (e = n), e.value = r, e.state = 2, ns(t, e, !0))
        },
        fs = function(t, e, r, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (t === r) throw Vc("Promise can't be resolved itself");
                    var o = rs(r);
                    o ? xc((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            o.call(r, cs(fs, t, n, e), cs(ss, t, n, e))
                        } catch (r) {
                            ss(t, n, r, e)
                        }
                    })) : (e.value = r, e.state = 1, ns(t, e, !1))
                } catch (r) {
                    ss(t, {
                        done: !1
                    }, r, e)
                }
            }
        };
    ts && (function(t) {
        jo(this, Ku, "Promise"), se(t), Cc.call(this);
        var e = Wc(this);
        try {
            t(cs(fs, this, e), cs(ss, this, e))
        } catch (t) {
            ss(this, e, t)
        }
    }, (Cc = function(t) {
        Hc(this, {
            type: "Promise",
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = ko(Ku.prototype, {
        then: function(t, e) {
            var r = Gc(this),
                n = Jc(li(this, Ku));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = Qc ? Yc.domain : void 0, r.parent = !0, r.reactions.push(n), 0 != r.state && ns(this, r, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), Dc = function() {
        var t = new Cc,
            e = Wc(t);
        this.promise = t, this.resolve = cs(fs, t, e), this.reject = cs(ss, t, e)
    }, Fc = Jc = function(t) {
        return t === Ku || t === qc ? new Dc(t) : Kc(t)
    }, "function" == typeof Ku && (Bc = Ku.prototype.then, I(Ku.prototype, "then", (function(t, e) {
        var r = this;
        return new Ku((function(t, e) {
            Bc.call(r, t, e)
        })).then(t, e)
    }), {
        unsafe: !0
    }), "function" == typeof Xc && n({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return Ic(Ku, Xc.apply(o, arguments))
        }
    }))), n({
        global: !0,
        wrap: !0,
        forced: ts
    }, {
        Promise: Ku
    }), oe(Ku, "Promise", !1), bo("Promise"), qc = ct("Promise"), n({
        target: "Promise",
        stat: !0,
        forced: ts
    }, {
        reject: function(t) {
            var e = Jc(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), n({
        target: "Promise",
        stat: !0,
        forced: ts
    }, {
        resolve: function(t) {
            return Ic(this, t)
        }
    }), n({
        target: "Promise",
        stat: !0,
        forced: es
    }, {
        all: function(t) {
            var e = this,
                r = Jc(e),
                n = r.resolve,
                o = r.reject,
                i = Uc((function() {
                    var r = se(e.resolve),
                        i = [],
                        a = 0,
                        u = 1;
                    Fi(t, (function(t) {
                        var c = a++,
                            s = !1;
                        i.push(void 0), u++, r.call(e, t).then((function(t) {
                            s || (s = !0, i[c] = t, --u || n(i))
                        }), o)
                    })), --u || n(i)
                }));
            return i.error && o(i.value), r.promise
        },
        race: function(t) {
            var e = this,
                r = Jc(e),
                n = r.reject,
                o = Uc((function() {
                    var o = se(e.resolve);
                    Fi(t, (function(t) {
                        o.call(e, t).then(r.resolve, n)
                    }))
                }));
            return o.error && n(o.value), r.promise
        }
    });
    var ls = !!Ku && u((function() {
        Ku.prototype.finally.call({
            then: function() {}
        }, (function() {}))
    }));
    n({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: ls
    }, {
        finally: function(t) {
            var e = li(this, ct("Promise")),
                r = "function" == typeof t;
            return this.then(r ? function(r) {
                return Ic(e, t()).then((function() {
                    return r
                }))
            } : t, r ? function(r) {
                return Ic(e, t()).then((function() {
                    throw r
                }))
            } : t)
        }
    }), "function" != typeof Ku || Ku.prototype.finally || I(Ku.prototype, "finally", ct("Promise").prototype.finally);
    var hs = ct("Reflect", "apply"),
        ps = Function.apply,
        ds = !u((function() {
            hs((function() {}))
        }));
    n({
        target: "Reflect",
        stat: !0,
        forced: ds
    }, {
        apply: function(t, e, r) {
            return se(t), A(r), hs ? hs(t, e, r) : ps.call(t, e, r)
        }
    });
    var vs = {},
        gs = [].slice,
        ys = {},
        ms = function(t, e, r) {
            if (!(e in ys)) {
                for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                ys[e] = Function("C,a", "return new C(" + n.join(",") + ")")
            }
            return ys[e](t, r)
        };
    vs = Function.bind || function(t) {
        var e = se(this),
            r = gs.call(arguments, 1),
            n = function() {
                var o = r.concat(gs.call(arguments));
                return this instanceof n ? ms(e, o.length, o) : e.apply(t, o)
            };
        return b(e.prototype) && (n.prototype = e.prototype), n
    };
    var bs = ct("Reflect", "construct"),
        ws = u((function() {
            function t() {}
            return !(bs((function() {}), [], t) instanceof t)
        })),
        Ss = !u((function() {
            bs((function() {}))
        })),
        _s = ws || Ss;
    n({
        target: "Reflect",
        stat: !0,
        forced: _s,
        sham: _s
    }, {
        construct: function(t, e) {
            se(t), A(e);
            var r = arguments.length < 3 ? t : se(arguments[2]);
            if (Ss && !ws) return bs(t, e, r);
            if (t == r) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var n = [null];
                return n.push.apply(n, e), new(vs.apply(t, n))
            }
            var o = r.prototype,
                i = Dt(b(o) ? o : Object.prototype),
                a = Function.apply.call(t, i, e);
            return b(a) ? a : i
        }
    });
    var Es = u((function() {
        Reflect.defineProperty(M({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }));
    n({
        target: "Reflect",
        stat: !0,
        forced: Es,
        sham: !a
    }, {
        defineProperty: function(t, e, r) {
            A(t);
            var n = m(e, !0);
            A(r);
            try {
                return M(t, n, r), !0
            } catch (t) {
                return !1
            }
        }
    });
    var xs = j;
    n({
        target: "Reflect",
        stat: !0
    }, {
        deleteProperty: function(t, e) {
            var r = xs(A(t), e);
            return !(r && !r.configurable) && delete t[e]
        }
    }), n({
        target: "Reflect",
        stat: !0
    }, {
        get: function t(e, r) {
            var n, o, i = arguments.length < 3 ? e : arguments[2];
            return A(e) === i ? e[r] : (n = j(e, r)) ? w(n, "value") ? n.value : void 0 === n.get ? void 0 : n.get.call(i) : b(o = mn(e)) ? t(o, r, i) : void 0
        }
    }), n({
        target: "Reflect",
        stat: !0,
        sham: !a
    }, {
        getOwnPropertyDescriptor: function(t, e) {
            return j(A(t), e)
        }
    }), n({
        target: "Reflect",
        stat: !0,
        sham: !yn
    }, {
        getPrototypeOf: function(t) {
            return mn(A(t))
        }
    }), n({
        target: "Reflect",
        stat: !0
    }, {
        has: function(t, e) {
            return e in t
        }
    });
    var Os = Object.isExtensible;
    n({
        target: "Reflect",
        stat: !0
    }, {
        isExtensible: function(t) {
            return A(t), !Os || Os(t)
        }
    }), n({
        target: "Reflect",
        stat: !0
    }, {
        ownKeys: st
    }), n({
        target: "Reflect",
        stat: !0,
        sham: !ki
    }, {
        preventExtensions: function(t) {
            A(t);
            try {
                var e = ct("Object", "preventExtensions");
                return e && e(t), !0
            } catch (t) {
                return !1
            }
        }
    });
    var As = u((function() {
        var t = M({}, "a", {
            configurable: !0
        });
        return !1 !== Reflect.set(mn(t), "a", 1, t)
    }));
    n({
        target: "Reflect",
        stat: !0,
        forced: As
    }, {
        set: function t(e, r, n) {
            var o, i, a = arguments.length < 4 ? e : arguments[3],
                u = j(A(e), r);
            if (!u) {
                if (b(i = mn(e))) return t(i, r, n, a);
                u = c(0)
            }
            if (w(u, "value")) {
                if (!1 === u.writable || !b(a)) return !1;
                if (o = j(a, r)) {
                    if (o.get || o.set || !1 === o.writable) return !1;
                    o.value = n, M(a, r, o)
                } else M(a, r, c(0, n));
                return !0
            }
            return void 0 !== u.set && (u.set.call(a, n), !0)
        }
    }), Rn && n({
        target: "Reflect",
        stat: !0
    }, {
        setPrototypeOf: function(t, e) {
            A(t), jn(e);
            try {
                return Rn(t, e), !0
            } catch (t) {
                return !1
            }
        }
    });
    var ks, js = M,
        Rs = At,
        Ps = Zt("match");
    ks = function(t) {
        var e;
        return b(t) && (void 0 !== (e = t[Ps]) ? !!e : "RegExp" == p(t))
    };
    var Ts;

    function Ms(t, e) {
        return RegExp(t, e)
    }
    Ts = function() {
        var t = A(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    };
    var Is = u((function() {
            var t = Ms("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })),
        Ls = u((function() {
            var t = Ms("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        })),
        Fs = D.set,
        Ns = Zt("match"),
        Us = o.RegExp,
        Cs = Us.prototype,
        Ds = /a/g,
        qs = /a/g,
        Bs = new Us(Ds) !== Ds,
        zs = Is;
    if (a && jt("RegExp", !Bs || zs || u((function() {
            return qs[Ns] = !1, Us(Ds) != Ds || Us(qs) == qs || "/a/i" != Us(Ds, "i")
        })))) {
        for (var Ws = function(t, e) {
                var r, n = this instanceof Ws,
                    o = ks(t),
                    i = void 0 === e;
                if (!n && o && t.constructor === Ws && i) return t;
                Bs ? o && !i && (t = t.source) : t instanceof Ws && (i && (e = Ts.call(t)), t = t.source), zs && (r = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
                var a = Ui(Bs ? new Us(t, e) : Us(t, e), n ? this : Cs, Ws);
                return zs && r && Fs(a, {
                    sticky: r
                }), a
            }, Hs = function(t) {
                t in Ws || js(Ws, t, {
                    configurable: !0,
                    get: function() {
                        return Us[t]
                    },
                    set: function(e) {
                        Us[t] = e
                    }
                })
            }, Gs = Rs(Us), Vs = 0; Gs.length > Vs;) Hs(Gs[Vs++]);
        Cs.constructor = Ws, Ws.prototype = Cs, I(o, "RegExp", Ws)
    }
    bo("RegExp");
    var $s, Ys, Xs = {},
        Js = RegExp.prototype.exec,
        Ks = String.prototype.replace,
        Qs = Js,
        Zs = ($s = /a/, Ys = /b*/g, Js.call($s, "a"), Js.call(Ys, "a"), 0 !== $s.lastIndex || 0 !== Ys.lastIndex),
        tf = Is || Ls,
        ef = void 0 !== /()??/.exec("")[1];
    (Zs || ef || tf) && (Qs = function(t) {
        var e, r, n, o, i = this,
            a = tf && i.sticky,
            u = Ts.call(i),
            c = i.source,
            s = 0,
            f = t;
        return a && (-1 === (u = u.replace("y", "")).indexOf("g") && (u += "g"), f = String(t).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== t[i.lastIndex - 1]) && (c = "(?: " + c + ")", f = " " + f, s++), r = new RegExp("^(?:" + c + ")", u)), ef && (r = new RegExp("^" + c + "$(?!\\s)", u)), Zs && (e = i.lastIndex), n = Js.call(a ? r : i, f), a ? n ? (n.input = n.input.slice(s), n[0] = n[0].slice(s), n.index = i.lastIndex, i.lastIndex += n[0].length) : i.lastIndex = 0 : Zs && n && (i.lastIndex = i.global ? n.index + n[0].length : e), ef && n && n.length > 1 && Ks.call(n[0], r, (function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        })), n
    }), n({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== (Xs = Qs)
    }, {
        exec: Xs
    }), a && ("g" != /./g.flags || Is) && M(RegExp.prototype, "flags", {
        configurable: !0,
        get: Ts
    });
    var rf = RegExp.prototype,
        nf = rf.toString,
        of = u((function() {
            return "/a/b" != nf.call({
                source: "a",
                flags: "b"
            })
        })),
        af = "toString" != nf.name;
    ( of || af) && I(RegExp.prototype, "toString", (function() {
        var t = A(this),
            e = String(t.source),
            r = t.flags;
        return "/" + e + "/" + String(void 0 === r && t instanceof RegExp && !("flags" in rf) ? Ts.call(t) : r)
    }), {
        unsafe: !0
    });
    Ai("Set", (function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }), Ci);
    var uf, cf = function(t) {
            return function(e, r) {
                var n, o, i = String(y(e)),
                    a = vt(r),
                    u = i.length;
                return a < 0 || a >= u ? t ? "" : void 0 : (n = i.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === u || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : n : t ? i.slice(a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536
            }
        },
        sf = (uf = {
            codeAt: cf(!1),
            charAt: cf(!0)
        }).codeAt;
    n({
        target: "String",
        proto: !0
    }, {
        codePointAt: function(t) {
            return sf(this, t)
        }
    });
    var ff, lf = j;
    ff = function(t) {
        if (ks(t)) throw TypeError("The method doesn't accept regular expressions");
        return t
    };
    var hf, pf = Zt("match");
    hf = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (r) {
            try {
                return e[pf] = !1, "/./" [t](e)
            } catch (t) {}
        }
        return !1
    };
    var df, vf = "".endsWith,
        gf = Math.min,
        yf = hf("endsWith"),
        mf = !(yf || (df = lf(String.prototype, "endsWith"), !df || df.writable));
    n({
        target: "String",
        proto: !0,
        forced: !mf && !yf
    }, {
        endsWith: function(t) {
            var e = String(y(this));
            ff(t);
            var r = arguments.length > 1 ? arguments[1] : void 0,
                n = dt(e.length),
                o = void 0 === r ? n : gf(dt(r), n),
                i = String(t);
            return vf ? vf.call(e, i, o) : e.slice(o - i.length, o) === i
        }
    });
    var bf = String.fromCharCode,
        wf = String.fromCodePoint,
        Sf = !!wf && 1 != wf.length;
    n({
        target: "String",
        stat: !0,
        forced: Sf
    }, {
        fromCodePoint: function(t) {
            for (var e, r = [], n = arguments.length, o = 0; n > o;) {
                if (e = +arguments[o++], bt(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                r.push(e < 65536 ? bf(e) : bf(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return r.join("")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: !hf("includes")
    }, {
        includes: function(t) {
            return !!~String(y(this)).indexOf(ff(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var _f = uf.charAt,
        Ef = D.set,
        xf = D.getterFor("String Iterator");
    dn(String, "String", (function(t) {
        Ef(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = xf(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = _f(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Of, Af, kf = Zt("species"),
        jf = !u((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        Rf = "$0" === "a".replace(/./, "$0"),
        Pf = Zt("replace"),
        Tf = !!/./ [Pf] && "" === /./ [Pf]("a", "$0"),
        Mf = !u((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        })),
        If = uf.charAt;
    Af = function(t, e, r) {
        return e + (r ? If(t, e).length : 1)
    };
    var Lf;
    Lf = function(t, e) {
        var r = t.exec;
        if ("function" == typeof r) {
            var n = r.call(t, e);
            if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
            return n
        }
        if ("RegExp" !== p(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return Xs.call(t, e)
    }, (Of = function(t, e, r, n) {
        var o = Zt(t),
            i = !u((function() {
                var e = {};
                return e[o] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            a = i && !u((function() {
                var e = !1,
                    r = /a/;
                return "split" === t && ((r = {}).constructor = {}, r.constructor[kf] = function() {
                    return r
                }, r.flags = "", r[o] = /./ [o]), r.exec = function() {
                    return e = !0, null
                }, r[o](""), !e
            }));
        if (!i || !a || "replace" === t && (!jf || !Rf || Tf) || "split" === t && !Mf) {
            var c = /./ [o],
                s = r(o, "" [t], (function(t, e, r, n, o) {
                    return e.exec === Xs ? i && !o ? {
                        done: !0,
                        value: c.call(e, r, n)
                    } : {
                        done: !0,
                        value: t.call(r, e, n)
                    } : {
                        done: !1
                    }
                }), {
                    REPLACE_KEEPS_$0: Rf,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Tf
                }),
                f = s[0],
                l = s[1];
            I(String.prototype, t, f), I(RegExp.prototype, o, 2 == e ? function(t, e) {
                return l.call(t, this, e)
            } : function(t) {
                return l.call(t, this)
            })
        }
        n && P(RegExp.prototype[o], "sham", !0)
    })("match", 1, (function(t, e, r) {
        return [function(e) {
            var r = y(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var o = A(t),
                i = String(this);
            if (!o.global) return Lf(o, i);
            var a = o.unicode;
            o.lastIndex = 0;
            for (var u, c = [], s = 0; null !== (u = Lf(o, i));) {
                var f = String(u[0]);
                c[s] = f, "" === f && (o.lastIndex = Af(i, dt(o.lastIndex), a)), s++
            }
            return 0 === s ? null : c
        }]
    }));
    var Ff, Nf, Uf = Math.ceil,
        Cf = function(t) {
            return function(e, r, n) {
                var o, i, a = String(y(e)),
                    u = a.length,
                    c = void 0 === n ? " " : String(n),
                    s = dt(r);
                return s <= u || "" == c ? a : (o = s - u, (i = hu.call(c, Uf(o / c.length))).length > o && (i = i.slice(0, o)), t ? a + i : i + a)
            }
        },
        Df = (Ff = {
            start: Cf(!1),
            end: Cf(!0)
        }).end;
    Nf = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(tr), n({
        target: "String",
        proto: !0,
        forced: Nf
    }, {
        padEnd: function(t) {
            return Df(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var qf = Ff.start;
    n({
        target: "String",
        proto: !0,
        forced: Nf
    }, {
        padStart: function(t) {
            return qf(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n({
        target: "String",
        stat: !0
    }, {
        raw: function(t) {
            for (var e = h(t.raw), r = dt(e.length), n = arguments.length, o = [], i = 0; r > i;) o.push(String(e[i++])), i < n && o.push(String(arguments[i]));
            return o.join("")
        }
    }), n({
        target: "String",
        proto: !0
    }, {
        repeat: hu
    });
    var Bf = Math.max,
        zf = Math.min,
        Wf = Math.floor,
        Hf = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Gf = /\$([$&'`]|\d\d?)/g;
    Of("replace", 2, (function(t, e, r, n) {
        var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            i = n.REPLACE_KEEPS_$0,
            a = o ? "$" : "$0";
        return [function(r, n) {
            var o = y(this),
                i = null == r ? void 0 : r[t];
            return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n)
        }, function(t, n) {
            if (!o && i || "string" == typeof n && -1 === n.indexOf(a)) {
                var c = r(e, t, this, n);
                if (c.done) return c.value
            }
            var s = A(t),
                f = String(this),
                l = "function" == typeof n;
            l || (n = String(n));
            var h = s.global;
            if (h) {
                var p = s.unicode;
                s.lastIndex = 0
            }
            for (var d = [];;) {
                var v = Lf(s, f);
                if (null === v) break;
                if (d.push(v), !h) break;
                "" === String(v[0]) && (s.lastIndex = Af(f, dt(s.lastIndex), p))
            }
            for (var g, y = "", m = 0, b = 0; b < d.length; b++) {
                v = d[b];
                for (var w = String(v[0]), S = Bf(zf(vt(v.index), f.length), 0), _ = [], E = 1; E < v.length; E++) _.push(void 0 === (g = v[E]) ? g : String(g));
                var x = v.groups;
                if (l) {
                    var O = [w].concat(_, S, f);
                    void 0 !== x && O.push(x);
                    var k = String(n.apply(void 0, O))
                } else k = u(w, f, S, _, x, n);
                S >= m && (y += f.slice(m, S) + k, m = S + w.length)
            }
            return y + f.slice(m)
        }];

        function u(t, r, n, o, i, a) {
            var u = n + t.length,
                c = o.length,
                s = Gf;
            return void 0 !== i && (i = Ct(i), s = Hf), e.call(a, s, (function(e, a) {
                var s;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(u);
                    case "<":
                        s = i[a.slice(1, -1)];
                        break;
                    default:
                        var f = +a;
                        if (0 === f) return e;
                        if (f > c) {
                            var l = Wf(f / 10);
                            return 0 === l ? e : l <= c ? void 0 === o[l - 1] ? a.charAt(1) : o[l - 1] + a.charAt(1) : e
                        }
                        s = o[f - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    })), Of("search", 1, (function(t, e, r) {
        return [function(e) {
            var r = y(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var o = A(t),
                i = String(this),
                a = o.lastIndex;
            Iu(a, 0) || (o.lastIndex = 0);
            var u = Lf(o, i);
            return Iu(o.lastIndex, a) || (o.lastIndex = a), null === u ? -1 : u.index
        }]
    }));
    var Vf = [].push,
        $f = Math.min,
        Yf = !u((function() {
            return !RegExp(4294967295, "y")
        }));
    Of("split", 2, (function(t, e, r) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, r) {
            var n = String(y(this)),
                o = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [n];
            if (!ks(t)) return e.call(n, t, o);
            for (var i, a, u, c = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, l = new RegExp(t.source, s + "g");
                (i = Xs.call(l, n)) && !((a = l.lastIndex) > f && (c.push(n.slice(f, i.index)), i.length > 1 && i.index < n.length && Vf.apply(c, i.slice(1)), u = i[0].length, f = a, c.length >= o));) l.lastIndex === i.index && l.lastIndex++;
            return f === n.length ? !u && l.test("") || c.push("") : c.push(n.slice(f)), c.length > o ? c.slice(0, o) : c
        } : "0".split(void 0, 0).length ? function(t, r) {
            return void 0 === t && 0 === r ? [] : e.call(this, t, r)
        } : e, [function(e, r) {
            var o = y(this),
                i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r)
        }, function(t, o) {
            var i = r(n, t, this, o, n !== e);
            if (i.done) return i.value;
            var a = A(t),
                u = String(this),
                c = li(a, RegExp),
                s = a.unicode,
                f = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Yf ? "y" : "g"),
                l = new c(Yf ? a : "^(?:" + a.source + ")", f),
                h = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === h) return [];
            if (0 === u.length) return null === Lf(l, u) ? [u] : [];
            for (var p = 0, d = 0, v = []; d < u.length;) {
                l.lastIndex = Yf ? d : 0;
                var g, y = Lf(l, Yf ? u : u.slice(d));
                if (null === y || (g = $f(dt(l.lastIndex + (Yf ? 0 : d)), u.length)) === p) d = Af(u, d, s);
                else {
                    if (v.push(u.slice(p, d)), v.length === h) return v;
                    for (var m = 1; m <= y.length - 1; m++)
                        if (v.push(y[m]), v.length === h) return v;
                    d = p = g
                }
            }
            return v.push(u.slice(p)), v
        }]
    }), !Yf);
    var Xf = j,
        Jf = "".startsWith,
        Kf = Math.min,
        Qf = hf("startsWith"),
        Zf = !Qf && !! function() {
            var t = Xf(String.prototype, "startsWith");
            return t && !t.writable
        }();
    n({
        target: "String",
        proto: !0,
        forced: !Zf && !Qf
    }, {
        startsWith: function(t) {
            var e = String(y(this));
            ff(t);
            var r = dt(Kf(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                n = String(t);
            return Jf ? Jf.call(e, n, r) : e.slice(r, r + n.length) === n
        }
    });
    var tl, el = Ua.trim;
    n({
        target: "String",
        proto: !0,
        forced: (tl = function(t) {
            return u((function() {
                return !!"\t\n\v\f\r                　\u2028\u2029\ufeff" [t]() || "​᠎" != "​᠎" [t]() || "\t\n\v\f\r                　\u2028\u2029\ufeff" [t].name !== t
            }))
        })("trim")
    }, {
        trim: function() {
            return el(this)
        }
    });
    var rl = Ua.end,
        nl = tl("trimEnd"),
        ol = nl ? function() {
            return rl(this)
        } : "".trimEnd;
    n({
        target: "String",
        proto: !0,
        forced: nl
    }, {
        trimEnd: ol,
        trimRight: ol
    });
    var il = Ua.start,
        al = tl("trimStart"),
        ul = al ? function() {
            return il(this)
        } : "".trimStart;
    n({
        target: "String",
        proto: !0,
        forced: al
    }, {
        trimStart: ul,
        trimLeft: ul
    });
    var cl, sl = /"/g;
    cl = function(t, e, r, n) {
        var o = String(y(t)),
            i = "<" + e;
        return "" !== r && (i += " " + r + '="' + String(n).replace(sl, "&quot;") + '"'), i + ">" + o + "</" + e + ">"
    };
    var fl;
    n({
        target: "String",
        proto: !0,
        forced: (fl = function(t) {
            return u((function() {
                var e = "" [t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }))
        })("anchor")
    }, {
        anchor: function(t) {
            return cl(this, "a", "name", t)
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("big")
    }, {
        big: function() {
            return cl(this, "big", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("blink")
    }, {
        blink: function() {
            return cl(this, "blink", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("bold")
    }, {
        bold: function() {
            return cl(this, "b", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("fixed")
    }, {
        fixed: function() {
            return cl(this, "tt", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("fontcolor")
    }, {
        fontcolor: function(t) {
            return cl(this, "font", "color", t)
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("fontsize")
    }, {
        fontsize: function(t) {
            return cl(this, "font", "size", t)
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("italics")
    }, {
        italics: function() {
            return cl(this, "i", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("link")
    }, {
        link: function(t) {
            return cl(this, "a", "href", t)
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("small")
    }, {
        small: function() {
            return cl(this, "small", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("strike")
    }, {
        strike: function() {
            return cl(this, "strike", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("sub")
    }, {
        sub: function() {
            return cl(this, "sub", "", "")
        }
    }), n({
        target: "String",
        proto: !0,
        forced: fl("sup")
    }, {
        sup: function() {
            return cl(this, "sup", "", "")
        }
    });
    var ll, hl, pl, dl = {},
        vl = M,
        gl = o.Int8Array,
        yl = gl && gl.prototype,
        ml = o.Uint8ClampedArray,
        bl = ml && ml.prototype,
        wl = gl && mn(gl),
        Sl = yl && mn(yl),
        _l = Object.prototype,
        El = _l.isPrototypeOf,
        xl = Zt("toStringTag"),
        Ol = H("TYPED_ARRAY_TAG"),
        Al = Ao && !!Rn && "Opera" !== Yr(o.opera),
        kl = !1,
        jl = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        Rl = function(t) {
            return b(t) && w(jl, Yr(t))
        };
    for (pl in jl) o[pl] || (Al = !1);
    if ((!Al || "function" != typeof wl || wl === Function.prototype) && (wl = function() {
            throw TypeError("Incorrect invocation")
        }, Al))
        for (pl in jl) o[pl] && Rn(o[pl], wl);
    if ((!Al || !Sl || Sl === _l) && (Sl = wl.prototype, Al))
        for (pl in jl) o[pl] && Rn(o[pl].prototype, Sl);
    if (Al && mn(bl) !== Sl && Rn(bl, Sl), a && !w(Sl, xl))
        for (pl in kl = !0, vl(Sl, xl, {
                get: function() {
                    return b(this) ? this[Ol] : void 0
                }
            }), jl) o[pl] && P(o[pl], Ol, pl);
    var Pl = (hl = {
            NATIVE_ARRAY_BUFFER_VIEWS: Al,
            TYPED_ARRAY_TAG: kl && Ol,
            aTypedArray: function(t) {
                if (Rl(t)) return t;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function(t) {
                if (Rn) {
                    if (El.call(wl, t)) return t
                } else
                    for (var e in jl)
                        if (w(jl, pl)) {
                            var r = o[e];
                            if (r && (t === r || El.call(r, t))) return t
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function(t, e, r) {
                if (a) {
                    if (r)
                        for (var n in jl) {
                            var i = o[n];
                            i && w(i.prototype, t) && delete i.prototype[t]
                        }
                    Sl[t] && !r || I(Sl, t, r ? e : Al && yl[t] || e)
                }
            },
            exportTypedArrayStaticMethod: function(t, e, r) {
                var n, i;
                if (a) {
                    if (Rn) {
                        if (r)
                            for (n in jl)(i = o[n]) && w(i, t) && delete i[t];
                        if (wl[t] && !r) return;
                        try {
                            return I(wl, t, r ? e : Al && gl[t] || e)
                        } catch (t) {}
                    }
                    for (n in jl) !(i = o[n]) || i[t] && !r || I(i, t, e)
                }
            },
            isView: function(t) {
                var e = Yr(t);
                return "DataView" === e || w(jl, e)
            },
            isTypedArray: Rl,
            TypedArray: wl,
            TypedArrayPrototype: Sl
        }).NATIVE_ARRAY_BUFFER_VIEWS,
        Tl = o.ArrayBuffer,
        Ml = o.Int8Array;
    ll = !Pl || !u((function() {
        Ml(1)
    })) || !u((function() {
        new Ml(-1)
    })) || !Zr((function(t) {
        new Ml, new Ml(null), new Ml(1.5), new Ml(t)
    }), !0) || u((function() {
        return 1 !== new Ml(new Tl(2), 1, void 0).length
    }));
    var Il, Ll;
    Ll = function(t) {
        var e = vt(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e
    }, Il = function(t, e) {
        var r = Ll(t);
        if (r % e) throw RangeError("Wrong offset");
        return r
    };
    var Fl, Nl = At,
        Ul = hl.aTypedArrayConstructor;
    Fl = function(t) {
        var e, r, n, o, i, a, u = Ct(t),
            c = arguments.length,
            s = c > 1 ? arguments[1] : void 0,
            f = void 0 !== s,
            l = Vr(u);
        if (null != l && !zr(l))
            for (a = (i = l.call(u)).next, u = []; !(o = a.call(i)).done;) u.push(o.value);
        for (f && c > 2 && (s = ce(s, arguments[2], 2)), r = dt(u.length), n = new(Ul(this))(r), e = 0; r > e; e++) n[e] = f ? s(u[e], e) : u[e];
        return n
    };
    var Cl = ue.forEach,
        Dl = D.get,
        ql = D.set,
        Bl = M,
        zl = j,
        Wl = Math.round,
        Hl = o.RangeError,
        Gl = Oo.ArrayBuffer,
        Vl = Oo.DataView,
        $l = hl.NATIVE_ARRAY_BUFFER_VIEWS,
        Yl = hl.TYPED_ARRAY_TAG,
        Xl = hl.TypedArray,
        Jl = hl.TypedArrayPrototype,
        Kl = hl.aTypedArrayConstructor,
        Ql = hl.isTypedArray,
        Zl = function(t, e) {
            for (var r = 0, n = e.length, o = new(Kl(t))(n); n > r;) o[r] = e[r++];
            return o
        },
        th = function(t, e) {
            Bl(t, e, {
                get: function() {
                    return Dl(this)[e]
                }
            })
        },
        eh = function(t) {
            var e;
            return t instanceof Gl || "ArrayBuffer" == (e = Yr(t)) || "SharedArrayBuffer" == e
        },
        rh = function(t, e) {
            return Ql(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
        },
        nh = function(t, e) {
            return rh(t, e = m(e, !0)) ? c(2, t[e]) : zl(t, e)
        },
        oh = function(t, e, r) {
            return !(rh(t, e = m(e, !0)) && b(r) && w(r, "value")) || w(r, "get") || w(r, "set") || r.configurable || w(r, "writable") && !r.writable || w(r, "enumerable") && !r.enumerable ? Bl(t, e, r) : (t[e] = r.value, t)
        };
    a ? ($l || (j = nh, M = oh, th(Jl, "buffer"), th(Jl, "byteOffset"), th(Jl, "byteLength"), th(Jl, "length")), n({
        target: "Object",
        stat: !0,
        forced: !$l
    }, {
        getOwnPropertyDescriptor: nh,
        defineProperty: oh
    }), dl = function(t, e, r) {
        var i = t.match(/\d+$/)[0] / 8,
            a = t + (r ? "Clamped" : "") + "Array",
            u = "get" + t,
            c = "set" + t,
            s = o[a],
            f = s,
            l = f && f.prototype,
            h = {},
            p = function(t, e) {
                Bl(t, e, {
                    get: function() {
                        return function(t, e) {
                            var r = Dl(t);
                            return r.view[u](e * i + r.byteOffset, !0)
                        }(this, e)
                    },
                    set: function(t) {
                        return function(t, e, n) {
                            var o = Dl(t);
                            r && (n = (n = Wl(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), o.view[c](e * i + o.byteOffset, n, !0)
                        }(this, e, t)
                    },
                    enumerable: !0
                })
            };
        $l ? ll && (f = e((function(t, e, r, n) {
            return jo(t, f, a), Ui(b(e) ? eh(e) ? void 0 !== n ? new s(e, Il(r, i), n) : void 0 !== r ? new s(e, Il(r, i)) : new s(e) : Ql(e) ? Zl(f, e) : Fl.call(f, e) : new s(Ro(e)), t, f)
        })), Rn && Rn(f, Xl), Cl(Nl(s), (function(t) {
            t in f || P(f, t, s[t])
        })), f.prototype = l) : (f = e((function(t, e, r, n) {
            jo(t, f, a);
            var o, u, c, s = 0,
                l = 0;
            if (b(e)) {
                if (!eh(e)) return Ql(e) ? Zl(f, e) : Fl.call(f, e);
                o = e, l = Il(r, i);
                var h = e.byteLength;
                if (void 0 === n) {
                    if (h % i) throw Hl("Wrong length");
                    if ((u = h - l) < 0) throw Hl("Wrong length")
                } else if ((u = dt(n) * i) + l > h) throw Hl("Wrong length");
                c = u / i
            } else c = Ro(e), o = new Gl(u = c * i);
            for (ql(t, {
                    buffer: o,
                    byteOffset: l,
                    byteLength: u,
                    length: c,
                    view: new Vl(o)
                }); s < c;) p(t, s++)
        })), Rn && Rn(f, Xl), l = f.prototype = Dt(Jl)), l.constructor !== f && P(l, "constructor", f), Yl && P(l, Yl, a), h[a] = f, n({
            global: !0,
            forced: f != s,
            sham: !$l
        }, h), "BYTES_PER_ELEMENT" in f || P(f, "BYTES_PER_ELEMENT", i), "BYTES_PER_ELEMENT" in l || P(l, "BYTES_PER_ELEMENT", i), bo(a)
    }) : dl = function() {}, dl("Float32", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Float64", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Int8", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Int16", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Int32", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Uint8", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Uint8", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }), !0), dl("Uint16", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    })), dl("Uint32", (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }));
    var ih = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("copyWithin", (function(t, e) {
        return lr.call(ih(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
    }));
    var ah = ue.every,
        uh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("every", (function(t) {
        return ah(uh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var ch = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("fill", (function(t) {
        return xr.apply(ch(this), arguments)
    }));
    var sh = ue.filter,
        fh = hl.aTypedArray,
        lh = hl.aTypedArrayConstructor;
    (0, hl.exportTypedArrayMethod)("filter", (function(t) {
        for (var e = sh(fh(this), t, arguments.length > 1 ? arguments[1] : void 0), r = li(this, this.constructor), n = 0, o = e.length, i = new(lh(r))(o); o > n;) i[n] = e[n++];
        return i
    }));
    var hh = ue.find,
        ph = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("find", (function(t) {
        return hh(ph(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var dh = ue.findIndex,
        vh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("findIndex", (function(t) {
        return dh(vh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var gh = ue.forEach,
        yh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("forEach", (function(t) {
        gh(yh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    })), (0, hl.exportTypedArrayStaticMethod)("from", Fl, ll);
    var mh = pt.includes,
        bh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("includes", (function(t) {
        return mh(bh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var wh = pt.indexOf,
        Sh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("indexOf", (function(t) {
        return wh(Sh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var _h = Zt("iterator"),
        Eh = o.Uint8Array,
        xh = pn.values,
        Oh = pn.keys,
        Ah = pn.entries,
        kh = hl.aTypedArray,
        jh = hl.exportTypedArrayMethod,
        Rh = Eh && Eh.prototype[_h],
        Ph = !!Rh && ("values" == Rh.name || null == Rh.name),
        Th = function() {
            return xh.call(kh(this))
        };
    jh("entries", (function() {
        return Ah.call(kh(this))
    })), jh("keys", (function() {
        return Oh.call(kh(this))
    })), jh("values", Th, !Ph), jh(_h, Th, !Ph);
    var Mh = hl.aTypedArray,
        Ih = [].join;
    (0, hl.exportTypedArrayMethod)("join", (function(t) {
        return Ih.apply(Mh(this), arguments)
    }));
    var Lh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("lastIndexOf", (function(t) {
        return Dn.apply(Lh(this), arguments)
    }));
    var Fh = ue.map,
        Nh = hl.aTypedArray,
        Uh = hl.aTypedArrayConstructor;
    (0, hl.exportTypedArrayMethod)("map", (function(t) {
        return Fh(Nh(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
            return new(Uh(li(t, t.constructor)))(e)
        }))
    }));
    var Ch = hl.aTypedArrayConstructor;
    (0, hl.exportTypedArrayStaticMethod)("of", (function() {
        for (var t = 0, e = arguments.length, r = new(Ch(this))(e); e > t;) r[t] = arguments[t++];
        return r
    }), ll);
    var Dh = Xn.left,
        qh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("reduce", (function(t) {
        return Dh(qh(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Bh = Xn.right,
        zh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("reduceRight", (function(t) {
        return Bh(zh(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Wh = hl.aTypedArray,
        Hh = hl.exportTypedArrayMethod,
        Gh = Math.floor;
    Hh("reverse", (function() {
        for (var t, e = Wh(this).length, r = Gh(e / 2), n = 0; n < r;) t = this[n], this[n++] = this[--e], this[e] = t;
        return this
    }));
    var Vh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("set", (function(t) {
        Vh(this);
        var e = Il(arguments.length > 1 ? arguments[1] : void 0, 1),
            r = this.length,
            n = Ct(t),
            o = dt(n.length),
            i = 0;
        if (o + e > r) throw RangeError("Wrong length");
        for (; i < o;) this[e + i] = n[i++]
    }), u((function() {
        new Int8Array(1).set({})
    })));
    var $h = hl.aTypedArray,
        Yh = hl.aTypedArrayConstructor,
        Xh = [].slice;
    (0, hl.exportTypedArrayMethod)("slice", (function(t, e) {
        for (var r = Xh.call($h(this), t, e), n = li(this, this.constructor), o = 0, i = r.length, a = new(Yh(n))(i); i > o;) a[o] = r[o++];
        return a
    }), u((function() {
        new Int8Array(1).slice()
    })));
    var Jh = ue.some,
        Kh = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("some", (function(t) {
        return Jh(Kh(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Qh = hl.aTypedArray,
        Zh = [].sort;
    (0, hl.exportTypedArrayMethod)("sort", (function(t) {
        return Zh.call(Qh(this), t)
    }));
    var tp = hl.aTypedArray;
    (0, hl.exportTypedArrayMethod)("subarray", (function(t, e) {
        var r = tp(this),
            n = r.length,
            o = bt(t, n);
        return new(li(r, r.constructor))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, dt((void 0 === e ? n : bt(e, n)) - o))
    }));
    var ep = o.Int8Array,
        rp = hl.aTypedArray,
        np = hl.exportTypedArrayMethod,
        op = [].toLocaleString,
        ip = [].slice,
        ap = !!ep && u((function() {
            op.call(new ep(1))
        }));
    np("toLocaleString", (function() {
        return op.apply(ap ? ip.call(rp(this)) : rp(this), arguments)
    }), u((function() {
        return [1, 2].toLocaleString() != new ep([1, 2]).toLocaleString()
    })) || !u((function() {
        ep.prototype.toLocaleString.call([1, 2])
    })));
    var up = hl.exportTypedArrayMethod,
        cp = o.Uint8Array,
        sp = cp && cp.prototype || {},
        fp = [].toString,
        lp = [].join;
    u((function() {
        fp.call({})
    })) && (fp = function() {
        return lp.call(this)
    });
    var hp = sp.toString != fp;
    up("toString", fp, hp);
    var pp, dp = ji.getWeakData,
        vp = D.set,
        gp = D.getterFor,
        yp = ue.find,
        mp = ue.findIndex,
        bp = 0,
        wp = function(t) {
            return t.frozen || (t.frozen = new Sp)
        },
        Sp = function() {
            this.entries = []
        },
        _p = function(t, e) {
            return yp(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    Sp.prototype = {
        get: function(t) {
            var e = _p(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!_p(this, t)
        },
        set: function(t, e) {
            var r = _p(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = mp(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    }, pp = {
        getConstructor: function(t, e, r, n) {
            var o = t((function(t, i) {
                    jo(t, o, e), vp(t, {
                        type: e,
                        id: bp++,
                        frozen: void 0
                    }), null != i && Fi(i, t[n], t, r)
                })),
                i = gp(e),
                a = function(t, e, r) {
                    var n = i(t),
                        o = dp(A(e), !0);
                    return !0 === o ? wp(n).set(e, r) : o[n.id] = r, t
                };
            return ko(o.prototype, {
                delete: function(t) {
                    var e = i(this);
                    if (!b(t)) return !1;
                    var r = dp(t);
                    return !0 === r ? wp(e).delete(t) : r && w(r, e.id) && delete r[e.id]
                },
                has: function(t) {
                    var e = i(this);
                    if (!b(t)) return !1;
                    var r = dp(t);
                    return !0 === r ? wp(e).has(t) : r && w(r, e.id)
                }
            }), ko(o.prototype, r ? {
                get: function(t) {
                    var e = i(this);
                    if (b(t)) {
                        var r = dp(t);
                        return !0 === r ? wp(e).get(t) : r ? r[e.id] : void 0
                    }
                },
                set: function(t, e) {
                    return a(this, t, e)
                }
            } : {
                add: function(t) {
                    return a(this, t, !0)
                }
            }), o
        }
    };
    var Ep, xp = D.enforce,
        Op = !o.ActiveXObject && "ActiveXObject" in o,
        Ap = Object.isExtensible,
        kp = function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        },
        jp = Ai("WeakMap", kp, pp);
    if (q && Op) {
        Ep = pp.getConstructor(kp, "WeakMap", !0), ji.REQUIRED = !0;
        var Rp = jp.prototype,
            Pp = Rp.delete,
            Tp = Rp.has,
            Mp = Rp.get,
            Ip = Rp.set;
        ko(Rp, {
            delete: function(t) {
                if (b(t) && !Ap(t)) {
                    var e = xp(this);
                    return e.frozen || (e.frozen = new Ep), Pp.call(this, t) || e.frozen.delete(t)
                }
                return Pp.call(this, t)
            },
            has: function(t) {
                if (b(t) && !Ap(t)) {
                    var e = xp(this);
                    return e.frozen || (e.frozen = new Ep), Tp.call(this, t) || e.frozen.has(t)
                }
                return Tp.call(this, t)
            },
            get: function(t) {
                if (b(t) && !Ap(t)) {
                    var e = xp(this);
                    return e.frozen || (e.frozen = new Ep), Tp.call(this, t) ? Mp.call(this, t) : e.frozen.get(t)
                }
                return Mp.call(this, t)
            },
            set: function(t, e) {
                if (b(t) && !Ap(t)) {
                    var r = xp(this);
                    r.frozen || (r.frozen = new Ep), Tp.call(this, t) ? Ip.call(this, t, e) : r.frozen.set(t, e)
                } else Ip.call(this, t, e);
                return this
            }
        })
    }
    Ai("WeakSet", (function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }), pp);
    var Lp;
    for (var Fp in Lp = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var Np = o[Fp],
            Up = Np && Np.prototype;
        if (Up && Up.forEach !== Nr) try {
            P(Up, "forEach", Nr)
        } catch (t) {
            Up.forEach = Nr
        }
    }
    var Cp = Zt("iterator"),
        Dp = Zt("toStringTag"),
        qp = pn.values;
    for (var Bp in Lp) {
        var zp = o[Bp],
            Wp = zp && zp.prototype;
        if (Wp) {
            if (Wp[Cp] !== qp) try {
                P(Wp, Cp, qp)
            } catch (t) {
                Wp[Cp] = qp
            }
            if (Wp[Dp] || P(Wp, Dp, Bp), Lp[Bp])
                for (var Hp in pn)
                    if (Wp[Hp] !== pn[Hp]) try {
                        P(Wp, Hp, pn[Hp])
                    } catch (t) {
                        Wp[Hp] = pn[Hp]
                    }
        }
    }
    var Gp = !o.setImmediate || !o.clearImmediate;
    n({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: Gp
    }, {
        setImmediate: Qu.set,
        clearImmediate: Qu.clear
    });
    var Vp = o.process,
        $p = "process" == p(Vp);
    n({
        global: !0,
        enumerable: !0,
        noTargetGet: !0
    }, {
        queueMicrotask: function(t) {
            var e = $p && Vp.domain;
            xc(e ? e.bind(t) : t)
        }
    });
    var Yp, Xp = Zt("iterator");
    Yp = !u((function() {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
            e = t.searchParams,
            r = "";
        return t.pathname = "c%20d", e.forEach((function(t, n) {
            e.delete("b"), r += n + t
        })), !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[Xp] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host
    }));
    var Jp, Kp = uf.codeAt,
        Qp = /[^\0-\u007E]/,
        Zp = /[.\u3002\uFF0E\uFF61]/g,
        ed = Math.floor,
        rd = String.fromCharCode,
        nd = function(t) {
            return t + 22 + 75 * (t < 26)
        },
        od = function(t, e, r) {
            var n = 0;
            for (t = r ? ed(t / 700) : t >> 1, t += ed(t / e); t > 455; n += 36) t = ed(t / 35);
            return ed(n + 36 * t / (t + 38))
        },
        id = function(t) {
            var e, r, n = [],
                o = (t = function(t) {
                    for (var e = [], r = 0, n = t.length; r < n;) {
                        var o = t.charCodeAt(r++);
                        if (o >= 55296 && o <= 56319 && r < n) {
                            var i = t.charCodeAt(r++);
                            56320 == (64512 & i) ? e.push(((1023 & o) << 10) + (1023 & i) + 65536) : (e.push(o), r--)
                        } else e.push(o)
                    }
                    return e
                }(t)).length,
                i = 128,
                a = 0,
                u = 72;
            for (e = 0; e < t.length; e++)(r = t[e]) < 128 && n.push(rd(r));
            var c = n.length,
                s = c;
            for (c && n.push("-"); s < o;) {
                var f = 2147483647;
                for (e = 0; e < t.length; e++)(r = t[e]) >= i && r < f && (f = r);
                var l = s + 1;
                if (f - i > ed((2147483647 - a) / l)) throw RangeError("Overflow: input needs wider integers to process");
                for (a += (f - i) * l, i = f, e = 0; e < t.length; e++) {
                    if ((r = t[e]) < i && ++a > 2147483647) throw RangeError("Overflow: input needs wider integers to process");
                    if (r == i) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                            if (h < d) break;
                            var v = h - d,
                                g = 36 - d;
                            n.push(rd(nd(d + v % g))), h = ed(v / g)
                        }
                        n.push(rd(nd(h))), u = od(a, l, s == c), a = 0, ++s
                    }
                }++a, ++i
            }
            return n.join("")
        };
    Jp = function(t) {
        var e, r, n = [],
            o = t.toLowerCase().replace(Zp, ".").split(".");
        for (e = 0; e < o.length; e++) r = o[e], n.push(Qp.test(r) ? "xn--" + id(r) : r);
        return n.join(".")
    };
    var ad, ud;
    ud = function(t) {
        var e = Vr(t);
        if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
        return A(e.call(t))
    };
    var cd = ct("fetch"),
        sd = ct("Headers"),
        fd = Zt("iterator"),
        ld = D.set,
        hd = D.getterFor("URLSearchParams"),
        pd = D.getterFor("URLSearchParamsIterator"),
        dd = /\+/g,
        vd = Array(4),
        gd = function(t) {
            return vd[t - 1] || (vd[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        },
        yd = function(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        },
        md = function(t) {
            var e = t.replace(dd, " "),
                r = 4;
            try {
                return decodeURIComponent(e)
            } catch (t) {
                for (; r;) e = e.replace(gd(r--), yd);
                return e
            }
        },
        bd = /[!'()~]|%20/g,
        wd = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Sd = function(t) {
            return wd[t]
        },
        _d = function(t) {
            return encodeURIComponent(t).replace(bd, Sd)
        },
        Ed = function(t, e) {
            if (e)
                for (var r, n, o = e.split("&"), i = 0; i < o.length;)(r = o[i++]).length && (n = r.split("="), t.push({
                    key: md(n.shift()),
                    value: md(n.join("="))
                }))
        },
        xd = function(t) {
            this.entries.length = 0, Ed(this.entries, t)
        },
        Od = function(t, e) {
            if (t < e) throw TypeError("Not enough arguments")
        },
        Ad = vn((function(t, e) {
            ld(this, {
                type: "URLSearchParamsIterator",
                iterator: ud(hd(t).entries),
                kind: e
            })
        }), "Iterator", (function() {
            var t = pd(this),
                e = t.kind,
                r = t.iterator.next(),
                n = r.value;
            return r.done || (r.value = "keys" === e ? n.key : "values" === e ? n.value : [n.key, n.value]), r
        })),
        kd = function() {
            jo(this, kd, "URLSearchParams");
            var t, e, r, n, o, i, a, u, c, s = arguments.length > 0 ? arguments[0] : void 0,
                f = this,
                l = [];
            if (ld(f, {
                    type: "URLSearchParams",
                    entries: l,
                    updateURL: function() {},
                    updateSearchParams: xd
                }), void 0 !== s)
                if (b(s))
                    if ("function" == typeof(t = Vr(s)))
                        for (r = (e = t.call(s)).next; !(n = r.call(e)).done;) {
                            if ((a = (i = (o = ud(A(n.value))).next).call(o)).done || (u = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                            l.push({
                                key: a.value + "",
                                value: u.value + ""
                            })
                        } else
                            for (c in s) w(s, c) && l.push({
                                key: c,
                                value: s[c] + ""
                            });
                    else Ed(l, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "")
        },
        jd = kd.prototype;
    ko(jd, {
        append: function(t, e) {
            Od(arguments.length, 2);
            var r = hd(this);
            r.entries.push({
                key: t + "",
                value: e + ""
            }), r.updateURL()
        },
        delete: function(t) {
            Od(arguments.length, 1);
            for (var e = hd(this), r = e.entries, n = t + "", o = 0; o < r.length;) r[o].key === n ? r.splice(o, 1) : o++;
            e.updateURL()
        },
        get: function(t) {
            Od(arguments.length, 1);
            for (var e = hd(this).entries, r = t + "", n = 0; n < e.length; n++)
                if (e[n].key === r) return e[n].value;
            return null
        },
        getAll: function(t) {
            Od(arguments.length, 1);
            for (var e = hd(this).entries, r = t + "", n = [], o = 0; o < e.length; o++) e[o].key === r && n.push(e[o].value);
            return n
        },
        has: function(t) {
            Od(arguments.length, 1);
            for (var e = hd(this).entries, r = t + "", n = 0; n < e.length;)
                if (e[n++].key === r) return !0;
            return !1
        },
        set: function(t, e) {
            Od(arguments.length, 1);
            for (var r, n = hd(this), o = n.entries, i = !1, a = t + "", u = e + "", c = 0; c < o.length; c++)(r = o[c]).key === a && (i ? o.splice(c--, 1) : (i = !0, r.value = u));
            i || o.push({
                key: a,
                value: u
            }), n.updateURL()
        },
        sort: function() {
            var t, e, r, n = hd(this),
                o = n.entries,
                i = o.slice();
            for (o.length = 0, r = 0; r < i.length; r++) {
                for (t = i[r], e = 0; e < r; e++)
                    if (o[e].key > t.key) {
                        o.splice(e, 0, t);
                        break
                    }
                e === r && o.push(t)
            }
            n.updateURL()
        },
        forEach: function(t) {
            for (var e, r = hd(this).entries, n = ce(t, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < r.length;) n((e = r[o++]).value, e.key, this)
        },
        keys: function() {
            return new Ad(this, "keys")
        },
        values: function() {
            return new Ad(this, "values")
        },
        entries: function() {
            return new Ad(this, "entries")
        }
    }, {
        enumerable: !0
    }), I(jd, fd, jd.entries), I(jd, "toString", (function() {
        for (var t, e = hd(this).entries, r = [], n = 0; n < e.length;) t = e[n++], r.push(_d(t.key) + "=" + _d(t.value));
        return r.join("&")
    }), {
        enumerable: !0
    }), oe(kd, "URLSearchParams"), n({
        global: !0,
        forced: !Yp
    }, {
        URLSearchParams: kd
    }), Yp || "function" != typeof cd || "function" != typeof sd || n({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            var e, r, n, o = [t];
            return arguments.length > 1 && (b(e = arguments[1]) && (r = e.body, "URLSearchParams" === Yr(r) && ((n = e.headers ? new sd(e.headers) : new sd).has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = Dt(e, {
                body: c(0, String(r)),
                headers: c(0, n)
            }))), o.push(e)), cd.apply(this, o)
        }
    }), ad = {
        URLSearchParams: kd,
        getState: hd
    };
    var Rd = o.URL,
        Pd = ad.URLSearchParams,
        Td = ad.getState,
        Md = D.set,
        Id = D.getterFor("URL"),
        Ld = Math.floor,
        Fd = Math.pow,
        Nd = /[A-Za-z]/,
        Ud = /[\d+-.A-Za-z]/,
        Cd = /\d/,
        Dd = /^(0x|0X)/,
        qd = /^[0-7]+$/,
        Bd = /^\d+$/,
        zd = /^[\dA-Fa-f]+$/,
        Wd = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        Hd = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        Gd = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        Vd = /[\u0009\u000A\u000D]/g,
        $d = function(t, e) {
            var r, n, o;
            if ("[" == e.charAt(0)) {
                if ("]" != e.charAt(e.length - 1)) return "Invalid host";
                if (!(r = Xd(e.slice(1, -1)))) return "Invalid host";
                t.host = r
            } else if (nv(t)) {
                if (e = Jp(e), Wd.test(e)) return "Invalid host";
                if (null === (r = Yd(e))) return "Invalid host";
                t.host = r
            } else {
                if (Hd.test(e)) return "Invalid host";
                for (r = "", n = qr(e), o = 0; o < n.length; o++) r += ev(n[o], Kd);
                t.host = r
            }
        },
        Yd = function(t) {
            var e, r, n, o, i, a, u, c = t.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (e = c.length) > 4) return t;
            for (r = [], n = 0; n < e; n++) {
                if ("" == (o = c[n])) return t;
                if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = Dd.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;
                else {
                    if (!(10 == i ? Bd : 8 == i ? qd : zd).test(o)) return t;
                    a = parseInt(o, i)
                }
                r.push(a)
            }
            for (n = 0; n < e; n++)
                if (a = r[n], n == e - 1) {
                    if (a >= Fd(256, 5 - e)) return null
                } else if (a > 255) return null;
            for (u = r.pop(), n = 0; n < r.length; n++) u += r[n] * Fd(256, 3 - n);
            return u
        },
        Xd = function(t) {
            var e, r, n, o, i, a, u, c = [0, 0, 0, 0, 0, 0, 0, 0],
                s = 0,
                f = null,
                l = 0,
                h = function() {
                    return t.charAt(l)
                };
            if (":" == h()) {
                if (":" != t.charAt(1)) return;
                l += 2, f = ++s
            }
            for (; h();) {
                if (8 == s) return;
                if (":" != h()) {
                    for (e = r = 0; r < 4 && zd.test(h());) e = 16 * e + parseInt(h(), 16), l++, r++;
                    if ("." == h()) {
                        if (0 == r) return;
                        if (l -= r, s > 6) return;
                        for (n = 0; h();) {
                            if (o = null, n > 0) {
                                if (!("." == h() && n < 4)) return;
                                l++
                            }
                            if (!Cd.test(h())) return;
                            for (; Cd.test(h());) {
                                if (i = parseInt(h(), 10), null === o) o = i;
                                else {
                                    if (0 == o) return;
                                    o = 10 * o + i
                                }
                                if (o > 255) return;
                                l++
                            }
                            c[s] = 256 * c[s] + o, 2 != ++n && 4 != n || s++
                        }
                        if (4 != n) return;
                        break
                    }
                    if (":" == h()) {
                        if (l++, !h()) return
                    } else if (h()) return;
                    c[s++] = e
                } else {
                    if (null !== f) return;
                    l++, f = ++s
                }
            }
            if (null !== f)
                for (a = s - f, s = 7; 0 != s && a > 0;) u = c[s], c[s--] = c[f + a - 1], c[f + --a] = u;
            else if (8 != s) return;
            return c
        },
        Jd = function(t) {
            var e, r, n, o;
            if ("number" == typeof t) {
                for (e = [], r = 0; r < 4; r++) e.unshift(t % 256), t = Ld(t / 256);
                return e.join(".")
            }
            if ("object" == typeof t) {
                for (e = "", n = function(t) {
                        for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                        return o > r && (e = n, r = o), e
                    }(t), r = 0; r < 8; r++) o && 0 === t[r] || (o && (o = !1), n === r ? (e += r ? ":" : "::", o = !0) : (e += t[r].toString(16), r < 7 && (e += ":")));
                return "[" + e + "]"
            }
            return t
        },
        Kd = {},
        Qd = yu({}, Kd, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        Zd = yu({}, Qd, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        tv = yu({}, Zd, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        ev = function(t, e) {
            var r = Kp(t, 0);
            return r > 32 && r < 127 && !w(e, t) ? t : encodeURIComponent(t)
        },
        rv = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        nv = function(t) {
            return w(rv, t.scheme)
        },
        ov = function(t) {
            return "" != t.username || "" != t.password
        },
        iv = function(t) {
            return !t.host || t.cannotBeABaseURL || "file" == t.scheme
        },
        av = function(t, e) {
            var r;
            return 2 == t.length && Nd.test(t.charAt(0)) && (":" == (r = t.charAt(1)) || !e && "|" == r)
        },
        uv = function(t) {
            var e;
            return t.length > 1 && av(t.slice(0, 2)) && (2 == t.length || "/" === (e = t.charAt(2)) || "\\" === e || "?" === e || "#" === e)
        },
        cv = function(t) {
            var e = t.path,
                r = e.length;
            !r || "file" == t.scheme && 1 == r && av(e[0], !0) || e.pop()
        },
        sv = function(t) {
            return "." === t || "%2e" === t.toLowerCase()
        },
        fv = {},
        lv = {},
        hv = {},
        pv = {},
        dv = {},
        vv = {},
        gv = {},
        yv = {},
        mv = {},
        bv = {},
        wv = {},
        Sv = {},
        _v = {},
        Ev = {},
        xv = {},
        Ov = {},
        Av = {},
        kv = {},
        jv = {},
        Rv = {},
        Pv = {},
        Tv = function(t, e, r, n) {
            var o, i, a, u, c, s = r || fv,
                f = 0,
                l = "",
                h = !1,
                p = !1,
                d = !1;
            for (r || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(Gd, "")), e = e.replace(Vd, ""), o = qr(e); f <= o.length;) {
                switch (i = o[f], s) {
                    case fv:
                        if (!i || !Nd.test(i)) {
                            if (r) return "Invalid scheme";
                            s = hv;
                            continue
                        }
                        l += i.toLowerCase(), s = lv;
                        break;
                    case lv:
                        if (i && (Ud.test(i) || "+" == i || "-" == i || "." == i)) l += i.toLowerCase();
                        else {
                            if (":" != i) {
                                if (r) return "Invalid scheme";
                                l = "", s = hv, f = 0;
                                continue
                            }
                            if (r && (nv(t) != w(rv, l) || "file" == l && (ov(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
                            if (t.scheme = l, r) return void(nv(t) && rv[t.scheme] == t.port && (t.port = null));
                            l = "", "file" == t.scheme ? s = Ev : nv(t) && n && n.scheme == t.scheme ? s = pv : nv(t) ? s = yv : "/" == o[f + 1] ? (s = dv, f++) : (t.cannotBeABaseURL = !0, t.path.push(""), s = jv)
                        }
                        break;
                    case hv:
                        if (!n || n.cannotBeABaseURL && "#" != i) return "Invalid scheme";
                        if (n.cannotBeABaseURL && "#" == i) {
                            t.scheme = n.scheme, t.path = n.path.slice(), t.query = n.query, t.fragment = "", t.cannotBeABaseURL = !0, s = Pv;
                            break
                        }
                        s = "file" == n.scheme ? Ev : vv;
                        continue;
                    case pv:
                        if ("/" != i || "/" != o[f + 1]) {
                            s = vv;
                            continue
                        }
                        s = mv, f++;
                        break;
                    case dv:
                        if ("/" == i) {
                            s = bv;
                            break
                        }
                        s = kv;
                        continue;
                    case vv:
                        if (t.scheme = n.scheme, null == i) t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = n.query;
                        else if ("/" == i || "\\" == i && nv(t)) s = gv;
                        else if ("?" == i) t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = "", s = Rv;
                        else {
                            if ("#" != i) {
                                t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.path.pop(), s = kv;
                                continue
                            }
                            t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = n.query, t.fragment = "", s = Pv
                        }
                        break;
                    case gv:
                        if (!nv(t) || "/" != i && "\\" != i) {
                            if ("/" != i) {
                                t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, s = kv;
                                continue
                            }
                            s = bv
                        } else s = mv;
                        break;
                    case yv:
                        if (s = mv, "/" != i || "/" != l.charAt(f + 1)) continue;
                        f++;
                        break;
                    case mv:
                        if ("/" != i && "\\" != i) {
                            s = bv;
                            continue
                        }
                        break;
                    case bv:
                        if ("@" == i) {
                            h && (l = "%40" + l), h = !0, a = qr(l);
                            for (var v = 0; v < a.length; v++) {
                                var g = a[v];
                                if (":" != g || d) {
                                    var y = ev(g, tv);
                                    d ? t.password += y : t.username += y
                                } else d = !0
                            }
                            l = ""
                        } else if (null == i || "/" == i || "?" == i || "#" == i || "\\" == i && nv(t)) {
                            if (h && "" == l) return "Invalid authority";
                            f -= qr(l).length + 1, l = "", s = wv
                        } else l += i;
                        break;
                    case wv:
                    case Sv:
                        if (r && "file" == t.scheme) {
                            s = Ov;
                            continue
                        }
                        if (":" != i || p) {
                            if (null == i || "/" == i || "?" == i || "#" == i || "\\" == i && nv(t)) {
                                if (nv(t) && "" == l) return "Invalid host";
                                if (r && "" == l && (ov(t) || null !== t.port)) return;
                                if (u = $d(t, l)) return u;
                                if (l = "", s = Av, r) return;
                                continue
                            }
                            "[" == i ? p = !0 : "]" == i && (p = !1), l += i
                        } else {
                            if ("" == l) return "Invalid host";
                            if (u = $d(t, l)) return u;
                            if (l = "", s = _v, r == Sv) return
                        }
                        break;
                    case _v:
                        if (!Cd.test(i)) {
                            if (null == i || "/" == i || "?" == i || "#" == i || "\\" == i && nv(t) || r) {
                                if ("" != l) {
                                    var m = parseInt(l, 10);
                                    if (m > 65535) return "Invalid port";
                                    t.port = nv(t) && m === rv[t.scheme] ? null : m, l = ""
                                }
                                if (r) return;
                                s = Av;
                                continue
                            }
                            return "Invalid port"
                        }
                        l += i;
                        break;
                    case Ev:
                        if (t.scheme = "file", "/" == i || "\\" == i) s = xv;
                        else {
                            if (!n || "file" != n.scheme) {
                                s = kv;
                                continue
                            }
                            if (null == i) t.host = n.host, t.path = n.path.slice(), t.query = n.query;
                            else if ("?" == i) t.host = n.host, t.path = n.path.slice(), t.query = "", s = Rv;
                            else {
                                if ("#" != i) {
                                    uv(o.slice(f).join("")) || (t.host = n.host, t.path = n.path.slice(), cv(t)), s = kv;
                                    continue
                                }
                                t.host = n.host, t.path = n.path.slice(), t.query = n.query, t.fragment = "", s = Pv
                            }
                        }
                        break;
                    case xv:
                        if ("/" == i || "\\" == i) {
                            s = Ov;
                            break
                        }
                        n && "file" == n.scheme && !uv(o.slice(f).join("")) && (av(n.path[0], !0) ? t.path.push(n.path[0]) : t.host = n.host), s = kv;
                        continue;
                    case Ov:
                        if (null == i || "/" == i || "\\" == i || "?" == i || "#" == i) {
                            if (!r && av(l)) s = kv;
                            else if ("" == l) {
                                if (t.host = "", r) return;
                                s = Av
                            } else {
                                if (u = $d(t, l)) return u;
                                if ("localhost" == t.host && (t.host = ""), r) return;
                                l = "", s = Av
                            }
                            continue
                        }
                        l += i;
                        break;
                    case Av:
                        if (nv(t)) {
                            if (s = kv, "/" != i && "\\" != i) continue
                        } else if (r || "?" != i)
                            if (r || "#" != i) {
                                if (null != i && (s = kv, "/" != i)) continue
                            } else t.fragment = "", s = Pv;
                        else t.query = "", s = Rv;
                        break;
                    case kv:
                        if (null == i || "/" == i || "\\" == i && nv(t) || !r && ("?" == i || "#" == i)) {
                            if (".." === (c = (c = l).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (cv(t), "/" == i || "\\" == i && nv(t) || t.path.push("")) : sv(l) ? "/" == i || "\\" == i && nv(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && av(l) && (t.host && (t.host = ""), l = l.charAt(0) + ":"), t.path.push(l)), l = "", "file" == t.scheme && (null == i || "?" == i || "#" == i))
                                for (; t.path.length > 1 && "" === t.path[0];) t.path.shift();
                            "?" == i ? (t.query = "", s = Rv) : "#" == i && (t.fragment = "", s = Pv)
                        } else l += ev(i, Zd);
                        break;
                    case jv:
                        "?" == i ? (t.query = "", s = Rv) : "#" == i ? (t.fragment = "", s = Pv) : null != i && (t.path[0] += ev(i, Kd));
                        break;
                    case Rv:
                        r || "#" != i ? null != i && ("'" == i && nv(t) ? t.query += "%27" : t.query += "#" == i ? "%23" : ev(i, Kd)) : (t.fragment = "", s = Pv);
                        break;
                    case Pv:
                        null != i && (t.fragment += ev(i, Qd))
                }
                f++
            }
        },
        Mv = function(t) {
            var e, r, n = jo(this, Mv, "URL"),
                o = arguments.length > 1 ? arguments[1] : void 0,
                i = String(t),
                u = Md(n, {
                    type: "URL"
                });
            if (void 0 !== o)
                if (o instanceof Mv) e = Id(o);
                else if (r = Tv(e = {}, String(o))) throw TypeError(r);
            if (r = Tv(u, i, null, e)) throw TypeError(r);
            var c = u.searchParams = new Pd,
                s = Td(c);
            s.updateSearchParams(u.query), s.updateURL = function() {
                u.query = String(c) || null
            }, a || (n.href = Lv.call(n), n.origin = Fv.call(n), n.protocol = Nv.call(n), n.username = Uv.call(n), n.password = Cv.call(n), n.host = Dv.call(n), n.hostname = qv.call(n), n.port = Bv.call(n), n.pathname = zv.call(n), n.search = Wv.call(n), n.searchParams = Hv.call(n), n.hash = Gv.call(n))
        },
        Iv = Mv.prototype,
        Lv = function() {
            var t = Id(this),
                e = t.scheme,
                r = t.username,
                n = t.password,
                o = t.host,
                i = t.port,
                a = t.path,
                u = t.query,
                c = t.fragment,
                s = e + ":";
            return null !== o ? (s += "//", ov(t) && (s += r + (n ? ":" + n : "") + "@"), s += Jd(o), null !== i && (s += ":" + i)) : "file" == e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s
        },
        Fv = function() {
            var t = Id(this),
                e = t.scheme,
                r = t.port;
            if ("blob" == e) try {
                return new URL(e.path[0]).origin
            } catch (t) {
                return "null"
            }
            return "file" != e && nv(t) ? e + "://" + Jd(t.host) + (null !== r ? ":" + r : "") : "null"
        },
        Nv = function() {
            return Id(this).scheme + ":"
        },
        Uv = function() {
            return Id(this).username
        },
        Cv = function() {
            return Id(this).password
        },
        Dv = function() {
            var t = Id(this),
                e = t.host,
                r = t.port;
            return null === e ? "" : null === r ? Jd(e) : Jd(e) + ":" + r
        },
        qv = function() {
            var t = Id(this).host;
            return null === t ? "" : Jd(t)
        },
        Bv = function() {
            var t = Id(this).port;
            return null === t ? "" : String(t)
        },
        zv = function() {
            var t = Id(this),
                e = t.path;
            return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : ""
        },
        Wv = function() {
            var t = Id(this).query;
            return t ? "?" + t : ""
        },
        Hv = function() {
            return Id(this).searchParams
        },
        Gv = function() {
            var t = Id(this).fragment;
            return t ? "#" + t : ""
        },
        Vv = function(t, e) {
            return {
                get: t,
                set: e,
                configurable: !0,
                enumerable: !0
            }
        };
    if (a && qt(Iv, {
            href: Vv(Lv, (function(t) {
                var e = Id(this),
                    r = String(t),
                    n = Tv(e, r);
                if (n) throw TypeError(n);
                Td(e.searchParams).updateSearchParams(e.query)
            })),
            origin: Vv(Fv),
            protocol: Vv(Nv, (function(t) {
                var e = Id(this);
                Tv(e, String(t) + ":", fv)
            })),
            username: Vv(Uv, (function(t) {
                var e = Id(this),
                    r = qr(String(t));
                if (!iv(e)) {
                    e.username = "";
                    for (var n = 0; n < r.length; n++) e.username += ev(r[n], tv)
                }
            })),
            password: Vv(Cv, (function(t) {
                var e = Id(this),
                    r = qr(String(t));
                if (!iv(e)) {
                    e.password = "";
                    for (var n = 0; n < r.length; n++) e.password += ev(r[n], tv)
                }
            })),
            host: Vv(Dv, (function(t) {
                var e = Id(this);
                e.cannotBeABaseURL || Tv(e, String(t), wv)
            })),
            hostname: Vv(qv, (function(t) {
                var e = Id(this);
                e.cannotBeABaseURL || Tv(e, String(t), Sv)
            })),
            port: Vv(Bv, (function(t) {
                var e = Id(this);
                iv(e) || ("" == (t = String(t)) ? e.port = null : Tv(e, t, _v))
            })),
            pathname: Vv(zv, (function(t) {
                var e = Id(this);
                e.cannotBeABaseURL || (e.path = [], Tv(e, t + "", Av))
            })),
            search: Vv(Wv, (function(t) {
                var e = Id(this);
                "" == (t = String(t)) ? e.query = null: ("?" == t.charAt(0) && (t = t.slice(1)), e.query = "", Tv(e, t, Rv)), Td(e.searchParams).updateSearchParams(e.query)
            })),
            searchParams: Vv(Hv),
            hash: Vv(Gv, (function(t) {
                var e = Id(this);
                "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), e.fragment = "", Tv(e, t, Pv)) : e.fragment = null
            }))
        }), I(Iv, "toJSON", (function() {
            return Lv.call(this)
        }), {
            enumerable: !0
        }), I(Iv, "toString", (function() {
            return Lv.call(this)
        }), {
            enumerable: !0
        }), Rd) {
        var $v = Rd.createObjectURL,
            Yv = Rd.revokeObjectURL;
        $v && I(Mv, "createObjectURL", (function(t) {
            return $v.apply(Rd, arguments)
        })), Yv && I(Mv, "revokeObjectURL", (function(t) {
            return Yv.apply(Rd, arguments)
        }))
    }
    oe(Mv, "URL"), n({
        global: !0,
        forced: !Yp,
        sham: !a
    }, {
        URL: Mv
    }), n({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return URL.prototype.toString.call(this)
        }
    });
    var Xv = function(t) {
        var e = Object.prototype,
            r = e.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            o = n.iterator || "@@iterator",
            i = n.asyncIterator || "@@asyncIterator",
            a = n.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function c(t, e, r, n) {
            var o = e && e.prototype instanceof l ? e : l,
                i = Object.create(o.prototype),
                a = new E(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return O()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var u = w(a, r);
                            if (u) {
                                if (u === f) continue;
                                return u
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var c = s(t, e, r);
                        if ("normal" === c.type) {
                            if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                    }
                }
            }(t, r, a), i
        }

        function s(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var f = {};

        function l() {}

        function h() {}

        function p() {}
        var d = {};
        d[o] = function() {
            return this
        };
        var v = Object.getPrototypeOf,
            g = v && v(v(x([])));
        g && g !== e && r.call(g, o) && (d = g);
        var y = p.prototype = l.prototype = Object.create(d);

        function m(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function b(t, e) {
            var n;
            this._invoke = function(o, i) {
                function a() {
                    return new e((function(n, a) {
                        ! function n(o, i, a, u) {
                            var c = s(t[o], t, i);
                            if ("throw" !== c.type) {
                                var f = c.arg,
                                    l = f.value;
                                return l && "object" == typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    n("next", t, a, u)
                                }), (function(t) {
                                    n("throw", t, a, u)
                                })) : e.resolve(l).then((function(t) {
                                    f.value = t, a(f)
                                }), (function(t) {
                                    return n("throw", t, a, u)
                                }))
                            }
                            u(c.arg)
                        }(o, i, n, a)
                    }))
                }
                return n = n ? n.then(a, a) : a()
            }
        }

        function w(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return f;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var n = s(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
        }

        function S(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function _(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function E(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(S, this), this.reset(!0)
        }

        function x(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        i = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return i.next = i
                }
            }
            return {
                next: O
            }
        }

        function O() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = y.constructor = p, p.constructor = h, h.displayName = u(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, a, "GeneratorFunction")), t.prototype = Object.create(y), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, m(b.prototype), b.prototype[i] = function() {
            return this
        }, t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(c(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, m(y), u(y, a, "Generator"), y[o] = function() {
            return this
        }, y.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, t.values = x, E.prototype = {
            constructor: E,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return n("end");
                    if (i.tryLoc <= this.prev) {
                        var u = r.call(i, "catchLoc"),
                            c = r.call(i, "finallyLoc");
                        if (u && c) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        } else if (u) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), f
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            _(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: x(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f
            }
        }, t
    }({});
    try {
        regeneratorRuntime = Xv
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(Xv)
    }

    function Jv(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }
    var Kv = function(t) {
            return new Promise((function(e, r) {
                setTimeout((function() {
                    r(new Error("Request took too long! Timeout after ".concat(t, " second")))
                }), 1e3 * t)
            }))
        },
        Qv = function() {
            var t, e = (t = regeneratorRuntime.mark((function t(e) {
                var r, n, o, i, a = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = a.length > 1 && void 0 !== a[1] ? a[1] : void 0, t.prev = 1, n = r ? fetch(e, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(r)
                            }) : fetch(e), t.next = 5, Promise.race([n, Kv(10)]);
                        case 5:
                            return o = t.sent, t.next = 8, o.json();
                        case 8:
                            if (i = t.sent, o.ok) {
                                t.next = 11;
                                break
                            }
                            throw new Error("".concat(i.message, " (").concat(o.status, ")"));
                        case 11:
                            return t.abrupt("return", i);
                        case 14:
                            throw t.prev = 14, t.t0 = t.catch(1), t.t0;
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [1, 14]
                ])
            })), function() {
                var e = this,
                    r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);

                    function a(t) {
                        Jv(i, n, o, a, u, "next", t)
                    }

                    function u(t) {
                        Jv(i, n, o, a, u, "throw", t)
                    }
                    a(void 0)
                }))
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();

    function Zv(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }

    function tg(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    Zv(i, n, o, a, u, "next", t)
                }

                function u(t) {
                    Zv(i, n, o, a, u, "throw", t)
                }
                a(void 0)
            }))
        }
    }

    function eg(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function rg(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? eg(Object(r), !0).forEach((function(e) {
                ng(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : eg(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function ng(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var og, ig = {
            recipe: {},
            search: {
                query: "",
                results: [],
                page: 1,
                resultsPerPage: 10
            },
            bookmarks: []
        },
        ag = function(t) {
            var e = t.data.recipe;
            return rg({
                id: e.id,
                title: e.title,
                publisher: e.publisher,
                sourceUrl: e.source_url,
                image: e.image_url,
                servings: e.servings,
                cookingTime: e.cooking_time,
                ingredients: e.ingredients
            }, e.key && {
                key: e.key
            })
        },
        ug = function() {
            var t = tg(regeneratorRuntime.mark((function t(e) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Qv("".concat("https://forkify-api.herokuapp.com/api/v2/recipes/").concat(e, "?key=").concat("8d488d17-fae0-474f-a48f-b7eab7d8c578"));
                        case 3:
                            r = t.sent, ig.recipe = ag(r), ig.bookmarks.some((function(t) {
                                return t.id === e
                            })) ? ig.recipe.bookmarked = !0 : ig.recipe.bookmarked = !1, console.log(ig.recipe), t.next = 13;
                            break;
                        case 9:
                            throw t.prev = 9, t.t0 = t.catch(0), console.error("".concat(t.t0, " 💥💥💥💥")), t.t0;
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 9]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        cg = function() {
            var t = tg(regeneratorRuntime.mark((function t(e) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, ig.search.query = e, t.next = 4, Qv("".concat("https://forkify-api.herokuapp.com/api/v2/recipes/", "?search=").concat(e, "&key=").concat("8d488d17-fae0-474f-a48f-b7eab7d8c578"));
                        case 4:
                            r = t.sent, console.log(r), ig.search.results = r.data.recipes.map((function(t) {
                                return rg({
                                    id: t.id,
                                    title: t.title,
                                    publisher: t.publisher,
                                    image: t.image_url
                                }, t.key && {
                                    key: t.key
                                })
                            })), ig.search.page = 1, t.next = 14;
                            break;
                        case 10:
                            throw t.prev = 10, t.t0 = t.catch(0), console.error("".concat(t.t0, " 💥💥💥💥")), t.t0;
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 10]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        sg = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ig.search.page;
            ig.search.page = t;
            var e = (t - 1) * ig.search.resultsPerPage,
                r = t * ig.search.resultsPerPage;
            return ig.search.results.slice(e, r)
        },
        fg = function() {
            localStorage.setItem("bookmarks", JSON.stringify(ig.bookmarks))
        },
        lg = function(t) {
            ig.bookmarks.push(t), t.id === ig.recipe.id && (ig.recipe.bookmarked = !0), fg()
        };
    (og = localStorage.getItem("bookmarks")) && (ig.bookmarks = JSON.parse(og));
    var hg, pg = null;
    var dg, vg = function() {
            return pg || (pg = function() {
                try {
                    throw new Error
                } catch (e) {
                    var t = ("" + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
                    if (t) return ("" + t[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, "$1") + "/"
                }
                return "/"
            }()), pg
        },
        gg = r;

    function yg(t) {
        if ("" === t) return ".";
        var e = "/" === t[t.length - 1] ? t.slice(0, t.length - 1) : t,
            r = e.lastIndexOf("/");
        return -1 === r ? "." : e.slice(0, r)
    }

    function mg(t, e) {
        if (t === e) return "";
        var r = t.split("/");
        "." === r[0] && r.shift();
        var n, o, i = e.split("/");
        for ("." === i[0] && i.shift(), n = 0;
            (n < i.length || n < r.length) && null == o; n++) r[n] !== i[n] && (o = n);
        var a = [];
        for (n = 0; n < r.length - o; n++) a.push("..");
        return i.length > o && a.push.apply(a, i.slice(o)), a.join("/")
    }

    function bg(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }(dg = function(t, e) {
        return mg(yg(gg(t)), gg(e))
    })._dirname = yg, dg._relative = mg, hg = vg() + dg("bf39cc533f408cac", "8a996067874c0422");
    var wg, Sg, _g, Eg = (wg = hg) && wg.__esModule ? wg.default : wg,
        xg = function() {
            function t() {
                var e, r, n;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = void 0, (r = "_data") in (e = this) ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n
            }
            var e, r, n;
            return e = t, (r = [{
                key: "render",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (!t || Array.isArray(t) && 0 === t.length) return this.renderError();
                    this._data = t;
                    var r = this._generateMarkup();
                    if (!e) return r;
                    this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", r)
                }
            }, {
                key: "update",
                value: function(t) {
                    this._data = t;
                    var e = this._generateMarkup(),
                        r = document.createRange().createContextualFragment(e),
                        n = Array.from(r.querySelectorAll("*")),
                        o = Array.from(this._parentElement.querySelectorAll("*"));
                    n.forEach((function(t, e) {
                        var r, n = o[e];
                        t.isEqualNode(n) || "" === (null === (r = t.firstChild) || void 0 === r ? void 0 : r.nodeValue.trim()) || (n.textContent = t.textContent), t.isEqualNode(n) || Array.from(t.attributes).forEach((function(t) {
                            return n.setAttribute(t.name, t.value)
                        }))
                    }))
                }
            }, {
                key: "_clear",
                value: function() {
                    this._parentElement.innerHTML = ""
                }
            }, {
                key: "renderSpinner",
                value: function() {
                    var t = '\n      <div class="spinner">\n        <svg>\n          <use href="'.concat(Eg, '#icon-loader"></use>\n        </svg>\n      </div>\n    ');
                    this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t)
                }
            }, {
                key: "renderError",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._errorMessage,
                        e = '\n      <div class="error">\n        <div>\n          <svg>\n            <use href="'.concat(Eg, '#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>').concat(t, "</p>\n      </div>\n    ");
                    this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e)
                }
            }, {
                key: "renderMessage",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._message,
                        e = '\n      <div class="message">\n        <div>\n          <svg>\n            <use href="'.concat(Eg, '#icon-smile"></use>\n          </svg>\n        </div>\n        <p>').concat(t, "</p>\n      </div>\n    ");
                    this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e)
                }
            }]) && bg(e.prototype, r), n && bg(e, n), t
        }();
    Fraction = function(t, e) {
        if (void 0 !== t && e) "number" == typeof t && "number" == typeof e ? (this.numerator = t, this.denominator = e) : "string" == typeof t && "string" == typeof e && (this.numerator = parseInt(t), this.denominator = parseInt(e));
        else if (void 0 === e)
            if (num = t, "number" == typeof num) this.numerator = num, this.denominator = 1;
            else if ("string" == typeof num) {
            var r, n, o = num.split(" ");
            if (o[0] && (r = o[0]), o[1] && (n = o[1]), r % 1 == 0 && n && n.match("/")) return new Fraction(r).add(new Fraction(n));
            if (!r || n) return;
            if ("string" == typeof r && r.match("/")) {
                var i = r.split("/");
                this.numerator = i[0], this.denominator = i[1]
            } else {
                if ("string" == typeof r && r.match(".")) return new Fraction(parseFloat(r));
                this.numerator = parseInt(r), this.denominator = 1
            }
        }
        this.normalize()
    }, Fraction.prototype.clone = function() {
        return new Fraction(this.numerator, this.denominator)
    }, Fraction.prototype.toString = function() {
        if ("NaN" === this.denominator) return "NaN";
        var t = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator),
            e = this.numerator % this.denominator,
            r = this.denominator,
            n = [];
        return 0 != t && n.push(t), 0 != e && n.push((0 === t ? e : Math.abs(e)) + "/" + r), n.length > 0 ? n.join(" ") : 0
    }, Fraction.prototype.rescale = function(t) {
        return this.numerator *= t, this.denominator *= t, this
    }, Fraction.prototype.add = function(t) {
        var e = this.clone();
        return t = t instanceof Fraction ? t.clone() : new Fraction(t), td = e.denominator, e.rescale(t.denominator), t.rescale(td), e.numerator += t.numerator, e.normalize()
    }, Fraction.prototype.subtract = function(t) {
        var e = this.clone();
        return t = t instanceof Fraction ? t.clone() : new Fraction(t), td = e.denominator, e.rescale(t.denominator), t.rescale(td), e.numerator -= t.numerator, e.normalize()
    }, Fraction.prototype.multiply = function(t) {
        var e = this.clone();
        if (t instanceof Fraction) e.numerator *= t.numerator, e.denominator *= t.denominator;
        else {
            if ("number" != typeof t) return e.multiply(new Fraction(t));
            e.numerator *= t
        }
        return e.normalize()
    }, Fraction.prototype.divide = function(t) {
        var e = this.clone();
        if (t instanceof Fraction) e.numerator *= t.denominator, e.denominator *= t.numerator;
        else {
            if ("number" != typeof t) return e.divide(new Fraction(t));
            e.denominator *= t
        }
        return e.normalize()
    }, Fraction.prototype.equals = function(t) {
        t instanceof Fraction || (t = new Fraction(t));
        var e = this.clone().normalize();
        t = t.clone().normalize();
        return e.numerator === t.numerator && e.denominator === t.denominator
    }, Fraction.prototype.normalize = (Sg = function(t) {
        return "number" == typeof t && (t > 0 && t % 1 > 0 && t % 1 < 1 || t < 0 && t % -1 < 0 && t % -1 > -1)
    }, _g = function(t, e) {
        if (e) {
            var r = Math.pow(10, e);
            return Math.round(t * r) / r
        }
        return Math.round(t)
    }, function() {
        if (Sg(this.denominator)) {
            var t = _g(this.denominator, 9),
                e = Math.pow(10, t.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * e), this.numerator *= e
        }
        Sg(this.numerator) && (t = _g(this.numerator, 9), e = Math.pow(10, t.toString().split(".")[1].length), this.numerator = Math.round(this.numerator * e), this.denominator *= e);
        var r = Fraction.gcf(this.numerator, this.denominator);
        return this.numerator /= r, this.denominator /= r, (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) && (this.numerator *= -1, this.denominator *= -1), this
    }), Fraction.gcf = function(t, e) {
        var r = [],
            n = Fraction.primeFactors(t),
            o = Fraction.primeFactors(e);
        return n.forEach((function(t) {
            var e = o.indexOf(t);
            e >= 0 && (r.push(t), o.splice(e, 1))
        })), 0 === r.length ? 1 : function() {
            var t, e = r[0];
            for (t = 1; t < r.length; t++) e *= r[t];
            return e
        }()
    }, Fraction.primeFactors = function(t) {
        for (var e = Math.abs(t), r = [], n = 2; n * n <= e;) e % n == 0 ? (r.push(n), e /= n) : n++;
        return 1 != e && r.push(e), r
    };
    var Og = Fraction;

    function Ag(t) {
        return (Ag = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function kg(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function jg(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Rg(t, e) {
        return (Rg = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function Pg(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = Ig(t);
            if (e) {
                var o = Ig(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return Tg(this, r)
        }
    }

    function Tg(t, e) {
        return !e || "object" !== Ag(e) && "function" != typeof e ? Mg(t) : e
    }

    function Mg(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Ig(t) {
        return (Ig = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Lg(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var Fg = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Rg(t, e)
        }(i, t);
        var e, r, n, o = Pg(i);

        function i() {
            var t;
            kg(this, i);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return Lg(Mg(t = o.call.apply(o, [this].concat(r))), "_parentElement", document.querySelector(".recipe")), Lg(Mg(t), "_errorMessage", "We could not find that recipe. Please try another one!"), Lg(Mg(t), "_message", ""), t
        }
        return e = i, (r = [{
            key: "addHandlerRender",
            value: function(t) {
                ["hashchange", "load"].forEach((function(e) {
                    return window.addEventListener(e, t)
                }))
            }
        }, {
            key: "addHandlerUpdateServings",
            value: function(t) {
                this._parentElement.addEventListener("click", (function(e) {
                    var r = e.target.closest(".btn--update-servings");
                    if (r) {
                        var n = r.dataset.updateTo; + n > 0 && t(+n)
                    }
                }))
            }
        }, {
            key: "addHandlerAddBookmark",
            value: function(t) {
                this._parentElement.addEventListener("click", (function(e) {
                    e.target.closest(".btn--bookmark") && t()
                }))
            }
        }, {
            key: "_generateMarkup",
            value: function() {
                return '\n      <figure class="recipe__fig">\n        <img src="'.concat(this._data.image, '" alt="').concat(this._data.title, '" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>').concat(this._data.title, '</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="').concat(Eg, '#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">').concat(this._data.cookingTime, '</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="').concat(Eg, '#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">').concat(this._data.servings, '</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings - 1, '">\n              <svg>\n                <use href="').concat(Eg, '#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings + 1, '">\n              <svg>\n                <use href="').concat(Eg, '#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ').concat(this._data.key ? "" : "hidden", '">\n          <svg>\n            <use href="').concat(Eg, '#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="').concat(Eg, "#icon-bookmark").concat(this._data.bookmarked ? "-fill" : "", '"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ').concat(this._data.ingredients.map(this._generateMarkupIngredient).join(""), '\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">').concat(this._data.publisher, '</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="').concat(this._data.sourceUrl, '"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="').concat(Eg, '#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    ')
            }
        }, {
            key: "_generateMarkupIngredient",
            value: function(t) {
                return '\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="'.concat(Eg, '#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">').concat(t.quantity ? new Og(t.quantity).toString() : "", '</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">').concat(t.unit, "</span>\n        ").concat(t.description, "\n      </div>\n    </li>\n  ")
            }
        }]) && jg(e.prototype, r), n && jg(e, n), i
    }(xg));

    function Ng(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var Ug = new(function() {
        function t() {
            var e, r, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), e = this, r = "_parentEl", n = document.querySelector(".search"), r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n
        }
        var e, r, n;
        return e = t, (r = [{
            key: "getQuery",
            value: function() {
                var t = this._parentEl.querySelector(".search__field").value;
                return this._clearInput(), t
            }
        }, {
            key: "_clearInput",
            value: function() {
                this._parentEl.querySelector(".search__field").value = ""
            }
        }, {
            key: "addHandlerSearch",
            value: function(t) {
                this._parentEl.addEventListener("submit", (function(e) {
                    e.preventDefault(), t()
                }))
            }
        }]) && Ng(e.prototype, r), n && Ng(e, n), t
    }());

    function Cg(t) {
        return (Cg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Dg(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function qg(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Bg(t, e) {
        return (Bg = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function zg(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = Gg(t);
            if (e) {
                var o = Gg(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return Wg(this, r)
        }
    }

    function Wg(t, e) {
        return !e || "object" !== Cg(e) && "function" != typeof e ? Hg(t) : e
    }

    function Hg(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Gg(t) {
        return (Gg = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Vg(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var $g = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Bg(t, e)
        }(i, t);
        var e, r, n, o = zg(i);

        function i() {
            var t;
            Dg(this, i);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return Vg(Hg(t = o.call.apply(o, [this].concat(r))), "_parentElement", ""), t
        }
        return e = i, (r = [{
            key: "_generateMarkup",
            value: function() {
                var t = window.location.hash.slice(1);
                return '\n      <li class="preview">\n        <a class="preview__link '.concat(this._data.id === t ? "preview__link--active" : "", '" href="#').concat(this._data.id, '">\n          <figure class="preview__fig">\n            <img src="').concat(this._data.image, '" alt="').concat(this._data.title, '" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">').concat(this._data.title, '</h4>\n            <p class="preview__publisher">').concat(this._data.publisher, '</p>\n            <div class="preview__user-generated ').concat(this._data.key ? "" : "hidden", '">\n              <svg>\n              <use href="').concat(Eg, '#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    ')
            }
        }]) && qg(e.prototype, r), n && qg(e, n), i
    }(xg));

    function Yg(t) {
        return (Yg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Xg(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Jg(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Kg(t, e) {
        return (Kg = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function Qg(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = ey(t);
            if (e) {
                var o = ey(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return Zg(this, r)
        }
    }

    function Zg(t, e) {
        return !e || "object" !== Yg(e) && "function" != typeof e ? ty(t) : e
    }

    function ty(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function ey(t) {
        return (ey = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ry(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var ny = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Kg(t, e)
        }(i, t);
        var e, r, n, o = Qg(i);

        function i() {
            var t;
            Xg(this, i);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return ry(ty(t = o.call.apply(o, [this].concat(r))), "_parentElement", document.querySelector(".results")), ry(ty(t), "_errorMessage", "No recipes found for your query! Please try again ;)"), ry(ty(t), "_message", ""), t
        }
        return e = i, (r = [{
            key: "_generateMarkup",
            value: function() {
                return this._data.map((function(t) {
                    return $g.render(t, !1)
                })).join("")
            }
        }]) && Jg(e.prototype, r), n && Jg(e, n), i
    }(xg));

    function oy(t) {
        return (oy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function iy(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function ay(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function uy(t, e) {
        return (uy = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function cy(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = ly(t);
            if (e) {
                var o = ly(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return sy(this, r)
        }
    }

    function sy(t, e) {
        return !e || "object" !== oy(e) && "function" != typeof e ? fy(t) : e
    }

    function fy(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function ly(t) {
        return (ly = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function hy(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var py = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && uy(t, e)
        }(i, t);
        var e, r, n, o = cy(i);

        function i() {
            var t;
            iy(this, i);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return hy(fy(t = o.call.apply(o, [this].concat(r))), "_parentElement", document.querySelector(".pagination")), t
        }
        return e = i, (r = [{
            key: "addHandlerClick",
            value: function(t) {
                this._parentElement.addEventListener("click", (function(e) {
                    var r = e.target.closest(".btn--inline");
                    if (r) {
                        var n = +r.dataset.goto;
                        t(n)
                    }
                }))
            }
        }, {
            key: "_generateMarkup",
            value: function() {
                var t = this._data.page,
                    e = Math.ceil(this._data.results.length / this._data.resultsPerPage);
                return 1 === t && e > 1 ? '\n        <button data-goto="'.concat(t + 1, '" class="btn--inline pagination__btn--next">\n          <span>Page ').concat(t + 1, '</span>\n          <svg class="search__icon">\n            <use href="').concat(Eg, '#icon-arrow-right"></use>\n          </svg>\n        </button>\n      ') : t === e && e > 1 ? '\n        <button data-goto="'.concat(t - 1, '" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="').concat(Eg, '#icon-arrow-left"></use>\n          </svg>\n          <span>Page ').concat(t - 1, "</span>\n        </button>\n      ") : t < e ? '\n        <button data-goto="'.concat(t - 1, '" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="').concat(Eg, '#icon-arrow-left"></use>\n          </svg>\n          <span>Page ').concat(t - 1, '</span>\n        </button>\n        <button data-goto="').concat(t + 1, '" class="btn--inline pagination__btn--next">\n          <span>Page ').concat(t + 1, '</span>\n          <svg class="search__icon">\n            <use href="').concat(Eg, '#icon-arrow-right"></use>\n          </svg>\n        </button>\n      ') : ""
            }
        }]) && ay(e.prototype, r), n && ay(e, n), i
    }(xg));

    function dy(t) {
        return (dy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function vy(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function gy(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function yy(t, e) {
        return (yy = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function my(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = Sy(t);
            if (e) {
                var o = Sy(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return by(this, r)
        }
    }

    function by(t, e) {
        return !e || "object" !== dy(e) && "function" != typeof e ? wy(t) : e
    }

    function wy(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Sy(t) {
        return (Sy = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _y(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var Ey = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && yy(t, e)
        }(i, t);
        var e, r, n, o = my(i);

        function i() {
            var t;
            vy(this, i);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return _y(wy(t = o.call.apply(o, [this].concat(r))), "_parentElement", document.querySelector(".bookmarks__list")), _y(wy(t), "_errorMessage", "No bookmarks yet. Find a nice recipe and bookmark it ;)"), _y(wy(t), "_message", ""), t
        }
        return e = i, (r = [{
            key: "addHandlerRender",
            value: function(t) {
                window.addEventListener("load", t)
            }
        }, {
            key: "_generateMarkup",
            value: function() {
                return this._data.map((function(t) {
                    return $g.render(t, !1)
                })).join("")
            }
        }]) && gy(e.prototype, r), n && gy(e, n), i
    }(xg));

    function xy(t) {
        return (xy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Oy(t) {
        return function(t) {
            if (Array.isArray(t)) return Ay(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return Ay(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ay(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ay(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function ky(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function jy(t, e) {
        return (jy = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function Ry(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var r, n = My(t);
            if (e) {
                var o = My(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return Py(this, r)
        }
    }

    function Py(t, e) {
        return !e || "object" !== xy(e) && "function" != typeof e ? Ty(t) : e
    }

    function Ty(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function My(t) {
        return (My = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Iy(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var Ly = new(function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && jy(t, e)
        }(i, t);
        var e, r, n, o = Ry(i);

        function i() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, i), Iy(Ty(t = o.call(this)), "_parentElement", document.querySelector(".upload")), Iy(Ty(t), "_message", "Recipe was successfully uploaded :)"), Iy(Ty(t), "_window", document.querySelector(".add-recipe-window")), Iy(Ty(t), "_overlay", document.querySelector(".overlay")), Iy(Ty(t), "_btnOpen", document.querySelector(".nav__btn--add-recipe")), Iy(Ty(t), "_btnClose", document.querySelector(".btn--close-modal")), t._addHandlerShowWindow(), t._addHandlerHideWindow(), t
        }
        return e = i, (r = [{
            key: "toggleWindow",
            value: function() {
                this._overlay.classList.toggle("hidden"), this._window.classList.toggle("hidden")
            }
        }, {
            key: "_addHandlerShowWindow",
            value: function() {
                this._btnOpen.addEventListener("click", this.toggleWindow.bind(this))
            }
        }, {
            key: "_addHandlerHideWindow",
            value: function() {
                this._btnClose.addEventListener("click", this.toggleWindow.bind(this)), this._overlay.addEventListener("click", this.toggleWindow.bind(this))
            }
        }, {
            key: "addHandlerUpload",
            value: function(t) {
                this._parentElement.addEventListener("submit", (function(e) {
                    e.preventDefault();
                    var r = Oy(new FormData(this)),
                        n = Object.fromEntries(r);
                    t(n)
                }))
            }
        }, {
            key: "_generateMarkup",
            value: function() {}
        }]) && ky(e.prototype, r), n && ky(e, n), i
    }(xg));

    function Fy(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }

    function Ny(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    Fy(i, n, o, a, u, "next", t)
                }

                function u(t) {
                    Fy(i, n, o, a, u, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    var Uy = function() {
            var t = Ny(regeneratorRuntime.mark((function t() {
                var e;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, e = window.location.hash.slice(1)) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            return Fg.renderSpinner(), ny.update(sg()), Ey.update(ig.bookmarks), t.next = 9, ug(e);
                        case 9:
                            Fg.render(ig.recipe), t.next = 16;
                            break;
                        case 12:
                            t.prev = 12, t.t0 = t.catch(0), Fg.renderError(), console.error(t.t0);
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 12]
                ])
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        Cy = function() {
            var t = Ny(regeneratorRuntime.mark((function t() {
                var e;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, ny.renderSpinner(), e = Ug.getQuery()) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            return t.next = 7, cg(e);
                        case 7:
                            ny.render(sg()), py.render(ig.search), t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(0), console.log(t.t0);
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 11]
                ])
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        Dy = function(t) {
            ny.render(sg(t)), py.render(ig.search)
        },
        qy = function(t) {
            ! function(t) {
                ig.recipe.ingredients.forEach((function(e) {
                    e.quantity = e.quantity * t / ig.recipe.servings
                })), ig.recipe.servings = t
            }(t), Fg.update(ig.recipe)
        },
        By = function() {
            var t, e;
            ig.recipe.bookmarked ? (t = ig.recipe.id, e = ig.bookmarks.findIndex((function(e) {
                return e.id === t
            })), ig.bookmarks.splice(e, 1), t === ig.recipe.id && (ig.recipe.bookmarked = !1), fg()) : lg(ig.recipe), Fg.update(ig.recipe), Ey.render(ig.bookmarks)
        },
        zy = function() {
            Ey.render(ig.bookmarks)
        },
        Wy = function() {
            var t = Ny(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            throw t.prev = 0, new Error("Uploads disabled. Build your application with your own API key ;)");
                        case 5:
                            console.log(ig.recipe), Fg.render(ig.recipe), Ly.renderMessage(), Ey.render(ig.bookmarks), window.history.pushState(null, "", "#".concat(ig.recipe.id)), setTimeout((function() {
                                Ly.toggleWindow()
                            }), 2500), t.next = 17;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(0), console.error("💥", t.t0), Ly.renderError(t.t0.message);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 13]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
    Ey.addHandlerRender(zy), Fg.addHandlerRender(Uy), Fg.addHandlerUpdateServings(qy), Fg.addHandlerAddBookmark(By), Ug.addHandlerSearch(Cy), py.addHandlerClick(Dy), Ly.addHandlerUpload(Wy)
}();
//# sourceMappingURL=controller.67f35fa5.js.map