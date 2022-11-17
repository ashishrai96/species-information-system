function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function jsonToCsv(items,title) {
    const n = items.length
    var idx = -1
    for (let i = 0; i <n; i++){
        if (items[i]["title"] === title){
            idx = i;
            break;
        }
    }
    if(idx==-1)
        return ""
    const head = items[idx]["estimate"]
    const keys = Object.keys(head)
    var len = head[keys[0]].length
    const header = "Year, Total Estimated,Total Predicted"
    
    var csv = header + "\r\n"
    for (let i=0; i<len; i++){
        var row = ""
        var sz = keys.length;
        for(let j=0; j<sz; j++){
            row += head[keys[j]][i]
            if(j!=sz-1)
                row += ","
        }
        row += "\r\n"
        csv += row
    }
    console.log(csv)
    download("data.csv",csv)
    return csv;
}
