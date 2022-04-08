import React from 'react'
import styles from '../styles/Voting.module.css'
import { Button } from '@mui/material'
import Image from 'next/image'
import rock from '../public/img/rock.png'
import paper from '../public/img/paper.png'
import scissors from '../public/img/scissors.png'

const Voting = () => {
    const [shape, setShape] = React.useState('')
    const [voted, setVoted] = React.useState(false)

    const handleChange = (event) => {
        setShape(event.target.value)
    }

    const handleClick = (event) => {
        setShape(event.target.id)
    }

    const submitVote = async (event) => {
        event.preventDefault()
        const res = await fetch('/api/vote', {
            body: JSON.stringify({
                shape: shape
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        const result = await res.json();
        console.log('Shape voted for: ' + result.shape)
        setVoted(true)
    }

    if(!voted) {
        return (
            <div className={styles.centering}>
                <form onSubmit={submitVote}>
                    <div className={styles.imgsDiv}>
                        <div className={shape === 'rock' ? styles.imageWrapperRockSelected : styles.imageWrapper}>
                            <input  
                                className={styles.radioOnly}
                                type='radio'
                                value='rock'
                                checked={shape === 'rock'}
                                name='ballotSelection'
                                onChange={handleChange}
                            />
                            <label className={styles.label}>
                                <Image className={styles.radioImg}
                                    alt='rock icon'
                                    src={rock}
                                    width={100}
                                    height={100}
                                    id='rock'
                                    onClick={handleClick}
                                />
                            </label>
                        </div>
                        <div className={shape === 'paper' ? styles.imageWrapperPaperSelected : styles.imageWrapper}>
                            <input  
                                className={styles.radioOnly}
                                type='radio'
                                value='paper'
                                checked={shape === 'paper'}
                                name='ballotSelection'
                                onChange={handleChange}
                            />
                            <label className={styles.label}>
                                <Image
                                    className={styles.radioImg}
                                    alt='paper icon'
                                    src={paper}
                                    width={100}
                                    height={100}
                                    id='paper'
                                    onClick={handleClick}
                                />
                            </label>
                        </div>
                        <div className={shape === 'scissors' ? styles.imageWrapperScissorsSelected : styles.imageWrapper}>
                            <input  
                                className={styles.radioOnly}
                                type='radio'
                                value='scissors'
                                checked={shape === 'scissors'}
                                name='ballotSelection'
                                onChange={handleChange}
                            />
                            <label className={styles.label}>
                                <Image 
                                    className={styles.radioImg}
                                    alt='scissors icon'
                                    src={scissors}
                                    width={100}
                                    height={100}
                                    id='scissors'
                                    onClick={handleClick}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={styles.buttonDiv}>
                        <Button 
                            variant='contained'
                            onClick={() => {
                                console.log('Shape selected: ' + shape + '!')
                            }}
                            type='submit'
                        >
                            Vote!
                        </Button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <p className={styles.alreadyVotedText}>
                    <span className={styles.italic}>Thank you for voting!</span>
                </p>
                <p className={styles.alreadyVotedText}>
                    <span className={styles.italic}>Come back tomorrow to see if {shape} won!</span> &#128150;
                </p>
            </div>
        )
    }
}

export default Voting