import { useState } from "react";

interface ResultProps {
    list: Restaurant[];
}

export interface Restaurant {
    id: string,
    name: string,
    location: {
        address1: string;
    };
    distance: number;
    url: string;
    }


const Result: React.FC<ResultProps> = ({ list }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <div className="result">
        <p className="resultTitle">Result</p>       
                <tr key={list[currentIndex].id}>
                    <td>{list[currentIndex].name}</td>
                    <td>{list[currentIndex].location.address1}</td>
                    <td>{list[currentIndex].distance.toFixed(1)}m away</td>
                    <td><a href={list[currentIndex].url}>{list[currentIndex].name}</a></td>
                </tr>
                </div>
 )
    }

export default Result;