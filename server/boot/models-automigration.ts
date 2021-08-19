export = function (app: any) {
  
  console.log('-- Models found:', Object.keys(app.models));

  app.dataSources.Postgre.autoupdate(app.models, () => {
    console.log("Auto-migrated models successfully.");
  });

};