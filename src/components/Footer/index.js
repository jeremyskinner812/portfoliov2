import React from 'react';
// Import Icons for footer buttons
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: AiOutlineGithub,
      link: "https://github.com/jeremyskinner812"
    },
    {
      name: BsLinkedin,
      link: "https://www.linkedin.com/in/jeremydskinner/"
    },
    {
      name: BsStackOverflow,
      link: "https://stackoverflow.com/users/21207333/jdskinner"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map((icon,index) => {
        let Icon = icon.name;
        console.log(Icon);
        return (<a href= {icon.link} target="_blank" rel="noreferrer" key={index}><Icon /></a>);
  
      })}
    </footer>
  );
}

export default Footer;