// 모듈에서 가져온 함수들
import {
  aF as $,
  p as k,
  F as S,
  l as C,
  Y as P,
  r as T,
  n as H,
  a1 as D
} from "./Di6I4_Kl.js";

// 특정 상태를 처리하기 위한 함수
function w(e, t, ...n) {
  if (e in t) {
      let o = t[e];
      return typeof o === "function" ? o(...n) : o;
  }
  // 정의되지 않은 상태에 대한 에러 처리
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, w), r;
}

// 열거형 타입 U 정의
var U = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(U || {});

// 열거형 타입 R 정의
var R = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(R || {});

// 컴포넌트 K 정의
function K({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...o
}) {
  var i;
  // props 병합 및 처리
  let u = O(r, n),
      s = Object.assign(o, {
          props: u
      });
  // visible 또는 static 특성에 따라 렌더링 전략 결정
  if (e || t & 2 && u.static) return b(s);
  if (t & 1) {
      let f = (i = u.unmount) == null || i ? 0 : 1;
      // unmount 여부에 따라 처리
      return w(f, {
          0() {
              return null
          },
          1() {
              return b({
                  ...o,
                  props: {
                      ...u,
                      hidden: !0,
                      style: {
                          display: "none"
                      }
                  }
              })
          }
      })
  }
  return b(s);
}

// 컴포넌트 b 정의
function b({
  props: e,
  attrs: t,
  slots: n,
  slot: r,
  name: o
}) {
  var i, u;
  let {
      as: s,
      ...f
  } = L(e, ["unmount", "static"]),
      l = (i = n.default) == null ? void 0 : i.call(n, r),
      m = {};
  if (r) {
      let c = !1,
          h = [];
      for (let [d, p] of Object.entries(r))
          typeof p == "boolean" && (c = !0),
          p === !0 && h.push(d);
      c && (m["data-headlessui-state"] = h.join(" "))
  }
  if (s === "template") {
      if (l = j(l ?? []), Object.keys(f).length > 0 || Object.keys(t).length > 0) {
          let [c, ...h] = l ?? [];
          if (!N(c) || h.length > 0)
              throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(f).concat(Object.keys(t)).map(a => a.trim()).filter((a, g, A) => A.indexOf(a) === g).sort((a, g) => a.localeCompare(g)).map(a => `  - ${a}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(a => `  - ${a}`).join(`
`)].join(`
`)
          let [d, p] = [O(u = c.props ?? {}, f), $(c, d)];
          for (let a in d) a.startsWith("on") && (p.props || (p.props = {}), p.props[a] = d[a]);
          return p
      }
      return Array.isArray(l) && l.length === 1 ? l[0] : l
  }
  return k(s, Object.assign({}, f, m), {
      default: () => l
  })
}

// 함수 j 정의
function j(e) {
  return e.flatMap(t => t.type === S ? j(t.children) : [t])
}

// 함수 O 정의
function O(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
      n = {};
  for (let r of e)
      for (let o in r)
          o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
  for (let r in n) Object.assign(t, {
      [r](o, ...i) {
          let u = n[r];
          for (let s of u)
              if (o instanceof Event && o.defaultPrevented) return;
          s(o, ...i)
      }
  });
  return t
}

// 함수 V 정의
function V(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t
}

// 함수 L 정의
function L(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n
}

// 함수 N 정의
function N(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}

// 변수 x 정의
let x = 0;

// 함수 B 정의
function B() {
  return ++x
}

// 함수 q 정의
function q() {
  return B()
}

// 열거형 타입 F 정의
var F = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});

// 함수 y 정의
function y(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value
}

// 심볼 E 정의
let E = Symbol("Context");

// 열거형 타입 M 정의
var M = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(M || {});

// 함수 z 정의
function z() {
  return W() !== null
}

// 함수 W 정의
function W() {
  return C(E, null)
}

// 함수 G 정의
function G(e) {
  P(E, e)
}

// 함수 v 정의
function v(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

// 함수 I 정의
function I(e, t) {
  let n = T(v(e.value.type, e.value.as));
  return H(() => {
      n.value = v(e.value.type, e.value.as)
  }), D(() => {
      var r;
      n.value || y(t) && y(t) instanceof HTMLButtonElement && !((r = y(t)) != null && r.hasAttribute("type")) && (n.value = "button")
  }), n
}

// 모듈에서 export 되는 함수들
export {
  z as C,
  K as H,
  V as K,
  U as N,
  R as S,
  L as T,
  F as a,
  I as b,
  G as c,
  M as l,
  y as o,
  W as p,
  q as t,
  w as u
};