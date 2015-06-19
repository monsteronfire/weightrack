ServiceConfiguration.configurations.remove({
	service: 'google'
});

ServiceConfiguration.configurations.insert({
	service: "google",
	clientId: "132267231302-53dfg42karpot94acmem51k3ql71infk.apps.googleusercontent.com",
	secret: "gGgGDSmt4UZZdEiOtQU7y8Hh"
});

// first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "google"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "google",
//   clientId: "yourClientId",
//   secret: "yourSecret"
// });