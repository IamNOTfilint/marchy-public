// Failsafe: if the wordmark intro never lands (script blocked, fetch failed),
// reveal the page anyway.
document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => document.documentElement.classList.add('intro-done'), 4000);
});
