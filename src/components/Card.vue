<template>
	<div class="shadow-xl w-64 cursor-pointer">
		<img :src="src" :alt="alt" class="pixel h-56 w-56 p-4" />
		<div class="text-subcontrast text-lg text-center">{{ title }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PixelArt from './PixelArt.vue';

export default defineComponent({
	name: 'Card',
	components: {
		PixelArt,
	},
	props: {
		title: {
			type: String,
		},
		src: {
			type: String,
		},
		alt: {
			type: String,
		},
	},
	setup() {},
});
</script>
