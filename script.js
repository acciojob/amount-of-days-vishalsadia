function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        // Leap year: divisible by 4 and not divisible by 100 or divisible by 400
        return 366;
    } else {
        // Non-leap year
        return 365;
    }
}

// // Examples
// console.log(daysOfAYear(2022)); // Output: 365
// console.log(daysOfAYear(2024)); // Output: 366
// console.log(daysOfAYear(1900)); // Output: 365
// console.log(daysOfAYear(2000)); // Output: 366
