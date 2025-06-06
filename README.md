# Wanderlust Chronicles - Adventure Travel Blog

A modern, responsive travel blog built with Bootstrap 5, featuring stunning visuals, interactive elements, and a clean design perfect for showcasing adventure stories and travel experiences.

## ✨ Features

### 🎨 Modern Design
- Clean, contemporary layout with custom CSS variables
- Gradient backgrounds and smooth animations
- Professional typography using Google Fonts (Sora & DM Serif Display)
- Responsive design that works on all devices

### 🧭 Navigation & UX
- Fixed navigation bar with scroll effects
- Smooth scrolling between sections
- Active navigation state management
- Mobile-friendly hamburger menu

### 🏔️ Hero Section
- Eye-catching hero with search functionality
- Interactive destination tags
- Floating "Next Destination" card with animation
- Search bar with visual feedback

### 📖 Content Sections
- **Latest Journeys**: Featured adventure cards with statistics
- **Recent Adventures**: Grid layout of travel stories
- **Visual Gallery**: Organized photo gallery with hover effects
- **Newsletter**: Email subscription with validation

### 🔍 Interactive Features
- Real-time search functionality
- Destination filtering
- Image gallery with modal views
- Newsletter subscription with animations
- Loading states and notifications

### 📱 Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wanderlust-chronicles.git
   cd wanderlust-chronicles
   ```

2. **Open the project**
   Simply open `index.html` in your web browser or use a local server:
   
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the website**
   Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
wanderlust-chronicles/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and media files (optional)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6\+)**: Interactive functionality
- **Bootstrap 5.3.2**: Responsive framework
- **Bootstrap Icons**: Icon library
- **Google Fonts**: Typography (Sora, DM Serif Display)

## 🎯 Key Components

### Navigation Bar
- Responsive navigation with Bootstrap collapse
- Custom active states and hover effects
- Smooth scroll to sections

### Hero Section
- Search functionality with suggestions
- Interactive destination tags
- Animated floating card element

### Featured Adventures
- Grid layout showcasing latest journeys
- Adventure statistics and metadata
- Hover effects and transitions

### Gallery Section
- Organized photo grid
- Modal image viewer
- Responsive layout adjustments

### Newsletter Section
- Email validation
- Subscription confirmation
- Animated feedback

## 🎨 Customization

### Color Scheme
The project uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #10b981;
  --dark-color: #111827;
  --light-color: #f9fafb;
  /* ... more variables */
}
```

### Typography
Fonts can be changed by updating the Google Fonts import and CSS variables:

```css
--font-heading: "DM Serif Display", serif;
--font-body: "Sora", sans-serif;
```

### Layout
Bootstrap's grid system is used throughout. Modify classes in HTML or override with custom CSS.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

