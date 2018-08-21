let APIManager =require("./apiManager")

console.log("uweycbweyuc");



makeNewList = (lists) =>{
    $("#listButton").click(function(){
        alert("ecfwe")
        $("#form").toggle(),
        $("#listButton").toggle()
        makeNewList()
    })



APIManager.getAllLocations()
.then(result => {
    $("#myForm").append(JSON.stringify(result))

    // let mappedItems = $( "li" ).map(function( index ) {
    //     var replacement = $( "<li>" ).text( $( this ).text() );


    })
}
// )}







    module.exports = makeNewList