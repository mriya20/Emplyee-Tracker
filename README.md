# Employee-Tracker
  # MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description
   This application is built for manager for managing company's employees. Manager can view and manage the departments, roles, and employees. This application is created with node, inquirer, and MySQL.


* [Demo](#demo)
* [Technology](#technology)
* [Usage](#usage)
* [Installation](#Installation)
* [License](#license)
* [Contribution](#contribution)
* [Contact](#contact)

# User Story 

  ```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

# Demo : 

For a video of how to use the application please follow this link [this link](https://www.awesomescreenshot.com/video/14338687?key=a8b5794d3322578eee3fd7fb4dfb0027)


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

## Installation

* MySql2 npm package is used to connect to database and perform queries.

* Inquirer npm package is used to interact with the user via the command-line.

* Asciiart-logo NPM package is used to add some visual flare to the main logo.

* User can view all employees, employees by department, employees by manager.

* User can add employee, add department, add role.

* User can update employee role, employee manager.

* User can remove employee.

* User can view all departments, roles.

* Created three tables - departments, roles and employees. These tables are connected with primary and foreign keys.

* Included a `schema.sql` to hold databse schema and `seed.sql` file to pre-populate database. This makes development of individual features much easier.

## License

This project is licensed under MIT license.


## Contribution

Pull requests are always welcome!


## Contact
 If you have any questions please contact me Anastasia Markova at: anastasia19markova@gmail.com 
 For more projects please visit my GitHub : https://github.com/mriya20
