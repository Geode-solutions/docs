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

### create_model_boundary

```cpp
protected const uuid & create_model_boundary()
```


### ModelBoundariesBuilder

```cpp
protected void ModelBoundariesBuilder<dimension>(ModelBoundaries<dimension> & boundaries)
```


### load_model_boundaries

```cpp
public void load_model_boundaries(std::string_view directory)
```


### set_model_boundary_name

```cpp
public void set_model_boundary_name(const uuid & id, std::string_view name)
```


### set_model_boundary_active

```cpp
public void set_model_boundary_active(const uuid & id, bool active)
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


