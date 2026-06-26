# Inventory Management System - Database Design

## Collections

### Users
- _id
- name
- email
- password
- role

### Products
- _id
- name
- category
- price
- stock
- supplier

### Suppliers
- _id
- name
- phone
- address

### Orders
- _id
- productId
- quantity
- customer
- date

### Relationships
- One Supplier → Many Products
- One Product → Many Orders