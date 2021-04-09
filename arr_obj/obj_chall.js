let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bath",
            doors: 2,
            windows: 1,
            flooring: "tile",
            current_occupants: []

        },
        {
            name: "kitchen",
            doors: 1,
            windows: 2,
            flooring: "hardwood",
            current_occupants: []
        }],
    people: [
        {
            name: "Justin",
            age: 28,
        },
        {
            name: "Nellie",
            age: 32,
        }
    ]
}

//print out bath
console.log(house.rooms[1].name);

//return an array of all the room names
console.log(house.rooms.map(room => room.name));

//move Justin and Tony into the kitchen
console.log(house.rooms[2]);

house.rooms[2].current_occupants = house.people