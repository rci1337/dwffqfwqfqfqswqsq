function i(t) {
    const e = c => {
        t && !t.contains(c.target) && !c.defaultPrevented && t.dispatchEvent(new CustomEvent("click_outside", t))
    };
    return document.addEventListener("click", e, !0), {
        destroy() {
            document.removeEventListener("click", e, !0)
        }
    }
}
export {
    i as c
};