"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function usePromise(resolveValue) {
    let resolver = () => { throw new Error(); };
    const promise = new Promise(resolve => resolver = () => resolve(resolveValue));
    return [promise, resolver];
}
exports.default = usePromise;
//# sourceMappingURL=index.js.map