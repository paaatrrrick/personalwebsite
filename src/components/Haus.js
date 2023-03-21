import { useEffect } from "react";

const Haus = () => {
    useEffect(() => {
        fetchHaus();
    }, []);

    //fetch the following with a get request https://wordsmith-api-production.up.railway.app/magic-the-gathering
    const fetchHaus = async () => {
        console.log('herea!');
        const response = await fetch("https://wordsmith-api-production.up.railway.app/magic-the-gathering");
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd-bKO-rbVyyBtGjMCPPpilwpJevLJRi_J-bnYE2CnUtOFv9w/viewform";
    }

    return (
        <h1></h1>
    );
}

export default Haus;