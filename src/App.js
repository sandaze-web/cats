import logo from './logo.svg';
import './App.css';
import CatsCards from "./components/CatsCards/CatsCards";


function App(props) {
    return (
        <div className="cats">
            <h1 className="cats__title">Ты сегодня покормил кота?</h1>
            <CatsCards state={props.state}/>
        </div>
    );
}

export default App;
