"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function usePromise(resolveValue) {
    let resolver = () => { throw new Error(); };
    let rejecter = () => { throw new Error(); };
    const promise = new Promise((resolve, reject) => {
        resolver = () => resolve(resolveValue);
        rejecter = reject;
    });
    return [promise, resolver, rejecter];
}
exports.default = usePromise;
//# sourceMappingURL=index.js.map