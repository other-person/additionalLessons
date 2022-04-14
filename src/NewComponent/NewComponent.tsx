import React from 'react';

type StudentsType = {
    id: number,
    name: string,
    age: number
}
type StudentsPropsType = {
    people: Array<StudentsType>
}

export const NewComponent = (props: StudentsPropsType) => {
    debugger;
    return (
        <div>
            <div>New Component</div>
            <div>
                <ol>
                    {props.people.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.name}</span>
                                <span>{el.age}</span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

type CarsType = {
    manufacturer: string
    model: string
}
type CarsPropsType = {
    cars: Array<CarsType>
}

export const Cars = (props: CarsPropsType) => {
    return (
        <div>
            <ul>
                {props.cars.map((el, index=1) => {
                    return (
                        <li>
                            <span>{el.manufacturer}</span>
                            <span>{el.model}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}