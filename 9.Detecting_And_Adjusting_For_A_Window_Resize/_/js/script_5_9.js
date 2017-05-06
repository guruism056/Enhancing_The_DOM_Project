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



			//REMOVES THE IMAGE WHEN CLICKED ANYWHERE IN THE BODY
			var node = document.querySelector("#overlay");
			node.addEventListener("click",function()
			{
				if(myOverlay)
				{
					window.removeEventListener("scroll",window,false);
					window.removeEventListener("resize",window,false);
					myOverlay.parentNode.removeChild(myOverlay);
				}
			},false);

			

			//THIS WOULD REMOVE THE IMAGE WHEN CLICKED ON THE IMAGE 
			/*largeImage.addEventListener("click",function()
			{
				if(myOverlay)
				{
					window.removeEventListener("scroll",window,false);
					window.removeEventListener("resize",window,false);
					myOverlay.parentNode.removeChild(myOverlay);
				}
			},false);
			*/

			//listen for scroll
			window.addEventListener("scroll",function()
			{
				if(myOverlay)
				{
					myOverlay.style.top = window.pageYOffset+"px";
					myOverlay.style.left = window.pageXOffset+"px";
				}//overlay exists
			},false);

			//Listen for resize
			window.addEventListener("resize",function()
			{
				if(myOverlay)
				{
					myOverlay.style.width = window.innerWidth + "px";
					myOverlay.style.height = window.innerHeight + "px";
					myOverlay.style.top = window.pageYOffset+"px";
					myOverlay.style.left = window.pageXOffset+"px";	

					centerImage(largeImage);
				}//overlay exists
			},false);

		}
		
	},false);

	
	//Center the image
  	function centerImage(theImage)
  	{
  
		//Center on the window
		var myDifX = (window.innerWidth - theImage.width)/2;
		var myDifY = (window.innerHeight - theImage.height)/2;

		theImage.style.top = myDifY + 'px';
		theImage.style.left = myDifX + 'px';

		return theImage;
    } //center the image

}());