# Project1

## Project Description

[Click to play!](https://eugenelye.github.io/Project1/)

This project is about creating a game called "Guitar Hero". It is simplified version of the Guitar Hero game. This game was chosen for the project as it is a game where most people will know how to play and it is simple for children to play as well. The vibrant colors of the game also create a feel good factor for the players.


## Instructions
When the "Start Game" button is pressed, the blocks will start falling. 

Users will have to press the associated keys shown on the screen when the keys fall to the bottom of the screen. 

When the correct key is pressed as the block is at the bottom, it will register a score. 

If the key is not pressed when the block falls beyond the bottom of the screen, it will register a miss. 

The game will end if there are more than 5 misses or the game time of 30 seconds are up. 

## Game Images

![StartScreen](https://i.ibb.co/nLbM3np/Screenshot-2022-06-09-at-3-33-51-PM.png)
![GameImage](https://i.ibb.co/hLXHXKq/Screenshot-2022-06-09-at-4-03-05-PM.png)
![restartbutton](https://i.ibb.co/s1wsbK0/Screenshot-2022-06-09-at-4-04-50-PM.png)

## Programming Languages 
HTML CSS and Javascript are the programming langagues used for this project. 

## Challenges of the Project    

### Making the rectangles falling randomly
Initially, the rectangles were created randomly and condition were set to make it fall again once it reaches the bottom. However this is not random as the block which fall to the botom first will be generated again on top, creating a standard loop. After that it was changed to making rectangles in a setTimeout function so that it is generated every 3000/speed timing.

### Making the rectangles stop falling after the time ends or misses reach a certain number.
I could not make the animation stop as initially, I put the function of fallRect in the clear interval. After realising that it needs to be asssigned to a variable, the clearInterval works. This is one of the things I learned in doing this project.


## Known Problems of The Game
The score and the game over are shown in an alert function. It can be improved by showing it as a pop up box of text, beautifying the score and the interface of the game. The interface of the game can also be improved by allowing game users to change the game time and the speed of the falling blocks. 
