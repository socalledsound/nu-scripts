# I could also do this in the next video....

[SC]

[VO]

In the last video, I talked a little bit about pure and impure functions.

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
We can rewrite our code from the last video as a function that returns a div. We'll give name it with a capital letter, because React components are, by convention, named with capital letters. We'll pass in a message, some x and y coordinates, and a color. In the function, we'll create a div, and then set the innerText property of that div to be the message.
We'll also add a classname of 'heart-message', and add the left and top style values from before. And finally, we'll be sure to return that div.

[SC]
const messageDiv = HeartMessage('cool cud', '100px', '300px', 'lightpink')
[VO]
Now, we can invoke that function, and pass in a message and it will return a div.

[SC]
const messageDiv = HeartMessage('cool cud', '100px', '300px', 'lightpink')
root.appendChild(messageDiv)
[VO]
And then we can append that div to our root div, like we did before.

[SC]
root.appendChild(HeartMessage('cool cud', '100px', '300px', 'lightpink'))
[VO]
Or, we can just pass the function invocation into root.appendChild directly, like this.

[SC]
root.appendChild(HeartMessage('cool cud', '100px', '300px', 'lightpink'))
root.appendChild(HeartMessage('you are bear', '100px', '500px', 'lightblue'))
[VO]
And now we've got a dependable and fairly concise way to create a heart message.

If pass in a new message, and modify the y coordinate so that it's a bit lower on the page, and maybe even give it a new color, we'll see a new message!

[SC]

[VO]
Now, we can use this function to generate a page full of messages.

But of course we don't want to input all of these values -- we'll use a loop to do it for us.

But first, we need to modify this function just a little bit. I'll explain how and why in the next video, when I show you about a tremendously useful ES6 feature called template literals. I'll see you there.

# end
