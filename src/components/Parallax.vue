<template>
	<Section class="h-144 grid place-items-center bg-primary">
		<div class="text-center">
			<p class="text-contrast text-4xl md:text-6xl font-bold">
				&lt;ChronoAero/&gt;
			</p>
			<p class="text-contrast text-2xl">Indev Coder</p>
		</div>
	</Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Section from './Section.vue';

export default defineComponent({
	components: {
		Section,
	},
	name: 'Parallax',
});
</script>
