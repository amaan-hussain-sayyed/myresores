function firstFunction(number, callback) {
    setTimeout(function () {
        const result = number + 20;
        if (result >= 10) {
            console.log("first function", result)
            callback(null, result);
        } else {
            callback("Error in firstFunction: Result lessthen 10", null);
        }
    }, 1000);
}

function secondFunction(number, callback) {
    setTimeout(function () {
        const result = number - 10;
        if (result >= 20) {
            console.log("this is second function", result)
            callback(null, result);
        } else {
            callback("Error in secondFunction: Result is not less than 20", null);
        }
    }, 1000);
}

function thirdFunction(number, callback) {
    setTimeout(function () {
        const result = number * 2;
        if (result < 200) {
            console.log("this is third function", result)
            callback(null, result);
        } else {
            callback("the number is more the 200 ", null);
        }
    }, 1000);
}

function fourthFunction(number, callback) {
    setTimeout(function () {
        let result = number / 2
        if (number > 5) {
            console.log('this is fourth function', result)
            callback(null, `Fourth function completed with result: ${result}`);
        } else {
            callback("Error in fourthFunction: Number is not greater than 5", null);
        }
    }, 1000);
}

// Callback hell example with error handling and data passing
const initialNumber = 20;

firstFunction(initialNumber, function (error, data) {
    if (error) {
        console.error(error);
    } else {
        secondFunction(data, function (error, data) {
            if (error) {
                console.error(error);
            } else {
                thirdFunction(data, function (error, data) {
                    if (error) {
                        console.error(error);
                    } else {
                        fourthFunction(data, function (error, data) {
                            if (error) {
                                console.log(error)
                            } else {
                                console.log(data)
                            }
                        });
                    }
                });
            }
        });
    }
});
