<template>
	<footer class="bg-gray-900 py-8 shadow text-white">
		<container> Logotype &copy; {{ currentYear }} </container>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear(),
		}
	},
}
</script>
