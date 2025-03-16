import { useEffect, useState } from 'react';
import { Config } from '../interfaces/interfaces';
import SolutionPackage from './SolutionPackage';
import { GetNewKey } from '../utils/KeyGenerator';
import { SecretsManager } from '../utils/SecretsManager';

interface BodyProps {
  isAuthenticated: boolean;
}

function Body({ isAuthenticated }: BodyProps) {
  const [data, setData] = useState<Config | null>(null);

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
  }, [isAuthenticated]); // Add isAuthenticated to the dependency array

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
