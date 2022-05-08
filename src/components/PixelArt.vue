<template>
	<img :src="src" :alt="alt" class="text-subcontrast p-8 pixel h-96" />
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
