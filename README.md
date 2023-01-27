# Employee-Tracker
  # MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description
   This application is built for manager for managing company's employees. Manager can view and manage the departments, roles, and employees. This application is created with node, inquirer, and MySQL.


* [Demo](#demo)
* [Technology](#technology)
* [Usage](#usage)
* [Features](#features)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)

# User Story 

  ```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

# Demo : 

For a video of how to use the application please follow this link [this link](https://www.awesomescreenshot.com/video/14338378?key=9c59ad587d1c3a4f404c97b2119ae9a0)


# Technology

This package requires you to have [Node.js](https://nodejs.org/en/download/), npm, Inquirer, [Express.js](https://expressjs.com/) and [MySQL2](https://www.npmjs.com/package/mysql2) installed on your machine. You can install these by running the code below on your terminal:

# Usage 

* Clone this repository to use this application on local machine.

* To install necessary dependencies, run the following command :

```
npm i
```

* The application will be invoked with the following command : 

```
node server.js

* After running above command, user is presented with series of options to manage employee databse.

For `Express.js`

```
npm i express
```

# Features 

1. MySql2 npm package is used to connect to database and perform queries.

2. Inquirer npm package is used to interact with the user via the command-line.

3. Asciiart-logo NPM package is used to add some visual flare to the main logo.

4. User can view all employees, employees by department, employees by manager.

5. User can add employee, add department, add role.

6. User can update employee role, employee manager.

7. User can remove employee.

8. User can view all departments, roles.

10. Created three tables - departments, roles and employees. These tables are connected with primary and foreign keys.

11. Included a `schema.sql` to hold databse schema and `seed.sql` file to pre-populate database. This makes development of individual features much easier.

# License

This project is licensed under MIT license.


# Contribution

Pull requests are always welcome!



# Contact
 If you have any questions please contact me Anastasia Markova at: anastasia19markova@gmail.com 
 For more projects please visit my GitHub : https://github.com/mriya20
