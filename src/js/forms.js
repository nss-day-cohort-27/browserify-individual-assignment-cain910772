let APIManager =require("./apiManager")

const makeNewForm = (place) =>{
    const sendToDom = $("#form")
    sendToDom.append(

              `
           <div>
              <center> <h2 id="myH1">Enter Favorite Location</h2></center>
              </div>
              <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span  class="input-group-text" id="inputGroup-sizing-lg"></span>
              </div>
              <input id ="location"type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></center>
            </div>
        </div>
        <div>
        <center> <h2 id="myH12">Enter Location Type</h2></center>
        </div>
        <center>
        <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg"></span>
        </div>
        <input id ="locationType" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></center>
      </div>
  </div>
  <div>
  <center> <h2 id="myH1">Enter Description</h2></center>
  </div>
  <div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg"></span>
  </div>
  <input id ="review"type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></center>
</div>
<center><button id ="addPlace"type="button" class="btn btn-primary btn-lg">Submit Me!</button> </center>

         `
    )



    APIManager.getAllLocations()
    .then(result => {
        console.log(result);
        hookItUp(result);

    });


function hookItUp (places){
     $("#addPlace").click(function(){
         const newPlace = {
             location: document.querySelector("#location").value,
             locationType: document.querySelector("#locationType").value,
             review:document.querySelector("#review").value


         }

         $("#addPlace").click(function () {
          $("#location").val("");
        });
        $("#addPlace").click(function () {
          $("#locationType").val("");
        });
        $("#addPlace").click(function () {
          $("#review").val("");


APIManager.savePlaceInfo(newPlace)
console.log(newPlace);






  }
 )
     }

    )}
  }



console.log("hello");

module.exports = makeNewForm