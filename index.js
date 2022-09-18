let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    console.log(i)
    console.log(weeklyExpenses[i])
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    //Convert string to number for calculations
    let numberAnswer = parseFloat(stringAnswer)
    // Add numberAnswer to expenses total variable 
    weeklyExpenses = weeklyExpenses + numberAnswer
}

//monthly expenses
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    console.log(i)
    console.log(monthlyExpenses[i])
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    //Convert string to number for calculations
    let numberAnswer = parseFloat(stringAnswer)
    // Add numberAnswer to expenses total variable 
    monthlyExpenses = monthlyExpenses + numberAnswer
}

//annual expenses
for (let i = 0; i < annualExpenseQuestions.length; i++) {
    console.log(i)
    console.log(annualExpenses[i])
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    //Convert string to number for calculations
    let numberAnswer = parseFloat(stringAnswer)
    // Add numberAnswer to expenses total variable 
    annualExpenses = annualExpenses + numberAnswer
}