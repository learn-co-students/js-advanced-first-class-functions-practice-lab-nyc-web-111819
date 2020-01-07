function logDriverNames(drivers) {
    drivers.forEach(element => console.log(element.name));
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function(element){
        if (element.hometown === hometown)
        console.log(element.name);
    })
}

function driversByRevenue(drivers){
    const newDrivers = drivers.slice()
     return newDrivers.sort(function (a, b) {
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    const newDrivers = drivers.slice()
     return newDrivers.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        };
    })
}

function totalRevenue(drivers) {
    const newDrivers = drivers.slice()
    let initialValue = 0
    let total = newDrivers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue
}, initialValue)
return total
}
  
function averageRevenue(drivers) {
   return totalRevenue(drivers) / drivers.length
}

