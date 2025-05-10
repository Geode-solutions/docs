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

# class ComponentMeshesDegeneration


# class ComponentMeshesDegeneration


 Class for inspecting the degeneration of elements in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesDegeneration

```cpp
public void ComponentMeshesDegeneration<Model>(const ComponentMeshesDegeneration<Model> & )
```


### operator=

```cpp
public ComponentMeshesDegeneration<Model> & operator=(const ComponentMeshesDegeneration<Model> & )
```


### add_degenerated_edges

```cpp
public void add_degenerated_edges(InspectionIssuesMap<index_t> & issues_map)
```


### add_degenerated_polygons

```cpp
public void add_degenerated_polygons(InspectionIssuesMap<index_t> & issues_map)
```


### ComponentMeshesDegeneration

```cpp
protected void ComponentMeshesDegeneration<Model>(const Model & model)
```


### model

```cpp
protected const Model & model()
```




# class ComponentMeshesDegeneration


