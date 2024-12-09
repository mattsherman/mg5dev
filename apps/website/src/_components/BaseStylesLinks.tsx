export default (data: Lume.Data, _helpers: Lume.Helpers) => (
  <>
    <link rel="stylesheet" href={`/${data.cacheBusterVersion}/reset.css`} />
    <link rel="stylesheet" href={`/${data.cacheBusterVersion}/fonts.css`} />
    <link rel="stylesheet" href={`/${data.cacheBusterVersion}/base.css`} />
  </>
);
