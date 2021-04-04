import React from 'react';
import { Button } from '../Button';

const Message = (props) => {
    return(
        <div className={props.messageText.messageDivClass}>
            {props.messageText.header ?
                <h1 className={props.messageText.header.messageHeaderClass}>{props.messageText.header.messageHeader}</h1>
                : null
            }
            {props.messageText.paragraph ?
               <p className={props.messageText.paragraph.messageParagraphClass}>{props.messageText.paragraph.messageParagraph}</p>
               : null
            }
            {props.messageText.button ?
                <Button buttonClass={props.messageText.button.buttonClass} buttonName={props.messageText.button.buttonName}/>
                : null
            }
        </div>
    )
}

export default Message