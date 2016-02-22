Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: "403883384459-ng2i47vtl3nhhn9cn94g6lg1956o72ck.apps.googleusercontent.com",
            secret: "uCUvKI2W_JaplGCZbIKn2IKi",
            loginStyle: "popup"
        }
    }
);