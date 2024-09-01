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

# class SurfaceRelaxer


## Records

ElementStamp

EdgeData

PolygonData

SwapingData



## Functions

### SurfaceRelaxer

```cpp
public void SurfaceRelaxer<Model>(const Model & model, ModelModifier & modifier, const Surface<dimension> & surface, const SurfaceRelaxerOptions<dimension> & options)
```


### ~SurfaceRelaxer

```cpp
public void ~SurfaceRelaxer<Model>()
```


### relax

```cpp
public void relax()
```


### save

```cpp
public void save()
```


### is_fixed

```cpp
protected bool is_fixed(index_t vertex)
```


### model

```cpp
protected const Model & model()
```


### surface

```cpp
protected const Surface<dimension> & surface()
```


### mesh

```cpp
protected const SurfaceMesh<dimension> & mesh()
```




