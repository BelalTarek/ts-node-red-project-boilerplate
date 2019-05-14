require('dotenv').config()
module.exports = {
    uiPort: process.env.PORT || 3000,
    flowFile: 'flow.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "NODE_RED_SEC",
}