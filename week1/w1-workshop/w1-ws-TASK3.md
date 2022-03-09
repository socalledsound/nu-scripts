./components/Header.js

1. let's start by doing like we did with our i-heart-react app and moving the Header into it's own component.  We're going to end up using it on several pages next week!
2. Make a new file named Header.js in components folder.  
3.  Create a stateless functional component named Header.  
4. cut the NavBar chunk of code out and paste it into Header.js return statement
5. cut the reactstrap imports and the logo import out of App.js and paste them into Header.js
6. CHANGE THE PATHNAME FOR THE LOGO:
import NucampLogo from '../app/assets/img/logo.png';
7. export default Header
8. In App: 
import Header from './components/Header';





./components/Footer.js

1. Now let's also make a Footer commponent for the bottom of the page.

2. make a new file named Footer.js

3. make a new SFC named Footer

4. import { Container, Row, Col } from 'reactstrap';

5. inside return statement make a footer with className site-footer

6. Inside, first a Container.  Inside that a Row.

7.  Inside the Row, three Columns.  So, Col x 3.

FIRST COL
8.  In the first Col, we'll pass in two props:
xs={{ size: 4, offset: 1 }} sm='2'

9. Inside that COl, first a h5 with the text Links
  <h5>Links</h5>

  10. then a ul with a className of 'list-unstyled'

  11. in the UL for list items:
                              <li>
                                Home
                            </li>
                            <li>
                               Directory
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact
                            </li>

12.  We'll style these -- and also make them actually work!  Next week.
SECOND COL
13. Second Column Col has three props:
xs='6' sm='3' className='text-center'
14. h5 with social
 <h5>Social</h5>

 15. maybe just copy and paste all of this -- it's a lot of typing and time probably better spent chatting or whatever.
                    <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>

THIRD COL
16. Third Col has two props:
sm='4' className='text-center'

17. IN there:

                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' />{' '}
                            campsites@nucamp.co
                        </a>

18. export default Footer

19. import Footer into App.js and use it below the CampsitesList:
function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}
