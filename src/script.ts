function hookupPageNavAutoHide() {
  const header = document.querySelector("body > nav");
  const scrollThreshold = 10;

  let lastScrollY = globalThis.scrollY;

  globalThis.addEventListener("scroll", () => {
    const currentScrollY = globalThis.scrollY;
    const isScrollingDown =
      currentScrollY > scrollThreshold && currentScrollY > lastScrollY;

    if (isScrollingDown) {
      header?.classList.add("hidden");
    } else {
      header?.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
}

hookupPageNavAutoHide();
