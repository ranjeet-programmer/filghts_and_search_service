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

  }

  ```

- Once the
