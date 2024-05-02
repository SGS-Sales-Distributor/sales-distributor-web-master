<template>
<Pages :title="title">
     <div class="container-fluid">
            <div class="mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">NIK</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_nik"></FormInput>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Nama Lengkap</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_fullname"></FormInput>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Username</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_name" readonly></FormInput>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Email</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_email" readonly></FormInput>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Telepon</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_phone"></FormInput>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="">Ubah Password</label>
                                </div>
                                <div class="col-md-6">
                                    <FormInput v-model="user_password"></FormInput>
                                    <span style="font-size: 11px; color: red;">*abaikan jika tidak mengubah password</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-3">
                                <Button type="button" @click="update">Perbarui</Button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
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
            title: "Profile",
            showModal: false,
            showmodal_zindex: "z-index:1000",
            acuanEdit: null,

            todo: {
                type: "",
            },

            tipeWarehouseOptions: [],
            tmp_whsCodeType: [],
            tmp_whsCodeType2: [],

            todo2: {
                type: "",
                id_type: "",
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
        // this.getTable();
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

        jqueryDelEdit() {
            const mythis = this;

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
