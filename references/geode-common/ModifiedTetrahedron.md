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

# struct ModifiedTetrahedron


## Members

```cpp
public Tetrahedron new_tetrahedron

```

```cpp
public index_t old_index

```



## Functions

### ModifiedTetrahedron

```cpp
public void ModifiedTetrahedron(Tetrahedron && new_tetrahedron_in, index_t old_index_in)
```


### ModifiedTetrahedron

```cpp
public void ModifiedTetrahedron(const Tetrahedron & new_tetrahedron_in, index_t old_index_in)
```


### ModifiedTetrahedron

```cpp
public void ModifiedTetrahedron(const ModifiedTetrahedron & other)
```


### ModifiedTetrahedron

```cpp
public void ModifiedTetrahedron(ModifiedTetrahedron && other)
```


### operator=

```cpp
public ModifiedTetrahedron & operator=(const ModifiedTetrahedron & other)
```


### operator=

```cpp
public ModifiedTetrahedron & operator=(ModifiedTetrahedron && other)
```




