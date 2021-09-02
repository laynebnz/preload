text = document.body.innerText
function count(str, find) {
    return (str.split(find)).length - 1;
}
n = count(text, "PROCESS"); 

for(i=1;i<=n;i++){
    document.querySelector("#root > div.jss11 > main > div.jss4 > div > div:nth-child(3) > div.MuiTableContainer-root > table > tbody > tr:nth-child("+i+") > td:nth-child(7) > button > span.MuiButton-label").click()
    document.querySelector("body > div:nth-child(6) > div.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded > button > span.MuiButton-label").click()
}
alert('All images preloaded.')