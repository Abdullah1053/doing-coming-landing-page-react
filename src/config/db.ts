import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',               // update with your host
  user: 'postgres',                // update with your PostgreSQL username
  password: 'your_password',       // update with your PostgreSQL password
  database: 'your_database_name',  // update with your database name
  port: 5432                       // default PostgreSQL port
});

export default pool; 