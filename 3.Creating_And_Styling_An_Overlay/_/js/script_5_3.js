(function()
{
	var myNode = document.querySelector("#artlist .pixgrid ul");

	myNode.addEventListener("click",function(e)
	{
		if(e.target.tagName === "IMG")
		{
			
			//Create Overlay
			var myOverlay = document.createElement("div");
			myOverlay.id = "overlay";
			document.body.appendChild(myOverlay);

			//Set Up overlay styles
			myOverlay.style.position = "absolute";
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
			myOverlay.style.cursor = "pointer";

			//Resize and Reposition the overlay
			myOverlay.style.width = window.innerWidth + "px";
			myOverlay.style.height = window.innerHeight + "px";
			myOverlay.style.top = window.pageYOffset + "px";
			myOverlay.style.left = window.pageXOffset + "px";
		}
		
	},false);

	//ALTERNATIVELY
	/*myNode.addEventListener("click", clickEvent,false);
	function clickEvent(e)
	{
		if(e.target.tagName === "IMG")
		{
			console.log(e);
		}
	}*/
}());