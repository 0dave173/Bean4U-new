// --- SERVER CODE ---
const jwt = require('jsonwebtoken');

const secret = '69rke65z328mmuw7bjjk3f92afz599ap'; // Your chatbase secret key (should be stored as a secret not in the code)

const user = await getSignedInUser(); // Get the current user signed in to your site

const token = jwt.sign(
    { 
        user_id: user.id, // Your user's id
        email: "winklerdavid815@gmail.com", // User's email
        stripe_accounts: user.stripe_accounts, // User's stripe accounts for stripe integration
        // ... other custom attributes
    }, 
    secret, 
    { expiresIn: '1h' }
);

// --- CLIENT CODE ---
const token = await getUserToken(); // Get the token from your server
window.chatbase('identify', { token }); // identify the user with Chatbase
   