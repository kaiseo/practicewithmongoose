const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why no name?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     rating: 5,
//     review: "good ones"
// });
// fruit.save();

const pineapple = new Fruit({
    name: "pineapple",
    rating: 10,
    review: "Sweet as they come"
});

// pineapple.save();

const mango = new Fruit({
    name: "mango",
    rating: 6,
    review: "Nicely fresh"
});

// mango.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 20,
    favoriteFruit: pineapple

});

Person.updateOne({name:"John"},{favoriteFruit:mango}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully updated");
    }
});

// person.save();

// Person.deleteMany({name:"John"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//      

//         console.log("Successfully deleted!");
//     }
// });

// Fruit.deleteOne({name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted!")
//     }
// })


// Update 

// Fruit.updateOne({_id:"628f2f261dfabfcd31ac97e9"},{name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully updated the document.");
//     }
// });


// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Delicious"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 3,
//     review: "Too bad"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 5,
//     review: "Great one"
// });

// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all the fruits to the fruitsDB")
//     }
// });


//select * from Fruit
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });

    }
});

Person.find(function (err, people) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close()

        people.forEach(function (person) {
            console.log(person.name);
        });
    }
}); 
