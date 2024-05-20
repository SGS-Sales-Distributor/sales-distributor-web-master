<template>
<Pages :title="title">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <strong>Master Tipe Program</strong>
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
                            <th>ID Type Program</th>
                            <th>ID Program</th>
                            <th>Name Program</th>
                            <th>Keterangan</th>
                            <th>Active</th>
                            <th>Conditon</th>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Periode Start</th>
                            <th>Periode End</th>
                            <th>Modified By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, idx) in program.data" :key="idx">
                            <td>{{ idx + 1 }}</td>
                            <td>{{ item.id_type_program }}</td>
                            <td>{{ item.id_program }}</td>
                            <td>{{ item.name_program }}</td>
                            <td>{{ item.keterangan }}</td>
                            <td>{{ item.active }}</td>
                            <td>{{ item.condition }}</td>
                            <td>{{ item.product }}</td>
                            <td>{{ item.disc_val }}</td>
                            <td>{{ item.periode_start }}</td>
                            <td>{{ item.periode_end }}</td>
                            <td>{{ item.modified_by }}</td>
                            <td>
                                <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#editModal" @click="editData(item)">Edit</button>
                                <button type="button" class="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="selectId(item.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
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
                    <label for="id_type_program" class="form-label">ID Type Program <span class="form-required">*</span></label>
                    <Field name="id_type_program" type="text" v-model="formData.id_type_program" class="form-control" id="id_type_program" placeholder="Masukkan ID Type Program" />
                    <ErrorMessage class="form-required" name="id_type_program" />
                </div>
                <div class="mb-3">
                    <label for="id_program" class="form-label">ID Program <span class="form-required">*</span></label>
                    <Field name="id_program" type="text" v-model="formData.id_program" class="form-control" id="id_program" placeholder="Masukkan ID Program" />
                    <ErrorMessage class="form-required" name="id_program" />
                </div>
                <div class="mb-3">
                    <label for="name_program" class="form-label">Name Program <span class="form-required">*</span></label>
                    <Field name="name_program" type="text" v-model="formData.name_program" class="form-control" id="name_program" placeholder="Masukkan Name Program" />
                    <ErrorMessage class="form-required" name="name_program" />
                </div>
                <div class="mb-3">
                    <label for="keterangan" class="form-label">Keterangan <span class="form-required">*</span></label>
                    <Field name="keterangan" type="text" v-model="formData.keterangan" class="form-control" id="keterangan" placeholder="Masukkan Keterangan" />
                    <ErrorMessage class="form-required" name="keterangan" />
                </div>
                <div class="mb-3">
                    <label for="active" class="form-label">Active <span class="form-required">*</span></label>
                    <Field name="active" type="text" v-model="formData.active" class="form-control" id="active" placeholder="Masukkan Active" />
                    <ErrorMessage class="form-required" name="active" />
                </div>
                <div class="mb-3">
                    <label for="conditon" class="form-label">Conditon <span class="form-required">*</span></label>
                    <Field name="conditon" type="text" v-model="formData.conditon" class="form-control" id="conditon" placeholder="Masukkan Conditon" />
                    <ErrorMessage class="form-required" name="conditon" />
                </div>
                <div class="mb-3">
                    <label for="product" class="form-label">Product <span class="form-required">*</span></label>
                    <Field name="product" type="text" v-model="formData.product" class="form-control" id="product" placeholder="Masukkan Product" />
                    <ErrorMessage class="form-required" name="product" />
                </div>
                <div class="mb-3">
                    <label for="disc_val" class="form-label">Discount<span class="form-required">*</span></label>
                    <Field name="disc_val" type="text" v-model="formData.disc_val" class="form-control" id="disc_val" placeholder="Masukkan Discount" />
                    <ErrorMessage class="form-required" name="disc_val" />
                </div>
                <div class="mb-3">
                    <label for="periode_start" class="form-label">Periode Start <span class="form-required">*</span></label>
                    <Field name="periode_start" type="text" v-model="formData.periode_start" class="form-control" id="periode_start" placeholder="Masukkan Periode Start" />
                    <ErrorMessage class="form-required" name="periode_start" />
                </div>
                <div class="mb-3">
                    <label for="periode_end" class="form-label">Periode End <span class="form-required">*</span></label>
                    <Field name="periode_end" type="text" v-model="formData.periode_end" class="form-control" id="periode_end" placeholder="Masukkan Periode End" />
                    <ErrorMessage class="form-required" name="periode_end" />
                </div>
                <div class="mb-3">
                    <label for="modified_by" class="form-label">Modified By <span class="form-required">*</span></label>
                    <Field name="modified_by" type="text" v-model="formData.modified_by" class="form-control" id="modified_by" placeholder="Masukkan Modified By" />
                    <ErrorMessage class="form-required" name="modified_by" />
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
                    <label for="id_type_program" class="form-label">ID Type Program <span class="form-required">*</span></label>
                    <Field name="id_type_program" type="text" v-model="formData.id_type_program" class="form-control" id="id_type_program" placeholder="Masukkan ID Type Program" />
                    <ErrorMessage class="form-required" name="id_type_program" />
                </div>
                <div class="mb-3">
                    <label for="id_program" class="form-label">ID Program <span class="form-required">*</span></label>
                    <Field name="id_program" type="text" v-model="formData.id_program" class="form-control" id="id_program" placeholder="Masukkan ID Program" />
                    <ErrorMessage class="form-required" name="id_program" />
                </div>
                <div class="mb-3">
                    <label for="name_program" class="form-label">Name Program <span class="form-required">*</span></label>
                    <Field name="name_program" type="text" v-model="formData.name_program" class="form-control" id="name_program" placeholder="Masukkan Name Program" />
                    <ErrorMessage class="form-required" name="name_program" />
                </div>
                <div class="mb-3">
                    <label for="keterangan" class="form-label">Keterangan <span class="form-required">*</span></label>
                    <Field name="keterangan" type="text" v-model="formData.keterangan" class="form-control" id="keterangan" placeholder="Masukkan Keterangan" />
                    <ErrorMessage class="form-required" name="keterangan" />
                </div>
                <div class="mb-3">
                    <label for="active" class="form-label">Active <span class="form-required">*</span></label>
                    <Field name="active" type="text" v-model="formData.active" class="form-control" id="active" placeholder="Masukkan Active" />
                    <ErrorMessage class="form-required" name="active" />
                </div>
                <div class="mb-3">
                    <label for="conditon" class="form-label">Conditon <span class="form-required">*</span></label>
                    <Field name="conditon" type="text" v-model="formData.conditon" class="form-control" id="conditon" placeholder="Masukkan Conditon" />
                    <ErrorMessage class="form-required" name="conditon" />
                </div>
                <div class="mb-3">
                    <label for="product" class="form-label">Product <span class="form-required">*</span></label>
                    <Field name="product" type="text" v-model="formData.product" class="form-control" id="product" placeholder="Masukkan Product" />
                    <ErrorMessage class="form-required" name="product" />
                </div>
                <div class="mb-3">
                    <label for="disc_val" class="form-label">Discount<span class="form-required">*</span></label>
                    <Field name="disc_val" type="text" v-model="formData.disc_val" class="form-control" id="disc_val" placeholder="Masukkan Discount" />
                    <ErrorMessage class="form-required" name="disc_val" />
                </div>
                <div class="mb-3">
                    <label for="periode_start" class="form-label">Periode Start <span class="form-required">*</span></label>
                    <Field name="periode_start" type="text" v-model="formData.periode_start" class="form-control" id="periode_start" placeholder="Masukkan Periode Start" />
                    <ErrorMessage class="form-required" name="periode_start" />
                </div>
                <div class="mb-3">
                    <label for="periode_end" class="form-label">Periode End <span class="form-required">*</span></label>
                    <Field name="periode_end" type="text" v-model="formData.periode_end" class="form-control" id="periode_end" placeholder="Masukkan Periode End" />
                    <ErrorMessage class="form-required" name="periode_end" />
                </div>
                <div class="mb-3">
                    <label for="modified_by" class="form-label">Modified By <span class="form-required">*</span></label>
                    <Field name="modified_by" type="text" v-model="formData.modified_by" class="form-control" id="modified_by" placeholder="Masukkan Modified By" />
                    <ErrorMessage class="form-required" name="modified_by" />
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
    id_type_program: yup.string().required('ID Type Program is required'),
    id_program: yup.string().required('ID Program is required'),
    name_program: yup.string().required('Name Program is required'),
    keterangan: yup.string().required('Keterangan is required'),
    active: yup.string().required('Active User is required'),
    condition: yup.string().required('Conditon is required'),
    product: yup.string().required('Product is required'),
    disc_val: yup.string().required('Discount is required'),
    periode_start: yup.string().required('Periode Start is required'),
    periode_end: yup.string().required('Periode End is required'),
    modified_by: yup.string().required('Modified By is required'),
});

export default {
    data() {
        return {
            title: 'Master Tipe Program',
            schema,
            items: [],
            salesman: {
                data: []
            },
            searchTerm: '',
            formData: {
                id_type_program: '',
                id_program: '',
                name_program: '',
                keterangan: '',
                active: '',
                condition: '',
                product: '',
                disc_val: '',
                periode_start: '',
                periode_end: '',
                modified_by: '',
            },
            selectedData: {
                id_type_program: '',
                id_program: '',
                name_program: '',
                keterangan: '',
                active: '',
                condition: '',
                product: '',
                disc_val: '',
                periode_start: '',
                periode_end: '',
                modified_by: '',
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
                const response = await axios.get(this.$root.API_URL +`sgs/user_info`);
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
                await axios.post(this.$root.API_URL +`sgs/user_info`, this.formData);
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
                const response = await axios.get(this.$root.API_URL +`sgs/user_info/${data.id}`);
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
                await axios.put(this.$root.API_URL +`sgs/user_info/${this.selectedData}`, this.selectedData);
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
                        await axios.delete(this.$root.API_URL +`sgs/user_info/${this.selectedId}`);
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
