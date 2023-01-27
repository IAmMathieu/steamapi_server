const iSteamNews = {
  async getNewsForApp(req, res) {
    const appSteamId = req.body.app_steam_id;
    const count = req.body.count || 3;
    const maxLength = req.body.maxLength || 300;

    const appNewsFetch = await fetch(
      `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appSteamId}&count=${count}&maxlength=${maxLength}&format=json`,
      { method: "GET" }
    );

    const appNews = await appNewsFetch.json();

    res.status(200).send(appNews);
  },
};

module.exports = iSteamNews;