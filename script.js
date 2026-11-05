const products = {
  flight: {
    chapter: "CHAPTER 01 — FLIGHT",
    title: "비상 飛上 T–SHIRT",
    price: 198000,
    image: "assets/flight-tee.png",
    alt: "학과 꽃넝쿨 자개 문양이 놓인 검은색 오버핏 티셔츠",
    description: "왼쪽 가슴에서 비상하는 학과 오른쪽 밑단에서 등판으로 이어지는 꽃넝쿨. 넓은 여백 위에서 몸의 움직임에 따라 자개빛이 나타납니다."
  },
  wind_men: {
    chapter: "CHAPTER 02 — AGAINST THE WIND (MEN)",
    title: "역풍 逆風 DENIM JACKET (MEN)",
    price: 680000,
    image: "assets/hero-jacket.png",
    alt: "역동적인 소나무 자개 문양이 놓인 남성용 검은색 데님 재킷",
    description: "강풍을 정면으로 마주한 소나무를 날카로운 선으로 다시 그렸습니다. 등판의 대담한 소나무와 양팔·앞판의 줄기 문양이 하나의 흐름으로 이어지는 남성용 오버핏 데님 재킷입니다."
  },
  wind_women: {
    chapter: "CHAPTER 02 — AGAINST THE WIND (WOMEN)",
    title: "역풍 逆風 CROPPED DENIM JACKET (WOMEN)",
    price: 640000,
    image: "assets/cropped-jacket-woman-v3.png",
    alt: "등판 안에 소나무 자개 문양을 정돈한 여성용 크롭 데님 재킷",
    description: "여성용 크롭 실루엣에 맞춰 등판 요크와 몸판 안에서 완결되는 소나무 자개 구도를 설계했습니다. 짧은 기장감과 선명한 자개광이 절제된 대비를 이룹니다."
  },
  pine_henley: {
    chapter: "CHAPTER 03 — PINE SHADOW",
    title: "송영 松影 ZIP-SLEEVE HENLEY",
    price: 420000,
    image: "assets/pine-henley-model-front.png",
    alt: "소매 지퍼와 소나무 가지 자수, 자개 단추 디테일이 더해진 블랙 워싱 헨리넥 롱슬리브",
    description: "은은한 워싱감의 블랙 코튼 원단 위에 나전 매화꽃 모티브의 자개 단추를 세팅하고, 어깨부터 소매 끝까지 이어지는 지퍼 라인을 따라 소나무 가지 자수를 입체적으로 수놓았습니다. 밑단 디스트로이드 마감으로 전통과 현대적 스트릿 실루엣이 공존합니다."
  },
  plum_coat: {
    chapter: "ATELIER EDITION — WINTER PLUM",
    title: "설매 雪梅 ASYMMETRIC WOOL COAT",
    price: 1480000,
    image: "assets/plum-wool-coat-model-front.png",
    alt: "비대칭 여밈과 등판 슬릿 속에 자개 매화 문양을 수놓은 하이엔드 테일러드 울 코트",
    description: "전통 동정과 겹여밈의 사선미를 현대적인 테일러링으로 재해석한 아틀리에 한정 피스입니다. 은은한 문양 조직감이 살아있는 블랙 울 원단 위에, 칼라 안쪽·앞여밈 경계·등판의 비대칭 맞주름(플리츠) 트임 속으로 영롱한 자개 매화가 걸음마다 모습을 드러냅니다."
  }
};

const formatWon = value => `₩${value.toLocaleString("ko-KR")}`;
const body = document.body;
const cartDrawer = document.querySelector(".cart-drawer");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total");
const dialog = document.querySelector(".product-dialog");
const toast = document.querySelector(".toast");
let activeProduct = null;
let activeDialogSlides = [];
let activeDialogIndex = 0;
let cart = [];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");
const materialVisual = document.querySelector(".material-visual");
const materialImage = materialVisual.querySelector("img");
const craftSection = document.querySelector(".craft-origin");
const craftImage = craftSection.querySelector("img");
const siteHeader = document.querySelector(".site-header");
const scrollProgress = document.querySelector(".scroll-progress");

if (!reducedMotion) {
  let ticking = false;
  const updateMotion = () => {
    const scrollY = window.scrollY;
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    scrollProgress.style.setProperty("--scroll-progress", String(Math.min(scrollY / scrollRange, 1)));
    const heroProgress = Math.min(scrollY / Math.max(hero.offsetHeight, 1), 1);
    heroImage.style.setProperty("--hero-shift", `${heroProgress * 34}px`);
    siteHeader.classList.toggle("floating", scrollY > hero.offsetHeight * .72);

    const materialRect = materialVisual.getBoundingClientRect();
    const materialProgress = Math.max(0, Math.min(1, (window.innerHeight - materialRect.top) / (window.innerHeight + materialRect.height)));
    materialImage.style.setProperty("--material-shift", `${-7 + materialProgress * 8}%`);

    const craftRect = craftSection.getBoundingClientRect();
    const craftProgress = Math.max(0, Math.min(1, (window.innerHeight - craftRect.top) / (window.innerHeight + craftRect.height)));
    craftImage.style.setProperty("--craft-shift", `${-1.5 + craftProgress * 3}%`);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateMotion);
      ticking = true;
    }
  }, { passive: true });
  updateMotion();

  window.addEventListener("pointermove", event => {
    document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
  }, { passive: true });

  document.querySelectorAll(".product-image-wrap").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }, { passive: true });
  });
} else {
  siteHeader.classList.remove("floating");
}

document.querySelectorAll("[data-scroll-to]").forEach(button => {
  button.addEventListener("click", () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" }));
});

const menuButton = document.querySelector(".menu-trigger");
const mobileMenu = document.querySelector(".mobile-menu");
function closeMenu() {
  menuButton.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}
menuButton.addEventListener("click", () => {
  const opening = !mobileMenu.classList.contains("open");
  menuButton.classList.toggle("open", opening);
  mobileMenu.classList.toggle("open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  mobileMenu.setAttribute("aria-hidden", String(!opening));
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .image-reveal, .scene-reveal").forEach(element => revealObserver.observe(element));

function renderDialogImage() {
  const activeSlide = activeDialogSlides[activeDialogIndex];
  const previewImage = activeSlide?.querySelector("img");
  const product = products[activeProduct];
  dialog.classList.toggle("show-product-only", Boolean(activeSlide?.classList.contains("product-only")));
  dialog.classList.toggle("show-light-bg", Boolean(activeSlide?.classList.contains("light-bg")));
  dialog.querySelector(".dialog-image img").src = previewImage?.src || product.image;
  dialog.querySelector(".dialog-image img").alt = previewImage?.alt || product.alt;
  dialog.querySelector(".dialog-gallery-count").textContent = `${String(activeDialogIndex + 1).padStart(2, "0")} / ${String(Math.max(activeDialogSlides.length, 1)).padStart(2, "0")}`;
  dialog.classList.toggle("single-preview", activeDialogSlides.length <= 1);
}

function moveDialogImage(direction) {
  if (activeDialogSlides.length <= 1) return;
  activeDialogIndex = (activeDialogIndex + direction + activeDialogSlides.length) % activeDialogSlides.length;
  renderDialogImage();
}

function openDialog(productKey, previewSlide = null) {
  activeProduct = productKey;
  const product = products[productKey];
  activeDialogSlides = previewSlide ? [...previewSlide.closest(".product-card").querySelectorAll(".gallery-slide")] : [];
  activeDialogIndex = Math.max(0, activeDialogSlides.indexOf(previewSlide));
  renderDialogImage();
  dialog.querySelector(".dialog-chapter").textContent = product.chapter;
  dialog.querySelector(".dialog-title").textContent = product.title;
  dialog.querySelector(".dialog-description").textContent = product.description;
  dialog.querySelector(".dialog-price").textContent = formatWon(product.price);
  dialog.showModal();
}

document.querySelectorAll(".product-card").forEach(card => {
  card.querySelectorAll(".product-image-wrap").forEach(slide => {
    slide.addEventListener("click", () => openDialog(card.dataset.product, slide));
  });
});

document.querySelectorAll("[data-gallery]").forEach((gallery, galleryIndex) => {
  const track = gallery.querySelector(".gallery-track");
  const slides = [...gallery.querySelectorAll(".gallery-slide")];
  const count = gallery.querySelector(".gallery-count");
  const autoInterval = 3000;
  const initialDelay = galleryIndex === 0 ? 3000 : 4500;
  const resumeDelay = 2400 + galleryIndex * 750;
  let activeIndex = 0;
  let scrollFrame = null;
  let autoTimer = null;
  let resumeTimer = null;

  const updateCount = () => {
    activeIndex = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / Math.max(track.clientWidth, 1))));
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    scrollFrame = null;
  };

  const move = direction => {
    const next = (activeIndex + direction + slides.length) % slides.length;
    const wrapping = (direction > 0 && activeIndex === slides.length - 1) || (direction < 0 && activeIndex === 0);
    if (wrapping) {
      track.classList.add("is-jumping");
      track.scrollTo({ left: next * track.clientWidth, behavior: "instant" });
      activeIndex = next;
      updateCount();
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => track.classList.remove("is-jumping")));
      return;
    }
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const stopAuto = () => {
    window.clearTimeout(autoTimer);
    window.clearTimeout(resumeTimer);
  };

  const scheduleAuto = (delay = autoInterval) => {
    window.clearTimeout(autoTimer);
    if (reducedMotion || document.hidden) return;
    autoTimer = window.setTimeout(() => {
      move(1);
      scheduleAuto(autoInterval);
    }, delay);
  };

  const pauseAndResume = () => {
    stopAuto();
    if (reducedMotion) return;
    resumeTimer = window.setTimeout(() => scheduleAuto(autoInterval), resumeDelay);
  };

  gallery.querySelector(".gallery-prev").addEventListener("click", () => {
    move(-1);
    pauseAndResume();
  });
  gallery.querySelector(".gallery-next").addEventListener("click", () => {
    move(1);
    pauseAndResume();
  });
  track.addEventListener("pointerdown", pauseAndResume, { passive: true });
  gallery.addEventListener("pointerenter", stopAuto);
  gallery.addEventListener("pointerleave", () => scheduleAuto(1200 + galleryIndex * 600));
  track.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateCount);
  }, { passive: true });
  window.addEventListener("resize", () => track.scrollTo({ left: activeIndex * track.clientWidth }), { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else scheduleAuto(initialDelay);
  });
  updateCount();
  scheduleAuto(initialDelay);
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector(".dialog-gallery-prev").addEventListener("click", () => moveDialogImage(-1));
document.querySelector(".dialog-gallery-next").addEventListener("click", () => moveDialogImage(1));
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartTotal.textContent = formatWon(cart.reduce((sum, item) => sum + products[item.key].price, 0));
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">아직 담긴 빛이 없습니다.</p>';
    return;
  }
  cartItems.innerHTML = cart.map((item, index) => {
    const product = products[item.key];
    return `<article class="cart-item">
      <img src="${product.image}" alt="" />
      <div><h3>${product.title}</h3><p>SIZE ${item.size}</p></div>
      <strong>${formatWon(product.price)}</strong>
      <button type="button" data-remove="${index}">Remove</button>
    </article>`;
  }).join("");
  cartItems.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => {
    cart.splice(Number(button.dataset.remove), 1);
    renderCart();
  }));
}

function openCart() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  body.classList.add("locked");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  body.classList.remove("locked");
}
document.querySelector(".cart-trigger").addEventListener("click", openCart);
document.querySelector(".drawer-close").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);

document.querySelector(".add-to-bag").addEventListener("click", () => {
  if (!activeProduct) return;
  const size = dialog.querySelector('input[name="size"]:checked').value;
  cart.push({ key: activeProduct, size });
  renderCart();
  dialog.close();
  showToast("장바구니에 담았습니다.");
  window.setTimeout(openCart, 350);
});

document.querySelector(".signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get("email");
  document.querySelector(".form-note").textContent = `${email} — 첫 번째 빛의 명단에 등록되었습니다.`;
  event.currentTarget.reset();
});

document.addEventListener("keydown", event => {
  if (dialog.open && event.key === "ArrowLeft") moveDialogImage(-1);
  if (dialog.open && event.key === "ArrowRight") moveDialogImage(1);
  if (event.key === "Escape") {
    closeCart();
    closeMenu();
  }
});

renderCart();
