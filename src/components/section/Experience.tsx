import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const experiences = [
    {
      title: "Executive Assistant",
      company: "UC San Diego",
      location: "La Jolla, CA",
      period: "July 2024 - Present",
      description: [
        "As Executive Assistant to EnCORE in UC San Diego’s Computer Science and Engineering Department, I managed high-volume administrative and operational workflows, supporting program leadership with compliance tracking, documentation management, and reporting processes. I coordinated logistics for institutional events, meetings, and workshops, maintained accurate records systems, and collaborated with faculty, administrators, and external stakeholders to ensure the successful execution of program initiatives. I also supported financial and operational functions, including expense tracking, reimbursements, and budget documentation, while ensuring compliance with university policies and procedures.",
      ]
    },
    {
      title: "Administrative Assistant",
      company: "UC San Diego",
      location: "La Jolla, CA",
      period: "July 2022 - July 2024",
      description: [
        "As an Administrative Assistant in UC San Diego’s Political Science Department, I managed reimbursements and inventory orders, helping streamline departmental operations and reduce administrative inefficiencies. I led the digitization of over 2,000 physical records, improving record accessibility and supporting the department’s transition to electronic documentation. Additionally, I served as the primary point of contact for students, faculty, and visitors while maintaining the department’s website and LinkedIn presence to increase engagement with departmental events and initiatives.",
      ]
    },
    {
      title: "Teacher's Aide",
      company: "UC San Diego",
      location: "La Jolla, CA",
      period: "June 2022 - January 2023",
      description: [
        "Applied behavior modeling and specialized teaching techniques to instill social skills in students, fostering a positive learning environment and resulting in improvement in classroom behavior",
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-8 relative"
      style={{
        background:
          themeColors.background.sections?.experience ||
          themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink?.[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-6"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink?.[500]
          }}
        >
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle
                      className="text-2xl"
                      style={{
                        color: isDarkMode
                          ? themeColors.colors.pink?.[300]
                          : themeColors.colors.pink?.[400]
                      }}
                    >
                      {exp.title}
                    </CardTitle>

                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>
                        •
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: isDarkMode
                            ? themeColors.colors.dark?.[200]
                            : themeColors.colors.dark?.[600]
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;