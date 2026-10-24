document.addEventListener('DOMContentLoaded', function () {
  // 自动设置当前年份
  var yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 移动端导航关闭
  var mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        var offcanvas = bootstrap.Offcanvas.getInstance(mobileNav);
        if (offcanvas) {
          offcanvas.hide();
        }
      });
    });
  }
});
