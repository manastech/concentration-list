<script>
  import Button from './Button.svelte';
  import ListItem from './ListItem.svelte'
  import AddIcon from '../assets/Add.svelte'
  import { COLOR } from '../helpers/enums';
  import { tick } from 'svelte';

  export let items = []
  let newItem, currentItem, addButton
 
  const handleAdd = () => {
    newItem = {}
    currentItem = newItem
  }

  const edit= (item) => {
    currentItem = item
    newItem = undefined
  }

  const handleRemove = e => {
    items = items.filter(item => item !== e.detail.data)
    if(newItem === e.detail.data) newItem = undefined
  }

  const handleSubmit = async () => {
    items = [...items, ...newItem? [newItem] : []]
    currentItem = undefined
    if(newItem) {
      newItem = undefined
      await tick()
      addButton.focus()
    }
  }
</script>

<div class='list'>
  {#each items as item }
    <ListItem data={item} on:remove={handleRemove} on:edit={() => edit(item)} editable={item === currentItem} on:submit={handleSubmit}/>
  {/each}
  {#if newItem}
    <ListItem data={newItem} editable on:remove={handleRemove} on:submit={handleSubmit}/>
  {:else}
    <Button on:click={handleAdd} style={COLOR} icon={AddIcon} label={'Add batch'} bind:this={addButton}/>
  {/if}
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 480px;
  }
</style>
