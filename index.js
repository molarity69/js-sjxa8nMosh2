const address = {
  street: 'Avenue 2',
  city: 'Los Angeles',
  zipCode: '33456',
};

const factoryAddress = (street, city, zipCode) => {
  return {
    street,
    city,
    zipCode,
  };
};

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const showAddress = (address) => {
  for (let key in address) console.log(`${key}: ${address[key]}`);
};

const constructorAddress1 = new Address('a', 'b', 'c');
const constructorAddress2 = new Address('a', 'b', 'c');
const constructorAddress3 = constructorAddress1;

const areEqual = (add1, add2) => {
  return (
    add1.street === add2.street &&
    add1.city === add2.city &&
    add1.zipCode === add2.zipCode
  );
};

const areSame = (add1, add2) => {
  return add1 === add2;
};

//////////////////////////////////////////////////////////////////////////////////

console.log('address:');
showAddress(address);
console.log('factoryAddress:');
showAddress(factoryAddress('Avenue 3', 'Los Santos', '22334'));
console.log('constructorAddress:');
showAddress(new Address('Avenue 5', 'Palermo', '11223'));
console.log(
  'areEqual(1,2): ',
  areEqual(constructorAddress1, constructorAddress2)
);
console.log('areSame(1,2)', areSame(constructorAddress1, constructorAddress2));
console.log('areSame(1,3)', areSame(constructorAddress1, constructorAddress3));
