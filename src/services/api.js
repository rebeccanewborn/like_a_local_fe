const baseURL = "http://localhost:3000/api/v1";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const postLogin = (email, password) => {
  let data = {
    email,
    password
  };
  return fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers
  });
};
