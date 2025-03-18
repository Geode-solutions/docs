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

# class ModelBuilderFromUniqueVertices


```cpp
Inherits from detail::CornersLinesBuilder<Section>
```



# class ModelBuilderFromUniqueVertices


```cpp
Inherits from detail::CornersLinesBuilder<Model>
```



## Functions

### ModelBuilderFromUniqueVertices

```cpp
public void ModelBuilderFromUniqueVertices<Model>(Model & model)
```


### ~ModelBuilderFromUniqueVertices

```cpp
public void ~ModelBuilderFromUniqueVertices<Model>()
```


### mappings

```cpp
public const ModelMappings & mappings()
```


### build_wireframe_step

```cpp
public void build_wireframe_step()
```


### update_model

```cpp
public void update_model()
```


### is_corner

```cpp
public bool is_corner(index_t wireframe_vertex_id)
```




# class ModelBuilderFromUniqueVertices


```cpp
Inherits from detail::CornersLinesBuilder<BRep>
```



