<template>
<Pages :title="title">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <strong>Master Produk</strong>
            </div>

            <form @submit.prevent="storeNewData">
                <div class="form-group">
                    <label for="prod_number" class="form-label">Product Number <span class="form-required">*</span></label>
                    <select v-model="formData.prod_number" class="form-select" id="prod_number">
                        <option value="1">AR2513030011L</option>
                        <option value="2">AR2513030041S</option>
                        <option value="3">AR2513030052L</option>
                        <option value="4">AR2513030061S</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_barcode_number" class="form-label">Product Barcode Number <span class="form-required">*</span></label>
                    <select v-model="formData.prod_barcode_number" class="form-select" id="prod_barcode_number">
                        <option value="1">AR2513030011L</option>
                        <option value="2">AR2513030041S</option>
                        <option value="3">AR2513030052L</option>
                        <option value="4">AR2513030061S</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_sai_number" class="form-label">Product Sai Number <span class="form-required">*</span></label>
                    <select v-model="formData.prod_sai_number" class="form-select" id="prod_sai_number">
                        <option value="1">AR2513030011L</option>
                        <option value="2">AR2513030041S</option>
                        <option value="3">AR2513030052L</option>
                        <option value="4">AR2513030061S</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_universal_number" class="form-label">Product Universal Number <span class="form-required">*</span></label>
                    <select v-model="formData.prod_universal_number" class="form-select" id="prod_universal_number">
                        <option value="1">AR2513030011L</option>
                        <option value="2">AR2513030041S</option>
                        <option value="3">AR2513030052L</option>
                        <option value="4">AR2513030061S</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_name" class="form-label">Product Name <span class="form-required">*</span></label>
                    <select v-model="formData.prod_name" class="form-select" id="prod_name">
                        <option value="1">DSS WHITENING BODY WASH 975</option>
                        <option value="2">DSS B.Contour B.Wash`10 2016 12/250</option>
                        <option value="3">DSS REVIVING B.WASH 10 12/250</option>
                        <option value="4">DSS B.WASH JAVANESE ROSE 10 12/250</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_base_price" class="form-label">Product Base Price <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.prod_base_price" class="form-control" id="prod_base_price" placeholder="Masukkan Product Base Price " />
                </div>
                <div class="form-group">
                    <label for="user_fullname" class="form-label">Fullname <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.user_fullname" class="form-control" id="user_fullname" placeholder="Masukkan Nama Lengkap" />
                </div>
                <div class="form-group">
                    <label for="user_phone" class="form-label">Phone <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.user_phone" class="form-control" id="user_phone" placeholder="Masukkan No. Telp" />
                </div>
                <div class="form-group">
                    <label for="user_email" class="form-label">User Email <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.user_email" class="form-control" id="user_email" placeholder="Masukkan User Email" />
                </div>
                <div class="form-group">
                    <label for="user_name" class="form-label">Username <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.user_name" class="form-control" id="user_name" placeholder="Masukkan Username" />
                </div>
                <div class="form-group">
                    <label for="user_password" class="form-label">Password <span class="form-required">*</span></label>
                    <input type="text" v-model="formData.user_password" class="form-control" id="user_password" placeholder="Masukkan Password" />
                </div>
                <div class="form-group">
                    <label for="user_type_id" class="form-label">User Type ID<span class="form-required">*</span></label>
                    <select v-model="formData.user_type_id" class="form-select" id="user_type_id">
                        <option value="">Pilih User Type ID</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="prod_base_price" class="form-label">Product Base Price <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_base_price" class="form-control" id="prod_base_price" placeholder="Masukkan Product Base Price" />
                </div>
                <div class="form-group">
                    <label for="prod_base_price_offer" class="form-label">Product Base Price Offer <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_base_price_offer" class="form-control" id="prod_base_price_offer" placeholder="Masukkan Product Base Price Offer" />
                </div>
                <div class="form-group">
                    <label for="prod_unit_price" class="form-label">Product Unit Price <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_unit_price" class="form-control" id="prod_unit_price" placeholder="Masukkan Product Unit Price" />
                </div>
                <div class="form-group">
                    <label for="prod_promo_price" class="form-label">Product Promo Price <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_promo_price" class="form-control" id="prod_promo_price" placeholder="Masukkan Product Promo Price" />
                </div>
                <div class="form-group">
                    <label for="prod_special_offer" class="form-label">Product Special Offer <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_special_offer" class="form-control" id="prod_special_offer" placeholder="Masukkan Product Special Offer" />
                </div>
                <div class="form-group">
                    <label for="prod_special_offer_unit" class="form-label">Product Special Offer Unit <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.prod_special_offer_unit" class="form-control" id="prod_special_offer_unit" placeholder="Masukkan Product Special Offer Unit" />
                </div>
                <div class="form-group">
                    <label for="brand_id" class="form-label">Product Name <span class="form-required">*</span></label>
                    <select v-model="formData.brand_id" class="form-select" id="brand_id">
                        <option value="1">AR</option>
                        <option value="2">AR</option>
                        <option value="3">DSS REVIVING B.WASH 10 12/250</option>
                        <option value="4">DSS B.WASH JAVANESE ROSE 10 12/250</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="brand_id" class="form-label">Brand ID <span class="form-required">*</span></label>
                    <input type="text" v-model="selectedData.brand_id" class="form-control" id="brand_id" placeholder="Masukkan Brand ID" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <!-- <div class="btn" style="display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#StoreNewUserModal">
                    Tambah User
                </button>
            </div> -->

            <div class="row p-3">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                        <button class="btn btn-outline-secondary" @click="fetchDataUser()" type="button">Search</button>
                    </div>
                </div>
            </div>

            <div class="card-body" style="overflow-x: auto;">
                <table id="dtBasicExample" class="table table-bordered table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Prod Number</th>
                            <th>Prod Barcode Number</th>
                            <th>Prod Sai Number</th>
                            <th>Prod Universal Number</th>
                            <th>Prod Name</th>
                            <th>Prod Base Price</th>
                            <th>Prod Base Price Offer</th>
                            <th>Prod Special Offer Unit</th>
                            <th>Brand ID</th>
                            <th>Category ID</th>
                            <th>Category Sub ID</th>
                            <th>Prod Type ID</th>
                            <th>Function ID</th>
                            <th>Supplier ID</th>
                            <th>No Disc At All</th>
                            <th>Prod Status ID</th>
                            <th>Status Aktif</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, idx) in masterprod.data" :key="idx">
                            <!-- <td>{{ idx + 1 }}</td> -->
                            <td>{{ item.prod_number }}</td>
                            <td>{{ item.prod_barcode_number }}</td>
                            <td>{{ item.prod_sai_number }}</td>
                            <td>{{ item.prod_universal_number }}</td>
                            <td>{{ item.prod_name }}</td>
                            <td>{{ item.prod_base_price }}</td>
                            <td>{{ item.prod_base_price_offer }}</td>
                            <td>{{ item.prod_special_offer_unit }}</td>
                            <td>{{ item.brand_id }}</td>
                            <td>{{ item.category_id }}</td>
                            <td>{{ item.category_sub_id }}</td>
                            <td>{{ item.prod_type_id }}</td>
                            <td>{{ item.function_id }}</td>
                            <td>{{ item.supplier_id }}</td>
                            <td>{{ item.no_disc_at_all }}</td>
                            <td>{{ item.prod_status_id }}</td>
                            <td>{{ item.status_aktif }}</td>
                            <td>
                                <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#editModal" @click="editData(item)">Edit</button>
                                <button type="button" class="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="selectId(item.prod_number)">Delete</button>
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

<!-- <div class="modal fade" id="StoreNewUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="prod_number" class="form-label">Product Number <span class="form-required">*</span></label>
                    <Field name="prod_number" type="text" v-model="selectedData.prod_number" class="form-control" id="prod_number" placeholder="Masukkan Product Number" />
                    <ErrorMessage class="form-required" name="prod_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_barcode_number" class="form-label">Product Barcode Number <span class="form-required">*</span></label>
                    <Field name="prod_barcode_number" type="text" v-model="selectedData.prod_barcode_number" class="form-control" id="prod_barcode_number" placeholder="Masukkan Product Barcode Number" />
                    <ErrorMessage class="form-required" name="prod_barcode_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_sai_number" class="form-label">Product Sai Number <span class="form-required">*</span></label>
                    <Field name="prod_sai_number" type="text" v-model="selectedData.prod_sai_number" class="form-control" id="prod_sai_number" placeholder="Masukkan Product Sai Number" />
                    <ErrorMessage class="form-required" name="prod_sai_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_universal_number" class="form-label">Product Universal Number <span class="form-required">*</span></label>
                    <Field name="prod_universal_number" type="text" v-model="selectedData.prod_universal_number" class="form-control" id="prod_universal_number" placeholder="Masukkan Product Universal Number" />
                    <ErrorMessage class="form-required" name="prod_universal_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_name" class="form-label">Product Name <span class="form-required">*</span></label>
                    <Field name="prod_name" type="text" v-model="selectedData.prod_name" class="form-control" id="prod_name" placeholder="Masukkan Product Name" />
                    <ErrorMessage class="form-required" name="prod_name" />
                </div>
                <div class="mb-3">
                    <label for="prod_base_price" class="form-label">Product Base Price <span class="form-required">*</span></label>
                    <Field name="prod_base_price" type="text" v-model="selectedData.prod_base_price" class="form-control" id="prod_base_price" placeholder="Masukkan Product Base Price" />
                    <ErrorMessage class="form-required" name="prod_base_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_base_price_offer" class="form-label">Product Base Price Offer <span class="form-required">*</span></label>
                    <Field name="prod_base_price_offer" type="text" v-model="selectedData.prod_base_price_offer" class="form-control" id="prod_base_price_offer" placeholder="Masukkan Product Base Price Offer" />
                    <ErrorMessage class="form-required" name="prod_base_price_offer" />
                </div>
                <div class="mb-3">
                    <label for="prod_unit_price" class="form-label">Product Unit Price <span class="form-required">*</span></label>
                    <Field name="prod_unit_price" type="text" v-model="selectedData.prod_unit_price" class="form-control" id="prod_unit_price" placeholder="Masukkan Product Unit Price" />
                    <ErrorMessage class="form-required" name="prod_unit_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_promo_price" class="form-label">Product Promo Price <span class="form-required">*</span></label>
                    <Field name="prod_promo_price" type="text" v-model="selectedData.prod_promo_price" class="form-control" id="prod_promo_price" placeholder="Masukkan Product Promo Price" />
                    <ErrorMessage class="form-required" name="prod_promo_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_special_offer" class="form-label">Product Special Offer <span class="form-required">*</span></label>
                    <Field name="prod_special_offer" type="text" v-model="selectedData.prod_special_offer" class="form-control" id="prod_special_offer" placeholder="Masukkan Product Special Offer" />
                    <ErrorMessage class="form-required" name="prod_special_offer" />
                </div>
                <div class="mb-3">
                    <label for="prod_special_offer_unit" class="form-label">Product Special Offer Unit <span class="form-required">*</span></label>
                    <Field name="prod_special_offer_unit" type="text" v-model="selectedData.prod_special_offer_unit" class="form-control" id="prod_special_offer_unit" placeholder="Masukkan Product Special Offer Unit" />
                    <ErrorMessage class="form-required" name="prod_special_offer_unit" />
                </div>
                <div class="mb-3">
                    <label for="brand_id" class="form-label">Brand ID <span class="form-required">*</span></label>
                    <Field name="brand_id" type="text" v-model="selectedData.brand_id" class="form-control" id="brand_id" placeholder="Masukkan Brand ID" />
                    <ErrorMessage class="form-required" name="brand_id" />
                </div>
                <div class="mb-3">
                    <label for="category_id" class="form-label">Category ID <span class="form-required">*</span></label>
                    <Field name="category_id" type="text" v-model="selectedData.category_id" class="form-control" id="category_id" placeholder="Masukkan Category ID" />
                    <ErrorMessage class="form-required" name="category_id" />
                </div>
                <div class="mb-3">
                    <label for="category_sub_id" class="form-label">Category Sub ID <span class="form-required">*</span></label>
                    <Field name="category_sub_id" type="text" v-model="selectedData.category_sub_id" class="form-control" id="category_sub_id" placeholder="Masukkan Category Sub ID" />
                    <ErrorMessage class="form-required" name="category_sub_id" />
                </div>
                <div class="mb-3">
                    <label for="prod_type_id" class="form-label">Product Type ID <span class="form-required">*</span></label>
                    <Field name="prod_type_id" type="text" v-model="selectedData.prod_type_id" class="form-control" id="prod_type_id" placeholder="Masukkan Product Type ID" />
                    <ErrorMessage class="form-required" name="prod_type_id" />
                </div>
                <div class="mb-3">
                    <label for="function_id" class="form-label">Function ID <span class="form-required">*</span></label>
                    <Field name="function_id" type="text" v-model="selectedData.function_id" class="form-control" id="function_id" placeholder="Masukkan Function ID" />
                    <ErrorMessage class="form-required" name="function_id" />
                </div>
                <div class="mb-3">
                    <label for="supplier_id" class="form-label">Supplier ID <span class="form-required">*</span></label>
                    <Field name="supplier_id" type="text" v-model="selectedData.supplier_id" class="form-control" id="supplier_id" placeholder="Masukkan Supplier ID" />
                    <ErrorMessage class="form-required" name="supplier_id" />
                </div>
                <div class="mb-3">
                    <label for="no_disc_at_all" class="form-label">No Disc At All <span class="form-required">*</span></label>
                    <Field name="no_disc_at_all" type="text" v-model="selectedData.no_disc_at_all" class="form-control" id="no_disc_at_all" placeholder="Masukkan No Disc At All" />
                    <ErrorMessage class="form-required" name="no_disc_at_all" />
                </div>
                <div class="mb-3">
                    <label for="prod_status_id" class="form-label">Prod Status ID <span class="form-required">*</span></label>
                    <Field name="prod_status_id" type="text" v-model="selectedData.prod_status_id" class="form-control" id="prod_status_id" placeholder="Masukkan Prod Status ID" />
                    <ErrorMessage class="form-required" name="prod_status_id" />
                </div>
                <div class="mb-3">
                    <label for="status_aktif" class="form-label">Status Aktif <span class="form-required">*</span></label>
                    <Field name="status_aktif" type="text" v-model="selectedData.status_aktif" class="form-control" id="status_aktif" placeholder="Masukkan Status Aktif" />
                    <ErrorMessage class="form-required" name="status_aktif" />
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" @click="storeNewData()">Submit</button>
            </div>
        </div>
    </div>
</div> -->

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
                    <label for="prod_number" class="form-label">Product Number <span class="form-required">*</span></label>
                    <Field name="prod_number" type="text" v-model="selectedData.prod_number" class="form-control" id="prod_number" placeholder="Masukkan Product Number" />
                    <ErrorMessage class="form-required" name="prod_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_barcode_number" class="form-label">Product Barcode Number <span class="form-required">*</span></label>
                    <Field name="prod_barcode_number" type="text" v-model="selectedData.prod_barcode_number" class="form-control" id="prod_barcode_number" placeholder="Masukkan Product Barcode Number" />
                    <ErrorMessage class="form-required" name="prod_barcode_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_sai_number" class="form-label">Product Sai Number <span class="form-required">*</span></label>
                    <Field name="prod_sai_number" type="text" v-model="selectedData.prod_sai_number" class="form-control" id="prod_sai_number" placeholder="Masukkan Product Sai Number" />
                    <ErrorMessage class="form-required" name="prod_sai_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_universal_number" class="form-label">Product Universal Number <span class="form-required">*</span></label>
                    <Field name="prod_universal_number" type="text" v-model="selectedData.prod_universal_number" class="form-control" id="prod_universal_number" placeholder="Masukkan Product Universal Number" />
                    <ErrorMessage class="form-required" name="prod_universal_number" />
                </div>
                <div class="mb-3">
                    <label for="prod_name" class="form-label">Product Name <span class="form-required">*</span></label>
                    <Field name="prod_name" type="text" v-model="selectedData.prod_name" class="form-control" id="prod_name" placeholder="Masukkan Product Name" />
                    <ErrorMessage class="form-required" name="prod_name" />
                </div>
                <div class="mb-3">
                    <label for="prod_base_price" class="form-label">Product Base Price <span class="form-required">*</span></label>
                    <Field name="prod_base_price" type="text" v-model="selectedData.prod_base_price" class="form-control" id="prod_base_price" placeholder="Masukkan Product Base Price" />
                    <ErrorMessage class="form-required" name="prod_base_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_base_price_offer" class="form-label">Product Base Price Offer <span class="form-required">*</span></label>
                    <Field name="prod_base_price_offer" type="text" v-model="selectedData.prod_base_price_offer" class="form-control" id="prod_base_price_offer" placeholder="Masukkan Product Base Price Offer" />
                    <ErrorMessage class="form-required" name="prod_base_price_offer" />
                </div>
                <div class="mb-3">
                    <label for="prod_unit_price" class="form-label">Product Unit Price <span class="form-required">*</span></label>
                    <Field name="prod_unit_price" type="text" v-model="selectedData.prod_unit_price" class="form-control" id="prod_unit_price" placeholder="Masukkan Product Unit Price" />
                    <ErrorMessage class="form-required" name="prod_unit_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_promo_price" class="form-label">Product Promo Price <span class="form-required">*</span></label>
                    <Field name="prod_promo_price" type="text" v-model="selectedData.prod_promo_price" class="form-control" id="prod_promo_price" placeholder="Masukkan Product Promo Price" />
                    <ErrorMessage class="form-required" name="prod_promo_price" />
                </div>
                <div class="mb-3">
                    <label for="prod_special_offer" class="form-label">Product Special Offer <span class="form-required">*</span></label>
                    <Field name="prod_special_offer" type="text" v-model="selectedData.prod_special_offer" class="form-control" id="prod_special_offer" placeholder="Masukkan Product Special Offer" />
                    <ErrorMessage class="form-required" name="prod_special_offer" />
                </div>
                <div class="mb-3">
                    <label for="prod_special_offer_unit" class="form-label">Product Special Offer Unit <span class="form-required">*</span></label>
                    <Field name="prod_special_offer_unit" type="text" v-model="selectedData.prod_special_offer_unit" class="form-control" id="prod_special_offer_unit" placeholder="Masukkan Product Special Offer Unit" />
                    <ErrorMessage class="form-required" name="prod_special_offer_unit" />
                </div>
                <div class="mb-3">
                    <label for="brand_id" class="form-label">Brand ID <span class="form-required">*</span></label>
                    <Field name="brand_id" type="text" v-model="selectedData.brand_id" class="form-control" id="brand_id" placeholder="Masukkan Brand ID" />
                    <ErrorMessage class="form-required" name="brand_id" />
                </div>
                <div class="mb-3">
                    <label for="category_id" class="form-label">Category ID <span class="form-required">*</span></label>
                    <Field name="category_id" type="text" v-model="selectedData.category_id" class="form-control" id="category_id" placeholder="Masukkan Category ID" />
                    <ErrorMessage class="form-required" name="category_id" />
                </div>
                <div class="mb-3">
                    <label for="category_sub_id" class="form-label">Category Sub ID <span class="form-required">*</span></label>
                    <Field name="category_sub_id" type="text" v-model="selectedData.category_sub_id" class="form-control" id="category_sub_id" placeholder="Masukkan Category Sub ID" />
                    <ErrorMessage class="form-required" name="category_sub_id" />
                </div>
                <div class="mb-3">
                    <label for="prod_type_id" class="form-label">Product Type ID <span class="form-required">*</span></label>
                    <Field name="prod_type_id" type="text" v-model="selectedData.prod_type_id" class="form-control" id="prod_type_id" placeholder="Masukkan Product Type ID" />
                    <ErrorMessage class="form-required" name="prod_type_id" />
                </div>
                <div class="mb-3">
                    <label for="function_id" class="form-label">Function ID <span class="form-required">*</span></label>
                    <Field name="function_id" type="text" v-model="selectedData.function_id" class="form-control" id="function_id" placeholder="Masukkan Function ID" />
                    <ErrorMessage class="form-required" name="function_id" />
                </div>
                <div class="mb-3">
                    <label for="supplier_id" class="form-label">Supplier ID <span class="form-required">*</span></label>
                    <Field name="supplier_id" type="text" v-model="selectedData.supplier_id" class="form-control" id="supplier_id" placeholder="Masukkan Supplier ID" />
                    <ErrorMessage class="form-required" name="supplier_id" />
                </div>
                <div class="mb-3">
                    <label for="no_disc_at_all" class="form-label">No Disc At All <span class="form-required">*</span></label>
                    <Field name="no_disc_at_all" type="text" v-model="selectedData.no_disc_at_all" class="form-control" id="no_disc_at_all" placeholder="Masukkan No Disc At All" />
                    <ErrorMessage class="form-required" name="no_disc_at_all" />
                </div>
                <div class="mb-3">
                    <label for="prod_status_id" class="form-label">Prod Status ID <span class="form-required">*</span></label>
                    <Field name="prod_status_id" type="text" v-model="selectedData.prod_status_id" class="form-control" id="prod_status_id" placeholder="Masukkan Prod Status ID" />
                    <ErrorMessage class="form-required" name="prod_status_id" />
                </div>
                <div class="mb-3">
                    <label for="status_aktif" class="form-label">Status Aktif <span class="form-required">*</span></label>
                    <Field name="status_aktif" type="text" v-model="selectedData.status_aktif" class="form-control" id="status_aktif" placeholder="Masukkan Status Aktif" />
                    <ErrorMessage class="form-required" name="status_aktif" />
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
    prod_number: yup.string().required('Product Number is required'),
    prod_barcode_number: yup.string().required('Product Barcode is required'),
    prod_sai_number: yup.string().required('Product SAI Num is required'),
    prod_universal_number: yup.string().required('Product Universal Num is required'),
    prod_name: yup.string().required('Product Name is required'),
    prod_base_price: yup.string().required('Product Base Price is required'),
    prod_base_price_offer: yup.string().required('Product Base Price Offer is required'),
    prod_unit_price: yup.string().required('Product Unit Price is required'),
    prod_promo_price: yup.string().required('Product Promo Price is required'),
    prod_special_offer: yup.string().required('Product Special Offer is required'),
    prod_special_offer_unit: yup.string().required('Product Special Offer Unit required'),
    brand_id: yup.string().required('Brand ID is required'),
    category_id: yup.string().required('Category ID is required'),
    category_sub_id: yup.string().required('Category Sub ID is required'),
    prod_type_id: yup.string().required('Product Type ID is required'),
    function_id: yup.string().required('Function ID is required'),
    supplier_id: yup.string().required('Supplier ID is required'),
    no_disc_at_all: yup.string().required('No Disc At All is required'),
    prod_status_id: yup.string().required('Product Status ID is required'),
    status_aktif: yup.string().required('Status Aktif is required'),
});

export default {
    data() {
        return {
            title: 'Master Produk',
            schema,
            items: [],
            masterprod: {
                data: []
            },
            searchTerm: '',
            formData: {
                prod_special_offer: '',
                brand_id: '',
                prod_special_offer_unit: '',
                prod_sai_number: '',
                // user_id: '',
                prod_base_price: '',
                prod_barcode_number: '',
                prod_number: '',
                prod_base_price_offer: '',
                prod_universal_number: '',
                prod_promo_price: '',
                prod_unit_price: '',
                category_id: '',
                category_sub_id: '',
                prod_type_id: '',
                function_id: '',
                supplier_id: '',
                no_disc_at_all: '',
                prod_status_id: '',
                status_aktif: '',
            },
            selectedData: {
                prod_special_offer: '',
                brand_id: '',
                prod_special_offer_unit: '',
                prod_sai_number: '',
                user_id: '',
                prod_base_price: '',
                prod_barcode_number: '',
                prod_number: '',
                prod_base_price_offer: '',
                prod_universal_number: '',
                prod_promo_price: '',
                prod_unit_price: '',
                category_id: '',
                category_sub_id: '',
                prod_type_id: '',
                function_id: '',
                supplier_id: '',
                no_disc_at_all: '',
                prod_status_id: '',
                status_aktif: '',
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
                const response = await axios.get(`http://localhost:8000/sgs/product_info_do`);
                if (response) {
                    this.masterprod.data = response.data.data;
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
                console.log(this.formData);
                this.isLoading = true;
                await axios.post(`http://localhost:8000/sgs/product_info_do`, this.formData);
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
                const response = await axios.get(`http://localhost:8000/sgs/product_info_do/${data.id}`);
                this.selectedData = response.data.data;
                this.selectedId = data.id;
                console.log(this.selectedData);
            } catch (error) {
                console.log('Gagal Memuat Data', error);
            }
        },
        async updateData() {
            console.log(this.selectedData.prod_number);
            try {
                await axios.put(`http://localhost:8000/sgs/product_info_do/${this.selectedData.prod_number}`, this.selectedData);
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
            try {
                await axios.delete(`http://localhost:8000/sgs/product_info_do/${this.selectedId}`);
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
        },
        resetForm() {
            this.formData = {
                prod_special_offer: '',
                modtime: '',
                brand_id: '',
                prod_special_offer_unit: '',
                prod_sai_number: '',
                prod_name: '',
                user_id: '',
                prod_base_price: '',
                prod_barcode_number: '',
                prod_number: '',
                prod_base_price_offer: '',
                prod_universal_number: '',
                prod_promo_price: '',
                prod_unit_price: '',
            };
        },
        resetSelectedData() {
            this.selectedData = {
                prod_special_offer: '',
                modtime: '',
                brand_id: '',
                prod_special_offer_unit: '',
                prod_sai_number: '',
                prod_name: '',
                user_id: '',
                prod_base_price: '',
                prod_barcode_number: '',
                prod_number: '',
                prod_base_price_offer: '',
                prod_universal_number: '',
                prod_promo_price: '',
                prod_unit_price: '',
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
