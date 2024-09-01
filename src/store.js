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
    ],

    footerMenus: [
        {
            title: "About Us",
            link: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectusquamsapiente, nemo cum doloresaut maiores esse magni eius ipsa! Deleniti tenetur sint natus tempora adipisci hicreprehenderit",
            socials: ["fa-brands fa-facebook-f", "fa-brands fa-twitter", "fa-brands fa-linkedin-in", "fa-brands fa-instagram", "fa-brands fa-google-plus-g"]
        },
        {
            title: "Movie Category",
            link: ["English New Movie", "Hindi All Movie", "Latest Tamil Movie", "New Top Rating Movie", "Horn New Movie", "Animation New Movie"]
        },
        {
            title: "Information",
            link: ["Youtube Video Post", "Actor Information", "New Promotion", "Latest Movie in English", "Latest Film Product", "Video New Video"]
        },
        {
            title: "Recent Posts",
            content: [{
                type: 'image',
                src: '/src/assets/blog-100x100.jpg',
                title: 'Actor The Concept Movie',
                overview: 'High Concempt Theory see',
                date: 'April 14,2020'
            },
            {
                type: 'image',
                src: '/src/assets/blog2-100x100.jpg',
                title: 'Actor The Concept Movie',
                overview: 'High Concempt Theory see',
                date: 'April 14,2020'
            },
            {
                type: 'image',
                src: '/src/assets/blog3-100x100.jpg',
                title: 'Actor The Concept Movie',
                overview: 'High Concempt Theory see',
                date: 'April 14,2020'
            }
            ]
        }
    ]
});
