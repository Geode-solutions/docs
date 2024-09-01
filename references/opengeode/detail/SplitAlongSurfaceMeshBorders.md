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

# class SplitAlongSurfaceMeshBorders


## Functions

### SplitAlongSurfaceMeshBorders

```cpp
public void SplitAlongSurfaceMeshBorders<Model>(Model & model)
```


### SplitAlongSurfaceMeshBorders

```cpp
public void SplitAlongSurfaceMeshBorders<Model>(const Model & model, typename Model::Builder & builder)
```


### ~SplitAlongSurfaceMeshBorders

```cpp
public void ~SplitAlongSurfaceMeshBorders<Model>()
```


### split_all_surfaces

```cpp
public vector split_all_surfaces()
```


### split_surface

```cpp
public vector split_surface(const Surface<Model::dim> & surface)
```




# class SplitAlongSurfaceMeshBorders


# class SplitAlongSurfaceMeshBorders


