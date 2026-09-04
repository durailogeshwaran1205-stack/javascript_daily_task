# Even or Odd Number Checker

This is a simple HTML and JavaScript program that checks whether a number is **even or odd**.

## 📌 Description

The program uses the JavaScript **modulus (`%`) operator** to determine whether the given number is divisible by `2`.

* If the remainder is `0`, the number is **even**.
* Otherwise, the number is **odd**.

In this example, the value is `8`, so the output will be:

```text
this even8
```

## 💻 Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even or Odd</title>
</head>
<body>
    <script>
        var odd = 8;

        if (odd % 2 === 0) {
            document.write("this even " + odd);
        } else {
            document.write("this odd " + odd);
        }
    </script>
</body>
</html>
```

## 🧠 How It Works

The important part of the program is:

```javascript
if (odd % 2 === 0)
```

The `%` operator returns the remainder after division.

For example:

```text
8 % 2 = 0
```

Since the remainder is `0`, `8` is an even number.

For an odd number:

```text
7 % 2 = 1
```

Since the remainder is not `0`, `7` is an odd number.

## 🚀 How to Run

1. Create a file named `index.html`.
2. Copy the HTML code into the file.
3. Save the file.
4. Open `index.html` in a web browser.
5. The result will be displayed on the page.

## 📂 Project Structure

```text
even-odd-checker/
│
├── index.html
└── README.md
```

## 🛠️ Technologies Used

* HTML5
* JavaScript

## 📚 Concepts Covered

* JavaScript variables
* `if...else` statements
* Modulus (`%`) operator
* Comparison operator (`===`)
* `document.write()`

## 👨‍💻 Author

Created as a beginner JavaScript practice project.
