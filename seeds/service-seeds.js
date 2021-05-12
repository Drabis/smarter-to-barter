const { Service } = require("../models");

const serviceData = [
  {
    name: "Cleaning",
    description: "I love to clean and I have a five star rating",
    points: 20,
    user_id: 1,
  },
  {
    name: "Cooking",
    description: "I love to cook and I have a five star rating",
    points: 20,
    user_id: 2,
  },
  {
    name: "Moving",
    description: "I love to move and I have a five star rating",
    points: 20,
    user_id: 3,
  },
  {
    name: "Skiing",
    description: "I love to ski and I have a five star rating",
    points: 20,
    user_id: 2,
  },
  {
    name: "Guitar",
    description: "I love to play guitar and I have a five star rating",
    points: 20,
    user_id: 3,
  },
];

const seedServices = () => Service.bulkCreate(serviceData);

module.exports = seedServices;
