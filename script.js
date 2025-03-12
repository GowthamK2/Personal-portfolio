// Force bypass loading screen if it gets stuck
window.addEventListener('load', function() {
    setTimeout(function() {
      const loadingScreen = document.querySelector('.loading-screen');
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
    }, 2000); // Wait 2 seconds then bypass
  });
  console.log("Script loaded"); // Debug message

  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded"); // Debug message
    
    // Initialize loading screen first, then the rest
    simulateLoading();
    
    // Delayed initialization for the rest
    setTimeout(function() {
      // Initialize particles.js for background effect
      initParticles();
      
      // Initialize typing effect on home page
      initTypingEffect();
      
      // Initialize navigation
      initNavigation();
      
      // Initialize skill bars animation
      initSkillBars();
      
      // Initialize dialog box
      initDialogBox();
      
      // Initialize sound toggle
      initSoundToggle();
    }, 1000);
  });

// Simulate loading screen progress
function simulateLoading() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progress = document.querySelector('.progress');
    const percentage = document.querySelector('.percentage');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                // Show welcome dialog after loading
                setTimeout(() => {
                    showDialog();
                }, 1500);
            }, 500);
        } else {
            width += Math.floor(Math.random() * 10) + 1;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
            percentage.textContent = width + '%';
        }
    }, 200);
}

// Initialize particles.js
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4CC9F0'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#7B2CBF',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Initialize typing effect on home page
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Data Analyst & Machine Learning Engineer',
        'Python | SQL | TensorFlow | Keras',
        'Turning Data into Actionable Insights',
        'Press START to explore my world'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next text
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// Initialize navigation
function initNavigation() {
    const menuItems = document.querySelectorAll('.menu-items li');
    const sections = document.querySelectorAll('.section');
    const ctaButtons = document.querySelectorAll('.cta-buttons button');
    
    function navigateToSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all menu items
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');
        
        // Add active class to corresponding menu item
        const targetMenuItem = document.querySelector(`.menu-items li[data-section="${sectionId}"]`);
        if (targetMenuItem) {
            targetMenuItem.classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Play transition sound
        playSound('transition');
    }
    
    // Menu item click event
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            navigateToSection(sectionId);
        });
    });
    
    // CTA buttons click event
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            navigateToSection(sectionId);
        });
    });
    
    // Project details buttons
    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can implement project detail modal here
            playSound('click');
        });
    });
}

// Initialize skill bars animation
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Intersection Observer to trigger animation when skills section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateSkillBars();
                }, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe the skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Animate skill bars
    function animateSkillBars() {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                const levelFill = item.querySelector('.level-fill');
                const width = levelFill.style.width;
                
                // Reset width first
                levelFill.style.width = '0';
                
                // Animate to actual width
                setTimeout(() => {
                    levelFill.style.width = width;
                    // Play sound effect
                    playSound('skill');
                }, 100);
            }, index * 200); // Stagger animations
        });
    }
}

// Initialize dialog box
function initDialogBox() {
    const dialogBox = document.querySelector('.dialog-box');
    const dialogClose = document.querySelectorAll('.dialog-close');
    const acceptButton = document.querySelector('.dialog-footer .btn-primary');
    
    // Show dialog function
    window.showDialog = function() {
        dialogBox.classList.add('active');
        playSound('dialog');
    };
    
    // Close dialog function
    function closeDialog() {
        dialogBox.classList.remove('active');
        playSound('click');
    }
    
    // Close dialog events
    dialogClose.forEach(button => {
        button.addEventListener('click', closeDialog);
    });
    
    // Accept button click
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            closeDialog();
            
            // Navigate to section if specified
            if (sectionId) {
                const menuItem = document.querySelector(`.menu-items li[data-section="${sectionId}"]`);
                if (menuItem) {
                    menuItem.click();
                }
            }
        });
    }
    
    // Close dialog when clicking outside
    dialogBox.addEventListener('click', function(e) {
        if (e.target === dialogBox) {
            closeDialog();
        }
    });
}

// Initialize sound toggle
function initSoundToggle() {
    const soundToggle = document.querySelector('.sound-toggle');
    let soundEnabled = true;
    
    // Toggle sound state
    soundToggle.addEventListener('click', function() {
        soundEnabled = !soundEnabled;
        const icon = soundToggle.querySelector('i');
        
        if (soundEnabled) {
            icon.className = 'fas fa-volume-up';
        } else {
            icon.className = 'fas fa-volume-mute';
        }
        
        // Play/mute sound effect
        if (soundEnabled) {
            playSound('click');
        }
    });
    
    // Preload sound effects
    preloadSounds();
}

// Game audio system
const sounds = {
    click: 'https://cdn.freesound.org/previews/242/242501_4414130-lq.mp3',
    transition: 'https://cdn.freesound.org/previews/320/320181_5260872-lq.mp3',
    skill: 'https://cdn.freesound.org/previews/369/369921_6687661-lq.mp3',
    dialog: 'https://cdn.freesound.org/previews/339/339169_5995249-lq.mp3'
};

const audioElements = {};

// Preload sounds
function preloadSounds() {
    for (const [key, url] of Object.entries(sounds)) {
        const audio = new Audio();
        audio.src = url;
        audio.preload = 'auto';
        audio.volume = 0.3;
        audioElements[key] = audio;
    }
}

// Play sound function
function playSound(soundName) {
    const soundToggle = document.querySelector('.sound-toggle');
    const icon = soundToggle.querySelector('i');
    const soundEnabled = icon.className.includes('volume-up');
    
    if (soundEnabled && audioElements[soundName]) {
        // Clone the audio to allow multiple plays
        const sound = audioElements[soundName].cloneNode();
        sound.volume = 0.3;
        sound.play();
        
        // Clean up after playing
        sound.onended = function() {
            sound.remove();
        };
    }
}

// Level up animation for player stats
function levelUp() {
    const levelElement = document.getElementById('level');
    const hpFill = document.querySelector('.hp-fill');
    const currentLevel = parseInt(levelElement.textContent);
    
    // Increase level
    levelElement.textContent = currentLevel + 1;
    
    // Animate HP bar
    hpFill.style.width = '100%';
    
    // Play level up sound
    playSound('skill');
    
    // Show level up dialog or notification
    // You can implement this based on your preference
}

// Add scroll animations
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Add parallax effect to particles
    const particles = document.getElementById('particles-js');
    if (particles) {
        particles.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});

// Add custom cursor (optional)
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .menu-items li, .project-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
        });
    });
}

// Add Easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    // Get the key
    const key = e.key;
    
    // Get the required key from the code
    const requiredKey = konamiCode[konamiCodePosition];
    
    // Compare the key with the required key
    if (key === requiredKey) {
        // Move to the next key in the konami code
        konamiCodePosition++;
        
        // If the last key is reached, activate easter egg
        if (konamiCodePosition === konamiCode.length) {
            activateEasterEgg();
            konamiCodePosition = 0;
        }
    } else {
        // Reset the position if wrong key
        konamiCodePosition = 0;
    }
});

// Easter egg function
function activateEasterEgg() {
    // Level up animation
    levelUp();
    
    // Change particles color
    const particles = document.querySelectorAll('#particles-js canvas');
    if (particles.length > 0) {
        // You would need to reinitialize particles.js with new colors
        // This is a simplified representation
        particles[0].style.filter = 'hue-rotate(180deg)';
    }
    
    // Show achievement notification
    const achievement = document.createElement('div');
    achievement.className = 'easter-egg-achievement';
    achievement.innerHTML = `
        <div>
            <i class="fas fa-trophy"></i>
            <h4>SECRET ACHIEVEMENT UNLOCKED!</h4>
            <p>You found the Konami Code!</p>
        </div>
    `;
    document.body.appendChild(achievement);
    
    // Play special sound
    playSound('dialog');
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        achievement.classList.add('fade-out');
        setTimeout(() => {
            achievement.remove();
        }, 1000);
    }, 5000);
}

// Add additional CSS for easter egg achievement
const style = document.createElement('style');
style.textContent = `
    .easter-egg-achievement {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: rgba(123, 44, 191, 0.9);
        border: 2px solid #4CC9F0;
        border-radius: 10px;
        padding: 15px;
        color: white;
        z-index: 1000;
        animation: slideIn 0.5s forwards;
        box-shadow: 0 0 20px rgba(76, 201, 240, 0.5);
    }
    
    .easter-egg-achievement div {
        display: flex;
        align-items: center;
    }
    
    .easter-egg-achievement i {
        font-size: 24px;
        color: gold;
        margin-right: 15px;
    }
    
    .easter-egg-achievement h4 {
        margin: 0 0 5px 0;
        color: #FFC914;
    }
    
    .easter-egg-achievement p {
        margin: 0;
    }
    
    .easter-egg-achievement.fade-out {
        animation: slideOut 1s forwards;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: width 0.2s, height 0.2s, border-color 0.2s;
        z-index: 9999;
    }
    
    .cursor-hover {
        width: 40px;
        height: 40px;
        border-color: var(--primary-color);
        mix-blend-mode: difference;
    }
`;
document.head.appendChild(style);