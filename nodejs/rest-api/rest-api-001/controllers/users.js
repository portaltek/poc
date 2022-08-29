import { v4 as uuidv4 } from "uuid";

export const createUser = (req, res) => {
  const userReq = req.body;
  const user = { _id: uuidv4(), ...userReq };
  users.push(user);
  console.log(`User added : ${user}`);
  console.log(`Total users: ` + users.length);
  res.send(user);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user._id === id);
  console.log(foundUser);
  res.send(foundUser);
};

export const getUsers = (_req, res) => {
  res.send(users);
  console.log(users);
  console.log(`Total users: ` + users.length);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user._id !== id);
  console.log(users);
  res.send(users);
  console.log(`Total users: ` + users.length);
};

export const patchUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((u) => u._id === id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  console.log(users);
  res.send(users);
  console.log(`Total users: ` + users.length);
};

let users = [
  {
    _id: "bef03a14-622c-4b93-a283-0b269e4be59e",
    firstName: "Johnny",
    lastName: "Doe",
    age: 10,
  },
  {
    _id: "d2d032a9-654b-4214-aa3c-a3eeb841342c",
    firstName: "Johnny",
    lastName: "Doe",
    age: 10,
  },
  {
    _id: "43536ffb-0485-4cfe-b61d-7d254c908aa3",
    firstName: "Johnny",
    lastName: "Doe",
    age: 10,
  },
  {
    _id: "cee54b64-a3c6-43e5-b3dc-e98acd449fe1",
    firstName: "Johnny",
    lastName: "Doe",
    age: 10,
  },
  {
    _id: "7b4a4e55-170c-4809-9461-4a3fe96f53df",
    firstName: "Johnny",
    lastName: "Doe",
    age: 10,
  },
];
