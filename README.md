Why hello, this is my earnest attempt at finally bringing to all of us the following:

# Democracy

Essentially, a "macro-game" centering around Rock Paper Scissors.

## About the Project

Democracy has been a brain-child of mine for a solid while (since summer of 2015), and I've explored several different avenues at realizing it. This time, I think I've finally got it.

In a nutshell, this is a game played once per day where users submit a vote for Rock, Paper, or Scissors. Based on the voting, two are placed against each other, and the winning shape of that match yields the most points to those players, the least points to those who voted for the losing shape, and a bit-more-than-least amount of points for those who voted for the unused shape.

From there, players spend the points to bring their team to victory or prevent the other team from reaching victory. Oh, and data is collected, all of which gets used to make interesting statistics and draw weird, goofy correlations.



*note: this is pulled from the About page on the site.*

## Frequently Asked Questions

### What even is this?

Democracy is what I've been casually referring to as a "macro-game". You 
can log in and vote for rock, paper, or scissors once per day. At the end 
of each day, all the votes get counted, and the shape with the most votes 
fights the shape with the least votes. 

People receive the most points if the shape they voted for wins that pairing. 
From there, less points are awarded to those whose shape didn't compete, and 
the least points for those whose shape lost. 

Example: if rock has 5 votes, paper has 1 vote, and scissors has 4 
votes, it becomes rock versus paper. Paper beats rock, so the person who 
voted for paper gets the most points, whereas the people who voted for 
scissors and rock get a lesser or least amount of points (respectively).

From there, you then can take your points and spend them to bring your 
(pre-assigned) team closer to victory or to push the opposing team further 
away from victory.

It's fun, I promise.

### How do I play?

First, you log in.

Once you're logged in, look at the current votes for the shapes. Use your best 
judgment (which may benefit from the information located on the data page), 
and select the shape you want to win, and then hit the Vote button!

As for managing your points and spending them, you can do that under your profile.

### What happens in the event of a tie?

It depends:
* If it is a three-way tie, each player receives the same number of points.
* If the two shapes tied for votes have *more* votes than the third shape, the shape with the least votes is treated as the victor and the other two shapes are treated as losers.
    * Example: paper and scissors have 5 votes each, rock has 2 votes. Rock wins, scissors and paper both lose.
    * Example (cont'd): players voting for rock receive 5 points, and players voting for paper or scissors receive 1 point.
* If the two shapes tied for points have *less* points than the third shape, the shape with the most points is treated as the losing shape and the other two shapes receive points as though they did not compete.
    * Example: rock has 5 votes, paper and scissors have 2 votes each. Rock loses, scissors and paper are treated as non-competing.
    * Example (cont'd): players voting for rock receive 1 point, and players voting for paper or scissors receive 2 points.

### Is this a rock paper scissors game between two teams?

In a lot of ways, yeah. But everyone's vote influences the outcome in a meaningful way!

### So what is the end goal?

Winning. &#128520;

But seriously, there are a few ways to answer this:
1. For the casual player: fun, winning, and the collection of accolades (to be implemented later).
2. For the nerd: exploring a strange collection of data.                        
3. For me: coding practice and implementing My Dreams&trade;.

### Why is this called Democracy?

Because voting, I guess.

### Why use Rock Paper Scissors?

Rock Paper Scissors has been around for a [long time](https://en.wikipedia.org/wiki/Rock_paper_scissors#History),
in one shape or another (pun intended).

I also thought that latching onto its nigh-universal recognition would 
give people something familiar to work with as they make sense of 
Democracy. 

Besides that, I just think it's cute.

### How do I get to choose which team I'm on?

When you first make an account or the game resets, you don't. However, 
if you are willing to forfeit *all* of 
your points, you are allowed to switch teams at any time.


### How did you come up with these team names anyway?

They are randomly generated. 

### Do the colors correspond to anything?

No, not really. I chose the colors because I thought they matched 
the personality of the shape. As far as teams, I picked complementary 
colors from colors not really used for the shapes.

### Are there other, secret shapes for me to vote for? &#129402; &#128073; &#128072;

No.

### Can I see the code?

Sure thing! It's located [here](https://github.com/pseudosecret/democracy) on 
my [github](https://www.github.com/pseudosecret). Also, while you're at it, 
check out all my and my associate's other endeavors at [Wilbur Industries](https://www.wilburindustries.com/).

*note: this is pulled from the FAQ page on the site.*

## TO DO

There are a lot of things to do. Lots and lots. I'll be updating this readme as I make headway.

* ~Create the layout~:
    * ~Header~
        * ~Set up the links~
        * ~Style the links~
    * ~Footer~
        * ~Maybe add a line to separate the footer from the page~

* Create the pages:
    * Home page
        * ~Add text that shows voting numbers~
        * ~Add voting selectors for rock, paper, scissors~
        * ~Add voting button~
        * Create hook that changes Login to Profile and vice verse in navbar
        * Voting interface:
            * ~Make it so clicking on a shape gives blatantly obvious selection.~
            * ~Make it so clicking on a shape selects the correct radio button~ 
            * ~Create basic API to submit vote data~
            * ~Implement basic voting, not tied to any specific user~
            * ~Test live updates in another browser and implement changes as needed~
                * ~(Client-side rendering should be happening with votes and team points)~
            * ~Set so when shape not selected, button is disabled; cannot vote without shape selected~
            * Improve what is submitted as vote data
            * Implement responsive pages to handle different screen sizes
        * ~Create API that pulls data from vote Document in Mongodb cloud~
        * ~Hook API up to pull data from Mongodb cloud and display it on the page~
            * ~Refactor the code until settled on implementation I like >.>~
        * Teams stuff:
            * ~Create API for the teams that randomly generates names~
            * ~Create Mongodb Document to contain team names~
            * ~Create API that updates team names~
            * ~Figure out document format with API to make it so there are "active" team names~
            * Assign points required for victory to 7 * 3 * usersActiveWithinLast10Days (i.e. they've voted)
                * Reasoning: 
                    * Assuming 100 active users
                    * 50 per team
                    * 80% playing throughout the day
                    * Average points per day is equal to 2.667 (rounds to 3)
                    * 7 days of straight average win/loss/neutral of everyone on the team voting to hit cap
                    * However, players will reduce enemy team's points as well as increase their own
                    * Points required for victory diminish at -3 points per day
        * ~Implement real-time-ish solution for voting~
            * (note: was fairly straight forward; refreshInterval option for useSWR)
    * ~FAQ~
        * ~Write the FAQ~
        * Add Q&A about the code (maybe??)
    * About
        * ~Write the About page~
    * User
        * (lots of subpages, TBD later)
        * Create login page
        * Create profile page
        * Create personal history page
        * Create 
    * Data
        * History page
            * (Lots of numerical records, TBD later)
        * Statistics page
            * (Lots of statistical information, TBD later)

* Create the database:
    * ~Connect to Mongodb cloud cluster instance thing~
    * Create all Documents that will be used
        * ~Users~
            * Things to track per entry:
                * _id
                * team ID
                * email address
                * first name
                * middle initial
                * last name
                * date of birth
                * time zone
                * favorite color
                * favorite season
                * do you like spicy food?
                * does pineapple belong on pizza?
                * time created
                * time updated
                * accolades: []
        * Users login
            * things to track per entry:
                * _id
                * user ID
                * username
                * hashed password
                * salt
                * time created
                * time updated
        * ~Votes~
            * Things to track per entry:
                * _id
                * User ID
                * Shape
                * time created
                * time updated
        * ~Teams~
            * Things to track per entry:
                * _id
                * team1: { id: 1, name: x, points: y }
                * team2: { id: 2, name: x, points: y }
                * active: true/false
                * points required for victory
                * time created
                * time updated
        * ~History~
            * Will implement something that auto populates this every four hours
        * ~Statistics~
            * Will implement something that auto populates this every four hours
        * Accolades
            * Will implement probably towards the end
    * ... etc?

* Implement login
    * And sessions!
    * This is probably the last phase

* and um...
    * ... whatever else...??