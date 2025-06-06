import "./experience.css";
import { Card } from "../../components/card/card";
import { jobExperience } from "../../utils/constants";

export function Experience() {

  return (
    <div id="experience" className="experience-page">
      <header className="header-title">
        <h1>Experiencia laboral</h1>
      
      </header>
      <div className="job-experience-container">
        {jobExperience.map((job) => (
          <Card key={job.companyName} {...job} />
        ))}
      </div>
    </div>
  );
}
