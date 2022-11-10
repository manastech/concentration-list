<script>
  import { SOLID } from '../helpers/enums'

  export let style = SOLID
  export let disabled = false
  export let label = ''
  export let icon = null
  export const focus = () => {
    self.focus()
  }

  let self
</script>

<button class={style} class:icon={icon && !label} disabled={disabled} on:click bind:this={self}>
  {#if icon}
    <svelte:component this={icon}></svelte:component>
  {/if}
  {#if label}
    <span>{label}</span>
  {/if}
</button>

<style>
  .solid,
  .color,
  .grey {
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    width: fit-content;
    height: 48px;
    background-color: transparent;
    text-transform: uppercase;
    transition: all 0.4s;
    cursor: pointer;
    border-radius: 4px;
    padding: 0 18px;
  }

  .solid:disabled,
  .color:disabled,
  .grey:disabled {
    pointer-events: none;
    opacity: 0.5;
    filter: saturate(0);
  }

  .solid:focus,
  .color:focus,
  .grey:focus {
    outline: none;
  }

  .solid:focus,
  .solid:hover {
    background-color: #1e88e5;
  }

  .color:focus,
  .grey:focus,
  .color:hover, 
  .grey:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .solid :global(svg),
  .color :global(svg),
  .grey :global(svg) {
    width: 24px;
    height: 24px;
  }

  .solid.icon,
  .color.icon,
  .grey.icon {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
    gap: 0;
  }

  .solid {
    background-color: #2095F2;
    color: white;
  }

  .solid :global(svg) {
    fill: white;
  }

  .color {
    color: #2095F2;
  }

  .color :global(svg) {
    fill: #2095F2;
  }

  .grey {
    color: #999;
  }

  .grey :global(svg) {
    fill: #999;
  }
</style>
