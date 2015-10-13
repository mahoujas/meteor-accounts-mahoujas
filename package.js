Package.describe({
    name: "mahoujas:accounts-mahoujas",
    summary: "Login service for Mahoujas accounts",
    version: "1.1.0",
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('mahoujas:mahoujas@1.1.1', ['client', 'server']);

    api.addFiles('mahoujas_login_button.css', 'client');

    api.addFiles("mahoujas.js");
});
