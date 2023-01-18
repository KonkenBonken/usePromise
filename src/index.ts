export default function usePromise() {
  let resolver: () => void = () => { throw new Error() };
  const promise = new Promise<void>(resolve => resolver = resolve);
  return [promise, resolver];
}