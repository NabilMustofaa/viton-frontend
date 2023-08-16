const BASE_URL = 'https://contact-api.dicoding.dev/v1';
function getAccessToken() {
  return localStorage.getItem('accessToken')
}
 
function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}
 
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  });
}
 
async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  });
 
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }
 
  return { error: false, data: responseJson.data };
}
 
async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password}),
  });
 
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }
 
  return { error: false };
}
 
async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();
 
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
 
  return { error: false, data: responseJson.data };
}
//post form data with no-corss
async function postRekomendasi({input_image, style_image, id }) {

  
  const response = await fetch(`https://bangkit-c23-ps114.et.r.appspot.com/users/`+id+`/rekomendasi/base64`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input_image, style_image }),
  });

  const responseJson = await response.json();
  return responseJson;
}

async function getAllRekomendasi({id }) {

  
  const response = await fetch(`https://bangkit-c23-ps114.et.r.appspot.com/users/`+id+`/rekomendasi `, {
    method: 'GET',
});

  const responseJson = await response.json();
  return responseJson;
}

 
export { putAccessToken, login, register, getUserLogged, postRekomendasi , getAllRekomendasi};