const coverPage = document.querySelector("#coverPage");
const nextPage = document.querySelector("#nextPage");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const photoCount = document.querySelector("#photoCount");
const cityLayer = document.querySelector("#cityLayer");
const memoryDialog = document.querySelector("#memoryDialog");
const memorySlides = document.querySelector("#memorySlides");
const memoryCounter = document.querySelector("#memoryCounter");
const memoryMeta = document.querySelector("#memoryMeta");
const memoryTitle = document.querySelector("#memoryTitle");
const memoryDate = document.querySelector("#memoryDate");
const memoryNote = document.querySelector("#memoryNote");
const memoryTags = document.querySelector("#memoryTags");
const memoryDots = document.querySelector("#memoryDots");
const slideButtons = document.querySelectorAll("[data-slide]");
const closeButtons = document.querySelectorAll("[data-close-dialog]");

// Previous city drafts are kept here as source material but are no longer rendered.
const archivedMemories = [
  {
    city: "成都",
    x: 27.2,
    y: 47.6,
    date: "2022 · 初夏",
    note: "在巷子里慢慢走，吃很多顿饭，也说了很多以后想一起做的事。",
    tags: ["第一次旅行", "火锅", "夜色"],
    accent: "#b97862",
    photos: [
      { src: "", alt: "成都旅行合照" },
      { src: "", alt: "成都街巷回忆" },
      { src: "", alt: "成都夜晚回忆" }
    ]
  },
  {
    city: "重庆",
    x: 39.8,
    y: 53.2,
    date: "2022 · 初夏",
    note: "导航失去作用的一天，却误打误撞看见了最好看的江边晚霞。",
    tags: ["山城", "晚霞", "迷路"],
    accent: "#c1845e",
    photos: [
      { src: "", alt: "重庆旅行合照" },
      { src: "", alt: "重庆江边回忆" }
    ]
  },
  {
    city: "西安",
    x: 46.6,
    y: 44.7,
    date: "2022 · 深秋",
    note: "城墙上的风很大，我们顺着落日一直走到灯亮起来。",
    tags: ["城墙", "落日", "散步"],
    accent: "#a5675a",
    photos: [
      { src: "", alt: "西安旅行合照" },
      { src: "", alt: "西安城墙回忆" },
      { src: "", alt: "西安落日回忆" }
    ]
  },
  {
    city: "北京",
    x: 58.8,
    y: 32.6,
    date: "2023 · 春",
    note: "天气还没有完全暖起来，但因为和你一起，所有等待都变得有意思。",
    tags: ["春天", "胡同", "晴天"],
    accent: "#758e86",
    photos: [
      { src: "", alt: "北京旅行合照" },
      { src: "", alt: "北京胡同回忆" }
    ]
  },
  {
    city: "上海",
    x: 64.9,
    y: 39.4,
    date: "2023 · 夏",
    note: "看过亮着灯的城市，也在便利店门口分享过一支冰淇淋。",
    tags: ["城市漫步", "夜景", "夏风"],
    accent: "#71849d",
    photos: [
      { src: "", alt: "上海旅行合照" },
      { src: "", alt: "上海夜景回忆" },
      { src: "", alt: "上海街头回忆" }
    ]
  },
  {
    city: "南京",
    x: 61.8,
    y: 43.8,
    date: "南京 · 一起吃饭的日子",
    note: "在咖啡店分享一支冰淇淋，晚上又围着热腾腾的火锅坐下。旅行里最幸福的，好像总离不开一起吃吃喝喝。",
    tags: ["南京", "冰淇淋", "火锅"],
    accent: "#8b7d68",
    photos: [
      {
        src: "./assets/memories/nanjing/01-ice-cream.jpg",
        alt: "在南京咖啡店镜面前拿着冰淇淋的合照",
        position: "50% 48%"
      },
      {
        src: "./assets/memories/nanjing/02-hotpot.jpg",
        alt: "在南京一起吃火锅的照片",
        position: "50% 50%"
      }
    ]
  },
  {
    city: "绍兴",
    x: 66.2,
    y: 48.6,
    date: "绍兴 · 雨天",
    note: "还记得那一天疯狂的夜宵、帕梅拉和恐怖电影吗？ 绍兴这么文艺的地方也能被我们搞成音爬",
    tags: ["绍兴", "雨天", "夜宵"],
    accent: "#728b73",
    photos: [
      {
        src: "./assets/memories/shaoxing/01-rainy-garden.jpg",
        alt: "下雨时撑着伞走在绍兴园林里的照片",
        position: "50% 54%"
      },
      {
        src: "./assets/memories/shaoxing/02-late-night-snacks.jpg",
        alt: "绍兴旅行时在酒店吃夜宵的照片",
        position: "50% 52%"
      }
    ]
  },
  {
    city: "厦门",
    x: 74.1,
    y: 60.6,
    date: "2024 · 夏",
    note: "海风把头发吹得乱七八糟，照片里的我们却笑得刚刚好。",
    tags: ["海边", "海风", "夏天"],
    accent: "#5e9192",
    photos: [
      { src: "", alt: "厦门旅行合照" },
      { src: "", alt: "厦门海边回忆" }
    ]
  },
  {
    city: "香港",
    x: 69.2,
    y: 66.8,
    date: "香港 · 雨夜",
    note: "我们第一次一起出这么远的门 但奇怪的是和你在一起去哪里都有种熟悉的气味",
    tags: ["香港", "维港", "雨夜"],
    accent: "#637f9c",
    photos: [
      {
        src: "./assets/memories/hong-kong/01-us.jpg",
        alt: "我们在香港维港游船上的合照",
        position: "50% 52%"
      },
      {
        src: "./assets/memories/hong-kong/02-harbour-night.jpg",
        alt: "雨夜撑着伞看香港维港夜景",
        position: "50% 44%"
      }
    ]
  }
];

const memories = [
  {
    city: "上海",
    x: 64.9,
    y: 39.4,
    date: "上海 · 和你一起",
    note: "我们在efz像joker一样的三年里，居然也和你一起经历了这么多快乐的回忆",
    tags: ["上海", "迪士尼", "一起吃饭"],
    accent: "#71849d",
    photos: [
      {
        src: "./assets/memories/shanghai/01-ice-cream.jpg",
        alt: "在上海咖啡店镜面前拿着冰淇淋的合照",
        position: "50% 48%",
        caption: "先分享一支冰淇淋，再慢慢逛上海。"
      },
      {
        src: "./assets/memories/shanghai/02-hotpot.jpg",
        alt: "在上海一起吃火锅的照片",
        position: "50% 50%",
        caption: "旅行的正经事，还是坐下来好好吃一顿。"
      },
      {
        src: "./assets/memories/shanghai/03-sbti.jpg",
        alt: "我们一起做 SBTI 人格测试的截图",
        position: "50% 48%",
        caption: "小丑就小丑吧，反正我们总能笑到一起。"
      },
      {
        src: "./assets/memories/shanghai/04-disney.jpg",
        alt: "在上海迪士尼花坛前和朋友们拍的照片",
        position: "50% 38%",
        caption: "在上海的晴天里，和迪士尼一起记住这一天。"
      },
      {
        src: "./assets/memories/shanghai/05-graffiti.jpg",
        alt: "在木墙前一起比赞的照片",
        position: "50% 48%",
        caption: "两只手一起比个赞，今天也顺利通关。"
      },
      {
        src: "./assets/memories/shanghai/06-korean-chicken.jpg",
        alt: "在上海吃炸鸡时拍下的照片",
        position: "50% 50%",
        caption: "炸鸡要和喜欢的人一起吃，才不算浪费。"
      },
      {
        src: "./assets/memories/shanghai/07-takeout.jpg",
        alt: "在上海的桌上摆满外卖和甜点的照片",
        position: "50% 50%",
        caption: "桌上摆满喜欢的东西，就是很小很确定的幸福。"
      },
      {
        src: "./assets/memories/shanghai/08-burger-selfie.jpg",
        alt: "我们拿着汉堡一起吃吃喝喝的自拍",
        position: "50% 44%",
        caption: "一人一口，把普通的一餐吃成纪念日。"
      },
      {
        src: "./assets/memories/shanghai/09-plush.jpg",
        alt: "在上海带回来的两只迪士尼小兔玩偶",
        position: "50% 58%",
        caption: "把喜欢的小玩偶带回家，也把这一天带回去。"
      },
      {
        src: "./assets/memories/shanghai/10-music.jpg",
        alt: "我们一起听同一首歌的手机截图",
        position: "50% 42%",
        caption: "一起听同一首歌，连沉默都刚刚好。"
      },
      {
        src: "./assets/memories/shanghai/11-photo-strips.jpg",
        alt: "上海旅行时一起拍的拍立得照片条",
        position: "50% 54%",
        caption: "四格照片装不下的，是我们说不完的以后。"
      }
    ]
  },
  {
    city: "南京",
    x: 61.8,
    y: 43.8,
    date: "南京 · 和你一起",
    note: "第一次半夜去便利店喝酒 希望下次再去是和你一起",
    tags: ["南京", "便利店", "一起学习"],
    accent: "#8b7d68",
    photos: [
      {
        src: "./assets/memories/nanjing/01-convenience-drinks.jpg",
        alt: "在南京便利店买酒和饮料的照片",
        position: "50% 46%",
        caption: "第一次半夜去便利店喝酒。"
      },
      {
        src: "./assets/memories/nanjing/02-study-session.jpg",
        alt: "在南京一起看书时拍的合照",
        position: "50% 48%",
        caption: "希望下次再去，是和你一起。"
      }
    ]
  },
  {
    city: "绍兴",
    x: 66.2,
    y: 48.6,
    date: "绍兴 · 雨天",
    note: "还记得那一天疯狂的夜宵、帕梅拉和恐怖电影吗？ 绍兴这么文艺的地方也能被我们搞成音爬",
    tags: ["绍兴", "雨天", "夜宵"],
    accent: "#728b73",
    photos: [
      {
        src: "./assets/memories/shaoxing/01-rainy-garden.jpg",
        alt: "下雨时撑着伞走在绍兴园林里的照片",
        position: "50% 54%"
      },
      {
        src: "./assets/memories/shaoxing/02-late-night-snacks.jpg",
        alt: "绍兴旅行时在酒店吃夜宵的照片",
        position: "50% 52%"
      }
    ]
  },
  {
    city: "香港",
    x: 69.2,
    y: 66.8,
    date: "香港 · 雨夜",
    note: "我们第一次一起出这么远的门 但奇怪的是和你在一起去哪里都有种熟悉的气味",
    tags: ["香港", "维港", "雨夜"],
    accent: "#637f9c",
    photos: [
      {
        src: "./assets/memories/hong-kong/01-us.jpg",
        alt: "我们在香港维港游船上的合照",
        position: "50% 52%"
      },
      {
        src: "./assets/memories/hong-kong/02-harbour-night.jpg",
        alt: "雨夜撑着伞看香港维港夜景",
        position: "50% 44%"
      }
    ]
  }
];

let transitionTimer;
let activeCityIndex = 0;
let activePhotoIndex = 0;
let pointerStartX = null;

function renderCityMarkers() {
  cityLayer.replaceChildren();
  photoCount.textContent = String(
    memories.reduce((total, memory) => total + memory.photos.length, 0)
  ).padStart(2, "0");

  memories.forEach((memory, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "city-marker";
    button.dataset.markerIndex = index;
    button.style.setProperty("--x", `${memory.x}%`);
    button.style.setProperty("--y", `${memory.y}%`);
    button.style.setProperty("--delay", `${280 + index * 100}ms`);
    button.style.setProperty("--accent", memory.accent);
    button.style.setProperty("--preview", `url("${memory.photos[0]?.src || ""}")`);
    button.setAttribute("aria-label", `打开${memory.city}的旅行回忆`);
    button.innerHTML = `
      <span class="city-marker__pulse" aria-hidden="true"></span>
      <span class="city-marker__pin" aria-hidden="true">
        <span></span>
      </span>
      <span class="city-marker__label">
        <span class="city-marker__thumb" aria-hidden="true"></span>
        <span class="city-marker__index">${String(index + 1).padStart(2, "0")}</span>
        <span class="city-marker__name">${memory.city}</span>
      </span>
    `;

    button.addEventListener("click", () => openMemory(index));
    cityLayer.append(button);
  });
}

function photoMarkup(photo, index, memory) {
  const hasSource = Boolean(photo.src);

  return `
    <figure class="memory-slide" style="--accent: ${memory.accent}">
      <div class="memory-slide__placeholder" aria-hidden="true">
        <span class="memory-slide__sun"></span>
        <span class="memory-slide__hill memory-slide__hill--back"></span>
        <span class="memory-slide__hill memory-slide__hill--front"></span>
        <span class="memory-slide__road"></span>
        <span class="memory-slide__number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <img
        class="memory-slide__image"
        src="${hasSource ? photo.src : ""}"
        alt="${photo.alt || `${memory.city}的旅行照片`}"
        style="object-position: ${photo.position || "center"}"
        ${hasSource ? "" : "hidden"}
        draggable="false"
      />
      <figcaption class="memory-slide__caption">${photo.caption || ""}</figcaption>
    </figure>
  `;
}

function renderMemory() {
  const city = memories[activeCityIndex];
  memorySlides.innerHTML = city.photos
    .map((photo, index) => photoMarkup(photo, index, city))
    .join("");
  memoryDialog.style.setProperty("--accent", city.accent);

  memorySlides.querySelectorAll(".memory-slide__image").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
    });
  });

  memoryMeta.textContent = `MEMORY ${String(activeCityIndex + 1).padStart(2, "0")}`;
  memoryTitle.textContent = city.city;
  memoryDate.textContent = city.date;
  memoryNote.textContent = city.note;
  memoryTags.innerHTML = city.tags.map((tag) => `<span>${tag}</span>`).join("");
  memoryDots.innerHTML = city.photos
    .map((_, index) => `<span data-dot="${index}"></span>`)
    .join("");

  if (city.photos.length < 2) {
    slideButtons.forEach((button) => {
      button.hidden = true;
    });
  } else {
    slideButtons.forEach((button) => {
      button.hidden = false;
    });
  }

  updateMemorySlide();
}

function updateMemorySlide() {
  const city = memories[activeCityIndex];
  const slides = memorySlides.querySelectorAll(".memory-slide");
  const dots = memoryDots.querySelectorAll("[data-dot]");

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === activePhotoIndex);
    slide.setAttribute("aria-hidden", index === activePhotoIndex ? "false" : "true");
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activePhotoIndex);
  });

  memoryCounter.textContent = `${String(activePhotoIndex + 1).padStart(2, "0")} / ${String(
    city.photos.length
  ).padStart(2, "0")}`;
}

function openMemory(index) {
  activeCityIndex = index;
  activePhotoIndex = 0;
  renderMemory();
  memoryDialog.showModal();
}

function closeMemory() {
  if (memoryDialog.open) {
    memoryDialog.close();
  }
}

function changeSlide(direction) {
  const photoCount = memories[activeCityIndex].photos.length;
  activePhotoIndex = (activePhotoIndex + direction + photoCount) % photoCount;
  updateMemorySlide();
}

function showNextPage() {
  window.clearTimeout(transitionTimer);
  startButton.disabled = true;
  coverPage.classList.add("is-leaving");

  transitionTimer = window.setTimeout(() => {
    coverPage.hidden = true;
    coverPage.classList.remove("is-leaving");
    nextPage.hidden = false;

    window.requestAnimationFrame(() => {
      nextPage.classList.add("is-visible");
      backButton.focus({ preventScroll: true });
    });
  }, 700);
}

function showCoverPage() {
  window.clearTimeout(transitionTimer);
  closeMemory();
  nextPage.classList.remove("is-visible");
  nextPage.hidden = true;
  coverPage.hidden = false;
  startButton.disabled = false;

  window.requestAnimationFrame(() => {
    startButton.focus({ preventScroll: true });
  });
}

startButton.addEventListener("click", showNextPage);
backButton.addEventListener("click", showCoverPage);

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeSlide(Number(button.dataset.slide));
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeMemory);
});

memoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMemory();
});

memoryDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    changeSlide(-1);
  }

  if (event.key === "ArrowRight") {
    changeSlide(1);
  }
});

memorySlides.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
});

memorySlides.addEventListener("pointerup", (event) => {
  if (pointerStartX === null) {
    return;
  }

  const distance = event.clientX - pointerStartX;
  pointerStartX = null;

  if (Math.abs(distance) > 46) {
    changeSlide(distance < 0 ? 1 : -1);
  }
});

renderCityMarkers();

const pageParams = new URLSearchParams(window.location.search);

if (pageParams.get("page") === "journey") {
  coverPage.hidden = true;
  nextPage.hidden = false;
  nextPage.classList.add("is-visible");
}

const requestedMemoryParam = pageParams.get("memory");
const requestedMemory = requestedMemoryParam === null ? -1 : Number(requestedMemoryParam);

if (
  pageParams.get("page") === "journey" &&
  Number.isInteger(requestedMemory) &&
  requestedMemory >= 0 &&
  requestedMemory < memories.length
) {
  openMemory(requestedMemory);
}
