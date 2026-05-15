import axios from 'axios';

const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
        console.log(data)
    })
}

function MainContent() {
    return (
        <div>
            <header>
                <button onClick={apiCall}>Make API Call</button>
            </header>
        </div>
    );
}

export default MainContent;
