import { Code2, Layout, Database, Terminal } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const icons = {
  Frontend: Code2,
  Styling: Layout,
  Tools: Terminal,
  Other: Database
};

const Skills = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-12">
          "The only way to do great work is to love what you do and keep learning."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={icons[category.title]}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;