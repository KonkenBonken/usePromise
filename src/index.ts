type tuple<U = void> = readonly [Promise<U>, (value?: U) => void, (reason: any) => void];

export default function usePromise<T = void>(): tuple<T>;
export default function usePromise<T>(resolveValue: T): tuple<T>;
export default function usePromise<T = void>(resolveValue?: T): tuple<T> {
  let resolver: tuple<T>[1] = () => { throw new Error() };
  let rejecter: tuple<T>[2] = () => { throw new Error() };
  const promise = new Promise<T>((resolve, reject) => {
    resolver = (value?: T) => resolve(value ?? resolveValue as T);
    rejecter = reject;
  });
  return [promise, resolver, rejecter];
}