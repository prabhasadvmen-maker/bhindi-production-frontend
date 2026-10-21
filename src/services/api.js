// API Service for backend communication
import { API_BASE_URL } from '../utils/constants';

export const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

export const authService = {
  login: (credentials) => apiClient('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData) => apiClient('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  getProfile: () => apiClient('/auth/profile'),
};
