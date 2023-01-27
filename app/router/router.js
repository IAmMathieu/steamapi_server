const express = require("express");
const routerWrapper = require("../middlewares/routerWrapper");
const handleError = require("../middlewares/handleError");
const APIError = require("../services/APIError");

const app = express();
const router = express.Router();

const iSteamUser = require("../controllers/iSteamUser");
const iSteamNews = require("../controllers/iSteamNews");
const iPlayerService = require("../controllers/iPlayerService");

router.get("/api/user/gps", routerWrapper(iSteamUser.getPlayerSummaries));
router.get("/api/user/friendlist", routerWrapper(iSteamUser.getFriendList));

router.get("/api/app/news", routerWrapper(iSteamNews.getNewsForApp));

router.get("/api/user/playedgames", routerWrapper(iPlayerService.getRecentlyPlayedGames))

router.use((req, _, next) => {
  throw new APIError("This url cannot be found", req.url, 404);
});
router.use(handleError);

module.exports = router;
