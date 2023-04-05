
export const addTask = task => {
  return async dispatch => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    try {
        const options = {
            method: 'GET',
            url: `http://15.164.218.46:4000/${endpoint}`,
            params: { ...query },
            headers: {
            }
        };

        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axios.request(options);

                setData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                alert('Something went wrong')
            } finally {
                setIsLoading(false);
            }
        }

        useEffect(() => {
            fetchData();
        }, []);

        const refetch = () => {
            setIsLoading(true);
            fetchData();
        }
    } catch (error) {
      console.log(error.message)
    }
  }
}

