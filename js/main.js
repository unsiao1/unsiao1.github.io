// 菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // 平滑滚动到锚点
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 关闭移动端菜单
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
                
                // 平滑滚动
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去头部高度
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 滚动时添加头部阴影
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 0) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});