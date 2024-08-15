<template>
<notifications position="bottom right" width="500" />
<component :is="activeRoute" :params="params"></component>
<component :is="mainMenu" :menu="menus"></component>
<component :is="configMenu" :menu="configMenus"></component>
<FormLoader :active="loader" />
</template>

<script>
// import { RouterView } from 'vue-router';
import {
    markRaw
} from "vue";
import FormLoader from "@/components/template/FormLoader.vue";
import MainMenu from "@/views/template/MainMenuView.vue";
import ConfigMenu from "@/views/template/ConfigMenuView.vue";

// firestore testing
import {
    doc,
    getDoc,
    onSnapshot,
    updateDoc
} from "firebase/firestore";
import db from "@/firebase/init.js";

const componentViews =
    import.meta.globEager("@/views/*.vue");
const componentPages =
    import.meta.globEager("@/views/pages/**/*.vue");
const componentAuth =
    import.meta.globEager("@/views/auth/*.vue");

const API_URL = 
    import.meta.env.VITE_API_PATH;

let routeComponent = {};
Object.entries(componentViews).forEach((path, i) => {
    let name = path[0].split("/").pop().replace(".vue", "");
    routeComponent[name] = path[1].default;
});
Object.entries(componentPages).forEach((path, i) => {
    let name = path[0].split("/").pop().replace(".vue", "");
    routeComponent[name] = path[1].default;
});
Object.entries(componentAuth).forEach((path, i) => {
    let name = path[0].split("/").pop().replace(".vue", "");
    routeComponent[name] = path[1].default;
});

const currentUrl = window.location.pathname;

export default {
    components: {
        FormLoader,
    },
    data() {

        let routes = "";
        if (
            sessionStorage.getItem("page") != null &&
            localStorage.getItem("auth") != null
        ) {
            routes = markRaw(routeComponent[sessionStorage.getItem("page")]);
        } else if (
            sessionStorage.getItem("page") == null &&
            localStorage.getItem("auth") != null
        ) {
            routes = markRaw(routeComponent["DashboardView"]);
        } else if (
            localStorage.getItem("token") == null &&
            currentUrl == "/verify"
        ) {
            routes = markRaw(routeComponent["VerifyView"]);
        } else if (currentUrl == "/privacy-policy") {
            routes = markRaw(routeComponent["PrivacyAndPolicy"]);
        } else {
            routes = markRaw(routeComponent["LoginView"]);

        }

        const auth = JSON.parse(localStorage.getItem("auth"));

        return {
            activeRoute: routes,
            mainMenu: markRaw(MainMenu),
            configMenu: markRaw(ConfigMenu),
            params: null,
            menus: routeComponent,
            loader: false,
            configMenus: routeComponent,
            API_URL: API_URL,

            // testing firestore
            flagFirebaseNotif: false,
            docFirebase: doc,
            getDocFirebase: getDoc,
            onSnapshotFirebase: onSnapshot,
            updateDocFirebase: updateDoc,
            testing: {
              tes: "tes",
            },
            dbFirebase: db,
            notif_crm: {
                crm_user: "crm_user",
                crm_supervisor: "crm_supervisor",
                crm_manager: "crm_manager",
            },
        };

    },

    // firestore testing
    created() {
        this.getNotifFirebase();
    },

    mounted() {

    },
    methods: {
        // testing firestore
        async sendNotifFirebase(header, body) {
            //return false;

            var mythis = this;
            console.log("update");
            const fireBaseTime = new Date();
            //console.log(mythis.$root.notif_crm);
            Object.keys(mythis.$root.testing).forEach(async function (key) {
                await mythis.$root.updateDocFirebase(
                    mythis.$root.docFirebase(
                        mythis.$root.dbFirebase,
                        "testing",
                        mythis.$root.testing[key]
                    ), {
                        header_pesan: header,
                        body_pesan: body,
                        updated_at_pesan: fireBaseTime,
                    }
                );
            });
        },
        async getNotifFirebase() {
            // register realtime listener
            // for changes on 'GB' document
            onSnapshot(doc(db, "testing", "tes"), (snap) => {
                if (this.flagFirebaseNotif == false) {
                    this.flagFirebaseNotif = true;
                    return false;
                }

                console.log(snap.data());
                this.header_pesan = snap.data().header_pesan;
                this.body_pesan = snap.data().body_pesan;
                this.updated_at_pesan = snap.data().updated_at_pesan;

                this.$notify({
                    title: this.header_pesan,
                    text: this.body_pesan,

                    closeOnClick: true,
                    pauseOnHover: true,
                    duration: 1800000,
                });
            });
        },

        goto: function (comp, p) {
            if (typeof p != "undefined") {
                this.params = p;
            }
            console.log(comp + 'aaaaaaaaaa');
            this.activeRoute = markRaw(routeComponent[comp]);
            sessionStorage.setItem("page", comp);
        },

    },
};
</script>

<style scoped>
.title {
    margin: 0;
    padding: 0px;
    font-size: 16px;
    color: #ffffff;
}

.my-notification {
    margin: 0 5px 5px;
    padding: 10px;
    font-size: 15px;
    color: #ffffff;

    background: #44a4fc;
    border-left: 5px solid #187fe7;

    &.success {
        background: #68cd86;
        border-left-color: #42a85f;
    }

    &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    &.error {
        background: #e54d42;
        border-left-color: #b82e24;
    }
}
</style>
