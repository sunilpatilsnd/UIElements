function setCarousel(carousel) {
  const container = document.querySelector(".slides-container");
  const scrollWidth = container.clientWidth;
  let currIndex = 0;
  let maxIndex = container.children.length - 1;

  // carousel bottom btn navigation
  const carNav = document.createElement("div");

  carNav.classList.add("carousel-nav");
  for (let i = 0; i <= maxIndex; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("index", i);
    btn.setAttribute("type", "radio");

    btn.addEventListener("click", () => {
      currIndex = i;
      handleCarouselBtns(currIndex);
      scrollToIndex(currIndex);
    });

    carNav.appendChild(btn);
  }

  const handleCarouselBtns = (index) => {
    for (const child of carNav.children) {
      child.classList.remove("active");

      if (child.getAttribute("index") == index) {
        child.classList.add("active");
      }
    }
  };

  // for (const child of parentElement.children) {
  //   child.classList.toggle('my-toggle-class'); // Add or remove 'my-toggle-class'
  // }

  carousel.appendChild(carNav);

  // console.log(container.children);

  //  btn navigation

  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  nextBtn.addEventListener("click", () => {
    scrollNext();
  });

  prevBtn.addEventListener("click", () => {
    scrollPrev();
  });

  // scroll to next slide function
  const scrollNext = () => {
    if (currIndex < maxIndex) {
      currIndex++;
      container.scroll(scrollWidth * currIndex, 0);
      handleCarouselBtns(currIndex);
    } else {
      currIndex = 0;
      container.scroll(scrollWidth * currIndex, 0);
      handleCarouselBtns(currIndex);
    }
  };

  // scroll to prev slide function
  const scrollPrev = () => {
    if (currIndex > 0) {
      currIndex--;
      container.scroll(scrollWidth * currIndex, 0);
      handleCarouselBtns(currIndex);
    } else {
      currIndex = maxIndex;
      container.scroll(scrollWidth * currIndex, 0);
      handleCarouselBtns(currIndex);
    }
  };

  // scroll To index
  const scrollToIndex = (index) => {
    container.scroll(scrollWidth * index, 0);
    handleCarouselBtns(currIndex);
  };

  const autoScroll = () => {
    setInterval(() => {
      scrollNext();
    }, 5000);
  };
  autoScroll();
}

export { setCarousel };
