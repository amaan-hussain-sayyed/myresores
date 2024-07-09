let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

async function highsa(list) {
    return new Promise((resolve, reject) => {
        let hih = 0
        for (let i of list) {
            if (i > hih) {
                hih = i
            }
        }
        if (!hih || hih <= 0) {
            reject(undefined)
        }
        resolve(hih)
    })
}
async function high(c) {
    let b = await highsa(c).catch((err) => {
        return { err }
    })

    if (b.err) {
        return { error: err }
    }

    return b
}


