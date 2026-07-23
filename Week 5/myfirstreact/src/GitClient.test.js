import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe("Git Client Tests", () => {
    test("should return repository names for techiesyed", async () => {
        const dummyData = [
            { id: 1, name: 'repo-one' },
            { id: 2, name: 'repo-two' }
        ];

        // Mock Axios get method response
        axios.get.mockResolvedValue({ data: dummyData });

        // Call the static method under test
        const response = await GitClient.getRepositories("techiesyed");

        // Assertions
        expect(response.data).toEqual(dummyData);
        expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    });
});
