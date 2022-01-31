make a better explanation of the nav

https://6-4-0--reactstrap.netlify.app/components/navs/
https://mdbootstrap.com/docs/standard/navigation/navbar/


in workshop also a good explanation of the Cols


[SC]

[VO]

Welcome back!


In this video we're going to set up our App component, and finish getting you ready for workshop.

What we're going to do is add a Header, as you can see on this page. that header  is going to have a logo and a nice background gradient and it's going to be composed of just a few reactstrap components.


[SC]

<nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top" >

</nav>

[VO]

And maybe you remember that in bootstrap we might make a navbar something like this.

[SC]
<Navbar dark color="primary" sticky="top" expand="md">
[VO]
In reactstrap, we'll use a Navbar component to do the same thing, and we're able to set the commonly used bootstrap classes as props, so it will look like this instead, but the idea is the same.

[SC]

[VO]
Inside the Navbar we'll have a Container, which is a div with the class of container-fluid



[SC]

[VO]
And then we'll have NavbarBrand, which will have an href, meaning that users will be able to navigate home by clicking on it

[SC]

[VO]

And that NavbarBrand will have a logo in an img tag which will be the 


[SC]

[VO]
And, by the way, the gradient for the background of the navbar is specified in our App.css, and in there you can also see there are a few position stylings.


And then we'll just add some basic text for our page, and you'll be ready for workshop.



So, let's get started...

Go ahead and click on that App.js file and 




end:

In workshop, we're going to building the first phase of our campsites feature.  And that feature is going to display a collection of campsites on the page, as you can see on the screen now.  To prepare yourself for that, go ahead and watch the getting ready for workshop video, that you can find on the week 1 workshop page!  I'll see you there.