// Star images for the Projects section using SVG data URLs

const starSvgLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23C88B95'%3E%3Cpolygon points='12,2 15,10 23,10 17,16 19,24 12,19 5,24 7,16 1,10 9,10'/%3E%3C/svg%3E`;
const starSvgDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FDD5DF'%3E%3Cpolygon points='12,2 15,10 23,10 17,16 19,24 12,19 5,24 7,16 1,10 9,10'/%3E%3C/svg%3E`;
const arrowSvgLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899'%3E%3Cpolygon points='18,12 0,12 0,14 18,14 13,19 14.41,20.41 22.82,12 14.41,3.59 13,5 18,10'/%3E%3C/svg%3E`;
const arrowSvgDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FDD5DF'%3E%3Cpolygon points='18,12 0,12 0,14 18,14 13,19 14.41,20.41 22.82,12 14.41,3.59 13,5 18,10'/%3E%3C/svg%3E`;

export const lightStars = [
  starSvgLight, starSvgLight, starSvgLight, starSvgLight
];

export const darkStars = [
  starSvgDark, starSvgDark, starSvgDark, starSvgDark
];

export const specialStars = {
  dragMeStar: starSvgLight,
  dragMeStarDark: starSvgDark,
  arrow: arrowSvgLight,
  arrowDark: arrowSvgDark
};
