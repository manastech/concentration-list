<script>
  import CheckIcon from '../assets/Check.svelte'
  import RemoveIcon from '../assets/Remove.svelte'
  import Button from './Button.svelte'
  import { createEventDispatcher, afterUpdate } from 'svelte'
  import { pluralize } from '../helpers/text';
  import { formatNumber } from '../helpers/numbers';
  import { CONCENTRATION, REPLICATES, GREY, COLOR } from '../helpers/enums'
  export let editable = false
  export let data = {}
 
  let input = REPLICATES
  let replicates, concentration, replicatesInput, concentrationInput

  const dispatch = createEventDispatcher()

  const remove = () => dispatch('remove', { data })

  const submit = () => {
    dispatch('submit', { data })
  }
  
  const edit = (e) => {
    dispatch('edit', { data })
    input = e.target.getAttribute('data-input')
  }

  afterUpdate(() => {
    if(!editable || !input) return
    switch(input) {
      case REPLICATES:
        replicatesInput.focus()
        break
      case CONCENTRATION:
        concentrationInput.focus()
        break
    }
    input = undefined
  })

  $: ({ replicates, concentration } = data)
</script>

<div class='item' class:editable>
  <Button icon={RemoveIcon} style={GREY} on:click={remove}/>
  {#if editable}
    <label>
      <input type='number' step='1' bind:value={data.replicates} bind:this={replicatesInput}/>
      replicates
    </label>
    <label>
      <input type='number' bind:value={data.concentration} bind:this={concentrationInput}/>
      copies/ml
    </label>
    <Button icon={CheckIcon} style={COLOR} on:click={submit} disabled={!concentration || !replicates}/>
  {:else}
    <span data-input={REPLICATES} on:click={edit} on:keydown={edit}>{pluralize(replicates, 'replicate', 'replicates')}</span>
    <span data-input={CONCENTRATION} on:click={edit} on:keydown={edit}>{formatNumber(concentration)} copies/ml</span>
  {/if}
</div>

<style>
  .item {
    display: grid;
    grid-template-columns: 24px 1fr auto;
    gap: 12px;
    align-items: center;
    height: 48px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 0 12px;
  }

  .item.editable {
    grid-template-columns: 24px 1fr auto 36px;
    padding: 0 6px 0 12px;
  }

  .item input {
    appearance: none;
    border: none;
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
    width: 72px;
    transition: all 0.4s;
  }

  .item input:focus {
    border-bottom: 2px #2095F2 solid;
    outline: none;
  }

  .item input::-webkit-outer-spin-button,
  .item input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .item input[type=number] {
    -moz-appearance: textfield;
  }

  .item label {
    display: flex;
    gap: 12px;
    align-items: center;
    color: #999;
  }
</style>