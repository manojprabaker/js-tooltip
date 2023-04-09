let iBtn=document.getElementsByClassName("fa-info");
let tooltip=document.getElementById("help");

iBtn[0].addEventListener("click",function(e){
	if(tooltip.childElementCount<=2)
	{
		
	console.log(tooltip.childElementCount)
	console.log("running");
	let div=document.createElement("div");
	div.classList.add("tool-tip");
	tooltip.appendChild(div);
	
	let para=document.createElement("p");
	para.classList.add("para");
	div.appendChild(para);
	para.innerText="Once Sign Offs are obtained,manage all studies,sign offs and changes in Settings"
	
	
	let lnMore=document.createElement("a");
	lnMore.classList.add("ln-more");
	div.appendChild(lnMore);
	lnMore.innerText="Learn More";
	
	let manage=document.createElement("a");
	manage.classList.add("manage");
	div.appendChild(manage);
	manage.innerText="OK";
	
	
	
	
	manage.addEventListener("click",function(evenObj){
		div.remove();
		console.log("df");
	})
	
	iBtn[0].addEventListener("click",function(evenObj){
		div.remove();
		console.log("df");
	})
	
	
	
	
	
	
	}
	
});

	
