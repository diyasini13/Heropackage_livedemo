import { useEffect, useState } from 'react';
import { Config } from '../interfaces/interfaces';
import SolutionPackage from './SolutionPackage';
import { GetNewKey } from '../utils/KeyGenerator';
import { SecretsManager } from '../utils/SecretsManager';
// import config from "../assets/config.json"

function Body() {
  const [data, setData] = useState<Config | null>(null);
  // const parsedConfig: Config = config
  // const [data, setData] = useState<Config | null>(parsedConfig);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SecretsManager.FetchConfig("config.json");
        console.log("CONFIG: ", response);
        setData(response); // Update state with the fetched config
      } catch (error) {
        console.error("Failed to fetch config:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show a loading state until data is fetched
  }

  return (
    <div>
      {data.content.map((solutionPackage) => (
        <SolutionPackage key={GetNewKey()} package={solutionPackage} />
      ))}
    </div>
  );
}

export default Body;
