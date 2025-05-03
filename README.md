#  Restaurant Management System

 **Restaurant Management System** built with **Node.js**, **Express**, and **MongoDB**, featuring authentication , role-based access control, and input validation using **Joi**.

## Features

- **Client Authentication**: Clients can register and log in. Upon login, a **JWT token** is issued and required for all protected routes.
- **Employee Access**: Employees have their own route and must be logged in. Their roles (e.g., waiter, secretary) are verified during registration.
- **Admin Authorization**: Admins have special access to sensitive routes:
  - Create new employees
  - Delete clients
  - Delete items
- **Input Validation**: All data is validated using **Joi**.
- **Configuration Management**: App settings are managed using the **config** module.

## Roles

- `admin`: Full access to all routes and operations.
- `waiter`, `secretary`, etc.: Limited access based on login and role assignment.

##  Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (jsonwebtoken)**
- **Joi** – input validation
- **bcrypt** – password hashing
- **config** – for managing different environment configs

##  How It Works

1. **Clients:**
   - Register via `/clients/register` to receive a token
   - Login via `/clients/login` to receive a token
   - Use token to access protected routes (e.g., `/clients/items`)

2. **Employees:**
   - Register via `/employees/register` with a valid `roleId`
   - Login and access employee-specific routes like editingItems,viewing clients
   - Admins can manage employees and sensitive resources and can access added routes like deleting employee, deleting items and creating new employee

3. **Authorization:**
   - JWT token must be included in `Authorization` header as `Bearer <token>`
   - Middleware checks token and role for access control

N.B Authentication and Authorization are ensured and before saving password in database we hash them.There is no plaintext of password in database.

