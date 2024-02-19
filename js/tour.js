const tourPage = () => {
  $.getJSON("/data/tour.json", (data) => {
    var html = "";
    var keys = Object.keys(data);
    keys.forEach((key) => {
      const url = `/tour.html?id=${key}`;
      html += `
      <article class="tg-post tg-verticaltop">
        <figure>
          <a href="${url}"
            ><img src="images/blog/img-${key}.jpg" alt="image description"
          /></a>
        </figure>
        <div class="tg-postcontent">
          </div>
          <div class="tg-posttitle">
            <h2>
              <a href="${url}"
                >${data[key]["nama"]}</a
              >
            </h2>
          </div>
          <a class="tg-btnreadmore" href="${url}">Read More</a>
        </div>
      </article>
      `;
    });
    $(".page-tour").html(html);
  });
};

const tourDetailPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  $.getJSON("/data/tour.json", (data) => {
    $(".tour-title").html(data[id].nama);
  });
  $.get(`/data/tour/${id}.html`, (data) => {
    $(".tour-description").html(data);
  });
  $(".tour-paralax").attr(
    "data-image-src",
    `images/parallax/bgparallax-${id}.jpg`
  );
};

if (window.location.pathname === "/tour.html") {
  tourDetailPage();
}

if (window.location.pathname === "/driverpackagetour.html") {
  tourPage();
}
