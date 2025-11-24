// ---------------- Internationalization ----------------
// ---------------- hero区 首----------------

const i18n = {
  en: {
    "hero.title":"Scale Your Business with China’s Top Creative Teams",
    "hero.subtitle":"Get fast, efficient, and affordable project delivery from certified Chinese teams — from design to development, we ensure your project success.",
    "hero.cta1":"Launch Your Project",
    "hero.cta2":"Browse Services"
  },
  zh: {
    "hero.title":"与中国顶尖专业团队一起加速您的业务",
    "hero.subtitle":"通过经过认证的中国团队获得快速、高效且性价比高的项目交付——从设计到开发，确保您的项目成功。",
    "hero.cta1":"立即开始项目",
    "hero.cta2":"浏览服务"
  }
};

// 语言切换函数
function switchLanguage(lang="en"){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(i18n[lang] && i18n[lang][key]) el.innerText=i18n[lang][key];
  });
}


// ---------------- hero区 尾----------------
