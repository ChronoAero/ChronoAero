<template>
	<img
		:src="src"
		:alt="alt"
		class="text-subcontrast p-8 pixel h-80 min-w-[20rem] max-w-[20rem] sm:h-96 sm:min-w-[24rem] sm:max-w-[24rem] an-entrance"
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
