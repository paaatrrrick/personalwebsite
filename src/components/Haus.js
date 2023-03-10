import { useEffect } from "react";

const Haus = () => {
    useEffect(() => {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd-bKO-rbVyyBtGjMCPPpilwpJevLJRi_J-bnYE2CnUtOFv9w/viewform";
    }, []);

    return (
        <h1></h1>
    );
}

export default Haus;