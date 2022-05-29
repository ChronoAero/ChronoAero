<template>
	<div ref="target">
		<div><slot v-if="active"></slot></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
	setup() {
		const target = ref();
		const active = ref(false);
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) active.value = true;
			},
			{
				threshold: 0.5,
			}
		);
		onMounted(() => {
			observer.observe(target.value);
		});
		return {
			active,
			target,
		};
	},
});
</script>
