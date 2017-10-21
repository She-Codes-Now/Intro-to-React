## Goals:
* Review basics
* Build an interactive (dynamic) React app
* Leave with next steps to take
* Resources
* Remember two things: the most important part of programming is perserverance, and the second most important part is asking for help when you're stuck

## Outline:
1. Review JavaScript (JS) basics
  * `var`
    * Remember algebra? This is the same idea
    * [Variables Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Variables)
  * If/else
  	* If it's raining, bring an umbrella
  	[Conditionals Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Conditionals)
  * Types
  	* null, '', false, true, strings, numbers
  	* See [Variables Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Variables)
	* Functions
		* Input a variable, do some math or other work, and return a new value
		* [Functions Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Functions)
	* Equality: `a === b` `a !== b`
	* How can we play with JavaScript right away, in the browser? Try it out: in your browser console, you can always try out JS. Don't worry, it won't affect anything on the current site permanently, although it's a fun way to experiment!
```
	// Let's find a way for the computer to tell us what to wear on our walk
	// We just need to input what the current weather is
	function getSupplies(weather) {
		// If the weather is raining, then we should take an umbrella, and if it's not raining, then let's take sunglasses
		if (weather === 'raining') { return 'umbrella' } else { return 'sunglasses' }
	}
	getSupplies('raining');
	// 'umbrella'
	getSupplies('sunny');
	// 'sunglasses'
```
2. Review HTML/CSS basics
	* Question: What are the two languages we need to build a basic website, besides JavaScript?
		* Ok, and what is HTML used for? What is CSS used for?
		* What are some basic HTML elements?
	