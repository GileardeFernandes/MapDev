module.exports =  (stringAsArray) => {
return stringAsArray.split(',').map(tech => tech.trim());
}
