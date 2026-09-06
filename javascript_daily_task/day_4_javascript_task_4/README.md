# Student Marks and Grade Calculator

A simple JavaScript project that calculates the **total marks**, **average percentage**, and **grade** based on marks obtained in five subjects.

## 📌 Project Description

This program calculates marks for the following subjects:

* Python
* JavaScript
* React
* Django
* Tailwind CSS

The program then:

1. Calculates the total marks.
2. Calculates the average percentage.
3. Assigns a grade based on the percentage.

## 💻 Source Code

        var python = 97;
        var javascript = 70;
        var react = 80;
        var django = 98;
        var tailwind = 70;

        var sub = python + javascript + react + django + tailwind;

        document.write("Total Subject Mark: " + sub);

        var mark = sub / 500 * 100;

        document.write("<br>Average: " + mark + "%");

        if (mark >= 90) {
            document.write("<br>Grade: O");
        }
        else if (mark >= 80) {
            document.write("<br>Grade: A+");
        }
        else if (mark >= 70) {
            document.write("<br>Grade: B+");
        }
        else if (mark >= 60) {
            document.write("<br>Grade: B");
        }
        else {
            document.write("<br>Grade: Fail");
        }


## 📊 Marks Details

| Subject      |   Marks |
| ------------ | ------: |
| Python       |      97 |
| JavaScript   |      70 |
| React        |      80 |
| Django       |      98 |
| Tailwind CSS |      70 |
| **Total**    | **415** |

## 📈 Grade System

| Percentage   | Grade |
| ------------ | ----- |
| 90 and above | O     |
| 80 - 89      | A+    |
| 70 - 79      | B+    |
| 60 - 69      | B     |
| Below 60     | Fail  |

## 🧮 Calculation

```text
Total Marks = Python + JavaScript + React + Django + Tailwind
```

```text
Average Percentage = (Total Marks / 500) × 100
```

### Example Output

```text
Total Subject Mark: 415
Average: 83%
Grade: A+
```

## 🚀 How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open the `index.html` file in any web browser.
4. The total marks, average, and grade will be displayed.

## 📂 Project Structure

```text
student-grade-calculator/
│
├── index.html
└── README.md
```

## 🛠️ Technologies Used

* HTML5
* JavaScript

## 📚 Concepts Used

* JavaScript Variables
* Arithmetic Operators
* `if...else if...else`
* Conditional Statements
* Percentage Calculation
* `document.write()`


