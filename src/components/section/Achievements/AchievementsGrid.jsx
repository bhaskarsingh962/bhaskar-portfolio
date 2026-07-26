import achievements from "../../../data/achievements";
import AchievementCard from "./AchievementCard";

const AchievementsGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  );
};

export default AchievementsGrid;