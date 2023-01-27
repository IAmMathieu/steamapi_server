require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 1337;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

fetch(
  `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=76561198042858555`
)
  .then((response) => response.json())
  .then((data) => console.log(data.response.players));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
