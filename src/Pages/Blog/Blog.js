import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-secondary text-black p-2'>
                <h2>Blog page</h2>
                <div className='border p-2'>
                    <h5 className='text-info'>What are the different ways to manage a state in a React application? </h5>
                    <small className='text-white'>
                        Data management is very hard. And as an application grows and evolves, it’s essential to have a strategy in place to manage data. Whatever state management library is used, a robust application well-architected and thoroughly designed can make a massive difference in the developers’ productivity.

                        Thanks to the development of React and new libraries, Redux isn’t the only choice anymore. New libraries and technologies are available to simplify the way of managing data and application states.
                    </small>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>How does prototypical inheritance work? </h5>
                    <p className='text-white'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object
                    </p>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>What is a unit test? Why should we write unit tests? </h5>
                    <p className='text-white'>
                        Unit Testing is a type of software testing where individual units or components of a software are tested
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>React vs. Angular vs. Vue? </h5>
                    <p className='text-white'>
                        <strong className='text-warning'>AngularJS</strong>  was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.
                        <br />
                        <b className='text-warning'>ReactJS </b>
                        Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                        One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.
                        <br />
                        <b className='text-warning'>Vue.js</b> is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;