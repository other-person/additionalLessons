import React from 'react';

type buttonPropsType = {
    name: string
    callBack: ()=>void
    title: string
}

export const Button = (props: buttonPropsType ) => {
    const onClickHandler = ()=> {
        props.callBack()
    }

    return (
        <span>
            <button onClick={onClickHandler}>{props.name}</button>
        </span>
    );
}

