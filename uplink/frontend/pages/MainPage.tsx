import * as React from 'react';
import NavBar from "./Props-TypeScript/NavBar";
import Cookie from "./Props-TypeScript/Cookie";

const MainPage = () => {
    const url = 'http://localhost:3000/api/user'
    let {name:name} = Cookie(url);

    return (
        <>
            <NavBar name={name}/>

            <div>
                {name ? "Hi" + name : "You are not logged in !!"}
            </div>

        </>
    );
};

export default MainPage;