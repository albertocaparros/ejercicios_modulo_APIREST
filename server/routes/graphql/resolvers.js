const express = require('express');
const fs = require('fs');
const path = require('path');
const dataFile = '/../data/cars.json';
const router = express.Router();

const getCarData = () =>
  JSON.parse(fs.readFileSync(path.join(__dirname + dataFile), 'utf8'));

const saveCarData = (data) =>
  fs.writeFile(
    path.join(__dirname + dataFile),
    JSON.stringify(data, null, 4),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

const getNextAvailableId = (allCars) => {
  const carIds = allCars.map((c) => c.car_id);
  const maxValue = Math.max(...carIds);
  return maxValue + 1;
};

const resolvers = {
  Query: {
    cars: async () => {
      const cars = await getCarData();
      return cars;
    },
    car: async (parents, args) => {
      const cars = await getCarData();
      return cars.find((car) => {
        return car.car_id === args.car_id;
      });
    },
  },
  Mutation: {
    saveCar: async (parent, args) => {
      const data = getCarData();
      const nextId = getNextAvailableId(data);
      const newCar = {
        car_id: nextId,
        name: args.carAdd.name,
        brand: args.carAdd.brand,
        year_release: args.carAdd.year_release,
      };
      data.push(newCar);

      try {
        saveCarData(data);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

module.exports = resolvers;
