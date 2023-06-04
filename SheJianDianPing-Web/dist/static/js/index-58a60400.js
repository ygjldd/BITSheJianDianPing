import {
  i as an,
  n as Ot,
  g as Pt,
  h as $e,
  t as pt,
  j as ht,
  k as H,
  l as D,
  m as Dt,
  q as Fe,
  s as vt,
  u as ln,
  v as Ge,
  x as sn,
  o as h,
  c as T,
  d as y,
  y as te,
  F as ve,
  z as ge,
  A as ie,
  B as V,
  C as ze,
  D as a,
  E as ee,
  b as m,
  _ as pe,
  r as x,
  e as ce,
  G as tt,
  H as rn,
  K as cn,
  I as he,
  w as k,
  J as Ht,
  L as jt,
  M as Rt,
  N as K,
  O as Re,
  P as me,
  Q as nt,
  R as Se,
  S as fe,
  T as _t,
  U as et,
  V as mt,
  W as Ce,
  X as un,
  Y as Ze,
  Z as He,
  $ as Be,
  a0 as We,
  a1 as gt,
  a2 as Ke,
  a3 as dn,
  a4 as Qe,
  a5 as Oe,
  a6 as ut,
  a7 as yt,
  a8 as Le,
  a9 as Ne,
  aa as bt,
  ab as it,
  ac as fn,
  ad as Mt,
  ae as qt,
  af as wt,
  ag as Tt,
  ah as Ue,
  ai as pn,
  p as Bt,
  f as Nt,
  aj as Ft,
  ak as hn,
  al as vn,
  am as _n,
  an as qe,
  ao as mn,
  ap as gn,
  aq as yn
} from "./index-858ac1df.js";
import {
  u as bn,
  a as Ee,
  b as Ie,
  c as wn,
  t as kn,
  d as Pe,
  e as xn,
  f as Cn,
  g as Sn
} from "./dark-96a8d7bb.js";
function Ae(t) {
  var e;
  const n = pt(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const ot = Pt ? window : void 0,
  $n = Pt ? window.document : void 0;
function je(...t) {
  let e, n, o, i;
  if (
    (typeof t[0] == "string" || Array.isArray(t[0])
      ? (([n, o, i] = t), (e = ot))
      : ([e, n, o, i] = t),
    !e)
  )
    return Ot;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const c = [],
    s = () => {
      c.forEach(_ => _()), (c.length = 0);
    },
    u = (_, f, v, g) => (
      _.addEventListener(f, v, g), () => _.removeEventListener(f, v, g)
    ),
    p = $e(
      () => [Ae(e), pt(i)],
      ([_, f]) => {
        s(), _ && c.push(...n.flatMap(v => o.map(g => u(_, v, g, f))));
      },
      { immediate: !0, flush: "post" }
    ),
    w = () => {
      p(), s();
    };
  return ht(w), w;
}
let Et = !1;
function In(t, e, n = {}) {
  const {
    window: o = ot,
    ignore: i = [],
    capture: c = !0,
    detectIframe: s = !1
  } = n;
  if (!o) return;
  an &&
    !Et &&
    ((Et = !0),
    Array.from(o.document.body.children).forEach(v =>
      v.addEventListener("click", Ot)
    ));
  let u = !0;
  const p = v =>
      i.some(g => {
        if (typeof g == "string")
          return Array.from(o.document.querySelectorAll(g)).some(
            S => S === v.target || v.composedPath().includes(S)
          );
        {
          const S = Ae(g);
          return S && (v.target === S || v.composedPath().includes(S));
        }
      }),
    _ = [
      je(
        o,
        "click",
        v => {
          const g = Ae(t);
          if (!(!g || g === v.target || v.composedPath().includes(g))) {
            if ((v.detail === 0 && (u = !p(v)), !u)) {
              u = !0;
              return;
            }
            e(v);
          }
        },
        { passive: !0, capture: c }
      ),
      je(
        o,
        "pointerdown",
        v => {
          const g = Ae(t);
          g && (u = !v.composedPath().includes(g) && !p(v));
        },
        { passive: !0 }
      ),
      s &&
        je(o, "blur", v => {
          var g;
          const S = Ae(t);
          ((g = o.document.activeElement) == null ? void 0 : g.tagName) ===
            "IFRAME" &&
            !(S != null && S.contains(o.document.activeElement)) &&
            e(v);
        })
    ].filter(Boolean);
  return () => _.forEach(v => v());
}
function Mn(t) {
  return typeof t == "function"
    ? t
    : typeof t == "string"
    ? e => e.key === t
    : Array.isArray(t)
    ? e => t.includes(e.key)
    : () => !0;
}
function ct(...t) {
  let e,
    n,
    o = {};
  t.length === 3
    ? ((e = t[0]), (n = t[1]), (o = t[2]))
    : t.length === 2
    ? typeof t[1] == "object"
      ? ((e = !0), (n = t[0]), (o = t[1]))
      : ((e = t[0]), (n = t[1]))
    : ((e = !0), (n = t[0]));
  const {
      target: i = ot,
      eventName: c = "keydown",
      passive: s = !1,
      dedupe: u = !1
    } = o,
    p = Mn(e);
  return je(
    i,
    c,
    _ => {
      (_.repeat && pt(u)) || (p(_) && n(_));
    },
    s
  );
}
function Tn() {
  const t = D(!1);
  return (
    Dt() &&
      Fe(() => {
        t.value = !0;
      }),
    t
  );
}
function Zt(t) {
  const e = Tn();
  return H(() => (e.value, !!t()));
}
var zt = Object.getOwnPropertySymbols,
  En = Object.prototype.hasOwnProperty,
  zn = Object.prototype.propertyIsEnumerable,
  An = (t, e) => {
    var n = {};
    for (var o in t) En.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
    if (t != null && zt)
      for (var o of zt(t)) e.indexOf(o) < 0 && zn.call(t, o) && (n[o] = t[o]);
    return n;
  };
function Ln(t, e, n = {}) {
  const o = n,
    { window: i = ot } = o,
    c = An(o, ["window"]);
  let s;
  const u = Zt(() => i && "ResizeObserver" in i),
    p = () => {
      s && (s.disconnect(), (s = void 0));
    },
    w = H(() => (Array.isArray(t) ? t.map(v => Ae(v)) : [Ae(t)])),
    _ = $e(
      w,
      v => {
        if ((p(), u.value && i)) {
          s = new ResizeObserver(e);
          for (const g of v) g && s.observe(g, c);
        }
      },
      { immediate: !0, flush: "post", deep: !0 }
    ),
    f = () => {
      p(), _();
    };
  return ht(f), { isSupported: u, stop: f };
}
const At = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function Vn(t, e = {}) {
  const { document: n = $n, autoExit: o = !1 } = e,
    i = H(() => {
      var b;
      return (b = Ae(t)) != null
        ? b
        : n == null
        ? void 0
        : n.querySelector("html");
    }),
    c = D(!1),
    s = H(() =>
      [
        "requestFullscreen",
        "webkitRequestFullscreen",
        "webkitEnterFullscreen",
        "webkitEnterFullScreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen"
      ].find(b => (n && b in n) || (i.value && b in i.value))
    ),
    u = H(() =>
      [
        "exitFullscreen",
        "webkitExitFullscreen",
        "webkitExitFullScreen",
        "webkitCancelFullScreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
      ].find(b => (n && b in n) || (i.value && b in i.value))
    ),
    p = H(() =>
      [
        "fullScreen",
        "webkitIsFullScreen",
        "webkitDisplayingFullscreen",
        "mozFullScreen",
        "msFullscreenElement"
      ].find(b => (n && b in n) || (i.value && b in i.value))
    ),
    w = [
      "fullscreenElement",
      "webkitFullscreenElement",
      "mozFullScreenElement",
      "msFullscreenElement"
    ].find(b => n && b in n),
    _ = Zt(
      () =>
        i.value &&
        n &&
        s.value !== void 0 &&
        u.value !== void 0 &&
        p.value !== void 0
    ),
    f = () => (w ? (n == null ? void 0 : n[w]) === i.value : !1),
    v = () => {
      if (p.value) {
        if (n && n[p.value] != null) return n[p.value];
        {
          const b = i.value;
          if ((b == null ? void 0 : b[p.value]) != null) return !!b[p.value];
        }
      }
      return !1;
    };
  async function g() {
    if (_.value) {
      if (u.value)
        if ((n == null ? void 0 : n[u.value]) != null) await n[u.value]();
        else {
          const b = i.value;
          (b == null ? void 0 : b[u.value]) != null && (await b[u.value]());
        }
      c.value = !1;
    }
  }
  async function S() {
    if (!_.value) return;
    v() && (await g());
    const b = i.value;
    s.value &&
      (b == null ? void 0 : b[s.value]) != null &&
      (await b[s.value](), (c.value = !0));
  }
  async function E() {
    await (c.value ? g() : S());
  }
  const A = () => {
    const b = v();
    (!b || (b && f())) && (c.value = b);
  };
  return (
    je(n, At, A, !1),
    je(() => Ae(i), At, A, !1),
    o && ht(g),
    { isSupported: _, isFullscreen: c, enter: S, exit: g, toggle: E }
  );
}
const On = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"/>'
  },
  Pn = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z"/>'
  },
  Dn = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"/>'
  };
vt("homeFilled", On);
vt("informationLine", Pn);
vt("lollipop", Dn);
const Hn = ln({
  id: "pure-setting",
  state: () => ({
    title: Ge().Title,
    fixedHeader: Ge().FixedHeader,
    hiddenSideBar: Ge().HiddenSideBar
  }),
  getters: {
    getTitle(t) {
      return t.title;
    },
    getFixedHeader(t) {
      return t.fixedHeader;
    },
    getHiddenSideBar(t) {
      return t.hiddenSideBar;
    }
  },
  actions: {
    CHANGE_SETTING({ key: t, value: e }) {
      Reflect.has(this, t) && (this[t] = e);
    },
    changeSetting(t) {
      this.CHANGE_SETTING(t);
    }
  }
});
function kt() {
  return Hn(sn);
}
const jn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    class: "iconify iconify--ant-design",
    viewBox: "0 0 1024 1024"
  },
  Rn = y(
    "path",
    {
      fill: "currentColor",
      d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
    },
    null,
    -1
  ),
  qn = [Rn];
function Bn(t, e) {
  return h(), T("svg", jn, qn);
}
const Wt = { render: Bn },
  Nn = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1Zm13 2H6v15.432l6-3.761l6 3.761V4ZM8 9h8v2H8V9Z"/>'
  },
  Fn = { class: "result" },
  Zn = ["onMouseenter"],
  Wn = { class: "result-item-title" },
  Un = te({
    __name: "SearchResult",
    props: { value: {}, options: {} },
    emits: ["update:value", "enter"],
    setup(t, { emit: e }) {
      const n = t,
        o = H(() => u => ({
          background:
            (u == null ? void 0 : u.path) === i.value ? bn().epThemeColor : "",
          color: u.path === i.value ? "#fff" : "",
          fontSize: u.path === i.value ? "16px" : "14px"
        })),
        i = H({
          get() {
            return n.value;
          },
          set(u) {
            e("update:value", u);
          }
        });
      async function c(u) {
        i.value = u.path;
      }
      function s() {
        e("enter");
      }
      return (u, p) => (
        h(),
        T("div", Fn, [
          (h(!0),
          T(
            ve,
            null,
            ge(u.options, w => {
              var _, f;
              return (
                h(),
                T(
                  "div",
                  {
                    key: w.path,
                    class: "result-item dark:bg-[#1d1d1d]",
                    style: ie(o.value(w)),
                    onClick: s,
                    onMouseenter: v => c(w)
                  },
                  [
                    (h(),
                    V(
                      ze(
                        a(Ee)(((_ = w.meta) == null ? void 0 : _.icon) ?? a(Nn))
                      )
                    )),
                    y(
                      "span",
                      Wn,
                      ee((f = w.meta) == null ? void 0 : f.title),
                      1
                    ),
                    m(a(Wt))
                  ],
                  44,
                  Zn
                )
              );
            }),
            128
          ))
        ])
      );
    }
  });
const Gn = pe(Un, [["__scopeId", "data-v-c483d393"]]),
  Kn = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414L13 7.828Z"/>'
  },
  Xn = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m13 16.172l5.364-5.364l1.414 1.414L12 20l-7.778-7.778l1.414-1.414L11 16.172V4h2v12.172Z"/>'
  },
  Jn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    class: "iconify iconify--mdi",
    viewBox: "0 0 24 24"
  },
  Yn = y(
    "path",
    {
      fill: "currentColor",
      d: "M1 7h6v2H3v2h4v2H3v2h4v2H1V7m10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z"
    },
    null,
    -1
  ),
  Qn = [Yn];
function eo(t, e) {
  return h(), T("svg", Jn, Qn);
}
const to = { render: eo },
  no = { class: "search-footer text-[#333] dark:text-white" },
  oo = { class: "search-footer-item" },
  ao = { class: "search-footer-item" },
  lo = { class: "search-footer-item" },
  so = te({
    __name: "SearchFooter",
    setup(t) {
      return (e, n) => {
        const o = x("IconifyIconOffline");
        return (
          h(),
          T("div", no, [
            y("span", oo, [m(a(Wt), { class: "icon" }), ce(" 确认 ")]),
            y("span", ao, [
              m(o, { icon: a(Kn), class: "icon" }, null, 8, ["icon"]),
              m(o, { icon: a(Xn), class: "icon" }, null, 8, ["icon"]),
              ce(" 切换 ")
            ]),
            y("span", lo, [m(a(to), { class: "icon" }), ce(" 关闭 ")])
          ])
        );
      };
    }
  });
const ro = pe(so, [["__scopeId", "data-v-8f46a26f"]]),
  Ut = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704z"/>'
  },
  io = { class: "el-input__icon" },
  co = { class: "search-result-container" },
  uo = te({
    __name: "SearchModal",
    props: { value: { type: Boolean } },
    emits: ["update:value"],
    setup(t, { emit: e }) {
      const n = t,
        { device: o } = Ie(),
        i = tt(),
        c = D(""),
        s = D(""),
        u = D(null),
        p = rn([]),
        w = Ht(g, 300),
        _ = H(() => cn(he().wholeMenus)),
        f = H({
          get() {
            return n.value;
          },
          set(F) {
            e("update:value", F);
          }
        });
      function v(F) {
        const I = [];
        function $(M) {
          M.forEach(W => {
            I.push(W), W.children && $(W.children);
          });
        }
        return $(F), I;
      }
      function g() {
        var I;
        const F = v(_.value);
        (p.value = F.filter($ => {
          var M;
          return (
            c.value &&
            ((M = $.meta) == null
              ? void 0
              : M.title
                  .toLocaleLowerCase()
                  .includes(c.value.toLocaleLowerCase().trim()))
          );
        })),
          ((I = p.value) == null ? void 0 : I.length) > 0
            ? (s.value = p.value[0].path)
            : (s.value = "");
      }
      function S() {
        (f.value = !1),
          setTimeout(() => {
            (p.value = []), (c.value = "");
          }, 200);
      }
      function E() {
        const { length: F } = p.value;
        if (F === 0) return;
        const I = p.value.findIndex($ => $.path === s.value);
        I === 0
          ? (s.value = p.value[F - 1].path)
          : (s.value = p.value[I - 1].path);
      }
      function A() {
        const { length: F } = p.value;
        if (F === 0) return;
        const I = p.value.findIndex($ => $.path === s.value);
        I + 1 === F
          ? (s.value = p.value[0].path)
          : (s.value = p.value[I + 1].path);
      }
      function b() {
        const { length: F } = p.value;
        F === 0 || s.value === "" || (i.push(s.value), S());
      }
      return (
        ct("Enter", b),
        ct("ArrowUp", E),
        ct("ArrowDown", A),
        (F, I) => {
          const $ = x("IconifyIconOffline"),
            M = x("el-input"),
            W = x("el-empty"),
            q = x("el-dialog");
          return (
            h(),
            V(
              q,
              {
                top: "5vh",
                modelValue: f.value,
                "onUpdate:modelValue": I[2] || (I[2] = Q => (f.value = Q)),
                width: a(o) === "mobile" ? "80vw" : "50vw",
                "before-close": S,
                onOpened: I[3] || (I[3] = Q => u.value.focus()),
                onClosed: I[4] || (I[4] = Q => u.value.blur())
              },
              {
                footer: k(() => [m(ro)]),
                default: k(() => [
                  m(
                    M,
                    {
                      ref_key: "inputRef",
                      ref: u,
                      modelValue: c.value,
                      "onUpdate:modelValue":
                        I[0] || (I[0] = Q => (c.value = Q)),
                      clearable: "",
                      placeholder: "请输入关键词搜索",
                      onInput: a(w)
                    },
                    {
                      prefix: k(() => [
                        y("span", io, [
                          m($, { icon: a(Ut) }, null, 8, ["icon"])
                        ])
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue", "onInput"]
                  ),
                  y("div", co, [
                    p.value.length === 0
                      ? (h(), V(W, { key: 0, description: "暂无搜索结果" }))
                      : (h(),
                        V(
                          Gn,
                          {
                            key: 1,
                            value: s.value,
                            "onUpdate:value":
                              I[1] || (I[1] = Q => (s.value = Q)),
                            options: p.value,
                            onClick: b
                          },
                          null,
                          8,
                          ["value", "options"]
                        ))
                  ])
                ]),
                _: 1
              },
              8,
              ["modelValue", "width"]
            )
          );
        }
      );
    }
  });
const fo = pe(uo, [["__scopeId", "data-v-981d34ef"]]);
function po(t = !1) {
  const e = D(t);
  function n(s) {
    e.value = s;
  }
  function o() {
    n(!0);
  }
  function i() {
    n(!1);
  }
  function c() {
    n(!e.value);
  }
  return { bool: e, setBool: n, setTrue: o, setFalse: i, toggle: c };
}
const xt = te({
    __name: "index",
    setup(t) {
      const { bool: e, toggle: n } = po();
      function o() {
        n();
      }
      return (i, c) => {
        const s = x("IconifyIconOffline");
        return (
          h(),
          T(
            ve,
            null,
            [
              y(
                "div",
                {
                  class:
                    "search-container w-[40px] h-[48px] flex-c cursor-pointer navbar-bg-hover",
                  onClick: o
                },
                [m(s, { icon: a(Ut) }, null, 8, ["icon"])]
              ),
              m(
                a(fo),
                {
                  value: a(e),
                  "onUpdate:value":
                    c[0] || (c[0] = u => (jt(e) ? (e.value = u) : null))
                },
                null,
                8,
                ["value"]
              )
            ],
            64
          )
        );
      };
    }
  }),
  Lt = [
    {
      key: "1",
      name: "通知",
      list: [
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
          title: "学校正在计划修缮北食堂",
          datetime: "一年前",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
          title: "南食堂上新了",
          datetime: "一年前",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
          title: "北食堂上新了",
          datetime: "一年前",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title: "每日用户流量统计发布",
          datetime: "一年前",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title: "左侧图标用于区分不同的类型",
          datetime: "一年前",
          description: "",
          type: "1"
        },
        {
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
          title: "左侧图标用于区分不同的类型",
          datetime: "一年前",
          description: "",
          type: "1"
        }
      ]
    },
    { key: "2", name: "消息", list: [] },
    {
      key: "3",
      name: "代办",
      list: [
        {
          avatar: "",
          title: "计划移除北食堂部分菜品",
          datetime: "",
          extra: "未开始",
          status: "info",
          type: "3"
        },
        {
          avatar: "",
          title: "北食堂差评如潮，请组织管理员删评",
          datetime: "",
          extra: "马上到期",
          status: "danger",
          type: "3"
        }
      ]
    }
  ],
  ho = {
    class:
      "notice-container border-b-[1px] border-solid border-[#f0f0f0] dark:border-[#303030]"
  },
  vo = { class: "notice-container-text" },
  _o = { class: "notice-text-title text-[#000000d9] dark:text-white" },
  mo = { class: "notice-text-datetime text-[#00000073] dark:text-white" },
  go = te({
    __name: "noticeItem",
    props: { noticeItem: { type: Object, default: () => {} } },
    setup(t) {
      const e = t,
        n = D(null),
        o = D(!1),
        i = D(null),
        c = D(!1),
        { tooltipEffect: s } = Ie(),
        u = Rt();
      function p() {
        Re(() => {
          var _, f;
          ((_ = n.value) == null ? void 0 : _.scrollWidth) >
          ((f = n.value) == null ? void 0 : f.clientWidth)
            ? (o.value = !0)
            : (o.value = !1);
        });
      }
      function w(_, f) {
        const v = document.createElement("span");
        (v.innerText = f),
          (v.className = "getDescriptionWidth"),
          document.querySelector("body").appendChild(v);
        const g = document.querySelector(".getDescriptionWidth").offsetWidth;
        document.querySelector(".getDescriptionWidth").remove();
        const S = _.target.offsetWidth;
        g > 2 * S ? (c.value = !0) : (c.value = !1);
      }
      return (_, f) => {
        var E, A;
        const v = x("el-avatar"),
          g = x("el-tooltip"),
          S = x("el-tag");
        return (
          h(),
          T("div", ho, [
            e.noticeItem.avatar
              ? (h(),
                V(
                  v,
                  {
                    key: 0,
                    size: 30,
                    src: e.noticeItem.avatar,
                    class: "notice-container-avatar"
                  },
                  null,
                  8,
                  ["src"]
                ))
              : K("", !0),
            y("div", vo, [
              y("div", _o, [
                m(
                  g,
                  {
                    "popper-class": "notice-title-popper",
                    effect: a(s),
                    disabled: !o.value,
                    content: e.noticeItem.title,
                    placement: "top-start",
                    enterable: !a(u)
                  },
                  {
                    default: k(() => [
                      y(
                        "div",
                        {
                          ref_key: "titleRef",
                          ref: n,
                          class: "notice-title-content",
                          onMouseover: p
                        },
                        ee(e.noticeItem.title),
                        545
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["effect", "disabled", "content", "enterable"]
                ),
                (E = e.noticeItem) != null && E.extra
                  ? (h(),
                    V(
                      S,
                      {
                        key: 0,
                        type: (A = e.noticeItem) == null ? void 0 : A.status,
                        size: "small",
                        class: "notice-title-extra"
                      },
                      {
                        default: k(() => {
                          var b;
                          return [
                            ce(
                              ee((b = e.noticeItem) == null ? void 0 : b.extra),
                              1
                            )
                          ];
                        }),
                        _: 1
                      },
                      8,
                      ["type"]
                    ))
                  : K("", !0)
              ]),
              m(
                g,
                {
                  "popper-class": "notice-title-popper",
                  effect: a(s),
                  disabled: !c.value,
                  content: e.noticeItem.description,
                  placement: "top-start"
                },
                {
                  default: k(() => [
                    y(
                      "div",
                      {
                        ref_key: "descriptionRef",
                        ref: i,
                        class: "notice-text-description",
                        onMouseover:
                          f[0] || (f[0] = b => w(b, e.noticeItem.description))
                      },
                      ee(e.noticeItem.description),
                      545
                    )
                  ]),
                  _: 1
                },
                8,
                ["effect", "disabled", "content"]
              ),
              y("div", mo, ee(e.noticeItem.datetime), 1)
            ])
          ])
        );
      };
    }
  });
const yo = pe(go, [["__scopeId", "data-v-2a7dbc48"]]),
  bo = { key: 0 },
  wo = te({
    __name: "noticeList",
    props: { list: { type: Array, default: () => [] } },
    setup(t) {
      const e = t;
      return (n, o) => {
        const i = x("el-empty");
        return e.list.length
          ? (h(),
            T("div", bo, [
              (h(!0),
              T(
                ve,
                null,
                ge(
                  e.list,
                  (c, s) => (
                    h(),
                    V(yo, { noticeItem: c, key: s }, null, 8, ["noticeItem"])
                  )
                ),
                128
              ))
            ]))
          : (h(), V(i, { key: 1, description: "暂无数据" }));
      };
    }
  }),
  ko = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"/><path fill="currentColor" d="M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"/><path fill="currentColor" d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"/>'
  },
  xo = { class: "dropdown-badge navbar-bg-hover select-none" },
  Co = { class: "header-notice-icon" },
  So = { class: "noticeList-container" },
  $o = te({
    __name: "index",
    setup(t) {
      const e = D(0),
        n = D(Lt),
        o = D(Lt[0].key);
      return (
        n.value.map(i => (e.value += i.list.length)),
        (i, c) => {
          const s = x("IconifyIconOffline"),
            u = x("el-badge"),
            p = x("el-scrollbar"),
            w = x("el-tab-pane"),
            _ = x("el-tabs"),
            f = x("el-dropdown-menu"),
            v = x("el-dropdown");
          return (
            h(),
            V(
              v,
              { trigger: "click", placement: "bottom-end" },
              {
                dropdown: k(() => [
                  m(f, null, {
                    default: k(() => [
                      m(
                        _,
                        {
                          stretch: !0,
                          modelValue: o.value,
                          "onUpdate:modelValue":
                            c[0] || (c[0] = g => (o.value = g)),
                          class: "dropdown-tabs"
                        },
                        {
                          default: k(() => [
                            (h(!0),
                            T(
                              ve,
                              null,
                              ge(
                                n.value,
                                g => (
                                  h(),
                                  V(
                                    w,
                                    {
                                      key: g.key,
                                      label: `${g.name}(${g.list.length})`,
                                      name: `${g.key}`
                                    },
                                    {
                                      default: k(() => [
                                        m(
                                          p,
                                          { "max-height": "330px" },
                                          {
                                            default: k(() => [
                                              y("div", So, [
                                                m(
                                                  wo,
                                                  { list: g.list },
                                                  null,
                                                  8,
                                                  ["list"]
                                                )
                                              ])
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ["label", "name"]
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        },
                        8,
                        ["modelValue"]
                      )
                    ]),
                    _: 1
                  })
                ]),
                default: k(() => [
                  y("span", xo, [
                    m(
                      u,
                      { value: e.value, max: 99 },
                      {
                        default: k(() => [
                          y("span", Co, [
                            m(s, { icon: a(ko) }, null, 8, ["icon"])
                          ])
                        ]),
                        _: 1
                      },
                      8,
                      ["value"]
                    )
                  ])
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  });
const Ct = pe($o, [["__scopeId", "data-v-4e7fe581"]]),
  Io = { key: 0, class: "flex justify-center items-center" },
  dt = te({
    __name: "extraIcon",
    props: { extraIcon: { type: String, default: "" } },
    setup(t) {
      const e = t;
      return (n, o) =>
        e.extraIcon
          ? (h(),
            T("div", Io, [
              (h(),
              V(ze(a(Ee)(me(e.extraIcon))), { class: "w-[30px] h-[30px]" }))
            ]))
          : K("", !0);
    }
  }),
  at = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"/>'
  },
  St = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M3.34 17a10.017 10.017 0 0 1-.979-2.326a3 3 0 0 0 .003-5.347a9.99 9.99 0 0 1 2.5-4.337a3 3 0 0 0 4.632-2.674a9.99 9.99 0 0 1 5.007.003a3 3 0 0 0 4.632 2.671a10.056 10.056 0 0 1 2.503 4.336a3 3 0 0 0-.002 5.347a9.99 9.99 0 0 1-2.501 4.337a3 3 0 0 0-4.632 2.674a9.99 9.99 0 0 1-5.007-.002a3 3 0 0 0-4.631-2.672A10.018 10.018 0 0 1 3.339 17Zm5.66.196a4.992 4.992 0 0 1 2.25 2.77c.499.047 1 .048 1.499.002a4.993 4.993 0 0 1 2.25-2.772a4.993 4.993 0 0 1 3.526-.564c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.152 8.152 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.5-.047-1-.048-1.5-.001A4.993 4.993 0 0 1 9 6.804a4.993 4.993 0 0 1-3.526.564c-.29.408-.54.843-.747 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.471 2.437-1.273 3.334a8.16 8.16 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196ZM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/>'
  },
  Mo = { key: 0, class: "horizontal-header" },
  To = { class: "select-none" },
  Eo = { class: "horizontal-header-right" },
  zo = { class: "el-dropdown-link navbar-bg-hover select-none" },
  Ao = { key: 0, class: "dark:text-white" },
  Lo = te({
    __name: "mixNav",
    setup(t) {
      const e = D(),
        n = D(null),
        {
          route: o,
          device: i,
          routers: c,
          logout: s,
          onPanel: u,
          menuSelect: p,
          resolvePath: w,
          username: _,
          getDivStyle: f,
          avatarsStyle: v
        } = Ie();
      function g(S) {
        var b, F;
        const E = he().wholeMenus,
          A = _t(S, E)[0];
        n.value =
          (F = (b = et(A, E)) == null ? void 0 : b.children[0]) == null
            ? void 0
            : F.path;
      }
      return (
        Fe(() => {
          g(o.path);
        }),
        Re(() => {
          var S;
          (S = e.value) == null || S.handleResize();
        }),
        $e(
          () => [o.path, he().wholeMenus],
          () => {
            g(o.path);
          }
        ),
        (S, E) => {
          const A = x("el-menu-item"),
            b = x("el-menu"),
            F = x("IconifyIconOffline"),
            I = x("el-dropdown-item"),
            $ = x("el-dropdown-menu"),
            M = x("el-dropdown"),
            W = nt("loading");
          return a(i) !== "mobile"
            ? Se(
                (h(),
                T("div", Mo, [
                  m(
                    b,
                    {
                      router: "",
                      ref_key: "menuRef",
                      ref: e,
                      mode: "horizontal",
                      class: "horizontal-header-menu",
                      "default-active": n.value,
                      onSelect: E[0] || (E[0] = q => a(p)(q, a(c)))
                    },
                    {
                      default: k(() => [
                        (h(!0),
                        T(
                          ve,
                          null,
                          ge(
                            a(he)().wholeMenus,
                            q => (
                              h(),
                              V(
                                A,
                                { key: q.path, index: a(w)(q) || q.redirect },
                                {
                                  title: k(() => [
                                    me(q.meta.icon)
                                      ? (h(),
                                        T(
                                          "div",
                                          {
                                            key: 0,
                                            class: fe([
                                              "sub-menu-icon",
                                              q.meta.icon
                                            ])
                                          },
                                          [
                                            (h(),
                                            V(
                                              ze(
                                                a(Ee)(q.meta && me(q.meta.icon))
                                              )
                                            ))
                                          ],
                                          2
                                        ))
                                      : K("", !0),
                                    y(
                                      "div",
                                      { style: ie(a(f)) },
                                      [
                                        y("span", To, ee(q.meta.title), 1),
                                        m(
                                          dt,
                                          { extraIcon: q.meta.extraIcon },
                                          null,
                                          8,
                                          ["extraIcon"]
                                        )
                                      ],
                                      4
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ["index"]
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["default-active"]
                  ),
                  y("div", Eo, [
                    m(xt),
                    m(Ct, { id: "header-notice" }),
                    m(
                      M,
                      { trigger: "click" },
                      {
                        dropdown: k(() => [
                          m(
                            $,
                            { class: "logout" },
                            {
                              default: k(() => [
                                m(
                                  I,
                                  { onClick: a(s) },
                                  {
                                    default: k(() => [
                                      m(
                                        F,
                                        {
                                          icon: a(at),
                                          style: { margin: "5px" }
                                        },
                                        null,
                                        8,
                                        ["icon"]
                                      ),
                                      ce(" 退出系统 ")
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["onClick"]
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        default: k(() => [
                          y("span", zo, [
                            y(
                              "img",
                              {
                                src: "https://avatars.githubusercontent.com/u/44761321?v=4",
                                style: ie(a(v))
                              },
                              null,
                              4
                            ),
                            a(_) ? (h(), T("p", Ao, ee(a(_)), 1)) : K("", !0)
                          ])
                        ]),
                        _: 1
                      }
                    ),
                    y(
                      "span",
                      {
                        class: "set-icon navbar-bg-hover",
                        title: "打开项目配置",
                        onClick: E[1] || (E[1] = (...q) => a(u) && a(u)(...q))
                      },
                      [m(F, { icon: a(St) }, null, 8, ["icon"])]
                    )
                  ])
                ])),
                [[W, a(he)().wholeMenus.length === 0]]
              )
            : K("", !0);
        }
      );
    }
  });
const Vo = pe(Lo, [["__scopeId", "data-v-328c90e3"]]),
  Oo = ["onClick"],
  Po = te({
    __name: "breadCrumb",
    setup(t) {
      const e = mt(),
        n = D([]),
        o = tt(),
        i = o.options.routes,
        c = Ce().multiTags,
        s = () => {
          let p;
          Object.keys(e.query).length > 0
            ? c.forEach(f => {
                He(e.query, f == null ? void 0 : f.query) && (p = me(f));
              })
            : Object.keys(e.params).length > 0
            ? c.forEach(f => {
                He(e.params, f == null ? void 0 : f.params) && (p = me(f));
              })
            : (p = et(o.currentRoute.value.path, i));
          const w = _t(o.currentRoute.value.name, i, "name"),
            _ = [];
          w.forEach(f => {
            f !== "/" && _.push(et(f, i));
          }),
            _.push(p),
            _.forEach((f, v) => {
              (p != null && p.query) ||
                (p != null && p.params) ||
                (f != null &&
                  f.children &&
                  f.children.forEach(g => {
                    var S, E;
                    ((S = g == null ? void 0 : g.meta) == null
                      ? void 0
                      : S.title) ===
                      ((E = f == null ? void 0 : f.meta) == null
                        ? void 0
                        : E.title) && _.splice(v, 1);
                  }));
            }),
            (n.value = _.filter(
              f =>
                (f == null ? void 0 : f.meta) &&
                (f == null ? void 0 : f.meta.title) !== !1
            ));
        },
        u = p => {
          const { redirect: w, path: _ } = p;
          w ? o.push(w) : o.push(_);
        };
      return (
        Fe(() => {
          s();
        }),
        $e(
          () => e.path,
          () => {
            s();
          },
          { deep: !0 }
        ),
        (p, w) => {
          const _ = x("el-breadcrumb-item"),
            f = x("el-breadcrumb");
          return (
            h(),
            V(
              f,
              { class: "!leading-[50px] select-none", separator: "/" },
              {
                default: k(() => [
                  m(
                    un,
                    { name: "breadcrumb" },
                    {
                      default: k(() => [
                        (h(!0),
                        T(
                          ve,
                          null,
                          ge(
                            n.value,
                            v => (
                              h(),
                              V(
                                _,
                                {
                                  class: "!inline !items-stretch",
                                  key: v.path
                                },
                                {
                                  default: k(() => [
                                    y(
                                      "a",
                                      { onClick: Ze(g => u(v), ["prevent"]) },
                                      ee(v.meta.title),
                                      9,
                                      Oo
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  }),
  Gt = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M21 18v2H3v-2h18ZM6.95 3.55v9.9L2 8.5l4.95-4.95ZM21 11v2h-9v-2h9Zm0-7v2h-9V4h9Z"/>'
  },
  Do = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M21 18v2H3v-2h18ZM17.05 3.55L22 8.5l-4.95 4.95v-9.9ZM12 11v2H3v-2h9Zm0-7v2H3V4h9Z"/>'
  },
  Ho = ["title"],
  jo = te({
    __name: "topCollapse",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const n = t,
        o = () => {
          e("toggleClick");
        };
      return (i, c) => {
        const s = x("IconifyIconOffline");
        return (
          h(),
          T(
            "div",
            {
              class: "px-3 mr-1 navbar-bg-hover",
              title: n.isActive ? "点击折叠" : "点击展开",
              onClick: o
            },
            [
              m(
                s,
                {
                  icon: n.isActive ? a(Gt) : a(Do),
                  class:
                    "inline-block align-middle hover:text-primary dark:hover:!text-white"
                },
                null,
                8,
                ["icon"]
              )
            ],
            8,
            Ho
          )
        );
      };
    }
  }),
  Ro = {
    class:
      "navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"
  },
  qo = { key: 3, class: "vertical-header-right" },
  Bo = { class: "el-dropdown-link navbar-bg-hover select-none" },
  No = { key: 0, class: "dark:text-white" },
  Fo = te({
    __name: "navbar",
    setup(t) {
      const {
        layout: e,
        device: n,
        logout: o,
        onPanel: i,
        pureApp: c,
        username: s,
        avatarsStyle: u,
        toggleSideBar: p
      } = Ie();
      return (w, _) => {
        const f = x("IconifyIconOffline"),
          v = x("el-dropdown-item"),
          g = x("el-dropdown-menu"),
          S = x("el-dropdown");
        return (
          h(),
          T("div", Ro, [
            a(n) === "mobile"
              ? (h(),
                V(
                  jo,
                  {
                    key: 0,
                    class: "hamburger-container",
                    "is-active": a(c).sidebar.opened,
                    onToggleClick: a(p)
                  },
                  null,
                  8,
                  ["is-active", "onToggleClick"]
                ))
              : K("", !0),
            a(e) !== "mix" && a(n) !== "mobile"
              ? (h(), V(Po, { key: 1, class: "breadcrumb-container" }))
              : K("", !0),
            a(e) === "mix" ? (h(), V(Vo, { key: 2 })) : K("", !0),
            a(e) === "vertical"
              ? (h(),
                T("div", qo, [
                  m(xt),
                  m(Ct, { id: "header-notice" }),
                  m(
                    S,
                    { trigger: "click" },
                    {
                      dropdown: k(() => [
                        m(
                          g,
                          { class: "logout" },
                          {
                            default: k(() => [
                              m(
                                v,
                                { onClick: a(o) },
                                {
                                  default: k(() => [
                                    m(
                                      f,
                                      { icon: a(at), style: { margin: "5px" } },
                                      null,
                                      8,
                                      ["icon"]
                                    ),
                                    ce(" 退出系统 ")
                                  ]),
                                  _: 1
                                },
                                8,
                                ["onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: k(() => [
                        y("span", Bo, [
                          y(
                            "img",
                            {
                              src: "https://api.iconify.design/ri:account-circle-line.svg?color=%23888888",
                              style: ie(a(u))
                            },
                            null,
                            4
                          ),
                          a(s) ? (h(), T("p", No, ee(a(s)), 1)) : K("", !0)
                        ])
                      ]),
                      _: 1
                    }
                  ),
                  y(
                    "span",
                    {
                      class: "set-icon navbar-bg-hover",
                      title: "打开项目配置",
                      onClick: _[0] || (_[0] = (...E) => a(i) && a(i)(...E))
                    },
                    [m(f, { icon: a(St) }, null, 8, ["icon"])]
                  )
                ]))
              : K("", !0)
          ])
        );
      };
    }
  });
const Zo = pe(Fo, [["__scopeId", "data-v-f7a00f0b"]]),
  Wo = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M5 11v2h14v-2H5Z"/>'
  },
  Uo = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M7 17h10v-2.5l3.5 3.5l-3.5 3.5V19H7v2.5L3.5 18L7 14.5V17Zm6-11v9h-2V6H5V4h14v2h-6Z"/>'
  },
  Go = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2ZM9 5a2 2 0 1 0 0 4V5Zm8 12v-2.5l4 3.5l-4 3.5V19H5v-2h12Z"/>'
  },
  Ko = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2ZM9 5a2 2 0 1 0 0 4V5ZM7 17h12v2H7v2.5L3 18l4-3.5V17Z"/>'
  },
  Xo = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384a384 384 0 0 1-384-384a384 384 0 0 1 643.712-282.88z"/>'
  },
  Kt = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>'
  };
function Jo() {
  var Q;
  const t = mt(),
    e = tt(),
    n = Dt(),
    o = kt(),
    i = D(0),
    c = D(0),
    s = D(0),
    u = D(!1),
    p = D(-1),
    w = D({}),
    _ = D(
      ((Q = Be().getItem(`${We()}configure`)) == null ? void 0 : Q.showModel) ||
        "smart"
    ),
    f = D(Be().getItem(`${We()}configure`).hideTabs) ?? D("false"),
    v = H(() => Ce().multiTags),
    g = gt([
      { icon: Xo, text: "重新加载", divided: !1, disabled: !1, show: !0 },
      {
        icon: Kt,
        text: "关闭当前标签页",
        divided: !1,
        disabled: !(v.value.length > 1),
        show: !0
      },
      {
        icon: Ko,
        text: "关闭左侧标签页",
        divided: !0,
        disabled: !(v.value.length > 1),
        show: !0
      },
      {
        icon: Go,
        text: "关闭右侧标签页",
        divided: !1,
        disabled: !(v.value.length > 1),
        show: !0
      },
      {
        icon: Uo,
        text: "关闭其他标签页",
        divided: !0,
        disabled: !(v.value.length > 2),
        show: !0
      },
      {
        icon: Wo,
        text: "关闭全部标签页",
        divided: !1,
        disabled: !(v.value.length > 1),
        show: !0
      },
      { icon: Ke, text: "整体页面全屏", divided: !0, disabled: !1, show: !0 },
      { icon: Ke, text: "内容区全屏", divided: !1, disabled: !1, show: !0 }
    ]);
  function S(L, J, ue) {
    var de, le;
    return dn(
      (de = t == null ? void 0 : t.meta) == null ? void 0 : de.showLink
    ) &&
      ((le = t == null ? void 0 : t.meta) == null ? void 0 : le.showLink) === !1
      ? Object.keys(t.query).length > 0
        ? He(t.query, L.query)
          ? J
          : ue
        : He(t.params, L.params)
        ? J
        : ue
      : t.path === L.path
      ? J
      : ue;
  }
  const E = H(() => (L, J) => {
      if (J !== 0) return S(L, !0, !1);
    }),
    A = H(() => L => S(L, "is-active", "")),
    b = H(() => L => S(L, "schedule-active", "")),
    F = H(() => ({ transform: `translateX(${s.value}px)` })),
    I = H(() => ({ left: c.value + "px", top: i.value + "px" })),
    $ = () => {
      u.value = !1;
    };
  function M(L) {
    if ((L && (p.value = L), a(_) === "smart")) {
      if (Qe(n.refs["schedule" + L][0], "schedule-active")) return;
      Oe(!0, "schedule-in", n.refs["schedule" + L][0]),
        Oe(!1, "schedule-out", n.refs["schedule" + L][0]);
    } else {
      if (Qe(n.refs["dynamic" + L][0], "card-active")) return;
      Oe(!0, "card-in", n.refs["dynamic" + L][0]),
        Oe(!1, "card-out", n.refs["dynamic" + L][0]);
    }
  }
  function W(L) {
    if (((p.value = -1), a(_) === "smart")) {
      if (Qe(n.refs["schedule" + L][0], "schedule-active")) return;
      Oe(!1, "schedule-in", n.refs["schedule" + L][0]),
        Oe(!0, "schedule-out", n.refs["schedule" + L][0]);
    } else {
      if (Qe(n.refs["dynamic" + L][0], "card-active")) return;
      Oe(!1, "card-in", n.refs["dynamic" + L][0]),
        Oe(!0, "card-out", n.refs["dynamic" + L][0]);
    }
  }
  function q() {
    o.hiddenSideBar
      ? o.changeSetting({ key: "hiddenSideBar", value: !1 })
      : o.changeSetting({ key: "hiddenSideBar", value: !0 });
  }
  return (
    Fe(() => {
      if (!_.value) {
        const L = Be().getItem(`${We()}configure`);
        (L.showModel = "card"), Be().setItem(`${We()}configure`, L);
      }
    }),
    $e(
      () => u.value,
      () => {
        je(document, "click", $);
      }
    ),
    {
      route: t,
      router: e,
      visible: u,
      showTags: f,
      instance: n,
      multiTags: v,
      showModel: _,
      tagsViews: g,
      buttonTop: i,
      buttonLeft: c,
      translateX: s,
      pureSetting: o,
      activeIndex: p,
      getTabStyle: F,
      iconIsActive: E,
      linkIsActive: A,
      currentSelect: w,
      scheduleIsActive: b,
      getContextMenuStyle: I,
      closeMenu: $,
      onMounted: Fe,
      onMouseenter: M,
      onMouseleave: W,
      onContentFullScreen: q
    }
  );
}
const Yo = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z"/>'
  },
  Qo = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m13.171 12l-4.95-4.95l1.415-1.413L16 12l-6.364 6.364l-1.414-1.415l4.95-4.95Z"/>'
  },
  ea = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z"/>'
  },
  ta = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/>'
  },
  na = { class: "arrow-left" },
  oa = ["onContextmenu", "onMouseenter", "onMouseleave", "onClick"],
  aa = ["onClick"],
  la = { class: "arrow-right" },
  sa = ["onClick"],
  ra = { class: "arrow-down" },
  ia = te({
    __name: "index",
    setup(t) {
      const {
          route: e,
          router: n,
          visible: o,
          showTags: i,
          instance: c,
          multiTags: s,
          tagsViews: u,
          buttonTop: p,
          buttonLeft: w,
          showModel: _,
          translateX: f,
          pureSetting: v,
          activeIndex: g,
          getTabStyle: S,
          iconIsActive: E,
          linkIsActive: A,
          currentSelect: b,
          scheduleIsActive: F,
          getContextMenuStyle: I,
          closeMenu: $,
          onMounted: M,
          onMouseenter: W,
          onMouseleave: q,
          onContentFullScreen: Q
        } = Jo(),
        L = D(),
        J = D(),
        ue = D(),
        de = D(!1),
        le = ut().path,
        { VITE_HIDE_HOME: Ve } = {
          VITE_PORT: "8848",
          VITE_HIDE_HOME: "true",
          VITE_PUBLIC_PATH: "/",
          VITE_ROUTER_HISTORY: "hash",
          VITE_CDN: "false",
          VITE_COMPRESSION: "none",
          BASE_URL: "/",
          MODE: "production",
          DEV: !1,
          PROD: !0,
          SSR: !1
        },
        { isFullscreen: Me, toggle: De } = Vn(),
        r = () => {
          const C = s.value.findIndex(z =>
            z.query
              ? He(e.query, z.query)
              : z.params
              ? He(e.params, z.params)
              : z.path === e.path
          );
          l(C);
        },
        l = async C => {
          var N, oe;
          if (!c.refs["dynamic" + C]) return;
          const P = c.refs["dynamic" + C][0],
            U = P == null ? void 0 : P.offsetLeft,
            re = P == null ? void 0 : P.offsetWidth,
            j = ue.value
              ? (N = ue.value) == null
                ? void 0
                : N.offsetWidth
              : 0;
          await Re();
          const Y = L.value
            ? (oe = L.value) == null
              ? void 0
              : oe.offsetWidth
            : 0;
          j <= Y ? (de.value = !0) : (de.value = !1),
            Y < j || U === 0
              ? (f.value = 0)
              : U < -f.value
              ? (f.value = -U + 10)
              : U > -f.value && U + re < -f.value + j
              ? (f.value = Math.min(0, j - re - U - 10))
              : (f.value = -(U - (j - 10 - re)));
        },
        d = C => {
          var U;
          const z = ue.value
              ? (U = ue.value) == null
                ? void 0
                : U.offsetWidth
              : 0,
            P = L.value ? L.value.offsetWidth : 0;
          C > 0
            ? (f.value = Math.min(0, f.value + C))
            : z < P
            ? f.value >= -(P - z) && (f.value = Math.max(f.value + C, z - P))
            : (f.value = 0);
        };
      function O(C, z) {
        const P = s.value.some(re => re.path === C);
        function U(re, j, Y) {
          P ||
            re.forEach(N => {
              const oe = Y + N.path;
              N.path === j || oe === j
                ? Ce().handleTags("push", {
                    path: j,
                    parentPath: `/${Y.split("/")[1]}`,
                    meta: N.meta,
                    name: N.name
                  })
                : N.children && N.children.length > 0 && U(N.children, j, Y);
            });
        }
        U(n.options.routes, C, z);
      }
      function Z() {
        const { fullPath: C, query: z } = a(e);
        n.replace({ path: "/redirect" + C, query: z }), it(e, "refresh");
      }
      function B(C, z, P) {
        var Y, N, oe, Te;
        const U = s.value.findIndex(we => {
            if (we.query) {
              if (we.path === C.path) return we.query === C.query;
            } else if (we.params) {
              if (we.path === C.path) return we.params === C.params;
            } else return we.path === C.path;
          }),
          re = (we, nn, on) => {
            on
              ? Ce().handleTags("equal", [Ve === "false" ? qt[0] : me(ut()), C])
              : Ce().handleTags("splice", "", { startIndex: we, length: nn }),
              r();
          };
        P === "other"
          ? re(1, 1, !0)
          : P === "left"
          ? re(1, U - 1)
          : P === "right"
          ? re(U + 1, s.value.length)
          : re(U, 1);
        const j = Ce().handleTags("slice");
        if (z === e.path) {
          if (P === "left") return;
          (Y = j[0]) != null && Y.query
            ? n.push({ name: j[0].name, query: j[0].query })
            : (N = j[0]) != null && N.params
            ? n.push({ name: j[0].name, params: j[0].params })
            : n.push({ path: j[0].path });
        } else {
          if (!s.value.length || s.value.some(we => we.path === e.path)) return;
          (oe = j[0]) != null && oe.query
            ? n.push({ name: j[0].name, query: j[0].query })
            : (Te = j[0]) != null && Te.params
            ? n.push({ name: j[0].name, params: j[0].params })
            : n.push({ path: j[0].path });
        }
      }
      function R(C, z) {
        B(C, C.path, z), it(e);
      }
      function G(C, z, P) {
        if (z && z.disabled) return;
        let U;
        switch (
          (P
            ? (U = {
                path: P.path,
                meta: P.meta,
                name: P.name,
                query: P == null ? void 0 : P.query,
                params: P == null ? void 0 : P.params
              })
            : (U = { path: e.path, meta: e.meta }),
          C)
        ) {
          case 0:
            Z();
            break;
          case 1:
            R(U);
            break;
          case 2:
            R(U, "left");
            break;
          case 3:
            R(U, "right");
            break;
          case 4:
            R(U, "other");
            break;
          case 5:
            Ce().handleTags("splice", "", {
              startIndex: 1,
              length: s.value.length
            }),
              n.push(le),
              it(e);
            break;
          case 6:
            De(),
              setTimeout(() => {
                Me.value
                  ? ((u[6].icon = Mt), (u[6].text = "退出全屏"))
                  : ((u[6].icon = Ke), (u[6].text = "全屏"));
              }, 100);
            break;
          case 7:
            Q(),
              setTimeout(() => {
                v.hiddenSideBar
                  ? ((u[7].icon = Mt), (u[7].text = "内容区退出全屏"))
                  : ((u[7].icon = Ke), (u[7].text = "内容区全屏"));
              }, 100);
            break;
        }
        setTimeout(() => {
          be(e.fullPath, e.query);
        });
      }
      function ne(C) {
        const { key: z, item: P } = C;
        G(z, P);
      }
      function _e(C, z) {
        G(C, z, b.value);
      }
      function xe(C) {
        Array.of(1, 2, 3, 4, 5).forEach(z => {
          u[z].show = C;
        });
      }
      function X(C) {
        Array.of(1, 2, 3, 4, 5).forEach(z => {
          u[z].disabled = C;
        });
      }
      function be(C, z = {}, P = !1) {
        const U = s.value,
          re = s.value.length;
        let j = -1;
        fn(z)
          ? (j = U.findIndex(Y => Y.path === C))
          : (j = U.findIndex(Y => He(Y.query, z))),
          xe(!0),
          P && (u[0].show = !0),
          j === 1 && re !== 2
            ? ((u[2].show = !1),
              Array.of(1, 3, 4, 5).forEach(Y => {
                u[Y].disabled = !1;
              }),
              (u[2].disabled = !0))
            : j === 1 && re === 2
            ? (X(!1),
              Array.of(2, 3, 4).forEach(Y => {
                (u[Y].show = !1), (u[Y].disabled = !0);
              }))
            : re - 1 === j && j !== 0
            ? ((u[3].show = !1),
              Array.of(1, 2, 4, 5).forEach(Y => {
                u[Y].disabled = !1;
              }),
              (u[3].disabled = !0))
            : j === 0 || C === `/redirect${le}`
            ? X(!0)
            : X(!1);
      }
      function Ye(C, z) {
        $(),
          C.path === le
            ? (xe(!1), (u[0].show = !0))
            : e.path !== C.path && e.name !== C.name
            ? ((u[0].show = !1), be(C.path, C.query))
            : s.value.length === 2 && e.path !== C.path
            ? (xe(!0), (u[4].show = !1))
            : e.path === C.path && be(C.path, C.query, !0),
          (b.value = C);
        const P = 105,
          U = a(J).getBoundingClientRect().left,
          j = a(J).offsetWidth - P,
          Y = z.clientX - U + 5;
        Y > j ? (w.value = j) : (w.value = Y),
          kt().hiddenSideBar
            ? (p.value = z.clientY)
            : (p.value = z.clientY - 40),
          Re(() => {
            o.value = !0;
          });
      }
      function tn(C) {
        const { name: z, path: P } = C;
        z
          ? C.query
            ? n.push({ name: z, query: C.query })
            : C.params
            ? n.push({ name: z, params: C.params })
            : n.push({ name: z })
          : n.push({ path: P });
      }
      return (
        yt(() => {
          c &&
            (be(e.fullPath),
            Le.on("tagViewsChange", C => {
              a(i) !== C && (i.value = C);
            }),
            Le.on("tagViewsShowModel", C => {
              _.value = C;
            }),
            Le.on("changLayoutRoute", ({ indexPath: C, parentPath: z }) => {
              O(C, z),
                setTimeout(() => {
                  be(C);
                });
            }));
        }),
        $e([e], () => {
          (g.value = -1), r();
        }),
        $e(Me, () => {
          (u[6].icon = Ke), (u[6].text = "全屏");
        }),
        M(() => {
          Ln(
            ue,
            Ht(() => {
              r();
            }, 200)
          );
        }),
        (C, z) => {
          const P = x("IconifyIconOffline"),
            U = x("router-link"),
            re = x("el-dropdown-item"),
            j = x("el-dropdown-menu"),
            Y = x("el-dropdown");
          return a(i)
            ? K("", !0)
            : (h(),
              T(
                "div",
                { key: 0, ref_key: "containerDom", ref: J, class: "tags-view" },
                [
                  Se(
                    y(
                      "span",
                      na,
                      [
                        m(
                          P,
                          {
                            icon: a(ea),
                            onClick: z[0] || (z[0] = N => d(200))
                          },
                          null,
                          8,
                          ["icon"]
                        )
                      ],
                      512
                    ),
                    [[Ne, de.value]]
                  ),
                  y(
                    "div",
                    {
                      ref_key: "scrollbarDom",
                      ref: ue,
                      class: "scroll-container"
                    },
                    [
                      y(
                        "div",
                        {
                          class: "tab select-none",
                          ref_key: "tabDom",
                          ref: L,
                          style: ie(a(S))
                        },
                        [
                          (h(!0),
                          T(
                            ve,
                            null,
                            ge(
                              a(s),
                              (N, oe) => (
                                h(),
                                T(
                                  "div",
                                  {
                                    ref_for: !0,
                                    ref: "dynamic" + oe,
                                    key: oe,
                                    class: fe([
                                      "scroll-item is-closable",
                                      a(A)(N),
                                      a(e).path === N.path && a(_) === "card"
                                        ? "card-active"
                                        : ""
                                    ]),
                                    onContextmenu: Ze(
                                      Te => Ye(N, Te),
                                      ["prevent"]
                                    ),
                                    onMouseenter: Ze(
                                      Te => a(W)(oe),
                                      ["prevent"]
                                    ),
                                    onMouseleave: Ze(
                                      Te => a(q)(oe),
                                      ["prevent"]
                                    ),
                                    onClick: Te => tn(N)
                                  },
                                  [
                                    m(
                                      U,
                                      {
                                        to: N.path,
                                        class:
                                          "dark:!text-text_color_primary dark:hover:!text-primary"
                                      },
                                      {
                                        default: k(() => [
                                          ce(ee(N.meta.title), 1)
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    a(E)(N, oe) || (oe === a(g) && oe !== 0)
                                      ? (h(),
                                        T(
                                          "span",
                                          {
                                            key: 0,
                                            class: "el-icon-close",
                                            onClick: Ze(Te => R(N), ["stop"])
                                          },
                                          [
                                            m(P, { icon: a(ta) }, null, 8, [
                                              "icon"
                                            ])
                                          ],
                                          8,
                                          aa
                                        ))
                                      : K("", !0),
                                    a(_) !== "card"
                                      ? (h(),
                                        T(
                                          "div",
                                          {
                                            key: 1,
                                            ref_for: !0,
                                            ref: "schedule" + oe,
                                            class: fe([a(F)(N)])
                                          },
                                          null,
                                          2
                                        ))
                                      : K("", !0)
                                  ],
                                  42,
                                  oa
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        4
                      )
                    ],
                    512
                  ),
                  Se(
                    y(
                      "span",
                      la,
                      [
                        m(
                          P,
                          {
                            icon: a(Qo),
                            onClick: z[1] || (z[1] = N => d(-200))
                          },
                          null,
                          8,
                          ["icon"]
                        )
                      ],
                      512
                    ),
                    [[Ne, de.value]]
                  ),
                  m(
                    bt,
                    { name: "el-zoom-in-top" },
                    {
                      default: k(() => [
                        Se(
                          (h(),
                          T(
                            "ul",
                            {
                              key: Math.random(),
                              style: ie(a(I)),
                              class: "contextmenu"
                            },
                            [
                              (h(!0),
                              T(
                                ve,
                                null,
                                ge(
                                  a(u).slice(0, 6),
                                  (N, oe) => (
                                    h(),
                                    T(
                                      "div",
                                      {
                                        key: oe,
                                        style: {
                                          display: "flex",
                                          "align-items": "center"
                                        }
                                      },
                                      [
                                        N.show
                                          ? (h(),
                                            T(
                                              "li",
                                              {
                                                key: 0,
                                                onClick: Te => _e(oe, N)
                                              },
                                              [
                                                m(
                                                  P,
                                                  { icon: N.icon },
                                                  null,
                                                  8,
                                                  ["icon"]
                                                ),
                                                ce(" " + ee(N.text), 1)
                                              ],
                                              8,
                                              sa
                                            ))
                                          : K("", !0)
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            ],
                            4
                          )),
                          [[Ne, a(o)]]
                        )
                      ]),
                      _: 1
                    }
                  ),
                  m(
                    Y,
                    {
                      trigger: "click",
                      placement: "bottom-end",
                      onCommand: ne
                    },
                    {
                      dropdown: k(() => [
                        m(j, null, {
                          default: k(() => [
                            (h(!0),
                            T(
                              ve,
                              null,
                              ge(
                                a(u),
                                (N, oe) => (
                                  h(),
                                  V(
                                    re,
                                    {
                                      key: oe,
                                      command: { key: oe, item: N },
                                      divided: N.divided,
                                      disabled: N.disabled
                                    },
                                    {
                                      default: k(() => [
                                        m(P, { icon: N.icon }, null, 8, [
                                          "icon"
                                        ]),
                                        ce(" " + ee(N.text), 1)
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ["command", "divided", "disabled"]
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        })
                      ]),
                      default: k(() => [
                        y("span", ra, [
                          m(
                            P,
                            { icon: a(Yo), class: "dark:text-white" },
                            null,
                            8,
                            ["icon"]
                          )
                        ])
                      ]),
                      _: 1
                    }
                  )
                ],
                512
              ));
        }
      );
    }
  });
const ca = pe(ia, [["__scopeId", "data-v-9a207086"]]),
  ua = { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" },
  da = y("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
  fa = y(
    "path",
    {
      d: "M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zm6.698-1.123 1.157.066L12 19.527l1.265-2.53 1.157-.066a42.137 42.137 0 0 0 4.227-.454A33.913 33.913 0 0 0 12 4.09a33.913 33.913 0 0 0-6.649 12.387c1.395.222 2.805.374 4.227.454zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    },
    null,
    -1
  ),
  pa = [da, fa];
function ha(t, e) {
  return h(), T("svg", ua, pa);
}
const Xt = { render: ha },
  va = { key: 1 },
  _a = te({
    __name: "appMain",
    props: { fixedHeader: Boolean },
    setup(t) {
      const e = t,
        { $storage: n, $config: o } = wt(),
        i = H(() => (o == null ? void 0 : o.KeepAlive)),
        c = H(() => _ => _.meta.transition),
        s = H(() => (n == null ? void 0 : n.configure.hideTabs)),
        u = H(() => (n == null ? void 0 : n.layout.layout) === "vertical"),
        p = H(() => [
          s.value && u ? "padding-top: 48px;" : "",
          !s.value && u ? "padding-top: 85px;" : "",
          s.value && !u.value ? "padding-top: 48px" : "",
          !s.value && !u.value ? "padding-top: 85px;" : "",
          e.fixedHeader ? "" : "padding-top: 0;"
        ]),
        w = te({
          render() {
            return Ue(
              bt,
              {
                name:
                  c.value(this.route) &&
                  this.route.meta.transition.enterTransition
                    ? "pure-classes-transition"
                    : (c.value(this.route) &&
                        this.route.meta.transition.name) ||
                      "fade-transform",
                enterActiveClass:
                  c.value(this.route) &&
                  `animate__animated ${this.route.meta.transition.enterTransition}`,
                leaveActiveClass:
                  c.value(this.route) &&
                  `animate__animated ${this.route.meta.transition.leaveTransition}`,
                mode: "out-in",
                appear: !0
              },
              { default: () => [this.$slots.default()] }
            );
          },
          props: { route: { type: void 0, required: !0 } }
        });
      return (_, f) => {
        const v = x("el-backtop"),
          g = x("el-scrollbar"),
          S = x("router-view");
        return (
          h(),
          T(
            "section",
            {
              class: fe([
                e.fixedHeader ? "app-main" : "app-main-nofixed-header"
              ]),
              style: ie(p.value)
            },
            [
              m(S, null, {
                default: k(({ Component: E, route: A }) => [
                  e.fixedHeader
                    ? (h(),
                      V(
                        g,
                        { key: 0 },
                        {
                          default: k(() => [
                            m(
                              v,
                              {
                                title: "回到顶部",
                                target: ".app-main .el-scrollbar__wrap"
                              },
                              { default: k(() => [m(a(Xt))]), _: 1 }
                            ),
                            m(
                              a(w),
                              { route: A },
                              {
                                default: k(() => [
                                  i.value
                                    ? (h(),
                                      V(
                                        Tt,
                                        {
                                          key: 0,
                                          include: a(he)().cachePageList
                                        },
                                        [
                                          (h(),
                                          V(ze(E), {
                                            key: A.fullPath,
                                            class: "main-content"
                                          }))
                                        ],
                                        1032,
                                        ["include"]
                                      ))
                                    : (h(),
                                      V(ze(E), {
                                        key: A.fullPath,
                                        class: "main-content"
                                      }))
                                ]),
                                _: 2
                              },
                              1032,
                              ["route"]
                            )
                          ]),
                          _: 2
                        },
                        1024
                      ))
                    : (h(),
                      T("div", va, [
                        m(
                          a(w),
                          { route: A },
                          {
                            default: k(() => [
                              i.value
                                ? (h(),
                                  V(
                                    Tt,
                                    { key: 0, include: a(he)().cachePageList },
                                    [
                                      (h(),
                                      V(ze(E), {
                                        key: A.fullPath,
                                        class: "main-content"
                                      }))
                                    ],
                                    1032,
                                    ["include"]
                                  ))
                                : (h(),
                                  V(ze(E), {
                                    key: A.fullPath,
                                    class: "main-content"
                                  }))
                            ]),
                            _: 2
                          },
                          1032,
                          ["route"]
                        )
                      ]))
                ]),
                _: 1
              })
            ],
            6
          )
        );
      };
    }
  });
const Vt = pe(_a, [["__scopeId", "data-v-ac212d1d"]]),
  $t = t => (Bt("data-v-2fe46f27"), (t = t()), Nt(), t),
  ma = $t(() => y("div", { class: "right-panel-background" }, null, -1)),
  ga = { class: "right-panel-items" },
  ya = { class: "project-configuration" },
  ba = $t(() => y("h4", { class: "dark:text-white" }, "主题配置", -1)),
  wa = $t(() =>
    y(
      "div",
      {
        class:
          "border-b-[1px] border-solid border-[#dcdfe6] dark:border-[#303030]"
      },
      null,
      -1
    )
  ),
  ka = te({
    __name: "index",
    setup(t) {
      const e = D(null),
        n = D(!1),
        o = H(() => [
          "mr-[20px]",
          "outline-none",
          "width-[20px]",
          "height-[20px]",
          "rounded-[4px]",
          "cursor-pointer",
          "transition-colors",
          "hover:bg-[#0000000f]",
          "dark:hover:bg-[#ffffff1f]",
          "dark:hover:text-[#ffffffd9]"
        ]);
      return (
        In(e, i => {
          i.clientX > e.value.offsetLeft || (n.value = !1);
        }),
        Le.on("openPanel", () => {
          n.value = !0;
        }),
        (i, c) => {
          const s = x("IconifyIconOffline");
          return (
            h(),
            T(
              "div",
              { class: fe([{ show: n.value }, "right-panel-container"]) },
              [
                ma,
                y(
                  "div",
                  {
                    ref_key: "target",
                    ref: e,
                    class: "right-panel bg-bg_color"
                  },
                  [
                    y("div", ga, [
                      y("div", ya, [
                        ba,
                        y(
                          "span",
                          { title: "关闭配置", class: fe(o.value) },
                          [
                            m(
                              s,
                              {
                                class: "dark:text-white",
                                width: "20px",
                                height: "20px",
                                icon: a(Kt),
                                onClick:
                                  c[0] || (c[0] = u => (n.value = !n.value))
                              },
                              null,
                              8,
                              ["icon"]
                            )
                          ],
                          2
                        )
                      ]),
                      wa,
                      pn(i.$slots, "default", {}, void 0, !0)
                    ])
                  ],
                  512
                )
              ],
              2
            )
          );
        }
      );
    }
  });
const xa = pe(ka, [["__scopeId", "data-v-2fe46f27"]]),
  Ca = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'
  },
  ye = t => (Bt("data-v-5945f667"), (t = t()), Nt(), t),
  Sa = { class: "pure-theme" },
  $a = ye(() => y("div", null, null, -1)),
  Ia = ye(() => y("div", null, null, -1)),
  Ma = [$a, Ia],
  Ta = ye(() => y("div", null, null, -1)),
  Ea = ye(() => y("div", null, null, -1)),
  za = [Ta, Ea],
  Aa = ye(() => y("div", null, null, -1)),
  La = ye(() => y("div", null, null, -1)),
  Va = [Aa, La],
  Oa = { class: "theme-color" },
  Pa = ["onClick"],
  Da = { class: "setting" },
  Ha = ye(() => y("span", { class: "dark:text-white" }, "灰色模式", -1)),
  ja = ye(() => y("span", { class: "dark:text-white" }, "色弱模式", -1)),
  Ra = ye(() => y("span", { class: "dark:text-white" }, "隐藏标签页", -1)),
  qa = ye(() => y("span", { class: "dark:text-white" }, "侧边栏Logo", -1)),
  Ba = ye(() => y("span", { class: "dark:text-white" }, "标签页持久化", -1)),
  Na = ye(() => y("span", { class: "dark:text-white" }, "标签风格", -1)),
  Fa = te({
    __name: "index",
    setup(t) {
      var De, r;
      const e = tt(),
        { isDark: n } = Ft(),
        { device: o, tooltipEffect: i } = Ie(),
        { $storage: c } = wt(),
        s = D(),
        u = D(),
        p = D(),
        {
          dataTheme: w,
          layoutTheme: _,
          themeColors: f,
          dataThemeChange: v,
          setEpThemeColor: g,
          setLayoutThemeColor: S
        } = wn();
      if (a(_)) {
        const l = a(_).layout,
          d = a(_).theme;
        kn({ scopeName: `layout-theme-${d}` }), Me(l);
      }
      const E = D(
          ((De = c.configure) == null ? void 0 : De.showModel) ?? "smart"
        ),
        A = D(((r = c.configure) == null ? void 0 : r.showLogo) ?? !0),
        b = gt({
          greyVal: c.configure.grey,
          weakVal: c.configure.weak,
          tabsVal: c.configure.hideTabs,
          showLogo: c.configure.showLogo,
          showModel: c.configure.showModel,
          multiTagsCache: c.configure.multiTagsCache
        }),
        F = H(() => l => ({ background: l })),
        I = H(() => l => !(l === "light" && n.value));
      function $(l, d) {
        const O = c.configure;
        (O[l] = d), (c.configure = O);
      }
      function M(l, d, O) {
        const Z = O || document.body;
        let { className: B } = Z;
        (B = B.replace(d, "").trim()), (Z.className = l ? `${B} ${d} ` : B);
      }
      const W = l => {
          M(b.greyVal, "html-grey", document.querySelector("html")),
            $("grey", l);
        },
        q = l => {
          M(b.weakVal, "html-weakness", document.querySelector("html")),
            $("weak", l);
        },
        Q = () => {
          const l = b.tabsVal;
          $("hideTabs", l), Le.emit("tagViewsChange", l);
        },
        L = () => {
          const l = b.multiTagsCache;
          $("multiTagsCache", l), Ce().multiTagsCacheChange(l);
        };
      function J() {
        hn(), Be().clear(), vn().clear();
        const {
          Grey: l,
          Weak: d,
          MultiTagsCache: O,
          EpThemeColor: Z,
          Layout: B
        } = Ge();
        Pe().setLayout(B),
          g(Z),
          Ce().multiTagsCacheChange(O),
          M(l, "html-grey", document.querySelector("html")),
          M(d, "html-weakness", document.querySelector("html")),
          e.push("/login"),
          Ce().handleTags("equal", [...qt]),
          _n();
      }
      function ue(l) {
        $("showModel", l), Le.emit("tagViewsShowModel", l);
      }
      function de() {
        a(A) ? $("showLogo", !0) : $("showLogo", !1),
          Le.emit("logoChange", a(A));
      }
      function le(l) {
        l.forEach(d => {
          M(!1, "is-select", a(d));
        });
      }
      const Ve = H(
        () => l =>
          l === _.value.theme && _.value.theme !== "light"
            ? "#fff"
            : l === _.value.theme && _.value.theme === "light"
            ? "#1d2b45"
            : "transparent"
      );
      function Me(l) {
        var d, O, Z;
        (_.value.layout = l),
          window.document.body.setAttribute("layout", l),
          (c.layout = {
            layout: l,
            theme: _.value.theme,
            darkMode: (d = c.layout) == null ? void 0 : d.darkMode,
            sidebarStatus: (O = c.layout) == null ? void 0 : O.sidebarStatus,
            epThemeColor: (Z = c.layout) == null ? void 0 : Z.epThemeColor
          }),
          Pe().setLayout(l);
      }
      return (
        $e(c, ({ layout: l }) => {
          switch (l.layout) {
            case "vertical":
              M(!0, "is-select", a(u)), qe(le([p]), 50), qe(le([s]), 50);
              break;
            case "horizontal":
              M(!0, "is-select", a(p)), qe(le([u]), 50), qe(le([s]), 50);
              break;
            case "mix":
              M(!0, "is-select", a(s)), qe(le([u]), 50), qe(le([p]), 50);
              break;
          }
        }),
        yt(() => {
          v(),
            Re(() => {
              var l, d;
              b.greyVal &&
                ((l = document.querySelector("html")) == null ||
                  l.setAttribute("class", "html-grey")),
                b.weakVal &&
                  ((d = document.querySelector("html")) == null ||
                    d.setAttribute("class", "html-weakness")),
                b.tabsVal && Q();
            });
        }),
        (l, d) => {
          const O = x("el-divider"),
            Z = x("el-switch"),
            B = x("el-tooltip"),
            R = x("IconifyIconOffline"),
            G = x("el-icon"),
            ne = x("el-radio"),
            _e = x("el-radio-group"),
            xe = x("el-button");
          return (
            h(),
            V(xa, null, {
              default: k(() => [
                m(O, null, { default: k(() => [ce("主题")]), _: 1 }),
                m(
                  Z,
                  {
                    modelValue: a(w),
                    "onUpdate:modelValue":
                      d[0] || (d[0] = X => (jt(w) ? (w.value = X) : null)),
                    "inline-prompt": "",
                    class: "pure-datatheme",
                    "active-icon": a(xn),
                    "inactive-icon": a(Cn),
                    onChange: a(v)
                  },
                  null,
                  8,
                  ["modelValue", "active-icon", "inactive-icon", "onChange"]
                ),
                m(O, null, { default: k(() => [ce("导航栏模式")]), _: 1 }),
                y("ul", Sa, [
                  m(
                    B,
                    {
                      effect: a(i),
                      class: "item",
                      content: "左侧模式",
                      placement: "bottom",
                      "popper-class": "pure-tooltip"
                    },
                    {
                      default: k(() => [
                        y(
                          "li",
                          {
                            class: fe(
                              a(_).layout === "vertical" ? "is-select" : ""
                            ),
                            ref_key: "verticalRef",
                            ref: u,
                            onClick: d[1] || (d[1] = X => Me("vertical"))
                          },
                          Ma,
                          2
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["effect"]
                  ),
                  a(o) !== "mobile"
                    ? (h(),
                      V(
                        B,
                        {
                          key: 0,
                          effect: a(i),
                          class: "item",
                          content: "顶部模式",
                          placement: "bottom",
                          "popper-class": "pure-tooltip"
                        },
                        {
                          default: k(() => [
                            y(
                              "li",
                              {
                                class: fe(
                                  a(_).layout === "horizontal"
                                    ? "is-select"
                                    : ""
                                ),
                                ref_key: "horizontalRef",
                                ref: p,
                                onClick: d[2] || (d[2] = X => Me("horizontal"))
                              },
                              za,
                              2
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ["effect"]
                      ))
                    : K("", !0),
                  a(o) !== "mobile"
                    ? (h(),
                      V(
                        B,
                        {
                          key: 1,
                          effect: a(i),
                          class: "item",
                          content: "混合模式",
                          placement: "bottom",
                          "popper-class": "pure-tooltip"
                        },
                        {
                          default: k(() => [
                            y(
                              "li",
                              {
                                class: fe(
                                  a(_).layout === "mix" ? "is-select" : ""
                                ),
                                ref_key: "mixRef",
                                ref: s,
                                onClick: d[3] || (d[3] = X => Me("mix"))
                              },
                              Va,
                              2
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ["effect"]
                      ))
                    : K("", !0)
                ]),
                m(O, null, { default: k(() => [ce("主题色")]), _: 1 }),
                y("ul", Oa, [
                  (h(!0),
                  T(
                    ve,
                    null,
                    ge(a(f), (X, be) =>
                      Se(
                        (h(),
                        T(
                          "li",
                          {
                            key: be,
                            style: ie(F.value(X.color)),
                            onClick: Ye => a(S)(X.themeColor)
                          },
                          [
                            m(
                              G,
                              {
                                style: { margin: "0.1em 0.1em 0 0" },
                                size: 17,
                                color: Ve.value(X.themeColor)
                              },
                              {
                                default: k(() => [
                                  m(R, { icon: a(Ca) }, null, 8, ["icon"])
                                ]),
                                _: 2
                              },
                              1032,
                              ["color"]
                            )
                          ],
                          12,
                          Pa
                        )),
                        [[Ne, I.value(X.themeColor)]]
                      )
                    ),
                    128
                  ))
                ]),
                m(O, null, { default: k(() => [ce("界面显示")]), _: 1 }),
                y("ul", Da, [
                  y("li", null, [
                    Ha,
                    m(
                      Z,
                      {
                        modelValue: b.greyVal,
                        "onUpdate:modelValue":
                          d[4] || (d[4] = X => (b.greyVal = X)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "开",
                        "inactive-text": "关",
                        onChange: W
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  y("li", null, [
                    ja,
                    m(
                      Z,
                      {
                        modelValue: b.weakVal,
                        "onUpdate:modelValue":
                          d[5] || (d[5] = X => (b.weakVal = X)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "开",
                        "inactive-text": "关",
                        onChange: q
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  y("li", null, [
                    Ra,
                    m(
                      Z,
                      {
                        modelValue: b.tabsVal,
                        "onUpdate:modelValue":
                          d[6] || (d[6] = X => (b.tabsVal = X)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "开",
                        "inactive-text": "关",
                        onChange: Q
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  y("li", null, [
                    qa,
                    m(
                      Z,
                      {
                        modelValue: A.value,
                        "onUpdate:modelValue":
                          d[7] || (d[7] = X => (A.value = X)),
                        "inline-prompt": "",
                        "active-value": !0,
                        "inactive-value": !1,
                        "inactive-color": "#a6a6a6",
                        "active-text": "开",
                        "inactive-text": "关",
                        onChange: de
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  y("li", null, [
                    Ba,
                    m(
                      Z,
                      {
                        modelValue: b.multiTagsCache,
                        "onUpdate:modelValue":
                          d[8] || (d[8] = X => (b.multiTagsCache = X)),
                        "inline-prompt": "",
                        "inactive-color": "#a6a6a6",
                        "active-text": "开",
                        "inactive-text": "关",
                        onChange: L
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  y("li", null, [
                    Na,
                    m(
                      _e,
                      {
                        modelValue: E.value,
                        "onUpdate:modelValue":
                          d[9] || (d[9] = X => (E.value = X)),
                        size: "small",
                        onChange: ue
                      },
                      {
                        default: k(() => [
                          m(
                            ne,
                            { label: "card" },
                            { default: k(() => [ce("卡片")]), _: 1 }
                          ),
                          m(
                            ne,
                            { label: "smart" },
                            { default: k(() => [ce("灵动")]), _: 1 }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["modelValue"]
                    )
                  ])
                ]),
                m(O),
                m(
                  xe,
                  {
                    type: "danger",
                    style: { width: "90%", margin: "24px 15px" },
                    onClick: J
                  },
                  {
                    default: k(() => [
                      m(
                        R,
                        {
                          icon: a(at),
                          width: "15",
                          height: "15",
                          style: { "margin-right": "4px" }
                        },
                        null,
                        8,
                        ["icon"]
                      ),
                      ce(" 清空缓存并返回登录页 ")
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            })
          );
        }
      );
    }
  });
const Za = pe(Fa, [["__scopeId", "data-v-5945f667"]]),
  Wa = { class: "sidebar-title" },
  Ua = { class: "sidebar-title" },
  Ga = te({
    __name: "logo",
    props: { collapse: Boolean },
    setup(t) {
      const e = t,
        { title: n } = Ie(),
        o = ut().path;
      return (i, c) => {
        const s = x("router-link");
        return (
          h(),
          T(
            "div",
            {
              class: fe(["sidebar-logo-container", { collapses: e.collapse }])
            },
            [
              m(
                bt,
                { name: "sidebarLogoFade" },
                {
                  default: k(() => [
                    e.collapse
                      ? (h(),
                        V(
                          s,
                          {
                            key: "props.collapse",
                            title: a(n),
                            class: "sidebar-logo-link",
                            to: a(o)
                          },
                          {
                            default: k(() => [y("span", Wa, ee(a(n)), 1)]),
                            _: 1
                          },
                          8,
                          ["title", "to"]
                        ))
                      : (h(),
                        V(
                          s,
                          {
                            key: "expand",
                            title: a(n),
                            class: "sidebar-logo-link",
                            to: a(o)
                          },
                          {
                            default: k(() => [y("span", Ua, ee(a(n)), 1)]),
                            _: 1
                          },
                          8,
                          ["title", "to"]
                        ))
                  ]),
                  _: 1
                }
              )
            ],
            2
          )
        );
      };
    }
  });
const Ka = pe(Ga, [["__scopeId", "data-v-e12294e2"]]);
var Je = { exports: {} },
  Jt = {},
  Xa = function (e) {
    return (
      e &&
      typeof e == "object" &&
      typeof e.copy == "function" &&
      typeof e.fill == "function" &&
      typeof e.readUInt8 == "function"
    );
  },
  ft = { exports: {} };
typeof Object.create == "function"
  ? (ft.exports = function (e, n) {
      (e.super_ = n),
        (e.prototype = Object.create(n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
    })
  : (ft.exports = function (e, n) {
      e.super_ = n;
      var o = function () {};
      (o.prototype = n.prototype),
        (e.prototype = new o()),
        (e.prototype.constructor = e);
    });
var Ja = ft.exports;
(function (t) {
  var e = /%[sdj%]/g;
  (t.format = function (r) {
    if (!I(r)) {
      for (var l = [], d = 0; d < arguments.length; d++)
        l.push(i(arguments[d]));
      return l.join(" ");
    }
    for (
      var d = 1,
        O = arguments,
        Z = O.length,
        B = String(r).replace(e, function (G) {
          if (G === "%%") return "%";
          if (d >= Z) return G;
          switch (G) {
            case "%s":
              return String(O[d++]);
            case "%d":
              return Number(O[d++]);
            case "%j":
              try {
                return JSON.stringify(O[d++]);
              } catch {
                return "[Circular]";
              }
            default:
              return G;
          }
        }),
        R = O[d];
      d < Z;
      R = O[++d]
    )
      A(R) || !q(R) ? (B += " " + R) : (B += " " + i(R));
    return B;
  }),
    (t.deprecate = function (r, l) {
      if (M(mn.process))
        return function () {
          return t.deprecate(r, l).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return r;
      var d = !1;
      function O() {
        if (!d) {
          if (process.throwDeprecation) throw new Error(l);
          process.traceDeprecation ? console.trace(l) : console.error(l),
            (d = !0);
        }
        return r.apply(this, arguments);
      }
      return O;
    });
  var n = {},
    o;
  t.debuglog = function (r) {
    if ((M(o) && (o = {}.NODE_DEBUG || ""), (r = r.toUpperCase()), !n[r]))
      if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
        var l = process.pid;
        n[r] = function () {
          var d = t.format.apply(t, arguments);
          console.error("%s %d: %s", r, l, d);
        };
      } else n[r] = function () {};
    return n[r];
  };
  function i(r, l) {
    var d = { seen: [], stylize: s };
    return (
      arguments.length >= 3 && (d.depth = arguments[2]),
      arguments.length >= 4 && (d.colors = arguments[3]),
      E(l) ? (d.showHidden = l) : l && t._extend(d, l),
      M(d.showHidden) && (d.showHidden = !1),
      M(d.depth) && (d.depth = 2),
      M(d.colors) && (d.colors = !1),
      M(d.customInspect) && (d.customInspect = !0),
      d.colors && (d.stylize = c),
      p(d, r, d.depth)
    );
  }
  (t.inspect = i),
    (i.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }),
    (i.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    });
  function c(r, l) {
    var d = i.styles[l];
    return d
      ? "\x1B[" + i.colors[d][0] + "m" + r + "\x1B[" + i.colors[d][1] + "m"
      : r;
  }
  function s(r, l) {
    return r;
  }
  function u(r) {
    var l = {};
    return (
      r.forEach(function (d, O) {
        l[d] = !0;
      }),
      l
    );
  }
  function p(r, l, d) {
    if (
      r.customInspect &&
      l &&
      J(l.inspect) &&
      l.inspect !== t.inspect &&
      !(l.constructor && l.constructor.prototype === l)
    ) {
      var O = l.inspect(d, r);
      return I(O) || (O = p(r, O, d)), O;
    }
    var Z = w(r, l);
    if (Z) return Z;
    var B = Object.keys(l),
      R = u(B);
    if (
      (r.showHidden && (B = Object.getOwnPropertyNames(l)),
      L(l) && (B.indexOf("message") >= 0 || B.indexOf("description") >= 0))
    )
      return _(l);
    if (B.length === 0) {
      if (J(l)) {
        var G = l.name ? ": " + l.name : "";
        return r.stylize("[Function" + G + "]", "special");
      }
      if (W(l)) return r.stylize(RegExp.prototype.toString.call(l), "regexp");
      if (Q(l)) return r.stylize(Date.prototype.toString.call(l), "date");
      if (L(l)) return _(l);
    }
    var ne = "",
      _e = !1,
      xe = ["{", "}"];
    if ((S(l) && ((_e = !0), (xe = ["[", "]"])), J(l))) {
      var X = l.name ? ": " + l.name : "";
      ne = " [Function" + X + "]";
    }
    if (
      (W(l) && (ne = " " + RegExp.prototype.toString.call(l)),
      Q(l) && (ne = " " + Date.prototype.toUTCString.call(l)),
      L(l) && (ne = " " + _(l)),
      B.length === 0 && (!_e || l.length == 0))
    )
      return xe[0] + ne + xe[1];
    if (d < 0)
      return W(l)
        ? r.stylize(RegExp.prototype.toString.call(l), "regexp")
        : r.stylize("[Object]", "special");
    r.seen.push(l);
    var be;
    return (
      _e
        ? (be = f(r, l, d, R, B))
        : (be = B.map(function (Ye) {
            return v(r, l, d, R, Ye, _e);
          })),
      r.seen.pop(),
      g(be, ne, xe)
    );
  }
  function w(r, l) {
    if (M(l)) return r.stylize("undefined", "undefined");
    if (I(l)) {
      var d =
        "'" +
        JSON.stringify(l)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return r.stylize(d, "string");
    }
    if (F(l)) return r.stylize("" + l, "number");
    if (E(l)) return r.stylize("" + l, "boolean");
    if (A(l)) return r.stylize("null", "null");
  }
  function _(r) {
    return "[" + Error.prototype.toString.call(r) + "]";
  }
  function f(r, l, d, O, Z) {
    for (var B = [], R = 0, G = l.length; R < G; ++R)
      De(l, String(R)) ? B.push(v(r, l, d, O, String(R), !0)) : B.push("");
    return (
      Z.forEach(function (ne) {
        ne.match(/^\d+$/) || B.push(v(r, l, d, O, ne, !0));
      }),
      B
    );
  }
  function v(r, l, d, O, Z, B) {
    var R, G, ne;
    if (
      ((ne = Object.getOwnPropertyDescriptor(l, Z) || { value: l[Z] }),
      ne.get
        ? ne.set
          ? (G = r.stylize("[Getter/Setter]", "special"))
          : (G = r.stylize("[Getter]", "special"))
        : ne.set && (G = r.stylize("[Setter]", "special")),
      De(O, Z) || (R = "[" + Z + "]"),
      G ||
        (r.seen.indexOf(ne.value) < 0
          ? (A(d) ? (G = p(r, ne.value, null)) : (G = p(r, ne.value, d - 1)),
            G.indexOf(`
`) > -1 &&
              (B
                ? (G = G.split(
                    `
`
                  )
                    .map(function (_e) {
                      return "  " + _e;
                    })
                    .join(
                      `
`
                    )
                    .substr(2))
                : (G =
                    `
` +
                    G.split(
                      `
`
                    ).map(function (_e) {
                      return "   " + _e;
                    }).join(`
`))))
          : (G = r.stylize("[Circular]", "special"))),
      M(R))
    ) {
      if (B && Z.match(/^\d+$/)) return G;
      (R = JSON.stringify("" + Z)),
        R.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((R = R.substr(1, R.length - 2)), (R = r.stylize(R, "name")))
          : ((R = R.replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (R = r.stylize(R, "string")));
    }
    return R + ": " + G;
  }
  function g(r, l, d) {
    var O = r.reduce(function (Z, B) {
      return (
        B.indexOf(`
`) >= 0,
        Z + B.replace(/\u001b\[\d\d?m/g, "").length + 1
      );
    }, 0);
    return O > 60
      ? d[0] +
          (l === ""
            ? ""
            : l +
              `
 `) +
          " " +
          r.join(`,
  `) +
          " " +
          d[1]
      : d[0] + l + " " + r.join(", ") + " " + d[1];
  }
  function S(r) {
    return Array.isArray(r);
  }
  t.isArray = S;
  function E(r) {
    return typeof r == "boolean";
  }
  t.isBoolean = E;
  function A(r) {
    return r === null;
  }
  t.isNull = A;
  function b(r) {
    return r == null;
  }
  t.isNullOrUndefined = b;
  function F(r) {
    return typeof r == "number";
  }
  t.isNumber = F;
  function I(r) {
    return typeof r == "string";
  }
  t.isString = I;
  function $(r) {
    return typeof r == "symbol";
  }
  t.isSymbol = $;
  function M(r) {
    return r === void 0;
  }
  t.isUndefined = M;
  function W(r) {
    return q(r) && de(r) === "[object RegExp]";
  }
  t.isRegExp = W;
  function q(r) {
    return typeof r == "object" && r !== null;
  }
  t.isObject = q;
  function Q(r) {
    return q(r) && de(r) === "[object Date]";
  }
  t.isDate = Q;
  function L(r) {
    return q(r) && (de(r) === "[object Error]" || r instanceof Error);
  }
  t.isError = L;
  function J(r) {
    return typeof r == "function";
  }
  t.isFunction = J;
  function ue(r) {
    return (
      r === null ||
      typeof r == "boolean" ||
      typeof r == "number" ||
      typeof r == "string" ||
      typeof r == "symbol" ||
      typeof r > "u"
    );
  }
  (t.isPrimitive = ue), (t.isBuffer = Xa);
  function de(r) {
    return Object.prototype.toString.call(r);
  }
  function le(r) {
    return r < 10 ? "0" + r.toString(10) : r.toString(10);
  }
  var Ve = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function Me() {
    var r = new Date(),
      l = [le(r.getHours()), le(r.getMinutes()), le(r.getSeconds())].join(":");
    return [r.getDate(), Ve[r.getMonth()], l].join(" ");
  }
  (t.log = function () {
    console.log("%s - %s", Me(), t.format.apply(t, arguments));
  }),
    (t.inherits = Ja),
    (t._extend = function (r, l) {
      if (!l || !q(l)) return r;
      for (var d = Object.keys(l), O = d.length; O--; ) r[d[O]] = l[d[O]];
      return r;
    });
  function De(r, l) {
    return Object.prototype.hasOwnProperty.call(r, l);
  }
})(Jt);
var Ya = process.platform === "win32",
  ke = Jt;
function lt(t, e) {
  for (var n = [], o = 0; o < t.length; o++) {
    var i = t[o];
    !i ||
      i === "." ||
      (i === ".."
        ? n.length && n[n.length - 1] !== ".."
          ? n.pop()
          : e && n.push("..")
        : n.push(i));
  }
  return n;
}
function Xe(t) {
  for (var e = t.length - 1, n = 0; n <= e && !t[n]; n++);
  for (var o = e; o >= 0 && !t[o]; o--);
  return n === 0 && o === e ? t : n > o ? [] : t.slice(n, o + 1);
}
var Yt = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  Qa = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  ae = {};
function st(t) {
  var e = Yt.exec(t),
    n = (e[1] || "") + (e[2] || ""),
    o = e[3] || "",
    i = Qa.exec(o),
    c = i[1],
    s = i[2],
    u = i[3];
  return [n, c, s, u];
}
function It(t) {
  var e = Yt.exec(t),
    n = e[1] || "",
    o = !!n && n[1] !== ":";
  return { device: n, isUnc: o, isAbsolute: o || !!e[2], tail: e[3] };
}
function Qt(t) {
  return "\\\\" + t.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
}
ae.resolve = function () {
  for (var t = "", e = "", n = !1, o = arguments.length - 1; o >= -1; o--) {
    var i;
    if (
      (o >= 0
        ? (i = arguments[o])
        : t
        ? ((i = process.env["=" + t]),
          (!i || i.substr(0, 3).toLowerCase() !== t.toLowerCase() + "\\") &&
            (i = t + "\\"))
        : (i = process.cwd()),
      ke.isString(i))
    ) {
      if (!i) continue;
    } else throw new TypeError("Arguments to path.resolve must be strings");
    var c = It(i),
      s = c.device,
      u = c.isUnc,
      p = c.isAbsolute,
      w = c.tail;
    if (
      !(s && t && s.toLowerCase() !== t.toLowerCase()) &&
      (t || (t = s), n || ((e = w + "\\" + e), (n = p)), t && n)
    )
      break;
  }
  return (
    u && (t = Qt(t)),
    (e = lt(e.split(/[\\\/]+/), !n).join("\\")),
    t + (n ? "\\" : "") + e || "."
  );
};
ae.normalize = function (t) {
  var e = It(t),
    n = e.device,
    o = e.isUnc,
    i = e.isAbsolute,
    c = e.tail,
    s = /[\\\/]$/.test(c);
  return (
    (c = lt(c.split(/[\\\/]+/), !i).join("\\")),
    !c && !i && (c = "."),
    c && s && (c += "\\"),
    o && (n = Qt(n)),
    n + (i ? "\\" : "") + c
  );
};
ae.isAbsolute = function (t) {
  return It(t).isAbsolute;
};
ae.join = function () {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var n = arguments[e];
    if (!ke.isString(n))
      throw new TypeError("Arguments to path.join must be strings");
    n && t.push(n);
  }
  var o = t.join("\\");
  return (
    /^[\\\/]{2}[^\\\/]/.test(t[0]) || (o = o.replace(/^[\\\/]{2,}/, "\\")),
    ae.normalize(o)
  );
};
ae.relative = function (t, e) {
  (t = ae.resolve(t)), (e = ae.resolve(e));
  for (
    var n = t.toLowerCase(),
      o = e.toLowerCase(),
      i = Xe(e.split("\\")),
      c = Xe(n.split("\\")),
      s = Xe(o.split("\\")),
      u = Math.min(c.length, s.length),
      p = u,
      w = 0;
    w < u;
    w++
  )
    if (c[w] !== s[w]) {
      p = w;
      break;
    }
  if (p == 0) return e;
  for (var _ = [], w = p; w < c.length; w++) _.push("..");
  return (_ = _.concat(i.slice(p))), _.join("\\");
};
ae._makeLong = function (t) {
  if (!ke.isString(t)) return t;
  if (!t) return "";
  var e = ae.resolve(t);
  return /^[a-zA-Z]\:\\/.test(e)
    ? "\\\\?\\" + e
    : /^\\\\[^?.]/.test(e)
    ? "\\\\?\\UNC\\" + e.substring(2)
    : t;
};
ae.dirname = function (t) {
  var e = st(t),
    n = e[0],
    o = e[1];
  return !n && !o ? "." : (o && (o = o.substr(0, o.length - 1)), n + o);
};
ae.basename = function (t, e) {
  var n = st(t)[2];
  return (
    e &&
      n.substr(-1 * e.length) === e &&
      (n = n.substr(0, n.length - e.length)),
    n
  );
};
ae.extname = function (t) {
  return st(t)[3];
};
ae.format = function (t) {
  if (!ke.isObject(t))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof t
    );
  var e = t.root || "";
  if (!ke.isString(e))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof t.root
    );
  var n = t.dir,
    o = t.base || "";
  return n ? (n[n.length - 1] === ae.sep ? n + o : n + ae.sep + o) : o;
};
ae.parse = function (t) {
  if (!ke.isString(t))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof t
    );
  var e = st(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return {
    root: e[0],
    dir: e[0] + e[1].slice(0, -1),
    base: e[2],
    ext: e[3],
    name: e[2].slice(0, e[2].length - e[3].length)
  };
};
ae.sep = "\\";
ae.delimiter = ";";
var el = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  se = {};
function rt(t) {
  return el.exec(t).slice(1);
}
se.resolve = function () {
  for (var t = "", e = !1, n = arguments.length - 1; n >= -1 && !e; n--) {
    var o = n >= 0 ? arguments[n] : process.cwd();
    if (ke.isString(o)) {
      if (!o) continue;
    } else throw new TypeError("Arguments to path.resolve must be strings");
    (t = o + "/" + t), (e = o[0] === "/");
  }
  return (t = lt(t.split("/"), !e).join("/")), (e ? "/" : "") + t || ".";
};
se.normalize = function (t) {
  var e = se.isAbsolute(t),
    n = t && t[t.length - 1] === "/";
  return (
    (t = lt(t.split("/"), !e).join("/")),
    !t && !e && (t = "."),
    t && n && (t += "/"),
    (e ? "/" : "") + t
  );
};
se.isAbsolute = function (t) {
  return t.charAt(0) === "/";
};
se.join = function () {
  for (var t = "", e = 0; e < arguments.length; e++) {
    var n = arguments[e];
    if (!ke.isString(n))
      throw new TypeError("Arguments to path.join must be strings");
    n && (t ? (t += "/" + n) : (t += n));
  }
  return se.normalize(t);
};
se.relative = function (t, e) {
  (t = se.resolve(t).substr(1)), (e = se.resolve(e).substr(1));
  for (
    var n = Xe(t.split("/")),
      o = Xe(e.split("/")),
      i = Math.min(n.length, o.length),
      c = i,
      s = 0;
    s < i;
    s++
  )
    if (n[s] !== o[s]) {
      c = s;
      break;
    }
  for (var u = [], s = c; s < n.length; s++) u.push("..");
  return (u = u.concat(o.slice(c))), u.join("/");
};
se._makeLong = function (t) {
  return t;
};
se.dirname = function (t) {
  var e = rt(t),
    n = e[0],
    o = e[1];
  return !n && !o ? "." : (o && (o = o.substr(0, o.length - 1)), n + o);
};
se.basename = function (t, e) {
  var n = rt(t)[2];
  return (
    e &&
      n.substr(-1 * e.length) === e &&
      (n = n.substr(0, n.length - e.length)),
    n
  );
};
se.extname = function (t) {
  return rt(t)[3];
};
se.format = function (t) {
  if (!ke.isObject(t))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof t
    );
  var e = t.root || "";
  if (!ke.isString(e))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof t.root
    );
  var n = t.dir ? t.dir + se.sep : "",
    o = t.base || "";
  return n + o;
};
se.parse = function (t) {
  if (!ke.isString(t))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof t
    );
  var e = rt(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return (
    (e[1] = e[1] || ""),
    (e[2] = e[2] || ""),
    (e[3] = e[3] || ""),
    {
      root: e[0],
      dir: e[0] + e[1].slice(0, -1),
      base: e[2],
      ext: e[3],
      name: e[2].slice(0, e[2].length - e[3].length)
    }
  );
};
se.sep = "/";
se.delimiter = ":";
Ya ? (Je.exports = ae) : (Je.exports = se);
Je.exports.posix = se;
Je.exports.win32 = ae;
var tl = Je.exports;
const nl = gn(tl),
  ol = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/>'
  },
  al = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>'
  },
  ll = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/>'
  },
  sl = {
    width: 1024,
    height: 1024,
    body: '<path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/>'
  },
  rl = { key: 0 },
  il = { key: 1 },
  en = te({
    __name: "sidebarItem",
    props: {
      item: { type: Object },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: "" }
    },
    setup(t) {
      const e = t,
        { layout: n, isCollapse: o, tooltipEffect: i, getDivStyle: c } = Ie(),
        s = H(() => ({ width: "100%", textAlign: "center" })),
        u = H(() => ({ display: "flex", alignItems: "center" })),
        p = H(() => ({
          overflow: "hidden",
          textOverflow: "ellipsis",
          outline: "none"
        })),
        w = H(() => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:
            n.value === "horizontal"
              ? "0 5px 0 0"
              : o.value
              ? "0 auto"
              : "0 5px 0 0"
        })),
        _ = H(() =>
          o.value
            ? { width: "" }
            : {
                width: "210px",
                display: "inline-block",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }
        ),
        f = H(() => $ => {
          var M;
          return o.value
            ? {
                width: "100%",
                textAlign:
                  ($ == null ? void 0 : $.parentId) === null ||
                  (n.value === "mix" &&
                    ((M = $ == null ? void 0 : $.pathList) == null
                      ? void 0
                      : M.length) === 2)
                    ? "center"
                    : ""
              }
            : {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden"
              };
        }),
        v = H(() => {
          var $;
          return ($ = Ge()) != null && $.MenuArrowIconNoTransition
            ? {
                "expand-close-icon": Ee(al),
                "expand-open-icon": Ee(ol),
                "collapse-close-icon": Ee(sl),
                "collapse-open-icon": Ee(ll)
              }
            : "";
        }),
        g = D(null),
        S = new WeakMap(),
        E = D(null);
      function A($) {
        S.get($) ||
          Re(() => {
            var M, W;
            ((M = E.value) == null ? void 0 : M.scrollWidth) >
            ((W = E.value) == null ? void 0 : W.clientWidth)
              ? Object.assign($, { showTooltip: !0 })
              : Object.assign($, { showTooltip: !1 }),
              S.set($, !0);
          });
      }
      function b($, M) {
        var q;
        const W =
          (($ == null ? void 0 : $.length) > 1 ? $.toString().slice(0, 1) : $) +
          "...";
        return M && !(o.value && (M == null ? void 0 : M.parentId) === null)
          ? n.value === "mix" &&
            ((q = M == null ? void 0 : M.pathList) == null
              ? void 0
              : q.length) === 2 &&
            o.value
            ? W
            : $
          : W;
      }
      function F($ = [], M) {
        var q, Q;
        const W = $.filter(L => ((g.value = L), !0));
        return (Q = (q = W[0]) == null ? void 0 : q.meta) != null &&
          Q.showParent
          ? !1
          : W.length === 1
          ? !0
          : W.length === 0
          ? ((g.value = { ...M, path: "", noShowingChildren: !0 }), !0)
          : !1;
      }
      function I($) {
        const M = /^http(s?):\/\//;
        return M.test($) || M.test(e.basePath)
          ? $ || e.basePath
          : nl.posix.resolve(e.basePath, $);
      }
      return ($, M) => {
        const W = x("el-tooltip"),
          q = x("el-menu-item"),
          Q = x("sidebar-item", !0),
          L = x("el-sub-menu");
        return F(e.item.children, e.item) &&
          (!g.value.children || g.value.noShowingChildren)
          ? (h(),
            V(
              q,
              {
                key: 0,
                index: I(g.value.path),
                class: fe({ "submenu-title-noDropdown": !t.isNest }),
                style: ie(u.value)
              },
              {
                title: k(() => [
                  y(
                    "div",
                    { style: ie(a(c)) },
                    [
                      a(n) === "horizontal"
                        ? (h(), T("span", rl, ee(g.value.meta.title), 1))
                        : (h(),
                          V(
                            W,
                            {
                              key: 1,
                              placement: "top",
                              effect: a(i),
                              offset: -10,
                              disabled: !g.value.showTooltip
                            },
                            {
                              content: k(() => [ce(ee(g.value.meta.title), 1)]),
                              default: k(() => [
                                y(
                                  "span",
                                  {
                                    ref_key: "menuTextRef",
                                    ref: E,
                                    style: ie(p.value),
                                    onMouseover:
                                      M[0] || (M[0] = J => A(g.value))
                                  },
                                  ee(g.value.meta.title),
                                  37
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["effect", "disabled"]
                          )),
                      m(dt, { extraIcon: g.value.meta.extraIcon }, null, 8, [
                        "extraIcon"
                      ])
                    ],
                    4
                  )
                ]),
                default: k(() => {
                  var J, ue, de, le, Ve;
                  return [
                    me(e.item.meta.icon)
                      ? (h(),
                        T(
                          "div",
                          {
                            key: 0,
                            class: "sub-menu-icon",
                            style: ie(w.value)
                          },
                          [
                            (h(),
                            V(
                              ze(
                                a(Ee)(
                                  me(g.value.meta.icon) ||
                                    (e.item.meta && me(e.item.meta.icon))
                                )
                              )
                            ))
                          ],
                          4
                        ))
                      : K("", !0),
                    !((J = e.item) != null && J.meta.icon) &&
                    a(o) &&
                    a(n) === "vertical" &&
                    ((de = (ue = e.item) == null ? void 0 : ue.pathList) == null
                      ? void 0
                      : de.length) === 1
                      ? (h(),
                        T(
                          "span",
                          { key: 1, style: ie(s.value) },
                          ee(b(g.value.meta.title)),
                          5
                        ))
                      : K("", !0),
                    !g.value.meta.icon &&
                    a(o) &&
                    a(n) === "mix" &&
                    ((Ve = (le = e.item) == null ? void 0 : le.pathList) == null
                      ? void 0
                      : Ve.length) === 2
                      ? (h(),
                        T(
                          "span",
                          { key: 2, style: ie(s.value) },
                          ee(b(g.value.meta.title)),
                          5
                        ))
                      : K("", !0)
                  ];
                }),
                _: 1
              },
              8,
              ["index", "class", "style"]
            ))
          : (h(),
            V(
              L,
              yn({ key: 1, ref: "subMenu" }, v.value, {
                index: I(e.item.path)
              }),
              {
                title: k(() => [
                  me(e.item.meta.icon)
                    ? (h(),
                      T(
                        "div",
                        { key: 0, style: ie(w.value), class: "sub-menu-icon" },
                        [
                          (h(),
                          V(ze(a(Ee)(e.item.meta && me(e.item.meta.icon)))))
                        ],
                        4
                      ))
                    : K("", !0),
                  a(n) === "horizontal"
                    ? (h(), T("span", il, ee(e.item.meta.title), 1))
                    : K("", !0),
                  a(o) && me(e.item.meta.icon) && e.item.parentId === null
                    ? K("", !0)
                    : (h(),
                      T(
                        "div",
                        { key: 2, style: ie(f.value(e.item)) },
                        [
                          a(n) !== "horizontal"
                            ? (h(),
                              V(
                                W,
                                {
                                  key: 0,
                                  placement: "top",
                                  effect: a(i),
                                  offset: -10,
                                  disabled: !e.item.showTooltip
                                },
                                {
                                  content: k(() => [
                                    ce(ee(e.item.meta.title), 1)
                                  ]),
                                  default: k(() => [
                                    y(
                                      "span",
                                      {
                                        ref_key: "menuTextRef",
                                        ref: E,
                                        style: ie(_.value),
                                        onMouseover:
                                          M[1] || (M[1] = J => A(e.item))
                                      },
                                      ee(b(e.item.meta.title, e.item)),
                                      37
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ["effect", "disabled"]
                              ))
                            : K("", !0),
                          a(o)
                            ? K("", !0)
                            : (h(),
                              V(
                                dt,
                                { key: 1, extraIcon: e.item.meta.extraIcon },
                                null,
                                8,
                                ["extraIcon"]
                              ))
                        ],
                        4
                      ))
                ]),
                default: k(() => [
                  (h(!0),
                  T(
                    ve,
                    null,
                    ge(
                      e.item.children,
                      J => (
                        h(),
                        V(
                          Q,
                          {
                            key: J.path,
                            "is-nest": !0,
                            item: J,
                            "base-path": I(J.path),
                            class: "nest-menu"
                          },
                          null,
                          8,
                          ["item", "base-path"]
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              16,
              ["index"]
            ));
      };
    }
  }),
  cl = { class: "container" },
  ul = te({
    __name: "leftCollapse",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const n = t,
        o = D(!1),
        { tooltipEffect: i } = Ie(),
        c = H(() => [
          "ml-4",
          "mb-1",
          "w-[16px]",
          "h-[16px]",
          "inline-block",
          "align-middle",
          "text-primary",
          "cursor-pointer",
          "duration-[100ms]",
          "hover:text-primary",
          "dark:hover:!text-white"
        ]),
        s = () => {
          e("toggleClick");
        };
      return (u, p) => {
        const w = x("IconifyIconOffline"),
          _ = x("el-tooltip");
        return (
          h(),
          T("div", cl, [
            m(
              _,
              {
                placement: "right",
                visible: o.value,
                effect: a(i),
                content: n.isActive ? "点击折叠" : "点击展开"
              },
              {
                default: k(() => [
                  m(
                    w,
                    {
                      icon: a(Gt),
                      class: fe(c.value),
                      style: ie({
                        transform: n.isActive ? "none" : "rotateY(180deg)"
                      }),
                      onClick: s,
                      onMouseenter: p[0] || (p[0] = f => (o.value = !0)),
                      onMouseleave: p[1] || (p[1] = f => (o.value = !1))
                    },
                    null,
                    8,
                    ["icon", "class", "style"]
                  )
                ]),
                _: 1
              },
              8,
              ["visible", "effect", "content"]
            )
          ])
        );
      };
    }
  });
const dl = pe(ul, [["__scopeId", "data-v-ed074d28"]]),
  fl = te({
    __name: "vertical",
    setup(t) {
      var g;
      const e = mt(),
        n = D(
          ((g = Be().getItem(`${We()}configure`)) == null
            ? void 0
            : g.showLogo) ?? !0
        ),
        {
          routers: o,
          device: i,
          pureApp: c,
          isCollapse: s,
          menuSelect: u,
          toggleSideBar: p
        } = Ie(),
        w = D([]),
        _ = H(() =>
          c.layout === "mix" && i.value !== "mobile" ? w.value : he().wholeMenus
        ),
        f = H(() => (c.layout === "mix" ? !1 : _.value.length === 0));
      function v(S) {
        w.value = [];
        const E = _t(S, he().wholeMenus),
          A = et(E[0] || S, he().wholeMenus);
        A != null && A.children && (w.value = A == null ? void 0 : A.children);
      }
      return (
        v(e.path),
        yt(() => {
          Le.on("logoChange", S => {
            n.value = S;
          });
        }),
        $e(
          () => [e.path, he().wholeMenus],
          () => {
            e.path.includes("/redirect") || (v(e.path), u(e.path, o));
          }
        ),
        (S, E) => {
          const A = x("el-menu"),
            b = x("el-scrollbar"),
            F = nt("loading");
          return Se(
            (h(),
            T(
              "div",
              { class: fe(["sidebar-container", n.value ? "has-logo" : ""]) },
              [
                n.value
                  ? (h(),
                    V(Ka, { key: 0, collapse: a(s) }, null, 8, ["collapse"]))
                  : K("", !0),
                m(
                  b,
                  {
                    "wrap-class": "scrollbar-wrapper",
                    class: fe([a(i) === "mobile" ? "mobile" : "pc"])
                  },
                  {
                    default: k(() => [
                      m(
                        A,
                        {
                          router: "",
                          "unique-opened": "",
                          mode: "vertical",
                          class: "outer-most select-none",
                          collapse: a(s),
                          "default-active": a(e).path,
                          "collapse-transition": !1,
                          onSelect: E[0] || (E[0] = I => a(u)(I, a(o)))
                        },
                        {
                          default: k(() => [
                            (h(!0),
                            T(
                              ve,
                              null,
                              ge(
                                _.value,
                                I => (
                                  h(),
                                  V(
                                    en,
                                    {
                                      key: I.path,
                                      item: I,
                                      "base-path": I.path,
                                      class: "outer-most select-none"
                                    },
                                    null,
                                    8,
                                    ["item", "base-path"]
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 1
                        },
                        8,
                        ["collapse", "default-active"]
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["class"]
                ),
                a(i) !== "mobile"
                  ? (h(),
                    V(
                      dl,
                      {
                        key: 1,
                        "is-active": a(c).sidebar.opened,
                        onToggleClick: a(p)
                      },
                      null,
                      8,
                      ["is-active", "onToggleClick"]
                    ))
                  : K("", !0)
              ],
              2
            )),
            [[F, f.value]]
          );
        }
      );
    }
  });
const pl = pe(fl, [["__scopeId", "data-v-f5a1735a"]]),
  hl = { class: "horizontal-header" },
  vl = { class: "horizontal-header-right" },
  _l = { class: "el-dropdown-link navbar-bg-hover" },
  ml = { key: 0, class: "dark:text-white" },
  gl = te({
    __name: "horizontal",
    setup(t) {
      const e = D(),
        {
          route: n,
          title: o,
          routers: i,
          logout: c,
          backTopMenu: s,
          onPanel: u,
          menuSelect: p,
          username: w,
          avatarsStyle: _
        } = Ie();
      return (
        Re(() => {
          var f;
          (f = e.value) == null || f.handleResize();
        }),
        $e(
          () => n.path,
          () => {
            p(n.path, i);
          }
        ),
        (f, v) => {
          const g = x("el-menu"),
            S = x("IconifyIconOffline"),
            E = x("el-dropdown-item"),
            A = x("el-dropdown-menu"),
            b = x("el-dropdown"),
            F = nt("loading");
          return Se(
            (h(),
            T("div", hl, [
              y(
                "div",
                {
                  class: "horizontal-header-left",
                  onClick: v[0] || (v[0] = (...I) => a(s) && a(s)(...I))
                },
                [y("span", null, ee(a(o)), 1)]
              ),
              m(
                g,
                {
                  router: "",
                  ref_key: "menuRef",
                  ref: e,
                  mode: "horizontal",
                  class: "horizontal-header-menu",
                  "default-active": a(n).path,
                  onSelect: v[1] || (v[1] = I => a(p)(I, a(i)))
                },
                {
                  default: k(() => [
                    (h(!0),
                    T(
                      ve,
                      null,
                      ge(
                        a(he)().wholeMenus,
                        I => (
                          h(),
                          V(
                            en,
                            { key: I.path, item: I, "base-path": I.path },
                            null,
                            8,
                            ["item", "base-path"]
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ["default-active"]
              ),
              y("div", vl, [
                m(xt),
                m(Ct, { id: "header-notice" }),
                m(
                  b,
                  { trigger: "click" },
                  {
                    dropdown: k(() => [
                      m(
                        A,
                        { class: "logout" },
                        {
                          default: k(() => [
                            m(
                              E,
                              { onClick: a(c) },
                              {
                                default: k(() => [
                                  m(
                                    S,
                                    { icon: a(at), style: { margin: "5px" } },
                                    null,
                                    8,
                                    ["icon"]
                                  ),
                                  ce(" 退出系统 ")
                                ]),
                                _: 1
                              },
                              8,
                              ["onClick"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    default: k(() => [
                      y("span", _l, [
                        y(
                          "img",
                          {
                            src: "https://avatars.githubusercontent.com/u/44761321?v=4",
                            style: ie(a(_))
                          },
                          null,
                          4
                        ),
                        a(w) ? (h(), T("p", ml, ee(a(w)), 1)) : K("", !0)
                      ])
                    ]),
                    _: 1
                  }
                ),
                y(
                  "span",
                  {
                    class: "set-icon navbar-bg-hover",
                    title: "打开项目配置",
                    onClick: v[2] || (v[2] = (...I) => a(u) && a(u)(...I))
                  },
                  [m(S, { icon: a(St) }, null, 8, ["icon"])]
                )
              ])
            ])),
            [[F, a(he)().wholeMenus.length === 0]]
          );
        }
      );
    }
  });
const yl = pe(gl, [["__scopeId", "data-v-8263c7cc"]]),
  bl = { key: 0 },
  wl = te({
    __name: "index",
    setup(t) {
      const { isDark: e } = Ft(),
        { layout: n } = Sn(),
        o = Rt(),
        i = kt(),
        { $storage: c } = wt(),
        s = gt({
          sidebar: H(() => Pe().sidebar),
          device: H(() => Pe().device),
          fixedHeader: H(() => i.fixedHeader),
          classes: H(() => ({
            hideSidebar: !s.sidebar.opened,
            openSidebar: s.sidebar.opened,
            withoutAnimation: s.sidebar.withoutAnimation,
            mobile: s.device === "mobile"
          })),
          hideTabs: H(() => (c == null ? void 0 : c.configure.hideTabs))
        });
      function u(f) {
        var v, g, S, E;
        window.document.body.setAttribute("layout", f),
          (c.layout = {
            layout: `${f}`,
            theme: (v = c.layout) == null ? void 0 : v.theme,
            darkMode: (g = c.layout) == null ? void 0 : g.darkMode,
            sidebarStatus: (S = c.layout) == null ? void 0 : S.sidebarStatus,
            epThemeColor: (E = c.layout) == null ? void 0 : E.epThemeColor
          });
      }
      function p(f, v) {
        Pe().toggleDevice(f), Pe().toggleSideBar(v, "resize");
      }
      let w = !0;
      Le.on("resize", ({ detail: f }) => {
        if (o) return;
        const { width: v } = f;
        v <= 760 ? u("vertical") : u(Pe().layout),
          v > 0 && v <= 760
            ? (p("mobile", !1), (w = !0))
            : v > 760 && v <= 990
            ? w && (p("desktop", !1), (w = !1))
            : v > 990 &&
              (s.sidebar.isClickCollapse || (p("desktop", !0), (w = !0)));
      }),
        Fe(() => {
          o && p("mobile", !1);
        });
      const _ = te({
        render() {
          return Ue(
            "div",
            {
              class: { "fixed-header": s.fixedHeader },
              style: [
                s.hideTabs && n.value.includes("horizontal")
                  ? e.value
                    ? "box-shadow: 0 1px 4px #0d0d0d"
                    : "box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
                  : ""
              ]
            },
            {
              default: () => [
                !i.hiddenSideBar &&
                (n.value.includes("vertical") || n.value.includes("mix"))
                  ? Ue(Zo)
                  : null,
                !i.hiddenSideBar && n.value.includes("horizontal")
                  ? Ue(yl)
                  : null,
                Ue(ca)
              ]
            }
          );
        }
      });
      return (f, v) => {
        const g = x("el-backtop"),
          S = x("el-scrollbar"),
          E = nt("resize");
        return Se(
          (h(),
          T(
            "div",
            { class: fe(["app-wrapper", s.classes]) },
            [
              Se(
                y(
                  "div",
                  {
                    class: "app-mask",
                    onClick: v[0] || (v[0] = A => a(Pe)().toggleSideBar())
                  },
                  null,
                  512
                ),
                [
                  [
                    Ne,
                    s.device === "mobile" &&
                      s.sidebar.opened &&
                      a(n).includes("vertical")
                  ]
                ]
              ),
              Se(m(pl, null, null, 512), [
                [
                  Ne,
                  !a(i).hiddenSideBar &&
                    (a(n).includes("vertical") || a(n).includes("mix"))
                ]
              ]),
              y(
                "div",
                {
                  class: fe([
                    "main-container",
                    a(i).hiddenSideBar ? "main-hidden" : ""
                  ])
                },
                [
                  s.fixedHeader
                    ? (h(),
                      T("div", bl, [
                        m(a(_)),
                        m(Vt, { "fixed-header": s.fixedHeader }, null, 8, [
                          "fixed-header"
                        ])
                      ]))
                    : (h(),
                      V(
                        S,
                        { key: 1 },
                        {
                          default: k(() => [
                            m(
                              g,
                              {
                                title: "回到顶部",
                                target: ".main-container .el-scrollbar__wrap"
                              },
                              { default: k(() => [m(a(Xt))]), _: 1 }
                            ),
                            m(a(_)),
                            m(Vt, { "fixed-header": s.fixedHeader }, null, 8, [
                              "fixed-header"
                            ])
                          ]),
                          _: 1
                        }
                      ))
                ],
                2
              ),
              m(Za)
            ],
            2
          )),
          [[E]]
        );
      };
    }
  });
const Cl = pe(wl, [["__scopeId", "data-v-f13df477"]]);
export { Cl as default };
