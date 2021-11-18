# Team page

My solution for the [Team page challenge](https://devchallenges.io/challenges/hhmesazsqgKXrTkYkt0U) from [Devchallenges.io](http://devchallenges.io).

- [**Check out the live demo!**](http://dc-rw-teampage.surge.sh/)

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Acknowledgments](#acknowledgments)

## Overview

![screenshot](./assets/final_desktop.png)

In this challenge, I became more familiar with CSS Grid. I usually solve this kind of problems using flexbox, but, since the layout had differences between the columns and the rows betweeen the desktop and mobile versions, I wanted to check if the css grid would solve it better. Seeing the final result, I think it did! With flexbox perhaps a change in the HTML would be needed, but grid gave me more flexibility to implement this kind of layout.

I also had to learn a bit more about maintaing aspect ratio's in images using CSS. I struggled a little with this implementing the responsive layouts, so I spend some time looking for solutions. Luckily, I found [this amazing post](https://adrienzaganelli.com/blog/time-saving-css-techniques-to-create-responsive-images/) by Adrien Zaganelli which helped me a lot: it gives some techniques to solve it. One of the solutions is using a padded container for your image, and the image itself has full size (this solution is also called "The Netflix way", by the way!). You can see this in the code [here](https://github.com/leticiavna/devchallenges-responsiveweb/blob/main/TeamPage/index.html#L21), inside the `<figure>` element.

For the second challenge of this responsive web path, I used Surge to deploy the site. Something that really caught my attention while using its that Surge is very simple to use, it only needed to run two commands and it already had a static web page deployed. Although very simple, I checked out surge's page and really liked to see that it has more integrations too, so we could use it in a bigger project. Definitively became one of my favorites!


## Built With

- HTML and CSS only!
- Deployed with [Surge](https://surge.sh/)

## Acknowledgments

- [Time-saving CSS techniques to create responsive images](https://adrienzaganelli.com/blog/time-saving-css-techniques-to-create-responsive-images/)
- [CSS Aspect Ratio](https://www.w3schools.com/howto/howto_css_aspect_ratio.asp)