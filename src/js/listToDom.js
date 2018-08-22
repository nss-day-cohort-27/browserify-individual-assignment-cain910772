let APIManager =require("./apiManager")



const putOnDom = Object.create(null, {
    "myCards": {
        value: (myRes) => {
            return `<span>
            <div id ="tryMe"class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Location:${myRes.location}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Location Type:${myRes.locationType}</h6>
    <p class="card-text">Review: ${myRes.review} </p>
    <button id="workPls" >Delete</button>
  
    </span>

</div>`


        },
    "domLoop": {
        value: (result) => {
            for (let i = 0; i < result.length; i++) {
                const element = result[i]
                return putOnDom.myCards(element)


            }
        },
        "deleteMe":{
            value:(id)=>{
            document.getElementById("workPls").click(apiManager.deleteEntry(id))

        }
}}

}})

module.exports = putOnDom

//
//     $("#listButton").click(makeNewList)
// })

    // let mappedItems = $( "li" ).map(function( index ) {
    //     var replacement = $( "<li>" ).text( $( this ).text() );



