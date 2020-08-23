const baseUrl = 'http://localhost:3050';

import axios from 'axios';

export const getAllCars = () => {
  return new Promise((resolve, _) => {
    axios.get(`${baseUrl}/api/cars/`).then((result) => {
      resolve(result.data);
    });
  });
};

export const getCarById = (id) => {
  return new Promise((resolve, _) => {
    axios.get(`${baseUrl}/api/cars/${id}`).then((result) => {
      resolve(result.data);
    });
  });
};

export const addCar = (car) => {
  return new Promise((resolve, _) => {
    axios.post(`${baseUrl}/api/cars/`, car).then((result) => {
      resolve(result.data);
    });
  });
};
