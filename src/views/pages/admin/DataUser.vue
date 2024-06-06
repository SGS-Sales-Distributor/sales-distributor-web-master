<template>
<Pages :title="title">
    <div class="container-fluid">
        <div class="mb-6">
            <div class="row">
                <div class="col-md-6">

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">NIK</label>
                            </div>
                            <div class="col-md-7">
                                <FormInput :class="errorField.user_nik ? 'input-error' : ''" v-model="todo.user_nik" @input="
                      (val) => 
                        (todo.user_nik = todo.user_nik.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">Nama Lengkap</label>
                            </div>
                            <div class="col-md-7">
                                <FormInput :class="errorField.user_fullname ? 'input-error' : ''" v-model="todo.user_fullname" @input="
                      (val) => 
                        (todo.user_fullname = todo.user_fullname.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">Username</label>
                            </div>
                            <div class="col-md-7">
                                <FormInput :class="errorField.user_name ? 'input-error' : ''" v-model="todo.user_name" @input="
                      (val) => 
                        (todo.user_name = todo.user_name.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">Email</label>
                            </div>
                            <div class="col-md-7">
                                <FormInput :class="errorField.user_email ? 'input-error' : ''" v-model="todo.user_email" @input="
                      (val) => 
                        (todo.user_email = todo.user_email.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-if="muncul">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">Cabang</label>
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboCabang" v-model="cboCabangVal" @update:modelValue="mySelectEvent()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-if="muncul">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- {{todo}} -->
                                <label for="">Outlet</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboOutlet" v-model="cboOutletVal" @update:modelValue="mySelectEvent2()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Phone</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-7">
                                <FormInput :class="errorField.user_phone ? 'input-error' : ''" v-model="todo.user_phone" @input="
                    (val) => 
                        (todo.user_phone = todo.user_phone.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">User Tipe</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboUserTipeId" v-model="cboUserTipeIdVal" @update:modelValue="mySelectEvent5()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">User Status</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboUserStatus" v-model="cboUserStatusVal" @update:modelValue="mySelectEvent4()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Status</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboStatusBa" v-model="cboStatusBaVal" @update:modelValue="mySelectEvent6()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-if="muncul">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Penempatan Salesman</label>
                                <!-- {{todo}} -->
                            </div>
                            <div class="col-md-8">
                                <v-select :options="cboPenempatan" v-model="cboPenempatanVal" @update:modelValue="mySelectEvent3()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <Button type="button" @click="saveTodo">Simpan</Button>
                </div>
                <div class="col-md-3">
                    <button class="btn btn-sm btn-warning text-white" data-toggle="tooltip" @click="exportDetailData()"><i class="fa-solid fa-file-excel"></i></button>
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
                    <!-- <pre>{{todo2}}</pre> -->
                    <div class="mb-6">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">NIK</label>
                                        </div>
                                        <div class="col-md-7">
                                            <FormInput :class="errorField.user_nik ? 'input-error' : ''" v-model="todo2.user_nik" @input="
                      (val) => 
                        (todo.user_nik = todo.user_nik.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Nama Lengkap</label>
                                        </div>
                                        <div class="col-md-7">
                                            <FormInput :class="errorField.user_fullname ? 'input-error' : ''" v-model="todo2.user_fullname" @input="
                      (val) => 
                        (todo.user_fullname = todo.user_fullname.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Username</label>
                                        </div>
                                        <div class="col-md-7">
                                            <FormInput :class="errorField.user_name ? 'input-error' : ''" v-model="todo2.user_name" @input="
                      (val) => 
                        (todo.user_name = todo.user_name.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Email</label>
                                        </div>
                                        <div class="col-md-7">
                                            <FormInput :class="errorField.user_email ? 'input-error' : ''" v-model="todo2.user_email" @input="
                      (val) => 
                        (todo.user_email = todo.user_email.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <!-- {{todo}} -->
                                            <label for="">Cabang</label>
                                        </div>
                                        <div class="col-md-8">
                                            <v-select :options="cboCabang" v-model="cboCabangVal2" @update:modelValue="mySelectEvent11_2()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <!-- {{todo}} -->
                                            <label for="">Outlet</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-8">
                                            <v-select :options="cboOutlet" v-model="cboOutletVal2" @update:modelValue="mySelectEvent22_2()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Phone</label>
                                        </div>
                                        <div class="col-md-8">
                                            <FormInput :class="errorField.user_phone ? 'input-error' : ''" v-model="todo2.user_phone" @input="
                    (val) => 
                        (todo.user_phone = todo.user_phone.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">User Tipe</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-9">
                                            <v-select :options="cboUserTipeId" v-model="cboUserTipeIdVal2" @update:modelValue="mySelectEvent33_2()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Status</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-9">
                                            <v-select :options="cboStatusBa" v-model="cboStatusBaVal2" @update:modelValue="mySelectEvent44_2()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Penempatan Salesman</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-9">
                                            <v-select :options="cboPenempatan" v-model="cboPenempatanVal2" @update:modelValue="mySelectEvent55_2()" :clearable="false"></v-select>
                                        </div>
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
        </FormModal>
    </Teleport>
</Pages>
</template>

<script>
import * as XLSX from "xlsx";
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
        return {
            title: "Data User",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                user_nik: "",
                user_fullname: "",
                user_name: "",
                user_email: "",
                user_phone: "",
                user_status: "",
                user_type_id: "",
                status_ba: "",

                nama_cabang: "",
                store_id: "",
                cabang_id: "",
            },

            // tipeCabangOptions: [],
            // tmp_cabang: [],

            cboCabang: [{
                    code: 0,
                    label: "PUSAT"
                },
                // {
                //     code: 0,
                //     label: "Not Active"
                // },
            ],
            cboOutlet: [{
                code: 1,
                label: "ALL OUTLET"
            }, ],
            cboPenempatan: [{
                code: 1,
                label: "dari lokasi"
            }, ],
            cboUserStatus: [{
                    code: 0,
                    label: "0"
                },
                {
                    code: 1,
                    label: "1"
                },
            ],
            cboUserTipeId: [{
                code: 1,
                label: "dari db user_type"
            }, ],
            cboStatusBa: [{
                    // code: 0,
                    label: "Tidak Aktif"
                },
                {
                    // code: 1,
                    label: "Aktif"
                },
            ],

            tmp_whsCodeType2: [],
            cboUserStatusVal2: [],
            cboStatusBaVal2: [],

            // cboCabangVal2: [],
            // cboOutletVal2: [],
            // cboPenempatanVal2: [],
            // cboUserStatusVal2: [],
            // cboUserTipeIdVal2: [],
            // cboStatusBaVal2: [],


            todo2: {
                user_nik: "",
                user_fullname: "",
                user_name: "",
                user_email: "",
                user_phone: "",
                user_status: "",
                user_type_id: "",
                status_ba: "",

                nama_cabang: "",
                store_id: "",
                cabang_id: "",
            },

            errorList: "",
            errorField: {
                type: false,
            },
            cboCabangVal: null,
            cboCabangVal2: null,
            cboOutletVal: null,
            cboOutletVal2: null,
            cboPenempatanVal: null,
            cboPenempatanVal2: null,
            cboUserStatusVal: null,
            cboUserStatusVal2: null,
            cboUserTipeIdVal: null,
            cboUserTipeIdVal2: null,
            cboStatusBaVal: null,
            cboStatusBaVal2: null,
            select2Id1: "select2Id1",
            userid: "",

            uObject: "",
            muncul: false,
        };
    },
    mounted() {
        this.getTable();

        this.getCboUserType();
        this.getCboStoreCabang();
        this.getCboOutlet();
        this.getCboPenempatan();

        this.uObject = JSON.parse(localStorage.getItem("auth"));
        this.userid = this.uObject.id;
    },
    methods: {
        getCboOutlet() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getCboOutlet")
                .then((res) => {
                    mythis.cboOutlet = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },

        getCboUserType() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getCboUserType")
                .then((res) => {
                    mythis.cboUserTipeId = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },

        getCboStoreCabang() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getCboStoreCabang")
                .then((res) => {
                    mythis.cboCabang = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },

        getCboPenempatan() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getCboPenempatan")
                .then((res) => {
                    mythis.cboPenempatan = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },

        mySelectEvent() {
            this.todo.cabang_id = this.cboCabangVal.code;
        },
        mySelectEvent11_2() {
            this.todo2.cabang_id = this.cboCabangVal2.code;
        },
        mySelectEvent2() {
            // this.todo2.whsCodeType = this.tmp_whsCodeType2.code;
            this.todo.store_id = this.cboOutletVal.code;
        },
        mySelectEvent22_2() {
            // this.todo2.whsCodeType = this.tmp_whsCodeType2.code;
            this.todo2.store_id = this.cboOutletVal2.code;
        },
        mySelectEvent3() {
            this.todo.nama_cabang = this.cboPenempatanVal.code;
        },
        mySelectEvent33_2() {
            this.todo2.nama_cabang = this.cboPenempatanVal2.code;
        },
        mySelectEvent4() {
            this.todo.user_status = this.cboUserStatusVal.code;
        },
        mySelectEvent44_2() {
            this.todo2.user_status = this.cboUserStatusVal2.code;
        },
        mySelectEvent4_2() {
            this.todo2.user_status = this.cboUserStatusVal2.code;
        },
        mySelectEvent5() {
            this.todo.user_type_id = this.cboUserTipeIdVal.code;

            // alert(this.todo.user_type_id);
            this.muncul = (this.todo.user_type_id == 10) ? true : false;
            if (
                this.todo.user_type_id != 10
            ) {
                this.todo.nama_cabang = "0";
                this.todo.store_id = "1";
                this.todo.cabang_id = "0";
            }

        },
        mySelectEvent55_2() {
            this.todo2.user_type_id = this.cboUserTipeIdVal2.code;

            // alert(this.todo.user_type_id);
            this.muncul = (this.todo2.user_type_id == 10) ? true : false;
            if (
                this.todo2.user_type_id != 10
            ) {
                this.todo2.nama_cabang = "0";
                this.todo2.store_id = "1";
                this.todo2.cabang_id = "0";
            }

        },
        mySelectEvent6() {
            this.todo.status_ba = this.cboStatusBaVal.label;
        },
        mySelectEvent66() {
            this.todo2.status_ba = this.cboStatusBaVal2.label;
        },
        mySelectEvent6_2() {
            this.todo2.status_ba = this.cboStatusBaVal2.label;
        },
        resetForm() {
            var mythis = this;
            Object.keys(mythis.errorField).forEach(function (key) {
                mythis.errorField[key] = false;
                mythis.todo[key] = "";
                mythis.todo2[key] = "";
            });
            mythis.errorList = "";
            mythis.cboCabangVal = "";
            mythis.cboOutletVal = "";
            mythis.cboUserTipeIdVal = "";
            mythis.cboUserStatusVal = "";
            mythis.cboStatusBaVal = "";
            mythis.cboPenempatanVal = "";

            // mythis.cboCabangVal2 = "";
            // mythis.cboOutletVal2 = "";
            // mythis.cboUserTipeIdVal2 = "";
            // mythis.cboUserStatusVal2 = "";
            // mythis.cboStatusBaVal2 = "";
            // mythis.cboPenempatanVal2 = "";
        },
        getCbowhsCodeType() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get('http://localhost:8000/sgs/user_info/' + "wms/getCbowhsCodeType")
                .then((res) => {
                    this.tipeCabangOptions = res.data.data;
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
                            `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${
                page * limit
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
                        id: "user_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ID USER</b></div>'
                        ),
                    },

                    {
                        id: "user_nik",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>NIK</b></div>'
                        ),
                    },

                    {
                        id: "user_fullname",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>FULLNAME</b></div>'
                        ),
                    },

                    {
                        id: "user_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>USERNAME</b></div>'
                        ),
                    },

                    {
                        id: "user_phone",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PHONE</b></div>'
                        ),
                    },

                    {
                        id: "user_email",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>EMAIL</b></div>'
                        ),
                    },

                    // {
                    //     id: "password",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>PASSWORD</b></div>'
                    //     ),
                    // },

                    {
                        id: "user_type_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Tipe User</b></div>'
                        ),
                    },

                    {
                        id: "status_ba",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>USER STATUS</b></div>'
                        ),
                    },

                    {
                        name: "---- # ----",
                        formatter: (_, row) =>
                            html(
                                `
                <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa-solid fa-pen-to-square"></i></button>
                &nbsp;&nbsp;&nbsp;
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
                    url: 'http://localhost:8000/sgs/user_info',
                    then: (data) =>
                        data.results.map((card) => [
                            card.user_id,
                            card.user_id,
                            card.user_nik,
                            card.user_fullname,
                            card.user_name,
                            card.user_phone,
                            card.user_email,
                            card.user_type_id,
                            card.status_ba,
                            // card.cabang_id,
                            card.updated_at,
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
                // alert(id);
                mythis.modal();
                mythis.$root.loader = true;
                axios
                    .get('http://localhost:8000/sgs/user_info/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.todo2[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input
                        // mythis.cboUserStatusVal2 = res.data.data.user_status;
                        // mythis.cboStatusBaVal2 = res.data.data.status_ba;
                        mythis.cboCabangVal2 = res.data.data.nama_cabang;
                        mythis.cboOutletVal2 = res.data.data.store_name;
                        //mythis.cboPenempatanVal2 = res.data.data.kode_lokasi;
                        mythis.cboUserTipeIdVal2 = res.data.data.user_type_name;
                        
                        // mythis.cboUserStatusVal2 = res.data.data.user_type_id;
                        mythis.cboStatusBaVal2 = res.data.data.status_ba;
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
                        .delete('http://localhost:8000/sgs/user_info/' + id, {
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
            mythis.$root.loader = true;

            axios
                .post('http://localhost:8000/sgs/user_info', {
                    data: mythis.todo,
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
                    "http://localhost:8000/sgs/user_info/" + mythis.acuanEdit, {
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

        async exportDetailData() {
            try {
                this.$root.loader = true;

                const data = await axios.get("http://localhost:8000/sgs/getUserInfoX");

                // console.log(data.data.data);

                const ws = XLSX.utils.json_to_sheet(data.data.data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

                XLSX.writeFile(wb, "data_user.xls");
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.$root.loader = false;
            }
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

.label-spacing {
    margin-right: 20px;
    /* add some spacing between label and input/select */
}

.form-group {
    margin-bottom: 20px;
    /* add some spacing between form elements */
}

.col-md-3,
.col-md-7 {
    padding-right: 10px;
    /* reduce padding between columns */
    padding-left: 10px;
    /* reduce padding between columns */
}
</style>
