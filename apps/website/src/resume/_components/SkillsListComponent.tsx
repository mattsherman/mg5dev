export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const { categoryName, skills }: { categoryName: string; skills: string[] } =
    data;

  return (
    <>
      <dt class="category">{categoryName}</dt>
      <dd class="skills">
        {skills.map((skill, index) => (
          <span key={index} class="skill">
            {skill}
          </span>
        ))}
      </dd>
    </>
  );
};
