<template>
	<img
		:src="src"
		:alt="alt"
		class="text-subcontrast p-8 pixel h-80 min-w-80 max-w-80 sm:h-96 sm:min-w-96 sm:max-w-96 an-entrance"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'PixelArt',
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
