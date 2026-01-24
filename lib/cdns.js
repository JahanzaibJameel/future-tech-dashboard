// CDN Links for external libraries
const CDN_LINKS = {
    threejs: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    particlesjs: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
    gsap: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js',
    chartjs: 'https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js',
    howler: 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js',
    fontAwesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Exo+2:wght@300;400;600&display=swap'
};

// Function to load all CDNs
function loadCDNs() {
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };
    
    const loadCSS = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    };
    
    // Load CSS
    loadCSS(CDN_LINKS.fontAwesome);
    loadCSS(CDN_LINKS.googleFonts);
    
    // Load scripts in order
    Promise.all([
        loadScript(CDN_LINGS.threejs),
        loadScript(CDN_LINKS.particlesjs),
        loadScript(CDN_LINKS.gsap),
        loadScript(CDN_LINKS.chartjs),
        loadScript(CDN_LINKS.howler)
    ]).then(() => {
        console.log('All CDNs loaded successfully');
    }).catch(error => {
        console.error('Failed to load CDN:', error);
    });
}

// Start loading
loadCDNs();