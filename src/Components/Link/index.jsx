import React from 'react';
import  {Link} from 'react-router-dom'

export const LinkItem = (props) => {

    return(
        <div>
            <Link className={props.linkClass} to={props.link.path}>{props.link.name}</Link>
        </div>
    )
}