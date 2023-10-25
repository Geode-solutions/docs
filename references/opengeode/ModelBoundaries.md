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

# class ModelBoundaries


# class ModelBoundaries


## Records

ModelBoundaryRangeBase

ModelBoundaryRange



## Functions

### ModelBoundaries

```cpp
public void ModelBoundaries<>(const ModelBoundaries<> & )
```


### operator=

```cpp
public ModelBoundaries<> & operator=(const ModelBoundaries<> & )
```


### ~ModelBoundaries

```cpp
public void ~ModelBoundaries<>()
```


### nb_model_boundaries

```cpp
public index_t nb_model_boundaries()
```


### model_boundary

```cpp
public const ModelBoundary<dimension> & model_boundary(const uuid & id)
```


### model_boundaries

```cpp
public ModelBoundaryRange model_boundaries()
```


### save_model_boundaries

```cpp
public void save_model_boundaries(string_view directory)
```


### ModelBoundaries

```cpp
protected void ModelBoundaries<>()
```


### ModelBoundaries

```cpp
protected void ModelBoundaries<>(ModelBoundaries<> && other)
```


### operator=

```cpp
protected ModelBoundaries<> & operator=(ModelBoundaries<> && other)
```




# class ModelBoundaries


