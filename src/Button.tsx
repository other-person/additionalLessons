import React from 'react';

type buttonPropsType = {
    name: string
    callBack: ()=>void

}

export const Button = (props: buttonPropsType ) => {

    const onClickButtonHandler = ()=> {
        props.callBack()
    }

    return (
        <span>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </span>
    );
}

