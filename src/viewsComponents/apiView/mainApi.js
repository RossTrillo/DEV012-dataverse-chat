const apiKey = localStorage.getItem("apiKey");
if (apiKey !== null) {
  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
    window.location.href = "/group";
  } else {
    window.location.href = "/chat";
  }
}
document.getElementById("button").addEventListener("click", () => {
  const apiKey = document.getElementById("password").value;
  localStorage.setItem("apiKey", apiKey);
  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
    window.location.href = "/group";
  } else {
    window.location.href = "/chat";
  }
});
