export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { degree, major, institution, location, startDate, endDate, note } =
    data;
  const { date } = helpers;

  const DATE_FORMAT = "yyyy";

  const formattedStartDate = date(startDate, DATE_FORMAT);
  const formattedEndDate = date(endDate, DATE_FORMAT);

  return (
    <article class="education-entry">
      <header>
        <h3 class="title">{institution}</h3>

        <p class="date-range">
          <time datetime={startDate}>{formattedStartDate}</time>
          &ndash;
          <time datetime={endDate}>{formattedEndDate}</time>
        </p>

        <p class="subtitle">
          {degree}, {major}
        </p>

        <p class="location">{location}</p>
      </header>
      <p>{note}</p>
    </article>
  );
};
