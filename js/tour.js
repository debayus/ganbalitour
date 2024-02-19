const tourPage = () => {
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
  tourPage();
}
