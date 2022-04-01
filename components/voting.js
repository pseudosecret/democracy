import styles from '../styles/Voting.module.css'
import { Button } from '@mui/material'
import Image from 'next/image'
import rock from '../public/img/rock.png'
import paper from '../public/img/paper.png'
import scissors from '../public/img/scissors.png'

const Voting = () => {
    return (
        <div className={styles.centering}>
            <form>
                <div className={styles.imgsDiv}>
                    <div className={styles.imageWrapper}>
                        <input  
                            className={styles.radioOnly}
                            type='radio'
                            id='rock'
                            name='ballotSelection'
                        />
                        <label className={styles.label}>
                            <Image className={styles.radioImg}
                                alt='rock icon'
                                src={rock}
                                width={100}
                                height={100}
                            />
                        </label>
                    </div>
                    <div className={styles.imageWrapper}>
                        <input  
                            className={styles.radioOnly}
                            type='radio'
                            id='paper'
                            name='ballotSelection'
                        />
                        <label className={styles.label}>
                            <Image
                                className={styles.radioImg}
                                alt='paper icon'
                                src={paper}
                                width={100}
                                height={100}
                            />
                        </label>
                    </div>
                    <div className={styles.imageWrapper}>
                        <input  
                            className={styles.radioOnly}
                            type='radio'
                            id='scissors'
                            name='ballotSelection'
                        />
                        <label className={styles.label}>
                            <Image 
                                className={styles.radioImg}
                                alt='scissors icon'
                                src={scissors}
                                width={100}
                                height={100}
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.buttonDiv}>
                    <Button 
                        variant='contained'
                        onClick={() => {
                            console.log('Voted!')
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