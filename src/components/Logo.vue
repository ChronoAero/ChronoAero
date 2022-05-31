<template>
	<img
		:src="src"
		:alt="alt"
		class="h-16 w-16 p-2 cursor-pointer hover:scale-[1.05] hover:bg-primary rounded-md transition-all"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		src: {
			type: String,
		},
		alt: {
			type: String,
		},
	},
});
</script>
