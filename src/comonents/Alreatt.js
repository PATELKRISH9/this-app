import React from 'react';


export default function Alreatt(props)
{
    return(
       props.msg && <div className="alert alert-secondary" role="alert" >
     <strong>{props.title.msg}</strong>:{props.title.type}
</div>
    )
}