const express = require("express");
const routerWrapper = require("../middlewares/routerWrapper");
const handleError = require("../middlewares/handleError");
const APIError = require("../services/APIError");

const app = express();
const router = express.Router();

const iSteamUser = require("../controllers/iSteamUser");
const iSteamNews = require("../controllers/iSteamNews");
const iPlayerService = require("../controllers/iPlayerService");
const iSteamUserStats = require("../controllers/iSteamUserStats");

router.get("/api/user/gps", routerWrapper(iSteamUser.getPlayerSummaries));
router.get("/api/user/friendlist", routerWrapper(iSteamUser.getFriendList));

router.get("/api/app/news", routerWrapper(iSteamNews.getNewsForApp));
router.get(
  "/api/app/stats",
  routerWrapper(iSteamUserStats.getGlobalAchievementPercentagesForApp)
);

router.get(
  "/api/user/playedgames",
  routerWrapper(iPlayerService.getRecentlyPlayedGames)
);
router.get(
  "/api/user/achievements",
  routerWrapper(iSteamUserStats.getPlayerAchievements)
);
router.get(
  "/api/user/achievements/game",
  routerWrapper(iSteamUserStats.getUserStatsForGame)
);

router.use((req, _, next) => {
  throw new APIError("This url cannot be found", req.url, 404);
});
router.use(handleError);

module.exports = router;
