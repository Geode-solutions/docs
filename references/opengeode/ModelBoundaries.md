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

ModelBoundaryRange

ModelBoundaryRangeBase



## Functions

### ~ModelBoundaries

```cpp
public void ~ModelBoundaries<value-parameter-0-0>()
```


### nb_model_boundaries

```cpp
public index_t nb_model_boundaries()
```


### nb_active_model_boundaries

```cpp
public index_t nb_active_model_boundaries()
```


### ModelBoundaries

```cpp
protected void ModelBoundaries<value-parameter-0-0>()
```


### ModelBoundaries

```cpp
protected void ModelBoundaries<value-parameter-0-0>(ModelBoundaries<dimension> && other)
```


### ModelBoundaries

```cpp
public void ModelBoundaries<value-parameter-0-0>(const ModelBoundaries<dimension> & )
```


### operator=

```cpp
public ModelBoundaries<dimension> & operator=(const ModelBoundaries<dimension> & )
```


### model_boundary

```cpp
public const ModelBoundary<dimension> & model_boundary(const uuid & id)
```


### has_model_boundary

```cpp
public bool has_model_boundary(const uuid & id)
```


### model_boundaries

```cpp
public ModelBoundaryRange model_boundaries()
```


### active_model_boundaries

```cpp
public ModelBoundaryRange active_model_boundaries()
```


### save_model_boundaries

```cpp
public void save_model_boundaries(std::string_view directory)
```


### operator=

```cpp
protected ModelBoundaries<dimension> & operator=(ModelBoundaries<dimension> && other)
```


### create_model_boundary

```cpp
public const uuid & create_model_boundary(ModelBoundariesBuilderKey key)
```


### create_model_boundary

```cpp
public void create_model_boundary(uuid model_boundary_id, ModelBoundariesBuilderKey key)
```


### delete_model_boundary

```cpp
public void delete_model_boundary(const ModelBoundary<dimension> & boundary, ModelBoundariesBuilderKey key)
```


### load_model_boundaries

```cpp
public void load_model_boundaries(std::string_view directory, ModelBoundariesBuilderKey key)
```


### modifiable_model_boundaries

```cpp
public ModifiableModelBoundaryRange modifiable_model_boundaries(ModelBoundariesBuilderKey key)
```


### modifiable_model_boundary

```cpp
public ModelBoundary<dimension> & modifiable_model_boundary(const uuid & id, ModelBoundariesBuilderKey key)
```


### components

```cpp
public ModelBoundaryRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const ModelBoundary<dimension> & component(const uuid & id)
```




# class ModelBoundaries


