// // Code your solution in this file!


const logDriverNames = function(drivers) {
  drivers.forEach (driver => console.log(driver.name))
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){ 
      console.log(driver.name)}
    })
  }

const driversByRevenue = function(drivers){
  let drive = [...drivers];
  drive.sort(function(a, b){ 
    return a.revenue - b.revenue;
  })
  return drive
}

const driversByName = function(driverObjects){
  let drivers = [...driverObjects];
    drivers.sort(function(a, b){
     return a.name.localeCompare(b.name);
  })
  return drivers;
}

const totalRevenue = function(driverObjects){
  let drivers = [...driverObjects]
  return drivers.reduce(function(sum, driver){
    return driver.revenue + sum}, 0);
}

const averageRevenue = function(driverObjects){
  let total = (totalRevenue(driverObjects) / driverObjects.length)
  return total;
  // let drivers = [...driverObjects];
  // return drivers.reduce(avg, driver){
  //   return driver.revenue 
}


// describe('index.js', function () {
//   const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue:   2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];


//   describe('averageRevenue()', function () {
//     it('calculates the average revenue across all drivers', function () {
//       expect(averageRevenue(drivers)).to.equal(3700);
//     });
//   });
// });
