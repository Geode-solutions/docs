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

# class ElementGraph


## Functions

### ElementGraph

```cpp
public void ElementGraph(const Meshes & meshes)
```


### ~ElementGraph

```cpp
public void ~ElementGraph()
```


### ElementGraph

```cpp
public void ElementGraph(ElementGraph && )
```


### operator=

```cpp
public ElementGraph & operator=(ElementGraph && )
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


### mesh_element

```cpp
public ComponentMeshElement mesh_element(index_t element_id)
```


### element_id

```cpp
public optional element_id(const MeshElement & mesh_element)
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


### get_mesh_elements

```cpp
public MeshElements get_mesh_elements(Span elements)
```


### find_or_create_graph_vertex

```cpp
public index_t find_or_create_graph_vertex(const ComponentMeshElement & cme)
```


### remove_graph_pair

```cpp
public void remove_graph_pair(index_t pair_id)
```


### add_pair

```cpp
public void add_pair(const ComponentMeshElement & first, const ComponentMeshElement & second)
```


### add_isolated_graph_node

```cpp
public void add_isolated_graph_node(const ComponentMeshElement & element)
```


### delete_all_pairs

```cpp
public void delete_all_pairs()
```


### resize_maps

```cpp
public void resize_maps(const Meshes & meshes)
```


### clean_graph

```cpp
public CleanMappings clean_graph()
```




