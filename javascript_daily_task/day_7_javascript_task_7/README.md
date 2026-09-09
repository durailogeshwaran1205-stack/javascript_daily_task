# Multiples of 3 and 7

This project contains a simple JavaScript program that finds numbers between **1 and 100** that are divisible by both **3 and 7**.

## Description

The program:

* Starts from `1`
* Checks numbers up to `100`
* Uses the modulo (`%`) operator to check divisibility
* Prints numbers divisible by both `3` and `7` in the browser console

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiples of 3 and 7</title>
</head>
<body>
    <script>
        var a = 1;
        var b = 100;

        for (let i = a; i <= b; i++) {
            if (i % 7 === 0 && i % 3 === 0) {
                console.log("This is 7 table and 3 table: " + i);
            }
        }
    </script>
</body>
</html>
```

## Output

The following numbers are divisible by both 3 and 7:

```text
21
42
63
84
```

## How to Run

1. Save the code in an `index.html` file.
2. Open the file in a web browser.
3. Open the browser Developer Tools.
4. Go to the **Console** tab to see the output.

.
