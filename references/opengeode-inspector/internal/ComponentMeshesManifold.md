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

# class ComponentMeshesManifold


# class ComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesManifold

```cpp
public void ComponentMeshesManifold<Model>(const ComponentMeshesManifold<Model> & )
```


### operator=

```cpp
public ComponentMeshesManifold<Model> & operator=(const ComponentMeshesManifold<Model> & )
```


### add_surfaces_meshes_non_manifold_vertices

```cpp
public void add_surfaces_meshes_non_manifold_vertices(InspectionIssuesMap<index_t> & issues_map)
```


### add_surfaces_meshes_non_manifold_edges

```cpp
public void add_surfaces_meshes_non_manifold_edges(InspectionIssuesMap<std::array<index_t, 2> > & issues_map)
```


### ComponentMeshesManifold

```cpp
protected void ComponentMeshesManifold<Model>(const Model & model)
```


### model

```cpp
protected const Model & model()
```




# class ComponentMeshesManifold


