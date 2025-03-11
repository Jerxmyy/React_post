import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Erreur de chargement");

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
            setTimeout(fetchData, 3000);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
        return () => console.log("Nettoyage du composant");
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
