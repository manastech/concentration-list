<script>
  import List from './lib/List.svelte'
  
  let items = [
    {
      replicates: 12,
      concentration: 75e+6,
    },
    {
      replicates: 2,
      concentration: 5015,
    },
    {
      replicates: 4,
      concentration: 25.4e+2,
    }
  ]
</script>

<List {items}/>
