//your JS code here. If required.
function manipulateArray() {
    // Initial Promise that resolves with an array after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then((arr) => {
        // First Transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = arr.filter(num => num % 2 === 0);
                document.getElementById("output").innerText = evens.join(",");
                resolve(evens);
            }, 1000);
        });
    })
    .then((evens) => {
        // Second Transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = evens.map(num => num * 2);
                document.getElementById("output").innerText = multiplied.join(",");
                resolve(multiplied);
            }, 2000);
        });
    });
}

// Run the function when the script loads
manipulateArray();


