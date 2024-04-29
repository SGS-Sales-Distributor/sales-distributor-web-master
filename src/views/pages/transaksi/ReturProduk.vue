<template>
<Pages :title="title">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <strong>Retur Produk</strong>
            </div>
            <div class="btn" style="display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#StoreNewUserModal">
                    Tambah User
                </button>
            </div>

            <div class="row p-3">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                        <button class="btn btn-outline-secondary" @click="getSalesman()" type="button">Search</button>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <table id="dtBasicExample" class="table table-bordered table-hover table-responsive" style="overflow-x: auto;">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Number</th>
                            <th>User NIK</th>
                            <th>User Fullname</th>
                            <th>User Phone</th>
                            <th>User Email</th>
                            <th>Username</th>
                            <th>User Password</th>
                            <th>User Type ID</th>
                            <th>User Status</th>
                            <th>Cabang ID</th>
                            <th>Store ID</th>
                            <th>Status BA</th>
                            <th>Modtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <!-- <tbody>
                                    <tr v-for="(item, idx) in salesman.data" :key="idx">
                                        <td>{{ idx + 1 }}</td>
                                        <td>{{ item.user_number }}</td>
                                        <td>{{ item.user_nik }}</td>
                                        <td>{{ item.user_fullname }}</td>
                                        <td>{{ item.user_phone }}</td>
                                        <td>{{ item.user_email }}</td>
                                        <td>{{ item.user_name }}</td>
                                        <td>{{ item.user_password }}</td>
                                        <td>{{ item.user_type_id }}</td>
                                        <td>{{ item.user_status }}</td>
                                        <td>{{ item.cabang_id }}</td>
                                        <td>{{ item.store_id }}</td>
                                        <td>{{ item.status_ba }}</td>
                                        <td>{{ item.modtime }}</td>
                                        <td>
                                            <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#editModal" @click="editData(item)">Edit</button>
                                            <button type="button" class="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="selectId(item.id)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody> -->
                </table>
                <!-- <CRow>
                                <CCol>
                                    <CPagination :activePage.sync="currentPage" :pages="totalPages" @update:activePage="fetchDataUser"></CPagination>
                                </CCol>
                            </CRow> -->
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                            <a class="page-link" href="#">2 <span class="sr-only"></span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</Pages>

<!-- Modal tambah data-->
<div class="modal fade" id="StoreNewUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- <Form novalidate @submit="storeNewData" :validation-schema="schema" method="post"> -->
            <div class="modal-body">
                <div class="mb-3">
                    <label for="user_number" class="form-label">User Number <span class="form-required">*</span></label>
                    <Field name="user_number" type="text" v-model="formData.user_number" class="form-control" id="user_number" placeholder="Masukkan Number" />
                    <ErrorMessage class="form-required" name="user_number" />
                </div>
                <div class="mb-3">
                    <label for="user_nik" class="form-label">NIK <span class="form-required">*</span></label>
                    <Field name="user_nik" type="text" v-model="formData.user_nik" class="form-control" id="user_nik" placeholder="Masukkan NIK" />
                    <ErrorMessage class="form-required" name="user_nik" />
                </div>
                <div class="mb-3">
                    <label for="user_fullname" class="form-label">Fullname <span class="form-required">*</span></label>
                    <Field name="user_fullname" type="text" v-model="formData.user_fullname" class="form-control" id="user_fullname" placeholder="Masukkan Nama Lengkap" />
                    <ErrorMessage class="form-required" name="user_fullname" />
                </div>
                <div class="mb-3">
                    <label for="user_phone" class="form-label">Phone <span class="form-required">*</span></label>
                    <Field name="user_phone" type="text" v-model="formData.user_phone" class="form-control" id="user_phone" placeholder="Masukkan No. Telp" />
                    <ErrorMessage class="form-required" name="user_phone" />
                </div>
                <div class="mb-3">
                    <label for="user_email" class="form-label">User Email <span class="form-required">*</span></label>
                    <Field name="user_email" type="text" v-model="formData.user_email" class="form-control" id="user_email" placeholder="Masukkan User Email" />
                    <ErrorMessage class="form-required" name="user_email" />
                </div>
                <div class="mb-3">
                    <label for="user_name" class="form-label">Username <span class="form-required">*</span></label>
                    <Field name="user_name" type="text" v-model="formData.user_name" class="form-control" id="user_name" placeholder="Masukkan Username" />
                    <ErrorMessage class="form-required" name="user_name" />
                </div>
                <div class="mb-3">
                    <label for="user_password" class="form-label">Password <span class="form-required">*</span></label>
                    <Field name="user_password" type="text" v-model="formData.user_password" class="form-control" id="user_password" placeholder="Masukkan Password" />
                    <ErrorMessage class="form-required" name="user_password" />
                </div>
                <div class="mb-3">
                    <label for="user_type_id" class="form-label">User Type ID<span class="form-required">*</span></label>
                    <Field name="user_type_id" type="text" v-model="formData.user_type_id" class="form-control" id="user_type_id" placeholder="Masukkan User Type ID" />
                    <ErrorMessage class="form-required" name="user_type_id" />
                </div>
                <div class="mb-3">
                    <label for="user_status" class="form-label">Status <span class="form-required">*</span></label>
                    <Field name="user_status" type="text" v-model="formData.user_status" class="form-control" id="user_status" placeholder="Masukkan Status" />
                    <ErrorMessage class="form-required" name="user_status" />
                </div>
                <div class="mb-3">
                    <label for="cabang_id" class="form-label">Cabang ID <span class="form-required">*</span></label>
                    <Field name="cabang_id" type="text" v-model="formData.cabang_id" class="form-control" id="cabang_id" placeholder="Masukkan Cabang ID" />
                    <ErrorMessage class="form-required" name="cabang_id" />
                </div>
                <div class="mb-3">
                    <label for="store_id" class="form-label">Store ID <span class="form-required">*</span></label>
                    <Field name="store_id" type="text" v-model="formData.store_id" class="form-control" id="store_id" placeholder="Masukkan Store ID" />
                    <ErrorMessage class="form-required" name="store_id" />
                </div>
                <div class="mb-3">
                    <label for="status_ba" class="form-label">status BA <span class="form-required">*</span></label>
                    <Field name="status_ba" type="text" v-model="formData.status_ba" class="form-control" id="status_ba" placeholder="Masukkan Status BA" />
                    <ErrorMessage class="form-required" name="status_ba" />
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" @click="storeNewData()">Submit</button>
            </div>
            <!-- </Form> -->
        </div>
    </div>
</div>

<!-- Modal edit data -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                <button type="button" id="closeEditModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- <form @submit.prevent="updateData"> -->
            <div class="modal-body" v-if="selectedData != null">
                <div class="mb-3">
                    <label for="user_number" class="form-label">User Number <span class="form-required">*</span></label>
                    <Field name="user_number" type="text" v-model="selectedData.user_number" class="form-control" id="user_number" placeholder="Masukkan Number" />
                    <ErrorMessage class="form-required" name="user_number" />
                </div>
                <div class="mb-3">
                    <label for="user_nik" class="form-label">NIK <span class="form-required">*</span></label>
                    <Field name="user_nik" type="text" v-model="selectedData.user_nik" class="form-control" id="user_nik" placeholder="Masukkan NIK" />
                    <ErrorMessage class="form-required" name="user_nik" />
                </div>
                <div class="mb-3">
                    <label for="user_fullname" class="form-label">Fullname <span class="form-required">*</span></label>
                    <Field name="user_fullname" type="text" v-model="selectedData.user_fullname" class="form-control" id="user_fullname" placeholder="Masukkan Nama Lengkap" />
                    <ErrorMessage class="form-required" name="user_fullname" />
                </div>
                <div class="mb-3">
                    <label for="user_phone" class="form-label">Phone <span class="form-required">*</span></label>
                    <Field name="user_phone" type="text" v-model="selectedData.user_phone" class="form-control" id="user_phone" placeholder="Masukkan No. Telp" />
                    <ErrorMessage class="form-required" name="user_phone" />
                </div>
                <div class="mb-3">
                    <label for="user_email" class="form-label">User Email <span class="form-required">*</span></label>
                    <Field name="user_email" type="text" v-model="selectedData.user_email" class="form-control" id="user_email" placeholder="Masukkan User Email" />
                    <ErrorMessage class="form-required" name="user_email" />
                </div>
                <div class="mb-3">
                    <label for="user_name" class="form-label">Username <span class="form-required">*</span></label>
                    <Field name="user_name" type="text" v-model="selectedData.user_name" class="form-control" id="user_name" placeholder="Masukkan Username" />
                    <ErrorMessage class="form-required" name="user_name" />
                </div>
                <div class="mb-3">
                    <label for="user_password" class="form-label">Password <span class="form-required">*</span></label>
                    <Field name="user_password" type="text" v-model="selectedData.user_password" class="form-control" id="user_password" placeholder="Masukkan Password" />
                    <ErrorMessage class="form-required" name="user_password" />
                </div>
                <div class="mb-3">
                    <label for="user_type_id" class="form-label">User Type ID<span class="form-required">*</span></label>
                    <Field name="user_type_id" type="text" v-model="selectedData.user_type_id" class="form-control" id="user_type_id" placeholder="Masukkan User Type ID" />
                    <ErrorMessage class="form-required" name="user_type_id" />
                </div>
                <div class="mb-3">
                    <label for="user_status" class="form-label">Status <span class="form-required">*</span></label>
                    <Field name="user_status" type="text" v-model="selectedData.user_status" class="form-control" id="user_status" placeholder="Masukkan Status" />
                    <ErrorMessage class="form-required" name="user_status" />
                </div>
                <div class="mb-3">
                    <label for="cabang_id" class="form-label">Cabang ID <span class="form-required">*</span></label>
                    <Field name="cabang_id" type="text" v-model="selectedData.cabang_id" class="form-control" id="cabang_id" placeholder="Masukkan Cabang ID" />
                    <ErrorMessage class="form-required" name="cabang_id" />
                </div>
                <div class="mb-3">
                    <label for="store_id" class="form-label">Store ID <span class="form-required">*</span></label>
                    <Field name="store_id" type="text" v-model="selectedData.store_id" class="form-control" id="store_id" placeholder="Masukkan Store ID" />
                    <ErrorMessage class="form-required" name="store_id" />
                </div>
                <div class="mb-3">
                    <label for="status_ba" class="form-label">status BA <span class="form-required">*</span></label>
                    <Field name="status_ba" type="text" v-model="selectedData.status_ba" class="form-control" id="status_ba" placeholder="Masukkan Status BA" />
                    <ErrorMessage class="form-required" name="status_ba" />
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" @click="updateData()">Save changes</button>
            </div>
            <!-- </form> -->
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
                <button type="button" class="btn btn-danger" @click="deleteData(selectedData.id)">Hapus</button>
            </div>
        </div>
    </div>
</div>
</template>

    
<script>
import {
    Form,
    Field,
    ErrorMessage
} from 'vee-validate';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import Pages from '@/components/template/Pages.vue';
import axios from 'axios';

const schema = yup.object().shape({
    user_number: yup.string().required('Number is required'),
    user_nik: yup.string().required('NIK is required'),
    user_fullname: yup.string().required('Fullname is required'),
    user_phone: yup.string().required('Phone is required'),
    user_email: yup.string().required('Email User is required'),
    user_name: yup.string().required('Username is required'),
    user_password: yup.string().required('Password is required'),
    user_type_id: yup.string().required('User Type ID is required'),
    user_status: yup.string().required('User Status is required'),
    cabang_id: yup.string().required('Cabang ID is required'),
    store_id: yup.string().required('Store ID is required'),
    status_ba: yup.string().required('Status BA is required'),
});

export default {
    data() {
        return {
            title: 'Retur Produk',
            schema,
            items: [],
            salesman: {
                data: []
            },
            searchTerm: '',
            formData: {
                cabang_id: '',
                status_ba: '',
                store_id: '',
                user_fullname: '',
                // user_id: '',
                user_name: '',
                user_nik: '',
                user_number: '',
                user_password: '',
                user_phone: '',
                user_status: '',
                user_type_id: '',
            },
            selectedData: {
                cabang_id: '',
                status_ba: '',
                store_id: '',
                user_fullname: '',
                user_id: '',
                user_name: '',
                user_nik: '',
                user_number: '',
                user_password: '',
                user_phone: '',
                user_status: '',
                user_type_id: '',
            },
            selectedId: null,
            deleteData: null,
            currentPage: 1,
            totalPages: 0,
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
        async fetchDataUser() {
            this.isLoading = true;
            try {
                const response = await axios.get(`http://localhost:8000/sgs/user_info`);
                if (response) {
                    this.salesman.data = response.data.data;
                    console.log(response.data.data);
                } else {
                    console.log('Gagal Menambah Data', response);
                }
            } catch (error) {
                console.error(error);
                this.isLoading = false;
            };
        },
        async storeNewData() {
            try {
                this.isLoading = true;
                await axios.post(`http://localhost:8000/sgs/user_info`, this.formData);
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Data berhasil disimpan',
                });
                this.fetchDataUser();
                this.resetForm();
            } catch (error) {
                console.error(error);
                this.isLoading = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: 'Data gagal disimpan',
                });
            }
        },
        // async editData(data) {
        //     // this.selectedData = {
        //     //     ...data
        //     // };
        //     this.resetSelectedData();
        //     try {
        //         const response = await axios.get(`http:localhost:8000/sgs/user_info/${data}`);
        //         this.selectedData = response.data.data;
        //         this.selectedId = data;
        //         console.log(this.selectedData);
        //     } catch (error) {
        //         console.log('Gagal Memuat Data', error);
        //     }
        // },
        // editData(item) {
        //     this.selectedData = { ...item };
        //     console.log(this.selectedData);
        // },
        async editData(data) {
            this.selectedData = {
                ...data
            };
            try {
                const response = await axios.get(`http://localhost:8000/sgs/user_info/${data.id}`);
                this.selectedData = response.data.data;
                this.selectedId = data.id;
                console.log(this.selectedData);
            } catch (error) {
                console.log('Gagal Memuat Data', error);
            }
        },
        async updateData() {
            console.log(this.selectedId);
            try {
                await axios.put(`http://localhost:8000/sgs/user_info/${this.selectedData}`, this.selectedData);
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Data berhasil diupdate',
                });
                this.fetchDataUser();
                document.getElementById('closeEditModal').click();
                this.resetSelectedData();
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: 'Data gagal diupdate',
                });
            }
        },
        selectId(id) {
            this.selectedId = id;
            console.log(this.selectedId);
            // this.deleteData = id;
        },
        async deleteData() {
            Swal.fire({
                title: 'Apakah anda yakin?',
                text: 'Data yang dihapus tidak dapat dikembalikan!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Tidak, batalkan!',
                reverseButtons: true,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`http://localhost:8000/sgs/user_info/${this.selectedId}`);
                        Swal.fire(
                            'Terhapus!',
                            'Data berhasil dihapus.',
                            'success'
                        );
                        this.fetchDataUser();
                        this.resetSelectedId();
                    } catch (error) {
                        console.error(error);
                        Swal.fire(
                            'Gagal!',
                            'Data gagal dihapus.',
                            'error'
                        );
                    }
                }
            });
        },
        resetForm() {
            this.formData = {
                cabang_id: '',
                modtime: '',
                status_ba: '',
                store_id: '',
                user_fullname: '',
                user_id: '',
                user_name: '',
                user_nik: '',
                user_number: '',
                user_password: '',
                user_phone: '',
                user_status: '',
                user_type_id: '',
            };
        },
        resetSelectedData() {
            this.selectedData = {
                cabang_id: '',
                modtime: '',
                status_ba: '',
                store_id: '',
                user_fullname: '',
                user_id: '',
                user_name: '',
                user_nik: '',
                user_number: '',
                user_password: '',
                user_phone: '',
                user_status: '',
                user_type_id: '',
            };
            this.selectedId = '';
        },
        resetSelectedId() {
            this.selectedId = null;
            console.log(this.selectedId);
        },
    },
    components: {
        Pages,
        Form,
        Field,
        ErrorMessage,
    },
};
</script>

    
<style>
.ct-table {
    overflow-x: auto;
}

@media (max-width: 768px) {
    .ct-table {
        overflow-x: scroll;
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
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
</style>
