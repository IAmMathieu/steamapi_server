const iPlayerService = {
  async getRecentlyPlayedGames(req, res) {
    const userSteamId = req.body.user_steam_id;
    const gamesCount = req.body.games_count || 10;
    
    const playedGamesFetch = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${userSteamId}&count=${gamesCount}&format=json`);

    const playedGamesData = await playedGamesFetch.json();

    res.status(200).send(playedGamesData.response);
  },
};

module.exports = iPlayerService;