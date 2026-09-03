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
import { UserDetails } from './UserDetails';
import { ProductList } from './ProductList';
import { NamesList } from './NamesList';
import { Alert } from './Alert';
import { CustomButton } from './CustomButton';
import { Contact } from './Contact';
import { Newsletter } from './Newsletter';

const productsMock = [
  {
    id: 123,
    title: "Macbook Pro",
    price: 2999.99,
    inStock: true,
    categories: ["Apple", "Laptops"]
  },
  {
    id: 124,
    title: "Mac Mini",
    price: 999.99,
    inStock: true,
    categories: ["Apple", "Computers"]
  },
  {
    id: 125,
    title: "Apple Studio",
    price: 4999.99,
    inStock: false,
    categories: ["Apple", "Work Stations"]
  }
];


function App() {
  let btnText = "Like";
  const handleCustomBtnClick = () => {
    btnText = btnText === "Like" ? "Unlike":"Like";
    console.log(btnText);
  }

  return (
    <div id="container">
      <Contact />
      <Newsletter />

      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>

      <CustomButton text={btnText} onClick={handleCustomBtnClick} />

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

      <UserDetails name="Bruce Wayne" isOnline={true}/>
      <UserDetails name="Clark Kent" isOnline={false}/>
      <UserDetails name="John Smith" isOnline={false} hideOffline={true}/>

      <ProductList products={productsMock}></ProductList>

      <NamesList />
    </div>
  );
}

export default App;
