<template>
    <Pages :title="title">
        <div class="container-fluid">
            <div class="mb-2">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Tanggal</label>
                                </div>
                                <div class="col-md-6">
                                    <input v-model="tanggal" type="date" name="tanggal" id="tanggal" format="Y-M-d" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-3">
                                    <Button type="button" @click="refreshTable()">Lihat</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <!------------------------>
            <div class="block-content">
                <div id="wrapper2"></div>
                <div id="box"></div>
            </div>

            <!------------------------>
        </div>

        <!-- modals -->
        <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <!-- <FormModal :show="showModal" :style="showmodal_zindex" @close="showModal = false">
            <template #header>
                <h3>Edit Form</h3>
            </template>
<template #body>
                <div style="width: 90vw">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Approval</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.type ? 'input-error' : ''" v-model="todo2.approval" @input="
                          (val) =>
                            (todo2.approval = todo2.approval.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="text-center">
                        <button class="btn btn-success btn-sm me-1" @click="editTodo()">
                            Ubah Data
                        </button>
                    </div>
                </div>
            </template>
<template #footer>
                <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close">
                    Tutup
                </button>
            </template>
</FormModal> -->
        </Teleport>

        <Teleport to="body">
            <!-- use the modal component, pass in the prop -->

        </Teleport>
    </Pages>
</template>

<script>
import Pages from "@/components/template/Pages.vue";
import FormInput from "@/components/forms/FormInput.vue";
import Button from "@/components/forms/FormButton.vue";
import FormModal from "@/components/forms/FormModal.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from "axios";
import {
    ref
} from "vue";
import toast from "@/assets/js/toast";

import {
    Grid,
    h,
    html
} from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import {
    idID
} from "gridjs/l10n";

import $ from "jquery";

import Swal from "sweetalert2";

export default {
    components: {
        Pages,
        FormInput,
        Button,
        FormModal
    },
    props: {
        params: {
            default: null,
        },
    },
    data() {
        return {
            title: "Summary Profil Visit",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
           
            tokens: JSON.parse(localStorage.getItem('tokens')),
            tanggal:"",
        };
    },

    mounted() {
        // console.log(this.tokens.access_token);
        // this.getTable();
        this.getTable();
    },
    methods: {
        async sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        async getTable() {
            this.grid2.updateConfig({
                language: idID,
                pagination: {
                    limit: 10,
                    server: {
                        url: (prev, page, limit) =>
                            `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${page * limit
                            }&tanggal=${this.tanggal}`,
                    },
                },
                search: {
                    server: {
                        url: (prev, keyword) => `${prev}?search=${keyword}&tanggal=${this.tanggal}`,
                    },
                },
                columns: [{
                    name: "ID",
                    hidden: true
                },

                {
                    id: "nomor",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>NO</b></div>'
                    ),
                },


                {
                    id: "cabang",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CABANG</b></div>'
                    ),
                },
                {
                    id: "user",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>NAMA</b></div>'
                    ),
                },
                {
                    id: "jml_coverage",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>OUTLET COVERAGE</b></div>'
                    ),
                },
                {
                    id: "tanggal",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TANGGAL</b></div>'
                    ),
                },
                {
                    id: "jml_plan",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PLAN</b></div>'
                    ),
                },

                {
                    id: "jml_pln_trpenuhi",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PLAN TERPENUHI</b></div>'
                    ),
                },


                {
                    id: "jml_pln_trpenuhi",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PLAN TIDAK TERPENUHI</b></div>'
                    ),
                },

                {
                    id: "keterangan",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>KETERANGAN</b></div>'
                    ),
                },
                ],
                style: {
                    container: {
                        "font-size": "12px",
                    },
                    table: {
                        border: "1px solid #ccc",
                        "font-size": "12px",
                        margin: "0",
                        padding: "0",
                    },
                    th: {
                        "background-color": "rgb(111, 71, 189)",
                        color: "#FFFFFF",
                        border: "1px solid #ccc",
                        "text-align": "center",
                    },
                    td: {
                        "text-align": "center",
                        border: "1px solid #ccc",
                        padding: "5px 10px",
                    },
                },
                server: {
                    url: import.meta.env.VITE_API_PATH + 'api/v2/getCovPlans',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.tokens.access_token}`
                    },
                    then: (data) =>
                        data.results.map((card, index) => [
                            card.id,
                            index + 1,
                            card.kode_cabang,
                            card.fullname,
                            card.jml_coverage,
                            card.tanggal,
                            card.plan_day_in,
                            card.day_in_terpenuhi,
                            card.day_in_tidak_terpenuhi,
                            (card.day_in_terpenuhi == card.plan_day_in) ? html(`<span class="btn btn-sm btn-success text-white">Terpenuhi Semua</span>`) : html(`<span class="btn btn-sm btn-danger text-white">Tidak Terpenuhi</span>`),
                        ]),
                    total: (data) => data.count,
                    handle: (res) => {
                        // no matching records found
                        if (res.status === 404) return {
                            data: []
                        };
                        if (res.ok) return res.json();

                        console.log(res.status == 500);
                        if(res.status == 500){
                            // localStorage.clear();
                            // window.location.reload();   // toast.error(res.message);
                        }
                    },
                },
            });
            // DOM instead of vue selector because we are using vanilla JS
            this.grid2.render(document.getElementById("wrapper2"));
            this.number = 0;
        },

        async refreshTable() {
            var mythis = this;
            $("#wrapper2").remove();
            var e = $('<div id="wrapper2"></div>');
            $("#box").append(e);
            this.getTable();
        },


        async getDataTable(){
            try {
                const header = {
                     'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.tokens.access_token}`
                }

                const response = await axios.get(import.meta.env.VITE_API_PATH + 'api/v2/getCovPlans',{
                    headers : header,
                });

                const data  = response.data;
                console.log(data);
            } catch (error) {
                console.log(error.message)
                // console.log(error.message)
            }
        }

    },
};
</script>

<style scoped>
.input-error {
    border: red 1px solid;
}

.badge-danger {
    background-color: red;
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
}

.badge-success {
    background-color: green;
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
}

.badge-warning {
    background-color: rgb(255, 193, 7);
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
}
</style>
