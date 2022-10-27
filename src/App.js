import UserForm from './components/UserForm';
function App() {
  return (
    <div>
<UserForm firstName={"John"} lastName={"Doe"} email={"johnDoe@doe.com"} password={"qwerty"} confirmPassword={"qwerty"} />
    </div>
  );
}

export default App;
