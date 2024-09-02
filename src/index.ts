// import { Client } from 'pg'
 
// const client = new Client({
//   // connectionString: "postgresql://neondb_owner:PfeBncT3UDZ7@ep-calm-base-a5okxnqv.us-east-2.aws.neon.tech/neondb?sslmode=require"
//   connectionString:"postgresql://user_owner:jT4ysJGYIQ5a@ep-mute-cloud-a5aa4b9v.us-east-2.aws.neon.tech/user?sslmode=require"
// })


// async function createUsersTable() {
//   await client.connect()
//   const result = await client.query(`
//       CREATE TABLE users (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );
//   `)
//   console.log(result)
// }

// createUsersTable();

// import { Client } from 'pg';

// // Async function to fetch user data from the database given an email
// async function getUser(email: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'user_owner',
//         password: 'jT4ysJGYIQ5a',
//     });
    

//   try {
//     await client.connect(); // Ensure client connection is established
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const values = [email];
//     const result = await client.query(query, values);
    
//     if (result.rows.length > 0) {
//       console.log('User found:', result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log('No user found with the given email.');
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err; // Rethrow or handle error appropriately
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// getUser('user5@example.com').catch(console.error);


import { Client } from 'pg';

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'user',
        user: 'user_owner',
        password: 'PfeBncT3UDZ7',
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('user5@example.com').catch(console.error);