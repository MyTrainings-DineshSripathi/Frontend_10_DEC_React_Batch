import React from 'react'
import './TimelineComponent.css'


function TimelineComponent({
    title, 
    dataList
}) {
    
  return (
    <section className="experience">
        <h2 className="experience-title">{title}</h2>

        <div className="experience-list">
        {dataList.map((data, index) => (
            <div className="experience-card" key={data.company + index}>

            <div className="experience-left">
                <img
                src={data.logo}
                alt={data.company + " logo"}
                />
                <span className="experience-line" />
            </div>

            <div className="experience-content">

                <div className="experience-header">
                <div>
                    <h3>{data.role || data.degree}</h3>
                    <p className="company">
                    {data.company || data.institution} • {data.location}
                    </p>
                </div>

                <span className="duration">
                    {data.duration}
                </span>
                </div>

                <div className="experience-skills">
                {data.skills.map((skill, index) => (
                    <span key={skill + index}>{skill}</span>
                ))}
                </div>

                <p className="experience-description">
                {data.description}
                </p>

            </div>

            </div>
        ))}
        </div>
    </section>
  )
}

export default TimelineComponent