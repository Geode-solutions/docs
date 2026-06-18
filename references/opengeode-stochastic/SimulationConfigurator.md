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

# struct SimulationConfigurator


## Members

```cpp
public index_t realizations

```

```cpp
public index_t metropolis_hasting_steps

```

```cpp
public index_t burn_in_steps

```

```cpp
public optional printer

```



## Functions

### string

```cpp
public std::string string()
```




