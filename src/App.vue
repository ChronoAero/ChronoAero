<template>
	<Header></Header>
	<Parallax></Parallax>
	<Section class="bg-secondary">
		<DynamicRow>
			<AnimationContainer>
				<PixelArt :src="images.chrono_code" alt="Chrono and a laptop" />
			</AnimationContainer>

			<Paragraph title="AboutMe()">
				<TweenText
					class="italic"
					text='"I truly believe that every single person has to go through
						something that absolutely destroys them so they can figure out who
						they really are."'
				/>
				<TweenText
					text="- A sentence that quite helped me go through the current ups and
					downs."
				/>
				<br />
				<TweenText
					text="Hi! I'm a typical high school student with interest towards
					programming, a coder under development phase."
				/>
				<TweenText
					text="I'm someone with a rather calm and serious nature that helps me to be
					a better listener. When it comes to projects, it makes me try my best
					on delivering my work output."
				/>
				<TweenText
					text="I might not be that really extroverted one, but I'm open to
					programming discussions. Since you reach me out this way, this means
					we should understand each other well."
				/>
				<TweenText text="Looking forward to working together with you!" />
			</Paragraph>
		</DynamicRow>
	</Section>
	<Section class="bg-primary">
		<DynamicRow class="sm:flex-row-reverse">
			<AnimationContainer>
				<PixelArt
					:src="images.chrono_git"
					alt="Chrono managing version control"
				/>
			</AnimationContainer>
			<div>
				<Paragraph title="Experiments()">
					<TweenText
						text="I like to experiment around with tools I find interesting. I've used
						them and tried to get something working."
					/>
					<TweenText
						text="Of course, learning takes time, I can't say that I'm an expert on
						them just yet, but I'm quite sure that I have some pretty decent
						progress going on here."
					/>
					<TweenText
						text="Here are some tools I'm currently experimenting with:"
					/>
				</Paragraph>
				<div class="bg-secondary p-2 rounded-md">
					<Row class="flex-wrap">
						<Logo
							:src="images.vue"
							alt="Vue"
							@click="Redirect('https://vuejs.org')"
						/>
						<Logo
							:src="images.vite"
							alt="Vite"
							@click="Redirect('https://vitejs.dev')"
						/>
						<Logo
							:src="images.typescript"
							alt="TypeScript"
							@click="Redirect('https://www.typescriptlang.org')"
						/>
						<Logo
							:src="images.windicss"
							alt="WindiCSS"
							@click="Redirect('https://windicss.org')"
						/>
						<Logo
							:src="images.unity"
							alt="Unity"
							@click="Redirect('https://unity3d.com')"
						/>
					</Row>
				</div>
			</div>
		</DynamicRow>
	</Section>
	<Section class="bg-secondary">
		<Paragraph title="Projects()">
			<TweenText
				text="
				While learning, I've also got some projects worked on. We perhaps can
				work together on some of them, or it can also be a consideration for you
				to put me as a contributor in your projects, which will be great!
			"
			/>
			<TweenText text="Here are some of them that I can showcase to you:" />
		</Paragraph>
		<DynamicRow class="flex-wrap">
			<div v-for="cardData in cardDatas" :key="cardData.title">
				<Card
					class="bg-primary p-4 m-4 rounded-md"
					:title="cardData.title"
					:src="cardData.src"
					:alt="cardData.alt"
				></Card>
			</div>
		</DynamicRow>
	</Section>
	<Section class="bg-primary">
		<DynamicRow>
			<AnimationContainer>
				<PixelArt
					:src="images.chrono_contacts"
					alt="Chrono holding a letter"
				></PixelArt>
			</AnimationContainer>
			<div>
				<Paragraph title="Contacts()">
					<TweenText text="This marks the end of this introduction." />
					<TweenText
						text="
						Interested to contact and interact with me further? Sure! here are
						my contacts:"
					/>
				</Paragraph>
				<div class="bg-secondary p-2 rounded-md">
					<Row class="flex-wrap">
						<Logo
							:src="images.discord"
							alt="Discord"
							@click="
								Redirect('https://discordapp.com/users/729958306990260275')
							"
						/>
						<Logo
							:src="images.github"
							alt="Github"
							@click="Redirect('https://github.com/ChronoAero/ChronoAero')"
						/>
					</Row>
				</div>
			</div>
		</DynamicRow>
	</Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Paragraph from './components/Paragraph.vue';
import Parallax from './components/Parallax.vue';
import Row from './components/Row.vue';
import DynamicRow from './components/DynamicRow.vue';
import PixelArt from './components/PixelArt.vue';
import TweenText from './components/CypherText.vue';
import AnimationContainer from './components/AnimationContainer.vue';
import Logo from './components/Logo.vue';
import Card from './components/Card.vue';
import Section from './components/Section.vue';
import chrono_code from './assets/chrono_code.png';
import chrono_git from './assets/chrono_git.png';
import chrono_contacts from './assets/chrono_contacts.png';
import chrono_packages from './assets/chrono_packages.png';
import vue from './assets/vuejs-original.svg';
import vite from './assets/vite.svg';
import typescript from './assets/typescript.png';
import windicss from './assets/windicss.svg';
import unity from './assets/unity.png';
import discord from './assets/discord.svg';
import github from './assets/github.png';

export default defineComponent({
	name: 'App',
	components: {
		Header,
		Paragraph,
		Parallax,
		DynamicRow,
		Row,
		PixelArt,
		Logo,
		Card,
		Section,
		TweenText,
		AnimationContainer,
	},
	setup() {
		const Redirect = (url: string) => {
			location.href = url;
		};

		interface CardData {
			title: string;
			src: string;
			alt: string;
		}

		const cardDatas: CardData[] = [
			{
				title: 'Uh oh... this part is under construction',
				src: chrono_packages,
				alt: 'test',
			},
		];

		return {
			images: {
				chrono_code,
				chrono_git,
				chrono_contacts,
				vue,
				vite,
				windicss,
				typescript,
				unity,
				discord,
				github,
			},
			Redirect,
			cardDatas,
		};
	},
});
</script>

<style scoped>
p {
	@apply py-1;
}
</style>
