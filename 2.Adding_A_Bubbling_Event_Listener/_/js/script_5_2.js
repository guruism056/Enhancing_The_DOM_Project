(function()
{
	var myNode = document.querySelector("#artlist .pixgrid ul");

	myNode.addEventListener("click",function(e)
	{
		if(e.target.tagName === "IMG")
		{
			console.log(e);
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