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

# class ComponentMeshesAdjacency


# class ComponentMeshesAdjacency


 Class for inspecting the adjacency of edges in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesAdjacency

```cpp
public void ComponentMeshesAdjacency<Model>(const ComponentMeshesAdjacency<Model> & )
```


### operator=

```cpp
public ComponentMeshesAdjacency<Model> & operator=(const ComponentMeshesAdjacency<Model> & )
```


### add_surfaces_edges_with_wrong_adjacencies

```cpp
public void add_surfaces_edges_with_wrong_adjacencies(InspectionIssuesMap<PolygonEdge> & issues_map)
```


### ComponentMeshesAdjacency

```cpp
protected void ComponentMeshesAdjacency<Model>(const Model & model)
```


### model

```cpp
protected const Model & model()
```




# class ComponentMeshesAdjacency


