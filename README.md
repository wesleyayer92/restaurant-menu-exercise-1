
The goal of these exercises is to sharpen your DOM programming skills by building an interactive restaurant menu explorer.

In `scripts/menu.js`, the `menu` variable contains all of the information about the food served at the restaurant.

These food items are organized in arrays in an object. The keys of the object have names like `"lunch"` and `"dessert"`.

# Small exercises: Category list

## Extract names of categories

Write a function (named `getCategories()`) that returns an array of the category names from the `menu` variable.

(Hint: use the `Object.keys()` function!)

## Wrap names in `<li>` elements

Write a function (named `nameToListItem()`) that accepts a category name (like `"breakfast"`) and returns a new `<li>` DOM element with the category name set as its `.textContent`

Make sure to `return` the new element.

## Write a function that transforms an array of category names to an array of `<li>` elements.

Create a new function (named `categoriesToListItem()`). It should expect to receive an arrary of strings.

It should use your `nameToListItem()` function to do the transformation.


## Use `getCategories()` in combination with `categoriesToListItem()`

Call your `getCategories()` function to extract the name of the categories.

Take the result and pass it to the `categoriesToListItem()` function

## Render the list items to `.js-menu`

Write a function that can append a single `<li>` to the `.js-menu` element.

Apply that function to your array of `<li>` elements using `.map`

(Hint: this is the third step in transforming the category names into DOM elements the user can see. The first two are `getCategories()` and `categoriesToListItem()`)

# Medium exercise: Handle category list click

## Add a click handler to each of the `<li>` elements

- First, do nothing but `console.log()` the category name (i.e., the text between the opening and closing tag)
- Make sure to add the click handler to the elements *before* you `.appendChild` them

## Retrieve value for a category name

Write a function that accepts a category name (such as "lunch") as an argument and returns the array of lunch items in the `menu` variable.

# Large: Render food items to page

## Create an `itemToCard` function

Your `itemToCard` function should accept an item object such as this one:

```js
{
    name: "Ice cream",
    isVegetarian: true,
    isVegan: false,
    description: "There's always room for ice cream",
    price: 4,
    photo: ""
}
```

Wrap the item in elements:

```html
<div class="card">
    <h2>Ice cream</h2>
    <h3>4</h3>
</div>
```

## Create an `appendCardToMainContent()` function.

It should accept a single card element and append it to the `.js-main-content` element.

## Update click handler for each of the `<li>` elements

When the user clicks on a category name, use that name to look up the value in the `menu` object.

Pass that value to the `itemToCard()` function.

Then pass the card to your `appendCardToMainContent()` function

## Clear out the `.js-main-content` area

You might notice that the main content area keeps appending items as you click on different category names.

When the user clicks a category name, make sure to set the `.textContent` to an empty string!

# Bonus

## Add images to each card

The `images` folder contains an image for each food item. Change the data in `menu.js`, updating the `"photo"` property of each item with the path to the corresponding food photo.

Update your JS code so that it creates an `<img>` element that displays the `"photo"` for each item.

## Add a vegetarian filter

Your users need to be able to filter out any non-vegetarian items.

Add an element to the page that the user can click to toggle the value of a boolean variable.

Use this variable to determine whether to show only vegetarian items or not.

## Add a vegan filter

Add another element, but one that toggles a different boolean variable. This variable should determine whether to show only vegan items or not. 