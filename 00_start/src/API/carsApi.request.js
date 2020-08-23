const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
  let promise = new Promise((resolve, reject) => {
    const uri = `${baseUrl}/api/cars/`;
    const client = new XMLHttpRequest();
    client.onload = (event) => {
      resolve(JSON.parse(event.target.response));
    };
    client.onerror = (event) => reject(event.target.statusText);
    client.open('get', uri);
    client.send();
  });

  return promise;
};

export const getCarById = (id) => {
  let promise = new Promise((resolve, reject) => {
    const uri = `${baseUrl}/api/cars/${id}`;
    const client = new XMLHttpRequest();
    client.onload = (event) => {
      resolve(JSON.parse(event.target.response));
    };
    client.onerror = (event) => reject(event.target.statusText);
    client.open('get', uri);
    client.send();
  });

  return promise;
};

export const addCar = (car) => {
  let promise = new Promise((resolve, reject) => {
    const uri = `${baseUrl}/api/cars/`;
    const client = new XMLHttpRequest();
    client.onload = (event) => {
      resolve(JSON.parse(event.target.response));
    };
    client.onerror = (event) => reject(event.target.statusText);
    client.open('POST', uri);
    client.setRequestHeader('Content-type', 'application/json');
    client.send(JSON.stringify(car));
  });

  return promise;
};
