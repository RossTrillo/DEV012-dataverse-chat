import { navigateTo } from "../../router.js";

const apiKey = localStorage.getItem("apiKey");
if (apiKey !== null) {
  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
    navigateTo("/group");
  } else {
    navigateTo("/chat");
  }
}



document.getElementById("button").addEventListener("click", () => {
  const apiKey = document.getElementById("password").value;
  localStorage.setItem("apiKey", apiKey);

  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
   navigateTo("/group");
  } else {
    navigateTo("/chat");
  }
});
