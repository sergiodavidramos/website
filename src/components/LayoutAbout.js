import React from 'react';
import {connect} from 'react-redux';
import Arrow from './Arrow';
import ImageBackground from './ImageBackground';
import image from '../assets/static/image3.jpeg';
import Paragraph from './Paragraph';
import '../assets/styles/components/LayoutAbout.css'
import PersonalSkills from './PersonalSkills';
const LayoutAbout=({info})=>(
    <div className="LayoutAbout">
        <Arrow toRight={false} text={info.arrowLeft} toPage={'/'}/>
        <ImageBackground image={image} isBig={false}/>
        <Paragraph info={info}/>
        <PersonalSkills info={info}/>
        <Arrow toRight text={info.arrowRight} toPage={'/work'}/>
    </div>
)

const mapStateToProps=state=>{
    return{
        info: state.info.about[0],
    }
}
export default connect(mapStateToProps,null)( LayoutAbout);