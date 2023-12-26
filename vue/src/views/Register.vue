<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register Now!
            </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit="register">
            <div class="flex flex-col mb-5">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <UserIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                    </div>
                    <input id="name" name="name" type="text" autocomplete="name" v-model="user.name" required
                        class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="flex flex-col mb-5">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <AtSymbolIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                    </div>
                    <input id="email" name="email" type="email" autocomplete="email" v-model="user.email" required
                        class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="flex flex-col mb-5">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                    </div>
                    <input id="password" name="password" type="password" autocomplete="password" v-model="user.password" required
                        class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            
            <div class="flex flex-col mb-5">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                    <div class="relative">
                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                        </div>
                        <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="password_confirmation" v-model="user.password_confirmation" required
                            class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

            <button type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register
            </button>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already has an Account?
            <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login Here!</router-link>
        </p>
    </div>
</template>
<script setup>
import {UserIcon} from "@heroicons/vue/24/solid"; 
import { AtSymbolIcon } from "@heroicons/vue/24/solid"; 
import { LockClosedIcon } from "@heroicons/vue/24/solid";

import store from "../store";
import {useRouter} from 'vue-router';

const router = useRouter();

const user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

function register(e) {
    e.preventDefault();
    store.dispatch('register',user).then((res) => {
        router.push({
            name: 'Dashboard'
        })
    })
}
</script>

<style scoped></style>


