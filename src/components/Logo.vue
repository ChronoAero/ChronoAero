<template>
	<img
		:src="src"
		:alt="alt"
		class="h-16 w-16 text-subcontrast p-2 drop-shadow cursor-pointer"
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
