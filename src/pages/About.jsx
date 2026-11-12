import HeaderLink from "@/components/about/HeaderLink";
import Managers from "@/components/about/Managers";
import OurStory from "@/components/about/OurStory";
import OurTarget from "@/components/about/OurTarget";
import ServiceFeature from "@/components/serviceFeature/ServiceFeature";

function About() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeaderLink />
      <OurStory />
      <OurTarget />
      <Managers />
      <ServiceFeature />
    </main>
  );
}

export default About;
