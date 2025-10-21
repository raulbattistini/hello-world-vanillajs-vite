import { safeHTML } from "../utils/sanitize";

function renderHello(target: HTMLElement) {
  target.innerHTML = safeHTML(`<h1>Hello, TypeSafe World 👋</h1>`);
}

export { renderHello }
