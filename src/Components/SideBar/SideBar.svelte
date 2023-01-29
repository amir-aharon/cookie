<script lang="ts">
      import SideBarIcon from "./SideBarIcon.svelte";
	import type { IconInfo } from "./IconInfo";

      export let page : string;

      const homeIcon : IconInfo = {
		sendsTo: '',
		icon: "home",
            style: "round",
		description: "🏠Home Page"
	}
      const todoIcon : IconInfo = {
		sendsTo: 'todo',
		icon: "checklist",
            style: "round",
		description: "✅To Do List"
	}
      const dogsIcon : IconInfo = {
		sendsTo: 'dogs',
		icon: "pets",
            style: "round",
		description: "🐶Dogs API"
	}
</script>

<div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900
      text-white shadow-lg items-center">
      <SideBarIcon {page} {...homeIcon}/>
      <SideBarIcon {page} {...todoIcon}/>
      <SideBarIcon {page} {...dogsIcon}/>
</div>
