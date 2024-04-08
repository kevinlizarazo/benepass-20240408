export function CardDescription({ title, description }) {
  return (
    <>
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="text-xl">{description}</p>
    </>
  );
}