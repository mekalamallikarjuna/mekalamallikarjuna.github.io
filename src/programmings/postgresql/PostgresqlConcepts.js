import React from 'react';
import { Accordion } from 'react-bootstrap';

const PostgresqlConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Creating a Database</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create a new database in PostgreSQL, use the <code>CREATE DATABASE</code> statement.
          </p>
          <pre>
            {`CREATE DATABASE my_database;`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Creating a Table</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create a table within a database, use the <code>CREATE TABLE</code> statement.
          </p>
          <pre>
            {`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Inserting Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To insert data into a table, use the <code>INSERT INTO</code> statement.
          </p>
          <pre>
            {`INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Querying Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To retrieve data from a table, use the <code>SELECT</code> statement.
          </p>
          <pre>
            {`SELECT * FROM users;`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Updating Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To update existing data in a table, use the <code>UPDATE</code> statement.
          </p>
          <pre>
            {`UPDATE users SET email = 'new.email@example.com' WHERE name = 'John Doe';`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Deleting Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To delete data from a table, use the <code>DELETE</code> statement.
          </p>
          <pre>
            {`DELETE FROM users WHERE name = 'John Doe';`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>Joining Tables</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To combine rows from two or more tables, use the <code>JOIN</code> statement.
          </p>
          <pre>
            {`SELECT users.name, orders.product_name
FROM users
JOIN orders ON users.id = orders.user_id;`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header><b>Creating an Index</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create an index on a table, use the <code>CREATE INDEX</code> statement.
          </p>
          <pre>
            {`CREATE INDEX idx_name ON users (name);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header><b>Creating a View</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create a virtual table based on the result-set of a query, use the <code>CREATE VIEW</code> statement.
          </p>
          <pre>
            {`CREATE VIEW user_emails AS
SELECT name, email FROM users;`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header><b>Stored Procedures</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create a stored procedure, use the <code>CREATE FUNCTION</code> statement.
          </p>
          <pre>
            {`CREATE FUNCTION GetUserEmail(user_id INT) RETURNS TEXT AS $$
BEGIN
  RETURN (SELECT email FROM users WHERE id = user_id);
END;
$$ LANGUAGE plpgsql;`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PostgresqlConcepts;
