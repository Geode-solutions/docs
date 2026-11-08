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


## Members

```cpp
public static const auto dimension

```



## Functions

### ModelBuilderFromUniqueVertices

```cpp
public void ModelBuilderFromUniqueVertices<Model>(Model & model, const ModelBuildTopologyParameters & parameters)
```


### ~ModelBuilderFromUniqueVertices

```cpp
public void ~ModelBuilderFromUniqueVertices<Model>()
```


### update_model

```cpp
public ModelMappings update_model()
```


 Rebuilds the model topology from its unique vertices.

**return** the mappings from the input components and their mesh items to the output ones. An item absent from the mesh mappings is unchanged, and this applies per item: a component listed in unchanged_components may still have item-level mappings when its mesh elements or vertices were renumbered.



# class ModelBuilderFromUniqueVertices


## Members

```cpp
public static const auto dimension

```



# class ModelBuilderFromUniqueVertices


## Members

```cpp
public static const auto dimension

```



