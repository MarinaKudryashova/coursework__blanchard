// иницилизация SimpleBar
document.querySelectorAll(".dropdown__list").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
  // forceVisible: true|'y',
  });
});

