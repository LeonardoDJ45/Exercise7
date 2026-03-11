// Function to print a staircase
function printStaircase(n) {

    for (let i = 1; i <= n; i++) {
        let step = "";

        for (let j = 1; j <= i; j++) {
            step += "#";
        }

        console.log(step);
    }

}

// Call the function
printStaircase(5);