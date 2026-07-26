import experienceData from "../../../data/experience";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="relative mt-20">

      <div className="absolute left-2 top-0 h-full w-[2px] bg-slate-700" />

      <div className="space-y-10">
        {experienceData.timeline.map((item) => (
          <TimelineItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </div>
  );
};

export default Timeline;