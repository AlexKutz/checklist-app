/* eslint-disable */
db = db.getSiblingDB('testing')

db.createCollection('users')

db.users.insertOne({
  username: 'test',
})
