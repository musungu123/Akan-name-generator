# Akan-name-generator

## Description
The **Akan Name Generator** is a modern web application that calculates the day of the week a user was born and assigns them an authentic **Akan name** based on Ghanaian naming traditions. In Akan culture, children are given names corresponding to their day of birth and gender.

## Author Information
* **Author:** [Joyce Imbuhila Musungu]
* **GitHub Repository:** [https://github.com/musungu123/Akan-name-generator](https://github.com/musungu123/Akan-name-generator)

---

## BDD (Behavior-Driven Development)

| Behavior | Input Example | Expected Output |
| :--- | :--- | :--- |
| **User enters a valid date & gender** | Day: `15`, Month: `8`, Year: `1998`, Gender: `Male` | Displays name: **Kwame** (Born on Saturday) |
| **User submits with empty inputs** | Day: `""`, Month: `""`, Year: `""` | Alerts: *"Please fill in all birthday fields..."* |
| **User enters an invalid month** | Month: `13` | Alerts: *"Please enter a valid month between 1 and 12."* |
| **User enters an invalid day** | Day: `32` | Alerts: *"Please enter a valid day between 1 and 31."* |
| **User omits gender choice** | Day: `12`, Month: `5`, Year: `2001`, Gender: `None` | Alerts: *"Please select your gender."* |

---

## Technologies Used
* **HTML5:** Semantic structural layout
* **CSS3:** Custom properties, CSS grid/flexbox, glassmorphism UI, responsive design
* **JavaScript (ES6):** DOM manipulation, form validation, modulus algorithm math logic

---

## Setup & Installation Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/musungu123/Akan-name-generator.git](https://github.com/musungu123/Akan-name-generator.git)