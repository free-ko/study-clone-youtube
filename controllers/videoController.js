export const home = (req, res) => res.render("home", {
    pageTitle: "Home"
});

export const search = (req, res) => {
    const {
        query: {
            term: searchingBy
        }
    } = req;
    res.render("Search", {
        pageTitle: "Search",
        searchingBy
    });
};

export const videos = (req, res) => res.render("Videos", {
    pageTitle: "Videos"
});

export const upload = (req, res) => res.render("Videos Upload", {
    pageTitle: "Upload"
});

export const videoDetail = (req, res) => res.render("Videos Detail", {
    pageTitle: "Video Detail"
});

export const editVideo = (req, res) => res.render("Videos Edit", {
    pageTitle: "Edit Video"
});

export const deleteVideo = (req, res) => res.render("Videos Delete", {
    pageTitle: "Delete Video"
});