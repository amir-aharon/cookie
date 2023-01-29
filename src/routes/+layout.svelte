<!--  src/routes/$layout.svelte -->
<script>
	import SideBar from '../Components/SideBar/SideBar.svelte';
  import '../tailwind.css'
</script>

<div class="app p-4 pl-20 bg-slate-100 w-screen h-screen">
  <slot />
</div>
