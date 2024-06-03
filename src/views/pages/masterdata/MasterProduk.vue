<template>
<Pages :title="title">
    <div class="container-fluid">
        <div class="mb-2">
            <div class="row">
                <div class="col-md-12">

                    <!-- <div class="form-group">
                        <div class="row">
                            <div class="col-md-2">
                                <label for="">Master Product</label>
                            </div>
                            <div class="col-md-6">
                                <v-select :class="errorField.whsCodeType ? 'input-error' : ''" :options="tipeWarehouseOptions" v-model="tmp_whsCodeType" @update:modelValue="mySelectEvent()" :clearable="false"></v-select>
                            </div>
                        </div>
                    </div> -->

                    <!-- <div class="form-group">
                        <div class="row">
                            <div class="col-md-2">
                                <label for="">tes</label>
                            </div>
                            <div class="col-md-6">
                                <FormInput :class="errorField.type ? 'input-error' : ''" v-model="todo.type" @input="
                      (val) =>
                        (todo.type = todo.type.toUpperCase().trim())
                    "></FormInput>
                            </div>
                        </div>
                    </div> -->

                    <!-- <div class="form-group">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-3">
                                <Button type="button" @click="saveTodo">Simpan</Button>
                            </div>
                        </div>
                    </div> -->

                    <div class="col-md-3">
                        <button class="btn btn-sm btn-warning text-white" data-toggle="tooltip" @click="exportDetailData()"><i class="fa-solid fa-floppy-disk"></i> PRINT</button>
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
                                    <!-- <pre>{{todo2}}</pre> -->
                                    <div class="col-md-2">
                                        <label for="">Prod Base Price</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input id="inputA" v-model="todo2.prod_base_price" type="number" style="width: 20em" min="0" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Prod Unit Price</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input :id="'txt_1'" v-model="todo2.prod_unit_price" type="number" pattern="[0-9]" style="width: 20em" min="0" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="">Prod Special Offer</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input :id="'txt_1'" v-model="todo2.prod_special_offer" type="number" pattern="[0-9]" style="width: 20em" min="0" />
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
            title: "Master Produk",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            grid2: new Grid(),
            acuanEdit: null,

            todo: {
                type: "",
            },
            productNumberOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],

            todo2: {
                prod_number: "",
                prod_barcode_number: "",
                prod_sai_number: "",
                prod_universal_number: "",
                prod_name: "",
                prod_base_price: "",
                prod_base_price_offer: "",
                prod_special_offer_unit: "",
                brand_id: "",
                category_id: "",
                category_sub_id: "",
                prod_type_id: "",
                function_id: "",
                supplier_id: "",
                prod_status_id: "",
                status_aktif: "",
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
        // formatNumber(value) {
        //     return new Intl.NumberFormat('id-ID', {
        //         style: 'currency',
        //         currency: 'IDR'
        //     }).format(value);
        // },
        formatNumber(value) {
            const formattedValue = new Intl.NumberFormat('id-ID', {
                style: 'decimal',
                minimumFractionDigits: 2
            }).format(value / 1000000);
            return formattedValue.replace(/\./g, ',') + '.00';
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
                        id: "NO",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>NO</b></div>'
                        ),
                        // hidden: true
                    },

                    {
                        id: "prod_number",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>MTG CODE</b></div>'
                        ),
                    },
                    {
                        id: "prod_name",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>NAMA PRODUK</b></div>'
                        ),
                    },
                    {
                        id: "prod_base_price",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>HARGA PRODUK</b></div>'
                        ),
                        // formatter: (cell, row) => this.formatNumber(row.prod_base_price),
                        formatter: (cell, row) => {
                            const formattedValue = new Intl.NumberFormat('id-ID', {
                                style: 'decimal',
                                minimumFractionDigits: 2
                            }).format(cell);
                            return formattedValue.replace(/\./g, '.');
                        }
                    },
                    {
                        id: "prod_special_offer",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>DISKON REGULAR</b></div>'
                        ),
                    },
                    {
                        id: "brand_id",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>BRAND</b></div>'
                        ),
                    },

                    {
                        id:"aksi",
                        name: html(
                            '<div style="padding: 5px;border-radius: 5px;text-align: left;"><b>AKSI</b></div>'
                        ),
                        
                        formatter: (_, row) =>
                            html(
                                `
                <button data-id="${row.cells[1].data}" class="btn btn-sm btn-warning text-white" id="editData" data-toggle="tooltip" title="Edit" ><i class="fa-solid fa-pen-to-square"></i></button>
                &nbsp;&nbsp;&nbsp;
                <button data-id="${row.cells[1].data}" class="btn btn-sm btn-danger text-white" id="deleteData" data-toggle="tooltip" title="Delete" ><i class="fa-solid fa-trash-can"></i></button>
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
                        "text-align": "left",
                    },
                    td:{
                        "text-align": "left",
                        border: "1px solid #ccc",
                        padding: "5px 10px",
                    },
                    
                    
                },
                server: {
                    url: mythis.$root.API_URL + 'sgs/product_info_do',
                    then: (data) =>
                        data.results.map((card,index) => [
                            index+1,
                            card.prod_number,
                            // card.prod_barcode_number,
                            // card.prod_sai_number,
                            // card.prod_universal_number,
                            card.prod_name,
                            card.prod_base_price,
                            card.prod_special_offer + '%',
                            // card.prod_base_price_offer,
                            // card.prod_special_offer_unit,
                            card.brand.brand_name,
                            // card.category_id,
                            // card.category_sub_id,
                            // card.prod_type_id,
                            // card.function_id,
                            // card.supplier_id,
                            // card.prod_status_id,
                            // card.status_aktif,
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
                    .get(mythis.$root.API_URL + 'sgs/product_info_do/' + id)
                    .then((res) => {
                        mythis.acuanEdit = id;
                        Object.keys(res.data.data).forEach(function (key) {
                            mythis.todo2 = res.data.data;
                        });
                        document.getElementById("inputA").focus(); // sets the focus on the input

                        mythis.$root.loader = false;
                        console.log(res.data.data);
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
                        .delete(mythis.$root.API_URL + 'sgs/product_info_do/' + id, {
                            data: {
                                fileUpload: "form satuan",
                                userid: mythis.userid,
                            },
                        })
                        .then((res) => {
                            console.log(res.data.data);
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
                .post(mythis.$root.API_URL + 'sgs/product_info_do', {
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
                    mythis.$root.API_URL + "sgs/product_info_do/" + mythis.acuanEdit, {
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

                const data = await axios.get(mythis.$root.API_URL + "sgs/getMasterProduk");

                // console.log(data.data.data);

                const ws = XLSX.utils.json_to_sheet(data.data.data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

                XLSX.writeFile(wb, "master_produk.xls");
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
