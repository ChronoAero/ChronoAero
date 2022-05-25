<template>
	<div class="px-8 py-16 md:px-16">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Section',
});
</script>
