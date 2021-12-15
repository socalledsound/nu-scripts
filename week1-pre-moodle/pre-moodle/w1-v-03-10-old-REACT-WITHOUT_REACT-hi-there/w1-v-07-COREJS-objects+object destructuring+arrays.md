[SC]
root.appendChild(WelcomeMessage('Chris', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Naomi', generateRandomColor(), 2, 20))
root.appendChild(WelcomeMessage('Zen', generateRandomColor(), 2, 20))
[VO]
At the end of the last video, I was talking about how I can turn this
[SC]
root.appendChild(WelcomeMessage(user1)
root.appendChild(WelcomeMessage(user2)
root.appendChild(WelcomeMessage(user3)
[VO]
into this.

[SC]
const user1 = {
name: 'Chris',
color: generateRandomColor(),
textSize: 2,
marginTop: 20,
}
[VO]
And if you guessed that I'm going to use an javascript object to handle this for me, you were right.

The object is the fundamental data structure in javascript.

Objects use keys to store values. Here, I've got four keys, one each for a name, color, textSize and marginTop

Those keys can be accessed using either dot or square bracket notation.

[SC]
root.appendChild(WelcomeMessage(user1)

[VO]

So now, I can just pass my user object in to my function.

[SC]
const WelcomeMessage = (user) => {
const newDiv = document.createElement('div')
newDiv.innerText = `👋 hi there, ${user.name}`
newDiv.style.color = user.col
newDiv.style.fontSize = `${user.textSize}rem`
newDiv.style.marginTop = `${user.marginTop}vh`
return newDiv
}
[VO]
And then, in my function, I can just access those keys, using dot notation, like this.

[SC]
const myObject = {
property: 'value'
}
const { property } = myObject
[VO]
Or, even better, I can use something called destructuring, which was introduced in es6.

It's super powerful and it's used a lot in React code. If this is your first introduction to destructuring, definitely take some time to learn it and get comfrotable with it. You're going to find yourself using it A LOT.

[SC]
const user1 = {
name: 'Chris',
color: generateRandomColor(),
textSize: 2,
marginTop: 20,
}

const name = user1.name
const color = user1.color
const textSize = user1.textSize
const marginTop = user1.marginTop

[VO]
Before destructuring, if we wanted to get the keys off of an object, we could do it like this.

[SC]

const { name, color, textSize, marginTop } = user1

[VO]
With destructuring, we can create four variables, set to the corresponding properties of the object on the right side, with one line!

[SC]

const user1 = {
name: 'Chris',
color: generateRandomColor(),
textSize: 2,
marginTop: 20,
}

const WelcomeMessage = ({name, col, textSize, marginTop}) => {
const newDiv = document.createElement('div')
newDiv.innerText = `👋 hi there, ${name}`
newDiv.style.color = col
newDiv.style.fontSize = `${textSize}rem`
newDiv.style.marginTop = `${marginTop}vh`
return newDiv
}
root.appendChild(WelcomeMessage(user1)
[VO]
Or, as we often do in React code, I can pass an object in to a function, and then destructure the keys off of that object.

This makes for concise, clean and very readable code.

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

const user1 = {
name: 'Chris',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
}

const user2 = {
name: 'Naomi',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
}

const user3 = {
name: 'Zen',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
}

root.appendChild(WelcomeMessage(user1))
root.appendChild(WelcomeMessage(user2))
root.appendChild(WelcomeMessage(user3))
[VO]
And I'm starting to feel a little bit better about this formerly quite stinky code.

But there's another data structure we can use quite effectively here, and I bet you can guess what it is. It's the data type that we use to store collections of similar things. We've got three users here, so I think we have a collection. I think we need an array.

And once we have an array, we'll also have access to some really useful array methods, which is what I want to talk about in the next video.
