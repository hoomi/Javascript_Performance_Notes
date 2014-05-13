[profiles]:images/Chrome_Profiles.png "Chrome Profiles"
[flamechart]:images/Flame_Chart.png "Flame Chart"
#Chrome Tools

## Profiling

### <a href="https://developers.google.com/chrome-developer-tools/docs/cpu-profiling">Javascript CPU profiling</a>

1. <b>Programatically</b>

		console.profile(func.name);
		<piece of code that you want to measure>
	  	console.profileEnd();
	  	
2. <b>Manually</b>

	- Open <a href="https://developers.google.com/chrome-developer-tools/#How to access the DevTools"> Chrome DevTools</a>
	- Click on Profiles
	- Select "Collect JavaScript CPU Profile"
	- Whenever you are ready press Start
	
![profiles]

- <b>Flame Chart</b>: In the Details view, a call stack is represented as a stack of function "blocks". A block that sits atop another was called by the lower function block.
</br>
![flamechart]
	
	<b>Name</b> — The name of the function.	

	<b>Self time</b> — How long it took to complete the current invocation of the function, including only the statements in the function itself, not including any functions that it called.
	
	<b>Total time</b> — The time it took to complete the current invocation of this function and any functions that it called.

	<b>Aggregated self time</b> — Aggregate time for all invocations of the function across the recording, not including functions called by this function.

	<b>Aggregated total time</b> — Aggregate total time for all invocations of the function, including functions called by this function.


