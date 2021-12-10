    const messages = []
    for(let i = 0; i < messages.length; i++){
        root.appendChild(HeartMessage('you are bear', '100px', '500px', 'lightblue'))
    }



[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}

[VO]

And functions can also return other functions!

[SC]
DOUBLE MIND BLOWN EMOJI
[VO]

[SC]
HIGHER ORDER FUNCTIONS
[VO]
When a function is returned from a function, or passed into a function as an input parameter, we call that a 'higher order function'. They can be a bit daunting at first but don't worry -- in this course and in your career as a React developer you'll get plenty of exposure to these ideas and, as with everything, with a little practice it will become second-nature.

[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}
logMessage('!')('hi')

[VO]
If a function returns a function, then we can also invoke the function that it returns, as you can see here.

[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}
const logMessageWithExclamation = logMessage('!')
logMessageWithExclamation('hi)
[VO]

Or, we can assign the returned function to a new variable, and invoke it later. This is called partial application.

[SC]
TRIPLE MIND BLOWN EMOJI
