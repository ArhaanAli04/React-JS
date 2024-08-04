import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import Click from './Click.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import Onchange from './Onchange.jsx'
import ColorPicker from './ColorPicker.jsx'

function App() {
  return(
    <>
    <Header></Header>
    <Footer></Footer>
    <Card></Card>
    <Button></Button>
    <Student name="Chris" age={29}></Student>
    <Student name="John" age={35}></Student>
    <Student name="Michael" age={40}></Student>
    <Student></Student>
    <List></List>
    <Click></Click>
    <MyComponent></MyComponent>
    <Counter></Counter>
    <Onchange></Onchange>
    <ColorPicker></ColorPicker>
    </>
  ); 
  
}

export default App
