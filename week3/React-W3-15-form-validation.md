React-W3-15-form-validation

--- 

##### SC

Form Validation with Formik


##### VO

Welcome back.

--- 

##### SC

Show ContactForm in browser

##### VO

In the last video, we coded this ContactForm, and it looks pretty nice.

--- 

##### SC



Show ContactForm in browser with console open, type some things in and submit

focus outline around console submission after submit

##### VO

And if we type a few things into various fields in the browser, we see that those fields update, and if we click the submit button, we get that data over here in the console.


--- 

##### SC

show typing name into phone number field.

##### VO

But one thing that we're not doing is, any type of error checking.  So if, for instance, I type a name into the phone number field, that's totally fine with my form.

But it's not totally fine with me.



--- 

##### SC

show ContactForm after validation is working (after this exercise)
type name into phone number, click to next field and error comes back


##### VO

In most forms, we are going to want to enforce certain standards for the form.

If someone types a name into the phone number field, we want to send them an error messsage, that let's them know they need to behave themselves and put a phone number in that field.  

--- 

##### SC

      <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >

##### VO

We call this 'form validation', and Formik makes it really easy for us to validate a form and give feedback to our users, even before they've submitted the form.

We just need to supply our Formik component with a validation function, by passing it into it's 'validate' prop, like this.


--- 

##### SC
this version is in a comment in the ContactForm file.

focus arrow follows text

        const validateContactForm = (values) => {
            const errors = {phoneNum: `that's not your real phone number`};

            return errors;
        }

##### VO

Ultimately, we're going to write our form validation in a seperate utility file, but before we do that, let's talk a bit about how form validation works.

This function that we pass in to our Formik component will have access to the form values as a parameter.

And in order for any errors to display on the page, this function will need to return an object called errors.

For now, I'll just manually create one.  I'll give it a key of phoneNum and set the error equal to a string: 'that's not your real phone number'.  Which would, obviously, be a pretty weird error message, and we'll change that in a minute.  But first let's take a look at our browser and see if this weirdo error is there.

--- 

##### SC



##### VO

And you can see that if I click in the phone number field and then click away...sure enough, the error appears.




--- 

##### SC

                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>

##### VO

Remember how we added these ErrorMessage components below each Field?  

Each of these ErrorMessage components has a name property, similar to the Field components.

When the error object that's returned from the validate function has a key that matches the ErrorMessage name, then that message is displayed inside the ErrorMessage component.

--- 

##### SC

this version is in a comment in the ContactForm component

const validateContactForm = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    return errors;
}




##### VO

Now let's go back and write some real validation.

This time we'll start with an empty errors object.

We'll start by checking values.firstName.  First, we'll check to see if it exists. If it doesn't, then we'll set an error that says 'Required'.

Then, we'll check to see that it's longer than 2 characters and also less than 15 characters and if it isn't, we'll set an appropriate error message.



--- 

##### SC

show this version of the validator in the browser and click into firstName field and then out

##### VO

And, if I go to the browser again, you can see that, depending on the current state of values.firstName, I'll get the appropriate error message if the test fails when I click out of the Field.

--- 

##### SC


const validateContactForm = (values) => {
    const errors = {};
    
    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }
    
    return errors;
}


##### VO

You can also use the new regex skills that you picked up in the regex code challenge.

Here we've got a simple test that just checks to make sure that the values in the field are all numbers; we could get more elaborate with this, but this will work for now.


--- 

##### SC


const validateContactForm = (values) => {
    const errors = {};
    
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!reg.test(values.email)) {
        errors.email = 'please eneter a valid email address';
    }
    
    return errors;
}


##### VO


We can also use regex to test for a valid email....

--- 

##### SC

const validateContactForm = (values) => {
    const errors = {};

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
    
    return errors;
}


##### VO

Or we can just check to see that the string includes an @ symbol, for a quick and straightforward check!

--- 

##### SC

        export const validateContactForm = (values) => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = 'Required';
            } else if (values.firstName.length < 2) {
                errors.firstName = 'Must be at least 2 characters.';
            } else if (values.firstName.length > 15) {
                errors.firstName = 'Must be 15 characters or less';
            }
            if (!values.lastName) {
                errors.lastName = 'Required';
            } else if (values.lastName.length < 2) {
                errors.lastName = 'Must be at least 2 characters.';
            } else if (values.lastName.length > 15) {
                errors.lastName = 'Must be 15 characters or less';
            }

            const reg = /^\d+$/;
            if (!reg.test(values.phoneNum)) {
                errors.phoneNum = 'The phone number should contain only numbers.';
            }

            // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))

            if (!values.email.includes('@')) {
                errors.email = 'Email should contain a @';
            }

            return errors;
        };


##### VO


In the next video, we'll use all of these techniques and create a validateContactFrom that runs all of these checks together. 

I'll see you there.



--- 

##### SC



##### VO

