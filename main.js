// · where should the return statement be, when you have complex IFs
// · calling the function?
// · calling the function inside a loop (using the two features together)
// · a function inside of an IF statement
// · calling a function in a function
// · USING what a function returns
// · TESTING what a function returns (to see if it meets our expectations)
// · an example of when you DON'T need a return
// · talk a bit about SCOPE

teaseCramer("just marshmallows and straws") // hoisting

function presentMorningMessage () {
    let dayOfTheWeek = new Date().getDay()
    let isMonday = dayOfTheWeek === 1
    let isTuesday = dayOfTheWeek === 2
    let isFriday = dayOfTheWeek === 5

    let message;
    if (isMonday) {
        message = `Good morning, Cramer! It is Monday!`
    } else if (isTuesday) {
        message = `It's Taco Tuesday, Cramer! Forget about your diet!`
    } else if (isFriday) {
        message = `TGIF! What do you need to wrap up for the week? And what are you planning for the weekend?`
    }

    return message
}

console.log(presentMorningMessage())

let toys = ["Legos", "Erector Set", "K'NEX", "Lincoln Logs", "Etch'a'Sketch", "Hot Wheels", "Bionicles", "GI JOE", "Polly Pocket"]

function teaseCramer (toy) {
    let message = "Cramer still plays with " + toy
    console.log(message)

    return message
}


for (let index = 0; index < toys.length; index += 1) {
    let currentToy = toys[index]
    teaseCramer(currentToy)
}

