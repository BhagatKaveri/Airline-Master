export const fetchGet = () => {
  axios.get('https://test.iconcile.com/industry-master-api/v1/airline/data').then((response) => {
    setData(response.data);
  });
};
useEffect(() => {
  fetchGet();
}, []);
