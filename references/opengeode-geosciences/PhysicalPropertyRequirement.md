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

# struct PhysicalPropertyRequirement


## Members

```cpp
public PHYSICAL_PROPERTY_NAME property

```

```cpp
public InlinedVector value_types

```

```cpp
public basic_string required_by

```

```cpp
public bool value_on_every_element

```

```cpp
public bool merged

```



## Functions

### PhysicalPropertyRequirement

```cpp
public void PhysicalPropertyRequirement(PHYSICAL_PROPERTY_NAME property_in)
```


 Value types simulators accept for this property



