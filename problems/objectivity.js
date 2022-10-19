//CalculateFuelBurned(segments)

//Audi
//7l/100km => road
//9l/100km => city

//Toyota
//7l/100km => road
//9l/100km => city


function getConsumptionByCar(car, terrain) {
    let consumption = 0;

    switch (car) {
        case "Audi":
            if (terrain== "road") consumption = 7;
            if (terrain== "city") consumption = 9;
            break;
        
        case "Toyota":
            if (terrain== "road") consumption = 6;
            if (terrain== "city") consumption = 8;
            break;
    
        default:
            break;
    }

    return consumption;
}


//returning fuel burnied in litres
function calculateFuelBurned(segments, car) {
    let total = 0;
    segments.forEach((segment) => {
        const consumption = getConsumptionByCar(car, segment.location);
        let perKilometer = consumption / 100;
        let usage = perKilometer * segment.distance;
        total += usage;
    });
    return total;
}

const segments = [
    {
        segment: 0,
        location: "road",
        distance: 49
    },
    {
        segment: 1,
        location: "city",
        distance: 18
    }];


console.log(calculateFuelBurned(segments, "Toyota"));

