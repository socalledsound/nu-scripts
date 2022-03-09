React-W3-08-useSpring

https://react-spring.io/hooks/use-spring

--- 

##### SC

useSpring

##### VO

Welcome back.  

As we mentioned in the last video, useSpring is a hook that React Spring supplies to generate spring based animation styles for us.

In this video, we'll take a look at how we'll use it in our nucampsite.

--- 

##### SC

show Menu

##### VO

Right now, on our HomePage, we have a Menu, which shows a featured campsite, a featured promotion, and a featured partner. 

--- 

##### SC

show AnimatedMenu


##### VO
 What we want to do is animate these menu items, as you can see here.  We'll use a spring to do it.

--- 

##### SC

import {animated, useSpring } from 'react-spring';

##### VO

As we mentioned in the last video, we need to import the animated function as well as the useSpring hook into the component in which we want to use them.

--- 

##### SC

focus arrow on the animated.div


                        return (
                            
                            
                                <animated.div style={animatedStyle}>
                                    <Col md className="m-1">        
                                        <Card>
                                            <CardImg src={item.image} alt={item.name} />
                                            <CardBody>
                                                <CardTitle>{item.name}</CardTitle>
                                                <CardText>{item.description}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>  
                                </animated.div>
                            
                            
                        )

##### VO

Then, we need to use the animated function to create a target for our spring-animated style.

--- 

##### SC

const animatedStyle = useSpring();

##### VO

And finally, we need to generate that animated style, which we'll do with useSpring.

--- 

##### SC

useSpring(configObject)

##### VO

useSpring takes in a configuration object, which it uses to generate an animated style.


--- 

##### SC

focus arrow follows the text


const animatedStyle = useSpring({opacity: toggle ? 1 : 0, transform: toggle ?  'scale(1,1)' : 'scale(1,0)' })

##### VO

Typically, that configuration object will consist of one or more style props that you wish to animate.  In our case, we're going to animate both the opactity and also a transform, but you can animate most css style properties, or really almost any type of value using springs.

As you can see, the easiest way to set up the starting point and the ending point for your spring is by using a ternary operator.

This is similar to the way that we've used ternary operators to trigger conditional styles.  

When the value of toggle changes from false to true, the animated div will begin animating from an opacity of 0 to an opactity oif 1, and simultaneously will begin scalling on the y axis from 0 to 1.



--- 

##### SC
https://react-spring.io/common/props


##### VO

The useSpring hook also accepts a number of other props, all of which are listed in the documentation.  

--- 

##### SC

https://react-spring.io/common/configs

##### VO

One of these is a config object.  Using the config object, you can fine tune your spring -- you can control all sorts of aspects of the physical model that the useSpring hook uses to create the transition from one state to another. 


--- 

##### SC

focus arrow follows the text


const animatedStyle = useSpring({ opacity : toggle ? 1 : 0, transform: toggle ?  'scale(1,1)' : 'scale(1,0)', config: {duration: 500}})

##### VO

We'll keep it pretty simple in our example and just specify a duration of half a second for our animation.


--- 

##### SC

focus arrow follows text

    const [toggle, setToggle] = useState(false)

    const animatedStyle = useSpring({ opacity : toggle ? 1 : 0, transform: toggle ?  'scale(1,1)' : 'scale(1,0)', config: {duration: 500}})

    useEffect(() => {
        setToggle(true)
    }, [])   

        return (     
                <animated.div style={animatedStyle}>
                    // card contents in here
                </animated.div>

        )




##### VO

To start our animation, we'll create a stateful toggle variable and initialize it to false.

Then, we'll use useEffect to trigger a state change when the component mounts.  Notice that we're passing in an empty array as a dependency, which means that setToggle will only run once, when the component mounts.

--- 

##### SC

show fininished AnimatedMenu

##### VO

And that's pretty much all there is to it!  In the next exercise, we'll get started, by renaming our Menu to be an AnimatedMenu.  I'll see you there. 