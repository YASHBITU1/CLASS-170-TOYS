AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListner("markerFound",()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListner("markerLost",()=>{
            this.handleMarkerLost()
        })

    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"

        var ratingButton = document.getElementById("order-button")
        var summaryButton = document.getElementById("order-summary-button")

        ratingButton.addEventListener("click",()=>{
            swal({
               title:"THANKS FOR ORDER!!",
               text:"  ",
               timer:2000,
               button:false
            })
        })

        summaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
               title:"ORDER SUMMARY",
               text:"WORK IN PROGRESS",
            })
        })

    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})