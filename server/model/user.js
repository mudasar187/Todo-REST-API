let mongoose = require('mongoose');

// Create the Schema
let User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


// Export the model
module.exports = {
    User
};