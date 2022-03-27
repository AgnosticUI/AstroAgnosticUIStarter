<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Alert, Button } from 'agnostic-svelte';

  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<Alert type="info"><span class="mie12">🙌</span>AgnosticUI — Svelte</Alert>
<div id="svelte" class="counter">
  <Button mode="secondary" isRounded on:click={subtract}>-</Button>
  <pre>{ count }</pre>
  <Button mode="primary" isRounded on:click={add}>+</Button>
</div>
