import "./index-42dc930e.js";
import {
    s as r
} from "./singletons-893a9e03.js";
const e = () => {
        const s = r;
        return {
            page: {
                subscribe: s.page.subscribe
            },
            navigating: {
                subscribe: s.navigating.subscribe
            },
            updated: s.updated
        }
    },
    a = {
        subscribe(s) {
            return e().page.subscribe(s)
        }
    },
    o = {
        subscribe(s) {
            return e().navigating.subscribe(s)
        }
    };
export {
    o as n, a as p
};