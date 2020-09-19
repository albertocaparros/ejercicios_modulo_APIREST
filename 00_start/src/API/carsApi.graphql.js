import { graphQLClient } from './graphql.client';

const query = `
  query {
    cars {
      car_id,
      name,
      brand,
      year_release
    }
  }`;

export const getAllCars = () => {
  return new Promise((resolve, _) => {
    graphQLClient.request(query).then((response) => {
      resolve(response.cars);
    });
  });
};

export const getCarById = (id) => {
  const queryId = `query {
        car(car_id: ${id}) {
          car_id,
          name,
          brand,
          year_release
        }
      }`;

  return new Promise((resolve, _) => {
    graphQLClient.request(queryId).then((response) => {
      resolve(response.car);
    });
  });
};

export const addCar = (car) => {
  const queryAdd = `mutation{
        saveCar(carAdd: {        
              name: "${car.name}",
              brand: "${car.brand}",
              year_release: "${car.year_release}"
        })
      }`;

  return new Promise((resolve, _) => {
    graphQLClient.request(queryAdd, car).then((response) => {
      if (response.saveCar) resolve(response.car);
    });
  });
};
