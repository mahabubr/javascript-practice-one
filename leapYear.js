function leapYear(years) {
    if (years % 4 == 0 && years % 100 != 0 || years % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(leapYear(2024));
console.log(leapYear(2022));
console.log(leapYear(2018));