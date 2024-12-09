import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="text-blue-600 mr-2" size={24} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;