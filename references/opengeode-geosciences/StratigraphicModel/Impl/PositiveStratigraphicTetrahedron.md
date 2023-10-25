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

# struct PositiveStratigraphicTetrahedron


## Members

```cpp
public int indices_

```

```cpp
public OwnerTetrahedron positive_tetra_

```



## Functions

### PositiveStratigraphicTetrahedron

```cpp
public void PositiveStratigraphicTetrahedron()
```


### PositiveStratigraphicTetrahedron

```cpp
public void PositiveStratigraphicTetrahedron(const StratigraphicModel & model, const Block3D & block, index_t tetrahedron_id)
```




