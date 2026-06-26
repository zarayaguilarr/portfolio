import { useEffect, useState, useRef } from 'react';
import AsciiMorphText from '../AsciiMorphText';
import TypewriterCarousel from '../TypewriterCarousel';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';
import { aboutMeJournal, profile1, profile2, profile3, stickers as stickerImages } from '../../assets';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [asciiText, setAsciiText] = useState('');
  const [journalPhotoIndex, setJournalPhotoIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = [
    'Executive Assistant',
    'Paralegal',
    'MS DSPP Student at Georgetown University'
  ];

  // photos that rotate on the left page of the journal
  const profileImages = [
    { src: profile1, caption: "UC San Diego Graduate" },
    { src: profile2, caption: "Visit to the Bay Area" },
    { src: profile3, caption: " Museum" }
  ];

  // placeholder paragraph for the right page — swap this out with your own bio whenever you're ready
  const aboutMeText = `I graduated from the University of California San Diego with a B.A. in Sociology - Science & Medicine and a B.S. in Political Science/Data Analytics. I also earned a Paralegal Certificate from UCLA Extension. In Fall 2026, I’ll be attending Georgetown University as a master's student in the Data Science for Public Policy program. My interests are in public policy, data science, and healthcare policy, and I’m especially interested in how data can be used to inform policy decisions and improve public outcomes.`;

  const fullAsciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠲⠶⣤⣀⣠⣤⣤⣤⡿⠛⠿⡴⠾⠛⢻⡆⠀⠀⠀
⠀⠀⠀⣼⠁⠀⠀⠀⠉⠁⠀⢀⣿⠐⡿⣿⠿⣶⣤⣤⣷⡀⠀⠀
⠀⠀⠀⢹⡶⠀⠀⠀⠀⠀⠀⠈⢯⣡⣿⣿⣀⣰⣿⣦⢂⡏⠀⠀
⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⣍⣭⣾⠁⠀⠀
⠀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣧⣤⡀
⠈⠉⠹⣏⡁⠀⢸⣿⠀⠀⠀⢀⡀⠀⠀⠀⣿⠆⠀⢀⣸⣇⣀⠀
⠀⠐⠋⢻⣅⡄⢀⣀⣀⡀⠀⠯⠽⠂⢀⣀⣀⡀⠀⣤⣿⠀⠉⠀
⠀⠀⠴⠛⠙⣳⠋⠉⠉⠙⣆⠀⠀⢰⡟⠉⠈⠙⢷⠟⠈⠙⠂⠀
⠀⠀⠀⠀⠀⢻⣄⣠⣤⣴⠟⠛⠛⠛⢧⣤⣤⣀⡾⠀⠀⠀⠀⠀`;


  useEffect(() => {
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < fullAsciiArt.length) {
        setAsciiText(fullAsciiArt.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 3);
      }
    };

    const startDelay = setTimeout(typeWriter, 500);
    return () => clearTimeout(startDelay);
  }, []);

  // rotate the journal's left-page photo every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setJournalPhotoIndex((prev) => (prev + 1) % profileImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <section ref={sectionRef} className="min-h-screen">

      {/* HERO */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>
              <AsciiMorphText text="Hi, I'm Zaray" />

              <div className="flex mt-2">
                <span>I am a&nbsp;</span>
                <TypewriterCarousel roles={roles} />
              </div>
            </div>

            <pre className="hidden md:block text-sm">
              {asciiText}
            </pre>

          </div>
        </div>
      </div>

      {/* ABOUT IMAGE — journal with rotating photo on the left page and bio text on the right page */}
      <div className="py-10 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <img
            src={aboutMeJournal}
            alt="About me journal"
            className="w-full"
          />

          {/* Left page: rotating photo */}
          <div
            className="absolute flex items-center justify-center overflow-hidden"
            style={{
              top: '11%',
              bottom: '12%',
              left: '8%',
              width: '38%',
            }}
          >
            {profileImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.caption}
                className="absolute w-full h-full object-contain transition-opacity duration-700"
                style={{
                  opacity: i === journalPhotoIndex ? 1 : 0,
                }}
              />
            ))}
          </div>

          {/* Right page: about me paragraph */}
          <div
            className="absolute overflow-y-auto"
            style={{
              top: '15%',
              bottom: '12%',
              right: '7%',
              width: '38%',
            }}
          >
<p
  className="leading-relaxed"
  style={{
    color: isDarkMode ? themeColors.colors.white : '#1f3723',
    fontFamily: "'Caveat', cursive",
    fontSize: '1.0rem',
  }}
>
  {aboutMeText}
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;