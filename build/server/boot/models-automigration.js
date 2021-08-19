"use strict";
module.exports = function (app) {
    console.log('-- Models found:', Object.keys(app.models));
    app.dataSources.Postgre.autoupdate(app.models, () => {
        console.log("Auto-migrated models successfully.");
    });
};
//# sourceMappingURL=models-automigration.js.map