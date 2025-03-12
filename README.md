# Gaming-Inspired Portfolio Website

A dark-themed, interactive portfolio website with gaming aesthetics designed for Data Science and ML professionals.

![Portfolio Preview]("C:\Users\Gowtham K\OneDrive\Pictures\Screenshots\Screenshot 2025-03-12 234125.png")

## 🎮 Features

- **Interactive Loading Screen**: Simulates a game loading experience
- **Particle Background**: Dynamic particle effect that responds to user interaction
- **Game HUD Navigation**: Navigation styled as a game heads-up display
- **Skill Tree**: Visualize skills as a gaming skill tree with level bars
- **Quest Log**: Projects displayed as quests with details and links
- **Animated Typography**: Glitch text effect and typing animation
- **Sound Effects**: Optional sound effects for interactions
- **Responsive Design**: Fully responsive across all devices
- **Easter Egg**: Hidden Konami code easter egg (↑↑↓↓←→←→BA)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Animations, Flexbox, Grid)
- JavaScript (ES6+)
- [Particles.js](https://vincentgarreau.com/particles.js/) for background effects
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Orbitron, Rajdhani)

## 📋 Project Structure

```
gaming-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── screenshots/        # Project screenshots
│   └── preview.png     # Preview image for README
└── README.md           # This file
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/gaming-portfolio.git
   ```

2. Open `index.html` in a web browser, or deploy to a web hosting service.

## ✨ Customization

### Changing Profile Information

Edit the HTML file to update:
- Name and title
- About section content
- Skills and proficiency levels
- Project details and links
- Contact information

### Changing Colors

The color scheme can be customized in the CSS file by modifying the root variables:

```css
:root {
    --primary-color: #7B2CBF;       /* Main purple accent */
    --secondary-color: #3A0CA3;     /* Secondary purple */
    --accent-color: #4CC9F0;        /* Cyan accent */
    --text-color: #E0E0E0;          /* Light text */
    --dark-bg: #0F0F1B;             /* Dark background */
    --darker-bg: #080810;           /* Darker background */
    --card-bg: rgba(15, 15, 30, 0.7); /* Card background */
    --border-color: rgba(76, 201, 240, 0.3); /* Border color */
    --success-color: #06D6A0;       /* Success green */
    --warning-color: #FFC914;       /* Warning yellow */
    --danger-color: #EF476F;        /* Error red */
}
```

### Changing Particles

The particle background can be customized in the `initParticles()` function in script.js.

## 📱 Responsive Design

The portfolio is fully responsive and adapts to different screen sizes:
- Desktop (1200px+)
- Laptop (992px+)
- Tablet (768px+)
- Mobile (576px+)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Live Demo

[View Live Demo](file:///C:/Users/Gowtham%20K/Portfolio%20website/index.html)

## 🙏 Acknowledgements

- [Particles.js](https://vincentgarreau.com/particles.js/) for the background effect
- [Font Awesome](https://fontawesome.com/) for the icons
- Sound effects from [Freesound.org](https://freesound.org/)
