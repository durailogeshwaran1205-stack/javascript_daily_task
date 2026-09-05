# Vote Eligibility Checker

A simple JavaScript program that checks whether a person is eligible to vote based on their age.

## Description

This project uses JavaScript `if`, `else if`, and `else` statements to determine the voting status of a person.

### Conditions

* Age below 18 → **Not eligible**
* Age from 18 to 64 → **Eligible**
* Age 65 or above → **Senior**

## Example

The current age is set to `19`, so the program displays:

```text
eligible
```

## Technologies Used

* HTML
* JavaScript

## How to Run

1. Download or clone this repository.
2. Open the HTML file in a web browser.
3. Change the `age` variable to test different ages.
4. Check the displayed result.

## Code

```javascript
var age = 19;

if (age < 18) {
    document.write("not eligible");
}
else if (age < 65) {
    document.write("eligible");
}
else {
    document.write("senior");
}
```


