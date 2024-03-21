import { useState } from "react";

interface ResultProps {
  list: Restaurant[];
}

export interface Restaurant {
  id: string;
  name: string;
  location: {
    address1: string;
  };
  distance: number;
  url: string;
}

const Result: React.FC<ResultProps> = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }

    const handlePrev = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
    }
  return (
    <div className="result">
      <p className="resultTitle">Result</p>
        <p>{list[currentIndex].name}</p>
        <p>{list[currentIndex].location.address1}</p>
        <p>{list[currentIndex].distance.toFixed(1)}m away</p>
        <p>
          <a href={list[currentIndex].url}>{list[currentIndex].name}</a>
        </p>
      <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentIndex === list.length - 1}>Next</button>
    </div>
  );
};

export default Result;