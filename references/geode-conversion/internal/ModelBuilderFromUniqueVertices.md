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



## Records

Parameters



## Functions

### ModelBuilderFromUniqueVertices

```cpp
public void ModelBuilderFromUniqueVertices<Model>(Model & model, const Parameters & parameters)
```


### ~ModelBuilderFromUniqueVertices

```cpp
public void ~ModelBuilderFromUniqueVertices<Model>()
```


### update_model

```cpp
public ModelMappings update_model()
```


### is_corner

```cpp
protected bool is_corner(index_t wireframe_vertex_id)
```


### build_wireframe_step

```cpp
protected void build_wireframe_step()
```




# class ModelBuilderFromUniqueVertices


```cpp
Inherits from detail::CornersLinesBuilder<BRep>
```



