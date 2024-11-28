<template>
    <Pages :title="title">
        <div class="container-fluid">
            <div class="mb-3">

                <div class="row">

                    <div class="col-md-6">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="">Bulan</label>
                                </div>
                                <div class="col-md-8">
                                    <v-select :options="cboBulanCallplan" v-model="cboBulanCallplanVal"
                                        @update:modelValue="mySelectEvent3()" :clearable="false"></v-select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="">Tahun</label>
                                </div>
                                <div class="col-md-8">
                                    <v-select :options="cboTahunCallplan" v-model="cboTahunCallplanVal"
                                        @update:modelValue="mySelectEvent5()" :clearable="false"></v-select>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="">Salesman</label>
                                </div>
                                <div class="col-md-8">
                                    <v-select :options="cboSalesmanCallplan" v-model="cboSalesmanCallplanVal"
                                        @update:modelValue="mySelectEvent()" :clearable="false"></v-select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="">Frekuensi</label>
                                </div>
                                <div class="col-md-8">
                                    <v-select :disabled="!cboSalesmanCallplanVal" :options="cboFrekuensiCallplan"
                                        v-model="cboFrekuensiCallplanVal" @update:modelValue="mySelectEvent7()"
                                        :clearable="false"></v-select>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="row">
                    <table border="1">

                        <div id="planDetail" class="col-md-20" v-if="cboFrekuensiCallplanVal"> Daily Call Plan
                            <template v-for="(x, idx) in todo.frekuensi">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <VueDatePicker v-model="data_tgl[idx]" :enableTimePicker="false"
                                                :format="format" placeholder="Pilih Tanggal">
                                            </VueDatePicker>
                                        </div>
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-2">
                                            <v-select :options="cboCabangCallplan" v-model="data_cabang[idx]"
                                                @update:modelValue="mySelectEvent9(idx)" :clearable="false"
                                                placeholder="Pilih Cabang"></v-select>
                                        </div>
                                        <div class="col-md-2">
                                        </div>
                                        <div class="col-md-2">
                                            <v-select :id="`data_toko_${idx}`" :options="cboTokoCallplan[idx]"
                                                v-model="data_toko[idx]" @update:modelValue="mySelectEvent10()"
                                                :clearable="false" placeholder="Pilih Toko"
                                                :disabled="!data_cabang[idx]"></v-select>
                                        </div>
                                    </div>
                                </div>
                            </template>

                        </div>
                    </table>

                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <!-- <pre>{{ todo }}</pre>todo
                        <pre>{{ data_tgl }}</pre>data_tgl
                        <pre>{{ data_toko }}</pre>data_toko
                        <pre>{{ data_cabang }}</pre>data_cabang -->
                            <Button type="button" @click="saveTodo">Simpan</Button>
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
            <FormModal :show="showModal" :style="showmodal_zindex" @close="showModal = false">
                <template #header>
                    <h3>Edit Form</h3>
                </template>
                <template #body>
                    <div style="width: 90vw">
                        <div class="mb-3">

                            <div class="row">

                                <div class="col-md-6">

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Bulan</label>
                                            </div>
                                            <div class="col-md-8">
                                                <v-select :options="cboBulanCallplan" v-model="cboBulanCallplanVal2"
                                                    @update:modelValue="mySelectEvent4()" :clearable="false"></v-select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Tahun</label>
                                            </div>
                                            <div class="col-md-8">
                                                <v-select :options="cboTahunCallplan" v-model="cboTahunCallplanVal2"
                                                    @update:modelValue="mySelectEvent6()" :clearable="false"></v-select>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6">

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Salesman</label>
                                            </div>
                                            <div class="col-md-8">
                                                <v-select :options="cboSalesmanCallplan"
                                                    v-model="cboSalesmanCallplanVal2"
                                                    @update:modelValue="mySelectEvent2()" :clearable="false"></v-select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Frekuensi</label>
                                            </div>
                                            <div class="col-md-8">
                                                <v-select :options="cboFrekuensiCallplan"
                                                    v-model="cboFrekuensiCallplanVal2"
                                                    @update:modelValue="mySelectEvent8()" :clearable="false"
                                                    placeholder="Pilih Frekuensi"></v-select>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-" v-for="(items, index) in todo2.details">
                                        <input type="text" v-model="items.date">
                                        <input type="text" v-model="items.store_id">

                                        <v-select :options="cboCabangCallplan" v-model="data_cabang[index]"
                                            @update:modelValue="mySelectEvent9(idx)(index)" :clearable="false"
                                            placeholder="Pilih Cabang"></v-select>

                                        <v-select :id="`data_toko_${index}`" :options="cboTokoCallplan2[index]"
                                            v-model="items.store_id" @update:modelValue="mySelectEvent12()"
                                            :clearable="false" placeholder="Pilih Toko"></v-select>
                                    </div>

                                    <!-- <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Daily Plan</label>
                                        </div>
                                        <div class="col-md-8">
                                            <v-select :options="cboCabang" v-model="cboCabangVal" @update:modelValue="mySelectEvent()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div> -->
                                    <div class="row">
                                        <table border="1">

                                            <div id="planDetail" class="col-md-20" v-if="cboFrekuensiCallplanVal"> Daily
                                                Call Plan
                                                <template v-for="(x, idx) in cboFrekuensiCallplanVal">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <VueDatePicker v-model="data_tgl[idx]"
                                                                    :enableTimePicker="false" :format="format"
                                                                    placeholder="Pilih Tanggal">
                                                                </VueDatePicker>
                                                            </div>
                                                            <div class="col-md-1">
                                                            </div>
                                                            <div class="col-md-2">
                                                                <v-select :options="cboCabangCallplan1"
                                                                    v-model="data_cabang[idx]"
                                                                    @update:modelValue="mySelectEvent11(idx)"
                                                                    :clearable="false"
                                                                    placeholder="Pilih Cabang"></v-select>
                                                            </div>
                                                            <div class="col-md-2">
                                                            </div>
                                                            <div class="col-md-2">
                                                                <v-select :id="`data_toko_${idx}`"
                                                                    :options="cboTokoCallplan2[idx]"
                                                                    v-model="data_toko[idx]"
                                                                    @update:modelValue="mySelectEvent12()"
                                                                    :clearable="false" placeholder="Pilih Toko"
                                                                    :disabled="!data_cabang[idx]"></v-select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>

                                            </div>
                                        </table>

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
            </FormModal>
        </Teleport>
    </Pages>
</template>

<script>
import Pages from "@/components/template/Pages.vue";
import FormInput from "@/components/forms/FormInput.vue";
import Button from "@/components/forms/FormButton.vue";
import FormModal from "@/components/forms/FormModal.vue";
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
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        };
        return {
            i: null,
            data_tgl: [],
            data_toko: [],
            data_cabang: [],
            format: format,
            title: "Master Call Plan",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                fullname: "",
                month_plan: "",
                year_plan: "",
                data_toko: "",
                data_tgl: "",
                frekuensi: "",
            },

            tipeWarehouseOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],
            cboSalesmanCallplanVal2: [],
            cboBulanCallplanVal2: [],
            cboTahunCallplanVal2: [],
            cboFrekuensiCallplanVal2: [],

            todo2: {
                fullname: "",
                month_plan: "",
                year_plan: "",
                data_toko: "",
                data_tgl: "",
                frekuensi: "",
            },

            cboCabangCallplan: [{
                code: 1,
                label: "ALL CABANG"
            },],

            cboTokoCallplan: [{
                code: 1,
                label: "ALL TOKO"
            },],

            cboSalesmanCallplan: [{
                code: 1,
                label: "ALL SALESMAN"
            },],

            cboTahunCallplan: [{
                code: 0,
                label: "2024"
            },
            {
                code: 1,
                label: "2025"
            },
            ],

            cboFrekuensiCallplan: [

                {
                    code: 2,
                    label: "F2"
                },
                {
                    code: 4,
                    label: "F4"
                },
                {
                    code: 6,
                    label: "F6"
                },
                {
                    code: 8,
                    label: "F8"
                },
            ],

            cboBulanCallplan: [{
                code: 1,
                label: "Januari"
            },
            {
                code: 2,
                label: "Februari"
            },
            {
                code: 3,
                label: "Maret"
            },
            {
                code: 4,
                label: "April"
            },
            {
                code: 5,
                label: "Mei"
            },
            {
                code: 6,
                label: "Juni"
            },
            {
                code: 7,
                label: "Juli"
            },
            {
                code: 8,
                label: "Agustus"
            },
            {
                code: 9,
                label: "September"
            },
            {
                code: 10,
                label: "Oktober"
            },
            {
                code: 11,
                label: "November"
            },
            {
                code: 12,
                label: "Desember"
            },
            ],

            errorList: "",
            errorField: {
                type: false,
            },

            cboTokoCallplanVal2: null,
            cboCabangCallplanVal1: null,

            cboTokoCallplanVal: null,
            cboCabangCallplanVal: null,
            cboSalesmanCallplanVal: null,
            cboBulanCallplanVal: null,
            cboTahunCallplanVal: null,
            cboFrekuensiCallplanVal: null,

            userid: JSON.parse(localStorage.getItem("user")),
            tokens: JSON.parse(localStorage.getItem('tokens')),

            uObject: "",
        };
    },
    mounted() {
        this.getTable();
        // this.getFieldCallplan();
        // this.getCboCabangCallplan();
        //this.getCboTokoCallplan();
        this.getCboSalesmanCallplan();
        // this.getCboBulanCallplan();
        // this.getCboTahunCallplan();
        // this.getCboFrekuensiCallplan();
        //this.getCbowhsCodeType();
        //this.userid = "9999";

        this.uObject = JSON.parse(localStorage.getItem("auth"));
    },
    methods: {
        addTgl() {
            this.data_tgl.push({
                value: 'test'
            })
        },
        // getFieldCallplan() {
        //     var mythis = this;
        //     mythis.$root.loader = true;
        //     axios
        //         .get(mythis.$root.API_URL + "sgs/getFieldCallplan")
        //         .then((res) => {
        //             // mythis.cboTokoCallplan = res.data.data;
        //             // mythis.cboCabangCallplan = res.data.data;
        //             //console.log(res.data.data);
        //             mythis.$root.loader = false;
        //         });
        // },
        getCboDateCallplandetail() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get(mythis.$root.API_URL + "sgs/getCboDateCallplandetail")
                .then((res) => {
                    mythis.data_tgl = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getCboCabangCallplan(data) {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get(mythis.$root.API_URL + "api/v2/salesmenById/?user_id=" + data)
                .then((res) => {
                    mythis.cboCabangCallplan = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getCboTokoCallplan(idx, data) {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get(mythis.$root.API_URL + "sgs/getCboTokoCallplan?cabang=" + data,

                )
                .then((res) => {
                    mythis.cboTokoCallplan[idx] = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getCboSalesmanCallplan() {
            var mythis = this;
            const header = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.tokens.access_token}`
            };
            axios
                .get(mythis.$root.API_URL + "api/v2/salesmenById/" + this.userid.user_id, {
                    headers: header
                })
                .then((res) => {
                    mythis.cboSalesmanCallplan = res.data;
                    console.log(res.data.fullname);
                    // mythis.$root.loader = false;
                });
        },
        // getCboFrekuensiCallplan() {
        //     var mythis = this;
        //     mythis.$root.loader = true;
        //     axios
        //         .get(mythis.$root.API_URL + "sgs/getCboFrekuensiCallplan")
        //         .then((res) => {
        //             mythis.cboFrekuensiCallplan = res.data.data;
        //             //console.log(res.data.data);
        //             mythis.$root.loader = false;
        //         });
        // },
        // getCboBulanCallplan() {
        //     var mythis = this;
        //     mythis.$root.loader = true;
        //     axios
        //         .get(mythis.$root.API_URL + "sgs/getCboBulanCallplan")
        //         .then((res) => {
        //             mythis.cboBulanCallplan = res.data.data;
        //             //console.log(res.data.data);
        //             mythis.$root.loader = false;
        //         });
        // },
        // getCboTahunCallplan() {
        //     var mythis = this;
        //     mythis.$root.loader = true;
        //     axios
        //         .get(mythis.$root.API_URL + "sgs/getCboTahunCallplan")
        //         .then((res) => {
        //             mythis.cboTahunCallplan = res.data.data;
        //             //console.log(res.data.data);
        //             mythis.$root.loader = false;
        //         });
        // },
        mySelectEvent() {
            this.todo.user_id = this.cboSalesmanCallplanVal.code;
            this.getCboCabangCallplan(this.cboSalesmanCallplanVal.label);
            this.data_cabang = [];
            this.data_toko = [];
        },
        mySelectEvent2() {
            this.todo2.fullname = this.cboSalesmanCallplanVal2.label;
        },
        mySelectEvent3() {
            this.todo.month_plan = this.cboBulanCallplanVal.code;
        },
        mySelectEvent4() {
            this.todo2.month_plan = this.cboBulanCallplanVal2.code;
        },
        mySelectEvent5() {
            this.todo.year_plan = this.cboTahunCallplanVal.label;
        },
        mySelectEvent6() {
            this.todo2.year_plan = this.cboTahunCallplanVal2.label;
        },
        mySelectEvent7() {

            this.todo.frekuensi = this.cboFrekuensiCallplanVal.code;
            const defaultx = [];
            for (let i = 0; i < this.cboFrekuensiCallplanVal.code; i++) {
                this.cboTokoCallplan[i] = defaultx;
            }
        },
        mySelectEvent8() {
            this.todo2.frekuensi = this.cboFrekuensiCallplanVal2.code;
        },
        mySelectEvent9(idx) {
            // console.log(this.data_cabang[idx]);
            // console.log(this.data_cabang[idx].code);
            //this.todo.nama_cabang = this.data_cabang[idx].code;
            this.getCboTokoCallplan(idx, this.data_cabang[idx].code);
        },
        mySelectEvent10() {
            this.todo.store_name = this.cboTokoCallplanVal.code;
        },
        mySelectEvent11() {
            this.todo.data_cabang = this.cboCabangCallplan1.code;
        },
        mySelectEvent12() {
            this.todo.store_name = this.cboTokoCallplanVal2.code;
        },
        resetForm() {
            var mythis = this;
            Object.keys(mythis.errorField).forEach(function (key) {
                mythis.errorField[key] = false;
                mythis.todo[key] = "";
                mythis.todo2[key] = "";
            });
            mythis.errorList = "";
            mythis.tmp_whsCodeType = "";
            mythis.cboSalesmanCallplanVal = "";
            mythis.cboBulanCallplanVal = "";
            mythis.cboTahunCallplanVal = "";
            mythis.cboFrekuensiCallplanVal = "";
        },
        getCbowhsCodeType() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get(this.$root.apiHostWmsTPS + "wms/getCbowhsCodeType")
                .then((res) => {
                    this.tipeWarehouseOptions = res.data.resource;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getTable() {
            var mythis = this;
            this.grid2.updateConfig({
                language: idID,
                pagination: {
                    limit: 10,
                    server: {
                        url: (prev, page, limit) =>
                            `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${page * limit
                            }`,
                    },
                },
                search: {
                    server: {
                        url: (prev, keyword) => `${prev}?search=${keyword}`,
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
                    id: "user",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>USER SALESMAN</b></div>'
                    ),
                },

                {
                    id: "planbulan",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PLAN BULAN KE</b></div>'
                    ),
                },

                {
                    id: "date",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TANGGAL PLAN</b></div>'
                    ),
                },

                {
                    id: "storename",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TOKO</b></div>'
                    ),
                },

                {
                    id: "updateat",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>UPDATE AT</b></div>'
                    ),
                },

                // {
                //     id: "createdby",
                //     name: html(
                //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CREATED BY</b></div>'
                //     ),
                // },

                {
                    name: "AKSI",
                    formatter: (_, row) =>
                        html(
                            `
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa-solid fa-pen-to-square"></i></button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa-solid fa-trash-can"></i></button>
              `
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
                    // url: mythis.$root.API_URL + 'sgs/call-plans',
                    url: mythis.$root.API_URL + 'sgs/call-plans',
                    then: (data) =>
                        data.resource.data.map((card, index) => [
                            index + 1,
                            index + 1,
                            // card.user_fullname,
                            card.user.fullname,
                            card.month_plan + '-' + card.year_plan,
                            card.details.map(datax => datax.date + '\n'),
                            card.details.map(datax => datax.store.store_id + '-' + datax.store.store_name + '\n'),
                            // card.details.map(data => data.store.store_code + '-' + data.store.store_name + '\n'),

                            // card.date,
                            // card.store_name,
                            card.updated_at,
                            // card.created_by,
                        ]),
                    total: (data) => data.count,
                    handle: (res) => {
                        // no matching records found
                        if (res.status === 404) return {
                            data: []
                        };
                        if (res.ok) return res.json();

                        throw Error("oh no :(");
                    },
                },
            });
            // DOM instead of vue selector because we are using vanilla JS
            this.grid2.render(document.getElementById("wrapper2"));
            this.number = 0;

            $(document).off("click", "#editData");
            $(document).off("click", "#deleteData");
            mythis.jqueryDelEdit();
        },

        refreshTable() {
            var mythis = this;
            //////////////////////////////
            $("#wrapper2").remove();
            var e = $('<div id="wrapper2"></div>');
            $("#box").append(e);
            this.getTable();
            //////////////////////////////
        },

        jqueryDelEdit() {
            const mythis = this;

            $(document).on("click", "#editData", function () {
                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal();
                mythis.$root.loader = true;
                axios
                    .get(mythis.$root.API_URL + 'sgs/call-plans/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.resource).forEach(function (key) {
                            mythis.todo2 = res.data.resource;
                        });

                        // let details = [];
                        // // console.log(mythis.todo2.details)
                        // mythis.todo2.details.forEach(element => {
                        //     details.push({
                        //         date: element.date,
                        //         store_id: element.store_id
                        //     })
                        // });

                        // mythis.frekuensiDetails = details;
                        // console.log(this.frekuensiDetails);
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.cboSalesmanCallplanVal2 = mythis.todo2.user.fullname;
                        mythis.cboTahunCallplanVal2 = mythis.todo2.year_plan;
                        mythis.cboBulanCallplanVal2 = mythis.todo2.month_plan;
                        mythis.cboFrekuensiCallplanVal2 = mythis.todo2.frekuensi;

                        mythis.$root.loader = false;
                    });
            });
            $(document).on("click", "#deleteData", function () {
                let id = $(this).data("id");
                mythis.deleteTodo(id);
            });
        },

        deleteTodo(id) {
            var mythis = this;
            Swal.fire({
                title: "Menghapus Data",
                text: "Apakah kamu yakin?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya",
                cancelButtonText: "Batal",
            }).then((result) => {
                if (result.isConfirmed) {
                    mythis.$root.loader = true;
                    axios
                        .delete(mythis.$root.API_URL + 'sgs/call-plans/' + id, {
                            data: {
                                fileUpload: "form satuan",
                                userid: mythis.userid,
                            },
                        })
                        .then((res) => {
                            //console.log(res.data.data);
                            Swal.fire("Terhapus!", "Data telah sukses dihapus", "success");
                            mythis.$root.loader = false;
                            mythis.refreshTable();
                            mythis.resetForm();
                        });
                    //     .catch(function (error) {
                    //   if (error.response) {
                    //     if (error.response.status == 422) {
                    //       mythis.errorList = error.response.data;
                    //       mythis.$root.loader = false;
                    //       if (Object.keys(mythis.errorList).length > 0) {
                    //         Object.keys(mythis.errorField).forEach(function (key) {
                    //           mythis.errorField[key] = false;
                    //         });
                    //         Object.keys(mythis.errorList).forEach(function (key) {
                    //           toast.error(mythis.errorList[key], { theme: 'colored' });
                    //           const myArray = key.split(".");
                    //           mythis.errorField[myArray[1]] = true;
                    //         });
                    //       }
                    //     }
                    //   } else if (error.request) {
                    //     console.log(error.request);
                    //   } else {
                    //     console.log('Error', error.message);
                    //   }
                    // });
                }
            });
        },

        saveTodo() {
            var mythis = this;
            var i;
            mythis.$root.loader = true;

            //error handler
            for (i = 0; i < this.todo.frekuensi; i++) {
                let aaa = i + 1;

                if (this.data_tgl[i] == 'null' || this.data_tgl[i] == null || this.data_tgl[i] == undefined) {
                    toast.error('Data Daily Plan Tanggal, Baris Ke : ' + aaa + ' harus terisi');
                    mythis.$root.loader = false;
                    return false;
                }
                if (this.data_toko[i] == 'null' || this.data_toko[i] == null || this.data_toko[i] == undefined) {
                    toast.error('Data Daily Plan Toko, Baris Ke : ' + aaa + ' harus terisi');
                    mythis.$root.loader = false;
                    return false;
                }
            }
            console.log(mythis.todo);

            axios
                .post(mythis.$root.API_URL + 'sgs/call-plans', {
                    data: mythis.todo,
                    data_tgl: mythis.data_tgl,
                    data_toko: mythis.data_toko,
                    fileUpload: "form satuan",
                    userid: mythis.userid,
                })
                .then((res) => {
                    Swal.fire("Created!", res.data.message, "success");
                    mythis.$root.loader = false;

                    mythis.refreshTable();
                    mythis.resetForm();
                    mythis.close();
                })
                .catch(function (error) {
                    if (error.response) {
                        //console.log(error.response.data);
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data;
                            mythis.$root.loader = false;
                            if (Object.keys(mythis.errorList).length > 0) {
                                //refresh semua menjadi false
                                Object.keys(mythis.errorField).forEach(function (key) {
                                    mythis.errorField[key] = false;
                                });
                                //membuat jika error jadi true
                                Object.keys(mythis.errorList).forEach(function (key) {
                                    toast.error(mythis.errorList[key], {
                                        theme: "colored"
                                    });

                                    const myArray = key.split(".");
                                    mythis.errorField[myArray[1]] = true;
                                });
                            }
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                });
        },

        close: function () {
            this.showModal = false;
            this.todo = {};
            this.todo2 = {};
            this.resetForm();
        },
        modal() {
            // binding data to form modal
            this.showModal = true;
            this.resetForm();
        },

        editTodo() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .put(
                    mythis.$root.API_URL + 'sgs/call-plans/' + mythis.acuanEdit, {
                    data: mythis.todo2,
                    fileUpload: "form satuan",
                    userid: mythis.userid,
                }
                )
                .then((res) => {
                    //console.log(res);
                    //alert(res.data.message);
                    Swal.fire("Updated!", res.data.message, "success");
                    mythis.$root.loader = false;

                    mythis.close();
                    mythis.refreshTable();
                })
                .catch(function (error) {
                    if (error.response) {
                        //console.log(error.response.data);
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data;
                            mythis.$root.loader = false;
                            if (Object.keys(mythis.errorList).length > 0) {
                                //refresh semua menjadi false
                                Object.keys(mythis.errorField).forEach(function (key) {
                                    mythis.errorField[key] = false;
                                });
                                //membuat jika error jadi true
                                Object.keys(mythis.errorList).forEach(function (key) {
                                    toast.error(mythis.errorList[key], {
                                        theme: "colored"
                                    });

                                    const myArray = key.split(".");
                                    mythis.errorField[myArray[1]] = true;
                                });
                            }
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                });
        },

        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
    },
};
</script>

<style scoped>
.input-error {
    border: red 1px solid;
}
</style>
