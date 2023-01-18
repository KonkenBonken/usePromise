export default function usePromise(): readonly [Promise<void>, () => void];
export default function usePromise<T>(resolveValue: T): readonly [Promise<T>, () => void];
export default function usePromise<T>(resolveValue?: T) {
  let resolver: () => void = () => { throw new Error() };
  const promise = new Promise<T>(resolve => resolver = () => resolve(resolveValue as T));
  return [promise, resolver] as const;
}