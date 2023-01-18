export default function usePromise(): readonly [Promise<void>, () => void, (reason?: any) => void];
export default function usePromise<T>(resolveValue: T): readonly [Promise<T>, () => void, (reason?: any) => void];
export default function usePromise<T>(resolveValue?: T) {
  let resolver: () => void = () => { throw new Error() };
  let rejecter: (reason?: any) => void = () => { throw new Error() };
  const promise = new Promise<T>((resolve, reject) => {
    resolver = () => resolve(resolveValue as T);
    rejecter = reject;
  });
  return [promise, resolver, rejecter] as const;
}