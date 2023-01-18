"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function usePromise() {
    let resolver = () => { throw new Error(); };
    const promise = new Promise(resolve => resolver = resolve);
    return [promise, resolver];
}
exports.default = usePromise;
//# sourceMappingURL=index.js.map