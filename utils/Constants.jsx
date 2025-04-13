import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiGitMerge,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiCss3 , DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export const skills = [
  { icon: <AiFillHtml5 className="fs-2 " />, title: "HTML" },
  { icon: <DiCss3 className="fs-2 " />, title: "CSS" },
  { icon: <IoLogoJavascript className="fs-2 " />, title: "JavaScript" },
  { icon: <BiLogoTypescript className="fs-2 " />, title: "TypeScript" },
  { icon: <BiLogoReact className="fs-2 " />, title: "React.js" },
  { icon: <SiNextdotjs className="fs-2 " />, title: "Next.js" },
  { icon: <BiLogoRedux className="fs-2 " />, title: "Redux" },
  { icon: <BsFillBootstrapFill className="fs-2 " />, title: "Bootstrap" },
  { icon: <SiTailwindcss  className="fs-2 "/>, title: "Tailwind" },
  { icon: <SiMui  className="fs-2 "/>, title: "MaterialUI" },
  { icon: <BiGitMerge className="fs-2 " />, title: "Git" },
  { icon: <AiFillGithub className="fs-2 " />, title: "Github" },
  { icon: <DiMongodb  className="fs-2 " />, title: "MongoDb" },
  { icon: <FaNode  className="fs-2 " />, title: "Nodejs" },
  { icon: <SiExpress  className="fs-2 " />, title: "Expressjs" },
];
