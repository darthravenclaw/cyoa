'use strict'
// variables
var prompt = require('readline-sync');
var chalk = require('chalk');
var say = require('./say.js')
var name = "sam";
var place = "Start";
var choices;
var answer;
var spin = 0;
var apple = false;
var applePie = false;
var poisonedApple = false;
var candy = false;

// main program

var name = prompt.question("what is your name?");
story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before");
whisper("Come here " + name + " Come here");
wait();
story("You can't place the voice, but there is something familiar about it. What do you do?")
choices = ["Think some more", "go into the forest", "ignore it and go home"];
answer = questionMC(choices, "what do you do?");
if (answer == "Think some more") {

    story("You think about it some more and are sure this forest was not here yesterday.  Where did it come from and how does it know your name? \n What do you want to do?");
    choices = ["go in", "go home"];
    answer = questionMC(choices, "what do you do?");
    if (answer == "go in") {
        enterForest();
    } else {
        homeEarly();
    }
} else if (answer == "go into the forest") {
    enterForest();
} else {
    homeEarly();
}


// Places
function enterForest() {
    story("you enter the forest and soon become hopefully lost.");
    story("While you can't find your way out you do see a few places of interest.");
    forest();
}

function forest() {
    story("There is a house made of candy");
    story("There is a fruit vender");
    story("There is a small opening in the trees with a ring of mushroom in the middle");
    choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
    answer = questionMC(choices, "what do you want to do?");
    if (answer == "Candy house") {
        story("Did you learn nothing as a kid?");
        wait();
        story("You are really going to go a house made out of candy in a mysterious dark forest?");
        wait();
        story("really?");
        choices = ["yes", "no"];
        answer = questionMC(choices, "Really?");
        if (answer == "yes") {
            candyHouse();
        } else {
            forest();
        }
    } else if (answer == "Fruit vender") {
        fruitVender();
    } else if (answer == "Field") {
        field();
    } else if (answer == "Hang out here") {
        story("You hang out here a while.");
        wait();
        story("birds chirp, light shines through the leaves and you are a minute older.");
        wait();
        forest();

    } else if (answer == "spin in a circle") {
        spin = spin + 1;
        if (spin == 3) {
            story("Why are you doing that?");
            story("It makes me a little nauseous just to watch you");
        } else if (spin == 4) {
            story("Seriously, please stop");
            story("I can't keep watching this");
        } else if (spin == 5) {
            story("Oh god I have to go");
        } else if (spin > 5) {
            story("We are sorry but the narrator for this bit went home sick.");
        } else {
            story("You let you arm fly freely at your side as you spin in a circle.");
            wait();
            story("Around and around you go as the world blurs in front of you");
            wait();
            story("you get dizzy and fall to the ground");
            wait();
            story("you take a moment to gather your thoughts then you stand back up");
        }
        wait();
        forest();
    }
}

function field() {
    story("you come across an open field and in the middle there is a ring of mushrooms");

    story("it feels like you are being watched");
    wait();
    story("what do you do?");
    choices = ["eat a mushroom", "Look around", "hide"];
    answer = questionMC(choices, "what do you do?");
    if (answer == "eat a mushroom") {
        story("You really should not eat mushrooms you can't identify.");
        story("you start not to feel well");
        story("I would like to say you pass away peacefully, but there is no way to feel peaceful with that much vomiting.");
        story("now the pixie will need to hope for a good rain");
        story("ugg, the smell is something I won't soon forget.");

    } else if (answer == "Look around") {
        story("You examine the clearing closely and think you saw something move.");
        story("it was smaller than a squirrel and could fly");
        story("you think it might be a pixie, but how to lure him out?");

    } else if (answer == "hide") {
        story("You find a place to hid inside a bush and look for whatever it was that you saw.");
        story("from behind you, you hear");
        pixie("what you doing?");
        story("what do you do?");
        choices = ["talk to it", "turn around", "stay quite"];
        if (apple) {
            choices.push("offer it an apple")
        }
        if (poisonedApple) {
            choices.push("offer it the poisoned apple")
        }
        if (applePie) {
            choices.push("offer it the apple pie")
        }
        if (candy) {
            choices.push("offer it the candy")
        }
        answer = questionMC(choices, "what do you do?");
        if (answer == "talk to it") {

        } else if (answer == "stay quite") {
            pixie("so your too good to talk to me huh");
            pixie("big old person to proud to talk to a pixie");
            story("you hear the pixie fly away in disgust");
        } else if (answer == "offer it an apple") {
            pixie("apples, I can get apples anywhere");
        } else if (answer == "offer it the poisoned apple") {
            pixie("apples, I can get apples anywhere");
            story("He eyes the apple closely");
            pixie("wait I sense something special about that one.");
            story("he takes the apple and starts to eat");
            pixie("this is good, thanks");
            pixie("because you gave me this great apple I will help you out.");
            pixie("I know of a secret way out of the forest and can lead you.......");
            story("At that the pixie dies");
            story("without his help you will be stuck in this forest forever.");
            story("hope you like apples");
        } else if (answer == "offer it the apple pie") {
            story("the pixie looks at the apple and licks his lips.");
            pixie("That looks delicious.");
            story("the pixie attacks the pie flying right into the center");
            story("You are scared to put you hand anywhere near the tornado of pixie, apples and crust ");
            story("after a few minutes the pixie comes to a rest in the middle of the pie. A look of satisfaction on his face.");
            pixie("that was great, thanks");
            pixie("that is almost as good as candy");
            pixie("let me show you the way out of as a gesture of thanks.");
            story("With that the pixie leads you out to safety");

        } else if (answer == "turn around") {
            story("you turn around just to see the pixie fly away.");
            story("your sudden movement scared him off");
        } else if (answer == "offer it the candy") {
            story("You offer him a piece of candy and he gets visibly excited");
            pixie("candy is my favorite");
            story("he grabs you whole bag of candy and flies off faster than you can react.");
            story("you just start thinking you have been mugged by a fariy when you feel him land on your shoulder");
            pixie("the gift of the candy was almost too much to accept.");
            pixie("fortunately I have something to offer you.");
            pixie("I offer you this choice come back with me to faerie and you will live forever in a party that never stops.");
            pixie("or if you want I can send you home");
            choices = ["home", "faerie"];
            answer = questionMC(choices, "What do you do");
            if (answer == "home") {
                story("the pixie leads you through the forest until you start to see things you recognize");
                story("you turn around to thank the pixie only to see no pixie or forest, just the park you can remember");
            } else if (answer == "faerie") {

            }
        }
    }
}

function fruitVender() {
    story("You come to an old man selling fruit");
    story("he looks you up and down and starts talking to you");
    oldman("hey there little one would you like some apples?");
    oldman("I have many kinds of apples.");
    oldman("I have big apples, small apples, apple pie and poisoned apples");
    oldman("what can I get for you?")

    choices = ["small apple", "large apple", "apple pie", "poisoned apple", "buy nothing go back"];
    answer = questionMC(choices, "what do you want?");
    console.log(answer);
    if (answer == "small apple" || answer == "large apple") {
        story("you get a nice shiny apple. It might make a good lunch later.");
        wait();
        fruitVender();
    } else if (answer == "apple pie") {

        story("you get nice Apple Pie. It smells amazing you can't wait to eat it, but should probably wait until later.");
        wait();
        applePie = true;
        fruitVender();
    } else if (answer == "poisoned apple") {

        story("A poisoned apple, that might come in handy");
        poisonedApple = true;
        wait();
        fruitVender();
    } else {
        forest();
    }
}

function candyHouse() {
    story("You see a house completely made of candy.  There are candy cane window frames and the smell of the gingerbread wall is overwhelming ");
    story("you see a nice old lady inside preparing dinner");
    story("there is a large pile of candy on the table");
    story("what do you want to do?");
    choices = ["talk to her", "steal the candy", "run away"];
    answer = questionMC(choices, "what do you do?");
    if (answer == "talk to her") {
        story("well hello little one. you look good enough to eat.");
        story("why don't you sit down and have some tea?");
        if (poisonedApple) {
            choices = ["tea", "run away", "offer her the apple"];
        } else {
            choices = ["tea", "run away"];
        }
        answer = questionMC(choices, "what do you do?");
        if (answer == "tea") {
            story("you have a nice cup of tea while the old lady starts the oven.");
            story("after a few minutes you start feeling drowsy");
            story("you fall into a sleep you never wake up from. Don't worry the old lady will eat well tonight.");
        } else if (answer == "run away") {
            story("you try and run but she is fast for an old lady");
            story("She grabs you and start forcing you towards the oven");
            story("she is strong. To strong to fight off.");
            story("I would explain what she does next but I am try to keep this pg13.");
            story(" Needless to say the witch will eat well tonight.");
            wait();
        } else if (answer == "offer her the apple") {
            witchEatApple();
        }
    } else if (answer == "steal the candy") {
        story("you slowly creep into the room");
        story("all is going well when your foot comes down on the loose board and a small creaking sound comes forth");
        story("what do you do");
        choices = ["hide", "grab candy and run"]
        answer = questionMC(choices, "what do you do?");
        if (answer == "hide") {
            story("You hide behind a chair just before she turns around");
            story("she eyes the room.  You know there is no way to get to the candy without her seeing");
            candyHouse();

        } else if (answer == "grab candy and run") {
            story("you grab the candy, but she is fast for an old lady");
            story("she grabs you arm and start pulling you towards the oven");
            if (poisonedApple) {
                story("what do you do?");
                choices = ["offer her the apple", "fight free"];
                answer = questionMC(choices, "what do you do?");

                if (answer == "offer her the apple") {

                    witchEatApple();
                } else if (answer == "fight free") {
                    story("she is strong. To strong to fight off.");
                    story("I would explain what she does next but I am try to keep this pg13.");
                    story(" Needless to say the witch will eat well tonight.");
                    wait();

                }
            } else {
                story("she is strong. To strong to fight off.");
                story("I would explain what she does next but I am try to keep this pg13.");
                story(" Needless to say the witch will eat well tonight.");
                wait();
            }
        }
    } else if (answer == "run away") {
        forest();
    }
}

function witchEatApple() {
    story("You offer her the apple and she laughs");
    witch("I will eat your apple while the oven warm up. You are going to be tasty");
    wait();
    story("She takes a big bite out of the apple and smiles");
    wait();
    story("It only takes a few moments before she fall down");
    story("You grab the candy and walk out");
    wait();
    candy = true;
    forest();
}

function homeEarly() {
    story("You ignore it and walk home.");
    wait();
    story("Nothing exciting happens to you one the way.");
    wait();
    story("That was a very boring story, but you must be a boring person for having chosen to go home.");
    wait();
    story("If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.");
    wait();
    story("To each his own I guess.");

}

// helper functions
function questionMC(choices, message) {
    return choices[prompt.keyInSelect(choices, message, {
        cancel: false
    })];
}

function story(text) {
    console.log(chalk.rgb(218, 165, 32)(text))
}

function whisper(text) {
    console.log(chalk.rgb(50, 80, 80)('Whisper from the trees: ' + text))
}

function oldman(text) {
    console.log(chalk.rgb(100, 100, 100)('old man: ' + text))
}

function witch(text) {
    console.log(chalk.rgb(100, 0, 0)('witch: ' + text))
}

function pixie(text) {
    console.log(chalk.rgb(255, 0, 255)('pixie: ' + text))

}

function wait() {
    prompt.question(chalk.rgb(20, 20, 20)("press enter to continue"));
}