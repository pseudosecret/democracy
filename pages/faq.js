import Head from 'next/head'
import Link from '@mui/material/Link'
import styles from '../styles/FAQ.module.css'

export default function FAQ() {
    return (
        <div>
            <Head>
                <title>Democracy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <div className={styles.question}>
                   What even is this?
                </div>
                <div className={styles.answer}>
                    <p>
                        Democracy is what I've been casually referring to as a "macro-game". You 
                        can log in and vote for rock, paper, or scissors once per day. At the end 
                        of each day, all the votes get counted, and the shape with the most votes 
                        fights the shape with the least votes. 
                    </p>
                    <p>                    
                        People receive the most points if the shape they voted for wins that pairing. 
                        From there, less points are awarded to those whose shape didn't compete, and 
                        the least points for those whose shape lost. 
                    </p>
                    <p>
                        Example: if rock has 5 votes, paper has 1 vote, and scissors has 4 
                        votes, it becomes rock versus paper. Paper beats rock, so the person who 
                        voted for paper gets the most points, whereas the people who voted for 
                        scissors and rock get a lesser or least amount of points (respectively).
                    </p>
                    <p>
                        From there, you then can take your points and spend them to bring your 
                        (pre-assigned) team closer to victory or to push the opposing team further 
                        away from victory.
                    </p>
                    <p>
                        It's fun, I promise.
                    </p>
                </div>

                <div className={styles.question}>
                    How do I play?
                </div>
                <div className={styles.answer}>
                    <p>
                        First, you log in.
                    </p>
                    <p>
                        Once you're logged in, look at the current votes for the shapes. Use your best 
                        judgment (which may benefit from the information located <Link href='/data'><a>here</a></Link>), 
                        and select the shape you want to win, and then hit the Vote button!
                    </p>
                    <p>
                        As for managing your points and spending them, you can do that under your profile.
                    </p>
                </div>

                <div className={styles.question}>
                    What happens in the event of a tie?
                </div>
                <div className={styles.answer}>
                    <p>
                        It depends:
                        <ul>
                            <li>
                                If it is a three-way tie, each player receives the same number of points.
                            </li>
                            <li>
                                If the two shapes tied for votes have <span className={styles.italic}>more</span> votes 
                                than the third shape, the shape with the least votes is treated as the 
                                victor and the other two shapes are treated as losers.
                                <ul>
                                    <li>
                                        Example: paper and scissors have 5 votes each, rock has 2 votes. 
                                        Rock wins, scissors and paper both lose.
                                    </li>
                                    <li>Example (cont'd): players voting for rock receive 5 points, and 
                                        players voting for paper or scissors receive 1 point.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                If the two shapes tied for points have <span className={styles.italic}>less</span> points 
                                than the third shape, the shape with the most points is treated as the 
                                losing shape and the other two shapes receive points as though they did 
                                not compete.
                                <ul>
                                    <li>
                                        Example: rock has 5 votes, paper and scissors have 2 votes each.  
                                        Rock loses, scissors and paper are treated as non-competing.
                                    </li>
                                    <li>Example (cont'd): players voting for rock receive 1 point, and 
                                        players voting for paper or scissors receive 2 points.
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </p>
                </div>

                <div className={styles.question}>
                    Is this a rock paper scissors game between two teams?
                </div>
                <div className={styles.answer}>
                    <p>
                        In a lot of ways, yeah. But everyone's vote influences the outcome in a meaningful 
                        way!
                    </p>
                </div>

                <div className={styles.question}>
                    So what is the end goal?
                </div>
                <div className={styles.answer}>
                    <p>
                        Winning. &#128520;
                    </p>
                    <p>
                        But seriously, there are a few ways to answer this:
                        <ol>
                            <li>
                                For the casual player: fun, winning, and the collection of accolades (to be implemented later).
                            </li>
                            <li>
                                For the nerd: exploring a strange collection of data.                        
                            </li>
                            <li>
                                For me: coding practice and implementing My Dreams&trade;.
                            </li>
                        </ol>
                    </p>
                </div>

                <div className={styles.question}>
                    Why is this called Democracy?
                </div>
                <div className={styles.answer}>
                    <p>
                        Because voting, I guess.
                    </p>
                </div>

                <div className={styles.question}>
                    Why use Rock Paper Scissors?
                </div>
                <div className={styles.answer}>
                    <p>
                        Rock Paper Scissors has been around for a <Link href='https://en.wikipedia.org/wiki/Rock_paper_scissors#History'><a>long time</a></Link>,
                        in one shape or another (pun intended).
                    </p>
                    <p>
                        I also thought that latching onto its nigh-universal recognition would 
                        give people something familiar to work with as they make sense of 
                        Democracy. 
                    </p>
                    <p>
                        Besides that, I just think it's cute.
                    </p>
                </div>

                <div className={styles.question}>
                    How do I get to choose which team I'm on?
                </div>
                <div className={styles.answer}>
                    <p>
                        When you first make an account or the game resets, you don't. However, 
                        if you are willing to forfeit <span className={styles.italic}>all</span> of 
                        your points, you are allowed to switch teams at any time.
                    </p>
                </div>

                <div className={styles.question}>
                    How did you come up with these team names anyway?
                </div>
                <div className={styles.answer}>
                    <p>
                        They are randomly generated. 
                    </p>
                </div>

                <div className={styles.question}>
                    Do the colors correspond to anything?
                </div>
                <div className={styles.answer}>
                    <p>
                        No, not really. I chose the colors because I thought they matched 
                        the personality of the shape. As far as teams, I picked complementary 
                        colors from colors not really used for the shapes.
                    </p>
                </div>

                <div className={styles.question}> 
                    Are there other, secret shapes for me to vote for? &#129402; &#128073; &#128072;
                </div>
                <div className={styles.answer}>
                    <p>
                        No.
                    </p>
                </div>

                <div className={styles.question}>
                    Can I see the code?
                </div>
                <div className={styles.answer}>
                    <p>
                        Sure thing! It's located <Link href='https://github.com/pseudosecret/democracy'><a>here</a></Link> on 
                        my <Link href='https://www.github.com/pseudosecret'><a>github</a></Link>. Also, while you're at it, 
                        check out all my and my associate's other endeavors at <Link href='https://www.wilburindustries.com/'><a>Wilbur Industries</a></Link>.
                    </p>
                </div>
            </main>
        </div>
    )
}