
React-W3-11-uncontrolled-forms

codes:
LoginPage:

--- 

##### SC

uncontrolled forms


##### VO

Welcome back.


--- 

##### SC


show LoginPage


##### VO

Forms play a huge role in many web applications.  Even the most basic requirements, like for instance, loggin in a user, require the ability to manage forms.



--- 

##### SC

formik logo here


##### VO

IN our nucampsite, we're going to be using a popular and excellent form library called formik to handle our forms.  It offers many advantages, which we'll discuss in due time. 

But, before we dive into the Formik library's approach to forms, let's take a brief look at form management in React without Formik.

--- 

##### SC

Uncontrolled Forms              vs          Controlled Forms
form state outside React                    Form state handled by React


##### VO

There are two basic approaches to handling forms in react: uncontrolled forms and controlled forms.

And the big difference between the two is, essentially, how the state of the form is handled.

In this video and the next one, we'll look at these two options and also discuss the pros and cons of each.

--- 


##### SC

<form>
    <input />
    <button>click me</button>
</form>

##### VO

Now, first of all, the JSX of a basic form in React is very simimlar to a standard HTML form.

We start with a form element.  Inside that form, we have one or more inputs, and, typically, a button that users can click to submit the form.




--- 

##### SC

focus arrow follows the text

<form onSubmit={handleSubmit}>
    <input />
    <button type='submit'>submit form</button>
</form>


##### VO

If we give the button a type of submit, then when the users clicks it, a function attached to the forms onSubmit property will be called.


--- 

##### SC

focus arrow follows text --


<form onSubmit={handleSubmit}>
    <input type='text' />
    <button type='submit'>submit form</button>
</form>


##### VO

Inputs come in all shapes and sizes but the most common is, of course, the text input, which we can specify by setting the 'type' property to 'text'. 


--- 

##### SC

Uncontrolled Form
    React doesn't control the state of the form
    we write that logic ourselves


##### VO

Now, an uncontrolled form is a form in which React doesn't control -- or have any knowledge about -- the state of the form.

It's a quick and dirty approach to form state management.  We write the logic to handle that form ourselves and directly manipulate the DOM to get the form to do what we want.



--- 

##### SC

useRef creates a reference, which we can use to directly access a DOM element


##### VO

In the last video, you learned about creating references using the useRef hook and one of the things that you learned is that we can use a reference to directly access and manipulate a DOM element, effectively sidestepping or even overriding React's render process.


--- 

##### SC
const Form = () => {

    const inputRef = useRef()

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} />
            <button type='submit'>submit form</button>
        </form>
        </div>
    )

}




##### VO

Uncontrolled forms are the perfect use case for a reference.  We can create a reference called inputRef and assign that to the ref prop of our input.

--- 

##### SC

const Form = () => {

    const inputRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target);
      console.log('submitted value:', inputRef.current.value) 
      inputRef.current.value = '';     
  }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef}/>
            <button type='submit'>submit form</button>
        </form>
        </div>
    )

}

##### VO

And then we can use that inputRef inside or handleSubmit function to get the data from the form and then also reset it.  

Generally any time we handle a form submission in a single page application, we want to start taking in the submit event and calling the preventDefault() method on that form submission, so that the browser doesn't immediately refresh the page -- which would of course trigger a re-render of our entire application.

Then, we can log the event.target and also the inputRef.current.value -- which should be the value of our input.  That value will typically be one that we want to do something with -- it's the reason we have a form in the first place.  

But in this case, we'll just log it to the console, and then finally we can reset the value of our input.







--- 

##### SC

show the code running in a web browser, with the console open, and see that you can receive a form submission in this way.

##### VO

And if we check this code in the browser we see that, sure enough, the event.target is our form, and the inputRef.current.value is the data that we gathered before the user clicked submit.

--- 

##### SC

focus arrow on each item follows text

Uncontrolled Form

    typically uses a reference to get the form data.
    we control the state of our form imperatively.
    quick and dirty

##### VO

And this is a basic uncontrolled form.  We use a reference to get the form data, and then we can do something with it.

In an uncontrolled from, we control the state of our form imperatively, completely outside of React's rendering process -- React has no knowledge of our form.

It's the quick and dirty method of creating a form in React, and at times it can be a valid approach.


--- 

##### SC

focus arrow on each item follows text

Uncontrolled Form

    typically uses a reference to get the form data.
    we control the state of our form imperatively.
    quick and dirty
    aren't as powerful
    UI and form state not in sync


##### VO

But uncontrolled forms, while slightly easier to implement, aren't as powerful.

The state of our application UI is currently not synced up with the state of our form in any way.

It might be nice, for instance, to only show the submit button if the form contains valid data, or even to check the data in the form field 
BEFORE the user clicks the submit button and inform the user of any invalid characters.

We have no way to do that right now.


--- 

##### SC

Controlled Form

##### VO

IN the next video, you'll learn about the Controlled Form, which will enable us to do those things.

I'll see you there.


