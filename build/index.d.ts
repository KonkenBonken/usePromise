type tuple<U = void> = readonly [Promise<U>, (value?: U) => void, (reason: any) => void];
export default function usePromise(): tuple;
export default function usePromise<T>(resolveValue: T): tuple<T>;
export {};
