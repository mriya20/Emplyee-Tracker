USE Employees_traceker_db;

INSERT INTO departments (name)
VALUES ('Sales'),
       ('IT'),
       ('Finance'),
       ('Marketing');



INSERT INTO roles (title, salary, department_id )
VALUES ('CEO', 200, 1),
        ('Sofware Engineer', 130, 2),
        ('CFO', 120, 3),
        ('Director of Marketing', 140, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Anastasia', 'Markova', 1, NULL),
    ('Angelina', 'Smith',3, NULL),
    ('Oliver', 'Brown', 2, NULL),
    ('Tony', 'Richardson', 4, NULL)