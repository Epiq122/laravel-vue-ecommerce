<script setup>
import {
    Bars3Icon,
    ChevronDownIcon,
    ArrowRightEndOnRectangleIcon,
    UserIcon,
} from "@heroicons/vue/24/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
    <header
        class="p-3 h-15 shadow bg-gray-600 flex justify-between items-center"
    >
        <button
            @click="emit('toggle-sidebar')"
            class="p-4 hover:bg-black/10 flex items-center justify-center"
        >
            <Bars3Icon class="w-6" />
        </button>

        <Menu as="div" class="relative inline-block text-left">
            <MenuButton class="flex items-center">
                <img
                    src="https://randomuser.me/api/portraits/lego/2.jpg"
                    alt="Profile"
                    class="h-10 w-10 rounded-full mr-2"
                />
                <small>Artimus Gordon</small>
                <ChevronDownIcon
                    class="-mr-1 ml-2 h-5 w-5 text-violet-300 hover:text-violet-100"
                    aria-hidden="true"
                />
            </MenuButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-violet-500 text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                <UserIcon
                                    :active="active"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                Profile
                            </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-violet-500 text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                <ArrowRightEndOnRectangleIcon
                                    :active="active"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                Logout
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </header>
</template>

<style scoped></style>
