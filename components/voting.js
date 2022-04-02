import React from 'react'
import styles from '../styles/Voting.module.css'
import { Button } from '@mui/material'
import Image from 'next/image'
import rock from '../public/img/rock.png'
import paper from '../public/img/paper.png'
import scissors from '../public/img/scissors.png'

const Voting = () => {
    const [shape, setShape] = React.useState('')
    const [style, setStyle] = React.useState('')

    const handleChange = (event) => {
        setShape(event.target.value)
    }

    const handleClick = (event) => {
        setShape(event.target.id)
        setStyle('.imageWrapper:active')
    }

    return (
        <div className={styles.centering}>
            <form>
                <div className={styles.imgsDiv}>
                    <div className={shape === 'rock' ? styles.imageWrapperSelected : styles.imageWrapper}>
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
                    <div className={shape === 'paper' ? styles.imageWrapperSelected : styles.imageWrapper}>
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
                    <div className={shape === 'scissors' ? styles.imageWrapperSelected : styles.imageWrapper}>
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
                    >
                        Vote!
                    </Button>
                </div>
            </form>
        </div>
    )   
}

export default Voting