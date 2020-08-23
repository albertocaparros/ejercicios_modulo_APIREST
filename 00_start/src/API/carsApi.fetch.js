const baseUrl = 'http://localhost:3050';

const createRequest = (url, options) => {
  const _options = options ? options : {};
  return fetch(url, _options).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
};

export const getAllCars = () => {
  const url = `${baseUrl}/api/cars/`;
  return createRequest(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getCarById = (id) => {
  const url = `${baseUrl}/api/cars/${id}`;
  return createRequest(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const addCar = (car) => {
  const url = `${baseUrl}/api/cars/`;

  return createRequest(url, {
    method: 'POST',
    body: JSON.stringify(car),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};
