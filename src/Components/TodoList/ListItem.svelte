<script lang="ts">

    export let id : string = "101"

</script>

<div class=" flex flex-row items-center justify-start
 p-2 bg-yellow-100 w-80 h-8">

    <input
    type="checkbox"
    id="checkbox-{id}"
    class="peer relative cursor-pointer h-4 w-4 shrink-0 appearance-none
    rounded-sm border-2 border-gray-900 after:absolute after:left-0 after:top-0
    after:h-full after:w-full  after:bg-[length:40px] after:bg-center
    after:bg-no-repeat after:content-[''] checked:bg-gray-900
    hover:border-gray-900 focus:outline-none hover:checked:bg-gray-900
     hover:bg-gray-900
     hover:bg-opacity-20"/>

     <input type="text" id="textfield-{id}"
       class="w-full cursor-pointer font-semibold
       text-gray-900 peer-checked:line-through
       font-mono text-sm ml-2 border-0 bg-yellow-100
        focus:outline-none cursor-text"/>


</div>

