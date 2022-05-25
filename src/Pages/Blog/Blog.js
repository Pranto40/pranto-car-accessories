import React from 'react';
import BlogDetails from './BlogDetails';

const Blog = () => {
    return (
        <div className='my-24 max-w-7xl mx-auto px-10'>
           <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2'>
           <BlogDetails title="How will you improve the performance of a React Application?" blog="Since its introduction, React has changed the way front-end developers think of building web apps. With virtual DOM, React makes UI updates as efficient as they can ever be, making your web app snappier. But, why do moderately sized React web apps still tend to perform poorly?" />
           <BlogDetails title=" What are the different ways to manage a state in a React application?" blog="We can use four types of states: Local state, Global state, Server state, URL state. The local state would be needed to show or hide a modal component or to track values for a form component. Global state is If a user is logged into our app, it is necessary to get and change their data throughout our application.Server state is There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error states.URL state is There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build." />
           <BlogDetails title=" How does prototypical inheritance work?" blog="This is a very popular interview question and something that a lot of JavaScript developers are still unclear about. Objects in JavaScript are based on prototypes. This is unlike popular OOP languages where objects are based on classes. But doesn’t JavaScript have classes? Yes, but there is more to JavaScript classes than it may seem. Therefore, it is highly important to know the difference between class-based inheritance and prototypical inheritance." />
           <BlogDetails title="Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts" blog="If I want to set an array value. If the value of the data in the previous array does not change then I will [...] bring the data in the previous array by using it and then add the data there." />
           <BlogDetails title="You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?" blog="I will be able to find the names from an array by filtering in that product. After filtering, I will add condition with the name of the product to be brought, then that product will be available." />
           <BlogDetails title=" What is a unit test? Why should write unit tests?" blog="Unit testing is performed during the coding stage of a software development project to test individual units of the application. It’s designed to test that each unit of the software code performs as required. A unit might be a class or class method in object-oriented languages and a procedure or function in procedural and functional software languages." />
           </div>
        </div>
    );
};

export default Blog;