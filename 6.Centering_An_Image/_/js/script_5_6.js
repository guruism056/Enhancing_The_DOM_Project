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

			//Set up overlay styles
			myOverlay.style.position = "absolute";
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
			myOverlay.style.cursor = "pointer";

			//Resize and Reposition overlay
			myOverlay.style.width = window.innerWidth + "px";
			myOverlay.style.height = window.innerHeight + "px";
			myOverlay.style.top = window.pageYOffset + "px";
			myOverlay.style.left = window.pageXOffset + "px";

			//Add the image inside the overlay
			var imgSrc = e.target.src;
			var largeImage = document.createElement("img");
			largeImage.id = "largeImage";
			largeImage.src = imgSrc.substr(0,imgSrc.length-7) + ".jpg";
			largeImage.style.display = "block";
			largeImage.style.position = "absolute";

			//Wait until the image has loaded
			largeImage.addEventListener("load",function()
			{
				//Resize if taller
				if(this.height > window.innerHeight)
				{
					this.ratio = window.innerHeight/this.height;
					this.height = this.height*this.ratio;
					this.width = this.width*this.ratio;
				}

				//Resize if wider
				if(this.width > window.innerWidth)
				{
					this.ratio = window.innerWidth/this.width;
					this.height = this.height*this.ratio;
					this.width = this.width*this.ratio;
				}

				centerImage(largeImage);
				myOverlay.appendChild(largeImage);
			});

		}
		
	},false);

	//Center the image
	function centerImage(theImage)
	{
		//Center on the window
		var DiffX = (window.innerWidth - theImage.width)/2;
		var DiffY = (window.innerHeight - theImage.height)/2;

		theImage.style.top = DiffY + "px";
		theImage.style.left = DiffX + "px";

		return theImage;
	}//center the image
}());