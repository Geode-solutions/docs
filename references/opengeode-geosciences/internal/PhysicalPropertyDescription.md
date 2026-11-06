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

# struct PhysicalPropertyDescription


## Members

```cpp
public PHYSICAL_PROPERTY_NAME property

```

```cpp
public basic_string_view name

```

```cpp
public SIMULATION_ELEMENT_TYPE element_type

```

```cpp
public PROPERTY_VALUE_TYPES value_types

```

```cpp
public ValidRange valid_range

```

```cpp
public PROPERTY_READER reader

```



