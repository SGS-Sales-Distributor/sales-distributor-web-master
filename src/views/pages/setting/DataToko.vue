<template>
<Pages :title="title">
    <div class="container-fluid">
        <div class="mb-2">
            <div class="row">
                <!-- <div class="col-md-6">

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Nama Outlet</label>
                            </div>
                            <div class="col-md-8">
                                <FormInput :class="errorField.store_name ? 'input-error' : ''" v-model="todo.store_name" @input="
                      (val) => 
                        (todo.store_name = todo.store_name.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">ID Cabang</label>
                            </div>
                            <div class="col-md-9">
                                <v-select :options="cboIDCabang" v-model="cboIDCabangVal" @update:modelValue="mySelectEvent01()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Alamat</label>
                            </div>
                            <div class="col-md-8">
                                <FormInput :class="errorField.store_address ? 'input-error' : ''" v-model="todo.store_address" @input="
                      (val) => 
                        (todo.store_address = todo.store_address.trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div>

                </div> -->

                <!-- <div class="col-md-6">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Store Type ID</label>
                            </div>
                            <div class="col-md-9">
                                <v-select :options="cboIDStore" v-model="cboIDStoreVal" @update:modelValue="mySelectEvent02()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Status</label>
                            </div>
                            <div class="col-md-9">
                                <v-select :options="cboStatusStore" v-model="cboStatusStoreVal" @update:modelValue="mySelectEvent03_2()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-3">
                            <button class="btn btn-sm btn-warning text-white" data-toggle="tooltip" @click="exportDetailData()"><i class="fa-solid fa-floppy-disk"></i> PRINT</button>
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
                    <div class="mb-2">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Nama Outlet</label>
                                        </div>
                                        <div class="col-md-8">
                                            <FormInput :class="errorField.store_name ? 'input-error' : ''" v-model="todo2.store_name" @input="
                      (val) => 
                        (todo2.store_name = todo2.store_name.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">ID Cabang</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-9">
                                            <v-select :options="cboIDCabang" v-model="cboIDCabangVal01" @update:modelValue="mySelectEvent11()" :clearable="false"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Alamat</label>
                                        </div>
                                        <div class="col-md-8">
                                            <FormInput :class="errorField.store_address ? 'input-error' : ''" v-model="todo2.store_address" @input="
                      (val) => 
                        (todo2.store_address = todo2.store_address.trim())
                    "></FormInput>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="">Store Type ID</label>
                                            <!-- {{todo}} -->
                                        </div>
                                        <div class="col-md-9">
                                            <v-select :options="cboIDStore" v-model="cboIDStoreVal02" @update:modelValue="mySelectEvent12()" :clearable="false"></v-select>
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
                                            <v-select :options="cboStatusStore" v-model="cboStatusStoreVal03" @update:modelValue="mySelectEvent13()" :clearable="false"></v-select>
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
            title: "Data Toko",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                store_name: "",
                subcabang_id: "",
                store_address: "",
                store_type_id: "",
                // status_ba: "",
                active: "",
            },

            tipeWarehouseOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],
            cboIDCabangVal01: [],
            cboIDStoreVal02: [],
            cboStatusStoreVal03: [],

            todo2: {
                store_name: "",
                subcabang_id: "",
                store_address: "",
                store_type_id: "",
                // status_ba: "",
                active: "",
            },

            errorList: "",
            errorField: {
                type: false,
            },

            cboIDCabang: [{
                    code: 0,
                    label: "0"
                },
                {
                    code: 1,
                    label: "1"
                },
            ],
            cboIDStore: [{
                    code: 0,
                    label: "0"
                },
                {
                    code: 1,
                    label: "1"
                },
            ],
            cboStatusStore: [{
                    code: 0,
                    label: "Tidak Aktif"
                },
                {
                    code: 1,
                    label: "Aktif"
                },
            ],

            cboIDCabangVal: null,
            cboIDStoreVal: null,
            cboStatusStoreVal: null,

            cboIDCabangVal01: null,
            cboStatusStoreVal02: null,
            cboStatusStoreVal03: null,

            userid: "",

            uObject: "",
        };
    },
    mounted() {
        this.getTable();
        // this.getNamaCabang();
        //this.userid = "9999";
        this.getcboIDCabang();
        this.getcboIDStore();

        this.uObject = JSON.parse(localStorage.getItem("auth"));
        this.userid = this.uObject.id;
    },
    methods: {
        // getNamaCabang() {
        //     var mythis = this;
        //     mythis.$root.loader = true;
        //     axios
        //         .get("http://localhost:8000/sgs/getNamaCabang")
        //         .then((res) => {
        //             mythis.subcabang_id = res.data.data;
        //             //console.log(res.data.data);
        //             mythis.$root.loader = false;
        //         });
        // },
        getcboIDCabang() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getcboIDCabang")
                .then((res) => {
                    mythis.cboIDCabang = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        getcboIDStore() {
            var mythis = this;
            mythis.$root.loader = true;
            axios
                .get("http://localhost:8000/sgs/getcboIDStore")
                .then((res) => {
                    mythis.cboIDStore = res.data.data;
                    //console.log(res.data.data);
                    mythis.$root.loader = false;
                });
        },
        mySelectEvent() {
            this.todo.whsCodeType = this.tmp_whsCodeType.code;
        },
        mySelectEvent2() {
            this.todo2.whsCodeType = this.tmp_whsCodeType2.code;
        },
        mySelectEvent01() {
            this.todo.subcabang_id = this.cboIDCabangVal.code;
        },
        mySelectEvent11() {
            this.todo2.subcabang_id = this.cboIDCabangVal01.code;
        },
        mySelectEvent02() {
            this.todo.store_type_id = this.cboIDStoreVal.code;
        },
        mySelectEvent12() {
            this.todo2.store_type_id = this.cboIDStoreVal02.code;
        },
        mySelectEvent03_2() {
            this.todo.active = this.cboStatusStoreVal.code;
        },
        mySelectEvent13() {
            this.todo2.active = this.cboStatusStoreVal03.code;
        },

        // mySelectEvent7_2() {
        //     this.todo2.subcabang_id = this.cboIDCabangVal.code;
        // },
        // mySelectEvent8_2() {
        //     this.todo2.store_type_id = this.cboIDStoreVal.code;
        // },
        // mySelectEvent9_2() {
        //     this.todo2.subcabang_id = this.cboIDStoreVal.code;
        // },
        // mySelectEvent10_2() {
        //     this.todo2.store_type_id = this.cboIDStoreVal.code;
        // },
        // mySelectEvent11_2() {
        //     this.todo2.cboStatusStore = this.cboStatusStoreVal.code;
        // },
        // mySelectEvent12_2() {
        //     this.todo2.status_ba = this.cboStatusStoreVal.code;
        // },

        resetForm() {
            var mythis = this;
            Object.keys(mythis.errorField).forEach(function (key) {
                mythis.errorField[key] = false;
                mythis.todo[key] = "";
                mythis.todo2[key] = "";
            });
            mythis.errorList = "";
            mythis.tmp_whsCodeType = "";
            mythis.cboIDCabangVal = "";
            mythis.cboIDStoreVal = "";
            mythis.cboStatusStoreVal = "";
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
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ID</b></div>'
                        ),
                    },

                    {
                        id: "store_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>NAMA OUTLET</b></div>'
                        ),
                    },

                    {
                        id: "subcabang_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ID CABANG</b></div>'
                        ),
                    },

                    {
                        id: "store_address",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>ALAMAT</b></div>'
                        ),
                    },

                    {
                        id: "store_type_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>TIPE STORE ID</b></div>'
                        ),
                    },

                    {
                        id: "created_by",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>CREATED BY</b></div>'
                        ),
                    },

                    {
                        id: "active",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: center;"><b>STATUS</b></div>'
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
                    url: 'http://localhost:8000/sgs/store_info_distri',
                    then: (data) =>
                        data.results.map((card) => [
                            card.store_id,
                            card.store_id,
                            card.store_name,
                            card.subcabang_id,
                            card.store_address,
                            card.store_type_id,
                            card.created_by,
                            card.active,
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
                    .get('http://localhost:8000/sgs/store_info_distri/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.todo2[key] = res.data.data[key];
                        });
                        // document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.cboIDCabangVal01 = res.data.data.subcabang_id;
                        mythis.cboIDStoreVal02 = res.data.data.store_type_id;
                        mythis.cboStatusStoreVal03 = res.data.data.active;
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
                        .delete('http://localhost:8000/sgs/store_info_distri/' + id, {
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
                .post('http://localhost:8000/sgs/store_info_distri', {
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
                    "http://localhost:8000/sgs/store_info_distri/" + mythis.acuanEdit, {
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

                const data = await axios.get("http://localhost:8000/sgs/getStoreInfoDistri");

                console.log(data.data.data);

                const ws = XLSX.utils.json_to_sheet(data.data.data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

                XLSX.writeFile(wb, "data_toko.xls");
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
</style>
