db = db.getSiblingDB("agSchool")

// this first collection has a validator
db.createCollection("students", {
StudentValidator = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "First Name", "Last Name", "Address", "City", "Zip", "Phone" ],
    properties: { 
	  "First Name": {
        bsonType: "string",
        description: "First Name must exist and be a string"
      },
      "Last Name": {
        bsonType: "string",
        description: "Length must exist and be a string"
      },
      Address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip", "phone" ],
          properties: {
            // this is an optional property for extra street information (apartment number, etc)
            additional: {
              bsonType: "string",
              description: "must be a string if the field exists"
            },
            street: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            state: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            zip: {
              bsonType: "string",
              description: "must be a string and is reuired"
            },
			phone: {
          bsonType: "string",
          description: "must be a string and is required"
      }
    }
  }
})

// these collections _do not_ have validators
db.createCollection("teachers")
db.createCollection("subjects")

// adding some students to make sure that the validator runs correctly 
db.students.insertMany([
  {
    First Name: "Ahmed",
    Last Name: "Sherif",
    Address: {
      street: "123 Madeup Road",
      city: "Trenton",
      state: "NJ",
      zip: "08619"
	  phone: "6095555555"
    }
])
