const twofactor = require("node-2fa")
const userKeys = new Map(require("@root/keys.json")) // We all love maps right?
const allowed = ["478313889986248705","247349845298249728","241599690280271872","646734319536177172"] // Loffs, alice, mwo, Mar
module.exports = {
    mfaNew(id) {
        if (!allowed.includes(id)) return {qr:"User not allowed to authenticate",secret:"User not allowed to authenticate",uri:"User not allowed to authenticate"}; // make sure not anyone can sign up
        const newSecret = twofactor.generateSecret({ name: "denorine 2fa", account: "Mod" }); //generate
        userKeys.set(id, newSecret.secret) // Add to the 2fa list
        return newSecret; // Return back the object with the QR
    },
    mfaAuthn(id, key) { // Declare Function to check keys
        if (!userKeys.has(id)) return false; // atleast fucking check if they are even ALLOWED to use the fucking FUNCTION for FUCKS SAKES
        return twofactor.verifyToken(userKeys.get(id), key); // do the 2fa check
    }
    
}