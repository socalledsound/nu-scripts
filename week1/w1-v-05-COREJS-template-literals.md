## w1 - v5 CORE JS : template literals 5 mins

[SC]
const WelcomeMessage = (name, col) => {
const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there,' + name
newDiv.style.color = col
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'
return newDiv
}
[VO]

In the last video, we created a function that returns a div, and I mentioned that what I want to do is to generate a random color each time the function is invoked, and display the name in that color.

And we refactored our function to look like this, where we bring in not only a name, but also a color.

[SC]
const generateRandomColor = () =>
[VO]
And then I challenged you to come up with a function that generates a random color in javascript, and see if you could make it work with your code.

I hope you were able to find something that works.

I'll show you my answer now.

[SC]
template literal graphic here
[VO]
And I'm going to use something called a template literal.

A template literal is, basically, a better way to concatenate strings and javascript expressions.

[SC]
newDiv.innerText = '👋 hi there,' + name
[VO]
So, for instance, instead of writing '👋 hi there,' + name

[SC]
newDiv.innerText = `👋 hi there, ${name}`
[VO]
We can use backticks to define the string, and then put our javascript directly inside the string, enclosed in curly braces that are preceded by a dollar sign.

[SC]
` hi and bye, ${name}`

[VO]

Another way we can use them is to write multi-line string expressions.

[SC]
const WelcomeMessage = (name, col) => {
const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there,' + name
newDiv.style.color = col
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'
return newDiv
}
[VO]
In React components, you will often see template literals used in the context of styling, because styling in javascript always involves setting a style object property equal to the value of a string, but you often want some part of that string to be dynamic.

[SC]
const WelcomeMessage = (name, col, textSize, marginTop) => {
const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there,' + name
newDiv.style.color = col
newDiv.style.fontSize = `${textSize}rem`
newDiv.style.marginTop = `${marginTop}vh`
return newDiv
}
[VO]
So we can use template literals to allow our fontsize and marginTop properties to be set dynamically, like this.

And that's pretty much all there is to template literals. Learn the syntax and use them!

Now, about that randomColor function.

[SC]
const generateRandomColor = () => `#${Math.floor(2 ** 24).toString(16)}`

[VO]
So...to generate my random color, I'll make a function that returns a template literal, which has a hashtag and then uses javascript to generate a hex color value.

And here I think you can really see the power of template literals; because I can include this fairly sophisticated

And actually, I'm mostly showing you this random color function because I want to teach you about template literals, because they are hugely useful in React code, and you will see them a lot in your lives as React developers.

[SC]

[VO]

[SC]
const generateRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

const root = document.getElementById('root')

const WelcomeMessage = (name, col, textSize, marginTop) => {
const newDiv = document.createElement('div')
newDiv.innerText = `👋 hi there, ${name}`
newDiv.style.color = col
newDiv.style.fontSize = `${textSize}rem`
newDiv.style.marginTop = `${marginTop}vh`
return newDiv
}

root.appendChild(WelcomeMessage('Chris', generateRandomColor(), 2, 20))

[VO]

And, now, if you pass in an invocation to generateRandomColor() along with a textSize and a marginTop value, yuou should see the text appear with a random color each time you refesh the browser.

[SC]
root.appendChild(WelcomeMessage('Chris', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Naomi', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Zen', generateRandomColor(), 2, 20))
[VO]
And this is all working great, and we can even make multiple lines appear in our browser if we want to, a rainbow of names.
[SC]
root.appendChild(WelcomeMessage('Chris', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Naomi', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Zen', generateRandomColor(), 2, 20))
[VO]
But this code is really starting to bug me now! It's getting harder for me to read, with all of those different input parameters.  
[SC]
root.appendChild(WelcomeMessage(user1)
root.appendChild(WelcomeMessage(user2)
root.appendChild(WelcomeMessage(user3)
[VO]
What if we could just do something like this, instead?

Well, of course, we can! I think it's time to talk about objects, and arrays and arrays of objects.
