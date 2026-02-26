# PotatoPress: A Scalable News Aggregation Platform
- Built with React · Powered by NewsAPI · Modern UI/UX

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GitHub last commit](https://img.shields.io/github/last-commit/tusharrr01/PotatoPress-React?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📌 Project Overview
- PotatoPress is a high-performance news aggregation web application that delivers real-time headlines from NewsAPI.org in a clean, responsive interface. It features a modern React frontend with a separate Express.js backend for secure API management. Designed for optimal readability and navigation, it categorizes news into sections (Business, Technology, Sports, etc.) and dynamically filters content using React.

![Preview](Img/demo.jpg)

## 🛠 Technical Implementation
- **Frontend Stack** :
  - React.js with Hooks (useState, useEffect)
  - Infinite scroll for seamless content loading
  - Dark/Light mode support
  - Responsive Bootstrap-based UI
  
- **API Integration** :
  - Data Source: NewsAPI via Express backend
  - Secure server-side API key management
  - Automatic API key rotation on backend
  
- **Performance Optimizations** :
  - Lazy loading components
  - Infinite scroll pagination
  - Efficient re-rendering with React.memo

## ⚙ Setup & Deployment
- **Prerequisites** :
  - Node.js ≥ v16
  - Express backend running (see backend folder for setup)

- **Local Development** :

### Installation
```bash 
# Clone the repository
git clone https://github.com/tusharr01/PotatoPress-React.git
cd PotatoPress-React

# Install dependencies
npm install

# Create and configure .env file
cp .env.example .env
# REACT_APP_BACKEND_URL=http://localhost:5000

# Start React development server (runs on port 3000)
npm start
```

Your app will be available at `http://localhost:3000`

## ‍💻 Developer
- Made with ❤️ by [Tushar](https://github.com/tusharrr01)
- [LinkedIn](https://www.linkedin.com/in/tushar-kaklotar-175887283?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQbxiACx1SaWtiatjC34puA%3D%3D)

