<template>
	<div>
		<TweenText class="text-contrast font-bold text-4xl" :text="title" />
		<br />
		<p class="text-subcontrast text-md font-sans p-child">
			<slot></slot>
			<br />
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TweenText from './CypherText.vue';

export default defineComponent({
	components: {
		TweenText,
	},
	name: 'Paragraph',
	props: {
		title: {
			type: String,
		},
	},
});
</script>
