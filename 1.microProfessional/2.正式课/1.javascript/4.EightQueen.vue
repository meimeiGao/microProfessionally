<template>
	<div>
		<div class="title">八皇后问题</div>
		<div class="grid">
			<div class="row" v-for="(grid,rIndex) in grids" :key="rIndex">
				<div class="cell" v-for="(cell,cIndex) in grid" :key="cIndex"></div>
				<div v-if="cell.ok"></div>
			</div>
		</div>
	</div>
</template>
<script>
	const grids = new Array(8).fill(1).map((row,rIndex)=>{
		return new Array(8).fill(1).map((cell,cIndex)=>{
			return {
				key:`key-${rIndex*8+cIndex}`,
				ok:false
			}
		})
	})
	console.log(grids)
	export default {
		data() {
			return {
				grids
			}
		}
	}
</script>

<style>

</style>
