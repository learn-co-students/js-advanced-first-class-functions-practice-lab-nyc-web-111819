function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}
function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver){
        if(driver.hometown === location){
            console.log(driver.name)
        }
    })
}
function driversByRevenue(drivers){
    let drive = [...drivers]
    return drive.sort(function(a,b){return a.revenue-b.revenue})
}
function driversByName(drivers){
    let drive = [...drivers]
    return drive.sort(function(a,b){return a.name.localeCompare(b.name)})
}
function totalRevenue(drivers){
    let i = 0
    let count = 0
    for(i = 0; i < drivers.length; i++){
        count+= drivers[i].revenue
    }
    return count
}
function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length
}