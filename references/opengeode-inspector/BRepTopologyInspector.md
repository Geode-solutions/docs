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

# class BRepTopologyInspector


 Class for inspecting the topology of a BRep model corners



```cpp
Inherits from BRepCornersTopology, BRepLinesTopology, BRepSurfacesTopology, BRepBlocksTopology
```



## Functions

### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRepTopologyInspector & )
```


### operator=

```cpp
public BRepTopologyInspector & operator=(const BRepTopologyInspector & )
```


### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRep & brep)
```


### ~BRepTopologyInspector

```cpp
public void ~BRepTopologyInspector()
```


### brep_topology_is_valid

```cpp
public bool brep_topology_is_valid()
```


 Checks if the brep is topologically valid through the unique vertices.

### brep_unique_vertices_are_bijectively_linked_to_an_existing_component_vertex

```cpp
public bool brep_unique_vertices_are_bijectively_linked_to_an_existing_component_vertex()
```


### inspect_brep_topology

```cpp
public BRepTopologyInspectionResult inspect_brep_topology()
```




