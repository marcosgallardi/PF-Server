require("dotenv").config();

const {
  TYPE,
  PROYECT_ID,
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  CLIENT_EMAIL,
  CLIENT_ID,
  AUTH_URI,
  TOKEN_URI,
  AUTH_PROVIDER,
  CLIEN_CERT_URL,
  UNIVERSE_DOMAIN,
} = process.env;

const firebaseConfig = {
  type: TYPE,
  project_id: PROYECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: CLIENT_EMAIL,
  client_id: CLIENT_ID,
  auth_uri: AUTH_URI,
  token_uri: TOKEN_URI,
  auth_provider_x509_cert_url: AUTH_PROVIDER,
  client_x509_cert_url: CLIEN_CERT_URL,
  universe_domain: UNIVERSE_DOMAIN,
};

module.exports = firebaseConfig;
