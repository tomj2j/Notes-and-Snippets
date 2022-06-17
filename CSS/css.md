CSS is the language we use to style a Web page.

What is CSS?

- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

A CSS rule consists of a selector and a declaration block.

<<Syntax>>
p {
color: red;
text-align: center;
}

p = Selector
color = Property
red = Value
text-align = Property
12px = Value

Example Explained
p is a selector in CSS (it points to the HTML element you want to style: <p>).
color is a property, and red is the property value
text-align is a property, and center is the property value

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

<<SELECTORS>>

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)

#id
#firstname Selects the element with id="firstname"

.class
.intro Selects all elements with class="intro"

element.class
p.intro Selects only <p> elements with class="intro"

-
- Selects all elements

element
p Selects all <p> elements

element,element,..
div, p Selects all <div> elements and all <p> elements

<<How to ADD CSS>>
When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

Three Ways to Insert CSS
There are three ways of inserting a style sheet:

External CSS  
Internal CSS
Inline CSS

External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

<link rel="stylesheet" href="mystyle.css">

<<COMMENTS>>
Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.

A CSS comment is placed inside the <style> element, and starts with /_ and ends with _/:

Pseudo Classes

li:first-child - First element of the li elements
li:last-child - Last element of the li elements
li:nth-child(odd) or (even) - odd or even elements of the li elements

Stylin Links

a:link
a:visited
a:hover {
color: orange;
font-weight: bold;
text-decoration: underline orangered;
}
a:active
