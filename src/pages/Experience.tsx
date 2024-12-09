import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-center text-gray-600 mb-12">
          "Experience is the teacher of all things, especially in web development."
        </p>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;