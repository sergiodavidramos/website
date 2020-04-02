import React from 'react';
import { Animated } from 'react-animated-css';
import '../assets/styles/components/PersonalSkills.css';
const PersonalSkills=({info})=>(
    <div className="PersonalSkills-container">
        {
            info.skills.map((skill, index)=>(
                <Animated
                    className="Paragraph-text-container"
                    animationIn="bounceInRight"
                    animationInDelay={skill.time}
                    isVisible={true}
                    key={index}
                >
                    <span>{skill.name}</span>

                </Animated>
            ))
        }
    </div>
)
export default PersonalSkills;