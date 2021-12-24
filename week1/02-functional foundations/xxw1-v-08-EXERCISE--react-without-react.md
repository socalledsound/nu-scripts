[SC]
https://developer.mozilla.org/en-US/docs/Web/API/Element
[VO]

[SC]

const createElement = (type, text, className, children = []) => {
const el = document.createElement(type)
if(children.length > 0){
children.forEach(child => el.appendChild(child))
}
return el
}

[VO]
If you guessed, yes there is a better way, then you win the prize of a rabbit emoji!

Yes, there is. And the solution to this problem actually pretty straightforward, and it's an approach that you will see again and again in declarative javascript. And in fact, we can use React for inspiration, because React has a createElement method, that I want to look at now.
