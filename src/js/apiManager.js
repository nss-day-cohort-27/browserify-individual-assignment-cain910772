
let forms = require("./forms")

const APIManager = Object.create(null, {
    savePlaceInfo: {
        value: (locationsInfo) => {
             return fetch("http://localhost:8088/locationsForm ", {
                method: "POST",
                body: JSON.stringify(locationsInfo),
                headers: {
                    "Content-Type": "application/json"
}})


                .then(res=>res.json())



                .then(res=>console.log("Success",res)
                )
        }

    },



    getAllLocations: {
        value: () => {
            return fetch(" http://localhost:8088/locationsForm")
            .then(r => r.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(` http://localhost:8088/locationsForm ${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager