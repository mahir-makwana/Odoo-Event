// const axios = require("axios");

// const fetchBookData = async (isbn) => {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
//     );
//     const bookInfo = response.data.items[0].volumeInfo;
//     return {
//       isbn,
//       title: bookInfo.title,
//       author: bookInfo.authors.join(", "),
//       publisher: bookInfo.publisher,
//       year: bookInfo.publishedDate,
//       genre: bookInfo.categories ? bookInfo.categories.join(", ") : "Unknown",
//       quantity: 1,
//       available: true,
//     };
//   } catch (error) {
//     throw new Error("Error fetching book data");
//   }
// };

// module.exports = fetchBookData;
