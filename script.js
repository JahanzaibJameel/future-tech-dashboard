// ============================================
// 2026 TECH HORIZON - COMPLETE SCRIPT (NO AUDIO DEPENDENCY)
// ============================================

class TechHorizonDashboard {
    constructor() {
        this.isDarkMode = false;
        this.audioEnabled = false; // Disabled since we don't have audio files
        this.animationsEnabled = true;
        this.particlesEnabled = true;
        this.isFullscreen = false;
        this.systemStatus = 'online';
        this.currentSection = 'dashboard';
        this.aiResponses = [];
        this.dataStreams = [];
        this.startTime = Date.now();
        
        this.init();
    }
    
    async init() {
        try {
            await this.showLoadingScreen();
            this.initCharts();
            this.initNeuralNetwork();
            this.initEventListeners();
            this.initAIResponses();
            this.initDataStreams();
            this.startSystemMonitoring();
            this.startLiveUpdates();
            this.hideLoadingScreen();
            
            console.log('🚀 2026 Tech Horizon Dashboard initialized');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    // Loading Screen
    async showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const loadingMessage = document.getElementById('loading-message');
        
        if (!loadingScreen) return;
        
        const steps = [
            'Initializing quantum processors...',
            'Calibrating neural networks...',
            'Loading holographic interface...',
            'Establishing quantum entanglement...',
            'Bootstrapping AI consciousness...',
            'Rendering cybernetic environment...'
        ];
        
        for (let i = 0; i <= 100; i++) {
            if (progressBar) progressBar.style.width = `${i}%`;
            if (progressText) progressText.textContent = `${i}%`;
            
            // Update message every 15%
            if (loadingMessage && i % 15 === 0) {
                loadingMessage.textContent = steps[Math.floor(i / 15) % steps.length];
            }
            
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
    
    // Neural Network Initialization
    initNeuralNetwork() {
        console.log("Neural Network module initialized");
        this.setupNeuralVisualization();
        return true;
    }
    
    setupNeuralVisualization() {
        // Simple neural network visualization without canvas
        const container = document.querySelector('.visualization-container .placeholder-visual');
        if (!container) return;
        
        // Create animated elements
        const cube = document.createElement('div');
        cube.className = 'cyber-cube';
        cube.innerHTML = `
            <div class="cube-face front"></div>
            <div class="cube-face back"></div>
            <div class="cube-face right"></div>
            <div class="cube-face left"></div>
            <div class="cube-face top"></div>
            <div class="cube-face bottom"></div>
        `;
        
        const sphere = document.createElement('div');
        sphere.className = 'cyber-sphere';
        sphere.innerHTML = `
            <div class="sphere-ring"></div>
            <div class="sphere-ring"></div>
            <div class="sphere-ring"></div>
        `;
        
        container.innerHTML = '';
        container.appendChild(cube);
        container.appendChild(sphere);
        
        // Add CSS animations via JavaScript
        const style = document.createElement('style');
        style.textContent = `
            .cyber-cube {
                position: relative;
                width: 100px;
                height: 100px;
                transform-style: preserve-3d;
                animation: rotateCube 10s linear infinite;
            }
            
            @keyframes rotateCube {
                0% { transform: rotateX(0) rotateY(0); }
                100% { transform: rotateX(360deg) rotateY(360deg); }
            }
            
            .cube-face {
                position: absolute;
                width: 100px;
                height: 100px;
                background: rgba(0, 243, 255, 0.1);
                border: 1px solid #00f3ff;
                box-shadow: 0 0 10px #00f3ff;
            }
            
            .front { transform: translateZ(50px); }
            .back { transform: translateZ(-50px) rotateY(180deg); }
            .right { transform: rotateY(90deg) translateZ(50px); }
            .left { transform: rotateY(-90deg) translateZ(50px); }
            .top { transform: rotateX(90deg) translateZ(50px); }
            .bottom { transform: rotateX(-90deg) translateZ(50px); }
            
            .cyber-sphere {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: radial-gradient(circle, #00f3ff, transparent);
                box-shadow: 0 0 20px #00f3ff;
                animation: pulseSphere 2s ease-in-out infinite;
            }
            
            @keyframes pulseSphere {
                0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
                50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Charts Initialization
    initCharts() {
        try {
            // Check if Chart is available
            if (typeof Chart === 'undefined') {
                console.log('Chart.js not loaded - using fallback visualization');
                this.createChartFallback();
                return;
            }
            
            // Create a simple chart if canvas exists
            const chartContainer = document.querySelector('.visualization-container');
            if (chartContainer) {
                const canvas = document.createElement('canvas');
                canvas.id = 'tech-chart';
                canvas.style.width = '100%';
                canvas.style.height = '200px';
                chartContainer.appendChild(canvas);
                
                const ctx = canvas.getContext('2d');
                this.techChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Tech Growth',
                            data: [65, 70, 75, 80, 85, 90],
                            borderColor: '#00f3ff',
                            backgroundColor: 'rgba(0, 243, 255, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                grid: { color: 'rgba(255, 255, 255, 0.1)' }
                            },
                            x: {
                                grid: { color: 'rgba(255, 255, 255, 0.1)' }
                            }
                        }
                    }
                });
            }
        } catch (error) {
            console.log('Charts failed to load, using fallback:', error);
            this.createChartFallback();
        }
    }
    
    createChartFallback() {
        // Create a CSS-based chart fallback
        const container = document.querySelector('.stats-container');
        if (!container) return;
        
        const fallbackHTML = `
            <div class="chart-fallback">
                <div class="chart-bar" style="height: 80%">
                    <span class="chart-value">80%</span>
                    <span class="chart-label">AI</span>
                </div>
                <div class="chart-bar" style="height: 65%">
                    <span class="chart-value">65%</span>
                    <span class="chart-label">Quantum</span>
                </div>
                <div class="chart-bar" style="height: 90%">
                    <span class="chart-value">90%</span>
                    <span class="chart-label">Neural</span>
                </div>
            </div>
        `;
        
        // Add CSS for the fallback
        const style = document.createElement('style');
        style.textContent = `
            .chart-fallback {
                display: flex;
                gap: 20px;
                height: 150px;
                align-items: flex-end;
                justify-content: center;
                padding: 20px;
            }
            
            .chart-bar {
                width: 40px;
                background: linear-gradient(to top, #00f3ff, #9d00ff);
                border-radius: 4px 4px 0 0;
                position: relative;
                transition: height 0.5s ease;
            }
            
            .chart-value {
                position: absolute;
                top: -25px;
                left: 0;
                right: 0;
                text-align: center;
                font-family: 'Orbitron', sans-serif;
                color: #00f3ff;
                font-size: 0.8rem;
            }
            
            .chart-label {
                position: absolute;
                bottom: -25px;
                left: 0;
                right: 0;
                text-align: center;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.7rem;
                color: rgba(255, 255, 255, 0.7);
            }
        `;
        
        document.head.appendChild(style);
        
        // Find a place to put the chart
        const target = document.querySelector('.visualization-container') || 
                      document.querySelector('.stats-grid');
        if (target) {
            target.insertAdjacentHTML('beforeend', fallbackHTML);
        }
    }
    
    // Event Listeners
    initEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Fullscreen toggle
        const fullscreenToggle = document.getElementById('fullscreen-toggle');
        if (fullscreenToggle) {
            fullscreenToggle.addEventListener('click', () => this.toggleFullscreen());
        }
        
        // AI Chat
        const aiSend = document.getElementById('ai-send');
        const aiInput = document.getElementById('ai-input');
        
        if (aiSend && aiInput) {
            aiSend.addEventListener('click', () => this.processAIInput());
            aiInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.processAIInput();
            });
        }
        
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.navigateToSection(section);
            });
        });
        
        // Emergency stop
        const emergencyStop = document.getElementById('emergency-stop');
        if (emergencyStop) {
            emergencyStop.addEventListener('click', () => this.emergencyStop());
        }
        
        // Add interactive hover effects
        document.querySelectorAll('.cyber-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => this.createHoverEffect(btn));
            btn.addEventListener('click', () => this.createClickEffect(btn));
        });
        
        // Volume control
        const volumeControl = document.getElementById('volume-control');
        if (volumeControl) {
            volumeControl.addEventListener('input', (e) => {
                // Just update UI, no audio
                console.log('Volume set to:', e.target.value);
            });
        }
    }
    
    // Visual Effects (replaces audio)
    createHoverEffect(element) {
        if (!this.animationsEnabled) return;
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 243, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        // Add CSS animation
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        const rect = element.getBoundingClientRect();
        ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
        ripple.style.left = `${rect.left + rect.width/2 - parseInt(ripple.style.width)/2}px`;
        ripple.style.top = `${rect.top + rect.height/2 - parseInt(ripple.style.height)/2}px`;
        
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
    
    createClickEffect(element) {
        if (!this.animationsEnabled) return;
        
        // Create click flash
        element.style.boxShadow = '0 0 20px #00f3ff, 0 0 40px #00f3ff';
        setTimeout(() => {
            element.style.boxShadow = '';
        }, 300);
        
        // Update stats randomly on click
        this.updateStatsRandomly();
    }
    
    updateStatsRandomly() {
        document.querySelectorAll('.quantum-stat .stat-value').forEach(stat => {
            const current = parseInt(stat.textContent.replace(/[^0-9]/g, '')) || 1000;
            const change = Math.floor(Math.random() * 20) - 10;
            const newValue = Math.max(100, current + change);
            
            // Animate the number change
            this.animateNumberChange(stat, current, newValue);
        });
    }
    
    animateNumberChange(element, start, end) {
        const duration = 500;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    // AI System
    initAIResponses() {
        this.aiResponses = [
            { 
                keywords: ['hello', 'hi', 'hey'], 
                response: 'NEXUS: Greetings, Administrator. Quantum systems are online and functioning at optimal levels.',
                action: null
            },
            { 
                keywords: ['quantum', 'qubit', 'entanglement'], 
                response: 'NEXUS: Quantum processor status: 1,024 active qubits. Entanglement stability: 99.8%. Decoherence time: 15ms.',
                action: () => this.highlightQuantumStats()
            },
            { 
                keywords: ['status', 'system', 'health'], 
                response: 'NEXUS: All systems nominal. CPU: 78%, Memory: 64%, Network: 92%. Neural accuracy: 99.7%.',
                action: () => this.showSystemAlert('System Status', 'All systems operating within normal parameters')
            },
            { 
                keywords: ['help', 'commands', 'what can you do'], 
                response: 'NEXUS: Available commands: status, quantum, ai, predict, simulate, train, export, emergency.',
                action: null
            },
            { 
                keywords: ['simulate', 'launch', 'run'], 
                response: 'NEXUS: Launching quantum simulation... Parameters initialized. Simulation running.',
                action: () => this.launchSimulation()
            },
            { 
                keywords: ['predict', 'future', '2026'], 
                response: 'NEXUS: Predictive analysis indicates: AI adoption 89%, Quantum supremacy 73%, Green energy 65% by 2026.',
                action: () => this.showPredictionChart()
            },
            { 
                keywords: ['time', 'date', 'clock'], 
                response: () => {
                    const now = new Date();
                    return `NEXUS: Current time: ${now.toLocaleTimeString()}. Date: ${now.toLocaleDateString()}. System uptime: ${this.getUptime()}`;
                },
                action: null
            },
            { 
                keywords: ['emergency', 'stop', 'shutdown'], 
                response: 'NEXUS: Emergency protocol activated. All non-essential systems are being suspended.',
                action: () => this.emergencyStop()
            },
            { 
                keywords: ['thank', 'thanks'], 
                response: 'NEXUS: You are welcome, Administrator. My purpose is to assist in navigating the 2026 tech horizon.',
                action: null
            }
        ];
    }
    
    processAIInput() {
        const input = document.getElementById('ai-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message to console
        this.addAIMessage(message, 'user');
        
        // Process AI response
        setTimeout(() => {
            const response = this.getAIResponse(message);
            this.addAIMessage(response.response, 'ai');
            
            if (response.action) {
                if (typeof response.action === 'function') {
                    response.action();
                }
            }
        }, 500);
        
        // Clear input
        input.value = '';
    }
    
    getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const response of this.aiResponses) {
            if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
                // Check if response is a function
                const responseText = typeof response.response === 'function' 
                    ? response.response() 
                    : response.response;
                
                return {
                    response: responseText,
                    action: response.action
                };
            }
        }
        
        return {
            response: 'NEXUS: I did not understand that command. Type "help" for available commands.',
            action: null
        };
    }
    
    addAIMessage(text, sender) {
        const consoleOutput = document.getElementById('ai-console');
        if (!consoleOutput) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `console-line ${sender}`;
        messageDiv.textContent = sender === 'ai' ? `NEXUS: ${text}` : `USER: ${text}`;
        
        consoleOutput.appendChild(messageDiv);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        
        // Limit messages to 10
        while (consoleOutput.children.length > 10) {
            consoleOutput.removeChild(consoleOutput.firstChild);
        }
    }
    
    // Data Streams
    initDataStreams() {
        this.dataStreams = [
            { name: 'QUANTUM_SYNC', color: '#00f3ff', value: 85.5 },
            { name: 'NEURAL_FEED', color: '#ff00ff', value: 92.3 },
            { name: 'GRID_DATA', color: '#00ff9d', value: 78.9 }
        ];
        this.updateDataStreamsDisplay();
    }
    
    updateDataStreamsDisplay() {
        const streamList = document.getElementById('data-streams');
        if (!streamList) return;
        
        streamList.innerHTML = '';
        this.dataStreams.forEach(stream => {
            const div = document.createElement('div');
            div.className = 'stream-item';
            div.innerHTML = `
                <div style="color:${stream.color}">${stream.name}</div>
                <div>${stream.value.toFixed(1)} units</div>
            `;
            streamList.appendChild(div);
        });
    }
    
    // System Monitoring
    startSystemMonitoring() {
        this.updateCyberTime();
        setInterval(() => this.updateCyberTime(), 1000);
        setInterval(() => this.updateSystemStats(), 3000);
        setInterval(() => this.updateCounters(), 2000);
        setInterval(() => this.updateDataStreams(), 4000);
    }
    
    updateCyberTime() {
        const now = new Date();
        const cyberDate = document.getElementById('cyber-date');
        const cyberTime = document.getElementById('cyber-time');
        
        if (cyberDate) {
            cyberDate.textContent = now.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }).toUpperCase();
        }
        
        if (cyberTime) {
            const timeParts = cyberTime.querySelectorAll('.time-digital, .time-quantum');
            if (timeParts[0]) {
                timeParts[0].textContent = now.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            }
            if (timeParts[1]) {
                timeParts[1].textContent = `.${now.getMilliseconds().toString().padStart(3, '0')}`;
            }
        }
    }
    
    updateSystemStats() {
        // Randomly update system stats
        document.querySelectorAll('.monitor-fill').forEach(bar => {
            const current = parseInt(bar.style.width) || 50;
            const change = Math.random() * 10 - 5; // -5 to +5
            const newWidth = Math.max(20, Math.min(95, current + change));
            bar.style.width = `${newWidth}%`;
            
            // Update the percentage text
            const valueElement = bar.parentElement.nextElementSibling;
            if (valueElement) {
                valueElement.textContent = `${Math.round(newWidth)}%`;
            }
        });
        
        // Update quantum stats with slight variations
        document.querySelectorAll('.quantum-stat').forEach(stat => {
            const valueElement = stat.querySelector('.stat-value');
            if (valueElement) {
                const text = valueElement.textContent;
                const isPercent = text.includes('%');
                const current = parseFloat(text.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(current)) {
                    const change = (Math.random() - 0.5) * 2; // -1 to +1
                    const newValue = Math.max(0, current + change);
                    
                    if (isPercent) {
                        valueElement.textContent = `${newValue.toFixed(1)}%`;
                    } else {
                        valueElement.textContent = Math.round(newValue).toLocaleString();
                    }
                }
            }
        });
    }
    
    updateCounters() {
        const uptimeCounter = document.getElementById('uptime-counter');
        if (uptimeCounter) {
            const elapsed = Date.now() - this.startTime;
            const hours = Math.floor(elapsed / (1000 * 60 * 60));
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
            uptimeCounter.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    
    updateDataStreams() {
        this.dataStreams.forEach(stream => {
            const change = (Math.random() - 0.5) * 2;
            stream.value = Math.max(0, Math.min(100, stream.value + change));
        });
        this.updateDataStreamsDisplay();
    }
    
    // Live Updates
    startLiveUpdates() {
        setInterval(() => {
            // Update chart data if chart exists
            if (this.techChart) {
                const data = this.techChart.data.datasets[0].data;
                const lastValue = data[data.length - 1];
                const change = (Math.random() - 0.5) * 5;
                const newValue = Math.max(60, Math.min(95, lastValue + change));
                
                data.shift();
                data.push(newValue);
                this.techChart.update('none');
            }
        }, 2000);
    }
    
    // Helper Methods
    getUptime() {
        const elapsed = Date.now() - this.startTime;
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    }
    
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('light-theme', !this.isDarkMode);
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
        this.createClickEffect(document.getElementById('theme-toggle'));
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            this.isFullscreen = true;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.isFullscreen = false;
            }
        }
        this.createClickEffect(document.getElementById('fullscreen-toggle'));
    }
    
    navigateToSection(section) {
        this.currentSection = section;
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.nav-item[data-section="${section}"]`)?.classList.add('active');
        this.createClickEffect(document.querySelector(`.nav-item[data-section="${section}"]`));
    }
    
    highlightQuantumStats() {
        const quantumStats = document.querySelectorAll('.quantum-stat');
        quantumStats.forEach(stat => {
            stat.style.boxShadow = '0 0 20px #00f3ff';
            setTimeout(() => {
                stat.style.boxShadow = '';
            }, 1000);
        });
    }
    
    showSystemAlert(title, message) {
        const alertList = document.querySelector('.alert-list');
        if (!alertList) return;
        
        const alertItem = document.createElement('div');
        alertItem.className = 'alert-item info';
        alertItem.innerHTML = `
            <div class="alert-icon">
                <i class="fas fa-info-circle"></i>
            </div>
            <div class="alert-content">
                <div class="alert-title">${title}</div>
                <div class="alert-message">${message}</div>
                <div class="alert-time">Just now</div>
            </div>
        `;
        
        alertList.insertBefore(alertItem, alertList.firstChild);
        
        // Remove after 5 seconds
        setTimeout(() => {
            alertItem.remove();
        }, 5000);
    }
    
    launchSimulation() {
        this.showSystemAlert('QUANTUM SIMULATION', 'Simulation launched successfully');
        
        // Visual effect
        const simulationEffect = document.createElement('div');
        simulationEffect.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, #00f3ff, transparent);
            transform: translate(-50%, -50%);
            animation: simulationPulse 1.5s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes simulationPulse {
                0% { width: 0; height: 0; opacity: 1; }
                100% { width: 100vh; height: 100vh; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(simulationEffect);
        setTimeout(() => simulationEffect.remove(), 1500);
    }
    
    showPredictionChart() {
        // If we have a chart, highlight it
        if (this.techChart) {
            const canvas = this.techChart.canvas;
            canvas.style.boxShadow = '0 0 30px #9d00ff';
            setTimeout(() => {
                canvas.style.boxShadow = '';
            }, 2000);
        }
    }
    
    emergencyStop() {
        this.showSystemAlert('EMERGENCY PROTOCOL', 'All non-essential systems suspended');
        
        // Visual emergency effect
        document.body.style.animation = 'emergencyPulse 0.5s 3';
        
        // Add emergency animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes emergencyPulse {
                0%, 100% { background-color: transparent; }
                50% { background-color: rgba(255, 0, 0, 0.2); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 1500);
    }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new TechHorizonDashboard();
});