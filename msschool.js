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
        address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip" ],
          properties: {
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
    name: "Ahmed Sherif",
    address: {
		additional: "apt F",
      street: "321 Main Street",
      city: "Paterson",
      state: "NJ",
      zip: "07505"
    },
	  phone: "7895566554"
    },
	{
    name: "Yasser Mamdouh",
    address: {
		additional: "2nd floor",
      street: "456 Max Drive",
      city: "Wayne",
      state: "NJ", 
      zip: "07054"
    },
    phone: "8327756546"
  }
])
