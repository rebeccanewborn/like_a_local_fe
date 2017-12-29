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

export const postUserExcursion = (excursionOccurrenceId, userId) => {
  return fetch(`${baseURL}/user_excursions`, {
    method: "POST",
    body: JSON.stringify({
      excursion_occurrence_id: excursionOccurrenceId,
      user_id: userId
    }),
    headers
  }).then(res => res.json());
};

export const destroyUserExcursion = (excursionOccurrenceId, userId) => {
  return fetch(`${baseURL}/dropout`, {
    method: "DELETE",
    body: JSON.stringify({
      excursion_occurrence_id: excursionOccurrenceId,
      user_id: userId
    }),
    headers
  }).then(res => res.json());
};

export const postExcursionOccurrence = data => {
  return fetch(`${baseURL}/excursion_occurrences`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const destroyExcursionOccurrence = id => {
  return fetch(`${baseURL}/excursion_occurrences/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
};

export const addPhotos = data => {
  return fetch(`${baseURL}/photos`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};
