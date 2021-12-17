# a brief video on reactstrap check to see what already exists (3-5 mins?)

[SC]

[VO]
You may have noticed that one of the libraries we installed was Reactstrap, which we're going to use for styling in our nucampsite.

[SC]
reactstrap are react components that use bootstrap
[VO]
Now, the good news is, if you know bootstrap pretty well, then reactstrap should be pretty easy to pick up. It's designed with people like you in mind, to make it easy to use bootstrap stylings in react apps.

[SC]

[VO]
Hopefully you remember that we installed the library, in the last lesson, using yarn add reactstrap, so it's available to us in our node_modules folder.

[SC]

[VO]
And we imported the css files into our index.js file, so those classes are available everywhere in our app. The reactstrap components will use those to provide styling, by assigning class names.

[SC]
https://reactstrap.github.io/?path=/story/home-installation--page
[VO]
Hopefully all of your installation went well and you're ready to go. You can find pretty much everything you need to know in the reactstrap documentation.

[SC]

logos

[VO]
But I do want to take just a minute to explain how reactstrap works. It's a little bit different from bootstrap because, well, this is react, and reactstrap is made up of react components, rather than css classnames.

[SC]

    <nav navbar navbar-light sticky-top >
        //navbar here
    </nav>

[VO]
If you recall, a nav element can be styled with bootstrap like this, where each of those words in the nav tag are classnames

[SC]

[VO]
Now, assuming that we've already installed the library and imported the css in our index.js! -- we can do something similar in a component that we want to write.

# probably no need to do this, actually

[SC]
STEPS TO INCLUDE REACTSTRAP

1. first you install the library
2. then you import the css into index.js
3. and finally import components as needed into specific places of your app

[VO]
As you've already seen, it's pretty easy to include reactstrap in a react application. We already added it to our nucampsite. But, as a review, in case you decide you want to include reactstrap in one of your own projects: the steps are, first install bootstrap.

[SC]

[VO]

[SC]
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
[VO]

[SC]
import { Navbar, Container, NavbarBrand } from "reactstrap";
[VO]

-- include what needs to happen in a project to use reactstrap (varoius bootstrap imports)
https://reactstrap.github.io/?path=/story/home-installation--page
