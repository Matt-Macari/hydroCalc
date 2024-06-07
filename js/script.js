function hydroCalc() {
    let userWeight = document.getElementById('userWeight').value;
    let userExercise = document.getElementById('userExercise').value;
    let water1 = userWeight / 2;
    let water2 = 12 * (userExercise / 30);
    if (userExercise == 0) {
        document.getElementById("hydro").innerHTML = water1;
    }
    else
        document.getElementById("hydro").innerHTML = (water1 + water2);

};








// HTML <input type="text" id="myInput" /> 
// JavaScript const input = document.getElementById("myInput"); 
//const inputValue = input.value; console.log(inputValue);

// function hydroCalc(userWeight, userExercise) {
//     let water1 = userWeight / 2;
//     let water2 = 12 * (userExercise / 30);
//     if (userExercise == 0) {
//         console.log(water1);
//     }
//     else
//         console.log(water1 + water2);
// };
// hydroCalc(170, 30);