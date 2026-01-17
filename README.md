# UIU-UCAM-Course-Evaluation-Form

# Overview
This script helps automate the UCAM Course Evaluation process by automatically selecting the “Strongly Agree” radio buttons for all Theory and Lab questions. It reduces manual effort and speeds up form completion.

# Task
Automatically select the **Strongly Agree** option for all available course evaluation questions (Theory and Lab).

# Code
```
for (let i = 1; i <= 16; i++) {
    let theoryElem = document.getElementById('ctl00_MainContainer_rbtTheory' + i + '_0');
    let labElem = document.getElementById('ctl00_MainContainer_rbtLab' + i + '_0');

    if (theoryElem) {
        theoryElem.checked = true;
    } else if (labElem) {
        labElem.checked = true;
    }
}
```

# How to Use

1. Go to the **UCAM Course Evaluation** page.
2. Select the course.
3. Select the **Expected Grade**.
4. Right-click anywhere on the page and choose **Inspect**
   *(or press `Ctrl + Shift + I`)*
5. Open the **Console** tab.
6. Copy and paste the script into the console and press **Enter**.
7. Click the **Save** button.
8. Done :white_check_mark:
