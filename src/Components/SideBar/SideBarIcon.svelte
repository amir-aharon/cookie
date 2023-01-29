<script lang="ts">
	import { goto } from "$app/navigation";
  import 'material-icons/iconfont/material-icons.css'

  // get all props
  export let sendsTo : string;
  export let icon : string;
  export let style : string;
  export let description : string;
  export let page : string;

  // checks if the current page is the icon's page
  const isSelected : boolean = (page == "home" && sendsTo == "") || page == sendsTo;

</script>

<button class="sidebar-icon group

  material-icons{
  // match icon style
  style == "normal" ? "" : "-" + style}

  {
  // marks current page's icon
  isSelected ? "sidebar-icon-selected" : ""}"

  on:click={() => goto("/" + sendsTo)}>

  {icon}

  <span class="sidebar-text group-hover:scale-100">
    {description}
  </span>

  <span class="sidebar-mark group-hover:scale-100
    {
    // marks current page's icon
    isSelected ? "sidebar-mark-selected" : ""}"/>

</button>
