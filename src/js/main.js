(() => {
  $(document).ready(() => {
    fetch("https://nzbritje.com/wp-json/zbritje/v2/get-latest-posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.posts);
        let compainesHTML = "";
        if (data?.message) {
          compainesHTML = `<h3>${data.message}</h3>`;
        } else {
          data.posts.map((post) => {
            compainesHTML += `<div class="column-3">
              <div class="box">
              <div class="box__thumb">
              <img src="${post.image}" alt="${post.post_title}">
              </div>
              <div class="box__content">
              <span>Deri më: ${post.end_date}</span>
              <h3>${post.post_title}</h3>
              </div>
              </div>
              </div>`;
          });
        }
        $("#companies").html(compainesHTML);
      })
      .catch((error) => console.error(error));
  });
})();
