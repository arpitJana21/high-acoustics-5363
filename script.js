const apiURL = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`;

let fechData = async function (apiURL) {
  let response = await fetch(apiURL);
  let rawData = await response.json();
  let dataArr = rawData.map(function (data) {
    return {
      id: data.id,
      brand: data.brand,
      name: data.name,
      price: Number(data.price) * 60,
      image: data.image_link,
      category: data.category,
      tags: data.tag_list,
      colors: data.product_colors,
    };
  });
  /* 
  let tagObj = {};
  dataArr.forEach(function (data) {
    data.tags.forEach(function (tag) {
      if (tagObj[tag]) tagObj[tag]++;
      else tagObj[tag] = 1;
    });
  });
  console.log(tagObj);
*/
};
fechData(apiURL);

let defaltImage =
  "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw063995a2/ProductImages/2017/Lips/Luv_Out_Loud_Liquid_Lipstick/luvoutloudliquidlipstick_main.jpg?sw=390&sh=390&sm=fit";

let images = document.querySelector(".images");
let displayImages = function (dataArray) {
  dataArray.forEach(function (data) {
    let img = document.createElement("img");
    img.src = `${data.image}`;
    img.onerror = function () {
      this.src = defaltImage;
    };
    images.append(img);
  });
};

/**************************
 * Sticky Nav Bar
 **************************/
const header = document.querySelector("header");
let sticky = header.offsetTop;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
