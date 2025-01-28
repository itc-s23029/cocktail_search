import React, {useEffect, useState} from "react";
import axios from "axios";

const ApiTest = () => {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/ApiTest")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch API: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
                .then((data) => {
                    setData(data.message);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="ApiTest">
            <p>API Response: {data}</p>
        </div>
    );
};

export default ApiTest;