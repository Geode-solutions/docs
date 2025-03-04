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

# struct SolidEdge


## Members

```cpp
public PolyhedronFacetEdge edge

```

```cpp
public array vertices

```



## Functions

### SolidEdge

```cpp
public void SolidEdge(const geode::Block3D & block, PolyhedronFacetEdge edge_in)
```


### operator==

```cpp
public bool operator==(const SolidEdge & other)
```


### string

```cpp
public basic_string string()
```




