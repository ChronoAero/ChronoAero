<template>
	<div>
		<div class="h-12 bg-secondary flex items-center justify-end p-4">
			<img
				:src="images.profile"
				alt="Profile"
				class="h-8 border-md pixel text-contrast"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import profile from '../assets/profile.png';
export default defineComponent({
	name: 'Header',
	setup() {
		const images = { profile };
		return {
			images,
		};
	},
});
</script>
