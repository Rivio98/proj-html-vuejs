<script>

import { store } from '../../store.js';

export default {
    setup() {
        return { store };
    }
};
</script>

<template>
    <div class="menu-container">
        <ul class="nav">
            <li v-for="menu in store.menus" :key="menu.title" class="nav-item dropdown">
                <a v-if="menu.dropdown" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{ menu.title }}
                    <i class="bi bi-caret-down-fill align-middle"></i>
                </a>
                <a v-else href="#" class="nav-link">
                    {{ menu.title }}
                </a>
                <ul v-if="menu.dropdown" class="dropdown-menu">
                    <li v-for="item in menu.dropdown" :key="item" class="dropdown-item">
                        {{ item }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.menu-container {
    padding: 10px;
}

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
}

.bi-caret-down-fill {
    margin-left: 0.5rem;
}
</style>