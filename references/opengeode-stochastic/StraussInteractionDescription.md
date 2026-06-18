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

# struct StraussInteractionDescription


## Members

```cpp
public basic_string interaction_name

```

```cpp
public vector set_names

```

```cpp
public double gamma

```

```cpp
public double distance

```

```cpp
public bool include_intra_set

```

```cpp
public bool include_inter_set

```

```cpp
public optional expected_nb_interactions

```



