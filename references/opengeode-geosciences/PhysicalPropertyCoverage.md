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

# struct PhysicalPropertyCoverage


## Members

```cpp
public PHYSICAL_PROPERTY_NAME property

```

```cpp
public bool is_registered

```

```cpp
public flat_hash_map components

```

```cpp
public optional value_bounds

```



## Functions

### PhysicalPropertyCoverage

```cpp
public void PhysicalPropertyCoverage(PHYSICAL_PROPERTY_NAME property_in)
```


### carries

```cpp
public bool carries(const uuid & component)
```


 The component has a readable attribute with at least one value

### covers

```cpp
public bool covers(const uuid & component)
```


 The component carries a value on every element

### is_carried

```cpp
public bool is_carried()
```


 At least one component carries the property



