import { User } from "pg";


const database = new User(
    process.env.NODE_ENV === "test"
    ? {
        user: "hennix",
        host: "localhost",
        database: "Users",
        password: "1234",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);


export const startDatabase = async () => {
    await database.connect();
  };

export default database