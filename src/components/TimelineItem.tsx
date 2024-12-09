import React from 'react';
import { type Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-blue-600 rounded-full" />
        {!isLast && <div className="w-0.5 h-full bg-blue-600" />}
      </div>
      <div className="pb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <span className="text-sm text-blue-600 font-semibold">
            {experience.period}
          </span>
          <h3 className="text-xl font-bold mt-1">{experience.title}</h3>
          <p className="text-gray-600 mt-1">{experience.company}</p>
          <p className="text-gray-700 mt-2">{experience.description}</p>
          {experience.achievements && (
            <ul className="mt-2 space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;