function setupCounter(button: HTMLButtonElement, output: HTMLElement) {
  let count = 0;
  button.addEventListener("click", () => {
    count++;
    output.textContent = `Clicked ${count} times`;
  });
}

export { setupCounter }
