particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: '#ff0000' },
                shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#ff0000' },
                    polygon: { nb_sides: 5 }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: { enable: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff0000',
                    opacity: 0.4,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false }
                }
            }
        });

function updateTime() {
            const currentTimeElement = document.getElementById('current-time');
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            currentTimeElement.textContent = 'Thời gian: ' + formattedTime;
        }

        
        setInterval(updateTime, 1000);
        updateTime();

        
        function beep() {
            var audioContext = new (window.AudioContext || window.webkitAudioContext)();
            var oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';  
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime); 
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.6);  
        }

        
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                beep(); 
                const loadingElement = document.getElementById('loading');
                loadingElement.style.display = 'block';

                
                setTimeout(() => {
                    loadingElement.style.display = 'none';
                }, 5000);
            });
        });

        
        function showNotification() {
            document.getElementById('notification').style.display = 'block';
        }

        
        function closeNotification() {
            document.getElementById('notification').style.display = 'none';
        }

        
        function showSuccessNotification() {
            const notification = document.createElement('div');
            notification.classList.add('notification');
            notification.innerHTML = `
                <div class="intro-text">Chức năng đã được chọn thành công!</div>
                <button class="close-btn" onclick="closeSuccessNotification(this)">X</button>
            `;
            document.body.appendChild(notification);

            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000); 
        }

        
        function closeSuccessNotification(button) {
            const notification = button.parentElement;
            notification.style.display = 'none';
        }