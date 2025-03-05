# Duck Hunt JavaScript

![Duck Hunt JavaScript](./resources/images/dh-background.png)


# Aim of the game

---

To engage gamers with a fun javascript hunting game.

The client have offered the following guidance for the new site.

1. A JavaScript game to shoot ducks.

---

## UX:



---

## Client Stories

"As a gamer I want a fun engaging game."

---

## Wireframe Mockups



## Phone Size

![phone size wireframes](./)

## Tablet Size

![tablet size wireframes](./)

## Desktop Size

![desktop size wireframes](./)

---

## Game Features

### Hero Image with Text

---

## Future Goals

---

## Technology Used

* [Bootstrap](https://getbootstrap.com/) - For responsive sizing.
* [Font Awesome](https://fontawesome.com/) - For logos
* [VSCode](https://code.visualstudio.com/) - Editor for local coding.
* [GIT](https://git-scm.com/) - Version control
* [GitHub](https://github.com/) - to  host the repository remotely and deploy the site via pages.

---

## Testing

W3 Validation of html flagged a number of errors.

- Duplicate tags and ID's were deleted.
- Unclosed divs were closed.
- Duplicate divs were deleted.
- Unnecessary elements (p, strong) were deleted.
- many unnecessary trailing slashes were deleted.

W3 Validation of css flagged one error.

- Too many values in .card-img-top for 'center/cover'. Deleted center value.

Lighthouse scored 73 on performance

- Flagged image file sizes, contentful paint as main issues. Resized all images to widest dimension of 600px. Fter reformatting and deleting unecessary images the performance score improved to 91.

Wave flagged errors for no text on social media links (disregarded).

### Issues and resolutions

- In searching for an existing workflow I found this YouTube video (https://www.youtube.com/watch?v=v6QUZ5veMlA) and began to search for gifs to use (see content section below).

- The first problem I encountered was how to obscure the ducks behind the grass. In this case I decided to use a layer over the bottom third of the bacground image and duck images. This way when the ducks flew they would appear to come from in the grass. 

 A. The first attempt was to use a file matching the background but with an alpha channel where the sky was so the ducks and the background would show through the alpha channel in the foreground image.

 Problem: How to assign z-index to each layer and size them so the foreground matched over the background.

 Solution: I worked with my tutor to create a section for the fg layer, which I assigned a z-index value of 1.

 B. The solution to problem A worked visually but players could not shoot the ducks. Although the ducks were visible they were effectively behind the fg layer's z-index.

 Problem: How to recreate the foreground without an alpha that obsucred the area of gameplay.

 Solution: I created a new foreground image by cropping the background image and then, with the help of a tutor, I applied absolute positioning and left, right and bottom coordinates of 0 to add it over the bottom third of the background. Note: This solution provides cover for the ducks when they exit game play and return to the start position.

- In order to delay the flight of the birds once the game is launched I added a 2000ms setTimeout to game launch (https://stackoverflow.com/questions/16873889/how-to-create-javascript-delay-function) and I added various animation delays to the animations (https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay).

- in order to open the game in the same window as the game start page I added "_self" to the window.open method (https://stackoverflow.com/questions/43395782/open-new-html-page-in-the-same-tab-via-javascript#:~:text=You%20have%20to%20quote%20the,)%3B%20this%20code%20should%20work.).

- in order to scope the project properly I abandoned the graphical displays for bullet and score counters. I re-integrated my text counters and solved the issue where the divs for the counters pushed the foreground layer down. I used this w3 link to position the divs over the image properly. https://www.w3schools.com/howto/howto_css_image_text.asp

- Add scoring function to remove a point for missed shots.

- In order to prevent double scoring or no scoring or sound because both the window event and event listeners triggered the shoot function, I moved the scoring function from the shoot function to the window event.  I also changed the shoot function syntax from (event) and event.currentTarget to (e) and e.target to allow the function to match the window function syntax for events. Thanks to tutor Oishin for helping me find the solution.

- Fix the dog animation. 

- When I first created the animation the dog walking and stopping to sniff worked. But the jumping and end animation did not show up. I had neglected to create a separate function for the .hidden = false and .hidden = true. Once I fixed that the dog jump worked. The end animation timeout was not working. Once I fixed the dog jumping this animation worked as expected.



### Known Issues

- If no shots are fired the game over and restart button will not launch.

- When using a trackpad if the player drags their finger when clicking at all the cursor will grab and ghost the duck gif instead of shooting and disappearing it.

- The buttons and game over text over the index.html and game-over.html are roughly centered at all times but they do move.  I have positioned them for the bootstrap breakpoints and made a couple subtle adjustments for iPhone landscape and portrait.

---

## Deployment

In order to deploy the [repository](https://jordalenko.github.io/DuckHunt/) from GitHub Pages I performed the following steps.

1. Select **settings** from the GitHub repository.
2. Scroll down to **pages**.
3. Select the **main branch** in **Builds and Deployment** and save.
4. The deployed page link can be found on the sidebar of **GitHub Pages**.

---

## Credits

### Content

Image Sources:

game start page image was sourced from (https://medium.com/everything-80s/the-story-of-duck-hunt-the-original-backbone-of-the-nes-6d4b18c0ff89)

background image was sourced from [repository] (https://github.com/vaielab/DuckHuntCss/blob/master/stage.png)

Duck gifs were sourced from (https://lagg.fr/wp-content/uploads/2022/11/duck.gif) and (https://images.app.goo.gl/QE9Z6SLwoDYBcaMZA).

bullet icon was sourced from (https://beta.arasaac.org/pictograms/search/hunting).

Sound Sources:

Bullet sound effects were sourced from (https://pixabay.com/sound-effects/search/bullet/).

Duck sound effects were sourced from (https://pixabay.com/sound-effects/search/quack/).

Dog sound effect was sourced from (https://mixkit.co/free-sound-effects/dog/).

### Acknowledgements

