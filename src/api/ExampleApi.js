import axiosClient from './axiosClient';

class ExampleApi {
    getAll() {
        const url = '/example';

        return axiosClient.get(url);
    }
}

const exampleApi = new ExampleApi();
export default exampleApi;