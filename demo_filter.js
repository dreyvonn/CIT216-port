//const filtered = ships.filter(el => el.manufacturer.toLowerCase().indexOf('corp') > -1);

const ships = [{
    manufacturer: "Corporation",
    name: "Sam"
}
               {
    manufacturer: "Notoration",
    name: "Jordan"
}]

function searchManufacturer(ships, query) {
    const filtered = ships.filter(el => el.manufacturer.toLowerCase().indexOf(query.toLowerCase()) > -1);
    return filtered;
}

console.log(searchManufacturer(ships,'corp'));