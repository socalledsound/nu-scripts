refactor function with template literals and also write random color function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[SC]
template literals
[VO]
Template literals are a javscript language feature that came with ES6.

[SC]

    `${javascriptVariable}px`

[VO]
Their most common usage is for string interpolation. In other words, combining

[SC]
const HeartMessage = (msg, x, y, col) => {
const div = document.createElement('div')
div.innerText = msg
div.className = 'heart-message'
div.style.left = x
div.style.top = y
return div
}
[VO]
At the end of last video, we wrote this function

[SC]
const messages = ['cool cud', 'you are bear', 'me my <3']
for(let i = 0; i < messages.length; i++){
root.appendChild(HeartMessage(messages[i], '100px', '500px', 'lightblue'))
}
[VO]
Now, if we have a list of messages, we can just iterate over that list, using a for loop....
Oh wait.
If we run this code, we have a problem. We need a way to

And if we look at the original page, I think you can start to see how we could display a long list of names, using this re-usable function inside a loop?

We'll finish doing that soon. But first, I want to talk

All we have to do is iterate over a list of messages, and pass in the next message

In the next video, we'll go a little farther with this idea, and build the heart that contains each one of these messages. I'll see you there.
