const apiKey = localStorage.getItem("apiKey");
if (apiKey !== null) {
  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
    updateURLstate("/group");
    loadRoute("/group");
  } else {
     updateURLstate("/chat");
    loadRoute("/chat");
  }
}



document.getElementById("button").addEventListener("click", () => {
  const apiKey = document.getElementById("password").value;
  localStorage.setItem("apiKey", apiKey);
  const dataItemValue = localStorage.getItem("dataItem");
  if (dataItemValue === "group") {
    updateURLstate("/group");
    loadRoute("/group");
  } else {
     updateURLstate("/chat");
    loadRoute("/chat");
  }
});
