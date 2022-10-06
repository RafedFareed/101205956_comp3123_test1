const fs = require("fs")

for (let i = 0; i < 10; i++) {
    fs.appendFile(`logs/log${[i]}.txt`, 'something', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`log${[i]}.txt`)
        }
    })
}

for (let i = 0; i < 10; i++) {
    if (fs.existsSync(`logs/log${[i]}.txt`)) {
        fs.unlinkSync(`logs/log${[i]}.txt`)
        console.log(`delete files...logs/log${[i]}.txt`)
    }else{
        console.log('error files not found')
    }
}

