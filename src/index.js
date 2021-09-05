//index.js is the first file that is going to be rendered
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//the method render is getting the <App/> and rendering inside the public/index.html file inside the <div> id='root</div>, that's why getElementById and 'root' inside
ReactDOM.render(<App />, document.getElementById('root'));
