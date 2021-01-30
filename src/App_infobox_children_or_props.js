import React from 'react';
import './App.css';

function InfoBoxWithDataProps(props) {
    const {filmdata, title} = props;
    return <div style={{border: "solid", margin: 5, padding: 5}}>
        <h3>{title}</h3>
        {filmdata.map((f) => <div>{f}</div>)}
    </div>;
}

function InfoBoxWithProps(props) {
    const {films, title} = props;
    return <div style={{border: "solid", margin: 5, padding: 5}}>
        <h3>{title}</h3>
        {films}
    </div>;
}

function InfoBoxWithChildren(props) {
    const {children, title} = props;
    return <div style={{border: "solid", margin: 5, padding: 5}}>
        <h3>{title}</h3>
        {children}
    </div>;
}

function App() {
    const data = ["film1", "film2", "film3"];

    return (
        <div>
            <h1>info box 3 versions</h1>

            <InfoBoxWithDataProps title="InfoBoxWithDataProps and data"  filmdata={data}/>

            <InfoBoxWithProps title = "InfoBoxWithProps - 3 film-divs in prop film" films={
                <>
                    <div>film1</div>
                    <div>film2</div>
                    <div>film3</div>
                </>
            }/>

            <InfoBoxWithChildren title="InfoBoxWithChildren 3 film-divs in children">
                <>
                    <div>film1</div>
                    <div>film2</div>
                    <div>film3</div>
                </>
            </InfoBoxWithChildren>


            <InfoBoxWithProps title = "InfoBoxWithProps - map"
                              films={data.map(d => <div>{d}</div>)}/>

            <InfoBoxWithChildren title="InfoBoxWithChildren - map">
                {data.map(d => <div>{d}</div>)}
            </InfoBoxWithChildren>
        </div>
    );
}

export default App;
