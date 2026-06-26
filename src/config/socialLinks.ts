// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL='https://github.com/zarayaguilarr',
  linkedin: import.meta.env.VITE_LINKEDIN_URL='https://www.linkedin.com/in/zarayaguilar/',
  email: import.meta.env.VITE_EMAIL='za248@georgetown.edu',

  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
  },

  // Formatted display names
  display: {
    github: (import.meta.env.VITE_GITHUB_URL || '')
      .replace('https://', '')
      .replace('http://', ''),

    linkedin: (import.meta.env.VITE_LINKEDIN_URL || '')
      .replace('https://', '')
      .replace('http://', ''),

    email: import.meta.env.VITE_EMAIL || '',
  }
};

export default socialLinks;