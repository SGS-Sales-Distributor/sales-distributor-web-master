<template>
	<Pages>
		<main class="container-fluid">
			<div class="row pt-4">
				<div class="col">
					<h3>Dashboard</h3>
					<p class="lead">Selamat Datang <span v-if="user" class="fw-normal">{{ user.fullname }}</span><span v-else>John Doe</span></p>
					<hr />
				</div>
			</div>
			<div class="row row-cols-1 row-cols-md-3 gx-3">
				<div class="col">
					<div class="card shadow border-1">
						<div class="card-body">
							<h5 class="card-title">Pendapatan (Bulan)</h5>
							<p class="card-text">Rp. 21.000.000,00</p>
						</div>
						<div class="card-footer">
							<div class="d-flex justify-content-between align-items-center">
								<small class="text-body-secondary">Detail Info</small>
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow border-1">
						<div class="card-body">
							<h5 class="card-title">Pendapatan (Bulan)</h5>
							<p class="card-text">Rp. 21.000.000,00</p>
						</div>
						<div class="card-footer">
							<div class="d-flex justify-content-between align-items-center">
								<small class="text-body-secondary">Detail Info</small>
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow border-1">
						<div class="card-body">
							<h5 class="card-title">Pendapatan (Bulan)</h5>
							<p class="card-text">Rp. 21.000.000,00</p>
						</div>
						<div class="card-footer">
							<div class="d-flex justify-content-between align-items-center">
								<small class="text-body-secondary">Detail Info</small>
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row row-cols-1 row-cols-md-2 mb-4 pt-3">
				<div class="col">
					<div class="row g-2">
						<div class="col">
							<div class="card shadow">
								<div class="card-body">
									<canvas id="bar-chart"></canvas>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow">
								<div class="card-body">
									<canvas id="scatter-chart"></canvas>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow">
						<div class="card-body">
							<canvas id="circle-chart"></canvas>
						</div>
					</div>
				</div>
			</div>
			<div class="row row-cols-1 pb-4">
				<div class="d-flex align-items-center h-100">
					<div class="container-fluid">
					  	<div class="row justify-content-center">
							<div class="col-12">
								<div class="card shadow border-1">
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-hover mb-0">
												<thead>
													<tr>
													<th scope="col">Parameter</th>
													<th scope="col">Product Detail Views</th>
													<th scope="col">Unique Purchases</th>
													<th scope="col">Quantity</th>
													<th scope="col">Product Revenue</th>
													<th scope="col">Avg. Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">Value</th>
														<td>18,492</td>
														<td>228</td>
														<td>350</td>
														<td>$4,787.64</td>
														<td>$13.68</td>
														</tr>
														<tr>
														<th scope="row">Percentage change</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-48.8%%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>14.0%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>46.4%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>29.6%</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-11.5%</span>
															</span>
														</td>
													</tr>
													<tr>
														<th scope="row">Average</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-17,654</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>28</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>111</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>$-1.78</span>
															</span>
														</td>
														</tr>
														<tr>
														<th scope="row">Buy-to-details</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-48.8%%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>14.0%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>46.4%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>29.6%</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-11.5%</span>
															</span>
														</td>
													</tr>
													<tr>
														<th scope="row">Sales</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-17,654</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>28</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>111</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>$-1.78</span>
															</span>
														</td>
														</tr>
														<tr>
														<th scope="row">Website traffic</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-48.8%%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>14.0%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>46.4%</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>29.6%</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-11.5%</span>
															</span>
														</td>
														</tr>
														<tr>
														<th scope="row">Clickthrough</th>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>-17,654</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>28</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>111</span>
															</span>
														</td>
														<td>
															<span class="text-success">
															<i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
															</span>
														</td>
														<td>
															<span class="text-danger">
															<i class="fas fa-caret-down me-1"></i><span>$-1.78</span>
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
						  		</div>
							</div>
					  	</div>
					</div>
				</div>
			</div>
		</main>
		<footer class="row bg-light py-4 mt-auto">
			<div class="container">
				<div class="d-flex justify-content-between">
					<div>© PT. Sinergi Global Service 2024. All rights reserved.</div>
					<div class="row g-3">
						<div class="col-auto">
							<router-link :to="{ name: 'dashboard' }" class="nav-link px-2">
								<span id="sidebar-sub-main-menu-link-text">Kebijakan Privasi</span>
							</router-link>
						</div>
						<div class="col-auto">
							<router-link :to="{ name: 'dashboard' }" class="nav-link px-2">
								<span id="sidebar-sub-main-menu-link-text">Syarat dan Ketentuan</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</Pages>
</template>

<script setup>
import { onMounted, shallowRef } from 'vue';
import Pages from '../components/template/Pages.vue';
import router from '@/router';
import Chart from 'chart.js/auto';

const user = shallowRef(null);

function fetchUserData() {
  const userData = localStorage.getItem("user");
  if (userData) {
    user.value = JSON.parse(userData);
  } else {
    redirectToLoginPage();
  }
}

function redirectToLoginPage() {
  setTimeout(() => {
    router.push({ path: '/login' });
  }, 1000);
}

function barChart() {
	const data = [
		{ year: 2010, count: 10 },
		{ year: 2011, count: 20 },
		{ year: 2012, count: 15 },
		{ year: 2013, count: 25 },
		{ year: 2014, count: 22 },
		{ year: 2015, count: 30 },
		{ year: 2016, count: 28 },
	];

	new Chart(document.getElementById("bar-chart") , {
		type: 'bar',
		data: {
			labels: data.map(row => row.year),
			datasets: [
				{
					label: 'Example by year',
					data: data.map(row => row.count),
				},
			],
		},
	});
}

function circleChart() {
	const data = {
		labels: [
			'Red',
			'Blue',
			'Yellow'
		],
		datasets: [{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)',
			'rgb(255, 205, 86)'
			],
			hoverOffset: 4
		}],
	};

	const config = {
		type: 'pie',
		data: data
	};

	new Chart(document.getElementById("circle-chart"), config);
}

function scatterChart() {
	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April'
		],
		datasets: [{
			type: 'bar',
			label: 'Bar Dataset',
			data: [10, 20, 30, 40],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.2)'
		}, {
			type: 'line',
			label: 'Line Dataset',
			data: [50, 50, 50, 50],
			fill: false,
			borderColor: 'rgb(54, 162, 235)'
		}]
	};

	const config = {
		type: 'scatter',
		data: data,
		options: {
			scales: {
				y: {
					beginAtZero: true
				},
			},
		},
	};

	new Chart(document.getElementById("scatter-chart"), config);
}

onMounted(() => {
  fetchUserData();
  barChart();
  circleChart();
  scatterChart();
});
</script>

<style scoped>
#sidebar-sub-main-menu-link-text {
    position: relative;
    color: #31363F;
    text-decoration: none;
    transition: 0.5s;
}

#sidebar-sub-main-menu-link-text:hover {
    color: #000;
}

#sidebar-sub-main-menu-link-text::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

#sidebar-sub-main-menu-link-text:hover::before {
    transform: scaleX(1);
}
</style>
