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

# struct BackgroundEdgeVertices


## Members

```cpp
public array mesh_vertices

```

```cpp
public array background_vertices

```



## Functions

### BackgroundEdgeVertices

```cpp
public void BackgroundEdgeVertices()
```


### update_vertices

```cpp
public void update_vertices(const VerticesModifier & modifier)
```




