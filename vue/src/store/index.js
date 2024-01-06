import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id:100,
        title: "First Survey",
        slug: "first-survey",
        status: "draft",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        description:"Explore over 200 millions of royalty free images at Shutterstock and stop worrying about having to pay royalties every time you use a photo.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expired_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                qustion:"what is your name",
                description: null,
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                qustion:"what is your name",
                description: "lafalfnklasdfnlafaslkfn",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                qustion:"what is your name",
                description: "fffffffffffffffffffffffffffffffff",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                qustion:"what is your name",
                description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 5,
                type: "checkbox",
                qustion:"what is your name",
                description: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 6,
                type: "text",
                qustion:"what is your name",
                description: "What is your name?",
                data: {}
            },
            {
                id: 7,
                type: "textarea",
                qustion:"what is your name",
                description: "What is your name?",
                data: {}
            },
        ],
    },
    {
        id:200,
        title: "Second Survey",
        slug: "second-survey",
        status: "active",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        description:"Explore over 200 millions of royalty free images at Shutterstock and stop worrying about having to pay royalties every time you use a photo.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expired_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                qustion:"what is your name",
                description: null,
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                qustion:"what is your name",
                description: "lafalfnklasdfnlafaslkfn",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                qustion:"what is your name",
                description: "fffffffffffffffffffffffffffffffff",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                qustion:"what is your name",
                description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 5,
                type: "checkbox",
                qustion:"what is your name",
                description: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
                data: {
                    options: [
                        {uuid: "e8f577fd-069e-479d-8bb0-58866865792d",text:"USA"},
                        {uuid: "e74ac3d0-cb4c-4c2c-b683-db1c6696d125",text:"PAK"},
                        {uuid: "2be51460-17b6-4f82-b3e3-0b4e55a0c3f7",text:"UK"},
                        {uuid: "5821a80d-4a8a-4341-ab37-246888c5fa7d",text:"UAE"}
                    ]
                }
            },
            {
                id: 6,
                type: "text",
                qustion:"what is your name",
                description: "What is your name?",
                data: {}
            },
            {
                id: 7,
                type: "textarea",
                qustion:"what is your name",
                description: "What is your name?",
                data: {}
            },
        ],
    },
    {
        id:300,
        title: "Third Survey",
        slug: "third-survey",
        status: "draft",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        description:"Explore over 200 millions of royalty free images at Shutterstock and stop worrying about having to pay royalties every time you use a photo.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expired_date: "2021-12-31 18:00:00",
        questions:[],
    },

]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text","select","radio","checkbox","textarea"],
    },
    getters: {},
    actions: {
        saveSurvey({commit}, survey){
            let response;
            if(survey.id){
                response = axiosClient
                .put(`/survey/${survey.id}`, survey)
                .then((res) => {
                    commit("updateSurvey", res.data);
                    return res;
                });
            }else{
                response = axiosClient.post("/survey",survey).then((res) => {
                    commit("saveSurvey", res.data);
                    return res;
                })
            }
            return response;
        },
        register({commit},user){
            return axiosClient.post('/register', user).then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        login({commit},user){
            return axiosClient.post('/login', user).then(({data}) => {                
                commit('setUser', data);
                return data;
            })
        },
        logout({commit}){
            return axiosClient.post('/logout').then(res => {
                commit('logout')
                return res;
            });
        }
    },
    mutations: {
        saveSurvey: (state, survey) => {
            state.surveys = [...state.surveys, survey.data];
        },
        updateSurvey: (state, survey) => {
            state.surveys = state.surveys.map((s) => {
                if(s.id == survey.data.id){
                    return survey.data;
                }
                return s;
            });
        },        
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
        },
        setUser: (state, userData) =>{
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN',userData.token)
        }
    },
    modules: {}
})

export default store;