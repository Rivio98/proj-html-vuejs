import { reactive } from 'vue';

export const store = reactive({
    menus: [
        { title: "Home", dropdown: ["Home", "Home", "Home"] },
        { title: "Celebrity", dropdown: ["Celebrity", "Celebrity", "Celebrity"] },
        { title: "Movie", dropdown: ["Movie", "Movie", "Movie"] },
        { title: "Page", dropdown: ["Page", "Page", "Page"] },
        { title: "Shop", dropdown: ["Shop", "Shop", "Shop"] },
        { title: "Blog" },
        { title: "Contact Us" }
    ]
});

