
React-W3-13-intro to formik


https://formik.org/docs/overview
https://formik.org/docs/api/formik


--- 

##### SC

Formik Logo

##### VO

Welcome back.  In the last few videos, we've been looking at how forms in React work.  We've seen both controlled and uncontrolled forms.  In this video, we're going to look at how to use Formik -- a library that provides us with a declarative API for building and managing forms in React.
--- 

##### SC

<Formik>
    // you form goes here
</Formik>

##### VO

Similar to Reactstrap, Formik provides us with a library of components, whichh we'll import and use in our application.

First, there's the Formik component, which acts as a kind of wrapper for your form.


--- 

##### SC

<Formik>

    -- keeps track of form state
    -- exposes event handlers to your form via props

##### VO

The Formik component keeps track of your form's state and exposes that state and the necessary event handlers via props.

--- 

##### SC

import { Formik } from 'formik';

##### VO

To use the Formik component, we first import it

--- 

##### SC

import { Formik } from 'formik';

const SimpleForm = () => {
    return ( 
        <Formik>      
          {
          // form goes here
          }
        </Formik>
     );
}
 
export default SimpleForm;

##### VO

Then, in the return statement of our form component, we add the Formik component as a kind of base wrapper around the child components that we want it to manage.  

--- 

##### SC

import { Formik } from 'formik';

const initialFormState = {
    username: '',
    password: '',
};

const validateForm = () => ({})

const handleSubmit = (values) => {
    console.log(values)
}

const SimpleForm = () => {
    return ( 
        <Formik
            initialValues={initialFormState}
            validate={validateForm}
            onSubmit={handleSubmit}
        >      
          {
          // form goes here
          }
        </Formik>
     );
}
 
export default SimpleForm;


##### VO

That Formik component receives an initial form state as a prop named 'initialValues'.

It also receives a form validation function as a prop named validate and a submit handler as a prop named onSubmit.



--- 

##### SC

        <Formik
            initialValues={initialFormState}
            validate={validateForm}
            onSubmit={handleSubmit}
        >      
        {
            ({handleSubmit, values, errors, touched, handleChange, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                <div>
                     <input type="text" value={values.username} name='username' onChange={handleChange} placeholder='enter a username'/>
                     {errors.username && touched.username && errors.username}
                </div>
                <div>
                     <input type="text" value={values.password} name='password' onChange={handleChange} placeholder='enter a password'/>
                     {errors.password && touched.password && errors.password}
                </div>
                {
                    values.username && values.password &&
                    <button type='submit' disabled={isSubmitting}>login</button>
                }
                
            </form>
            )
        }
       
        </Formik>

##### VO

Inside of the Formik component, we can use regular form elements, just as before, if we want to, but the syntax is perhaps a bit gnarly -- we receive a function inside our Formik component, which will provide the state data and event handlers that we need to manage our form.


--- 

##### SC

import { Formik, Form, Field, ErrorMessage } from 'formik';

##### VO

A much cleaner and clearer approach is to use the the components that Formik provides, which are just light wrappers around standard form elements that automagically accept the desired parameters that the Formik component provides. 

We can import those components at the same time that we import Formik.


--- 

##### SC


    <Formik             
            initialValues={initialFormState}
            validate={validateForm}
            onSubmit={handleSubmit}
    >

        <Form>
            {
                // form in here
            }
            <button type='submit'>submit</button>
        </Form>
    </Formik>



First, we have a Form component, which is a lot like a form element, but it will automatically call the function that we pass into the formik component as our onSubmit method, when the submit button inside our form is clicked -- we don't have to specify that as a prop.


--- 

##### SC

    <Form>
        <Field/>
        <ErrorMesage/>
        <Field/>
        <ErrorMesage/>
    </Form>


##### VO

Inside our form, we can add one or more fields and corresponding error messages.


--- 

##### SC


const SimpleForm = () => {
    return ( 
        <Formik
            initialValues={initialFormState}
            validate={validateForm}
            onSubmit={handleSubmit}
        >      
        <Form>
            <Field type='username' name='username'/>
            <ErrorMessage name='username'/>
            <Field type='password' name='password'/>
            <ErrorMessage name='password'/>
            <button type='submit'>login</button>
        </Form>            
        </Formik>
     );
}

##### VO

And then, we just have to specify a name for each of those Fields and error messages, and Formik will handle the rest.


--- 

##### SC


import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialFormState = {
    username: '',
    password: '',
};

const validateForm = () => ({})

const handleSubmit = (values) => {
    console.log(values)
}

const SimpleForm = () => {
    return ( 
        <Formik
            initialValues={initialFormState}
            validate={validateForm}
            onSubmit={handleSubmit}
        >      
        <Form>
            <Field type='username' name='username'/>
            <ErrorMessage name='username'/>
            <Field type='password' name='password'/>
            <ErrorMessage name='password'/>
            <button type='submit'>login</button>
        </Form>            
        </Formik>
     );
}
 
export default SimpleForm;


##### VO

The code that you're looking at now is, essentially the same controlled form that you saw in the last video, but it's a little more concise and the state management is now being managed by Formik.

One thing to notice here is that our form validation is essentially non-existent.  We'll fix that in a few videos.


--- 

##### SC

show contact form


##### VO
But now, in the next video, let's use Formik to add a ContactForm like the one you see here to our nucampsite.  

As you can see, we'll have a number of fields, so it should give you some good practice at wiring all of this up.

I'll see you there.


