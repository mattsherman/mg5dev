export const title = "Matt Sherman - Résumé";
export const layout = "layouts/resume-layout.tsx";

import { Resume } from "./types.ts";

interface ResumeData extends Lume.Data {
  resume: Resume;
}

export default (data: ResumeData, _helpers: Lume.Helpers) => {
  const { comp, resume } = data;

  const JobPositionComponent = comp.JobPositionComponent;
  const SkillsListComponent = comp.SkillsListComponent;
  const EducationEntryComponent = comp.EducationEntryComponent;

  return (
    <main class="resume">
      <header>
        <h1>{resume.personalInformation.name}</h1>
        <p class="title">{resume.personalInformation.title}</p>
        <address>
          {resume.personalInformation.email && (
            <a
              href={`mailto:${resume.personalInformation.email}`}
              class="email icon-and-text-link"
            >
              <data.comp.icons.EmailIcon />
              {resume.personalInformation.email}
            </a>
          )}
          {resume.personalInformation.phone && (
            <a
              href={`tel:${resume.personalInformation.phone}`}
              class="phone icon-and-text-link"
            >
              <data.comp.icons.PhoneIcon />
              {resume.personalInformation.phone}
            </a>
          )}
          <span class="location icon-and-text-link">
            <data.comp.icons.LocationIcon />
            {resume.personalInformation.location}
          </span>
          <a
            href={`https://linkedin.com/in/${resume.personalInformation.linkedin}`}
            class="linkedin icon-and-text-link"
          >
            <data.comp.icons.LinkedInIcon />
            {`linkedin.com/in/${resume.personalInformation.linkedin}`}
          </a>
          <a
            href={`https://github.com/${resume.personalInformation.github}`}
            class="github icon-and-text-link"
          >
            <data.comp.icons.GitHubIcon />
            {`github.com/${resume.personalInformation.github}`}
          </a>
        </address>
        <section
          class="summary-section"
          dangerouslySetInnerHTML={{ __html: resume.summary }}
        />
      </header>
      <section>
        <h2>Experience</h2>
        {resume.positions.map((position, index) => (
          <JobPositionComponent
            key={index}
            title={position.title}
            company={position.company}
            location={position.location}
            startDate={position.startDate}
            endDate={position.endDate}
            details={position.details}
            skills={position.skills}
          />
        ))}
      </section>
      <section class="skills-section">
        <h2>Skills</h2>
        <dl class="skills-categories-list">
          {Object.keys(resume.skills).map((key, index) => (
            <SkillsListComponent
              key={index}
              categoryName={key}
              skills={resume.skills[key]}
            />
          ))}
        </dl>
      </section>
      <section class="education-section">
        <h2>Education</h2>
        {resume.education.map((entry, index) => (
          <EducationEntryComponent
            key={index}
            degree={entry.degree}
            major={entry.major}
            institution={entry.institution}
            location={entry.location}
            startDate={entry.startDate}
            endDate={entry.endDate}
            note={entry.note}
          />
        ))}
      </section>
    </main>
  );
};
