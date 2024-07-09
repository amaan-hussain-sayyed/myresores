class Collage {
    #stream = {}
    #fees = {}
    #history = []

    constructor(stream, fees) {
        this.stream = stream
        this.fees = fees
    }
    addmission(sdtDetails) {
        if (typeof (sdtDetails) != "object") {
            return { error: "provide error" }
        }

        if (typeof (sdtDetails.name) != "string") {
            return { error: "provide error" }
        }

        if (typeof (sdtDetails.contact) != "string") {
            return { error: "provide error" }
        }

        if (typeof (sdtDetails.address) != "string") {
            return { error: "provide error" }
        }


        if (typeof (sdtDetails.stream) != "string" || !this.#stream[sdtDetails.stream]) {
            this.stream
            
            console.log(this.#stream[sdtDetails.stream])
            return { error: "invalide" }
        }

        if (typeof (sdtDetails.fees) != "string") {
            return { error: "provide error" }
        }
        sdtDetails.fees = this.#fees[sdtDetails.stream]
        sdtDetails.id = this.#stream[sdtDetails.stream].length + 1
        sdtDetails.balnce = sdtDetails.fees - sdtDetails.feespaid

        this.#stream[sdtDetails.stream].push(sdtDetails)


        return { data: sdtDetails }
    }

}
let student = { name: "name", contact: "987654320", address: "kurla east", stream: "com", feespaid: 0 }
let stream = { com: [], sci: [], art: [] }
let fees = { com: 15000, sci: 13000, art: 9000 }
let collage = new Collage(stream, fees)
console.log(collage.addmission(student));
