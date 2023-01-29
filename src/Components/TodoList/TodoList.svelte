<script lang="ts">
	import ListItem from "./ListItem.svelte";

    let x : number = 5;

</script>

<div class=" border-2 border-gray-900 w-min h-min">
    {#each Array(x) as _, i}
        <ListItem />
        <div class="
        bg-gray-900 opacity-90 w-80 h-[.1rem]"/>
    {/each}
</div>
