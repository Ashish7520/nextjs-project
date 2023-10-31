import Link from "next/link";

const aboutUsPage = () => {
  const details = [
    { id: "1", name: "Yash", role: "Senior Developer" },
    { id: "2", name: "Vaibhav", role: "Backend Developer" },
    { id: "3", name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <ul>
        {details.map((dev) => (
          <li>
            <Link href={`/about-us/${dev.id}`}>{dev.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default aboutUsPage;
