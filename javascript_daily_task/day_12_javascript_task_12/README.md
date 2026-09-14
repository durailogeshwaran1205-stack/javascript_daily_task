# Number Digit – Sum of Digits

This project is a simple **JavaScript program** that calculates the sum of all digits in a number.

## Description

The program takes a number, extracts each digit one by one, and adds the digits together.

For example:

```text
12345
```

The sum of its digits is:

```text
1 + 2 + 3 + 4 + 5 = 15
```

## How It Works

The program uses a `while` loop to process each digit:

1. `num % 10` gets the last digit of the number.
2. The last digit is added to `sum`.
3. `Math.floor(num / 10)` removes the last digit.
4. The loop continues until the number becomes `0`.
5. The final sum is printed to the browser console.

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Digit</title>
</head>
<body>
    <script>
        let num = 12345;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        console.log(sum); // 15
    </script>
</body>
</html>
```

## Example

### Input

```text
12345
```

### Calculation

```text
1 + 2 + 3 + 4 + 5 = 15
```

### Output

```text
15
```

The result is displayed in the **browser's developer console**.

## Technologies Used

* HTML5
* JavaScript

## How to Run

1. Save the code as `index.html`.
2. Open the file in a web browser.
3. Open **Developer Tools** (`F12` or `Ctrl + Shift + I`).
4. Go to the **Console** tab.
5. The sum of the digits will be displayed.

## Purpose

This project demonstrates:

* JavaScript variables
* `while` loops
* Modulus operator (`%`)
* `Math.floor()`
* Arithmetic operations
* Working with individual digits of a number
* Using `console.log()` for output
