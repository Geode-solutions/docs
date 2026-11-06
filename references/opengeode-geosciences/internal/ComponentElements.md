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

# struct ComponentElements


## Members

```cpp
public const geode::Component3D & component

```

```cpp
public const geode::AttributeManager & elements

```

```cpp
public const geode::AttributeManager & vertices

```

```cpp
public geode::index_t nb_elements

```

```cpp
public SIMULATION_ELEMENT_TYPE element_type

```



