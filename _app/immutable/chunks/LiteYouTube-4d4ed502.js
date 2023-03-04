import {
    S as F,
    i as M,
    s as O,
    k,
    e as P,
    a as E,
    L as B,
    l as v,
    h as y,
    c as C,
    m as N,
    n as r,
    E as U,
    D as I,
    b as w,
    F as R,
    B as j,
    N as V,
    O as Y,
    C as T,
    M as z,
    P as A
} from "./index-42dc930e.js";

function K(l) {
    let e, i, a, s, u, n, c;
    return {
        c() {
            e = k("link"), i = E(), a = k("link"), s = E(), u = k("link"), n = E(), c = k("link"), this.h()
        },
        l(t) {
            e = v(t, "LINK", {
                rel: !0,
                href: !0
            }), i = C(t), a = v(t, "LINK", {
                rel: !0,
                href: !0
            }), s = C(t), u = v(t, "LINK", {
                rel: !0,
                href: !0
            }), n = C(t), c = v(t, "LINK", {
                rel: !0,
                href: !0
            }), this.h()
        },
        h() {
            r(e, "rel", "preconnect"), r(e, "href", l[6]), r(a, "rel", "preconnect"), r(a, "href", "https://www.google.com"), r(u, "rel", "preconnect"), r(u, "href", "https://static.doubleclick.net"), r(c, "rel", "preconnect"), r(c, "href", "https://googleads.g.doubleclick.net")
        },
        m(t, h) {
            w(t, e, h), w(t, i, h), w(t, a, h), w(t, s, h), w(t, u, h), w(t, n, h), w(t, c, h)
        },
        p(t, h) {
            h & 64 && r(e, "href", t[6])
        },
        d(t) {
            t && y(e), t && y(i), t && y(a), t && y(s), t && y(u), t && y(n), t && y(c)
        }
    }
}

function S(l) {
    let e, i, a, s, u, n, c, t, h, g;
    return {
        c() {
            e = k("picture"), i = k("source"), s = E(), u = k("source"), c = E(), t = k("img"), this.h()
        },
        l(m) {
            e = v(m, "PICTURE", {});
            var o = N(e);
            i = v(o, "SOURCE", {
                srcset: !0,
                type: !0
            }), s = C(o), u = v(o, "SOURCE", {
                src: !0,
                type: !0
            }), c = C(o), t = v(o, "IMG", {
                class: !0,
                src: !0,
                alt: !0,
                referrerpolicy: !0,
                loading: !0
            }), o.forEach(y), this.h()
        },
        h() {
            r(i, "srcset", a = "https://i.ytimg.com/vi_webp/" + l[0] + "/" + l[3] + ".webp"), r(i, "type", "image/webp"), T(u.src, n = "https://i.ytimg.com/vi/" + l[0] + "/" + l[3] + ".jpg") || r(u, "src", n), r(u, "type", "image/jpeg"), r(t, "class", "lite-youtube-poster"), T(t.src, h = "https://i.ytimg.com/vi/" + l[0] + "/" + l[3] + ".jpg") || r(t, "src", h), r(t, "alt", g = l[1] + ": " + l[2]), r(t, "referrerpolicy", "origin"), r(t, "loading", l[4])
        },
        m(m, o) {
            w(m, e, o), I(e, i), I(e, s), I(e, u), I(e, c), I(e, t)
        },
        p(m, o) {
            o & 9 && a !== (a = "https://i.ytimg.com/vi_webp/" + m[0] + "/" + m[3] + ".webp") && r(i, "srcset", a), o & 9 && !T(u.src, n = "https://i.ytimg.com/vi/" + m[0] + "/" + m[3] + ".jpg") && r(u, "src", n), o & 9 && !T(t.src, h = "https://i.ytimg.com/vi/" + m[0] + "/" + m[3] + ".jpg") && r(t, "src", h), o & 6 && g !== (g = m[1] + ": " + m[2]) && r(t, "alt", g), o & 16 && r(t, "loading", m[4])
        },
        d(m) {
            m && y(e)
        }
    }
}

function q(l) {
    let e, i, a, s;
    return {
        c() {
            e = k("iframe"), this.h()
        },
        l(u) {
            e = v(u, "IFRAME", {
                width: !0,
                height: !0,
                title: !0,
                allow: !0,
                src: !0
            }), N(e).forEach(y), this.h()
        },
        h() {
            r(e, "width", "560"), r(e, "height", "315"), r(e, "title", l[2]), r(e, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), e.allowFullscreen = !0, T(e.src, i = l[9]) || r(e, "src", i)
        },
        m(u, n) {
            w(u, e, n), l[13](e), a || (s = z(H.call(null, e)), a = !0)
        },
        p(u, n) {
            n & 4 && r(e, "title", u[2]), n & 512 && !T(e.src, i = u[9]) && r(e, "src", i)
        },
        d(u) {
            u && y(e), l[13](null), a = !1, s()
        }
    }
}

function G(l) {
    let e, i, a, s, u = l[0],
        n, c, t, h, g, m, o = l[8] && K(l),
        b = S(l),
        _ = l[7] && q(l);
    return {
        c() {
            e = k("link"), o && o.c(), i = P(), a = E(), s = k("div"), b.c(), n = E(), c = k("button"), h = E(), _ && _.c(), this.h()
        },
        l(f) {
            const d = B("svelte-qh1hy1", document.head);
            e = v(d, "LINK", {
                rel: !0,
                href: !0
            }), o && o.l(d), i = P(), d.forEach(y), a = C(f), s = v(f, "DIV", {
                class: !0
            });
            var L = N(s);
            b.l(L), n = C(L), c = v(L, "BUTTON", {
                type: !0,
                class: !0,
                "aria-label": !0
            }), N(c).forEach(y), h = C(L), _ && _.l(L), L.forEach(y), this.h()
        },
        h() {
            r(e, "rel", "preconnect"), r(e, "href", "https://i.ytimg.com"), r(c, "type", "button"), r(c, "class", "lite-youtube-playbtn"), r(c, "aria-label", t = l[1] + ": " + l[2]), r(s, "class", "lite-youtube"), U(s, "lite-youtube-activated", l[7])
        },
        m(f, d) {
            I(document.head, e), o && o.m(document.head, null), I(document.head, i), w(f, a, d), w(f, s, d), b.m(s, null), I(s, n), I(s, c), I(s, h), _ && _.m(s, null), g || (m = [R(s, "pointerover", l[14], {
                once: !0
            }), R(s, "click", l[15])], g = !0)
        },
        p(f, [d]) {
            f[8] ? o ? o.p(f, d) : (o = K(f), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null), d & 1 && O(u, u = f[0]) ? (b.d(1), b = S(f), b.c(), b.m(s, n)) : b.p(f, d), d & 6 && t !== (t = f[1] + ": " + f[2]) && r(c, "aria-label", t), f[7] ? _ ? _.p(f, d) : (_ = q(f), _.c(), _.m(s, null)) : _ && (_.d(1), _ = null), d & 128 && U(s, "lite-youtube-activated", f[7])
        },
        i: j,
        o: j,
        d(f) {
            y(e), o && o.d(f), y(i), f && y(a), f && y(s), b.d(f), _ && _.d(), g = !1, V(m)
        }
    }
}

function H(l) {
    l.focus()
}

function J(l, e, i) {
    let a, s, {
            videoId: u
        } = e,
        {
            videoPlay: n = "Play"
        } = e,
        {
            videoTitle: c = "Video"
        } = e,
        {
            params: t = ""
        } = e,
        {
            posterQuality: h = "hqdefault"
        } = e,
        {
            posterLoading: g = "lazy"
        } = e,
        {
            noCookie: m = !0
        } = e,
        {
            playlistId: o = ""
        } = e,
        b = !1,
        _ = !1,
        f = Y(),
        d;

    function L(p) {
        A[p ? "unshift" : "push"](() => {
            d = p, i(5, d)
        })
    }
    const Q = () => i(8, _ = !0),
        D = () => i(7, b = !0);
    return l.$$set = p => {
        "videoId" in p && i(0, u = p.videoId), "videoPlay" in p && i(1, n = p.videoPlay), "videoTitle" in p && i(2, c = p.videoTitle), "params" in p && i(10, t = p.params), "posterQuality" in p && i(3, h = p.posterQuality), "posterLoading" in p && i(4, g = p.posterLoading), "noCookie" in p && i(11, m = p.noCookie), "playlistId" in p && i(12, o = p.playlistId)
    }, l.$$.update = () => {
        l.$$.dirty & 4097 && i(7, b = !1), l.$$.dirty & 2048 && i(6, a = m ? "https://www.youtube-nocookie.com" : "https://www.youtube.com"), l.$$.dirty & 5185 && i(9, s = o ? `${a}/embed/videoseries?autoplay=1&list=${encodeURIComponent(o)}&${t}` : `${a}/embed/${encodeURIComponent(u)}?autoplay=1&state=1&${t}`), l.$$.dirty & 32 && d && f("iframeLoaded", {
            iframe: d
        })
    }, [u, n, c, h, g, d, a, b, _, s, t, m, o, L, Q, D]
}
class X extends F {
    constructor(e) {
        super(), M(this, e, J, G, O, {
            videoId: 0,
            videoPlay: 1,
            videoTitle: 2,
            params: 10,
            posterQuality: 3,
            posterLoading: 4,
            noCookie: 11,
            playlistId: 12
        })
    }
}
export {
    X as L
};