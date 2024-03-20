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
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Distance</th>
                    <th>Yelp Link</th>
                </tr>
            </thead>
        <tbody>
            {list.map((restaurant) => {
                return (
                    <tr key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location.address1}</td>
                        <td>{restaurant.distance}</td>
                        <td><a href={restaurant.url}>{restaurant.name}</a></td>
                    </tr>
                )
            })}
        </tbody>


        </table>
    
        </div>
    );
}
export default Result;
