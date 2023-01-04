

export const formatDate =(date) =>{
    const hours = new Date(date).getHours();
    const minutes= new Date(date).getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
}


export const downloadMedia =(e, originalImage) =>{
    e.preventDefault();

    try {
        fetch(originalImage)
        .then(res => res.blob())
        .then(blob =>{
            const url = window.URL.createObjectURL(blob);
            const a= document.createElement("a");
            a.style.display= "none";
            a.href =url;

            const nameSplit = originalImage.split("/");
            const duplicateName = nameSplit.pop();

            a.download = "" + duplicateName+"";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(error => console.log("error while downloading img", error.message))
    } catch (error) {
        console.log("error while downloading img", error.message);
    }
}