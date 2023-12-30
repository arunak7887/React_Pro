import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import PropsEx from './component/PropsEx';
import Jsx from './component/Jsx';
import Jsxfunction from './component/Jsxfunction';
import JsxAttribute from './component/JsxAttribute';
import JsxChild from './component/JsxChild';
import JsxIf from './component/JsxIf';
import JsxIfObject from './component/JsxIfObject';
function App() {
  const data={name:'faisal'};
  return (
    <div className="App">
      <header className="App-header">
      <Greet/>
      <Welcome/>
      <h1>props Example</h1>
      <PropsEx data={data}/>
      <h1>Jsx</h1>
      <Jsx/>
      <Jsxfunction/>
      <JsxAttribute/>
      <JsxChild/>
      <JsxIf/>
      <JsxIfObject/>

      </header>
    </div>
  );
}

export default App;
