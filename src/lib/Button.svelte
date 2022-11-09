<script>
</script>

<div class='item' class:editable>
  <button class='remove' on:click={remove}><RemoveIcon/></button>
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

  .item button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .item button:disabled {
    pointer-events: none;
    opacity: 0.5;
    filter: saturate(0);
  }

  .item input {
    appearance: none;
    border: none;
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
    width: 48px;
  }

  .item input:focus {
    border-bottom: 2px black solid;
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

  .remove {
    width: 24px;
    height: 24px;
  }

  .remove :global(svg) {
    fill: #999;
    transition: all 0.4s;
  }

  .remove:hover :global(svg) {
    fill: #666;
  }

  .submit {
    width: 36px;
    height: 36px;
    transition: all 0.4s;
  }

  .submit:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .submit :global(svg) {
    fill: #2095F2;
  }

</style>
