import { useEffect, useState } from "react";

function useCurrencyRates(baseCurrency) {
    const [rates, setRates] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setError(null)

        fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => setRates(data.rates))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [baseCurrency])

    return { rates, isLoading, error };

}

export default useCurrencyRates;