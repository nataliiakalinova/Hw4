var Helpers = {};

Helpers.handlingGems = function (obj, callback) {

    for (var group in obj) {
        if (!obj.hasOwnProperty(group)) continue;

        callback(group, obj[group]);
    };
};

Helpers.getGroups = function (obj) {
    var groups = [];

    for (var group in obj) {
        if (!obj.hasOwnProperty(group)) continue;

        groups.push(group);
    };

    return groups;
};

module.exports = Helpers;
