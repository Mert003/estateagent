
import './App.css';
import Clientreviews from './component/clientReviews/clientreviews';
import ContactInfo from './component/contact/contact';
import Featuresection from './component/featureSection/featuresection';
import Footer from './component/footer/footer';
import ImageGallerySection from './component/gallery/gallery';
import Hero from './component/herocomponent/Hero';
import Howitworks from './component/howitworks/howitworks';
import MeetOurTeam from './component/meetourteam/meetourteam';
import NavbarComponent from './component/navbar/navbar';
import FAQsection from './component/questions/questions';
import Statictic from './component/stats/statistic';
import Subheader from './component/subheader/subheader';
function App() {
  return (
    <div className="App">
     <NavbarComponent />
     <Subheader />
     <Hero />
     <Featuresection />
     <Howitworks />
     <Statictic />
     <Clientreviews />
     <ImageGallerySection />
     <MeetOurTeam />
    <FAQsection />
    <ContactInfo />
    <Footer />
     </div>
  );
}

export default App;
