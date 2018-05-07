import { db } from './firebase'

// User API

export const createPatient = (fullName, practiceName) =>
  db.ref(`patients`).push({
    fullName,
    practiceName,
  })

export const onceGetUsers = () =>
  db.ref('users').once('value')