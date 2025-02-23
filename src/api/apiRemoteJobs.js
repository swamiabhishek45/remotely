// Fetch jobs data
const fetchRemoteJobs = async () => {
    try {
        const response = await fetch(
            "https://remotive.com/api/remote-jobs?limit=6"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching remote jobs:", error);
    }
};

export default fetchRemoteJobs