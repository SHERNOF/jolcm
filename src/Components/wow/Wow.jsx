import Title from '../../UI/title/Title'
import classes from './wow.module.css'
export default function Word(){
    return (
            <div className={classes.section}>
                
                 <div className={classes.word}> 
                 Word for the Week
                 </div>

                <div className={classes.message}>
                    <p>John 1:1</p>
                    <p>In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men.</p>
                </div>

                <div className={classes.pastor}>
                By: Pastor Bong
                </div>
                
            </div>
    )
}