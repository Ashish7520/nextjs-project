import { useRouter } from "next/router";

const Developer = () => {
  const router = useRouter();
  const { developerId } = router.query;

  const details = [
    { id: "1", name: "Yash", role: "Senior Developer" },
    { id: "2", name: "Vaibhav", role: "Backend Developer" },
    { id: "3", name: "Suresh", role: "Frontend Developer" },
  ];

  const developer = details.find((dev) => dev.id == developerId);

  return (
    <div>
      {developer ? (
        <div>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </div>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </div>
  );
};

export default Developer;
