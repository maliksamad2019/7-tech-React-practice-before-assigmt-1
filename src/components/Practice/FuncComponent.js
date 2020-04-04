import React from 'react'

export default function FuncComponent({clientName, ...props}) { 
    console.log(clientName, props);
    
    return (
        <div> 
            {clientName} <br/>
            {props.children}
        </div>
    )
}


