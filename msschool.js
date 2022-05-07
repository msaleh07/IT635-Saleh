
db = db.getSiblingDB("schooldb")

db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "address" ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        // we make use of MongoDBs ability to store nested objects
        address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip" ],
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
            }
          }
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})

db.createCollection("teachers")
db.createCollection("subjects")

// adding some students to make sure that the validator runs correctly 
db.students.insertMany([
  {
    First Name: "Ahmed",
    Last Name: "Sherif",
    Address: {
      street: "321 Main Street",
      city: "Paterson",
      state: "NJ",
      zip: "07505"
	  phone: "7895566554"
    },
	{
    name: "Yasser Mamdouh",
    Address: {
      street: "456 Max Drive",
      city: "Wayne",
      state: "NJ", 
      zip: "07054"
    },
    phone: "8327756546"
  }
])
