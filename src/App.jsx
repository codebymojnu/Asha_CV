import AreaOfInterest from "./components/AreaOfInterest";
import EducationSection from "./components/EducationSection";
import FirstSection from "./components/FirstSection";
import HonorsAndAwardsSection from "./components/HonorsAndAwardSection";
import PersonalInformationSection from "./components/PersonalInformation";
import ReferencesSection from "./components/ReferencesSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

export default function App() {
  return (
    <div className="container mx-auto p-4">
      <FirstSection />
      <AreaOfInterest />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <HonorsAndAwardsSection />
      <PersonalInformationSection />
      <ReferencesSection />

      {/* Add other sections here */}
    </div>
  );
}
