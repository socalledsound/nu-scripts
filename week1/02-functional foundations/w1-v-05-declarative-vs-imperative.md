https://ui.dev/imperative-vs-declarative-programming/
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0\
https://blog.bitsrc.io/functional-programming-in-javascript-how-and-why-94e7a97343b
https://medium.com/trabe/why-is-react-declarative-a-story-about-function-components-aaae83198f79

[SC]

DECLARATIVE VS IMPERATIVE

[VO]

<!-- One big word that I've been using a lot -- and you constantly hear this word kicked around when people are talking about React -- is 'declarative'. And alongside it, you often hear it's archrival, 'imperative'. -->

<!-- As you've probably gathered by now, functional programming is declarative in nature. By bundling functionality into these things called functions, we abstract away the imperative aspects of code. -->

'Declarative' is a term that often comes up when people talk about functional programming -- and about React.

But what does this mean?  Like, what actually do they mean in the React docs when they call it a 'declarative approach to managing user interfaces'?

In this video I'll try to explain.

And I'll start with an example of a declarative process.

If you have a smartphone and need to get to someone's house, what do you do?

You ask them for their address.  

And then you enter that into a map app, and it provides you with a route that you can follow.  And, generally your phone will give you those steps as they come up and if you're driving you probably don't even look at the list of steps, you just listen and do what the assistant says.

So, you started with one piece of useful information, and you fed it into a process, and now you're at your friend's house.

And that's pretty declarative in nature.  

Now, what about when your Dad comes to visit, and he doesn't have a smartphone.  This is a true story, by the way.  He's staying in a hotel a couple of miles away, and he's someone that really likes to talk about directions, and how you get places.  He doesn't have access to a map app or any of the tools that a smartphone provides.

So you spend half an hour outlining each step that he'll have to take to get to your house, all of the turns, left on Harrison, go two blocks, right on Grand, etc etc etc.

And probably several times along the way he gets lost -- most likely due to some mutated data -- and has to call and you go through the whole process again.

And here we are, detailing each step of the way, and guess what?  That's imperative.

Now, the comparison doesn't hold up one to one with coding, but I hope you get the idea.

CHART HERE
As you can see in this chart,

IMperative is step by stepbvcx


[SC]

[VO]
So when we talk about React being a 'declarative' approach to building user interfaces, we mean, we that React presents us with an API that let's us describe how we want our user interface to look and React takes care of building that interface for us, and it helps us manage that interface as it evolves due to user interaction.

There are a number of technologies that React leverages to facilitate this declarative managing of a user interface.  


[SC]
<div>{username}</div>
[VO]
React has its own markup language, called JSX, that you're going to become a pro at soon.  

It looks quite a bit like HTML but guess what -- it isn't.  It's actually a syntax extension for javascriopt, which is a fancy way of saying that it's a simplified way to declaratively describe the HTML that you want your javascript code to generate.  

[SC]

[VO]

And if that doesn't make sense yet, don't worry, I think it will, a few videos from now, when we'll also talk about the other huge declarative bonus that React brings us, which is the virtual DOM, which is a declarative way to optimize the management of any updates that we need to make to our user interface as a result of either user interaction or changes in the data of our app.  

[SC]

[VO]

And we'll get to these exciting things soon.  But first, I want to stick with this declarative vs imperative thing in plain old vanilla javascript.

In the next video we'll work with what I consider to be the finest and possible most useful example of a declarative process in javascript: the Array.map() method.  

I'll see you there.




# end

In this video I want to talk a bit about what these declarative and imperative approaches to programming are, so that the notion of the 'declarative approach to building user interfaces' which React is so famous for offering actually starts to make a little sense.

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
And boy does that guy like to give directions.

[SC]

    1.
    2.
    3.

[VO]
'Ok, he started, first you take MLK, and you'll go two blocks past Broadway. When you get there, you'll see one of those big inflatable guys with streamers, it advertises a tire shop. Oh and by the way they have nice tires. Anyway, you'll keep going past that. And then..'

[SC]

    37 E. 54th st. 94610

[VO]
But by this point I was getting a little bored.
'Dad,' I interrupted.
'what's the address?'

At which point, he gave me the address, I entered it in my phone and I was there 22.4 minutes later.

In either case, I still need to get there somehow, but, in the first case, before I start going there, I need to listen to someone chat for quite a while, and I need to write down all of the steps that I'll need to take to get there.

IN the second version, I just enter an address into an API and the directions are given to me as I need them -- perhaps with some helpful updates if I make a wrong turn.

I only need once piece of data, and a system that knows how to interpret it, and the mental part of my work is done.
[SC]

[VO]
Now, an important thing to remember about the difference between declarative and imperative is that a declarative abstraction almost always has an imperative process underneath it.

In the case of a map app, we still get and need the step by step directions, but the app is responsible for keeping track of them and only gives each step to you as you need it.

[SC]

[VO]

We can't change the fact that imperative stuff needs to happen.

But what we can do is, make getting that stuff done a little bit easier. And isn't that what computers are great at?

[SC]

[VO]
So when we talk about React being a 'declarative' approach to building user interfaces, we mean, we that React presents us with an API that let's us describe how we want our user interface to look and React takes care of building that interface for us, and it helps us manage that interface as it evolves due to user interaction.

[SC]

    <p>how?!</p>

[VO]
And React borrows a lot from HTML to do this. In fact, the syntax that React supplies us with for building our interfaces -- JSX -- looks a lot like HTML.

HTML, and all markup languages are great examples of declarative code in action.

Think about it -- do you actually have any idea how <p>how?!</p> is converted into text in your browser? HTML simply tells the browser what you want done, and leaves the 'how' of it to the web browser.

[SC]

[VO]
But React goes a step further, by allowing us to not only declaratively compose our web page, but also to declaratively express how we want that interface to 'react', or evolve, over time, as the result of user interaction.

Just exactly how React does this is a subject for another video.  Or really, the subject for most of the rest of this course!  

[SC]

react is declarative

[VO]


For now, I just want you to remember that React is declarative in nature, and to know that that means that React will declaratively abstract away many of the details of managing our app's interface. 

[sc]

imperative is step by step
[vo]
Remember, imperative is generally lower level, more like step by step instructions.


[sc]
imperative is step by step  declarative is higher level
[vo]
whereas a declarative approach is often an abstraction layer, or an api that manages imperative steps from us so we don't have to think about them.

[SC]


[VO]
And, if youre ready, in the next video, I'd like to show you one of my favorite javascript examples of this declarative style of programming in action: array.map().  As fate would have it, it's also going to be an absolutely essential tool for creating web pages using React, so be sure to watch this next one.  I'll see you there.




[SC]


[VO]


[SC]


[VO]







[VO]
So I hope that helps a little bit? And when someone tosses out the words declarative and imperative, you'll have some sense of what they're talking aboout

But I'm also aware that a high level discussion like this might still leave you a little confused about what these ideas actually are, on the level of code.

const newArray = [1,5,6].map((num) => num + 1)

In the next video I'm going to roll my sleeves up a bit and SHOW you the difference between imperative and declarative code, by teaching you about one of my favorite array methods -- Array.map().

It's the classic example of a declarative API, and it's also a method that you will be using a lot throughout this course and, really, just about every time you build a React app.

So, take a little break, stretch your legs and get yourself a nice strong glass of water. Or coffee. And, I'll see you in the next video.

# end



#

#

Well...that's the beauty of declarative programming! You don't really need to know! All you REALLY need to know is, React let's us describe our user interface using functions and then we can hand that interface off to the render method of the ReactDOM library and -- presto! We have a React web app.

React declaratively abstracts away all of the imperative steps to make your life easier.

[SC]

const Header = () => ReactiveHeader

const App = () => {
return (
React.createElement('div', null, [Header, Body])
)
}

[VO]
And it does this by first of all, encouraging us to use pure functions to compose our user interface.

Need a Header? Write a function
[SC]

[VO]
Want a header

When we build a react site, we are composing using functions.

The syntax used to describe these functions may look different than what you're used to, but at the end of the day, React is all about composing using functions.

the higher order function.

[SC]

    (aFunction) => (someData) => aFunction(b)

[VO]
If you look carefully at the function expression here, you'll see that we have a function that takes in a function , that returns a function

Now, I'm warning you -- higher order functions are the hard part of functional programming. So now might be a good time to take a little break, take a walk, and get yourself a nice strong glass of water. Or coffee.

# end

# should this video end here?

# end

Without a phone, you need to pay attention to where you are and how to get .

I don't know about you, but my Dad is someone who loves giving directions. Need to go get to his house from somewhere nearby? He can tell you. And he will outline each step of the way, very carefully. Probably a little too carefully. And as he goes he will make sure that you understand each step of the way, and that you know not to take this that and the other wrong way. Before I had a phone

[SC]

[VO]
But, since smartphones were invented, we talk a lot less about directions. If he needs

Those of us who have smartphones tend to not really think about the details of how to get from one place to another. Need to get to a friend's new house? No problem. Just make sure you have the address, enter it into the a map app, and press 'start'.

[SC]
const ReactComponent = (data) => React.createElement(element, {name: data.name}, [data.otherSutff])
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
