import { reactive } from "vue";

export const store = reactive({
    menus: [
        {
            title: "Home",
            arrow: true,
            dropdown: [
                "Home",
                "Home",
                "Home"
            ]
        },
        {
            title: "Celebrity",
            arrow: true,
            dropdown: [
                "Celebrity",
                "Celebrity",
                "Celebrity"
            ]
        },
        {
            title: "Movie",
            dropdown: [
                "Movie",
                "Movie",
                "Movie"
            ]
        },
        {
            title: "Page",
            dropdown: [
                "Page",
                "Page",
                "Page"
            ]
        },
        {
            title: "Shop",
            dropdown: [
                "Shop",
                "Shop",
                "Shop"
            ]
        },
        {
            title: "Blog",
            dropdown: false,
        },
        {
            title: "Contact Us",
            dropdown: false,
        }
    ],
});



