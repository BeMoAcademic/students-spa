class HttpService {

    async get(url, headers = {}) {
        const response = await fetch(url, headers);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return { status : response.status, data };

    };


    async post(url, headers = {}, config = {}, repeat = true) {
        const response = await fetch(url, {
            headers,
            ...config
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return { status : response.status, data };

    };

   async patch(url, headers = {}, config = {}, repeat = true) {
       const response = await fetch(url, {
           headers,
           ...config
       });

       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }

       const data = await response.json();

       return { status : response.status, data };
    };

    async delete(url, headers = {}, config = {}, repeat = true) {
        const response = await fetch(url, {
            headers,
            ...config
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return { status : response.status, data };
    };

}

export default new HttpService;