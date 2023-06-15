const fetchWithHeaders = () => {
  fetch("https://www.axamansard.com/lifeandliving/api/blog/post/get-all-post")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fetchWithHeaders();
