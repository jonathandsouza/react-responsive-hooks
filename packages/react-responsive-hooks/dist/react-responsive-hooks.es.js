import Y, { useState as dr, useEffect as vr } from "react";
var Q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  if (Oe) return W;
  Oe = 1;
  var f = Y, c = Symbol.for("react.element"), k = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, S = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(_, v, C) {
    var y, m = {}, T = null, M = null;
    C !== void 0 && (T = "" + C), v.key !== void 0 && (T = "" + v.key), v.ref !== void 0 && (M = v.ref);
    for (y in v) g.call(v, y) && !P.hasOwnProperty(y) && (m[y] = v[y]);
    if (_ && _.defaultProps) for (y in v = _.defaultProps, v) m[y] === void 0 && (m[y] = v[y]);
    return { $$typeof: c, type: _, key: T, ref: M, props: m, _owner: S.current };
  }
  return W.Fragment = k, W.jsx = R, W.jsxs = R, W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function br() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Y, c = Symbol.for("react.element"), k = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ee = Symbol.iterator, Ce = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var j = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === P || We || e === S || e === C || e === y || Ie || e === M || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === m || e.$$typeof === R || e.$$typeof === _ || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case k:
          return "Portal";
        case P:
          return "Profiler";
        case S:
          return "StrictMode";
        case C:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case R:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return Ye(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return E(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, ne, ae, oe, ie, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ve() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ne
            }),
            info: w({}, e, {
              value: ae
            }),
            warn: w({}, e, {
              value: oe
            }),
            error: w({}, e, {
              value: ie
            }),
            group: w({}, e, {
              value: ue
            }),
            groupCollapsed: w({}, e, {
              value: se
            }),
            groupEnd: w({}, e, {
              value: le
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = j.ReactCurrentDispatcher, z;
    function V(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var J = !1, U;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ue();
    }
    function ce(e, r) {
      if (!e || J)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, N.current = u, Ve(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", O = D ? V(D) : "";
      return typeof e == "function" && U.set(e, O), O;
    }
    function Le(e, r, t) {
      return ce(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case C:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Le(e.render);
          case m:
            return L(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, i) {
      {
        var u = Function.call.bind(A);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (B(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, B(i), d("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var ze = Array.isArray;
    function K(e) {
      return ze(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function be(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), pe(e);
    }
    var I = j.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, q;
    q = {};
    function Ge(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = E(I.current.type);
        q[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(I.current.type), e.ref), q[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (be(t), a = "" + t), Xe(r) && (be(r.key), a = "" + r.key), Ge(r) && (p = r.ref, He(r, i));
        for (u in r)
          A.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), p && Qe(o, l);
        }
        return er(e, a, p, i, n, I.current, o);
      }
    }
    var G = j.ReactCurrentOwner, he = j.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Ee() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Re = {};
    function nr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), x(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && me(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && me(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = E(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var Te = {};
    function we(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? a += p : a += Ee();
          var s;
          e === null ? s = "null" : K(e) ? s = "array" : e !== void 0 && e.$$typeof === c ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var D = 0; D < h.length; D++)
                  _e(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        if (A.call(r, "key")) {
          var O = E(e), b = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), Z = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + Z]) {
            var fr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, O, fr, O), Te[O + Z] = !0;
          }
        }
        return e === g ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function ur(e, r, t) {
      return we(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    $.Fragment = g, $.jsx = sr, $.jsxs = lr;
  }()), $;
}
process.env.NODE_ENV === "production" ? Q.exports = pr() : Q.exports = br();
var gr = Q.exports;
const Se = {
  smallMobile: 320,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280
}, Pe = Y.createContext(null);
function yr(f = Se) {
  const c = window.innerWidth;
  return {
    smallMobile: c < f.smallMobile,
    mobile: c >= f.mobile && c < f.tablet,
    tablet: c >= f.tablet && c < f.desktop,
    desktop: c >= f.desktop && c < f.largeDesktop,
    largeDesktop: c >= f.largeDesktop
  };
}
function hr(f) {
  const { children: c, ...k } = f, g = Object.assign(Se, k), [S, P] = Y.useState({
    smallMobile: !1,
    mobile: !1,
    tablet: !1,
    desktop: !1,
    largeDesktop: !1
  });
  return dr(), vr(() => {
    const R = () => {
      P(yr(g));
    };
    return window.addEventListener("resize", R), R(), () => window.removeEventListener("resize", R);
  }, [
    g.smallMobile,
    g.mobile,
    g.tablet,
    g.desktop,
    g.largeDesktop
  ]), /* @__PURE__ */ gr.jsx(Pe.Provider, { value: S, children: c });
}
function Er() {
  const f = Y.useContext(Pe);
  if (!f)
    throw new Error("useBreakpoint must be used within a ViewportProvider");
  return f;
}
const mr = {
  Provider: hr,
  useBreakpoint: Er
};
export {
  mr as Breakpoint,
  Er as useBreakpoint
};
