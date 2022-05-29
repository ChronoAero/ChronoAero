<template>
	<p ref="target">{{ frame }}</p>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
export default {
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	setup(props: any) {
		const target = ref();
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting)
					setTimeout(() => {
						tweener();
					}, 100);
			},
			{
				threshold: 0.5,
			}
		);
		onMounted(() => {
			observer.observe(target.value);
		});

		let randomness = '';
		const divisor = 3;
		const divOfLengths = props.text.length / divisor;
		for (let i = 0; i < divOfLengths; i++) {
			randomness += String.fromCharCode(12449 + Math.floor(Math.random() * 89));
		}

		const frame = ref(randomness);

		let i = 0;
		const tweener = () => {
			if (i < randomness.length + 1) {
				setTimeout(() => {
					frame.value =
						props.text.substring(0, divisor * i + 1) +
						randomness.substring(i + 1);
					i++;
					tweener();
				}, 1500 / (randomness.length + 1));
			}
		};

		return {
			frame,
			target,
		};
	},
};
</script>
