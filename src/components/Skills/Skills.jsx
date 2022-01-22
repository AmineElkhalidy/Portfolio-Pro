import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import './Skills.css';


const SkillsList = ({name}) => {
  return (
    <li className='skill-item'>
      {name}
    </li>
  );
}

const Skills = (props) => {
  return (
  <div className='skills-container' id={props.id}>
      <div className='skills-parent'>
        <ScreenHeading 
        title='Skills'
        subHeading="What I'm Good At ?"
        />

        <div className='skills-card'>
          <div className='skill-container'>
            <div className='skill-name-container'>
              <span className='skill-name'><i class="ri-code-s-slash-line skill-icon"></i> Front-End :</span>
            </div>
            <ul className='skills-list'>
              {["HTML", "Css", "JavaScript", "React", "Next", "Tailwind Css"].map((skill) => (
                <SkillsList name={skill} />
              ))}
            </ul>
          </div>

          <div className='skill-container'>
            <div className='skill-name-container'>
              <span className='skill-name'><i class="ri-server-line skill-icon"></i> Back-End :</span>
            </div>
            <ul className='skills-list'>
              {["Node Js", "Express Js", "Python", "Java", "C"].map((skill) => (
                <SkillsList name={skill} />
              ))}
            </ul>
          </div>

          <div className='skill-container'>
            <div className='skill-name-container'>
              <span className='skill-name'><i class="ri-database-2-line skill-icon"></i> Databases :</span>
            </div>
            <ul className='skills-list'>
              {["MySQL", "PostgreSQL", "GraphQL", "MongoDB"].map((skill) => (
                <SkillsList name={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Skills;
