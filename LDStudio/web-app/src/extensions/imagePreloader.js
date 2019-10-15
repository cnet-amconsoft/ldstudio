class ImagePreloader {
    static images = [];



    static set Images(img) {
        return ImagePreloader.images.push(img);
    }

    static findById(backgroundId) {
        return ImagePreloader.images.find(i => i.id === backgroundId);
    }

    static findByPath(backgroundPath){
        return ImagePreloader.images.find(i => i.src.match(backgroundPath));
    }

    static async getLoadedImage(backgroundIdOrPath) {
        const image = ImagePreloader.images.find(i =>
            i.id === backgroundIdOrPath ||
            i.value === backgroundIdOrPath);

        if (!image.complete)
            await setTimeout(
                () => ImagePreloader.getLoadedImage(backgroundIdOrPath),
                30);

        return image;
    }

    static preloadImages(array) {
        let list = ImagePreloader.images;

        for (let i = 0; i < array.length; i++) {
            if (array[i].value.startsWith('#')) continue;

            let img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            };
            img.src = array[i].value;
            img.id = array[i].id;
            ImagePreloader.Images = img;
        }
    }
}

export default ImagePreloader