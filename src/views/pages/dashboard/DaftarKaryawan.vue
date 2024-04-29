<template>
    <Pages :title="title">
        <div class="col-md-12">
                <!-- Menampilkan loading overlay saat sedang memuat data -->
                <!-- <div v-if="isLoading" class="overlay">
                    <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </button>
                </div> -->

            <!-- Container utama -->
            <main>
                <!-- Tombol tambah data -->
                <div class="p-4">
                <div class="pb-2">
                    <button type="button" class="btn btn-primary" style="float: right;" data-bs-toggle="modal" data-bs-target="#StoreNewUserModal">
                    Tambah User
                    </button>
                </div>

                <div class="table-responsive">
                    <!-- Tabel data mahasiswa -->
                    <table id="dtBasicExample" class="table table-responsive table-hover" style="color: black;" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th class="th-sm">NO</th>
                            <th class="th-sm">ID</th>
                            <th class="th-sm">Nama</th>
                            <th class="th-sm">NIK</th>
                            <th class="th-sm">Gender</th>
                            <th class="th-sm">Divisi</th>
                            <th class="th-sm">Level</th>
                            <th class="th-sm">Jabatan</th>
                            <th class="th-sm">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Looping data mahasiswa -->
                        <tr v-for="(item, idx) in items" :key="item.id">
                            <td>{{ idx + 1 }}</td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.nik }}</td>
                            <td>{{ item.gender }}</td>
                            <td>{{ item.divisi }}</td>
                            <td>{{ item.level }}</td>
                            <td>{{ item.jabatan }}</td>
                            <td>
                            <!-- Tombol edit data -->
                            <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#editModal" @click="editData(item.id)">Edit</button>
                            <!-- Tombol hapus data -->
                            <button type="button" class="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="selectId(item.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </main>

            <!-- Modal tambah data -->
            <div class="modal fade" id="StoreNewUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Form novalidate @submit="storeNewData" :validation-schema="schema" method="post">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleInputNama" class="form-label" >Nama <span class="form-required">*</span></label>
                            <Field name="nama" type="text" v-model="formData.nama" class="form-control" id="exampleInputNama" placeholder="Masukkan Nama Lengkap"/>
                            <ErrorMessage class="form-required" name="nama" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputNik" class="form-label">NIK <span class="form-required">*</span></label>
                            <Field name="nik" type="text" v-model="formData.nik" class="form-control" id="exampleInputNik" placeholder="Masukkan NIK"/>
                            <ErrorMessage class="form-required" name="nik"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputGender" class="form-label">Gender <span class="form-required">*</span></label>
                            <Field name="gender" type="text" v-model="formData.gender" class="form-control" id="exampleInputGender" placeholder="Masukkan Gender"/>
                            <ErrorMessage class="form-required" name="gender"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputDivisi" class="form-label">Divisi <span class="form-required">*</span></label>
                            <Field name="divisi" type="text" v-model="formData.divisi" class="form-control" id="exampleInputDivisi" placeholder="Masukkan Divisi"/>
                            <ErrorMessage class="form-required" name="divisi" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputLevel" class="form-label">Level <span class="form-required">*</span></label>
                            <Field name="level" type="text" v-model="formData.level" class="form-control" id="exampleInputLevel" placeholder="Masukkan Level"/>
                            <ErrorMessage class="form-required" name="level" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputJabatan" class="form-label">Jabatan <span class="form-required">*</span></label>
                            <Field name="jabatan" type="text" v-model="formData.jabatan" class="form-control" id="exampleInputJabatan" placeholder="Masukkan Jabatan"/>
                            <ErrorMessage class="form-required" name="jabatan" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </Form>
                </div>
                </div>
            </div>

            <!-- Modal edit data -->
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="updateData">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleInputNama" class="form-label" >Nama <span class="form-required">*</span></label>
                            <input v-model="selectedData.nama" type="text" class="form-control" id="exampleInputNama" placeholder="Masukkan Nama Lengkap"/>
                            <ErrorMessage class="form-required" name="nama" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputNik" class="form-label">NIK <span class="form-required">*</span></label>
                            <input v-model="selectedData.nik" type="text" class="form-control" id="exampleInputNik" placeholder="Masukkan NIK"/>
                            <ErrorMessage class="form-required" name="nik" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputGender" class="form-label">Gender <span class="form-required">*</span></label>
                            <input v-model="selectedData.gender" type="text" class="form-control" id="exampleInputGender" placeholder="Masukkan Gender"/>
                            <ErrorMessage class="form-required" name="gender" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputDivisi" class="form-label">Divisi <span class="form-required">*</span></label>
                            <input v-model="selectedData.divisi" type="text" class="form-control" id="exampleInputDivisi" placeholder="Masukkan Divisi"/>
                            <ErrorMessage class="form-required" name="divisi" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputLevel" class="form-label">Level <span class="form-required">*</span></label>
                            <input v-model="selectedData.level" type="text" class="form-control" id="exampleInputLevel" placeholder="Masukkan Level"/>
                            <ErrorMessage class="form-required" name="level" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputJabatan" class="form-label">Jabatan <span class="form-required">*</span></label>
                            <input v-model="selectedData.jabatan" type="text" class="form-control" id="exampleInputJabatan" placeholder="Masukkan Jabatan"/>
                            <ErrorMessage class="form-required" name="jabatan" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>

            <!-- Modal hapus data -->
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Hapus User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Yakin ingin menghapus data ini?
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" @click="deleteData">Hapus</button>
                    </div>
                </div>
                </div>
            </div>

            <div>
                <MDBFooter :text="['center', 'white']">
                    <!-- Grid container -->
                    <MDBContainer class="p-4 pb-0">
                        <!-- Section: Social media -->
                        <section class="mb-4">
                            <!-- Instagram -->
                            <MDBBtn
                            tag="a"
                            color="primary"
                            href="#!"
                            floating
                            style="background-color: #ac2bac"
                            class="m-1"
                            >
                            <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
                            </MDBBtn>
                            <!-- Linkedin -->
                            <MDBBtn
                            tag="a"
                            color="primary"
                            href="#!"
                            floating
                            style="background-color: #0082ca"
                            class="m-1"
                            >
                            <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
                            </MDBBtn>
                            <!-- Github -->
                            <MDBBtn
                            tag="a"
                            color="primary"
                            href="#!"
                            floating
                            style="background-color: #333333"
                            class="m-1"
                            >
                            <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
                            </MDBBtn>
                        </section>
                        <!-- Section: Social media -->
                    </MDBContainer>
                    <!-- Grid container -->
                    <!-- Copyright -->
                    <div
                    class="text-center p-3"
                    style="background-color: rgba(0, 0, 0, 0.2)"
                    >© 2024 Copyright:
                    <a class="text-white" href="#"
                        >Sinergi Global Service</a
                    >
                    </div>
                    <!-- Copyright -->
                </MDBFooter>
            </div>
        </div>
    </Pages>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';
import Swal from 'sweetalert2';
import $ from 'jquery';
import 'datatables.net-dt';
import Pages from '@/components/template/Pages.vue';

const schema = yup.object().shape({
    nama: yup.string().required('Nama is required'),
    nik: yup.string().required('NIK is required'),
    gender: yup.string().required('Gender is required'),
    divisi: yup.string().required('Divisi is required'),
    level: yup.string().required('Level is required'),
    jabatan: yup.string().required('Jabatan is required'),
});

export default {
    data() {
        return {
        title: 'Data Karyawan',
        schema,
        items: [],
        searchTerm: '',
        formData: {
            nama: '',
            nik: '',
            gender: '',
            divisi: '',
            level: '',
            jabatan: '',
        },
        selectedData: {
            id: '',
            nama: '',
            nik: '',
            gender: '',
            divisi: '',
            level: '',
            jabatan: '',
        },
        selectedId: '',
        isLoading: false,
        };
    },
    computed: {
        filteredData() {
        return this.items.filter((item) => {
            return item.nama.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        },
    },
    mounted() {
        this.fetchDataUser();

        $(document).ready(() => {
        const table = $('#dtBasicExample').DataTable({
            searching: true,
            initComplete: () => {
            const searchBox = $('.dataTables_filter input');
            searchBox.on('keyup', () => {
                this.searchTerm = searchBox.val();
                table.search(this.searchTerm).draw();
            });
            },
        });
        $('.dataTables_length').addClass('bs-select');
        });
    },
    methods: {
        fetchDataUser() {
        this.isLoading = true;
        this.$axios.get(`${this.$root.APP_URL}/api/user`)
            .then((response) => {
            this.items = response.data.data;
            this.isLoading = false;
            })
            .catch((error) => {
            console.log(error);
            this.isLoading = false;
            });
        },
        storeNewData() {
        this.isLoading = true;
        this.$axios.post(`${this.$root.APP_URL}/api/user`, this.formData)
            .then((response) => {
            this.formData.nama = '';
            this.formData.nik = '';
            this.formData.gender = '';
            this.formData.divisi = '';
            this.formData.level = '';
            this.formData.jabatan = '';
            this.fetchDataUser();
            this.isLoading = false;
            })
            .catch((error) => {
            console.log(error);
            this.isLoading = false;
            });
        },
        editData(id) {
        const selectedData = this.items.find((data)=> data.id === id);
        this.selectedData = { ...selectedData };
        },
        updateData() {
        this.isLoading = true;
        this.$axios.put(`${this.$root.APP_URL}/api/user/${this.selectedData.id}`, this.selectedData)
            .then((response)=>{
            this.fetchDataUser();
            this.isLoading = false;
            })
            .catch((error) => {
            console.log(error);
            this.isLoading = false;
            });
        },
        selectId(id) {
        this.selectedId = id;
        },
        deleteData() {
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: 'Data yang dihapus tidak dapat dikembalikan!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Tidak, batalkan!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            this.isLoading = true;
            this.$axios.delete(`${this.$root.APP_URL}/api/user/${this.selectedId}`)
                .then((response) => {
                this.fetchDataUser();
                this.isLoading = false;
                })
                .catch((error) => {
                console.log(error);
                this.isLoading = false;
                });
            Swal.fire(
                'Terhapus!',
                'Data berhasil dihapus.',
                'success'
            )
            }
        })
        },
        // isRequired(value) {
        //   if (value && value.trim()) {
        //     return true;
        //   }
        //   return 'This is required';
        // },
    },
    components: {
        Pages,
        Form,
        Field,
        ErrorMessage,
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBIcon,
    },
};
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.form-required {
    color: red;
}
.mb-4 {
    justify-content: center;
    display: flex;
}
table.dataTable thead .sorting:after,
table.dataTable thead .sorting:before,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_asc:before,
table.dataTable thead .sorting_asc_disabled:after,
table.dataTable thead .sorting_asc_disabled:before,
table.dataTable thead .sorting_desc:after,
table.dataTable thead .sorting_desc:before,
table.dataTable thead .sorting_desc_disabled:after,
table.dataTable thead .sorting_desc_disabled:before {
    bottom: .5em;
}
@media (max-width: 576px) {
    .dataTables_wrapper .dataTables_length,
    .dataTables_wrapper .dataTables_filter,
    .dataTables_wrapper .dataTables_info,
    .dataTables_wrapper .dataTables_processing,
    .dataTables_wrapper .dataTables_paginate {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
    }
}
</style>