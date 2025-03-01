import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import WelcomeMessage from './WelcomeMessage';
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <WelcomeMessage/>
            <UserProfile name="Alice" age="25" bio="loves hiking and photography"/>
            <Footer />
        </div>
    );
}

export default App;