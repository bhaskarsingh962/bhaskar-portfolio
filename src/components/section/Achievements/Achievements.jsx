import Container from "../../ui/Container";
import AchievementsHeader from "./AchievementsHeader";
import AchievementsGrid from "./AchievementsGrid";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-slate-950 py-28"
    >
      <Container>
        <AchievementsHeader />
        <AchievementsGrid />
      </Container>
    </section>
  );
};

export default Achievements;