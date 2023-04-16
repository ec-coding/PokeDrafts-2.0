<p align="center">
<img src="https://github.com/ec-coding/PokeDrafts/blob/main/public/css/pokedrafts.png" width="50%">
</p>
<h2 align="center">A customized deck builder app for the Pokémon Trading Card Game.</h2>
<p align="center">
<img src="https://github.com/ec-coding/PokeDrafts-2.0/blob/main/images/pokedrafts-preview1.gif" width="75%">
</p>
<h3 align="center">Built for the 100Devs 100-Hours Project</h3>
<p align="center">
    <h3 align="center">Access the App <a href="http://pokedrafts.herokuapp.com/" target="blank">Here</a></h3>
    <p align="center">Hosting service has been changed from Heroku to Railway.</p>
</p>

## How It's Made:

**Tech used:** 
    <img src="https://img.shields.io/static/v1?label=|&message=EJS&color=cbb148&style=plastic&logo=ejs">
    <img src="https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3"/>
    <img src="https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=|&message=BOOTSTRAP&color=316c5e&style=plastic&logo=bootstrap"/>
    <img src="https://img.shields.io/static/v1?label=|&message=REACT.JS&color=4a935c&style=plastic&logo=react"/>
    <img src="https://img.shields.io/static/v1?label=|&message=NODE.JS&color=cdf998&style=plastic&logo=node.js"/>	
    <img src="https://img.shields.io/static/v1?label=|&message=MONGO-DB&color=cdd148&style=plastic&logo=mongodb"/>
    <img src="https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express"/>

PokéDrafts is a full-stack web app that allows you to build your very own deck from various sets of the Pokémon Trading Card Game.

Progress Images:

<a href="https://imgur.com/a/zowV6hQ">Build v1.0</a>

<a href="https://imgur.com/a/54xKnGd">Build v2.0 (WIP)</a>

## Optimizations

- I plan to implement the following features over time:
  - Add a counter that shows which slide you are currently on (in both Search Results and Deck).
  - Allow users to manage more than one deck.
  - Allow users to toggle their decks as public or private.
  - If a deck is made public, allow other users to view them.
  - Render a limited number of files initially, and have the carousel render more as it goes on.
  - Provide an option for users to sort the deck in various ways.
  - Enable more avenues of authentication
  - Show how much of each card is in a deck.
  - When a user is typing in the name of a card, have the search bar offer suggestions.
  - Highlight the button of whichever tab is active.
  - No more than 4 of each card can be added to a deck, with the exception of energy cards.

## Lessons Learned:

Building this app has allowed me to learn and exercise a variety of different coding paradigms, such as MVC architecture, Google authentication, and CRUD operations.

## Completed Goals:

- The following features have been sucessfully implemented in the app:
  - Utilize MVC architecture to organize all server-side code.
  - Enable Google Authentication for user logins.
  - Ensure that each user has access to their own individual deck.
  - Arrange the user's deck as an object on MongoDB.
  - Successfully deploy app on Heroku.
  - Establish dynamic carousels to accommodate all card results.
  - Create tab views for Search, Search Results, and Deck.
  - When a user deletes a card, remove the slide it is on as well.
  - When the user hits the submit button on Card Search, switch the tab to Search Results.
  - Add radio inputs for Pokemon Type and Card Type.
  - Add checkbox inputs for Card Set.
  - Add a card counter on the Deck panel.
  - A completed deck must have exactly 60 cards.
  - A deck cannot exceed 60 cards.
  - How do you add information from an API's dataset to your own database?
  - How do you connect a user's ID to a card they added into the database?
  - How can I remove a user's entire deck without affecting the cards in another user's deck?

## Project Logs:

8/18/2022
1. Began work on the app. Established front-end files and back-end initialization.
2. Built basic page layout with name search bar. 
3. Added additional checkbox parameters in the form of Type, Card Type, and Set.

8/19/2022
1. Registered account on https://pokemontcg.io/ and obtained personal API key.
2. Connected API key with app.
3. Linked API url with a fetchURLText variable that connects it to the results garnered from user's the search parameters.
4. Successfully managed to draw card images upon using the search feature. <a href="https://i.imgur.com/sBmMzsl.png">Preview</a>

8/20/2022
1. Established database for the app through MongoDB with a unique Mongo URI.
2. Began work on click event listeners to allow users to add cards to the deck aspect of the page.

8/21/2022
1. Modified search results to return nothing if the user's input in the search bar does not align with the other parameters.
2. Successfully hosted app on Heroku.

8/22/2022
1. Began work on connecting click events to functions on the back-end, namely POST requests to allow users to add cards from the search results to their deck.
2. Cards can now be added to the deck, but they overwrite previous cards that were added. Pending fix.

8/24/2022
1. Developed schema for card objects being uploaded to mongoDB.
2. Schema properly displays the card name and image URL. <a href="https://i.imgur.com/eihLQ5T.png">Preview</a>

8/25/2022
1. Added 'Delete Deck' button which wipes all cards from the deck section of the app. It is currently global, since no authentication has been added yet.
2. Fixed GET request so that it properly displays cards that users had added to the deck before reloading the page.

8/26/2022
1. Studied tree structure to better understand how to append HTML elements on card generation.
2. Current structure appends card names (li) and card images (img) to the card 'container' which is their parent div element.

8/27/2022
1. Discovered that the main ejs file had not been placed in the proper directly, so many styling changes were not being applied. Now placed in proper directory.
2. Began work on carousel function to accommodate single card displays via separate slides in both search results and deck.
3. Due to Heroku uploading troubleshoots, updated mongoDB IP address to accommodate global access via address 0.0.0.0.

8/28/2022
1. Due to frustrations with more Heroku upload issues, began working on ways to split code into multiple segments, via MVC architecture.
2. Back-end code has been successfully split into routes and controllers. Pending further split to include models.

9/3/2022
1. Added Google Authentication to allow individual deck creation for each logged in user.

9/5/2022
1. Implemented successful use of single-card removal from the user's deck via DELETE request 

9/10/2022
1. Restructured server-side code to include controllers.
2. Renamed router directories to better relate to their functions.
3. Enabled object name displays on mongoDB by linking it from the front-end code.
4. Fixed user first name display on the profile page.
5. Connected user ID's to each card that is added to the deck.
6. Fixed redirects when re-loading the site as current user. (/decks -> /profile in /middleware/auth.js)

9/11/2022
1. Delete Deck button now only deletes individual user's deck, and not everyone's deck

9/12/2022
1. Implemented Card Counter to show how many cards exist in each user's deck.
2. Implemented dynamic counter to update card count number each time user adds a card to their deck.
3. Enabled single card deletion to also update the card counter appropriately.
4. Blocks users from adding cards to their deck once the card counter has reached 60.

9/15/2022
1. Added update bar on Search Results to show the names of cards added to the user's deck.

9/16/2022
1. Added update bar on Deck to show the names of cards deleted from the user's deck.
(This was done by adding data-name="<%= cards[i].name %>" to the deck-slide li on Decks.ejs)

9/17/2022
1. Converted Cards schema into Deck schema, which organizes a user's added cards into their own individual deck on mongoDB

9/19/2022
1. Finally fixed the issue with a user not being able to delete individual cards from their deeck without having to reload the page.
- .at(-1) was added to the card variable, and returned as the json response, since that was the last card added to the deck db.
- This is then returned to the front-end's fetch request, and subsequently rendered on the HTML.

9/20/2022
1. Added 3 new card sets onto the UI: Team Rocket, Gym Heroes, and Gym Challenge.

9/27/2022
1. Adjusted view to better accommodate mobile devices. Width now adjusts to the smallest mobile screen.

9/28/2022
1. Added counter to card search results to display how many cards were returned after clicking "Submit".

9/29/2022
1. Added instructions on each panel to assist with user navigation.

10/2/2022
1. Experimented with bootstrap modals for card images. There was difficulty with implementation since the "buttons" (aka card images) are not static. 

10/4/2022
1. Modals have been postponed, since further research is needed on how to join them with dynamic elements.
2. EJS Headers and Footers have now been divided into their own partials.

10/8/2022
1. Currently revamping app with React framework.

10/13/2022
1. Added React components for Search Parameters, Search Results, and User Deck.
2. Implemented multi-card carousel which can display up to 18 results at a time.

10/15/2022
1. Due to legacy code complications, the react version of this app will be split into another repo and worked on separately. The original version will still be accessible.

10/18/2022
1. Added modals for each card, which displays further information on said card, as well as an "Add to Deck" button.

10/24/2022
1. Implemented icons via React props to replace certain text drawn from an API. Elements will now be displayed as their respective icons on card modals.

10/26/2022
1. Modal design has been revamped and now shows card attributes, as well as pricing data lifted from current market values.

10/29/2022
1. Added components for card attributes and icons to accommodate different text blocks and images depending on card type.

10/31/2022
1. Implemented looping carousel slides for card search results via array chunking.
2. Began work on UI update by adding icons next to search parameters.

11/1/2022
1. The design and functionality for the Text, Card Type, Set, and Type parameters have all been completed on the Search Cards tab.

11/13/2022
1. Began implementing Google authentication for client-side code using oauth and updated passport modules.

11/15/2022
1. Google auth completed on both client and server-side code. 
2. Scrapped site-based registration to minimize security issues.

11/16/2022 
1. Updating deck component with card stacks to visually represent quantity of cards with similar IDs.

12/5/2022
1. Modifying search results to display card rears in place of empty results.

12/9/2022
1. App was successfully hosted on Railway.

12/10/2022
1. Began CSS updates on tab content elements including profile page and card modal.

12/18/2022
1. Continuing updates on UI and site layout.

12/20/2022
1. Added new set options for WotC Black Star Promo cards under search parameters.

12/27/2022
1. UI has been updated to remove WIP features (for enhanced presentation).

1/3/2023
1. Currently researching more into React states to implement tri-way sorting (ascending, descending, original state).
2. Sorting currently accommodates ascending and descending for respective categories, such as name, set ID, rarity, etc.

1/8/2023
1. Updating fonts for card abilities and attacks to better fit with modal width.
