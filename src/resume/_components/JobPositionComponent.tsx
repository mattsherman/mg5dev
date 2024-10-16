export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    details,
    skills,
  }: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[];
    skills: string[];
  } = data;
  const { date } = helpers;

  const DATE_FORMAT = "yyyy";

  const formattedStartDate = date(startDate, DATE_FORMAT);
  const formattedEndDate = date(endDate, DATE_FORMAT);

  return (
    <article class="job-position">
      <header>
        <h3 class="title">
          {title}, {company}
        </h3>

        <p class="date-range">
          <time datetime={startDate}>{formattedStartDate}</time>
          &ndash;
          <time datetime={endDate}>{formattedEndDate}</time>
        </p>

        <p class="subtitle">{location}</p>
      </header>
      <ul class="details">
        {details.map((detail: string, index: number) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </article>
  );
};
