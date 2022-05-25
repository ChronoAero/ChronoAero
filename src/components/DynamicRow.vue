<template>
	<Row class="flex-col sm:flex-row">
		<slot></slot>
	</Row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Row from './Row.vue';
export default defineComponent({
	name: 'DynamicRow',
	components: {
		Row,
	},
	props: {
		enableCollify: {
			type: Boolean,
		},
	},
});
</script>
