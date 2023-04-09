const products = [
    { productTitle: "Galaxy s22 smartphone", productPrice: 1499.00 },
    { productTitle: "Iphone 13 Pro max", productPrice: 4229.00 },
    { productTitle: "Iphone 12 mini", productPrice: 1949.00 }
  ];


const numberArrays = [2, 4, 6, 8, 10, 12];
numberArrays.pop(); 
numberArrays.unshift(12); 



console.log(numberArrays)
console.log(products)


const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const mean = sum / numbers.length;

console.log(mean)

const phone = {
  phoneName: "iPhone 13",
  phoneDescription: "The latest iPhone model with advanced features and improved performance.",
  phonePrice: 999,
  shopAddresses: ["123 Main Street", "456 Broad Street", "789 High Street"],
  phoneMemoryInGB: 128
}

console.log(phone)
