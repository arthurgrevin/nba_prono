"use strict";
exports.teams = require("./data/teams.json");
exports.teamMap = {};
for (var _i = 0, teams_1 = exports.teams; _i < teams_1.length; _i++) {
    var team = teams_1[_i];
    exports.teamMap[team.key] = team;
}
//# sourceMappingURL=Team.js.map