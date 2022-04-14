import React from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Footer} from "./Site/Footer";
import {Body} from "./Site/Body";
import {NewComponent, Cars} from "./NewComponent/NewComponent";


function App() {

    const students = [
        {id: 1, name: "Tarik", age: 34},
        {id: 2, name: "Nik", age: 24},
        {id: 3, name: "Ivan", age: 44},
        {id: 4, name: "Vova", age: 55},
        {id: 5, name: "Serg", age: 23},
    ]

    const topCars = [
        {manufacturer: 'Mercedes', model: "a1v3 "},
        {manufacturer: 'Audi', model: "a6"},
        {manufacturer: 'Jaguar', model: "s2"},
        {manufacturer: 'BMW', model: "e39"},
    ]

    return (
        <div className="App">

            {/*<div>*/}
            {/*    <Header title={"This is Header"}/>*/}
            {/*    <Body titleForBody={"This is Body"}/>*/}
            {/*    <Footer titleForFooter={"This is Footer"}/>*/}
            {/*</div>*/}

            <div>
                <NewComponent people={students}/>
                <Cars cars = {topCars}/>
            </div>


        </div>
    );
}

export default App;
