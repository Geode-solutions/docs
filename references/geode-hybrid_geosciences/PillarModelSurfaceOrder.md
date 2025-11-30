<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct PillarModelSurfaceOrder


## Members

```cpp
public vector sequences

```

```cpp
public vector ordered_sequence_ids

```

```cpp
public BijectiveMapping fault_id_to_sequence_before_id

```

```cpp
public vector final_order

```

```cpp
public GenericMapping sequence_id_to_surface_id

```



