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

            <!-- Modal Detail Check IN -->
            <FormModal :show="showModal_check_in" :style="showmodal_zindex" @close="showModal_check_in = false">
                <template #header>
                    <h3>Detail Status Check IN</h3>
                </template>
                <template #body>
                    <div style="width: 90vw">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">User</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ userx }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Check IN Time</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ var_check_in.tanggal_visit }} {{ var_check_in.time_in }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Maps Location</label>
                                            </div>
                                            <div class="col-md-8">

                                                <iframe width="300" height="250" frameborder="0" scrolling="no"
                                                    marginheight="0" marginwidth="0" :src="var_check_in.location">
                                                </iframe>
                                                <br />
                                                <small>
                                                    <a :href="var_check_in.location"
                                                        style="color:#0000FF;text-align:left" target="_blank">
                                                        See map bigger
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Nama Toko</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ store_name }}
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
                                                <img width="300" height="250" style="border:0"
                                                    :src="var_check_in.photo" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Keterangan</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ var_check_in.ket==null ? '-' : var_check_in.ket }}
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
                    <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close_check_in">
                        Tutup
                    </button>
                </template>
            </FormModal>

            <!-- Modal Detail Check OUT -->
            <FormModal :show="showModal_check_out" :style="showmodal_zindex" @close="showModal_check_out = false">
                <template #header>
                    <h3>Detail Status Check OUT</h3>
                </template>
                <template #body>
                    <div style="width: 90vw">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">User</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ userx }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Check OUT Time</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ var_check_out.tanggal_visit }} {{ var_check_out.time_out }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Maps Location</label>
                                            </div>
                                            <div class="col-md-8">

                                                <iframe width="300" height="250" frameborder="0" scrolling="no"
                                                    marginheight="0" marginwidth="0" :src="var_check_out.location">
                                                </iframe>
                                                <br />
                                                <small>
                                                    <a :href="var_check_out.location"
                                                        style="color:#0000FF;text-align:left" target="_blank">
                                                        See map bigger
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Nama Toko</label>
                                            </div>
                                            <div class="col-md-8">
                                                {{ store_name }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Address</label>
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
                                                <img width="300" height="250" style="border:0"
                                                    :src="var_check_out.photo" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label for="">Keterangan</label>
                                            </div>
                                            <div class="col-md-8">
                                               {{ var_check_out.ket == null ? '-' : var_check_out.ket }}
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
                    <button class="modal-default-button btn btn-secondary btn-sm me-1" @click="close_check_out">
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
            title: "Profil Visit",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                type: "",
            },

            tipeWarehouseOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],

            todo2: {
                type: "",
                id: "",
                approval: "",
            },

            errorList: "",
            errorField: {
                type: false,
            },

            alamat: "",
            userx: "",
            store_name: "",

            userid: "",

            uObject: "",
            var_check_in: {},
            var_check_out: {},
            showModal_check_in: false,
            showModal_check_out: false,
        };
    },
    mounted() {
        this.getTable();
        //this.getCbowhsCodeType();
        //this.userid = "9999";

        this.uObject = JSON.parse(localStorage.getItem("auth"));
        this.userid = this.uObject.id;
    },
    methods: {
        async sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        getAlamat(long, lat) {
            var mythis = this;
            axios
                .get(
                    "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
                    lat +
                    "&lon=" +
                    long +
                    ""
                )
                .then((res) => {
                    mythis.alamat = res.data.display_name;
                });
        },
        modal_check_in() {
            this.showModal_check_in = true;
        },
        modal_check_out() {
            this.showModal_check_out = true;
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
                    this.tipeWarehouseOptions = res.data.resource;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getTable() {
            var mythis = this;

            const tday = new Date();
            const m = String(tday.getMonth() + 1).padStart(2, '0');
            const d = String(tday.getDate()).padStart(2, '0');
            const y = String(tday.getFullYear());

            const formatedDate = [y, m, d].join('-');

            this.grid2.updateConfig({
                language: idID,
                pagination: {
                    // limit: 10,
                    // server: {
                    //     url: (prev, page, limit) =>
                    //         `${prev}${prev.includes("?") ? "&" : "?"}limit=${limit}&offset=${page * limit
                    //         }`,
                    // },
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
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>USER</b></div>'
                    ),
                },
                {
                    id: "tanggal_visit",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TANGGAL PLAN</b></div>'
                    ),
                },
                {
                    id: "tanggal_visit",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TOKO</b></div>'
                    ),
                },
                {
                    id: "photo_visit",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>REAL CHECK IN TIME</b></div>'
                    ),
                },

                {
                    id: "photo_visit_out",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>REAL CHECK OUT TIME</b></div>'
                    ),
                },

                
                {
                    id: "statusVisit",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>STATUS</b></div>'
                    ),
                },

                {
                    id: "keterangan",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>KETERANGAN</b></div>'
                    ),
                },
                
                {
                    id: "approval",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>APPROVAL</b></div>'
                    ),
                },
                {
                    id: "AKSI",
                    name: html(
                        '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>AKSI</b></div>'
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
                    url: import.meta.env.VITE_API_PATH + 'api/sgs/profil_visit',
                    then: (data) =>
                        // data.resource.data.map((card, index) => [
                        data.resource.map((card, index) => [
                            card.id,
                            index + 1,
                            card.userSalesman,
                            card.tanggal_plan,
                            card.nama_toko,
                            (card.photo_visit) ? html(`<button data-id="` + card.id + `" class="btn btn-sm btn-success text-white" id="status_check_in" data-toggle="tooltip" title="Lihat Check In" ><i class="fa-solid fa-thumbs-up"></i> ` + card.waktu_masuk + `</button>`) : html(`<button data-id="" class="btn btn-sm btn-danger text-white" data-toggle="tooltip" title="Status Check IN" ><i class="fa-solid fa-x"></i></button>`),
                            (card.photo_visit_out) ? html(`<button data-id="` + card.id + `" class="btn btn-sm btn-success text-white" id="status_check_out" data-toggle="tooltip" title="Lihat Check Out" ><i class="fa-solid fa-thumbs-up"></i> ` + card.waktu_keluar + ` </button>`) : html(`<button data-id="" class="btn btn-sm btn-danger text-white" data-toggle="tooltip" title="Status Check OUT" ><i class="fa-solid fa-x"></i></button>`),
                            (card.tanggal_visit == card.tanggal_plan && card.waktu_keluar !== null && card.waktu_masuk !== null) ? html(`<span class="btn btn-sm btn-info text-white">Terpenuhi</span>`) : (card.waktu_keluar === null && card.waktu_masuk !== null) ? html(`<span class="btn btn-sm btn-warning text-white">Tidak Check Out</span>`) : formatedDate > card.tanggal_plan ? html(`<span class="btn btn-sm btn-danger text-white">Tidak Terpenuhi</span>`) : html(`<span class="btn btn-sm btn-warning text-white">Belum Visit</span>`) ,
                            card.keterangan==null ? '-' : card.keterangan ,
                            (card.approval === 1) ? html(`<span class="btn btn-sm btn-success text-white">Disetujui</span>`) : (card.waktu_masuk !== null && card.waktu_keluar !== null) ? html(`<span class="btn btn-sm btn-danger text-white">Butuh Approval</span>`) : null,
                            (card.approval === 0 && card.waktu_masuk !== null && card.waktu_keluar !== null) ?
                                html(`<button data-id="` + card.id + `" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa-solid fa-pen-to-square"></i></button>&nbsp;&nbsp;&nbsp;`)
                                : html(`<button data-id="` + card.id + `" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" disabled><i class="fa-solid fa-pen-to-square"></i></button>&nbsp;&nbsp;&nbsp;`)
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
            $("#wrapper2").remove();
            var e = $('<div id="wrapper2"></div>');
            $("#box").append(e);
            this.getTable();
        },

        approved() {
            Swal.fire({
                title: 'Yakin Approve?',
                text: "Anda Tidak Bisa Mengembalikannya!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Approved!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.editTodo();
                }
            })
        },

        jqueryDelEdit() {
            const mythis = this;

            $(document).on("click", "#status_check_out", function () {
                let id = $(this).data("id");
                // alert(id);
                mythis.idRincian = id;
                mythis.modal_check_out();

                mythis.$root.loader = true;

                axios
                    .get(import.meta.env.VITE_API_PATH + 'api/sgs/profil_visit/' + id)
                    .then(async (res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.resource).forEach(function (key) {
                            mythis.var_check_out[key] = res.data.resource[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.var_check_out.location = 'https://maps.google.com/maps?q=' + res.data.resource.lat_out + ',' + res.data.resource.long_out + '&hl=es&z=14&output=embed';
                        mythis.var_check_out.photo = import.meta.env.VITE_API_PATH + 'images/' + res.data.resource.photo_visit_out;
                        await mythis.getAlamat(res.data.resource.long_out, res.data.resource.lat_out);
                        mythis.userx = res.data.resource.fullname;
                        mythis.store_name = res.data.resource.store_name;
                        await mythis.sleep(3000);
                        mythis.$root.loader = false;
                    });
            });

            $(document).on("click", "#status_check_in", function () {
                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal_check_in();

                mythis.$root.loader = true;

                axios
                    .get(import.meta.env.VITE_API_PATH + 'api/sgs/profil_visit/' + id)
                    .then(async (res) => {
                        console.log(res);
                        mythis.acuanEdit = id;
                        Object.keys(res.data.resource).forEach(function (key) {
                            mythis.var_check_in[key] = res.data.resource[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input
                        // mythis.var_check_in.location = "https://maps.google.com/?q=" +  res.data.data.lat_in + "," +  res.data.data.long_in;

                        mythis.var_check_in.location = 'https://maps.google.com/maps?q=' + res.data.resource.lat_in + ',' + res.data.resource.long_in + '&hl=es&z=14&output=embed';
                        mythis.var_check_in.photo = import.meta.env.VITE_API_PATH + 'images/' + res.data.resource.photo_visit;
                        await mythis.getAlamat(res.data.resource.long_in, res.data.resource.lat_in);
                        mythis.userx = res.data.resource.fullname;
                        mythis.store_name = res.data.resource.store_name;
                        await mythis.sleep(3000);
                        mythis.$root.loader = false;
                    });
            });

            $(document).on("click", "#editData", function () {
                // this.method();

                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal();
                mythis.$root.loader = true;
                axios
                    .get(import.meta.env.VITE_API_PATH + 'api/sgs/profil_visit/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.resource).forEach(function (key) {
                            mythis.todo2[key] = res.data.resource[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.approval = res.data.resource.approval;

                        mythis.$root.loader = false;
                    });

                mythis.approved();

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
                        .delete(import.meta.env.VITE_API_PATH + 'api/sgs/profil_visit/' + id, {
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
                .post('', {
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
        close_check_out: function () {
            this.showModal_check_out = false;
            this.todo = {};
            this.todo2 = {};
        },
        close_check_in: function () {
            this.showModal_check_in = false;
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

            // mythis.todo2.status_id = 1;
            mythis.todo2.approval = 1;

            // console.log(mythis.todo2);

            axios
                .put(
                    import.meta.env.VITE_API_PATH + "api/sgs/profil_visit/" + mythis.acuanEdit, {
                    data: mythis.todo2,
                    fileUpload: "form satuan",
                    user_id: mythis.user_id,
                    userid: mythis.id,
                }
                )
                .then((res) => {
                    console.log(res);
                    //alert(res.data.message);
                    Swal.fire("Approved!", res.data.message, "success");
                    mythis.$root.loader = false;

                    // Swal.fire(
                    //     'Approved!',
                    //     'Profil Visit Telah Diapprove.',
                    //     'success'
                    // )

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
