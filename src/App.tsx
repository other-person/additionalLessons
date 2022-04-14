import React from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Footer} from "./Site/Footer";
import {Body} from "./Site/Body";


function App() {
    return (
        <div className="App">

            <div>
                <Header title={"This is Header"}/>
                <Body titleForBody={"This is Body"}/>
                <Footer titleForFooter={"This is Footer"}/>
            </div>

            <div>


            </div>



        </div>
    );
}

export default App;
