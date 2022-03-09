task 2 Login Component

    UUID or Date.now() or just a number?
    probably switch this to UUID?? 

features/user/Login.js

1. import reactstrap + Formik components

import {
    Button,
    FormGroup,
    Label,
} from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';


2. create Login component, return the Formik Form

we'll come back and write handleLogin and validateUser


        const Login = () => {
            
            
            return (
                            <Formik
                                initialValues={{
                                    username: '',
                                    password: '',
                                }}
                                onSubmit={handleLogin}
                                validate={validateUser}
                            >
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor='username'>Username</Label>
                                        <Field
                                            id='username'
                                            name='username'
                                            placeholder='Username'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='username'>
                                            {(msg) => (
                                                <p className='text-danger'>{msg}</p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='password'>Password</Label>
                                        <Field
                                            id='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form-control'
                                        />
                                    </FormGroup>
                                    <Button type='submit' color='primary'>
                                        Login
                                    </Button>
                                </Form>
                            </Formik>

            );
        }
        
        export default Login;



4. write handleLogin, create currentUser object using the values from the Form.

    const handleLogin = (values) => {
        const currentUser = {
            username: values.username,
            password: values.password,
        }
      
    };


5.  let's add a random user id.  We can't use Math.random() because it isn't actually random and we might end up with collisions.  we need a truly unique id for every user, and the nice thing is there's a super simple library that does that and only that.  it's called uuid and we installed it at the beginning of the course.  to use it all we have to do is 

    first, import it:

    import { v4 as uuidv4 } from 'uuid';

    then, in our currentUser obect, we'll create an id key and set it equal to the return value of uuidv4().  easy peasy.


    const handleLogin = (values) => {
        const currentUser = {
            id: uuidv4(),
            username: values.username,
            password: values.password,
        }
    };

6. let's also add a default avatar.  we made one special for you, it's an image of unicorn and it's in assets.  you can create your own if you like, any smallish, squarish jpeg image will do.

Then just import it:

import defaultAvatar from '../../app/assets/img/unicorn.jpg'


And set it as a key on the currentUser object:


    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password,
        };
    };

7. Now that we've got a currentUser object, we need to dispatch it to redux on submit.
   So let's start by importing useDispatch and the setCurrentUser action that we made in our userSlice.


    import { useDispatch } from 'react-redux'
    import { setCurrentUser } from './userSlice'

8.  let's get dispatch from useDispatch:

  const dispatch  = useDispatch()


9.  And inside handleLogin:


  
    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password,
        };
        dispatch(setCurrentUser(currentUser))
    };

10. and finally, also inside handleLogin, let's be sure to make the login modal go away by calling that toggleModal uopdate function that we passed in and setting it to false.

11.  now test it out!



import { useDispatch } from 'react-redux'
import { setCurrentUser } from './userSlice'
import {
    Button,
    FormGroup,
    Label,
} from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUser } from '../../utils/validateUser';
import defaultAvatar from '../../app/assets/img/unicorn.jpg'

const Login = ({toggleModal}) => {
    const dispatch  = useDispatch()
    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password,
        };
        dispatch(setCurrentUser(currentUser))
        toggleModal(false);
    };
    
    
    return (
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        onSubmit={handleLogin}
                        validate={validateUser}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Field
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => (
                                        <p className='text-danger'>{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Field
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Form>
                    </Formik>

      );
}
 
export default Login;
