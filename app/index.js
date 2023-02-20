const express = require("express")
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require("./schema")
const graphqlResolvers = require("./resolvers")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)


const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

mongoose.connect('mongodb+srv://arianvsh:9248@cluster0.qpx7gd9.mongodb.net/comp3133_assignment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});

app.listen(3000, () => { console.log('Server is running...') });