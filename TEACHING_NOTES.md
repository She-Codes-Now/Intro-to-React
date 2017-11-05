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
3. Intro to the List App
	* Start at commit 
	* User story: Users should be able to add text items to their list
	* Add a new component called `Form` that is to the right of `List`
		* Remember that it also needs a CSS file, and to be imported by `App`
	* This bring us to commit
	* Question: what HTML element can we use for our `Form` that's not a `div`?
		* `form`: This is considered "semantic" HTML
	* Add a `form` element to our `Form` component
	* What else should the `form` have in order to allow users to add items to the list?
		* `input`
		* `button` to submit
	* Which brings us to commit
	* Try it out in the browser!
	  * Right now, entering text and clicking the button only reloads the page
	  * This is because the default behavior of any button is to reload the page
  * Next, let's start using the advantages of React by making it interactive.
  	* Add an `onSubmit` handler to the Form component that console logs "the form was submitted"
  	* Try this in the browser and make it console logs correctly
  	* Should be at commit 
  * Now, what should really happen when we add text and click the botton?
  	* A new item should appear under List
  	* Let's create a new Item component, import it into List, and render a sample list item. It will use `this.props.text`, which List provides.
  * Next, passing list items to List when something is added via Form
  	* Since Form and List are siblings, we will use App to keep track of list items and "add" events from the Form

	