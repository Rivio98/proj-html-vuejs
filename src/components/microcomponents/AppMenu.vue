<script>

import { store } from '../../store.js';

export default {
    props: {
        menu: Object,
    }

};
</script>

<template>
    <div class="dropdown">
        <a class="nav-link" :class="{ 'dropdown-toggle': menu.dropdowns }" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ menu.title }}
        </a>
        <ul v-if="menu.dropdowns" class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="(dropdown, index) in menu.dropdowns" :key="index">
                <a class="dropdown-item" href="#">{{ dropdown }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.nav-item {
    position: relative;
}

.nav-link {
    color: #fff;
    padding: 0.5rem 1rem;
}

.nav-link:hover {
    color: #13be13;
}

.dropdown-menu {
    background-color: #060f19;
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}


.dropdown-item {
    color: #fff;
    padding: 0.5rem 1rem;
}

.dropdown-item:hover {
    background-color: #13be13;
    color: #fff;
    cursor: pointer;
}

.dropdown {
    cursor: pointer;
}
</style>