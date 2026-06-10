/** Module-level mouse — updated outside React to avoid store-driven re-renders. */
export const mousePosition = { x: 0.5, y: 0.5 };

if (typeof window !== "undefined") {
  window.addEventListener(
    "mousemove",
    (e) => {
      mousePosition.x = e.clientX / window.innerWidth;
      mousePosition.y = e.clientY / window.innerHeight;
    },
    { passive: true },
  );
}
