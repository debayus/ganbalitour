const tourPage = (urlData, driverpackagetour) => {
  $.getJSON(urlData, (data) => {
    var html = "";
    var keys = Object.keys(data);
    keys.forEach((key) => {
      const url = `/${
        driverpackagetour ? "driverpackagetouritem" : "allinclusivetouritem"
      }.html?id=${key}`;
      const price = data[key].price;
      html += `
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <div class="tg-trendingtrip page-tour-list-item">
          <figure>
            <a href="${url}">
              <img
                src="images/blog/img-${key}.jpg"
                alt="image destinations"
              />
              <div class="tg-hover">
                ${
                  price
                    ? `<div class="tg-pricearea">
                <span>from</span>
                <h4>$ ${data[key].price}</h4>
              </div>`
                    : ""
                }
              </div>
            </a>
          </figure>
          <div class="tg-populartourcontent">
            <div class="tg-populartourtitle">
              <h3 class="max-line-1 data-toggle="tooltip" title="${
                data[key].nama
              }">
                <a href="${url}"
                  >${data[key].nama}</a
                >
              </h3>
            </div>
            <div class="tg-description max-line-2">
              <p>${data[key].decription}</p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
    $(".page-tour").html(html);
  });
};

const tourDetailPage = (urlData, getFromHtml) => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  $.getJSON(urlData, (data) => {
    $(".tour-title").html(data[id].nama);
    $(".tour-decription").html(data[id].decription);
  });
  if (getFromHtml) {
    $.get(`/data/tour/${id}.html`, (data) => {
      $(".tour-description").html(data);
    });
  }
  $(".tour-paralax").attr(
    "data-image-src",
    `images/parallax/bgparallax-${id}.jpg`
  );
};

if (window.location.pathname === "/driverpackagetouritem.html") {
  tourDetailPage("/data/tour2.json", true);
}

if (window.location.pathname === "/allinclusivetouritem.html") {
  tourDetailPage("/data/tour1.json", true);
}

if (window.location.pathname === "/driverpackagetour.html") {
  tourPage("/data/tour2.json", true);
}

if (window.location.pathname === "/allinclusivetour.html") {
  tourPage("/data/tour1.json");
}
