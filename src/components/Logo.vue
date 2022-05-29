<template>
	<img
		:src="src"
		:alt="alt"
		class="h-16 w-16 p-2 cursor-pointer an-hover:expand"
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
