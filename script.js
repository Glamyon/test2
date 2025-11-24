// ---------------- Internationalization ----------------
// ---------------- hero区 首----------------

// Hero 统计动态加载
function loadHeroStats() {
  // 未来接口
  fetch('/api/hero-stats.js')
    .then(response => response.json())
    .then(data => {
      const stats = document.getElementById('hero-stats');
      stats.innerHTML = `
        <div class="stat-card">
          <div class="stat-number">${data.projects}+</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${data.teams}+</div>
          <div class="stat-label">Certified Creative Teams</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${data.savings}</div>
          <div class="stat-label">Cost Reduction for Clients</div>
        </div>
      `;
    })
    .catch(() => {
      // 静态 fallback
      const stats = document.getElementById('hero-stats');
      stats.innerHTML = `
        <div class="stat-card">
          <div class="stat-number">320+</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">120+</div>
          <div class="stat-label">Certified Creative Teams</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">20%–50%</div>
          <div class="stat-label">Cost Reduction for Clients</div>
        </div>
      `;
    });
}

// 页面加载
window.addEventLoad = () => {
  loadHeroStats();
};



// ---------------- hero区 尾----------------
