let a = "hhellllooworrldd!"

function correction(p) {
    let all = {

    }
    let correct = ""
    for (let i in p) {
        if (all[p[i]]) {
            all[p[i]] += 1
        }

        if (!all[p[i]]) {
            all[p[i]] = 1
        }
        if (all[p[i]] % 2 != 0 && all[p[i]]) {
            correct += [p[i]]
        }
        console.log(p[i + 1])
        if (p[i + 1] == "w") {
            correct += " "
        }

    }
    console.log(all)
    console.log(correct)
    return correct
}

correction(a)