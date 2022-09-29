import React from 'react';

const Blogs = () => {
    return (
        <div className='img-back container'>
            <h2>1.How Does React Work ?</h2>
            <br />
            <h3>Answer</h3>
            <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            <br />
            <br />
            <h2>Difference between Props and States ?</h2>
            <br />
            <h3>Answer</h3>
            <br />
            <table className="GeneratedTable table table-primary table-bordered table-striped">
  <thead>
    <tr>
      <th>Props</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Data is passed from one component to another.</td>
      <td>The Data is passed within the component only.</td>
    </tr>
    <tr>
      <td>It is Immutable (cannot be modified).</td>
      <td>It is Mutable ( can be modified).</td>
    </tr>
    <tr>
      <td>Props can be used with state and functional components.</td>
      <td>State can be used only with the state components/class component (Before 16.0).</td>
    </tr>
    <tr>
      <td>Props are read-only.</td>
      <td>State can be used only with the state components/class component (Before 16.0).</td>
    </tr>
  </tbody>
</table>

<br />
<br />
<h2>Why we use useEffect ?</h2>
<br />
<h3>Answer</h3>
<br />
<p>A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.

Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.</p>

        </div>
    );
};

export default Blogs;