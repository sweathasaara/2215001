let token = null;
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjE1MDAxQG5lYy5lZHUuaW4iLCJleHAiOjE3NTU2Njc5ODEsImlhdCI6MTc1NTY2NzA4MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjcyODUzMTRjLTFlZDQtNGQxZS1hYmJiLTVhYWY0MDAyOTk1NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhcmF0aGEgbSIsInN1YiI6IjNmZDhjZTdlLWIyZWYtNGUzMC1iNzJiLTBkMDBiYmZlOGE0NiJ9LCJlbWFpbCI6IjIyMTUwMDFAbmVjLmVkdS5pbiIsIm5hbWUiOiJzYXJhdGhhIG0iLCJyb2xsTm8iOiIyMjE1MDAxIiwiYWNjZXNzQ29kZSI6InhzWlRUbiIsImNsaWVudElEIjoiM2ZkOGNlN2UtYjJlZi00ZTMwLWI3MmItMGQwMGJiZmU4YTQ2IiwiY2xpZW50U2VjcmV0Ijoia1hYQnhVWVpXcWNxZGRYSyJ9.YABwxIh4L1KwVZsArp3qLeB59uBgx7x-SpD2wxupOu0');

export async function authenticate() {
  const response = await fetch('http://20.244.56.144/test/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        companyNmae:"geoMart",
  email: "2215001@nec.edu.in",
  name: "saratha m",
  rollNo: "2215001",
  accessCode: "xsZTTn",
  clientID: "3fd8ce7e-b2ef-4e30-b72b-0d00bbfe8a46",
  clientSecret: "kXXBxUYZWqcqddXK"
}

      )
  });
  const data = await response.json();
  token = data.token;
  return token;
}

export function getToken() {
  return token;
}
