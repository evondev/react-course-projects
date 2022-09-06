require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
let users = database.users;

const generateTokens = (payload) => {
  const { id, username } = payload;
  const accessToken = jwt.sign(
    { id, username },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "30s",
    }
  );
  const refreshToken = jwt.sign(
    { id, username },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { accessToken, refreshToken };
};
function updateRefreshToken(username, refreshToken) {
  users = users.map((user) => {
    if (user.username === username) {
      return {
        ...user,
        refreshToken,
      };
    }
    return user;
  });
  fs.writeFileSync("db.json", JSON.stringify({ ...database, users }));
}
app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = users.find((user) => {
    return user.username === username;
  });
  if (!user) return res.sendStatus(401);
  const tokens = generateTokens(user);

  updateRefreshToken(username, tokens.refreshToken);
  res.json(tokens);
});

app.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  const user = users.find((user) => {
    return user.refreshToken === refreshToken;
  });
  if (!user) return res.sendStatus(403);
  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const tokens = generateTokens(user);
    updateRefreshToken(user.username, tokens.refreshToken);
    res.json(tokens);
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  const user = users.find((user) => {
    return user.username === username;
  });
  if (user) return res.sendStatus(409);
  users.push({
    id: users.length + 1,
    username,
    password,
    email,
    refreshToken: null,
  });
  fs.writeFileSync("db.json", JSON.stringify({ ...database, users }));
  res.sendStatus(201);
});

app.delete("/logout", verifyToken, (req, res) => {
  const user = users.find((user) => user.id === req.userId);
  updateRefreshToken(user.username, "");
  res.sendStatus(204);
});

app.listen(5000, () => console.log("Server auth started on port 5000"));
