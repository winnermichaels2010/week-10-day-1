function getGrade(score) {
    if (score >= 60) {return "A"} 
    else if (score >= 60) {return "B"}
    else if (score >= 50) {return "c"}
    else {return "F"}
}


console.log(getGrade(85))
console.log(getGrade(62))
console.log(getGrade(45))