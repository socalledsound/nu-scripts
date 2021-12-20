[SC]

DECLARATIVE VS IMPERATIVE

[VO]
One big word that I've been using a lot -- and you constantly hear this word kicked around when people are talking about React -- is 'declarative'. And alongside it, you often hear it's archrival, 'imperative'. In this video I want to talk a bit about the difference between declarative and imperative programming, so that the notion of the 'declarative approach to building user interfaces' which React is so famous for offering actually starts to make a little sense.

[SC]

imperative graphic?
[VO]
An imperative approach is generally more low-level, step by step and fundamental in nature,

[SC]

declarative graphic?
[VO]
whereas a declarative approach usually attempts to abstract away the steps involved in a process.

[SC]

<!-- smartphone < - > map -->

map with two points on it

[VO]
My favorite example of the distinction between imperative and declarative styles comes from the world of giving and getting directions. A couple of years ago my Dad moved to a new house. And, when it came time for me to come visit him, he really wanted to make sure that I knew how to get to his house.

[SC] 1. 2.
3
[VO]
'Ok, he said, first you take MLK, and you'll go two blocks past Broadway and then..'

[SC]

    37 E. 54th st. 94610

[VO]
'Dad, I have the address and my phone, I'm good. I'll see you 20 minutes.'

In either case, I still need to get there somehow, but, in the first case, before I start going there, I need to listen to someone chat for quite a while, and I need to write down all of the steps that I'll need to take to get there.

IN the second version, I just enter an address into an API and the directions are given to me as I need them -- perhaps with some helpful updates if I make a wrong turn.

I only need once piece of data, and a system that knows how to interpret it, and the mental part of my work is done.
[SC]

[VO]
Now, an important thing to remember about the difference between declarative and imperative is that a declarative abstraction almost always has an imperative process underneath it. We can't change the fact that stuff needs to happen. But what we can do is, make getting that stuff done a little bit easier. And isn't that what computers are great at?

[SC]

[VO]
So when we talk about React being a 'declarative' approach to building user interfaces, we mean, we that React presents us with an API that let's us describe how we want our user interface to look and React builds that interface for us, and helps us manage user interaction.

[SC]

    <p>what?!</p>

[VO]
React borrows a lot from HTML to do this, in fact, the syntax that React supplies us with for building our interfaces -- JSX -- looks a lot like HTML. Think about it -- do you actually have any idea how <p>what?!</p> is converted into text in your browser? HTML simply tells the browser what you want done, and leaves the 'how' of it to the web browser.

# should this video end here?

[SC]

const addOne = (num) => num + 1

const myNumber = 10
const newNumber = addOne(myNumber) // 11

[VO]
At the other extreme, look at this javascript code. We have, first of all a function. It's a pure function and it's a pretty simple function: addOne. It takes in a number and adds one to it.
Now, I should say -- a benefit of imperative code is, it's very easy to see what's going on here, right?

[SC]

const addOne = (num) => num + 1

const numbers = [1,6,3,7]
const newNumbers = []

for(let i = 0; i < numbers.length; i++){
newNumbers[i] = addOne(numbers[i])
}

console.log(numbers)
console.log(newNumbers)

[VO]
And if I want to add one to every item in an array of numbers, and make a new array with the new numbers? I can use a for loop.

This is an imperative approach. It's very explicit and easy to read. But...for loops are also the biggest single source of errors in all of computer programming!

[SC]

const numbers = [1,6,3,7]
const newNumbers = numbers.map((num) => num + 1)
[VO]
And, at least in javascript -- thanks to it's support for higher order functions -- there's a better way.

# end

Without a phone, you need to pay attention to where you are and how to get .

I don't know about you, but my Dad is someone who loves giving directions. Need to go get to his house from somewhere nearby? He can tell you. And he will outline each step of the way, very carefully. Probably a little too carefully. And as he goes he will make sure that you understand each step of the way, and that you know not to take this that and the other wrong way. Before I had a phone

[SC]

[VO]
But, since smartphones were invented, we talk a lot less about directions. If he needs

Those of us who have smartphones tend to not really think about the details of how to get from one place to another. Need to get to a friend's new house? No problem. Just make sure you have the address, enter it into the a map app, and press 'start'.

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]
HTML -- and I would say, any markup language -- is a great example of a declarative language.

# notes below

declarative vs imperative

functions are the building blocks

combine functions together into

list the things that are expected as prereqs and also offer a link to a section where they can review these things if they want.

Welcome back. In this video we're going to review what is perhaps the most basic of javascript basics: the DOM. Javascript was, essentially, invented to be a language which effectively manipulates the DOM in a web browser.

Over the years, javascript has become much more than that -- Node.js has made it possible for us to run javascript anywhere, but at its core, javascript is still a language that is very much associated with DOM manipulation.

All of the major front-end javascript frameworks -- Angular
