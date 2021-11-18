# Interior consultant

My solution for the [Interior consultant challenge](https://devchallenges.io/challenges/Jymh2b2FyebRTUljkNcb) from [Devchallenges.io](http://devchallenges.io).

- [**Check out the live demo!**](https://dc-rw-interiorconsultant.surge.sh/)

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Acknowledgements](#acknowledgements)

## Overview

In this challenge, when I saw the proposed layout, I had some intentions: I wanted to make the hamburger menu with only CSS and finally understand the CSS "position" property, 'cause it was not so clear to me. During development, I ended up finding [this really cool post](https://www.element84.com/blog/responsive-typography) about font measurements (typography), so I decided to use rem for the texts.

The part that gave me the most work was the responsive menu: I was having some problems to be able to render correctly, like in the layout, the "open" state and the "close" action, without using javascript. I ended up using an html `<a>` tag and the css :target pseudo-class (raised by the tag's onclick event) to be able to apply a different style when the menu is open.

About the position property, I spent a lot of time studying it to implement the "tweet" div in the correct place, which was "on top" and positioned more to the left of the image. In this case, what gave me more work was the responsiveness, because with the position:relative, the tweet div changed a lot where it was at each breakpoint. Although I've seen a lot of stuff about position, I thought I'd better solve this problem using flexbox + some margins in the tweet div.

For deploying, I had such a nice experience in the [previous challenge](https://github.com/leticiavna/devchallenges-responsiveweb/tree/main/TeamPage) with Surge that I used it again for this one!

## Built With

- HTML, CSS and a little bit of JS
- Used [material icons](https://fonts.google.com/icons) too
- Deployed with [Surge](https://surge.sh/)

## Acknowledgements

- [CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)
- [Advanced positioning - A friendly tutorial about static, relative, absolute, and fixed positioning](https://www.internetingishard.com/html-and-css/advanced-positioning/)
- [Hamburger CSS (no JS)](https://dev.to/ljcdev/hamburger-css-no-js-2dfa)
- [CSS Position](https://devchallenges.io/learn/tutorial/css-position)
- [Responsive Typography: rem, em, and px](https://www.element84.com/blog/responsive-typography)
