import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

import paralegalcertificate from '../../assets/badges/paralegalcertificate.png';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'ucla-paralegal',
      image: paralegalcertificate,
      alt: 'Paralegal Certificate',
      title: 'Paralegal Certificate',
      subtitle: 'UCLA Extension',
      status: 'completed',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-8 relative"
      style={{
        background:
          themeColors.background.sections?.certifications ||
          themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-6"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500],
          }}
        >
          Certifications
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Badges */}
          <div className="flex justify-center">
            {badges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center group">
                <img
                  src={badge.image}
                  alt={badge.alt}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <h3
                  className="text-center text-sm font-medium mb-2"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.pink[300]
                      : themeColors.colors.pink[500],
                  }}
                >
                  {badge.title}
                </h3>
                <p
                  className="text-center text-sm"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.dark[300]
                      : themeColors.colors.dark[600],
                  }}
                >
                  {badge.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;