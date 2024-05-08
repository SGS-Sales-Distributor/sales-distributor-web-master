<template>
<Pages :title="title">
    <div class="container-fluid">
        <div class="mb-2">
            <div class="row">
                <!-- <div class="col-md-12">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2">
                                    <label for="">Type Program</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput :class="errorField.type ? 'input-error' : ''" v-model="todo.type" @input="
                          (val) => 
                            (todo.type = todo.type.trim())
                        "></FormInput>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2"></div>
                                <div class="col-md-3">
                                    <Button type="button" @click="saveTodo">Simpan</Button>
                                </div>
                            </div>
                        </div>
                    </div> -->
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
                <h3>Detail PURCHASE ORDER</h3>
            </template>
            <template #body>
                <div style="width: 90vw">
                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">NO ORDER</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ noorder }}
                                        </div>
                                    </div>
                                </div>

                            <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">CUSTOMER CODE</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ custcode }}
                                        </div>
                                    </div>
                                </div>

                            <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">QUANTITY</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ totOrderQtyx }}
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">TIPE</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ tipex }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">TOP</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ topx }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">COMPANY</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ companyx }}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">STORE NAME</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ storename }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">TANGGAL ORDER</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ tglorder }}
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">UPLOAD BY</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ uploadedby }}
                                        </div>
                                    </div>
                                </div> -->

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">UPLOAD AT</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ uploadedat }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">STATUS ORDER</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ ordersts }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">IP UPLOADED</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ uploadedip }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">MODIFIED AT</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ modifiedat }}
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <!-- <div class="text-center">
                        <button class="btn btn-success btn-sm me-1" @click="editTodo()">
                            Ubah Data
                        </button>
                    </div> -->
                </div>
            </template>
            <template #footer>
                <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close">
                    Tutup
                </button>
            </template>
        </FormModal>
    </Teleport>

    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->

        <!-- Modal Detail Customer -->
        <FormModal :show="showModal_cust_code" :style="showmodal_zindex" @close="showModal_cust_code = false">
            <template #header>
                <h3>Detail Status Customer Code</h3>
            </template>
            <template #body>
                <div style="width: 90vw">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">SHIP CODE</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ ship_code }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">ID STORE</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ store_id }}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!-- <div class="col-md-6">

                                    <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Store Name</label>
                                        </div>
                                        <div class="col-md-8">
                                           {{store_name}}
                                        </div>
                                    </div>
                                </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Addres</label>
                                            </div>
                                            <div class="col-md-7">
                                                {{ alamat }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Photo</label>
                                            </div>
                                            <div class="col-md-8">
                                                <img width="300" height="250" style="border:0" :src="var_cust_code.photo" />
                                            </div>
                                        </div>
                                    </div>

                                </div> -->
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close_cust_code">
                    Tutup
                </button>
            </template>
        </FormModal>

        <!-- Modal Detail Warehouse -->
        <FormModal :show="showModal_whs_code" :style="showmodal_zindex" @close="showModal_whs_code = false">
            <template #header>
                <h3>Detail Status Warehouse Code</h3>
            </template>
            <template #body>
                <div style="width: 90vw">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">No Order</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ no_order }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Tipe</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ tipex }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">TANGGAL ORDER</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ tglorder }}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">WAREHOUSE CODE</label>
                                        </div>
                                        <div class="col-md-8">
                                            {{ whscode }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Gabungan Status</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ llbgabungansts }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Upload By</label>
                                        </div>
                                        <div class="col-md-7">
                                            {{ uploaded_by }}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close_whs_code">
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
        return {
            title: "Purchase Order",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                totOrderQty: "",
                totReleaseQty: "",
                company: "",
                uploaded_by: "",

                ship_code: "",
                store_id: "",
            },

            tipeWarehouseOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],

            todo2: {
                totOrderQty: "",
                totReleaseQty: "",
                company: "",
                uploaded_by: "",

                ship_code: "",
                store_id: "",
            },

            errorList: "",
            errorField: {
                type: false,
            },

            noorder: "",
            custcode: "",
            totOrderQtyx: "",
            tipex: "",
            topx: "",
            tglorder: "",
            companyx: "",
            uploadedby: "",
            uploadedat: "",
            ordersts: "",
            storename: "",
            uploadedip: "",
            modifiedat: "",
            
            whscode: "",

            alamat: "",
            store_name: "",

            userid: "",

            uObject: "",
            var_cust_code: {},
            var_whs_code: {},
            showModal_cust_code: false,
            showModal_whs_code: false,
        };
    },
    mounted() {
        this.getTable();
        // this.getIDstore();
        //this.getCbowhsCodeType();
        //this.userid = "9999";

        this.uObject = JSON.parse(localStorage.getItem("auth"));
        this.userid = this.uObject.id;
    },
    methods: {
        getIDstore() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getIDstore")
                .then((res) => {
                    mythis.cboIDstore = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },

        mySelectEvent01() {
            this.todo.store_id = this.cboIDstore.code;
        },

        async sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        // getAlamat(long, lat) {
        //     var mythis = this;
        //     axios
        //         .get(
        //             "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
        //             lat +
        //             "&lon=" +
        //             long +
        //             ""
        //         )
        //         .then((res) => {
        //             mythis.alamat = res.data.display_name;
        //         });
        // },
        modal_cust_code() {
            this.showModal_cust_code = true;
        },
        modal_whs_code() {
            this.showModal_whs_code = true;
        },
        mySelectEvent() {
            this.todo.whsCodeType = this.tmp_whsCodeType.code;
        },
        mySelectEvent2() {
            this.todo2.whsCodeType = this.tmp_whsCodeType2.code;
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
        },
        getCbowhsCodeType() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get(this.$root.apiHostWmsTPS + "wms/getCbowhsCodeType")
                .then((res) => {
                    this.tipeWarehouseOptions = res.data.data;
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

                    // {
                    //     id: "id",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ID</b></div>'
                    //     ),
                    // },

                    {
                        id: "id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ID</b></div>'
                        ),
                    },
                    
                    {
                        id: "cust_code",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CODE CUSTOMER</b></div>'
                        ),
                    },

                    {
                        id: "order_sts",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>STATUS ORDER</b></div>'
                        ),
                    },

                    {
                        id: "totOrderQty",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>QUANTITY</b></div>'
                        ),
                    },

                    {
                        id: "store_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>STORE NAME</b></div>'
                        ),
                    },

                    // {
                    //     id: "tanggal_visit",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Tanggal Visit</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "time_in",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Time In</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "time_out",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Time Out</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "purchase_order_in",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Purchase Order In</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "condit_owner",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Condit Owner</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "ket",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Keterangan</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "comment_appr",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Komentar Approval</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "lat_in",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Latitude In</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "long_in",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Longitude In</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "lat_out",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Latitude Out</b></div>'
                    //     ),
                    // },

                    // {
                    //     id: "long_out",
                    //     name: html(
                    //         '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Longitude Out</b></div>'
                    //     ),
                    // },

                    {
                        name: "AKSI",
                        formatter: (_, row) =>
                            html(
                                `
                    <button data-id="${row.cells[0].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa-solid fa-pen-to-square"></i></button>
                    &nbsp;&nbsp;&nbsp;
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
                    url: 'http://localhost:8000/sgs/order_customer_sales',
                    then: (data) =>
                        data.results.map((card) => [
                            card.id,
                            card.id,
                            card.cust_code,
                            card.order_sts,
                            card.totOrderQty,
                            card.store_name,
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

            $(document).on("click", "#status_whs_code", function () {
                let id = $(this).data("id");
                // alert(id);
                mythis.idRincian = id;
                mythis.modal_whs_code();

                mythis.$root.loader = true;

                axios
                    .get('http://localhost:8000/sgs/order_customer_sales/' + id)
                    .then(async (res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.var_whs_code[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        // mythis.var_whs_code.location = 'https://maps.google.com/maps?q=' + res.data.data.lat_out + ',' + res.data.data.long_out + '&hl=es&z=14&output=embed';
                        // mythis.var_whs_code.photo = res.data.data.photo_visit_out;
                        // await mythis.getAlamat(res.data.data.long_out, res.data.data.lat_out);
                        // mythis.noorder = res.data.data.no_order;
                        mythis.ship_code = res.data.data.ship_code;
                        mythis.totOrderQty = res.data.data.totOrderQty;
                        mythis.totReleaseQty = res.data.data.totReleaseQty;
                        mythis.company = res.data.data.company;
                        mythis.uploaded_by = res.data.data.uploaded_by;
                        await mythis.sleep(3000);
                        mythis.$root.loader = false;
                    });
            });

            $(document).on("click", "#status_cust_code", function () {
                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal_cust_code();

                mythis.$root.loader = true;

                axios
                    .get('http://localhost:8000/sgs/order_customer_sales/' + id)
                    .then(async (res) => {
                        console.log(res);
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.var_cust_code[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input
                        // mythis.var_cust_code.location = "https://maps.google.com/?q=" +  res.data.data.lat_in + "," +  res.data.data.long_in;

                        // mythis.var_cust_code.location = 'https://maps.google.com/maps?q=' + res.data.data.lat_in + ',' + res.data.data.long_in + '&hl=es&z=14&output=embed';
                        // mythis.var_cust_code.photo = res.data.data.photo_visit;
                        // await mythis.getAlamat(res.data.data.long_in, res.data.data.lat_in);
                        // mythis.userx = res.data.data.user;
                        mythis.ship_code = res.data.data.ship_code;
                        mythis.store_id = res.data.data.store_id;
                        await mythis.sleep(3000);
                        mythis.$root.loader = false;
                    });
            });

            $(document).on("click", "#editData", function () {
                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal();
                mythis.$root.loader = true;
                axios
                    .get('http://localhost:8000/sgs/order_customer_sales/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.todo2[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.noorder = res.data.data.no_order;
                        mythis.custcode = res.data.data.cust_code;
                        mythis.totOrderQtyx = res.data.data.totOrderQty;
                        mythis.tipex = res.data.data.tipe;
                        mythis.topx = res.data.data.top;
                        mythis.tglorder = res.data.data.tgl_order;
                        mythis.companyx = res.data.data.company;
                        mythis.llbgabungansts = res.data.data.llb_gabungan_sts;
                        mythis.uploadedby = res.data.data.uploaded_by;
                        mythis.uploadedat = res.data.data.uploaded_at;
                        mythis.uploadedip = res.data.data.uploaded_ip;
                        mythis.ordersts = res.data.data.order_sts;
                        mythis.storename = res.data.data.store_name;
                        mythis.modifiedat = res.data.data.modified_at;

                        mythis.whscode = res.data.data.whs_code;

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
                        .delete('http://localhost:8000/sgs/order_customer_sales/' + id, {
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
                .post('http://localhost:8000/sgs/order_customer_sales', {
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
        close_whs_code: function () {
            this.showModal_whs_code = false;
            this.todo = {};
            this.todo2 = {};
        },
        close_cust_code: function () {
            this.showModal_cust_code = false;
            this.todo = {};
            this.todo2 = {};
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
                    "http://localhost:8000/sgs/order_customer_sales/" + mythis.acuanEdit, {
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
