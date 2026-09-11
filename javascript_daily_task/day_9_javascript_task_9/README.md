# Array Repeated Elements

A simple JavaScript project that finds and displays repeated elements in an array.

## 📌 Project Description

This project uses nested `for` loops to compare each element in an array and identify duplicate values.

### Example Array

```javascript
const arr = [1, 2, 5, 2, 4, 5, 1, 6];
```

### Output

```text
2
5
1
```

The repeated elements in the array are:

* `1`
* `2`
* `5`

## 🛠️ Technologies Used

* HTML5
* JavaScript

## 📂 Project Structure

```text
project-folder/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

1. The program stores numbers in an array.
2. The outer loop selects each element.
3. The inner loop compares it with the remaining elements.
4. If two elements are equal, the repeated value is displayed.

## 💻 Code Logic

```javascript
const arr = [1, 2, 5, 2, 4, 5, 1, 6];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            document.write(arr[i]);
        }
    }
}
```

## 🚀 How to Run

1. Download or clone this project.
2. Open the `index.html` file in any web browser.
3. The repeated array elements will be displayed on the page.

## 📚 Learning Concepts

* JavaScript Arrays
* `for` Loops
* Nested Loops
* Conditional Statements
* Array Element Comparison


⭐ This project is part of my JavaScript Daily Task practice.
