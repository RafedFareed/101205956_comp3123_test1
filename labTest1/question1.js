const mixedArray = ['PIZZA', 10, true, 25, 'Wings']

var lowerCaseWords = new Promise((resolve, reject) => {
    result = ''
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] == 'string') {
            result += mixedArray[i].toLowerCase() + " "
        }
    }
    if (result) {
        resolve(result)
    } else {
        reject()
    }
})

lowerCaseWords
    .then((message) => console.log(message))
    .catch(() => console.log('fail'))