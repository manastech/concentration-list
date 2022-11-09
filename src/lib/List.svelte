<script>
  import ListItem from './ListItem.svelte'

  export let items = []
  let newItem, currentItem
 
  const handleAdd = () => {
    newItem = {}
    currentItem = newItem
  }

  const edit= (item) => {
    console.log(item)
    currentItem = item
    newItem = undefined
  }

  const handleRemove = e => {
    items = items.filter(item => item !== e.detail.data)
    if(newItem === e.detail.data) newItem = undefined
  }

  const handleSubmit = () => {
    items = [...items, ...newItem? [newItem] : []]
    currentItem = undefined
    newItem = undefined
  }
</script>

<div class='list'>
  {#each items as item }
    <ListItem data={item} on:remove={handleRemove} on:edit={() => edit(item)} editable={item === currentItem} on:submit={handleSubmit}/>
  {/each}
  {#if newItem}
    <ListItem data={newItem} editable on:remove={handleRemove} on:submit={handleSubmit}/>
  {:else}
    <button on:click={handleAdd} class='add'>Add batch</button>
  {/if}
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 480px;
  }

  .add {
    appearance: none;
  }
</style>
