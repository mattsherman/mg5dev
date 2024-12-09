interface PersonalInformation {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface JobPositionEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
  skills: string[];
}

interface EducationEntry {
  degree: string;
  major: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  note: string;
}

export interface Resume {
  personalInformation: PersonalInformation;
  summary: string;
  positions: JobPositionEntry[];
  skills: {
    [key: string]: string[];
  };
  education: EducationEntry[];
}
