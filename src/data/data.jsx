import { Link } from "lucide-react";

export const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Backend Engineer",
  "Problem Solver"
];

export const projectsData = [


  {
    title: <a href="https://travoss-qa8l.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">TRAVOCE – Cab Booking <Link size={16} /></a>,
    desc: "OTP-based ride booking platform with admin dashboard and payment integration.",
    link: "https://travoss-main-bi71zxjbo-tripathirudras-projects.vercel.app/"
  },

  {
    title: <a href="https://nivritti-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">Nivritti <Link size={16} /></a>,
    desc: "Digital micro-lending and job matching platform recognized in HackQuest 2.0.",
    link: "https://nivritti-86sxqlm9m-tripathirudras-projects.vercel.app/"
  },
  {
    title: <a href="https://xitr-fullstack-ecommerce-zjk5.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">E-Commerce Website <Link size={16} /></a>,
    desc: "Fullstack E-commerce web application with product listings and checkout.",
    link: "https://xitr-fullstack-ecommerce-zjk5.vercel.app/"
  }
];

export const skillsData = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "Java", level: 75 }
];
