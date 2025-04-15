export const getIpAddress = (e) => {


    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_uAmQS6ZE2NYgbIRk0wyPat56fArvY&ipAddress=${e}`;

    const data = fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    
        return data;

}