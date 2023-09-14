const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
const foodSchema = new mongoose.Schema({ name: { required: true, type: String }, rate: Number, review: String });
const food = mongoose.model('food', foodSchema);
const peopleSchema = new mongoose.Schema({ name: { type: String, required: true }, age: Number, review: String, favouriteFood: foodSchema });
const People = mongoose.model('people', peopleSchema);

const dhokla = new food({ name: "dhokla", rate: 4, review: "Nice,gujrati food." });
dhokla.save();

People.updateOne({ name: "John" }, { $set: { favouriteFood: dhokla } }).then(function() {
    mongoose.connection.close();
    console.log("Successfully:)");
});

// People.deleteMany({ name: "Varun" }).then(function() {
//     console.log("Successfully deleted.");
// })

// People.find({}).then(function(docs) {
//     docs.forEach(function(element) {
//         console.log(element.name);
//     })
// })
// People.find({}).then(function(docs) {
//     mongoose.connection.close();
//     console.log(docs);
// })
// People.updateOne({ name: 'Yartharth' }, { $set: { age: 12 } }).then(function() {
//     mongoose.connection.close();
//     console.log("Successfully updated");
// })