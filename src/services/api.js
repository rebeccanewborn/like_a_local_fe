const baseURL = "http://localhost:3000/api/v1";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const postNewUser = data => {
  return fetch(`${baseURL}/users`, {
    method: "POST",
    body: JSON.stringify({ user: data }),
    headers
  }).then(res => res.json());
};

export const postAuthSession = (email, password) => {
  let data = {
    email,
    password
  };
  return fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers
  }).then(res => res.json());
};

export const getAuthSession = token => {
  return fetch(`${baseURL}/login`, {
    headers: { ...headers, token }
  }).then(res => res.json());
};

export const fetchAllCities = () => {
  return fetch(`${baseURL}/cities`, { headers }).then(res => res.json());
};

export const showCity = id => {
  return fetch(`${baseURL}/cities/${id}`, { headers }).then(res => res.json());
};

export const postNewExcursion = data => {
  return fetch(`${baseURL}/excursions`, {
    method: "POST",
    body: JSON.stringify(data),
    headers
  }).then(res => res.json());
};

export const getExcursion = id => {
  return fetch(`${baseURL}/excursions/${id}`, { headers }).then(res =>
    res.json()
  );
};

export const destroyExcursion = id => {
  return fetch(`${baseURL}/excursions/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
};

export const postUserExcursion = (excursionId, userId) => {
  console.log("signing user", userId, "up for excursion", excursionId);
  return fetch(`${baseURL}/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify({ excursion_id: excursionId }),
    headers
  }).then(res => res.json());
};
