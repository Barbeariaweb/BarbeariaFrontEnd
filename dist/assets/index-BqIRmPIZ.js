function pc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i &&
                        Object.defineProperty(
                            e,
                            l,
                            i.get ? i : { enumerable: !0, get: () => r[l] },
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const i = {};
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : l.crossOrigin === "anonymous"
                  ? (i.credentials = "omit")
                  : (i.credentials = "same-origin"),
            i
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i);
    }
})();
function hc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var mc = { exports: {} },
    zi = {},
    vc = { exports: {} },
    X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dl = Symbol.for("react.element"),
    sp = Symbol.for("react.portal"),
    cp = Symbol.for("react.fragment"),
    fp = Symbol.for("react.strict_mode"),
    dp = Symbol.for("react.profiler"),
    pp = Symbol.for("react.provider"),
    hp = Symbol.for("react.context"),
    mp = Symbol.for("react.forward_ref"),
    vp = Symbol.for("react.suspense"),
    gp = Symbol.for("react.memo"),
    yp = Symbol.for("react.lazy"),
    Uu = Symbol.iterator;
function wp(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Uu && e[Uu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var gc = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    yc = Object.assign,
    wc = {};
function hr(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = wc),
        (this.updater = n || gc);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xc() {}
xc.prototype = hr.prototype;
function Ca(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = wc),
        (this.updater = n || gc);
}
var Pa = (Ca.prototype = new xc());
Pa.constructor = Ca;
yc(Pa, hr.prototype);
Pa.isPureReactComponent = !0;
var Au = Array.isArray,
    Sc = Object.prototype.hasOwnProperty,
    _a = { current: null },
    Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function kc(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            Sc.call(t, r) && !Ec.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        l.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: dl,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: _a.current,
    };
}
function xp(e, t) {
    return {
        $$typeof: dl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Na(e) {
    return typeof e == "object" && e !== null && e.$$typeof === dl;
}
function Sp(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Bu = /\/+/g;
function bi(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Sp("" + e.key)
        : t.toString(36);
}
function Kl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case dl:
                    case sp:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (l = l(o)),
            (e = r === "" ? "." + bi(o, 0) : r),
            Au(l)
                ? ((n = ""),
                  e != null && (n = e.replace(Bu, "$&/") + "/"),
                  Kl(l, t, n, "", function (s) {
                      return s;
                  }))
                : l != null &&
                  (Na(l) &&
                      (l = xp(
                          l,
                          n +
                              (!l.key || (o && o.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(Bu, "$&/") + "/") +
                              e,
                      )),
                  t.push(l)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Au(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var u = r + bi(i, a);
            o += Kl(i, t, n, u, l);
        }
    else if (((u = wp(e)), typeof u == "function"))
        for (e = u.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (u = r + bi(i, a++)), (o += Kl(i, t, n, u, l));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead.",
            ))
        );
    return o;
}
function Rl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        Kl(e, r, "", "", function (i) {
            return t.call(n, i, l++);
        }),
        r
    );
}
function Ep(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                },
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ae = { current: null },
    Yl = { transition: null },
    kp = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: Yl,
        ReactCurrentOwner: _a,
    };
function Cc() {
    throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
    map: Rl,
    forEach: function (e, t, n) {
        Rl(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Rl(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Rl(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Na(e))
            throw Error(
                "React.Children.only expected to receive a single React element child.",
            );
        return e;
    },
};
X.Component = hr;
X.Fragment = cp;
X.Profiler = dp;
X.PureComponent = Ca;
X.StrictMode = fp;
X.Suspense = vp;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
X.act = Cc;
X.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
        );
    var r = yc({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = _a.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (u in t)
            Sc.call(t, u) &&
                !Ec.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a;
    }
    return { $$typeof: dl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
X.createContext = function (e) {
    return (
        (e = {
            $$typeof: hp,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: pp, _context: e }),
        (e.Consumer = e)
    );
};
X.createElement = kc;
X.createFactory = function (e) {
    var t = kc.bind(null, e);
    return (t.type = e), t;
};
X.createRef = function () {
    return { current: null };
};
X.forwardRef = function (e) {
    return { $$typeof: mp, render: e };
};
X.isValidElement = Na;
X.lazy = function (e) {
    return { $$typeof: yp, _payload: { _status: -1, _result: e }, _init: Ep };
};
X.memo = function (e, t) {
    return { $$typeof: gp, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
    var t = Yl.transition;
    Yl.transition = {};
    try {
        e();
    } finally {
        Yl.transition = t;
    }
};
X.unstable_act = Cc;
X.useCallback = function (e, t) {
    return Ae.current.useCallback(e, t);
};
X.useContext = function (e) {
    return Ae.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
    return Ae.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
    return Ae.current.useEffect(e, t);
};
X.useId = function () {
    return Ae.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
    return Ae.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
    return Ae.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
    return Ae.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
    return Ae.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
    return Ae.current.useReducer(e, t, n);
};
X.useRef = function (e) {
    return Ae.current.useRef(e);
};
X.useState = function (e) {
    return Ae.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
    return Ae.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
    return Ae.current.useTransition();
};
X.version = "18.3.1";
vc.exports = X;
var N = vc.exports;
const Cp = hc(N),
    Pp = pc({ __proto__: null, default: Cp }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = N,
    Np = Symbol.for("react.element"),
    Rp = Symbol.for("react.fragment"),
    Lp = Object.prototype.hasOwnProperty,
    Tp =
        _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t) Lp.call(t, r) && !jp.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Np,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Tp.current,
    };
}
zi.Fragment = Rp;
zi.jsx = Pc;
zi.jsxs = Pc;
mc.exports = zi;
var C = mc.exports,
    _c = { exports: {} },
    et = {},
    Nc = { exports: {} },
    Rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(z, I) {
        var W = z.length;
        z.push(I);
        e: for (; 0 < W; ) {
            var ne = (W - 1) >>> 1,
                le = z[ne];
            if (0 < l(le, I)) (z[ne] = I), (z[W] = le), (W = ne);
            else break e;
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0];
    }
    function r(z) {
        if (z.length === 0) return null;
        var I = z[0],
            W = z.pop();
        if (W !== I) {
            z[0] = W;
            e: for (var ne = 0, le = z.length, $e = le >>> 1; ne < $e; ) {
                var He = 2 * (ne + 1) - 1,
                    Ct = z[He],
                    Ne = He + 1,
                    nt = z[Ne];
                if (0 > l(Ct, W))
                    Ne < le && 0 > l(nt, Ct)
                        ? ((z[ne] = nt), (z[Ne] = W), (ne = Ne))
                        : ((z[ne] = Ct), (z[He] = W), (ne = He));
                else if (Ne < le && 0 > l(nt, W))
                    (z[ne] = nt), (z[Ne] = W), (ne = Ne);
                else break e;
            }
        }
        return I;
    }
    function l(z, I) {
        var W = z.sortIndex - I.sortIndex;
        return W !== 0 ? W : z.id - I.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a;
        };
    }
    var u = [],
        s = [],
        d = 1,
        f = null,
        m = 3,
        w = !1,
        k = !1,
        S = !1,
        L = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(z) {
        for (var I = n(s); I !== null; ) {
            if (I.callback === null) r(s);
            else if (I.startTime <= z)
                r(s), (I.sortIndex = I.expirationTime), t(u, I);
            else break;
            I = n(s);
        }
    }
    function E(z) {
        if (((S = !1), v(z), !k))
            if (n(u) !== null) (k = !0), st(R);
            else {
                var I = n(s);
                I !== null && Bt(E, I.startTime - z);
            }
    }
    function R(z, I) {
        (k = !1), S && ((S = !1), h(g), (g = -1)), (w = !0);
        var W = m;
        try {
            for (
                v(I), f = n(u);
                f !== null && (!(f.expirationTime > I) || (z && !Q()));

            ) {
                var ne = f.callback;
                if (typeof ne == "function") {
                    (f.callback = null), (m = f.priorityLevel);
                    var le = ne(f.expirationTime <= I);
                    (I = e.unstable_now()),
                        typeof le == "function"
                            ? (f.callback = le)
                            : f === n(u) && r(u),
                        v(I);
                } else r(u);
                f = n(u);
            }
            if (f !== null) var $e = !0;
            else {
                var He = n(s);
                He !== null && Bt(E, He.startTime - I), ($e = !1);
            }
            return $e;
        } finally {
            (f = null), (m = W), (w = !1);
        }
    }
    var j = !1,
        O = null,
        g = -1,
        $ = 5,
        F = -1;
    function Q() {
        return !(e.unstable_now() - F < $);
    }
    function te() {
        if (O !== null) {
            var z = e.unstable_now();
            F = z;
            var I = !0;
            try {
                I = O(!0, z);
            } finally {
                I ? ye() : ((j = !1), (O = null));
            }
        } else j = !1;
    }
    var ye;
    if (typeof c == "function")
        ye = function () {
            c(te);
        };
    else if (typeof MessageChannel < "u") {
        var pe = new MessageChannel(),
            yt = pe.port2;
        (pe.port1.onmessage = te),
            (ye = function () {
                yt.postMessage(null);
            });
    } else
        ye = function () {
            L(te, 0);
        };
    function st(z) {
        (O = z), j || ((j = !0), ye());
    }
    function Bt(z, I) {
        g = L(function () {
            z(e.unstable_now());
        }, I);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (z) {
            z.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            k || w || ((k = !0), st(R));
        }),
        (e.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : ($ = 0 < z ? Math.floor(1e3 / z) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (z) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var I = 3;
                    break;
                default:
                    I = m;
            }
            var W = m;
            m = I;
            try {
                return z();
            } finally {
                m = W;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (z, I) {
            switch (z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    z = 3;
            }
            var W = m;
            m = z;
            try {
                return I();
            } finally {
                m = W;
            }
        }),
        (e.unstable_scheduleCallback = function (z, I, W) {
            var ne = e.unstable_now();
            switch (
                (typeof W == "object" && W !== null
                    ? ((W = W.delay),
                      (W = typeof W == "number" && 0 < W ? ne + W : ne))
                    : (W = ne),
                z)
            ) {
                case 1:
                    var le = -1;
                    break;
                case 2:
                    le = 250;
                    break;
                case 5:
                    le = 1073741823;
                    break;
                case 4:
                    le = 1e4;
                    break;
                default:
                    le = 5e3;
            }
            return (
                (le = W + le),
                (z = {
                    id: d++,
                    callback: I,
                    priorityLevel: z,
                    startTime: W,
                    expirationTime: le,
                    sortIndex: -1,
                }),
                W > ne
                    ? ((z.sortIndex = W),
                      t(s, z),
                      n(u) === null &&
                          z === n(s) &&
                          (S ? (h(g), (g = -1)) : (S = !0), Bt(E, W - ne)))
                    : ((z.sortIndex = le),
                      t(u, z),
                      k || w || ((k = !0), st(R))),
                z
            );
        }),
        (e.unstable_shouldYield = Q),
        (e.unstable_wrapCallback = function (z) {
            var I = m;
            return function () {
                var W = m;
                m = I;
                try {
                    return z.apply(this, arguments);
                } finally {
                    m = W;
                }
            };
        });
})(Rc);
Nc.exports = Rc;
var zp = Nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp = N,
    be = zp;
function _(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Lc = new Set(),
    Kr = {};
function Dn(e, t) {
    or(e, t), or(e + "Capture", t);
}
function or(e, t) {
    for (Kr[e] = t, e = 0; e < t.length; e++) Lc.add(t[e]);
}
var Ot = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Lo = Object.prototype.hasOwnProperty,
    Mp =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $u = {},
    Hu = {};
function Op(e) {
    return Lo.call(Hu, e)
        ? !0
        : Lo.call($u, e)
          ? !1
          : Mp.test(e)
            ? (Hu[e] = !0)
            : (($u[e] = !0), !1);
}
function Fp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)),
                    e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Ip(e, t, n, r) {
    if (t === null || typeof t > "u" || Fp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Be(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Te[e] = new Be(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Te[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Te[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    Te[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Te[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Te[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Te[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Te[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Te[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ra = /[\-:]([a-z])/g;
function La(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Ra, La);
        Te[t] = new Be(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Ra, La);
        Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ra, La);
    Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Be(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
    Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ta(e, t, n, r) {
    var l = Te.hasOwnProperty(t) ? Te[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Ip(t, n, l, r) && (n = null),
        r || l === null
            ? Op(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
              ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((l = l.type),
                      (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ll = Symbol.for("react.element"),
    Bn = Symbol.for("react.portal"),
    $n = Symbol.for("react.fragment"),
    ja = Symbol.for("react.strict_mode"),
    To = Symbol.for("react.profiler"),
    Tc = Symbol.for("react.provider"),
    jc = Symbol.for("react.context"),
    za = Symbol.for("react.forward_ref"),
    jo = Symbol.for("react.suspense"),
    zo = Symbol.for("react.suspense_list"),
    Da = Symbol.for("react.memo"),
    Kt = Symbol.for("react.lazy"),
    zc = Symbol.for("react.offscreen"),
    Vu = Symbol.iterator;
function Sr(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Vu && e[Vu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var de = Object.assign,
    eo;
function zr(e) {
    if (eo === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            eo = (t && t[1]) || "";
        }
    return (
        `
` +
        eo +
        e
    );
}
var to = !1;
function no(e, t) {
    if (!e || to) return "";
    to = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var l = s.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = l.length - 1,
                    a = i.length - 1;
                1 <= o && 0 <= a && l[o] !== i[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || l[o] !== i[a])) {
                                var u =
                                    `
` + l[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName,
                                        )),
                                    u
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (to = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function Up(e) {
    switch (e.tag) {
        case 5:
            return zr(e.type);
        case 16:
            return zr("Lazy");
        case 13:
            return zr("Suspense");
        case 19:
            return zr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = no(e.type, !1)), e;
        case 11:
            return (e = no(e.type.render, !1)), e;
        case 1:
            return (e = no(e.type, !0)), e;
        default:
            return "";
    }
}
function Do(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $n:
            return "Fragment";
        case Bn:
            return "Portal";
        case To:
            return "Profiler";
        case ja:
            return "StrictMode";
        case jo:
            return "Suspense";
        case zo:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case jc:
                return (e.displayName || "Context") + ".Consumer";
            case Tc:
                return (e._context.displayName || "Context") + ".Provider";
            case za:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Da:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Do(e.type) || "Memo"
                );
            case Kt:
                (t = e._payload), (e = e._init);
                try {
                    return Do(e(t));
                } catch {}
        }
    return null;
}
function Ap(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Do(t);
        case 8:
            return t === ja ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function un(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Dc(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function Bp(e) {
    var t = Dc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Tl(e) {
    e._valueTracker || (e._valueTracker = Bp(e));
}
function Mc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Dc(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function ii(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Mo(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Wu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = un(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function Oc(e, t) {
    (t = t.checked), t != null && Ta(e, "checked", t, !1);
}
function Oo(e, t) {
    Oc(e, t);
    var n = un(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Fo(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Fo(e, t.type, un(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Qu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Fo(e, t, n) {
    (t !== "number" || ii(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dr = Array.isArray;
function bn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + un(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function Io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Ku(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(_(92));
            if (Dr(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: un(n) };
}
function Fc(e, t) {
    var n = un(t.value),
        r = un(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function Ic(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Uo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Ic(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var jl,
    Uc = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                jl = jl || document.createElement("div"),
                    jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = jl.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Yr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Ir = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    $p = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function (e) {
    $p.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
    });
});
function Ac(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
            typeof t != "number" ||
            t === 0 ||
            (Ir.hasOwnProperty(e) && Ir[e])
          ? ("" + t).trim()
          : t + "px";
}
function Bc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ac(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var Hp = de(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    },
);
function Ao(e, t) {
    if (t) {
        if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(_(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
}
function Bo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var $o = null;
function Ma(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ho = null,
    er = null,
    tr = null;
function Xu(e) {
    if ((e = ml(e))) {
        if (typeof Ho != "function") throw Error(_(280));
        var t = e.stateNode;
        t && ((t = Ii(t)), Ho(e.stateNode, e.type, t));
    }
}
function $c(e) {
    er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Hc() {
    if (er) {
        var e = er,
            t = tr;
        if (((tr = er = null), Xu(e), t))
            for (e = 0; e < t.length; e++) Xu(t[e]);
    }
}
function Vc(e, t) {
    return e(t);
}
function Wc() {}
var ro = !1;
function Qc(e, t, n) {
    if (ro) return e(t, n);
    ro = !0;
    try {
        return Vc(e, t, n);
    } finally {
        (ro = !1), (er !== null || tr !== null) && (Wc(), Hc());
    }
}
function Xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ii(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n;
}
var Vo = !1;
if (Ot)
    try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function () {
                Vo = !0;
            },
        }),
            window.addEventListener("test", Er, Er),
            window.removeEventListener("test", Er, Er);
    } catch {
        Vo = !1;
    }
function Vp(e, t, n, r, l, i, o, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (d) {
        this.onError(d);
    }
}
var Ur = !1,
    oi = null,
    ai = !1,
    Wo = null,
    Wp = {
        onError: function (e) {
            (Ur = !0), (oi = e);
        },
    };
function Qp(e, t, n, r, l, i, o, a, u) {
    (Ur = !1), (oi = null), Vp.apply(Wp, arguments);
}
function Kp(e, t, n, r, l, i, o, a, u) {
    if ((Qp.apply(this, arguments), Ur)) {
        if (Ur) {
            var s = oi;
            (Ur = !1), (oi = null);
        } else throw Error(_(198));
        ai || ((ai = !0), (Wo = s));
    }
}
function Mn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Kc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Gu(e) {
    if (Mn(e) !== e) throw Error(_(188));
}
function Yp(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Mn(e)), t === null)) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return Gu(l), e;
                if (i === r) return Gu(l), t;
                i = i.sibling;
            }
            throw Error(_(188));
        }
        if (n.return !== r.return) (n = l), (r = i);
        else {
            for (var o = !1, a = l.child; a; ) {
                if (a === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = i), (r = l);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = i), (n = l);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(_(189));
            }
        }
        if (n.alternate !== r) throw Error(_(190));
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
}
function Yc(e) {
    return (e = Yp(e)), e !== null ? Xc(e) : null;
}
function Xc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Xc(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Gc = be.unstable_scheduleCallback,
    Ju = be.unstable_cancelCallback,
    Xp = be.unstable_shouldYield,
    Gp = be.unstable_requestPaint,
    ge = be.unstable_now,
    Jp = be.unstable_getCurrentPriorityLevel,
    Oa = be.unstable_ImmediatePriority,
    Jc = be.unstable_UserBlockingPriority,
    ui = be.unstable_NormalPriority,
    Zp = be.unstable_LowPriority,
    Zc = be.unstable_IdlePriority,
    Di = null,
    Et = null;
function qp(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
        try {
            Et.onCommitFiberRoot(
                Di,
                e,
                void 0,
                (e.current.flags & 128) === 128,
            );
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : th,
    bp = Math.log,
    eh = Math.LN2;
function th(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / eh) | 0)) | 0;
}
var zl = 64,
    Dl = 4194304;
function Mr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function si(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? (r = Mr(a)) : ((i &= o), i !== 0 && (r = Mr(i)));
    } else (o = n & ~l), o !== 0 ? (r = Mr(o)) : i !== 0 && (r = Mr(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (i = t & -t),
        l >= i || (l === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function nh(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function rh(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var o = 31 - mt(i),
            a = 1 << o,
            u = l[o];
        u === -1
            ? (!(a & n) || a & r) && (l[o] = nh(a, t))
            : u <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function Qo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function qc() {
    var e = zl;
    return (zl <<= 1), !(zl & 4194240) && (zl = 64), e;
}
function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function pl(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - mt(t)),
        (e[t] = n);
}
function lh(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - mt(n),
            i = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
}
function Fa(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - mt(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var b = 0;
function bc(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var ef,
    Ia,
    tf,
    nf,
    rf,
    Ko = !1,
    Ml = [],
    bt = null,
    en = null,
    tn = null,
    Gr = new Map(),
    Jr = new Map(),
    Xt = [],
    ih =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " ",
        );
function Zu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            bt = null;
            break;
        case "dragenter":
        case "dragleave":
            en = null;
            break;
        case "mouseover":
        case "mouseout":
            tn = null;
            break;
        case "pointerover":
        case "pointerout":
            Gr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Jr.delete(t.pointerId);
    }
}
function kr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [l],
          }),
          t !== null && ((t = ml(t)), t !== null && Ia(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function oh(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (bt = kr(bt, e, t, n, r, l)), !0;
        case "dragenter":
            return (en = kr(en, e, t, n, r, l)), !0;
        case "mouseover":
            return (tn = kr(tn, e, t, n, r, l)), !0;
        case "pointerover":
            var i = l.pointerId;
            return Gr.set(i, kr(Gr.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (i = l.pointerId),
                Jr.set(i, kr(Jr.get(i) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function lf(e) {
    var t = Sn(e.target);
    if (t !== null) {
        var n = Mn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Kc(n)), t !== null)) {
                    (e.blockedOn = t),
                        rf(e.priority, function () {
                            tf(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Xl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ($o = r), n.target.dispatchEvent(r), ($o = null);
        } else return (t = ml(n)), t !== null && Ia(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function qu(e, t, n) {
    Xl(e) && n.delete(t);
}
function ah() {
    (Ko = !1),
        bt !== null && Xl(bt) && (bt = null),
        en !== null && Xl(en) && (en = null),
        tn !== null && Xl(tn) && (tn = null),
        Gr.forEach(qu),
        Jr.forEach(qu);
}
function Cr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Ko ||
            ((Ko = !0),
            be.unstable_scheduleCallback(be.unstable_NormalPriority, ah)));
}
function Zr(e) {
    function t(l) {
        return Cr(l, e);
    }
    if (0 < Ml.length) {
        Cr(Ml[0], e);
        for (var n = 1; n < Ml.length; n++) {
            var r = Ml[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        bt !== null && Cr(bt, e),
            en !== null && Cr(en, e),
            tn !== null && Cr(tn, e),
            Gr.forEach(t),
            Jr.forEach(t),
            n = 0;
        n < Xt.length;
        n++
    )
        (r = Xt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
        lf(n), n.blockedOn === null && Xt.shift();
}
var nr = At.ReactCurrentBatchConfig,
    ci = !0;
function uh(e, t, n, r) {
    var l = b,
        i = nr.transition;
    nr.transition = null;
    try {
        (b = 1), Ua(e, t, n, r);
    } finally {
        (b = l), (nr.transition = i);
    }
}
function sh(e, t, n, r) {
    var l = b,
        i = nr.transition;
    nr.transition = null;
    try {
        (b = 4), Ua(e, t, n, r);
    } finally {
        (b = l), (nr.transition = i);
    }
}
function Ua(e, t, n, r) {
    if (ci) {
        var l = Yo(e, t, n, r);
        if (l === null) mo(e, t, r, fi, n), Zu(e, r);
        else if (oh(l, e, t, n, r)) r.stopPropagation();
        else if ((Zu(e, r), t & 4 && -1 < ih.indexOf(e))) {
            for (; l !== null; ) {
                var i = ml(l);
                if (
                    (i !== null && ef(i),
                    (i = Yo(e, t, n, r)),
                    i === null && mo(e, t, r, fi, n),
                    i === l)
                )
                    break;
                l = i;
            }
            l !== null && r.stopPropagation();
        } else mo(e, t, r, null, n);
    }
}
var fi = null;
function Yo(e, t, n, r) {
    if (((fi = null), (e = Ma(r)), (e = Sn(e)), e !== null))
        if (((t = Mn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Kc(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (fi = e), null;
}
function of(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Jp()) {
                case Oa:
                    return 1;
                case Jc:
                    return 4;
                case ui:
                case Zp:
                    return 16;
                case Zc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Jt = null,
    Aa = null,
    Gl = null;
function af() {
    if (Gl) return Gl;
    var e,
        t = Aa,
        n = t.length,
        r,
        l = "value" in Jt ? Jt.value : Jt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Gl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Jl(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Ol() {
    return !0;
}
function bu() {
    return !1;
}
function tt(e) {
    function t(n, r, l, i, o) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? Ol
                : bu),
            (this.isPropagationStopped = bu),
            this
        );
    }
    return (
        de(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Ol));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ol));
            },
            persist: function () {},
            isPersistent: Ol,
        }),
        t
    );
}
var mr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ba = tt(mr),
    hl = de({}, mr, { view: 0, detail: 0 }),
    ch = tt(hl),
    io,
    oo,
    Pr,
    Mi = de({}, hl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: $a,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Pr &&
                      (Pr && e.type === "mousemove"
                          ? ((io = e.screenX - Pr.screenX),
                            (oo = e.screenY - Pr.screenY))
                          : (oo = io = 0),
                      (Pr = e)),
                  io);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : oo;
        },
    }),
    es = tt(Mi),
    fh = de({}, Mi, { dataTransfer: 0 }),
    dh = tt(fh),
    ph = de({}, hl, { relatedTarget: 0 }),
    ao = tt(ph),
    hh = de({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mh = tt(hh),
    vh = de({}, mr, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    gh = tt(vh),
    yh = de({}, mr, { data: 0 }),
    ts = tt(yh),
    wh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    xh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Sh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Sh[e])
          ? !!t[e]
          : !1;
}
function $a() {
    return Eh;
}
var kh = de({}, hl, {
        key: function (e) {
            if (e.key) {
                var t = wh[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Jl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? xh[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: $a,
        charCode: function (e) {
            return e.type === "keypress" ? Jl(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Jl(e)
                : e.type === "keydown" || e.type === "keyup"
                  ? e.keyCode
                  : 0;
        },
    }),
    Ch = tt(kh),
    Ph = de({}, Mi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    ns = tt(Ph),
    _h = de({}, hl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: $a,
    }),
    Nh = tt(_h),
    Rh = de({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lh = tt(Rh),
    Th = de({}, Mi, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    jh = tt(Th),
    zh = [9, 13, 27, 32],
    Ha = Ot && "CompositionEvent" in window,
    Ar = null;
Ot && "documentMode" in document && (Ar = document.documentMode);
var Dh = Ot && "TextEvent" in window && !Ar,
    uf = Ot && (!Ha || (Ar && 8 < Ar && 11 >= Ar)),
    rs = " ",
    ls = !1;
function sf(e, t) {
    switch (e) {
        case "keyup":
            return zh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function cf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function Mh(e, t) {
    switch (e) {
        case "compositionend":
            return cf(t);
        case "keypress":
            return t.which !== 32 ? null : ((ls = !0), rs);
        case "textInput":
            return (e = t.data), e === rs && ls ? null : e;
        default:
            return null;
    }
}
function Oh(e, t) {
    if (Hn)
        return e === "compositionend" || (!Ha && sf(e, t))
            ? ((e = af()), (Gl = Aa = Jt = null), (Hn = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return uf && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Fh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fh[e.type] : t === "textarea";
}
function ff(e, t, n, r) {
    $c(r),
        (t = di(t, "onChange")),
        0 < t.length &&
            ((n = new Ba("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Br = null,
    qr = null;
function Ih(e) {
    Ef(e, 0);
}
function Oi(e) {
    var t = Qn(e);
    if (Mc(t)) return e;
}
function Uh(e, t) {
    if (e === "change") return t;
}
var df = !1;
if (Ot) {
    var uo;
    if (Ot) {
        var so = "oninput" in document;
        if (!so) {
            var os = document.createElement("div");
            os.setAttribute("oninput", "return;"),
                (so = typeof os.oninput == "function");
        }
        uo = so;
    } else uo = !1;
    df = uo && (!document.documentMode || 9 < document.documentMode);
}
function as() {
    Br && (Br.detachEvent("onpropertychange", pf), (qr = Br = null));
}
function pf(e) {
    if (e.propertyName === "value" && Oi(qr)) {
        var t = [];
        ff(t, qr, e, Ma(e)), Qc(Ih, t);
    }
}
function Ah(e, t, n) {
    e === "focusin"
        ? (as(), (Br = t), (qr = n), Br.attachEvent("onpropertychange", pf))
        : e === "focusout" && as();
}
function Bh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Oi(qr);
}
function $h(e, t) {
    if (e === "click") return Oi(t);
}
function Hh(e, t) {
    if (e === "input" || e === "change") return Oi(t);
}
function Vh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : Vh;
function br(e, t) {
    if (gt(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Lo.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
}
function us(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function ss(e, t) {
    var n = us(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = us(n);
    }
}
function hf(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? hf(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function mf() {
    for (var e = window, t = ii(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ii(e.document);
    }
    return t;
}
function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function Wh(e) {
    var t = mf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        hf(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Va(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                (r = r.end === void 0 ? i : Math.min(r.end, l)),
                    !e.extend && i > r && ((l = r), (r = i), (i = l)),
                    (l = ss(n, i));
                var o = ss(n, r);
                l &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Qh = Ot && "documentMode" in document && 11 >= document.documentMode,
    Vn = null,
    Xo = null,
    $r = null,
    Go = !1;
function cs(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Go ||
        Vn == null ||
        Vn !== ii(r) ||
        ((r = Vn),
        "selectionStart" in r && Va(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        ($r && br($r, r)) ||
            (($r = r),
            (r = di(Xo, "onSelect")),
            0 < r.length &&
                ((t = new Ba("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Vn))));
}
function Fl(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Wn = {
        animationend: Fl("Animation", "AnimationEnd"),
        animationiteration: Fl("Animation", "AnimationIteration"),
        animationstart: Fl("Animation", "AnimationStart"),
        transitionend: Fl("Transition", "TransitionEnd"),
    },
    co = {},
    vf = {};
Ot &&
    ((vf = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Wn.animationend.animation,
        delete Wn.animationiteration.animation,
        delete Wn.animationstart.animation),
    "TransitionEvent" in window || delete Wn.transitionend.transition);
function Fi(e) {
    if (co[e]) return co[e];
    if (!Wn[e]) return e;
    var t = Wn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in vf) return (co[e] = t[n]);
    return e;
}
var gf = Fi("animationend"),
    yf = Fi("animationiteration"),
    wf = Fi("animationstart"),
    xf = Fi("transitionend"),
    Sf = new Map(),
    fs =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function cn(e, t) {
    Sf.set(e, t), Dn(t, [e]);
}
for (var fo = 0; fo < fs.length; fo++) {
    var po = fs[fo],
        Kh = po.toLowerCase(),
        Yh = po[0].toUpperCase() + po.slice(1);
    cn(Kh, "on" + Yh);
}
cn(gf, "onAnimationEnd");
cn(yf, "onAnimationIteration");
cn(wf, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(xf, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
    ),
);
Dn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
    ),
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Or =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    Xh = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Or),
    );
function ds(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Kp(r, t, void 0, e), (e.currentTarget = null);
}
function Ef(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        u = a.instance,
                        s = a.currentTarget;
                    if (((a = a.listener), u !== i && l.isPropagationStopped()))
                        break e;
                    ds(l, a, s), (i = u);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((a = r[o]),
                        (u = a.instance),
                        (s = a.currentTarget),
                        (a = a.listener),
                        u !== i && l.isPropagationStopped())
                    )
                        break e;
                    ds(l, a, s), (i = u);
                }
        }
    }
    if (ai) throw ((e = Wo), (ai = !1), (Wo = null), e);
}
function oe(e, t) {
    var n = t[ea];
    n === void 0 && (n = t[ea] = new Set());
    var r = e + "__bubble";
    n.has(r) || (kf(t, e, 2, !1), n.add(r));
}
function ho(e, t, n) {
    var r = 0;
    t && (r |= 4), kf(n, e, r, t);
}
var Il = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
    if (!e[Il]) {
        (e[Il] = !0),
            Lc.forEach(function (n) {
                n !== "selectionchange" &&
                    (Xh.has(n) || ho(n, !1, e), ho(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Il] || ((t[Il] = !0), ho("selectionchange", !1, t));
    }
}
function kf(e, t, n, r) {
    switch (of(t)) {
        case 1:
            var l = uh;
            break;
        case 4:
            l = sh;
            break;
        default:
            l = Ua;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Vo ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1);
}
function mo(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = o.stateNode.containerInfo),
                            u === l || (u.nodeType === 8 && u.parentNode === l))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = Sn(a)), o === null)) return;
                    if (((u = o.tag), u === 5 || u === 6)) {
                        r = i = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Qc(function () {
        var s = i,
            d = Ma(n),
            f = [];
        e: {
            var m = Sf.get(e);
            if (m !== void 0) {
                var w = Ba,
                    k = e;
                switch (e) {
                    case "keypress":
                        if (Jl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = Ch;
                        break;
                    case "focusin":
                        (k = "focus"), (w = ao);
                        break;
                    case "focusout":
                        (k = "blur"), (w = ao);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = ao;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = es;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = dh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = Nh;
                        break;
                    case gf:
                    case yf:
                    case wf:
                        w = mh;
                        break;
                    case xf:
                        w = Lh;
                        break;
                    case "scroll":
                        w = ch;
                        break;
                    case "wheel":
                        w = jh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = gh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = ns;
                }
                var S = (t & 4) !== 0,
                    L = !S && e === "scroll",
                    h = S ? (m !== null ? m + "Capture" : null) : m;
                S = [];
                for (var c = s, v; c !== null; ) {
                    v = c;
                    var E = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            E !== null &&
                            ((v = E),
                            h !== null &&
                                ((E = Xr(c, h)),
                                E != null && S.push(tl(c, E, v)))),
                        L)
                    )
                        break;
                    c = c.return;
                }
                0 < S.length &&
                    ((m = new w(m, k, null, n, d)),
                    f.push({ event: m, listeners: S }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (w = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== $o &&
                        (k = n.relatedTarget || n.fromElement) &&
                        (Sn(k) || k[Ft]))
                )
                    break e;
                if (
                    (w || m) &&
                    ((m =
                        d.window === d
                            ? d
                            : (m = d.ownerDocument)
                              ? m.defaultView || m.parentWindow
                              : window),
                    w
                        ? ((k = n.relatedTarget || n.toElement),
                          (w = s),
                          (k = k ? Sn(k) : null),
                          k !== null &&
                              ((L = Mn(k)),
                              k !== L || (k.tag !== 5 && k.tag !== 6)) &&
                              (k = null))
                        : ((w = null), (k = s)),
                    w !== k)
                ) {
                    if (
                        ((S = es),
                        (E = "onMouseLeave"),
                        (h = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((S = ns),
                            (E = "onPointerLeave"),
                            (h = "onPointerEnter"),
                            (c = "pointer")),
                        (L = w == null ? m : Qn(w)),
                        (v = k == null ? m : Qn(k)),
                        (m = new S(E, c + "leave", w, n, d)),
                        (m.target = L),
                        (m.relatedTarget = v),
                        (E = null),
                        Sn(d) === s &&
                            ((S = new S(h, c + "enter", k, n, d)),
                            (S.target = v),
                            (S.relatedTarget = L),
                            (E = S)),
                        (L = E),
                        w && k)
                    )
                        t: {
                            for (S = w, h = k, c = 0, v = S; v; v = Un(v)) c++;
                            for (v = 0, E = h; E; E = Un(E)) v++;
                            for (; 0 < c - v; ) (S = Un(S)), c--;
                            for (; 0 < v - c; ) (h = Un(h)), v--;
                            for (; c--; ) {
                                if (
                                    S === h ||
                                    (h !== null && S === h.alternate)
                                )
                                    break t;
                                (S = Un(S)), (h = Un(h));
                            }
                            S = null;
                        }
                    else S = null;
                    w !== null && ps(f, m, w, S, !1),
                        k !== null && L !== null && ps(f, L, k, S, !0);
                }
            }
            e: {
                if (
                    ((m = s ? Qn(s) : window),
                    (w = m.nodeName && m.nodeName.toLowerCase()),
                    w === "select" || (w === "input" && m.type === "file"))
                )
                    var R = Uh;
                else if (is(m))
                    if (df) R = Hh;
                    else {
                        R = Bh;
                        var j = Ah;
                    }
                else
                    (w = m.nodeName) &&
                        w.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (R = $h);
                if (R && (R = R(e, s))) {
                    ff(f, R, n, d);
                    break e;
                }
                j && j(e, m, s),
                    e === "focusout" &&
                        (j = m._wrapperState) &&
                        j.controlled &&
                        m.type === "number" &&
                        Fo(m, "number", m.value);
            }
            switch (((j = s ? Qn(s) : window), e)) {
                case "focusin":
                    (is(j) || j.contentEditable === "true") &&
                        ((Vn = j), (Xo = s), ($r = null));
                    break;
                case "focusout":
                    $r = Xo = Vn = null;
                    break;
                case "mousedown":
                    Go = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Go = !1), cs(f, n, d);
                    break;
                case "selectionchange":
                    if (Qh) break;
                case "keydown":
                case "keyup":
                    cs(f, n, d);
            }
            var O;
            if (Ha)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var g = "onCompositionStart";
                            break e;
                        case "compositionend":
                            g = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            g = "onCompositionUpdate";
                            break e;
                    }
                    g = void 0;
                }
            else
                Hn
                    ? sf(e, n) && (g = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (g = "onCompositionStart");
            g &&
                (uf &&
                    n.locale !== "ko" &&
                    (Hn || g !== "onCompositionStart"
                        ? g === "onCompositionEnd" && Hn && (O = af())
                        : ((Jt = d),
                          (Aa = "value" in Jt ? Jt.value : Jt.textContent),
                          (Hn = !0))),
                (j = di(s, g)),
                0 < j.length &&
                    ((g = new ts(g, e, null, n, d)),
                    f.push({ event: g, listeners: j }),
                    O
                        ? (g.data = O)
                        : ((O = cf(n)), O !== null && (g.data = O)))),
                (O = Dh ? Mh(e, n) : Oh(e, n)) &&
                    ((s = di(s, "onBeforeInput")),
                    0 < s.length &&
                        ((d = new ts(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            d,
                        )),
                        f.push({ event: d, listeners: s }),
                        (d.data = O)));
        }
        Ef(f, t);
    });
}
function tl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function di(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 &&
            i !== null &&
            ((l = i),
            (i = Xr(e, n)),
            i != null && r.unshift(tl(e, i, l)),
            (i = Xr(e, t)),
            i != null && r.push(tl(e, i, l))),
            (e = e.return);
    }
    return r;
}
function Un(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ps(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 &&
            s !== null &&
            ((a = s),
            l
                ? ((u = Xr(n, i)), u != null && o.unshift(tl(n, u, a)))
                : l || ((u = Xr(n, i)), u != null && o.push(tl(n, u, a)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gh = /\r\n?/g,
    Jh = /\u0000|\uFFFD/g;
function hs(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Gh,
            `
`,
        )
        .replace(Jh, "");
}
function Ul(e, t, n) {
    if (((t = hs(t)), hs(e) !== t && n)) throw Error(_(425));
}
function pi() {}
var Jo = null,
    Zo = null;
function qo(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var bo = typeof setTimeout == "function" ? setTimeout : void 0,
    Zh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ms = typeof Promise == "function" ? Promise : void 0,
    qh =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof ms < "u"
              ? function (e) {
                    return ms.resolve(null).then(e).catch(bh);
                }
              : bo;
function bh(e) {
    setTimeout(function () {
        throw e;
    });
}
function vo(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Zr(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Zr(t);
}
function nn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function vs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var vr = Math.random().toString(36).slice(2),
    St = "__reactFiber$" + vr,
    nl = "__reactProps$" + vr,
    Ft = "__reactContainer$" + vr,
    ea = "__reactEvents$" + vr,
    em = "__reactListeners$" + vr,
    tm = "__reactHandles$" + vr;
function Sn(e) {
    var t = e[St];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Ft] || n[St])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = vs(e); e !== null; ) {
                    if ((n = e[St])) return n;
                    e = vs(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function ml(e) {
    return (
        (e = e[St] || e[Ft]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
}
function Ii(e) {
    return e[nl] || null;
}
var ta = [],
    Kn = -1;
function fn(e) {
    return { current: e };
}
function ae(e) {
    0 > Kn || ((e.current = ta[Kn]), (ta[Kn] = null), Kn--);
}
function re(e, t) {
    Kn++, (ta[Kn] = e.current), (e.current = t);
}
var sn = {},
    Me = fn(sn),
    Qe = fn(!1),
    Nn = sn;
function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function Ke(e) {
    return (e = e.childContextTypes), e != null;
}
function hi() {
    ae(Qe), ae(Me);
}
function gs(e, t, n) {
    if (Me.current !== sn) throw Error(_(168));
    re(Me, t), re(Qe, n);
}
function Cf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(_(108, Ap(e) || "Unknown", l));
    return de({}, n, r);
}
function mi(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            sn),
        (Nn = Me.current),
        re(Me, e),
        re(Qe, Qe.current),
        !0
    );
}
function ys(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n
        ? ((e = Cf(e, t, Nn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          ae(Qe),
          ae(Me),
          re(Me, e))
        : ae(Qe),
        re(Qe, n);
}
var Tt = null,
    Ui = !1,
    go = !1;
function Pf(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
}
function nm(e) {
    (Ui = !0), Pf(e);
}
function dn() {
    if (!go && Tt !== null) {
        go = !0;
        var e = 0,
            t = b;
        try {
            var n = Tt;
            for (b = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Tt = null), (Ui = !1);
        } catch (l) {
            throw (Tt !== null && (Tt = Tt.slice(e + 1)), Gc(Oa, dn), l);
        } finally {
            (b = t), (go = !1);
        }
    }
    return null;
}
var Yn = [],
    Xn = 0,
    vi = null,
    gi = 0,
    rt = [],
    lt = 0,
    Rn = null,
    jt = 1,
    zt = "";
function yn(e, t) {
    (Yn[Xn++] = gi), (Yn[Xn++] = vi), (vi = e), (gi = t);
}
function _f(e, t, n) {
    (rt[lt++] = jt), (rt[lt++] = zt), (rt[lt++] = Rn), (Rn = e);
    var r = jt;
    e = zt;
    var l = 32 - mt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - mt(t) + l;
    if (30 < i) {
        var o = l - (l % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (jt = (1 << (32 - mt(t) + l)) | (n << l) | r),
            (zt = i + e);
    } else (jt = (1 << i) | (n << l) | r), (zt = e);
}
function Wa(e) {
    e.return !== null && (yn(e, 1), _f(e, 1, 0));
}
function Qa(e) {
    for (; e === vi; )
        (vi = Yn[--Xn]), (Yn[Xn] = null), (gi = Yn[--Xn]), (Yn[Xn] = null);
    for (; e === Rn; )
        (Rn = rt[--lt]),
            (rt[lt] = null),
            (zt = rt[--lt]),
            (rt[lt] = null),
            (jt = rt[--lt]),
            (rt[lt] = null);
}
var qe = null,
    Ze = null,
    ue = !1,
    ht = null;
function Nf(e, t) {
    var n = it(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ws(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (qe = e), (Ze = nn(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (qe = e), (Ze = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Rn !== null ? { id: jt, overflow: zt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = it(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (qe = e),
                      (Ze = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function na(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ra(e) {
    if (ue) {
        var t = Ze;
        if (t) {
            var n = t;
            if (!ws(e, t)) {
                if (na(e)) throw Error(_(418));
                t = nn(n.nextSibling);
                var r = qe;
                t && ws(e, t)
                    ? Nf(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e));
            }
        } else {
            if (na(e)) throw Error(_(418));
            (e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e);
        }
    }
}
function xs(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    qe = e;
}
function Al(e) {
    if (e !== qe) return !1;
    if (!ue) return xs(e), (ue = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !qo(e.type, e.memoizedProps))),
        t && (t = Ze))
    ) {
        if (na(e)) throw (Rf(), Error(_(418)));
        for (; t; ) Nf(e, t), (t = nn(t.nextSibling));
    }
    if ((xs(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ze = nn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ze = null;
        }
    } else Ze = qe ? nn(e.stateNode.nextSibling) : null;
    return !0;
}
function Rf() {
    for (var e = Ze; e; ) e = nn(e.nextSibling);
}
function ur() {
    (Ze = qe = null), (ue = !1);
}
function Ka(e) {
    ht === null ? (ht = [e]) : ht.push(e);
}
var rm = At.ReactCurrentBatchConfig;
function _r(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var l = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var a = l.refs;
                      o === null ? delete a[i] : (a[i] = o);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e));
    }
    return e;
}
function Bl(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            _(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e,
            ),
        ))
    );
}
function Ss(e) {
    var t = e._init;
    return t(e._payload);
}
function Lf(e) {
    function t(h, c) {
        if (e) {
            var v = h.deletions;
            v === null ? ((h.deletions = [c]), (h.flags |= 16)) : v.push(c);
        }
    }
    function n(h, c) {
        if (!e) return null;
        for (; c !== null; ) t(h, c), (c = c.sibling);
        return null;
    }
    function r(h, c) {
        for (h = new Map(); c !== null; )
            c.key !== null ? h.set(c.key, c) : h.set(c.index, c),
                (c = c.sibling);
        return h;
    }
    function l(h, c) {
        return (h = an(h, c)), (h.index = 0), (h.sibling = null), h;
    }
    function i(h, c, v) {
        return (
            (h.index = v),
            e
                ? ((v = h.alternate),
                  v !== null
                      ? ((v = v.index), v < c ? ((h.flags |= 2), c) : v)
                      : ((h.flags |= 2), c))
                : ((h.flags |= 1048576), c)
        );
    }
    function o(h) {
        return e && h.alternate === null && (h.flags |= 2), h;
    }
    function a(h, c, v, E) {
        return c === null || c.tag !== 6
            ? ((c = Co(v, h.mode, E)), (c.return = h), c)
            : ((c = l(c, v)), (c.return = h), c);
    }
    function u(h, c, v, E) {
        var R = v.type;
        return R === $n
            ? d(h, c, v.props.children, E, v.key)
            : c !== null &&
                (c.elementType === R ||
                    (typeof R == "object" &&
                        R !== null &&
                        R.$$typeof === Kt &&
                        Ss(R) === c.type))
              ? ((E = l(c, v.props)), (E.ref = _r(h, c, v)), (E.return = h), E)
              : ((E = ri(v.type, v.key, v.props, null, h.mode, E)),
                (E.ref = _r(h, c, v)),
                (E.return = h),
                E);
    }
    function s(h, c, v, E) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== v.containerInfo ||
            c.stateNode.implementation !== v.implementation
            ? ((c = Po(v, h.mode, E)), (c.return = h), c)
            : ((c = l(c, v.children || [])), (c.return = h), c);
    }
    function d(h, c, v, E, R) {
        return c === null || c.tag !== 7
            ? ((c = _n(v, h.mode, E, R)), (c.return = h), c)
            : ((c = l(c, v)), (c.return = h), c);
    }
    function f(h, c, v) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = Co("" + c, h.mode, v)), (c.return = h), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Ll:
                    return (
                        (v = ri(c.type, c.key, c.props, null, h.mode, v)),
                        (v.ref = _r(h, null, c)),
                        (v.return = h),
                        v
                    );
                case Bn:
                    return (c = Po(c, h.mode, v)), (c.return = h), c;
                case Kt:
                    var E = c._init;
                    return f(h, E(c._payload), v);
            }
            if (Dr(c) || Sr(c))
                return (c = _n(c, h.mode, v, null)), (c.return = h), c;
            Bl(h, c);
        }
        return null;
    }
    function m(h, c, v, E) {
        var R = c !== null ? c.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return R !== null ? null : a(h, c, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ll:
                    return v.key === R ? u(h, c, v, E) : null;
                case Bn:
                    return v.key === R ? s(h, c, v, E) : null;
                case Kt:
                    return (R = v._init), m(h, c, R(v._payload), E);
            }
            if (Dr(v) || Sr(v)) return R !== null ? null : d(h, c, v, E, null);
            Bl(h, v);
        }
        return null;
    }
    function w(h, c, v, E, R) {
        if ((typeof E == "string" && E !== "") || typeof E == "number")
            return (h = h.get(v) || null), a(c, h, "" + E, R);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Ll:
                    return (
                        (h = h.get(E.key === null ? v : E.key) || null),
                        u(c, h, E, R)
                    );
                case Bn:
                    return (
                        (h = h.get(E.key === null ? v : E.key) || null),
                        s(c, h, E, R)
                    );
                case Kt:
                    var j = E._init;
                    return w(h, c, v, j(E._payload), R);
            }
            if (Dr(E) || Sr(E))
                return (h = h.get(v) || null), d(c, h, E, R, null);
            Bl(c, E);
        }
        return null;
    }
    function k(h, c, v, E) {
        for (
            var R = null, j = null, O = c, g = (c = 0), $ = null;
            O !== null && g < v.length;
            g++
        ) {
            O.index > g ? (($ = O), (O = null)) : ($ = O.sibling);
            var F = m(h, O, v[g], E);
            if (F === null) {
                O === null && (O = $);
                break;
            }
            e && O && F.alternate === null && t(h, O),
                (c = i(F, c, g)),
                j === null ? (R = F) : (j.sibling = F),
                (j = F),
                (O = $);
        }
        if (g === v.length) return n(h, O), ue && yn(h, g), R;
        if (O === null) {
            for (; g < v.length; g++)
                (O = f(h, v[g], E)),
                    O !== null &&
                        ((c = i(O, c, g)),
                        j === null ? (R = O) : (j.sibling = O),
                        (j = O));
            return ue && yn(h, g), R;
        }
        for (O = r(h, O); g < v.length; g++)
            ($ = w(O, h, g, v[g], E)),
                $ !== null &&
                    (e &&
                        $.alternate !== null &&
                        O.delete($.key === null ? g : $.key),
                    (c = i($, c, g)),
                    j === null ? (R = $) : (j.sibling = $),
                    (j = $));
        return (
            e &&
                O.forEach(function (Q) {
                    return t(h, Q);
                }),
            ue && yn(h, g),
            R
        );
    }
    function S(h, c, v, E) {
        var R = Sr(v);
        if (typeof R != "function") throw Error(_(150));
        if (((v = R.call(v)), v == null)) throw Error(_(151));
        for (
            var j = (R = null), O = c, g = (c = 0), $ = null, F = v.next();
            O !== null && !F.done;
            g++, F = v.next()
        ) {
            O.index > g ? (($ = O), (O = null)) : ($ = O.sibling);
            var Q = m(h, O, F.value, E);
            if (Q === null) {
                O === null && (O = $);
                break;
            }
            e && O && Q.alternate === null && t(h, O),
                (c = i(Q, c, g)),
                j === null ? (R = Q) : (j.sibling = Q),
                (j = Q),
                (O = $);
        }
        if (F.done) return n(h, O), ue && yn(h, g), R;
        if (O === null) {
            for (; !F.done; g++, F = v.next())
                (F = f(h, F.value, E)),
                    F !== null &&
                        ((c = i(F, c, g)),
                        j === null ? (R = F) : (j.sibling = F),
                        (j = F));
            return ue && yn(h, g), R;
        }
        for (O = r(h, O); !F.done; g++, F = v.next())
            (F = w(O, h, g, F.value, E)),
                F !== null &&
                    (e &&
                        F.alternate !== null &&
                        O.delete(F.key === null ? g : F.key),
                    (c = i(F, c, g)),
                    j === null ? (R = F) : (j.sibling = F),
                    (j = F));
        return (
            e &&
                O.forEach(function (te) {
                    return t(h, te);
                }),
            ue && yn(h, g),
            R
        );
    }
    function L(h, c, v, E) {
        if (
            (typeof v == "object" &&
                v !== null &&
                v.type === $n &&
                v.key === null &&
                (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case Ll:
                    e: {
                        for (var R = v.key, j = c; j !== null; ) {
                            if (j.key === R) {
                                if (((R = v.type), R === $n)) {
                                    if (j.tag === 7) {
                                        n(h, j.sibling),
                                            (c = l(j, v.props.children)),
                                            (c.return = h),
                                            (h = c);
                                        break e;
                                    }
                                } else if (
                                    j.elementType === R ||
                                    (typeof R == "object" &&
                                        R !== null &&
                                        R.$$typeof === Kt &&
                                        Ss(R) === j.type)
                                ) {
                                    n(h, j.sibling),
                                        (c = l(j, v.props)),
                                        (c.ref = _r(h, j, v)),
                                        (c.return = h),
                                        (h = c);
                                    break e;
                                }
                                n(h, j);
                                break;
                            } else t(h, j);
                            j = j.sibling;
                        }
                        v.type === $n
                            ? ((c = _n(v.props.children, h.mode, E, v.key)),
                              (c.return = h),
                              (h = c))
                            : ((E = ri(
                                  v.type,
                                  v.key,
                                  v.props,
                                  null,
                                  h.mode,
                                  E,
                              )),
                              (E.ref = _r(h, c, v)),
                              (E.return = h),
                              (h = E));
                    }
                    return o(h);
                case Bn:
                    e: {
                        for (j = v.key; c !== null; ) {
                            if (c.key === j)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        v.containerInfo &&
                                    c.stateNode.implementation ===
                                        v.implementation
                                ) {
                                    n(h, c.sibling),
                                        (c = l(c, v.children || [])),
                                        (c.return = h),
                                        (h = c);
                                    break e;
                                } else {
                                    n(h, c);
                                    break;
                                }
                            else t(h, c);
                            c = c.sibling;
                        }
                        (c = Po(v, h.mode, E)), (c.return = h), (h = c);
                    }
                    return o(h);
                case Kt:
                    return (j = v._init), L(h, c, j(v._payload), E);
            }
            if (Dr(v)) return k(h, c, v, E);
            if (Sr(v)) return S(h, c, v, E);
            Bl(h, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              c !== null && c.tag === 6
                  ? (n(h, c.sibling), (c = l(c, v)), (c.return = h), (h = c))
                  : (n(h, c), (c = Co(v, h.mode, E)), (c.return = h), (h = c)),
              o(h))
            : n(h, c);
    }
    return L;
}
var sr = Lf(!0),
    Tf = Lf(!1),
    yi = fn(null),
    wi = null,
    Gn = null,
    Ya = null;
function Xa() {
    Ya = Gn = wi = null;
}
function Ga(e) {
    var t = yi.current;
    ae(yi), (e._currentValue = t);
}
function la(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function rr(e, t) {
    (wi = e),
        (Ya = Gn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (We = !0), (e.firstContext = null));
}
function at(e) {
    var t = e._currentValue;
    if (Ya !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
            if (wi === null) throw Error(_(308));
            (Gn = e), (wi.dependencies = { lanes: 0, firstContext: e });
        } else Gn = Gn.next = e;
    return t;
}
var En = null;
function Ja(e) {
    En === null ? (En = [e]) : En.push(e);
}
function jf(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), Ja(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        It(e, r)
    );
}
function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Za(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function zf(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), J & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            It(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), Ja(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        It(e, n)
    );
}
function Zl(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fa(e, n);
    }
}
function Es(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (l = i = t) : (i = i.next = t);
        } else l = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function xi(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            s = u.next;
        (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== o &&
                (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
                (d.lastBaseUpdate = u)));
    }
    if (i !== null) {
        var f = l.baseState;
        (o = 0), (d = s = u = null), (a = i);
        do {
            var m = a.lane,
                w = a.eventTime;
            if ((r & m) === m) {
                d !== null &&
                    (d = d.next =
                        {
                            eventTime: w,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var k = e,
                        S = a;
                    switch (((m = t), (w = n), S.tag)) {
                        case 1:
                            if (((k = S.payload), typeof k == "function")) {
                                f = k.call(w, f, m);
                                break e;
                            }
                            f = k;
                            break e;
                        case 3:
                            k.flags = (k.flags & -65537) | 128;
                        case 0:
                            if (
                                ((k = S.payload),
                                (m =
                                    typeof k == "function"
                                        ? k.call(w, f, m)
                                        : k),
                                m == null)
                            )
                                break e;
                            f = de({}, f, m);
                            break e;
                        case 2:
                            Yt = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [a]) : m.push(a));
            } else
                (w = {
                    eventTime: w,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    d === null ? ((s = d = w), (u = f)) : (d = d.next = w),
                    (o |= m);
            if (((a = a.next), a === null)) {
                if (((a = l.shared.pending), a === null)) break;
                (m = a),
                    (a = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (u = f),
            (l.baseState = u),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = d),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (o |= l.lane), (l = l.next);
            while (l !== t);
        } else i === null && (l.shared.lanes = 0);
        (Tn |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function ks(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(_(191, l));
                l.call(r);
            }
        }
}
var vl = {},
    kt = fn(vl),
    rl = fn(vl),
    ll = fn(vl);
function kn(e) {
    if (e === vl) throw Error(_(174));
    return e;
}
function qa(e, t) {
    switch ((re(ll, t), re(rl, e), re(kt, vl), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Uo(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Uo(t, e));
    }
    ae(kt), re(kt, t);
}
function cr() {
    ae(kt), ae(rl), ae(ll);
}
function Df(e) {
    kn(ll.current);
    var t = kn(kt.current),
        n = Uo(t, e.type);
    t !== n && (re(rl, e), re(kt, n));
}
function ba(e) {
    rl.current === e && (ae(kt), ae(rl));
}
var ce = fn(0);
function Si(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var yo = [];
function eu() {
    for (var e = 0; e < yo.length; e++)
        yo[e]._workInProgressVersionPrimary = null;
    yo.length = 0;
}
var ql = At.ReactCurrentDispatcher,
    wo = At.ReactCurrentBatchConfig,
    Ln = 0,
    fe = null,
    Ee = null,
    Pe = null,
    Ei = !1,
    Hr = !1,
    il = 0,
    lm = 0;
function je() {
    throw Error(_(321));
}
function tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n])) return !1;
    return !0;
}
function nu(e, t, n, r, l, i) {
    if (
        ((Ln = i),
        (fe = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ql.current = e === null || e.memoizedState === null ? um : sm),
        (e = n(r, l)),
        Hr)
    ) {
        i = 0;
        do {
            if (((Hr = !1), (il = 0), 25 <= i)) throw Error(_(301));
            (i += 1),
                (Pe = Ee = null),
                (t.updateQueue = null),
                (ql.current = cm),
                (e = n(r, l));
        } while (Hr);
    }
    if (
        ((ql.current = ki),
        (t = Ee !== null && Ee.next !== null),
        (Ln = 0),
        (Pe = Ee = fe = null),
        (Ei = !1),
        t)
    )
        throw Error(_(300));
    return e;
}
function ru() {
    var e = il !== 0;
    return (il = 0), e;
}
function xt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Pe === null ? (fe.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function ut() {
    if (Ee === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Pe === null ? fe.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (Ee = e);
    else {
        if (e === null) throw Error(_(310));
        (Ee = e),
            (e = {
                memoizedState: Ee.memoizedState,
                baseState: Ee.baseState,
                baseQueue: Ee.baseQueue,
                queue: Ee.queue,
                next: null,
            }),
            Pe === null ? (fe.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
}
function ol(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function xo(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Ee,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            (l.next = i.next), (i.next = o);
        }
        (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
        (i = l.next), (r = r.baseState);
        var a = (o = null),
            u = null,
            s = i;
        do {
            var d = s.lane;
            if ((Ln & d) === d)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var f = {
                    lane: d,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
                    (fe.lanes |= d),
                    (Tn |= d);
            }
            s = s.next;
        } while (s !== null && s !== i);
        u === null ? (o = r) : (u.next = a),
            gt(r, t.memoizedState) || (We = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (i = l.lane), (fe.lanes |= i), (Tn |= i), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function So(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = (l = l.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== l);
        gt(i, t.memoizedState) || (We = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Mf() {}
function Of(e, t) {
    var n = fe,
        r = ut(),
        l = t(),
        i = !gt(r.memoizedState, l);
    if (
        (i && ((r.memoizedState = l), (We = !0)),
        (r = r.queue),
        lu(Uf.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            al(9, If.bind(null, n, r, l, t), void 0, null),
            _e === null)
        )
            throw Error(_(349));
        Ln & 30 || Ff(n, t, l);
    }
    return l;
}
function Ff(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (fe.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function If(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Af(t) && Bf(e);
}
function Uf(e, t, n) {
    return n(function () {
        Af(t) && Bf(e);
    });
}
function Af(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n);
    } catch {
        return !0;
    }
}
function Bf(e) {
    var t = It(e, 1);
    t !== null && vt(t, e, 1, -1);
}
function Cs(e) {
    var t = xt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ol,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = am.bind(null, fe, e)),
        [t.memoizedState, e]
    );
}
function al(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (fe.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function $f() {
    return ut().memoizedState;
}
function bl(e, t, n, r) {
    var l = xt();
    (fe.flags |= e),
        (l.memoizedState = al(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ai(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ee !== null) {
        var o = Ee.memoizedState;
        if (((i = o.destroy), r !== null && tu(r, o.deps))) {
            l.memoizedState = al(t, n, i, r);
            return;
        }
    }
    (fe.flags |= e), (l.memoizedState = al(1 | t, n, i, r));
}
function Ps(e, t) {
    return bl(8390656, 8, e, t);
}
function lu(e, t) {
    return Ai(2048, 8, e, t);
}
function Hf(e, t) {
    return Ai(4, 2, e, t);
}
function Vf(e, t) {
    return Ai(4, 4, e, t);
}
function Wf(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Qf(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ai(4, 4, Wf.bind(null, t, e), n)
    );
}
function iu() {}
function Kf(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Yf(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xf(e, t, n) {
    return Ln & 21
        ? (gt(n, t) ||
              ((n = qc()), (fe.lanes |= n), (Tn |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (We = !0)),
          (e.memoizedState = n));
}
function im(e, t) {
    var n = b;
    (b = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = wo.transition;
    wo.transition = {};
    try {
        e(!1), t();
    } finally {
        (b = n), (wo.transition = r);
    }
}
function Gf() {
    return ut().memoizedState;
}
function om(e, t, n) {
    var r = on(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Jf(e))
    )
        Zf(t, n);
    else if (((n = jf(e, t, n, r)), n !== null)) {
        var l = Ue();
        vt(n, e, r, l), qf(n, t, r);
    }
}
function am(e, t, n) {
    var r = on(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Jf(e)) Zf(t, l);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var o = t.lastRenderedState,
                    a = i(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = a), gt(a, o))) {
                    var u = t.interleaved;
                    u === null
                        ? ((l.next = l), Ja(t))
                        : ((l.next = u.next), (u.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = jf(e, t, l, r)),
            n !== null && ((l = Ue()), vt(n, e, r, l), qf(n, t, r));
    }
}
function Jf(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
}
function Zf(e, t) {
    Hr = Ei = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function qf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fa(e, n);
    }
}
var ki = {
        readContext: at,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1,
    },
    um = {
        readContext: at,
        useCallback: function (e, t) {
            return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: at,
        useEffect: Ps,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                bl(4194308, 4, Wf.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return bl(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return bl(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = xt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = xt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = om.bind(null, fe, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = xt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Cs,
        useDebugValue: iu,
        useDeferredValue: function (e) {
            return (xt().memoizedState = e);
        },
        useTransition: function () {
            var e = Cs(!1),
                t = e[0];
            return (e = im.bind(null, e[1])), (xt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = fe,
                l = xt();
            if (ue) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (((n = t()), _e === null)) throw Error(_(349));
                Ln & 30 || Ff(r, t, n);
            }
            l.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (l.queue = i),
                Ps(Uf.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                al(9, If.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = xt(),
                t = _e.identifierPrefix;
            if (ue) {
                var n = zt,
                    r = jt;
                (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = il++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = lm++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    sm = {
        readContext: at,
        useCallback: Kf,
        useContext: at,
        useEffect: lu,
        useImperativeHandle: Qf,
        useInsertionEffect: Hf,
        useLayoutEffect: Vf,
        useMemo: Yf,
        useReducer: xo,
        useRef: $f,
        useState: function () {
            return xo(ol);
        },
        useDebugValue: iu,
        useDeferredValue: function (e) {
            var t = ut();
            return Xf(t, Ee.memoizedState, e);
        },
        useTransition: function () {
            var e = xo(ol)[0],
                t = ut().memoizedState;
            return [e, t];
        },
        useMutableSource: Mf,
        useSyncExternalStore: Of,
        useId: Gf,
        unstable_isNewReconciler: !1,
    },
    cm = {
        readContext: at,
        useCallback: Kf,
        useContext: at,
        useEffect: lu,
        useImperativeHandle: Qf,
        useInsertionEffect: Hf,
        useLayoutEffect: Vf,
        useMemo: Yf,
        useReducer: So,
        useRef: $f,
        useState: function () {
            return So(ol);
        },
        useDebugValue: iu,
        useDeferredValue: function (e) {
            var t = ut();
            return Ee === null
                ? (t.memoizedState = e)
                : Xf(t, Ee.memoizedState, e);
        },
        useTransition: function () {
            var e = So(ol)[0],
                t = ut().memoizedState;
            return [e, t];
        },
        useMutableSource: Mf,
        useSyncExternalStore: Of,
        useId: Gf,
        unstable_isNewReconciler: !1,
    };
function ft(e, t) {
    if (e && e.defaultProps) {
        (t = de({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function ia(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : de({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Mn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ue(),
            l = on(e),
            i = Dt(r, l);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = rn(e, i, l)),
            t !== null && (vt(t, e, l, r), Zl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ue(),
            l = on(e),
            i = Dt(r, l);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = rn(e, i, l)),
            t !== null && (vt(t, e, l, r), Zl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ue(),
            r = on(e),
            l = Dt(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = rn(e, l, r)),
            t !== null && (vt(t, e, r, n), Zl(t, e, r));
    },
};
function _s(e, t, n, r, l, i, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, o)
            : t.prototype && t.prototype.isPureReactComponent
              ? !br(n, r) || !br(l, i)
              : !0
    );
}
function bf(e, t, n) {
    var r = !1,
        l = sn,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = at(i))
            : ((l = Ke(t) ? Nn : Me.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? ar(e, l) : sn)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Bi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Ns(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
}
function oa(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Za(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (l.context = at(i))
        : ((i = Ke(t) ? Nn : Me.current), (l.context = ar(e, i))),
        (l.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (ia(e, t, i, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Bi.enqueueReplaceState(l, l.state, null),
            xi(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Up(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (i) {
        l =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function Eo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function aa(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var fm = typeof WeakMap == "function" ? WeakMap : Map;
function ed(e, t, n) {
    (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Pi || ((Pi = !0), (ga = r)), aa(e, t);
        }),
        n
    );
}
function td(e, t, n) {
    (n = Dt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                aa(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                aa(e, t),
                    typeof r != "function" &&
                        (ln === null ? (ln = new Set([this])) : ln.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : "",
                });
            }),
        n
    );
}
function Rs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new fm();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Pm.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Ts(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Dt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var dm = At.ReactCurrentOwner,
    We = !1;
function Ie(e, t, n, r) {
    t.child = e === null ? Tf(t, null, n, r) : sr(t, e.child, n, r);
}
function js(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
        rr(t, l),
        (r = nu(e, t, n, r, i, l)),
        (n = ru()),
        e !== null && !We
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ut(e, t, l))
            : (ue && n && Wa(t), (t.flags |= 1), Ie(e, t, r, l), t.child)
    );
}
function zs(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !pu(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), nd(e, t, i, r, l))
            : ((e = ri(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
        var o = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : br),
            n(o, r) && e.ref === t.ref)
        )
            return Ut(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = an(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function nd(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (br(i, r) && e.ref === t.ref)
            if (((We = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
                e.flags & 131072 && (We = !0);
            else return (t.lanes = e.lanes), Ut(e, t, l);
    }
    return ua(e, t, n, r, l);
}
function rd(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                re(Zn, Ge),
                (Ge |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    re(Zn, Ge),
                    (Ge |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                re(Zn, Ge),
                (Ge |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            re(Zn, Ge),
            (Ge |= r);
    return Ie(e, t, l, n), t.child;
}
function ld(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ua(e, t, n, r, l) {
    var i = Ke(n) ? Nn : Me.current;
    return (
        (i = ar(t, i)),
        rr(t, l),
        (n = nu(e, t, n, r, i, l)),
        (r = ru()),
        e !== null && !We
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Ut(e, t, l))
            : (ue && r && Wa(t), (t.flags |= 1), Ie(e, t, n, l), t.child)
    );
}
function Ds(e, t, n, r, l) {
    if (Ke(n)) {
        var i = !0;
        mi(t);
    } else i = !1;
    if ((rr(t, l), t.stateNode === null))
        ei(e, t), bf(t, n, r), oa(t, n, r, l), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var u = o.context,
            s = n.contextType;
        typeof s == "object" && s !== null
            ? (s = at(s))
            : ((s = Ke(n) ? Nn : Me.current), (s = ar(t, s)));
        var d = n.getDerivedStateFromProps,
            f =
                typeof d == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== r || u !== s) && Ns(t, o, r, s)),
            (Yt = !1);
        var m = t.memoizedState;
        (o.state = m),
            xi(t, r, o, l),
            (u = t.memoizedState),
            a !== r || m !== u || Qe.current || Yt
                ? (typeof d == "function" &&
                      (ia(t, n, d, r), (u = t.memoizedState)),
                  (a = Yt || _s(t, n, a, r, m, u, s))
                      ? (f ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = a))
                : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (o = t.stateNode),
            zf(e, t),
            (a = t.memoizedProps),
            (s = t.type === t.elementType ? a : ft(t.type, a)),
            (o.props = s),
            (f = t.pendingProps),
            (m = o.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = at(u))
                : ((u = Ke(n) ? Nn : Me.current), (u = ar(t, u)));
        var w = n.getDerivedStateFromProps;
        (d =
            typeof w == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== f || m !== u) && Ns(t, o, r, u)),
            (Yt = !1),
            (m = t.memoizedState),
            (o.state = m),
            xi(t, r, o, l);
        var k = t.memoizedState;
        a !== f || m !== k || Qe.current || Yt
            ? (typeof w == "function" &&
                  (ia(t, n, w, r), (k = t.memoizedState)),
              (s = Yt || _s(t, n, s, r, m, k, u) || !1)
                  ? (d ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, k, u),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, k, u)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = k)),
              (o.props = r),
              (o.state = k),
              (o.context = u),
              (r = s))
            : (typeof o.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return sa(e, t, n, r, i, l);
}
function sa(e, t, n, r, l, i) {
    ld(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ys(t, n, !1), Ut(e, t, i);
    (r = t.stateNode), (dm.current = t);
    var a =
        o && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = sr(t, e.child, null, i)),
              (t.child = sr(t, null, a, i)))
            : Ie(e, t, a, i),
        (t.memoizedState = r.state),
        l && ys(t, n, !0),
        t.child
    );
}
function id(e) {
    var t = e.stateNode;
    t.pendingContext
        ? gs(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && gs(e, t.context, !1),
        qa(e, t.containerInfo);
}
function Ms(e, t, n, r, l) {
    return ur(), Ka(l), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function fa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
    var r = t.pendingProps,
        l = ce.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if (
        ((a = o) ||
            (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        a
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        re(ce, l & 1),
        e === null)
    )
        return (
            ra(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = o))
                            : (i = Vi(o, r, 0, null)),
                        (e = _n(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = fa(n)),
                        (t.memoizedState = ca),
                        e)
                      : ou(t, o))
        );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
        return pm(e, t, o, r, a, l, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = an(l, u)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            a !== null
                ? (i = an(a, i))
                : ((i = _n(i, o, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? fa(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (i.memoizedState = o),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = ca),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = an(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ou(e, t) {
    return (
        (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function $l(e, t, n, r) {
    return (
        r !== null && Ka(r),
        sr(t, e.child, null, n),
        (e = ou(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function pm(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Eo(Error(_(422)))), $l(e, t, o, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((i = r.fallback),
                (l = t.mode),
                (r = Vi({ mode: "visible", children: r.children }, l, 0, null)),
                (i = _n(i, l, o, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                t.mode & 1 && sr(t, e.child, null, o),
                (t.child.memoizedState = fa(o)),
                (t.memoizedState = ca),
                i);
    if (!(t.mode & 1)) return $l(e, t, o, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (i = Error(_(419))), (r = Eo(i, r, void 0)), $l(e, t, o, r)
        );
    }
    if (((a = (o & e.childLanes) !== 0), We || a)) {
        if (((r = _e), r !== null)) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | o) ? 0 : l),
                l !== 0 &&
                    l !== i.retryLane &&
                    ((i.retryLane = l), It(e, l), vt(r, e, l, -1));
        }
        return du(), (r = Eo(Error(_(421)))), $l(e, t, o, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = _m.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Ze = nn(l.nextSibling)),
          (qe = t),
          (ue = !0),
          (ht = null),
          e !== null &&
              ((rt[lt++] = jt),
              (rt[lt++] = zt),
              (rt[lt++] = Rn),
              (jt = e.id),
              (zt = e.overflow),
              (Rn = t)),
          (t = ou(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Os(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), la(e.return, t, n);
}
function ko(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = l));
}
function ad(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if ((Ie(e, t, r.children, n), (r = ce.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Os(e, n, t);
                else if (e.tag === 19) Os(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((re(ce, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Si(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    ko(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Si(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                ko(t, !0, n, null, i);
                break;
            case "together":
                ko(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ei(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Tn |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (
            e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = an(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function hm(e, t, n) {
    switch (t.tag) {
        case 3:
            id(t), ur();
            break;
        case 5:
            Df(t);
            break;
        case 1:
            Ke(t.type) && mi(t);
            break;
        case 4:
            qa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            re(yi, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (re(ce, ce.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? od(e, t, n)
                      : (re(ce, ce.current & 1),
                        (e = Ut(e, t, n)),
                        e !== null ? e.sibling : null);
            re(ce, ce.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return ad(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                re(ce, ce.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), rd(e, t, n);
    }
    return Ut(e, t, n);
}
var ud, da, sd, cd;
ud = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
da = function () {};
sd = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), kn(kt.current);
        var i = null;
        switch (n) {
            case "input":
                (l = Mo(e, l)), (r = Mo(e, r)), (i = []);
                break;
            case "select":
                (l = de({}, l, { value: void 0 })),
                    (r = de({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (l = Io(e, l)), (r = Io(e, r)), (i = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = pi);
        }
        Ao(n, r);
        var o;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var a = l[s];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                        s !== "children" &&
                        s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Kr.hasOwnProperty(s)
                            ? i || (i = [])
                            : (i = i || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (
                ((a = l != null ? l[s] : void 0),
                r.hasOwnProperty(s) && u !== a && (u != null || a != null))
            )
                if (s === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) ||
                                (u && u.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in u)
                            u.hasOwnProperty(o) &&
                                a[o] !== u[o] &&
                                (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(s, n)), (n = u);
                else
                    s === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (a = a ? a.__html : void 0),
                          u != null && a !== u && (i = i || []).push(s, u))
                        : s === "children"
                          ? (typeof u != "string" && typeof u != "number") ||
                            (i = i || []).push(s, "" + u)
                          : s !== "suppressContentEditableWarning" &&
                            s !== "suppressHydrationWarning" &&
                            (Kr.hasOwnProperty(s)
                                ? (u != null &&
                                      s === "onScroll" &&
                                      oe("scroll", e),
                                  i || a === u || (i = []))
                                : (i = i || []).push(s, u));
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4);
    }
};
cd = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Nr(e, t) {
    if (!ue)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mm(e, t, n) {
    var r = t.pendingProps;
    switch ((Qa(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ze(t), null;
        case 1:
            return Ke(t.type) && hi(), ze(t), null;
        case 3:
            return (
                (r = t.stateNode),
                cr(),
                ae(Qe),
                ae(Me),
                eu(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Al(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          ht !== null && (xa(ht), (ht = null)))),
                da(e, t),
                ze(t),
                null
            );
        case 5:
            ba(t);
            var l = kn(ll.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                sd(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return ze(t), null;
                }
                if (((e = kn(kt.current)), Al(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[St] = t), (r[nl] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            oe("cancel", r), oe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            oe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Or.length; l++) oe(Or[l], r);
                            break;
                        case "source":
                            oe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            oe("error", r), oe("load", r);
                            break;
                        case "details":
                            oe("toggle", r);
                            break;
                        case "input":
                            Wu(r, i), oe("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                oe("invalid", r);
                            break;
                        case "textarea":
                            Ku(r, i), oe("invalid", r);
                    }
                    Ao(n, i), (l = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ul(r.textContent, a, e),
                                      (l = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ul(r.textContent, a, e),
                                      (l = ["children", "" + a]))
                                : Kr.hasOwnProperty(o) &&
                                  a != null &&
                                  o === "onScroll" &&
                                  oe("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Tl(r), Qu(r, i, !0);
                            break;
                        case "textarea":
                            Tl(r), Yu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = pi);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Ic(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = o.createElement(n, { is: r.is }))
                                  : ((e = o.createElement(n)),
                                    n === "select" &&
                                        ((o = e),
                                        r.multiple
                                            ? (o.multiple = !0)
                                            : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[St] = t),
                        (e[nl] = r),
                        ud(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Bo(n, r)), n)) {
                            case "dialog":
                                oe("cancel", e), oe("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                oe("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Or.length; l++) oe(Or[l], e);
                                l = r;
                                break;
                            case "source":
                                oe("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                oe("error", e), oe("load", e), (l = r);
                                break;
                            case "details":
                                oe("toggle", e), (l = r);
                                break;
                            case "input":
                                Wu(e, r), (l = Mo(e, r)), oe("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = de({}, r, { value: void 0 })),
                                    oe("invalid", e);
                                break;
                            case "textarea":
                                Ku(e, r), (l = Io(e, r)), oe("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        Ao(n, l), (a = l);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var u = a[i];
                                i === "style"
                                    ? Bc(e, u)
                                    : i === "dangerouslySetInnerHTML"
                                      ? ((u = u ? u.__html : void 0),
                                        u != null && Uc(e, u))
                                      : i === "children"
                                        ? typeof u == "string"
                                            ? (n !== "textarea" || u !== "") &&
                                              Yr(e, u)
                                            : typeof u == "number" &&
                                              Yr(e, "" + u)
                                        : i !==
                                              "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (Kr.hasOwnProperty(i)
                                              ? u != null &&
                                                i === "onScroll" &&
                                                oe("scroll", e)
                                              : u != null && Ta(e, i, u, o));
                            }
                        switch (n) {
                            case "input":
                                Tl(e), Qu(e, r, !1);
                                break;
                            case "textarea":
                                Tl(e), Yu(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + un(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? bn(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          bn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0,
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = pi);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ze(t), null;
        case 6:
            if (e && t.stateNode != null) cd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(_(166));
                if (((n = kn(ll.current)), kn(kt.current), Al(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[St] = t),
                        (i = r.nodeValue !== n) && ((e = qe), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[St] = t),
                        (t.stateNode = r);
            }
            return ze(t), null;
        case 13:
            if (
                (ae(ce),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128))
                    Rf(), ur(), (t.flags |= 98560), (i = !1);
                else if (((i = Al(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(_(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(_(317));
                        i[St] = t;
                    } else
                        ur(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ze(t), (i = !1);
                } else ht !== null && (xa(ht), (ht = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || ce.current & 1
                              ? ke === 0 && (ke = 3)
                              : du())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ze(t),
                  null);
        case 4:
            return (
                cr(),
                da(e, t),
                e === null && el(t.stateNode.containerInfo),
                ze(t),
                null
            );
        case 10:
            return Ga(t.type._context), ze(t), null;
        case 17:
            return Ke(t.type) && hi(), ze(t), null;
        case 19:
            if ((ae(ce), (i = t.memoizedState), i === null)) return ze(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) Nr(i, !1);
                else {
                    if (ke !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = Si(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        Nr(i, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  o.memoizedProps),
                                              (i.memoizedState =
                                                  o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return re(ce, (ce.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        ge() > dr &&
                        ((t.flags |= 128),
                        (r = !0),
                        Nr(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Si(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Nr(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !o.alternate &&
                                !ue)
                        )
                            return ze(t), null;
                    } else
                        2 * ge() - i.renderingStartTime > dr &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Nr(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (i.last = o));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = ge()),
                  (t.sibling = null),
                  (n = ce.current),
                  re(ce, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ze(t), null);
        case 22:
        case 23:
            return (
                fu(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Ge & 1073741824 &&
                      (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ze(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(_(156, t.tag));
}
function vm(e, t) {
    switch ((Qa(t), t.tag)) {
        case 1:
            return (
                Ke(t.type) && hi(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                cr(),
                ae(Qe),
                ae(Me),
                eu(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return ba(t), null;
        case 13:
            if (
                (ae(ce),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(_(340));
                ur();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return ae(ce), null;
        case 4:
            return cr(), null;
        case 10:
            return Ga(t.type._context), null;
        case 22:
        case 23:
            return fu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Hl = !1,
    De = !1,
    gm = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;
function Jn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ve(e, t, r);
            }
        else n.current = null;
}
function pa(e, t, n) {
    try {
        n();
    } catch (r) {
        ve(e, t, r);
    }
}
var Fs = !1;
function ym(e, t) {
    if (((Jo = ci), (e = mf()), Va(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        u = -1,
                        s = 0,
                        d = 0,
                        f = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var w;
                            f !== n ||
                                (l !== 0 && f.nodeType !== 3) ||
                                (a = o + l),
                                f !== i ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (u = o + r),
                                f.nodeType === 3 && (o += f.nodeValue.length),
                                (w = f.firstChild) !== null;

                        )
                            (m = f), (f = w);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (m === n && ++s === l && (a = o),
                                m === i && ++d === r && (u = o),
                                (w = f.nextSibling) !== null)
                            )
                                break;
                            (f = m), (m = f.parentNode);
                        }
                        f = w;
                    }
                    n = a === -1 || u === -1 ? null : { start: a, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Zo = { focusedElem: e, selectionRange: n }, ci = !1, M = t;
        M !== null;

    )
        if (
            ((t = M),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (M = e);
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (k !== null) {
                                    var S = k.memoizedProps,
                                        L = k.memoizedState,
                                        h = t.stateNode,
                                        c = h.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? S
                                                : ft(t.type, S),
                                            L,
                                        );
                                    h.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 &&
                                      v.documentElement &&
                                      v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(_(163));
                        }
                } catch (E) {
                    ve(t, t.return, E);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (M = e);
                    break;
                }
                M = t.return;
            }
    return (k = Fs), (Fs = !1), k;
}
function Vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                (l.destroy = void 0), i !== void 0 && pa(t, n, i);
            }
            l = l.next;
        } while (l !== r);
    }
}
function $i(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ha(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function fd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), fd(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[St],
                delete t[nl],
                delete t[ea],
                delete t[em],
                delete t[tm])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function dd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Is(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || dd(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = pi));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ma(e, t, n), e = e.sibling; e !== null; )
            ma(e, t, n), (e = e.sibling);
}
function va(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (va(e, t, n), e = e.sibling; e !== null; )
            va(e, t, n), (e = e.sibling);
}
var Re = null,
    dt = !1;
function Wt(e, t, n) {
    for (n = n.child; n !== null; ) pd(e, t, n), (n = n.sibling);
}
function pd(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
        try {
            Et.onCommitFiberUnmount(Di, n);
        } catch {}
    switch (n.tag) {
        case 5:
            De || Jn(n, t);
        case 6:
            var r = Re,
                l = dt;
            (Re = null),
                Wt(e, t, n),
                (Re = r),
                (dt = l),
                Re !== null &&
                    (dt
                        ? ((e = Re),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : Re.removeChild(n.stateNode));
            break;
        case 18:
            Re !== null &&
                (dt
                    ? ((e = Re),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? vo(e.parentNode, n)
                          : e.nodeType === 1 && vo(e, n),
                      Zr(e))
                    : vo(Re, n.stateNode));
            break;
        case 4:
            (r = Re),
                (l = dt),
                (Re = n.stateNode.containerInfo),
                (dt = !0),
                Wt(e, t, n),
                (Re = r),
                (dt = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !De &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    (i = i.tag),
                        o !== void 0 && (i & 2 || i & 4) && pa(n, t, o),
                        (l = l.next);
                } while (l !== r);
            }
            Wt(e, t, n);
            break;
        case 1:
            if (
                !De &&
                (Jn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    ve(n, t, a);
                }
            Wt(e, t, n);
            break;
        case 21:
            Wt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((De = (r = De) || n.memoizedState !== null),
                  Wt(e, t, n),
                  (De = r))
                : Wt(e, t, n);
            break;
        default:
            Wt(e, t, n);
    }
}
function Us(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new gm()),
            t.forEach(function (r) {
                var l = Nm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Re = a.stateNode), (dt = !1);
                            break e;
                        case 3:
                            (Re = a.stateNode.containerInfo), (dt = !0);
                            break e;
                        case 4:
                            (Re = a.stateNode.containerInfo), (dt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Re === null) throw Error(_(160));
                pd(i, o, l), (Re = null), (dt = !1);
                var u = l.alternate;
                u !== null && (u.return = null), (l.return = null);
            } catch (s) {
                ve(l, t, s);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) hd(t, e), (t = t.sibling);
}
function hd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ct(t, e), wt(e), r & 4)) {
                try {
                    Vr(3, e, e.return), $i(3, e);
                } catch (S) {
                    ve(e, e.return, S);
                }
                try {
                    Vr(5, e, e.return);
                } catch (S) {
                    ve(e, e.return, S);
                }
            }
            break;
        case 1:
            ct(t, e), wt(e), r & 512 && n !== null && Jn(n, n.return);
            break;
        case 5:
            if (
                (ct(t, e),
                wt(e),
                r & 512 && n !== null && Jn(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Yr(l, "");
                } catch (S) {
                    ve(e, e.return, S);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        a === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            Oc(l, i),
                            Bo(a, o);
                        var s = Bo(a, i);
                        for (o = 0; o < u.length; o += 2) {
                            var d = u[o],
                                f = u[o + 1];
                            d === "style"
                                ? Bc(l, f)
                                : d === "dangerouslySetInnerHTML"
                                  ? Uc(l, f)
                                  : d === "children"
                                    ? Yr(l, f)
                                    : Ta(l, d, f, s);
                        }
                        switch (a) {
                            case "input":
                                Oo(l, i);
                                break;
                            case "textarea":
                                Fc(l, i);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var w = i.value;
                                w != null
                                    ? bn(l, !!i.multiple, w, !1)
                                    : m !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? bn(
                                                l,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0,
                                            )
                                          : bn(
                                                l,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1,
                                            ));
                        }
                        l[nl] = i;
                    } catch (S) {
                        ve(e, e.return, S);
                    }
            }
            break;
        case 6:
            if ((ct(t, e), wt(e), r & 4)) {
                if (e.stateNode === null) throw Error(_(162));
                (l = e.stateNode), (i = e.memoizedProps);
                try {
                    l.nodeValue = i;
                } catch (S) {
                    ve(e, e.return, S);
                }
            }
            break;
        case 3:
            if (
                (ct(t, e),
                wt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Zr(t.containerInfo);
                } catch (S) {
                    ve(e, e.return, S);
                }
            break;
        case 4:
            ct(t, e), wt(e);
            break;
        case 13:
            ct(t, e),
                wt(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((i = l.memoizedState !== null),
                    (l.stateNode.isHidden = i),
                    !i ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (su = ge())),
                r & 4 && Us(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((De = (s = De) || d), ct(t, e), (De = s))
                    : ct(t, e),
                wt(e),
                r & 8192)
            ) {
                if (
                    ((s = e.memoizedState !== null),
                    (e.stateNode.isHidden = s) && !d && e.mode & 1)
                )
                    for (M = e, d = e.child; d !== null; ) {
                        for (f = M = d; M !== null; ) {
                            switch (((m = M), (w = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Vr(4, m, m.return);
                                    break;
                                case 1:
                                    Jn(m, m.return);
                                    var k = m.stateNode;
                                    if (
                                        typeof k.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (k.props = t.memoizedProps),
                                                (k.state = t.memoizedState),
                                                k.componentWillUnmount();
                                        } catch (S) {
                                            ve(r, n, S);
                                        }
                                    }
                                    break;
                                case 5:
                                    Jn(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Bs(f);
                                        continue;
                                    }
                            }
                            w !== null ? ((w.return = m), (M = w)) : Bs(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (l = f.stateNode),
                                    s
                                        ? ((i = l.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important",
                                                )
                                              : (i.display = "none"))
                                        : ((a = f.stateNode),
                                          (u = f.memoizedProps.style),
                                          (o =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (a.style.display = Ac("display", o)));
                            } catch (S) {
                                ve(e, e.return, S);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = s
                                    ? ""
                                    : f.memoizedProps;
                            } catch (S) {
                                ve(e, e.return, S);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            ct(t, e), wt(e), r & 4 && Us(e);
            break;
        case 21:
            break;
        default:
            ct(t, e), wt(e);
    }
}
function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (dd(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(_(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Yr(l, ""), (r.flags &= -33));
                    var i = Is(e);
                    va(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = Is(e);
                    ma(e, a, o);
                    break;
                default:
                    throw Error(_(161));
            }
        } catch (u) {
            ve(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function wm(e, t, n) {
    (M = e), md(e);
}
function md(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var l = M,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Hl;
            if (!o) {
                var a = l.alternate,
                    u = (a !== null && a.memoizedState !== null) || De;
                a = Hl;
                var s = De;
                if (((Hl = o), (De = u) && !s))
                    for (M = l; M !== null; )
                        (o = M),
                            (u = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? $s(l)
                                : u !== null
                                  ? ((u.return = o), (M = u))
                                  : $s(l);
                for (; i !== null; ) (M = i), md(i), (i = i.sibling);
                (M = l), (Hl = a), (De = s);
            }
            As(e);
        } else
            l.subtreeFlags & 8772 && i !== null
                ? ((i.return = l), (M = i))
                : As(e);
    }
}
function As(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            De || $i(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !De)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : ft(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate,
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && ks(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ks(t, o, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var s = t.alternate;
                                if (s !== null) {
                                    var d = s.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && Zr(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(_(163));
                    }
                De || (t.flags & 512 && ha(t));
            } catch (m) {
                ve(t, t.return, m);
            }
        }
        if (t === e) {
            M = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Bs(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function $s(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        $i(4, t);
                    } catch (u) {
                        ve(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            ve(t, l, u);
                        }
                    }
                    var i = t.return;
                    try {
                        ha(t);
                    } catch (u) {
                        ve(t, i, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        ha(t);
                    } catch (u) {
                        ve(t, o, u);
                    }
            }
        } catch (u) {
            ve(t, t.return, u);
        }
        if (t === e) {
            M = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (M = a);
            break;
        }
        M = t.return;
    }
}
var xm = Math.ceil,
    Ci = At.ReactCurrentDispatcher,
    au = At.ReactCurrentOwner,
    ot = At.ReactCurrentBatchConfig,
    J = 0,
    _e = null,
    Se = null,
    Le = 0,
    Ge = 0,
    Zn = fn(0),
    ke = 0,
    ul = null,
    Tn = 0,
    Hi = 0,
    uu = 0,
    Wr = null,
    Ve = null,
    su = 0,
    dr = 1 / 0,
    Lt = null,
    Pi = !1,
    ga = null,
    ln = null,
    Vl = !1,
    Zt = null,
    _i = 0,
    Qr = 0,
    ya = null,
    ti = -1,
    ni = 0;
function Ue() {
    return J & 6 ? ge() : ti !== -1 ? ti : (ti = ge());
}
function on(e) {
    return e.mode & 1
        ? J & 2 && Le !== 0
            ? Le & -Le
            : rm.transition !== null
              ? (ni === 0 && (ni = qc()), ni)
              : ((e = b),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : of(e.type))),
                e)
        : 1;
}
function vt(e, t, n, r) {
    if (50 < Qr) throw ((Qr = 0), (ya = null), Error(_(185)));
    pl(e, n, r),
        (!(J & 2) || e !== _e) &&
            (e === _e && (!(J & 2) && (Hi |= n), ke === 4 && Gt(e, Le)),
            Ye(e, r),
            n === 1 &&
                J === 0 &&
                !(t.mode & 1) &&
                ((dr = ge() + 500), Ui && dn()));
}
function Ye(e, t) {
    var n = e.callbackNode;
    rh(e, t);
    var r = si(e, e === _e ? Le : 0);
    if (r === 0)
        n !== null && Ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Ju(n), t === 1))
            e.tag === 0 ? nm(Hs.bind(null, e)) : Pf(Hs.bind(null, e)),
                qh(function () {
                    !(J & 6) && dn();
                }),
                (n = null);
        else {
            switch (bc(r)) {
                case 1:
                    n = Oa;
                    break;
                case 4:
                    n = Jc;
                    break;
                case 16:
                    n = ui;
                    break;
                case 536870912:
                    n = Zc;
                    break;
                default:
                    n = ui;
            }
            n = kd(n, vd.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function vd(e, t) {
    if (((ti = -1), (ni = 0), J & 6)) throw Error(_(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n) return null;
    var r = si(e, e === _e ? Le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ni(e, r);
    else {
        t = r;
        var l = J;
        J |= 2;
        var i = yd();
        (_e !== e || Le !== t) && ((Lt = null), (dr = ge() + 500), Pn(e, t));
        do
            try {
                km();
                break;
            } catch (a) {
                gd(e, a);
            }
        while (!0);
        Xa(),
            (Ci.current = i),
            (J = l),
            Se !== null ? (t = 0) : ((_e = null), (Le = 0), (t = ke));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Qo(e)), l !== 0 && ((r = l), (t = wa(e, l)))),
            t === 1)
        )
            throw ((n = ul), Pn(e, 0), Gt(e, r), Ye(e, ge()), n);
        if (t === 6) Gt(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !Sm(l) &&
                    ((t = Ni(e, r)),
                    t === 2 &&
                        ((i = Qo(e)), i !== 0 && ((r = i), (t = wa(e, i)))),
                    t === 1))
            )
                throw ((n = ul), Pn(e, 0), Gt(e, r), Ye(e, ge()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    wn(e, Ve, Lt);
                    break;
                case 3:
                    if (
                        (Gt(e, r),
                        (r & 130023424) === r &&
                            ((t = su + 500 - ge()), 10 < t))
                    ) {
                        if (si(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            Ue(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = bo(wn.bind(null, e, Ve, Lt), t);
                        break;
                    }
                    wn(e, Ve, Lt);
                    break;
                case 4:
                    if ((Gt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - mt(r);
                        (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
                    }
                    if (
                        ((r = l),
                        (r = ge() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * xm(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = bo(wn.bind(null, e, Ve, Lt), r);
                        break;
                    }
                    wn(e, Ve, Lt);
                    break;
                case 5:
                    wn(e, Ve, Lt);
                    break;
                default:
                    throw Error(_(329));
            }
        }
    }
    return Ye(e, ge()), e.callbackNode === n ? vd.bind(null, e) : null;
}
function wa(e, t) {
    var n = Wr;
    return (
        e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
        (e = Ni(e, t)),
        e !== 2 && ((t = Ve), (Ve = n), t !== null && xa(t)),
        e
    );
}
function xa(e) {
    Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Sm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!gt(i(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Gt(e, t) {
    for (
        t &= ~uu,
            t &= ~Hi,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - mt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Hs(e) {
    if (J & 6) throw Error(_(327));
    lr();
    var t = si(e, 0);
    if (!(t & 1)) return Ye(e, ge()), null;
    var n = Ni(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qo(e);
        r !== 0 && ((t = r), (n = wa(e, r)));
    }
    if (n === 1) throw ((n = ul), Pn(e, 0), Gt(e, t), Ye(e, ge()), n);
    if (n === 6) throw Error(_(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        wn(e, Ve, Lt),
        Ye(e, ge()),
        null
    );
}
function cu(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t);
    } finally {
        (J = n), J === 0 && ((dr = ge() + 500), Ui && dn());
    }
}
function jn(e) {
    Zt !== null && Zt.tag === 0 && !(J & 6) && lr();
    var t = J;
    J |= 1;
    var n = ot.transition,
        r = b;
    try {
        if (((ot.transition = null), (b = 1), e)) return e();
    } finally {
        (b = r), (ot.transition = n), (J = t), !(J & 6) && dn();
    }
}
function fu() {
    (Ge = Zn.current), ae(Zn);
}
function Pn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zh(n)), Se !== null))
        for (n = Se.return; n !== null; ) {
            var r = n;
            switch ((Qa(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && hi();
                    break;
                case 3:
                    cr(), ae(Qe), ae(Me), eu();
                    break;
                case 5:
                    ba(r);
                    break;
                case 4:
                    cr();
                    break;
                case 13:
                    ae(ce);
                    break;
                case 19:
                    ae(ce);
                    break;
                case 10:
                    Ga(r.type._context);
                    break;
                case 22:
                case 23:
                    fu();
            }
            n = n.return;
        }
    if (
        ((_e = e),
        (Se = e = an(e.current, null)),
        (Le = Ge = t),
        (ke = 0),
        (ul = null),
        (uu = Hi = Tn = 0),
        (Ve = Wr = null),
        En !== null)
    ) {
        for (t = 0; t < En.length; t++)
            if (((n = En[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = l), (r.next = o);
                }
                n.pending = r;
            }
        En = null;
    }
    return e;
}
function gd(e, t) {
    do {
        var n = Se;
        try {
            if ((Xa(), (ql.current = ki), Ei)) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Ei = !1;
            }
            if (
                ((Ln = 0),
                (Pe = Ee = fe = null),
                (Hr = !1),
                (il = 0),
                (au.current = null),
                n === null || n.return === null)
            ) {
                (ke = 1), (ul = t), (Se = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    u = t;
                if (
                    ((t = Le),
                    (a.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var s = u,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = d.alternate;
                        m
                            ? ((d.updateQueue = m.updateQueue),
                              (d.memoizedState = m.memoizedState),
                              (d.lanes = m.lanes))
                            : ((d.updateQueue = null),
                              (d.memoizedState = null));
                    }
                    var w = Ls(o);
                    if (w !== null) {
                        (w.flags &= -257),
                            Ts(w, o, a, i, t),
                            w.mode & 1 && Rs(i, s, t),
                            (t = w),
                            (u = s);
                        var k = t.updateQueue;
                        if (k === null) {
                            var S = new Set();
                            S.add(u), (t.updateQueue = S);
                        } else k.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Rs(i, s, t), du();
                            break e;
                        }
                        u = Error(_(426));
                    }
                } else if (ue && a.mode & 1) {
                    var L = Ls(o);
                    if (L !== null) {
                        !(L.flags & 65536) && (L.flags |= 256),
                            Ts(L, o, a, i, t),
                            Ka(fr(u, a));
                        break e;
                    }
                }
                (i = u = fr(u, a)),
                    ke !== 4 && (ke = 2),
                    Wr === null ? (Wr = [i]) : Wr.push(i),
                    (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var h = ed(i, u, t);
                            Es(i, h);
                            break e;
                        case 1:
                            a = u;
                            var c = i.type,
                                v = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch ==
                                            "function" &&
                                        (ln === null || !ln.has(v))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var E = td(i, a, t);
                                Es(i, E);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            xd(n);
        } catch (R) {
            (t = R), Se === n && n !== null && (Se = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function yd() {
    var e = Ci.current;
    return (Ci.current = ki), e === null ? ki : e;
}
function du() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
        _e === null || (!(Tn & 268435455) && !(Hi & 268435455)) || Gt(_e, Le);
}
function Ni(e, t) {
    var n = J;
    J |= 2;
    var r = yd();
    (_e !== e || Le !== t) && ((Lt = null), Pn(e, t));
    do
        try {
            Em();
            break;
        } catch (l) {
            gd(e, l);
        }
    while (!0);
    if ((Xa(), (J = n), (Ci.current = r), Se !== null)) throw Error(_(261));
    return (_e = null), (Le = 0), ke;
}
function Em() {
    for (; Se !== null; ) wd(Se);
}
function km() {
    for (; Se !== null && !Xp(); ) wd(Se);
}
function wd(e) {
    var t = Ed(e.alternate, e, Ge);
    (e.memoizedProps = e.pendingProps),
        t === null ? xd(e) : (Se = t),
        (au.current = null);
}
function xd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = vm(n, t)), n !== null)) {
                (n.flags &= 32767), (Se = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ke = 6), (Se = null);
                return;
            }
        } else if (((n = mm(n, t, Ge)), n !== null)) {
            Se = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Se = t;
            return;
        }
        Se = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
}
function wn(e, t, n) {
    var r = b,
        l = ot.transition;
    try {
        (ot.transition = null), (b = 1), Cm(e, t, n, r);
    } finally {
        (ot.transition = l), (b = r);
    }
    return null;
}
function Cm(e, t, n, r) {
    do lr();
    while (Zt !== null);
    if (J & 6) throw Error(_(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(_(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (lh(e, i),
        e === _e && ((Se = _e = null), (Le = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Vl ||
            ((Vl = !0),
            kd(ui, function () {
                return lr(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = ot.transition), (ot.transition = null);
        var o = b;
        b = 1;
        var a = J;
        (J |= 4),
            (au.current = null),
            ym(e, n),
            hd(n, e),
            Wh(Zo),
            (ci = !!Jo),
            (Zo = Jo = null),
            (e.current = n),
            wm(n),
            Gp(),
            (J = a),
            (b = o),
            (ot.transition = i);
    } else e.current = n;
    if (
        (Vl && ((Vl = !1), (Zt = e), (_i = l)),
        (i = e.pendingLanes),
        i === 0 && (ln = null),
        qp(n.stateNode),
        Ye(e, ge()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Pi) throw ((Pi = !1), (e = ga), (ga = null), e);
    return (
        _i & 1 && e.tag !== 0 && lr(),
        (i = e.pendingLanes),
        i & 1 ? (e === ya ? Qr++ : ((Qr = 0), (ya = e))) : (Qr = 0),
        dn(),
        null
    );
}
function lr() {
    if (Zt !== null) {
        var e = bc(_i),
            t = ot.transition,
            n = b;
        try {
            if (((ot.transition = null), (b = 16 > e ? 16 : e), Zt === null))
                var r = !1;
            else {
                if (((e = Zt), (Zt = null), (_i = 0), J & 6))
                    throw Error(_(331));
                var l = J;
                for (J |= 4, M = e.current; M !== null; ) {
                    var i = M,
                        o = i.child;
                    if (M.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (M = s; M !== null; ) {
                                    var d = M;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vr(8, d, i);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (M = f);
                                    else
                                        for (; M !== null; ) {
                                            d = M;
                                            var m = d.sibling,
                                                w = d.return;
                                            if ((fd(d), d === s)) {
                                                M = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = w), (M = m);
                                                break;
                                            }
                                            M = w;
                                        }
                                }
                            }
                            var k = i.alternate;
                            if (k !== null) {
                                var S = k.child;
                                if (S !== null) {
                                    k.child = null;
                                    do {
                                        var L = S.sibling;
                                        (S.sibling = null), (S = L);
                                    } while (S !== null);
                                }
                            }
                            M = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        (o.return = i), (M = o);
                    else
                        e: for (; M !== null; ) {
                            if (((i = M), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vr(9, i, i.return);
                                }
                            var h = i.sibling;
                            if (h !== null) {
                                (h.return = i.return), (M = h);
                                break e;
                            }
                            M = i.return;
                        }
                }
                var c = e.current;
                for (M = c; M !== null; ) {
                    o = M;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        (v.return = o), (M = v);
                    else
                        e: for (o = c; M !== null; ) {
                            if (((a = M), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $i(9, a);
                                    }
                                } catch (R) {
                                    ve(a, a.return, R);
                                }
                            if (a === o) {
                                M = null;
                                break e;
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                (E.return = a.return), (M = E);
                                break e;
                            }
                            M = a.return;
                        }
                }
                if (
                    ((J = l),
                    dn(),
                    Et && typeof Et.onPostCommitFiberRoot == "function")
                )
                    try {
                        Et.onPostCommitFiberRoot(Di, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (b = n), (ot.transition = t);
        }
    }
    return !1;
}
function Vs(e, t, n) {
    (t = fr(n, t)),
        (t = ed(e, t, 1)),
        (e = rn(e, t, 1)),
        (t = Ue()),
        e !== null && (pl(e, 1, t), Ye(e, t));
}
function ve(e, t, n) {
    if (e.tag === 3) Vs(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vs(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (ln === null || !ln.has(r)))
                ) {
                    (e = fr(n, e)),
                        (e = td(t, e, 1)),
                        (t = rn(t, e, 1)),
                        (e = Ue()),
                        t !== null && (pl(t, 1, e), Ye(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Pm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ue()),
        (e.pingedLanes |= e.suspendedLanes & n),
        _e === e &&
            (Le & n) === n &&
            (ke === 4 ||
            (ke === 3 && (Le & 130023424) === Le && 500 > ge() - su)
                ? Pn(e, 0)
                : (uu |= n)),
        Ye(e, t);
}
function Sd(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Dl), (Dl <<= 1), !(Dl & 130023424) && (Dl = 4194304))
            : (t = 1));
    var n = Ue();
    (e = It(e, t)), e !== null && (pl(e, t, n), Ye(e, n));
}
function _m(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Sd(e, n);
}
function Nm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314));
    }
    r !== null && r.delete(t), Sd(e, n);
}
var Ed;
Ed = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current) We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (We = !1), hm(e, t, n);
            We = !!(e.flags & 131072);
        }
    else (We = !1), ue && t.flags & 1048576 && _f(t, gi, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            ei(e, t), (e = t.pendingProps);
            var l = ar(t, Me.current);
            rr(t, n), (l = nu(null, t, r, e, l, n));
            var i = ru();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ke(r) ? ((i = !0), mi(t)) : (i = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      Za(t),
                      (l.updater = Bi),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      oa(t, r, e, n),
                      (t = sa(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      ue && i && Wa(t),
                      Ie(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (ei(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = Lm(r)),
                    (e = ft(r, e)),
                    l)
                ) {
                    case 0:
                        t = ua(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ds(null, t, r, e, n);
                        break e;
                    case 11:
                        t = js(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zs(null, t, r, ft(r.type, e), n);
                        break e;
                }
                throw Error(_(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : ft(r, l)),
                ua(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : ft(r, l)),
                Ds(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((id(t), e === null)) throw Error(_(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (l = i.element),
                    zf(e, t),
                    xi(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (l = fr(Error(_(423)), t)), (t = Ms(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = fr(Error(_(424)), t)), (t = Ms(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            Ze = nn(t.stateNode.containerInfo.firstChild),
                                qe = t,
                                ue = !0,
                                ht = null,
                                n = Tf(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ur(), r === l)) {
                        t = Ut(e, t, n);
                        break e;
                    }
                    Ie(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Df(t),
                e === null && ra(t),
                (r = t.type),
                (l = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = l.children),
                qo(r, l)
                    ? (o = null)
                    : i !== null && qo(r, i) && (t.flags |= 32),
                ld(e, t),
                Ie(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && ra(t), null;
        case 13:
            return od(e, t, n);
        case 4:
            return (
                qa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = sr(t, null, r, n)) : Ie(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : ft(r, l)),
                js(e, t, r, l, n)
            );
        case 7:
            return Ie(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ie(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ie(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = l.value),
                    re(yi, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (gt(i.value, o)) {
                        if (i.children === l.children && !Qe.current) {
                            t = Ut(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var u = a.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            (u = Dt(-1, n & -n)), (u.tag = 2);
                                            var s = i.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var d = s.pending;
                                                d === null
                                                    ? (u.next = u)
                                                    : ((u.next = d.next),
                                                      (d.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (u = i.alternate),
                                            u !== null && (u.lanes |= n),
                                            la(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (i.tag === 10)
                                o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null))
                                    throw Error(_(341));
                                (o.lanes |= n),
                                    (a = o.alternate),
                                    a !== null && (a.lanes |= n),
                                    la(o, n, t),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                Ie(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                rr(t, n),
                (l = at(l)),
                (r = r(l)),
                (t.flags |= 1),
                Ie(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = ft(r, t.pendingProps)),
                (l = ft(r.type, l)),
                zs(e, t, r, l, n)
            );
        case 15:
            return nd(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : ft(r, l)),
                ei(e, t),
                (t.tag = 1),
                Ke(r) ? ((e = !0), mi(t)) : (e = !1),
                rr(t, n),
                bf(t, r, l),
                oa(t, r, l, n),
                sa(null, t, r, !0, e, n)
            );
        case 19:
            return ad(e, t, n);
        case 22:
            return rd(e, t, n);
    }
    throw Error(_(156, t.tag));
};
function kd(e, t) {
    return Gc(e, t);
}
function Rm(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function it(e, t, n, r) {
    return new Rm(e, t, n, r);
}
function pu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Lm(e) {
    if (typeof e == "function") return pu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === za)) return 11;
        if (e === Da) return 14;
    }
    return 2;
}
function an(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = it(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ri(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) pu(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case $n:
                return _n(n.children, l, i, t);
            case ja:
                (o = 8), (l |= 8);
                break;
            case To:
                return (
                    (e = it(12, n, t, l | 2)),
                    (e.elementType = To),
                    (e.lanes = i),
                    e
                );
            case jo:
                return (
                    (e = it(13, n, t, l)),
                    (e.elementType = jo),
                    (e.lanes = i),
                    e
                );
            case zo:
                return (
                    (e = it(19, n, t, l)),
                    (e.elementType = zo),
                    (e.lanes = i),
                    e
                );
            case zc:
                return Vi(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Tc:
                            o = 10;
                            break e;
                        case jc:
                            o = 9;
                            break e;
                        case za:
                            o = 11;
                            break e;
                        case Da:
                            o = 14;
                            break e;
                        case Kt:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = it(o, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function _n(e, t, n, r) {
    return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function Vi(e, t, n, r) {
    return (
        (e = it(22, e, r, t)),
        (e.elementType = zc),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Co(e, t, n) {
    return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function Po(e, t, n) {
    return (
        (t = it(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Tm(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = lo(0)),
        (this.expirationTimes = lo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = lo(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function hu(e, t, n, r, l, i, o, a, u) {
    return (
        (e = new Tm(e, t, n, a, u)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = it(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Za(i),
        e
    );
}
function jm(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Bn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Cd(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
        if (Mn(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ke(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(_(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n)) return Cf(e, n, t);
    }
    return t;
}
function Pd(e, t, n, r, l, i, o, a, u) {
    return (
        (e = hu(n, r, !0, e, l, i, o, a, u)),
        (e.context = Cd(null)),
        (n = e.current),
        (r = Ue()),
        (l = on(n)),
        (i = Dt(r, l)),
        (i.callback = t ?? null),
        rn(n, i, l),
        (e.current.lanes = l),
        pl(e, l, r),
        Ye(e, r),
        e
    );
}
function Wi(e, t, n, r) {
    var l = t.current,
        i = Ue(),
        o = on(l);
    return (
        (n = Cd(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Dt(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = rn(l, t, o)),
        e !== null && (vt(e, l, o, i), Zl(e, l, o)),
        o
    );
}
function Ri(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Ws(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function mu(e, t) {
    Ws(e, t), (e = e.alternate) && Ws(e, t);
}
function zm() {
    return null;
}
var _d =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function vu(e) {
    this._internalRoot = e;
}
Qi.prototype.render = vu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Wi(e, t, null, null);
};
Qi.prototype.unmount = vu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        jn(function () {
            Wi(null, e, null, null);
        }),
            (t[Ft] = null);
    }
};
function Qi(e) {
    this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = nf();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
        Xt.splice(n, 0, e), n === 0 && lf(e);
    }
};
function gu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ki(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Qs() {}
function Dm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var s = Ri(o);
                i.call(s);
            };
        }
        var o = Pd(t, r, e, 0, null, !1, !1, "", Qs);
        return (
            (e._reactRootContainer = o),
            (e[Ft] = o.current),
            el(e.nodeType === 8 ? e.parentNode : e),
            jn(),
            o
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var s = Ri(u);
            a.call(s);
        };
    }
    var u = hu(e, 0, !1, null, null, !1, !1, "", Qs);
    return (
        (e._reactRootContainer = u),
        (e[Ft] = u.current),
        el(e.nodeType === 8 ? e.parentNode : e),
        jn(function () {
            Wi(t, u, n, r);
        }),
        u
    );
}
function Yi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function () {
                var u = Ri(o);
                a.call(u);
            };
        }
        Wi(t, o, e, l);
    } else o = Dm(n, t, e, l, r);
    return Ri(o);
}
ef = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Mr(t.pendingLanes);
                n !== 0 &&
                    (Fa(t, n | 1),
                    Ye(t, ge()),
                    !(J & 6) && ((dr = ge() + 500), dn()));
            }
            break;
        case 13:
            jn(function () {
                var r = It(e, 1);
                if (r !== null) {
                    var l = Ue();
                    vt(r, e, 1, l);
                }
            }),
                mu(e, 1);
    }
};
Ia = function (e) {
    if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
            var n = Ue();
            vt(t, e, 134217728, n);
        }
        mu(e, 134217728);
    }
};
tf = function (e) {
    if (e.tag === 13) {
        var t = on(e),
            n = It(e, t);
        if (n !== null) {
            var r = Ue();
            vt(n, e, t, r);
        }
        mu(e, t);
    }
};
nf = function () {
    return b;
};
rf = function (e, t) {
    var n = b;
    try {
        return (b = e), t();
    } finally {
        b = n;
    }
};
Ho = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]',
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Ii(r);
                        if (!l) throw Error(_(90));
                        Mc(r), Oo(r, l);
                    }
                }
            }
            break;
        case "textarea":
            Fc(e, n);
            break;
        case "select":
            (t = n.value), t != null && bn(e, !!n.multiple, t, !1);
    }
};
Vc = cu;
Wc = jn;
var Mm = { usingClientEntryPoint: !1, Events: [ml, Qn, Ii, $c, Hc, cu] },
    Rr = {
        findFiberByHostInstance: Sn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    Om = {
        bundleType: Rr.bundleType,
        version: Rr.version,
        rendererPackageName: Rr.rendererPackageName,
        rendererConfig: Rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: At.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Yc(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Rr.findFiberByHostInstance || zm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wl.isDisabled && Wl.supportsFiber)
        try {
            (Di = Wl.inject(Om)), (Et = Wl);
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
et.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gu(t)) throw Error(_(200));
    return jm(e, t, null, n);
};
et.createRoot = function (e, t) {
    if (!gu(e)) throw Error(_(299));
    var n = !1,
        r = "",
        l = _d;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = hu(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ft] = t.current),
        el(e.nodeType === 8 ? e.parentNode : e),
        new vu(t)
    );
};
et.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(_(188))
            : ((e = Object.keys(e).join(",")), Error(_(268, e)));
    return (e = Yc(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
    return jn(e);
};
et.hydrate = function (e, t, n) {
    if (!Ki(t)) throw Error(_(200));
    return Yi(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
    if (!gu(e)) throw Error(_(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = _d;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Pd(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Ft] = t.current),
        el(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new Qi(t);
};
et.render = function (e, t, n) {
    if (!Ki(t)) throw Error(_(200));
    return Yi(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
    if (!Ki(e)) throw Error(_(40));
    return e._reactRootContainer
        ? (jn(function () {
              Yi(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Ft] = null);
              });
          }),
          !0)
        : !1;
};
et.unstable_batchedUpdates = cu;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ki(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return Yi(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function Nd() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd);
        } catch (e) {
            console.error(e);
        }
}
Nd(), (_c.exports = et);
var yu = _c.exports;
const Fm = hc(yu),
    Im = pc({ __proto__: null, default: Fm }, [yu]);
var Rd,
    Ks = yu;
(Rd = Ks.createRoot), Ks.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function se() {
    return (
        (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        se.apply(this, arguments)
    );
}
var xe;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xe || (xe = {}));
const Ys = "popstate";
function Um(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let { pathname: i, search: o, hash: a } = r.location;
        return sl(
            "",
            { pathname: i, search: o, hash: a },
            (l.state && l.state.usr) || null,
            (l.state && l.state.key) || "default",
        );
    }
    function n(r, l) {
        return typeof l == "string" ? l : zn(l);
    }
    return Bm(t, n, null, e);
}
function Y(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function Am() {
    return Math.random().toString(36).substr(2, 8);
}
function Xs(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function sl(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        se(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? pn(t) : t,
            { state: n, key: (t && t.key) || r || Am() },
        )
    );
}
function zn(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function pn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function Bm(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: l = document.defaultView, v5Compat: i = !1 } = r,
        o = l.history,
        a = xe.Pop,
        u = null,
        s = d();
    s == null && ((s = 0), o.replaceState(se({}, o.state, { idx: s }), ""));
    function d() {
        return (o.state || { idx: null }).idx;
    }
    function f() {
        a = xe.Pop;
        let L = d(),
            h = L == null ? null : L - s;
        (s = L), u && u({ action: a, location: S.location, delta: h });
    }
    function m(L, h) {
        a = xe.Push;
        let c = sl(S.location, L, h);
        s = d() + 1;
        let v = Xs(c, s),
            E = S.createHref(c);
        try {
            o.pushState(v, "", E);
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            l.location.assign(E);
        }
        i && u && u({ action: a, location: S.location, delta: 1 });
    }
    function w(L, h) {
        a = xe.Replace;
        let c = sl(S.location, L, h);
        s = d();
        let v = Xs(c, s),
            E = S.createHref(c);
        o.replaceState(v, "", E),
            i && u && u({ action: a, location: S.location, delta: 0 });
    }
    function k(L) {
        let h =
                l.location.origin !== "null"
                    ? l.location.origin
                    : l.location.href,
            c = typeof L == "string" ? L : zn(L);
        return (
            (c = c.replace(/ $/, "%20")),
            Y(
                h,
                "No window.location.(origin|href) available to create URL for href: " +
                    c,
            ),
            new URL(c, h)
        );
    }
    let S = {
        get action() {
            return a;
        },
        get location() {
            return e(l, o);
        },
        listen(L) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return (
                l.addEventListener(Ys, f),
                (u = L),
                () => {
                    l.removeEventListener(Ys, f), (u = null);
                }
            );
        },
        createHref(L) {
            return t(l, L);
        },
        createURL: k,
        encodeLocation(L) {
            let h = k(L);
            return { pathname: h.pathname, search: h.search, hash: h.hash };
        },
        push: m,
        replace: w,
        go(L) {
            return o.go(L);
        },
    };
    return S;
}
var ee;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(ee || (ee = {}));
const $m = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
]);
function Hm(e) {
    return e.index === !0;
}
function cl(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((l, i) => {
            let o = [...n, String(i)],
                a = typeof l.id == "string" ? l.id : o.join("-");
            if (
                (Y(
                    l.index !== !0 || !l.children,
                    "Cannot specify children on an index route",
                ),
                Y(
                    !r[a],
                    'Found a route id collision on id "' +
                        a +
                        `".  Route id's must be globally unique within Data Router usages`,
                ),
                Hm(l))
            ) {
                let u = se({}, l, t(l), { id: a });
                return (r[a] = u), u;
            } else {
                let u = se({}, l, t(l), { id: a, children: void 0 });
                return (
                    (r[a] = u),
                    l.children && (u.children = cl(l.children, t, o, r)),
                    u
                );
            }
        })
    );
}
function xn(e, t, n) {
    return n === void 0 && (n = "/"), li(e, t, n, !1);
}
function li(e, t, n, r) {
    let l = typeof t == "string" ? pn(t) : t,
        i = gr(l.pathname || "/", n);
    if (i == null) return null;
    let o = Ld(e);
    Wm(o);
    let a = null;
    for (let u = 0; a == null && u < o.length; ++u) {
        let s = tv(i);
        a = bm(o[u], s, r);
    }
    return a;
}
function Vm(e, t) {
    let { route: n, pathname: r, params: l } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle,
    };
}
function Ld(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let l = (i, o, a) => {
        let u = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i,
        };
        u.relativePath.startsWith("/") &&
            (Y(
                u.relativePath.startsWith(r),
                'Absolute route path "' +
                    u.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes.",
            ),
            (u.relativePath = u.relativePath.slice(r.length)));
        let s = Mt([r, u.relativePath]),
            d = n.concat(u);
        i.children &&
            i.children.length > 0 &&
            (Y(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + s + '".'),
            ),
            Ld(i.children, t, d, s)),
            !(i.path == null && !i.index) &&
                t.push({ path: s, score: Zm(s, i.index), routesMeta: d });
    };
    return (
        e.forEach((i, o) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?")))
                l(i, o);
            else for (let u of Td(i.path)) l(i, o, u);
        }),
        t
    );
}
function Td(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        l = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = Td(r.join("/")),
        a = [];
    return (
        a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
        l && a.push(...o),
        a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
    );
}
function Wm(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : qm(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex),
              ),
    );
}
const Qm = /^:[\w-]+$/,
    Km = 3,
    Ym = 2,
    Xm = 1,
    Gm = 10,
    Jm = -2,
    Gs = (e) => e === "*";
function Zm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(Gs) && (r += Jm),
        t && (r += Ym),
        n
            .filter((l) => !Gs(l))
            .reduce((l, i) => l + (Qm.test(i) ? Km : i === "" ? Xm : Gm), r)
    );
}
function qm(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function bm(e, t, n) {
    n === void 0 && (n = !1);
    let { routesMeta: r } = e,
        l = {},
        i = "/",
        o = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a],
            s = a === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            f = Js(
                {
                    path: u.relativePath,
                    caseSensitive: u.caseSensitive,
                    end: s,
                },
                d,
            ),
            m = u.route;
        if (
            (!f &&
                s &&
                n &&
                !r[r.length - 1].route.index &&
                (f = Js(
                    {
                        path: u.relativePath,
                        caseSensitive: u.caseSensitive,
                        end: !1,
                    },
                    d,
                )),
            !f)
        )
            return null;
        Object.assign(l, f.params),
            o.push({
                params: l,
                pathname: Mt([i, f.pathname]),
                pathnameBase: lv(Mt([i, f.pathnameBase])),
                route: m,
            }),
            f.pathnameBase !== "/" && (i = Mt([i, f.pathnameBase]));
    }
    return o;
}
function Js(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = ev(e.path, e.caseSensitive, e.end),
        l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((s, d, f) => {
            let { paramName: m, isOptional: w } = d;
            if (m === "*") {
                let S = a[f] || "";
                o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
            }
            const k = a[f];
            return (
                w && !k
                    ? (s[m] = void 0)
                    : (s[m] = (k || "").replace(/%2F/g, "/")),
                s
            );
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e,
    };
}
function ev(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        pr(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".'),
        );
    let r = [],
        l =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (o, a, u) => (
                        r.push({ paramName: a, isOptional: u != null }),
                        u ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }),
              (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (l += "\\/*$")
              : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
        [new RegExp(l, t ? void 0 : "i"), r]
    );
}
function tv(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            pr(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ")."),
            ),
            e
        );
    }
}
function gr(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function nv(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = "",
    } = typeof e == "string" ? pn(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : rv(n, t)) : t,
        search: iv(r),
        hash: ov(l),
    };
}
function rv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((l) => {
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function _o(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function jd(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
}
function wu(e, t) {
    let n = jd(e);
    return t
        ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase);
}
function xu(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string"
        ? (l = pn(e))
        : ((l = se({}, e)),
          Y(
              !l.pathname || !l.pathname.includes("?"),
              _o("?", "pathname", "search", l),
          ),
          Y(
              !l.pathname || !l.pathname.includes("#"),
              _o("#", "pathname", "hash", l),
          ),
          Y(
              !l.search || !l.search.includes("#"),
              _o("#", "search", "hash", l),
          ));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        a;
    if (o == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let m = o.split("/");
            for (; m[0] === ".."; ) m.shift(), (f -= 1);
            l.pathname = m.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let u = nv(l, a),
        s = o && o !== "/" && o.endsWith("/"),
        d = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
const Mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
    lv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    iv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    ov = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Li {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = l),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r);
    }
}
function Xi(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const zd = ["post", "put", "patch", "delete"],
    av = new Set(zd),
    uv = ["get", ...zd],
    sv = new Set(uv),
    cv = new Set([301, 302, 303, 307, 308]),
    fv = new Set([307, 308]),
    No = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    dv = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Lr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0,
    },
    Su = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    pv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
    Dd = "remix-router-transitions";
function hv(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n =
            typeof t < "u" &&
            typeof t.document < "u" &&
            typeof t.document.createElement < "u",
        r = !n;
    Y(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter",
    );
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let p = e.detectErrorBoundary;
        l = (y) => ({ hasErrorBoundary: p(y) });
    } else l = pv;
    let i = {},
        o = cl(e.routes, l, void 0, i),
        a,
        u = e.basename || "/",
        s = e.unstable_dataStrategy || xv,
        d = e.unstable_patchRoutesOnNavigation,
        f = se(
            {
                v7_fetcherPersist: !1,
                v7_normalizeFormMethod: !1,
                v7_partialHydration: !1,
                v7_prependBasename: !1,
                v7_relativeSplatPath: !1,
                v7_skipActionErrorRevalidation: !1,
            },
            e.future,
        ),
        m = null,
        w = new Set(),
        k = 1e3,
        S = new Set(),
        L = null,
        h = null,
        c = null,
        v = e.hydrationData != null,
        E = xn(o, e.history.location, u),
        R = null;
    if (E == null && !d) {
        let p = Fe(404, { pathname: e.history.location.pathname }),
            { matches: y, route: x } = ic(o);
        (E = y), (R = { [x.id]: p });
    }
    E &&
        !e.hydrationData &&
        El(E, o, e.history.location.pathname).active &&
        (E = null);
    let j;
    if (E)
        if (E.some((p) => p.route.lazy)) j = !1;
        else if (!E.some((p) => p.route.loader)) j = !0;
        else if (f.v7_partialHydration) {
            let p = e.hydrationData ? e.hydrationData.loaderData : null,
                y = e.hydrationData ? e.hydrationData.errors : null,
                x = (P) =>
                    P.route.loader
                        ? typeof P.route.loader == "function" &&
                          P.route.loader.hydrate === !0
                            ? !1
                            : (p && p[P.route.id] !== void 0) ||
                              (y && y[P.route.id] !== void 0)
                        : !0;
            if (y) {
                let P = E.findIndex((D) => y[D.route.id] !== void 0);
                j = E.slice(0, P + 1).every(x);
            } else j = E.every(x);
        } else j = e.hydrationData != null;
    else if (((j = !1), (E = []), f.v7_partialHydration)) {
        let p = El(null, o, e.history.location.pathname);
        p.active && p.matches && (E = p.matches);
    }
    let O,
        g = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: E,
            initialized: j,
            navigation: No,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || R,
            fetchers: new Map(),
            blockers: new Map(),
        },
        $ = xe.Pop,
        F = !1,
        Q,
        te = !1,
        ye = new Map(),
        pe = null,
        yt = !1,
        st = !1,
        Bt = [],
        z = new Set(),
        I = new Map(),
        W = 0,
        ne = -1,
        le = new Map(),
        $e = new Set(),
        He = new Map(),
        Ct = new Map(),
        Ne = new Set(),
        nt = new Map(),
        mn = new Map(),
        Qd = new Map(),
        yl;
    function Kd() {
        if (
            ((m = e.history.listen((p) => {
                let { action: y, location: x, delta: P } = p;
                if (yl) {
                    yl(), (yl = void 0);
                    return;
                }
                pr(
                    mn.size === 0 || P != null,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
                );
                let D = Du({
                    currentLocation: g.location,
                    nextLocation: x,
                    historyAction: y,
                });
                if (D && P != null) {
                    let B = new Promise((V) => {
                        yl = V;
                    });
                    e.history.go(P * -1),
                        xl(D, {
                            state: "blocked",
                            location: x,
                            proceed() {
                                xl(D, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: x,
                                }),
                                    B.then(() => e.history.go(P));
                            },
                            reset() {
                                let V = new Map(g.blockers);
                                V.set(D, Lr), Oe({ blockers: V });
                            },
                        });
                    return;
                }
                return vn(y, x);
            })),
            n)
        ) {
            Ov(t, ye);
            let p = () => Fv(t, ye);
            t.addEventListener("pagehide", p),
                (pe = () => t.removeEventListener("pagehide", p));
        }
        return (
            g.initialized || vn(xe.Pop, g.location, { initialHydration: !0 }), O
        );
    }
    function Yd() {
        m && m(),
            pe && pe(),
            w.clear(),
            Q && Q.abort(),
            g.fetchers.forEach((p, y) => wl(y)),
            g.blockers.forEach((p, y) => zu(y));
    }
    function Xd(p) {
        return w.add(p), () => w.delete(p);
    }
    function Oe(p, y) {
        y === void 0 && (y = {}), (g = se({}, g, p));
        let x = [],
            P = [];
        f.v7_fetcherPersist &&
            g.fetchers.forEach((D, B) => {
                D.state === "idle" && (Ne.has(B) ? P.push(B) : x.push(B));
            }),
            [...w].forEach((D) =>
                D(g, {
                    deletedFetchers: P,
                    unstable_viewTransitionOpts: y.viewTransitionOpts,
                    unstable_flushSync: y.flushSync === !0,
                }),
            ),
            f.v7_fetcherPersist &&
                (x.forEach((D) => g.fetchers.delete(D)),
                P.forEach((D) => wl(D)));
    }
    function Fn(p, y, x) {
        var P, D;
        let { flushSync: B } = x === void 0 ? {} : x,
            V =
                g.actionData != null &&
                g.navigation.formMethod != null &&
                pt(g.navigation.formMethod) &&
                g.navigation.state === "loading" &&
                ((P = p.state) == null ? void 0 : P._isRedirect) !== !0,
            T;
        y.actionData
            ? Object.keys(y.actionData).length > 0
                ? (T = y.actionData)
                : (T = null)
            : V
              ? (T = g.actionData)
              : (T = null);
        let H = y.loaderData
                ? rc(g.loaderData, y.loaderData, y.matches || [], y.errors)
                : g.loaderData,
            U = g.blockers;
        U.size > 0 && ((U = new Map(U)), U.forEach((q, ie) => U.set(ie, Lr)));
        let A =
            F === !0 ||
            (g.navigation.formMethod != null &&
                pt(g.navigation.formMethod) &&
                ((D = p.state) == null ? void 0 : D._isRedirect) !== !0);
        a && ((o = a), (a = void 0)),
            yt ||
                $ === xe.Pop ||
                ($ === xe.Push
                    ? e.history.push(p, p.state)
                    : $ === xe.Replace && e.history.replace(p, p.state));
        let Z;
        if ($ === xe.Pop) {
            let q = ye.get(g.location.pathname);
            q && q.has(p.pathname)
                ? (Z = { currentLocation: g.location, nextLocation: p })
                : ye.has(p.pathname) &&
                  (Z = { currentLocation: p, nextLocation: g.location });
        } else if (te) {
            let q = ye.get(g.location.pathname);
            q
                ? q.add(p.pathname)
                : ((q = new Set([p.pathname])), ye.set(g.location.pathname, q)),
                (Z = { currentLocation: g.location, nextLocation: p });
        }
        Oe(
            se({}, y, {
                actionData: T,
                loaderData: H,
                historyAction: $,
                location: p,
                initialized: !0,
                navigation: No,
                revalidation: "idle",
                restoreScrollPosition: Ou(p, y.matches || g.matches),
                preventScrollReset: A,
                blockers: U,
            }),
            { viewTransitionOpts: Z, flushSync: B === !0 },
        ),
            ($ = xe.Pop),
            (F = !1),
            (te = !1),
            (yt = !1),
            (st = !1),
            (Bt = []);
    }
    async function Pu(p, y) {
        if (typeof p == "number") {
            e.history.go(p);
            return;
        }
        let x = Sa(
                g.location,
                g.matches,
                u,
                f.v7_prependBasename,
                p,
                f.v7_relativeSplatPath,
                y == null ? void 0 : y.fromRouteId,
                y == null ? void 0 : y.relative,
            ),
            {
                path: P,
                submission: D,
                error: B,
            } = Zs(f.v7_normalizeFormMethod, !1, x, y),
            V = g.location,
            T = sl(g.location, P, y && y.state);
        T = se({}, T, e.history.encodeLocation(T));
        let H = y && y.replace != null ? y.replace : void 0,
            U = xe.Push;
        H === !0
            ? (U = xe.Replace)
            : H === !1 ||
              (D != null &&
                  pt(D.formMethod) &&
                  D.formAction === g.location.pathname + g.location.search &&
                  (U = xe.Replace));
        let A =
                y && "preventScrollReset" in y
                    ? y.preventScrollReset === !0
                    : void 0,
            Z = (y && y.unstable_flushSync) === !0,
            q = Du({ currentLocation: V, nextLocation: T, historyAction: U });
        if (q) {
            xl(q, {
                state: "blocked",
                location: T,
                proceed() {
                    xl(q, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: T,
                    }),
                        Pu(p, y);
                },
                reset() {
                    let ie = new Map(g.blockers);
                    ie.set(q, Lr), Oe({ blockers: ie });
                },
            });
            return;
        }
        return await vn(U, T, {
            submission: D,
            pendingError: B,
            preventScrollReset: A,
            replace: y && y.replace,
            enableViewTransition: y && y.unstable_viewTransition,
            flushSync: Z,
        });
    }
    function Gd() {
        if (
            (Ji(),
            Oe({ revalidation: "loading" }),
            g.navigation.state !== "submitting")
        ) {
            if (g.navigation.state === "idle") {
                vn(g.historyAction, g.location, {
                    startUninterruptedRevalidation: !0,
                });
                return;
            }
            vn($ || g.historyAction, g.navigation.location, {
                overrideNavigation: g.navigation,
                enableViewTransition: te === !0,
            });
        }
    }
    async function vn(p, y, x) {
        Q && Q.abort(),
            (Q = null),
            ($ = p),
            (yt = (x && x.startUninterruptedRevalidation) === !0),
            ip(g.location, g.matches),
            (F = (x && x.preventScrollReset) === !0),
            (te = (x && x.enableViewTransition) === !0);
        let P = a || o,
            D = x && x.overrideNavigation,
            B = xn(P, y, u),
            V = (x && x.flushSync) === !0,
            T = El(B, P, y.pathname);
        if ((T.active && T.matches && (B = T.matches), !B)) {
            let { error: G, notFoundMatches: Ce, route: we } = Zi(y.pathname);
            Fn(
                y,
                { matches: Ce, loaderData: {}, errors: { [we.id]: G } },
                { flushSync: V },
            );
            return;
        }
        if (
            g.initialized &&
            !st &&
            _v(g.location, y) &&
            !(x && x.submission && pt(x.submission.formMethod))
        ) {
            Fn(y, { matches: B }, { flushSync: V });
            return;
        }
        Q = new AbortController();
        let H = An(e.history, y, Q.signal, x && x.submission),
            U;
        if (x && x.pendingError)
            U = [qn(B).route.id, { type: ee.error, error: x.pendingError }];
        else if (x && x.submission && pt(x.submission.formMethod)) {
            let G = await Jd(H, y, x.submission, B, T.active, {
                replace: x.replace,
                flushSync: V,
            });
            if (G.shortCircuited) return;
            if (G.pendingActionResult) {
                let [Ce, we] = G.pendingActionResult;
                if (Je(we) && Xi(we.error) && we.error.status === 404) {
                    (Q = null),
                        Fn(y, {
                            matches: G.matches,
                            loaderData: {},
                            errors: { [Ce]: we.error },
                        });
                    return;
                }
            }
            (B = G.matches || B),
                (U = G.pendingActionResult),
                (D = Ro(y, x.submission)),
                (V = !1),
                (T.active = !1),
                (H = An(e.history, H.url, H.signal));
        }
        let {
            shortCircuited: A,
            matches: Z,
            loaderData: q,
            errors: ie,
        } = await Zd(
            H,
            y,
            B,
            T.active,
            D,
            x && x.submission,
            x && x.fetcherSubmission,
            x && x.replace,
            x && x.initialHydration === !0,
            V,
            U,
        );
        A ||
            ((Q = null),
            Fn(
                y,
                se({ matches: Z || B }, lc(U), { loaderData: q, errors: ie }),
            ));
    }
    async function Jd(p, y, x, P, D, B) {
        B === void 0 && (B = {}), Ji();
        let V = Dv(y, x);
        if ((Oe({ navigation: V }, { flushSync: B.flushSync === !0 }), D)) {
            let U = await kl(P, y.pathname, p.signal);
            if (U.type === "aborted") return { shortCircuited: !0 };
            if (U.type === "error") {
                let { boundaryId: A, error: Z } = Sl(y.pathname, U);
                return {
                    matches: U.partialMatches,
                    pendingActionResult: [A, { type: ee.error, error: Z }],
                };
            } else if (U.matches) P = U.matches;
            else {
                let { notFoundMatches: A, error: Z, route: q } = Zi(y.pathname);
                return {
                    matches: A,
                    pendingActionResult: [q.id, { type: ee.error, error: Z }],
                };
            }
        }
        let T,
            H = Fr(P, y);
        if (!H.route.action && !H.route.lazy)
            T = {
                type: ee.error,
                error: Fe(405, {
                    method: p.method,
                    pathname: y.pathname,
                    routeId: H.route.id,
                }),
            };
        else if (
            ((T = (await wr("action", g, p, [H], P, null))[H.route.id]),
            p.signal.aborted)
        )
            return { shortCircuited: !0 };
        if (Cn(T)) {
            let U;
            return (
                B && B.replace != null
                    ? (U = B.replace)
                    : (U =
                          ec(
                              T.response.headers.get("Location"),
                              new URL(p.url),
                              u,
                          ) ===
                          g.location.pathname + g.location.search),
                await gn(p, T, !0, { submission: x, replace: U }),
                { shortCircuited: !0 }
            );
        }
        if (qt(T)) throw Fe(400, { type: "defer-action" });
        if (Je(T)) {
            let U = qn(P, H.route.id);
            return (
                (B && B.replace) !== !0 && ($ = xe.Push),
                { matches: P, pendingActionResult: [U.route.id, T] }
            );
        }
        return { matches: P, pendingActionResult: [H.route.id, T] };
    }
    async function Zd(p, y, x, P, D, B, V, T, H, U, A) {
        let Z = D || Ro(y, B),
            q = B || V || ac(Z),
            ie = !yt && (!f.v7_partialHydration || !H);
        if (P) {
            if (ie) {
                let he = _u(A);
                Oe(
                    se(
                        { navigation: Z },
                        he !== void 0 ? { actionData: he } : {},
                    ),
                    { flushSync: U },
                );
            }
            let K = await kl(x, y.pathname, p.signal);
            if (K.type === "aborted") return { shortCircuited: !0 };
            if (K.type === "error") {
                let { boundaryId: he, error: Xe } = Sl(y.pathname, K);
                return {
                    matches: K.partialMatches,
                    loaderData: {},
                    errors: { [he]: Xe },
                };
            } else if (K.matches) x = K.matches;
            else {
                let {
                    error: he,
                    notFoundMatches: Xe,
                    route: me,
                } = Zi(y.pathname);
                return { matches: Xe, loaderData: {}, errors: { [me.id]: he } };
            }
        }
        let G = a || o,
            [Ce, we] = qs(
                e.history,
                g,
                x,
                q,
                y,
                f.v7_partialHydration && H === !0,
                f.v7_skipActionErrorRevalidation,
                st,
                Bt,
                z,
                Ne,
                He,
                $e,
                G,
                u,
                A,
            );
        if (
            (qi(
                (K) =>
                    !(x && x.some((he) => he.route.id === K)) ||
                    (Ce && Ce.some((he) => he.route.id === K)),
            ),
            (ne = ++W),
            Ce.length === 0 && we.length === 0)
        ) {
            let K = Tu();
            return (
                Fn(
                    y,
                    se(
                        {
                            matches: x,
                            loaderData: {},
                            errors:
                                A && Je(A[1]) ? { [A[0]]: A[1].error } : null,
                        },
                        lc(A),
                        K ? { fetchers: new Map(g.fetchers) } : {},
                    ),
                    { flushSync: U },
                ),
                { shortCircuited: !0 }
            );
        }
        if (ie) {
            let K = {};
            if (!P) {
                K.navigation = Z;
                let he = _u(A);
                he !== void 0 && (K.actionData = he);
            }
            we.length > 0 && (K.fetchers = qd(we)), Oe(K, { flushSync: U });
        }
        we.forEach((K) => {
            I.has(K.key) && Ht(K.key),
                K.controller && I.set(K.key, K.controller);
        });
        let xr = () => we.forEach((K) => Ht(K.key));
        Q && Q.signal.addEventListener("abort", xr);
        let { loaderResults: _t, fetcherResults: In } = await Nu(
            g,
            x,
            Ce,
            we,
            p,
        );
        if (p.signal.aborted) return { shortCircuited: !0 };
        Q && Q.signal.removeEventListener("abort", xr),
            we.forEach((K) => I.delete(K.key));
        let Vt = Ql(_t);
        if (Vt)
            return (
                await gn(p, Vt.result, !0, { replace: T }),
                { shortCircuited: !0 }
            );
        if (((Vt = Ql(In)), Vt))
            return (
                $e.add(Vt.key),
                await gn(p, Vt.result, !0, { replace: T }),
                { shortCircuited: !0 }
            );
        let { loaderData: Cl, errors: Nt } = nc(g, x, Ce, _t, A, we, In, nt);
        nt.forEach((K, he) => {
            K.subscribe((Xe) => {
                (Xe || K.done) && nt.delete(he);
            });
        }),
            f.v7_partialHydration &&
                H &&
                g.errors &&
                Object.entries(g.errors)
                    .filter((K) => {
                        let [he] = K;
                        return !Ce.some((Xe) => Xe.route.id === he);
                    })
                    .forEach((K) => {
                        let [he, Xe] = K;
                        Nt = Object.assign(Nt || {}, { [he]: Xe });
                    });
        let Pl = Tu(),
            _l = ju(ne),
            Nl = Pl || _l || we.length > 0;
        return se(
            { matches: x, loaderData: Cl, errors: Nt },
            Nl ? { fetchers: new Map(g.fetchers) } : {},
        );
    }
    function _u(p) {
        if (p && !Je(p[1])) return { [p[0]]: p[1].data };
        if (g.actionData)
            return Object.keys(g.actionData).length === 0 ? null : g.actionData;
    }
    function qd(p) {
        return (
            p.forEach((y) => {
                let x = g.fetchers.get(y.key),
                    P = Tr(void 0, x ? x.data : void 0);
                g.fetchers.set(y.key, P);
            }),
            new Map(g.fetchers)
        );
    }
    function bd(p, y, x, P) {
        if (r)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
            );
        I.has(p) && Ht(p);
        let D = (P && P.unstable_flushSync) === !0,
            B = a || o,
            V = Sa(
                g.location,
                g.matches,
                u,
                f.v7_prependBasename,
                x,
                f.v7_relativeSplatPath,
                y,
                P == null ? void 0 : P.relative,
            ),
            T = xn(B, V, u),
            H = El(T, B, V);
        if ((H.active && H.matches && (T = H.matches), !T)) {
            Pt(p, y, Fe(404, { pathname: V }), { flushSync: D });
            return;
        }
        let {
            path: U,
            submission: A,
            error: Z,
        } = Zs(f.v7_normalizeFormMethod, !0, V, P);
        if (Z) {
            Pt(p, y, Z, { flushSync: D });
            return;
        }
        let q = Fr(T, U);
        if (((F = (P && P.preventScrollReset) === !0), A && pt(A.formMethod))) {
            ep(p, y, U, q, T, H.active, D, A);
            return;
        }
        He.set(p, { routeId: y, path: U }), tp(p, y, U, q, T, H.active, D, A);
    }
    async function ep(p, y, x, P, D, B, V, T) {
        Ji(), He.delete(p);
        function H(me) {
            if (!me.route.action && !me.route.lazy) {
                let Rt = Fe(405, {
                    method: T.formMethod,
                    pathname: x,
                    routeId: y,
                });
                return Pt(p, y, Rt, { flushSync: V }), !0;
            }
            return !1;
        }
        if (!B && H(P)) return;
        let U = g.fetchers.get(p);
        $t(p, Mv(T, U), { flushSync: V });
        let A = new AbortController(),
            Z = An(e.history, x, A.signal, T);
        if (B) {
            let me = await kl(D, x, Z.signal);
            if (me.type === "aborted") return;
            if (me.type === "error") {
                let { error: Rt } = Sl(x, me);
                Pt(p, y, Rt, { flushSync: V });
                return;
            } else if (me.matches) {
                if (((D = me.matches), (P = Fr(D, x)), H(P))) return;
            } else {
                Pt(p, y, Fe(404, { pathname: x }), { flushSync: V });
                return;
            }
        }
        I.set(p, A);
        let q = W,
            G = (await wr("action", g, Z, [P], D, p))[P.route.id];
        if (Z.signal.aborted) {
            I.get(p) === A && I.delete(p);
            return;
        }
        if (f.v7_fetcherPersist && Ne.has(p)) {
            if (Cn(G) || Je(G)) {
                $t(p, Qt(void 0));
                return;
            }
        } else {
            if (Cn(G))
                if ((I.delete(p), ne > q)) {
                    $t(p, Qt(void 0));
                    return;
                } else
                    return (
                        $e.add(p),
                        $t(p, Tr(T)),
                        gn(Z, G, !1, { fetcherSubmission: T })
                    );
            if (Je(G)) {
                Pt(p, y, G.error);
                return;
            }
        }
        if (qt(G)) throw Fe(400, { type: "defer-action" });
        let Ce = g.navigation.location || g.location,
            we = An(e.history, Ce, A.signal),
            xr = a || o,
            _t =
                g.navigation.state !== "idle"
                    ? xn(xr, g.navigation.location, u)
                    : g.matches;
        Y(_t, "Didn't find any matches after fetcher action");
        let In = ++W;
        le.set(p, In);
        let Vt = Tr(T, G.data);
        g.fetchers.set(p, Vt);
        let [Cl, Nt] = qs(
            e.history,
            g,
            _t,
            T,
            Ce,
            !1,
            f.v7_skipActionErrorRevalidation,
            st,
            Bt,
            z,
            Ne,
            He,
            $e,
            xr,
            u,
            [P.route.id, G],
        );
        Nt.filter((me) => me.key !== p).forEach((me) => {
            let Rt = me.key,
                Iu = g.fetchers.get(Rt),
                up = Tr(void 0, Iu ? Iu.data : void 0);
            g.fetchers.set(Rt, up),
                I.has(Rt) && Ht(Rt),
                me.controller && I.set(Rt, me.controller);
        }),
            Oe({ fetchers: new Map(g.fetchers) });
        let Pl = () => Nt.forEach((me) => Ht(me.key));
        A.signal.addEventListener("abort", Pl);
        let { loaderResults: _l, fetcherResults: Nl } = await Nu(
            g,
            _t,
            Cl,
            Nt,
            we,
        );
        if (A.signal.aborted) return;
        A.signal.removeEventListener("abort", Pl),
            le.delete(p),
            I.delete(p),
            Nt.forEach((me) => I.delete(me.key));
        let K = Ql(_l);
        if (K) return gn(we, K.result, !1);
        if (((K = Ql(Nl)), K)) return $e.add(K.key), gn(we, K.result, !1);
        let { loaderData: he, errors: Xe } = nc(
            g,
            _t,
            Cl,
            _l,
            void 0,
            Nt,
            Nl,
            nt,
        );
        if (g.fetchers.has(p)) {
            let me = Qt(G.data);
            g.fetchers.set(p, me);
        }
        ju(In),
            g.navigation.state === "loading" && In > ne
                ? (Y($, "Expected pending action"),
                  Q && Q.abort(),
                  Fn(g.navigation.location, {
                      matches: _t,
                      loaderData: he,
                      errors: Xe,
                      fetchers: new Map(g.fetchers),
                  }))
                : (Oe({
                      errors: Xe,
                      loaderData: rc(g.loaderData, he, _t, Xe),
                      fetchers: new Map(g.fetchers),
                  }),
                  (st = !1));
    }
    async function tp(p, y, x, P, D, B, V, T) {
        let H = g.fetchers.get(p);
        $t(p, Tr(T, H ? H.data : void 0), { flushSync: V });
        let U = new AbortController(),
            A = An(e.history, x, U.signal);
        if (B) {
            let G = await kl(D, x, A.signal);
            if (G.type === "aborted") return;
            if (G.type === "error") {
                let { error: Ce } = Sl(x, G);
                Pt(p, y, Ce, { flushSync: V });
                return;
            } else if (G.matches) (D = G.matches), (P = Fr(D, x));
            else {
                Pt(p, y, Fe(404, { pathname: x }), { flushSync: V });
                return;
            }
        }
        I.set(p, U);
        let Z = W,
            ie = (await wr("loader", g, A, [P], D, p))[P.route.id];
        if (
            (qt(ie) && (ie = (await Eu(ie, A.signal, !0)) || ie),
            I.get(p) === U && I.delete(p),
            !A.signal.aborted)
        ) {
            if (Ne.has(p)) {
                $t(p, Qt(void 0));
                return;
            }
            if (Cn(ie))
                if (ne > Z) {
                    $t(p, Qt(void 0));
                    return;
                } else {
                    $e.add(p), await gn(A, ie, !1);
                    return;
                }
            if (Je(ie)) {
                Pt(p, y, ie.error);
                return;
            }
            Y(!qt(ie), "Unhandled fetcher deferred data"), $t(p, Qt(ie.data));
        }
    }
    async function gn(p, y, x, P) {
        let {
            submission: D,
            fetcherSubmission: B,
            replace: V,
        } = P === void 0 ? {} : P;
        y.response.headers.has("X-Remix-Revalidate") && (st = !0);
        let T = y.response.headers.get("Location");
        Y(T, "Expected a Location header on the redirect Response"),
            (T = ec(T, new URL(p.url), u));
        let H = sl(g.location, T, { _isRedirect: !0 });
        if (n) {
            let G = !1;
            if (y.response.headers.has("X-Remix-Reload-Document")) G = !0;
            else if (Su.test(T)) {
                const Ce = e.history.createURL(T);
                G =
                    Ce.origin !== t.location.origin ||
                    gr(Ce.pathname, u) == null;
            }
            if (G) {
                V ? t.location.replace(T) : t.location.assign(T);
                return;
            }
        }
        Q = null;
        let U =
                V === !0 || y.response.headers.has("X-Remix-Replace")
                    ? xe.Replace
                    : xe.Push,
            { formMethod: A, formAction: Z, formEncType: q } = g.navigation;
        !D && !B && A && Z && q && (D = ac(g.navigation));
        let ie = D || B;
        if (fv.has(y.response.status) && ie && pt(ie.formMethod))
            await vn(U, H, {
                submission: se({}, ie, { formAction: T }),
                preventScrollReset: F,
                enableViewTransition: x ? te : void 0,
            });
        else {
            let G = Ro(H, D);
            await vn(U, H, {
                overrideNavigation: G,
                fetcherSubmission: B,
                preventScrollReset: F,
                enableViewTransition: x ? te : void 0,
            });
        }
    }
    async function wr(p, y, x, P, D, B) {
        let V,
            T = {};
        try {
            V = await Sv(s, p, y, x, P, D, B, i, l);
        } catch (H) {
            return (
                P.forEach((U) => {
                    T[U.route.id] = { type: ee.error, error: H };
                }),
                T
            );
        }
        for (let [H, U] of Object.entries(V))
            if (Rv(U)) {
                let A = U.result;
                T[H] = {
                    type: ee.redirect,
                    response: Cv(A, x, H, D, u, f.v7_relativeSplatPath),
                };
            } else T[H] = await kv(U);
        return T;
    }
    async function Nu(p, y, x, P, D) {
        let B = p.matches,
            V = wr("loader", p, D, x, y, null),
            T = Promise.all(
                P.map(async (A) => {
                    if (A.matches && A.match && A.controller) {
                        let q = (
                            await wr(
                                "loader",
                                p,
                                An(e.history, A.path, A.controller.signal),
                                [A.match],
                                A.matches,
                                A.key,
                            )
                        )[A.match.route.id];
                        return { [A.key]: q };
                    } else
                        return Promise.resolve({
                            [A.key]: {
                                type: ee.error,
                                error: Fe(404, { pathname: A.path }),
                            },
                        });
                }),
            ),
            H = await V,
            U = (await T).reduce((A, Z) => Object.assign(A, Z), {});
        return (
            await Promise.all([
                jv(y, H, D.signal, B, p.loaderData),
                zv(y, U, P),
            ]),
            { loaderResults: H, fetcherResults: U }
        );
    }
    function Ji() {
        (st = !0),
            Bt.push(...qi()),
            He.forEach((p, y) => {
                I.has(y) && (z.add(y), Ht(y));
            });
    }
    function $t(p, y, x) {
        x === void 0 && (x = {}),
            g.fetchers.set(p, y),
            Oe(
                { fetchers: new Map(g.fetchers) },
                { flushSync: (x && x.flushSync) === !0 },
            );
    }
    function Pt(p, y, x, P) {
        P === void 0 && (P = {});
        let D = qn(g.matches, y);
        wl(p),
            Oe(
                { errors: { [D.route.id]: x }, fetchers: new Map(g.fetchers) },
                { flushSync: (P && P.flushSync) === !0 },
            );
    }
    function Ru(p) {
        return (
            f.v7_fetcherPersist &&
                (Ct.set(p, (Ct.get(p) || 0) + 1), Ne.has(p) && Ne.delete(p)),
            g.fetchers.get(p) || dv
        );
    }
    function wl(p) {
        let y = g.fetchers.get(p);
        I.has(p) && !(y && y.state === "loading" && le.has(p)) && Ht(p),
            He.delete(p),
            le.delete(p),
            $e.delete(p),
            Ne.delete(p),
            z.delete(p),
            g.fetchers.delete(p);
    }
    function np(p) {
        if (f.v7_fetcherPersist) {
            let y = (Ct.get(p) || 0) - 1;
            y <= 0 ? (Ct.delete(p), Ne.add(p)) : Ct.set(p, y);
        } else wl(p);
        Oe({ fetchers: new Map(g.fetchers) });
    }
    function Ht(p) {
        let y = I.get(p);
        Y(y, "Expected fetch controller: " + p), y.abort(), I.delete(p);
    }
    function Lu(p) {
        for (let y of p) {
            let x = Ru(y),
                P = Qt(x.data);
            g.fetchers.set(y, P);
        }
    }
    function Tu() {
        let p = [],
            y = !1;
        for (let x of $e) {
            let P = g.fetchers.get(x);
            Y(P, "Expected fetcher: " + x),
                P.state === "loading" && ($e.delete(x), p.push(x), (y = !0));
        }
        return Lu(p), y;
    }
    function ju(p) {
        let y = [];
        for (let [x, P] of le)
            if (P < p) {
                let D = g.fetchers.get(x);
                Y(D, "Expected fetcher: " + x),
                    D.state === "loading" && (Ht(x), le.delete(x), y.push(x));
            }
        return Lu(y), y.length > 0;
    }
    function rp(p, y) {
        let x = g.blockers.get(p) || Lr;
        return mn.get(p) !== y && mn.set(p, y), x;
    }
    function zu(p) {
        g.blockers.delete(p), mn.delete(p);
    }
    function xl(p, y) {
        let x = g.blockers.get(p) || Lr;
        Y(
            (x.state === "unblocked" && y.state === "blocked") ||
                (x.state === "blocked" && y.state === "blocked") ||
                (x.state === "blocked" && y.state === "proceeding") ||
                (x.state === "blocked" && y.state === "unblocked") ||
                (x.state === "proceeding" && y.state === "unblocked"),
            "Invalid blocker state transition: " + x.state + " -> " + y.state,
        );
        let P = new Map(g.blockers);
        P.set(p, y), Oe({ blockers: P });
    }
    function Du(p) {
        let { currentLocation: y, nextLocation: x, historyAction: P } = p;
        if (mn.size === 0) return;
        mn.size > 1 && pr(!1, "A router only supports one blocker at a time");
        let D = Array.from(mn.entries()),
            [B, V] = D[D.length - 1],
            T = g.blockers.get(B);
        if (
            !(T && T.state === "proceeding") &&
            V({ currentLocation: y, nextLocation: x, historyAction: P })
        )
            return B;
    }
    function Zi(p) {
        let y = Fe(404, { pathname: p }),
            x = a || o,
            { matches: P, route: D } = ic(x);
        return qi(), { notFoundMatches: P, route: D, error: y };
    }
    function Sl(p, y) {
        return {
            boundaryId: qn(y.partialMatches).route.id,
            error: Fe(400, {
                type: "route-discovery",
                pathname: p,
                message:
                    y.error != null && "message" in y.error
                        ? y.error
                        : String(y.error),
            }),
        };
    }
    function qi(p) {
        let y = [];
        return (
            nt.forEach((x, P) => {
                (!p || p(P)) && (x.cancel(), y.push(P), nt.delete(P));
            }),
            y
        );
    }
    function lp(p, y, x) {
        if (((L = p), (c = y), (h = x || null), !v && g.navigation === No)) {
            v = !0;
            let P = Ou(g.location, g.matches);
            P != null && Oe({ restoreScrollPosition: P });
        }
        return () => {
            (L = null), (c = null), (h = null);
        };
    }
    function Mu(p, y) {
        return (
            (h &&
                h(
                    p,
                    y.map((P) => Vm(P, g.loaderData)),
                )) ||
            p.key
        );
    }
    function ip(p, y) {
        if (L && c) {
            let x = Mu(p, y);
            L[x] = c();
        }
    }
    function Ou(p, y) {
        if (L) {
            let x = Mu(p, y),
                P = L[x];
            if (typeof P == "number") return P;
        }
        return null;
    }
    function El(p, y, x) {
        if (d) {
            if (S.has(x)) return { active: !1, matches: p };
            if (p) {
                if (Object.keys(p[0].params).length > 0)
                    return { active: !0, matches: li(y, x, u, !0) };
            } else return { active: !0, matches: li(y, x, u, !0) || [] };
        }
        return { active: !1, matches: null };
    }
    async function kl(p, y, x) {
        let P = p;
        for (;;) {
            let D = a == null,
                B = a || o;
            try {
                await yv(d, y, P, B, i, l, Qd, x);
            } catch (H) {
                return { type: "error", error: H, partialMatches: P };
            } finally {
                D && (o = [...o]);
            }
            if (x.aborted) return { type: "aborted" };
            let V = xn(B, y, u);
            if (V) return Fu(y, S), { type: "success", matches: V };
            let T = li(B, y, u, !0);
            if (
                !T ||
                (P.length === T.length &&
                    P.every((H, U) => H.route.id === T[U].route.id))
            )
                return Fu(y, S), { type: "success", matches: null };
            P = T;
        }
    }
    function Fu(p, y) {
        if (y.size >= k) {
            let x = y.values().next().value;
            y.delete(x);
        }
        y.add(p);
    }
    function op(p) {
        (i = {}), (a = cl(p, l, void 0, i));
    }
    function ap(p, y) {
        let x = a == null;
        Od(p, y, a || o, i, l), x && ((o = [...o]), Oe({}));
    }
    return (
        (O = {
            get basename() {
                return u;
            },
            get future() {
                return f;
            },
            get state() {
                return g;
            },
            get routes() {
                return o;
            },
            get window() {
                return t;
            },
            initialize: Kd,
            subscribe: Xd,
            enableScrollRestoration: lp,
            navigate: Pu,
            fetch: bd,
            revalidate: Gd,
            createHref: (p) => e.history.createHref(p),
            encodeLocation: (p) => e.history.encodeLocation(p),
            getFetcher: Ru,
            deleteFetcher: np,
            dispose: Yd,
            getBlocker: rp,
            deleteBlocker: zu,
            patchRoutes: ap,
            _internalFetchControllers: I,
            _internalActiveDeferreds: nt,
            _internalSetRoutes: op,
        }),
        O
    );
}
function mv(e) {
    return (
        e != null &&
        (("formData" in e && e.formData != null) ||
            ("body" in e && e.body !== void 0))
    );
}
function Sa(e, t, n, r, l, i, o, a) {
    let u, s;
    if (o) {
        u = [];
        for (let f of t)
            if ((u.push(f), f.route.id === o)) {
                s = f;
                break;
            }
    } else (u = t), (s = t[t.length - 1]);
    let d = xu(
        l || ".",
        wu(u, i),
        gr(e.pathname, n) || e.pathname,
        a === "path",
    );
    return (
        l == null && ((d.search = e.search), (d.hash = e.hash)),
        (l == null || l === "" || l === ".") &&
            s &&
            s.route.index &&
            !ku(d.search) &&
            (d.search = d.search
                ? d.search.replace(/^\?/, "?index&")
                : "?index"),
        r &&
            n !== "/" &&
            (d.pathname = d.pathname === "/" ? n : Mt([n, d.pathname])),
        zn(d)
    );
}
function Zs(e, t, n, r) {
    if (!r || !mv(r)) return { path: n };
    if (r.formMethod && !Tv(r.formMethod))
        return { path: n, error: Fe(405, { method: r.formMethod }) };
    let l = () => ({ path: n, error: Fe(400, { type: "invalid-body" }) }),
        i = r.formMethod || "get",
        o = e ? i.toUpperCase() : i.toLowerCase(),
        a = Fd(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!pt(o)) return l();
            let m =
                typeof r.body == "string"
                    ? r.body
                    : r.body instanceof FormData ||
                        r.body instanceof URLSearchParams
                      ? Array.from(r.body.entries()).reduce((w, k) => {
                            let [S, L] = k;
                            return (
                                "" +
                                w +
                                S +
                                "=" +
                                L +
                                `
`
                            );
                        }, "")
                      : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: m,
                },
            };
        } else if (r.formEncType === "application/json") {
            if (!pt(o)) return l();
            try {
                let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: m,
                        text: void 0,
                    },
                };
            } catch {
                return l();
            }
        }
    }
    Y(
        typeof FormData == "function",
        "FormData is not available in this environment",
    );
    let u, s;
    if (r.formData) (u = Ea(r.formData)), (s = r.formData);
    else if (r.body instanceof FormData) (u = Ea(r.body)), (s = r.body);
    else if (r.body instanceof URLSearchParams) (u = r.body), (s = tc(u));
    else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
    else
        try {
            (u = new URLSearchParams(r.body)), (s = tc(u));
        } catch {
            return l();
        }
    let d = {
        formMethod: o,
        formAction: a,
        formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0,
    };
    if (pt(d.formMethod)) return { path: n, submission: d };
    let f = pn(n);
    return (
        t && f.search && ku(f.search) && u.append("index", ""),
        (f.search = "?" + u),
        { path: zn(f), submission: d }
    );
}
function vv(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((l) => l.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}
function qs(e, t, n, r, l, i, o, a, u, s, d, f, m, w, k, S) {
    let L = S ? (Je(S[1]) ? S[1].error : S[1].data) : void 0,
        h = e.createURL(t.location),
        c = e.createURL(l),
        v = S && Je(S[1]) ? S[0] : void 0,
        E = v ? vv(n, v) : n,
        R = S ? S[1].statusCode : void 0,
        j = o && R && R >= 400,
        O = E.filter(($, F) => {
            let { route: Q } = $;
            if (Q.lazy) return !0;
            if (Q.loader == null) return !1;
            if (i)
                return typeof Q.loader != "function" || Q.loader.hydrate
                    ? !0
                    : t.loaderData[Q.id] === void 0 &&
                          (!t.errors || t.errors[Q.id] === void 0);
            if (
                gv(t.loaderData, t.matches[F], $) ||
                u.some((pe) => pe === $.route.id)
            )
                return !0;
            let te = t.matches[F],
                ye = $;
            return bs(
                $,
                se(
                    {
                        currentUrl: h,
                        currentParams: te.params,
                        nextUrl: c,
                        nextParams: ye.params,
                    },
                    r,
                    {
                        actionResult: L,
                        actionStatus: R,
                        defaultShouldRevalidate: j
                            ? !1
                            : a ||
                              h.pathname + h.search === c.pathname + c.search ||
                              h.search !== c.search ||
                              Md(te, ye),
                    },
                ),
            );
        }),
        g = [];
    return (
        f.forEach(($, F) => {
            if (i || !n.some((yt) => yt.route.id === $.routeId) || d.has(F))
                return;
            let Q = xn(w, $.path, k);
            if (!Q) {
                g.push({
                    key: F,
                    routeId: $.routeId,
                    path: $.path,
                    matches: null,
                    match: null,
                    controller: null,
                });
                return;
            }
            let te = t.fetchers.get(F),
                ye = Fr(Q, $.path),
                pe = !1;
            m.has(F)
                ? (pe = !1)
                : s.has(F)
                  ? (s.delete(F), (pe = !0))
                  : te && te.state !== "idle" && te.data === void 0
                    ? (pe = a)
                    : (pe = bs(
                          ye,
                          se(
                              {
                                  currentUrl: h,
                                  currentParams:
                                      t.matches[t.matches.length - 1].params,
                                  nextUrl: c,
                                  nextParams: n[n.length - 1].params,
                              },
                              r,
                              {
                                  actionResult: L,
                                  actionStatus: R,
                                  defaultShouldRevalidate: j ? !1 : a,
                              },
                          ),
                      )),
                pe &&
                    g.push({
                        key: F,
                        routeId: $.routeId,
                        path: $.path,
                        matches: Q,
                        match: ye,
                        controller: new AbortController(),
                    });
        }),
        [O, g]
    );
}
function gv(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l;
}
function Md(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}
function bs(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n;
    }
    return t.defaultShouldRevalidate;
}
async function yv(e, t, n, r, l, i, o, a) {
    let u = [t, ...n.map((s) => s.route.id)].join("-");
    try {
        let s = o.get(u);
        s ||
            ((s = e({
                path: t,
                matches: n,
                patch: (d, f) => {
                    a.aborted || Od(d, f, r, l, i);
                },
            })),
            o.set(u, s)),
            s && Nv(s) && (await s);
    } finally {
        o.delete(u);
    }
}
function Od(e, t, n, r, l) {
    if (e) {
        var i;
        let o = r[e];
        Y(o, "No route found to patch children into: routeId = " + e);
        let a = cl(
            t,
            l,
            [
                e,
                "patch",
                String(((i = o.children) == null ? void 0 : i.length) || "0"),
            ],
            r,
        );
        o.children ? o.children.push(...a) : (o.children = a);
    } else {
        let o = cl(t, l, ["patch", String(n.length || "0")], r);
        n.push(...o);
    }
}
async function wv(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    Y(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let u = l[o] !== void 0 && o !== "hasErrorBoundary";
        pr(
            !u,
            'Route "' +
                l.id +
                '" has a static property "' +
                o +
                '" defined but its lazy function is also returning a value for this property. ' +
                ('The lazy route property "' + o + '" will be ignored.'),
        ),
            !u && !$m.has(o) && (i[o] = r[o]);
    }
    Object.assign(l, i), Object.assign(l, se({}, t(l), { lazy: void 0 }));
}
async function xv(e) {
    let { matches: t } = e,
        n = t.filter((l) => l.shouldLoad);
    return (await Promise.all(n.map((l) => l.resolve()))).reduce(
        (l, i, o) => Object.assign(l, { [n[o].route.id]: i }),
        {},
    );
}
async function Sv(e, t, n, r, l, i, o, a, u, s) {
    let d = i.map((w) => (w.route.lazy ? wv(w.route, u, a) : void 0)),
        f = i.map((w, k) => {
            let S = d[k],
                L = l.some((c) => c.route.id === w.route.id);
            return se({}, w, {
                shouldLoad: L,
                resolve: async (c) => (
                    c &&
                        r.method === "GET" &&
                        (w.route.lazy || w.route.loader) &&
                        (L = !0),
                    L
                        ? Ev(t, r, w, S, c, s)
                        : Promise.resolve({ type: ee.data, result: void 0 })
                ),
            });
        }),
        m = await e({
            matches: f,
            request: r,
            params: i[0].params,
            fetcherKey: o,
            context: s,
        });
    try {
        await Promise.all(d);
    } catch {}
    return m;
}
async function Ev(e, t, n, r, l, i) {
    let o,
        a,
        u = (s) => {
            let d,
                f = new Promise((k, S) => (d = S));
            (a = () => d()), t.signal.addEventListener("abort", a);
            let m = (k) =>
                    typeof s != "function"
                        ? Promise.reject(
                              new Error(
                                  "You cannot call the handler for a route which defines a boolean " +
                                      ('"' +
                                          e +
                                          '" [routeId: ' +
                                          n.route.id +
                                          "]"),
                              ),
                          )
                        : s(
                              { request: t, params: n.params, context: i },
                              ...(k !== void 0 ? [k] : []),
                          ),
                w = (async () => {
                    try {
                        return {
                            type: "data",
                            result: await (l ? l((S) => m(S)) : m()),
                        };
                    } catch (k) {
                        return { type: "error", result: k };
                    }
                })();
            return Promise.race([w, f]);
        };
    try {
        let s = n.route[e];
        if (r)
            if (s) {
                let d,
                    [f] = await Promise.all([
                        u(s).catch((m) => {
                            d = m;
                        }),
                        r,
                    ]);
                if (d !== void 0) throw d;
                o = f;
            } else if ((await r, (s = n.route[e]), s)) o = await u(s);
            else if (e === "action") {
                let d = new URL(t.url),
                    f = d.pathname + d.search;
                throw Fe(405, {
                    method: t.method,
                    pathname: f,
                    routeId: n.route.id,
                });
            } else return { type: ee.data, result: void 0 };
        else if (s) o = await u(s);
        else {
            let d = new URL(t.url),
                f = d.pathname + d.search;
            throw Fe(404, { pathname: f });
        }
        Y(
            o.result !== void 0,
            "You defined " +
                (e === "action" ? "an action" : "a loader") +
                " for route " +
                ('"' +
                    n.route.id +
                    "\" but didn't return anything from your `" +
                    e +
                    "` ") +
                "function. Please return a value or `null`.",
        );
    } catch (s) {
        return { type: ee.error, result: s };
    } finally {
        a && t.signal.removeEventListener("abort", a);
    }
    return o;
}
async function kv(e) {
    let { result: t, type: n } = e;
    if (Id(t)) {
        let s;
        try {
            let d = t.headers.get("Content-Type");
            d && /\bapplication\/json\b/.test(d)
                ? t.body == null
                    ? (s = null)
                    : (s = await t.json())
                : (s = await t.text());
        } catch (d) {
            return { type: ee.error, error: d };
        }
        return n === ee.error
            ? {
                  type: ee.error,
                  error: new Li(t.status, t.statusText, s),
                  statusCode: t.status,
                  headers: t.headers,
              }
            : {
                  type: ee.data,
                  data: s,
                  statusCode: t.status,
                  headers: t.headers,
              };
    }
    if (n === ee.error) {
        if (oc(t)) {
            var r;
            if (t.data instanceof Error) {
                var l;
                return {
                    type: ee.error,
                    error: t.data,
                    statusCode: (l = t.init) == null ? void 0 : l.status,
                };
            }
            t = new Li(
                ((r = t.init) == null ? void 0 : r.status) || 500,
                void 0,
                t.data,
            );
        }
        return {
            type: ee.error,
            error: t,
            statusCode: Xi(t) ? t.status : void 0,
        };
    }
    if (Lv(t)) {
        var i, o;
        return {
            type: ee.deferred,
            deferredData: t,
            statusCode: (i = t.init) == null ? void 0 : i.status,
            headers:
                ((o = t.init) == null ? void 0 : o.headers) &&
                new Headers(t.init.headers),
        };
    }
    if (oc(t)) {
        var a, u;
        return {
            type: ee.data,
            data: t.data,
            statusCode: (a = t.init) == null ? void 0 : a.status,
            headers:
                (u = t.init) != null && u.headers
                    ? new Headers(t.init.headers)
                    : void 0,
        };
    }
    return { type: ee.data, data: t };
}
function Cv(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (
        (Y(
            o,
            "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !Su.test(o))
    ) {
        let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
        (o = Sa(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
    }
    return e;
}
function ec(e, t, n) {
    if (Su.test(e)) {
        let r = e,
            l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            i = gr(l.pathname, n) != null;
        if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
    }
    return e;
}
function An(e, t, n, r) {
    let l = e.createURL(Fd(t)).toString(),
        i = { signal: n };
    if (r && pt(r.formMethod)) {
        let { formMethod: o, formEncType: a } = r;
        (i.method = o.toUpperCase()),
            a === "application/json"
                ? ((i.headers = new Headers({ "Content-Type": a })),
                  (i.body = JSON.stringify(r.json)))
                : a === "text/plain"
                  ? (i.body = r.text)
                  : a === "application/x-www-form-urlencoded" && r.formData
                    ? (i.body = Ea(r.formData))
                    : (i.body = r.formData);
    }
    return new Request(l, i);
}
function Ea(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t;
}
function tc(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
}
function Pv(e, t, n, r, l) {
    let i = {},
        o = null,
        a,
        u = !1,
        s = {},
        d = n && Je(n[1]) ? n[1].error : void 0;
    return (
        e.forEach((f) => {
            if (!(f.route.id in t)) return;
            let m = f.route.id,
                w = t[m];
            if (
                (Y(
                    !Cn(w),
                    "Cannot handle redirect results in processLoaderData",
                ),
                Je(w))
            ) {
                let k = w.error;
                d !== void 0 && ((k = d), (d = void 0)), (o = o || {});
                {
                    let S = qn(e, m);
                    o[S.route.id] == null && (o[S.route.id] = k);
                }
                (i[m] = void 0),
                    u || ((u = !0), (a = Xi(w.error) ? w.error.status : 500)),
                    w.headers && (s[m] = w.headers);
            } else
                qt(w)
                    ? (r.set(m, w.deferredData),
                      (i[m] = w.deferredData.data),
                      w.statusCode != null &&
                          w.statusCode !== 200 &&
                          !u &&
                          (a = w.statusCode),
                      w.headers && (s[m] = w.headers))
                    : ((i[m] = w.data),
                      w.statusCode &&
                          w.statusCode !== 200 &&
                          !u &&
                          (a = w.statusCode),
                      w.headers && (s[m] = w.headers));
        }),
        d !== void 0 && n && ((o = { [n[0]]: d }), (i[n[0]] = void 0)),
        { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
    );
}
function nc(e, t, n, r, l, i, o, a) {
    let { loaderData: u, errors: s } = Pv(t, r, l, a);
    return (
        i.forEach((d) => {
            let { key: f, match: m, controller: w } = d,
                k = o[f];
            if (
                (Y(k, "Did not find corresponding fetcher result"),
                !(w && w.signal.aborted))
            )
                if (Je(k)) {
                    let S = qn(e.matches, m == null ? void 0 : m.route.id);
                    (s && s[S.route.id]) ||
                        (s = se({}, s, { [S.route.id]: k.error })),
                        e.fetchers.delete(f);
                } else if (Cn(k))
                    Y(!1, "Unhandled fetcher revalidation redirect");
                else if (qt(k)) Y(!1, "Unhandled fetcher deferred data");
                else {
                    let S = Qt(k.data);
                    e.fetchers.set(f, S);
                }
        }),
        { loaderData: u, errors: s }
    );
}
function rc(e, t, n, r) {
    let l = se({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (
            (t.hasOwnProperty(o)
                ? t[o] !== void 0 && (l[o] = t[o])
                : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
            r && r.hasOwnProperty(o))
        )
            break;
    }
    return l;
}
function lc(e) {
    return e
        ? Je(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
        : {};
}
function qn(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}
function ic(e) {
    let t =
        e.length === 1
            ? e[0]
            : e.find((n) => n.index || !n.path || n.path === "/") || {
                  id: "__shim-error-route__",
              };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}
function Fe(e, t) {
    let {
            pathname: n,
            routeId: r,
            method: l,
            type: i,
            message: o,
        } = t === void 0 ? {} : t,
        a = "Unknown Server Error",
        u = "Unknown @remix-run/router error";
    return (
        e === 400
            ? ((a = "Bad Request"),
              i === "route-discovery"
                  ? (u =
                        'Unable to match URL "' +
                        n +
                        '" - the `unstable_patchRoutesOnNavigation()` ' +
                        (`function threw the following error:
` +
                            o))
                  : l && n && r
                    ? (u =
                          "You made a " +
                          l +
                          ' request to "' +
                          n +
                          '" but ' +
                          ('did not provide a `loader` for route "' +
                              r +
                              '", ') +
                          "so there is no way to handle the request.")
                    : i === "defer-action"
                      ? (u = "defer() is not supported in actions")
                      : i === "invalid-body" &&
                        (u = "Unable to encode submission body"))
            : e === 403
              ? ((a = "Forbidden"),
                (u = 'Route "' + r + '" does not match URL "' + n + '"'))
              : e === 404
                ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
                : e === 405 &&
                  ((a = "Method Not Allowed"),
                  l && n && r
                      ? (u =
                            "You made a " +
                            l.toUpperCase() +
                            ' request to "' +
                            n +
                            '" but ' +
                            ('did not provide an `action` for route "' +
                                r +
                                '", ') +
                            "so there is no way to handle the request.")
                      : l &&
                        (u =
                            'Invalid request method "' +
                            l.toUpperCase() +
                            '"')),
        new Li(e || 500, a, new Error(u), !0)
    );
}
function Ql(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let [r, l] = t[n];
        if (Cn(l)) return { key: r, result: l };
    }
}
function Fd(e) {
    let t = typeof e == "string" ? pn(e) : e;
    return zn(se({}, t, { hash: "" }));
}
function _v(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ""
          ? t.hash !== ""
          : e.hash === t.hash
            ? !0
            : t.hash !== "";
}
function Nv(e) {
    return typeof e == "object" && e != null && "then" in e;
}
function Rv(e) {
    return Id(e.result) && cv.has(e.result.status);
}
function qt(e) {
    return e.type === ee.deferred;
}
function Je(e) {
    return e.type === ee.error;
}
function Cn(e) {
    return (e && e.type) === ee.redirect;
}
function oc(e) {
    return (
        typeof e == "object" &&
        e != null &&
        "type" in e &&
        "data" in e &&
        "init" in e &&
        e.type === "DataWithResponseInit"
    );
}
function Lv(e) {
    let t = e;
    return (
        t &&
        typeof t == "object" &&
        typeof t.data == "object" &&
        typeof t.subscribe == "function" &&
        typeof t.cancel == "function" &&
        typeof t.resolveData == "function"
    );
}
function Id(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}
function Tv(e) {
    return sv.has(e.toLowerCase());
}
function pt(e) {
    return av.has(e.toLowerCase());
}
async function jv(e, t, n, r, l) {
    let i = Object.entries(t);
    for (let o = 0; o < i.length; o++) {
        let [a, u] = i[o],
            s = e.find((m) => (m == null ? void 0 : m.route.id) === a);
        if (!s) continue;
        let d = r.find((m) => m.route.id === s.route.id),
            f = d != null && !Md(d, s) && (l && l[s.route.id]) !== void 0;
        qt(u) &&
            f &&
            (await Eu(u, n, !1).then((m) => {
                m && (t[a] = m);
            }));
    }
}
async function zv(e, t, n) {
    for (let r = 0; r < n.length; r++) {
        let { key: l, routeId: i, controller: o } = n[r],
            a = t[l];
        e.find((s) => (s == null ? void 0 : s.route.id) === i) &&
            qt(a) &&
            (Y(
                o,
                "Expected an AbortController for revalidating fetcher deferred result",
            ),
            await Eu(a, o.signal, !0).then((s) => {
                s && (t[l] = s);
            }));
    }
}
async function Eu(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: ee.data, data: e.deferredData.unwrappedData };
            } catch (l) {
                return { type: ee.error, error: l };
            }
        return { type: ee.data, data: e.deferredData.data };
    }
}
function ku(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Fr(e, t) {
    let n = typeof t == "string" ? pn(t).search : t.search;
    if (e[e.length - 1].route.index && ku(n || "")) return e[e.length - 1];
    let r = jd(e);
    return r[r.length - 1];
}
function ac(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: i,
        json: o,
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: l,
            };
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: i,
                json: void 0,
                text: void 0,
            };
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: o,
                text: void 0,
            };
    }
}
function Ro(e, t) {
    return t
        ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
          }
        : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
          };
}
function Dv(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
    };
}
function Tr(e, t) {
    return e
        ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
          }
        : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
          };
}
function Mv(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0,
    };
}
function Qt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
    };
}
function Ov(e, t) {
    try {
        let n = e.sessionStorage.getItem(Dd);
        if (n) {
            let r = JSON.parse(n);
            for (let [l, i] of Object.entries(r || {}))
                i && Array.isArray(i) && t.set(l, new Set(i || []));
        }
    } catch {}
}
function Fv(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, l] of t) n[r] = [...l];
        try {
            e.sessionStorage.setItem(Dd, JSON.stringify(n));
        } catch (r) {
            pr(
                !1,
                "Failed to save applied view transitions in sessionStorage (" +
                    r +
                    ").",
            );
        }
    }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
    return (
        (Ti = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Ti.apply(this, arguments)
    );
}
const Gi = N.createContext(null),
    Ud = N.createContext(null),
    On = N.createContext(null),
    Cu = N.createContext(null),
    hn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Ad = N.createContext(null);
function Iv(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    gl() || Y(!1);
    let { basename: r, navigator: l } = N.useContext(On),
        { hash: i, pathname: o, search: a } = $d(e, { relative: n }),
        u = o;
    return (
        r !== "/" && (u = o === "/" ? r : Mt([r, o])),
        l.createHref({ pathname: u, search: a, hash: i })
    );
}
function gl() {
    return N.useContext(Cu) != null;
}
function yr() {
    return gl() || Y(!1), N.useContext(Cu).location;
}
function Bd(e) {
    N.useContext(On).static || N.useLayoutEffect(e);
}
function Uv() {
    let { isDataRoute: e } = N.useContext(hn);
    return e ? qv() : Av();
}
function Av() {
    gl() || Y(!1);
    let e = N.useContext(Gi),
        { basename: t, future: n, navigator: r } = N.useContext(On),
        { matches: l } = N.useContext(hn),
        { pathname: i } = yr(),
        o = JSON.stringify(wu(l, n.v7_relativeSplatPath)),
        a = N.useRef(!1);
    return (
        Bd(() => {
            a.current = !0;
        }),
        N.useCallback(
            function (s, d) {
                if ((d === void 0 && (d = {}), !a.current)) return;
                if (typeof s == "number") {
                    r.go(s);
                    return;
                }
                let f = xu(s, JSON.parse(o), i, d.relative === "path");
                e == null &&
                    t !== "/" &&
                    (f.pathname = f.pathname === "/" ? t : Mt([t, f.pathname])),
                    (d.replace ? r.replace : r.push)(f, d.state, d);
            },
            [t, r, o, i, e],
        )
    );
}
const Bv = N.createContext(null);
function $v(e) {
    let t = N.useContext(hn).outlet;
    return t && N.createElement(Bv.Provider, { value: e }, t);
}
function $d(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = N.useContext(On),
        { matches: l } = N.useContext(hn),
        { pathname: i } = yr(),
        o = JSON.stringify(wu(l, r.v7_relativeSplatPath));
    return N.useMemo(() => xu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Hv(e, t, n, r) {
    gl() || Y(!1);
    let { navigator: l } = N.useContext(On),
        { matches: i } = N.useContext(hn),
        o = i[i.length - 1],
        a = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let s = yr(),
        d;
    d = s;
    let f = d.pathname || "/",
        m = f;
    if (u !== "/") {
        let S = u.replace(/^\//, "").split("/");
        m = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
    }
    let w = xn(e, { pathname: m });
    return Yv(
        w &&
            w.map((S) =>
                Object.assign({}, S, {
                    params: Object.assign({}, a, S.params),
                    pathname: Mt([
                        u,
                        l.encodeLocation
                            ? l.encodeLocation(S.pathname).pathname
                            : S.pathname,
                    ]),
                    pathnameBase:
                        S.pathnameBase === "/"
                            ? u
                            : Mt([
                                  u,
                                  l.encodeLocation
                                      ? l.encodeLocation(S.pathnameBase)
                                            .pathname
                                      : S.pathnameBase,
                              ]),
                }),
            ),
        i,
        n,
        r,
    );
}
function Vv() {
    let e = Zv(),
        t = Xi(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return N.createElement(
        N.Fragment,
        null,
        N.createElement("h2", null, "Unexpected Application Error!"),
        N.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? N.createElement("pre", { style: l }, n) : null,
        null,
    );
}
const Wv = N.createElement(Vv, null);
class Qv extends N.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n,
        );
    }
    render() {
        return this.state.error !== void 0
            ? N.createElement(
                  hn.Provider,
                  { value: this.props.routeContext },
                  N.createElement(Ad.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  }),
              )
            : this.props.children;
    }
}
function Kv(e) {
    let { routeContext: t, match: n, children: r } = e,
        l = N.useContext(Gi);
    return (
        l &&
            l.static &&
            l.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        N.createElement(hn.Provider, { value: t }, r)
    );
}
function Yv(e, t, n, r) {
    var l;
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (
            (i = r) != null &&
            i.v7_partialHydration &&
            t.length === 0 &&
            !n.initialized &&
            n.matches.length > 0
        )
            e = n.matches;
        else return null;
    }
    let o = e,
        a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let d = o.findIndex(
            (f) =>
                f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
        );
        d >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
    }
    let u = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if (
                ((f.route.HydrateFallback || f.route.hydrateFallbackElement) &&
                    (s = d),
                f.route.id)
            ) {
                let { loaderData: m, errors: w } = n,
                    k =
                        f.route.loader &&
                        m[f.route.id] === void 0 &&
                        (!w || w[f.route.id] === void 0);
                if (f.route.lazy || k) {
                    (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
                    break;
                }
            }
        }
    return o.reduceRight((d, f, m) => {
        let w,
            k = !1,
            S = null,
            L = null;
        n &&
            ((w = a && f.route.id ? a[f.route.id] : void 0),
            (S = f.route.errorElement || Wv),
            u &&
                (s < 0 && m === 0
                    ? (bv("route-fallback"), (k = !0), (L = null))
                    : s === m &&
                      ((k = !0),
                      (L = f.route.hydrateFallbackElement || null))));
        let h = t.concat(o.slice(0, m + 1)),
            c = () => {
                let v;
                return (
                    w
                        ? (v = S)
                        : k
                          ? (v = L)
                          : f.route.Component
                            ? (v = N.createElement(f.route.Component, null))
                            : f.route.element
                              ? (v = f.route.element)
                              : (v = d),
                    N.createElement(Kv, {
                        match: f,
                        routeContext: {
                            outlet: d,
                            matches: h,
                            isDataRoute: n != null,
                        },
                        children: v,
                    })
                );
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
            ? N.createElement(Qv, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: S,
                  error: w,
                  children: c(),
                  routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : c();
    }, null);
}
var Hd = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(Hd || {}),
    ji = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(ji || {});
function Xv(e) {
    let t = N.useContext(Gi);
    return t || Y(!1), t;
}
function Gv(e) {
    let t = N.useContext(Ud);
    return t || Y(!1), t;
}
function Jv(e) {
    let t = N.useContext(hn);
    return t || Y(!1), t;
}
function Vd(e) {
    let t = Jv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Y(!1), n.route.id;
}
function Zv() {
    var e;
    let t = N.useContext(Ad),
        n = Gv(ji.UseRouteError),
        r = Vd(ji.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function qv() {
    let { router: e } = Xv(Hd.UseNavigateStable),
        t = Vd(ji.UseNavigateStable),
        n = N.useRef(!1);
    return (
        Bd(() => {
            n.current = !0;
        }),
        N.useCallback(
            function (l, i) {
                i === void 0 && (i = {}),
                    n.current &&
                        (typeof l == "number"
                            ? e.navigate(l)
                            : e.navigate(l, Ti({ fromRouteId: t }, i)));
            },
            [e, t],
        )
    );
}
const uc = {};
function bv(e, t, n) {
    uc[e] || (uc[e] = !0);
}
function eg(e) {
    return $v(e.context);
}
function tg(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = xe.Pop,
        navigator: i,
        static: o = !1,
        future: a,
    } = e;
    gl() && Y(!1);
    let u = t.replace(/^\/*/, "/"),
        s = N.useMemo(
            () => ({
                basename: u,
                navigator: i,
                static: o,
                future: Ti({ v7_relativeSplatPath: !1 }, a),
            }),
            [u, a, i, o],
        );
    typeof r == "string" && (r = pn(r));
    let {
            pathname: d = "/",
            search: f = "",
            hash: m = "",
            state: w = null,
            key: k = "default",
        } = r,
        S = N.useMemo(() => {
            let L = gr(d, u);
            return L == null
                ? null
                : {
                      location: {
                          pathname: L,
                          search: f,
                          hash: m,
                          state: w,
                          key: k,
                      },
                      navigationType: l,
                  };
        }, [u, d, f, m, w, k, l]);
    return S == null
        ? null
        : N.createElement(
              On.Provider,
              { value: s },
              N.createElement(Cu.Provider, { children: n, value: S }),
          );
}
new Promise(() => {});
function ng(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
    };
    return (
        e.Component &&
            Object.assign(t, {
                element: N.createElement(e.Component),
                Component: void 0,
            }),
        e.HydrateFallback &&
            Object.assign(t, {
                hydrateFallbackElement: N.createElement(e.HydrateFallback),
                HydrateFallback: void 0,
            }),
        e.ErrorBoundary &&
            Object.assign(t, {
                errorElement: N.createElement(e.ErrorBoundary),
                ErrorBoundary: void 0,
            }),
        t
    );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
    return (
        (fl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        fl.apply(this, arguments)
    );
}
function rg(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        i;
    for (i = 0; i < r.length; i++)
        (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}
function lg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ig(e, t) {
    return e.button === 0 && (!t || t === "_self") && !lg(e);
}
const og = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
    ],
    ag = "6";
try {
    window.__reactRouterVersion = ag;
} catch {}
function ug(e, t) {
    return hv({
        basename: void 0,
        future: fl({}, void 0, { v7_prependBasename: !0 }),
        history: Um({ window: void 0 }),
        hydrationData: sg(),
        routes: e,
        mapRouteProperties: ng,
        unstable_dataStrategy: void 0,
        unstable_patchRoutesOnNavigation: void 0,
        window: void 0,
    }).initialize();
}
function sg() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = fl({}, t, { errors: cg(t.errors) })), t;
}
function cg(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new Li(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
            if (l.__subType) {
                let i = window[l.__subType];
                if (typeof i == "function")
                    try {
                        let o = new i(l.message);
                        (o.stack = ""), (n[r] = o);
                    } catch {}
            }
            if (n[r] == null) {
                let i = new Error(l.message);
                (i.stack = ""), (n[r] = i);
            }
        } else n[r] = l;
    return n;
}
const fg = N.createContext({ isTransitioning: !1 }),
    dg = N.createContext(new Map()),
    pg = "startTransition",
    sc = Pp[pg],
    hg = "flushSync",
    cc = Im[hg];
function mg(e) {
    sc ? sc(e) : e();
}
function jr(e) {
    cc ? cc(e) : e();
}
class vg {
    constructor() {
        (this.status = "pending"),
            (this.promise = new Promise((t, n) => {
                (this.resolve = (r) => {
                    this.status === "pending" &&
                        ((this.status = "resolved"), t(r));
                }),
                    (this.reject = (r) => {
                        this.status === "pending" &&
                            ((this.status = "rejected"), n(r));
                    });
            }));
    }
}
function gg(e) {
    let { fallbackElement: t, router: n, future: r } = e,
        [l, i] = N.useState(n.state),
        [o, a] = N.useState(),
        [u, s] = N.useState({ isTransitioning: !1 }),
        [d, f] = N.useState(),
        [m, w] = N.useState(),
        [k, S] = N.useState(),
        L = N.useRef(new Map()),
        { v7_startTransition: h } = r || {},
        c = N.useCallback(
            (g) => {
                h ? mg(g) : g();
            },
            [h],
        ),
        v = N.useCallback(
            (g, $) => {
                let {
                    deletedFetchers: F,
                    unstable_flushSync: Q,
                    unstable_viewTransitionOpts: te,
                } = $;
                F.forEach((pe) => L.current.delete(pe)),
                    g.fetchers.forEach((pe, yt) => {
                        pe.data !== void 0 && L.current.set(yt, pe.data);
                    });
                let ye =
                    n.window == null ||
                    n.window.document == null ||
                    typeof n.window.document.startViewTransition != "function";
                if (!te || ye) {
                    Q ? jr(() => i(g)) : c(() => i(g));
                    return;
                }
                if (Q) {
                    jr(() => {
                        m && (d && d.resolve(), m.skipTransition()),
                            s({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: te.currentLocation,
                                nextLocation: te.nextLocation,
                            });
                    });
                    let pe = n.window.document.startViewTransition(() => {
                        jr(() => i(g));
                    });
                    pe.finished.finally(() => {
                        jr(() => {
                            f(void 0),
                                w(void 0),
                                a(void 0),
                                s({ isTransitioning: !1 });
                        });
                    }),
                        jr(() => w(pe));
                    return;
                }
                m
                    ? (d && d.resolve(),
                      m.skipTransition(),
                      S({
                          state: g,
                          currentLocation: te.currentLocation,
                          nextLocation: te.nextLocation,
                      }))
                    : (a(g),
                      s({
                          isTransitioning: !0,
                          flushSync: !1,
                          currentLocation: te.currentLocation,
                          nextLocation: te.nextLocation,
                      }));
            },
            [n.window, m, d, L, c],
        );
    N.useLayoutEffect(() => n.subscribe(v), [n, v]),
        N.useEffect(() => {
            u.isTransitioning && !u.flushSync && f(new vg());
        }, [u]),
        N.useEffect(() => {
            if (d && o && n.window) {
                let g = o,
                    $ = d.promise,
                    F = n.window.document.startViewTransition(async () => {
                        c(() => i(g)), await $;
                    });
                F.finished.finally(() => {
                    f(void 0), w(void 0), a(void 0), s({ isTransitioning: !1 });
                }),
                    w(F);
            }
        }, [c, o, d, n.window]),
        N.useEffect(() => {
            d && o && l.location.key === o.location.key && d.resolve();
        }, [d, m, l.location, o]),
        N.useEffect(() => {
            !u.isTransitioning &&
                k &&
                (a(k.state),
                s({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: k.currentLocation,
                    nextLocation: k.nextLocation,
                }),
                S(void 0));
        }, [u.isTransitioning, k]),
        N.useEffect(() => {}, []);
    let E = N.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (g) => n.navigate(g),
                push: (g, $, F) =>
                    n.navigate(g, {
                        state: $,
                        preventScrollReset:
                            F == null ? void 0 : F.preventScrollReset,
                    }),
                replace: (g, $, F) =>
                    n.navigate(g, {
                        replace: !0,
                        state: $,
                        preventScrollReset:
                            F == null ? void 0 : F.preventScrollReset,
                    }),
            }),
            [n],
        ),
        R = n.basename || "/",
        j = N.useMemo(
            () => ({ router: n, navigator: E, static: !1, basename: R }),
            [n, E, R],
        ),
        O = N.useMemo(
            () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
            [n.future.v7_relativeSplatPath],
        );
    return N.createElement(
        N.Fragment,
        null,
        N.createElement(
            Gi.Provider,
            { value: j },
            N.createElement(
                Ud.Provider,
                { value: l },
                N.createElement(
                    dg.Provider,
                    { value: L.current },
                    N.createElement(
                        fg.Provider,
                        { value: u },
                        N.createElement(
                            tg,
                            {
                                basename: R,
                                location: l.location,
                                navigationType: l.historyAction,
                                navigator: E,
                                future: O,
                            },
                            l.initialized || n.future.v7_partialHydration
                                ? N.createElement(yg, {
                                      routes: n.routes,
                                      future: n.future,
                                      state: l,
                                  })
                                : t,
                        ),
                    ),
                ),
            ),
        ),
        null,
    );
}
const yg = N.memo(wg);
function wg(e) {
    let { routes: t, future: n, state: r } = e;
    return Hv(t, void 0, r, n);
}
const xg =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Sg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ka = N.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: l,
                reloadDocument: i,
                replace: o,
                state: a,
                target: u,
                to: s,
                preventScrollReset: d,
                unstable_viewTransition: f,
            } = t,
            m = rg(t, og),
            { basename: w } = N.useContext(On),
            k,
            S = !1;
        if (typeof s == "string" && Sg.test(s) && ((k = s), xg))
            try {
                let v = new URL(window.location.href),
                    E = s.startsWith("//")
                        ? new URL(v.protocol + s)
                        : new URL(s),
                    R = gr(E.pathname, w);
                E.origin === v.origin && R != null
                    ? (s = R + E.search + E.hash)
                    : (S = !0);
            } catch {}
        let L = Iv(s, { relative: l }),
            h = Eg(s, {
                replace: o,
                state: a,
                target: u,
                preventScrollReset: d,
                relative: l,
                unstable_viewTransition: f,
            });
        function c(v) {
            r && r(v), v.defaultPrevented || h(v);
        }
        return N.createElement(
            "a",
            fl({}, m, {
                href: k || L,
                onClick: S || i ? r : c,
                ref: n,
                target: u,
            }),
        );
    });
var fc;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(fc || (fc = {}));
var dc;
(function (e) {
    (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(dc || (dc = {}));
function Eg(e, t) {
    let {
            target: n,
            replace: r,
            state: l,
            preventScrollReset: i,
            relative: o,
            unstable_viewTransition: a,
        } = t === void 0 ? {} : t,
        u = Uv(),
        s = yr(),
        d = $d(e, { relative: o });
    return N.useCallback(
        (f) => {
            if (ig(f, n)) {
                f.preventDefault();
                let m = r !== void 0 ? r : zn(s) === zn(d);
                u(e, {
                    replace: m,
                    state: l,
                    preventScrollReset: i,
                    relative: o,
                    unstable_viewTransition: a,
                });
            }
        },
        [s, u, d, r, l, n, e, i, o, a],
    );
}
function kg() {
    const { pathname: e } = yr();
    return C.jsxs("div", {
        className:
            "inline-flex m-3 space-x-3 text-teal-50 text-xl justify-center",
        children: [
            C.jsx(ka, {
                to: "/",
                className: `p-3  w-30 
                    ${e === "/" ? "w-30 border-b-2 border-red-500" : "border-red-500"}
                `,
                children: "Aceda a sua conta",
            }),
            C.jsx(ka, {
                to: "new",
                className: `p-3  w-30
                    ${e === "/new" ? "w-30 border-b-2 border-red-500 " : "border-red-500"}
                `,
                children: "Criar nova conta",
            }),
        ],
    });
}
function Cg() {
    const { pathname: e } = yr();
    return C.jsx("div", {
        className: `hidden sm:block h-full w-full bg-cover bg-center 
            ${e === "/" ? "bg-img-purple" : "bg-img-novo"}
        `,
    });
}
function Pg() {
    return C.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 h-screen",
        children: [
            C.jsx(Cg, {}),
            C.jsx("div", {
                className: "flex justify-center items-center",
                children: C.jsxs("div", {
                    className: "py-10 px-10 w-full flex flex-col items-center",
                    children: [
                        C.jsx("img", {
                            className: "mb-3 w-12 h-auto mx-auto",
                            src: "tesoura.svg",
                            alt: "",
                        }),
                        C.jsxs("div", {
                            className: "flex flex-col gap-7",
                            children: [C.jsx(kg, {}), " ", C.jsx(eg, {})],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function _g() {
    return C.jsx(C.Fragment, {
        children: C.jsxs("form", {
            className: "flex flex-col gap-4 m-5",
            children: [
                C.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: [
                        C.jsxs("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                C.jsx("label", {
                                    className: "text-zinc-50 text-lg",
                                    htmlFor: "username",
                                    children: "Username:",
                                }),
                                C.jsx("input", {
                                    type: "text",
                                    id: "username",
                                    required: !0,
                                    className:
                                        "p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]",
                                }),
                            ],
                        }),
                        C.jsxs("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                C.jsx("label", {
                                    className: "text-zinc-50 text-lg",
                                    htmlFor: "telefone",
                                    children: "Telemóvel:",
                                }),
                                C.jsx("input", {
                                    type: "tel",
                                    id: "telefone",
                                    required: !0,
                                    className:
                                        "p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]",
                                }),
                            ],
                        }),
                    ],
                }),
                C.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: [
                        C.jsxs("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                C.jsx("label", {
                                    className: "text-zinc-50 text-lg",
                                    htmlFor: "Password",
                                    children: "Senha:",
                                }),
                                C.jsx("input", {
                                    type: "password",
                                    id: "Password",
                                    required: !0,
                                    className:
                                        "p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]",
                                }),
                            ],
                        }),
                        C.jsxs("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                C.jsx("label", {
                                    className: "text-zinc-50 text-lg",
                                    htmlFor: "email",
                                    children: "Email:",
                                }),
                                C.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    required: !0,
                                    className:
                                        "p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]",
                                }),
                            ],
                        }),
                    ],
                }),
                C.jsx("button", {
                    className:
                        "mt-7 flex justify-center bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors",
                    children: "Criar",
                }),
            ],
        }),
    });
}
function Ng() {
    return C.jsx(C.Fragment, {
        children: C.jsxs("form", {
            className: "flex flex-col gap-4 m-5",
            children: [
                C.jsxs("div", {
                    className: "flex flex-col gap-5",
                    children: [
                        C.jsx("label", {
                            className: "text-zinc-50 text-lg",
                            htmlFor: "username",
                            children: "Username:",
                        }),
                        C.jsx("input", {
                            type: "text",
                            id: "username",
                            required: !0,
                            className: `p-2 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500\r
                       border-transparent transition-colors border-[2px]`,
                        }),
                    ],
                }),
                C.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        C.jsx("label", {
                            className: "text-zinc-50 text-lg",
                            htmlFor: "Password",
                            children: "Senha:",
                        }),
                        C.jsx("input", {
                            type: "password",
                            id: "Password",
                            required: !0,
                            className: `p-2 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500\r
                       border-transparent transition-colors border-[2px]`,
                        }),
                        C.jsx("h3", {
                            className: "text-center mt-7 mb-5 text-slate-400",
                            children: "Esqueci minha senha",
                        }),
                        C.jsx(ka, {
                            to: "/home",
                            className:
                                "flex justify-center bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors",
                            children: "Entrar",
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ir({ name: e, className: t, onClick: n }) {
    return C.jsx(C.Fragment, {
        children: C.jsx("button", { className: t, onClick: n, children: e }),
    });
}
function Wd({
    titulo: e,
    texto: t,
    className: n,
    classNameTexto: r,
    classNameDiv: l,
}) {
    return C.jsxs("div", {
        className: l,
        children: [
            C.jsx("h2", { className: n, children: e }),
            C.jsx("p", { className: r, children: t }),
        ],
    });
}
function Rg() {
    return C.jsxs("div", {
        className: "flex items-center justify-between mt-28 mb-28 space-x-6",
        children: [
            C.jsx("div", {
                className: "object-fill",
                children: C.jsx("img", {
                    src: "image2.jpg",
                    alt: "barbeiro contando cabelo",
                    className: "w-96 h-auto rounded-r-md mx-2",
                }),
            }),
            C.jsxs("div", {
                className: "flex flex-col justify-center   space-y-4",
                children: [
                    C.jsx(Wd, {
                        classNameDiv: "mx-28 p-4",
                        className: "text-zinc-50 text-2xl mb-5 ",
                        titulo: "Agende seu corte",
                        texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi rem nihil amet reiciendis eaque assumenda voluptate accusantium inventore, quae sint, possimus, quam veniam facilis ",
                        classNameTexto: "w-96 text-zinc-50",
                    }),
                    C.jsx(ir, {
                        name: "Agende seu corte",
                        className:
                            " bg-red-600 text-zinc-50 p-2 rounded-md mx-32 w-72",
                    }),
                ],
            }),
            C.jsx("div", {
                className: "object-fill",
                children: C.jsx("img", {
                    src: "image2.jpg",
                    alt: "barbeiro contando cabelo",
                    className: "w-96 h-auto rounded-tl-md mx-1 ",
                }),
            }),
        ],
    });
}
function Lg() {
    const [e, t] = N.useState(!1);
    return C.jsxs("div", {
        className: "mt-28 bg-red-500 h-auto flex  px-28 py-10",
        children: [
            C.jsxs("div", {
                className: "  text-4xl text-zinc-50",
                children: [
                    C.jsx("h1", { children: "Procurar serviço" }),
                    C.jsx("hr", {
                        className:
                            "mt-3 w-64 border-zinc-800 border-2 rounded-md",
                    }),
                    C.jsxs("div", {
                        className: "mt-6",
                        children: [
                            C.jsx(ir, {
                                name: "Corte (7) ",
                                className: `\r
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900 text-xl\r
                                w-52 flex p-2 mt-6 rounded-md shadow-lg\r
                            `,
                                onClick: () => t(!e),
                            }),
                            C.jsx(ir, {
                                name: "Coloração (2)",
                                className: `\r
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl\r
                                w-52 flex p-2 mt-6 rounded-md shadow-lg \r
                            `,
                            }),
                            C.jsx(ir, {
                                name: "Tratamento Cabelo & Couro Cabeludo (3)",
                                className: `\r
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl\r
                                flex p-2 mt-6 rounded-md  shadow-xl\r
                            `,
                            }),
                        ],
                    }),
                ],
            }),
            e &&
                C.jsxs("div", {
                    className: "mt-16 text-2xl ml-44 text-zinc-50",
                    children: [
                        C.jsx("h1", { className: "my-3", children: "Corte" }),
                        C.jsx("span", { children: "45 mins Mostrar Detalhes" }),
                        C.jsx("hr", { className: "my-3 border-zinc-800" }),
                        C.jsx("h1", { className: "my-3", children: "Corte" }),
                        C.jsx("span", { children: "45 mins Mostrar Detalhes" }),
                        C.jsx("hr", { className: "my-3 border-zinc-800" }),
                        C.jsx("h1", { className: "my-3", children: "Corte" }),
                        C.jsx("span", { children: "45 mins Mostrar Detalhes" }),
                        C.jsx("hr", { className: "my-3 border-zinc-800" }),
                    ],
                }),
        ],
    });
}
function Tg() {
    return C.jsxs("div", {
        className: "flex justify-between items-center gap-5",
        children: [
            C.jsxs("div", {
                className: "flex gap-2 mr-16",
                children: [
                    C.jsx("img", { src: "tel.svg", alt: "telefone" }),
                    C.jsx("p", {
                        children: C.jsx("a", {
                            href: "tel:+315999999999",
                            className: "text-zinc-50 text-xl",
                            children: "999 999 999",
                        }),
                    }),
                ],
            }),
            C.jsxs("div", {
                className: "flex gap-3",
                children: [
                    C.jsx("img", {
                        src: "map.svg",
                        alt: "Localizacao",
                        className: "text-zinc-50",
                    }),
                    C.jsx("p", {
                        children: C.jsx("a", {
                            href: "https://maps.app.goo.gl/4eMHsGHJxseGA7YLA",
                            target: "_blank",
                            className: "text-zinc-50 text-xl",
                            children: "R. Antero de Quental 263",
                        }),
                    }),
                ],
            }),
            C.jsx("div", {
                className: "flex mx-16",
                children: C.jsx(ir, {
                    name: "agendamento",
                    className: `\r
                            bg-red-500 p-2 rounded-md text-zinc-50 border border-zinc-900\r
                            hover:bg-red-400 hover:text-zinc-100 transition-colors\r
                    `,
                }),
            }),
        ],
    });
}
function jg() {
    return C.jsx("span", {
        className: `        \r
            text-zinc-50 text-3xl mx-28\r
        `,
        children: "Babearia Lotos",
    });
}
function zg() {
    return C.jsx("div", {
        className: "relative bg-img-home w-full bg-cover bg-center h-[34rem]",
        children: C.jsxs("div", {
            className:
                "absolute inset-0 bg-gradient-to-b from-transparent to-black h-full",
            children: [
                C.jsxs("header", {
                    className:
                        "relative  z-0 flex justify-between items-center pt-11",
                    children: [C.jsx(jg, {}), C.jsx(Tg, {})],
                }),
                C.jsx(Wd, {
                    classNameDiv: "mt-32 mx-28",
                    titulo: "Babearia Lotos",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel igendi, at error reiciendis tempora",
                    className: "text-zinc-50 text-xl mb-5 ",
                    classNameTexto: " w-80 text-slate-50 mb-5",
                }),
                C.jsx(ir, {
                    name: "Conheça os teus barbeiros",
                    className: `\r
                    bg-red-600 text-zinc-50 p-2 rounded-md mx-28\r
                `,
                }),
            ],
        }),
    });
}
function Dg() {
    return C.jsxs("div", {
        children: [C.jsx(zg, {}), C.jsx(Rg, {}), C.jsx(Lg, {})],
    });
}
function Mg() {
    return C.jsx(C.Fragment, { children: C.jsx("h1", { children: "teste" }) });
}
const Og = ug([
    {
        path: "/",
        element: C.jsx(Pg, {}),
        children: [
            { path: "new", element: C.jsx(_g, {}) },
            { path: "/", element: C.jsx(Ng, {}) },
        ],
    },
    {
        path: "/home",
        element: C.jsx(Dg, {}),
        children: [{ path: "agendamento", element: C.jsx(Mg, {}) }],
    },
]);
function Fg() {
    return C.jsx(C.Fragment, { children: C.jsx(gg, { router: Og }) });
}
Rd(document.getElementById("root")).render(
    C.jsx(N.StrictMode, { children: C.jsx(Fg, {}) }),
);
