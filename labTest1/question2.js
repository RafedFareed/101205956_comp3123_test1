var delayedSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' }
        resolve(success)
    }, 500)
})

delayedSuccess
    .then((message) => console.log(message))
    .catch(() => console.log('fail'))


var delayedException = new Promise((resolve, reject) => {
    setTimeout(() => {
        let failure = { 'error': 'delayed exception!' }
        reject(failure)
    }, 500)
})

delayedException
    .then(() => console.log('fail'))
    .catch((message) => console.log(message))