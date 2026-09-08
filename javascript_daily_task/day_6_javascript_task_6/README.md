# Factorial Program

This project contains a simple HTML and JavaScript program to calculate the factorial of a number.

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial</title>
</head>
<body>
    <script>
        var a = 1;

        for (let i = 1; i <= 5; i++) {
            a = a * i;
            document.write(a + "<br>");
        }
    </script>
</body>
</html>
```

## Output

The program calculates factorial values from 1 to 5:

```text
1
2
6
24
120
```

## Description

* `a` stores the factorial result.
* The loop runs from `1` to `5`.
* Each iteration multiplies `a` by the current value of `i`.
* The result is displayed in the browser.
