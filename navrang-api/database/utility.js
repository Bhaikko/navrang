const databaseParser = (array) => {
    if(typeof array == "string") {
        array = [array];
    }

    const newArray = array.map(current => current.get());
    return newArray;
}

module.exports = {
    databaseParser
}