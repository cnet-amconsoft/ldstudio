const imagePreloader = (arrayOfUrl) => {
    for (let url of arrayOfUrl) {
        const img = new Image();
        img.src = url;
    }
};

export default imagePreloader