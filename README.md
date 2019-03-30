# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

## Documentation

Step 1: Accomplish stacking function

First, to better understand the structure of the code, I started by put putting borders around each element to make sure I understood how all the elements were nested and worked together.

My first goal was to get the stacking to work correctly for the mobile view.

After putting boxes around all of the elements, I made sure every sub element was in a div so that I could easily manipulate them. I made a div structure so that each product had two main divs: the picture and the rest of the information. Within the info div, I could put and arrange all of the info how I wanted later. My focus at this point was to get the picture and info to stack correctly. I did this by using flex containers within the product item so that I could easily change from a column setup to a horizontal setup.

Step 2: Modal Function

Next I worked on making basic modal pop up following an example online (this is my first time using redux, so I had to look a lot up). I did this separately with an empty popup in order to make sure I got the functionality down correctly before adding content. Next I needed to add the cart to this modal. I first tried adding the cart component to the modal but had trouble integrating it. I tried the other way around and still kept getting errors. Then I tried adding the CartContainer to the ModalRoot container, but got an error this way as well. I decided to switch gears and focus on the css and return to the cart content after.

Step 3: CSS

For the CSS I began by importing the fonts from the sketch file. Then I added color and styled the buttons and I used @media to make the website responsive for different sized screens. I had a bit of trouble adding the photos and ran out of time to adjust the rest of the CSS to make it respond correctly, so some of it doesn’t align the way it should, but most of the structure is there and just needs to be adjusted a bit more to work smoothly.
