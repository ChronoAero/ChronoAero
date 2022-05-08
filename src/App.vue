<template>
	<Header></Header>
	<Parallax></Parallax>
	<div class="bg-secondary p-16">
		<Row>
			<PixelArt :src="images.chrono_code" alt="Chrono and a laptop" />
			<div class="p-8">
				<Paragraph title="AboutMe()">
					<p>
						<i>
							"I truly believe that every single person has to go through
							something that absolutely destroys them so they can figure out who
							they really are."
						</i>
					</p>
					<p>
						- A sentence that quite helped me go through the current ups and
						downs.
					</p>
					<br />
					<p>
						Hi! I'm a typical high school student with interest towards
						programming, a coder under development phase.
					</p>
					<p>
						I'm someone with a rather calm and serious nature that helps me to
						be a better listener. When it comes to projects, it makes me try my
						best on delivering my work output.
					</p>
					<p>
						I might not be that really extroverted one, but I'm open to
						programming discussions. Since you reach me out this way, this means
						we should understand each other well.
					</p>
					<p>Looking forward to working together with you!</p>
				</Paragraph>
			</div>
		</Row>
	</div>
	<div class="bg-primary p-16">
		<Row>
			<div class="p-8">
				<Paragraph title="CurrentlyExperimentingWith()">
					<p>
						I like to experiment around with tools I find interesting. I've used
						them and tried to get something working.
					</p>
					<p>
						Of course, learning takes time, I can't say that I'm an expert on
						them just yet, but I'm quite sure that I have some pretty decent
						progress going on here.
					</p>
					<p>Here are some tools I'm currently experimenting with:</p>
				</Paragraph>
				<div class="bg-secondary p-2 rounded-md">
					<Row>
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
			<PixelArt
				:src="images.chrono_git"
				alt="Chrono managing version control"
			/>
		</Row>
	</div>
	<div class="bg-secondary p-16">
		<Paragraph title="Projects()">
			<p>
				While learning, I've also got some projects worked on. We perhaps can
				work together on some of them, or it can also be a consideration for you
				to put me as a contributor in your projects, which will be great!
			</p>
			<p>Here are some of them that I can showcase to you:</p>
		</Paragraph>
		<Row class="p-4 flex-wrap">
			<div v-for="cardData in cardDatas" :key="cardData.title">
				<Card
					class="bg-primary p-4 m-4 rounded-md"
					:title="cardData.title"
					:src="cardData.src"
					:alt="cardData.alt"
				></Card>
			</div>
		</Row>
	</div>
	<div class="bg-primary p-16">
		<Row>
			<PixelArt
				:src="images.chrono_contacts"
				alt="Chrono holding a letter"
			></PixelArt>
			<div>
				<Paragraph title="Contacts()">
					<p>This marks the end of this website.</p>
					<p>
						Interested to contact and interact with me further? Sure! here are
						my contacts:
					</p>
				</Paragraph>
				<div class="bg-secondary p-2 rounded-md">
					<Row>
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
		</Row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Paragraph from './components/Paragraph.vue';
import Parallax from './components/Parallax.vue';
import Row from './components/Row.vue';
import PixelArt from './components/PixelArt.vue';
import Logo from './components/Logo.vue';
import Card from './components/Card.vue';
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
		Row,
		PixelArt,
		Logo,
		Card,
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
