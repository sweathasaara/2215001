// src/apiClient.js
export function apiFetch(url, options = {}) {
  const token = localStorage.getItem('token');
  const headers = options.headers || {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  headers['Content-Type'] = 'application/json';

  return fetch(url, { ...options, headers }).then(res => res.json());
}

