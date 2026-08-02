const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const maleAkanNames = [
  "Kwasi",   // Sunday
  "Kwadwo",  // Monday
  "Kwabena", // Tuesday
  "Kwaku",   // Wednesday
  "Yaw",     // Thursday
  "Kofi",    // Friday
  "Kwame"    // Saturday
];

const femaleAkanNames = [
  "Akosua",  // Sunday
  "Adwoa",   // Monday
  "Abenaa",  // Tuesday
  "Akua",    // Wednesday
  "Yaa",     // Thursday
  "Afua",    // Friday
  "Ama"      // Saturday
];

// DOM Elements
const akanForm = document.getElementById("formFormat");
const resultContainer = document.getElementById("resultContainer");
const resultName = document.getElementById("resultName");
const resultDetails = document.getElementById("resultDetails");
const resetBtn = document.getElementById("resetBtn");

/**
 * Validates day, month, year, and gender selections.
 * Displays an alert if any validation rule fails.
 */
function validateInputs(day, month, year, gender) {
  // Check empty values
  if (!day || !month || !year) {
    alert("Please fill in all birthday fields (Day, Month, and Year).");
    return false;
  }

  // Month validation (1 - 12)
  if (month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return false;
  }

  // Day validation (1 - 31)
  if (day < 1 || day > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return false;
  }

  // Handle month-specific maximum days (e.g., Feb, April, etc.)
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > daysInMonth) {
    alert(`Invalid date! The selected month only has ${daysInMonth} days.`);
    return false;
  }

  // Year validation
  if (year < 1800 || year > 2026) {
    alert("Please enter a realistic year between 1800 and 2026.");
    return false;
  }

  // Gender validation
  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  return true;
}

/**
 * Calculates the day of the week using the Akan project formula:
 * d = ((4CC - 2*CC - 1) + (45*YY) + (1026*(MM + 1)) + DD) mod 7
 */
function calculateDayOfWeek(day, month, year) {
  const yearString = year.toString().padStart(4, "0");
  const CC = parseInt(yearString.slice(0, 2), 10);
  const YY = parseInt(yearString.slice(2, 4), 10);
  const MM = parseInt(month, 10);
  const DD = parseInt(day, 10);

  // Core formula implementation
  let dayIndex = Math.floor(
    ( (4 * CC - 2 * CC - 1) + Math.floor(45 * YY / 4) + Math.floor(1026 * (MM + 1) / 10) + DD ) % 7
  );

  // Ensure positive modulus result in JavaScript
  if (dayIndex < 0) {
    dayIndex = (dayIndex + 7) % 7;
  }

  return dayIndex;
}

/**
 * Form Submit Handler
 */
formFormat.addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve form values
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  
  const genderElement = document.querySelector('input[name="gender"]:checked');
  const gender = genderElement ? genderElement.value : null;

  // Validate form
  if (!validateInputs(day, month, year, gender)) {
    return;
  }

  // Calculate day index
  const dayIndex = calculateDayOfWeek(day, month, year);
  const bornDay = daysOfWeek[dayIndex];

  // Retrieve matching Akan name
  let assignedName = "";
  if (gender === "male") {
    assignedName = maleAkanNames[dayIndex];
  } else if (gender === "female") {
    assignedName = femaleAkanNames[dayIndex];
  }

  // Display Output
  resultName.textContent = assignedName;
  resultDetails.textContent = `You were born on a ${bornDay}. In Ghanaian culture, your name is ${assignedName}!`;

  // UI state transition
  formFormat.style.display = "none";
  resultContainer.classList.remove("hidden");
});

/**
 * Reset Handler to reset inputs and transition back to form
 */
resetBtn.addEventListener("click", function () {
  formFormat.reset();
  resultContainer.classList.add("hidden");
  akanForm.style.display = "block";
});