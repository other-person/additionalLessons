import React, {useState} from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Footer} from "./Site/Footer";
import {Body} from "./Site/Body";
import {NewComponent, Cars} from "./NewComponent/NewComponent";
import {Button} from "./NewComponent/Button";
import { ComponentForFilter } from './ComponentForFilter';

export type filterType = "all" |"rubel"|"dollar"

function App() {

    // map

    // const students = [
    //     {id: 1, name: "Tarik", age: 34},
    //     {id: 2, name: "Nik", age: 24},
    //     {id: 3, name: "Ivan", age: 44},
    //     {id: 4, name: "Vova", age: 55},
    //     {id: 5, name: "Serg", age: 23},
    // ]
    //
    // const topCars = [
    //     {manufacturer: 'Mercedes', model: "a1v3 "},
    //     {manufacturer: 'Audi', model: "a6"},
    //     {manufacturer: 'Jaguar', model: "s2"},
    //     {manufacturer: 'BMW', model: "e39"},
    // ]

    // button

    // const Button1Foo = (name: string, age: number) => {
    //     console.log(name, age)
    // }
    // const Button2Foo = (name: string, age: number) => {
    //     console.log(name, age)
    // }
    // const Button3Foo = () => {
    //     console.log("Im stupid button")
    // }

    // useState

    // let [a, setA] = useState(0)
    //
    // const onClickHandler = () => {
    //     setA(++a);
    //     //console.log(a)
    // }
    // const onClickHandlerZero = () => {
    //     setA(0)
    // }


    let [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "fd1335425"},
        {banknote: "dollar", nominal: 100, number: "fd1335425"},
        {banknote: "rubel", nominal: 50, number: "335asdsad"},
        {banknote: "dollar", nominal: 100, number: "dfs4334"},
        {banknote: "rubel", nominal: 50, number: "sdgdsf12321"},
        {banknote: "rubel", nominal: 100, number: "dfd21321321"},
        {banknote: "dollar", nominal: 20, number: "wqer231312"},
    ])

    const [filter, setFilter] = useState<filterType>('all');

    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }
    if (filter === 'rubel') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "rubel")
    }

    const onClickfilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">

        <ComponentForFilter  currentMoney={currentMoney} onClickfilterHandler={ onClickfilterHandler}/>

            {/*useState*/}

            {/*<div>*/}
            {/*    <h1>{a}</h1>*/}
            {/*</div>*/}
            {/*<button onClick={onClickHandler}>Add +1</button>*/}
            {/*<button onClick={onClickHandlerZero}>Zero</button>*/}


            {/*/!*действия button*!/*/}

            {/*<div>*/}
            {/*    <Button name={"MyYouTubeChannel_1"} callBack={()=>Button1Foo("Ivan",21)}/>*/}
            {/*    <Button name={"MyYouTubeChannel_2"} callBack={()=>Button2Foo("Vasia",44)}/>*/}
            {/*    <Button name={"MyYouTubeChannel_3"} callBack={Button3Foo}/>*/}
            {/*</div>*/}

            {/*Вложенная компонента*/}

            {/*<div>*/}
            {/*    <Header title={"This is Header"}/>*/}
            {/*    <Body titleForBody={"This is Body"}/>*/}
            {/*    <Footer titleForFooter={"This is Footer"}/>*/}
            {/*</div>*/}

            {/*Метод map*/}

            {/*<div>*/}
            {/*    <NewComponent people={students}/>*/}
            {/*    <Cars cars = {topCars}/>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
