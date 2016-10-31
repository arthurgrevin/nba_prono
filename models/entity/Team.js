"use strict";
exports.teams = require("./data/teams.json");
exports.teamMap = {};
for (var _i = 0, _a = exports.teams.teams; _i < _a.length; _i++) {
    var team = _a[_i];
    exports.teamMap[team.name] = team;
}
//# sourceMappingURL=Team.js.map