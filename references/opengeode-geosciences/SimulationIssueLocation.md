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

# struct SimulationIssueLocation


 Model component, and some of its mesh elements, involved in an issue



## Members

```cpp
public ComponentID component

```

```cpp
public basic_string name

```

```cpp
public SIMULATION_ELEMENT_TYPE element_type

```

```cpp
public vector elements

```

```cpp
public bool all_elements

```

```cpp
public index_t nb_elements

```

```cpp
public basic_string detail

```



## Functions

### string

```cpp
public std::string string()
```


 Component type, name (if any) and elements, on one line



