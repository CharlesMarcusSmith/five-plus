import "./LanguagesBody.css"
import React, {useState} from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
export default function LanguagesBody() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="lang_heading" onClick={handleClick}>
                <span ><h3 >Languages</h3><icon>{click ? <FiX/> : <FiAlignJustify/>}</icon></span>
            </div>
            <div className="container">
                <ul className={click ? "lang_list_active" : "lang_list"}>
                    <li className="si_items"><span className="si_logo"><SiCss3 /></span>CSS</li>
                    <li className="si_items"><span className="si_logo"><SiHtml5 /></span>HTML</li>
                    <li className="ri_items"><span className="ri_logo"><RiJavaFill /></span>Java</li>
                    <li className="si_items"><span className="si_logo"><SiJavascript /></span>JavaScript</li>
                    <li className="si_items"><span className="si_logo"><SiKotlin /></span>Kotlin</li>
                    <li className="si_items"><span className="si_logo"><SiPython /></span>Python</li>
                    <li className="si_items"><span className="si_logo"><SiPostgresql /></span>PostgreSQL</li>
                </ul>
                <div className="lang_body">
                    <span className="lang_stars">
                        <TbStarFilled/><TbStarFilled/><TbStar/><TbStar/><TbStar/>
                    </span>
                    <div className="lang_text">
                        <h2>PostgreSQL</h2>
                        <h4 className="stars_wording">Advanced Beginner</h4>
                        <p className="text_heading">Covered</p>
                        <p>Have completed a number of projects involving SQL, covering:</p>
                        <ul>
                            <li className="covered_bullet"><span>SELECT</span></li>
                            <li className="covered_bullet"><span>INSERT</span></li>
                            <li className="covered_bullet"><span>CREATE TABLE</span></li>
                            <li className="covered_bullet"><span>JOIN</span></li>
                            <li className="covered_bullet"><span>CREATE EXTERNAL TABLE</span></li>
                            <li className="covered_bullet"><span>SHOW TABLES</span></li>
                            <li className="covered_bullet"><span>DROP IF EXISTS</span></li>
                            <li className="covered_bullet"><span>LOAD DATA LOCAL INPATH</span></li>
                        </ul>
                    </div>
                </div>
            </div>        
        </>
    )
}