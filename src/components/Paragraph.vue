<template>
	<div>
		<p class="text-contrast font-bold text-4xl">
			{{ title }}
		</p>
		<br />
		<p class="text-subcontrast text-md font-sans p-child">
			<slot></slot>
			<br />
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Paragraph',
	props: {
		title: {
			type: String,
		},
	},
});
</script>
