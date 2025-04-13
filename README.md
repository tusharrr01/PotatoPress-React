# PotatoPress: A Scalable News Aggregation Platform
- Built with React · Powered by NewsAPI · Modern UI/UX

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GitHub last commit](https://img.shields.io/github/last-commit/tusharrr01/PotatoPress-React?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📌 Project Overview
- PotatoPress is a high-performance news aggregation web application that delivers real-time headlines from NewsAPI.org in a clean, responsive interface. Designed for optimal readability and navigation, it categorizes news into sections (Business, Technology, Sports, etc.) and dynamically filters content using React.

![Preview](Img/demo.jpg)

## 🛠 Technical Implementation
- **API Integration** :
  - Data Source: NewsAPI.org
  - Authentication: Secure API key management via .env
- **Performance Optimizations** :
  - Lazy loading components
  - Memoized API calls
  - Efficient re-rendering with React.memo

## ⚙ Setup & Deployment
- **Prerequisites** :
  - Node.js ≥ v16
  - NewsAPI Key (Get Yours Here)

- **Local Development** :
```bash 
#Clone the repository : 
git clone https://github.com/tusharr01/PotatoPress.git

# Navigate to project directory : 
cd PotatoPress

#Install dependencies :
npm install

#Configure environment variables-  :
echo "REACT_APP_NEWS_API_KEY = your_api_key #[ ex :- REACT_APP_NEWS_API_KEY=a78903f3a165d03f]" > .env

#Start the development server:
npm run start
```

## 👨‍💻 Developer
- Made with ❤️ by [Tushar](https://github.com/tusharrr01)
- [LinkedIn](https://www.linkedin.com/in/tushar-kaklotar-175887283?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQbxiACx1SaWtiatjC34puA%3D%3D)