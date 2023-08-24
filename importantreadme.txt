Instructions: Create a Simple Gun Game
Objective: Your task is to create a game where the player controls a gun that can shoot bullets towards a moving target. The game will be rendered on a canvas, and the player's performance will be tracked through scores. Below are the requirements for your solution:

1. HTML Structure:
Set up an index.html file.
Your HTML canvas should have the ID gameCanvas.
There should be a button with the ID startGameBtn to start the game.
Include text elements to display the current score and the highest score. They should have the IDs currentScore and highestScore, respectively.
2. Loading Assets:
Load necessary game assets, such as the bullet sound, game over sound, monster image, bullet image, and gun image.
Ensure these asset files are placed in the root directory, or adjust your game's code to find the files accordingly.
3. Gun and Target Mechanics:
Gun Movement: The gun should be able to move left and right on the canvas using the arrow keys. Prevent the gun from moving off the canvas. Test this movement with the Cypress tests left arrow moves gun left and right arrow moves gun right.

Shooting Bullets: The gun should shoot bullets when the spacebar is pressed. A bullet sound should play when this happens. This can be tested using the Cypress test spacebar fires a bullet.

Target Movement: A monster (or target) should be visible on the canvas, moving left and right. It should bounce back when hitting the canvas boundaries. When a player's score goes above 50, the monster's speed should double.

4. Game Mechanics:
Collision Detection: Add logic to detect when bullets hit the monster. When a collision is detected:

The bullet should disappear.
The player's score should increase.
The monster should reappear at a random position on the canvas.
Game Score: Add logic to reduce the player's score if a bullet misses the target. Three consecutive misses should result in the game ending. Use the Cypress test game ends after 3 consecutive misses to ensure this is implemented correctly.

High Score: Use the browser's local storage to keep track of the highest score. This score should update if the current score surpasses the previous high score. Validate the high score updates using the Cypress test checks high score update.

Game End Scenario: If a player misses the monster with three consecutive bullets, the game should end. When this happens, the canvas's background color should turn red and a game over sound should play. The monster's speed should revert to its initial value.

5. Game Start Logic:
Implement functionality to start the game in two ways:
By pressing the startGameBtn.
By pressing the Enter key.
If the game was previously ended or if it's being started for the first time, all game values should reset.




These are our qualification but after this can add additional features for your own practice , like increase speed of target after the score crosses 50 and others


Here is video sample make it as similar as possible:
https://files.codingninjas.in/gun-game-30314.mkv