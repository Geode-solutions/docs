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

# struct GmshElementID


## Members

```cpp
public NamedType type

```

```cpp
public geode::index_t id

```



## Functions

### GmshElementID

```cpp
public void GmshElementID()
```


### GmshElementID

```cpp
public void GmshElementID(NamedType gmsh_type, geode::index_t gmsh_id)
```


### operator==

```cpp
public bool operator==(const GmshElementID & other)
```




