const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Query {
    employees: [Employee!]
    users: [User!]
    searchAllEmployees: [Employee!]
    searchEmployeeById(id: ID!): Employee
  }
  
  type Mutation {
    addEmployee(employee:EmployeeInput): Employee
    addUser(user:UserInput): User
    updateEmployee(employee: EmployeeInput!, id: ID!): Employee!
    deleteEmployee(id: ID!): String!
    login(username: String!, password: String!): String!
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  `)


