<template>
    <Pages>
        <main class="container-fluid">
            <div class="row pt-4">
				<div class="col">
					<h3>Info Program</h3>
					<p class="lead">Kumpulan data <span class="fw-normal text-decoration-underline">Program Terkini</span></p>
					<hr />
				</div>
			</div>
            <div class="row row-cols-1 pb-4">
				<div class="d-flex align-items-center h-100">
					<div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between pb-4">
                            <div class="row align-items-center g-3">
                                <div class="col-auto" data-mdb-input-init>
                                    <input type="text" v-model="searchByQuery" class="form-control" placeholder="Cari berdasarkan nama program..."/>
                                </div>
                                <div class="col-auto">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Filter Data
                                        </button>
                                        <ul class="dropdown-menu" style="width: 500px;">
                                            <li>
                                                <button title="sort by ASC" class="dropdown-item" @click="sortByProgramNameASC">
                                                    Urutkan Secara A-Z (ASC)
                                                </button>
                                            </li>
                                            <li>
                                                <button title="sort by DESC" class="dropdown-item" @click="sortByProgramNameDESC">
                                                    Urutkan Secara Z-A (DESC)
                                                </button>
                                            </li>
                                            <li>
                                                <button title="sort by latest data" class="dropdown-item" @click="sortByLatestProgram">
                                                    Program Terbaru
                                                </button>
                                            </li>
                                            <hr />
                                            <li>
                                                <div class="container">
                                                    <h6>Rentang Tanggal Mulai Program</h6>
                                                    <form class="row align-items-center" method="get">
                                                        <div class="col-md-6">
                                                            <label for="start-date-input" class="form-label">Mulai</label>
                                                            <input type="date" class="form-control" id="start-date-input" name="start-date">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="end-date-input" class="form-label">Sampai</label>
                                                            <input type="date" class="form-control" id="end-date-input" name="end-date">
                                                        </div>
                                                        <div class="col-md-12 mt-3">
                                                            <button type="submit" class="btn btn-primary">Cari</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div class="row align-items-center g-3">
                                <div class="col-auto">
                                    <button 
                                    type="button" 
                                    class="btn btn-success"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal" 
                                    data-bs-whatever="@fat"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill text-white" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                        </svg>
                                        <span class="text-white">Tambah Program</span>
                                    </button>
                                
                                    <!-- Create Modal -->
                                    <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Program Baru</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <Form 
                                                    novalidate
                                                    id="store-program-form-data"
                                                    method="post"
                                                    @submit.prevent="storeNewProgram()"
                                                    :validation-schema="validateData"
                                                    >
                                                        <div class="mb-3">
                                                            <label for="tipe-program" class="col-form-label">Tipe Program</label>
                                                            <vee-field
                                                            v-model="formData.id_type_program"
                                                            as="select" 
                                                            name="tipe-program"
                                                            class="form-control" 
                                                            id="tipe-program">
                                                                <option value="" disabled>Pilih Tipe Program</option>
                                                                <option v-for="(type, index) in programTypes" :key="index+1" :value="type.id_type">{{ type.type }}</option>
                                                            </vee-field>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="nama-program" class="col-form-label">Nama Program</label>
                                                            <vee-field
                                                            v-model="formData.nama_program" 
                                                            type="text" 
                                                            name="nama-program"
                                                            class="form-control" 
                                                            id="nama-program" 
                                                            placeholder="Masukkan nama program" 
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="keterangan-text" class="col-form-label">Keterangan:</label>
                                                            <vee-field
                                                            v-model="formData.keterangan"
                                                            as="textarea" 
                                                            name="keterangan-text"
                                                            placeholder="Masukkan keterangan program"
                                                            class="form-control" 
                                                            id="keterangan-text" 
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="periode-mulai" class="col-form-label">Periode Mulai:</label>
                                                            <vee-field
                                                            v-model="formData.periode_mulai" 
                                                            type="date" 
                                                            name="periode-mulai"
                                                            class="form-control" 
                                                            id="periode-mulai"  
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="periode-akhir" class="col-form-label">Periode Akhir:</label>
                                                            <vee-field
                                                            v-model="formData.periode_akhir" 
                                                            type="date" 
                                                            name="periode-akhir"
                                                            class="form-control" 
                                                            id="periode-akhir"  
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="condition" class="col-form-label">Kondisi:</label>
                                                            <vee-field
                                                            v-model="formData.condition" 
                                                            type="text" 
                                                            name="condition"
                                                            placeholder="Masukkan kondisi khusus program"
                                                            class="form-control" 
                                                            id="condition"  
                                                            />                        </div>
                                                        <div class="mb-3">
                                                            <label for="get-input" class="col-form-label">Dapat:</label>
                                                            <vee-field
                                                            v-model="formData.get" 
                                                            type="text" 
                                                            name="get-input"
                                                            placeholder="Masukkan parameter tambahan program"
                                                            class="form-control" 
                                                            id="get-input"  
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="daftar-produk" class="col-form-label">Pilih Produk:</label>
                                                            <vee-field
                                                            v-model="formData.code_product"
                                                            as="select" 
                                                            name="daftar-produk"
                                                            class="form-control" 
                                                            id="daftar-produk">
                                                                <option value="" disabled>Pilih Produk</option>
                                                                <option v-for="(product, index) in products" :key="index+1" :value="product.prod_number">{{ product.prod_name }}</option>
                                                            </vee-field>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="kuantitas-produk" class="col-form-label">Kuantitas:</label>
                                                            <vee-field
                                                            v-model="formData.quantity"
                                                            type="number"
                                                            min="1"
                                                            max="10000" 
                                                            value="1"
                                                            name="kuantitas-produk"
                                                            class="form-control" 
                                                            id="kuantitas-produk"
                                                            />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="nilai-diskon" class="col-form-label">Diskon:</label>
                                                            <vee-field
                                                            v-model="formData.discount"
                                                            type="number"
                                                            min="1"
                                                            max="100"
                                                            value="1"
                                                            placeholder="Masukkan nilai diskon"
                                                            name="nilai-diskon"
                                                            class="form-control" 
                                                            id="nilai-diskon"
                                                            />
                                                        </div>
                                                        <div class="d-flex ">
                                                            <div class="me-2">
                                                                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                            </div>
                                                            <div class="me-2">
                                                                <button type="submit" class="btn btn-success text-white">Simpan</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- End of Create Modal -->

                                <div class="card" id="program-detail-card">
                                    <div class="card-header">
                                      Info Program Detail
                                    </div>
                                    <div class="card-body">
                                      <h5 class="card-title">{{ programDetail.name_program }}</h5>
                                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                      <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
					  	<div class="row justify-content-center">
							<div class="col-12">
								<div class="table-responsive">
                                    <table class="table table-hover table-success table-striped table-bordered text-center mb-0">
                                        <thead>
                                            <tr>
                                            <th scope="col" class="text-nowrap">No.</th>
                                            <th scope="col" class="text-nowrap">Nama Program</th>
                                            <th scope="col" class="text-nowrap">Tipe Program</th>
                                            <th scope="col" class="text-nowrap">Keterangan</th>
                                            <th scope="col" class="text-nowrap">Tanggal Mulai</th>
                                            <th scope="col" class="text-nowrap">Tanggal Berakhir</th>
                                            <th scope="col" class="text-nowrap">Status</th>
                                            <th scope="col" class="text-nowrap">Tindakan</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="programInfo.length > 0">
                                            <tr v-for="(program, index) in programInfo" :key="index+1" :class="{'table-primary': (index % 2 === 0)}">
                                                <th scope="row">
                                                    {{ index+1 }}
                                                </th>
                                                <td>
                                                    <a 
                                                    type="button"
                                                    @click="fetchOneProgramData(program.id)"
                                                    class="text-dark text-decoration-underline" >                                                    
                                                        <span>
                                                            {{ program.name_program }}
                                                        </span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span>
                                                        {{ program.master_type_program.type }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span v-if="program.keterangan">
                                                        {{ program.keterangan }}
                                                    </span>
                                                    <span v-else>
                                                        -
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        {{ program.periode_start }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        {{ program.periode_end }}
                                                    </span>
                                                </td>
                                                <td v-if="program.active === 0">
                                                    <span class="text-danger text-nowrap">
                                                        Tidak Aktif
                                                    </span>
                                                </td>
                                                <td v-else>
                                                    <span class="text-success text-nowrap">
                                                        Aktif
                                                    </span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-danger text-white" @click="removeRecentProgram(program.id)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <span class="fw-normal">Tidak ada data program.</span>
                                        </tbody>
                                    </table>
                                </div>
							</div>
					  	</div>
					</div>
				</div>
			</div>
        </main>
    </Pages>
</template>

<script setup>
import axios from 'axios';
import * as Yup from 'yup';
import Pages from '../components/template/Pages.vue';
import { onMounted, ref, watch } from 'vue';
import swal from 'sweetalert';

const API_URL = `${import.meta.env.VITE_API_HOST}:${parseInt(import.meta.env.VITE_API_PORT)}`;

const programInfo = ref([]);
const programTypes = ref([]);
const products = ref([]);
const searchByQuery = ref('');
const programDetail = ref(null);
const programDetails = ref([]);

const formData = ref({
    id_type_program: null,
    nama_program: null,
    keterangan: null,
    periode_mulai: null,
    periode_akhir: null,
    condition: null,
    get: null,
    code_product: null,
    quantity: null,
    discount: null,
});

const validateData = Yup.object().shape({
    nama_program: Yup.string()
        .required("Nama Program tidak boleh kosong.")
        .max(255, "Nama Program tidak boleh lebih dari 255 karakter."),
    keterangan: Yup.string().nullable(),
    periode_mulai: Yup.date()
        .required("Periode Mulai tidak boleh kosong."),
    periode_akhir: Yup.date()
        .required("Periode Akhir tidak boleh kosong."),
    condition: Yup.string()
        .nullable()
        .max(255, "Kondisi input tidak boleh lebih dari 255 karakter."),
    get: Yup.string()
        .nullable()    
        .max(255, "Get input tidak boleh lebih dari 255 karakter."),
    code_product: Yup.string()
        .nullable()    
        .max(255, "Kode produk tidak boleh lebih dari 255 karakter."),
    discount: Yup.number().nullable().test(
        "maxDigitsAfterDecimal",
        "Diskon harus memiliki 2 angka dibelakang koma",
        (number) => Number.isInteger(number * (10 ** 2))
    ),
})

async function removeRecentProgram(id) {
    try {
        const response = await axios.delete(`${API_URL}/api/v1/programs/${id}`);

        console.log("Successfully remove program: ", response);

        fetchProgramData();

        setTimeout(() => {
            swal({
                title: response.data.message, 
                text: "Remove program success!",
                dangerMode: false,
                icon: "success",
            });
        }, 1000);
    } catch (error) {
        console.error("Failed to store new program: ", error);

        setTimeout(() => {
            swal({
                title: error.message,
                dangerMode: true,
                icon: "error",
            })
        }, 1000);
    }
}

async function storeNewProgram() {
    try {
        const response = await axios.post(`${API_URL}/api/v1/programs`, formData.value);

        console.log("Successfully store new program: ", response);

        fetchProgramData();

        setTimeout(() => {
            swal({
                title: response.data.message, 
                text: "Thanks for filling the form!",
                dangerMode: false,
                icon: "success",
            });
        }   , 1000);
    } catch (error) {
        console.error("Failed to store new program: ", error);

        setTimeout(() => {
            swal({
                title: error.message,
                dangerMode: true,
                icon: "error",
            })
        }   , 1000);
    }
}

async function fetchProgramData(query = '') {
    try {
        const response = await axios.get(`${API_URL}/api/v1/programs`, {
            params: {
                q: query
            },
        });

        programInfo.value = response.data.resource.data;

        // simpan data program dalam local storage.
        localStorage.setItem("programs", JSON.stringify(programInfo.value));

        console.log("Successfully fetch programs: ", response);
    } catch (error) {
        console.error("Failed to fetch programs: ", error);
    }
}

async function fetchOneProgramData(id) {
    try {
        const response = await axios.get(`${API_URL}/api/v1/programs/${id}`);

        // simpan data program dalam local storage.
        localStorage.setItem("program", JSON.stringify(programInfo.value));

        const program = response.data.resource;
        const details = response.data.resource.details;

        const programDetailsData = details.map(detail => {
            return {
                id: detail.id,
                id_program: detail.id_program,
                condition: detail.condition,
                get: detail.get,
                product: detail.product,
                qty: detail.qty,
                disc_val: detail.disc_val,
            };
        });

        programDetail.value = program;
        programDetails.value = programDetailsData;

        console.log("Successfully fetch one program: ", response);
        console.log("Successfully fetch one program with details: ", programDetailsData);
    } catch (error) {
        console.error("Failed to fetch programs: ", error);
    }
}

async function fetchProgramTypesData(query = '') {
    try {
        const response = await axios.get(`${API_URL}/api/v1/program-types`, {
            params: {
                q: query
            }
        });

        programTypes.value = response.data.resource.data;

        // simpan data tipe program dalam local storage.
        localStorage.setItem("programTypes", JSON.stringify(programTypes.value));

        console.log("Successfully fetch program types: ", response);
    } catch (error) {
        console.error("Failed to fetch program types: ", error);
    }
}

async function fetchProductsData(query = '') {
    try {
        const response = await axios.get(`${API_URL}/api/v1/products`, {
            params: {
                q: query
            },
        });

        products.value = response.data.resource.data;

        // simpan data produk dalam local storage.
        localStorage.setItem("products", JSON.stringify(products.value));

        console.log("Successfully fetch products: ", response);
    } catch (error) {
        console.error("Failed to fetch products: ", error);
    }
}

function sortByProgramNameASC() {
    fetchProgramData("ASC");
}

function sortByProgramNameDESC() {
    fetchProgramData("DESC");
}

function sortByLatestProgram() {
    fetchProgramData("latest");
}

onMounted(() => {
    fetchProgramData();
    fetchProgramTypesData();
    fetchProductsData();
})

watch(searchByQuery, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        fetchProgramData(newValue);
        fetchProgramTypesData(newValue);
        fetchProductsData(newValue);
    }
})
</script>

<style scoped>

</style>