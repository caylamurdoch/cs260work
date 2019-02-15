var mongoose = require('mongoose');

var ShoppingSchema = new mongoose.Schema({
    Name: String,
    price: { type: Number, default: 0.00 },
    ordered: { type: Number, default: 0 },
    url: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5-Uv5dpePSohE-KiJ8cw4Ll4F5S9JNOU4Ng6Gq37ZV66fgJV"
    }
});

ShoppingSchema.methods.order = function(cb) {
    this.ordered += 1;
    this.save(cb);
};

mongoose.model('Shopping', ShoppingSchema);
