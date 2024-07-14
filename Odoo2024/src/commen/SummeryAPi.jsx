const backendUrl = "http://localhost:5000";

const SummeryApi = {
  fetchBook: {
    url: `${backendUrl}/api/books`,
    method: "GET",
  },
};

export default SummeryApi;
