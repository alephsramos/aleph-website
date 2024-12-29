import { useEffect, useState } from "react";

const useUTMs = () => {
    const [utms, setUTMs] = useState({});

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUTMs({
            utm_source: params.get("utm_source") || "Orgânico",
            utm_medium: params.get("utm_medium") || "Indisponivel",
            utm_campaign: params.get("utm_campaign") || "Indisponivel",
            utm_term: params.get("utm_term") || "Indisponivel",
            utm_content: params.get("utm_content") || "Indisponivel",
        });
    }, []);

    return utms;
};

export default useUTMs;
