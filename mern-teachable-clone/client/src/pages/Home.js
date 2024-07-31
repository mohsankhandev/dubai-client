import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Feactureb from '../components/Feactureb';
import CoursePage from './CoursePage';
import Feacturec from '../components/Feacturec';
import Feactured from '../components/Featured';
import FAQSection from '../components/Faq';
import RefundPolicySection from '../components/RefundPolicySection';
import BecomeATeacherSection from '../components/BecomeATeacherSection';
import Chat from '../components/Chat';


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <Feactureb />
      <Feacturec />
      <Feactured />
      <FAQSection />
      <RefundPolicySection />
      <BecomeATeacherSection />
      <Chat />
      <Footer />

      {/* <CoursePage /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
