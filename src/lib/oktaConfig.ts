export const oktaConfig = {
    clientId: '0oaa5f44vt7FNaf5P5d7',
    issuer: 'https://dev-42690584.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}