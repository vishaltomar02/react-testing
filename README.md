# Manual testing is done by an individual and takes a lot of time to get completed and would require the app to be tested wholly even when a small bug gets resolved.

## Automated Testing:
Automated tests are basically programs that automate the task of testing your software code.
● Not time consuming
● Consistent, reliable and not prone to errors
● Identification and fix of breaking features are easier to test

## Jest:
Jest is basically a javascript testing framework.
Its a test runner that find tests, runs those tests, and determines whether a test gets passed or fails and then reports it back to the developer in a human readable format.

## RTL:
React Testing Library (RTL) by Kent C. Dodds got released as alternative to Airbnb's Enzyme. While Enzyme gives React developers utilities to test internals of React components, React Testing Library takes a step back and questions us "how to test React components to get full confidence in our React components": Rather than testing a component's implementation details, React Testing Library puts the developer in the shoes of an end user of an React application.

RTL is a javascript testing library that provides a virtual DOM for testing React components. It provides us a virtual DOM to interact with and verify the behaviour of a react component.
Assertions:
When writing tests, many times we need to check whether some values meet certain conditions. Assertions decide whether a test passes or fails.
Expect:
expect(value)
Expect expects a value as its first argument and this argument should be the value that your code produces. Usually we expect with a “matcher” function to assert something about the value that is expected.
Docs: https://jestjs.io/docs/using-matchers Jest-Dom: https://github.com/testing-library/jest-dom
What Should We Test?
    
## Test that the component renders.
Test that the respective component renders with the props passed.
Test that the component renders in different states.
Test that the component reacts accordingly to the various events that gets triggered.
What not to Test?
We should not test the implementation of a certain function or feature or basically how a component is implemented.
Third Party code is not needed to be tested at all.
No need to test the code that is not important from a user point
Of view. For Ex: how a date is shown to the user in a human readable format, how a certain animation is implemented, how a bottomModal is getting opened and closed.
## RTL QUERIES:
RTL queries are the various methods that are provided by the React testing library which helps to find an element.
## FOR SINGLE ELEMENTS:
1. getBy.. 
2. queryBy.. 
3. findBy..

## FOR MULTIPLE ELEMENTS:
1. getAllBy.. 
2. queryAllBy.. 
3. findAllBy..

The ‘..’ at the end are the different suffixes which are of the following:
* Role
* LabelText
* PlaceHolderText ● Text
* DisplayValue
* AltText
* Title
* TestId

## getBy.. Queries

getBy queries return the matching node for the respective query and will return an error if no element or node is found or if more than one nodes are found.
Priority Order
* getByRole
* getByLabelText
* getByPlaceholderText
* getByText- div, span, p
* getByDisplayValue
* getByAltText
* getByTitle - span
* getByTestId - <span data-testid=“random”></span> 

### getByAltText and getByTitle usage varies in different browsers.
queryBy and QueryAllBy are used for the elements which are not present in the DOM yet
findBy is used for the cases when some element is not rendered yet and will be rendered in some amount of time, maybe after we get some response from an api or it can also disappear based on some other condition.
findBy returns a promise with the matched element or elements and has a default timeout of 1000ms.
User-event:
https://testing-library.com/docs/user-event/intro
This library is the recommended way to simulate the user interactions while using react-testing-library by dispatching the events that would happen if the same interaction happened in a browser.
To test custom react hooks we can use renderHook method from react testing library. MSW:

### Important Links
https://mswjs.io/docs/
https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano?hl=en
Migrating from Enzyme
https://testing-library.com/docs/react-testing-library/migrate-from-enzyme
    
