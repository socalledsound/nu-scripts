React-W3-12-controlled-forms

gh repo: 

--- 

##### SC

Controlled Forms

##### VO
Welcome back


--- 

##### SC

function App() {

  const inputRef = useRef();

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target);
      console.log('submitted value:', inputRef.current.value) 
      inputRef.current.value = '';     
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input type='text' ref={inputRef}/>
          <button type='submit'>submit form</button>
      </form>
    </div>
  );
}

##### VO
In the last video, we talked about uncontrolled forms, and presented them as a simple and straighforwad way to handle form data, by using a reference, and then manually managing that data, outside of react's rendering flow.

--- 

##### SC

Uncontrolled Forms                              Controlled Forms                 
form is outside of application state            form exists in state


##### VO

These types of forms are called uncontrolled forms, and they're a perfectly reasonable way to build a simple form in React. 

But often times our application will benefit by making our form a controlled form, in other words, by storing the form data in React's state.




--- 

##### SC

Controlled Forms
form state is in sync with the UI
respond to user input before form submission
provide dynamic responses
show or hide submit button


##### VO

With controlled forms, our UI can be in sync with the current state of the form.  

We can respond to user input BEFORE submission, provide dynamic responses to input, and modify the UI depending on the current state of the form.   For instance, we can immediately respond to input with  error messages or hide the submit button until the form is properly filled out.


--- 

##### SC


With controlled forms form data exists in state
can be seperate stateful values
or one formData object


##### VO

To do this, we need to store our form data in state.

We can store each piece of data from our form in seperate stateful values, or, more often, store them all in one object, with keys for each input element.


--- 

##### SC

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type='submit'>submit</button>
            </form>
        </div>
    );

##### VO

Let's start with a simple example, similar to the uncontrolled form that we looked at in the last video.

As before, we'll have just one text input and a submit button, inside a form element.


--- 

##### SC

        <div>
            <form >
                <input type="text" value={inputValue}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );

##### VO

BUt instead of assigning a reference to our input, we'll use the value prop directly, and set it to a stateful variable.







--- 

##### SC
import { useState } from 'react';

const ControlledInput = () => {

    const [inputValue, updateInputValue] = useState('');


    return (  
        <div>
            <form >
                 <input type="text" value={inputValue} />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}
 
export default ControlledInput;


##### VO
So we'll start by bringing in useState, and then we'll destructure inputValue and updateInputValue from our call to useState.  And we'll initialize that inputValue as an empty string. 



--- 

##### SC

<input type="text" value={inputValue} onChange={handleChange}/>

##### VO

Then, we need to add an onChange prop to our input, and we'll set that equal to a function which we'll call handleChange.



--- 

##### SC

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
        
    }

##### VO


Inside the handleChange function, we'll take in the onChange event and use the value of the target of that event to update our input value,using the update function that we destructured from useState.



--- 

##### SC

import { useState } from 'react';

const ControlledInput = () => {

    const [inputValue, updateInputValue] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
        
    }
    console.log(inputValue);
    return (  
        <div>
            <form >
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}
 
export default ControlledInput;

##### VO


Each time we update that value, the component will re-render, and the new value of that inputValue variable will be rendered into our input.



--- 

##### SC

show this component in action in the browser

##### VO

And if I go to the browser and open up the console you can see that each time I enter a key, the handleChange function runs, and I log the value, and then update the state, which causes the component to re-render, and so we get this console.log of the inputValue again.

--- 

##### SC

import { useState } from 'react';

const ControlledInput = () => {

    const [inputValue, updateInputValue] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
        
    }
    console.log(inputValue);
    return (  
        <div>
            <form >
                <input type="text" value={inputValue} onChange={handleChange}/>
                {
                    inputValue &&
                    <button type='submit'>submit</button>
                }
                
            </form>
        </div>
    );
}
 
export default ControlledInput;

##### VO

And this is a very basic controlled form.  Now, the form values are being stored in state.  

And, as promised, if I want to, I can wrap the submit button in a conditional, 

--- 

##### SC

type a key into the input to make the button show up

##### VO
and it will only show up after I start typing some values into the input.

--- 

##### SC

show login page


##### VO

But what if we have more than one input? 

Like on this login page -- or on most forms?


--- 

##### SC

import { useState } from 'react';

const ControlledInput = () => {

    const [inputValue, updateInputValue] = useState('')
    const [inputValueTwo, updateInputValueTwo] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
        
    }

    const handleChangeTwo = (e) => {
        console.log(e.target.value);
        updateInputValueTwo(e.target.value);
        
    }

    console.log(inputValue);
    return (  
        <div>
            <form >
                <input type="text" value={inputValue} onChange={handleChange}/>
                <input type="text" value={inputValueTwo} onChange={handleChangeTwo}/>
                {
                    inputValue && inputValueTwo &&
                    <button type='submit'>submit</button>
                }
                
            </form>
        </div>
    );
}
 
export default ControlledInput;



##### VO

Well, obviously, we can just duplicate all of this by adding another stateful variable, and even another handleChange function that targets this new variable, right?

And this should work fine...but it violates a very basic rule of programming: Do Not Repeat Yourself.


NOTE:
IT MIGHT BE BETTER TO JUST SHOW THE WHOLE CODE AND THEN FOCUS OUTLINE OR ZOOM IN TO THE AREA OF THE CODE AS IT IS DISCUSSED:


import { useState } from 'react';
import './LoginForm.css';

const initialFormState = {
    username: '',
    password: '',
}


const LoginForm = () => {

    const [ formData, updateFormData ] = useState(initialFormState);

    const {username, password } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    return ( 
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div>
                     <input type="text" value={username} name='username' onChange={handleChange} placeholder='enter a username'/>
                </div>
                <div>
                     <input type="text" value={password} name='password' onChange={handleChange} placeholder='enter a password'/>
                </div>
                {
                    username && password &&
                    <button type='submit'>login</button>
                }
                
            </form>
        </div>
     );
}
 
export default LoginForm;



--- 

##### SC

const initialFormState = {
    username: '',
    password: '',
}


##### VO

And the good news is, there's a better way.  Instead of adding another variable, we'll use an object as the initial value of our variable.

And that object will have keys for each input that we want to create.



--- 

##### SC

 const [ formData, updateFormData ] = useState(initialFormState);

##### VO

I'll go ahead and change the name of the stateful variable as well as the update function, and then pass the initialFormState object in to useState as the initial value.


--- 

##### SC
 const {username, password } = formData;

##### VO

Then, we can destructure the username and password off of that formData....



--- 

##### SC
 <input type="text" value={username} onChange={handleChange} />
 <input type="text" value={password} onChange={handleChange} />

##### VO
...and use those values, one on each of our inputs.


--- 

##### SC
 <input type="text" value={username} name='username' onChange={handleChange} placeholder='enter a username'/>
<input type="text" value={password} name='password' onChange={handleChange} placeholder='enter a password'/>

##### VO
We'll also add a name property, and we can add a placeholder, to tell people what to do with each of the inputs.


--- 

##### SC

    return ( 
        <div className='form-container'>
            <form >
                <div className='input-container'>
                     <input type="text" value={username} name='username' onChange={handleChange} placeholder='enter a username'/>
                </div>
                <div  className='input-container'>
                     <input type="text" value={password} name='password' onChange={handleChange} placeholder='enter a password'/>
                </div>
                {
                    username && password &&
                    <button type='submit'>login</button>
                }
                
            </form>
        </div>
     );

##### VO

And, we can add some divs around the form and around each input, as you see here


--- 

##### SC




##### VO

Which will allows us to add some basic styling.  You can see that we're wrapping the whole form inside a flexbox container, and then each input container has a little styling to make it look a little nicer.


--- 

##### SC

    const handleChange = (e) => {
        console.log(e.target.value)
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }


##### VO

But the fun and nifty bit is inside our handleChange function, where we're using the nifty tools that you learned about recently: the spread operator and computed properties.

Each time we call update formData, we first spread in the entire contents of formData, then we use a computed property name to create a key of e.target.name, which we then update with the value of that same target.

Very elegant, very concise and very flexible.  

We can add as many inputs as we want now, and as long as we add a new key in our initial state, and consistently name both the value and name, each of the values will be maintained.



--- 

##### SC

    return ( 
        <div className='form-container'>
            <form >
                <div className='input-container'>
                     <input type="text" value={username} name='username' onChange={handleChange} placeholder='enter a username'/>
                </div>
                <div  className='input-container'>
                     <input type="text" value={password} name='password' onChange={handleChange} placeholder='enter a password'/>
                </div>
                {
                    username && password &&
                    <button type='submit'>login</button>
                }
                
            </form>
        </div>
     );


##### VO
IN our return statement, we can add a new condition to the conditional rendering of our button


--- 

##### SC

    return ( 
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                     <input type="text" value={username} name='username' onChange={handleChange} placeholder='enter a username'/>
                </div>
                <div  className='input-container'>
                     <input type="text" value={password} name='password' onChange={handleChange} placeholder='enter a password'/>
                </div>
                {
                    username && password &&
                    <button type='submit'>login</button>
                }
                
            </form>
        </div>
     );


##### VO

And all that's left is to add a submit handler to our form.


--- 

##### SC

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

##### VO

For now, we'll just log the form data, but next week we'll write something very similar which we'll use to actually log in a user!
--- 

##### SC

show the login form in action in the browser

##### VO

And if we go to the browser, you can see that each field updates as I type it, and you can see that if I have something entered into each field, the button will display.  And if I open up the console, you can see that after I click the submit button, we get the contents of the form in the console.


There are of course other things we could add to this form, like error handling, but we'll have to save that for another video, since this one is already quite long.



--- 

##### SC

Formik is a library for creating controlled forms

##### VO
In the next video, you'll learn about Formik, which will make some of these things a little bit easier.  It will provide you with a declarative API for handling these implementation details.

But underneath that API, formik works very similarly to what we've done here, so hopefully this has been a helpful introduction to handling controlled forms in React.



--- 

##### SC

focus arrow on each item as discussed

Uncontrolled Forms                  Controlled Forms
an easy way to get started          offer more possibilities
outside of React's state             in sync with application state
useRef hook                         useState hook



##### VO

Before we go, let's take one more look at both uncontrolled and controlled forms.

Uncontrolled forms can be a quick and easy way to get started.  The state of the form exists completely outside of React, so you manage it yourself, using  the useRef hook.

--- 

##### SC

Uncontrolled Forms                          Controlled Forms   
can retrieve values on submission           can retrieve values on submission 
validating on submission                    validating on submission
                                            instant, responsive validation of a field
                                            conditionally disabling submit button
                                            enforcing input submission
                                            dynamic inputs


##### VO

In general, if your needs are simple, uncontrolled forms can work. If for instance, you just need to retrieve and validate one or more values upon submission, and don't need to dynamically respond to a user, an uncontrolled form might be enough.

But if you want to instantly validate a response, disable or hide a submit button until certain conditions are met, enforce certain standards on an input, or in any way dynamically respond to user input in your UI....then controlled forms are probably a better bet.


--- 

##### SC
Formik logo

##### VO

In the next video, you'll learn about Formik, a form library for React that in many ways gives you the best of both worlds.

It's nearly as easy and quick to get up and running with as an uncontrolled form, and it's powerful and flexible and lets you do anything you'd want to do with a controlled form.

In addition, it's highly optimized and has an elegant, declarative API.  What's not to like?

I'll see you there.

