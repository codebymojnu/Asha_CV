import AreaOfInterest from "./components/AreaOfInterest";
import EducationSection from "./components/EducationSection";
import FirstSection from "./components/FirstSection";
import HonorsAndAwardsSection from "./components/HonorsAndAwardSection";
import PersonalInformationSection from "./components/PersonalInformation";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

export default function App() {
  return (
    <div className="container mx-auto p-4 w-full md:max-w-4xl  m-2  md:p-8 border border-gray-300 rounded-lg shadow-md" style={{
      fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
      fontWeight: 400,
    }}>
      <FirstSection />
     
      <AreaOfInterest />
      <EducationSection />
      <PersonalInformationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <HonorsAndAwardsSection />
     

      {/* Add other sections here */}
    </div>
  );
}
