import React from 'react';

type headerPropsType = {
    title: string
}
export const Header = (props: headerPropsType ) => {
    return (

        <>
            <div>{props.title}</div>
        </>
    )

}
