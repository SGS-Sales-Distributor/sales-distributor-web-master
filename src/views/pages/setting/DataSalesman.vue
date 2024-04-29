<template>
<Pages :title="title">
    <div class="container-fluid">
        <div class="mb-2">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-2">
                                <label for="">User ID</label>
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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Kode Outlet</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput id="inputA" :class="errorField.store_id ? 'input-error' : ''" v-model="todo2.store_id" @input="
                          (val) =>
                            (todo2.store_id = todo2.store_id.trim())
                        " readonly></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Nama Outlet</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.store_name ? 'input-error' : ''" v-model="todo2.store_name" @input="
                          (val) =>
                            (todo2.store_name = todo2.store_name.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">NIK</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.user_nik ? 'input-error' : ''" v-model="todo2.user_nik" @input="
                          (val) =>
                            (todo2.user_nik = todo2.user_nik.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Nama</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.user_fullname ? 'input-error' : ''" v-model="todo2.user_fullname" @input="
                          (val) =>
                            (todo2.user_fullname = todo2.user_fullname.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Tipe User</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.user_type_id ? 'input-error' : ''" v-model="todo2.user_type_id" @input="
                          (val) =>
                            (todo2.user_type_id = todo2.user_type_id.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Username</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.user_name ? 'input-error' : ''" v-model="todo2.user_name" @input="
                          (val) =>
                            (todo2.user_name = todo2.user_name.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Nomor Telp</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.user_phone ? 'input-error' : ''" v-model="todo2.user_phone" @input="
                          (val) =>
                            (todo2.user_phone = todo2.user_phone.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Cabang</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.cabang_id ? 'input-error' : ''" v-model="todo2.cabang_id" @input="
                          (val) =>
                            (todo2.cabang_id = todo2.cabang_id.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Status</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.status_ba ? 'input-error' : ''" v-model="todo2.status_ba" @input="
                          (val) =>
                            (todo2.status_ba = todo2.status_ba.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Update Time</label>
                                    </div>
                                    <div class="col-md-6">
                                        <FormInput :class="errorField.updated_at ? 'input-error' : ''" v-model="todo2.updated_at" @input="
                          (val) =>
                            (todo2.updated_at = todo2.updated_at.trim())
                        "></FormInput>
                                    </div>
                                </div>
                            </div> -->

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
        return {
            title: "Data Salesman",
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
                store_id: "",
                store_name: "",
                user_nik: "",
                user_fullname: "",
                user_type_id: "",
                user_name: "",
                user_phone: "",
                cabang_id: "",
                status_ba: "",
                updated_at: "",
            },

            errorList: "",
            errorField: {
                type: false,
            },

            userid: "",

            uObject: "",
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

                    {
                        id: "store_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Kode Outlet</b></div>'
                        ),
                    },

                    {
                        id: "store_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Nama Outlet</b></div>'
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
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Nama</b></div>'
                        ),
                    },

                    {
                        id: "user_type_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Tipe User</b></div>'
                        ),
                    },

                    {
                        id: "user_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Username</b></div>'
                        ),
                    },

                    {
                        id: "user_phone",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Nomor Telp</b></div>'
                        ),
                    },

                    {
                        id: "cabang_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Cabang</b></div>'
                        ),
                    },

                    {
                        id: "status_ba",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Status</b></div>'
                        ),
                    },

                    {
                        id: "updated_at",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>Update Time</b></div>'
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
                            card.store_id,
                            card.store_id,
                            card.store_name,
                            card.user_nik,
                            card.user_fullname,
                            card.user_type_id,
                            card.user_name,
                            card.user_phone,
                            card.cabang_id,
                            card.status_ba,
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
                mythis.modal();
                mythis.$root.loader = true;
                axios
                    .get('http://localhost:8000/sgs/user_info/' + id)
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
