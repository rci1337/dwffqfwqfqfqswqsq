function p() {}

function K(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function q(t) {
    return t()
}

function L() {
    return Object.create(null)
}

function g(t) {
    t.forEach(q)
}

function S(t) {
    return typeof t == "function"
}

function dt(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let b;

function ht(t, e) {
    return b || (b = document.createElement("a")), b.href = e, t === b.href
}

function Q(t) {
    return Object.keys(t).length === 0
}

function W(t, ...e) {
    if (t == null) return p;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function mt(t, e, n) {
    t.$$.on_destroy.push(W(e, n))
}

function pt(t, e, n, i) {
    if (t) {
        const r = O(t, e, n, i);
        return t[0](r)
    }
}

function O(t, e, n, i) {
    return t[1] && i ? K(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function yt(t, e, n, i) {
    if (t[2] && i) {
        const r = t[2](i(n));
        if (e.dirty === void 0) return r;
        if (typeof r == "object") {
            const o = [],
                s = Math.max(e.dirty.length, r.length);
            for (let u = 0; u < s; u += 1) o[u] = e.dirty[u] | r[u];
            return o
        }
        return e.dirty | r
    }
    return e.dirty
}

function gt(t, e, n, i, r, o) {
    if (r) {
        const s = O(e, n, i, o);
        t.p(s, r)
    }
}

function xt(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}

function bt(t) {
    return t && S(t.destroy) ? t.destroy : p
}
let w = !1;

function U() {
    w = !0
}

function V() {
    w = !1
}

function X(t, e, n, i) {
    for (; t < e;) {
        const r = t + (e - t >> 1);
        n(r) <= i ? t = r + 1 : e = r
    }
    return t
}

function Y(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let l = 0; l < e.length; l++) {
            const f = e[l];
            f.claim_order !== void 0 && c.push(f)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let r = 0;
    for (let c = 0; c < e.length; c++) {
        const l = e[c].claim_order,
            f = (r > 0 && e[n[r]].claim_order <= l ? r + 1 : X(1, r, x => e[n[x]].claim_order, l)) - 1;
        i[c] = n[f] + 1;
        const a = f + 1;
        n[a] = c, r = Math.max(a, r)
    }
    const o = [],
        s = [];
    let u = e.length - 1;
    for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
        for (o.push(e[c - 1]); u >= c; u--) s.push(e[u]);
        u--
    }
    for (; u >= 0; u--) s.push(e[u]);
    o.reverse(), s.sort((c, l) => c.claim_order - l.claim_order);
    for (let c = 0, l = 0; c < s.length; c++) {
        for (; l < o.length && s[c].claim_order >= o[l].claim_order;) l++;
        const f = l < o.length ? o[l] : null;
        t.insertBefore(s[c], f)
    }
}

function Z(t, e) {
    if (w) {
        for (Y(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function tt(t, e, n) {
    t.insertBefore(e, n || null)
}

function et(t, e, n) {
    w && !n ? Z(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function E(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function G(t) {
    return document.createElement(t)
}

function nt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function C(t) {
    return document.createTextNode(t)
}

function $t() {
    return C(" ")
}

function vt() {
    return C("")
}

function Et(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function wt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function it(t) {
    return Array.from(t.childNodes)
}

function R(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function z(t, e, n, i, r = !1) {
    R(t);
    const o = (() => {
        for (let s = t.claim_info.last_index; s < t.length; s++) {
            const u = t[s];
            if (e(u)) {
                const c = n(u);
                return c === void 0 ? t.splice(s, 1) : t[s] = c, r || (t.claim_info.last_index = s), u
            }
        }
        for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
            const u = t[s];
            if (e(u)) {
                const c = n(u);
                return c === void 0 ? t.splice(s, 1) : t[s] = c, r ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = s, u
            }
        }
        return i()
    })();
    return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o
}

function rt(t, e, n, i) {
    return z(t, r => r.nodeName === e, r => {
        const o = [];
        for (let s = 0; s < r.attributes.length; s++) {
            const u = r.attributes[s];
            n[u.name] || o.push(u.name)
        }
        o.forEach(s => r.removeAttribute(s))
    }, () => i(e))
}

function Nt(t, e, n) {
    return rt(t, e, n, G)
}

function st(t, e) {
    return z(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => C(e), !0)
}

function Tt(t) {
    return st(t, " ")
}

function D(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const r = t[i];
        if (r.nodeType === 8 && r.textContent.trim() === e) return i
    }
    return t.length
}

function At(t, e) {
    const n = D(t, "HTML_TAG_START", 0),
        i = D(t, "HTML_TAG_END", n);
    if (n === i) return new k(void 0, e);
    R(t);
    const r = t.splice(n, i - n + 1);
    E(r[0]), E(r[r.length - 1]);
    const o = r.slice(1, r.length - 1);
    for (const s of o) s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new k(o, e)
}

function St(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function Ct(t, e, n, i) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function Ht(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}

function ct(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    const r = document.createEvent("CustomEvent");
    return r.initCustomEvent(t, n, i, e), r
}

function Mt(t, e) {
    const n = [];
    let i = 0;
    for (const r of e.childNodes)
        if (r.nodeType === 8) {
            const o = r.textContent.trim();
            o === `HEAD_${t}_END` ? (i -= 1, n.push(r)) : o === `HEAD_${t}_START` && (i += 1, n.push(r))
        } else i > 0 && n.push(r);
    return n
}
class lt {
    constructor(e = !1) {
        this.is_svg = !1, this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = nt(n.nodeName) : this.e = G(n.nodeName), this.t = n, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) tt(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(E)
    }
}
class k extends lt {
    constructor(e, n = !1) {
        super(n), this.e = this.n = null, this.l = e
    }
    c(e) {
        this.l ? this.n = this.l : super.c(e)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) et(this.t, this.n[n], e)
    }
}

function jt(t, e) {
    return new t(e)
}
let y;

function m(t) {
    y = t
}

function H() {
    if (!y) throw new Error("Function called outside component initialization");
    return y
}

function Lt(t) {
    H().$$.on_mount.push(t)
}

function Dt(t) {
    H().$$.after_update.push(t)
}

function kt() {
    const t = H();
    return (e, n, {
        cancelable: i = !1
    } = {}) => {
        const r = t.$$.callbacks[e];
        if (r) {
            const o = ct(e, n, {
                cancelable: i
            });
            return r.slice().forEach(s => {
                s.call(t, o)
            }), !o.defaultPrevented
        }
        return !0
    }
}
const h = [],
    B = [],
    $ = [],
    P = [],
    F = Promise.resolve();
let T = !1;

function I() {
    T || (T = !0, F.then(J))
}

function Bt() {
    return I(), F
}

function A(t) {
    $.push(t)
}
const N = new Set;
let d = 0;

function J() {
    if (d !== 0) return;
    const t = y;
    do {
        try {
            for (; d < h.length;) {
                const e = h[d];
                d++, m(e), ot(e.$$)
            }
        } catch (e) {
            throw h.length = 0, d = 0, e
        }
        for (m(null), h.length = 0, d = 0; B.length;) B.pop()();
        for (let e = 0; e < $.length; e += 1) {
            const n = $[e];
            N.has(n) || (N.add(n), n())
        }
        $.length = 0
    } while (h.length);
    for (; P.length;) P.pop()();
    T = !1, N.clear(), m(t)
}

function ot(t) {
    if (t.fragment !== null) {
        t.update(), g(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
    }
}
const v = new Set;
let _;

function Pt() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function qt() {
    _.r || g(_.c), _ = _.p
}

function ut(t, e) {
    t && t.i && (v.delete(t), t.i(e))
}

function Ot(t, e, n, i) {
    if (t && t.o) {
        if (v.has(t)) return;
        v.add(t), _.c.push(() => {
            v.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}

function Gt(t) {
    t && t.c()
}

function Rt(t, e) {
    t && t.l(e)
}

function at(t, e, n, i) {
    const {
        fragment: r,
        after_update: o
    } = t.$$;
    r && r.m(e, n), i || A(() => {
        const s = t.$$.on_mount.map(q).filter(S);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : g(s), t.$$.on_mount = []
    }), o.forEach(A)
}

function ft(t, e) {
    const n = t.$$;
    n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function _t(t, e) {
    t.$$.dirty[0] === -1 && (h.push(t), I(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function zt(t, e, n, i, r, o, s, u = [-1]) {
    const c = y;
    m(t);
    const l = t.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: p,
        not_equal: r,
        bound: L(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: L(),
        dirty: u,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    s && s(l.root);
    let f = !1;
    if (l.ctx = n ? n(t, e.props || {}, (a, x, ...M) => {
            const j = M.length ? M[0] : x;
            return l.ctx && r(l.ctx[a], l.ctx[a] = j) && (!l.skip_bound && l.bound[a] && l.bound[a](j), f && _t(t, a)), x
        }) : [], l.update(), f = !0, g(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
        if (e.hydrate) {
            U();
            const a = it(e.target);
            l.fragment && l.fragment.l(a), a.forEach(E)
        } else l.fragment && l.fragment.c();
        e.intro && ut(t.$$.fragment), at(t, e.target, e.anchor, e.customElement), V(), J()
    }
    m(c)
}
class Ft {
    $destroy() {
        ft(this, 1), this.$destroy = p
    }
    $on(e, n) {
        if (!S(n)) return p;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
        }
    }
    $set(e) {
        this.$$set && !Q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
export {
    Bt as A, p as B, ht as C, Z as D, Ht as E, Et as F, mt as G, pt as H, gt as I, xt as J, yt as K, Mt as L, bt as M, g as N, kt as O, B as P, k as Q, At as R, Ft as S, $t as a, et as b, Tt as c, qt as d, vt as e, ut as f, Pt as g, E as h, zt as i, Dt as j, G as k, Nt as l, it as m, wt as n, Lt as o, Ct as p, C as q, st as r, dt as s, Ot as t, St as u, jt as v, Gt as w, Rt as x, at as y, ft as z
};