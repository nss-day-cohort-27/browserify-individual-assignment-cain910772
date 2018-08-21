let APIManager =require("./apiManager")

console.log("uweycbweyuc");

const myDiv = document.createElement("div");
myDiv.setAttribute("class", "divClass");

makeNewList = (lists) =>{
    $("#listButton").click(function(){
        $("#form").toggle(),
        $("#listButton").toggle()
        makeNewList()
    })


APIManager.getAllLocations()
.then(result => {
    $("#myForm").append(JSON.parse(result))

    // let mappedItems = $( "li" ).map(function( index ) {
    //     var replacement = $( "<li>" ).text( $( this ).text() );


    })
}
module.exports = makeNewList










