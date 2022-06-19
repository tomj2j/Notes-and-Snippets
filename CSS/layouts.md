In CSS there are 3 ways of bulding layouts.

1. Float Layouts
   The old way of building layouts of all sizes, uzing the float CSS property.
   Still uses, but getting outdated fast.

2. Flexbox
   Modern way of laying out elements in a 1 dimensional row without using floats.
   Perfect for compnent layouts.

3. CSS Grid
   For laying out elemts in a fully-fledged 2-dimensional grid.
   Perfect for page ayouts and complex components.

------Float---------

The normal Flow has:

- a Default positioning
- Element is in Flow
- Elements are simply laid out according to their order in the HTML Code
  position: relative (default)

Abosolute Positioning:

- Elements are removed from the normal flow: "out of flow"
- No impact on surrounding elemts, might overlap them
- We use top, bottom, left, right to offset the element from its relatively positioned container
  position: absolute

Floats:

- Element is removed from the normal flow: "out of flow"
- Text and inline elements will wrap around the floated element
- The container will not adjust its height to the element

float: left
float: right

------ CLEARFIX ------ for collapsed blocks
When all elements of a block are floats, its height will collapse.
to fix this we could add a clear:both on a new empty div beneth the collapsed element.,
or add a the clearfix thru CSS

.clearfix::after {
clear: both;
content: "";
display: block;
}
