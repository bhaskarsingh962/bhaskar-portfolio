import aboutData from "../../../data/about";
import JourneyCard from "./JourneyCard";
import SkillsCard from "./SkillsCard";

const AboutCards = () => {
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-2">

      <div className="space-y-6">
        {aboutData.journey.map((item) => (
          <JourneyCard
            key={item.title}
            {...item}
          />
        ))}
      </div>

      <SkillsCard />

    </div>
  );
};

export default AboutCards;