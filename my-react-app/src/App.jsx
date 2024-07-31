import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
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
    <Student name="Joe" age={43}></Student>
    </>
  );
  
}

export default App
