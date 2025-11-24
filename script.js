// 语言切换
const languageButtons = document.querySelectorAll('.language-switcher button');
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    document.querySelectorAll('.translatable').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    languageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// 热门服务轮播
const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselSlides.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < carouselSlides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex < carouselSlides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}, 5000);

// 渐入动画
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.glass, .card, .step, .advantage-card, .testimonial-card').forEach(el => observer.observe(el));

// FAQ 展开
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// 提交项目按钮 - 打开模态
document.querySelectorAll('[data-modal="open"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('form-modal').style.display = 'flex';
  });
});
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('form-modal').style.display = 'none';
});
document.getElementById('form-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('form-modal')) {
    document.getElementById('form-modal').style.display = 'none';
  }
});

// Hero 背景动态渐变
document.addEventListener('mousemove', e => {
  const hero = document.getElementById('hero');
  const x = (e.clientX / window.innerWidth) * 10 - 5;
  const y = (e.clientY / window.innerHeight) * 10 - 5;
  hero.style.backgroundPosition = `${x}% ${y}%`;
});
