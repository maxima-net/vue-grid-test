<style>
	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	#app {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.header {
		margin-top: 8px;
		margin-bottom: 8px;
	}
	.grid-container {
		height: 100%;
	}
</style>

<template>
	<div id="app">
		<!--<img alt="Vue logo" src="./assets/logo.png">-->
		<h1 class="header">Apptbl_1g serg test {{ 2+2 }}</h1>


		<div class="grid-container">
			<!-- The AG Grid component -->

			<ag-grid-vue 
				style="height: 100%" 
				:class="themeClass" 
				:columnDefs="colDefs" 
				:rowData="rowData"
				@cell-clicked ="onCellClicked">
			</ag-grid-vue>
		</div>

	</div>
</template>

<script>
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridVue } from 'ag-grid-vue3';
//app.component("ag-grid-vue",AgGridVue );

export default {
	name: "App",
	components: {
		AgGridVue
	},
	setup() {
		const rowData = ref([
			{ id: 1, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 2, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 3, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 4, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 5, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 6, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 7, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 8, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 9, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 10, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 11, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 12, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 13, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 14, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 15, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 16, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 17, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 18, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
			{ id: 19, mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
			{ id: 20, mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
			{ id: 21, mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
		]);

		const colDefs = ref([
			{ field: "id" },
			{ field: "mission" },
			{ field: "company" },
			{ field: "location" },
			{ field: "date" },
			{ field: "price" },
			{ field: "successful" },
			{ field: "rocket" }
		]);

		return {
			rowData,
			colDefs,
			themeClass: "ag-theme-quartz",
		};
	},
	methods: {
		onCellClicked(event) {
			alert(`data row id: ${event.data.id}, column: "${event.column.colDef.field}", value: "${event.value}" `);
		}
	},
};
</script>