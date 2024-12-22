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

# class MeshElementsMap


## Functions

### MeshElementsMap

```cpp
public void MeshElementsMap(const Meshes & meshes)
```


### ~MeshElementsMap

```cpp
public void ~MeshElementsMap()
```


### MeshElementsMap

```cpp
public void MeshElementsMap(MeshElementsMap && )
```


### operator=

```cpp
public MeshElementsMap & operator=(MeshElementsMap && )
```


### nb_pairs

```cpp
public index_t nb_pairs()
```


### nb_elements

```cpp
public index_t nb_elements()
```


### empty

```cpp
public bool empty()
```


### graph

```cpp
public const Graph & graph()
```


### pair

```cpp
public array pair(index_t pair_id)
```


### surface_polygons

```cpp
public const TypedMeshElements & surface_polygons()
```


### curve_edges

```cpp
public const TypedMeshElements & curve_edges()
```


### point_set_points

```cpp
public const TypedMeshElements & point_set_points()
```


### element_maps

```cpp
public const MeshElements & element_maps()
```


### get_connected_component_elements

```cpp
public MeshElements get_connected_component_elements(Span connected_elements)
```


### find_or_create_graph_vertex

```cpp
public index_t find_or_create_graph_vertex(const ComponentMeshElement & cme)
```


### add_pair

```cpp
public void add_pair(const ComponentMeshElement & first, const ComponentMeshElement & second)
```


### add_isolated_graph_node

```cpp
public void add_isolated_graph_node(const ComponentMeshElement & element)
```




