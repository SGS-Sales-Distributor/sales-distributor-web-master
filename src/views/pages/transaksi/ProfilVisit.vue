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
                <h3>Edit Form</h3>
            </template>
            <template #body>
                <div style="width: 90vw">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">ID Type</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput id="inputA" :class="errorField.id_type ? 'input-error' : ''" v-model="todo2.id_type" @input="
                          (val) =>
                            (todo2.id_type = todo2.id_type.trim())
                        " readonly></FormInput>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Type Program</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.type ? 'input-error' : ''" v-model="todo2.type" @input="
                          (val) =>
                            (todo2.type = todo2.type.trim())
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
        </FormModal>
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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Check IN Time</label>
                                    </div>
                                    <div class="col-md-6">
                                        {{ var_check_in.tanggal_visit }} {{ var_check_in.time_in }}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Maps Location</label>
                                    </div>
                                    <div class="col-md-6">

                                        <iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="var_check_in.location">
                                        </iframe>
                                        <br />
                                        <small>
                                            <a :href="var_check_in.location" style="color:#0000FF;text-align:left" target="_blank">
                                                See map bigger
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Addres</label>
                                    </div>
                                    <div class="col-md-6">
                                        {{ alamat }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Photo</label>
                                    </div>
                                    <div class="col-md-6">
                                        <img width="600" height="450" style="border:0" :src="var_check_in.photo" />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Check OUT Time</label>
                                    </div>
                                    <div class="col-md-6">
                                        {{ var_check_out.tanggal_visit }} {{ var_check_out.time_out }}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Maps Location</label>
                                    </div>
                                    <div class="col-md-6">

                                        <iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="var_check_out.location">
                                        </iframe>
                                        <br />
                                        <small>
                                            <a :href="var_check_out.location" style="color:#0000FF;text-align:left" target="_blank">
                                                See map bigger
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Photo</label>
                                    </div>
                                    <div class="col-md-6">
                                        <img width="600" height="450" style="border:0" :src="var_check_out.photo" />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
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
            },

            errorList: "",
            errorField: {
                type: false,
            },

            alamat: "",

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
                        id: "store_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>STORE NAME</b></div>'
                        ),
                    },

                    {
                        id: "user",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>USER</b></div>'
                        ),
                    },

                    {
                        id: "photo_visit",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CHECK IN STATUS</b></div>'
                        ),
                    },

                    {
                        id: "photo_visit_out",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CHECK OUT STATUS</b></div>'
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
                        id: "approval",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>APPROVAL</b></div>'
                        ),
                    },

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
                    url: 'http://localhost:8000/sgs/profil_visit',
                    then: (data) =>
                        data.results.map((card) => [
                            card.id,
                            card.store_id,
                            card.user,
                            (card.status_check_in == 1) ? html(`<button data-id="` + card.id + `" class="btn btn-sm btn-success text-white" id="status_check_in" data-toggle="tooltip" title="Status Check IN" ><i class="fa-solid fa-thumbs-up"></i></button>`) : html(`<button data-id="" class="btn btn-sm btn-danger text-white" data-toggle="tooltip" title="Status Check IN" ><i class="fa-solid fa-x"></i></button>`),
                            (card.status_check_out == 1) ? html(`<button data-id="` + card.id + `" class="btn btn-sm btn-success text-white" id="status_check_out" data-toggle="tooltip" title="Status Check OUT" ><i class="fa-solid fa-thumbs-up"></i></button>`) : html(`<button data-id="" class="btn btn-sm btn-danger text-white" data-toggle="tooltip" title="Status Check OUT" ><i class="fa-solid fa-x"></i></button>`), card.approval,
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

            $(document).on("click", "#status_check_out", function () {
                let id = $(this).data("id");
                // alert(id);
                mythis.idRincian = id;
                mythis.modal_check_out();

                mythis.$root.loader = true;

                
                axios
                    .get('http://localhost:8000/sgs/profil_visit/' + id)
                    .then(async (res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.var_check_out[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.var_check_out.location = 'https://maps.google.com/maps?q=' + res.data.data.lat_out + ',' + res.data.data.long_out + '&hl=es&z=14&output=embed';
                        mythis.var_check_out.photo = res.data.data.photo_visit;
                        await mythis.getAlamat(res.data.data.long_out, res.data.data.lat_out);
                        mythis.$root.loader = false;
                    });
            });

            $(document).on("click", "#status_check_in", function () {
                let id = $(this).data("id");
                mythis.idRincian = id;
                mythis.modal_check_in();

                mythis.$root.loader = true;

                axios
                    .get('http://localhost:8000/sgs/profil_visit/' + id)
                    .then(async (res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.var_check_in[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input
                        // mythis.var_check_in.location = "https://maps.google.com/?q=" +  res.data.data.lat_in + "," +  res.data.data.long_in;

                        mythis.var_check_in.location = 'https://maps.google.com/maps?q=' + res.data.data.lat_in + ',' + res.data.data.long_in + '&hl=es&z=14&output=embed';
                        mythis.var_check_in.photo = res.data.data.photo_visit;
                        await mythis.getAlamat(res.data.data.long_in, res.data.data.lat_in);
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
                    .get('http://localhost:8000/sgs/master_type_program/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.todo2[key] = res.data.data[key];
                        });
                        document.getElementById("inputA").focus(); // sets the focus on the input

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
                        .delete('http://localhost:8000/sgs/master_type_program/' + id, {
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
                .post('http://localhost:8000/sgs/master_type_program', {
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
            axios
                .put(
                    "http://localhost:8000/sgs/master_type_program/" + mythis.acuanEdit, {
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
