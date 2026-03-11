import Hero from "../sections/HeroSection";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import About from "../sections/About";
import Works from "../sections/Works";
import ContactSummary from "../sections/ContactSummary";
import Contact from "../sections/Contact";
import Navbar from "../components/Navbar";
import { client } from "../lib/client";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
  return client.fetch(`*[_id == "singleton-profile"][0]{
        firstName,
        lastName,
        headline,
        headlineStaticText,
        headlineAnimatedWords,
        headlineAnimationDuration,
        shortBio,
        email,
        phone,
        location,
        availability,
        sociallinks,
        yearsofExperience,
        profileImage
  }`);
};

const HomePage = () => {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  return (
    <main>
      <Navbar />
      <Hero
        headline={profile?.headline}
        firstName={profile?.firstName}
        lastName={profile?.lastName}
        shortBio={profile?.shortBio}
      />
      <ServiceSummary headlineAnimatedWords={profile?.headlineAnimatedWords} />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </main>
  );
};

export default HomePage;
