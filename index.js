function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  };
};

function logDriversByHometown(drivers, location) {
  const newArray = drivers.filter(function (driver) {
     return driver.hometown === location;
  });
  logDriverNames(newArray);
}

function driversByRevenue(drivers) {
  const newArray = drivers.slice(0);
  return newArray.sort(function (a, b) { return a.revenue - b.revenue; });
}

function driversByName(drivers) {
  const newArray = drivers.slice(0);
  
  return newArray.sort(function (a, b) { return (a.name).localeCompare(b.name); });
}

function totalRevenue(drivers) {
  return drivers.reduce(sumRevenue, 0);
}

function averageRevenue(drivers) {
  return (drivers.reduce(sumRevenue, 0))/drivers.length;
}

const sumRevenue = function(sum, el, i, arr) {
  return sum += el.revenue;
}


