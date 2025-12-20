import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Faied to fetch");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      <div className="flex items-center gap-40 m-4 px-20 py-6">
        <img
          className="rounded-full"
          width={300}
          src={data.avatar_url}
          alt="Github Picture"
        />
        <div className="flex flex-col items-start gap-4">
          <h2>Name: {data.name}</h2>
          <h2>Public Repos: {data.public_repos}</h2>
          <h2>Followers: {data.followers}</h2>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tehseen100");
  return response.json();
};
