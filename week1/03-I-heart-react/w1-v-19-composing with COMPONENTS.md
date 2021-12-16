[SC]
UNDERSTANDING COMPONENTS
[VO]
Welcome back.

So now that we've written a few components, I want to take a few minutes to get conceptual on you and talk about components as a means of organizing user interfaces, because I think it's one thing that sometimes trips people up a little bit.

-more here-

In React, these functions are a bit more sophisticated, and we call them components.

We'll use these functions, or components, to compose web pages.

To do this well, we have to learn how to look at web content, and also coding, just a little bit differently -- we need to try to break down bigger tasks into smaller ones.

[SC]

heart image

[VO]

Rather than try to explain this in an abstract way, I want to give you a very concrete and visual example: this heart that we're trying to build.

It's a shape that has a lot of meaning, for a lot of people.

[SC]

svg points

[VO]

And it's a shape that can get a little bit complicated to make. If we wanted to code it by hand using, say, SVG, we'd need a long list of points to make these arc shapes.

[SC]
two circles and a square heart
[VO]

Or, we can approach it from another perspective, breaking the shape down into it's constituent parts. As you can see here, a heart is, basically, a square and two circles combined.

[SC]

[VO]
And, you can break down just about any web page you want to build in just this way.
Soon, you'll be doing it without even thinking about it.
a login page?
Two text input fields and a submit form.

[SC]

[VO]
A registration page?
Take those same parts from the login page, and add a few more text fields.

[SC]
a few pages with highlighted sections that show components.
can we use things like netflix or shoudl these be pages that I built?
[VO]
If you look around the internet with this perspective, it all starts to make new sense, you'll see repeated parts everywhere. Not all of these pages are using React, but they're all using this very fundamental principle of composing web pages by using re-usable parts.

[SC]

square
circle
circle
[VO]
But back to our heart, which we can make in a similar way, by coding some small pieces, and then combining them. We'll need to write two functions. A square, and a circle, which we can use twice.

[SC]
Heart
Circle
Circle
Square
HeartMessage
[VO]
And, then we'll also write a Heart function, which will combine these shapes and also display the HeartMessage function that we've already written.

[SC]

[VO]
And when we're done, we'll have a Heart, which we can re-use anywhere and everywhere we want.
[SC]

[VO]

[SC]

[VO]

[SC]

[VO]
