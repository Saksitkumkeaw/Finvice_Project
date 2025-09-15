const express = require("express");
const sql = require("mssql");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: true,
  },
};

app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    let pool = await sql.connect(dbConfig);
    await pool.request()
      .input("name", sql.NVarChar, name)
      .input("email", sql.NVarChar, email)
      .query("INSERT INTO Users (name, email, created_at) VALUES (@name, @email, GETDATE())");

    res.json({ message: "User saved to SQL Server" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on port ${process.env.PORT}`)
);