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

# class SectionTopologyInspector


 Class for inspecting the topology of a Section model corners



```cpp
Inherits from SectionCornersTopology, SectionLinesTopology, SectionSurfacesTopology
```



## Functions

### SectionTopologyInspector

```cpp
public void SectionTopologyInspector(const SectionTopologyInspector & )
```


### operator=

```cpp
public SectionTopologyInspector & operator=(const SectionTopologyInspector & )
```


### SectionTopologyInspector

```cpp
public void SectionTopologyInspector(const Section & section)
```


### ~SectionTopologyInspector

```cpp
public void ~SectionTopologyInspector()
```


### section_topology_is_valid

```cpp
public bool section_topology_is_valid()
```


 Checks if the section is topologically valid through the unique vertices.

### section_meshed_components_are_linked_to_unique_vertices

```cpp
public bool section_meshed_components_are_linked_to_unique_vertices()
```


### section_unique_vertices_are_linked_to_a_component_vertex

```cpp
public bool section_unique_vertices_are_linked_to_a_component_vertex()
```


### inspect_section_topology

```cpp
public SectionTopologyInspectionResult inspect_section_topology()
```




