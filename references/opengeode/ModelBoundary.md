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

# class ModelBoundary


```cpp
Inherits from Component<3U>
```



# class ModelBoundary


```cpp
Inherits from Component<2U>
```



# class ModelBoundary


 Collection component describing a Boundary.



```cpp
Inherits from Component<dimension>
```



## Functions

### ModelBoundary

```cpp
public void ModelBoundary<value-parameter-0-0>(const ModelBoundary<dimension> & )
```


### operator=

```cpp
public ModelBoundary<dimension> & operator=(const ModelBoundary<dimension> & )
```


### ModelBoundary

```cpp
public void ModelBoundary<value-parameter-0-0>(ModelBoundary<dimension> && other)
```


### ~ModelBoundary

```cpp
public void ~ModelBoundary<value-parameter-0-0>()
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### component_type

```cpp
public ComponentType component_type()
```


### ModelBoundary

```cpp
public void ModelBoundary<value-parameter-0-0>(ModelBoundariesKey )
```


### set_model_boundary_name

```cpp
public void set_model_boundary_name(std::string_view name, ModelBoundariesBuilderKey )
```


### set_model_boundary_active

```cpp
public void set_model_boundary_active(bool active, ModelBoundariesBuilderKey )
```




