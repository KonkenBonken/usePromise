export default function usePromise(): readonly [Promise<void>, () => void];
export default function usePromise<T>(resolveValue: T): readonly [Promise<T>, () => void];
