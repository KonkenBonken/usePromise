export default function usePromise(): readonly [Promise<void>, () => void, (reason?: any) => void];
export default function usePromise<T>(resolveValue: T): readonly [Promise<T>, () => void, (reason?: any) => void];
