module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/sass/global/_variables.scss";
          @import "@/sass/global/_breakpoints.scss";
        `
            }
        }
    }
};