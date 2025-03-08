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
public void ModelBoundary<>(const ModelBoundary<> & )
```


### operator=

```cpp
public ModelBoundary<> & operator=(const ModelBoundary<> & )
```


### ModelBoundary

```cpp
public void ModelBoundary<>(ModelBoundary<> && other)
```


### ~ModelBoundary

```cpp
public void ~ModelBoundary<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### ModelBoundary

```cpp
public void ModelBoundary<>(ModelBoundariesKey )
```


### set_model_boundary_name

```cpp
public void set_model_boundary_name(basic_string_view name, ModelBoundariesBuilderKey )
```




