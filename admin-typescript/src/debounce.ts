export function debounce<F extends (...args: unknown[]) => void>(
  fn: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
