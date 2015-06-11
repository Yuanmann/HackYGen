var crackvar;
var myVar;

var scanLoops=100;
var scanPercentage=0;
var scanFill;
var scanTimer=150; 

var crackLoops=100;
var crackPercentage=0;
var crackFill;
var crackTimer=150; 


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
			$('#ipbar').css("width",fill);
			scanLoops--;
		}
		else
		{
		clearTimeout(myVar);
		scanPercentage=0;
		scanLoops=100;
		scanFill="0%";
		$('#ipbar').css("width","0%");
		}
	}

}

function crackComputers()
{
	if(crackPercentage==0)
	{
		crackVar = setInterval(function(){progress()},crackTimer);
	}
	else
	{
		alert("already Cracking");
	}

	function progress()
	{
		if(crackLoops>0)
		{
			crackPercentage++;
			fill=crackPercentage+"%";
			$('#crackbar').css("width",fill);
			crackLoops--;
		}
		else
		{
		clearTimeout(crackVar);
		crackPercentage=0;
		crackLoops=100;
		crackFill="0%";
		$('#crackbar').css("width","0%");
		}
	}

}

