# Factorial Program

This is a simple JavaScript program to calculate the factorial of a number using a `for` loop.

## Code

```javascript
var a = 5;
var factorial = 1;

for (let i = a; i >= 1; i--) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);
