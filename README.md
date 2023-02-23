# Welcome to Flight And Search Service

# Project Setup

- clone the project on your local machine

- Execute the 'npm install' on the same path as of your root directory of the
  downloaded project

- Create a '.env' file in the root directory of project and add the following
  environment variable

        - PORT = 3000

- Inside the 'src/config/' folder create a new file 'config.json' and add the
  following piece of JSON

  ```
  {
    "development": {
        "username": <your_db_name>,
        "password": <your_db_pass>,
        "database": "your_db_name",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
  "development": {
    "username": <your_db_name>,
    "password": <your_db_pass>,
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  }

  ```

- Once you 've added your db config as listed above , go to the src folder
  from your terminal and execute 'npx sequelize db:create'

# DB Design

- Airplane Table
- Fligth Table
- Airport Table
- City Table

# Tables

### City Table :- id , name , created_at , updated_at

### Airport Table :- id , name , address , city_id , created_at , updated_at

      Relationship =>  City has many airports but airports belong to a city only [ 1 to M ]
