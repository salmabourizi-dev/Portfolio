import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "www.linkedin.com/in/salma-bourizi",
    name: <RiLinkedinFill />,
  },
  {
    path: "salmabourizi-dev.github.io",
    name: <RiGithubFill />,
  },
  // {
  //   path: "https://web.facebook.com/profile.php?id=100070025019959&locale=fr_FR",
  //   name: <RiFacebookFill />,
  // },
  {
    path: "https://www.instagram.com/salma.bourizi/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="nom"
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
