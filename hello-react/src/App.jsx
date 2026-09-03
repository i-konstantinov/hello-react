import './App.css'
import { Welcome } from './Welcome';
import { Button } from './Button';
import { Hello, HelloWithoutJSX } from './Hello';
import { Card } from './Card';
import { Rules } from './Rules';
import { ContactForm } from './ContactForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { UserCard } from './UserCard';
import { CardWrapper } from './CardWrapper';
 
function App() {

  return (
    <div id="container">
      {/* <Hello />
      <HelloWithoutJSX /> */}
      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Diana" alias="Wonder Woman"/>
      <Welcome name="Clark" alias="Superman"/>
      {/* <Button /> */}
      <Card />
      <Rules />
      <ContactForm />
      <CandidateProfile />
      <Product 
      title="Gaming laptop" 
      price={1299.99} 
      inStock={true}
      categories={["Gaming", "Electronics", "Laptops", "Computers"]}
      />
      <Greeting />
      <Greeting name="Bruce" message="Good morning!" />
      <Greeting name="Clark" />
      <Greeting message="What's up?"/>
      <UserCard id={174} name="Ivan Ivanov" age={36} city="Sofia" email="myaddress@mail.com" />
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>Batman@mail.com</p>
        <button>Edit profile</button>
      </CardWrapper>
    </div>
  );
}

export default App;
