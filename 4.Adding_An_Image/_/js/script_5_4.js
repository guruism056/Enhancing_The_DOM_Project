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

			//Set up Overlay Styles
			myOverlay.style.position = "absolute";
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
			myOverlay.style.cursor = "pointer";

			//Resize and reposition overlay
			myOverlay.style.width = window.innerWidth + "px";
			myOverlay.style.height = window.innerHeight + "px";
			myOverlay.style.top = window.pageYOffset + "px";
			myOverlay.style.left = window.pageXOffset + "px";

			//Add the image inside the overlay.
			var imgSrc = e.target.src;
			var largeImage = document.createElement("img");
			largeImage.id = "largeImage";
			largeImage.src = imgSrc.substr(0,imgSrc.length-7) + ".jpg";
			largeImage.style.display = "block";
			largeImage.style.position = "absolute";

			myOverlay.appendChild(largeImage);
		}
		
	},false);

	
}());