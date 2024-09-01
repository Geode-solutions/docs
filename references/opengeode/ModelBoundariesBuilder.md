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

# class ModelBoundariesBuilder


## Functions

### load_model_boundaries

```cpp
public void load_model_boundaries(basic_string_view directory)
```


### set_model_boundary_name

```cpp
public void set_model_boundary_name(const uuid & id, basic_string_view name)
```


### ModelBoundariesBuilder

```cpp
protected void ModelBoundariesBuilder<dimension>(ModelBoundaries<dimension> & boundaries)
```


### create_model_boundary

```cpp
protected const uuid & create_model_boundary()
```


### create_model_boundary

```cpp
protected void create_model_boundary(uuid model_boundary_id)
```


### delete_model_boundary

```cpp
protected void delete_model_boundary(const ModelBoundary<dimension> & boundary)
```




# class ModelBoundariesBuilder


# class ModelBoundariesBuilder


