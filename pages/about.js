import Link from 'next/link'
import styles from '../styles/About.module.css'

const About = () => {
    return <div className={styles.container}>
        <p className={styles.about}>
            Democracy is what I've been casually referring to as a "macro-game". You 
            can log in and vote for rock, paper, or scissors once per day. At the end 
            of each day, all the votes get counted, and the shape with the most votes 
            fights the shape with the least votes. 
        </p>
        <p className={styles.about}>
            People receive the most points if the shape they voted for wins that pairing. 
            From there, less points are awarded to those whose shape didn't compete, and 
            the least points for those whose shape lost. 
        </p>
        <p className={styles.about}>
            Example: if rock has 5 votes, paper has 1 vote, and scissors has 4 
            votes, it becomes rock versus paper. Paper beats rock, so the person who 
            voted for paper gets the most points, whereas the people who voted for 
            scissors and rock get a lesser or least amount of points (respectively).
        </p>
        <p className={styles.about}>
            From there, you then can take your points and spend them to bring your 
            (pre-assigned) team closer to victory or to push the opposing team further 
            away from victory.
        </p>
        <p className={styles.about}>
            It's fun, I promise.
        </p>
        <p>
            If you're interested in the code for this project, you can check it and 
            my other projects out at <Link href='https://www.github.com/pseudosecret'><a>my github</a></Link>. 
            I take the time to do an explanation of what my thought process was 
            regarding this project in the README (and if you look at the version 
            history, you can see all the different stages I went through, and how I 
            used it as a checklist of sorts).
        </p>
    </div>
}

export default About