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

# class BackgroundBRep


```cpp
Inherits from BRep
```



## Functions

### BackgroundBRep

```cpp
public void BackgroundBRep(BRep && brep)
```


### background_solid

```cpp
public const BackgroundSolid & background_solid(const Block3D & block)
```


### release_brep

```cpp
public BRep release_brep()
```


### clone

```cpp
public BackgroundBRep clone()
```


### clone_brep

```cpp
public BRep clone_brep()
```


### macro_vertices

```cpp
public const std::vector<MeshVertex> & macro_vertices(const Block3D & block, index_t vertex_id)
```




