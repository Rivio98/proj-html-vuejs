import { reactive } from 'vue';

export const store = reactive({
    menus: [
        {
            title: "Home",
            dropdowns: ["Dashboard", "Profile", "Settings"]
        },
        {
            title: "Celebrity",
            dropdowns: ["Top Stars", "Interviews", "News"]
        },
        {
            title: "Movie",
            dropdowns: ["Now Showing", "Upcoming Releases", "Reviews"]
        },
        {
            title: "Page",
            dropdowns: ["About Us", "Services", "Careers"]
        },
        {
            title: "Shop",
            dropdowns: ["New Arrivals", "Best Sellers", "Discounts"]
        },
        {
            title: "Blog"
        },
        {
            title: "Contact Us"
        }
    ]
});
