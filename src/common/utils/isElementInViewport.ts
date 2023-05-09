export default function isElementInViewport(el: HTMLElement | null): boolean {
  const rect = el?.getBoundingClientRect();
  if (!rect) return false;
  const isVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return isVisible;
}
