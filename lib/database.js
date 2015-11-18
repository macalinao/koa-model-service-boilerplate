import mongoose from 'mongoose'

import { database } from '../config/environment'
const { mongodbUri } = database

mongoose.connect(database.mongodbUri)

mongoose.connection.on('connected', () => {
  console.log(`MongoDB connection open at ${mongodbUri}`)
})

mongoose.connection.on('error', err => {
  throw `MongoDB connection error: ${err}`
})

mongoose.connection.on('disconnected', () => {
  console.error('mongo connection disconnected')
})

// ^C / kill -SIGINT
process.on('SIGINT', () =>
  mongoose.connection.close(() =>
    process.exit(0, () =>
      console.log('mongo connection disconnected through app termination')
    )
  )
)

export default mongoose.connection
