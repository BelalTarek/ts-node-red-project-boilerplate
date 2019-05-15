require('dotenv').config()
module.exports = {
    uiPort: process.env.PORT,
    flowFile: 'flow.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    // disableEditor: true,
    adminAuth: {
        type: "credentials",
        users: [],
        default: {
            permissions: "read"
        }
    }
}
