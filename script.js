// Build a receipt "Conditional operator"
// Food: Food -> Hamburger ₱8, Lasagna ₱15, Steak ₱20
// Beverage: Beverage -> Water ₱0, Soda ₱3, Beer ₱5
// Subtotal: Cost of Food + Cost of Beverage
// Tax: 8% -> .08 * Subtotal
// Tip: 5% -> bad, 15% -> good, 20% -> excellent
// Example Bad Service -> .05 * Subtotal
// Final Bill: Subtotal + Tax + Tip

const food = "Lasagna";
const foodPrice = food === "Hamburger" ? 8 : food === "Lasagna" ? 15 : 20;

const beverage = "Water";
const beveragePrice = beverage === "Water" ? 0 : beverage === "Soda" ? 3 : 5;

const subtotal = foodPrice + beveragePrice;

const tax = .08 * subtotal;
const service = "good";
const tip = service === "bad" ? .05 * subtotal : service === "good" ? .15 * subtotal : .2 * subtotal;

const finalBill = subtotal + tax + tip;

console.log(`Food: ${food}: ₱${foodPrice}
Beverage: ${beverage}: ₱${beveragePrice}
Subtotal: ₱${subtotal}
Tax: ₱${tax}
Tip: ₱${tip}
Final Bill: ₱${finalBill}`);

// falsy values -> 0, "", undefined, null, NaN
// const num1 = Boolean(185);
// console.log(num1);
// console.log(typeof num1);
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean("Hi I am a string"));

// const num1 = 15 .toString();
// const num2 = String(15);
// const num3 = (15).toString();
// const num4 = Number("15");
// console.log(num1);
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof num4);
// const num1 = 15;
// const string1 = `My string number is ${num1}`;
// console.log(string1);




// const result = "15" + 5 - 25 / 5;
// console.log(result);


// const num1 = "14";
// const num2 = "7";
// // console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);


// const num1 = Math.round("135.998");
// console.log(num1);
// console.log(typeof num1);

// const num2 = 15;
// console.log(num2);
// console.log(typeof num2);

