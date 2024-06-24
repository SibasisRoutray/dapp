import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


const View = ({ state }) => {

    const [arr, setArr] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const arrMessage = async () => {
            const arr = await contract.check();
            setArr(arr);
        };
        contract && arrMessage();
    }, [contract]);

    return (
        <div className="card">
            <div>
                {arr.map((arr, i) => {
                    return (
                        <div>
                            <Card>
                                <Card.Body class="text-bg-warning">
                                    <Card.Title>{i+1}.  Name:&nbsp;{arr.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Message:&nbsp;{arr.message}</Card.Subtitle>
                                    <Card.Text>
                                        Account No:&nbsp;{arr.from}
                                    </Card.Text>
                                    <Card.Text>
                                        time:&nbsp;{new Date(arr.timestamp * 1000).toLocaleString()}

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    )

                })}

            </div>


        </div>
    );


}
export default View;