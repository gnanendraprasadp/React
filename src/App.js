import './App.css';
import './Functional'
import { Component } from 'react/cjs/react.production.min';
import Jsx from './Practice/Jsx.js'
import StateSubscribe from './Practice/StateSubscribe.js'
import StateCounter from './Practice/StateCounter.js'
import Rendering from './Practice/Rendering';
import Components from './Practice/Components';
import EventHandling from './Practice/EventHandling';
import ConditionalRender from './Practice/ConditionalRender';
import Forms from './Practice/Forms';
import Lifting from './Practice/Lifting';


class App extends Component {
  render() {
    return (
      <div>
        <center><h1>1. Hello There - Welcome to React</h1></center>
        <Jsx/>
        <Rendering/>
        <Components/>
        <StateSubscribe/>        
        <StateCounter/>
        <EventHandling/>
        <ConditionalRender/>
        <Forms/>
        <Lifting/>
      </div>
    )
  }
}

export default App;