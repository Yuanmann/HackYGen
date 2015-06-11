var scanLoops=100;
var scanPercentage=0;
var scanFill;
var scanTimer=150; 

function scanIps()
{
	if(scanPercentage==0)
	{
		myVar = setInterval(function(){progress()},scanTimer);
	}
	else
	{
		alert("already Scanning");
	}

	function progress()
	{
		if(scanLoops>0)
		{
			scanPercentage++;
			fill=scanPercentage+"%";
			$('.progress-bar').css("width",fill);
			scanLoops--;
		}
		else
		{
		clearTimeout(myVar);
		alert("done");
		}
	}

}

