[SC]
https://developer.mozilla.org/en-US/docs/Web/API/Element
[VO]
But we can -- and probably should do just a little bit better. If we look at the API for a DOM element, we can see there are a lot of possible values that we might want to assign to one of these elements. Shouldn't we build that functionality in here? But how can we? Do we take in an input parameter for each of these attributes? Or is there a better way?

[SC]

const createElement = (type, props) => {

}

[VO]
If you guessed, yes there is a better way, then you win the prize of a rabbit emoji!

Yes, there is. And the solution to this problem actually pretty straightforward, and it's an approach that you will see again and again in declarative javascript. And in fact, we can use React for inspiration, because React has a createElement method, that I want to look at now.
