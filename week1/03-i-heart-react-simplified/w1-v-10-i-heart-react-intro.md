https://www.aiweirdness.com/candy-heart-messages-written-by-a-18-02-09/

https://www.theatlantic.com/entertainment/archive/2015/02/sweet-talk-the-chalky-anthropology-of-candy-hearts/385353/
https://www.popsci.com/candy-heart-messages-artificial-intelligence/

# this will be an intro to this section and very short.

[SC]

I HEART REACT

[VO]
Hello and welcome back!

And guess what? It's finally time to start writing React code.

[SC]
image of i heart react site
[VO]
In this section of the course, you're going to build your first React App, which will look like what you see on the screen now. Pretty straightforward, but hopefully also just a little bit fun.

You can see that on the page there are a bunch of hearts and each one has a text message.

<!--   -->

[SC]

[VO]

These messages are kind of like those candy heart messages that you see around Valentine's day every year, but just a little bit different. They were generated by an AI that was trained on a collection of real candy heart messages, and then generated some of its own. I think they're pretty amusing. They were made by a woman named Janelle Shayne, an optics researcher who does this kind of thing for fun. You can read all about the process at the link down below if you're interested.

[SC]

show the array of messages

[VO]
We're going to take an array of these messages, and use Array.map() on those messages.

[SC]
array into web page graphic
[VO]
Remember a few videos ago, when I said that in React we'll be using Array.map() to turn data into interface elements? We're going to do that now.

[SC]
circled heart shape
[VO]
We'll start by creating a function -- a React Component -- which will take in a message and an image of a heart and generate one of these interface elements that you can see circled here.

[SC]
messages.map((msg) => < Heart msg={msg} />))

[VO]
Then, we'll pass that function in to the Array.map's callback function, and it will create a Heart for each message.

[SC]
I Heart React

[VO]
Make sense? If so, great -- but if not, I'm pretty sure it will by the time we're done.

So let's get started. I'll see you in the next video, where we'll use a command line tool called create-react-app to do just that -- create our react app.
