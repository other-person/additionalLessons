import React, {useState} from 'react';
import { filterType } from './App';

type currentMoneyType = {
    banknote: string
    nominal: number
    number: string
}
type ComponentForFilterPropsType = {
    currentMoney: Array<currentMoneyType>
    onClickfilterHandler: (nameButton: filterType) => void
}

export const ComponentForFilter =(props: ComponentForFilterPropsType  )=> {
    return (
        <div>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknote}</span>
                            <span>{el.nominal}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={() => props.onClickfilterHandler("all")}>All</button>
                <button onClick={() => props.onClickfilterHandler("rubel")}>Rubels</button>
                <button onClick={() => props.onClickfilterHandler("dollar")}>Dollars</button>
            </div>

        </div>
    )
}

