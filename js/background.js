// const images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
// const chosenImage=images[Math.floor(Math.random()*images.length)];
// const bgImage=document.createElement("img");
// bgImage.src=`img/${chosenImage}`;
// document.body.appendChild(bgImage);

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// ✅ CSS 적용
bgImage.style.position = "fixed";  // 화면에 고정
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100vw";  // 가로 전체
bgImage.style.height = "100vh"; // 세로 전체
bgImage.style.objectFit = "cover";  // 비율 유지하며 꽉 채우기
bgImage.style.zIndex = "-1";  // 가장 뒤로 보내기

document.body.appendChild(bgImage);
