/** @format */

const BASE_URL = 'https://thatcopy.pw.catapi/rest/';

    try {
        const getCats = async () => {
            const data = await fetch(BASE_URL);
            const json = await data.json();

            return json.webpurl;
        }   catch (e) {
            console.log(e.message);
        }
    };
