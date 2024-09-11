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

# class ModelMeshesIntersections


# class ModelMeshesIntersections


 Class for inspecting the intersections of a Model meshes



## Functions

### ModelMeshesIntersections

```cpp
public void ModelMeshesIntersections<Model>(const ModelMeshesIntersections<Model> & )
```


### operator=

```cpp
public ModelMeshesIntersections<Model> & operator=(const ModelMeshesIntersections<Model> & )
```


### ModelMeshesIntersections

```cpp
public void ModelMeshesIntersections<Model>(const Model & model)
```


### ~ModelMeshesIntersections

```cpp
public void ~ModelMeshesIntersections<Model>()
```


### model_has_intersecting_surfaces

```cpp
public bool model_has_intersecting_surfaces()
```


### inspect_intersections

```cpp
public ElementsIntersectionsInspectionResult inspect_intersections()
```




# class ModelMeshesIntersections


