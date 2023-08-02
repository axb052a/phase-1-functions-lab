// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    // HQ location variable set to 42 refering to 42nd street
    const hqLocation = 42;
    // Returns the numbers of blocks; using Math.abs with ensure to change negative values to positive
    return  Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return Math.abs(blocks * feetPerBlock);
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start);
    return distance * feetPerBlock;
    }

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) *264;
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return Math.abs((distance - 400) * .02); 
    }  else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
        }
    }
    