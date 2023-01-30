const iSteamUser = {
  async getPlayerSummaries(req, res) {
    const userSteamId = req.body.user_steam_id;
    const userDataFetch = await fetch(
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${userSteamId}`,
      { method: "GET" }
    );

    const userData = await userDataFetch.json();

    res.status(200).send(userData.response.players);
  },

  async getFriendList(req, res) {
    const userSteamId = req.body.user_steam_id;
    const relationship = req.body.relationship;
    const userFriendListFetch = await fetch(
      `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${userSteamId}&relationship=${relationship}`,
      { method: "GET" }
    );

    const userFriendListData = await userFriendListFetch.json();

    res.status(200).send(userFriendListData.friendslist);
  },
};

module.exports = iSteamUser;
