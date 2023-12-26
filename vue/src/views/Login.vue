<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6 " @submit="login">
            <Alert v-if="errorMsg">
          {{ errorMsg }}
          <span @click="errorMsg = ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </Alert>
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
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
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
                <div class="flex">
                    <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                    </label>
                </div>
            </div>

            <button type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>    
                Login
            </button>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <router-link :to="{name: 'Register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Here!</router-link>
        </p>
    </div>

</template>
<script setup>
    import { LockClosedIcon } from "@heroicons/vue/24/solid"; 
    import { AtSymbolIcon } from "@heroicons/vue/24/solid";
    import store from "../store";
    import Alert from "../components/Alert.vue";
    import { useRouter } from "vue-router";
    import { ref } from "vue";

    const router = useRouter();
    let errorMsg = ref("");
    let loading = ref(false);

    const user = {
        email: '',
        password: '',
        remember: false
    }
    function login(e) {
    e.preventDefault();

    loading.value = true;
    store.dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({
                name: "Dashboard",
            });
        })
        .catch((err) => {
            loading.value = false;
            errorMsg.value = err.response.data.error;
        });
}
</script>

<style scoped></style>


