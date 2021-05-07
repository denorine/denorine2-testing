const twofactor = require("node-2fa")
const userKeys = new Map(require("@root/keys.json")) // We all love maps right?
module.exports = {
    mfaAuthn(id, key) { // Declare Function to check keys
        if (!userKeys.has(id)) return false; // atleast fucking check if they are even ALLOWED to use the fucking FUNCTION for FUCKS SAKES
        return twofactor.verifyToken(userKeys.get(id), key); // do the 2fa check
    }
    
}