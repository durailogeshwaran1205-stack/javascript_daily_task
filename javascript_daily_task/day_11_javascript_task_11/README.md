# Palrinom

A simple HTML and JavaScript program that reverses a string and displays the result on the webpage.

## Description

The program stores the string `"hello"` in a variable and uses a `for` loop to iterate through the string from the last character to the first character.

### Input

```text
hello
```

### Output

```text
olleh
```

## How It Works

1. The string `"hello"` is stored in the variable `val`.
2. The `for` loop starts from the last character using `val.length - 1`.
3. The loop moves backward one character at a time.
4. Each character is displayed using `document.write()`.

## Code

```html
<script>
    const val = "hello";

    for (let i = val.length - 1; i >= 0; i--) {
        document.write(val[i]);
    }
</script>
```

## Technologies Used

* HTML
* JavaScript

## How to Run

1. Save the HTML code as `index.html`.
2. Open `index.html` in a web browser.
3. The reversed string will be displayed on the page.

## Result

The program converts:

**hello → olleh**
