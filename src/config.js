// API Configuration
export const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
export const NEWS_ENDPOINT = `${API_BASE_URL}/api/news/top-headlines`;
